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
var G__26715__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__26714 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__26714,(0),null);var body = cljs.core.nthnext.call(null,vec__26714,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__26715 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26715__delegate.call(this,args);};
G__26715.cljs$lang$maxFixedArity = 0;
G__26715.cljs$lang$applyTo = (function (arglist__26716){
var args = cljs.core.seq(arglist__26716);
return G__26715__delegate(args);
});
G__26715.cljs$core$IFn$_invoke$arity$variadic = G__26715__delegate;
return G__26715;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4377__auto__ = (function iter__26721(s__26722){return (new cljs.core.LazySeq(null,(function (){var s__26722__$1 = s__26722;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26722__$1);if(temp__4126__auto__)
{var s__26722__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26722__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26722__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26724 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26723 = (0);while(true){
if((i__26723 < size__4376__auto__))
{var args = cljs.core._nth.call(null,c__4375__auto__,i__26723);cljs.core.chunk_append.call(null,b__26724,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__26725 = (i__26723 + (1));
i__26723 = G__26725;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26724),iter__26721.call(null,cljs.core.chunk_rest.call(null,s__26722__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26724),null);
}
} else
{var args = cljs.core.first.call(null,s__26722__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__26721.call(null,cljs.core.rest.call(null,s__26722__$2)));
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
var include_css__delegate = function (styles){var iter__4377__auto__ = (function iter__26730(s__26731){return (new cljs.core.LazySeq(null,(function (){var s__26731__$1 = s__26731;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26731__$1);if(temp__4126__auto__)
{var s__26731__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26731__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26731__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26733 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26732 = (0);while(true){
if((i__26732 < size__4376__auto__))
{var style = cljs.core._nth.call(null,c__4375__auto__,i__26732);cljs.core.chunk_append.call(null,b__26733,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__26734 = (i__26732 + (1));
i__26732 = G__26734;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26733),iter__26730.call(null,cljs.core.chunk_rest.call(null,s__26731__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26733),null);
}
} else
{var style = cljs.core.first.call(null,s__26731__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__26730.call(null,cljs.core.rest.call(null,s__26731__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__26735){
var styles = cljs.core.seq(arglist__26735);
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
sablono.core.link_to26736 = (function() { 
var link_to26736__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to26736 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26736__delegate.call(this,url,content);};
link_to26736.cljs$lang$maxFixedArity = 1;
link_to26736.cljs$lang$applyTo = (function (arglist__26737){
var url = cljs.core.first(arglist__26737);
var content = cljs.core.rest(arglist__26737);
return link_to26736__delegate(url,content);
});
link_to26736.cljs$core$IFn$_invoke$arity$variadic = link_to26736__delegate;
return link_to26736;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26736);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26738 = (function() { 
var mail_to26738__delegate = function (e_mail,p__26739){var vec__26741 = p__26739;var content = cljs.core.nth.call(null,vec__26741,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3639__auto__ = content;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26738 = function (e_mail,var_args){
var p__26739 = null;if (arguments.length > 1) {
  p__26739 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26738__delegate.call(this,e_mail,p__26739);};
mail_to26738.cljs$lang$maxFixedArity = 1;
mail_to26738.cljs$lang$applyTo = (function (arglist__26742){
var e_mail = cljs.core.first(arglist__26742);
var p__26739 = cljs.core.rest(arglist__26742);
return mail_to26738__delegate(e_mail,p__26739);
});
mail_to26738.cljs$core$IFn$_invoke$arity$variadic = mail_to26738__delegate;
return mail_to26738;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26738);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26743 = (function unordered_list26743(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4377__auto__ = (function iter__26748(s__26749){return (new cljs.core.LazySeq(null,(function (){var s__26749__$1 = s__26749;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26749__$1);if(temp__4126__auto__)
{var s__26749__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26749__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26749__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26751 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26750 = (0);while(true){
if((i__26750 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__26750);cljs.core.chunk_append.call(null,b__26751,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__26752 = (i__26750 + (1));
i__26750 = G__26752;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26751),iter__26748.call(null,cljs.core.chunk_rest.call(null,s__26749__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26751),null);
}
} else
{var x = cljs.core.first.call(null,s__26749__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__26748.call(null,cljs.core.rest.call(null,s__26749__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26743);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26753 = (function ordered_list26753(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4377__auto__ = (function iter__26758(s__26759){return (new cljs.core.LazySeq(null,(function (){var s__26759__$1 = s__26759;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26759__$1);if(temp__4126__auto__)
{var s__26759__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26759__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26759__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26761 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26760 = (0);while(true){
if((i__26760 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__26760);cljs.core.chunk_append.call(null,b__26761,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__26762 = (i__26760 + (1));
i__26760 = G__26762;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26761),iter__26758.call(null,cljs.core.chunk_rest.call(null,s__26759__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26761),null);
}
} else
{var x = cljs.core.first.call(null,s__26759__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__26758.call(null,cljs.core.rest.call(null,s__26759__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26753);
/**
* Create an image element.
*/
sablono.core.image26763 = (function() {
var image26763 = null;
var image26763__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image26763__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image26763 = function(src,alt){
switch(arguments.length){
case 1:
return image26763__1.call(this,src);
case 2:
return image26763__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26763.cljs$core$IFn$_invoke$arity$1 = image26763__1;
image26763.cljs$core$IFn$_invoke$arity$2 = image26763__2;
return image26763;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26763);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__26764_SHARP_,p2__26765_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26764_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__26765_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__26766_SHARP_,p2__26767_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26766_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__26767_SHARP_));
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
sablono.core.color_field26768 = (function() {
var color_field26768 = null;
var color_field26768__1 = (function (name__5127__auto__){return color_field26768.call(null,name__5127__auto__,null);
});
var color_field26768__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5127__auto__,value__5128__auto__);
});
color_field26768 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return color_field26768__1.call(this,name__5127__auto__);
case 2:
return color_field26768__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field26768.cljs$core$IFn$_invoke$arity$1 = color_field26768__1;
color_field26768.cljs$core$IFn$_invoke$arity$2 = color_field26768__2;
return color_field26768;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26768);
/**
* Creates a date input field.
*/
sablono.core.date_field26769 = (function() {
var date_field26769 = null;
var date_field26769__1 = (function (name__5127__auto__){return date_field26769.call(null,name__5127__auto__,null);
});
var date_field26769__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5127__auto__,value__5128__auto__);
});
date_field26769 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return date_field26769__1.call(this,name__5127__auto__);
case 2:
return date_field26769__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field26769.cljs$core$IFn$_invoke$arity$1 = date_field26769__1;
date_field26769.cljs$core$IFn$_invoke$arity$2 = date_field26769__2;
return date_field26769;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26769);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field26770 = (function() {
var datetime_field26770 = null;
var datetime_field26770__1 = (function (name__5127__auto__){return datetime_field26770.call(null,name__5127__auto__,null);
});
var datetime_field26770__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5127__auto__,value__5128__auto__);
});
datetime_field26770 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_field26770__1.call(this,name__5127__auto__);
case 2:
return datetime_field26770__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field26770.cljs$core$IFn$_invoke$arity$1 = datetime_field26770__1;
datetime_field26770.cljs$core$IFn$_invoke$arity$2 = datetime_field26770__2;
return datetime_field26770;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26770);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field26771 = (function() {
var datetime_local_field26771 = null;
var datetime_local_field26771__1 = (function (name__5127__auto__){return datetime_local_field26771.call(null,name__5127__auto__,null);
});
var datetime_local_field26771__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5127__auto__,value__5128__auto__);
});
datetime_local_field26771 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return datetime_local_field26771__1.call(this,name__5127__auto__);
case 2:
return datetime_local_field26771__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field26771.cljs$core$IFn$_invoke$arity$1 = datetime_local_field26771__1;
datetime_local_field26771.cljs$core$IFn$_invoke$arity$2 = datetime_local_field26771__2;
return datetime_local_field26771;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26771);
/**
* Creates a email input field.
*/
sablono.core.email_field26772 = (function() {
var email_field26772 = null;
var email_field26772__1 = (function (name__5127__auto__){return email_field26772.call(null,name__5127__auto__,null);
});
var email_field26772__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5127__auto__,value__5128__auto__);
});
email_field26772 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return email_field26772__1.call(this,name__5127__auto__);
case 2:
return email_field26772__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26772.cljs$core$IFn$_invoke$arity$1 = email_field26772__1;
email_field26772.cljs$core$IFn$_invoke$arity$2 = email_field26772__2;
return email_field26772;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26772);
/**
* Creates a file input field.
*/
sablono.core.file_field26773 = (function() {
var file_field26773 = null;
var file_field26773__1 = (function (name__5127__auto__){return file_field26773.call(null,name__5127__auto__,null);
});
var file_field26773__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5127__auto__,value__5128__auto__);
});
file_field26773 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return file_field26773__1.call(this,name__5127__auto__);
case 2:
return file_field26773__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field26773.cljs$core$IFn$_invoke$arity$1 = file_field26773__1;
file_field26773.cljs$core$IFn$_invoke$arity$2 = file_field26773__2;
return file_field26773;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26773);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26774 = (function() {
var hidden_field26774 = null;
var hidden_field26774__1 = (function (name__5127__auto__){return hidden_field26774.call(null,name__5127__auto__,null);
});
var hidden_field26774__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5127__auto__,value__5128__auto__);
});
hidden_field26774 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return hidden_field26774__1.call(this,name__5127__auto__);
case 2:
return hidden_field26774__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26774.cljs$core$IFn$_invoke$arity$1 = hidden_field26774__1;
hidden_field26774.cljs$core$IFn$_invoke$arity$2 = hidden_field26774__2;
return hidden_field26774;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26774);
/**
* Creates a month input field.
*/
sablono.core.month_field26775 = (function() {
var month_field26775 = null;
var month_field26775__1 = (function (name__5127__auto__){return month_field26775.call(null,name__5127__auto__,null);
});
var month_field26775__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5127__auto__,value__5128__auto__);
});
month_field26775 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return month_field26775__1.call(this,name__5127__auto__);
case 2:
return month_field26775__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field26775.cljs$core$IFn$_invoke$arity$1 = month_field26775__1;
month_field26775.cljs$core$IFn$_invoke$arity$2 = month_field26775__2;
return month_field26775;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26775);
/**
* Creates a number input field.
*/
sablono.core.number_field26776 = (function() {
var number_field26776 = null;
var number_field26776__1 = (function (name__5127__auto__){return number_field26776.call(null,name__5127__auto__,null);
});
var number_field26776__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5127__auto__,value__5128__auto__);
});
number_field26776 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return number_field26776__1.call(this,name__5127__auto__);
case 2:
return number_field26776__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field26776.cljs$core$IFn$_invoke$arity$1 = number_field26776__1;
number_field26776.cljs$core$IFn$_invoke$arity$2 = number_field26776__2;
return number_field26776;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26776);
/**
* Creates a password input field.
*/
sablono.core.password_field26777 = (function() {
var password_field26777 = null;
var password_field26777__1 = (function (name__5127__auto__){return password_field26777.call(null,name__5127__auto__,null);
});
var password_field26777__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5127__auto__,value__5128__auto__);
});
password_field26777 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return password_field26777__1.call(this,name__5127__auto__);
case 2:
return password_field26777__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26777.cljs$core$IFn$_invoke$arity$1 = password_field26777__1;
password_field26777.cljs$core$IFn$_invoke$arity$2 = password_field26777__2;
return password_field26777;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26777);
/**
* Creates a range input field.
*/
sablono.core.range_field26778 = (function() {
var range_field26778 = null;
var range_field26778__1 = (function (name__5127__auto__){return range_field26778.call(null,name__5127__auto__,null);
});
var range_field26778__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5127__auto__,value__5128__auto__);
});
range_field26778 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return range_field26778__1.call(this,name__5127__auto__);
case 2:
return range_field26778__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field26778.cljs$core$IFn$_invoke$arity$1 = range_field26778__1;
range_field26778.cljs$core$IFn$_invoke$arity$2 = range_field26778__2;
return range_field26778;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26778);
/**
* Creates a search input field.
*/
sablono.core.search_field26779 = (function() {
var search_field26779 = null;
var search_field26779__1 = (function (name__5127__auto__){return search_field26779.call(null,name__5127__auto__,null);
});
var search_field26779__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5127__auto__,value__5128__auto__);
});
search_field26779 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return search_field26779__1.call(this,name__5127__auto__);
case 2:
return search_field26779__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field26779.cljs$core$IFn$_invoke$arity$1 = search_field26779__1;
search_field26779.cljs$core$IFn$_invoke$arity$2 = search_field26779__2;
return search_field26779;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26779);
/**
* Creates a tel input field.
*/
sablono.core.tel_field26780 = (function() {
var tel_field26780 = null;
var tel_field26780__1 = (function (name__5127__auto__){return tel_field26780.call(null,name__5127__auto__,null);
});
var tel_field26780__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5127__auto__,value__5128__auto__);
});
tel_field26780 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return tel_field26780__1.call(this,name__5127__auto__);
case 2:
return tel_field26780__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field26780.cljs$core$IFn$_invoke$arity$1 = tel_field26780__1;
tel_field26780.cljs$core$IFn$_invoke$arity$2 = tel_field26780__2;
return tel_field26780;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26780);
/**
* Creates a text input field.
*/
sablono.core.text_field26781 = (function() {
var text_field26781 = null;
var text_field26781__1 = (function (name__5127__auto__){return text_field26781.call(null,name__5127__auto__,null);
});
var text_field26781__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5127__auto__,value__5128__auto__);
});
text_field26781 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return text_field26781__1.call(this,name__5127__auto__);
case 2:
return text_field26781__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26781.cljs$core$IFn$_invoke$arity$1 = text_field26781__1;
text_field26781.cljs$core$IFn$_invoke$arity$2 = text_field26781__2;
return text_field26781;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26781);
/**
* Creates a time input field.
*/
sablono.core.time_field26782 = (function() {
var time_field26782 = null;
var time_field26782__1 = (function (name__5127__auto__){return time_field26782.call(null,name__5127__auto__,null);
});
var time_field26782__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5127__auto__,value__5128__auto__);
});
time_field26782 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return time_field26782__1.call(this,name__5127__auto__);
case 2:
return time_field26782__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field26782.cljs$core$IFn$_invoke$arity$1 = time_field26782__1;
time_field26782.cljs$core$IFn$_invoke$arity$2 = time_field26782__2;
return time_field26782;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26782);
/**
* Creates a url input field.
*/
sablono.core.url_field26783 = (function() {
var url_field26783 = null;
var url_field26783__1 = (function (name__5127__auto__){return url_field26783.call(null,name__5127__auto__,null);
});
var url_field26783__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5127__auto__,value__5128__auto__);
});
url_field26783 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return url_field26783__1.call(this,name__5127__auto__);
case 2:
return url_field26783__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field26783.cljs$core$IFn$_invoke$arity$1 = url_field26783__1;
url_field26783.cljs$core$IFn$_invoke$arity$2 = url_field26783__2;
return url_field26783;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26783);
/**
* Creates a week input field.
*/
sablono.core.week_field26784 = (function() {
var week_field26784 = null;
var week_field26784__1 = (function (name__5127__auto__){return week_field26784.call(null,name__5127__auto__,null);
});
var week_field26784__2 = (function (name__5127__auto__,value__5128__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5127__auto__,value__5128__auto__);
});
week_field26784 = function(name__5127__auto__,value__5128__auto__){
switch(arguments.length){
case 1:
return week_field26784__1.call(this,name__5127__auto__);
case 2:
return week_field26784__2.call(this,name__5127__auto__,value__5128__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field26784.cljs$core$IFn$_invoke$arity$1 = week_field26784__1;
week_field26784.cljs$core$IFn$_invoke$arity$2 = week_field26784__2;
return week_field26784;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26784);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box26785 = (function() {
var check_box26785 = null;
var check_box26785__1 = (function (name){return check_box26785.call(null,name,null);
});
var check_box26785__2 = (function (name,checked_QMARK_){return check_box26785.call(null,name,checked_QMARK_,"true");
});
var check_box26785__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box26785 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26785__1.call(this,name);
case 2:
return check_box26785__2.call(this,name,checked_QMARK_);
case 3:
return check_box26785__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26785.cljs$core$IFn$_invoke$arity$1 = check_box26785__1;
check_box26785.cljs$core$IFn$_invoke$arity$2 = check_box26785__2;
check_box26785.cljs$core$IFn$_invoke$arity$3 = check_box26785__3;
return check_box26785;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26785);
/**
* Creates a radio button.
*/
sablono.core.radio_button26786 = (function() {
var radio_button26786 = null;
var radio_button26786__1 = (function (group){return radio_button26786.call(null,group,null);
});
var radio_button26786__2 = (function (group,checked_QMARK_){return radio_button26786.call(null,group,checked_QMARK_,"true");
});
var radio_button26786__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button26786 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26786__1.call(this,group);
case 2:
return radio_button26786__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26786__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26786.cljs$core$IFn$_invoke$arity$1 = radio_button26786__1;
radio_button26786.cljs$core$IFn$_invoke$arity$2 = radio_button26786__2;
radio_button26786.cljs$core$IFn$_invoke$arity$3 = radio_button26786__3;
return radio_button26786;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26786);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26787 = (function() {
var select_options26787 = null;
var select_options26787__1 = (function (coll){return select_options26787.call(null,coll,null);
});
var select_options26787__2 = (function (coll,selected){var iter__4377__auto__ = (function iter__26796(s__26797){return (new cljs.core.LazySeq(null,(function (){var s__26797__$1 = s__26797;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26797__$1);if(temp__4126__auto__)
{var s__26797__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26797__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__26797__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__26799 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__26798 = (0);while(true){
if((i__26798 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__26798);cljs.core.chunk_append.call(null,b__26799,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26802 = x;var text = cljs.core.nth.call(null,vec__26802,(0),null);var val = cljs.core.nth.call(null,vec__26802,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__26802,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options26787.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__26804 = (i__26798 + (1));
i__26798 = G__26804;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26799),iter__26796.call(null,cljs.core.chunk_rest.call(null,s__26797__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26799),null);
}
} else
{var x = cljs.core.first.call(null,s__26797__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26803 = x;var text = cljs.core.nth.call(null,vec__26803,(0),null);var val = cljs.core.nth.call(null,vec__26803,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__26803,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options26787.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__26796.call(null,cljs.core.rest.call(null,s__26797__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
});
select_options26787 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26787__1.call(this,coll);
case 2:
return select_options26787__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26787.cljs$core$IFn$_invoke$arity$1 = select_options26787__1;
select_options26787.cljs$core$IFn$_invoke$arity$2 = select_options26787__2;
return select_options26787;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26787);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26805 = (function() {
var drop_down26805 = null;
var drop_down26805__2 = (function (name,options){return drop_down26805.call(null,name,options,null);
});
var drop_down26805__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down26805 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26805__2.call(this,name,options);
case 3:
return drop_down26805__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26805.cljs$core$IFn$_invoke$arity$2 = drop_down26805__2;
drop_down26805.cljs$core$IFn$_invoke$arity$3 = drop_down26805__3;
return drop_down26805;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26805);
/**
* Creates a text area element.
*/
sablono.core.text_area26806 = (function() {
var text_area26806 = null;
var text_area26806__1 = (function (name){return text_area26806.call(null,name,null);
});
var text_area26806__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area26806 = function(name,value){
switch(arguments.length){
case 1:
return text_area26806__1.call(this,name);
case 2:
return text_area26806__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26806.cljs$core$IFn$_invoke$arity$1 = text_area26806__1;
text_area26806.cljs$core$IFn$_invoke$arity$2 = text_area26806__2;
return text_area26806;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26806);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26807 = (function label26807(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26807);
/**
* Creates a submit button.
*/
sablono.core.submit_button26808 = (function submit_button26808(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26808);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26809 = (function reset_button26809(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26809);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26810 = (function() { 
var form_to26810__delegate = function (p__26811,body){var vec__26813 = p__26811;var method = cljs.core.nth.call(null,vec__26813,(0),null);var action = cljs.core.nth.call(null,vec__26813,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to26810 = function (p__26811,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26810__delegate.call(this,p__26811,body);};
form_to26810.cljs$lang$maxFixedArity = 1;
form_to26810.cljs$lang$applyTo = (function (arglist__26814){
var p__26811 = cljs.core.first(arglist__26814);
var body = cljs.core.rest(arglist__26814);
return form_to26810__delegate(p__26811,body);
});
form_to26810.cljs$core$IFn$_invoke$arity$variadic = form_to26810__delegate;
return form_to26810;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26810);
