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
clustermap.components.map.default_api_key = (function (){var or__3639__auto__ = (function (){var G__32254 = config;var G__32254__$1 = (((G__32254 == null))?null:G__32254.components);var G__32254__$2 = (((G__32254__$1 == null))?null:G__32254__$1.map);var G__32254__$3 = (((G__32254__$2 == null))?null:G__32254__$2.api_key);return G__32254__$3;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,p__32255){var map__32257 = p__32255;var map__32257__$1 = ((cljs.core.seq_QMARK_.call(null,map__32257))?cljs.core.apply.call(null,cljs.core.hash_map,map__32257):map__32257);var api_key = cljs.core.get.call(null,map__32257__$1,new cljs.core.Keyword(null,"api-key","api-key",1037904031),clustermap.components.map.default_api_key);var map_options = cljs.core.get.call(null,map__32257__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var bounds = cljs.core.get.call(null,map__32257__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds = cljs.core.get.call(null,map__32257__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom_control = ((new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217).cljs$core$IFn$_invoke$arity$1(map_options) === false)?false:true);var m = L.map.call(null,id_or_el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,map_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),false,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(19)], null))));var tiles = L.mapbox.tileLayer.call(null,api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomleft"});var lmcg = L.markerClusterGroup.call(null,{"maxClusterRadius": (40)});m.addLayer(tiles);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__32258){
var m = cljs.core.first(arglist__32258);
var all_bounds = cljs.core.rest(arglist__32258);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.render_marker_icon = (function render_marker_icon(p__32259,location_sites){var map__32261 = p__32259;var map__32261__$1 = ((cljs.core.seq_QMARK_.call(null,map__32261))?cljs.core.apply.call(null,cljs.core.hash_map,map__32261):map__32261);var location_spec = map__32261__$1;var marker_render_fn = cljs.core.get.call(null,map__32261__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));if((cljs.core.count.call(null,location_sites) > (1)))
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
} else
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-single",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
}
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(item_render_fn,location_sites,location_site_click_handler_keys){return ("<ul class=\"location-marker-popup-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4377__auto__ = (function iter__32266(s__32267){return (new cljs.core.LazySeq(null,(function (){var s__32267__$1 = s__32267;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32267__$1);if(temp__4126__auto__)
{var s__32267__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32267__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32267__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32269 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32268 = (0);while(true){
if((i__32268 < size__4376__auto__))
{var site = cljs.core._nth.call(null,c__4375__auto__,i__32268);cljs.core.chunk_append.call(null,b__32269,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))));
{
var G__32270 = (i__32268 + (1));
i__32268 = G__32270;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32269),iter__32266.call(null,cljs.core.chunk_rest.call(null,s__32267__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32269),null);
}
} else
{var site = cljs.core.first.call(null,s__32267__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))),iter__32266.call(null,cljs.core.rest.call(null,s__32267__$2)));
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
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,location_sites,p__32271){var map__32276 = p__32271;var map__32276__$1 = ((cljs.core.seq_QMARK_.call(null,map__32276))?cljs.core.apply.call(null,cljs.core.hash_map,map__32276):map__32276);var map__32277 = cljs.core.get.call(null,map__32276__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__32277__$1 = ((cljs.core.seq_QMARK_.call(null,map__32277))?cljs.core.apply.call(null,cljs.core.hash_map,map__32277):map__32277);var location_spec = map__32277__$1;var item_click_fn = cljs.core.get.call(null,map__32277__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__32277__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__32277__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var temp__4124__auto__ = (function (){var G__32278 = location_sites;var G__32278__$1 = (((G__32278 == null))?null:cljs.core.first.call(null,G__32278));var G__32278__$2 = (((G__32278__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__32278__$1));var G__32278__$3 = (((G__32278__$2 == null))?null:cljs.core.reverse.call(null,G__32278__$2));var G__32278__$4 = (((G__32278__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__32278__$3));return G__32278__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__32276,map__32276__$1,map__32277,map__32277__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__32276,map__32276__$1,map__32277,map__32277__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);leaflet_marker.on("mouseover",((function (icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__32276,map__32276__$1,map__32277,map__32277__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (e){return leaflet_marker.openPopup();
});})(icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__32276,map__32276__$1,map__32277,map__32277__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
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
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4579__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_32279_32280 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32279_32280,sb__4579__auto__,temp__4124__auto__,map__32276,map__32276__$1,map__32277,map__32277__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (x__4580__auto__){return sb__4579__auto__.append(x__4580__auto__);
});})(_STAR_print_fn_STAR_32279_32280,sb__4579__auto__,temp__4124__auto__,map__32276,map__32276__$1,map__32277,map__32277__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32279_32280;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4579__auto__));
})())));
}
});
clustermap.components.map.remove_marker_event_handlers = (function remove_marker_event_handlers(p__32281){var map__32287 = p__32281;var map__32287__$1 = ((cljs.core.seq_QMARK_.call(null,map__32287))?cljs.core.apply.call(null,cljs.core.hash_map,map__32287):map__32287);var marker = map__32287__$1;var click_handler_keys = cljs.core.get.call(null,map__32287__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32287__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));clustermap.components.map.remove_event_handler.call(null,click_handler_key);
var seq__32288 = cljs.core.seq.call(null,click_handler_keys);var chunk__32289 = null;var count__32290 = (0);var i__32291 = (0);while(true){
if((i__32291 < count__32290))
{var chk = cljs.core._nth.call(null,chunk__32289,i__32291);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__32292 = seq__32288;
var G__32293 = chunk__32289;
var G__32294 = count__32290;
var G__32295 = (i__32291 + (1));
seq__32288 = G__32292;
chunk__32289 = G__32293;
count__32290 = G__32294;
i__32291 = G__32295;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32288);if(temp__4126__auto__)
{var seq__32288__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32288__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32288__$1);{
var G__32296 = cljs.core.chunk_rest.call(null,seq__32288__$1);
var G__32297 = c__4408__auto__;
var G__32298 = cljs.core.count.call(null,c__4408__auto__);
var G__32299 = (0);
seq__32288 = G__32296;
chunk__32289 = G__32297;
count__32290 = G__32298;
i__32291 = G__32299;
continue;
}
} else
{var chk = cljs.core.first.call(null,seq__32288__$1);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__32300 = cljs.core.next.call(null,seq__32288__$1);
var G__32301 = null;
var G__32302 = (0);
var G__32303 = (0);
seq__32288 = G__32300;
chunk__32289 = G__32301;
count__32290 = G__32302;
i__32291 = G__32303;
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
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,p__32304,location_sites,p__32305){var map__32309 = p__32304;var map__32309__$1 = ((cljs.core.seq_QMARK_.call(null,map__32309))?cljs.core.apply.call(null,cljs.core.hash_map,map__32309):map__32309);var marker = map__32309__$1;var click_handler_keys = cljs.core.get.call(null,map__32309__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32309__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32309__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var map__32310 = p__32305;var map__32310__$1 = ((cljs.core.seq_QMARK_.call(null,map__32310))?cljs.core.apply.call(null,cljs.core.hash_map,map__32310):map__32310);var map__32311 = cljs.core.get.call(null,map__32310__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__32311__$1 = ((cljs.core.seq_QMARK_.call(null,map__32311))?cljs.core.apply.call(null,cljs.core.hash_map,map__32311):map__32311);var location_spec = map__32311__$1;var item_click_fn = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,popup,map__32309,map__32309__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32310,map__32310__$1,map__32311,map__32311__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,popup,map__32309,map__32309__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32310,map__32310__$1,map__32311,map__32311__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);clustermap.components.map.remove_marker_event_handlers.call(null,marker);
leaflet_marker.setIcon(icon);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,item_render_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407)),new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys));
});
/**
* remove a marker from a cluster group or directly from the map
*/
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,leaflet_marker_cluster_group,p__32312){var map__32314 = p__32312;var map__32314__$1 = ((cljs.core.seq_QMARK_.call(null,map__32314))?cljs.core.apply.call(null,cljs.core.hash_map,map__32314):map__32314);var marker = map__32314__$1;var click_handler_keys = cljs.core.get.call(null,map__32314__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32314__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32314__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));clustermap.components.map.remove_marker_event_handlers.call(null,marker);
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
,update_marker_keys));var _ = (function (){var seq__32319 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32320 = null;var count__32321 = (0);var i__32322 = (0);while(true){
if((i__32322 < count__32321))
{var k = cljs.core._nth.call(null,chunk__32320,i__32322);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32323 = seq__32319;
var G__32324 = chunk__32320;
var G__32325 = count__32321;
var G__32326 = (i__32322 + (1));
seq__32319 = G__32323;
chunk__32320 = G__32324;
count__32321 = G__32325;
i__32322 = G__32326;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32319);if(temp__4126__auto__)
{var seq__32319__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32319__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32319__$1);{
var G__32327 = cljs.core.chunk_rest.call(null,seq__32319__$1);
var G__32328 = c__4408__auto__;
var G__32329 = cljs.core.count.call(null,c__4408__auto__);
var G__32330 = (0);
seq__32319 = G__32327;
chunk__32320 = G__32328;
count__32321 = G__32329;
i__32322 = G__32330;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32319__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32331 = cljs.core.next.call(null,seq__32319__$1);
var G__32332 = null;
var G__32333 = (0);
var G__32334 = (0);
seq__32319 = G__32331;
chunk__32320 = G__32332;
count__32321 = G__32333;
i__32322 = G__32334;
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
clustermap.components.map.marker_color_class = (function marker_color_class(n){var pred__32338 = cljs.core._EQ_;var expr__32339 = n;if(cljs.core.truth_(pred__32338.call(null,(0),expr__32339)))
{return "marker-cluster-small";
} else
{if(cljs.core.truth_(pred__32338.call(null,(1),expr__32339)))
{return "marker-cluster-medium";
} else
{if(cljs.core.truth_(pred__32338.call(null,(2),expr__32339)))
{return "marker-cluster-large";
} else
{return "marker-cluster-small";
}
}
}
});
clustermap.components.map.render_geotag_icon = (function render_geotag_icon(p__32341,geotag,geotag_agg){var map__32344 = p__32341;var map__32344__$1 = ((cljs.core.seq_QMARK_.call(null,map__32344))?cljs.core.apply.call(null,cljs.core.hash_map,map__32344):map__32344);var geotag_agg_spec = map__32344__$1;var colorchooser_fn = cljs.core.get.call(null,map__32344__$1,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899));var icon_render_fn = cljs.core.get.call(null,map__32344__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var color_value = colorchooser_fn.call(null,geotag_agg);return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),("marker-cluster "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.marker_color_class.call(null,color_value)))], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32345 = icon_render_fn.call(null,geotag,geotag_agg);if(cljs.core.map_QMARK_.call(null,attrs32345))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32345)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32345))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geotag_marker_popup_content = (function render_geotag_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))))));
});
clustermap.components.map.create_geotag_marker = (function create_geotag_marker(leaflet_map,p__32346,geotag,geotag_agg){var map__32348 = p__32346;var map__32348__$1 = ((cljs.core.seq_QMARK_.call(null,map__32348))?cljs.core.apply.call(null,cljs.core.hash_map,map__32348):map__32348);var geotag_agg_spec = map__32348__$1;var click_fn = cljs.core.get.call(null,map__32348__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32348__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32348__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(geotag),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(geotag)], null));var icon = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32348,map__32348__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32348,map__32348__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geotag_marker = (function update_geotag_marker(leaflet_map,p__32349,p__32350,geotag,geotag_agg){var map__32353 = p__32349;var map__32353__$1 = ((cljs.core.seq_QMARK_.call(null,map__32353))?cljs.core.apply.call(null,cljs.core.hash_map,map__32353):map__32353);var geotag_agg_spec = map__32353__$1;var click_fn = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32354 = p__32350;var map__32354__$1 = ((cljs.core.seq_QMARK_.call(null,map__32354))?cljs.core.apply.call(null,cljs.core.hash_map,map__32354):map__32354);var marker = map__32354__$1;var click_handler_key = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var icon_32355 = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var new_click_handler_key_32356 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setIcon(icon_32355);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32356);
return marker;
});
clustermap.components.map.update_geotag_markers = (function update_geotag_markers(leaflet_map,geotag_markers_atom,p__32357,points_showing_QMARK_){var map__32363 = p__32357;var map__32363__$1 = ((cljs.core.seq_QMARK_.call(null,map__32363))?cljs.core.apply.call(null,cljs.core.hash_map,map__32363):map__32363);var geotag_agg_spec = map__32363__$1;var geotag_agg_data = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391));var geotag_data = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976));var popup_render_fn = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var colorchooser_factory_fn = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307));var show_at_zoom_fn = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var colorchooser_fn = (cljs.core.truth_(colorchooser_factory_fn)?colorchooser_factory_fn.call(null,geotag_agg_data):cljs.core.constantly.call(null,(1)));var geotag_agg_spec__$1 = cljs.core.assoc.call(null,geotag_agg_spec,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899),colorchooser_fn);var geotags_by_tag = cljs.core.reduce.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,map__32363,map__32363__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (m,t){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(t),t);
});})(colorchooser_fn,geotag_agg_spec__$1,map__32363,map__32363__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_data);var geotag_aggs_by_tag = cljs.core.reduce.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,map__32363,map__32363__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (m,a){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226).cljs$core$IFn$_invoke$arity$1(a),a);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,map__32363,map__32363__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
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
})())?null:cljs.core.set.call(null,cljs.core.keys.call(null,geotag_aggs_by_tag)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32363,map__32363__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geotag_marker.call(null,leaflet_map,geotag_agg_spec__$1,cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32363,map__32363__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32363,map__32363__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geotag_marker.call(null,leaflet_map,geotag_agg_spec__$1,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32363,map__32363__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32364 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32365 = null;var count__32366 = (0);var i__32367 = (0);while(true){
if((i__32367 < count__32366))
{var k = cljs.core._nth.call(null,chunk__32365,i__32367);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32368 = seq__32364;
var G__32369 = chunk__32365;
var G__32370 = count__32366;
var G__32371 = (i__32367 + (1));
seq__32364 = G__32368;
chunk__32365 = G__32369;
count__32366 = G__32370;
i__32367 = G__32371;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32364);if(temp__4126__auto__)
{var seq__32364__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32364__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32364__$1);{
var G__32372 = cljs.core.chunk_rest.call(null,seq__32364__$1);
var G__32373 = c__4408__auto__;
var G__32374 = cljs.core.count.call(null,c__4408__auto__);
var G__32375 = (0);
seq__32364 = G__32372;
chunk__32365 = G__32373;
count__32366 = G__32374;
i__32367 = G__32375;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32364__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32376 = cljs.core.next.call(null,seq__32364__$1);
var G__32377 = null;
var G__32378 = (0);
var G__32379 = (0);
seq__32364 = G__32376;
chunk__32365 = G__32377;
count__32366 = G__32378;
i__32367 = G__32379;
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
clustermap.components.map.render_geohash_icon = (function render_geohash_icon(p__32380,geohash_agg){var map__32383 = p__32380;var map__32383__$1 = ((cljs.core.seq_QMARK_.call(null,map__32383))?cljs.core.apply.call(null,cljs.core.hash_map,map__32383):map__32383);var geohash_agg_spec = map__32383__$1;var colorchooser_fn = cljs.core.get.call(null,map__32383__$1,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899));var icon_render_fn = cljs.core.get.call(null,map__32383__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var color_value = colorchooser_fn.call(null,geohash_agg);return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),("marker-cluster "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.marker_color_class.call(null,color_value)))], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32384 = icon_render_fn.call(null,geohash_agg);if(cljs.core.map_QMARK_.call(null,attrs32384))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32384)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32384))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geohash_marker_popup_content = (function render_geohash_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32386 = content;if(cljs.core.map_QMARK_.call(null,attrs32386))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32386)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32386))+"</div>");
}
})())))));
});
/**
* we get bounds for the points contained in the geohash area, so take the
* center point as the marker point
*/
clustermap.components.map.geohash_center_point = (function geohash_center_point(p__32387){var map__32392 = p__32387;var map__32392__$1 = ((cljs.core.seq_QMARK_.call(null,map__32392))?cljs.core.apply.call(null,cljs.core.hash_map,map__32392):map__32392);var geohash_agg = map__32392__$1;var bounds = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var vec__32393 = bounds;var vec__32394 = cljs.core.nth.call(null,vec__32393,(0),null);var south = cljs.core.nth.call(null,vec__32394,(0),null);var west = cljs.core.nth.call(null,vec__32394,(1),null);var vec__32395 = cljs.core.nth.call(null,vec__32393,(1),null);var north = cljs.core.nth.call(null,vec__32395,(0),null);var east = cljs.core.nth.call(null,vec__32395,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((south + north) / (2)),((west + east) / (2))], null);
});
clustermap.components.map.create_geohash_marker = (function create_geohash_marker(leaflet_map,p__32396,geohash_agg){var map__32398 = p__32396;var map__32398__$1 = ((cljs.core.seq_QMARK_.call(null,map__32398))?cljs.core.apply.call(null,cljs.core.hash_map,map__32398):map__32398);var geohash_agg_spec = map__32398__$1;var click_fn = cljs.core.get.call(null,map__32398__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32398__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32398__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32398,map__32398__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32398,map__32398__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geohash_marker = (function update_geohash_marker(leaflet_map,p__32399,p__32400,geohash_agg){var map__32403 = p__32399;var map__32403__$1 = ((cljs.core.seq_QMARK_.call(null,map__32403))?cljs.core.apply.call(null,cljs.core.hash_map,map__32403):map__32403);var geohash_agg_spec = map__32403__$1;var click_fn = cljs.core.get.call(null,map__32403__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32403__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32403__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32404 = p__32400;var map__32404__$1 = ((cljs.core.seq_QMARK_.call(null,map__32404))?cljs.core.apply.call(null,cljs.core.hash_map,map__32404):map__32404);var marker = map__32404__$1;var click_handler_key = cljs.core.get.call(null,map__32404__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32404__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var latlong_32405 = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon_32406 = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var new_click_handler_key_32407 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setLatLng(latlong_32405);
leaflet_marker.setIcon(icon_32406);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32407);
return marker;
});
clustermap.components.map.update_geohash_markers = (function update_geohash_markers(leaflet_map,geohash_markers_atom,p__32408,points_showing_QMARK_){var map__32414 = p__32408;var map__32414__$1 = ((cljs.core.seq_QMARK_.call(null,map__32414))?cljs.core.apply.call(null,cljs.core.hash_map,map__32414):map__32414);var geohash_agg_spec = map__32414__$1;var geohash_agg_data = cljs.core.get.call(null,map__32414__$1,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620));var icon_render_fn = cljs.core.get.call(null,map__32414__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var colorchooser_factory_fn = cljs.core.get.call(null,map__32414__$1,new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307));var show_at_zoom_fn = cljs.core.get.call(null,map__32414__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var colorchooser_fn = (cljs.core.truth_(colorchooser_factory_fn)?colorchooser_factory_fn.call(null,geohash_agg_data):cljs.core.constantly.call(null,(1)));var geohash_agg_spec__$1 = cljs.core.assoc.call(null,geohash_agg_spec,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899),colorchooser_fn);var geohash_aggs_by_geohash = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,map__32414,map__32414__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (gha){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geohash-grid","geohash-grid",2001750091).cljs$core$IFn$_invoke$arity$1(gha),gha], null);
});})(colorchooser_fn,geohash_agg_spec__$1,map__32414,map__32414__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
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
})())?cljs.core.set.call(null,cljs.core.keys.call(null,geohash_aggs_by_geohash)):null);var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32414,map__32414__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geohash_marker.call(null,leaflet_map,geohash_agg_spec__$1,cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32414,map__32414__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32414,map__32414__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geohash_marker.call(null,leaflet_map,geohash_agg_spec__$1,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32414,map__32414__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32415 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32416 = null;var count__32417 = (0);var i__32418 = (0);while(true){
if((i__32418 < count__32417))
{var k = cljs.core._nth.call(null,chunk__32416,i__32418);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32419 = seq__32415;
var G__32420 = chunk__32416;
var G__32421 = count__32417;
var G__32422 = (i__32418 + (1));
seq__32415 = G__32419;
chunk__32416 = G__32420;
count__32417 = G__32421;
i__32418 = G__32422;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32415);if(temp__4126__auto__)
{var seq__32415__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32415__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32415__$1);{
var G__32423 = cljs.core.chunk_rest.call(null,seq__32415__$1);
var G__32424 = c__4408__auto__;
var G__32425 = cljs.core.count.call(null,c__4408__auto__);
var G__32426 = (0);
seq__32415 = G__32423;
chunk__32416 = G__32424;
count__32417 = G__32425;
i__32418 = G__32426;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32415__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32427 = cljs.core.next.call(null,seq__32415__$1);
var G__32428 = null;
var G__32429 = (0);
var G__32430 = (0);
seq__32415 = G__32427;
chunk__32416 = G__32428;
count__32417 = G__32429;
i__32418 = G__32430;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__32439 = cljs.core.js__GT_clj.call(null,envelope);var map__32439__$1 = ((cljs.core.seq_QMARK_.call(null,map__32439))?cljs.core.apply.call(null,cljs.core.hash_map,map__32439):map__32439);var clj_envelope = map__32439__$1;var vec__32440 = cljs.core.get.call(null,map__32439__$1,"coordinates");var vec__32441 = cljs.core.nth.call(null,vec__32440,(0),null);var vec__32442 = cljs.core.nth.call(null,vec__32441,(0),null);var miny0 = cljs.core.nth.call(null,vec__32442,(0),null);var minx0 = cljs.core.nth.call(null,vec__32442,(1),null);var vec__32443 = cljs.core.nth.call(null,vec__32441,(1),null);var maxy1 = cljs.core.nth.call(null,vec__32443,(0),null);var minx1 = cljs.core.nth.call(null,vec__32443,(1),null);var vec__32444 = cljs.core.nth.call(null,vec__32441,(2),null);var maxy2 = cljs.core.nth.call(null,vec__32444,(0),null);var maxx2 = cljs.core.nth.call(null,vec__32444,(1),null);var vec__32445 = cljs.core.nth.call(null,vec__32441,(3),null);var miny3 = cljs.core.nth.call(null,vec__32445,(0),null);var maxx3 = cljs.core.nth.call(null,vec__32445,(1),null);var vec__32446 = cljs.core.nth.call(null,vec__32441,(4),null);var miny4 = cljs.core.nth.call(null,vec__32446,(0),null);var minx4 = cljs.core.nth.call(null,vec__32446,(1),null);var inner = vec__32441;var coords = vec__32440;return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));
});
clustermap.components.map.boundary_marker_popup_content = (function boundary_marker_popup_content(path_fn,js_boundaryline){var bl_id = (js_boundaryline["id"]);var bl_name = (js_boundaryline["compact_name"]);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(path_fn)?path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-boundaryline","js-boundaryline",1803130691),js_boundaryline):"#"),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"boundaryline-popup-link"], null)))+"><span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-js-boundaryline-name"], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,bl_name))+"</span></a>");
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__32447,p__32448){var map__32451 = p__32447;var map__32451__$1 = ((cljs.core.seq_QMARK_.call(null,map__32451))?cljs.core.apply.call(null,cljs.core.hash_map,map__32451):map__32451);var fill_color = cljs.core.get.call(null,map__32451__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__32451__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__32451__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var map__32452 = p__32448;var map__32452__$1 = ((cljs.core.seq_QMARK_.call(null,map__32452))?cljs.core.apply.call(null,cljs.core.hash_map,map__32452):map__32452);var boundaryline_fill_opacity = cljs.core.get.call(null,map__32452__$1,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575),0.4);if(cljs.core.truth_((function (){var and__3627__auto__ = selected;if(cljs.core.truth_(and__3627__auto__))
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
var create_path__delegate = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32453,p__32454){var map__32458 = p__32453;var map__32458__$1 = ((cljs.core.seq_QMARK_.call(null,map__32458))?cljs.core.apply.call(null,cljs.core.hash_map,map__32458):map__32458);var path_attrs = map__32458__$1;var selected = cljs.core.get.call(null,map__32458__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var vec__32459 = p__32454;var map__32460 = cljs.core.nth.call(null,vec__32459,(0),null);var map__32460__$1 = ((cljs.core.seq_QMARK_.call(null,map__32460))?cljs.core.apply.call(null,cljs.core.hash_map,map__32460):map__32460);var opts = map__32460__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32460__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32460__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));var popup_content = clustermap.components.map.boundary_marker_popup_content.call(null,null,js_boundaryline);clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs,opts);
leaflet_path.addTo(leaflet_map);
leaflet_path.bindPopup(popup_content);
leaflet_path.on("dblclick",((function (tolerance,bounds,leaflet_path,popup_content,map__32458,map__32458__$1,path_attrs,selected,vec__32459,map__32460,map__32460__$1,opts,path_marker_click_fn,filter_spec){
return (function (e){leaflet_map.fitBounds(leaflet_path.getBounds());
if(cljs.core.truth_(path_marker_click_fn))
{return path_marker_click_fn.call(null,boundaryline_id);
} else
{return null;
}
});})(tolerance,bounds,leaflet_path,popup_content,map__32458,map__32458__$1,path_attrs,selected,vec__32459,map__32460,map__32460__$1,opts,path_marker_click_fn,filter_spec))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
};
var create_path = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32453,var_args){
var p__32454 = null;if (arguments.length > 5) {
  p__32454 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,js_boundaryline,p__32453,p__32454);};
create_path.cljs$lang$maxFixedArity = 5;
create_path.cljs$lang$applyTo = (function (arglist__32461){
var comm = cljs.core.first(arglist__32461);
arglist__32461 = cljs.core.next(arglist__32461);
var leaflet_map = cljs.core.first(arglist__32461);
arglist__32461 = cljs.core.next(arglist__32461);
var boundaryline_id = cljs.core.first(arglist__32461);
arglist__32461 = cljs.core.next(arglist__32461);
var js_boundaryline = cljs.core.first(arglist__32461);
arglist__32461 = cljs.core.next(arglist__32461);
var p__32453 = cljs.core.first(arglist__32461);
var p__32454 = cljs.core.rest(arglist__32461);
return create_path__delegate(comm,leaflet_map,boundaryline_id,js_boundaryline,p__32453,p__32454);
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
var fetch_create_path__delegate = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32462){var vec__32465 = p__32462;var map__32466 = cljs.core.nth.call(null,vec__32465,(0),null);var map__32466__$1 = ((cljs.core.seq_QMARK_.call(null,map__32466))?cljs.core.apply.call(null,cljs.core.hash_map,map__32466):map__32466);var opts = map__32466__$1;var filter_spec = cljs.core.get.call(null,map__32466__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs,opts);
};
var fetch_create_path = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,var_args){
var p__32462 = null;if (arguments.length > 6) {
  p__32462 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return fetch_create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32462);};
fetch_create_path.cljs$lang$maxFixedArity = 6;
fetch_create_path.cljs$lang$applyTo = (function (arglist__32467){
var comm = cljs.core.first(arglist__32467);
arglist__32467 = cljs.core.next(arglist__32467);
var leaflet_map = cljs.core.first(arglist__32467);
arglist__32467 = cljs.core.next(arglist__32467);
var boundaryline_id = cljs.core.first(arglist__32467);
arglist__32467 = cljs.core.next(arglist__32467);
var tolerance = cljs.core.first(arglist__32467);
arglist__32467 = cljs.core.next(arglist__32467);
var js_boundaryline = cljs.core.first(arglist__32467);
arglist__32467 = cljs.core.next(arglist__32467);
var path_attrs = cljs.core.first(arglist__32467);
var p__32462 = cljs.core.rest(arglist__32467);
return fetch_create_path__delegate(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32462);
});
fetch_create_path.cljs$core$IFn$_invoke$arity$variadic = fetch_create_path__delegate;
return fetch_create_path;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.map.replace_path = (function() { 
var replace_path__delegate = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32468){var vec__32471 = p__32468;var map__32472 = cljs.core.nth.call(null,vec__32471,(0),null);var map__32472__$1 = ((cljs.core.seq_QMARK_.call(null,map__32472))?cljs.core.apply.call(null,cljs.core.hash_map,map__32472):map__32472);var opts = map__32472__$1;var filter_spec = cljs.core.get.call(null,map__32472__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs,opts);
};
var replace_path = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,var_args){
var p__32468 = null;if (arguments.length > 6) {
  p__32468 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return replace_path__delegate.call(this,comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32468);};
replace_path.cljs$lang$maxFixedArity = 6;
replace_path.cljs$lang$applyTo = (function (arglist__32473){
var comm = cljs.core.first(arglist__32473);
arglist__32473 = cljs.core.next(arglist__32473);
var leaflet_map = cljs.core.first(arglist__32473);
arglist__32473 = cljs.core.next(arglist__32473);
var boundaryline_id = cljs.core.first(arglist__32473);
arglist__32473 = cljs.core.next(arglist__32473);
var old_path = cljs.core.first(arglist__32473);
arglist__32473 = cljs.core.next(arglist__32473);
var js_boundaryline = cljs.core.first(arglist__32473);
arglist__32473 = cljs.core.next(arglist__32473);
var path_attrs = cljs.core.first(arglist__32473);
var p__32468 = cljs.core.rest(arglist__32473);
return replace_path__delegate(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32468);
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
var update_path__delegate = function (comm,leaflet_map,p__32474,tolerance,js_boundaryline,path_attrs,p__32475){var map__32479 = p__32474;var map__32479__$1 = ((cljs.core.seq_QMARK_.call(null,map__32479))?cljs.core.apply.call(null,cljs.core.hash_map,map__32479):map__32479);var path = map__32479__$1;var boundaryline_id = cljs.core.get.call(null,map__32479__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__32480 = p__32475;var map__32481 = cljs.core.nth.call(null,vec__32480,(0),null);var map__32481__$1 = ((cljs.core.seq_QMARK_.call(null,map__32481))?cljs.core.apply.call(null,cljs.core.hash_map,map__32481):map__32481);var opts = map__32481__$1;var filter_spec = cljs.core.get.call(null,map__32481__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs,opts);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs,opts);
return path;
}
};
var update_path = function (comm,leaflet_map,p__32474,tolerance,js_boundaryline,path_attrs,var_args){
var p__32475 = null;if (arguments.length > 6) {
  p__32475 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return update_path__delegate.call(this,comm,leaflet_map,p__32474,tolerance,js_boundaryline,path_attrs,p__32475);};
update_path.cljs$lang$maxFixedArity = 6;
update_path.cljs$lang$applyTo = (function (arglist__32482){
var comm = cljs.core.first(arglist__32482);
arglist__32482 = cljs.core.next(arglist__32482);
var leaflet_map = cljs.core.first(arglist__32482);
arglist__32482 = cljs.core.next(arglist__32482);
var p__32474 = cljs.core.first(arglist__32482);
arglist__32482 = cljs.core.next(arglist__32482);
var tolerance = cljs.core.first(arglist__32482);
arglist__32482 = cljs.core.next(arglist__32482);
var js_boundaryline = cljs.core.first(arglist__32482);
arglist__32482 = cljs.core.next(arglist__32482);
var path_attrs = cljs.core.first(arglist__32482);
var p__32475 = cljs.core.rest(arglist__32482);
return update_path__delegate(comm,leaflet_map,p__32474,tolerance,js_boundaryline,path_attrs,p__32475);
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
var update_paths__delegate = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32483){var vec__32499 = p__32483;var map__32500 = cljs.core.nth.call(null,vec__32499,(0),null);var map__32500__$1 = ((cljs.core.seq_QMARK_.call(null,map__32500))?cljs.core.apply.call(null,cljs.core.hash_map,map__32500):map__32500);var opts = map__32500__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32500__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32500__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__32501 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__32501,(0),null);var notifychan = cljs.core.nth.call(null,vec__32501,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32501,tolerance_paths,notifychan,vec__32499,map__32500,map__32500__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32502){var vec__32503 = p__32502;var k = cljs.core.nth.call(null,vec__32503,(0),null);var tolerance = cljs.core.nth.call(null,vec__32503,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32503,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32501,tolerance_paths,notifychan,vec__32499,map__32500,map__32500__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32501,tolerance_paths,notifychan,vec__32499,map__32500,map__32500__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32504 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32504,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32504,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32501,tolerance_paths,notifychan,vec__32499,map__32500,map__32500__$1,opts,path_marker_click_fn,filter_spec))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32501,tolerance_paths,notifychan,created_paths,vec__32499,map__32500,map__32500__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32505){var vec__32506 = p__32505;var k = cljs.core.nth.call(null,vec__32506,(0),null);var tolerance = cljs.core.nth.call(null,vec__32506,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32506,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32501,tolerance_paths,notifychan,created_paths,vec__32499,map__32500,map__32500__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32501,tolerance_paths,notifychan,created_paths,vec__32499,map__32500,map__32500__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32507 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32507,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32507,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32501,tolerance_paths,notifychan,created_paths,vec__32499,map__32500,map__32500__$1,opts,path_marker_click_fn,filter_spec))
,update_path_keys)));var ___$1 = (function (){var seq__32508 = cljs.core.seq.call(null,delete_path_keys);var chunk__32509 = null;var count__32510 = (0);var i__32511 = (0);while(true){
if((i__32511 < count__32510))
{var k = cljs.core._nth.call(null,chunk__32509,i__32511);var temp__4124__auto___32514 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32514))
{var path_32515 = temp__4124__auto___32514;clustermap.components.map.delete_path.call(null,leaflet_map,path_32515);
} else
{}
{
var G__32516 = seq__32508;
var G__32517 = chunk__32509;
var G__32518 = count__32510;
var G__32519 = (i__32511 + (1));
seq__32508 = G__32516;
chunk__32509 = G__32517;
count__32510 = G__32518;
i__32511 = G__32519;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32508);if(temp__4126__auto__)
{var seq__32508__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32508__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32508__$1);{
var G__32520 = cljs.core.chunk_rest.call(null,seq__32508__$1);
var G__32521 = c__4408__auto__;
var G__32522 = cljs.core.count.call(null,c__4408__auto__);
var G__32523 = (0);
seq__32508 = G__32520;
chunk__32509 = G__32521;
count__32510 = G__32522;
i__32511 = G__32523;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32508__$1);var temp__4124__auto___32524 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32524))
{var path_32525 = temp__4124__auto___32524;clustermap.components.map.delete_path.call(null,leaflet_map,path_32525);
} else
{}
{
var G__32526 = cljs.core.next.call(null,seq__32508__$1);
var G__32527 = null;
var G__32528 = (0);
var G__32529 = (0);
seq__32508 = G__32526;
chunk__32509 = G__32527;
count__32510 = G__32528;
i__32511 = G__32529;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32501,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32499,map__32500,map__32500__$1,opts,path_marker_click_fn,filter_spec){
return (function (m,p__32512){var map__32513 = p__32512;var map__32513__$1 = ((cljs.core.seq_QMARK_.call(null,map__32513))?cljs.core.apply.call(null,cljs.core.hash_map,map__32513):map__32513);var path = map__32513__$1;var id = cljs.core.get.call(null,map__32513__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32501,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32499,map__32500,map__32500__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
};
var update_paths = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,var_args){
var p__32483 = null;if (arguments.length > 7) {
  p__32483 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return update_paths__delegate.call(this,comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32483);};
update_paths.cljs$lang$maxFixedArity = 7;
update_paths.cljs$lang$applyTo = (function (arglist__32530){
var comm = cljs.core.first(arglist__32530);
arglist__32530 = cljs.core.next(arglist__32530);
var fetch_boundarylines_fn = cljs.core.first(arglist__32530);
arglist__32530 = cljs.core.next(arglist__32530);
var leaflet_map = cljs.core.first(arglist__32530);
arglist__32530 = cljs.core.next(arglist__32530);
var paths_atom = cljs.core.first(arglist__32530);
arglist__32530 = cljs.core.next(arglist__32530);
var path_selections_atom = cljs.core.first(arglist__32530);
arglist__32530 = cljs.core.next(arglist__32530);
var new_path_highlights = cljs.core.first(arglist__32530);
arglist__32530 = cljs.core.next(arglist__32530);
var new_selection_paths = cljs.core.first(arglist__32530);
var p__32483 = cljs.core.rest(arglist__32530);
return update_paths__delegate(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32483);
});
update_paths.cljs$core$IFn$_invoke$arity$variadic = update_paths__delegate;
return update_paths;
})()
;
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__32533){var vec__32534 = p__32533;var tz = cljs.core.nth.call(null,vec__32534,(0),null);var collection = cljs.core.nth.call(null,vec__32534,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__32535,owner){var map__32779 = p__32535;var map__32779__$1 = ((cljs.core.seq_QMARK_.call(null,map__32779))?cljs.core.apply.call(null,cljs.core.hash_map,map__32779):map__32779);var cursor_data = map__32779__$1;var map__32780 = cljs.core.get.call(null,map__32779__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32780__$1 = ((cljs.core.seq_QMARK_.call(null,map__32780))?cljs.core.apply.call(null,cljs.core.hash_map,map__32780):map__32780);var cursor = map__32780__$1;var data = cljs.core.get.call(null,map__32780__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__32780__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__32780__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32781 = cljs.core.get.call(null,map__32780__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32781__$1 = ((cljs.core.seq_QMARK_.call(null,map__32781))?cljs.core.apply.call(null,cljs.core.hash_map,map__32781):map__32781);var controls = map__32781__$1;var colorchooser = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var initial_bounds = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var location = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"location","location",1815599388));var zoom = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var map_options = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var geotag_aggs = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var link_render_fn = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var threshold_colors = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var bounds = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_collection = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var show_points = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var link_click_fn = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var geohash_aggs = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var boundaryline_agg = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var filter_spec = cljs.core.get.call(null,map__32779__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var filter = cljs.core.get.call(null,map__32779__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.map.t32782 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t32782 = (function (colorchooser,initial_bounds,location,map__32781,owner,data,zoom,map_options,cursor_data,geotag_aggs,filter_spec,map__32779,map_component,link_render_fn,boundaryline_collections,controls,cursor,map__32780,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,p__32535,geohash_aggs,point_data,boundaryline_agg,meta32783){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.location = location;
this.map__32781 = map__32781;
this.owner = owner;
this.data = data;
this.zoom = zoom;
this.map_options = map_options;
this.cursor_data = cursor_data;
this.geotag_aggs = geotag_aggs;
this.filter_spec = filter_spec;
this.map__32779 = map__32779;
this.map_component = map_component;
this.link_render_fn = link_render_fn;
this.boundaryline_collections = boundaryline_collections;
this.controls = controls;
this.cursor = cursor;
this.map__32780 = map__32780;
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.boundaryline_collection = boundaryline_collection;
this.show_points = show_points;
this.link_click_fn = link_click_fn;
this.filter = filter;
this.p__32535 = p__32535;
this.geohash_aggs = geohash_aggs;
this.point_data = point_data;
this.boundaryline_agg = boundaryline_agg;
this.meta32783 = meta32783;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t32782.cljs$lang$type = true;
clustermap.components.map.t32782.cljs$lang$ctorStr = "clustermap.components.map/t32782";
clustermap.components.map.t32782.cljs$lang$ctorPrWriter = ((function (map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map/t32782");
});})(map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32782.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t32782.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,node).off();
domina.events.unlisten_BANG_.call(null,node);
domina.events.unlisten_BANG_.call(null,"clustermap-change-view");
var map__32785 = om.core.get_state.call(null,self__.owner);var map__32785__$1 = ((cljs.core.seq_QMARK_.call(null,map__32785))?cljs.core.apply.call(null,cljs.core.hash_map,map__32785):map__32785);var map__32786 = cljs.core.get.call(null,map__32785__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32786__$1 = ((cljs.core.seq_QMARK_.call(null,map__32786))?cljs.core.apply.call(null,cljs.core.hash_map,map__32786):map__32786);var path_selections = cljs.core.get.call(null,map__32786__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32786__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32786__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32786__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));return leaflet_map.remove();
});})(map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32782.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t32782.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$,p__32787,p__32788){var self__ = this;
var map__32789 = p__32787;var map__32789__$1 = ((cljs.core.seq_QMARK_.call(null,map__32789))?cljs.core.apply.call(null,cljs.core.hash_map,map__32789):map__32789);var next_cursor_data = map__32789__$1;var map__32790 = cljs.core.get.call(null,map__32789__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32790__$1 = ((cljs.core.seq_QMARK_.call(null,map__32790))?cljs.core.apply.call(null,cljs.core.hash_map,map__32790):map__32790);var next_cursor = map__32790__$1;var next_data = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32791 = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32791__$1 = ((cljs.core.seq_QMARK_.call(null,map__32791))?cljs.core.apply.call(null,cljs.core.hash_map,map__32791):map__32791);var next_colorchooser = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_collection = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_boundaryline_fill_opacity = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575));var next_zoom = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_threshold_colors = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var next_geotag_aggs = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var next_bounds = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_geohash_aggs = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var next_boundaryline_agg = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_location = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"location","location",1815599388));var next_show_points = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var next_filter = cljs.core.get.call(null,map__32789__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_filter_spec = cljs.core.get.call(null,map__32789__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32792 = p__32788;var map__32792__$1 = ((cljs.core.seq_QMARK_.call(null,map__32792))?cljs.core.apply.call(null,cljs.core.hash_map,map__32792):map__32792);var map__32793 = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32793__$1 = ((cljs.core.seq_QMARK_.call(null,map__32793))?cljs.core.apply.call(null,cljs.core.hash_map,map__32793):map__32793);var next_markers = cljs.core.get.call(null,map__32793__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_geotag_markers = cljs.core.get.call(null,map__32793__$1,new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648));var next_geohash_markers = cljs.core.get.call(null,map__32793__$1,new cljs.core.Keyword(null,"geohash-markers","geohash-markers",-1063983705));var next_paths = cljs.core.get.call(null,map__32793__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__32793__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var fetch_aggregation_data_fn = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532));var fetch_point_data_fn = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507));var fetch_geotag_data_fn = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950));var fetch_geotag_agg_data_fn = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602));var fetch_geohash_agg_data_fn = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986));var this$__$1 = this;var map__32794 = om.core.get_shared.call(null,self__.owner);var map__32794__$1 = ((cljs.core.seq_QMARK_.call(null,map__32794))?cljs.core.apply.call(null,cljs.core.hash_map,map__32794):map__32794);var path_marker_click_fn = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__32795 = om.core.get_state.call(null,self__.owner);var map__32795__$1 = ((cljs.core.seq_QMARK_.call(null,map__32795))?cljs.core.apply.call(null,cljs.core.hash_map,map__32795):map__32795);var map__32796 = cljs.core.get.call(null,map__32795__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32796__$1 = ((cljs.core.seq_QMARK_.call(null,map__32796))?cljs.core.apply.call(null,cljs.core.hash_map,map__32796):map__32796);var path_selections = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_marker_cluster_group = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671));var leaflet_map = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__32795__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__32795__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var zoom_changed = cljs.core.not_EQ_.call(null,next_zoom,self__.zoom);if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
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
{var c__9125__auto___33022 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33022,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33022,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32819){var state_val_32820 = (state_32819[(1)]);if((state_val_32820 === (5)))
{var inst_32817 = (state_32819[(2)]);var state_32819__$1 = state_32819;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32819__$1,inst_32817);
} else
{if((state_val_32820 === (4)))
{var state_32819__$1 = state_32819;var statearr_32821_33023 = state_32819__$1;(statearr_32821_33023[(2)] = null);
(statearr_32821_33023[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32820 === (3)))
{var inst_32809 = (state_32819[(7)]);var inst_32811 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32812 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_32813 = (new cljs.core.PersistentVector(null,1,(5),inst_32811,inst_32812,null));var inst_32814 = om.core.update_BANG_.call(null,self__.cursor,inst_32813,inst_32809);var state_32819__$1 = state_32819;var statearr_32822_33024 = state_32819__$1;(statearr_32822_33024[(2)] = inst_32814);
(statearr_32822_33024[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32820 === (2)))
{var inst_32809 = (state_32819[(7)]);var inst_32809__$1 = (state_32819[(2)]);var state_32819__$1 = (function (){var statearr_32823 = state_32819;(statearr_32823[(7)] = inst_32809__$1);
return statearr_32823;
})();if(cljs.core.truth_(inst_32809__$1))
{var statearr_32824_33025 = state_32819__$1;(statearr_32824_33025[(1)] = (3));
} else
{var statearr_32825_33026 = state_32819__$1;(statearr_32825_33026[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32820 === (1)))
{var inst_32797 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32798 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32799 = leaflet_map.getZoom();var inst_32800 = clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,inst_32799);var inst_32801 = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32802 = om.core._value.call(null,next_filter);var inst_32803 = leaflet_map.getBounds();var inst_32804 = clustermap.components.map.bounds_array.call(null,inst_32803);var inst_32805 = new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32806 = new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32807 = fetch_aggregation_data_fn.call(null,inst_32797,inst_32798,inst_32800,inst_32801,inst_32802,inst_32804,inst_32805,inst_32806);var state_32819__$1 = state_32819;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32819__$1,(2),inst_32807);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33022,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33022,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32829 = [null,null,null,null,null,null,null,null];(statearr_32829[(0)] = state_machine__9111__auto__);
(statearr_32829[(1)] = (1));
return statearr_32829;
});
var state_machine__9111__auto____1 = (function (state_32819){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32819);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32830){if((e32830 instanceof Object))
{var ex__9114__auto__ = e32830;var statearr_32831_33027 = state_32819;(statearr_32831_33027[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32819);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32830;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33028 = state_32819;
state_32819 = G__33028;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32819){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33022,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32832 = f__9126__auto__.call(null);(statearr_32832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33022);
return statearr_32832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33022,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
var c__9125__auto___33029 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33029,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33029,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32880){var state_val_32881 = (state_32880[(1)]);if((state_val_32881 === (7)))
{var inst_32847 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32848 = ["?natural_id","!name","!location","!latest_employee_count","!latest_turnover","!total_funding"];var inst_32849 = (new cljs.core.PersistentVector(null,6,(5),inst_32847,inst_32848,null));var state_32880__$1 = state_32880;var statearr_32882_33030 = state_32880__$1;(statearr_32882_33030[(2)] = inst_32849);
(statearr_32882_33030[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32881 === (1)))
{var inst_32839 = (state_32880[(7)]);var inst_32833 = [new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"location-attr","location-attr",-1350680971),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.Keyword(null,"max-count","max-count",1539185305)];var inst_32834 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32835 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32836 = om.core._value.call(null,next_filter);var inst_32837 = leaflet_map.getBounds();var inst_32838 = clustermap.components.map.bounds_array.call(null,inst_32837);var inst_32839__$1 = new cljs.core.Keyword(null,"location-attr","location-attr",-1350680971).cljs$core$IFn$_invoke$arity$1(next_location);var state_32880__$1 = (function (){var statearr_32883 = state_32880;(statearr_32883[(8)] = inst_32836);
(statearr_32883[(9)] = inst_32835);
(statearr_32883[(10)] = inst_32833);
(statearr_32883[(11)] = inst_32838);
(statearr_32883[(12)] = inst_32834);
(statearr_32883[(7)] = inst_32839__$1);
return statearr_32883;
})();if(cljs.core.truth_(inst_32839__$1))
{var statearr_32884_33031 = state_32880__$1;(statearr_32884_33031[(1)] = (3));
} else
{var statearr_32885_33032 = state_32880__$1;(statearr_32885_33032[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32881 === (4)))
{var state_32880__$1 = state_32880;var statearr_32886_33033 = state_32880__$1;(statearr_32886_33033[(2)] = "!location");
(statearr_32886_33033[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32881 === (13)))
{var state_32880__$1 = state_32880;var statearr_32887_33034 = state_32880__$1;(statearr_32887_33034[(2)] = null);
(statearr_32887_33034[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32881 === (6)))
{var inst_32844 = (state_32880[(13)]);var state_32880__$1 = state_32880;var statearr_32888_33035 = state_32880__$1;(statearr_32888_33035[(2)] = inst_32844);
(statearr_32888_33035[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32881 === (3)))
{var inst_32839 = (state_32880[(7)]);var state_32880__$1 = state_32880;var statearr_32889_33036 = state_32880__$1;(statearr_32889_33036[(2)] = inst_32839);
(statearr_32889_33036[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32881 === (12)))
{var inst_32870 = (state_32880[(14)]);var inst_32872 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32873 = [new cljs.core.Keyword(null,"point-data","point-data",-1294572970)];var inst_32874 = (new cljs.core.PersistentVector(null,1,(5),inst_32872,inst_32873,null));var inst_32875 = om.core.update_BANG_.call(null,self__.cursor,inst_32874,inst_32870);var state_32880__$1 = state_32880;var statearr_32890_33037 = state_32880__$1;(statearr_32890_33037[(2)] = inst_32875);
(statearr_32890_33037[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32881 === (2)))
{var inst_32870 = (state_32880[(14)]);var inst_32870__$1 = (state_32880[(2)]);var state_32880__$1 = (function (){var statearr_32891 = state_32880;(statearr_32891[(14)] = inst_32870__$1);
return statearr_32891;
})();if(cljs.core.truth_(inst_32870__$1))
{var statearr_32892_33038 = state_32880__$1;(statearr_32892_33038[(1)] = (12));
} else
{var statearr_32893_33039 = state_32880__$1;(statearr_32893_33039[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32881 === (11)))
{var inst_32836 = (state_32880[(8)]);var inst_32843 = (state_32880[(15)]);var inst_32835 = (state_32880[(9)]);var inst_32833 = (state_32880[(10)]);var inst_32838 = (state_32880[(11)]);var inst_32834 = (state_32880[(12)]);var inst_32851 = (state_32880[(16)]);var inst_32865 = (state_32880[(2)]);var inst_32866 = [inst_32834,inst_32835,inst_32836,inst_32838,inst_32843,inst_32851,inst_32865,(1000)];var inst_32867 = cljs.core.PersistentHashMap.fromArrays(inst_32833,inst_32866);var inst_32868 = fetch_point_data_fn.call(null,inst_32867);var state_32880__$1 = state_32880;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32880__$1,(2),inst_32868);
} else
{if((state_val_32881 === (9)))
{var inst_32852 = (state_32880[(17)]);var state_32880__$1 = state_32880;var statearr_32894_33040 = state_32880__$1;(statearr_32894_33040[(2)] = inst_32852);
(statearr_32894_33040[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32881 === (5)))
{var inst_32844 = (state_32880[(13)]);var inst_32843 = (state_32880[(2)]);var inst_32844__$1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(next_location);var state_32880__$1 = (function (){var statearr_32895 = state_32880;(statearr_32895[(15)] = inst_32843);
(statearr_32895[(13)] = inst_32844__$1);
return statearr_32895;
})();if(cljs.core.truth_(inst_32844__$1))
{var statearr_32896_33041 = state_32880__$1;(statearr_32896_33041[(1)] = (6));
} else
{var statearr_32897_33042 = state_32880__$1;(statearr_32897_33042[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32881 === (14)))
{var inst_32878 = (state_32880[(2)]);var state_32880__$1 = state_32880;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32880__$1,inst_32878);
} else
{if((state_val_32881 === (10)))
{var inst_32855 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32856 = ["!latest_turnvoer"];var inst_32857 = [new cljs.core.Keyword(null,"order","order",-1254677256)];var inst_32858 = ["desc"];var inst_32859 = cljs.core.PersistentHashMap.fromArrays(inst_32857,inst_32858);var inst_32860 = [inst_32859];var inst_32861 = cljs.core.PersistentHashMap.fromArrays(inst_32856,inst_32860);var inst_32862 = [inst_32861];var inst_32863 = (new cljs.core.PersistentVector(null,1,(5),inst_32855,inst_32862,null));var state_32880__$1 = state_32880;var statearr_32898_33043 = state_32880__$1;(statearr_32898_33043[(2)] = inst_32863);
(statearr_32898_33043[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32881 === (8)))
{var inst_32852 = (state_32880[(17)]);var inst_32851 = (state_32880[(2)]);var inst_32852__$1 = new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994).cljs$core$IFn$_invoke$arity$1(next_location);var state_32880__$1 = (function (){var statearr_32899 = state_32880;(statearr_32899[(16)] = inst_32851);
(statearr_32899[(17)] = inst_32852__$1);
return statearr_32899;
})();if(cljs.core.truth_(inst_32852__$1))
{var statearr_32900_33044 = state_32880__$1;(statearr_32900_33044[(1)] = (9));
} else
{var statearr_32901_33045 = state_32880__$1;(statearr_32901_33045[(1)] = (10));
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
});})(c__9125__auto___33029,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33029,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32905[(0)] = state_machine__9111__auto__);
(statearr_32905[(1)] = (1));
return statearr_32905;
});
var state_machine__9111__auto____1 = (function (state_32880){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32880);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32906){if((e32906 instanceof Object))
{var ex__9114__auto__ = e32906;var statearr_32907_33046 = state_32880;(statearr_32907_33046[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32880);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32906;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33047 = state_32880;
state_32880 = G__33047;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32880){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33029,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32908 = f__9126__auto__.call(null);(statearr_32908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33029);
return statearr_32908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33029,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___33048 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33048,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33048,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32922){var state_val_32923 = (state_32922[(1)]);if((state_val_32923 === (5)))
{var inst_32920 = (state_32922[(2)]);var state_32922__$1 = state_32922;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32922__$1,inst_32920);
} else
{if((state_val_32923 === (4)))
{var state_32922__$1 = state_32922;var statearr_32924_33049 = state_32922__$1;(statearr_32924_33049[(2)] = null);
(statearr_32924_33049[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32923 === (3)))
{var inst_32912 = (state_32922[(7)]);var inst_32914 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32915 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976)];var inst_32916 = (new cljs.core.PersistentVector(null,3,(5),inst_32914,inst_32915,null));var inst_32917 = om.core.update_BANG_.call(null,self__.cursor,inst_32916,inst_32912);var state_32922__$1 = state_32922;var statearr_32925_33050 = state_32922__$1;(statearr_32925_33050[(2)] = inst_32917);
(statearr_32925_33050[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32923 === (2)))
{var inst_32912 = (state_32922[(7)]);var inst_32912__$1 = (state_32922[(2)]);var state_32922__$1 = (function (){var statearr_32926 = state_32922;(statearr_32926[(7)] = inst_32912__$1);
return statearr_32926;
})();if(cljs.core.truth_(inst_32912__$1))
{var statearr_32927_33051 = state_32922__$1;(statearr_32927_33051[(1)] = (3));
} else
{var statearr_32928_33052 = state_32922__$1;(statearr_32928_33052[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32923 === (1)))
{var inst_32909 = new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32910 = fetch_geotag_data_fn.call(null,inst_32909);var state_32922__$1 = state_32922;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32922__$1,(2),inst_32910);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33048,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33048,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32932 = [null,null,null,null,null,null,null,null];(statearr_32932[(0)] = state_machine__9111__auto__);
(statearr_32932[(1)] = (1));
return statearr_32932;
});
var state_machine__9111__auto____1 = (function (state_32922){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32922);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32933){if((e32933 instanceof Object))
{var ex__9114__auto__ = e32933;var statearr_32934_33053 = state_32922;(statearr_32934_33053[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32922);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32933;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33054 = state_32922;
state_32922 = G__33054;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32922){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33048,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32935 = f__9126__auto__.call(null);(statearr_32935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33048);
return statearr_32935;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33048,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var c__9125__auto___33055 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33055,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33055,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32954){var state_val_32955 = (state_32954[(1)]);if((state_val_32955 === (5)))
{var inst_32952 = (state_32954[(2)]);var state_32954__$1 = state_32954;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32954__$1,inst_32952);
} else
{if((state_val_32955 === (4)))
{var state_32954__$1 = state_32954;var statearr_32956_33056 = state_32954__$1;(statearr_32956_33056[(2)] = null);
(statearr_32956_33056[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32955 === (3)))
{var inst_32943 = (state_32954[(7)]);var inst_32945 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32946 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391)];var inst_32947 = (new cljs.core.PersistentVector(null,3,(5),inst_32945,inst_32946,null));var inst_32948 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32943);var inst_32949 = om.core.update_BANG_.call(null,self__.cursor,inst_32947,inst_32948);var state_32954__$1 = state_32954;var statearr_32957_33057 = state_32954__$1;(statearr_32957_33057[(2)] = inst_32949);
(statearr_32957_33057[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32955 === (2)))
{var inst_32943 = (state_32954[(7)]);var inst_32943__$1 = (state_32954[(2)]);var state_32954__$1 = (function (){var statearr_32958 = state_32954;(statearr_32958[(7)] = inst_32943__$1);
return statearr_32958;
})();if(cljs.core.truth_(inst_32943__$1))
{var statearr_32959_33058 = state_32954__$1;(statearr_32959_33058[(1)] = (3));
} else
{var statearr_32960_33059 = state_32954__$1;(statearr_32960_33059[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32955 === (1)))
{var inst_32936 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32937 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32938 = [next_filter];var inst_32939 = cljs.core.PersistentHashMap.fromArrays(inst_32937,inst_32938);var inst_32940 = cljs.core.merge.call(null,inst_32936,inst_32939);var inst_32941 = fetch_geotag_agg_data_fn.call(null,inst_32940);var state_32954__$1 = state_32954;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32954__$1,(2),inst_32941);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33055,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33055,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32964 = [null,null,null,null,null,null,null,null];(statearr_32964[(0)] = state_machine__9111__auto__);
(statearr_32964[(1)] = (1));
return statearr_32964;
});
var state_machine__9111__auto____1 = (function (state_32954){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32954);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32965){if((e32965 instanceof Object))
{var ex__9114__auto__ = e32965;var statearr_32966_33060 = state_32954;(statearr_32966_33060[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32954);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32965;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33061 = state_32954;
state_32954 = G__33061;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32954){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33055,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32967 = f__9126__auto__.call(null);(statearr_32967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33055);
return statearr_32967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33055,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var c__9125__auto___33062 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33062,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33062,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32988){var state_val_32989 = (state_32988[(1)]);if((state_val_32989 === (5)))
{var inst_32986 = (state_32988[(2)]);var state_32988__$1 = state_32988;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32988__$1,inst_32986);
} else
{if((state_val_32989 === (4)))
{var state_32988__$1 = state_32988;var statearr_32990_33063 = state_32988__$1;(statearr_32990_33063[(2)] = null);
(statearr_32990_33063[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32989 === (3)))
{var inst_32977 = (state_32988[(7)]);var inst_32979 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32980 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493),new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620)];var inst_32981 = (new cljs.core.PersistentVector(null,3,(5),inst_32979,inst_32980,null));var inst_32982 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32977);var inst_32983 = om.core.update_BANG_.call(null,self__.cursor,inst_32981,inst_32982);var state_32988__$1 = state_32988;var statearr_32991_33064 = state_32988__$1;(statearr_32991_33064[(2)] = inst_32983);
(statearr_32991_33064[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32989 === (2)))
{var inst_32977 = (state_32988[(7)]);var inst_32977__$1 = (state_32988[(2)]);var state_32988__$1 = (function (){var statearr_32992 = state_32988;(statearr_32992[(7)] = inst_32977__$1);
return statearr_32992;
})();if(cljs.core.truth_(inst_32977__$1))
{var statearr_32993_33065 = state_32988__$1;(statearr_32993_33065[(1)] = (3));
} else
{var statearr_32994_33066 = state_32988__$1;(statearr_32994_33066[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32989 === (1)))
{var inst_32968 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32969 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"precision","precision",-1175707478)];var inst_32970 = new cljs.core.Keyword(null,"precision-fn","precision-fn",1742300693).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32971 = inst_32970.call(null,next_zoom);var inst_32972 = [next_filter,next_bounds,inst_32971];var inst_32973 = cljs.core.PersistentHashMap.fromArrays(inst_32969,inst_32972);var inst_32974 = cljs.core.merge.call(null,inst_32968,inst_32973);var inst_32975 = fetch_geohash_agg_data_fn.call(null,inst_32974);var state_32988__$1 = state_32988;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32988__$1,(2),inst_32975);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33062,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33062,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32998 = [null,null,null,null,null,null,null,null];(statearr_32998[(0)] = state_machine__9111__auto__);
(statearr_32998[(1)] = (1));
return statearr_32998;
});
var state_machine__9111__auto____1 = (function (state_32988){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32988);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32999){if((e32999 instanceof Object))
{var ex__9114__auto__ = e32999;var statearr_33000_33067 = state_32988;(statearr_33000_33067[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32988);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32999;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33068 = state_32988;
state_32988 = G__33068;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32988){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33062,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_33001 = f__9126__auto__.call(null);(statearr_33001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33062);
return statearr_33001;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33062,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var vec__33002_33069 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_33070 = cljs.core.nth.call(null,vec__33002_33069,(0),null);var selection_path_colours_33071 = cljs.core.nth.call(null,vec__33002_33069,(1),null);var update_paths_invocation_33072 = ((function (vec__33002_33069,new_threshold_colors_33070,selection_path_colours_33071,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_33071,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696),path_marker_click_fn,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575),next_boundaryline_fill_opacity], null));
});})(vec__33002_33069,new_threshold_colors_33070,selection_path_colours_33071,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_33070,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_33070);
} else
{}
var temp__4126__auto___33073 = update_paths_invocation_33072.call(null);if(cljs.core.truth_(temp__4126__auto___33073))
{var notify_chan_33074 = temp__4126__auto___33073;var c__9125__auto___33075 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33075,notify_chan_33074,temp__4126__auto___33073,vec__33002_33069,new_threshold_colors_33070,selection_path_colours_33071,update_paths_invocation_33072,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33075,notify_chan_33074,temp__4126__auto___33073,vec__33002_33069,new_threshold_colors_33070,selection_path_colours_33071,update_paths_invocation_33072,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_33007){var state_val_33008 = (state_33007[(1)]);if((state_val_33008 === (2)))
{var inst_33004 = (state_33007[(2)]);var inst_33005 = update_paths_invocation_33072.call(null);var state_33007__$1 = (function (){var statearr_33009 = state_33007;(statearr_33009[(7)] = inst_33004);
return statearr_33009;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33007__$1,inst_33005);
} else
{if((state_val_33008 === (1)))
{var state_33007__$1 = state_33007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33007__$1,(2),notify_chan_33074);
} else
{return null;
}
}
});})(c__9125__auto___33075,notify_chan_33074,temp__4126__auto___33073,vec__33002_33069,new_threshold_colors_33070,selection_path_colours_33071,update_paths_invocation_33072,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33075,notify_chan_33074,temp__4126__auto___33073,vec__33002_33069,new_threshold_colors_33070,selection_path_colours_33071,update_paths_invocation_33072,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_33013 = [null,null,null,null,null,null,null,null];(statearr_33013[(0)] = state_machine__9111__auto__);
(statearr_33013[(1)] = (1));
return statearr_33013;
});
var state_machine__9111__auto____1 = (function (state_33007){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_33007);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e33014){if((e33014 instanceof Object))
{var ex__9114__auto__ = e33014;var statearr_33015_33076 = state_33007;(statearr_33015_33076[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33007);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33014;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33077 = state_33007;
state_33007 = G__33077;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_33007){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_33007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33075,notify_chan_33074,temp__4126__auto___33073,vec__33002_33069,new_threshold_colors_33070,selection_path_colours_33071,update_paths_invocation_33072,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_33016 = f__9126__auto__.call(null);(statearr_33016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33075);
return statearr_33016;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33075,notify_chan_33074,temp__4126__auto___33073,vec__33002_33069,new_threshold_colors_33070,selection_path_colours_33071,update_paths_invocation_33072,map__32794,map__32794__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32795,map__32795__$1,map__32796,map__32796__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32789,map__32789__$1,next_cursor_data,map__32790,map__32790__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32791,map__32791__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32792,map__32792__$1,map__32793,map__32793__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
});})(map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32782.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t32782.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__33017 = clustermap.components.map.create_map.call(null,node,self__.controls);var map__33017__$1 = ((cljs.core.seq_QMARK_.call(null,map__33017))?cljs.core.apply.call(null,cljs.core.hash_map,map__33017):map__33017);var map = map__33017__$1;var path = cljs.core.get.call(null,map__33017__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__33017__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__33017__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__33018 = om.core.get_shared.call(null,self__.owner);var map__33018__$1 = ((cljs.core.seq_QMARK_.call(null,map__33018))?cljs.core.apply.call(null,cljs.core.hash_map,map__33018):map__33018);var path_marker_click_fn = cljs.core.get.call(null,map__33018__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__33018__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__33018__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__33018__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,map__33017,map__33017__$1,map,path,markers,leaflet_map,map__33018,map__33018__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
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
});})(node,map__33017,map__33017__$1,map,path,markers,leaflet_map,map__33018,map__33018__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("moveend",((function (node,map__33017,map__33017__$1,map,path,markers,leaflet_map,map__33018,map__33018__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__33017,map__33017__$1,map,path,markers,leaflet_map,map__33018,map__33018__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupopen",((function (node,map__33017,map__33017__$1,map,path,markers,leaflet_map,map__33018,map__33018__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__33017,map__33017__$1,map,path,markers,leaflet_map,map__33018,map__33018__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__33017,map__33017__$1,map,path,markers,leaflet_map,map__33018,map__33018__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
});})(node,map__33017,map__33017__$1,map,path,markers,leaflet_map,map__33018,map__33018__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupclose",((function (node,map__33017,map__33017__$1,map,path,markers,leaflet_map,map__33018,map__33018__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__33017,map__33017__$1,map,path,markers,leaflet_map,map__33018,map__33018__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
if(cljs.core.truth_(path_marker_click_fn))
{leaflet_map.on("click",((function (node,map__33017,map__33017__$1,map,path,markers,leaflet_map,map__33018,map__33018__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return path_marker_click_fn.call(null,null);
});})(node,map__33017,map__33017__$1,map,path,markers,leaflet_map,map__33018,map__33018__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
jayq.core.$.call(null,node).on("click","a.boundaryline-popup-link",((function (node,map__33017,map__33017__$1,map,path,markers,leaflet_map,map__33018,map__33018__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var G__33019 = e;var G__33019__$1 = (((G__33019 == null))?null:G__33019.target);var G__33019__$2 = (((G__33019__$1 == null))?null:domina.attr.call(null,G__33019__$1,"data-boundaryline-id"));var G__33019__$3 = (((G__33019__$2 == null))?null:path_marker_click_fn.call(null,G__33019__$2));return G__33019__$3;
});})(node,map__33017,map__33017__$1,map,path,markers,leaflet_map,map__33018,map__33018__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
jayq.core.$.call(null,node).on("click","[data-onclick-id]",((function (node,map__33017,map__33017__$1,map,path,markers,leaflet_map,map__33018,map__33018__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var current_target = e.currentTarget;var handler_id = domina.attr.call(null,current_target,"data-onclick-id");var handler = clustermap.components.map.find_event_handler.call(null,handler_id);if(cljs.core.truth_(handler))
{return handler.call(null,e);
} else
{return null;
}
});})(node,map__33017,map__33017__$1,map,path,markers,leaflet_map,map__33018,map__33018__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532),clustermap.api.boundaryline_aggregation_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507),clustermap.api.location_lists_2_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950),clustermap.api.geotags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602),clustermap.api.nested_aggregation_factory.call(null));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986),clustermap.api.geohash_grid_factory.call(null));
});})(map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32782.prototype.om$core$IRender$ = true;
clustermap.components.map.t32782.prototype.om$core$IRender$render$arity$1 = ((function (map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32784){var self__ = this;
var _32784__$1 = this;return self__.meta32783;
});})(map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32784,meta32783__$1){var self__ = this;
var _32784__$1 = this;return (new clustermap.components.map.t32782(self__.colorchooser,self__.initial_bounds,self__.location,self__.map__32781,self__.owner,self__.data,self__.zoom,self__.map_options,self__.cursor_data,self__.geotag_aggs,self__.filter_spec,self__.map__32779,self__.map_component,self__.link_render_fn,self__.boundaryline_collections,self__.controls,self__.cursor,self__.map__32780,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.show_points,self__.link_click_fn,self__.filter,self__.p__32535,self__.geohash_aggs,self__.point_data,self__.boundaryline_agg,meta32783__$1));
});})(map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.__GT_t32782 = ((function (map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function __GT_t32782(colorchooser__$1,initial_bounds__$1,location__$1,map__32781__$2,owner__$1,data__$1,zoom__$1,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map__32779__$2,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,map__32780__$2,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,p__32535__$1,geohash_aggs__$1,point_data__$1,boundaryline_agg__$1,meta32783){return (new clustermap.components.map.t32782(colorchooser__$1,initial_bounds__$1,location__$1,map__32781__$2,owner__$1,data__$1,zoom__$1,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map__32779__$2,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,map__32780__$2,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,p__32535__$1,geohash_aggs__$1,point_data__$1,boundaryline_agg__$1,meta32783));
});})(map__32779,map__32779__$1,cursor_data,map__32780,map__32780__$1,cursor,data,point_data,boundaryline_collections,map__32781,map__32781__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
}
return (new clustermap.components.map.t32782(colorchooser,initial_bounds,location,map__32781__$1,owner,data,zoom,map_options,cursor_data,geotag_aggs,filter_spec,map__32779__$1,map_component,link_render_fn,boundaryline_collections,controls,cursor,map__32780__$1,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,p__32535,geohash_aggs,point_data,boundaryline_agg,null));
});
