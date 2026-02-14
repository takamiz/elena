var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/bundle-IRFAyS/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
__name(checkURL, "checkURL");
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// build/worker/shim.mjs
import At from "./a85a8dd1a506810a1801c99625a6f9f0301a6959-index.wasm";
import { WorkerEntrypoint as Tt } from "cloudflare:workers";
var U = Object.defineProperty;
var C = /* @__PURE__ */ __name((e2, t) => {
  for (var n in t) U(e2, n, { get: t[n], enumerable: true });
}, "C");
var d = {};
C(d, { IntoUnderlyingByteSource: /* @__PURE__ */ __name(() => m, "IntoUnderlyingByteSource"), IntoUnderlyingSink: /* @__PURE__ */ __name(() => R, "IntoUnderlyingSink"), IntoUnderlyingSource: /* @__PURE__ */ __name(() => S, "IntoUnderlyingSource"), MinifyConfig: /* @__PURE__ */ __name(() => p, "MinifyConfig"), PolishConfig: /* @__PURE__ */ __name(() => W, "PolishConfig"), R2Range: /* @__PURE__ */ __name(() => F, "R2Range"), RequestRedirect: /* @__PURE__ */ __name(() => B, "RequestRedirect"), __wbg_Error_8c4e43fe74559d73: /* @__PURE__ */ __name(() => $, "__wbg_Error_8c4e43fe74559d73"), __wbg_String_8f0eb39a4a4c2f66: /* @__PURE__ */ __name(() => v, "__wbg_String_8f0eb39a4a4c2f66"), __wbg___wbindgen_debug_string_0bc8482c6e3508ae: /* @__PURE__ */ __name(() => N, "__wbg___wbindgen_debug_string_0bc8482c6e3508ae"), __wbg___wbindgen_is_function_0095a73b8b156f76: /* @__PURE__ */ __name(() => P, "__wbg___wbindgen_is_function_0095a73b8b156f76"), __wbg___wbindgen_is_string_cd444516edc5b180: /* @__PURE__ */ __name(() => V, "__wbg___wbindgen_is_string_cd444516edc5b180"), __wbg___wbindgen_is_undefined_9e4d92534c42d778: /* @__PURE__ */ __name(() => X, "__wbg___wbindgen_is_undefined_9e4d92534c42d778"), __wbg___wbindgen_string_get_72fb696202c56729: /* @__PURE__ */ __name(() => G, "__wbg___wbindgen_string_get_72fb696202c56729"), __wbg___wbindgen_throw_be289d5034ed271b: /* @__PURE__ */ __name(() => H, "__wbg___wbindgen_throw_be289d5034ed271b"), __wbg__wbg_cb_unref_d9b87ff7982e3b21: /* @__PURE__ */ __name(() => J, "__wbg__wbg_cb_unref_d9b87ff7982e3b21"), __wbg_body_3a0b4437dadea6bf: /* @__PURE__ */ __name(() => Y, "__wbg_body_3a0b4437dadea6bf"), __wbg_buffer_26d0910f3a5bc899: /* @__PURE__ */ __name(() => K, "__wbg_buffer_26d0910f3a5bc899"), __wbg_byobRequest_80e594e6da4e1af7: /* @__PURE__ */ __name(() => Q, "__wbg_byobRequest_80e594e6da4e1af7"), __wbg_byteLength_3417f266f4bf562a: /* @__PURE__ */ __name(() => Z, "__wbg_byteLength_3417f266f4bf562a"), __wbg_byteOffset_f88547ca47c86358: /* @__PURE__ */ __name(() => ee, "__wbg_byteOffset_f88547ca47c86358"), __wbg_call_389efe28435a9388: /* @__PURE__ */ __name(() => te, "__wbg_call_389efe28435a9388"), __wbg_call_4708e0c13bdc8e95: /* @__PURE__ */ __name(() => ne, "__wbg_call_4708e0c13bdc8e95"), __wbg_cancel_2c0a0a251ff6b2b7: /* @__PURE__ */ __name(() => re, "__wbg_cancel_2c0a0a251ff6b2b7"), __wbg_catch_c1f8c7623b458214: /* @__PURE__ */ __name(() => _e, "__wbg_catch_c1f8c7623b458214"), __wbg_cause_0fc168d4eaec87cc: /* @__PURE__ */ __name(() => oe, "__wbg_cause_0fc168d4eaec87cc"), __wbg_cf_194957b722a72988: /* @__PURE__ */ __name(() => se, "__wbg_cf_194957b722a72988"), __wbg_cf_2d8126b4ac84e631: /* @__PURE__ */ __name(() => ie, "__wbg_cf_2d8126b4ac84e631"), __wbg_close_06dfa0a815b9d71f: /* @__PURE__ */ __name(() => ce, "__wbg_close_06dfa0a815b9d71f"), __wbg_close_a79afee31de55b36: /* @__PURE__ */ __name(() => ue, "__wbg_close_a79afee31de55b36"), __wbg_enqueue_2c63f2044f257c3e: /* @__PURE__ */ __name(() => fe, "__wbg_enqueue_2c63f2044f257c3e"), __wbg_error_9a7fe3f932034cde: /* @__PURE__ */ __name(() => be, "__wbg_error_9a7fe3f932034cde"), __wbg_fetch_2c1e75cf1cd9a524: /* @__PURE__ */ __name(() => ae, "__wbg_fetch_2c1e75cf1cd9a524"), __wbg_fetch_c97461e1e8f610cd: /* @__PURE__ */ __name(() => ge, "__wbg_fetch_c97461e1e8f610cd"), __wbg_getReader_48e00749fe3f6089: /* @__PURE__ */ __name(() => de, "__wbg_getReader_48e00749fe3f6089"), __wbg_getTime_1e3cd1391c5c3995: /* @__PURE__ */ __name(() => we, "__wbg_getTime_1e3cd1391c5c3995"), __wbg_get_done_1ad1c16537f444c6: /* @__PURE__ */ __name(() => le, "__wbg_get_done_1ad1c16537f444c6"), __wbg_get_value_6b77a1b7b90c9200: /* @__PURE__ */ __name(() => pe, "__wbg_get_value_6b77a1b7b90c9200"), __wbg_headers_59a2938db9f80985: /* @__PURE__ */ __name(() => ye, "__wbg_headers_59a2938db9f80985"), __wbg_headers_5a897f7fee9a0571: /* @__PURE__ */ __name(() => he, "__wbg_headers_5a897f7fee9a0571"), __wbg_instanceof_Error_8573fe0b0b480f46: /* @__PURE__ */ __name(() => xe, "__wbg_instanceof_Error_8573fe0b0b480f46"), __wbg_instanceof_ReadableStream_8ab3825017e203e9: /* @__PURE__ */ __name(() => me, "__wbg_instanceof_ReadableStream_8ab3825017e203e9"), __wbg_instanceof_Response_ee1d54d79ae41977: /* @__PURE__ */ __name(() => Re, "__wbg_instanceof_Response_ee1d54d79ae41977"), __wbg_length_32ed9a279acd054c: /* @__PURE__ */ __name(() => Se, "__wbg_length_32ed9a279acd054c"), __wbg_log_6b5ca2e6124b2808: /* @__PURE__ */ __name(() => Fe, "__wbg_log_6b5ca2e6124b2808"), __wbg_method_a9e9b2fcba5440fb: /* @__PURE__ */ __name(() => ke, "__wbg_method_a9e9b2fcba5440fb"), __wbg_minifyconfig_new: /* @__PURE__ */ __name(() => Ee, "__wbg_minifyconfig_new"), __wbg_new_0_73afc35eb544e539: /* @__PURE__ */ __name(() => Oe, "__wbg_new_0_73afc35eb544e539"), __wbg_new_361308b2356cecd0: /* @__PURE__ */ __name(() => ze, "__wbg_new_361308b2356cecd0"), __wbg_new_64284bd487f9d239: /* @__PURE__ */ __name(() => Ie, "__wbg_new_64284bd487f9d239"), __wbg_new_72b49615380db768: /* @__PURE__ */ __name(() => Me, "__wbg_new_72b49615380db768"), __wbg_new_b5d9e2fb389fef91: /* @__PURE__ */ __name(() => Ae, "__wbg_new_b5d9e2fb389fef91"), __wbg_new_dca287b076112a51: /* @__PURE__ */ __name(() => Te, "__wbg_new_dca287b076112a51"), __wbg_new_no_args_1c7c842f08d00ebb: /* @__PURE__ */ __name(() => Le, "__wbg_new_no_args_1c7c842f08d00ebb"), __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1: /* @__PURE__ */ __name(() => je, "__wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1"), __wbg_new_with_length_a2c39cbe88fd8ff1: /* @__PURE__ */ __name(() => qe, "__wbg_new_with_length_a2c39cbe88fd8ff1"), __wbg_new_with_opt_buffer_source_and_init_8c10f2615c78809b: /* @__PURE__ */ __name(() => De, "__wbg_new_with_opt_buffer_source_and_init_8c10f2615c78809b"), __wbg_new_with_opt_readable_stream_and_init_8a044befefe6d8bb: /* @__PURE__ */ __name(() => Ue, "__wbg_new_with_opt_readable_stream_and_init_8a044befefe6d8bb"), __wbg_new_with_opt_str_and_init_4fbb71523b271b6e: /* @__PURE__ */ __name(() => Ce, "__wbg_new_with_opt_str_and_init_4fbb71523b271b6e"), __wbg_new_with_str_and_init_a61cbc6bdef21614: /* @__PURE__ */ __name(() => We, "__wbg_new_with_str_and_init_a61cbc6bdef21614"), __wbg_prototypesetcall_bdcdcc5842e4d77d: /* @__PURE__ */ __name(() => Be, "__wbg_prototypesetcall_bdcdcc5842e4d77d"), __wbg_queueMicrotask_0aa0a927f78f5d98: /* @__PURE__ */ __name(() => $e, "__wbg_queueMicrotask_0aa0a927f78f5d98"), __wbg_queueMicrotask_5bb536982f78a56f: /* @__PURE__ */ __name(() => ve, "__wbg_queueMicrotask_5bb536982f78a56f"), __wbg_read_68fd377df67e19b0: /* @__PURE__ */ __name(() => Ne, "__wbg_read_68fd377df67e19b0"), __wbg_releaseLock_aa5846c2494b3032: /* @__PURE__ */ __name(() => Pe, "__wbg_releaseLock_aa5846c2494b3032"), __wbg_resolve_002c4b7d9d8f6b64: /* @__PURE__ */ __name(() => Ve, "__wbg_resolve_002c4b7d9d8f6b64"), __wbg_respond_bf6ab10399ca8722: /* @__PURE__ */ __name(() => Xe, "__wbg_respond_bf6ab10399ca8722"), __wbg_set_1eb0999cf5d27fc8: /* @__PURE__ */ __name(() => Ge, "__wbg_set_1eb0999cf5d27fc8"), __wbg_set_3f1d0b984ed272ed: /* @__PURE__ */ __name(() => He, "__wbg_set_3f1d0b984ed272ed"), __wbg_set_6cb8631f80447a67: /* @__PURE__ */ __name(() => Je, "__wbg_set_6cb8631f80447a67"), __wbg_set_body_9a7e00afe3cfe244: /* @__PURE__ */ __name(() => Ye, "__wbg_set_body_9a7e00afe3cfe244"), __wbg_set_cc56eefd2dd91957: /* @__PURE__ */ __name(() => Ke, "__wbg_set_cc56eefd2dd91957"), __wbg_set_db769d02949a271d: /* @__PURE__ */ __name(() => Qe, "__wbg_set_db769d02949a271d"), __wbg_set_headers_bbdfebba19309590: /* @__PURE__ */ __name(() => Ze, "__wbg_set_headers_bbdfebba19309590"), __wbg_set_headers_cfc5f4b2c1f20549: /* @__PURE__ */ __name(() => et, "__wbg_set_headers_cfc5f4b2c1f20549"), __wbg_set_method_c3e20375f5ae7fac: /* @__PURE__ */ __name(() => tt, "__wbg_set_method_c3e20375f5ae7fac"), __wbg_set_redirect_a7956fa3f817cbbc: /* @__PURE__ */ __name(() => nt, "__wbg_set_redirect_a7956fa3f817cbbc"), __wbg_set_signal_f2d3f8599248896d: /* @__PURE__ */ __name(() => rt, "__wbg_set_signal_f2d3f8599248896d"), __wbg_set_status_fa41f71c4575bca5: /* @__PURE__ */ __name(() => _t, "__wbg_set_status_fa41f71c4575bca5"), __wbg_set_wasm: /* @__PURE__ */ __name(() => T, "__wbg_set_wasm"), __wbg_static_accessor_GLOBAL_12837167ad935116: /* @__PURE__ */ __name(() => ot, "__wbg_static_accessor_GLOBAL_12837167ad935116"), __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: /* @__PURE__ */ __name(() => st, "__wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f"), __wbg_static_accessor_SELF_a621d3dfbb60d0ce: /* @__PURE__ */ __name(() => it, "__wbg_static_accessor_SELF_a621d3dfbb60d0ce"), __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: /* @__PURE__ */ __name(() => ct, "__wbg_static_accessor_WINDOW_f8727f0cf888e0bd"), __wbg_status_89d7e803db911ee7: /* @__PURE__ */ __name(() => ut, "__wbg_status_89d7e803db911ee7"), __wbg_then_0d9fe2c7b1857d32: /* @__PURE__ */ __name(() => ft, "__wbg_then_0d9fe2c7b1857d32"), __wbg_then_b9e7b3b5f1a9e1b5: /* @__PURE__ */ __name(() => bt, "__wbg_then_b9e7b3b5f1a9e1b5"), __wbg_toString_029ac24421fd7a24: /* @__PURE__ */ __name(() => at, "__wbg_toString_029ac24421fd7a24"), __wbg_url_36c39f6580d05409: /* @__PURE__ */ __name(() => gt, "__wbg_url_36c39f6580d05409"), __wbg_view_6c32e7184b8606ad: /* @__PURE__ */ __name(() => dt, "__wbg_view_6c32e7184b8606ad"), __wbg_webSocket_d11bc2bcaeace27a: /* @__PURE__ */ __name(() => wt, "__wbg_webSocket_d11bc2bcaeace27a"), __wbindgen_cast_0000000000000001: /* @__PURE__ */ __name(() => lt, "__wbindgen_cast_0000000000000001"), __wbindgen_cast_0000000000000002: /* @__PURE__ */ __name(() => pt, "__wbindgen_cast_0000000000000002"), __wbindgen_cast_0000000000000003: /* @__PURE__ */ __name(() => yt, "__wbindgen_cast_0000000000000003"), __wbindgen_init_externref_table: /* @__PURE__ */ __name(() => ht, "__wbindgen_init_externref_table"), fetch: /* @__PURE__ */ __name(() => A, "fetch") });
var m = class {
  static {
    __name(this, "m");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ft.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingbytesource_free(t, 0);
  }
  get autoAllocateChunkSize() {
    return r.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
  }
  cancel() {
    let t = this.__destroy_into_raw();
    r.intounderlyingbytesource_cancel(t);
  }
  pull(t) {
    return r.intounderlyingbytesource_pull(this.__wbg_ptr, t);
  }
  start(t) {
    r.intounderlyingbytesource_start(this.__wbg_ptr, t);
  }
  get type() {
    let t = r.intounderlyingbytesource_type(this.__wbg_ptr);
    return Rt[t];
  }
};
Symbol.dispose && (m.prototype[Symbol.dispose] = m.prototype.free);
var R = class {
  static {
    __name(this, "R");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, kt.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingsink_free(t, 0);
  }
  abort(t) {
    let n = this.__destroy_into_raw();
    return r.intounderlyingsink_abort(n, t);
  }
  close() {
    let t = this.__destroy_into_raw();
    return r.intounderlyingsink_close(t);
  }
  write(t) {
    return r.intounderlyingsink_write(this.__wbg_ptr, t);
  }
};
Symbol.dispose && (R.prototype[Symbol.dispose] = R.prototype.free);
var S = class {
  static {
    __name(this, "S");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Et.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingsource_free(t, 0);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    r.intounderlyingsource_cancel(t);
  }
  pull(t) {
    return r.intounderlyingsource_pull(this.__wbg_ptr, t);
  }
};
Symbol.dispose && (S.prototype[Symbol.dispose] = S.prototype.free);
var p = class e {
  static {
    __name(this, "e");
  }
  static __wrap(t) {
    t = t >>> 0;
    let n = Object.create(e.prototype);
    return n.__wbg_ptr = t, L.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, L.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_minifyconfig_free(t, 0);
  }
  get css() {
    return r.__wbg_get_minifyconfig_css(this.__wbg_ptr) !== 0;
  }
  get html() {
    return r.__wbg_get_minifyconfig_html(this.__wbg_ptr) !== 0;
  }
  get js() {
    return r.__wbg_get_minifyconfig_js(this.__wbg_ptr) !== 0;
  }
  set css(t) {
    r.__wbg_set_minifyconfig_css(this.__wbg_ptr, t);
  }
  set html(t) {
    r.__wbg_set_minifyconfig_html(this.__wbg_ptr, t);
  }
  set js(t) {
    r.__wbg_set_minifyconfig_js(this.__wbg_ptr, t);
  }
};
Symbol.dispose && (p.prototype[Symbol.dispose] = p.prototype.free);
var W = Object.freeze({ Off: 0, 0: "Off", Lossy: 1, 1: "Lossy", Lossless: 2, 2: "Lossless" });
var F = class {
  static {
    __name(this, "F");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ot.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_r2range_free(t, 0);
  }
  get length() {
    let t = r.__wbg_get_r2range_length(this.__wbg_ptr);
    return t[0] === 0 ? void 0 : t[1];
  }
  get offset() {
    let t = r.__wbg_get_r2range_offset(this.__wbg_ptr);
    return t[0] === 0 ? void 0 : t[1];
  }
  get suffix() {
    let t = r.__wbg_get_r2range_suffix(this.__wbg_ptr);
    return t[0] === 0 ? void 0 : t[1];
  }
  set length(t) {
    r.__wbg_set_r2range_length(this.__wbg_ptr, !i(t), i(t) ? 0 : t);
  }
  set offset(t) {
    r.__wbg_set_r2range_offset(this.__wbg_ptr, !i(t), i(t) ? 0 : t);
  }
  set suffix(t) {
    r.__wbg_set_r2range_suffix(this.__wbg_ptr, !i(t), i(t) ? 0 : t);
  }
};
Symbol.dispose && (F.prototype[Symbol.dispose] = F.prototype.free);
var B = Object.freeze({ Error: 0, 0: "Error", Follow: 1, 1: "Follow", Manual: 2, 2: "Manual" });
function A(e2, t, n) {
  return r.fetch(e2, t, n);
}
__name(A, "A");
function $(e2, t) {
  return Error(b(e2, t));
}
__name($, "$");
function v(e2, t) {
  let n = String(t), _ = k(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = w;
  g().setInt32(e2 + 4, o, true), g().setInt32(e2 + 0, _, true);
}
__name(v, "v");
function N(e2, t) {
  let n = M(t), _ = k(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = w;
  g().setInt32(e2 + 4, o, true), g().setInt32(e2 + 0, _, true);
}
__name(N, "N");
function P(e2) {
  return typeof e2 == "function";
}
__name(P, "P");
function V(e2) {
  return typeof e2 == "string";
}
__name(V, "V");
function X(e2) {
  return e2 === void 0;
}
__name(X, "X");
function G(e2, t) {
  let n = t, _ = typeof n == "string" ? n : void 0;
  var o = i(_) ? 0 : k(_, r.__wbindgen_malloc, r.__wbindgen_realloc), u = w;
  g().setInt32(e2 + 4, u, true), g().setInt32(e2 + 0, o, true);
}
__name(G, "G");
function H(e2, t) {
  throw new Error(b(e2, t));
}
__name(H, "H");
function J(e2) {
  e2._wbg_cb_unref();
}
__name(J, "J");
function Y(e2) {
  let t = e2.body;
  return i(t) ? 0 : a(t);
}
__name(Y, "Y");
function K(e2) {
  return e2.buffer;
}
__name(K, "K");
function Q(e2) {
  let t = e2.byobRequest;
  return i(t) ? 0 : a(t);
}
__name(Q, "Q");
function Z(e2) {
  return e2.byteLength;
}
__name(Z, "Z");
function ee(e2) {
  return e2.byteOffset;
}
__name(ee, "ee");
function te() {
  return c(function(e2, t) {
    return e2.call(t);
  }, arguments);
}
__name(te, "te");
function ne() {
  return c(function(e2, t, n) {
    return e2.call(t, n);
  }, arguments);
}
__name(ne, "ne");
function re(e2) {
  return e2.cancel();
}
__name(re, "re");
function _e(e2, t) {
  return e2.catch(t);
}
__name(_e, "_e");
function oe(e2) {
  return e2.cause;
}
__name(oe, "oe");
function se() {
  return c(function(e2) {
    let t = e2.cf;
    return i(t) ? 0 : a(t);
  }, arguments);
}
__name(se, "se");
function ie() {
  return c(function(e2) {
    let t = e2.cf;
    return i(t) ? 0 : a(t);
  }, arguments);
}
__name(ie, "ie");
function ce() {
  return c(function(e2) {
    e2.close();
  }, arguments);
}
__name(ce, "ce");
function ue() {
  return c(function(e2) {
    e2.close();
  }, arguments);
}
__name(ue, "ue");
function fe() {
  return c(function(e2, t) {
    e2.enqueue(t);
  }, arguments);
}
__name(fe, "fe");
function be(e2) {
  console.error(e2);
}
__name(be, "be");
function ae(e2, t, n, _) {
  return e2.fetch(b(t, n), _);
}
__name(ae, "ae");
function ge(e2, t, n) {
  return e2.fetch(t, n);
}
__name(ge, "ge");
function de() {
  return c(function(e2) {
    return e2.getReader();
  }, arguments);
}
__name(de, "de");
function we(e2) {
  return e2.getTime();
}
__name(we, "we");
function le(e2) {
  let t = e2.done;
  return i(t) ? 16777215 : t ? 1 : 0;
}
__name(le, "le");
function pe(e2) {
  return e2.value;
}
__name(pe, "pe");
function ye(e2) {
  return e2.headers;
}
__name(ye, "ye");
function he(e2) {
  return e2.headers;
}
__name(he, "he");
function xe(e2) {
  let t;
  try {
    t = e2 instanceof Error;
  } catch {
    t = false;
  }
  return t;
}
__name(xe, "xe");
function me(e2) {
  let t;
  try {
    t = e2 instanceof ReadableStream;
  } catch {
    t = false;
  }
  return t;
}
__name(me, "me");
function Re(e2) {
  let t;
  try {
    t = e2 instanceof Response;
  } catch {
    t = false;
  }
  return t;
}
__name(Re, "Re");
function Se(e2) {
  return e2.length;
}
__name(Se, "Se");
function Fe(e2) {
  console.log(e2);
}
__name(Fe, "Fe");
function ke(e2, t) {
  let n = t.method, _ = k(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = w;
  g().setInt32(e2 + 4, o, true), g().setInt32(e2 + 0, _, true);
}
__name(ke, "ke");
function Ee(e2) {
  return p.__wrap(e2);
}
__name(Ee, "Ee");
function Oe() {
  return /* @__PURE__ */ new Date();
}
__name(Oe, "Oe");
function ze() {
  return new Object();
}
__name(ze, "ze");
function Ie() {
  return c(function() {
    return new Headers();
  }, arguments);
}
__name(Ie, "Ie");
function Me(e2, t) {
  return new Error(b(e2, t));
}
__name(Me, "Me");
function Ae(e2, t) {
  try {
    var n = { a: e2, b: t }, _ = /* @__PURE__ */ __name((u, s) => {
      let f = n.a;
      n.a = 0;
      try {
        return mt(f, n.b, u, s);
      } finally {
        n.a = f;
      }
    }, "_");
    return new Promise(_);
  } finally {
    n.a = n.b = 0;
  }
}
__name(Ae, "Ae");
function Te() {
  return /* @__PURE__ */ new Map();
}
__name(Te, "Te");
function Le(e2, t) {
  return new Function(b(e2, t));
}
__name(Le, "Le");
function je(e2, t, n) {
  return new Uint8Array(e2, t >>> 0, n >>> 0);
}
__name(je, "je");
function qe(e2) {
  return new Uint8Array(e2 >>> 0);
}
__name(qe, "qe");
function De() {
  return c(function(e2, t) {
    return new Response(e2, t);
  }, arguments);
}
__name(De, "De");
function Ue() {
  return c(function(e2, t) {
    return new Response(e2, t);
  }, arguments);
}
__name(Ue, "Ue");
function Ce() {
  return c(function(e2, t, n) {
    return new Response(e2 === 0 ? void 0 : b(e2, t), n);
  }, arguments);
}
__name(Ce, "Ce");
function We() {
  return c(function(e2, t, n) {
    return new Request(b(e2, t), n);
  }, arguments);
}
__name(We, "We");
function Be(e2, t, n) {
  Uint8Array.prototype.set.call(q(e2, t), n);
}
__name(Be, "Be");
function $e(e2) {
  return e2.queueMicrotask;
}
__name($e, "$e");
function ve(e2) {
  queueMicrotask(e2);
}
__name(ve, "ve");
function Ne(e2) {
  return e2.read();
}
__name(Ne, "Ne");
function Pe(e2) {
  e2.releaseLock();
}
__name(Pe, "Pe");
function Ve(e2) {
  return Promise.resolve(e2);
}
__name(Ve, "Ve");
function Xe() {
  return c(function(e2, t) {
    e2.respond(t >>> 0);
  }, arguments);
}
__name(Xe, "Xe");
function Ge(e2, t, n) {
  return e2.set(t, n);
}
__name(Ge, "Ge");
function He(e2, t, n) {
  e2[t] = n;
}
__name(He, "He");
function Je() {
  return c(function(e2, t, n) {
    return Reflect.set(e2, t, n);
  }, arguments);
}
__name(Je, "Je");
function Ye(e2, t) {
  e2.body = t;
}
__name(Ye, "Ye");
function Ke(e2, t, n) {
  e2.set(q(t, n));
}
__name(Ke, "Ke");
function Qe() {
  return c(function(e2, t, n, _, o) {
    e2.set(b(t, n), b(_, o));
  }, arguments);
}
__name(Qe, "Qe");
function Ze(e2, t) {
  e2.headers = t;
}
__name(Ze, "Ze");
function et(e2, t) {
  e2.headers = t;
}
__name(et, "et");
function tt(e2, t, n) {
  e2.method = b(t, n);
}
__name(tt, "tt");
function nt(e2, t) {
  e2.redirect = St[t];
}
__name(nt, "nt");
function rt(e2, t) {
  e2.signal = t;
}
__name(rt, "rt");
function _t(e2, t) {
  e2.status = t;
}
__name(_t, "_t");
function ot() {
  let e2 = typeof global > "u" ? null : global;
  return i(e2) ? 0 : a(e2);
}
__name(ot, "ot");
function st() {
  let e2 = typeof globalThis > "u" ? null : globalThis;
  return i(e2) ? 0 : a(e2);
}
__name(st, "st");
function it() {
  let e2 = typeof self > "u" ? null : self;
  return i(e2) ? 0 : a(e2);
}
__name(it, "it");
function ct() {
  let e2 = typeof window > "u" ? null : window;
  return i(e2) ? 0 : a(e2);
}
__name(ct, "ct");
function ut(e2) {
  return e2.status;
}
__name(ut, "ut");
function ft(e2, t, n) {
  return e2.then(t, n);
}
__name(ft, "ft");
function bt(e2, t) {
  return e2.then(t);
}
__name(bt, "bt");
function at(e2) {
  return e2.toString();
}
__name(at, "at");
function gt(e2, t) {
  let n = t.url, _ = k(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = w;
  g().setInt32(e2 + 4, o, true), g().setInt32(e2 + 0, _, true);
}
__name(gt, "gt");
function dt(e2) {
  let t = e2.view;
  return i(t) ? 0 : a(t);
}
__name(dt, "dt");
function wt() {
  return c(function(e2) {
    let t = e2.webSocket;
    return i(t) ? 0 : a(t);
  }, arguments);
}
__name(wt, "wt");
function lt(e2, t) {
  return zt(e2, t, r.wasm_bindgen__closure__destroy__h1d380c56a34cf122, xt);
}
__name(lt, "lt");
function pt(e2) {
  return e2;
}
__name(pt, "pt");
function yt(e2, t) {
  return b(e2, t);
}
__name(yt, "yt");
function ht() {
  let e2 = r.__wbindgen_externrefs, t = e2.grow(4);
  e2.set(0, void 0), e2.set(t + 0, void 0), e2.set(t + 1, null), e2.set(t + 2, true), e2.set(t + 3, false);
}
__name(ht, "ht");
function xt(e2, t, n) {
  r.wasm_bindgen__convert__closures_____invoke__h78ae51bd7dd47835(e2, t, n);
}
__name(xt, "xt");
function mt(e2, t, n, _) {
  r.wasm_bindgen__convert__closures_____invoke__h1ae6a1e7db527fd7(e2, t, n, _);
}
__name(mt, "mt");
var Rt = ["bytes"];
var St = ["follow", "error", "manual"];
var Ft = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((e2) => r.__wbg_intounderlyingbytesource_free(e2 >>> 0, 1));
var kt = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((e2) => r.__wbg_intounderlyingsink_free(e2 >>> 0, 1));
var Et = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((e2) => r.__wbg_intounderlyingsource_free(e2 >>> 0, 1));
var L = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((e2) => r.__wbg_minifyconfig_free(e2 >>> 0, 1));
var Ot = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((e2) => r.__wbg_r2range_free(e2 >>> 0, 1));
function a(e2) {
  let t = r.__externref_table_alloc();
  return r.__wbindgen_externrefs.set(t, e2), t;
}
__name(a, "a");
var j = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((e2) => e2.dtor(e2.a, e2.b));
function M(e2) {
  let t = typeof e2;
  if (t == "number" || t == "boolean" || e2 == null) return `${e2}`;
  if (t == "string") return `"${e2}"`;
  if (t == "symbol") {
    let o = e2.description;
    return o == null ? "Symbol" : `Symbol(${o})`;
  }
  if (t == "function") {
    let o = e2.name;
    return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
  }
  if (Array.isArray(e2)) {
    let o = e2.length, u = "[";
    o > 0 && (u += M(e2[0]));
    for (let s = 1; s < o; s++) u += ", " + M(e2[s]);
    return u += "]", u;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(e2)), _;
  if (n && n.length > 1) _ = n[1];
  else return toString.call(e2);
  if (_ == "Object") try {
    return "Object(" + JSON.stringify(e2) + ")";
  } catch {
    return "Object";
  }
  return e2 instanceof Error ? `${e2.name}: ${e2.message}
${e2.stack}` : _;
}
__name(M, "M");
function q(e2, t) {
  return e2 = e2 >>> 0, h().subarray(e2 / 1, e2 / 1 + t);
}
__name(q, "q");
var l = null;
function g() {
  return (l === null || l.buffer.detached === true || l.buffer.detached === void 0 && l.buffer !== r.memory.buffer) && (l = new DataView(r.memory.buffer)), l;
}
__name(g, "g");
function b(e2, t) {
  return e2 = e2 >>> 0, Mt(e2, t);
}
__name(b, "b");
var E = null;
function h() {
  return (E === null || E.byteLength === 0) && (E = new Uint8Array(r.memory.buffer)), E;
}
__name(h, "h");
function c(e2, t) {
  try {
    return e2.apply(this, t);
  } catch (n) {
    let _ = a(n);
    r.__wbindgen_exn_store(_);
  }
}
__name(c, "c");
function i(e2) {
  return e2 == null;
}
__name(i, "i");
function zt(e2, t, n, _) {
  let o = { a: e2, b: t, cnt: 1, dtor: n }, u = /* @__PURE__ */ __name((...s) => {
    o.cnt++;
    let f = o.a;
    o.a = 0;
    try {
      return _(f, o.b, ...s);
    } finally {
      o.a = f, u._wbg_cb_unref();
    }
  }, "u");
  return u._wbg_cb_unref = () => {
    --o.cnt === 0 && (o.dtor(o.a, o.b), o.a = 0, j.unregister(o));
  }, j.register(u, o, o), u;
}
__name(zt, "zt");
function k(e2, t, n) {
  if (n === void 0) {
    let f = x.encode(e2), y = t(f.length, 1) >>> 0;
    return h().subarray(y, y + f.length).set(f), w = f.length, y;
  }
  let _ = e2.length, o = t(_, 1) >>> 0, u = h(), s = 0;
  for (; s < _; s++) {
    let f = e2.charCodeAt(s);
    if (f > 127) break;
    u[o + s] = f;
  }
  if (s !== _) {
    s !== 0 && (e2 = e2.slice(s)), o = n(o, _, _ = s + e2.length * 3, 1) >>> 0;
    let f = h().subarray(o + s, o + _), y = x.encodeInto(e2, f);
    s += y.written, o = n(o, _, s, 1) >>> 0;
  }
  return w = s, o;
}
__name(k, "k");
var O = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
O.decode();
var It = 2146435072;
var I = 0;
function Mt(e2, t) {
  return I += t, I >= It && (O = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), O.decode(), I = t), O.decode(h().subarray(e2, e2 + t));
}
__name(Mt, "Mt");
var x = new TextEncoder();
"encodeInto" in x || (x.encodeInto = function(e2, t) {
  let n = x.encode(e2);
  return t.set(n), { read: e2.length, written: n.length };
});
var w = 0;
var r;
function T(e2) {
  r = e2;
}
__name(T, "T");
var D = new WebAssembly.Instance(At, { "./index_bg.js": d });
T(D.exports);
D.exports.__wbindgen_start?.();
var z = class extends Tt {
  static {
    __name(this, "z");
  }
  async fetch(t) {
    return await A(t, this.env, this.ctx);
  }
  async queue(t) {
    return await (void 0)(t, this.env, this.ctx);
  }
  async scheduled(t) {
    return await (void 0)(t, this.env, this.ctx);
  }
};
var Lt = ["IntoUnderlyingByteSource", "IntoUnderlyingSink", "IntoUnderlyingSource", "MinifyConfig", "PolishConfig", "R2Range", "RequestRedirect", "fetch", "queue", "scheduled", "getMemory"];
Object.keys(d).map((e2) => {
  Lt.includes(e2) | e2.startsWith("__") || (z.prototype[e2] = d[e2]);
});
var Ut = z;

// ../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e2) {
      console.error("Failed to drain the unused request body.", e2);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e2) {
  return {
    name: e2?.name,
    message: e2?.message ?? String(e2),
    stack: e2?.stack,
    cause: e2?.cause === void 0 ? void 0 : reduceError(e2.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e2) {
    const error = reduceError(e2);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-IRFAyS/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = Ut;

// ../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-IRFAyS/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  m as IntoUnderlyingByteSource,
  R as IntoUnderlyingSink,
  S as IntoUnderlyingSource,
  p as MinifyConfig,
  W as PolishConfig,
  F as R2Range,
  B as RequestRedirect,
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  $ as __wbg_Error_8c4e43fe74559d73,
  v as __wbg_String_8f0eb39a4a4c2f66,
  N as __wbg___wbindgen_debug_string_0bc8482c6e3508ae,
  P as __wbg___wbindgen_is_function_0095a73b8b156f76,
  V as __wbg___wbindgen_is_string_cd444516edc5b180,
  X as __wbg___wbindgen_is_undefined_9e4d92534c42d778,
  G as __wbg___wbindgen_string_get_72fb696202c56729,
  H as __wbg___wbindgen_throw_be289d5034ed271b,
  J as __wbg__wbg_cb_unref_d9b87ff7982e3b21,
  Y as __wbg_body_3a0b4437dadea6bf,
  K as __wbg_buffer_26d0910f3a5bc899,
  Q as __wbg_byobRequest_80e594e6da4e1af7,
  Z as __wbg_byteLength_3417f266f4bf562a,
  ee as __wbg_byteOffset_f88547ca47c86358,
  te as __wbg_call_389efe28435a9388,
  ne as __wbg_call_4708e0c13bdc8e95,
  re as __wbg_cancel_2c0a0a251ff6b2b7,
  _e as __wbg_catch_c1f8c7623b458214,
  oe as __wbg_cause_0fc168d4eaec87cc,
  se as __wbg_cf_194957b722a72988,
  ie as __wbg_cf_2d8126b4ac84e631,
  ce as __wbg_close_06dfa0a815b9d71f,
  ue as __wbg_close_a79afee31de55b36,
  fe as __wbg_enqueue_2c63f2044f257c3e,
  be as __wbg_error_9a7fe3f932034cde,
  ae as __wbg_fetch_2c1e75cf1cd9a524,
  ge as __wbg_fetch_c97461e1e8f610cd,
  de as __wbg_getReader_48e00749fe3f6089,
  we as __wbg_getTime_1e3cd1391c5c3995,
  le as __wbg_get_done_1ad1c16537f444c6,
  pe as __wbg_get_value_6b77a1b7b90c9200,
  ye as __wbg_headers_59a2938db9f80985,
  he as __wbg_headers_5a897f7fee9a0571,
  xe as __wbg_instanceof_Error_8573fe0b0b480f46,
  me as __wbg_instanceof_ReadableStream_8ab3825017e203e9,
  Re as __wbg_instanceof_Response_ee1d54d79ae41977,
  Se as __wbg_length_32ed9a279acd054c,
  Fe as __wbg_log_6b5ca2e6124b2808,
  ke as __wbg_method_a9e9b2fcba5440fb,
  Ee as __wbg_minifyconfig_new,
  Oe as __wbg_new_0_73afc35eb544e539,
  ze as __wbg_new_361308b2356cecd0,
  Ie as __wbg_new_64284bd487f9d239,
  Me as __wbg_new_72b49615380db768,
  Ae as __wbg_new_b5d9e2fb389fef91,
  Te as __wbg_new_dca287b076112a51,
  Le as __wbg_new_no_args_1c7c842f08d00ebb,
  je as __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1,
  qe as __wbg_new_with_length_a2c39cbe88fd8ff1,
  De as __wbg_new_with_opt_buffer_source_and_init_8c10f2615c78809b,
  Ue as __wbg_new_with_opt_readable_stream_and_init_8a044befefe6d8bb,
  Ce as __wbg_new_with_opt_str_and_init_4fbb71523b271b6e,
  We as __wbg_new_with_str_and_init_a61cbc6bdef21614,
  Be as __wbg_prototypesetcall_bdcdcc5842e4d77d,
  $e as __wbg_queueMicrotask_0aa0a927f78f5d98,
  ve as __wbg_queueMicrotask_5bb536982f78a56f,
  Ne as __wbg_read_68fd377df67e19b0,
  Pe as __wbg_releaseLock_aa5846c2494b3032,
  Ve as __wbg_resolve_002c4b7d9d8f6b64,
  Xe as __wbg_respond_bf6ab10399ca8722,
  Ge as __wbg_set_1eb0999cf5d27fc8,
  He as __wbg_set_3f1d0b984ed272ed,
  Je as __wbg_set_6cb8631f80447a67,
  Ye as __wbg_set_body_9a7e00afe3cfe244,
  Ke as __wbg_set_cc56eefd2dd91957,
  Qe as __wbg_set_db769d02949a271d,
  Ze as __wbg_set_headers_bbdfebba19309590,
  et as __wbg_set_headers_cfc5f4b2c1f20549,
  tt as __wbg_set_method_c3e20375f5ae7fac,
  nt as __wbg_set_redirect_a7956fa3f817cbbc,
  rt as __wbg_set_signal_f2d3f8599248896d,
  _t as __wbg_set_status_fa41f71c4575bca5,
  T as __wbg_set_wasm,
  ot as __wbg_static_accessor_GLOBAL_12837167ad935116,
  st as __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f,
  it as __wbg_static_accessor_SELF_a621d3dfbb60d0ce,
  ct as __wbg_static_accessor_WINDOW_f8727f0cf888e0bd,
  ut as __wbg_status_89d7e803db911ee7,
  ft as __wbg_then_0d9fe2c7b1857d32,
  bt as __wbg_then_b9e7b3b5f1a9e1b5,
  at as __wbg_toString_029ac24421fd7a24,
  gt as __wbg_url_36c39f6580d05409,
  dt as __wbg_view_6c32e7184b8606ad,
  wt as __wbg_webSocket_d11bc2bcaeace27a,
  lt as __wbindgen_cast_0000000000000001,
  pt as __wbindgen_cast_0000000000000002,
  yt as __wbindgen_cast_0000000000000003,
  ht as __wbindgen_init_externref_table,
  middleware_loader_entry_default as default,
  A as fetch,
  At as wasmModule
};
//# sourceMappingURL=shim.js.map
