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
var G__22049__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__22049 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__22049__delegate.call(this,m,k,f,x1,x2,xs);};
G__22049.cljs$lang$maxFixedArity = 5;
G__22049.cljs$lang$applyTo = (function (arglist__22050){
var m = cljs.core.first(arglist__22050);
arglist__22050 = cljs.core.next(arglist__22050);
var k = cljs.core.first(arglist__22050);
arglist__22050 = cljs.core.next(arglist__22050);
var f = cljs.core.first(arglist__22050);
arglist__22050 = cljs.core.next(arglist__22050);
var x1 = cljs.core.first(arglist__22050);
arglist__22050 = cljs.core.next(arglist__22050);
var x2 = cljs.core.first(arglist__22050);
var xs = cljs.core.rest(arglist__22050);
return G__22049__delegate(m,k,f,x1,x2,xs);
});
G__22049.cljs$core$IFn$_invoke$arity$variadic = G__22049__delegate;
return G__22049;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22059_22065 = cljs.core.seq.call(null,m);var chunk__22060_22066 = null;var count__22061_22067 = (0);var i__22062_22068 = (0);while(true){
if((i__22062_22068 < count__22061_22067))
{var vec__22063_22069 = cljs.core._nth.call(null,chunk__22060_22066,i__22062_22068);var k_22070 = cljs.core.nth.call(null,vec__22063_22069,(0),null);var v_22071 = cljs.core.nth.call(null,vec__22063_22069,(1),null);var m22058_22072 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22058_22072,k_22070,f.call(null,v_22071)));
{
var G__22073 = seq__22059_22065;
var G__22074 = chunk__22060_22066;
var G__22075 = count__22061_22067;
var G__22076 = (i__22062_22068 + (1));
seq__22059_22065 = G__22073;
chunk__22060_22066 = G__22074;
count__22061_22067 = G__22075;
i__22062_22068 = G__22076;
continue;
}
} else
{var temp__4126__auto___22077 = cljs.core.seq.call(null,seq__22059_22065);if(temp__4126__auto___22077)
{var seq__22059_22078__$1 = temp__4126__auto___22077;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22059_22078__$1))
{var c__4408__auto___22079 = cljs.core.chunk_first.call(null,seq__22059_22078__$1);{
var G__22080 = cljs.core.chunk_rest.call(null,seq__22059_22078__$1);
var G__22081 = c__4408__auto___22079;
var G__22082 = cljs.core.count.call(null,c__4408__auto___22079);
var G__22083 = (0);
seq__22059_22065 = G__22080;
chunk__22060_22066 = G__22081;
count__22061_22067 = G__22082;
i__22062_22068 = G__22083;
continue;
}
} else
{var vec__22064_22084 = cljs.core.first.call(null,seq__22059_22078__$1);var k_22085 = cljs.core.nth.call(null,vec__22064_22084,(0),null);var v_22086 = cljs.core.nth.call(null,vec__22064_22084,(1),null);var m22058_22087 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22058_22087,k_22085,f.call(null,v_22086)));
{
var G__22088 = cljs.core.next.call(null,seq__22059_22078__$1);
var G__22089 = null;
var G__22090 = (0);
var G__22091 = (0);
seq__22059_22065 = G__22088;
chunk__22060_22066 = G__22089;
count__22061_22067 = G__22090;
i__22062_22068 = G__22091;
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22100_22106 = cljs.core.seq.call(null,m);var chunk__22101_22107 = null;var count__22102_22108 = (0);var i__22103_22109 = (0);while(true){
if((i__22103_22109 < count__22102_22108))
{var vec__22104_22110 = cljs.core._nth.call(null,chunk__22101_22107,i__22103_22109);var k_22111 = cljs.core.nth.call(null,vec__22104_22110,(0),null);var v_22112 = cljs.core.nth.call(null,vec__22104_22110,(1),null);var m22099_22113 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22099_22113,f.call(null,k_22111),v_22112));
{
var G__22114 = seq__22100_22106;
var G__22115 = chunk__22101_22107;
var G__22116 = count__22102_22108;
var G__22117 = (i__22103_22109 + (1));
seq__22100_22106 = G__22114;
chunk__22101_22107 = G__22115;
count__22102_22108 = G__22116;
i__22103_22109 = G__22117;
continue;
}
} else
{var temp__4126__auto___22118 = cljs.core.seq.call(null,seq__22100_22106);if(temp__4126__auto___22118)
{var seq__22100_22119__$1 = temp__4126__auto___22118;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22100_22119__$1))
{var c__4408__auto___22120 = cljs.core.chunk_first.call(null,seq__22100_22119__$1);{
var G__22121 = cljs.core.chunk_rest.call(null,seq__22100_22119__$1);
var G__22122 = c__4408__auto___22120;
var G__22123 = cljs.core.count.call(null,c__4408__auto___22120);
var G__22124 = (0);
seq__22100_22106 = G__22121;
chunk__22101_22107 = G__22122;
count__22102_22108 = G__22123;
i__22103_22109 = G__22124;
continue;
}
} else
{var vec__22105_22125 = cljs.core.first.call(null,seq__22100_22119__$1);var k_22126 = cljs.core.nth.call(null,vec__22105_22125,(0),null);var v_22127 = cljs.core.nth.call(null,vec__22105_22125,(1),null);var m22099_22128 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22099_22128,f.call(null,k_22126),v_22127));
{
var G__22129 = cljs.core.next.call(null,seq__22100_22119__$1);
var G__22130 = null;
var G__22131 = (0);
var G__22132 = (0);
seq__22100_22106 = G__22129;
chunk__22101_22107 = G__22130;
count__22102_22108 = G__22131;
i__22103_22109 = G__22132;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22139_22143 = cljs.core.seq.call(null,ks);var chunk__22140_22144 = null;var count__22141_22145 = (0);var i__22142_22146 = (0);while(true){
if((i__22142_22146 < count__22141_22145))
{var k_22147 = cljs.core._nth.call(null,chunk__22140_22144,i__22142_22146);var m22138_22148 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22138_22148,k_22147,f.call(null,k_22147)));
{
var G__22149 = seq__22139_22143;
var G__22150 = chunk__22140_22144;
var G__22151 = count__22141_22145;
var G__22152 = (i__22142_22146 + (1));
seq__22139_22143 = G__22149;
chunk__22140_22144 = G__22150;
count__22141_22145 = G__22151;
i__22142_22146 = G__22152;
continue;
}
} else
{var temp__4126__auto___22153 = cljs.core.seq.call(null,seq__22139_22143);if(temp__4126__auto___22153)
{var seq__22139_22154__$1 = temp__4126__auto___22153;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22139_22154__$1))
{var c__4408__auto___22155 = cljs.core.chunk_first.call(null,seq__22139_22154__$1);{
var G__22156 = cljs.core.chunk_rest.call(null,seq__22139_22154__$1);
var G__22157 = c__4408__auto___22155;
var G__22158 = cljs.core.count.call(null,c__4408__auto___22155);
var G__22159 = (0);
seq__22139_22143 = G__22156;
chunk__22140_22144 = G__22157;
count__22141_22145 = G__22158;
i__22142_22146 = G__22159;
continue;
}
} else
{var k_22160 = cljs.core.first.call(null,seq__22139_22154__$1);var m22138_22161 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22138_22161,k_22160,f.call(null,k_22160)));
{
var G__22162 = cljs.core.next.call(null,seq__22139_22154__$1);
var G__22163 = null;
var G__22164 = (0);
var G__22165 = (0);
seq__22139_22143 = G__22162;
chunk__22140_22144 = G__22163;
count__22141_22145 = G__22164;
i__22142_22146 = G__22165;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22172_22176 = cljs.core.seq.call(null,vs);var chunk__22173_22177 = null;var count__22174_22178 = (0);var i__22175_22179 = (0);while(true){
if((i__22175_22179 < count__22174_22178))
{var v_22180 = cljs.core._nth.call(null,chunk__22173_22177,i__22175_22179);var m22171_22181 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22171_22181,f.call(null,v_22180),v_22180));
{
var G__22182 = seq__22172_22176;
var G__22183 = chunk__22173_22177;
var G__22184 = count__22174_22178;
var G__22185 = (i__22175_22179 + (1));
seq__22172_22176 = G__22182;
chunk__22173_22177 = G__22183;
count__22174_22178 = G__22184;
i__22175_22179 = G__22185;
continue;
}
} else
{var temp__4126__auto___22186 = cljs.core.seq.call(null,seq__22172_22176);if(temp__4126__auto___22186)
{var seq__22172_22187__$1 = temp__4126__auto___22186;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22172_22187__$1))
{var c__4408__auto___22188 = cljs.core.chunk_first.call(null,seq__22172_22187__$1);{
var G__22189 = cljs.core.chunk_rest.call(null,seq__22172_22187__$1);
var G__22190 = c__4408__auto___22188;
var G__22191 = cljs.core.count.call(null,c__4408__auto___22188);
var G__22192 = (0);
seq__22172_22176 = G__22189;
chunk__22173_22177 = G__22190;
count__22174_22178 = G__22191;
i__22175_22179 = G__22192;
continue;
}
} else
{var v_22193 = cljs.core.first.call(null,seq__22172_22187__$1);var m22171_22194 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22171_22194,f.call(null,v_22193),v_22193));
{
var G__22195 = cljs.core.next.call(null,seq__22172_22187__$1);
var G__22196 = null;
var G__22197 = (0);
var G__22198 = (0);
seq__22172_22176 = G__22195;
chunk__22173_22177 = G__22196;
count__22174_22178 = G__22197;
i__22175_22179 = G__22198;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__22199){var vec__22201 = p__22199;var k = cljs.core.nth.call(null,vec__22201,(0),null);var ks = cljs.core.nthnext.call(null,vec__22201,(1));if(cljs.core.truth_(m))
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
{var m_atom__7563__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22210_22216 = cljs.core.seq.call(null,x);var chunk__22211_22217 = null;var count__22212_22218 = (0);var i__22213_22219 = (0);while(true){
if((i__22213_22219 < count__22212_22218))
{var vec__22214_22220 = cljs.core._nth.call(null,chunk__22211_22217,i__22213_22219);var k_22221 = cljs.core.nth.call(null,vec__22214_22220,(0),null);var v_22222 = cljs.core.nth.call(null,vec__22214_22220,(1),null);var m22209_22223 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22209_22223,((typeof k_22221 === 'string')?cljs.core.keyword.call(null,k_22221):k_22221),keywordize_map.call(null,v_22222)));
{
var G__22224 = seq__22210_22216;
var G__22225 = chunk__22211_22217;
var G__22226 = count__22212_22218;
var G__22227 = (i__22213_22219 + (1));
seq__22210_22216 = G__22224;
chunk__22211_22217 = G__22225;
count__22212_22218 = G__22226;
i__22213_22219 = G__22227;
continue;
}
} else
{var temp__4126__auto___22228 = cljs.core.seq.call(null,seq__22210_22216);if(temp__4126__auto___22228)
{var seq__22210_22229__$1 = temp__4126__auto___22228;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22210_22229__$1))
{var c__4408__auto___22230 = cljs.core.chunk_first.call(null,seq__22210_22229__$1);{
var G__22231 = cljs.core.chunk_rest.call(null,seq__22210_22229__$1);
var G__22232 = c__4408__auto___22230;
var G__22233 = cljs.core.count.call(null,c__4408__auto___22230);
var G__22234 = (0);
seq__22210_22216 = G__22231;
chunk__22211_22217 = G__22232;
count__22212_22218 = G__22233;
i__22213_22219 = G__22234;
continue;
}
} else
{var vec__22215_22235 = cljs.core.first.call(null,seq__22210_22229__$1);var k_22236 = cljs.core.nth.call(null,vec__22215_22235,(0),null);var v_22237 = cljs.core.nth.call(null,vec__22215_22235,(1),null);var m22209_22238 = cljs.core.deref.call(null,m_atom__7563__auto__);cljs.core.reset_BANG_.call(null,m_atom__7563__auto__,cljs.core.assoc_BANG_.call(null,m22209_22238,((typeof k_22236 === 'string')?cljs.core.keyword.call(null,k_22236):k_22236),keywordize_map.call(null,v_22237)));
{
var G__22239 = cljs.core.next.call(null,seq__22210_22229__$1);
var G__22240 = null;
var G__22241 = (0);
var G__22242 = (0);
seq__22210_22216 = G__22239;
chunk__22211_22217 = G__22240;
count__22212_22218 = G__22241;
i__22213_22219 = G__22242;
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
var G__22243 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__22244 = cljs.core.next.call(null,ks);
m = G__22243;
ks = G__22244;
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
})(),(function (){var iter__4377__auto__ = (function iter__22253(s__22254){return (new cljs.core.LazySeq(null,(function (){var s__22254__$1 = s__22254;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22254__$1);if(temp__4126__auto__)
{var s__22254__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22254__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22254__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22256 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22255 = (0);while(true){
if((i__22255 < size__4376__auto__))
{var vec__22259 = cljs.core._nth.call(null,c__4375__auto__,i__22255);var k = cljs.core.nth.call(null,vec__22259,(0),null);var v = cljs.core.nth.call(null,vec__22259,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__22256,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22261 = (i__22255 + (1));
i__22255 = G__22261;
continue;
}
} else
{{
var G__22262 = (i__22255 + (1));
i__22255 = G__22262;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22256),iter__22253.call(null,cljs.core.chunk_rest.call(null,s__22254__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22256),null);
}
} else
{var vec__22260 = cljs.core.first.call(null,s__22254__$2);var k = cljs.core.nth.call(null,vec__22260,(0),null);var v = cljs.core.nth.call(null,vec__22260,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22253.call(null,cljs.core.rest.call(null,s__22254__$2)));
} else
{{
var G__22263 = cljs.core.rest.call(null,s__22254__$2);
s__22254__$1 = G__22263;
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
assoc_when.cljs$lang$applyTo = (function (arglist__22264){
var m = cljs.core.first(arglist__22264);
var kvs = cljs.core.rest(arglist__22264);
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
update_in_when.cljs$lang$applyTo = (function (arglist__22265){
var m = cljs.core.first(arglist__22265);
arglist__22265 = cljs.core.next(arglist__22265);
var key_seq = cljs.core.first(arglist__22265);
arglist__22265 = cljs.core.next(arglist__22265);
var f = cljs.core.first(arglist__22265);
var args = cljs.core.rest(arglist__22265);
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
return (function iter__22270(s__22271){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__22271__$1 = s__22271;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22271__$1);if(temp__4126__auto__)
{var s__22271__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22271__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22271__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22273 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22272 = (0);while(true){
if((i__22272 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__22272);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__22273,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__22274 = (i__22272 + (1));
i__22272 = G__22274;
continue;
}
} else
{{
var G__22275 = (i__22272 + (1));
i__22272 = G__22275;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22273),iter__22270.call(null,cljs.core.chunk_rest.call(null,s__22271__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22273),null);
}
} else
{var x = cljs.core.first.call(null,s__22271__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__22270.call(null,cljs.core.rest.call(null,s__22271__$2)));
} else
{{
var G__22276 = cljs.core.rest.call(null,s__22271__$2);
s__22271__$1 = G__22276;
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
interleave_all.cljs$lang$applyTo = (function (arglist__22277){
var colls = cljs.core.seq(arglist__22277);
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
var G__22278__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__22279 = conj_when.call(null,coll,x);
var G__22280 = cljs.core.first.call(null,xs);
var G__22281 = cljs.core.next.call(null,xs);
coll = G__22279;
x = G__22280;
xs = G__22281;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__22278 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22278__delegate.call(this,coll,x,xs);};
G__22278.cljs$lang$maxFixedArity = 2;
G__22278.cljs$lang$applyTo = (function (arglist__22282){
var coll = cljs.core.first(arglist__22282);
arglist__22282 = cljs.core.next(arglist__22282);
var x = cljs.core.first(arglist__22282);
var xs = cljs.core.rest(arglist__22282);
return G__22278__delegate(coll,x,xs);
});
G__22278.cljs$core$IFn$_invoke$arity$variadic = G__22278__delegate;
return G__22278;
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
var G__22284__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__22283_SHARP_){return cljs.core.apply.call(null,f,p1__22283_SHARP_,args);
}));
};
var G__22284 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22284__delegate.call(this,a,f,args);};
G__22284.cljs$lang$maxFixedArity = 2;
G__22284.cljs$lang$applyTo = (function (arglist__22285){
var a = cljs.core.first(arglist__22285);
arglist__22285 = cljs.core.next(arglist__22285);
var f = cljs.core.first(arglist__22285);
var args = cljs.core.rest(arglist__22285);
return G__22284__delegate(a,f,args);
});
G__22284.cljs$core$IFn$_invoke$arity$variadic = G__22284__delegate;
return G__22284;
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
var G__22286__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__22286 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22286__delegate.call(this,f,arg,args);};
G__22286.cljs$lang$maxFixedArity = 2;
G__22286.cljs$lang$applyTo = (function (arglist__22287){
var f = cljs.core.first(arglist__22287);
arglist__22287 = cljs.core.next(arglist__22287);
var arg = cljs.core.first(arglist__22287);
var args = cljs.core.rest(arglist__22287);
return G__22286__delegate(f,arg,args);
});
G__22286.cljs$core$IFn$_invoke$arity$variadic = G__22286__delegate;
return G__22286;
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
