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
var log__delegate = function (p__31587,args){var map__31589 = p__31587;var map__31589__$1 = ((cljs.core.seq_QMARK_.call(null,map__31589))?cljs.core.apply.call(null,cljs.core.hash_map,map__31589):map__31589);var debug = cljs.core.get.call(null,map__31589__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__31587,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__31587,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31590){
var p__31587 = cljs.core.first(arglist__31590);
var args = cljs.core.rest(arglist__31590);
return log__delegate(p__31587,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__31591){var map__31593 = p__31591;var map__31593__$1 = ((cljs.core.seq_QMARK_.call(null,map__31593))?cljs.core.apply.call(null,cljs.core.hash_map,map__31593):map__31593);var websocket_url = cljs.core.get.call(null,map__31593__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__31594,callback){var map__31596 = p__31594;var map__31596__$1 = ((cljs.core.seq_QMARK_.call(null,map__31596))?cljs.core.apply.call(null,cljs.core.hash_map,map__31596):map__31596);var msg = map__31596__$1;var dependency_file = cljs.core.get.call(null,map__31596__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__31596__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__31596__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__31596,map__31596__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__31596,map__31596__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__31597,p__31598){var map__31601 = p__31597;var map__31601__$1 = ((cljs.core.seq_QMARK_.call(null,map__31601))?cljs.core.apply.call(null,cljs.core.hash_map,map__31601):map__31601);var opts = map__31601__$1;var url_rewriter = cljs.core.get.call(null,map__31601__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__31602 = p__31598;var map__31602__$1 = ((cljs.core.seq_QMARK_.call(null,map__31602))?cljs.core.apply.call(null,cljs.core.hash_map,map__31602):map__31602);var d = map__31602__$1;var file = cljs.core.get.call(null,map__31602__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__31603,p__31604){var map__31646 = p__31603;var map__31646__$1 = ((cljs.core.seq_QMARK_.call(null,map__31646))?cljs.core.apply.call(null,cljs.core.hash_map,map__31646):map__31646);var opts = map__31646__$1;var on_jsload = cljs.core.get.call(null,map__31646__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__31646__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__31647 = p__31604;var map__31647__$1 = ((cljs.core.seq_QMARK_.call(null,map__31647))?cljs.core.apply.call(null,cljs.core.hash_map,map__31647):map__31647);var files = cljs.core.get.call(null,map__31647__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31646,map__31646__$1,opts,on_jsload,before_jsload,map__31647,map__31647__$1,files){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31646,map__31646__$1,opts,on_jsload,before_jsload,map__31647,map__31647__$1,files){
return (function (state_31670){var state_val_31671 = (state_31670[(1)]);if((state_val_31671 === (6)))
{var inst_31652 = (state_31670[(7)]);var inst_31661 = (state_31670[(2)]);var inst_31662 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31663 = [inst_31652];var inst_31664 = (new cljs.core.PersistentVector(null,1,(5),inst_31662,inst_31663,null));var inst_31665 = cljs.core.apply.call(null,on_jsload,inst_31664);var state_31670__$1 = (function (){var statearr_31672 = state_31670;(statearr_31672[(8)] = inst_31661);
return statearr_31672;
})();var statearr_31673_31687 = state_31670__$1;(statearr_31673_31687[(2)] = inst_31665);
(statearr_31673_31687[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31671 === (5)))
{var inst_31668 = (state_31670[(2)]);var state_31670__$1 = state_31670;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31670__$1,inst_31668);
} else
{if((state_val_31671 === (4)))
{var state_31670__$1 = state_31670;var statearr_31674_31688 = state_31670__$1;(statearr_31674_31688[(2)] = null);
(statearr_31674_31688[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31671 === (3)))
{var inst_31652 = (state_31670[(7)]);var inst_31655 = console.debug("Figwheel: loaded these files");var inst_31656 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31652);var inst_31657 = cljs.core.prn_str.call(null,inst_31656);var inst_31658 = console.log(inst_31657);var inst_31659 = cljs.core.async.timeout.call(null,(10));var state_31670__$1 = (function (){var statearr_31675 = state_31670;(statearr_31675[(9)] = inst_31658);
(statearr_31675[(10)] = inst_31655);
return statearr_31675;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31670__$1,(6),inst_31659);
} else
{if((state_val_31671 === (2)))
{var inst_31652 = (state_31670[(7)]);var inst_31652__$1 = (state_31670[(2)]);var inst_31653 = cljs.core.not_empty.call(null,inst_31652__$1);var state_31670__$1 = (function (){var statearr_31676 = state_31670;(statearr_31676[(7)] = inst_31652__$1);
return statearr_31676;
})();if(cljs.core.truth_(inst_31653))
{var statearr_31677_31689 = state_31670__$1;(statearr_31677_31689[(1)] = (3));
} else
{var statearr_31678_31690 = state_31670__$1;(statearr_31678_31690[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31671 === (1)))
{var inst_31648 = before_jsload.call(null,files);var inst_31649 = figwheel.client.add_request_urls.call(null,opts,files);var inst_31650 = figwheel.client.load_all_js_files.call(null,inst_31649);var state_31670__$1 = (function (){var statearr_31679 = state_31670;(statearr_31679[(11)] = inst_31648);
return statearr_31679;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31670__$1,(2),inst_31650);
} else
{return null;
}
}
}
}
}
}
});})(c__9125__auto__,map__31646,map__31646__$1,opts,on_jsload,before_jsload,map__31647,map__31647__$1,files))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31646,map__31646__$1,opts,on_jsload,before_jsload,map__31647,map__31647__$1,files){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31683 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31683[(0)] = state_machine__9111__auto__);
(statearr_31683[(1)] = (1));
return statearr_31683;
});
var state_machine__9111__auto____1 = (function (state_31670){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31670);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31684){if((e31684 instanceof Object))
{var ex__9114__auto__ = e31684;var statearr_31685_31691 = state_31670;(statearr_31685_31691[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31670);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31684;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31692 = state_31670;
state_31670 = G__31692;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31670){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31646,map__31646__$1,opts,on_jsload,before_jsload,map__31647,map__31647__$1,files))
})();var state__9127__auto__ = (function (){var statearr_31686 = f__9126__auto__.call(null);(statearr_31686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31686;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31646,map__31646__$1,opts,on_jsload,before_jsload,map__31647,map__31647__$1,files))
);
return c__9125__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__31693,link_href){var map__31695 = p__31693;var map__31695__$1 = ((cljs.core.seq_QMARK_.call(null,map__31695))?cljs.core.apply.call(null,cljs.core.hash_map,map__31695):map__31695);var request_url = cljs.core.get.call(null,map__31695__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31695__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_31716){var state_val_31717 = (state_31716[(1)]);if((state_val_31717 === (2)))
{var inst_31713 = (state_31716[(2)]);var inst_31714 = parent.removeChild(orig_link);var state_31716__$1 = (function (){var statearr_31718 = state_31716;(statearr_31718[(7)] = inst_31713);
return statearr_31718;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31716__$1,inst_31714);
} else
{if((state_val_31717 === (1)))
{var inst_31711 = cljs.core.async.timeout.call(null,(200));var state_31716__$1 = state_31716;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31716__$1,(2),inst_31711);
} else
{return null;
}
}
});})(c__9125__auto__,parent))
;return ((function (switch__9110__auto__,c__9125__auto__,parent){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31722 = [null,null,null,null,null,null,null,null];(statearr_31722[(0)] = state_machine__9111__auto__);
(statearr_31722[(1)] = (1));
return statearr_31722;
});
var state_machine__9111__auto____1 = (function (state_31716){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31716);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31723){if((e31723 instanceof Object))
{var ex__9114__auto__ = e31723;var statearr_31724_31726 = state_31716;(statearr_31724_31726[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31716);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31723;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31727 = state_31716;
state_31716 = G__31727;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31716){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,parent))
})();var state__9127__auto__ = (function (){var statearr_31725 = f__9126__auto__.call(null);(statearr_31725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31725;
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
figwheel.client.reload_css_file = (function reload_css_file(p__31728){var map__31730 = p__31728;var map__31730__$1 = ((cljs.core.seq_QMARK_.call(null,map__31730))?cljs.core.apply.call(null,cljs.core.hash_map,map__31730):map__31730);var f_data = map__31730__$1;var request_url = cljs.core.get.call(null,map__31730__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31730__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__31731,files_msg){var map__31753 = p__31731;var map__31753__$1 = ((cljs.core.seq_QMARK_.call(null,map__31753))?cljs.core.apply.call(null,cljs.core.hash_map,map__31753):map__31753);var opts = map__31753__$1;var on_cssload = cljs.core.get.call(null,map__31753__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__31754_31774 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__31755_31775 = null;var count__31756_31776 = (0);var i__31757_31777 = (0);while(true){
if((i__31757_31777 < count__31756_31776))
{var f_31778 = cljs.core._nth.call(null,chunk__31755_31775,i__31757_31777);figwheel.client.reload_css_file.call(null,f_31778);
{
var G__31779 = seq__31754_31774;
var G__31780 = chunk__31755_31775;
var G__31781 = count__31756_31776;
var G__31782 = (i__31757_31777 + (1));
seq__31754_31774 = G__31779;
chunk__31755_31775 = G__31780;
count__31756_31776 = G__31781;
i__31757_31777 = G__31782;
continue;
}
} else
{var temp__4126__auto___31783 = cljs.core.seq.call(null,seq__31754_31774);if(temp__4126__auto___31783)
{var seq__31754_31784__$1 = temp__4126__auto___31783;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31754_31784__$1))
{var c__4408__auto___31785 = cljs.core.chunk_first.call(null,seq__31754_31784__$1);{
var G__31786 = cljs.core.chunk_rest.call(null,seq__31754_31784__$1);
var G__31787 = c__4408__auto___31785;
var G__31788 = cljs.core.count.call(null,c__4408__auto___31785);
var G__31789 = (0);
seq__31754_31774 = G__31786;
chunk__31755_31775 = G__31787;
count__31756_31776 = G__31788;
i__31757_31777 = G__31789;
continue;
}
} else
{var f_31790 = cljs.core.first.call(null,seq__31754_31784__$1);figwheel.client.reload_css_file.call(null,f_31790);
{
var G__31791 = cljs.core.next.call(null,seq__31754_31784__$1);
var G__31792 = null;
var G__31793 = (0);
var G__31794 = (0);
seq__31754_31774 = G__31791;
chunk__31755_31775 = G__31792;
count__31756_31776 = G__31793;
i__31757_31777 = G__31794;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31753,map__31753__$1,opts,on_cssload){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31753,map__31753__$1,opts,on_cssload){
return (function (state_31764){var state_val_31765 = (state_31764[(1)]);if((state_val_31765 === (2)))
{var inst_31760 = (state_31764[(2)]);var inst_31761 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_31762 = on_cssload.call(null,inst_31761);var state_31764__$1 = (function (){var statearr_31766 = state_31764;(statearr_31766[(7)] = inst_31760);
return statearr_31766;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31764__$1,inst_31762);
} else
{if((state_val_31765 === (1)))
{var inst_31758 = cljs.core.async.timeout.call(null,(100));var state_31764__$1 = state_31764;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31764__$1,(2),inst_31758);
} else
{return null;
}
}
});})(c__9125__auto__,map__31753,map__31753__$1,opts,on_cssload))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31753,map__31753__$1,opts,on_cssload){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31770 = [null,null,null,null,null,null,null,null];(statearr_31770[(0)] = state_machine__9111__auto__);
(statearr_31770[(1)] = (1));
return statearr_31770;
});
var state_machine__9111__auto____1 = (function (state_31764){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31764);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31771){if((e31771 instanceof Object))
{var ex__9114__auto__ = e31771;var statearr_31772_31795 = state_31764;(statearr_31772_31795[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31764);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31771;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31796 = state_31764;
state_31764 = G__31796;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31764){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31753,map__31753__$1,opts,on_cssload))
})();var state__9127__auto__ = (function (){var statearr_31773 = f__9126__auto__.call(null);(statearr_31773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31773;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31753,map__31753__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31797){var map__31802 = p__31797;var map__31802__$1 = ((cljs.core.seq_QMARK_.call(null,map__31802))?cljs.core.apply.call(null,cljs.core.hash_map,map__31802):map__31802);var opts = map__31802__$1;var on_compile_fail = cljs.core.get.call(null,map__31802__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31802__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31802__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31802__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31802,map__31802__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31803 = cljs.core._EQ_;var expr__31804 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31803.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31804)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31803.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31804)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31803.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31804)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31802,map__31802__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31802,map__31802__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31802,map__31802__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31802,map__31802__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31802,map__31802__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31802,map__31802__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31802,map__31802__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31802,map__31802__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31802,map__31802__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31809 = {"detail":url};return obj31809;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31810){var map__31812 = p__31810;var map__31812__$1 = ((cljs.core.seq_QMARK_.call(null,map__31812))?cljs.core.apply.call(null,cljs.core.hash_map,map__31812):map__31812);var class$ = cljs.core.get.call(null,map__31812__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31812__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31813){var map__31819 = p__31813;var map__31819__$1 = ((cljs.core.seq_QMARK_.call(null,map__31819))?cljs.core.apply.call(null,cljs.core.hash_map,map__31819):map__31819);var ed = map__31819__$1;var exception_data = cljs.core.get.call(null,map__31819__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31819__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31820_31824 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31821_31825 = null;var count__31822_31826 = (0);var i__31823_31827 = (0);while(true){
if((i__31823_31827 < count__31822_31826))
{var msg_31828 = cljs.core._nth.call(null,chunk__31821_31825,i__31823_31827);console.log(msg_31828);
{
var G__31829 = seq__31820_31824;
var G__31830 = chunk__31821_31825;
var G__31831 = count__31822_31826;
var G__31832 = (i__31823_31827 + (1));
seq__31820_31824 = G__31829;
chunk__31821_31825 = G__31830;
count__31822_31826 = G__31831;
i__31823_31827 = G__31832;
continue;
}
} else
{var temp__4126__auto___31833 = cljs.core.seq.call(null,seq__31820_31824);if(temp__4126__auto___31833)
{var seq__31820_31834__$1 = temp__4126__auto___31833;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31820_31834__$1))
{var c__4408__auto___31835 = cljs.core.chunk_first.call(null,seq__31820_31834__$1);{
var G__31836 = cljs.core.chunk_rest.call(null,seq__31820_31834__$1);
var G__31837 = c__4408__auto___31835;
var G__31838 = cljs.core.count.call(null,c__4408__auto___31835);
var G__31839 = (0);
seq__31820_31824 = G__31836;
chunk__31821_31825 = G__31837;
count__31822_31826 = G__31838;
i__31823_31827 = G__31839;
continue;
}
} else
{var msg_31840 = cljs.core.first.call(null,seq__31820_31834__$1);console.log(msg_31840);
{
var G__31841 = cljs.core.next.call(null,seq__31820_31834__$1);
var G__31842 = null;
var G__31843 = (0);
var G__31844 = (0);
seq__31820_31824 = G__31841;
chunk__31821_31825 = G__31842;
count__31822_31826 = G__31843;
i__31823_31827 = G__31844;
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
var watch_and_reload__delegate = function (p__31845){var map__31847 = p__31845;var map__31847__$1 = ((cljs.core.seq_QMARK_.call(null,map__31847))?cljs.core.apply.call(null,cljs.core.hash_map,map__31847):map__31847);var opts = map__31847__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31845 = null;if (arguments.length > 0) {
  p__31845 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31845);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31848){
var p__31845 = cljs.core.seq(arglist__31848);
return watch_and_reload__delegate(p__31845);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
