(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: !0 });
  }, __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function")
      for (let key of __getOwnPropNames(from))
        !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
    mod
  ));

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/global-this.js
  var require_global_this = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/global-this.js"(exports, module) {
      "use strict";
      var check = function(it) {
        return it && it.Math === Math && it;
      };
      module.exports = // eslint-disable-next-line es/no-global-this -- safe
      check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
      check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
      /* @__PURE__ */ (function() {
        return this;
      })() || Function("return this")();
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/fails.js
  var require_fails = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/fails.js"(exports, module) {
      "use strict";
      module.exports = function(exec) {
        try {
          return !!exec();
        } catch {
          return !0;
        }
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/function-bind-native.js
  var require_function_bind_native = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/function-bind-native.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = !fails(function() {
        var test = function() {
        }.bind();
        return typeof test != "function" || test.hasOwnProperty("prototype");
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/function-apply.js
  var require_function_apply = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/function-apply.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native(), FunctionPrototype = Function.prototype, apply = FunctionPrototype.apply, call = FunctionPrototype.call;
      module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
        return call.apply(apply, arguments);
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/function-uncurry-this.js
  var require_function_uncurry_this = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/function-uncurry-this.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native(), FunctionPrototype = Function.prototype, call = FunctionPrototype.call, uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
      module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
        return function() {
          return call.apply(fn, arguments);
        };
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/classof-raw.js
  var require_classof_raw = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/classof-raw.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this(), toString = uncurryThis({}.toString), stringSlice = uncurryThis("".slice);
      module.exports = function(it) {
        return stringSlice(toString(it), 8, -1);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/function-uncurry-this-clause.js
  var require_function_uncurry_this_clause = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/function-uncurry-this-clause.js"(exports, module) {
      "use strict";
      var classofRaw = require_classof_raw(), uncurryThis = require_function_uncurry_this();
      module.exports = function(fn) {
        if (classofRaw(fn) === "Function") return uncurryThis(fn);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/is-callable.js
  var require_is_callable = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/is-callable.js"(exports, module) {
      "use strict";
      var documentAll = typeof document == "object" && document.all;
      module.exports = typeof documentAll > "u" && documentAll !== void 0 ? function(argument) {
        return typeof argument == "function" || argument === documentAll;
      } : function(argument) {
        return typeof argument == "function";
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/descriptors.js
  var require_descriptors = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/descriptors.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = !fails(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] !== 7;
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/function-call.js
  var require_function_call = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/function-call.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native(), call = Function.prototype.call;
      module.exports = NATIVE_BIND ? call.bind(call) : function() {
        return call.apply(call, arguments);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-property-is-enumerable.js
  var require_object_property_is_enumerable = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-property-is-enumerable.js"(exports) {
      "use strict";
      var $propertyIsEnumerable = {}.propertyIsEnumerable, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
      exports.f = NASHORN_BUG ? function(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : $propertyIsEnumerable;
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/create-property-descriptor.js
  var require_create_property_descriptor = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/create-property-descriptor.js"(exports, module) {
      "use strict";
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/indexed-object.js
  var require_indexed_object = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/indexed-object.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this(), fails = require_fails(), classof = require_classof_raw(), $Object = Object, split = uncurryThis("".split);
      module.exports = fails(function() {
        return !$Object("z").propertyIsEnumerable(0);
      }) ? function(it) {
        return classof(it) === "String" ? split(it, "") : $Object(it);
      } : $Object;
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/is-null-or-undefined.js
  var require_is_null_or_undefined = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/is-null-or-undefined.js"(exports, module) {
      "use strict";
      module.exports = function(it) {
        return it == null;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/require-object-coercible.js
  var require_require_object_coercible = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/require-object-coercible.js"(exports, module) {
      "use strict";
      var isNullOrUndefined = require_is_null_or_undefined(), $TypeError = TypeError;
      module.exports = function(it) {
        if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
        return it;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/to-indexed-object.js
  var require_to_indexed_object = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/to-indexed-object.js"(exports, module) {
      "use strict";
      var IndexedObject = require_indexed_object(), requireObjectCoercible = require_require_object_coercible();
      module.exports = function(it) {
        return IndexedObject(requireObjectCoercible(it));
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/is-object.js
  var require_is_object = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/is-object.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable();
      module.exports = function(it) {
        return typeof it == "object" ? it !== null : isCallable(it);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/path.js
  var require_path = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/path.js"(exports, module) {
      "use strict";
      module.exports = {};
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/get-built-in.js
  var require_get_built_in = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/get-built-in.js"(exports, module) {
      "use strict";
      var path = require_path(), globalThis2 = require_global_this(), isCallable = require_is_callable(), aFunction = function(variable) {
        return isCallable(variable) ? variable : void 0;
      };
      module.exports = function(namespace, method) {
        return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(globalThis2[namespace]) : path[namespace] && path[namespace][method] || globalThis2[namespace] && globalThis2[namespace][method];
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-is-prototype-of.js
  var require_object_is_prototype_of = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-is-prototype-of.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis({}.isPrototypeOf);
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/environment-user-agent.js
  var require_environment_user_agent = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/environment-user-agent.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this(), navigator = globalThis2.navigator, userAgent = navigator && navigator.userAgent;
      module.exports = userAgent ? String(userAgent) : "";
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/environment-v8-version.js
  var require_environment_v8_version = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/environment-v8-version.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this(), userAgent = require_environment_user_agent(), process = globalThis2.process, Deno2 = globalThis2.Deno, versions = process && process.versions || Deno2 && Deno2.version, v8 = versions && versions.v8, match, version;
      v8 && (match = v8.split("."), version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]));
      !version && userAgent && (match = userAgent.match(/Edge\/(\d+)/), (!match || match[1] >= 74) && (match = userAgent.match(/Chrome\/(\d+)/), match && (version = +match[1])));
      module.exports = version;
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/symbol-constructor-detection.js
  var require_symbol_constructor_detection = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/symbol-constructor-detection.js"(exports, module) {
      "use strict";
      var V8_VERSION = require_environment_v8_version(), fails = require_fails(), globalThis2 = require_global_this(), $String = globalThis2.String;
      module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
        var symbol = /* @__PURE__ */ Symbol("symbol detection");
        return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        !Symbol.sham && V8_VERSION && V8_VERSION < 41;
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/use-symbol-as-uid.js
  var require_use_symbol_as_uid = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/use-symbol-as-uid.js"(exports, module) {
      "use strict";
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/is-symbol.js
  var require_is_symbol = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/is-symbol.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in(), isCallable = require_is_callable(), isPrototypeOf = require_object_is_prototype_of(), USE_SYMBOL_AS_UID = require_use_symbol_as_uid(), $Object = Object;
      module.exports = USE_SYMBOL_AS_UID ? function(it) {
        return typeof it == "symbol";
      } : function(it) {
        var $Symbol = getBuiltIn("Symbol");
        return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/try-to-string.js
  var require_try_to_string = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/try-to-string.js"(exports, module) {
      "use strict";
      var $String = String;
      module.exports = function(argument) {
        try {
          return $String(argument);
        } catch {
          return "Object";
        }
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/a-callable.js
  var require_a_callable = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/a-callable.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable(), tryToString = require_try_to_string(), $TypeError = TypeError;
      module.exports = function(argument) {
        if (isCallable(argument)) return argument;
        throw new $TypeError(tryToString(argument) + " is not a function");
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/get-method.js
  var require_get_method = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/get-method.js"(exports, module) {
      "use strict";
      var aCallable = require_a_callable(), isNullOrUndefined = require_is_null_or_undefined();
      module.exports = function(V, P3) {
        var func = V[P3];
        return isNullOrUndefined(func) ? void 0 : aCallable(func);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/ordinary-to-primitive.js
  var require_ordinary_to_primitive = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/ordinary-to-primitive.js"(exports, module) {
      "use strict";
      var call = require_function_call(), isCallable = require_is_callable(), isObject = require_is_object(), $TypeError = TypeError;
      module.exports = function(input, pref) {
        var fn, val;
        if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)) || isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)) || pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
        throw new $TypeError("Can't convert object to primitive value");
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/is-pure.js
  var require_is_pure = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/is-pure.js"(exports, module) {
      "use strict";
      module.exports = !0;
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/define-global-property.js
  var require_define_global_property = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/define-global-property.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this(), defineProperty = Object.defineProperty;
      module.exports = function(key, value) {
        try {
          defineProperty(globalThis2, key, { value, configurable: !0, writable: !0 });
        } catch {
          globalThis2[key] = value;
        }
        return value;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/shared-store.js
  var require_shared_store = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/shared-store.js"(exports, module) {
      "use strict";
      var IS_PURE = require_is_pure(), globalThis2 = require_global_this(), defineGlobalProperty = require_define_global_property(), SHARED = "__core-js_shared__", store = module.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
      (store.versions || (store.versions = [])).push({
        version: "3.50.0",
        mode: IS_PURE ? "pure" : "global",
        copyright: "\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",
        license: "https://github.com/zloirock/core-js/blob/v3.50.0/LICENSE",
        source: "https://github.com/zloirock/core-js"
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/shared.js
  var require_shared = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/shared.js"(exports, module) {
      "use strict";
      var store = require_shared_store(), create = Object.create || Object;
      module.exports = function(key, value) {
        return store[key] || (store[key] = value || create(null));
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/to-object.js
  var require_to_object = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/to-object.js"(exports, module) {
      "use strict";
      var requireObjectCoercible = require_require_object_coercible(), $Object = Object;
      module.exports = function(argument) {
        return $Object(requireObjectCoercible(argument));
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/has-own-property.js
  var require_has_own_property = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/has-own-property.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this(), toObject = require_to_object(), hasOwnProperty = uncurryThis({}.hasOwnProperty);
      module.exports = Object.hasOwn || function(it, key) {
        return hasOwnProperty(toObject(it), key);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/uid.js
  var require_uid = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/uid.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this(), id = 0, postfix = Math.random(), toString = uncurryThis(1.1.toString);
      module.exports = function(key) {
        return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/well-known-symbol.js
  var require_well_known_symbol = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/well-known-symbol.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this(), shared = require_shared(), hasOwn = require_has_own_property(), uid = require_uid(), NATIVE_SYMBOL = require_symbol_constructor_detection(), USE_SYMBOL_AS_UID = require_use_symbol_as_uid(), Symbol2 = globalThis2.Symbol, WellKnownSymbolsStore = shared("wks"), createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2.for || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
      module.exports = function(name) {
        return hasOwn(WellKnownSymbolsStore, name) || (WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name)), WellKnownSymbolsStore[name];
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/to-primitive.js
  var require_to_primitive = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/to-primitive.js"(exports, module) {
      "use strict";
      var call = require_function_call(), isObject = require_is_object(), isSymbol = require_is_symbol(), getMethod = require_get_method(), ordinaryToPrimitive = require_ordinary_to_primitive(), wellKnownSymbol = require_well_known_symbol(), $TypeError = TypeError, TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
      module.exports = function(input, pref) {
        if (!isObject(input) || isSymbol(input)) return input;
        var exoticToPrim = getMethod(input, TO_PRIMITIVE), result;
        if (exoticToPrim) {
          if (pref === void 0 && (pref = "default"), result = call(exoticToPrim, input, pref), !isObject(result) || isSymbol(result)) return result;
          throw new $TypeError("Can't convert object to primitive value");
        }
        return pref === void 0 && (pref = "number"), ordinaryToPrimitive(input, pref);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/to-property-key.js
  var require_to_property_key = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/to-property-key.js"(exports, module) {
      "use strict";
      var toPrimitive = require_to_primitive(), isSymbol = require_is_symbol();
      module.exports = function(argument) {
        var key = toPrimitive(argument, "string");
        return isSymbol(key) ? key : key + "";
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/document-create-element.js
  var require_document_create_element = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/document-create-element.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this(), isObject = require_is_object(), document2 = globalThis2.document, EXISTS = isObject(document2) && isObject(document2.createElement);
      module.exports = function(it) {
        return EXISTS ? document2.createElement(it) : {};
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/ie8-dom-define.js
  var require_ie8_dom_define = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/ie8-dom-define.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors(), fails = require_fails(), createElement = require_document_create_element();
      module.exports = !DESCRIPTORS && !fails(function() {
        return Object.defineProperty(createElement("div"), "a", {
          get: function() {
            return 7;
          }
        }).a !== 7;
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-get-own-property-descriptor.js
  var require_object_get_own_property_descriptor = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-get-own-property-descriptor.js"(exports) {
      "use strict";
      var DESCRIPTORS = require_descriptors(), call = require_function_call(), propertyIsEnumerableModule = require_object_property_is_enumerable(), createPropertyDescriptor = require_create_property_descriptor(), toIndexedObject = require_to_indexed_object(), toPropertyKey = require_to_property_key(), hasOwn = require_has_own_property(), IE8_DOM_DEFINE = require_ie8_dom_define(), $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function(O, P3) {
        if (O = toIndexedObject(O), P3 = toPropertyKey(P3), IE8_DOM_DEFINE) try {
          return $getOwnPropertyDescriptor(O, P3);
        } catch {
        }
        if (hasOwn(O, P3)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P3), O[P3]);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/is-forced.js
  var require_is_forced = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/is-forced.js"(exports, module) {
      "use strict";
      var fails = require_fails(), isCallable = require_is_callable(), replacement = /#|\.prototype\./, isForced = function(feature, detection) {
        var value = data[normalize(feature)];
        return value === POLYFILL ? !0 : value === NATIVE ? !1 : isCallable(detection) ? fails(detection) : !!detection;
      }, normalize = isForced.normalize = function(string) {
        return String(string).replace(replacement, ".").toLowerCase();
      }, data = isForced.data = {}, NATIVE = isForced.NATIVE = "N", POLYFILL = isForced.POLYFILL = "P";
      module.exports = isForced;
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/function-bind-context.js
  var require_function_bind_context = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/function-bind-context.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this_clause(), aCallable = require_a_callable(), NATIVE_BIND = require_function_bind_native(), bind = uncurryThis(uncurryThis.bind);
      module.exports = function(fn, that) {
        return aCallable(fn), that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
          return fn.apply(that, arguments);
        };
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/v8-prototype-define-bug.js
  var require_v8_prototype_define_bug = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/v8-prototype-define-bug.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors(), fails = require_fails();
      module.exports = DESCRIPTORS && fails(function() {
        return Object.defineProperty(function() {
        }, "prototype", {
          value: 42,
          writable: !1
        }).prototype !== 42;
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/an-object.js
  var require_an_object = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/an-object.js"(exports, module) {
      "use strict";
      var isObject = require_is_object(), $String = String, $TypeError = TypeError;
      module.exports = function(argument) {
        if (isObject(argument)) return argument;
        throw new $TypeError($String(argument) + " is not an object");
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-define-property.js
  var require_object_define_property = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-define-property.js"(exports) {
      "use strict";
      var DESCRIPTORS = require_descriptors(), IE8_DOM_DEFINE = require_ie8_dom_define(), V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug(), anObject = require_an_object(), toPropertyKey = require_to_property_key(), $TypeError = TypeError, $defineProperty = Object.defineProperty, $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, ENUMERABLE = "enumerable", CONFIGURABLE = "configurable", WRITABLE = "writable";
      exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function(O, P3, Attributes) {
        if (anObject(O), P3 = toPropertyKey(P3), anObject(Attributes), typeof O == "function" && P3 === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
          var current = $getOwnPropertyDescriptor(O, P3);
          current && current[WRITABLE] && (O[P3] = Attributes.value, Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: !1
          });
        }
        return $defineProperty(O, P3, Attributes);
      } : $defineProperty : function(O, P3, Attributes) {
        if (anObject(O), P3 = toPropertyKey(P3), anObject(Attributes), IE8_DOM_DEFINE) try {
          return $defineProperty(O, P3, Attributes);
        } catch {
        }
        if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
        return "value" in Attributes && (O[P3] = Attributes.value), O;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/create-non-enumerable-property.js
  var require_create_non_enumerable_property = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/create-non-enumerable-property.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors(), definePropertyModule = require_object_define_property(), createPropertyDescriptor = require_create_property_descriptor();
      module.exports = DESCRIPTORS ? function(object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
      } : function(object, key, value) {
        return object[key] = value, object;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/export.js
  var require_export = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/export.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this(), apply = require_function_apply(), uncurryThis = require_function_uncurry_this_clause(), isCallable = require_is_callable(), getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f, isForced = require_is_forced(), path = require_path(), bind = require_function_bind_context(), createNonEnumerableProperty = require_create_non_enumerable_property(), hasOwn = require_has_own_property();
      require_shared_store();
      var wrapConstructor = function(NativeConstructor) {
        var Wrapper = function(a, b, c) {
          if (this instanceof Wrapper) {
            switch (arguments.length) {
              case 0:
                return new NativeConstructor();
              case 1:
                return new NativeConstructor(a);
              case 2:
                return new NativeConstructor(a, b);
            }
            return new NativeConstructor(a, b, c);
          }
          return apply(NativeConstructor, this, arguments);
        };
        return Wrapper.prototype = NativeConstructor.prototype, Wrapper;
      };
      module.exports = function(options, source) {
        var TARGET = options.target, GLOBAL = options.global, STATIC = options.stat, PROTO = options.proto, nativeSource = GLOBAL ? globalThis2 : STATIC ? globalThis2[TARGET] : globalThis2[TARGET] && globalThis2[TARGET].prototype, target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET], targetPrototype = target.prototype, FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE, key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
        for (key in source)
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced), USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key), targetProperty = target[key], USE_NATIVE && (options.dontCallGetSet ? (descriptor = getOwnPropertyDescriptor(nativeSource, key), nativeProperty = descriptor && descriptor.value) : nativeProperty = nativeSource[key]), sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key], !(!FORCED && !PROTO && typeof targetProperty == typeof sourceProperty) && (options.bind && USE_NATIVE ? resultProperty = bind(sourceProperty, globalThis2) : options.wrap && USE_NATIVE ? resultProperty = wrapConstructor(sourceProperty) : PROTO && isCallable(sourceProperty) ? resultProperty = uncurryThis(sourceProperty) : resultProperty = sourceProperty, (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) && createNonEnumerableProperty(resultProperty, "sham", !0), createNonEnumerableProperty(target, key, resultProperty), PROTO && (VIRTUAL_PROTOTYPE = TARGET + "Prototype", hasOwn(path, VIRTUAL_PROTOTYPE) || createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {}), createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty), options.real && targetPrototype && (FORCED || !targetPrototype[key]) && createNonEnumerableProperty(targetPrototype, key, sourceProperty)));
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/shared-key.js
  var require_shared_key = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/shared-key.js"(exports, module) {
      "use strict";
      var shared = require_shared(), uid = require_uid(), keys = shared("keys");
      module.exports = function(key) {
        return keys[key] || (keys[key] = uid(key));
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/correct-prototype-getter.js
  var require_correct_prototype_getter = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/correct-prototype-getter.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = !fails(function() {
        function F() {
        }
        return F.prototype.constructor = null, Object.getPrototypeOf(new F()) !== F.prototype;
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-get-prototype-of.js
  var require_object_get_prototype_of = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-get-prototype-of.js"(exports, module) {
      "use strict";
      var hasOwn = require_has_own_property(), isCallable = require_is_callable(), toObject = require_to_object(), sharedKey = require_shared_key(), CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter(), IE_PROTO = sharedKey("IE_PROTO"), $Object = Object, ObjectPrototype = $Object.prototype;
      module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
        var object = toObject(O);
        if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
        var constructor = object.constructor;
        return isCallable(constructor) && object instanceof constructor ? constructor.prototype : object instanceof $Object ? ObjectPrototype : null;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/function-uncurry-this-accessor.js
  var require_function_uncurry_this_accessor = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/function-uncurry-this-accessor.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this(), aCallable = require_a_callable();
      module.exports = function(object, key, method) {
        try {
          return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
        } catch {
        }
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/is-possible-prototype.js
  var require_is_possible_prototype = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/is-possible-prototype.js"(exports, module) {
      "use strict";
      var isObject = require_is_object();
      module.exports = function(argument) {
        return isObject(argument) || argument === null;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/a-possible-prototype.js
  var require_a_possible_prototype = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/a-possible-prototype.js"(exports, module) {
      "use strict";
      var isPossiblePrototype = require_is_possible_prototype(), $String = String, $TypeError = TypeError;
      module.exports = function(argument) {
        if (isPossiblePrototype(argument)) return argument;
        throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-set-prototype-of.js
  var require_object_set_prototype_of = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-set-prototype-of.js"(exports, module) {
      "use strict";
      var uncurryThisAccessor = require_function_uncurry_this_accessor(), isObject = require_is_object(), requireObjectCoercible = require_require_object_coercible(), aPossiblePrototype = require_a_possible_prototype();
      module.exports = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
        var CORRECT_SETTER = !1, test = {}, setter;
        try {
          setter = uncurryThisAccessor(Object.prototype, "__proto__", "set"), setter(test, []), CORRECT_SETTER = test instanceof Array;
        } catch {
        }
        return function(O, proto) {
          return requireObjectCoercible(O), aPossiblePrototype(proto), isObject(O) && (CORRECT_SETTER ? setter(O, proto) : O.__proto__ = proto), O;
        };
      })() : void 0);
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/math-trunc.js
  var require_math_trunc = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/math-trunc.js"(exports, module) {
      "use strict";
      var ceil = Math.ceil, floor = Math.floor;
      module.exports = Math.trunc || function(x) {
        var n = +x;
        return (n > 0 ? floor : ceil)(n);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/to-integer-or-infinity.js
  var require_to_integer_or_infinity = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/to-integer-or-infinity.js"(exports, module) {
      "use strict";
      var trunc = require_math_trunc();
      module.exports = function(argument) {
        var number = +argument;
        return number !== number || number === 0 ? 0 : trunc(number);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/to-absolute-index.js
  var require_to_absolute_index = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/to-absolute-index.js"(exports, module) {
      "use strict";
      var toIntegerOrInfinity = require_to_integer_or_infinity(), max = Math.max, min = Math.min;
      module.exports = function(index, length) {
        var integer = toIntegerOrInfinity(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/to-length.js
  var require_to_length = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/to-length.js"(exports, module) {
      "use strict";
      var toIntegerOrInfinity = require_to_integer_or_infinity(), min = Math.min;
      module.exports = function(argument) {
        var len = toIntegerOrInfinity(argument);
        return len > 0 ? min(len, 9007199254740991) : 0;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/length-of-array-like.js
  var require_length_of_array_like = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/length-of-array-like.js"(exports, module) {
      "use strict";
      var toLength = require_to_length();
      module.exports = function(obj) {
        return toLength(obj.length);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/array-includes.js
  var require_array_includes = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/array-includes.js"(exports, module) {
      "use strict";
      var toIndexedObject = require_to_indexed_object(), toAbsoluteIndex = require_to_absolute_index(), lengthOfArrayLike = require_length_of_array_like(), createMethod = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O = toIndexedObject($this), length = lengthOfArrayLike(O);
          if (length === 0) return !IS_INCLUDES && -1;
          var index = toAbsoluteIndex(fromIndex, length), value;
          if (IS_INCLUDES && el !== el) {
            for (; length > index; )
              if (value = O[index++], value !== value) return !0;
          } else for (; length > index; index++)
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
          return !IS_INCLUDES && -1;
        };
      };
      module.exports = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod(!0),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(!1)
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/hidden-keys.js
  var require_hidden_keys = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/hidden-keys.js"(exports, module) {
      "use strict";
      module.exports = {};
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-keys-internal.js
  var require_object_keys_internal = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-keys-internal.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this(), hasOwn = require_has_own_property(), toIndexedObject = require_to_indexed_object(), indexOf = require_array_includes().indexOf, hiddenKeys = require_hidden_keys(), push = uncurryThis([].push);
      module.exports = function(object, names) {
        var O = toIndexedObject(object), i = 0, result = [], key;
        for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
        for (; names.length > i; ) hasOwn(O, key = names[i++]) && (~indexOf(result, key) || push(result, key));
        return result;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/enum-bug-keys.js
  var require_enum_bug_keys = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/enum-bug-keys.js"(exports, module) {
      "use strict";
      module.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-get-own-property-names.js
  var require_object_get_own_property_names = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-get-own-property-names.js"(exports) {
      "use strict";
      var internalObjectKeys = require_object_keys_internal(), enumBugKeys = require_enum_bug_keys(), hiddenKeys = enumBugKeys.concat("length", "prototype");
      exports.f = Object.getOwnPropertyNames || function(O) {
        return internalObjectKeys(O, hiddenKeys);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-get-own-property-symbols.js
  var require_object_get_own_property_symbols = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-get-own-property-symbols.js"(exports) {
      "use strict";
      exports.f = Object.getOwnPropertySymbols;
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/own-keys.js
  var require_own_keys = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/own-keys.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in(), uncurryThis = require_function_uncurry_this(), getOwnPropertyNamesModule = require_object_get_own_property_names(), getOwnPropertySymbolsModule = require_object_get_own_property_symbols(), anObject = require_an_object(), concat = uncurryThis([].concat);
      module.exports = getBuiltIn("Reflect", "ownKeys") || function(it) {
        var keys = getOwnPropertyNamesModule.f(anObject(it)), getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/copy-constructor-properties.js
  var require_copy_constructor_properties = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/copy-constructor-properties.js"(exports, module) {
      "use strict";
      var hasOwn = require_has_own_property(), ownKeys = require_own_keys(), getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor(), definePropertyModule = require_object_define_property();
      module.exports = function(target, source, exceptions) {
        for (var keys = ownKeys(source), defineProperty = definePropertyModule.f, getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f, i = 0; i < keys.length; i++) {
          var key = keys[i];
          !hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key)) && defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-keys.js
  var require_object_keys = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-keys.js"(exports, module) {
      "use strict";
      var internalObjectKeys = require_object_keys_internal(), enumBugKeys = require_enum_bug_keys();
      module.exports = Object.keys || function(O) {
        return internalObjectKeys(O, enumBugKeys);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-define-properties.js
  var require_object_define_properties = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-define-properties.js"(exports) {
      "use strict";
      var DESCRIPTORS = require_descriptors(), V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug(), definePropertyModule = require_object_define_property(), anObject = require_an_object(), toIndexedObject = require_to_indexed_object(), objectKeys = require_object_keys();
      exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function(O, Properties) {
        anObject(O);
        for (var props = toIndexedObject(Properties), keys = objectKeys(Properties), length = keys.length, index = 0, key; length > index; ) definePropertyModule.f(O, key = keys[index++], props[key]);
        return O;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/html.js
  var require_html = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/html.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      module.exports = getBuiltIn("document", "documentElement");
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-create.js
  var require_object_create = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-create.js"(exports, module) {
      "use strict";
      var anObject = require_an_object(), definePropertiesModule = require_object_define_properties(), enumBugKeys = require_enum_bug_keys(), hiddenKeys = require_hidden_keys(), html = require_html(), documentCreateElement = require_document_create_element(), sharedKey = require_shared_key(), GT = ">", LT = "<", PROTOTYPE = "prototype", SCRIPT = "script", IE_PROTO = sharedKey("IE_PROTO"), EmptyConstructor = function() {
      }, scriptTag = function(content) {
        return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
      }, NullProtoObjectViaActiveX = function(activeXDocument2) {
        activeXDocument2.write(scriptTag("")), activeXDocument2.close();
        var temp = activeXDocument2.parentWindow.Object;
        return activeXDocument2 = null, temp;
      }, NullProtoObjectViaIFrame = function() {
        var iframe = documentCreateElement("iframe"), JS = "java" + SCRIPT + ":", iframeDocument;
        return iframe.style.display = "none", html.appendChild(iframe), iframe.src = String(JS), iframeDocument = iframe.contentWindow.document, iframeDocument.open(), iframeDocument.write(scriptTag("document.F=Object")), iframeDocument.close(), iframeDocument.F;
      }, activeXDocument, NullProtoObject = function() {
        try {
          activeXDocument = new ActiveXObject("htmlfile");
        } catch {
        }
        NullProtoObject = typeof document < "u" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
        for (var length = enumBugKeys.length; length--; ) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        return NullProtoObject();
      };
      hiddenKeys[IE_PROTO] = !0;
      module.exports = Object.create || function(O, Properties) {
        var result;
        return O !== null ? (EmptyConstructor[PROTOTYPE] = anObject(O), result = new EmptyConstructor(), EmptyConstructor[PROTOTYPE] = null, result[IE_PROTO] = O) : result = NullProtoObject(), Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/install-error-cause.js
  var require_install_error_cause = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/install-error-cause.js"(exports, module) {
      "use strict";
      var isObject = require_is_object(), createNonEnumerableProperty = require_create_non_enumerable_property();
      module.exports = function(O, options) {
        isObject(options) && "cause" in options && createNonEnumerableProperty(O, "cause", options.cause);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/error-stack-clear.js
  var require_error_stack_clear = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/error-stack-clear.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this(), $Error = Error, replace = uncurryThis("".replace), TEST = (function(arg) {
        return String(new $Error(arg).stack);
      })("zxcasd"), V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/, IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
      module.exports = function(stack, dropEntries) {
        if (IS_V8_OR_CHAKRA_STACK && typeof stack == "string" && !$Error.prepareStackTrace)
          for (; dropEntries--; ) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, "");
        return stack;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/error-stack-installable.js
  var require_error_stack_installable = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/error-stack-installable.js"(exports, module) {
      "use strict";
      var fails = require_fails(), createPropertyDescriptor = require_create_property_descriptor();
      module.exports = !fails(function() {
        var error = new Error("a");
        return "stack" in error ? (Object.defineProperty(error, "stack", createPropertyDescriptor(1, 7)), error.stack !== 7) : !0;
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/error-stack-install.js
  var require_error_stack_install = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/error-stack-install.js"(exports, module) {
      "use strict";
      var createNonEnumerableProperty = require_create_non_enumerable_property(), clearErrorStack = require_error_stack_clear(), ERROR_STACK_INSTALLABLE = require_error_stack_installable(), captureStackTrace = Error.captureStackTrace;
      module.exports = function(error, C, stack, dropEntries) {
        ERROR_STACK_INSTALLABLE && (captureStackTrace ? captureStackTrace(error, C) : createNonEnumerableProperty(error, "stack", clearErrorStack(stack, dropEntries)));
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/iterators.js
  var require_iterators = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/iterators.js"(exports, module) {
      "use strict";
      module.exports = Object.create ? /* @__PURE__ */ Object.create(null) : {};
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/is-array-iterator-method.js
  var require_is_array_iterator_method = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/is-array-iterator-method.js"(exports, module) {
      "use strict";
      var wellKnownSymbol = require_well_known_symbol(), Iterators = require_iterators(), ITERATOR = wellKnownSymbol("iterator"), ArrayPrototype = Array.prototype;
      module.exports = function(it) {
        return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/to-string-tag-support.js
  var require_to_string_tag_support = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/to-string-tag-support.js"(exports, module) {
      "use strict";
      var wellKnownSymbol = require_well_known_symbol(), TO_STRING_TAG = wellKnownSymbol("toStringTag"), test = {};
      test[TO_STRING_TAG] = "z";
      module.exports = String(test) === "[object z]";
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/classof.js
  var require_classof = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/classof.js"(exports, module) {
      "use strict";
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support(), isCallable = require_is_callable(), classofRaw = require_classof_raw(), wellKnownSymbol = require_well_known_symbol(), TO_STRING_TAG = wellKnownSymbol("toStringTag"), $Object = Object, CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ (function() {
        return arguments;
      })()) === "Arguments", tryGet = function(it, key) {
        try {
          return it[key];
        } catch {
        }
      };
      module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
        var O, tag, result;
        return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/get-internal-iterator.js
  var require_get_internal_iterator = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/get-internal-iterator.js"(exports, module) {
      "use strict";
      var classof = require_classof(), hasOwn = require_has_own_property(), Iterators = require_iterators();
      module.exports = function(it) {
        var klass = classof(it);
        return klass === "Arguments" && (klass = "Array"), hasOwn(Iterators, klass) ? Iterators[klass] : void 0;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/get-iterator-method-internal.js
  var require_get_iterator_method_internal = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/get-iterator-method-internal.js"(exports, module) {
      "use strict";
      var getMethod = require_get_method(), isNullOrUndefined = require_is_null_or_undefined(), getInternalIterator = require_get_internal_iterator(), wellKnownSymbol = require_well_known_symbol(), ITERATOR = wellKnownSymbol("iterator");
      module.exports = function(it) {
        if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || getInternalIterator(it);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/get-iterator-internal.js
  var require_get_iterator_internal = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/get-iterator-internal.js"(exports, module) {
      "use strict";
      var call = require_function_call(), isCallable = require_is_callable(), anObject = require_an_object(), tryToString = require_try_to_string(), getIteratorMethod = require_get_iterator_method_internal(), $TypeError = TypeError;
      module.exports = function(argument, usingIterator) {
        var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
        if (isCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
        throw new $TypeError(tryToString(argument) + " is not iterable");
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/iterator-close.js
  var require_iterator_close = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/iterator-close.js"(exports, module) {
      "use strict";
      var call = require_function_call(), anObject = require_an_object(), getMethod = require_get_method();
      module.exports = function(iterator, kind, value) {
        var innerResult, innerError;
        anObject(iterator);
        try {
          if (innerResult = getMethod(iterator, "return"), !innerResult) {
            if (kind === "throw") throw value;
            return value;
          }
          innerResult = call(innerResult, iterator);
        } catch (error) {
          innerError = !0, innerResult = error;
        }
        if (kind === "throw") throw value;
        if (innerError) throw innerResult;
        return anObject(innerResult), value;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/iterate.js
  var require_iterate = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/iterate.js"(exports, module) {
      "use strict";
      var bind = require_function_bind_context(), call = require_function_call(), anObject = require_an_object(), tryToString = require_try_to_string(), isArrayIteratorMethod = require_is_array_iterator_method(), lengthOfArrayLike = require_length_of_array_like(), isPrototypeOf = require_object_is_prototype_of(), getIterator = require_get_iterator_internal(), getIteratorMethod = require_get_iterator_method_internal(), iteratorClose = require_iterator_close(), $TypeError = TypeError, Result = function(stopped, result) {
        this.stopped = stopped, this.result = result;
      }, ResultPrototype = Result.prototype;
      module.exports = function(iterable, unboundFunction, options) {
        var that = options && options.that, AS_ENTRIES = !!(options && options.AS_ENTRIES), IS_RECORD = !!(options && options.IS_RECORD), IS_ITERATOR = !!(options && options.IS_ITERATOR), INTERRUPTED = !!(options && options.INTERRUPTED), fn = bind(unboundFunction, that), iterator, iterFn, index, length, result, next, step, stop = function(condition) {
          var $iterator = iterator;
          return iterator = void 0, $iterator && iteratorClose($iterator, "normal"), new Result(!0, condition);
        }, callFn = function(value2) {
          return AS_ENTRIES ? (anObject(value2), INTERRUPTED ? fn(value2[0], value2[1], stop) : fn(value2[0], value2[1])) : INTERRUPTED ? fn(value2, stop) : fn(value2);
        };
        if (IS_RECORD)
          iterator = iterable.iterator;
        else if (IS_ITERATOR)
          iterator = iterable;
        else {
          if (iterFn = getIteratorMethod(iterable), !iterFn) throw new $TypeError(tryToString(iterable) + " is not iterable");
          if (isArrayIteratorMethod(iterFn)) {
            for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++)
              if (result = callFn(iterable[index]), result && isPrototypeOf(ResultPrototype, result)) return result;
            return new Result(!1);
          }
          iterator = getIterator(iterable, iterFn);
        }
        for (next = IS_RECORD ? iterable.next : iterator.next; !(step = call(next, iterator)).done; ) {
          var value = step.value;
          try {
            result = callFn(value);
          } catch (error) {
            if (iterator) iteratorClose(iterator, "throw", error);
            else throw error;
          }
          if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
        }
        return new Result(!1);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/to-string.js
  var require_to_string = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/to-string.js"(exports, module) {
      "use strict";
      var classof = require_classof(), $String = String;
      module.exports = function(argument) {
        if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
        return $String(argument);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/normalize-string-argument.js
  var require_normalize_string_argument = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/normalize-string-argument.js"(exports, module) {
      "use strict";
      var toString = require_to_string();
      module.exports = function(argument, $default) {
        return argument === void 0 ? arguments.length < 2 ? "" : $default : toString(argument);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.aggregate-error.constructor.js
  var require_es_aggregate_error_constructor = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.aggregate-error.constructor.js"() {
      "use strict";
      var $ = require_export(), isPrototypeOf = require_object_is_prototype_of(), getPrototypeOf = require_object_get_prototype_of(), setPrototypeOf = require_object_set_prototype_of(), copyConstructorProperties = require_copy_constructor_properties(), create = require_object_create(), createNonEnumerableProperty = require_create_non_enumerable_property(), createPropertyDescriptor = require_create_property_descriptor(), installErrorCause = require_install_error_cause(), installErrorStack = require_error_stack_install(), iterate = require_iterate(), normalizeStringArgument = require_normalize_string_argument(), wellKnownSymbol = require_well_known_symbol(), TO_STRING_TAG = wellKnownSymbol("toStringTag"), $Error = Error, push = [].push, $AggregateError = function(errors, message) {
        var isInstance = isPrototypeOf(AggregateErrorPrototype, this), that;
        setPrototypeOf ? that = setPrototypeOf(new $Error(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype) : (that = isInstance ? this : create(AggregateErrorPrototype), createNonEnumerableProperty(that, TO_STRING_TAG, "Error")), message !== void 0 && createNonEnumerableProperty(that, "message", normalizeStringArgument(message)), installErrorStack(that, $AggregateError, that.stack, 1), arguments.length > 2 && installErrorCause(that, arguments[2]);
        var errorsArray = [];
        return iterate(errors, push, { that: errorsArray }), createNonEnumerableProperty(that, "errors", errorsArray), that;
      };
      setPrototypeOf ? setPrototypeOf($AggregateError, $Error) : copyConstructorProperties($AggregateError, $Error, { name: !0 });
      var AggregateErrorPrototype = $AggregateError.prototype = create($Error.prototype, {
        constructor: createPropertyDescriptor(1, $AggregateError),
        message: createPropertyDescriptor(1, ""),
        name: createPropertyDescriptor(1, "AggregateError")
      });
      $({ global: !0, constructor: !0, arity: 2 }, {
        AggregateError: $AggregateError
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.aggregate-error.js
  var require_es_aggregate_error = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.aggregate-error.js"() {
      "use strict";
      require_es_aggregate_error_constructor();
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/add-to-unscopables.js
  var require_add_to_unscopables = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/add-to-unscopables.js"(exports, module) {
      "use strict";
      module.exports = function() {
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/weak-map-basic-detection.js
  var require_weak_map_basic_detection = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/weak-map-basic-detection.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this(), isCallable = require_is_callable(), WeakMap = globalThis2.WeakMap;
      module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/internal-state.js
  var require_internal_state = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/internal-state.js"(exports, module) {
      "use strict";
      var NATIVE_WEAK_MAP = require_weak_map_basic_detection(), globalThis2 = require_global_this(), isObject = require_is_object(), createNonEnumerableProperty = require_create_non_enumerable_property(), hasOwn = require_has_own_property(), shared = require_shared_store(), sharedKey = require_shared_key(), hiddenKeys = require_hidden_keys(), OBJECT_ALREADY_INITIALIZED = "Object already initialized", TypeError2 = globalThis2.TypeError, WeakMap = globalThis2.WeakMap, set, get, has, enforce = function(it) {
        return has(it) ? get(it) : set(it, {});
      }, getterFor = function(TYPE) {
        return function(it) {
          var state;
          if (!isObject(it) || (state = get(it)).type !== TYPE)
            throw new TypeError2("Incompatible receiver, " + TYPE + " required");
          return state;
        };
      };
      NATIVE_WEAK_MAP || shared.state ? (store = shared.state || (shared.state = new WeakMap()), store.get = store.get, store.has = store.has, store.set = store.set, set = function(it, metadata) {
        if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        return metadata.facade = it, store.set(it, metadata), metadata;
      }, get = function(it) {
        return store.get(it) || {};
      }, has = function(it) {
        return store.has(it);
      }) : (STATE = sharedKey("state"), hiddenKeys[STATE] = !0, set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        return metadata.facade = it, createNonEnumerableProperty(it, STATE, metadata), metadata;
      }, get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      }, has = function(it) {
        return hasOwn(it, STATE);
      });
      var store, STATE;
      module.exports = {
        set,
        get,
        has,
        enforce,
        getterFor
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/function-name.js
  var require_function_name = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/function-name.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors(), hasOwn = require_has_own_property(), FunctionPrototype = Function.prototype, getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor, EXISTS = hasOwn(FunctionPrototype, "name"), PROPER = EXISTS && function() {
      }.name === "something", CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
      module.exports = {
        EXISTS,
        PROPER,
        CONFIGURABLE
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/define-built-in.js
  var require_define_built_in = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/define-built-in.js"(exports, module) {
      "use strict";
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      module.exports = function(target, key, value, options) {
        return options && options.enumerable ? target[key] = value : createNonEnumerableProperty(target, key, value), target;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/iterators-core.js
  var require_iterators_core = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/iterators-core.js"(exports, module) {
      "use strict";
      var fails = require_fails(), isCallable = require_is_callable(), isObject = require_is_object(), create = require_object_create(), getPrototypeOf = require_object_get_prototype_of(), defineBuiltIn = require_define_built_in(), wellKnownSymbol = require_well_known_symbol(), IS_PURE = require_is_pure(), ITERATOR = wellKnownSymbol("iterator"), BUGGY_SAFARI_ITERATORS = !1, IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
      [].keys && (arrayIterator = [].keys(), "next" in arrayIterator ? (PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator)), PrototypeOfArrayIteratorPrototype !== Object.prototype && (IteratorPrototype = PrototypeOfArrayIteratorPrototype)) : BUGGY_SAFARI_ITERATORS = !0);
      var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function() {
        var test = {};
        return IteratorPrototype[ITERATOR].call(test) !== test;
      });
      NEW_ITERATOR_PROTOTYPE ? IteratorPrototype = {} : IS_PURE && (IteratorPrototype = create(IteratorPrototype));
      isCallable(IteratorPrototype[ITERATOR]) || defineBuiltIn(IteratorPrototype, ITERATOR, function() {
        return this;
      });
      module.exports = {
        IteratorPrototype,
        BUGGY_SAFARI_ITERATORS
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-to-string.js
  var require_object_to_string = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/object-to-string.js"(exports, module) {
      "use strict";
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support(), classof = require_classof();
      module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function() {
        return "[object " + classof(this) + "]";
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/set-to-string-tag.js
  var require_set_to_string_tag = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/set-to-string-tag.js"(exports, module) {
      "use strict";
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support(), defineProperty = require_object_define_property().f, createNonEnumerableProperty = require_create_non_enumerable_property(), hasOwn = require_has_own_property(), toString = require_object_to_string(), wellKnownSymbol = require_well_known_symbol(), TO_STRING_TAG = wellKnownSymbol("toStringTag");
      module.exports = function(it, TAG, STATIC, SET_METHOD) {
        var target = STATIC ? it : it && it.prototype;
        target && (hasOwn(target, TO_STRING_TAG) || defineProperty(target, TO_STRING_TAG, { configurable: !0, value: TAG }), SET_METHOD && !TO_STRING_TAG_SUPPORT && createNonEnumerableProperty(target, "toString", toString));
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/iterator-create-constructor.js
  var require_iterator_create_constructor = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/iterator-create-constructor.js"(exports, module) {
      "use strict";
      var IteratorPrototype = require_iterators_core().IteratorPrototype, create = require_object_create(), createPropertyDescriptor = require_create_property_descriptor(), setToStringTag = require_set_to_string_tag(), Iterators = require_iterators(), returnThis = function() {
        return this;
      };
      module.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
        var TO_STRING_TAG = NAME + " Iterator";
        return IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) }), setToStringTag(IteratorConstructor, TO_STRING_TAG, !1, !0), Iterators[TO_STRING_TAG] = returnThis, IteratorConstructor;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/iterator-define.js
  var require_iterator_define = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/iterator-define.js"(exports, module) {
      "use strict";
      var $ = require_export(), call = require_function_call(), IS_PURE = require_is_pure(), FunctionName = require_function_name(), isCallable = require_is_callable(), createIteratorConstructor = require_iterator_create_constructor(), getPrototypeOf = require_object_get_prototype_of(), setPrototypeOf = require_object_set_prototype_of(), setToStringTag = require_set_to_string_tag(), createNonEnumerableProperty = require_create_non_enumerable_property(), defineBuiltIn = require_define_built_in(), wellKnownSymbol = require_well_known_symbol(), Iterators = require_iterators(), IteratorsCore = require_iterators_core(), PROPER_FUNCTION_NAME = FunctionName.PROPER, CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE, IteratorPrototype = IteratorsCore.IteratorPrototype, BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS, ITERATOR = wellKnownSymbol("iterator"), KEYS = "keys", VALUES = "values", ENTRIES = "entries", returnThis = function() {
        return this;
      };
      module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
        createIteratorConstructor(IteratorConstructor, NAME, next);
        var getIterationMethod = function(KIND) {
          if (KIND === DEFAULT && defaultIterator) return defaultIterator;
          if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];
          switch (KIND) {
            case KEYS:
              return function() {
                return new IteratorConstructor(this, KIND);
              };
            case VALUES:
              return function() {
                return new IteratorConstructor(this, KIND);
              };
            case ENTRIES:
              return function() {
                return new IteratorConstructor(this, KIND);
              };
          }
          return function() {
            return new IteratorConstructor(this);
          };
        }, TO_STRING_TAG = NAME + " Iterator", INCORRECT_VALUES_NAME = !1, IterablePrototype = Iterable.prototype, nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT], defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT), anyNativeIterator = NAME === "Array" && IterablePrototype.entries || nativeIterator, CurrentIteratorPrototype, methods, KEY;
        if (anyNativeIterator && (CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable())), CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next && (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype && (setPrototypeOf ? setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype) : isCallable(CurrentIteratorPrototype[ITERATOR]) || defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis)), setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, !0, !0), IS_PURE && (Iterators[TO_STRING_TAG] = returnThis))), PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES && (!IS_PURE && CONFIGURABLE_FUNCTION_NAME ? createNonEnumerableProperty(IterablePrototype, "name", VALUES) : (INCORRECT_VALUES_NAME = !0, defaultIterator = function() {
          return call(nativeIterator, this);
        })), DEFAULT)
          if (methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
          }, FORCED) for (KEY in methods)
            (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) && defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
          else $({ target: NAME, proto: !0, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
        return (!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator && defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT }), Iterators[NAME] = defaultIterator, methods;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/create-iter-result-object.js
  var require_create_iter_result_object = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/create-iter-result-object.js"(exports, module) {
      "use strict";
      module.exports = function(value, done) {
        return { value, done };
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.array.iterator.js
  var require_es_array_iterator = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.array.iterator.js"(exports, module) {
      "use strict";
      var toIndexedObject = require_to_indexed_object(), addToUnscopables = require_add_to_unscopables(), Iterators = require_iterators(), InternalStateModule = require_internal_state(), defineProperty = require_object_define_property().f, defineIterator = require_iterator_define(), createIterResultObject = require_create_iter_result_object(), IS_PURE = require_is_pure(), DESCRIPTORS = require_descriptors(), ARRAY_ITERATOR = "Array Iterator", setInternalState = InternalStateModule.set, getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
      module.exports = defineIterator(Array, "Array", function(iterated, kind) {
        setInternalState(this, {
          type: ARRAY_ITERATOR,
          target: toIndexedObject(iterated),
          // target
          index: 0,
          // next index
          kind
          // kind
        });
      }, function() {
        var state = getInternalState(this), target = state.target, index = state.index++;
        if (!target || index >= target.length)
          return state.target = null, createIterResultObject(void 0, !0);
        switch (state.kind) {
          case "keys":
            return createIterResultObject(index, !1);
          case "values":
            return createIterResultObject(target[index], !1);
        }
        return createIterResultObject([index, target[index]], !1);
      }, "values");
      var values = Iterators.Arguments = Iterators.Array;
      addToUnscopables("keys");
      addToUnscopables("values");
      addToUnscopables("entries");
      if (!IS_PURE && DESCRIPTORS && values.name !== "values") try {
        defineProperty(values, "name", { value: "values" });
      } catch {
      }
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.object.to-string.js
  var require_es_object_to_string = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.object.to-string.js"() {
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/environment.js
  var require_environment = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/environment.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this(), userAgent = require_environment_user_agent(), classof = require_classof_raw(), userAgentStartsWith = function(string) {
        return userAgent.slice(0, string.length) === string;
      };
      module.exports = (function() {
        return userAgentStartsWith("Bun/") ? "BUN" : userAgentStartsWith("Cloudflare-Workers") ? "CLOUDFLARE" : userAgentStartsWith("Deno/") ? "DENO" : userAgentStartsWith("Node.js/") ? "NODE" : globalThis2.Bun && typeof Bun.version == "string" ? "BUN" : globalThis2.Deno && typeof Deno.version == "object" ? "DENO" : classof(globalThis2.process) === "process" ? "NODE" : globalThis2.window && globalThis2.document ? "BROWSER" : "REST";
      })();
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/environment-is-node.js
  var require_environment_is_node = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/environment-is-node.js"(exports, module) {
      "use strict";
      var ENVIRONMENT = require_environment();
      module.exports = ENVIRONMENT === "NODE";
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/define-built-in-accessor.js
  var require_define_built_in_accessor = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/define-built-in-accessor.js"(exports, module) {
      "use strict";
      var defineProperty = require_object_define_property();
      module.exports = function(target, name, descriptor) {
        return defineProperty.f(target, name, descriptor);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/set-species.js
  var require_set_species = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/set-species.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in(), defineBuiltInAccessor = require_define_built_in_accessor(), wellKnownSymbol = require_well_known_symbol(), DESCRIPTORS = require_descriptors(), SPECIES = wellKnownSymbol("species");
      module.exports = function(CONSTRUCTOR_NAME) {
        var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
        DESCRIPTORS && Constructor && !Constructor[SPECIES] && defineBuiltInAccessor(Constructor, SPECIES, {
          configurable: !0,
          get: function() {
            return this;
          }
        });
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/an-instance.js
  var require_an_instance = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/an-instance.js"(exports, module) {
      "use strict";
      var isPrototypeOf = require_object_is_prototype_of(), $TypeError = TypeError;
      module.exports = function(it, Prototype) {
        if (isPrototypeOf(Prototype, it)) return it;
        throw new $TypeError("Incorrect invocation");
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/inspect-source.js
  var require_inspect_source = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/inspect-source.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this(), isCallable = require_is_callable(), store = require_shared_store(), functionToString = uncurryThis(Function.toString);
      isCallable(store.inspectSource) || (store.inspectSource = function(it) {
        return functionToString(it);
      });
      module.exports = store.inspectSource;
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/is-constructor.js
  var require_is_constructor = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/is-constructor.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this(), fails = require_fails(), isCallable = require_is_callable(), classof = require_classof(), getBuiltIn = require_get_built_in(), inspectSource = require_inspect_source(), noop = function() {
      }, construct = getBuiltIn("Reflect", "construct"), constructorRegExp = /^\s*(?:class|function)\b/, exec = uncurryThis(constructorRegExp.exec), INCORRECT_TO_STRING = !constructorRegExp.test(noop), isConstructorModern = function(argument) {
        if (!isCallable(argument)) return !1;
        try {
          return construct(noop, [], argument), !0;
        } catch {
          return !1;
        }
      }, isConstructorLegacy = function(argument) {
        if (!isCallable(argument)) return !1;
        switch (classof(argument)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
        } catch {
          return !0;
        }
      };
      isConstructorLegacy.sham = !0;
      module.exports = !construct || fails(function() {
        var called;
        return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
          called = !0;
        }) || called;
      }) ? isConstructorLegacy : isConstructorModern;
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/a-constructor.js
  var require_a_constructor = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/a-constructor.js"(exports, module) {
      "use strict";
      var isConstructor = require_is_constructor(), tryToString = require_try_to_string(), $TypeError = TypeError;
      module.exports = function(argument) {
        if (isConstructor(argument)) return argument;
        throw new $TypeError(tryToString(argument) + " is not a constructor");
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/species-constructor.js
  var require_species_constructor = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/species-constructor.js"(exports, module) {
      "use strict";
      var anObject = require_an_object(), aConstructor = require_a_constructor(), isNullOrUndefined = require_is_null_or_undefined(), wellKnownSymbol = require_well_known_symbol(), SPECIES = wellKnownSymbol("species");
      module.exports = function(O, defaultConstructor) {
        var C = anObject(O).constructor, S;
        return C === void 0 || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/array-slice.js
  var require_array_slice = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/array-slice.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis([].slice);
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/validate-arguments-length.js
  var require_validate_arguments_length = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/validate-arguments-length.js"(exports, module) {
      "use strict";
      var $TypeError = TypeError;
      module.exports = function(passed, required) {
        if (passed < required) throw new $TypeError("Not enough arguments");
        return passed;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/environment-is-ios.js
  var require_environment_is_ios = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/environment-is-ios.js"(exports, module) {
      "use strict";
      var userAgent = require_environment_user_agent();
      module.exports = /ipad|iphone|ipod/i.test(userAgent) && /applewebkit/i.test(userAgent);
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/task.js
  var require_task = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/task.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this(), apply = require_function_apply(), bind = require_function_bind_context(), isCallable = require_is_callable(), hasOwn = require_has_own_property(), fails = require_fails(), html = require_html(), arraySlice = require_array_slice(), createElement = require_document_create_element(), validateArgumentsLength = require_validate_arguments_length(), IS_IOS = require_environment_is_ios(), IS_NODE = require_environment_is_node(), set = globalThis2.setImmediate, clear = globalThis2.clearImmediate, process = globalThis2.process, Dispatch = globalThis2.Dispatch, Function2 = globalThis2.Function, MessageChannel = globalThis2.MessageChannel, String2 = globalThis2.String, counter = 0, queue = {}, ONREADYSTATECHANGE = "onreadystatechange", $location, defer, channel, port;
      fails(function() {
        $location = globalThis2.location;
      });
      var run2 = function(id) {
        if (hasOwn(queue, id)) {
          var fn = queue[id];
          delete queue[id], fn();
        }
      }, runner = function(id) {
        return function() {
          run2(id);
        };
      }, eventListener = function(event) {
        run2(event.data);
      }, globalPostMessageDefer = function(id) {
        globalThis2.postMessage(String2(id), $location.protocol + "//" + $location.host);
      };
      (!set || !clear) && (set = function(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function2(handler), args = arraySlice(arguments, 1);
        return queue[++counter] = function() {
          apply(fn, void 0, args);
        }, defer(counter), counter;
      }, clear = function(id) {
        delete queue[id];
      }, IS_NODE ? defer = function(id) {
        process.nextTick(runner(id));
      } : Dispatch && Dispatch.now ? defer = function(id) {
        Dispatch.now(runner(id));
      } : MessageChannel && !IS_IOS ? (channel = new MessageChannel(), port = channel.port2, channel.port1.onmessage = eventListener, defer = bind(port.postMessage, port)) : globalThis2.addEventListener && isCallable(globalThis2.postMessage) && !globalThis2.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer) ? (defer = globalPostMessageDefer, globalThis2.addEventListener("message", eventListener, !1)) : ONREADYSTATECHANGE in createElement("script") ? defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
          html.removeChild(this), run2(id);
        };
      } : defer = function(id) {
        setTimeout(runner(id), 0);
      });
      module.exports = {
        set,
        clear
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/safe-get-built-in.js
  var require_safe_get_built_in = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/safe-get-built-in.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this(), DESCRIPTORS = require_descriptors(), getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      module.exports = function(name) {
        if (!DESCRIPTORS) return globalThis2[name];
        var descriptor = getOwnPropertyDescriptor(globalThis2, name);
        return descriptor && descriptor.value;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/queue.js
  var require_queue = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/queue.js"(exports, module) {
      "use strict";
      var Queue = function() {
        this.head = null, this.tail = null;
      };
      Queue.prototype = {
        add: function(item) {
          var entry = { item, next: null }, tail = this.tail;
          tail ? tail.next = entry : this.head = entry, this.tail = entry;
        },
        get: function() {
          var entry = this.head;
          if (entry) {
            var next = this.head = entry.next;
            return next === null && (this.tail = null), entry.item;
          }
        }
      };
      module.exports = Queue;
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/environment-is-ios-pebble.js
  var require_environment_is_ios_pebble = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/environment-is-ios-pebble.js"(exports, module) {
      "use strict";
      var userAgent = require_environment_user_agent();
      module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble < "u";
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/environment-is-webos-webkit.js
  var require_environment_is_webos_webkit = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/environment-is-webos-webkit.js"(exports, module) {
      "use strict";
      var userAgent = require_environment_user_agent();
      module.exports = /web0s(?!.*chrome)/i.test(userAgent);
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/microtask.js
  var require_microtask = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/microtask.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this(), safeGetBuiltIn = require_safe_get_built_in(), bind = require_function_bind_context(), macrotask = require_task().set, Queue = require_queue(), IS_IOS = require_environment_is_ios(), IS_IOS_PEBBLE = require_environment_is_ios_pebble(), IS_WEBOS_WEBKIT = require_environment_is_webos_webkit(), IS_NODE = require_environment_is_node(), MutationObserver2 = globalThis2.MutationObserver || globalThis2.WebKitMutationObserver, document2 = globalThis2.document, process = globalThis2.process, Promise2 = globalThis2.Promise, microtask = safeGetBuiltIn("queueMicrotask"), notify, toggle, node, promise, then;
      microtask || (queue = new Queue(), flush = function() {
        var parent, fn;
        for (IS_NODE && (parent = process.domain) && parent.exit(); fn = queue.get(); ) try {
          fn();
        } catch (error) {
          throw queue.head && notify(), error;
        }
        parent && parent.enter();
      }, !IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver2 && document2 ? (toggle = !0, node = document2.createTextNode(""), new MutationObserver2(flush).observe(node, { characterData: !0 }), notify = function() {
        node.data = toggle = !toggle;
      }) : !IS_IOS_PEBBLE && Promise2 && Promise2.resolve ? (promise = Promise2.resolve(void 0), promise.constructor = Promise2, then = bind(promise.then, promise), notify = function() {
        then(flush);
      }) : IS_NODE ? notify = function() {
        process.nextTick(flush);
      } : (macrotask = bind(macrotask, globalThis2), notify = function() {
        macrotask(flush);
      }), microtask = function(fn) {
        queue.head || notify(), queue.add(fn);
      });
      var queue, flush;
      module.exports = microtask;
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/host-report-errors.js
  var require_host_report_errors = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/host-report-errors.js"(exports, module) {
      "use strict";
      module.exports = function(a, b) {
        try {
          arguments.length === 1 ? console.error(a) : console.error(a, b);
        } catch {
        }
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/perform.js
  var require_perform = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/perform.js"(exports, module) {
      "use strict";
      module.exports = function(exec) {
        try {
          return { error: !1, value: exec() };
        } catch (error) {
          return { error: !0, value: error };
        }
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/promise-native-constructor.js
  var require_promise_native_constructor = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/promise-native-constructor.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      module.exports = globalThis2.Promise;
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/promise-constructor-detection.js
  var require_promise_constructor_detection = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/promise-constructor-detection.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this(), NativePromiseConstructor = require_promise_native_constructor(), isCallable = require_is_callable(), isForced = require_is_forced(), inspectSource = require_inspect_source(), wellKnownSymbol = require_well_known_symbol(), ENVIRONMENT = require_environment(), IS_PURE = require_is_pure(), V8_VERSION = require_environment_v8_version(), NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype, SPECIES = wellKnownSymbol("species"), SUBCLASSING = !1, NATIVE_PROMISE_REJECTION_EVENT = isCallable(globalThis2.PromiseRejectionEvent), FORCED_PROMISE_CONSTRUCTOR = isForced("Promise", function() {
        var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor), GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
        if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66 || IS_PURE && !(NativePromisePrototype.catch && NativePromisePrototype.finally)) return !0;
        if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
          var promise = new NativePromiseConstructor(function(resolve) {
            resolve(1);
          }), FakePromise = function(exec) {
            exec(function() {
            }, function() {
            });
          }, constructor = promise.constructor = {};
          if (constructor[SPECIES] = FakePromise, SUBCLASSING = promise.then(function() {
          }) instanceof FakePromise, !SUBCLASSING) return !0;
        }
        return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === "BROWSER" || ENVIRONMENT === "DENO") && !NATIVE_PROMISE_REJECTION_EVENT;
      });
      module.exports = {
        CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
        REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
        SUBCLASSING
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/new-promise-capability.js
  var require_new_promise_capability = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/new-promise-capability.js"(exports, module) {
      "use strict";
      var aCallable = require_a_callable(), $TypeError = TypeError, PromiseCapability = function(C) {
        var resolve, reject;
        this.promise = new C(function($$resolve, $$reject) {
          if (resolve !== void 0 || reject !== void 0) throw new $TypeError("Bad Promise constructor");
          resolve = $$resolve, reject = $$reject;
        }), this.resolve = aCallable(resolve), this.reject = aCallable(reject);
      };
      module.exports.f = function(C) {
        return new PromiseCapability(C);
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.constructor.js
  var require_es_promise_constructor = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.constructor.js"() {
      "use strict";
      var $ = require_export(), IS_PURE = require_is_pure(), IS_NODE = require_environment_is_node(), globalThis2 = require_global_this(), path = require_path(), call = require_function_call(), defineBuiltIn = require_define_built_in(), setPrototypeOf = require_object_set_prototype_of(), setToStringTag = require_set_to_string_tag(), setSpecies = require_set_species(), aCallable = require_a_callable(), isCallable = require_is_callable(), isObject = require_is_object(), anInstance = require_an_instance(), speciesConstructor = require_species_constructor(), task = require_task().set, microtask = require_microtask(), hostReportErrors = require_host_report_errors(), perform = require_perform(), Queue = require_queue(), InternalStateModule = require_internal_state(), NativePromiseConstructor = require_promise_native_constructor(), PromiseConstructorDetection = require_promise_constructor_detection(), newPromiseCapabilityModule = require_new_promise_capability(), PROMISE = "Promise", FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR, NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT, NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING, getInternalPromiseState = InternalStateModule.getterFor(PROMISE), setInternalState = InternalStateModule.set, NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype, PromiseConstructor = NativePromiseConstructor, PromisePrototype = NativePromisePrototype, TypeError2 = globalThis2.TypeError, document2 = globalThis2.document, process = globalThis2.process, newPromiseCapability = newPromiseCapabilityModule.f, newGenericPromiseCapability = newPromiseCapability, DISPATCH_EVENT = !!(document2 && document2.createEvent && globalThis2.dispatchEvent), UNHANDLED_REJECTION = "unhandledrejection", REJECTION_HANDLED = "rejectionhandled", PENDING = 0, FULFILLED = 1, REJECTED = 2, HANDLED = 1, UNHANDLED = 2, Internal, OwnPromiseCapability, PromiseWrapper, nativeThen, isThenable = function(it) {
        var then;
        return isObject(it) && isCallable(then = it.then) ? then : !1;
      }, callReaction = function(reaction, state) {
        var value = state.value, ok = state.state === FULFILLED, handler = ok ? reaction.ok : reaction.fail, resolve = reaction.resolve, reject = reaction.reject, domain = reaction.domain, result, then, exited;
        try {
          handler ? (ok || (state.rejection === UNHANDLED && onHandleUnhandled(state), state.rejection = HANDLED), handler === !0 ? result = value : (domain && domain.enter(), result = handler(value), domain && (domain.exit(), exited = !0)), result === reaction.promise ? reject(new TypeError2("Promise-chain cycle")) : (then = isThenable(result)) ? call(then, result, resolve, reject) : resolve(result)) : reject(value);
        } catch (error) {
          domain && !exited && domain.exit(), reject(error);
        }
      }, notify = function(state, isReject) {
        state.notified || (state.notified = !0, microtask(function() {
          for (var reactions = state.reactions, reaction; reaction = reactions.get(); )
            callReaction(reaction, state);
          state.notified = !1, isReject && !state.rejection && onUnhandled(state);
        }));
      }, dispatchEvent = function(name, promise, reason) {
        var event, handler;
        DISPATCH_EVENT ? (event = document2.createEvent("Event"), event.promise = promise, event.reason = reason, event.initEvent(name, !1, !0), globalThis2.dispatchEvent(event)) : event = { promise, reason }, !NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis2["on" + name]) ? handler(event) : name === UNHANDLED_REJECTION && hostReportErrors("Unhandled promise rejection", reason);
      }, onUnhandled = function(state) {
        call(task, globalThis2, function() {
          var promise = state.facade, value = state.value, IS_UNHANDLED = isUnhandled(state), result;
          if (IS_UNHANDLED && (result = perform(function() {
            IS_NODE ? process.emit("unhandledRejection", value, promise) : dispatchEvent(UNHANDLED_REJECTION, promise, value);
          }), state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED, result.error))
            throw result.value;
        });
      }, isUnhandled = function(state) {
        return state.rejection !== HANDLED && !state.parent;
      }, onHandleUnhandled = function(state) {
        call(task, globalThis2, function() {
          var promise = state.facade;
          IS_NODE ? process.emit("rejectionHandled", promise) : dispatchEvent(REJECTION_HANDLED, promise, state.value);
        });
      }, bind = function(fn, state, unwrap) {
        return function(value) {
          fn(state, value, unwrap);
        };
      }, internalReject = function(state, value, unwrap) {
        state.done || (state.done = !0, unwrap && (state = unwrap), state.value = value, state.state = REJECTED, notify(state, !0));
      }, internalResolve = function(state, value, unwrap) {
        if (!state.done) {
          state.done = !0, unwrap && (state = unwrap);
          try {
            if (state.facade === value) throw new TypeError2("Promise can't be resolved itself");
            var then = isThenable(value);
            then ? microtask(function() {
              var wrapper = { done: !1 };
              try {
                call(
                  then,
                  value,
                  bind(internalResolve, wrapper, state),
                  bind(internalReject, wrapper, state)
                );
              } catch (error) {
                internalReject(wrapper, error, state);
              }
            }) : (state.value = value, state.state = FULFILLED, notify(state, !1));
          } catch (error) {
            internalReject({ done: !1 }, error, state);
          }
        }
      };
      if (FORCED_PROMISE_CONSTRUCTOR && (PromiseConstructor = function(executor) {
        anInstance(this, PromisePrototype), aCallable(executor), call(Internal, this);
        var state = getInternalPromiseState(this);
        try {
          executor(bind(internalResolve, state), bind(internalReject, state));
        } catch (error) {
          internalReject(state, error);
        }
      }, PromisePrototype = PromiseConstructor.prototype, Internal = function(executor) {
        setInternalState(this, {
          type: PROMISE,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: new Queue(),
          rejection: !1,
          state: PENDING,
          value: null
        });
      }, Internal.prototype = defineBuiltIn(PromisePrototype, "then", function(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this), reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
        return state.parent = !0, reaction.ok = isCallable(onFulfilled) ? onFulfilled : !0, reaction.fail = isCallable(onRejected) && onRejected, reaction.domain = IS_NODE ? process.domain : void 0, state.state === PENDING ? state.reactions.add(reaction) : microtask(function() {
          callReaction(reaction, state);
        }), reaction.promise;
      }), OwnPromiseCapability = function() {
        var promise = new Internal(), state = getInternalPromiseState(promise);
        this.promise = promise, this.resolve = bind(internalResolve, state), this.reject = bind(internalReject, state);
      }, newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
        return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
      }, !IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype)) {
        nativeThen = NativePromisePrototype.then, NATIVE_PROMISE_SUBCLASSING || defineBuiltIn(NativePromisePrototype, "then", function(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function(resolve, reject) {
            call(nativeThen, that, resolve, reject);
          }).then(onFulfilled, onRejected);
        }, { unsafe: !0 });
        try {
          delete NativePromisePrototype.constructor;
        } catch {
        }
        setPrototypeOf && setPrototypeOf(NativePromisePrototype, PromisePrototype);
      }
      $({ global: !0, constructor: !0, wrap: !0, forced: FORCED_PROMISE_CONSTRUCTOR }, {
        Promise: PromiseConstructor
      });
      PromiseWrapper = path.Promise;
      setToStringTag(PromiseConstructor, PROMISE, !1, !0);
      setSpecies(PROMISE);
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/check-correctness-of-iteration.js
  var require_check_correctness_of_iteration = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/check-correctness-of-iteration.js"(exports, module) {
      "use strict";
      var wellKnownSymbol = require_well_known_symbol(), ITERATOR = wellKnownSymbol("iterator"), SAFE_CLOSING = !1;
      try {
        called = 0, iteratorWithReturn = {
          next: function() {
            return { done: !!called++ };
          },
          return: function() {
            SAFE_CLOSING = !0;
          }
        }, iteratorWithReturn[ITERATOR] = function() {
          return this;
        }, Array.from(iteratorWithReturn, function() {
          throw 2;
        });
      } catch {
      }
      var called, iteratorWithReturn;
      module.exports = function(exec, SKIP_CLOSING) {
        try {
          if (!SKIP_CLOSING && !SAFE_CLOSING) return !1;
        } catch {
          return !1;
        }
        var ITERATION_SUPPORT = !1;
        try {
          var object = {};
          object[ITERATOR] = function() {
            return {
              next: function() {
                return { done: ITERATION_SUPPORT = !0 };
              }
            };
          }, exec(object);
        } catch {
        }
        return ITERATION_SUPPORT;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/promise-statics-incorrect-iteration.js
  var require_promise_statics_incorrect_iteration = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/promise-statics-incorrect-iteration.js"(exports, module) {
      "use strict";
      var NativePromiseConstructor = require_promise_native_constructor(), checkCorrectnessOfIteration = require_check_correctness_of_iteration(), FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
      module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function(iterable) {
        NativePromiseConstructor.all(iterable).then(void 0, function() {
        });
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.all.js
  var require_es_promise_all = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.all.js"() {
      "use strict";
      var $ = require_export(), call = require_function_call(), aCallable = require_a_callable(), newPromiseCapabilityModule = require_new_promise_capability(), perform = require_perform(), iterate = require_iterate(), PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
      $({ target: "Promise", stat: !0, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
        all: function(iterable) {
          var C = this, capability = newPromiseCapabilityModule.f(C), resolve = capability.resolve, reject = capability.reject, result = perform(function() {
            var $promiseResolve = aCallable(C.resolve), values = [], counter = 0, remaining = 1;
            iterate(iterable, function(promise) {
              var index = counter++, alreadyCalled = !1;
              remaining++, call($promiseResolve, C, promise).then(function(value) {
                alreadyCalled || (alreadyCalled = !0, values[index] = value, --remaining || resolve(values));
              }, reject);
            }), --remaining || resolve(values);
          });
          return result.error && reject(result.value), capability.promise;
        }
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.catch.js
  var require_es_promise_catch = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.catch.js"() {
      "use strict";
      var $ = require_export(), IS_PURE = require_is_pure(), FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR, NativePromiseConstructor = require_promise_native_constructor(), getBuiltIn = require_get_built_in(), isCallable = require_is_callable(), defineBuiltIn = require_define_built_in(), NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
      $({ target: "Promise", proto: !0, forced: FORCED_PROMISE_CONSTRUCTOR, real: !0 }, {
        catch: function(onRejected) {
          return this.then(void 0, onRejected);
        }
      });
      !IS_PURE && isCallable(NativePromiseConstructor) && (method = getBuiltIn("Promise").prototype.catch, NativePromisePrototype.catch !== method && defineBuiltIn(NativePromisePrototype, "catch", method, { unsafe: !0 }));
      var method;
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.race.js
  var require_es_promise_race = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.race.js"() {
      "use strict";
      var $ = require_export(), call = require_function_call(), aCallable = require_a_callable(), newPromiseCapabilityModule = require_new_promise_capability(), perform = require_perform(), iterate = require_iterate(), PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
      $({ target: "Promise", stat: !0, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
        race: function(iterable) {
          var C = this, capability = newPromiseCapabilityModule.f(C), reject = capability.reject, result = perform(function() {
            var $promiseResolve = aCallable(C.resolve);
            iterate(iterable, function(promise) {
              call($promiseResolve, C, promise).then(capability.resolve, reject);
            });
          });
          return result.error && reject(result.value), capability.promise;
        }
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.reject.js
  var require_es_promise_reject = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.reject.js"() {
      "use strict";
      var $ = require_export(), newPromiseCapabilityModule = require_new_promise_capability(), FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
      $({ target: "Promise", stat: !0, forced: FORCED_PROMISE_CONSTRUCTOR }, {
        reject: function(r) {
          var capability = newPromiseCapabilityModule.f(this), capabilityReject = capability.reject;
          return capabilityReject(r), capability.promise;
        }
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/promise-resolve.js
  var require_promise_resolve = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/promise-resolve.js"(exports, module) {
      "use strict";
      var anObject = require_an_object(), isObject = require_is_object(), newPromiseCapability = require_new_promise_capability();
      module.exports = function(C, x) {
        if (anObject(C), isObject(x) && x.constructor === C) return x;
        var promiseCapability = newPromiseCapability.f(C), resolve = promiseCapability.resolve;
        return resolve(x), promiseCapability.promise;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.resolve.js
  var require_es_promise_resolve = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.resolve.js"() {
      "use strict";
      var $ = require_export(), getBuiltIn = require_get_built_in(), IS_PURE = require_is_pure(), NativePromiseConstructor = require_promise_native_constructor(), FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR, promiseResolve = require_promise_resolve(), PromiseConstructorWrapper = getBuiltIn("Promise"), CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;
      $({ target: "Promise", stat: !0, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
        resolve: function(x) {
          return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
        }
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.js
  var require_es_promise = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.js"() {
      "use strict";
      require_es_promise_constructor();
      require_es_promise_all();
      require_es_promise_catch();
      require_es_promise_race();
      require_es_promise_reject();
      require_es_promise_resolve();
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.all-settled.js
  var require_es_promise_all_settled = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.all-settled.js"() {
      "use strict";
      var $ = require_export(), call = require_function_call(), aCallable = require_a_callable(), newPromiseCapabilityModule = require_new_promise_capability(), perform = require_perform(), iterate = require_iterate(), PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
      $({ target: "Promise", stat: !0, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
        allSettled: function(iterable) {
          var C = this, capability = newPromiseCapabilityModule.f(C), resolve = capability.resolve, reject = capability.reject, result = perform(function() {
            var promiseResolve = aCallable(C.resolve), values = [], counter = 0, remaining = 1;
            iterate(iterable, function(promise) {
              var index = counter++, alreadyCalled = !1;
              remaining++, call(promiseResolve, C, promise).then(function(value) {
                alreadyCalled || (alreadyCalled = !0, values[index] = { status: "fulfilled", value }, --remaining || resolve(values));
              }, function(error) {
                alreadyCalled || (alreadyCalled = !0, values[index] = { status: "rejected", reason: error }, --remaining || resolve(values));
              });
            }), --remaining || resolve(values);
          });
          return result.error && reject(result.value), capability.promise;
        }
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.any.js
  var require_es_promise_any = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.any.js"() {
      "use strict";
      var $ = require_export(), call = require_function_call(), aCallable = require_a_callable(), getBuiltIn = require_get_built_in(), newPromiseCapabilityModule = require_new_promise_capability(), perform = require_perform(), iterate = require_iterate(), PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration(), PROMISE_ANY_ERROR = "No one promise resolved";
      $({ target: "Promise", stat: !0, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
        any: function(iterable) {
          var C = this, AggregateError = getBuiltIn("AggregateError"), capability = newPromiseCapabilityModule.f(C), resolve = capability.resolve, reject = capability.reject, result = perform(function() {
            var promiseResolve = aCallable(C.resolve), errors = [], counter = 0, remaining = 1, alreadyResolved = !1;
            iterate(iterable, function(promise) {
              var index = counter++, alreadyRejected = !1;
              remaining++, call(promiseResolve, C, promise).then(function(value) {
                alreadyRejected || alreadyResolved || (alreadyResolved = !0, resolve(value));
              }, function(error) {
                alreadyRejected || alreadyResolved || (alreadyRejected = !0, errors[index] = error, --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR)));
              });
            }), --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
          });
          return result.error && reject(result.value), capability.promise;
        }
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.try.js
  var require_es_promise_try = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.try.js"() {
      "use strict";
      var $ = require_export(), globalThis2 = require_global_this(), apply = require_function_apply(), slice = require_array_slice(), promiseResolve = require_promise_resolve(), newPromiseCapabilityModule = require_new_promise_capability(), aCallable = require_a_callable(), perform = require_perform(), fails = require_fails(), Promise2 = globalThis2.Promise, ACCEPT_ARGUMENTS = !1, FORCED = !Promise2 || !Promise2.try || fails(function() {
        var p = Promise2.resolve();
        return Promise2.try(function(argument) {
          return ACCEPT_ARGUMENTS = argument === 8, p;
        }, 8) !== p;
      }) || !ACCEPT_ARGUMENTS;
      $({ target: "Promise", stat: !0, forced: FORCED }, {
        try: function(callbackfn) {
          var args = arguments.length > 1 ? slice(arguments, 1) : [], result = perform(function() {
            return apply(aCallable(callbackfn), void 0, args);
          });
          if (!result.error) return promiseResolve(this, result.value);
          var promiseCapability = newPromiseCapabilityModule.f(this), reject = promiseCapability.reject;
          return reject(result.value), promiseCapability.promise;
        }
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.with-resolvers.js
  var require_es_promise_with_resolvers = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.with-resolvers.js"() {
      "use strict";
      var $ = require_export(), newPromiseCapabilityModule = require_new_promise_capability();
      $({ target: "Promise", stat: !0 }, {
        withResolvers: function() {
          var promiseCapability = newPromiseCapabilityModule.f(this);
          return {
            promise: promiseCapability.promise,
            resolve: promiseCapability.resolve,
            reject: promiseCapability.reject
          };
        }
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.finally.js
  var require_es_promise_finally = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.promise.finally.js"() {
      "use strict";
      var $ = require_export(), IS_PURE = require_is_pure(), NativePromiseConstructor = require_promise_native_constructor(), fails = require_fails(), getBuiltIn = require_get_built_in(), isCallable = require_is_callable(), speciesConstructor = require_species_constructor(), promiseResolve = require_promise_resolve(), defineBuiltIn = require_define_built_in(), NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype, NON_GENERIC = !!NativePromiseConstructor && fails(function() {
        NativePromisePrototype.finally.call({ then: function() {
        } }, function() {
        });
      });
      $({ target: "Promise", proto: !0, real: !0, forced: NON_GENERIC }, {
        finally: function(onFinally) {
          var C = speciesConstructor(this, getBuiltIn("Promise")), isFunction = isCallable(onFinally);
          return this.then(
            isFunction ? function(x) {
              return promiseResolve(C, onFinally()).then(function() {
                return x;
              });
            } : onFinally,
            isFunction ? function(e) {
              return promiseResolve(C, onFinally()).then(function() {
                throw e;
              });
            } : onFinally
          );
        }
      });
      !IS_PURE && isCallable(NativePromiseConstructor) && (method = getBuiltIn("Promise").prototype.finally, NativePromisePrototype.finally !== method && defineBuiltIn(NativePromisePrototype, "finally", method, { unsafe: !0 }));
      var method;
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/string-multibyte.js
  var require_string_multibyte = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/string-multibyte.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this(), toIntegerOrInfinity = require_to_integer_or_infinity(), toString = require_to_string(), requireObjectCoercible = require_require_object_coercible(), charAt = uncurryThis("".charAt), charCodeAt = uncurryThis("".charCodeAt), stringSlice = uncurryThis("".slice), createMethod = function(CONVERT_TO_STRING) {
        return function($this, pos) {
          var S = toString(requireObjectCoercible($this)), position = toIntegerOrInfinity(pos), size = S.length, first, second;
          return position < 0 || position >= size ? CONVERT_TO_STRING ? "" : void 0 : (first = charCodeAt(S, position), first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536);
        };
      };
      module.exports = {
        // `String.prototype.codePointAt` method
        // https://tc39.es/ecma262/#sec-string.prototype.codepointat
        codeAt: createMethod(!1),
        // `String.prototype.at` method
        // https://github.com/mathiasbynens/String.prototype.at
        charAt: createMethod(!0)
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.string.iterator.js
  var require_es_string_iterator = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.string.iterator.js"() {
      "use strict";
      var charAt = require_string_multibyte().charAt, toString = require_to_string(), InternalStateModule = require_internal_state(), defineIterator = require_iterator_define(), createIterResultObject = require_create_iter_result_object(), STRING_ITERATOR = "String Iterator", setInternalState = InternalStateModule.set, getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
      defineIterator(String, "String", function(iterated) {
        setInternalState(this, {
          type: STRING_ITERATOR,
          string: toString(iterated),
          index: 0
        });
      }, function() {
        var state = getInternalState(this), string = state.string, index = state.index, point;
        return index >= string.length ? createIterResultObject(void 0, !0) : (point = charAt(string, index), state.index += point.length, createIterResultObject(point, !1));
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/es/promise/index.js
  var require_promise = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/es/promise/index.js"(exports, module) {
      "use strict";
      require_es_aggregate_error();
      require_es_array_iterator();
      require_es_object_to_string();
      require_es_promise();
      require_es_promise_all_settled();
      require_es_promise_any();
      require_es_promise_try();
      require_es_promise_with_resolvers();
      require_es_promise_finally();
      require_es_string_iterator();
      var path = require_path();
      module.exports = path.Promise;
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/dom-iterables.js
  var require_dom_iterables = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/dom-iterables.js"(exports, module) {
      "use strict";
      module.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/web.dom-collections.iterator.js
  var require_web_dom_collections_iterator = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/web.dom-collections.iterator.js"() {
      "use strict";
      require_es_array_iterator();
      var DOMIterables = require_dom_iterables(), globalThis2 = require_global_this(), setToStringTag = require_set_to_string_tag(), Iterators = require_iterators();
      for (COLLECTION_NAME in DOMIterables)
        setToStringTag(globalThis2[COLLECTION_NAME], COLLECTION_NAME), Iterators[COLLECTION_NAME] = Iterators.Array;
      var COLLECTION_NAME;
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/stable/promise/index.js
  var require_promise2 = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/stable/promise/index.js"(exports, module) {
      "use strict";
      var parent = require_promise();
      require_web_dom_collections_iterator();
      module.exports = parent;
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.object.create.js
  var require_es_object_create = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.object.create.js"() {
      "use strict";
      var $ = require_export(), DESCRIPTORS = require_descriptors(), create = require_object_create();
      $({ target: "Object", stat: !0, sham: !DESCRIPTORS }, {
        create
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.reflect.own-keys.js
  var require_es_reflect_own_keys = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/es.reflect.own-keys.js"() {
      "use strict";
      var $ = require_export(), ownKeys = require_own_keys();
      $({ target: "Reflect", stat: !0 }, {
        ownKeys
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/create-property.js
  var require_create_property = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/internals/create-property.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors(), definePropertyModule = require_object_define_property(), createPropertyDescriptor = require_create_property_descriptor();
      module.exports = function(object, key, value) {
        DESCRIPTORS ? definePropertyModule.f(object, key, createPropertyDescriptor(0, value)) : object[key] = value;
      };
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/esnext.promise.all-keyed.js
  var require_esnext_promise_all_keyed = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/esnext.promise.all-keyed.js"() {
      "use strict";
      var $ = require_export(), aCallable = require_a_callable(), anObject = require_an_object(), call = require_function_call(), createProperty = require_create_property(), getBuiltIn = require_get_built_in(), getOwnPropertyDescriptor = require_object_get_own_property_descriptor(), newPromiseCapabilityModule = require_new_promise_capability(), perform = require_perform(), create = getBuiltIn("Object", "create"), ownKeys = getBuiltIn("Reflect", "ownKeys");
      $({ target: "Promise", stat: !0 }, {
        allKeyed: function(promises) {
          var C = this, capability = newPromiseCapabilityModule.f(C), resolve = capability.resolve, reject = capability.reject, result = perform(function() {
            for (var promiseResolve = aCallable(C.resolve), allKeys = ownKeys(anObject(promises)), keys = [], values = [], remaining = 1, counter = 0, i = 0; i < allKeys.length; i++) (function(key) {
              var desc = getOwnPropertyDescriptor.f(promises, key);
              if (desc && desc.enumerable) {
                var index = counter, alreadyCalled = !1;
                remaining++, keys[index] = key, values[index] = void 0, call(promiseResolve, C, promises[key]).then(function(value) {
                  if (!alreadyCalled && (alreadyCalled = !0, values[index] = value, --remaining, remaining === 0)) {
                    for (var res = create(null), j = 0; j < keys.length; j++) createProperty(res, keys[j], values[j]);
                    resolve(res);
                  }
                }, reject), counter++;
              }
            })(allKeys[i]);
            --remaining || resolve(create(null));
          });
          return result.error && reject(result.value), capability.promise;
        }
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/esnext.promise.all-settled-keyed.js
  var require_esnext_promise_all_settled_keyed = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/esnext.promise.all-settled-keyed.js"() {
      "use strict";
      var $ = require_export(), aCallable = require_a_callable(), anObject = require_an_object(), call = require_function_call(), createProperty = require_create_property(), getBuiltIn = require_get_built_in(), getOwnPropertyDescriptor = require_object_get_own_property_descriptor(), newPromiseCapabilityModule = require_new_promise_capability(), perform = require_perform(), create = getBuiltIn("Object", "create"), ownKeys = getBuiltIn("Reflect", "ownKeys");
      $({ target: "Promise", stat: !0 }, {
        allSettledKeyed: function(promises) {
          var C = this, capability = newPromiseCapabilityModule.f(C), resolve = capability.resolve, reject = capability.reject, result = perform(function() {
            for (var promiseResolve = aCallable(C.resolve), allKeys = ownKeys(anObject(promises)), keys = [], values = [], remaining = 1, counter = 0, i = 0; i < allKeys.length; i++) (function(key) {
              var desc = getOwnPropertyDescriptor.f(promises, key);
              if (desc && desc.enumerable) {
                var createElementResolver = function(rejection) {
                  return function(value) {
                    if (!alreadyCalled && (alreadyCalled = !0, values[index] = rejection ? { status: "rejected", reason: value } : { status: "fulfilled", value }, !--remaining)) {
                      for (var res = create(null), j = 0; j < keys.length; j++) createProperty(res, keys[j], values[j]);
                      resolve(res);
                    }
                  };
                }, index = counter, alreadyCalled = !1;
                remaining++, keys[index] = key, values[index] = void 0, call(promiseResolve, C, promises[key]).then(createElementResolver(!1), createElementResolver(!0)), counter++;
              }
            })(allKeys[i]);
            --remaining || resolve(create(null));
          });
          return result.error && reject(result.value), capability.promise;
        }
      });
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/esnext.promise.try.js
  var require_esnext_promise_try = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/esnext.promise.try.js"() {
      "use strict";
      require_es_promise_try();
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/esnext.promise.with-resolvers.js
  var require_esnext_promise_with_resolvers = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/modules/esnext.promise.with-resolvers.js"() {
      "use strict";
      require_es_promise_with_resolvers();
    }
  });

  // node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/actual/promise/index.js
  var require_promise3 = __commonJS({
    "node_modules/.pnpm/core-js-pure@3.50.0/node_modules/core-js-pure/actual/promise/index.js"(exports, module) {
      "use strict";
      var parent = require_promise2();
      require_es_object_create();
      require_es_reflect_own_keys();
      require_esnext_promise_all_keyed();
      require_esnext_promise_all_settled_keyed();
      require_esnext_promise_try();
      require_esnext_promise_with_resolvers();
      module.exports = parent;
    }
  });

  // src/style.scss
  var style_exports = {};
  __export(style_exports, {
    css: () => css
  });
  var css, init_style = __esm({
    "src/style.scss"() {
      css = `:root {
  --bilingual-text-size-m: calc(var(--body-text-size) + 1px);
  --bilingual-text-size-s: var(--body-text-size);
  --bilingual-text-size-source: 0.8em;
}

.bilingual__trans_wrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--bilingual-text-size-m);
  line-height: 1;
}
.bilingual__trans_wrapper em {
  font-style: normal;
}
.bilingual__trans_wrapper > em.bilingual__trans_source {
  font-size: var(--bilingual-text-size-source);
}
#settings > div.tab-nav button > .bilingual__trans_wrapper, #quicksettings div.tab-nav button > .bilingual__trans_wrapper {
  font-size: max(var(--bilingual-text-size-m), var(--section-header-text-size) * 0.85);
}
.lg.gradio-button > .bilingual__trans_wrapper {
  font-size: max(0.9, var(--button-large-text-size) * 0.85);
}

#txtimg_hr_finalres .bilingual__trans_wrapper em,
#tab_ti .output-html .bilingual__trans_wrapper em,
#tab_ti .gradio-html .bilingual__trans_wrapper em,
#sddp-dynamic-prompting .gradio-html .bilingual__trans_wrapper em,
#available_extensions .extension-tag .bilingual__trans_wrapper em,
#available_extensions .date_added .bilingual__trans_wrapper em,
#available_extensions + p > .bilingual__trans_wrapper em,
.gradio-image div[data-testid=image] .bilingual__trans_wrapper em {
  display: none;
}

#settings .bilingual__trans_wrapper:not(#settings .tabitem .bilingual__trans_wrapper),
label > span > .bilingual__trans_wrapper,
fieldset > span > .bilingual__trans_wrapper,
.label-wrap > span > .bilingual__trans_wrapper,
.w-full > span > .bilingual__trans_wrapper,
.context-menu-items .bilingual__trans_wrapper,
.single-select .bilingual__trans_wrapper, ul.options .inner-item + .bilingual__trans_wrapper,
.output-html .bilingual__trans_wrapper:not(th .bilingual__trans_wrapper),
.gradio-html .bilingual__trans_wrapper:not(th .bilingual__trans_wrapper, .posex_cont .bilingual__trans_wrapper),
.output-markdown .bilingual__trans_wrapper,
.gradio-markdown .bilingual__trans_wrapper,
.gradio-image > div.float .bilingual__trans_wrapper,
.gradio-file > div.float .bilingual__trans_wrapper,
.gradio-code > div.float .bilingual__trans_wrapper,
.posex_setting_cont .bilingual__trans_wrapper:not(.posex_bg .bilingual__trans_wrapper),
#dynamic-prompting .bilingual__trans_wrapper {
  font-size: var(--bilingual-text-size-s);
  align-items: flex-start;
}

#extensions label .bilingual__trans_wrapper,
#available_extensions td .bilingual__trans_wrapper,
.label-wrap > span > .bilingual__trans_wrapper {
  font-size: inherit;
  line-height: inherit;
}

.label-wrap > span:first-of-type {
  font-size: var(--bilingual-text-size-m);
  line-height: 1;
}

#txt2img_script_container > div {
  margin-top: var(--layout-gap, 12px);
}

textarea::placeholder {
  line-height: 1;
  padding: 4px 0;
}

label > span {
  line-height: 1;
}

div[data-testid=image] .start-prompt {
  background-color: rgba(255, 255, 255, 0.6);
  color: #222;
  transition: opacity 0.2s ease-in-out;
}
div[data-testid=image]:hover .start-prompt {
  opacity: 0;
}

.label-wrap > span.icon {
  width: 1em;
  height: 1em;
  transform-origin: center center;
}

.gradio-dropdown ul.options li.item {
  padding: 0.3em 0.4em !important;
}

/* Posex extension */
.posex_bg {
  white-space: nowrap;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFQztFQUNBO0VBQ0E7OztBQVFEO0VBRUM7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUVDOztBQUdEO0VBRUM7O0FBR0Q7RUFyQkE7O0FBMkJBO0VBM0JBOzs7QUFpQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQVNDOzs7QUFHRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQWlCQztFQUNBOzs7QUFHRDtBQUFBO0FBQUE7RUFJQztFQUNBOzs7QUFHRDtFQUVDO0VBQ0E7OztBQUdEO0VBRUM7OztBQUdEO0VBRUM7RUFDQTs7O0FBR0Q7RUFFQzs7O0FBS0E7RUFFQztFQUNBO0VBQ0E7O0FBR0Q7RUFFQzs7O0FBSUY7RUFFQztFQUNBO0VBQ0E7OztBQUdEO0VBRUM7OztBQUdEO0FBQ0E7RUFFQyIsInNvdXJjZXNDb250ZW50IjpbIlxuOnJvb3Rcbntcblx0LS1iaWxpbmd1YWwtdGV4dC1zaXplLW06IGNhbGModmFyKC0tYm9keS10ZXh0LXNpemUpICsgMXB4KTtcblx0LS1iaWxpbmd1YWwtdGV4dC1zaXplLXM6IHZhcigtLWJvZHktdGV4dC1zaXplKTtcblx0LS1iaWxpbmd1YWwtdGV4dC1zaXplLXNvdXJjZTogMC44ZW07XG59XG5cbkBtaXhpbiBmb250LXNpemUtYXV0bygkYmFzZS1zaXplLCAkZGVmYXVsdC1zaXplOiB2YXIoLS1iaWxpbmd1YWwtdGV4dC1zaXplLW0pLCAkYmFzZS1wOiAwLjg1KVxue1xuXHRmb250LXNpemU6IG1heCgkZGVmYXVsdC1zaXplLCBjYWxjKCRiYXNlLXNpemUgKiAkYmFzZS1wKSk7XG59XG5cbi5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXJcbntcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogdmFyKC0tYmlsaW5ndWFsLXRleHQtc2l6ZS1tKTtcblx0bGluZS1oZWlnaHQ6IDE7XG5cblx0ZW1cblx0e1xuXHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0fVxuXG5cdD4gZW0uYmlsaW5ndWFsX190cmFuc19zb3VyY2Vcblx0e1xuXHRcdGZvbnQtc2l6ZTogdmFyKC0tYmlsaW5ndWFsLXRleHQtc2l6ZS1zb3VyY2UpO1xuXHR9XG5cblx0I3NldHRpbmdzID4gZGl2LnRhYi1uYXYgYnV0dG9uID4gJlxuXHQsICNxdWlja3NldHRpbmdzIGRpdi50YWItbmF2IGJ1dHRvbiA+ICZcblx0e1xuXHRcdEBpbmNsdWRlIGZvbnQtc2l6ZS1hdXRvKHZhcigtLXNlY3Rpb24taGVhZGVyLXRleHQtc2l6ZSkpXG5cdH1cblxuXHQubGcuZ3JhZGlvLWJ1dHRvbiA+ICZcblx0e1xuXHRcdEBpbmNsdWRlIGZvbnQtc2l6ZS1hdXRvKHZhcigtLWJ1dHRvbi1sYXJnZS10ZXh0LXNpemUpLCAwLjkpXG5cdH1cbn1cblxuI3R4dGltZ19ocl9maW5hbHJlcyAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyIGVtLFxuI3RhYl90aSAub3V0cHV0LWh0bWwgLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlciBlbSxcbiN0YWJfdGkgLmdyYWRpby1odG1sIC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIgZW0sXG4jc2RkcC1keW5hbWljLXByb21wdGluZyAuZ3JhZGlvLWh0bWwgLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlciBlbSxcbiNhdmFpbGFibGVfZXh0ZW5zaW9ucyAuZXh0ZW5zaW9uLXRhZyAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyIGVtLFxuI2F2YWlsYWJsZV9leHRlbnNpb25zIC5kYXRlX2FkZGVkIC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIgZW0sXG4jYXZhaWxhYmxlX2V4dGVuc2lvbnMgKyBwID4gLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlciBlbSxcbi5ncmFkaW8taW1hZ2UgZGl2W2RhdGEtdGVzdGlkPVwiaW1hZ2VcIl0gLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlciBlbVxue1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4jc2V0dGluZ3MgLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlcjpub3QoI3NldHRpbmdzIC50YWJpdGVtIC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIpLFxubGFiZWwgPiBzcGFuID4gLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlcixcbmZpZWxkc2V0ID4gc3BhbiA+IC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIsXG4ubGFiZWwtd3JhcCA+IHNwYW4gPiAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyLFxuLnctZnVsbCA+IHNwYW4gPiAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyLFxuLmNvbnRleHQtbWVudS1pdGVtcyAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyLFxuLnNpbmdsZS1zZWxlY3QgLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlciwgdWwub3B0aW9ucyAuaW5uZXItaXRlbSArIC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIsXG4ub3V0cHV0LWh0bWwgLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlcjpub3QodGggLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlciksXG4uZ3JhZGlvLWh0bWwgLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlcjpub3QodGggLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlciwgLnBvc2V4X2NvbnQgLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlciksXG4ub3V0cHV0LW1hcmtkb3duIC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIsXG4uZ3JhZGlvLW1hcmtkb3duIC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIsXG4uZ3JhZGlvLWltYWdlID4gZGl2LmZsb2F0IC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIsXG4uZ3JhZGlvLWZpbGUgPiBkaXYuZmxvYXQgLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlcixcbi5ncmFkaW8tY29kZSA+IGRpdi5mbG9hdCAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyLFxuLnBvc2V4X3NldHRpbmdfY29udCAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyOm5vdCgucG9zZXhfYmcgLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlciksIC8qIFBvc2V4IGV4dGVuc2lvbiAqL1xuI2R5bmFtaWMtcHJvbXB0aW5nIC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXJcbntcblx0Zm9udC1zaXplOiB2YXIoLS1iaWxpbmd1YWwtdGV4dC1zaXplLXMpO1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuI2V4dGVuc2lvbnMgbGFiZWwgLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlcixcbiNhdmFpbGFibGVfZXh0ZW5zaW9ucyB0ZCAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyLFxuLmxhYmVsLXdyYXAgPiBzcGFuID4gLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlclxue1xuXHRmb250LXNpemU6IGluaGVyaXQ7XG5cdGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4ubGFiZWwtd3JhcCA+IHNwYW46Zmlyc3Qtb2YtdHlwZVxue1xuXHRmb250LXNpemU6IHZhcigtLWJpbGluZ3VhbC10ZXh0LXNpemUtbSk7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4jdHh0MmltZ19zY3JpcHRfY29udGFpbmVyID4gZGl2XG57XG5cdG1hcmdpbi10b3A6IHZhcigtLWxheW91dC1nYXAsIDEycHgpO1xufVxuXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXJcbntcblx0bGluZS1oZWlnaHQ6IDE7XG5cdHBhZGRpbmc6IDRweCAwO1xufVxuXG5sYWJlbCA+IHNwYW5cbntcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5cbmRpdltkYXRhLXRlc3RpZD1cImltYWdlXCJdXG57XG5cdC5zdGFydC1wcm9tcHRcblx0e1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xuXHRcdGNvbG9yOiAjMjIyO1xuXHRcdHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2UtaW4tb3V0O1xuXHR9XG5cblx0Jjpob3ZlciAuc3RhcnQtcHJvbXB0XG5cdHtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG59XG5cbi5sYWJlbC13cmFwID4gc3Bhbi5pY29uXG57XG5cdHdpZHRoOiAxZW07XG5cdGhlaWdodDogMWVtO1xuXHR0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xufVxuXG4uZ3JhZGlvLWRyb3Bkb3duIHVsLm9wdGlvbnMgbGkuaXRlbVxue1xuXHRwYWRkaW5nOiAwLjNlbSAwLjRlbSAhaW1wb3J0YW50O1xufVxuXG4vKiBQb3NleCBleHRlbnNpb24gKi9cbi5wb3NleF9iZ1xue1xuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIl19 */`;
      document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css));
    }
  });

  // src/logger.ts
  function createLogger() {
    let loggerTimerMap = /* @__PURE__ */ new Map(), loggerConf = {
      badge: !0,
      label: "Logger",
      enable: !1
    };
    return new Proxy(console, {
      get: (target, propKey) => {
        if (propKey === "init")
          return (label, enable) => {
            loggerConf.label = label, loggerConf.enable = enable ?? !0;
          };
        if (propKey === "enable")
          return (enable) => loggerConf.enable = enable ?? loggerConf.enable ?? !0;
        if (propKey in target)
          return (...args) => {
            if (!loggerConf.enable && propKey !== "error") return;
            let color = ["#39cfe1", "#006cab"], label, start;
            switch (propKey) {
              case "error":
                color = ["#f70000", "#a70000"];
                break;
              case "warn":
                color = ["#f7b500", "#b58400"];
                break;
              case "time":
                label = args[0], loggerTimerMap.has(label) ? logger.warn(`Timer '${label}' already exisits`) : loggerTimerMap.set(label, performance.now());
                return;
              case "timeEnd":
                label = args[0], start = loggerTimerMap.get(label), start === void 0 ? logger.warn(`Timer '${label}' does not exist`) : (loggerTimerMap.delete(label), logger.log(`${label}: ${performance.now() - start} ms`));
                return;
              case "groupEnd":
                loggerConf.badge = !0;
                break;
            }
            let badge = loggerConf.badge ? [
              `%c${loggerConf.label}`,
              `color: #fff; background: linear-gradient(180deg, ${color[0]}, ${color[1]}); text-shadow: 0px 0px 1px #0003; padding: 3px 5px; border-radius: 4px;`
            ] : [];
            target[propKey](...badge, ...args), (propKey === "group" || propKey === "groupCollapsed") && (loggerConf.badge = !1);
          };
      }
    });
  }
  var logger = createLogger(), loggerShow = createLogger();
  function consoleDebug(...argv) {
    loggerShow.debug(...argv);
  }
  function consoleInfo(...argv) {
    loggerShow.info(...argv);
  }
  function consoleError(...argv) {
    loggerShow.error(...argv);
  }

  // src/dom.ts
  var app;
  function _gradioApp() {
    return app ??= gradioApp();
  }
  function querySelectorAll(...args) {
    return _gradioApp().querySelectorAll(...args);
  }
  function existsWebuiOpts() {
    return typeof opts < "u" && Object.keys(opts).length !== 0;
  }
  function getWebuiOpts() {
    return existsWebuiOpts() ? opts : {};
  }

  // src/options.ts
  var i18nRegex = /* @__PURE__ */ new Map(), i18nScope = {}, scopedSource = {}, i18n = null, regex_scope = /^##(?<scope>.+)##(?<skey>.+)$/, config;
  function readFile(filePath) {
    return consoleInfo("readFile", `file=${filePath}`), fetch(`file=${filePath}`, {
      method: "GET"
    }).then((res) => res.text());
  }
  function initLocalization() {
    i18nRegex.clear(), i18nScope = {}, scopedSource = {}, i18n = null;
  }
  function getConfig() {
    return config ??= initConfig();
  }
  function initConfig() {
    let opts2 = getWebuiOpts(), config2 = {
      enabled: opts2.bilingual_localization_enabled,
      file: opts2.bilingual_localization_file,
      dirs: opts2.bilingual_localization_dirs,
      order: opts2.bilingual_localization_order,
      enableLogger: opts2.bilingual_localization_logger
    };
    if (!(!config2.enabled || !config2.file || config2.file === "None" || !config2.dirs || config2.dirs === "None"))
      return config2.dirs = JSON.parse(config2.dirs), config2;
  }
  async function loadLocalization(dirs, file) {
    let label = "loadLocalization";
    logger.debug(`${label}:init`), logger.time(`${label}:done`);
    let responseText = await readFile(dirs[file]).then((value) => (initLocalization(), value));
    return i18n = JSON.parse(responseText, (key, value) => {
      if (key.startsWith("@@")) {
        let regex = getRegex(key.slice(2));
        regex instanceof RegExp && i18nRegex.set(regex, value);
      } else if (regex_scope.test(key)) {
        let { scope, skey } = key.match(regex_scope).groups;
        if (scope.startsWith("@") ? scope = scope.slice(1) : scope = "#" + scope, !scope.length)
          return value;
        i18nScope[scope] ||= {}, i18nScope[scope][skey] = value, scopedSource[skey] ||= [], scopedSource[skey].push(scope);
      } else
        return value;
    }), logger.timeEnd(`${label}:done`), logger.group("Localization file loaded."), logger.info("i18n", i18n), logger.info("i18nRegex", i18nRegex), logger.info("i18nScope", i18nScope), logger.info("scopedSource", scopedSource), logger.groupEnd(), {
      i18n,
      i18nRegex,
      i18nScope,
      scopedSource
    };
  }
  function getRegex(regex) {
    try {
      regex = regex.trim();
      let parts = regex.split("/");
      if (regex[0] !== "/" || parts.length < 3)
        return regex = regex.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"), new RegExp(regex);
      let option = parts[parts.length - 1], lastIndex = regex.lastIndexOf("/");
      return regex = regex.substring(1, lastIndex), new RegExp(regex, option);
    } catch {
      return null;
    }
  }

  // src/html.ts
  function htmlEncode(htmlStr) {
    return htmlStr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function parseHtmlStringToElement(htmlStr) {
    let template = document.createElement("template");
    return template.insertAdjacentHTML("afterbegin", htmlStr), template.firstElementChild;
  }

  // src/const.ts
  var ignore_selector = [
    ".bilingual__trans_wrapper",
    // self
    ".resultsFlexContainer",
    // tag-autocomplete
    "#setting_sd_model_checkpoint select",
    // model checkpoint
    "#setting_sd_vae select",
    // vae model
    "#txt2img_styles, #img2txt_styles",
    // styles select
    ".extra-network-cards .card .actions .name",
    // extra network cards name
    "script, style, svg, g, path",
    // script / style / svg elements
    "#tags > #tags a",
    ".bilingual__trans_ignore",
    ...[
      "svg",
      "canvas",
      ".bilingual__trans_source",
      "#txt2img_prompt_container",
      "#img2img_prompt_container",
      "#lobe_highlighter",
      ".shiki",
      ".bilingual__trans_ignore_deep",
      ".bilingual__trans_source",
      ".progress",
      ".progress-text",
      ".progressDiv",
      "#physton-prompt-all-in-one",
      ".physton-prompt"
    ].map((v) => `${v}, ${v} *`),
    // https://github.com/journey-ad/sd-webui-bilingual-localization/issues/30
    ".ace_line",
    ".ace_prompttoken"
  ].join(",");

  // src/util.ts
  function classListContains(node, className) {
    return node?.classList?.contains(className);
  }
  function isIgnoreTranslateNode(node) {
    return node.matches?.(ignore_selector) || classListContains(node, "bilingual__trans_wrapper" /* trans_wrapper */);
  }

  // src/translate.ts
  var re_num = /^[\.\d]+$/;
  function checkRegex(source) {
    for (let [regex, value] of i18nRegex.entries())
      if (regex.test(source))
        return logger.log("regex", regex, source, value), source.replace(regex, value);
  }
  function doTranslate(el, source, type, cb, ...args) {
    if (source = source.trim(), !source.length || re_num.test(source)) return;
    let translation, scopes = scopedSource[source];
    if (scopes) {
      logger.debug("doTranslate", "scope", el, source, scopes);
      for (let scope of scopes)
        if (el.parentElement.closest(scope)) {
          translation = i18nScope[scope][source];
          break;
        }
    }
    if (translation ??= i18n[source] || checkRegex(source), !translation || source === translation) {
      el.textContent === "__biligual__will_be_replaced__" /* will_be_replaced */ && (el.textContent = source), classListContains(el.nextSibling, "bilingual__trans_wrapper" /* trans_wrapper */) && el.nextSibling.remove();
      return;
    }
    let isTranslationIncludeSource = translation.startsWith(source), isOriginalFirst = config.order === "Original First" /* ORIGINAL_FIRST */, translationOnly = translation;
    switch (isOriginalFirst && ([source, translation] = [translation, source]), type) {
      case "text" /* text */:
        el.textContent = translationOnly;
        break;
      case "element" /* element */:
        if (isTranslationIncludeSource) {
          el.nodeType === 3 ? el.nodeValue = translationOnly : htmlEncode(el.textContent) === el.innerHTML && (el.innerHTML = htmlEncode(translationOnly));
          break;
        }
        let htmlEl = parseHtmlStringToElement(`<div class="bilingual__trans_wrapper">${htmlEncode(translation)}<em class="bilingual__trans_source">${htmlEncode(source)}</em></div>`);
        if (el.hasChildNodes()) {
          let textNode = Array.from(el.childNodes).find(
            (node) => node.nodeName === "#text" && (node.textContent.trim() === source || node.textContent.trim() === "__biligual__will_be_replaced__" /* will_be_replaced */)
          );
          textNode && (textNode.textContent = "", classListContains(textNode.nextSibling, "bilingual__trans_wrapper" /* trans_wrapper */) && textNode.nextSibling.remove(), textNode.parentNode.insertBefore(htmlEl, textNode.nextSibling));
        } else
          el.textContent = "", classListContains(el.nextSibling, "bilingual__trans_wrapper" /* trans_wrapper */) && el.nextSibling.remove(), el.parentNode.insertBefore(htmlEl, el.nextSibling);
        break;
      case "option" /* option */:
        el.textContent = isTranslationIncludeSource ? translationOnly : `${translation} (${source})`;
        break;
      case "title" /* title */:
        el.title = isTranslationIncludeSource ? translationOnly : `${translation}
${source}`;
        break;
      case "placeholder" /* placeholder */:
        el.placeholder = isTranslationIncludeSource ? translationOnly : `${translation}

${source}`;
        break;
      default:
        return translationOnly;
    }
    cb?.(el, isOriginalFirst ? translation : source, type, translationOnly, args);
  }
  function translateEl(el, {
    deep = !1,
    rich = !1,
    addCount,
    cb
  } = {}) {
    if (isIgnoreTranslateNode(el)) return !1;
    addCount?.(), el.title && doTranslate(el, el.title, "title" /* title */, cb), el.placeholder && doTranslate(el, el.placeholder, "placeholder" /* placeholder */, cb), el.tagName === "OPTION" && doTranslate(el, el.textContent, "option" /* option */, cb), deep || rich ? Array.from(el.childNodes).forEach((node) => {
      if (node.nodeName === "#text") {
        if (rich) {
          doTranslate(node, node.textContent, "text" /* text */, cb);
          return;
        }
        deep && doTranslate(node, node.textContent, "element" /* element */, cb);
      } else node.childNodes.length > 0 && translateEl(node, { deep, rich });
    }) : doTranslate(el, el.textContent, "element" /* element */, cb);
  }
  async function translatePage() {
    let label = "translatePage";
    logger.debug(`${label}:start`), logger.time(`${label}:done`), querySelectorAll([
      "label span, fieldset span, button",
      // major label and button description text
      "textarea[placeholder], select, option",
      // text box placeholder and select element
      ".transition > div > span:not([class])",
      ".label-wrap > span",
      // collapse panel added by extension
      ".gradio-image>div.float",
      // image upload description
      ".gradio-file>div.float",
      // file upload description
      ".gradio-code>div.float",
      // code editor description
      "#modelmerger_interp_description .output-html",
      // model merger description
      "#modelmerger_interp_description .gradio-html",
      // model merger description
      "#lightboxModal span"
      // image preview lightbox
    ]).forEach((el) => translateEl(el, { deep: !0 })), querySelectorAll([
      'div[data-testid="image"] > div > div',
      // description of image upload panel
      "#extras_image_batch > div",
      //  description of extras image batch file upload panel
      ".output-html:not(#footer), .gradio-html:not(#footer), .output-markdown, .gradio-markdown",
      // output html exclude footer
      "#dynamic-prompting"
      // dynamic-prompting extension
    ]).forEach((el) => translateEl(el, { rich: !0 })), logger.timeEnd(`${label}:done`);
  }
  function delegateEvent(parent, eventType, selector, handler) {
    parent.addEventListener(eventType, function(event) {
      let target = event.target;
      if (target = target.closest(selector)) {
        let label = "handleDropdown:event";
        logger.debug(`${label}:start`, event), logger.time(`${label}:done`), handler.call(target, event), logger.timeEnd(`${label}:done`);
      }
    });
  }
  async function handleDropdown() {
    let label = "handleDropdown";
    logger.debug(`${label}:init`), delegateEvent(_gradioApp(), "mousedown", "ul.options .item", function(event) {
      let { target } = event;
      if (!classListContains(target, "item")) {
        let item = target.closest(".item");
        logger.debug(label, "simulate click menu item", {
          event,
          target,
          item
        }), item.dispatchEvent(new Event("mousedown", { bubbles: !0 }));
        return;
      }
      let source = target.dataset.value, $labelEl = target?.closest(".wrap")?.querySelector(".wrap-inner .single-select");
      if (source && $labelEl) {
        let title = titles?.[source];
        title?.length && $labelEl.title !== title && ($labelEl.title = title), doTranslate($labelEl, source, "element" /* element */, (...argv) => {
          logger.debug(label, "doTranslate", argv);
        });
      }
    });
  }
  async function translateAll() {
    return Promise.allSettled([
      translatePage(),
      handleDropdown()
    ]);
  }
  function initObserver() {
    let label = "initObserver:init";
    logger.debug(`${label}:start`), logger.time(`${label}:done`);
    let _count = 0, observer = new MutationObserver((mutations) => {
      let _nodesCount = 0, _now = performance.now(), addCount = () => _nodesCount;
      for (let mutation of mutations)
        if (mutation.type === "characterData") {
          let parent = mutation.target?.parentElement?.parentElement;
          parent?.tagName === "LABEL" && translateEl(mutation.target, {
            addCount,
            cb(...argv) {
              logger.debug(label, "translateEl", "characterData", parent, argv);
            }
          });
        } else mutation.type === "attributes" ? translateEl(mutation.target, {
          addCount,
          cb(...argv) {
            logger.debug(label, "translateEl", "attributes", argv);
          }
        }) : mutation.addedNodes.forEach((node) => {
          isIgnoreTranslateNode(node) || (_nodesCount++, node.nodeType === 1 && /(output|gradio)-(html|markdown)/.test(node.className) ? translateEl(node, {
            rich: !0
          }) : node.nodeType === 3 ? doTranslate(node, node.textContent, "text" /* text */) : translateEl(node, {
            deep: !0
          }));
        });
      _nodesCount > 0 && logger.info(`UI Update #${_count++}: ${performance.now() - _now} ms, ${_nodesCount} nodes`, mutations);
    });
    return observer.observe(_gradioApp(), {
      characterData: !0,
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["title", "placeholder"]
    }), logger.timeEnd(`${label}:done`), observer;
  }

  // src/main.ts
  var import_promise = __toESM(require_promise3());
  loggerShow.init("Bilingual", !0);
  async function run() {
    if (await Promise.resolve().then(() => (init_style(), style_exports)), window.localization && Object.keys(window.localization).length) return;
    let config2 = getConfig();
    if (consoleDebug("config", config2), !config2) return;
    logger.init("Bilingual", config2.enableLogger);
    let {
      i18n: i18n2
    } = await loadLocalization(config2.dirs, config2.file);
    if (i18n2) {
      await translateAll();
      let { promise, resolve } = import_promise.default.withResolvers();
      setTimeout(resolve, 5e3), await promise.then(initObserver);
    }
  }

  // src/index.mts
  var import_promise2 = __toESM(require_promise3(), 1);
  (async () => {
    let loaded, label = "Bilingual";
    logger.init("Bilingual"), consoleDebug(`${label}:init`), consoleDebug(`${label}:debug mode enabled`), logger.time(`${label}:done`);
    function removeCallback(callbacks, cb) {
      let idx;
      do
        idx = callbacks.findIndex((v) => v === cb), idx !== -1 && callbacks.splice(idx, 1);
      while (idx !== -1);
    }
    function onDOMContentLoaded(listener) {
      logger.debug("document.readyState", document.readyState), document.readyState === "complete" ? listener() : document.addEventListener("DOMContentLoaded", listener);
    }
    async function onAfterUiLoadedOnce(fn) {
      let { promise, resolve, reject } = import_promise2.default.withResolvers(), timers = [];
      promise.catch((e) => (loaded ||= existsWebuiOpts(), Promise.reject(e))).then(() => {
        loaded ||= existsWebuiOpts();
      });
      let delay = 1e4;
      typeof onOptionsChanged < "u" ? (onOptionsChanged(resolve), promise = promise.then(() => {
        typeof optionsChangedCallbacks < "u" && removeCallback(optionsChangedCallbacks, resolve);
      }), loaded ||= existsWebuiOpts(), loaded && (delay = 0, onDOMContentLoaded(() => timers.push(setTimeout(resolve, 1e3))))) : onDOMContentLoaded(() => timers.push(setTimeout(reject, 3e4)));
      let timer1 = delay && setInterval(async () => {
        loaded ||= existsWebuiOpts(), loaded && resolve();
      }, delay);
      await promise.catch((e) => consoleError("onAfterUiLoadedOnce:reject", {
        loaded,
        fn,
        resolve,
        promise
      }, e)).then(() => {
        try {
          clearInterval(timer1);
        } catch {
        }
        for (let ti of timers)
          try {
            clearTimeout(ti);
          } catch {
          }
      }), (loaded ? consoleInfo : consoleError)("onAfterUiLoadedOnce:executeCallbacks", {
        loaded,
        fn,
        opts: getWebuiOpts()
      }), loaded && await fn();
    }
    await onAfterUiLoadedOnce(run), logger.timeEnd(`${label}:done`);
  })();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZmFpbHMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3BhdGguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9lbnZpcm9ubWVudC12OC12ZXJzaW9uLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtc3ltYm9sLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYS1jYWxsYWJsZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9nZXQtbWV0aG9kLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1wdXJlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3NoYXJlZC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy90by1vYmplY3QuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy91aWQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2lzLWZvcmNlZC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2V4cG9ydC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtYWNjZXNzb3IuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtcG9zc2libGUtcHJvdG90eXBlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL21hdGgtdHJ1bmMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy90by1sZW5ndGguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3Qta2V5cy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaHRtbC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtY3JlYXRlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2luc3RhbGwtZXJyb3ItY2F1c2UuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZXJyb3Itc3RhY2stY2xlYXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZXJyb3Itc3RhY2staW5zdGFsbGFibGUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZXJyb3Itc3RhY2staW5zdGFsbC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jbGFzc29mLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2dldC1pbnRlcm5hbC1pdGVyYXRvci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kLWludGVybmFsLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1pbnRlcm5hbC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pdGVyYXRvci1jbG9zZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pdGVyYXRlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLXN0cmluZy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9ub3JtYWxpemUtc3RyaW5nLWFyZ3VtZW50LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hZ2dyZWdhdGUtZXJyb3IuY29uc3RydWN0b3IuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFnZ3JlZ2F0ZS1lcnJvci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC10by1zdHJpbmcuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLWNvbnN0cnVjdG9yLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2l0ZXJhdG9yLWRlZmluZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jcmVhdGUtaXRlci1yZXN1bHQtb2JqZWN0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9lbnZpcm9ubWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9lbnZpcm9ubWVudC1pcy1ub2RlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3Nvci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9zZXQtc3BlY2llcy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hbi1pbnN0YW5jZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1jb25zdHJ1Y3Rvci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hLWNvbnN0cnVjdG9yLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYXJyYXktc2xpY2UuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9lbnZpcm9ubWVudC1pcy1pb3MuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdGFzay5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9zYWZlLWdldC1idWlsdC1pbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9xdWV1ZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9lbnZpcm9ubWVudC1pcy1pb3MtcGViYmxlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2Vudmlyb25tZW50LWlzLXdlYm9zLXdlYmtpdC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9taWNyb3Rhc2suanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaG9zdC1yZXBvcnQtZXJyb3JzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3BlcmZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvcHJvbWlzZS1uYXRpdmUtY29uc3RydWN0b3IuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvcHJvbWlzZS1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMucHJvbWlzZS5jb25zdHJ1Y3Rvci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvcHJvbWlzZS1zdGF0aWNzLWluY29ycmVjdC1pdGVyYXRpb24uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnByb21pc2UuYWxsLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5wcm9taXNlLmNhdGNoLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5wcm9taXNlLnJhY2UuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnByb21pc2UucmVqZWN0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3Byb21pc2UtcmVzb2x2ZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMucHJvbWlzZS5yZXNvbHZlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5wcm9taXNlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5wcm9taXNlLmFsbC1zZXR0bGVkLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5wcm9taXNlLmFueS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMucHJvbWlzZS50cnkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnByb21pc2Uud2l0aC1yZXNvbHZlcnMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnByb21pc2UuZmluYWxseS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9zdHJpbmctbXVsdGlieXRlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9wcm9taXNlL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzLXB1cmVAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvcHJvbWlzZS9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMub2JqZWN0LmNyZWF0ZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMucmVmbGVjdC5vd24ta2V5cy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzbmV4dC5wcm9taXNlLmFsbC1rZXllZC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXNuZXh0LnByb21pc2UuYWxsLXNldHRsZWQta2V5ZWQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzbmV4dC5wcm9taXNlLnRyeS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qcy1wdXJlQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXNuZXh0LnByb21pc2Uud2l0aC1yZXNvbHZlcnMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanMtcHVyZUAzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9hY3R1YWwvcHJvbWlzZS9pbmRleC5qcyIsICIuLi8uLi9zcmMvc3R5bGUuc2NzcyIsICIuLi8uLi9zcmMvbG9nZ2VyLnRzIiwgIi4uLy4uL3NyYy9kb20udHMiLCAiLi4vLi4vc3JjL29wdGlvbnMudHMiLCAiLi4vLi4vc3JjL2h0bWwudHMiLCAiLi4vLi4vc3JjL2NvbnN0LnRzIiwgIi4uLy4uL3NyYy91dGlsLnRzIiwgIi4uLy4uL3NyYy90cmFuc2xhdGUudHMiLCAiLi4vLi4vc3JjL21haW4udHMiLCAiLi4vLi4vc3JjL2luZGV4Lm10cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgY2hlY2sodHlwZW9mIHRoaXMgPT0gJ29iamVjdCcgJiYgdGhpcykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuICB2YXIgdGVzdCA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgYXBwbHkgPSBGdW5jdGlvblByb3RvdHlwZS5hcHBseTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kLCBlcy9uby1yZWZsZWN0IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFJlZmxlY3QgPT0gJ29iamVjdCcgJiYgUmVmbGVjdC5hcHBseSB8fCAoTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoYXBwbHkpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShhcHBseSwgYXJndW1lbnRzKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuKSB7XG4gIC8vIE5hc2hvcm4gYnVnOlxuICAvLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMTI4XG4gIC8vICAgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzExMzBcbiAgaWYgKGNsYXNzb2ZSYXcoZm4pID09PSAnRnVuY3Rpb24nKSByZXR1cm4gdW5jdXJyeVRoaXMoZm4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90XG52YXIgZG9jdW1lbnRBbGwgPSB0eXBlb2YgZG9jdW1lbnQgPT0gJ29iamVjdCcgJiYgZG9jdW1lbnQuYWxsO1xuXG4vLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXR5cGVvZi11bmRlZmluZWQgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIGRvY3VtZW50QWxsID09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50QWxsICE9PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nIHx8IGFyZ3VtZW50ID09PSBkb2N1bWVudEFsbDtcbn0gOiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodmFyaWFibGUpID8gdmFyaWFibGUgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24ocGF0aFtuYW1lc3BhY2VdKSB8fCBhRnVuY3Rpb24oZ2xvYmFsVGhpc1tuYW1lc3BhY2VdKVxuICAgIDogcGF0aFtuYW1lc3BhY2VdICYmIHBhdGhbbmFtZXNwYWNlXVttZXRob2RdIHx8IGdsb2JhbFRoaXNbbmFtZXNwYWNlXSAmJiBnbG9iYWxUaGlzW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKHt9LmlzUHJvdG90eXBlT2YpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWxUaGlzLm5hdmlnYXRvcjtcbnZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyQWdlbnQgPyBTdHJpbmcodXNlckFnZW50KSA6ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbFRoaXMuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWxUaGlzLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0wgJiZcbiAgIVN5bWJvbC5zaGFtICYmXG4gIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcywga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxUaGlzW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXNbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxuKHN0b3JlLnZlcnNpb25zIHx8IChzdG9yZS52ZXJzaW9ucyA9IFtdKSkucHVzaCh7XG4gIHZlcnNpb246ICczLjUwLjAnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ1x1MDBBOSAyMDEzXHUyMDEzMjAyNSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSwgMjAyNVx1MjAxMzIwMjYgQ29yZUpTIENvbXBhbnkgKGNvcmUtanMuaW8pLiBBbGwgcmlnaHRzIHJlc2VydmVkLicsXG4gIGxpY2Vuc2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjUwLjAvTElDRU5TRScsXG4gIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzJ1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1jcmVhdGUgLS0gc2FmZVxudmFyIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGUgfHwgT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgfHwgY3JlYXRlKG51bGwpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjEudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsVGhpcy5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtY2xhdXNlJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgYmluZCA9IHVuY3VycnlUaGlzKHVuY3VycnlUaGlzLmJpbmQpO1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0KSB7XG4gIGFDYWxsYWJsZShmbik7XG4gIHJldHVybiB0aGF0ID09PSB1bmRlZmluZWQgPyBmbiA6IE5BVElWRV9CSU5EID8gYmluZChmbiwgdGhhdCkgOiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG4vLyBhZGQgZGVidWdnaW5nIGluZm9cbnJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIHdyYXBDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIChOYXRpdmVDb25zdHJ1Y3Rvcikge1xuICB2YXIgV3JhcHBlciA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBXcmFwcGVyKSB7XG4gICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKCk7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBOYXRpdmVDb25zdHJ1Y3RvcihhKTtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKGEsIGIpO1xuICAgICAgfSByZXR1cm4gbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKGEsIGIsIGMpO1xuICAgIH0gcmV0dXJuIGFwcGx5KE5hdGl2ZUNvbnN0cnVjdG9yLCB0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuICBXcmFwcGVyLnByb3RvdHlwZSA9IE5hdGl2ZUNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgcmV0dXJuIFdyYXBwZXI7XG59O1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgUFJPVE8gPSBvcHRpb25zLnByb3RvO1xuXG4gIHZhciBuYXRpdmVTb3VyY2UgPSBHTE9CQUwgPyBnbG9iYWxUaGlzIDogU1RBVElDID8gZ2xvYmFsVGhpc1tUQVJHRVRdIDogZ2xvYmFsVGhpc1tUQVJHRVRdICYmIGdsb2JhbFRoaXNbVEFSR0VUXS5wcm90b3R5cGU7XG5cbiAgdmFyIHRhcmdldCA9IEdMT0JBTCA/IHBhdGggOiBwYXRoW1RBUkdFVF0gfHwgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHBhdGgsIFRBUkdFVCwge30pW1RBUkdFVF07XG4gIHZhciB0YXJnZXRQcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuXG4gIHZhciBGT1JDRUQsIFVTRV9OQVRJVkUsIFZJUlRVQUxfUFJPVE9UWVBFO1xuICB2YXIga2V5LCBzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHksIG5hdGl2ZVByb3BlcnR5LCByZXN1bHRQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcblxuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIFVTRV9OQVRJVkUgPSAhRk9SQ0VEICYmIG5hdGl2ZVNvdXJjZSAmJiBoYXNPd24obmF0aXZlU291cmNlLCBrZXkpO1xuXG4gICAgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcblxuICAgIGlmIChVU0VfTkFUSVZFKSBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihuYXRpdmVTb3VyY2UsIGtleSk7XG4gICAgICBuYXRpdmVQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgbmF0aXZlUHJvcGVydHkgPSBuYXRpdmVTb3VyY2Vba2V5XTtcblxuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgaW1wbGVtZW50YXRpb25cbiAgICBzb3VyY2VQcm9wZXJ0eSA9IChVU0VfTkFUSVZFICYmIG5hdGl2ZVByb3BlcnR5KSA/IG5hdGl2ZVByb3BlcnR5IDogc291cmNlW2tleV07XG5cbiAgICBpZiAoIUZPUkNFRCAmJiAhUFJPVE8gJiYgdHlwZW9mIHRhcmdldFByb3BlcnR5ID09IHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSkgY29udGludWU7XG5cbiAgICAvLyBiaW5kIG1ldGhvZHMgdG8gZ2xvYmFsIGZvciBjYWxsaW5nIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBpZiAob3B0aW9ucy5iaW5kICYmIFVTRV9OQVRJVkUpIHJlc3VsdFByb3BlcnR5ID0gYmluZChzb3VyY2VQcm9wZXJ0eSwgZ2xvYmFsVGhpcyk7XG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZXMgaW4gdGhpcyB2ZXJzaW9uXG4gICAgZWxzZSBpZiAob3B0aW9ucy53cmFwICYmIFVTRV9OQVRJVkUpIHJlc3VsdFByb3BlcnR5ID0gd3JhcENvbnN0cnVjdG9yKHNvdXJjZVByb3BlcnR5KTtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICBlbHNlIGlmIChQUk9UTyAmJiBpc0NhbGxhYmxlKHNvdXJjZVByb3BlcnR5KSkgcmVzdWx0UHJvcGVydHkgPSB1bmN1cnJ5VGhpcyhzb3VyY2VQcm9wZXJ0eSk7XG4gICAgLy8gZGVmYXVsdCBjYXNlXG4gICAgZWxzZSByZXN1bHRQcm9wZXJ0eSA9IHNvdXJjZVByb3BlcnR5O1xuXG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHNvdXJjZVByb3BlcnR5ICYmIHNvdXJjZVByb3BlcnR5LnNoYW0pIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHJlc3VsdFByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cblxuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgcmVzdWx0UHJvcGVydHkpO1xuXG4gICAgaWYgKFBST1RPKSB7XG4gICAgICBWSVJUVUFMX1BST1RPVFlQRSA9IFRBUkdFVCArICdQcm90b3R5cGUnO1xuICAgICAgaWYgKCFoYXNPd24ocGF0aCwgVklSVFVBTF9QUk9UT1RZUEUpKSB7XG4gICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShwYXRoLCBWSVJUVUFMX1BST1RPVFlQRSwge30pO1xuICAgICAgfVxuICAgICAgLy8gZXhwb3J0IHZpcnR1YWwgcHJvdG90eXBlIG1ldGhvZHNcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShwYXRoW1ZJUlRVQUxfUFJPVE9UWVBFXSwga2V5LCBzb3VyY2VQcm9wZXJ0eSk7XG4gICAgICAvLyBleHBvcnQgcmVhbCBwcm90b3R5cGUgbWV0aG9kc1xuICAgICAgaWYgKG9wdGlvbnMucmVhbCAmJiB0YXJnZXRQcm90b3R5cGUgJiYgKEZPUkNFRCB8fCAhdGFyZ2V0UHJvdG90eXBlW2tleV0pKSB7XG4gICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh0YXJnZXRQcm90b3R5cGUsIGtleSwgc291cmNlUHJvcGVydHkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgRigpKSAhPT0gRi5wcm90b3R5cGU7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG5cbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIE9iamVjdFByb3RvdHlwZSA9ICRPYmplY3QucHJvdG90eXBlO1xuXG4vLyBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gJE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG4gIHZhciBvYmplY3QgPSB0b09iamVjdChPKTtcbiAgaWYgKGhhc093bihvYmplY3QsIElFX1BST1RPKSkgcmV0dXJuIG9iamVjdFtJRV9QUk9UT107XG4gIHZhciBjb25zdHJ1Y3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgaWYgKGlzQ2FsbGFibGUoY29uc3RydWN0b3IpICYmIG9iamVjdCBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgJE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgbWV0aG9kKSB7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxuICAgIHJldHVybiB1bmN1cnJ5VGhpcyhhQ2FsbGFibGUoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIGtleSlbbWV0aG9kXSkpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGFyZ3VtZW50KSB8fCBhcmd1bWVudCA9PT0gbnVsbDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzUG9zc2libGVQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcG9zc2libGUtcHJvdG90eXBlJyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc1Bvc3NpYmxlUHJvdG90eXBlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArICRTdHJpbmcoYXJndW1lbnQpICsgJyBhcyBhIHByb3RvdHlwZScpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAtLSBzYWZlICovXG52YXIgdW5jdXJyeVRoaXNBY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtYWNjZXNzb3InKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGFQb3NzaWJsZVByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLXBvc3NpYmxlLXByb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LnNldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnNldHByb3RvdHlwZW9mXG4vLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qtc2V0cHJvdG90eXBlb2YgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gZnVuY3Rpb24gKCkge1xuICB2YXIgQ09SUkVDVF9TRVRURVIgPSBmYWxzZTtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgdmFyIHNldHRlcjtcbiAgdHJ5IHtcbiAgICBzZXR0ZXIgPSB1bmN1cnJ5VGhpc0FjY2Vzc29yKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nLCAnc2V0Jyk7XG4gICAgc2V0dGVyKHRlc3QsIFtdKTtcbiAgICBDT1JSRUNUX1NFVFRFUiA9IHRlc3QgaW5zdGFuY2VvZiBBcnJheTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKE8pO1xuICAgIGFQb3NzaWJsZVByb3RvdHlwZShwcm90byk7XG4gICAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIE87XG4gICAgaWYgKENPUlJFQ1RfU0VUVEVSKSBzZXR0ZXIoTywgcHJvdG8pO1xuICAgIGVsc2UgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICByZXR1cm4gTztcbiAgfTtcbn0oKSA6IHVuZGVmaW5lZCk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGV4Y2VwdGlvbnMpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpICYmICEoZXhjZXB0aW9ucyAmJiBoYXNPd24oZXhjZXB0aW9ucywga2V5KSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qta2V5cyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0aWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTICYmICFWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIgcHJvcHMgPSB0b0luZGV4ZWRPYmplY3QoUHJvcGVydGllcyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgcHJvcHNba2V5XSk7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBnbG9iYWwgQWN0aXZlWE9iamVjdCAtLSBvbGQgSUUsIFdTSCAqL1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnRpZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xuXG52YXIgR1QgPSAnPic7XG52YXIgTFQgPSAnPCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG52YXIgc2NyaXB0VGFnID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcbiAgYWN0aXZlWERvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnJykpO1xuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcbiAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtYXNzaWdubWVudCAtLSBhdm9pZCBtZW1vcnkgbGVha1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsO1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgYWN0aXZlWERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJ1xuICAgID8gZG9jdW1lbnQuZG9tYWluICYmIGFjdGl2ZVhEb2N1bWVudFxuICAgICAgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgLy8gb2xkIElFXG4gICAgICA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpXG4gICAgOiBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCk7IC8vIFdTSFxuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtY3JlYXRlIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXNNb2R1bGUuZihyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG4vLyBgSW5zdGFsbEVycm9yQ2F1c2VgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pbnN0YWxsZXJyb3JjYXVzZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgb3B0aW9ucykge1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykgJiYgJ2NhdXNlJyBpbiBvcHRpb25zKSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KE8sICdjYXVzZScsIG9wdGlvbnMuY2F1c2UpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyICRFcnJvciA9IEVycm9yO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcblxudmFyIFRFU1QgPSAoZnVuY3Rpb24gKGFyZykgeyByZXR1cm4gU3RyaW5nKG5ldyAkRXJyb3IoYXJnKS5zdGFjayk7IH0pKCd6eGNhc2QnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWRvcy9uby12dWxuZXJhYmxlIC0tIHNhZmVcbnZhciBWOF9PUl9DSEFLUkFfU1RBQ0tfRU5UUlkgPSAvXFxuXFxzKmF0IFteOl0qOlteXFxuXSovO1xudmFyIElTX1Y4X09SX0NIQUtSQV9TVEFDSyA9IFY4X09SX0NIQUtSQV9TVEFDS19FTlRSWS50ZXN0KFRFU1QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdGFjaywgZHJvcEVudHJpZXMpIHtcbiAgaWYgKElTX1Y4X09SX0NIQUtSQV9TVEFDSyAmJiB0eXBlb2Ygc3RhY2sgPT0gJ3N0cmluZycgJiYgISRFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSkge1xuICAgIHdoaWxlIChkcm9wRW50cmllcy0tKSBzdGFjayA9IHJlcGxhY2Uoc3RhY2ssIFY4X09SX0NIQUtSQV9TVEFDS19FTlRSWSwgJycpO1xuICB9IHJldHVybiBzdGFjaztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKCdhJyk7XG4gIGlmICghKCdzdGFjaycgaW4gZXJyb3IpKSByZXR1cm4gdHJ1ZTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnJvciwgJ3N0YWNrJywgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIDcpKTtcbiAgcmV0dXJuIGVycm9yLnN0YWNrICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBjbGVhckVycm9yU3RhY2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXJyb3Itc3RhY2stY2xlYXInKTtcbnZhciBFUlJPUl9TVEFDS19JTlNUQUxMQUJMRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lcnJvci1zdGFjay1pbnN0YWxsYWJsZScpO1xuXG4vLyBub24tc3RhbmRhcmQgVjhcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1ub25zdGFuZGFyZC1lcnJvci1wcm9wZXJ0aWVzIC0tIHNhZmVcbnZhciBjYXB0dXJlU3RhY2tUcmFjZSA9IEVycm9yLmNhcHR1cmVTdGFja1RyYWNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlcnJvciwgQywgc3RhY2ssIGRyb3BFbnRyaWVzKSB7XG4gIGlmIChFUlJPUl9TVEFDS19JTlNUQUxMQUJMRSkge1xuICAgIGlmIChjYXB0dXJlU3RhY2tUcmFjZSkgY2FwdHVyZVN0YWNrVHJhY2UoZXJyb3IsIEMpO1xuICAgIGVsc2UgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGVycm9yLCAnc3RhY2snLCBjbGVhckVycm9yU3RhY2soc3RhY2ssIGRyb3BFbnRyaWVzKSk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgdGVzdCA9IHt9O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8taW1tZWRpYXRlLW11dGF0aW9uIC0tIEVTMyBzeW50YXggbGltaXRhdGlvblxudGVzdFtUT19TVFJJTkdfVEFHXSA9ICd6JztcblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmcodGVzdCkgPT09ICdbb2JqZWN0IHpdJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyBjbGFzc29mUmF3IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCB0YWcsIHJlc3VsdDtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKHRhZyA9IHRyeUdldChPID0gJE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09PSAnT2JqZWN0JyAmJiBpc0NhbGxhYmxlKE8uY2FsbGVlKSA/ICdBcmd1bWVudHMnIDogcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBrbGFzcyA9IGNsYXNzb2YoaXQpO1xuICBpZiAoa2xhc3MgPT09ICdBcmd1bWVudHMnKSBrbGFzcyA9ICdBcnJheSc7XG4gIHJldHVybiBoYXNPd24oSXRlcmF0b3JzLCBrbGFzcykgPyBJdGVyYXRvcnNba2xhc3NdIDogdW5kZWZpbmVkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xudmFyIGdldEludGVybmFsSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWludGVybmFsLWl0ZXJhdG9yJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc051bGxPclVuZGVmaW5lZChpdCkpIHJldHVybiBnZXRNZXRob2QoaXQsIElURVJBVE9SKVxuICAgIHx8IGdldE1ldGhvZChpdCwgJ0BAaXRlcmF0b3InKVxuICAgIHx8IGdldEludGVybmFsSXRlcmF0b3IoaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kLWludGVybmFsJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCwgdXNpbmdJdGVyYXRvcikge1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGdldEl0ZXJhdG9yTWV0aG9kKGFyZ3VtZW50KSA6IHVzaW5nSXRlcmF0b3I7XG4gIGlmIChpc0NhbGxhYmxlKGl0ZXJhdG9yTWV0aG9kKSkgcmV0dXJuIGFuT2JqZWN0KGNhbGwoaXRlcmF0b3JNZXRob2QsIGFyZ3VtZW50KSk7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGl0ZXJhYmxlJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwga2luZCwgdmFsdWUpIHtcbiAgdmFyIGlubmVyUmVzdWx0LCBpbm5lckVycm9yO1xuICBhbk9iamVjdChpdGVyYXRvcik7XG4gIHRyeSB7XG4gICAgaW5uZXJSZXN1bHQgPSBnZXRNZXRob2QoaXRlcmF0b3IsICdyZXR1cm4nKTtcbiAgICBpZiAoIWlubmVyUmVzdWx0KSB7XG4gICAgICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlubmVyUmVzdWx0ID0gY2FsbChpbm5lclJlc3VsdCwgaXRlcmF0b3IpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlubmVyRXJyb3IgPSB0cnVlO1xuICAgIGlubmVyUmVzdWx0ID0gZXJyb3I7XG4gIH1cbiAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuICBpZiAoaW5uZXJFcnJvcikgdGhyb3cgaW5uZXJSZXN1bHQ7XG4gIGFuT2JqZWN0KGlubmVyUmVzdWx0KTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgZ2V0SXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWludGVybmFsJyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC1pbnRlcm5hbCcpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbnZhciBSZXN1bHQgPSBmdW5jdGlvbiAoc3RvcHBlZCwgcmVzdWx0KSB7XG4gIHRoaXMuc3RvcHBlZCA9IHN0b3BwZWQ7XG4gIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xufTtcblxudmFyIFJlc3VsdFByb3RvdHlwZSA9IFJlc3VsdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCB1bmJvdW5kRnVuY3Rpb24sIG9wdGlvbnMpIHtcbiAgdmFyIHRoYXQgPSBvcHRpb25zICYmIG9wdGlvbnMudGhhdDtcbiAgdmFyIEFTX0VOVFJJRVMgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuQVNfRU5UUklFUyk7XG4gIHZhciBJU19SRUNPUkQgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuSVNfUkVDT1JEKTtcbiAgdmFyIElTX0lURVJBVE9SID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX0lURVJBVE9SKTtcbiAgdmFyIElOVEVSUlVQVEVEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklOVEVSUlVQVEVEKTtcbiAgdmFyIGZuID0gYmluZCh1bmJvdW5kRnVuY3Rpb24sIHRoYXQpO1xuICB2YXIgaXRlcmF0b3IsIGl0ZXJGbiwgaW5kZXgsIGxlbmd0aCwgcmVzdWx0LCBuZXh0LCBzdGVwO1xuXG4gIHZhciBzdG9wID0gZnVuY3Rpb24gKGNvbmRpdGlvbikge1xuICAgIHZhciAkaXRlcmF0b3IgPSBpdGVyYXRvcjtcbiAgICBpdGVyYXRvciA9IHVuZGVmaW5lZDtcbiAgICBpZiAoJGl0ZXJhdG9yKSBpdGVyYXRvckNsb3NlKCRpdGVyYXRvciwgJ25vcm1hbCcpO1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHRydWUsIGNvbmRpdGlvbik7XG4gIH07XG5cbiAgdmFyIGNhbGxGbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChBU19FTlRSSUVTKSB7XG4gICAgICBhbk9iamVjdCh2YWx1ZSk7XG4gICAgICByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZVswXSwgdmFsdWVbMV0sIHN0b3ApIDogZm4odmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICB9IHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlLCBzdG9wKSA6IGZuKHZhbHVlKTtcbiAgfTtcblxuICBpZiAoSVNfUkVDT1JEKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYWJsZS5pdGVyYXRvcjtcbiAgfSBlbHNlIGlmIChJU19JVEVSQVRPUikge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgaXRlckZuID0gZ2V0SXRlcmF0b3JNZXRob2QoaXRlcmFibGUpO1xuICAgIGlmICghaXRlckZuKSB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhpdGVyYWJsZSkgKyAnIGlzIG5vdCBpdGVyYWJsZScpO1xuICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXG4gICAgaWYgKGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyRm4pKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoaXRlcmFibGUpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICByZXN1bHQgPSBjYWxsRm4oaXRlcmFibGVbaW5kZXhdKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xuICAgIH1cbiAgICBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlLCBpdGVyRm4pO1xuICB9XG5cbiAgbmV4dCA9IElTX1JFQ09SRCA/IGl0ZXJhYmxlLm5leHQgOiBpdGVyYXRvci5uZXh0O1xuICB3aGlsZSAoIShzdGVwID0gY2FsbChuZXh0LCBpdGVyYXRvcikpLmRvbmUpIHtcbiAgICAvLyBgSXRlcmF0b3JWYWx1ZWAgZXJyb3JzIHNob3VsZCBwcm9wYWdhdGUgd2l0aG91dCBjbG9zaW5nIHRoZSBpdGVyYXRvclxuICAgIHZhciB2YWx1ZSA9IHN0ZXAudmFsdWU7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGNhbGxGbih2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChpdGVyYXRvcikgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ3Rocm93JywgZXJyb3IpO1xuICAgICAgZWxzZSB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT0gJ29iamVjdCcgJiYgcmVzdWx0ICYmIGlzUHJvdG90eXBlT2YoUmVzdWx0UHJvdG90eXBlLCByZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGNsYXNzb2YoYXJndW1lbnQpID09PSAnU3ltYm9sJykgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcbiAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50LCAkZGVmYXVsdCkge1xuICByZXR1cm4gYXJndW1lbnQgPT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50cy5sZW5ndGggPCAyID8gJycgOiAkZGVmYXVsdCA6IHRvU3RyaW5nKGFyZ3VtZW50KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgaW5zdGFsbEVycm9yQ2F1c2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zdGFsbC1lcnJvci1jYXVzZScpO1xudmFyIGluc3RhbGxFcnJvclN0YWNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vycm9yLXN0YWNrLWluc3RhbGwnKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUnKTtcbnZhciBub3JtYWxpemVTdHJpbmdBcmd1bWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ub3JtYWxpemUtc3RyaW5nLWFyZ3VtZW50Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyICRFcnJvciA9IEVycm9yO1xudmFyIHB1c2ggPSBbXS5wdXNoO1xuXG52YXIgJEFnZ3JlZ2F0ZUVycm9yID0gZnVuY3Rpb24gQWdncmVnYXRlRXJyb3IoZXJyb3JzLCBtZXNzYWdlIC8qICwgb3B0aW9ucyAqLykge1xuICB2YXIgaXNJbnN0YW5jZSA9IGlzUHJvdG90eXBlT2YoQWdncmVnYXRlRXJyb3JQcm90b3R5cGUsIHRoaXMpO1xuICB2YXIgdGhhdDtcbiAgaWYgKHNldFByb3RvdHlwZU9mKSB7XG4gICAgdGhhdCA9IHNldFByb3RvdHlwZU9mKG5ldyAkRXJyb3IoKSwgaXNJbnN0YW5jZSA/IGdldFByb3RvdHlwZU9mKHRoaXMpIDogQWdncmVnYXRlRXJyb3JQcm90b3R5cGUpO1xuICB9IGVsc2Uge1xuICAgIHRoYXQgPSBpc0luc3RhbmNlID8gdGhpcyA6IGNyZWF0ZShBZ2dyZWdhdGVFcnJvclByb3RvdHlwZSk7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHRoYXQsIFRPX1NUUklOR19UQUcsICdFcnJvcicpO1xuICB9XG4gIGlmIChtZXNzYWdlICE9PSB1bmRlZmluZWQpIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh0aGF0LCAnbWVzc2FnZScsIG5vcm1hbGl6ZVN0cmluZ0FyZ3VtZW50KG1lc3NhZ2UpKTtcbiAgaW5zdGFsbEVycm9yU3RhY2sodGhhdCwgJEFnZ3JlZ2F0ZUVycm9yLCB0aGF0LnN0YWNrLCAxKTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSBpbnN0YWxsRXJyb3JDYXVzZSh0aGF0LCBhcmd1bWVudHNbMl0pO1xuICB2YXIgZXJyb3JzQXJyYXkgPSBbXTtcbiAgaXRlcmF0ZShlcnJvcnMsIHB1c2gsIHsgdGhhdDogZXJyb3JzQXJyYXkgfSk7XG4gIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh0aGF0LCAnZXJyb3JzJywgZXJyb3JzQXJyYXkpO1xuICByZXR1cm4gdGhhdDtcbn07XG5cbmlmIChzZXRQcm90b3R5cGVPZikgc2V0UHJvdG90eXBlT2YoJEFnZ3JlZ2F0ZUVycm9yLCAkRXJyb3IpO1xuZWxzZSBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKCRBZ2dyZWdhdGVFcnJvciwgJEVycm9yLCB7IG5hbWU6IHRydWUgfSk7XG5cbnZhciBBZ2dyZWdhdGVFcnJvclByb3RvdHlwZSA9ICRBZ2dyZWdhdGVFcnJvci5wcm90b3R5cGUgPSBjcmVhdGUoJEVycm9yLnByb3RvdHlwZSwge1xuICBjb25zdHJ1Y3RvcjogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsICRBZ2dyZWdhdGVFcnJvciksXG4gIG1lc3NhZ2U6IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCAnJyksXG4gIG5hbWU6IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCAnQWdncmVnYXRlRXJyb3InKVxufSk7XG5cbi8vIGBBZ2dyZWdhdGVFcnJvcmAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYWdncmVnYXRlLWVycm9yLWNvbnN0cnVjdG9yXG4kKHsgZ2xvYmFsOiB0cnVlLCBjb25zdHJ1Y3RvcjogdHJ1ZSwgYXJpdHk6IDIgfSwge1xuICBBZ2dyZWdhdGVFcnJvcjogJEFnZ3JlZ2F0ZUVycm9yXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHJlcGxhY2VkIHRvIG1vZHVsZSBiZWxvd1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5hZ2dyZWdhdGUtZXJyb3IuY29uc3RydWN0b3InKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsVGhpcy5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIGZ1bmN0aW9uIHNvbWV0aGluZygpIHsgLyogZW1wdHkgKi8gfS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZW51bWVyYWJsZSkgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgZWxzZSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkodGFyZ2V0LCBrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IGZhbHNlO1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJWAgb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtb2JqZWN0XG52YXIgSXRlcmF0b3JQcm90b3R5cGUsIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSwgYXJyYXlJdGVyYXRvcjtcblxuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWtleXMgLS0gc2FmZSAqL1xuaWYgKFtdLmtleXMpIHtcbiAgYXJyYXlJdGVyYXRvciA9IFtdLmtleXMoKTtcbiAgLy8gU2FmYXJpIDggaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gIGlmICghKCduZXh0JyBpbiBhcnJheUl0ZXJhdG9yKSkgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IHRydWU7XG4gIGVsc2Uge1xuICAgIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGdldFByb3RvdHlwZU9mKGFycmF5SXRlcmF0b3IpKTtcbiAgICBpZiAoUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKSBJdGVyYXRvclByb3RvdHlwZSA9IFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxufVxuXG52YXIgTkVXX0lURVJBVE9SX1BST1RPVFlQRSA9ICFpc09iamVjdChJdGVyYXRvclByb3RvdHlwZSkgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgdGVzdCA9IHt9O1xuICAvLyBGRjQ0LSBsZWdhY3kgaXRlcmF0b3JzIGNhc2VcbiAgcmV0dXJuIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXS5jYWxsKHRlc3QpICE9PSB0ZXN0O1xufSk7XG5cbmlmIChORVdfSVRFUkFUT1JfUFJPVE9UWVBFKSBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuZWxzZSBpZiAoSVNfUFVSRSkgSXRlcmF0b3JQcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1AQGl0ZXJhdG9yXG5pZiAoIWlzQ2FsbGFibGUoSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdKSkge1xuICBkZWZpbmVCdWlsdEluKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEl0ZXJhdG9yUHJvdG90eXBlOiBJdGVyYXRvclByb3RvdHlwZSxcbiAgQlVHR1lfU0FGQVJJX0lURVJBVE9SUzogQlVHR1lfU0FGQVJJX0lURVJBVE9SU1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8ge30udG9TdHJpbmcgOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC10by1zdHJpbmcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBUQUcsIFNUQVRJQywgU0VUX01FVEhPRCkge1xuICB2YXIgdGFyZ2V0ID0gU1RBVElDID8gaXQgOiBpdCAmJiBpdC5wcm90b3R5cGU7XG4gIGlmICh0YXJnZXQpIHtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIFRPX1NUUklOR19UQUcpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIFRPX1NUUklOR19UQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogVEFHIH0pO1xuICAgIH1cbiAgICBpZiAoU0VUX01FVEhPRCAmJiAhVE9fU1RSSU5HX1RBR19TVVBQT1JUKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkodGFyZ2V0LCAndG9TdHJpbmcnLCB0b1N0cmluZyk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCwgRU5VTUVSQUJMRV9ORVhUKSB7XG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICBJdGVyYXRvckNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoKyFFTlVNRVJBQkxFX05FWFQsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvckNvbnN0cnVjdG9yLCBUT19TVFJJTkdfVEFHLCBmYWxzZSwgdHJ1ZSk7XG4gIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gIHJldHVybiBJdGVyYXRvckNvbnN0cnVjdG9yO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBGdW5jdGlvbk5hbWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNyZWF0ZS1jb25zdHJ1Y3RvcicpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciBJdGVyYXRvcnNDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJyk7XG5cbnZhciBQUk9QRVJfRlVOQ1RJT05fTkFNRSA9IEZ1bmN0aW9uTmFtZS5QUk9QRVI7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSBGdW5jdGlvbk5hbWUuQ09ORklHVVJBQkxFO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gSXRlcmF0b3JzQ29yZS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gSXRlcmF0b3JzQ29yZS5CVUdHWV9TQUZBUklfSVRFUkFUT1JTO1xudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG52YXIgRU5UUklFUyA9ICdlbnRyaWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJdGVyYWJsZSwgTkFNRSwgSXRlcmF0b3JDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvcihJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcblxuICB2YXIgZ2V0SXRlcmF0aW9uTWV0aG9kID0gZnVuY3Rpb24gKEtJTkQpIHtcbiAgICBpZiAoS0lORCA9PT0gREVGQVVMVCAmJiBkZWZhdWx0SXRlcmF0b3IpIHJldHVybiBkZWZhdWx0SXRlcmF0b3I7XG4gICAgaWYgKCFCVUdHWV9TQUZBUklfSVRFUkFUT1JTICYmIEtJTkQgJiYgS0lORCBpbiBJdGVyYWJsZVByb3RvdHlwZSkgcmV0dXJuIEl0ZXJhYmxlUHJvdG90eXBlW0tJTkRdO1xuXG4gICAgc3dpdGNoIChLSU5EKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBFTlRSSUVTOiByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzKTsgfTtcbiAgfTtcblxuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IGZhbHNlO1xuICB2YXIgSXRlcmFibGVQcm90b3R5cGUgPSBJdGVyYWJsZS5wcm90b3R5cGU7XG4gIHZhciBuYXRpdmVJdGVyYXRvciA9IEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXVxuICAgIHx8IEl0ZXJhYmxlUHJvdG90eXBlWydAQGl0ZXJhdG9yJ11cbiAgICB8fCBERUZBVUxUICYmIEl0ZXJhYmxlUHJvdG90eXBlW0RFRkFVTFRdO1xuICB2YXIgZGVmYXVsdEl0ZXJhdG9yID0gIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgbmF0aXZlSXRlcmF0b3IgfHwgZ2V0SXRlcmF0aW9uTWV0aG9kKERFRkFVTFQpO1xuICB2YXIgYW55TmF0aXZlSXRlcmF0b3IgPSBOQU1FID09PSAnQXJyYXknID8gSXRlcmFibGVQcm90b3R5cGUuZW50cmllcyB8fCBuYXRpdmVJdGVyYXRvciA6IG5hdGl2ZUl0ZXJhdG9yO1xuICB2YXIgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBtZXRob2RzLCBLRVk7XG5cbiAgLy8gZml4IG5hdGl2ZVxuICBpZiAoYW55TmF0aXZlSXRlcmF0b3IpIHtcbiAgICBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihhbnlOYXRpdmVJdGVyYXRvci5jYWxsKG5ldyBJdGVyYWJsZSgpKSk7XG4gICAgaWYgKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgaWYgKCFJU19QVVJFICYmIGdldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSkgIT09IEl0ZXJhdG9yUHJvdG90eXBlKSB7XG4gICAgICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgIHNldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSXRlcmF0b3JQcm90b3R5cGUpO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc0NhbGxhYmxlKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0pKSB7XG4gICAgICAgICAgZGVmaW5lQnVpbHRJbihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCB0cnVlLCB0cnVlKTtcbiAgICAgIGlmIChJU19QVVJFKSBJdGVyYXRvcnNbVE9fU1RSSU5HX1RBR10gPSByZXR1cm5UaGlzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZpeCBBcnJheS5wcm90b3R5cGUueyB2YWx1ZXMsIEBAaXRlcmF0b3IgfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKFBST1BFUl9GVU5DVElPTl9OQU1FICYmIERFRkFVTFQgPT09IFZBTFVFUyAmJiBuYXRpdmVJdGVyYXRvciAmJiBuYXRpdmVJdGVyYXRvci5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBpZiAoIUlTX1BVUkUgJiYgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYWJsZVByb3RvdHlwZSwgJ25hbWUnLCBWQUxVRVMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgPSB0cnVlO1xuICAgICAgZGVmYXVsdEl0ZXJhdG9yID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gY2FsbChuYXRpdmVJdGVyYXRvciwgdGhpcyk7IH07XG4gICAgfVxuICB9XG5cbiAgLy8gZXhwb3J0IGFkZGl0aW9uYWwgbWV0aG9kc1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gZGVmYXVsdEl0ZXJhdG9yIDogZ2V0SXRlcmF0aW9uTWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogZ2V0SXRlcmF0aW9uTWV0aG9kKEVOVFJJRVMpXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKEtFWSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfHwgIShLRVkgaW4gSXRlcmFibGVQcm90b3R5cGUpKSB7XG4gICAgICAgIGRlZmluZUJ1aWx0SW4oSXRlcmFibGVQcm90b3R5cGUsIEtFWSwgbWV0aG9kc1tLRVldKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgJCh7IHRhcmdldDogTkFNRSwgcHJvdG86IHRydWUsIGZvcmNlZDogQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfSwgbWV0aG9kcyk7XG4gIH1cblxuICAvLyBkZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghSVNfUFVSRSB8fCBGT1JDRUQpICYmIEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXSAhPT0gZGVmYXVsdEl0ZXJhdG9yKSB7XG4gICAgZGVmaW5lQnVpbHRJbihJdGVyYWJsZVByb3RvdHlwZSwgSVRFUkFUT1IsIGRlZmF1bHRJdGVyYXRvciwgeyBuYW1lOiBERUZBVUxUIH0pO1xuICB9XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IGRlZmF1bHRJdGVyYXRvcjtcblxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gYENyZWF0ZUl0ZXJSZXN1bHRPYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGVpdGVycmVzdWx0b2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgZG9uZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IGRvbmUgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBkZWZpbmVJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1kZWZpbmUnKTtcbnZhciBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1pdGVyLXJlc3VsdC1vYmplY3QnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xuXG52YXIgQVJSQVlfSVRFUkFUT1IgPSAnQXJyYXkgSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoQVJSQVlfSVRFUkFUT1IpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmVudHJpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZW50cmllc1xuLy8gYEFycmF5LnByb3RvdHlwZS5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmtleXNcbi8vIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnZhbHVlc1xuLy8gYEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQGl0ZXJhdG9yXG4vLyBgQ3JlYXRlQXJyYXlJdGVyYXRvcmAgaW50ZXJuYWwgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZWFycmF5aXRlcmF0b3Jcbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lSXRlcmF0b3IoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICB0eXBlOiBBUlJBWV9JVEVSQVRPUixcbiAgICB0YXJnZXQ6IHRvSW5kZXhlZE9iamVjdChpdGVyYXRlZCksIC8vIHRhcmdldFxuICAgIGluZGV4OiAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICAgIGtpbmQ6IGtpbmQgICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2luZFxuICB9KTtcbi8vIGAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVhcnJheWl0ZXJhdG9ycHJvdG90eXBlJS5uZXh0XG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gIHZhciB0YXJnZXQgPSBzdGF0ZS50YXJnZXQ7XG4gIHZhciBpbmRleCA9IHN0YXRlLmluZGV4Kys7XG4gIGlmICghdGFyZ2V0IHx8IGluZGV4ID49IHRhcmdldC5sZW5ndGgpIHtcbiAgICBzdGF0ZS50YXJnZXQgPSBudWxsO1xuICAgIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHVuZGVmaW5lZCwgdHJ1ZSk7XG4gIH1cbiAgc3dpdGNoIChzdGF0ZS5raW5kKSB7XG4gICAgY2FzZSAna2V5cyc6IHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KGluZGV4LCBmYWxzZSk7XG4gICAgY2FzZSAndmFsdWVzJzogcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodGFyZ2V0W2luZGV4XSwgZmFsc2UpO1xuICB9IHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KFtpbmRleCwgdGFyZ2V0W2luZGV4XV0sIGZhbHNlKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZXVubWFwcGVkYXJndW1lbnRzb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZW1hcHBlZGFyZ3VtZW50c29iamVjdFxudmFyIHZhbHVlcyA9IEl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG4vLyBWOCB+IENocm9tZSA0NS0gYnVnXG5pZiAoIUlTX1BVUkUgJiYgREVTQ1JJUFRPUlMgJiYgdmFsdWVzLm5hbWUgIT09ICd2YWx1ZXMnKSB0cnkge1xuICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZXMsICduYW1lJywgeyB2YWx1ZTogJ3ZhbHVlcycgfSk7XG59IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4iLCAiLy8gZW1wdHlcbiIsICIndXNlIHN0cmljdCc7XG4vKiBnbG9iYWwgQnVuLCBEZW5vIC0tIGRldGVjdGlvbiAqL1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyIHVzZXJBZ2VudFN0YXJ0c1dpdGggPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiB1c2VyQWdlbnQuc2xpY2UoMCwgc3RyaW5nLmxlbmd0aCkgPT09IHN0cmluZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgaWYgKHVzZXJBZ2VudFN0YXJ0c1dpdGgoJ0J1bi8nKSkgcmV0dXJuICdCVU4nO1xuICBpZiAodXNlckFnZW50U3RhcnRzV2l0aCgnQ2xvdWRmbGFyZS1Xb3JrZXJzJykpIHJldHVybiAnQ0xPVURGTEFSRSc7XG4gIGlmICh1c2VyQWdlbnRTdGFydHNXaXRoKCdEZW5vLycpKSByZXR1cm4gJ0RFTk8nO1xuICBpZiAodXNlckFnZW50U3RhcnRzV2l0aCgnTm9kZS5qcy8nKSkgcmV0dXJuICdOT0RFJztcbiAgaWYgKGdsb2JhbFRoaXMuQnVuICYmIHR5cGVvZiBCdW4udmVyc2lvbiA9PSAnc3RyaW5nJykgcmV0dXJuICdCVU4nO1xuICBpZiAoZ2xvYmFsVGhpcy5EZW5vICYmIHR5cGVvZiBEZW5vLnZlcnNpb24gPT0gJ29iamVjdCcpIHJldHVybiAnREVOTyc7XG4gIGlmIChjbGFzc29mKGdsb2JhbFRoaXMucHJvY2VzcykgPT09ICdwcm9jZXNzJykgcmV0dXJuICdOT0RFJztcbiAgaWYgKGdsb2JhbFRoaXMud2luZG93ICYmIGdsb2JhbFRoaXMuZG9jdW1lbnQpIHJldHVybiAnQlJPV1NFUic7XG4gIHJldHVybiAnUkVTVCc7XG59KSgpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBFTlZJUk9OTUVOVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVOVklST05NRU5UID09PSAnTk9ERSc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eS5mKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4tYWNjZXNzb3InKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT05TVFJVQ1RPUl9OQU1FKSB7XG4gIHZhciBDb25zdHJ1Y3RvciA9IGdldEJ1aWx0SW4oQ09OU1RSVUNUT1JfTkFNRSk7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmIENvbnN0cnVjdG9yICYmICFDb25zdHJ1Y3RvcltTUEVDSUVTXSkge1xuICAgIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihDb25zdHJ1Y3RvciwgU1BFQ0lFUywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gICAgfSk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFByb3RvdHlwZSkge1xuICBpZiAoaXNQcm90b3R5cGVPZihQcm90b3R5cGUsIGl0KSkgcmV0dXJuIGl0O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcignSW5jb3JyZWN0IGludm9jYXRpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBjb25zdHJ1Y3QgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ2NvbnN0cnVjdCcpO1xudmFyIGNvbnN0cnVjdG9yUmVnRXhwID0gL15cXHMqKD86Y2xhc3N8ZnVuY3Rpb24pXFxiLztcbnZhciBleGVjID0gdW5jdXJyeVRoaXMoY29uc3RydWN0b3JSZWdFeHAuZXhlYyk7XG52YXIgSU5DT1JSRUNUX1RPX1NUUklORyA9ICFjb25zdHJ1Y3RvclJlZ0V4cC50ZXN0KG5vb3ApO1xuXG52YXIgaXNDb25zdHJ1Y3Rvck1vZGVybiA9IGZ1bmN0aW9uIGlzQ29uc3RydWN0b3IoYXJndW1lbnQpIHtcbiAgaWYgKCFpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGZhbHNlO1xuICB0cnkge1xuICAgIGNvbnN0cnVjdChub29wLCBbXSwgYXJndW1lbnQpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxudmFyIGlzQ29uc3RydWN0b3JMZWdhY3kgPSBmdW5jdGlvbiBpc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSB7XG4gIGlmICghaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBmYWxzZTtcbiAgc3dpdGNoIChjbGFzc29mKGFyZ3VtZW50KSkge1xuICAgIGNhc2UgJ0FzeW5jRnVuY3Rpb24nOlxuICAgIGNhc2UgJ0dlbmVyYXRvckZ1bmN0aW9uJzpcbiAgICBjYXNlICdBc3luY0dlbmVyYXRvckZ1bmN0aW9uJzogcmV0dXJuIGZhbHNlO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gd2UgY2FuJ3QgY2hlY2sgLnByb3RvdHlwZSBzaW5jZSBjb25zdHJ1Y3RvcnMgcHJvZHVjZWQgYnkgLmJpbmQgaGF2ZW4ndCBpdFxuICAgIC8vIGBGdW5jdGlvbiN0b1N0cmluZ2AgdGhyb3dzIG9uIHNvbWUgYnVpbHQtaXQgZnVuY3Rpb24gaW4gc29tZSBsZWdhY3kgZW5naW5lc1xuICAgIC8vIChmb3IgZXhhbXBsZSwgYERPTVF1YWRgIGFuZCBzaW1pbGFyIGluIEZGNDEtKVxuICAgIHJldHVybiBJTkNPUlJFQ1RfVE9fU1RSSU5HIHx8ICEhZXhlYyhjb25zdHJ1Y3RvclJlZ0V4cCwgaW5zcGVjdFNvdXJjZShhcmd1bWVudCkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5pc0NvbnN0cnVjdG9yTGVnYWN5LnNoYW0gPSB0cnVlO1xuXG4vLyBgSXNDb25zdHJ1Y3RvcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY29uc3RydWN0b3Jcbm1vZHVsZS5leHBvcnRzID0gIWNvbnN0cnVjdCB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBjYWxsZWQ7XG4gIHJldHVybiBpc0NvbnN0cnVjdG9yTW9kZXJuKGlzQ29uc3RydWN0b3JNb2Rlcm4uY2FsbClcbiAgICB8fCAhaXNDb25zdHJ1Y3Rvck1vZGVybihPYmplY3QpXG4gICAgfHwgIWlzQ29uc3RydWN0b3JNb2Rlcm4oZnVuY3Rpb24gKCkgeyBjYWxsZWQgPSB0cnVlOyB9KVxuICAgIHx8IGNhbGxlZDtcbn0pID8gaXNDb25zdHJ1Y3RvckxlZ2FjeSA6IGlzQ29uc3RydWN0b3JNb2Rlcm47XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY29uc3RydWN0b3InKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ29uc3RydWN0b3IoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgY29uc3RydWN0b3InKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGFDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNvbnN0cnVjdG9yJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuLy8gYFNwZWNpZXNDb25zdHJ1Y3RvcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNwZWNpZXNjb25zdHJ1Y3RvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgZGVmYXVsdENvbnN0cnVjdG9yKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IGlzTnVsbE9yVW5kZWZpbmVkKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPyBkZWZhdWx0Q29uc3RydWN0b3IgOiBhQ29uc3RydWN0b3IoUyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyhbXS5zbGljZSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhc3NlZCwgcmVxdWlyZWQpIHtcbiAgaWYgKHBhc3NlZCA8IHJlcXVpcmVkKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignTm90IGVub3VnaCBhcmd1bWVudHMnKTtcbiAgcmV0dXJuIHBhc3NlZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gL2lwYWR8aXBob25lfGlwb2QvaS50ZXN0KHVzZXJBZ2VudCkgJiYgL2FwcGxld2Via2l0L2kudGVzdCh1c2VyQWdlbnQpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoJyk7XG52YXIgSVNfSU9TID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LWlzLWlvcycpO1xudmFyIElTX05PREUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtaXMtbm9kZScpO1xuXG52YXIgc2V0ID0gZ2xvYmFsVGhpcy5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXIgPSBnbG9iYWxUaGlzLmNsZWFySW1tZWRpYXRlO1xudmFyIHByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3M7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWxUaGlzLkRpc3BhdGNoO1xudmFyIEZ1bmN0aW9uID0gZ2xvYmFsVGhpcy5GdW5jdGlvbjtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbFRoaXMuTWVzc2FnZUNoYW5uZWw7XG52YXIgU3RyaW5nID0gZ2xvYmFsVGhpcy5TdHJpbmc7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciAkbG9jYXRpb24sIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xuXG5mYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIERlbm8gdGhyb3dzIGEgUmVmZXJlbmNlRXJyb3Igb24gYGxvY2F0aW9uYCBhY2Nlc3Mgd2l0aG91dCBgLS1sb2NhdGlvbmAgZmxhZ1xuICAkbG9jYXRpb24gPSBnbG9iYWxUaGlzLmxvY2F0aW9uO1xufSk7XG5cbnZhciBydW4gPSBmdW5jdGlvbiAoaWQpIHtcbiAgaWYgKGhhc093bihxdWV1ZSwgaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcblxudmFyIHJ1bm5lciA9IGZ1bmN0aW9uIChpZCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJ1bihpZCk7XG4gIH07XG59O1xuXG52YXIgZXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4oZXZlbnQuZGF0YSk7XG59O1xuXG52YXIgZ2xvYmFsUG9zdE1lc3NhZ2VEZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAvLyBvbGQgZW5naW5lcyBoYXZlIG5vdCBsb2NhdGlvbi5vcmlnaW5cbiAgZ2xvYmFsVGhpcy5wb3N0TWVzc2FnZShTdHJpbmcoaWQpLCAkbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgJGxvY2F0aW9uLmhvc3QpO1xufTtcblxuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXQgfHwgIWNsZWFyKSB7XG4gIHNldCA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShoYW5kbGVyKSB7XG4gICAgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGgoYXJndW1lbnRzLmxlbmd0aCwgMSk7XG4gICAgdmFyIGZuID0gaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKTtcbiAgICB2YXIgYXJncyA9IGFycmF5U2xpY2UoYXJndW1lbnRzLCAxKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoZm4sIHVuZGVmaW5lZCwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXIgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAoSVNfTk9ERSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKHJ1bm5lcihpZCkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3cocnVubmVyKGlkKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICAvLyBleGNlcHQgaU9TIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzYyNFxuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsICYmICFJU19JT1MpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBldmVudExpc3RlbmVyO1xuICAgIGRlZmVyID0gYmluZChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0KTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoXG4gICAgZ2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyICYmXG4gICAgaXNDYWxsYWJsZShnbG9iYWxUaGlzLnBvc3RNZXNzYWdlKSAmJlxuICAgICFnbG9iYWxUaGlzLmltcG9ydFNjcmlwdHMgJiZcbiAgICAkbG9jYXRpb24gJiYgJGxvY2F0aW9uLnByb3RvY29sICE9PSAnZmlsZTonICYmXG4gICAgIWZhaWxzKGdsb2JhbFBvc3RNZXNzYWdlRGVmZXIpXG4gICkge1xuICAgIGRlZmVyID0gZ2xvYmFsUG9zdE1lc3NhZ2VEZWZlcjtcbiAgICBnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY3JlYXRlRWxlbWVudCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChydW5uZXIoaWQpLCAwKTtcbiAgICB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgY2xlYXI6IGNsZWFyXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIEF2b2lkIE5vZGVKUyBleHBlcmltZW50YWwgd2FybmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIURFU0NSSVBUT1JTKSByZXR1cm4gZ2xvYmFsVGhpc1tuYW1lXTtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZ2xvYmFsVGhpcywgbmFtZSk7XG4gIHJldHVybiBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5oZWFkID0gbnVsbDtcbiAgdGhpcy50YWlsID0gbnVsbDtcbn07XG5cblF1ZXVlLnByb3RvdHlwZSA9IHtcbiAgYWRkOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBlbnRyeSA9IHsgaXRlbTogaXRlbSwgbmV4dDogbnVsbCB9O1xuICAgIHZhciB0YWlsID0gdGhpcy50YWlsO1xuICAgIGlmICh0YWlsKSB0YWlsLm5leHQgPSBlbnRyeTtcbiAgICBlbHNlIHRoaXMuaGVhZCA9IGVudHJ5O1xuICAgIHRoaXMudGFpbCA9IGVudHJ5O1xuICB9LFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZW50cnkgPSB0aGlzLmhlYWQ7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICB2YXIgbmV4dCA9IHRoaXMuaGVhZCA9IGVudHJ5Lm5leHQ7XG4gICAgICBpZiAobmV4dCA9PT0gbnVsbCkgdGhpcy50YWlsID0gbnVsbDtcbiAgICAgIHJldHVybiBlbnRyeS5pdGVtO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXVzZXItYWdlbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAvaXBhZHxpcGhvbmV8aXBvZC9pLnRlc3QodXNlckFnZW50KSAmJiB0eXBlb2YgUGViYmxlICE9ICd1bmRlZmluZWQnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IC93ZWIwcyg/IS4qY2hyb21lKS9pLnRlc3QodXNlckFnZW50KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHNhZmVHZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhZmUtZ2V0LWJ1aWx0LWluJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGFzaycpLnNldDtcbnZhciBRdWV1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9xdWV1ZScpO1xudmFyIElTX0lPUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC1pcy1pb3MnKTtcbnZhciBJU19JT1NfUEVCQkxFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LWlzLWlvcy1wZWJibGUnKTtcbnZhciBJU19XRUJPU19XRUJLSVQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtaXMtd2Vib3Mtd2Via2l0Jyk7XG52YXIgSVNfTk9ERSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC1pcy1ub2RlJyk7XG5cbnZhciBNdXRhdGlvbk9ic2VydmVyID0gZ2xvYmFsVGhpcy5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbFRoaXMuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQ7XG52YXIgcHJvY2VzcyA9IGdsb2JhbFRoaXMucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsVGhpcy5Qcm9taXNlO1xudmFyIG1pY3JvdGFzayA9IHNhZmVHZXRCdWlsdEluKCdxdWV1ZU1pY3JvdGFzaycpO1xudmFyIG5vdGlmeSwgdG9nZ2xlLCBub2RlLCBwcm9taXNlLCB0aGVuO1xuXG4vLyBtb2Rlcm4gZW5naW5lcyBoYXZlIHF1ZXVlTWljcm90YXNrIG1ldGhvZFxuaWYgKCFtaWNyb3Rhc2spIHtcbiAgdmFyIHF1ZXVlID0gbmV3IFF1ZXVlKCk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChJU19OT0RFICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGZuID0gcXVldWUuZ2V0KCkpIHRyeSB7XG4gICAgICBmbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAocXVldWUuaGVhZCkgbm90aWZ5KCk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICAvLyBhbHNvIGV4Y2VwdCBXZWJPUyBXZWJraXQgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg5OFxuICBpZiAoIUlTX0lPUyAmJiAhSVNfTk9ERSAmJiAhSVNfV0VCT1NfV0VCS0lUICYmIE11dGF0aW9uT2JzZXJ2ZXIgJiYgZG9jdW1lbnQpIHtcbiAgICB0b2dnbGUgPSB0cnVlO1xuICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmICghSVNfSU9TX1BFQkJMRSAmJiBQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIC8vIHdvcmthcm91bmQgb2YgV2ViS2l0IH4gaU9TIFNhZmFyaSAxMC4xIGJ1Z1xuICAgIHByb21pc2UuY29uc3RydWN0b3IgPSBQcm9taXNlO1xuICAgIHRoZW4gPSBiaW5kKHByb21pc2UudGhlbiwgcHJvbWlzZSk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gTm9kZS5qcyB3aXRob3V0IHByb21pc2VzXG4gIH0gZWxzZSBpZiAoSVNfTk9ERSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ2VcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgLy8gYHdlYnBhY2tgIGRldiBzZXJ2ZXIgYnVnIG9uIElFIGdsb2JhbCBtZXRob2RzIC0gdXNlIGJpbmQoZm4sIGdsb2JhbClcbiAgICBtYWNyb3Rhc2sgPSBiaW5kKG1hY3JvdGFzaywgZ2xvYmFsVGhpcyk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbWFjcm90YXNrKGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgbWljcm90YXNrID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgaWYgKCFxdWV1ZS5oZWFkKSBub3RpZnkoKTtcbiAgICBxdWV1ZS5hZGQoZm4pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1pY3JvdGFzaztcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGUgLS0gc2FmZVxuICAgIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBjb25zb2xlLmVycm9yKGEpIDogY29uc29sZS5lcnJvcihhLCBiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IGZhbHNlLCB2YWx1ZTogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IHRydWUsIHZhbHVlOiBlcnJvciB9O1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5Qcm9taXNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgTmF0aXZlUHJvbWlzZUNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtbmF0aXZlLWNvbnN0cnVjdG9yJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBFTlZJUk9OTUVOVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbicpO1xuXG52YXIgTmF0aXZlUHJvbWlzZVByb3RvdHlwZSA9IE5hdGl2ZVByb21pc2VDb25zdHJ1Y3RvciAmJiBOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IucHJvdG90eXBlO1xudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBTVUJDTEFTU0lORyA9IGZhbHNlO1xudmFyIE5BVElWRV9QUk9NSVNFX1JFSkVDVElPTl9FVkVOVCA9IGlzQ2FsbGFibGUoZ2xvYmFsVGhpcy5Qcm9taXNlUmVqZWN0aW9uRXZlbnQpO1xuXG52YXIgRk9SQ0VEX1BST01JU0VfQ09OU1RSVUNUT1IgPSBpc0ZvcmNlZCgnUHJvbWlzZScsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIFBST01JU0VfQ09OU1RSVUNUT1JfU09VUkNFID0gaW5zcGVjdFNvdXJjZShOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IpO1xuICB2YXIgR0xPQkFMX0NPUkVfSlNfUFJPTUlTRSA9IFBST01JU0VfQ09OU1RSVUNUT1JfU09VUkNFICE9PSBTdHJpbmcoTmF0aXZlUHJvbWlzZUNvbnN0cnVjdG9yKTtcbiAgLy8gVjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD04MzA1NjVcbiAgLy8gV2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgaWYgKCFHTE9CQUxfQ09SRV9KU19QUk9NSVNFICYmIFY4X1ZFUlNJT04gPT09IDY2KSByZXR1cm4gdHJ1ZTtcbiAgLy8gV2UgbmVlZCBQcm9taXNlI3sgY2F0Y2gsIGZpbmFsbHkgfSBpbiB0aGUgcHVyZSB2ZXJzaW9uIGZvciBwcmV2ZW50aW5nIHByb3RvdHlwZSBwb2xsdXRpb25cbiAgaWYgKElTX1BVUkUgJiYgIShOYXRpdmVQcm9taXNlUHJvdG90eXBlWydjYXRjaCddICYmIE5hdGl2ZVByb21pc2VQcm90b3R5cGVbJ2ZpbmFsbHknXSkpIHJldHVybiB0cnVlO1xuICAvLyBXZSBjYW4ndCB1c2UgQEBzcGVjaWVzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxuICBpZiAoIVY4X1ZFUlNJT04gfHwgVjhfVkVSU0lPTiA8IDUxIHx8ICEvbmF0aXZlIGNvZGUvLnRlc3QoUFJPTUlTRV9DT05TVFJVQ1RPUl9TT1VSQ0UpKSB7XG4gICAgLy8gRGV0ZWN0IGNvcnJlY3RuZXNzIG9mIHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSgxKTsgfSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xuICAgIH07XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gcHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gRmFrZVByb21pc2U7XG4gICAgU1VCQ0xBU1NJTkcgPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICAgIGlmICghU1VCQ0xBU1NJTkcpIHJldHVybiB0cnVlO1xuICAvLyBVbmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gIH0gcmV0dXJuICFHTE9CQUxfQ09SRV9KU19QUk9NSVNFICYmIChFTlZJUk9OTUVOVCA9PT0gJ0JST1dTRVInIHx8IEVOVklST05NRU5UID09PSAnREVOTycpICYmICFOQVRJVkVfUFJPTUlTRV9SRUpFQ1RJT05fRVZFTlQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENPTlNUUlVDVE9SOiBGT1JDRURfUFJPTUlTRV9DT05TVFJVQ1RPUixcbiAgUkVKRUNUSU9OX0VWRU5UOiBOQVRJVkVfUFJPTUlTRV9SRUpFQ1RJT05fRVZFTlQsXG4gIFNVQkNMQVNTSU5HOiBTVUJDTEFTU0lOR1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFDYWxsYWJsZShyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhQ2FsbGFibGUocmVqZWN0KTtcbn07XG5cbi8vIGBOZXdQcm9taXNlQ2FwYWJpbGl0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW5ld3Byb21pc2VjYXBhYmlsaXR5XG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgSVNfTk9ERSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC1pcy1ub2RlJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXNwZWNpZXMnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21pY3JvdGFzaycpO1xudmFyIGhvc3RSZXBvcnRFcnJvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaG9zdC1yZXBvcnQtZXJyb3JzJyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wZXJmb3JtJyk7XG52YXIgUXVldWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcXVldWUnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgTmF0aXZlUHJvbWlzZUNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtbmF0aXZlLWNvbnN0cnVjdG9yJyk7XG52YXIgUHJvbWlzZUNvbnN0cnVjdG9yRGV0ZWN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBGT1JDRURfUFJPTUlTRV9DT05TVFJVQ1RPUiA9IFByb21pc2VDb25zdHJ1Y3RvckRldGVjdGlvbi5DT05TVFJVQ1RPUjtcbnZhciBOQVRJVkVfUFJPTUlTRV9SRUpFQ1RJT05fRVZFTlQgPSBQcm9taXNlQ29uc3RydWN0b3JEZXRlY3Rpb24uUkVKRUNUSU9OX0VWRU5UO1xudmFyIE5BVElWRV9QUk9NSVNFX1NVQkNMQVNTSU5HID0gUHJvbWlzZUNvbnN0cnVjdG9yRGV0ZWN0aW9uLlNVQkNMQVNTSU5HO1xudmFyIGdldEludGVybmFsUHJvbWlzZVN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoUFJPTUlTRSk7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIE5hdGl2ZVByb21pc2VQcm90b3R5cGUgPSBOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IgJiYgTmF0aXZlUHJvbWlzZUNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbnZhciBQcm9taXNlQ29uc3RydWN0b3IgPSBOYXRpdmVQcm9taXNlQ29uc3RydWN0b3I7XG52YXIgUHJvbWlzZVByb3RvdHlwZSA9IE5hdGl2ZVByb21pc2VQcm90b3R5cGU7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsVGhpcy5UeXBlRXJyb3I7XG52YXIgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50O1xudmFyIHByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3M7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xudmFyIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5O1xuXG52YXIgRElTUEFUQ0hfRVZFTlQgPSAhIShkb2N1bWVudCAmJiBkb2N1bWVudC5jcmVhdGVFdmVudCAmJiBnbG9iYWxUaGlzLmRpc3BhdGNoRXZlbnQpO1xudmFyIFVOSEFORExFRF9SRUpFQ1RJT04gPSAndW5oYW5kbGVkcmVqZWN0aW9uJztcbnZhciBSRUpFQ1RJT05fSEFORExFRCA9ICdyZWplY3Rpb25oYW5kbGVkJztcbnZhciBQRU5ESU5HID0gMDtcbnZhciBGVUxGSUxMRUQgPSAxO1xudmFyIFJFSkVDVEVEID0gMjtcbnZhciBIQU5ETEVEID0gMTtcbnZhciBVTkhBTkRMRUQgPSAyO1xuXG52YXIgSW50ZXJuYWwsIE93blByb21pc2VDYXBhYmlsaXR5LCBQcm9taXNlV3JhcHBlciwgbmF0aXZlVGhlbjtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgaXNDYWxsYWJsZSh0aGVuID0gaXQudGhlbikgPyB0aGVuIDogZmFsc2U7XG59O1xuXG52YXIgY2FsbFJlYWN0aW9uID0gZnVuY3Rpb24gKHJlYWN0aW9uLCBzdGF0ZSkge1xuICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgdmFyIG9rID0gc3RhdGUuc3RhdGUgPT09IEZVTEZJTExFRDtcbiAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gIHRyeSB7XG4gICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgIGlmICghb2spIHtcbiAgICAgICAgaWYgKHN0YXRlLnJlamVjdGlvbiA9PT0gVU5IQU5ETEVEKSBvbkhhbmRsZVVuaGFuZGxlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLnJlamVjdGlvbiA9IEhBTkRMRUQ7XG4gICAgICB9XG4gICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpOyAvLyBjYW4gdGhyb3dcbiAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgZXhpdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICBjYWxsKHRoZW4sIHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgIHJlamVjdChlcnJvcik7XG4gIH1cbn07XG5cbnZhciBub3RpZnkgPSBmdW5jdGlvbiAoc3RhdGUsIGlzUmVqZWN0KSB7XG4gIGlmIChzdGF0ZS5ub3RpZmllZCkgcmV0dXJuO1xuICBzdGF0ZS5ub3RpZmllZCA9IHRydWU7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlYWN0aW9ucyA9IHN0YXRlLnJlYWN0aW9ucztcbiAgICB2YXIgcmVhY3Rpb247XG4gICAgd2hpbGUgKHJlYWN0aW9uID0gcmVhY3Rpb25zLmdldCgpKSB7XG4gICAgICBjYWxsUmVhY3Rpb24ocmVhY3Rpb24sIHN0YXRlKTtcbiAgICB9XG4gICAgc3RhdGUubm90aWZpZWQgPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXN0YXRlLnJlamVjdGlvbikgb25VbmhhbmRsZWQoc3RhdGUpO1xuICB9KTtcbn07XG5cbnZhciBkaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIHByb21pc2UsIHJlYXNvbikge1xuICB2YXIgZXZlbnQsIGhhbmRsZXI7XG4gIGlmIChESVNQQVRDSF9FVkVOVCkge1xuICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZlbnQucHJvbWlzZSA9IHByb21pc2U7XG4gICAgZXZlbnQucmVhc29uID0gcmVhc29uO1xuICAgIGV2ZW50LmluaXRFdmVudChuYW1lLCBmYWxzZSwgdHJ1ZSk7XG4gICAgZ2xvYmFsVGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSBlbHNlIGV2ZW50ID0geyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHJlYXNvbiB9O1xuICBpZiAoIU5BVElWRV9QUk9NSVNFX1JFSkVDVElPTl9FVkVOVCAmJiAoaGFuZGxlciA9IGdsb2JhbFRoaXNbJ29uJyArIG5hbWVdKSkgaGFuZGxlcihldmVudCk7XG4gIGVsc2UgaWYgKG5hbWUgPT09IFVOSEFORExFRF9SRUpFQ1RJT04pIGhvc3RSZXBvcnRFcnJvcnMoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHJlYXNvbik7XG59O1xuXG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgY2FsbCh0YXNrLCBnbG9iYWxUaGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBzdGF0ZS5mYWNhZGU7XG4gICAgdmFyIHZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgdmFyIElTX1VOSEFORExFRCA9IGlzVW5oYW5kbGVkKHN0YXRlKTtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmIChJU19VTkhBTkRMRUQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoSVNfTk9ERSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgZGlzcGF0Y2hFdmVudChVTkhBTkRMRURfUkVKRUNUSU9OLCBwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBzdGF0ZS5yZWplY3Rpb24gPSBJU19OT0RFIHx8IGlzVW5oYW5kbGVkKHN0YXRlKSA/IFVOSEFORExFRCA6IEhBTkRMRUQ7XG4gICAgICBpZiAocmVzdWx0LmVycm9yKSB0aHJvdyByZXN1bHQudmFsdWU7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUucmVqZWN0aW9uICE9PSBIQU5ETEVEICYmICFzdGF0ZS5wYXJlbnQ7XG59O1xuXG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgY2FsbCh0YXNrLCBnbG9iYWxUaGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBzdGF0ZS5mYWNhZGU7XG4gICAgaWYgKElTX05PREUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBkaXNwYXRjaEV2ZW50KFJFSkVDVElPTl9IQU5ETEVELCBwcm9taXNlLCBzdGF0ZS52YWx1ZSk7XG4gIH0pO1xufTtcblxudmFyIGJpbmQgPSBmdW5jdGlvbiAoZm4sIHN0YXRlLCB1bndyYXApIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGZuKHN0YXRlLCB2YWx1ZSwgdW53cmFwKTtcbiAgfTtcbn07XG5cbnZhciBpbnRlcm5hbFJlamVjdCA9IGZ1bmN0aW9uIChzdGF0ZSwgdmFsdWUsIHVud3JhcCkge1xuICBpZiAoc3RhdGUuZG9uZSkgcmV0dXJuO1xuICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgaWYgKHVud3JhcCkgc3RhdGUgPSB1bndyYXA7XG4gIHN0YXRlLnZhbHVlID0gdmFsdWU7XG4gIHN0YXRlLnN0YXRlID0gUkVKRUNURUQ7XG4gIG5vdGlmeShzdGF0ZSwgdHJ1ZSk7XG59O1xuXG52YXIgaW50ZXJuYWxSZXNvbHZlID0gZnVuY3Rpb24gKHN0YXRlLCB2YWx1ZSwgdW53cmFwKSB7XG4gIGlmIChzdGF0ZS5kb25lKSByZXR1cm47XG4gIHN0YXRlLmRvbmUgPSB0cnVlO1xuICBpZiAodW53cmFwKSBzdGF0ZSA9IHVud3JhcDtcbiAgdHJ5IHtcbiAgICBpZiAoc3RhdGUuZmFjYWRlID09PSB2YWx1ZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIHZhciB0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSk7XG4gICAgaWYgKHRoZW4pIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBkb25lOiBmYWxzZSB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNhbGwodGhlbiwgdmFsdWUsXG4gICAgICAgICAgICBiaW5kKGludGVybmFsUmVzb2x2ZSwgd3JhcHBlciwgc3RhdGUpLFxuICAgICAgICAgICAgYmluZChpbnRlcm5hbFJlamVjdCwgd3JhcHBlciwgc3RhdGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBpbnRlcm5hbFJlamVjdCh3cmFwcGVyLCBlcnJvciwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHN0YXRlLnN0YXRlID0gRlVMRklMTEVEO1xuICAgICAgbm90aWZ5KHN0YXRlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGludGVybmFsUmVqZWN0KHsgZG9uZTogZmFsc2UgfSwgZXJyb3IsIHN0YXRlKTtcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmIChGT1JDRURfUFJPTUlTRV9DT05TVFJVQ1RPUikge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICBQcm9taXNlQ29uc3RydWN0b3IgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCBQcm9taXNlUHJvdG90eXBlKTtcbiAgICBhQ2FsbGFibGUoZXhlY3V0b3IpO1xuICAgIGNhbGwoSW50ZXJuYWwsIHRoaXMpO1xuICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsUHJvbWlzZVN0YXRlKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihiaW5kKGludGVybmFsUmVzb2x2ZSwgc3RhdGUpLCBiaW5kKGludGVybmFsUmVqZWN0LCBzdGF0ZSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpbnRlcm5hbFJlamVjdChzdGF0ZSwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBQcm9taXNlUHJvdG90eXBlID0gUHJvbWlzZUNvbnN0cnVjdG9yLnByb3RvdHlwZTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICAgIHR5cGU6IFBST01JU0UsXG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIG5vdGlmaWVkOiBmYWxzZSxcbiAgICAgIHBhcmVudDogZmFsc2UsXG4gICAgICByZWFjdGlvbnM6IG5ldyBRdWV1ZSgpLFxuICAgICAgcmVqZWN0aW9uOiBmYWxzZSxcbiAgICAgIHN0YXRlOiBQRU5ESU5HLFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9KTtcbiAgfTtcblxuICAvLyBgUHJvbWlzZS5wcm90b3R5cGUudGhlbmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUudGhlblxuICBJbnRlcm5hbC5wcm90b3R5cGUgPSBkZWZpbmVCdWlsdEluKFByb21pc2VQcm90b3R5cGUsICd0aGVuJywgZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsUHJvbWlzZVN0YXRlKHRoaXMpO1xuICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBQcm9taXNlQ29uc3RydWN0b3IpKTtcbiAgICBzdGF0ZS5wYXJlbnQgPSB0cnVlO1xuICAgIHJlYWN0aW9uLm9rID0gaXNDYWxsYWJsZShvbkZ1bGZpbGxlZCkgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgcmVhY3Rpb24uZmFpbCA9IGlzQ2FsbGFibGUob25SZWplY3RlZCkgJiYgb25SZWplY3RlZDtcbiAgICByZWFjdGlvbi5kb21haW4gPSBJU19OT0RFID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgaWYgKHN0YXRlLnN0YXRlID09PSBQRU5ESU5HKSBzdGF0ZS5yZWFjdGlvbnMuYWRkKHJlYWN0aW9uKTtcbiAgICBlbHNlIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsUmVhY3Rpb24ocmVhY3Rpb24sIHN0YXRlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgfSk7XG5cbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFByb21pc2VTdGF0ZShwcm9taXNlKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGJpbmQoaW50ZXJuYWxSZXNvbHZlLCBzdGF0ZSk7XG4gICAgdGhpcy5yZWplY3QgPSBiaW5kKGludGVybmFsUmVqZWN0LCBzdGF0ZSk7XG4gIH07XG5cbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gUHJvbWlzZUNvbnN0cnVjdG9yIHx8IEMgPT09IFByb21pc2VXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG5cbiAgaWYgKCFJU19QVVJFICYmIGlzQ2FsbGFibGUoTmF0aXZlUHJvbWlzZUNvbnN0cnVjdG9yKSAmJiBOYXRpdmVQcm9taXNlUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKSB7XG4gICAgbmF0aXZlVGhlbiA9IE5hdGl2ZVByb21pc2VQcm90b3R5cGUudGhlbjtcblxuICAgIGlmICghTkFUSVZFX1BST01JU0VfU1VCQ0xBU1NJTkcpIHtcbiAgICAgIC8vIG1ha2UgYFByb21pc2UjdGhlbmAgcmV0dXJuIGEgcG9seWZpbGxlZCBgUHJvbWlzZWAgZm9yIG5hdGl2ZSBwcm9taXNlLWJhc2VkIEFQSXNcbiAgICAgIGRlZmluZUJ1aWx0SW4oTmF0aXZlUHJvbWlzZVByb3RvdHlwZSwgJ3RoZW4nLCBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlQ29uc3RydWN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGNhbGwobmF0aXZlVGhlbiwgdGhhdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSkudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjQwXG4gICAgICB9LCB7IHVuc2FmZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICAvLyBtYWtlIGAuY29uc3RydWN0b3IgPT09IFByb21pc2VgIHdvcmsgZm9yIG5hdGl2ZSBwcm9taXNlLWJhc2VkIEFQSXNcbiAgICB0cnkge1xuICAgICAgZGVsZXRlIE5hdGl2ZVByb21pc2VQcm90b3R5cGUuY29uc3RydWN0b3I7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXG4gICAgLy8gbWFrZSBgaW5zdGFuY2VvZiBQcm9taXNlYCB3b3JrIGZvciBuYXRpdmUgcHJvbWlzZS1iYXNlZCBBUElzXG4gICAgaWYgKHNldFByb3RvdHlwZU9mKSB7XG4gICAgICBzZXRQcm90b3R5cGVPZihOYXRpdmVQcm9taXNlUHJvdG90eXBlLCBQcm9taXNlUHJvdG90eXBlKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gYFByb21pc2VgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXByb21pc2UtZXhlY3V0b3JcbiQoeyBnbG9iYWw6IHRydWUsIGNvbnN0cnVjdG9yOiB0cnVlLCB3cmFwOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRF9QUk9NSVNFX0NPTlNUUlVDVE9SIH0sIHtcbiAgUHJvbWlzZTogUHJvbWlzZUNvbnN0cnVjdG9yXG59KTtcblxuUHJvbWlzZVdyYXBwZXIgPSBwYXRoLlByb21pc2U7XG5cbnNldFRvU3RyaW5nVGFnKFByb21pc2VDb25zdHJ1Y3RvciwgUFJPTUlTRSwgZmFsc2UsIHRydWUpO1xuc2V0U3BlY2llcyhQUk9NSVNFKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIGNhbGxlZCA9IDA7XG4gIHZhciBpdGVyYXRvcldpdGhSZXR1cm4gPSB7XG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZG9uZTogISFjYWxsZWQrKyB9O1xuICAgIH0sXG4gICAgJ3JldHVybic6IGZ1bmN0aW9uICgpIHtcbiAgICAgIFNBRkVfQ0xPU0lORyA9IHRydWU7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby1pbW1lZGlhdGUtbXV0YXRpb24gLS0gRVMzIHN5bnRheCBsaW1pdGF0aW9uXG4gIGl0ZXJhdG9yV2l0aFJldHVybltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1mcm9tLCBuby10aHJvdy1saXRlcmFsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIEFycmF5LmZyb20oaXRlcmF0b3JXaXRoUmV0dXJuLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBTS0lQX0NMT1NJTkcpIHtcbiAgdHJ5IHtcbiAgICBpZiAoIVNLSVBfQ0xPU0lORyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiBmYWxzZTsgfSAvLyB3b3JrYXJvdW5kIG9mIG9sZCBXZWJLaXQgKyBgZXZhbGAgYnVnXG4gIHZhciBJVEVSQVRJT05fU1VQUE9SVCA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby1pbW1lZGlhdGUtbXV0YXRpb24gLS0gRVMzIHN5bnRheCBsaW1pdGF0aW9uXG4gICAgb2JqZWN0W0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4geyBkb25lOiBJVEVSQVRJT05fU1VQUE9SVCA9IHRydWUgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICAgIGV4ZWMob2JqZWN0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gSVRFUkFUSU9OX1NVUFBPUlQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1uYXRpdmUtY29uc3RydWN0b3InKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG52YXIgRk9SQ0VEX1BST01JU0VfQ09OU1RSVUNUT1IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKS5DT05TVFJVQ1RPUjtcblxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRURfUFJPTUlTRV9DT05TVFJVQ1RPUiB8fCAhY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuICBOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IuYWxsKGl0ZXJhYmxlKS50aGVuKHVuZGVmaW5lZCwgZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGVyZm9ybScpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIFBST01JU0VfU1RBVElDU19JTkNPUlJFQ1RfSVRFUkFUSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2Utc3RhdGljcy1pbmNvcnJlY3QtaXRlcmF0aW9uJyk7XG5cbi8vIGBQcm9taXNlLmFsbGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXByb21pc2UuYWxsXG4kKHsgdGFyZ2V0OiAnUHJvbWlzZScsIHN0YXQ6IHRydWUsIGZvcmNlZDogUFJPTUlTRV9TVEFUSUNTX0lOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkcHJvbWlzZVJlc29sdmUgPSBhQ2FsbGFibGUoQy5yZXNvbHZlKTtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gY291bnRlcisrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgY2FsbCgkcHJvbWlzZVJlc29sdmUsIEMsIHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikgcmVqZWN0KHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgRk9SQ0VEX1BST01JU0VfQ09OU1RSVUNUT1IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKS5DT05TVFJVQ1RPUjtcbnZhciBOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1uYXRpdmUtY29uc3RydWN0b3InKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xuXG52YXIgTmF0aXZlUHJvbWlzZVByb3RvdHlwZSA9IE5hdGl2ZVByb21pc2VDb25zdHJ1Y3RvciAmJiBOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IucHJvdG90eXBlO1xuXG4vLyBgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLnByb3RvdHlwZS5jYXRjaFxuJCh7IHRhcmdldDogJ1Byb21pc2UnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRURfUFJPTUlTRV9DT05TVFJVQ1RPUiwgcmVhbDogdHJ1ZSB9LCB7XG4gICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICB9XG59KTtcblxuLy8gbWFrZXMgc3VyZSB0aGF0IG5hdGl2ZSBwcm9taXNlLWJhc2VkIEFQSXMgYFByb21pc2UjY2F0Y2hgIHByb3Blcmx5IHdvcmtzIHdpdGggcGF0Y2hlZCBgUHJvbWlzZSN0aGVuYFxuaWYgKCFJU19QVVJFICYmIGlzQ2FsbGFibGUoTmF0aXZlUHJvbWlzZUNvbnN0cnVjdG9yKSkge1xuICB2YXIgbWV0aG9kID0gZ2V0QnVpbHRJbignUHJvbWlzZScpLnByb3RvdHlwZVsnY2F0Y2gnXTtcbiAgaWYgKE5hdGl2ZVByb21pc2VQcm90b3R5cGVbJ2NhdGNoJ10gIT09IG1ldGhvZCkge1xuICAgIGRlZmluZUJ1aWx0SW4oTmF0aXZlUHJvbWlzZVByb3RvdHlwZSwgJ2NhdGNoJywgbWV0aG9kLCB7IHVuc2FmZTogdHJ1ZSB9KTtcbiAgfVxufVxuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGVyZm9ybScpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIFBST01JU0VfU1RBVElDU19JTkNPUlJFQ1RfSVRFUkFUSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2Utc3RhdGljcy1pbmNvcnJlY3QtaXRlcmF0aW9uJyk7XG5cbi8vIGBQcm9taXNlLnJhY2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJhY2VcbiQoeyB0YXJnZXQ6ICdQcm9taXNlJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBQUk9NSVNFX1NUQVRJQ1NfSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mKEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHByb21pc2VSZXNvbHZlID0gYUNhbGxhYmxlKEMucmVzb2x2ZSk7XG4gICAgICBpdGVyYXRlKGl0ZXJhYmxlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBjYWxsKCRwcm9taXNlUmVzb2x2ZSwgQywgcHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgRk9SQ0VEX1BST01JU0VfQ09OU1RSVUNUT1IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKS5DT05TVFJVQ1RPUjtcblxuLy8gYFByb21pc2UucmVqZWN0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5yZWplY3RcbiQoeyB0YXJnZXQ6ICdQcm9taXNlJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRURfUFJPTUlTRV9DT05TVFJVQ1RPUiB9LCB7XG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYodGhpcyk7XG4gICAgdmFyIGNhcGFiaWxpdHlSZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICBjYXBhYmlsaXR5UmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1uYXRpdmUtY29uc3RydWN0b3InKTtcbnZhciBGT1JDRURfUFJPTUlTRV9DT05TVFJVQ1RPUiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wcm9taXNlLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpLkNPTlNUUlVDVE9SO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtcmVzb2x2ZScpO1xuXG52YXIgUHJvbWlzZUNvbnN0cnVjdG9yV3JhcHBlciA9IGdldEJ1aWx0SW4oJ1Byb21pc2UnKTtcbnZhciBDSEVDS19XUkFQUEVSID0gSVNfUFVSRSAmJiAhRk9SQ0VEX1BST01JU0VfQ09OU1RSVUNUT1I7XG5cbi8vIGBQcm9taXNlLnJlc29sdmVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJlc29sdmVcbiQoeyB0YXJnZXQ6ICdQcm9taXNlJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIHx8IEZPUkNFRF9QUk9NSVNFX0NPTlNUUlVDVE9SIH0sIHtcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKENIRUNLX1dSQVBQRVIgJiYgdGhpcyA9PT0gUHJvbWlzZUNvbnN0cnVjdG9yV3JhcHBlciA/IE5hdGl2ZVByb21pc2VDb25zdHJ1Y3RvciA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHNwbGl0IHRvIG1vZHVsZXMgbGlzdGVkIGJlbG93XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnByb21pc2UuY29uc3RydWN0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMucHJvbWlzZS5hbGwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMucHJvbWlzZS5jYXRjaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5wcm9taXNlLnJhY2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMucHJvbWlzZS5yZWplY3QnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMucHJvbWlzZS5yZXNvbHZlJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wZXJmb3JtJyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgUFJPTUlTRV9TVEFUSUNTX0lOQ09SUkVDVF9JVEVSQVRJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1zdGF0aWNzLWluY29ycmVjdC1pdGVyYXRpb24nKTtcblxuLy8gYFByb21pc2UuYWxsU2V0dGxlZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXByb21pc2UuYWxsc2V0dGxlZFxuJCh7IHRhcmdldDogJ1Byb21pc2UnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IFBST01JU0VfU1RBVElDU19JTkNPUlJFQ1RfSVRFUkFUSU9OIH0sIHtcbiAgYWxsU2V0dGxlZDogZnVuY3Rpb24gYWxsU2V0dGxlZChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcm9taXNlUmVzb2x2ZSA9IGFDYWxsYWJsZShDLnJlc29sdmUpO1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBpdGVyYXRlKGl0ZXJhYmxlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgaW5kZXggPSBjb3VudGVyKys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBjYWxsKHByb21pc2VSZXNvbHZlLCBDLCBwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzW2luZGV4XSA9IHsgc3RhdHVzOiAnZnVsZmlsbGVkJywgdmFsdWU6IHZhbHVlIH07XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSB7IHN0YXR1czogJ3JlamVjdGVkJywgcmVhc29uOiBlcnJvciB9O1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGVyZm9ybScpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIFBST01JU0VfU1RBVElDU19JTkNPUlJFQ1RfSVRFUkFUSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2Utc3RhdGljcy1pbmNvcnJlY3QtaXRlcmF0aW9uJyk7XG5cbnZhciBQUk9NSVNFX0FOWV9FUlJPUiA9ICdObyBvbmUgcHJvbWlzZSByZXNvbHZlZCc7XG5cbi8vIGBQcm9taXNlLmFueWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXByb21pc2UuYW55XG4kKHsgdGFyZ2V0OiAnUHJvbWlzZScsIHN0YXQ6IHRydWUsIGZvcmNlZDogUFJPTUlTRV9TVEFUSUNTX0lOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICBhbnk6IGZ1bmN0aW9uIGFueShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgQWdncmVnYXRlRXJyb3IgPSBnZXRCdWlsdEluKCdBZ2dyZWdhdGVFcnJvcicpO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZihDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHByb21pc2VSZXNvbHZlID0gYUNhbGxhYmxlKEMucmVzb2x2ZSk7XG4gICAgICB2YXIgZXJyb3JzID0gW107XG4gICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIHZhciBhbHJlYWR5UmVzb2x2ZWQgPSBmYWxzZTtcbiAgICAgIGl0ZXJhdGUoaXRlcmFibGUsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGNvdW50ZXIrKztcbiAgICAgICAgdmFyIGFscmVhZHlSZWplY3RlZCA9IGZhbHNlO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgY2FsbChwcm9taXNlUmVzb2x2ZSwgQywgcHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeVJlamVjdGVkIHx8IGFscmVhZHlSZXNvbHZlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlSZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGlmIChhbHJlYWR5UmVqZWN0ZWQgfHwgYWxyZWFkeVJlc29sdmVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeVJlamVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICBlcnJvcnNbaW5kZXhdID0gZXJyb3I7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVqZWN0KG5ldyBBZ2dyZWdhdGVFcnJvcihlcnJvcnMsIFBST01JU0VfQU5ZX0VSUk9SKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZWplY3QobmV3IEFnZ3JlZ2F0ZUVycm9yKGVycm9ycywgUFJPTUlTRV9BTllfRVJST1IpKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBzbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGVyZm9ybScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBQcm9taXNlID0gZ2xvYmFsVGhpcy5Qcm9taXNlO1xuXG52YXIgQUNDRVBUX0FSR1VNRU5UUyA9IGZhbHNlO1xudmFyIEZPUkNFRCA9ICFQcm9taXNlIHx8ICFQcm9taXNlWyd0cnknXSB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIHJldHVybiBQcm9taXNlWyd0cnknXShmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAvLyBhdm9pZGluZyB0aGUgdXNlIG9mIHBvbHlmaWxscyBvZiB0aGUgcHJldmlvdXMgaXRlcmF0aW9uIG9mIHRoaXMgcHJvcG9zYWxcbiAgICAvLyB0aGF0IGRvZXMgbm90IGFjY2VwdCBhcmd1bWVudHMgb2YgdGhlIGNhbGxiYWNrXG4gICAgQUNDRVBUX0FSR1VNRU5UUyA9IGFyZ3VtZW50ID09PSA4O1xuICAgIHJldHVybiBwO1xuICAvLyBpdCBzaG91bGQgdXNlIGBQcm9taXNlUmVzb2x2ZWBcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvZWNtYTI2Mi9wdWxsLzM4ODNcbiAgfSwgOCkgIT09IHA7XG59KSB8fCAhQUNDRVBUX0FSR1VNRU5UUztcblxuLy8gYFByb21pc2UudHJ5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS50cnlcbiQoeyB0YXJnZXQ6ICdQcm9taXNlJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4gLyogLCAuLi5hcmdzICovKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IHNsaWNlKGFyZ3VtZW50cywgMSkgOiBbXTtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXBwbHkoYUNhbGxhYmxlKGNhbGxiYWNrZm4pLCB1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH0pO1xuICAgIGlmICghcmVzdWx0LmVycm9yKSByZXR1cm4gcHJvbWlzZVJlc29sdmUodGhpcywgcmVzdWx0LnZhbHVlKTtcbiAgICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mKHRoaXMpO1xuICAgIHZhciByZWplY3QgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgcmVqZWN0KHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxuLy8gYFByb21pc2Uud2l0aFJlc29sdmVyc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXByb21pc2Uud2l0aFJlc29sdmVyc1xuJCh7IHRhcmdldDogJ1Byb21pc2UnLCBzdGF0OiB0cnVlIH0sIHtcbiAgd2l0aFJlc29sdmVyczogZnVuY3Rpb24gd2l0aFJlc29sdmVycygpIHtcbiAgICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mKHRoaXMpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9taXNlOiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlLFxuICAgICAgcmVzb2x2ZTogcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZSxcbiAgICAgIHJlamVjdDogcHJvbWlzZUNhcGFiaWxpdHkucmVqZWN0XG4gICAgfTtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgTmF0aXZlUHJvbWlzZUNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtbmF0aXZlLWNvbnN0cnVjdG9yJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG5cbnZhciBOYXRpdmVQcm9taXNlUHJvdG90eXBlID0gTmF0aXZlUHJvbWlzZUNvbnN0cnVjdG9yICYmIE5hdGl2ZVByb21pc2VDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cbi8vIFNhZmFyaSBidWcgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMDgyOVxudmFyIE5PTl9HRU5FUklDID0gISFOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10aGVuYWJsZSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICBOYXRpdmVQcm9taXNlUHJvdG90eXBlWydmaW5hbGx5J10uY2FsbCh7IHRoZW46IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSB9LCBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xufSk7XG5cbi8vIGBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUuZmluYWxseVxuJCh7IHRhcmdldDogJ1Byb21pc2UnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBOT05fR0VORVJJQyB9LCB7XG4gICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGdldEJ1aWx0SW4oJ1Byb21pc2UnKSk7XG4gICAgdmFyIGlzRnVuY3Rpb24gPSBpc0NhbGxhYmxlKG9uRmluYWxseSk7XG4gICAgcmV0dXJuIHRoaXMudGhlbihcbiAgICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgICB9IDogb25GaW5hbGx5LFxuICAgICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgICAgfSA6IG9uRmluYWxseVxuICAgICk7XG4gIH1cbn0pO1xuXG4vLyBtYWtlcyBzdXJlIHRoYXQgbmF0aXZlIHByb21pc2UtYmFzZWQgQVBJcyBgUHJvbWlzZSNmaW5hbGx5YCBwcm9wZXJseSB3b3JrcyB3aXRoIHBhdGNoZWQgYFByb21pc2UjdGhlbmBcbmlmICghSVNfUFVSRSAmJiBpc0NhbGxhYmxlKE5hdGl2ZVByb21pc2VDb25zdHJ1Y3RvcikpIHtcbiAgdmFyIG1ldGhvZCA9IGdldEJ1aWx0SW4oJ1Byb21pc2UnKS5wcm90b3R5cGVbJ2ZpbmFsbHknXTtcbiAgaWYgKE5hdGl2ZVByb21pc2VQcm90b3R5cGVbJ2ZpbmFsbHknXSAhPT0gbWV0aG9kKSB7XG4gICAgZGVmaW5lQnVpbHRJbihOYXRpdmVQcm9taXNlUHJvdG90eXBlLCAnZmluYWxseScsIG1ldGhvZCwgeyB1bnNhZmU6IHRydWUgfSk7XG4gIH1cbn1cbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyIGNoYXJBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJBdCk7XG52YXIgY2hhckNvZGVBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJDb2RlQXQpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKENPTlZFUlRfVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIHBvcykge1xuICAgIHZhciBTID0gdG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIHZhciBwb3NpdGlvbiA9IHRvSW50ZWdlck9ySW5maW5pdHkocG9zKTtcbiAgICB2YXIgc2l6ZSA9IFMubGVuZ3RoO1xuICAgIHZhciBmaXJzdCwgc2Vjb25kO1xuICAgIGlmIChwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gc2l6ZSkgcmV0dXJuIENPTlZFUlRfVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgZmlyc3QgPSBjaGFyQ29kZUF0KFMsIHBvc2l0aW9uKTtcbiAgICByZXR1cm4gZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYgfHwgcG9zaXRpb24gKyAxID09PSBzaXplXG4gICAgICB8fCAoc2Vjb25kID0gY2hhckNvZGVBdChTLCBwb3NpdGlvbiArIDEpKSA8IDB4REMwMCB8fCBzZWNvbmQgPiAweERGRkZcbiAgICAgICAgPyBDT05WRVJUX1RPX1NUUklOR1xuICAgICAgICAgID8gY2hhckF0KFMsIHBvc2l0aW9uKVxuICAgICAgICAgIDogZmlyc3RcbiAgICAgICAgOiBDT05WRVJUX1RPX1NUUklOR1xuICAgICAgICAgID8gc3RyaW5nU2xpY2UoUywgcG9zaXRpb24sIHBvc2l0aW9uICsgMilcbiAgICAgICAgICA6IChmaXJzdCAtIDB4RDgwMCA8PCAxMCkgKyAoc2Vjb25kIC0gMHhEQzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuY29kZXBvaW50YXRcbiAgY29kZUF0OiBjcmVhdGVNZXRob2QoZmFsc2UpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS5hdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcbiAgY2hhckF0OiBjcmVhdGVNZXRob2QodHJ1ZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNoYXJBdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctbXVsdGlieXRlJykuY2hhckF0O1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciBkZWZpbmVJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1kZWZpbmUnKTtcbnZhciBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1pdGVyLXJlc3VsdC1vYmplY3QnKTtcblxudmFyIFNUUklOR19JVEVSQVRPUiA9ICdTdHJpbmcgSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoU1RSSU5HX0lURVJBVE9SKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLUBAaXRlcmF0b3JcbmRlZmluZUl0ZXJhdG9yKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICB0eXBlOiBTVFJJTkdfSVRFUkFUT1IsXG4gICAgc3RyaW5nOiB0b1N0cmluZyhpdGVyYXRlZCksXG4gICAgaW5kZXg6IDBcbiAgfSk7XG4vLyBgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXN0cmluZ2l0ZXJhdG9ycHJvdG90eXBlJS5uZXh0XG59LCBmdW5jdGlvbiBuZXh0KCkge1xuICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICB2YXIgc3RyaW5nID0gc3RhdGUuc3RyaW5nO1xuICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleDtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gc3RyaW5nLmxlbmd0aCkgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgcG9pbnQgPSBjaGFyQXQoc3RyaW5nLCBpbmRleCk7XG4gIHN0YXRlLmluZGV4ICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QocG9pbnQsIGZhbHNlKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuYWdncmVnYXRlLWVycm9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMucHJvbWlzZScpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5wcm9taXNlLmFsbC1zZXR0bGVkJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnByb21pc2UuYW55Jyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnByb21pc2UudHJ5Jyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnByb21pc2Uud2l0aC1yZXNvbHZlcnMnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMucHJvbWlzZS5maW5hbGx5Jyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvcicpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGguUHJvbWlzZTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBpdGVyYWJsZSBET00gY29sbGVjdGlvbnNcbi8vIGZsYWcgLSBgaXRlcmFibGVgIGludGVyZmFjZSAtICdlbnRyaWVzJywgJ2tleXMnLCAndmFsdWVzJywgJ2ZvckVhY2gnIG1ldGhvZHNcbm1vZHVsZS5leHBvcnRzID0ge1xuICBDU1NSdWxlTGlzdDogMCxcbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogMCxcbiAgQ1NTVmFsdWVMaXN0OiAwLFxuICBDbGllbnRSZWN0TGlzdDogMCxcbiAgRE9NUmVjdExpc3Q6IDAsXG4gIERPTVN0cmluZ0xpc3Q6IDAsXG4gIERPTVRva2VuTGlzdDogMSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IDAsXG4gIEZpbGVMaXN0OiAwLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogMCxcbiAgSFRNTENvbGxlY3Rpb246IDAsXG4gIEhUTUxGb3JtRWxlbWVudDogMCxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IDAsXG4gIE1lZGlhTGlzdDogMCxcbiAgTWltZVR5cGVBcnJheTogMCxcbiAgTmFtZWROb2RlTWFwOiAwLFxuICBOb2RlTGlzdDogMSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogMCxcbiAgUGx1Z2luOiAwLFxuICBQbHVnaW5BcnJheTogMCxcbiAgU1ZHTGVuZ3RoTGlzdDogMCxcbiAgU1ZHTnVtYmVyTGlzdDogMCxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IDAsXG4gIFNWR1BvaW50TGlzdDogMCxcbiAgU1ZHU3RyaW5nTGlzdDogMCxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogMCxcbiAgU291cmNlQnVmZmVyTGlzdDogMCxcbiAgU3R5bGVTaGVldExpc3Q6IDAsXG4gIFRleHRUcmFja0N1ZUxpc3Q6IDAsXG4gIFRleHRUcmFja0xpc3Q6IDAsXG4gIFRvdWNoTGlzdDogMFxufTtcbiIsICIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgc2V0VG9TdHJpbmdUYWcoZ2xvYmFsVGhpc1tDT0xMRUNUSU9OX05BTUVdLCBDT0xMRUNUSU9OX05BTUUpO1xuICBJdGVyYXRvcnNbQ09MTEVDVElPTl9OQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cbiIsICIndXNlIHN0cmljdCc7XG52YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vZXMvcHJvbWlzZScpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGNyZWF0ZTogY3JlYXRlXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG5cbi8vIGBSZWZsZWN0Lm93bktleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWZsZWN0Lm93bmtleXNcbiQoeyB0YXJnZXQ6ICdSZWZsZWN0Jywgc3RhdDogdHJ1ZSB9LCB7XG4gIG93bktleXM6IG93bktleXNcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2tleV0gPSB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGVyZm9ybScpO1xuXG52YXIgY3JlYXRlID0gZ2V0QnVpbHRJbignT2JqZWN0JywgJ2NyZWF0ZScpO1xudmFyIG93bktleXMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKTtcblxuLy8gYFByb21pc2UuYWxsS2V5ZWRgIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtYXdhaXQtZGljdGlvbmFyeVxuJCh7IHRhcmdldDogJ1Byb21pc2UnLCBzdGF0OiB0cnVlIH0sIHtcbiAgYWxsS2V5ZWQ6IGZ1bmN0aW9uIGFsbEtleWVkKHByb21pc2VzKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZihDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHByb21pc2VSZXNvbHZlID0gYUNhbGxhYmxlKEMucmVzb2x2ZSk7XG4gICAgICB2YXIgYWxsS2V5cyA9IG93bktleXMoYW5PYmplY3QocHJvbWlzZXMpKTtcbiAgICAgIHZhciBrZXlzID0gW107XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsS2V5cy5sZW5ndGg7IGkrKykgKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGRlc2MgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IuZihwcm9taXNlcywga2V5KTtcbiAgICAgICAgaWYgKGRlc2MgJiYgZGVzYy5lbnVtZXJhYmxlKSB7XG4gICAgICAgICAgdmFyIGluZGV4ID0gY291bnRlcjtcbiAgICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICAgIGtleXNbaW5kZXhdID0ga2V5O1xuICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgY2FsbChwcm9taXNlUmVzb2x2ZSwgQywgcHJvbWlzZXNba2V5XSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIC0tcmVtYWluaW5nO1xuICAgICAgICAgICAgaWYgKHJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgICAgICB2YXIgcmVzID0gY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyBqKyspIGNyZWF0ZVByb3BlcnR5KHJlcywga2V5c1tqXSwgdmFsdWVzW2pdKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9XG4gICAgICB9KShhbGxLZXlzW2ldKTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUoY3JlYXRlKG51bGwpKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wZXJmb3JtJyk7XG5cbnZhciBjcmVhdGUgPSBnZXRCdWlsdEluKCdPYmplY3QnLCAnY3JlYXRlJyk7XG52YXIgb3duS2V5cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpO1xuXG4vLyBgUHJvbWlzZS5hbGxTZXR0bGVkS2V5ZWRgIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtYXdhaXQtZGljdGlvbmFyeVxuJCh7IHRhcmdldDogJ1Byb21pc2UnLCBzdGF0OiB0cnVlIH0sIHtcbiAgYWxsU2V0dGxlZEtleWVkOiBmdW5jdGlvbiBhbGxTZXR0bGVkS2V5ZWQocHJvbWlzZXMpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mKEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcHJvbWlzZVJlc29sdmUgPSBhQ2FsbGFibGUoQy5yZXNvbHZlKTtcbiAgICAgIHZhciBhbGxLZXlzID0gb3duS2V5cyhhbk9iamVjdChwcm9taXNlcykpO1xuICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxLZXlzLmxlbmd0aDsgaSsrKSAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgZGVzYyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvci5mKHByb21pc2VzLCBrZXkpO1xuICAgICAgICBpZiAoZGVzYyAmJiBkZXNjLmVudW1lcmFibGUpIHtcbiAgICAgICAgICB2YXIgY3JlYXRlRWxlbWVudFJlc29sdmVyID0gZnVuY3Rpb24gKHJlamVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdmFsdWVzW2luZGV4XSA9IHJlamVjdGlvblxuICAgICAgICAgICAgICAgID8geyBzdGF0dXM6ICdyZWplY3RlZCcsIHJlYXNvbjogdmFsdWUgfVxuICAgICAgICAgICAgICAgIDogeyBzdGF0dXM6ICdmdWxmaWxsZWQnLCB2YWx1ZTogdmFsdWUgfTtcbiAgICAgICAgICAgICAgaWYgKC0tcmVtYWluaW5nKSByZXR1cm47XG4gICAgICAgICAgICAgIHZhciByZXMgPSBjcmVhdGUobnVsbCk7XG4gICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwga2V5cy5sZW5ndGg7IGorKykgY3JlYXRlUHJvcGVydHkocmVzLCBrZXlzW2pdLCB2YWx1ZXNbal0pO1xuICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH07XG4gICAgICAgICAgdmFyIGluZGV4ID0gY291bnRlcjtcbiAgICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICAgIGtleXNbaW5kZXhdID0ga2V5O1xuICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgY2FsbChwcm9taXNlUmVzb2x2ZSwgQywgcHJvbWlzZXNba2V5XSkudGhlbihjcmVhdGVFbGVtZW50UmVzb2x2ZXIoZmFsc2UpLCBjcmVhdGVFbGVtZW50UmVzb2x2ZXIodHJ1ZSkpO1xuICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgfVxuICAgICAgfSkoYWxsS2V5c1tpXSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKGNyZWF0ZShudWxsKSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikgcmVqZWN0KHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMucHJvbWlzZS50cnkuanMnKTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5wcm9taXNlLndpdGgtcmVzb2x2ZXJzJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHBhcmVudCA9IHJlcXVpcmUoJy4uLy4uL3N0YWJsZS9wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLm9iamVjdC5jcmVhdGUnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMucmVmbGVjdC5vd24ta2V5cycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lc25leHQucHJvbWlzZS5hbGwta2V5ZWQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXNuZXh0LnByb21pc2UuYWxsLXNldHRsZWQta2V5ZWQnKTtcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzbmV4dC5wcm9taXNlLnRyeScpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lc25leHQucHJvbWlzZS53aXRoLXJlc29sdmVycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiIsICJjb25zdCBjc3MgPSBgOnJvb3Qge1xuICAtLWJpbGluZ3VhbC10ZXh0LXNpemUtbTogY2FsYyh2YXIoLS1ib2R5LXRleHQtc2l6ZSkgKyAxcHgpO1xuICAtLWJpbGluZ3VhbC10ZXh0LXNpemUtczogdmFyKC0tYm9keS10ZXh0LXNpemUpO1xuICAtLWJpbGluZ3VhbC10ZXh0LXNpemUtc291cmNlOiAwLjhlbTtcbn1cblxuLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IHZhcigtLWJpbGluZ3VhbC10ZXh0LXNpemUtbSk7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlciBlbSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIgPiBlbS5iaWxpbmd1YWxfX3RyYW5zX3NvdXJjZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tYmlsaW5ndWFsLXRleHQtc2l6ZS1zb3VyY2UpO1xufVxuI3NldHRpbmdzID4gZGl2LnRhYi1uYXYgYnV0dG9uID4gLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlciwgI3F1aWNrc2V0dGluZ3MgZGl2LnRhYi1uYXYgYnV0dG9uID4gLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlciB7XG4gIGZvbnQtc2l6ZTogbWF4KHZhcigtLWJpbGluZ3VhbC10ZXh0LXNpemUtbSksIHZhcigtLXNlY3Rpb24taGVhZGVyLXRleHQtc2l6ZSkgKiAwLjg1KTtcbn1cbi5sZy5ncmFkaW8tYnV0dG9uID4gLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlciB7XG4gIGZvbnQtc2l6ZTogbWF4KDAuOSwgdmFyKC0tYnV0dG9uLWxhcmdlLXRleHQtc2l6ZSkgKiAwLjg1KTtcbn1cblxuI3R4dGltZ19ocl9maW5hbHJlcyAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyIGVtLFxuI3RhYl90aSAub3V0cHV0LWh0bWwgLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlciBlbSxcbiN0YWJfdGkgLmdyYWRpby1odG1sIC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIgZW0sXG4jc2RkcC1keW5hbWljLXByb21wdGluZyAuZ3JhZGlvLWh0bWwgLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlciBlbSxcbiNhdmFpbGFibGVfZXh0ZW5zaW9ucyAuZXh0ZW5zaW9uLXRhZyAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyIGVtLFxuI2F2YWlsYWJsZV9leHRlbnNpb25zIC5kYXRlX2FkZGVkIC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIgZW0sXG4jYXZhaWxhYmxlX2V4dGVuc2lvbnMgKyBwID4gLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlciBlbSxcbi5ncmFkaW8taW1hZ2UgZGl2W2RhdGEtdGVzdGlkPWltYWdlXSAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyIGVtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3NldHRpbmdzIC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXI6bm90KCNzZXR0aW5ncyAudGFiaXRlbSAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyKSxcbmxhYmVsID4gc3BhbiA+IC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIsXG5maWVsZHNldCA+IHNwYW4gPiAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyLFxuLmxhYmVsLXdyYXAgPiBzcGFuID4gLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlcixcbi53LWZ1bGwgPiBzcGFuID4gLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlcixcbi5jb250ZXh0LW1lbnUtaXRlbXMgLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlcixcbi5zaW5nbGUtc2VsZWN0IC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIsIHVsLm9wdGlvbnMgLmlubmVyLWl0ZW0gKyAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyLFxuLm91dHB1dC1odG1sIC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXI6bm90KHRoIC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIpLFxuLmdyYWRpby1odG1sIC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXI6bm90KHRoIC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIsIC5wb3NleF9jb250IC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIpLFxuLm91dHB1dC1tYXJrZG93biAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyLFxuLmdyYWRpby1tYXJrZG93biAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyLFxuLmdyYWRpby1pbWFnZSA+IGRpdi5mbG9hdCAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyLFxuLmdyYWRpby1maWxlID4gZGl2LmZsb2F0IC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIsXG4uZ3JhZGlvLWNvZGUgPiBkaXYuZmxvYXQgLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlcixcbi5wb3NleF9zZXR0aW5nX2NvbnQgLmJpbGluZ3VhbF9fdHJhbnNfd3JhcHBlcjpub3QoLnBvc2V4X2JnIC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIpLFxuI2R5bmFtaWMtcHJvbXB0aW5nIC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIge1xuICBmb250LXNpemU6IHZhcigtLWJpbGluZ3VhbC10ZXh0LXNpemUtcyk7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4jZXh0ZW5zaW9ucyBsYWJlbCAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyLFxuI2F2YWlsYWJsZV9leHRlbnNpb25zIHRkIC5iaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXIsXG4ubGFiZWwtd3JhcCA+IHNwYW4gPiAuYmlsaW5ndWFsX190cmFuc193cmFwcGVyIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbn1cblxuLmxhYmVsLXdyYXAgPiBzcGFuOmZpcnN0LW9mLXR5cGUge1xuICBmb250LXNpemU6IHZhcigtLWJpbGluZ3VhbC10ZXh0LXNpemUtbSk7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4jdHh0MmltZ19zY3JpcHRfY29udGFpbmVyID4gZGl2IHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tbGF5b3V0LWdhcCwgMTJweCk7XG59XG5cbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBwYWRkaW5nOiA0cHggMDtcbn1cblxubGFiZWwgPiBzcGFuIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbmRpdltkYXRhLXRlc3RpZD1pbWFnZV0gLnN0YXJ0LXByb21wdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgY29sb3I6ICMyMjI7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluLW91dDtcbn1cbmRpdltkYXRhLXRlc3RpZD1pbWFnZV06aG92ZXIgLnN0YXJ0LXByb21wdCB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5sYWJlbC13cmFwID4gc3Bhbi5pY29uIHtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG59XG5cbi5ncmFkaW8tZHJvcGRvd24gdWwub3B0aW9ucyBsaS5pdGVtIHtcbiAgcGFkZGluZzogMC4zZW0gMC40ZW0gIWltcG9ydGFudDtcbn1cblxuLyogUG9zZXggZXh0ZW5zaW9uICovXG4ucG9zZXhfYmcge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OMGVXeGxMbk5qYzNNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlEwRTdSVUZGUXp0RlFVTkJPMFZCUTBFN096dEJRVkZFTzBWQlJVTTdSVUZEUVR0RlFVTkJPMFZCUTBFN1JVRkRRVHM3UVVGRlFUdEZRVVZET3p0QlFVZEVPMFZCUlVNN08wRkJSMFE3UlVGeVFrRTdPMEZCTWtKQk8wVkJNMEpCT3pzN1FVRnBRMFE3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRGUVZORE96czdRVUZIUkR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEZRV2xDUXp0RlFVTkJPenM3UVVGSFJEdEJRVUZCTzBGQlFVRTdSVUZKUXp0RlFVTkJPenM3UVVGSFJEdEZRVVZETzBWQlEwRTdPenRCUVVkRU8wVkJSVU03T3p0QlFVZEVPMFZCUlVNN1JVRkRRVHM3TzBGQlIwUTdSVUZGUXpzN08wRkJTMEU3UlVGRlF6dEZRVU5CTzBWQlEwRTdPMEZCUjBRN1JVRkZRenM3TzBGQlNVWTdSVUZGUXp0RlFVTkJPMFZCUTBFN096dEJRVWRFTzBWQlJVTTdPenRCUVVkRU8wRkJRMEU3UlVGRlF5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbHh1T25KdmIzUmNibnRjYmx4MExTMWlhV3hwYm1kMVlXd3RkR1Y0ZEMxemFYcGxMVzA2SUdOaGJHTW9kbUZ5S0MwdFltOWtlUzEwWlhoMExYTnBlbVVwSUNzZ01YQjRLVHRjYmx4MExTMWlhV3hwYm1kMVlXd3RkR1Y0ZEMxemFYcGxMWE02SUhaaGNpZ3RMV0p2WkhrdGRHVjRkQzF6YVhwbEtUdGNibHgwTFMxaWFXeHBibWQxWVd3dGRHVjRkQzF6YVhwbExYTnZkWEpqWlRvZ01DNDRaVzA3WEc1OVhHNWNia0J0YVhocGJpQm1iMjUwTFhOcGVtVXRZWFYwYnlna1ltRnpaUzF6YVhwbExDQWtaR1ZtWVhWc2RDMXphWHBsT2lCMllYSW9MUzFpYVd4cGJtZDFZV3d0ZEdWNGRDMXphWHBsTFcwcExDQWtZbUZ6WlMxd09pQXdMamcxS1Z4dWUxeHVYSFJtYjI1MExYTnBlbVU2SUcxaGVDZ2taR1ZtWVhWc2RDMXphWHBsTENCallXeGpLQ1JpWVhObExYTnBlbVVnS2lBa1ltRnpaUzF3S1NrN1hHNTlYRzVjYmk1aWFXeHBibWQxWVd4ZlgzUnlZVzV6WDNkeVlYQndaWEpjYm50Y2JseDBaR2x6Y0d4aGVUb2dhVzVzYVc1bExXWnNaWGc3WEc1Y2RHWnNaWGd0WkdseVpXTjBhVzl1T2lCamIyeDFiVzQ3WEc1Y2RHRnNhV2R1TFdsMFpXMXpPaUJqWlc1MFpYSTdYRzVjZEdadmJuUXRjMmw2WlRvZ2RtRnlLQzB0WW1sc2FXNW5kV0ZzTFhSbGVIUXRjMmw2WlMxdEtUdGNibHgwYkdsdVpTMW9aV2xuYUhRNklERTdYRzVjYmx4MFpXMWNibHgwZTF4dVhIUmNkR1p2Ym5RdGMzUjViR1U2SUc1dmNtMWhiRHRjYmx4MGZWeHVYRzVjZEQ0Z1pXMHVZbWxzYVc1bmRXRnNYMTkwY21GdWMxOXpiM1Z5WTJWY2JseDBlMXh1WEhSY2RHWnZiblF0YzJsNlpUb2dkbUZ5S0MwdFltbHNhVzVuZFdGc0xYUmxlSFF0YzJsNlpTMXpiM1Z5WTJVcE8xeHVYSFI5WEc1Y2JseDBJM05sZEhScGJtZHpJRDRnWkdsMkxuUmhZaTF1WVhZZ1luVjBkRzl1SUQ0Z0pseHVYSFFzSUNOeGRXbGphM05sZEhScGJtZHpJR1JwZGk1MFlXSXRibUYySUdKMWRIUnZiaUErSUNaY2JseDBlMXh1WEhSY2RFQnBibU5zZFdSbElHWnZiblF0YzJsNlpTMWhkWFJ2S0haaGNpZ3RMWE5sWTNScGIyNHRhR1ZoWkdWeUxYUmxlSFF0YzJsNlpTa3BYRzVjZEgxY2JseHVYSFF1YkdjdVozSmhaR2x2TFdKMWRIUnZiaUErSUNaY2JseDBlMXh1WEhSY2RFQnBibU5zZFdSbElHWnZiblF0YzJsNlpTMWhkWFJ2S0haaGNpZ3RMV0oxZEhSdmJpMXNZWEpuWlMxMFpYaDBMWE5wZW1VcExDQXdMamtwWEc1Y2RIMWNibjFjYmx4dUkzUjRkR2x0WjE5b2NsOW1hVzVoYkhKbGN5QXVZbWxzYVc1bmRXRnNYMTkwY21GdWMxOTNjbUZ3Y0dWeUlHVnRMRnh1STNSaFlsOTBhU0F1YjNWMGNIVjBMV2gwYld3Z0xtSnBiR2x1WjNWaGJGOWZkSEpoYm5OZmQzSmhjSEJsY2lCbGJTeGNiaU4wWVdKZmRHa2dMbWR5WVdScGJ5MW9kRzFzSUM1aWFXeHBibWQxWVd4ZlgzUnlZVzV6WDNkeVlYQndaWElnWlcwc1hHNGpjMlJrY0Mxa2VXNWhiV2xqTFhCeWIyMXdkR2x1WnlBdVozSmhaR2x2TFdoMGJXd2dMbUpwYkdsdVozVmhiRjlmZEhKaGJuTmZkM0poY0hCbGNpQmxiU3hjYmlOaGRtRnBiR0ZpYkdWZlpYaDBaVzV6YVc5dWN5QXVaWGgwWlc1emFXOXVMWFJoWnlBdVltbHNhVzVuZFdGc1gxOTBjbUZ1YzE5M2NtRndjR1Z5SUdWdExGeHVJMkYyWVdsc1lXSnNaVjlsZUhSbGJuTnBiMjV6SUM1a1lYUmxYMkZrWkdWa0lDNWlhV3hwYm1kMVlXeGZYM1J5WVc1elgzZHlZWEJ3WlhJZ1pXMHNYRzRqWVhaaGFXeGhZbXhsWDJWNGRHVnVjMmx2Ym5NZ0t5QndJRDRnTG1KcGJHbHVaM1ZoYkY5ZmRISmhibk5mZDNKaGNIQmxjaUJsYlN4Y2JpNW5jbUZrYVc4dGFXMWhaMlVnWkdsMlcyUmhkR0V0ZEdWemRHbGtQVndpYVcxaFoyVmNJbDBnTG1KcGJHbHVaM1ZoYkY5ZmRISmhibk5mZDNKaGNIQmxjaUJsYlZ4dWUxeHVYSFJrYVhOd2JHRjVPaUJ1YjI1bE8xeHVmVnh1WEc0amMyVjBkR2x1WjNNZ0xtSnBiR2x1WjNWaGJGOWZkSEpoYm5OZmQzSmhjSEJsY2pwdWIzUW9JM05sZEhScGJtZHpJQzUwWVdKcGRHVnRJQzVpYVd4cGJtZDFZV3hmWDNSeVlXNXpYM2R5WVhCd1pYSXBMRnh1YkdGaVpXd2dQaUJ6Y0dGdUlENGdMbUpwYkdsdVozVmhiRjlmZEhKaGJuTmZkM0poY0hCbGNpeGNibVpwWld4a2MyVjBJRDRnYzNCaGJpQStJQzVpYVd4cGJtZDFZV3hmWDNSeVlXNXpYM2R5WVhCd1pYSXNYRzR1YkdGaVpXd3RkM0poY0NBK0lITndZVzRnUGlBdVltbHNhVzVuZFdGc1gxOTBjbUZ1YzE5M2NtRndjR1Z5TEZ4dUxuY3RablZzYkNBK0lITndZVzRnUGlBdVltbHNhVzVuZFdGc1gxOTBjbUZ1YzE5M2NtRndjR1Z5TEZ4dUxtTnZiblJsZUhRdGJXVnVkUzFwZEdWdGN5QXVZbWxzYVc1bmRXRnNYMTkwY21GdWMxOTNjbUZ3Y0dWeUxGeHVMbk5wYm1kc1pTMXpaV3hsWTNRZ0xtSnBiR2x1WjNWaGJGOWZkSEpoYm5OZmQzSmhjSEJsY2l3Z2RXd3ViM0IwYVc5dWN5QXVhVzV1WlhJdGFYUmxiU0FySUM1aWFXeHBibWQxWVd4ZlgzUnlZVzV6WDNkeVlYQndaWElzWEc0dWIzVjBjSFYwTFdoMGJXd2dMbUpwYkdsdVozVmhiRjlmZEhKaGJuTmZkM0poY0hCbGNqcHViM1FvZEdnZ0xtSnBiR2x1WjNWaGJGOWZkSEpoYm5OZmQzSmhjSEJsY2lrc1hHNHVaM0poWkdsdkxXaDBiV3dnTG1KcGJHbHVaM1ZoYkY5ZmRISmhibk5mZDNKaGNIQmxjanB1YjNRb2RHZ2dMbUpwYkdsdVozVmhiRjlmZEhKaGJuTmZkM0poY0hCbGNpd2dMbkJ2YzJWNFgyTnZiblFnTG1KcGJHbHVaM1ZoYkY5ZmRISmhibk5mZDNKaGNIQmxjaWtzWEc0dWIzVjBjSFYwTFcxaGNtdGtiM2R1SUM1aWFXeHBibWQxWVd4ZlgzUnlZVzV6WDNkeVlYQndaWElzWEc0dVozSmhaR2x2TFcxaGNtdGtiM2R1SUM1aWFXeHBibWQxWVd4ZlgzUnlZVzV6WDNkeVlYQndaWElzWEc0dVozSmhaR2x2TFdsdFlXZGxJRDRnWkdsMkxtWnNiMkYwSUM1aWFXeHBibWQxWVd4ZlgzUnlZVzV6WDNkeVlYQndaWElzWEc0dVozSmhaR2x2TFdacGJHVWdQaUJrYVhZdVpteHZZWFFnTG1KcGJHbHVaM1ZoYkY5ZmRISmhibk5mZDNKaGNIQmxjaXhjYmk1bmNtRmthVzh0WTI5a1pTQStJR1JwZGk1bWJHOWhkQ0F1WW1sc2FXNW5kV0ZzWDE5MGNtRnVjMTkzY21Gd2NHVnlMRnh1TG5CdmMyVjRYM05sZEhScGJtZGZZMjl1ZENBdVltbHNhVzVuZFdGc1gxOTBjbUZ1YzE5M2NtRndjR1Z5T201dmRDZ3VjRzl6WlhoZlltY2dMbUpwYkdsdVozVmhiRjlmZEhKaGJuTmZkM0poY0hCbGNpa3NJQzhxSUZCdmMyVjRJR1Y0ZEdWdWMybHZiaUFxTDF4dUkyUjVibUZ0YVdNdGNISnZiWEIwYVc1bklDNWlhV3hwYm1kMVlXeGZYM1J5WVc1elgzZHlZWEJ3WlhKY2JudGNibHgwWm05dWRDMXphWHBsT2lCMllYSW9MUzFpYVd4cGJtZDFZV3d0ZEdWNGRDMXphWHBsTFhNcE8xeHVYSFJoYkdsbmJpMXBkR1Z0Y3pvZ1pteGxlQzF6ZEdGeWREdGNibjFjYmx4dUkyVjRkR1Z1YzJsdmJuTWdiR0ZpWld3Z0xtSnBiR2x1WjNWaGJGOWZkSEpoYm5OZmQzSmhjSEJsY2l4Y2JpTmhkbUZwYkdGaWJHVmZaWGgwWlc1emFXOXVjeUIwWkNBdVltbHNhVzVuZFdGc1gxOTBjbUZ1YzE5M2NtRndjR1Z5TEZ4dUxteGhZbVZzTFhkeVlYQWdQaUJ6Y0dGdUlENGdMbUpwYkdsdVozVmhiRjlmZEhKaGJuTmZkM0poY0hCbGNseHVlMXh1WEhSbWIyNTBMWE5wZW1VNklHbHVhR1Z5YVhRN1hHNWNkR3hwYm1VdGFHVnBaMmgwT2lCcGJtaGxjbWwwTzF4dWZWeHVYRzR1YkdGaVpXd3RkM0poY0NBK0lITndZVzQ2Wm1seWMzUXRiMll0ZEhsd1pWeHVlMXh1WEhSbWIyNTBMWE5wZW1VNklIWmhjaWd0TFdKcGJHbHVaM1ZoYkMxMFpYaDBMWE5wZW1VdGJTazdYRzVjZEd4cGJtVXRhR1ZwWjJoME9pQXhPMXh1ZlZ4dVhHNGpkSGgwTW1sdFoxOXpZM0pwY0hSZlkyOXVkR0ZwYm1WeUlENGdaR2wyWEc1N1hHNWNkRzFoY21kcGJpMTBiM0E2SUhaaGNpZ3RMV3hoZVc5MWRDMW5ZWEFzSURFeWNIZ3BPMXh1ZlZ4dVhHNTBaWGgwWVhKbFlUbzZjR3hoWTJWb2IyeGtaWEpjYm50Y2JseDBiR2x1WlMxb1pXbG5hSFE2SURFN1hHNWNkSEJoWkdScGJtYzZJRFJ3ZUNBd08xeHVmVnh1WEc1c1lXSmxiQ0ErSUhOd1lXNWNibnRjYmx4MGJHbHVaUzFvWldsbmFIUTZJREU3WEc1OVhHNWNibVJwZGx0a1lYUmhMWFJsYzNScFpEMWNJbWx0WVdkbFhDSmRYRzU3WEc1Y2RDNXpkR0Z5ZEMxd2NtOXRjSFJjYmx4MGUxeHVYSFJjZEdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUhKblltRW9NalUxTENBeU5UVXNJREkxTlN3Z0xqWXBPMXh1WEhSY2RHTnZiRzl5T2lBak1qSXlPMXh1WEhSY2RIUnlZVzV6YVhScGIyNDZJRzl3WVdOcGRIa2dMakp6SUdWaGMyVXRhVzR0YjNWME8xeHVYSFI5WEc1Y2JseDBKanBvYjNabGNpQXVjM1JoY25RdGNISnZiWEIwWEc1Y2RIdGNibHgwWEhSdmNHRmphWFI1T2lBd08xeHVYSFI5WEc1OVhHNWNiaTVzWVdKbGJDMTNjbUZ3SUQ0Z2MzQmhiaTVwWTI5dVhHNTdYRzVjZEhkcFpIUm9PaUF4WlcwN1hHNWNkR2hsYVdkb2REb2dNV1Z0TzF4dVhIUjBjbUZ1YzJadmNtMHRiM0pwWjJsdU9pQmpaVzUwWlhJZ1kyVnVkR1Z5TzF4dWZWeHVYRzR1WjNKaFpHbHZMV1J5YjNCa2IzZHVJSFZzTG05d2RHbHZibk1nYkdrdWFYUmxiVnh1ZTF4dVhIUndZV1JrYVc1bk9pQXdMak5sYlNBd0xqUmxiU0FoYVcxd2IzSjBZVzUwTzF4dWZWeHVYRzR2S2lCUWIzTmxlQ0JsZUhSbGJuTnBiMjRnS2k5Y2JpNXdiM05sZUY5aVoxeHVlMXh1WEhSM2FHbDBaUzF6Y0dGalpUb2dibTkzY21Gd08xeHVmVnh1SWwxOSAqL2A7XG5kb2N1bWVudC5oZWFkXG4gICAgLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSlcbiAgICAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5leHBvcnQge2Nzc307XG4iLCAiXG5mdW5jdGlvbiBjcmVhdGVMb2dnZXIoKVxue1xuXHRjb25zdCBsb2dnZXJUaW1lck1hcCA9IG5ldyBNYXAoKVxuXHRjb25zdCBsb2dnZXJDb25mID0ge1xuXHRcdGJhZGdlOiB0cnVlLFxuXHRcdGxhYmVsOiAnTG9nZ2VyJyxcblx0XHRlbmFibGU6IGZhbHNlXG5cdH1cblx0cmV0dXJuIG5ldyBQcm94eShjb25zb2xlLCB7XG5cdFx0Z2V0OiAodGFyZ2V0LCBwcm9wS2V5KSA9PlxuXHRcdHtcblx0XHRcdGlmIChwcm9wS2V5ID09PSAnaW5pdCcpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiAobGFiZWw6IHN0cmluZywgZW5hYmxlPzogYm9vbGVhbikgPT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxvZ2dlckNvbmYubGFiZWwgPSBsYWJlbFxuXHRcdFx0XHRcdGxvZ2dlckNvbmYuZW5hYmxlID0gZW5hYmxlID8/IHRydWVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAocHJvcEtleSA9PT0gJ2VuYWJsZScpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiAoZW5hYmxlPzogYm9vbGVhbikgPT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJldHVybiBsb2dnZXJDb25mLmVuYWJsZSA9IGVuYWJsZSA/PyBsb2dnZXJDb25mLmVuYWJsZSA/PyB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKCEocHJvcEtleSBpbiB0YXJnZXQpKSByZXR1cm4gdW5kZWZpbmVkXG5cblx0XHRcdHJldHVybiAoLi4uYXJnczogYW55W10pID0+XG5cdFx0XHR7XG5cdFx0XHRcdGlmICghbG9nZ2VyQ29uZi5lbmFibGUgJiYgcHJvcEtleSAhPT0gJ2Vycm9yJykgcmV0dXJuXG5cblx0XHRcdFx0bGV0IGNvbG9yID0gWycjMzljZmUxJywgJyMwMDZjYWInXVxuXG5cdFx0XHRcdGxldCBsYWJlbCwgc3RhcnRcblx0XHRcdFx0c3dpdGNoIChwcm9wS2V5KVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y2FzZSAnZXJyb3InOlxuXHRcdFx0XHRcdFx0Y29sb3IgPSBbJyNmNzAwMDAnLCAnI2E3MDAwMCddXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd3YXJuJzpcblx0XHRcdFx0XHRcdGNvbG9yID0gWycjZjdiNTAwJywgJyNiNTg0MDAnXVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAndGltZSc6XG5cdFx0XHRcdFx0XHRsYWJlbCA9IGFyZ3NbMF1cblx0XHRcdFx0XHRcdGlmIChsb2dnZXJUaW1lck1hcC5oYXMobGFiZWwpKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRsb2dnZXIud2FybihgVGltZXIgJyR7bGFiZWx9JyBhbHJlYWR5IGV4aXNpdHNgKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRsb2dnZXJUaW1lck1hcC5zZXQobGFiZWwsIHBlcmZvcm1hbmNlLm5vdygpKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0Y2FzZSAndGltZUVuZCc6XG5cdFx0XHRcdFx0XHRsYWJlbCA9IGFyZ3NbMF07XG5cdFx0XHRcdFx0XHRzdGFydCA9IGxvZ2dlclRpbWVyTWFwLmdldChsYWJlbClcblx0XHRcdFx0XHRcdGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRsb2dnZXIud2FybihgVGltZXIgJyR7bGFiZWx9JyBkb2VzIG5vdCBleGlzdGApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGxvZ2dlclRpbWVyTWFwLmRlbGV0ZShsYWJlbClcblx0XHRcdFx0XHRcdFx0bG9nZ2VyLmxvZyhgJHtsYWJlbH06ICR7cGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydH0gbXNgKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0Y2FzZSAnZ3JvdXBFbmQnOlxuXHRcdFx0XHRcdFx0bG9nZ2VyQ29uZi5iYWRnZSA9IHRydWVcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBiYWRnZSA9IGxvZ2dlckNvbmYuYmFkZ2UgPyBbXG5cdFx0XHRcdFx0YCVjJHtsb2dnZXJDb25mLmxhYmVsfWAsXG5cdFx0XHRcdFx0YGNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAke2NvbG9yWzBdfSwgJHtjb2xvclsxXX0pOyB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggIzAwMDM7IHBhZGRpbmc6IDNweCA1cHg7IGJvcmRlci1yYWRpdXM6IDRweDtgXG5cdFx0XHRcdF0gOiBbXVxuXG5cdFx0XHRcdHRhcmdldFtwcm9wS2V5IGFzICdsb2cnXSguLi5iYWRnZSwgLi4uYXJncylcblxuXHRcdFx0XHRpZiAocHJvcEtleSA9PT0gJ2dyb3VwJyB8fCBwcm9wS2V5ID09PSAnZ3JvdXBDb2xsYXBzZWQnKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bG9nZ2VyQ29uZi5iYWRnZSA9IGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pIGFzIHR5cGVvZiBjb25zb2xlICYge1xuXHRcdGluaXQobGFiZWw6IHN0cmluZywgZW5hYmxlPzogYm9vbGVhbik6IHZvaWQsXG5cdFx0ZW5hYmxlKGVuYWJsZT86IGJvb2xlYW4pOiBib29sZWFuLFxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoKVxuZXhwb3J0IGNvbnN0IGxvZ2dlclNob3cgPSBjcmVhdGVMb2dnZXIoKVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc29sZURlYnVnKC4uLmFyZ3Y6IGFueVtdKVxue1xuXHRsb2dnZXJTaG93LmRlYnVnKC4uLmFyZ3YpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zb2xlTG9nKC4uLmFyZ3Y6IGFueVtdKVxue1xuXHRsb2dnZXJTaG93LmxvZyguLi5hcmd2KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc29sZUluZm8oLi4uYXJndjogYW55W10pXG57XG5cdGxvZ2dlclNob3cuaW5mbyguLi5hcmd2KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc29sZUVycm9yKC4uLmFyZ3Y6IGFueVtdKVxue1xuXHRsb2dnZXJTaG93LmVycm9yKC4uLmFyZ3YpXG59XG4iLCAiaW1wb3J0IHsgSUVsZW1lbnQgfSBmcm9tICcuL3R5cGVzJztcblxubGV0IGFwcDogUmV0dXJuVHlwZTx0eXBlb2YgZ3JhZGlvQXBwPlxuXG5leHBvcnQgZnVuY3Rpb24gX2dyYWRpb0FwcCgpXG57XG5cdHJldHVybiBhcHAgPz89IGdyYWRpb0FwcCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlTZWxlY3RvckFsbCguLi5hcmdzOiBQYXJhbWV0ZXJzPEdyYWRpb0FwcEhUTUxFbGVtZW50W1wicXVlcnlTZWxlY3RvckFsbFwiXT4gfCBbc3RyaW5nW10sIC4uLmFueVtdXSk6IE5vZGVMaXN0T2Y8SUVsZW1lbnQ+XG57XG5cdC8vIEB0cy1pZ25vcmVcblx0cmV0dXJuIF9ncmFkaW9BcHAoKS5xdWVyeVNlbGVjdG9yQWxsKC4uLmFyZ3MpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVNlbGVjdG9yKC4uLmFyZ3M6IFBhcmFtZXRlcnM8R3JhZGlvQXBwSFRNTEVsZW1lbnRbXCJxdWVyeVNlbGVjdG9yXCJdPilcbntcblx0cmV0dXJuIF9ncmFkaW9BcHAoKS5xdWVyeVNlbGVjdG9yKC4uLmFyZ3MpIGFzIGFueSBhcyBJRWxlbWVudFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhpc3RzV2VidWlPcHRzKClcbntcblx0cmV0dXJuICh0eXBlb2Ygb3B0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgKE9iamVjdC5rZXlzKG9wdHMpLmxlbmd0aCAhPT0gMCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWJ1aU9wdHMoKVxue1xuXHRyZXR1cm4gZXhpc3RzV2VidWlPcHRzKCkgPyBvcHRzIDoge307XG59XG4iLCAiaW1wb3J0IHsgY29uc29sZUluZm8sIGxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IGdldFdlYnVpT3B0cyB9IGZyb20gJy4vZG9tJztcblxuZXhwb3J0IGNvbnN0IGkxOG5SZWdleCA9IG5ldyBNYXAoKVxuZXhwb3J0IGxldCBpMThuU2NvcGU6IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge307XG5leHBvcnQgbGV0IHNjb3BlZFNvdXJjZTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5leHBvcnQgbGV0IGkxOG46IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSBudWxsIGFzIGFueTtcblxuY29uc3QgcmVnZXhfc2NvcGUgPSAvXiMjKD88c2NvcGU+LispIyMoPzxza2V5Pi4rKSQvIC8vICMjc2NvcGUjIy5za2V5XG5cbmludGVyZmFjZSBJRGlyc1xue1xuXHRbbGFuZzogc3RyaW5nXTogc3RyaW5nXG59XG5cbmV4cG9ydCBsZXQgY29uZmlnOiBSZXR1cm5UeXBlPHR5cGVvZiBpbml0Q29uZmlnPjtcblxuLyoqXG4gKiBMb2FkIGZpbGVcbiAqL1xuZnVuY3Rpb24gcmVhZEZpbGUoZmlsZVBhdGg6IHN0cmluZylcbntcblx0Y29uc29sZUluZm8oJ3JlYWRGaWxlJywgYGZpbGU9JHtmaWxlUGF0aH1gKTtcblxuXHRyZXR1cm4gZmV0Y2goYGZpbGU9JHtmaWxlUGF0aH1gLCB7XG5cdFx0bWV0aG9kOiAnR0VUJyxcblx0fSkudGhlbihyZXMgPT4gcmVzLnRleHQoKSlcblxuLy9cdGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4vL1x0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIGBmaWxlPSR7ZmlsZVBhdGh9YCwgZmFsc2UpO1xuLy9cdHJlcXVlc3Quc2VuZChudWxsKTtcbi8vXHRyZXR1cm4gcmVxdWVzdC5yZXNwb25zZVRleHQ7XG59XG5cbmZ1bmN0aW9uIGluaXRMb2NhbGl6YXRpb24oKVxue1xuXHRpMThuUmVnZXguY2xlYXIoKTtcblx0aTE4blNjb3BlID0ge307XG5cdHNjb3BlZFNvdXJjZSA9IHt9O1xuXHRpMThuID0gbnVsbCBhcyBhbnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWcoKVxue1xuXHRyZXR1cm4gY29uZmlnID8/PSBpbml0Q29uZmlnKCk7XG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIEVudW1CaWxpbmd1YWxMb2NhbGl6YXRpb25PcmRlclxue1xuXHRPUklHSU5BTF9GSVJTVCA9IFwiT3JpZ2luYWwgRmlyc3RcIlxufVxuXG5mdW5jdGlvbiBpbml0Q29uZmlnKClcbntcblx0Y29uc3Qgb3B0cyA9IGdldFdlYnVpT3B0cygpO1xuXG5cdGxldCBjb25maWcgPSB7XG5cdFx0ZW5hYmxlZDogb3B0c1tcImJpbGluZ3VhbF9sb2NhbGl6YXRpb25fZW5hYmxlZFwiXSBhcyBib29sZWFuLFxuXHRcdGZpbGU6IG9wdHNbXCJiaWxpbmd1YWxfbG9jYWxpemF0aW9uX2ZpbGVcIl0gYXMgc3RyaW5nLFxuXHRcdGRpcnM6IG9wdHNbXCJiaWxpbmd1YWxfbG9jYWxpemF0aW9uX2RpcnNcIl0gYXMgSURpcnMsXG5cdFx0b3JkZXI6IG9wdHNbXCJiaWxpbmd1YWxfbG9jYWxpemF0aW9uX29yZGVyXCJdIGFzIEVudW1CaWxpbmd1YWxMb2NhbGl6YXRpb25PcmRlcixcblx0XHRlbmFibGVMb2dnZXI6IG9wdHNbXCJiaWxpbmd1YWxfbG9jYWxpemF0aW9uX2xvZ2dlclwiXSBhcyBib29sZWFuXG5cdH1cblxuXHRpZiAoIWNvbmZpZy5lbmFibGVkXG5cdFx0fHwgIWNvbmZpZy5maWxlXG5cdFx0fHwgY29uZmlnLmZpbGUgPT09IFwiTm9uZVwiXG5cdFx0fHwgIWNvbmZpZy5kaXJzXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdHx8IGNvbmZpZy5kaXJzID09PSBcIk5vbmVcIlxuXHQpIHJldHVyblxuXG5cdC8vIEB0cy1pZ25vcmVcblx0Y29uZmlnLmRpcnMgPSBKU09OLnBhcnNlKGNvbmZpZy5kaXJzKVxuXG5cdHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkTG9jYWxpemF0aW9uKGRpcnM6IElEaXJzLCBmaWxlOiBzdHJpbmcpXG57XG5cdGNvbnN0IGxhYmVsID0gJ2xvYWRMb2NhbGl6YXRpb24nO1xuXG5cdGxvZ2dlci5kZWJ1ZyhgJHtsYWJlbH06aW5pdGApO1xuXHRsb2dnZXIudGltZShgJHtsYWJlbH06ZG9uZWApO1xuXG5cdGNvbnN0IHJlc3BvbnNlVGV4dCA9IGF3YWl0IHJlYWRGaWxlKGRpcnNbZmlsZV0pXG5cdFx0LnRoZW4odmFsdWUgPT4ge1xuXHRcdFx0aW5pdExvY2FsaXphdGlvbigpO1xuXHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0fSlcblx0O1xuXG5cdGkxOG4gPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCwgKGtleSwgdmFsdWUpID0+XG5cdHtcblx0XHQvLyBwYXJzZSByZWdleCB0cmFuc2xhdGlvbnNcblx0XHRpZiAoa2V5LnN0YXJ0c1dpdGgoJ0BAJykpXG5cdFx0e1xuXG5cdFx0XHRjb25zdCByZWdleCA9IGdldFJlZ2V4KGtleS5zbGljZSgyKSlcblx0XHRcdGlmIChyZWdleCBpbnN0YW5jZW9mIFJlZ0V4cClcblx0XHRcdHtcblx0XHRcdFx0aTE4blJlZ2V4LnNldChyZWdleCwgdmFsdWUpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHJlZ2V4X3Njb3BlLnRlc3Qoa2V5KSlcblx0XHR7XG5cdFx0XHQvLyBwYXJzZSBzY29wZSB0cmFuc2xhdGlvbnNcblx0XHRcdGxldCB7IHNjb3BlLCBza2V5IH0gPSBrZXkubWF0Y2gocmVnZXhfc2NvcGUpIS5ncm91cHMhXG5cblx0XHRcdGlmIChzY29wZS5zdGFydHNXaXRoKCdAJykpXG5cdFx0XHR7XG5cdFx0XHRcdHNjb3BlID0gc2NvcGUuc2xpY2UoMSlcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0c2NvcGUgPSAnIycgKyBzY29wZVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXNjb3BlLmxlbmd0aClcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHR9XG5cblx0XHRcdGkxOG5TY29wZVtzY29wZV0gfHw9IHt9XG5cdFx0XHRpMThuU2NvcGVbc2NvcGVdW3NrZXldID0gdmFsdWVcblxuXHRcdFx0c2NvcGVkU291cmNlW3NrZXldIHx8PSBbXVxuXHRcdFx0c2NvcGVkU291cmNlW3NrZXldLnB1c2goc2NvcGUpXG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHRyZXR1cm4gdmFsdWVcblx0XHR9XG5cdH0pXG5cblx0bG9nZ2VyLnRpbWVFbmQoYCR7bGFiZWx9OmRvbmVgKVxuXG5cdGxvZ2dlci5ncm91cCgnTG9jYWxpemF0aW9uIGZpbGUgbG9hZGVkLicpXG5cdGxvZ2dlci5pbmZvKCdpMThuJywgaTE4bilcblx0bG9nZ2VyLmluZm8oJ2kxOG5SZWdleCcsIGkxOG5SZWdleClcblx0bG9nZ2VyLmluZm8oJ2kxOG5TY29wZScsIGkxOG5TY29wZSlcblx0bG9nZ2VyLmluZm8oJ3Njb3BlZFNvdXJjZScsIHNjb3BlZFNvdXJjZSlcblx0bG9nZ2VyLmdyb3VwRW5kKClcblxuXHRyZXR1cm4ge1xuXHRcdGkxOG4sXG5cdFx0aTE4blJlZ2V4LFxuXHRcdGkxOG5TY29wZSxcblx0XHRzY29wZWRTb3VyY2UsXG5cdH1cbn1cblxuLyoqXG4gKiBnZXQgcmVnZXggb2JqZWN0IGZyb20gc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGdldFJlZ2V4KHJlZ2V4OiBzdHJpbmcpXG57XG5cdHRyeVxuXHR7XG5cdFx0cmVnZXggPSByZWdleC50cmltKCk7XG5cdFx0bGV0IHBhcnRzID0gcmVnZXguc3BsaXQoJy8nKTtcblx0XHRpZiAocmVnZXhbMF0gIT09ICcvJyB8fCBwYXJ0cy5sZW5ndGggPCAzKVxuXHRcdHtcblx0XHRcdHJlZ2V4ID0gcmVnZXgucmVwbGFjZSgvWy4qK1xcLT9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTsgLy9lc2NhcCBjb21tb24gc3RyaW5nXG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChyZWdleCk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3B0aW9uID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG5cdFx0Y29uc3QgbGFzdEluZGV4ID0gcmVnZXgubGFzdEluZGV4T2YoJy8nKTtcblx0XHRyZWdleCA9IHJlZ2V4LnN1YnN0cmluZygxLCBsYXN0SW5kZXgpO1xuXHRcdHJldHVybiBuZXcgUmVnRXhwKHJlZ2V4LCBvcHRpb24pO1xuXHR9XG5cdGNhdGNoIChlKVxuXHR7XG5cdFx0cmV0dXJuIG51bGxcblx0fVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBodG1sRW5jb2RlKGh0bWxTdHI6IHN0cmluZylcbntcblx0cmV0dXJuIGh0bWxTdHIucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpXG5cdFx0LnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKS5yZXBsYWNlKC8nL2csICcmIzM5OycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUh0bWxTdHJpbmdUb0VsZW1lbnQoaHRtbFN0cjogc3RyaW5nKVxue1xuXHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJylcblx0dGVtcGxhdGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgaHRtbFN0cilcblx0cmV0dXJuIHRlbXBsYXRlLmZpcnN0RWxlbWVudENoaWxkXG59XG4iLCAiZXhwb3J0IGNvbnN0IGlnbm9yZV9zZWxlY3RvciA9IChbXG5cdCcuYmlsaW5ndWFsX190cmFuc193cmFwcGVyJywgLy8gc2VsZlxuXHQnLnJlc3VsdHNGbGV4Q29udGFpbmVyJywgLy8gdGFnLWF1dG9jb21wbGV0ZVxuXHQnI3NldHRpbmdfc2RfbW9kZWxfY2hlY2twb2ludCBzZWxlY3QnLCAvLyBtb2RlbCBjaGVja3BvaW50XG5cdCcjc2V0dGluZ19zZF92YWUgc2VsZWN0JywgLy8gdmFlIG1vZGVsXG5cdCcjdHh0MmltZ19zdHlsZXMsICNpbWcydHh0X3N0eWxlcycsIC8vIHN0eWxlcyBzZWxlY3Rcblx0Jy5leHRyYS1uZXR3b3JrLWNhcmRzIC5jYXJkIC5hY3Rpb25zIC5uYW1lJywgLy8gZXh0cmEgbmV0d29yayBjYXJkcyBuYW1lXG5cdCdzY3JpcHQsIHN0eWxlLCBzdmcsIGcsIHBhdGgnLCAvLyBzY3JpcHQgLyBzdHlsZSAvIHN2ZyBlbGVtZW50c1xuXG5cdCcjdGFncyA+ICN0YWdzIGEnLFxuXG5cdCcuYmlsaW5ndWFsX190cmFuc19pZ25vcmUnLFxuXG5cdC4uLltcblx0XHQnc3ZnJyxcblx0XHQnY2FudmFzJyxcblxuXHRcdCcuYmlsaW5ndWFsX190cmFuc19zb3VyY2UnLFxuXHRcdCcjdHh0MmltZ19wcm9tcHRfY29udGFpbmVyJyxcblx0XHQnI2ltZzJpbWdfcHJvbXB0X2NvbnRhaW5lcicsXG5cblx0XHQnI2xvYmVfaGlnaGxpZ2h0ZXInLFxuXHRcdCcuc2hpa2knLFxuXG5cdFx0YC4ke0VudW1CaWxpZ3VhbFBsYWNlaG9sZGVyLnRyYW5zX2lnbm9yZV9kZWVwfWAsXG5cdFx0YC4ke0VudW1CaWxpZ3VhbFBsYWNlaG9sZGVyLnRyYW5zX3NvdXJjZX1gLFxuXG5cdFx0Jy5wcm9ncmVzcycsXG5cdFx0Jy5wcm9ncmVzcy10ZXh0Jyxcblx0XHQnLnByb2dyZXNzRGl2JyxcblxuXHRcdCcjcGh5c3Rvbi1wcm9tcHQtYWxsLWluLW9uZScsXG5cdFx0Jy5waHlzdG9uLXByb21wdCcsXG5cdF0ubWFwKHYgPT4gYCR7dn0sICR7dn0gKmApLFxuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qb3VybmV5LWFkL3NkLXdlYnVpLWJpbGluZ3VhbC1sb2NhbGl6YXRpb24vaXNzdWVzLzMwXG5cdCcuYWNlX2xpbmUnLFxuXHQnLmFjZV9wcm9tcHR0b2tlbicsXG5cbl0gc2F0aXNmaWVzIHN0cmluZ1tdKS5qb2luKCcsJylcblxuZXhwb3J0IGNvbnN0IGVudW0gRW51bUJpbGlndWFsUGxhY2Vob2xkZXJcbntcblx0LyoqXG5cdCAqIG1hcmtlZCBhcyB3aWxsIGJlIHJlcGxhY2VkXG5cdCAqL1xuXHR3aWxsX2JlX3JlcGxhY2VkID0gJ19fYmlsaWd1YWxfX3dpbGxfYmVfcmVwbGFjZWRfXycsXG5cblx0dHJhbnNfd3JhcHBlciA9ICdiaWxpbmd1YWxfX3RyYW5zX3dyYXBwZXInLFxuXG5cdHRyYW5zX3NvdXJjZSA9ICdiaWxpbmd1YWxfX3RyYW5zX3NvdXJjZScsXG5cblx0LyoqXG5cdCAqIG9ubHkgaWdub3JlIGN1dWVudCBub2RlXG5cdCAqL1xuXHR0cmFuc19pZ25vcmUgPSAnYmlsaW5ndWFsX190cmFuc19pZ25vcmUnLFxuXHQvKipcblx0ICogaWdub3JlIGN1dWVudCBub2RlLCBhbmQgYWxsIGRlZXBcblx0ICovXG5cdHRyYW5zX2lnbm9yZV9kZWVwID0gJ2JpbGluZ3VhbF9fdHJhbnNfaWdub3JlX2RlZXAnLFxufVxuIiwgImltcG9ydCB7IElFbGVtZW50IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBFbnVtQmlsaWd1YWxQbGFjZWhvbGRlciwgaWdub3JlX3NlbGVjdG9yIH0gZnJvbSAnLi9jb25zdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc0xpc3RDb250YWlucyhub2RlOiBJRWxlbWVudCwgY2xhc3NOYW1lOiBzdHJpbmcgfCBFbnVtQmlsaWd1YWxQbGFjZWhvbGRlcilcbntcblx0cmV0dXJuIG5vZGU/LmNsYXNzTGlzdD8uY29udGFpbnMoY2xhc3NOYW1lKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJZ25vcmVUcmFuc2xhdGVOb2RlKG5vZGU6IElFbGVtZW50KVxue1xuXHRyZXR1cm4gbm9kZS5tYXRjaGVzPy4oaWdub3JlX3NlbGVjdG9yKSB8fCBjbGFzc0xpc3RDb250YWlucyhub2RlLCBFbnVtQmlsaWd1YWxQbGFjZWhvbGRlci50cmFuc193cmFwcGVyKVxufVxuIiwgImltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IGNvbmZpZywgRW51bUJpbGluZ3VhbExvY2FsaXphdGlvbk9yZGVyLCBpMThuLCBpMThuUmVnZXgsIGkxOG5TY29wZSwgc2NvcGVkU291cmNlIH0gZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IGh0bWxFbmNvZGUsIHBhcnNlSHRtbFN0cmluZ1RvRWxlbWVudCB9IGZyb20gJy4vaHRtbCc7XG5pbXBvcnQgeyBFbnVtQmlsaWd1YWxQbGFjZWhvbGRlciB9IGZyb20gJy4vY29uc3QnO1xuaW1wb3J0IHsgX2dyYWRpb0FwcCwgcXVlcnlTZWxlY3RvckFsbCB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IEVudW1UcmFuc2xhdGVUeXBlLCBJRG9UcmFuc2xhdGVDYiwgSUVsZW1lbnQsIElFdmVudCwgSU11dGF0aW9uUmVjb3JkLCBJT3B0aW9uc1RyYW5zbGF0ZUVsIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBjbGFzc0xpc3RDb250YWlucywgaXNJZ25vcmVUcmFuc2xhdGVOb2RlIH0gZnJvbSAnLi91dGlsJztcblxuY29uc3QgcmVfbnVtID0gL15bXFwuXFxkXSskLztcbmNvbnN0IHJlX2Vtb2ppID0gL1tcXHB7RXh0ZW5kZWRfUGljdG9ncmFwaGljfVxcdXsxRjNGQn0tXFx1ezFGM0ZGfVxcdXsxRjlCMH0tXFx1ezFGOUIzfV0vdTtcblxuZnVuY3Rpb24gY2hlY2tSZWdleChzb3VyY2U6IHN0cmluZylcbntcblx0Zm9yIChjb25zdCBbcmVnZXgsIHZhbHVlXSBvZiBpMThuUmVnZXguZW50cmllcygpKVxuXHR7XG5cdFx0aWYgKHJlZ2V4LnRlc3Qoc291cmNlKSlcblx0XHR7XG5cdFx0XHRsb2dnZXIubG9nKCdyZWdleCcsIHJlZ2V4LCBzb3VyY2UsIHZhbHVlKVxuXHRcdFx0cmV0dXJuIHNvdXJjZS5yZXBsYWNlKHJlZ2V4LCB2YWx1ZSlcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZG9UcmFuc2xhdGUoZWw6IElFbGVtZW50LCBzb3VyY2U6IHN0cmluZywgdHlwZTogRW51bVRyYW5zbGF0ZVR5cGUsIGNiPzogSURvVHJhbnNsYXRlQ2IsIC4uLmFyZ3MpXG57XG5cdHNvdXJjZSA9IHNvdXJjZS50cmltKCk7XG5cblx0aWYgKCFzb3VyY2UubGVuZ3RoIHx8IHJlX251bS50ZXN0KHNvdXJjZSkpIHJldHVyblxuXHQvLyBpZiAocmVfZW1vamkudGVzdChzb3VyY2UpKSByZXR1cm5cblxuXHRsZXQgdHJhbnNsYXRpb246IHN0cmluZ1xuXHRjb25zdCBzY29wZXMgPSBzY29wZWRTb3VyY2Vbc291cmNlXTtcblxuXHRpZiAoc2NvcGVzKVxuXHR7XG5cdFx0RVNCVUlMRF9ERUJVRyAmJiBsb2dnZXIuZGVidWcoJ2RvVHJhbnNsYXRlJywgJ3Njb3BlJywgZWwsIHNvdXJjZSwgc2NvcGVzKTtcblx0XHRmb3IgKGxldCBzY29wZSBvZiBzY29wZXMpXG5cdFx0e1xuXHRcdFx0aWYgKGVsLnBhcmVudEVsZW1lbnQuY2xvc2VzdChzY29wZSkpXG5cdFx0XHR7XG5cdFx0XHRcdHRyYW5zbGF0aW9uID0gaTE4blNjb3BlW3Njb3BlXVtzb3VyY2VdXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dHJhbnNsYXRpb24gPz89IGkxOG5bc291cmNlXSB8fCBjaGVja1JlZ2V4KHNvdXJjZSk7XG5cblx0aWYgKCF0cmFuc2xhdGlvbiB8fCBzb3VyY2UgPT09IHRyYW5zbGF0aW9uKVxuXHR7XG5cdFx0aWYgKGVsLnRleHRDb250ZW50ID09PSBFbnVtQmlsaWd1YWxQbGFjZWhvbGRlci53aWxsX2JlX3JlcGxhY2VkKSBlbC50ZXh0Q29udGVudCA9IHNvdXJjZSAvLyByZXN0b3JlIG9yaWdpbmFsIHRleHQgaWYgdHJhbnNsYXRpb24gbm90IGV4aXN0XG5cdFx0aWYgKGNsYXNzTGlzdENvbnRhaW5zKGVsLm5leHRTaWJsaW5nLCBFbnVtQmlsaWd1YWxQbGFjZWhvbGRlci50cmFuc193cmFwcGVyKSkgZWwubmV4dFNpYmxpbmcucmVtb3ZlKCkgLy8gcmVtb3ZlIGV4aXN0IHRyYW5zbGF0aW9uIGlmIHRyYW5zbGF0aW9uIG5vdCBleGlzdFxuXHRcdHJldHVyblxuXHR9XG5cblx0Y29uc3QgaXNUcmFuc2xhdGlvbkluY2x1ZGVTb3VyY2UgPSB0cmFuc2xhdGlvbi5zdGFydHNXaXRoKHNvdXJjZSk7XG5cblx0Y29uc3QgaXNPcmlnaW5hbEZpcnN0ID0gY29uZmlnLm9yZGVyID09PSBFbnVtQmlsaW5ndWFsTG9jYWxpemF0aW9uT3JkZXIuT1JJR0lOQUxfRklSU1Q7XG5cblx0LyoqXG5cdCAqIGZvciBpc09yaWdpbmFsRmlyc3QgPSB0cnVlXG5cdCAqL1xuXHRsZXQgdHJhbnNsYXRpb25Pbmx5ID0gdHJhbnNsYXRpb247XG5cblx0aWYgKGlzT3JpZ2luYWxGaXJzdClcblx0e1xuXHRcdFtzb3VyY2UsIHRyYW5zbGF0aW9uXSA9IFt0cmFuc2xhdGlvbiwgc291cmNlXVxuXHR9XG5cblx0c3dpdGNoICh0eXBlKVxuXHR7XG5cdFx0Y2FzZSBFbnVtVHJhbnNsYXRlVHlwZS50ZXh0OlxuXHRcdFx0ZWwudGV4dENvbnRlbnQgPSB0cmFuc2xhdGlvbk9ubHlcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSBFbnVtVHJhbnNsYXRlVHlwZS5lbGVtZW50OlxuXG5cdFx0XHRpZiAoaXNUcmFuc2xhdGlvbkluY2x1ZGVTb3VyY2UpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChlbC5ub2RlVHlwZSA9PT0gMylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGVsLm5vZGVWYWx1ZSA9IHRyYW5zbGF0aW9uT25seTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmIChodG1sRW5jb2RlKGVsLnRleHRDb250ZW50KSA9PT0gZWwuaW5uZXJIVE1MKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZWwuaW5uZXJIVE1MID0gaHRtbEVuY29kZSh0cmFuc2xhdGlvbk9ubHkpXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGh0bWxFbCA9IHBhcnNlSHRtbFN0cmluZ1RvRWxlbWVudChgPGRpdiBjbGFzcz1cIiR7RW51bUJpbGlndWFsUGxhY2Vob2xkZXIudHJhbnNfd3JhcHBlcn1cIj4ke2h0bWxFbmNvZGUodHJhbnNsYXRpb24pfTxlbSBjbGFzcz1cIiR7RW51bUJpbGlndWFsUGxhY2Vob2xkZXIudHJhbnNfc291cmNlfVwiPiR7aHRtbEVuY29kZShzb3VyY2UpfTwvZW0+PC9kaXY+YClcblxuXHRcdFx0aWYgKGVsLmhhc0NoaWxkTm9kZXMoKSlcblx0XHRcdHtcblx0XHRcdFx0Y29uc3QgdGV4dE5vZGUgPSBBcnJheS5mcm9tKGVsLmNoaWxkTm9kZXMpLmZpbmQobm9kZSA9PlxuXHRcdFx0XHRcdG5vZGUubm9kZU5hbWUgPT09ICcjdGV4dCcgJiZcblx0XHRcdFx0XHQobm9kZS50ZXh0Q29udGVudC50cmltKCkgPT09IHNvdXJjZSB8fCBub2RlLnRleHRDb250ZW50LnRyaW0oKSA9PT0gRW51bUJpbGlndWFsUGxhY2Vob2xkZXIud2lsbF9iZV9yZXBsYWNlZClcblx0XHRcdFx0KVxuXG5cdFx0XHRcdGlmICh0ZXh0Tm9kZSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHROb2RlLnRleHRDb250ZW50ID0gJydcblx0XHRcdFx0XHRpZiAoY2xhc3NMaXN0Q29udGFpbnModGV4dE5vZGUubmV4dFNpYmxpbmcsIEVudW1CaWxpZ3VhbFBsYWNlaG9sZGVyLnRyYW5zX3dyYXBwZXIpKSB0ZXh0Tm9kZS5uZXh0U2libGluZy5yZW1vdmUoKVxuXHRcdFx0XHRcdHRleHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGh0bWxFbCwgdGV4dE5vZGUubmV4dFNpYmxpbmcpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0ZWwudGV4dENvbnRlbnQgPSAnJ1xuXHRcdFx0XHRpZiAoY2xhc3NMaXN0Q29udGFpbnMoZWwubmV4dFNpYmxpbmcsIEVudW1CaWxpZ3VhbFBsYWNlaG9sZGVyLnRyYW5zX3dyYXBwZXIpKSBlbC5uZXh0U2libGluZy5yZW1vdmUoKVxuXHRcdFx0XHRlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShodG1sRWwsIGVsLm5leHRTaWJsaW5nKVxuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIEVudW1UcmFuc2xhdGVUeXBlLm9wdGlvbjpcblx0XHRcdGVsLnRleHRDb250ZW50ID0gaXNUcmFuc2xhdGlvbkluY2x1ZGVTb3VyY2UgPyB0cmFuc2xhdGlvbk9ubHkgOiBgJHt0cmFuc2xhdGlvbn0gKCR7c291cmNlfSlgXG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgRW51bVRyYW5zbGF0ZVR5cGUudGl0bGU6XG5cdFx0XHRlbC50aXRsZSA9IGlzVHJhbnNsYXRpb25JbmNsdWRlU291cmNlID8gdHJhbnNsYXRpb25Pbmx5IDogYCR7dHJhbnNsYXRpb259XFxuJHtzb3VyY2V9YFxuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIEVudW1UcmFuc2xhdGVUeXBlLnBsYWNlaG9sZGVyOlxuXHRcdFx0ZWwucGxhY2Vob2xkZXIgPSBpc1RyYW5zbGF0aW9uSW5jbHVkZVNvdXJjZSA/IHRyYW5zbGF0aW9uT25seSA6IGAke3RyYW5zbGF0aW9ufVxcblxcbiR7c291cmNlfWBcblx0XHRcdGJyZWFrO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiB0cmFuc2xhdGlvbk9ubHlcblx0fVxuXG5cdGNiPy4oZWwsIGlzT3JpZ2luYWxGaXJzdCA/IHRyYW5zbGF0aW9uIDogc291cmNlLCB0eXBlLCB0cmFuc2xhdGlvbk9ubHksIGFyZ3MpO1xufVxuXG4vKipcbiAqIFRyYW5zbGF0ZSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZUVsKGVsOiBJRWxlbWVudCwge1xuXHRkZWVwID0gZmFsc2UsXG5cdHJpY2ggPSBmYWxzZSxcblx0YWRkQ291bnQsXG5cdGNiLFxufTogSU9wdGlvbnNUcmFuc2xhdGVFbCA9IHt9KVxue1xuXHRpZiAoaXNJZ25vcmVUcmFuc2xhdGVOb2RlKGVsKSkgcmV0dXJuIGZhbHNlIC8vIGlnbm9yZSBzb21lIGVsZW1lbnRzLlxuXG5cdGFkZENvdW50Py4oKTtcblxuXHRpZiAoZWwudGl0bGUpXG5cdHtcblx0XHRkb1RyYW5zbGF0ZShlbCwgZWwudGl0bGUsIEVudW1UcmFuc2xhdGVUeXBlLnRpdGxlLCBjYilcblx0fVxuXG5cdGlmIChlbC5wbGFjZWhvbGRlcilcblx0e1xuXHRcdGRvVHJhbnNsYXRlKGVsLCBlbC5wbGFjZWhvbGRlciwgRW51bVRyYW5zbGF0ZVR5cGUucGxhY2Vob2xkZXIsIGNiKVxuXHR9XG5cblx0aWYgKGVsLnRhZ05hbWUgPT09ICdPUFRJT04nKVxuXHR7XG5cdFx0ZG9UcmFuc2xhdGUoZWwsIGVsLnRleHRDb250ZW50LCBFbnVtVHJhbnNsYXRlVHlwZS5vcHRpb24sIGNiKVxuXHR9XG5cblx0aWYgKGRlZXAgfHwgcmljaClcblx0e1xuXHRcdEFycmF5LmZyb20oZWwuY2hpbGROb2RlcykuZm9yRWFjaChub2RlID0+XG5cdFx0e1xuXHRcdFx0aWYgKG5vZGUubm9kZU5hbWUgPT09ICcjdGV4dCcpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChyaWNoKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZG9UcmFuc2xhdGUobm9kZSwgbm9kZS50ZXh0Q29udGVudCwgRW51bVRyYW5zbGF0ZVR5cGUudGV4dCwgY2IpXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoZGVlcClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGRvVHJhbnNsYXRlKG5vZGUsIG5vZGUudGV4dENvbnRlbnQsIEVudW1UcmFuc2xhdGVUeXBlLmVsZW1lbnQsIGNiKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChub2RlLmNoaWxkTm9kZXMubGVuZ3RoID4gMClcblx0XHRcdHtcblx0XHRcdFx0dHJhbnNsYXRlRWwobm9kZSwgeyBkZWVwLCByaWNoIH0pXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXHRlbHNlXG5cdHtcblx0XHRkb1RyYW5zbGF0ZShlbCwgZWwudGV4dENvbnRlbnQsIEVudW1UcmFuc2xhdGVUeXBlLmVsZW1lbnQsIGNiKVxuXHR9XG59XG5cbi8qKlxuICogVHJhbnNsYXRlIHBhZ2VcbiAqL1xuYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlUGFnZSgpXG57XG5cdGNvbnN0IGxhYmVsID0gJ3RyYW5zbGF0ZVBhZ2UnO1xuXHRsb2dnZXIuZGVidWcoYCR7bGFiZWx9OnN0YXJ0YCk7XG5cdGxvZ2dlci50aW1lKGAke2xhYmVsfTpkb25lYCk7XG5cdHF1ZXJ5U2VsZWN0b3JBbGwoW1xuXHRcdFwibGFiZWwgc3BhbiwgZmllbGRzZXQgc3BhbiwgYnV0dG9uXCIsIC8vIG1ham9yIGxhYmVsIGFuZCBidXR0b24gZGVzY3JpcHRpb24gdGV4dFxuXHRcdFwidGV4dGFyZWFbcGxhY2Vob2xkZXJdLCBzZWxlY3QsIG9wdGlvblwiLCAvLyB0ZXh0IGJveCBwbGFjZWhvbGRlciBhbmQgc2VsZWN0IGVsZW1lbnRcblx0XHRcIi50cmFuc2l0aW9uID4gZGl2ID4gc3Bhbjpub3QoW2NsYXNzXSlcIiwgXCIubGFiZWwtd3JhcCA+IHNwYW5cIiwgLy8gY29sbGFwc2UgcGFuZWwgYWRkZWQgYnkgZXh0ZW5zaW9uXG5cdFx0XCIuZ3JhZGlvLWltYWdlPmRpdi5mbG9hdFwiLCAvLyBpbWFnZSB1cGxvYWQgZGVzY3JpcHRpb25cblx0XHRcIi5ncmFkaW8tZmlsZT5kaXYuZmxvYXRcIiwgLy8gZmlsZSB1cGxvYWQgZGVzY3JpcHRpb25cblx0XHRcIi5ncmFkaW8tY29kZT5kaXYuZmxvYXRcIiwgLy8gY29kZSBlZGl0b3IgZGVzY3JpcHRpb25cblx0XHRcIiNtb2RlbG1lcmdlcl9pbnRlcnBfZGVzY3JpcHRpb24gLm91dHB1dC1odG1sXCIsIC8vIG1vZGVsIG1lcmdlciBkZXNjcmlwdGlvblxuXHRcdFwiI21vZGVsbWVyZ2VyX2ludGVycF9kZXNjcmlwdGlvbiAuZ3JhZGlvLWh0bWxcIiwgLy8gbW9kZWwgbWVyZ2VyIGRlc2NyaXB0aW9uXG5cdFx0XCIjbGlnaHRib3hNb2RhbCBzcGFuXCIgLy8gaW1hZ2UgcHJldmlldyBsaWdodGJveFxuXHRdKVxuXHRcdC5mb3JFYWNoKGVsID0+IHRyYW5zbGF0ZUVsKGVsLCB7IGRlZXA6IHRydWUgfSkpXG5cblx0cXVlcnlTZWxlY3RvckFsbChbXG5cdFx0J2RpdltkYXRhLXRlc3RpZD1cImltYWdlXCJdID4gZGl2ID4gZGl2JywgLy8gZGVzY3JpcHRpb24gb2YgaW1hZ2UgdXBsb2FkIHBhbmVsXG5cdFx0JyNleHRyYXNfaW1hZ2VfYmF0Y2ggPiBkaXYnLCAvLyAgZGVzY3JpcHRpb24gb2YgZXh0cmFzIGltYWdlIGJhdGNoIGZpbGUgdXBsb2FkIHBhbmVsXG5cdFx0XCIub3V0cHV0LWh0bWw6bm90KCNmb290ZXIpLCAuZ3JhZGlvLWh0bWw6bm90KCNmb290ZXIpLCAub3V0cHV0LW1hcmtkb3duLCAuZ3JhZGlvLW1hcmtkb3duXCIsIC8vIG91dHB1dCBodG1sIGV4Y2x1ZGUgZm9vdGVyXG5cdFx0JyNkeW5hbWljLXByb21wdGluZycgLy8gZHluYW1pYy1wcm9tcHRpbmcgZXh0ZW5zaW9uXG5cdF0pXG5cdFx0LmZvckVhY2goZWwgPT4gdHJhbnNsYXRlRWwoZWwsIHsgcmljaDogdHJ1ZSB9KSlcblxuXHRsb2dnZXIudGltZUVuZChgJHtsYWJlbH06ZG9uZWApXG59XG5cbmZ1bmN0aW9uIGRlbGVnYXRlRXZlbnQocGFyZW50OiBSZXR1cm5UeXBlPHR5cGVvZiBncmFkaW9BcHA+LCBldmVudFR5cGU6IHN0cmluZywgc2VsZWN0b3I6IHN0cmluZywgaGFuZGxlcjogKGV2dDogSUV2ZW50KSA9PiB2b2lkKVxue1xuXHRwYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGZ1bmN0aW9uIChldmVudClcblx0e1xuXHRcdGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSUV2ZW50W1widGFyZ2V0XCJdO1xuXG5cdFx0aWYgKHRhcmdldCA9IHRhcmdldC5jbG9zZXN0KHNlbGVjdG9yKSBhcyBhbnkgYXMgSUV2ZW50W1widGFyZ2V0XCJdKVxuXHRcdHtcblx0XHRcdGNvbnN0IGxhYmVsID0gJ2hhbmRsZURyb3Bkb3duOmV2ZW50Jztcblx0XHRcdGxvZ2dlci5kZWJ1ZyhgJHtsYWJlbH06c3RhcnRgLCBldmVudCk7XG5cdFx0XHRsb2dnZXIudGltZShgJHtsYWJlbH06ZG9uZWApO1xuXG5cdFx0XHRoYW5kbGVyLmNhbGwodGFyZ2V0LCBldmVudCBhcyBJRXZlbnQpO1xuXG5cdFx0XHRsb2dnZXIudGltZUVuZChgJHtsYWJlbH06ZG9uZWApXG5cdFx0fVxuXG4vL1x0XHR3aGlsZSAodGFyZ2V0ICE9PSBwYXJlbnQpXG4vL1x0XHR7XG4vL1x0XHRcdGlmICh0YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikpXG4vL1x0XHRcdHtcbi8vXHRcdFx0XHRoYW5kbGVyLmNhbGwodGFyZ2V0LCBldmVudCBhcyBJRXZlbnQpO1xuLy9cdFx0XHR9XG4vL1x0XHRcdHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuLy9cdFx0fVxuXG5cblx0fSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZURyb3Bkb3duKClcbntcblx0Y29uc3QgbGFiZWwgPSAnaGFuZGxlRHJvcGRvd24nO1xuXHRsb2dnZXIuZGVidWcoYCR7bGFiZWx9OmluaXRgKTtcblxuXHQvLyBwcm9jZXNzIGdyYWRpbyBkcm9wZG93biBtZW51XG5cdGRlbGVnYXRlRXZlbnQoX2dyYWRpb0FwcCgpLCAnbW91c2Vkb3duJywgJ3VsLm9wdGlvbnMgLml0ZW0nLCBmdW5jdGlvbiAoZXZlbnQpXG5cdHtcblx0XHRjb25zdCB7IHRhcmdldCB9ID0gZXZlbnRcblxuXHRcdGlmICghY2xhc3NMaXN0Q29udGFpbnModGFyZ2V0LCAnaXRlbScpKVxuXHRcdHtcblx0XHRcdGxldCBpdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJy5pdGVtJyk7XG5cblx0XHRcdGxvZ2dlci5kZWJ1ZyhsYWJlbCwgYHNpbXVsYXRlIGNsaWNrIG1lbnUgaXRlbWAsIHtcblx0XHRcdFx0ZXZlbnQsXG5cdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0aXRlbSxcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBzaW11bGF0ZSBjbGljayBtZW51IGl0ZW1cblx0XHRcdGl0ZW0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ21vdXNlZG93bicsIHsgYnViYmxlczogdHJ1ZSB9KSlcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGNvbnN0IHNvdXJjZSA9IHRhcmdldC5kYXRhc2V0Wyd2YWx1ZSddXG5cdFx0Y29uc3QgJGxhYmVsRWwgPSB0YXJnZXQ/LmNsb3Nlc3QoJy53cmFwJyk/LnF1ZXJ5U2VsZWN0b3I8RWxlbWVudD4oJy53cmFwLWlubmVyIC5zaW5nbGUtc2VsZWN0JykgLy8gdGhlIGxhYmVsIGVsZW1lbnRcblxuXHRcdGlmIChzb3VyY2UgJiYgJGxhYmVsRWwpXG5cdFx0e1xuXHRcdFx0Y29uc3QgdGl0bGUgPSB0aXRsZXM/Lltzb3VyY2VdO1xuXHRcdFx0aWYgKHRpdGxlPy5sZW5ndGggJiYgKCRsYWJlbEVsIGFzIGFueSkudGl0bGUgIT09IHRpdGxlKVxuXHRcdFx0e1xuXHRcdFx0XHQoJGxhYmVsRWwgYXMgYW55KS50aXRsZSA9IHRpdGxlXG5cdFx0XHRcdC8vIHNldCB0aXRsZSBmcm9tIGhpbnRzLmpzXG5cdFx0XHR9XG5cblx0XHRcdC8vJGxhYmVsRWwudGV4dENvbnRlbnQgPSBFbnVtQmlsaWd1YWxQbGFjZWhvbGRlci53aWxsX2JlX3JlcGxhY2VkIC8vIG1hcmtlZCBhcyB3aWxsIGJlIHJlcGxhY2VkXG5cdFx0XHRkb1RyYW5zbGF0ZSgkbGFiZWxFbCBhcyBhbnksIHNvdXJjZSwgRW51bVRyYW5zbGF0ZVR5cGUuZWxlbWVudCwgKC4uLmFyZ3YpID0+IHtcblx0XHRcdFx0RVNCVUlMRF9ERUJVRyAmJiBsb2dnZXIuZGVidWcobGFiZWwsICdkb1RyYW5zbGF0ZScsIGFyZ3YpXG5cdFx0XHR9KSAvLyB0cmFuc2xhdGUgdGhlIGxhYmVsIGVsZW1lbnRcblx0XHR9XG5cdH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsKClcbntcblx0cmV0dXJuIFByb21pc2UuYWxsU2V0dGxlZChbXG5cdFx0dHJhbnNsYXRlUGFnZSgpLFxuXHRcdGhhbmRsZURyb3Bkb3duKCksXG5cdF0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0T2JzZXJ2ZXIoKVxue1xuXHRjb25zdCBsYWJlbCA9ICdpbml0T2JzZXJ2ZXI6aW5pdCc7XG5cdGxvZ2dlci5kZWJ1ZyhgJHtsYWJlbH06c3RhcnRgKTtcblx0RVNCVUlMRF9ERUJVRyAmJiBsb2dnZXIudGltZShgJHtsYWJlbH06ZG9uZWApO1xuXG5cdGxldCBfY291bnQgPSAwXG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnM6IElNdXRhdGlvblJlY29yZFtdKSA9PlxuXHR7XG5cdFx0bGV0IF9ub2Rlc0NvdW50ID0gMCwgX25vdyA9IHBlcmZvcm1hbmNlLm5vdygpXG5cblx0XHRjb25zdCBhZGRDb3VudCA9ICgpID0+IF9ub2Rlc0NvdW50O1xuXG5cdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpXG5cdFx0e1xuXHRcdFx0aWYgKG11dGF0aW9uLnR5cGUgPT09ICdjaGFyYWN0ZXJEYXRhJylcblx0XHRcdHtcblx0XHRcdFx0Y29uc3QgcGFyZW50ID0gbXV0YXRpb24udGFyZ2V0Py5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50O1xuXHRcdFx0XHRpZiAocGFyZW50Py50YWdOYW1lID09PSAnTEFCRUwnKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dHJhbnNsYXRlRWwobXV0YXRpb24udGFyZ2V0LCB7XG5cdFx0XHRcdFx0XHRhZGRDb3VudCxcblx0XHRcdFx0XHRcdGNiKC4uLmFyZ3YpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGxvZ2dlci5kZWJ1ZyhsYWJlbCwgYHRyYW5zbGF0ZUVsYCwgJ2NoYXJhY3RlckRhdGEnLCBwYXJlbnQsIGFyZ3YpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycpXG5cdFx0XHR7XG5cdFx0XHRcdHRyYW5zbGF0ZUVsKG11dGF0aW9uLnRhcmdldCwge1xuXHRcdFx0XHRcdGFkZENvdW50LFxuXHRcdFx0XHRcdGNiKC4uLmFyZ3YpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0RVNCVUlMRF9ERUJVRyAmJiBsb2dnZXIuZGVidWcobGFiZWwsIGB0cmFuc2xhdGVFbGAsICdhdHRyaWJ1dGVzJywgYXJndik7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0bXV0YXRpb24uYWRkZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmIChpc0lnbm9yZVRyYW5zbGF0ZU5vZGUobm9kZSkpIHJldHVyblxuXG5cdFx0XHRcdFx0X25vZGVzQ291bnQrK1xuXHRcdFx0XHRcdGlmIChub2RlLm5vZGVUeXBlID09PSAxICYmIC8ob3V0cHV0fGdyYWRpbyktKGh0bWx8bWFya2Rvd24pLy50ZXN0KG5vZGUuY2xhc3NOYW1lKSlcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGVFbChub2RlLCB7XG5cdFx0XHRcdFx0XHRcdHJpY2g6IHRydWUsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAzKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRvVHJhbnNsYXRlKG5vZGUsIG5vZGUudGV4dENvbnRlbnQsIEVudW1UcmFuc2xhdGVUeXBlLnRleHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGVFbChub2RlLCB7XG5cdFx0XHRcdFx0XHRcdGRlZXA6IHRydWUsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoX25vZGVzQ291bnQgPiAwKVxuXHRcdHtcblx0XHRcdEVTQlVJTERfREVCVUcgJiYgbG9nZ2VyLmluZm8oYFVJIFVwZGF0ZSAjJHtfY291bnQrK306ICR7cGVyZm9ybWFuY2Uubm93KCkgLSBfbm93fSBtcywgJHtfbm9kZXNDb3VudH0gbm9kZXNgLCBtdXRhdGlvbnMpXG5cdFx0fVxuXHR9KVxuXG5cdG9ic2VydmVyLm9ic2VydmUoX2dyYWRpb0FwcCgpLCB7XG5cdFx0Y2hhcmFjdGVyRGF0YTogdHJ1ZSxcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZUZpbHRlcjogWyd0aXRsZScsICdwbGFjZWhvbGRlciddXG5cdH0pXG5cblx0RVNCVUlMRF9ERUJVRyAmJiBsb2dnZXIudGltZUVuZChgJHtsYWJlbH06ZG9uZWApO1xuXG5cdHJldHVybiBvYnNlcnZlclxufVxuIiwgImltcG9ydCB7IGNvbnNvbGVEZWJ1ZywgbG9nZ2VyLCBsb2dnZXJTaG93IH0gZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IHsgZ2V0Q29uZmlnLCBsb2FkTG9jYWxpemF0aW9uIH0gZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IGluaXRPYnNlcnZlciwgdHJhbnNsYXRlQWxsIH0gZnJvbSAnLi90cmFuc2xhdGUnO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IFAgZnJvbSAnY29yZS1qcy1wdXJlL2FjdHVhbC9wcm9taXNlJztcblxubG9nZ2VyU2hvdy5pbml0KCdCaWxpbmd1YWwnLCB0cnVlKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bigpXG57XG5cdC8vIEB0cy1pZ25vcmVcblx0YXdhaXQgaW1wb3J0KCcuL3N0eWxlLnNjc3MnKTtcblxuXHQvLyBkaXNhYmxlZCBpZiBvcmlnaW5hbCB0cmFuc2xhdGlvbiBlbmFibGVkXG5cdGlmICh3aW5kb3cubG9jYWxpemF0aW9uICYmIE9iamVjdC5rZXlzKHdpbmRvdy5sb2NhbGl6YXRpb24pLmxlbmd0aCkgcmV0dXJuO1xuXG5cdGNvbnN0IGNvbmZpZyA9IGdldENvbmZpZygpO1xuXG5cdGNvbnNvbGVEZWJ1ZygnY29uZmlnJywgY29uZmlnKTtcblxuXHRpZiAoIWNvbmZpZykgcmV0dXJuO1xuXG5cdGxvZ2dlci5pbml0KCdCaWxpbmd1YWwnLCBjb25maWcuZW5hYmxlTG9nZ2VyKTtcblxuXHRsZXQge1xuXHRcdGkxOG4sXG5cdH0gPSBhd2FpdCBsb2FkTG9jYWxpemF0aW9uKGNvbmZpZy5kaXJzLCBjb25maWcuZmlsZSk7XG5cblx0aWYgKGkxOG4pXG5cdHtcblx0XHRhd2FpdCB0cmFuc2xhdGVBbGwoKTtcblxuXHRcdGxldCB7IHByb21pc2UsIHJlc29sdmUgfSA9IChQIGFzIHR5cGVvZiBQcm9taXNlKS53aXRoUmVzb2x2ZXJzKCk7XG5cblx0XHRzZXRUaW1lb3V0KHJlc29sdmUsIDUwMDApO1xuXG5cdFx0YXdhaXQgcHJvbWlzZS50aGVuKGluaXRPYnNlcnZlcilcblx0fVxufVxuIiwgIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiLi4vZ2xvYmFsLmQudHNcIiBwcmVzZXJ2ZT1cInRydWVcIi8+XG5cbmltcG9ydCB7IHJ1biB9IGZyb20gJy4vbWFpbidcbmltcG9ydCBQIGZyb20gJ2NvcmUtanMtcHVyZS9hY3R1YWwvcHJvbWlzZSc7XG5pbXBvcnQgeyBjb25zb2xlRXJyb3IsIGNvbnNvbGVJbmZvLCBsb2dnZXIsIGNvbnNvbGVEZWJ1ZyB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IGV4aXN0c1dlYnVpT3B0cywgZ2V0V2VidWlPcHRzIH0gZnJvbSAnLi9kb20nO1xuXG4oYXN5bmMgKCkgPT5cbntcblx0bGV0IGxvYWRlZDogYm9vbGVhbjtcblxuXHRjb25zdCBsYWJlbCA9ICdCaWxpbmd1YWwnO1xuXG5cdGxvZ2dlci5pbml0KCdCaWxpbmd1YWwnKTtcblxuXHRjb25zb2xlRGVidWcoYCR7bGFiZWx9OmluaXRgKTtcblx0RVNCVUlMRF9ERUJVRyAmJiBjb25zb2xlRGVidWcoYCR7bGFiZWx9OmRlYnVnIG1vZGUgZW5hYmxlZGApO1xuXHRsb2dnZXIudGltZShgJHtsYWJlbH06ZG9uZWApO1xuXG5cdGZ1bmN0aW9uIHJlbW92ZUNhbGxiYWNrKGNhbGxiYWNrczogRnVuY3Rpb25bXSwgY2I6IEZ1bmN0aW9uKVxuXHR7XG5cdFx0bGV0IGlkeDogbnVtYmVyO1xuXHRcdGRvXG5cdFx0e1xuXHRcdFx0aWR4ID0gY2FsbGJhY2tzLmZpbmRJbmRleCh2ID0+IHYgPT09IGNiKTtcblxuXHRcdFx0aWYgKGlkeCAhPT0gLTEpXG5cdFx0XHR7XG5cdFx0XHRcdGNhbGxiYWNrcy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdH1cblxuXHRcdH1cblx0XHR3aGlsZSAoaWR4ICE9PSAtMSlcblx0fVxuXG5cdGZ1bmN0aW9uIG9uRE9NQ29udGVudExvYWRlZChsaXN0ZW5lcjogRnVuY3Rpb24pXG5cdHtcblx0XHRsb2dnZXIuZGVidWcoYGRvY3VtZW50LnJlYWR5U3RhdGVgLCBkb2N1bWVudC5yZWFkeVN0YXRlKTtcblx0XHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKVxuXHRcdHtcblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdGxpc3RlbmVyKCk7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBsaXN0ZW5lcik7XG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgZnVuY3Rpb24gb25BZnRlclVpTG9hZGVkT25jZShmbjogRnVuY3Rpb24pXG5cdHtcblx0XHRsZXQgeyBwcm9taXNlLCByZXNvbHZlLCByZWplY3QgfSA9IChQIGFzIHR5cGVvZiBQcm9taXNlKS53aXRoUmVzb2x2ZXJzKCk7XG5cdFx0bGV0IHRpbWVyczogKG51bWJlciB8IE5vZGVKUy5UaW1lb3V0KVtdID0gW107XG5cblx0XHRwcm9taXNlXG5cdFx0XHQuY2F0Y2goZSA9PiB7XG5cdFx0XHRcdGxvYWRlZCB8fD0gZXhpc3RzV2VidWlPcHRzKCk7XG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlKVxuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+XG5cdFx0XHR7XG5cdFx0XHRcdGxvYWRlZCB8fD0gZXhpc3RzV2VidWlPcHRzKCk7XG5cdFx0XHR9KVxuXHRcdDtcblxuXHRcdGxldCBkZWxheSA9IDEwMDAwO1xuXG5cdFx0bGV0IGlzV2VidWkgPSB0eXBlb2Ygb25PcHRpb25zQ2hhbmdlZCAhPT0gJ3VuZGVmaW5lZCc7XG5cblx0XHRpZiAoaXNXZWJ1aSlcblx0XHR7XG5cdFx0XHRvbk9wdGlvbnNDaGFuZ2VkKHJlc29sdmUpO1xuXG5cdFx0XHRwcm9taXNlID0gcHJvbWlzZVxuXHRcdFx0XHQudGhlbigoKSA9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBvcHRpb25zQ2hhbmdlZENhbGxiYWNrcyAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cmVtb3ZlQ2FsbGJhY2sob3B0aW9uc0NoYW5nZWRDYWxsYmFja3MsIHJlc29sdmUpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0O1xuXG5cdFx0XHRsb2FkZWQgfHw9IGV4aXN0c1dlYnVpT3B0cygpXG5cblx0XHRcdGlmIChsb2FkZWQpXG5cdFx0XHR7XG5cdFx0XHRcdGRlbGF5ID0gMDtcblxuXHRcdFx0XHRvbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4gdGltZXJzLnB1c2goc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSkpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHRvbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4gdGltZXJzLnB1c2goc2V0VGltZW91dChyZWplY3QsIDMwMDAwKSkpXG5cdFx0fVxuXG5cdFx0bGV0IHRpbWVyMSA9IGRlbGF5ICYmIHNldEludGVydmFsKGFzeW5jICgpID0+XG5cdFx0e1xuXHRcdFx0bG9hZGVkIHx8PSBleGlzdHNXZWJ1aU9wdHMoKTtcblxuXHRcdFx0aWYgKGxvYWRlZClcblx0XHRcdHtcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9XG5cdFx0fSwgZGVsYXkpO1xuXG5cdFx0YXdhaXQgcHJvbWlzZVxuXHRcdFx0LmNhdGNoKGUgPT4gY29uc29sZUVycm9yKGBvbkFmdGVyVWlMb2FkZWRPbmNlOnJlamVjdGAsIHtcblx0XHRcdFx0bG9hZGVkLFxuXHRcdFx0XHRmbixcblx0XHRcdFx0cmVzb2x2ZSxcblx0XHRcdFx0cHJvbWlzZSxcblx0XHRcdH0sIGUpKVxuXHRcdFx0LnRoZW4oKCkgPT5cblx0XHRcdHtcblx0XHRcdFx0dHJ5XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHRpbWVyMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2F0Y2ggKGUpXG5cdFx0XHRcdHt9XG5cblx0XHRcdFx0Zm9yIChsZXQgdGkgb2YgdGltZXJzKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dHJ5XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXRjaCAoZSlcblx0XHRcdFx0XHR7fVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdDtcblxuXHRcdChsb2FkZWQgPyBjb25zb2xlSW5mbyA6IGNvbnNvbGVFcnJvcikoYG9uQWZ0ZXJVaUxvYWRlZE9uY2U6ZXhlY3V0ZUNhbGxiYWNrc2AsIHtcblx0XHRcdGxvYWRlZCxcblx0XHRcdGZuLFxuXHRcdFx0b3B0czogZ2V0V2VidWlPcHRzKCksXG5cdFx0fSk7XG5cblx0XHRpZiAobG9hZGVkKVxuXHRcdHtcblx0XHRcdGF3YWl0IGZuKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuXG5cdH1cblxuXHRhd2FpdCBvbkFmdGVyVWlMb2FkZWRPbmNlKHJ1bik7XG5cblx0bG9nZ2VyLnRpbWVFbmQoYCR7bGFiZWx9OmRvbmVgKVxufSkoKTtcblxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBLFVBQUksUUFBUSxTQUFVLElBQUk7QUFDeEIsZUFBTyxNQUFNLEdBQUcsU0FBUyxRQUFRO0FBQUEsTUFDbkM7QUFHQSxhQUFPO0FBQUEsTUFFTCxNQUFNLE9BQU8sY0FBYyxZQUFZLFVBQVUsS0FDakQsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNO0FBQUEsTUFFekMsTUFBTSxPQUFPLFFBQVEsWUFBWSxJQUFJLEtBQ3JDLE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTSxLQUN6QyxNQUFNLE9BQU8sV0FBUSxZQUFZLE9BQUk7QUFBQSxNQUVwQyw0QkFBWTtBQUFFLGVBQU87QUFBQSxNQUFNLEdBQUcsS0FBSyxTQUFTLGFBQWEsRUFBRTtBQUFBO0FBQUE7OztBQ2Y5RDtBQUFBO0FBQUE7QUFDQSxhQUFPLFVBQVUsU0FBVSxNQUFNO0FBQy9CLFlBQUk7QUFDRixpQkFBTyxDQUFDLENBQUMsS0FBSztBQUFBLFFBQ2hCLFFBQWdCO0FBQ2QsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBO0FBQUE7OztBQ1BBO0FBQUE7QUFBQTtBQUNBLFVBQUksUUFBUTtBQUVaLGFBQU8sVUFBVSxDQUFDLE1BQU0sV0FBWTtBQUVsQyxZQUFJLE9BQU8sV0FBWTtBQUFBLFFBQWMsRUFBRSxLQUFLO0FBRTVDLGVBQU8sT0FBTyxRQUFRLGNBQWMsS0FBSyxlQUFlLFdBQVc7QUFBQSxNQUNyRSxDQUFDO0FBQUE7QUFBQTs7O0FDUkQ7QUFBQTtBQUFBO0FBQ0EsVUFBSSxjQUFjLGdDQUVkLG9CQUFvQixTQUFTLFdBQzdCLFFBQVEsa0JBQWtCLE9BQzFCLE9BQU8sa0JBQWtCO0FBRzdCLGFBQU8sVUFBVSxPQUFPLFdBQVcsWUFBWSxRQUFRLFVBQVUsY0FBYyxLQUFLLEtBQUssS0FBSyxJQUFJLFdBQVk7QUFDNUcsZUFBTyxLQUFLLE1BQU0sT0FBTyxTQUFTO0FBQUEsTUFDcEM7QUFBQTtBQUFBOzs7QUNWQTtBQUFBO0FBQUE7QUFDQSxVQUFJLGNBQWMsZ0NBRWQsb0JBQW9CLFNBQVMsV0FDN0IsT0FBTyxrQkFBa0IsTUFFekIsc0JBQXNCLGVBQWUsa0JBQWtCLEtBQUssS0FBSyxNQUFNLElBQUk7QUFFL0UsYUFBTyxVQUFVLGNBQWMsc0JBQXNCLFNBQVUsSUFBSTtBQUNqRSxlQUFPLFdBQVk7QUFDakIsaUJBQU8sS0FBSyxNQUFNLElBQUksU0FBUztBQUFBLFFBQ2pDO0FBQUEsTUFDRjtBQUFBO0FBQUE7OztBQ1pBO0FBQUE7QUFBQTtBQUNBLFVBQUksY0FBYyxpQ0FFZCxXQUFXLFlBQVksQ0FBQyxFQUFFLFFBQVEsR0FDbEMsY0FBYyxZQUFZLEdBQUcsS0FBSztBQUV0QyxhQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLGVBQU8sWUFBWSxTQUFTLEVBQUUsR0FBRyxHQUFHLEVBQUU7QUFBQSxNQUN4QztBQUFBO0FBQUE7OztBQ1JBO0FBQUE7QUFBQTtBQUNBLFVBQUksYUFBYSx1QkFDYixjQUFjO0FBRWxCLGFBQU8sVUFBVSxTQUFVLElBQUk7QUFJN0IsWUFBSSxXQUFXLEVBQUUsTUFBTSxXQUFZLFFBQU8sWUFBWSxFQUFFO0FBQUEsTUFDMUQ7QUFBQTtBQUFBOzs7QUNUQTtBQUFBO0FBQUE7QUFFQSxVQUFJLGNBQWMsT0FBTyxZQUFZLFlBQVksU0FBUztBQUsxRCxhQUFPLFVBQVUsT0FBTyxjQUFlLE9BQWUsZ0JBQWdCLFNBQVksU0FBVSxVQUFVO0FBQ3BHLGVBQU8sT0FBTyxZQUFZLGNBQWMsYUFBYTtBQUFBLE1BQ3ZELElBQUksU0FBVSxVQUFVO0FBQ3RCLGVBQU8sT0FBTyxZQUFZO0FBQUEsTUFDNUI7QUFBQTtBQUFBOzs7QUNYQTtBQUFBO0FBQUE7QUFDQSxVQUFJLFFBQVE7QUFHWixhQUFPLFVBQVUsQ0FBQyxNQUFNLFdBQVk7QUFFbEMsZUFBTyxPQUFPLGVBQWUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLFdBQVk7QUFBRSxpQkFBTztBQUFBLFFBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNO0FBQUEsTUFDakYsQ0FBQztBQUFBO0FBQUE7OztBQ1BEO0FBQUE7QUFBQTtBQUNBLFVBQUksY0FBYyxnQ0FFZCxPQUFPLFNBQVMsVUFBVTtBQUU5QixhQUFPLFVBQVUsY0FBYyxLQUFLLEtBQUssSUFBSSxJQUFJLFdBQVk7QUFDM0QsZUFBTyxLQUFLLE1BQU0sTUFBTSxTQUFTO0FBQUEsTUFDbkM7QUFBQTtBQUFBOzs7QUNQQTtBQUFBO0FBQUE7QUFDQSxVQUFJLHdCQUF3QixDQUFDLEVBQUUsc0JBRTNCLDJCQUEyQixPQUFPLDBCQUdsQyxjQUFjLDRCQUE0QixDQUFDLHNCQUFzQixLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztBQUlyRixjQUFRLElBQUksY0FBYyxTQUE4QixHQUFHO0FBQ3pELFlBQUksYUFBYSx5QkFBeUIsTUFBTSxDQUFDO0FBQ2pELGVBQU8sQ0FBQyxDQUFDLGNBQWMsV0FBVztBQUFBLE1BQ3BDLElBQUk7QUFBQTtBQUFBOzs7QUNiSjtBQUFBO0FBQUE7QUFDQSxhQUFPLFVBQVUsU0FBVSxRQUFRLE9BQU87QUFDeEMsZUFBTztBQUFBLFVBQ0wsWUFBWSxFQUFFLFNBQVM7QUFBQSxVQUN2QixjQUFjLEVBQUUsU0FBUztBQUFBLFVBQ3pCLFVBQVUsRUFBRSxTQUFTO0FBQUEsVUFDckI7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBO0FBQUE7OztBQ1JBO0FBQUE7QUFBQTtBQUNBLFVBQUksY0FBYyxpQ0FDZCxRQUFRLGlCQUNSLFVBQVUsdUJBRVYsVUFBVSxRQUNWLFFBQVEsWUFBWSxHQUFHLEtBQUs7QUFHaEMsYUFBTyxVQUFVLE1BQU0sV0FBWTtBQUdqQyxlQUFPLENBQUMsUUFBUSxHQUFHLEVBQUUscUJBQXFCLENBQUM7QUFBQSxNQUM3QyxDQUFDLElBQUksU0FBVSxJQUFJO0FBQ2pCLGVBQU8sUUFBUSxFQUFFLE1BQU0sV0FBVyxNQUFNLElBQUksRUFBRSxJQUFJLFFBQVEsRUFBRTtBQUFBLE1BQzlELElBQUk7QUFBQTtBQUFBOzs7QUNmSjtBQUFBO0FBQUE7QUFHQSxhQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLGVBQU8sTUFBTztBQUFBLE1BQ2hCO0FBQUE7QUFBQTs7O0FDTEE7QUFBQTtBQUFBO0FBQ0EsVUFBSSxvQkFBb0IsZ0NBRXBCLGFBQWE7QUFJakIsYUFBTyxVQUFVLFNBQVUsSUFBSTtBQUM3QixZQUFJLGtCQUFrQixFQUFFLEVBQUcsT0FBTSxJQUFJLFdBQVcsMEJBQTBCLEVBQUU7QUFDNUUsZUFBTztBQUFBLE1BQ1Q7QUFBQTtBQUFBOzs7QUNWQTtBQUFBO0FBQUE7QUFFQSxVQUFJLGdCQUFnQiwwQkFDaEIseUJBQXlCO0FBRTdCLGFBQU8sVUFBVSxTQUFVLElBQUk7QUFDN0IsZUFBTyxjQUFjLHVCQUF1QixFQUFFLENBQUM7QUFBQSxNQUNqRDtBQUFBO0FBQUE7OztBQ1BBO0FBQUE7QUFBQTtBQUNBLFVBQUksYUFBYTtBQUVqQixhQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLGVBQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFdBQVcsRUFBRTtBQUFBLE1BQzVEO0FBQUE7QUFBQTs7O0FDTEE7QUFBQTtBQUFBO0FBQ0EsYUFBTyxVQUFVLENBQUM7QUFBQTtBQUFBOzs7QUNEbEI7QUFBQTtBQUFBO0FBQ0EsVUFBSSxPQUFPLGdCQUNQQSxjQUFhLHVCQUNiLGFBQWEsdUJBRWIsWUFBWSxTQUFVLFVBQVU7QUFDbEMsZUFBTyxXQUFXLFFBQVEsSUFBSSxXQUFXO0FBQUEsTUFDM0M7QUFFQSxhQUFPLFVBQVUsU0FBVSxXQUFXLFFBQVE7QUFDNUMsZUFBTyxVQUFVLFNBQVMsSUFBSSxVQUFVLEtBQUssU0FBUyxDQUFDLEtBQUssVUFBVUEsWUFBVyxTQUFTLENBQUMsSUFDdkYsS0FBSyxTQUFTLEtBQUssS0FBSyxTQUFTLEVBQUUsTUFBTSxLQUFLQSxZQUFXLFNBQVMsS0FBS0EsWUFBVyxTQUFTLEVBQUUsTUFBTTtBQUFBLE1BQ3pHO0FBQUE7QUFBQTs7O0FDWkE7QUFBQTtBQUFBO0FBQ0EsVUFBSSxjQUFjO0FBRWxCLGFBQU8sVUFBVSxZQUFZLENBQUMsRUFBRSxhQUFhO0FBQUE7QUFBQTs7O0FDSDdDO0FBQUE7QUFBQTtBQUNBLFVBQUlDLGNBQWEsdUJBRWIsWUFBWUEsWUFBVyxXQUN2QixZQUFZLGFBQWEsVUFBVTtBQUV2QyxhQUFPLFVBQVUsWUFBWSxPQUFPLFNBQVMsSUFBSTtBQUFBO0FBQUE7OztBQ05qRDtBQUFBO0FBQUE7QUFDQSxVQUFJQyxjQUFhLHVCQUNiLFlBQVksa0NBRVosVUFBVUEsWUFBVyxTQUNyQkMsUUFBT0QsWUFBVyxNQUNsQixXQUFXLFdBQVcsUUFBUSxZQUFZQyxTQUFRQSxNQUFLLFNBQ3ZELEtBQUssWUFBWSxTQUFTLElBQzFCLE9BQU87QUFFWCxNQUFJLE9BQ0YsUUFBUSxHQUFHLE1BQU0sR0FBRyxHQUdwQixVQUFVLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDO0FBS25FLE1BQUksQ0FBQyxXQUFXLGNBQ2QsUUFBUSxVQUFVLE1BQU0sYUFBYSxJQUNqQyxDQUFDLFNBQVMsTUFBTSxDQUFDLEtBQUssUUFDeEIsUUFBUSxVQUFVLE1BQU0sZUFBZSxHQUNuQyxVQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUM7QUFJakMsYUFBTyxVQUFVO0FBQUE7QUFBQTs7O0FDM0JqQjtBQUFBO0FBQUE7QUFFQSxVQUFJLGFBQWEsa0NBQ2IsUUFBUSxpQkFDUkMsY0FBYSx1QkFFYixVQUFVQSxZQUFXO0FBR3pCLGFBQU8sVUFBVSxDQUFDLENBQUMsT0FBTyx5QkFBeUIsQ0FBQyxNQUFNLFdBQVk7QUFDcEUsWUFBSSxTQUFTLHVCQUFPLGtCQUFrQjtBQUt0QyxlQUFPLENBQUMsUUFBUSxNQUFNLEtBQUssRUFBRSxPQUFPLE1BQU0sYUFBYTtBQUFBLFFBRXJELENBQUMsT0FBTyxRQUFRLGNBQWMsYUFBYTtBQUFBLE1BQy9DLENBQUM7QUFBQTtBQUFBOzs7QUNsQkQ7QUFBQTtBQUFBO0FBRUEsVUFBSSxnQkFBZ0I7QUFFcEIsYUFBTyxVQUFVLGlCQUNmLENBQUMsT0FBTyxRQUNSLE9BQU8sT0FBTyxZQUFZO0FBQUE7QUFBQTs7O0FDTjVCO0FBQUE7QUFBQTtBQUNBLFVBQUksYUFBYSx3QkFDYixhQUFhLHVCQUNiLGdCQUFnQixrQ0FDaEIsb0JBQW9CLDZCQUVwQixVQUFVO0FBRWQsYUFBTyxVQUFVLG9CQUFvQixTQUFVLElBQUk7QUFDakQsZUFBTyxPQUFPLE1BQU07QUFBQSxNQUN0QixJQUFJLFNBQVUsSUFBSTtBQUNoQixZQUFJLFVBQVUsV0FBVyxRQUFRO0FBQ2pDLGVBQU8sV0FBVyxPQUFPLEtBQUssY0FBYyxRQUFRLFdBQVcsUUFBUSxFQUFFLENBQUM7QUFBQSxNQUM1RTtBQUFBO0FBQUE7OztBQ2JBO0FBQUE7QUFBQTtBQUNBLFVBQUksVUFBVTtBQUVkLGFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsWUFBSTtBQUNGLGlCQUFPLFFBQVEsUUFBUTtBQUFBLFFBQ3pCLFFBQWdCO0FBQ2QsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBO0FBQUE7OztBQ1RBO0FBQUE7QUFBQTtBQUNBLFVBQUksYUFBYSx1QkFDYixjQUFjLHlCQUVkLGFBQWE7QUFHakIsYUFBTyxVQUFVLFNBQVUsVUFBVTtBQUNuQyxZQUFJLFdBQVcsUUFBUSxFQUFHLFFBQU87QUFDakMsY0FBTSxJQUFJLFdBQVcsWUFBWSxRQUFRLElBQUksb0JBQW9CO0FBQUEsTUFDbkU7QUFBQTtBQUFBOzs7QUNWQTtBQUFBO0FBQUE7QUFDQSxVQUFJLFlBQVksc0JBQ1osb0JBQW9CO0FBSXhCLGFBQU8sVUFBVSxTQUFVLEdBQUdDLElBQUc7QUFDL0IsWUFBSSxPQUFPLEVBQUVBLEVBQUM7QUFDZCxlQUFPLGtCQUFrQixJQUFJLElBQUksU0FBWSxVQUFVLElBQUk7QUFBQSxNQUM3RDtBQUFBO0FBQUE7OztBQ1RBO0FBQUE7QUFBQTtBQUNBLFVBQUksT0FBTyx5QkFDUCxhQUFhLHVCQUNiLFdBQVcscUJBRVgsYUFBYTtBQUlqQixhQUFPLFVBQVUsU0FBVSxPQUFPLE1BQU07QUFDdEMsWUFBSSxJQUFJO0FBR1IsWUFGSSxTQUFTLFlBQVksV0FBVyxLQUFLLE1BQU0sUUFBUSxLQUFLLENBQUMsU0FBUyxNQUFNLEtBQUssSUFBSSxLQUFLLENBQUMsS0FDdkYsV0FBVyxLQUFLLE1BQU0sT0FBTyxLQUFLLENBQUMsU0FBUyxNQUFNLEtBQUssSUFBSSxLQUFLLENBQUMsS0FDakUsU0FBUyxZQUFZLFdBQVcsS0FBSyxNQUFNLFFBQVEsS0FBSyxDQUFDLFNBQVMsTUFBTSxLQUFLLElBQUksS0FBSyxDQUFDLEVBQUcsUUFBTztBQUNyRyxjQUFNLElBQUksV0FBVyx5Q0FBeUM7QUFBQSxNQUNoRTtBQUFBO0FBQUE7OztBQ2ZBO0FBQUE7QUFBQTtBQUNBLGFBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ0RqQjtBQUFBO0FBQUE7QUFDQSxVQUFJQyxjQUFhLHVCQUdiLGlCQUFpQixPQUFPO0FBRTVCLGFBQU8sVUFBVSxTQUFVLEtBQUssT0FBTztBQUNyQyxZQUFJO0FBQ0YseUJBQWVBLGFBQVksS0FBSyxFQUFFLE9BQWMsY0FBYyxJQUFNLFVBQVUsR0FBSyxDQUFDO0FBQUEsUUFDdEYsUUFBZ0I7QUFDZCxVQUFBQSxZQUFXLEdBQUcsSUFBSTtBQUFBLFFBQ3BCO0FBQUUsZUFBTztBQUFBLE1BQ1g7QUFBQTtBQUFBOzs7QUNaQTtBQUFBO0FBQUE7QUFDQSxVQUFJLFVBQVUsbUJBQ1ZDLGNBQWEsdUJBQ2IsdUJBQXVCLGtDQUV2QixTQUFTLHNCQUNULFFBQVEsT0FBTyxVQUFVQSxZQUFXLE1BQU0sS0FBSyxxQkFBcUIsUUFBUSxDQUFDLENBQUM7QUFFbEYsT0FBQyxNQUFNLGFBQWEsTUFBTSxXQUFXLENBQUMsSUFBSSxLQUFLO0FBQUEsUUFDN0MsU0FBUztBQUFBLFFBQ1QsTUFBTSxVQUFVLFNBQVM7QUFBQSxRQUN6QixXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsTUFDVixDQUFDO0FBQUE7QUFBQTs7O0FDZEQ7QUFBQTtBQUFBO0FBQ0EsVUFBSSxRQUFRLHdCQUVSLFNBQVMsT0FBTyxVQUFVO0FBRTlCLGFBQU8sVUFBVSxTQUFVLEtBQUssT0FBTztBQUNyQyxlQUFPLE1BQU0sR0FBRyxNQUFNLE1BQU0sR0FBRyxJQUFJLFNBQVMsT0FBTyxJQUFJO0FBQUEsTUFDekQ7QUFBQTtBQUFBOzs7QUNQQTtBQUFBO0FBQUE7QUFDQSxVQUFJLHlCQUF5QixvQ0FFekIsVUFBVTtBQUlkLGFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsZUFBTyxRQUFRLHVCQUF1QixRQUFRLENBQUM7QUFBQSxNQUNqRDtBQUFBO0FBQUE7OztBQ1RBO0FBQUE7QUFBQTtBQUNBLFVBQUksY0FBYyxpQ0FDZCxXQUFXLHFCQUVYLGlCQUFpQixZQUFZLENBQUMsRUFBRSxjQUFjO0FBS2xELGFBQU8sVUFBVSxPQUFPLFVBQVUsU0FBZ0IsSUFBSSxLQUFLO0FBQ3pELGVBQU8sZUFBZSxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQUEsTUFDekM7QUFBQTtBQUFBOzs7QUNYQTtBQUFBO0FBQUE7QUFDQSxVQUFJLGNBQWMsaUNBRWQsS0FBSyxHQUNMLFVBQVUsS0FBSyxPQUFPLEdBQ3RCLFdBQVcsWUFBWSxJQUFJLFFBQVE7QUFFdkMsYUFBTyxVQUFVLFNBQVUsS0FBSztBQUM5QixlQUFPLGFBQWEsUUFBUSxTQUFZLEtBQUssT0FBTyxPQUFPLFNBQVMsRUFBRSxLQUFLLFNBQVMsRUFBRTtBQUFBLE1BQ3hGO0FBQUE7QUFBQTs7O0FDVEE7QUFBQTtBQUFBO0FBQ0EsVUFBSUMsY0FBYSx1QkFDYixTQUFTLGtCQUNULFNBQVMsNEJBQ1QsTUFBTSxlQUNOLGdCQUFnQix3Q0FDaEIsb0JBQW9CLDZCQUVwQkMsVUFBU0QsWUFBVyxRQUNwQix3QkFBd0IsT0FBTyxLQUFLLEdBQ3BDLHdCQUF3QixvQkFBb0JDLFFBQU8sT0FBVUEsVUFBU0EsV0FBVUEsUUFBTyxpQkFBaUI7QUFFNUcsYUFBTyxVQUFVLFNBQVUsTUFBTTtBQUMvQixlQUFLLE9BQU8sdUJBQXVCLElBQUksTUFDckMsc0JBQXNCLElBQUksSUFBSSxpQkFBaUIsT0FBT0EsU0FBUSxJQUFJLElBQzlEQSxRQUFPLElBQUksSUFDWCxzQkFBc0IsWUFBWSxJQUFJLElBQ25DLHNCQUFzQixJQUFJO0FBQUEsTUFDckM7QUFBQTtBQUFBOzs7QUNsQkE7QUFBQTtBQUFBO0FBQ0EsVUFBSSxPQUFPLHlCQUNQLFdBQVcscUJBQ1gsV0FBVyxxQkFDWCxZQUFZLHNCQUNaLHNCQUFzQixpQ0FDdEIsa0JBQWtCLDZCQUVsQixhQUFhLFdBQ2IsZUFBZSxnQkFBZ0IsYUFBYTtBQUloRCxhQUFPLFVBQVUsU0FBVSxPQUFPLE1BQU07QUFDdEMsWUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLFNBQVMsS0FBSyxFQUFHLFFBQU87QUFDaEQsWUFBSSxlQUFlLFVBQVUsT0FBTyxZQUFZLEdBQzVDO0FBQ0osWUFBSSxjQUFjO0FBR2hCLGNBRkksU0FBUyxXQUFXLE9BQU8sWUFDL0IsU0FBUyxLQUFLLGNBQWMsT0FBTyxJQUFJLEdBQ25DLENBQUMsU0FBUyxNQUFNLEtBQUssU0FBUyxNQUFNLEVBQUcsUUFBTztBQUNsRCxnQkFBTSxJQUFJLFdBQVcseUNBQXlDO0FBQUEsUUFDaEU7QUFDQSxlQUFJLFNBQVMsV0FBVyxPQUFPLFdBQ3hCLG9CQUFvQixPQUFPLElBQUk7QUFBQSxNQUN4QztBQUFBO0FBQUE7OztBQ3pCQTtBQUFBO0FBQUE7QUFDQSxVQUFJLGNBQWMsd0JBQ2QsV0FBVztBQUlmLGFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsWUFBSSxNQUFNLFlBQVksVUFBVSxRQUFRO0FBQ3hDLGVBQU8sU0FBUyxHQUFHLElBQUksTUFBTSxNQUFNO0FBQUEsTUFDckM7QUFBQTtBQUFBOzs7QUNUQTtBQUFBO0FBQUE7QUFDQSxVQUFJQyxjQUFhLHVCQUNiLFdBQVcscUJBRVhDLFlBQVdELFlBQVcsVUFFdEIsU0FBUyxTQUFTQyxTQUFRLEtBQUssU0FBU0EsVUFBUyxhQUFhO0FBRWxFLGFBQU8sVUFBVSxTQUFVLElBQUk7QUFDN0IsZUFBTyxTQUFTQSxVQUFTLGNBQWMsRUFBRSxJQUFJLENBQUM7QUFBQSxNQUNoRDtBQUFBO0FBQUE7OztBQ1ZBO0FBQUE7QUFBQTtBQUNBLFVBQUksY0FBYyx1QkFDZCxRQUFRLGlCQUNSLGdCQUFnQjtBQUdwQixhQUFPLFVBQVUsQ0FBQyxlQUFlLENBQUMsTUFBTSxXQUFZO0FBRWxELGVBQU8sT0FBTyxlQUFlLGNBQWMsS0FBSyxHQUFHLEtBQUs7QUFBQSxVQUN0RCxLQUFLLFdBQVk7QUFBRSxtQkFBTztBQUFBLFVBQUc7QUFBQSxRQUMvQixDQUFDLEVBQUUsTUFBTTtBQUFBLE1BQ1gsQ0FBQztBQUFBO0FBQUE7OztBQ1hEO0FBQUE7QUFBQTtBQUNBLFVBQUksY0FBYyx1QkFDZCxPQUFPLHlCQUNQLDZCQUE2Qix5Q0FDN0IsMkJBQTJCLHNDQUMzQixrQkFBa0IsNkJBQ2xCLGdCQUFnQiwyQkFDaEIsU0FBUyw0QkFDVCxpQkFBaUIsMEJBR2pCLDRCQUE0QixPQUFPO0FBSXZDLGNBQVEsSUFBSSxjQUFjLDRCQUE0QixTQUFrQyxHQUFHQyxJQUFHO0FBRzVGLFlBRkEsSUFBSSxnQkFBZ0IsQ0FBQyxHQUNyQkEsS0FBSSxjQUFjQSxFQUFDLEdBQ2YsZUFBZ0IsS0FBSTtBQUN0QixpQkFBTywwQkFBMEIsR0FBR0EsRUFBQztBQUFBLFFBQ3ZDLFFBQWdCO0FBQUEsUUFBYztBQUM5QixZQUFJLE9BQU8sR0FBR0EsRUFBQyxFQUFHLFFBQU8seUJBQXlCLENBQUMsS0FBSywyQkFBMkIsR0FBRyxHQUFHQSxFQUFDLEdBQUcsRUFBRUEsRUFBQyxDQUFDO0FBQUEsTUFDbkc7QUFBQTtBQUFBOzs7QUN0QkE7QUFBQTtBQUFBO0FBQ0EsVUFBSSxRQUFRLGlCQUNSLGFBQWEsdUJBRWIsY0FBYyxtQkFFZCxXQUFXLFNBQVUsU0FBUyxXQUFXO0FBQzNDLFlBQUksUUFBUSxLQUFLLFVBQVUsT0FBTyxDQUFDO0FBQ25DLGVBQU8sVUFBVSxXQUFXLEtBQ3hCLFVBQVUsU0FBUyxLQUNuQixXQUFXLFNBQVMsSUFBSSxNQUFNLFNBQVMsSUFDdkMsQ0FBQyxDQUFDO0FBQUEsTUFDUixHQUVJLFlBQVksU0FBUyxZQUFZLFNBQVUsUUFBUTtBQUNyRCxlQUFPLE9BQU8sTUFBTSxFQUFFLFFBQVEsYUFBYSxHQUFHLEVBQUUsWUFBWTtBQUFBLE1BQzlELEdBRUksT0FBTyxTQUFTLE9BQU8sQ0FBQyxHQUN4QixTQUFTLFNBQVMsU0FBUyxLQUMzQixXQUFXLFNBQVMsV0FBVztBQUVuQyxhQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUN0QmpCO0FBQUE7QUFBQTtBQUNBLFVBQUksY0FBYyx3Q0FDZCxZQUFZLHNCQUNaLGNBQWMsZ0NBRWQsT0FBTyxZQUFZLFlBQVksSUFBSTtBQUd2QyxhQUFPLFVBQVUsU0FBVSxJQUFJLE1BQU07QUFDbkMseUJBQVUsRUFBRSxHQUNMLFNBQVMsU0FBWSxLQUFLLGNBQWMsS0FBSyxJQUFJLElBQUksSUFBSSxXQUF5QjtBQUN2RixpQkFBTyxHQUFHLE1BQU0sTUFBTSxTQUFTO0FBQUEsUUFDakM7QUFBQSxNQUNGO0FBQUE7QUFBQTs7O0FDYkE7QUFBQTtBQUFBO0FBQ0EsVUFBSSxjQUFjLHVCQUNkLFFBQVE7QUFJWixhQUFPLFVBQVUsZUFBZSxNQUFNLFdBQVk7QUFFaEQsZUFBTyxPQUFPLGVBQWUsV0FBWTtBQUFBLFFBQWMsR0FBRyxhQUFhO0FBQUEsVUFDckUsT0FBTztBQUFBLFVBQ1AsVUFBVTtBQUFBLFFBQ1osQ0FBQyxFQUFFLGNBQWM7QUFBQSxNQUNuQixDQUFDO0FBQUE7QUFBQTs7O0FDWkQ7QUFBQTtBQUFBO0FBQ0EsVUFBSSxXQUFXLHFCQUVYLFVBQVUsUUFDVixhQUFhO0FBR2pCLGFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsWUFBSSxTQUFTLFFBQVEsRUFBRyxRQUFPO0FBQy9CLGNBQU0sSUFBSSxXQUFXLFFBQVEsUUFBUSxJQUFJLG1CQUFtQjtBQUFBLE1BQzlEO0FBQUE7QUFBQTs7O0FDVkE7QUFBQTtBQUFBO0FBQ0EsVUFBSSxjQUFjLHVCQUNkLGlCQUFpQiwwQkFDakIsMEJBQTBCLG1DQUMxQixXQUFXLHFCQUNYLGdCQUFnQiwyQkFFaEIsYUFBYSxXQUViLGtCQUFrQixPQUFPLGdCQUV6Qiw0QkFBNEIsT0FBTywwQkFDbkMsYUFBYSxjQUNiLGVBQWUsZ0JBQ2YsV0FBVztBQUlmLGNBQVEsSUFBSSxjQUFjLDBCQUEwQixTQUF3QixHQUFHQyxJQUFHLFlBQVk7QUFJNUYsWUFIQSxTQUFTLENBQUMsR0FDVkEsS0FBSSxjQUFjQSxFQUFDLEdBQ25CLFNBQVMsVUFBVSxHQUNmLE9BQU8sS0FBTSxjQUFjQSxPQUFNLGVBQWUsV0FBVyxjQUFjLFlBQVksY0FBYyxDQUFDLFdBQVcsUUFBUSxHQUFHO0FBQzVILGNBQUksVUFBVSwwQkFBMEIsR0FBR0EsRUFBQztBQUM1QyxVQUFJLFdBQVcsUUFBUSxRQUFRLE1BQzdCLEVBQUVBLEVBQUMsSUFBSSxXQUFXLE9BQ2xCLGFBQWE7QUFBQSxZQUNYLGNBQWMsZ0JBQWdCLGFBQWEsV0FBVyxZQUFZLElBQUksUUFBUSxZQUFZO0FBQUEsWUFDMUYsWUFBWSxjQUFjLGFBQWEsV0FBVyxVQUFVLElBQUksUUFBUSxVQUFVO0FBQUEsWUFDbEYsVUFBVTtBQUFBLFVBQ1o7QUFBQSxRQUVKO0FBQUUsZUFBTyxnQkFBZ0IsR0FBR0EsSUFBRyxVQUFVO0FBQUEsTUFDM0MsSUFBSSxrQkFBa0IsU0FBd0IsR0FBR0EsSUFBRyxZQUFZO0FBSTlELFlBSEEsU0FBUyxDQUFDLEdBQ1ZBLEtBQUksY0FBY0EsRUFBQyxHQUNuQixTQUFTLFVBQVUsR0FDZixlQUFnQixLQUFJO0FBQ3RCLGlCQUFPLGdCQUFnQixHQUFHQSxJQUFHLFVBQVU7QUFBQSxRQUN6QyxRQUFnQjtBQUFBLFFBQWM7QUFDOUIsWUFBSSxTQUFTLGNBQWMsU0FBUyxXQUFZLE9BQU0sSUFBSSxXQUFXLHlCQUF5QjtBQUM5RixlQUFJLFdBQVcsZUFBWSxFQUFFQSxFQUFDLElBQUksV0FBVyxRQUN0QztBQUFBLE1BQ1Q7QUFBQTtBQUFBOzs7QUMzQ0E7QUFBQTtBQUFBO0FBQ0EsVUFBSSxjQUFjLHVCQUNkLHVCQUF1QixrQ0FDdkIsMkJBQTJCO0FBRS9CLGFBQU8sVUFBVSxjQUFjLFNBQVUsUUFBUSxLQUFLLE9BQU87QUFDM0QsZUFBTyxxQkFBcUIsRUFBRSxRQUFRLEtBQUsseUJBQXlCLEdBQUcsS0FBSyxDQUFDO0FBQUEsTUFDL0UsSUFBSSxTQUFVLFFBQVEsS0FBSyxPQUFPO0FBQ2hDLHNCQUFPLEdBQUcsSUFBSSxPQUNQO0FBQUEsTUFDVDtBQUFBO0FBQUE7OztBQ1ZBO0FBQUE7QUFBQTtBQUNBLFVBQUlDLGNBQWEsdUJBQ2IsUUFBUSwwQkFDUixjQUFjLHdDQUNkLGFBQWEsdUJBQ2IsMkJBQTJCLDZDQUEyRCxHQUN0RixXQUFXLHFCQUNYLE9BQU8sZ0JBQ1AsT0FBTyxpQ0FDUCw4QkFBOEIsMENBQzlCLFNBQVM7QUFFYjtBQUVBLFVBQUksa0JBQWtCLFNBQVUsbUJBQW1CO0FBQ2pELFlBQUksVUFBVSxTQUFVLEdBQUcsR0FBRyxHQUFHO0FBQy9CLGNBQUksZ0JBQWdCLFNBQVM7QUFDM0Isb0JBQVEsVUFBVSxRQUFRO0FBQUEsY0FDeEIsS0FBSztBQUFHLHVCQUFPLElBQUksa0JBQWtCO0FBQUEsY0FDckMsS0FBSztBQUFHLHVCQUFPLElBQUksa0JBQWtCLENBQUM7QUFBQSxjQUN0QyxLQUFLO0FBQUcsdUJBQU8sSUFBSSxrQkFBa0IsR0FBRyxDQUFDO0FBQUEsWUFDM0M7QUFBRSxtQkFBTyxJQUFJLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztBQUFBLFVBQ3hDO0FBQUUsaUJBQU8sTUFBTSxtQkFBbUIsTUFBTSxTQUFTO0FBQUEsUUFDbkQ7QUFDQSx1QkFBUSxZQUFZLGtCQUFrQixXQUMvQjtBQUFBLE1BQ1Q7QUFpQkEsYUFBTyxVQUFVLFNBQVUsU0FBUyxRQUFRO0FBQzFDLFlBQUksU0FBUyxRQUFRLFFBQ2pCLFNBQVMsUUFBUSxRQUNqQixTQUFTLFFBQVEsTUFDakIsUUFBUSxRQUFRLE9BRWhCLGVBQWUsU0FBU0EsY0FBYSxTQUFTQSxZQUFXLE1BQU0sSUFBSUEsWUFBVyxNQUFNLEtBQUtBLFlBQVcsTUFBTSxFQUFFLFdBRTVHLFNBQVMsU0FBUyxPQUFPLEtBQUssTUFBTSxLQUFLLDRCQUE0QixNQUFNLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUM3RixrQkFBa0IsT0FBTyxXQUV6QixRQUFRLFlBQVksbUJBQ3BCLEtBQUssZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCO0FBRXpFLGFBQUssT0FBTztBQWVWLFVBZEEsU0FBUyxTQUFTLFNBQVMsTUFBTSxVQUFVLFNBQVMsTUFBTSxPQUFPLEtBQUssUUFBUSxNQUFNLEdBRXBGLGFBQWEsQ0FBQyxVQUFVLGdCQUFnQixPQUFPLGNBQWMsR0FBRyxHQUVoRSxpQkFBaUIsT0FBTyxHQUFHLEdBRXZCLGVBQWdCLFFBQVEsa0JBQzFCLGFBQWEseUJBQXlCLGNBQWMsR0FBRyxHQUN2RCxpQkFBaUIsY0FBYyxXQUFXLFNBQ3JDLGlCQUFpQixhQUFhLEdBQUcsSUFHeEMsaUJBQWtCLGNBQWMsaUJBQWtCLGlCQUFpQixPQUFPLEdBQUcsR0FFekUsR0FBQyxVQUFVLENBQUMsU0FBUyxPQUFPLGtCQUFrQixPQUFPLG9CQUdyRCxRQUFRLFFBQVEsYUFBWSxpQkFBaUIsS0FBSyxnQkFBZ0JBLFdBQVUsSUFFdkUsUUFBUSxRQUFRLGFBQVksaUJBQWlCLGdCQUFnQixjQUFjLElBRTNFLFNBQVMsV0FBVyxjQUFjLElBQUcsaUJBQWlCLFlBQVksY0FBYyxJQUVwRixpQkFBaUIsaUJBR2xCLFFBQVEsUUFBUyxrQkFBa0IsZUFBZSxRQUFVLGtCQUFrQixlQUFlLFNBQy9GLDRCQUE0QixnQkFBZ0IsUUFBUSxFQUFJLEdBRzFELDRCQUE0QixRQUFRLEtBQUssY0FBYyxHQUVuRCxVQUNGLG9CQUFvQixTQUFTLGFBQ3hCLE9BQU8sTUFBTSxpQkFBaUIsS0FDakMsNEJBQTRCLE1BQU0sbUJBQW1CLENBQUMsQ0FBQyxHQUd6RCw0QkFBNEIsS0FBSyxpQkFBaUIsR0FBRyxLQUFLLGNBQWMsR0FFcEUsUUFBUSxRQUFRLG9CQUFvQixVQUFVLENBQUMsZ0JBQWdCLEdBQUcsTUFDcEUsNEJBQTRCLGlCQUFpQixLQUFLLGNBQWM7QUFBQSxNQUl4RTtBQUFBO0FBQUE7OztBQ3ZHQTtBQUFBO0FBQUE7QUFDQSxVQUFJLFNBQVMsa0JBQ1QsTUFBTSxlQUVOLE9BQU8sT0FBTyxNQUFNO0FBRXhCLGFBQU8sVUFBVSxTQUFVLEtBQUs7QUFDOUIsZUFBTyxLQUFLLEdBQUcsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEdBQUc7QUFBQSxNQUMxQztBQUFBO0FBQUE7OztBQ1JBO0FBQUE7QUFBQTtBQUNBLFVBQUksUUFBUTtBQUVaLGFBQU8sVUFBVSxDQUFDLE1BQU0sV0FBWTtBQUNsQyxpQkFBUyxJQUFJO0FBQUEsUUFBYztBQUMzQixpQkFBRSxVQUFVLGNBQWMsTUFFbkIsT0FBTyxlQUFlLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRTtBQUFBLE1BQzlDLENBQUM7QUFBQTtBQUFBOzs7QUNSRDtBQUFBO0FBQUE7QUFDQSxVQUFJLFNBQVMsNEJBQ1QsYUFBYSx1QkFDYixXQUFXLHFCQUNYLFlBQVksc0JBQ1osMkJBQTJCLG9DQUUzQixXQUFXLFVBQVUsVUFBVSxHQUMvQixVQUFVLFFBQ1Ysa0JBQWtCLFFBQVE7QUFLOUIsYUFBTyxVQUFVLDJCQUEyQixRQUFRLGlCQUFpQixTQUFVLEdBQUc7QUFDaEYsWUFBSSxTQUFTLFNBQVMsQ0FBQztBQUN2QixZQUFJLE9BQU8sUUFBUSxRQUFRLEVBQUcsUUFBTyxPQUFPLFFBQVE7QUFDcEQsWUFBSSxjQUFjLE9BQU87QUFDekIsZUFBSSxXQUFXLFdBQVcsS0FBSyxrQkFBa0IsY0FDeEMsWUFBWSxZQUNaLGtCQUFrQixVQUFVLGtCQUFrQjtBQUFBLE1BQ3pEO0FBQUE7QUFBQTs7O0FDckJBO0FBQUE7QUFBQTtBQUNBLFVBQUksY0FBYyxpQ0FDZCxZQUFZO0FBRWhCLGFBQU8sVUFBVSxTQUFVLFFBQVEsS0FBSyxRQUFRO0FBQzlDLFlBQUk7QUFFRixpQkFBTyxZQUFZLFVBQVUsT0FBTyx5QkFBeUIsUUFBUSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFBQSxRQUNwRixRQUFnQjtBQUFBLFFBQWM7QUFBQSxNQUNoQztBQUFBO0FBQUE7OztBQ1RBO0FBQUE7QUFBQTtBQUNBLFVBQUksV0FBVztBQUVmLGFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsZUFBTyxTQUFTLFFBQVEsS0FBSyxhQUFhO0FBQUEsTUFDNUM7QUFBQTtBQUFBOzs7QUNMQTtBQUFBO0FBQUE7QUFDQSxVQUFJLHNCQUFzQixpQ0FFdEIsVUFBVSxRQUNWLGFBQWE7QUFFakIsYUFBTyxVQUFVLFNBQVUsVUFBVTtBQUNuQyxZQUFJLG9CQUFvQixRQUFRLEVBQUcsUUFBTztBQUMxQyxjQUFNLElBQUksV0FBVyxlQUFlLFFBQVEsUUFBUSxJQUFJLGlCQUFpQjtBQUFBLE1BQzNFO0FBQUE7QUFBQTs7O0FDVEE7QUFBQTtBQUFBO0FBRUEsVUFBSSxzQkFBc0IsMENBQ3RCLFdBQVcscUJBQ1gseUJBQXlCLG9DQUN6QixxQkFBcUI7QUFNekIsYUFBTyxVQUFVLE9BQU8sbUJBQW1CLGVBQWUsQ0FBQyxLQUFJLFdBQVk7QUFDekUsWUFBSSxpQkFBaUIsSUFDakIsT0FBTyxDQUFDLEdBQ1I7QUFDSixZQUFJO0FBQ0YsbUJBQVMsb0JBQW9CLE9BQU8sV0FBVyxhQUFhLEtBQUssR0FDakUsT0FBTyxNQUFNLENBQUMsQ0FBQyxHQUNmLGlCQUFpQixnQkFBZ0I7QUFBQSxRQUNuQyxRQUFnQjtBQUFBLFFBQWM7QUFDOUIsZUFBTyxTQUF3QixHQUFHLE9BQU87QUFHdkMsaUJBRkEsdUJBQXVCLENBQUMsR0FDeEIsbUJBQW1CLEtBQUssR0FDbkIsU0FBUyxDQUFDLE1BQ1gsaUJBQWdCLE9BQU8sR0FBRyxLQUFLLElBQzlCLEVBQUUsWUFBWSxRQUNaO0FBQUEsUUFDVDtBQUFBLE1BQ0YsR0FBRSxJQUFJO0FBQUE7QUFBQTs7O0FDNUJOO0FBQUE7QUFBQTtBQUNBLFVBQUksT0FBTyxLQUFLLE1BQ1osUUFBUSxLQUFLO0FBS2pCLGFBQU8sVUFBVSxLQUFLLFNBQVMsU0FBZSxHQUFHO0FBQy9DLFlBQUksSUFBSSxDQUFDO0FBQ1QsZ0JBQVEsSUFBSSxJQUFJLFFBQVEsTUFBTSxDQUFDO0FBQUEsTUFDakM7QUFBQTtBQUFBOzs7QUNWQTtBQUFBO0FBQUE7QUFDQSxVQUFJLFFBQVE7QUFJWixhQUFPLFVBQVUsU0FBVSxVQUFVO0FBQ25DLFlBQUksU0FBUyxDQUFDO0FBRWQsZUFBTyxXQUFXLFVBQVUsV0FBVyxJQUFJLElBQUksTUFBTSxNQUFNO0FBQUEsTUFDN0Q7QUFBQTtBQUFBOzs7QUNUQTtBQUFBO0FBQUE7QUFDQSxVQUFJLHNCQUFzQixrQ0FFdEIsTUFBTSxLQUFLLEtBQ1gsTUFBTSxLQUFLO0FBS2YsYUFBTyxVQUFVLFNBQVUsT0FBTyxRQUFRO0FBQ3hDLFlBQUksVUFBVSxvQkFBb0IsS0FBSztBQUN2QyxlQUFPLFVBQVUsSUFBSSxJQUFJLFVBQVUsUUFBUSxDQUFDLElBQUksSUFBSSxTQUFTLE1BQU07QUFBQSxNQUNyRTtBQUFBO0FBQUE7OztBQ1pBO0FBQUE7QUFBQTtBQUNBLFVBQUksc0JBQXNCLGtDQUV0QixNQUFNLEtBQUs7QUFJZixhQUFPLFVBQVUsU0FBVSxVQUFVO0FBQ25DLFlBQUksTUFBTSxvQkFBb0IsUUFBUTtBQUN0QyxlQUFPLE1BQU0sSUFBSSxJQUFJLEtBQUssZ0JBQWdCLElBQUk7QUFBQSxNQUNoRDtBQUFBO0FBQUE7OztBQ1ZBO0FBQUE7QUFBQTtBQUNBLFVBQUksV0FBVztBQUlmLGFBQU8sVUFBVSxTQUFVLEtBQUs7QUFDOUIsZUFBTyxTQUFTLElBQUksTUFBTTtBQUFBLE1BQzVCO0FBQUE7QUFBQTs7O0FDUEE7QUFBQTtBQUFBO0FBQ0EsVUFBSSxrQkFBa0IsNkJBQ2xCLGtCQUFrQiw2QkFDbEIsb0JBQW9CLGdDQUdwQixlQUFlLFNBQVUsYUFBYTtBQUN4QyxlQUFPLFNBQVUsT0FBTyxJQUFJLFdBQVc7QUFDckMsY0FBSSxJQUFJLGdCQUFnQixLQUFLLEdBQ3pCLFNBQVMsa0JBQWtCLENBQUM7QUFDaEMsY0FBSSxXQUFXLEVBQUcsUUFBTyxDQUFDLGVBQWU7QUFDekMsY0FBSSxRQUFRLGdCQUFnQixXQUFXLE1BQU0sR0FDekM7QUFHSixjQUFJLGVBQWUsT0FBTztBQUFJLG1CQUFPLFNBQVM7QUFHNUMsa0JBRkEsUUFBUSxFQUFFLE9BQU8sR0FFYixVQUFVLE1BQU8sUUFBTztBQUFBLGdCQUV2QixRQUFNLFNBQVMsT0FBTztBQUMzQixpQkFBSyxlQUFlLFNBQVMsTUFBTSxFQUFFLEtBQUssTUFBTSxHQUFJLFFBQU8sZUFBZSxTQUFTO0FBQ25GLGlCQUFPLENBQUMsZUFBZTtBQUFBLFFBQzNCO0FBQUEsTUFDRjtBQUVBLGFBQU8sVUFBVTtBQUFBO0FBQUE7QUFBQSxRQUdmLFVBQVUsYUFBYSxFQUFJO0FBQUE7QUFBQTtBQUFBLFFBRzNCLFNBQVMsYUFBYSxFQUFLO0FBQUEsTUFDN0I7QUFBQTtBQUFBOzs7QUNqQ0E7QUFBQTtBQUFBO0FBQ0EsYUFBTyxVQUFVLENBQUM7QUFBQTtBQUFBOzs7QUNEbEI7QUFBQTtBQUFBO0FBQ0EsVUFBSSxjQUFjLGlDQUNkLFNBQVMsNEJBQ1Qsa0JBQWtCLDZCQUNsQixVQUFVLHlCQUF1QyxTQUNqRCxhQUFhLHVCQUViLE9BQU8sWUFBWSxDQUFDLEVBQUUsSUFBSTtBQUU5QixhQUFPLFVBQVUsU0FBVSxRQUFRLE9BQU87QUFDeEMsWUFBSSxJQUFJLGdCQUFnQixNQUFNLEdBQzFCLElBQUksR0FDSixTQUFTLENBQUMsR0FDVjtBQUNKLGFBQUssT0FBTyxFQUFHLEVBQUMsT0FBTyxZQUFZLEdBQUcsS0FBSyxPQUFPLEdBQUcsR0FBRyxLQUFLLEtBQUssUUFBUSxHQUFHO0FBRTdFLGVBQU8sTUFBTSxTQUFTLElBQUcsQ0FBSSxPQUFPLEdBQUcsTUFBTSxNQUFNLEdBQUcsQ0FBQyxNQUNyRCxDQUFDLFFBQVEsUUFBUSxHQUFHLEtBQUssS0FBSyxRQUFRLEdBQUc7QUFFM0MsZUFBTztBQUFBLE1BQ1Q7QUFBQTtBQUFBOzs7QUNwQkE7QUFBQTtBQUFBO0FBRUEsYUFBTyxVQUFVO0FBQUEsUUFDZjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQTtBQUFBOzs7QUNWQTtBQUFBO0FBQUE7QUFDQSxVQUFJLHFCQUFxQixnQ0FDckIsY0FBYyx5QkFFZCxhQUFhLFlBQVksT0FBTyxVQUFVLFdBQVc7QUFLekQsY0FBUSxJQUFJLE9BQU8sdUJBQXVCLFNBQTZCLEdBQUc7QUFDeEUsZUFBTyxtQkFBbUIsR0FBRyxVQUFVO0FBQUEsTUFDekM7QUFBQTtBQUFBOzs7QUNYQTtBQUFBO0FBQUE7QUFFQSxjQUFRLElBQUksT0FBTztBQUFBO0FBQUE7OztBQ0ZuQjtBQUFBO0FBQUE7QUFDQSxVQUFJLGFBQWEsd0JBQ2IsY0FBYyxpQ0FDZCw0QkFBNEIseUNBQzVCLDhCQUE4QiwyQ0FDOUIsV0FBVyxxQkFFWCxTQUFTLFlBQVksQ0FBQyxFQUFFLE1BQU07QUFHbEMsYUFBTyxVQUFVLFdBQVcsV0FBVyxTQUFTLEtBQUssU0FBaUIsSUFBSTtBQUN4RSxZQUFJLE9BQU8sMEJBQTBCLEVBQUUsU0FBUyxFQUFFLENBQUMsR0FDL0Msd0JBQXdCLDRCQUE0QjtBQUN4RCxlQUFPLHdCQUF3QixPQUFPLE1BQU0sc0JBQXNCLEVBQUUsQ0FBQyxJQUFJO0FBQUEsTUFDM0U7QUFBQTtBQUFBOzs7QUNkQTtBQUFBO0FBQUE7QUFDQSxVQUFJLFNBQVMsNEJBQ1QsVUFBVSxvQkFDVixpQ0FBaUMsOENBQ2pDLHVCQUF1QjtBQUUzQixhQUFPLFVBQVUsU0FBVSxRQUFRLFFBQVEsWUFBWTtBQUlyRCxpQkFISSxPQUFPLFFBQVEsTUFBTSxHQUNyQixpQkFBaUIscUJBQXFCLEdBQ3RDLDJCQUEyQiwrQkFBK0IsR0FDckQsSUFBSSxHQUFHLElBQUksS0FBSyxRQUFRLEtBQUs7QUFDcEMsY0FBSSxNQUFNLEtBQUssQ0FBQztBQUNoQixVQUFJLENBQUMsT0FBTyxRQUFRLEdBQUcsS0FBSyxFQUFFLGNBQWMsT0FBTyxZQUFZLEdBQUcsTUFDaEUsZUFBZSxRQUFRLEtBQUsseUJBQXlCLFFBQVEsR0FBRyxDQUFDO0FBQUEsUUFFckU7QUFBQSxNQUNGO0FBQUE7QUFBQTs7O0FDaEJBO0FBQUE7QUFBQTtBQUNBLFVBQUkscUJBQXFCLGdDQUNyQixjQUFjO0FBS2xCLGFBQU8sVUFBVSxPQUFPLFFBQVEsU0FBYyxHQUFHO0FBQy9DLGVBQU8sbUJBQW1CLEdBQUcsV0FBVztBQUFBLE1BQzFDO0FBQUE7QUFBQTs7O0FDVEE7QUFBQTtBQUFBO0FBQ0EsVUFBSSxjQUFjLHVCQUNkLDBCQUEwQixtQ0FDMUIsdUJBQXVCLGtDQUN2QixXQUFXLHFCQUNYLGtCQUFrQiw2QkFDbEIsYUFBYTtBQUtqQixjQUFRLElBQUksZUFBZSxDQUFDLDBCQUEwQixPQUFPLG1CQUFtQixTQUEwQixHQUFHLFlBQVk7QUFDdkgsaUJBQVMsQ0FBQztBQU1WLGlCQUxJLFFBQVEsZ0JBQWdCLFVBQVUsR0FDbEMsT0FBTyxXQUFXLFVBQVUsR0FDNUIsU0FBUyxLQUFLLFFBQ2QsUUFBUSxHQUNSLEtBQ0csU0FBUyxRQUFPLHNCQUFxQixFQUFFLEdBQUcsTUFBTSxLQUFLLE9BQU8sR0FBRyxNQUFNLEdBQUcsQ0FBQztBQUNoRixlQUFPO0FBQUEsTUFDVDtBQUFBO0FBQUE7OztBQ3BCQTtBQUFBO0FBQUE7QUFDQSxVQUFJLGFBQWE7QUFFakIsYUFBTyxVQUFVLFdBQVcsWUFBWSxpQkFBaUI7QUFBQTtBQUFBOzs7QUNIekQ7QUFBQTtBQUFBO0FBRUEsVUFBSSxXQUFXLHFCQUNYLHlCQUF5QixvQ0FDekIsY0FBYyx5QkFDZCxhQUFhLHVCQUNiLE9BQU8sZ0JBQ1Asd0JBQXdCLG1DQUN4QixZQUFZLHNCQUVaLEtBQUssS0FDTCxLQUFLLEtBQ0wsWUFBWSxhQUNaLFNBQVMsVUFDVCxXQUFXLFVBQVUsVUFBVSxHQUUvQixtQkFBbUIsV0FBWTtBQUFBLE1BQWMsR0FFN0MsWUFBWSxTQUFVLFNBQVM7QUFDakMsZUFBTyxLQUFLLFNBQVMsS0FBSyxVQUFVLEtBQUssTUFBTSxTQUFTO0FBQUEsTUFDMUQsR0FHSSw0QkFBNEIsU0FBVUMsa0JBQWlCO0FBQ3pELFFBQUFBLGlCQUFnQixNQUFNLFVBQVUsRUFBRSxDQUFDLEdBQ25DQSxpQkFBZ0IsTUFBTTtBQUN0QixZQUFJLE9BQU9BLGlCQUFnQixhQUFhO0FBRXhDLGVBQUFBLG1CQUFrQixNQUNYO0FBQUEsTUFDVCxHQUdJLDJCQUEyQixXQUFZO0FBRXpDLFlBQUksU0FBUyxzQkFBc0IsUUFBUSxHQUN2QyxLQUFLLFNBQVMsU0FBUyxLQUN2QjtBQUNKLHNCQUFPLE1BQU0sVUFBVSxRQUN2QixLQUFLLFlBQVksTUFBTSxHQUV2QixPQUFPLE1BQU0sT0FBTyxFQUFFLEdBQ3RCLGlCQUFpQixPQUFPLGNBQWMsVUFDdEMsZUFBZSxLQUFLLEdBQ3BCLGVBQWUsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEdBQ25ELGVBQWUsTUFBTSxHQUNkLGVBQWU7QUFBQSxNQUN4QixHQU9JLGlCQUNBLGtCQUFrQixXQUFZO0FBQ2hDLFlBQUk7QUFDRiw0QkFBa0IsSUFBSSxjQUFjLFVBQVU7QUFBQSxRQUNoRCxRQUFnQjtBQUFBLFFBQWU7QUFDL0IsMEJBQWtCLE9BQU8sV0FBWSxNQUNqQyxTQUFTLFVBQVUsa0JBQ2pCLDBCQUEwQixlQUFlLElBQ3pDLHlCQUF5QixJQUMzQiwwQkFBMEIsZUFBZTtBQUU3QyxpQkFESSxTQUFTLFlBQVksUUFDbEIsV0FBVSxRQUFPLGdCQUFnQixTQUFTLEVBQUUsWUFBWSxNQUFNLENBQUM7QUFDdEUsZUFBTyxnQkFBZ0I7QUFBQSxNQUN6QjtBQUVBLGlCQUFXLFFBQVEsSUFBSTtBQUt2QixhQUFPLFVBQVUsT0FBTyxVQUFVLFNBQWdCLEdBQUcsWUFBWTtBQUMvRCxZQUFJO0FBQ0osZUFBSSxNQUFNLFFBQ1IsaUJBQWlCLFNBQVMsSUFBSSxTQUFTLENBQUMsR0FDeEMsU0FBUyxJQUFJLGlCQUFpQixHQUM5QixpQkFBaUIsU0FBUyxJQUFJLE1BRTlCLE9BQU8sUUFBUSxJQUFJLEtBQ2QsU0FBUyxnQkFBZ0IsR0FDekIsZUFBZSxTQUFZLFNBQVMsdUJBQXVCLEVBQUUsUUFBUSxVQUFVO0FBQUEsTUFDeEY7QUFBQTtBQUFBOzs7QUNwRkE7QUFBQTtBQUFBO0FBQ0EsVUFBSSxXQUFXLHFCQUNYLDhCQUE4QjtBQUlsQyxhQUFPLFVBQVUsU0FBVSxHQUFHLFNBQVM7QUFDckMsUUFBSSxTQUFTLE9BQU8sS0FBSyxXQUFXLFdBQ2xDLDRCQUE0QixHQUFHLFNBQVMsUUFBUSxLQUFLO0FBQUEsTUFFekQ7QUFBQTtBQUFBOzs7QUNWQTtBQUFBO0FBQUE7QUFDQSxVQUFJLGNBQWMsaUNBRWQsU0FBUyxPQUNULFVBQVUsWUFBWSxHQUFHLE9BQU8sR0FFaEMsUUFBUSxTQUFVLEtBQUs7QUFBRSxlQUFPLE9BQU8sSUFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLO0FBQUEsTUFBRyxHQUFHLFFBQVEsR0FFMUUsMkJBQTJCLHdCQUMzQix3QkFBd0IseUJBQXlCLEtBQUssSUFBSTtBQUU5RCxhQUFPLFVBQVUsU0FBVSxPQUFPLGFBQWE7QUFDN0MsWUFBSSx5QkFBeUIsT0FBTyxTQUFTLFlBQVksQ0FBQyxPQUFPO0FBQy9ELGlCQUFPLGdCQUFlLFNBQVEsUUFBUSxPQUFPLDBCQUEwQixFQUFFO0FBQ3pFLGVBQU87QUFBQSxNQUNYO0FBQUE7QUFBQTs7O0FDZkE7QUFBQTtBQUFBO0FBQ0EsVUFBSSxRQUFRLGlCQUNSLDJCQUEyQjtBQUUvQixhQUFPLFVBQVUsQ0FBQyxNQUFNLFdBQVk7QUFDbEMsWUFBSSxRQUFRLElBQUksTUFBTSxHQUFHO0FBQ3pCLGVBQU0sV0FBVyxTQUVqQixPQUFPLGVBQWUsT0FBTyxTQUFTLHlCQUF5QixHQUFHLENBQUMsQ0FBQyxHQUM3RCxNQUFNLFVBQVUsS0FIUztBQUFBLE1BSWxDLENBQUM7QUFBQTtBQUFBOzs7QUNWRDtBQUFBO0FBQUE7QUFDQSxVQUFJLDhCQUE4QiwwQ0FDOUIsa0JBQWtCLDZCQUNsQiwwQkFBMEIsbUNBSTFCLG9CQUFvQixNQUFNO0FBRTlCLGFBQU8sVUFBVSxTQUFVLE9BQU8sR0FBRyxPQUFPLGFBQWE7QUFDdkQsUUFBSSw0QkFDRSxvQkFBbUIsa0JBQWtCLE9BQU8sQ0FBQyxJQUM1Qyw0QkFBNEIsT0FBTyxTQUFTLGdCQUFnQixPQUFPLFdBQVcsQ0FBQztBQUFBLE1BRXhGO0FBQUE7QUFBQTs7O0FDZEE7QUFBQTtBQUFBO0FBQ0EsYUFBTyxVQUFVLE9BQU8sU0FBUyx1QkFBTyxPQUFPLElBQUksSUFBSSxDQUFDO0FBQUE7QUFBQTs7O0FDRHhEO0FBQUE7QUFBQTtBQUNBLFVBQUksa0JBQWtCLDZCQUNsQixZQUFZLHFCQUVaLFdBQVcsZ0JBQWdCLFVBQVUsR0FDckMsaUJBQWlCLE1BQU07QUFHM0IsYUFBTyxVQUFVLFNBQVUsSUFBSTtBQUM3QixlQUFPLE9BQU8sV0FBYyxVQUFVLFVBQVUsTUFBTSxlQUFlLFFBQVEsTUFBTTtBQUFBLE1BQ3JGO0FBQUE7QUFBQTs7O0FDVkE7QUFBQTtBQUFBO0FBQ0EsVUFBSSxrQkFBa0IsNkJBRWxCLGdCQUFnQixnQkFBZ0IsYUFBYSxHQUM3QyxPQUFPLENBQUM7QUFFWixXQUFLLGFBQWEsSUFBSTtBQUV0QixhQUFPLFVBQVUsT0FBTyxJQUFJLE1BQU07QUFBQTtBQUFBOzs7QUNSbEM7QUFBQTtBQUFBO0FBQ0EsVUFBSSx3QkFBd0IsaUNBQ3hCLGFBQWEsdUJBQ2IsYUFBYSx1QkFDYixrQkFBa0IsNkJBRWxCLGdCQUFnQixnQkFBZ0IsYUFBYSxHQUM3QyxVQUFVLFFBR1Ysb0JBQW9CLFdBQVcsNEJBQVk7QUFBRSxlQUFPO0FBQUEsTUFBVyxHQUFFLENBQUMsTUFBTSxhQUd4RSxTQUFTLFNBQVUsSUFBSSxLQUFLO0FBQzlCLFlBQUk7QUFDRixpQkFBTyxHQUFHLEdBQUc7QUFBQSxRQUNmLFFBQWdCO0FBQUEsUUFBYztBQUFBLE1BQ2hDO0FBR0EsYUFBTyxVQUFVLHdCQUF3QixhQUFhLFNBQVUsSUFBSTtBQUNsRSxZQUFJLEdBQUcsS0FBSztBQUNaLGVBQU8sT0FBTyxTQUFZLGNBQWMsT0FBTyxPQUFPLFNBRWxELFFBQVEsTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFLEdBQUcsYUFBYSxNQUFNLFdBQVcsTUFFcEUsb0JBQW9CLFdBQVcsQ0FBQyxLQUUvQixTQUFTLFdBQVcsQ0FBQyxPQUFPLFlBQVksV0FBVyxFQUFFLE1BQU0sSUFBSSxjQUFjO0FBQUEsTUFDcEY7QUFBQTtBQUFBOzs7QUM3QkE7QUFBQTtBQUFBO0FBQ0EsVUFBSSxVQUFVLG1CQUNWLFNBQVMsNEJBQ1QsWUFBWTtBQUVoQixhQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLFlBQUksUUFBUSxRQUFRLEVBQUU7QUFDdEIsZUFBSSxVQUFVLGdCQUFhLFFBQVEsVUFDNUIsT0FBTyxXQUFXLEtBQUssSUFBSSxVQUFVLEtBQUssSUFBSTtBQUFBLE1BQ3ZEO0FBQUE7QUFBQTs7O0FDVEE7QUFBQTtBQUFBO0FBQ0EsVUFBSSxZQUFZLHNCQUNaLG9CQUFvQixnQ0FDcEIsc0JBQXNCLGlDQUN0QixrQkFBa0IsNkJBRWxCLFdBQVcsZ0JBQWdCLFVBQVU7QUFFekMsYUFBTyxVQUFVLFNBQVUsSUFBSTtBQUM3QixZQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRyxRQUFPLFVBQVUsSUFBSSxRQUFRLEtBQ3BELFVBQVUsSUFBSSxZQUFZLEtBQzFCLG9CQUFvQixFQUFFO0FBQUEsTUFDN0I7QUFBQTtBQUFBOzs7QUNaQTtBQUFBO0FBQUE7QUFDQSxVQUFJLE9BQU8seUJBQ1AsYUFBYSx1QkFDYixXQUFXLHFCQUNYLGNBQWMseUJBQ2Qsb0JBQW9CLHdDQUVwQixhQUFhO0FBRWpCLGFBQU8sVUFBVSxTQUFVLFVBQVUsZUFBZTtBQUNsRCxZQUFJLGlCQUFpQixVQUFVLFNBQVMsSUFBSSxrQkFBa0IsUUFBUSxJQUFJO0FBQzFFLFlBQUksV0FBVyxjQUFjLEVBQUcsUUFBTyxTQUFTLEtBQUssZ0JBQWdCLFFBQVEsQ0FBQztBQUM5RSxjQUFNLElBQUksV0FBVyxZQUFZLFFBQVEsSUFBSSxrQkFBa0I7QUFBQSxNQUNqRTtBQUFBO0FBQUE7OztBQ2JBO0FBQUE7QUFBQTtBQUNBLFVBQUksT0FBTyx5QkFDUCxXQUFXLHFCQUNYLFlBQVk7QUFFaEIsYUFBTyxVQUFVLFNBQVUsVUFBVSxNQUFNLE9BQU87QUFDaEQsWUFBSSxhQUFhO0FBQ2pCLGlCQUFTLFFBQVE7QUFDakIsWUFBSTtBQUVGLGNBREEsY0FBYyxVQUFVLFVBQVUsUUFBUSxHQUN0QyxDQUFDLGFBQWE7QUFDaEIsZ0JBQUksU0FBUyxRQUFTLE9BQU07QUFDNUIsbUJBQU87QUFBQSxVQUNUO0FBQ0Esd0JBQWMsS0FBSyxhQUFhLFFBQVE7QUFBQSxRQUMxQyxTQUFTLE9BQU87QUFDZCx1QkFBYSxJQUNiLGNBQWM7QUFBQSxRQUNoQjtBQUNBLFlBQUksU0FBUyxRQUFTLE9BQU07QUFDNUIsWUFBSSxXQUFZLE9BQU07QUFDdEIsd0JBQVMsV0FBVyxHQUNiO0FBQUEsTUFDVDtBQUFBO0FBQUE7OztBQ3ZCQTtBQUFBO0FBQUE7QUFDQSxVQUFJLE9BQU8saUNBQ1AsT0FBTyx5QkFDUCxXQUFXLHFCQUNYLGNBQWMseUJBQ2Qsd0JBQXdCLG9DQUN4QixvQkFBb0IsZ0NBQ3BCLGdCQUFnQixrQ0FDaEIsY0FBYyxpQ0FDZCxvQkFBb0Isd0NBQ3BCLGdCQUFnQiwwQkFFaEIsYUFBYSxXQUViLFNBQVMsU0FBVSxTQUFTLFFBQVE7QUFDdEMsYUFBSyxVQUFVLFNBQ2YsS0FBSyxTQUFTO0FBQUEsTUFDaEIsR0FFSSxrQkFBa0IsT0FBTztBQUU3QixhQUFPLFVBQVUsU0FBVSxVQUFVLGlCQUFpQixTQUFTO0FBQzdELFlBQUksT0FBTyxXQUFXLFFBQVEsTUFDMUIsYUFBYSxDQUFDLEVBQUUsV0FBVyxRQUFRLGFBQ25DLFlBQVksQ0FBQyxFQUFFLFdBQVcsUUFBUSxZQUNsQyxjQUFjLENBQUMsRUFBRSxXQUFXLFFBQVEsY0FDcEMsY0FBYyxDQUFDLEVBQUUsV0FBVyxRQUFRLGNBQ3BDLEtBQUssS0FBSyxpQkFBaUIsSUFBSSxHQUMvQixVQUFVLFFBQVEsT0FBTyxRQUFRLFFBQVEsTUFBTSxNQUUvQyxPQUFPLFNBQVUsV0FBVztBQUM5QixjQUFJLFlBQVk7QUFDaEIsNEJBQVcsUUFDUCxhQUFXLGNBQWMsV0FBVyxRQUFRLEdBQ3pDLElBQUksT0FBTyxJQUFNLFNBQVM7QUFBQSxRQUNuQyxHQUVJLFNBQVMsU0FBVUMsUUFBTztBQUM1QixpQkFBSSxjQUNGLFNBQVNBLE1BQUssR0FDUCxjQUFjLEdBQUdBLE9BQU0sQ0FBQyxHQUFHQSxPQUFNLENBQUMsR0FBRyxJQUFJLElBQUksR0FBR0EsT0FBTSxDQUFDLEdBQUdBLE9BQU0sQ0FBQyxDQUFDLEtBQ2xFLGNBQWMsR0FBR0EsUUFBTyxJQUFJLElBQUksR0FBR0EsTUFBSztBQUFBLFFBQ25EO0FBRUEsWUFBSTtBQUNGLHFCQUFXLFNBQVM7QUFBQSxpQkFDWDtBQUNULHFCQUFXO0FBQUEsYUFDTjtBQUVMLGNBREEsU0FBUyxrQkFBa0IsUUFBUSxHQUMvQixDQUFDLE9BQVEsT0FBTSxJQUFJLFdBQVcsWUFBWSxRQUFRLElBQUksa0JBQWtCO0FBRTVFLGNBQUksc0JBQXNCLE1BQU0sR0FBRztBQUNqQyxpQkFBSyxRQUFRLEdBQUcsU0FBUyxrQkFBa0IsUUFBUSxHQUFHLFNBQVMsT0FBTztBQUVwRSxrQkFEQSxTQUFTLE9BQU8sU0FBUyxLQUFLLENBQUMsR0FDM0IsVUFBVSxjQUFjLGlCQUFpQixNQUFNLEVBQUcsUUFBTztBQUM3RCxtQkFBTyxJQUFJLE9BQU8sRUFBSztBQUFBLFVBQzNCO0FBQ0EscUJBQVcsWUFBWSxVQUFVLE1BQU07QUFBQSxRQUN6QztBQUdBLGFBREEsT0FBTyxZQUFZLFNBQVMsT0FBTyxTQUFTLE1BQ3JDLEVBQUUsT0FBTyxLQUFLLE1BQU0sUUFBUSxHQUFHLFFBQU07QUFFMUMsY0FBSSxRQUFRLEtBQUs7QUFDakIsY0FBSTtBQUNGLHFCQUFTLE9BQU8sS0FBSztBQUFBLFVBQ3ZCLFNBQVMsT0FBTztBQUNkLGdCQUFJLFNBQVUsZUFBYyxVQUFVLFNBQVMsS0FBSztBQUFBLGdCQUMvQyxPQUFNO0FBQUEsVUFDYjtBQUNBLGNBQUksT0FBTyxVQUFVLFlBQVksVUFBVSxjQUFjLGlCQUFpQixNQUFNLEVBQUcsUUFBTztBQUFBLFFBQzVGO0FBQUUsZUFBTyxJQUFJLE9BQU8sRUFBSztBQUFBLE1BQzNCO0FBQUE7QUFBQTs7O0FDekVBO0FBQUE7QUFBQTtBQUNBLFVBQUksVUFBVSxtQkFFVixVQUFVO0FBRWQsYUFBTyxVQUFVLFNBQVUsVUFBVTtBQUNuQyxZQUFJLFFBQVEsUUFBUSxNQUFNLFNBQVUsT0FBTSxJQUFJLFVBQVUsMkNBQTJDO0FBQ25HLGVBQU8sUUFBUSxRQUFRO0FBQUEsTUFDekI7QUFBQTtBQUFBOzs7QUNSQTtBQUFBO0FBQUE7QUFDQSxVQUFJLFdBQVc7QUFFZixhQUFPLFVBQVUsU0FBVSxVQUFVLFVBQVU7QUFDN0MsZUFBTyxhQUFhLFNBQVksVUFBVSxTQUFTLElBQUksS0FBSyxXQUFXLFNBQVMsUUFBUTtBQUFBLE1BQzFGO0FBQUE7QUFBQTs7O0FDTEE7QUFBQTtBQUFBO0FBQ0EsVUFBSSxJQUFJLGtCQUNKLGdCQUFnQixrQ0FDaEIsaUJBQWlCLG1DQUNqQixpQkFBaUIsbUNBQ2pCLDRCQUE0Qix1Q0FDNUIsU0FBUyx5QkFDVCw4QkFBOEIsMENBQzlCLDJCQUEyQixzQ0FDM0Isb0JBQW9CLCtCQUNwQixvQkFBb0IsK0JBQ3BCLFVBQVUsbUJBQ1YsMEJBQTBCLHFDQUMxQixrQkFBa0IsNkJBRWxCLGdCQUFnQixnQkFBZ0IsYUFBYSxHQUM3QyxTQUFTLE9BQ1QsT0FBTyxDQUFDLEVBQUUsTUFFVixrQkFBa0IsU0FBd0IsUUFBUSxTQUF5QjtBQUM3RSxZQUFJLGFBQWEsY0FBYyx5QkFBeUIsSUFBSSxHQUN4RDtBQUNKLFFBQUksaUJBQ0YsT0FBTyxlQUFlLElBQUksT0FBTyxHQUFHLGFBQWEsZUFBZSxJQUFJLElBQUksdUJBQXVCLEtBRS9GLE9BQU8sYUFBYSxPQUFPLE9BQU8sdUJBQXVCLEdBQ3pELDRCQUE0QixNQUFNLGVBQWUsT0FBTyxJQUV0RCxZQUFZLFVBQVcsNEJBQTRCLE1BQU0sV0FBVyx3QkFBd0IsT0FBTyxDQUFDLEdBQ3hHLGtCQUFrQixNQUFNLGlCQUFpQixLQUFLLE9BQU8sQ0FBQyxHQUNsRCxVQUFVLFNBQVMsS0FBRyxrQkFBa0IsTUFBTSxVQUFVLENBQUMsQ0FBQztBQUM5RCxZQUFJLGNBQWMsQ0FBQztBQUNuQix1QkFBUSxRQUFRLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQyxHQUMzQyw0QkFBNEIsTUFBTSxVQUFVLFdBQVcsR0FDaEQ7QUFBQSxNQUNUO0FBRUEsTUFBSSxpQkFBZ0IsZUFBZSxpQkFBaUIsTUFBTSxJQUNyRCwwQkFBMEIsaUJBQWlCLFFBQVEsRUFBRSxNQUFNLEdBQUssQ0FBQztBQUV0RSxVQUFJLDBCQUEwQixnQkFBZ0IsWUFBWSxPQUFPLE9BQU8sV0FBVztBQUFBLFFBQ2pGLGFBQWEseUJBQXlCLEdBQUcsZUFBZTtBQUFBLFFBQ3hELFNBQVMseUJBQXlCLEdBQUcsRUFBRTtBQUFBLFFBQ3ZDLE1BQU0seUJBQXlCLEdBQUcsZ0JBQWdCO0FBQUEsTUFDcEQsQ0FBQztBQUlELFFBQUUsRUFBRSxRQUFRLElBQU0sYUFBYSxJQUFNLE9BQU8sRUFBRSxHQUFHO0FBQUEsUUFDL0MsZ0JBQWdCO0FBQUEsTUFDbEIsQ0FBQztBQUFBO0FBQUE7OztBQ2xERDtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7OztBQ0ZBO0FBQUE7QUFBQTtBQUNBLGFBQU8sVUFBVSxXQUFZO0FBQUEsTUFBYztBQUFBO0FBQUE7OztBQ0QzQztBQUFBO0FBQUE7QUFDQSxVQUFJQyxjQUFhLHVCQUNiLGFBQWEsdUJBRWIsVUFBVUEsWUFBVztBQUV6QixhQUFPLFVBQVUsV0FBVyxPQUFPLEtBQUssY0FBYyxLQUFLLE9BQU8sT0FBTyxDQUFDO0FBQUE7QUFBQTs7O0FDTjFFO0FBQUE7QUFBQTtBQUNBLFVBQUksa0JBQWtCLG9DQUNsQkMsY0FBYSx1QkFDYixXQUFXLHFCQUNYLDhCQUE4QiwwQ0FDOUIsU0FBUyw0QkFDVCxTQUFTLHdCQUNULFlBQVksc0JBQ1osYUFBYSx1QkFFYiw2QkFBNkIsOEJBQzdCQyxhQUFZRCxZQUFXLFdBQ3ZCLFVBQVVBLFlBQVcsU0FDckIsS0FBSyxLQUFLLEtBRVYsVUFBVSxTQUFVLElBQUk7QUFDMUIsZUFBTyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQUEsTUFDdkMsR0FFSSxZQUFZLFNBQVUsTUFBTTtBQUM5QixlQUFPLFNBQVUsSUFBSTtBQUNuQixjQUFJO0FBQ0osY0FBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLFFBQVEsSUFBSSxFQUFFLEdBQUcsU0FBUztBQUM5QyxrQkFBTSxJQUFJQyxXQUFVLDRCQUE0QixPQUFPLFdBQVc7QUFDbEUsaUJBQU87QUFBQSxRQUNYO0FBQUEsTUFDRjtBQUVBLE1BQUksbUJBQW1CLE9BQU8sU0FDeEIsUUFBUSxPQUFPLFVBQVUsT0FBTyxRQUFRLElBQUksUUFBUSxJQUV4RCxNQUFNLE1BQU0sTUFBTSxLQUNsQixNQUFNLE1BQU0sTUFBTSxLQUNsQixNQUFNLE1BQU0sTUFBTSxLQUVsQixNQUFNLFNBQVUsSUFBSSxVQUFVO0FBQzVCLFlBQUksTUFBTSxJQUFJLEVBQUUsRUFBRyxPQUFNLElBQUlBLFdBQVUsMEJBQTBCO0FBQ2pFLHdCQUFTLFNBQVMsSUFDbEIsTUFBTSxJQUFJLElBQUksUUFBUSxHQUNmO0FBQUEsTUFDVCxHQUNBLE1BQU0sU0FBVSxJQUFJO0FBQ2xCLGVBQU8sTUFBTSxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUEsTUFDM0IsR0FDQSxNQUFNLFNBQVUsSUFBSTtBQUNsQixlQUFPLE1BQU0sSUFBSSxFQUFFO0FBQUEsTUFDckIsTUFFSSxRQUFRLFVBQVUsT0FBTyxHQUM3QixXQUFXLEtBQUssSUFBSSxJQUNwQixNQUFNLFNBQVUsSUFBSSxVQUFVO0FBQzVCLFlBQUksT0FBTyxJQUFJLEtBQUssRUFBRyxPQUFNLElBQUlBLFdBQVUsMEJBQTBCO0FBQ3JFLHdCQUFTLFNBQVMsSUFDbEIsNEJBQTRCLElBQUksT0FBTyxRQUFRLEdBQ3hDO0FBQUEsTUFDVCxHQUNBLE1BQU0sU0FBVSxJQUFJO0FBQ2xCLGVBQU8sT0FBTyxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDO0FBQUEsTUFDMUMsR0FDQSxNQUFNLFNBQVUsSUFBSTtBQUNsQixlQUFPLE9BQU8sSUFBSSxLQUFLO0FBQUEsTUFDekI7QUFoQ0ksaUJBbUJBO0FBZ0JOLGFBQU8sVUFBVTtBQUFBLFFBQ2Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBO0FBQUE7OztBQ3RFQTtBQUFBO0FBQUE7QUFDQSxVQUFJLGNBQWMsdUJBQ2QsU0FBUyw0QkFFVCxvQkFBb0IsU0FBUyxXQUU3QixnQkFBZ0IsZUFBZSxPQUFPLDBCQUV0QyxTQUFTLE9BQU8sbUJBQW1CLE1BQU0sR0FFekMsU0FBUyxVQUFVLFdBQXFCO0FBQUEsTUFBYyxFQUFFLFNBQVMsYUFDakUsZUFBZSxXQUFXLENBQUMsZUFBZ0IsZUFBZSxjQUFjLG1CQUFtQixNQUFNLEVBQUU7QUFFdkcsYUFBTyxVQUFVO0FBQUEsUUFDZjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBO0FBQUE7OztBQ2pCQTtBQUFBO0FBQUE7QUFDQSxVQUFJLDhCQUE4QjtBQUVsQyxhQUFPLFVBQVUsU0FBVSxRQUFRLEtBQUssT0FBTyxTQUFTO0FBQ3RELGVBQUksV0FBVyxRQUFRLGFBQVksT0FBTyxHQUFHLElBQUksUUFDNUMsNEJBQTRCLFFBQVEsS0FBSyxLQUFLLEdBQzVDO0FBQUEsTUFDVDtBQUFBO0FBQUE7OztBQ1BBO0FBQUE7QUFBQTtBQUNBLFVBQUksUUFBUSxpQkFDUixhQUFhLHVCQUNiLFdBQVcscUJBQ1gsU0FBUyx5QkFDVCxpQkFBaUIsbUNBQ2pCLGdCQUFnQiwyQkFDaEIsa0JBQWtCLDZCQUNsQixVQUFVLG1CQUVWLFdBQVcsZ0JBQWdCLFVBQVUsR0FDckMseUJBQXlCLElBSXpCLG1CQUFtQixtQ0FBbUM7QUFHMUQsTUFBSSxDQUFDLEVBQUUsU0FDTCxnQkFBZ0IsQ0FBQyxFQUFFLEtBQUssR0FFbEIsVUFBVSxpQkFFZCxvQ0FBb0MsZUFBZSxlQUFlLGFBQWEsQ0FBQyxHQUM1RSxzQ0FBc0MsT0FBTyxjQUFXLG9CQUFvQixzQ0FIbEQseUJBQXlCO0FBTzNELFVBQUkseUJBQXlCLENBQUMsU0FBUyxpQkFBaUIsS0FBSyxNQUFNLFdBQVk7QUFDN0UsWUFBSSxPQUFPLENBQUM7QUFFWixlQUFPLGtCQUFrQixRQUFRLEVBQUUsS0FBSyxJQUFJLE1BQU07QUFBQSxNQUNwRCxDQUFDO0FBRUQsTUFBSSx5QkFBd0Isb0JBQW9CLENBQUMsSUFDeEMsWUFBUyxvQkFBb0IsT0FBTyxpQkFBaUI7QUFJOUQsTUFBSyxXQUFXLGtCQUFrQixRQUFRLENBQUMsS0FDekMsY0FBYyxtQkFBbUIsVUFBVSxXQUFZO0FBQ3JELGVBQU87QUFBQSxNQUNULENBQUM7QUFHSCxhQUFPLFVBQVU7QUFBQSxRQUNmO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQTtBQUFBOzs7QUNoREE7QUFBQTtBQUFBO0FBQ0EsVUFBSSx3QkFBd0IsaUNBQ3hCLFVBQVU7QUFJZCxhQUFPLFVBQVUsd0JBQXdCLENBQUMsRUFBRSxXQUFXLFdBQW9CO0FBQ3pFLGVBQU8sYUFBYSxRQUFRLElBQUksSUFBSTtBQUFBLE1BQ3RDO0FBQUE7QUFBQTs7O0FDUkE7QUFBQTtBQUFBO0FBQ0EsVUFBSSx3QkFBd0IsaUNBQ3hCLGlCQUFpQixpQ0FBK0MsR0FDaEUsOEJBQThCLDBDQUM5QixTQUFTLDRCQUNULFdBQVcsNEJBQ1gsa0JBQWtCLDZCQUVsQixnQkFBZ0IsZ0JBQWdCLGFBQWE7QUFFakQsYUFBTyxVQUFVLFNBQVUsSUFBSSxLQUFLLFFBQVEsWUFBWTtBQUN0RCxZQUFJLFNBQVMsU0FBUyxLQUFLLE1BQU0sR0FBRztBQUNwQyxRQUFJLFdBQ0csT0FBTyxRQUFRLGFBQWEsS0FDL0IsZUFBZSxRQUFRLGVBQWUsRUFBRSxjQUFjLElBQU0sT0FBTyxJQUFJLENBQUMsR0FFdEUsY0FBYyxDQUFDLHlCQUNqQiw0QkFBNEIsUUFBUSxZQUFZLFFBQVE7QUFBQSxNQUc5RDtBQUFBO0FBQUE7OztBQ3BCQTtBQUFBO0FBQUE7QUFDQSxVQUFJLG9CQUFvQix5QkFBdUMsbUJBQzNELFNBQVMseUJBQ1QsMkJBQTJCLHNDQUMzQixpQkFBaUIsNkJBQ2pCLFlBQVkscUJBRVosYUFBYSxXQUFZO0FBQUUsZUFBTztBQUFBLE1BQU07QUFFNUMsYUFBTyxVQUFVLFNBQVUscUJBQXFCLE1BQU0sTUFBTSxpQkFBaUI7QUFDM0UsWUFBSSxnQkFBZ0IsT0FBTztBQUMzQixtQ0FBb0IsWUFBWSxPQUFPLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUMsQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLENBQUMsR0FDckgsZUFBZSxxQkFBcUIsZUFBZSxJQUFPLEVBQUksR0FDOUQsVUFBVSxhQUFhLElBQUksWUFDcEI7QUFBQSxNQUNUO0FBQUE7QUFBQTs7O0FDZkE7QUFBQTtBQUFBO0FBQ0EsVUFBSSxJQUFJLGtCQUNKLE9BQU8seUJBQ1AsVUFBVSxtQkFDVixlQUFlLHlCQUNmLGFBQWEsdUJBQ2IsNEJBQTRCLHVDQUM1QixpQkFBaUIsbUNBQ2pCLGlCQUFpQixtQ0FDakIsaUJBQWlCLDZCQUNqQiw4QkFBOEIsMENBQzlCLGdCQUFnQiwyQkFDaEIsa0JBQWtCLDZCQUNsQixZQUFZLHFCQUNaLGdCQUFnQiwwQkFFaEIsdUJBQXVCLGFBQWEsUUFDcEMsNkJBQTZCLGFBQWEsY0FDMUMsb0JBQW9CLGNBQWMsbUJBQ2xDLHlCQUF5QixjQUFjLHdCQUN2QyxXQUFXLGdCQUFnQixVQUFVLEdBQ3JDLE9BQU8sUUFDUCxTQUFTLFVBQ1QsVUFBVSxXQUVWLGFBQWEsV0FBWTtBQUFFLGVBQU87QUFBQSxNQUFNO0FBRTVDLGFBQU8sVUFBVSxTQUFVLFVBQVUsTUFBTSxxQkFBcUIsTUFBTSxTQUFTLFFBQVEsUUFBUTtBQUM3RixrQ0FBMEIscUJBQXFCLE1BQU0sSUFBSTtBQUV6RCxZQUFJLHFCQUFxQixTQUFVLE1BQU07QUFDdkMsY0FBSSxTQUFTLFdBQVcsZ0JBQWlCLFFBQU87QUFDaEQsY0FBSSxDQUFDLDBCQUEwQixRQUFRLFFBQVEsa0JBQW1CLFFBQU8sa0JBQWtCLElBQUk7QUFFL0Ysa0JBQVEsTUFBTTtBQUFBLFlBQ1osS0FBSztBQUFNLHFCQUFPLFdBQWdCO0FBQUUsdUJBQU8sSUFBSSxvQkFBb0IsTUFBTSxJQUFJO0FBQUEsY0FBRztBQUFBLFlBQ2hGLEtBQUs7QUFBUSxxQkFBTyxXQUFrQjtBQUFFLHVCQUFPLElBQUksb0JBQW9CLE1BQU0sSUFBSTtBQUFBLGNBQUc7QUFBQSxZQUNwRixLQUFLO0FBQVMscUJBQU8sV0FBbUI7QUFBRSx1QkFBTyxJQUFJLG9CQUFvQixNQUFNLElBQUk7QUFBQSxjQUFHO0FBQUEsVUFDeEY7QUFFQSxpQkFBTyxXQUFZO0FBQUUsbUJBQU8sSUFBSSxvQkFBb0IsSUFBSTtBQUFBLFVBQUc7QUFBQSxRQUM3RCxHQUVJLGdCQUFnQixPQUFPLGFBQ3ZCLHdCQUF3QixJQUN4QixvQkFBb0IsU0FBUyxXQUM3QixpQkFBaUIsa0JBQWtCLFFBQVEsS0FDMUMsa0JBQWtCLFlBQVksS0FDOUIsV0FBVyxrQkFBa0IsT0FBTyxHQUNyQyxrQkFBa0IsQ0FBQywwQkFBMEIsa0JBQWtCLG1CQUFtQixPQUFPLEdBQ3pGLG9CQUFvQixTQUFTLFdBQVUsa0JBQWtCLFdBQVcsZ0JBQ3BFLDBCQUEwQixTQUFTO0FBOEJ2QyxZQTNCSSxzQkFDRiwyQkFBMkIsZUFBZSxrQkFBa0IsS0FBSyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQzVFLDZCQUE2QixPQUFPLGFBQWEseUJBQXlCLFNBQ3hFLENBQUMsV0FBVyxlQUFlLHdCQUF3QixNQUFNLHNCQUN2RCxpQkFDRixlQUFlLDBCQUEwQixpQkFBaUIsSUFDaEQsV0FBVyx5QkFBeUIsUUFBUSxDQUFDLEtBQ3ZELGNBQWMsMEJBQTBCLFVBQVUsVUFBVSxJQUloRSxlQUFlLDBCQUEwQixlQUFlLElBQU0sRUFBSSxHQUM5RCxZQUFTLFVBQVUsYUFBYSxJQUFJLGVBS3hDLHdCQUF3QixZQUFZLFVBQVUsa0JBQWtCLGVBQWUsU0FBUyxXQUN0RixDQUFDLFdBQVcsNkJBQ2QsNEJBQTRCLG1CQUFtQixRQUFRLE1BQU0sS0FFN0Qsd0JBQXdCLElBQ3hCLGtCQUFrQixXQUFrQjtBQUFFLGlCQUFPLEtBQUssZ0JBQWdCLElBQUk7QUFBQSxRQUFHLEtBS3pFO0FBTUYsY0FMQSxVQUFVO0FBQUEsWUFDUixRQUFRLG1CQUFtQixNQUFNO0FBQUEsWUFDakMsTUFBTSxTQUFTLGtCQUFrQixtQkFBbUIsSUFBSTtBQUFBLFlBQ3hELFNBQVMsbUJBQW1CLE9BQU87QUFBQSxVQUNyQyxHQUNJLE9BQVEsTUFBSyxPQUFPO0FBQ3RCLGFBQUksMEJBQTBCLHlCQUF5QixFQUFFLE9BQU8sdUJBQzlELGNBQWMsbUJBQW1CLEtBQUssUUFBUSxHQUFHLENBQUM7QUFBQSxjQUUvQyxHQUFFLEVBQUUsUUFBUSxNQUFNLE9BQU8sSUFBTSxRQUFRLDBCQUEwQixzQkFBc0IsR0FBRyxPQUFPO0FBSTFHLGdCQUFLLENBQUMsV0FBVyxXQUFXLGtCQUFrQixRQUFRLE1BQU0sbUJBQzFELGNBQWMsbUJBQW1CLFVBQVUsaUJBQWlCLEVBQUUsTUFBTSxRQUFRLENBQUMsR0FFL0UsVUFBVSxJQUFJLElBQUksaUJBRVg7QUFBQSxNQUNUO0FBQUE7QUFBQTs7O0FDckdBO0FBQUE7QUFBQTtBQUdBLGFBQU8sVUFBVSxTQUFVLE9BQU8sTUFBTTtBQUN0QyxlQUFPLEVBQUUsT0FBYyxLQUFXO0FBQUEsTUFDcEM7QUFBQTtBQUFBOzs7QUNMQTtBQUFBO0FBQUE7QUFDQSxVQUFJLGtCQUFrQiw2QkFDbEIsbUJBQW1CLDhCQUNuQixZQUFZLHFCQUNaLHNCQUFzQiwwQkFDdEIsaUJBQWlCLGlDQUErQyxHQUNoRSxpQkFBaUIsMkJBQ2pCLHlCQUF5QixxQ0FDekIsVUFBVSxtQkFDVixjQUFjLHVCQUVkLGlCQUFpQixrQkFDakIsbUJBQW1CLG9CQUFvQixLQUN2QyxtQkFBbUIsb0JBQW9CLFVBQVUsY0FBYztBQVluRSxhQUFPLFVBQVUsZUFBZSxPQUFPLFNBQVMsU0FBVSxVQUFVLE1BQU07QUFDeEUseUJBQWlCLE1BQU07QUFBQSxVQUNyQixNQUFNO0FBQUEsVUFDTixRQUFRLGdCQUFnQixRQUFRO0FBQUE7QUFBQSxVQUNoQyxPQUFPO0FBQUE7QUFBQSxVQUNQO0FBQUE7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUdILEdBQUcsV0FBWTtBQUNiLFlBQUksUUFBUSxpQkFBaUIsSUFBSSxHQUM3QixTQUFTLE1BQU0sUUFDZixRQUFRLE1BQU07QUFDbEIsWUFBSSxDQUFDLFVBQVUsU0FBUyxPQUFPO0FBQzdCLHVCQUFNLFNBQVMsTUFDUix1QkFBdUIsUUFBVyxFQUFJO0FBRS9DLGdCQUFRLE1BQU0sTUFBTTtBQUFBLFVBQ2xCLEtBQUs7QUFBUSxtQkFBTyx1QkFBdUIsT0FBTyxFQUFLO0FBQUEsVUFDdkQsS0FBSztBQUFVLG1CQUFPLHVCQUF1QixPQUFPLEtBQUssR0FBRyxFQUFLO0FBQUEsUUFDbkU7QUFBRSxlQUFPLHVCQUF1QixDQUFDLE9BQU8sT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFLO0FBQUEsTUFDL0QsR0FBRyxRQUFRO0FBS1gsVUFBSSxTQUFTLFVBQVUsWUFBWSxVQUFVO0FBRzdDLHVCQUFpQixNQUFNO0FBQ3ZCLHVCQUFpQixRQUFRO0FBQ3pCLHVCQUFpQixTQUFTO0FBRzFCLFVBQUksQ0FBQyxXQUFXLGVBQWUsT0FBTyxTQUFTLFNBQVUsS0FBSTtBQUMzRCx1QkFBZSxRQUFRLFFBQVEsRUFBRSxPQUFPLFNBQVMsQ0FBQztBQUFBLE1BQ3BELFFBQWdCO0FBQUEsTUFBYztBQUFBO0FBQUE7OztBQzdEOUI7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUVBLFVBQUlDLGNBQWEsdUJBQ2IsWUFBWSxrQ0FDWixVQUFVLHVCQUVWLHNCQUFzQixTQUFVLFFBQVE7QUFDMUMsZUFBTyxVQUFVLE1BQU0sR0FBRyxPQUFPLE1BQU0sTUFBTTtBQUFBLE1BQy9DO0FBRUEsYUFBTyxXQUFXLFdBQVk7QUFDNUIsZUFBSSxvQkFBb0IsTUFBTSxJQUFVLFFBQ3BDLG9CQUFvQixvQkFBb0IsSUFBVSxlQUNsRCxvQkFBb0IsT0FBTyxJQUFVLFNBQ3JDLG9CQUFvQixVQUFVLElBQVUsU0FDeENBLFlBQVcsT0FBTyxPQUFPLElBQUksV0FBVyxXQUFpQixRQUN6REEsWUFBVyxRQUFRLE9BQU8sS0FBSyxXQUFXLFdBQWlCLFNBQzNELFFBQVFBLFlBQVcsT0FBTyxNQUFNLFlBQWtCLFNBQ2xEQSxZQUFXLFVBQVVBLFlBQVcsV0FBaUIsWUFDOUM7QUFBQSxNQUNULEdBQUc7QUFBQTtBQUFBOzs7QUNwQkg7QUFBQTtBQUFBO0FBQ0EsVUFBSSxjQUFjO0FBRWxCLGFBQU8sVUFBVSxnQkFBZ0I7QUFBQTtBQUFBOzs7QUNIakM7QUFBQTtBQUFBO0FBQ0EsVUFBSSxpQkFBaUI7QUFFckIsYUFBTyxVQUFVLFNBQVUsUUFBUSxNQUFNLFlBQVk7QUFDbkQsZUFBTyxlQUFlLEVBQUUsUUFBUSxNQUFNLFVBQVU7QUFBQSxNQUNsRDtBQUFBO0FBQUE7OztBQ0xBO0FBQUE7QUFBQTtBQUNBLFVBQUksYUFBYSx3QkFDYix3QkFBd0Isb0NBQ3hCLGtCQUFrQiw2QkFDbEIsY0FBYyx1QkFFZCxVQUFVLGdCQUFnQixTQUFTO0FBRXZDLGFBQU8sVUFBVSxTQUFVLGtCQUFrQjtBQUMzQyxZQUFJLGNBQWMsV0FBVyxnQkFBZ0I7QUFFN0MsUUFBSSxlQUFlLGVBQWUsQ0FBQyxZQUFZLE9BQU8sS0FDcEQsc0JBQXNCLGFBQWEsU0FBUztBQUFBLFVBQzFDLGNBQWM7QUFBQSxVQUNkLEtBQUssV0FBWTtBQUFFLG1CQUFPO0FBQUEsVUFBTTtBQUFBLFFBQ2xDLENBQUM7QUFBQSxNQUVMO0FBQUE7QUFBQTs7O0FDakJBO0FBQUE7QUFBQTtBQUNBLFVBQUksZ0JBQWdCLGtDQUVoQixhQUFhO0FBRWpCLGFBQU8sVUFBVSxTQUFVLElBQUksV0FBVztBQUN4QyxZQUFJLGNBQWMsV0FBVyxFQUFFLEVBQUcsUUFBTztBQUN6QyxjQUFNLElBQUksV0FBVyxzQkFBc0I7QUFBQSxNQUM3QztBQUFBO0FBQUE7OztBQ1JBO0FBQUE7QUFBQTtBQUNBLFVBQUksY0FBYyxpQ0FDZCxhQUFhLHVCQUNiLFFBQVEsd0JBRVIsbUJBQW1CLFlBQVksU0FBUyxRQUFRO0FBR3BELE1BQUssV0FBVyxNQUFNLGFBQWEsTUFDakMsTUFBTSxnQkFBZ0IsU0FBVSxJQUFJO0FBQ2xDLGVBQU8saUJBQWlCLEVBQUU7QUFBQSxNQUM1QjtBQUdGLGFBQU8sVUFBVSxNQUFNO0FBQUE7QUFBQTs7O0FDZHZCO0FBQUE7QUFBQTtBQUNBLFVBQUksY0FBYyxpQ0FDZCxRQUFRLGlCQUNSLGFBQWEsdUJBQ2IsVUFBVSxtQkFDVixhQUFhLHdCQUNiLGdCQUFnQiwwQkFFaEIsT0FBTyxXQUFZO0FBQUEsTUFBYyxHQUNqQyxZQUFZLFdBQVcsV0FBVyxXQUFXLEdBQzdDLG9CQUFvQiw0QkFDcEIsT0FBTyxZQUFZLGtCQUFrQixJQUFJLEdBQ3pDLHNCQUFzQixDQUFDLGtCQUFrQixLQUFLLElBQUksR0FFbEQsc0JBQXNCLFNBQXVCLFVBQVU7QUFDekQsWUFBSSxDQUFDLFdBQVcsUUFBUSxFQUFHLFFBQU87QUFDbEMsWUFBSTtBQUNGLDJCQUFVLE1BQU0sQ0FBQyxHQUFHLFFBQVEsR0FDckI7QUFBQSxRQUNULFFBQWdCO0FBQ2QsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRixHQUVJLHNCQUFzQixTQUF1QixVQUFVO0FBQ3pELFlBQUksQ0FBQyxXQUFXLFFBQVEsRUFBRyxRQUFPO0FBQ2xDLGdCQUFRLFFBQVEsUUFBUSxHQUFHO0FBQUEsVUFDekIsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUEwQixtQkFBTztBQUFBLFFBQ3hDO0FBQ0EsWUFBSTtBQUlGLGlCQUFPLHVCQUF1QixDQUFDLENBQUMsS0FBSyxtQkFBbUIsY0FBYyxRQUFRLENBQUM7QUFBQSxRQUNqRixRQUFnQjtBQUNkLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFFQSwwQkFBb0IsT0FBTztBQUkzQixhQUFPLFVBQVUsQ0FBQyxhQUFhLE1BQU0sV0FBWTtBQUMvQyxZQUFJO0FBQ0osZUFBTyxvQkFBb0Isb0JBQW9CLElBQUksS0FDOUMsQ0FBQyxvQkFBb0IsTUFBTSxLQUMzQixDQUFDLG9CQUFvQixXQUFZO0FBQUUsbUJBQVM7QUFBQSxRQUFNLENBQUMsS0FDbkQ7QUFBQSxNQUNQLENBQUMsSUFBSSxzQkFBc0I7QUFBQTtBQUFBOzs7QUNuRDNCO0FBQUE7QUFBQTtBQUNBLFVBQUksZ0JBQWdCLDBCQUNoQixjQUFjLHlCQUVkLGFBQWE7QUFHakIsYUFBTyxVQUFVLFNBQVUsVUFBVTtBQUNuQyxZQUFJLGNBQWMsUUFBUSxFQUFHLFFBQU87QUFDcEMsY0FBTSxJQUFJLFdBQVcsWUFBWSxRQUFRLElBQUksdUJBQXVCO0FBQUEsTUFDdEU7QUFBQTtBQUFBOzs7QUNWQTtBQUFBO0FBQUE7QUFDQSxVQUFJLFdBQVcscUJBQ1gsZUFBZSx5QkFDZixvQkFBb0IsZ0NBQ3BCLGtCQUFrQiw2QkFFbEIsVUFBVSxnQkFBZ0IsU0FBUztBQUl2QyxhQUFPLFVBQVUsU0FBVSxHQUFHLG9CQUFvQjtBQUNoRCxZQUFJLElBQUksU0FBUyxDQUFDLEVBQUUsYUFDaEI7QUFDSixlQUFPLE1BQU0sVUFBYSxrQkFBa0IsSUFBSSxTQUFTLENBQUMsRUFBRSxPQUFPLENBQUMsSUFBSSxxQkFBcUIsYUFBYSxDQUFDO0FBQUEsTUFDN0c7QUFBQTtBQUFBOzs7QUNkQTtBQUFBO0FBQUE7QUFDQSxVQUFJLGNBQWM7QUFFbEIsYUFBTyxVQUFVLFlBQVksQ0FBQyxFQUFFLEtBQUs7QUFBQTtBQUFBOzs7QUNIckM7QUFBQTtBQUFBO0FBQ0EsVUFBSSxhQUFhO0FBRWpCLGFBQU8sVUFBVSxTQUFVLFFBQVEsVUFBVTtBQUMzQyxZQUFJLFNBQVMsU0FBVSxPQUFNLElBQUksV0FBVyxzQkFBc0I7QUFDbEUsZUFBTztBQUFBLE1BQ1Q7QUFBQTtBQUFBOzs7QUNOQTtBQUFBO0FBQUE7QUFDQSxVQUFJLFlBQVk7QUFFaEIsYUFBTyxVQUFVLG9CQUFvQixLQUFLLFNBQVMsS0FBSyxlQUFlLEtBQUssU0FBUztBQUFBO0FBQUE7OztBQ0hyRjtBQUFBO0FBQUE7QUFDQSxVQUFJQyxjQUFhLHVCQUNiLFFBQVEsMEJBQ1IsT0FBTyxpQ0FDUCxhQUFhLHVCQUNiLFNBQVMsNEJBQ1QsUUFBUSxpQkFDUixPQUFPLGdCQUNQLGFBQWEsdUJBQ2IsZ0JBQWdCLG1DQUNoQiwwQkFBMEIscUNBQzFCLFNBQVMsOEJBQ1QsVUFBVSwrQkFFVixNQUFNQSxZQUFXLGNBQ2pCLFFBQVFBLFlBQVcsZ0JBQ25CLFVBQVVBLFlBQVcsU0FDckIsV0FBV0EsWUFBVyxVQUN0QkMsWUFBV0QsWUFBVyxVQUN0QixpQkFBaUJBLFlBQVcsZ0JBQzVCRSxVQUFTRixZQUFXLFFBQ3BCLFVBQVUsR0FDVixRQUFRLENBQUMsR0FDVCxxQkFBcUIsc0JBQ3JCLFdBQVcsT0FBTyxTQUFTO0FBRS9CLFlBQU0sV0FBWTtBQUVoQixvQkFBWUEsWUFBVztBQUFBLE1BQ3pCLENBQUM7QUFFRCxVQUFJRyxPQUFNLFNBQVUsSUFBSTtBQUN0QixZQUFJLE9BQU8sT0FBTyxFQUFFLEdBQUc7QUFDckIsY0FBSSxLQUFLLE1BQU0sRUFBRTtBQUNqQixpQkFBTyxNQUFNLEVBQUUsR0FDZixHQUFHO0FBQUEsUUFDTDtBQUFBLE1BQ0YsR0FFSSxTQUFTLFNBQVUsSUFBSTtBQUN6QixlQUFPLFdBQVk7QUFDakIsVUFBQUEsS0FBSSxFQUFFO0FBQUEsUUFDUjtBQUFBLE1BQ0YsR0FFSSxnQkFBZ0IsU0FBVSxPQUFPO0FBQ25DLFFBQUFBLEtBQUksTUFBTSxJQUFJO0FBQUEsTUFDaEIsR0FFSSx5QkFBeUIsU0FBVSxJQUFJO0FBRXpDLFFBQUFILFlBQVcsWUFBWUUsUUFBTyxFQUFFLEdBQUcsVUFBVSxXQUFXLE9BQU8sVUFBVSxJQUFJO0FBQUEsTUFDL0U7QUFHQSxPQUFJLENBQUMsT0FBTyxDQUFDLFdBQ1gsTUFBTSxTQUFzQixTQUFTO0FBQ25DLGdDQUF3QixVQUFVLFFBQVEsQ0FBQztBQUMzQyxZQUFJLEtBQUssV0FBVyxPQUFPLElBQUksVUFBVUQsVUFBUyxPQUFPLEdBQ3JELE9BQU8sV0FBVyxXQUFXLENBQUM7QUFDbEMscUJBQU0sRUFBRSxPQUFPLElBQUksV0FBWTtBQUM3QixnQkFBTSxJQUFJLFFBQVcsSUFBSTtBQUFBLFFBQzNCLEdBQ0EsTUFBTSxPQUFPLEdBQ047QUFBQSxNQUNULEdBQ0EsUUFBUSxTQUF3QixJQUFJO0FBQ2xDLGVBQU8sTUFBTSxFQUFFO0FBQUEsTUFDakIsR0FFSSxVQUNGLFFBQVEsU0FBVSxJQUFJO0FBQ3BCLGdCQUFRLFNBQVMsT0FBTyxFQUFFLENBQUM7QUFBQSxNQUM3QixJQUVTLFlBQVksU0FBUyxNQUM5QixRQUFRLFNBQVUsSUFBSTtBQUNwQixpQkFBUyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQUEsTUFDekIsSUFHUyxrQkFBa0IsQ0FBQyxVQUM1QixVQUFVLElBQUksZUFBZSxHQUM3QixPQUFPLFFBQVEsT0FDZixRQUFRLE1BQU0sWUFBWSxlQUMxQixRQUFRLEtBQUssS0FBSyxhQUFhLElBQUksS0FJbkNELFlBQVcsb0JBQ1gsV0FBV0EsWUFBVyxXQUFXLEtBQ2pDLENBQUNBLFlBQVcsaUJBQ1osYUFBYSxVQUFVLGFBQWEsV0FDcEMsQ0FBQyxNQUFNLHNCQUFzQixLQUU3QixRQUFRLHdCQUNSQSxZQUFXLGlCQUFpQixXQUFXLGVBQWUsRUFBSyxLQUVsRCxzQkFBc0IsY0FBYyxRQUFRLElBQ3JELFFBQVEsU0FBVSxJQUFJO0FBQ3BCLGFBQUssWUFBWSxjQUFjLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixJQUFJLFdBQVk7QUFDMUUsZUFBSyxZQUFZLElBQUksR0FDckJHLEtBQUksRUFBRTtBQUFBLFFBQ1I7QUFBQSxNQUNGLElBR0EsUUFBUSxTQUFVLElBQUk7QUFDcEIsbUJBQVcsT0FBTyxFQUFFLEdBQUcsQ0FBQztBQUFBLE1BQzFCO0FBSUosYUFBTyxVQUFVO0FBQUEsUUFDZjtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUE7QUFBQTs7O0FDcEhBO0FBQUE7QUFBQTtBQUNBLFVBQUlDLGNBQWEsdUJBQ2IsY0FBYyx1QkFHZCwyQkFBMkIsT0FBTztBQUd0QyxhQUFPLFVBQVUsU0FBVSxNQUFNO0FBQy9CLFlBQUksQ0FBQyxZQUFhLFFBQU9BLFlBQVcsSUFBSTtBQUN4QyxZQUFJLGFBQWEseUJBQXlCQSxhQUFZLElBQUk7QUFDMUQsZUFBTyxjQUFjLFdBQVc7QUFBQSxNQUNsQztBQUFBO0FBQUE7OztBQ1pBO0FBQUE7QUFBQTtBQUNBLFVBQUksUUFBUSxXQUFZO0FBQ3RCLGFBQUssT0FBTyxNQUNaLEtBQUssT0FBTztBQUFBLE1BQ2Q7QUFFQSxZQUFNLFlBQVk7QUFBQSxRQUNoQixLQUFLLFNBQVUsTUFBTTtBQUNuQixjQUFJLFFBQVEsRUFBRSxNQUFZLE1BQU0sS0FBSyxHQUNqQyxPQUFPLEtBQUs7QUFDaEIsVUFBSSxPQUFNLEtBQUssT0FBTyxRQUNqQixLQUFLLE9BQU8sT0FDakIsS0FBSyxPQUFPO0FBQUEsUUFDZDtBQUFBLFFBQ0EsS0FBSyxXQUFZO0FBQ2YsY0FBSSxRQUFRLEtBQUs7QUFDakIsY0FBSSxPQUFPO0FBQ1QsZ0JBQUksT0FBTyxLQUFLLE9BQU8sTUFBTTtBQUM3QixtQkFBSSxTQUFTLFNBQU0sS0FBSyxPQUFPLE9BQ3hCLE1BQU07QUFBQSxVQUNmO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFFQSxhQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUN4QmpCO0FBQUE7QUFBQTtBQUNBLFVBQUksWUFBWTtBQUVoQixhQUFPLFVBQVUsb0JBQW9CLEtBQUssU0FBUyxLQUFLLE9BQU8sU0FBVTtBQUFBO0FBQUE7OztBQ0h6RTtBQUFBO0FBQUE7QUFDQSxVQUFJLFlBQVk7QUFFaEIsYUFBTyxVQUFVLHFCQUFxQixLQUFLLFNBQVM7QUFBQTtBQUFBOzs7QUNIcEQ7QUFBQTtBQUFBO0FBQ0EsVUFBSUMsY0FBYSx1QkFDYixpQkFBaUIsNkJBQ2pCLE9BQU8saUNBQ1AsWUFBWSxlQUE2QixLQUN6QyxRQUFRLGlCQUNSLFNBQVMsOEJBQ1QsZ0JBQWdCLHFDQUNoQixrQkFBa0IsdUNBQ2xCLFVBQVUsK0JBRVZDLG9CQUFtQkQsWUFBVyxvQkFBb0JBLFlBQVcsd0JBQzdERSxZQUFXRixZQUFXLFVBQ3RCLFVBQVVBLFlBQVcsU0FDckJHLFdBQVVILFlBQVcsU0FDckIsWUFBWSxlQUFlLGdCQUFnQixHQUMzQyxRQUFRLFFBQVEsTUFBTSxTQUFTO0FBR25DLE1BQUssY0FDQyxRQUFRLElBQUksTUFBTSxHQUVsQixRQUFRLFdBQVk7QUFDdEIsWUFBSSxRQUFRO0FBRVosYUFESSxZQUFZLFNBQVMsUUFBUSxXQUFTLE9BQU8sS0FBSyxHQUMvQyxLQUFLLE1BQU0sSUFBSSxJQUFHLEtBQUk7QUFDM0IsYUFBRztBQUFBLFFBQ0wsU0FBUyxPQUFPO0FBQ2QsZ0JBQUksTUFBTSxRQUFNLE9BQU8sR0FDakI7QUFBQSxRQUNSO0FBQ0EsUUFBSSxVQUFRLE9BQU8sTUFBTTtBQUFBLE1BQzNCLEdBSUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLG1CQUFtQkMscUJBQW9CQyxhQUNqRSxTQUFTLElBQ1QsT0FBT0EsVUFBUyxlQUFlLEVBQUUsR0FDakMsSUFBSUQsa0JBQWlCLEtBQUssRUFBRSxRQUFRLE1BQU0sRUFBRSxlQUFlLEdBQUssQ0FBQyxHQUNqRSxTQUFTLFdBQVk7QUFDbkIsYUFBSyxPQUFPLFNBQVMsQ0FBQztBQUFBLE1BQ3hCLEtBRVMsQ0FBQyxpQkFBaUJFLFlBQVdBLFNBQVEsV0FFOUMsVUFBVUEsU0FBUSxRQUFRLE1BQVMsR0FFbkMsUUFBUSxjQUFjQSxVQUN0QixPQUFPLEtBQUssUUFBUSxNQUFNLE9BQU8sR0FDakMsU0FBUyxXQUFZO0FBQ25CLGFBQUssS0FBSztBQUFBLE1BQ1osS0FFUyxVQUNULFNBQVMsV0FBWTtBQUNuQixnQkFBUSxTQUFTLEtBQUs7QUFBQSxNQUN4QixLQVNBLFlBQVksS0FBSyxXQUFXSCxXQUFVLEdBQ3RDLFNBQVMsV0FBWTtBQUNuQixrQkFBVSxLQUFLO0FBQUEsTUFDakIsSUFHRixZQUFZLFNBQVUsSUFBSTtBQUN4QixRQUFLLE1BQU0sUUFBTSxPQUFPLEdBQ3hCLE1BQU0sSUFBSSxFQUFFO0FBQUEsTUFDZDtBQXZESSxpQkFFQTtBQXdETixhQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUM5RWpCO0FBQUE7QUFBQTtBQUNBLGFBQU8sVUFBVSxTQUFVLEdBQUcsR0FBRztBQUMvQixZQUFJO0FBRUYsb0JBQVUsV0FBVyxJQUFJLFFBQVEsTUFBTSxDQUFDLElBQUksUUFBUSxNQUFNLEdBQUcsQ0FBQztBQUFBLFFBQ2hFLFFBQWdCO0FBQUEsUUFBYztBQUFBLE1BQ2hDO0FBQUE7QUFBQTs7O0FDTkE7QUFBQTtBQUFBO0FBQ0EsYUFBTyxVQUFVLFNBQVUsTUFBTTtBQUMvQixZQUFJO0FBQ0YsaUJBQU8sRUFBRSxPQUFPLElBQU8sT0FBTyxLQUFLLEVBQUU7QUFBQSxRQUN2QyxTQUFTLE9BQU87QUFDZCxpQkFBTyxFQUFFLE9BQU8sSUFBTSxPQUFPLE1BQU07QUFBQSxRQUNyQztBQUFBLE1BQ0Y7QUFBQTtBQUFBOzs7QUNQQTtBQUFBO0FBQUE7QUFDQSxVQUFJSSxjQUFhO0FBRWpCLGFBQU8sVUFBVUEsWUFBVztBQUFBO0FBQUE7OztBQ0g1QjtBQUFBO0FBQUE7QUFDQSxVQUFJQyxjQUFhLHVCQUNiLDJCQUEyQixzQ0FDM0IsYUFBYSx1QkFDYixXQUFXLHFCQUNYLGdCQUFnQiwwQkFDaEIsa0JBQWtCLDZCQUNsQixjQUFjLHVCQUNkLFVBQVUsbUJBQ1YsYUFBYSxrQ0FFYix5QkFBeUIsNEJBQTRCLHlCQUF5QixXQUM5RSxVQUFVLGdCQUFnQixTQUFTLEdBQ25DLGNBQWMsSUFDZCxpQ0FBaUMsV0FBV0EsWUFBVyxxQkFBcUIsR0FFNUUsNkJBQTZCLFNBQVMsV0FBVyxXQUFZO0FBQy9ELFlBQUksNkJBQTZCLGNBQWMsd0JBQXdCLEdBQ25FLHlCQUF5QiwrQkFBK0IsT0FBTyx3QkFBd0I7QUFNM0YsWUFGSSxDQUFDLDBCQUEwQixlQUFlLE1BRTFDLFdBQVcsRUFBRSx1QkFBdUIsU0FBWSx1QkFBdUIsU0FBYSxRQUFPO0FBSS9GLFlBQUksQ0FBQyxjQUFjLGFBQWEsTUFBTSxDQUFDLGNBQWMsS0FBSywwQkFBMEIsR0FBRztBQUVyRixjQUFJLFVBQVUsSUFBSSx5QkFBeUIsU0FBVSxTQUFTO0FBQUUsb0JBQVEsQ0FBQztBQUFBLFVBQUcsQ0FBQyxHQUN6RSxjQUFjLFNBQVUsTUFBTTtBQUNoQyxpQkFBSyxXQUFZO0FBQUEsWUFBYyxHQUFHLFdBQVk7QUFBQSxZQUFjLENBQUM7QUFBQSxVQUMvRCxHQUNJLGNBQWMsUUFBUSxjQUFjLENBQUM7QUFHekMsY0FGQSxZQUFZLE9BQU8sSUFBSSxhQUN2QixjQUFjLFFBQVEsS0FBSyxXQUFZO0FBQUEsVUFBYyxDQUFDLGFBQWEsYUFDL0QsQ0FBQyxZQUFhLFFBQU87QUFBQSxRQUUzQjtBQUFFLGVBQU8sQ0FBQywyQkFBMkIsZ0JBQWdCLGFBQWEsZ0JBQWdCLFdBQVcsQ0FBQztBQUFBLE1BQ2hHLENBQUM7QUFFRCxhQUFPLFVBQVU7QUFBQSxRQUNmLGFBQWE7QUFBQSxRQUNiLGlCQUFpQjtBQUFBLFFBQ2pCO0FBQUEsTUFDRjtBQUFBO0FBQUE7OztBQzlDQTtBQUFBO0FBQUE7QUFDQSxVQUFJLFlBQVksc0JBRVosYUFBYSxXQUViLG9CQUFvQixTQUFVLEdBQUc7QUFDbkMsWUFBSSxTQUFTO0FBQ2IsYUFBSyxVQUFVLElBQUksRUFBRSxTQUFVLFdBQVcsVUFBVTtBQUNsRCxjQUFJLFlBQVksVUFBYSxXQUFXLE9BQVcsT0FBTSxJQUFJLFdBQVcseUJBQXlCO0FBQ2pHLG9CQUFVLFdBQ1YsU0FBUztBQUFBLFFBQ1gsQ0FBQyxHQUNELEtBQUssVUFBVSxVQUFVLE9BQU8sR0FDaEMsS0FBSyxTQUFTLFVBQVUsTUFBTTtBQUFBLE1BQ2hDO0FBSUEsYUFBTyxRQUFRLElBQUksU0FBVSxHQUFHO0FBQzlCLGVBQU8sSUFBSSxrQkFBa0IsQ0FBQztBQUFBLE1BQ2hDO0FBQUE7QUFBQTs7O0FDcEJBO0FBQUE7QUFBQTtBQUNBLFVBQUksSUFBSSxrQkFDSixVQUFVLG1CQUNWLFVBQVUsK0JBQ1ZDLGNBQWEsdUJBQ2IsT0FBTyxnQkFDUCxPQUFPLHlCQUNQLGdCQUFnQiwyQkFDaEIsaUJBQWlCLG1DQUNqQixpQkFBaUIsNkJBQ2pCLGFBQWEsdUJBQ2IsWUFBWSxzQkFDWixhQUFhLHVCQUNiLFdBQVcscUJBQ1gsYUFBYSx1QkFDYixxQkFBcUIsK0JBQ3JCLE9BQU8sZUFBNkIsS0FDcEMsWUFBWSxxQkFDWixtQkFBbUIsOEJBQ25CLFVBQVUsbUJBQ1YsUUFBUSxpQkFDUixzQkFBc0IsMEJBQ3RCLDJCQUEyQixzQ0FDM0IsOEJBQThCLHlDQUM5Qiw2QkFBNkIsa0NBRTdCLFVBQVUsV0FDViw2QkFBNkIsNEJBQTRCLGFBQ3pELGlDQUFpQyw0QkFBNEIsaUJBQzdELDZCQUE2Qiw0QkFBNEIsYUFDekQsMEJBQTBCLG9CQUFvQixVQUFVLE9BQU8sR0FDL0QsbUJBQW1CLG9CQUFvQixLQUN2Qyx5QkFBeUIsNEJBQTRCLHlCQUF5QixXQUM5RSxxQkFBcUIsMEJBQ3JCLG1CQUFtQix3QkFDbkJDLGFBQVlELFlBQVcsV0FDdkJFLFlBQVdGLFlBQVcsVUFDdEIsVUFBVUEsWUFBVyxTQUNyQix1QkFBdUIsMkJBQTJCLEdBQ2xELDhCQUE4QixzQkFFOUIsaUJBQWlCLENBQUMsRUFBRUUsYUFBWUEsVUFBUyxlQUFlRixZQUFXLGdCQUNuRSxzQkFBc0Isc0JBQ3RCLG9CQUFvQixvQkFDcEIsVUFBVSxHQUNWLFlBQVksR0FDWixXQUFXLEdBQ1gsVUFBVSxHQUNWLFlBQVksR0FFWixVQUFVLHNCQUFzQixnQkFBZ0IsWUFHaEQsYUFBYSxTQUFVLElBQUk7QUFDN0IsWUFBSTtBQUNKLGVBQU8sU0FBUyxFQUFFLEtBQUssV0FBVyxPQUFPLEdBQUcsSUFBSSxJQUFJLE9BQU87QUFBQSxNQUM3RCxHQUVJLGVBQWUsU0FBVSxVQUFVLE9BQU87QUFDNUMsWUFBSSxRQUFRLE1BQU0sT0FDZCxLQUFLLE1BQU0sVUFBVSxXQUNyQixVQUFVLEtBQUssU0FBUyxLQUFLLFNBQVMsTUFDdEMsVUFBVSxTQUFTLFNBQ25CLFNBQVMsU0FBUyxRQUNsQixTQUFTLFNBQVMsUUFDbEIsUUFBUSxNQUFNO0FBQ2xCLFlBQUk7QUFDRixVQUFJLFdBQ0csT0FDQyxNQUFNLGNBQWMsYUFBVyxrQkFBa0IsS0FBSyxHQUMxRCxNQUFNLFlBQVksVUFFaEIsWUFBWSxLQUFNLFNBQVMsU0FFekIsVUFBUSxPQUFPLE1BQU0sR0FDekIsU0FBUyxRQUFRLEtBQUssR0FDbEIsV0FDRixPQUFPLEtBQUssR0FDWixTQUFTLE1BR1QsV0FBVyxTQUFTLFVBQ3RCLE9BQU8sSUFBSUMsV0FBVSxxQkFBcUIsQ0FBQyxLQUNsQyxPQUFPLFdBQVcsTUFBTSxLQUNqQyxLQUFLLE1BQU0sUUFBUSxTQUFTLE1BQU0sSUFDN0IsUUFBUSxNQUFNLEtBQ2hCLE9BQU8sS0FBSztBQUFBLFFBQ3JCLFNBQVMsT0FBTztBQUNkLFVBQUksVUFBVSxDQUFDLFVBQVEsT0FBTyxLQUFLLEdBQ25DLE9BQU8sS0FBSztBQUFBLFFBQ2Q7QUFBQSxNQUNGLEdBRUksU0FBUyxTQUFVLE9BQU8sVUFBVTtBQUN0QyxRQUFJLE1BQU0sYUFDVixNQUFNLFdBQVcsSUFDakIsVUFBVSxXQUFZO0FBR3BCLG1CQUZJLFlBQVksTUFBTSxXQUNsQixVQUNHLFdBQVcsVUFBVSxJQUFJO0FBQzlCLHlCQUFhLFVBQVUsS0FBSztBQUU5QixnQkFBTSxXQUFXLElBQ2IsWUFBWSxDQUFDLE1BQU0sYUFBVyxZQUFZLEtBQUs7QUFBQSxRQUNyRCxDQUFDO0FBQUEsTUFDSCxHQUVJLGdCQUFnQixTQUFVLE1BQU0sU0FBUyxRQUFRO0FBQ25ELFlBQUksT0FBTztBQUNYLFFBQUksa0JBQ0YsUUFBUUMsVUFBUyxZQUFZLE9BQU8sR0FDcEMsTUFBTSxVQUFVLFNBQ2hCLE1BQU0sU0FBUyxRQUNmLE1BQU0sVUFBVSxNQUFNLElBQU8sRUFBSSxHQUNqQ0YsWUFBVyxjQUFjLEtBQUssS0FDekIsUUFBUSxFQUFFLFNBQWtCLE9BQWUsR0FDOUMsQ0FBQyxtQ0FBbUMsVUFBVUEsWUFBVyxPQUFPLElBQUksS0FBSSxRQUFRLEtBQUssSUFDaEYsU0FBUyx1QkFBcUIsaUJBQWlCLCtCQUErQixNQUFNO0FBQUEsTUFDL0YsR0FFSSxjQUFjLFNBQVUsT0FBTztBQUNqQyxhQUFLLE1BQU1BLGFBQVksV0FBWTtBQUNqQyxjQUFJLFVBQVUsTUFBTSxRQUNoQixRQUFRLE1BQU0sT0FDZCxlQUFlLFlBQVksS0FBSyxHQUNoQztBQUNKLGNBQUksaUJBQ0YsU0FBUyxRQUFRLFdBQVk7QUFDM0IsWUFBSSxVQUNGLFFBQVEsS0FBSyxzQkFBc0IsT0FBTyxPQUFPLElBQzVDLGNBQWMscUJBQXFCLFNBQVMsS0FBSztBQUFBLFVBQzFELENBQUMsR0FFRCxNQUFNLFlBQVksV0FBVyxZQUFZLEtBQUssSUFBSSxZQUFZLFNBQzFELE9BQU87QUFBTyxrQkFBTSxPQUFPO0FBQUEsUUFFbkMsQ0FBQztBQUFBLE1BQ0gsR0FFSSxjQUFjLFNBQVUsT0FBTztBQUNqQyxlQUFPLE1BQU0sY0FBYyxXQUFXLENBQUMsTUFBTTtBQUFBLE1BQy9DLEdBRUksb0JBQW9CLFNBQVUsT0FBTztBQUN2QyxhQUFLLE1BQU1BLGFBQVksV0FBWTtBQUNqQyxjQUFJLFVBQVUsTUFBTTtBQUNwQixVQUFJLFVBQ0YsUUFBUSxLQUFLLG9CQUFvQixPQUFPLElBQ25DLGNBQWMsbUJBQW1CLFNBQVMsTUFBTSxLQUFLO0FBQUEsUUFDOUQsQ0FBQztBQUFBLE1BQ0gsR0FFSSxPQUFPLFNBQVUsSUFBSSxPQUFPLFFBQVE7QUFDdEMsZUFBTyxTQUFVLE9BQU87QUFDdEIsYUFBRyxPQUFPLE9BQU8sTUFBTTtBQUFBLFFBQ3pCO0FBQUEsTUFDRixHQUVJLGlCQUFpQixTQUFVLE9BQU8sT0FBTyxRQUFRO0FBQ25ELFFBQUksTUFBTSxTQUNWLE1BQU0sT0FBTyxJQUNULFdBQVEsUUFBUSxTQUNwQixNQUFNLFFBQVEsT0FDZCxNQUFNLFFBQVEsVUFDZCxPQUFPLE9BQU8sRUFBSTtBQUFBLE1BQ3BCLEdBRUksa0JBQWtCLFNBQVUsT0FBTyxPQUFPLFFBQVE7QUFDcEQsWUFBSSxPQUFNLE1BQ1Y7QUFBQSxnQkFBTSxPQUFPLElBQ1QsV0FBUSxRQUFRO0FBQ3BCLGNBQUk7QUFDRixnQkFBSSxNQUFNLFdBQVcsTUFBTyxPQUFNLElBQUlDLFdBQVUsa0NBQWtDO0FBQ2xGLGdCQUFJLE9BQU8sV0FBVyxLQUFLO0FBQzNCLFlBQUksT0FDRixVQUFVLFdBQVk7QUFDcEIsa0JBQUksVUFBVSxFQUFFLE1BQU0sR0FBTTtBQUM1QixrQkFBSTtBQUNGO0FBQUEsa0JBQUs7QUFBQSxrQkFBTTtBQUFBLGtCQUNULEtBQUssaUJBQWlCLFNBQVMsS0FBSztBQUFBLGtCQUNwQyxLQUFLLGdCQUFnQixTQUFTLEtBQUs7QUFBQSxnQkFDckM7QUFBQSxjQUNGLFNBQVMsT0FBTztBQUNkLCtCQUFlLFNBQVMsT0FBTyxLQUFLO0FBQUEsY0FDdEM7QUFBQSxZQUNGLENBQUMsS0FFRCxNQUFNLFFBQVEsT0FDZCxNQUFNLFFBQVEsV0FDZCxPQUFPLE9BQU8sRUFBSztBQUFBLFVBRXZCLFNBQVMsT0FBTztBQUNkLDJCQUFlLEVBQUUsTUFBTSxHQUFNLEdBQUcsT0FBTyxLQUFLO0FBQUEsVUFDOUM7QUFBQTtBQUFBLE1BQ0Y7QUFHQSxVQUFJLCtCQUVGLHFCQUFxQixTQUFpQixVQUFVO0FBQzlDLG1CQUFXLE1BQU0sZ0JBQWdCLEdBQ2pDLFVBQVUsUUFBUSxHQUNsQixLQUFLLFVBQVUsSUFBSTtBQUNuQixZQUFJLFFBQVEsd0JBQXdCLElBQUk7QUFDeEMsWUFBSTtBQUNGLG1CQUFTLEtBQUssaUJBQWlCLEtBQUssR0FBRyxLQUFLLGdCQUFnQixLQUFLLENBQUM7QUFBQSxRQUNwRSxTQUFTLE9BQU87QUFDZCx5QkFBZSxPQUFPLEtBQUs7QUFBQSxRQUM3QjtBQUFBLE1BQ0YsR0FFQSxtQkFBbUIsbUJBQW1CLFdBR3RDLFdBQVcsU0FBaUIsVUFBVTtBQUNwQyx5QkFBaUIsTUFBTTtBQUFBLFVBQ3JCLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLFFBQVE7QUFBQSxVQUNSLFdBQVcsSUFBSSxNQUFNO0FBQUEsVUFDckIsV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFVBQ1AsT0FBTztBQUFBLFFBQ1QsQ0FBQztBQUFBLE1BQ0gsR0FJQSxTQUFTLFlBQVksY0FBYyxrQkFBa0IsUUFBUSxTQUFjLGFBQWEsWUFBWTtBQUNsRyxZQUFJLFFBQVEsd0JBQXdCLElBQUksR0FDcEMsV0FBVyxxQkFBcUIsbUJBQW1CLE1BQU0sa0JBQWtCLENBQUM7QUFDaEYscUJBQU0sU0FBUyxJQUNmLFNBQVMsS0FBSyxXQUFXLFdBQVcsSUFBSSxjQUFjLElBQ3RELFNBQVMsT0FBTyxXQUFXLFVBQVUsS0FBSyxZQUMxQyxTQUFTLFNBQVMsVUFBVSxRQUFRLFNBQVMsUUFDekMsTUFBTSxVQUFVLFVBQVMsTUFBTSxVQUFVLElBQUksUUFBUSxJQUNwRCxVQUFVLFdBQVk7QUFDekIsdUJBQWEsVUFBVSxLQUFLO0FBQUEsUUFDOUIsQ0FBQyxHQUNNLFNBQVM7QUFBQSxNQUNsQixDQUFDLEdBRUQsdUJBQXVCLFdBQVk7QUFDakMsWUFBSSxVQUFVLElBQUksU0FBUyxHQUN2QixRQUFRLHdCQUF3QixPQUFPO0FBQzNDLGFBQUssVUFBVSxTQUNmLEtBQUssVUFBVSxLQUFLLGlCQUFpQixLQUFLLEdBQzFDLEtBQUssU0FBUyxLQUFLLGdCQUFnQixLQUFLO0FBQUEsTUFDMUMsR0FFQSwyQkFBMkIsSUFBSSx1QkFBdUIsU0FBVSxHQUFHO0FBQ2pFLGVBQU8sTUFBTSxzQkFBc0IsTUFBTSxpQkFDckMsSUFBSSxxQkFBcUIsQ0FBQyxJQUMxQiw0QkFBNEIsQ0FBQztBQUFBLE1BQ25DLEdBRUksQ0FBQyxXQUFXLFdBQVcsd0JBQXdCLEtBQUssMkJBQTJCLE9BQU8sWUFBVztBQUNuRyxxQkFBYSx1QkFBdUIsTUFFL0IsOEJBRUgsY0FBYyx3QkFBd0IsUUFBUSxTQUFjLGFBQWEsWUFBWTtBQUNuRixjQUFJLE9BQU87QUFDWCxpQkFBTyxJQUFJLG1CQUFtQixTQUFVLFNBQVMsUUFBUTtBQUN2RCxpQkFBSyxZQUFZLE1BQU0sU0FBUyxNQUFNO0FBQUEsVUFDeEMsQ0FBQyxFQUFFLEtBQUssYUFBYSxVQUFVO0FBQUEsUUFFakMsR0FBRyxFQUFFLFFBQVEsR0FBSyxDQUFDO0FBSXJCLFlBQUk7QUFDRixpQkFBTyx1QkFBdUI7QUFBQSxRQUNoQyxRQUFnQjtBQUFBLFFBQWM7QUFHOUIsUUFBSSxrQkFDRixlQUFlLHdCQUF3QixnQkFBZ0I7QUFBQSxNQUUzRDtBQUtGLFFBQUUsRUFBRSxRQUFRLElBQU0sYUFBYSxJQUFNLE1BQU0sSUFBTSxRQUFRLDJCQUEyQixHQUFHO0FBQUEsUUFDckYsU0FBUztBQUFBLE1BQ1gsQ0FBQztBQUVELHVCQUFpQixLQUFLO0FBRXRCLHFCQUFlLG9CQUFvQixTQUFTLElBQU8sRUFBSTtBQUN2RCxpQkFBVyxPQUFPO0FBQUE7QUFBQTs7O0FDcFNsQjtBQUFBO0FBQUE7QUFDQSxVQUFJLGtCQUFrQiw2QkFFbEIsV0FBVyxnQkFBZ0IsVUFBVSxHQUNyQyxlQUFlO0FBRW5CLFVBQUk7QUFDRSxpQkFBUyxHQUNULHFCQUFxQjtBQUFBLFVBQ3ZCLE1BQU0sV0FBWTtBQUNoQixtQkFBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLFNBQVM7QUFBQSxVQUM1QjtBQUFBLFVBQ0EsUUFBVSxXQUFZO0FBQ3BCLDJCQUFlO0FBQUEsVUFDakI7QUFBQSxRQUNGLEdBRUEsbUJBQW1CLFFBQVEsSUFBSSxXQUFZO0FBQ3pDLGlCQUFPO0FBQUEsUUFDVCxHQUVBLE1BQU0sS0FBSyxvQkFBb0IsV0FBWTtBQUFFLGdCQUFNO0FBQUEsUUFBRyxDQUFDO0FBQUEsTUFDekQsUUFBZ0I7QUFBQSxNQUFjO0FBZnhCLGtCQUNBO0FBZ0JOLGFBQU8sVUFBVSxTQUFVLE1BQU0sY0FBYztBQUM3QyxZQUFJO0FBQ0YsY0FBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWMsUUFBTztBQUFBLFFBQzdDLFFBQWdCO0FBQUUsaUJBQU87QUFBQSxRQUFPO0FBQ2hDLFlBQUksb0JBQW9CO0FBQ3hCLFlBQUk7QUFDRixjQUFJLFNBQVMsQ0FBQztBQUVkLGlCQUFPLFFBQVEsSUFBSSxXQUFZO0FBQzdCLG1CQUFPO0FBQUEsY0FDTCxNQUFNLFdBQVk7QUFDaEIsdUJBQU8sRUFBRSxNQUFNLG9CQUFvQixHQUFLO0FBQUEsY0FDMUM7QUFBQSxZQUNGO0FBQUEsVUFDRixHQUNBLEtBQUssTUFBTTtBQUFBLFFBQ2IsUUFBZ0I7QUFBQSxRQUFjO0FBQzlCLGVBQU87QUFBQSxNQUNUO0FBQUE7QUFBQTs7O0FDMUNBO0FBQUE7QUFBQTtBQUNBLFVBQUksMkJBQTJCLHNDQUMzQiw4QkFBOEIsMENBQzlCLDZCQUE2Qix3Q0FBc0Q7QUFFdkYsYUFBTyxVQUFVLDhCQUE4QixDQUFDLDRCQUE0QixTQUFVLFVBQVU7QUFDOUYsaUNBQXlCLElBQUksUUFBUSxFQUFFLEtBQUssUUFBVyxXQUFZO0FBQUEsUUFBYyxDQUFDO0FBQUEsTUFDcEYsQ0FBQztBQUFBO0FBQUE7OztBQ1BEO0FBQUE7QUFBQTtBQUNBLFVBQUksSUFBSSxrQkFDSixPQUFPLHlCQUNQLFlBQVksc0JBQ1osNkJBQTZCLGtDQUM3QixVQUFVLG1CQUNWLFVBQVUsbUJBQ1Ysc0NBQXNDO0FBSTFDLFFBQUUsRUFBRSxRQUFRLFdBQVcsTUFBTSxJQUFNLFFBQVEsb0NBQW9DLEdBQUc7QUFBQSxRQUNoRixLQUFLLFNBQWEsVUFBVTtBQUMxQixjQUFJLElBQUksTUFDSixhQUFhLDJCQUEyQixFQUFFLENBQUMsR0FDM0MsVUFBVSxXQUFXLFNBQ3JCLFNBQVMsV0FBVyxRQUNwQixTQUFTLFFBQVEsV0FBWTtBQUMvQixnQkFBSSxrQkFBa0IsVUFBVSxFQUFFLE9BQU8sR0FDckMsU0FBUyxDQUFDLEdBQ1YsVUFBVSxHQUNWLFlBQVk7QUFDaEIsb0JBQVEsVUFBVSxTQUFVLFNBQVM7QUFDbkMsa0JBQUksUUFBUSxXQUNSLGdCQUFnQjtBQUNwQiwyQkFDQSxLQUFLLGlCQUFpQixHQUFHLE9BQU8sRUFBRSxLQUFLLFNBQVUsT0FBTztBQUN0RCxnQkFBSSxrQkFDSixnQkFBZ0IsSUFDaEIsT0FBTyxLQUFLLElBQUksT0FDaEIsRUFBRSxhQUFhLFFBQVEsTUFBTTtBQUFBLGNBQy9CLEdBQUcsTUFBTTtBQUFBLFlBQ1gsQ0FBQyxHQUNELEVBQUUsYUFBYSxRQUFRLE1BQU07QUFBQSxVQUMvQixDQUFDO0FBQ0QsaUJBQUksT0FBTyxTQUFPLE9BQU8sT0FBTyxLQUFLLEdBQzlCLFdBQVc7QUFBQSxRQUNwQjtBQUFBLE1BQ0YsQ0FBQztBQUFBO0FBQUE7OztBQ3RDRDtBQUFBO0FBQUE7QUFDQSxVQUFJLElBQUksa0JBQ0osVUFBVSxtQkFDViw2QkFBNkIsd0NBQXNELGFBQ25GLDJCQUEyQixzQ0FDM0IsYUFBYSx3QkFDYixhQUFhLHVCQUNiLGdCQUFnQiwyQkFFaEIseUJBQXlCLDRCQUE0Qix5QkFBeUI7QUFJbEYsUUFBRSxFQUFFLFFBQVEsV0FBVyxPQUFPLElBQU0sUUFBUSw0QkFBNEIsTUFBTSxHQUFLLEdBQUc7QUFBQSxRQUNwRixPQUFTLFNBQVUsWUFBWTtBQUM3QixpQkFBTyxLQUFLLEtBQUssUUFBVyxVQUFVO0FBQUEsUUFDeEM7QUFBQSxNQUNGLENBQUM7QUFHRCxNQUFJLENBQUMsV0FBVyxXQUFXLHdCQUF3QixNQUM3QyxTQUFTLFdBQVcsU0FBUyxFQUFFLFVBQVUsT0FDekMsdUJBQXVCLFVBQWEsVUFDdEMsY0FBYyx3QkFBd0IsU0FBUyxRQUFRLEVBQUUsUUFBUSxHQUFLLENBQUM7QUFGckU7QUFBQTtBQUFBOzs7QUNyQk47QUFBQTtBQUFBO0FBQ0EsVUFBSSxJQUFJLGtCQUNKLE9BQU8seUJBQ1AsWUFBWSxzQkFDWiw2QkFBNkIsa0NBQzdCLFVBQVUsbUJBQ1YsVUFBVSxtQkFDVixzQ0FBc0M7QUFJMUMsUUFBRSxFQUFFLFFBQVEsV0FBVyxNQUFNLElBQU0sUUFBUSxvQ0FBb0MsR0FBRztBQUFBLFFBQ2hGLE1BQU0sU0FBYyxVQUFVO0FBQzVCLGNBQUksSUFBSSxNQUNKLGFBQWEsMkJBQTJCLEVBQUUsQ0FBQyxHQUMzQyxTQUFTLFdBQVcsUUFDcEIsU0FBUyxRQUFRLFdBQVk7QUFDL0IsZ0JBQUksa0JBQWtCLFVBQVUsRUFBRSxPQUFPO0FBQ3pDLG9CQUFRLFVBQVUsU0FBVSxTQUFTO0FBQ25DLG1CQUFLLGlCQUFpQixHQUFHLE9BQU8sRUFBRSxLQUFLLFdBQVcsU0FBUyxNQUFNO0FBQUEsWUFDbkUsQ0FBQztBQUFBLFVBQ0gsQ0FBQztBQUNELGlCQUFJLE9BQU8sU0FBTyxPQUFPLE9BQU8sS0FBSyxHQUM5QixXQUFXO0FBQUEsUUFDcEI7QUFBQSxNQUNGLENBQUM7QUFBQTtBQUFBOzs7QUN6QkQ7QUFBQTtBQUFBO0FBQ0EsVUFBSSxJQUFJLGtCQUNKLDZCQUE2QixrQ0FDN0IsNkJBQTZCLHdDQUFzRDtBQUl2RixRQUFFLEVBQUUsUUFBUSxXQUFXLE1BQU0sSUFBTSxRQUFRLDJCQUEyQixHQUFHO0FBQUEsUUFDdkUsUUFBUSxTQUFnQixHQUFHO0FBQ3pCLGNBQUksYUFBYSwyQkFBMkIsRUFBRSxJQUFJLEdBQzlDLG1CQUFtQixXQUFXO0FBQ2xDLGtDQUFpQixDQUFDLEdBQ1gsV0FBVztBQUFBLFFBQ3BCO0FBQUEsTUFDRixDQUFDO0FBQUE7QUFBQTs7O0FDZEQ7QUFBQTtBQUFBO0FBQ0EsVUFBSSxXQUFXLHFCQUNYLFdBQVcscUJBQ1gsdUJBQXVCO0FBRTNCLGFBQU8sVUFBVSxTQUFVLEdBQUcsR0FBRztBQUUvQixZQURBLFNBQVMsQ0FBQyxHQUNOLFNBQVMsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUcsUUFBTztBQUMvQyxZQUFJLG9CQUFvQixxQkFBcUIsRUFBRSxDQUFDLEdBQzVDLFVBQVUsa0JBQWtCO0FBQ2hDLHVCQUFRLENBQUMsR0FDRixrQkFBa0I7QUFBQSxNQUMzQjtBQUFBO0FBQUE7OztBQ1pBO0FBQUE7QUFBQTtBQUNBLFVBQUksSUFBSSxrQkFDSixhQUFhLHdCQUNiLFVBQVUsbUJBQ1YsMkJBQTJCLHNDQUMzQiw2QkFBNkIsd0NBQXNELGFBQ25GLGlCQUFpQiwyQkFFakIsNEJBQTRCLFdBQVcsU0FBUyxHQUNoRCxnQkFBZ0IsV0FBVyxDQUFDO0FBSWhDLFFBQUUsRUFBRSxRQUFRLFdBQVcsTUFBTSxJQUFNLFFBQVEsV0FBVywyQkFBMkIsR0FBRztBQUFBLFFBQ2xGLFNBQVMsU0FBaUIsR0FBRztBQUMzQixpQkFBTyxlQUFlLGlCQUFpQixTQUFTLDRCQUE0QiwyQkFBMkIsTUFBTSxDQUFDO0FBQUEsUUFDaEg7QUFBQSxNQUNGLENBQUM7QUFBQTtBQUFBOzs7QUNqQkQ7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7O0FDUEE7QUFBQTtBQUFBO0FBQ0EsVUFBSSxJQUFJLGtCQUNKLE9BQU8seUJBQ1AsWUFBWSxzQkFDWiw2QkFBNkIsa0NBQzdCLFVBQVUsbUJBQ1YsVUFBVSxtQkFDVixzQ0FBc0M7QUFJMUMsUUFBRSxFQUFFLFFBQVEsV0FBVyxNQUFNLElBQU0sUUFBUSxvQ0FBb0MsR0FBRztBQUFBLFFBQ2hGLFlBQVksU0FBb0IsVUFBVTtBQUN4QyxjQUFJLElBQUksTUFDSixhQUFhLDJCQUEyQixFQUFFLENBQUMsR0FDM0MsVUFBVSxXQUFXLFNBQ3JCLFNBQVMsV0FBVyxRQUNwQixTQUFTLFFBQVEsV0FBWTtBQUMvQixnQkFBSSxpQkFBaUIsVUFBVSxFQUFFLE9BQU8sR0FDcEMsU0FBUyxDQUFDLEdBQ1YsVUFBVSxHQUNWLFlBQVk7QUFDaEIsb0JBQVEsVUFBVSxTQUFVLFNBQVM7QUFDbkMsa0JBQUksUUFBUSxXQUNSLGdCQUFnQjtBQUNwQiwyQkFDQSxLQUFLLGdCQUFnQixHQUFHLE9BQU8sRUFBRSxLQUFLLFNBQVUsT0FBTztBQUNyRCxnQkFBSSxrQkFDSixnQkFBZ0IsSUFDaEIsT0FBTyxLQUFLLElBQUksRUFBRSxRQUFRLGFBQWEsTUFBYSxHQUNwRCxFQUFFLGFBQWEsUUFBUSxNQUFNO0FBQUEsY0FDL0IsR0FBRyxTQUFVLE9BQU87QUFDbEIsZ0JBQUksa0JBQ0osZ0JBQWdCLElBQ2hCLE9BQU8sS0FBSyxJQUFJLEVBQUUsUUFBUSxZQUFZLFFBQVEsTUFBTSxHQUNwRCxFQUFFLGFBQWEsUUFBUSxNQUFNO0FBQUEsY0FDL0IsQ0FBQztBQUFBLFlBQ0gsQ0FBQyxHQUNELEVBQUUsYUFBYSxRQUFRLE1BQU07QUFBQSxVQUMvQixDQUFDO0FBQ0QsaUJBQUksT0FBTyxTQUFPLE9BQU8sT0FBTyxLQUFLLEdBQzlCLFdBQVc7QUFBQSxRQUNwQjtBQUFBLE1BQ0YsQ0FBQztBQUFBO0FBQUE7OztBQzNDRDtBQUFBO0FBQUE7QUFDQSxVQUFJLElBQUksa0JBQ0osT0FBTyx5QkFDUCxZQUFZLHNCQUNaLGFBQWEsd0JBQ2IsNkJBQTZCLGtDQUM3QixVQUFVLG1CQUNWLFVBQVUsbUJBQ1Ysc0NBQXNDLCtDQUV0QyxvQkFBb0I7QUFJeEIsUUFBRSxFQUFFLFFBQVEsV0FBVyxNQUFNLElBQU0sUUFBUSxvQ0FBb0MsR0FBRztBQUFBLFFBQ2hGLEtBQUssU0FBYSxVQUFVO0FBQzFCLGNBQUksSUFBSSxNQUNKLGlCQUFpQixXQUFXLGdCQUFnQixHQUM1QyxhQUFhLDJCQUEyQixFQUFFLENBQUMsR0FDM0MsVUFBVSxXQUFXLFNBQ3JCLFNBQVMsV0FBVyxRQUNwQixTQUFTLFFBQVEsV0FBWTtBQUMvQixnQkFBSSxpQkFBaUIsVUFBVSxFQUFFLE9BQU8sR0FDcEMsU0FBUyxDQUFDLEdBQ1YsVUFBVSxHQUNWLFlBQVksR0FDWixrQkFBa0I7QUFDdEIsb0JBQVEsVUFBVSxTQUFVLFNBQVM7QUFDbkMsa0JBQUksUUFBUSxXQUNSLGtCQUFrQjtBQUN0QiwyQkFDQSxLQUFLLGdCQUFnQixHQUFHLE9BQU8sRUFBRSxLQUFLLFNBQVUsT0FBTztBQUNyRCxnQkFBSSxtQkFBbUIsb0JBQ3ZCLGtCQUFrQixJQUNsQixRQUFRLEtBQUs7QUFBQSxjQUNmLEdBQUcsU0FBVSxPQUFPO0FBQ2xCLGdCQUFJLG1CQUFtQixvQkFDdkIsa0JBQWtCLElBQ2xCLE9BQU8sS0FBSyxJQUFJLE9BQ2hCLEVBQUUsYUFBYSxPQUFPLElBQUksZUFBZSxRQUFRLGlCQUFpQixDQUFDO0FBQUEsY0FDckUsQ0FBQztBQUFBLFlBQ0gsQ0FBQyxHQUNELEVBQUUsYUFBYSxPQUFPLElBQUksZUFBZSxRQUFRLGlCQUFpQixDQUFDO0FBQUEsVUFDckUsQ0FBQztBQUNELGlCQUFJLE9BQU8sU0FBTyxPQUFPLE9BQU8sS0FBSyxHQUM5QixXQUFXO0FBQUEsUUFDcEI7QUFBQSxNQUNGLENBQUM7QUFBQTtBQUFBOzs7QUMvQ0Q7QUFBQTtBQUFBO0FBQ0EsVUFBSSxJQUFJLGtCQUNKRSxjQUFhLHVCQUNiLFFBQVEsMEJBQ1IsUUFBUSx1QkFDUixpQkFBaUIsMkJBQ2pCLDZCQUE2QixrQ0FDN0IsWUFBWSxzQkFDWixVQUFVLG1CQUNWLFFBQVEsaUJBRVJDLFdBQVVELFlBQVcsU0FFckIsbUJBQW1CLElBQ25CLFNBQVMsQ0FBQ0MsWUFBVyxDQUFDQSxTQUFRLE9BQVUsTUFBTSxXQUFZO0FBQzVELFlBQUksSUFBSUEsU0FBUSxRQUFRO0FBQ3hCLGVBQU9BLFNBQVEsSUFBTyxTQUFVLFVBQVU7QUFHeEMsb0NBQW1CLGFBQWEsR0FDekI7QUFBQSxRQUdULEdBQUcsQ0FBQyxNQUFNO0FBQUEsTUFDWixDQUFDLEtBQUssQ0FBQztBQUlQLFFBQUUsRUFBRSxRQUFRLFdBQVcsTUFBTSxJQUFNLFFBQVEsT0FBTyxHQUFHO0FBQUEsUUFDbkQsS0FBTyxTQUFVLFlBQTRCO0FBQzNDLGNBQUksT0FBTyxVQUFVLFNBQVMsSUFBSSxNQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FDckQsU0FBUyxRQUFRLFdBQVk7QUFDL0IsbUJBQU8sTUFBTSxVQUFVLFVBQVUsR0FBRyxRQUFXLElBQUk7QUFBQSxVQUNyRCxDQUFDO0FBQ0QsY0FBSSxDQUFDLE9BQU8sTUFBTyxRQUFPLGVBQWUsTUFBTSxPQUFPLEtBQUs7QUFDM0QsY0FBSSxvQkFBb0IsMkJBQTJCLEVBQUUsSUFBSSxHQUNyRCxTQUFTLGtCQUFrQjtBQUMvQix3QkFBTyxPQUFPLEtBQUssR0FDWixrQkFBa0I7QUFBQSxRQUMzQjtBQUFBLE1BQ0YsQ0FBQztBQUFBO0FBQUE7OztBQ3hDRDtBQUFBO0FBQUE7QUFDQSxVQUFJLElBQUksa0JBQ0osNkJBQTZCO0FBSWpDLFFBQUUsRUFBRSxRQUFRLFdBQVcsTUFBTSxHQUFLLEdBQUc7QUFBQSxRQUNuQyxlQUFlLFdBQXlCO0FBQ3RDLGNBQUksb0JBQW9CLDJCQUEyQixFQUFFLElBQUk7QUFDekQsaUJBQU87QUFBQSxZQUNMLFNBQVMsa0JBQWtCO0FBQUEsWUFDM0IsU0FBUyxrQkFBa0I7QUFBQSxZQUMzQixRQUFRLGtCQUFrQjtBQUFBLFVBQzVCO0FBQUEsUUFDRjtBQUFBLE1BQ0YsQ0FBQztBQUFBO0FBQUE7OztBQ2ZEO0FBQUE7QUFBQTtBQUNBLFVBQUksSUFBSSxrQkFDSixVQUFVLG1CQUNWLDJCQUEyQixzQ0FDM0IsUUFBUSxpQkFDUixhQUFhLHdCQUNiLGFBQWEsdUJBQ2IscUJBQXFCLCtCQUNyQixpQkFBaUIsMkJBQ2pCLGdCQUFnQiwyQkFFaEIseUJBQXlCLDRCQUE0Qix5QkFBeUIsV0FHOUUsY0FBYyxDQUFDLENBQUMsNEJBQTRCLE1BQU0sV0FBWTtBQUVoRSwrQkFBdUIsUUFBVyxLQUFLLEVBQUUsTUFBTSxXQUFZO0FBQUEsUUFBYyxFQUFFLEdBQUcsV0FBWTtBQUFBLFFBQWMsQ0FBQztBQUFBLE1BQzNHLENBQUM7QUFJRCxRQUFFLEVBQUUsUUFBUSxXQUFXLE9BQU8sSUFBTSxNQUFNLElBQU0sUUFBUSxZQUFZLEdBQUc7QUFBQSxRQUNyRSxTQUFXLFNBQVUsV0FBVztBQUM5QixjQUFJLElBQUksbUJBQW1CLE1BQU0sV0FBVyxTQUFTLENBQUMsR0FDbEQsYUFBYSxXQUFXLFNBQVM7QUFDckMsaUJBQU8sS0FBSztBQUFBLFlBQ1YsYUFBYSxTQUFVLEdBQUc7QUFDeEIscUJBQU8sZUFBZSxHQUFHLFVBQVUsQ0FBQyxFQUFFLEtBQUssV0FBWTtBQUFFLHVCQUFPO0FBQUEsY0FBRyxDQUFDO0FBQUEsWUFDdEUsSUFBSTtBQUFBLFlBQ0osYUFBYSxTQUFVLEdBQUc7QUFDeEIscUJBQU8sZUFBZSxHQUFHLFVBQVUsQ0FBQyxFQUFFLEtBQUssV0FBWTtBQUFFLHNCQUFNO0FBQUEsY0FBRyxDQUFDO0FBQUEsWUFDckUsSUFBSTtBQUFBLFVBQ047QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBR0QsTUFBSSxDQUFDLFdBQVcsV0FBVyx3QkFBd0IsTUFDN0MsU0FBUyxXQUFXLFNBQVMsRUFBRSxVQUFVLFNBQ3pDLHVCQUF1QixZQUFlLFVBQ3hDLGNBQWMsd0JBQXdCLFdBQVcsUUFBUSxFQUFFLFFBQVEsR0FBSyxDQUFDO0FBRnZFO0FBQUE7QUFBQTs7O0FDdENOO0FBQUE7QUFBQTtBQUNBLFVBQUksY0FBYyxpQ0FDZCxzQkFBc0Isa0NBQ3RCLFdBQVcscUJBQ1gseUJBQXlCLG9DQUV6QixTQUFTLFlBQVksR0FBRyxNQUFNLEdBQzlCLGFBQWEsWUFBWSxHQUFHLFVBQVUsR0FDdEMsY0FBYyxZQUFZLEdBQUcsS0FBSyxHQUVsQyxlQUFlLFNBQVUsbUJBQW1CO0FBQzlDLGVBQU8sU0FBVSxPQUFPLEtBQUs7QUFDM0IsY0FBSSxJQUFJLFNBQVMsdUJBQXVCLEtBQUssQ0FBQyxHQUMxQyxXQUFXLG9CQUFvQixHQUFHLEdBQ2xDLE9BQU8sRUFBRSxRQUNULE9BQU87QUFDWCxpQkFBSSxXQUFXLEtBQUssWUFBWSxPQUFhLG9CQUFvQixLQUFLLFVBQ3RFLFFBQVEsV0FBVyxHQUFHLFFBQVEsR0FDdkIsUUFBUSxTQUFVLFFBQVEsU0FBVSxXQUFXLE1BQU0sU0FDdEQsU0FBUyxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssU0FBVSxTQUFTLFFBQzNELG9CQUNFLE9BQU8sR0FBRyxRQUFRLElBQ2xCLFFBQ0Ysb0JBQ0UsWUFBWSxHQUFHLFVBQVUsV0FBVyxDQUFDLEtBQ3BDLFFBQVEsU0FBVSxPQUFPLFNBQVMsU0FBVTtBQUFBLFFBQ3ZEO0FBQUEsTUFDRjtBQUVBLGFBQU8sVUFBVTtBQUFBO0FBQUE7QUFBQSxRQUdmLFFBQVEsYUFBYSxFQUFLO0FBQUE7QUFBQTtBQUFBLFFBRzFCLFFBQVEsYUFBYSxFQUFJO0FBQUEsTUFDM0I7QUFBQTtBQUFBOzs7QUNwQ0E7QUFBQTtBQUFBO0FBQ0EsVUFBSSxTQUFTLDJCQUF5QyxRQUNsRCxXQUFXLHFCQUNYLHNCQUFzQiwwQkFDdEIsaUJBQWlCLDJCQUNqQix5QkFBeUIscUNBRXpCLGtCQUFrQixtQkFDbEIsbUJBQW1CLG9CQUFvQixLQUN2QyxtQkFBbUIsb0JBQW9CLFVBQVUsZUFBZTtBQUlwRSxxQkFBZSxRQUFRLFVBQVUsU0FBVSxVQUFVO0FBQ25ELHlCQUFpQixNQUFNO0FBQUEsVUFDckIsTUFBTTtBQUFBLFVBQ04sUUFBUSxTQUFTLFFBQVE7QUFBQSxVQUN6QixPQUFPO0FBQUEsUUFDVCxDQUFDO0FBQUEsTUFHSCxHQUFHLFdBQWdCO0FBQ2pCLFlBQUksUUFBUSxpQkFBaUIsSUFBSSxHQUM3QixTQUFTLE1BQU0sUUFDZixRQUFRLE1BQU0sT0FDZDtBQUNKLGVBQUksU0FBUyxPQUFPLFNBQWUsdUJBQXVCLFFBQVcsRUFBSSxLQUN6RSxRQUFRLE9BQU8sUUFBUSxLQUFLLEdBQzVCLE1BQU0sU0FBUyxNQUFNLFFBQ2QsdUJBQXVCLE9BQU8sRUFBSztBQUFBLE1BQzVDLENBQUM7QUFBQTtBQUFBOzs7QUM5QkQ7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFJLE9BQU87QUFFWCxhQUFPLFVBQVUsS0FBSztBQUFBO0FBQUE7OztBQ2J0QjtBQUFBO0FBQUE7QUFHQSxhQUFPLFVBQVU7QUFBQSxRQUNmLGFBQWE7QUFBQSxRQUNiLHFCQUFxQjtBQUFBLFFBQ3JCLGNBQWM7QUFBQSxRQUNkLGdCQUFnQjtBQUFBLFFBQ2hCLGFBQWE7QUFBQSxRQUNiLGVBQWU7QUFBQSxRQUNmLGNBQWM7QUFBQSxRQUNkLHNCQUFzQjtBQUFBLFFBQ3RCLFVBQVU7QUFBQSxRQUNWLG1CQUFtQjtBQUFBLFFBQ25CLGdCQUFnQjtBQUFBLFFBQ2hCLGlCQUFpQjtBQUFBLFFBQ2pCLG1CQUFtQjtBQUFBLFFBQ25CLFdBQVc7QUFBQSxRQUNYLGVBQWU7QUFBQSxRQUNmLGNBQWM7QUFBQSxRQUNkLFVBQVU7QUFBQSxRQUNWLGtCQUFrQjtBQUFBLFFBQ2xCLFFBQVE7QUFBQSxRQUNSLGFBQWE7QUFBQSxRQUNiLGVBQWU7QUFBQSxRQUNmLGVBQWU7QUFBQSxRQUNmLGdCQUFnQjtBQUFBLFFBQ2hCLGNBQWM7QUFBQSxRQUNkLGVBQWU7QUFBQSxRQUNmLGtCQUFrQjtBQUFBLFFBQ2xCLGtCQUFrQjtBQUFBLFFBQ2xCLGdCQUFnQjtBQUFBLFFBQ2hCLGtCQUFrQjtBQUFBLFFBQ2xCLGVBQWU7QUFBQSxRQUNmLFdBQVc7QUFBQSxNQUNiO0FBQUE7QUFBQTs7O0FDbkNBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsVUFBSSxlQUFlLHlCQUNmQyxjQUFhLHVCQUNiLGlCQUFpQiw2QkFDakIsWUFBWTtBQUVoQixXQUFTLG1CQUFtQjtBQUMxQix1QkFBZUEsWUFBVyxlQUFlLEdBQUcsZUFBZSxHQUMzRCxVQUFVLGVBQWUsSUFBSSxVQUFVO0FBRmhDO0FBQUE7QUFBQTs7O0FDUFQsTUFBQUMsbUJBQUE7QUFBQTtBQUFBO0FBQ0EsVUFBSSxTQUFTO0FBQ2I7QUFFQSxhQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUNKakI7QUFBQTtBQUFBO0FBRUEsVUFBSSxJQUFJLGtCQUNKLGNBQWMsdUJBQ2QsU0FBUztBQUliLFFBQUUsRUFBRSxRQUFRLFVBQVUsTUFBTSxJQUFNLE1BQU0sQ0FBQyxZQUFZLEdBQUc7QUFBQSxRQUN0RDtBQUFBLE1BQ0YsQ0FBQztBQUFBO0FBQUE7OztBQ1ZEO0FBQUE7QUFBQTtBQUNBLFVBQUksSUFBSSxrQkFDSixVQUFVO0FBSWQsUUFBRSxFQUFFLFFBQVEsV0FBVyxNQUFNLEdBQUssR0FBRztBQUFBLFFBQ25DO0FBQUEsTUFDRixDQUFDO0FBQUE7QUFBQTs7O0FDUkQ7QUFBQTtBQUFBO0FBQ0EsVUFBSSxjQUFjLHVCQUNkLHVCQUF1QixrQ0FDdkIsMkJBQTJCO0FBRS9CLGFBQU8sVUFBVSxTQUFVLFFBQVEsS0FBSyxPQUFPO0FBQzdDLFFBQUksY0FBYSxxQkFBcUIsRUFBRSxRQUFRLEtBQUsseUJBQXlCLEdBQUcsS0FBSyxDQUFDLElBQ2xGLE9BQU8sR0FBRyxJQUFJO0FBQUEsTUFDckI7QUFBQTtBQUFBOzs7QUNSQTtBQUFBO0FBQUE7QUFDQSxVQUFJLElBQUksa0JBQ0osWUFBWSxzQkFDWixXQUFXLHFCQUNYLE9BQU8seUJBQ1AsaUJBQWlCLDJCQUNqQixhQUFhLHdCQUNiLDJCQUEyQiw4Q0FDM0IsNkJBQTZCLGtDQUM3QixVQUFVLG1CQUVWLFNBQVMsV0FBVyxVQUFVLFFBQVEsR0FDdEMsVUFBVSxXQUFXLFdBQVcsU0FBUztBQUk3QyxRQUFFLEVBQUUsUUFBUSxXQUFXLE1BQU0sR0FBSyxHQUFHO0FBQUEsUUFDbkMsVUFBVSxTQUFrQixVQUFVO0FBQ3BDLGNBQUksSUFBSSxNQUNKLGFBQWEsMkJBQTJCLEVBQUUsQ0FBQyxHQUMzQyxVQUFVLFdBQVcsU0FDckIsU0FBUyxXQUFXLFFBQ3BCLFNBQVMsUUFBUSxXQUFZO0FBTy9CLHFCQU5JLGlCQUFpQixVQUFVLEVBQUUsT0FBTyxHQUNwQyxVQUFVLFFBQVEsU0FBUyxRQUFRLENBQUMsR0FDcEMsT0FBTyxDQUFDLEdBQ1IsU0FBUyxDQUFDLEdBQ1YsWUFBWSxHQUNaLFVBQVUsR0FDTCxJQUFJLEdBQUcsSUFBSSxRQUFRLFFBQVEsSUFBSyxFQUFDLFNBQVUsS0FBSztBQUN2RCxrQkFBSSxPQUFPLHlCQUF5QixFQUFFLFVBQVUsR0FBRztBQUNuRCxrQkFBSSxRQUFRLEtBQUssWUFBWTtBQUMzQixvQkFBSSxRQUFRLFNBQ1IsZ0JBQWdCO0FBQ3BCLDZCQUNBLEtBQUssS0FBSyxJQUFJLEtBQ2QsT0FBTyxLQUFLLElBQUksUUFDaEIsS0FBSyxnQkFBZ0IsR0FBRyxTQUFTLEdBQUcsQ0FBQyxFQUFFLEtBQUssU0FBVSxPQUFPO0FBQzNELHNCQUFJLG1CQUNKLGdCQUFnQixJQUNoQixPQUFPLEtBQUssSUFBSSxPQUNoQixFQUFFLFdBQ0UsY0FBYyxJQUFHO0FBRW5CLDZCQURJLE1BQU0sT0FBTyxJQUFJLEdBQ1osSUFBSSxHQUFHLElBQUksS0FBSyxRQUFRLElBQUssZ0JBQWUsS0FBSyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztBQUM1RSw0QkFBUSxHQUFHO0FBQUEsa0JBQ2I7QUFBQSxnQkFDRixHQUFHLE1BQU0sR0FDVDtBQUFBLGNBQ0Y7QUFBQSxZQUNGLEdBQUcsUUFBUSxDQUFDLENBQUM7QUFDYixjQUFFLGFBQWEsUUFBUSxPQUFPLElBQUksQ0FBQztBQUFBLFVBQ3JDLENBQUM7QUFDRCxpQkFBSSxPQUFPLFNBQU8sT0FBTyxPQUFPLEtBQUssR0FDOUIsV0FBVztBQUFBLFFBQ3BCO0FBQUEsTUFDRixDQUFDO0FBQUE7QUFBQTs7O0FDeEREO0FBQUE7QUFBQTtBQUNBLFVBQUksSUFBSSxrQkFDSixZQUFZLHNCQUNaLFdBQVcscUJBQ1gsT0FBTyx5QkFDUCxpQkFBaUIsMkJBQ2pCLGFBQWEsd0JBQ2IsMkJBQTJCLDhDQUMzQiw2QkFBNkIsa0NBQzdCLFVBQVUsbUJBRVYsU0FBUyxXQUFXLFVBQVUsUUFBUSxHQUN0QyxVQUFVLFdBQVcsV0FBVyxTQUFTO0FBSTdDLFFBQUUsRUFBRSxRQUFRLFdBQVcsTUFBTSxHQUFLLEdBQUc7QUFBQSxRQUNuQyxpQkFBaUIsU0FBeUIsVUFBVTtBQUNsRCxjQUFJLElBQUksTUFDSixhQUFhLDJCQUEyQixFQUFFLENBQUMsR0FDM0MsVUFBVSxXQUFXLFNBQ3JCLFNBQVMsV0FBVyxRQUNwQixTQUFTLFFBQVEsV0FBWTtBQU8vQixxQkFOSSxpQkFBaUIsVUFBVSxFQUFFLE9BQU8sR0FDcEMsVUFBVSxRQUFRLFNBQVMsUUFBUSxDQUFDLEdBQ3BDLE9BQU8sQ0FBQyxHQUNSLFNBQVMsQ0FBQyxHQUNWLFlBQVksR0FDWixVQUFVLEdBQ0wsSUFBSSxHQUFHLElBQUksUUFBUSxRQUFRLElBQUssRUFBQyxTQUFVLEtBQUs7QUFDdkQsa0JBQUksT0FBTyx5QkFBeUIsRUFBRSxVQUFVLEdBQUc7QUFDbkQsa0JBQUksUUFBUSxLQUFLLFlBQVk7QUFDM0Isb0JBQUksd0JBQXdCLFNBQVUsV0FBVztBQUMvQyx5QkFBTyxTQUFVLE9BQU87QUFDdEIsd0JBQUksbUJBQ0osZ0JBQWdCLElBQ2hCLE9BQU8sS0FBSyxJQUFJLFlBQ1osRUFBRSxRQUFRLFlBQVksUUFBUSxNQUFNLElBQ3BDLEVBQUUsUUFBUSxhQUFhLE1BQWEsR0FDcEMsR0FBRSxZQUVOO0FBQUEsK0JBREksTUFBTSxPQUFPLElBQUksR0FDWixJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsSUFBSyxnQkFBZSxLQUFLLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQzVFLDhCQUFRLEdBQUc7QUFBQTtBQUFBLGtCQUNiO0FBQUEsZ0JBQ0YsR0FDSSxRQUFRLFNBQ1IsZ0JBQWdCO0FBQ3BCLDZCQUNBLEtBQUssS0FBSyxJQUFJLEtBQ2QsT0FBTyxLQUFLLElBQUksUUFDaEIsS0FBSyxnQkFBZ0IsR0FBRyxTQUFTLEdBQUcsQ0FBQyxFQUFFLEtBQUssc0JBQXNCLEVBQUssR0FBRyxzQkFBc0IsRUFBSSxDQUFDLEdBQ3JHO0FBQUEsY0FDRjtBQUFBLFlBQ0YsR0FBRyxRQUFRLENBQUMsQ0FBQztBQUNiLGNBQUUsYUFBYSxRQUFRLE9BQU8sSUFBSSxDQUFDO0FBQUEsVUFDckMsQ0FBQztBQUNELGlCQUFJLE9BQU8sU0FBTyxPQUFPLE9BQU8sS0FBSyxHQUM5QixXQUFXO0FBQUEsUUFDcEI7QUFBQSxNQUNGLENBQUM7QUFBQTtBQUFBOzs7QUMzREQ7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBOzs7QUNGQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7OztBQ0ZBLE1BQUFDLG1CQUFBO0FBQUE7QUFBQTtBQUNBLFVBQUksU0FBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLGFBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ1ZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU0sS0FBTjtBQUFBO0FBQUEsTUFBTSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMEdaLGVBQVMsS0FDSixZQUFZLFNBQVMsY0FBYyxPQUFPLENBQUMsRUFDM0MsWUFBWSxTQUFTLGVBQWUsR0FBRyxDQUFDO0FBQUE7QUFBQTs7O0FDM0c3QyxXQUFTLGVBQ1Q7QUFDQyxRQUFNLGlCQUFpQixvQkFBSSxJQUFJLEdBQ3pCLGFBQWE7QUFBQSxNQUNsQixPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsSUFDVDtBQUNBLFdBQU8sSUFBSSxNQUFNLFNBQVM7QUFBQSxNQUN6QixLQUFLLENBQUMsUUFBUSxZQUNkO0FBQ0MsWUFBSSxZQUFZO0FBRWYsaUJBQU8sQ0FBQyxPQUFlLFdBQ3ZCO0FBQ0MsdUJBQVcsUUFBUSxPQUNuQixXQUFXLFNBQVMsVUFBVTtBQUFBLFVBQy9CO0FBRUksWUFBSSxZQUFZO0FBRXBCLGlCQUFPLENBQUMsV0FFQSxXQUFXLFNBQVMsVUFBVSxXQUFXLFVBQVU7QUFJNUQsWUFBTSxXQUFXO0FBRWpCLGlCQUFPLElBQUksU0FDWDtBQUNDLGdCQUFJLENBQUMsV0FBVyxVQUFVLFlBQVksUUFBUztBQUUvQyxnQkFBSSxRQUFRLENBQUMsV0FBVyxTQUFTLEdBRTdCLE9BQU87QUFDWCxvQkFBUSxTQUNSO0FBQUEsY0FDQyxLQUFLO0FBQ0osd0JBQVEsQ0FBQyxXQUFXLFNBQVM7QUFDN0I7QUFBQSxjQUNELEtBQUs7QUFDSix3QkFBUSxDQUFDLFdBQVcsU0FBUztBQUM3QjtBQUFBLGNBQ0QsS0FBSztBQUNKLHdCQUFRLEtBQUssQ0FBQyxHQUNWLGVBQWUsSUFBSSxLQUFLLElBRTNCLE9BQU8sS0FBSyxVQUFVLEtBQUssbUJBQW1CLElBSTlDLGVBQWUsSUFBSSxPQUFPLFlBQVksSUFBSSxDQUFDO0FBRTVDO0FBQUEsY0FDRCxLQUFLO0FBQ0osd0JBQVEsS0FBSyxDQUFDLEdBQ2QsUUFBUSxlQUFlLElBQUksS0FBSyxHQUM1QixVQUFVLFNBRWIsT0FBTyxLQUFLLFVBQVUsS0FBSyxrQkFBa0IsS0FJN0MsZUFBZSxPQUFPLEtBQUssR0FDM0IsT0FBTyxJQUFJLEdBQUcsS0FBSyxLQUFLLFlBQVksSUFBSSxJQUFJLEtBQUssS0FBSztBQUV2RDtBQUFBLGNBQ0QsS0FBSztBQUNKLDJCQUFXLFFBQVE7QUFDbkI7QUFBQSxZQUNGO0FBRUEsZ0JBQU0sUUFBUSxXQUFXLFFBQVE7QUFBQSxjQUNoQyxLQUFLLFdBQVcsS0FBSztBQUFBLGNBQ3JCLG9EQUFvRCxNQUFNLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDO0FBQUEsWUFDMUUsSUFBSSxDQUFDO0FBRUwsbUJBQU8sT0FBZ0IsRUFBRSxHQUFHLE9BQU8sR0FBRyxJQUFJLElBRXRDLFlBQVksV0FBVyxZQUFZLHNCQUV0QyxXQUFXLFFBQVE7QUFBQSxVQUVyQjtBQUFBLE1BQ0Q7QUFBQSxJQUNELENBQUM7QUFBQSxFQUlGO0FBRU8sTUFBTSxTQUFTLGFBQWEsR0FDdEIsYUFBYSxhQUFhO0FBRWhDLFdBQVMsZ0JBQWdCLE1BQ2hDO0FBQ0MsZUFBVyxNQUFNLEdBQUcsSUFBSTtBQUFBLEVBQ3pCO0FBT08sV0FBUyxlQUFlLE1BQy9CO0FBQ0MsZUFBVyxLQUFLLEdBQUcsSUFBSTtBQUFBLEVBQ3hCO0FBRU8sV0FBUyxnQkFBZ0IsTUFDaEM7QUFDQyxlQUFXLE1BQU0sR0FBRyxJQUFJO0FBQUEsRUFDekI7OztBQ2hIQSxNQUFJO0FBRUcsV0FBUyxhQUNoQjtBQUNDLFdBQU8sUUFBUSxVQUFVO0FBQUEsRUFDMUI7QUFFTyxXQUFTLG9CQUFvQixNQUNwQztBQUVDLFdBQU8sV0FBVyxFQUFFLGlCQUFpQixHQUFHLElBQUk7QUFBQSxFQUM3QztBQU9PLFdBQVMsa0JBQ2hCO0FBQ0MsV0FBUSxPQUFPLE9BQVMsT0FBZ0IsT0FBTyxLQUFLLElBQUksRUFBRSxXQUFXO0FBQUEsRUFDdEU7QUFFTyxXQUFTLGVBQ2hCO0FBQ0MsV0FBTyxnQkFBZ0IsSUFBSSxPQUFPLENBQUM7QUFBQSxFQUNwQzs7O0FDekJPLE1BQU0sWUFBWSxvQkFBSSxJQUFJLEdBQ3RCLFlBQW9ELENBQUMsR0FDckQsZUFBeUMsQ0FBQyxHQUMxQyxPQUErQixNQUVwQyxjQUFjLGlDQU9UO0FBS1gsV0FBUyxTQUFTLFVBQ2xCO0FBQ0MsdUJBQVksWUFBWSxRQUFRLFFBQVEsRUFBRSxHQUVuQyxNQUFNLFFBQVEsUUFBUSxJQUFJO0FBQUEsTUFDaEMsUUFBUTtBQUFBLElBQ1QsQ0FBQyxFQUFFLEtBQUssU0FBTyxJQUFJLEtBQUssQ0FBQztBQUFBLEVBTTFCO0FBRUEsV0FBUyxtQkFDVDtBQUNDLGNBQVUsTUFBTSxHQUNoQixZQUFZLENBQUMsR0FDYixlQUFlLENBQUMsR0FDaEIsT0FBTztBQUFBLEVBQ1I7QUFFTyxXQUFTLFlBQ2hCO0FBQ0MsV0FBTyxXQUFXLFdBQVc7QUFBQSxFQUM5QjtBQU9BLFdBQVMsYUFDVDtBQUNDLFFBQU1DLFFBQU8sYUFBYSxHQUV0QkMsVUFBUztBQUFBLE1BQ1osU0FBU0QsTUFBSztBQUFBLE1BQ2QsTUFBTUEsTUFBSztBQUFBLE1BQ1gsTUFBTUEsTUFBSztBQUFBLE1BQ1gsT0FBT0EsTUFBSztBQUFBLE1BQ1osY0FBY0EsTUFBSztBQUFBLElBQ3BCO0FBRUEsUUFBSSxHQUFDQyxRQUFPLFdBQ1IsQ0FBQ0EsUUFBTyxRQUNSQSxRQUFPLFNBQVMsVUFDaEIsQ0FBQ0EsUUFBTyxRQUVSQSxRQUFPLFNBQVM7QUFJcEIsYUFBQUEsUUFBTyxPQUFPLEtBQUssTUFBTUEsUUFBTyxJQUFJLEdBRTdCQTtBQUFBLEVBQ1I7QUFFQSxpQkFBc0IsaUJBQWlCLE1BQWEsTUFDcEQ7QUFDQyxRQUFNLFFBQVE7QUFFZCxXQUFPLE1BQU0sR0FBRyxLQUFLLE9BQU8sR0FDNUIsT0FBTyxLQUFLLEdBQUcsS0FBSyxPQUFPO0FBRTNCLFFBQU0sZUFBZSxNQUFNLFNBQVMsS0FBSyxJQUFJLENBQUMsRUFDNUMsS0FBSyxZQUNMLGlCQUFpQixHQUNWLE1BQ1A7QUFHRixrQkFBTyxLQUFLLE1BQU0sY0FBYyxDQUFDLEtBQUssVUFDdEM7QUFFQyxVQUFJLElBQUksV0FBVyxJQUFJLEdBQ3ZCO0FBRUMsWUFBTSxRQUFRLFNBQVMsSUFBSSxNQUFNLENBQUMsQ0FBQztBQUNuQyxRQUFJLGlCQUFpQixVQUVwQixVQUFVLElBQUksT0FBTyxLQUFLO0FBQUEsTUFFNUIsV0FDUyxZQUFZLEtBQUssR0FBRyxHQUM3QjtBQUVDLFlBQUksRUFBRSxPQUFPLEtBQUssSUFBSSxJQUFJLE1BQU0sV0FBVyxFQUFHO0FBVzlDLFlBVEksTUFBTSxXQUFXLEdBQUcsSUFFdkIsUUFBUSxNQUFNLE1BQU0sQ0FBQyxJQUlyQixRQUFRLE1BQU0sT0FHWCxDQUFDLE1BQU07QUFFVixpQkFBTztBQUdSLGtCQUFVLEtBQUssTUFBTSxDQUFDLEdBQ3RCLFVBQVUsS0FBSyxFQUFFLElBQUksSUFBSSxPQUV6QixhQUFhLElBQUksTUFBTSxDQUFDLEdBQ3hCLGFBQWEsSUFBSSxFQUFFLEtBQUssS0FBSztBQUFBLE1BQzlCO0FBR0MsZUFBTztBQUFBLElBRVQsQ0FBQyxHQUVELE9BQU8sUUFBUSxHQUFHLEtBQUssT0FBTyxHQUU5QixPQUFPLE1BQU0sMkJBQTJCLEdBQ3hDLE9BQU8sS0FBSyxRQUFRLElBQUksR0FDeEIsT0FBTyxLQUFLLGFBQWEsU0FBUyxHQUNsQyxPQUFPLEtBQUssYUFBYSxTQUFTLEdBQ2xDLE9BQU8sS0FBSyxnQkFBZ0IsWUFBWSxHQUN4QyxPQUFPLFNBQVMsR0FFVDtBQUFBLE1BQ047QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUtBLFdBQVMsU0FBUyxPQUNsQjtBQUNDLFFBQ0E7QUFDQyxjQUFRLE1BQU0sS0FBSztBQUNuQixVQUFJLFFBQVEsTUFBTSxNQUFNLEdBQUc7QUFDM0IsVUFBSSxNQUFNLENBQUMsTUFBTSxPQUFPLE1BQU0sU0FBUztBQUV0Qyx1QkFBUSxNQUFNLFFBQVEseUJBQXlCLE1BQU0sR0FDOUMsSUFBSSxPQUFPLEtBQUs7QUFHeEIsVUFBTSxTQUFTLE1BQU0sTUFBTSxTQUFTLENBQUMsR0FDL0IsWUFBWSxNQUFNLFlBQVksR0FBRztBQUN2QyxxQkFBUSxNQUFNLFVBQVUsR0FBRyxTQUFTLEdBQzdCLElBQUksT0FBTyxPQUFPLE1BQU07QUFBQSxJQUNoQyxRQUVBO0FBQ0MsYUFBTztBQUFBLElBQ1I7QUFBQSxFQUNEOzs7QUNoTE8sV0FBUyxXQUFXLFNBQzNCO0FBQ0MsV0FBTyxRQUFRLFFBQVEsTUFBTSxPQUFPLEVBQUUsUUFBUSxNQUFNLE1BQU0sRUFBRSxRQUFRLE1BQU0sTUFBTSxFQUM5RSxRQUFRLE1BQU0sUUFBUSxFQUFFLFFBQVEsTUFBTSxPQUFPO0FBQUEsRUFDaEQ7QUFFTyxXQUFTLHlCQUF5QixTQUN6QztBQUNDLFFBQU0sV0FBVyxTQUFTLGNBQWMsVUFBVTtBQUNsRCxvQkFBUyxtQkFBbUIsY0FBYyxPQUFPLEdBQzFDLFNBQVM7QUFBQSxFQUNqQjs7O0FDWE8sTUFBTSxrQkFBbUI7QUFBQSxJQUMvQjtBQUFBO0FBQUEsSUFDQTtBQUFBO0FBQUEsSUFDQTtBQUFBO0FBQUEsSUFDQTtBQUFBO0FBQUEsSUFDQTtBQUFBO0FBQUEsSUFDQTtBQUFBO0FBQUEsSUFDQTtBQUFBO0FBQUEsSUFFQTtBQUFBLElBRUE7QUFBQSxJQUVBLEdBQUc7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLE1BRUE7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BRUE7QUFBQSxNQUNBO0FBQUEsTUFFQTtBQUFBLE1BQ0E7QUFBQSxNQUVBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUVBO0FBQUEsTUFDQTtBQUFBLElBQ0QsRUFBRSxJQUFJLE9BQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJO0FBQUE7QUFBQSxJQUd6QjtBQUFBLElBQ0E7QUFBQSxFQUVELEVBQXNCLEtBQUssR0FBRzs7O0FDcEN2QixXQUFTLGtCQUFrQixNQUFnQixXQUNsRDtBQUNDLFdBQU8sTUFBTSxXQUFXLFNBQVMsU0FBUztBQUFBLEVBQzNDO0FBRU8sV0FBUyxzQkFBc0IsTUFDdEM7QUFDQyxXQUFPLEtBQUssVUFBVSxlQUFlLEtBQUssa0JBQWtCLG9EQUEyQztBQUFBLEVBQ3hHOzs7QUNIQSxNQUFNLFNBQVM7QUFHZixXQUFTLFdBQVcsUUFDcEI7QUFDQyxhQUFXLENBQUMsT0FBTyxLQUFLLEtBQUssVUFBVSxRQUFRO0FBRTlDLFVBQUksTUFBTSxLQUFLLE1BQU07QUFFcEIsc0JBQU8sSUFBSSxTQUFTLE9BQU8sUUFBUSxLQUFLLEdBQ2pDLE9BQU8sUUFBUSxPQUFPLEtBQUs7QUFBQSxFQUdyQztBQUVBLFdBQVMsWUFBWSxJQUFjLFFBQWdCLE1BQXlCLE9BQXdCLE1BQ3BHO0FBR0MsUUFGQSxTQUFTLE9BQU8sS0FBSyxHQUVqQixDQUFDLE9BQU8sVUFBVSxPQUFPLEtBQUssTUFBTSxFQUFHO0FBRzNDLFFBQUksYUFDRSxTQUFTLGFBQWEsTUFBTTtBQUVsQyxRQUFJLFFBQ0o7QUFDQyxNQUFpQixPQUFPLE1BQU0sZUFBZSxTQUFTLElBQUksUUFBUSxNQUFNO0FBQ3hFLGVBQVMsU0FBUztBQUVqQixZQUFJLEdBQUcsY0FBYyxRQUFRLEtBQUssR0FDbEM7QUFDQyx3QkFBYyxVQUFVLEtBQUssRUFBRSxNQUFNO0FBQ3JDO0FBQUEsUUFDRDtBQUFBLElBRUY7QUFJQSxRQUZBLGdCQUFnQixLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sR0FFN0MsQ0FBQyxlQUFlLFdBQVcsYUFDL0I7QUFDQyxNQUFJLEdBQUcsZ0JBQWdCLDREQUEwQyxHQUFHLGNBQWMsU0FDOUUsa0JBQWtCLEdBQUcsMkRBQWtELEtBQUcsR0FBRyxZQUFZLE9BQU87QUFDcEc7QUFBQSxJQUNEO0FBRUEsUUFBTSw2QkFBNkIsWUFBWSxXQUFXLE1BQU0sR0FFMUQsa0JBQWtCLE9BQU8sVUFBVSx1Q0FLckMsa0JBQWtCO0FBT3RCLFlBTEksb0JBRUgsQ0FBQyxRQUFRLFdBQVcsSUFBSSxDQUFDLGFBQWEsTUFBTSxJQUdyQyxNQUNSO0FBQUEsTUFDQztBQUNDLFdBQUcsY0FBYztBQUNqQjtBQUFBLE1BRUQ7QUFFQyxZQUFJLDRCQUNKO0FBQ0MsVUFBSSxHQUFHLGFBQWEsSUFFbkIsR0FBRyxZQUFZLGtCQUVQLFdBQVcsR0FBRyxXQUFXLE1BQU0sR0FBRyxjQUUxQyxHQUFHLFlBQVksV0FBVyxlQUFlO0FBRTFDO0FBQUEsUUFDRDtBQUVBLFlBQU0sU0FBUyx5QkFBeUIseUNBQXlELFdBQVcsV0FBVyxDQUFDLHVDQUF1RCxXQUFXLE1BQU0sQ0FBQyxhQUFhO0FBRTlNLFlBQUksR0FBRyxjQUFjLEdBQ3JCO0FBQ0MsY0FBTSxXQUFXLE1BQU0sS0FBSyxHQUFHLFVBQVUsRUFBRTtBQUFBLFlBQUssVUFDL0MsS0FBSyxhQUFhLFlBQ2pCLEtBQUssWUFBWSxLQUFLLE1BQU0sVUFBVSxLQUFLLFlBQVksS0FBSyxNQUFNO0FBQUEsVUFDcEU7QUFFQSxVQUFJLGFBRUgsU0FBUyxjQUFjLElBQ25CLGtCQUFrQixTQUFTLDJEQUFrRCxLQUFHLFNBQVMsWUFBWSxPQUFPLEdBQ2hILFNBQVMsV0FBVyxhQUFhLFFBQVEsU0FBUyxXQUFXO0FBQUEsUUFFL0Q7QUFHQyxhQUFHLGNBQWMsSUFDYixrQkFBa0IsR0FBRywyREFBa0QsS0FBRyxHQUFHLFlBQVksT0FBTyxHQUNwRyxHQUFHLFdBQVcsYUFBYSxRQUFRLEdBQUcsV0FBVztBQUVsRDtBQUFBLE1BRUQ7QUFDQyxXQUFHLGNBQWMsNkJBQTZCLGtCQUFrQixHQUFHLFdBQVcsS0FBSyxNQUFNO0FBQ3pGO0FBQUEsTUFFRDtBQUNDLFdBQUcsUUFBUSw2QkFBNkIsa0JBQWtCLEdBQUcsV0FBVztBQUFBLEVBQUssTUFBTTtBQUNuRjtBQUFBLE1BRUQ7QUFDQyxXQUFHLGNBQWMsNkJBQTZCLGtCQUFrQixHQUFHLFdBQVc7QUFBQTtBQUFBLEVBQU8sTUFBTTtBQUMzRjtBQUFBLE1BRUQ7QUFDQyxlQUFPO0FBQUEsSUFDVDtBQUVBLFNBQUssSUFBSSxrQkFBa0IsY0FBYyxRQUFRLE1BQU0saUJBQWlCLElBQUk7QUFBQSxFQUM3RTtBQUtBLFdBQVMsWUFBWSxJQUFjO0FBQUEsSUFDbEMsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1A7QUFBQSxJQUNBO0FBQUEsRUFDRCxJQUF5QixDQUFDLEdBQzFCO0FBQ0MsUUFBSSxzQkFBc0IsRUFBRSxFQUFHLFFBQU87QUFFdEMsZUFBVyxHQUVQLEdBQUcsU0FFTixZQUFZLElBQUksR0FBRyw0QkFBZ0MsRUFBRSxHQUdsRCxHQUFHLGVBRU4sWUFBWSxJQUFJLEdBQUcsOENBQTRDLEVBQUUsR0FHOUQsR0FBRyxZQUFZLFlBRWxCLFlBQVksSUFBSSxHQUFHLG9DQUF1QyxFQUFFLEdBR3pELFFBQVEsT0FFWCxNQUFNLEtBQUssR0FBRyxVQUFVLEVBQUUsUUFBUSxVQUNsQztBQUNDLFVBQUksS0FBSyxhQUFhLFNBQ3RCO0FBQ0MsWUFBSSxNQUNKO0FBQ0Msc0JBQVksTUFBTSxLQUFLLGdDQUFxQyxFQUFFO0FBQzlEO0FBQUEsUUFDRDtBQUVBLFFBQUksUUFFSCxZQUFZLE1BQU0sS0FBSyxzQ0FBd0MsRUFBRTtBQUFBLE1BRW5FLE1BQ0ssQ0FBSSxLQUFLLFdBQVcsU0FBUyxLQUVqQyxZQUFZLE1BQU0sRUFBRSxNQUFNLEtBQUssQ0FBQztBQUFBLElBRWxDLENBQUMsSUFJRCxZQUFZLElBQUksR0FBRyxzQ0FBd0MsRUFBRTtBQUFBLEVBRS9EO0FBS0EsaUJBQWUsZ0JBQ2Y7QUFDQyxRQUFNLFFBQVE7QUFDZCxXQUFPLE1BQU0sR0FBRyxLQUFLLFFBQVEsR0FDN0IsT0FBTyxLQUFLLEdBQUcsS0FBSyxPQUFPLEdBQzNCLGlCQUFpQjtBQUFBLE1BQ2hCO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUEsTUFBeUM7QUFBQTtBQUFBLE1BQ3pDO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxJQUNELENBQUMsRUFDQyxRQUFRLFFBQU0sWUFBWSxJQUFJLEVBQUUsTUFBTSxHQUFLLENBQUMsQ0FBQyxHQUUvQyxpQkFBaUI7QUFBQSxNQUNoQjtBQUFBO0FBQUEsTUFDQTtBQUFBO0FBQUEsTUFDQTtBQUFBO0FBQUEsTUFDQTtBQUFBO0FBQUEsSUFDRCxDQUFDLEVBQ0MsUUFBUSxRQUFNLFlBQVksSUFBSSxFQUFFLE1BQU0sR0FBSyxDQUFDLENBQUMsR0FFL0MsT0FBTyxRQUFRLEdBQUcsS0FBSyxPQUFPO0FBQUEsRUFDL0I7QUFFQSxXQUFTLGNBQWMsUUFBc0MsV0FBbUIsVUFBa0IsU0FDbEc7QUFDQyxXQUFPLGlCQUFpQixXQUFXLFNBQVUsT0FDN0M7QUFDQyxVQUFJLFNBQVMsTUFBTTtBQUVuQixVQUFJLFNBQVMsT0FBTyxRQUFRLFFBQVEsR0FDcEM7QUFDQyxZQUFNLFFBQVE7QUFDZCxlQUFPLE1BQU0sR0FBRyxLQUFLLFVBQVUsS0FBSyxHQUNwQyxPQUFPLEtBQUssR0FBRyxLQUFLLE9BQU8sR0FFM0IsUUFBUSxLQUFLLFFBQVEsS0FBZSxHQUVwQyxPQUFPLFFBQVEsR0FBRyxLQUFLLE9BQU87QUFBQSxNQUMvQjtBQUFBLElBWUQsQ0FBQztBQUFBLEVBQ0Y7QUFFQSxpQkFBZSxpQkFDZjtBQUNDLFFBQU0sUUFBUTtBQUNkLFdBQU8sTUFBTSxHQUFHLEtBQUssT0FBTyxHQUc1QixjQUFjLFdBQVcsR0FBRyxhQUFhLG9CQUFvQixTQUFVLE9BQ3ZFO0FBQ0MsVUFBTSxFQUFFLE9BQU8sSUFBSTtBQUVuQixVQUFJLENBQUMsa0JBQWtCLFFBQVEsTUFBTSxHQUNyQztBQUNDLFlBQUksT0FBTyxPQUFPLFFBQVEsT0FBTztBQUVqQyxlQUFPLE1BQU0sT0FBTyw0QkFBNEI7QUFBQSxVQUMvQztBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRCxDQUFDLEdBR0QsS0FBSyxjQUFjLElBQUksTUFBTSxhQUFhLEVBQUUsU0FBUyxHQUFLLENBQUMsQ0FBQztBQUM1RDtBQUFBLE1BQ0Q7QUFFQSxVQUFNLFNBQVMsT0FBTyxRQUFRLE9BQ3hCLFdBQVcsUUFBUSxRQUFRLE9BQU8sR0FBRyxjQUF1Qiw0QkFBNEI7QUFFOUYsVUFBSSxVQUFVLFVBQ2Q7QUFDQyxZQUFNLFFBQVEsU0FBUyxNQUFNO0FBQzdCLFFBQUksT0FBTyxVQUFXLFNBQWlCLFVBQVUsVUFFL0MsU0FBaUIsUUFBUSxRQUszQixZQUFZLFVBQWlCLGlDQUFtQyxJQUFJLFNBQVM7QUFDNUUsVUFBaUIsT0FBTyxNQUFNLE9BQU8sZUFBZSxJQUFJO0FBQUEsUUFDekQsQ0FBQztBQUFBLE1BQ0Y7QUFBQSxJQUNELENBQUM7QUFBQSxFQUNGO0FBRUEsaUJBQXNCLGVBQ3RCO0FBQ0MsV0FBTyxRQUFRLFdBQVc7QUFBQSxNQUN6QixjQUFjO0FBQUEsTUFDZCxlQUFlO0FBQUEsSUFDaEIsQ0FBQztBQUFBLEVBQ0Y7QUFFTyxXQUFTLGVBQ2hCO0FBQ0MsUUFBTSxRQUFRO0FBQ2QsV0FBTyxNQUFNLEdBQUcsS0FBSyxRQUFRLEdBQ1osT0FBTyxLQUFLLEdBQUcsS0FBSyxPQUFPO0FBRTVDLFFBQUksU0FBUyxHQUdQLFdBQVcsSUFBSSxpQkFBaUIsQ0FBQyxjQUN2QztBQUNDLFVBQUksY0FBYyxHQUFHLE9BQU8sWUFBWSxJQUFJLEdBRXRDLFdBQVcsTUFBTTtBQUV2QixlQUFXLFlBQVk7QUFFdEIsWUFBSSxTQUFTLFNBQVMsaUJBQ3RCO0FBQ0MsY0FBTSxTQUFTLFNBQVMsUUFBUSxlQUFlO0FBQy9DLFVBQUksUUFBUSxZQUFZLFdBRXZCLFlBQVksU0FBUyxRQUFRO0FBQUEsWUFDNUI7QUFBQSxZQUNBLE1BQU0sTUFDTjtBQUNDLHFCQUFPLE1BQU0sT0FBTyxlQUFlLGlCQUFpQixRQUFRLElBQUk7QUFBQSxZQUNqRTtBQUFBLFVBQ0QsQ0FBQztBQUFBLFFBRUgsTUFDSyxDQUFJLFNBQVMsU0FBUyxlQUUxQixZQUFZLFNBQVMsUUFBUTtBQUFBLFVBQzVCO0FBQUEsVUFDQSxNQUFNLE1BQ047QUFDQyxZQUFpQixPQUFPLE1BQU0sT0FBTyxlQUFlLGNBQWMsSUFBSTtBQUFBLFVBQ3ZFO0FBQUEsUUFDRCxDQUFDLElBSUQsU0FBUyxXQUFXLFFBQVEsVUFDNUI7QUFDQyxVQUFJLHNCQUFzQixJQUFJLE1BRTlCLGVBQ0ksS0FBSyxhQUFhLEtBQUssa0NBQWtDLEtBQUssS0FBSyxTQUFTLElBRS9FLFlBQVksTUFBTTtBQUFBLFlBQ2pCLE1BQU07QUFBQSxVQUNQLENBQUMsSUFFTyxLQUFLLGFBQWEsSUFFMUIsWUFBWSxNQUFNLEtBQUssOEJBQW1DLElBSTFELFlBQVksTUFBTTtBQUFBLFlBQ2pCLE1BQU07QUFBQSxVQUNQLENBQUM7QUFBQSxRQUVILENBQUM7QUFJSCxNQUFJLGNBQWMsS0FFQSxPQUFPLEtBQUssY0FBYyxRQUFRLEtBQUssWUFBWSxJQUFJLElBQUksSUFBSSxRQUFRLFdBQVcsVUFBVSxTQUFTO0FBQUEsSUFFeEgsQ0FBQztBQUVELG9CQUFTLFFBQVEsV0FBVyxHQUFHO0FBQUEsTUFDOUIsZUFBZTtBQUFBLE1BQ2YsV0FBVztBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLE1BQ1osaUJBQWlCLENBQUMsU0FBUyxhQUFhO0FBQUEsSUFDekMsQ0FBQyxHQUVnQixPQUFPLFFBQVEsR0FBRyxLQUFLLE9BQU8sR0FFeEM7QUFBQSxFQUNSOzs7QUNuWUEsdUJBQWM7QUFFZCxhQUFXLEtBQUssYUFBYSxFQUFJO0FBRWpDLGlCQUFzQixNQUN0QjtBQUtDLFFBSEEsTUFBTSw2REFHRixPQUFPLGdCQUFnQixPQUFPLEtBQUssT0FBTyxZQUFZLEVBQUUsT0FBUTtBQUVwRSxRQUFNQyxVQUFTLFVBQVU7QUFJekIsUUFGQSxhQUFhLFVBQVVBLE9BQU0sR0FFekIsQ0FBQ0EsUUFBUTtBQUViLFdBQU8sS0FBSyxhQUFhQSxRQUFPLFlBQVk7QUFFNUMsUUFBSTtBQUFBLE1BQ0gsTUFBQUM7QUFBQSxJQUNELElBQUksTUFBTSxpQkFBaUJELFFBQU8sTUFBTUEsUUFBTyxJQUFJO0FBRW5ELFFBQUlDLE9BQ0o7QUFDQyxZQUFNLGFBQWE7QUFFbkIsVUFBSSxFQUFFLFNBQVMsUUFBUSxJQUFLLGVBQUFDLFFBQXFCLGNBQWM7QUFFL0QsaUJBQVcsU0FBUyxHQUFJLEdBRXhCLE1BQU0sUUFBUSxLQUFLLFlBQVk7QUFBQSxJQUNoQztBQUFBLEVBQ0Q7OztBQ25DQSxNQUFBQyxrQkFBYztBQUlkLEdBQUMsWUFDRDtBQUNDLFFBQUksUUFFRSxRQUFRO0FBRWQsV0FBTyxLQUFLLFdBQVcsR0FFdkIsYUFBYSxHQUFHLEtBQUssT0FBTyxHQUNYLGFBQWEsR0FBRyxLQUFLLHFCQUFxQixHQUMzRCxPQUFPLEtBQUssR0FBRyxLQUFLLE9BQU87QUFFM0IsYUFBUyxlQUFlLFdBQXVCLElBQy9DO0FBQ0MsVUFBSTtBQUNKO0FBRUMsY0FBTSxVQUFVLFVBQVUsT0FBSyxNQUFNLEVBQUUsR0FFbkMsUUFBUSxNQUVYLFVBQVUsT0FBTyxLQUFLLENBQUM7QUFBQSxhQUlsQixRQUFRO0FBQUEsSUFDaEI7QUFFQSxhQUFTLG1CQUFtQixVQUM1QjtBQUNDLGFBQU8sTUFBTSx1QkFBdUIsU0FBUyxVQUFVLEdBQ25ELFNBQVMsZUFBZSxhQUczQixTQUFTLElBS1QsU0FBUyxpQkFBaUIsb0JBQW9CLFFBQVE7QUFBQSxJQUV4RDtBQUVBLG1CQUFlLG9CQUFvQixJQUNuQztBQUNDLFVBQUksRUFBRSxTQUFTLFNBQVMsT0FBTyxJQUFLLGdCQUFBQyxRQUFxQixjQUFjLEdBQ25FLFNBQXNDLENBQUM7QUFFM0MsY0FDRSxNQUFNLFFBQ04sV0FBVyxnQkFBZ0IsR0FDcEIsUUFBUSxPQUFPLENBQUMsRUFDdkIsRUFDQSxLQUFLLE1BQ047QUFDQyxtQkFBVyxnQkFBZ0I7QUFBQSxNQUM1QixDQUFDO0FBR0YsVUFBSSxRQUFRO0FBSVosTUFGYyxPQUFPLG1CQUFxQixPQUl6QyxpQkFBaUIsT0FBTyxHQUV4QixVQUFVLFFBQ1IsS0FBSyxNQUNOO0FBQ0MsUUFBSSxPQUFPLDBCQUE0QixPQUV0QyxlQUFlLHlCQUF5QixPQUFPO0FBQUEsTUFFakQsQ0FBQyxHQUdGLFdBQVcsZ0JBQWdCLEdBRXZCLFdBRUgsUUFBUSxHQUVSLG1CQUFtQixNQUFNLE9BQU8sS0FBSyxXQUFXLFNBQVMsR0FBSSxDQUFDLENBQUMsTUFLaEUsbUJBQW1CLE1BQU0sT0FBTyxLQUFLLFdBQVcsUUFBUSxHQUFLLENBQUMsQ0FBQztBQUdoRSxVQUFJLFNBQVMsU0FBUyxZQUFZLFlBQ2xDO0FBQ0MsbUJBQVcsZ0JBQWdCLEdBRXZCLFVBR0gsUUFBUTtBQUFBLE1BRVYsR0FBRyxLQUFLO0FBRVIsWUFBTSxRQUNKLE1BQU0sT0FBSyxhQUFhLDhCQUE4QjtBQUFBLFFBQ3REO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRCxHQUFHLENBQUMsQ0FBQyxFQUNKLEtBQUssTUFDTjtBQUNDLFlBQ0E7QUFDQyx3QkFBYyxNQUFNO0FBQUEsUUFDckIsUUFFQTtBQUFBLFFBQUM7QUFFRCxpQkFBUyxNQUFNO0FBRWQsY0FDQTtBQUNDLHlCQUFhLEVBQUU7QUFBQSxVQUNoQixRQUVBO0FBQUEsVUFBQztBQUFBLE1BRUgsQ0FBQyxJQUdELFNBQVMsY0FBYyxjQUFjLHdDQUF3QztBQUFBLFFBQzdFO0FBQUEsUUFDQTtBQUFBLFFBQ0EsTUFBTSxhQUFhO0FBQUEsTUFDcEIsQ0FBQyxHQUVHLFVBRUgsTUFBTSxHQUFHO0FBQUEsSUFJWDtBQUVBLFVBQU0sb0JBQW9CLEdBQUcsR0FFN0IsT0FBTyxRQUFRLEdBQUcsS0FBSyxPQUFPO0FBQUEsRUFDL0IsR0FBRzsiLAogICJuYW1lcyI6IFsiZ2xvYmFsVGhpcyIsICJnbG9iYWxUaGlzIiwgImdsb2JhbFRoaXMiLCAiRGVubyIsICJnbG9iYWxUaGlzIiwgIlAiLCAiZ2xvYmFsVGhpcyIsICJnbG9iYWxUaGlzIiwgImdsb2JhbFRoaXMiLCAiU3ltYm9sIiwgImdsb2JhbFRoaXMiLCAiZG9jdW1lbnQiLCAiUCIsICJQIiwgImdsb2JhbFRoaXMiLCAiYWN0aXZlWERvY3VtZW50IiwgInZhbHVlIiwgImdsb2JhbFRoaXMiLCAiZ2xvYmFsVGhpcyIsICJUeXBlRXJyb3IiLCAiZ2xvYmFsVGhpcyIsICJnbG9iYWxUaGlzIiwgIkZ1bmN0aW9uIiwgIlN0cmluZyIsICJydW4iLCAiZ2xvYmFsVGhpcyIsICJnbG9iYWxUaGlzIiwgIk11dGF0aW9uT2JzZXJ2ZXIiLCAiZG9jdW1lbnQiLCAiUHJvbWlzZSIsICJnbG9iYWxUaGlzIiwgImdsb2JhbFRoaXMiLCAiZ2xvYmFsVGhpcyIsICJUeXBlRXJyb3IiLCAiZG9jdW1lbnQiLCAiZ2xvYmFsVGhpcyIsICJQcm9taXNlIiwgImdsb2JhbFRoaXMiLCAicmVxdWlyZV9wcm9taXNlIiwgInJlcXVpcmVfcHJvbWlzZSIsICJvcHRzIiwgImNvbmZpZyIsICJjb25maWciLCAiaTE4biIsICJQIiwgImltcG9ydF9wcm9taXNlIiwgIlAiXQp9Cg==
