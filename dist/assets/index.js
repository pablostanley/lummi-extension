!function() {
  function e(e2, t2) {
    for (var n2 = 0; n2 < t2.length; n2++) {
      const r2 = t2[n2];
      if ("string" != typeof r2 && !Array.isArray(r2)) {
        for (const t3 in r2) if ("default" !== t3 && !(t3 in e2)) {
          const n3 = Object.getOwnPropertyDescriptor(r2, t3);
          n3 && Object.defineProperty(e2, t3, n3.get ? n3 : { enumerable: true, get: () => r2[t3] });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }));
  }
  function t(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  var n = { exports: {} }, r = {}, a = { exports: {} }, o = {}, l = Symbol.for("react.element"), i = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.iterator;
  var y = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, w = {};
  function k(e2, t2, n2) {
    this.props = e2, this.context = t2, this.refs = w, this.updater = n2 || y;
  }
  function x() {
  }
  function S(e2, t2, n2) {
    this.props = e2, this.context = t2, this.refs = w, this.updater = n2 || y;
  }
  k.prototype.isReactComponent = {}, k.prototype.setState = function(e2, t2) {
    if ("object" != typeof e2 && "function" != typeof e2 && null != e2) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e2, t2, "setState");
  }, k.prototype.forceUpdate = function(e2) {
    this.updater.enqueueForceUpdate(this, e2, "forceUpdate");
  }, x.prototype = k.prototype;
  var E = S.prototype = new x();
  E.constructor = S, b(E, k.prototype), E.isPureReactComponent = true;
  var C = Array.isArray, N = Object.prototype.hasOwnProperty, _ = { current: null }, P = { key: true, ref: true, __self: true, __source: true };
  function T(e2, t2, n2) {
    var r2, a2 = {}, o2 = null, i2 = null;
    if (null != t2) for (r2 in void 0 !== t2.ref && (i2 = t2.ref), void 0 !== t2.key && (o2 = "" + t2.key), t2) N.call(t2, r2) && !P.hasOwnProperty(r2) && (a2[r2] = t2[r2]);
    var u2 = arguments.length - 2;
    if (1 === u2) a2.children = n2;
    else if (1 < u2) {
      for (var s2 = Array(u2), c2 = 0; c2 < u2; c2++) s2[c2] = arguments[c2 + 2];
      a2.children = s2;
    }
    if (e2 && e2.defaultProps) for (r2 in u2 = e2.defaultProps) void 0 === a2[r2] && (a2[r2] = u2[r2]);
    return { $$typeof: l, type: e2, key: o2, ref: i2, props: a2, _owner: _.current };
  }
  function L(e2) {
    return "object" == typeof e2 && null !== e2 && e2.$$typeof === l;
  }
  var R = /\/+/g;
  function z(e2, t2) {
    return "object" == typeof e2 && null !== e2 && null != e2.key ? function(e3) {
      var t3 = { "=": "=0", ":": "=2" };
      return "$" + e3.replace(/[=:]/g, function(e4) {
        return t3[e4];
      });
    }("" + e2.key) : t2.toString(36);
  }
  function M(e2, t2, n2, r2, a2) {
    var o2 = typeof e2;
    "undefined" !== o2 && "boolean" !== o2 || (e2 = null);
    var u2 = false;
    if (null === e2) u2 = true;
    else switch (o2) {
      case "string":
      case "number":
        u2 = true;
        break;
      case "object":
        switch (e2.$$typeof) {
          case l:
          case i:
            u2 = true;
        }
    }
    if (u2) return a2 = a2(u2 = e2), e2 = "" === r2 ? "." + z(u2, 0) : r2, C(a2) ? (n2 = "", null != e2 && (n2 = e2.replace(R, "$&/") + "/"), M(a2, t2, n2, "", function(e3) {
      return e3;
    })) : null != a2 && (L(a2) && (a2 = function(e3, t3) {
      return { $$typeof: l, type: e3.type, key: t3, ref: e3.ref, props: e3.props, _owner: e3._owner };
    }(a2, n2 + (!a2.key || u2 && u2.key === a2.key ? "" : ("" + a2.key).replace(R, "$&/") + "/") + e2)), t2.push(a2)), 1;
    if (u2 = 0, r2 = "" === r2 ? "." : r2 + ":", C(e2)) for (var s2 = 0; s2 < e2.length; s2++) {
      var c2 = r2 + z(o2 = e2[s2], s2);
      u2 += M(o2, t2, n2, c2, a2);
    }
    else if (c2 = function(e3) {
      return null === e3 || "object" != typeof e3 ? null : "function" == typeof (e3 = v && e3[v] || e3["@@iterator"]) ? e3 : null;
    }(e2), "function" == typeof c2) for (e2 = c2.call(e2), s2 = 0; !(o2 = e2.next()).done; ) u2 += M(o2 = o2.value, t2, n2, c2 = r2 + z(o2, s2++), a2);
    else if ("object" === o2) throw t2 = String(e2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t2 ? "object with keys {" + Object.keys(e2).join(", ") + "}" : t2) + "). If you meant to render a collection of children, use an array instead.");
    return u2;
  }
  function O(e2, t2, n2) {
    if (null == e2) return e2;
    var r2 = [], a2 = 0;
    return M(e2, r2, "", "", function(e3) {
      return t2.call(n2, e3, a2++);
    }), r2;
  }
  function D(e2) {
    if (-1 === e2._status) {
      var t2 = e2._result;
      (t2 = t2()).then(function(t3) {
        0 !== e2._status && -1 !== e2._status || (e2._status = 1, e2._result = t3);
      }, function(t3) {
        0 !== e2._status && -1 !== e2._status || (e2._status = 2, e2._result = t3);
      }), -1 === e2._status && (e2._status = 0, e2._result = t2);
    }
    if (1 === e2._status) return e2._result.default;
    throw e2._result;
  }
  var j = { current: null }, I = { transition: null }, F = { ReactCurrentDispatcher: j, ReactCurrentBatchConfig: I, ReactCurrentOwner: _ };
  function A() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  o.Children = { map: O, forEach: function(e2, t2, n2) {
    O(e2, function() {
      t2.apply(this, arguments);
    }, n2);
  }, count: function(e2) {
    var t2 = 0;
    return O(e2, function() {
      t2++;
    }), t2;
  }, toArray: function(e2) {
    return O(e2, function(e3) {
      return e3;
    }) || [];
  }, only: function(e2) {
    if (!L(e2)) throw Error("React.Children.only expected to receive a single React element child.");
    return e2;
  } }, o.Component = k, o.Fragment = u, o.Profiler = c, o.PureComponent = S, o.StrictMode = s, o.Suspense = h, o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F, o.act = A, o.cloneElement = function(e2, t2, n2) {
    if (null == e2) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e2 + ".");
    var r2 = b({}, e2.props), a2 = e2.key, o2 = e2.ref, i2 = e2._owner;
    if (null != t2) {
      if (void 0 !== t2.ref && (o2 = t2.ref, i2 = _.current), void 0 !== t2.key && (a2 = "" + t2.key), e2.type && e2.type.defaultProps) var u2 = e2.type.defaultProps;
      for (s2 in t2) N.call(t2, s2) && !P.hasOwnProperty(s2) && (r2[s2] = void 0 === t2[s2] && void 0 !== u2 ? u2[s2] : t2[s2]);
    }
    var s2 = arguments.length - 2;
    if (1 === s2) r2.children = n2;
    else if (1 < s2) {
      u2 = Array(s2);
      for (var c2 = 0; c2 < s2; c2++) u2[c2] = arguments[c2 + 2];
      r2.children = u2;
    }
    return { $$typeof: l, type: e2.type, key: a2, ref: o2, props: r2, _owner: i2 };
  }, o.createContext = function(e2) {
    return (e2 = { $$typeof: f, _currentValue: e2, _currentValue2: e2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: d, _context: e2 }, e2.Consumer = e2;
  }, o.createElement = T, o.createFactory = function(e2) {
    var t2 = T.bind(null, e2);
    return t2.type = e2, t2;
  }, o.createRef = function() {
    return { current: null };
  }, o.forwardRef = function(e2) {
    return { $$typeof: p, render: e2 };
  }, o.isValidElement = L, o.lazy = function(e2) {
    return { $$typeof: g, _payload: { _status: -1, _result: e2 }, _init: D };
  }, o.memo = function(e2, t2) {
    return { $$typeof: m, type: e2, compare: void 0 === t2 ? null : t2 };
  }, o.startTransition = function(e2) {
    var t2 = I.transition;
    I.transition = {};
    try {
      e2();
    } finally {
      I.transition = t2;
    }
  }, o.unstable_act = A, o.useCallback = function(e2, t2) {
    return j.current.useCallback(e2, t2);
  }, o.useContext = function(e2) {
    return j.current.useContext(e2);
  }, o.useDebugValue = function() {
  }, o.useDeferredValue = function(e2) {
    return j.current.useDeferredValue(e2);
  }, o.useEffect = function(e2, t2) {
    return j.current.useEffect(e2, t2);
  }, o.useId = function() {
    return j.current.useId();
  }, o.useImperativeHandle = function(e2, t2, n2) {
    return j.current.useImperativeHandle(e2, t2, n2);
  }, o.useInsertionEffect = function(e2, t2) {
    return j.current.useInsertionEffect(e2, t2);
  }, o.useLayoutEffect = function(e2, t2) {
    return j.current.useLayoutEffect(e2, t2);
  }, o.useMemo = function(e2, t2) {
    return j.current.useMemo(e2, t2);
  }, o.useReducer = function(e2, t2, n2) {
    return j.current.useReducer(e2, t2, n2);
  }, o.useRef = function(e2) {
    return j.current.useRef(e2);
  }, o.useState = function(e2) {
    return j.current.useState(e2);
  }, o.useSyncExternalStore = function(e2, t2, n2) {
    return j.current.useSyncExternalStore(e2, t2, n2);
  }, o.useTransition = function() {
    return j.current.useTransition();
  }, o.version = "18.3.1", a.exports = o;
  var U = a.exports;
  const W = t(U), B = e({ __proto__: null, default: W }, [U]);
  var $ = U, V = Symbol.for("react.element"), H = Symbol.for("react.fragment"), Q = Object.prototype.hasOwnProperty, q = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, K = { key: true, ref: true, __self: true, __source: true };
  function Y(e2, t2, n2) {
    var r2, a2 = {}, o2 = null, l2 = null;
    for (r2 in void 0 !== n2 && (o2 = "" + n2), void 0 !== t2.key && (o2 = "" + t2.key), void 0 !== t2.ref && (l2 = t2.ref), t2) Q.call(t2, r2) && !K.hasOwnProperty(r2) && (a2[r2] = t2[r2]);
    if (e2 && e2.defaultProps) for (r2 in t2 = e2.defaultProps) void 0 === a2[r2] && (a2[r2] = t2[r2]);
    return { $$typeof: V, type: e2, key: o2, ref: l2, props: a2, _owner: q.current };
  }
  r.Fragment = H, r.jsx = Y, r.jsxs = Y, n.exports = r;
  var X = n.exports, G = {}, Z = { exports: {} }, J = {}, ee = { exports: {} }, te = {};
  !function(e2) {
    function t2(e3, t3) {
      var n3 = e3.length;
      e3.push(t3);
      e: for (; 0 < n3; ) {
        var r3 = n3 - 1 >>> 1, o3 = e3[r3];
        if (!(0 < a2(o3, t3))) break e;
        e3[r3] = t3, e3[n3] = o3, n3 = r3;
      }
    }
    function n2(e3) {
      return 0 === e3.length ? null : e3[0];
    }
    function r2(e3) {
      if (0 === e3.length) return null;
      var t3 = e3[0], n3 = e3.pop();
      if (n3 !== t3) {
        e3[0] = n3;
        e: for (var r3 = 0, o3 = e3.length, l3 = o3 >>> 1; r3 < l3; ) {
          var i3 = 2 * (r3 + 1) - 1, u3 = e3[i3], s3 = i3 + 1, c3 = e3[s3];
          if (0 > a2(u3, n3)) s3 < o3 && 0 > a2(c3, u3) ? (e3[r3] = c3, e3[s3] = n3, r3 = s3) : (e3[r3] = u3, e3[i3] = n3, r3 = i3);
          else {
            if (!(s3 < o3 && 0 > a2(c3, n3))) break e;
            e3[r3] = c3, e3[s3] = n3, r3 = s3;
          }
        }
      }
      return t3;
    }
    function a2(e3, t3) {
      var n3 = e3.sortIndex - t3.sortIndex;
      return 0 !== n3 ? n3 : e3.id - t3.id;
    }
    if ("object" == typeof performance && "function" == typeof performance.now) {
      var o2 = performance;
      e2.unstable_now = function() {
        return o2.now();
      };
    } else {
      var l2 = Date, i2 = l2.now();
      e2.unstable_now = function() {
        return l2.now() - i2;
      };
    }
    var u2 = [], s2 = [], c2 = 1, d2 = null, f2 = 3, p2 = false, h2 = false, m2 = false, g2 = "function" == typeof setTimeout ? setTimeout : null, v2 = "function" == typeof clearTimeout ? clearTimeout : null, y2 = "undefined" != typeof setImmediate ? setImmediate : null;
    function b2(e3) {
      for (var a3 = n2(s2); null !== a3; ) {
        if (null === a3.callback) r2(s2);
        else {
          if (!(a3.startTime <= e3)) break;
          r2(s2), a3.sortIndex = a3.expirationTime, t2(u2, a3);
        }
        a3 = n2(s2);
      }
    }
    function w2(e3) {
      if (m2 = false, b2(e3), !h2) if (null !== n2(u2)) h2 = true, z2(k2);
      else {
        var t3 = n2(s2);
        null !== t3 && M2(w2, t3.startTime - e3);
      }
    }
    function k2(t3, a3) {
      h2 = false, m2 && (m2 = false, v2(C2), C2 = -1), p2 = true;
      var o3 = f2;
      try {
        for (b2(a3), d2 = n2(u2); null !== d2 && (!(d2.expirationTime > a3) || t3 && !P2()); ) {
          var l3 = d2.callback;
          if ("function" == typeof l3) {
            d2.callback = null, f2 = d2.priorityLevel;
            var i3 = l3(d2.expirationTime <= a3);
            a3 = e2.unstable_now(), "function" == typeof i3 ? d2.callback = i3 : d2 === n2(u2) && r2(u2), b2(a3);
          } else r2(u2);
          d2 = n2(u2);
        }
        if (null !== d2) var c3 = true;
        else {
          var g3 = n2(s2);
          null !== g3 && M2(w2, g3.startTime - a3), c3 = false;
        }
        return c3;
      } finally {
        d2 = null, f2 = o3, p2 = false;
      }
    }
    "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var x2, S2 = false, E2 = null, C2 = -1, N2 = 5, _2 = -1;
    function P2() {
      return !(e2.unstable_now() - _2 < N2);
    }
    function T2() {
      if (null !== E2) {
        var t3 = e2.unstable_now();
        _2 = t3;
        var n3 = true;
        try {
          n3 = E2(true, t3);
        } finally {
          n3 ? x2() : (S2 = false, E2 = null);
        }
      } else S2 = false;
    }
    if ("function" == typeof y2) x2 = function() {
      y2(T2);
    };
    else if ("undefined" != typeof MessageChannel) {
      var L2 = new MessageChannel(), R2 = L2.port2;
      L2.port1.onmessage = T2, x2 = function() {
        R2.postMessage(null);
      };
    } else x2 = function() {
      g2(T2, 0);
    };
    function z2(e3) {
      E2 = e3, S2 || (S2 = true, x2());
    }
    function M2(t3, n3) {
      C2 = g2(function() {
        t3(e2.unstable_now());
      }, n3);
    }
    e2.unstable_IdlePriority = 5, e2.unstable_ImmediatePriority = 1, e2.unstable_LowPriority = 4, e2.unstable_NormalPriority = 3, e2.unstable_Profiling = null, e2.unstable_UserBlockingPriority = 2, e2.unstable_cancelCallback = function(e3) {
      e3.callback = null;
    }, e2.unstable_continueExecution = function() {
      h2 || p2 || (h2 = true, z2(k2));
    }, e2.unstable_forceFrameRate = function(e3) {
      0 > e3 || 125 < e3 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N2 = 0 < e3 ? Math.floor(1e3 / e3) : 5;
    }, e2.unstable_getCurrentPriorityLevel = function() {
      return f2;
    }, e2.unstable_getFirstCallbackNode = function() {
      return n2(u2);
    }, e2.unstable_next = function(e3) {
      switch (f2) {
        case 1:
        case 2:
        case 3:
          var t3 = 3;
          break;
        default:
          t3 = f2;
      }
      var n3 = f2;
      f2 = t3;
      try {
        return e3();
      } finally {
        f2 = n3;
      }
    }, e2.unstable_pauseExecution = function() {
    }, e2.unstable_requestPaint = function() {
    }, e2.unstable_runWithPriority = function(e3, t3) {
      switch (e3) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e3 = 3;
      }
      var n3 = f2;
      f2 = e3;
      try {
        return t3();
      } finally {
        f2 = n3;
      }
    }, e2.unstable_scheduleCallback = function(r3, a3, o3) {
      var l3 = e2.unstable_now();
      switch ("object" == typeof o3 && null !== o3 ? o3 = "number" == typeof (o3 = o3.delay) && 0 < o3 ? l3 + o3 : l3 : o3 = l3, r3) {
        case 1:
          var i3 = -1;
          break;
        case 2:
          i3 = 250;
          break;
        case 5:
          i3 = 1073741823;
          break;
        case 4:
          i3 = 1e4;
          break;
        default:
          i3 = 5e3;
      }
      return r3 = { id: c2++, callback: a3, priorityLevel: r3, startTime: o3, expirationTime: i3 = o3 + i3, sortIndex: -1 }, o3 > l3 ? (r3.sortIndex = o3, t2(s2, r3), null === n2(u2) && r3 === n2(s2) && (m2 ? (v2(C2), C2 = -1) : m2 = true, M2(w2, o3 - l3))) : (r3.sortIndex = i3, t2(u2, r3), h2 || p2 || (h2 = true, z2(k2))), r3;
    }, e2.unstable_shouldYield = P2, e2.unstable_wrapCallback = function(e3) {
      var t3 = f2;
      return function() {
        var n3 = f2;
        f2 = t3;
        try {
          return e3.apply(this, arguments);
        } finally {
          f2 = n3;
        }
      };
    };
  }(te), ee.exports = te;
  var ne = ee.exports, re = U, ae = ne;
  function oe(e2) {
    for (var t2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + e2, n2 = 1; n2 < arguments.length; n2++) t2 += "&args[]=" + encodeURIComponent(arguments[n2]);
    return "Minified React error #" + e2 + "; visit " + t2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var le = /* @__PURE__ */ new Set(), ie = {};
  function ue(e2, t2) {
    se(e2, t2), se(e2 + "Capture", t2);
  }
  function se(e2, t2) {
    for (ie[e2] = t2, e2 = 0; e2 < t2.length; e2++) le.add(t2[e2]);
  }
  var ce = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement), de = Object.prototype.hasOwnProperty, fe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, pe = {}, he = {};
  function me(e2, t2, n2, r2, a2, o2, l2) {
    this.acceptsBooleans = 2 === t2 || 3 === t2 || 4 === t2, this.attributeName = r2, this.attributeNamespace = a2, this.mustUseProperty = n2, this.propertyName = e2, this.type = t2, this.sanitizeURL = o2, this.removeEmptyString = l2;
  }
  var ge = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e2) {
    ge[e2] = new me(e2, 0, false, e2, null, false, false);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e2) {
    var t2 = e2[0];
    ge[t2] = new me(t2, 1, false, e2[1], null, false, false);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e2) {
    ge[e2] = new me(e2, 2, false, e2.toLowerCase(), null, false, false);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e2) {
    ge[e2] = new me(e2, 2, false, e2, null, false, false);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e2) {
    ge[e2] = new me(e2, 3, false, e2.toLowerCase(), null, false, false);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e2) {
    ge[e2] = new me(e2, 3, true, e2, null, false, false);
  }), ["capture", "download"].forEach(function(e2) {
    ge[e2] = new me(e2, 4, false, e2, null, false, false);
  }), ["cols", "rows", "size", "span"].forEach(function(e2) {
    ge[e2] = new me(e2, 6, false, e2, null, false, false);
  }), ["rowSpan", "start"].forEach(function(e2) {
    ge[e2] = new me(e2, 5, false, e2.toLowerCase(), null, false, false);
  });
  var ve = /[\-:]([a-z])/g;
  function ye(e2) {
    return e2[1].toUpperCase();
  }
  function be(e2, t2, n2, r2) {
    var a2 = ge.hasOwnProperty(t2) ? ge[t2] : null;
    (null !== a2 ? 0 !== a2.type : r2 || !(2 < t2.length) || "o" !== t2[0] && "O" !== t2[0] || "n" !== t2[1] && "N" !== t2[1]) && (function(e3, t3, n3, r3) {
      if (null == t3 || function(e4, t4, n4, r4) {
        if (null !== n4 && 0 === n4.type) return false;
        switch (typeof t4) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            return !r4 && (null !== n4 ? !n4.acceptsBooleans : "data-" !== (e4 = e4.toLowerCase().slice(0, 5)) && "aria-" !== e4);
          default:
            return false;
        }
      }(e3, t3, n3, r3)) return true;
      if (r3) return false;
      if (null !== n3) switch (n3.type) {
        case 3:
          return !t3;
        case 4:
          return false === t3;
        case 5:
          return isNaN(t3);
        case 6:
          return isNaN(t3) || 1 > t3;
      }
      return false;
    }(t2, n2, a2, r2) && (n2 = null), r2 || null === a2 ? function(e3) {
      return !!de.call(he, e3) || !de.call(pe, e3) && (fe.test(e3) ? he[e3] = true : (pe[e3] = true, false));
    }(t2) && (null === n2 ? e2.removeAttribute(t2) : e2.setAttribute(t2, "" + n2)) : a2.mustUseProperty ? e2[a2.propertyName] = null === n2 ? 3 !== a2.type && "" : n2 : (t2 = a2.attributeName, r2 = a2.attributeNamespace, null === n2 ? e2.removeAttribute(t2) : (n2 = 3 === (a2 = a2.type) || 4 === a2 && true === n2 ? "" : "" + n2, r2 ? e2.setAttributeNS(r2, t2, n2) : e2.setAttribute(t2, n2))));
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e2) {
    var t2 = e2.replace(ve, ye);
    ge[t2] = new me(t2, 1, false, e2, null, false, false);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e2) {
    var t2 = e2.replace(ve, ye);
    ge[t2] = new me(t2, 1, false, e2, "http://www.w3.org/1999/xlink", false, false);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e2) {
    var t2 = e2.replace(ve, ye);
    ge[t2] = new me(t2, 1, false, e2, "http://www.w3.org/XML/1998/namespace", false, false);
  }), ["tabIndex", "crossOrigin"].forEach(function(e2) {
    ge[e2] = new me(e2, 1, false, e2.toLowerCase(), null, false, false);
  }), ge.xlinkHref = new me("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), ["src", "href", "action", "formAction"].forEach(function(e2) {
    ge[e2] = new me(e2, 1, false, e2.toLowerCase(), null, true, true);
  });
  var we = re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ke = Symbol.for("react.element"), xe = Symbol.for("react.portal"), Se = Symbol.for("react.fragment"), Ee = Symbol.for("react.strict_mode"), Ce = Symbol.for("react.profiler"), Ne = Symbol.for("react.provider"), _e = Symbol.for("react.context"), Pe = Symbol.for("react.forward_ref"), Te = Symbol.for("react.suspense"), Le = Symbol.for("react.suspense_list"), Re = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), Me = Symbol.for("react.offscreen"), Oe = Symbol.iterator;
  function De(e2) {
    return null === e2 || "object" != typeof e2 ? null : "function" == typeof (e2 = Oe && e2[Oe] || e2["@@iterator"]) ? e2 : null;
  }
  var je, Ie = Object.assign;
  function Fe(e2) {
    if (void 0 === je) try {
      throw Error();
    } catch (n2) {
      var t2 = n2.stack.trim().match(/\n( *(at )?)/);
      je = t2 && t2[1] || "";
    }
    return "\n" + je + e2;
  }
  var Ae = false;
  function Ue(e2, t2) {
    if (!e2 || Ae) return "";
    Ae = true;
    var n2 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t2) if (t2 = function() {
        throw Error();
      }, Object.defineProperty(t2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" == typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(t2, []);
        } catch (H2) {
          var r2 = H2;
        }
        Reflect.construct(e2, [], t2);
      } else {
        try {
          t2.call();
        } catch (H2) {
          r2 = H2;
        }
        e2.call(t2.prototype);
      }
      else {
        try {
          throw Error();
        } catch (H2) {
          r2 = H2;
        }
        e2();
      }
    } catch (H2) {
      if (H2 && r2 && "string" == typeof H2.stack) {
        for (var a2 = H2.stack.split("\n"), o2 = r2.stack.split("\n"), l2 = a2.length - 1, i2 = o2.length - 1; 1 <= l2 && 0 <= i2 && a2[l2] !== o2[i2]; ) i2--;
        for (; 1 <= l2 && 0 <= i2; l2--, i2--) if (a2[l2] !== o2[i2]) {
          if (1 !== l2 || 1 !== i2) do {
            if (l2--, 0 > --i2 || a2[l2] !== o2[i2]) {
              var u2 = "\n" + a2[l2].replace(" at new ", " at ");
              return e2.displayName && u2.includes("<anonymous>") && (u2 = u2.replace("<anonymous>", e2.displayName)), u2;
            }
          } while (1 <= l2 && 0 <= i2);
          break;
        }
      }
    } finally {
      Ae = false, Error.prepareStackTrace = n2;
    }
    return (e2 = e2 ? e2.displayName || e2.name : "") ? Fe(e2) : "";
  }
  function We(e2) {
    switch (e2.tag) {
      case 5:
        return Fe(e2.type);
      case 16:
        return Fe("Lazy");
      case 13:
        return Fe("Suspense");
      case 19:
        return Fe("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e2 = Ue(e2.type, false);
      case 11:
        return e2 = Ue(e2.type.render, false);
      case 1:
        return e2 = Ue(e2.type, true);
      default:
        return "";
    }
  }
  function Be(e2) {
    if (null == e2) return null;
    if ("function" == typeof e2) return e2.displayName || e2.name || null;
    if ("string" == typeof e2) return e2;
    switch (e2) {
      case Se:
        return "Fragment";
      case xe:
        return "Portal";
      case Ce:
        return "Profiler";
      case Ee:
        return "StrictMode";
      case Te:
        return "Suspense";
      case Le:
        return "SuspenseList";
    }
    if ("object" == typeof e2) switch (e2.$$typeof) {
      case _e:
        return (e2.displayName || "Context") + ".Consumer";
      case Ne:
        return (e2._context.displayName || "Context") + ".Provider";
      case Pe:
        var t2 = e2.render;
        return (e2 = e2.displayName) || (e2 = "" !== (e2 = t2.displayName || t2.name || "") ? "ForwardRef(" + e2 + ")" : "ForwardRef"), e2;
      case Re:
        return null !== (t2 = e2.displayName || null) ? t2 : Be(e2.type) || "Memo";
      case ze:
        t2 = e2._payload, e2 = e2._init;
        try {
          return Be(e2(t2));
        } catch (n2) {
        }
    }
    return null;
  }
  function $e(e2) {
    var t2 = e2.type;
    switch (e2.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t2.displayName || "Context") + ".Consumer";
      case 10:
        return (t2._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e2 = (e2 = t2.render).displayName || e2.name || "", t2.displayName || ("" !== e2 ? "ForwardRef(" + e2 + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t2;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Be(t2);
      case 8:
        return t2 === Ee ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" == typeof t2) return t2.displayName || t2.name || null;
        if ("string" == typeof t2) return t2;
    }
    return null;
  }
  function Ve(e2) {
    switch (typeof e2) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
      case "object":
        return e2;
      default:
        return "";
    }
  }
  function He(e2) {
    var t2 = e2.type;
    return (e2 = e2.nodeName) && "input" === e2.toLowerCase() && ("checkbox" === t2 || "radio" === t2);
  }
  function Qe(e2) {
    e2._valueTracker || (e2._valueTracker = function(e3) {
      var t2 = He(e3) ? "checked" : "value", n2 = Object.getOwnPropertyDescriptor(e3.constructor.prototype, t2), r2 = "" + e3[t2];
      if (!e3.hasOwnProperty(t2) && void 0 !== n2 && "function" == typeof n2.get && "function" == typeof n2.set) {
        var a2 = n2.get, o2 = n2.set;
        return Object.defineProperty(e3, t2, { configurable: true, get: function() {
          return a2.call(this);
        }, set: function(e4) {
          r2 = "" + e4, o2.call(this, e4);
        } }), Object.defineProperty(e3, t2, { enumerable: n2.enumerable }), { getValue: function() {
          return r2;
        }, setValue: function(e4) {
          r2 = "" + e4;
        }, stopTracking: function() {
          e3._valueTracker = null, delete e3[t2];
        } };
      }
    }(e2));
  }
  function qe(e2) {
    if (!e2) return false;
    var t2 = e2._valueTracker;
    if (!t2) return true;
    var n2 = t2.getValue(), r2 = "";
    return e2 && (r2 = He(e2) ? e2.checked ? "true" : "false" : e2.value), (e2 = r2) !== n2 && (t2.setValue(e2), true);
  }
  function Ke(e2) {
    if (void 0 === (e2 = e2 || ("undefined" != typeof document ? document : void 0))) return null;
    try {
      return e2.activeElement || e2.body;
    } catch (t2) {
      return e2.body;
    }
  }
  function Ye(e2, t2) {
    var n2 = t2.checked;
    return Ie({}, t2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n2 ? n2 : e2._wrapperState.initialChecked });
  }
  function Xe(e2, t2) {
    var n2 = null == t2.defaultValue ? "" : t2.defaultValue, r2 = null != t2.checked ? t2.checked : t2.defaultChecked;
    n2 = Ve(null != t2.value ? t2.value : n2), e2._wrapperState = { initialChecked: r2, initialValue: n2, controlled: "checkbox" === t2.type || "radio" === t2.type ? null != t2.checked : null != t2.value };
  }
  function Ge(e2, t2) {
    null != (t2 = t2.checked) && be(e2, "checked", t2, false);
  }
  function Ze(e2, t2) {
    Ge(e2, t2);
    var n2 = Ve(t2.value), r2 = t2.type;
    if (null != n2) "number" === r2 ? (0 === n2 && "" === e2.value || e2.value != n2) && (e2.value = "" + n2) : e2.value !== "" + n2 && (e2.value = "" + n2);
    else if ("submit" === r2 || "reset" === r2) return void e2.removeAttribute("value");
    t2.hasOwnProperty("value") ? et(e2, t2.type, n2) : t2.hasOwnProperty("defaultValue") && et(e2, t2.type, Ve(t2.defaultValue)), null == t2.checked && null != t2.defaultChecked && (e2.defaultChecked = !!t2.defaultChecked);
  }
  function Je(e2, t2, n2) {
    if (t2.hasOwnProperty("value") || t2.hasOwnProperty("defaultValue")) {
      var r2 = t2.type;
      if (!("submit" !== r2 && "reset" !== r2 || void 0 !== t2.value && null !== t2.value)) return;
      t2 = "" + e2._wrapperState.initialValue, n2 || t2 === e2.value || (e2.value = t2), e2.defaultValue = t2;
    }
    "" !== (n2 = e2.name) && (e2.name = ""), e2.defaultChecked = !!e2._wrapperState.initialChecked, "" !== n2 && (e2.name = n2);
  }
  function et(e2, t2, n2) {
    "number" === t2 && Ke(e2.ownerDocument) === e2 || (null == n2 ? e2.defaultValue = "" + e2._wrapperState.initialValue : e2.defaultValue !== "" + n2 && (e2.defaultValue = "" + n2));
  }
  var tt = Array.isArray;
  function nt(e2, t2, n2, r2) {
    if (e2 = e2.options, t2) {
      t2 = {};
      for (var a2 = 0; a2 < n2.length; a2++) t2["$" + n2[a2]] = true;
      for (n2 = 0; n2 < e2.length; n2++) a2 = t2.hasOwnProperty("$" + e2[n2].value), e2[n2].selected !== a2 && (e2[n2].selected = a2), a2 && r2 && (e2[n2].defaultSelected = true);
    } else {
      for (n2 = "" + Ve(n2), t2 = null, a2 = 0; a2 < e2.length; a2++) {
        if (e2[a2].value === n2) return e2[a2].selected = true, void (r2 && (e2[a2].defaultSelected = true));
        null !== t2 || e2[a2].disabled || (t2 = e2[a2]);
      }
      null !== t2 && (t2.selected = true);
    }
  }
  function rt(e2, t2) {
    if (null != t2.dangerouslySetInnerHTML) throw Error(oe(91));
    return Ie({}, t2, { value: void 0, defaultValue: void 0, children: "" + e2._wrapperState.initialValue });
  }
  function at(e2, t2) {
    var n2 = t2.value;
    if (null == n2) {
      if (n2 = t2.children, t2 = t2.defaultValue, null != n2) {
        if (null != t2) throw Error(oe(92));
        if (tt(n2)) {
          if (1 < n2.length) throw Error(oe(93));
          n2 = n2[0];
        }
        t2 = n2;
      }
      null == t2 && (t2 = ""), n2 = t2;
    }
    e2._wrapperState = { initialValue: Ve(n2) };
  }
  function ot(e2, t2) {
    var n2 = Ve(t2.value), r2 = Ve(t2.defaultValue);
    null != n2 && ((n2 = "" + n2) !== e2.value && (e2.value = n2), null == t2.defaultValue && e2.defaultValue !== n2 && (e2.defaultValue = n2)), null != r2 && (e2.defaultValue = "" + r2);
  }
  function lt(e2) {
    var t2 = e2.textContent;
    t2 === e2._wrapperState.initialValue && "" !== t2 && null !== t2 && (e2.value = t2);
  }
  function it(e2) {
    switch (e2) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ut(e2, t2) {
    return null == e2 || "http://www.w3.org/1999/xhtml" === e2 ? it(t2) : "http://www.w3.org/2000/svg" === e2 && "foreignObject" === t2 ? "http://www.w3.org/1999/xhtml" : e2;
  }
  var st, ct, dt = (ct = function(e2, t2) {
    if ("http://www.w3.org/2000/svg" !== e2.namespaceURI || "innerHTML" in e2) e2.innerHTML = t2;
    else {
      for ((st = st || document.createElement("div")).innerHTML = "<svg>" + t2.valueOf().toString() + "</svg>", t2 = st.firstChild; e2.firstChild; ) e2.removeChild(e2.firstChild);
      for (; t2.firstChild; ) e2.appendChild(t2.firstChild);
    }
  }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e2, t2, n2, r2) {
    MSApp.execUnsafeLocalFunction(function() {
      return ct(e2, t2);
    });
  } : ct);
  function ft(e2, t2) {
    if (t2) {
      var n2 = e2.firstChild;
      if (n2 && n2 === e2.lastChild && 3 === n2.nodeType) return void (n2.nodeValue = t2);
    }
    e2.textContent = t2;
  }
  var pt = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, ht = ["Webkit", "ms", "Moz", "O"];
  function mt(e2, t2, n2) {
    return null == t2 || "boolean" == typeof t2 || "" === t2 ? "" : n2 || "number" != typeof t2 || 0 === t2 || pt.hasOwnProperty(e2) && pt[e2] ? ("" + t2).trim() : t2 + "px";
  }
  function gt(e2, t2) {
    for (var n2 in e2 = e2.style, t2) if (t2.hasOwnProperty(n2)) {
      var r2 = 0 === n2.indexOf("--"), a2 = mt(n2, t2[n2], r2);
      "float" === n2 && (n2 = "cssFloat"), r2 ? e2.setProperty(n2, a2) : e2[n2] = a2;
    }
  }
  Object.keys(pt).forEach(function(e2) {
    ht.forEach(function(t2) {
      t2 = t2 + e2.charAt(0).toUpperCase() + e2.substring(1), pt[t2] = pt[e2];
    });
  });
  var vt = Ie({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function yt(e2, t2) {
    if (t2) {
      if (vt[e2] && (null != t2.children || null != t2.dangerouslySetInnerHTML)) throw Error(oe(137, e2));
      if (null != t2.dangerouslySetInnerHTML) {
        if (null != t2.children) throw Error(oe(60));
        if ("object" != typeof t2.dangerouslySetInnerHTML || !("__html" in t2.dangerouslySetInnerHTML)) throw Error(oe(61));
      }
      if (null != t2.style && "object" != typeof t2.style) throw Error(oe(62));
    }
  }
  function bt(e2, t2) {
    if (-1 === e2.indexOf("-")) return "string" == typeof t2.is;
    switch (e2) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var wt = null;
  function kt(e2) {
    return (e2 = e2.target || e2.srcElement || window).correspondingUseElement && (e2 = e2.correspondingUseElement), 3 === e2.nodeType ? e2.parentNode : e2;
  }
  var xt = null, St = null, Et = null;
  function Ct(e2) {
    if (e2 = wo(e2)) {
      if ("function" != typeof xt) throw Error(oe(280));
      var t2 = e2.stateNode;
      t2 && (t2 = xo(t2), xt(e2.stateNode, e2.type, t2));
    }
  }
  function Nt(e2) {
    St ? Et ? Et.push(e2) : Et = [e2] : St = e2;
  }
  function _t() {
    if (St) {
      var e2 = St, t2 = Et;
      if (Et = St = null, Ct(e2), t2) for (e2 = 0; e2 < t2.length; e2++) Ct(t2[e2]);
    }
  }
  function Pt(e2, t2) {
    return e2(t2);
  }
  function Tt() {
  }
  var Lt = false;
  function Rt(e2, t2, n2) {
    if (Lt) return e2(t2, n2);
    Lt = true;
    try {
      return Pt(e2, t2, n2);
    } finally {
      Lt = false, (null !== St || null !== Et) && (Tt(), _t());
    }
  }
  function zt(e2, t2) {
    var n2 = e2.stateNode;
    if (null === n2) return null;
    var r2 = xo(n2);
    if (null === r2) return null;
    n2 = r2[t2];
    e: switch (t2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r2 = !r2.disabled) || (r2 = !("button" === (e2 = e2.type) || "input" === e2 || "select" === e2 || "textarea" === e2)), e2 = !r2;
        break e;
      default:
        e2 = false;
    }
    if (e2) return null;
    if (n2 && "function" != typeof n2) throw Error(oe(231, t2, typeof n2));
    return n2;
  }
  var Mt = false;
  if (ce) try {
    var Ot = {};
    Object.defineProperty(Ot, "passive", { get: function() {
      Mt = true;
    } }), window.addEventListener("test", Ot, Ot), window.removeEventListener("test", Ot, Ot);
  } catch (ct2) {
    Mt = false;
  }
  function Dt(e2, t2, n2, r2, a2, o2, l2, i2, u2) {
    var s2 = Array.prototype.slice.call(arguments, 3);
    try {
      t2.apply(n2, s2);
    } catch (ld2) {
      this.onError(ld2);
    }
  }
  var jt = false, It = null, Ft = false, At = null, Ut = { onError: function(e2) {
    jt = true, It = e2;
  } };
  function Wt(e2, t2, n2, r2, a2, o2, l2, i2, u2) {
    jt = false, It = null, Dt.apply(Ut, arguments);
  }
  function Bt(e2) {
    var t2 = e2, n2 = e2;
    if (e2.alternate) for (; t2.return; ) t2 = t2.return;
    else {
      e2 = t2;
      do {
        !!(4098 & (t2 = e2).flags) && (n2 = t2.return), e2 = t2.return;
      } while (e2);
    }
    return 3 === t2.tag ? n2 : null;
  }
  function $t(e2) {
    if (13 === e2.tag) {
      var t2 = e2.memoizedState;
      if (null === t2 && (null !== (e2 = e2.alternate) && (t2 = e2.memoizedState)), null !== t2) return t2.dehydrated;
    }
    return null;
  }
  function Vt(e2) {
    if (Bt(e2) !== e2) throw Error(oe(188));
  }
  function Ht(e2) {
    return e2 = function(e3) {
      var t2 = e3.alternate;
      if (!t2) {
        if (null === (t2 = Bt(e3))) throw Error(oe(188));
        return t2 !== e3 ? null : e3;
      }
      for (var n2 = e3, r2 = t2; ; ) {
        var a2 = n2.return;
        if (null === a2) break;
        var o2 = a2.alternate;
        if (null === o2) {
          if (null !== (r2 = a2.return)) {
            n2 = r2;
            continue;
          }
          break;
        }
        if (a2.child === o2.child) {
          for (o2 = a2.child; o2; ) {
            if (o2 === n2) return Vt(a2), e3;
            if (o2 === r2) return Vt(a2), t2;
            o2 = o2.sibling;
          }
          throw Error(oe(188));
        }
        if (n2.return !== r2.return) n2 = a2, r2 = o2;
        else {
          for (var l2 = false, i2 = a2.child; i2; ) {
            if (i2 === n2) {
              l2 = true, n2 = a2, r2 = o2;
              break;
            }
            if (i2 === r2) {
              l2 = true, r2 = a2, n2 = o2;
              break;
            }
            i2 = i2.sibling;
          }
          if (!l2) {
            for (i2 = o2.child; i2; ) {
              if (i2 === n2) {
                l2 = true, n2 = o2, r2 = a2;
                break;
              }
              if (i2 === r2) {
                l2 = true, r2 = o2, n2 = a2;
                break;
              }
              i2 = i2.sibling;
            }
            if (!l2) throw Error(oe(189));
          }
        }
        if (n2.alternate !== r2) throw Error(oe(190));
      }
      if (3 !== n2.tag) throw Error(oe(188));
      return n2.stateNode.current === n2 ? e3 : t2;
    }(e2), null !== e2 ? Qt(e2) : null;
  }
  function Qt(e2) {
    if (5 === e2.tag || 6 === e2.tag) return e2;
    for (e2 = e2.child; null !== e2; ) {
      var t2 = Qt(e2);
      if (null !== t2) return t2;
      e2 = e2.sibling;
    }
    return null;
  }
  var qt = ae.unstable_scheduleCallback, Kt = ae.unstable_cancelCallback, Yt = ae.unstable_shouldYield, Xt = ae.unstable_requestPaint, Gt = ae.unstable_now, Zt = ae.unstable_getCurrentPriorityLevel, Jt = ae.unstable_ImmediatePriority, en = ae.unstable_UserBlockingPriority, tn = ae.unstable_NormalPriority, nn = ae.unstable_LowPriority, rn = ae.unstable_IdlePriority, an = null, on = null;
  var ln = Math.clz32 ? Math.clz32 : function(e2) {
    return e2 >>>= 0, 0 === e2 ? 32 : 31 - (un(e2) / sn | 0) | 0;
  }, un = Math.log, sn = Math.LN2;
  var cn = 64, dn = 4194304;
  function fn(e2) {
    switch (e2 & -e2) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return 4194240 & e2;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return 130023424 & e2;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e2;
    }
  }
  function pn(e2, t2) {
    var n2 = e2.pendingLanes;
    if (0 === n2) return 0;
    var r2 = 0, a2 = e2.suspendedLanes, o2 = e2.pingedLanes, l2 = 268435455 & n2;
    if (0 !== l2) {
      var i2 = l2 & ~a2;
      0 !== i2 ? r2 = fn(i2) : 0 !== (o2 &= l2) && (r2 = fn(o2));
    } else 0 !== (l2 = n2 & ~a2) ? r2 = fn(l2) : 0 !== o2 && (r2 = fn(o2));
    if (0 === r2) return 0;
    if (0 !== t2 && t2 !== r2 && !(t2 & a2) && ((a2 = r2 & -r2) >= (o2 = t2 & -t2) || 16 === a2 && 4194240 & o2)) return t2;
    if (4 & r2 && (r2 |= 16 & n2), 0 !== (t2 = e2.entangledLanes)) for (e2 = e2.entanglements, t2 &= r2; 0 < t2; ) a2 = 1 << (n2 = 31 - ln(t2)), r2 |= e2[n2], t2 &= ~a2;
    return r2;
  }
  function hn(e2, t2) {
    switch (e2) {
      case 1:
      case 2:
      case 4:
        return t2 + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t2 + 5e3;
      default:
        return -1;
    }
  }
  function mn(e2) {
    return 0 !== (e2 = -1073741825 & e2.pendingLanes) ? e2 : 1073741824 & e2 ? 1073741824 : 0;
  }
  function gn() {
    var e2 = cn;
    return !(4194240 & (cn <<= 1)) && (cn = 64), e2;
  }
  function vn(e2) {
    for (var t2 = [], n2 = 0; 31 > n2; n2++) t2.push(e2);
    return t2;
  }
  function yn(e2, t2, n2) {
    e2.pendingLanes |= t2, 536870912 !== t2 && (e2.suspendedLanes = 0, e2.pingedLanes = 0), (e2 = e2.eventTimes)[t2 = 31 - ln(t2)] = n2;
  }
  function bn(e2, t2) {
    var n2 = e2.entangledLanes |= t2;
    for (e2 = e2.entanglements; n2; ) {
      var r2 = 31 - ln(n2), a2 = 1 << r2;
      a2 & t2 | e2[r2] & t2 && (e2[r2] |= t2), n2 &= ~a2;
    }
  }
  var wn = 0;
  function kn(e2) {
    return 1 < (e2 &= -e2) ? 4 < e2 ? 268435455 & e2 ? 16 : 536870912 : 4 : 1;
  }
  var xn, Sn, En, Cn, Nn, _n = false, Pn = [], Tn = null, Ln = null, Rn = null, zn = /* @__PURE__ */ new Map(), Mn = /* @__PURE__ */ new Map(), On = [], Dn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function jn(e2, t2) {
    switch (e2) {
      case "focusin":
      case "focusout":
        Tn = null;
        break;
      case "dragenter":
      case "dragleave":
        Ln = null;
        break;
      case "mouseover":
      case "mouseout":
        Rn = null;
        break;
      case "pointerover":
      case "pointerout":
        zn.delete(t2.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Mn.delete(t2.pointerId);
    }
  }
  function In(e2, t2, n2, r2, a2, o2) {
    return null === e2 || e2.nativeEvent !== o2 ? (e2 = { blockedOn: t2, domEventName: n2, eventSystemFlags: r2, nativeEvent: o2, targetContainers: [a2] }, null !== t2 && (null !== (t2 = wo(t2)) && Sn(t2)), e2) : (e2.eventSystemFlags |= r2, t2 = e2.targetContainers, null !== a2 && -1 === t2.indexOf(a2) && t2.push(a2), e2);
  }
  function Fn(e2) {
    var t2 = bo(e2.target);
    if (null !== t2) {
      var n2 = Bt(t2);
      if (null !== n2) {
        if (13 === (t2 = n2.tag)) {
          if (null !== (t2 = $t(n2))) return e2.blockedOn = t2, void Nn(e2.priority, function() {
            En(n2);
          });
        } else if (3 === t2 && n2.stateNode.current.memoizedState.isDehydrated) return void (e2.blockedOn = 3 === n2.tag ? n2.stateNode.containerInfo : null);
      }
    }
    e2.blockedOn = null;
  }
  function An(e2) {
    if (null !== e2.blockedOn) return false;
    for (var t2 = e2.targetContainers; 0 < t2.length; ) {
      var n2 = Xn(e2.domEventName, e2.eventSystemFlags, t2[0], e2.nativeEvent);
      if (null !== n2) return null !== (t2 = wo(n2)) && Sn(t2), e2.blockedOn = n2, false;
      var r2 = new (n2 = e2.nativeEvent).constructor(n2.type, n2);
      wt = r2, n2.target.dispatchEvent(r2), wt = null, t2.shift();
    }
    return true;
  }
  function Un(e2, t2, n2) {
    An(e2) && n2.delete(t2);
  }
  function Wn() {
    _n = false, null !== Tn && An(Tn) && (Tn = null), null !== Ln && An(Ln) && (Ln = null), null !== Rn && An(Rn) && (Rn = null), zn.forEach(Un), Mn.forEach(Un);
  }
  function Bn(e2, t2) {
    e2.blockedOn === t2 && (e2.blockedOn = null, _n || (_n = true, ae.unstable_scheduleCallback(ae.unstable_NormalPriority, Wn)));
  }
  function $n(e2) {
    function t2(t3) {
      return Bn(t3, e2);
    }
    if (0 < Pn.length) {
      Bn(Pn[0], e2);
      for (var n2 = 1; n2 < Pn.length; n2++) {
        var r2 = Pn[n2];
        r2.blockedOn === e2 && (r2.blockedOn = null);
      }
    }
    for (null !== Tn && Bn(Tn, e2), null !== Ln && Bn(Ln, e2), null !== Rn && Bn(Rn, e2), zn.forEach(t2), Mn.forEach(t2), n2 = 0; n2 < On.length; n2++) (r2 = On[n2]).blockedOn === e2 && (r2.blockedOn = null);
    for (; 0 < On.length && null === (n2 = On[0]).blockedOn; ) Fn(n2), null === n2.blockedOn && On.shift();
  }
  var Vn = we.ReactCurrentBatchConfig, Hn = true;
  function Qn(e2, t2, n2, r2) {
    var a2 = wn, o2 = Vn.transition;
    Vn.transition = null;
    try {
      wn = 1, Kn(e2, t2, n2, r2);
    } finally {
      wn = a2, Vn.transition = o2;
    }
  }
  function qn(e2, t2, n2, r2) {
    var a2 = wn, o2 = Vn.transition;
    Vn.transition = null;
    try {
      wn = 4, Kn(e2, t2, n2, r2);
    } finally {
      wn = a2, Vn.transition = o2;
    }
  }
  function Kn(e2, t2, n2, r2) {
    if (Hn) {
      var a2 = Xn(e2, t2, n2, r2);
      if (null === a2) Va(e2, t2, r2, Yn, n2), jn(e2, r2);
      else if (function(e3, t3, n3, r3, a3) {
        switch (t3) {
          case "focusin":
            return Tn = In(Tn, e3, t3, n3, r3, a3), true;
          case "dragenter":
            return Ln = In(Ln, e3, t3, n3, r3, a3), true;
          case "mouseover":
            return Rn = In(Rn, e3, t3, n3, r3, a3), true;
          case "pointerover":
            var o3 = a3.pointerId;
            return zn.set(o3, In(zn.get(o3) || null, e3, t3, n3, r3, a3)), true;
          case "gotpointercapture":
            return o3 = a3.pointerId, Mn.set(o3, In(Mn.get(o3) || null, e3, t3, n3, r3, a3)), true;
        }
        return false;
      }(a2, e2, t2, n2, r2)) r2.stopPropagation();
      else if (jn(e2, r2), 4 & t2 && -1 < Dn.indexOf(e2)) {
        for (; null !== a2; ) {
          var o2 = wo(a2);
          if (null !== o2 && xn(o2), null === (o2 = Xn(e2, t2, n2, r2)) && Va(e2, t2, r2, Yn, n2), o2 === a2) break;
          a2 = o2;
        }
        null !== a2 && r2.stopPropagation();
      } else Va(e2, t2, r2, null, n2);
    }
  }
  var Yn = null;
  function Xn(e2, t2, n2, r2) {
    if (Yn = null, null !== (e2 = bo(e2 = kt(r2)))) if (null === (t2 = Bt(e2))) e2 = null;
    else if (13 === (n2 = t2.tag)) {
      if (null !== (e2 = $t(t2))) return e2;
      e2 = null;
    } else if (3 === n2) {
      if (t2.stateNode.current.memoizedState.isDehydrated) return 3 === t2.tag ? t2.stateNode.containerInfo : null;
      e2 = null;
    } else t2 !== e2 && (e2 = null);
    return Yn = e2, null;
  }
  function Gn(e2) {
    switch (e2) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Zt()) {
          case Jt:
            return 1;
          case en:
            return 4;
          case tn:
          case nn:
            return 16;
          case rn:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Zn = null, Jn = null, er = null;
  function tr() {
    if (er) return er;
    var e2, t2, n2 = Jn, r2 = n2.length, a2 = "value" in Zn ? Zn.value : Zn.textContent, o2 = a2.length;
    for (e2 = 0; e2 < r2 && n2[e2] === a2[e2]; e2++) ;
    var l2 = r2 - e2;
    for (t2 = 1; t2 <= l2 && n2[r2 - t2] === a2[o2 - t2]; t2++) ;
    return er = a2.slice(e2, 1 < t2 ? 1 - t2 : void 0);
  }
  function nr(e2) {
    var t2 = e2.keyCode;
    return "charCode" in e2 ? 0 === (e2 = e2.charCode) && 13 === t2 && (e2 = 13) : e2 = t2, 10 === e2 && (e2 = 13), 32 <= e2 || 13 === e2 ? e2 : 0;
  }
  function rr() {
    return true;
  }
  function ar() {
    return false;
  }
  function or(e2) {
    function t2(t3, n2, r2, a2, o2) {
      for (var l2 in this._reactName = t3, this._targetInst = r2, this.type = n2, this.nativeEvent = a2, this.target = o2, this.currentTarget = null, e2) e2.hasOwnProperty(l2) && (t3 = e2[l2], this[l2] = t3 ? t3(a2) : a2[l2]);
      return this.isDefaultPrevented = (null != a2.defaultPrevented ? a2.defaultPrevented : false === a2.returnValue) ? rr : ar, this.isPropagationStopped = ar, this;
    }
    return Ie(t2.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var e3 = this.nativeEvent;
      e3 && (e3.preventDefault ? e3.preventDefault() : "unknown" != typeof e3.returnValue && (e3.returnValue = false), this.isDefaultPrevented = rr);
    }, stopPropagation: function() {
      var e3 = this.nativeEvent;
      e3 && (e3.stopPropagation ? e3.stopPropagation() : "unknown" != typeof e3.cancelBubble && (e3.cancelBubble = true), this.isPropagationStopped = rr);
    }, persist: function() {
    }, isPersistent: rr }), t2;
  }
  var lr, ir, ur, sr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e2) {
    return e2.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, cr = or(sr), dr = Ie({}, sr, { view: 0, detail: 0 }), fr = or(dr), pr = Ie({}, dr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cr, button: 0, buttons: 0, relatedTarget: function(e2) {
    return void 0 === e2.relatedTarget ? e2.fromElement === e2.srcElement ? e2.toElement : e2.fromElement : e2.relatedTarget;
  }, movementX: function(e2) {
    return "movementX" in e2 ? e2.movementX : (e2 !== ur && (ur && "mousemove" === e2.type ? (lr = e2.screenX - ur.screenX, ir = e2.screenY - ur.screenY) : ir = lr = 0, ur = e2), lr);
  }, movementY: function(e2) {
    return "movementY" in e2 ? e2.movementY : ir;
  } }), hr = or(pr), mr = or(Ie({}, pr, { dataTransfer: 0 })), gr = or(Ie({}, dr, { relatedTarget: 0 })), vr = or(Ie({}, sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), yr = Ie({}, sr, { clipboardData: function(e2) {
    return "clipboardData" in e2 ? e2.clipboardData : window.clipboardData;
  } }), br = or(yr), wr = or(Ie({}, sr, { data: 0 })), kr = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, xr = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Sr = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Er(e2) {
    var t2 = this.nativeEvent;
    return t2.getModifierState ? t2.getModifierState(e2) : !!(e2 = Sr[e2]) && !!t2[e2];
  }
  function Cr() {
    return Er;
  }
  var Nr = Ie({}, dr, { key: function(e2) {
    if (e2.key) {
      var t2 = kr[e2.key] || e2.key;
      if ("Unidentified" !== t2) return t2;
    }
    return "keypress" === e2.type ? 13 === (e2 = nr(e2)) ? "Enter" : String.fromCharCode(e2) : "keydown" === e2.type || "keyup" === e2.type ? xr[e2.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Cr, charCode: function(e2) {
    return "keypress" === e2.type ? nr(e2) : 0;
  }, keyCode: function(e2) {
    return "keydown" === e2.type || "keyup" === e2.type ? e2.keyCode : 0;
  }, which: function(e2) {
    return "keypress" === e2.type ? nr(e2) : "keydown" === e2.type || "keyup" === e2.type ? e2.keyCode : 0;
  } }), _r = or(Nr), Pr = or(Ie({}, pr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), Tr = or(Ie({}, dr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cr })), Lr = or(Ie({}, sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), Rr = Ie({}, pr, { deltaX: function(e2) {
    return "deltaX" in e2 ? e2.deltaX : "wheelDeltaX" in e2 ? -e2.wheelDeltaX : 0;
  }, deltaY: function(e2) {
    return "deltaY" in e2 ? e2.deltaY : "wheelDeltaY" in e2 ? -e2.wheelDeltaY : "wheelDelta" in e2 ? -e2.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), zr = or(Rr), Mr = [9, 13, 27, 32], Or = ce && "CompositionEvent" in window, Dr = null;
  ce && "documentMode" in document && (Dr = document.documentMode);
  var jr = ce && "TextEvent" in window && !Dr, Ir = ce && (!Or || Dr && 8 < Dr && 11 >= Dr), Fr = String.fromCharCode(32), Ar = false;
  function Ur(e2, t2) {
    switch (e2) {
      case "keyup":
        return -1 !== Mr.indexOf(t2.keyCode);
      case "keydown":
        return 229 !== t2.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Wr(e2) {
    return "object" == typeof (e2 = e2.detail) && "data" in e2 ? e2.data : null;
  }
  var Br = false;
  var $r = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Vr(e2) {
    var t2 = e2 && e2.nodeName && e2.nodeName.toLowerCase();
    return "input" === t2 ? !!$r[e2.type] : "textarea" === t2;
  }
  function Hr(e2, t2, n2, r2) {
    Nt(r2), 0 < (t2 = Qa(t2, "onChange")).length && (n2 = new cr("onChange", "change", null, n2, r2), e2.push({ event: n2, listeners: t2 }));
  }
  var Qr = null, qr = null;
  function Kr(e2) {
    Fa(e2, 0);
  }
  function Yr(e2) {
    if (qe(ko(e2))) return e2;
  }
  function Xr(e2, t2) {
    if ("change" === e2) return t2;
  }
  var Gr = false;
  if (ce) {
    var Zr;
    if (ce) {
      var Jr = "oninput" in document;
      if (!Jr) {
        var ea = document.createElement("div");
        ea.setAttribute("oninput", "return;"), Jr = "function" == typeof ea.oninput;
      }
      Zr = Jr;
    } else Zr = false;
    Gr = Zr && (!document.documentMode || 9 < document.documentMode);
  }
  function ta() {
    Qr && (Qr.detachEvent("onpropertychange", na), qr = Qr = null);
  }
  function na(e2) {
    if ("value" === e2.propertyName && Yr(qr)) {
      var t2 = [];
      Hr(t2, qr, e2, kt(e2)), Rt(Kr, t2);
    }
  }
  function ra(e2, t2, n2) {
    "focusin" === e2 ? (ta(), qr = n2, (Qr = t2).attachEvent("onpropertychange", na)) : "focusout" === e2 && ta();
  }
  function aa(e2) {
    if ("selectionchange" === e2 || "keyup" === e2 || "keydown" === e2) return Yr(qr);
  }
  function oa(e2, t2) {
    if ("click" === e2) return Yr(t2);
  }
  function la(e2, t2) {
    if ("input" === e2 || "change" === e2) return Yr(t2);
  }
  var ia = "function" == typeof Object.is ? Object.is : function(e2, t2) {
    return e2 === t2 && (0 !== e2 || 1 / e2 == 1 / t2) || e2 != e2 && t2 != t2;
  };
  function ua(e2, t2) {
    if (ia(e2, t2)) return true;
    if ("object" != typeof e2 || null === e2 || "object" != typeof t2 || null === t2) return false;
    var n2 = Object.keys(e2), r2 = Object.keys(t2);
    if (n2.length !== r2.length) return false;
    for (r2 = 0; r2 < n2.length; r2++) {
      var a2 = n2[r2];
      if (!de.call(t2, a2) || !ia(e2[a2], t2[a2])) return false;
    }
    return true;
  }
  function sa(e2) {
    for (; e2 && e2.firstChild; ) e2 = e2.firstChild;
    return e2;
  }
  function ca(e2, t2) {
    var n2, r2 = sa(e2);
    for (e2 = 0; r2; ) {
      if (3 === r2.nodeType) {
        if (n2 = e2 + r2.textContent.length, e2 <= t2 && n2 >= t2) return { node: r2, offset: t2 - e2 };
        e2 = n2;
      }
      e: {
        for (; r2; ) {
          if (r2.nextSibling) {
            r2 = r2.nextSibling;
            break e;
          }
          r2 = r2.parentNode;
        }
        r2 = void 0;
      }
      r2 = sa(r2);
    }
  }
  function da(e2, t2) {
    return !(!e2 || !t2) && (e2 === t2 || (!e2 || 3 !== e2.nodeType) && (t2 && 3 === t2.nodeType ? da(e2, t2.parentNode) : "contains" in e2 ? e2.contains(t2) : !!e2.compareDocumentPosition && !!(16 & e2.compareDocumentPosition(t2))));
  }
  function fa() {
    for (var e2 = window, t2 = Ke(); t2 instanceof e2.HTMLIFrameElement; ) {
      try {
        var n2 = "string" == typeof t2.contentWindow.location.href;
      } catch (r2) {
        n2 = false;
      }
      if (!n2) break;
      t2 = Ke((e2 = t2.contentWindow).document);
    }
    return t2;
  }
  function pa(e2) {
    var t2 = e2 && e2.nodeName && e2.nodeName.toLowerCase();
    return t2 && ("input" === t2 && ("text" === e2.type || "search" === e2.type || "tel" === e2.type || "url" === e2.type || "password" === e2.type) || "textarea" === t2 || "true" === e2.contentEditable);
  }
  function ha(e2) {
    var t2 = fa(), n2 = e2.focusedElem, r2 = e2.selectionRange;
    if (t2 !== n2 && n2 && n2.ownerDocument && da(n2.ownerDocument.documentElement, n2)) {
      if (null !== r2 && pa(n2)) {
        if (t2 = r2.start, void 0 === (e2 = r2.end) && (e2 = t2), "selectionStart" in n2) n2.selectionStart = t2, n2.selectionEnd = Math.min(e2, n2.value.length);
        else if ((e2 = (t2 = n2.ownerDocument || document) && t2.defaultView || window).getSelection) {
          e2 = e2.getSelection();
          var a2 = n2.textContent.length, o2 = Math.min(r2.start, a2);
          r2 = void 0 === r2.end ? o2 : Math.min(r2.end, a2), !e2.extend && o2 > r2 && (a2 = r2, r2 = o2, o2 = a2), a2 = ca(n2, o2);
          var l2 = ca(n2, r2);
          a2 && l2 && (1 !== e2.rangeCount || e2.anchorNode !== a2.node || e2.anchorOffset !== a2.offset || e2.focusNode !== l2.node || e2.focusOffset !== l2.offset) && ((t2 = t2.createRange()).setStart(a2.node, a2.offset), e2.removeAllRanges(), o2 > r2 ? (e2.addRange(t2), e2.extend(l2.node, l2.offset)) : (t2.setEnd(l2.node, l2.offset), e2.addRange(t2)));
        }
      }
      for (t2 = [], e2 = n2; e2 = e2.parentNode; ) 1 === e2.nodeType && t2.push({ element: e2, left: e2.scrollLeft, top: e2.scrollTop });
      for ("function" == typeof n2.focus && n2.focus(), n2 = 0; n2 < t2.length; n2++) (e2 = t2[n2]).element.scrollLeft = e2.left, e2.element.scrollTop = e2.top;
    }
  }
  var ma = ce && "documentMode" in document && 11 >= document.documentMode, ga = null, va = null, ya = null, ba = false;
  function wa(e2, t2, n2) {
    var r2 = n2.window === n2 ? n2.document : 9 === n2.nodeType ? n2 : n2.ownerDocument;
    ba || null == ga || ga !== Ke(r2) || ("selectionStart" in (r2 = ga) && pa(r2) ? r2 = { start: r2.selectionStart, end: r2.selectionEnd } : r2 = { anchorNode: (r2 = (r2.ownerDocument && r2.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r2.anchorOffset, focusNode: r2.focusNode, focusOffset: r2.focusOffset }, ya && ua(ya, r2) || (ya = r2, 0 < (r2 = Qa(va, "onSelect")).length && (t2 = new cr("onSelect", "select", null, t2, n2), e2.push({ event: t2, listeners: r2 }), t2.target = ga)));
  }
  function ka(e2, t2) {
    var n2 = {};
    return n2[e2.toLowerCase()] = t2.toLowerCase(), n2["Webkit" + e2] = "webkit" + t2, n2["Moz" + e2] = "moz" + t2, n2;
  }
  var xa = { animationend: ka("Animation", "AnimationEnd"), animationiteration: ka("Animation", "AnimationIteration"), animationstart: ka("Animation", "AnimationStart"), transitionend: ka("Transition", "TransitionEnd") }, Sa = {}, Ea = {};
  function Ca(e2) {
    if (Sa[e2]) return Sa[e2];
    if (!xa[e2]) return e2;
    var t2, n2 = xa[e2];
    for (t2 in n2) if (n2.hasOwnProperty(t2) && t2 in Ea) return Sa[e2] = n2[t2];
    return e2;
  }
  ce && (Ea = document.createElement("div").style, "AnimationEvent" in window || (delete xa.animationend.animation, delete xa.animationiteration.animation, delete xa.animationstart.animation), "TransitionEvent" in window || delete xa.transitionend.transition);
  var Na = Ca("animationend"), _a = Ca("animationiteration"), Pa = Ca("animationstart"), Ta = Ca("transitionend"), La = /* @__PURE__ */ new Map(), Ra = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function za(e2, t2) {
    La.set(e2, t2), ue(t2, [e2]);
  }
  for (var Ma = 0; Ma < Ra.length; Ma++) {
    var Oa = Ra[Ma];
    za(Oa.toLowerCase(), "on" + (Oa[0].toUpperCase() + Oa.slice(1)));
  }
  za(Na, "onAnimationEnd"), za(_a, "onAnimationIteration"), za(Pa, "onAnimationStart"), za("dblclick", "onDoubleClick"), za("focusin", "onFocus"), za("focusout", "onBlur"), za(Ta, "onTransitionEnd"), se("onMouseEnter", ["mouseout", "mouseover"]), se("onMouseLeave", ["mouseout", "mouseover"]), se("onPointerEnter", ["pointerout", "pointerover"]), se("onPointerLeave", ["pointerout", "pointerover"]), ue("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ue("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ue("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ue("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ue("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ue("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Da = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ja = new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));
  function Ia(e2, t2, n2) {
    var r2 = e2.type || "unknown-event";
    e2.currentTarget = n2, function(e3, t3, n3, r3, a2, o2, l2, i2, u2) {
      if (Wt.apply(this, arguments), jt) {
        if (!jt) throw Error(oe(198));
        var s2 = It;
        jt = false, It = null, Ft || (Ft = true, At = s2);
      }
    }(r2, t2, void 0, e2), e2.currentTarget = null;
  }
  function Fa(e2, t2) {
    t2 = !!(4 & t2);
    for (var n2 = 0; n2 < e2.length; n2++) {
      var r2 = e2[n2], a2 = r2.event;
      r2 = r2.listeners;
      e: {
        var o2 = void 0;
        if (t2) for (var l2 = r2.length - 1; 0 <= l2; l2--) {
          var i2 = r2[l2], u2 = i2.instance, s2 = i2.currentTarget;
          if (i2 = i2.listener, u2 !== o2 && a2.isPropagationStopped()) break e;
          Ia(a2, i2, s2), o2 = u2;
        }
        else for (l2 = 0; l2 < r2.length; l2++) {
          if (u2 = (i2 = r2[l2]).instance, s2 = i2.currentTarget, i2 = i2.listener, u2 !== o2 && a2.isPropagationStopped()) break e;
          Ia(a2, i2, s2), o2 = u2;
        }
      }
    }
    if (Ft) throw e2 = At, Ft = false, At = null, e2;
  }
  function Aa(e2, t2) {
    var n2 = t2[go];
    void 0 === n2 && (n2 = t2[go] = /* @__PURE__ */ new Set());
    var r2 = e2 + "__bubble";
    n2.has(r2) || ($a(t2, e2, 2, false), n2.add(r2));
  }
  function Ua(e2, t2, n2) {
    var r2 = 0;
    t2 && (r2 |= 4), $a(n2, e2, r2, t2);
  }
  var Wa = "_reactListening" + Math.random().toString(36).slice(2);
  function Ba(e2) {
    if (!e2[Wa]) {
      e2[Wa] = true, le.forEach(function(t3) {
        "selectionchange" !== t3 && (ja.has(t3) || Ua(t3, false, e2), Ua(t3, true, e2));
      });
      var t2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
      null === t2 || t2[Wa] || (t2[Wa] = true, Ua("selectionchange", false, t2));
    }
  }
  function $a(e2, t2, n2, r2) {
    switch (Gn(t2)) {
      case 1:
        var a2 = Qn;
        break;
      case 4:
        a2 = qn;
        break;
      default:
        a2 = Kn;
    }
    n2 = a2.bind(null, t2, n2, e2), a2 = void 0, !Mt || "touchstart" !== t2 && "touchmove" !== t2 && "wheel" !== t2 || (a2 = true), r2 ? void 0 !== a2 ? e2.addEventListener(t2, n2, { capture: true, passive: a2 }) : e2.addEventListener(t2, n2, true) : void 0 !== a2 ? e2.addEventListener(t2, n2, { passive: a2 }) : e2.addEventListener(t2, n2, false);
  }
  function Va(e2, t2, n2, r2, a2) {
    var o2 = r2;
    if (!(1 & t2 || 2 & t2 || null === r2)) e: for (; ; ) {
      if (null === r2) return;
      var l2 = r2.tag;
      if (3 === l2 || 4 === l2) {
        var i2 = r2.stateNode.containerInfo;
        if (i2 === a2 || 8 === i2.nodeType && i2.parentNode === a2) break;
        if (4 === l2) for (l2 = r2.return; null !== l2; ) {
          var u2 = l2.tag;
          if ((3 === u2 || 4 === u2) && ((u2 = l2.stateNode.containerInfo) === a2 || 8 === u2.nodeType && u2.parentNode === a2)) return;
          l2 = l2.return;
        }
        for (; null !== i2; ) {
          if (null === (l2 = bo(i2))) return;
          if (5 === (u2 = l2.tag) || 6 === u2) {
            r2 = o2 = l2;
            continue e;
          }
          i2 = i2.parentNode;
        }
      }
      r2 = r2.return;
    }
    Rt(function() {
      var r3 = o2, a3 = kt(n2), l3 = [];
      e: {
        var i3 = La.get(e2);
        if (void 0 !== i3) {
          var u3 = cr, s2 = e2;
          switch (e2) {
            case "keypress":
              if (0 === nr(n2)) break e;
            case "keydown":
            case "keyup":
              u3 = _r;
              break;
            case "focusin":
              s2 = "focus", u3 = gr;
              break;
            case "focusout":
              s2 = "blur", u3 = gr;
              break;
            case "beforeblur":
            case "afterblur":
              u3 = gr;
              break;
            case "click":
              if (2 === n2.button) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              u3 = hr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              u3 = mr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              u3 = Tr;
              break;
            case Na:
            case _a:
            case Pa:
              u3 = vr;
              break;
            case Ta:
              u3 = Lr;
              break;
            case "scroll":
              u3 = fr;
              break;
            case "wheel":
              u3 = zr;
              break;
            case "copy":
            case "cut":
            case "paste":
              u3 = br;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              u3 = Pr;
          }
          var c2 = !!(4 & t2), d2 = !c2 && "scroll" === e2, f2 = c2 ? null !== i3 ? i3 + "Capture" : null : i3;
          c2 = [];
          for (var p2, h2 = r3; null !== h2; ) {
            var m2 = (p2 = h2).stateNode;
            if (5 === p2.tag && null !== m2 && (p2 = m2, null !== f2 && (null != (m2 = zt(h2, f2)) && c2.push(Ha(h2, m2, p2)))), d2) break;
            h2 = h2.return;
          }
          0 < c2.length && (i3 = new u3(i3, s2, null, n2, a3), l3.push({ event: i3, listeners: c2 }));
        }
      }
      if (!(7 & t2)) {
        if (u3 = "mouseout" === e2 || "pointerout" === e2, (!(i3 = "mouseover" === e2 || "pointerover" === e2) || n2 === wt || !(s2 = n2.relatedTarget || n2.fromElement) || !bo(s2) && !s2[mo]) && (u3 || i3) && (i3 = a3.window === a3 ? a3 : (i3 = a3.ownerDocument) ? i3.defaultView || i3.parentWindow : window, u3 ? (u3 = r3, null !== (s2 = (s2 = n2.relatedTarget || n2.toElement) ? bo(s2) : null) && (s2 !== (d2 = Bt(s2)) || 5 !== s2.tag && 6 !== s2.tag) && (s2 = null)) : (u3 = null, s2 = r3), u3 !== s2)) {
          if (c2 = hr, m2 = "onMouseLeave", f2 = "onMouseEnter", h2 = "mouse", "pointerout" !== e2 && "pointerover" !== e2 || (c2 = Pr, m2 = "onPointerLeave", f2 = "onPointerEnter", h2 = "pointer"), d2 = null == u3 ? i3 : ko(u3), p2 = null == s2 ? i3 : ko(s2), (i3 = new c2(m2, h2 + "leave", u3, n2, a3)).target = d2, i3.relatedTarget = p2, m2 = null, bo(a3) === r3 && ((c2 = new c2(f2, h2 + "enter", s2, n2, a3)).target = p2, c2.relatedTarget = d2, m2 = c2), d2 = m2, u3 && s2) e: {
            for (f2 = s2, h2 = 0, p2 = c2 = u3; p2; p2 = qa(p2)) h2++;
            for (p2 = 0, m2 = f2; m2; m2 = qa(m2)) p2++;
            for (; 0 < h2 - p2; ) c2 = qa(c2), h2--;
            for (; 0 < p2 - h2; ) f2 = qa(f2), p2--;
            for (; h2--; ) {
              if (c2 === f2 || null !== f2 && c2 === f2.alternate) break e;
              c2 = qa(c2), f2 = qa(f2);
            }
            c2 = null;
          }
          else c2 = null;
          null !== u3 && Ka(l3, i3, u3, c2, false), null !== s2 && null !== d2 && Ka(l3, d2, s2, c2, true);
        }
        if ("select" === (u3 = (i3 = r3 ? ko(r3) : window).nodeName && i3.nodeName.toLowerCase()) || "input" === u3 && "file" === i3.type) var g2 = Xr;
        else if (Vr(i3)) if (Gr) g2 = la;
        else {
          g2 = aa;
          var v2 = ra;
        }
        else (u3 = i3.nodeName) && "input" === u3.toLowerCase() && ("checkbox" === i3.type || "radio" === i3.type) && (g2 = oa);
        switch (g2 && (g2 = g2(e2, r3)) ? Hr(l3, g2, n2, a3) : (v2 && v2(e2, i3, r3), "focusout" === e2 && (v2 = i3._wrapperState) && v2.controlled && "number" === i3.type && et(i3, "number", i3.value)), v2 = r3 ? ko(r3) : window, e2) {
          case "focusin":
            (Vr(v2) || "true" === v2.contentEditable) && (ga = v2, va = r3, ya = null);
            break;
          case "focusout":
            ya = va = ga = null;
            break;
          case "mousedown":
            ba = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ba = false, wa(l3, n2, a3);
            break;
          case "selectionchange":
            if (ma) break;
          case "keydown":
          case "keyup":
            wa(l3, n2, a3);
        }
        var y2;
        if (Or) e: {
          switch (e2) {
            case "compositionstart":
              var b2 = "onCompositionStart";
              break e;
            case "compositionend":
              b2 = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b2 = "onCompositionUpdate";
              break e;
          }
          b2 = void 0;
        }
        else Br ? Ur(e2, n2) && (b2 = "onCompositionEnd") : "keydown" === e2 && 229 === n2.keyCode && (b2 = "onCompositionStart");
        b2 && (Ir && "ko" !== n2.locale && (Br || "onCompositionStart" !== b2 ? "onCompositionEnd" === b2 && Br && (y2 = tr()) : (Jn = "value" in (Zn = a3) ? Zn.value : Zn.textContent, Br = true)), 0 < (v2 = Qa(r3, b2)).length && (b2 = new wr(b2, e2, null, n2, a3), l3.push({ event: b2, listeners: v2 }), y2 ? b2.data = y2 : null !== (y2 = Wr(n2)) && (b2.data = y2))), (y2 = jr ? function(e3, t3) {
          switch (e3) {
            case "compositionend":
              return Wr(t3);
            case "keypress":
              return 32 !== t3.which ? null : (Ar = true, Fr);
            case "textInput":
              return (e3 = t3.data) === Fr && Ar ? null : e3;
            default:
              return null;
          }
        }(e2, n2) : function(e3, t3) {
          if (Br) return "compositionend" === e3 || !Or && Ur(e3, t3) ? (e3 = tr(), er = Jn = Zn = null, Br = false, e3) : null;
          switch (e3) {
            case "paste":
            default:
              return null;
            case "keypress":
              if (!(t3.ctrlKey || t3.altKey || t3.metaKey) || t3.ctrlKey && t3.altKey) {
                if (t3.char && 1 < t3.char.length) return t3.char;
                if (t3.which) return String.fromCharCode(t3.which);
              }
              return null;
            case "compositionend":
              return Ir && "ko" !== t3.locale ? null : t3.data;
          }
        }(e2, n2)) && (0 < (r3 = Qa(r3, "onBeforeInput")).length && (a3 = new wr("onBeforeInput", "beforeinput", null, n2, a3), l3.push({ event: a3, listeners: r3 }), a3.data = y2));
      }
      Fa(l3, t2);
    });
  }
  function Ha(e2, t2, n2) {
    return { instance: e2, listener: t2, currentTarget: n2 };
  }
  function Qa(e2, t2) {
    for (var n2 = t2 + "Capture", r2 = []; null !== e2; ) {
      var a2 = e2, o2 = a2.stateNode;
      5 === a2.tag && null !== o2 && (a2 = o2, null != (o2 = zt(e2, n2)) && r2.unshift(Ha(e2, o2, a2)), null != (o2 = zt(e2, t2)) && r2.push(Ha(e2, o2, a2))), e2 = e2.return;
    }
    return r2;
  }
  function qa(e2) {
    if (null === e2) return null;
    do {
      e2 = e2.return;
    } while (e2 && 5 !== e2.tag);
    return e2 || null;
  }
  function Ka(e2, t2, n2, r2, a2) {
    for (var o2 = t2._reactName, l2 = []; null !== n2 && n2 !== r2; ) {
      var i2 = n2, u2 = i2.alternate, s2 = i2.stateNode;
      if (null !== u2 && u2 === r2) break;
      5 === i2.tag && null !== s2 && (i2 = s2, a2 ? null != (u2 = zt(n2, o2)) && l2.unshift(Ha(n2, u2, i2)) : a2 || null != (u2 = zt(n2, o2)) && l2.push(Ha(n2, u2, i2))), n2 = n2.return;
    }
    0 !== l2.length && e2.push({ event: t2, listeners: l2 });
  }
  var Ya = /\r\n?/g, Xa = /\u0000|\uFFFD/g;
  function Ga(e2) {
    return ("string" == typeof e2 ? e2 : "" + e2).replace(Ya, "\n").replace(Xa, "");
  }
  function Za(e2, t2, n2) {
    if (t2 = Ga(t2), Ga(e2) !== t2 && n2) throw Error(oe(425));
  }
  function Ja() {
  }
  var eo = null, to = null;
  function no(e2, t2) {
    return "textarea" === e2 || "noscript" === e2 || "string" == typeof t2.children || "number" == typeof t2.children || "object" == typeof t2.dangerouslySetInnerHTML && null !== t2.dangerouslySetInnerHTML && null != t2.dangerouslySetInnerHTML.__html;
  }
  var ro = "function" == typeof setTimeout ? setTimeout : void 0, ao = "function" == typeof clearTimeout ? clearTimeout : void 0, oo = "function" == typeof Promise ? Promise : void 0, lo = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== oo ? function(e2) {
    return oo.resolve(null).then(e2).catch(io);
  } : ro;
  function io(e2) {
    setTimeout(function() {
      throw e2;
    });
  }
  function uo(e2, t2) {
    var n2 = t2, r2 = 0;
    do {
      var a2 = n2.nextSibling;
      if (e2.removeChild(n2), a2 && 8 === a2.nodeType) if ("/$" === (n2 = a2.data)) {
        if (0 === r2) return e2.removeChild(a2), void $n(t2);
        r2--;
      } else "$" !== n2 && "$?" !== n2 && "$!" !== n2 || r2++;
      n2 = a2;
    } while (n2);
    $n(t2);
  }
  function so(e2) {
    for (; null != e2; e2 = e2.nextSibling) {
      var t2 = e2.nodeType;
      if (1 === t2 || 3 === t2) break;
      if (8 === t2) {
        if ("$" === (t2 = e2.data) || "$!" === t2 || "$?" === t2) break;
        if ("/$" === t2) return null;
      }
    }
    return e2;
  }
  function co(e2) {
    e2 = e2.previousSibling;
    for (var t2 = 0; e2; ) {
      if (8 === e2.nodeType) {
        var n2 = e2.data;
        if ("$" === n2 || "$!" === n2 || "$?" === n2) {
          if (0 === t2) return e2;
          t2--;
        } else "/$" === n2 && t2++;
      }
      e2 = e2.previousSibling;
    }
    return null;
  }
  var fo = Math.random().toString(36).slice(2), po = "__reactFiber$" + fo, ho = "__reactProps$" + fo, mo = "__reactContainer$" + fo, go = "__reactEvents$" + fo, vo = "__reactListeners$" + fo, yo = "__reactHandles$" + fo;
  function bo(e2) {
    var t2 = e2[po];
    if (t2) return t2;
    for (var n2 = e2.parentNode; n2; ) {
      if (t2 = n2[mo] || n2[po]) {
        if (n2 = t2.alternate, null !== t2.child || null !== n2 && null !== n2.child) for (e2 = co(e2); null !== e2; ) {
          if (n2 = e2[po]) return n2;
          e2 = co(e2);
        }
        return t2;
      }
      n2 = (e2 = n2).parentNode;
    }
    return null;
  }
  function wo(e2) {
    return !(e2 = e2[po] || e2[mo]) || 5 !== e2.tag && 6 !== e2.tag && 13 !== e2.tag && 3 !== e2.tag ? null : e2;
  }
  function ko(e2) {
    if (5 === e2.tag || 6 === e2.tag) return e2.stateNode;
    throw Error(oe(33));
  }
  function xo(e2) {
    return e2[ho] || null;
  }
  var So = [], Eo = -1;
  function Co(e2) {
    return { current: e2 };
  }
  function No(e2) {
    0 > Eo || (e2.current = So[Eo], So[Eo] = null, Eo--);
  }
  function _o(e2, t2) {
    Eo++, So[Eo] = e2.current, e2.current = t2;
  }
  var Po = {}, To = Co(Po), Lo = Co(false), Ro = Po;
  function zo(e2, t2) {
    var n2 = e2.type.contextTypes;
    if (!n2) return Po;
    var r2 = e2.stateNode;
    if (r2 && r2.__reactInternalMemoizedUnmaskedChildContext === t2) return r2.__reactInternalMemoizedMaskedChildContext;
    var a2, o2 = {};
    for (a2 in n2) o2[a2] = t2[a2];
    return r2 && ((e2 = e2.stateNode).__reactInternalMemoizedUnmaskedChildContext = t2, e2.__reactInternalMemoizedMaskedChildContext = o2), o2;
  }
  function Mo(e2) {
    return null != (e2 = e2.childContextTypes);
  }
  function Oo() {
    No(Lo), No(To);
  }
  function Do(e2, t2, n2) {
    if (To.current !== Po) throw Error(oe(168));
    _o(To, t2), _o(Lo, n2);
  }
  function jo(e2, t2, n2) {
    var r2 = e2.stateNode;
    if (t2 = t2.childContextTypes, "function" != typeof r2.getChildContext) return n2;
    for (var a2 in r2 = r2.getChildContext()) if (!(a2 in t2)) throw Error(oe(108, $e(e2) || "Unknown", a2));
    return Ie({}, n2, r2);
  }
  function Io(e2) {
    return e2 = (e2 = e2.stateNode) && e2.__reactInternalMemoizedMergedChildContext || Po, Ro = To.current, _o(To, e2), _o(Lo, Lo.current), true;
  }
  function Fo(e2, t2, n2) {
    var r2 = e2.stateNode;
    if (!r2) throw Error(oe(169));
    n2 ? (e2 = jo(e2, t2, Ro), r2.__reactInternalMemoizedMergedChildContext = e2, No(Lo), No(To), _o(To, e2)) : No(Lo), _o(Lo, n2);
  }
  var Ao = null, Uo = false, Wo = false;
  function Bo(e2) {
    null === Ao ? Ao = [e2] : Ao.push(e2);
  }
  function $o() {
    if (!Wo && null !== Ao) {
      Wo = true;
      var e2 = 0, t2 = wn;
      try {
        var n2 = Ao;
        for (wn = 1; e2 < n2.length; e2++) {
          var r2 = n2[e2];
          do {
            r2 = r2(true);
          } while (null !== r2);
        }
        Ao = null, Uo = false;
      } catch (a2) {
        throw null !== Ao && (Ao = Ao.slice(e2 + 1)), qt(Jt, $o), a2;
      } finally {
        wn = t2, Wo = false;
      }
    }
    return null;
  }
  var Vo = [], Ho = 0, Qo = null, qo = 0, Ko = [], Yo = 0, Xo = null, Go = 1, Zo = "";
  function Jo(e2, t2) {
    Vo[Ho++] = qo, Vo[Ho++] = Qo, Qo = e2, qo = t2;
  }
  function el(e2, t2, n2) {
    Ko[Yo++] = Go, Ko[Yo++] = Zo, Ko[Yo++] = Xo, Xo = e2;
    var r2 = Go;
    e2 = Zo;
    var a2 = 32 - ln(r2) - 1;
    r2 &= ~(1 << a2), n2 += 1;
    var o2 = 32 - ln(t2) + a2;
    if (30 < o2) {
      var l2 = a2 - a2 % 5;
      o2 = (r2 & (1 << l2) - 1).toString(32), r2 >>= l2, a2 -= l2, Go = 1 << 32 - ln(t2) + a2 | n2 << a2 | r2, Zo = o2 + e2;
    } else Go = 1 << o2 | n2 << a2 | r2, Zo = e2;
  }
  function tl(e2) {
    null !== e2.return && (Jo(e2, 1), el(e2, 1, 0));
  }
  function nl(e2) {
    for (; e2 === Qo; ) Qo = Vo[--Ho], Vo[Ho] = null, qo = Vo[--Ho], Vo[Ho] = null;
    for (; e2 === Xo; ) Xo = Ko[--Yo], Ko[Yo] = null, Zo = Ko[--Yo], Ko[Yo] = null, Go = Ko[--Yo], Ko[Yo] = null;
  }
  var rl = null, al = null, ol = false, ll = null;
  function il(e2, t2) {
    var n2 = Rc(5, null, null, 0);
    n2.elementType = "DELETED", n2.stateNode = t2, n2.return = e2, null === (t2 = e2.deletions) ? (e2.deletions = [n2], e2.flags |= 16) : t2.push(n2);
  }
  function ul(e2, t2) {
    switch (e2.tag) {
      case 5:
        var n2 = e2.type;
        return null !== (t2 = 1 !== t2.nodeType || n2.toLowerCase() !== t2.nodeName.toLowerCase() ? null : t2) && (e2.stateNode = t2, rl = e2, al = so(t2.firstChild), true);
      case 6:
        return null !== (t2 = "" === e2.pendingProps || 3 !== t2.nodeType ? null : t2) && (e2.stateNode = t2, rl = e2, al = null, true);
      case 13:
        return null !== (t2 = 8 !== t2.nodeType ? null : t2) && (n2 = null !== Xo ? { id: Go, overflow: Zo } : null, e2.memoizedState = { dehydrated: t2, treeContext: n2, retryLane: 1073741824 }, (n2 = Rc(18, null, null, 0)).stateNode = t2, n2.return = e2, e2.child = n2, rl = e2, al = null, true);
      default:
        return false;
    }
  }
  function sl(e2) {
    return !(!(1 & e2.mode) || 128 & e2.flags);
  }
  function cl(e2) {
    if (ol) {
      var t2 = al;
      if (t2) {
        var n2 = t2;
        if (!ul(e2, t2)) {
          if (sl(e2)) throw Error(oe(418));
          t2 = so(n2.nextSibling);
          var r2 = rl;
          t2 && ul(e2, t2) ? il(r2, n2) : (e2.flags = -4097 & e2.flags | 2, ol = false, rl = e2);
        }
      } else {
        if (sl(e2)) throw Error(oe(418));
        e2.flags = -4097 & e2.flags | 2, ol = false, rl = e2;
      }
    }
  }
  function dl(e2) {
    for (e2 = e2.return; null !== e2 && 5 !== e2.tag && 3 !== e2.tag && 13 !== e2.tag; ) e2 = e2.return;
    rl = e2;
  }
  function fl(e2) {
    if (e2 !== rl) return false;
    if (!ol) return dl(e2), ol = true, false;
    var t2;
    if ((t2 = 3 !== e2.tag) && !(t2 = 5 !== e2.tag) && (t2 = "head" !== (t2 = e2.type) && "body" !== t2 && !no(e2.type, e2.memoizedProps)), t2 && (t2 = al)) {
      if (sl(e2)) throw pl(), Error(oe(418));
      for (; t2; ) il(e2, t2), t2 = so(t2.nextSibling);
    }
    if (dl(e2), 13 === e2.tag) {
      if (!(e2 = null !== (e2 = e2.memoizedState) ? e2.dehydrated : null)) throw Error(oe(317));
      e: {
        for (e2 = e2.nextSibling, t2 = 0; e2; ) {
          if (8 === e2.nodeType) {
            var n2 = e2.data;
            if ("/$" === n2) {
              if (0 === t2) {
                al = so(e2.nextSibling);
                break e;
              }
              t2--;
            } else "$" !== n2 && "$!" !== n2 && "$?" !== n2 || t2++;
          }
          e2 = e2.nextSibling;
        }
        al = null;
      }
    } else al = rl ? so(e2.stateNode.nextSibling) : null;
    return true;
  }
  function pl() {
    for (var e2 = al; e2; ) e2 = so(e2.nextSibling);
  }
  function hl() {
    al = rl = null, ol = false;
  }
  function ml(e2) {
    null === ll ? ll = [e2] : ll.push(e2);
  }
  var gl = we.ReactCurrentBatchConfig;
  function vl(e2, t2, n2) {
    if (null !== (e2 = n2.ref) && "function" != typeof e2 && "object" != typeof e2) {
      if (n2._owner) {
        if (n2 = n2._owner) {
          if (1 !== n2.tag) throw Error(oe(309));
          var r2 = n2.stateNode;
        }
        if (!r2) throw Error(oe(147, e2));
        var a2 = r2, o2 = "" + e2;
        return null !== t2 && null !== t2.ref && "function" == typeof t2.ref && t2.ref._stringRef === o2 ? t2.ref : (t2 = function(e3) {
          var t3 = a2.refs;
          null === e3 ? delete t3[o2] : t3[o2] = e3;
        }, t2._stringRef = o2, t2);
      }
      if ("string" != typeof e2) throw Error(oe(284));
      if (!n2._owner) throw Error(oe(290, e2));
    }
    return e2;
  }
  function yl(e2, t2) {
    throw e2 = Object.prototype.toString.call(t2), Error(oe(31, "[object Object]" === e2 ? "object with keys {" + Object.keys(t2).join(", ") + "}" : e2));
  }
  function bl(e2) {
    return (0, e2._init)(e2._payload);
  }
  function wl(e2) {
    function t2(t3, n3) {
      if (e2) {
        var r3 = t3.deletions;
        null === r3 ? (t3.deletions = [n3], t3.flags |= 16) : r3.push(n3);
      }
    }
    function n2(n3, r3) {
      if (!e2) return null;
      for (; null !== r3; ) t2(n3, r3), r3 = r3.sibling;
      return null;
    }
    function r2(e3, t3) {
      for (e3 = /* @__PURE__ */ new Map(); null !== t3; ) null !== t3.key ? e3.set(t3.key, t3) : e3.set(t3.index, t3), t3 = t3.sibling;
      return e3;
    }
    function a2(e3, t3) {
      return (e3 = Mc(e3, t3)).index = 0, e3.sibling = null, e3;
    }
    function o2(t3, n3, r3) {
      return t3.index = r3, e2 ? null !== (r3 = t3.alternate) ? (r3 = r3.index) < n3 ? (t3.flags |= 2, n3) : r3 : (t3.flags |= 2, n3) : (t3.flags |= 1048576, n3);
    }
    function l2(t3) {
      return e2 && null === t3.alternate && (t3.flags |= 2), t3;
    }
    function i2(e3, t3, n3, r3) {
      return null === t3 || 6 !== t3.tag ? ((t3 = Ic(n3, e3.mode, r3)).return = e3, t3) : ((t3 = a2(t3, n3)).return = e3, t3);
    }
    function u2(e3, t3, n3, r3) {
      var o3 = n3.type;
      return o3 === Se ? c2(e3, t3, n3.props.children, r3, n3.key) : null !== t3 && (t3.elementType === o3 || "object" == typeof o3 && null !== o3 && o3.$$typeof === ze && bl(o3) === t3.type) ? ((r3 = a2(t3, n3.props)).ref = vl(e3, t3, n3), r3.return = e3, r3) : ((r3 = Oc(n3.type, n3.key, n3.props, null, e3.mode, r3)).ref = vl(e3, t3, n3), r3.return = e3, r3);
    }
    function s2(e3, t3, n3, r3) {
      return null === t3 || 4 !== t3.tag || t3.stateNode.containerInfo !== n3.containerInfo || t3.stateNode.implementation !== n3.implementation ? ((t3 = Fc(n3, e3.mode, r3)).return = e3, t3) : ((t3 = a2(t3, n3.children || [])).return = e3, t3);
    }
    function c2(e3, t3, n3, r3, o3) {
      return null === t3 || 7 !== t3.tag ? ((t3 = Dc(n3, e3.mode, r3, o3)).return = e3, t3) : ((t3 = a2(t3, n3)).return = e3, t3);
    }
    function d2(e3, t3, n3) {
      if ("string" == typeof t3 && "" !== t3 || "number" == typeof t3) return (t3 = Ic("" + t3, e3.mode, n3)).return = e3, t3;
      if ("object" == typeof t3 && null !== t3) {
        switch (t3.$$typeof) {
          case ke:
            return (n3 = Oc(t3.type, t3.key, t3.props, null, e3.mode, n3)).ref = vl(e3, null, t3), n3.return = e3, n3;
          case xe:
            return (t3 = Fc(t3, e3.mode, n3)).return = e3, t3;
          case ze:
            return d2(e3, (0, t3._init)(t3._payload), n3);
        }
        if (tt(t3) || De(t3)) return (t3 = Dc(t3, e3.mode, n3, null)).return = e3, t3;
        yl(e3, t3);
      }
      return null;
    }
    function f2(e3, t3, n3, r3) {
      var a3 = null !== t3 ? t3.key : null;
      if ("string" == typeof n3 && "" !== n3 || "number" == typeof n3) return null !== a3 ? null : i2(e3, t3, "" + n3, r3);
      if ("object" == typeof n3 && null !== n3) {
        switch (n3.$$typeof) {
          case ke:
            return n3.key === a3 ? u2(e3, t3, n3, r3) : null;
          case xe:
            return n3.key === a3 ? s2(e3, t3, n3, r3) : null;
          case ze:
            return f2(e3, t3, (a3 = n3._init)(n3._payload), r3);
        }
        if (tt(n3) || De(n3)) return null !== a3 ? null : c2(e3, t3, n3, r3, null);
        yl(e3, n3);
      }
      return null;
    }
    function p2(e3, t3, n3, r3, a3) {
      if ("string" == typeof r3 && "" !== r3 || "number" == typeof r3) return i2(t3, e3 = e3.get(n3) || null, "" + r3, a3);
      if ("object" == typeof r3 && null !== r3) {
        switch (r3.$$typeof) {
          case ke:
            return u2(t3, e3 = e3.get(null === r3.key ? n3 : r3.key) || null, r3, a3);
          case xe:
            return s2(t3, e3 = e3.get(null === r3.key ? n3 : r3.key) || null, r3, a3);
          case ze:
            return p2(e3, t3, n3, (0, r3._init)(r3._payload), a3);
        }
        if (tt(r3) || De(r3)) return c2(t3, e3 = e3.get(n3) || null, r3, a3, null);
        yl(t3, r3);
      }
      return null;
    }
    function h2(a3, l3, i3, u3) {
      for (var s3 = null, c3 = null, h3 = l3, m3 = l3 = 0, g2 = null; null !== h3 && m3 < i3.length; m3++) {
        h3.index > m3 ? (g2 = h3, h3 = null) : g2 = h3.sibling;
        var v2 = f2(a3, h3, i3[m3], u3);
        if (null === v2) {
          null === h3 && (h3 = g2);
          break;
        }
        e2 && h3 && null === v2.alternate && t2(a3, h3), l3 = o2(v2, l3, m3), null === c3 ? s3 = v2 : c3.sibling = v2, c3 = v2, h3 = g2;
      }
      if (m3 === i3.length) return n2(a3, h3), ol && Jo(a3, m3), s3;
      if (null === h3) {
        for (; m3 < i3.length; m3++) null !== (h3 = d2(a3, i3[m3], u3)) && (l3 = o2(h3, l3, m3), null === c3 ? s3 = h3 : c3.sibling = h3, c3 = h3);
        return ol && Jo(a3, m3), s3;
      }
      for (h3 = r2(a3, h3); m3 < i3.length; m3++) null !== (g2 = p2(h3, a3, m3, i3[m3], u3)) && (e2 && null !== g2.alternate && h3.delete(null === g2.key ? m3 : g2.key), l3 = o2(g2, l3, m3), null === c3 ? s3 = g2 : c3.sibling = g2, c3 = g2);
      return e2 && h3.forEach(function(e3) {
        return t2(a3, e3);
      }), ol && Jo(a3, m3), s3;
    }
    function m2(a3, l3, i3, u3) {
      var s3 = De(i3);
      if ("function" != typeof s3) throw Error(oe(150));
      if (null == (i3 = s3.call(i3))) throw Error(oe(151));
      for (var c3 = s3 = null, h3 = l3, m3 = l3 = 0, g2 = null, v2 = i3.next(); null !== h3 && !v2.done; m3++, v2 = i3.next()) {
        h3.index > m3 ? (g2 = h3, h3 = null) : g2 = h3.sibling;
        var y2 = f2(a3, h3, v2.value, u3);
        if (null === y2) {
          null === h3 && (h3 = g2);
          break;
        }
        e2 && h3 && null === y2.alternate && t2(a3, h3), l3 = o2(y2, l3, m3), null === c3 ? s3 = y2 : c3.sibling = y2, c3 = y2, h3 = g2;
      }
      if (v2.done) return n2(a3, h3), ol && Jo(a3, m3), s3;
      if (null === h3) {
        for (; !v2.done; m3++, v2 = i3.next()) null !== (v2 = d2(a3, v2.value, u3)) && (l3 = o2(v2, l3, m3), null === c3 ? s3 = v2 : c3.sibling = v2, c3 = v2);
        return ol && Jo(a3, m3), s3;
      }
      for (h3 = r2(a3, h3); !v2.done; m3++, v2 = i3.next()) null !== (v2 = p2(h3, a3, m3, v2.value, u3)) && (e2 && null !== v2.alternate && h3.delete(null === v2.key ? m3 : v2.key), l3 = o2(v2, l3, m3), null === c3 ? s3 = v2 : c3.sibling = v2, c3 = v2);
      return e2 && h3.forEach(function(e3) {
        return t2(a3, e3);
      }), ol && Jo(a3, m3), s3;
    }
    return function e3(r3, o3, i3, u3) {
      if ("object" == typeof i3 && null !== i3 && i3.type === Se && null === i3.key && (i3 = i3.props.children), "object" == typeof i3 && null !== i3) {
        switch (i3.$$typeof) {
          case ke:
            e: {
              for (var s3 = i3.key, c3 = o3; null !== c3; ) {
                if (c3.key === s3) {
                  if ((s3 = i3.type) === Se) {
                    if (7 === c3.tag) {
                      n2(r3, c3.sibling), (o3 = a2(c3, i3.props.children)).return = r3, r3 = o3;
                      break e;
                    }
                  } else if (c3.elementType === s3 || "object" == typeof s3 && null !== s3 && s3.$$typeof === ze && bl(s3) === c3.type) {
                    n2(r3, c3.sibling), (o3 = a2(c3, i3.props)).ref = vl(r3, c3, i3), o3.return = r3, r3 = o3;
                    break e;
                  }
                  n2(r3, c3);
                  break;
                }
                t2(r3, c3), c3 = c3.sibling;
              }
              i3.type === Se ? ((o3 = Dc(i3.props.children, r3.mode, u3, i3.key)).return = r3, r3 = o3) : ((u3 = Oc(i3.type, i3.key, i3.props, null, r3.mode, u3)).ref = vl(r3, o3, i3), u3.return = r3, r3 = u3);
            }
            return l2(r3);
          case xe:
            e: {
              for (c3 = i3.key; null !== o3; ) {
                if (o3.key === c3) {
                  if (4 === o3.tag && o3.stateNode.containerInfo === i3.containerInfo && o3.stateNode.implementation === i3.implementation) {
                    n2(r3, o3.sibling), (o3 = a2(o3, i3.children || [])).return = r3, r3 = o3;
                    break e;
                  }
                  n2(r3, o3);
                  break;
                }
                t2(r3, o3), o3 = o3.sibling;
              }
              (o3 = Fc(i3, r3.mode, u3)).return = r3, r3 = o3;
            }
            return l2(r3);
          case ze:
            return e3(r3, o3, (c3 = i3._init)(i3._payload), u3);
        }
        if (tt(i3)) return h2(r3, o3, i3, u3);
        if (De(i3)) return m2(r3, o3, i3, u3);
        yl(r3, i3);
      }
      return "string" == typeof i3 && "" !== i3 || "number" == typeof i3 ? (i3 = "" + i3, null !== o3 && 6 === o3.tag ? (n2(r3, o3.sibling), (o3 = a2(o3, i3)).return = r3, r3 = o3) : (n2(r3, o3), (o3 = Ic(i3, r3.mode, u3)).return = r3, r3 = o3), l2(r3)) : n2(r3, o3);
    };
  }
  var kl = wl(true), xl = wl(false), Sl = Co(null), El = null, Cl = null, Nl = null;
  function _l() {
    Nl = Cl = El = null;
  }
  function Pl(e2) {
    var t2 = Sl.current;
    No(Sl), e2._currentValue = t2;
  }
  function Tl(e2, t2, n2) {
    for (; null !== e2; ) {
      var r2 = e2.alternate;
      if ((e2.childLanes & t2) !== t2 ? (e2.childLanes |= t2, null !== r2 && (r2.childLanes |= t2)) : null !== r2 && (r2.childLanes & t2) !== t2 && (r2.childLanes |= t2), e2 === n2) break;
      e2 = e2.return;
    }
  }
  function Ll(e2, t2) {
    El = e2, Nl = Cl = null, null !== (e2 = e2.dependencies) && null !== e2.firstContext && (!!(e2.lanes & t2) && (bu = true), e2.firstContext = null);
  }
  function Rl(e2) {
    var t2 = e2._currentValue;
    if (Nl !== e2) if (e2 = { context: e2, memoizedValue: t2, next: null }, null === Cl) {
      if (null === El) throw Error(oe(308));
      Cl = e2, El.dependencies = { lanes: 0, firstContext: e2 };
    } else Cl = Cl.next = e2;
    return t2;
  }
  var zl = null;
  function Ml(e2) {
    null === zl ? zl = [e2] : zl.push(e2);
  }
  function Ol(e2, t2, n2, r2) {
    var a2 = t2.interleaved;
    return null === a2 ? (n2.next = n2, Ml(t2)) : (n2.next = a2.next, a2.next = n2), t2.interleaved = n2, Dl(e2, r2);
  }
  function Dl(e2, t2) {
    e2.lanes |= t2;
    var n2 = e2.alternate;
    for (null !== n2 && (n2.lanes |= t2), n2 = e2, e2 = e2.return; null !== e2; ) e2.childLanes |= t2, null !== (n2 = e2.alternate) && (n2.childLanes |= t2), n2 = e2, e2 = e2.return;
    return 3 === n2.tag ? n2.stateNode : null;
  }
  var jl = false;
  function Il(e2) {
    e2.updateQueue = { baseState: e2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Fl(e2, t2) {
    e2 = e2.updateQueue, t2.updateQueue === e2 && (t2.updateQueue = { baseState: e2.baseState, firstBaseUpdate: e2.firstBaseUpdate, lastBaseUpdate: e2.lastBaseUpdate, shared: e2.shared, effects: e2.effects });
  }
  function Al(e2, t2) {
    return { eventTime: e2, lane: t2, tag: 0, payload: null, callback: null, next: null };
  }
  function Ul(e2, t2, n2) {
    var r2 = e2.updateQueue;
    if (null === r2) return null;
    if (r2 = r2.shared, 2 & Ps) {
      var a2 = r2.pending;
      return null === a2 ? t2.next = t2 : (t2.next = a2.next, a2.next = t2), r2.pending = t2, Dl(e2, n2);
    }
    return null === (a2 = r2.interleaved) ? (t2.next = t2, Ml(r2)) : (t2.next = a2.next, a2.next = t2), r2.interleaved = t2, Dl(e2, n2);
  }
  function Wl(e2, t2, n2) {
    if (null !== (t2 = t2.updateQueue) && (t2 = t2.shared, 4194240 & n2)) {
      var r2 = t2.lanes;
      n2 |= r2 &= e2.pendingLanes, t2.lanes = n2, bn(e2, n2);
    }
  }
  function Bl(e2, t2) {
    var n2 = e2.updateQueue, r2 = e2.alternate;
    if (null !== r2 && n2 === (r2 = r2.updateQueue)) {
      var a2 = null, o2 = null;
      if (null !== (n2 = n2.firstBaseUpdate)) {
        do {
          var l2 = { eventTime: n2.eventTime, lane: n2.lane, tag: n2.tag, payload: n2.payload, callback: n2.callback, next: null };
          null === o2 ? a2 = o2 = l2 : o2 = o2.next = l2, n2 = n2.next;
        } while (null !== n2);
        null === o2 ? a2 = o2 = t2 : o2 = o2.next = t2;
      } else a2 = o2 = t2;
      return n2 = { baseState: r2.baseState, firstBaseUpdate: a2, lastBaseUpdate: o2, shared: r2.shared, effects: r2.effects }, void (e2.updateQueue = n2);
    }
    null === (e2 = n2.lastBaseUpdate) ? n2.firstBaseUpdate = t2 : e2.next = t2, n2.lastBaseUpdate = t2;
  }
  function $l(e2, t2, n2, r2) {
    var a2 = e2.updateQueue;
    jl = false;
    var o2 = a2.firstBaseUpdate, l2 = a2.lastBaseUpdate, i2 = a2.shared.pending;
    if (null !== i2) {
      a2.shared.pending = null;
      var u2 = i2, s2 = u2.next;
      u2.next = null, null === l2 ? o2 = s2 : l2.next = s2, l2 = u2;
      var c2 = e2.alternate;
      null !== c2 && ((i2 = (c2 = c2.updateQueue).lastBaseUpdate) !== l2 && (null === i2 ? c2.firstBaseUpdate = s2 : i2.next = s2, c2.lastBaseUpdate = u2));
    }
    if (null !== o2) {
      var d2 = a2.baseState;
      for (l2 = 0, c2 = s2 = u2 = null, i2 = o2; ; ) {
        var f2 = i2.lane, p2 = i2.eventTime;
        if ((r2 & f2) === f2) {
          null !== c2 && (c2 = c2.next = { eventTime: p2, lane: 0, tag: i2.tag, payload: i2.payload, callback: i2.callback, next: null });
          e: {
            var h2 = e2, m2 = i2;
            switch (f2 = t2, p2 = n2, m2.tag) {
              case 1:
                if ("function" == typeof (h2 = m2.payload)) {
                  d2 = h2.call(p2, d2, f2);
                  break e;
                }
                d2 = h2;
                break e;
              case 3:
                h2.flags = -65537 & h2.flags | 128;
              case 0:
                if (null == (f2 = "function" == typeof (h2 = m2.payload) ? h2.call(p2, d2, f2) : h2)) break e;
                d2 = Ie({}, d2, f2);
                break e;
              case 2:
                jl = true;
            }
          }
          null !== i2.callback && 0 !== i2.lane && (e2.flags |= 64, null === (f2 = a2.effects) ? a2.effects = [i2] : f2.push(i2));
        } else p2 = { eventTime: p2, lane: f2, tag: i2.tag, payload: i2.payload, callback: i2.callback, next: null }, null === c2 ? (s2 = c2 = p2, u2 = d2) : c2 = c2.next = p2, l2 |= f2;
        if (null === (i2 = i2.next)) {
          if (null === (i2 = a2.shared.pending)) break;
          i2 = (f2 = i2).next, f2.next = null, a2.lastBaseUpdate = f2, a2.shared.pending = null;
        }
      }
      if (null === c2 && (u2 = d2), a2.baseState = u2, a2.firstBaseUpdate = s2, a2.lastBaseUpdate = c2, null !== (t2 = a2.shared.interleaved)) {
        a2 = t2;
        do {
          l2 |= a2.lane, a2 = a2.next;
        } while (a2 !== t2);
      } else null === o2 && (a2.shared.lanes = 0);
      js |= l2, e2.lanes = l2, e2.memoizedState = d2;
    }
  }
  function Vl(e2, t2, n2) {
    if (e2 = t2.effects, t2.effects = null, null !== e2) for (t2 = 0; t2 < e2.length; t2++) {
      var r2 = e2[t2], a2 = r2.callback;
      if (null !== a2) {
        if (r2.callback = null, r2 = n2, "function" != typeof a2) throw Error(oe(191, a2));
        a2.call(r2);
      }
    }
  }
  var Hl = {}, Ql = Co(Hl), ql = Co(Hl), Kl = Co(Hl);
  function Yl(e2) {
    if (e2 === Hl) throw Error(oe(174));
    return e2;
  }
  function Xl(e2, t2) {
    switch (_o(Kl, t2), _o(ql, e2), _o(Ql, Hl), e2 = t2.nodeType) {
      case 9:
      case 11:
        t2 = (t2 = t2.documentElement) ? t2.namespaceURI : ut(null, "");
        break;
      default:
        t2 = ut(t2 = (e2 = 8 === e2 ? t2.parentNode : t2).namespaceURI || null, e2 = e2.tagName);
    }
    No(Ql), _o(Ql, t2);
  }
  function Gl() {
    No(Ql), No(ql), No(Kl);
  }
  function Zl(e2) {
    Yl(Kl.current);
    var t2 = Yl(Ql.current), n2 = ut(t2, e2.type);
    t2 !== n2 && (_o(ql, e2), _o(Ql, n2));
  }
  function Jl(e2) {
    ql.current === e2 && (No(Ql), No(ql));
  }
  var ei = Co(0);
  function ti(e2) {
    for (var t2 = e2; null !== t2; ) {
      if (13 === t2.tag) {
        var n2 = t2.memoizedState;
        if (null !== n2 && (null === (n2 = n2.dehydrated) || "$?" === n2.data || "$!" === n2.data)) return t2;
      } else if (19 === t2.tag && void 0 !== t2.memoizedProps.revealOrder) {
        if (128 & t2.flags) return t2;
      } else if (null !== t2.child) {
        t2.child.return = t2, t2 = t2.child;
        continue;
      }
      if (t2 === e2) break;
      for (; null === t2.sibling; ) {
        if (null === t2.return || t2.return === e2) return null;
        t2 = t2.return;
      }
      t2.sibling.return = t2.return, t2 = t2.sibling;
    }
    return null;
  }
  var ni = [];
  function ri() {
    for (var e2 = 0; e2 < ni.length; e2++) ni[e2]._workInProgressVersionPrimary = null;
    ni.length = 0;
  }
  var ai = we.ReactCurrentDispatcher, oi = we.ReactCurrentBatchConfig, li = 0, ii = null, ui = null, si = null, ci = false, di = false, fi = 0, pi = 0;
  function hi() {
    throw Error(oe(321));
  }
  function mi(e2, t2) {
    if (null === t2) return false;
    for (var n2 = 0; n2 < t2.length && n2 < e2.length; n2++) if (!ia(e2[n2], t2[n2])) return false;
    return true;
  }
  function gi(e2, t2, n2, r2, a2, o2) {
    if (li = o2, ii = t2, t2.memoizedState = null, t2.updateQueue = null, t2.lanes = 0, ai.current = null === e2 || null === e2.memoizedState ? Ji : eu, e2 = n2(r2, a2), di) {
      o2 = 0;
      do {
        if (di = false, fi = 0, 25 <= o2) throw Error(oe(301));
        o2 += 1, si = ui = null, t2.updateQueue = null, ai.current = tu, e2 = n2(r2, a2);
      } while (di);
    }
    if (ai.current = Zi, t2 = null !== ui && null !== ui.next, li = 0, si = ui = ii = null, ci = false, t2) throw Error(oe(300));
    return e2;
  }
  function vi() {
    var e2 = 0 !== fi;
    return fi = 0, e2;
  }
  function yi() {
    var e2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return null === si ? ii.memoizedState = si = e2 : si = si.next = e2, si;
  }
  function bi() {
    if (null === ui) {
      var e2 = ii.alternate;
      e2 = null !== e2 ? e2.memoizedState : null;
    } else e2 = ui.next;
    var t2 = null === si ? ii.memoizedState : si.next;
    if (null !== t2) si = t2, ui = e2;
    else {
      if (null === e2) throw Error(oe(310));
      e2 = { memoizedState: (ui = e2).memoizedState, baseState: ui.baseState, baseQueue: ui.baseQueue, queue: ui.queue, next: null }, null === si ? ii.memoizedState = si = e2 : si = si.next = e2;
    }
    return si;
  }
  function wi(e2, t2) {
    return "function" == typeof t2 ? t2(e2) : t2;
  }
  function ki(e2) {
    var t2 = bi(), n2 = t2.queue;
    if (null === n2) throw Error(oe(311));
    n2.lastRenderedReducer = e2;
    var r2 = ui, a2 = r2.baseQueue, o2 = n2.pending;
    if (null !== o2) {
      if (null !== a2) {
        var l2 = a2.next;
        a2.next = o2.next, o2.next = l2;
      }
      r2.baseQueue = a2 = o2, n2.pending = null;
    }
    if (null !== a2) {
      o2 = a2.next, r2 = r2.baseState;
      var i2 = l2 = null, u2 = null, s2 = o2;
      do {
        var c2 = s2.lane;
        if ((li & c2) === c2) null !== u2 && (u2 = u2.next = { lane: 0, action: s2.action, hasEagerState: s2.hasEagerState, eagerState: s2.eagerState, next: null }), r2 = s2.hasEagerState ? s2.eagerState : e2(r2, s2.action);
        else {
          var d2 = { lane: c2, action: s2.action, hasEagerState: s2.hasEagerState, eagerState: s2.eagerState, next: null };
          null === u2 ? (i2 = u2 = d2, l2 = r2) : u2 = u2.next = d2, ii.lanes |= c2, js |= c2;
        }
        s2 = s2.next;
      } while (null !== s2 && s2 !== o2);
      null === u2 ? l2 = r2 : u2.next = i2, ia(r2, t2.memoizedState) || (bu = true), t2.memoizedState = r2, t2.baseState = l2, t2.baseQueue = u2, n2.lastRenderedState = r2;
    }
    if (null !== (e2 = n2.interleaved)) {
      a2 = e2;
      do {
        o2 = a2.lane, ii.lanes |= o2, js |= o2, a2 = a2.next;
      } while (a2 !== e2);
    } else null === a2 && (n2.lanes = 0);
    return [t2.memoizedState, n2.dispatch];
  }
  function xi(e2) {
    var t2 = bi(), n2 = t2.queue;
    if (null === n2) throw Error(oe(311));
    n2.lastRenderedReducer = e2;
    var r2 = n2.dispatch, a2 = n2.pending, o2 = t2.memoizedState;
    if (null !== a2) {
      n2.pending = null;
      var l2 = a2 = a2.next;
      do {
        o2 = e2(o2, l2.action), l2 = l2.next;
      } while (l2 !== a2);
      ia(o2, t2.memoizedState) || (bu = true), t2.memoizedState = o2, null === t2.baseQueue && (t2.baseState = o2), n2.lastRenderedState = o2;
    }
    return [o2, r2];
  }
  function Si() {
  }
  function Ei(e2, t2) {
    var n2 = ii, r2 = bi(), a2 = t2(), o2 = !ia(r2.memoizedState, a2);
    if (o2 && (r2.memoizedState = a2, bu = true), r2 = r2.queue, ji(_i.bind(null, n2, r2, e2), [e2]), r2.getSnapshot !== t2 || o2 || null !== si && 1 & si.memoizedState.tag) {
      if (n2.flags |= 2048, Ri(9, Ni.bind(null, n2, r2, a2, t2), void 0, null), null === Ts) throw Error(oe(349));
      30 & li || Ci(n2, t2, a2);
    }
    return a2;
  }
  function Ci(e2, t2, n2) {
    e2.flags |= 16384, e2 = { getSnapshot: t2, value: n2 }, null === (t2 = ii.updateQueue) ? (t2 = { lastEffect: null, stores: null }, ii.updateQueue = t2, t2.stores = [e2]) : null === (n2 = t2.stores) ? t2.stores = [e2] : n2.push(e2);
  }
  function Ni(e2, t2, n2, r2) {
    t2.value = n2, t2.getSnapshot = r2, Pi(t2) && Ti(e2);
  }
  function _i(e2, t2, n2) {
    return n2(function() {
      Pi(t2) && Ti(e2);
    });
  }
  function Pi(e2) {
    var t2 = e2.getSnapshot;
    e2 = e2.value;
    try {
      var n2 = t2();
      return !ia(e2, n2);
    } catch (r2) {
      return true;
    }
  }
  function Ti(e2) {
    var t2 = Dl(e2, 1);
    null !== t2 && nc(t2, e2, 1, -1);
  }
  function Li(e2) {
    var t2 = yi();
    return "function" == typeof e2 && (e2 = e2()), t2.memoizedState = t2.baseState = e2, e2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: wi, lastRenderedState: e2 }, t2.queue = e2, e2 = e2.dispatch = Ki.bind(null, ii, e2), [t2.memoizedState, e2];
  }
  function Ri(e2, t2, n2, r2) {
    return e2 = { tag: e2, create: t2, destroy: n2, deps: r2, next: null }, null === (t2 = ii.updateQueue) ? (t2 = { lastEffect: null, stores: null }, ii.updateQueue = t2, t2.lastEffect = e2.next = e2) : null === (n2 = t2.lastEffect) ? t2.lastEffect = e2.next = e2 : (r2 = n2.next, n2.next = e2, e2.next = r2, t2.lastEffect = e2), e2;
  }
  function zi() {
    return bi().memoizedState;
  }
  function Mi(e2, t2, n2, r2) {
    var a2 = yi();
    ii.flags |= e2, a2.memoizedState = Ri(1 | t2, n2, void 0, void 0 === r2 ? null : r2);
  }
  function Oi(e2, t2, n2, r2) {
    var a2 = bi();
    r2 = void 0 === r2 ? null : r2;
    var o2 = void 0;
    if (null !== ui) {
      var l2 = ui.memoizedState;
      if (o2 = l2.destroy, null !== r2 && mi(r2, l2.deps)) return void (a2.memoizedState = Ri(t2, n2, o2, r2));
    }
    ii.flags |= e2, a2.memoizedState = Ri(1 | t2, n2, o2, r2);
  }
  function Di(e2, t2) {
    return Mi(8390656, 8, e2, t2);
  }
  function ji(e2, t2) {
    return Oi(2048, 8, e2, t2);
  }
  function Ii(e2, t2) {
    return Oi(4, 2, e2, t2);
  }
  function Fi(e2, t2) {
    return Oi(4, 4, e2, t2);
  }
  function Ai(e2, t2) {
    return "function" == typeof t2 ? (e2 = e2(), t2(e2), function() {
      t2(null);
    }) : null != t2 ? (e2 = e2(), t2.current = e2, function() {
      t2.current = null;
    }) : void 0;
  }
  function Ui(e2, t2, n2) {
    return n2 = null != n2 ? n2.concat([e2]) : null, Oi(4, 4, Ai.bind(null, t2, e2), n2);
  }
  function Wi() {
  }
  function Bi(e2, t2) {
    var n2 = bi();
    t2 = void 0 === t2 ? null : t2;
    var r2 = n2.memoizedState;
    return null !== r2 && null !== t2 && mi(t2, r2[1]) ? r2[0] : (n2.memoizedState = [e2, t2], e2);
  }
  function $i(e2, t2) {
    var n2 = bi();
    t2 = void 0 === t2 ? null : t2;
    var r2 = n2.memoizedState;
    return null !== r2 && null !== t2 && mi(t2, r2[1]) ? r2[0] : (e2 = e2(), n2.memoizedState = [e2, t2], e2);
  }
  function Vi(e2, t2, n2) {
    return 21 & li ? (ia(n2, t2) || (n2 = gn(), ii.lanes |= n2, js |= n2, e2.baseState = true), t2) : (e2.baseState && (e2.baseState = false, bu = true), e2.memoizedState = n2);
  }
  function Hi(e2, t2) {
    var n2 = wn;
    wn = 0 !== n2 && 4 > n2 ? n2 : 4, e2(true);
    var r2 = oi.transition;
    oi.transition = {};
    try {
      e2(false), t2();
    } finally {
      wn = n2, oi.transition = r2;
    }
  }
  function Qi() {
    return bi().memoizedState;
  }
  function qi(e2, t2, n2) {
    var r2 = tc(e2);
    if (n2 = { lane: r2, action: n2, hasEagerState: false, eagerState: null, next: null }, Yi(e2)) Xi(t2, n2);
    else if (null !== (n2 = Ol(e2, t2, n2, r2))) {
      nc(n2, e2, r2, ec()), Gi(n2, t2, r2);
    }
  }
  function Ki(e2, t2, n2) {
    var r2 = tc(e2), a2 = { lane: r2, action: n2, hasEagerState: false, eagerState: null, next: null };
    if (Yi(e2)) Xi(t2, a2);
    else {
      var o2 = e2.alternate;
      if (0 === e2.lanes && (null === o2 || 0 === o2.lanes) && null !== (o2 = t2.lastRenderedReducer)) try {
        var l2 = t2.lastRenderedState, i2 = o2(l2, n2);
        if (a2.hasEagerState = true, a2.eagerState = i2, ia(i2, l2)) {
          var u2 = t2.interleaved;
          return null === u2 ? (a2.next = a2, Ml(t2)) : (a2.next = u2.next, u2.next = a2), void (t2.interleaved = a2);
        }
      } catch (H2) {
      }
      null !== (n2 = Ol(e2, t2, a2, r2)) && (nc(n2, e2, r2, a2 = ec()), Gi(n2, t2, r2));
    }
  }
  function Yi(e2) {
    var t2 = e2.alternate;
    return e2 === ii || null !== t2 && t2 === ii;
  }
  function Xi(e2, t2) {
    di = ci = true;
    var n2 = e2.pending;
    null === n2 ? t2.next = t2 : (t2.next = n2.next, n2.next = t2), e2.pending = t2;
  }
  function Gi(e2, t2, n2) {
    if (4194240 & n2) {
      var r2 = t2.lanes;
      n2 |= r2 &= e2.pendingLanes, t2.lanes = n2, bn(e2, n2);
    }
  }
  var Zi = { readContext: Rl, useCallback: hi, useContext: hi, useEffect: hi, useImperativeHandle: hi, useInsertionEffect: hi, useLayoutEffect: hi, useMemo: hi, useReducer: hi, useRef: hi, useState: hi, useDebugValue: hi, useDeferredValue: hi, useTransition: hi, useMutableSource: hi, useSyncExternalStore: hi, useId: hi, unstable_isNewReconciler: false }, Ji = { readContext: Rl, useCallback: function(e2, t2) {
    return yi().memoizedState = [e2, void 0 === t2 ? null : t2], e2;
  }, useContext: Rl, useEffect: Di, useImperativeHandle: function(e2, t2, n2) {
    return n2 = null != n2 ? n2.concat([e2]) : null, Mi(4194308, 4, Ai.bind(null, t2, e2), n2);
  }, useLayoutEffect: function(e2, t2) {
    return Mi(4194308, 4, e2, t2);
  }, useInsertionEffect: function(e2, t2) {
    return Mi(4, 2, e2, t2);
  }, useMemo: function(e2, t2) {
    var n2 = yi();
    return t2 = void 0 === t2 ? null : t2, e2 = e2(), n2.memoizedState = [e2, t2], e2;
  }, useReducer: function(e2, t2, n2) {
    var r2 = yi();
    return t2 = void 0 !== n2 ? n2(t2) : t2, r2.memoizedState = r2.baseState = t2, e2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e2, lastRenderedState: t2 }, r2.queue = e2, e2 = e2.dispatch = qi.bind(null, ii, e2), [r2.memoizedState, e2];
  }, useRef: function(e2) {
    return e2 = { current: e2 }, yi().memoizedState = e2;
  }, useState: Li, useDebugValue: Wi, useDeferredValue: function(e2) {
    return yi().memoizedState = e2;
  }, useTransition: function() {
    var e2 = Li(false), t2 = e2[0];
    return e2 = Hi.bind(null, e2[1]), yi().memoizedState = e2, [t2, e2];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e2, t2, n2) {
    var r2 = ii, a2 = yi();
    if (ol) {
      if (void 0 === n2) throw Error(oe(407));
      n2 = n2();
    } else {
      if (n2 = t2(), null === Ts) throw Error(oe(349));
      30 & li || Ci(r2, t2, n2);
    }
    a2.memoizedState = n2;
    var o2 = { value: n2, getSnapshot: t2 };
    return a2.queue = o2, Di(_i.bind(null, r2, o2, e2), [e2]), r2.flags |= 2048, Ri(9, Ni.bind(null, r2, o2, n2, t2), void 0, null), n2;
  }, useId: function() {
    var e2 = yi(), t2 = Ts.identifierPrefix;
    if (ol) {
      var n2 = Zo;
      t2 = ":" + t2 + "R" + (n2 = (Go & ~(1 << 32 - ln(Go) - 1)).toString(32) + n2), 0 < (n2 = fi++) && (t2 += "H" + n2.toString(32)), t2 += ":";
    } else t2 = ":" + t2 + "r" + (n2 = pi++).toString(32) + ":";
    return e2.memoizedState = t2;
  }, unstable_isNewReconciler: false }, eu = { readContext: Rl, useCallback: Bi, useContext: Rl, useEffect: ji, useImperativeHandle: Ui, useInsertionEffect: Ii, useLayoutEffect: Fi, useMemo: $i, useReducer: ki, useRef: zi, useState: function() {
    return ki(wi);
  }, useDebugValue: Wi, useDeferredValue: function(e2) {
    return Vi(bi(), ui.memoizedState, e2);
  }, useTransition: function() {
    return [ki(wi)[0], bi().memoizedState];
  }, useMutableSource: Si, useSyncExternalStore: Ei, useId: Qi, unstable_isNewReconciler: false }, tu = { readContext: Rl, useCallback: Bi, useContext: Rl, useEffect: ji, useImperativeHandle: Ui, useInsertionEffect: Ii, useLayoutEffect: Fi, useMemo: $i, useReducer: xi, useRef: zi, useState: function() {
    return xi(wi);
  }, useDebugValue: Wi, useDeferredValue: function(e2) {
    var t2 = bi();
    return null === ui ? t2.memoizedState = e2 : Vi(t2, ui.memoizedState, e2);
  }, useTransition: function() {
    return [xi(wi)[0], bi().memoizedState];
  }, useMutableSource: Si, useSyncExternalStore: Ei, useId: Qi, unstable_isNewReconciler: false };
  function nu(e2, t2) {
    if (e2 && e2.defaultProps) {
      for (var n2 in t2 = Ie({}, t2), e2 = e2.defaultProps) void 0 === t2[n2] && (t2[n2] = e2[n2]);
      return t2;
    }
    return t2;
  }
  function ru(e2, t2, n2, r2) {
    n2 = null == (n2 = n2(r2, t2 = e2.memoizedState)) ? t2 : Ie({}, t2, n2), e2.memoizedState = n2, 0 === e2.lanes && (e2.updateQueue.baseState = n2);
  }
  var au = { isMounted: function(e2) {
    return !!(e2 = e2._reactInternals) && Bt(e2) === e2;
  }, enqueueSetState: function(e2, t2, n2) {
    e2 = e2._reactInternals;
    var r2 = ec(), a2 = tc(e2), o2 = Al(r2, a2);
    o2.payload = t2, null != n2 && (o2.callback = n2), null !== (t2 = Ul(e2, o2, a2)) && (nc(t2, e2, a2, r2), Wl(t2, e2, a2));
  }, enqueueReplaceState: function(e2, t2, n2) {
    e2 = e2._reactInternals;
    var r2 = ec(), a2 = tc(e2), o2 = Al(r2, a2);
    o2.tag = 1, o2.payload = t2, null != n2 && (o2.callback = n2), null !== (t2 = Ul(e2, o2, a2)) && (nc(t2, e2, a2, r2), Wl(t2, e2, a2));
  }, enqueueForceUpdate: function(e2, t2) {
    e2 = e2._reactInternals;
    var n2 = ec(), r2 = tc(e2), a2 = Al(n2, r2);
    a2.tag = 2, null != t2 && (a2.callback = t2), null !== (t2 = Ul(e2, a2, r2)) && (nc(t2, e2, r2, n2), Wl(t2, e2, r2));
  } };
  function ou(e2, t2, n2, r2, a2, o2, l2) {
    return "function" == typeof (e2 = e2.stateNode).shouldComponentUpdate ? e2.shouldComponentUpdate(r2, o2, l2) : !t2.prototype || !t2.prototype.isPureReactComponent || (!ua(n2, r2) || !ua(a2, o2));
  }
  function lu(e2, t2, n2) {
    var r2 = false, a2 = Po, o2 = t2.contextType;
    return "object" == typeof o2 && null !== o2 ? o2 = Rl(o2) : (a2 = Mo(t2) ? Ro : To.current, o2 = (r2 = null != (r2 = t2.contextTypes)) ? zo(e2, a2) : Po), t2 = new t2(n2, o2), e2.memoizedState = null !== t2.state && void 0 !== t2.state ? t2.state : null, t2.updater = au, e2.stateNode = t2, t2._reactInternals = e2, r2 && ((e2 = e2.stateNode).__reactInternalMemoizedUnmaskedChildContext = a2, e2.__reactInternalMemoizedMaskedChildContext = o2), t2;
  }
  function iu(e2, t2, n2, r2) {
    e2 = t2.state, "function" == typeof t2.componentWillReceiveProps && t2.componentWillReceiveProps(n2, r2), "function" == typeof t2.UNSAFE_componentWillReceiveProps && t2.UNSAFE_componentWillReceiveProps(n2, r2), t2.state !== e2 && au.enqueueReplaceState(t2, t2.state, null);
  }
  function uu(e2, t2, n2, r2) {
    var a2 = e2.stateNode;
    a2.props = n2, a2.state = e2.memoizedState, a2.refs = {}, Il(e2);
    var o2 = t2.contextType;
    "object" == typeof o2 && null !== o2 ? a2.context = Rl(o2) : (o2 = Mo(t2) ? Ro : To.current, a2.context = zo(e2, o2)), a2.state = e2.memoizedState, "function" == typeof (o2 = t2.getDerivedStateFromProps) && (ru(e2, t2, o2, n2), a2.state = e2.memoizedState), "function" == typeof t2.getDerivedStateFromProps || "function" == typeof a2.getSnapshotBeforeUpdate || "function" != typeof a2.UNSAFE_componentWillMount && "function" != typeof a2.componentWillMount || (t2 = a2.state, "function" == typeof a2.componentWillMount && a2.componentWillMount(), "function" == typeof a2.UNSAFE_componentWillMount && a2.UNSAFE_componentWillMount(), t2 !== a2.state && au.enqueueReplaceState(a2, a2.state, null), $l(e2, n2, a2, r2), a2.state = e2.memoizedState), "function" == typeof a2.componentDidMount && (e2.flags |= 4194308);
  }
  function su(e2, t2) {
    try {
      var n2 = "", r2 = t2;
      do {
        n2 += We(r2), r2 = r2.return;
      } while (r2);
      var a2 = n2;
    } catch ($2) {
      a2 = "\nError generating stack: " + $2.message + "\n" + $2.stack;
    }
    return { value: e2, source: t2, stack: a2, digest: null };
  }
  function cu(e2, t2, n2) {
    return { value: e2, source: null, stack: null != n2 ? n2 : null, digest: null != t2 ? t2 : null };
  }
  function du(e2, t2) {
    try {
      console.error(t2.value);
    } catch (n2) {
      setTimeout(function() {
        throw n2;
      });
    }
  }
  var fu = "function" == typeof WeakMap ? WeakMap : Map;
  function pu(e2, t2, n2) {
    (n2 = Al(-1, n2)).tag = 3, n2.payload = { element: null };
    var r2 = t2.value;
    return n2.callback = function() {
      Vs || (Vs = true, Hs = r2), du(0, t2);
    }, n2;
  }
  function hu(e2, t2, n2) {
    (n2 = Al(-1, n2)).tag = 3;
    var r2 = e2.type.getDerivedStateFromError;
    if ("function" == typeof r2) {
      var a2 = t2.value;
      n2.payload = function() {
        return r2(a2);
      }, n2.callback = function() {
        du(0, t2);
      };
    }
    var o2 = e2.stateNode;
    return null !== o2 && "function" == typeof o2.componentDidCatch && (n2.callback = function() {
      du(0, t2), "function" != typeof r2 && (null === Qs ? Qs = /* @__PURE__ */ new Set([this]) : Qs.add(this));
      var e3 = t2.stack;
      this.componentDidCatch(t2.value, { componentStack: null !== e3 ? e3 : "" });
    }), n2;
  }
  function mu(e2, t2, n2) {
    var r2 = e2.pingCache;
    if (null === r2) {
      r2 = e2.pingCache = new fu();
      var a2 = /* @__PURE__ */ new Set();
      r2.set(t2, a2);
    } else void 0 === (a2 = r2.get(t2)) && (a2 = /* @__PURE__ */ new Set(), r2.set(t2, a2));
    a2.has(n2) || (a2.add(n2), e2 = Cc.bind(null, e2, t2, n2), t2.then(e2, e2));
  }
  function gu(e2) {
    do {
      var t2;
      if ((t2 = 13 === e2.tag) && (t2 = null === (t2 = e2.memoizedState) || null !== t2.dehydrated), t2) return e2;
      e2 = e2.return;
    } while (null !== e2);
    return null;
  }
  function vu(e2, t2, n2, r2, a2) {
    return 1 & e2.mode ? (e2.flags |= 65536, e2.lanes = a2, e2) : (e2 === t2 ? e2.flags |= 65536 : (e2.flags |= 128, n2.flags |= 131072, n2.flags &= -52805, 1 === n2.tag && (null === n2.alternate ? n2.tag = 17 : ((t2 = Al(-1, 1)).tag = 2, Ul(n2, t2, 1))), n2.lanes |= 1), e2);
  }
  var yu = we.ReactCurrentOwner, bu = false;
  function wu(e2, t2, n2, r2) {
    t2.child = null === e2 ? xl(t2, null, n2, r2) : kl(t2, e2.child, n2, r2);
  }
  function ku(e2, t2, n2, r2, a2) {
    n2 = n2.render;
    var o2 = t2.ref;
    return Ll(t2, a2), r2 = gi(e2, t2, n2, r2, o2, a2), n2 = vi(), null === e2 || bu ? (ol && n2 && tl(t2), t2.flags |= 1, wu(e2, t2, r2, a2), t2.child) : (t2.updateQueue = e2.updateQueue, t2.flags &= -2053, e2.lanes &= ~a2, Vu(e2, t2, a2));
  }
  function xu(e2, t2, n2, r2, a2) {
    if (null === e2) {
      var o2 = n2.type;
      return "function" != typeof o2 || zc(o2) || void 0 !== o2.defaultProps || null !== n2.compare || void 0 !== n2.defaultProps ? ((e2 = Oc(n2.type, null, r2, t2, t2.mode, a2)).ref = t2.ref, e2.return = t2, t2.child = e2) : (t2.tag = 15, t2.type = o2, Su(e2, t2, o2, r2, a2));
    }
    if (o2 = e2.child, !(e2.lanes & a2)) {
      var l2 = o2.memoizedProps;
      if ((n2 = null !== (n2 = n2.compare) ? n2 : ua)(l2, r2) && e2.ref === t2.ref) return Vu(e2, t2, a2);
    }
    return t2.flags |= 1, (e2 = Mc(o2, r2)).ref = t2.ref, e2.return = t2, t2.child = e2;
  }
  function Su(e2, t2, n2, r2, a2) {
    if (null !== e2) {
      var o2 = e2.memoizedProps;
      if (ua(o2, r2) && e2.ref === t2.ref) {
        if (bu = false, t2.pendingProps = r2 = o2, !(e2.lanes & a2)) return t2.lanes = e2.lanes, Vu(e2, t2, a2);
        131072 & e2.flags && (bu = true);
      }
    }
    return Nu(e2, t2, n2, r2, a2);
  }
  function Eu(e2, t2, n2) {
    var r2 = t2.pendingProps, a2 = r2.children, o2 = null !== e2 ? e2.memoizedState : null;
    if ("hidden" === r2.mode) if (1 & t2.mode) {
      if (!(1073741824 & n2)) return e2 = null !== o2 ? o2.baseLanes | n2 : n2, t2.lanes = t2.childLanes = 1073741824, t2.memoizedState = { baseLanes: e2, cachePool: null, transitions: null }, t2.updateQueue = null, _o(Ms, zs), zs |= e2, null;
      t2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r2 = null !== o2 ? o2.baseLanes : n2, _o(Ms, zs), zs |= r2;
    } else t2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, _o(Ms, zs), zs |= n2;
    else null !== o2 ? (r2 = o2.baseLanes | n2, t2.memoizedState = null) : r2 = n2, _o(Ms, zs), zs |= r2;
    return wu(e2, t2, a2, n2), t2.child;
  }
  function Cu(e2, t2) {
    var n2 = t2.ref;
    (null === e2 && null !== n2 || null !== e2 && e2.ref !== n2) && (t2.flags |= 512, t2.flags |= 2097152);
  }
  function Nu(e2, t2, n2, r2, a2) {
    var o2 = Mo(n2) ? Ro : To.current;
    return o2 = zo(t2, o2), Ll(t2, a2), n2 = gi(e2, t2, n2, r2, o2, a2), r2 = vi(), null === e2 || bu ? (ol && r2 && tl(t2), t2.flags |= 1, wu(e2, t2, n2, a2), t2.child) : (t2.updateQueue = e2.updateQueue, t2.flags &= -2053, e2.lanes &= ~a2, Vu(e2, t2, a2));
  }
  function _u(e2, t2, n2, r2, a2) {
    if (Mo(n2)) {
      var o2 = true;
      Io(t2);
    } else o2 = false;
    if (Ll(t2, a2), null === t2.stateNode) $u(e2, t2), lu(t2, n2, r2), uu(t2, n2, r2, a2), r2 = true;
    else if (null === e2) {
      var l2 = t2.stateNode, i2 = t2.memoizedProps;
      l2.props = i2;
      var u2 = l2.context, s2 = n2.contextType;
      "object" == typeof s2 && null !== s2 ? s2 = Rl(s2) : s2 = zo(t2, s2 = Mo(n2) ? Ro : To.current);
      var c2 = n2.getDerivedStateFromProps, d2 = "function" == typeof c2 || "function" == typeof l2.getSnapshotBeforeUpdate;
      d2 || "function" != typeof l2.UNSAFE_componentWillReceiveProps && "function" != typeof l2.componentWillReceiveProps || (i2 !== r2 || u2 !== s2) && iu(t2, l2, r2, s2), jl = false;
      var f2 = t2.memoizedState;
      l2.state = f2, $l(t2, r2, l2, a2), u2 = t2.memoizedState, i2 !== r2 || f2 !== u2 || Lo.current || jl ? ("function" == typeof c2 && (ru(t2, n2, c2, r2), u2 = t2.memoizedState), (i2 = jl || ou(t2, n2, i2, r2, f2, u2, s2)) ? (d2 || "function" != typeof l2.UNSAFE_componentWillMount && "function" != typeof l2.componentWillMount || ("function" == typeof l2.componentWillMount && l2.componentWillMount(), "function" == typeof l2.UNSAFE_componentWillMount && l2.UNSAFE_componentWillMount()), "function" == typeof l2.componentDidMount && (t2.flags |= 4194308)) : ("function" == typeof l2.componentDidMount && (t2.flags |= 4194308), t2.memoizedProps = r2, t2.memoizedState = u2), l2.props = r2, l2.state = u2, l2.context = s2, r2 = i2) : ("function" == typeof l2.componentDidMount && (t2.flags |= 4194308), r2 = false);
    } else {
      l2 = t2.stateNode, Fl(e2, t2), i2 = t2.memoizedProps, s2 = t2.type === t2.elementType ? i2 : nu(t2.type, i2), l2.props = s2, d2 = t2.pendingProps, f2 = l2.context, "object" == typeof (u2 = n2.contextType) && null !== u2 ? u2 = Rl(u2) : u2 = zo(t2, u2 = Mo(n2) ? Ro : To.current);
      var p2 = n2.getDerivedStateFromProps;
      (c2 = "function" == typeof p2 || "function" == typeof l2.getSnapshotBeforeUpdate) || "function" != typeof l2.UNSAFE_componentWillReceiveProps && "function" != typeof l2.componentWillReceiveProps || (i2 !== d2 || f2 !== u2) && iu(t2, l2, r2, u2), jl = false, f2 = t2.memoizedState, l2.state = f2, $l(t2, r2, l2, a2);
      var h2 = t2.memoizedState;
      i2 !== d2 || f2 !== h2 || Lo.current || jl ? ("function" == typeof p2 && (ru(t2, n2, p2, r2), h2 = t2.memoizedState), (s2 = jl || ou(t2, n2, s2, r2, f2, h2, u2) || false) ? (c2 || "function" != typeof l2.UNSAFE_componentWillUpdate && "function" != typeof l2.componentWillUpdate || ("function" == typeof l2.componentWillUpdate && l2.componentWillUpdate(r2, h2, u2), "function" == typeof l2.UNSAFE_componentWillUpdate && l2.UNSAFE_componentWillUpdate(r2, h2, u2)), "function" == typeof l2.componentDidUpdate && (t2.flags |= 4), "function" == typeof l2.getSnapshotBeforeUpdate && (t2.flags |= 1024)) : ("function" != typeof l2.componentDidUpdate || i2 === e2.memoizedProps && f2 === e2.memoizedState || (t2.flags |= 4), "function" != typeof l2.getSnapshotBeforeUpdate || i2 === e2.memoizedProps && f2 === e2.memoizedState || (t2.flags |= 1024), t2.memoizedProps = r2, t2.memoizedState = h2), l2.props = r2, l2.state = h2, l2.context = u2, r2 = s2) : ("function" != typeof l2.componentDidUpdate || i2 === e2.memoizedProps && f2 === e2.memoizedState || (t2.flags |= 4), "function" != typeof l2.getSnapshotBeforeUpdate || i2 === e2.memoizedProps && f2 === e2.memoizedState || (t2.flags |= 1024), r2 = false);
    }
    return Pu(e2, t2, n2, r2, o2, a2);
  }
  function Pu(e2, t2, n2, r2, a2, o2) {
    Cu(e2, t2);
    var l2 = !!(128 & t2.flags);
    if (!r2 && !l2) return a2 && Fo(t2, n2, false), Vu(e2, t2, o2);
    r2 = t2.stateNode, yu.current = t2;
    var i2 = l2 && "function" != typeof n2.getDerivedStateFromError ? null : r2.render();
    return t2.flags |= 1, null !== e2 && l2 ? (t2.child = kl(t2, e2.child, null, o2), t2.child = kl(t2, null, i2, o2)) : wu(e2, t2, i2, o2), t2.memoizedState = r2.state, a2 && Fo(t2, n2, true), t2.child;
  }
  function Tu(e2) {
    var t2 = e2.stateNode;
    t2.pendingContext ? Do(0, t2.pendingContext, t2.pendingContext !== t2.context) : t2.context && Do(0, t2.context, false), Xl(e2, t2.containerInfo);
  }
  function Lu(e2, t2, n2, r2, a2) {
    return hl(), ml(a2), t2.flags |= 256, wu(e2, t2, n2, r2), t2.child;
  }
  var Ru, zu, Mu, Ou, Du = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ju(e2) {
    return { baseLanes: e2, cachePool: null, transitions: null };
  }
  function Iu(e2, t2, n2) {
    var r2, a2 = t2.pendingProps, o2 = ei.current, l2 = false, i2 = !!(128 & t2.flags);
    if ((r2 = i2) || (r2 = (null === e2 || null !== e2.memoizedState) && !!(2 & o2)), r2 ? (l2 = true, t2.flags &= -129) : null !== e2 && null === e2.memoizedState || (o2 |= 1), _o(ei, 1 & o2), null === e2) return cl(t2), null !== (e2 = t2.memoizedState) && null !== (e2 = e2.dehydrated) ? (1 & t2.mode ? "$!" === e2.data ? t2.lanes = 8 : t2.lanes = 1073741824 : t2.lanes = 1, null) : (i2 = a2.children, e2 = a2.fallback, l2 ? (a2 = t2.mode, l2 = t2.child, i2 = { mode: "hidden", children: i2 }, 1 & a2 || null === l2 ? l2 = jc(i2, a2, 0, null) : (l2.childLanes = 0, l2.pendingProps = i2), e2 = Dc(e2, a2, n2, null), l2.return = t2, e2.return = t2, l2.sibling = e2, t2.child = l2, t2.child.memoizedState = ju(n2), t2.memoizedState = Du, e2) : Fu(t2, i2));
    if (null !== (o2 = e2.memoizedState) && null !== (r2 = o2.dehydrated)) return function(e3, t3, n3, r3, a3, o3, l3) {
      if (n3) return 256 & t3.flags ? (t3.flags &= -257, Au(e3, t3, l3, r3 = cu(Error(oe(422))))) : null !== t3.memoizedState ? (t3.child = e3.child, t3.flags |= 128, null) : (o3 = r3.fallback, a3 = t3.mode, r3 = jc({ mode: "visible", children: r3.children }, a3, 0, null), (o3 = Dc(o3, a3, l3, null)).flags |= 2, r3.return = t3, o3.return = t3, r3.sibling = o3, t3.child = r3, 1 & t3.mode && kl(t3, e3.child, null, l3), t3.child.memoizedState = ju(l3), t3.memoizedState = Du, o3);
      if (!(1 & t3.mode)) return Au(e3, t3, l3, null);
      if ("$!" === a3.data) {
        if (r3 = a3.nextSibling && a3.nextSibling.dataset) var i3 = r3.dgst;
        return r3 = i3, Au(e3, t3, l3, r3 = cu(o3 = Error(oe(419)), r3, void 0));
      }
      if (i3 = !!(l3 & e3.childLanes), bu || i3) {
        if (null !== (r3 = Ts)) {
          switch (l3 & -l3) {
            case 4:
              a3 = 2;
              break;
            case 16:
              a3 = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              a3 = 32;
              break;
            case 536870912:
              a3 = 268435456;
              break;
            default:
              a3 = 0;
          }
          0 !== (a3 = a3 & (r3.suspendedLanes | l3) ? 0 : a3) && a3 !== o3.retryLane && (o3.retryLane = a3, Dl(e3, a3), nc(r3, e3, a3, -1));
        }
        return mc(), Au(e3, t3, l3, r3 = cu(Error(oe(421))));
      }
      return "$?" === a3.data ? (t3.flags |= 128, t3.child = e3.child, t3 = _c.bind(null, e3), a3._reactRetry = t3, null) : (e3 = o3.treeContext, al = so(a3.nextSibling), rl = t3, ol = true, ll = null, null !== e3 && (Ko[Yo++] = Go, Ko[Yo++] = Zo, Ko[Yo++] = Xo, Go = e3.id, Zo = e3.overflow, Xo = t3), t3 = Fu(t3, r3.children), t3.flags |= 4096, t3);
    }(e2, t2, i2, a2, r2, o2, n2);
    if (l2) {
      l2 = a2.fallback, i2 = t2.mode, r2 = (o2 = e2.child).sibling;
      var u2 = { mode: "hidden", children: a2.children };
      return 1 & i2 || t2.child === o2 ? (a2 = Mc(o2, u2)).subtreeFlags = 14680064 & o2.subtreeFlags : ((a2 = t2.child).childLanes = 0, a2.pendingProps = u2, t2.deletions = null), null !== r2 ? l2 = Mc(r2, l2) : (l2 = Dc(l2, i2, n2, null)).flags |= 2, l2.return = t2, a2.return = t2, a2.sibling = l2, t2.child = a2, a2 = l2, l2 = t2.child, i2 = null === (i2 = e2.child.memoizedState) ? ju(n2) : { baseLanes: i2.baseLanes | n2, cachePool: null, transitions: i2.transitions }, l2.memoizedState = i2, l2.childLanes = e2.childLanes & ~n2, t2.memoizedState = Du, a2;
    }
    return e2 = (l2 = e2.child).sibling, a2 = Mc(l2, { mode: "visible", children: a2.children }), !(1 & t2.mode) && (a2.lanes = n2), a2.return = t2, a2.sibling = null, null !== e2 && (null === (n2 = t2.deletions) ? (t2.deletions = [e2], t2.flags |= 16) : n2.push(e2)), t2.child = a2, t2.memoizedState = null, a2;
  }
  function Fu(e2, t2) {
    return (t2 = jc({ mode: "visible", children: t2 }, e2.mode, 0, null)).return = e2, e2.child = t2;
  }
  function Au(e2, t2, n2, r2) {
    return null !== r2 && ml(r2), kl(t2, e2.child, null, n2), (e2 = Fu(t2, t2.pendingProps.children)).flags |= 2, t2.memoizedState = null, e2;
  }
  function Uu(e2, t2, n2) {
    e2.lanes |= t2;
    var r2 = e2.alternate;
    null !== r2 && (r2.lanes |= t2), Tl(e2.return, t2, n2);
  }
  function Wu(e2, t2, n2, r2, a2) {
    var o2 = e2.memoizedState;
    null === o2 ? e2.memoizedState = { isBackwards: t2, rendering: null, renderingStartTime: 0, last: r2, tail: n2, tailMode: a2 } : (o2.isBackwards = t2, o2.rendering = null, o2.renderingStartTime = 0, o2.last = r2, o2.tail = n2, o2.tailMode = a2);
  }
  function Bu(e2, t2, n2) {
    var r2 = t2.pendingProps, a2 = r2.revealOrder, o2 = r2.tail;
    if (wu(e2, t2, r2.children, n2), 2 & (r2 = ei.current)) r2 = 1 & r2 | 2, t2.flags |= 128;
    else {
      if (null !== e2 && 128 & e2.flags) e: for (e2 = t2.child; null !== e2; ) {
        if (13 === e2.tag) null !== e2.memoizedState && Uu(e2, n2, t2);
        else if (19 === e2.tag) Uu(e2, n2, t2);
        else if (null !== e2.child) {
          e2.child.return = e2, e2 = e2.child;
          continue;
        }
        if (e2 === t2) break e;
        for (; null === e2.sibling; ) {
          if (null === e2.return || e2.return === t2) break e;
          e2 = e2.return;
        }
        e2.sibling.return = e2.return, e2 = e2.sibling;
      }
      r2 &= 1;
    }
    if (_o(ei, r2), 1 & t2.mode) switch (a2) {
      case "forwards":
        for (n2 = t2.child, a2 = null; null !== n2; ) null !== (e2 = n2.alternate) && null === ti(e2) && (a2 = n2), n2 = n2.sibling;
        null === (n2 = a2) ? (a2 = t2.child, t2.child = null) : (a2 = n2.sibling, n2.sibling = null), Wu(t2, false, a2, n2, o2);
        break;
      case "backwards":
        for (n2 = null, a2 = t2.child, t2.child = null; null !== a2; ) {
          if (null !== (e2 = a2.alternate) && null === ti(e2)) {
            t2.child = a2;
            break;
          }
          e2 = a2.sibling, a2.sibling = n2, n2 = a2, a2 = e2;
        }
        Wu(t2, true, n2, null, o2);
        break;
      case "together":
        Wu(t2, false, null, null, void 0);
        break;
      default:
        t2.memoizedState = null;
    }
    else t2.memoizedState = null;
    return t2.child;
  }
  function $u(e2, t2) {
    !(1 & t2.mode) && null !== e2 && (e2.alternate = null, t2.alternate = null, t2.flags |= 2);
  }
  function Vu(e2, t2, n2) {
    if (null !== e2 && (t2.dependencies = e2.dependencies), js |= t2.lanes, !(n2 & t2.childLanes)) return null;
    if (null !== e2 && t2.child !== e2.child) throw Error(oe(153));
    if (null !== t2.child) {
      for (n2 = Mc(e2 = t2.child, e2.pendingProps), t2.child = n2, n2.return = t2; null !== e2.sibling; ) e2 = e2.sibling, (n2 = n2.sibling = Mc(e2, e2.pendingProps)).return = t2;
      n2.sibling = null;
    }
    return t2.child;
  }
  function Hu(e2, t2) {
    if (!ol) switch (e2.tailMode) {
      case "hidden":
        t2 = e2.tail;
        for (var n2 = null; null !== t2; ) null !== t2.alternate && (n2 = t2), t2 = t2.sibling;
        null === n2 ? e2.tail = null : n2.sibling = null;
        break;
      case "collapsed":
        n2 = e2.tail;
        for (var r2 = null; null !== n2; ) null !== n2.alternate && (r2 = n2), n2 = n2.sibling;
        null === r2 ? t2 || null === e2.tail ? e2.tail = null : e2.tail.sibling = null : r2.sibling = null;
    }
  }
  function Qu(e2) {
    var t2 = null !== e2.alternate && e2.alternate.child === e2.child, n2 = 0, r2 = 0;
    if (t2) for (var a2 = e2.child; null !== a2; ) n2 |= a2.lanes | a2.childLanes, r2 |= 14680064 & a2.subtreeFlags, r2 |= 14680064 & a2.flags, a2.return = e2, a2 = a2.sibling;
    else for (a2 = e2.child; null !== a2; ) n2 |= a2.lanes | a2.childLanes, r2 |= a2.subtreeFlags, r2 |= a2.flags, a2.return = e2, a2 = a2.sibling;
    return e2.subtreeFlags |= r2, e2.childLanes = n2, t2;
  }
  function qu(e2, t2, n2) {
    var r2 = t2.pendingProps;
    switch (nl(t2), t2.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Qu(t2), null;
      case 1:
      case 17:
        return Mo(t2.type) && Oo(), Qu(t2), null;
      case 3:
        return r2 = t2.stateNode, Gl(), No(Lo), No(To), ri(), r2.pendingContext && (r2.context = r2.pendingContext, r2.pendingContext = null), null !== e2 && null !== e2.child || (fl(t2) ? t2.flags |= 4 : null === e2 || e2.memoizedState.isDehydrated && !(256 & t2.flags) || (t2.flags |= 1024, null !== ll && (lc(ll), ll = null))), zu(e2, t2), Qu(t2), null;
      case 5:
        Jl(t2);
        var a2 = Yl(Kl.current);
        if (n2 = t2.type, null !== e2 && null != t2.stateNode) Mu(e2, t2, n2, r2, a2), e2.ref !== t2.ref && (t2.flags |= 512, t2.flags |= 2097152);
        else {
          if (!r2) {
            if (null === t2.stateNode) throw Error(oe(166));
            return Qu(t2), null;
          }
          if (e2 = Yl(Ql.current), fl(t2)) {
            r2 = t2.stateNode, n2 = t2.type;
            var o2 = t2.memoizedProps;
            switch (r2[po] = t2, r2[ho] = o2, e2 = !!(1 & t2.mode), n2) {
              case "dialog":
                Aa("cancel", r2), Aa("close", r2);
                break;
              case "iframe":
              case "object":
              case "embed":
                Aa("load", r2);
                break;
              case "video":
              case "audio":
                for (a2 = 0; a2 < Da.length; a2++) Aa(Da[a2], r2);
                break;
              case "source":
                Aa("error", r2);
                break;
              case "img":
              case "image":
              case "link":
                Aa("error", r2), Aa("load", r2);
                break;
              case "details":
                Aa("toggle", r2);
                break;
              case "input":
                Xe(r2, o2), Aa("invalid", r2);
                break;
              case "select":
                r2._wrapperState = { wasMultiple: !!o2.multiple }, Aa("invalid", r2);
                break;
              case "textarea":
                at(r2, o2), Aa("invalid", r2);
            }
            for (var l2 in yt(n2, o2), a2 = null, o2) if (o2.hasOwnProperty(l2)) {
              var i2 = o2[l2];
              "children" === l2 ? "string" == typeof i2 ? r2.textContent !== i2 && (true !== o2.suppressHydrationWarning && Za(r2.textContent, i2, e2), a2 = ["children", i2]) : "number" == typeof i2 && r2.textContent !== "" + i2 && (true !== o2.suppressHydrationWarning && Za(r2.textContent, i2, e2), a2 = ["children", "" + i2]) : ie.hasOwnProperty(l2) && null != i2 && "onScroll" === l2 && Aa("scroll", r2);
            }
            switch (n2) {
              case "input":
                Qe(r2), Je(r2, o2, true);
                break;
              case "textarea":
                Qe(r2), lt(r2);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" == typeof o2.onClick && (r2.onclick = Ja);
            }
            r2 = a2, t2.updateQueue = r2, null !== r2 && (t2.flags |= 4);
          } else {
            l2 = 9 === a2.nodeType ? a2 : a2.ownerDocument, "http://www.w3.org/1999/xhtml" === e2 && (e2 = it(n2)), "http://www.w3.org/1999/xhtml" === e2 ? "script" === n2 ? ((e2 = l2.createElement("div")).innerHTML = "<script><\/script>", e2 = e2.removeChild(e2.firstChild)) : "string" == typeof r2.is ? e2 = l2.createElement(n2, { is: r2.is }) : (e2 = l2.createElement(n2), "select" === n2 && (l2 = e2, r2.multiple ? l2.multiple = true : r2.size && (l2.size = r2.size))) : e2 = l2.createElementNS(e2, n2), e2[po] = t2, e2[ho] = r2, Ru(e2, t2, false, false), t2.stateNode = e2;
            e: {
              switch (l2 = bt(n2, r2), n2) {
                case "dialog":
                  Aa("cancel", e2), Aa("close", e2), a2 = r2;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Aa("load", e2), a2 = r2;
                  break;
                case "video":
                case "audio":
                  for (a2 = 0; a2 < Da.length; a2++) Aa(Da[a2], e2);
                  a2 = r2;
                  break;
                case "source":
                  Aa("error", e2), a2 = r2;
                  break;
                case "img":
                case "image":
                case "link":
                  Aa("error", e2), Aa("load", e2), a2 = r2;
                  break;
                case "details":
                  Aa("toggle", e2), a2 = r2;
                  break;
                case "input":
                  Xe(e2, r2), a2 = Ye(e2, r2), Aa("invalid", e2);
                  break;
                case "option":
                default:
                  a2 = r2;
                  break;
                case "select":
                  e2._wrapperState = { wasMultiple: !!r2.multiple }, a2 = Ie({}, r2, { value: void 0 }), Aa("invalid", e2);
                  break;
                case "textarea":
                  at(e2, r2), a2 = rt(e2, r2), Aa("invalid", e2);
              }
              for (o2 in yt(n2, a2), i2 = a2) if (i2.hasOwnProperty(o2)) {
                var u2 = i2[o2];
                "style" === o2 ? gt(e2, u2) : "dangerouslySetInnerHTML" === o2 ? null != (u2 = u2 ? u2.__html : void 0) && dt(e2, u2) : "children" === o2 ? "string" == typeof u2 ? ("textarea" !== n2 || "" !== u2) && ft(e2, u2) : "number" == typeof u2 && ft(e2, "" + u2) : "suppressContentEditableWarning" !== o2 && "suppressHydrationWarning" !== o2 && "autoFocus" !== o2 && (ie.hasOwnProperty(o2) ? null != u2 && "onScroll" === o2 && Aa("scroll", e2) : null != u2 && be(e2, o2, u2, l2));
              }
              switch (n2) {
                case "input":
                  Qe(e2), Je(e2, r2, false);
                  break;
                case "textarea":
                  Qe(e2), lt(e2);
                  break;
                case "option":
                  null != r2.value && e2.setAttribute("value", "" + Ve(r2.value));
                  break;
                case "select":
                  e2.multiple = !!r2.multiple, null != (o2 = r2.value) ? nt(e2, !!r2.multiple, o2, false) : null != r2.defaultValue && nt(e2, !!r2.multiple, r2.defaultValue, true);
                  break;
                default:
                  "function" == typeof a2.onClick && (e2.onclick = Ja);
              }
              switch (n2) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r2 = !!r2.autoFocus;
                  break e;
                case "img":
                  r2 = true;
                  break e;
                default:
                  r2 = false;
              }
            }
            r2 && (t2.flags |= 4);
          }
          null !== t2.ref && (t2.flags |= 512, t2.flags |= 2097152);
        }
        return Qu(t2), null;
      case 6:
        if (e2 && null != t2.stateNode) Ou(e2, t2, e2.memoizedProps, r2);
        else {
          if ("string" != typeof r2 && null === t2.stateNode) throw Error(oe(166));
          if (n2 = Yl(Kl.current), Yl(Ql.current), fl(t2)) {
            if (r2 = t2.stateNode, n2 = t2.memoizedProps, r2[po] = t2, (o2 = r2.nodeValue !== n2) && null !== (e2 = rl)) switch (e2.tag) {
              case 3:
                Za(r2.nodeValue, n2, !!(1 & e2.mode));
                break;
              case 5:
                true !== e2.memoizedProps.suppressHydrationWarning && Za(r2.nodeValue, n2, !!(1 & e2.mode));
            }
            o2 && (t2.flags |= 4);
          } else (r2 = (9 === n2.nodeType ? n2 : n2.ownerDocument).createTextNode(r2))[po] = t2, t2.stateNode = r2;
        }
        return Qu(t2), null;
      case 13:
        if (No(ei), r2 = t2.memoizedState, null === e2 || null !== e2.memoizedState && null !== e2.memoizedState.dehydrated) {
          if (ol && null !== al && 1 & t2.mode && !(128 & t2.flags)) pl(), hl(), t2.flags |= 98560, o2 = false;
          else if (o2 = fl(t2), null !== r2 && null !== r2.dehydrated) {
            if (null === e2) {
              if (!o2) throw Error(oe(318));
              if (!(o2 = null !== (o2 = t2.memoizedState) ? o2.dehydrated : null)) throw Error(oe(317));
              o2[po] = t2;
            } else hl(), !(128 & t2.flags) && (t2.memoizedState = null), t2.flags |= 4;
            Qu(t2), o2 = false;
          } else null !== ll && (lc(ll), ll = null), o2 = true;
          if (!o2) return 65536 & t2.flags ? t2 : null;
        }
        return 128 & t2.flags ? (t2.lanes = n2, t2) : ((r2 = null !== r2) !== (null !== e2 && null !== e2.memoizedState) && r2 && (t2.child.flags |= 8192, 1 & t2.mode && (null === e2 || 1 & ei.current ? 0 === Os && (Os = 3) : mc())), null !== t2.updateQueue && (t2.flags |= 4), Qu(t2), null);
      case 4:
        return Gl(), zu(e2, t2), null === e2 && Ba(t2.stateNode.containerInfo), Qu(t2), null;
      case 10:
        return Pl(t2.type._context), Qu(t2), null;
      case 19:
        if (No(ei), null === (o2 = t2.memoizedState)) return Qu(t2), null;
        if (r2 = !!(128 & t2.flags), null === (l2 = o2.rendering)) if (r2) Hu(o2, false);
        else {
          if (0 !== Os || null !== e2 && 128 & e2.flags) for (e2 = t2.child; null !== e2; ) {
            if (null !== (l2 = ti(e2))) {
              for (t2.flags |= 128, Hu(o2, false), null !== (r2 = l2.updateQueue) && (t2.updateQueue = r2, t2.flags |= 4), t2.subtreeFlags = 0, r2 = n2, n2 = t2.child; null !== n2; ) e2 = r2, (o2 = n2).flags &= 14680066, null === (l2 = o2.alternate) ? (o2.childLanes = 0, o2.lanes = e2, o2.child = null, o2.subtreeFlags = 0, o2.memoizedProps = null, o2.memoizedState = null, o2.updateQueue = null, o2.dependencies = null, o2.stateNode = null) : (o2.childLanes = l2.childLanes, o2.lanes = l2.lanes, o2.child = l2.child, o2.subtreeFlags = 0, o2.deletions = null, o2.memoizedProps = l2.memoizedProps, o2.memoizedState = l2.memoizedState, o2.updateQueue = l2.updateQueue, o2.type = l2.type, e2 = l2.dependencies, o2.dependencies = null === e2 ? null : { lanes: e2.lanes, firstContext: e2.firstContext }), n2 = n2.sibling;
              return _o(ei, 1 & ei.current | 2), t2.child;
            }
            e2 = e2.sibling;
          }
          null !== o2.tail && Gt() > Bs && (t2.flags |= 128, r2 = true, Hu(o2, false), t2.lanes = 4194304);
        }
        else {
          if (!r2) if (null !== (e2 = ti(l2))) {
            if (t2.flags |= 128, r2 = true, null !== (n2 = e2.updateQueue) && (t2.updateQueue = n2, t2.flags |= 4), Hu(o2, true), null === o2.tail && "hidden" === o2.tailMode && !l2.alternate && !ol) return Qu(t2), null;
          } else 2 * Gt() - o2.renderingStartTime > Bs && 1073741824 !== n2 && (t2.flags |= 128, r2 = true, Hu(o2, false), t2.lanes = 4194304);
          o2.isBackwards ? (l2.sibling = t2.child, t2.child = l2) : (null !== (n2 = o2.last) ? n2.sibling = l2 : t2.child = l2, o2.last = l2);
        }
        return null !== o2.tail ? (t2 = o2.tail, o2.rendering = t2, o2.tail = t2.sibling, o2.renderingStartTime = Gt(), t2.sibling = null, n2 = ei.current, _o(ei, r2 ? 1 & n2 | 2 : 1 & n2), t2) : (Qu(t2), null);
      case 22:
      case 23:
        return dc(), r2 = null !== t2.memoizedState, null !== e2 && null !== e2.memoizedState !== r2 && (t2.flags |= 8192), r2 && 1 & t2.mode ? !!(1073741824 & zs) && (Qu(t2), 6 & t2.subtreeFlags && (t2.flags |= 8192)) : Qu(t2), null;
      case 24:
      case 25:
        return null;
    }
    throw Error(oe(156, t2.tag));
  }
  function Ku(e2, t2) {
    switch (nl(t2), t2.tag) {
      case 1:
        return Mo(t2.type) && Oo(), 65536 & (e2 = t2.flags) ? (t2.flags = -65537 & e2 | 128, t2) : null;
      case 3:
        return Gl(), No(Lo), No(To), ri(), 65536 & (e2 = t2.flags) && !(128 & e2) ? (t2.flags = -65537 & e2 | 128, t2) : null;
      case 5:
        return Jl(t2), null;
      case 13:
        if (No(ei), null !== (e2 = t2.memoizedState) && null !== e2.dehydrated) {
          if (null === t2.alternate) throw Error(oe(340));
          hl();
        }
        return 65536 & (e2 = t2.flags) ? (t2.flags = -65537 & e2 | 128, t2) : null;
      case 19:
        return No(ei), null;
      case 4:
        return Gl(), null;
      case 10:
        return Pl(t2.type._context), null;
      case 22:
      case 23:
        return dc(), null;
      default:
        return null;
    }
  }
  Ru = function(e2, t2) {
    for (var n2 = t2.child; null !== n2; ) {
      if (5 === n2.tag || 6 === n2.tag) e2.appendChild(n2.stateNode);
      else if (4 !== n2.tag && null !== n2.child) {
        n2.child.return = n2, n2 = n2.child;
        continue;
      }
      if (n2 === t2) break;
      for (; null === n2.sibling; ) {
        if (null === n2.return || n2.return === t2) return;
        n2 = n2.return;
      }
      n2.sibling.return = n2.return, n2 = n2.sibling;
    }
  }, zu = function() {
  }, Mu = function(e2, t2, n2, r2) {
    var a2 = e2.memoizedProps;
    if (a2 !== r2) {
      e2 = t2.stateNode, Yl(Ql.current);
      var o2, l2 = null;
      switch (n2) {
        case "input":
          a2 = Ye(e2, a2), r2 = Ye(e2, r2), l2 = [];
          break;
        case "select":
          a2 = Ie({}, a2, { value: void 0 }), r2 = Ie({}, r2, { value: void 0 }), l2 = [];
          break;
        case "textarea":
          a2 = rt(e2, a2), r2 = rt(e2, r2), l2 = [];
          break;
        default:
          "function" != typeof a2.onClick && "function" == typeof r2.onClick && (e2.onclick = Ja);
      }
      for (s2 in yt(n2, r2), n2 = null, a2) if (!r2.hasOwnProperty(s2) && a2.hasOwnProperty(s2) && null != a2[s2]) if ("style" === s2) {
        var i2 = a2[s2];
        for (o2 in i2) i2.hasOwnProperty(o2) && (n2 || (n2 = {}), n2[o2] = "");
      } else "dangerouslySetInnerHTML" !== s2 && "children" !== s2 && "suppressContentEditableWarning" !== s2 && "suppressHydrationWarning" !== s2 && "autoFocus" !== s2 && (ie.hasOwnProperty(s2) ? l2 || (l2 = []) : (l2 = l2 || []).push(s2, null));
      for (s2 in r2) {
        var u2 = r2[s2];
        if (i2 = null != a2 ? a2[s2] : void 0, r2.hasOwnProperty(s2) && u2 !== i2 && (null != u2 || null != i2)) if ("style" === s2) if (i2) {
          for (o2 in i2) !i2.hasOwnProperty(o2) || u2 && u2.hasOwnProperty(o2) || (n2 || (n2 = {}), n2[o2] = "");
          for (o2 in u2) u2.hasOwnProperty(o2) && i2[o2] !== u2[o2] && (n2 || (n2 = {}), n2[o2] = u2[o2]);
        } else n2 || (l2 || (l2 = []), l2.push(s2, n2)), n2 = u2;
        else "dangerouslySetInnerHTML" === s2 ? (u2 = u2 ? u2.__html : void 0, i2 = i2 ? i2.__html : void 0, null != u2 && i2 !== u2 && (l2 = l2 || []).push(s2, u2)) : "children" === s2 ? "string" != typeof u2 && "number" != typeof u2 || (l2 = l2 || []).push(s2, "" + u2) : "suppressContentEditableWarning" !== s2 && "suppressHydrationWarning" !== s2 && (ie.hasOwnProperty(s2) ? (null != u2 && "onScroll" === s2 && Aa("scroll", e2), l2 || i2 === u2 || (l2 = [])) : (l2 = l2 || []).push(s2, u2));
      }
      n2 && (l2 = l2 || []).push("style", n2);
      var s2 = l2;
      (t2.updateQueue = s2) && (t2.flags |= 4);
    }
  }, Ou = function(e2, t2, n2, r2) {
    n2 !== r2 && (t2.flags |= 4);
  };
  var Yu = false, Xu = false, Gu = "function" == typeof WeakSet ? WeakSet : Set, Zu = null;
  function Ju(e2, t2) {
    var n2 = e2.ref;
    if (null !== n2) if ("function" == typeof n2) try {
      n2(null);
    } catch (r2) {
      Ec(e2, t2, r2);
    }
    else n2.current = null;
  }
  function es(e2, t2, n2) {
    try {
      n2();
    } catch (r2) {
      Ec(e2, t2, r2);
    }
  }
  var ts = false;
  function ns(e2, t2, n2) {
    var r2 = t2.updateQueue;
    if (null !== (r2 = null !== r2 ? r2.lastEffect : null)) {
      var a2 = r2 = r2.next;
      do {
        if ((a2.tag & e2) === e2) {
          var o2 = a2.destroy;
          a2.destroy = void 0, void 0 !== o2 && es(t2, n2, o2);
        }
        a2 = a2.next;
      } while (a2 !== r2);
    }
  }
  function rs(e2, t2) {
    if (null !== (t2 = null !== (t2 = t2.updateQueue) ? t2.lastEffect : null)) {
      var n2 = t2 = t2.next;
      do {
        if ((n2.tag & e2) === e2) {
          var r2 = n2.create;
          n2.destroy = r2();
        }
        n2 = n2.next;
      } while (n2 !== t2);
    }
  }
  function as(e2) {
    var t2 = e2.ref;
    if (null !== t2) {
      var n2 = e2.stateNode;
      e2.tag, e2 = n2, "function" == typeof t2 ? t2(e2) : t2.current = e2;
    }
  }
  function os(e2) {
    var t2 = e2.alternate;
    null !== t2 && (e2.alternate = null, os(t2)), e2.child = null, e2.deletions = null, e2.sibling = null, 5 === e2.tag && (null !== (t2 = e2.stateNode) && (delete t2[po], delete t2[ho], delete t2[go], delete t2[vo], delete t2[yo])), e2.stateNode = null, e2.return = null, e2.dependencies = null, e2.memoizedProps = null, e2.memoizedState = null, e2.pendingProps = null, e2.stateNode = null, e2.updateQueue = null;
  }
  function ls(e2) {
    return 5 === e2.tag || 3 === e2.tag || 4 === e2.tag;
  }
  function is(e2) {
    e: for (; ; ) {
      for (; null === e2.sibling; ) {
        if (null === e2.return || ls(e2.return)) return null;
        e2 = e2.return;
      }
      for (e2.sibling.return = e2.return, e2 = e2.sibling; 5 !== e2.tag && 6 !== e2.tag && 18 !== e2.tag; ) {
        if (2 & e2.flags) continue e;
        if (null === e2.child || 4 === e2.tag) continue e;
        e2.child.return = e2, e2 = e2.child;
      }
      if (!(2 & e2.flags)) return e2.stateNode;
    }
  }
  function us(e2, t2, n2) {
    var r2 = e2.tag;
    if (5 === r2 || 6 === r2) e2 = e2.stateNode, t2 ? 8 === n2.nodeType ? n2.parentNode.insertBefore(e2, t2) : n2.insertBefore(e2, t2) : (8 === n2.nodeType ? (t2 = n2.parentNode).insertBefore(e2, n2) : (t2 = n2).appendChild(e2), null != (n2 = n2._reactRootContainer) || null !== t2.onclick || (t2.onclick = Ja));
    else if (4 !== r2 && null !== (e2 = e2.child)) for (us(e2, t2, n2), e2 = e2.sibling; null !== e2; ) us(e2, t2, n2), e2 = e2.sibling;
  }
  function ss(e2, t2, n2) {
    var r2 = e2.tag;
    if (5 === r2 || 6 === r2) e2 = e2.stateNode, t2 ? n2.insertBefore(e2, t2) : n2.appendChild(e2);
    else if (4 !== r2 && null !== (e2 = e2.child)) for (ss(e2, t2, n2), e2 = e2.sibling; null !== e2; ) ss(e2, t2, n2), e2 = e2.sibling;
  }
  var cs = null, ds = false;
  function fs(e2, t2, n2) {
    for (n2 = n2.child; null !== n2; ) ps(e2, t2, n2), n2 = n2.sibling;
  }
  function ps(e2, t2, n2) {
    if (on && "function" == typeof on.onCommitFiberUnmount) try {
      on.onCommitFiberUnmount(an, n2);
    } catch (i2) {
    }
    switch (n2.tag) {
      case 5:
        Xu || Ju(n2, t2);
      case 6:
        var r2 = cs, a2 = ds;
        cs = null, fs(e2, t2, n2), ds = a2, null !== (cs = r2) && (ds ? (e2 = cs, n2 = n2.stateNode, 8 === e2.nodeType ? e2.parentNode.removeChild(n2) : e2.removeChild(n2)) : cs.removeChild(n2.stateNode));
        break;
      case 18:
        null !== cs && (ds ? (e2 = cs, n2 = n2.stateNode, 8 === e2.nodeType ? uo(e2.parentNode, n2) : 1 === e2.nodeType && uo(e2, n2), $n(e2)) : uo(cs, n2.stateNode));
        break;
      case 4:
        r2 = cs, a2 = ds, cs = n2.stateNode.containerInfo, ds = true, fs(e2, t2, n2), cs = r2, ds = a2;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Xu && (null !== (r2 = n2.updateQueue) && null !== (r2 = r2.lastEffect))) {
          a2 = r2 = r2.next;
          do {
            var o2 = a2, l2 = o2.destroy;
            o2 = o2.tag, void 0 !== l2 && (2 & o2 || 4 & o2) && es(n2, t2, l2), a2 = a2.next;
          } while (a2 !== r2);
        }
        fs(e2, t2, n2);
        break;
      case 1:
        if (!Xu && (Ju(n2, t2), "function" == typeof (r2 = n2.stateNode).componentWillUnmount)) try {
          r2.props = n2.memoizedProps, r2.state = n2.memoizedState, r2.componentWillUnmount();
        } catch (i2) {
          Ec(n2, t2, i2);
        }
        fs(e2, t2, n2);
        break;
      case 21:
        fs(e2, t2, n2);
        break;
      case 22:
        1 & n2.mode ? (Xu = (r2 = Xu) || null !== n2.memoizedState, fs(e2, t2, n2), Xu = r2) : fs(e2, t2, n2);
        break;
      default:
        fs(e2, t2, n2);
    }
  }
  function hs(e2) {
    var t2 = e2.updateQueue;
    if (null !== t2) {
      e2.updateQueue = null;
      var n2 = e2.stateNode;
      null === n2 && (n2 = e2.stateNode = new Gu()), t2.forEach(function(t3) {
        var r2 = Pc.bind(null, e2, t3);
        n2.has(t3) || (n2.add(t3), t3.then(r2, r2));
      });
    }
  }
  function ms(e2, t2) {
    var n2 = t2.deletions;
    if (null !== n2) for (var r2 = 0; r2 < n2.length; r2++) {
      var a2 = n2[r2];
      try {
        var o2 = e2, l2 = t2, i2 = l2;
        e: for (; null !== i2; ) {
          switch (i2.tag) {
            case 5:
              cs = i2.stateNode, ds = false;
              break e;
            case 3:
            case 4:
              cs = i2.stateNode.containerInfo, ds = true;
              break e;
          }
          i2 = i2.return;
        }
        if (null === cs) throw Error(oe(160));
        ps(o2, l2, a2), cs = null, ds = false;
        var u2 = a2.alternate;
        null !== u2 && (u2.return = null), a2.return = null;
      } catch (H2) {
        Ec(a2, t2, H2);
      }
    }
    if (12854 & t2.subtreeFlags) for (t2 = t2.child; null !== t2; ) gs(t2, e2), t2 = t2.sibling;
  }
  function gs(e2, t2) {
    var n2 = e2.alternate, r2 = e2.flags;
    switch (e2.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ms(t2, e2), vs(e2), 4 & r2) {
          try {
            ns(3, e2, e2.return), rs(3, e2);
          } catch (d2) {
            Ec(e2, e2.return, d2);
          }
          try {
            ns(5, e2, e2.return);
          } catch (d2) {
            Ec(e2, e2.return, d2);
          }
        }
        break;
      case 1:
        ms(t2, e2), vs(e2), 512 & r2 && null !== n2 && Ju(n2, n2.return);
        break;
      case 5:
        if (ms(t2, e2), vs(e2), 512 & r2 && null !== n2 && Ju(n2, n2.return), 32 & e2.flags) {
          var a2 = e2.stateNode;
          try {
            ft(a2, "");
          } catch (d2) {
            Ec(e2, e2.return, d2);
          }
        }
        if (4 & r2 && null != (a2 = e2.stateNode)) {
          var o2 = e2.memoizedProps, l2 = null !== n2 ? n2.memoizedProps : o2, i2 = e2.type, u2 = e2.updateQueue;
          if (e2.updateQueue = null, null !== u2) try {
            "input" === i2 && "radio" === o2.type && null != o2.name && Ge(a2, o2), bt(i2, l2);
            var s2 = bt(i2, o2);
            for (l2 = 0; l2 < u2.length; l2 += 2) {
              var c2 = u2[l2], f2 = u2[l2 + 1];
              "style" === c2 ? gt(a2, f2) : "dangerouslySetInnerHTML" === c2 ? dt(a2, f2) : "children" === c2 ? ft(a2, f2) : be(a2, c2, f2, s2);
            }
            switch (i2) {
              case "input":
                Ze(a2, o2);
                break;
              case "textarea":
                ot(a2, o2);
                break;
              case "select":
                var p2 = a2._wrapperState.wasMultiple;
                a2._wrapperState.wasMultiple = !!o2.multiple;
                var h2 = o2.value;
                null != h2 ? nt(a2, !!o2.multiple, h2, false) : p2 !== !!o2.multiple && (null != o2.defaultValue ? nt(a2, !!o2.multiple, o2.defaultValue, true) : nt(a2, !!o2.multiple, o2.multiple ? [] : "", false));
            }
            a2[ho] = o2;
          } catch (d2) {
            Ec(e2, e2.return, d2);
          }
        }
        break;
      case 6:
        if (ms(t2, e2), vs(e2), 4 & r2) {
          if (null === e2.stateNode) throw Error(oe(162));
          a2 = e2.stateNode, o2 = e2.memoizedProps;
          try {
            a2.nodeValue = o2;
          } catch (d2) {
            Ec(e2, e2.return, d2);
          }
        }
        break;
      case 3:
        if (ms(t2, e2), vs(e2), 4 & r2 && null !== n2 && n2.memoizedState.isDehydrated) try {
          $n(t2.containerInfo);
        } catch (d2) {
          Ec(e2, e2.return, d2);
        }
        break;
      case 4:
      default:
        ms(t2, e2), vs(e2);
        break;
      case 13:
        ms(t2, e2), vs(e2), 8192 & (a2 = e2.child).flags && (o2 = null !== a2.memoizedState, a2.stateNode.isHidden = o2, !o2 || null !== a2.alternate && null !== a2.alternate.memoizedState || (Ws = Gt())), 4 & r2 && hs(e2);
        break;
      case 22:
        if (c2 = null !== n2 && null !== n2.memoizedState, 1 & e2.mode ? (Xu = (s2 = Xu) || c2, ms(t2, e2), Xu = s2) : ms(t2, e2), vs(e2), 8192 & r2) {
          if (s2 = null !== e2.memoizedState, (e2.stateNode.isHidden = s2) && !c2 && 1 & e2.mode) for (Zu = e2, c2 = e2.child; null !== c2; ) {
            for (f2 = Zu = c2; null !== Zu; ) {
              switch (h2 = (p2 = Zu).child, p2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ns(4, p2, p2.return);
                  break;
                case 1:
                  Ju(p2, p2.return);
                  var m2 = p2.stateNode;
                  if ("function" == typeof m2.componentWillUnmount) {
                    r2 = p2, n2 = p2.return;
                    try {
                      t2 = r2, m2.props = t2.memoizedProps, m2.state = t2.memoizedState, m2.componentWillUnmount();
                    } catch (d2) {
                      Ec(r2, n2, d2);
                    }
                  }
                  break;
                case 5:
                  Ju(p2, p2.return);
                  break;
                case 22:
                  if (null !== p2.memoizedState) {
                    ks(f2);
                    continue;
                  }
              }
              null !== h2 ? (h2.return = p2, Zu = h2) : ks(f2);
            }
            c2 = c2.sibling;
          }
          e: for (c2 = null, f2 = e2; ; ) {
            if (5 === f2.tag) {
              if (null === c2) {
                c2 = f2;
                try {
                  a2 = f2.stateNode, s2 ? "function" == typeof (o2 = a2.style).setProperty ? o2.setProperty("display", "none", "important") : o2.display = "none" : (i2 = f2.stateNode, l2 = null != (u2 = f2.memoizedProps.style) && u2.hasOwnProperty("display") ? u2.display : null, i2.style.display = mt("display", l2));
                } catch (d2) {
                  Ec(e2, e2.return, d2);
                }
              }
            } else if (6 === f2.tag) {
              if (null === c2) try {
                f2.stateNode.nodeValue = s2 ? "" : f2.memoizedProps;
              } catch (d2) {
                Ec(e2, e2.return, d2);
              }
            } else if ((22 !== f2.tag && 23 !== f2.tag || null === f2.memoizedState || f2 === e2) && null !== f2.child) {
              f2.child.return = f2, f2 = f2.child;
              continue;
            }
            if (f2 === e2) break e;
            for (; null === f2.sibling; ) {
              if (null === f2.return || f2.return === e2) break e;
              c2 === f2 && (c2 = null), f2 = f2.return;
            }
            c2 === f2 && (c2 = null), f2.sibling.return = f2.return, f2 = f2.sibling;
          }
        }
        break;
      case 19:
        ms(t2, e2), vs(e2), 4 & r2 && hs(e2);
      case 21:
    }
  }
  function vs(e2) {
    var t2 = e2.flags;
    if (2 & t2) {
      try {
        e: {
          for (var n2 = e2.return; null !== n2; ) {
            if (ls(n2)) {
              var r2 = n2;
              break e;
            }
            n2 = n2.return;
          }
          throw Error(oe(160));
        }
        switch (r2.tag) {
          case 5:
            var a2 = r2.stateNode;
            32 & r2.flags && (ft(a2, ""), r2.flags &= -33), ss(e2, is(e2), a2);
            break;
          case 3:
          case 4:
            var o2 = r2.stateNode.containerInfo;
            us(e2, is(e2), o2);
            break;
          default:
            throw Error(oe(161));
        }
      } catch (V2) {
        Ec(e2, e2.return, V2);
      }
      e2.flags &= -3;
    }
    4096 & t2 && (e2.flags &= -4097);
  }
  function ys(e2, t2, n2) {
    Zu = e2, bs(e2);
  }
  function bs(e2, t2, n2) {
    for (var r2 = !!(1 & e2.mode); null !== Zu; ) {
      var a2 = Zu, o2 = a2.child;
      if (22 === a2.tag && r2) {
        var l2 = null !== a2.memoizedState || Yu;
        if (!l2) {
          var i2 = a2.alternate, u2 = null !== i2 && null !== i2.memoizedState || Xu;
          i2 = Yu;
          var s2 = Xu;
          if (Yu = l2, (Xu = u2) && !s2) for (Zu = a2; null !== Zu; ) u2 = (l2 = Zu).child, 22 === l2.tag && null !== l2.memoizedState ? xs(a2) : null !== u2 ? (u2.return = l2, Zu = u2) : xs(a2);
          for (; null !== o2; ) Zu = o2, bs(o2), o2 = o2.sibling;
          Zu = a2, Yu = i2, Xu = s2;
        }
        ws(e2);
      } else 8772 & a2.subtreeFlags && null !== o2 ? (o2.return = a2, Zu = o2) : ws(e2);
    }
  }
  function ws(e2) {
    for (; null !== Zu; ) {
      var t2 = Zu;
      if (8772 & t2.flags) {
        var n2 = t2.alternate;
        try {
          if (8772 & t2.flags) switch (t2.tag) {
            case 0:
            case 11:
            case 15:
              Xu || rs(5, t2);
              break;
            case 1:
              var r2 = t2.stateNode;
              if (4 & t2.flags && !Xu) if (null === n2) r2.componentDidMount();
              else {
                var a2 = t2.elementType === t2.type ? n2.memoizedProps : nu(t2.type, n2.memoizedProps);
                r2.componentDidUpdate(a2, n2.memoizedState, r2.__reactInternalSnapshotBeforeUpdate);
              }
              var o2 = t2.updateQueue;
              null !== o2 && Vl(t2, o2, r2);
              break;
            case 3:
              var l2 = t2.updateQueue;
              if (null !== l2) {
                if (n2 = null, null !== t2.child) switch (t2.child.tag) {
                  case 5:
                  case 1:
                    n2 = t2.child.stateNode;
                }
                Vl(t2, l2, n2);
              }
              break;
            case 5:
              var i2 = t2.stateNode;
              if (null === n2 && 4 & t2.flags) {
                n2 = i2;
                var u2 = t2.memoizedProps;
                switch (t2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u2.autoFocus && n2.focus();
                    break;
                  case "img":
                    u2.src && (n2.src = u2.src);
                }
              }
              break;
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            case 13:
              if (null === t2.memoizedState) {
                var s2 = t2.alternate;
                if (null !== s2) {
                  var d2 = s2.memoizedState;
                  if (null !== d2) {
                    var f2 = d2.dehydrated;
                    null !== f2 && $n(f2);
                  }
                }
              }
              break;
            default:
              throw Error(oe(163));
          }
          Xu || 512 & t2.flags && as(t2);
        } catch (c2) {
          Ec(t2, t2.return, c2);
        }
      }
      if (t2 === e2) {
        Zu = null;
        break;
      }
      if (null !== (n2 = t2.sibling)) {
        n2.return = t2.return, Zu = n2;
        break;
      }
      Zu = t2.return;
    }
  }
  function ks(e2) {
    for (; null !== Zu; ) {
      var t2 = Zu;
      if (t2 === e2) {
        Zu = null;
        break;
      }
      var n2 = t2.sibling;
      if (null !== n2) {
        n2.return = t2.return, Zu = n2;
        break;
      }
      Zu = t2.return;
    }
  }
  function xs(e2) {
    for (; null !== Zu; ) {
      var t2 = Zu;
      try {
        switch (t2.tag) {
          case 0:
          case 11:
          case 15:
            var n2 = t2.return;
            try {
              rs(4, t2);
            } catch (V2) {
              Ec(t2, n2, V2);
            }
            break;
          case 1:
            var r2 = t2.stateNode;
            if ("function" == typeof r2.componentDidMount) {
              var a2 = t2.return;
              try {
                r2.componentDidMount();
              } catch (V2) {
                Ec(t2, a2, V2);
              }
            }
            var o2 = t2.return;
            try {
              as(t2);
            } catch (V2) {
              Ec(t2, o2, V2);
            }
            break;
          case 5:
            var l2 = t2.return;
            try {
              as(t2);
            } catch (V2) {
              Ec(t2, l2, V2);
            }
        }
      } catch (V2) {
        Ec(t2, t2.return, V2);
      }
      if (t2 === e2) {
        Zu = null;
        break;
      }
      var i2 = t2.sibling;
      if (null !== i2) {
        i2.return = t2.return, Zu = i2;
        break;
      }
      Zu = t2.return;
    }
  }
  var Ss, Es = Math.ceil, Cs = we.ReactCurrentDispatcher, Ns = we.ReactCurrentOwner, _s = we.ReactCurrentBatchConfig, Ps = 0, Ts = null, Ls = null, Rs = 0, zs = 0, Ms = Co(0), Os = 0, Ds = null, js = 0, Is = 0, Fs = 0, As = null, Us = null, Ws = 0, Bs = 1 / 0, $s = null, Vs = false, Hs = null, Qs = null, qs = false, Ks = null, Ys = 0, Xs = 0, Gs = null, Zs = -1, Js = 0;
  function ec() {
    return 6 & Ps ? Gt() : -1 !== Zs ? Zs : Zs = Gt();
  }
  function tc(e2) {
    return 1 & e2.mode ? 2 & Ps && 0 !== Rs ? Rs & -Rs : null !== gl.transition ? (0 === Js && (Js = gn()), Js) : 0 !== (e2 = wn) ? e2 : e2 = void 0 === (e2 = window.event) ? 16 : Gn(e2.type) : 1;
  }
  function nc(e2, t2, n2, r2) {
    if (50 < Xs) throw Xs = 0, Gs = null, Error(oe(185));
    yn(e2, n2, r2), 2 & Ps && e2 === Ts || (e2 === Ts && (!(2 & Ps) && (Is |= n2), 4 === Os && ic(e2, Rs)), rc(e2, r2), 1 === n2 && 0 === Ps && !(1 & t2.mode) && (Bs = Gt() + 500, Uo && $o()));
  }
  function rc(e2, t2) {
    var n2 = e2.callbackNode;
    !function(e3, t3) {
      for (var n3 = e3.suspendedLanes, r3 = e3.pingedLanes, a2 = e3.expirationTimes, o2 = e3.pendingLanes; 0 < o2; ) {
        var l2 = 31 - ln(o2), i2 = 1 << l2, u2 = a2[l2];
        -1 === u2 ? i2 & n3 && !(i2 & r3) || (a2[l2] = hn(i2, t3)) : u2 <= t3 && (e3.expiredLanes |= i2), o2 &= ~i2;
      }
    }(e2, t2);
    var r2 = pn(e2, e2 === Ts ? Rs : 0);
    if (0 === r2) null !== n2 && Kt(n2), e2.callbackNode = null, e2.callbackPriority = 0;
    else if (t2 = r2 & -r2, e2.callbackPriority !== t2) {
      if (null != n2 && Kt(n2), 1 === t2) 0 === e2.tag ? function(e3) {
        Uo = true, Bo(e3);
      }(uc.bind(null, e2)) : Bo(uc.bind(null, e2)), lo(function() {
        !(6 & Ps) && $o();
      }), n2 = null;
      else {
        switch (kn(r2)) {
          case 1:
            n2 = Jt;
            break;
          case 4:
            n2 = en;
            break;
          case 16:
          default:
            n2 = tn;
            break;
          case 536870912:
            n2 = rn;
        }
        n2 = Tc(n2, ac.bind(null, e2));
      }
      e2.callbackPriority = t2, e2.callbackNode = n2;
    }
  }
  function ac(e2, t2) {
    if (Zs = -1, Js = 0, 6 & Ps) throw Error(oe(327));
    var n2 = e2.callbackNode;
    if (xc() && e2.callbackNode !== n2) return null;
    var r2 = pn(e2, e2 === Ts ? Rs : 0);
    if (0 === r2) return null;
    if (30 & r2 || r2 & e2.expiredLanes || t2) t2 = gc(e2, r2);
    else {
      t2 = r2;
      var a2 = Ps;
      Ps |= 2;
      var o2 = hc();
      for (Ts === e2 && Rs === t2 || ($s = null, Bs = Gt() + 500, fc(e2, t2)); ; ) try {
        yc();
        break;
      } catch (i2) {
        pc(e2, i2);
      }
      _l(), Cs.current = o2, Ps = a2, null !== Ls ? t2 = 0 : (Ts = null, Rs = 0, t2 = Os);
    }
    if (0 !== t2) {
      if (2 === t2 && (0 !== (a2 = mn(e2)) && (r2 = a2, t2 = oc(e2, a2))), 1 === t2) throw n2 = Ds, fc(e2, 0), ic(e2, r2), rc(e2, Gt()), n2;
      if (6 === t2) ic(e2, r2);
      else {
        if (a2 = e2.current.alternate, !(30 & r2 || function(e3) {
          for (var t3 = e3; ; ) {
            if (16384 & t3.flags) {
              var n3 = t3.updateQueue;
              if (null !== n3 && null !== (n3 = n3.stores)) for (var r3 = 0; r3 < n3.length; r3++) {
                var a3 = n3[r3], o3 = a3.getSnapshot;
                a3 = a3.value;
                try {
                  if (!ia(o3(), a3)) return false;
                } catch (l3) {
                  return false;
                }
              }
            }
            if (n3 = t3.child, 16384 & t3.subtreeFlags && null !== n3) n3.return = t3, t3 = n3;
            else {
              if (t3 === e3) break;
              for (; null === t3.sibling; ) {
                if (null === t3.return || t3.return === e3) return true;
                t3 = t3.return;
              }
              t3.sibling.return = t3.return, t3 = t3.sibling;
            }
          }
          return true;
        }(a2) || (t2 = gc(e2, r2), 2 === t2 && (o2 = mn(e2), 0 !== o2 && (r2 = o2, t2 = oc(e2, o2))), 1 !== t2))) throw n2 = Ds, fc(e2, 0), ic(e2, r2), rc(e2, Gt()), n2;
        switch (e2.finishedWork = a2, e2.finishedLanes = r2, t2) {
          case 0:
          case 1:
            throw Error(oe(345));
          case 2:
          case 5:
            kc(e2, Us, $s);
            break;
          case 3:
            if (ic(e2, r2), (130023424 & r2) === r2 && 10 < (t2 = Ws + 500 - Gt())) {
              if (0 !== pn(e2, 0)) break;
              if (((a2 = e2.suspendedLanes) & r2) !== r2) {
                ec(), e2.pingedLanes |= e2.suspendedLanes & a2;
                break;
              }
              e2.timeoutHandle = ro(kc.bind(null, e2, Us, $s), t2);
              break;
            }
            kc(e2, Us, $s);
            break;
          case 4:
            if (ic(e2, r2), (4194240 & r2) === r2) break;
            for (t2 = e2.eventTimes, a2 = -1; 0 < r2; ) {
              var l2 = 31 - ln(r2);
              o2 = 1 << l2, (l2 = t2[l2]) > a2 && (a2 = l2), r2 &= ~o2;
            }
            if (r2 = a2, 10 < (r2 = (120 > (r2 = Gt() - r2) ? 120 : 480 > r2 ? 480 : 1080 > r2 ? 1080 : 1920 > r2 ? 1920 : 3e3 > r2 ? 3e3 : 4320 > r2 ? 4320 : 1960 * Es(r2 / 1960)) - r2)) {
              e2.timeoutHandle = ro(kc.bind(null, e2, Us, $s), r2);
              break;
            }
            kc(e2, Us, $s);
            break;
          default:
            throw Error(oe(329));
        }
      }
    }
    return rc(e2, Gt()), e2.callbackNode === n2 ? ac.bind(null, e2) : null;
  }
  function oc(e2, t2) {
    var n2 = As;
    return e2.current.memoizedState.isDehydrated && (fc(e2, t2).flags |= 256), 2 !== (e2 = gc(e2, t2)) && (t2 = Us, Us = n2, null !== t2 && lc(t2)), e2;
  }
  function lc(e2) {
    null === Us ? Us = e2 : Us.push.apply(Us, e2);
  }
  function ic(e2, t2) {
    for (t2 &= ~Fs, t2 &= ~Is, e2.suspendedLanes |= t2, e2.pingedLanes &= ~t2, e2 = e2.expirationTimes; 0 < t2; ) {
      var n2 = 31 - ln(t2), r2 = 1 << n2;
      e2[n2] = -1, t2 &= ~r2;
    }
  }
  function uc(e2) {
    if (6 & Ps) throw Error(oe(327));
    xc();
    var t2 = pn(e2, 0);
    if (!(1 & t2)) return rc(e2, Gt()), null;
    var n2 = gc(e2, t2);
    if (0 !== e2.tag && 2 === n2) {
      var r2 = mn(e2);
      0 !== r2 && (t2 = r2, n2 = oc(e2, r2));
    }
    if (1 === n2) throw n2 = Ds, fc(e2, 0), ic(e2, t2), rc(e2, Gt()), n2;
    if (6 === n2) throw Error(oe(345));
    return e2.finishedWork = e2.current.alternate, e2.finishedLanes = t2, kc(e2, Us, $s), rc(e2, Gt()), null;
  }
  function sc(e2, t2) {
    var n2 = Ps;
    Ps |= 1;
    try {
      return e2(t2);
    } finally {
      0 === (Ps = n2) && (Bs = Gt() + 500, Uo && $o());
    }
  }
  function cc(e2) {
    null !== Ks && 0 === Ks.tag && !(6 & Ps) && xc();
    var t2 = Ps;
    Ps |= 1;
    var n2 = _s.transition, r2 = wn;
    try {
      if (_s.transition = null, wn = 1, e2) return e2();
    } finally {
      wn = r2, _s.transition = n2, !(6 & (Ps = t2)) && $o();
    }
  }
  function dc() {
    zs = Ms.current, No(Ms);
  }
  function fc(e2, t2) {
    e2.finishedWork = null, e2.finishedLanes = 0;
    var n2 = e2.timeoutHandle;
    if (-1 !== n2 && (e2.timeoutHandle = -1, ao(n2)), null !== Ls) for (n2 = Ls.return; null !== n2; ) {
      var r2 = n2;
      switch (nl(r2), r2.tag) {
        case 1:
          null != (r2 = r2.type.childContextTypes) && Oo();
          break;
        case 3:
          Gl(), No(Lo), No(To), ri();
          break;
        case 5:
          Jl(r2);
          break;
        case 4:
          Gl();
          break;
        case 13:
        case 19:
          No(ei);
          break;
        case 10:
          Pl(r2.type._context);
          break;
        case 22:
        case 23:
          dc();
      }
      n2 = n2.return;
    }
    if (Ts = e2, Ls = e2 = Mc(e2.current, null), Rs = zs = t2, Os = 0, Ds = null, Fs = Is = js = 0, Us = As = null, null !== zl) {
      for (t2 = 0; t2 < zl.length; t2++) if (null !== (r2 = (n2 = zl[t2]).interleaved)) {
        n2.interleaved = null;
        var a2 = r2.next, o2 = n2.pending;
        if (null !== o2) {
          var l2 = o2.next;
          o2.next = a2, r2.next = l2;
        }
        n2.pending = r2;
      }
      zl = null;
    }
    return e2;
  }
  function pc(e2, t2) {
    for (; ; ) {
      var n2 = Ls;
      try {
        if (_l(), ai.current = Zi, ci) {
          for (var r2 = ii.memoizedState; null !== r2; ) {
            var a2 = r2.queue;
            null !== a2 && (a2.pending = null), r2 = r2.next;
          }
          ci = false;
        }
        if (li = 0, si = ui = ii = null, di = false, fi = 0, Ns.current = null, null === n2 || null === n2.return) {
          Os = 1, Ds = t2, Ls = null;
          break;
        }
        e: {
          var o2 = e2, l2 = n2.return, i2 = n2, u2 = t2;
          if (t2 = Rs, i2.flags |= 32768, null !== u2 && "object" == typeof u2 && "function" == typeof u2.then) {
            var s2 = u2, c2 = i2, d2 = c2.tag;
            if (!(1 & c2.mode || 0 !== d2 && 11 !== d2 && 15 !== d2)) {
              var f2 = c2.alternate;
              f2 ? (c2.updateQueue = f2.updateQueue, c2.memoizedState = f2.memoizedState, c2.lanes = f2.lanes) : (c2.updateQueue = null, c2.memoizedState = null);
            }
            var p2 = gu(l2);
            if (null !== p2) {
              p2.flags &= -257, vu(p2, l2, i2, 0, t2), 1 & p2.mode && mu(o2, s2, t2), u2 = s2;
              var h2 = (t2 = p2).updateQueue;
              if (null === h2) {
                var m2 = /* @__PURE__ */ new Set();
                m2.add(u2), t2.updateQueue = m2;
              } else h2.add(u2);
              break e;
            }
            if (!(1 & t2)) {
              mu(o2, s2, t2), mc();
              break e;
            }
            u2 = Error(oe(426));
          } else if (ol && 1 & i2.mode) {
            var g2 = gu(l2);
            if (null !== g2) {
              !(65536 & g2.flags) && (g2.flags |= 256), vu(g2, l2, i2, 0, t2), ml(su(u2, i2));
              break e;
            }
          }
          o2 = u2 = su(u2, i2), 4 !== Os && (Os = 2), null === As ? As = [o2] : As.push(o2), o2 = l2;
          do {
            switch (o2.tag) {
              case 3:
                o2.flags |= 65536, t2 &= -t2, o2.lanes |= t2, Bl(o2, pu(0, u2, t2));
                break e;
              case 1:
                i2 = u2;
                var v2 = o2.type, y2 = o2.stateNode;
                if (!(128 & o2.flags || "function" != typeof v2.getDerivedStateFromError && (null === y2 || "function" != typeof y2.componentDidCatch || null !== Qs && Qs.has(y2)))) {
                  o2.flags |= 65536, t2 &= -t2, o2.lanes |= t2, Bl(o2, hu(o2, i2, t2));
                  break e;
                }
            }
            o2 = o2.return;
          } while (null !== o2);
        }
        wc(n2);
      } catch (b2) {
        t2 = b2, Ls === n2 && null !== n2 && (Ls = n2 = n2.return);
        continue;
      }
      break;
    }
  }
  function hc() {
    var e2 = Cs.current;
    return Cs.current = Zi, null === e2 ? Zi : e2;
  }
  function mc() {
    0 !== Os && 3 !== Os && 2 !== Os || (Os = 4), null === Ts || !(268435455 & js) && !(268435455 & Is) || ic(Ts, Rs);
  }
  function gc(e2, t2) {
    var n2 = Ps;
    Ps |= 2;
    var r2 = hc();
    for (Ts === e2 && Rs === t2 || ($s = null, fc(e2, t2)); ; ) try {
      vc();
      break;
    } catch (a2) {
      pc(e2, a2);
    }
    if (_l(), Ps = n2, Cs.current = r2, null !== Ls) throw Error(oe(261));
    return Ts = null, Rs = 0, Os;
  }
  function vc() {
    for (; null !== Ls; ) bc(Ls);
  }
  function yc() {
    for (; null !== Ls && !Yt(); ) bc(Ls);
  }
  function bc(e2) {
    var t2 = Ss(e2.alternate, e2, zs);
    e2.memoizedProps = e2.pendingProps, null === t2 ? wc(e2) : Ls = t2, Ns.current = null;
  }
  function wc(e2) {
    var t2 = e2;
    do {
      var n2 = t2.alternate;
      if (e2 = t2.return, 32768 & t2.flags) {
        if (null !== (n2 = Ku(n2, t2))) return n2.flags &= 32767, void (Ls = n2);
        if (null === e2) return Os = 6, void (Ls = null);
        e2.flags |= 32768, e2.subtreeFlags = 0, e2.deletions = null;
      } else if (null !== (n2 = qu(n2, t2, zs))) return void (Ls = n2);
      if (null !== (t2 = t2.sibling)) return void (Ls = t2);
      Ls = t2 = e2;
    } while (null !== t2);
    0 === Os && (Os = 5);
  }
  function kc(e2, t2, n2) {
    var r2 = wn, a2 = _s.transition;
    try {
      _s.transition = null, wn = 1, function(e3, t3, n3, r3) {
        do {
          xc();
        } while (null !== Ks);
        if (6 & Ps) throw Error(oe(327));
        n3 = e3.finishedWork;
        var a3 = e3.finishedLanes;
        if (null === n3) return null;
        if (e3.finishedWork = null, e3.finishedLanes = 0, n3 === e3.current) throw Error(oe(177));
        e3.callbackNode = null, e3.callbackPriority = 0;
        var o2 = n3.lanes | n3.childLanes;
        if (function(e4, t4) {
          var n4 = e4.pendingLanes & ~t4;
          e4.pendingLanes = t4, e4.suspendedLanes = 0, e4.pingedLanes = 0, e4.expiredLanes &= t4, e4.mutableReadLanes &= t4, e4.entangledLanes &= t4, t4 = e4.entanglements;
          var r4 = e4.eventTimes;
          for (e4 = e4.expirationTimes; 0 < n4; ) {
            var a4 = 31 - ln(n4), o3 = 1 << a4;
            t4[a4] = 0, r4[a4] = -1, e4[a4] = -1, n4 &= ~o3;
          }
        }(e3, o2), e3 === Ts && (Ls = Ts = null, Rs = 0), !(2064 & n3.subtreeFlags) && !(2064 & n3.flags) || qs || (qs = true, Tc(tn, function() {
          return xc(), null;
        })), o2 = !!(15990 & n3.flags), !!(15990 & n3.subtreeFlags) || o2) {
          o2 = _s.transition, _s.transition = null;
          var l2 = wn;
          wn = 1;
          var i2 = Ps;
          Ps |= 4, Ns.current = null, function(e4, t4) {
            if (eo = Hn, pa(e4 = fa())) {
              if ("selectionStart" in e4) var n4 = { start: e4.selectionStart, end: e4.selectionEnd };
              else e: {
                var r4 = (n4 = (n4 = e4.ownerDocument) && n4.defaultView || window).getSelection && n4.getSelection();
                if (r4 && 0 !== r4.rangeCount) {
                  n4 = r4.anchorNode;
                  var a4 = r4.anchorOffset, o3 = r4.focusNode;
                  r4 = r4.focusOffset;
                  try {
                    n4.nodeType, o3.nodeType;
                  } catch (x2) {
                    n4 = null;
                    break e;
                  }
                  var l3 = 0, i3 = -1, u2 = -1, s2 = 0, c2 = 0, d2 = e4, f2 = null;
                  t: for (; ; ) {
                    for (var p2; d2 !== n4 || 0 !== a4 && 3 !== d2.nodeType || (i3 = l3 + a4), d2 !== o3 || 0 !== r4 && 3 !== d2.nodeType || (u2 = l3 + r4), 3 === d2.nodeType && (l3 += d2.nodeValue.length), null !== (p2 = d2.firstChild); ) f2 = d2, d2 = p2;
                    for (; ; ) {
                      if (d2 === e4) break t;
                      if (f2 === n4 && ++s2 === a4 && (i3 = l3), f2 === o3 && ++c2 === r4 && (u2 = l3), null !== (p2 = d2.nextSibling)) break;
                      f2 = (d2 = f2).parentNode;
                    }
                    d2 = p2;
                  }
                  n4 = -1 === i3 || -1 === u2 ? null : { start: i3, end: u2 };
                } else n4 = null;
              }
              n4 = n4 || { start: 0, end: 0 };
            } else n4 = null;
            for (to = { focusedElem: e4, selectionRange: n4 }, Hn = false, Zu = t4; null !== Zu; ) if (e4 = (t4 = Zu).child, 1028 & t4.subtreeFlags && null !== e4) e4.return = t4, Zu = e4;
            else for (; null !== Zu; ) {
              t4 = Zu;
              try {
                var h2 = t4.alternate;
                if (1024 & t4.flags) switch (t4.tag) {
                  case 0:
                  case 11:
                  case 15:
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  case 1:
                    if (null !== h2) {
                      var m2 = h2.memoizedProps, g2 = h2.memoizedState, v2 = t4.stateNode, y2 = v2.getSnapshotBeforeUpdate(t4.elementType === t4.type ? m2 : nu(t4.type, m2), g2);
                      v2.__reactInternalSnapshotBeforeUpdate = y2;
                    }
                    break;
                  case 3:
                    var b2 = t4.stateNode.containerInfo;
                    1 === b2.nodeType ? b2.textContent = "" : 9 === b2.nodeType && b2.documentElement && b2.removeChild(b2.documentElement);
                    break;
                  default:
                    throw Error(oe(163));
                }
              } catch (x2) {
                Ec(t4, t4.return, x2);
              }
              if (null !== (e4 = t4.sibling)) {
                e4.return = t4.return, Zu = e4;
                break;
              }
              Zu = t4.return;
            }
            h2 = ts, ts = false;
          }(e3, n3), gs(n3, e3), ha(to), Hn = !!eo, to = eo = null, e3.current = n3, ys(n3), Xt(), Ps = i2, wn = l2, _s.transition = o2;
        } else e3.current = n3;
        if (qs && (qs = false, Ks = e3, Ys = a3), o2 = e3.pendingLanes, 0 === o2 && (Qs = null), function(e4) {
          if (on && "function" == typeof on.onCommitFiberRoot) try {
            on.onCommitFiberRoot(an, e4, void 0, !(128 & ~e4.current.flags));
          } catch (t4) {
          }
        }(n3.stateNode), rc(e3, Gt()), null !== t3) for (r3 = e3.onRecoverableError, n3 = 0; n3 < t3.length; n3++) a3 = t3[n3], r3(a3.value, { componentStack: a3.stack, digest: a3.digest });
        if (Vs) throw Vs = false, e3 = Hs, Hs = null, e3;
        !!(1 & Ys) && 0 !== e3.tag && xc(), o2 = e3.pendingLanes, 1 & o2 ? e3 === Gs ? Xs++ : (Xs = 0, Gs = e3) : Xs = 0, $o();
      }(e2, t2, n2, r2);
    } finally {
      _s.transition = a2, wn = r2;
    }
    return null;
  }
  function xc() {
    if (null !== Ks) {
      var e2 = kn(Ys), t2 = _s.transition, n2 = wn;
      try {
        if (_s.transition = null, wn = 16 > e2 ? 16 : e2, null === Ks) var r2 = false;
        else {
          if (e2 = Ks, Ks = null, Ys = 0, 6 & Ps) throw Error(oe(331));
          var a2 = Ps;
          for (Ps |= 4, Zu = e2.current; null !== Zu; ) {
            var o2 = Zu, l2 = o2.child;
            if (16 & Zu.flags) {
              var i2 = o2.deletions;
              if (null !== i2) {
                for (var u2 = 0; u2 < i2.length; u2++) {
                  var s2 = i2[u2];
                  for (Zu = s2; null !== Zu; ) {
                    var c2 = Zu;
                    switch (c2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ns(8, c2, o2);
                    }
                    var d2 = c2.child;
                    if (null !== d2) d2.return = c2, Zu = d2;
                    else for (; null !== Zu; ) {
                      var f2 = (c2 = Zu).sibling, p2 = c2.return;
                      if (os(c2), c2 === s2) {
                        Zu = null;
                        break;
                      }
                      if (null !== f2) {
                        f2.return = p2, Zu = f2;
                        break;
                      }
                      Zu = p2;
                    }
                  }
                }
                var h2 = o2.alternate;
                if (null !== h2) {
                  var m2 = h2.child;
                  if (null !== m2) {
                    h2.child = null;
                    do {
                      var g2 = m2.sibling;
                      m2.sibling = null, m2 = g2;
                    } while (null !== m2);
                  }
                }
                Zu = o2;
              }
            }
            if (2064 & o2.subtreeFlags && null !== l2) l2.return = o2, Zu = l2;
            else e: for (; null !== Zu; ) {
              if (2048 & (o2 = Zu).flags) switch (o2.tag) {
                case 0:
                case 11:
                case 15:
                  ns(9, o2, o2.return);
              }
              var v2 = o2.sibling;
              if (null !== v2) {
                v2.return = o2.return, Zu = v2;
                break e;
              }
              Zu = o2.return;
            }
          }
          var y2 = e2.current;
          for (Zu = y2; null !== Zu; ) {
            var b2 = (l2 = Zu).child;
            if (2064 & l2.subtreeFlags && null !== b2) b2.return = l2, Zu = b2;
            else e: for (l2 = y2; null !== Zu; ) {
              if (2048 & (i2 = Zu).flags) try {
                switch (i2.tag) {
                  case 0:
                  case 11:
                  case 15:
                    rs(9, i2);
                }
              } catch (k2) {
                Ec(i2, i2.return, k2);
              }
              if (i2 === l2) {
                Zu = null;
                break e;
              }
              var w2 = i2.sibling;
              if (null !== w2) {
                w2.return = i2.return, Zu = w2;
                break e;
              }
              Zu = i2.return;
            }
          }
          if (Ps = a2, $o(), on && "function" == typeof on.onPostCommitFiberRoot) try {
            on.onPostCommitFiberRoot(an, e2);
          } catch (k2) {
          }
          r2 = true;
        }
        return r2;
      } finally {
        wn = n2, _s.transition = t2;
      }
    }
    return false;
  }
  function Sc(e2, t2, n2) {
    e2 = Ul(e2, t2 = pu(0, t2 = su(n2, t2), 1), 1), t2 = ec(), null !== e2 && (yn(e2, 1, t2), rc(e2, t2));
  }
  function Ec(e2, t2, n2) {
    if (3 === e2.tag) Sc(e2, e2, n2);
    else for (; null !== t2; ) {
      if (3 === t2.tag) {
        Sc(t2, e2, n2);
        break;
      }
      if (1 === t2.tag) {
        var r2 = t2.stateNode;
        if ("function" == typeof t2.type.getDerivedStateFromError || "function" == typeof r2.componentDidCatch && (null === Qs || !Qs.has(r2))) {
          t2 = Ul(t2, e2 = hu(t2, e2 = su(n2, e2), 1), 1), e2 = ec(), null !== t2 && (yn(t2, 1, e2), rc(t2, e2));
          break;
        }
      }
      t2 = t2.return;
    }
  }
  function Cc(e2, t2, n2) {
    var r2 = e2.pingCache;
    null !== r2 && r2.delete(t2), t2 = ec(), e2.pingedLanes |= e2.suspendedLanes & n2, Ts === e2 && (Rs & n2) === n2 && (4 === Os || 3 === Os && (130023424 & Rs) === Rs && 500 > Gt() - Ws ? fc(e2, 0) : Fs |= n2), rc(e2, t2);
  }
  function Nc(e2, t2) {
    0 === t2 && (1 & e2.mode ? (t2 = dn, !(130023424 & (dn <<= 1)) && (dn = 4194304)) : t2 = 1);
    var n2 = ec();
    null !== (e2 = Dl(e2, t2)) && (yn(e2, t2, n2), rc(e2, n2));
  }
  function _c(e2) {
    var t2 = e2.memoizedState, n2 = 0;
    null !== t2 && (n2 = t2.retryLane), Nc(e2, n2);
  }
  function Pc(e2, t2) {
    var n2 = 0;
    switch (e2.tag) {
      case 13:
        var r2 = e2.stateNode, a2 = e2.memoizedState;
        null !== a2 && (n2 = a2.retryLane);
        break;
      case 19:
        r2 = e2.stateNode;
        break;
      default:
        throw Error(oe(314));
    }
    null !== r2 && r2.delete(t2), Nc(e2, n2);
  }
  function Tc(e2, t2) {
    return qt(e2, t2);
  }
  function Lc(e2, t2, n2, r2) {
    this.tag = e2, this.key = n2, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t2, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r2, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Rc(e2, t2, n2, r2) {
    return new Lc(e2, t2, n2, r2);
  }
  function zc(e2) {
    return !(!(e2 = e2.prototype) || !e2.isReactComponent);
  }
  function Mc(e2, t2) {
    var n2 = e2.alternate;
    return null === n2 ? ((n2 = Rc(e2.tag, t2, e2.key, e2.mode)).elementType = e2.elementType, n2.type = e2.type, n2.stateNode = e2.stateNode, n2.alternate = e2, e2.alternate = n2) : (n2.pendingProps = t2, n2.type = e2.type, n2.flags = 0, n2.subtreeFlags = 0, n2.deletions = null), n2.flags = 14680064 & e2.flags, n2.childLanes = e2.childLanes, n2.lanes = e2.lanes, n2.child = e2.child, n2.memoizedProps = e2.memoizedProps, n2.memoizedState = e2.memoizedState, n2.updateQueue = e2.updateQueue, t2 = e2.dependencies, n2.dependencies = null === t2 ? null : { lanes: t2.lanes, firstContext: t2.firstContext }, n2.sibling = e2.sibling, n2.index = e2.index, n2.ref = e2.ref, n2;
  }
  function Oc(e2, t2, n2, r2, a2, o2) {
    var l2 = 2;
    if (r2 = e2, "function" == typeof e2) zc(e2) && (l2 = 1);
    else if ("string" == typeof e2) l2 = 5;
    else e: switch (e2) {
      case Se:
        return Dc(n2.children, a2, o2, t2);
      case Ee:
        l2 = 8, a2 |= 8;
        break;
      case Ce:
        return (e2 = Rc(12, n2, t2, 2 | a2)).elementType = Ce, e2.lanes = o2, e2;
      case Te:
        return (e2 = Rc(13, n2, t2, a2)).elementType = Te, e2.lanes = o2, e2;
      case Le:
        return (e2 = Rc(19, n2, t2, a2)).elementType = Le, e2.lanes = o2, e2;
      case Me:
        return jc(n2, a2, o2, t2);
      default:
        if ("object" == typeof e2 && null !== e2) switch (e2.$$typeof) {
          case Ne:
            l2 = 10;
            break e;
          case _e:
            l2 = 9;
            break e;
          case Pe:
            l2 = 11;
            break e;
          case Re:
            l2 = 14;
            break e;
          case ze:
            l2 = 16, r2 = null;
            break e;
        }
        throw Error(oe(130, null == e2 ? e2 : typeof e2, ""));
    }
    return (t2 = Rc(l2, n2, t2, a2)).elementType = e2, t2.type = r2, t2.lanes = o2, t2;
  }
  function Dc(e2, t2, n2, r2) {
    return (e2 = Rc(7, e2, r2, t2)).lanes = n2, e2;
  }
  function jc(e2, t2, n2, r2) {
    return (e2 = Rc(22, e2, r2, t2)).elementType = Me, e2.lanes = n2, e2.stateNode = { isHidden: false }, e2;
  }
  function Ic(e2, t2, n2) {
    return (e2 = Rc(6, e2, null, t2)).lanes = n2, e2;
  }
  function Fc(e2, t2, n2) {
    return (t2 = Rc(4, null !== e2.children ? e2.children : [], e2.key, t2)).lanes = n2, t2.stateNode = { containerInfo: e2.containerInfo, pendingChildren: null, implementation: e2.implementation }, t2;
  }
  function Ac(e2, t2, n2, r2, a2) {
    this.tag = t2, this.containerInfo = e2, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vn(0), this.expirationTimes = vn(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vn(0), this.identifierPrefix = r2, this.onRecoverableError = a2, this.mutableSourceEagerHydrationData = null;
  }
  function Uc(e2, t2, n2, r2, a2, o2, l2, i2, u2) {
    return e2 = new Ac(e2, t2, n2, i2, u2), 1 === t2 ? (t2 = 1, true === o2 && (t2 |= 8)) : t2 = 0, o2 = Rc(3, null, null, t2), e2.current = o2, o2.stateNode = e2, o2.memoizedState = { element: r2, isDehydrated: n2, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Il(o2), e2;
  }
  function Wc(e2) {
    if (!e2) return Po;
    e: {
      if (Bt(e2 = e2._reactInternals) !== e2 || 1 !== e2.tag) throw Error(oe(170));
      var t2 = e2;
      do {
        switch (t2.tag) {
          case 3:
            t2 = t2.stateNode.context;
            break e;
          case 1:
            if (Mo(t2.type)) {
              t2 = t2.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t2 = t2.return;
      } while (null !== t2);
      throw Error(oe(171));
    }
    if (1 === e2.tag) {
      var n2 = e2.type;
      if (Mo(n2)) return jo(e2, n2, t2);
    }
    return t2;
  }
  function Bc(e2, t2, n2, r2, a2, o2, l2, i2, u2) {
    return (e2 = Uc(n2, r2, true, e2, 0, o2, 0, i2, u2)).context = Wc(null), n2 = e2.current, (o2 = Al(r2 = ec(), a2 = tc(n2))).callback = null != t2 ? t2 : null, Ul(n2, o2, a2), e2.current.lanes = a2, yn(e2, a2, r2), rc(e2, r2), e2;
  }
  function $c(e2, t2, n2, r2) {
    var a2 = t2.current, o2 = ec(), l2 = tc(a2);
    return n2 = Wc(n2), null === t2.context ? t2.context = n2 : t2.pendingContext = n2, (t2 = Al(o2, l2)).payload = { element: e2 }, null !== (r2 = void 0 === r2 ? null : r2) && (t2.callback = r2), null !== (e2 = Ul(a2, t2, l2)) && (nc(e2, a2, l2, o2), Wl(e2, a2, l2)), l2;
  }
  function Vc(e2) {
    return (e2 = e2.current).child ? (e2.child.tag, e2.child.stateNode) : null;
  }
  function Hc(e2, t2) {
    if (null !== (e2 = e2.memoizedState) && null !== e2.dehydrated) {
      var n2 = e2.retryLane;
      e2.retryLane = 0 !== n2 && n2 < t2 ? n2 : t2;
    }
  }
  function Qc(e2, t2) {
    Hc(e2, t2), (e2 = e2.alternate) && Hc(e2, t2);
  }
  Ss = function(e2, t2, n2) {
    if (null !== e2) if (e2.memoizedProps !== t2.pendingProps || Lo.current) bu = true;
    else {
      if (!(e2.lanes & n2 || 128 & t2.flags)) return bu = false, function(e3, t3, n3) {
        switch (t3.tag) {
          case 3:
            Tu(t3), hl();
            break;
          case 5:
            Zl(t3);
            break;
          case 1:
            Mo(t3.type) && Io(t3);
            break;
          case 4:
            Xl(t3, t3.stateNode.containerInfo);
            break;
          case 10:
            var r3 = t3.type._context, a3 = t3.memoizedProps.value;
            _o(Sl, r3._currentValue), r3._currentValue = a3;
            break;
          case 13:
            if (null !== (r3 = t3.memoizedState)) return null !== r3.dehydrated ? (_o(ei, 1 & ei.current), t3.flags |= 128, null) : n3 & t3.child.childLanes ? Iu(e3, t3, n3) : (_o(ei, 1 & ei.current), null !== (e3 = Vu(e3, t3, n3)) ? e3.sibling : null);
            _o(ei, 1 & ei.current);
            break;
          case 19:
            if (r3 = !!(n3 & t3.childLanes), 128 & e3.flags) {
              if (r3) return Bu(e3, t3, n3);
              t3.flags |= 128;
            }
            if (null !== (a3 = t3.memoizedState) && (a3.rendering = null, a3.tail = null, a3.lastEffect = null), _o(ei, ei.current), r3) break;
            return null;
          case 22:
          case 23:
            return t3.lanes = 0, Eu(e3, t3, n3);
        }
        return Vu(e3, t3, n3);
      }(e2, t2, n2);
      bu = !!(131072 & e2.flags);
    }
    else bu = false, ol && 1048576 & t2.flags && el(t2, qo, t2.index);
    switch (t2.lanes = 0, t2.tag) {
      case 2:
        var r2 = t2.type;
        $u(e2, t2), e2 = t2.pendingProps;
        var a2 = zo(t2, To.current);
        Ll(t2, n2), a2 = gi(null, t2, r2, e2, a2, n2);
        var o2 = vi();
        return t2.flags |= 1, "object" == typeof a2 && null !== a2 && "function" == typeof a2.render && void 0 === a2.$$typeof ? (t2.tag = 1, t2.memoizedState = null, t2.updateQueue = null, Mo(r2) ? (o2 = true, Io(t2)) : o2 = false, t2.memoizedState = null !== a2.state && void 0 !== a2.state ? a2.state : null, Il(t2), a2.updater = au, t2.stateNode = a2, a2._reactInternals = t2, uu(t2, r2, e2, n2), t2 = Pu(null, t2, r2, true, o2, n2)) : (t2.tag = 0, ol && o2 && tl(t2), wu(null, t2, a2, n2), t2 = t2.child), t2;
      case 16:
        r2 = t2.elementType;
        e: {
          switch ($u(e2, t2), e2 = t2.pendingProps, r2 = (a2 = r2._init)(r2._payload), t2.type = r2, a2 = t2.tag = function(e3) {
            if ("function" == typeof e3) return zc(e3) ? 1 : 0;
            if (null != e3) {
              if ((e3 = e3.$$typeof) === Pe) return 11;
              if (e3 === Re) return 14;
            }
            return 2;
          }(r2), e2 = nu(r2, e2), a2) {
            case 0:
              t2 = Nu(null, t2, r2, e2, n2);
              break e;
            case 1:
              t2 = _u(null, t2, r2, e2, n2);
              break e;
            case 11:
              t2 = ku(null, t2, r2, e2, n2);
              break e;
            case 14:
              t2 = xu(null, t2, r2, nu(r2.type, e2), n2);
              break e;
          }
          throw Error(oe(306, r2, ""));
        }
        return t2;
      case 0:
        return r2 = t2.type, a2 = t2.pendingProps, Nu(e2, t2, r2, a2 = t2.elementType === r2 ? a2 : nu(r2, a2), n2);
      case 1:
        return r2 = t2.type, a2 = t2.pendingProps, _u(e2, t2, r2, a2 = t2.elementType === r2 ? a2 : nu(r2, a2), n2);
      case 3:
        e: {
          if (Tu(t2), null === e2) throw Error(oe(387));
          r2 = t2.pendingProps, a2 = (o2 = t2.memoizedState).element, Fl(e2, t2), $l(t2, r2, null, n2);
          var l2 = t2.memoizedState;
          if (r2 = l2.element, o2.isDehydrated) {
            if (o2 = { element: r2, isDehydrated: false, cache: l2.cache, pendingSuspenseBoundaries: l2.pendingSuspenseBoundaries, transitions: l2.transitions }, t2.updateQueue.baseState = o2, t2.memoizedState = o2, 256 & t2.flags) {
              t2 = Lu(e2, t2, r2, n2, a2 = su(Error(oe(423)), t2));
              break e;
            }
            if (r2 !== a2) {
              t2 = Lu(e2, t2, r2, n2, a2 = su(Error(oe(424)), t2));
              break e;
            }
            for (al = so(t2.stateNode.containerInfo.firstChild), rl = t2, ol = true, ll = null, n2 = xl(t2, null, r2, n2), t2.child = n2; n2; ) n2.flags = -3 & n2.flags | 4096, n2 = n2.sibling;
          } else {
            if (hl(), r2 === a2) {
              t2 = Vu(e2, t2, n2);
              break e;
            }
            wu(e2, t2, r2, n2);
          }
          t2 = t2.child;
        }
        return t2;
      case 5:
        return Zl(t2), null === e2 && cl(t2), r2 = t2.type, a2 = t2.pendingProps, o2 = null !== e2 ? e2.memoizedProps : null, l2 = a2.children, no(r2, a2) ? l2 = null : null !== o2 && no(r2, o2) && (t2.flags |= 32), Cu(e2, t2), wu(e2, t2, l2, n2), t2.child;
      case 6:
        return null === e2 && cl(t2), null;
      case 13:
        return Iu(e2, t2, n2);
      case 4:
        return Xl(t2, t2.stateNode.containerInfo), r2 = t2.pendingProps, null === e2 ? t2.child = kl(t2, null, r2, n2) : wu(e2, t2, r2, n2), t2.child;
      case 11:
        return r2 = t2.type, a2 = t2.pendingProps, ku(e2, t2, r2, a2 = t2.elementType === r2 ? a2 : nu(r2, a2), n2);
      case 7:
        return wu(e2, t2, t2.pendingProps, n2), t2.child;
      case 8:
      case 12:
        return wu(e2, t2, t2.pendingProps.children, n2), t2.child;
      case 10:
        e: {
          if (r2 = t2.type._context, a2 = t2.pendingProps, o2 = t2.memoizedProps, l2 = a2.value, _o(Sl, r2._currentValue), r2._currentValue = l2, null !== o2) if (ia(o2.value, l2)) {
            if (o2.children === a2.children && !Lo.current) {
              t2 = Vu(e2, t2, n2);
              break e;
            }
          } else for (null !== (o2 = t2.child) && (o2.return = t2); null !== o2; ) {
            var i2 = o2.dependencies;
            if (null !== i2) {
              l2 = o2.child;
              for (var u2 = i2.firstContext; null !== u2; ) {
                if (u2.context === r2) {
                  if (1 === o2.tag) {
                    (u2 = Al(-1, n2 & -n2)).tag = 2;
                    var s2 = o2.updateQueue;
                    if (null !== s2) {
                      var c2 = (s2 = s2.shared).pending;
                      null === c2 ? u2.next = u2 : (u2.next = c2.next, c2.next = u2), s2.pending = u2;
                    }
                  }
                  o2.lanes |= n2, null !== (u2 = o2.alternate) && (u2.lanes |= n2), Tl(o2.return, n2, t2), i2.lanes |= n2;
                  break;
                }
                u2 = u2.next;
              }
            } else if (10 === o2.tag) l2 = o2.type === t2.type ? null : o2.child;
            else if (18 === o2.tag) {
              if (null === (l2 = o2.return)) throw Error(oe(341));
              l2.lanes |= n2, null !== (i2 = l2.alternate) && (i2.lanes |= n2), Tl(l2, n2, t2), l2 = o2.sibling;
            } else l2 = o2.child;
            if (null !== l2) l2.return = o2;
            else for (l2 = o2; null !== l2; ) {
              if (l2 === t2) {
                l2 = null;
                break;
              }
              if (null !== (o2 = l2.sibling)) {
                o2.return = l2.return, l2 = o2;
                break;
              }
              l2 = l2.return;
            }
            o2 = l2;
          }
          wu(e2, t2, a2.children, n2), t2 = t2.child;
        }
        return t2;
      case 9:
        return a2 = t2.type, r2 = t2.pendingProps.children, Ll(t2, n2), r2 = r2(a2 = Rl(a2)), t2.flags |= 1, wu(e2, t2, r2, n2), t2.child;
      case 14:
        return a2 = nu(r2 = t2.type, t2.pendingProps), xu(e2, t2, r2, a2 = nu(r2.type, a2), n2);
      case 15:
        return Su(e2, t2, t2.type, t2.pendingProps, n2);
      case 17:
        return r2 = t2.type, a2 = t2.pendingProps, a2 = t2.elementType === r2 ? a2 : nu(r2, a2), $u(e2, t2), t2.tag = 1, Mo(r2) ? (e2 = true, Io(t2)) : e2 = false, Ll(t2, n2), lu(t2, r2, a2), uu(t2, r2, a2, n2), Pu(null, t2, r2, true, e2, n2);
      case 19:
        return Bu(e2, t2, n2);
      case 22:
        return Eu(e2, t2, n2);
    }
    throw Error(oe(156, t2.tag));
  };
  var qc = "function" == typeof reportError ? reportError : function(e2) {
    console.error(e2);
  };
  function Kc(e2) {
    this._internalRoot = e2;
  }
  function Yc(e2) {
    this._internalRoot = e2;
  }
  function Xc(e2) {
    return !(!e2 || 1 !== e2.nodeType && 9 !== e2.nodeType && 11 !== e2.nodeType);
  }
  function Gc(e2) {
    return !(!e2 || 1 !== e2.nodeType && 9 !== e2.nodeType && 11 !== e2.nodeType && (8 !== e2.nodeType || " react-mount-point-unstable " !== e2.nodeValue));
  }
  function Zc() {
  }
  function Jc(e2, t2, n2, r2, a2) {
    var o2 = n2._reactRootContainer;
    if (o2) {
      var l2 = o2;
      if ("function" == typeof a2) {
        var i2 = a2;
        a2 = function() {
          var e3 = Vc(l2);
          i2.call(e3);
        };
      }
      $c(t2, l2, e2, a2);
    } else l2 = function(e3, t3, n3, r3, a3) {
      if (a3) {
        if ("function" == typeof r3) {
          var o3 = r3;
          r3 = function() {
            var e4 = Vc(l3);
            o3.call(e4);
          };
        }
        var l3 = Bc(t3, r3, e3, 0, null, false, 0, "", Zc);
        return e3._reactRootContainer = l3, e3[mo] = l3.current, Ba(8 === e3.nodeType ? e3.parentNode : e3), cc(), l3;
      }
      for (; a3 = e3.lastChild; ) e3.removeChild(a3);
      if ("function" == typeof r3) {
        var i3 = r3;
        r3 = function() {
          var e4 = Vc(u2);
          i3.call(e4);
        };
      }
      var u2 = Uc(e3, 0, false, null, 0, false, 0, "", Zc);
      return e3._reactRootContainer = u2, e3[mo] = u2.current, Ba(8 === e3.nodeType ? e3.parentNode : e3), cc(function() {
        $c(t3, u2, n3, r3);
      }), u2;
    }(n2, t2, e2, a2, r2);
    return Vc(l2);
  }
  Yc.prototype.render = Kc.prototype.render = function(e2) {
    var t2 = this._internalRoot;
    if (null === t2) throw Error(oe(409));
    $c(e2, t2, null, null);
  }, Yc.prototype.unmount = Kc.prototype.unmount = function() {
    var e2 = this._internalRoot;
    if (null !== e2) {
      this._internalRoot = null;
      var t2 = e2.containerInfo;
      cc(function() {
        $c(null, e2, null, null);
      }), t2[mo] = null;
    }
  }, Yc.prototype.unstable_scheduleHydration = function(e2) {
    if (e2) {
      var t2 = Cn();
      e2 = { blockedOn: null, target: e2, priority: t2 };
      for (var n2 = 0; n2 < On.length && 0 !== t2 && t2 < On[n2].priority; n2++) ;
      On.splice(n2, 0, e2), 0 === n2 && Fn(e2);
    }
  }, xn = function(e2) {
    switch (e2.tag) {
      case 3:
        var t2 = e2.stateNode;
        if (t2.current.memoizedState.isDehydrated) {
          var n2 = fn(t2.pendingLanes);
          0 !== n2 && (bn(t2, 1 | n2), rc(t2, Gt()), !(6 & Ps) && (Bs = Gt() + 500, $o()));
        }
        break;
      case 13:
        cc(function() {
          var t3 = Dl(e2, 1);
          if (null !== t3) {
            var n3 = ec();
            nc(t3, e2, 1, n3);
          }
        }), Qc(e2, 1);
    }
  }, Sn = function(e2) {
    if (13 === e2.tag) {
      var t2 = Dl(e2, 134217728);
      if (null !== t2) nc(t2, e2, 134217728, ec());
      Qc(e2, 134217728);
    }
  }, En = function(e2) {
    if (13 === e2.tag) {
      var t2 = tc(e2), n2 = Dl(e2, t2);
      if (null !== n2) nc(n2, e2, t2, ec());
      Qc(e2, t2);
    }
  }, Cn = function() {
    return wn;
  }, Nn = function(e2, t2) {
    var n2 = wn;
    try {
      return wn = e2, t2();
    } finally {
      wn = n2;
    }
  }, xt = function(e2, t2, n2) {
    switch (t2) {
      case "input":
        if (Ze(e2, n2), t2 = n2.name, "radio" === n2.type && null != t2) {
          for (n2 = e2; n2.parentNode; ) n2 = n2.parentNode;
          for (n2 = n2.querySelectorAll("input[name=" + JSON.stringify("" + t2) + '][type="radio"]'), t2 = 0; t2 < n2.length; t2++) {
            var r2 = n2[t2];
            if (r2 !== e2 && r2.form === e2.form) {
              var a2 = xo(r2);
              if (!a2) throw Error(oe(90));
              qe(r2), Ze(r2, a2);
            }
          }
        }
        break;
      case "textarea":
        ot(e2, n2);
        break;
      case "select":
        null != (t2 = n2.value) && nt(e2, !!n2.multiple, t2, false);
    }
  }, Pt = sc, Tt = cc;
  var ed = { usingClientEntryPoint: false, Events: [wo, ko, xo, Nt, _t, sc] }, td = { findFiberByHostInstance: bo, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, nd = { bundleType: td.bundleType, version: td.version, rendererPackageName: td.rendererPackageName, rendererConfig: td.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: we.ReactCurrentDispatcher, findHostInstanceByFiber: function(e2) {
    return null === (e2 = Ht(e2)) ? null : e2.stateNode;
  }, findFiberByHostInstance: td.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var rd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!rd.isDisabled && rd.supportsFiber) try {
      an = rd.inject(nd), on = rd;
    } catch (ct2) {
    }
  }
  J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ed, J.createPortal = function(e2, t2) {
    var n2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!Xc(t2)) throw Error(oe(200));
    return function(e3, t3, n3) {
      var r2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: xe, key: null == r2 ? null : "" + r2, children: e3, containerInfo: t3, implementation: n3 };
    }(e2, t2, null, n2);
  }, J.createRoot = function(e2, t2) {
    if (!Xc(e2)) throw Error(oe(299));
    var n2 = false, r2 = "", a2 = qc;
    return null != t2 && (true === t2.unstable_strictMode && (n2 = true), void 0 !== t2.identifierPrefix && (r2 = t2.identifierPrefix), void 0 !== t2.onRecoverableError && (a2 = t2.onRecoverableError)), t2 = Uc(e2, 1, false, null, 0, n2, 0, r2, a2), e2[mo] = t2.current, Ba(8 === e2.nodeType ? e2.parentNode : e2), new Kc(t2);
  }, J.findDOMNode = function(e2) {
    if (null == e2) return null;
    if (1 === e2.nodeType) return e2;
    var t2 = e2._reactInternals;
    if (void 0 === t2) {
      if ("function" == typeof e2.render) throw Error(oe(188));
      throw e2 = Object.keys(e2).join(","), Error(oe(268, e2));
    }
    return e2 = null === (e2 = Ht(t2)) ? null : e2.stateNode;
  }, J.flushSync = function(e2) {
    return cc(e2);
  }, J.hydrate = function(e2, t2, n2) {
    if (!Gc(t2)) throw Error(oe(200));
    return Jc(null, e2, t2, true, n2);
  }, J.hydrateRoot = function(e2, t2, n2) {
    if (!Xc(e2)) throw Error(oe(405));
    var r2 = null != n2 && n2.hydratedSources || null, a2 = false, o2 = "", l2 = qc;
    if (null != n2 && (true === n2.unstable_strictMode && (a2 = true), void 0 !== n2.identifierPrefix && (o2 = n2.identifierPrefix), void 0 !== n2.onRecoverableError && (l2 = n2.onRecoverableError)), t2 = Bc(t2, null, e2, 1, null != n2 ? n2 : null, a2, 0, o2, l2), e2[mo] = t2.current, Ba(e2), r2) for (e2 = 0; e2 < r2.length; e2++) a2 = (a2 = (n2 = r2[e2])._getVersion)(n2._source), null == t2.mutableSourceEagerHydrationData ? t2.mutableSourceEagerHydrationData = [n2, a2] : t2.mutableSourceEagerHydrationData.push(n2, a2);
    return new Yc(t2);
  }, J.render = function(e2, t2, n2) {
    if (!Gc(t2)) throw Error(oe(200));
    return Jc(null, e2, t2, false, n2);
  }, J.unmountComponentAtNode = function(e2) {
    if (!Gc(e2)) throw Error(oe(40));
    return !!e2._reactRootContainer && (cc(function() {
      Jc(null, null, e2, false, function() {
        e2._reactRootContainer = null, e2[mo] = null;
      });
    }), true);
  }, J.unstable_batchedUpdates = sc, J.unstable_renderSubtreeIntoContainer = function(e2, t2, n2, r2) {
    if (!Gc(n2)) throw Error(oe(200));
    if (null == e2 || void 0 === e2._reactInternals) throw Error(oe(38));
    return Jc(e2, t2, n2, false, r2);
  }, J.version = "18.3.1-next-f1338f8080-20240426", function e2() {
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e2);
    } catch (t2) {
      console.error(t2);
    }
  }(), Z.exports = J;
  var ad = Z.exports;
  const od = t(ad);
  var ld = ad;
  G.createRoot = ld.createRoot, G.hydrateRoot = ld.hydrateRoot;
  var id = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  const ud = (e2, t2) => {
    const n2 = U.forwardRef(({ color: n3 = "currentColor", size: r2 = 24, strokeWidth: a2 = 2, absoluteStrokeWidth: o2, className: l2 = "", children: i2, ...u2 }, s2) => {
      return U.createElement("svg", { ref: s2, ...id, width: r2, height: r2, stroke: n3, strokeWidth: o2 ? 24 * Number(a2) / Number(r2) : a2, className: ["lucide", `lucide-${c2 = e2, c2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()}`, l2].join(" "), ...u2 }, [...t2.map(([e3, t3]) => U.createElement(e3, t3)), ...Array.isArray(i2) ? i2 : [i2]]);
      var c2;
    });
    return n2.displayName = `${e2}`, n2;
  }, sd = ud("Plus", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]]), cd = ud("Search", [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]]), dd = ud("Settings", [["path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z", key: "1qme2f" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]]), fd = ud("Trash2", [["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }], ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }], ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }], ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]]), pd = ud("X", [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]]);
  function hd(e2, t2, { checkForDefaultPrevented: n2 = true } = {}) {
    return function(r2) {
      if (e2 == null ? void 0 : e2(r2), false === n2 || !r2.defaultPrevented) return t2 == null ? void 0 : t2(r2);
    };
  }
  function md(e2, t2) {
    if ("function" == typeof e2) return e2(t2);
    null != e2 && (e2.current = t2);
  }
  function gd(...e2) {
    return (t2) => {
      let n2 = false;
      const r2 = e2.map((e3) => {
        const r3 = md(e3, t2);
        return n2 || "function" != typeof r3 || (n2 = true), r3;
      });
      if (n2) return () => {
        for (let t3 = 0; t3 < r2.length; t3++) {
          const n3 = r2[t3];
          "function" == typeof n3 ? n3() : md(e2[t3], null);
        }
      };
    };
  }
  function vd(...e2) {
    return U.useCallback(gd(...e2), e2);
  }
  function yd(e2, t2 = []) {
    let n2 = [];
    const r2 = () => {
      const t3 = n2.map((e3) => U.createContext(e3));
      return function(n3) {
        const r3 = (n3 == null ? void 0 : n3[e2]) || t3;
        return U.useMemo(() => ({ [`__scope${e2}`]: { ...n3, [e2]: r3 } }), [n3, r3]);
      };
    };
    return r2.scopeName = e2, [function(t3, r3) {
      const a2 = U.createContext(r3), o2 = n2.length;
      n2 = [...n2, r3];
      const l2 = (t4) => {
        var _a2;
        const { scope: n3, children: r4, ...l3 } = t4, i2 = ((_a2 = n3 == null ? void 0 : n3[e2]) == null ? void 0 : _a2[o2]) || a2, u2 = U.useMemo(() => l3, Object.values(l3));
        return X.jsx(i2.Provider, { value: u2, children: r4 });
      };
      return l2.displayName = t3 + "Provider", [l2, function(n3, l3) {
        var _a2;
        const i2 = ((_a2 = l3 == null ? void 0 : l3[e2]) == null ? void 0 : _a2[o2]) || a2, u2 = U.useContext(i2);
        if (u2) return u2;
        if (void 0 !== r3) return r3;
        throw new Error(`\`${n3}\` must be used within \`${t3}\``);
      }];
    }, bd(r2, ...t2)];
  }
  function bd(...e2) {
    const t2 = e2[0];
    if (1 === e2.length) return t2;
    const n2 = () => {
      const n3 = e2.map((e3) => ({ useScope: e3(), scopeName: e3.scopeName }));
      return function(e3) {
        const r2 = n3.reduce((t3, { useScope: n4, scopeName: r3 }) => ({ ...t3, ...n4(e3)[`__scope${r3}`] }), {});
        return U.useMemo(() => ({ [`__scope${t2.scopeName}`]: r2 }), [r2]);
      };
    };
    return n2.scopeName = t2.scopeName, n2;
  }
  var wd = Boolean(globalThis == null ? void 0 : globalThis.document) ? U.useLayoutEffect : () => {
  }, kd = B["useId".toString()] || (() => {
  }), xd = 0;
  function Sd(e2) {
    const [t2, n2] = U.useState(kd());
    return wd(() => {
      e2 || n2((e3) => e3 ?? String(xd++));
    }, [e2]), e2 || (t2 ? `radix-${t2}` : "");
  }
  function Ed(e2) {
    const t2 = U.useRef(e2);
    return U.useEffect(() => {
      t2.current = e2;
    }), U.useMemo(() => (...e3) => {
      var _a2;
      return (_a2 = t2.current) == null ? void 0 : _a2.call(t2, ...e3);
    }, []);
  }
  function Cd({ prop: e2, defaultProp: t2, onChange: n2 = () => {
  } }) {
    const [r2, a2] = function({ defaultProp: e3, onChange: t3 }) {
      const n3 = U.useState(e3), [r3] = n3, a3 = U.useRef(r3), o3 = Ed(t3);
      return U.useEffect(() => {
        a3.current !== r3 && (o3(r3), a3.current = r3);
      }, [r3, a3, o3]), n3;
    }({ defaultProp: t2, onChange: n2 }), o2 = void 0 !== e2, l2 = o2 ? e2 : r2, i2 = Ed(n2);
    return [l2, U.useCallback((t3) => {
      if (o2) {
        const n3 = "function" == typeof t3 ? t3(e2) : t3;
        n3 !== e2 && i2(n3);
      } else a2(t3);
    }, [o2, e2, a2, i2])];
  }
  var Nd = U.forwardRef((e2, t2) => {
    const { children: n2, ...r2 } = e2, a2 = U.Children.toArray(n2), o2 = a2.find(Td);
    if (o2) {
      const e3 = o2.props.children, n3 = a2.map((t3) => t3 === o2 ? U.Children.count(e3) > 1 ? U.Children.only(null) : U.isValidElement(e3) ? e3.props.children : null : t3);
      return X.jsx(_d, { ...r2, ref: t2, children: U.isValidElement(e3) ? U.cloneElement(e3, void 0, n3) : null });
    }
    return X.jsx(_d, { ...r2, ref: t2, children: n2 });
  });
  Nd.displayName = "Slot";
  var _d = U.forwardRef((e2, t2) => {
    const { children: n2, ...r2 } = e2;
    if (U.isValidElement(n2)) {
      const e3 = function(e4) {
        var _a2, _b;
        let t3 = (_a2 = Object.getOwnPropertyDescriptor(e4.props, "ref")) == null ? void 0 : _a2.get, n3 = t3 && "isReactWarning" in t3 && t3.isReactWarning;
        if (n3) return e4.ref;
        if (t3 = (_b = Object.getOwnPropertyDescriptor(e4, "ref")) == null ? void 0 : _b.get, n3 = t3 && "isReactWarning" in t3 && t3.isReactWarning, n3) return e4.props.ref;
        return e4.props.ref || e4.ref;
      }(n2);
      return U.cloneElement(n2, { ...Ld(r2, n2.props), ref: t2 ? gd(t2, e3) : e3 });
    }
    return U.Children.count(n2) > 1 ? U.Children.only(null) : null;
  });
  _d.displayName = "SlotClone";
  var Pd = ({ children: e2 }) => X.jsx(X.Fragment, { children: e2 });
  function Td(e2) {
    return U.isValidElement(e2) && e2.type === Pd;
  }
  function Ld(e2, t2) {
    const n2 = { ...t2 };
    for (const r2 in t2) {
      const a2 = e2[r2], o2 = t2[r2];
      /^on[A-Z]/.test(r2) ? a2 && o2 ? n2[r2] = (...e3) => {
        o2(...e3), a2(...e3);
      } : a2 && (n2[r2] = a2) : "style" === r2 ? n2[r2] = { ...a2, ...o2 } : "className" === r2 && (n2[r2] = [a2, o2].filter(Boolean).join(" "));
    }
    return { ...e2, ...n2 };
  }
  var Rd = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e2, t2) => {
    const n2 = U.forwardRef((e3, n3) => {
      const { asChild: r2, ...a2 } = e3, o2 = r2 ? Nd : t2;
      return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = true), X.jsx(o2, { ...a2, ref: n3 });
    });
    return n2.displayName = `Primitive.${t2}`, { ...e2, [t2]: n2 };
  }, {});
  var zd, Md = "dismissableLayer.update", Od = "dismissableLayer.pointerDownOutside", Dd = "dismissableLayer.focusOutside", jd = U.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), Id = U.forwardRef((e2, t2) => {
    const { disableOutsidePointerEvents: n2 = false, onEscapeKeyDown: r2, onPointerDownOutside: a2, onFocusOutside: o2, onInteractOutside: l2, onDismiss: i2, ...u2 } = e2, s2 = U.useContext(jd), [c2, d2] = U.useState(null), f2 = (c2 == null ? void 0 : c2.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p2] = U.useState({}), h2 = vd(t2, (e3) => d2(e3)), m2 = Array.from(s2.layers), [g2] = [...s2.layersWithOutsidePointerEventsDisabled].slice(-1), v2 = m2.indexOf(g2), y2 = c2 ? m2.indexOf(c2) : -1, b2 = s2.layersWithOutsidePointerEventsDisabled.size > 0, w2 = y2 >= v2, k2 = function(e3, t3 = globalThis == null ? void 0 : globalThis.document) {
      const n3 = Ed(e3), r3 = U.useRef(false), a3 = U.useRef(() => {
      });
      return U.useEffect(() => {
        const e4 = (e5) => {
          if (e5.target && !r3.current) {
            let r4 = function() {
              Ad(Od, n3, o4, { discrete: true });
            };
            const o4 = { originalEvent: e5 };
            "touch" === e5.pointerType ? (t3.removeEventListener("click", a3.current), a3.current = r4, t3.addEventListener("click", a3.current, { once: true })) : r4();
          } else t3.removeEventListener("click", a3.current);
          r3.current = false;
        }, o3 = window.setTimeout(() => {
          t3.addEventListener("pointerdown", e4);
        }, 0);
        return () => {
          window.clearTimeout(o3), t3.removeEventListener("pointerdown", e4), t3.removeEventListener("click", a3.current);
        };
      }, [t3, n3]), { onPointerDownCapture: () => r3.current = true };
    }((e3) => {
      const t3 = e3.target, n3 = [...s2.branches].some((e4) => e4.contains(t3));
      w2 && !n3 && (a2 == null ? void 0 : a2(e3), l2 == null ? void 0 : l2(e3), e3.defaultPrevented || (i2 == null ? void 0 : i2()));
    }, f2), x2 = function(e3, t3 = globalThis == null ? void 0 : globalThis.document) {
      const n3 = Ed(e3), r3 = U.useRef(false);
      return U.useEffect(() => {
        const e4 = (e5) => {
          if (e5.target && !r3.current) {
            Ad(Dd, n3, { originalEvent: e5 }, { discrete: false });
          }
        };
        return t3.addEventListener("focusin", e4), () => t3.removeEventListener("focusin", e4);
      }, [t3, n3]), { onFocusCapture: () => r3.current = true, onBlurCapture: () => r3.current = false };
    }((e3) => {
      const t3 = e3.target;
      [...s2.branches].some((e4) => e4.contains(t3)) || (o2 == null ? void 0 : o2(e3), l2 == null ? void 0 : l2(e3), e3.defaultPrevented || (i2 == null ? void 0 : i2()));
    }, f2);
    return function(e3, t3 = globalThis == null ? void 0 : globalThis.document) {
      const n3 = Ed(e3);
      U.useEffect(() => {
        const e4 = (e5) => {
          "Escape" === e5.key && n3(e5);
        };
        return t3.addEventListener("keydown", e4, { capture: true }), () => t3.removeEventListener("keydown", e4, { capture: true });
      }, [n3, t3]);
    }((e3) => {
      y2 === s2.layers.size - 1 && (r2 == null ? void 0 : r2(e3), !e3.defaultPrevented && i2 && (e3.preventDefault(), i2()));
    }, f2), U.useEffect(() => {
      if (c2) return n2 && (0 === s2.layersWithOutsidePointerEventsDisabled.size && (zd = f2.body.style.pointerEvents, f2.body.style.pointerEvents = "none"), s2.layersWithOutsidePointerEventsDisabled.add(c2)), s2.layers.add(c2), Fd(), () => {
        n2 && 1 === s2.layersWithOutsidePointerEventsDisabled.size && (f2.body.style.pointerEvents = zd);
      };
    }, [c2, f2, n2, s2]), U.useEffect(() => () => {
      c2 && (s2.layers.delete(c2), s2.layersWithOutsidePointerEventsDisabled.delete(c2), Fd());
    }, [c2, s2]), U.useEffect(() => {
      const e3 = () => p2({});
      return document.addEventListener(Md, e3), () => document.removeEventListener(Md, e3);
    }, []), X.jsx(Rd.div, { ...u2, ref: h2, style: { pointerEvents: b2 ? w2 ? "auto" : "none" : void 0, ...e2.style }, onFocusCapture: hd(e2.onFocusCapture, x2.onFocusCapture), onBlurCapture: hd(e2.onBlurCapture, x2.onBlurCapture), onPointerDownCapture: hd(e2.onPointerDownCapture, k2.onPointerDownCapture) });
  });
  Id.displayName = "DismissableLayer";
  function Fd() {
    const e2 = new CustomEvent(Md);
    document.dispatchEvent(e2);
  }
  function Ad(e2, t2, n2, { discrete: r2 }) {
    const a2 = n2.originalEvent.target, o2 = new CustomEvent(e2, { bubbles: false, cancelable: true, detail: n2 });
    t2 && a2.addEventListener(e2, t2, { once: true }), r2 ? function(e3, t3) {
      e3 && ad.flushSync(() => e3.dispatchEvent(t3));
    }(a2, o2) : a2.dispatchEvent(o2);
  }
  U.forwardRef((e2, t2) => {
    const n2 = U.useContext(jd), r2 = U.useRef(null), a2 = vd(t2, r2);
    return U.useEffect(() => {
      const e3 = r2.current;
      if (e3) return n2.branches.add(e3), () => {
        n2.branches.delete(e3);
      };
    }, [n2.branches]), X.jsx(Rd.div, { ...e2, ref: a2 });
  }).displayName = "DismissableLayerBranch";
  var Ud = "focusScope.autoFocusOnMount", Wd = "focusScope.autoFocusOnUnmount", Bd = { bubbles: false, cancelable: true }, $d = U.forwardRef((e2, t2) => {
    const { loop: n2 = false, trapped: r2 = false, onMountAutoFocus: a2, onUnmountAutoFocus: o2, ...l2 } = e2, [i2, u2] = U.useState(null), s2 = Ed(a2), c2 = Ed(o2), d2 = U.useRef(null), f2 = vd(t2, (e3) => u2(e3)), p2 = U.useRef({ paused: false, pause() {
      this.paused = true;
    }, resume() {
      this.paused = false;
    } }).current;
    U.useEffect(() => {
      if (r2) {
        let e3 = function(e4) {
          if (p2.paused || !i2) return;
          const t4 = e4.target;
          i2.contains(t4) ? d2.current = t4 : qd(d2.current, { select: true });
        }, t3 = function(e4) {
          if (p2.paused || !i2) return;
          const t4 = e4.relatedTarget;
          null !== t4 && (i2.contains(t4) || qd(d2.current, { select: true }));
        }, n3 = function(e4) {
          if (document.activeElement === document.body) for (const t4 of e4) t4.removedNodes.length > 0 && qd(i2);
        };
        document.addEventListener("focusin", e3), document.addEventListener("focusout", t3);
        const r3 = new MutationObserver(n3);
        return i2 && r3.observe(i2, { childList: true, subtree: true }), () => {
          document.removeEventListener("focusin", e3), document.removeEventListener("focusout", t3), r3.disconnect();
        };
      }
    }, [r2, i2, p2.paused]), U.useEffect(() => {
      if (i2) {
        Kd.add(p2);
        const t3 = document.activeElement;
        if (!i2.contains(t3)) {
          const n3 = new CustomEvent(Ud, Bd);
          i2.addEventListener(Ud, s2), i2.dispatchEvent(n3), n3.defaultPrevented || (!function(e4, { select: t4 = false } = {}) {
            const n4 = document.activeElement;
            for (const r3 of e4) if (qd(r3, { select: t4 }), document.activeElement !== n4) return;
          }((e3 = Vd(i2), e3.filter((e4) => "A" !== e4.tagName)), { select: true }), document.activeElement === t3 && qd(i2));
        }
        return () => {
          i2.removeEventListener(Ud, s2), setTimeout(() => {
            const e4 = new CustomEvent(Wd, Bd);
            i2.addEventListener(Wd, c2), i2.dispatchEvent(e4), e4.defaultPrevented || qd(t3 ?? document.body, { select: true }), i2.removeEventListener(Wd, c2), Kd.remove(p2);
          }, 0);
        };
      }
      var e3;
    }, [i2, s2, c2, p2]);
    const h2 = U.useCallback((e3) => {
      if (!n2 && !r2) return;
      if (p2.paused) return;
      const t3 = "Tab" === e3.key && !e3.altKey && !e3.ctrlKey && !e3.metaKey, a3 = document.activeElement;
      if (t3 && a3) {
        const t4 = e3.currentTarget, [r3, o3] = function(e4) {
          const t5 = Vd(e4), n3 = Hd(t5, e4), r4 = Hd(t5.reverse(), e4);
          return [n3, r4];
        }(t4);
        r3 && o3 ? e3.shiftKey || a3 !== o3 ? e3.shiftKey && a3 === r3 && (e3.preventDefault(), n2 && qd(o3, { select: true })) : (e3.preventDefault(), n2 && qd(r3, { select: true })) : a3 === t4 && e3.preventDefault();
      }
    }, [n2, r2, p2.paused]);
    return X.jsx(Rd.div, { tabIndex: -1, ...l2, ref: f2, onKeyDown: h2 });
  });
  function Vd(e2) {
    const t2 = [], n2 = document.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, { acceptNode: (e3) => {
      const t3 = "INPUT" === e3.tagName && "hidden" === e3.type;
      return e3.disabled || e3.hidden || t3 ? NodeFilter.FILTER_SKIP : e3.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    } });
    for (; n2.nextNode(); ) t2.push(n2.currentNode);
    return t2;
  }
  function Hd(e2, t2) {
    for (const n2 of e2) if (!Qd(n2, { upTo: t2 })) return n2;
  }
  function Qd(e2, { upTo: t2 }) {
    if ("hidden" === getComputedStyle(e2).visibility) return true;
    for (; e2; ) {
      if (void 0 !== t2 && e2 === t2) return false;
      if ("none" === getComputedStyle(e2).display) return true;
      e2 = e2.parentElement;
    }
    return false;
  }
  function qd(e2, { select: t2 = false } = {}) {
    if (e2 && e2.focus) {
      const n2 = document.activeElement;
      e2.focus({ preventScroll: true }), e2 !== n2 && function(e3) {
        return e3 instanceof HTMLInputElement && "select" in e3;
      }(e2) && t2 && e2.select();
    }
  }
  $d.displayName = "FocusScope";
  var Kd = /* @__PURE__ */ function() {
    let e2 = [];
    return { add(t2) {
      const n2 = e2[0];
      t2 !== n2 && (n2 == null ? void 0 : n2.pause()), e2 = Yd(e2, t2), e2.unshift(t2);
    }, remove(t2) {
      var _a2;
      e2 = Yd(e2, t2), (_a2 = e2[0]) == null ? void 0 : _a2.resume();
    } };
  }();
  function Yd(e2, t2) {
    const n2 = [...e2], r2 = n2.indexOf(t2);
    return -1 !== r2 && n2.splice(r2, 1), n2;
  }
  var Xd = U.forwardRef((e2, t2) => {
    var _a2;
    const { container: n2, ...r2 } = e2, [a2, o2] = U.useState(false);
    wd(() => o2(true), []);
    const l2 = n2 || a2 && ((_a2 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a2.body);
    return l2 ? od.createPortal(X.jsx(Rd.div, { ...r2, ref: t2 }), l2) : null;
  });
  Xd.displayName = "Portal";
  var Gd = (e2) => {
    const { present: t2, children: n2 } = e2, r2 = function(e3) {
      const [t3, n3] = U.useState(), r3 = U.useRef({}), a3 = U.useRef(e3), o3 = U.useRef("none"), l2 = e3 ? "mounted" : "unmounted", [i2, u2] = function(e4, t4) {
        return U.useReducer((e5, n4) => t4[e5][n4] ?? e5, e4);
      }(l2, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
      return U.useEffect(() => {
        const e4 = Zd(r3.current);
        o3.current = "mounted" === i2 ? e4 : "none";
      }, [i2]), wd(() => {
        const t4 = r3.current, n4 = a3.current;
        if (n4 !== e3) {
          const r4 = o3.current, l3 = Zd(t4);
          if (e3) u2("MOUNT");
          else if ("none" === l3 || "none" === (t4 == null ? void 0 : t4.display)) u2("UNMOUNT");
          else {
            u2(n4 && r4 !== l3 ? "ANIMATION_OUT" : "UNMOUNT");
          }
          a3.current = e3;
        }
      }, [e3, u2]), wd(() => {
        if (t3) {
          let e4;
          const n4 = t3.ownerDocument.defaultView ?? window, l3 = (o4) => {
            const l4 = Zd(r3.current).includes(o4.animationName);
            if (o4.target === t3 && l4 && (u2("ANIMATION_END"), !a3.current)) {
              const r4 = t3.style.animationFillMode;
              t3.style.animationFillMode = "forwards", e4 = n4.setTimeout(() => {
                "forwards" === t3.style.animationFillMode && (t3.style.animationFillMode = r4);
              });
            }
          }, i3 = (e5) => {
            e5.target === t3 && (o3.current = Zd(r3.current));
          };
          return t3.addEventListener("animationstart", i3), t3.addEventListener("animationcancel", l3), t3.addEventListener("animationend", l3), () => {
            n4.clearTimeout(e4), t3.removeEventListener("animationstart", i3), t3.removeEventListener("animationcancel", l3), t3.removeEventListener("animationend", l3);
          };
        }
        u2("ANIMATION_END");
      }, [t3, u2]), { isPresent: ["mounted", "unmountSuspended"].includes(i2), ref: U.useCallback((e4) => {
        e4 && (r3.current = getComputedStyle(e4)), n3(e4);
      }, []) };
    }(t2), a2 = "function" == typeof n2 ? n2({ present: r2.isPresent }) : U.Children.only(n2), o2 = vd(r2.ref, function(e3) {
      var _a2, _b;
      let t3 = (_a2 = Object.getOwnPropertyDescriptor(e3.props, "ref")) == null ? void 0 : _a2.get, n3 = t3 && "isReactWarning" in t3 && t3.isReactWarning;
      if (n3) return e3.ref;
      if (t3 = (_b = Object.getOwnPropertyDescriptor(e3, "ref")) == null ? void 0 : _b.get, n3 = t3 && "isReactWarning" in t3 && t3.isReactWarning, n3) return e3.props.ref;
      return e3.props.ref || e3.ref;
    }(a2));
    return "function" == typeof n2 || r2.isPresent ? U.cloneElement(a2, { ref: o2 }) : null;
  };
  function Zd(e2) {
    return (e2 == null ? void 0 : e2.animationName) || "none";
  }
  Gd.displayName = "Presence";
  var Jd = 0;
  function ef() {
    const e2 = document.createElement("span");
    return e2.setAttribute("data-radix-focus-guard", ""), e2.tabIndex = 0, e2.style.outline = "none", e2.style.opacity = "0", e2.style.position = "fixed", e2.style.pointerEvents = "none", e2;
  }
  var tf = function() {
    return tf = Object.assign || function(e2) {
      for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++) for (var a2 in t2 = arguments[n2]) Object.prototype.hasOwnProperty.call(t2, a2) && (e2[a2] = t2[a2]);
      return e2;
    }, tf.apply(this, arguments);
  };
  function nf(e2, t2) {
    var n2 = {};
    for (var r2 in e2) Object.prototype.hasOwnProperty.call(e2, r2) && t2.indexOf(r2) < 0 && (n2[r2] = e2[r2]);
    if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) {
      var a2 = 0;
      for (r2 = Object.getOwnPropertySymbols(e2); a2 < r2.length; a2++) t2.indexOf(r2[a2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r2[a2]) && (n2[r2[a2]] = e2[r2[a2]]);
    }
    return n2;
  }
  "function" == typeof SuppressedError && SuppressedError;
  var rf = "right-scroll-bar-position", af = "width-before-scroll-bar";
  function of(e2, t2) {
    return "function" == typeof e2 ? e2(t2) : e2 && (e2.current = t2), e2;
  }
  var lf = "undefined" != typeof window ? U.useLayoutEffect : U.useEffect, uf = /* @__PURE__ */ new WeakMap();
  function sf(e2, t2) {
    var n2, r2, a2, o2 = (n2 = null, r2 = function(t3) {
      return e2.forEach(function(e3) {
        return of(e3, t3);
      });
    }, (a2 = U.useState(function() {
      return { value: n2, callback: r2, facade: { get current() {
        return a2.value;
      }, set current(e3) {
        var t3 = a2.value;
        t3 !== e3 && (a2.value = e3, a2.callback(e3, t3));
      } } };
    })[0]).callback = r2, a2.facade);
    return lf(function() {
      var t3 = uf.get(o2);
      if (t3) {
        var n3 = new Set(t3), r3 = new Set(e2), a3 = o2.current;
        n3.forEach(function(e3) {
          r3.has(e3) || of(e3, null);
        }), r3.forEach(function(e3) {
          n3.has(e3) || of(e3, a3);
        });
      }
      uf.set(o2, e2);
    }, [e2]), o2;
  }
  function cf(e2) {
    return e2;
  }
  var df = function(e2) {
    var t2 = e2.sideCar, n2 = nf(e2, ["sideCar"]);
    if (!t2) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r2 = t2.read();
    if (!r2) throw new Error("Sidecar medium not found");
    return U.createElement(r2, tf({}, n2));
  };
  df.isSideCarExport = true;
  var ff = function(e2) {
    void 0 === e2 && (e2 = {});
    var t2 = function(e3, t3) {
      void 0 === t3 && (t3 = cf);
      var n2 = [], r2 = false, a2 = { read: function() {
        if (r2) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        return n2.length ? n2[n2.length - 1] : e3;
      }, useMedium: function(e4) {
        var a3 = t3(e4, r2);
        return n2.push(a3), function() {
          n2 = n2.filter(function(e5) {
            return e5 !== a3;
          });
        };
      }, assignSyncMedium: function(e4) {
        for (r2 = true; n2.length; ) {
          var t4 = n2;
          n2 = [], t4.forEach(e4);
        }
        n2 = { push: function(t5) {
          return e4(t5);
        }, filter: function() {
          return n2;
        } };
      }, assignMedium: function(e4) {
        r2 = true;
        var t4 = [];
        if (n2.length) {
          var a3 = n2;
          n2 = [], a3.forEach(e4), t4 = n2;
        }
        var o2 = function() {
          var n3 = t4;
          t4 = [], n3.forEach(e4);
        }, l2 = function() {
          return Promise.resolve().then(o2);
        };
        l2(), n2 = { push: function(e5) {
          t4.push(e5), l2();
        }, filter: function(e5) {
          return t4 = t4.filter(e5), n2;
        } };
      } };
      return a2;
    }(null);
    return t2.options = tf({ async: true, ssr: false }, e2), t2;
  }(), pf = function() {
  }, hf = U.forwardRef(function(e2, t2) {
    var n2 = U.useRef(null), r2 = U.useState({ onScrollCapture: pf, onWheelCapture: pf, onTouchMoveCapture: pf }), a2 = r2[0], o2 = r2[1], l2 = e2.forwardProps, i2 = e2.children, u2 = e2.className, s2 = e2.removeScrollBar, c2 = e2.enabled, d2 = e2.shards, f2 = e2.sideCar, p2 = e2.noIsolation, h2 = e2.inert, m2 = e2.allowPinchZoom, g2 = e2.as, v2 = void 0 === g2 ? "div" : g2, y2 = e2.gapMode, b2 = nf(e2, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w2 = f2, k2 = sf([n2, t2]), x2 = tf(tf({}, b2), a2);
    return U.createElement(U.Fragment, null, c2 && U.createElement(w2, { sideCar: ff, removeScrollBar: s2, shards: d2, noIsolation: p2, inert: h2, setCallbacks: o2, allowPinchZoom: !!m2, lockRef: n2, gapMode: y2 }), l2 ? U.cloneElement(U.Children.only(i2), tf(tf({}, x2), { ref: k2 })) : U.createElement(v2, tf({}, x2, { className: u2, ref: k2 }), i2));
  });
  hf.defaultProps = { enabled: true, removeScrollBar: true, inert: false }, hf.classNames = { fullWidth: af, zeroRight: rf };
  function mf() {
    if (!document) return null;
    var e2 = document.createElement("style");
    e2.type = "text/css";
    var t2 = function() {
      if ("undefined" != typeof __webpack_nonce__) return __webpack_nonce__;
    }();
    return t2 && e2.setAttribute("nonce", t2), e2;
  }
  var gf = function() {
    var e2 = 0, t2 = null;
    return { add: function(n2) {
      var r2, a2;
      0 == e2 && (t2 = mf()) && (a2 = n2, (r2 = t2).styleSheet ? r2.styleSheet.cssText = a2 : r2.appendChild(document.createTextNode(a2)), function(e3) {
        (document.head || document.getElementsByTagName("head")[0]).appendChild(e3);
      }(t2)), e2++;
    }, remove: function() {
      !--e2 && t2 && (t2.parentNode && t2.parentNode.removeChild(t2), t2 = null);
    } };
  }, vf = function() {
    var e2, t2 = (e2 = gf(), function(t3, n2) {
      U.useEffect(function() {
        return e2.add(t3), function() {
          e2.remove();
        };
      }, [t3 && n2]);
    });
    return function(e3) {
      var n2 = e3.styles, r2 = e3.dynamic;
      return t2(n2, r2), null;
    };
  }, yf = { left: 0, top: 0, right: 0, gap: 0 }, bf = function(e2) {
    return parseInt(e2 || "", 10) || 0;
  }, wf = function(e2) {
    if (void 0 === e2 && (e2 = "margin"), "undefined" == typeof window) return yf;
    var t2 = function(e3) {
      var t3 = window.getComputedStyle(document.body), n3 = t3["padding" === e3 ? "paddingLeft" : "marginLeft"], r3 = t3["padding" === e3 ? "paddingTop" : "marginTop"], a2 = t3["padding" === e3 ? "paddingRight" : "marginRight"];
      return [bf(n3), bf(r3), bf(a2)];
    }(e2), n2 = document.documentElement.clientWidth, r2 = window.innerWidth;
    return { left: t2[0], top: t2[1], right: t2[2], gap: Math.max(0, r2 - n2 + t2[2] - t2[0]) };
  }, kf = vf(), xf = "data-scroll-locked", Sf = function(e2, t2, n2, r2) {
    var a2 = e2.left, o2 = e2.top, l2 = e2.right, i2 = e2.gap;
    return void 0 === n2 && (n2 = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r2, ";\n   padding-right: ").concat(i2, "px ").concat(r2, ";\n  }\n  body[").concat(xf, "] {\n    overflow: hidden ").concat(r2, ";\n    overscroll-behavior: contain;\n    ").concat([t2 && "position: relative ".concat(r2, ";"), "margin" === n2 && "\n    padding-left: ".concat(a2, "px;\n    padding-top: ").concat(o2, "px;\n    padding-right: ").concat(l2, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i2, "px ").concat(r2, ";\n    "), "padding" === n2 && "padding-right: ".concat(i2, "px ").concat(r2, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(rf, " {\n    right: ").concat(i2, "px ").concat(r2, ";\n  }\n  \n  .").concat(af, " {\n    margin-right: ").concat(i2, "px ").concat(r2, ";\n  }\n  \n  .").concat(rf, " .").concat(rf, " {\n    right: 0 ").concat(r2, ";\n  }\n  \n  .").concat(af, " .").concat(af, " {\n    margin-right: 0 ").concat(r2, ";\n  }\n  \n  body[").concat(xf, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(i2, "px;\n  }\n");
  }, Ef = function() {
    var e2 = parseInt(document.body.getAttribute(xf) || "0", 10);
    return isFinite(e2) ? e2 : 0;
  }, Cf = function(e2) {
    var t2 = e2.noRelative, n2 = e2.noImportant, r2 = e2.gapMode, a2 = void 0 === r2 ? "margin" : r2;
    U.useEffect(function() {
      return document.body.setAttribute(xf, (Ef() + 1).toString()), function() {
        var e3 = Ef() - 1;
        e3 <= 0 ? document.body.removeAttribute(xf) : document.body.setAttribute(xf, e3.toString());
      };
    }, []);
    var o2 = U.useMemo(function() {
      return wf(a2);
    }, [a2]);
    return U.createElement(kf, { styles: Sf(o2, !t2, a2, n2 ? "" : "!important") });
  }, Nf = false;
  if ("undefined" != typeof window) try {
    var _f = Object.defineProperty({}, "passive", { get: function() {
      return Nf = true, true;
    } });
    window.addEventListener("test", _f, _f), window.removeEventListener("test", _f, _f);
  } catch (Yp) {
    Nf = false;
  }
  var Pf = !!Nf && { passive: false }, Tf = function(e2, t2) {
    if (!(e2 instanceof Element)) return false;
    var n2 = window.getComputedStyle(e2);
    return "hidden" !== n2[t2] && !(n2.overflowY === n2.overflowX && !function(e3) {
      return "TEXTAREA" === e3.tagName;
    }(e2) && "visible" === n2[t2]);
  }, Lf = function(e2, t2) {
    var n2 = t2.ownerDocument, r2 = t2;
    do {
      if ("undefined" != typeof ShadowRoot && r2 instanceof ShadowRoot && (r2 = r2.host), Rf(e2, r2)) {
        var a2 = zf(e2, r2);
        if (a2[1] > a2[2]) return true;
      }
      r2 = r2.parentNode;
    } while (r2 && r2 !== n2.body);
    return false;
  }, Rf = function(e2, t2) {
    return "v" === e2 ? function(e3) {
      return Tf(e3, "overflowY");
    }(t2) : function(e3) {
      return Tf(e3, "overflowX");
    }(t2);
  }, zf = function(e2, t2) {
    return "v" === e2 ? [(n2 = t2).scrollTop, n2.scrollHeight, n2.clientHeight] : function(e3) {
      return [e3.scrollLeft, e3.scrollWidth, e3.clientWidth];
    }(t2);
    var n2;
  }, Mf = function(e2) {
    return "changedTouches" in e2 ? [e2.changedTouches[0].clientX, e2.changedTouches[0].clientY] : [0, 0];
  }, Of = function(e2) {
    return [e2.deltaX, e2.deltaY];
  }, Df = function(e2) {
    return e2 && "current" in e2 ? e2.current : e2;
  }, jf = function(e2) {
    return "\n  .block-interactivity-".concat(e2, " {pointer-events: none;}\n  .allow-interactivity-").concat(e2, " {pointer-events: all;}\n");
  }, If = 0, Ff = [];
  function Af(e2) {
    for (var t2 = null; null !== e2; ) e2 instanceof ShadowRoot && (t2 = e2.host, e2 = e2.host), e2 = e2.parentNode;
    return t2;
  }
  const Uf = (Wf = function(e2) {
    var t2 = U.useRef([]), n2 = U.useRef([0, 0]), r2 = U.useRef(), a2 = U.useState(If++)[0], o2 = U.useState(vf)[0], l2 = U.useRef(e2);
    U.useEffect(function() {
      l2.current = e2;
    }, [e2]), U.useEffect(function() {
      if (e2.inert) {
        document.body.classList.add("block-interactivity-".concat(a2));
        var t3 = function(e3, t4, n3) {
          for (var r3, a3 = 0, o3 = t4.length; a3 < o3; a3++) !r3 && a3 in t4 || (r3 || (r3 = Array.prototype.slice.call(t4, 0, a3)), r3[a3] = t4[a3]);
          return e3.concat(r3 || Array.prototype.slice.call(t4));
        }([e2.lockRef.current], (e2.shards || []).map(Df)).filter(Boolean);
        return t3.forEach(function(e3) {
          return e3.classList.add("allow-interactivity-".concat(a2));
        }), function() {
          document.body.classList.remove("block-interactivity-".concat(a2)), t3.forEach(function(e3) {
            return e3.classList.remove("allow-interactivity-".concat(a2));
          });
        };
      }
    }, [e2.inert, e2.lockRef.current, e2.shards]);
    var i2 = U.useCallback(function(e3, t3) {
      if ("touches" in e3 && 2 === e3.touches.length || "wheel" === e3.type && e3.ctrlKey) return !l2.current.allowPinchZoom;
      var a3, o3 = Mf(e3), i3 = n2.current, u3 = "deltaX" in e3 ? e3.deltaX : i3[0] - o3[0], s3 = "deltaY" in e3 ? e3.deltaY : i3[1] - o3[1], c3 = e3.target, d3 = Math.abs(u3) > Math.abs(s3) ? "h" : "v";
      if ("touches" in e3 && "h" === d3 && "range" === c3.type) return false;
      var f3 = Lf(d3, c3);
      if (!f3) return true;
      if (f3 ? a3 = d3 : (a3 = "v" === d3 ? "h" : "v", f3 = Lf(d3, c3)), !f3) return false;
      if (!r2.current && "changedTouches" in e3 && (u3 || s3) && (r2.current = a3), !a3) return true;
      var p3 = r2.current || a3;
      return function(e4, t4, n3, r3) {
        var a4 = /* @__PURE__ */ function(e5, t5) {
          return "h" === e5 && "rtl" === t5 ? -1 : 1;
        }(e4, window.getComputedStyle(t4).direction), o4 = a4 * r3, l3 = n3.target, i4 = t4.contains(l3), u4 = false, s4 = o4 > 0, c4 = 0, d4 = 0;
        do {
          var f4 = zf(e4, l3), p4 = f4[0], h3 = f4[1] - f4[2] - a4 * p4;
          (p4 || h3) && Rf(e4, l3) && (c4 += h3, d4 += p4), l3 = l3 instanceof ShadowRoot ? l3.host : l3.parentNode;
        } while (!i4 && l3 !== document.body || i4 && (t4.contains(l3) || t4 === l3));
        return (s4 && Math.abs(c4) < 1 || !s4 && Math.abs(d4) < 1) && (u4 = true), u4;
      }(p3, t3, e3, "h" === p3 ? u3 : s3);
    }, []), u2 = U.useCallback(function(e3) {
      var n3 = e3;
      if (Ff.length && Ff[Ff.length - 1] === o2) {
        var r3 = "deltaY" in n3 ? Of(n3) : Mf(n3), a3 = t2.current.filter(function(e4) {
          return e4.name === n3.type && (e4.target === n3.target || n3.target === e4.shadowParent) && function(e5, t3) {
            return e5[0] === t3[0] && e5[1] === t3[1];
          }(e4.delta, r3);
        })[0];
        if (a3 && a3.should) n3.cancelable && n3.preventDefault();
        else if (!a3) {
          var u3 = (l2.current.shards || []).map(Df).filter(Boolean).filter(function(e4) {
            return e4.contains(n3.target);
          });
          (u3.length > 0 ? i2(n3, u3[0]) : !l2.current.noIsolation) && n3.cancelable && n3.preventDefault();
        }
      }
    }, []), s2 = U.useCallback(function(e3, n3, r3, a3) {
      var o3 = { name: e3, delta: n3, target: r3, should: a3, shadowParent: Af(r3) };
      t2.current.push(o3), setTimeout(function() {
        t2.current = t2.current.filter(function(e4) {
          return e4 !== o3;
        });
      }, 1);
    }, []), c2 = U.useCallback(function(e3) {
      n2.current = Mf(e3), r2.current = void 0;
    }, []), d2 = U.useCallback(function(t3) {
      s2(t3.type, Of(t3), t3.target, i2(t3, e2.lockRef.current));
    }, []), f2 = U.useCallback(function(t3) {
      s2(t3.type, Mf(t3), t3.target, i2(t3, e2.lockRef.current));
    }, []);
    U.useEffect(function() {
      return Ff.push(o2), e2.setCallbacks({ onScrollCapture: d2, onWheelCapture: d2, onTouchMoveCapture: f2 }), document.addEventListener("wheel", u2, Pf), document.addEventListener("touchmove", u2, Pf), document.addEventListener("touchstart", c2, Pf), function() {
        Ff = Ff.filter(function(e3) {
          return e3 !== o2;
        }), document.removeEventListener("wheel", u2, Pf), document.removeEventListener("touchmove", u2, Pf), document.removeEventListener("touchstart", c2, Pf);
      };
    }, []);
    var p2 = e2.removeScrollBar, h2 = e2.inert;
    return U.createElement(U.Fragment, null, h2 ? U.createElement(o2, { styles: jf(a2) }) : null, p2 ? U.createElement(Cf, { gapMode: e2.gapMode }) : null);
  }, ff.useMedium(Wf), df);
  var Wf, Bf = U.forwardRef(function(e2, t2) {
    return U.createElement(hf, tf({}, e2, { ref: t2, sideCar: Uf }));
  });
  Bf.classNames = hf.classNames;
  var $f = /* @__PURE__ */ new WeakMap(), Vf = /* @__PURE__ */ new WeakMap(), Hf = {}, Qf = 0, qf = function(e2) {
    return e2 && (e2.host || qf(e2.parentNode));
  }, Kf = function(e2, t2, n2, r2) {
    var a2 = function(e3, t3) {
      return t3.map(function(t4) {
        if (e3.contains(t4)) return t4;
        var n3 = qf(t4);
        return n3 && e3.contains(n3) ? n3 : (console.error("aria-hidden", t4, "in not contained inside", e3, ". Doing nothing"), null);
      }).filter(function(e4) {
        return Boolean(e4);
      });
    }(t2, Array.isArray(e2) ? e2 : [e2]);
    Hf[n2] || (Hf[n2] = /* @__PURE__ */ new WeakMap());
    var o2 = Hf[n2], l2 = [], i2 = /* @__PURE__ */ new Set(), u2 = new Set(a2), s2 = function(e3) {
      e3 && !i2.has(e3) && (i2.add(e3), s2(e3.parentNode));
    };
    a2.forEach(s2);
    var c2 = function(e3) {
      e3 && !u2.has(e3) && Array.prototype.forEach.call(e3.children, function(e4) {
        if (i2.has(e4)) c2(e4);
        else try {
          var t3 = e4.getAttribute(r2), a3 = null !== t3 && "false" !== t3, u3 = ($f.get(e4) || 0) + 1, s3 = (o2.get(e4) || 0) + 1;
          $f.set(e4, u3), o2.set(e4, s3), l2.push(e4), 1 === u3 && a3 && Vf.set(e4, true), 1 === s3 && e4.setAttribute(n2, "true"), a3 || e4.setAttribute(r2, "true");
        } catch (d2) {
          console.error("aria-hidden: cannot operate on ", e4, d2);
        }
      });
    };
    return c2(t2), i2.clear(), Qf++, function() {
      l2.forEach(function(e3) {
        var t3 = $f.get(e3) - 1, a3 = o2.get(e3) - 1;
        $f.set(e3, t3), o2.set(e3, a3), t3 || (Vf.has(e3) || e3.removeAttribute(r2), Vf.delete(e3)), a3 || e3.removeAttribute(n2);
      }), --Qf || ($f = /* @__PURE__ */ new WeakMap(), $f = /* @__PURE__ */ new WeakMap(), Vf = /* @__PURE__ */ new WeakMap(), Hf = {});
    };
  }, Yf = function(e2, t2, n2) {
    void 0 === n2 && (n2 = "data-aria-hidden");
    var r2 = Array.from(Array.isArray(e2) ? e2 : [e2]), a2 = function(e3) {
      return "undefined" == typeof document ? null : (Array.isArray(e3) ? e3[0] : e3).ownerDocument.body;
    }(e2);
    return a2 ? (r2.push.apply(r2, Array.from(a2.querySelectorAll("[aria-live]"))), Kf(r2, a2, n2, "aria-hidden")) : function() {
      return null;
    };
  }, Xf = "Dialog", [Gf, Zf] = yd(Xf), [Jf, ep] = Gf(Xf), tp = (e2) => {
    const { __scopeDialog: t2, children: n2, open: r2, defaultOpen: a2, onOpenChange: o2, modal: l2 = true } = e2, i2 = U.useRef(null), u2 = U.useRef(null), [s2 = false, c2] = Cd({ prop: r2, defaultProp: a2, onChange: o2 });
    return X.jsx(Jf, { scope: t2, triggerRef: i2, contentRef: u2, contentId: Sd(), titleId: Sd(), descriptionId: Sd(), open: s2, onOpenChange: c2, onOpenToggle: U.useCallback(() => c2((e3) => !e3), [c2]), modal: l2, children: n2 });
  };
  tp.displayName = Xf;
  var np = "DialogTrigger";
  U.forwardRef((e2, t2) => {
    const { __scopeDialog: n2, ...r2 } = e2, a2 = ep(np, n2), o2 = vd(t2, a2.triggerRef);
    return X.jsx(Rd.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": a2.open, "aria-controls": a2.contentId, "data-state": wp(a2.open), ...r2, ref: o2, onClick: hd(e2.onClick, a2.onOpenToggle) });
  }).displayName = np;
  var rp = "DialogPortal", [ap, op] = Gf(rp, { forceMount: void 0 }), lp = (e2) => {
    const { __scopeDialog: t2, forceMount: n2, children: r2, container: a2 } = e2, o2 = ep(rp, t2);
    return X.jsx(ap, { scope: t2, forceMount: n2, children: U.Children.map(r2, (e3) => X.jsx(Gd, { present: n2 || o2.open, children: X.jsx(Xd, { asChild: true, container: a2, children: e3 }) })) });
  };
  lp.displayName = rp;
  var ip = "DialogOverlay", up = U.forwardRef((e2, t2) => {
    const n2 = op(ip, e2.__scopeDialog), { forceMount: r2 = n2.forceMount, ...a2 } = e2, o2 = ep(ip, e2.__scopeDialog);
    return o2.modal ? X.jsx(Gd, { present: r2 || o2.open, children: X.jsx(sp, { ...a2, ref: t2 }) }) : null;
  });
  up.displayName = ip;
  var sp = U.forwardRef((e2, t2) => {
    const { __scopeDialog: n2, ...r2 } = e2, a2 = ep(ip, n2);
    return X.jsx(Bf, { as: Nd, allowPinchZoom: true, shards: [a2.contentRef], children: X.jsx(Rd.div, { "data-state": wp(a2.open), ...r2, ref: t2, style: { pointerEvents: "auto", ...r2.style } }) });
  }), cp = "DialogContent", dp = U.forwardRef((e2, t2) => {
    const n2 = op(cp, e2.__scopeDialog), { forceMount: r2 = n2.forceMount, ...a2 } = e2, o2 = ep(cp, e2.__scopeDialog);
    return X.jsx(Gd, { present: r2 || o2.open, children: o2.modal ? X.jsx(fp, { ...a2, ref: t2 }) : X.jsx(pp, { ...a2, ref: t2 }) });
  });
  dp.displayName = cp;
  var fp = U.forwardRef((e2, t2) => {
    const n2 = ep(cp, e2.__scopeDialog), r2 = U.useRef(null), a2 = vd(t2, n2.contentRef, r2);
    return U.useEffect(() => {
      const e3 = r2.current;
      if (e3) return Yf(e3);
    }, []), X.jsx(hp, { ...e2, ref: a2, trapFocus: n2.open, disableOutsidePointerEvents: true, onCloseAutoFocus: hd(e2.onCloseAutoFocus, (e3) => {
      var _a2;
      e3.preventDefault(), (_a2 = n2.triggerRef.current) == null ? void 0 : _a2.focus();
    }), onPointerDownOutside: hd(e2.onPointerDownOutside, (e3) => {
      const t3 = e3.detail.originalEvent, n3 = 0 === t3.button && true === t3.ctrlKey;
      (2 === t3.button || n3) && e3.preventDefault();
    }), onFocusOutside: hd(e2.onFocusOutside, (e3) => e3.preventDefault()) });
  }), pp = U.forwardRef((e2, t2) => {
    const n2 = ep(cp, e2.__scopeDialog), r2 = U.useRef(false), a2 = U.useRef(false);
    return X.jsx(hp, { ...e2, ref: t2, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (t3) => {
      var _a2, _b;
      (_a2 = e2.onCloseAutoFocus) == null ? void 0 : _a2.call(e2, t3), t3.defaultPrevented || (r2.current || ((_b = n2.triggerRef.current) == null ? void 0 : _b.focus()), t3.preventDefault()), r2.current = false, a2.current = false;
    }, onInteractOutside: (t3) => {
      var _a2, _b;
      (_a2 = e2.onInteractOutside) == null ? void 0 : _a2.call(e2, t3), t3.defaultPrevented || (r2.current = true, "pointerdown" === t3.detail.originalEvent.type && (a2.current = true));
      const o2 = t3.target, l2 = (_b = n2.triggerRef.current) == null ? void 0 : _b.contains(o2);
      l2 && t3.preventDefault(), "focusin" === t3.detail.originalEvent.type && a2.current && t3.preventDefault();
    } });
  }), hp = U.forwardRef((e2, t2) => {
    const { __scopeDialog: n2, trapFocus: r2, onOpenAutoFocus: a2, onCloseAutoFocus: o2, ...l2 } = e2, i2 = ep(cp, n2), u2 = U.useRef(null), s2 = vd(t2, u2);
    return U.useEffect(() => {
      const e3 = document.querySelectorAll("[data-radix-focus-guard]");
      return document.body.insertAdjacentElement("afterbegin", e3[0] ?? ef()), document.body.insertAdjacentElement("beforeend", e3[1] ?? ef()), Jd++, () => {
        1 === Jd && document.querySelectorAll("[data-radix-focus-guard]").forEach((e4) => e4.remove()), Jd--;
      };
    }, []), X.jsxs(X.Fragment, { children: [X.jsx($d, { asChild: true, loop: true, trapped: r2, onMountAutoFocus: a2, onUnmountAutoFocus: o2, children: X.jsx(Id, { role: "dialog", id: i2.contentId, "aria-describedby": i2.descriptionId, "aria-labelledby": i2.titleId, "data-state": wp(i2.open), ...l2, ref: s2, onDismiss: () => i2.onOpenChange(false) }) }), X.jsxs(X.Fragment, { children: [X.jsx(Ep, { titleId: i2.titleId }), X.jsx(Cp, { contentRef: u2, descriptionId: i2.descriptionId })] })] });
  }), mp = "DialogTitle", gp = U.forwardRef((e2, t2) => {
    const { __scopeDialog: n2, ...r2 } = e2, a2 = ep(mp, n2);
    return X.jsx(Rd.h2, { id: a2.titleId, ...r2, ref: t2 });
  });
  gp.displayName = mp;
  var vp = "DialogDescription";
  U.forwardRef((e2, t2) => {
    const { __scopeDialog: n2, ...r2 } = e2, a2 = ep(vp, n2);
    return X.jsx(Rd.p, { id: a2.descriptionId, ...r2, ref: t2 });
  }).displayName = vp;
  var yp = "DialogClose", bp = U.forwardRef((e2, t2) => {
    const { __scopeDialog: n2, ...r2 } = e2, a2 = ep(yp, n2);
    return X.jsx(Rd.button, { type: "button", ...r2, ref: t2, onClick: hd(e2.onClick, () => a2.onOpenChange(false)) });
  });
  function wp(e2) {
    return e2 ? "open" : "closed";
  }
  bp.displayName = yp;
  var kp = "DialogTitleWarning", [xp, Sp] = function(e2, t2) {
    const n2 = U.createContext(t2), r2 = (e3) => {
      const { children: t3, ...r3 } = e3, a2 = U.useMemo(() => r3, Object.values(r3));
      return X.jsx(n2.Provider, { value: a2, children: t3 });
    };
    return r2.displayName = e2 + "Provider", [r2, function(r3) {
      const a2 = U.useContext(n2);
      if (a2) return a2;
      if (void 0 !== t2) return t2;
      throw new Error(`\`${r3}\` must be used within \`${e2}\``);
    }];
  }(kp, { contentName: cp, titleName: mp, docsSlug: "dialog" }), Ep = ({ titleId: e2 }) => {
    const t2 = Sp(kp), n2 = `\`${t2.contentName}\` requires a \`${t2.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t2.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t2.docsSlug}`;
    return U.useEffect(() => {
      if (e2) {
        document.getElementById(e2) || console.error(n2);
      }
    }, [n2, e2]), null;
  }, Cp = ({ contentRef: e2, descriptionId: t2 }) => {
    const n2 = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Sp("DialogDescriptionWarning").contentName}}.`;
    return U.useEffect(() => {
      var _a2;
      const r2 = (_a2 = e2.current) == null ? void 0 : _a2.getAttribute("aria-describedby");
      if (t2 && r2) {
        document.getElementById(t2) || console.warn(n2);
      }
    }, [n2, e2, t2]), null;
  }, Np = tp, _p = lp, Pp = up, Tp = dp, Lp = gp, Rp = bp;
  var zp = "Switch", [Mp, Op] = yd(zp), [Dp, jp] = Mp(zp), Ip = U.forwardRef((e2, t2) => {
    const { __scopeSwitch: n2, name: r2, checked: a2, defaultChecked: o2, required: l2, disabled: i2, value: u2 = "on", onCheckedChange: s2, form: c2, ...d2 } = e2, [f2, p2] = U.useState(null), h2 = vd(t2, (e3) => p2(e3)), m2 = U.useRef(false), g2 = !f2 || (c2 || !!f2.closest("form")), [v2 = false, y2] = Cd({ prop: a2, defaultProp: o2, onChange: s2 });
    return X.jsxs(Dp, { scope: n2, checked: v2, disabled: i2, children: [X.jsx(Rd.button, { type: "button", role: "switch", "aria-checked": v2, "aria-required": l2, "data-state": Wp(v2), "data-disabled": i2 ? "" : void 0, disabled: i2, value: u2, ...d2, ref: h2, onClick: hd(e2.onClick, (e3) => {
      y2((e4) => !e4), g2 && (m2.current = e3.isPropagationStopped(), m2.current || e3.stopPropagation());
    }) }), g2 && X.jsx(Up, { control: f2, bubbles: !m2.current, name: r2, value: u2, checked: v2, required: l2, disabled: i2, form: c2, style: { transform: "translateX(-100%)" } })] });
  });
  Ip.displayName = zp;
  var Fp = "SwitchThumb", Ap = U.forwardRef((e2, t2) => {
    const { __scopeSwitch: n2, ...r2 } = e2, a2 = jp(Fp, n2);
    return X.jsx(Rd.span, { "data-state": Wp(a2.checked), "data-disabled": a2.disabled ? "" : void 0, ...r2, ref: t2 });
  });
  Ap.displayName = Fp;
  var Up = (e2) => {
    const { control: t2, checked: n2, bubbles: r2 = true, ...a2 } = e2, o2 = U.useRef(null), l2 = function(e3) {
      const t3 = U.useRef({ value: e3, previous: e3 });
      return U.useMemo(() => (t3.current.value !== e3 && (t3.current.previous = t3.current.value, t3.current.value = e3), t3.current.previous), [e3]);
    }(n2), i2 = function(e3) {
      const [t3, n3] = U.useState(void 0);
      return wd(() => {
        if (e3) {
          n3({ width: e3.offsetWidth, height: e3.offsetHeight });
          const t4 = new ResizeObserver((t5) => {
            if (!Array.isArray(t5)) return;
            if (!t5.length) return;
            const r3 = t5[0];
            let a3, o3;
            if ("borderBoxSize" in r3) {
              const e4 = r3.borderBoxSize, t6 = Array.isArray(e4) ? e4[0] : e4;
              a3 = t6.inlineSize, o3 = t6.blockSize;
            } else a3 = e3.offsetWidth, o3 = e3.offsetHeight;
            n3({ width: a3, height: o3 });
          });
          return t4.observe(e3, { box: "border-box" }), () => t4.unobserve(e3);
        }
        n3(void 0);
      }, [e3]), t3;
    }(t2);
    return U.useEffect(() => {
      const e3 = o2.current, t3 = window.HTMLInputElement.prototype, a3 = Object.getOwnPropertyDescriptor(t3, "checked").set;
      if (l2 !== n2 && a3) {
        const t4 = new Event("click", { bubbles: r2 });
        a3.call(e3, n2), e3.dispatchEvent(t4);
      }
    }, [l2, n2, r2]), X.jsx("input", { type: "checkbox", "aria-hidden": true, defaultChecked: n2, ...a2, tabIndex: -1, ref: o2, style: { ...e2.style, ...i2, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } });
  };
  function Wp(e2) {
    return e2 ? "checked" : "unchecked";
  }
  var Bp = Ip, $p = Ap;
  const Vp = [{ text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" }, { text: "Creativity is intelligence having fun.", author: "Albert Einstein" }, { text: "Good design is as little design as possible.", author: "Dieter Rams" }, { text: "Design adds value faster than it adds costs.", author: "Joel Spolsky" }, { text: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou" }, { text: "Creativity is seeing what everyone else has seen, and thinking what no one else has thought.", author: "Albert Einstein" }, { text: "To create something exceptional, your mindset must be relentlessly focused on the smallest detail.", author: "Giorgio Armani" }, { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" }, { text: "Every great design begins with an even better story.", author: "Lorinda Mamo" }, { text: "Design is where science and art break even.", author: "Robin Mathew" }, { text: "The best way to predict the future is to create it.", author: "Peter Drucker" }, { text: "If you think good design is expensive, you should look at the cost of bad design.", author: "Ralf Speth" }, { text: "An essential aspect of creativity is not being afraid to fail.", author: "Edwin Land" }, { text: "Design is thinking made visual.", author: "Saul Bass" }, { text: "There is no design without discipline. There is no discipline without intelligence.", author: "Massimo Vignelli" }, { text: "Creativity doesn't wait for that perfect moment. It fashions its own perfect moments out of ordinary ones.", author: "Bruce Garrabrandt" }, { text: "Design should never say, 'Look at me.' It should always say, 'Look at this.'", author: "David Craib" }, { text: "Innovation is the outcome of a habit, not a random act.", author: "Sukant Ratnakar" }, { text: "The details are not the details. They make the design.", author: "Charles Eames" }, { text: "Art is the most intense mode of individualism that the world has known.", author: "Oscar Wilde" }, { text: "Design is a solution to a problem. Art is a question to a problem.", author: "John Maeda" }, { text: "Make it simple, but significant.", author: "Don Draper" }, { text: "The creative adult is the child who survived.", author: "Ursula K. Le Guin" }, { text: "Creativity takes courage.", author: "Henri Matisse" }, { text: "The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.", author: "Charles Eames" }, { text: "Design must reflect the practical and aesthetic in business but above all... good design must primarily serve people.", author: "Thomas J. Watson" }, { text: "Typography is the craft of endowing human language with a durable visual form.", author: "Robert Bringhurst" }, { text: "The best ideas emerge when very different perspectives meet.", author: "Frans Johansson" }, { text: "The heart and soul of the company is creativity and innovation.", author: "Bob Iger" }, { text: "Creativity is allowing yourself to make mistakes. Design is knowing which ones to keep.", author: "Scott Adams" }, { text: "Digital design is like painting, except the paint never dries.", author: "Neville Brody" }, { text: "Design is the intermediary between information and understanding.", author: "Richard Grefé" }, { text: "It's through mistakes that you actually can grow. You have to get bad in order to get good.", author: "Paula Scher" }, { text: "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" }, { text: "Design is intelligence made visible.", author: "Alina Wheeler" }, { text: "Simplicity is about subtracting the obvious and adding the meaningful.", author: "John Maeda" }, { text: "There's no shortage of remarkable ideas, what's missing is the will to execute them.", author: "Seth Godin" }, { text: "Design creates culture. Culture shapes values. Values determine the future.", author: "Robert L. Peters" }, { text: "Design is not for philosophy, it's for life.", author: "Issey Miyake" }, { text: "Creativity involves breaking out of established patterns in order to look at things in a different way.", author: "Edward de Bono" }, { text: "The essence of design lies in clarity and simplicity.", author: "Lindon Leader" }, { text: "An idea that is not dangerous is unworthy of being called an idea at all.", author: "Oscar Wilde" }, { text: "Design isn't finished until somebody is using it.", author: "Brenda Laurel" }, { text: "The real issue is not talent as an independent element, but talent in relationship to will, desire, and persistence.", author: "Milton Glaser" }, { text: "Good design begins with honesty, asks tough questions, comes from collaboration and from trusting your intuition.", author: "Freeman Thomas" }, { text: "A designer is an emerging synthesis of artist, inventor, mechanic, objective economist, and evolutionary strategist.", author: "R. Buckminster Fuller" }, { text: "Design is not a single object or dimension. Design is messy and complex.", author: "Natasha Jen" }, { text: "Life begins at the end of your comfort zone.", author: "Anonymous" }, { text: "Every sunset is an opportunity to reset.", author: "Anonymous" }, { text: "The best view comes after the hardest climb.", author: "Anonymous" }, { text: "Your life is your message to the world.", author: "Anonymous" }, { text: "In the end, we only regret the chances we didn't take.", author: "Anonymous" }, { text: "Life is short, but your smile can last forever.", author: "Anonymous" }, { text: "The little things in life matter the most.", author: "Anonymous" }, { text: "Your story isn't over yet.", author: "Anonymous" }, { text: "Stars can't shine without darkness.", author: "Anonymous" }, { text: "Life is tough, but so are you.", author: "Anonymous" }, { text: "Every day is a second chance.", author: "Anonymous" }, { text: "Kindness is free, sprinkle it everywhere.", author: "Anonymous" }, { text: "Be the reason someone believes in good people.", author: "Anonymous" }, { text: "Life is art. Live yours in color.", author: "Anonymous" }, { text: "The best time for new beginnings is now.", author: "Anonymous" }], Hp = { nature: ["forest", "mountains", "ocean", "sunset", "desert", "beach", "waterfall", "lake", "jungle", "autumn", "spring", "river", "garden", "island", "meadow", "valley", "canyon", "glacier", "volcano", "reef"], architecture: ["skyscraper", "castle", "bridge", "cathedral", "museum", "palace", "tower", "temple", "mansion", "church", "mosque", "stadium", "library", "pavilion", "villa", "dome", "arch", "monument", "pyramid", "lighthouse"], animals: ["lion", "tiger", "elephant", "giraffe", "penguin", "dolphin", "wolf", "bear", "eagle", "owl", "whale", "zebra", "panda", "koala", "gorilla", "cheetah", "leopard", "turtle", "shark", "butterfly"], art: ["painting", "sculpture", "drawing", "portrait", "abstract", "mural", "graffiti", "illustration", "sketch", "watercolor", "collage", "mosaic", "ceramic", "origami", "calligraphy", "pottery", "prints", "photography", "digital", "artwork"], people: ["portrait", "smile", "family", "friends", "children", "elderly", "musician", "artist", "dancer", "athlete", "worker", "student", "teacher", "doctor", "chef", "performer", "traveler", "couple", "group", "celebration"], food: ["cuisine", "dessert", "breakfast", "dinner", "fruits", "vegetables", "seafood", "baking", "coffee", "tea", "wine", "chocolate", "pasta", "sushi", "barbecue", "salad", "soup", "sandwich", "cake", "ice cream"], travel: ["cityscape", "landmark", "street", "market", "beach", "mountain", "village", "resort", "hotel", "airport", "train", "harbor", "park", "plaza", "boulevard", "cafe", "restaurant", "museum", "festival", "adventure"], technology: ["computer", "smartphone", "robot", "laboratory", "circuit", "screen", "keyboard", "device", "gadget", "innovation", "future", "digital", "network", "virtual", "artificial", "machine", "electronic", "software", "hardware", "tech"], abstract: ["pattern", "texture", "geometry", "lines", "shapes", "colors", "waves", "spiral", "fractal", "minimal", "chaos", "harmony", "flow", "motion", "space", "light", "shadow", "reflection", "symmetry", "abstract"], fashion: ["style", "clothing", "accessories", "jewelry", "shoes", "dress", "suit", "hat", "bag", "watch", "sunglasses", "makeup", "hairstyle", "model", "runway", "boutique", "designer", "vintage", "trendy", "elegant"], space: ["galaxy", "stars", "planet", "nebula", "cosmos", "moon", "sun", "asteroid", "comet", "telescope", "spacecraft", "astronaut", "orbit", "constellation", "meteor", "universe", "space station", "black hole", "supernova", "aurora"] }, Qp = { showQuotes: true, categories: { nature: true, architecture: true, art: true, people: true, animals: true, food: false, travel: true, technology: false, abstract: false, fashion: true, space: false }, favoriteLinks: [{ id: "lummi", url: "https://www.lummi.ai", title: "Lummi", icon: null }, { id: "linkedin", url: "https://www.linkedin.com", title: "LinkedIn", icon: null }, { id: "bluesky", url: "https://bsky.app", title: "Bluesky", icon: null }, { id: "chatgpt", url: "https://chat.openai.com", title: "ChatGPT", icon: null }] };
  function qp(e2) {
    try {
      return new URL(e2).hostname.replace(/^www\./, "");
    } catch (t2) {
      return console.error("Error parsing URL:", t2), "";
    }
  }
  const Kp = () => {
    const [e2, t2] = function(e3, t3) {
      const [n3, r3] = U.useState(() => {
        try {
          const n4 = window.localStorage.getItem(e3);
          return n4 ? JSON.parse(n4) : t3;
        } catch (n4) {
          return console.error(n4), t3;
        }
      });
      return [n3, (t4) => {
        try {
          const a3 = t4 instanceof Function ? t4(n3) : t4;
          r3(a3), window.localStorage.setItem(e3, JSON.stringify(a3));
        } catch (a3) {
          console.error(a3);
        }
      }];
    }("settings", Qp), [n2, r2] = U.useState(null), [a2, o2] = U.useState(""), [l2, i2] = U.useState([]), [u2, s2] = U.useState(false), c2 = U.useRef(null), d2 = U.useRef(null), [f2, p2] = U.useState({ name: "", username: "", attributionUrl: "" }), [h2, m2] = U.useState(null), [g2, v2] = U.useState([]), [y2, b2] = U.useState(false), [w2, k2] = U.useState(false), x2 = async (t3) => {
      var _a2, _b, _c2, _d2, _e2, _f2;
      k2(true);
      try {
        const n3 = Object.entries(e2.categories).filter(([e3, t4]) => t4).map(([e3]) => e3);
        if (0 === n3.length) return void console.error("No categories enabled");
        const r3 = n3.flatMap((e3) => Hp[e3] || []), a3 = t3 || r3[Math.floor(Math.random() * r3.length)];
        console.log("Making search request for query:", a3);
        const o3 = `https://lummi-extension-final.vercel.app/api/search?query=${encodeURIComponent(a3)}`;
        console.log("Using API URL:", o3);
        const l3 = await fetch(o3);
        if (!l3.ok) throw new Error(`HTTP error! status: ${l3.status}`);
        const i3 = await l3.json();
        console.log("Search response for query:", a3, { totalResults: i3.data.length, firstImageDescription: i3.data[0].description });
        const u3 = Math.floor(Math.random() * i3.data.length), s3 = i3.data[u3];
        console.log("Using randomly selected image for query:", a3, { index: u3, totalImages: i3.data.length, selectedDescription: s3.description, imageType: s3.imageType, url: s3.url }), m2({ url: s3.url, blurhash: s3.blurhash || "", description: s3.description || "", attribution: { name: ((_a2 = s3.author) == null ? void 0 : _a2.name) || "Unknown", username: ((_b = s3.author) == null ? void 0 : _b.username) || "", attributionUrl: ((_c2 = s3.author) == null ? void 0 : _c2.attributionUrl) || "" } }), p2({ name: ((_d2 = s3.author) == null ? void 0 : _d2.name) || "Unknown", username: ((_e2 = s3.author) == null ? void 0 : _e2.username) || "", attributionUrl: ((_f2 = s3.author) == null ? void 0 : _f2.attributionUrl) || "" });
      } catch (n3) {
        console.error("Error fetching image:", n3);
      } finally {
        k2(false);
      }
    };
    U.useEffect(() => {
      x2(a2);
      const e3 = setInterval(() => x2(a2), 36e5);
      return () => clearInterval(e3);
    }, [a2]), U.useEffect(() => {
      localStorage.setItem("settings", JSON.stringify(e2));
    }, [e2]), U.useEffect(() => {
      if (e2.showQuotes) {
        const e3 = Math.floor(Math.random() * Vp.length);
        r2(Vp[e3]);
      } else r2(null);
    }, [e2.showQuotes]), U.useEffect(() => {
      if (!e2.showQuotes) return;
      const t3 = setInterval(() => {
        const e3 = Math.floor(Math.random() * Vp.length);
        r2(Vp[e3]);
      }, 864e5);
      return () => clearInterval(t3);
    }, [e2.showQuotes]), U.useEffect(() => {
      const e3 = setTimeout(async () => {
        if (0 !== a2.trim().length) try {
          const e4 = document.createElement("script");
          e4.src = `https://suggestqueries.google.com/complete/search?client=youtube&q=${encodeURIComponent(a2)}&jsonp=handleSuggestions`, document.body.appendChild(e4), e4.remove();
        } catch (e4) {
          console.error("Error fetching suggestions:", e4);
        }
        else i2([]);
      }, 300);
      return () => clearTimeout(e3);
    }, [a2]), U.useEffect(() => {
      const e3 = (e4) => {
        c2.current && !c2.current.contains(e4.target) && s2(false);
      };
      return document.addEventListener("mousedown", e3), () => document.removeEventListener("mousedown", e3);
    }, []), U.useEffect(() => {
      window.handleSuggestions = (e3) => {
        Array.isArray(e3[1]) && i2(e3[1].slice(0, 8));
      };
    }, []), U.useEffect(() => {
      v2(y2 ? [...e2.favoriteLinks || []] : []);
    }, [y2, e2.favoriteLinks]);
    const S2 = async (e3, t3, n3) => {
      var _a2;
      const r3 = [...g2], a3 = r3.findIndex((t4) => t4.id === e3);
      if (-1 !== a3) {
        if (r3[a3][t3] = n3, "url" === t3 && n3) {
          const e4 = qp(n3);
          if (e4) if (e4.includes("lummi.ai")) r3[a3].icon = "https://i.imgur.com/BOTZwfi.png", console.log("Using custom Lummi icon");
          else {
            const t4 = `https://cdn.brandfetch.io/${e4}/w/400/h/400?c=1idqPQHGdjsMFy8NwQT`;
            try {
              const n4 = await fetch(t4);
              n4.ok && ((_a2 = n4.headers.get("content-type")) == null ? void 0 : _a2.startsWith("image/")) ? (r3[a3].icon = t4, console.log("Updated link with icon:", t4)) : (r3[a3].icon = null, console.log("No valid icon found for:", e4));
            } catch (o3) {
              r3[a3].icon = null, console.error("Error checking icon:", o3);
            }
          }
        }
        v2(r3);
      }
    };
    return U.useEffect(() => {
      const e3 = (e4) => {
        var _a2;
        (e4.metaKey || e4.ctrlKey) && "k" === e4.key && (e4.preventDefault(), (_a2 = d2.current) == null ? void 0 : _a2.focus()), (e4.metaKey || e4.ctrlKey) && "," === e4.key && (e4.preventDefault(), b2(true)), "Escape" === e4.key && (b2(false), s2(false));
      };
      return document.addEventListener("keydown", e3), () => document.removeEventListener("keydown", e3);
    }, []), X.jsxs("div", { className: "fixed inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat transition-all duration-[2000ms]", style: { backgroundImage: `url(${(h2 == null ? void 0 : h2.url) || ""})` }, children: [X.jsx("div", { className: "absolute inset-0 transition-opacity duration-1000 " + (w2 ? "bg-black/60" : "bg-black/40") }), X.jsx("button", { onClick: () => x2(a2), disabled: w2, className: "fixed top-4 left-4 p-2 rounded-full bg-black/40 backdrop-blur-sm text-white/60 hover:text-white hover:bg-black/60 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed", title: "Refresh Background (Loading...)", children: X.jsxs("svg", { className: "w-5 h-5 " + (w2 ? "animate-spin" : ""), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [X.jsx("path", { d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }), X.jsx("path", { d: "M9 12l2 2 4-4" })] }) }), X.jsxs("div", { className: "relative w-full max-w-2xl mx-auto px-4 py-8 flex flex-col items-center space-y-6", children: [e2.showQuotes && n2 && X.jsxs("div", { className: "text-center", children: [X.jsx("p", { className: "text-xl md:text-3xl text-white font-serif italic opacity-90", children: n2.text }), X.jsxs("p", { className: "text-white/60", children: ["- ", n2.author] })] }), X.jsxs("div", { ref: c2, className: "w-full max-w-2xl relative", children: [X.jsx("form", { action: "https://www.google.com/search", method: "get", className: "flex relative", onSubmit: () => s2(false), children: X.jsxs("div", { className: "relative w-full flex items-center", children: [X.jsx("input", { ref: d2, type: "text", name: "q", value: a2, onChange: (e3) => {
      o2(e3.target.value), s2(true);
    }, onFocus: () => s2(true), className: "w-full px-6 py-4 md:py-5 pl-12 rounded-2xl bg-black/40 backdrop-blur-sm text-white placeholder-white/50 border border-white/10 focus:outline-none focus:border-white/20 text-lg md:text-xl transition-all duration-200", placeholder: "Search Google... (⌘K)" }), X.jsx(cd, { className: "absolute left-4 w-5 h-5 text-white/50" })] }) }), u2 && l2.length > 0 && X.jsx("div", { className: "absolute w-full mt-2 bg-zinc-900/95 backdrop-blur-sm rounded-lg border border-zinc-800 overflow-hidden shadow-xl", children: l2.map((e3, t3) => X.jsxs("a", { href: `https://www.google.com/search?q=${encodeURIComponent(e3)}`, className: "flex items-center px-6 py-3 text-white hover:bg-white/10 transition-colors duration-150 text-left text-lg", onClick: () => s2(false), children: [X.jsx(cd, { className: "w-4 h-4 mr-3 text-white/50" }), e3] }, t3)) })] }), X.jsx("div", { className: "flex flex-wrap gap-4 justify-center", children: Array.isArray(e2.favoriteLinks) && e2.favoriteLinks.map((e3) => {
      const t3 = qp(e3.url), n3 = t3.includes("lummi.ai") ? "https://i.imgur.com/BOTZwfi.png" : t3 ? `https://cdn.brandfetch.io/${t3}/w/400/h/400?c=1idqPQHGdjsMFy8NwQT` : null;
      return console.log("Rendering link:", e3.url, "Domain:", t3, "Icon URL:", n3), X.jsxs("a", { href: e3.url, target: "_blank", rel: "noopener noreferrer", className: "flex flex-col items-center p-3 rounded-lg bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-200 group w-20", children: [X.jsx("div", { className: "w-12 h-12 rounded-lg bg-black/40 flex items-center justify-center mb-2 overflow-hidden group-hover:ring-2 group-hover:ring-white/20 transition-all", children: n3 ? X.jsx("img", { src: n3, alt: e3.title, className: "w-full h-full object-cover transition-transform duration-200 group-hover:scale-110", onError: (e4) => {
        console.error("Failed to load image:", n3), e4.currentTarget.parentElement.innerHTML = '<svg class="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>';
      } }) : X.jsxs("svg", { className: "w-5 h-5 text-white/60", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: [X.jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }), X.jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })] }) }), X.jsx("span", { className: "text-sm text-white/80 text-center group-hover:text-white transition-colors line-clamp-2", children: e3.title || t3 })] }, e3.url);
    }) })] }), X.jsx("button", { onClick: () => b2(true), className: "fixed top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-sm text-white/60 hover:text-white hover:bg-black/60 transition-all duration-200", children: X.jsx(dd, { className: "w-5 h-5" }) }), X.jsx(Np, { open: y2, onOpenChange: b2, children: X.jsxs(_p, { children: [X.jsx(Pp, { className: "fixed inset-0 bg-black/60 backdrop-blur-sm" }), X.jsxs(Tp, { className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-zinc-900 rounded-xl shadow-xl max-h-[90vh] flex flex-col", children: [X.jsx("div", { className: "p-6 overflow-y-auto flex-1", children: X.jsxs("div", { className: "space-y-6", children: [X.jsxs("div", { className: "flex items-center justify-between", children: [X.jsx(Lp, { className: "text-lg font-medium", children: "Settings" }), X.jsx(Rp, { className: "p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors", children: X.jsx(pd, { className: "w-5 h-5" }) })] }), X.jsxs("div", { className: "flex items-center justify-between", children: [X.jsx("label", { htmlFor: "quotes", className: "text-sm", children: "Show Quotes" }), X.jsx(Bp, { id: "quotes", checked: e2.showQuotes, onCheckedChange: () => t2((e3) => ({ ...e3, showQuotes: !e3.showQuotes })), className: "w-11 h-6 bg-zinc-700 rounded-full relative data-[state=checked]:bg-blue-600", children: X.jsx($p, { className: "block w-5 h-5 bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" }) })] }), X.jsxs("div", { className: "space-y-2", children: [X.jsx("p", { className: "text-sm font-medium", children: "Image Categories" }), Object.entries(e2.categories).map(([e3, n3]) => X.jsxs("div", { className: "flex items-center justify-between", children: [X.jsx("label", { htmlFor: e3, className: "text-sm capitalize", children: e3 }), X.jsx(Bp, { id: e3, checked: n3, onCheckedChange: () => ((e4) => {
      t2((t3) => ({ ...t3, categories: { ...t3.categories, [e4]: !t3.categories[e4] } }));
    })(e3), className: "w-11 h-6 bg-zinc-700 rounded-full relative data-[state=checked]:bg-blue-600", children: X.jsx($p, { className: "block w-5 h-5 bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" }) })] }, e3))] }), X.jsxs("div", { className: "space-y-4", children: [X.jsxs("div", { className: "flex items-center justify-between", children: [X.jsx("h3", { className: "text-sm font-medium", children: "Favorite Links" }), Array.isArray(g2) && g2.length < 10 && X.jsx("button", { onClick: () => {
      const e3 = { id: Math.random().toString(36).substr(2, 9), url: "", title: "", icon: null };
      v2([...g2, e3]);
    }, className: "p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors", children: X.jsx(sd, { className: "w-5 h-5" }) })] }), X.jsx("div", { className: "space-y-6", children: Array.isArray(g2) && g2.map((e3) => X.jsxs("div", { className: "flex items-start space-x-2 p-3 rounded-lg bg-zinc-800/50", children: [X.jsxs("div", { className: "flex-1 space-y-2", children: [X.jsx("input", { type: "text", value: e3.title, onChange: (t3) => S2(e3.id, "title", t3.target.value), placeholder: "Site Name", className: "w-full px-3 py-2 bg-zinc-800 rounded text-sm" }), X.jsx("input", { type: "url", value: e3.url, onChange: (t3) => S2(e3.id, "url", t3.target.value), placeholder: "https://...", className: "w-full px-3 py-2 bg-zinc-800 rounded text-sm" })] }), X.jsx("button", { onClick: () => ((e4) => {
      v2(g2.filter((t3) => t3.id !== e4));
    })(e3.id), className: "p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors", children: X.jsx(fd, { className: "w-4 h-4" }) })] }, e3.id)) })] })] }) }), X.jsx("div", { className: "p-6 border-t border-zinc-800 bg-zinc-900", children: X.jsxs("div", { className: "flex justify-end space-x-2", children: [X.jsx(Rp, { className: "px-4 py-2 rounded bg-zinc-800 text-white/60 hover:text-white transition-colors", children: "Cancel" }), X.jsx("button", { onClick: () => {
      const e3 = g2.map((e4) => {
        if (e4.url) {
          const t3 = qp(e4.url);
          return console.log("Processing link domain:", t3), t3 && t3.includes("lummi.ai") ? { ...e4, icon: "https://i.imgur.com/BOTZwfi.png", title: e4.title || "Lummi" } : { ...e4, icon: t3 ? `https://cdn.brandfetch.io/${t3}/w/400/h/400?c=1idqPQHGdjsMFy8NwQT` : null, title: e4.title || t3 };
        }
        return e4;
      });
      console.log("Saving links with icons:", e3), t2((t3) => ({ ...t3, favoriteLinks: e3.filter((e4) => e4.url && "" !== e4.url.trim()) })), b2(false);
    }, className: "px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors", children: "Save Changes" })] }) })] })] }) }), X.jsx("div", { className: "fixed bottom-4 left-1/2 -translate-x-1/2", children: f2 && X.jsxs("div", { className: "text-white/80 text-sm space-x-1.5 backdrop-blur-sm bg-black/40 px-4 py-2 rounded-lg shadow-lg border border-white/10", children: [X.jsx("span", { children: "Photo" }), X.jsx("a", { href: f2 == null ? void 0 : f2.attributionUrl, target: "_blank", rel: "noopener noreferrer", className: "text-white hover:text-blue-300 transition-colors", children: "on Lummi" }), X.jsx("span", { children: "by" }), X.jsx("a", { href: `https://www.lummi.ai/creator/${f2 == null ? void 0 : f2.username}`, target: "_blank", rel: "noopener noreferrer", className: "text-white hover:text-blue-300 transition-colors font-medium", children: f2 == null ? void 0 : f2.name })] }) })] });
  };
  G.createRoot(document.getElementById("root")).render(X.jsx(W.StrictMode, { children: X.jsx(Kp, {}) }));
}();
//# sourceMappingURL=index.js.map
