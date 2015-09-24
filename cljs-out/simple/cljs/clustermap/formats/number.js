// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.number');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* a nil-safe /
* @param {...*} var_args
*/
clustermap.formats.number.div_BANG_ = (function() { 
var div_BANG___delegate = function (num,args){if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.nil_QMARK_,args)))
{return null;
} else
{return cljs.core.apply.call(null,cljs.core._SLASH_,num,args);
}
};
var div_BANG_ = function (num,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return div_BANG___delegate.call(this,num,args);};
div_BANG_.cljs$lang$maxFixedArity = 1;
div_BANG_.cljs$lang$applyTo = (function (arglist__20439){
var num = cljs.core.first(arglist__20439);
var args = cljs.core.rest(arglist__20439);
return div_BANG___delegate(num,args);
});
div_BANG_.cljs$core$IFn$_invoke$arity$variadic = div_BANG___delegate;
return div_BANG_;
})()
;
/**
* @param {...*} var_args
*/
clustermap.formats.number._STAR__BANG_ = (function() { 
var _STAR__BANG___delegate = function (args){if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.nil_QMARK_,args)))
{return null;
} else
{return cljs.core.apply.call(null,cljs.core._STAR_,args);
}
};
var _STAR__BANG_ = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return _STAR__BANG___delegate.call(this,args);};
_STAR__BANG_.cljs$lang$maxFixedArity = 0;
_STAR__BANG_.cljs$lang$applyTo = (function (arglist__20440){
var args = cljs.core.seq(arglist__20440);
return _STAR__BANG___delegate(args);
});
_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic = _STAR__BANG___delegate;
return _STAR__BANG_;
})()
;
/**
* @param {...*} var_args
*/
clustermap.formats.number._PLUS__BANG_ = (function() { 
var _PLUS__BANG___delegate = function (args){if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.nil_QMARK_,args)))
{return null;
} else
{return cljs.core.apply.call(null,cljs.core._PLUS_,args);
}
};
var _PLUS__BANG_ = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return _PLUS__BANG___delegate.call(this,args);};
_PLUS__BANG_.cljs$lang$maxFixedArity = 0;
_PLUS__BANG_.cljs$lang$applyTo = (function (arglist__20441){
var args = cljs.core.seq(arglist__20441);
return _PLUS__BANG___delegate(args);
});
_PLUS__BANG_.cljs$core$IFn$_invoke$arity$variadic = _PLUS__BANG___delegate;
return _PLUS__BANG_;
})()
;
/**
* @param {...*} var_args
*/
clustermap.formats.number.__BANG_ = (function() { 
var __BANG___delegate = function (num,args){if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.nil_QMARK_,args)))
{return null;
} else
{return cljs.core.apply.call(null,cljs.core._,num,args);
}
};
var __BANG_ = function (num,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __BANG___delegate.call(this,num,args);};
__BANG_.cljs$lang$maxFixedArity = 1;
__BANG_.cljs$lang$applyTo = (function (arglist__20442){
var num = cljs.core.first(arglist__20442);
var args = cljs.core.rest(arglist__20442);
return __BANG___delegate(num,args);
});
__BANG_.cljs$core$IFn$_invoke$arity$variadic = __BANG___delegate;
return __BANG_;
})()
;
clustermap.formats.number.actually_really_number_QMARK_ = (function actually_really_number_QMARK_(n){return (typeof n === 'number') && (cljs.core.not.call(null,isNaN(n))) && ((n < Number.POSITIVE_INFINITY)) && ((n > Number.NEGATIVE_INFINITY));
});
clustermap.formats.number.round_decimal = (function round_decimal(n,dec_places){if(cljs.core.truth_(dec_places))
{return (Math.round((n * Math.pow((10),dec_places))) / Math.pow((10),dec_places));
} else
{return n;
}
});
/**
* return a % representing the size of a +ve number compared to the scale max
* - logmax : a power of 10
* - n : any number
* returns an integer in the range 0-100
*/
clustermap.formats.number.log_percent_scale = (function log_percent_scale(logmax,n){if(cljs.core.truth_((function (){var and__3627__auto__ = n;if(cljs.core.truth_(and__3627__auto__))
{return (n > (0));
} else
{return and__3627__auto__;
}
})()))
{var n__$1 = (function (){var x__3946__auto__ = n;var y__3947__auto__ = (0);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})();var l = (Math.log(n__$1) / Math.log((10)));var l__$1 = (function (){var x__3953__auto__ = l;var y__3954__auto__ = logmax;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return Math.round(((100) * (l__$1 / logmax)));
} else
{return (0);
}
});
/**
* return a % representing the size of a number
* - table a seq of values representing ticks on the scale
* - n : any number
*/
clustermap.formats.number.table_percent_scale = (function table_percent_scale(table,n){var cnt = cljs.core.count.call(null,table);var i_table = cljs.core.keep_indexed.call(null,cljs.core.vector,table);var i = (function (){var or__3639__auto__ = cljs.core.some.call(null,((function (cnt,i_table){
return (function (p__20449){var vec__20450 = p__20449;var i = cljs.core.nth.call(null,vec__20450,(0),null);var v = cljs.core.nth.call(null,vec__20450,(1),null);if((n <= v))
{return i;
} else
{return null;
}
});})(cnt,i_table))
,i_table);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cnt;
}
})();return Math.round(((100) * (i / cnt)));
});
/**
* returns a function which chooses a value for it's argument based on a table and sample values
* - table of proportions 0 < p < 1 which will be used to choose output thresholds
* - vals : sample values which will be sorted and representative threshold values chosen according to table
* returns a number 0 <= (count table)
*/
clustermap.formats.number.table_chooser_fn = (function() {
var table_chooser_fn = null;
var table_chooser_fn__2 = (function (table,vals){return table_chooser_fn.call(null,table,vals,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null));
});
var table_chooser_fn__3 = (function (table,vals,p__20451){var map__20457 = p__20451;var map__20457__$1 = ((cljs.core.seq_QMARK_.call(null,map__20457))?cljs.core.apply.call(null,cljs.core.hash_map,map__20457):map__20457);var default$ = cljs.core.get.call(null,map__20457__$1,new cljs.core.Keyword(null,"default","default",-1987822328));var vals__$1 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.sort.call(null,vals));var c = cljs.core.count.call(null,vals__$1);var idxs = cljs.core.map.call(null,((function (vals__$1,c,map__20457,map__20457__$1,default$){
return (function (tv){return ((tv * c) | (0));
});})(vals__$1,c,map__20457,map__20457__$1,default$))
,cljs.core.sort.call(null,table));var ts = cljs.core.map.call(null,((function (vals__$1,c,idxs,map__20457,map__20457__$1,default$){
return (function (idx){return cljs.core.get.call(null,vals__$1,idx);
});})(vals__$1,c,idxs,map__20457,map__20457__$1,default$))
,idxs);var i_ts = cljs.core.keep_indexed.call(null,cljs.core.vector,ts);return ((function (vals__$1,c,idxs,ts,i_ts,map__20457,map__20457__$1,default$){
return (function (val){if(cljs.core.truth_(val))
{var or__3639__auto__ = cljs.core.some.call(null,((function (vals__$1,c,idxs,ts,i_ts,map__20457,map__20457__$1,default$){
return (function (p__20460){var vec__20461 = p__20460;var i = cljs.core.nth.call(null,vec__20461,(0),null);var t = cljs.core.nth.call(null,vec__20461,(1),null);if((val < t))
{return i;
} else
{return null;
}
});})(vals__$1,c,idxs,ts,i_ts,map__20457,map__20457__$1,default$))
,i_ts);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.count.call(null,table);
}
} else
{return default$;
}
});
;})(vals__$1,c,idxs,ts,i_ts,map__20457,map__20457__$1,default$))
});
table_chooser_fn = function(table,vals,p__20451){
switch(arguments.length){
case 2:
return table_chooser_fn__2.call(this,table,vals);
case 3:
return table_chooser_fn__3.call(this,table,vals,p__20451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
table_chooser_fn.cljs$core$IFn$_invoke$arity$2 = table_chooser_fn__2;
table_chooser_fn.cljs$core$IFn$_invoke$arity$3 = table_chooser_fn__3;
return table_chooser_fn;
})()
;
clustermap.formats.number.prefix_sign = (function prefix_sign(n_str,n,plus_QMARK_){if((n < (0)))
{return ("-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_str));
} else
{if(cljs.core.truth_((function (){var and__3627__auto__ = plus_QMARK_;if(cljs.core.truth_(and__3627__auto__))
{return (n > (0));
} else
{return and__3627__auto__;
}
})()))
{return ("+"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_str));
} else
{return n_str;

}
}
});
clustermap.formats.number.split_thousands = (function split_thousands(n_str){return clojure.string.join.call(null,",",cljs.core.map.call(null,(function (p1__20462_SHARP_){return cljs.core.apply.call(null,cljs.core.str,p1__20462_SHARP_);
}),cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.reverse,cljs.core.partition.call(null,(3),(3),cljs.core.PersistentVector.EMPTY,cljs.core.reverse.call(null,n_str))))));
});
/**
* splits a number into a [coefficient, exponent] pair, where
* exponent is a multiple of 3
* :sf : # of significant figures
* @param {...*} var_args
*/
clustermap.formats.number.eng_notation = (function() { 
var eng_notation__delegate = function (n,p__20463){var map__20468 = p__20463;var map__20468__$1 = ((cljs.core.seq_QMARK_.call(null,map__20468))?cljs.core.apply.call(null,cljs.core.hash_map,map__20468):map__20468);var sf = cljs.core.get.call(null,map__20468__$1,new cljs.core.Keyword(null,"sf","sf",-1949491738));if(cljs.core.truth_(n))
{var sign = (((n > (0)))?(1):((cljs.core._EQ_.call(null,n,(0)))?(0):(((n < (0)))?(-1):null)));var abs_n = Math.abs(n);var vec__20469 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(abs_n)).split(".");var i = cljs.core.nth.call(null,vec__20469,(0),null);var d = cljs.core.nth.call(null,vec__20469,(1),null);var exp = (((abs_n >= (1)))?((3) * (((cljs.core.count.call(null,i) - (1)) / (3)) | (0))):(((abs_n > (0)))?((-3) * ((((3) + cljs.core.count.call(null,cljs.core.take_while.call(null,((function (sign,abs_n,vec__20469,i,d,map__20468,map__20468__$1,sf){
return (function (c){return cljs.core._EQ_.call(null,c,"0");
});})(sign,abs_n,vec__20469,i,d,map__20468,map__20468__$1,sf))
,d))) / (3)) | (0))):(0)
));var usig = (abs_n * Math.pow((10),((-1) * exp)));var vec__20470 = (cljs.core.truth_(sf)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(usig)).split("."):null);var usig_i = cljs.core.nth.call(null,vec__20470,(0),null);var usig_d = cljs.core.nth.call(null,vec__20470,(1),null);var sigmult = (cljs.core.truth_((function (){var and__3627__auto__ = sf;if(cljs.core.truth_(and__3627__auto__))
{return (usig > (0));
} else
{return and__3627__auto__;
}
})())?Math.pow((10),(cljs.core.count.call(null,usig_i) - sf)):null);var round_usig_str = (cljs.core.truth_(sigmult)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((sigmult * Math.round((usig / sigmult))))):null);var vec__20471 = (cljs.core.truth_(round_usig_str)?round_usig_str.split("."):null);var round_usig_i = cljs.core.nth.call(null,vec__20471,(0),null);var round_usig_d = cljs.core.nth.call(null,vec__20471,(1),null);var trunc_usig_str = (cljs.core.truth_(round_usig_str)?cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,sf,round_usig_i),cljs.core.repeat.call(null,(cljs.core.count.call(null,round_usig_i) - sf),"0"),(((cljs.core.count.call(null,round_usig_d) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".",cljs.core.take.call(null,(sf - cljs.core.count.call(null,round_usig_i)),round_usig_d)], null):null)], null))))):null);var trunc_usig = (cljs.core.truth_(trunc_usig_str)?parseFloat(trunc_usig_str):null);var sig = (sign * (function (){var or__3639__auto__ = trunc_usig;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return usig;
}
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,exp], null);
} else
{return null;
}
};
var eng_notation = function (n,var_args){
var p__20463 = null;if (arguments.length > 1) {
  p__20463 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return eng_notation__delegate.call(this,n,p__20463);};
eng_notation.cljs$lang$maxFixedArity = 1;
eng_notation.cljs$lang$applyTo = (function (arglist__20472){
var n = cljs.core.first(arglist__20472);
var p__20463 = cljs.core.rest(arglist__20472);
return eng_notation__delegate(n,p__20463);
});
eng_notation.cljs$core$IFn$_invoke$arity$variadic = eng_notation__delegate;
return eng_notation;
})()
;
/**
* format a human readable number, with commas between groups of thousands
* :dec - number of decimal places
* :plus? - include a leading + for positive numbers
* :curr - optional currency symbol
* :default - default result when (nil? n)
*/
clustermap.formats.number.readable = (function() {
var readable = null;
var readable__1 = (function (n){return readable.call(null,n,null);
});
var readable__2 = (function (n,p__20473){var map__20476 = p__20473;var map__20476__$1 = ((cljs.core.seq_QMARK_.call(null,map__20476))?cljs.core.apply.call(null,cljs.core.hash_map,map__20476):map__20476);var default$ = cljs.core.get.call(null,map__20476__$1,new cljs.core.Keyword(null,"default","default",-1987822328),"");var curr = cljs.core.get.call(null,map__20476__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808),"");var plus_QMARK_ = cljs.core.get.call(null,map__20476__$1,new cljs.core.Keyword(null,"plus?","plus?",-3051327),false);var dec = cljs.core.get.call(null,map__20476__$1,new cljs.core.Keyword(null,"dec","dec",1888433436),(0));if(clustermap.formats.number.actually_really_number_QMARK_.call(null,n))
{var abs_n = Math.abs(n);var round_n = clustermap.formats.number.round_decimal.call(null,abs_n,dec);var round_n_str = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(round_n));var vec__20477 = clojure.string.split.call(null,round_n_str,/\./);var i_str = cljs.core.nth.call(null,vec__20477,(0),null);var d_str = cljs.core.nth.call(null,vec__20477,(1),null);var t_str = clustermap.formats.number.split_thousands.call(null,i_str);var t_dec_str = clojure.string.join.call(null,".",cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_str,d_str], null)));return cljs.core.apply.call(null,cljs.core.str,cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__3627__auto__ = plus_QMARK_;if(cljs.core.truth_(and__3627__auto__))
{return (n > (0));
} else
{return and__3627__auto__;
}
})())?"+":(((n < (0)))?"-":null)),curr,t_dec_str], null)));
} else
{return default$;
}
});
readable = function(n,p__20473){
switch(arguments.length){
case 1:
return readable__1.call(this,n);
case 2:
return readable__2.call(this,n,p__20473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
readable.cljs$core$IFn$_invoke$arity$1 = readable__1;
readable.cljs$core$IFn$_invoke$arity$2 = readable__2;
return readable;
})()
;
clustermap.formats.number.fnum = clustermap.formats.number.readable;
clustermap.formats.number.eng_suffixes = new cljs.core.PersistentArrayMap(null, 5, [(0),"",(3),"k",(6),"m",(9),"bn",(12),"tn"], null);
/**
* take an exponent and return a suffix
*/
clustermap.formats.number.eng_suffix = (function eng_suffix(exp){var or__3639__auto__ = clustermap.formats.number.eng_suffixes.call(null,exp);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return ("x10^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp));
}
});
clustermap.formats.number.eng_readable = (function() {
var eng_readable = null;
var eng_readable__1 = (function (n){return eng_readable.call(null,n,null);
});
var eng_readable__2 = (function (n,p__20478){var map__20481 = p__20478;var map__20481__$1 = ((cljs.core.seq_QMARK_.call(null,map__20481))?cljs.core.apply.call(null,cljs.core.hash_map,map__20481):map__20481);var sf = cljs.core.get.call(null,map__20481__$1,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3));var curr = cljs.core.get.call(null,map__20481__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808),"");var plus_QMARK_ = cljs.core.get.call(null,map__20481__$1,new cljs.core.Keyword(null,"plus?","plus?",-3051327),false);var default$ = cljs.core.get.call(null,map__20481__$1,new cljs.core.Keyword(null,"default","default",-1987822328),"");if(clustermap.formats.number.actually_really_number_QMARK_.call(null,n))
{var vec__20482 = clustermap.formats.number.eng_notation.call(null,n,new cljs.core.Keyword(null,"sf","sf",-1949491738),sf);var sig = cljs.core.nth.call(null,vec__20482,(0),null);var exp = cljs.core.nth.call(null,vec__20482,(1),null);var abs_sig = Math.abs(sig);var suffix = clustermap.formats.number.eng_suffix.call(null,exp);return cljs.core.apply.call(null,cljs.core.str,cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__3627__auto__ = plus_QMARK_;if(cljs.core.truth_(and__3627__auto__))
{return (sig > (0));
} else
{return and__3627__auto__;
}
})())?"+":(((sig < (0)))?"-":null)),curr,abs_sig,suffix], null)));
} else
{return default$;
}
});
eng_readable = function(n,p__20478){
switch(arguments.length){
case 1:
return eng_readable__1.call(this,n);
case 2:
return eng_readable__2.call(this,n,p__20478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
eng_readable.cljs$core$IFn$_invoke$arity$1 = eng_readable__1;
eng_readable.cljs$core$IFn$_invoke$arity$2 = eng_readable__2;
return eng_readable;
})()
;
/**
* format a number with mixed format, showing decimal places below threshold and eng notation after
* :default - default result when (nil? n) or NaN
* 
* :plus? - use a plus prefix for +ve amounts
* :curr - optional currency symbol
* 
* :dec - number of decimal places (below threshold)
* :threshold - default 1000000
* 
* :sf - number of significant figures (above threshold)
*/
clustermap.formats.number.mixed = (function() {
var mixed = null;
var mixed__1 = (function (n){return mixed.call(null,n,null);
});
var mixed__2 = (function (n,p__20483){var map__20485 = p__20483;var map__20485__$1 = ((cljs.core.seq_QMARK_.call(null,map__20485))?cljs.core.apply.call(null,cljs.core.hash_map,map__20485):map__20485);var opts = map__20485__$1;var sf = cljs.core.get.call(null,map__20485__$1,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3));var threshold = cljs.core.get.call(null,map__20485__$1,new cljs.core.Keyword(null,"threshold","threshold",204221583),(1000000));var dec = cljs.core.get.call(null,map__20485__$1,new cljs.core.Keyword(null,"dec","dec",1888433436),(0));var curr = cljs.core.get.call(null,map__20485__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808),"");var plus_QMARK_ = cljs.core.get.call(null,map__20485__$1,new cljs.core.Keyword(null,"plus?","plus?",-3051327),false);var default$ = cljs.core.get.call(null,map__20485__$1,new cljs.core.Keyword(null,"default","default",-1987822328),"");if(clustermap.formats.number.actually_really_number_QMARK_.call(null,n))
{if((Math.abs(n) < threshold))
{return clustermap.formats.number.readable.call(null,n,opts);
} else
{return clustermap.formats.number.eng_readable.call(null,n,opts);
}
} else
{return default$;
}
});
mixed = function(n,p__20483){
switch(arguments.length){
case 1:
return mixed__1.call(this,n);
case 2:
return mixed__2.call(this,n,p__20483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mixed.cljs$core$IFn$_invoke$arity$1 = mixed__1;
mixed.cljs$core$IFn$_invoke$arity$2 = mixed__2;
return mixed;
})()
;
clustermap.formats.number.compact = (function() {
var compact = null;
var compact__1 = (function (n){return compact.call(null,n,null);
});
var compact__2 = (function (n,opts){return clustermap.formats.number.mixed.call(null,n,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"threshold","threshold",204221583),(100)], null),opts));
});
compact = function(n,opts){
switch(arguments.length){
case 1:
return compact__1.call(this,n);
case 2:
return compact__2.call(this,n,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compact.cljs$core$IFn$_invoke$arity$1 = compact__1;
compact.cljs$core$IFn$_invoke$arity$2 = compact__2;
return compact;
})()
;
