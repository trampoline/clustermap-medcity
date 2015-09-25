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
var log__delegate = function (p__31627,args){var map__31629 = p__31627;var map__31629__$1 = ((cljs.core.seq_QMARK_.call(null,map__31629))?cljs.core.apply.call(null,cljs.core.hash_map,map__31629):map__31629);var debug = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__31627,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__31627,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31630){
var p__31627 = cljs.core.first(arglist__31630);
var args = cljs.core.rest(arglist__31630);
return log__delegate(p__31627,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__31631){var map__31633 = p__31631;var map__31633__$1 = ((cljs.core.seq_QMARK_.call(null,map__31633))?cljs.core.apply.call(null,cljs.core.hash_map,map__31633):map__31633);var websocket_url = cljs.core.get.call(null,map__31633__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__31634,callback){var map__31636 = p__31634;var map__31636__$1 = ((cljs.core.seq_QMARK_.call(null,map__31636))?cljs.core.apply.call(null,cljs.core.hash_map,map__31636):map__31636);var msg = map__31636__$1;var dependency_file = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__31636,map__31636__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__31636,map__31636__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__31637,p__31638){var map__31641 = p__31637;var map__31641__$1 = ((cljs.core.seq_QMARK_.call(null,map__31641))?cljs.core.apply.call(null,cljs.core.hash_map,map__31641):map__31641);var opts = map__31641__$1;var url_rewriter = cljs.core.get.call(null,map__31641__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__31642 = p__31638;var map__31642__$1 = ((cljs.core.seq_QMARK_.call(null,map__31642))?cljs.core.apply.call(null,cljs.core.hash_map,map__31642):map__31642);var d = map__31642__$1;var file = cljs.core.get.call(null,map__31642__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__31643,p__31644){var map__31686 = p__31643;var map__31686__$1 = ((cljs.core.seq_QMARK_.call(null,map__31686))?cljs.core.apply.call(null,cljs.core.hash_map,map__31686):map__31686);var opts = map__31686__$1;var on_jsload = cljs.core.get.call(null,map__31686__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__31686__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__31687 = p__31644;var map__31687__$1 = ((cljs.core.seq_QMARK_.call(null,map__31687))?cljs.core.apply.call(null,cljs.core.hash_map,map__31687):map__31687);var files = cljs.core.get.call(null,map__31687__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31686,map__31686__$1,opts,on_jsload,before_jsload,map__31687,map__31687__$1,files){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31686,map__31686__$1,opts,on_jsload,before_jsload,map__31687,map__31687__$1,files){
return (function (state_31710){var state_val_31711 = (state_31710[(1)]);if((state_val_31711 === (6)))
{var inst_31692 = (state_31710[(7)]);var inst_31701 = (state_31710[(2)]);var inst_31702 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31703 = [inst_31692];var inst_31704 = (new cljs.core.PersistentVector(null,1,(5),inst_31702,inst_31703,null));var inst_31705 = cljs.core.apply.call(null,on_jsload,inst_31704);var state_31710__$1 = (function (){var statearr_31712 = state_31710;(statearr_31712[(8)] = inst_31701);
return statearr_31712;
})();var statearr_31713_31727 = state_31710__$1;(statearr_31713_31727[(2)] = inst_31705);
(statearr_31713_31727[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31711 === (5)))
{var inst_31708 = (state_31710[(2)]);var state_31710__$1 = state_31710;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31710__$1,inst_31708);
} else
{if((state_val_31711 === (4)))
{var state_31710__$1 = state_31710;var statearr_31714_31728 = state_31710__$1;(statearr_31714_31728[(2)] = null);
(statearr_31714_31728[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31711 === (3)))
{var inst_31692 = (state_31710[(7)]);var inst_31695 = console.debug("Figwheel: loaded these files");var inst_31696 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31692);var inst_31697 = cljs.core.prn_str.call(null,inst_31696);var inst_31698 = console.log(inst_31697);var inst_31699 = cljs.core.async.timeout.call(null,(10));var state_31710__$1 = (function (){var statearr_31715 = state_31710;(statearr_31715[(9)] = inst_31698);
(statearr_31715[(10)] = inst_31695);
return statearr_31715;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31710__$1,(6),inst_31699);
} else
{if((state_val_31711 === (2)))
{var inst_31692 = (state_31710[(7)]);var inst_31692__$1 = (state_31710[(2)]);var inst_31693 = cljs.core.not_empty.call(null,inst_31692__$1);var state_31710__$1 = (function (){var statearr_31716 = state_31710;(statearr_31716[(7)] = inst_31692__$1);
return statearr_31716;
})();if(cljs.core.truth_(inst_31693))
{var statearr_31717_31729 = state_31710__$1;(statearr_31717_31729[(1)] = (3));
} else
{var statearr_31718_31730 = state_31710__$1;(statearr_31718_31730[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31711 === (1)))
{var inst_31688 = before_jsload.call(null,files);var inst_31689 = figwheel.client.add_request_urls.call(null,opts,files);var inst_31690 = figwheel.client.load_all_js_files.call(null,inst_31689);var state_31710__$1 = (function (){var statearr_31719 = state_31710;(statearr_31719[(11)] = inst_31688);
return statearr_31719;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31710__$1,(2),inst_31690);
} else
{return null;
}
}
}
}
}
}
});})(c__9125__auto__,map__31686,map__31686__$1,opts,on_jsload,before_jsload,map__31687,map__31687__$1,files))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31686,map__31686__$1,opts,on_jsload,before_jsload,map__31687,map__31687__$1,files){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31723 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31723[(0)] = state_machine__9111__auto__);
(statearr_31723[(1)] = (1));
return statearr_31723;
});
var state_machine__9111__auto____1 = (function (state_31710){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31710);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31724){if((e31724 instanceof Object))
{var ex__9114__auto__ = e31724;var statearr_31725_31731 = state_31710;(statearr_31725_31731[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31710);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31724;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31732 = state_31710;
state_31710 = G__31732;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31710){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31686,map__31686__$1,opts,on_jsload,before_jsload,map__31687,map__31687__$1,files))
})();var state__9127__auto__ = (function (){var statearr_31726 = f__9126__auto__.call(null);(statearr_31726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31686,map__31686__$1,opts,on_jsload,before_jsload,map__31687,map__31687__$1,files))
);
return c__9125__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__31733,link_href){var map__31735 = p__31733;var map__31735__$1 = ((cljs.core.seq_QMARK_.call(null,map__31735))?cljs.core.apply.call(null,cljs.core.hash_map,map__31735):map__31735);var request_url = cljs.core.get.call(null,map__31735__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31735__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_31756){var state_val_31757 = (state_31756[(1)]);if((state_val_31757 === (2)))
{var inst_31753 = (state_31756[(2)]);var inst_31754 = parent.removeChild(orig_link);var state_31756__$1 = (function (){var statearr_31758 = state_31756;(statearr_31758[(7)] = inst_31753);
return statearr_31758;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31756__$1,inst_31754);
} else
{if((state_val_31757 === (1)))
{var inst_31751 = cljs.core.async.timeout.call(null,(200));var state_31756__$1 = state_31756;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31756__$1,(2),inst_31751);
} else
{return null;
}
}
});})(c__9125__auto__,parent))
;return ((function (switch__9110__auto__,c__9125__auto__,parent){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31762 = [null,null,null,null,null,null,null,null];(statearr_31762[(0)] = state_machine__9111__auto__);
(statearr_31762[(1)] = (1));
return statearr_31762;
});
var state_machine__9111__auto____1 = (function (state_31756){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31756);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31763){if((e31763 instanceof Object))
{var ex__9114__auto__ = e31763;var statearr_31764_31766 = state_31756;(statearr_31764_31766[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31756);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31763;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31767 = state_31756;
state_31756 = G__31767;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31756){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,parent))
})();var state__9127__auto__ = (function (){var statearr_31765 = f__9126__auto__.call(null);(statearr_31765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31765;
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
figwheel.client.reload_css_file = (function reload_css_file(p__31768){var map__31770 = p__31768;var map__31770__$1 = ((cljs.core.seq_QMARK_.call(null,map__31770))?cljs.core.apply.call(null,cljs.core.hash_map,map__31770):map__31770);var f_data = map__31770__$1;var request_url = cljs.core.get.call(null,map__31770__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31770__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__31771,files_msg){var map__31793 = p__31771;var map__31793__$1 = ((cljs.core.seq_QMARK_.call(null,map__31793))?cljs.core.apply.call(null,cljs.core.hash_map,map__31793):map__31793);var opts = map__31793__$1;var on_cssload = cljs.core.get.call(null,map__31793__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__31794_31814 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__31795_31815 = null;var count__31796_31816 = (0);var i__31797_31817 = (0);while(true){
if((i__31797_31817 < count__31796_31816))
{var f_31818 = cljs.core._nth.call(null,chunk__31795_31815,i__31797_31817);figwheel.client.reload_css_file.call(null,f_31818);
{
var G__31819 = seq__31794_31814;
var G__31820 = chunk__31795_31815;
var G__31821 = count__31796_31816;
var G__31822 = (i__31797_31817 + (1));
seq__31794_31814 = G__31819;
chunk__31795_31815 = G__31820;
count__31796_31816 = G__31821;
i__31797_31817 = G__31822;
continue;
}
} else
{var temp__4126__auto___31823 = cljs.core.seq.call(null,seq__31794_31814);if(temp__4126__auto___31823)
{var seq__31794_31824__$1 = temp__4126__auto___31823;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31794_31824__$1))
{var c__4408__auto___31825 = cljs.core.chunk_first.call(null,seq__31794_31824__$1);{
var G__31826 = cljs.core.chunk_rest.call(null,seq__31794_31824__$1);
var G__31827 = c__4408__auto___31825;
var G__31828 = cljs.core.count.call(null,c__4408__auto___31825);
var G__31829 = (0);
seq__31794_31814 = G__31826;
chunk__31795_31815 = G__31827;
count__31796_31816 = G__31828;
i__31797_31817 = G__31829;
continue;
}
} else
{var f_31830 = cljs.core.first.call(null,seq__31794_31824__$1);figwheel.client.reload_css_file.call(null,f_31830);
{
var G__31831 = cljs.core.next.call(null,seq__31794_31824__$1);
var G__31832 = null;
var G__31833 = (0);
var G__31834 = (0);
seq__31794_31814 = G__31831;
chunk__31795_31815 = G__31832;
count__31796_31816 = G__31833;
i__31797_31817 = G__31834;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31793,map__31793__$1,opts,on_cssload){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31793,map__31793__$1,opts,on_cssload){
return (function (state_31804){var state_val_31805 = (state_31804[(1)]);if((state_val_31805 === (2)))
{var inst_31800 = (state_31804[(2)]);var inst_31801 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_31802 = on_cssload.call(null,inst_31801);var state_31804__$1 = (function (){var statearr_31806 = state_31804;(statearr_31806[(7)] = inst_31800);
return statearr_31806;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31804__$1,inst_31802);
} else
{if((state_val_31805 === (1)))
{var inst_31798 = cljs.core.async.timeout.call(null,(100));var state_31804__$1 = state_31804;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31804__$1,(2),inst_31798);
} else
{return null;
}
}
});})(c__9125__auto__,map__31793,map__31793__$1,opts,on_cssload))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31793,map__31793__$1,opts,on_cssload){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31810 = [null,null,null,null,null,null,null,null];(statearr_31810[(0)] = state_machine__9111__auto__);
(statearr_31810[(1)] = (1));
return statearr_31810;
});
var state_machine__9111__auto____1 = (function (state_31804){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31804);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31811){if((e31811 instanceof Object))
{var ex__9114__auto__ = e31811;var statearr_31812_31835 = state_31804;(statearr_31812_31835[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31804);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31811;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31836 = state_31804;
state_31804 = G__31836;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31804){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31793,map__31793__$1,opts,on_cssload))
})();var state__9127__auto__ = (function (){var statearr_31813 = f__9126__auto__.call(null);(statearr_31813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31793,map__31793__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31837){var map__31842 = p__31837;var map__31842__$1 = ((cljs.core.seq_QMARK_.call(null,map__31842))?cljs.core.apply.call(null,cljs.core.hash_map,map__31842):map__31842);var opts = map__31842__$1;var on_compile_fail = cljs.core.get.call(null,map__31842__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31842__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31842__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31842__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31842,map__31842__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31843 = cljs.core._EQ_;var expr__31844 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31843.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31844)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31843.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31844)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31843.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31844)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31842,map__31842__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31842,map__31842__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31842,map__31842__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31842,map__31842__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31842,map__31842__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31842,map__31842__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31842,map__31842__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31842,map__31842__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31842,map__31842__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31849 = {"detail":url};return obj31849;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31850){var map__31852 = p__31850;var map__31852__$1 = ((cljs.core.seq_QMARK_.call(null,map__31852))?cljs.core.apply.call(null,cljs.core.hash_map,map__31852):map__31852);var class$ = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31853){var map__31859 = p__31853;var map__31859__$1 = ((cljs.core.seq_QMARK_.call(null,map__31859))?cljs.core.apply.call(null,cljs.core.hash_map,map__31859):map__31859);var ed = map__31859__$1;var exception_data = cljs.core.get.call(null,map__31859__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31859__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31860_31864 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31861_31865 = null;var count__31862_31866 = (0);var i__31863_31867 = (0);while(true){
if((i__31863_31867 < count__31862_31866))
{var msg_31868 = cljs.core._nth.call(null,chunk__31861_31865,i__31863_31867);console.log(msg_31868);
{
var G__31869 = seq__31860_31864;
var G__31870 = chunk__31861_31865;
var G__31871 = count__31862_31866;
var G__31872 = (i__31863_31867 + (1));
seq__31860_31864 = G__31869;
chunk__31861_31865 = G__31870;
count__31862_31866 = G__31871;
i__31863_31867 = G__31872;
continue;
}
} else
{var temp__4126__auto___31873 = cljs.core.seq.call(null,seq__31860_31864);if(temp__4126__auto___31873)
{var seq__31860_31874__$1 = temp__4126__auto___31873;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31860_31874__$1))
{var c__4408__auto___31875 = cljs.core.chunk_first.call(null,seq__31860_31874__$1);{
var G__31876 = cljs.core.chunk_rest.call(null,seq__31860_31874__$1);
var G__31877 = c__4408__auto___31875;
var G__31878 = cljs.core.count.call(null,c__4408__auto___31875);
var G__31879 = (0);
seq__31860_31864 = G__31876;
chunk__31861_31865 = G__31877;
count__31862_31866 = G__31878;
i__31863_31867 = G__31879;
continue;
}
} else
{var msg_31880 = cljs.core.first.call(null,seq__31860_31874__$1);console.log(msg_31880);
{
var G__31881 = cljs.core.next.call(null,seq__31860_31874__$1);
var G__31882 = null;
var G__31883 = (0);
var G__31884 = (0);
seq__31860_31864 = G__31881;
chunk__31861_31865 = G__31882;
count__31862_31866 = G__31883;
i__31863_31867 = G__31884;
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
var watch_and_reload__delegate = function (p__31885){var map__31887 = p__31885;var map__31887__$1 = ((cljs.core.seq_QMARK_.call(null,map__31887))?cljs.core.apply.call(null,cljs.core.hash_map,map__31887):map__31887);var opts = map__31887__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31885 = null;if (arguments.length > 0) {
  p__31885 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31885);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31888){
var p__31885 = cljs.core.seq(arglist__31888);
return watch_and_reload__delegate(p__31885);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
