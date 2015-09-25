// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__21774 = p1__6064__6065__auto__;if(G__21774)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__21774.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__21774.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21774);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21774);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21775_SHARP_){return (cljs.core.val.call(null,p1__21775_SHARP_) > (1));
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
var vec__21777 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__21777,(0),null);var v = cljs.core.nth.call(null,vec__21777,(1),null);var p = vec__21777;if(cljs.core.truth_(p))
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
var ufv___21783 = schema.utils.use_fn_validation;var output_schema21778_21784 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema21779_21785 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker21780_21786 = schema.core.checker.call(null,input_schema21779_21785);var output_checker21781_21787 = schema.core.checker.call(null,output_schema21778_21784);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21783,output_schema21778_21784,input_schema21779_21785,input_checker21780_21786,output_checker21781_21787){
return (function unwrap_schema_form_key(G__21782){var validate__6034__auto__ = ufv___21783.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21788 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21782], null);var temp__4126__auto___21789 = input_checker21780_21786.call(null,args__6035__auto___21788);if(cljs.core.truth_(temp__4126__auto___21789))
{var error__6036__auto___21790 = temp__4126__auto___21789;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21790)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21790,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21788,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21779_21785,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__21782;while(true){
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
{var temp__4126__auto___21791 = output_checker21781_21787.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21791))
{var error__6036__auto___21792 = temp__4126__auto___21791;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21792)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21792,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21778_21784,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21783,output_schema21778_21784,input_schema21779_21785,input_checker21780_21786,output_checker21781_21787))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema21778_21784,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21779_21785], null)));
var ufv___21798 = schema.utils.use_fn_validation;var output_schema21793_21799 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema21794_21800 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21795_21801 = schema.core.checker.call(null,input_schema21794_21800);var output_checker21796_21802 = schema.core.checker.call(null,output_schema21793_21799);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21798,output_schema21793_21799,input_schema21794_21800,input_checker21795_21801,output_checker21796_21802){
return (function explicit_schema_key_map(G__21797){var validate__6034__auto__ = ufv___21798.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21797], null);var temp__4126__auto___21804 = input_checker21795_21801.call(null,args__6035__auto___21803);if(cljs.core.truth_(temp__4126__auto___21804))
{var error__6036__auto___21805 = temp__4126__auto___21804;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21805)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21805,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21803,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21794_21800,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21797;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21806 = output_checker21796_21802.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21806))
{var error__6036__auto___21807 = temp__4126__auto___21806;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21807)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21807,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21793_21799,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21798,output_schema21793_21799,input_schema21794_21800,input_checker21795_21801,output_checker21796_21802))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema21793_21799,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21794_21800], null)));
var ufv___21813 = schema.utils.use_fn_validation;var output_schema21808_21814 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema21809_21815 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21810_21816 = schema.core.checker.call(null,input_schema21809_21815);var output_checker21811_21817 = schema.core.checker.call(null,output_schema21808_21814);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21813,output_schema21808_21814,input_schema21809_21815,input_checker21810_21816,output_checker21811_21817){
return (function split_schema_keys(G__21812){var validate__6034__auto__ = ufv___21813.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21818 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21812], null);var temp__4126__auto___21819 = input_checker21810_21816.call(null,args__6035__auto___21818);if(cljs.core.truth_(temp__4126__auto___21819))
{var error__6036__auto___21820 = temp__4126__auto___21819;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21820)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21820,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21818,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21809_21815,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21812;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21821 = output_checker21811_21817.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21821))
{var error__6036__auto___21822 = temp__4126__auto___21821;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21822)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21822,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21808_21814,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21813,output_schema21808_21814,input_schema21809_21815,input_checker21810_21816,output_checker21811_21817))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema21808_21814,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21809_21815], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__21826){var vec__21827 = p__21826;var k = cljs.core.nth.call(null,vec__21827,(0),null);var v = cljs.core.nth.call(null,vec__21827,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__21828 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__21828,(0),null);var ov = cljs.core.nth.call(null,vec__21828,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__21829){
var key_project = cljs.core.first(arglist__21829);
arglist__21829 = cljs.core.next(arglist__21829);
var key_combine = cljs.core.first(arglist__21829);
arglist__21829 = cljs.core.next(arglist__21829);
var val_combine = cljs.core.first(arglist__21829);
var maps = cljs.core.rest(arglist__21829);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21837 = schema.utils.use_fn_validation;var output_schema21831_21838 = plumbing.fnk.schema.InputSchema;var input_schema21832_21839 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker21833_21840 = schema.core.checker.call(null,input_schema21832_21839);var output_checker21834_21841 = schema.core.checker.call(null,output_schema21831_21838);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21837,output_schema21831_21838,input_schema21832_21839,input_checker21833_21840,output_checker21834_21841){
return (function union_input_schemata(G__21835,G__21836){var validate__6034__auto__ = ufv___21837.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21842 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21835,G__21836], null);var temp__4126__auto___21843 = input_checker21833_21840.call(null,args__6035__auto___21842);if(cljs.core.truth_(temp__4126__auto___21843))
{var error__6036__auto___21844 = temp__4126__auto___21843;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21844)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21844,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21842,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21832_21839,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__21835;var i2 = G__21836;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___21837,output_schema21831_21838,input_schema21832_21839,input_checker21833_21840,output_checker21834_21841){
return (function (p1__21830_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__21830_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__21830_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___21837,output_schema21831_21838,input_schema21832_21839,input_checker21833_21840,output_checker21834_21841))
,((function (validate__6034__auto__,ufv___21837,output_schema21831_21838,input_schema21832_21839,input_checker21833_21840,output_checker21834_21841){
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
});})(validate__6034__auto__,ufv___21837,output_schema21831_21838,input_schema21832_21839,input_checker21833_21840,output_checker21834_21841))
,((function (validate__6034__auto__,ufv___21837,output_schema21831_21838,input_schema21832_21839,input_checker21833_21840,output_checker21834_21841){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___21837,output_schema21831_21838,input_schema21832_21839,input_checker21833_21840,output_checker21834_21841))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21845 = output_checker21834_21841.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21845))
{var error__6036__auto___21846 = temp__4126__auto___21845;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21846)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21846,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21831_21838,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21837,output_schema21831_21838,input_schema21832_21839,input_checker21833_21840,output_checker21834_21841))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema21831_21838,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21832_21839], null)));
var ufv___21852 = schema.utils.use_fn_validation;var output_schema21847_21853 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema21848_21854 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker21849_21855 = schema.core.checker.call(null,input_schema21848_21854);var output_checker21850_21856 = schema.core.checker.call(null,output_schema21847_21853);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21852,output_schema21847_21853,input_schema21848_21854,input_checker21849_21855,output_checker21850_21856){
return (function required_toplevel_keys(G__21851){var validate__6034__auto__ = ufv___21852.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21857 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21851], null);var temp__4126__auto___21858 = input_checker21849_21855.call(null,args__6035__auto___21857);if(cljs.core.truth_(temp__4126__auto___21858))
{var error__6036__auto___21859 = temp__4126__auto___21858;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21859)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21859,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21857,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21848_21854,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__21851;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___21852,output_schema21847_21853,input_schema21848_21854,input_checker21849_21855,output_checker21850_21856){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___21852,output_schema21847_21853,input_schema21848_21854,input_checker21849_21855,output_checker21850_21856))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21860 = output_checker21850_21856.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21860))
{var error__6036__auto___21861 = temp__4126__auto___21860;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21861)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21861,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21847_21853,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21852,output_schema21847_21853,input_schema21848_21854,input_checker21849_21855,output_checker21850_21856))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema21847_21853,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21848_21854], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21870(s__21871){return (new cljs.core.LazySeq(null,(function (){var s__21871__$1 = s__21871;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21871__$1);if(temp__4126__auto__)
{var s__21871__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21871__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21871__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21873 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21872 = (0);while(true){
if((i__21872 < size__4376__auto__))
{var vec__21876 = cljs.core._nth.call(null,c__4375__auto__,i__21872);var k = cljs.core.nth.call(null,vec__21876,(0),null);var v = cljs.core.nth.call(null,vec__21876,(1),null);cljs.core.chunk_append.call(null,b__21873,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__21878 = (i__21872 + (1));
i__21872 = G__21878;
continue;
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
{var vec__21877 = cljs.core.first.call(null,s__21871__$2);var k = cljs.core.nth.call(null,vec__21877,(0),null);var v = cljs.core.nth.call(null,vec__21877,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__21870.call(null,cljs.core.rest.call(null,s__21871__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21887(s__21888){return (new cljs.core.LazySeq(null,(function (){var s__21888__$1 = s__21888;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21888__$1);if(temp__4126__auto__)
{var s__21888__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21888__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21888__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21890 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21889 = (0);while(true){
if((i__21889 < size__4376__auto__))
{var vec__21893 = cljs.core._nth.call(null,c__4375__auto__,i__21889);var k = cljs.core.nth.call(null,vec__21893,(0),null);var v = cljs.core.nth.call(null,vec__21893,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__21890,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__21895 = (i__21889 + (1));
i__21889 = G__21895;
continue;
}
} else
{{
var G__21896 = (i__21889 + (1));
i__21889 = G__21896;
continue;
}
}
} else
{{
var G__21897 = (i__21889 + (1));
i__21889 = G__21897;
continue;
}
}
} else
{{
var G__21898 = (i__21889 + (1));
i__21889 = G__21898;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21890),iter__21887.call(null,cljs.core.chunk_rest.call(null,s__21888__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21890),null);
}
} else
{var vec__21894 = cljs.core.first.call(null,s__21888__$2);var k = cljs.core.nth.call(null,vec__21894,(0),null);var v = cljs.core.nth.call(null,vec__21894,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21887.call(null,cljs.core.rest.call(null,s__21888__$2)));
} else
{{
var G__21899 = cljs.core.rest.call(null,s__21888__$2);
s__21888__$1 = G__21899;
continue;
}
}
} else
{{
var G__21900 = cljs.core.rest.call(null,s__21888__$2);
s__21888__$1 = G__21900;
continue;
}
}
} else
{{
var G__21901 = cljs.core.rest.call(null,s__21888__$2);
s__21888__$1 = G__21901;
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
var ufv___21924 = schema.utils.use_fn_validation;var output_schema21902_21925 = schema.core.Any;var input_schema21903_21926 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21904_21927 = schema.core.checker.call(null,input_schema21903_21926);var output_checker21905_21928 = schema.core.checker.call(null,output_schema21902_21925);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21924,output_schema21902_21925,input_schema21903_21926,input_checker21904_21927,output_checker21905_21928){
return (function compose_schemata(G__21906,G__21907){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___21929 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21906,G__21907], null);var temp__4126__auto___21930 = input_checker21904_21927.call(null,args__6035__auto___21929);if(cljs.core.truth_(temp__4126__auto___21930))
{var error__6036__auto___21931 = temp__4126__auto___21930;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21931)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21931,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21929,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21903_21926,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21918 = G__21906;var vec__21920 = G__21918;var i2 = cljs.core.nth.call(null,vec__21920,(0),null);var o2 = cljs.core.nth.call(null,vec__21920,(1),null);var G__21919 = G__21907;var vec__21921 = G__21919;var i1 = cljs.core.nth.call(null,vec__21921,(0),null);var o1 = cljs.core.nth.call(null,vec__21921,(1),null);var G__21918__$1 = G__21918;var G__21919__$1 = G__21919;while(true){
var vec__21922 = G__21918__$1;var i2__$1 = cljs.core.nth.call(null,vec__21922,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21922,(1),null);var vec__21923 = G__21919__$1;var i1__$1 = cljs.core.nth.call(null,vec__21923,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21923,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___21932 = output_checker21905_21928.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21932))
{var error__6036__auto___21933 = temp__4126__auto___21932;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21933)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21933,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21902_21925,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21924,output_schema21902_21925,input_schema21903_21926,input_checker21904_21927,output_checker21905_21928))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema21902_21925,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21903_21926], null)));
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
var ufv___22012 = schema.utils.use_fn_validation;var output_schema21934_22013 = schema.core.Any;var input_schema21935_22014 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker21936_22015 = schema.core.checker.call(null,input_schema21935_22014);var output_checker21937_22016 = schema.core.checker.call(null,output_schema21934_22013);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___22012,output_schema21934_22013,input_schema21935_22014,input_checker21936_22015,output_checker21937_22016){
return (function split_schema(G__21938,G__21939){var validate__6034__auto__ = ufv___22012.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___22017 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21938,G__21939], null);var temp__4126__auto___22018 = input_checker21936_22015.call(null,args__6035__auto___22017);if(cljs.core.truth_(temp__4126__auto___22018))
{var error__6036__auto___22019 = temp__4126__auto___22018;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___22019)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22019,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___22017,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21935_22014,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21938;var ks = G__21939;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___22012,output_schema21934_22013,input_schema21935_22014,input_checker21936_22015,output_checker21937_22016){
return (function iter__21976(s__21977){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___22012,output_schema21934_22013,input_schema21935_22014,input_checker21936_22015,output_checker21937_22016){
return (function (){var s__21977__$1 = s__21977;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21977__$1);if(temp__4126__auto__)
{var s__21977__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21977__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21977__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21979 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21978 = (0);while(true){
if((i__21978 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__21978);cljs.core.chunk_append.call(null,b__21979,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__21978,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21979,s__21977__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22012,output_schema21934_22013,input_schema21935_22014,input_checker21936_22015,output_checker21937_22016){
return (function iter__21996(s__21997){return (new cljs.core.LazySeq(null,((function (i__21978,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21979,s__21977__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22012,output_schema21934_22013,input_schema21935_22014,input_checker21936_22015,output_checker21937_22016){
return (function (){var s__21997__$1 = s__21997;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21997__$1);if(temp__4126__auto____$1)
{var s__21997__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21997__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__21997__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__21999 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__21998 = (0);while(true){
if((i__21998 < size__4376__auto____$1))
{var vec__22002 = cljs.core._nth.call(null,c__4375__auto____$1,i__21998);var k = cljs.core.nth.call(null,vec__22002,(0),null);var v = cljs.core.nth.call(null,vec__22002,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21999,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22020 = (i__21998 + (1));
i__21998 = G__22020;
continue;
}
} else
{{
var G__22021 = (i__21998 + (1));
i__21998 = G__22021;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21999),iter__21996.call(null,cljs.core.chunk_rest.call(null,s__21997__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21999),null);
}
} else
{var vec__22003 = cljs.core.first.call(null,s__21997__$2);var k = cljs.core.nth.call(null,vec__22003,(0),null);var v = cljs.core.nth.call(null,vec__22003,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21996.call(null,cljs.core.rest.call(null,s__21997__$2)));
} else
{{
var G__22022 = cljs.core.rest.call(null,s__21997__$2);
s__21997__$1 = G__22022;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__21978,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21979,s__21977__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22012,output_schema21934_22013,input_schema21935_22014,input_checker21936_22015,output_checker21937_22016))
,null,null));
});})(i__21978,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21979,s__21977__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22012,output_schema21934_22013,input_schema21935_22014,input_checker21936_22015,output_checker21937_22016))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__22023 = (i__21978 + (1));
i__21978 = G__22023;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21979),iter__21976.call(null,cljs.core.chunk_rest.call(null,s__21977__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21979),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__21977__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__21977__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22012,output_schema21934_22013,input_schema21935_22014,input_checker21936_22015,output_checker21937_22016){
return (function iter__22004(s__22005){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21977__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22012,output_schema21934_22013,input_schema21935_22014,input_checker21936_22015,output_checker21937_22016){
return (function (){var s__22005__$1 = s__22005;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__22005__$1);if(temp__4126__auto____$1)
{var s__22005__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__22005__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22005__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22007 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22006 = (0);while(true){
if((i__22006 < size__4376__auto__))
{var vec__22010 = cljs.core._nth.call(null,c__4375__auto__,i__22006);var k = cljs.core.nth.call(null,vec__22010,(0),null);var v = cljs.core.nth.call(null,vec__22010,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__22007,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22024 = (i__22006 + (1));
i__22006 = G__22024;
continue;
}
} else
{{
var G__22025 = (i__22006 + (1));
i__22006 = G__22025;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22007),iter__22004.call(null,cljs.core.chunk_rest.call(null,s__22005__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22007),null);
}
} else
{var vec__22011 = cljs.core.first.call(null,s__22005__$2);var k = cljs.core.nth.call(null,vec__22011,(0),null);var v = cljs.core.nth.call(null,vec__22011,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22004.call(null,cljs.core.rest.call(null,s__22005__$2)));
} else
{{
var G__22026 = cljs.core.rest.call(null,s__22005__$2);
s__22005__$1 = G__22026;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__21977__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22012,output_schema21934_22013,input_schema21935_22014,input_checker21936_22015,output_checker21937_22016))
,null,null));
});})(in_QMARK_,s__21977__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22012,output_schema21934_22013,input_schema21935_22014,input_checker21936_22015,output_checker21937_22016))
;return iter__4377__auto__.call(null,s);
})()),iter__21976.call(null,cljs.core.rest.call(null,s__21977__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___22012,output_schema21934_22013,input_schema21935_22014,input_checker21936_22015,output_checker21937_22016))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___22012,output_schema21934_22013,input_schema21935_22014,input_checker21936_22015,output_checker21937_22016))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___22027 = output_checker21937_22016.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___22027))
{var error__6036__auto___22028 = temp__4126__auto___22027;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___22028)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22028,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21934_22013,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___22012,output_schema21934_22013,input_schema21935_22014,input_checker21936_22015,output_checker21937_22016))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema21934_22013,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21935_22014], null)));
var ufv___22059 = schema.utils.use_fn_validation;var output_schema22029_22060 = plumbing.fnk.schema.GraphIOSchemata;var input_schema22030_22061 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker22031_22062 = schema.core.checker.call(null,input_schema22030_22061);var output_checker22032_22063 = schema.core.checker.call(null,output_schema22029_22060);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___22059,output_schema22029_22060,input_schema22030_22061,input_checker22031_22062,output_checker22032_22063){
return (function sequence_schemata(G__22033,G__22034){var validate__6034__auto__ = ufv___22059.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___22064 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22033,G__22034], null);var temp__4126__auto___22065 = input_checker22031_22062.call(null,args__6035__auto___22064);if(cljs.core.truth_(temp__4126__auto___22065))
{var error__6036__auto___22066 = temp__4126__auto___22065;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___22066)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22066,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___22064,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22030_22061,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__22050 = G__22033;var vec__22052 = G__22050;var i1 = cljs.core.nth.call(null,vec__22052,(0),null);var o1 = cljs.core.nth.call(null,vec__22052,(1),null);var G__22051 = G__22034;var vec__22053 = G__22051;var k = cljs.core.nth.call(null,vec__22053,(0),null);var vec__22054 = cljs.core.nth.call(null,vec__22053,(1),null);var i2 = cljs.core.nth.call(null,vec__22054,(0),null);var o2 = cljs.core.nth.call(null,vec__22054,(1),null);var G__22050__$1 = G__22050;var G__22051__$1 = G__22051;while(true){
var vec__22055 = G__22050__$1;var i1__$1 = cljs.core.nth.call(null,vec__22055,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__22055,(1),null);var vec__22056 = G__22051__$1;var k__$1 = cljs.core.nth.call(null,vec__22056,(0),null);var vec__22057 = cljs.core.nth.call(null,vec__22056,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__22057,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__22057,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__22058 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__22058,(0),null);var unused = cljs.core.nth.call(null,vec__22058,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___22067 = output_checker22032_22063.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___22067))
{var error__6036__auto___22068 = temp__4126__auto___22067;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___22068)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22068,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22029_22060,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___22059,output_schema22029_22060,input_schema22030_22061,input_checker22031_22062,output_checker22032_22063))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema22029_22060,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22030_22061], null)));
