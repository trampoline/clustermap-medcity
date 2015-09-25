// Compiled by ClojureScript 0.0-2356
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__31623,args){var map__31625 = p__31623;var map__31625__$1 = ((cljs.core.seq_QMARK_.call(null,map__31625))?cljs.core.apply.call(null,cljs.core.hash_map,map__31625):map__31625);var debug = cljs.core.get.call(null,map__31625__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__31623,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__31623,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31626){
var p__31623 = cljs.core.first(arglist__31626);
var args = cljs.core.rest(arglist__31626);
return log__delegate(p__31623,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__31627){var map__31629 = p__31627;var map__31629__$1 = ((cljs.core.seq_QMARK_.call(null,map__31629))?cljs.core.apply.call(null,cljs.core.hash_map,map__31629):map__31629);var websocket_url = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__31630,callback){var map__31632 = p__31630;var map__31632__$1 = ((cljs.core.seq_QMARK_.call(null,map__31632))?cljs.core.apply.call(null,cljs.core.hash_map,map__31632):map__31632);var msg = map__31632__$1;var dependency_file = cljs.core.get.call(null,map__31632__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__31632__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__31632__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__31632,map__31632__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__31632,map__31632__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__31633,p__31634){var map__31637 = p__31633;var map__31637__$1 = ((cljs.core.seq_QMARK_.call(null,map__31637))?cljs.core.apply.call(null,cljs.core.hash_map,map__31637):map__31637);var opts = map__31637__$1;var url_rewriter = cljs.core.get.call(null,map__31637__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__31638 = p__31634;var map__31638__$1 = ((cljs.core.seq_QMARK_.call(null,map__31638))?cljs.core.apply.call(null,cljs.core.hash_map,map__31638):map__31638);var d = map__31638__$1;var file = cljs.core.get.call(null,map__31638__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__31639,p__31640){var map__31682 = p__31639;var map__31682__$1 = ((cljs.core.seq_QMARK_.call(null,map__31682))?cljs.core.apply.call(null,cljs.core.hash_map,map__31682):map__31682);var opts = map__31682__$1;var on_jsload = cljs.core.get.call(null,map__31682__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__31682__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__31683 = p__31640;var map__31683__$1 = ((cljs.core.seq_QMARK_.call(null,map__31683))?cljs.core.apply.call(null,cljs.core.hash_map,map__31683):map__31683);var files = cljs.core.get.call(null,map__31683__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31682,map__31682__$1,opts,on_jsload,before_jsload,map__31683,map__31683__$1,files){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31682,map__31682__$1,opts,on_jsload,before_jsload,map__31683,map__31683__$1,files){
return (function (state_31706){var state_val_31707 = (state_31706[(1)]);if((state_val_31707 === (6)))
{var inst_31688 = (state_31706[(7)]);var inst_31697 = (state_31706[(2)]);var inst_31698 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31699 = [inst_31688];var inst_31700 = (new cljs.core.PersistentVector(null,1,(5),inst_31698,inst_31699,null));var inst_31701 = cljs.core.apply.call(null,on_jsload,inst_31700);var state_31706__$1 = (function (){var statearr_31708 = state_31706;(statearr_31708[(8)] = inst_31697);
return statearr_31708;
})();var statearr_31709_31723 = state_31706__$1;(statearr_31709_31723[(2)] = inst_31701);
(statearr_31709_31723[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31707 === (5)))
{var inst_31704 = (state_31706[(2)]);var state_31706__$1 = state_31706;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31706__$1,inst_31704);
} else
{if((state_val_31707 === (4)))
{var state_31706__$1 = state_31706;var statearr_31710_31724 = state_31706__$1;(statearr_31710_31724[(2)] = null);
(statearr_31710_31724[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31707 === (3)))
{var inst_31688 = (state_31706[(7)]);var inst_31691 = console.debug("Figwheel: loaded these files");var inst_31692 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31688);var inst_31693 = cljs.core.prn_str.call(null,inst_31692);var inst_31694 = console.log(inst_31693);var inst_31695 = cljs.core.async.timeout.call(null,(10));var state_31706__$1 = (function (){var statearr_31711 = state_31706;(statearr_31711[(9)] = inst_31691);
(statearr_31711[(10)] = inst_31694);
return statearr_31711;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31706__$1,(6),inst_31695);
} else
{if((state_val_31707 === (2)))
{var inst_31688 = (state_31706[(7)]);var inst_31688__$1 = (state_31706[(2)]);var inst_31689 = cljs.core.not_empty.call(null,inst_31688__$1);var state_31706__$1 = (function (){var statearr_31712 = state_31706;(statearr_31712[(7)] = inst_31688__$1);
return statearr_31712;
})();if(cljs.core.truth_(inst_31689))
{var statearr_31713_31725 = state_31706__$1;(statearr_31713_31725[(1)] = (3));
} else
{var statearr_31714_31726 = state_31706__$1;(statearr_31714_31726[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31707 === (1)))
{var inst_31684 = before_jsload.call(null,files);var inst_31685 = figwheel.client.add_request_urls.call(null,opts,files);var inst_31686 = figwheel.client.load_all_js_files.call(null,inst_31685);var state_31706__$1 = (function (){var statearr_31715 = state_31706;(statearr_31715[(11)] = inst_31684);
return statearr_31715;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31706__$1,(2),inst_31686);
} else
{return null;
}
}
}
}
}
}
});})(c__9125__auto__,map__31682,map__31682__$1,opts,on_jsload,before_jsload,map__31683,map__31683__$1,files))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31682,map__31682__$1,opts,on_jsload,before_jsload,map__31683,map__31683__$1,files){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31719 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31719[(0)] = state_machine__9111__auto__);
(statearr_31719[(1)] = (1));
return statearr_31719;
});
var state_machine__9111__auto____1 = (function (state_31706){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31706);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31720){if((e31720 instanceof Object))
{var ex__9114__auto__ = e31720;var statearr_31721_31727 = state_31706;(statearr_31721_31727[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31706);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31720;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31728 = state_31706;
state_31706 = G__31728;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31706){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31682,map__31682__$1,opts,on_jsload,before_jsload,map__31683,map__31683__$1,files))
})();var state__9127__auto__ = (function (){var statearr_31722 = f__9126__auto__.call(null);(statearr_31722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31722;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31682,map__31682__$1,opts,on_jsload,before_jsload,map__31683,map__31683__$1,files))
);
return c__9125__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__31729,link_href){var map__31731 = p__31729;var map__31731__$1 = ((cljs.core.seq_QMARK_.call(null,map__31731))?cljs.core.apply.call(null,cljs.core.hash_map,map__31731):map__31731);var request_url = cljs.core.get.call(null,map__31731__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31731__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,parent){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,parent){
return (function (state_31752){var state_val_31753 = (state_31752[(1)]);if((state_val_31753 === (2)))
{var inst_31749 = (state_31752[(2)]);var inst_31750 = parent.removeChild(orig_link);var state_31752__$1 = (function (){var statearr_31754 = state_31752;(statearr_31754[(7)] = inst_31749);
return statearr_31754;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31752__$1,inst_31750);
} else
{if((state_val_31753 === (1)))
{var inst_31747 = cljs.core.async.timeout.call(null,(200));var state_31752__$1 = state_31752;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31752__$1,(2),inst_31747);
} else
{return null;
}
}
});})(c__9125__auto__,parent))
;return ((function (switch__9110__auto__,c__9125__auto__,parent){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31758 = [null,null,null,null,null,null,null,null];(statearr_31758[(0)] = state_machine__9111__auto__);
(statearr_31758[(1)] = (1));
return statearr_31758;
});
var state_machine__9111__auto____1 = (function (state_31752){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31752);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31759){if((e31759 instanceof Object))
{var ex__9114__auto__ = e31759;var statearr_31760_31762 = state_31752;(statearr_31760_31762[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31752);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31759;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31763 = state_31752;
state_31752 = G__31763;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31752){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,parent))
})();var state__9127__auto__ = (function (){var statearr_31761 = f__9126__auto__.call(null);(statearr_31761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,parent))
);
return c__9125__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__31764){var map__31766 = p__31764;var map__31766__$1 = ((cljs.core.seq_QMARK_.call(null,map__31766))?cljs.core.apply.call(null,cljs.core.hash_map,map__31766):map__31766);var f_data = map__31766__$1;var request_url = cljs.core.get.call(null,map__31766__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31766__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__31767,files_msg){var map__31789 = p__31767;var map__31789__$1 = ((cljs.core.seq_QMARK_.call(null,map__31789))?cljs.core.apply.call(null,cljs.core.hash_map,map__31789):map__31789);var opts = map__31789__$1;var on_cssload = cljs.core.get.call(null,map__31789__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__31790_31810 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__31791_31811 = null;var count__31792_31812 = (0);var i__31793_31813 = (0);while(true){
if((i__31793_31813 < count__31792_31812))
{var f_31814 = cljs.core._nth.call(null,chunk__31791_31811,i__31793_31813);figwheel.client.reload_css_file.call(null,f_31814);
{
var G__31815 = seq__31790_31810;
var G__31816 = chunk__31791_31811;
var G__31817 = count__31792_31812;
var G__31818 = (i__31793_31813 + (1));
seq__31790_31810 = G__31815;
chunk__31791_31811 = G__31816;
count__31792_31812 = G__31817;
i__31793_31813 = G__31818;
continue;
}
} else
{var temp__4126__auto___31819 = cljs.core.seq.call(null,seq__31790_31810);if(temp__4126__auto___31819)
{var seq__31790_31820__$1 = temp__4126__auto___31819;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31790_31820__$1))
{var c__4408__auto___31821 = cljs.core.chunk_first.call(null,seq__31790_31820__$1);{
var G__31822 = cljs.core.chunk_rest.call(null,seq__31790_31820__$1);
var G__31823 = c__4408__auto___31821;
var G__31824 = cljs.core.count.call(null,c__4408__auto___31821);
var G__31825 = (0);
seq__31790_31810 = G__31822;
chunk__31791_31811 = G__31823;
count__31792_31812 = G__31824;
i__31793_31813 = G__31825;
continue;
}
} else
{var f_31826 = cljs.core.first.call(null,seq__31790_31820__$1);figwheel.client.reload_css_file.call(null,f_31826);
{
var G__31827 = cljs.core.next.call(null,seq__31790_31820__$1);
var G__31828 = null;
var G__31829 = (0);
var G__31830 = (0);
seq__31790_31810 = G__31827;
chunk__31791_31811 = G__31828;
count__31792_31812 = G__31829;
i__31793_31813 = G__31830;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31789,map__31789__$1,opts,on_cssload){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31789,map__31789__$1,opts,on_cssload){
return (function (state_31800){var state_val_31801 = (state_31800[(1)]);if((state_val_31801 === (2)))
{var inst_31796 = (state_31800[(2)]);var inst_31797 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_31798 = on_cssload.call(null,inst_31797);var state_31800__$1 = (function (){var statearr_31802 = state_31800;(statearr_31802[(7)] = inst_31796);
return statearr_31802;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31800__$1,inst_31798);
} else
{if((state_val_31801 === (1)))
{var inst_31794 = cljs.core.async.timeout.call(null,(100));var state_31800__$1 = state_31800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31800__$1,(2),inst_31794);
} else
{return null;
}
}
});})(c__9125__auto__,map__31789,map__31789__$1,opts,on_cssload))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31789,map__31789__$1,opts,on_cssload){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31806 = [null,null,null,null,null,null,null,null];(statearr_31806[(0)] = state_machine__9111__auto__);
(statearr_31806[(1)] = (1));
return statearr_31806;
});
var state_machine__9111__auto____1 = (function (state_31800){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31800);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31807){if((e31807 instanceof Object))
{var ex__9114__auto__ = e31807;var statearr_31808_31831 = state_31800;(statearr_31808_31831[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31800);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31807;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31832 = state_31800;
state_31800 = G__31832;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31800){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31789,map__31789__$1,opts,on_cssload))
})();var state__9127__auto__ = (function (){var statearr_31809 = f__9126__auto__.call(null);(statearr_31809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31809;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31789,map__31789__$1,opts,on_cssload))
);
return c__9125__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31833){var map__31838 = p__31833;var map__31838__$1 = ((cljs.core.seq_QMARK_.call(null,map__31838))?cljs.core.apply.call(null,cljs.core.hash_map,map__31838):map__31838);var opts = map__31838__$1;var on_compile_fail = cljs.core.get.call(null,map__31838__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31838__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31838__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31838__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31838,map__31838__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31839 = cljs.core._EQ_;var expr__31840 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31839.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31840)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31839.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31840)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31839.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31840)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31838,map__31838__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31838,map__31838__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31838,map__31838__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31838,map__31838__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31838,map__31838__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31838,map__31838__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31838,map__31838__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31838,map__31838__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31838,map__31838__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31845 = {"detail":url};return obj31845;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31846){var map__31848 = p__31846;var map__31848__$1 = ((cljs.core.seq_QMARK_.call(null,map__31848))?cljs.core.apply.call(null,cljs.core.hash_map,map__31848):map__31848);var class$ = cljs.core.get.call(null,map__31848__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31848__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31849){var map__31855 = p__31849;var map__31855__$1 = ((cljs.core.seq_QMARK_.call(null,map__31855))?cljs.core.apply.call(null,cljs.core.hash_map,map__31855):map__31855);var ed = map__31855__$1;var exception_data = cljs.core.get.call(null,map__31855__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31855__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31856_31860 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31857_31861 = null;var count__31858_31862 = (0);var i__31859_31863 = (0);while(true){
if((i__31859_31863 < count__31858_31862))
{var msg_31864 = cljs.core._nth.call(null,chunk__31857_31861,i__31859_31863);console.log(msg_31864);
{
var G__31865 = seq__31856_31860;
var G__31866 = chunk__31857_31861;
var G__31867 = count__31858_31862;
var G__31868 = (i__31859_31863 + (1));
seq__31856_31860 = G__31865;
chunk__31857_31861 = G__31866;
count__31858_31862 = G__31867;
i__31859_31863 = G__31868;
continue;
}
} else
{var temp__4126__auto___31869 = cljs.core.seq.call(null,seq__31856_31860);if(temp__4126__auto___31869)
{var seq__31856_31870__$1 = temp__4126__auto___31869;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31856_31870__$1))
{var c__4408__auto___31871 = cljs.core.chunk_first.call(null,seq__31856_31870__$1);{
var G__31872 = cljs.core.chunk_rest.call(null,seq__31856_31870__$1);
var G__31873 = c__4408__auto___31871;
var G__31874 = cljs.core.count.call(null,c__4408__auto___31871);
var G__31875 = (0);
seq__31856_31860 = G__31872;
chunk__31857_31861 = G__31873;
count__31858_31862 = G__31874;
i__31859_31863 = G__31875;
continue;
}
} else
{var msg_31876 = cljs.core.first.call(null,seq__31856_31870__$1);console.log(msg_31876);
{
var G__31877 = cljs.core.next.call(null,seq__31856_31870__$1);
var G__31878 = null;
var G__31879 = (0);
var G__31880 = (0);
seq__31856_31860 = G__31877;
chunk__31857_31861 = G__31878;
count__31858_31862 = G__31879;
i__31859_31863 = G__31880;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__31881){var map__31883 = p__31881;var map__31883__$1 = ((cljs.core.seq_QMARK_.call(null,map__31883))?cljs.core.apply.call(null,cljs.core.hash_map,map__31883):map__31883);var opts = map__31883__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31881 = null;if (arguments.length > 0) {
  p__31881 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31881);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31884){
var p__31881 = cljs.core.seq(arglist__31884);
return watch_and_reload__delegate(p__31881);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
