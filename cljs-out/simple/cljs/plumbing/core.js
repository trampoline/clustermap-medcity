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
var G__22052__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__22052 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__22052__delegate.call(this,m,k,f,x1,x2,xs);};
G__22052.cljs$lang$maxFixedArity = 5;
G__22052.cljs$lang$applyTo = (function (arglist__22053){
var m = cljs.core.first(arglist__22053);
arglist__22053 = cljs.core.next(arglist__22053);
var k = cljs.core.first(arglist__22053);
arglist__22053 = cljs.core.next(arglist__22053);
var f = cljs.core.first(arglist__22053);
arglist__22053 = cljs.core.next(arglist__22053);
var x1 = cljs.core.first(arglist__22053);
arglist__22053 = cljs.core.next(arglist__22053);
var x2 = cljs.core.first(arglist__22053);
var xs = cljs.core.rest(arglist__22053);
return G__22052__delegate(m,k,f,x1,x2,xs);
});
G__22052.cljs$core$IFn$_invoke$arity$variadic = G__22052__delegate;
return G__22052;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22062_22068 = cljs.core.seq.call(null,m);var chunk__22063_22069 = null;var count__22064_22070 = (0);var i__22065_22071 = (0);while(true){
if((i__22065_22071 < count__22064_22070))
{var vec__22066_22072 = cljs.core._nth.call(null,chunk__22063_22069,i__22065_22071);var k_22073 = cljs.core.nth.call(null,vec__22066_22072,(0),null);var v_22074 = cljs.core.nth.call(null,vec__22066_22072,(1),null);var m22061_22075 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22061_22075,k_22073,f.call(null,v_22074)));
{
var G__22076 = seq__22062_22068;
var G__22077 = chunk__22063_22069;
var G__22078 = count__22064_22070;
var G__22079 = (i__22065_22071 + (1));
seq__22062_22068 = G__22076;
chunk__22063_22069 = G__22077;
count__22064_22070 = G__22078;
i__22065_22071 = G__22079;
continue;
}
} else
{var temp__4126__auto___22080 = cljs.core.seq.call(null,seq__22062_22068);if(temp__4126__auto___22080)
{var seq__22062_22081__$1 = temp__4126__auto___22080;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22062_22081__$1))
{var c__4408__auto___22082 = cljs.core.chunk_first.call(null,seq__22062_22081__$1);{
var G__22083 = cljs.core.chunk_rest.call(null,seq__22062_22081__$1);
var G__22084 = c__4408__auto___22082;
var G__22085 = cljs.core.count.call(null,c__4408__auto___22082);
var G__22086 = (0);
seq__22062_22068 = G__22083;
chunk__22063_22069 = G__22084;
count__22064_22070 = G__22085;
i__22065_22071 = G__22086;
continue;
}
} else
{var vec__22067_22087 = cljs.core.first.call(null,seq__22062_22081__$1);var k_22088 = cljs.core.nth.call(null,vec__22067_22087,(0),null);var v_22089 = cljs.core.nth.call(null,vec__22067_22087,(1),null);var m22061_22090 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22061_22090,k_22088,f.call(null,v_22089)));
{
var G__22091 = cljs.core.next.call(null,seq__22062_22081__$1);
var G__22092 = null;
var G__22093 = (0);
var G__22094 = (0);
seq__22062_22068 = G__22091;
chunk__22063_22069 = G__22092;
count__22064_22070 = G__22093;
i__22065_22071 = G__22094;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22103_22109 = cljs.core.seq.call(null,m);var chunk__22104_22110 = null;var count__22105_22111 = (0);var i__22106_22112 = (0);while(true){
if((i__22106_22112 < count__22105_22111))
{var vec__22107_22113 = cljs.core._nth.call(null,chunk__22104_22110,i__22106_22112);var k_22114 = cljs.core.nth.call(null,vec__22107_22113,(0),null);var v_22115 = cljs.core.nth.call(null,vec__22107_22113,(1),null);var m22102_22116 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22102_22116,f.call(null,k_22114),v_22115));
{
var G__22117 = seq__22103_22109;
var G__22118 = chunk__22104_22110;
var G__22119 = count__22105_22111;
var G__22120 = (i__22106_22112 + (1));
seq__22103_22109 = G__22117;
chunk__22104_22110 = G__22118;
count__22105_22111 = G__22119;
i__22106_22112 = G__22120;
continue;
}
} else
{var temp__4126__auto___22121 = cljs.core.seq.call(null,seq__22103_22109);if(temp__4126__auto___22121)
{var seq__22103_22122__$1 = temp__4126__auto___22121;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22103_22122__$1))
{var c__4408__auto___22123 = cljs.core.chunk_first.call(null,seq__22103_22122__$1);{
var G__22124 = cljs.core.chunk_rest.call(null,seq__22103_22122__$1);
var G__22125 = c__4408__auto___22123;
var G__22126 = cljs.core.count.call(null,c__4408__auto___22123);
var G__22127 = (0);
seq__22103_22109 = G__22124;
chunk__22104_22110 = G__22125;
count__22105_22111 = G__22126;
i__22106_22112 = G__22127;
continue;
}
} else
{var vec__22108_22128 = cljs.core.first.call(null,seq__22103_22122__$1);var k_22129 = cljs.core.nth.call(null,vec__22108_22128,(0),null);var v_22130 = cljs.core.nth.call(null,vec__22108_22128,(1),null);var m22102_22131 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22102_22131,f.call(null,k_22129),v_22130));
{
var G__22132 = cljs.core.next.call(null,seq__22103_22122__$1);
var G__22133 = null;
var G__22134 = (0);
var G__22135 = (0);
seq__22103_22109 = G__22132;
chunk__22104_22110 = G__22133;
count__22105_22111 = G__22134;
i__22106_22112 = G__22135;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22142_22146 = cljs.core.seq.call(null,ks);var chunk__22143_22147 = null;var count__22144_22148 = (0);var i__22145_22149 = (0);while(true){
if((i__22145_22149 < count__22144_22148))
{var k_22150 = cljs.core._nth.call(null,chunk__22143_22147,i__22145_22149);var m22141_22151 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22141_22151,k_22150,f.call(null,k_22150)));
{
var G__22152 = seq__22142_22146;
var G__22153 = chunk__22143_22147;
var G__22154 = count__22144_22148;
var G__22155 = (i__22145_22149 + (1));
seq__22142_22146 = G__22152;
chunk__22143_22147 = G__22153;
count__22144_22148 = G__22154;
i__22145_22149 = G__22155;
continue;
}
} else
{var temp__4126__auto___22156 = cljs.core.seq.call(null,seq__22142_22146);if(temp__4126__auto___22156)
{var seq__22142_22157__$1 = temp__4126__auto___22156;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22142_22157__$1))
{var c__4408__auto___22158 = cljs.core.chunk_first.call(null,seq__22142_22157__$1);{
var G__22159 = cljs.core.chunk_rest.call(null,seq__22142_22157__$1);
var G__22160 = c__4408__auto___22158;
var G__22161 = cljs.core.count.call(null,c__4408__auto___22158);
var G__22162 = (0);
seq__22142_22146 = G__22159;
chunk__22143_22147 = G__22160;
count__22144_22148 = G__22161;
i__22145_22149 = G__22162;
continue;
}
} else
{var k_22163 = cljs.core.first.call(null,seq__22142_22157__$1);var m22141_22164 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22141_22164,k_22163,f.call(null,k_22163)));
{
var G__22165 = cljs.core.next.call(null,seq__22142_22157__$1);
var G__22166 = null;
var G__22167 = (0);
var G__22168 = (0);
seq__22142_22146 = G__22165;
chunk__22143_22147 = G__22166;
count__22144_22148 = G__22167;
i__22145_22149 = G__22168;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22175_22179 = cljs.core.seq.call(null,vs);var chunk__22176_22180 = null;var count__22177_22181 = (0);var i__22178_22182 = (0);while(true){
if((i__22178_22182 < count__22177_22181))
{var v_22183 = cljs.core._nth.call(null,chunk__22176_22180,i__22178_22182);var m22174_22184 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22174_22184,f.call(null,v_22183),v_22183));
{
var G__22185 = seq__22175_22179;
var G__22186 = chunk__22176_22180;
var G__22187 = count__22177_22181;
var G__22188 = (i__22178_22182 + (1));
seq__22175_22179 = G__22185;
chunk__22176_22180 = G__22186;
count__22177_22181 = G__22187;
i__22178_22182 = G__22188;
continue;
}
} else
{var temp__4126__auto___22189 = cljs.core.seq.call(null,seq__22175_22179);if(temp__4126__auto___22189)
{var seq__22175_22190__$1 = temp__4126__auto___22189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22175_22190__$1))
{var c__4408__auto___22191 = cljs.core.chunk_first.call(null,seq__22175_22190__$1);{
var G__22192 = cljs.core.chunk_rest.call(null,seq__22175_22190__$1);
var G__22193 = c__4408__auto___22191;
var G__22194 = cljs.core.count.call(null,c__4408__auto___22191);
var G__22195 = (0);
seq__22175_22179 = G__22192;
chunk__22176_22180 = G__22193;
count__22177_22181 = G__22194;
i__22178_22182 = G__22195;
continue;
}
} else
{var v_22196 = cljs.core.first.call(null,seq__22175_22190__$1);var m22174_22197 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22174_22197,f.call(null,v_22196),v_22196));
{
var G__22198 = cljs.core.next.call(null,seq__22175_22190__$1);
var G__22199 = null;
var G__22200 = (0);
var G__22201 = (0);
seq__22175_22179 = G__22198;
chunk__22176_22180 = G__22199;
count__22177_22181 = G__22200;
i__22178_22182 = G__22201;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__22202){var vec__22204 = p__22202;var k = cljs.core.nth.call(null,vec__22204,(0),null);var ks = cljs.core.nthnext.call(null,vec__22204,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22213_22219 = cljs.core.seq.call(null,x);var chunk__22214_22220 = null;var count__22215_22221 = (0);var i__22216_22222 = (0);while(true){
if((i__22216_22222 < count__22215_22221))
{var vec__22217_22223 = cljs.core._nth.call(null,chunk__22214_22220,i__22216_22222);var k_22224 = cljs.core.nth.call(null,vec__22217_22223,(0),null);var v_22225 = cljs.core.nth.call(null,vec__22217_22223,(1),null);var m22212_22226 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22212_22226,((typeof k_22224 === 'string')?cljs.core.keyword.call(null,k_22224):k_22224),keywordize_map.call(null,v_22225)));
{
var G__22227 = seq__22213_22219;
var G__22228 = chunk__22214_22220;
var G__22229 = count__22215_22221;
var G__22230 = (i__22216_22222 + (1));
seq__22213_22219 = G__22227;
chunk__22214_22220 = G__22228;
count__22215_22221 = G__22229;
i__22216_22222 = G__22230;
continue;
}
} else
{var temp__4126__auto___22231 = cljs.core.seq.call(null,seq__22213_22219);if(temp__4126__auto___22231)
{var seq__22213_22232__$1 = temp__4126__auto___22231;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22213_22232__$1))
{var c__4408__auto___22233 = cljs.core.chunk_first.call(null,seq__22213_22232__$1);{
var G__22234 = cljs.core.chunk_rest.call(null,seq__22213_22232__$1);
var G__22235 = c__4408__auto___22233;
var G__22236 = cljs.core.count.call(null,c__4408__auto___22233);
var G__22237 = (0);
seq__22213_22219 = G__22234;
chunk__22214_22220 = G__22235;
count__22215_22221 = G__22236;
i__22216_22222 = G__22237;
continue;
}
} else
{var vec__22218_22238 = cljs.core.first.call(null,seq__22213_22232__$1);var k_22239 = cljs.core.nth.call(null,vec__22218_22238,(0),null);var v_22240 = cljs.core.nth.call(null,vec__22218_22238,(1),null);var m22212_22241 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22212_22241,((typeof k_22239 === 'string')?cljs.core.keyword.call(null,k_22239):k_22239),keywordize_map.call(null,v_22240)));
{
var G__22242 = cljs.core.next.call(null,seq__22213_22232__$1);
var G__22243 = null;
var G__22244 = (0);
var G__22245 = (0);
seq__22213_22219 = G__22242;
chunk__22214_22220 = G__22243;
count__22215_22221 = G__22244;
i__22216_22222 = G__22245;
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
var G__22246 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__22247 = cljs.core.next.call(null,ks);
m = G__22246;
ks = G__22247;
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
})(),(function (){var iter__4377__auto__ = (function iter__22256(s__22257){return (new cljs.core.LazySeq(null,(function (){var s__22257__$1 = s__22257;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22257__$1);if(temp__4126__auto__)
{var s__22257__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22257__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22257__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22259 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22258 = (0);while(true){
if((i__22258 < size__4376__auto__))
{var vec__22262 = cljs.core._nth.call(null,c__4375__auto__,i__22258);var k = cljs.core.nth.call(null,vec__22262,(0),null);var v = cljs.core.nth.call(null,vec__22262,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__22259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22264 = (i__22258 + (1));
i__22258 = G__22264;
continue;
}
} else
{{
var G__22265 = (i__22258 + (1));
i__22258 = G__22265;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22259),iter__22256.call(null,cljs.core.chunk_rest.call(null,s__22257__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22259),null);
}
} else
{var vec__22263 = cljs.core.first.call(null,s__22257__$2);var k = cljs.core.nth.call(null,vec__22263,(0),null);var v = cljs.core.nth.call(null,vec__22263,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22256.call(null,cljs.core.rest.call(null,s__22257__$2)));
} else
{{
var G__22266 = cljs.core.rest.call(null,s__22257__$2);
s__22257__$1 = G__22266;
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
assoc_when.cljs$lang$applyTo = (function (arglist__22267){
var m = cljs.core.first(arglist__22267);
var kvs = cljs.core.rest(arglist__22267);
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
update_in_when.cljs$lang$applyTo = (function (arglist__22268){
var m = cljs.core.first(arglist__22268);
arglist__22268 = cljs.core.next(arglist__22268);
var key_seq = cljs.core.first(arglist__22268);
arglist__22268 = cljs.core.next(arglist__22268);
var f = cljs.core.first(arglist__22268);
var args = cljs.core.rest(arglist__22268);
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
return (function iter__22273(s__22274){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__22274__$1 = s__22274;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22274__$1);if(temp__4126__auto__)
{var s__22274__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22274__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22274__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22276 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22275 = (0);while(true){
if((i__22275 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22275);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__22276,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__22277 = (i__22275 + (1));
i__22275 = G__22277;
continue;
}
} else
{{
var G__22278 = (i__22275 + (1));
i__22275 = G__22278;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22276),iter__22273.call(null,cljs.core.chunk_rest.call(null,s__22274__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22276),null);
}
} else
{var x = cljs.core.first.call(null,s__22274__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__22273.call(null,cljs.core.rest.call(null,s__22274__$2)));
} else
{{
var G__22279 = cljs.core.rest.call(null,s__22274__$2);
s__22274__$1 = G__22279;
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
interleave_all.cljs$lang$applyTo = (function (arglist__22280){
var colls = cljs.core.seq(arglist__22280);
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
var G__22281__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__22282 = conj_when.call(null,coll,x);
var G__22283 = cljs.core.first.call(null,xs);
var G__22284 = cljs.core.next.call(null,xs);
coll = G__22282;
x = G__22283;
xs = G__22284;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__22281 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22281__delegate.call(this,coll,x,xs);};
G__22281.cljs$lang$maxFixedArity = 2;
G__22281.cljs$lang$applyTo = (function (arglist__22285){
var coll = cljs.core.first(arglist__22285);
arglist__22285 = cljs.core.next(arglist__22285);
var x = cljs.core.first(arglist__22285);
var xs = cljs.core.rest(arglist__22285);
return G__22281__delegate(coll,x,xs);
});
G__22281.cljs$core$IFn$_invoke$arity$variadic = G__22281__delegate;
return G__22281;
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
var G__22287__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__22286_SHARP_){return cljs.core.apply.call(null,f,p1__22286_SHARP_,args);
}));
};
var G__22287 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22287__delegate.call(this,a,f,args);};
G__22287.cljs$lang$maxFixedArity = 2;
G__22287.cljs$lang$applyTo = (function (arglist__22288){
var a = cljs.core.first(arglist__22288);
arglist__22288 = cljs.core.next(arglist__22288);
var f = cljs.core.first(arglist__22288);
var args = cljs.core.rest(arglist__22288);
return G__22287__delegate(a,f,args);
});
G__22287.cljs$core$IFn$_invoke$arity$variadic = G__22287__delegate;
return G__22287;
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
var G__22289__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__22289 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22289__delegate.call(this,f,arg,args);};
G__22289.cljs$lang$maxFixedArity = 2;
G__22289.cljs$lang$applyTo = (function (arglist__22290){
var f = cljs.core.first(arglist__22290);
arglist__22290 = cljs.core.next(arglist__22290);
var arg = cljs.core.first(arglist__22290);
var args = cljs.core.rest(arglist__22290);
return G__22289__delegate(f,arg,args);
});
G__22289.cljs$core$IFn$_invoke$arity$variadic = G__22289__delegate;
return G__22289;
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
