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
var G__26720__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__26719 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__26719,(0),null);var body = cljs.core.nthnext.call(null,vec__26719,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__26720 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26720__delegate.call(this,args);};
G__26720.cljs$lang$maxFixedArity = 0;
G__26720.cljs$lang$applyTo = (function (arglist__26721){
var args = cljs.core.seq(arglist__26721);
return G__26720__delegate(args);
});
G__26720.cljs$core$IFn$_invoke$arity$variadic = G__26720__delegate;
return G__26720;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4377__auto__ = (function iter__26726(s__26727){return (new cljs.core.LazySeq(null,(function (){var s__26727__$1 = s__26727;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26727__$1);if(temp__4126__auto__)
{var s__26727__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26727__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26727__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26729 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26728 = (0);while(true){
if((i__26728 < size__4376__auto__))
{var args = cljs.core._nth.call(null,c__4375__auto__,i__26728);cljs.core.chunk_append.call(null,b__26729,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__26730 = (i__26728 + (1));
i__26728 = G__26730;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26729),iter__26726.call(null,cljs.core.chunk_rest.call(null,s__26727__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26729),null);
}
} else
{var args = cljs.core.first.call(null,s__26727__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__26726.call(null,cljs.core.rest.call(null,s__26727__$2)));
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
var include_css__delegate = function (styles){var iter__4377__auto__ = (function iter__26735(s__26736){return (new cljs.core.LazySeq(null,(function (){var s__26736__$1 = s__26736;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26736__$1);if(temp__4126__auto__)
{var s__26736__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26736__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26736__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26738 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26737 = (0);while(true){
if((i__26737 < size__4376__auto__))
{var style = cljs.core._nth.call(null,c__4375__auto__,i__26737);cljs.core.chunk_append.call(null,b__26738,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__26739 = (i__26737 + (1));
i__26737 = G__26739;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26738),iter__26735.call(null,cljs.core.chunk_rest.call(null,s__26736__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26738),null);
}
} else
{var style = cljs.core.first.call(null,s__26736__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__26735.call(null,cljs.core.rest.call(null,s__26736__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__26740){
var styles = cljs.core.seq(arglist__26740);
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
sablono.core.link_to26741 = (function() { 
var link_to26741__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to26741 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26741__delegate.call(this,url,content);};
link_to26741.cljs$lang$maxFixedArity = 1;
link_to26741.cljs$lang$applyTo = (function (arglist__26742){
var url = cljs.core.first(arglist__26742);
var content = cljs.core.rest(arglist__26742);
return link_to26741__delegate(url,content);
});
link_to26741.cljs$core$IFn$_invoke$arity$variadic = link_to26741__delegate;
return link_to26741;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26741);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26743 = (function() { 
var mail_to26743__delegate = function (e_mail,p__26744){var vec__26746 = p__26744;var content = cljs.core.nth.call(null,vec__26746,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3639__auto__ = content;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26743 = function (e_mail,var_args){
var p__26744 = null;if (arguments.length > 1) {
  p__26744 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26743__delegate.call(this,e_mail,p__26744);};
mail_to26743.cljs$lang$maxFixedArity = 1;
mail_to26743.cljs$lang$applyTo = (function (arglist__26747){
var e_mail = cljs.core.first(arglist__26747);
var p__26744 = cljs.core.rest(arglist__26747);
return mail_to26743__delegate(e_mail,p__26744);
});
mail_to26743.cljs$core$IFn$_invoke$arity$variadic = mail_to26743__delegate;
return mail_to26743;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26743);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26748 = (function unordered_list26748(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4377__auto__ = (function iter__26753(s__26754){return (new cljs.core.LazySeq(null,(function (){var s__26754__$1 = s__26754;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26754__$1);if(temp__4126__auto__)
{var s__26754__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26754__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26754__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26756 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26755 = (0);while(true){
if((i__26755 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__26755);cljs.core.chunk_append.call(null,b__26756,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__26757 = (i__26755 + (1));
i__26755 = G__26757;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26756),iter__26753.call(null,cljs.core.chunk_rest.call(null,s__26754__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26756),null);
}
} else
{var x = cljs.core.first.call(null,s__26754__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__26753.call(null,cljs.core.rest.call(null,s__26754__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26748);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26758 = (function ordered_list26758(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4377__auto__ = (function iter__26763(s__26764){return (new cljs.core.LazySeq(null,(function (){var s__26764__$1 = s__26764;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26764__$1);if(temp__4126__auto__)
{var s__26764__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26764__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26764__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26766 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26765 = (0);while(true){
if((i__26765 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__26765);cljs.core.chunk_append.call(null,b__26766,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__26767 = (i__26765 + (1));
i__26765 = G__26767;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26766),iter__26763.call(null,cljs.core.chunk_rest.call(null,s__26764__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26766),null);
}
} else
{var x = cljs.core.first.call(null,s__26764__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__26763.call(null,cljs.core.rest.call(null,s__26764__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26758);
/**
* Create an image element.
*/
sablono.core.image26768 = (function() {
var image26768 = null;
var image26768__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image26768__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image26768 = function(src,alt){
switch(arguments.length){
case 1:
return image26768__1.call(this,src);
case 2:
return image26768__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26768.cljs$core$IFn$_invoke$arity$1 = image26768__1;
image26768.cljs$core$IFn$_invoke$arity$2 = image26768__2;
return image26768;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26768);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__26769_SHARP_,p2__26770_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26769_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__26770_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__26771_SHARP_,p2__26772_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26771_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__26772_SHARP_));
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
sablono.core.color_field26773 = (function() {
var color_field26773 = null;
var color_field26773__1 = (function (name__5127__auto__){return color_field26773.call(null,name__5127__auto__,null);
});
var color_field26773__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5127__auto__,value__5128__auto__);
});
color_field26773 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return color_field26773__1.call(this,name__5127__auto__);
case 2:
return color_field26773__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field26773.cljs$core$IFn$_invoke$arity$1 = color_field26773__1;
color_field26773.cljs$core$IFn$_invoke$arity$2 = color_field26773__2;
return color_field26773;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26773);
/**
* Creates a date input field.
*/
sablono.core.date_field26774 = (function() {
var date_field26774 = null;
var date_field26774__1 = (function (name__5127__auto__){return date_field26774.call(null,name__5127__auto__,null);
});
var date_field26774__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5127__auto__,value__5128__auto__);
});
date_field26774 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return date_field26774__1.call(this,name__5127__auto__);
case 2:
return date_field26774__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field26774.cljs$core$IFn$_invoke$arity$1 = date_field26774__1;
date_field26774.cljs$core$IFn$_invoke$arity$2 = date_field26774__2;
return date_field26774;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26774);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field26775 = (function() {
var datetime_field26775 = null;
var datetime_field26775__1 = (function (name__5127__auto__){return datetime_field26775.call(null,name__5127__auto__,null);
});
var datetime_field26775__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5127__auto__,value__5128__auto__);
});
datetime_field26775 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_field26775__1.call(this,name__5127__auto__);
case 2:
return datetime_field26775__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field26775.cljs$core$IFn$_invoke$arity$1 = datetime_field26775__1;
datetime_field26775.cljs$core$IFn$_invoke$arity$2 = datetime_field26775__2;
return datetime_field26775;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26775);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field26776 = (function() {
var datetime_local_field26776 = null;
var datetime_local_field26776__1 = (function (name__5127__auto__){return datetime_local_field26776.call(null,name__5127__auto__,null);
});
var datetime_local_field26776__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5127__auto__,value__5128__auto__);
});
datetime_local_field26776 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_local_field26776__1.call(this,name__5127__auto__);
case 2:
return datetime_local_field26776__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field26776.cljs$core$IFn$_invoke$arity$1 = datetime_local_field26776__1;
datetime_local_field26776.cljs$core$IFn$_invoke$arity$2 = datetime_local_field26776__2;
return datetime_local_field26776;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26776);
/**
* Creates a email input field.
*/
sablono.core.email_field26777 = (function() {
var email_field26777 = null;
var email_field26777__1 = (function (name__5127__auto__){return email_field26777.call(null,name__5127__auto__,null);
});
var email_field26777__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5127__auto__,value__5128__auto__);
});
email_field26777 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return email_field26777__1.call(this,name__5127__auto__);
case 2:
return email_field26777__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26777.cljs$core$IFn$_invoke$arity$1 = email_field26777__1;
email_field26777.cljs$core$IFn$_invoke$arity$2 = email_field26777__2;
return email_field26777;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26777);
/**
* Creates a file input field.
*/
sablono.core.file_field26778 = (function() {
var file_field26778 = null;
var file_field26778__1 = (function (name__5127__auto__){return file_field26778.call(null,name__5127__auto__,null);
});
var file_field26778__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5127__auto__,value__5128__auto__);
});
file_field26778 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return file_field26778__1.call(this,name__5127__auto__);
case 2:
return file_field26778__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field26778.cljs$core$IFn$_invoke$arity$1 = file_field26778__1;
file_field26778.cljs$core$IFn$_invoke$arity$2 = file_field26778__2;
return file_field26778;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26778);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26779 = (function() {
var hidden_field26779 = null;
var hidden_field26779__1 = (function (name__5127__auto__){return hidden_field26779.call(null,name__5127__auto__,null);
});
var hidden_field26779__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5127__auto__,value__5128__auto__);
});
hidden_field26779 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return hidden_field26779__1.call(this,name__5127__auto__);
case 2:
return hidden_field26779__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26779.cljs$core$IFn$_invoke$arity$1 = hidden_field26779__1;
hidden_field26779.cljs$core$IFn$_invoke$arity$2 = hidden_field26779__2;
return hidden_field26779;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26779);
/**
* Creates a month input field.
*/
sablono.core.month_field26780 = (function() {
var month_field26780 = null;
var month_field26780__1 = (function (name__5127__auto__){return month_field26780.call(null,name__5127__auto__,null);
});
var month_field26780__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5127__auto__,value__5128__auto__);
});
month_field26780 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return month_field26780__1.call(this,name__5127__auto__);
case 2:
return month_field26780__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field26780.cljs$core$IFn$_invoke$arity$1 = month_field26780__1;
month_field26780.cljs$core$IFn$_invoke$arity$2 = month_field26780__2;
return month_field26780;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26780);
/**
* Creates a number input field.
*/
sablono.core.number_field26781 = (function() {
var number_field26781 = null;
var number_field26781__1 = (function (name__5127__auto__){return number_field26781.call(null,name__5127__auto__,null);
});
var number_field26781__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5127__auto__,value__5128__auto__);
});
number_field26781 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return number_field26781__1.call(this,name__5127__auto__);
case 2:
return number_field26781__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field26781.cljs$core$IFn$_invoke$arity$1 = number_field26781__1;
number_field26781.cljs$core$IFn$_invoke$arity$2 = number_field26781__2;
return number_field26781;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26781);
/**
* Creates a password input field.
*/
sablono.core.password_field26782 = (function() {
var password_field26782 = null;
var password_field26782__1 = (function (name__5127__auto__){return password_field26782.call(null,name__5127__auto__,null);
});
var password_field26782__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5127__auto__,value__5128__auto__);
});
password_field26782 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return password_field26782__1.call(this,name__5127__auto__);
case 2:
return password_field26782__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26782.cljs$core$IFn$_invoke$arity$1 = password_field26782__1;
password_field26782.cljs$core$IFn$_invoke$arity$2 = password_field26782__2;
return password_field26782;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26782);
/**
* Creates a range input field.
*/
sablono.core.range_field26783 = (function() {
var range_field26783 = null;
var range_field26783__1 = (function (name__5127__auto__){return range_field26783.call(null,name__5127__auto__,null);
});
var range_field26783__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5127__auto__,value__5128__auto__);
});
range_field26783 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return range_field26783__1.call(this,name__5127__auto__);
case 2:
return range_field26783__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field26783.cljs$core$IFn$_invoke$arity$1 = range_field26783__1;
range_field26783.cljs$core$IFn$_invoke$arity$2 = range_field26783__2;
return range_field26783;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26783);
/**
* Creates a search input field.
*/
sablono.core.search_field26784 = (function() {
var search_field26784 = null;
var search_field26784__1 = (function (name__5127__auto__){return search_field26784.call(null,name__5127__auto__,null);
});
var search_field26784__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5127__auto__,value__5128__auto__);
});
search_field26784 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return search_field26784__1.call(this,name__5127__auto__);
case 2:
return search_field26784__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field26784.cljs$core$IFn$_invoke$arity$1 = search_field26784__1;
search_field26784.cljs$core$IFn$_invoke$arity$2 = search_field26784__2;
return search_field26784;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26784);
/**
* Creates a tel input field.
*/
sablono.core.tel_field26785 = (function() {
var tel_field26785 = null;
var tel_field26785__1 = (function (name__5127__auto__){return tel_field26785.call(null,name__5127__auto__,null);
});
var tel_field26785__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5127__auto__,value__5128__auto__);
});
tel_field26785 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return tel_field26785__1.call(this,name__5127__auto__);
case 2:
return tel_field26785__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field26785.cljs$core$IFn$_invoke$arity$1 = tel_field26785__1;
tel_field26785.cljs$core$IFn$_invoke$arity$2 = tel_field26785__2;
return tel_field26785;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26785);
/**
* Creates a text input field.
*/
sablono.core.text_field26786 = (function() {
var text_field26786 = null;
var text_field26786__1 = (function (name__5127__auto__){return text_field26786.call(null,name__5127__auto__,null);
});
var text_field26786__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5127__auto__,value__5128__auto__);
});
text_field26786 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return text_field26786__1.call(this,name__5127__auto__);
case 2:
return text_field26786__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26786.cljs$core$IFn$_invoke$arity$1 = text_field26786__1;
text_field26786.cljs$core$IFn$_invoke$arity$2 = text_field26786__2;
return text_field26786;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26786);
/**
* Creates a time input field.
*/
sablono.core.time_field26787 = (function() {
var time_field26787 = null;
var time_field26787__1 = (function (name__5127__auto__){return time_field26787.call(null,name__5127__auto__,null);
});
var time_field26787__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5127__auto__,value__5128__auto__);
});
time_field26787 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return time_field26787__1.call(this,name__5127__auto__);
case 2:
return time_field26787__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field26787.cljs$core$IFn$_invoke$arity$1 = time_field26787__1;
time_field26787.cljs$core$IFn$_invoke$arity$2 = time_field26787__2;
return time_field26787;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26787);
/**
* Creates a url input field.
*/
sablono.core.url_field26788 = (function() {
var url_field26788 = null;
var url_field26788__1 = (function (name__5127__auto__){return url_field26788.call(null,name__5127__auto__,null);
});
var url_field26788__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5127__auto__,value__5128__auto__);
});
url_field26788 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return url_field26788__1.call(this,name__5127__auto__);
case 2:
return url_field26788__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field26788.cljs$core$IFn$_invoke$arity$1 = url_field26788__1;
url_field26788.cljs$core$IFn$_invoke$arity$2 = url_field26788__2;
return url_field26788;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26788);
/**
* Creates a week input field.
*/
sablono.core.week_field26789 = (function() {
var week_field26789 = null;
var week_field26789__1 = (function (name__5127__auto__){return week_field26789.call(null,name__5127__auto__,null);
});
var week_field26789__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5127__auto__,value__5128__auto__);
});
week_field26789 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return week_field26789__1.call(this,name__5127__auto__);
case 2:
return week_field26789__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field26789.cljs$core$IFn$_invoke$arity$1 = week_field26789__1;
week_field26789.cljs$core$IFn$_invoke$arity$2 = week_field26789__2;
return week_field26789;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26789);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box26790 = (function() {
var check_box26790 = null;
var check_box26790__1 = (function (name){return check_box26790.call(null,name,null);
});
var check_box26790__2 = (function (name,checked_QMARK_){return check_box26790.call(null,name,checked_QMARK_,"true");
});
var check_box26790__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box26790 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26790__1.call(this,name);
case 2:
return check_box26790__2.call(this,name,checked_QMARK_);
case 3:
return check_box26790__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26790.cljs$core$IFn$_invoke$arity$1 = check_box26790__1;
check_box26790.cljs$core$IFn$_invoke$arity$2 = check_box26790__2;
check_box26790.cljs$core$IFn$_invoke$arity$3 = check_box26790__3;
return check_box26790;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26790);
/**
* Creates a radio button.
*/
sablono.core.radio_button26791 = (function() {
var radio_button26791 = null;
var radio_button26791__1 = (function (group){return radio_button26791.call(null,group,null);
});
var radio_button26791__2 = (function (group,checked_QMARK_){return radio_button26791.call(null,group,checked_QMARK_,"true");
});
var radio_button26791__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button26791 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26791__1.call(this,group);
case 2:
return radio_button26791__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26791__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26791.cljs$core$IFn$_invoke$arity$1 = radio_button26791__1;
radio_button26791.cljs$core$IFn$_invoke$arity$2 = radio_button26791__2;
radio_button26791.cljs$core$IFn$_invoke$arity$3 = radio_button26791__3;
return radio_button26791;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26791);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26792 = (function() {
var select_options26792 = null;
var select_options26792__1 = (function (coll){return select_options26792.call(null,coll,null);
});
var select_options26792__2 = (function (coll,selected){var iter__4377__auto__ = (function iter__26801(s__26802){return (new cljs.core.LazySeq(null,(function (){var s__26802__$1 = s__26802;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26802__$1);if(temp__4126__auto__)
{var s__26802__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26802__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26802__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26804 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26803 = (0);while(true){
if((i__26803 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__26803);cljs.core.chunk_append.call(null,b__26804,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26807 = x;var text = cljs.core.nth.call(null,vec__26807,(0),null);var val = cljs.core.nth.call(null,vec__26807,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__26807,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options26792.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__26809 = (i__26803 + (1));
i__26803 = G__26809;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26804),iter__26801.call(null,cljs.core.chunk_rest.call(null,s__26802__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26804),null);
}
} else
{var x = cljs.core.first.call(null,s__26802__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26808 = x;var text = cljs.core.nth.call(null,vec__26808,(0),null);var val = cljs.core.nth.call(null,vec__26808,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__26808,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options26792.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__26801.call(null,cljs.core.rest.call(null,s__26802__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
});
select_options26792 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26792__1.call(this,coll);
case 2:
return select_options26792__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26792.cljs$core$IFn$_invoke$arity$1 = select_options26792__1;
select_options26792.cljs$core$IFn$_invoke$arity$2 = select_options26792__2;
return select_options26792;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26792);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26810 = (function() {
var drop_down26810 = null;
var drop_down26810__2 = (function (name,options){return drop_down26810.call(null,name,options,null);
});
var drop_down26810__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down26810 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26810__2.call(this,name,options);
case 3:
return drop_down26810__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26810.cljs$core$IFn$_invoke$arity$2 = drop_down26810__2;
drop_down26810.cljs$core$IFn$_invoke$arity$3 = drop_down26810__3;
return drop_down26810;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26810);
/**
* Creates a text area element.
*/
sablono.core.text_area26811 = (function() {
var text_area26811 = null;
var text_area26811__1 = (function (name){return text_area26811.call(null,name,null);
});
var text_area26811__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area26811 = function(name,value){
switch(arguments.length){
case 1:
return text_area26811__1.call(this,name);
case 2:
return text_area26811__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26811.cljs$core$IFn$_invoke$arity$1 = text_area26811__1;
text_area26811.cljs$core$IFn$_invoke$arity$2 = text_area26811__2;
return text_area26811;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26811);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26812 = (function label26812(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26812);
/**
* Creates a submit button.
*/
sablono.core.submit_button26813 = (function submit_button26813(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26813);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26814 = (function reset_button26814(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26814);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26815 = (function() { 
var form_to26815__delegate = function (p__26816,body){var vec__26818 = p__26816;var method = cljs.core.nth.call(null,vec__26818,(0),null);var action = cljs.core.nth.call(null,vec__26818,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to26815 = function (p__26816,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26815__delegate.call(this,p__26816,body);};
form_to26815.cljs$lang$maxFixedArity = 1;
form_to26815.cljs$lang$applyTo = (function (arglist__26819){
var p__26816 = cljs.core.first(arglist__26819);
var body = cljs.core.rest(arglist__26819);
return form_to26815__delegate(p__26816,body);
});
form_to26815.cljs$core$IFn$_invoke$arity$variadic = form_to26815__delegate;
return form_to26815;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26815);
