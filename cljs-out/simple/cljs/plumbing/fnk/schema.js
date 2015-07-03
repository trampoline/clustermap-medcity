// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__21757 = p1__6064__6065__auto__;if(G__21757)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__21757.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__21757.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21757);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21757);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21758_SHARP_){return (cljs.core.val.call(null,p1__21758_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__21760 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__21760,(0),null);var v = cljs.core.nth.call(null,vec__21760,(1),null);var p = vec__21760;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___21766 = schema.utils.use_fn_validation;var output_schema21761_21767 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema21762_21768 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker21763_21769 = schema.core.checker.call(null,input_schema21762_21768);var output_checker21764_21770 = schema.core.checker.call(null,output_schema21761_21767);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21766,output_schema21761_21767,input_schema21762_21768,input_checker21763_21769,output_checker21764_21770){
return (function unwrap_schema_form_key(G__21765){var validate__6034__auto__ = ufv___21766.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21771 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21765], null);var temp__4126__auto___21772 = input_checker21763_21769.call(null,args__6035__auto___21771);if(cljs.core.truth_(temp__4126__auto___21772))
{var error__6036__auto___21773 = temp__4126__auto___21772;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21773)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21773,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21771,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21762_21768,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__21765;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21774 = output_checker21764_21770.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21774))
{var error__6036__auto___21775 = temp__4126__auto___21774;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21775)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21775,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21761_21767,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21766,output_schema21761_21767,input_schema21762_21768,input_checker21763_21769,output_checker21764_21770))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema21761_21767,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21762_21768], null)));
var ufv___21781 = schema.utils.use_fn_validation;var output_schema21776_21782 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema21777_21783 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21778_21784 = schema.core.checker.call(null,input_schema21777_21783);var output_checker21779_21785 = schema.core.checker.call(null,output_schema21776_21782);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21781,output_schema21776_21782,input_schema21777_21783,input_checker21778_21784,output_checker21779_21785){
return (function explicit_schema_key_map(G__21780){var validate__6034__auto__ = ufv___21781.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21780], null);var temp__4126__auto___21787 = input_checker21778_21784.call(null,args__6035__auto___21786);if(cljs.core.truth_(temp__4126__auto___21787))
{var error__6036__auto___21788 = temp__4126__auto___21787;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21788)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21788,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21786,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21777_21783,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21780;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21789 = output_checker21779_21785.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21789))
{var error__6036__auto___21790 = temp__4126__auto___21789;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21790)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21790,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21776_21782,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21781,output_schema21776_21782,input_schema21777_21783,input_checker21778_21784,output_checker21779_21785))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema21776_21782,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21777_21783], null)));
var ufv___21796 = schema.utils.use_fn_validation;var output_schema21791_21797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema21792_21798 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21793_21799 = schema.core.checker.call(null,input_schema21792_21798);var output_checker21794_21800 = schema.core.checker.call(null,output_schema21791_21797);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21796,output_schema21791_21797,input_schema21792_21798,input_checker21793_21799,output_checker21794_21800){
return (function split_schema_keys(G__21795){var validate__6034__auto__ = ufv___21796.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21801 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21795], null);var temp__4126__auto___21802 = input_checker21793_21799.call(null,args__6035__auto___21801);if(cljs.core.truth_(temp__4126__auto___21802))
{var error__6036__auto___21803 = temp__4126__auto___21802;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21803)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21803,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21801,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21792_21798,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21795;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21804 = output_checker21794_21800.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21804))
{var error__6036__auto___21805 = temp__4126__auto___21804;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21805)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21805,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21791_21797,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21796,output_schema21791_21797,input_schema21792_21798,input_checker21793_21799,output_checker21794_21800))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema21791_21797,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21792_21798], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__21809){var vec__21810 = p__21809;var k = cljs.core.nth.call(null,vec__21810,(0),null);var v = cljs.core.nth.call(null,vec__21810,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__21811 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__21811,(0),null);var ov = cljs.core.nth.call(null,vec__21811,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__21812){
var key_project = cljs.core.first(arglist__21812);
arglist__21812 = cljs.core.next(arglist__21812);
var key_combine = cljs.core.first(arglist__21812);
arglist__21812 = cljs.core.next(arglist__21812);
var val_combine = cljs.core.first(arglist__21812);
var maps = cljs.core.rest(arglist__21812);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21820 = schema.utils.use_fn_validation;var output_schema21814_21821 = plumbing.fnk.schema.InputSchema;var input_schema21815_21822 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker21816_21823 = schema.core.checker.call(null,input_schema21815_21822);var output_checker21817_21824 = schema.core.checker.call(null,output_schema21814_21821);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21820,output_schema21814_21821,input_schema21815_21822,input_checker21816_21823,output_checker21817_21824){
return (function union_input_schemata(G__21818,G__21819){var validate__6034__auto__ = ufv___21820.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21825 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21818,G__21819], null);var temp__4126__auto___21826 = input_checker21816_21823.call(null,args__6035__auto___21825);if(cljs.core.truth_(temp__4126__auto___21826))
{var error__6036__auto___21827 = temp__4126__auto___21826;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21827)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21827,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21825,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21815_21822,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__21818;var i2 = G__21819;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___21820,output_schema21814_21821,input_schema21815_21822,input_checker21816_21823,output_checker21817_21824){
return (function (p1__21813_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__21813_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__21813_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___21820,output_schema21814_21821,input_schema21815_21822,input_checker21816_21823,output_checker21817_21824))
,((function (validate__6034__auto__,ufv___21820,output_schema21814_21821,input_schema21815_21822,input_checker21816_21823,output_checker21817_21824){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__6034__auto__,ufv___21820,output_schema21814_21821,input_schema21815_21822,input_checker21816_21823,output_checker21817_21824))
,((function (validate__6034__auto__,ufv___21820,output_schema21814_21821,input_schema21815_21822,input_checker21816_21823,output_checker21817_21824){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___21820,output_schema21814_21821,input_schema21815_21822,input_checker21816_21823,output_checker21817_21824))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21828 = output_checker21817_21824.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21828))
{var error__6036__auto___21829 = temp__4126__auto___21828;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21829)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21829,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21814_21821,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21820,output_schema21814_21821,input_schema21815_21822,input_checker21816_21823,output_checker21817_21824))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema21814_21821,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21815_21822], null)));
var ufv___21835 = schema.utils.use_fn_validation;var output_schema21830_21836 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema21831_21837 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker21832_21838 = schema.core.checker.call(null,input_schema21831_21837);var output_checker21833_21839 = schema.core.checker.call(null,output_schema21830_21836);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21835,output_schema21830_21836,input_schema21831_21837,input_checker21832_21838,output_checker21833_21839){
return (function required_toplevel_keys(G__21834){var validate__6034__auto__ = ufv___21835.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21840 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21834], null);var temp__4126__auto___21841 = input_checker21832_21838.call(null,args__6035__auto___21840);if(cljs.core.truth_(temp__4126__auto___21841))
{var error__6036__auto___21842 = temp__4126__auto___21841;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21842)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21842,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21840,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21831_21837,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__21834;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___21835,output_schema21830_21836,input_schema21831_21837,input_checker21832_21838,output_checker21833_21839){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___21835,output_schema21830_21836,input_schema21831_21837,input_checker21832_21838,output_checker21833_21839))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21843 = output_checker21833_21839.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21843))
{var error__6036__auto___21844 = temp__4126__auto___21843;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21844)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21844,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21830_21836,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21835,output_schema21830_21836,input_schema21831_21837,input_checker21832_21838,output_checker21833_21839))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema21830_21836,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21831_21837], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21853(s__21854){return (new cljs.core.LazySeq(null,(function (){var s__21854__$1 = s__21854;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21854__$1);if(temp__4126__auto__)
{var s__21854__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21854__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21854__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21856 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21855 = (0);while(true){
if((i__21855 < size__4376__auto__))
{var vec__21859 = cljs.core._nth.call(null,c__4375__auto__,i__21855);var k = cljs.core.nth.call(null,vec__21859,(0),null);var v = cljs.core.nth.call(null,vec__21859,(1),null);cljs.core.chunk_append.call(null,b__21856,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__21861 = (i__21855 + (1));
i__21855 = G__21861;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21856),iter__21853.call(null,cljs.core.chunk_rest.call(null,s__21854__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21856),null);
}
} else
{var vec__21860 = cljs.core.first.call(null,s__21854__$2);var k = cljs.core.nth.call(null,vec__21860,(0),null);var v = cljs.core.nth.call(null,vec__21860,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__21853.call(null,cljs.core.rest.call(null,s__21854__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21870(s__21871){return (new cljs.core.LazySeq(null,(function (){var s__21871__$1 = s__21871;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21871__$1);if(temp__4126__auto__)
{var s__21871__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21871__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21871__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21873 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21872 = (0);while(true){
if((i__21872 < size__4376__auto__))
{var vec__21876 = cljs.core._nth.call(null,c__4375__auto__,i__21872);var k = cljs.core.nth.call(null,vec__21876,(0),null);var v = cljs.core.nth.call(null,vec__21876,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__21873,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__21878 = (i__21872 + (1));
i__21872 = G__21878;
continue;
}
} else
{{
var G__21879 = (i__21872 + (1));
i__21872 = G__21879;
continue;
}
}
} else
{{
var G__21880 = (i__21872 + (1));
i__21872 = G__21880;
continue;
}
}
} else
{{
var G__21881 = (i__21872 + (1));
i__21872 = G__21881;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21873),iter__21870.call(null,cljs.core.chunk_rest.call(null,s__21871__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21873),null);
}
} else
{var vec__21877 = cljs.core.first.call(null,s__21871__$2);var k = cljs.core.nth.call(null,vec__21877,(0),null);var v = cljs.core.nth.call(null,vec__21877,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21870.call(null,cljs.core.rest.call(null,s__21871__$2)));
} else
{{
var G__21882 = cljs.core.rest.call(null,s__21871__$2);
s__21871__$1 = G__21882;
continue;
}
}
} else
{{
var G__21883 = cljs.core.rest.call(null,s__21871__$2);
s__21871__$1 = G__21883;
continue;
}
}
} else
{{
var G__21884 = cljs.core.rest.call(null,s__21871__$2);
s__21871__$1 = G__21884;
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
});return iter__4377__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___21907 = schema.utils.use_fn_validation;var output_schema21885_21908 = schema.core.Any;var input_schema21886_21909 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21887_21910 = schema.core.checker.call(null,input_schema21886_21909);var output_checker21888_21911 = schema.core.checker.call(null,output_schema21885_21908);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21907,output_schema21885_21908,input_schema21886_21909,input_checker21887_21910,output_checker21888_21911){
return (function compose_schemata(G__21889,G__21890){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___21912 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21889,G__21890], null);var temp__4126__auto___21913 = input_checker21887_21910.call(null,args__6035__auto___21912);if(cljs.core.truth_(temp__4126__auto___21913))
{var error__6036__auto___21914 = temp__4126__auto___21913;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21914)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21914,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21912,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21886_21909,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21901 = G__21889;var vec__21903 = G__21901;var i2 = cljs.core.nth.call(null,vec__21903,(0),null);var o2 = cljs.core.nth.call(null,vec__21903,(1),null);var G__21902 = G__21890;var vec__21904 = G__21902;var i1 = cljs.core.nth.call(null,vec__21904,(0),null);var o1 = cljs.core.nth.call(null,vec__21904,(1),null);var G__21901__$1 = G__21901;var G__21902__$1 = G__21902;while(true){
var vec__21905 = G__21901__$1;var i2__$1 = cljs.core.nth.call(null,vec__21905,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21905,(1),null);var vec__21906 = G__21902__$1;var i1__$1 = cljs.core.nth.call(null,vec__21906,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21906,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___21915 = output_checker21888_21911.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21915))
{var error__6036__auto___21916 = temp__4126__auto___21915;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21916)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21916,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21885_21908,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21907,output_schema21885_21908,input_schema21886_21909,input_checker21887_21910,output_checker21888_21911))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema21885_21908,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21886_21909], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___21995 = schema.utils.use_fn_validation;var output_schema21917_21996 = schema.core.Any;var input_schema21918_21997 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker21919_21998 = schema.core.checker.call(null,input_schema21918_21997);var output_checker21920_21999 = schema.core.checker.call(null,output_schema21917_21996);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___21995,output_schema21917_21996,input_schema21918_21997,input_checker21919_21998,output_checker21920_21999){
return (function split_schema(G__21921,G__21922){var validate__6034__auto__ = ufv___21995.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___22000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21921,G__21922], null);var temp__4126__auto___22001 = input_checker21919_21998.call(null,args__6035__auto___22000);if(cljs.core.truth_(temp__4126__auto___22001))
{var error__6036__auto___22002 = temp__4126__auto___22001;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___22002)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22002,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___22000,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21918_21997,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21921;var ks = G__21922;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___21995,output_schema21917_21996,input_schema21918_21997,input_checker21919_21998,output_checker21920_21999){
return (function iter__21959(s__21960){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___21995,output_schema21917_21996,input_schema21918_21997,input_checker21919_21998,output_checker21920_21999){
return (function (){var s__21960__$1 = s__21960;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21960__$1);if(temp__4126__auto__)
{var s__21960__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21960__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21960__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21962 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21961 = (0);while(true){
if((i__21961 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__21961);cljs.core.chunk_append.call(null,b__21962,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__21961,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21962,s__21960__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21995,output_schema21917_21996,input_schema21918_21997,input_checker21919_21998,output_checker21920_21999){
return (function iter__21979(s__21980){return (new cljs.core.LazySeq(null,((function (i__21961,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21962,s__21960__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21995,output_schema21917_21996,input_schema21918_21997,input_checker21919_21998,output_checker21920_21999){
return (function (){var s__21980__$1 = s__21980;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21980__$1);if(temp__4126__auto____$1)
{var s__21980__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21980__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__21980__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__21982 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__21981 = (0);while(true){
if((i__21981 < size__4376__auto____$1))
{var vec__21985 = cljs.core._nth.call(null,c__4375__auto____$1,i__21981);var k = cljs.core.nth.call(null,vec__21985,(0),null);var v = cljs.core.nth.call(null,vec__21985,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21982,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22003 = (i__21981 + (1));
i__21981 = G__22003;
continue;
}
} else
{{
var G__22004 = (i__21981 + (1));
i__21981 = G__22004;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21982),iter__21979.call(null,cljs.core.chunk_rest.call(null,s__21980__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21982),null);
}
} else
{var vec__21986 = cljs.core.first.call(null,s__21980__$2);var k = cljs.core.nth.call(null,vec__21986,(0),null);var v = cljs.core.nth.call(null,vec__21986,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21979.call(null,cljs.core.rest.call(null,s__21980__$2)));
} else
{{
var G__22005 = cljs.core.rest.call(null,s__21980__$2);
s__21980__$1 = G__22005;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__21961,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21962,s__21960__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21995,output_schema21917_21996,input_schema21918_21997,input_checker21919_21998,output_checker21920_21999))
,null,null));
});})(i__21961,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21962,s__21960__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21995,output_schema21917_21996,input_schema21918_21997,input_checker21919_21998,output_checker21920_21999))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__22006 = (i__21961 + (1));
i__21961 = G__22006;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21962),iter__21959.call(null,cljs.core.chunk_rest.call(null,s__21960__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21962),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__21960__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__21960__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21995,output_schema21917_21996,input_schema21918_21997,input_checker21919_21998,output_checker21920_21999){
return (function iter__21987(s__21988){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21960__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21995,output_schema21917_21996,input_schema21918_21997,input_checker21919_21998,output_checker21920_21999){
return (function (){var s__21988__$1 = s__21988;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21988__$1);if(temp__4126__auto____$1)
{var s__21988__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21988__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21988__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21990 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21989 = (0);while(true){
if((i__21989 < size__4376__auto__))
{var vec__21993 = cljs.core._nth.call(null,c__4375__auto__,i__21989);var k = cljs.core.nth.call(null,vec__21993,(0),null);var v = cljs.core.nth.call(null,vec__21993,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21990,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22007 = (i__21989 + (1));
i__21989 = G__22007;
continue;
}
} else
{{
var G__22008 = (i__21989 + (1));
i__21989 = G__22008;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21990),iter__21987.call(null,cljs.core.chunk_rest.call(null,s__21988__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21990),null);
}
} else
{var vec__21994 = cljs.core.first.call(null,s__21988__$2);var k = cljs.core.nth.call(null,vec__21994,(0),null);var v = cljs.core.nth.call(null,vec__21994,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21987.call(null,cljs.core.rest.call(null,s__21988__$2)));
} else
{{
var G__22009 = cljs.core.rest.call(null,s__21988__$2);
s__21988__$1 = G__22009;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__21960__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21995,output_schema21917_21996,input_schema21918_21997,input_checker21919_21998,output_checker21920_21999))
,null,null));
});})(in_QMARK_,s__21960__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21995,output_schema21917_21996,input_schema21918_21997,input_checker21919_21998,output_checker21920_21999))
;return iter__4377__auto__.call(null,s);
})()),iter__21959.call(null,cljs.core.rest.call(null,s__21960__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___21995,output_schema21917_21996,input_schema21918_21997,input_checker21919_21998,output_checker21920_21999))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___21995,output_schema21917_21996,input_schema21918_21997,input_checker21919_21998,output_checker21920_21999))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___22010 = output_checker21920_21999.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___22010))
{var error__6036__auto___22011 = temp__4126__auto___22010;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___22011)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22011,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21917_21996,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21995,output_schema21917_21996,input_schema21918_21997,input_checker21919_21998,output_checker21920_21999))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema21917_21996,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21918_21997], null)));
var ufv___22042 = schema.utils.use_fn_validation;var output_schema22012_22043 = plumbing.fnk.schema.GraphIOSchemata;var input_schema22013_22044 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker22014_22045 = schema.core.checker.call(null,input_schema22013_22044);var output_checker22015_22046 = schema.core.checker.call(null,output_schema22012_22043);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___22042,output_schema22012_22043,input_schema22013_22044,input_checker22014_22045,output_checker22015_22046){
return (function sequence_schemata(G__22016,G__22017){var validate__6034__auto__ = ufv___22042.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___22047 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22016,G__22017], null);var temp__4126__auto___22048 = input_checker22014_22045.call(null,args__6035__auto___22047);if(cljs.core.truth_(temp__4126__auto___22048))
{var error__6036__auto___22049 = temp__4126__auto___22048;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___22049)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22049,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___22047,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22013_22044,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__22033 = G__22016;var vec__22035 = G__22033;var i1 = cljs.core.nth.call(null,vec__22035,(0),null);var o1 = cljs.core.nth.call(null,vec__22035,(1),null);var G__22034 = G__22017;var vec__22036 = G__22034;var k = cljs.core.nth.call(null,vec__22036,(0),null);var vec__22037 = cljs.core.nth.call(null,vec__22036,(1),null);var i2 = cljs.core.nth.call(null,vec__22037,(0),null);var o2 = cljs.core.nth.call(null,vec__22037,(1),null);var G__22033__$1 = G__22033;var G__22034__$1 = G__22034;while(true){
var vec__22038 = G__22033__$1;var i1__$1 = cljs.core.nth.call(null,vec__22038,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__22038,(1),null);var vec__22039 = G__22034__$1;var k__$1 = cljs.core.nth.call(null,vec__22039,(0),null);var vec__22040 = cljs.core.nth.call(null,vec__22039,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__22040,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__22040,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__22041 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__22041,(0),null);var unused = cljs.core.nth.call(null,vec__22041,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___22050 = output_checker22015_22046.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___22050))
{var error__6036__auto___22051 = temp__4126__auto___22050;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___22051)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22051,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22012_22043,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___22042,output_schema22012_22043,input_schema22013_22044,input_checker22014_22045,output_checker22015_22046))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema22012_22043,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22013_22044], null)));
