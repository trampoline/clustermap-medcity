// Compiled by ClojureScript 0.0-2356
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('cljsjs.react');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__26703__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__26702 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__26702,(0),null);var body = cljs.core.nthnext.call(null,vec__26702,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__26703 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26703__delegate.call(this,args);};
G__26703.cljs$lang$maxFixedArity = 0;
G__26703.cljs$lang$applyTo = (function (arglist__26704){
var args = cljs.core.seq(arglist__26704);
return G__26703__delegate(args);
});
G__26703.cljs$core$IFn$_invoke$arity$variadic = G__26703__delegate;
return G__26703;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4377__auto__ = (function iter__26709(s__26710){return (new cljs.core.LazySeq(null,(function (){var s__26710__$1 = s__26710;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26710__$1);if(temp__4126__auto__)
{var s__26710__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26710__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26710__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26712 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26711 = (0);while(true){
if((i__26711 < size__4376__auto__))
{var args = cljs.core._nth.call(null,c__4375__auto__,i__26711);cljs.core.chunk_append.call(null,b__26712,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__26713 = (i__26711 + (1));
i__26711 = G__26713;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26712),iter__26709.call(null,cljs.core.chunk_rest.call(null,s__26710__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26712),null);
}
} else
{var args = cljs.core.first.call(null,s__26710__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__26709.call(null,cljs.core.rest.call(null,s__26710__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,arglists);
});
/**
* Render `element` as HTML string.
*/
sablono.core.render = (function render(element){if(cljs.core.truth_(element))
{return React.renderToString(element);
} else
{return null;
}
});
/**
* Render `element` as HTML string, without React internal attributes.
*/
sablono.core.render_static = (function render_static(element){if(cljs.core.truth_(element))
{return React.renderToStaticMarkup(element);
} else
{return null;
}
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4377__auto__ = (function iter__26718(s__26719){return (new cljs.core.LazySeq(null,(function (){var s__26719__$1 = s__26719;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26719__$1);if(temp__4126__auto__)
{var s__26719__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26719__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26719__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26721 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26720 = (0);while(true){
if((i__26720 < size__4376__auto__))
{var style = cljs.core._nth.call(null,c__4375__auto__,i__26720);cljs.core.chunk_append.call(null,b__26721,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__26722 = (i__26720 + (1));
i__26720 = G__26722;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26721),iter__26718.call(null,cljs.core.chunk_rest.call(null,s__26719__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26721),null);
}
} else
{var style = cljs.core.first.call(null,s__26719__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__26718.call(null,cljs.core.rest.call(null,s__26719__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__26723){
var styles = cljs.core.seq(arglist__26723);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to26724 = (function() { 
var link_to26724__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to26724 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26724__delegate.call(this,url,content);};
link_to26724.cljs$lang$maxFixedArity = 1;
link_to26724.cljs$lang$applyTo = (function (arglist__26725){
var url = cljs.core.first(arglist__26725);
var content = cljs.core.rest(arglist__26725);
return link_to26724__delegate(url,content);
});
link_to26724.cljs$core$IFn$_invoke$arity$variadic = link_to26724__delegate;
return link_to26724;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26724);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26726 = (function() { 
var mail_to26726__delegate = function (e_mail,p__26727){var vec__26729 = p__26727;var content = cljs.core.nth.call(null,vec__26729,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3639__auto__ = content;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26726 = function (e_mail,var_args){
var p__26727 = null;if (arguments.length > 1) {
  p__26727 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26726__delegate.call(this,e_mail,p__26727);};
mail_to26726.cljs$lang$maxFixedArity = 1;
mail_to26726.cljs$lang$applyTo = (function (arglist__26730){
var e_mail = cljs.core.first(arglist__26730);
var p__26727 = cljs.core.rest(arglist__26730);
return mail_to26726__delegate(e_mail,p__26727);
});
mail_to26726.cljs$core$IFn$_invoke$arity$variadic = mail_to26726__delegate;
return mail_to26726;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26726);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26731 = (function unordered_list26731(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4377__auto__ = (function iter__26736(s__26737){return (new cljs.core.LazySeq(null,(function (){var s__26737__$1 = s__26737;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26737__$1);if(temp__4126__auto__)
{var s__26737__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26737__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26737__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26739 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26738 = (0);while(true){
if((i__26738 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__26738);cljs.core.chunk_append.call(null,b__26739,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__26740 = (i__26738 + (1));
i__26738 = G__26740;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26739),iter__26736.call(null,cljs.core.chunk_rest.call(null,s__26737__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26739),null);
}
} else
{var x = cljs.core.first.call(null,s__26737__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__26736.call(null,cljs.core.rest.call(null,s__26737__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26731);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26741 = (function ordered_list26741(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4377__auto__ = (function iter__26746(s__26747){return (new cljs.core.LazySeq(null,(function (){var s__26747__$1 = s__26747;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26747__$1);if(temp__4126__auto__)
{var s__26747__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26747__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26747__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26749 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26748 = (0);while(true){
if((i__26748 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__26748);cljs.core.chunk_append.call(null,b__26749,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__26750 = (i__26748 + (1));
i__26748 = G__26750;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26749),iter__26746.call(null,cljs.core.chunk_rest.call(null,s__26747__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26749),null);
}
} else
{var x = cljs.core.first.call(null,s__26747__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__26746.call(null,cljs.core.rest.call(null,s__26747__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26741);
/**
* Create an image element.
*/
sablono.core.image26751 = (function() {
var image26751 = null;
var image26751__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image26751__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image26751 = function(src,alt){
switch(arguments.length){
case 1:
return image26751__1.call(this,src);
case 2:
return image26751__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26751.cljs$core$IFn$_invoke$arity$1 = image26751__1;
image26751.cljs$core$IFn$_invoke$arity$2 = image26751__2;
return image26751;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26751);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__26752_SHARP_,p2__26753_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26752_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__26753_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__26754_SHARP_,p2__26755_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26754_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__26755_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field26756 = (function() {
var color_field26756 = null;
var color_field26756__1 = (function (name__5127__auto__){return color_field26756.call(null,name__5127__auto__,null);
});
var color_field26756__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5127__auto__,value__5128__auto__);
});
color_field26756 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return color_field26756__1.call(this,name__5127__auto__);
case 2:
return color_field26756__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field26756.cljs$core$IFn$_invoke$arity$1 = color_field26756__1;
color_field26756.cljs$core$IFn$_invoke$arity$2 = color_field26756__2;
return color_field26756;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26756);
/**
* Creates a date input field.
*/
sablono.core.date_field26757 = (function() {
var date_field26757 = null;
var date_field26757__1 = (function (name__5127__auto__){return date_field26757.call(null,name__5127__auto__,null);
});
var date_field26757__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5127__auto__,value__5128__auto__);
});
date_field26757 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return date_field26757__1.call(this,name__5127__auto__);
case 2:
return date_field26757__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field26757.cljs$core$IFn$_invoke$arity$1 = date_field26757__1;
date_field26757.cljs$core$IFn$_invoke$arity$2 = date_field26757__2;
return date_field26757;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26757);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field26758 = (function() {
var datetime_field26758 = null;
var datetime_field26758__1 = (function (name__5127__auto__){return datetime_field26758.call(null,name__5127__auto__,null);
});
var datetime_field26758__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5127__auto__,value__5128__auto__);
});
datetime_field26758 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_field26758__1.call(this,name__5127__auto__);
case 2:
return datetime_field26758__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field26758.cljs$core$IFn$_invoke$arity$1 = datetime_field26758__1;
datetime_field26758.cljs$core$IFn$_invoke$arity$2 = datetime_field26758__2;
return datetime_field26758;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26758);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field26759 = (function() {
var datetime_local_field26759 = null;
var datetime_local_field26759__1 = (function (name__5127__auto__){return datetime_local_field26759.call(null,name__5127__auto__,null);
});
var datetime_local_field26759__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5127__auto__,value__5128__auto__);
});
datetime_local_field26759 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_local_field26759__1.call(this,name__5127__auto__);
case 2:
return datetime_local_field26759__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field26759.cljs$core$IFn$_invoke$arity$1 = datetime_local_field26759__1;
datetime_local_field26759.cljs$core$IFn$_invoke$arity$2 = datetime_local_field26759__2;
return datetime_local_field26759;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26759);
/**
* Creates a email input field.
*/
sablono.core.email_field26760 = (function() {
var email_field26760 = null;
var email_field26760__1 = (function (name__5127__auto__){return email_field26760.call(null,name__5127__auto__,null);
});
var email_field26760__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5127__auto__,value__5128__auto__);
});
email_field26760 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return email_field26760__1.call(this,name__5127__auto__);
case 2:
return email_field26760__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26760.cljs$core$IFn$_invoke$arity$1 = email_field26760__1;
email_field26760.cljs$core$IFn$_invoke$arity$2 = email_field26760__2;
return email_field26760;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26760);
/**
* Creates a file input field.
*/
sablono.core.file_field26761 = (function() {
var file_field26761 = null;
var file_field26761__1 = (function (name__5127__auto__){return file_field26761.call(null,name__5127__auto__,null);
});
var file_field26761__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5127__auto__,value__5128__auto__);
});
file_field26761 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return file_field26761__1.call(this,name__5127__auto__);
case 2:
return file_field26761__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field26761.cljs$core$IFn$_invoke$arity$1 = file_field26761__1;
file_field26761.cljs$core$IFn$_invoke$arity$2 = file_field26761__2;
return file_field26761;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26761);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26762 = (function() {
var hidden_field26762 = null;
var hidden_field26762__1 = (function (name__5127__auto__){return hidden_field26762.call(null,name__5127__auto__,null);
});
var hidden_field26762__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5127__auto__,value__5128__auto__);
});
hidden_field26762 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return hidden_field26762__1.call(this,name__5127__auto__);
case 2:
return hidden_field26762__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26762.cljs$core$IFn$_invoke$arity$1 = hidden_field26762__1;
hidden_field26762.cljs$core$IFn$_invoke$arity$2 = hidden_field26762__2;
return hidden_field26762;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26762);
/**
* Creates a month input field.
*/
sablono.core.month_field26763 = (function() {
var month_field26763 = null;
var month_field26763__1 = (function (name__5127__auto__){return month_field26763.call(null,name__5127__auto__,null);
});
var month_field26763__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5127__auto__,value__5128__auto__);
});
month_field26763 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return month_field26763__1.call(this,name__5127__auto__);
case 2:
return month_field26763__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field26763.cljs$core$IFn$_invoke$arity$1 = month_field26763__1;
month_field26763.cljs$core$IFn$_invoke$arity$2 = month_field26763__2;
return month_field26763;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26763);
/**
* Creates a number input field.
*/
sablono.core.number_field26764 = (function() {
var number_field26764 = null;
var number_field26764__1 = (function (name__5127__auto__){return number_field26764.call(null,name__5127__auto__,null);
});
var number_field26764__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5127__auto__,value__5128__auto__);
});
number_field26764 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return number_field26764__1.call(this,name__5127__auto__);
case 2:
return number_field26764__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field26764.cljs$core$IFn$_invoke$arity$1 = number_field26764__1;
number_field26764.cljs$core$IFn$_invoke$arity$2 = number_field26764__2;
return number_field26764;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26764);
/**
* Creates a password input field.
*/
sablono.core.password_field26765 = (function() {
var password_field26765 = null;
var password_field26765__1 = (function (name__5127__auto__){return password_field26765.call(null,name__5127__auto__,null);
});
var password_field26765__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5127__auto__,value__5128__auto__);
});
password_field26765 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return password_field26765__1.call(this,name__5127__auto__);
case 2:
return password_field26765__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26765.cljs$core$IFn$_invoke$arity$1 = password_field26765__1;
password_field26765.cljs$core$IFn$_invoke$arity$2 = password_field26765__2;
return password_field26765;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26765);
/**
* Creates a range input field.
*/
sablono.core.range_field26766 = (function() {
var range_field26766 = null;
var range_field26766__1 = (function (name__5127__auto__){return range_field26766.call(null,name__5127__auto__,null);
});
var range_field26766__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5127__auto__,value__5128__auto__);
});
range_field26766 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return range_field26766__1.call(this,name__5127__auto__);
case 2:
return range_field26766__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field26766.cljs$core$IFn$_invoke$arity$1 = range_field26766__1;
range_field26766.cljs$core$IFn$_invoke$arity$2 = range_field26766__2;
return range_field26766;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26766);
/**
* Creates a search input field.
*/
sablono.core.search_field26767 = (function() {
var search_field26767 = null;
var search_field26767__1 = (function (name__5127__auto__){return search_field26767.call(null,name__5127__auto__,null);
});
var search_field26767__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5127__auto__,value__5128__auto__);
});
search_field26767 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return search_field26767__1.call(this,name__5127__auto__);
case 2:
return search_field26767__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field26767.cljs$core$IFn$_invoke$arity$1 = search_field26767__1;
search_field26767.cljs$core$IFn$_invoke$arity$2 = search_field26767__2;
return search_field26767;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26767);
/**
* Creates a tel input field.
*/
sablono.core.tel_field26768 = (function() {
var tel_field26768 = null;
var tel_field26768__1 = (function (name__5127__auto__){return tel_field26768.call(null,name__5127__auto__,null);
});
var tel_field26768__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5127__auto__,value__5128__auto__);
});
tel_field26768 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return tel_field26768__1.call(this,name__5127__auto__);
case 2:
return tel_field26768__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field26768.cljs$core$IFn$_invoke$arity$1 = tel_field26768__1;
tel_field26768.cljs$core$IFn$_invoke$arity$2 = tel_field26768__2;
return tel_field26768;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26768);
/**
* Creates a text input field.
*/
sablono.core.text_field26769 = (function() {
var text_field26769 = null;
var text_field26769__1 = (function (name__5127__auto__){return text_field26769.call(null,name__5127__auto__,null);
});
var text_field26769__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5127__auto__,value__5128__auto__);
});
text_field26769 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return text_field26769__1.call(this,name__5127__auto__);
case 2:
return text_field26769__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26769.cljs$core$IFn$_invoke$arity$1 = text_field26769__1;
text_field26769.cljs$core$IFn$_invoke$arity$2 = text_field26769__2;
return text_field26769;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26769);
/**
* Creates a time input field.
*/
sablono.core.time_field26770 = (function() {
var time_field26770 = null;
var time_field26770__1 = (function (name__5127__auto__){return time_field26770.call(null,name__5127__auto__,null);
});
var time_field26770__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5127__auto__,value__5128__auto__);
});
time_field26770 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return time_field26770__1.call(this,name__5127__auto__);
case 2:
return time_field26770__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field26770.cljs$core$IFn$_invoke$arity$1 = time_field26770__1;
time_field26770.cljs$core$IFn$_invoke$arity$2 = time_field26770__2;
return time_field26770;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26770);
/**
* Creates a url input field.
*/
sablono.core.url_field26771 = (function() {
var url_field26771 = null;
var url_field26771__1 = (function (name__5127__auto__){return url_field26771.call(null,name__5127__auto__,null);
});
var url_field26771__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5127__auto__,value__5128__auto__);
});
url_field26771 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return url_field26771__1.call(this,name__5127__auto__);
case 2:
return url_field26771__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field26771.cljs$core$IFn$_invoke$arity$1 = url_field26771__1;
url_field26771.cljs$core$IFn$_invoke$arity$2 = url_field26771__2;
return url_field26771;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26771);
/**
* Creates a week input field.
*/
sablono.core.week_field26772 = (function() {
var week_field26772 = null;
var week_field26772__1 = (function (name__5127__auto__){return week_field26772.call(null,name__5127__auto__,null);
});
var week_field26772__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5127__auto__,value__5128__auto__);
});
week_field26772 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return week_field26772__1.call(this,name__5127__auto__);
case 2:
return week_field26772__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field26772.cljs$core$IFn$_invoke$arity$1 = week_field26772__1;
week_field26772.cljs$core$IFn$_invoke$arity$2 = week_field26772__2;
return week_field26772;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26772);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box26773 = (function() {
var check_box26773 = null;
var check_box26773__1 = (function (name){return check_box26773.call(null,name,null);
});
var check_box26773__2 = (function (name,checked_QMARK_){return check_box26773.call(null,name,checked_QMARK_,"true");
});
var check_box26773__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box26773 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26773__1.call(this,name);
case 2:
return check_box26773__2.call(this,name,checked_QMARK_);
case 3:
return check_box26773__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26773.cljs$core$IFn$_invoke$arity$1 = check_box26773__1;
check_box26773.cljs$core$IFn$_invoke$arity$2 = check_box26773__2;
check_box26773.cljs$core$IFn$_invoke$arity$3 = check_box26773__3;
return check_box26773;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26773);
/**
* Creates a radio button.
*/
sablono.core.radio_button26774 = (function() {
var radio_button26774 = null;
var radio_button26774__1 = (function (group){return radio_button26774.call(null,group,null);
});
var radio_button26774__2 = (function (group,checked_QMARK_){return radio_button26774.call(null,group,checked_QMARK_,"true");
});
var radio_button26774__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button26774 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26774__1.call(this,group);
case 2:
return radio_button26774__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26774__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26774.cljs$core$IFn$_invoke$arity$1 = radio_button26774__1;
radio_button26774.cljs$core$IFn$_invoke$arity$2 = radio_button26774__2;
radio_button26774.cljs$core$IFn$_invoke$arity$3 = radio_button26774__3;
return radio_button26774;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26774);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26775 = (function() {
var select_options26775 = null;
var select_options26775__1 = (function (coll){return select_options26775.call(null,coll,null);
});
var select_options26775__2 = (function (coll,selected){var iter__4377__auto__ = (function iter__26784(s__26785){return (new cljs.core.LazySeq(null,(function (){var s__26785__$1 = s__26785;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26785__$1);if(temp__4126__auto__)
{var s__26785__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26785__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26785__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26787 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26786 = (0);while(true){
if((i__26786 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__26786);cljs.core.chunk_append.call(null,b__26787,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26790 = x;var text = cljs.core.nth.call(null,vec__26790,(0),null);var val = cljs.core.nth.call(null,vec__26790,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__26790,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options26775.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__26792 = (i__26786 + (1));
i__26786 = G__26792;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26787),iter__26784.call(null,cljs.core.chunk_rest.call(null,s__26785__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26787),null);
}
} else
{var x = cljs.core.first.call(null,s__26785__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26791 = x;var text = cljs.core.nth.call(null,vec__26791,(0),null);var val = cljs.core.nth.call(null,vec__26791,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__26791,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options26775.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__26784.call(null,cljs.core.rest.call(null,s__26785__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
});
select_options26775 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26775__1.call(this,coll);
case 2:
return select_options26775__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26775.cljs$core$IFn$_invoke$arity$1 = select_options26775__1;
select_options26775.cljs$core$IFn$_invoke$arity$2 = select_options26775__2;
return select_options26775;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26775);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26793 = (function() {
var drop_down26793 = null;
var drop_down26793__2 = (function (name,options){return drop_down26793.call(null,name,options,null);
});
var drop_down26793__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down26793 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26793__2.call(this,name,options);
case 3:
return drop_down26793__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26793.cljs$core$IFn$_invoke$arity$2 = drop_down26793__2;
drop_down26793.cljs$core$IFn$_invoke$arity$3 = drop_down26793__3;
return drop_down26793;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26793);
/**
* Creates a text area element.
*/
sablono.core.text_area26794 = (function() {
var text_area26794 = null;
var text_area26794__1 = (function (name){return text_area26794.call(null,name,null);
});
var text_area26794__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area26794 = function(name,value){
switch(arguments.length){
case 1:
return text_area26794__1.call(this,name);
case 2:
return text_area26794__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26794.cljs$core$IFn$_invoke$arity$1 = text_area26794__1;
text_area26794.cljs$core$IFn$_invoke$arity$2 = text_area26794__2;
return text_area26794;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26794);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26795 = (function label26795(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26795);
/**
* Creates a submit button.
*/
sablono.core.submit_button26796 = (function submit_button26796(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26796);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26797 = (function reset_button26797(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26797);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26798 = (function() { 
var form_to26798__delegate = function (p__26799,body){var vec__26801 = p__26799;var method = cljs.core.nth.call(null,vec__26801,(0),null);var action = cljs.core.nth.call(null,vec__26801,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to26798 = function (p__26799,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26798__delegate.call(this,p__26799,body);};
form_to26798.cljs$lang$maxFixedArity = 1;
form_to26798.cljs$lang$applyTo = (function (arglist__26802){
var p__26799 = cljs.core.first(arglist__26802);
var body = cljs.core.rest(arglist__26802);
return form_to26798__delegate(p__26799,body);
});
form_to26798.cljs$core$IFn$_invoke$arity$variadic = form_to26798__delegate;
return form_to26798;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26798);
