// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.url');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* parse a token into [path params] where
* - path : a path of the form /a/b/c
* - params : a map of params
*/
clustermap.formats.url.parse_token = (function parse_token(t){var vec__27839 = clojure.string.split.call(null,t,/\?/,(2));var path = cljs.core.nth.call(null,vec__27839,(0),null);var param_str = cljs.core.nth.call(null,vec__27839,(1),null);var param_value_strs = clojure.string.split.call(null,param_str,/&/);var param_values = cljs.core.map.call(null,((function (vec__27839,path,param_str,param_value_strs){
return (function (p1__27833_SHARP_){return clojure.string.split.call(null,p1__27833_SHARP_,/=/);
});})(vec__27839,path,param_str,param_value_strs))
,param_value_strs);var keyw_values = cljs.core.map.call(null,((function (vec__27839,path,param_str,param_value_strs,param_values){
return (function (p1__27835_SHARP_){return cljs.core.assoc.call(null,p1__27835_SHARP_,(1),(function (){var or__3639__auto__ = (function (){var G__27841 = p1__27835_SHARP_;var G__27841__$1 = (((G__27841 == null))?null:cljs.core.get.call(null,G__27841,(1)));var G__27841__$2 = (((G__27841__$1 == null))?null:decodeURIComponent(G__27841__$1));return G__27841__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return true;
}
})());
});})(vec__27839,path,param_str,param_value_strs,param_values))
,cljs.core.map.call(null,((function (vec__27839,path,param_str,param_value_strs,param_values){
return (function (p1__27834_SHARP_){return cljs.core.assoc.call(null,p1__27834_SHARP_,(0),cljs.core.keyword.call(null,cljs.core.get.call(null,p1__27834_SHARP_,(0))));
});})(vec__27839,path,param_str,param_value_strs,param_values))
,param_values));var params = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,keyw_values);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,params], null);
});
/**
* encode a path and params into a token
*/
clustermap.formats.url.set_token = (function set_token(path,params){var params_str = (function (){var G__27848 = params;var G__27848__$1 = (((G__27848 == null))?null:cljs.core.filter.call(null,((function (G__27848){
return (function (p__27849){var vec__27850 = p__27849;var k = cljs.core.nth.call(null,vec__27850,(0),null);var v = cljs.core.nth.call(null,vec__27850,(1),null);return v;
});})(G__27848))
,G__27848));var G__27848__$2 = (((G__27848__$1 == null))?null:cljs.core.map.call(null,((function (G__27848,G__27848__$1){
return (function (p__27851){var vec__27852 = p__27851;var k = cljs.core.nth.call(null,vec__27852,(0),null);var v = cljs.core.nth.call(null,vec__27852,(1),null);if(cljs.core._EQ_.call(null,true,v))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),encodeURIComponent(v)], null);
}
});})(G__27848,G__27848__$1))
,G__27848__$1));var G__27848__$3 = (((G__27848__$2 == null))?null:cljs.core.map.call(null,((function (G__27848,G__27848__$1,G__27848__$2){
return (function (p1__27842_SHARP_){return clojure.string.join.call(null,"=",p1__27842_SHARP_);
});})(G__27848,G__27848__$1,G__27848__$2))
,G__27848__$2));var G__27848__$4 = (((G__27848__$3 == null))?null:clojure.string.join.call(null,"&",G__27848__$3));var G__27848__$5 = (((G__27848__$4 == null))?null:cljs.core.not_empty.call(null,G__27848__$4));return G__27848__$5;
})();return clojure.string.join.call(null,"?",cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,params_str], null)));
});
/**
* remove a param from the token
*/
clustermap.formats.url.remove_param_from_token = (function remove_param_from_token(t,param){var vec__27854 = clustermap.formats.url.parse_token.call(null,t);var path = cljs.core.nth.call(null,vec__27854,(0),null);var params = cljs.core.nth.call(null,vec__27854,(1),null);return clustermap.formats.url.set_token.call(null,path,cljs.core.dissoc.call(null,params,param));
});
/**
* add a param to the token
*/
clustermap.formats.url.add_param_to_token = (function add_param_to_token(t,param,value){var vec__27856 = clustermap.formats.url.parse_token.call(null,t);var path = cljs.core.nth.call(null,vec__27856,(0),null);var params = cljs.core.nth.call(null,vec__27856,(1),null);return clustermap.formats.url.set_token.call(null,path,cljs.core.assoc.call(null,params,param,value));
});
/**
* change the token path, preserving params
*/
clustermap.formats.url.change_token_path = (function change_token_path(t,new_path){var vec__27858 = clustermap.formats.url.parse_token.call(null,t);var path = cljs.core.nth.call(null,vec__27858,(0),null);var params = cljs.core.nth.call(null,vec__27858,(1),null);return clustermap.formats.url.set_token.call(null,new_path,params);
});
/**
* prefix a url with http:// if no protocol is given
*/
clustermap.formats.url.prefix_url = (function prefix_url(url){if(cljs.core.truth_(cljs.core.re_find.call(null,/^.*?:\/\//,url)))
{return url;
} else
{return ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url));
}
});
clustermap.formats.url.strip_trailing_slash = (function strip_trailing_slash(s){if(cljs.core.truth_(cljs.core.re_find.call(null,/.*\/+$/,s)))
{return cljs.core.last.call(null,cljs.core.re_matches.call(null,/(.*[^\/]+)\/+$/,s));
} else
{return s;
}
});
/**
* remove trailing / from a url, and prefix with http:// if no protocol is given
*/
clustermap.formats.url.clean_http_url = (function clean_http_url(url){if(cljs.core.truth_((function (){var and__3627__auto__ = url;if(cljs.core.truth_(and__3627__auto__))
{return (cljs.core.count.call(null,clojure.string.trim.call(null,url)) > (0));
} else
{return and__3627__auto__;
}
})()))
{return clojure.string.lower_case.call(null,clustermap.formats.url.prefix_url.call(null,clustermap.formats.url.strip_trailing_slash.call(null,url)));
} else
{return null;
}
});
