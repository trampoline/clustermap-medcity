// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__22064__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__22064 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__22064__delegate.call(this,m,k,f,x1,x2,xs);};
G__22064.cljs$lang$maxFixedArity = 5;
G__22064.cljs$lang$applyTo = (function (arglist__22065){
var m = cljs.core.first(arglist__22065);
arglist__22065 = cljs.core.next(arglist__22065);
var k = cljs.core.first(arglist__22065);
arglist__22065 = cljs.core.next(arglist__22065);
var f = cljs.core.first(arglist__22065);
arglist__22065 = cljs.core.next(arglist__22065);
var x1 = cljs.core.first(arglist__22065);
arglist__22065 = cljs.core.next(arglist__22065);
var x2 = cljs.core.first(arglist__22065);
var xs = cljs.core.rest(arglist__22065);
return G__22064__delegate(m,k,f,x1,x2,xs);
});
G__22064.cljs$core$IFn$_invoke$arity$variadic = G__22064__delegate;
return G__22064;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22074_22080 = cljs.core.seq.call(null,m);var chunk__22075_22081 = null;var count__22076_22082 = (0);var i__22077_22083 = (0);while(true){
if((i__22077_22083 < count__22076_22082))
{var vec__22078_22084 = cljs.core._nth.call(null,chunk__22075_22081,i__22077_22083);var k_22085 = cljs.core.nth.call(null,vec__22078_22084,(0),null);var v_22086 = cljs.core.nth.call(null,vec__22078_22084,(1),null);var m22073_22087 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22073_22087,k_22085,f.call(null,v_22086)));
{
var G__22088 = seq__22074_22080;
var G__22089 = chunk__22075_22081;
var G__22090 = count__22076_22082;
var G__22091 = (i__22077_22083 + (1));
seq__22074_22080 = G__22088;
chunk__22075_22081 = G__22089;
count__22076_22082 = G__22090;
i__22077_22083 = G__22091;
continue;
}
} else
{var temp__4126__auto___22092 = cljs.core.seq.call(null,seq__22074_22080);if(temp__4126__auto___22092)
{var seq__22074_22093__$1 = temp__4126__auto___22092;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22074_22093__$1))
{var c__4408__auto___22094 = cljs.core.chunk_first.call(null,seq__22074_22093__$1);{
var G__22095 = cljs.core.chunk_rest.call(null,seq__22074_22093__$1);
var G__22096 = c__4408__auto___22094;
var G__22097 = cljs.core.count.call(null,c__4408__auto___22094);
var G__22098 = (0);
seq__22074_22080 = G__22095;
chunk__22075_22081 = G__22096;
count__22076_22082 = G__22097;
i__22077_22083 = G__22098;
continue;
}
} else
{var vec__22079_22099 = cljs.core.first.call(null,seq__22074_22093__$1);var k_22100 = cljs.core.nth.call(null,vec__22079_22099,(0),null);var v_22101 = cljs.core.nth.call(null,vec__22079_22099,(1),null);var m22073_22102 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22073_22102,k_22100,f.call(null,v_22101)));
{
var G__22103 = cljs.core.next.call(null,seq__22074_22093__$1);
var G__22104 = null;
var G__22105 = (0);
var G__22106 = (0);
seq__22074_22080 = G__22103;
chunk__22075_22081 = G__22104;
count__22076_22082 = G__22105;
i__22077_22083 = G__22106;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7563__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22115_22121 = cljs.core.seq.call(null,m);var chunk__22116_22122 = null;var count__22117_22123 = (0);var i__22118_22124 = (0);while(true){
if((i__22118_22124 < count__22117_22123))
{var vec__22119_22125 = cljs.core._nth.call(null,chunk__22116_22122,i__22118_22124);var k_22126 = cljs.core.nth.call(null,vec__22119_22125,(0),null);var v_22127 = cljs.core.nth.call(null,vec__22119_22125,(1),null);var m22114_22128 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22114_22128,f.call(null,k_22126),v_22127));
{
var G__22129 = seq__22115_22121;
var G__22130 = chunk__22116_22122;
var G__22131 = count__22117_22123;
var G__22132 = (i__22118_22124 + (1));
seq__22115_22121 = G__22129;
chunk__22116_22122 = G__22130;
count__22117_22123 = G__22131;
i__22118_22124 = G__22132;
continue;
}
} else
{var temp__4126__auto___22133 = cljs.core.seq.call(null,seq__22115_22121);if(temp__4126__auto___22133)
{var seq__22115_22134__$1 = temp__4126__auto___22133;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22115_22134__$1))
{var c__4408__auto___22135 = cljs.core.chunk_first.call(null,seq__22115_22134__$1);{
var G__22136 = cljs.core.chunk_rest.call(null,seq__22115_22134__$1);
var G__22137 = c__4408__auto___22135;
var G__22138 = cljs.core.count.call(null,c__4408__auto___22135);
var G__22139 = (0);
seq__22115_22121 = G__22136;
chunk__22116_22122 = G__22137;
count__22117_22123 = G__22138;
i__22118_22124 = G__22139;
continue;
}
} else
{var vec__22120_22140 = cljs.core.first.call(null,seq__22115_22134__$1);var k_22141 = cljs.core.nth.call(null,vec__22120_22140,(0),null);var v_22142 = cljs.core.nth.call(null,vec__22120_22140,(1),null);var m22114_22143 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22114_22143,f.call(null,k_22141),v_22142));
{
var G__22144 = cljs.core.next.call(null,seq__22115_22134__$1);
var G__22145 = null;
var G__22146 = (0);
var G__22147 = (0);
seq__22115_22121 = G__22144;
chunk__22116_22122 = G__22145;
count__22117_22123 = G__22146;
i__22118_22124 = G__22147;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7563__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22154_22158 = cljs.core.seq.call(null,ks);var chunk__22155_22159 = null;var count__22156_22160 = (0);var i__22157_22161 = (0);while(true){
if((i__22157_22161 < count__22156_22160))
{var k_22162 = cljs.core._nth.call(null,chunk__22155_22159,i__22157_22161);var m22153_22163 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22153_22163,k_22162,f.call(null,k_22162)));
{
var G__22164 = seq__22154_22158;
var G__22165 = chunk__22155_22159;
var G__22166 = count__22156_22160;
var G__22167 = (i__22157_22161 + (1));
seq__22154_22158 = G__22164;
chunk__22155_22159 = G__22165;
count__22156_22160 = G__22166;
i__22157_22161 = G__22167;
continue;
}
} else
{var temp__4126__auto___22168 = cljs.core.seq.call(null,seq__22154_22158);if(temp__4126__auto___22168)
{var seq__22154_22169__$1 = temp__4126__auto___22168;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22154_22169__$1))
{var c__4408__auto___22170 = cljs.core.chunk_first.call(null,seq__22154_22169__$1);{
var G__22171 = cljs.core.chunk_rest.call(null,seq__22154_22169__$1);
var G__22172 = c__4408__auto___22170;
var G__22173 = cljs.core.count.call(null,c__4408__auto___22170);
var G__22174 = (0);
seq__22154_22158 = G__22171;
chunk__22155_22159 = G__22172;
count__22156_22160 = G__22173;
i__22157_22161 = G__22174;
continue;
}
} else
{var k_22175 = cljs.core.first.call(null,seq__22154_22169__$1);var m22153_22176 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22153_22176,k_22175,f.call(null,k_22175)));
{
var G__22177 = cljs.core.next.call(null,seq__22154_22169__$1);
var G__22178 = null;
var G__22179 = (0);
var G__22180 = (0);
seq__22154_22158 = G__22177;
chunk__22155_22159 = G__22178;
count__22156_22160 = G__22179;
i__22157_22161 = G__22180;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7563__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22187_22191 = cljs.core.seq.call(null,vs);var chunk__22188_22192 = null;var count__22189_22193 = (0);var i__22190_22194 = (0);while(true){
if((i__22190_22194 < count__22189_22193))
{var v_22195 = cljs.core._nth.call(null,chunk__22188_22192,i__22190_22194);var m22186_22196 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22186_22196,f.call(null,v_22195),v_22195));
{
var G__22197 = seq__22187_22191;
var G__22198 = chunk__22188_22192;
var G__22199 = count__22189_22193;
var G__22200 = (i__22190_22194 + (1));
seq__22187_22191 = G__22197;
chunk__22188_22192 = G__22198;
count__22189_22193 = G__22199;
i__22190_22194 = G__22200;
continue;
}
} else
{var temp__4126__auto___22201 = cljs.core.seq.call(null,seq__22187_22191);if(temp__4126__auto___22201)
{var seq__22187_22202__$1 = temp__4126__auto___22201;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22187_22202__$1))
{var c__4408__auto___22203 = cljs.core.chunk_first.call(null,seq__22187_22202__$1);{
var G__22204 = cljs.core.chunk_rest.call(null,seq__22187_22202__$1);
var G__22205 = c__4408__auto___22203;
var G__22206 = cljs.core.count.call(null,c__4408__auto___22203);
var G__22207 = (0);
seq__22187_22191 = G__22204;
chunk__22188_22192 = G__22205;
count__22189_22193 = G__22206;
i__22190_22194 = G__22207;
continue;
}
} else
{var v_22208 = cljs.core.first.call(null,seq__22187_22202__$1);var m22186_22209 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22186_22209,f.call(null,v_22208),v_22208));
{
var G__22210 = cljs.core.next.call(null,seq__22187_22202__$1);
var G__22211 = null;
var G__22212 = (0);
var G__22213 = (0);
seq__22187_22191 = G__22210;
chunk__22188_22192 = G__22211;
count__22189_22193 = G__22212;
i__22190_22194 = G__22213;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7563__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__22214){var vec__22216 = p__22214;var k = cljs.core.nth.call(null,vec__22216,(0),null);var ks = cljs.core.nthnext.call(null,vec__22216,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3627__auto__ = ks;if(and__3627__auto__)
{return dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else
{return and__3627__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22225_22231 = cljs.core.seq.call(null,x);var chunk__22226_22232 = null;var count__22227_22233 = (0);var i__22228_22234 = (0);while(true){
if((i__22228_22234 < count__22227_22233))
{var vec__22229_22235 = cljs.core._nth.call(null,chunk__22226_22232,i__22228_22234);var k_22236 = cljs.core.nth.call(null,vec__22229_22235,(0),null);var v_22237 = cljs.core.nth.call(null,vec__22229_22235,(1),null);var m22224_22238 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22224_22238,((typeof k_22236 === 'string')?cljs.core.keyword.call(null,k_22236):k_22236),keywordize_map.call(null,v_22237)));
{
var G__22239 = seq__22225_22231;
var G__22240 = chunk__22226_22232;
var G__22241 = count__22227_22233;
var G__22242 = (i__22228_22234 + (1));
seq__22225_22231 = G__22239;
chunk__22226_22232 = G__22240;
count__22227_22233 = G__22241;
i__22228_22234 = G__22242;
continue;
}
} else
{var temp__4126__auto___22243 = cljs.core.seq.call(null,seq__22225_22231);if(temp__4126__auto___22243)
{var seq__22225_22244__$1 = temp__4126__auto___22243;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22225_22244__$1))
{var c__4408__auto___22245 = cljs.core.chunk_first.call(null,seq__22225_22244__$1);{
var G__22246 = cljs.core.chunk_rest.call(null,seq__22225_22244__$1);
var G__22247 = c__4408__auto___22245;
var G__22248 = cljs.core.count.call(null,c__4408__auto___22245);
var G__22249 = (0);
seq__22225_22231 = G__22246;
chunk__22226_22232 = G__22247;
count__22227_22233 = G__22248;
i__22228_22234 = G__22249;
continue;
}
} else
{var vec__22230_22250 = cljs.core.first.call(null,seq__22225_22244__$1);var k_22251 = cljs.core.nth.call(null,vec__22230_22250,(0),null);var v_22252 = cljs.core.nth.call(null,vec__22230_22250,(1),null);var m22224_22253 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22224_22253,((typeof k_22251 === 'string')?cljs.core.keyword.call(null,k_22251):k_22251),keywordize_map.call(null,v_22252)));
{
var G__22254 = cljs.core.next.call(null,seq__22225_22244__$1);
var G__22255 = null;
var G__22256 = (0);
var G__22257 = (0);
seq__22225_22231 = G__22254;
chunk__22226_22232 = G__22255;
count__22227_22233 = G__22256;
i__22228_22234 = G__22257;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7563__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__7632__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__7632__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__22258 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__22259 = cljs.core.next.call(null,ks);
m = G__22258;
ks = G__22259;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3639__auto__ = m;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4377__auto__ = (function iter__22268(s__22269){return (new cljs.core.LazySeq(null,(function (){var s__22269__$1 = s__22269;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22269__$1);if(temp__4126__auto__)
{var s__22269__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22269__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22269__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22271 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22270 = (0);while(true){
if((i__22270 < size__4376__auto__))
{var vec__22274 = cljs.core._nth.call(null,c__4375__auto__,i__22270);var k = cljs.core.nth.call(null,vec__22274,(0),null);var v = cljs.core.nth.call(null,vec__22274,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__22271,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22276 = (i__22270 + (1));
i__22270 = G__22276;
continue;
}
} else
{{
var G__22277 = (i__22270 + (1));
i__22270 = G__22277;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22271),iter__22268.call(null,cljs.core.chunk_rest.call(null,s__22269__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22271),null);
}
} else
{var vec__22275 = cljs.core.first.call(null,s__22269__$2);var k = cljs.core.nth.call(null,vec__22275,(0),null);var v = cljs.core.nth.call(null,vec__22275,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22268.call(null,cljs.core.rest.call(null,s__22269__$2)));
} else
{{
var G__22278 = cljs.core.rest.call(null,s__22269__$2);
s__22269__$1 = G__22278;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__22279){
var m = cljs.core.first(arglist__22279);
var kvs = cljs.core.rest(arglist__22279);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__22280){
var m = cljs.core.first(arglist__22280);
arglist__22280 = cljs.core.next(arglist__22280);
var key_seq = cljs.core.first(arglist__22280);
arglist__22280 = cljs.core.next(arglist__22280);
var f = cljs.core.first(arglist__22280);
var args = cljs.core.rest(arglist__22280);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4377__auto__ = ((function (s){
return (function iter__22285(s__22286){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__22286__$1 = s__22286;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22286__$1);if(temp__4126__auto__)
{var s__22286__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22286__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22286__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22288 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22287 = (0);while(true){
if((i__22287 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22287);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__22288,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__22289 = (i__22287 + (1));
i__22287 = G__22289;
continue;
}
} else
{{
var G__22290 = (i__22287 + (1));
i__22287 = G__22290;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22288),iter__22285.call(null,cljs.core.chunk_rest.call(null,s__22286__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22288),null);
}
} else
{var x = cljs.core.first.call(null,s__22286__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__22285.call(null,cljs.core.rest.call(null,s__22286__$2)));
} else
{{
var G__22291 = cljs.core.rest.call(null,s__22286__$2);
s__22286__$1 = G__22291;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4377__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__22292){
var colls = cljs.core.seq(arglist__22292);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__22293__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__22294 = conj_when.call(null,coll,x);
var G__22295 = cljs.core.first.call(null,xs);
var G__22296 = cljs.core.next.call(null,xs);
coll = G__22294;
x = G__22295;
xs = G__22296;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__22293 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22293__delegate.call(this,coll,x,xs);};
G__22293.cljs$lang$maxFixedArity = 2;
G__22293.cljs$lang$applyTo = (function (arglist__22297){
var coll = cljs.core.first(arglist__22297);
arglist__22297 = cljs.core.next(arglist__22297);
var x = cljs.core.first(arglist__22297);
var xs = cljs.core.rest(arglist__22297);
return G__22293__delegate(coll,x,xs);
});
G__22293.cljs$core$IFn$_invoke$arity$variadic = G__22293__delegate;
return G__22293;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__22299__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__22298_SHARP_){return cljs.core.apply.call(null,f,p1__22298_SHARP_,args);
}));
};
var G__22299 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22299__delegate.call(this,a,f,args);};
G__22299.cljs$lang$maxFixedArity = 2;
G__22299.cljs$lang$applyTo = (function (arglist__22300){
var a = cljs.core.first(arglist__22300);
arglist__22300 = cljs.core.next(arglist__22300);
var f = cljs.core.first(arglist__22300);
var args = cljs.core.rest(arglist__22300);
return G__22299__delegate(a,f,args);
});
G__22299.cljs$core$IFn$_invoke$arity$variadic = G__22299__delegate;
return G__22299;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__22301__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__22301 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22301__delegate.call(this,f,arg,args);};
G__22301.cljs$lang$maxFixedArity = 2;
G__22301.cljs$lang$applyTo = (function (arglist__22302){
var f = cljs.core.first(arglist__22302);
arglist__22302 = cljs.core.next(arglist__22302);
var arg = cljs.core.first(arglist__22302);
var args = cljs.core.rest(arglist__22302);
return G__22301__delegate(f,arg,args);
});
G__22301.cljs$core$IFn$_invoke$arity$variadic = G__22301__delegate;
return G__22301;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;
