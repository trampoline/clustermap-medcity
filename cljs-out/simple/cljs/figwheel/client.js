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
var log__delegate = function (p__31618,args){var map__31620 = p__31618;var map__31620__$1 = ((cljs.core.seq_QMARK_.call(null,map__31620))?cljs.core.apply.call(null,cljs.core.hash_map,map__31620):map__31620);var debug = cljs.core.get.call(null,map__31620__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__31618,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__31618,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31621){
var p__31618 = cljs.core.first(arglist__31621);
var args = cljs.core.rest(arglist__31621);
return log__delegate(p__31618,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__31622){var map__31624 = p__31622;var map__31624__$1 = ((cljs.core.seq_QMARK_.call(null,map__31624))?cljs.core.apply.call(null,cljs.core.hash_map,map__31624):map__31624);var websocket_url = cljs.core.get.call(null,map__31624__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__31625,callback){var map__31627 = p__31625;var map__31627__$1 = ((cljs.core.seq_QMARK_.call(null,map__31627))?cljs.core.apply.call(null,cljs.core.hash_map,map__31627):map__31627);var msg = map__31627__$1;var dependency_file = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__31627,map__31627__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__31627,map__31627__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__31628,p__31629){var map__31632 = p__31628;var map__31632__$1 = ((cljs.core.seq_QMARK_.call(null,map__31632))?cljs.core.apply.call(null,cljs.core.hash_map,map__31632):map__31632);var opts = map__31632__$1;var url_rewriter = cljs.core.get.call(null,map__31632__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__31633 = p__31629;var map__31633__$1 = ((cljs.core.seq_QMARK_.call(null,map__31633))?cljs.core.apply.call(null,cljs.core.hash_map,map__31633):map__31633);var d = map__31633__$1;var file = cljs.core.get.call(null,map__31633__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__31634,p__31635){var map__31677 = p__31634;var map__31677__$1 = ((cljs.core.seq_QMARK_.call(null,map__31677))?cljs.core.apply.call(null,cljs.core.hash_map,map__31677):map__31677);var opts = map__31677__$1;var on_jsload = cljs.core.get.call(null,map__31677__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__31677__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__31678 = p__31635;var map__31678__$1 = ((cljs.core.seq_QMARK_.call(null,map__31678))?cljs.core.apply.call(null,cljs.core.hash_map,map__31678):map__31678);var files = cljs.core.get.call(null,map__31678__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31677,map__31677__$1,opts,on_jsload,before_jsload,map__31678,map__31678__$1,files){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31677,map__31677__$1,opts,on_jsload,before_jsload,map__31678,map__31678__$1,files){
return (function (state_31701){var state_val_31702 = (state_31701[(1)]);if((state_val_31702 === (6)))
{var inst_31683 = (state_31701[(7)]);var inst_31692 = (state_31701[(2)]);var inst_31693 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31694 = [inst_31683];var inst_31695 = (new cljs.core.PersistentVector(null,1,(5),inst_31693,inst_31694,null));var inst_31696 = cljs.core.apply.call(null,on_jsload,inst_31695);var state_31701__$1 = (function (){var statearr_31703 = state_31701;(statearr_31703[(8)] = inst_31692);
return statearr_31703;
})();var statearr_31704_31718 = state_31701__$1;(statearr_31704_31718[(2)] = inst_31696);
(statearr_31704_31718[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31702 === (5)))
{var inst_31699 = (state_31701[(2)]);var state_31701__$1 = state_31701;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31701__$1,inst_31699);
} else
{if((state_val_31702 === (4)))
{var state_31701__$1 = state_31701;var statearr_31705_31719 = state_31701__$1;(statearr_31705_31719[(2)] = null);
(statearr_31705_31719[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31702 === (3)))
{var inst_31683 = (state_31701[(7)]);var inst_31686 = console.debug("Figwheel: loaded these files");var inst_31687 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31683);var inst_31688 = cljs.core.prn_str.call(null,inst_31687);var inst_31689 = console.log(inst_31688);var inst_31690 = cljs.core.async.timeout.call(null,(10));var state_31701__$1 = (function (){var statearr_31706 = state_31701;(statearr_31706[(9)] = inst_31689);
(statearr_31706[(10)] = inst_31686);
return statearr_31706;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31701__$1,(6),inst_31690);
} else
{if((state_val_31702 === (2)))
{var inst_31683 = (state_31701[(7)]);var inst_31683__$1 = (state_31701[(2)]);var inst_31684 = cljs.core.not_empty.call(null,inst_31683__$1);var state_31701__$1 = (function (){var statearr_31707 = state_31701;(statearr_31707[(7)] = inst_31683__$1);
return statearr_31707;
})();if(cljs.core.truth_(inst_31684))
{var statearr_31708_31720 = state_31701__$1;(statearr_31708_31720[(1)] = (3));
} else
{var statearr_31709_31721 = state_31701__$1;(statearr_31709_31721[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31702 === (1)))
{var inst_31679 = before_jsload.call(null,files);var inst_31680 = figwheel.client.add_request_urls.call(null,opts,files);var inst_31681 = figwheel.client.load_all_js_files.call(null,inst_31680);var state_31701__$1 = (function (){var statearr_31710 = state_31701;(statearr_31710[(11)] = inst_31679);
return statearr_31710;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31701__$1,(2),inst_31681);
} else
{return null;
}
}
}
}
}
}
});})(c__9125__auto__,map__31677,map__31677__$1,opts,on_jsload,before_jsload,map__31678,map__31678__$1,files))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31677,map__31677__$1,opts,on_jsload,before_jsload,map__31678,map__31678__$1,files){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31714 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31714[(0)] = state_machine__9111__auto__);
(statearr_31714[(1)] = (1));
return statearr_31714;
});
var state_machine__9111__auto____1 = (function (state_31701){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31701);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31715){if((e31715 instanceof Object))
{var ex__9114__auto__ = e31715;var statearr_31716_31722 = state_31701;(statearr_31716_31722[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31701);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31715;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31723 = state_31701;
state_31701 = G__31723;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31701){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31677,map__31677__$1,opts,on_jsload,before_jsload,map__31678,map__31678__$1,files))
})();var state__9127__auto__ = (function (){var statearr_31717 = f__9126__auto__.call(null);(statearr_31717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31717;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31677,map__31677__$1,opts,on_jsload,before_jsload,map__31678,map__31678__$1,files))
);
return c__9125__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__31724,link_href){var map__31726 = p__31724;var map__31726__$1 = ((cljs.core.seq_QMARK_.call(null,map__31726))?cljs.core.apply.call(null,cljs.core.hash_map,map__31726):map__31726);var request_url = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_31747){var state_val_31748 = (state_31747[(1)]);if((state_val_31748 === (2)))
{var inst_31744 = (state_31747[(2)]);var inst_31745 = parent.removeChild(orig_link);var state_31747__$1 = (function (){var statearr_31749 = state_31747;(statearr_31749[(7)] = inst_31744);
return statearr_31749;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31747__$1,inst_31745);
} else
{if((state_val_31748 === (1)))
{var inst_31742 = cljs.core.async.timeout.call(null,(200));var state_31747__$1 = state_31747;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31747__$1,(2),inst_31742);
} else
{return null;
}
}
});})(c__9125__auto__,parent))
;return ((function (switch__9110__auto__,c__9125__auto__,parent){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31753 = [null,null,null,null,null,null,null,null];(statearr_31753[(0)] = state_machine__9111__auto__);
(statearr_31753[(1)] = (1));
return statearr_31753;
});
var state_machine__9111__auto____1 = (function (state_31747){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31747);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31754){if((e31754 instanceof Object))
{var ex__9114__auto__ = e31754;var statearr_31755_31757 = state_31747;(statearr_31755_31757[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31747);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31754;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31758 = state_31747;
state_31747 = G__31758;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31747){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,parent))
})();var state__9127__auto__ = (function (){var statearr_31756 = f__9126__auto__.call(null);(statearr_31756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31756;
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
figwheel.client.reload_css_file = (function reload_css_file(p__31759){var map__31761 = p__31759;var map__31761__$1 = ((cljs.core.seq_QMARK_.call(null,map__31761))?cljs.core.apply.call(null,cljs.core.hash_map,map__31761):map__31761);var f_data = map__31761__$1;var request_url = cljs.core.get.call(null,map__31761__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31761__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__31762,files_msg){var map__31784 = p__31762;var map__31784__$1 = ((cljs.core.seq_QMARK_.call(null,map__31784))?cljs.core.apply.call(null,cljs.core.hash_map,map__31784):map__31784);var opts = map__31784__$1;var on_cssload = cljs.core.get.call(null,map__31784__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__31785_31805 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__31786_31806 = null;var count__31787_31807 = (0);var i__31788_31808 = (0);while(true){
if((i__31788_31808 < count__31787_31807))
{var f_31809 = cljs.core._nth.call(null,chunk__31786_31806,i__31788_31808);figwheel.client.reload_css_file.call(null,f_31809);
{
var G__31810 = seq__31785_31805;
var G__31811 = chunk__31786_31806;
var G__31812 = count__31787_31807;
var G__31813 = (i__31788_31808 + (1));
seq__31785_31805 = G__31810;
chunk__31786_31806 = G__31811;
count__31787_31807 = G__31812;
i__31788_31808 = G__31813;
continue;
}
} else
{var temp__4126__auto___31814 = cljs.core.seq.call(null,seq__31785_31805);if(temp__4126__auto___31814)
{var seq__31785_31815__$1 = temp__4126__auto___31814;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31785_31815__$1))
{var c__4408__auto___31816 = cljs.core.chunk_first.call(null,seq__31785_31815__$1);{
var G__31817 = cljs.core.chunk_rest.call(null,seq__31785_31815__$1);
var G__31818 = c__4408__auto___31816;
var G__31819 = cljs.core.count.call(null,c__4408__auto___31816);
var G__31820 = (0);
seq__31785_31805 = G__31817;
chunk__31786_31806 = G__31818;
count__31787_31807 = G__31819;
i__31788_31808 = G__31820;
continue;
}
} else
{var f_31821 = cljs.core.first.call(null,seq__31785_31815__$1);figwheel.client.reload_css_file.call(null,f_31821);
{
var G__31822 = cljs.core.next.call(null,seq__31785_31815__$1);
var G__31823 = null;
var G__31824 = (0);
var G__31825 = (0);
seq__31785_31805 = G__31822;
chunk__31786_31806 = G__31823;
count__31787_31807 = G__31824;
i__31788_31808 = G__31825;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31784,map__31784__$1,opts,on_cssload){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31784,map__31784__$1,opts,on_cssload){
return (function (state_31795){var state_val_31796 = (state_31795[(1)]);if((state_val_31796 === (2)))
{var inst_31791 = (state_31795[(2)]);var inst_31792 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_31793 = on_cssload.call(null,inst_31792);var state_31795__$1 = (function (){var statearr_31797 = state_31795;(statearr_31797[(7)] = inst_31791);
return statearr_31797;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31795__$1,inst_31793);
} else
{if((state_val_31796 === (1)))
{var inst_31789 = cljs.core.async.timeout.call(null,(100));var state_31795__$1 = state_31795;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31795__$1,(2),inst_31789);
} else
{return null;
}
}
});})(c__9125__auto__,map__31784,map__31784__$1,opts,on_cssload))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31784,map__31784__$1,opts,on_cssload){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31801 = [null,null,null,null,null,null,null,null];(statearr_31801[(0)] = state_machine__9111__auto__);
(statearr_31801[(1)] = (1));
return statearr_31801;
});
var state_machine__9111__auto____1 = (function (state_31795){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31795);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31802){if((e31802 instanceof Object))
{var ex__9114__auto__ = e31802;var statearr_31803_31826 = state_31795;(statearr_31803_31826[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31795);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31802;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31827 = state_31795;
state_31795 = G__31827;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31795){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31784,map__31784__$1,opts,on_cssload))
})();var state__9127__auto__ = (function (){var statearr_31804 = f__9126__auto__.call(null);(statearr_31804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31784,map__31784__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31828){var map__31833 = p__31828;var map__31833__$1 = ((cljs.core.seq_QMARK_.call(null,map__31833))?cljs.core.apply.call(null,cljs.core.hash_map,map__31833):map__31833);var opts = map__31833__$1;var on_compile_fail = cljs.core.get.call(null,map__31833__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31833__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31833__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31833__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31833,map__31833__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31834 = cljs.core._EQ_;var expr__31835 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31834.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31835)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31834.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31835)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31834.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31835)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31833,map__31833__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31833,map__31833__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31833,map__31833__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31833,map__31833__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31833,map__31833__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31833,map__31833__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31833,map__31833__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31833,map__31833__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31833,map__31833__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31840 = {"detail":url};return obj31840;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31841){var map__31843 = p__31841;var map__31843__$1 = ((cljs.core.seq_QMARK_.call(null,map__31843))?cljs.core.apply.call(null,cljs.core.hash_map,map__31843):map__31843);var class$ = cljs.core.get.call(null,map__31843__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31843__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31844){var map__31850 = p__31844;var map__31850__$1 = ((cljs.core.seq_QMARK_.call(null,map__31850))?cljs.core.apply.call(null,cljs.core.hash_map,map__31850):map__31850);var ed = map__31850__$1;var exception_data = cljs.core.get.call(null,map__31850__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31850__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31851_31855 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31852_31856 = null;var count__31853_31857 = (0);var i__31854_31858 = (0);while(true){
if((i__31854_31858 < count__31853_31857))
{var msg_31859 = cljs.core._nth.call(null,chunk__31852_31856,i__31854_31858);console.log(msg_31859);
{
var G__31860 = seq__31851_31855;
var G__31861 = chunk__31852_31856;
var G__31862 = count__31853_31857;
var G__31863 = (i__31854_31858 + (1));
seq__31851_31855 = G__31860;
chunk__31852_31856 = G__31861;
count__31853_31857 = G__31862;
i__31854_31858 = G__31863;
continue;
}
} else
{var temp__4126__auto___31864 = cljs.core.seq.call(null,seq__31851_31855);if(temp__4126__auto___31864)
{var seq__31851_31865__$1 = temp__4126__auto___31864;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31851_31865__$1))
{var c__4408__auto___31866 = cljs.core.chunk_first.call(null,seq__31851_31865__$1);{
var G__31867 = cljs.core.chunk_rest.call(null,seq__31851_31865__$1);
var G__31868 = c__4408__auto___31866;
var G__31869 = cljs.core.count.call(null,c__4408__auto___31866);
var G__31870 = (0);
seq__31851_31855 = G__31867;
chunk__31852_31856 = G__31868;
count__31853_31857 = G__31869;
i__31854_31858 = G__31870;
continue;
}
} else
{var msg_31871 = cljs.core.first.call(null,seq__31851_31865__$1);console.log(msg_31871);
{
var G__31872 = cljs.core.next.call(null,seq__31851_31865__$1);
var G__31873 = null;
var G__31874 = (0);
var G__31875 = (0);
seq__31851_31855 = G__31872;
chunk__31852_31856 = G__31873;
count__31853_31857 = G__31874;
i__31854_31858 = G__31875;
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
var watch_and_reload__delegate = function (p__31876){var map__31878 = p__31876;var map__31878__$1 = ((cljs.core.seq_QMARK_.call(null,map__31878))?cljs.core.apply.call(null,cljs.core.hash_map,map__31878):map__31878);var opts = map__31878__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31876 = null;if (arguments.length > 0) {
  p__31876 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31876);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31879){
var p__31876 = cljs.core.seq(arglist__31879);
return watch_and_reload__delegate(p__31876);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
