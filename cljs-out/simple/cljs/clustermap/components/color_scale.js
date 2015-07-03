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
clustermap.components.color_scale.color_scale_component = (function color_scale_component(p__31878,owner){var map__31894 = p__31878;var map__31894__$1 = ((cljs.core.seq_QMARK_.call(null,map__31894))?cljs.core.apply.call(null,cljs.core.hash_map,map__31894):map__31894);var controls = map__31894__$1;var boundaryline_fill_opacity = cljs.core.get.call(null,map__31894__$1,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575));var threshold_colors = cljs.core.get.call(null,map__31894__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var font_size = (function (){var pred__31895 = cljs.core._LT__EQ_;var expr__31896 = cljs.core.count.call(null,threshold_colors);if(cljs.core.truth_(pred__31895.call(null,(12),expr__31896)))
{return "40%";
} else
{if(cljs.core.truth_(pred__31895.call(null,(11),expr__31896)))
{return "50%";
} else
{if(cljs.core.truth_(pred__31895.call(null,(10),expr__31896)))
{return "60%";
} else
{if(cljs.core.truth_(pred__31895.call(null,(9),expr__31896)))
{return "70%";
} else
{if(cljs.core.truth_(pred__31895.call(null,(8),expr__31896)))
{return "80%";
} else
{if(cljs.core.truth_(pred__31895.call(null,(7),expr__31896)))
{return "90%";
} else
{return "100%";
}
}
}
}
}
}
})();if(typeof clustermap.components.color_scale.t31898 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.color_scale.t31898 = (function (font_size,threshold_colors,boundaryline_fill_opacity,controls,map__31894,owner,p__31878,color_scale_component,meta31899){
this.font_size = font_size;
this.threshold_colors = threshold_colors;
this.boundaryline_fill_opacity = boundaryline_fill_opacity;
this.controls = controls;
this.map__31894 = map__31894;
this.owner = owner;
this.p__31878 = p__31878;
this.color_scale_component = color_scale_component;
this.meta31899 = meta31899;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.color_scale.t31898.cljs$lang$type = true;
clustermap.components.color_scale.t31898.cljs$lang$ctorStr = "clustermap.components.color-scale/t31898";
clustermap.components.color_scale.t31898.cljs$lang$ctorPrWriter = ((function (font_size,map__31894,map__31894__$1,controls,boundaryline_fill_opacity,threshold_colors){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.color-scale/t31898");
});})(font_size,map__31894,map__31894__$1,controls,boundaryline_fill_opacity,threshold_colors))
;
clustermap.components.color_scale.t31898.prototype.om$core$IRender$ = true;
clustermap.components.color_scale.t31898.prototype.om$core$IRender$render$arity$1 = ((function (font_size,map__31894,map__31894__$1,controls,boundaryline_fill_opacity,threshold_colors){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.table({"className": "table-key"},React.DOM.tbody(null,React.DOM.tr(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,font_size,map__31894,map__31894__$1,controls,boundaryline_fill_opacity,threshold_colors){
return (function iter__31901(s__31902){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,font_size,map__31894,map__31894__$1,controls,boundaryline_fill_opacity,threshold_colors){
return (function (){var s__31902__$1 = s__31902;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31902__$1);if(temp__4126__auto__)
{var s__31902__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31902__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31902__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31904 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31903 = (0);while(true){
if((i__31903 < size__4376__auto__))
{var vec__31907 = cljs.core._nth.call(null,c__4375__auto__,i__31903);var threshold = cljs.core.nth.call(null,vec__31907,(0),null);var color = cljs.core.nth.call(null,vec__31907,(1),null);cljs.core.chunk_append.call(null,b__31904,React.DOM.td({"style": {"padding": "0"}},React.DOM.div({"style": {"position": "relative"}},React.DOM.div({"style": {"position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%", "backgroundColor": color, "opacity": self__.boundaryline_fill_opacity}}),React.DOM.div({"style": {"position": "static", "color": "black", "fontSize": self__.font_size, "margin": "4px"}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(threshold)?clustermap.formats.number.compact.call(null,threshold):null))))));
{
var G__31909 = (i__31903 + (1));
i__31903 = G__31909;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31904),iter__31901.call(null,cljs.core.chunk_rest.call(null,s__31902__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31904),null);
}
} else
{var vec__31908 = cljs.core.first.call(null,s__31902__$2);var threshold = cljs.core.nth.call(null,vec__31908,(0),null);var color = cljs.core.nth.call(null,vec__31908,(1),null);return cljs.core.cons.call(null,React.DOM.td({"style": {"padding": "0"}},React.DOM.div({"style": {"position": "relative"}},React.DOM.div({"style": {"position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%", "backgroundColor": color, "opacity": self__.boundaryline_fill_opacity}}),React.DOM.div({"style": {"position": "static", "color": "black", "fontSize": self__.font_size, "margin": "4px"}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(threshold)?clustermap.formats.number.compact.call(null,threshold):null))))),iter__31901.call(null,cljs.core.rest.call(null,s__31902__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,font_size,map__31894,map__31894__$1,controls,boundaryline_fill_opacity,threshold_colors))
,null,null));
});})(this__7096__auto____$1,font_size,map__31894,map__31894__$1,controls,boundaryline_fill_opacity,threshold_colors))
;return iter__4377__auto__.call(null,self__.threshold_colors);
})()))));
});})(font_size,map__31894,map__31894__$1,controls,boundaryline_fill_opacity,threshold_colors))
;
clustermap.components.color_scale.t31898.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (font_size,map__31894,map__31894__$1,controls,boundaryline_fill_opacity,threshold_colors){
return (function (_31900){var self__ = this;
var _31900__$1 = this;return self__.meta31899;
});})(font_size,map__31894,map__31894__$1,controls,boundaryline_fill_opacity,threshold_colors))
;
clustermap.components.color_scale.t31898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (font_size,map__31894,map__31894__$1,controls,boundaryline_fill_opacity,threshold_colors){
return (function (_31900,meta31899__$1){var self__ = this;
var _31900__$1 = this;return (new clustermap.components.color_scale.t31898(self__.font_size,self__.threshold_colors,self__.boundaryline_fill_opacity,self__.controls,self__.map__31894,self__.owner,self__.p__31878,self__.color_scale_component,meta31899__$1));
});})(font_size,map__31894,map__31894__$1,controls,boundaryline_fill_opacity,threshold_colors))
;
clustermap.components.color_scale.__GT_t31898 = ((function (font_size,map__31894,map__31894__$1,controls,boundaryline_fill_opacity,threshold_colors){
return (function __GT_t31898(font_size__$1,threshold_colors__$1,boundaryline_fill_opacity__$1,controls__$1,map__31894__$2,owner__$1,p__31878__$1,color_scale_component__$1,meta31899){return (new clustermap.components.color_scale.t31898(font_size__$1,threshold_colors__$1,boundaryline_fill_opacity__$1,controls__$1,map__31894__$2,owner__$1,p__31878__$1,color_scale_component__$1,meta31899));
});})(font_size,map__31894,map__31894__$1,controls,boundaryline_fill_opacity,threshold_colors))
;
}
return (new clustermap.components.color_scale.t31898(font_size,threshold_colors,boundaryline_fill_opacity,controls,map__31894__$1,owner,p__31878,color_scale_component,null));
});
