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
var opt_wrapper_21299 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_21300 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_21301 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_21301,opt_wrapper_21299,table_section_wrapper_21300,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_21299,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_21300,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_21300,cell_wrapper_21301,table_section_wrapper_21300,table_section_wrapper_21300]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__21306 = cljs.core.seq.call(null,tbody);var chunk__21307 = null;var count__21308 = (0);var i__21309 = (0);while(true){
if((i__21309 < count__21308))
{var child = cljs.core._nth.call(null,chunk__21307,i__21309);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21310 = seq__21306;
var G__21311 = chunk__21307;
var G__21312 = count__21308;
var G__21313 = (i__21309 + (1));
seq__21306 = G__21310;
chunk__21307 = G__21311;
count__21308 = G__21312;
i__21309 = G__21313;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21306);if(temp__4126__auto__)
{var seq__21306__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21306__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21306__$1);{
var G__21314 = cljs.core.chunk_rest.call(null,seq__21306__$1);
var G__21315 = c__4408__auto__;
var G__21316 = cljs.core.count.call(null,c__4408__auto__);
var G__21317 = (0);
seq__21306 = G__21314;
chunk__21307 = G__21315;
count__21308 = G__21316;
i__21309 = G__21317;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__21306__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21318 = cljs.core.next.call(null,seq__21306__$1);
var G__21319 = null;
var G__21320 = (0);
var G__21321 = (0);
seq__21306 = G__21318;
chunk__21307 = G__21319;
count__21308 = G__21320;
i__21309 = G__21321;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__21323 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__21323,(0),null);var start_wrap = cljs.core.nth.call(null,vec__21323,(1),null);var end_wrap = cljs.core.nth.call(null,vec__21323,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__21324 = wrapper.lastChild;
var G__21325 = (level - (1));
wrapper = G__21324;
level = G__21325;
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
domina.DomContent = (function (){var obj21327 = {};return obj21327;
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
log_debug.cljs$lang$applyTo = (function (arglist__21328){
var mesg = cljs.core.seq(arglist__21328);
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
log.cljs$lang$applyTo = (function (arglist__21329){
var mesg = cljs.core.seq(arglist__21329);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__21330){
var contents = cljs.core.seq(arglist__21330);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__21331_SHARP_){return p1__21331_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__21332_SHARP_,p2__21333_SHARP_){return goog.dom.insertChildAt(p1__21332_SHARP_,p2__21333_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21335_SHARP_,p2__21334_SHARP_){return goog.dom.insertSiblingBefore(p2__21334_SHARP_,p1__21335_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21337_SHARP_,p2__21336_SHARP_){return goog.dom.insertSiblingAfter(p2__21336_SHARP_,p1__21337_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__21339_SHARP_,p2__21338_SHARP_){return goog.dom.replaceNode(p2__21338_SHARP_,p1__21339_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__21344_21348 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21345_21349 = null;var count__21346_21350 = (0);var i__21347_21351 = (0);while(true){
if((i__21347_21351 < count__21346_21350))
{var n_21352 = cljs.core._nth.call(null,chunk__21345_21349,i__21347_21351);goog.style.setStyle(n_21352,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21353 = seq__21344_21348;
var G__21354 = chunk__21345_21349;
var G__21355 = count__21346_21350;
var G__21356 = (i__21347_21351 + (1));
seq__21344_21348 = G__21353;
chunk__21345_21349 = G__21354;
count__21346_21350 = G__21355;
i__21347_21351 = G__21356;
continue;
}
} else
{var temp__4126__auto___21357 = cljs.core.seq.call(null,seq__21344_21348);if(temp__4126__auto___21357)
{var seq__21344_21358__$1 = temp__4126__auto___21357;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21344_21358__$1))
{var c__4408__auto___21359 = cljs.core.chunk_first.call(null,seq__21344_21358__$1);{
var G__21360 = cljs.core.chunk_rest.call(null,seq__21344_21358__$1);
var G__21361 = c__4408__auto___21359;
var G__21362 = cljs.core.count.call(null,c__4408__auto___21359);
var G__21363 = (0);
seq__21344_21348 = G__21360;
chunk__21345_21349 = G__21361;
count__21346_21350 = G__21362;
i__21347_21351 = G__21363;
continue;
}
} else
{var n_21364 = cljs.core.first.call(null,seq__21344_21358__$1);goog.style.setStyle(n_21364,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21365 = cljs.core.next.call(null,seq__21344_21358__$1);
var G__21366 = null;
var G__21367 = (0);
var G__21368 = (0);
seq__21344_21348 = G__21365;
chunk__21345_21349 = G__21366;
count__21346_21350 = G__21367;
i__21347_21351 = G__21368;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21369){
var content = cljs.core.first(arglist__21369);
arglist__21369 = cljs.core.next(arglist__21369);
var name = cljs.core.first(arglist__21369);
var value = cljs.core.rest(arglist__21369);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__21374_21378 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21375_21379 = null;var count__21376_21380 = (0);var i__21377_21381 = (0);while(true){
if((i__21377_21381 < count__21376_21380))
{var n_21382 = cljs.core._nth.call(null,chunk__21375_21379,i__21377_21381);n_21382.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21383 = seq__21374_21378;
var G__21384 = chunk__21375_21379;
var G__21385 = count__21376_21380;
var G__21386 = (i__21377_21381 + (1));
seq__21374_21378 = G__21383;
chunk__21375_21379 = G__21384;
count__21376_21380 = G__21385;
i__21377_21381 = G__21386;
continue;
}
} else
{var temp__4126__auto___21387 = cljs.core.seq.call(null,seq__21374_21378);if(temp__4126__auto___21387)
{var seq__21374_21388__$1 = temp__4126__auto___21387;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21374_21388__$1))
{var c__4408__auto___21389 = cljs.core.chunk_first.call(null,seq__21374_21388__$1);{
var G__21390 = cljs.core.chunk_rest.call(null,seq__21374_21388__$1);
var G__21391 = c__4408__auto___21389;
var G__21392 = cljs.core.count.call(null,c__4408__auto___21389);
var G__21393 = (0);
seq__21374_21378 = G__21390;
chunk__21375_21379 = G__21391;
count__21376_21380 = G__21392;
i__21377_21381 = G__21393;
continue;
}
} else
{var n_21394 = cljs.core.first.call(null,seq__21374_21388__$1);n_21394.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21395 = cljs.core.next.call(null,seq__21374_21388__$1);
var G__21396 = null;
var G__21397 = (0);
var G__21398 = (0);
seq__21374_21378 = G__21395;
chunk__21375_21379 = G__21396;
count__21376_21380 = G__21397;
i__21377_21381 = G__21398;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__21399){
var content = cljs.core.first(arglist__21399);
arglist__21399 = cljs.core.next(arglist__21399);
var name = cljs.core.first(arglist__21399);
var value = cljs.core.rest(arglist__21399);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__21404_21408 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21405_21409 = null;var count__21406_21410 = (0);var i__21407_21411 = (0);while(true){
if((i__21407_21411 < count__21406_21410))
{var n_21412 = cljs.core._nth.call(null,chunk__21405_21409,i__21407_21411);n_21412.removeAttribute(cljs.core.name.call(null,name));
{
var G__21413 = seq__21404_21408;
var G__21414 = chunk__21405_21409;
var G__21415 = count__21406_21410;
var G__21416 = (i__21407_21411 + (1));
seq__21404_21408 = G__21413;
chunk__21405_21409 = G__21414;
count__21406_21410 = G__21415;
i__21407_21411 = G__21416;
continue;
}
} else
{var temp__4126__auto___21417 = cljs.core.seq.call(null,seq__21404_21408);if(temp__4126__auto___21417)
{var seq__21404_21418__$1 = temp__4126__auto___21417;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21404_21418__$1))
{var c__4408__auto___21419 = cljs.core.chunk_first.call(null,seq__21404_21418__$1);{
var G__21420 = cljs.core.chunk_rest.call(null,seq__21404_21418__$1);
var G__21421 = c__4408__auto___21419;
var G__21422 = cljs.core.count.call(null,c__4408__auto___21419);
var G__21423 = (0);
seq__21404_21408 = G__21420;
chunk__21405_21409 = G__21421;
count__21406_21410 = G__21422;
i__21407_21411 = G__21423;
continue;
}
} else
{var n_21424 = cljs.core.first.call(null,seq__21404_21418__$1);n_21424.removeAttribute(cljs.core.name.call(null,name));
{
var G__21425 = cljs.core.next.call(null,seq__21404_21418__$1);
var G__21426 = null;
var G__21427 = (0);
var G__21428 = (0);
seq__21404_21408 = G__21425;
chunk__21405_21409 = G__21426;
count__21406_21410 = G__21427;
i__21407_21411 = G__21428;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__21430 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__21430,(0),null);var v = cljs.core.nth.call(null,vec__21430,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__21431_SHARP_){var attr = attrs__$1.item(p1__21431_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__21438_21444 = cljs.core.seq.call(null,styles);var chunk__21439_21445 = null;var count__21440_21446 = (0);var i__21441_21447 = (0);while(true){
if((i__21441_21447 < count__21440_21446))
{var vec__21442_21448 = cljs.core._nth.call(null,chunk__21439_21445,i__21441_21447);var name_21449 = cljs.core.nth.call(null,vec__21442_21448,(0),null);var value_21450 = cljs.core.nth.call(null,vec__21442_21448,(1),null);domina.set_style_BANG_.call(null,content,name_21449,value_21450);
{
var G__21451 = seq__21438_21444;
var G__21452 = chunk__21439_21445;
var G__21453 = count__21440_21446;
var G__21454 = (i__21441_21447 + (1));
seq__21438_21444 = G__21451;
chunk__21439_21445 = G__21452;
count__21440_21446 = G__21453;
i__21441_21447 = G__21454;
continue;
}
} else
{var temp__4126__auto___21455 = cljs.core.seq.call(null,seq__21438_21444);if(temp__4126__auto___21455)
{var seq__21438_21456__$1 = temp__4126__auto___21455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21438_21456__$1))
{var c__4408__auto___21457 = cljs.core.chunk_first.call(null,seq__21438_21456__$1);{
var G__21458 = cljs.core.chunk_rest.call(null,seq__21438_21456__$1);
var G__21459 = c__4408__auto___21457;
var G__21460 = cljs.core.count.call(null,c__4408__auto___21457);
var G__21461 = (0);
seq__21438_21444 = G__21458;
chunk__21439_21445 = G__21459;
count__21440_21446 = G__21460;
i__21441_21447 = G__21461;
continue;
}
} else
{var vec__21443_21462 = cljs.core.first.call(null,seq__21438_21456__$1);var name_21463 = cljs.core.nth.call(null,vec__21443_21462,(0),null);var value_21464 = cljs.core.nth.call(null,vec__21443_21462,(1),null);domina.set_style_BANG_.call(null,content,name_21463,value_21464);
{
var G__21465 = cljs.core.next.call(null,seq__21438_21456__$1);
var G__21466 = null;
var G__21467 = (0);
var G__21468 = (0);
seq__21438_21444 = G__21465;
chunk__21439_21445 = G__21466;
count__21440_21446 = G__21467;
i__21441_21447 = G__21468;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__21475_21481 = cljs.core.seq.call(null,attrs);var chunk__21476_21482 = null;var count__21477_21483 = (0);var i__21478_21484 = (0);while(true){
if((i__21478_21484 < count__21477_21483))
{var vec__21479_21485 = cljs.core._nth.call(null,chunk__21476_21482,i__21478_21484);var name_21486 = cljs.core.nth.call(null,vec__21479_21485,(0),null);var value_21487 = cljs.core.nth.call(null,vec__21479_21485,(1),null);domina.set_attr_BANG_.call(null,content,name_21486,value_21487);
{
var G__21488 = seq__21475_21481;
var G__21489 = chunk__21476_21482;
var G__21490 = count__21477_21483;
var G__21491 = (i__21478_21484 + (1));
seq__21475_21481 = G__21488;
chunk__21476_21482 = G__21489;
count__21477_21483 = G__21490;
i__21478_21484 = G__21491;
continue;
}
} else
{var temp__4126__auto___21492 = cljs.core.seq.call(null,seq__21475_21481);if(temp__4126__auto___21492)
{var seq__21475_21493__$1 = temp__4126__auto___21492;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21475_21493__$1))
{var c__4408__auto___21494 = cljs.core.chunk_first.call(null,seq__21475_21493__$1);{
var G__21495 = cljs.core.chunk_rest.call(null,seq__21475_21493__$1);
var G__21496 = c__4408__auto___21494;
var G__21497 = cljs.core.count.call(null,c__4408__auto___21494);
var G__21498 = (0);
seq__21475_21481 = G__21495;
chunk__21476_21482 = G__21496;
count__21477_21483 = G__21497;
i__21478_21484 = G__21498;
continue;
}
} else
{var vec__21480_21499 = cljs.core.first.call(null,seq__21475_21493__$1);var name_21500 = cljs.core.nth.call(null,vec__21480_21499,(0),null);var value_21501 = cljs.core.nth.call(null,vec__21480_21499,(1),null);domina.set_attr_BANG_.call(null,content,name_21500,value_21501);
{
var G__21502 = cljs.core.next.call(null,seq__21475_21493__$1);
var G__21503 = null;
var G__21504 = (0);
var G__21505 = (0);
seq__21475_21481 = G__21502;
chunk__21476_21482 = G__21503;
count__21477_21483 = G__21504;
i__21478_21484 = G__21505;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__21510_21514 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21511_21515 = null;var count__21512_21516 = (0);var i__21513_21517 = (0);while(true){
if((i__21513_21517 < count__21512_21516))
{var node_21518 = cljs.core._nth.call(null,chunk__21511_21515,i__21513_21517);goog.dom.classes.add(node_21518,class$);
{
var G__21519 = seq__21510_21514;
var G__21520 = chunk__21511_21515;
var G__21521 = count__21512_21516;
var G__21522 = (i__21513_21517 + (1));
seq__21510_21514 = G__21519;
chunk__21511_21515 = G__21520;
count__21512_21516 = G__21521;
i__21513_21517 = G__21522;
continue;
}
} else
{var temp__4126__auto___21523 = cljs.core.seq.call(null,seq__21510_21514);if(temp__4126__auto___21523)
{var seq__21510_21524__$1 = temp__4126__auto___21523;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21510_21524__$1))
{var c__4408__auto___21525 = cljs.core.chunk_first.call(null,seq__21510_21524__$1);{
var G__21526 = cljs.core.chunk_rest.call(null,seq__21510_21524__$1);
var G__21527 = c__4408__auto___21525;
var G__21528 = cljs.core.count.call(null,c__4408__auto___21525);
var G__21529 = (0);
seq__21510_21514 = G__21526;
chunk__21511_21515 = G__21527;
count__21512_21516 = G__21528;
i__21513_21517 = G__21529;
continue;
}
} else
{var node_21530 = cljs.core.first.call(null,seq__21510_21524__$1);goog.dom.classes.add(node_21530,class$);
{
var G__21531 = cljs.core.next.call(null,seq__21510_21524__$1);
var G__21532 = null;
var G__21533 = (0);
var G__21534 = (0);
seq__21510_21514 = G__21531;
chunk__21511_21515 = G__21532;
count__21512_21516 = G__21533;
i__21513_21517 = G__21534;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__21539_21543 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21540_21544 = null;var count__21541_21545 = (0);var i__21542_21546 = (0);while(true){
if((i__21542_21546 < count__21541_21545))
{var node_21547 = cljs.core._nth.call(null,chunk__21540_21544,i__21542_21546);goog.dom.classes.remove(node_21547,class$);
{
var G__21548 = seq__21539_21543;
var G__21549 = chunk__21540_21544;
var G__21550 = count__21541_21545;
var G__21551 = (i__21542_21546 + (1));
seq__21539_21543 = G__21548;
chunk__21540_21544 = G__21549;
count__21541_21545 = G__21550;
i__21542_21546 = G__21551;
continue;
}
} else
{var temp__4126__auto___21552 = cljs.core.seq.call(null,seq__21539_21543);if(temp__4126__auto___21552)
{var seq__21539_21553__$1 = temp__4126__auto___21552;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21539_21553__$1))
{var c__4408__auto___21554 = cljs.core.chunk_first.call(null,seq__21539_21553__$1);{
var G__21555 = cljs.core.chunk_rest.call(null,seq__21539_21553__$1);
var G__21556 = c__4408__auto___21554;
var G__21557 = cljs.core.count.call(null,c__4408__auto___21554);
var G__21558 = (0);
seq__21539_21543 = G__21555;
chunk__21540_21544 = G__21556;
count__21541_21545 = G__21557;
i__21542_21546 = G__21558;
continue;
}
} else
{var node_21559 = cljs.core.first.call(null,seq__21539_21553__$1);goog.dom.classes.remove(node_21559,class$);
{
var G__21560 = cljs.core.next.call(null,seq__21539_21553__$1);
var G__21561 = null;
var G__21562 = (0);
var G__21563 = (0);
seq__21539_21543 = G__21560;
chunk__21540_21544 = G__21561;
count__21541_21545 = G__21562;
i__21542_21546 = G__21563;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__21568_21572 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21569_21573 = null;var count__21570_21574 = (0);var i__21571_21575 = (0);while(true){
if((i__21571_21575 < count__21570_21574))
{var node_21576 = cljs.core._nth.call(null,chunk__21569_21573,i__21571_21575);goog.dom.classes.toggle(node_21576,class$);
{
var G__21577 = seq__21568_21572;
var G__21578 = chunk__21569_21573;
var G__21579 = count__21570_21574;
var G__21580 = (i__21571_21575 + (1));
seq__21568_21572 = G__21577;
chunk__21569_21573 = G__21578;
count__21570_21574 = G__21579;
i__21571_21575 = G__21580;
continue;
}
} else
{var temp__4126__auto___21581 = cljs.core.seq.call(null,seq__21568_21572);if(temp__4126__auto___21581)
{var seq__21568_21582__$1 = temp__4126__auto___21581;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21568_21582__$1))
{var c__4408__auto___21583 = cljs.core.chunk_first.call(null,seq__21568_21582__$1);{
var G__21584 = cljs.core.chunk_rest.call(null,seq__21568_21582__$1);
var G__21585 = c__4408__auto___21583;
var G__21586 = cljs.core.count.call(null,c__4408__auto___21583);
var G__21587 = (0);
seq__21568_21572 = G__21584;
chunk__21569_21573 = G__21585;
count__21570_21574 = G__21586;
i__21571_21575 = G__21587;
continue;
}
} else
{var node_21588 = cljs.core.first.call(null,seq__21568_21582__$1);goog.dom.classes.toggle(node_21588,class$);
{
var G__21589 = cljs.core.next.call(null,seq__21568_21582__$1);
var G__21590 = null;
var G__21591 = (0);
var G__21592 = (0);
seq__21568_21572 = G__21589;
chunk__21569_21573 = G__21590;
count__21570_21574 = G__21591;
i__21571_21575 = G__21592;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_21601__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__21597_21602 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21598_21603 = null;var count__21599_21604 = (0);var i__21600_21605 = (0);while(true){
if((i__21600_21605 < count__21599_21604))
{var node_21606 = cljs.core._nth.call(null,chunk__21598_21603,i__21600_21605);goog.dom.classes.set(node_21606,classes_21601__$1);
{
var G__21607 = seq__21597_21602;
var G__21608 = chunk__21598_21603;
var G__21609 = count__21599_21604;
var G__21610 = (i__21600_21605 + (1));
seq__21597_21602 = G__21607;
chunk__21598_21603 = G__21608;
count__21599_21604 = G__21609;
i__21600_21605 = G__21610;
continue;
}
} else
{var temp__4126__auto___21611 = cljs.core.seq.call(null,seq__21597_21602);if(temp__4126__auto___21611)
{var seq__21597_21612__$1 = temp__4126__auto___21611;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21597_21612__$1))
{var c__4408__auto___21613 = cljs.core.chunk_first.call(null,seq__21597_21612__$1);{
var G__21614 = cljs.core.chunk_rest.call(null,seq__21597_21612__$1);
var G__21615 = c__4408__auto___21613;
var G__21616 = cljs.core.count.call(null,c__4408__auto___21613);
var G__21617 = (0);
seq__21597_21602 = G__21614;
chunk__21598_21603 = G__21615;
count__21599_21604 = G__21616;
i__21600_21605 = G__21617;
continue;
}
} else
{var node_21618 = cljs.core.first.call(null,seq__21597_21612__$1);goog.dom.classes.set(node_21618,classes_21601__$1);
{
var G__21619 = cljs.core.next.call(null,seq__21597_21612__$1);
var G__21620 = null;
var G__21621 = (0);
var G__21622 = (0);
seq__21597_21602 = G__21619;
chunk__21598_21603 = G__21620;
count__21599_21604 = G__21621;
i__21600_21605 = G__21622;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__21627_21631 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21628_21632 = null;var count__21629_21633 = (0);var i__21630_21634 = (0);while(true){
if((i__21630_21634 < count__21629_21633))
{var node_21635 = cljs.core._nth.call(null,chunk__21628_21632,i__21630_21634);goog.dom.setTextContent(node_21635,value);
{
var G__21636 = seq__21627_21631;
var G__21637 = chunk__21628_21632;
var G__21638 = count__21629_21633;
var G__21639 = (i__21630_21634 + (1));
seq__21627_21631 = G__21636;
chunk__21628_21632 = G__21637;
count__21629_21633 = G__21638;
i__21630_21634 = G__21639;
continue;
}
} else
{var temp__4126__auto___21640 = cljs.core.seq.call(null,seq__21627_21631);if(temp__4126__auto___21640)
{var seq__21627_21641__$1 = temp__4126__auto___21640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21627_21641__$1))
{var c__4408__auto___21642 = cljs.core.chunk_first.call(null,seq__21627_21641__$1);{
var G__21643 = cljs.core.chunk_rest.call(null,seq__21627_21641__$1);
var G__21644 = c__4408__auto___21642;
var G__21645 = cljs.core.count.call(null,c__4408__auto___21642);
var G__21646 = (0);
seq__21627_21631 = G__21643;
chunk__21628_21632 = G__21644;
count__21629_21633 = G__21645;
i__21630_21634 = G__21646;
continue;
}
} else
{var node_21647 = cljs.core.first.call(null,seq__21627_21641__$1);goog.dom.setTextContent(node_21647,value);
{
var G__21648 = cljs.core.next.call(null,seq__21627_21641__$1);
var G__21649 = null;
var G__21650 = (0);
var G__21651 = (0);
seq__21627_21631 = G__21648;
chunk__21628_21632 = G__21649;
count__21629_21633 = G__21650;
i__21630_21634 = G__21651;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21656_21660 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21657_21661 = null;var count__21658_21662 = (0);var i__21659_21663 = (0);while(true){
if((i__21659_21663 < count__21658_21662))
{var node_21664 = cljs.core._nth.call(null,chunk__21657_21661,i__21659_21663);goog.dom.forms.setValue(node_21664,value);
{
var G__21665 = seq__21656_21660;
var G__21666 = chunk__21657_21661;
var G__21667 = count__21658_21662;
var G__21668 = (i__21659_21663 + (1));
seq__21656_21660 = G__21665;
chunk__21657_21661 = G__21666;
count__21658_21662 = G__21667;
i__21659_21663 = G__21668;
continue;
}
} else
{var temp__4126__auto___21669 = cljs.core.seq.call(null,seq__21656_21660);if(temp__4126__auto___21669)
{var seq__21656_21670__$1 = temp__4126__auto___21669;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21656_21670__$1))
{var c__4408__auto___21671 = cljs.core.chunk_first.call(null,seq__21656_21670__$1);{
var G__21672 = cljs.core.chunk_rest.call(null,seq__21656_21670__$1);
var G__21673 = c__4408__auto___21671;
var G__21674 = cljs.core.count.call(null,c__4408__auto___21671);
var G__21675 = (0);
seq__21656_21660 = G__21672;
chunk__21657_21661 = G__21673;
count__21658_21662 = G__21674;
i__21659_21663 = G__21675;
continue;
}
} else
{var node_21676 = cljs.core.first.call(null,seq__21656_21670__$1);goog.dom.forms.setValue(node_21676,value);
{
var G__21677 = cljs.core.next.call(null,seq__21656_21670__$1);
var G__21678 = null;
var G__21679 = (0);
var G__21680 = (0);
seq__21656_21660 = G__21677;
chunk__21657_21661 = G__21678;
count__21658_21662 = G__21679;
i__21659_21663 = G__21680;
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
{var value_21691 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21687_21692 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21688_21693 = null;var count__21689_21694 = (0);var i__21690_21695 = (0);while(true){
if((i__21690_21695 < count__21689_21694))
{var node_21696 = cljs.core._nth.call(null,chunk__21688_21693,i__21690_21695);node_21696.innerHTML = value_21691;
{
var G__21697 = seq__21687_21692;
var G__21698 = chunk__21688_21693;
var G__21699 = count__21689_21694;
var G__21700 = (i__21690_21695 + (1));
seq__21687_21692 = G__21697;
chunk__21688_21693 = G__21698;
count__21689_21694 = G__21699;
i__21690_21695 = G__21700;
continue;
}
} else
{var temp__4126__auto___21701 = cljs.core.seq.call(null,seq__21687_21692);if(temp__4126__auto___21701)
{var seq__21687_21702__$1 = temp__4126__auto___21701;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21687_21702__$1))
{var c__4408__auto___21703 = cljs.core.chunk_first.call(null,seq__21687_21702__$1);{
var G__21704 = cljs.core.chunk_rest.call(null,seq__21687_21702__$1);
var G__21705 = c__4408__auto___21703;
var G__21706 = cljs.core.count.call(null,c__4408__auto___21703);
var G__21707 = (0);
seq__21687_21692 = G__21704;
chunk__21688_21693 = G__21705;
count__21689_21694 = G__21706;
i__21690_21695 = G__21707;
continue;
}
} else
{var node_21708 = cljs.core.first.call(null,seq__21687_21702__$1);node_21708.innerHTML = value_21691;
{
var G__21709 = cljs.core.next.call(null,seq__21687_21702__$1);
var G__21710 = null;
var G__21711 = (0);
var G__21712 = (0);
seq__21687_21692 = G__21709;
chunk__21688_21693 = G__21710;
count__21689_21694 = G__21711;
i__21690_21695 = G__21712;
continue;
}
}
} else
{}
}
break;
}
}catch (e21686){if((e21686 instanceof Error))
{var e_21713 = e21686;domina.replace_children_BANG_.call(null,content,value_21691);
} else
{throw e21686;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21720_21724 = cljs.core.seq.call(null,children);var chunk__21721_21725 = null;var count__21722_21726 = (0);var i__21723_21727 = (0);while(true){
if((i__21723_21727 < count__21722_21726))
{var child_21728 = cljs.core._nth.call(null,chunk__21721_21725,i__21723_21727);frag.appendChild(child_21728);
{
var G__21729 = seq__21720_21724;
var G__21730 = chunk__21721_21725;
var G__21731 = count__21722_21726;
var G__21732 = (i__21723_21727 + (1));
seq__21720_21724 = G__21729;
chunk__21721_21725 = G__21730;
count__21722_21726 = G__21731;
i__21723_21727 = G__21732;
continue;
}
} else
{var temp__4126__auto___21733 = cljs.core.seq.call(null,seq__21720_21724);if(temp__4126__auto___21733)
{var seq__21720_21734__$1 = temp__4126__auto___21733;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21720_21734__$1))
{var c__4408__auto___21735 = cljs.core.chunk_first.call(null,seq__21720_21734__$1);{
var G__21736 = cljs.core.chunk_rest.call(null,seq__21720_21734__$1);
var G__21737 = c__4408__auto___21735;
var G__21738 = cljs.core.count.call(null,c__4408__auto___21735);
var G__21739 = (0);
seq__21720_21724 = G__21736;
chunk__21721_21725 = G__21737;
count__21722_21726 = G__21738;
i__21723_21727 = G__21739;
continue;
}
} else
{var child_21740 = cljs.core.first.call(null,seq__21720_21734__$1);frag.appendChild(child_21740);
{
var G__21741 = cljs.core.next.call(null,seq__21720_21734__$1);
var G__21742 = null;
var G__21743 = (0);
var G__21744 = (0);
seq__21720_21724 = G__21741;
chunk__21721_21725 = G__21742;
count__21722_21726 = G__21743;
i__21723_21727 = G__21744;
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
return (function (p1__21714_SHARP_,p2__21715_SHARP_){return f.call(null,p1__21714_SHARP_,p2__21715_SHARP_);
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
{if((function (){var G__21746 = list_thing;if(G__21746)
{var bit__4302__auto__ = (G__21746.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21746.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21746.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21746);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21746);
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
{if((function (){var G__21747 = content;if(G__21747)
{var bit__4302__auto__ = (G__21747.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21747.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21747.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21747);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21747);
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
{if((function (){var G__21748 = content;if(G__21748)
{var bit__4302__auto__ = (G__21748.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21748.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21748.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21748);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21748);
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
