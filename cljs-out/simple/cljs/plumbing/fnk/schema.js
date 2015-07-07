// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__21769 = p1__6064__6065__auto__;if(G__21769)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__21769.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__21769.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21769);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21769);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21770_SHARP_){return (cljs.core.val.call(null,p1__21770_SHARP_) > (1));
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
var vec__21772 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__21772,(0),null);var v = cljs.core.nth.call(null,vec__21772,(1),null);var p = vec__21772;if(cljs.core.truth_(p))
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
var ufv___21778 = schema.utils.use_fn_validation;var output_schema21773_21779 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema21774_21780 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker21775_21781 = schema.core.checker.call(null,input_schema21774_21780);var output_checker21776_21782 = schema.core.checker.call(null,output_schema21773_21779);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21778,output_schema21773_21779,input_schema21774_21780,input_checker21775_21781,output_checker21776_21782){
return (function unwrap_schema_form_key(G__21777){var validate__6034__auto__ = ufv___21778.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21783 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21777], null);var temp__4126__auto___21784 = input_checker21775_21781.call(null,args__6035__auto___21783);if(cljs.core.truth_(temp__4126__auto___21784))
{var error__6036__auto___21785 = temp__4126__auto___21784;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21785)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21785,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21783,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21774_21780,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__21777;while(true){
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
{var temp__4126__auto___21786 = output_checker21776_21782.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21786))
{var error__6036__auto___21787 = temp__4126__auto___21786;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21787)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21787,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21773_21779,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21778,output_schema21773_21779,input_schema21774_21780,input_checker21775_21781,output_checker21776_21782))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema21773_21779,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21774_21780], null)));
var ufv___21793 = schema.utils.use_fn_validation;var output_schema21788_21794 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema21789_21795 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21790_21796 = schema.core.checker.call(null,input_schema21789_21795);var output_checker21791_21797 = schema.core.checker.call(null,output_schema21788_21794);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21793,output_schema21788_21794,input_schema21789_21795,input_checker21790_21796,output_checker21791_21797){
return (function explicit_schema_key_map(G__21792){var validate__6034__auto__ = ufv___21793.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21798 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21792], null);var temp__4126__auto___21799 = input_checker21790_21796.call(null,args__6035__auto___21798);if(cljs.core.truth_(temp__4126__auto___21799))
{var error__6036__auto___21800 = temp__4126__auto___21799;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21800)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21800,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21798,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21789_21795,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21792;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21801 = output_checker21791_21797.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21801))
{var error__6036__auto___21802 = temp__4126__auto___21801;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21802)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21802,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21788_21794,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21793,output_schema21788_21794,input_schema21789_21795,input_checker21790_21796,output_checker21791_21797))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema21788_21794,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21789_21795], null)));
var ufv___21808 = schema.utils.use_fn_validation;var output_schema21803_21809 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema21804_21810 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21805_21811 = schema.core.checker.call(null,input_schema21804_21810);var output_checker21806_21812 = schema.core.checker.call(null,output_schema21803_21809);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21808,output_schema21803_21809,input_schema21804_21810,input_checker21805_21811,output_checker21806_21812){
return (function split_schema_keys(G__21807){var validate__6034__auto__ = ufv___21808.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21813 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21807], null);var temp__4126__auto___21814 = input_checker21805_21811.call(null,args__6035__auto___21813);if(cljs.core.truth_(temp__4126__auto___21814))
{var error__6036__auto___21815 = temp__4126__auto___21814;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21815)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21815,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21813,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21804_21810,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21807;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21816 = output_checker21806_21812.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21816))
{var error__6036__auto___21817 = temp__4126__auto___21816;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21817)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21817,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21803_21809,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21808,output_schema21803_21809,input_schema21804_21810,input_checker21805_21811,output_checker21806_21812))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema21803_21809,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21804_21810], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__21821){var vec__21822 = p__21821;var k = cljs.core.nth.call(null,vec__21822,(0),null);var v = cljs.core.nth.call(null,vec__21822,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__21823 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__21823,(0),null);var ov = cljs.core.nth.call(null,vec__21823,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__21824){
var key_project = cljs.core.first(arglist__21824);
arglist__21824 = cljs.core.next(arglist__21824);
var key_combine = cljs.core.first(arglist__21824);
arglist__21824 = cljs.core.next(arglist__21824);
var val_combine = cljs.core.first(arglist__21824);
var maps = cljs.core.rest(arglist__21824);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21832 = schema.utils.use_fn_validation;var output_schema21826_21833 = plumbing.fnk.schema.InputSchema;var input_schema21827_21834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker21828_21835 = schema.core.checker.call(null,input_schema21827_21834);var output_checker21829_21836 = schema.core.checker.call(null,output_schema21826_21833);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21832,output_schema21826_21833,input_schema21827_21834,input_checker21828_21835,output_checker21829_21836){
return (function union_input_schemata(G__21830,G__21831){var validate__6034__auto__ = ufv___21832.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21837 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21830,G__21831], null);var temp__4126__auto___21838 = input_checker21828_21835.call(null,args__6035__auto___21837);if(cljs.core.truth_(temp__4126__auto___21838))
{var error__6036__auto___21839 = temp__4126__auto___21838;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21839)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21839,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21837,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21827_21834,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__21830;var i2 = G__21831;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___21832,output_schema21826_21833,input_schema21827_21834,input_checker21828_21835,output_checker21829_21836){
return (function (p1__21825_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__21825_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__21825_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___21832,output_schema21826_21833,input_schema21827_21834,input_checker21828_21835,output_checker21829_21836))
,((function (validate__6034__auto__,ufv___21832,output_schema21826_21833,input_schema21827_21834,input_checker21828_21835,output_checker21829_21836){
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
});})(validate__6034__auto__,ufv___21832,output_schema21826_21833,input_schema21827_21834,input_checker21828_21835,output_checker21829_21836))
,((function (validate__6034__auto__,ufv___21832,output_schema21826_21833,input_schema21827_21834,input_checker21828_21835,output_checker21829_21836){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___21832,output_schema21826_21833,input_schema21827_21834,input_checker21828_21835,output_checker21829_21836))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21840 = output_checker21829_21836.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21840))
{var error__6036__auto___21841 = temp__4126__auto___21840;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21841)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21841,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21826_21833,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21832,output_schema21826_21833,input_schema21827_21834,input_checker21828_21835,output_checker21829_21836))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema21826_21833,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21827_21834], null)));
var ufv___21847 = schema.utils.use_fn_validation;var output_schema21842_21848 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema21843_21849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker21844_21850 = schema.core.checker.call(null,input_schema21843_21849);var output_checker21845_21851 = schema.core.checker.call(null,output_schema21842_21848);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21847,output_schema21842_21848,input_schema21843_21849,input_checker21844_21850,output_checker21845_21851){
return (function required_toplevel_keys(G__21846){var validate__6034__auto__ = ufv___21847.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21852 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21846], null);var temp__4126__auto___21853 = input_checker21844_21850.call(null,args__6035__auto___21852);if(cljs.core.truth_(temp__4126__auto___21853))
{var error__6036__auto___21854 = temp__4126__auto___21853;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21854)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21854,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21852,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21843_21849,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__21846;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___21847,output_schema21842_21848,input_schema21843_21849,input_checker21844_21850,output_checker21845_21851){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___21847,output_schema21842_21848,input_schema21843_21849,input_checker21844_21850,output_checker21845_21851))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21855 = output_checker21845_21851.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21855))
{var error__6036__auto___21856 = temp__4126__auto___21855;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21856)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21856,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21842_21848,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21847,output_schema21842_21848,input_schema21843_21849,input_checker21844_21850,output_checker21845_21851))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema21842_21848,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21843_21849], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21865(s__21866){return (new cljs.core.LazySeq(null,(function (){var s__21866__$1 = s__21866;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21866__$1);if(temp__4126__auto__)
{var s__21866__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21866__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21866__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21868 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21867 = (0);while(true){
if((i__21867 < size__4376__auto__))
{var vec__21871 = cljs.core._nth.call(null,c__4375__auto__,i__21867);var k = cljs.core.nth.call(null,vec__21871,(0),null);var v = cljs.core.nth.call(null,vec__21871,(1),null);cljs.core.chunk_append.call(null,b__21868,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__21873 = (i__21867 + (1));
i__21867 = G__21873;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21868),iter__21865.call(null,cljs.core.chunk_rest.call(null,s__21866__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21868),null);
}
} else
{var vec__21872 = cljs.core.first.call(null,s__21866__$2);var k = cljs.core.nth.call(null,vec__21872,(0),null);var v = cljs.core.nth.call(null,vec__21872,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__21865.call(null,cljs.core.rest.call(null,s__21866__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21882(s__21883){return (new cljs.core.LazySeq(null,(function (){var s__21883__$1 = s__21883;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21883__$1);if(temp__4126__auto__)
{var s__21883__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21883__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21883__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21885 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21884 = (0);while(true){
if((i__21884 < size__4376__auto__))
{var vec__21888 = cljs.core._nth.call(null,c__4375__auto__,i__21884);var k = cljs.core.nth.call(null,vec__21888,(0),null);var v = cljs.core.nth.call(null,vec__21888,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__21885,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__21890 = (i__21884 + (1));
i__21884 = G__21890;
continue;
}
} else
{{
var G__21891 = (i__21884 + (1));
i__21884 = G__21891;
continue;
}
}
} else
{{
var G__21892 = (i__21884 + (1));
i__21884 = G__21892;
continue;
}
}
} else
{{
var G__21893 = (i__21884 + (1));
i__21884 = G__21893;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21885),iter__21882.call(null,cljs.core.chunk_rest.call(null,s__21883__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21885),null);
}
} else
{var vec__21889 = cljs.core.first.call(null,s__21883__$2);var k = cljs.core.nth.call(null,vec__21889,(0),null);var v = cljs.core.nth.call(null,vec__21889,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21882.call(null,cljs.core.rest.call(null,s__21883__$2)));
} else
{{
var G__21894 = cljs.core.rest.call(null,s__21883__$2);
s__21883__$1 = G__21894;
continue;
}
}
} else
{{
var G__21895 = cljs.core.rest.call(null,s__21883__$2);
s__21883__$1 = G__21895;
continue;
}
}
} else
{{
var G__21896 = cljs.core.rest.call(null,s__21883__$2);
s__21883__$1 = G__21896;
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
var ufv___21919 = schema.utils.use_fn_validation;var output_schema21897_21920 = schema.core.Any;var input_schema21898_21921 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21899_21922 = schema.core.checker.call(null,input_schema21898_21921);var output_checker21900_21923 = schema.core.checker.call(null,output_schema21897_21920);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21919,output_schema21897_21920,input_schema21898_21921,input_checker21899_21922,output_checker21900_21923){
return (function compose_schemata(G__21901,G__21902){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___21924 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21901,G__21902], null);var temp__4126__auto___21925 = input_checker21899_21922.call(null,args__6035__auto___21924);if(cljs.core.truth_(temp__4126__auto___21925))
{var error__6036__auto___21926 = temp__4126__auto___21925;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21926)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21926,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21924,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21898_21921,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21913 = G__21901;var vec__21915 = G__21913;var i2 = cljs.core.nth.call(null,vec__21915,(0),null);var o2 = cljs.core.nth.call(null,vec__21915,(1),null);var G__21914 = G__21902;var vec__21916 = G__21914;var i1 = cljs.core.nth.call(null,vec__21916,(0),null);var o1 = cljs.core.nth.call(null,vec__21916,(1),null);var G__21913__$1 = G__21913;var G__21914__$1 = G__21914;while(true){
var vec__21917 = G__21913__$1;var i2__$1 = cljs.core.nth.call(null,vec__21917,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21917,(1),null);var vec__21918 = G__21914__$1;var i1__$1 = cljs.core.nth.call(null,vec__21918,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21918,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___21927 = output_checker21900_21923.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21927))
{var error__6036__auto___21928 = temp__4126__auto___21927;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21928)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21928,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21897_21920,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21919,output_schema21897_21920,input_schema21898_21921,input_checker21899_21922,output_checker21900_21923))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema21897_21920,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21898_21921], null)));
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
var ufv___22007 = schema.utils.use_fn_validation;var output_schema21929_22008 = schema.core.Any;var input_schema21930_22009 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker21931_22010 = schema.core.checker.call(null,input_schema21930_22009);var output_checker21932_22011 = schema.core.checker.call(null,output_schema21929_22008);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___22007,output_schema21929_22008,input_schema21930_22009,input_checker21931_22010,output_checker21932_22011){
return (function split_schema(G__21933,G__21934){var validate__6034__auto__ = ufv___22007.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___22012 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21933,G__21934], null);var temp__4126__auto___22013 = input_checker21931_22010.call(null,args__6035__auto___22012);if(cljs.core.truth_(temp__4126__auto___22013))
{var error__6036__auto___22014 = temp__4126__auto___22013;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___22014)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22014,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___22012,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21930_22009,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21933;var ks = G__21934;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___22007,output_schema21929_22008,input_schema21930_22009,input_checker21931_22010,output_checker21932_22011){
return (function iter__21971(s__21972){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___22007,output_schema21929_22008,input_schema21930_22009,input_checker21931_22010,output_checker21932_22011){
return (function (){var s__21972__$1 = s__21972;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21972__$1);if(temp__4126__auto__)
{var s__21972__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21972__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21972__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21974 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21973 = (0);while(true){
if((i__21973 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__21973);cljs.core.chunk_append.call(null,b__21974,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__21973,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21974,s__21972__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22007,output_schema21929_22008,input_schema21930_22009,input_checker21931_22010,output_checker21932_22011){
return (function iter__21991(s__21992){return (new cljs.core.LazySeq(null,((function (i__21973,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21974,s__21972__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22007,output_schema21929_22008,input_schema21930_22009,input_checker21931_22010,output_checker21932_22011){
return (function (){var s__21992__$1 = s__21992;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21992__$1);if(temp__4126__auto____$1)
{var s__21992__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21992__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__21992__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__21994 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__21993 = (0);while(true){
if((i__21993 < size__4376__auto____$1))
{var vec__21997 = cljs.core._nth.call(null,c__4375__auto____$1,i__21993);var k = cljs.core.nth.call(null,vec__21997,(0),null);var v = cljs.core.nth.call(null,vec__21997,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21994,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22015 = (i__21993 + (1));
i__21993 = G__22015;
continue;
}
} else
{{
var G__22016 = (i__21993 + (1));
i__21993 = G__22016;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21994),iter__21991.call(null,cljs.core.chunk_rest.call(null,s__21992__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21994),null);
}
} else
{var vec__21998 = cljs.core.first.call(null,s__21992__$2);var k = cljs.core.nth.call(null,vec__21998,(0),null);var v = cljs.core.nth.call(null,vec__21998,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21991.call(null,cljs.core.rest.call(null,s__21992__$2)));
} else
{{
var G__22017 = cljs.core.rest.call(null,s__21992__$2);
s__21992__$1 = G__22017;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__21973,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21974,s__21972__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22007,output_schema21929_22008,input_schema21930_22009,input_checker21931_22010,output_checker21932_22011))
,null,null));
});})(i__21973,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21974,s__21972__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22007,output_schema21929_22008,input_schema21930_22009,input_checker21931_22010,output_checker21932_22011))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__22018 = (i__21973 + (1));
i__21973 = G__22018;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21974),iter__21971.call(null,cljs.core.chunk_rest.call(null,s__21972__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21974),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__21972__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__21972__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22007,output_schema21929_22008,input_schema21930_22009,input_checker21931_22010,output_checker21932_22011){
return (function iter__21999(s__22000){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21972__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22007,output_schema21929_22008,input_schema21930_22009,input_checker21931_22010,output_checker21932_22011){
return (function (){var s__22000__$1 = s__22000;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__22000__$1);if(temp__4126__auto____$1)
{var s__22000__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__22000__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22000__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22002 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22001 = (0);while(true){
if((i__22001 < size__4376__auto__))
{var vec__22005 = cljs.core._nth.call(null,c__4375__auto__,i__22001);var k = cljs.core.nth.call(null,vec__22005,(0),null);var v = cljs.core.nth.call(null,vec__22005,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__22002,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22019 = (i__22001 + (1));
i__22001 = G__22019;
continue;
}
} else
{{
var G__22020 = (i__22001 + (1));
i__22001 = G__22020;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22002),iter__21999.call(null,cljs.core.chunk_rest.call(null,s__22000__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22002),null);
}
} else
{var vec__22006 = cljs.core.first.call(null,s__22000__$2);var k = cljs.core.nth.call(null,vec__22006,(0),null);var v = cljs.core.nth.call(null,vec__22006,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21999.call(null,cljs.core.rest.call(null,s__22000__$2)));
} else
{{
var G__22021 = cljs.core.rest.call(null,s__22000__$2);
s__22000__$1 = G__22021;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__21972__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22007,output_schema21929_22008,input_schema21930_22009,input_checker21931_22010,output_checker21932_22011))
,null,null));
});})(in_QMARK_,s__21972__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22007,output_schema21929_22008,input_schema21930_22009,input_checker21931_22010,output_checker21932_22011))
;return iter__4377__auto__.call(null,s);
})()),iter__21971.call(null,cljs.core.rest.call(null,s__21972__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___22007,output_schema21929_22008,input_schema21930_22009,input_checker21931_22010,output_checker21932_22011))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___22007,output_schema21929_22008,input_schema21930_22009,input_checker21931_22010,output_checker21932_22011))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___22022 = output_checker21932_22011.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___22022))
{var error__6036__auto___22023 = temp__4126__auto___22022;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___22023)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22023,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21929_22008,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___22007,output_schema21929_22008,input_schema21930_22009,input_checker21931_22010,output_checker21932_22011))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema21929_22008,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21930_22009], null)));
var ufv___22054 = schema.utils.use_fn_validation;var output_schema22024_22055 = plumbing.fnk.schema.GraphIOSchemata;var input_schema22025_22056 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker22026_22057 = schema.core.checker.call(null,input_schema22025_22056);var output_checker22027_22058 = schema.core.checker.call(null,output_schema22024_22055);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___22054,output_schema22024_22055,input_schema22025_22056,input_checker22026_22057,output_checker22027_22058){
return (function sequence_schemata(G__22028,G__22029){var validate__6034__auto__ = ufv___22054.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___22059 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22028,G__22029], null);var temp__4126__auto___22060 = input_checker22026_22057.call(null,args__6035__auto___22059);if(cljs.core.truth_(temp__4126__auto___22060))
{var error__6036__auto___22061 = temp__4126__auto___22060;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___22061)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22061,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___22059,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22025_22056,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__22045 = G__22028;var vec__22047 = G__22045;var i1 = cljs.core.nth.call(null,vec__22047,(0),null);var o1 = cljs.core.nth.call(null,vec__22047,(1),null);var G__22046 = G__22029;var vec__22048 = G__22046;var k = cljs.core.nth.call(null,vec__22048,(0),null);var vec__22049 = cljs.core.nth.call(null,vec__22048,(1),null);var i2 = cljs.core.nth.call(null,vec__22049,(0),null);var o2 = cljs.core.nth.call(null,vec__22049,(1),null);var G__22045__$1 = G__22045;var G__22046__$1 = G__22046;while(true){
var vec__22050 = G__22045__$1;var i1__$1 = cljs.core.nth.call(null,vec__22050,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__22050,(1),null);var vec__22051 = G__22046__$1;var k__$1 = cljs.core.nth.call(null,vec__22051,(0),null);var vec__22052 = cljs.core.nth.call(null,vec__22051,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__22052,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__22052,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__22053 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__22053,(0),null);var unused = cljs.core.nth.call(null,vec__22053,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___22062 = output_checker22027_22058.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___22062))
{var error__6036__auto___22063 = temp__4126__auto___22062;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___22063)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22063,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22024_22055,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___22054,output_schema22024_22055,input_schema22025_22056,input_checker22026_22057,output_checker22027_22058))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema22024_22055,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22025_22056], null)));
