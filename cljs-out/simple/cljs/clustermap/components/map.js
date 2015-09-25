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
clustermap.components.map.default_api_key = (function (){var or__3639__auto__ = (function (){var G__32263 = config;var G__32263__$1 = (((G__32263 == null))?null:G__32263.components);var G__32263__$2 = (((G__32263__$1 == null))?null:G__32263__$1.map);var G__32263__$3 = (((G__32263__$2 == null))?null:G__32263__$2.api_key);return G__32263__$3;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,p__32264){var map__32266 = p__32264;var map__32266__$1 = ((cljs.core.seq_QMARK_.call(null,map__32266))?cljs.core.apply.call(null,cljs.core.hash_map,map__32266):map__32266);var api_key = cljs.core.get.call(null,map__32266__$1,new cljs.core.Keyword(null,"api-key","api-key",1037904031),clustermap.components.map.default_api_key);var map_options = cljs.core.get.call(null,map__32266__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var bounds = cljs.core.get.call(null,map__32266__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds = cljs.core.get.call(null,map__32266__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom_control = ((new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217).cljs$core$IFn$_invoke$arity$1(map_options) === false)?false:true);var m = L.map.call(null,id_or_el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,map_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),false,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(19)], null))));var tiles = L.mapbox.tileLayer.call(null,api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomleft"});var lmcg = L.markerClusterGroup.call(null,{"maxClusterRadius": (40)});m.addLayer(tiles);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__32267){
var m = cljs.core.first(arglist__32267);
var all_bounds = cljs.core.rest(arglist__32267);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.render_marker_icon = (function render_marker_icon(p__32268,location_sites){var map__32270 = p__32268;var map__32270__$1 = ((cljs.core.seq_QMARK_.call(null,map__32270))?cljs.core.apply.call(null,cljs.core.hash_map,map__32270):map__32270);var location_spec = map__32270__$1;var marker_render_fn = cljs.core.get.call(null,map__32270__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));if((cljs.core.count.call(null,location_sites) > (1)))
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
} else
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-single",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
}
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(item_render_fn,location_sites,location_site_click_handler_keys){return ("<ul class=\"location-marker-popup-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4377__auto__ = (function iter__32275(s__32276){return (new cljs.core.LazySeq(null,(function (){var s__32276__$1 = s__32276;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32276__$1);if(temp__4126__auto__)
{var s__32276__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32276__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32276__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32278 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32277 = (0);while(true){
if((i__32277 < size__4376__auto__))
{var site = cljs.core._nth.call(null,c__4375__auto__,i__32277);cljs.core.chunk_append.call(null,b__32278,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))));
{
var G__32279 = (i__32277 + (1));
i__32277 = G__32279;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32278),iter__32275.call(null,cljs.core.chunk_rest.call(null,s__32276__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32278),null);
}
} else
{var site = cljs.core.first.call(null,s__32276__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))),iter__32275.call(null,cljs.core.rest.call(null,s__32276__$2)));
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
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,location_sites,p__32280){var map__32285 = p__32280;var map__32285__$1 = ((cljs.core.seq_QMARK_.call(null,map__32285))?cljs.core.apply.call(null,cljs.core.hash_map,map__32285):map__32285);var map__32286 = cljs.core.get.call(null,map__32285__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__32286__$1 = ((cljs.core.seq_QMARK_.call(null,map__32286))?cljs.core.apply.call(null,cljs.core.hash_map,map__32286):map__32286);var location_spec = map__32286__$1;var item_click_fn = cljs.core.get.call(null,map__32286__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__32286__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__32286__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var temp__4124__auto__ = (function (){var G__32287 = location_sites;var G__32287__$1 = (((G__32287 == null))?null:cljs.core.first.call(null,G__32287));var G__32287__$2 = (((G__32287__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__32287__$1));var G__32287__$3 = (((G__32287__$2 == null))?null:cljs.core.reverse.call(null,G__32287__$2));var G__32287__$4 = (((G__32287__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__32287__$3));return G__32287__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__32285,map__32285__$1,map__32286,map__32286__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__32285,map__32285__$1,map__32286,map__32286__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);leaflet_marker.on("mouseover",((function (icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__32285,map__32285__$1,map__32286,map__32286__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (e){return leaflet_marker.openPopup();
});})(icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__32285,map__32285__$1,map__32286,map__32286__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
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
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4579__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_32288_32289 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32288_32289,sb__4579__auto__,temp__4124__auto__,map__32285,map__32285__$1,map__32286,map__32286__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (x__4580__auto__){return sb__4579__auto__.append(x__4580__auto__);
});})(_STAR_print_fn_STAR_32288_32289,sb__4579__auto__,temp__4124__auto__,map__32285,map__32285__$1,map__32286,map__32286__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32288_32289;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4579__auto__));
})())));
}
});
clustermap.components.map.remove_marker_event_handlers = (function remove_marker_event_handlers(p__32290){var map__32296 = p__32290;var map__32296__$1 = ((cljs.core.seq_QMARK_.call(null,map__32296))?cljs.core.apply.call(null,cljs.core.hash_map,map__32296):map__32296);var marker = map__32296__$1;var click_handler_keys = cljs.core.get.call(null,map__32296__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32296__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));clustermap.components.map.remove_event_handler.call(null,click_handler_key);
var seq__32297 = cljs.core.seq.call(null,click_handler_keys);var chunk__32298 = null;var count__32299 = (0);var i__32300 = (0);while(true){
if((i__32300 < count__32299))
{var chk = cljs.core._nth.call(null,chunk__32298,i__32300);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__32301 = seq__32297;
var G__32302 = chunk__32298;
var G__32303 = count__32299;
var G__32304 = (i__32300 + (1));
seq__32297 = G__32301;
chunk__32298 = G__32302;
count__32299 = G__32303;
i__32300 = G__32304;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32297);if(temp__4126__auto__)
{var seq__32297__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32297__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32297__$1);{
var G__32305 = cljs.core.chunk_rest.call(null,seq__32297__$1);
var G__32306 = c__4408__auto__;
var G__32307 = cljs.core.count.call(null,c__4408__auto__);
var G__32308 = (0);
seq__32297 = G__32305;
chunk__32298 = G__32306;
count__32299 = G__32307;
i__32300 = G__32308;
continue;
}
} else
{var chk = cljs.core.first.call(null,seq__32297__$1);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__32309 = cljs.core.next.call(null,seq__32297__$1);
var G__32310 = null;
var G__32311 = (0);
var G__32312 = (0);
seq__32297 = G__32309;
chunk__32298 = G__32310;
count__32299 = G__32311;
i__32300 = G__32312;
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
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,p__32313,location_sites,p__32314){var map__32318 = p__32313;var map__32318__$1 = ((cljs.core.seq_QMARK_.call(null,map__32318))?cljs.core.apply.call(null,cljs.core.hash_map,map__32318):map__32318);var marker = map__32318__$1;var click_handler_keys = cljs.core.get.call(null,map__32318__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32318__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32318__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var map__32319 = p__32314;var map__32319__$1 = ((cljs.core.seq_QMARK_.call(null,map__32319))?cljs.core.apply.call(null,cljs.core.hash_map,map__32319):map__32319);var map__32320 = cljs.core.get.call(null,map__32319__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__32320__$1 = ((cljs.core.seq_QMARK_.call(null,map__32320))?cljs.core.apply.call(null,cljs.core.hash_map,map__32320):map__32320);var location_spec = map__32320__$1;var item_click_fn = cljs.core.get.call(null,map__32320__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__32320__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__32320__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,popup,map__32318,map__32318__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32319,map__32319__$1,map__32320,map__32320__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,popup,map__32318,map__32318__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32319,map__32319__$1,map__32320,map__32320__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);clustermap.components.map.remove_marker_event_handlers.call(null,marker);
leaflet_marker.setIcon(icon);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,item_render_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407)),new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys));
});
/**
* remove a marker from a cluster group or directly from the map
*/
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,leaflet_marker_cluster_group,p__32321){var map__32323 = p__32321;var map__32323__$1 = ((cljs.core.seq_QMARK_.call(null,map__32323))?cljs.core.apply.call(null,cljs.core.hash_map,map__32323):map__32323);var marker = map__32323__$1;var click_handler_keys = cljs.core.get.call(null,map__32323__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32323__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32323__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));clustermap.components.map.remove_marker_event_handlers.call(null,marker);
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
,update_marker_keys));var _ = (function (){var seq__32328 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32329 = null;var count__32330 = (0);var i__32331 = (0);while(true){
if((i__32331 < count__32330))
{var k = cljs.core._nth.call(null,chunk__32329,i__32331);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32332 = seq__32328;
var G__32333 = chunk__32329;
var G__32334 = count__32330;
var G__32335 = (i__32331 + (1));
seq__32328 = G__32332;
chunk__32329 = G__32333;
count__32330 = G__32334;
i__32331 = G__32335;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32328);if(temp__4126__auto__)
{var seq__32328__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32328__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32328__$1);{
var G__32336 = cljs.core.chunk_rest.call(null,seq__32328__$1);
var G__32337 = c__4408__auto__;
var G__32338 = cljs.core.count.call(null,c__4408__auto__);
var G__32339 = (0);
seq__32328 = G__32336;
chunk__32329 = G__32337;
count__32330 = G__32338;
i__32331 = G__32339;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32328__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32340 = cljs.core.next.call(null,seq__32328__$1);
var G__32341 = null;
var G__32342 = (0);
var G__32343 = (0);
seq__32328 = G__32340;
chunk__32329 = G__32341;
count__32330 = G__32342;
i__32331 = G__32343;
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
clustermap.components.map.marker_color_class = (function marker_color_class(n){var pred__32347 = cljs.core._EQ_;var expr__32348 = n;if(cljs.core.truth_(pred__32347.call(null,(0),expr__32348)))
{return "marker-cluster-small";
} else
{if(cljs.core.truth_(pred__32347.call(null,(1),expr__32348)))
{return "marker-cluster-medium";
} else
{if(cljs.core.truth_(pred__32347.call(null,(2),expr__32348)))
{return "marker-cluster-large";
} else
{return "marker-cluster-small";
}
}
}
});
clustermap.components.map.render_geotag_icon = (function render_geotag_icon(p__32350,geotag,geotag_agg){var map__32353 = p__32350;var map__32353__$1 = ((cljs.core.seq_QMARK_.call(null,map__32353))?cljs.core.apply.call(null,cljs.core.hash_map,map__32353):map__32353);var geotag_agg_spec = map__32353__$1;var colorchooser_fn = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899));var icon_render_fn = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var color_value = colorchooser_fn.call(null,geotag_agg);return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),("marker-cluster "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.marker_color_class.call(null,color_value)))], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32354 = icon_render_fn.call(null,geotag,geotag_agg);if(cljs.core.map_QMARK_.call(null,attrs32354))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32354)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32354))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geotag_marker_popup_content = (function render_geotag_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))))));
});
clustermap.components.map.create_geotag_marker = (function create_geotag_marker(leaflet_map,p__32355,geotag,geotag_agg){var map__32357 = p__32355;var map__32357__$1 = ((cljs.core.seq_QMARK_.call(null,map__32357))?cljs.core.apply.call(null,cljs.core.hash_map,map__32357):map__32357);var geotag_agg_spec = map__32357__$1;var click_fn = cljs.core.get.call(null,map__32357__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32357__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32357__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(geotag),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(geotag)], null));var icon = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32357,map__32357__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32357,map__32357__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geotag_marker = (function update_geotag_marker(leaflet_map,p__32358,p__32359,geotag,geotag_agg){var map__32362 = p__32358;var map__32362__$1 = ((cljs.core.seq_QMARK_.call(null,map__32362))?cljs.core.apply.call(null,cljs.core.hash_map,map__32362):map__32362);var geotag_agg_spec = map__32362__$1;var click_fn = cljs.core.get.call(null,map__32362__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32362__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32362__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32363 = p__32359;var map__32363__$1 = ((cljs.core.seq_QMARK_.call(null,map__32363))?cljs.core.apply.call(null,cljs.core.hash_map,map__32363):map__32363);var marker = map__32363__$1;var click_handler_key = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var icon_32364 = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var new_click_handler_key_32365 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setIcon(icon_32364);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32365);
return marker;
});
clustermap.components.map.update_geotag_markers = (function update_geotag_markers(leaflet_map,geotag_markers_atom,p__32366,points_showing_QMARK_){var map__32372 = p__32366;var map__32372__$1 = ((cljs.core.seq_QMARK_.call(null,map__32372))?cljs.core.apply.call(null,cljs.core.hash_map,map__32372):map__32372);var geotag_agg_spec = map__32372__$1;var geotag_agg_data = cljs.core.get.call(null,map__32372__$1,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391));var geotag_data = cljs.core.get.call(null,map__32372__$1,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976));var popup_render_fn = cljs.core.get.call(null,map__32372__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32372__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var colorchooser_factory_fn = cljs.core.get.call(null,map__32372__$1,new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307));var show_at_zoom_fn = cljs.core.get.call(null,map__32372__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var colorchooser_fn = (cljs.core.truth_(colorchooser_factory_fn)?colorchooser_factory_fn.call(null,geotag_agg_data):cljs.core.constantly.call(null,(1)));var geotag_agg_spec__$1 = cljs.core.assoc.call(null,geotag_agg_spec,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899),colorchooser_fn);var geotags_by_tag = cljs.core.reduce.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,map__32372,map__32372__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (m,t){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(t),t);
});})(colorchooser_fn,geotag_agg_spec__$1,map__32372,map__32372__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_data);var geotag_aggs_by_tag = cljs.core.reduce.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,map__32372,map__32372__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (m,a){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226).cljs$core$IFn$_invoke$arity$1(a),a);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,map__32372,map__32372__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
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
})())?null:cljs.core.set.call(null,cljs.core.keys.call(null,geotag_aggs_by_tag)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32372,map__32372__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geotag_marker.call(null,leaflet_map,geotag_agg_spec__$1,cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32372,map__32372__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32372,map__32372__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geotag_marker.call(null,leaflet_map,geotag_agg_spec__$1,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32372,map__32372__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32373 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32374 = null;var count__32375 = (0);var i__32376 = (0);while(true){
if((i__32376 < count__32375))
{var k = cljs.core._nth.call(null,chunk__32374,i__32376);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32377 = seq__32373;
var G__32378 = chunk__32374;
var G__32379 = count__32375;
var G__32380 = (i__32376 + (1));
seq__32373 = G__32377;
chunk__32374 = G__32378;
count__32375 = G__32379;
i__32376 = G__32380;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32373);if(temp__4126__auto__)
{var seq__32373__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32373__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32373__$1);{
var G__32381 = cljs.core.chunk_rest.call(null,seq__32373__$1);
var G__32382 = c__4408__auto__;
var G__32383 = cljs.core.count.call(null,c__4408__auto__);
var G__32384 = (0);
seq__32373 = G__32381;
chunk__32374 = G__32382;
count__32375 = G__32383;
i__32376 = G__32384;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32373__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32385 = cljs.core.next.call(null,seq__32373__$1);
var G__32386 = null;
var G__32387 = (0);
var G__32388 = (0);
seq__32373 = G__32385;
chunk__32374 = G__32386;
count__32375 = G__32387;
i__32376 = G__32388;
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
clustermap.components.map.render_geohash_icon = (function render_geohash_icon(p__32389,geohash_agg){var map__32392 = p__32389;var map__32392__$1 = ((cljs.core.seq_QMARK_.call(null,map__32392))?cljs.core.apply.call(null,cljs.core.hash_map,map__32392):map__32392);var geohash_agg_spec = map__32392__$1;var colorchooser_fn = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899));var icon_render_fn = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var color_value = colorchooser_fn.call(null,geohash_agg);return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),("marker-cluster "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.marker_color_class.call(null,color_value)))], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32393 = icon_render_fn.call(null,geohash_agg);if(cljs.core.map_QMARK_.call(null,attrs32393))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32393)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32393))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geohash_marker_popup_content = (function render_geohash_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32395 = content;if(cljs.core.map_QMARK_.call(null,attrs32395))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32395)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32395))+"</div>");
}
})())))));
});
/**
* we get bounds for the points contained in the geohash area, so take the
* center point as the marker point
*/
clustermap.components.map.geohash_center_point = (function geohash_center_point(p__32396){var map__32401 = p__32396;var map__32401__$1 = ((cljs.core.seq_QMARK_.call(null,map__32401))?cljs.core.apply.call(null,cljs.core.hash_map,map__32401):map__32401);var geohash_agg = map__32401__$1;var bounds = cljs.core.get.call(null,map__32401__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var vec__32402 = bounds;var vec__32403 = cljs.core.nth.call(null,vec__32402,(0),null);var south = cljs.core.nth.call(null,vec__32403,(0),null);var west = cljs.core.nth.call(null,vec__32403,(1),null);var vec__32404 = cljs.core.nth.call(null,vec__32402,(1),null);var north = cljs.core.nth.call(null,vec__32404,(0),null);var east = cljs.core.nth.call(null,vec__32404,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((south + north) / (2)),((west + east) / (2))], null);
});
clustermap.components.map.create_geohash_marker = (function create_geohash_marker(leaflet_map,p__32405,geohash_agg){var map__32407 = p__32405;var map__32407__$1 = ((cljs.core.seq_QMARK_.call(null,map__32407))?cljs.core.apply.call(null,cljs.core.hash_map,map__32407):map__32407);var geohash_agg_spec = map__32407__$1;var click_fn = cljs.core.get.call(null,map__32407__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32407__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32407__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32407,map__32407__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32407,map__32407__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geohash_marker = (function update_geohash_marker(leaflet_map,p__32408,p__32409,geohash_agg){var map__32412 = p__32408;var map__32412__$1 = ((cljs.core.seq_QMARK_.call(null,map__32412))?cljs.core.apply.call(null,cljs.core.hash_map,map__32412):map__32412);var geohash_agg_spec = map__32412__$1;var click_fn = cljs.core.get.call(null,map__32412__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32412__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32412__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32413 = p__32409;var map__32413__$1 = ((cljs.core.seq_QMARK_.call(null,map__32413))?cljs.core.apply.call(null,cljs.core.hash_map,map__32413):map__32413);var marker = map__32413__$1;var click_handler_key = cljs.core.get.call(null,map__32413__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32413__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var latlong_32414 = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon_32415 = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var new_click_handler_key_32416 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setLatLng(latlong_32414);
leaflet_marker.setIcon(icon_32415);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32416);
return marker;
});
clustermap.components.map.update_geohash_markers = (function update_geohash_markers(leaflet_map,geohash_markers_atom,p__32417,points_showing_QMARK_){var map__32423 = p__32417;var map__32423__$1 = ((cljs.core.seq_QMARK_.call(null,map__32423))?cljs.core.apply.call(null,cljs.core.hash_map,map__32423):map__32423);var geohash_agg_spec = map__32423__$1;var geohash_agg_data = cljs.core.get.call(null,map__32423__$1,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620));var icon_render_fn = cljs.core.get.call(null,map__32423__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var colorchooser_factory_fn = cljs.core.get.call(null,map__32423__$1,new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307));var show_at_zoom_fn = cljs.core.get.call(null,map__32423__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var colorchooser_fn = (cljs.core.truth_(colorchooser_factory_fn)?colorchooser_factory_fn.call(null,geohash_agg_data):cljs.core.constantly.call(null,(1)));var geohash_agg_spec__$1 = cljs.core.assoc.call(null,geohash_agg_spec,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899),colorchooser_fn);var geohash_aggs_by_geohash = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,map__32423,map__32423__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (gha){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geohash-grid","geohash-grid",2001750091).cljs$core$IFn$_invoke$arity$1(gha),gha], null);
});})(colorchooser_fn,geohash_agg_spec__$1,map__32423,map__32423__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
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
})())?cljs.core.set.call(null,cljs.core.keys.call(null,geohash_aggs_by_geohash)):null);var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32423,map__32423__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geohash_marker.call(null,leaflet_map,geohash_agg_spec__$1,cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32423,map__32423__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32423,map__32423__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geohash_marker.call(null,leaflet_map,geohash_agg_spec__$1,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32423,map__32423__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32424 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32425 = null;var count__32426 = (0);var i__32427 = (0);while(true){
if((i__32427 < count__32426))
{var k = cljs.core._nth.call(null,chunk__32425,i__32427);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32428 = seq__32424;
var G__32429 = chunk__32425;
var G__32430 = count__32426;
var G__32431 = (i__32427 + (1));
seq__32424 = G__32428;
chunk__32425 = G__32429;
count__32426 = G__32430;
i__32427 = G__32431;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32424);if(temp__4126__auto__)
{var seq__32424__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32424__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32424__$1);{
var G__32432 = cljs.core.chunk_rest.call(null,seq__32424__$1);
var G__32433 = c__4408__auto__;
var G__32434 = cljs.core.count.call(null,c__4408__auto__);
var G__32435 = (0);
seq__32424 = G__32432;
chunk__32425 = G__32433;
count__32426 = G__32434;
i__32427 = G__32435;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32424__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32436 = cljs.core.next.call(null,seq__32424__$1);
var G__32437 = null;
var G__32438 = (0);
var G__32439 = (0);
seq__32424 = G__32436;
chunk__32425 = G__32437;
count__32426 = G__32438;
i__32427 = G__32439;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__32448 = cljs.core.js__GT_clj.call(null,envelope);var map__32448__$1 = ((cljs.core.seq_QMARK_.call(null,map__32448))?cljs.core.apply.call(null,cljs.core.hash_map,map__32448):map__32448);var clj_envelope = map__32448__$1;var vec__32449 = cljs.core.get.call(null,map__32448__$1,"coordinates");var vec__32450 = cljs.core.nth.call(null,vec__32449,(0),null);var vec__32451 = cljs.core.nth.call(null,vec__32450,(0),null);var miny0 = cljs.core.nth.call(null,vec__32451,(0),null);var minx0 = cljs.core.nth.call(null,vec__32451,(1),null);var vec__32452 = cljs.core.nth.call(null,vec__32450,(1),null);var maxy1 = cljs.core.nth.call(null,vec__32452,(0),null);var minx1 = cljs.core.nth.call(null,vec__32452,(1),null);var vec__32453 = cljs.core.nth.call(null,vec__32450,(2),null);var maxy2 = cljs.core.nth.call(null,vec__32453,(0),null);var maxx2 = cljs.core.nth.call(null,vec__32453,(1),null);var vec__32454 = cljs.core.nth.call(null,vec__32450,(3),null);var miny3 = cljs.core.nth.call(null,vec__32454,(0),null);var maxx3 = cljs.core.nth.call(null,vec__32454,(1),null);var vec__32455 = cljs.core.nth.call(null,vec__32450,(4),null);var miny4 = cljs.core.nth.call(null,vec__32455,(0),null);var minx4 = cljs.core.nth.call(null,vec__32455,(1),null);var inner = vec__32450;var coords = vec__32449;return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));
});
clustermap.components.map.boundary_marker_popup_content = (function boundary_marker_popup_content(path_fn,js_boundaryline){var bl_id = (js_boundaryline["id"]);var bl_name = (js_boundaryline["compact_name"]);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(path_fn)?path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-boundaryline","js-boundaryline",1803130691),js_boundaryline):"#"),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"boundaryline-popup-link"], null)))+"><span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-js-boundaryline-name"], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,bl_name))+"</span></a>");
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__32456,p__32457){var map__32460 = p__32456;var map__32460__$1 = ((cljs.core.seq_QMARK_.call(null,map__32460))?cljs.core.apply.call(null,cljs.core.hash_map,map__32460):map__32460);var fill_color = cljs.core.get.call(null,map__32460__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__32460__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__32460__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var map__32461 = p__32457;var map__32461__$1 = ((cljs.core.seq_QMARK_.call(null,map__32461))?cljs.core.apply.call(null,cljs.core.hash_map,map__32461):map__32461);var boundaryline_fill_opacity = cljs.core.get.call(null,map__32461__$1,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575),0.4);if(cljs.core.truth_((function (){var and__3627__auto__ = selected;if(cljs.core.truth_(and__3627__auto__))
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
var create_path__delegate = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32462,p__32463){var map__32467 = p__32462;var map__32467__$1 = ((cljs.core.seq_QMARK_.call(null,map__32467))?cljs.core.apply.call(null,cljs.core.hash_map,map__32467):map__32467);var path_attrs = map__32467__$1;var selected = cljs.core.get.call(null,map__32467__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var vec__32468 = p__32463;var map__32469 = cljs.core.nth.call(null,vec__32468,(0),null);var map__32469__$1 = ((cljs.core.seq_QMARK_.call(null,map__32469))?cljs.core.apply.call(null,cljs.core.hash_map,map__32469):map__32469);var opts = map__32469__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32469__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32469__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));var popup_content = clustermap.components.map.boundary_marker_popup_content.call(null,null,js_boundaryline);clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs,opts);
leaflet_path.addTo(leaflet_map);
leaflet_path.bindPopup(popup_content);
leaflet_path.on("dblclick",((function (tolerance,bounds,leaflet_path,popup_content,map__32467,map__32467__$1,path_attrs,selected,vec__32468,map__32469,map__32469__$1,opts,path_marker_click_fn,filter_spec){
return (function (e){leaflet_map.fitBounds(leaflet_path.getBounds());
if(cljs.core.truth_(path_marker_click_fn))
{return path_marker_click_fn.call(null,boundaryline_id);
} else
{return null;
}
});})(tolerance,bounds,leaflet_path,popup_content,map__32467,map__32467__$1,path_attrs,selected,vec__32468,map__32469,map__32469__$1,opts,path_marker_click_fn,filter_spec))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
};
var create_path = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32462,var_args){
var p__32463 = null;if (arguments.length > 5) {
  p__32463 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,js_boundaryline,p__32462,p__32463);};
create_path.cljs$lang$maxFixedArity = 5;
create_path.cljs$lang$applyTo = (function (arglist__32470){
var comm = cljs.core.first(arglist__32470);
arglist__32470 = cljs.core.next(arglist__32470);
var leaflet_map = cljs.core.first(arglist__32470);
arglist__32470 = cljs.core.next(arglist__32470);
var boundaryline_id = cljs.core.first(arglist__32470);
arglist__32470 = cljs.core.next(arglist__32470);
var js_boundaryline = cljs.core.first(arglist__32470);
arglist__32470 = cljs.core.next(arglist__32470);
var p__32462 = cljs.core.first(arglist__32470);
var p__32463 = cljs.core.rest(arglist__32470);
return create_path__delegate(comm,leaflet_map,boundaryline_id,js_boundaryline,p__32462,p__32463);
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
var fetch_create_path__delegate = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32471){var vec__32474 = p__32471;var map__32475 = cljs.core.nth.call(null,vec__32474,(0),null);var map__32475__$1 = ((cljs.core.seq_QMARK_.call(null,map__32475))?cljs.core.apply.call(null,cljs.core.hash_map,map__32475):map__32475);var opts = map__32475__$1;var filter_spec = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs,opts);
};
var fetch_create_path = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,var_args){
var p__32471 = null;if (arguments.length > 6) {
  p__32471 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return fetch_create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32471);};
fetch_create_path.cljs$lang$maxFixedArity = 6;
fetch_create_path.cljs$lang$applyTo = (function (arglist__32476){
var comm = cljs.core.first(arglist__32476);
arglist__32476 = cljs.core.next(arglist__32476);
var leaflet_map = cljs.core.first(arglist__32476);
arglist__32476 = cljs.core.next(arglist__32476);
var boundaryline_id = cljs.core.first(arglist__32476);
arglist__32476 = cljs.core.next(arglist__32476);
var tolerance = cljs.core.first(arglist__32476);
arglist__32476 = cljs.core.next(arglist__32476);
var js_boundaryline = cljs.core.first(arglist__32476);
arglist__32476 = cljs.core.next(arglist__32476);
var path_attrs = cljs.core.first(arglist__32476);
var p__32471 = cljs.core.rest(arglist__32476);
return fetch_create_path__delegate(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32471);
});
fetch_create_path.cljs$core$IFn$_invoke$arity$variadic = fetch_create_path__delegate;
return fetch_create_path;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.map.replace_path = (function() { 
var replace_path__delegate = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32477){var vec__32480 = p__32477;var map__32481 = cljs.core.nth.call(null,vec__32480,(0),null);var map__32481__$1 = ((cljs.core.seq_QMARK_.call(null,map__32481))?cljs.core.apply.call(null,cljs.core.hash_map,map__32481):map__32481);var opts = map__32481__$1;var filter_spec = cljs.core.get.call(null,map__32481__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs,opts);
};
var replace_path = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,var_args){
var p__32477 = null;if (arguments.length > 6) {
  p__32477 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return replace_path__delegate.call(this,comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32477);};
replace_path.cljs$lang$maxFixedArity = 6;
replace_path.cljs$lang$applyTo = (function (arglist__32482){
var comm = cljs.core.first(arglist__32482);
arglist__32482 = cljs.core.next(arglist__32482);
var leaflet_map = cljs.core.first(arglist__32482);
arglist__32482 = cljs.core.next(arglist__32482);
var boundaryline_id = cljs.core.first(arglist__32482);
arglist__32482 = cljs.core.next(arglist__32482);
var old_path = cljs.core.first(arglist__32482);
arglist__32482 = cljs.core.next(arglist__32482);
var js_boundaryline = cljs.core.first(arglist__32482);
arglist__32482 = cljs.core.next(arglist__32482);
var path_attrs = cljs.core.first(arglist__32482);
var p__32477 = cljs.core.rest(arglist__32482);
return replace_path__delegate(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32477);
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
var update_path__delegate = function (comm,leaflet_map,p__32483,tolerance,js_boundaryline,path_attrs,p__32484){var map__32488 = p__32483;var map__32488__$1 = ((cljs.core.seq_QMARK_.call(null,map__32488))?cljs.core.apply.call(null,cljs.core.hash_map,map__32488):map__32488);var path = map__32488__$1;var boundaryline_id = cljs.core.get.call(null,map__32488__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__32489 = p__32484;var map__32490 = cljs.core.nth.call(null,vec__32489,(0),null);var map__32490__$1 = ((cljs.core.seq_QMARK_.call(null,map__32490))?cljs.core.apply.call(null,cljs.core.hash_map,map__32490):map__32490);var opts = map__32490__$1;var filter_spec = cljs.core.get.call(null,map__32490__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs,opts);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs,opts);
return path;
}
};
var update_path = function (comm,leaflet_map,p__32483,tolerance,js_boundaryline,path_attrs,var_args){
var p__32484 = null;if (arguments.length > 6) {
  p__32484 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return update_path__delegate.call(this,comm,leaflet_map,p__32483,tolerance,js_boundaryline,path_attrs,p__32484);};
update_path.cljs$lang$maxFixedArity = 6;
update_path.cljs$lang$applyTo = (function (arglist__32491){
var comm = cljs.core.first(arglist__32491);
arglist__32491 = cljs.core.next(arglist__32491);
var leaflet_map = cljs.core.first(arglist__32491);
arglist__32491 = cljs.core.next(arglist__32491);
var p__32483 = cljs.core.first(arglist__32491);
arglist__32491 = cljs.core.next(arglist__32491);
var tolerance = cljs.core.first(arglist__32491);
arglist__32491 = cljs.core.next(arglist__32491);
var js_boundaryline = cljs.core.first(arglist__32491);
arglist__32491 = cljs.core.next(arglist__32491);
var path_attrs = cljs.core.first(arglist__32491);
var p__32484 = cljs.core.rest(arglist__32491);
return update_path__delegate(comm,leaflet_map,p__32483,tolerance,js_boundaryline,path_attrs,p__32484);
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
var update_paths__delegate = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32492){var vec__32508 = p__32492;var map__32509 = cljs.core.nth.call(null,vec__32508,(0),null);var map__32509__$1 = ((cljs.core.seq_QMARK_.call(null,map__32509))?cljs.core.apply.call(null,cljs.core.hash_map,map__32509):map__32509);var opts = map__32509__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__32510 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__32510,(0),null);var notifychan = cljs.core.nth.call(null,vec__32510,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32510,tolerance_paths,notifychan,vec__32508,map__32509,map__32509__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32511){var vec__32512 = p__32511;var k = cljs.core.nth.call(null,vec__32512,(0),null);var tolerance = cljs.core.nth.call(null,vec__32512,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32512,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32510,tolerance_paths,notifychan,vec__32508,map__32509,map__32509__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32510,tolerance_paths,notifychan,vec__32508,map__32509,map__32509__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32513 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32513,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32513,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32510,tolerance_paths,notifychan,vec__32508,map__32509,map__32509__$1,opts,path_marker_click_fn,filter_spec))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32510,tolerance_paths,notifychan,created_paths,vec__32508,map__32509,map__32509__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32514){var vec__32515 = p__32514;var k = cljs.core.nth.call(null,vec__32515,(0),null);var tolerance = cljs.core.nth.call(null,vec__32515,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32515,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32510,tolerance_paths,notifychan,created_paths,vec__32508,map__32509,map__32509__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32510,tolerance_paths,notifychan,created_paths,vec__32508,map__32509,map__32509__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32516 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32516,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32516,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32510,tolerance_paths,notifychan,created_paths,vec__32508,map__32509,map__32509__$1,opts,path_marker_click_fn,filter_spec))
,update_path_keys)));var ___$1 = (function (){var seq__32517 = cljs.core.seq.call(null,delete_path_keys);var chunk__32518 = null;var count__32519 = (0);var i__32520 = (0);while(true){
if((i__32520 < count__32519))
{var k = cljs.core._nth.call(null,chunk__32518,i__32520);var temp__4124__auto___32523 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32523))
{var path_32524 = temp__4124__auto___32523;clustermap.components.map.delete_path.call(null,leaflet_map,path_32524);
} else
{}
{
var G__32525 = seq__32517;
var G__32526 = chunk__32518;
var G__32527 = count__32519;
var G__32528 = (i__32520 + (1));
seq__32517 = G__32525;
chunk__32518 = G__32526;
count__32519 = G__32527;
i__32520 = G__32528;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32517);if(temp__4126__auto__)
{var seq__32517__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32517__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32517__$1);{
var G__32529 = cljs.core.chunk_rest.call(null,seq__32517__$1);
var G__32530 = c__4408__auto__;
var G__32531 = cljs.core.count.call(null,c__4408__auto__);
var G__32532 = (0);
seq__32517 = G__32529;
chunk__32518 = G__32530;
count__32519 = G__32531;
i__32520 = G__32532;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32517__$1);var temp__4124__auto___32533 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32533))
{var path_32534 = temp__4124__auto___32533;clustermap.components.map.delete_path.call(null,leaflet_map,path_32534);
} else
{}
{
var G__32535 = cljs.core.next.call(null,seq__32517__$1);
var G__32536 = null;
var G__32537 = (0);
var G__32538 = (0);
seq__32517 = G__32535;
chunk__32518 = G__32536;
count__32519 = G__32537;
i__32520 = G__32538;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32510,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32508,map__32509,map__32509__$1,opts,path_marker_click_fn,filter_spec){
return (function (m,p__32521){var map__32522 = p__32521;var map__32522__$1 = ((cljs.core.seq_QMARK_.call(null,map__32522))?cljs.core.apply.call(null,cljs.core.hash_map,map__32522):map__32522);var path = map__32522__$1;var id = cljs.core.get.call(null,map__32522__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32510,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32508,map__32509,map__32509__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
};
var update_paths = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,var_args){
var p__32492 = null;if (arguments.length > 7) {
  p__32492 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return update_paths__delegate.call(this,comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32492);};
update_paths.cljs$lang$maxFixedArity = 7;
update_paths.cljs$lang$applyTo = (function (arglist__32539){
var comm = cljs.core.first(arglist__32539);
arglist__32539 = cljs.core.next(arglist__32539);
var fetch_boundarylines_fn = cljs.core.first(arglist__32539);
arglist__32539 = cljs.core.next(arglist__32539);
var leaflet_map = cljs.core.first(arglist__32539);
arglist__32539 = cljs.core.next(arglist__32539);
var paths_atom = cljs.core.first(arglist__32539);
arglist__32539 = cljs.core.next(arglist__32539);
var path_selections_atom = cljs.core.first(arglist__32539);
arglist__32539 = cljs.core.next(arglist__32539);
var new_path_highlights = cljs.core.first(arglist__32539);
arglist__32539 = cljs.core.next(arglist__32539);
var new_selection_paths = cljs.core.first(arglist__32539);
var p__32492 = cljs.core.rest(arglist__32539);
return update_paths__delegate(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32492);
});
update_paths.cljs$core$IFn$_invoke$arity$variadic = update_paths__delegate;
return update_paths;
})()
;
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__32542){var vec__32543 = p__32542;var tz = cljs.core.nth.call(null,vec__32543,(0),null);var collection = cljs.core.nth.call(null,vec__32543,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__32544,owner){var map__32788 = p__32544;var map__32788__$1 = ((cljs.core.seq_QMARK_.call(null,map__32788))?cljs.core.apply.call(null,cljs.core.hash_map,map__32788):map__32788);var cursor_data = map__32788__$1;var map__32789 = cljs.core.get.call(null,map__32788__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32789__$1 = ((cljs.core.seq_QMARK_.call(null,map__32789))?cljs.core.apply.call(null,cljs.core.hash_map,map__32789):map__32789);var cursor = map__32789__$1;var data = cljs.core.get.call(null,map__32789__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__32789__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__32789__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32790 = cljs.core.get.call(null,map__32789__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32790__$1 = ((cljs.core.seq_QMARK_.call(null,map__32790))?cljs.core.apply.call(null,cljs.core.hash_map,map__32790):map__32790);var controls = map__32790__$1;var colorchooser = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var initial_bounds = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var location = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"location","location",1815599388));var zoom = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var map_options = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var geotag_aggs = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var link_render_fn = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var threshold_colors = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var bounds = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_collection = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var show_points = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var link_click_fn = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var geohash_aggs = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var boundaryline_agg = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var filter_spec = cljs.core.get.call(null,map__32788__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var filter = cljs.core.get.call(null,map__32788__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.map.t32791 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t32791 = (function (colorchooser,p__32544,initial_bounds,location,owner,map__32788,data,zoom,map_options,cursor_data,geotag_aggs,filter_spec,map__32790,map_component,link_render_fn,boundaryline_collections,controls,cursor,map__32789,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,geohash_aggs,point_data,boundaryline_agg,meta32792){
this.colorchooser = colorchooser;
this.p__32544 = p__32544;
this.initial_bounds = initial_bounds;
this.location = location;
this.owner = owner;
this.map__32788 = map__32788;
this.data = data;
this.zoom = zoom;
this.map_options = map_options;
this.cursor_data = cursor_data;
this.geotag_aggs = geotag_aggs;
this.filter_spec = filter_spec;
this.map__32790 = map__32790;
this.map_component = map_component;
this.link_render_fn = link_render_fn;
this.boundaryline_collections = boundaryline_collections;
this.controls = controls;
this.cursor = cursor;
this.map__32789 = map__32789;
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.boundaryline_collection = boundaryline_collection;
this.show_points = show_points;
this.link_click_fn = link_click_fn;
this.filter = filter;
this.geohash_aggs = geohash_aggs;
this.point_data = point_data;
this.boundaryline_agg = boundaryline_agg;
this.meta32792 = meta32792;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t32791.cljs$lang$type = true;
clustermap.components.map.t32791.cljs$lang$ctorStr = "clustermap.components.map/t32791";
clustermap.components.map.t32791.cljs$lang$ctorPrWriter = ((function (map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map/t32791");
});})(map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32791.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t32791.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,node).off();
domina.events.unlisten_BANG_.call(null,node);
domina.events.unlisten_BANG_.call(null,"clustermap-change-view");
var map__32794 = om.core.get_state.call(null,self__.owner);var map__32794__$1 = ((cljs.core.seq_QMARK_.call(null,map__32794))?cljs.core.apply.call(null,cljs.core.hash_map,map__32794):map__32794);var map__32795 = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32795__$1 = ((cljs.core.seq_QMARK_.call(null,map__32795))?cljs.core.apply.call(null,cljs.core.hash_map,map__32795):map__32795);var path_selections = cljs.core.get.call(null,map__32795__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32795__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32795__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32795__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));return leaflet_map.remove();
});})(map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32791.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t32791.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$,p__32796,p__32797){var self__ = this;
var map__32798 = p__32796;var map__32798__$1 = ((cljs.core.seq_QMARK_.call(null,map__32798))?cljs.core.apply.call(null,cljs.core.hash_map,map__32798):map__32798);var next_cursor_data = map__32798__$1;var map__32799 = cljs.core.get.call(null,map__32798__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32799__$1 = ((cljs.core.seq_QMARK_.call(null,map__32799))?cljs.core.apply.call(null,cljs.core.hash_map,map__32799):map__32799);var next_cursor = map__32799__$1;var next_data = cljs.core.get.call(null,map__32799__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__32799__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__32799__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32800 = cljs.core.get.call(null,map__32799__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32800__$1 = ((cljs.core.seq_QMARK_.call(null,map__32800))?cljs.core.apply.call(null,cljs.core.hash_map,map__32800):map__32800);var next_colorchooser = cljs.core.get.call(null,map__32800__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_collection = cljs.core.get.call(null,map__32800__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_boundaryline_fill_opacity = cljs.core.get.call(null,map__32800__$1,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575));var next_zoom = cljs.core.get.call(null,map__32800__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_threshold_colors = cljs.core.get.call(null,map__32800__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var next_geotag_aggs = cljs.core.get.call(null,map__32800__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var next_bounds = cljs.core.get.call(null,map__32800__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_geohash_aggs = cljs.core.get.call(null,map__32800__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var next_boundaryline_agg = cljs.core.get.call(null,map__32800__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_location = cljs.core.get.call(null,map__32800__$1,new cljs.core.Keyword(null,"location","location",1815599388));var next_show_points = cljs.core.get.call(null,map__32800__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var next_filter = cljs.core.get.call(null,map__32798__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_filter_spec = cljs.core.get.call(null,map__32798__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32801 = p__32797;var map__32801__$1 = ((cljs.core.seq_QMARK_.call(null,map__32801))?cljs.core.apply.call(null,cljs.core.hash_map,map__32801):map__32801);var map__32802 = cljs.core.get.call(null,map__32801__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32802__$1 = ((cljs.core.seq_QMARK_.call(null,map__32802))?cljs.core.apply.call(null,cljs.core.hash_map,map__32802):map__32802);var next_markers = cljs.core.get.call(null,map__32802__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_geotag_markers = cljs.core.get.call(null,map__32802__$1,new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648));var next_geohash_markers = cljs.core.get.call(null,map__32802__$1,new cljs.core.Keyword(null,"geohash-markers","geohash-markers",-1063983705));var next_paths = cljs.core.get.call(null,map__32802__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__32802__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__32801__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var fetch_aggregation_data_fn = cljs.core.get.call(null,map__32801__$1,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532));var fetch_point_data_fn = cljs.core.get.call(null,map__32801__$1,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507));var fetch_geotag_data_fn = cljs.core.get.call(null,map__32801__$1,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950));var fetch_geotag_agg_data_fn = cljs.core.get.call(null,map__32801__$1,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602));var fetch_geohash_agg_data_fn = cljs.core.get.call(null,map__32801__$1,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986));var this$__$1 = this;var map__32803 = om.core.get_shared.call(null,self__.owner);var map__32803__$1 = ((cljs.core.seq_QMARK_.call(null,map__32803))?cljs.core.apply.call(null,cljs.core.hash_map,map__32803):map__32803);var path_marker_click_fn = cljs.core.get.call(null,map__32803__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32803__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32803__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32803__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__32804 = om.core.get_state.call(null,self__.owner);var map__32804__$1 = ((cljs.core.seq_QMARK_.call(null,map__32804))?cljs.core.apply.call(null,cljs.core.hash_map,map__32804):map__32804);var map__32805 = cljs.core.get.call(null,map__32804__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32805__$1 = ((cljs.core.seq_QMARK_.call(null,map__32805))?cljs.core.apply.call(null,cljs.core.hash_map,map__32805):map__32805);var path_selections = cljs.core.get.call(null,map__32805__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32805__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32805__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_marker_cluster_group = cljs.core.get.call(null,map__32805__$1,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671));var leaflet_map = cljs.core.get.call(null,map__32805__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__32804__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__32804__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var zoom_changed = cljs.core.not_EQ_.call(null,next_zoom,self__.zoom);if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
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
{var c__9125__auto___33031 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33031,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33031,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32828){var state_val_32829 = (state_32828[(1)]);if((state_val_32829 === (5)))
{var inst_32826 = (state_32828[(2)]);var state_32828__$1 = state_32828;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32828__$1,inst_32826);
} else
{if((state_val_32829 === (4)))
{var state_32828__$1 = state_32828;var statearr_32830_33032 = state_32828__$1;(statearr_32830_33032[(2)] = null);
(statearr_32830_33032[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32829 === (3)))
{var inst_32818 = (state_32828[(7)]);var inst_32820 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32821 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_32822 = (new cljs.core.PersistentVector(null,1,(5),inst_32820,inst_32821,null));var inst_32823 = om.core.update_BANG_.call(null,self__.cursor,inst_32822,inst_32818);var state_32828__$1 = state_32828;var statearr_32831_33033 = state_32828__$1;(statearr_32831_33033[(2)] = inst_32823);
(statearr_32831_33033[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32829 === (2)))
{var inst_32818 = (state_32828[(7)]);var inst_32818__$1 = (state_32828[(2)]);var state_32828__$1 = (function (){var statearr_32832 = state_32828;(statearr_32832[(7)] = inst_32818__$1);
return statearr_32832;
})();if(cljs.core.truth_(inst_32818__$1))
{var statearr_32833_33034 = state_32828__$1;(statearr_32833_33034[(1)] = (3));
} else
{var statearr_32834_33035 = state_32828__$1;(statearr_32834_33035[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32829 === (1)))
{var inst_32806 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32807 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32808 = leaflet_map.getZoom();var inst_32809 = clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,inst_32808);var inst_32810 = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32811 = om.core._value.call(null,next_filter);var inst_32812 = leaflet_map.getBounds();var inst_32813 = clustermap.components.map.bounds_array.call(null,inst_32812);var inst_32814 = new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32815 = new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32816 = fetch_aggregation_data_fn.call(null,inst_32806,inst_32807,inst_32809,inst_32810,inst_32811,inst_32813,inst_32814,inst_32815);var state_32828__$1 = state_32828;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32828__$1,(2),inst_32816);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33031,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33031,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32838 = [null,null,null,null,null,null,null,null];(statearr_32838[(0)] = state_machine__9111__auto__);
(statearr_32838[(1)] = (1));
return statearr_32838;
});
var state_machine__9111__auto____1 = (function (state_32828){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32828);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32839){if((e32839 instanceof Object))
{var ex__9114__auto__ = e32839;var statearr_32840_33036 = state_32828;(statearr_32840_33036[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32828);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32839;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33037 = state_32828;
state_32828 = G__33037;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32828){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33031,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32841 = f__9126__auto__.call(null);(statearr_32841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33031);
return statearr_32841;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33031,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
var c__9125__auto___33038 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33038,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33038,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32889){var state_val_32890 = (state_32889[(1)]);if((state_val_32890 === (7)))
{var inst_32856 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32857 = ["?natural_id","!name","!location","!latest_employee_count","!latest_turnover","!total_funding"];var inst_32858 = (new cljs.core.PersistentVector(null,6,(5),inst_32856,inst_32857,null));var state_32889__$1 = state_32889;var statearr_32891_33039 = state_32889__$1;(statearr_32891_33039[(2)] = inst_32858);
(statearr_32891_33039[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32890 === (1)))
{var inst_32848 = (state_32889[(7)]);var inst_32842 = [new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"location-attr","location-attr",-1350680971),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.Keyword(null,"max-count","max-count",1539185305)];var inst_32843 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32844 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32845 = om.core._value.call(null,next_filter);var inst_32846 = leaflet_map.getBounds();var inst_32847 = clustermap.components.map.bounds_array.call(null,inst_32846);var inst_32848__$1 = new cljs.core.Keyword(null,"location-attr","location-attr",-1350680971).cljs$core$IFn$_invoke$arity$1(next_location);var state_32889__$1 = (function (){var statearr_32892 = state_32889;(statearr_32892[(8)] = inst_32843);
(statearr_32892[(9)] = inst_32844);
(statearr_32892[(10)] = inst_32842);
(statearr_32892[(7)] = inst_32848__$1);
(statearr_32892[(11)] = inst_32845);
(statearr_32892[(12)] = inst_32847);
return statearr_32892;
})();if(cljs.core.truth_(inst_32848__$1))
{var statearr_32893_33040 = state_32889__$1;(statearr_32893_33040[(1)] = (3));
} else
{var statearr_32894_33041 = state_32889__$1;(statearr_32894_33041[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32890 === (4)))
{var state_32889__$1 = state_32889;var statearr_32895_33042 = state_32889__$1;(statearr_32895_33042[(2)] = "!location");
(statearr_32895_33042[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32890 === (13)))
{var state_32889__$1 = state_32889;var statearr_32896_33043 = state_32889__$1;(statearr_32896_33043[(2)] = null);
(statearr_32896_33043[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32890 === (6)))
{var inst_32853 = (state_32889[(13)]);var state_32889__$1 = state_32889;var statearr_32897_33044 = state_32889__$1;(statearr_32897_33044[(2)] = inst_32853);
(statearr_32897_33044[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32890 === (3)))
{var inst_32848 = (state_32889[(7)]);var state_32889__$1 = state_32889;var statearr_32898_33045 = state_32889__$1;(statearr_32898_33045[(2)] = inst_32848);
(statearr_32898_33045[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32890 === (12)))
{var inst_32879 = (state_32889[(14)]);var inst_32881 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32882 = [new cljs.core.Keyword(null,"point-data","point-data",-1294572970)];var inst_32883 = (new cljs.core.PersistentVector(null,1,(5),inst_32881,inst_32882,null));var inst_32884 = om.core.update_BANG_.call(null,self__.cursor,inst_32883,inst_32879);var state_32889__$1 = state_32889;var statearr_32899_33046 = state_32889__$1;(statearr_32899_33046[(2)] = inst_32884);
(statearr_32899_33046[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32890 === (2)))
{var inst_32879 = (state_32889[(14)]);var inst_32879__$1 = (state_32889[(2)]);var state_32889__$1 = (function (){var statearr_32900 = state_32889;(statearr_32900[(14)] = inst_32879__$1);
return statearr_32900;
})();if(cljs.core.truth_(inst_32879__$1))
{var statearr_32901_33047 = state_32889__$1;(statearr_32901_33047[(1)] = (12));
} else
{var statearr_32902_33048 = state_32889__$1;(statearr_32902_33048[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32890 === (11)))
{var inst_32843 = (state_32889[(8)]);var inst_32844 = (state_32889[(9)]);var inst_32842 = (state_32889[(10)]);var inst_32845 = (state_32889[(11)]);var inst_32860 = (state_32889[(15)]);var inst_32852 = (state_32889[(16)]);var inst_32847 = (state_32889[(12)]);var inst_32874 = (state_32889[(2)]);var inst_32875 = [inst_32843,inst_32844,inst_32845,inst_32847,inst_32852,inst_32860,inst_32874,(1000)];var inst_32876 = cljs.core.PersistentHashMap.fromArrays(inst_32842,inst_32875);var inst_32877 = fetch_point_data_fn.call(null,inst_32876);var state_32889__$1 = state_32889;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32889__$1,(2),inst_32877);
} else
{if((state_val_32890 === (9)))
{var inst_32861 = (state_32889[(17)]);var state_32889__$1 = state_32889;var statearr_32903_33049 = state_32889__$1;(statearr_32903_33049[(2)] = inst_32861);
(statearr_32903_33049[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32890 === (5)))
{var inst_32853 = (state_32889[(13)]);var inst_32852 = (state_32889[(2)]);var inst_32853__$1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(next_location);var state_32889__$1 = (function (){var statearr_32904 = state_32889;(statearr_32904[(13)] = inst_32853__$1);
(statearr_32904[(16)] = inst_32852);
return statearr_32904;
})();if(cljs.core.truth_(inst_32853__$1))
{var statearr_32905_33050 = state_32889__$1;(statearr_32905_33050[(1)] = (6));
} else
{var statearr_32906_33051 = state_32889__$1;(statearr_32906_33051[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32890 === (14)))
{var inst_32887 = (state_32889[(2)]);var state_32889__$1 = state_32889;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32889__$1,inst_32887);
} else
{if((state_val_32890 === (10)))
{var inst_32864 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32865 = ["!latest_turnvoer"];var inst_32866 = [new cljs.core.Keyword(null,"order","order",-1254677256)];var inst_32867 = ["desc"];var inst_32868 = cljs.core.PersistentHashMap.fromArrays(inst_32866,inst_32867);var inst_32869 = [inst_32868];var inst_32870 = cljs.core.PersistentHashMap.fromArrays(inst_32865,inst_32869);var inst_32871 = [inst_32870];var inst_32872 = (new cljs.core.PersistentVector(null,1,(5),inst_32864,inst_32871,null));var state_32889__$1 = state_32889;var statearr_32907_33052 = state_32889__$1;(statearr_32907_33052[(2)] = inst_32872);
(statearr_32907_33052[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32890 === (8)))
{var inst_32861 = (state_32889[(17)]);var inst_32860 = (state_32889[(2)]);var inst_32861__$1 = new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994).cljs$core$IFn$_invoke$arity$1(next_location);var state_32889__$1 = (function (){var statearr_32908 = state_32889;(statearr_32908[(17)] = inst_32861__$1);
(statearr_32908[(15)] = inst_32860);
return statearr_32908;
})();if(cljs.core.truth_(inst_32861__$1))
{var statearr_32909_33053 = state_32889__$1;(statearr_32909_33053[(1)] = (9));
} else
{var statearr_32910_33054 = state_32889__$1;(statearr_32910_33054[(1)] = (10));
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
});})(c__9125__auto___33038,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33038,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32914[(0)] = state_machine__9111__auto__);
(statearr_32914[(1)] = (1));
return statearr_32914;
});
var state_machine__9111__auto____1 = (function (state_32889){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32889);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32915){if((e32915 instanceof Object))
{var ex__9114__auto__ = e32915;var statearr_32916_33055 = state_32889;(statearr_32916_33055[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32889);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32915;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33056 = state_32889;
state_32889 = G__33056;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32889){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33038,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32917 = f__9126__auto__.call(null);(statearr_32917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33038);
return statearr_32917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33038,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___33057 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33057,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33057,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32931){var state_val_32932 = (state_32931[(1)]);if((state_val_32932 === (5)))
{var inst_32929 = (state_32931[(2)]);var state_32931__$1 = state_32931;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32931__$1,inst_32929);
} else
{if((state_val_32932 === (4)))
{var state_32931__$1 = state_32931;var statearr_32933_33058 = state_32931__$1;(statearr_32933_33058[(2)] = null);
(statearr_32933_33058[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32932 === (3)))
{var inst_32921 = (state_32931[(7)]);var inst_32923 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32924 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976)];var inst_32925 = (new cljs.core.PersistentVector(null,3,(5),inst_32923,inst_32924,null));var inst_32926 = om.core.update_BANG_.call(null,self__.cursor,inst_32925,inst_32921);var state_32931__$1 = state_32931;var statearr_32934_33059 = state_32931__$1;(statearr_32934_33059[(2)] = inst_32926);
(statearr_32934_33059[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32932 === (2)))
{var inst_32921 = (state_32931[(7)]);var inst_32921__$1 = (state_32931[(2)]);var state_32931__$1 = (function (){var statearr_32935 = state_32931;(statearr_32935[(7)] = inst_32921__$1);
return statearr_32935;
})();if(cljs.core.truth_(inst_32921__$1))
{var statearr_32936_33060 = state_32931__$1;(statearr_32936_33060[(1)] = (3));
} else
{var statearr_32937_33061 = state_32931__$1;(statearr_32937_33061[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32932 === (1)))
{var inst_32918 = new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32919 = fetch_geotag_data_fn.call(null,inst_32918);var state_32931__$1 = state_32931;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32931__$1,(2),inst_32919);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33057,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33057,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32941 = [null,null,null,null,null,null,null,null];(statearr_32941[(0)] = state_machine__9111__auto__);
(statearr_32941[(1)] = (1));
return statearr_32941;
});
var state_machine__9111__auto____1 = (function (state_32931){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32931);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32942){if((e32942 instanceof Object))
{var ex__9114__auto__ = e32942;var statearr_32943_33062 = state_32931;(statearr_32943_33062[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32931);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32942;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33063 = state_32931;
state_32931 = G__33063;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32931){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33057,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32944 = f__9126__auto__.call(null);(statearr_32944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33057);
return statearr_32944;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33057,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var c__9125__auto___33064 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33064,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33064,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32963){var state_val_32964 = (state_32963[(1)]);if((state_val_32964 === (5)))
{var inst_32961 = (state_32963[(2)]);var state_32963__$1 = state_32963;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32963__$1,inst_32961);
} else
{if((state_val_32964 === (4)))
{var state_32963__$1 = state_32963;var statearr_32965_33065 = state_32963__$1;(statearr_32965_33065[(2)] = null);
(statearr_32965_33065[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32964 === (3)))
{var inst_32952 = (state_32963[(7)]);var inst_32954 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32955 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391)];var inst_32956 = (new cljs.core.PersistentVector(null,3,(5),inst_32954,inst_32955,null));var inst_32957 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32952);var inst_32958 = om.core.update_BANG_.call(null,self__.cursor,inst_32956,inst_32957);var state_32963__$1 = state_32963;var statearr_32966_33066 = state_32963__$1;(statearr_32966_33066[(2)] = inst_32958);
(statearr_32966_33066[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32964 === (2)))
{var inst_32952 = (state_32963[(7)]);var inst_32952__$1 = (state_32963[(2)]);var state_32963__$1 = (function (){var statearr_32967 = state_32963;(statearr_32967[(7)] = inst_32952__$1);
return statearr_32967;
})();if(cljs.core.truth_(inst_32952__$1))
{var statearr_32968_33067 = state_32963__$1;(statearr_32968_33067[(1)] = (3));
} else
{var statearr_32969_33068 = state_32963__$1;(statearr_32969_33068[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32964 === (1)))
{var inst_32945 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32946 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32947 = [next_filter];var inst_32948 = cljs.core.PersistentHashMap.fromArrays(inst_32946,inst_32947);var inst_32949 = cljs.core.merge.call(null,inst_32945,inst_32948);var inst_32950 = fetch_geotag_agg_data_fn.call(null,inst_32949);var state_32963__$1 = state_32963;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32963__$1,(2),inst_32950);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33064,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33064,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32973 = [null,null,null,null,null,null,null,null];(statearr_32973[(0)] = state_machine__9111__auto__);
(statearr_32973[(1)] = (1));
return statearr_32973;
});
var state_machine__9111__auto____1 = (function (state_32963){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32963);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32974){if((e32974 instanceof Object))
{var ex__9114__auto__ = e32974;var statearr_32975_33069 = state_32963;(statearr_32975_33069[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32963);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32974;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33070 = state_32963;
state_32963 = G__33070;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32963){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33064,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32976 = f__9126__auto__.call(null);(statearr_32976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33064);
return statearr_32976;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33064,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var c__9125__auto___33071 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33071,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33071,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32997){var state_val_32998 = (state_32997[(1)]);if((state_val_32998 === (5)))
{var inst_32995 = (state_32997[(2)]);var state_32997__$1 = state_32997;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32997__$1,inst_32995);
} else
{if((state_val_32998 === (4)))
{var state_32997__$1 = state_32997;var statearr_32999_33072 = state_32997__$1;(statearr_32999_33072[(2)] = null);
(statearr_32999_33072[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32998 === (3)))
{var inst_32986 = (state_32997[(7)]);var inst_32988 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32989 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493),new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620)];var inst_32990 = (new cljs.core.PersistentVector(null,3,(5),inst_32988,inst_32989,null));var inst_32991 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32986);var inst_32992 = om.core.update_BANG_.call(null,self__.cursor,inst_32990,inst_32991);var state_32997__$1 = state_32997;var statearr_33000_33073 = state_32997__$1;(statearr_33000_33073[(2)] = inst_32992);
(statearr_33000_33073[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32998 === (2)))
{var inst_32986 = (state_32997[(7)]);var inst_32986__$1 = (state_32997[(2)]);var state_32997__$1 = (function (){var statearr_33001 = state_32997;(statearr_33001[(7)] = inst_32986__$1);
return statearr_33001;
})();if(cljs.core.truth_(inst_32986__$1))
{var statearr_33002_33074 = state_32997__$1;(statearr_33002_33074[(1)] = (3));
} else
{var statearr_33003_33075 = state_32997__$1;(statearr_33003_33075[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32998 === (1)))
{var inst_32977 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32978 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"precision","precision",-1175707478)];var inst_32979 = new cljs.core.Keyword(null,"precision-fn","precision-fn",1742300693).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32980 = inst_32979.call(null,next_zoom);var inst_32981 = [next_filter,next_bounds,inst_32980];var inst_32982 = cljs.core.PersistentHashMap.fromArrays(inst_32978,inst_32981);var inst_32983 = cljs.core.merge.call(null,inst_32977,inst_32982);var inst_32984 = fetch_geohash_agg_data_fn.call(null,inst_32983);var state_32997__$1 = state_32997;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32997__$1,(2),inst_32984);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33071,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33071,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_33007 = [null,null,null,null,null,null,null,null];(statearr_33007[(0)] = state_machine__9111__auto__);
(statearr_33007[(1)] = (1));
return statearr_33007;
});
var state_machine__9111__auto____1 = (function (state_32997){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32997);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e33008){if((e33008 instanceof Object))
{var ex__9114__auto__ = e33008;var statearr_33009_33076 = state_32997;(statearr_33009_33076[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32997);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33008;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33077 = state_32997;
state_32997 = G__33077;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32997){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33071,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_33010 = f__9126__auto__.call(null);(statearr_33010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33071);
return statearr_33010;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33071,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var vec__33011_33078 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_33079 = cljs.core.nth.call(null,vec__33011_33078,(0),null);var selection_path_colours_33080 = cljs.core.nth.call(null,vec__33011_33078,(1),null);var update_paths_invocation_33081 = ((function (vec__33011_33078,new_threshold_colors_33079,selection_path_colours_33080,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_33080,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696),path_marker_click_fn,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575),next_boundaryline_fill_opacity], null));
});})(vec__33011_33078,new_threshold_colors_33079,selection_path_colours_33080,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_33079,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_33079);
} else
{}
var temp__4126__auto___33082 = update_paths_invocation_33081.call(null);if(cljs.core.truth_(temp__4126__auto___33082))
{var notify_chan_33083 = temp__4126__auto___33082;var c__9125__auto___33084 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33084,notify_chan_33083,temp__4126__auto___33082,vec__33011_33078,new_threshold_colors_33079,selection_path_colours_33080,update_paths_invocation_33081,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33084,notify_chan_33083,temp__4126__auto___33082,vec__33011_33078,new_threshold_colors_33079,selection_path_colours_33080,update_paths_invocation_33081,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_33016){var state_val_33017 = (state_33016[(1)]);if((state_val_33017 === (2)))
{var inst_33013 = (state_33016[(2)]);var inst_33014 = update_paths_invocation_33081.call(null);var state_33016__$1 = (function (){var statearr_33018 = state_33016;(statearr_33018[(7)] = inst_33013);
return statearr_33018;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33016__$1,inst_33014);
} else
{if((state_val_33017 === (1)))
{var state_33016__$1 = state_33016;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33016__$1,(2),notify_chan_33083);
} else
{return null;
}
}
});})(c__9125__auto___33084,notify_chan_33083,temp__4126__auto___33082,vec__33011_33078,new_threshold_colors_33079,selection_path_colours_33080,update_paths_invocation_33081,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33084,notify_chan_33083,temp__4126__auto___33082,vec__33011_33078,new_threshold_colors_33079,selection_path_colours_33080,update_paths_invocation_33081,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_33022 = [null,null,null,null,null,null,null,null];(statearr_33022[(0)] = state_machine__9111__auto__);
(statearr_33022[(1)] = (1));
return statearr_33022;
});
var state_machine__9111__auto____1 = (function (state_33016){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_33016);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e33023){if((e33023 instanceof Object))
{var ex__9114__auto__ = e33023;var statearr_33024_33085 = state_33016;(statearr_33024_33085[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33016);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33023;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33086 = state_33016;
state_33016 = G__33086;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_33016){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_33016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33084,notify_chan_33083,temp__4126__auto___33082,vec__33011_33078,new_threshold_colors_33079,selection_path_colours_33080,update_paths_invocation_33081,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_33025 = f__9126__auto__.call(null);(statearr_33025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33084);
return statearr_33025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33084,notify_chan_33083,temp__4126__auto___33082,vec__33011_33078,new_threshold_colors_33079,selection_path_colours_33080,update_paths_invocation_33081,map__32803,map__32803__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32804,map__32804__$1,map__32805,map__32805__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32798,map__32798__$1,next_cursor_data,map__32799,map__32799__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32800,map__32800__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32801,map__32801__$1,map__32802,map__32802__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
});})(map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32791.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t32791.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__33026 = clustermap.components.map.create_map.call(null,node,self__.controls);var map__33026__$1 = ((cljs.core.seq_QMARK_.call(null,map__33026))?cljs.core.apply.call(null,cljs.core.hash_map,map__33026):map__33026);var map = map__33026__$1;var path = cljs.core.get.call(null,map__33026__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__33026__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__33026__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__33027 = om.core.get_shared.call(null,self__.owner);var map__33027__$1 = ((cljs.core.seq_QMARK_.call(null,map__33027))?cljs.core.apply.call(null,cljs.core.hash_map,map__33027):map__33027);var path_marker_click_fn = cljs.core.get.call(null,map__33027__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__33027__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__33027__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__33027__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,map__33026,map__33026__$1,map,path,markers,leaflet_map,map__33027,map__33027__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
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
});})(node,map__33026,map__33026__$1,map,path,markers,leaflet_map,map__33027,map__33027__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("moveend",((function (node,map__33026,map__33026__$1,map,path,markers,leaflet_map,map__33027,map__33027__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__33026,map__33026__$1,map,path,markers,leaflet_map,map__33027,map__33027__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupopen",((function (node,map__33026,map__33026__$1,map,path,markers,leaflet_map,map__33027,map__33027__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__33026,map__33026__$1,map,path,markers,leaflet_map,map__33027,map__33027__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__33026,map__33026__$1,map,path,markers,leaflet_map,map__33027,map__33027__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
});})(node,map__33026,map__33026__$1,map,path,markers,leaflet_map,map__33027,map__33027__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupclose",((function (node,map__33026,map__33026__$1,map,path,markers,leaflet_map,map__33027,map__33027__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__33026,map__33026__$1,map,path,markers,leaflet_map,map__33027,map__33027__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
if(cljs.core.truth_(path_marker_click_fn))
{leaflet_map.on("click",((function (node,map__33026,map__33026__$1,map,path,markers,leaflet_map,map__33027,map__33027__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return path_marker_click_fn.call(null,null);
});})(node,map__33026,map__33026__$1,map,path,markers,leaflet_map,map__33027,map__33027__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
jayq.core.$.call(null,node).on("click","a.boundaryline-popup-link",((function (node,map__33026,map__33026__$1,map,path,markers,leaflet_map,map__33027,map__33027__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var G__33028 = e;var G__33028__$1 = (((G__33028 == null))?null:G__33028.target);var G__33028__$2 = (((G__33028__$1 == null))?null:domina.attr.call(null,G__33028__$1,"data-boundaryline-id"));var G__33028__$3 = (((G__33028__$2 == null))?null:path_marker_click_fn.call(null,G__33028__$2));return G__33028__$3;
});})(node,map__33026,map__33026__$1,map,path,markers,leaflet_map,map__33027,map__33027__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
jayq.core.$.call(null,node).on("click","[data-onclick-id]",((function (node,map__33026,map__33026__$1,map,path,markers,leaflet_map,map__33027,map__33027__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var current_target = e.currentTarget;var handler_id = domina.attr.call(null,current_target,"data-onclick-id");var handler = clustermap.components.map.find_event_handler.call(null,handler_id);if(cljs.core.truth_(handler))
{return handler.call(null,e);
} else
{return null;
}
});})(node,map__33026,map__33026__$1,map,path,markers,leaflet_map,map__33027,map__33027__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532),clustermap.api.boundaryline_aggregation_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507),clustermap.api.location_lists_2_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950),clustermap.api.geotags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602),clustermap.api.nested_aggregation_factory.call(null));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986),clustermap.api.geohash_grid_factory.call(null));
});})(map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32791.prototype.om$core$IRender$ = true;
clustermap.components.map.t32791.prototype.om$core$IRender$render$arity$1 = ((function (map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32793){var self__ = this;
var _32793__$1 = this;return self__.meta32792;
});})(map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32793,meta32792__$1){var self__ = this;
var _32793__$1 = this;return (new clustermap.components.map.t32791(self__.colorchooser,self__.p__32544,self__.initial_bounds,self__.location,self__.owner,self__.map__32788,self__.data,self__.zoom,self__.map_options,self__.cursor_data,self__.geotag_aggs,self__.filter_spec,self__.map__32790,self__.map_component,self__.link_render_fn,self__.boundaryline_collections,self__.controls,self__.cursor,self__.map__32789,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.show_points,self__.link_click_fn,self__.filter,self__.geohash_aggs,self__.point_data,self__.boundaryline_agg,meta32792__$1));
});})(map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.__GT_t32791 = ((function (map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function __GT_t32791(colorchooser__$1,p__32544__$1,initial_bounds__$1,location__$1,owner__$1,map__32788__$2,data__$1,zoom__$1,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map__32790__$2,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,map__32789__$2,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,geohash_aggs__$1,point_data__$1,boundaryline_agg__$1,meta32792){return (new clustermap.components.map.t32791(colorchooser__$1,p__32544__$1,initial_bounds__$1,location__$1,owner__$1,map__32788__$2,data__$1,zoom__$1,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map__32790__$2,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,cursor__$1,map__32789__$2,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,geohash_aggs__$1,point_data__$1,boundaryline_agg__$1,meta32792));
});})(map__32788,map__32788__$1,cursor_data,map__32789,map__32789__$1,cursor,data,point_data,boundaryline_collections,map__32790,map__32790__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
}
return (new clustermap.components.map.t32791(colorchooser,p__32544,initial_bounds,location,owner,map__32788__$1,data,zoom,map_options,cursor_data,geotag_aggs,filter_spec,map__32790__$1,map_component,link_render_fn,boundaryline_collections,controls,cursor,map__32789__$1,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,geohash_aggs,point_data,boundaryline_agg,null));
});
