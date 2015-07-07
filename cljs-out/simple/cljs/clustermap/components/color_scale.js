// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.color_scale');
goog.require('cljs.core');
goog.require('clustermap.formats.color');
goog.require('clustermap.formats.color');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.color_scale.color_scale_component = (function color_scale_component(p__31909,owner){var map__31925 = p__31909;var map__31925__$1 = ((cljs.core.seq_QMARK_.call(null,map__31925))?cljs.core.apply.call(null,cljs.core.hash_map,map__31925):map__31925);var controls = map__31925__$1;var boundaryline_fill_opacity = cljs.core.get.call(null,map__31925__$1,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575));var threshold_colors = cljs.core.get.call(null,map__31925__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var font_size = (function (){var pred__31926 = cljs.core._LT__EQ_;var expr__31927 = cljs.core.count.call(null,threshold_colors);if(cljs.core.truth_(pred__31926.call(null,(12),expr__31927)))
{return "40%";
} else
{if(cljs.core.truth_(pred__31926.call(null,(11),expr__31927)))
{return "50%";
} else
{if(cljs.core.truth_(pred__31926.call(null,(10),expr__31927)))
{return "60%";
} else
{if(cljs.core.truth_(pred__31926.call(null,(9),expr__31927)))
{return "70%";
} else
{if(cljs.core.truth_(pred__31926.call(null,(8),expr__31927)))
{return "80%";
} else
{if(cljs.core.truth_(pred__31926.call(null,(7),expr__31927)))
{return "90%";
} else
{return "100%";
}
}
}
}
}
}
})();if(typeof clustermap.components.color_scale.t31929 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.color_scale.t31929 = (function (font_size,threshold_colors,boundaryline_fill_opacity,controls,map__31925,owner,p__31909,color_scale_component,meta31930){
this.font_size = font_size;
this.threshold_colors = threshold_colors;
this.boundaryline_fill_opacity = boundaryline_fill_opacity;
this.controls = controls;
this.map__31925 = map__31925;
this.owner = owner;
this.p__31909 = p__31909;
this.color_scale_component = color_scale_component;
this.meta31930 = meta31930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.color_scale.t31929.cljs$lang$type = true;
clustermap.components.color_scale.t31929.cljs$lang$ctorStr = "clustermap.components.color-scale/t31929";
clustermap.components.color_scale.t31929.cljs$lang$ctorPrWriter = ((function (font_size,map__31925,map__31925__$1,controls,boundaryline_fill_opacity,threshold_colors){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.color-scale/t31929");
});})(font_size,map__31925,map__31925__$1,controls,boundaryline_fill_opacity,threshold_colors))
;
clustermap.components.color_scale.t31929.prototype.om$core$IRender$ = true;
clustermap.components.color_scale.t31929.prototype.om$core$IRender$render$arity$1 = ((function (font_size,map__31925,map__31925__$1,controls,boundaryline_fill_opacity,threshold_colors){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.table({"className": "table-key"},React.DOM.tbody(null,React.DOM.tr(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,font_size,map__31925,map__31925__$1,controls,boundaryline_fill_opacity,threshold_colors){
return (function iter__31932(s__31933){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,font_size,map__31925,map__31925__$1,controls,boundaryline_fill_opacity,threshold_colors){
return (function (){var s__31933__$1 = s__31933;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31933__$1);if(temp__4126__auto__)
{var s__31933__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31933__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31933__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31935 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31934 = (0);while(true){
if((i__31934 < size__4376__auto__))
{var vec__31938 = cljs.core._nth.call(null,c__4375__auto__,i__31934);var threshold = cljs.core.nth.call(null,vec__31938,(0),null);var color = cljs.core.nth.call(null,vec__31938,(1),null);cljs.core.chunk_append.call(null,b__31935,React.DOM.td({"style": {"padding": "0"}},React.DOM.div({"style": {"position": "relative"}},React.DOM.div({"style": {"position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%", "backgroundColor": color, "opacity": self__.boundaryline_fill_opacity}}),React.DOM.div({"style": {"position": "static", "color": "black", "fontSize": self__.font_size, "margin": "4px"}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(threshold)?clustermap.formats.number.compact.call(null,threshold):null))))));
{
var G__31940 = (i__31934 + (1));
i__31934 = G__31940;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31935),iter__31932.call(null,cljs.core.chunk_rest.call(null,s__31933__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31935),null);
}
} else
{var vec__31939 = cljs.core.first.call(null,s__31933__$2);var threshold = cljs.core.nth.call(null,vec__31939,(0),null);var color = cljs.core.nth.call(null,vec__31939,(1),null);return cljs.core.cons.call(null,React.DOM.td({"style": {"padding": "0"}},React.DOM.div({"style": {"position": "relative"}},React.DOM.div({"style": {"position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%", "backgroundColor": color, "opacity": self__.boundaryline_fill_opacity}}),React.DOM.div({"style": {"position": "static", "color": "black", "fontSize": self__.font_size, "margin": "4px"}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(threshold)?clustermap.formats.number.compact.call(null,threshold):null))))),iter__31932.call(null,cljs.core.rest.call(null,s__31933__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,font_size,map__31925,map__31925__$1,controls,boundaryline_fill_opacity,threshold_colors))
,null,null));
});})(this__7096__auto____$1,font_size,map__31925,map__31925__$1,controls,boundaryline_fill_opacity,threshold_colors))
;return iter__4377__auto__.call(null,self__.threshold_colors);
})()))));
});})(font_size,map__31925,map__31925__$1,controls,boundaryline_fill_opacity,threshold_colors))
;
clustermap.components.color_scale.t31929.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (font_size,map__31925,map__31925__$1,controls,boundaryline_fill_opacity,threshold_colors){
return (function (_31931){var self__ = this;
var _31931__$1 = this;return self__.meta31930;
});})(font_size,map__31925,map__31925__$1,controls,boundaryline_fill_opacity,threshold_colors))
;
clustermap.components.color_scale.t31929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (font_size,map__31925,map__31925__$1,controls,boundaryline_fill_opacity,threshold_colors){
return (function (_31931,meta31930__$1){var self__ = this;
var _31931__$1 = this;return (new clustermap.components.color_scale.t31929(self__.font_size,self__.threshold_colors,self__.boundaryline_fill_opacity,self__.controls,self__.map__31925,self__.owner,self__.p__31909,self__.color_scale_component,meta31930__$1));
});})(font_size,map__31925,map__31925__$1,controls,boundaryline_fill_opacity,threshold_colors))
;
clustermap.components.color_scale.__GT_t31929 = ((function (font_size,map__31925,map__31925__$1,controls,boundaryline_fill_opacity,threshold_colors){
return (function __GT_t31929(font_size__$1,threshold_colors__$1,boundaryline_fill_opacity__$1,controls__$1,map__31925__$2,owner__$1,p__31909__$1,color_scale_component__$1,meta31930){return (new clustermap.components.color_scale.t31929(font_size__$1,threshold_colors__$1,boundaryline_fill_opacity__$1,controls__$1,map__31925__$2,owner__$1,p__31909__$1,color_scale_component__$1,meta31930));
});})(font_size,map__31925,map__31925__$1,controls,boundaryline_fill_opacity,threshold_colors))
;
}
return (new clustermap.components.color_scale.t31929(font_size,threshold_colors,boundaryline_fill_opacity,controls,map__31925__$1,owner,p__31909,color_scale_component,null));
});
