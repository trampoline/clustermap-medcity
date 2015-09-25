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
var G__22069__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__22069 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__22069__delegate.call(this,m,k,f,x1,x2,xs);};
G__22069.cljs$lang$maxFixedArity = 5;
G__22069.cljs$lang$applyTo = (function (arglist__22070){
var m = cljs.core.first(arglist__22070);
arglist__22070 = cljs.core.next(arglist__22070);
var k = cljs.core.first(arglist__22070);
arglist__22070 = cljs.core.next(arglist__22070);
var f = cljs.core.first(arglist__22070);
arglist__22070 = cljs.core.next(arglist__22070);
var x1 = cljs.core.first(arglist__22070);
arglist__22070 = cljs.core.next(arglist__22070);
var x2 = cljs.core.first(arglist__22070);
var xs = cljs.core.rest(arglist__22070);
return G__22069__delegate(m,k,f,x1,x2,xs);
});
G__22069.cljs$core$IFn$_invoke$arity$variadic = G__22069__delegate;
return G__22069;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22079_22085 = cljs.core.seq.call(null,m);var chunk__22080_22086 = null;var count__22081_22087 = (0);var i__22082_22088 = (0);while(true){
if((i__22082_22088 < count__22081_22087))
{var vec__22083_22089 = cljs.core._nth.call(null,chunk__22080_22086,i__22082_22088);var k_22090 = cljs.core.nth.call(null,vec__22083_22089,(0),null);var v_22091 = cljs.core.nth.call(null,vec__22083_22089,(1),null);var m22078_22092 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22078_22092,k_22090,f.call(null,v_22091)));
{
var G__22093 = seq__22079_22085;
var G__22094 = chunk__22080_22086;
var G__22095 = count__22081_22087;
var G__22096 = (i__22082_22088 + (1));
seq__22079_22085 = G__22093;
chunk__22080_22086 = G__22094;
count__22081_22087 = G__22095;
i__22082_22088 = G__22096;
continue;
}
} else
{var temp__4126__auto___22097 = cljs.core.seq.call(null,seq__22079_22085);if(temp__4126__auto___22097)
{var seq__22079_22098__$1 = temp__4126__auto___22097;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22079_22098__$1))
{var c__4408__auto___22099 = cljs.core.chunk_first.call(null,seq__22079_22098__$1);{
var G__22100 = cljs.core.chunk_rest.call(null,seq__22079_22098__$1);
var G__22101 = c__4408__auto___22099;
var G__22102 = cljs.core.count.call(null,c__4408__auto___22099);
var G__22103 = (0);
seq__22079_22085 = G__22100;
chunk__22080_22086 = G__22101;
count__22081_22087 = G__22102;
i__22082_22088 = G__22103;
continue;
}
} else
{var vec__22084_22104 = cljs.core.first.call(null,seq__22079_22098__$1);var k_22105 = cljs.core.nth.call(null,vec__22084_22104,(0),null);var v_22106 = cljs.core.nth.call(null,vec__22084_22104,(1),null);var m22078_22107 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22078_22107,k_22105,f.call(null,v_22106)));
{
var G__22108 = cljs.core.next.call(null,seq__22079_22098__$1);
var G__22109 = null;
var G__22110 = (0);
var G__22111 = (0);
seq__22079_22085 = G__22108;
chunk__22080_22086 = G__22109;
count__22081_22087 = G__22110;
i__22082_22088 = G__22111;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22120_22126 = cljs.core.seq.call(null,m);var chunk__22121_22127 = null;var count__22122_22128 = (0);var i__22123_22129 = (0);while(true){
if((i__22123_22129 < count__22122_22128))
{var vec__22124_22130 = cljs.core._nth.call(null,chunk__22121_22127,i__22123_22129);var k_22131 = cljs.core.nth.call(null,vec__22124_22130,(0),null);var v_22132 = cljs.core.nth.call(null,vec__22124_22130,(1),null);var m22119_22133 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22119_22133,f.call(null,k_22131),v_22132));
{
var G__22134 = seq__22120_22126;
var G__22135 = chunk__22121_22127;
var G__22136 = count__22122_22128;
var G__22137 = (i__22123_22129 + (1));
seq__22120_22126 = G__22134;
chunk__22121_22127 = G__22135;
count__22122_22128 = G__22136;
i__22123_22129 = G__22137;
continue;
}
} else
{var temp__4126__auto___22138 = cljs.core.seq.call(null,seq__22120_22126);if(temp__4126__auto___22138)
{var seq__22120_22139__$1 = temp__4126__auto___22138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22120_22139__$1))
{var c__4408__auto___22140 = cljs.core.chunk_first.call(null,seq__22120_22139__$1);{
var G__22141 = cljs.core.chunk_rest.call(null,seq__22120_22139__$1);
var G__22142 = c__4408__auto___22140;
var G__22143 = cljs.core.count.call(null,c__4408__auto___22140);
var G__22144 = (0);
seq__22120_22126 = G__22141;
chunk__22121_22127 = G__22142;
count__22122_22128 = G__22143;
i__22123_22129 = G__22144;
continue;
}
} else
{var vec__22125_22145 = cljs.core.first.call(null,seq__22120_22139__$1);var k_22146 = cljs.core.nth.call(null,vec__22125_22145,(0),null);var v_22147 = cljs.core.nth.call(null,vec__22125_22145,(1),null);var m22119_22148 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22119_22148,f.call(null,k_22146),v_22147));
{
var G__22149 = cljs.core.next.call(null,seq__22120_22139__$1);
var G__22150 = null;
var G__22151 = (0);
var G__22152 = (0);
seq__22120_22126 = G__22149;
chunk__22121_22127 = G__22150;
count__22122_22128 = G__22151;
i__22123_22129 = G__22152;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22159_22163 = cljs.core.seq.call(null,ks);var chunk__22160_22164 = null;var count__22161_22165 = (0);var i__22162_22166 = (0);while(true){
if((i__22162_22166 < count__22161_22165))
{var k_22167 = cljs.core._nth.call(null,chunk__22160_22164,i__22162_22166);var m22158_22168 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22158_22168,k_22167,f.call(null,k_22167)));
{
var G__22169 = seq__22159_22163;
var G__22170 = chunk__22160_22164;
var G__22171 = count__22161_22165;
var G__22172 = (i__22162_22166 + (1));
seq__22159_22163 = G__22169;
chunk__22160_22164 = G__22170;
count__22161_22165 = G__22171;
i__22162_22166 = G__22172;
continue;
}
} else
{var temp__4126__auto___22173 = cljs.core.seq.call(null,seq__22159_22163);if(temp__4126__auto___22173)
{var seq__22159_22174__$1 = temp__4126__auto___22173;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22159_22174__$1))
{var c__4408__auto___22175 = cljs.core.chunk_first.call(null,seq__22159_22174__$1);{
var G__22176 = cljs.core.chunk_rest.call(null,seq__22159_22174__$1);
var G__22177 = c__4408__auto___22175;
var G__22178 = cljs.core.count.call(null,c__4408__auto___22175);
var G__22179 = (0);
seq__22159_22163 = G__22176;
chunk__22160_22164 = G__22177;
count__22161_22165 = G__22178;
i__22162_22166 = G__22179;
continue;
}
} else
{var k_22180 = cljs.core.first.call(null,seq__22159_22174__$1);var m22158_22181 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22158_22181,k_22180,f.call(null,k_22180)));
{
var G__22182 = cljs.core.next.call(null,seq__22159_22174__$1);
var G__22183 = null;
var G__22184 = (0);
var G__22185 = (0);
seq__22159_22163 = G__22182;
chunk__22160_22164 = G__22183;
count__22161_22165 = G__22184;
i__22162_22166 = G__22185;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22192_22196 = cljs.core.seq.call(null,vs);var chunk__22193_22197 = null;var count__22194_22198 = (0);var i__22195_22199 = (0);while(true){
if((i__22195_22199 < count__22194_22198))
{var v_22200 = cljs.core._nth.call(null,chunk__22193_22197,i__22195_22199);var m22191_22201 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22191_22201,f.call(null,v_22200),v_22200));
{
var G__22202 = seq__22192_22196;
var G__22203 = chunk__22193_22197;
var G__22204 = count__22194_22198;
var G__22205 = (i__22195_22199 + (1));
seq__22192_22196 = G__22202;
chunk__22193_22197 = G__22203;
count__22194_22198 = G__22204;
i__22195_22199 = G__22205;
continue;
}
} else
{var temp__4126__auto___22206 = cljs.core.seq.call(null,seq__22192_22196);if(temp__4126__auto___22206)
{var seq__22192_22207__$1 = temp__4126__auto___22206;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22192_22207__$1))
{var c__4408__auto___22208 = cljs.core.chunk_first.call(null,seq__22192_22207__$1);{
var G__22209 = cljs.core.chunk_rest.call(null,seq__22192_22207__$1);
var G__22210 = c__4408__auto___22208;
var G__22211 = cljs.core.count.call(null,c__4408__auto___22208);
var G__22212 = (0);
seq__22192_22196 = G__22209;
chunk__22193_22197 = G__22210;
count__22194_22198 = G__22211;
i__22195_22199 = G__22212;
continue;
}
} else
{var v_22213 = cljs.core.first.call(null,seq__22192_22207__$1);var m22191_22214 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22191_22214,f.call(null,v_22213),v_22213));
{
var G__22215 = cljs.core.next.call(null,seq__22192_22207__$1);
var G__22216 = null;
var G__22217 = (0);
var G__22218 = (0);
seq__22192_22196 = G__22215;
chunk__22193_22197 = G__22216;
count__22194_22198 = G__22217;
i__22195_22199 = G__22218;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__22219){var vec__22221 = p__22219;var k = cljs.core.nth.call(null,vec__22221,(0),null);var ks = cljs.core.nthnext.call(null,vec__22221,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22230_22236 = cljs.core.seq.call(null,x);var chunk__22231_22237 = null;var count__22232_22238 = (0);var i__22233_22239 = (0);while(true){
if((i__22233_22239 < count__22232_22238))
{var vec__22234_22240 = cljs.core._nth.call(null,chunk__22231_22237,i__22233_22239);var k_22241 = cljs.core.nth.call(null,vec__22234_22240,(0),null);var v_22242 = cljs.core.nth.call(null,vec__22234_22240,(1),null);var m22229_22243 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22229_22243,((typeof k_22241 === 'string')?cljs.core.keyword.call(null,k_22241):k_22241),keywordize_map.call(null,v_22242)));
{
var G__22244 = seq__22230_22236;
var G__22245 = chunk__22231_22237;
var G__22246 = count__22232_22238;
var G__22247 = (i__22233_22239 + (1));
seq__22230_22236 = G__22244;
chunk__22231_22237 = G__22245;
count__22232_22238 = G__22246;
i__22233_22239 = G__22247;
continue;
}
} else
{var temp__4126__auto___22248 = cljs.core.seq.call(null,seq__22230_22236);if(temp__4126__auto___22248)
{var seq__22230_22249__$1 = temp__4126__auto___22248;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22230_22249__$1))
{var c__4408__auto___22250 = cljs.core.chunk_first.call(null,seq__22230_22249__$1);{
var G__22251 = cljs.core.chunk_rest.call(null,seq__22230_22249__$1);
var G__22252 = c__4408__auto___22250;
var G__22253 = cljs.core.count.call(null,c__4408__auto___22250);
var G__22254 = (0);
seq__22230_22236 = G__22251;
chunk__22231_22237 = G__22252;
count__22232_22238 = G__22253;
i__22233_22239 = G__22254;
continue;
}
} else
{var vec__22235_22255 = cljs.core.first.call(null,seq__22230_22249__$1);var k_22256 = cljs.core.nth.call(null,vec__22235_22255,(0),null);var v_22257 = cljs.core.nth.call(null,vec__22235_22255,(1),null);var m22229_22258 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22229_22258,((typeof k_22256 === 'string')?cljs.core.keyword.call(null,k_22256):k_22256),keywordize_map.call(null,v_22257)));
{
var G__22259 = cljs.core.next.call(null,seq__22230_22249__$1);
var G__22260 = null;
var G__22261 = (0);
var G__22262 = (0);
seq__22230_22236 = G__22259;
chunk__22231_22237 = G__22260;
count__22232_22238 = G__22261;
i__22233_22239 = G__22262;
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
var G__22263 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__22264 = cljs.core.next.call(null,ks);
m = G__22263;
ks = G__22264;
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
})(),(function (){var iter__4377__auto__ = (function iter__22273(s__22274){return (new cljs.core.LazySeq(null,(function (){var s__22274__$1 = s__22274;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22274__$1);if(temp__4126__auto__)
{var s__22274__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22274__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22274__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22276 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22275 = (0);while(true){
if((i__22275 < size__4376__auto__))
{var vec__22279 = cljs.core._nth.call(null,c__4375__auto__,i__22275);var k = cljs.core.nth.call(null,vec__22279,(0),null);var v = cljs.core.nth.call(null,vec__22279,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__22276,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22281 = (i__22275 + (1));
i__22275 = G__22281;
continue;
}
} else
{{
var G__22282 = (i__22275 + (1));
i__22275 = G__22282;
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
{var vec__22280 = cljs.core.first.call(null,s__22274__$2);var k = cljs.core.nth.call(null,vec__22280,(0),null);var v = cljs.core.nth.call(null,vec__22280,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22273.call(null,cljs.core.rest.call(null,s__22274__$2)));
} else
{{
var G__22283 = cljs.core.rest.call(null,s__22274__$2);
s__22274__$1 = G__22283;
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
assoc_when.cljs$lang$applyTo = (function (arglist__22284){
var m = cljs.core.first(arglist__22284);
var kvs = cljs.core.rest(arglist__22284);
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
update_in_when.cljs$lang$applyTo = (function (arglist__22285){
var m = cljs.core.first(arglist__22285);
arglist__22285 = cljs.core.next(arglist__22285);
var key_seq = cljs.core.first(arglist__22285);
arglist__22285 = cljs.core.next(arglist__22285);
var f = cljs.core.first(arglist__22285);
var args = cljs.core.rest(arglist__22285);
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
return (function iter__22290(s__22291){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__22291__$1 = s__22291;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22291__$1);if(temp__4126__auto__)
{var s__22291__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22291__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22291__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22293 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22292 = (0);while(true){
if((i__22292 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22292);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__22293,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__22294 = (i__22292 + (1));
i__22292 = G__22294;
continue;
}
} else
{{
var G__22295 = (i__22292 + (1));
i__22292 = G__22295;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22293),iter__22290.call(null,cljs.core.chunk_rest.call(null,s__22291__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22293),null);
}
} else
{var x = cljs.core.first.call(null,s__22291__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__22290.call(null,cljs.core.rest.call(null,s__22291__$2)));
} else
{{
var G__22296 = cljs.core.rest.call(null,s__22291__$2);
s__22291__$1 = G__22296;
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
interleave_all.cljs$lang$applyTo = (function (arglist__22297){
var colls = cljs.core.seq(arglist__22297);
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
var G__22298__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__22299 = conj_when.call(null,coll,x);
var G__22300 = cljs.core.first.call(null,xs);
var G__22301 = cljs.core.next.call(null,xs);
coll = G__22299;
x = G__22300;
xs = G__22301;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__22298 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22298__delegate.call(this,coll,x,xs);};
G__22298.cljs$lang$maxFixedArity = 2;
G__22298.cljs$lang$applyTo = (function (arglist__22302){
var coll = cljs.core.first(arglist__22302);
arglist__22302 = cljs.core.next(arglist__22302);
var x = cljs.core.first(arglist__22302);
var xs = cljs.core.rest(arglist__22302);
return G__22298__delegate(coll,x,xs);
});
G__22298.cljs$core$IFn$_invoke$arity$variadic = G__22298__delegate;
return G__22298;
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
var G__22304__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__22303_SHARP_){return cljs.core.apply.call(null,f,p1__22303_SHARP_,args);
}));
};
var G__22304 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22304__delegate.call(this,a,f,args);};
G__22304.cljs$lang$maxFixedArity = 2;
G__22304.cljs$lang$applyTo = (function (arglist__22305){
var a = cljs.core.first(arglist__22305);
arglist__22305 = cljs.core.next(arglist__22305);
var f = cljs.core.first(arglist__22305);
var args = cljs.core.rest(arglist__22305);
return G__22304__delegate(a,f,args);
});
G__22304.cljs$core$IFn$_invoke$arity$variadic = G__22304__delegate;
return G__22304;
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
var G__22306__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__22306 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22306__delegate.call(this,f,arg,args);};
G__22306.cljs$lang$maxFixedArity = 2;
G__22306.cljs$lang$applyTo = (function (arglist__22307){
var f = cljs.core.first(arglist__22307);
arglist__22307 = cljs.core.next(arglist__22307);
var arg = cljs.core.first(arglist__22307);
var args = cljs.core.rest(arglist__22307);
return G__22306__delegate(f,arg,args);
});
G__22306.cljs$core$IFn$_invoke$arity$variadic = G__22306__delegate;
return G__22306;
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
