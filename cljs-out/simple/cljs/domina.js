// Compiled by ClojureScript 0.0-2356
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_21296 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_21297 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_21298 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_21298,opt_wrapper_21296,table_section_wrapper_21297,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_21296,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_21297,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_21297,cell_wrapper_21298,table_section_wrapper_21297,table_section_wrapper_21297]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__21303 = cljs.core.seq.call(null,tbody);var chunk__21304 = null;var count__21305 = (0);var i__21306 = (0);while(true){
if((i__21306 < count__21305))
{var child = cljs.core._nth.call(null,chunk__21304,i__21306);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21307 = seq__21303;
var G__21308 = chunk__21304;
var G__21309 = count__21305;
var G__21310 = (i__21306 + (1));
seq__21303 = G__21307;
chunk__21304 = G__21308;
count__21305 = G__21309;
i__21306 = G__21310;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21303);if(temp__4126__auto__)
{var seq__21303__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21303__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21303__$1);{
var G__21311 = cljs.core.chunk_rest.call(null,seq__21303__$1);
var G__21312 = c__4408__auto__;
var G__21313 = cljs.core.count.call(null,c__4408__auto__);
var G__21314 = (0);
seq__21303 = G__21311;
chunk__21304 = G__21312;
count__21305 = G__21313;
i__21306 = G__21314;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__21303__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21315 = cljs.core.next.call(null,seq__21303__$1);
var G__21316 = null;
var G__21317 = (0);
var G__21318 = (0);
seq__21303 = G__21315;
chunk__21304 = G__21316;
count__21305 = G__21317;
i__21306 = G__21318;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__21320 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__21320,(0),null);var start_wrap = cljs.core.nth.call(null,vec__21320,(1),null);var end_wrap = cljs.core.nth.call(null,vec__21320,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__21321 = wrapper.lastChild;
var G__21322 = (level - (1));
wrapper = G__21321;
level = G__21322;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3627__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3627__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj21324 = {};return obj21324;
})();
domina.nodes = (function nodes(content){if((function (){var and__3627__auto__ = content;if(and__3627__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3627__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4275__auto__ = (((content == null))?null:content);return (function (){var or__3639__auto__ = (domina.nodes[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.nodes["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3627__auto__ = nodeseq;if(and__3627__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3627__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4275__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3639__auto__ = (domina.single_node[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.single_node["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3627__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3627__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3627__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__21325){
var mesg = cljs.core.seq(arglist__21325);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__21326){
var mesg = cljs.core.seq(arglist__21326);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__21327){
var contents = cljs.core.seq(arglist__21327);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__21328_SHARP_){return p1__21328_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__21329_SHARP_,p2__21330_SHARP_){return goog.dom.insertChildAt(p1__21329_SHARP_,p2__21330_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21332_SHARP_,p2__21331_SHARP_){return goog.dom.insertSiblingBefore(p2__21331_SHARP_,p1__21332_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21334_SHARP_,p2__21333_SHARP_){return goog.dom.insertSiblingAfter(p2__21333_SHARP_,p1__21334_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__21336_SHARP_,p2__21335_SHARP_){return goog.dom.replaceNode(p2__21335_SHARP_,p1__21336_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__21341_21345 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21342_21346 = null;var count__21343_21347 = (0);var i__21344_21348 = (0);while(true){
if((i__21344_21348 < count__21343_21347))
{var n_21349 = cljs.core._nth.call(null,chunk__21342_21346,i__21344_21348);goog.style.setStyle(n_21349,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21350 = seq__21341_21345;
var G__21351 = chunk__21342_21346;
var G__21352 = count__21343_21347;
var G__21353 = (i__21344_21348 + (1));
seq__21341_21345 = G__21350;
chunk__21342_21346 = G__21351;
count__21343_21347 = G__21352;
i__21344_21348 = G__21353;
continue;
}
} else
{var temp__4126__auto___21354 = cljs.core.seq.call(null,seq__21341_21345);if(temp__4126__auto___21354)
{var seq__21341_21355__$1 = temp__4126__auto___21354;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21341_21355__$1))
{var c__4408__auto___21356 = cljs.core.chunk_first.call(null,seq__21341_21355__$1);{
var G__21357 = cljs.core.chunk_rest.call(null,seq__21341_21355__$1);
var G__21358 = c__4408__auto___21356;
var G__21359 = cljs.core.count.call(null,c__4408__auto___21356);
var G__21360 = (0);
seq__21341_21345 = G__21357;
chunk__21342_21346 = G__21358;
count__21343_21347 = G__21359;
i__21344_21348 = G__21360;
continue;
}
} else
{var n_21361 = cljs.core.first.call(null,seq__21341_21355__$1);goog.style.setStyle(n_21361,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21362 = cljs.core.next.call(null,seq__21341_21355__$1);
var G__21363 = null;
var G__21364 = (0);
var G__21365 = (0);
seq__21341_21345 = G__21362;
chunk__21342_21346 = G__21363;
count__21343_21347 = G__21364;
i__21344_21348 = G__21365;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21366){
var content = cljs.core.first(arglist__21366);
arglist__21366 = cljs.core.next(arglist__21366);
var name = cljs.core.first(arglist__21366);
var value = cljs.core.rest(arglist__21366);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__21371_21375 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21372_21376 = null;var count__21373_21377 = (0);var i__21374_21378 = (0);while(true){
if((i__21374_21378 < count__21373_21377))
{var n_21379 = cljs.core._nth.call(null,chunk__21372_21376,i__21374_21378);n_21379.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21380 = seq__21371_21375;
var G__21381 = chunk__21372_21376;
var G__21382 = count__21373_21377;
var G__21383 = (i__21374_21378 + (1));
seq__21371_21375 = G__21380;
chunk__21372_21376 = G__21381;
count__21373_21377 = G__21382;
i__21374_21378 = G__21383;
continue;
}
} else
{var temp__4126__auto___21384 = cljs.core.seq.call(null,seq__21371_21375);if(temp__4126__auto___21384)
{var seq__21371_21385__$1 = temp__4126__auto___21384;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21371_21385__$1))
{var c__4408__auto___21386 = cljs.core.chunk_first.call(null,seq__21371_21385__$1);{
var G__21387 = cljs.core.chunk_rest.call(null,seq__21371_21385__$1);
var G__21388 = c__4408__auto___21386;
var G__21389 = cljs.core.count.call(null,c__4408__auto___21386);
var G__21390 = (0);
seq__21371_21375 = G__21387;
chunk__21372_21376 = G__21388;
count__21373_21377 = G__21389;
i__21374_21378 = G__21390;
continue;
}
} else
{var n_21391 = cljs.core.first.call(null,seq__21371_21385__$1);n_21391.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21392 = cljs.core.next.call(null,seq__21371_21385__$1);
var G__21393 = null;
var G__21394 = (0);
var G__21395 = (0);
seq__21371_21375 = G__21392;
chunk__21372_21376 = G__21393;
count__21373_21377 = G__21394;
i__21374_21378 = G__21395;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__21396){
var content = cljs.core.first(arglist__21396);
arglist__21396 = cljs.core.next(arglist__21396);
var name = cljs.core.first(arglist__21396);
var value = cljs.core.rest(arglist__21396);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__21401_21405 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21402_21406 = null;var count__21403_21407 = (0);var i__21404_21408 = (0);while(true){
if((i__21404_21408 < count__21403_21407))
{var n_21409 = cljs.core._nth.call(null,chunk__21402_21406,i__21404_21408);n_21409.removeAttribute(cljs.core.name.call(null,name));
{
var G__21410 = seq__21401_21405;
var G__21411 = chunk__21402_21406;
var G__21412 = count__21403_21407;
var G__21413 = (i__21404_21408 + (1));
seq__21401_21405 = G__21410;
chunk__21402_21406 = G__21411;
count__21403_21407 = G__21412;
i__21404_21408 = G__21413;
continue;
}
} else
{var temp__4126__auto___21414 = cljs.core.seq.call(null,seq__21401_21405);if(temp__4126__auto___21414)
{var seq__21401_21415__$1 = temp__4126__auto___21414;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21401_21415__$1))
{var c__4408__auto___21416 = cljs.core.chunk_first.call(null,seq__21401_21415__$1);{
var G__21417 = cljs.core.chunk_rest.call(null,seq__21401_21415__$1);
var G__21418 = c__4408__auto___21416;
var G__21419 = cljs.core.count.call(null,c__4408__auto___21416);
var G__21420 = (0);
seq__21401_21405 = G__21417;
chunk__21402_21406 = G__21418;
count__21403_21407 = G__21419;
i__21404_21408 = G__21420;
continue;
}
} else
{var n_21421 = cljs.core.first.call(null,seq__21401_21415__$1);n_21421.removeAttribute(cljs.core.name.call(null,name));
{
var G__21422 = cljs.core.next.call(null,seq__21401_21415__$1);
var G__21423 = null;
var G__21424 = (0);
var G__21425 = (0);
seq__21401_21405 = G__21422;
chunk__21402_21406 = G__21423;
count__21403_21407 = G__21424;
i__21404_21408 = G__21425;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__21427 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__21427,(0),null);var v = cljs.core.nth.call(null,vec__21427,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
{return v;
} else
{return and__3627__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__21428_SHARP_){var attr = attrs__$1.item(p1__21428_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__21435_21441 = cljs.core.seq.call(null,styles);var chunk__21436_21442 = null;var count__21437_21443 = (0);var i__21438_21444 = (0);while(true){
if((i__21438_21444 < count__21437_21443))
{var vec__21439_21445 = cljs.core._nth.call(null,chunk__21436_21442,i__21438_21444);var name_21446 = cljs.core.nth.call(null,vec__21439_21445,(0),null);var value_21447 = cljs.core.nth.call(null,vec__21439_21445,(1),null);domina.set_style_BANG_.call(null,content,name_21446,value_21447);
{
var G__21448 = seq__21435_21441;
var G__21449 = chunk__21436_21442;
var G__21450 = count__21437_21443;
var G__21451 = (i__21438_21444 + (1));
seq__21435_21441 = G__21448;
chunk__21436_21442 = G__21449;
count__21437_21443 = G__21450;
i__21438_21444 = G__21451;
continue;
}
} else
{var temp__4126__auto___21452 = cljs.core.seq.call(null,seq__21435_21441);if(temp__4126__auto___21452)
{var seq__21435_21453__$1 = temp__4126__auto___21452;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21435_21453__$1))
{var c__4408__auto___21454 = cljs.core.chunk_first.call(null,seq__21435_21453__$1);{
var G__21455 = cljs.core.chunk_rest.call(null,seq__21435_21453__$1);
var G__21456 = c__4408__auto___21454;
var G__21457 = cljs.core.count.call(null,c__4408__auto___21454);
var G__21458 = (0);
seq__21435_21441 = G__21455;
chunk__21436_21442 = G__21456;
count__21437_21443 = G__21457;
i__21438_21444 = G__21458;
continue;
}
} else
{var vec__21440_21459 = cljs.core.first.call(null,seq__21435_21453__$1);var name_21460 = cljs.core.nth.call(null,vec__21440_21459,(0),null);var value_21461 = cljs.core.nth.call(null,vec__21440_21459,(1),null);domina.set_style_BANG_.call(null,content,name_21460,value_21461);
{
var G__21462 = cljs.core.next.call(null,seq__21435_21453__$1);
var G__21463 = null;
var G__21464 = (0);
var G__21465 = (0);
seq__21435_21441 = G__21462;
chunk__21436_21442 = G__21463;
count__21437_21443 = G__21464;
i__21438_21444 = G__21465;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__21472_21478 = cljs.core.seq.call(null,attrs);var chunk__21473_21479 = null;var count__21474_21480 = (0);var i__21475_21481 = (0);while(true){
if((i__21475_21481 < count__21474_21480))
{var vec__21476_21482 = cljs.core._nth.call(null,chunk__21473_21479,i__21475_21481);var name_21483 = cljs.core.nth.call(null,vec__21476_21482,(0),null);var value_21484 = cljs.core.nth.call(null,vec__21476_21482,(1),null);domina.set_attr_BANG_.call(null,content,name_21483,value_21484);
{
var G__21485 = seq__21472_21478;
var G__21486 = chunk__21473_21479;
var G__21487 = count__21474_21480;
var G__21488 = (i__21475_21481 + (1));
seq__21472_21478 = G__21485;
chunk__21473_21479 = G__21486;
count__21474_21480 = G__21487;
i__21475_21481 = G__21488;
continue;
}
} else
{var temp__4126__auto___21489 = cljs.core.seq.call(null,seq__21472_21478);if(temp__4126__auto___21489)
{var seq__21472_21490__$1 = temp__4126__auto___21489;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21472_21490__$1))
{var c__4408__auto___21491 = cljs.core.chunk_first.call(null,seq__21472_21490__$1);{
var G__21492 = cljs.core.chunk_rest.call(null,seq__21472_21490__$1);
var G__21493 = c__4408__auto___21491;
var G__21494 = cljs.core.count.call(null,c__4408__auto___21491);
var G__21495 = (0);
seq__21472_21478 = G__21492;
chunk__21473_21479 = G__21493;
count__21474_21480 = G__21494;
i__21475_21481 = G__21495;
continue;
}
} else
{var vec__21477_21496 = cljs.core.first.call(null,seq__21472_21490__$1);var name_21497 = cljs.core.nth.call(null,vec__21477_21496,(0),null);var value_21498 = cljs.core.nth.call(null,vec__21477_21496,(1),null);domina.set_attr_BANG_.call(null,content,name_21497,value_21498);
{
var G__21499 = cljs.core.next.call(null,seq__21472_21490__$1);
var G__21500 = null;
var G__21501 = (0);
var G__21502 = (0);
seq__21472_21478 = G__21499;
chunk__21473_21479 = G__21500;
count__21474_21480 = G__21501;
i__21475_21481 = G__21502;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__21507_21511 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21508_21512 = null;var count__21509_21513 = (0);var i__21510_21514 = (0);while(true){
if((i__21510_21514 < count__21509_21513))
{var node_21515 = cljs.core._nth.call(null,chunk__21508_21512,i__21510_21514);goog.dom.classes.add(node_21515,class$);
{
var G__21516 = seq__21507_21511;
var G__21517 = chunk__21508_21512;
var G__21518 = count__21509_21513;
var G__21519 = (i__21510_21514 + (1));
seq__21507_21511 = G__21516;
chunk__21508_21512 = G__21517;
count__21509_21513 = G__21518;
i__21510_21514 = G__21519;
continue;
}
} else
{var temp__4126__auto___21520 = cljs.core.seq.call(null,seq__21507_21511);if(temp__4126__auto___21520)
{var seq__21507_21521__$1 = temp__4126__auto___21520;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21507_21521__$1))
{var c__4408__auto___21522 = cljs.core.chunk_first.call(null,seq__21507_21521__$1);{
var G__21523 = cljs.core.chunk_rest.call(null,seq__21507_21521__$1);
var G__21524 = c__4408__auto___21522;
var G__21525 = cljs.core.count.call(null,c__4408__auto___21522);
var G__21526 = (0);
seq__21507_21511 = G__21523;
chunk__21508_21512 = G__21524;
count__21509_21513 = G__21525;
i__21510_21514 = G__21526;
continue;
}
} else
{var node_21527 = cljs.core.first.call(null,seq__21507_21521__$1);goog.dom.classes.add(node_21527,class$);
{
var G__21528 = cljs.core.next.call(null,seq__21507_21521__$1);
var G__21529 = null;
var G__21530 = (0);
var G__21531 = (0);
seq__21507_21511 = G__21528;
chunk__21508_21512 = G__21529;
count__21509_21513 = G__21530;
i__21510_21514 = G__21531;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__21536_21540 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21537_21541 = null;var count__21538_21542 = (0);var i__21539_21543 = (0);while(true){
if((i__21539_21543 < count__21538_21542))
{var node_21544 = cljs.core._nth.call(null,chunk__21537_21541,i__21539_21543);goog.dom.classes.remove(node_21544,class$);
{
var G__21545 = seq__21536_21540;
var G__21546 = chunk__21537_21541;
var G__21547 = count__21538_21542;
var G__21548 = (i__21539_21543 + (1));
seq__21536_21540 = G__21545;
chunk__21537_21541 = G__21546;
count__21538_21542 = G__21547;
i__21539_21543 = G__21548;
continue;
}
} else
{var temp__4126__auto___21549 = cljs.core.seq.call(null,seq__21536_21540);if(temp__4126__auto___21549)
{var seq__21536_21550__$1 = temp__4126__auto___21549;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21536_21550__$1))
{var c__4408__auto___21551 = cljs.core.chunk_first.call(null,seq__21536_21550__$1);{
var G__21552 = cljs.core.chunk_rest.call(null,seq__21536_21550__$1);
var G__21553 = c__4408__auto___21551;
var G__21554 = cljs.core.count.call(null,c__4408__auto___21551);
var G__21555 = (0);
seq__21536_21540 = G__21552;
chunk__21537_21541 = G__21553;
count__21538_21542 = G__21554;
i__21539_21543 = G__21555;
continue;
}
} else
{var node_21556 = cljs.core.first.call(null,seq__21536_21550__$1);goog.dom.classes.remove(node_21556,class$);
{
var G__21557 = cljs.core.next.call(null,seq__21536_21550__$1);
var G__21558 = null;
var G__21559 = (0);
var G__21560 = (0);
seq__21536_21540 = G__21557;
chunk__21537_21541 = G__21558;
count__21538_21542 = G__21559;
i__21539_21543 = G__21560;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__21565_21569 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21566_21570 = null;var count__21567_21571 = (0);var i__21568_21572 = (0);while(true){
if((i__21568_21572 < count__21567_21571))
{var node_21573 = cljs.core._nth.call(null,chunk__21566_21570,i__21568_21572);goog.dom.classes.toggle(node_21573,class$);
{
var G__21574 = seq__21565_21569;
var G__21575 = chunk__21566_21570;
var G__21576 = count__21567_21571;
var G__21577 = (i__21568_21572 + (1));
seq__21565_21569 = G__21574;
chunk__21566_21570 = G__21575;
count__21567_21571 = G__21576;
i__21568_21572 = G__21577;
continue;
}
} else
{var temp__4126__auto___21578 = cljs.core.seq.call(null,seq__21565_21569);if(temp__4126__auto___21578)
{var seq__21565_21579__$1 = temp__4126__auto___21578;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21565_21579__$1))
{var c__4408__auto___21580 = cljs.core.chunk_first.call(null,seq__21565_21579__$1);{
var G__21581 = cljs.core.chunk_rest.call(null,seq__21565_21579__$1);
var G__21582 = c__4408__auto___21580;
var G__21583 = cljs.core.count.call(null,c__4408__auto___21580);
var G__21584 = (0);
seq__21565_21569 = G__21581;
chunk__21566_21570 = G__21582;
count__21567_21571 = G__21583;
i__21568_21572 = G__21584;
continue;
}
} else
{var node_21585 = cljs.core.first.call(null,seq__21565_21579__$1);goog.dom.classes.toggle(node_21585,class$);
{
var G__21586 = cljs.core.next.call(null,seq__21565_21579__$1);
var G__21587 = null;
var G__21588 = (0);
var G__21589 = (0);
seq__21565_21569 = G__21586;
chunk__21566_21570 = G__21587;
count__21567_21571 = G__21588;
i__21568_21572 = G__21589;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_21598__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__21594_21599 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21595_21600 = null;var count__21596_21601 = (0);var i__21597_21602 = (0);while(true){
if((i__21597_21602 < count__21596_21601))
{var node_21603 = cljs.core._nth.call(null,chunk__21595_21600,i__21597_21602);goog.dom.classes.set(node_21603,classes_21598__$1);
{
var G__21604 = seq__21594_21599;
var G__21605 = chunk__21595_21600;
var G__21606 = count__21596_21601;
var G__21607 = (i__21597_21602 + (1));
seq__21594_21599 = G__21604;
chunk__21595_21600 = G__21605;
count__21596_21601 = G__21606;
i__21597_21602 = G__21607;
continue;
}
} else
{var temp__4126__auto___21608 = cljs.core.seq.call(null,seq__21594_21599);if(temp__4126__auto___21608)
{var seq__21594_21609__$1 = temp__4126__auto___21608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21594_21609__$1))
{var c__4408__auto___21610 = cljs.core.chunk_first.call(null,seq__21594_21609__$1);{
var G__21611 = cljs.core.chunk_rest.call(null,seq__21594_21609__$1);
var G__21612 = c__4408__auto___21610;
var G__21613 = cljs.core.count.call(null,c__4408__auto___21610);
var G__21614 = (0);
seq__21594_21599 = G__21611;
chunk__21595_21600 = G__21612;
count__21596_21601 = G__21613;
i__21597_21602 = G__21614;
continue;
}
} else
{var node_21615 = cljs.core.first.call(null,seq__21594_21609__$1);goog.dom.classes.set(node_21615,classes_21598__$1);
{
var G__21616 = cljs.core.next.call(null,seq__21594_21609__$1);
var G__21617 = null;
var G__21618 = (0);
var G__21619 = (0);
seq__21594_21599 = G__21616;
chunk__21595_21600 = G__21617;
count__21596_21601 = G__21618;
i__21597_21602 = G__21619;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__21624_21628 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21625_21629 = null;var count__21626_21630 = (0);var i__21627_21631 = (0);while(true){
if((i__21627_21631 < count__21626_21630))
{var node_21632 = cljs.core._nth.call(null,chunk__21625_21629,i__21627_21631);goog.dom.setTextContent(node_21632,value);
{
var G__21633 = seq__21624_21628;
var G__21634 = chunk__21625_21629;
var G__21635 = count__21626_21630;
var G__21636 = (i__21627_21631 + (1));
seq__21624_21628 = G__21633;
chunk__21625_21629 = G__21634;
count__21626_21630 = G__21635;
i__21627_21631 = G__21636;
continue;
}
} else
{var temp__4126__auto___21637 = cljs.core.seq.call(null,seq__21624_21628);if(temp__4126__auto___21637)
{var seq__21624_21638__$1 = temp__4126__auto___21637;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21624_21638__$1))
{var c__4408__auto___21639 = cljs.core.chunk_first.call(null,seq__21624_21638__$1);{
var G__21640 = cljs.core.chunk_rest.call(null,seq__21624_21638__$1);
var G__21641 = c__4408__auto___21639;
var G__21642 = cljs.core.count.call(null,c__4408__auto___21639);
var G__21643 = (0);
seq__21624_21628 = G__21640;
chunk__21625_21629 = G__21641;
count__21626_21630 = G__21642;
i__21627_21631 = G__21643;
continue;
}
} else
{var node_21644 = cljs.core.first.call(null,seq__21624_21638__$1);goog.dom.setTextContent(node_21644,value);
{
var G__21645 = cljs.core.next.call(null,seq__21624_21638__$1);
var G__21646 = null;
var G__21647 = (0);
var G__21648 = (0);
seq__21624_21628 = G__21645;
chunk__21625_21629 = G__21646;
count__21626_21630 = G__21647;
i__21627_21631 = G__21648;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21653_21657 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21654_21658 = null;var count__21655_21659 = (0);var i__21656_21660 = (0);while(true){
if((i__21656_21660 < count__21655_21659))
{var node_21661 = cljs.core._nth.call(null,chunk__21654_21658,i__21656_21660);goog.dom.forms.setValue(node_21661,value);
{
var G__21662 = seq__21653_21657;
var G__21663 = chunk__21654_21658;
var G__21664 = count__21655_21659;
var G__21665 = (i__21656_21660 + (1));
seq__21653_21657 = G__21662;
chunk__21654_21658 = G__21663;
count__21655_21659 = G__21664;
i__21656_21660 = G__21665;
continue;
}
} else
{var temp__4126__auto___21666 = cljs.core.seq.call(null,seq__21653_21657);if(temp__4126__auto___21666)
{var seq__21653_21667__$1 = temp__4126__auto___21666;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21653_21667__$1))
{var c__4408__auto___21668 = cljs.core.chunk_first.call(null,seq__21653_21667__$1);{
var G__21669 = cljs.core.chunk_rest.call(null,seq__21653_21667__$1);
var G__21670 = c__4408__auto___21668;
var G__21671 = cljs.core.count.call(null,c__4408__auto___21668);
var G__21672 = (0);
seq__21653_21657 = G__21669;
chunk__21654_21658 = G__21670;
count__21655_21659 = G__21671;
i__21656_21660 = G__21672;
continue;
}
} else
{var node_21673 = cljs.core.first.call(null,seq__21653_21667__$1);goog.dom.forms.setValue(node_21673,value);
{
var G__21674 = cljs.core.next.call(null,seq__21653_21667__$1);
var G__21675 = null;
var G__21676 = (0);
var G__21677 = (0);
seq__21653_21657 = G__21674;
chunk__21654_21658 = G__21675;
count__21655_21659 = G__21676;
i__21656_21660 = G__21677;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3627__auto__ = allows_inner_html_QMARK_;if(and__3627__auto__)
{var and__3627__auto____$1 = (function (){var or__3639__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3627__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var value_21688 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21684_21689 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21685_21690 = null;var count__21686_21691 = (0);var i__21687_21692 = (0);while(true){
if((i__21687_21692 < count__21686_21691))
{var node_21693 = cljs.core._nth.call(null,chunk__21685_21690,i__21687_21692);node_21693.innerHTML = value_21688;
{
var G__21694 = seq__21684_21689;
var G__21695 = chunk__21685_21690;
var G__21696 = count__21686_21691;
var G__21697 = (i__21687_21692 + (1));
seq__21684_21689 = G__21694;
chunk__21685_21690 = G__21695;
count__21686_21691 = G__21696;
i__21687_21692 = G__21697;
continue;
}
} else
{var temp__4126__auto___21698 = cljs.core.seq.call(null,seq__21684_21689);if(temp__4126__auto___21698)
{var seq__21684_21699__$1 = temp__4126__auto___21698;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21684_21699__$1))
{var c__4408__auto___21700 = cljs.core.chunk_first.call(null,seq__21684_21699__$1);{
var G__21701 = cljs.core.chunk_rest.call(null,seq__21684_21699__$1);
var G__21702 = c__4408__auto___21700;
var G__21703 = cljs.core.count.call(null,c__4408__auto___21700);
var G__21704 = (0);
seq__21684_21689 = G__21701;
chunk__21685_21690 = G__21702;
count__21686_21691 = G__21703;
i__21687_21692 = G__21704;
continue;
}
} else
{var node_21705 = cljs.core.first.call(null,seq__21684_21699__$1);node_21705.innerHTML = value_21688;
{
var G__21706 = cljs.core.next.call(null,seq__21684_21699__$1);
var G__21707 = null;
var G__21708 = (0);
var G__21709 = (0);
seq__21684_21689 = G__21706;
chunk__21685_21690 = G__21707;
count__21686_21691 = G__21708;
i__21687_21692 = G__21709;
continue;
}
}
} else
{}
}
break;
}
}catch (e21683){if((e21683 instanceof Error))
{var e_21710 = e21683;domina.replace_children_BANG_.call(null,content,value_21688);
} else
{throw e21683;

}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3627__auto__ = bubble;if(cljs.core.truth_(and__3627__auto__))
{return (value == null);
} else
{return and__3627__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3639__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21717_21721 = cljs.core.seq.call(null,children);var chunk__21718_21722 = null;var count__21719_21723 = (0);var i__21720_21724 = (0);while(true){
if((i__21720_21724 < count__21719_21723))
{var child_21725 = cljs.core._nth.call(null,chunk__21718_21722,i__21720_21724);frag.appendChild(child_21725);
{
var G__21726 = seq__21717_21721;
var G__21727 = chunk__21718_21722;
var G__21728 = count__21719_21723;
var G__21729 = (i__21720_21724 + (1));
seq__21717_21721 = G__21726;
chunk__21718_21722 = G__21727;
count__21719_21723 = G__21728;
i__21720_21724 = G__21729;
continue;
}
} else
{var temp__4126__auto___21730 = cljs.core.seq.call(null,seq__21717_21721);if(temp__4126__auto___21730)
{var seq__21717_21731__$1 = temp__4126__auto___21730;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21717_21731__$1))
{var c__4408__auto___21732 = cljs.core.chunk_first.call(null,seq__21717_21731__$1);{
var G__21733 = cljs.core.chunk_rest.call(null,seq__21717_21731__$1);
var G__21734 = c__4408__auto___21732;
var G__21735 = cljs.core.count.call(null,c__4408__auto___21732);
var G__21736 = (0);
seq__21717_21721 = G__21733;
chunk__21718_21722 = G__21734;
count__21719_21723 = G__21735;
i__21720_21724 = G__21736;
continue;
}
} else
{var child_21737 = cljs.core.first.call(null,seq__21717_21731__$1);frag.appendChild(child_21737);
{
var G__21738 = cljs.core.next.call(null,seq__21717_21731__$1);
var G__21739 = null;
var G__21740 = (0);
var G__21741 = (0);
seq__21717_21721 = G__21738;
chunk__21718_21722 = G__21739;
count__21719_21723 = G__21740;
i__21720_21724 = G__21741;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__21711_SHARP_,p2__21712_SHARP_){return f.call(null,p1__21711_SHARP_,p2__21712_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3627__auto__ = obj;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3627__auto____$1)
{return obj.length;
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__21743 = list_thing;if(G__21743)
{var bit__4302__auto__ = (G__21743.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21743.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21743.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21743);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21743);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__21744 = content;if(G__21744)
{var bit__4302__auto__ = (G__21744.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21744.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21744.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21744);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21744);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__21745 = content;if(G__21745)
{var bit__4302__auto__ = (G__21745.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21745.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21745.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21745);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21745);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
