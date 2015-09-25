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
var G__22073__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__22073 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__22073__delegate.call(this,m,k,f,x1,x2,xs);};
G__22073.cljs$lang$maxFixedArity = 5;
G__22073.cljs$lang$applyTo = (function (arglist__22074){
var m = cljs.core.first(arglist__22074);
arglist__22074 = cljs.core.next(arglist__22074);
var k = cljs.core.first(arglist__22074);
arglist__22074 = cljs.core.next(arglist__22074);
var f = cljs.core.first(arglist__22074);
arglist__22074 = cljs.core.next(arglist__22074);
var x1 = cljs.core.first(arglist__22074);
arglist__22074 = cljs.core.next(arglist__22074);
var x2 = cljs.core.first(arglist__22074);
var xs = cljs.core.rest(arglist__22074);
return G__22073__delegate(m,k,f,x1,x2,xs);
});
G__22073.cljs$core$IFn$_invoke$arity$variadic = G__22073__delegate;
return G__22073;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22083_22089 = cljs.core.seq.call(null,m);var chunk__22084_22090 = null;var count__22085_22091 = (0);var i__22086_22092 = (0);while(true){
if((i__22086_22092 < count__22085_22091))
{var vec__22087_22093 = cljs.core._nth.call(null,chunk__22084_22090,i__22086_22092);var k_22094 = cljs.core.nth.call(null,vec__22087_22093,(0),null);var v_22095 = cljs.core.nth.call(null,vec__22087_22093,(1),null);var m22082_22096 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22082_22096,k_22094,f.call(null,v_22095)));
{
var G__22097 = seq__22083_22089;
var G__22098 = chunk__22084_22090;
var G__22099 = count__22085_22091;
var G__22100 = (i__22086_22092 + (1));
seq__22083_22089 = G__22097;
chunk__22084_22090 = G__22098;
count__22085_22091 = G__22099;
i__22086_22092 = G__22100;
continue;
}
} else
{var temp__4126__auto___22101 = cljs.core.seq.call(null,seq__22083_22089);if(temp__4126__auto___22101)
{var seq__22083_22102__$1 = temp__4126__auto___22101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22083_22102__$1))
{var c__4408__auto___22103 = cljs.core.chunk_first.call(null,seq__22083_22102__$1);{
var G__22104 = cljs.core.chunk_rest.call(null,seq__22083_22102__$1);
var G__22105 = c__4408__auto___22103;
var G__22106 = cljs.core.count.call(null,c__4408__auto___22103);
var G__22107 = (0);
seq__22083_22089 = G__22104;
chunk__22084_22090 = G__22105;
count__22085_22091 = G__22106;
i__22086_22092 = G__22107;
continue;
}
} else
{var vec__22088_22108 = cljs.core.first.call(null,seq__22083_22102__$1);var k_22109 = cljs.core.nth.call(null,vec__22088_22108,(0),null);var v_22110 = cljs.core.nth.call(null,vec__22088_22108,(1),null);var m22082_22111 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22082_22111,k_22109,f.call(null,v_22110)));
{
var G__22112 = cljs.core.next.call(null,seq__22083_22102__$1);
var G__22113 = null;
var G__22114 = (0);
var G__22115 = (0);
seq__22083_22089 = G__22112;
chunk__22084_22090 = G__22113;
count__22085_22091 = G__22114;
i__22086_22092 = G__22115;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22124_22130 = cljs.core.seq.call(null,m);var chunk__22125_22131 = null;var count__22126_22132 = (0);var i__22127_22133 = (0);while(true){
if((i__22127_22133 < count__22126_22132))
{var vec__22128_22134 = cljs.core._nth.call(null,chunk__22125_22131,i__22127_22133);var k_22135 = cljs.core.nth.call(null,vec__22128_22134,(0),null);var v_22136 = cljs.core.nth.call(null,vec__22128_22134,(1),null);var m22123_22137 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22123_22137,f.call(null,k_22135),v_22136));
{
var G__22138 = seq__22124_22130;
var G__22139 = chunk__22125_22131;
var G__22140 = count__22126_22132;
var G__22141 = (i__22127_22133 + (1));
seq__22124_22130 = G__22138;
chunk__22125_22131 = G__22139;
count__22126_22132 = G__22140;
i__22127_22133 = G__22141;
continue;
}
} else
{var temp__4126__auto___22142 = cljs.core.seq.call(null,seq__22124_22130);if(temp__4126__auto___22142)
{var seq__22124_22143__$1 = temp__4126__auto___22142;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22124_22143__$1))
{var c__4408__auto___22144 = cljs.core.chunk_first.call(null,seq__22124_22143__$1);{
var G__22145 = cljs.core.chunk_rest.call(null,seq__22124_22143__$1);
var G__22146 = c__4408__auto___22144;
var G__22147 = cljs.core.count.call(null,c__4408__auto___22144);
var G__22148 = (0);
seq__22124_22130 = G__22145;
chunk__22125_22131 = G__22146;
count__22126_22132 = G__22147;
i__22127_22133 = G__22148;
continue;
}
} else
{var vec__22129_22149 = cljs.core.first.call(null,seq__22124_22143__$1);var k_22150 = cljs.core.nth.call(null,vec__22129_22149,(0),null);var v_22151 = cljs.core.nth.call(null,vec__22129_22149,(1),null);var m22123_22152 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22123_22152,f.call(null,k_22150),v_22151));
{
var G__22153 = cljs.core.next.call(null,seq__22124_22143__$1);
var G__22154 = null;
var G__22155 = (0);
var G__22156 = (0);
seq__22124_22130 = G__22153;
chunk__22125_22131 = G__22154;
count__22126_22132 = G__22155;
i__22127_22133 = G__22156;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22163_22167 = cljs.core.seq.call(null,ks);var chunk__22164_22168 = null;var count__22165_22169 = (0);var i__22166_22170 = (0);while(true){
if((i__22166_22170 < count__22165_22169))
{var k_22171 = cljs.core._nth.call(null,chunk__22164_22168,i__22166_22170);var m22162_22172 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22162_22172,k_22171,f.call(null,k_22171)));
{
var G__22173 = seq__22163_22167;
var G__22174 = chunk__22164_22168;
var G__22175 = count__22165_22169;
var G__22176 = (i__22166_22170 + (1));
seq__22163_22167 = G__22173;
chunk__22164_22168 = G__22174;
count__22165_22169 = G__22175;
i__22166_22170 = G__22176;
continue;
}
} else
{var temp__4126__auto___22177 = cljs.core.seq.call(null,seq__22163_22167);if(temp__4126__auto___22177)
{var seq__22163_22178__$1 = temp__4126__auto___22177;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22163_22178__$1))
{var c__4408__auto___22179 = cljs.core.chunk_first.call(null,seq__22163_22178__$1);{
var G__22180 = cljs.core.chunk_rest.call(null,seq__22163_22178__$1);
var G__22181 = c__4408__auto___22179;
var G__22182 = cljs.core.count.call(null,c__4408__auto___22179);
var G__22183 = (0);
seq__22163_22167 = G__22180;
chunk__22164_22168 = G__22181;
count__22165_22169 = G__22182;
i__22166_22170 = G__22183;
continue;
}
} else
{var k_22184 = cljs.core.first.call(null,seq__22163_22178__$1);var m22162_22185 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22162_22185,k_22184,f.call(null,k_22184)));
{
var G__22186 = cljs.core.next.call(null,seq__22163_22178__$1);
var G__22187 = null;
var G__22188 = (0);
var G__22189 = (0);
seq__22163_22167 = G__22186;
chunk__22164_22168 = G__22187;
count__22165_22169 = G__22188;
i__22166_22170 = G__22189;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22196_22200 = cljs.core.seq.call(null,vs);var chunk__22197_22201 = null;var count__22198_22202 = (0);var i__22199_22203 = (0);while(true){
if((i__22199_22203 < count__22198_22202))
{var v_22204 = cljs.core._nth.call(null,chunk__22197_22201,i__22199_22203);var m22195_22205 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22195_22205,f.call(null,v_22204),v_22204));
{
var G__22206 = seq__22196_22200;
var G__22207 = chunk__22197_22201;
var G__22208 = count__22198_22202;
var G__22209 = (i__22199_22203 + (1));
seq__22196_22200 = G__22206;
chunk__22197_22201 = G__22207;
count__22198_22202 = G__22208;
i__22199_22203 = G__22209;
continue;
}
} else
{var temp__4126__auto___22210 = cljs.core.seq.call(null,seq__22196_22200);if(temp__4126__auto___22210)
{var seq__22196_22211__$1 = temp__4126__auto___22210;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22196_22211__$1))
{var c__4408__auto___22212 = cljs.core.chunk_first.call(null,seq__22196_22211__$1);{
var G__22213 = cljs.core.chunk_rest.call(null,seq__22196_22211__$1);
var G__22214 = c__4408__auto___22212;
var G__22215 = cljs.core.count.call(null,c__4408__auto___22212);
var G__22216 = (0);
seq__22196_22200 = G__22213;
chunk__22197_22201 = G__22214;
count__22198_22202 = G__22215;
i__22199_22203 = G__22216;
continue;
}
} else
{var v_22217 = cljs.core.first.call(null,seq__22196_22211__$1);var m22195_22218 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22195_22218,f.call(null,v_22217),v_22217));
{
var G__22219 = cljs.core.next.call(null,seq__22196_22211__$1);
var G__22220 = null;
var G__22221 = (0);
var G__22222 = (0);
seq__22196_22200 = G__22219;
chunk__22197_22201 = G__22220;
count__22198_22202 = G__22221;
i__22199_22203 = G__22222;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__22223){var vec__22225 = p__22223;var k = cljs.core.nth.call(null,vec__22225,(0),null);var ks = cljs.core.nthnext.call(null,vec__22225,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22234_22240 = cljs.core.seq.call(null,x);var chunk__22235_22241 = null;var count__22236_22242 = (0);var i__22237_22243 = (0);while(true){
if((i__22237_22243 < count__22236_22242))
{var vec__22238_22244 = cljs.core._nth.call(null,chunk__22235_22241,i__22237_22243);var k_22245 = cljs.core.nth.call(null,vec__22238_22244,(0),null);var v_22246 = cljs.core.nth.call(null,vec__22238_22244,(1),null);var m22233_22247 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22233_22247,((typeof k_22245 === 'string')?cljs.core.keyword.call(null,k_22245):k_22245),keywordize_map.call(null,v_22246)));
{
var G__22248 = seq__22234_22240;
var G__22249 = chunk__22235_22241;
var G__22250 = count__22236_22242;
var G__22251 = (i__22237_22243 + (1));
seq__22234_22240 = G__22248;
chunk__22235_22241 = G__22249;
count__22236_22242 = G__22250;
i__22237_22243 = G__22251;
continue;
}
} else
{var temp__4126__auto___22252 = cljs.core.seq.call(null,seq__22234_22240);if(temp__4126__auto___22252)
{var seq__22234_22253__$1 = temp__4126__auto___22252;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22234_22253__$1))
{var c__4408__auto___22254 = cljs.core.chunk_first.call(null,seq__22234_22253__$1);{
var G__22255 = cljs.core.chunk_rest.call(null,seq__22234_22253__$1);
var G__22256 = c__4408__auto___22254;
var G__22257 = cljs.core.count.call(null,c__4408__auto___22254);
var G__22258 = (0);
seq__22234_22240 = G__22255;
chunk__22235_22241 = G__22256;
count__22236_22242 = G__22257;
i__22237_22243 = G__22258;
continue;
}
} else
{var vec__22239_22259 = cljs.core.first.call(null,seq__22234_22253__$1);var k_22260 = cljs.core.nth.call(null,vec__22239_22259,(0),null);var v_22261 = cljs.core.nth.call(null,vec__22239_22259,(1),null);var m22233_22262 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22233_22262,((typeof k_22260 === 'string')?cljs.core.keyword.call(null,k_22260):k_22260),keywordize_map.call(null,v_22261)));
{
var G__22263 = cljs.core.next.call(null,seq__22234_22253__$1);
var G__22264 = null;
var G__22265 = (0);
var G__22266 = (0);
seq__22234_22240 = G__22263;
chunk__22235_22241 = G__22264;
count__22236_22242 = G__22265;
i__22237_22243 = G__22266;
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
var G__22267 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__22268 = cljs.core.next.call(null,ks);
m = G__22267;
ks = G__22268;
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
})(),(function (){var iter__4377__auto__ = (function iter__22277(s__22278){return (new cljs.core.LazySeq(null,(function (){var s__22278__$1 = s__22278;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22278__$1);if(temp__4126__auto__)
{var s__22278__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22278__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22278__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22280 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22279 = (0);while(true){
if((i__22279 < size__4376__auto__))
{var vec__22283 = cljs.core._nth.call(null,c__4375__auto__,i__22279);var k = cljs.core.nth.call(null,vec__22283,(0),null);var v = cljs.core.nth.call(null,vec__22283,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__22280,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22285 = (i__22279 + (1));
i__22279 = G__22285;
continue;
}
} else
{{
var G__22286 = (i__22279 + (1));
i__22279 = G__22286;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22280),iter__22277.call(null,cljs.core.chunk_rest.call(null,s__22278__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22280),null);
}
} else
{var vec__22284 = cljs.core.first.call(null,s__22278__$2);var k = cljs.core.nth.call(null,vec__22284,(0),null);var v = cljs.core.nth.call(null,vec__22284,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22277.call(null,cljs.core.rest.call(null,s__22278__$2)));
} else
{{
var G__22287 = cljs.core.rest.call(null,s__22278__$2);
s__22278__$1 = G__22287;
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
assoc_when.cljs$lang$applyTo = (function (arglist__22288){
var m = cljs.core.first(arglist__22288);
var kvs = cljs.core.rest(arglist__22288);
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
update_in_when.cljs$lang$applyTo = (function (arglist__22289){
var m = cljs.core.first(arglist__22289);
arglist__22289 = cljs.core.next(arglist__22289);
var key_seq = cljs.core.first(arglist__22289);
arglist__22289 = cljs.core.next(arglist__22289);
var f = cljs.core.first(arglist__22289);
var args = cljs.core.rest(arglist__22289);
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
return (function iter__22294(s__22295){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__22295__$1 = s__22295;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22295__$1);if(temp__4126__auto__)
{var s__22295__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22295__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22295__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22297 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22296 = (0);while(true){
if((i__22296 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22296);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__22297,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__22298 = (i__22296 + (1));
i__22296 = G__22298;
continue;
}
} else
{{
var G__22299 = (i__22296 + (1));
i__22296 = G__22299;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22297),iter__22294.call(null,cljs.core.chunk_rest.call(null,s__22295__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22297),null);
}
} else
{var x = cljs.core.first.call(null,s__22295__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__22294.call(null,cljs.core.rest.call(null,s__22295__$2)));
} else
{{
var G__22300 = cljs.core.rest.call(null,s__22295__$2);
s__22295__$1 = G__22300;
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
interleave_all.cljs$lang$applyTo = (function (arglist__22301){
var colls = cljs.core.seq(arglist__22301);
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
var G__22302__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__22303 = conj_when.call(null,coll,x);
var G__22304 = cljs.core.first.call(null,xs);
var G__22305 = cljs.core.next.call(null,xs);
coll = G__22303;
x = G__22304;
xs = G__22305;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__22302 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22302__delegate.call(this,coll,x,xs);};
G__22302.cljs$lang$maxFixedArity = 2;
G__22302.cljs$lang$applyTo = (function (arglist__22306){
var coll = cljs.core.first(arglist__22306);
arglist__22306 = cljs.core.next(arglist__22306);
var x = cljs.core.first(arglist__22306);
var xs = cljs.core.rest(arglist__22306);
return G__22302__delegate(coll,x,xs);
});
G__22302.cljs$core$IFn$_invoke$arity$variadic = G__22302__delegate;
return G__22302;
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
var G__22308__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__22307_SHARP_){return cljs.core.apply.call(null,f,p1__22307_SHARP_,args);
}));
};
var G__22308 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22308__delegate.call(this,a,f,args);};
G__22308.cljs$lang$maxFixedArity = 2;
G__22308.cljs$lang$applyTo = (function (arglist__22309){
var a = cljs.core.first(arglist__22309);
arglist__22309 = cljs.core.next(arglist__22309);
var f = cljs.core.first(arglist__22309);
var args = cljs.core.rest(arglist__22309);
return G__22308__delegate(a,f,args);
});
G__22308.cljs$core$IFn$_invoke$arity$variadic = G__22308__delegate;
return G__22308;
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
var G__22310__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__22310 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22310__delegate.call(this,f,arg,args);};
G__22310.cljs$lang$maxFixedArity = 2;
G__22310.cljs$lang$applyTo = (function (arglist__22311){
var f = cljs.core.first(arglist__22311);
arglist__22311 = cljs.core.next(arglist__22311);
var arg = cljs.core.first(arglist__22311);
var args = cljs.core.rest(arglist__22311);
return G__22310__delegate(f,arg,args);
});
G__22310.cljs$core$IFn$_invoke$arity$variadic = G__22310__delegate;
return G__22310;
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
