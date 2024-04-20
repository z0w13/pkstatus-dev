import { b4 as BaseTransition, b5 as BaseTransitionPropsValidators, b6 as Comment, b7 as DeprecationTypes, b8 as EffectScope, b9 as ErrorCodes, ba as ErrorTypeStrings, aF as Fragment, bb as KeepAlive, bc as ReactiveEffect, bd as Static, be as Suspense, bf as Teleport, bg as Text, bh as TrackOpTypes, bi as Transition, bj as TransitionGroup, bk as TriggerOpTypes, bl as VueElement, bm as assertNumber, bn as callWithAsyncErrorHandling, bo as callWithErrorHandling, bp as camelize, bq as capitalize, br as cloneVNode, bs as compatUtils, d as computed, bt as createApp, W as createBlock, a4 as createCommentVNode, aE as createElementBlock, a2 as createBaseVNode, bu as createHydrationRenderer, bv as createPropsRestProxy, bw as createRenderer, bx as createSSRApp, aW as createSlots, by as createStaticVNode, a1 as createTextVNode, Y as createVNode, bz as customRef, bA as defineAsyncComponent, Q as defineComponent, bB as defineCustomElement, bC as defineEmits, bD as defineExpose, bE as defineModel, bF as defineOptions, bG as defineProps, bH as defineSSRCustomElement, bI as defineSlots, bJ as devtools, bK as effect, bL as effectScope, g as getCurrentInstance, bM as getCurrentScope, bN as getTransitionRawChildren, bO as guardReactiveProps, h, bP as handleError, bQ as hasInjectionContext, bR as hydrate, bS as initCustomFormatter, bT as initDirectivesForSSR, i as inject, bU as isMemoSame, bV as isProxy, bW as isReactive, bX as isReadonly, a8 as isRef, bY as isRuntimeOnly, bZ as isShallow, b_ as isVNode, b$ as markRaw, c0 as mergeDefaults, c1 as mergeModels, c2 as mergeProps, v as nextTick, Z as normalizeClass, c3 as normalizeProps, aM as normalizeStyle, aq as onActivated, c4 as onBeforeMount, o as onBeforeUnmount, c5 as onBeforeUpdate, ap as onDeactivated, c6 as onErrorCaptured, t as onMounted, c7 as onRenderTracked, c8 as onRenderTriggered, c9 as onScopeDispose, ca as onServerPrefetch, K as onUnmounted, cb as onUpdated, V as openBlock, b3 as popScopeId, A as provide, cc as proxyRefs, b2 as pushScopeId, cd as queuePostFlushCb, J as reactive, ce as readonly, r as ref, cf as registerRuntimeCompiler, cg as render, aO as renderList, ch as renderSlot, U as resolveComponent, ci as resolveDirective, cj as resolveDynamicComponent, ck as resolveFilter, cl as resolveTransitionHooks, cm as setBlockTracking, cn as setDevtoolsHook, co as setTransitionHooks, cp as shallowReactive, cq as shallowReadonly, cr as shallowRef, cs as ssrContextKey, ct as ssrUtils, cu as stop, a5 as toDisplayString, cv as toHandlerKey, cw as toHandlers, cx as toRaw, cy as toRef, cz as toRefs, cA as toValue, cB as transformVNodeArgs, cC as triggerRef, _ as unref, cD as useAttrs, cE as useCssModule, cF as useCssVars, aS as useModel, cG as useSSRContext, cH as useSlots, cI as useTransitionState, cJ as vModelCheckbox, cK as vModelDynamic, cL as vModelRadio, cM as vModelSelect, cN as vModelText, cO as vShow, cP as version, cQ as warn, w as watch, cR as watchEffect, cS as watchPostEffect, cT as watchSyncEffect, cU as withAsyncContext, X as withCtx, cV as withDefaults, x as withDirectives, cW as withKeys, cX as withMemo, b0 as withModifiers, cY as withScopeId, cZ as getAugmentedNamespace, R as useSettingsStore, T as storeToRefs, aa as QCard, ab as QCardSection, ac as QCardActions, a0 as QBtn, af as _export_sfc } from "./index-C1u-_TOv.js";
import { Q as QMarkupTable } from "./QMarkupTable-BsLt63RP.js";
import { I as InitialFallbackAvatar } from "./InitialFallbackAvatar-B9wHc8ll.js";
import { R as RelativeTimeDisplay } from "./RelativeTimeDisplay-SNX72-cs.js";
/**
* vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const compile = () => {
};
const vue_runtime_esmBundler = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition,
  BaseTransitionPropsValidators,
  Comment,
  DeprecationTypes,
  EffectScope,
  ErrorCodes,
  ErrorTypeStrings,
  Fragment,
  KeepAlive,
  ReactiveEffect,
  Static,
  Suspense,
  Teleport,
  Text,
  TrackOpTypes,
  Transition,
  TransitionGroup,
  TriggerOpTypes,
  VueElement,
  assertNumber,
  callWithAsyncErrorHandling,
  callWithErrorHandling,
  camelize,
  capitalize,
  cloneVNode,
  compatUtils,
  compile,
  computed,
  createApp,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createElementVNode: createBaseVNode,
  createHydrationRenderer,
  createPropsRestProxy,
  createRenderer,
  createSSRApp,
  createSlots,
  createStaticVNode,
  createTextVNode,
  createVNode,
  customRef,
  defineAsyncComponent,
  defineComponent,
  defineCustomElement,
  defineEmits,
  defineExpose,
  defineModel,
  defineOptions,
  defineProps,
  defineSSRCustomElement,
  defineSlots,
  devtools,
  effect,
  effectScope,
  getCurrentInstance,
  getCurrentScope,
  getTransitionRawChildren,
  guardReactiveProps,
  h,
  handleError,
  hasInjectionContext,
  hydrate,
  initCustomFormatter,
  initDirectivesForSSR,
  inject,
  isMemoSame,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  isRuntimeOnly,
  isShallow,
  isVNode,
  markRaw,
  mergeDefaults,
  mergeModels,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onScopeDispose,
  onServerPrefetch,
  onUnmounted,
  onUpdated,
  openBlock,
  popScopeId,
  provide,
  proxyRefs,
  pushScopeId,
  queuePostFlushCb,
  reactive,
  readonly,
  ref,
  registerRuntimeCompiler,
  render,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDirective,
  resolveDynamicComponent,
  resolveFilter,
  resolveTransitionHooks,
  setBlockTracking,
  setDevtoolsHook,
  setTransitionHooks,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  ssrContextKey,
  ssrUtils,
  stop,
  toDisplayString,
  toHandlerKey,
  toHandlers,
  toRaw,
  toRef,
  toRefs,
  toValue,
  transformVNodeArgs,
  triggerRef,
  unref,
  useAttrs,
  useCssModule,
  useCssVars,
  useModel,
  useSSRContext,
  useSlots,
  useTransitionState,
  vModelCheckbox,
  vModelDynamic,
  vModelRadio,
  vModelSelect,
  vModelText,
  vShow,
  version,
  warn,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
  withAsyncContext,
  withCtx,
  withDefaults,
  withDirectives,
  withKeys,
  withMemo,
  withModifiers,
  withScopeId
}, Symbol.toStringTag, { value: "Module" }));
var vue3Fitty_common = { exports: {} };
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(vue_runtime_esmBundler);
(function(module) {
  (function() {
    var __webpack_modules__ = {
      /***/
      744: (
        /***/
        function(__unused_webpack_module, exports) {
          exports.Z = (sfc, props) => {
            const target = sfc.__vccOpts || sfc;
            for (const [key, val] of props) {
              target[key] = val;
            }
            return target;
          };
        }
      )
      /******/
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
      var cachedModule = __webpack_module_cache__[moduleId];
      if (cachedModule !== void 0) {
        return cachedModule.exports;
      }
      var module2 = __webpack_module_cache__[moduleId] = {
        /******/
        // no module.id needed
        /******/
        // no module.loaded needed
        /******/
        exports: {}
        /******/
      };
      __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
      return module2.exports;
    }
    !function() {
      __webpack_require__.d = function(exports, definition) {
        for (var key in definition) {
          if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          }
        }
      };
    }();
    !function() {
      __webpack_require__.o = function(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      };
    }();
    !function() {
      __webpack_require__.r = function(exports) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports, "__esModule", { value: true });
      };
    }();
    !function() {
      __webpack_require__.p = "";
    }();
    var __webpack_exports__ = {};
    !function() {
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        Fitty: function() {
          return (
            /* reexport */
            Fitty
          );
        },
        "default": function() {
          return (
            /* binding */
            entry_lib
          );
        }
      });
      if (typeof window !== "undefined") {
        var currentScript = window.document.currentScript;
        var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
        if (src) {
          __webpack_require__.p = src[1];
        }
      }
      var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require$$0;
      const _hoisted_18 = ["id"];
      function render2(_ctx, _cache, $props, $setup, $data, $options) {
        return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
          class: "mainwrap",
          id: _ctx.contentID
        }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "content", {}, void 0, true), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "default", {}, void 0, true)], 8, _hoisted_18);
      }
      var e = function(e2) {
        if (e2) {
          var t = function(e3) {
            return [].slice.call(e3);
          }, n = 0, i = 1, r = 2, o = 3, a = [], l = null, u = "requestAnimationFrame" in e2 ? function() {
            e2.cancelAnimationFrame(l), l = e2.requestAnimationFrame(function() {
              return s(a.filter(function(e3) {
                return e3.dirty && e3.active;
              }));
            });
          } : function() {
          }, c = function(e3) {
            return function() {
              a.forEach(function(t2) {
                return t2.dirty = e3;
              }), u();
            };
          }, s = function(e3) {
            e3.filter(function(e4) {
              return !e4.styleComputed;
            }).forEach(function(e4) {
              e4.styleComputed = m(e4);
            }), e3.filter(y).forEach(v);
            var t2 = e3.filter(p);
            t2.forEach(d), t2.forEach(function(e4) {
              v(e4), f(e4);
            }), t2.forEach(S);
          }, f = function(e3) {
            return e3.dirty = n;
          }, d = function(e3) {
            e3.availableWidth = e3.element.parentNode.clientWidth, e3.currentWidth = e3.element.scrollWidth, e3.previousFontSize = e3.currentFontSize, e3.currentFontSize = Math.min(Math.max(e3.minSize, e3.availableWidth / e3.currentWidth * e3.previousFontSize), e3.maxSize), e3.whiteSpace = e3.multiLine && e3.currentFontSize === e3.minSize ? "normal" : "nowrap";
          }, p = function(e3) {
            return e3.dirty !== r || e3.dirty === r && e3.element.parentNode.clientWidth !== e3.availableWidth;
          }, m = function(t2) {
            var n2 = e2.getComputedStyle(t2.element, null);
            return t2.currentFontSize = parseFloat(n2.getPropertyValue("font-size")), t2.display = n2.getPropertyValue("display"), t2.whiteSpace = n2.getPropertyValue("white-space"), true;
          }, y = function(e3) {
            var t2 = false;
            return !e3.preStyleTestCompleted && (/inline-/.test(e3.display) || (t2 = true, e3.display = "inline-block"), "nowrap" !== e3.whiteSpace && (t2 = true, e3.whiteSpace = "nowrap"), e3.preStyleTestCompleted = true, t2);
          }, v = function(e3) {
            e3.element.style.whiteSpace = e3.whiteSpace, e3.element.style.display = e3.display, e3.element.style.fontSize = e3.currentFontSize + "px";
          }, S = function(e3) {
            e3.element.dispatchEvent(new CustomEvent("fit", { detail: { oldValue: e3.previousFontSize, newValue: e3.currentFontSize, scaleFactor: e3.currentFontSize / e3.previousFontSize } }));
          }, h2 = function(e3, t2) {
            return function() {
              e3.dirty = t2, e3.active && u();
            };
          }, w = function(e3) {
            return function() {
              a = a.filter(function(t2) {
                return t2.element !== e3.element;
              }), e3.observeMutations && e3.observer.disconnect(), e3.element.style.whiteSpace = e3.originalStyle.whiteSpace, e3.element.style.display = e3.originalStyle.display, e3.element.style.fontSize = e3.originalStyle.fontSize;
            };
          }, b = function(e3) {
            return function() {
              e3.active || (e3.active = true, u());
            };
          }, z = function(e3) {
            return function() {
              return e3.active = false;
            };
          }, F = function(e3) {
            e3.observeMutations && (e3.observer = new MutationObserver(h2(e3, i)), e3.observer.observe(e3.element, e3.observeMutations));
          }, g = { minSize: 16, maxSize: 512, multiLine: true, observeMutations: "MutationObserver" in e2 && { subtree: true, childList: true, characterData: true } }, W = null, E = function() {
            e2.clearTimeout(W), W = e2.setTimeout(c(r), x.observeWindowDelay);
          }, M = ["resize", "orientationchange"];
          return Object.defineProperty(x, "observeWindow", { set: function(t2) {
            var n2 = "".concat(t2 ? "add" : "remove", "EventListener");
            M.forEach(function(t3) {
              e2[n2](t3, E);
            });
          } }), x.observeWindow = true, x.observeWindowDelay = 100, x.fitAll = c(o), x;
        }
        function C(e3, t2) {
          var n2 = Object.assign({}, g, t2), i2 = e3.map(function(e4) {
            var t3 = Object.assign({}, n2, { element: e4, active: true });
            return function(e5) {
              e5.originalStyle = { whiteSpace: e5.element.style.whiteSpace, display: e5.element.style.display, fontSize: e5.element.style.fontSize }, F(e5), e5.newbie = true, e5.dirty = true, a.push(e5);
            }(t3), { element: e4, fit: h2(t3, o), unfreeze: b(t3), freeze: z(t3), unsubscribe: w(t3) };
          });
          return u(), i2;
        }
        function x(e3) {
          var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return "string" == typeof e3 ? C(t(document.querySelectorAll(e3)), n2) : C([e3], n2)[0];
        }
      }("undefined" == typeof window ? null : window);
      var fitty_module = e;
      const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
      var esm_browser_native = {
        randomUUID
      };
      let getRandomValues;
      const rnds8 = new Uint8Array(16);
      function rng() {
        if (!getRandomValues) {
          getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
          if (!getRandomValues) {
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
          }
        }
        return getRandomValues(rnds8);
      }
      const byteToHex = [];
      for (let i = 0; i < 256; ++i) {
        byteToHex.push((i + 256).toString(16).slice(1));
      }
      function unsafeStringify(arr, offset = 0) {
        return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
      }
      function v4(options, buf, offset) {
        if (esm_browser_native.randomUUID && !buf && !options) {
          return esm_browser_native.randomUUID();
        }
        options = options || {};
        const rnds = options.random || (options.rng || rng)();
        rnds[6] = rnds[6] & 15 | 64;
        rnds[8] = rnds[8] & 63 | 128;
        if (buf) {
          offset = offset || 0;
          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
          }
          return buf;
        }
        return unsafeStringify(rnds);
      }
      var esm_browser_v4 = v4;
      var Fittyvue_type_script_lang_ts = (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
        setup() {
          const contentID = "fitty-" + esm_browser_v4();
          return {
            contentID
          };
        },
        mounted() {
          this.$nextTick(() => {
            fitty_module("#" + this.contentID, this.options);
          });
        },
        name: "lumenpink-fitty",
        props: {
          options: Object
        }
      });
      var exportHelper = __webpack_require__(744);
      const __exports__ = /* @__PURE__ */ (0, exportHelper.Z)(Fittyvue_type_script_lang_ts, [["render", render2], ["__scopeId", "data-v-85cf7f76"]]);
      var Fitty = __exports__;
      const components_plugin = {
        install(app) {
          app.component(Fitty.name, Fitty);
        }
      };
      var components = components_plugin;
      var entry_lib = components;
    }();
    module.exports = __webpack_exports__;
  })();
})(vue3Fitty_common);
var vue3Fitty_commonExports = vue3Fitty_common.exports;
const _withScopeId = (n) => (pushScopeId("data-v-bc5d2d8d"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "col-auto self-center" };
const _hoisted_2 = { class: "col q-ml-md self-center" };
const _hoisted_3 = ["src"];
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "td",
  null,
  "ID",
  -1
  /* HOISTED */
));
const _hoisted_5 = { key: 0 };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "td",
  null,
  "Pronouns",
  -1
  /* HOISTED */
));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "td",
  null,
  "System",
  -1
  /* HOISTED */
));
const _hoisted_8 = { key: 1 };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "td",
  null,
  "Messages Sent",
  -1
  /* HOISTED */
));
const _hoisted_10 = { key: 2 };
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "td",
  null,
  "Last Message",
  -1
  /* HOISTED */
));
const _hoisted_12 = { key: 3 };
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "td",
  null,
  "Birthday",
  -1
  /* HOISTED */
));
const _hoisted_14 = { key: 4 };
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "td",
  null,
  "Color",
  -1
  /* HOISTED */
));
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "td",
  null,
  "Created At",
  -1
  /* HOISTED */
));
const _hoisted_17 = { class: "description" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MemberCard",
  props: {
    member: { type: Object, required: true },
    system: { type: Object, required: true },
    details: { type: Boolean, required: false, default: true },
    popup: { type: Boolean, required: false, default: false }
  },
  setup(__props) {
    const settings = useSettingsStore();
    const { detectPronouns } = storeToRefs(settings);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, null, {
        default: withCtx(() => {
          var _a;
          return [
            createVNode(QCardSection, { class: "row" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_1, [
                  _ctx.member.avatarUrl ? (openBlock(), createBlock(InitialFallbackAvatar, {
                    key: 0,
                    size: "64px",
                    url: _ctx.member.avatarUrl,
                    name: _ctx.member.getName(unref(detectPronouns))
                  }, null, 8, ["url", "name"])) : createCommentVNode("v-if", true)
                ]),
                createBaseVNode("div", _hoisted_2, [
                  createVNode(unref(vue3Fitty_commonExports.Fitty), {
                    style: { "line-height": "100%" },
                    options: { maxSize: 100 }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(_ctx.member.getName(unref(detectPronouns))),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ])
              ]),
              _: 1
              /* STABLE */
            }),
            _ctx.member.bannerUrl ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: _ctx.member.bannerUrl
            }, null, 8, _hoisted_3)) : createCommentVNode("v-if", true),
            _ctx.popup ? (openBlock(), createBlock(QCardActions, {
              key: 1,
              class: "bg-primary"
            }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  flat: "",
                  label: "View System",
                  to: `/lookup/system/${_ctx.system.id}`
                }, null, 8, ["to"])
              ]),
              _: 1
              /* STABLE */
            })) : createCommentVNode("v-if", true),
            _ctx.details ? (openBlock(), createBlock(QCardSection, { key: 2 }, {
              default: withCtx(() => [
                createVNode(QMarkupTable, {
                  flat: "",
                  separator: "horizontal",
                  style: { "overflow": "hidden" }
                }, {
                  default: withCtx(() => [
                    createBaseVNode("tbody", null, [
                      createBaseVNode("tr", null, [
                        _hoisted_4,
                        createBaseVNode(
                          "td",
                          null,
                          toDisplayString(_ctx.member.id),
                          1
                          /* TEXT */
                        )
                      ]),
                      _ctx.member.getPronouns(unref(detectPronouns)) ? (openBlock(), createElementBlock("tr", _hoisted_5, [
                        _hoisted_6,
                        createBaseVNode(
                          "td",
                          null,
                          toDisplayString(_ctx.member.getPronouns(unref(detectPronouns))),
                          1
                          /* TEXT */
                        )
                      ])) : createCommentVNode("v-if", true),
                      createBaseVNode("tr", null, [
                        _hoisted_7,
                        createBaseVNode(
                          "td",
                          null,
                          toDisplayString(_ctx.system.getName(unref(detectPronouns))),
                          1
                          /* TEXT */
                        )
                      ]),
                      _ctx.member.messageCount ? (openBlock(), createElementBlock("tr", _hoisted_8, [
                        _hoisted_9,
                        createBaseVNode(
                          "td",
                          null,
                          toDisplayString(_ctx.member.messageCount.toLocaleString()),
                          1
                          /* TEXT */
                        )
                      ])) : createCommentVNode("v-if", true),
                      _ctx.member.lastMessageAt ? (openBlock(), createElementBlock("tr", _hoisted_10, [
                        _hoisted_11,
                        createBaseVNode("td", null, [
                          createVNode(RelativeTimeDisplay, {
                            time: _ctx.member.lastMessageAt
                          }, null, 8, ["time"])
                        ])
                      ])) : createCommentVNode("v-if", true),
                      _ctx.member.birthday ? (openBlock(), createElementBlock("tr", _hoisted_12, [
                        _hoisted_13,
                        createBaseVNode(
                          "td",
                          null,
                          toDisplayString(_ctx.member.birthday.format("YYYY-MM-DD")),
                          1
                          /* TEXT */
                        )
                      ])) : createCommentVNode("v-if", true),
                      _ctx.member.color ? (openBlock(), createElementBlock("tr", _hoisted_14, [
                        _hoisted_15,
                        createBaseVNode(
                          "td",
                          {
                            style: normalizeStyle({
                              color: `#${_ctx.member.color}`,
                              fontSize: "48px",
                              lineHeight: "16px",
                              textIndent: "-4px"
                            })
                          },
                          " • ",
                          4
                          /* STYLE */
                        )
                      ])) : createCommentVNode("v-if", true),
                      createBaseVNode("tr", null, [
                        _hoisted_16,
                        createBaseVNode(
                          "td",
                          null,
                          toDisplayString(_ctx.member.createdAt.format("YYYY-MM-DD")),
                          1
                          /* TEXT */
                        )
                      ])
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            })) : createCommentVNode("v-if", true),
            !!((_a = _ctx.member.description) == null ? void 0 : _a.length) ? (openBlock(), createBlock(QCardSection, { key: 3 }, {
              default: withCtx(() => [
                createBaseVNode(
                  "pre",
                  _hoisted_17,
                  toDisplayString(_ctx.member.description),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })) : createCommentVNode("v-if", true)
          ];
        }),
        _: 1
        /* STABLE */
      });
    };
  }
});
const MemberCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bc5d2d8d"], ["__file", "/home/zowie/dev/pkstatus/src/components/Card/MemberCard.vue"]]);
export {
  MemberCard as M,
  vue3Fitty_commonExports as v
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyQ2FyZC1CaWYwUzZfWC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZUAzLjQuMjFfdHlwZXNjcmlwdEA1LjQuNC9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGx1bWVucGluayt2dWUzLWZpdHR5QDAuMS40X3R5cGVzY3JpcHRANS40LjQvbm9kZV9tb2R1bGVzL0BsdW1lbnBpbmsvdnVlMy1maXR0eS9kaXN0L0BsdW1lbnBpbmsvdnVlMy1maXR0eS5jb21tb24uanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DYXJkL01lbWJlckNhcmQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuKiB2dWUgdjMuNC4yMVxuKiAoYykgMjAxOC1wcmVzZW50IFl1eGkgKEV2YW4pIFlvdSBhbmQgVnVlIGNvbnRyaWJ1dG9yc1xuKiBAbGljZW5zZSBNSVRcbioqL1xuaW1wb3J0IHsgaW5pdEN1c3RvbUZvcm1hdHRlciwgd2FybiB9IGZyb20gJ0B2dWUvcnVudGltZS1kb20nO1xuZXhwb3J0ICogZnJvbSAnQHZ1ZS9ydW50aW1lLWRvbSc7XG5cbmZ1bmN0aW9uIGluaXREZXYoKSB7XG4gIHtcbiAgICBpbml0Q3VzdG9tRm9ybWF0dGVyKCk7XG4gIH1cbn1cblxuaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgaW5pdERldigpO1xufVxuY29uc3QgY29tcGlsZSA9ICgpID0+IHtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICB3YXJuKFxuICAgICAgYFJ1bnRpbWUgY29tcGlsYXRpb24gaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJ1aWxkIG9mIFZ1ZS5gICsgKGAgQ29uZmlndXJlIHlvdXIgYnVuZGxlciB0byBhbGlhcyBcInZ1ZVwiIHRvIFwidnVlL2Rpc3QvdnVlLmVzbS1idW5kbGVyLmpzXCIuYCApXG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgY29tcGlsZSB9O1xuIiwiLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdFwidXNlIHN0cmljdFwiO1xuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIDc0NDpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgX193ZWJwYWNrX3VudXNlZF9leHBvcnRfXztcblxuX193ZWJwYWNrX3VudXNlZF9leHBvcnRfXyA9ICh7IHZhbHVlOiB0cnVlIH0pO1xuLy8gcnVudGltZSBoZWxwZXIgZm9yIHNldHRpbmcgcHJvcGVydGllcyBvbiBjb21wb25lbnRzXG4vLyBpbiBhIHRyZWUtc2hha2FibGUgd2F5XG5leHBvcnRzLlogPSAoc2ZjLCBwcm9wcykgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IHNmYy5fX3ZjY09wdHMgfHwgc2ZjO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBwcm9wcykge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuLyoqKioqKi8gXHRcdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuLyoqKioqKi8gXHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfVxuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0ICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuLy8gVGhpcyBlbnRyeSBuZWVkIHRvIGJlIHdyYXBwZWQgaW4gYW4gSUlGRSBiZWNhdXNlIGl0IG5lZWQgdG8gYmUgaXNvbGF0ZWQgYWdhaW5zdCBvdGhlciBtb2R1bGVzIGluIHRoZSBjaHVuay5cbiFmdW5jdGlvbigpIHtcbi8vIEVTTSBDT01QQVQgRkxBR1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuXG4vLyBFWFBPUlRTXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuICBGaXR0eTogZnVuY3Rpb24oKSB7IHJldHVybiAvKiByZWV4cG9ydCAqLyBGaXR0eTsgfSxcbiAgXCJkZWZhdWx0XCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gLyogYmluZGluZyAqLyBlbnRyeV9saWI7IH1cbn0pO1xuXG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9saWIvY29tbWFuZHMvYnVpbGQvc2V0UHVibGljUGF0aC5qc1xuLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXG4vLyBUaGlzIGZpbGUgaXMgaW1wb3J0ZWQgaW50byBsaWIvd2MgY2xpZW50IGJ1bmRsZXMuXG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgY3VycmVudFNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5jdXJyZW50U2NyaXB0XG4gIGlmIChmYWxzZSkgeyB2YXIgZ2V0Q3VycmVudFNjcmlwdDsgfVxuXG4gIHZhciBzcmMgPSBjdXJyZW50U2NyaXB0ICYmIGN1cnJlbnRTY3JpcHQuc3JjLm1hdGNoKC8oLitcXC8pW14vXStcXC5qcyhcXD8uKik/JC8pXG4gIGlmIChzcmMpIHtcbiAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzcmNbMV0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB9XG59XG5cbi8vIEluZGljYXRlIHRvIHdlYnBhY2sgdGhhdCB0aGlzIGZpbGUgY2FuIGJlIGNvbmNhdGVuYXRlZFxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc2V0UHVibGljUGF0aCA9IChudWxsKTtcblxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJ2dWVcIixcImNvbW1vbmpzMlwiOlwidnVlXCIsXCJyb290XCI6XCJWdWVcIn1cbnZhciBleHRlcm5hbF9jb21tb25qc192dWVfY29tbW9uanMyX3Z1ZV9yb290X1Z1ZV9uYW1lc3BhY2VPYmplY3QgPSByZXF1aXJlKFwidnVlXCIpO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3RocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNDEudXNlWzJdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vc3JjL2NvbXBvbmVudHMvRml0dHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg1Y2Y3Zjc2JnNjb3BlZD10cnVlJnRzPXRydWVcblxuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTg1Y2Y3Zjc2XCIpLCBuID0gbigpLCBfcG9wU2NvcGVJZCgpLCBuKTtcbmNvbnN0IF9ob2lzdGVkXzEgPSBbXCJpZFwiXTtcbmZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuICgwLGV4dGVybmFsX2NvbW1vbmpzX3Z1ZV9jb21tb25qczJfdnVlX3Jvb3RfVnVlX25hbWVzcGFjZU9iamVjdC5vcGVuQmxvY2spKCksICgwLGV4dGVybmFsX2NvbW1vbmpzX3Z1ZV9jb21tb25qczJfdnVlX3Jvb3RfVnVlX25hbWVzcGFjZU9iamVjdC5jcmVhdGVFbGVtZW50QmxvY2spKFwiZGl2XCIsIHtcbiAgICBjbGFzczogXCJtYWlud3JhcFwiLFxuICAgIGlkOiBfY3R4LmNvbnRlbnRJRFxuICB9LCBbKDAsZXh0ZXJuYWxfY29tbW9uanNfdnVlX2NvbW1vbmpzMl92dWVfcm9vdF9WdWVfbmFtZXNwYWNlT2JqZWN0LnJlbmRlclNsb3QpKF9jdHguJHNsb3RzLCBcImNvbnRlbnRcIiwge30sIHVuZGVmaW5lZCwgdHJ1ZSksICgwLGV4dGVybmFsX2NvbW1vbmpzX3Z1ZV9jb21tb25qczJfdnVlX3Jvb3RfVnVlX25hbWVzcGFjZU9iamVjdC5yZW5kZXJTbG90KShfY3R4LiRzbG90cywgXCJkZWZhdWx0XCIsIHt9LCB1bmRlZmluZWQsIHRydWUpXSwgOCwgX2hvaXN0ZWRfMSk7XG59XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tcG9uZW50cy9GaXR0eS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODVjZjdmNzYmc2NvcGVkPXRydWUmdHM9dHJ1ZVxuXG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvZml0dHkvZGlzdC9maXR0eS5tb2R1bGUuanNcbi8qKlxuICogZml0dHkgdjIuMy43IC0gU251Z2x5IHJlc2l6ZXMgdGV4dCB0byBmaXQgaXRzIHBhcmVudCBjb250YWluZXJcbiAqIENvcHlyaWdodCAoYykgMjAyMyBSaWsgU2NoZW5uaW5rIDxyaWtAcHFpbmEubmw+IChodHRwczovL3BxaW5hLm5sLylcbiAqL1xuXG52YXIgZT1mdW5jdGlvbihlKXtpZihlKXt2YXIgdD1mdW5jdGlvbihlKXtyZXR1cm5bXS5zbGljZS5jYWxsKGUpfSxuPTAsaT0xLHI9MixvPTMsYT1bXSxsPW51bGwsdT1cInJlcXVlc3RBbmltYXRpb25GcmFtZVwiaW4gZT9mdW5jdGlvbigpe2UuY2FuY2VsQW5pbWF0aW9uRnJhbWUobCksbD1lLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24oKXtyZXR1cm4gcyhhLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZGlydHkmJmUuYWN0aXZlfSkpKX0pKX06ZnVuY3Rpb24oKXt9LGM9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7YS5mb3JFYWNoKChmdW5jdGlvbih0KXtyZXR1cm4gdC5kaXJ0eT1lfSkpLHUoKX19LHM9ZnVuY3Rpb24oZSl7ZS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiFlLnN0eWxlQ29tcHV0ZWR9KSkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZS5zdHlsZUNvbXB1dGVkPW0oZSl9KSksZS5maWx0ZXIoeSkuZm9yRWFjaCh2KTt2YXIgdD1lLmZpbHRlcihwKTt0LmZvckVhY2goZCksdC5mb3JFYWNoKChmdW5jdGlvbihlKXt2KGUpLGYoZSl9KSksdC5mb3JFYWNoKFMpfSxmPWZ1bmN0aW9uKGUpe3JldHVybiBlLmRpcnR5PW59LGQ9ZnVuY3Rpb24oZSl7ZS5hdmFpbGFibGVXaWR0aD1lLmVsZW1lbnQucGFyZW50Tm9kZS5jbGllbnRXaWR0aCxlLmN1cnJlbnRXaWR0aD1lLmVsZW1lbnQuc2Nyb2xsV2lkdGgsZS5wcmV2aW91c0ZvbnRTaXplPWUuY3VycmVudEZvbnRTaXplLGUuY3VycmVudEZvbnRTaXplPU1hdGgubWluKE1hdGgubWF4KGUubWluU2l6ZSxlLmF2YWlsYWJsZVdpZHRoL2UuY3VycmVudFdpZHRoKmUucHJldmlvdXNGb250U2l6ZSksZS5tYXhTaXplKSxlLndoaXRlU3BhY2U9ZS5tdWx0aUxpbmUmJmUuY3VycmVudEZvbnRTaXplPT09ZS5taW5TaXplP1wibm9ybWFsXCI6XCJub3dyYXBcIn0scD1mdW5jdGlvbihlKXtyZXR1cm4gZS5kaXJ0eSE9PXJ8fGUuZGlydHk9PT1yJiZlLmVsZW1lbnQucGFyZW50Tm9kZS5jbGllbnRXaWR0aCE9PWUuYXZhaWxhYmxlV2lkdGh9LG09ZnVuY3Rpb24odCl7dmFyIG49ZS5nZXRDb21wdXRlZFN0eWxlKHQuZWxlbWVudCxudWxsKTtyZXR1cm4gdC5jdXJyZW50Rm9udFNpemU9cGFyc2VGbG9hdChuLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIikpLHQuZGlzcGxheT1uLmdldFByb3BlcnR5VmFsdWUoXCJkaXNwbGF5XCIpLHQud2hpdGVTcGFjZT1uLmdldFByb3BlcnR5VmFsdWUoXCJ3aGl0ZS1zcGFjZVwiKSwhMH0seT1mdW5jdGlvbihlKXt2YXIgdD0hMTtyZXR1cm4hZS5wcmVTdHlsZVRlc3RDb21wbGV0ZWQmJigvaW5saW5lLS8udGVzdChlLmRpc3BsYXkpfHwodD0hMCxlLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIiksXCJub3dyYXBcIiE9PWUud2hpdGVTcGFjZSYmKHQ9ITAsZS53aGl0ZVNwYWNlPVwibm93cmFwXCIpLGUucHJlU3R5bGVUZXN0Q29tcGxldGVkPSEwLHQpfSx2PWZ1bmN0aW9uKGUpe2UuZWxlbWVudC5zdHlsZS53aGl0ZVNwYWNlPWUud2hpdGVTcGFjZSxlLmVsZW1lbnQuc3R5bGUuZGlzcGxheT1lLmRpc3BsYXksZS5lbGVtZW50LnN0eWxlLmZvbnRTaXplPWUuY3VycmVudEZvbnRTaXplK1wicHhcIn0sUz1mdW5jdGlvbihlKXtlLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJmaXRcIix7ZGV0YWlsOntvbGRWYWx1ZTplLnByZXZpb3VzRm9udFNpemUsbmV3VmFsdWU6ZS5jdXJyZW50Rm9udFNpemUsc2NhbGVGYWN0b3I6ZS5jdXJyZW50Rm9udFNpemUvZS5wcmV2aW91c0ZvbnRTaXplfX0pKX0saD1mdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbigpe2UuZGlydHk9dCxlLmFjdGl2ZSYmdSgpfX0sdz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXthPWEuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdC5lbGVtZW50IT09ZS5lbGVtZW50fSkpLGUub2JzZXJ2ZU11dGF0aW9ucyYmZS5vYnNlcnZlci5kaXNjb25uZWN0KCksZS5lbGVtZW50LnN0eWxlLndoaXRlU3BhY2U9ZS5vcmlnaW5hbFN0eWxlLndoaXRlU3BhY2UsZS5lbGVtZW50LnN0eWxlLmRpc3BsYXk9ZS5vcmlnaW5hbFN0eWxlLmRpc3BsYXksZS5lbGVtZW50LnN0eWxlLmZvbnRTaXplPWUub3JpZ2luYWxTdHlsZS5mb250U2l6ZX19LGI9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7ZS5hY3RpdmV8fChlLmFjdGl2ZT0hMCx1KCkpfX0sej1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZS5hY3RpdmU9ITF9fSxGPWZ1bmN0aW9uKGUpe2Uub2JzZXJ2ZU11dGF0aW9ucyYmKGUub2JzZXJ2ZXI9bmV3IE11dGF0aW9uT2JzZXJ2ZXIoaChlLGkpKSxlLm9ic2VydmVyLm9ic2VydmUoZS5lbGVtZW50LGUub2JzZXJ2ZU11dGF0aW9ucykpfSxnPXttaW5TaXplOjE2LG1heFNpemU6NTEyLG11bHRpTGluZTohMCxvYnNlcnZlTXV0YXRpb25zOlwiTXV0YXRpb25PYnNlcnZlclwiaW4gZSYme3N1YnRyZWU6ITAsY2hpbGRMaXN0OiEwLGNoYXJhY3RlckRhdGE6ITB9fSxXPW51bGwsRT1mdW5jdGlvbigpe2UuY2xlYXJUaW1lb3V0KFcpLFc9ZS5zZXRUaW1lb3V0KGMocikseC5vYnNlcnZlV2luZG93RGVsYXkpfSxNPVtcInJlc2l6ZVwiLFwib3JpZW50YXRpb25jaGFuZ2VcIl07cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh4LFwib2JzZXJ2ZVdpbmRvd1wiLHtzZXQ6ZnVuY3Rpb24odCl7dmFyIG49XCJcIi5jb25jYXQodD9cImFkZFwiOlwicmVtb3ZlXCIsXCJFdmVudExpc3RlbmVyXCIpO00uZm9yRWFjaCgoZnVuY3Rpb24odCl7ZVtuXSh0LEUpfSkpfX0pLHgub2JzZXJ2ZVdpbmRvdz0hMCx4Lm9ic2VydmVXaW5kb3dEZWxheT0xMDAseC5maXRBbGw9YyhvKSx4fWZ1bmN0aW9uIEMoZSx0KXt2YXIgbj1PYmplY3QuYXNzaWduKHt9LGcsdCksaT1lLm1hcCgoZnVuY3Rpb24oZSl7dmFyIHQ9T2JqZWN0LmFzc2lnbih7fSxuLHtlbGVtZW50OmUsYWN0aXZlOiEwfSk7cmV0dXJuIGZ1bmN0aW9uKGUpe2Uub3JpZ2luYWxTdHlsZT17d2hpdGVTcGFjZTplLmVsZW1lbnQuc3R5bGUud2hpdGVTcGFjZSxkaXNwbGF5OmUuZWxlbWVudC5zdHlsZS5kaXNwbGF5LGZvbnRTaXplOmUuZWxlbWVudC5zdHlsZS5mb250U2l6ZX0sRihlKSxlLm5ld2JpZT0hMCxlLmRpcnR5PSEwLGEucHVzaChlKX0odCkse2VsZW1lbnQ6ZSxmaXQ6aCh0LG8pLHVuZnJlZXplOmIodCksZnJlZXplOnoodCksdW5zdWJzY3JpYmU6dyh0KX19KSk7cmV0dXJuIHUoKSxpfWZ1bmN0aW9uIHgoZSl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP0ModChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGUpKSxuKTpDKFtlXSxuKVswXX19KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3c/bnVsbDp3aW5kb3cpOy8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGZpdHR5X21vZHVsZSA9IChlKTtcblxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanNcbmNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBlc21fYnJvd3Nlcl9uYXRpdmUgPSAoe1xuICByYW5kb21VVUlEXG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzXG4vLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanNcblxuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBlc21fYnJvd3Nlcl9zdHJpbmdpZnkgPSAoKC8qIHVudXNlZCBwdXJlIGV4cHJlc3Npb24gb3Igc3VwZXIgKi8gbnVsbCAmJiAoc3RyaW5naWZ5KSkpO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qc1xuXG5cblxuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAoZXNtX2Jyb3dzZXJfbmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBlc21fYnJvd3Nlcl9uYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBlc21fYnJvd3Nlcl92NCA9ICh2NCk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdGhyZWFkLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MS51c2VbMl0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0ZpdHR5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1xuXG5cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgRml0dHl2dWVfdHlwZV9zY3JpcHRfbGFuZ190cyA9ICgoMCxleHRlcm5hbF9jb21tb25qc192dWVfY29tbW9uanMyX3Z1ZV9yb290X1Z1ZV9uYW1lc3BhY2VPYmplY3QuZGVmaW5lQ29tcG9uZW50KSh7XG4gIHNldHVwKCkge1xuICAgIGNvbnN0IGNvbnRlbnRJRCA9IFwiZml0dHktXCIgKyBlc21fYnJvd3Nlcl92NCgpO1xuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50SURcbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIGZpdHR5X21vZHVsZShcIiNcIiArIHRoaXMuY29udGVudElELCB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuICB9LFxuICBuYW1lOiBcImx1bWVucGluay1maXR0eVwiLFxuICBwcm9wczoge1xuICAgIG9wdGlvbnM6IE9iamVjdFxuICB9XG59KSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tcG9uZW50cy9GaXR0eS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcbiBcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMF0hLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0ZpdHR5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg1Y2Y3Zjc2JnNjb3BlZD10cnVlJmxhbmc9Y3NzXG4vLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cblxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbXBvbmVudHMvRml0dHkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODVjZjdmNzYmc2NvcGVkPXRydWUmbGFuZz1jc3NcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXG52YXIgZXhwb3J0SGVscGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3NDQpO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbXBvbmVudHMvRml0dHkudnVlXG5cblxuXG5cbjtcblxuXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi8oMCxleHBvcnRIZWxwZXIvKiBkZWZhdWx0ICovLlopKEZpdHR5dnVlX3R5cGVfc2NyaXB0X2xhbmdfdHMsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtODVjZjdmNzZcIl1dKVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBGaXR0eSA9IChfX2V4cG9ydHNfXyk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tcG9uZW50cy9pbmRleC50c1xuXG5jb25zdCBjb21wb25lbnRzX3BsdWdpbiA9IHtcbiAgaW5zdGFsbChhcHApIHtcbiAgICBhcHAuY29tcG9uZW50KEZpdHR5Lm5hbWUsIEZpdHR5KTtcbiAgfVxufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY29tcG9uZW50cyA9IChjb21wb25lbnRzX3BsdWdpbik7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9saWIvY29tbWFuZHMvYnVpbGQvZW50cnktbGliLmpzXG5cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgZW50cnlfbGliID0gKGNvbXBvbmVudHMpO1xuXG5cbn0oKTtcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2V4cG9ydHNfXztcbi8qKioqKiovIH0pKClcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZ1ZTMtZml0dHkuY29tbW9uLmpzLm1hcCIsIjx0ZW1wbGF0ZT5cbiAgPHEtY2FyZD5cbiAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBzZWxmLWNlbnRlclwiPlxuICAgICAgICA8aW5pdGlhbC1mYWxsYmFjay1hdmF0YXJcbiAgICAgICAgICB2LWlmPVwibWVtYmVyLmF2YXRhclVybFwiXG4gICAgICAgICAgc2l6ZT1cIjY0cHhcIlxuICAgICAgICAgIDp1cmw9XCJtZW1iZXIuYXZhdGFyVXJsXCJcbiAgICAgICAgICA6bmFtZT1cIm1lbWJlci5nZXROYW1lKGRldGVjdFByb25vdW5zKVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcS1tbC1tZCBzZWxmLWNlbnRlclwiPlxuICAgICAgICA8Zml0dHkgc3R5bGU9XCJsaW5lLWhlaWdodDogMTAwJVwiIDpvcHRpb25zPVwieyBtYXhTaXplOiAxMDAgfVwiPlxuICAgICAgICAgIHt7IG1lbWJlci5nZXROYW1lKGRldGVjdFByb25vdW5zKSB9fVxuICAgICAgICA8L2ZpdHR5PlxuICAgICAgPC9kaXY+XG4gICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICA8aW1nIHYtaWY9XCJtZW1iZXIuYmFubmVyVXJsXCIgOnNyYz1cIm1lbWJlci5iYW5uZXJVcmxcIiAvPlxuICAgIDxxLWNhcmQtYWN0aW9ucyB2LWlmPVwicG9wdXBcIiBjbGFzcz1cImJnLXByaW1hcnlcIj5cbiAgICAgIDxxLWJ0biBmbGF0IGxhYmVsPVwiVmlldyBTeXN0ZW1cIiA6dG89XCJgL2xvb2t1cC9zeXN0ZW0vJHtzeXN0ZW0uaWR9YFwiIC8+XG4gICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICA8cS1jYXJkLXNlY3Rpb24gdi1pZj1cImRldGFpbHNcIj5cbiAgICAgIDxxLW1hcmt1cC10YWJsZSBmbGF0IHNlcGFyYXRvcj1cImhvcml6b250YWxcIiBzdHlsZT1cIm92ZXJmbG93OiBoaWRkZW5cIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5JRDwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3sgbWVtYmVyLmlkIH19PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciB2LWlmPVwibWVtYmVyLmdldFByb25vdW5zKGRldGVjdFByb25vdW5zKVwiPlxuICAgICAgICAgICAgPHRkPlByb25vdW5zPC90ZD5cbiAgICAgICAgICAgIDx0ZD57eyBtZW1iZXIuZ2V0UHJvbm91bnMoZGV0ZWN0UHJvbm91bnMpIH19PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5TeXN0ZW08L3RkPlxuICAgICAgICAgICAgPHRkPnt7IHN5c3RlbS5nZXROYW1lKGRldGVjdFByb25vdW5zKSB9fTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHIgdi1pZj1cIm1lbWJlci5tZXNzYWdlQ291bnRcIj5cbiAgICAgICAgICAgIDx0ZD5NZXNzYWdlcyBTZW50PC90ZD5cbiAgICAgICAgICAgIDx0ZD57eyBtZW1iZXIubWVzc2FnZUNvdW50LnRvTG9jYWxlU3RyaW5nKCkgfX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIHYtaWY9XCJtZW1iZXIubGFzdE1lc3NhZ2VBdFwiPlxuICAgICAgICAgICAgPHRkPkxhc3QgTWVzc2FnZTwvdGQ+XG4gICAgICAgICAgICA8dGQ+PHJlbGF0aXZlLXRpbWUtZGlzcGxheSA6dGltZT1cIm1lbWJlci5sYXN0TWVzc2FnZUF0XCIgLz48L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIHYtaWY9XCJtZW1iZXIuYmlydGhkYXlcIj5cbiAgICAgICAgICAgIDx0ZD5CaXJ0aGRheTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3sgbWVtYmVyLmJpcnRoZGF5LmZvcm1hdCgnWVlZWS1NTS1ERCcpIH19PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciB2LWlmPVwibWVtYmVyLmNvbG9yXCI+XG4gICAgICAgICAgICA8dGQ+Q29sb3I8L3RkPlxuICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgICAgICAgICBjb2xvcjogYCMke21lbWJlci5jb2xvcn1gLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnNDhweCcsXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzE2cHgnLFxuICAgICAgICAgICAgICAgIHRleHRJbmRlbnQ6ICctNHB4JyxcbiAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICZidWxsO1xuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5DcmVhdGVkIEF0PC90ZD5cbiAgICAgICAgICAgIDx0ZD57eyBtZW1iZXIuY3JlYXRlZEF0LmZvcm1hdCgnWVlZWS1NTS1ERCcpIH19PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9xLW1hcmt1cC10YWJsZT5cbiAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDxxLWNhcmQtc2VjdGlvbiB2LWlmPVwiISFtZW1iZXIuZGVzY3JpcHRpb24/Lmxlbmd0aFwiPlxuICAgICAgPHByZSBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3sgbWVtYmVyLmRlc2NyaXB0aW9uIH19PC9wcmU+XG4gICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgPC9xLWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgRml0dHkgfSBmcm9tICdAbHVtZW5waW5rL3Z1ZTMtZml0dHknO1xuaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSc7XG5cbmltcG9ydCBJbml0aWFsRmFsbGJhY2tBdmF0YXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvSW5pdGlhbEZhbGxiYWNrQXZhdGFyLnZ1ZSc7XG5pbXBvcnQgUmVsYXRpdmVUaW1lRGlzcGxheSBmcm9tICdzcmMvY29tcG9uZW50cy9SZWxhdGl2ZVRpbWVEaXNwbGF5LnZ1ZSc7XG5cbmltcG9ydCB7IE1lbWJlciB9IGZyb20gJ3NyYy9tb2RlbHMvTWVtYmVyJztcbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJ3NyYy9tb2RlbHMvU3lzdGVtJztcbmltcG9ydCB7IHVzZVNldHRpbmdzU3RvcmUgfSBmcm9tICdzcmMvc3RvcmVzL3NldHRpbmdzLXN0b3JlJztcblxuY29uc3Qgc2V0dGluZ3MgPSB1c2VTZXR0aW5nc1N0b3JlKCk7XG5jb25zdCB7IGRldGVjdFByb25vdW5zIH0gPSBzdG9yZVRvUmVmcyhzZXR0aW5ncyk7XG5cbndpdGhEZWZhdWx0cyhcbiAgZGVmaW5lUHJvcHM8e1xuICAgIG1lbWJlcjogTWVtYmVyO1xuICAgIHN5c3RlbTogU3lzdGVtO1xuICAgIGRldGFpbHM/OiBib29sZWFuO1xuICAgIHBvcHVwPzogYm9vbGVhbjtcbiAgfT4oKSxcbiAgeyBkZXRhaWxzOiB0cnVlLCBwb3B1cDogZmFsc2UgfSxcbik7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwiY3NzXCI+XG50ZDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxudGQ6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiX2hvaXN0ZWRfMSIsInJlbmRlciIsImUiLCJ0IiwibiIsImgiLCJpIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlCQSxNQUFNLFVBQVUsTUFBTTtBQU10Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCUyxHQUFDLFdBQVc7QUFFWCxRQUFJLHNCQUF1QjtBQUFBO0FBQUEsTUFFL0I7QUFBQTtBQUFBLFFBQ0MsU0FBUyx5QkFBeUIsU0FBUztBQU9sRCxrQkFBUSxJQUFJLENBQUMsS0FBSyxVQUFVO0FBQ3hCLGtCQUFNLFNBQVMsSUFBSSxhQUFhO0FBQ2hDLHVC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
