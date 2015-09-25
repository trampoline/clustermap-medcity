// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('clojure.set');
goog.require('hiccups.runtime');
goog.require('sablono.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.api');
goog.require('domina');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clojure.set');
goog.require('domina.events');
goog.require('domina.events');
goog.require('clustermap.boundarylines');
goog.require('jayq.core');
goog.require('clustermap.data.colorchooser');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('clustermap.api');
clustermap.components.map.event_handler_keys = cljs.core.atom.call(null,(0));
clustermap.components.map.event_handlers = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
clustermap.components.map.next_event_handler_key = (function next_event_handler_key(){return cljs.core.swap_BANG_.call(null,clustermap.components.map.event_handler_keys,cljs.core.inc);
});
/**
* register's an event handler function, returns a key
*/
clustermap.components.map.register_event_handler = (function register_event_handler(f){if(cljs.core.fn_QMARK_.call(null,f))
{var k = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.next_event_handler_key.call(null)));cljs.core.swap_BANG_.call(null,clustermap.components.map.event_handlers,cljs.core.assoc,k,f);
return k;
} else
{return null;
}
});
/**
* remove's an event handler with key k
*/
clustermap.components.map.remove_event_handler = (function remove_event_handler(k){if(cljs.core.truth_(k))
{cljs.core.swap_BANG_.call(null,clustermap.components.map.event_handlers,cljs.core.dissoc,k);
} else
{}
return null;
});
/**
* find's an event handler with key k
*/
clustermap.components.map.find_event_handler = (function find_event_handler(k){if(cljs.core.truth_(k))
{return cljs.core.get.call(null,cljs.core.deref.call(null,clustermap.components.map.event_handlers),k);
} else
{return null;
}
});
/**
* convert a Leaflet LatLngBounds object into nested-array form
*/
clustermap.components.map.bounds_array = (function bounds_array(bounds){if((bounds instanceof L.LatLngBounds))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounds.getSouth(),bounds.getWest()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounds.getNorth(),bounds.getEast()], null)], null);
} else
{return bounds;
}
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.last,longlats));var w = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,longlats));var n = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.last,longlats));var e = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3627__auto__ = s;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = w;if(cljs.core.truth_(and__3627__auto____$1))
{var and__3627__auto____$2 = n;if(cljs.core.truth_(and__3627__auto____$2))
{return e;
} else
{return and__3627__auto____$2;
}
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
clustermap.components.map.locate_map = (function locate_map(m,initial_bounds){return m.fitBounds(cljs.core.clj__GT_js.call(null,initial_bounds),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)));
});
clustermap.components.map.default_api_key = (function (){var or__3639__auto__ = (function (){var G__32259 = config;var G__32259__$1 = (((G__32259 == null))?null:G__32259.components);var G__32259__$2 = (((G__32259__$1 == null))?null:G__32259__$1.map);var G__32259__$3 = (((G__32259__$2 == null))?null:G__32259__$2.api_key);return G__32259__$3;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,p__32260){var map__32262 = p__32260;var map__32262__$1 = ((cljs.core.seq_QMARK_.call(null,map__32262))?cljs.core.apply.call(null,cljs.core.hash_map,map__32262):map__32262);var api_key = cljs.core.get.call(null,map__32262__$1,new cljs.core.Keyword(null,"api-key","api-key",1037904031),clustermap.components.map.default_api_key);var map_options = cljs.core.get.call(null,map__32262__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var bounds = cljs.core.get.call(null,map__32262__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds = cljs.core.get.call(null,map__32262__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom_control = ((new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217).cljs$core$IFn$_invoke$arity$1(map_options) === false)?false:true);var m = L.map.call(null,id_or_el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,map_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),false,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(19)], null))));var tiles = L.mapbox.tileLayer.call(null,api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomleft"});var lmcg = L.markerClusterGroup.call(null,{"maxClusterRadius": (40)});m.addLayer(tiles);
m.addLayer(lmcg);
if(zoom_control)
{m.addControl(zoom);
} else
{}
clustermap.components.map.locate_map.call(null,m,(function (){var or__3639__auto__ = bounds;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return initial_bounds;
}
})());
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747),m,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671),lmcg,new cljs.core.Keyword(null,"markers","markers",-246919693),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"geohash-markers","geohash-markers",-1063983705),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"paths","paths",-1807389588),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY)], null);
});
/**
* @param {...*} var_args
*/
clustermap.components.map.pan_to_show = (function() { 
var pan_to_show__delegate = function (m,all_bounds){if(cljs.core.truth_(cljs.core.not_empty.call(null,all_bounds)))
{var fb = cljs.core.first.call(null,all_bounds);var fb_copy = (new L.LatLngBounds(fb.getSouthWest(),fb.getNorthEast()));var super_bounds = cljs.core.reduce.call(null,((function (fb,fb_copy){
return (function (sb,bounds){return sb.extend(bounds);
});})(fb,fb_copy))
,fb_copy,cljs.core.rest.call(null,all_bounds));return m.fitBounds(super_bounds);
} else
{return null;
}
};
var pan_to_show = function (m,var_args){
var all_bounds = null;if (arguments.length > 1) {
  all_bounds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return pan_to_show__delegate.call(this,m,all_bounds);};
pan_to_show.cljs$lang$maxFixedArity = 1;
pan_to_show.cljs$lang$applyTo = (function (arglist__32263){
var m = cljs.core.first(arglist__32263);
var all_bounds = cljs.core.rest(arglist__32263);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.render_marker_icon = (function render_marker_icon(p__32264,location_sites){var map__32266 = p__32264;var map__32266__$1 = ((cljs.core.seq_QMARK_.call(null,map__32266))?cljs.core.apply.call(null,cljs.core.hash_map,map__32266):map__32266);var location_spec = map__32266__$1;var marker_render_fn = cljs.core.get.call(null,map__32266__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));if((cljs.core.count.call(null,location_sites) > (1)))
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
} else
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-single",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
}
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(item_render_fn,location_sites,location_site_click_handler_keys){return ("<ul class=\"location-marker-popup-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4377__auto__ = (function iter__32271(s__32272){return (new cljs.core.LazySeq(null,(function (){var s__32272__$1 = s__32272;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32272__$1);if(temp__4126__auto__)
{var s__32272__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32272__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32272__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32274 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32273 = (0);while(true){
if((i__32273 < size__4376__auto__))
{var site = cljs.core._nth.call(null,c__4375__auto__,i__32273);cljs.core.chunk_append.call(null,b__32274,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))));
{
var G__32275 = (i__32273 + (1));
i__32273 = G__32275;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32274),iter__32271.call(null,cljs.core.chunk_rest.call(null,s__32272__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32274),null);
}
} else
{var site = cljs.core.first.call(null,s__32272__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))),iter__32271.call(null,cljs.core.rest.call(null,s__32272__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,location_sites);
})()))+"</ul>");
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,location_sites,p__32276){var map__32281 = p__32276;var map__32281__$1 = ((cljs.core.seq_QMARK_.call(null,map__32281))?cljs.core.apply.call(null,cljs.core.hash_map,map__32281):map__32281);var map__32282 = cljs.core.get.call(null,map__32281__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__32282__$1 = ((cljs.core.seq_QMARK_.call(null,map__32282))?cljs.core.apply.call(null,cljs.core.hash_map,map__32282):map__32282);var location_spec = map__32282__$1;var item_click_fn = cljs.core.get.call(null,map__32282__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__32282__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__32282__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var temp__4124__auto__ = (function (){var G__32283 = location_sites;var G__32283__$1 = (((G__32283 == null))?null:cljs.core.first.call(null,G__32283));var G__32283__$2 = (((G__32283__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__32283__$1));var G__32283__$3 = (((G__32283__$2 == null))?null:cljs.core.reverse.call(null,G__32283__$2));var G__32283__$4 = (((G__32283__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__32283__$3));return G__32283__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__32281,map__32281__$1,map__32282,map__32282__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__32281,map__32281__$1,map__32282,map__32282__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);leaflet_marker.on("mouseover",((function (icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__32281,map__32281__$1,map__32282,map__32282__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (e){return leaflet_marker.openPopup();
});})(icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__32281,map__32281__$1,map__32282,map__32282__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,item_render_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
if(cljs.core.truth_(leaflet_marker_cluster_group))
{leaflet_marker_cluster_group.addLayer(leaflet_marker);
} else
{leaflet_map.addLayer(leaflet_marker);
}
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys)], null);
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4579__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_32284_32285 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32284_32285,sb__4579__auto__,temp__4124__auto__,map__32281,map__32281__$1,map__32282,map__32282__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (x__4580__auto__){return sb__4579__auto__.append(x__4580__auto__);
});})(_STAR_print_fn_STAR_32284_32285,sb__4579__auto__,temp__4124__auto__,map__32281,map__32281__$1,map__32282,map__32282__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32284_32285;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4579__auto__));
})())));
}
});
clustermap.components.map.remove_marker_event_handlers = (function remove_marker_event_handlers(p__32286){var map__32292 = p__32286;var map__32292__$1 = ((cljs.core.seq_QMARK_.call(null,map__32292))?cljs.core.apply.call(null,cljs.core.hash_map,map__32292):map__32292);var marker = map__32292__$1;var click_handler_keys = cljs.core.get.call(null,map__32292__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32292__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));clustermap.components.map.remove_event_handler.call(null,click_handler_key);
var seq__32293 = cljs.core.seq.call(null,click_handler_keys);var chunk__32294 = null;var count__32295 = (0);var i__32296 = (0);while(true){
if((i__32296 < count__32295))
{var chk = cljs.core._nth.call(null,chunk__32294,i__32296);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__32297 = seq__32293;
var G__32298 = chunk__32294;
var G__32299 = count__32295;
var G__32300 = (i__32296 + (1));
seq__32293 = G__32297;
chunk__32294 = G__32298;
count__32295 = G__32299;
i__32296 = G__32300;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32293);if(temp__4126__auto__)
{var seq__32293__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32293__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32293__$1);{
var G__32301 = cljs.core.chunk_rest.call(null,seq__32293__$1);
var G__32302 = c__4408__auto__;
var G__32303 = cljs.core.count.call(null,c__4408__auto__);
var G__32304 = (0);
seq__32293 = G__32301;
chunk__32294 = G__32302;
count__32295 = G__32303;
i__32296 = G__32304;
continue;
}
} else
{var chk = cljs.core.first.call(null,seq__32293__$1);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__32305 = cljs.core.next.call(null,seq__32293__$1);
var G__32306 = null;
var G__32307 = (0);
var G__32308 = (0);
seq__32293 = G__32305;
chunk__32294 = G__32306;
count__32295 = G__32307;
i__32296 = G__32308;
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
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,p__32309,location_sites,p__32310){var map__32314 = p__32309;var map__32314__$1 = ((cljs.core.seq_QMARK_.call(null,map__32314))?cljs.core.apply.call(null,cljs.core.hash_map,map__32314):map__32314);var marker = map__32314__$1;var click_handler_keys = cljs.core.get.call(null,map__32314__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32314__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32314__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var map__32315 = p__32310;var map__32315__$1 = ((cljs.core.seq_QMARK_.call(null,map__32315))?cljs.core.apply.call(null,cljs.core.hash_map,map__32315):map__32315);var map__32316 = cljs.core.get.call(null,map__32315__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__32316__$1 = ((cljs.core.seq_QMARK_.call(null,map__32316))?cljs.core.apply.call(null,cljs.core.hash_map,map__32316):map__32316);var location_spec = map__32316__$1;var item_click_fn = cljs.core.get.call(null,map__32316__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__32316__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__32316__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,popup,map__32314,map__32314__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32315,map__32315__$1,map__32316,map__32316__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,popup,map__32314,map__32314__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32315,map__32315__$1,map__32316,map__32316__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);clustermap.components.map.remove_marker_event_handlers.call(null,marker);
leaflet_marker.setIcon(icon);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,item_render_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407)),new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys));
});
/**
* remove a marker from a cluster group or directly from the map
*/
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,leaflet_marker_cluster_group,p__32317){var map__32319 = p__32317;var map__32319__$1 = ((cljs.core.seq_QMARK_.call(null,map__32319))?cljs.core.apply.call(null,cljs.core.hash_map,map__32319):map__32319);var marker = map__32319__$1;var click_handler_keys = cljs.core.get.call(null,map__32319__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32319__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32319__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));clustermap.components.map.remove_marker_event_handlers.call(null,marker);
if(cljs.core.truth_(leaflet_marker_cluster_group))
{leaflet_marker_cluster_group.removeLayer(leaflet_marker);
} else
{leaflet_map.removeLayer(leaflet_marker);
}
return null;
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,leaflet_marker_cluster_group,markers_atom,show_points,new_locations,opts){var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = (cljs.core.truth_(show_points)?cljs.core.set.call(null,cljs.core.keys.call(null,new_locations)):null);var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,path_fn,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k),cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)),opts)], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__32324 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32325 = null;var count__32326 = (0);var i__32327 = (0);while(true){
if((i__32327 < count__32326))
{var k = cljs.core._nth.call(null,chunk__32325,i__32327);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32328 = seq__32324;
var G__32329 = chunk__32325;
var G__32330 = count__32326;
var G__32331 = (i__32327 + (1));
seq__32324 = G__32328;
chunk__32325 = G__32329;
count__32326 = G__32330;
i__32327 = G__32331;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32324);if(temp__4126__auto__)
{var seq__32324__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32324__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32324__$1);{
var G__32332 = cljs.core.chunk_rest.call(null,seq__32324__$1);
var G__32333 = c__4408__auto__;
var G__32334 = cljs.core.count.call(null,c__4408__auto__);
var G__32335 = (0);
seq__32324 = G__32332;
chunk__32325 = G__32333;
count__32326 = G__32334;
i__32327 = G__32335;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32324__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32336 = cljs.core.next.call(null,seq__32324__$1);
var G__32337 = null;
var G__32338 = (0);
var G__32339 = (0);
seq__32324 = G__32336;
chunk__32325 = G__32337;
count__32326 = G__32338;
i__32327 = G__32339;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_.call(null,markers_atom,cljs.core.merge.call(null,updated_markers,new_markers));
});
clustermap.components.map.marker_color_class = (function marker_color_class(n){var pred__32343 = cljs.core._EQ_;var expr__32344 = n;if(cljs.core.truth_(pred__32343.call(null,(0),expr__32344)))
{return "marker-cluster-small";
} else
{if(cljs.core.truth_(pred__32343.call(null,(1),expr__32344)))
{return "marker-cluster-medium";
} else
{if(cljs.core.truth_(pred__32343.call(null,(2),expr__32344)))
{return "marker-cluster-large";
} else
{return "marker-cluster-small";
}
}
}
});
clustermap.components.map.render_geotag_icon = (function render_geotag_icon(p__32346,geotag,geotag_agg){var map__32349 = p__32346;var map__32349__$1 = ((cljs.core.seq_QMARK_.call(null,map__32349))?cljs.core.apply.call(null,cljs.core.hash_map,map__32349):map__32349);var geotag_agg_spec = map__32349__$1;var colorchooser_fn = cljs.core.get.call(null,map__32349__$1,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899));var icon_render_fn = cljs.core.get.call(null,map__32349__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var color_value = colorchooser_fn.call(null,geotag_agg);return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),("marker-cluster "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.marker_color_class.call(null,color_value)))], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32350 = icon_render_fn.call(null,geotag,geotag_agg);if(cljs.core.map_QMARK_.call(null,attrs32350))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32350)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32350))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geotag_marker_popup_content = (function render_geotag_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))))));
});
clustermap.components.map.create_geotag_marker = (function create_geotag_marker(leaflet_map,p__32351,geotag,geotag_agg){var map__32353 = p__32351;var map__32353__$1 = ((cljs.core.seq_QMARK_.call(null,map__32353))?cljs.core.apply.call(null,cljs.core.hash_map,map__32353):map__32353);var geotag_agg_spec = map__32353__$1;var click_fn = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(geotag),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(geotag)], null));var icon = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32353,map__32353__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32353,map__32353__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geotag_marker = (function update_geotag_marker(leaflet_map,p__32354,p__32355,geotag,geotag_agg){var map__32358 = p__32354;var map__32358__$1 = ((cljs.core.seq_QMARK_.call(null,map__32358))?cljs.core.apply.call(null,cljs.core.hash_map,map__32358):map__32358);var geotag_agg_spec = map__32358__$1;var click_fn = cljs.core.get.call(null,map__32358__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32358__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32358__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32359 = p__32355;var map__32359__$1 = ((cljs.core.seq_QMARK_.call(null,map__32359))?cljs.core.apply.call(null,cljs.core.hash_map,map__32359):map__32359);var marker = map__32359__$1;var click_handler_key = cljs.core.get.call(null,map__32359__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32359__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var icon_32360 = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var new_click_handler_key_32361 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setIcon(icon_32360);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32361);
return marker;
});
clustermap.components.map.update_geotag_markers = (function update_geotag_markers(leaflet_map,geotag_markers_atom,p__32362,points_showing_QMARK_){var map__32368 = p__32362;var map__32368__$1 = ((cljs.core.seq_QMARK_.call(null,map__32368))?cljs.core.apply.call(null,cljs.core.hash_map,map__32368):map__32368);var geotag_agg_spec = map__32368__$1;var geotag_agg_data = cljs.core.get.call(null,map__32368__$1,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391));var geotag_data = cljs.core.get.call(null,map__32368__$1,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976));var popup_render_fn = cljs.core.get.call(null,map__32368__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32368__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var colorchooser_factory_fn = cljs.core.get.call(null,map__32368__$1,new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307));var show_at_zoom_fn = cljs.core.get.call(null,map__32368__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var colorchooser_fn = (cljs.core.truth_(colorchooser_factory_fn)?colorchooser_factory_fn.call(null,geotag_agg_data):cljs.core.constantly.call(null,(1)));var geotag_agg_spec__$1 = cljs.core.assoc.call(null,geotag_agg_spec,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899),colorchooser_fn);var geotags_by_tag = cljs.core.reduce.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,map__32368,map__32368__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (m,t){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(t),t);
});})(colorchooser_fn,geotag_agg_spec__$1,map__32368,map__32368__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_data);var geotag_aggs_by_tag = cljs.core.reduce.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,map__32368,map__32368__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (m,a){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226).cljs$core$IFn$_invoke$arity$1(a),a);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,map__32368,map__32368__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_agg_data);var markers = cljs.core.deref.call(null,geotag_markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var show_at_zoom_fn__$1 = (function (){var or__3639__auto__ = show_at_zoom_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.constantly.call(null,true);
}
})();var zoom = leaflet_map.getZoom();var latest_marker_keys = (cljs.core.truth_((function (){var or__3639__auto__ = points_showing_QMARK_;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.not.call(null,show_at_zoom_fn__$1.call(null,zoom));
}
})())?null:cljs.core.set.call(null,cljs.core.keys.call(null,geotag_aggs_by_tag)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32368,map__32368__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geotag_marker.call(null,leaflet_map,geotag_agg_spec__$1,cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32368,map__32368__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32368,map__32368__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geotag_marker.call(null,leaflet_map,geotag_agg_spec__$1,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32368,map__32368__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32369 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32370 = null;var count__32371 = (0);var i__32372 = (0);while(true){
if((i__32372 < count__32371))
{var k = cljs.core._nth.call(null,chunk__32370,i__32372);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32373 = seq__32369;
var G__32374 = chunk__32370;
var G__32375 = count__32371;
var G__32376 = (i__32372 + (1));
seq__32369 = G__32373;
chunk__32370 = G__32374;
count__32371 = G__32375;
i__32372 = G__32376;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32369);if(temp__4126__auto__)
{var seq__32369__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32369__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32369__$1);{
var G__32377 = cljs.core.chunk_rest.call(null,seq__32369__$1);
var G__32378 = c__4408__auto__;
var G__32379 = cljs.core.count.call(null,c__4408__auto__);
var G__32380 = (0);
seq__32369 = G__32377;
chunk__32370 = G__32378;
count__32371 = G__32379;
i__32372 = G__32380;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32369__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32381 = cljs.core.next.call(null,seq__32369__$1);
var G__32382 = null;
var G__32383 = (0);
var G__32384 = (0);
seq__32369 = G__32381;
chunk__32370 = G__32382;
count__32371 = G__32383;
i__32372 = G__32384;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_.call(null,geotag_markers_atom,cljs.core.merge.call(null,updated_markers,new_markers));
});
clustermap.components.map.render_geohash_icon = (function render_geohash_icon(p__32385,geohash_agg){var map__32388 = p__32385;var map__32388__$1 = ((cljs.core.seq_QMARK_.call(null,map__32388))?cljs.core.apply.call(null,cljs.core.hash_map,map__32388):map__32388);var geohash_agg_spec = map__32388__$1;var colorchooser_fn = cljs.core.get.call(null,map__32388__$1,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899));var icon_render_fn = cljs.core.get.call(null,map__32388__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var color_value = colorchooser_fn.call(null,geohash_agg);return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),("marker-cluster "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.marker_color_class.call(null,color_value)))], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32389 = icon_render_fn.call(null,geohash_agg);if(cljs.core.map_QMARK_.call(null,attrs32389))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32389)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32389))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geohash_marker_popup_content = (function render_geohash_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32391 = content;if(cljs.core.map_QMARK_.call(null,attrs32391))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32391)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32391))+"</div>");
}
})())))));
});
/**
* we get bounds for the points contained in the geohash area, so take the
* center point as the marker point
*/
clustermap.components.map.geohash_center_point = (function geohash_center_point(p__32392){var map__32397 = p__32392;var map__32397__$1 = ((cljs.core.seq_QMARK_.call(null,map__32397))?cljs.core.apply.call(null,cljs.core.hash_map,map__32397):map__32397);var geohash_agg = map__32397__$1;var bounds = cljs.core.get.call(null,map__32397__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var vec__32398 = bounds;var vec__32399 = cljs.core.nth.call(null,vec__32398,(0),null);var south = cljs.core.nth.call(null,vec__32399,(0),null);var west = cljs.core.nth.call(null,vec__32399,(1),null);var vec__32400 = cljs.core.nth.call(null,vec__32398,(1),null);var north = cljs.core.nth.call(null,vec__32400,(0),null);var east = cljs.core.nth.call(null,vec__32400,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((south + north) / (2)),((west + east) / (2))], null);
});
clustermap.components.map.create_geohash_marker = (function create_geohash_marker(leaflet_map,p__32401,geohash_agg){var map__32403 = p__32401;var map__32403__$1 = ((cljs.core.seq_QMARK_.call(null,map__32403))?cljs.core.apply.call(null,cljs.core.hash_map,map__32403):map__32403);var geohash_agg_spec = map__32403__$1;var click_fn = cljs.core.get.call(null,map__32403__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32403__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32403__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32403,map__32403__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32403,map__32403__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geohash_marker = (function update_geohash_marker(leaflet_map,p__32404,p__32405,geohash_agg){var map__32408 = p__32404;var map__32408__$1 = ((cljs.core.seq_QMARK_.call(null,map__32408))?cljs.core.apply.call(null,cljs.core.hash_map,map__32408):map__32408);var geohash_agg_spec = map__32408__$1;var click_fn = cljs.core.get.call(null,map__32408__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32408__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32408__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32409 = p__32405;var map__32409__$1 = ((cljs.core.seq_QMARK_.call(null,map__32409))?cljs.core.apply.call(null,cljs.core.hash_map,map__32409):map__32409);var marker = map__32409__$1;var click_handler_key = cljs.core.get.call(null,map__32409__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32409__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var latlong_32410 = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon_32411 = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var new_click_handler_key_32412 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setLatLng(latlong_32410);
leaflet_marker.setIcon(icon_32411);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32412);
return marker;
});
clustermap.components.map.update_geohash_markers = (function update_geohash_markers(leaflet_map,geohash_markers_atom,p__32413,points_showing_QMARK_){var map__32419 = p__32413;var map__32419__$1 = ((cljs.core.seq_QMARK_.call(null,map__32419))?cljs.core.apply.call(null,cljs.core.hash_map,map__32419):map__32419);var geohash_agg_spec = map__32419__$1;var geohash_agg_data = cljs.core.get.call(null,map__32419__$1,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620));var icon_render_fn = cljs.core.get.call(null,map__32419__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var colorchooser_factory_fn = cljs.core.get.call(null,map__32419__$1,new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307));var show_at_zoom_fn = cljs.core.get.call(null,map__32419__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var colorchooser_fn = (cljs.core.truth_(colorchooser_factory_fn)?colorchooser_factory_fn.call(null,geohash_agg_data):cljs.core.constantly.call(null,(1)));var geohash_agg_spec__$1 = cljs.core.assoc.call(null,geohash_agg_spec,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899),colorchooser_fn);var geohash_aggs_by_geohash = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,map__32419,map__32419__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (gha){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geohash-grid","geohash-grid",2001750091).cljs$core$IFn$_invoke$arity$1(gha),gha], null);
});})(colorchooser_fn,geohash_agg_spec__$1,map__32419,map__32419__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,geohash_agg_data));var markers = cljs.core.deref.call(null,geohash_markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var show_at_zoom_fn__$1 = (function (){var or__3639__auto__ = show_at_zoom_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.constantly.call(null,true);
}
})();var zoom = leaflet_map.getZoom();var latest_marker_keys = (cljs.core.truth_((function (){var and__3627__auto__ = cljs.core.not.call(null,points_showing_QMARK_);if(and__3627__auto__)
{return show_at_zoom_fn__$1.call(null,zoom);
} else
{return and__3627__auto__;
}
})())?cljs.core.set.call(null,cljs.core.keys.call(null,geohash_aggs_by_geohash)):null);var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32419,map__32419__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geohash_marker.call(null,leaflet_map,geohash_agg_spec__$1,cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32419,map__32419__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32419,map__32419__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geohash_marker.call(null,leaflet_map,geohash_agg_spec__$1,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32419,map__32419__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32420 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32421 = null;var count__32422 = (0);var i__32423 = (0);while(true){
if((i__32423 < count__32422))
{var k = cljs.core._nth.call(null,chunk__32421,i__32423);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32424 = seq__32420;
var G__32425 = chunk__32421;
var G__32426 = count__32422;
var G__32427 = (i__32423 + (1));
seq__32420 = G__32424;
chunk__32421 = G__32425;
count__32422 = G__32426;
i__32423 = G__32427;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32420);if(temp__4126__auto__)
{var seq__32420__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32420__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32420__$1);{
var G__32428 = cljs.core.chunk_rest.call(null,seq__32420__$1);
var G__32429 = c__4408__auto__;
var G__32430 = cljs.core.count.call(null,c__4408__auto__);
var G__32431 = (0);
seq__32420 = G__32428;
chunk__32421 = G__32429;
count__32422 = G__32430;
i__32423 = G__32431;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32420__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32432 = cljs.core.next.call(null,seq__32420__$1);
var G__32433 = null;
var G__32434 = (0);
var G__32435 = (0);
seq__32420 = G__32432;
chunk__32421 = G__32433;
count__32422 = G__32434;
i__32423 = G__32435;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_.call(null,geohash_markers_atom,cljs.core.merge.call(null,updated_markers,new_markers));
});
/**
* turns a PostGIS envelope into leaflet bounds
*/
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__32444 = cljs.core.js__GT_clj.call(null,envelope);var map__32444__$1 = ((cljs.core.seq_QMARK_.call(null,map__32444))?cljs.core.apply.call(null,cljs.core.hash_map,map__32444):map__32444);var clj_envelope = map__32444__$1;var vec__32445 = cljs.core.get.call(null,map__32444__$1,"coordinates");var vec__32446 = cljs.core.nth.call(null,vec__32445,(0),null);var vec__32447 = cljs.core.nth.call(null,vec__32446,(0),null);var miny0 = cljs.core.nth.call(null,vec__32447,(0),null);var minx0 = cljs.core.nth.call(null,vec__32447,(1),null);var vec__32448 = cljs.core.nth.call(null,vec__32446,(1),null);var maxy1 = cljs.core.nth.call(null,vec__32448,(0),null);var minx1 = cljs.core.nth.call(null,vec__32448,(1),null);var vec__32449 = cljs.core.nth.call(null,vec__32446,(2),null);var maxy2 = cljs.core.nth.call(null,vec__32449,(0),null);var maxx2 = cljs.core.nth.call(null,vec__32449,(1),null);var vec__32450 = cljs.core.nth.call(null,vec__32446,(3),null);var miny3 = cljs.core.nth.call(null,vec__32450,(0),null);var maxx3 = cljs.core.nth.call(null,vec__32450,(1),null);var vec__32451 = cljs.core.nth.call(null,vec__32446,(4),null);var miny4 = cljs.core.nth.call(null,vec__32451,(0),null);var minx4 = cljs.core.nth.call(null,vec__32451,(1),null);var inner = vec__32446;var coords = vec__32445;return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));
});
clustermap.components.map.boundary_marker_popup_content = (function boundary_marker_popup_content(path_fn,js_boundaryline){var bl_id = (js_boundaryline["id"]);var bl_name = (js_boundaryline["compact_name"]);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(path_fn)?path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-boundaryline","js-boundaryline",1803130691),js_boundaryline):"#"),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"boundaryline-popup-link"], null)))+"><span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-js-boundaryline-name"], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,bl_name))+"</span></a>");
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__32452,p__32453){var map__32456 = p__32452;var map__32456__$1 = ((cljs.core.seq_QMARK_.call(null,map__32456))?cljs.core.apply.call(null,cljs.core.hash_map,map__32456):map__32456);var fill_color = cljs.core.get.call(null,map__32456__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__32456__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__32456__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var map__32457 = p__32453;var map__32457__$1 = ((cljs.core.seq_QMARK_.call(null,map__32457))?cljs.core.apply.call(null,cljs.core.hash_map,map__32457):map__32457);var boundaryline_fill_opacity = cljs.core.get.call(null,map__32457__$1,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575),0.4);if(cljs.core.truth_((function (){var and__3627__auto__ = selected;if(cljs.core.truth_(and__3627__auto__))
{return highlighted;
} else
{return and__3627__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),boundaryline_fill_opacity], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),"#8c2d04",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(1),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),boundaryline_fill_opacity], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),false], null)));
} else
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),"#8c2d04",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(1),new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"fill","fill",883462889),false,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),(0)], null)));

}
}
}
});
/**
* @param {...*} var_args
*/
clustermap.components.map.create_path = (function() { 
var create_path__delegate = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32458,p__32459){var map__32463 = p__32458;var map__32463__$1 = ((cljs.core.seq_QMARK_.call(null,map__32463))?cljs.core.apply.call(null,cljs.core.hash_map,map__32463):map__32463);var path_attrs = map__32463__$1;var selected = cljs.core.get.call(null,map__32463__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var vec__32464 = p__32459;var map__32465 = cljs.core.nth.call(null,vec__32464,(0),null);var map__32465__$1 = ((cljs.core.seq_QMARK_.call(null,map__32465))?cljs.core.apply.call(null,cljs.core.hash_map,map__32465):map__32465);var opts = map__32465__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32465__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32465__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));var popup_content = clustermap.components.map.boundary_marker_popup_content.call(null,null,js_boundaryline);clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs,opts);
leaflet_path.addTo(leaflet_map);
leaflet_path.bindPopup(popup_content);
leaflet_path.on("dblclick",((function (tolerance,bounds,leaflet_path,popup_content,map__32463,map__32463__$1,path_attrs,selected,vec__32464,map__32465,map__32465__$1,opts,path_marker_click_fn,filter_spec){
return (function (e){leaflet_map.fitBounds(leaflet_path.getBounds());
if(cljs.core.truth_(path_marker_click_fn))
{return path_marker_click_fn.call(null,boundaryline_id);
} else
{return null;
}
});})(tolerance,bounds,leaflet_path,popup_content,map__32463,map__32463__$1,path_attrs,selected,vec__32464,map__32465,map__32465__$1,opts,path_marker_click_fn,filter_spec))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
};
var create_path = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32458,var_args){
var p__32459 = null;if (arguments.length > 5) {
  p__32459 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,js_boundaryline,p__32458,p__32459);};
create_path.cljs$lang$maxFixedArity = 5;
create_path.cljs$lang$applyTo = (function (arglist__32466){
var comm = cljs.core.first(arglist__32466);
arglist__32466 = cljs.core.next(arglist__32466);
var leaflet_map = cljs.core.first(arglist__32466);
arglist__32466 = cljs.core.next(arglist__32466);
var boundaryline_id = cljs.core.first(arglist__32466);
arglist__32466 = cljs.core.next(arglist__32466);
var js_boundaryline = cljs.core.first(arglist__32466);
arglist__32466 = cljs.core.next(arglist__32466);
var p__32458 = cljs.core.first(arglist__32466);
var p__32459 = cljs.core.rest(arglist__32466);
return create_path__delegate(comm,leaflet_map,boundaryline_id,js_boundaryline,p__32458,p__32459);
});
create_path.cljs$core$IFn$_invoke$arity$variadic = create_path__delegate;
return create_path;
})()
;
/**
* create leaflet paths for every boundaryline in boundaryline-index
* @param {...*} var_args
*/
clustermap.components.map.fetch_create_path = (function() { 
var fetch_create_path__delegate = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32467){var vec__32470 = p__32467;var map__32471 = cljs.core.nth.call(null,vec__32470,(0),null);var map__32471__$1 = ((cljs.core.seq_QMARK_.call(null,map__32471))?cljs.core.apply.call(null,cljs.core.hash_map,map__32471):map__32471);var opts = map__32471__$1;var filter_spec = cljs.core.get.call(null,map__32471__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs,opts);
};
var fetch_create_path = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,var_args){
var p__32467 = null;if (arguments.length > 6) {
  p__32467 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return fetch_create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32467);};
fetch_create_path.cljs$lang$maxFixedArity = 6;
fetch_create_path.cljs$lang$applyTo = (function (arglist__32472){
var comm = cljs.core.first(arglist__32472);
arglist__32472 = cljs.core.next(arglist__32472);
var leaflet_map = cljs.core.first(arglist__32472);
arglist__32472 = cljs.core.next(arglist__32472);
var boundaryline_id = cljs.core.first(arglist__32472);
arglist__32472 = cljs.core.next(arglist__32472);
var tolerance = cljs.core.first(arglist__32472);
arglist__32472 = cljs.core.next(arglist__32472);
var js_boundaryline = cljs.core.first(arglist__32472);
arglist__32472 = cljs.core.next(arglist__32472);
var path_attrs = cljs.core.first(arglist__32472);
var p__32467 = cljs.core.rest(arglist__32472);
return fetch_create_path__delegate(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32467);
});
fetch_create_path.cljs$core$IFn$_invoke$arity$variadic = fetch_create_path__delegate;
return fetch_create_path;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.map.replace_path = (function() { 
var replace_path__delegate = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32473){var vec__32476 = p__32473;var map__32477 = cljs.core.nth.call(null,vec__32476,(0),null);var map__32477__$1 = ((cljs.core.seq_QMARK_.call(null,map__32477))?cljs.core.apply.call(null,cljs.core.hash_map,map__32477):map__32477);var opts = map__32477__$1;var filter_spec = cljs.core.get.call(null,map__32477__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs,opts);
};
var replace_path = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,var_args){
var p__32473 = null;if (arguments.length > 6) {
  p__32473 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return replace_path__delegate.call(this,comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32473);};
replace_path.cljs$lang$maxFixedArity = 6;
replace_path.cljs$lang$applyTo = (function (arglist__32478){
var comm = cljs.core.first(arglist__32478);
arglist__32478 = cljs.core.next(arglist__32478);
var leaflet_map = cljs.core.first(arglist__32478);
arglist__32478 = cljs.core.next(arglist__32478);
var boundaryline_id = cljs.core.first(arglist__32478);
arglist__32478 = cljs.core.next(arglist__32478);
var old_path = cljs.core.first(arglist__32478);
arglist__32478 = cljs.core.next(arglist__32478);
var js_boundaryline = cljs.core.first(arglist__32478);
arglist__32478 = cljs.core.next(arglist__32478);
var path_attrs = cljs.core.first(arglist__32478);
var p__32473 = cljs.core.rest(arglist__32478);
return replace_path__delegate(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32473);
});
replace_path.cljs$core$IFn$_invoke$arity$variadic = replace_path__delegate;
return replace_path;
})()
;
/**
* update a Leaflet path for a boundaryline
* @param {...*} var_args
*/
clustermap.components.map.update_path = (function() { 
var update_path__delegate = function (comm,leaflet_map,p__32479,tolerance,js_boundaryline,path_attrs,p__32480){var map__32484 = p__32479;var map__32484__$1 = ((cljs.core.seq_QMARK_.call(null,map__32484))?cljs.core.apply.call(null,cljs.core.hash_map,map__32484):map__32484);var path = map__32484__$1;var boundaryline_id = cljs.core.get.call(null,map__32484__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__32485 = p__32480;var map__32486 = cljs.core.nth.call(null,vec__32485,(0),null);var map__32486__$1 = ((cljs.core.seq_QMARK_.call(null,map__32486))?cljs.core.apply.call(null,cljs.core.hash_map,map__32486):map__32486);var opts = map__32486__$1;var filter_spec = cljs.core.get.call(null,map__32486__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs,opts);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs,opts);
return path;
}
};
var update_path = function (comm,leaflet_map,p__32479,tolerance,js_boundaryline,path_attrs,var_args){
var p__32480 = null;if (arguments.length > 6) {
  p__32480 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return update_path__delegate.call(this,comm,leaflet_map,p__32479,tolerance,js_boundaryline,path_attrs,p__32480);};
update_path.cljs$lang$maxFixedArity = 6;
update_path.cljs$lang$applyTo = (function (arglist__32487){
var comm = cljs.core.first(arglist__32487);
arglist__32487 = cljs.core.next(arglist__32487);
var leaflet_map = cljs.core.first(arglist__32487);
arglist__32487 = cljs.core.next(arglist__32487);
var p__32479 = cljs.core.first(arglist__32487);
arglist__32487 = cljs.core.next(arglist__32487);
var tolerance = cljs.core.first(arglist__32487);
arglist__32487 = cljs.core.next(arglist__32487);
var js_boundaryline = cljs.core.first(arglist__32487);
arglist__32487 = cljs.core.next(arglist__32487);
var path_attrs = cljs.core.first(arglist__32487);
var p__32480 = cljs.core.rest(arglist__32487);
return update_path__delegate(comm,leaflet_map,p__32479,tolerance,js_boundaryline,path_attrs,p__32480);
});
update_path.cljs$core$IFn$_invoke$arity$variadic = update_path__delegate;
return update_path;
})()
;
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path));
});
/**
* @param {...*} var_args
*/
clustermap.components.map.update_paths = (function() { 
var update_paths__delegate = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32488){var vec__32504 = p__32488;var map__32505 = cljs.core.nth.call(null,vec__32504,(0),null);var map__32505__$1 = ((cljs.core.seq_QMARK_.call(null,map__32505))?cljs.core.apply.call(null,cljs.core.hash_map,map__32505):map__32505);var opts = map__32505__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32505__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32505__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__32506 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__32506,(0),null);var notifychan = cljs.core.nth.call(null,vec__32506,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32506,tolerance_paths,notifychan,vec__32504,map__32505,map__32505__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32507){var vec__32508 = p__32507;var k = cljs.core.nth.call(null,vec__32508,(0),null);var tolerance = cljs.core.nth.call(null,vec__32508,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32508,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32506,tolerance_paths,notifychan,vec__32504,map__32505,map__32505__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32506,tolerance_paths,notifychan,vec__32504,map__32505,map__32505__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32509 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32509,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32509,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = tolerance;if(cljs.core.truth_(and__3627__auto____$1))
{return js_boundaryline;
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32506,tolerance_paths,notifychan,vec__32504,map__32505,map__32505__$1,opts,path_marker_click_fn,filter_spec))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32506,tolerance_paths,notifychan,created_paths,vec__32504,map__32505,map__32505__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32510){var vec__32511 = p__32510;var k = cljs.core.nth.call(null,vec__32511,(0),null);var tolerance = cljs.core.nth.call(null,vec__32511,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32511,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32506,tolerance_paths,notifychan,created_paths,vec__32504,map__32505,map__32505__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32506,tolerance_paths,notifychan,created_paths,vec__32504,map__32505,map__32505__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32512 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32512,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32512,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = tolerance;if(cljs.core.truth_(and__3627__auto____$1))
{return js_boundaryline;
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32506,tolerance_paths,notifychan,created_paths,vec__32504,map__32505,map__32505__$1,opts,path_marker_click_fn,filter_spec))
,update_path_keys)));var ___$1 = (function (){var seq__32513 = cljs.core.seq.call(null,delete_path_keys);var chunk__32514 = null;var count__32515 = (0);var i__32516 = (0);while(true){
if((i__32516 < count__32515))
{var k = cljs.core._nth.call(null,chunk__32514,i__32516);var temp__4124__auto___32519 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32519))
{var path_32520 = temp__4124__auto___32519;clustermap.components.map.delete_path.call(null,leaflet_map,path_32520);
} else
{}
{
var G__32521 = seq__32513;
var G__32522 = chunk__32514;
var G__32523 = count__32515;
var G__32524 = (i__32516 + (1));
seq__32513 = G__32521;
chunk__32514 = G__32522;
count__32515 = G__32523;
i__32516 = G__32524;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32513);if(temp__4126__auto__)
{var seq__32513__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32513__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32513__$1);{
var G__32525 = cljs.core.chunk_rest.call(null,seq__32513__$1);
var G__32526 = c__4408__auto__;
var G__32527 = cljs.core.count.call(null,c__4408__auto__);
var G__32528 = (0);
seq__32513 = G__32525;
chunk__32514 = G__32526;
count__32515 = G__32527;
i__32516 = G__32528;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32513__$1);var temp__4124__auto___32529 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32529))
{var path_32530 = temp__4124__auto___32529;clustermap.components.map.delete_path.call(null,leaflet_map,path_32530);
} else
{}
{
var G__32531 = cljs.core.next.call(null,seq__32513__$1);
var G__32532 = null;
var G__32533 = (0);
var G__32534 = (0);
seq__32513 = G__32531;
chunk__32514 = G__32532;
count__32515 = G__32533;
i__32516 = G__32534;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32506,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32504,map__32505,map__32505__$1,opts,path_marker_click_fn,filter_spec){
return (function (m,p__32517){var map__32518 = p__32517;var map__32518__$1 = ((cljs.core.seq_QMARK_.call(null,map__32518))?cljs.core.apply.call(null,cljs.core.hash_map,map__32518):map__32518);var path = map__32518__$1;var id = cljs.core.get.call(null,map__32518__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32506,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32504,map__32505,map__32505__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
};
var update_paths = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,var_args){
var p__32488 = null;if (arguments.length > 7) {
  p__32488 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return update_paths__delegate.call(this,comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32488);};
update_paths.cljs$lang$maxFixedArity = 7;
update_paths.cljs$lang$applyTo = (function (arglist__32535){
var comm = cljs.core.first(arglist__32535);
arglist__32535 = cljs.core.next(arglist__32535);
var fetch_boundarylines_fn = cljs.core.first(arglist__32535);
arglist__32535 = cljs.core.next(arglist__32535);
var leaflet_map = cljs.core.first(arglist__32535);
arglist__32535 = cljs.core.next(arglist__32535);
var paths_atom = cljs.core.first(arglist__32535);
arglist__32535 = cljs.core.next(arglist__32535);
var path_selections_atom = cljs.core.first(arglist__32535);
arglist__32535 = cljs.core.next(arglist__32535);
var new_path_highlights = cljs.core.first(arglist__32535);
arglist__32535 = cljs.core.next(arglist__32535);
var new_selection_paths = cljs.core.first(arglist__32535);
var p__32488 = cljs.core.rest(arglist__32535);
return update_paths__delegate(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32488);
});
update_paths.cljs$core$IFn$_invoke$arity$variadic = update_paths__delegate;
return update_paths;
})()
;
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__32538){var vec__32539 = p__32538;var tz = cljs.core.nth.call(null,vec__32539,(0),null);var collection = cljs.core.nth.call(null,vec__32539,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__32540,owner){var map__32784 = p__32540;var map__32784__$1 = ((cljs.core.seq_QMARK_.call(null,map__32784))?cljs.core.apply.call(null,cljs.core.hash_map,map__32784):map__32784);var cursor_data = map__32784__$1;var map__32785 = cljs.core.get.call(null,map__32784__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32785__$1 = ((cljs.core.seq_QMARK_.call(null,map__32785))?cljs.core.apply.call(null,cljs.core.hash_map,map__32785):map__32785);var cursor = map__32785__$1;var data = cljs.core.get.call(null,map__32785__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__32785__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__32785__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32786 = cljs.core.get.call(null,map__32785__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32786__$1 = ((cljs.core.seq_QMARK_.call(null,map__32786))?cljs.core.apply.call(null,cljs.core.hash_map,map__32786):map__32786);var controls = map__32786__$1;var colorchooser = cljs.core.get.call(null,map__32786__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var initial_bounds = cljs.core.get.call(null,map__32786__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var location = cljs.core.get.call(null,map__32786__$1,new cljs.core.Keyword(null,"location","location",1815599388));var zoom = cljs.core.get.call(null,map__32786__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var map_options = cljs.core.get.call(null,map__32786__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var geotag_aggs = cljs.core.get.call(null,map__32786__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var link_render_fn = cljs.core.get.call(null,map__32786__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var threshold_colors = cljs.core.get.call(null,map__32786__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var bounds = cljs.core.get.call(null,map__32786__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_collection = cljs.core.get.call(null,map__32786__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var show_points = cljs.core.get.call(null,map__32786__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var link_click_fn = cljs.core.get.call(null,map__32786__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var geohash_aggs = cljs.core.get.call(null,map__32786__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var boundaryline_agg = cljs.core.get.call(null,map__32786__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var filter_spec = cljs.core.get.call(null,map__32784__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var filter = cljs.core.get.call(null,map__32784__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.map.t32787 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t32787 = (function (p__32540,colorchooser,initial_bounds,location,map__32784,owner,map__32785,data,zoom,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,geohash_aggs,point_data,map__32786,boundaryline_agg,meta32788){
this.p__32540 = p__32540;
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.location = location;
this.map__32784 = map__32784;
this.owner = owner;
this.map__32785 = map__32785;
this.data = data;
this.zoom = zoom;
this.map_options = map_options;
this.cursor_data = cursor_data;
this.geotag_aggs = geotag_aggs;
this.filter_spec = filter_spec;
this.map_component = map_component;
this.link_render_fn = link_render_fn;
this.boundaryline_collections = boundaryline_collections;
this.controls = controls;
this.cursor = cursor;
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.boundaryline_collection = boundaryline_collection;
this.show_points = show_points;
this.link_click_fn = link_click_fn;
this.filter = filter;
this.geohash_aggs = geohash_aggs;
this.point_data = point_data;
this.map__32786 = map__32786;
this.boundaryline_agg = boundaryline_agg;
this.meta32788 = meta32788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t32787.cljs$lang$type = true;
clustermap.components.map.t32787.cljs$lang$ctorStr = "clustermap.components.map/t32787";
clustermap.components.map.t32787.cljs$lang$ctorPrWriter = ((function (map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map/t32787");
});})(map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32787.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t32787.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,node).off();
domina.events.unlisten_BANG_.call(null,node);
domina.events.unlisten_BANG_.call(null,"clustermap-change-view");
var map__32790 = om.core.get_state.call(null,self__.owner);var map__32790__$1 = ((cljs.core.seq_QMARK_.call(null,map__32790))?cljs.core.apply.call(null,cljs.core.hash_map,map__32790):map__32790);var map__32791 = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32791__$1 = ((cljs.core.seq_QMARK_.call(null,map__32791))?cljs.core.apply.call(null,cljs.core.hash_map,map__32791):map__32791);var path_selections = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));return leaflet_map.remove();
});})(map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32787.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t32787.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$,p__32792,p__32793){var self__ = this;
var map__32794 = p__32792;var map__32794__$1 = ((cljs.core.seq_QMARK_.call(null,map__32794))?cljs.core.apply.call(null,cljs.core.hash_map,map__32794):map__32794);var next_cursor_data = map__32794__$1;var map__32795 = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32795__$1 = ((cljs.core.seq_QMARK_.call(null,map__32795))?cljs.core.apply.call(null,cljs.core.hash_map,map__32795):map__32795);var next_cursor = map__32795__$1;var next_data = cljs.core.get.call(null,map__32795__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__32795__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__32795__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32796 = cljs.core.get.call(null,map__32795__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32796__$1 = ((cljs.core.seq_QMARK_.call(null,map__32796))?cljs.core.apply.call(null,cljs.core.hash_map,map__32796):map__32796);var next_colorchooser = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_collection = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_boundaryline_fill_opacity = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575));var next_zoom = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_threshold_colors = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var next_geotag_aggs = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var next_bounds = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_geohash_aggs = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var next_boundaryline_agg = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_location = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"location","location",1815599388));var next_show_points = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var next_filter = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_filter_spec = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32797 = p__32793;var map__32797__$1 = ((cljs.core.seq_QMARK_.call(null,map__32797))?cljs.core.apply.call(null,cljs.core.hash_map,map__32797):map__32797);var map__32798 = cljs.core.get.call(null,map__32797__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32798__$1 = ((cljs.core.seq_QMARK_.call(null,map__32798))?cljs.core.apply.call(null,cljs.core.hash_map,map__32798):map__32798);var next_markers = cljs.core.get.call(null,map__32798__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_geotag_markers = cljs.core.get.call(null,map__32798__$1,new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648));var next_geohash_markers = cljs.core.get.call(null,map__32798__$1,new cljs.core.Keyword(null,"geohash-markers","geohash-markers",-1063983705));var next_paths = cljs.core.get.call(null,map__32798__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__32798__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__32797__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var fetch_aggregation_data_fn = cljs.core.get.call(null,map__32797__$1,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532));var fetch_point_data_fn = cljs.core.get.call(null,map__32797__$1,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507));var fetch_geotag_data_fn = cljs.core.get.call(null,map__32797__$1,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950));var fetch_geotag_agg_data_fn = cljs.core.get.call(null,map__32797__$1,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602));var fetch_geohash_agg_data_fn = cljs.core.get.call(null,map__32797__$1,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986));var this$__$1 = this;var map__32799 = om.core.get_shared.call(null,self__.owner);var map__32799__$1 = ((cljs.core.seq_QMARK_.call(null,map__32799))?cljs.core.apply.call(null,cljs.core.hash_map,map__32799):map__32799);var path_marker_click_fn = cljs.core.get.call(null,map__32799__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32799__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32799__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32799__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__32800 = om.core.get_state.call(null,self__.owner);var map__32800__$1 = ((cljs.core.seq_QMARK_.call(null,map__32800))?cljs.core.apply.call(null,cljs.core.hash_map,map__32800):map__32800);var map__32801 = cljs.core.get.call(null,map__32800__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32801__$1 = ((cljs.core.seq_QMARK_.call(null,map__32801))?cljs.core.apply.call(null,cljs.core.hash_map,map__32801):map__32801);var path_selections = cljs.core.get.call(null,map__32801__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32801__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32801__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_marker_cluster_group = cljs.core.get.call(null,map__32801__$1,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671));var leaflet_map = cljs.core.get.call(null,map__32801__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__32800__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__32800__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var zoom_changed = cljs.core.not_EQ_.call(null,next_zoom,self__.zoom);if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = next_zoom;if(cljs.core.truth_(and__3627__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_zoom,self__.zoom)) && (cljs.core.not_EQ_.call(null,next_zoom,leaflet_map.getZoom()));
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{leaflet_map.setZoom(next_zoom);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = next_bounds;if(cljs.core.truth_(and__3627__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)) && (cljs.core.not_EQ_.call(null,next_bounds,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds())));
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{leaflet_map.fitBounds(cljs.core.clj__GT_js.call(null,next_bounds));
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = self__.boundaryline_collections;if(cljs.core.truth_(and__3627__auto____$1))
{return cljs.core.not_EQ_.call(null,next_boundaryline_collection,clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()));
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["change-collection",clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom())], null)));
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936)], null),clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()));
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_boundaryline_collection;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = next_boundaryline_agg;if(cljs.core.truth_(and__3627__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_boundaryline_agg,self__.boundaryline_agg)) || (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___33027 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33027,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33027,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32824){var state_val_32825 = (state_32824[(1)]);if((state_val_32825 === (5)))
{var inst_32822 = (state_32824[(2)]);var state_32824__$1 = state_32824;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32824__$1,inst_32822);
} else
{if((state_val_32825 === (4)))
{var state_32824__$1 = state_32824;var statearr_32826_33028 = state_32824__$1;(statearr_32826_33028[(2)] = null);
(statearr_32826_33028[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32825 === (3)))
{var inst_32814 = (state_32824[(7)]);var inst_32816 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32817 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_32818 = (new cljs.core.PersistentVector(null,1,(5),inst_32816,inst_32817,null));var inst_32819 = om.core.update_BANG_.call(null,self__.cursor,inst_32818,inst_32814);var state_32824__$1 = state_32824;var statearr_32827_33029 = state_32824__$1;(statearr_32827_33029[(2)] = inst_32819);
(statearr_32827_33029[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32825 === (2)))
{var inst_32814 = (state_32824[(7)]);var inst_32814__$1 = (state_32824[(2)]);var state_32824__$1 = (function (){var statearr_32828 = state_32824;(statearr_32828[(7)] = inst_32814__$1);
return statearr_32828;
})();if(cljs.core.truth_(inst_32814__$1))
{var statearr_32829_33030 = state_32824__$1;(statearr_32829_33030[(1)] = (3));
} else
{var statearr_32830_33031 = state_32824__$1;(statearr_32830_33031[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32825 === (1)))
{var inst_32802 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32803 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32804 = leaflet_map.getZoom();var inst_32805 = clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,inst_32804);var inst_32806 = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32807 = om.core._value.call(null,next_filter);var inst_32808 = leaflet_map.getBounds();var inst_32809 = clustermap.components.map.bounds_array.call(null,inst_32808);var inst_32810 = new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32811 = new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32812 = fetch_aggregation_data_fn.call(null,inst_32802,inst_32803,inst_32805,inst_32806,inst_32807,inst_32809,inst_32810,inst_32811);var state_32824__$1 = state_32824;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32824__$1,(2),inst_32812);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33027,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33027,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32834 = [null,null,null,null,null,null,null,null];(statearr_32834[(0)] = state_machine__9111__auto__);
(statearr_32834[(1)] = (1));
return statearr_32834;
});
var state_machine__9111__auto____1 = (function (state_32824){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32824);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32835){if((e32835 instanceof Object))
{var ex__9114__auto__ = e32835;var statearr_32836_33032 = state_32824;(statearr_32836_33032[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32824);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32835;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33033 = state_32824;
state_32824 = G__33033;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32824){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33027,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32837 = f__9126__auto__.call(null);(statearr_32837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33027);
return statearr_32837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33027,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
var c__9125__auto___33034 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33034,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33034,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32885){var state_val_32886 = (state_32885[(1)]);if((state_val_32886 === (7)))
{var inst_32852 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32853 = ["?natural_id","!name","!location","!latest_employee_count","!latest_turnover","!total_funding"];var inst_32854 = (new cljs.core.PersistentVector(null,6,(5),inst_32852,inst_32853,null));var state_32885__$1 = state_32885;var statearr_32887_33035 = state_32885__$1;(statearr_32887_33035[(2)] = inst_32854);
(statearr_32887_33035[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32886 === (1)))
{var inst_32844 = (state_32885[(7)]);var inst_32838 = [new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"location-attr","location-attr",-1350680971),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.Keyword(null,"max-count","max-count",1539185305)];var inst_32839 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32840 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32841 = om.core._value.call(null,next_filter);var inst_32842 = leaflet_map.getBounds();var inst_32843 = clustermap.components.map.bounds_array.call(null,inst_32842);var inst_32844__$1 = new cljs.core.Keyword(null,"location-attr","location-attr",-1350680971).cljs$core$IFn$_invoke$arity$1(next_location);var state_32885__$1 = (function (){var statearr_32888 = state_32885;(statearr_32888[(8)] = inst_32843);
(statearr_32888[(7)] = inst_32844__$1);
(statearr_32888[(9)] = inst_32838);
(statearr_32888[(10)] = inst_32840);
(statearr_32888[(11)] = inst_32841);
(statearr_32888[(12)] = inst_32839);
return statearr_32888;
})();if(cljs.core.truth_(inst_32844__$1))
{var statearr_32889_33036 = state_32885__$1;(statearr_32889_33036[(1)] = (3));
} else
{var statearr_32890_33037 = state_32885__$1;(statearr_32890_33037[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32886 === (4)))
{var state_32885__$1 = state_32885;var statearr_32891_33038 = state_32885__$1;(statearr_32891_33038[(2)] = "!location");
(statearr_32891_33038[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32886 === (13)))
{var state_32885__$1 = state_32885;var statearr_32892_33039 = state_32885__$1;(statearr_32892_33039[(2)] = null);
(statearr_32892_33039[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32886 === (6)))
{var inst_32849 = (state_32885[(13)]);var state_32885__$1 = state_32885;var statearr_32893_33040 = state_32885__$1;(statearr_32893_33040[(2)] = inst_32849);
(statearr_32893_33040[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32886 === (3)))
{var inst_32844 = (state_32885[(7)]);var state_32885__$1 = state_32885;var statearr_32894_33041 = state_32885__$1;(statearr_32894_33041[(2)] = inst_32844);
(statearr_32894_33041[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32886 === (12)))
{var inst_32875 = (state_32885[(14)]);var inst_32877 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32878 = [new cljs.core.Keyword(null,"point-data","point-data",-1294572970)];var inst_32879 = (new cljs.core.PersistentVector(null,1,(5),inst_32877,inst_32878,null));var inst_32880 = om.core.update_BANG_.call(null,self__.cursor,inst_32879,inst_32875);var state_32885__$1 = state_32885;var statearr_32895_33042 = state_32885__$1;(statearr_32895_33042[(2)] = inst_32880);
(statearr_32895_33042[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32886 === (2)))
{var inst_32875 = (state_32885[(14)]);var inst_32875__$1 = (state_32885[(2)]);var state_32885__$1 = (function (){var statearr_32896 = state_32885;(statearr_32896[(14)] = inst_32875__$1);
return statearr_32896;
})();if(cljs.core.truth_(inst_32875__$1))
{var statearr_32897_33043 = state_32885__$1;(statearr_32897_33043[(1)] = (12));
} else
{var statearr_32898_33044 = state_32885__$1;(statearr_32898_33044[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32886 === (11)))
{var inst_32843 = (state_32885[(8)]);var inst_32838 = (state_32885[(9)]);var inst_32848 = (state_32885[(15)]);var inst_32856 = (state_32885[(16)]);var inst_32840 = (state_32885[(10)]);var inst_32841 = (state_32885[(11)]);var inst_32839 = (state_32885[(12)]);var inst_32870 = (state_32885[(2)]);var inst_32871 = [inst_32839,inst_32840,inst_32841,inst_32843,inst_32848,inst_32856,inst_32870,(1000)];var inst_32872 = cljs.core.PersistentHashMap.fromArrays(inst_32838,inst_32871);var inst_32873 = fetch_point_data_fn.call(null,inst_32872);var state_32885__$1 = state_32885;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32885__$1,(2),inst_32873);
} else
{if((state_val_32886 === (9)))
{var inst_32857 = (state_32885[(17)]);var state_32885__$1 = state_32885;var statearr_32899_33045 = state_32885__$1;(statearr_32899_33045[(2)] = inst_32857);
(statearr_32899_33045[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32886 === (5)))
{var inst_32849 = (state_32885[(13)]);var inst_32848 = (state_32885[(2)]);var inst_32849__$1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(next_location);var state_32885__$1 = (function (){var statearr_32900 = state_32885;(statearr_32900[(13)] = inst_32849__$1);
(statearr_32900[(15)] = inst_32848);
return statearr_32900;
})();if(cljs.core.truth_(inst_32849__$1))
{var statearr_32901_33046 = state_32885__$1;(statearr_32901_33046[(1)] = (6));
} else
{var statearr_32902_33047 = state_32885__$1;(statearr_32902_33047[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32886 === (14)))
{var inst_32883 = (state_32885[(2)]);var state_32885__$1 = state_32885;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32885__$1,inst_32883);
} else
{if((state_val_32886 === (10)))
{var inst_32860 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32861 = ["!latest_turnvoer"];var inst_32862 = [new cljs.core.Keyword(null,"order","order",-1254677256)];var inst_32863 = ["desc"];var inst_32864 = cljs.core.PersistentHashMap.fromArrays(inst_32862,inst_32863);var inst_32865 = [inst_32864];var inst_32866 = cljs.core.PersistentHashMap.fromArrays(inst_32861,inst_32865);var inst_32867 = [inst_32866];var inst_32868 = (new cljs.core.PersistentVector(null,1,(5),inst_32860,inst_32867,null));var state_32885__$1 = state_32885;var statearr_32903_33048 = state_32885__$1;(statearr_32903_33048[(2)] = inst_32868);
(statearr_32903_33048[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32886 === (8)))
{var inst_32857 = (state_32885[(17)]);var inst_32856 = (state_32885[(2)]);var inst_32857__$1 = new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994).cljs$core$IFn$_invoke$arity$1(next_location);var state_32885__$1 = (function (){var statearr_32904 = state_32885;(statearr_32904[(17)] = inst_32857__$1);
(statearr_32904[(16)] = inst_32856);
return statearr_32904;
})();if(cljs.core.truth_(inst_32857__$1))
{var statearr_32905_33049 = state_32885__$1;(statearr_32905_33049[(1)] = (9));
} else
{var statearr_32906_33050 = state_32885__$1;(statearr_32906_33050[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___33034,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33034,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32910[(0)] = state_machine__9111__auto__);
(statearr_32910[(1)] = (1));
return statearr_32910;
});
var state_machine__9111__auto____1 = (function (state_32885){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32885);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32911){if((e32911 instanceof Object))
{var ex__9114__auto__ = e32911;var statearr_32912_33051 = state_32885;(statearr_32912_33051[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32885);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32911;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33052 = state_32885;
state_32885 = G__33052;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32885){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33034,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32913 = f__9126__auto__.call(null);(statearr_32913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33034);
return statearr_32913;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33034,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___33053 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33053,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33053,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32927){var state_val_32928 = (state_32927[(1)]);if((state_val_32928 === (5)))
{var inst_32925 = (state_32927[(2)]);var state_32927__$1 = state_32927;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32927__$1,inst_32925);
} else
{if((state_val_32928 === (4)))
{var state_32927__$1 = state_32927;var statearr_32929_33054 = state_32927__$1;(statearr_32929_33054[(2)] = null);
(statearr_32929_33054[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32928 === (3)))
{var inst_32917 = (state_32927[(7)]);var inst_32919 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32920 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976)];var inst_32921 = (new cljs.core.PersistentVector(null,3,(5),inst_32919,inst_32920,null));var inst_32922 = om.core.update_BANG_.call(null,self__.cursor,inst_32921,inst_32917);var state_32927__$1 = state_32927;var statearr_32930_33055 = state_32927__$1;(statearr_32930_33055[(2)] = inst_32922);
(statearr_32930_33055[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32928 === (2)))
{var inst_32917 = (state_32927[(7)]);var inst_32917__$1 = (state_32927[(2)]);var state_32927__$1 = (function (){var statearr_32931 = state_32927;(statearr_32931[(7)] = inst_32917__$1);
return statearr_32931;
})();if(cljs.core.truth_(inst_32917__$1))
{var statearr_32932_33056 = state_32927__$1;(statearr_32932_33056[(1)] = (3));
} else
{var statearr_32933_33057 = state_32927__$1;(statearr_32933_33057[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32928 === (1)))
{var inst_32914 = new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32915 = fetch_geotag_data_fn.call(null,inst_32914);var state_32927__$1 = state_32927;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32927__$1,(2),inst_32915);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33053,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33053,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32937 = [null,null,null,null,null,null,null,null];(statearr_32937[(0)] = state_machine__9111__auto__);
(statearr_32937[(1)] = (1));
return statearr_32937;
});
var state_machine__9111__auto____1 = (function (state_32927){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32927);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32938){if((e32938 instanceof Object))
{var ex__9114__auto__ = e32938;var statearr_32939_33058 = state_32927;(statearr_32939_33058[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32927);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32938;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33059 = state_32927;
state_32927 = G__33059;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32927){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33053,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32940 = f__9126__auto__.call(null);(statearr_32940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33053);
return statearr_32940;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33053,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);if(cljs.core.truth_(and__3627__auto____$1))
{var and__3627__auto____$2 = new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs).call(null,next_zoom);if(cljs.core.truth_(and__3627__auto____$2))
{return (cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs))) || (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__3627__auto____$2;
}
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___33060 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33060,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33060,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32959){var state_val_32960 = (state_32959[(1)]);if((state_val_32960 === (5)))
{var inst_32957 = (state_32959[(2)]);var state_32959__$1 = state_32959;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32959__$1,inst_32957);
} else
{if((state_val_32960 === (4)))
{var state_32959__$1 = state_32959;var statearr_32961_33061 = state_32959__$1;(statearr_32961_33061[(2)] = null);
(statearr_32961_33061[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32960 === (3)))
{var inst_32948 = (state_32959[(7)]);var inst_32950 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32951 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391)];var inst_32952 = (new cljs.core.PersistentVector(null,3,(5),inst_32950,inst_32951,null));var inst_32953 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32948);var inst_32954 = om.core.update_BANG_.call(null,self__.cursor,inst_32952,inst_32953);var state_32959__$1 = state_32959;var statearr_32962_33062 = state_32959__$1;(statearr_32962_33062[(2)] = inst_32954);
(statearr_32962_33062[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32960 === (2)))
{var inst_32948 = (state_32959[(7)]);var inst_32948__$1 = (state_32959[(2)]);var state_32959__$1 = (function (){var statearr_32963 = state_32959;(statearr_32963[(7)] = inst_32948__$1);
return statearr_32963;
})();if(cljs.core.truth_(inst_32948__$1))
{var statearr_32964_33063 = state_32959__$1;(statearr_32964_33063[(1)] = (3));
} else
{var statearr_32965_33064 = state_32959__$1;(statearr_32965_33064[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32960 === (1)))
{var inst_32941 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32942 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32943 = [next_filter];var inst_32944 = cljs.core.PersistentHashMap.fromArrays(inst_32942,inst_32943);var inst_32945 = cljs.core.merge.call(null,inst_32941,inst_32944);var inst_32946 = fetch_geotag_agg_data_fn.call(null,inst_32945);var state_32959__$1 = state_32959;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32959__$1,(2),inst_32946);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33060,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33060,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32969 = [null,null,null,null,null,null,null,null];(statearr_32969[(0)] = state_machine__9111__auto__);
(statearr_32969[(1)] = (1));
return statearr_32969;
});
var state_machine__9111__auto____1 = (function (state_32959){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32959);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32970){if((e32970 instanceof Object))
{var ex__9114__auto__ = e32970;var statearr_32971_33065 = state_32959;(statearr_32971_33065[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32959);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32970;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33066 = state_32959;
state_32959 = G__33066;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32959){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33060,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32972 = f__9126__auto__.call(null);(statearr_32972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33060);
return statearr_32972;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33060,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_bounds;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = next_geohash_aggs;if(cljs.core.truth_(and__3627__auto____$1))
{var and__3627__auto____$2 = new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);if(cljs.core.truth_(and__3627__auto____$2))
{var and__3627__auto____$3 = new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs).call(null,next_zoom);if(cljs.core.truth_(and__3627__auto____$3))
{return (cljs.core.not.call(null,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs))) || (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__3627__auto____$3;
}
} else
{return and__3627__auto____$2;
}
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___33067 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33067,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33067,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32993){var state_val_32994 = (state_32993[(1)]);if((state_val_32994 === (5)))
{var inst_32991 = (state_32993[(2)]);var state_32993__$1 = state_32993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32993__$1,inst_32991);
} else
{if((state_val_32994 === (4)))
{var state_32993__$1 = state_32993;var statearr_32995_33068 = state_32993__$1;(statearr_32995_33068[(2)] = null);
(statearr_32995_33068[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32994 === (3)))
{var inst_32982 = (state_32993[(7)]);var inst_32984 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32985 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493),new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620)];var inst_32986 = (new cljs.core.PersistentVector(null,3,(5),inst_32984,inst_32985,null));var inst_32987 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32982);var inst_32988 = om.core.update_BANG_.call(null,self__.cursor,inst_32986,inst_32987);var state_32993__$1 = state_32993;var statearr_32996_33069 = state_32993__$1;(statearr_32996_33069[(2)] = inst_32988);
(statearr_32996_33069[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32994 === (2)))
{var inst_32982 = (state_32993[(7)]);var inst_32982__$1 = (state_32993[(2)]);var state_32993__$1 = (function (){var statearr_32997 = state_32993;(statearr_32997[(7)] = inst_32982__$1);
return statearr_32997;
})();if(cljs.core.truth_(inst_32982__$1))
{var statearr_32998_33070 = state_32993__$1;(statearr_32998_33070[(1)] = (3));
} else
{var statearr_32999_33071 = state_32993__$1;(statearr_32999_33071[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32994 === (1)))
{var inst_32973 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32974 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"precision","precision",-1175707478)];var inst_32975 = new cljs.core.Keyword(null,"precision-fn","precision-fn",1742300693).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32976 = inst_32975.call(null,next_zoom);var inst_32977 = [next_filter,next_bounds,inst_32976];var inst_32978 = cljs.core.PersistentHashMap.fromArrays(inst_32974,inst_32977);var inst_32979 = cljs.core.merge.call(null,inst_32973,inst_32978);var inst_32980 = fetch_geohash_agg_data_fn.call(null,inst_32979);var state_32993__$1 = state_32993;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32993__$1,(2),inst_32980);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33067,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33067,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_33003 = [null,null,null,null,null,null,null,null];(statearr_33003[(0)] = state_machine__9111__auto__);
(statearr_33003[(1)] = (1));
return statearr_33003;
});
var state_machine__9111__auto____1 = (function (state_32993){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32993);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e33004){if((e33004 instanceof Object))
{var ex__9114__auto__ = e33004;var statearr_33005_33072 = state_32993;(statearr_33005_33072[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32993);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33004;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33073 = state_32993;
state_32993 = G__33073;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32993){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33067,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_33006 = f__9126__auto__.call(null);(statearr_33006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33067);
return statearr_33006;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33067,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_colorchooser;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = next_data;if(cljs.core.truth_(and__3627__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_data,self__.data)) || (cljs.core.not_EQ_.call(null,next_colorchooser,self__.colorchooser));
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var vec__33007_33074 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_33075 = cljs.core.nth.call(null,vec__33007_33074,(0),null);var selection_path_colours_33076 = cljs.core.nth.call(null,vec__33007_33074,(1),null);var update_paths_invocation_33077 = ((function (vec__33007_33074,new_threshold_colors_33075,selection_path_colours_33076,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_33076,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696),path_marker_click_fn,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575),next_boundaryline_fill_opacity], null));
});})(vec__33007_33074,new_threshold_colors_33075,selection_path_colours_33076,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_33075,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_33075);
} else
{}
var temp__4126__auto___33078 = update_paths_invocation_33077.call(null);if(cljs.core.truth_(temp__4126__auto___33078))
{var notify_chan_33079 = temp__4126__auto___33078;var c__9125__auto___33080 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33080,notify_chan_33079,temp__4126__auto___33078,vec__33007_33074,new_threshold_colors_33075,selection_path_colours_33076,update_paths_invocation_33077,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33080,notify_chan_33079,temp__4126__auto___33078,vec__33007_33074,new_threshold_colors_33075,selection_path_colours_33076,update_paths_invocation_33077,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_33012){var state_val_33013 = (state_33012[(1)]);if((state_val_33013 === (2)))
{var inst_33009 = (state_33012[(2)]);var inst_33010 = update_paths_invocation_33077.call(null);var state_33012__$1 = (function (){var statearr_33014 = state_33012;(statearr_33014[(7)] = inst_33009);
return statearr_33014;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33012__$1,inst_33010);
} else
{if((state_val_33013 === (1)))
{var state_33012__$1 = state_33012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33012__$1,(2),notify_chan_33079);
} else
{return null;
}
}
});})(c__9125__auto___33080,notify_chan_33079,temp__4126__auto___33078,vec__33007_33074,new_threshold_colors_33075,selection_path_colours_33076,update_paths_invocation_33077,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33080,notify_chan_33079,temp__4126__auto___33078,vec__33007_33074,new_threshold_colors_33075,selection_path_colours_33076,update_paths_invocation_33077,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_33018 = [null,null,null,null,null,null,null,null];(statearr_33018[(0)] = state_machine__9111__auto__);
(statearr_33018[(1)] = (1));
return statearr_33018;
});
var state_machine__9111__auto____1 = (function (state_33012){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_33012);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e33019){if((e33019 instanceof Object))
{var ex__9114__auto__ = e33019;var statearr_33020_33081 = state_33012;(statearr_33020_33081[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33012);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33019;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33082 = state_33012;
state_33012 = G__33082;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_33012){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_33012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33080,notify_chan_33079,temp__4126__auto___33078,vec__33007_33074,new_threshold_colors_33075,selection_path_colours_33076,update_paths_invocation_33077,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_33021 = f__9126__auto__.call(null);(statearr_33021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33080);
return statearr_33021;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33080,notify_chan_33079,temp__4126__auto___33078,vec__33007_33074,new_threshold_colors_33075,selection_path_colours_33076,update_paths_invocation_33077,map__32799,map__32799__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32800,map__32800__$1,map__32801,map__32801__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32794,map__32794__$1,next_cursor_data,map__32795,map__32795__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32796,map__32796__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32797,map__32797__$1,map__32798,map__32798__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
} else
{}
if((cljs.core.not_EQ_.call(null,next_show_points,self__.show_points)) || (cljs.core.not_EQ_.call(null,next_point_data,self__.point_data)) || (cljs.core.not_EQ_.call(null,next_location,self__.location)))
{clustermap.components.map.update_markers.call(null,self__.link_render_fn,leaflet_map,(cljs.core.truth_(new cljs.core.Keyword(null,"cluster","cluster",535175621).cljs$core$IFn$_invoke$arity$1(next_location))?leaflet_marker_cluster_group:null),next_markers,next_show_points,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_point_data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),next_location], null));
} else
{}
if((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(self__.geotag_aggs))) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391).cljs$core$IFn$_invoke$arity$1(self__.geotag_aggs))) || (zoom_changed) || (cljs.core.not_EQ_.call(null,next_point_data,self__.point_data)))
{clustermap.components.map.update_geotag_markers.call(null,leaflet_map,next_geotag_markers,next_geotag_aggs,cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_point_data)));
} else
{}
if((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs),new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620).cljs$core$IFn$_invoke$arity$1(self__.geohash_aggs))) || (zoom_changed) || (cljs.core.not_EQ_.call(null,next_point_data,self__.point_data)))
{return clustermap.components.map.update_geohash_markers.call(null,leaflet_map,next_geohash_markers,next_geohash_aggs,cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_point_data)));
} else
{return null;
}
});})(map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32787.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t32787.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__33022 = clustermap.components.map.create_map.call(null,node,self__.controls);var map__33022__$1 = ((cljs.core.seq_QMARK_.call(null,map__33022))?cljs.core.apply.call(null,cljs.core.hash_map,map__33022):map__33022);var map = map__33022__$1;var path = cljs.core.get.call(null,map__33022__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__33022__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__33022__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__33023 = om.core.get_shared.call(null,self__.owner);var map__33023__$1 = ((cljs.core.seq_QMARK_.call(null,map__33023))?cljs.core.apply.call(null,cljs.core.hash_map,map__33023):map__33023);var path_marker_click_fn = cljs.core.get.call(null,map__33023__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__33023__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__33023__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__33023__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,map__33022,map__33022__$1,map,path,markers,leaflet_map,map__33023,map__33023__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;var current_dims = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null);var props = om.core.get_props.call(null,self__.owner);var use_bounds = cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-state","map-state",-1227493550),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542)], null));if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),current_dims)))
{console.log("window size changed !");
leaflet_map.invalidateSize();
if(cljs.core.truth_(cljs.core.deref.call(null,last_dims)))
{} else
{console.log("first map show !");
if(cljs.core.truth_(use_bounds))
{clustermap.components.map.locate_map.call(null,leaflet_map,use_bounds);
} else
{}
}
return cljs.core.reset_BANG_.call(null,last_dims,current_dims);
} else
{return null;
}
});})(node,map__33022,map__33022__$1,map,path,markers,leaflet_map,map__33023,map__33023__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("moveend",((function (node,map__33022,map__33022__$1,map,path,markers,leaflet_map,map__33023,map__33023__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__33022,map__33022__$1,map,path,markers,leaflet_map,map__33023,map__33023__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupopen",((function (node,map__33022,map__33022__$1,map,path,markers,leaflet_map,map__33023,map__33023__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__33022,map__33022__$1,map,path,markers,leaflet_map,map__33023,map__33023__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__33022,map__33022__$1,map,path,markers,leaflet_map,map__33023,map__33023__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
});})(node,map__33022,map__33022__$1,map,path,markers,leaflet_map,map__33023,map__33023__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupclose",((function (node,map__33022,map__33022__$1,map,path,markers,leaflet_map,map__33023,map__33023__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__33022,map__33022__$1,map,path,markers,leaflet_map,map__33023,map__33023__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
if(cljs.core.truth_(path_marker_click_fn))
{leaflet_map.on("click",((function (node,map__33022,map__33022__$1,map,path,markers,leaflet_map,map__33023,map__33023__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return path_marker_click_fn.call(null,null);
});})(node,map__33022,map__33022__$1,map,path,markers,leaflet_map,map__33023,map__33023__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
jayq.core.$.call(null,node).on("click","a.boundaryline-popup-link",((function (node,map__33022,map__33022__$1,map,path,markers,leaflet_map,map__33023,map__33023__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var G__33024 = e;var G__33024__$1 = (((G__33024 == null))?null:G__33024.target);var G__33024__$2 = (((G__33024__$1 == null))?null:domina.attr.call(null,G__33024__$1,"data-boundaryline-id"));var G__33024__$3 = (((G__33024__$2 == null))?null:path_marker_click_fn.call(null,G__33024__$2));return G__33024__$3;
});})(node,map__33022,map__33022__$1,map,path,markers,leaflet_map,map__33023,map__33023__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
jayq.core.$.call(null,node).on("click","[data-onclick-id]",((function (node,map__33022,map__33022__$1,map,path,markers,leaflet_map,map__33023,map__33023__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var current_target = e.currentTarget;var handler_id = domina.attr.call(null,current_target,"data-onclick-id");var handler = clustermap.components.map.find_event_handler.call(null,handler_id);if(cljs.core.truth_(handler))
{return handler.call(null,e);
} else
{return null;
}
});})(node,map__33022,map__33022__$1,map,path,markers,leaflet_map,map__33023,map__33023__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532),clustermap.api.boundaryline_aggregation_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507),clustermap.api.location_lists_2_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950),clustermap.api.geotags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602),clustermap.api.nested_aggregation_factory.call(null));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986),clustermap.api.geohash_grid_factory.call(null));
});})(map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32787.prototype.om$core$IRender$ = true;
clustermap.components.map.t32787.prototype.om$core$IRender$render$arity$1 = ((function (map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32789){var self__ = this;
var _32789__$1 = this;return self__.meta32788;
});})(map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32789,meta32788__$1){var self__ = this;
var _32789__$1 = this;return (new clustermap.components.map.t32787(self__.p__32540,self__.colorchooser,self__.initial_bounds,self__.location,self__.map__32784,self__.owner,self__.map__32785,self__.data,self__.zoom,self__.map_options,self__.cursor_data,self__.geotag_aggs,self__.filter_spec,self__.map_component,self__.link_render_fn,self__.boundaryline_collections,self__.controls,self__.cursor,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.show_points,self__.link_click_fn,self__.filter,self__.geohash_aggs,self__.point_data,self__.map__32786,self__.boundaryline_agg,meta32788__$1));
});})(map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.__GT_t32787 = ((function (map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function __GT_t32787(p__32540__$1,colorchooser__$1,initial_bounds__$1,location__$1,map__32784__$2,owner__$1,map__32785__$2,data__$1,zoom__$1,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,geohash_aggs__$1,point_data__$1,map__32786__$2,boundaryline_agg__$1,meta32788){return (new clustermap.components.map.t32787(p__32540__$1,colorchooser__$1,initial_bounds__$1,location__$1,map__32784__$2,owner__$1,map__32785__$2,data__$1,zoom__$1,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,geohash_aggs__$1,point_data__$1,map__32786__$2,boundaryline_agg__$1,meta32788));
});})(map__32784,map__32784__$1,cursor_data,map__32785,map__32785__$1,cursor,data,point_data,boundaryline_collections,map__32786,map__32786__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
}
return (new clustermap.components.map.t32787(p__32540,colorchooser,initial_bounds,location,map__32784__$1,owner,map__32785__$1,data,zoom,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,cursor,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,geohash_aggs,point_data,map__32786__$1,boundaryline_agg,null));
});
