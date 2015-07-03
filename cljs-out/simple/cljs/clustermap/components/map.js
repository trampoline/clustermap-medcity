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
clustermap.components.map.default_api_key = (function (){var or__3639__auto__ = (function (){var G__32217 = config;var G__32217__$1 = (((G__32217 == null))?null:G__32217.components);var G__32217__$2 = (((G__32217__$1 == null))?null:G__32217__$1.map);var G__32217__$3 = (((G__32217__$2 == null))?null:G__32217__$2.api_key);return G__32217__$3;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,p__32218){var map__32220 = p__32218;var map__32220__$1 = ((cljs.core.seq_QMARK_.call(null,map__32220))?cljs.core.apply.call(null,cljs.core.hash_map,map__32220):map__32220);var api_key = cljs.core.get.call(null,map__32220__$1,new cljs.core.Keyword(null,"api-key","api-key",1037904031),clustermap.components.map.default_api_key);var map_options = cljs.core.get.call(null,map__32220__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var bounds = cljs.core.get.call(null,map__32220__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds = cljs.core.get.call(null,map__32220__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var zoom_control = ((new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217).cljs$core$IFn$_invoke$arity$1(map_options) === false)?false:true);var m = L.map.call(null,id_or_el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,map_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),false,new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(19)], null))));var tiles = L.mapbox.tileLayer.call(null,api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomleft"});var lmcg = L.markerClusterGroup.call(null,{"maxClusterRadius": (40)});m.addLayer(tiles);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__32221){
var m = cljs.core.first(arglist__32221);
var all_bounds = cljs.core.rest(arglist__32221);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.render_marker_icon = (function render_marker_icon(p__32222,location_sites){var map__32224 = p__32222;var map__32224__$1 = ((cljs.core.seq_QMARK_.call(null,map__32224))?cljs.core.apply.call(null,cljs.core.hash_map,map__32224):map__32224);var location_spec = map__32224__$1;var marker_render_fn = cljs.core.get.call(null,map__32224__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));if((cljs.core.count.call(null,location_sites) > (1)))
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-multiple",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
} else
{return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon-marker-single",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(32)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(16)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),marker_render_fn.call(null,location_sites,location_spec)], null)));
}
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(item_render_fn,location_sites,location_site_click_handler_keys){return ("<ul class=\"location-marker-popup-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4377__auto__ = (function iter__32229(s__32230){return (new cljs.core.LazySeq(null,(function (){var s__32230__$1 = s__32230;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32230__$1);if(temp__4126__auto__)
{var s__32230__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32230__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32230__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32232 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32231 = (0);while(true){
if((i__32231 < size__4376__auto__))
{var site = cljs.core._nth.call(null,c__4375__auto__,i__32231);cljs.core.chunk_append.call(null,b__32232,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))));
{
var G__32233 = (i__32231 + (1));
i__32231 = G__32233;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32232),iter__32229.call(null,cljs.core.chunk_rest.call(null,s__32230__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32232),null);
}
} else
{var site = cljs.core.first.call(null,s__32230__$2);return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(function (){var click_handler_key = cljs.core.get.call(null,location_site_click_handler_keys,site);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),(cljs.core.truth_(click_handler_key)?click_handler_key:null)], null),item_render_fn.call(null,site)], null)], null);
})()))),iter__32229.call(null,cljs.core.rest.call(null,s__32230__$2)));
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
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,location_sites,p__32234){var map__32239 = p__32234;var map__32239__$1 = ((cljs.core.seq_QMARK_.call(null,map__32239))?cljs.core.apply.call(null,cljs.core.hash_map,map__32239):map__32239);var map__32240 = cljs.core.get.call(null,map__32239__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__32240__$1 = ((cljs.core.seq_QMARK_.call(null,map__32240))?cljs.core.apply.call(null,cljs.core.hash_map,map__32240):map__32240);var location_spec = map__32240__$1;var item_click_fn = cljs.core.get.call(null,map__32240__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__32240__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__32240__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var temp__4124__auto__ = (function (){var G__32241 = location_sites;var G__32241__$1 = (((G__32241 == null))?null:cljs.core.first.call(null,G__32241));var G__32241__$2 = (((G__32241__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__32241__$1));var G__32241__$3 = (((G__32241__$2 == null))?null:cljs.core.reverse.call(null,G__32241__$2));var G__32241__$4 = (((G__32241__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__32241__$3));return G__32241__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__32239,map__32239__$1,map__32240,map__32240__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,leaflet_marker,popup,latlong,temp__4124__auto__,map__32239,map__32239__$1,map__32240,map__32240__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);leaflet_marker.on("mouseover",((function (icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__32239,map__32239__$1,map__32240,map__32240__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (e){return leaflet_marker.openPopup();
});})(icon,leaflet_marker,popup,location_site_click_handler_keys,latlong,temp__4124__auto__,map__32239,map__32239__$1,map__32240,map__32240__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
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
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4579__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_32242_32243 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32242_32243,sb__4579__auto__,temp__4124__auto__,map__32239,map__32239__$1,map__32240,map__32240__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (x__4580__auto__){return sb__4579__auto__.append(x__4580__auto__);
});})(_STAR_print_fn_STAR_32242_32243,sb__4579__auto__,temp__4124__auto__,map__32239,map__32239__$1,map__32240,map__32240__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32242_32243;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4579__auto__));
})())));
}
});
clustermap.components.map.remove_marker_event_handlers = (function remove_marker_event_handlers(p__32244){var map__32250 = p__32244;var map__32250__$1 = ((cljs.core.seq_QMARK_.call(null,map__32250))?cljs.core.apply.call(null,cljs.core.hash_map,map__32250):map__32250);var marker = map__32250__$1;var click_handler_keys = cljs.core.get.call(null,map__32250__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32250__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));clustermap.components.map.remove_event_handler.call(null,click_handler_key);
var seq__32251 = cljs.core.seq.call(null,click_handler_keys);var chunk__32252 = null;var count__32253 = (0);var i__32254 = (0);while(true){
if((i__32254 < count__32253))
{var chk = cljs.core._nth.call(null,chunk__32252,i__32254);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__32255 = seq__32251;
var G__32256 = chunk__32252;
var G__32257 = count__32253;
var G__32258 = (i__32254 + (1));
seq__32251 = G__32255;
chunk__32252 = G__32256;
count__32253 = G__32257;
i__32254 = G__32258;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32251);if(temp__4126__auto__)
{var seq__32251__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32251__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32251__$1);{
var G__32259 = cljs.core.chunk_rest.call(null,seq__32251__$1);
var G__32260 = c__4408__auto__;
var G__32261 = cljs.core.count.call(null,c__4408__auto__);
var G__32262 = (0);
seq__32251 = G__32259;
chunk__32252 = G__32260;
count__32253 = G__32261;
i__32254 = G__32262;
continue;
}
} else
{var chk = cljs.core.first.call(null,seq__32251__$1);clustermap.components.map.remove_event_handler.call(null,chk);
{
var G__32263 = cljs.core.next.call(null,seq__32251__$1);
var G__32264 = null;
var G__32265 = (0);
var G__32266 = (0);
seq__32251 = G__32263;
chunk__32252 = G__32264;
count__32253 = G__32265;
i__32254 = G__32266;
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
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,leaflet_marker_cluster_group,p__32267,location_sites,p__32268){var map__32272 = p__32267;var map__32272__$1 = ((cljs.core.seq_QMARK_.call(null,map__32272))?cljs.core.apply.call(null,cljs.core.hash_map,map__32272):map__32272);var marker = map__32272__$1;var click_handler_keys = cljs.core.get.call(null,map__32272__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32272__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32272__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var map__32273 = p__32268;var map__32273__$1 = ((cljs.core.seq_QMARK_.call(null,map__32273))?cljs.core.apply.call(null,cljs.core.hash_map,map__32273):map__32273);var map__32274 = cljs.core.get.call(null,map__32273__$1,new cljs.core.Keyword(null,"location","location",1815599388));var map__32274__$1 = ((cljs.core.seq_QMARK_.call(null,map__32274))?cljs.core.apply.call(null,cljs.core.hash_map,map__32274):map__32274);var location_spec = map__32274__$1;var item_click_fn = cljs.core.get.call(null,map__32274__$1,new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079));var item_render_fn = cljs.core.get.call(null,map__32274__$1,new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916));var marker_render_fn = cljs.core.get.call(null,map__32274__$1,new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716));var icon = clustermap.components.map.render_marker_icon.call(null,location_spec,location_sites);var popup = L.popup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoPan","autoPan",1033991633),false], null)));var location_site_click_handler_keys = (cljs.core.truth_(item_click_fn)?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (icon,popup,map__32272,map__32272__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32273,map__32273__$1,map__32274,map__32274__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn){
return (function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ls,clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,item_click_fn,ls))], null);
});})(icon,popup,map__32272,map__32272__$1,marker,click_handler_keys,click_handler_key,leaflet_marker,map__32273,map__32273__$1,map__32274,map__32274__$1,location_spec,item_click_fn,item_render_fn,marker_render_fn))
,location_sites)):null);clustermap.components.map.remove_marker_event_handlers.call(null,marker);
leaflet_marker.setIcon(icon);
popup.setContent(clustermap.components.map.marker_popup_content.call(null,item_render_fn,location_sites,location_site_click_handler_keys));
leaflet_marker.bindPopup(popup);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407)),new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712),cljs.core.vals.call(null,location_site_click_handler_keys));
});
/**
* remove a marker from a cluster group or directly from the map
*/
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,leaflet_marker_cluster_group,p__32275){var map__32277 = p__32275;var map__32277__$1 = ((cljs.core.seq_QMARK_.call(null,map__32277))?cljs.core.apply.call(null,cljs.core.hash_map,map__32277):map__32277);var marker = map__32277__$1;var click_handler_keys = cljs.core.get.call(null,map__32277__$1,new cljs.core.Keyword(null,"click-handler-keys","click-handler-keys",-294288712));var click_handler_key = cljs.core.get.call(null,map__32277__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32277__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));clustermap.components.map.remove_marker_event_handlers.call(null,marker);
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
,update_marker_keys));var _ = (function (){var seq__32282 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32283 = null;var count__32284 = (0);var i__32285 = (0);while(true){
if((i__32285 < count__32284))
{var k = cljs.core._nth.call(null,chunk__32283,i__32285);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32286 = seq__32282;
var G__32287 = chunk__32283;
var G__32288 = count__32284;
var G__32289 = (i__32285 + (1));
seq__32282 = G__32286;
chunk__32283 = G__32287;
count__32284 = G__32288;
i__32285 = G__32289;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32282);if(temp__4126__auto__)
{var seq__32282__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32282__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32282__$1);{
var G__32290 = cljs.core.chunk_rest.call(null,seq__32282__$1);
var G__32291 = c__4408__auto__;
var G__32292 = cljs.core.count.call(null,c__4408__auto__);
var G__32293 = (0);
seq__32282 = G__32290;
chunk__32283 = G__32291;
count__32284 = G__32292;
i__32285 = G__32293;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32282__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,leaflet_marker_cluster_group,cljs.core.get.call(null,markers,k));
{
var G__32294 = cljs.core.next.call(null,seq__32282__$1);
var G__32295 = null;
var G__32296 = (0);
var G__32297 = (0);
seq__32282 = G__32294;
chunk__32283 = G__32295;
count__32284 = G__32296;
i__32285 = G__32297;
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
clustermap.components.map.marker_color_class = (function marker_color_class(n){var pred__32301 = cljs.core._EQ_;var expr__32302 = n;if(cljs.core.truth_(pred__32301.call(null,(0),expr__32302)))
{return "marker-cluster-small";
} else
{if(cljs.core.truth_(pred__32301.call(null,(1),expr__32302)))
{return "marker-cluster-medium";
} else
{if(cljs.core.truth_(pred__32301.call(null,(2),expr__32302)))
{return "marker-cluster-large";
} else
{return "marker-cluster-small";
}
}
}
});
clustermap.components.map.render_geotag_icon = (function render_geotag_icon(p__32304,geotag,geotag_agg){var map__32307 = p__32304;var map__32307__$1 = ((cljs.core.seq_QMARK_.call(null,map__32307))?cljs.core.apply.call(null,cljs.core.hash_map,map__32307):map__32307);var geotag_agg_spec = map__32307__$1;var colorchooser_fn = cljs.core.get.call(null,map__32307__$1,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899));var icon_render_fn = cljs.core.get.call(null,map__32307__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var color_value = colorchooser_fn.call(null,geotag_agg);return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),("marker-cluster "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.marker_color_class.call(null,color_value)))], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32308 = icon_render_fn.call(null,geotag,geotag_agg);if(cljs.core.map_QMARK_.call(null,attrs32308))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32308)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32308))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geotag_marker_popup_content = (function render_geotag_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))))));
});
clustermap.components.map.create_geotag_marker = (function create_geotag_marker(leaflet_map,p__32309,geotag,geotag_agg){var map__32311 = p__32309;var map__32311__$1 = ((cljs.core.seq_QMARK_.call(null,map__32311))?cljs.core.apply.call(null,cljs.core.hash_map,map__32311):map__32311);var geotag_agg_spec = map__32311__$1;var click_fn = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(geotag),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(geotag)], null));var icon = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32311,map__32311__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32311,map__32311__$1,geotag_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geotag_marker = (function update_geotag_marker(leaflet_map,p__32312,p__32313,geotag,geotag_agg){var map__32316 = p__32312;var map__32316__$1 = ((cljs.core.seq_QMARK_.call(null,map__32316))?cljs.core.apply.call(null,cljs.core.hash_map,map__32316):map__32316);var geotag_agg_spec = map__32316__$1;var click_fn = cljs.core.get.call(null,map__32316__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32316__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32316__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32317 = p__32313;var map__32317__$1 = ((cljs.core.seq_QMARK_.call(null,map__32317))?cljs.core.apply.call(null,cljs.core.hash_map,map__32317):map__32317);var marker = map__32317__$1;var click_handler_key = cljs.core.get.call(null,map__32317__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32317__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var icon_32318 = clustermap.components.map.render_geotag_icon.call(null,geotag_agg_spec,geotag,geotag_agg);var new_click_handler_key_32319 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geotag,geotag_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setIcon(icon_32318);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32319);
return marker;
});
clustermap.components.map.update_geotag_markers = (function update_geotag_markers(leaflet_map,geotag_markers_atom,p__32320,points_showing_QMARK_){var map__32326 = p__32320;var map__32326__$1 = ((cljs.core.seq_QMARK_.call(null,map__32326))?cljs.core.apply.call(null,cljs.core.hash_map,map__32326):map__32326);var geotag_agg_spec = map__32326__$1;var geotag_agg_data = cljs.core.get.call(null,map__32326__$1,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391));var geotag_data = cljs.core.get.call(null,map__32326__$1,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976));var popup_render_fn = cljs.core.get.call(null,map__32326__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32326__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var colorchooser_factory_fn = cljs.core.get.call(null,map__32326__$1,new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307));var show_at_zoom_fn = cljs.core.get.call(null,map__32326__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var colorchooser_fn = (cljs.core.truth_(colorchooser_factory_fn)?colorchooser_factory_fn.call(null,geotag_agg_data):cljs.core.constantly.call(null,(1)));var geotag_agg_spec__$1 = cljs.core.assoc.call(null,geotag_agg_spec,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899),colorchooser_fn);var geotags_by_tag = cljs.core.reduce.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,map__32326,map__32326__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (m,t){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(t),t);
});})(colorchooser_fn,geotag_agg_spec__$1,map__32326,map__32326__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,cljs.core.PersistentArrayMap.EMPTY,geotag_data);var geotag_aggs_by_tag = cljs.core.reduce.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,map__32326,map__32326__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (m,a){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226).cljs$core$IFn$_invoke$arity$1(a),a);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,map__32326,map__32326__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
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
})())?null:cljs.core.set.call(null,cljs.core.keys.call(null,geotag_aggs_by_tag)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32326,map__32326__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geotag_marker.call(null,leaflet_map,geotag_agg_spec__$1,cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32326,map__32326__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32326,map__32326__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geotag_marker.call(null,leaflet_map,geotag_agg_spec__$1,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geotags_by_tag,k),cljs.core.get.call(null,geotag_aggs_by_tag,k))], null);
});})(colorchooser_fn,geotag_agg_spec__$1,geotags_by_tag,geotag_aggs_by_tag,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32326,map__32326__$1,geotag_agg_spec,geotag_agg_data,geotag_data,popup_render_fn,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32327 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32328 = null;var count__32329 = (0);var i__32330 = (0);while(true){
if((i__32330 < count__32329))
{var k = cljs.core._nth.call(null,chunk__32328,i__32330);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32331 = seq__32327;
var G__32332 = chunk__32328;
var G__32333 = count__32329;
var G__32334 = (i__32330 + (1));
seq__32327 = G__32331;
chunk__32328 = G__32332;
count__32329 = G__32333;
i__32330 = G__32334;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32327);if(temp__4126__auto__)
{var seq__32327__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32327__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32327__$1);{
var G__32335 = cljs.core.chunk_rest.call(null,seq__32327__$1);
var G__32336 = c__4408__auto__;
var G__32337 = cljs.core.count.call(null,c__4408__auto__);
var G__32338 = (0);
seq__32327 = G__32335;
chunk__32328 = G__32336;
count__32329 = G__32337;
i__32330 = G__32338;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32327__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32339 = cljs.core.next.call(null,seq__32327__$1);
var G__32340 = null;
var G__32341 = (0);
var G__32342 = (0);
seq__32327 = G__32339;
chunk__32328 = G__32340;
count__32329 = G__32341;
i__32330 = G__32342;
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
clustermap.components.map.render_geohash_icon = (function render_geohash_icon(p__32343,geohash_agg){var map__32346 = p__32343;var map__32346__$1 = ((cljs.core.seq_QMARK_.call(null,map__32346))?cljs.core.apply.call(null,cljs.core.hash_map,map__32346):map__32346);var geohash_agg_spec = map__32346__$1;var colorchooser_fn = cljs.core.get.call(null,map__32346__$1,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899));var icon_render_fn = cljs.core.get.call(null,map__32346__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var color_value = colorchooser_fn.call(null,geohash_agg);return L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"agg-cluster",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.Keyword(null,"html","html",-998796897),("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),("marker-cluster "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.components.map.marker_color_class.call(null,color_value)))], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32347 = icon_render_fn.call(null,geohash_agg);if(cljs.core.map_QMARK_.call(null,attrs32347))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32347)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32347))+"</div>");
}
})())+"</div>")], null)));
});
clustermap.components.map.render_geohash_marker_popup_content = (function render_geohash_marker_popup_content(click_handler_key,content){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(click_handler_key)?("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-onclick-id","data-onclick-id",1903895429),click_handler_key,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,content))+"</div>"):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs32349 = content;if(cljs.core.map_QMARK_.call(null,attrs32349))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs32349)))+"></div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs32349))+"</div>");
}
})())))));
});
/**
* we get bounds for the points contained in the geohash area, so take the
* center point as the marker point
*/
clustermap.components.map.geohash_center_point = (function geohash_center_point(p__32350){var map__32355 = p__32350;var map__32355__$1 = ((cljs.core.seq_QMARK_.call(null,map__32355))?cljs.core.apply.call(null,cljs.core.hash_map,map__32355):map__32355);var geohash_agg = map__32355__$1;var bounds = cljs.core.get.call(null,map__32355__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var vec__32356 = bounds;var vec__32357 = cljs.core.nth.call(null,vec__32356,(0),null);var south = cljs.core.nth.call(null,vec__32357,(0),null);var west = cljs.core.nth.call(null,vec__32357,(1),null);var vec__32358 = cljs.core.nth.call(null,vec__32356,(1),null);var north = cljs.core.nth.call(null,vec__32358,(0),null);var east = cljs.core.nth.call(null,vec__32358,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((south + north) / (2)),((west + east) / (2))], null);
});
clustermap.components.map.create_geohash_marker = (function create_geohash_marker(leaflet_map,p__32359,geohash_agg){var map__32361 = p__32359;var map__32361__$1 = ((cljs.core.seq_QMARK_.call(null,map__32361))?cljs.core.apply.call(null,cljs.core.hash_map,map__32361):map__32361);var geohash_agg_spec = map__32361__$1;var click_fn = cljs.core.get.call(null,map__32361__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32361__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32361__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var latlong = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var leaflet_marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var click_handler_key = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);leaflet_marker.on("click",((function (latlong,icon,leaflet_marker,click_handler_key,map__32361,map__32361__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn){
return (function (e){return leaflet_map.setView(latlong,(leaflet_map.getZoom() + (1)));
});})(latlong,icon,leaflet_marker,click_handler_key,map__32361,map__32361__$1,geohash_agg_spec,click_fn,popup_render_fn,icon_render_fn))
);
leaflet_marker.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048),leaflet_marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),click_handler_key], null);
});
clustermap.components.map.update_geohash_marker = (function update_geohash_marker(leaflet_map,p__32362,p__32363,geohash_agg){var map__32366 = p__32362;var map__32366__$1 = ((cljs.core.seq_QMARK_.call(null,map__32366))?cljs.core.apply.call(null,cljs.core.hash_map,map__32366):map__32366);var geohash_agg_spec = map__32366__$1;var click_fn = cljs.core.get.call(null,map__32366__$1,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548));var popup_render_fn = cljs.core.get.call(null,map__32366__$1,new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160));var icon_render_fn = cljs.core.get.call(null,map__32366__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var map__32367 = p__32363;var map__32367__$1 = ((cljs.core.seq_QMARK_.call(null,map__32367))?cljs.core.apply.call(null,cljs.core.hash_map,map__32367):map__32367);var marker = map__32367__$1;var click_handler_key = cljs.core.get.call(null,map__32367__$1,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407));var leaflet_marker = cljs.core.get.call(null,map__32367__$1,new cljs.core.Keyword(null,"leaflet-marker","leaflet-marker",821991048));var latlong_32368 = cljs.core.clj__GT_js.call(null,clustermap.components.map.geohash_center_point.call(null,geohash_agg));var icon_32369 = clustermap.components.map.render_geohash_icon.call(null,geohash_agg_spec,geohash_agg);var new_click_handler_key_32370 = (cljs.core.truth_(click_fn)?clustermap.components.map.register_event_handler.call(null,cljs.core.partial.call(null,click_fn,geohash_agg)):null);if(cljs.core.truth_(click_handler_key))
{clustermap.components.map.remove_event_handler.call(null,click_handler_key);
} else
{}
leaflet_marker.setLatLng(latlong_32368);
leaflet_marker.setIcon(icon_32369);
cljs.core.assoc.call(null,marker,new cljs.core.Keyword(null,"click-handler-key","click-handler-key",498631407),new_click_handler_key_32370);
return marker;
});
clustermap.components.map.update_geohash_markers = (function update_geohash_markers(leaflet_map,geohash_markers_atom,p__32371,points_showing_QMARK_){var map__32377 = p__32371;var map__32377__$1 = ((cljs.core.seq_QMARK_.call(null,map__32377))?cljs.core.apply.call(null,cljs.core.hash_map,map__32377):map__32377);var geohash_agg_spec = map__32377__$1;var geohash_agg_data = cljs.core.get.call(null,map__32377__$1,new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620));var icon_render_fn = cljs.core.get.call(null,map__32377__$1,new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915));var colorchooser_factory_fn = cljs.core.get.call(null,map__32377__$1,new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307));var show_at_zoom_fn = cljs.core.get.call(null,map__32377__$1,new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031));var colorchooser_fn = (cljs.core.truth_(colorchooser_factory_fn)?colorchooser_factory_fn.call(null,geohash_agg_data):cljs.core.constantly.call(null,(1)));var geohash_agg_spec__$1 = cljs.core.assoc.call(null,geohash_agg_spec,new cljs.core.Keyword(null,"colorchooser-fn","colorchooser-fn",1787918899),colorchooser_fn);var geohash_aggs_by_geohash = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,map__32377,map__32377__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (gha){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geohash-grid","geohash-grid",2001750091).cljs$core$IFn$_invoke$arity$1(gha),gha], null);
});})(colorchooser_fn,geohash_agg_spec__$1,map__32377,map__32377__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
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
})())?cljs.core.set.call(null,cljs.core.keys.call(null,geohash_aggs_by_geohash)):null);var update_marker_keys = clojure.set.intersection.call(null,marker_keys,latest_marker_keys);var new_marker_keys = clojure.set.difference.call(null,latest_marker_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,latest_marker_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32377,map__32377__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_geohash_marker.call(null,leaflet_map,geohash_agg_spec__$1,cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,map__32377,map__32377__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32377,map__32377__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_geohash_marker.call(null,leaflet_map,geohash_agg_spec__$1,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,geohash_aggs_by_geohash,k))], null);
});})(colorchooser_fn,geohash_agg_spec__$1,geohash_aggs_by_geohash,markers,marker_keys,show_at_zoom_fn__$1,zoom,latest_marker_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers,map__32377,map__32377__$1,geohash_agg_spec,geohash_agg_data,icon_render_fn,colorchooser_factory_fn,show_at_zoom_fn))
,update_marker_keys));var _ = (function (){var seq__32378 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32379 = null;var count__32380 = (0);var i__32381 = (0);while(true){
if((i__32381 < count__32380))
{var k = cljs.core._nth.call(null,chunk__32379,i__32381);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32382 = seq__32378;
var G__32383 = chunk__32379;
var G__32384 = count__32380;
var G__32385 = (i__32381 + (1));
seq__32378 = G__32382;
chunk__32379 = G__32383;
count__32380 = G__32384;
i__32381 = G__32385;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32378);if(temp__4126__auto__)
{var seq__32378__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32378__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32378__$1);{
var G__32386 = cljs.core.chunk_rest.call(null,seq__32378__$1);
var G__32387 = c__4408__auto__;
var G__32388 = cljs.core.count.call(null,c__4408__auto__);
var G__32389 = (0);
seq__32378 = G__32386;
chunk__32379 = G__32387;
count__32380 = G__32388;
i__32381 = G__32389;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32378__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,null,cljs.core.get.call(null,markers,k));
{
var G__32390 = cljs.core.next.call(null,seq__32378__$1);
var G__32391 = null;
var G__32392 = (0);
var G__32393 = (0);
seq__32378 = G__32390;
chunk__32379 = G__32391;
count__32380 = G__32392;
i__32381 = G__32393;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__32402 = cljs.core.js__GT_clj.call(null,envelope);var map__32402__$1 = ((cljs.core.seq_QMARK_.call(null,map__32402))?cljs.core.apply.call(null,cljs.core.hash_map,map__32402):map__32402);var clj_envelope = map__32402__$1;var vec__32403 = cljs.core.get.call(null,map__32402__$1,"coordinates");var vec__32404 = cljs.core.nth.call(null,vec__32403,(0),null);var vec__32405 = cljs.core.nth.call(null,vec__32404,(0),null);var miny0 = cljs.core.nth.call(null,vec__32405,(0),null);var minx0 = cljs.core.nth.call(null,vec__32405,(1),null);var vec__32406 = cljs.core.nth.call(null,vec__32404,(1),null);var maxy1 = cljs.core.nth.call(null,vec__32406,(0),null);var minx1 = cljs.core.nth.call(null,vec__32406,(1),null);var vec__32407 = cljs.core.nth.call(null,vec__32404,(2),null);var maxy2 = cljs.core.nth.call(null,vec__32407,(0),null);var maxx2 = cljs.core.nth.call(null,vec__32407,(1),null);var vec__32408 = cljs.core.nth.call(null,vec__32404,(3),null);var miny3 = cljs.core.nth.call(null,vec__32408,(0),null);var maxx3 = cljs.core.nth.call(null,vec__32408,(1),null);var vec__32409 = cljs.core.nth.call(null,vec__32404,(4),null);var miny4 = cljs.core.nth.call(null,vec__32409,(0),null);var minx4 = cljs.core.nth.call(null,vec__32409,(1),null);var inner = vec__32404;var coords = vec__32403;return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));
});
clustermap.components.map.boundary_marker_popup_content = (function boundary_marker_popup_content(path_fn,js_boundaryline){var bl_id = (js_boundaryline["id"]);var bl_name = (js_boundaryline["compact_name"]);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"href","href",-793805698),(cljs.core.truth_(path_fn)?path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-boundaryline","js-boundaryline",1803130691),js_boundaryline):"#"),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"boundaryline-popup-link"], null)))+"><span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-boundaryline-id","data-boundaryline-id",930352404),bl_id,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-js-boundaryline-name"], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,bl_name))+"</span></a>");
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__32410,p__32411){var map__32414 = p__32410;var map__32414__$1 = ((cljs.core.seq_QMARK_.call(null,map__32414))?cljs.core.apply.call(null,cljs.core.hash_map,map__32414):map__32414);var fill_color = cljs.core.get.call(null,map__32414__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__32414__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__32414__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var map__32415 = p__32411;var map__32415__$1 = ((cljs.core.seq_QMARK_.call(null,map__32415))?cljs.core.apply.call(null,cljs.core.hash_map,map__32415):map__32415);var boundaryline_fill_opacity = cljs.core.get.call(null,map__32415__$1,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575),0.4);if(cljs.core.truth_((function (){var and__3627__auto__ = selected;if(cljs.core.truth_(and__3627__auto__))
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
var create_path__delegate = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32416,p__32417){var map__32421 = p__32416;var map__32421__$1 = ((cljs.core.seq_QMARK_.call(null,map__32421))?cljs.core.apply.call(null,cljs.core.hash_map,map__32421):map__32421);var path_attrs = map__32421__$1;var selected = cljs.core.get.call(null,map__32421__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var vec__32422 = p__32417;var map__32423 = cljs.core.nth.call(null,vec__32422,(0),null);var map__32423__$1 = ((cljs.core.seq_QMARK_.call(null,map__32423))?cljs.core.apply.call(null,cljs.core.hash_map,map__32423):map__32423);var opts = map__32423__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32423__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32423__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));var popup_content = clustermap.components.map.boundary_marker_popup_content.call(null,null,js_boundaryline);clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs,opts);
leaflet_path.addTo(leaflet_map);
leaflet_path.bindPopup(popup_content);
leaflet_path.on("dblclick",((function (tolerance,bounds,leaflet_path,popup_content,map__32421,map__32421__$1,path_attrs,selected,vec__32422,map__32423,map__32423__$1,opts,path_marker_click_fn,filter_spec){
return (function (e){leaflet_map.fitBounds(leaflet_path.getBounds());
if(cljs.core.truth_(path_marker_click_fn))
{return path_marker_click_fn.call(null,boundaryline_id);
} else
{return null;
}
});})(tolerance,bounds,leaflet_path,popup_content,map__32421,map__32421__$1,path_attrs,selected,vec__32422,map__32423,map__32423__$1,opts,path_marker_click_fn,filter_spec))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
};
var create_path = function (comm,leaflet_map,boundaryline_id,js_boundaryline,p__32416,var_args){
var p__32417 = null;if (arguments.length > 5) {
  p__32417 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,js_boundaryline,p__32416,p__32417);};
create_path.cljs$lang$maxFixedArity = 5;
create_path.cljs$lang$applyTo = (function (arglist__32424){
var comm = cljs.core.first(arglist__32424);
arglist__32424 = cljs.core.next(arglist__32424);
var leaflet_map = cljs.core.first(arglist__32424);
arglist__32424 = cljs.core.next(arglist__32424);
var boundaryline_id = cljs.core.first(arglist__32424);
arglist__32424 = cljs.core.next(arglist__32424);
var js_boundaryline = cljs.core.first(arglist__32424);
arglist__32424 = cljs.core.next(arglist__32424);
var p__32416 = cljs.core.first(arglist__32424);
var p__32417 = cljs.core.rest(arglist__32424);
return create_path__delegate(comm,leaflet_map,boundaryline_id,js_boundaryline,p__32416,p__32417);
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
var fetch_create_path__delegate = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32425){var vec__32428 = p__32425;var map__32429 = cljs.core.nth.call(null,vec__32428,(0),null);var map__32429__$1 = ((cljs.core.seq_QMARK_.call(null,map__32429))?cljs.core.apply.call(null,cljs.core.hash_map,map__32429):map__32429);var opts = map__32429__$1;var filter_spec = cljs.core.get.call(null,map__32429__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs,opts);
};
var fetch_create_path = function (comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,var_args){
var p__32425 = null;if (arguments.length > 6) {
  p__32425 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return fetch_create_path__delegate.call(this,comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32425);};
fetch_create_path.cljs$lang$maxFixedArity = 6;
fetch_create_path.cljs$lang$applyTo = (function (arglist__32430){
var comm = cljs.core.first(arglist__32430);
arglist__32430 = cljs.core.next(arglist__32430);
var leaflet_map = cljs.core.first(arglist__32430);
arglist__32430 = cljs.core.next(arglist__32430);
var boundaryline_id = cljs.core.first(arglist__32430);
arglist__32430 = cljs.core.next(arglist__32430);
var tolerance = cljs.core.first(arglist__32430);
arglist__32430 = cljs.core.next(arglist__32430);
var js_boundaryline = cljs.core.first(arglist__32430);
arglist__32430 = cljs.core.next(arglist__32430);
var path_attrs = cljs.core.first(arglist__32430);
var p__32425 = cljs.core.rest(arglist__32430);
return fetch_create_path__delegate(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs,p__32425);
});
fetch_create_path.cljs$core$IFn$_invoke$arity$variadic = fetch_create_path__delegate;
return fetch_create_path;
})()
;
/**
* @param {...*} var_args
*/
clustermap.components.map.replace_path = (function() { 
var replace_path__delegate = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32431){var vec__32434 = p__32431;var map__32435 = cljs.core.nth.call(null,vec__32434,(0),null);var map__32435__$1 = ((cljs.core.seq_QMARK_.call(null,map__32435))?cljs.core.apply.call(null,cljs.core.hash_map,map__32435):map__32435);var opts = map__32435__$1;var filter_spec = cljs.core.get.call(null,map__32435__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs,opts);
};
var replace_path = function (comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,var_args){
var p__32431 = null;if (arguments.length > 6) {
  p__32431 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return replace_path__delegate.call(this,comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32431);};
replace_path.cljs$lang$maxFixedArity = 6;
replace_path.cljs$lang$applyTo = (function (arglist__32436){
var comm = cljs.core.first(arglist__32436);
arglist__32436 = cljs.core.next(arglist__32436);
var leaflet_map = cljs.core.first(arglist__32436);
arglist__32436 = cljs.core.next(arglist__32436);
var boundaryline_id = cljs.core.first(arglist__32436);
arglist__32436 = cljs.core.next(arglist__32436);
var old_path = cljs.core.first(arglist__32436);
arglist__32436 = cljs.core.next(arglist__32436);
var js_boundaryline = cljs.core.first(arglist__32436);
arglist__32436 = cljs.core.next(arglist__32436);
var path_attrs = cljs.core.first(arglist__32436);
var p__32431 = cljs.core.rest(arglist__32436);
return replace_path__delegate(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs,p__32431);
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
var update_path__delegate = function (comm,leaflet_map,p__32437,tolerance,js_boundaryline,path_attrs,p__32438){var map__32442 = p__32437;var map__32442__$1 = ((cljs.core.seq_QMARK_.call(null,map__32442))?cljs.core.apply.call(null,cljs.core.hash_map,map__32442):map__32442);var path = map__32442__$1;var boundaryline_id = cljs.core.get.call(null,map__32442__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__32443 = p__32438;var map__32444 = cljs.core.nth.call(null,vec__32443,(0),null);var map__32444__$1 = ((cljs.core.seq_QMARK_.call(null,map__32444))?cljs.core.apply.call(null,cljs.core.hash_map,map__32444):map__32444);var opts = map__32444__$1;var filter_spec = cljs.core.get.call(null,map__32444__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs,opts);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs,opts);
return path;
}
};
var update_path = function (comm,leaflet_map,p__32437,tolerance,js_boundaryline,path_attrs,var_args){
var p__32438 = null;if (arguments.length > 6) {
  p__32438 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return update_path__delegate.call(this,comm,leaflet_map,p__32437,tolerance,js_boundaryline,path_attrs,p__32438);};
update_path.cljs$lang$maxFixedArity = 6;
update_path.cljs$lang$applyTo = (function (arglist__32445){
var comm = cljs.core.first(arglist__32445);
arglist__32445 = cljs.core.next(arglist__32445);
var leaflet_map = cljs.core.first(arglist__32445);
arglist__32445 = cljs.core.next(arglist__32445);
var p__32437 = cljs.core.first(arglist__32445);
arglist__32445 = cljs.core.next(arglist__32445);
var tolerance = cljs.core.first(arglist__32445);
arglist__32445 = cljs.core.next(arglist__32445);
var js_boundaryline = cljs.core.first(arglist__32445);
arglist__32445 = cljs.core.next(arglist__32445);
var path_attrs = cljs.core.first(arglist__32445);
var p__32438 = cljs.core.rest(arglist__32445);
return update_path__delegate(comm,leaflet_map,p__32437,tolerance,js_boundaryline,path_attrs,p__32438);
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
var update_paths__delegate = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32446){var vec__32462 = p__32446;var map__32463 = cljs.core.nth.call(null,vec__32462,(0),null);var map__32463__$1 = ((cljs.core.seq_QMARK_.call(null,map__32463))?cljs.core.apply.call(null,cljs.core.hash_map,map__32463):map__32463);var opts = map__32463__$1;var path_marker_click_fn = cljs.core.get.call(null,map__32463__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var filter_spec = cljs.core.get.call(null,map__32463__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__32464 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__32464,(0),null);var notifychan = cljs.core.nth.call(null,vec__32464,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32464,tolerance_paths,notifychan,vec__32462,map__32463,map__32463__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32465){var vec__32466 = p__32465;var k = cljs.core.nth.call(null,vec__32466,(0),null);var tolerance = cljs.core.nth.call(null,vec__32466,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32466,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32464,tolerance_paths,notifychan,vec__32462,map__32463,map__32463__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32464,tolerance_paths,notifychan,vec__32462,map__32463,map__32463__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32467 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32467,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32467,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32464,tolerance_paths,notifychan,vec__32462,map__32463,map__32463__$1,opts,path_marker_click_fn,filter_spec))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32464,tolerance_paths,notifychan,created_paths,vec__32462,map__32463,map__32463__$1,opts,path_marker_click_fn,filter_spec){
return (function (p__32468){var vec__32469 = p__32468;var k = cljs.core.nth.call(null,vec__32469,(0),null);var tolerance = cljs.core.nth.call(null,vec__32469,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__32469,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null),opts);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32464,tolerance_paths,notifychan,created_paths,vec__32462,map__32463,map__32463__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32464,tolerance_paths,notifychan,created_paths,vec__32462,map__32463,map__32463__$1,opts,path_marker_click_fn,filter_spec){
return (function (k){var vec__32470 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__32470,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__32470,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32464,tolerance_paths,notifychan,created_paths,vec__32462,map__32463,map__32463__$1,opts,path_marker_click_fn,filter_spec))
,update_path_keys)));var ___$1 = (function (){var seq__32471 = cljs.core.seq.call(null,delete_path_keys);var chunk__32472 = null;var count__32473 = (0);var i__32474 = (0);while(true){
if((i__32474 < count__32473))
{var k = cljs.core._nth.call(null,chunk__32472,i__32474);var temp__4124__auto___32477 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32477))
{var path_32478 = temp__4124__auto___32477;clustermap.components.map.delete_path.call(null,leaflet_map,path_32478);
} else
{}
{
var G__32479 = seq__32471;
var G__32480 = chunk__32472;
var G__32481 = count__32473;
var G__32482 = (i__32474 + (1));
seq__32471 = G__32479;
chunk__32472 = G__32480;
count__32473 = G__32481;
i__32474 = G__32482;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32471);if(temp__4126__auto__)
{var seq__32471__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32471__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__32471__$1);{
var G__32483 = cljs.core.chunk_rest.call(null,seq__32471__$1);
var G__32484 = c__4408__auto__;
var G__32485 = cljs.core.count.call(null,c__4408__auto__);
var G__32486 = (0);
seq__32471 = G__32483;
chunk__32472 = G__32484;
count__32473 = G__32485;
i__32474 = G__32486;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32471__$1);var temp__4124__auto___32487 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___32487))
{var path_32488 = temp__4124__auto___32487;clustermap.components.map.delete_path.call(null,leaflet_map,path_32488);
} else
{}
{
var G__32489 = cljs.core.next.call(null,seq__32471__$1);
var G__32490 = null;
var G__32491 = (0);
var G__32492 = (0);
seq__32471 = G__32489;
chunk__32472 = G__32490;
count__32473 = G__32491;
i__32474 = G__32492;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32464,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32462,map__32463,map__32463__$1,opts,path_marker_click_fn,filter_spec){
return (function (m,p__32475){var map__32476 = p__32475;var map__32476__$1 = ((cljs.core.seq_QMARK_.call(null,map__32476))?cljs.core.apply.call(null,cljs.core.hash_map,map__32476):map__32476);var path = map__32476__$1;var id = cljs.core.get.call(null,map__32476__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__32464,tolerance_paths,notifychan,created_paths,updated_paths,___$1,vec__32462,map__32463,map__32463__$1,opts,path_marker_click_fn,filter_spec))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
};
var update_paths = function (comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,var_args){
var p__32446 = null;if (arguments.length > 7) {
  p__32446 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return update_paths__delegate.call(this,comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32446);};
update_paths.cljs$lang$maxFixedArity = 7;
update_paths.cljs$lang$applyTo = (function (arglist__32493){
var comm = cljs.core.first(arglist__32493);
arglist__32493 = cljs.core.next(arglist__32493);
var fetch_boundarylines_fn = cljs.core.first(arglist__32493);
arglist__32493 = cljs.core.next(arglist__32493);
var leaflet_map = cljs.core.first(arglist__32493);
arglist__32493 = cljs.core.next(arglist__32493);
var paths_atom = cljs.core.first(arglist__32493);
arglist__32493 = cljs.core.next(arglist__32493);
var path_selections_atom = cljs.core.first(arglist__32493);
arglist__32493 = cljs.core.next(arglist__32493);
var new_path_highlights = cljs.core.first(arglist__32493);
arglist__32493 = cljs.core.next(arglist__32493);
var new_selection_paths = cljs.core.first(arglist__32493);
var p__32446 = cljs.core.rest(arglist__32493);
return update_paths__delegate(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths,p__32446);
});
update_paths.cljs$core$IFn$_invoke$arity$variadic = update_paths__delegate;
return update_paths;
})()
;
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__32496){var vec__32497 = p__32496;var tz = cljs.core.nth.call(null,vec__32497,(0),null);var collection = cljs.core.nth.call(null,vec__32497,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__32498,owner){var map__32742 = p__32498;var map__32742__$1 = ((cljs.core.seq_QMARK_.call(null,map__32742))?cljs.core.apply.call(null,cljs.core.hash_map,map__32742):map__32742);var cursor_data = map__32742__$1;var map__32743 = cljs.core.get.call(null,map__32742__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32743__$1 = ((cljs.core.seq_QMARK_.call(null,map__32743))?cljs.core.apply.call(null,cljs.core.hash_map,map__32743):map__32743);var cursor = map__32743__$1;var data = cljs.core.get.call(null,map__32743__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__32743__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__32743__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32744 = cljs.core.get.call(null,map__32743__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32744__$1 = ((cljs.core.seq_QMARK_.call(null,map__32744))?cljs.core.apply.call(null,cljs.core.hash_map,map__32744):map__32744);var controls = map__32744__$1;var colorchooser = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var initial_bounds = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var location = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"location","location",1815599388));var zoom = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var map_options = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"map-options","map-options",-379251610));var geotag_aggs = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var link_render_fn = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172));var threshold_colors = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var bounds = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_collection = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var show_points = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var link_click_fn = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465));var geohash_aggs = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var boundaryline_agg = cljs.core.get.call(null,map__32744__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var filter_spec = cljs.core.get.call(null,map__32742__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var filter = cljs.core.get.call(null,map__32742__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.map.t32745 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t32745 = (function (colorchooser,initial_bounds,map__32743,location,map__32742,owner,data,zoom,map__32744,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,p__32498,cursor,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,geohash_aggs,point_data,boundaryline_agg,meta32746){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.map__32743 = map__32743;
this.location = location;
this.map__32742 = map__32742;
this.owner = owner;
this.data = data;
this.zoom = zoom;
this.map__32744 = map__32744;
this.map_options = map_options;
this.cursor_data = cursor_data;
this.geotag_aggs = geotag_aggs;
this.filter_spec = filter_spec;
this.map_component = map_component;
this.link_render_fn = link_render_fn;
this.boundaryline_collections = boundaryline_collections;
this.controls = controls;
this.p__32498 = p__32498;
this.cursor = cursor;
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.boundaryline_collection = boundaryline_collection;
this.show_points = show_points;
this.link_click_fn = link_click_fn;
this.filter = filter;
this.geohash_aggs = geohash_aggs;
this.point_data = point_data;
this.boundaryline_agg = boundaryline_agg;
this.meta32746 = meta32746;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t32745.cljs$lang$type = true;
clustermap.components.map.t32745.cljs$lang$ctorStr = "clustermap.components.map/t32745";
clustermap.components.map.t32745.cljs$lang$ctorPrWriter = ((function (map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map/t32745");
});})(map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32745.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t32745.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,node).off();
domina.events.unlisten_BANG_.call(null,node);
domina.events.unlisten_BANG_.call(null,"clustermap-change-view");
var map__32748 = om.core.get_state.call(null,self__.owner);var map__32748__$1 = ((cljs.core.seq_QMARK_.call(null,map__32748))?cljs.core.apply.call(null,cljs.core.hash_map,map__32748):map__32748);var map__32749 = cljs.core.get.call(null,map__32748__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32749__$1 = ((cljs.core.seq_QMARK_.call(null,map__32749))?cljs.core.apply.call(null,cljs.core.hash_map,map__32749):map__32749);var path_selections = cljs.core.get.call(null,map__32749__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32749__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32749__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32749__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));return leaflet_map.remove();
});})(map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32745.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t32745.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$,p__32750,p__32751){var self__ = this;
var map__32752 = p__32750;var map__32752__$1 = ((cljs.core.seq_QMARK_.call(null,map__32752))?cljs.core.apply.call(null,cljs.core.hash_map,map__32752):map__32752);var next_cursor_data = map__32752__$1;var map__32753 = cljs.core.get.call(null,map__32752__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__32753__$1 = ((cljs.core.seq_QMARK_.call(null,map__32753))?cljs.core.apply.call(null,cljs.core.hash_map,map__32753):map__32753);var next_cursor = map__32753__$1;var next_data = cljs.core.get.call(null,map__32753__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__32753__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__32753__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__32754 = cljs.core.get.call(null,map__32753__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32754__$1 = ((cljs.core.seq_QMARK_.call(null,map__32754))?cljs.core.apply.call(null,cljs.core.hash_map,map__32754):map__32754);var next_colorchooser = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_collection = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_boundaryline_fill_opacity = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575));var next_zoom = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_threshold_colors = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var next_geotag_aggs = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617));var next_bounds = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_geohash_aggs = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493));var next_boundaryline_agg = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_location = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"location","location",1815599388));var next_show_points = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"show-points","show-points",-480527088));var next_filter = cljs.core.get.call(null,map__32752__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_filter_spec = cljs.core.get.call(null,map__32752__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32755 = p__32751;var map__32755__$1 = ((cljs.core.seq_QMARK_.call(null,map__32755))?cljs.core.apply.call(null,cljs.core.hash_map,map__32755):map__32755);var map__32756 = cljs.core.get.call(null,map__32755__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32756__$1 = ((cljs.core.seq_QMARK_.call(null,map__32756))?cljs.core.apply.call(null,cljs.core.hash_map,map__32756):map__32756);var next_markers = cljs.core.get.call(null,map__32756__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_geotag_markers = cljs.core.get.call(null,map__32756__$1,new cljs.core.Keyword(null,"geotag-markers","geotag-markers",-280089648));var next_geohash_markers = cljs.core.get.call(null,map__32756__$1,new cljs.core.Keyword(null,"geohash-markers","geohash-markers",-1063983705));var next_paths = cljs.core.get.call(null,map__32756__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__32756__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__32755__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var fetch_aggregation_data_fn = cljs.core.get.call(null,map__32755__$1,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532));var fetch_point_data_fn = cljs.core.get.call(null,map__32755__$1,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507));var fetch_geotag_data_fn = cljs.core.get.call(null,map__32755__$1,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950));var fetch_geotag_agg_data_fn = cljs.core.get.call(null,map__32755__$1,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602));var fetch_geohash_agg_data_fn = cljs.core.get.call(null,map__32755__$1,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986));var this$__$1 = this;var map__32757 = om.core.get_shared.call(null,self__.owner);var map__32757__$1 = ((cljs.core.seq_QMARK_.call(null,map__32757))?cljs.core.apply.call(null,cljs.core.hash_map,map__32757):map__32757);var path_marker_click_fn = cljs.core.get.call(null,map__32757__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32757__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32757__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32757__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__32758 = om.core.get_state.call(null,self__.owner);var map__32758__$1 = ((cljs.core.seq_QMARK_.call(null,map__32758))?cljs.core.apply.call(null,cljs.core.hash_map,map__32758):map__32758);var map__32759 = cljs.core.get.call(null,map__32758__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__32759__$1 = ((cljs.core.seq_QMARK_.call(null,map__32759))?cljs.core.apply.call(null,cljs.core.hash_map,map__32759):map__32759);var path_selections = cljs.core.get.call(null,map__32759__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__32759__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__32759__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_marker_cluster_group = cljs.core.get.call(null,map__32759__$1,new cljs.core.Keyword(null,"leaflet-marker-cluster-group","leaflet-marker-cluster-group",-455891671));var leaflet_map = cljs.core.get.call(null,map__32759__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__32758__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__32758__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var zoom_changed = cljs.core.not_EQ_.call(null,next_zoom,self__.zoom);if(cljs.core.truth_((function (){var and__3627__auto__ = leaflet_map;if(cljs.core.truth_(and__3627__auto__))
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
{var c__9125__auto___32985 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32985,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32985,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32782){var state_val_32783 = (state_32782[(1)]);if((state_val_32783 === (5)))
{var inst_32780 = (state_32782[(2)]);var state_32782__$1 = state_32782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32782__$1,inst_32780);
} else
{if((state_val_32783 === (4)))
{var state_32782__$1 = state_32782;var statearr_32784_32986 = state_32782__$1;(statearr_32784_32986[(2)] = null);
(statearr_32784_32986[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32783 === (3)))
{var inst_32772 = (state_32782[(7)]);var inst_32774 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32775 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_32776 = (new cljs.core.PersistentVector(null,1,(5),inst_32774,inst_32775,null));var inst_32777 = om.core.update_BANG_.call(null,self__.cursor,inst_32776,inst_32772);var state_32782__$1 = state_32782;var statearr_32785_32987 = state_32782__$1;(statearr_32785_32987[(2)] = inst_32777);
(statearr_32785_32987[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32783 === (2)))
{var inst_32772 = (state_32782[(7)]);var inst_32772__$1 = (state_32782[(2)]);var state_32782__$1 = (function (){var statearr_32786 = state_32782;(statearr_32786[(7)] = inst_32772__$1);
return statearr_32786;
})();if(cljs.core.truth_(inst_32772__$1))
{var statearr_32787_32988 = state_32782__$1;(statearr_32787_32988[(1)] = (3));
} else
{var statearr_32788_32989 = state_32782__$1;(statearr_32788_32989[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32783 === (1)))
{var inst_32760 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32761 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32762 = leaflet_map.getZoom();var inst_32763 = clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,inst_32762);var inst_32764 = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32765 = om.core._value.call(null,next_filter);var inst_32766 = leaflet_map.getBounds();var inst_32767 = clustermap.components.map.bounds_array.call(null,inst_32766);var inst_32768 = new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32769 = new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32770 = fetch_aggregation_data_fn.call(null,inst_32760,inst_32761,inst_32763,inst_32764,inst_32765,inst_32767,inst_32768,inst_32769);var state_32782__$1 = state_32782;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32782__$1,(2),inst_32770);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32985,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32985,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32792 = [null,null,null,null,null,null,null,null];(statearr_32792[(0)] = state_machine__9111__auto__);
(statearr_32792[(1)] = (1));
return statearr_32792;
});
var state_machine__9111__auto____1 = (function (state_32782){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32782);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32793){if((e32793 instanceof Object))
{var ex__9114__auto__ = e32793;var statearr_32794_32990 = state_32782;(statearr_32794_32990[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32782);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32793;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32991 = state_32782;
state_32782 = G__32991;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32782){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32985,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32795 = f__9126__auto__.call(null);(statearr_32795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32985);
return statearr_32795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32985,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
var c__9125__auto___32992 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32992,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32992,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32843){var state_val_32844 = (state_32843[(1)]);if((state_val_32844 === (7)))
{var inst_32810 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32811 = ["?natural_id","!name","!location","!latest_employee_count","!latest_turnover","!total_funding"];var inst_32812 = (new cljs.core.PersistentVector(null,6,(5),inst_32810,inst_32811,null));var state_32843__$1 = state_32843;var statearr_32845_32993 = state_32843__$1;(statearr_32845_32993[(2)] = inst_32812);
(statearr_32845_32993[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32844 === (1)))
{var inst_32802 = (state_32843[(7)]);var inst_32796 = [new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"location-attr","location-attr",-1350680971),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.Keyword(null,"max-count","max-count",1539185305)];var inst_32797 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32798 = new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg);var inst_32799 = om.core._value.call(null,next_filter);var inst_32800 = leaflet_map.getBounds();var inst_32801 = clustermap.components.map.bounds_array.call(null,inst_32800);var inst_32802__$1 = new cljs.core.Keyword(null,"location-attr","location-attr",-1350680971).cljs$core$IFn$_invoke$arity$1(next_location);var state_32843__$1 = (function (){var statearr_32846 = state_32843;(statearr_32846[(7)] = inst_32802__$1);
(statearr_32846[(8)] = inst_32798);
(statearr_32846[(9)] = inst_32799);
(statearr_32846[(10)] = inst_32801);
(statearr_32846[(11)] = inst_32797);
(statearr_32846[(12)] = inst_32796);
return statearr_32846;
})();if(cljs.core.truth_(inst_32802__$1))
{var statearr_32847_32994 = state_32843__$1;(statearr_32847_32994[(1)] = (3));
} else
{var statearr_32848_32995 = state_32843__$1;(statearr_32848_32995[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32844 === (4)))
{var state_32843__$1 = state_32843;var statearr_32849_32996 = state_32843__$1;(statearr_32849_32996[(2)] = "!location");
(statearr_32849_32996[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32844 === (13)))
{var state_32843__$1 = state_32843;var statearr_32850_32997 = state_32843__$1;(statearr_32850_32997[(2)] = null);
(statearr_32850_32997[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32844 === (6)))
{var inst_32807 = (state_32843[(13)]);var state_32843__$1 = state_32843;var statearr_32851_32998 = state_32843__$1;(statearr_32851_32998[(2)] = inst_32807);
(statearr_32851_32998[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32844 === (3)))
{var inst_32802 = (state_32843[(7)]);var state_32843__$1 = state_32843;var statearr_32852_32999 = state_32843__$1;(statearr_32852_32999[(2)] = inst_32802);
(statearr_32852_32999[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32844 === (12)))
{var inst_32833 = (state_32843[(14)]);var inst_32835 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32836 = [new cljs.core.Keyword(null,"point-data","point-data",-1294572970)];var inst_32837 = (new cljs.core.PersistentVector(null,1,(5),inst_32835,inst_32836,null));var inst_32838 = om.core.update_BANG_.call(null,self__.cursor,inst_32837,inst_32833);var state_32843__$1 = state_32843;var statearr_32853_33000 = state_32843__$1;(statearr_32853_33000[(2)] = inst_32838);
(statearr_32853_33000[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32844 === (2)))
{var inst_32833 = (state_32843[(14)]);var inst_32833__$1 = (state_32843[(2)]);var state_32843__$1 = (function (){var statearr_32854 = state_32843;(statearr_32854[(14)] = inst_32833__$1);
return statearr_32854;
})();if(cljs.core.truth_(inst_32833__$1))
{var statearr_32855_33001 = state_32843__$1;(statearr_32855_33001[(1)] = (12));
} else
{var statearr_32856_33002 = state_32843__$1;(statearr_32856_33002[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32844 === (11)))
{var inst_32806 = (state_32843[(15)]);var inst_32798 = (state_32843[(8)]);var inst_32814 = (state_32843[(16)]);var inst_32799 = (state_32843[(9)]);var inst_32801 = (state_32843[(10)]);var inst_32797 = (state_32843[(11)]);var inst_32796 = (state_32843[(12)]);var inst_32828 = (state_32843[(2)]);var inst_32829 = [inst_32797,inst_32798,inst_32799,inst_32801,inst_32806,inst_32814,inst_32828,(1000)];var inst_32830 = cljs.core.PersistentHashMap.fromArrays(inst_32796,inst_32829);var inst_32831 = fetch_point_data_fn.call(null,inst_32830);var state_32843__$1 = state_32843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32843__$1,(2),inst_32831);
} else
{if((state_val_32844 === (9)))
{var inst_32815 = (state_32843[(17)]);var state_32843__$1 = state_32843;var statearr_32857_33003 = state_32843__$1;(statearr_32857_33003[(2)] = inst_32815);
(statearr_32857_33003[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32844 === (5)))
{var inst_32807 = (state_32843[(13)]);var inst_32806 = (state_32843[(2)]);var inst_32807__$1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(next_location);var state_32843__$1 = (function (){var statearr_32858 = state_32843;(statearr_32858[(15)] = inst_32806);
(statearr_32858[(13)] = inst_32807__$1);
return statearr_32858;
})();if(cljs.core.truth_(inst_32807__$1))
{var statearr_32859_33004 = state_32843__$1;(statearr_32859_33004[(1)] = (6));
} else
{var statearr_32860_33005 = state_32843__$1;(statearr_32860_33005[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32844 === (14)))
{var inst_32841 = (state_32843[(2)]);var state_32843__$1 = state_32843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32843__$1,inst_32841);
} else
{if((state_val_32844 === (10)))
{var inst_32818 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32819 = ["!latest_turnvoer"];var inst_32820 = [new cljs.core.Keyword(null,"order","order",-1254677256)];var inst_32821 = ["desc"];var inst_32822 = cljs.core.PersistentHashMap.fromArrays(inst_32820,inst_32821);var inst_32823 = [inst_32822];var inst_32824 = cljs.core.PersistentHashMap.fromArrays(inst_32819,inst_32823);var inst_32825 = [inst_32824];var inst_32826 = (new cljs.core.PersistentVector(null,1,(5),inst_32818,inst_32825,null));var state_32843__$1 = state_32843;var statearr_32861_33006 = state_32843__$1;(statearr_32861_33006[(2)] = inst_32826);
(statearr_32861_33006[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32844 === (8)))
{var inst_32815 = (state_32843[(17)]);var inst_32814 = (state_32843[(2)]);var inst_32815__$1 = new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994).cljs$core$IFn$_invoke$arity$1(next_location);var state_32843__$1 = (function (){var statearr_32862 = state_32843;(statearr_32862[(16)] = inst_32814);
(statearr_32862[(17)] = inst_32815__$1);
return statearr_32862;
})();if(cljs.core.truth_(inst_32815__$1))
{var statearr_32863_33007 = state_32843__$1;(statearr_32863_33007[(1)] = (9));
} else
{var statearr_32864_33008 = state_32843__$1;(statearr_32864_33008[(1)] = (10));
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
});})(c__9125__auto___32992,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___32992,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32868[(0)] = state_machine__9111__auto__);
(statearr_32868[(1)] = (1));
return statearr_32868;
});
var state_machine__9111__auto____1 = (function (state_32843){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32843);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32869){if((e32869 instanceof Object))
{var ex__9114__auto__ = e32869;var statearr_32870_33009 = state_32843;(statearr_32870_33009[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32843);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32869;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33010 = state_32843;
state_32843 = G__33010;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32843){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32992,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32871 = f__9126__auto__.call(null);(statearr_32871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32992);
return statearr_32871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32992,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = next_geotag_aggs;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs));
} else
{return and__3627__auto__;
}
})()))
{var c__9125__auto___33011 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33011,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33011,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32885){var state_val_32886 = (state_32885[(1)]);if((state_val_32886 === (5)))
{var inst_32883 = (state_32885[(2)]);var state_32885__$1 = state_32885;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32885__$1,inst_32883);
} else
{if((state_val_32886 === (4)))
{var state_32885__$1 = state_32885;var statearr_32887_33012 = state_32885__$1;(statearr_32887_33012[(2)] = null);
(statearr_32887_33012[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32886 === (3)))
{var inst_32875 = (state_32885[(7)]);var inst_32877 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32878 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976)];var inst_32879 = (new cljs.core.PersistentVector(null,3,(5),inst_32877,inst_32878,null));var inst_32880 = om.core.update_BANG_.call(null,self__.cursor,inst_32879,inst_32875);var state_32885__$1 = state_32885;var statearr_32888_33013 = state_32885__$1;(statearr_32888_33013[(2)] = inst_32880);
(statearr_32888_33013[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32886 === (2)))
{var inst_32875 = (state_32885[(7)]);var inst_32875__$1 = (state_32885[(2)]);var state_32885__$1 = (function (){var statearr_32889 = state_32885;(statearr_32889[(7)] = inst_32875__$1);
return statearr_32889;
})();if(cljs.core.truth_(inst_32875__$1))
{var statearr_32890_33014 = state_32885__$1;(statearr_32890_33014[(1)] = (3));
} else
{var statearr_32891_33015 = state_32885__$1;(statearr_32891_33015[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32886 === (1)))
{var inst_32872 = new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32873 = fetch_geotag_data_fn.call(null,inst_32872);var state_32885__$1 = state_32885;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32885__$1,(2),inst_32873);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33011,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33011,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32895 = [null,null,null,null,null,null,null,null];(statearr_32895[(0)] = state_machine__9111__auto__);
(statearr_32895[(1)] = (1));
return statearr_32895;
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
}catch (e32896){if((e32896 instanceof Object))
{var ex__9114__auto__ = e32896;var statearr_32897_33016 = state_32885;(statearr_32897_33016[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32885);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32896;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33017 = state_32885;
state_32885 = G__33017;
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
;})(switch__9110__auto__,c__9125__auto___33011,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32898 = f__9126__auto__.call(null);(statearr_32898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33011);
return statearr_32898;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33011,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var c__9125__auto___33018 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33018,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33018,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32917){var state_val_32918 = (state_32917[(1)]);if((state_val_32918 === (5)))
{var inst_32915 = (state_32917[(2)]);var state_32917__$1 = state_32917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32917__$1,inst_32915);
} else
{if((state_val_32918 === (4)))
{var state_32917__$1 = state_32917;var statearr_32919_33019 = state_32917__$1;(statearr_32919_33019[(2)] = null);
(statearr_32919_33019[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32918 === (3)))
{var inst_32906 = (state_32917[(7)]);var inst_32908 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32909 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391)];var inst_32910 = (new cljs.core.PersistentVector(null,3,(5),inst_32908,inst_32909,null));var inst_32911 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32906);var inst_32912 = om.core.update_BANG_.call(null,self__.cursor,inst_32910,inst_32911);var state_32917__$1 = state_32917;var statearr_32920_33020 = state_32917__$1;(statearr_32920_33020[(2)] = inst_32912);
(statearr_32920_33020[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32918 === (2)))
{var inst_32906 = (state_32917[(7)]);var inst_32906__$1 = (state_32917[(2)]);var state_32917__$1 = (function (){var statearr_32921 = state_32917;(statearr_32921[(7)] = inst_32906__$1);
return statearr_32921;
})();if(cljs.core.truth_(inst_32906__$1))
{var statearr_32922_33021 = state_32917__$1;(statearr_32922_33021[(1)] = (3));
} else
{var statearr_32923_33022 = state_32917__$1;(statearr_32923_33022[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32918 === (1)))
{var inst_32899 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geotag_aggs);var inst_32900 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32901 = [next_filter];var inst_32902 = cljs.core.PersistentHashMap.fromArrays(inst_32900,inst_32901);var inst_32903 = cljs.core.merge.call(null,inst_32899,inst_32902);var inst_32904 = fetch_geotag_agg_data_fn.call(null,inst_32903);var state_32917__$1 = state_32917;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32917__$1,(2),inst_32904);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33018,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33018,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32927 = [null,null,null,null,null,null,null,null];(statearr_32927[(0)] = state_machine__9111__auto__);
(statearr_32927[(1)] = (1));
return statearr_32927;
});
var state_machine__9111__auto____1 = (function (state_32917){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32917);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32928){if((e32928 instanceof Object))
{var ex__9114__auto__ = e32928;var statearr_32929_33023 = state_32917;(statearr_32929_33023[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32917);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32928;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33024 = state_32917;
state_32917 = G__33024;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32917){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33018,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32930 = f__9126__auto__.call(null);(statearr_32930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33018);
return statearr_32930;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33018,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var c__9125__auto___33025 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33025,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33025,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32951){var state_val_32952 = (state_32951[(1)]);if((state_val_32952 === (5)))
{var inst_32949 = (state_32951[(2)]);var state_32951__$1 = state_32951;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32951__$1,inst_32949);
} else
{if((state_val_32952 === (4)))
{var state_32951__$1 = state_32951;var statearr_32953_33026 = state_32951__$1;(statearr_32953_33026[(2)] = null);
(statearr_32953_33026[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32952 === (3)))
{var inst_32940 = (state_32951[(7)]);var inst_32942 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32943 = [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493),new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620)];var inst_32944 = (new cljs.core.PersistentVector(null,3,(5),inst_32942,inst_32943,null));var inst_32945 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32940);var inst_32946 = om.core.update_BANG_.call(null,self__.cursor,inst_32944,inst_32945);var state_32951__$1 = state_32951;var statearr_32954_33027 = state_32951__$1;(statearr_32954_33027[(2)] = inst_32946);
(statearr_32954_33027[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32952 === (2)))
{var inst_32940 = (state_32951[(7)]);var inst_32940__$1 = (state_32951[(2)]);var state_32951__$1 = (function (){var statearr_32955 = state_32951;(statearr_32955[(7)] = inst_32940__$1);
return statearr_32955;
})();if(cljs.core.truth_(inst_32940__$1))
{var statearr_32956_33028 = state_32951__$1;(statearr_32956_33028[(1)] = (3));
} else
{var statearr_32957_33029 = state_32951__$1;(statearr_32957_33029[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32952 === (1)))
{var inst_32931 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32932 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"precision","precision",-1175707478)];var inst_32933 = new cljs.core.Keyword(null,"precision-fn","precision-fn",1742300693).cljs$core$IFn$_invoke$arity$1(next_geohash_aggs);var inst_32934 = inst_32933.call(null,next_zoom);var inst_32935 = [next_filter,next_bounds,inst_32934];var inst_32936 = cljs.core.PersistentHashMap.fromArrays(inst_32932,inst_32935);var inst_32937 = cljs.core.merge.call(null,inst_32931,inst_32936);var inst_32938 = fetch_geohash_agg_data_fn.call(null,inst_32937);var state_32951__$1 = state_32951;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32951__$1,(2),inst_32938);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___33025,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33025,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32961 = [null,null,null,null,null,null,null,null];(statearr_32961[(0)] = state_machine__9111__auto__);
(statearr_32961[(1)] = (1));
return statearr_32961;
});
var state_machine__9111__auto____1 = (function (state_32951){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32951);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32962){if((e32962 instanceof Object))
{var ex__9114__auto__ = e32962;var statearr_32963_33030 = state_32951;(statearr_32963_33030[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32951);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32962;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33031 = state_32951;
state_32951 = G__33031;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32951){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33025,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32964 = f__9126__auto__.call(null);(statearr_32964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33025);
return statearr_32964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33025,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
{var vec__32965_33032 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_33033 = cljs.core.nth.call(null,vec__32965_33032,(0),null);var selection_path_colours_33034 = cljs.core.nth.call(null,vec__32965_33032,(1),null);var update_paths_invocation_33035 = ((function (vec__32965_33032,new_threshold_colors_33033,selection_path_colours_33034,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_33034,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696),path_marker_click_fn,new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575),next_boundaryline_fill_opacity], null));
});})(vec__32965_33032,new_threshold_colors_33033,selection_path_colours_33034,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_33033,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_33033);
} else
{}
var temp__4126__auto___33036 = update_paths_invocation_33035.call(null);if(cljs.core.truth_(temp__4126__auto___33036))
{var notify_chan_33037 = temp__4126__auto___33036;var c__9125__auto___33038 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___33038,notify_chan_33037,temp__4126__auto___33036,vec__32965_33032,new_threshold_colors_33033,selection_path_colours_33034,update_paths_invocation_33035,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___33038,notify_chan_33037,temp__4126__auto___33036,vec__32965_33032,new_threshold_colors_33033,selection_path_colours_33034,update_paths_invocation_33035,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (state_32970){var state_val_32971 = (state_32970[(1)]);if((state_val_32971 === (2)))
{var inst_32967 = (state_32970[(2)]);var inst_32968 = update_paths_invocation_33035.call(null);var state_32970__$1 = (function (){var statearr_32972 = state_32970;(statearr_32972[(7)] = inst_32967);
return statearr_32972;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32970__$1,inst_32968);
} else
{if((state_val_32971 === (1)))
{var state_32970__$1 = state_32970;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32970__$1,(2),notify_chan_33037);
} else
{return null;
}
}
});})(c__9125__auto___33038,notify_chan_33037,temp__4126__auto___33036,vec__32965_33032,new_threshold_colors_33033,selection_path_colours_33034,update_paths_invocation_33035,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;return ((function (switch__9110__auto__,c__9125__auto___33038,notify_chan_33037,temp__4126__auto___33036,vec__32965_33032,new_threshold_colors_33033,selection_path_colours_33034,update_paths_invocation_33035,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32976 = [null,null,null,null,null,null,null,null];(statearr_32976[(0)] = state_machine__9111__auto__);
(statearr_32976[(1)] = (1));
return statearr_32976;
});
var state_machine__9111__auto____1 = (function (state_32970){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32970);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32977){if((e32977 instanceof Object))
{var ex__9114__auto__ = e32977;var statearr_32978_33039 = state_32970;(statearr_32978_33039[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32970);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32977;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33040 = state_32970;
state_32970 = G__33040;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32970){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___33038,notify_chan_33037,temp__4126__auto___33036,vec__32965_33032,new_threshold_colors_33033,selection_path_colours_33034,update_paths_invocation_33035,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
})();var state__9127__auto__ = (function (){var statearr_32979 = f__9126__auto__.call(null);(statearr_32979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___33038);
return statearr_32979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___33038,notify_chan_33037,temp__4126__auto___33036,vec__32965_33032,new_threshold_colors_33033,selection_path_colours_33034,update_paths_invocation_33035,map__32757,map__32757__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,map__32758,map__32758__$1,map__32759,map__32759__$1,path_selections,paths,markers,leaflet_marker_cluster_group,leaflet_map,pan_pending,path_highlights,zoom_changed,this$__$1,map__32752,map__32752__$1,next_cursor_data,map__32753,map__32753__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__32754,map__32754__$1,next_colorchooser,next_boundaryline_collection,next_boundaryline_fill_opacity,next_zoom,next_threshold_colors,next_geotag_aggs,next_bounds,next_geohash_aggs,next_boundaryline_agg,next_location,next_show_points,next_filter,next_filter_spec,map__32755,map__32755__$1,map__32756,map__32756__$1,next_markers,next_geotag_markers,next_geohash_markers,next_paths,next_path_selections,next_path_highlights,fetch_aggregation_data_fn,fetch_point_data_fn,fetch_geotag_data_fn,fetch_geotag_agg_data_fn,fetch_geohash_agg_data_fn,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
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
});})(map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32745.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t32745.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__32980 = clustermap.components.map.create_map.call(null,node,self__.controls);var map__32980__$1 = ((cljs.core.seq_QMARK_.call(null,map__32980))?cljs.core.apply.call(null,cljs.core.hash_map,map__32980):map__32980);var map = map__32980__$1;var path = cljs.core.get.call(null,map__32980__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__32980__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__32980__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__32981 = om.core.get_shared.call(null,self__.owner);var map__32981__$1 = ((cljs.core.seq_QMARK_.call(null,map__32981))?cljs.core.apply.call(null,cljs.core.hash_map,map__32981):map__32981);var path_marker_click_fn = cljs.core.get.call(null,map__32981__$1,new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696));var point_in_boundarylines_fn = cljs.core.get.call(null,map__32981__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__32981__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__32981__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,map__32980,map__32980__$1,map,path,markers,leaflet_map,map__32981,map__32981__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
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
});})(node,map__32980,map__32980__$1,map,path,markers,leaflet_map,map__32981,map__32981__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("moveend",((function (node,map__32980,map__32980__$1,map,path,markers,leaflet_map,map__32981,map__32981__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__32980,map__32980__$1,map,path,markers,leaflet_map,map__32981,map__32981__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupopen",((function (node,map__32980,map__32980__$1,map,path,markers,leaflet_map,map__32981,map__32981__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__32980,map__32980__$1,map,path,markers,leaflet_map,map__32981,map__32981__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__32980,map__32980__$1,map,path,markers,leaflet_map,map__32981,map__32981__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
});})(node,map__32980,map__32980__$1,map,path,markers,leaflet_map,map__32981,map__32981__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
leaflet_map.on("popupclose",((function (node,map__32980,map__32980__$1,map,path,markers,leaflet_map,map__32981,map__32981__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__32980,map__32980__$1,map,path,markers,leaflet_map,map__32981,map__32981__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
if(cljs.core.truth_(path_marker_click_fn))
{leaflet_map.on("click",((function (node,map__32980,map__32980__$1,map,path,markers,leaflet_map,map__32981,map__32981__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){return path_marker_click_fn.call(null,null);
});})(node,map__32980,map__32980__$1,map,path,markers,leaflet_map,map__32981,map__32981__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
jayq.core.$.call(null,node).on("click","a.boundaryline-popup-link",((function (node,map__32980,map__32980__$1,map,path,markers,leaflet_map,map__32981,map__32981__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var G__32982 = e;var G__32982__$1 = (((G__32982 == null))?null:G__32982.target);var G__32982__$2 = (((G__32982__$1 == null))?null:domina.attr.call(null,G__32982__$1,"data-boundaryline-id"));var G__32982__$3 = (((G__32982__$2 == null))?null:path_marker_click_fn.call(null,G__32982__$2));return G__32982__$3;
});})(node,map__32980,map__32980__$1,map,path,markers,leaflet_map,map__32981,map__32981__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
} else
{}
jayq.core.$.call(null,node).on("click","[data-onclick-id]",((function (node,map__32980,map__32980__$1,map,path,markers,leaflet_map,map__32981,map__32981__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (e){e.preventDefault();
var current_target = e.currentTarget;var handler_id = domina.attr.call(null,current_target,"data-onclick-id");var handler = clustermap.components.map.find_event_handler.call(null,handler_id);if(cljs.core.truth_(handler))
{return handler.call(null,e);
} else
{return null;
}
});})(node,map__32980,map__32980__$1,map,path,markers,leaflet_map,map__32981,map__32981__$1,path_marker_click_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,last_dims,w,h,this$__$1,map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-aggregation-data-fn","fetch-aggregation-data-fn",71676532),clustermap.api.boundaryline_aggregation_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-point-data-fn","fetch-point-data-fn",1620470507),clustermap.api.location_lists_2_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-data-fn","fetch-geotag-data-fn",1408471950),clustermap.api.geotags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geotag-agg-data-fn","fetch-geotag-agg-data-fn",1180645602),clustermap.api.nested_aggregation_factory.call(null));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geohash-agg-data-fn","fetch-geohash-agg-data-fn",1035825986),clustermap.api.geohash_grid_factory.call(null));
});})(map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32745.prototype.om$core$IRender$ = true;
clustermap.components.map.t32745.prototype.om$core$IRender$render$arity$1 = ((function (map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32745.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32747){var self__ = this;
var _32747__$1 = this;return self__.meta32746;
});})(map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.t32745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function (_32747,meta32746__$1){var self__ = this;
var _32747__$1 = this;return (new clustermap.components.map.t32745(self__.colorchooser,self__.initial_bounds,self__.map__32743,self__.location,self__.map__32742,self__.owner,self__.data,self__.zoom,self__.map__32744,self__.map_options,self__.cursor_data,self__.geotag_aggs,self__.filter_spec,self__.map_component,self__.link_render_fn,self__.boundaryline_collections,self__.controls,self__.p__32498,self__.cursor,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.show_points,self__.link_click_fn,self__.filter,self__.geohash_aggs,self__.point_data,self__.boundaryline_agg,meta32746__$1));
});})(map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
clustermap.components.map.__GT_t32745 = ((function (map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter){
return (function __GT_t32745(colorchooser__$1,initial_bounds__$1,map__32743__$2,location__$1,map__32742__$2,owner__$1,data__$1,zoom__$1,map__32744__$2,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,p__32498__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,geohash_aggs__$1,point_data__$1,boundaryline_agg__$1,meta32746){return (new clustermap.components.map.t32745(colorchooser__$1,initial_bounds__$1,map__32743__$2,location__$1,map__32742__$2,owner__$1,data__$1,zoom__$1,map__32744__$2,map_options__$1,cursor_data__$1,geotag_aggs__$1,filter_spec__$1,map_component__$1,link_render_fn__$1,boundaryline_collections__$1,controls__$1,p__32498__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,show_points__$1,link_click_fn__$1,filter__$1,geohash_aggs__$1,point_data__$1,boundaryline_agg__$1,meta32746));
});})(map__32742,map__32742__$1,cursor_data,map__32743,map__32743__$1,cursor,data,point_data,boundaryline_collections,map__32744,map__32744__$1,controls,colorchooser,initial_bounds,location,zoom,map_options,geotag_aggs,link_render_fn,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,geohash_aggs,boundaryline_agg,filter_spec,filter))
;
}
return (new clustermap.components.map.t32745(colorchooser,initial_bounds,map__32743__$1,location,map__32742__$1,owner,data,zoom,map__32744__$1,map_options,cursor_data,geotag_aggs,filter_spec,map_component,link_render_fn,boundaryline_collections,controls,p__32498,cursor,threshold_colors,bounds,boundaryline_collection,show_points,link_click_fn,filter,geohash_aggs,point_data,boundaryline_agg,null));
});
