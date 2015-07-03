// Compiled by ClojureScript 0.0-2356
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('domina');
domina.css.root_element = (function root_element(){return (goog.dom.getElementsByTagNameAndClass("html")[(0)]);
});
/**
* Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.css.sel = (function() {
var sel = null;
var sel__1 = (function (expr){return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__2 = (function (base,expr){if(typeof domina.css.t29506 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.css.t29506 = (function (expr,base,sel,meta29507){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta29507 = meta29507;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t29506.cljs$lang$type = true;
domina.css.t29506.cljs$lang$ctorStr = "domina.css/t29506";
domina.css.t29506.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.css/t29506");
});
domina.css.t29506.prototype.domina$DomContent$ = true;
domina.css.t29506.prototype.domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__29501_SHARP_){return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__29501_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base));
});
domina.css.t29506.prototype.domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__29502_SHARP_){return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__29502_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base))));
});
domina.css.t29506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29508){var self__ = this;
var _29508__$1 = this;return self__.meta29507;
});
domina.css.t29506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29508,meta29507__$1){var self__ = this;
var _29508__$1 = this;return (new domina.css.t29506(self__.expr,self__.base,self__.sel,meta29507__$1));
});
domina.css.__GT_t29506 = (function __GT_t29506(expr__$1,base__$1,sel__$1,meta29507){return (new domina.css.t29506(expr__$1,base__$1,sel__$1,meta29507));
});
}
return (new domina.css.t29506(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case 1:
return sel__1.call(this,base);
case 2:
return sel__2.call(this,base,expr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sel.cljs$core$IFn$_invoke$arity$1 = sel__1;
sel.cljs$core$IFn$_invoke$arity$2 = sel__2;
return sel;
})()
;
