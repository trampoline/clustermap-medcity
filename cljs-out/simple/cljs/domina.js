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
var opt_wrapper_21311 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_21312 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_21313 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_21313,opt_wrapper_21311,table_section_wrapper_21312,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_21311,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_21312,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_21312,cell_wrapper_21313,table_section_wrapper_21312,table_section_wrapper_21312]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__21318 = cljs.core.seq.call(null,tbody);var chunk__21319 = null;var count__21320 = (0);var i__21321 = (0);while(true){
if((i__21321 < count__21320))
{var child = cljs.core._nth.call(null,chunk__21319,i__21321);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21322 = seq__21318;
var G__21323 = chunk__21319;
var G__21324 = count__21320;
var G__21325 = (i__21321 + (1));
seq__21318 = G__21322;
chunk__21319 = G__21323;
count__21320 = G__21324;
i__21321 = G__21325;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21318);if(temp__4126__auto__)
{var seq__21318__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21318__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21318__$1);{
var G__21326 = cljs.core.chunk_rest.call(null,seq__21318__$1);
var G__21327 = c__4408__auto__;
var G__21328 = cljs.core.count.call(null,c__4408__auto__);
var G__21329 = (0);
seq__21318 = G__21326;
chunk__21319 = G__21327;
count__21320 = G__21328;
i__21321 = G__21329;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__21318__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__21330 = cljs.core.next.call(null,seq__21318__$1);
var G__21331 = null;
var G__21332 = (0);
var G__21333 = (0);
seq__21318 = G__21330;
chunk__21319 = G__21331;
count__21320 = G__21332;
i__21321 = G__21333;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__21335 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__21335,(0),null);var start_wrap = cljs.core.nth.call(null,vec__21335,(1),null);var end_wrap = cljs.core.nth.call(null,vec__21335,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__21336 = wrapper.lastChild;
var G__21337 = (level - (1));
wrapper = G__21336;
level = G__21337;
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
domina.DomContent = (function (){var obj21339 = {};return obj21339;
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
log_debug.cljs$lang$applyTo = (function (arglist__21340){
var mesg = cljs.core.seq(arglist__21340);
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
log.cljs$lang$applyTo = (function (arglist__21341){
var mesg = cljs.core.seq(arglist__21341);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__21342){
var contents = cljs.core.seq(arglist__21342);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__21343_SHARP_){return p1__21343_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__21344_SHARP_,p2__21345_SHARP_){return goog.dom.insertChildAt(p1__21344_SHARP_,p2__21345_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21347_SHARP_,p2__21346_SHARP_){return goog.dom.insertSiblingBefore(p2__21346_SHARP_,p1__21347_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__21349_SHARP_,p2__21348_SHARP_){return goog.dom.insertSiblingAfter(p2__21348_SHARP_,p1__21349_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__21351_SHARP_,p2__21350_SHARP_){return goog.dom.replaceNode(p2__21350_SHARP_,p1__21351_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__21356_21360 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21357_21361 = null;var count__21358_21362 = (0);var i__21359_21363 = (0);while(true){
if((i__21359_21363 < count__21358_21362))
{var n_21364 = cljs.core._nth.call(null,chunk__21357_21361,i__21359_21363);goog.style.setStyle(n_21364,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21365 = seq__21356_21360;
var G__21366 = chunk__21357_21361;
var G__21367 = count__21358_21362;
var G__21368 = (i__21359_21363 + (1));
seq__21356_21360 = G__21365;
chunk__21357_21361 = G__21366;
count__21358_21362 = G__21367;
i__21359_21363 = G__21368;
continue;
}
} else
{var temp__4126__auto___21369 = cljs.core.seq.call(null,seq__21356_21360);if(temp__4126__auto___21369)
{var seq__21356_21370__$1 = temp__4126__auto___21369;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21356_21370__$1))
{var c__4408__auto___21371 = cljs.core.chunk_first.call(null,seq__21356_21370__$1);{
var G__21372 = cljs.core.chunk_rest.call(null,seq__21356_21370__$1);
var G__21373 = c__4408__auto___21371;
var G__21374 = cljs.core.count.call(null,c__4408__auto___21371);
var G__21375 = (0);
seq__21356_21360 = G__21372;
chunk__21357_21361 = G__21373;
count__21358_21362 = G__21374;
i__21359_21363 = G__21375;
continue;
}
} else
{var n_21376 = cljs.core.first.call(null,seq__21356_21370__$1);goog.style.setStyle(n_21376,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21377 = cljs.core.next.call(null,seq__21356_21370__$1);
var G__21378 = null;
var G__21379 = (0);
var G__21380 = (0);
seq__21356_21360 = G__21377;
chunk__21357_21361 = G__21378;
count__21358_21362 = G__21379;
i__21359_21363 = G__21380;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21381){
var content = cljs.core.first(arglist__21381);
arglist__21381 = cljs.core.next(arglist__21381);
var name = cljs.core.first(arglist__21381);
var value = cljs.core.rest(arglist__21381);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__21386_21390 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21387_21391 = null;var count__21388_21392 = (0);var i__21389_21393 = (0);while(true){
if((i__21389_21393 < count__21388_21392))
{var n_21394 = cljs.core._nth.call(null,chunk__21387_21391,i__21389_21393);n_21394.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21395 = seq__21386_21390;
var G__21396 = chunk__21387_21391;
var G__21397 = count__21388_21392;
var G__21398 = (i__21389_21393 + (1));
seq__21386_21390 = G__21395;
chunk__21387_21391 = G__21396;
count__21388_21392 = G__21397;
i__21389_21393 = G__21398;
continue;
}
} else
{var temp__4126__auto___21399 = cljs.core.seq.call(null,seq__21386_21390);if(temp__4126__auto___21399)
{var seq__21386_21400__$1 = temp__4126__auto___21399;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21386_21400__$1))
{var c__4408__auto___21401 = cljs.core.chunk_first.call(null,seq__21386_21400__$1);{
var G__21402 = cljs.core.chunk_rest.call(null,seq__21386_21400__$1);
var G__21403 = c__4408__auto___21401;
var G__21404 = cljs.core.count.call(null,c__4408__auto___21401);
var G__21405 = (0);
seq__21386_21390 = G__21402;
chunk__21387_21391 = G__21403;
count__21388_21392 = G__21404;
i__21389_21393 = G__21405;
continue;
}
} else
{var n_21406 = cljs.core.first.call(null,seq__21386_21400__$1);n_21406.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__21407 = cljs.core.next.call(null,seq__21386_21400__$1);
var G__21408 = null;
var G__21409 = (0);
var G__21410 = (0);
seq__21386_21390 = G__21407;
chunk__21387_21391 = G__21408;
count__21388_21392 = G__21409;
i__21389_21393 = G__21410;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__21411){
var content = cljs.core.first(arglist__21411);
arglist__21411 = cljs.core.next(arglist__21411);
var name = cljs.core.first(arglist__21411);
var value = cljs.core.rest(arglist__21411);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__21416_21420 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21417_21421 = null;var count__21418_21422 = (0);var i__21419_21423 = (0);while(true){
if((i__21419_21423 < count__21418_21422))
{var n_21424 = cljs.core._nth.call(null,chunk__21417_21421,i__21419_21423);n_21424.removeAttribute(cljs.core.name.call(null,name));
{
var G__21425 = seq__21416_21420;
var G__21426 = chunk__21417_21421;
var G__21427 = count__21418_21422;
var G__21428 = (i__21419_21423 + (1));
seq__21416_21420 = G__21425;
chunk__21417_21421 = G__21426;
count__21418_21422 = G__21427;
i__21419_21423 = G__21428;
continue;
}
} else
{var temp__4126__auto___21429 = cljs.core.seq.call(null,seq__21416_21420);if(temp__4126__auto___21429)
{var seq__21416_21430__$1 = temp__4126__auto___21429;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21416_21430__$1))
{var c__4408__auto___21431 = cljs.core.chunk_first.call(null,seq__21416_21430__$1);{
var G__21432 = cljs.core.chunk_rest.call(null,seq__21416_21430__$1);
var G__21433 = c__4408__auto___21431;
var G__21434 = cljs.core.count.call(null,c__4408__auto___21431);
var G__21435 = (0);
seq__21416_21420 = G__21432;
chunk__21417_21421 = G__21433;
count__21418_21422 = G__21434;
i__21419_21423 = G__21435;
continue;
}
} else
{var n_21436 = cljs.core.first.call(null,seq__21416_21430__$1);n_21436.removeAttribute(cljs.core.name.call(null,name));
{
var G__21437 = cljs.core.next.call(null,seq__21416_21430__$1);
var G__21438 = null;
var G__21439 = (0);
var G__21440 = (0);
seq__21416_21420 = G__21437;
chunk__21417_21421 = G__21438;
count__21418_21422 = G__21439;
i__21419_21423 = G__21440;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__21442 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__21442,(0),null);var v = cljs.core.nth.call(null,vec__21442,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
return (function (p1__21443_SHARP_){var attr = attrs__$1.item(p1__21443_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__21450_21456 = cljs.core.seq.call(null,styles);var chunk__21451_21457 = null;var count__21452_21458 = (0);var i__21453_21459 = (0);while(true){
if((i__21453_21459 < count__21452_21458))
{var vec__21454_21460 = cljs.core._nth.call(null,chunk__21451_21457,i__21453_21459);var name_21461 = cljs.core.nth.call(null,vec__21454_21460,(0),null);var value_21462 = cljs.core.nth.call(null,vec__21454_21460,(1),null);domina.set_style_BANG_.call(null,content,name_21461,value_21462);
{
var G__21463 = seq__21450_21456;
var G__21464 = chunk__21451_21457;
var G__21465 = count__21452_21458;
var G__21466 = (i__21453_21459 + (1));
seq__21450_21456 = G__21463;
chunk__21451_21457 = G__21464;
count__21452_21458 = G__21465;
i__21453_21459 = G__21466;
continue;
}
} else
{var temp__4126__auto___21467 = cljs.core.seq.call(null,seq__21450_21456);if(temp__4126__auto___21467)
{var seq__21450_21468__$1 = temp__4126__auto___21467;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21450_21468__$1))
{var c__4408__auto___21469 = cljs.core.chunk_first.call(null,seq__21450_21468__$1);{
var G__21470 = cljs.core.chunk_rest.call(null,seq__21450_21468__$1);
var G__21471 = c__4408__auto___21469;
var G__21472 = cljs.core.count.call(null,c__4408__auto___21469);
var G__21473 = (0);
seq__21450_21456 = G__21470;
chunk__21451_21457 = G__21471;
count__21452_21458 = G__21472;
i__21453_21459 = G__21473;
continue;
}
} else
{var vec__21455_21474 = cljs.core.first.call(null,seq__21450_21468__$1);var name_21475 = cljs.core.nth.call(null,vec__21455_21474,(0),null);var value_21476 = cljs.core.nth.call(null,vec__21455_21474,(1),null);domina.set_style_BANG_.call(null,content,name_21475,value_21476);
{
var G__21477 = cljs.core.next.call(null,seq__21450_21468__$1);
var G__21478 = null;
var G__21479 = (0);
var G__21480 = (0);
seq__21450_21456 = G__21477;
chunk__21451_21457 = G__21478;
count__21452_21458 = G__21479;
i__21453_21459 = G__21480;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__21487_21493 = cljs.core.seq.call(null,attrs);var chunk__21488_21494 = null;var count__21489_21495 = (0);var i__21490_21496 = (0);while(true){
if((i__21490_21496 < count__21489_21495))
{var vec__21491_21497 = cljs.core._nth.call(null,chunk__21488_21494,i__21490_21496);var name_21498 = cljs.core.nth.call(null,vec__21491_21497,(0),null);var value_21499 = cljs.core.nth.call(null,vec__21491_21497,(1),null);domina.set_attr_BANG_.call(null,content,name_21498,value_21499);
{
var G__21500 = seq__21487_21493;
var G__21501 = chunk__21488_21494;
var G__21502 = count__21489_21495;
var G__21503 = (i__21490_21496 + (1));
seq__21487_21493 = G__21500;
chunk__21488_21494 = G__21501;
count__21489_21495 = G__21502;
i__21490_21496 = G__21503;
continue;
}
} else
{var temp__4126__auto___21504 = cljs.core.seq.call(null,seq__21487_21493);if(temp__4126__auto___21504)
{var seq__21487_21505__$1 = temp__4126__auto___21504;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21487_21505__$1))
{var c__4408__auto___21506 = cljs.core.chunk_first.call(null,seq__21487_21505__$1);{
var G__21507 = cljs.core.chunk_rest.call(null,seq__21487_21505__$1);
var G__21508 = c__4408__auto___21506;
var G__21509 = cljs.core.count.call(null,c__4408__auto___21506);
var G__21510 = (0);
seq__21487_21493 = G__21507;
chunk__21488_21494 = G__21508;
count__21489_21495 = G__21509;
i__21490_21496 = G__21510;
continue;
}
} else
{var vec__21492_21511 = cljs.core.first.call(null,seq__21487_21505__$1);var name_21512 = cljs.core.nth.call(null,vec__21492_21511,(0),null);var value_21513 = cljs.core.nth.call(null,vec__21492_21511,(1),null);domina.set_attr_BANG_.call(null,content,name_21512,value_21513);
{
var G__21514 = cljs.core.next.call(null,seq__21487_21505__$1);
var G__21515 = null;
var G__21516 = (0);
var G__21517 = (0);
seq__21487_21493 = G__21514;
chunk__21488_21494 = G__21515;
count__21489_21495 = G__21516;
i__21490_21496 = G__21517;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__21522_21526 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21523_21527 = null;var count__21524_21528 = (0);var i__21525_21529 = (0);while(true){
if((i__21525_21529 < count__21524_21528))
{var node_21530 = cljs.core._nth.call(null,chunk__21523_21527,i__21525_21529);goog.dom.classes.add(node_21530,class$);
{
var G__21531 = seq__21522_21526;
var G__21532 = chunk__21523_21527;
var G__21533 = count__21524_21528;
var G__21534 = (i__21525_21529 + (1));
seq__21522_21526 = G__21531;
chunk__21523_21527 = G__21532;
count__21524_21528 = G__21533;
i__21525_21529 = G__21534;
continue;
}
} else
{var temp__4126__auto___21535 = cljs.core.seq.call(null,seq__21522_21526);if(temp__4126__auto___21535)
{var seq__21522_21536__$1 = temp__4126__auto___21535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21522_21536__$1))
{var c__4408__auto___21537 = cljs.core.chunk_first.call(null,seq__21522_21536__$1);{
var G__21538 = cljs.core.chunk_rest.call(null,seq__21522_21536__$1);
var G__21539 = c__4408__auto___21537;
var G__21540 = cljs.core.count.call(null,c__4408__auto___21537);
var G__21541 = (0);
seq__21522_21526 = G__21538;
chunk__21523_21527 = G__21539;
count__21524_21528 = G__21540;
i__21525_21529 = G__21541;
continue;
}
} else
{var node_21542 = cljs.core.first.call(null,seq__21522_21536__$1);goog.dom.classes.add(node_21542,class$);
{
var G__21543 = cljs.core.next.call(null,seq__21522_21536__$1);
var G__21544 = null;
var G__21545 = (0);
var G__21546 = (0);
seq__21522_21526 = G__21543;
chunk__21523_21527 = G__21544;
count__21524_21528 = G__21545;
i__21525_21529 = G__21546;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__21551_21555 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21552_21556 = null;var count__21553_21557 = (0);var i__21554_21558 = (0);while(true){
if((i__21554_21558 < count__21553_21557))
{var node_21559 = cljs.core._nth.call(null,chunk__21552_21556,i__21554_21558);goog.dom.classes.remove(node_21559,class$);
{
var G__21560 = seq__21551_21555;
var G__21561 = chunk__21552_21556;
var G__21562 = count__21553_21557;
var G__21563 = (i__21554_21558 + (1));
seq__21551_21555 = G__21560;
chunk__21552_21556 = G__21561;
count__21553_21557 = G__21562;
i__21554_21558 = G__21563;
continue;
}
} else
{var temp__4126__auto___21564 = cljs.core.seq.call(null,seq__21551_21555);if(temp__4126__auto___21564)
{var seq__21551_21565__$1 = temp__4126__auto___21564;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21551_21565__$1))
{var c__4408__auto___21566 = cljs.core.chunk_first.call(null,seq__21551_21565__$1);{
var G__21567 = cljs.core.chunk_rest.call(null,seq__21551_21565__$1);
var G__21568 = c__4408__auto___21566;
var G__21569 = cljs.core.count.call(null,c__4408__auto___21566);
var G__21570 = (0);
seq__21551_21555 = G__21567;
chunk__21552_21556 = G__21568;
count__21553_21557 = G__21569;
i__21554_21558 = G__21570;
continue;
}
} else
{var node_21571 = cljs.core.first.call(null,seq__21551_21565__$1);goog.dom.classes.remove(node_21571,class$);
{
var G__21572 = cljs.core.next.call(null,seq__21551_21565__$1);
var G__21573 = null;
var G__21574 = (0);
var G__21575 = (0);
seq__21551_21555 = G__21572;
chunk__21552_21556 = G__21573;
count__21553_21557 = G__21574;
i__21554_21558 = G__21575;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__21580_21584 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21581_21585 = null;var count__21582_21586 = (0);var i__21583_21587 = (0);while(true){
if((i__21583_21587 < count__21582_21586))
{var node_21588 = cljs.core._nth.call(null,chunk__21581_21585,i__21583_21587);goog.dom.classes.toggle(node_21588,class$);
{
var G__21589 = seq__21580_21584;
var G__21590 = chunk__21581_21585;
var G__21591 = count__21582_21586;
var G__21592 = (i__21583_21587 + (1));
seq__21580_21584 = G__21589;
chunk__21581_21585 = G__21590;
count__21582_21586 = G__21591;
i__21583_21587 = G__21592;
continue;
}
} else
{var temp__4126__auto___21593 = cljs.core.seq.call(null,seq__21580_21584);if(temp__4126__auto___21593)
{var seq__21580_21594__$1 = temp__4126__auto___21593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21580_21594__$1))
{var c__4408__auto___21595 = cljs.core.chunk_first.call(null,seq__21580_21594__$1);{
var G__21596 = cljs.core.chunk_rest.call(null,seq__21580_21594__$1);
var G__21597 = c__4408__auto___21595;
var G__21598 = cljs.core.count.call(null,c__4408__auto___21595);
var G__21599 = (0);
seq__21580_21584 = G__21596;
chunk__21581_21585 = G__21597;
count__21582_21586 = G__21598;
i__21583_21587 = G__21599;
continue;
}
} else
{var node_21600 = cljs.core.first.call(null,seq__21580_21594__$1);goog.dom.classes.toggle(node_21600,class$);
{
var G__21601 = cljs.core.next.call(null,seq__21580_21594__$1);
var G__21602 = null;
var G__21603 = (0);
var G__21604 = (0);
seq__21580_21584 = G__21601;
chunk__21581_21585 = G__21602;
count__21582_21586 = G__21603;
i__21583_21587 = G__21604;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_21613__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__21609_21614 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21610_21615 = null;var count__21611_21616 = (0);var i__21612_21617 = (0);while(true){
if((i__21612_21617 < count__21611_21616))
{var node_21618 = cljs.core._nth.call(null,chunk__21610_21615,i__21612_21617);goog.dom.classes.set(node_21618,classes_21613__$1);
{
var G__21619 = seq__21609_21614;
var G__21620 = chunk__21610_21615;
var G__21621 = count__21611_21616;
var G__21622 = (i__21612_21617 + (1));
seq__21609_21614 = G__21619;
chunk__21610_21615 = G__21620;
count__21611_21616 = G__21621;
i__21612_21617 = G__21622;
continue;
}
} else
{var temp__4126__auto___21623 = cljs.core.seq.call(null,seq__21609_21614);if(temp__4126__auto___21623)
{var seq__21609_21624__$1 = temp__4126__auto___21623;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21609_21624__$1))
{var c__4408__auto___21625 = cljs.core.chunk_first.call(null,seq__21609_21624__$1);{
var G__21626 = cljs.core.chunk_rest.call(null,seq__21609_21624__$1);
var G__21627 = c__4408__auto___21625;
var G__21628 = cljs.core.count.call(null,c__4408__auto___21625);
var G__21629 = (0);
seq__21609_21614 = G__21626;
chunk__21610_21615 = G__21627;
count__21611_21616 = G__21628;
i__21612_21617 = G__21629;
continue;
}
} else
{var node_21630 = cljs.core.first.call(null,seq__21609_21624__$1);goog.dom.classes.set(node_21630,classes_21613__$1);
{
var G__21631 = cljs.core.next.call(null,seq__21609_21624__$1);
var G__21632 = null;
var G__21633 = (0);
var G__21634 = (0);
seq__21609_21614 = G__21631;
chunk__21610_21615 = G__21632;
count__21611_21616 = G__21633;
i__21612_21617 = G__21634;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__21639_21643 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21640_21644 = null;var count__21641_21645 = (0);var i__21642_21646 = (0);while(true){
if((i__21642_21646 < count__21641_21645))
{var node_21647 = cljs.core._nth.call(null,chunk__21640_21644,i__21642_21646);goog.dom.setTextContent(node_21647,value);
{
var G__21648 = seq__21639_21643;
var G__21649 = chunk__21640_21644;
var G__21650 = count__21641_21645;
var G__21651 = (i__21642_21646 + (1));
seq__21639_21643 = G__21648;
chunk__21640_21644 = G__21649;
count__21641_21645 = G__21650;
i__21642_21646 = G__21651;
continue;
}
} else
{var temp__4126__auto___21652 = cljs.core.seq.call(null,seq__21639_21643);if(temp__4126__auto___21652)
{var seq__21639_21653__$1 = temp__4126__auto___21652;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21639_21653__$1))
{var c__4408__auto___21654 = cljs.core.chunk_first.call(null,seq__21639_21653__$1);{
var G__21655 = cljs.core.chunk_rest.call(null,seq__21639_21653__$1);
var G__21656 = c__4408__auto___21654;
var G__21657 = cljs.core.count.call(null,c__4408__auto___21654);
var G__21658 = (0);
seq__21639_21643 = G__21655;
chunk__21640_21644 = G__21656;
count__21641_21645 = G__21657;
i__21642_21646 = G__21658;
continue;
}
} else
{var node_21659 = cljs.core.first.call(null,seq__21639_21653__$1);goog.dom.setTextContent(node_21659,value);
{
var G__21660 = cljs.core.next.call(null,seq__21639_21653__$1);
var G__21661 = null;
var G__21662 = (0);
var G__21663 = (0);
seq__21639_21643 = G__21660;
chunk__21640_21644 = G__21661;
count__21641_21645 = G__21662;
i__21642_21646 = G__21663;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21668_21672 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21669_21673 = null;var count__21670_21674 = (0);var i__21671_21675 = (0);while(true){
if((i__21671_21675 < count__21670_21674))
{var node_21676 = cljs.core._nth.call(null,chunk__21669_21673,i__21671_21675);goog.dom.forms.setValue(node_21676,value);
{
var G__21677 = seq__21668_21672;
var G__21678 = chunk__21669_21673;
var G__21679 = count__21670_21674;
var G__21680 = (i__21671_21675 + (1));
seq__21668_21672 = G__21677;
chunk__21669_21673 = G__21678;
count__21670_21674 = G__21679;
i__21671_21675 = G__21680;
continue;
}
} else
{var temp__4126__auto___21681 = cljs.core.seq.call(null,seq__21668_21672);if(temp__4126__auto___21681)
{var seq__21668_21682__$1 = temp__4126__auto___21681;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21668_21682__$1))
{var c__4408__auto___21683 = cljs.core.chunk_first.call(null,seq__21668_21682__$1);{
var G__21684 = cljs.core.chunk_rest.call(null,seq__21668_21682__$1);
var G__21685 = c__4408__auto___21683;
var G__21686 = cljs.core.count.call(null,c__4408__auto___21683);
var G__21687 = (0);
seq__21668_21672 = G__21684;
chunk__21669_21673 = G__21685;
count__21670_21674 = G__21686;
i__21671_21675 = G__21687;
continue;
}
} else
{var node_21688 = cljs.core.first.call(null,seq__21668_21682__$1);goog.dom.forms.setValue(node_21688,value);
{
var G__21689 = cljs.core.next.call(null,seq__21668_21682__$1);
var G__21690 = null;
var G__21691 = (0);
var G__21692 = (0);
seq__21668_21672 = G__21689;
chunk__21669_21673 = G__21690;
count__21670_21674 = G__21691;
i__21671_21675 = G__21692;
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
{var value_21703 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21699_21704 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21700_21705 = null;var count__21701_21706 = (0);var i__21702_21707 = (0);while(true){
if((i__21702_21707 < count__21701_21706))
{var node_21708 = cljs.core._nth.call(null,chunk__21700_21705,i__21702_21707);node_21708.innerHTML = value_21703;
{
var G__21709 = seq__21699_21704;
var G__21710 = chunk__21700_21705;
var G__21711 = count__21701_21706;
var G__21712 = (i__21702_21707 + (1));
seq__21699_21704 = G__21709;
chunk__21700_21705 = G__21710;
count__21701_21706 = G__21711;
i__21702_21707 = G__21712;
continue;
}
} else
{var temp__4126__auto___21713 = cljs.core.seq.call(null,seq__21699_21704);if(temp__4126__auto___21713)
{var seq__21699_21714__$1 = temp__4126__auto___21713;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21699_21714__$1))
{var c__4408__auto___21715 = cljs.core.chunk_first.call(null,seq__21699_21714__$1);{
var G__21716 = cljs.core.chunk_rest.call(null,seq__21699_21714__$1);
var G__21717 = c__4408__auto___21715;
var G__21718 = cljs.core.count.call(null,c__4408__auto___21715);
var G__21719 = (0);
seq__21699_21704 = G__21716;
chunk__21700_21705 = G__21717;
count__21701_21706 = G__21718;
i__21702_21707 = G__21719;
continue;
}
} else
{var node_21720 = cljs.core.first.call(null,seq__21699_21714__$1);node_21720.innerHTML = value_21703;
{
var G__21721 = cljs.core.next.call(null,seq__21699_21714__$1);
var G__21722 = null;
var G__21723 = (0);
var G__21724 = (0);
seq__21699_21704 = G__21721;
chunk__21700_21705 = G__21722;
count__21701_21706 = G__21723;
i__21702_21707 = G__21724;
continue;
}
}
} else
{}
}
break;
}
}catch (e21698){if((e21698 instanceof Error))
{var e_21725 = e21698;domina.replace_children_BANG_.call(null,content,value_21703);
} else
{throw e21698;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21732_21736 = cljs.core.seq.call(null,children);var chunk__21733_21737 = null;var count__21734_21738 = (0);var i__21735_21739 = (0);while(true){
if((i__21735_21739 < count__21734_21738))
{var child_21740 = cljs.core._nth.call(null,chunk__21733_21737,i__21735_21739);frag.appendChild(child_21740);
{
var G__21741 = seq__21732_21736;
var G__21742 = chunk__21733_21737;
var G__21743 = count__21734_21738;
var G__21744 = (i__21735_21739 + (1));
seq__21732_21736 = G__21741;
chunk__21733_21737 = G__21742;
count__21734_21738 = G__21743;
i__21735_21739 = G__21744;
continue;
}
} else
{var temp__4126__auto___21745 = cljs.core.seq.call(null,seq__21732_21736);if(temp__4126__auto___21745)
{var seq__21732_21746__$1 = temp__4126__auto___21745;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21732_21746__$1))
{var c__4408__auto___21747 = cljs.core.chunk_first.call(null,seq__21732_21746__$1);{
var G__21748 = cljs.core.chunk_rest.call(null,seq__21732_21746__$1);
var G__21749 = c__4408__auto___21747;
var G__21750 = cljs.core.count.call(null,c__4408__auto___21747);
var G__21751 = (0);
seq__21732_21736 = G__21748;
chunk__21733_21737 = G__21749;
count__21734_21738 = G__21750;
i__21735_21739 = G__21751;
continue;
}
} else
{var child_21752 = cljs.core.first.call(null,seq__21732_21746__$1);frag.appendChild(child_21752);
{
var G__21753 = cljs.core.next.call(null,seq__21732_21746__$1);
var G__21754 = null;
var G__21755 = (0);
var G__21756 = (0);
seq__21732_21736 = G__21753;
chunk__21733_21737 = G__21754;
count__21734_21738 = G__21755;
i__21735_21739 = G__21756;
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
return (function (p1__21726_SHARP_,p2__21727_SHARP_){return f.call(null,p1__21726_SHARP_,p2__21727_SHARP_);
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
{if((function (){var G__21758 = list_thing;if(G__21758)
{var bit__4302__auto__ = (G__21758.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21758.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21758.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21758);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21758);
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
{if((function (){var G__21759 = content;if(G__21759)
{var bit__4302__auto__ = (G__21759.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21759.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21759.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21759);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21759);
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
{if((function (){var G__21760 = content;if(G__21760)
{var bit__4302__auto__ = (G__21760.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__21760.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21760.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21760);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21760);
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
