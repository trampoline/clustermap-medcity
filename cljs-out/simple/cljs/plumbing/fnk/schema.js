// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__21778 = p1__6064__6065__auto__;if(G__21778)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__21778.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__21778.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21778);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21778);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21779_SHARP_){return (cljs.core.val.call(null,p1__21779_SHARP_) > (1));
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
var vec__21781 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__21781,(0),null);var v = cljs.core.nth.call(null,vec__21781,(1),null);var p = vec__21781;if(cljs.core.truth_(p))
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
var ufv___21787 = schema.utils.use_fn_validation;var output_schema21782_21788 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema21783_21789 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker21784_21790 = schema.core.checker.call(null,input_schema21783_21789);var output_checker21785_21791 = schema.core.checker.call(null,output_schema21782_21788);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21787,output_schema21782_21788,input_schema21783_21789,input_checker21784_21790,output_checker21785_21791){
return (function unwrap_schema_form_key(G__21786){var validate__6034__auto__ = ufv___21787.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21792 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21786], null);var temp__4126__auto___21793 = input_checker21784_21790.call(null,args__6035__auto___21792);if(cljs.core.truth_(temp__4126__auto___21793))
{var error__6036__auto___21794 = temp__4126__auto___21793;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21794)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21794,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21792,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21783_21789,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__21786;while(true){
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
{var temp__4126__auto___21795 = output_checker21785_21791.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21795))
{var error__6036__auto___21796 = temp__4126__auto___21795;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21796)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21796,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21782_21788,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21787,output_schema21782_21788,input_schema21783_21789,input_checker21784_21790,output_checker21785_21791))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema21782_21788,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21783_21789], null)));
var ufv___21802 = schema.utils.use_fn_validation;var output_schema21797_21803 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema21798_21804 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21799_21805 = schema.core.checker.call(null,input_schema21798_21804);var output_checker21800_21806 = schema.core.checker.call(null,output_schema21797_21803);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21802,output_schema21797_21803,input_schema21798_21804,input_checker21799_21805,output_checker21800_21806){
return (function explicit_schema_key_map(G__21801){var validate__6034__auto__ = ufv___21802.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21807 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21801], null);var temp__4126__auto___21808 = input_checker21799_21805.call(null,args__6035__auto___21807);if(cljs.core.truth_(temp__4126__auto___21808))
{var error__6036__auto___21809 = temp__4126__auto___21808;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21809)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21809,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21807,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21798_21804,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21801;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21810 = output_checker21800_21806.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21810))
{var error__6036__auto___21811 = temp__4126__auto___21810;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21811)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21811,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21797_21803,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21802,output_schema21797_21803,input_schema21798_21804,input_checker21799_21805,output_checker21800_21806))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema21797_21803,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21798_21804], null)));
var ufv___21817 = schema.utils.use_fn_validation;var output_schema21812_21818 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema21813_21819 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21814_21820 = schema.core.checker.call(null,input_schema21813_21819);var output_checker21815_21821 = schema.core.checker.call(null,output_schema21812_21818);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21817,output_schema21812_21818,input_schema21813_21819,input_checker21814_21820,output_checker21815_21821){
return (function split_schema_keys(G__21816){var validate__6034__auto__ = ufv___21817.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21822 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21816], null);var temp__4126__auto___21823 = input_checker21814_21820.call(null,args__6035__auto___21822);if(cljs.core.truth_(temp__4126__auto___21823))
{var error__6036__auto___21824 = temp__4126__auto___21823;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21824)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21824,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21822,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21813_21819,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21816;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21825 = output_checker21815_21821.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21825))
{var error__6036__auto___21826 = temp__4126__auto___21825;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21826)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21826,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21812_21818,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21817,output_schema21812_21818,input_schema21813_21819,input_checker21814_21820,output_checker21815_21821))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema21812_21818,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21813_21819], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__21830){var vec__21831 = p__21830;var k = cljs.core.nth.call(null,vec__21831,(0),null);var v = cljs.core.nth.call(null,vec__21831,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__21832 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__21832,(0),null);var ov = cljs.core.nth.call(null,vec__21832,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__21833){
var key_project = cljs.core.first(arglist__21833);
arglist__21833 = cljs.core.next(arglist__21833);
var key_combine = cljs.core.first(arglist__21833);
arglist__21833 = cljs.core.next(arglist__21833);
var val_combine = cljs.core.first(arglist__21833);
var maps = cljs.core.rest(arglist__21833);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21841 = schema.utils.use_fn_validation;var output_schema21835_21842 = plumbing.fnk.schema.InputSchema;var input_schema21836_21843 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker21837_21844 = schema.core.checker.call(null,input_schema21836_21843);var output_checker21838_21845 = schema.core.checker.call(null,output_schema21835_21842);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21841,output_schema21835_21842,input_schema21836_21843,input_checker21837_21844,output_checker21838_21845){
return (function union_input_schemata(G__21839,G__21840){var validate__6034__auto__ = ufv___21841.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21839,G__21840], null);var temp__4126__auto___21847 = input_checker21837_21844.call(null,args__6035__auto___21846);if(cljs.core.truth_(temp__4126__auto___21847))
{var error__6036__auto___21848 = temp__4126__auto___21847;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21848)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21848,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21846,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21836_21843,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__21839;var i2 = G__21840;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___21841,output_schema21835_21842,input_schema21836_21843,input_checker21837_21844,output_checker21838_21845){
return (function (p1__21834_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__21834_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__21834_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___21841,output_schema21835_21842,input_schema21836_21843,input_checker21837_21844,output_checker21838_21845))
,((function (validate__6034__auto__,ufv___21841,output_schema21835_21842,input_schema21836_21843,input_checker21837_21844,output_checker21838_21845){
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
});})(validate__6034__auto__,ufv___21841,output_schema21835_21842,input_schema21836_21843,input_checker21837_21844,output_checker21838_21845))
,((function (validate__6034__auto__,ufv___21841,output_schema21835_21842,input_schema21836_21843,input_checker21837_21844,output_checker21838_21845){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___21841,output_schema21835_21842,input_schema21836_21843,input_checker21837_21844,output_checker21838_21845))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21849 = output_checker21838_21845.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21849))
{var error__6036__auto___21850 = temp__4126__auto___21849;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21850)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21850,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21835_21842,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21841,output_schema21835_21842,input_schema21836_21843,input_checker21837_21844,output_checker21838_21845))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema21835_21842,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21836_21843], null)));
var ufv___21856 = schema.utils.use_fn_validation;var output_schema21851_21857 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema21852_21858 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker21853_21859 = schema.core.checker.call(null,input_schema21852_21858);var output_checker21854_21860 = schema.core.checker.call(null,output_schema21851_21857);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21856,output_schema21851_21857,input_schema21852_21858,input_checker21853_21859,output_checker21854_21860){
return (function required_toplevel_keys(G__21855){var validate__6034__auto__ = ufv___21856.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21861 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21855], null);var temp__4126__auto___21862 = input_checker21853_21859.call(null,args__6035__auto___21861);if(cljs.core.truth_(temp__4126__auto___21862))
{var error__6036__auto___21863 = temp__4126__auto___21862;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21863)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21863,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21861,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21852_21858,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__21855;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___21856,output_schema21851_21857,input_schema21852_21858,input_checker21853_21859,output_checker21854_21860){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___21856,output_schema21851_21857,input_schema21852_21858,input_checker21853_21859,output_checker21854_21860))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21864 = output_checker21854_21860.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21864))
{var error__6036__auto___21865 = temp__4126__auto___21864;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21865)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21865,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21851_21857,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21856,output_schema21851_21857,input_schema21852_21858,input_checker21853_21859,output_checker21854_21860))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema21851_21857,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21852_21858], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21874(s__21875){return (new cljs.core.LazySeq(null,(function (){var s__21875__$1 = s__21875;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21875__$1);if(temp__4126__auto__)
{var s__21875__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21875__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21875__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21877 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21876 = (0);while(true){
if((i__21876 < size__4376__auto__))
{var vec__21880 = cljs.core._nth.call(null,c__4375__auto__,i__21876);var k = cljs.core.nth.call(null,vec__21880,(0),null);var v = cljs.core.nth.call(null,vec__21880,(1),null);cljs.core.chunk_append.call(null,b__21877,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__21882 = (i__21876 + (1));
i__21876 = G__21882;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21877),iter__21874.call(null,cljs.core.chunk_rest.call(null,s__21875__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21877),null);
}
} else
{var vec__21881 = cljs.core.first.call(null,s__21875__$2);var k = cljs.core.nth.call(null,vec__21881,(0),null);var v = cljs.core.nth.call(null,vec__21881,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__21874.call(null,cljs.core.rest.call(null,s__21875__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21891(s__21892){return (new cljs.core.LazySeq(null,(function (){var s__21892__$1 = s__21892;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21892__$1);if(temp__4126__auto__)
{var s__21892__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21892__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21892__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21894 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21893 = (0);while(true){
if((i__21893 < size__4376__auto__))
{var vec__21897 = cljs.core._nth.call(null,c__4375__auto__,i__21893);var k = cljs.core.nth.call(null,vec__21897,(0),null);var v = cljs.core.nth.call(null,vec__21897,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__21894,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__21899 = (i__21893 + (1));
i__21893 = G__21899;
continue;
}
} else
{{
var G__21900 = (i__21893 + (1));
i__21893 = G__21900;
continue;
}
}
} else
{{
var G__21901 = (i__21893 + (1));
i__21893 = G__21901;
continue;
}
}
} else
{{
var G__21902 = (i__21893 + (1));
i__21893 = G__21902;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21894),iter__21891.call(null,cljs.core.chunk_rest.call(null,s__21892__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21894),null);
}
} else
{var vec__21898 = cljs.core.first.call(null,s__21892__$2);var k = cljs.core.nth.call(null,vec__21898,(0),null);var v = cljs.core.nth.call(null,vec__21898,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21891.call(null,cljs.core.rest.call(null,s__21892__$2)));
} else
{{
var G__21903 = cljs.core.rest.call(null,s__21892__$2);
s__21892__$1 = G__21903;
continue;
}
}
} else
{{
var G__21904 = cljs.core.rest.call(null,s__21892__$2);
s__21892__$1 = G__21904;
continue;
}
}
} else
{{
var G__21905 = cljs.core.rest.call(null,s__21892__$2);
s__21892__$1 = G__21905;
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
var ufv___21928 = schema.utils.use_fn_validation;var output_schema21906_21929 = schema.core.Any;var input_schema21907_21930 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21908_21931 = schema.core.checker.call(null,input_schema21907_21930);var output_checker21909_21932 = schema.core.checker.call(null,output_schema21906_21929);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21928,output_schema21906_21929,input_schema21907_21930,input_checker21908_21931,output_checker21909_21932){
return (function compose_schemata(G__21910,G__21911){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___21933 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21910,G__21911], null);var temp__4126__auto___21934 = input_checker21908_21931.call(null,args__6035__auto___21933);if(cljs.core.truth_(temp__4126__auto___21934))
{var error__6036__auto___21935 = temp__4126__auto___21934;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21935)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21935,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21933,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21907_21930,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21922 = G__21910;var vec__21924 = G__21922;var i2 = cljs.core.nth.call(null,vec__21924,(0),null);var o2 = cljs.core.nth.call(null,vec__21924,(1),null);var G__21923 = G__21911;var vec__21925 = G__21923;var i1 = cljs.core.nth.call(null,vec__21925,(0),null);var o1 = cljs.core.nth.call(null,vec__21925,(1),null);var G__21922__$1 = G__21922;var G__21923__$1 = G__21923;while(true){
var vec__21926 = G__21922__$1;var i2__$1 = cljs.core.nth.call(null,vec__21926,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21926,(1),null);var vec__21927 = G__21923__$1;var i1__$1 = cljs.core.nth.call(null,vec__21927,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21927,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___21936 = output_checker21909_21932.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21936))
{var error__6036__auto___21937 = temp__4126__auto___21936;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21937)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21937,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21906_21929,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21928,output_schema21906_21929,input_schema21907_21930,input_checker21908_21931,output_checker21909_21932))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema21906_21929,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21907_21930], null)));
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
var ufv___22016 = schema.utils.use_fn_validation;var output_schema21938_22017 = schema.core.Any;var input_schema21939_22018 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker21940_22019 = schema.core.checker.call(null,input_schema21939_22018);var output_checker21941_22020 = schema.core.checker.call(null,output_schema21938_22017);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___22016,output_schema21938_22017,input_schema21939_22018,input_checker21940_22019,output_checker21941_22020){
return (function split_schema(G__21942,G__21943){var validate__6034__auto__ = ufv___22016.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___22021 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21942,G__21943], null);var temp__4126__auto___22022 = input_checker21940_22019.call(null,args__6035__auto___22021);if(cljs.core.truth_(temp__4126__auto___22022))
{var error__6036__auto___22023 = temp__4126__auto___22022;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___22023)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22023,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___22021,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21939_22018,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21942;var ks = G__21943;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___22016,output_schema21938_22017,input_schema21939_22018,input_checker21940_22019,output_checker21941_22020){
return (function iter__21980(s__21981){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___22016,output_schema21938_22017,input_schema21939_22018,input_checker21940_22019,output_checker21941_22020){
return (function (){var s__21981__$1 = s__21981;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21981__$1);if(temp__4126__auto__)
{var s__21981__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21981__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21981__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21983 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21982 = (0);while(true){
if((i__21982 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__21982);cljs.core.chunk_append.call(null,b__21983,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__21982,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21983,s__21981__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22016,output_schema21938_22017,input_schema21939_22018,input_checker21940_22019,output_checker21941_22020){
return (function iter__22000(s__22001){return (new cljs.core.LazySeq(null,((function (i__21982,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21983,s__21981__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22016,output_schema21938_22017,input_schema21939_22018,input_checker21940_22019,output_checker21941_22020){
return (function (){var s__22001__$1 = s__22001;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__22001__$1);if(temp__4126__auto____$1)
{var s__22001__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__22001__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__22001__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__22003 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__22002 = (0);while(true){
if((i__22002 < size__4376__auto____$1))
{var vec__22006 = cljs.core._nth.call(null,c__4375__auto____$1,i__22002);var k = cljs.core.nth.call(null,vec__22006,(0),null);var v = cljs.core.nth.call(null,vec__22006,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__22003,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22024 = (i__22002 + (1));
i__22002 = G__22024;
continue;
}
} else
{{
var G__22025 = (i__22002 + (1));
i__22002 = G__22025;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22003),iter__22000.call(null,cljs.core.chunk_rest.call(null,s__22001__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22003),null);
}
} else
{var vec__22007 = cljs.core.first.call(null,s__22001__$2);var k = cljs.core.nth.call(null,vec__22007,(0),null);var v = cljs.core.nth.call(null,vec__22007,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22000.call(null,cljs.core.rest.call(null,s__22001__$2)));
} else
{{
var G__22026 = cljs.core.rest.call(null,s__22001__$2);
s__22001__$1 = G__22026;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__21982,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21983,s__21981__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22016,output_schema21938_22017,input_schema21939_22018,input_checker21940_22019,output_checker21941_22020))
,null,null));
});})(i__21982,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21983,s__21981__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22016,output_schema21938_22017,input_schema21939_22018,input_checker21940_22019,output_checker21941_22020))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__22027 = (i__21982 + (1));
i__21982 = G__22027;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21983),iter__21980.call(null,cljs.core.chunk_rest.call(null,s__21981__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21983),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__21981__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__21981__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22016,output_schema21938_22017,input_schema21939_22018,input_checker21940_22019,output_checker21941_22020){
return (function iter__22008(s__22009){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21981__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22016,output_schema21938_22017,input_schema21939_22018,input_checker21940_22019,output_checker21941_22020){
return (function (){var s__22009__$1 = s__22009;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__22009__$1);if(temp__4126__auto____$1)
{var s__22009__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__22009__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22009__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22011 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22010 = (0);while(true){
if((i__22010 < size__4376__auto__))
{var vec__22014 = cljs.core._nth.call(null,c__4375__auto__,i__22010);var k = cljs.core.nth.call(null,vec__22014,(0),null);var v = cljs.core.nth.call(null,vec__22014,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__22011,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22028 = (i__22010 + (1));
i__22010 = G__22028;
continue;
}
} else
{{
var G__22029 = (i__22010 + (1));
i__22010 = G__22029;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22011),iter__22008.call(null,cljs.core.chunk_rest.call(null,s__22009__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22011),null);
}
} else
{var vec__22015 = cljs.core.first.call(null,s__22009__$2);var k = cljs.core.nth.call(null,vec__22015,(0),null);var v = cljs.core.nth.call(null,vec__22015,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22008.call(null,cljs.core.rest.call(null,s__22009__$2)));
} else
{{
var G__22030 = cljs.core.rest.call(null,s__22009__$2);
s__22009__$1 = G__22030;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__21981__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22016,output_schema21938_22017,input_schema21939_22018,input_checker21940_22019,output_checker21941_22020))
,null,null));
});})(in_QMARK_,s__21981__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___22016,output_schema21938_22017,input_schema21939_22018,input_checker21940_22019,output_checker21941_22020))
;return iter__4377__auto__.call(null,s);
})()),iter__21980.call(null,cljs.core.rest.call(null,s__21981__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___22016,output_schema21938_22017,input_schema21939_22018,input_checker21940_22019,output_checker21941_22020))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___22016,output_schema21938_22017,input_schema21939_22018,input_checker21940_22019,output_checker21941_22020))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___22031 = output_checker21941_22020.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___22031))
{var error__6036__auto___22032 = temp__4126__auto___22031;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___22032)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22032,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21938_22017,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___22016,output_schema21938_22017,input_schema21939_22018,input_checker21940_22019,output_checker21941_22020))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema21938_22017,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21939_22018], null)));
var ufv___22063 = schema.utils.use_fn_validation;var output_schema22033_22064 = plumbing.fnk.schema.GraphIOSchemata;var input_schema22034_22065 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker22035_22066 = schema.core.checker.call(null,input_schema22034_22065);var output_checker22036_22067 = schema.core.checker.call(null,output_schema22033_22064);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___22063,output_schema22033_22064,input_schema22034_22065,input_checker22035_22066,output_checker22036_22067){
return (function sequence_schemata(G__22037,G__22038){var validate__6034__auto__ = ufv___22063.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___22068 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22037,G__22038], null);var temp__4126__auto___22069 = input_checker22035_22066.call(null,args__6035__auto___22068);if(cljs.core.truth_(temp__4126__auto___22069))
{var error__6036__auto___22070 = temp__4126__auto___22069;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___22070)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22070,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___22068,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22034_22065,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__22054 = G__22037;var vec__22056 = G__22054;var i1 = cljs.core.nth.call(null,vec__22056,(0),null);var o1 = cljs.core.nth.call(null,vec__22056,(1),null);var G__22055 = G__22038;var vec__22057 = G__22055;var k = cljs.core.nth.call(null,vec__22057,(0),null);var vec__22058 = cljs.core.nth.call(null,vec__22057,(1),null);var i2 = cljs.core.nth.call(null,vec__22058,(0),null);var o2 = cljs.core.nth.call(null,vec__22058,(1),null);var G__22054__$1 = G__22054;var G__22055__$1 = G__22055;while(true){
var vec__22059 = G__22054__$1;var i1__$1 = cljs.core.nth.call(null,vec__22059,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__22059,(1),null);var vec__22060 = G__22055__$1;var k__$1 = cljs.core.nth.call(null,vec__22060,(0),null);var vec__22061 = cljs.core.nth.call(null,vec__22060,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__22061,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__22061,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__22062 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__22062,(0),null);var unused = cljs.core.nth.call(null,vec__22062,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___22071 = output_checker22036_22067.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___22071))
{var error__6036__auto___22072 = temp__4126__auto___22071;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___22072)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22072,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22033_22064,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___22063,output_schema22033_22064,input_schema22034_22065,input_checker22035_22066,output_checker22036_22067))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema22033_22064,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22034_22065], null)));
