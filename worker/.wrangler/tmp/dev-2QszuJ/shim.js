var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/bundle-oqyLsd/checked-fetch.js
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
import Ke from "./f3bf38174de63cdb291948834265a0c6d91a3335-index.wasm";
import { WorkerEntrypoint as Qe } from "cloudflare:workers";
var $ = Object.defineProperty;
var v = /* @__PURE__ */ __name((t2, e) => {
  for (var n in e) $(t2, n, { get: e[n], enumerable: true });
}, "v");
var y = {};
v(y, { IntoUnderlyingByteSource: /* @__PURE__ */ __name(() => O, "IntoUnderlyingByteSource"), IntoUnderlyingSink: /* @__PURE__ */ __name(() => k, "IntoUnderlyingSink"), IntoUnderlyingSource: /* @__PURE__ */ __name(() => j, "IntoUnderlyingSource"), MinifyConfig: /* @__PURE__ */ __name(() => h, "MinifyConfig"), PolishConfig: /* @__PURE__ */ __name(() => P, "PolishConfig"), R2Range: /* @__PURE__ */ __name(() => E, "R2Range"), RequestRedirect: /* @__PURE__ */ __name(() => V, "RequestRedirect"), __wbg_Error_8c4e43fe74559d73: /* @__PURE__ */ __name(() => H, "__wbg_Error_8c4e43fe74559d73"), __wbg_String_8f0eb39a4a4c2f66: /* @__PURE__ */ __name(() => X, "__wbg_String_8f0eb39a4a4c2f66"), __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: /* @__PURE__ */ __name(() => G, "__wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25"), __wbg___wbindgen_debug_string_0bc8482c6e3508ae: /* @__PURE__ */ __name(() => J, "__wbg___wbindgen_debug_string_0bc8482c6e3508ae"), __wbg___wbindgen_is_function_0095a73b8b156f76: /* @__PURE__ */ __name(() => Y, "__wbg___wbindgen_is_function_0095a73b8b156f76"), __wbg___wbindgen_is_string_cd444516edc5b180: /* @__PURE__ */ __name(() => K, "__wbg___wbindgen_is_string_cd444516edc5b180"), __wbg___wbindgen_is_undefined_9e4d92534c42d778: /* @__PURE__ */ __name(() => Q, "__wbg___wbindgen_is_undefined_9e4d92534c42d778"), __wbg___wbindgen_number_get_8ff4255516ccad3e: /* @__PURE__ */ __name(() => Z, "__wbg___wbindgen_number_get_8ff4255516ccad3e"), __wbg___wbindgen_string_get_72fb696202c56729: /* @__PURE__ */ __name(() => tt, "__wbg___wbindgen_string_get_72fb696202c56729"), __wbg___wbindgen_throw_be289d5034ed271b: /* @__PURE__ */ __name(() => et, "__wbg___wbindgen_throw_be289d5034ed271b"), __wbg__wbg_cb_unref_d9b87ff7982e3b21: /* @__PURE__ */ __name(() => nt, "__wbg__wbg_cb_unref_d9b87ff7982e3b21"), __wbg_body_3a0b4437dadea6bf: /* @__PURE__ */ __name(() => rt, "__wbg_body_3a0b4437dadea6bf"), __wbg_buffer_26d0910f3a5bc899: /* @__PURE__ */ __name(() => _t, "__wbg_buffer_26d0910f3a5bc899"), __wbg_byobRequest_80e594e6da4e1af7: /* @__PURE__ */ __name(() => ot, "__wbg_byobRequest_80e594e6da4e1af7"), __wbg_byteLength_3417f266f4bf562a: /* @__PURE__ */ __name(() => ct, "__wbg_byteLength_3417f266f4bf562a"), __wbg_byteOffset_f88547ca47c86358: /* @__PURE__ */ __name(() => it, "__wbg_byteOffset_f88547ca47c86358"), __wbg_call_389efe28435a9388: /* @__PURE__ */ __name(() => st, "__wbg_call_389efe28435a9388"), __wbg_call_4708e0c13bdc8e95: /* @__PURE__ */ __name(() => ut, "__wbg_call_4708e0c13bdc8e95"), __wbg_call_812d25f1510c13c8: /* @__PURE__ */ __name(() => ft, "__wbg_call_812d25f1510c13c8"), __wbg_call_e8c868596c950cf6: /* @__PURE__ */ __name(() => bt, "__wbg_call_e8c868596c950cf6"), __wbg_cancel_2c0a0a251ff6b2b7: /* @__PURE__ */ __name(() => at, "__wbg_cancel_2c0a0a251ff6b2b7"), __wbg_catch_c1f8c7623b458214: /* @__PURE__ */ __name(() => gt, "__wbg_catch_c1f8c7623b458214"), __wbg_cause_0fc168d4eaec87cc: /* @__PURE__ */ __name(() => dt, "__wbg_cause_0fc168d4eaec87cc"), __wbg_cf_194957b722a72988: /* @__PURE__ */ __name(() => wt, "__wbg_cf_194957b722a72988"), __wbg_cf_2d8126b4ac84e631: /* @__PURE__ */ __name(() => pt, "__wbg_cf_2d8126b4ac84e631"), __wbg_close_06dfa0a815b9d71f: /* @__PURE__ */ __name(() => lt, "__wbg_close_06dfa0a815b9d71f"), __wbg_close_a79afee31de55b36: /* @__PURE__ */ __name(() => yt, "__wbg_close_a79afee31de55b36"), __wbg_cron_de8ccb5314e15877: /* @__PURE__ */ __name(() => xt, "__wbg_cron_de8ccb5314e15877"), __wbg_enqueue_2c63f2044f257c3e: /* @__PURE__ */ __name(() => ht, "__wbg_enqueue_2c63f2044f257c3e"), __wbg_error_9a7fe3f932034cde: /* @__PURE__ */ __name(() => mt, "__wbg_error_9a7fe3f932034cde"), __wbg_fetch_2c1e75cf1cd9a524: /* @__PURE__ */ __name(() => Ft, "__wbg_fetch_2c1e75cf1cd9a524"), __wbg_fetch_c97461e1e8f610cd: /* @__PURE__ */ __name(() => Rt, "__wbg_fetch_c97461e1e8f610cd"), __wbg_getReader_48e00749fe3f6089: /* @__PURE__ */ __name(() => St, "__wbg_getReader_48e00749fe3f6089"), __wbg_getTime_1e3cd1391c5c3995: /* @__PURE__ */ __name(() => It, "__wbg_getTime_1e3cd1391c5c3995"), __wbg_get_b3ed3ad4be2bc8ac: /* @__PURE__ */ __name(() => Ot, "__wbg_get_b3ed3ad4be2bc8ac"), __wbg_get_done_1ad1c16537f444c6: /* @__PURE__ */ __name(() => kt, "__wbg_get_done_1ad1c16537f444c6"), __wbg_get_value_6b77a1b7b90c9200: /* @__PURE__ */ __name(() => jt, "__wbg_get_value_6b77a1b7b90c9200"), __wbg_headers_59a2938db9f80985: /* @__PURE__ */ __name(() => Et, "__wbg_headers_59a2938db9f80985"), __wbg_headers_5a897f7fee9a0571: /* @__PURE__ */ __name(() => zt, "__wbg_headers_5a897f7fee9a0571"), __wbg_instanceof_Error_8573fe0b0b480f46: /* @__PURE__ */ __name(() => At, "__wbg_instanceof_Error_8573fe0b0b480f46"), __wbg_instanceof_ReadableStream_8ab3825017e203e9: /* @__PURE__ */ __name(() => Mt, "__wbg_instanceof_ReadableStream_8ab3825017e203e9"), __wbg_instanceof_Response_ee1d54d79ae41977: /* @__PURE__ */ __name(() => Tt, "__wbg_instanceof_Response_ee1d54d79ae41977"), __wbg_length_32ed9a279acd054c: /* @__PURE__ */ __name(() => Lt, "__wbg_length_32ed9a279acd054c"), __wbg_log_6b5ca2e6124b2808: /* @__PURE__ */ __name(() => qt, "__wbg_log_6b5ca2e6124b2808"), __wbg_method_a9e9b2fcba5440fb: /* @__PURE__ */ __name(() => Dt, "__wbg_method_a9e9b2fcba5440fb"), __wbg_minifyconfig_new: /* @__PURE__ */ __name(() => Ut, "__wbg_minifyconfig_new"), __wbg_new_0_73afc35eb544e539: /* @__PURE__ */ __name(() => Ct, "__wbg_new_0_73afc35eb544e539"), __wbg_new_361308b2356cecd0: /* @__PURE__ */ __name(() => Wt, "__wbg_new_361308b2356cecd0"), __wbg_new_3eb36ae241fe6f44: /* @__PURE__ */ __name(() => Bt, "__wbg_new_3eb36ae241fe6f44"), __wbg_new_64284bd487f9d239: /* @__PURE__ */ __name(() => Nt, "__wbg_new_64284bd487f9d239"), __wbg_new_72b49615380db768: /* @__PURE__ */ __name(() => $t, "__wbg_new_72b49615380db768"), __wbg_new_b5d9e2fb389fef91: /* @__PURE__ */ __name(() => vt, "__wbg_new_b5d9e2fb389fef91"), __wbg_new_dca287b076112a51: /* @__PURE__ */ __name(() => Pt, "__wbg_new_dca287b076112a51"), __wbg_new_no_args_1c7c842f08d00ebb: /* @__PURE__ */ __name(() => Vt, "__wbg_new_no_args_1c7c842f08d00ebb"), __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1: /* @__PURE__ */ __name(() => Ht, "__wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1"), __wbg_new_with_length_a2c39cbe88fd8ff1: /* @__PURE__ */ __name(() => Xt, "__wbg_new_with_length_a2c39cbe88fd8ff1"), __wbg_new_with_opt_buffer_source_and_init_8c10f2615c78809b: /* @__PURE__ */ __name(() => Gt, "__wbg_new_with_opt_buffer_source_and_init_8c10f2615c78809b"), __wbg_new_with_opt_readable_stream_and_init_8a044befefe6d8bb: /* @__PURE__ */ __name(() => Jt, "__wbg_new_with_opt_readable_stream_and_init_8a044befefe6d8bb"), __wbg_new_with_opt_str_and_init_4fbb71523b271b6e: /* @__PURE__ */ __name(() => Yt, "__wbg_new_with_opt_str_and_init_4fbb71523b271b6e"), __wbg_new_with_str_and_init_a61cbc6bdef21614: /* @__PURE__ */ __name(() => Kt, "__wbg_new_with_str_and_init_a61cbc6bdef21614"), __wbg_prototypesetcall_bdcdcc5842e4d77d: /* @__PURE__ */ __name(() => Qt, "__wbg_prototypesetcall_bdcdcc5842e4d77d"), __wbg_queueMicrotask_0aa0a927f78f5d98: /* @__PURE__ */ __name(() => Zt, "__wbg_queueMicrotask_0aa0a927f78f5d98"), __wbg_queueMicrotask_5bb536982f78a56f: /* @__PURE__ */ __name(() => te, "__wbg_queueMicrotask_5bb536982f78a56f"), __wbg_read_68fd377df67e19b0: /* @__PURE__ */ __name(() => ee, "__wbg_read_68fd377df67e19b0"), __wbg_releaseLock_aa5846c2494b3032: /* @__PURE__ */ __name(() => ne, "__wbg_releaseLock_aa5846c2494b3032"), __wbg_resolve_002c4b7d9d8f6b64: /* @__PURE__ */ __name(() => re, "__wbg_resolve_002c4b7d9d8f6b64"), __wbg_respond_bf6ab10399ca8722: /* @__PURE__ */ __name(() => _e, "__wbg_respond_bf6ab10399ca8722"), __wbg_scheduledTime_1a75457da9ac6475: /* @__PURE__ */ __name(() => oe, "__wbg_scheduledTime_1a75457da9ac6475"), __wbg_set_1eb0999cf5d27fc8: /* @__PURE__ */ __name(() => ce, "__wbg_set_1eb0999cf5d27fc8"), __wbg_set_3807d5f0bfc24aa7: /* @__PURE__ */ __name(() => ie, "__wbg_set_3807d5f0bfc24aa7"), __wbg_set_3f1d0b984ed272ed: /* @__PURE__ */ __name(() => se, "__wbg_set_3f1d0b984ed272ed"), __wbg_set_6cb8631f80447a67: /* @__PURE__ */ __name(() => ue, "__wbg_set_6cb8631f80447a67"), __wbg_set_body_9a7e00afe3cfe244: /* @__PURE__ */ __name(() => fe, "__wbg_set_body_9a7e00afe3cfe244"), __wbg_set_cc56eefd2dd91957: /* @__PURE__ */ __name(() => be, "__wbg_set_cc56eefd2dd91957"), __wbg_set_db769d02949a271d: /* @__PURE__ */ __name(() => ae, "__wbg_set_db769d02949a271d"), __wbg_set_f43e577aea94465b: /* @__PURE__ */ __name(() => ge, "__wbg_set_f43e577aea94465b"), __wbg_set_headers_bbdfebba19309590: /* @__PURE__ */ __name(() => de, "__wbg_set_headers_bbdfebba19309590"), __wbg_set_headers_cfc5f4b2c1f20549: /* @__PURE__ */ __name(() => we, "__wbg_set_headers_cfc5f4b2c1f20549"), __wbg_set_method_c3e20375f5ae7fac: /* @__PURE__ */ __name(() => pe, "__wbg_set_method_c3e20375f5ae7fac"), __wbg_set_redirect_a7956fa3f817cbbc: /* @__PURE__ */ __name(() => le, "__wbg_set_redirect_a7956fa3f817cbbc"), __wbg_set_signal_f2d3f8599248896d: /* @__PURE__ */ __name(() => ye, "__wbg_set_signal_f2d3f8599248896d"), __wbg_set_status_fa41f71c4575bca5: /* @__PURE__ */ __name(() => xe, "__wbg_set_status_fa41f71c4575bca5"), __wbg_set_wasm: /* @__PURE__ */ __name(() => U, "__wbg_set_wasm"), __wbg_static_accessor_GLOBAL_12837167ad935116: /* @__PURE__ */ __name(() => he, "__wbg_static_accessor_GLOBAL_12837167ad935116"), __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: /* @__PURE__ */ __name(() => me, "__wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f"), __wbg_static_accessor_SELF_a621d3dfbb60d0ce: /* @__PURE__ */ __name(() => Fe, "__wbg_static_accessor_SELF_a621d3dfbb60d0ce"), __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: /* @__PURE__ */ __name(() => Re, "__wbg_static_accessor_WINDOW_f8727f0cf888e0bd"), __wbg_status_89d7e803db911ee7: /* @__PURE__ */ __name(() => Se, "__wbg_status_89d7e803db911ee7"), __wbg_stringify_8d1cc6ff383e8bae: /* @__PURE__ */ __name(() => Ie, "__wbg_stringify_8d1cc6ff383e8bae"), __wbg_then_0d9fe2c7b1857d32: /* @__PURE__ */ __name(() => Oe, "__wbg_then_0d9fe2c7b1857d32"), __wbg_then_b9e7b3b5f1a9e1b5: /* @__PURE__ */ __name(() => ke, "__wbg_then_b9e7b3b5f1a9e1b5"), __wbg_toString_029ac24421fd7a24: /* @__PURE__ */ __name(() => je, "__wbg_toString_029ac24421fd7a24"), __wbg_url_36c39f6580d05409: /* @__PURE__ */ __name(() => Ee, "__wbg_url_36c39f6580d05409"), __wbg_view_6c32e7184b8606ad: /* @__PURE__ */ __name(() => ze, "__wbg_view_6c32e7184b8606ad"), __wbg_webSocket_d11bc2bcaeace27a: /* @__PURE__ */ __name(() => Ae, "__wbg_webSocket_d11bc2bcaeace27a"), __wbindgen_cast_0000000000000001: /* @__PURE__ */ __name(() => Me, "__wbindgen_cast_0000000000000001"), __wbindgen_cast_0000000000000002: /* @__PURE__ */ __name(() => Te, "__wbindgen_cast_0000000000000002"), __wbindgen_cast_0000000000000003: /* @__PURE__ */ __name(() => Le, "__wbindgen_cast_0000000000000003"), __wbindgen_cast_0000000000000004: /* @__PURE__ */ __name(() => qe, "__wbindgen_cast_0000000000000004"), __wbindgen_cast_0000000000000005: /* @__PURE__ */ __name(() => De, "__wbindgen_cast_0000000000000005"), __wbindgen_object_clone_ref: /* @__PURE__ */ __name(() => Ue, "__wbindgen_object_clone_ref"), __wbindgen_object_drop_ref: /* @__PURE__ */ __name(() => Ce, "__wbindgen_object_drop_ref"), fetch: /* @__PURE__ */ __name(() => q, "fetch"), scheduled: /* @__PURE__ */ __name(() => D, "scheduled") });
var O = class {
  static {
    __name(this, "O");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ve.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    c.__wbg_intounderlyingbytesource_free(e, 0);
  }
  get autoAllocateChunkSize() {
    return c.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
  }
  cancel() {
    let e = this.__destroy_into_raw();
    c.intounderlyingbytesource_cancel(e);
  }
  pull(e) {
    let n = c.intounderlyingbytesource_pull(this.__wbg_ptr, o(e));
    return d(n);
  }
  start(e) {
    c.intounderlyingbytesource_start(this.__wbg_ptr, o(e));
  }
  get type() {
    let e = c.intounderlyingbytesource_type(this.__wbg_ptr);
    return Ne[e];
  }
};
Symbol.dispose && (O.prototype[Symbol.dispose] = O.prototype.free);
var k = class {
  static {
    __name(this, "k");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Pe.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    c.__wbg_intounderlyingsink_free(e, 0);
  }
  abort(e) {
    let n = this.__destroy_into_raw(), _ = c.intounderlyingsink_abort(n, o(e));
    return d(_);
  }
  close() {
    let e = this.__destroy_into_raw(), n = c.intounderlyingsink_close(e);
    return d(n);
  }
  write(e) {
    let n = c.intounderlyingsink_write(this.__wbg_ptr, o(e));
    return d(n);
  }
};
Symbol.dispose && (k.prototype[Symbol.dispose] = k.prototype.free);
var j = class {
  static {
    __name(this, "j");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ve.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    c.__wbg_intounderlyingsource_free(e, 0);
  }
  cancel() {
    let e = this.__destroy_into_raw();
    c.intounderlyingsource_cancel(e);
  }
  pull(e) {
    let n = c.intounderlyingsource_pull(this.__wbg_ptr, o(e));
    return d(n);
  }
};
Symbol.dispose && (j.prototype[Symbol.dispose] = j.prototype.free);
var h = class t {
  static {
    __name(this, "t");
  }
  static __wrap(e) {
    e = e >>> 0;
    let n = Object.create(t.prototype);
    return n.__wbg_ptr = e, C.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, C.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    c.__wbg_minifyconfig_free(e, 0);
  }
  get css() {
    return c.__wbg_get_minifyconfig_css(this.__wbg_ptr) !== 0;
  }
  get html() {
    return c.__wbg_get_minifyconfig_html(this.__wbg_ptr) !== 0;
  }
  get js() {
    return c.__wbg_get_minifyconfig_js(this.__wbg_ptr) !== 0;
  }
  set css(e) {
    c.__wbg_set_minifyconfig_css(this.__wbg_ptr, e);
  }
  set html(e) {
    c.__wbg_set_minifyconfig_html(this.__wbg_ptr, e);
  }
  set js(e) {
    c.__wbg_set_minifyconfig_js(this.__wbg_ptr, e);
  }
};
Symbol.dispose && (h.prototype[Symbol.dispose] = h.prototype.free);
var P = Object.freeze({ Off: 0, 0: "Off", Lossy: 1, 1: "Lossy", Lossless: 2, 2: "Lossless" });
var E = class {
  static {
    __name(this, "E");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, He.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    c.__wbg_r2range_free(e, 0);
  }
  get length() {
    try {
      let _ = c.__wbindgen_add_to_stack_pointer(-16);
      c.__wbg_get_r2range_length(_, this.__wbg_ptr);
      var e = b().getInt32(_ + 0, true), n = b().getFloat64(_ + 8, true);
      return e === 0 ? void 0 : n;
    } finally {
      c.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get offset() {
    try {
      let _ = c.__wbindgen_add_to_stack_pointer(-16);
      c.__wbg_get_r2range_offset(_, this.__wbg_ptr);
      var e = b().getInt32(_ + 0, true), n = b().getFloat64(_ + 8, true);
      return e === 0 ? void 0 : n;
    } finally {
      c.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get suffix() {
    try {
      let _ = c.__wbindgen_add_to_stack_pointer(-16);
      c.__wbg_get_r2range_suffix(_, this.__wbg_ptr);
      var e = b().getInt32(_ + 0, true), n = b().getFloat64(_ + 8, true);
      return e === 0 ? void 0 : n;
    } finally {
      c.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set length(e) {
    c.__wbg_set_r2range_length(this.__wbg_ptr, !u(e), u(e) ? 0 : e);
  }
  set offset(e) {
    c.__wbg_set_r2range_offset(this.__wbg_ptr, !u(e), u(e) ? 0 : e);
  }
  set suffix(e) {
    c.__wbg_set_r2range_suffix(this.__wbg_ptr, !u(e), u(e) ? 0 : e);
  }
};
Symbol.dispose && (E.prototype[Symbol.dispose] = E.prototype.free);
var V = Object.freeze({ Error: 0, 0: "Error", Follow: 1, 1: "Follow", Manual: 2, 2: "Manual" });
function q(t2, e, n) {
  let _ = c.fetch(o(t2), o(e), o(n));
  return d(_);
}
__name(q, "q");
function D(t2, e, n) {
  let _ = c.scheduled(o(t2), o(e), o(n));
  return d(_);
}
__name(D, "D");
function H(t2, e) {
  let n = Error(w(t2, e));
  return o(n);
}
__name(H, "H");
function X(t2, e) {
  let n = String(r(e)), _ = m(n, c.__wbindgen_export, c.__wbindgen_export2), i = l;
  b().setInt32(t2 + 4, i, true), b().setInt32(t2 + 0, _, true);
}
__name(X, "X");
function G(t2) {
  let e = r(t2), n = typeof e == "boolean" ? e : void 0;
  return u(n) ? 16777215 : n ? 1 : 0;
}
__name(G, "G");
function J(t2, e) {
  let n = L(r(e)), _ = m(n, c.__wbindgen_export, c.__wbindgen_export2), i = l;
  b().setInt32(t2 + 4, i, true), b().setInt32(t2 + 0, _, true);
}
__name(J, "J");
function Y(t2) {
  return typeof r(t2) == "function";
}
__name(Y, "Y");
function K(t2) {
  return typeof r(t2) == "string";
}
__name(K, "K");
function Q(t2) {
  return r(t2) === void 0;
}
__name(Q, "Q");
function Z(t2, e) {
  let n = r(e), _ = typeof n == "number" ? n : void 0;
  b().setFloat64(t2 + 8, u(_) ? 0 : _, true), b().setInt32(t2 + 0, !u(_), true);
}
__name(Z, "Z");
function tt(t2, e) {
  let n = r(e), _ = typeof n == "string" ? n : void 0;
  var i = u(_) ? 0 : m(_, c.__wbindgen_export, c.__wbindgen_export2), a = l;
  b().setInt32(t2 + 4, a, true), b().setInt32(t2 + 0, i, true);
}
__name(tt, "tt");
function et(t2, e) {
  throw new Error(w(t2, e));
}
__name(et, "et");
function nt(t2) {
  r(t2)._wbg_cb_unref();
}
__name(nt, "nt");
function rt(t2) {
  let e = r(t2).body;
  return u(e) ? 0 : o(e);
}
__name(rt, "rt");
function _t(t2) {
  let e = r(t2).buffer;
  return o(e);
}
__name(_t, "_t");
function ot(t2) {
  let e = r(t2).byobRequest;
  return u(e) ? 0 : o(e);
}
__name(ot, "ot");
function ct(t2) {
  return r(t2).byteLength;
}
__name(ct, "ct");
function it(t2) {
  return r(t2).byteOffset;
}
__name(it, "it");
function st() {
  return s(function(t2, e) {
    let n = r(t2).call(r(e));
    return o(n);
  }, arguments);
}
__name(st, "st");
function ut() {
  return s(function(t2, e, n) {
    let _ = r(t2).call(r(e), r(n));
    return o(_);
  }, arguments);
}
__name(ut, "ut");
function ft() {
  return s(function(t2, e, n, _) {
    let i = r(t2).call(r(e), r(n), r(_));
    return o(i);
  }, arguments);
}
__name(ft, "ft");
function bt() {
  return s(function(t2, e, n, _, i) {
    let a = r(t2).call(r(e), r(n), r(_), r(i));
    return o(a);
  }, arguments);
}
__name(bt, "bt");
function at(t2) {
  let e = r(t2).cancel();
  return o(e);
}
__name(at, "at");
function gt(t2, e) {
  let n = r(t2).catch(r(e));
  return o(n);
}
__name(gt, "gt");
function dt(t2) {
  let e = r(t2).cause;
  return o(e);
}
__name(dt, "dt");
function wt() {
  return s(function(t2) {
    let e = r(t2).cf;
    return u(e) ? 0 : o(e);
  }, arguments);
}
__name(wt, "wt");
function pt() {
  return s(function(t2) {
    let e = r(t2).cf;
    return u(e) ? 0 : o(e);
  }, arguments);
}
__name(pt, "pt");
function lt() {
  return s(function(t2) {
    r(t2).close();
  }, arguments);
}
__name(lt, "lt");
function yt() {
  return s(function(t2) {
    r(t2).close();
  }, arguments);
}
__name(yt, "yt");
function xt() {
  return s(function(t2, e) {
    let n = r(e).cron, _ = m(n, c.__wbindgen_export, c.__wbindgen_export2), i = l;
    b().setInt32(t2 + 4, i, true), b().setInt32(t2 + 0, _, true);
  }, arguments);
}
__name(xt, "xt");
function ht() {
  return s(function(t2, e) {
    r(t2).enqueue(r(e));
  }, arguments);
}
__name(ht, "ht");
function mt(t2) {
  console.error(r(t2));
}
__name(mt, "mt");
function Ft(t2, e, n, _) {
  let i = r(t2).fetch(w(e, n), r(_));
  return o(i);
}
__name(Ft, "Ft");
function Rt(t2, e, n) {
  let _ = r(t2).fetch(r(e), r(n));
  return o(_);
}
__name(Rt, "Rt");
function St() {
  return s(function(t2) {
    let e = r(t2).getReader();
    return o(e);
  }, arguments);
}
__name(St, "St");
function It(t2) {
  return r(t2).getTime();
}
__name(It, "It");
function Ot() {
  return s(function(t2, e) {
    let n = Reflect.get(r(t2), r(e));
    return o(n);
  }, arguments);
}
__name(Ot, "Ot");
function kt(t2) {
  let e = r(t2).done;
  return u(e) ? 16777215 : e ? 1 : 0;
}
__name(kt, "kt");
function jt(t2) {
  let e = r(t2).value;
  return o(e);
}
__name(jt, "jt");
function Et(t2) {
  let e = r(t2).headers;
  return o(e);
}
__name(Et, "Et");
function zt(t2) {
  let e = r(t2).headers;
  return o(e);
}
__name(zt, "zt");
function At(t2) {
  let e;
  try {
    e = r(t2) instanceof Error;
  } catch {
    e = false;
  }
  return e;
}
__name(At, "At");
function Mt(t2) {
  let e;
  try {
    e = r(t2) instanceof ReadableStream;
  } catch {
    e = false;
  }
  return e;
}
__name(Mt, "Mt");
function Tt(t2) {
  let e;
  try {
    e = r(t2) instanceof Response;
  } catch {
    e = false;
  }
  return e;
}
__name(Tt, "Tt");
function Lt(t2) {
  return r(t2).length;
}
__name(Lt, "Lt");
function qt(t2) {
  console.log(r(t2));
}
__name(qt, "qt");
function Dt(t2, e) {
  let n = r(e).method, _ = m(n, c.__wbindgen_export, c.__wbindgen_export2), i = l;
  b().setInt32(t2 + 4, i, true), b().setInt32(t2 + 0, _, true);
}
__name(Dt, "Dt");
function Ut(t2) {
  let e = h.__wrap(t2);
  return o(e);
}
__name(Ut, "Ut");
function Ct() {
  return o(/* @__PURE__ */ new Date());
}
__name(Ct, "Ct");
function Wt() {
  let t2 = new Object();
  return o(t2);
}
__name(Wt, "Wt");
function Bt() {
  let t2 = new Array();
  return o(t2);
}
__name(Bt, "Bt");
function Nt() {
  return s(function() {
    let t2 = new Headers();
    return o(t2);
  }, arguments);
}
__name(Nt, "Nt");
function $t(t2, e) {
  let n = new Error(w(t2, e));
  return o(n);
}
__name($t, "$t");
function vt(t2, e) {
  try {
    var n = { a: t2, b: e }, _ = /* @__PURE__ */ __name((a, f) => {
      let g = n.a;
      n.a = 0;
      try {
        return Be(g, n.b, a, f);
      } finally {
        n.a = g;
      }
    }, "_");
    let i = new Promise(_);
    return o(i);
  } finally {
    n.a = n.b = 0;
  }
}
__name(vt, "vt");
function Pt() {
  return o(/* @__PURE__ */ new Map());
}
__name(Pt, "Pt");
function Vt(t2, e) {
  let n = new Function(w(t2, e));
  return o(n);
}
__name(Vt, "Vt");
function Ht(t2, e, n) {
  let _ = new Uint8Array(r(t2), e >>> 0, n >>> 0);
  return o(_);
}
__name(Ht, "Ht");
function Xt(t2) {
  let e = new Uint8Array(t2 >>> 0);
  return o(e);
}
__name(Xt, "Xt");
function Gt() {
  return s(function(t2, e) {
    let n = new Response(r(t2), r(e));
    return o(n);
  }, arguments);
}
__name(Gt, "Gt");
function Jt() {
  return s(function(t2, e) {
    let n = new Response(r(t2), r(e));
    return o(n);
  }, arguments);
}
__name(Jt, "Jt");
function Yt() {
  return s(function(t2, e, n) {
    let _ = new Response(t2 === 0 ? void 0 : w(t2, e), r(n));
    return o(_);
  }, arguments);
}
__name(Yt, "Yt");
function Kt() {
  return s(function(t2, e, n) {
    let _ = new Request(w(t2, e), r(n));
    return o(_);
  }, arguments);
}
__name(Kt, "Kt");
function Qt(t2, e, n) {
  Uint8Array.prototype.set.call(B(t2, e), r(n));
}
__name(Qt, "Qt");
function Zt(t2) {
  let e = r(t2).queueMicrotask;
  return o(e);
}
__name(Zt, "Zt");
function te(t2) {
  queueMicrotask(r(t2));
}
__name(te, "te");
function ee(t2) {
  let e = r(t2).read();
  return o(e);
}
__name(ee, "ee");
function ne(t2) {
  r(t2).releaseLock();
}
__name(ne, "ne");
function re(t2) {
  let e = Promise.resolve(r(t2));
  return o(e);
}
__name(re, "re");
function _e() {
  return s(function(t2, e) {
    r(t2).respond(e >>> 0);
  }, arguments);
}
__name(_e, "_e");
function oe() {
  return s(function(t2) {
    return r(t2).scheduledTime;
  }, arguments);
}
__name(oe, "oe");
function ce(t2, e, n) {
  let _ = r(t2).set(r(e), r(n));
  return o(_);
}
__name(ce, "ce");
function ie(t2, e, n) {
  r(t2)[d(e)] = d(n);
}
__name(ie, "ie");
function se(t2, e, n) {
  r(t2)[d(e)] = d(n);
}
__name(se, "se");
function ue() {
  return s(function(t2, e, n) {
    return Reflect.set(r(t2), r(e), r(n));
  }, arguments);
}
__name(ue, "ue");
function fe(t2, e) {
  r(t2).body = r(e);
}
__name(fe, "fe");
function be(t2, e, n) {
  r(t2).set(B(e, n));
}
__name(be, "be");
function ae() {
  return s(function(t2, e, n, _, i) {
    r(t2).set(w(e, n), w(_, i));
  }, arguments);
}
__name(ae, "ae");
function ge(t2, e, n) {
  r(t2)[e >>> 0] = d(n);
}
__name(ge, "ge");
function de(t2, e) {
  r(t2).headers = r(e);
}
__name(de, "de");
function we(t2, e) {
  r(t2).headers = r(e);
}
__name(we, "we");
function pe(t2, e, n) {
  r(t2).method = w(e, n);
}
__name(pe, "pe");
function le(t2, e) {
  r(t2).redirect = $e[e];
}
__name(le, "le");
function ye(t2, e) {
  r(t2).signal = r(e);
}
__name(ye, "ye");
function xe(t2, e) {
  r(t2).status = e;
}
__name(xe, "xe");
function he() {
  let t2 = typeof global > "u" ? null : global;
  return u(t2) ? 0 : o(t2);
}
__name(he, "he");
function me() {
  let t2 = typeof globalThis > "u" ? null : globalThis;
  return u(t2) ? 0 : o(t2);
}
__name(me, "me");
function Fe() {
  let t2 = typeof self > "u" ? null : self;
  return u(t2) ? 0 : o(t2);
}
__name(Fe, "Fe");
function Re() {
  let t2 = typeof window > "u" ? null : window;
  return u(t2) ? 0 : o(t2);
}
__name(Re, "Re");
function Se(t2) {
  return r(t2).status;
}
__name(Se, "Se");
function Ie() {
  return s(function(t2) {
    let e = JSON.stringify(r(t2));
    return o(e);
  }, arguments);
}
__name(Ie, "Ie");
function Oe(t2, e, n) {
  let _ = r(t2).then(r(e), r(n));
  return o(_);
}
__name(Oe, "Oe");
function ke(t2, e) {
  let n = r(t2).then(r(e));
  return o(n);
}
__name(ke, "ke");
function je(t2) {
  let e = r(t2).toString();
  return o(e);
}
__name(je, "je");
function Ee(t2, e) {
  let n = r(e).url, _ = m(n, c.__wbindgen_export, c.__wbindgen_export2), i = l;
  b().setInt32(t2 + 4, i, true), b().setInt32(t2 + 0, _, true);
}
__name(Ee, "Ee");
function ze(t2) {
  let e = r(t2).view;
  return u(e) ? 0 : o(e);
}
__name(ze, "ze");
function Ae() {
  return s(function(t2) {
    let e = r(t2).webSocket;
    return u(e) ? 0 : o(e);
  }, arguments);
}
__name(Ae, "Ae");
function Me(t2, e) {
  let n = Ge(t2, e, c.__wasm_bindgen_func_elem_1038, We);
  return o(n);
}
__name(Me, "Me");
function Te(t2) {
  return o(t2);
}
__name(Te, "Te");
function Le(t2) {
  return o(t2);
}
__name(Le, "Le");
function qe(t2, e) {
  let n = w(t2, e);
  return o(n);
}
__name(qe, "qe");
function De(t2) {
  let e = BigInt.asUintN(64, t2);
  return o(e);
}
__name(De, "De");
function Ue(t2) {
  let e = r(t2);
  return o(e);
}
__name(Ue, "Ue");
function Ce(t2) {
  d(t2);
}
__name(Ce, "Ce");
function We(t2, e, n) {
  c.__wasm_bindgen_func_elem_1039(t2, e, o(n));
}
__name(We, "We");
function Be(t2, e, n, _) {
  c.__wasm_bindgen_func_elem_1190(t2, e, o(n), o(_));
}
__name(Be, "Be");
var Ne = ["bytes"];
var $e = ["follow", "error", "manual"];
var ve = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t2) => c.__wbg_intounderlyingbytesource_free(t2 >>> 0, 1));
var Pe = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t2) => c.__wbg_intounderlyingsink_free(t2 >>> 0, 1));
var Ve = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t2) => c.__wbg_intounderlyingsource_free(t2 >>> 0, 1));
var C = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t2) => c.__wbg_minifyconfig_free(t2 >>> 0, 1));
var He = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t2) => c.__wbg_r2range_free(t2 >>> 0, 1));
function o(t2) {
  S === p.length && p.push(p.length + 1);
  let e = S;
  return S = p[e], p[e] = t2, e;
}
__name(o, "o");
var W = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t2) => t2.dtor(t2.a, t2.b));
function L(t2) {
  let e = typeof t2;
  if (e == "number" || e == "boolean" || t2 == null) return `${t2}`;
  if (e == "string") return `"${t2}"`;
  if (e == "symbol") {
    let i = t2.description;
    return i == null ? "Symbol" : `Symbol(${i})`;
  }
  if (e == "function") {
    let i = t2.name;
    return typeof i == "string" && i.length > 0 ? `Function(${i})` : "Function";
  }
  if (Array.isArray(t2)) {
    let i = t2.length, a = "[";
    i > 0 && (a += L(t2[0]));
    for (let f = 1; f < i; f++) a += ", " + L(t2[f]);
    return a += "]", a;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(t2)), _;
  if (n && n.length > 1) _ = n[1];
  else return toString.call(t2);
  if (_ == "Object") try {
    return "Object(" + JSON.stringify(t2) + ")";
  } catch {
    return "Object";
  }
  return t2 instanceof Error ? `${t2.name}: ${t2.message}
${t2.stack}` : _;
}
__name(L, "L");
function Xe(t2) {
  t2 < 132 || (p[t2] = S, S = t2);
}
__name(Xe, "Xe");
function B(t2, e) {
  return t2 = t2 >>> 0, R().subarray(t2 / 1, t2 / 1 + e);
}
__name(B, "B");
var x = null;
function b() {
  return (x === null || x.buffer.detached === true || x.buffer.detached === void 0 && x.buffer !== c.memory.buffer) && (x = new DataView(c.memory.buffer)), x;
}
__name(b, "b");
function w(t2, e) {
  return t2 = t2 >>> 0, Ye(t2, e);
}
__name(w, "w");
var z = null;
function R() {
  return (z === null || z.byteLength === 0) && (z = new Uint8Array(c.memory.buffer)), z;
}
__name(R, "R");
function r(t2) {
  return p[t2];
}
__name(r, "r");
function s(t2, e) {
  try {
    return t2.apply(this, e);
  } catch (n) {
    c.__wbindgen_export3(o(n));
  }
}
__name(s, "s");
var p = new Array(128).fill(void 0);
p.push(void 0, null, true, false);
var S = p.length;
function u(t2) {
  return t2 == null;
}
__name(u, "u");
function Ge(t2, e, n, _) {
  let i = { a: t2, b: e, cnt: 1, dtor: n }, a = /* @__PURE__ */ __name((...f) => {
    i.cnt++;
    let g = i.a;
    i.a = 0;
    try {
      return _(g, i.b, ...f);
    } finally {
      i.a = g, a._wbg_cb_unref();
    }
  }, "a");
  return a._wbg_cb_unref = () => {
    --i.cnt === 0 && (i.dtor(i.a, i.b), i.a = 0, W.unregister(i));
  }, W.register(a, i, i), a;
}
__name(Ge, "Ge");
function m(t2, e, n) {
  if (n === void 0) {
    let g = I.encode(t2), F = e(g.length, 1) >>> 0;
    return R().subarray(F, F + g.length).set(g), l = g.length, F;
  }
  let _ = t2.length, i = e(_, 1) >>> 0, a = R(), f = 0;
  for (; f < _; f++) {
    let g = t2.charCodeAt(f);
    if (g > 127) break;
    a[i + f] = g;
  }
  if (f !== _) {
    f !== 0 && (t2 = t2.slice(f)), i = n(i, _, _ = f + t2.length * 3, 1) >>> 0;
    let g = R().subarray(i + f, i + _), F = I.encodeInto(t2, g);
    f += F.written, i = n(i, _, f, 1) >>> 0;
  }
  return l = f, i;
}
__name(m, "m");
function d(t2) {
  let e = r(t2);
  return Xe(t2), e;
}
__name(d, "d");
var A = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
A.decode();
var Je = 2146435072;
var T = 0;
function Ye(t2, e) {
  return T += e, T >= Je && (A = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), A.decode(), T = e), A.decode(R().subarray(t2, t2 + e));
}
__name(Ye, "Ye");
var I = new TextEncoder();
"encodeInto" in I || (I.encodeInto = function(t2, e) {
  let n = I.encode(t2);
  return e.set(n), { read: t2.length, written: n.length };
});
var l = 0;
var c;
function U(t2) {
  c = t2;
}
__name(U, "U");
var N = new WebAssembly.Instance(Ke, { "./index_bg.js": y });
U(N.exports);
N.exports.__wbindgen_start?.();
var M = class extends Qe {
  static {
    __name(this, "M");
  }
  async fetch(e) {
    return await q(e, this.env, this.ctx);
  }
  async queue(e) {
    return await (void 0)(e, this.env, this.ctx);
  }
  async scheduled(e) {
    return await D(e, this.env, this.ctx);
  }
};
var Ze = ["IntoUnderlyingByteSource", "IntoUnderlyingSink", "IntoUnderlyingSource", "MinifyConfig", "PolishConfig", "R2Range", "RequestRedirect", "fetch", "queue", "scheduled", "getMemory"];
Object.keys(y).map((t2) => {
  Ze.includes(t2) | t2.startsWith("__") || (M.prototype[t2] = y[t2]);
});
var rn = M;

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
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-oqyLsd/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = rn;

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

// .wrangler/tmp/bundle-oqyLsd/middleware-loader.entry.ts
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
  O as IntoUnderlyingByteSource,
  k as IntoUnderlyingSink,
  j as IntoUnderlyingSource,
  h as MinifyConfig,
  P as PolishConfig,
  E as R2Range,
  V as RequestRedirect,
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  H as __wbg_Error_8c4e43fe74559d73,
  X as __wbg_String_8f0eb39a4a4c2f66,
  G as __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25,
  J as __wbg___wbindgen_debug_string_0bc8482c6e3508ae,
  Y as __wbg___wbindgen_is_function_0095a73b8b156f76,
  K as __wbg___wbindgen_is_string_cd444516edc5b180,
  Q as __wbg___wbindgen_is_undefined_9e4d92534c42d778,
  Z as __wbg___wbindgen_number_get_8ff4255516ccad3e,
  tt as __wbg___wbindgen_string_get_72fb696202c56729,
  et as __wbg___wbindgen_throw_be289d5034ed271b,
  nt as __wbg__wbg_cb_unref_d9b87ff7982e3b21,
  rt as __wbg_body_3a0b4437dadea6bf,
  _t as __wbg_buffer_26d0910f3a5bc899,
  ot as __wbg_byobRequest_80e594e6da4e1af7,
  ct as __wbg_byteLength_3417f266f4bf562a,
  it as __wbg_byteOffset_f88547ca47c86358,
  st as __wbg_call_389efe28435a9388,
  ut as __wbg_call_4708e0c13bdc8e95,
  ft as __wbg_call_812d25f1510c13c8,
  bt as __wbg_call_e8c868596c950cf6,
  at as __wbg_cancel_2c0a0a251ff6b2b7,
  gt as __wbg_catch_c1f8c7623b458214,
  dt as __wbg_cause_0fc168d4eaec87cc,
  wt as __wbg_cf_194957b722a72988,
  pt as __wbg_cf_2d8126b4ac84e631,
  lt as __wbg_close_06dfa0a815b9d71f,
  yt as __wbg_close_a79afee31de55b36,
  xt as __wbg_cron_de8ccb5314e15877,
  ht as __wbg_enqueue_2c63f2044f257c3e,
  mt as __wbg_error_9a7fe3f932034cde,
  Ft as __wbg_fetch_2c1e75cf1cd9a524,
  Rt as __wbg_fetch_c97461e1e8f610cd,
  St as __wbg_getReader_48e00749fe3f6089,
  It as __wbg_getTime_1e3cd1391c5c3995,
  Ot as __wbg_get_b3ed3ad4be2bc8ac,
  kt as __wbg_get_done_1ad1c16537f444c6,
  jt as __wbg_get_value_6b77a1b7b90c9200,
  Et as __wbg_headers_59a2938db9f80985,
  zt as __wbg_headers_5a897f7fee9a0571,
  At as __wbg_instanceof_Error_8573fe0b0b480f46,
  Mt as __wbg_instanceof_ReadableStream_8ab3825017e203e9,
  Tt as __wbg_instanceof_Response_ee1d54d79ae41977,
  Lt as __wbg_length_32ed9a279acd054c,
  qt as __wbg_log_6b5ca2e6124b2808,
  Dt as __wbg_method_a9e9b2fcba5440fb,
  Ut as __wbg_minifyconfig_new,
  Ct as __wbg_new_0_73afc35eb544e539,
  Wt as __wbg_new_361308b2356cecd0,
  Bt as __wbg_new_3eb36ae241fe6f44,
  Nt as __wbg_new_64284bd487f9d239,
  $t as __wbg_new_72b49615380db768,
  vt as __wbg_new_b5d9e2fb389fef91,
  Pt as __wbg_new_dca287b076112a51,
  Vt as __wbg_new_no_args_1c7c842f08d00ebb,
  Ht as __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1,
  Xt as __wbg_new_with_length_a2c39cbe88fd8ff1,
  Gt as __wbg_new_with_opt_buffer_source_and_init_8c10f2615c78809b,
  Jt as __wbg_new_with_opt_readable_stream_and_init_8a044befefe6d8bb,
  Yt as __wbg_new_with_opt_str_and_init_4fbb71523b271b6e,
  Kt as __wbg_new_with_str_and_init_a61cbc6bdef21614,
  Qt as __wbg_prototypesetcall_bdcdcc5842e4d77d,
  Zt as __wbg_queueMicrotask_0aa0a927f78f5d98,
  te as __wbg_queueMicrotask_5bb536982f78a56f,
  ee as __wbg_read_68fd377df67e19b0,
  ne as __wbg_releaseLock_aa5846c2494b3032,
  re as __wbg_resolve_002c4b7d9d8f6b64,
  _e as __wbg_respond_bf6ab10399ca8722,
  oe as __wbg_scheduledTime_1a75457da9ac6475,
  ce as __wbg_set_1eb0999cf5d27fc8,
  ie as __wbg_set_3807d5f0bfc24aa7,
  se as __wbg_set_3f1d0b984ed272ed,
  ue as __wbg_set_6cb8631f80447a67,
  fe as __wbg_set_body_9a7e00afe3cfe244,
  be as __wbg_set_cc56eefd2dd91957,
  ae as __wbg_set_db769d02949a271d,
  ge as __wbg_set_f43e577aea94465b,
  de as __wbg_set_headers_bbdfebba19309590,
  we as __wbg_set_headers_cfc5f4b2c1f20549,
  pe as __wbg_set_method_c3e20375f5ae7fac,
  le as __wbg_set_redirect_a7956fa3f817cbbc,
  ye as __wbg_set_signal_f2d3f8599248896d,
  xe as __wbg_set_status_fa41f71c4575bca5,
  U as __wbg_set_wasm,
  he as __wbg_static_accessor_GLOBAL_12837167ad935116,
  me as __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f,
  Fe as __wbg_static_accessor_SELF_a621d3dfbb60d0ce,
  Re as __wbg_static_accessor_WINDOW_f8727f0cf888e0bd,
  Se as __wbg_status_89d7e803db911ee7,
  Ie as __wbg_stringify_8d1cc6ff383e8bae,
  Oe as __wbg_then_0d9fe2c7b1857d32,
  ke as __wbg_then_b9e7b3b5f1a9e1b5,
  je as __wbg_toString_029ac24421fd7a24,
  Ee as __wbg_url_36c39f6580d05409,
  ze as __wbg_view_6c32e7184b8606ad,
  Ae as __wbg_webSocket_d11bc2bcaeace27a,
  Me as __wbindgen_cast_0000000000000001,
  Te as __wbindgen_cast_0000000000000002,
  Le as __wbindgen_cast_0000000000000003,
  qe as __wbindgen_cast_0000000000000004,
  De as __wbindgen_cast_0000000000000005,
  Ue as __wbindgen_object_clone_ref,
  Ce as __wbindgen_object_drop_ref,
  middleware_loader_entry_default as default,
  q as fetch,
  D as scheduled,
  Ke as wasmModule
};
//# sourceMappingURL=shim.js.map
