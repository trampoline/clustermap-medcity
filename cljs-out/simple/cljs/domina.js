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
var opt_wrapper_21316 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_21317 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_21318 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_21318,opt_wrapper_21316,table_section_wrapper_21317,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_21316,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_21317,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_21317,cell_wrapper_21318,table_section_wrapper_21317,table_section_wrapper_21317]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__21323 = cljs.core.seq.call(null,tbody);var chunk__21324 = null;var count__21325 = (0);var i__21326 = (0);while(true){
if((i__21326 < count__21325))
{var child = cljs.core._nth.call(null,chunk__21324,i__21326);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21327 = seq__21323;
var G__21328 = chunk__21324;
var G__21329 = count__21325;
var G__21330 = (i__21326 + (1));
seq__21323 = G__21327;
chunk__21324 = G__21328;
count__21325 = G__21329;
i__21326 = G__21330;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21323);if(temp__4126__auto__)
{var seq__21323__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21323__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21323__$1);{
var G__21331 = cljs.core.chunk_rest.call(null,seq__21323__$1);
var G__21332 = c__4408__auto__;
var G__21333 = cljs.core.count.call(null,c__4408__auto__);
var G__21334 = (0);
seq__21323 = G__21331;
chunk__21324 = G__21332;
count__21325 = G__21333;
i__21326 = G__21334;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__21323__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21335 = cljs.core.next.call(null,seq__21323__$1);
var G__21336 = null;
var G__21337 = (0);
var G__21338 = (0);
seq__21323 = G__21335;
chunk__21324 = G__21336;
count__21325 = G__21337;
i__21326 = G__21338;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__21340 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__21340,(0),null);var start_wrap = cljs.core.nth.call(null,vec__21340,(1),null);var end_wrap = cljs.core.nth.call(null,vec__21340,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__21341 = wrapper.lastChild;
var G__21342 = (level - (1));
wrapper = G__21341;
level = G__21342;
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
domina.DomContent = (function (){var obj21344 = {};return obj21344;
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
log_debug.cljs$lang$applyTo = (function (arglist__21345){
var mesg = cljs.core.seq(arglist__21345);
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
log.cljs$lang$applyTo = (function (arglist__21346){
var mesg = cljs.core.seq(arglist__21346);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__21347){
var contents = cljs.core.seq(arglist__21347);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__21348_SHARP_){return p1__21348_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__21349_SHARP_,p2__21350_SHARP_){return goog.dom.insertChildAt(p1__21349_SHARP_,p2__21350_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21352_SHARP_,p2__21351_SHARP_){return goog.dom.insertSiblingBefore(p2__21351_SHARP_,p1__21352_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21354_SHARP_,p2__21353_SHARP_){return goog.dom.insertSiblingAfter(p2__21353_SHARP_,p1__21354_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__21356_SHARP_,p2__21355_SHARP_){return goog.dom.replaceNode(p2__21355_SHARP_,p1__21356_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__21361_21365 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21362_21366 = null;var count__21363_21367 = (0);var i__21364_21368 = (0);while(true){
if((i__21364_21368 < count__21363_21367))
{var n_21369 = cljs.core._nth.call(null,chunk__21362_21366,i__21364_21368);goog.style.setStyle(n_21369,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21370 = seq__21361_21365;
var G__21371 = chunk__21362_21366;
var G__21372 = count__21363_21367;
var G__21373 = (i__21364_21368 + (1));
seq__21361_21365 = G__21370;
chunk__21362_21366 = G__21371;
count__21363_21367 = G__21372;
i__21364_21368 = G__21373;
continue;
}
} else
{var temp__4126__auto___21374 = cljs.core.seq.call(null,seq__21361_21365);if(temp__4126__auto___21374)
{var seq__21361_21375__$1 = temp__4126__auto___21374;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21361_21375__$1))
{var c__4408__auto___21376 = cljs.core.chunk_first.call(null,seq__21361_21375__$1);{
var G__21377 = cljs.core.chunk_rest.call(null,seq__21361_21375__$1);
var G__21378 = c__4408__auto___21376;
var G__21379 = cljs.core.count.call(null,c__4408__auto___21376);
var G__21380 = (0);
seq__21361_21365 = G__21377;
chunk__21362_21366 = G__21378;
count__21363_21367 = G__21379;
i__21364_21368 = G__21380;
continue;
}
} else
{var n_21381 = cljs.core.first.call(null,seq__21361_21375__$1);goog.style.setStyle(n_21381,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21382 = cljs.core.next.call(null,seq__21361_21375__$1);
var G__21383 = null;
var G__21384 = (0);
var G__21385 = (0);
seq__21361_21365 = G__21382;
chunk__21362_21366 = G__21383;
count__21363_21367 = G__21384;
i__21364_21368 = G__21385;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21386){
var content = cljs.core.first(arglist__21386);
arglist__21386 = cljs.core.next(arglist__21386);
var name = cljs.core.first(arglist__21386);
var value = cljs.core.rest(arglist__21386);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__21391_21395 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21392_21396 = null;var count__21393_21397 = (0);var i__21394_21398 = (0);while(true){
if((i__21394_21398 < count__21393_21397))
{var n_21399 = cljs.core._nth.call(null,chunk__21392_21396,i__21394_21398);n_21399.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21400 = seq__21391_21395;
var G__21401 = chunk__21392_21396;
var G__21402 = count__21393_21397;
var G__21403 = (i__21394_21398 + (1));
seq__21391_21395 = G__21400;
chunk__21392_21396 = G__21401;
count__21393_21397 = G__21402;
i__21394_21398 = G__21403;
continue;
}
} else
{var temp__4126__auto___21404 = cljs.core.seq.call(null,seq__21391_21395);if(temp__4126__auto___21404)
{var seq__21391_21405__$1 = temp__4126__auto___21404;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21391_21405__$1))
{var c__4408__auto___21406 = cljs.core.chunk_first.call(null,seq__21391_21405__$1);{
var G__21407 = cljs.core.chunk_rest.call(null,seq__21391_21405__$1);
var G__21408 = c__4408__auto___21406;
var G__21409 = cljs.core.count.call(null,c__4408__auto___21406);
var G__21410 = (0);
seq__21391_21395 = G__21407;
chunk__21392_21396 = G__21408;
count__21393_21397 = G__21409;
i__21394_21398 = G__21410;
continue;
}
} else
{var n_21411 = cljs.core.first.call(null,seq__21391_21405__$1);n_21411.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21412 = cljs.core.next.call(null,seq__21391_21405__$1);
var G__21413 = null;
var G__21414 = (0);
var G__21415 = (0);
seq__21391_21395 = G__21412;
chunk__21392_21396 = G__21413;
count__21393_21397 = G__21414;
i__21394_21398 = G__21415;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__21416){
var content = cljs.core.first(arglist__21416);
arglist__21416 = cljs.core.next(arglist__21416);
var name = cljs.core.first(arglist__21416);
var value = cljs.core.rest(arglist__21416);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__21421_21425 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21422_21426 = null;var count__21423_21427 = (0);var i__21424_21428 = (0);while(true){
if((i__21424_21428 < count__21423_21427))
{var n_21429 = cljs.core._nth.call(null,chunk__21422_21426,i__21424_21428);n_21429.removeAttribute(cljs.core.name.call(null,name));
{
var G__21430 = seq__21421_21425;
var G__21431 = chunk__21422_21426;
var G__21432 = count__21423_21427;
var G__21433 = (i__21424_21428 + (1));
seq__21421_21425 = G__21430;
chunk__21422_21426 = G__21431;
count__21423_21427 = G__21432;
i__21424_21428 = G__21433;
continue;
}
} else
{var temp__4126__auto___21434 = cljs.core.seq.call(null,seq__21421_21425);if(temp__4126__auto___21434)
{var seq__21421_21435__$1 = temp__4126__auto___21434;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21421_21435__$1))
{var c__4408__auto___21436 = cljs.core.chunk_first.call(null,seq__21421_21435__$1);{
var G__21437 = cljs.core.chunk_rest.call(null,seq__21421_21435__$1);
var G__21438 = c__4408__auto___21436;
var G__21439 = cljs.core.count.call(null,c__4408__auto___21436);
var G__21440 = (0);
seq__21421_21425 = G__21437;
chunk__21422_21426 = G__21438;
count__21423_21427 = G__21439;
i__21424_21428 = G__21440;
continue;
}
} else
{var n_21441 = cljs.core.first.call(null,seq__21421_21435__$1);n_21441.removeAttribute(cljs.core.name.call(null,name));
{
var G__21442 = cljs.core.next.call(null,seq__21421_21435__$1);
var G__21443 = null;
var G__21444 = (0);
var G__21445 = (0);
seq__21421_21425 = G__21442;
chunk__21422_21426 = G__21443;
count__21423_21427 = G__21444;
i__21424_21428 = G__21445;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__21447 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__21447,(0),null);var v = cljs.core.nth.call(null,vec__21447,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__21448_SHARP_){var attr = attrs__$1.item(p1__21448_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__21455_21461 = cljs.core.seq.call(null,styles);var chunk__21456_21462 = null;var count__21457_21463 = (0);var i__21458_21464 = (0);while(true){
if((i__21458_21464 < count__21457_21463))
{var vec__21459_21465 = cljs.core._nth.call(null,chunk__21456_21462,i__21458_21464);var name_21466 = cljs.core.nth.call(null,vec__21459_21465,(0),null);var value_21467 = cljs.core.nth.call(null,vec__21459_21465,(1),null);domina.set_style_BANG_.call(null,content,name_21466,value_21467);
{
var G__21468 = seq__21455_21461;
var G__21469 = chunk__21456_21462;
var G__21470 = count__21457_21463;
var G__21471 = (i__21458_21464 + (1));
seq__21455_21461 = G__21468;
chunk__21456_21462 = G__21469;
count__21457_21463 = G__21470;
i__21458_21464 = G__21471;
continue;
}
} else
{var temp__4126__auto___21472 = cljs.core.seq.call(null,seq__21455_21461);if(temp__4126__auto___21472)
{var seq__21455_21473__$1 = temp__4126__auto___21472;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21455_21473__$1))
{var c__4408__auto___21474 = cljs.core.chunk_first.call(null,seq__21455_21473__$1);{
var G__21475 = cljs.core.chunk_rest.call(null,seq__21455_21473__$1);
var G__21476 = c__4408__auto___21474;
var G__21477 = cljs.core.count.call(null,c__4408__auto___21474);
var G__21478 = (0);
seq__21455_21461 = G__21475;
chunk__21456_21462 = G__21476;
count__21457_21463 = G__21477;
i__21458_21464 = G__21478;
continue;
}
} else
{var vec__21460_21479 = cljs.core.first.call(null,seq__21455_21473__$1);var name_21480 = cljs.core.nth.call(null,vec__21460_21479,(0),null);var value_21481 = cljs.core.nth.call(null,vec__21460_21479,(1),null);domina.set_style_BANG_.call(null,content,name_21480,value_21481);
{
var G__21482 = cljs.core.next.call(null,seq__21455_21473__$1);
var G__21483 = null;
var G__21484 = (0);
var G__21485 = (0);
seq__21455_21461 = G__21482;
chunk__21456_21462 = G__21483;
count__21457_21463 = G__21484;
i__21458_21464 = G__21485;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__21492_21498 = cljs.core.seq.call(null,attrs);var chunk__21493_21499 = null;var count__21494_21500 = (0);var i__21495_21501 = (0);while(true){
if((i__21495_21501 < count__21494_21500))
{var vec__21496_21502 = cljs.core._nth.call(null,chunk__21493_21499,i__21495_21501);var name_21503 = cljs.core.nth.call(null,vec__21496_21502,(0),null);var value_21504 = cljs.core.nth.call(null,vec__21496_21502,(1),null);domina.set_attr_BANG_.call(null,content,name_21503,value_21504);
{
var G__21505 = seq__21492_21498;
var G__21506 = chunk__21493_21499;
var G__21507 = count__21494_21500;
var G__21508 = (i__21495_21501 + (1));
seq__21492_21498 = G__21505;
chunk__21493_21499 = G__21506;
count__21494_21500 = G__21507;
i__21495_21501 = G__21508;
continue;
}
} else
{var temp__4126__auto___21509 = cljs.core.seq.call(null,seq__21492_21498);if(temp__4126__auto___21509)
{var seq__21492_21510__$1 = temp__4126__auto___21509;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21492_21510__$1))
{var c__4408__auto___21511 = cljs.core.chunk_first.call(null,seq__21492_21510__$1);{
var G__21512 = cljs.core.chunk_rest.call(null,seq__21492_21510__$1);
var G__21513 = c__4408__auto___21511;
var G__21514 = cljs.core.count.call(null,c__4408__auto___21511);
var G__21515 = (0);
seq__21492_21498 = G__21512;
chunk__21493_21499 = G__21513;
count__21494_21500 = G__21514;
i__21495_21501 = G__21515;
continue;
}
} else
{var vec__21497_21516 = cljs.core.first.call(null,seq__21492_21510__$1);var name_21517 = cljs.core.nth.call(null,vec__21497_21516,(0),null);var value_21518 = cljs.core.nth.call(null,vec__21497_21516,(1),null);domina.set_attr_BANG_.call(null,content,name_21517,value_21518);
{
var G__21519 = cljs.core.next.call(null,seq__21492_21510__$1);
var G__21520 = null;
var G__21521 = (0);
var G__21522 = (0);
seq__21492_21498 = G__21519;
chunk__21493_21499 = G__21520;
count__21494_21500 = G__21521;
i__21495_21501 = G__21522;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__21527_21531 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21528_21532 = null;var count__21529_21533 = (0);var i__21530_21534 = (0);while(true){
if((i__21530_21534 < count__21529_21533))
{var node_21535 = cljs.core._nth.call(null,chunk__21528_21532,i__21530_21534);goog.dom.classes.add(node_21535,class$);
{
var G__21536 = seq__21527_21531;
var G__21537 = chunk__21528_21532;
var G__21538 = count__21529_21533;
var G__21539 = (i__21530_21534 + (1));
seq__21527_21531 = G__21536;
chunk__21528_21532 = G__21537;
count__21529_21533 = G__21538;
i__21530_21534 = G__21539;
continue;
}
} else
{var temp__4126__auto___21540 = cljs.core.seq.call(null,seq__21527_21531);if(temp__4126__auto___21540)
{var seq__21527_21541__$1 = temp__4126__auto___21540;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21527_21541__$1))
{var c__4408__auto___21542 = cljs.core.chunk_first.call(null,seq__21527_21541__$1);{
var G__21543 = cljs.core.chunk_rest.call(null,seq__21527_21541__$1);
var G__21544 = c__4408__auto___21542;
var G__21545 = cljs.core.count.call(null,c__4408__auto___21542);
var G__21546 = (0);
seq__21527_21531 = G__21543;
chunk__21528_21532 = G__21544;
count__21529_21533 = G__21545;
i__21530_21534 = G__21546;
continue;
}
} else
{var node_21547 = cljs.core.first.call(null,seq__21527_21541__$1);goog.dom.classes.add(node_21547,class$);
{
var G__21548 = cljs.core.next.call(null,seq__21527_21541__$1);
var G__21549 = null;
var G__21550 = (0);
var G__21551 = (0);
seq__21527_21531 = G__21548;
chunk__21528_21532 = G__21549;
count__21529_21533 = G__21550;
i__21530_21534 = G__21551;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__21556_21560 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21557_21561 = null;var count__21558_21562 = (0);var i__21559_21563 = (0);while(true){
if((i__21559_21563 < count__21558_21562))
{var node_21564 = cljs.core._nth.call(null,chunk__21557_21561,i__21559_21563);goog.dom.classes.remove(node_21564,class$);
{
var G__21565 = seq__21556_21560;
var G__21566 = chunk__21557_21561;
var G__21567 = count__21558_21562;
var G__21568 = (i__21559_21563 + (1));
seq__21556_21560 = G__21565;
chunk__21557_21561 = G__21566;
count__21558_21562 = G__21567;
i__21559_21563 = G__21568;
continue;
}
} else
{var temp__4126__auto___21569 = cljs.core.seq.call(null,seq__21556_21560);if(temp__4126__auto___21569)
{var seq__21556_21570__$1 = temp__4126__auto___21569;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21556_21570__$1))
{var c__4408__auto___21571 = cljs.core.chunk_first.call(null,seq__21556_21570__$1);{
var G__21572 = cljs.core.chunk_rest.call(null,seq__21556_21570__$1);
var G__21573 = c__4408__auto___21571;
var G__21574 = cljs.core.count.call(null,c__4408__auto___21571);
var G__21575 = (0);
seq__21556_21560 = G__21572;
chunk__21557_21561 = G__21573;
count__21558_21562 = G__21574;
i__21559_21563 = G__21575;
continue;
}
} else
{var node_21576 = cljs.core.first.call(null,seq__21556_21570__$1);goog.dom.classes.remove(node_21576,class$);
{
var G__21577 = cljs.core.next.call(null,seq__21556_21570__$1);
var G__21578 = null;
var G__21579 = (0);
var G__21580 = (0);
seq__21556_21560 = G__21577;
chunk__21557_21561 = G__21578;
count__21558_21562 = G__21579;
i__21559_21563 = G__21580;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__21585_21589 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21586_21590 = null;var count__21587_21591 = (0);var i__21588_21592 = (0);while(true){
if((i__21588_21592 < count__21587_21591))
{var node_21593 = cljs.core._nth.call(null,chunk__21586_21590,i__21588_21592);goog.dom.classes.toggle(node_21593,class$);
{
var G__21594 = seq__21585_21589;
var G__21595 = chunk__21586_21590;
var G__21596 = count__21587_21591;
var G__21597 = (i__21588_21592 + (1));
seq__21585_21589 = G__21594;
chunk__21586_21590 = G__21595;
count__21587_21591 = G__21596;
i__21588_21592 = G__21597;
continue;
}
} else
{var temp__4126__auto___21598 = cljs.core.seq.call(null,seq__21585_21589);if(temp__4126__auto___21598)
{var seq__21585_21599__$1 = temp__4126__auto___21598;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21585_21599__$1))
{var c__4408__auto___21600 = cljs.core.chunk_first.call(null,seq__21585_21599__$1);{
var G__21601 = cljs.core.chunk_rest.call(null,seq__21585_21599__$1);
var G__21602 = c__4408__auto___21600;
var G__21603 = cljs.core.count.call(null,c__4408__auto___21600);
var G__21604 = (0);
seq__21585_21589 = G__21601;
chunk__21586_21590 = G__21602;
count__21587_21591 = G__21603;
i__21588_21592 = G__21604;
continue;
}
} else
{var node_21605 = cljs.core.first.call(null,seq__21585_21599__$1);goog.dom.classes.toggle(node_21605,class$);
{
var G__21606 = cljs.core.next.call(null,seq__21585_21599__$1);
var G__21607 = null;
var G__21608 = (0);
var G__21609 = (0);
seq__21585_21589 = G__21606;
chunk__21586_21590 = G__21607;
count__21587_21591 = G__21608;
i__21588_21592 = G__21609;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_21618__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__21614_21619 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21615_21620 = null;var count__21616_21621 = (0);var i__21617_21622 = (0);while(true){
if((i__21617_21622 < count__21616_21621))
{var node_21623 = cljs.core._nth.call(null,chunk__21615_21620,i__21617_21622);goog.dom.classes.set(node_21623,classes_21618__$1);
{
var G__21624 = seq__21614_21619;
var G__21625 = chunk__21615_21620;
var G__21626 = count__21616_21621;
var G__21627 = (i__21617_21622 + (1));
seq__21614_21619 = G__21624;
chunk__21615_21620 = G__21625;
count__21616_21621 = G__21626;
i__21617_21622 = G__21627;
continue;
}
} else
{var temp__4126__auto___21628 = cljs.core.seq.call(null,seq__21614_21619);if(temp__4126__auto___21628)
{var seq__21614_21629__$1 = temp__4126__auto___21628;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21614_21629__$1))
{var c__4408__auto___21630 = cljs.core.chunk_first.call(null,seq__21614_21629__$1);{
var G__21631 = cljs.core.chunk_rest.call(null,seq__21614_21629__$1);
var G__21632 = c__4408__auto___21630;
var G__21633 = cljs.core.count.call(null,c__4408__auto___21630);
var G__21634 = (0);
seq__21614_21619 = G__21631;
chunk__21615_21620 = G__21632;
count__21616_21621 = G__21633;
i__21617_21622 = G__21634;
continue;
}
} else
{var node_21635 = cljs.core.first.call(null,seq__21614_21629__$1);goog.dom.classes.set(node_21635,classes_21618__$1);
{
var G__21636 = cljs.core.next.call(null,seq__21614_21629__$1);
var G__21637 = null;
var G__21638 = (0);
var G__21639 = (0);
seq__21614_21619 = G__21636;
chunk__21615_21620 = G__21637;
count__21616_21621 = G__21638;
i__21617_21622 = G__21639;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__21644_21648 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21645_21649 = null;var count__21646_21650 = (0);var i__21647_21651 = (0);while(true){
if((i__21647_21651 < count__21646_21650))
{var node_21652 = cljs.core._nth.call(null,chunk__21645_21649,i__21647_21651);goog.dom.setTextContent(node_21652,value);
{
var G__21653 = seq__21644_21648;
var G__21654 = chunk__21645_21649;
var G__21655 = count__21646_21650;
var G__21656 = (i__21647_21651 + (1));
seq__21644_21648 = G__21653;
chunk__21645_21649 = G__21654;
count__21646_21650 = G__21655;
i__21647_21651 = G__21656;
continue;
}
} else
{var temp__4126__auto___21657 = cljs.core.seq.call(null,seq__21644_21648);if(temp__4126__auto___21657)
{var seq__21644_21658__$1 = temp__4126__auto___21657;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21644_21658__$1))
{var c__4408__auto___21659 = cljs.core.chunk_first.call(null,seq__21644_21658__$1);{
var G__21660 = cljs.core.chunk_rest.call(null,seq__21644_21658__$1);
var G__21661 = c__4408__auto___21659;
var G__21662 = cljs.core.count.call(null,c__4408__auto___21659);
var G__21663 = (0);
seq__21644_21648 = G__21660;
chunk__21645_21649 = G__21661;
count__21646_21650 = G__21662;
i__21647_21651 = G__21663;
continue;
}
} else
{var node_21664 = cljs.core.first.call(null,seq__21644_21658__$1);goog.dom.setTextContent(node_21664,value);
{
var G__21665 = cljs.core.next.call(null,seq__21644_21658__$1);
var G__21666 = null;
var G__21667 = (0);
var G__21668 = (0);
seq__21644_21648 = G__21665;
chunk__21645_21649 = G__21666;
count__21646_21650 = G__21667;
i__21647_21651 = G__21668;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21673_21677 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21674_21678 = null;var count__21675_21679 = (0);var i__21676_21680 = (0);while(true){
if((i__21676_21680 < count__21675_21679))
{var node_21681 = cljs.core._nth.call(null,chunk__21674_21678,i__21676_21680);goog.dom.forms.setValue(node_21681,value);
{
var G__21682 = seq__21673_21677;
var G__21683 = chunk__21674_21678;
var G__21684 = count__21675_21679;
var G__21685 = (i__21676_21680 + (1));
seq__21673_21677 = G__21682;
chunk__21674_21678 = G__21683;
count__21675_21679 = G__21684;
i__21676_21680 = G__21685;
continue;
}
} else
{var temp__4126__auto___21686 = cljs.core.seq.call(null,seq__21673_21677);if(temp__4126__auto___21686)
{var seq__21673_21687__$1 = temp__4126__auto___21686;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21673_21687__$1))
{var c__4408__auto___21688 = cljs.core.chunk_first.call(null,seq__21673_21687__$1);{
var G__21689 = cljs.core.chunk_rest.call(null,seq__21673_21687__$1);
var G__21690 = c__4408__auto___21688;
var G__21691 = cljs.core.count.call(null,c__4408__auto___21688);
var G__21692 = (0);
seq__21673_21677 = G__21689;
chunk__21674_21678 = G__21690;
count__21675_21679 = G__21691;
i__21676_21680 = G__21692;
continue;
}
} else
{var node_21693 = cljs.core.first.call(null,seq__21673_21687__$1);goog.dom.forms.setValue(node_21693,value);
{
var G__21694 = cljs.core.next.call(null,seq__21673_21687__$1);
var G__21695 = null;
var G__21696 = (0);
var G__21697 = (0);
seq__21673_21677 = G__21694;
chunk__21674_21678 = G__21695;
count__21675_21679 = G__21696;
i__21676_21680 = G__21697;
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
{var value_21708 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21704_21709 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21705_21710 = null;var count__21706_21711 = (0);var i__21707_21712 = (0);while(true){
if((i__21707_21712 < count__21706_21711))
{var node_21713 = cljs.core._nth.call(null,chunk__21705_21710,i__21707_21712);node_21713.innerHTML = value_21708;
{
var G__21714 = seq__21704_21709;
var G__21715 = chunk__21705_21710;
var G__21716 = count__21706_21711;
var G__21717 = (i__21707_21712 + (1));
seq__21704_21709 = G__21714;
chunk__21705_21710 = G__21715;
count__21706_21711 = G__21716;
i__21707_21712 = G__21717;
continue;
}
} else
{var temp__4126__auto___21718 = cljs.core.seq.call(null,seq__21704_21709);if(temp__4126__auto___21718)
{var seq__21704_21719__$1 = temp__4126__auto___21718;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21704_21719__$1))
{var c__4408__auto___21720 = cljs.core.chunk_first.call(null,seq__21704_21719__$1);{
var G__21721 = cljs.core.chunk_rest.call(null,seq__21704_21719__$1);
var G__21722 = c__4408__auto___21720;
var G__21723 = cljs.core.count.call(null,c__4408__auto___21720);
var G__21724 = (0);
seq__21704_21709 = G__21721;
chunk__21705_21710 = G__21722;
count__21706_21711 = G__21723;
i__21707_21712 = G__21724;
continue;
}
} else
{var node_21725 = cljs.core.first.call(null,seq__21704_21719__$1);node_21725.innerHTML = value_21708;
{
var G__21726 = cljs.core.next.call(null,seq__21704_21719__$1);
var G__21727 = null;
var G__21728 = (0);
var G__21729 = (0);
seq__21704_21709 = G__21726;
chunk__21705_21710 = G__21727;
count__21706_21711 = G__21728;
i__21707_21712 = G__21729;
continue;
}
}
} else
{}
}
break;
}
}catch (e21703){if((e21703 instanceof Error))
{var e_21730 = e21703;domina.replace_children_BANG_.call(null,content,value_21708);
} else
{throw e21703;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21737_21741 = cljs.core.seq.call(null,children);var chunk__21738_21742 = null;var count__21739_21743 = (0);var i__21740_21744 = (0);while(true){
if((i__21740_21744 < count__21739_21743))
{var child_21745 = cljs.core._nth.call(null,chunk__21738_21742,i__21740_21744);frag.appendChild(child_21745);
{
var G__21746 = seq__21737_21741;
var G__21747 = chunk__21738_21742;
var G__21748 = count__21739_21743;
var G__21749 = (i__21740_21744 + (1));
seq__21737_21741 = G__21746;
chunk__21738_21742 = G__21747;
count__21739_21743 = G__21748;
i__21740_21744 = G__21749;
continue;
}
} else
{var temp__4126__auto___21750 = cljs.core.seq.call(null,seq__21737_21741);if(temp__4126__auto___21750)
{var seq__21737_21751__$1 = temp__4126__auto___21750;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21737_21751__$1))
{var c__4408__auto___21752 = cljs.core.chunk_first.call(null,seq__21737_21751__$1);{
var G__21753 = cljs.core.chunk_rest.call(null,seq__21737_21751__$1);
var G__21754 = c__4408__auto___21752;
var G__21755 = cljs.core.count.call(null,c__4408__auto___21752);
var G__21756 = (0);
seq__21737_21741 = G__21753;
chunk__21738_21742 = G__21754;
count__21739_21743 = G__21755;
i__21740_21744 = G__21756;
continue;
}
} else
{var child_21757 = cljs.core.first.call(null,seq__21737_21751__$1);frag.appendChild(child_21757);
{
var G__21758 = cljs.core.next.call(null,seq__21737_21751__$1);
var G__21759 = null;
var G__21760 = (0);
var G__21761 = (0);
seq__21737_21741 = G__21758;
chunk__21738_21742 = G__21759;
count__21739_21743 = G__21760;
i__21740_21744 = G__21761;
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
return (function (p1__21731_SHARP_,p2__21732_SHARP_){return f.call(null,p1__21731_SHARP_,p2__21732_SHARP_);
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
{if((function (){var G__21763 = list_thing;if(G__21763)
{var bit__4302__auto__ = (G__21763.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21763.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21763.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21763);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21763);
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
{if((function (){var G__21764 = content;if(G__21764)
{var bit__4302__auto__ = (G__21764.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21764.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21764.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21764);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21764);
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
{if((function (){var G__21765 = content;if(G__21765)
{var bit__4302__auto__ = (G__21765.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21765.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21765.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21765);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21765);
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
