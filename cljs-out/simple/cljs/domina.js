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
var opt_wrapper_21320 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_21321 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_21322 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_21322,opt_wrapper_21320,table_section_wrapper_21321,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_21320,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_21321,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_21321,cell_wrapper_21322,table_section_wrapper_21321,table_section_wrapper_21321]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__21327 = cljs.core.seq.call(null,tbody);var chunk__21328 = null;var count__21329 = (0);var i__21330 = (0);while(true){
if((i__21330 < count__21329))
{var child = cljs.core._nth.call(null,chunk__21328,i__21330);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21331 = seq__21327;
var G__21332 = chunk__21328;
var G__21333 = count__21329;
var G__21334 = (i__21330 + (1));
seq__21327 = G__21331;
chunk__21328 = G__21332;
count__21329 = G__21333;
i__21330 = G__21334;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21327);if(temp__4126__auto__)
{var seq__21327__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21327__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21327__$1);{
var G__21335 = cljs.core.chunk_rest.call(null,seq__21327__$1);
var G__21336 = c__4408__auto__;
var G__21337 = cljs.core.count.call(null,c__4408__auto__);
var G__21338 = (0);
seq__21327 = G__21335;
chunk__21328 = G__21336;
count__21329 = G__21337;
i__21330 = G__21338;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__21327__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21339 = cljs.core.next.call(null,seq__21327__$1);
var G__21340 = null;
var G__21341 = (0);
var G__21342 = (0);
seq__21327 = G__21339;
chunk__21328 = G__21340;
count__21329 = G__21341;
i__21330 = G__21342;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__21344 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__21344,(0),null);var start_wrap = cljs.core.nth.call(null,vec__21344,(1),null);var end_wrap = cljs.core.nth.call(null,vec__21344,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__21345 = wrapper.lastChild;
var G__21346 = (level - (1));
wrapper = G__21345;
level = G__21346;
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
domina.DomContent = (function (){var obj21348 = {};return obj21348;
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
log_debug.cljs$lang$applyTo = (function (arglist__21349){
var mesg = cljs.core.seq(arglist__21349);
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
log.cljs$lang$applyTo = (function (arglist__21350){
var mesg = cljs.core.seq(arglist__21350);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__21351){
var contents = cljs.core.seq(arglist__21351);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__21352_SHARP_){return p1__21352_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__21353_SHARP_,p2__21354_SHARP_){return goog.dom.insertChildAt(p1__21353_SHARP_,p2__21354_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21356_SHARP_,p2__21355_SHARP_){return goog.dom.insertSiblingBefore(p2__21355_SHARP_,p1__21356_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21358_SHARP_,p2__21357_SHARP_){return goog.dom.insertSiblingAfter(p2__21357_SHARP_,p1__21358_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__21360_SHARP_,p2__21359_SHARP_){return goog.dom.replaceNode(p2__21359_SHARP_,p1__21360_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__21365_21369 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21366_21370 = null;var count__21367_21371 = (0);var i__21368_21372 = (0);while(true){
if((i__21368_21372 < count__21367_21371))
{var n_21373 = cljs.core._nth.call(null,chunk__21366_21370,i__21368_21372);goog.style.setStyle(n_21373,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21374 = seq__21365_21369;
var G__21375 = chunk__21366_21370;
var G__21376 = count__21367_21371;
var G__21377 = (i__21368_21372 + (1));
seq__21365_21369 = G__21374;
chunk__21366_21370 = G__21375;
count__21367_21371 = G__21376;
i__21368_21372 = G__21377;
continue;
}
} else
{var temp__4126__auto___21378 = cljs.core.seq.call(null,seq__21365_21369);if(temp__4126__auto___21378)
{var seq__21365_21379__$1 = temp__4126__auto___21378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21365_21379__$1))
{var c__4408__auto___21380 = cljs.core.chunk_first.call(null,seq__21365_21379__$1);{
var G__21381 = cljs.core.chunk_rest.call(null,seq__21365_21379__$1);
var G__21382 = c__4408__auto___21380;
var G__21383 = cljs.core.count.call(null,c__4408__auto___21380);
var G__21384 = (0);
seq__21365_21369 = G__21381;
chunk__21366_21370 = G__21382;
count__21367_21371 = G__21383;
i__21368_21372 = G__21384;
continue;
}
} else
{var n_21385 = cljs.core.first.call(null,seq__21365_21379__$1);goog.style.setStyle(n_21385,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21386 = cljs.core.next.call(null,seq__21365_21379__$1);
var G__21387 = null;
var G__21388 = (0);
var G__21389 = (0);
seq__21365_21369 = G__21386;
chunk__21366_21370 = G__21387;
count__21367_21371 = G__21388;
i__21368_21372 = G__21389;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21390){
var content = cljs.core.first(arglist__21390);
arglist__21390 = cljs.core.next(arglist__21390);
var name = cljs.core.first(arglist__21390);
var value = cljs.core.rest(arglist__21390);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__21395_21399 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21396_21400 = null;var count__21397_21401 = (0);var i__21398_21402 = (0);while(true){
if((i__21398_21402 < count__21397_21401))
{var n_21403 = cljs.core._nth.call(null,chunk__21396_21400,i__21398_21402);n_21403.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21404 = seq__21395_21399;
var G__21405 = chunk__21396_21400;
var G__21406 = count__21397_21401;
var G__21407 = (i__21398_21402 + (1));
seq__21395_21399 = G__21404;
chunk__21396_21400 = G__21405;
count__21397_21401 = G__21406;
i__21398_21402 = G__21407;
continue;
}
} else
{var temp__4126__auto___21408 = cljs.core.seq.call(null,seq__21395_21399);if(temp__4126__auto___21408)
{var seq__21395_21409__$1 = temp__4126__auto___21408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21395_21409__$1))
{var c__4408__auto___21410 = cljs.core.chunk_first.call(null,seq__21395_21409__$1);{
var G__21411 = cljs.core.chunk_rest.call(null,seq__21395_21409__$1);
var G__21412 = c__4408__auto___21410;
var G__21413 = cljs.core.count.call(null,c__4408__auto___21410);
var G__21414 = (0);
seq__21395_21399 = G__21411;
chunk__21396_21400 = G__21412;
count__21397_21401 = G__21413;
i__21398_21402 = G__21414;
continue;
}
} else
{var n_21415 = cljs.core.first.call(null,seq__21395_21409__$1);n_21415.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21416 = cljs.core.next.call(null,seq__21395_21409__$1);
var G__21417 = null;
var G__21418 = (0);
var G__21419 = (0);
seq__21395_21399 = G__21416;
chunk__21396_21400 = G__21417;
count__21397_21401 = G__21418;
i__21398_21402 = G__21419;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__21420){
var content = cljs.core.first(arglist__21420);
arglist__21420 = cljs.core.next(arglist__21420);
var name = cljs.core.first(arglist__21420);
var value = cljs.core.rest(arglist__21420);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__21425_21429 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21426_21430 = null;var count__21427_21431 = (0);var i__21428_21432 = (0);while(true){
if((i__21428_21432 < count__21427_21431))
{var n_21433 = cljs.core._nth.call(null,chunk__21426_21430,i__21428_21432);n_21433.removeAttribute(cljs.core.name.call(null,name));
{
var G__21434 = seq__21425_21429;
var G__21435 = chunk__21426_21430;
var G__21436 = count__21427_21431;
var G__21437 = (i__21428_21432 + (1));
seq__21425_21429 = G__21434;
chunk__21426_21430 = G__21435;
count__21427_21431 = G__21436;
i__21428_21432 = G__21437;
continue;
}
} else
{var temp__4126__auto___21438 = cljs.core.seq.call(null,seq__21425_21429);if(temp__4126__auto___21438)
{var seq__21425_21439__$1 = temp__4126__auto___21438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21425_21439__$1))
{var c__4408__auto___21440 = cljs.core.chunk_first.call(null,seq__21425_21439__$1);{
var G__21441 = cljs.core.chunk_rest.call(null,seq__21425_21439__$1);
var G__21442 = c__4408__auto___21440;
var G__21443 = cljs.core.count.call(null,c__4408__auto___21440);
var G__21444 = (0);
seq__21425_21429 = G__21441;
chunk__21426_21430 = G__21442;
count__21427_21431 = G__21443;
i__21428_21432 = G__21444;
continue;
}
} else
{var n_21445 = cljs.core.first.call(null,seq__21425_21439__$1);n_21445.removeAttribute(cljs.core.name.call(null,name));
{
var G__21446 = cljs.core.next.call(null,seq__21425_21439__$1);
var G__21447 = null;
var G__21448 = (0);
var G__21449 = (0);
seq__21425_21429 = G__21446;
chunk__21426_21430 = G__21447;
count__21427_21431 = G__21448;
i__21428_21432 = G__21449;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__21451 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__21451,(0),null);var v = cljs.core.nth.call(null,vec__21451,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__21452_SHARP_){var attr = attrs__$1.item(p1__21452_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__21459_21465 = cljs.core.seq.call(null,styles);var chunk__21460_21466 = null;var count__21461_21467 = (0);var i__21462_21468 = (0);while(true){
if((i__21462_21468 < count__21461_21467))
{var vec__21463_21469 = cljs.core._nth.call(null,chunk__21460_21466,i__21462_21468);var name_21470 = cljs.core.nth.call(null,vec__21463_21469,(0),null);var value_21471 = cljs.core.nth.call(null,vec__21463_21469,(1),null);domina.set_style_BANG_.call(null,content,name_21470,value_21471);
{
var G__21472 = seq__21459_21465;
var G__21473 = chunk__21460_21466;
var G__21474 = count__21461_21467;
var G__21475 = (i__21462_21468 + (1));
seq__21459_21465 = G__21472;
chunk__21460_21466 = G__21473;
count__21461_21467 = G__21474;
i__21462_21468 = G__21475;
continue;
}
} else
{var temp__4126__auto___21476 = cljs.core.seq.call(null,seq__21459_21465);if(temp__4126__auto___21476)
{var seq__21459_21477__$1 = temp__4126__auto___21476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21459_21477__$1))
{var c__4408__auto___21478 = cljs.core.chunk_first.call(null,seq__21459_21477__$1);{
var G__21479 = cljs.core.chunk_rest.call(null,seq__21459_21477__$1);
var G__21480 = c__4408__auto___21478;
var G__21481 = cljs.core.count.call(null,c__4408__auto___21478);
var G__21482 = (0);
seq__21459_21465 = G__21479;
chunk__21460_21466 = G__21480;
count__21461_21467 = G__21481;
i__21462_21468 = G__21482;
continue;
}
} else
{var vec__21464_21483 = cljs.core.first.call(null,seq__21459_21477__$1);var name_21484 = cljs.core.nth.call(null,vec__21464_21483,(0),null);var value_21485 = cljs.core.nth.call(null,vec__21464_21483,(1),null);domina.set_style_BANG_.call(null,content,name_21484,value_21485);
{
var G__21486 = cljs.core.next.call(null,seq__21459_21477__$1);
var G__21487 = null;
var G__21488 = (0);
var G__21489 = (0);
seq__21459_21465 = G__21486;
chunk__21460_21466 = G__21487;
count__21461_21467 = G__21488;
i__21462_21468 = G__21489;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__21496_21502 = cljs.core.seq.call(null,attrs);var chunk__21497_21503 = null;var count__21498_21504 = (0);var i__21499_21505 = (0);while(true){
if((i__21499_21505 < count__21498_21504))
{var vec__21500_21506 = cljs.core._nth.call(null,chunk__21497_21503,i__21499_21505);var name_21507 = cljs.core.nth.call(null,vec__21500_21506,(0),null);var value_21508 = cljs.core.nth.call(null,vec__21500_21506,(1),null);domina.set_attr_BANG_.call(null,content,name_21507,value_21508);
{
var G__21509 = seq__21496_21502;
var G__21510 = chunk__21497_21503;
var G__21511 = count__21498_21504;
var G__21512 = (i__21499_21505 + (1));
seq__21496_21502 = G__21509;
chunk__21497_21503 = G__21510;
count__21498_21504 = G__21511;
i__21499_21505 = G__21512;
continue;
}
} else
{var temp__4126__auto___21513 = cljs.core.seq.call(null,seq__21496_21502);if(temp__4126__auto___21513)
{var seq__21496_21514__$1 = temp__4126__auto___21513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21496_21514__$1))
{var c__4408__auto___21515 = cljs.core.chunk_first.call(null,seq__21496_21514__$1);{
var G__21516 = cljs.core.chunk_rest.call(null,seq__21496_21514__$1);
var G__21517 = c__4408__auto___21515;
var G__21518 = cljs.core.count.call(null,c__4408__auto___21515);
var G__21519 = (0);
seq__21496_21502 = G__21516;
chunk__21497_21503 = G__21517;
count__21498_21504 = G__21518;
i__21499_21505 = G__21519;
continue;
}
} else
{var vec__21501_21520 = cljs.core.first.call(null,seq__21496_21514__$1);var name_21521 = cljs.core.nth.call(null,vec__21501_21520,(0),null);var value_21522 = cljs.core.nth.call(null,vec__21501_21520,(1),null);domina.set_attr_BANG_.call(null,content,name_21521,value_21522);
{
var G__21523 = cljs.core.next.call(null,seq__21496_21514__$1);
var G__21524 = null;
var G__21525 = (0);
var G__21526 = (0);
seq__21496_21502 = G__21523;
chunk__21497_21503 = G__21524;
count__21498_21504 = G__21525;
i__21499_21505 = G__21526;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__21531_21535 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21532_21536 = null;var count__21533_21537 = (0);var i__21534_21538 = (0);while(true){
if((i__21534_21538 < count__21533_21537))
{var node_21539 = cljs.core._nth.call(null,chunk__21532_21536,i__21534_21538);goog.dom.classes.add(node_21539,class$);
{
var G__21540 = seq__21531_21535;
var G__21541 = chunk__21532_21536;
var G__21542 = count__21533_21537;
var G__21543 = (i__21534_21538 + (1));
seq__21531_21535 = G__21540;
chunk__21532_21536 = G__21541;
count__21533_21537 = G__21542;
i__21534_21538 = G__21543;
continue;
}
} else
{var temp__4126__auto___21544 = cljs.core.seq.call(null,seq__21531_21535);if(temp__4126__auto___21544)
{var seq__21531_21545__$1 = temp__4126__auto___21544;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21531_21545__$1))
{var c__4408__auto___21546 = cljs.core.chunk_first.call(null,seq__21531_21545__$1);{
var G__21547 = cljs.core.chunk_rest.call(null,seq__21531_21545__$1);
var G__21548 = c__4408__auto___21546;
var G__21549 = cljs.core.count.call(null,c__4408__auto___21546);
var G__21550 = (0);
seq__21531_21535 = G__21547;
chunk__21532_21536 = G__21548;
count__21533_21537 = G__21549;
i__21534_21538 = G__21550;
continue;
}
} else
{var node_21551 = cljs.core.first.call(null,seq__21531_21545__$1);goog.dom.classes.add(node_21551,class$);
{
var G__21552 = cljs.core.next.call(null,seq__21531_21545__$1);
var G__21553 = null;
var G__21554 = (0);
var G__21555 = (0);
seq__21531_21535 = G__21552;
chunk__21532_21536 = G__21553;
count__21533_21537 = G__21554;
i__21534_21538 = G__21555;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__21560_21564 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21561_21565 = null;var count__21562_21566 = (0);var i__21563_21567 = (0);while(true){
if((i__21563_21567 < count__21562_21566))
{var node_21568 = cljs.core._nth.call(null,chunk__21561_21565,i__21563_21567);goog.dom.classes.remove(node_21568,class$);
{
var G__21569 = seq__21560_21564;
var G__21570 = chunk__21561_21565;
var G__21571 = count__21562_21566;
var G__21572 = (i__21563_21567 + (1));
seq__21560_21564 = G__21569;
chunk__21561_21565 = G__21570;
count__21562_21566 = G__21571;
i__21563_21567 = G__21572;
continue;
}
} else
{var temp__4126__auto___21573 = cljs.core.seq.call(null,seq__21560_21564);if(temp__4126__auto___21573)
{var seq__21560_21574__$1 = temp__4126__auto___21573;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21560_21574__$1))
{var c__4408__auto___21575 = cljs.core.chunk_first.call(null,seq__21560_21574__$1);{
var G__21576 = cljs.core.chunk_rest.call(null,seq__21560_21574__$1);
var G__21577 = c__4408__auto___21575;
var G__21578 = cljs.core.count.call(null,c__4408__auto___21575);
var G__21579 = (0);
seq__21560_21564 = G__21576;
chunk__21561_21565 = G__21577;
count__21562_21566 = G__21578;
i__21563_21567 = G__21579;
continue;
}
} else
{var node_21580 = cljs.core.first.call(null,seq__21560_21574__$1);goog.dom.classes.remove(node_21580,class$);
{
var G__21581 = cljs.core.next.call(null,seq__21560_21574__$1);
var G__21582 = null;
var G__21583 = (0);
var G__21584 = (0);
seq__21560_21564 = G__21581;
chunk__21561_21565 = G__21582;
count__21562_21566 = G__21583;
i__21563_21567 = G__21584;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__21589_21593 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21590_21594 = null;var count__21591_21595 = (0);var i__21592_21596 = (0);while(true){
if((i__21592_21596 < count__21591_21595))
{var node_21597 = cljs.core._nth.call(null,chunk__21590_21594,i__21592_21596);goog.dom.classes.toggle(node_21597,class$);
{
var G__21598 = seq__21589_21593;
var G__21599 = chunk__21590_21594;
var G__21600 = count__21591_21595;
var G__21601 = (i__21592_21596 + (1));
seq__21589_21593 = G__21598;
chunk__21590_21594 = G__21599;
count__21591_21595 = G__21600;
i__21592_21596 = G__21601;
continue;
}
} else
{var temp__4126__auto___21602 = cljs.core.seq.call(null,seq__21589_21593);if(temp__4126__auto___21602)
{var seq__21589_21603__$1 = temp__4126__auto___21602;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21589_21603__$1))
{var c__4408__auto___21604 = cljs.core.chunk_first.call(null,seq__21589_21603__$1);{
var G__21605 = cljs.core.chunk_rest.call(null,seq__21589_21603__$1);
var G__21606 = c__4408__auto___21604;
var G__21607 = cljs.core.count.call(null,c__4408__auto___21604);
var G__21608 = (0);
seq__21589_21593 = G__21605;
chunk__21590_21594 = G__21606;
count__21591_21595 = G__21607;
i__21592_21596 = G__21608;
continue;
}
} else
{var node_21609 = cljs.core.first.call(null,seq__21589_21603__$1);goog.dom.classes.toggle(node_21609,class$);
{
var G__21610 = cljs.core.next.call(null,seq__21589_21603__$1);
var G__21611 = null;
var G__21612 = (0);
var G__21613 = (0);
seq__21589_21593 = G__21610;
chunk__21590_21594 = G__21611;
count__21591_21595 = G__21612;
i__21592_21596 = G__21613;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_21622__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__21618_21623 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21619_21624 = null;var count__21620_21625 = (0);var i__21621_21626 = (0);while(true){
if((i__21621_21626 < count__21620_21625))
{var node_21627 = cljs.core._nth.call(null,chunk__21619_21624,i__21621_21626);goog.dom.classes.set(node_21627,classes_21622__$1);
{
var G__21628 = seq__21618_21623;
var G__21629 = chunk__21619_21624;
var G__21630 = count__21620_21625;
var G__21631 = (i__21621_21626 + (1));
seq__21618_21623 = G__21628;
chunk__21619_21624 = G__21629;
count__21620_21625 = G__21630;
i__21621_21626 = G__21631;
continue;
}
} else
{var temp__4126__auto___21632 = cljs.core.seq.call(null,seq__21618_21623);if(temp__4126__auto___21632)
{var seq__21618_21633__$1 = temp__4126__auto___21632;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21618_21633__$1))
{var c__4408__auto___21634 = cljs.core.chunk_first.call(null,seq__21618_21633__$1);{
var G__21635 = cljs.core.chunk_rest.call(null,seq__21618_21633__$1);
var G__21636 = c__4408__auto___21634;
var G__21637 = cljs.core.count.call(null,c__4408__auto___21634);
var G__21638 = (0);
seq__21618_21623 = G__21635;
chunk__21619_21624 = G__21636;
count__21620_21625 = G__21637;
i__21621_21626 = G__21638;
continue;
}
} else
{var node_21639 = cljs.core.first.call(null,seq__21618_21633__$1);goog.dom.classes.set(node_21639,classes_21622__$1);
{
var G__21640 = cljs.core.next.call(null,seq__21618_21633__$1);
var G__21641 = null;
var G__21642 = (0);
var G__21643 = (0);
seq__21618_21623 = G__21640;
chunk__21619_21624 = G__21641;
count__21620_21625 = G__21642;
i__21621_21626 = G__21643;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__21648_21652 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21649_21653 = null;var count__21650_21654 = (0);var i__21651_21655 = (0);while(true){
if((i__21651_21655 < count__21650_21654))
{var node_21656 = cljs.core._nth.call(null,chunk__21649_21653,i__21651_21655);goog.dom.setTextContent(node_21656,value);
{
var G__21657 = seq__21648_21652;
var G__21658 = chunk__21649_21653;
var G__21659 = count__21650_21654;
var G__21660 = (i__21651_21655 + (1));
seq__21648_21652 = G__21657;
chunk__21649_21653 = G__21658;
count__21650_21654 = G__21659;
i__21651_21655 = G__21660;
continue;
}
} else
{var temp__4126__auto___21661 = cljs.core.seq.call(null,seq__21648_21652);if(temp__4126__auto___21661)
{var seq__21648_21662__$1 = temp__4126__auto___21661;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21648_21662__$1))
{var c__4408__auto___21663 = cljs.core.chunk_first.call(null,seq__21648_21662__$1);{
var G__21664 = cljs.core.chunk_rest.call(null,seq__21648_21662__$1);
var G__21665 = c__4408__auto___21663;
var G__21666 = cljs.core.count.call(null,c__4408__auto___21663);
var G__21667 = (0);
seq__21648_21652 = G__21664;
chunk__21649_21653 = G__21665;
count__21650_21654 = G__21666;
i__21651_21655 = G__21667;
continue;
}
} else
{var node_21668 = cljs.core.first.call(null,seq__21648_21662__$1);goog.dom.setTextContent(node_21668,value);
{
var G__21669 = cljs.core.next.call(null,seq__21648_21662__$1);
var G__21670 = null;
var G__21671 = (0);
var G__21672 = (0);
seq__21648_21652 = G__21669;
chunk__21649_21653 = G__21670;
count__21650_21654 = G__21671;
i__21651_21655 = G__21672;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21677_21681 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21678_21682 = null;var count__21679_21683 = (0);var i__21680_21684 = (0);while(true){
if((i__21680_21684 < count__21679_21683))
{var node_21685 = cljs.core._nth.call(null,chunk__21678_21682,i__21680_21684);goog.dom.forms.setValue(node_21685,value);
{
var G__21686 = seq__21677_21681;
var G__21687 = chunk__21678_21682;
var G__21688 = count__21679_21683;
var G__21689 = (i__21680_21684 + (1));
seq__21677_21681 = G__21686;
chunk__21678_21682 = G__21687;
count__21679_21683 = G__21688;
i__21680_21684 = G__21689;
continue;
}
} else
{var temp__4126__auto___21690 = cljs.core.seq.call(null,seq__21677_21681);if(temp__4126__auto___21690)
{var seq__21677_21691__$1 = temp__4126__auto___21690;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21677_21691__$1))
{var c__4408__auto___21692 = cljs.core.chunk_first.call(null,seq__21677_21691__$1);{
var G__21693 = cljs.core.chunk_rest.call(null,seq__21677_21691__$1);
var G__21694 = c__4408__auto___21692;
var G__21695 = cljs.core.count.call(null,c__4408__auto___21692);
var G__21696 = (0);
seq__21677_21681 = G__21693;
chunk__21678_21682 = G__21694;
count__21679_21683 = G__21695;
i__21680_21684 = G__21696;
continue;
}
} else
{var node_21697 = cljs.core.first.call(null,seq__21677_21691__$1);goog.dom.forms.setValue(node_21697,value);
{
var G__21698 = cljs.core.next.call(null,seq__21677_21691__$1);
var G__21699 = null;
var G__21700 = (0);
var G__21701 = (0);
seq__21677_21681 = G__21698;
chunk__21678_21682 = G__21699;
count__21679_21683 = G__21700;
i__21680_21684 = G__21701;
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
{var value_21712 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21708_21713 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21709_21714 = null;var count__21710_21715 = (0);var i__21711_21716 = (0);while(true){
if((i__21711_21716 < count__21710_21715))
{var node_21717 = cljs.core._nth.call(null,chunk__21709_21714,i__21711_21716);node_21717.innerHTML = value_21712;
{
var G__21718 = seq__21708_21713;
var G__21719 = chunk__21709_21714;
var G__21720 = count__21710_21715;
var G__21721 = (i__21711_21716 + (1));
seq__21708_21713 = G__21718;
chunk__21709_21714 = G__21719;
count__21710_21715 = G__21720;
i__21711_21716 = G__21721;
continue;
}
} else
{var temp__4126__auto___21722 = cljs.core.seq.call(null,seq__21708_21713);if(temp__4126__auto___21722)
{var seq__21708_21723__$1 = temp__4126__auto___21722;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21708_21723__$1))
{var c__4408__auto___21724 = cljs.core.chunk_first.call(null,seq__21708_21723__$1);{
var G__21725 = cljs.core.chunk_rest.call(null,seq__21708_21723__$1);
var G__21726 = c__4408__auto___21724;
var G__21727 = cljs.core.count.call(null,c__4408__auto___21724);
var G__21728 = (0);
seq__21708_21713 = G__21725;
chunk__21709_21714 = G__21726;
count__21710_21715 = G__21727;
i__21711_21716 = G__21728;
continue;
}
} else
{var node_21729 = cljs.core.first.call(null,seq__21708_21723__$1);node_21729.innerHTML = value_21712;
{
var G__21730 = cljs.core.next.call(null,seq__21708_21723__$1);
var G__21731 = null;
var G__21732 = (0);
var G__21733 = (0);
seq__21708_21713 = G__21730;
chunk__21709_21714 = G__21731;
count__21710_21715 = G__21732;
i__21711_21716 = G__21733;
continue;
}
}
} else
{}
}
break;
}
}catch (e21707){if((e21707 instanceof Error))
{var e_21734 = e21707;domina.replace_children_BANG_.call(null,content,value_21712);
} else
{throw e21707;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21741_21745 = cljs.core.seq.call(null,children);var chunk__21742_21746 = null;var count__21743_21747 = (0);var i__21744_21748 = (0);while(true){
if((i__21744_21748 < count__21743_21747))
{var child_21749 = cljs.core._nth.call(null,chunk__21742_21746,i__21744_21748);frag.appendChild(child_21749);
{
var G__21750 = seq__21741_21745;
var G__21751 = chunk__21742_21746;
var G__21752 = count__21743_21747;
var G__21753 = (i__21744_21748 + (1));
seq__21741_21745 = G__21750;
chunk__21742_21746 = G__21751;
count__21743_21747 = G__21752;
i__21744_21748 = G__21753;
continue;
}
} else
{var temp__4126__auto___21754 = cljs.core.seq.call(null,seq__21741_21745);if(temp__4126__auto___21754)
{var seq__21741_21755__$1 = temp__4126__auto___21754;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21741_21755__$1))
{var c__4408__auto___21756 = cljs.core.chunk_first.call(null,seq__21741_21755__$1);{
var G__21757 = cljs.core.chunk_rest.call(null,seq__21741_21755__$1);
var G__21758 = c__4408__auto___21756;
var G__21759 = cljs.core.count.call(null,c__4408__auto___21756);
var G__21760 = (0);
seq__21741_21745 = G__21757;
chunk__21742_21746 = G__21758;
count__21743_21747 = G__21759;
i__21744_21748 = G__21760;
continue;
}
} else
{var child_21761 = cljs.core.first.call(null,seq__21741_21755__$1);frag.appendChild(child_21761);
{
var G__21762 = cljs.core.next.call(null,seq__21741_21755__$1);
var G__21763 = null;
var G__21764 = (0);
var G__21765 = (0);
seq__21741_21745 = G__21762;
chunk__21742_21746 = G__21763;
count__21743_21747 = G__21764;
i__21744_21748 = G__21765;
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
return (function (p1__21735_SHARP_,p2__21736_SHARP_){return f.call(null,p1__21735_SHARP_,p2__21736_SHARP_);
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
{if((function (){var G__21767 = list_thing;if(G__21767)
{var bit__4302__auto__ = (G__21767.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21767.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21767.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21767);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21767);
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
{if((function (){var G__21768 = content;if(G__21768)
{var bit__4302__auto__ = (G__21768.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21768.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21768.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21768);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21768);
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
{if((function (){var G__21769 = content;if(G__21769)
{var bit__4302__auto__ = (G__21769.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21769.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21769.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21769);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21769);
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
