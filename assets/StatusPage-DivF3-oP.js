import { Q as QPage } from "./QPage-B7Tg8hoM.js";
import { Q as QTabs, a as QRouteTab } from "./QTabs-Bu6DNyVi.js";
import { c as createComponent, h, a9 as useFormProps, f as useDarkProps, g as getCurrentInstance, k as useDark, r as ref, a as computed, aa as isNumber, ab as isObject, o as onBeforeUnmount, ac as position, ad as useFormInject, x as hDir, ae as useFormAttrs, w as watch, af as stopAndPrevent, J as defineComponent, K as useSettingsStore, _ as _export_sfc, S as createBlock, T as openBlock, U as withCtx, W as createVNode, $ as createTextVNode, a3 as QSeparator, a4 as QToggle, ag as createElementBlock, Y as createBaseVNode, Z as QBtn, a1 as QIcon, ah as usePluralKit, ai as useSystemStore, aj as APIError, N as useQuasar, L as storeToRefs, t as onMounted, D as onUnmounted, a0 as createCommentVNode, ak as Fragment, V as resolveComponent } from "./index-Czhz81pV.js";
import { Q as QToolbar } from "./QToolbar-BvVglfo1.js";
import { Q as QFooter } from "./QFooter-fN0Awtju.js";
import { a as QItem, b as QItemSection, Q as QItemLabel } from "./QItem-DBhEHxap.js";
import { Q as QBtnToggle } from "./QBtnToggle-CoGCBGeU.js";
import { T as TouchPan } from "./TouchPan-zKzWXi0t.js";
import { b as between } from "./format-Dk2Vo7dJ.js";
import { Q as QList } from "./QList-DTyO3bRG.js";
import { Q as QBtnDropdown } from "./QBtnDropdown-Q5rxQ8Ix.js";
import "./QResizeObserver-C6eZlNbd.js";
import "./rtl-DDpZOXNn.js";
import "./QBtnGroup-DSLUZYCx.js";
import "./QMenu-BKVuNWhU.js";
const QSpace = createComponent({
  name: "QSpace",
  setup() {
    const space = h("div", { class: "q-space" });
    return () => space;
  }
});
const markerPrefixClass = "q-slider__marker-labels";
const defaultMarkerConvertFn = (v) => ({ value: v });
const defaultMarkerLabelRenderFn = ({ marker }) => h("div", {
  key: marker.value,
  style: marker.style,
  class: marker.classes
}, marker.label);
const keyCodes = [34, 37, 40, 33, 39, 38];
const useSliderProps = {
  ...useDarkProps,
  ...useFormProps,
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  innerMin: Number,
  innerMax: Number,
  step: {
    type: Number,
    default: 1,
    validator: (v) => v >= 0
  },
  snap: Boolean,
  vertical: Boolean,
  reverse: Boolean,
  color: String,
  markerLabelsClass: String,
  label: Boolean,
  labelColor: String,
  labelTextColor: String,
  labelAlways: Boolean,
  switchLabelSide: Boolean,
  markers: [Boolean, Number],
  markerLabels: [Boolean, Array, Object, Function],
  switchMarkerLabelsSide: Boolean,
  trackImg: String,
  trackColor: String,
  innerTrackImg: String,
  innerTrackColor: String,
  selectionColor: String,
  selectionImg: String,
  thumbSize: {
    type: String,
    default: "20px"
  },
  trackSize: {
    type: String,
    default: "4px"
  },
  disable: Boolean,
  readonly: Boolean,
  dense: Boolean,
  tabindex: [String, Number],
  thumbColor: String,
  thumbPath: {
    type: String,
    default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"
  }
};
const useSliderEmits = ["pan", "update:modelValue", "change"];
function useSlider({ updateValue, updatePosition, getDragging, formAttrs }) {
  const { props, emit, slots, proxy: { $q } } = getCurrentInstance();
  const isDark = useDark(props, $q);
  const injectFormInput = useFormInject(formAttrs);
  const active = ref(false);
  const preventFocus = ref(false);
  const focus = ref(false);
  const dragging = ref(false);
  const axis = computed(() => props.vertical === true ? "--v" : "--h");
  const labelSide = computed(() => "-" + (props.switchLabelSide === true ? "switched" : "standard"));
  const isReversed = computed(() => props.vertical === true ? props.reverse === true : props.reverse !== ($q.lang.rtl === true));
  const innerMin = computed(() => isNaN(props.innerMin) === true || props.innerMin < props.min ? props.min : props.innerMin);
  const innerMax = computed(() => isNaN(props.innerMax) === true || props.innerMax > props.max ? props.max : props.innerMax);
  const editable = computed(() => props.disable !== true && props.readonly !== true && innerMin.value < innerMax.value);
  const roundValueFn = computed(() => {
    if (props.step === 0) {
      return (v) => v;
    }
    const decimals = (String(props.step).trim().split(".")[1] || "").length;
    return (v) => parseFloat(v.toFixed(decimals));
  });
  const keyStep = computed(() => props.step === 0 ? 1 : props.step);
  const tabindex = computed(() => editable.value === true ? props.tabindex || 0 : -1);
  const trackLen = computed(() => props.max - props.min);
  const innerBarLen = computed(() => innerMax.value - innerMin.value);
  const innerMinRatio = computed(() => convertModelToRatio(innerMin.value));
  const innerMaxRatio = computed(() => convertModelToRatio(innerMax.value));
  const positionProp = computed(() => props.vertical === true ? isReversed.value === true ? "bottom" : "top" : isReversed.value === true ? "right" : "left");
  const sizeProp = computed(() => props.vertical === true ? "height" : "width");
  const thicknessProp = computed(() => props.vertical === true ? "width" : "height");
  const orientation = computed(() => props.vertical === true ? "vertical" : "horizontal");
  const attributes = computed(() => {
    const acc = {
      role: "slider",
      "aria-valuemin": innerMin.value,
      "aria-valuemax": innerMax.value,
      "aria-orientation": orientation.value,
      "data-step": props.step
    };
    if (props.disable === true) {
      acc["aria-disabled"] = "true";
    } else if (props.readonly === true) {
      acc["aria-readonly"] = "true";
    }
    return acc;
  });
  const classes = computed(
    () => `q-slider q-slider${axis.value} q-slider--${active.value === true ? "" : "in"}active inline no-wrap ` + (props.vertical === true ? "row" : "column") + (props.disable === true ? " disabled" : " q-slider--enabled" + (editable.value === true ? " q-slider--editable" : "")) + (focus.value === "both" ? " q-slider--focus" : "") + (props.label || props.labelAlways === true ? " q-slider--label" : "") + (props.labelAlways === true ? " q-slider--label-always" : "") + (isDark.value === true ? " q-slider--dark" : "") + (props.dense === true ? " q-slider--dense q-slider--dense" + axis.value : "")
  );
  function getPositionClass(name) {
    const cls = "q-slider__" + name;
    return `${cls} ${cls}${axis.value} ${cls}${axis.value}${labelSide.value}`;
  }
  function getAxisClass(name) {
    const cls = "q-slider__" + name;
    return `${cls} ${cls}${axis.value}`;
  }
  const selectionBarClass = computed(() => {
    const color = props.selectionColor || props.color;
    return "q-slider__selection absolute" + (color !== void 0 ? ` text-${color}` : "");
  });
  const markerClass = computed(() => getAxisClass("markers") + " absolute overflow-hidden");
  const trackContainerClass = computed(() => getAxisClass("track-container"));
  const pinClass = computed(() => getPositionClass("pin"));
  const labelClass = computed(() => getPositionClass("label"));
  const textContainerClass = computed(() => getPositionClass("text-container"));
  const markerLabelsContainerClass = computed(
    () => getPositionClass("marker-labels-container") + (props.markerLabelsClass !== void 0 ? ` ${props.markerLabelsClass}` : "")
  );
  const trackClass = computed(
    () => "q-slider__track relative-position no-outline" + (props.trackColor !== void 0 ? ` bg-${props.trackColor}` : "")
  );
  const trackStyle = computed(() => {
    const acc = { [thicknessProp.value]: props.trackSize };
    if (props.trackImg !== void 0) {
      acc.backgroundImage = `url(${props.trackImg}) !important`;
    }
    return acc;
  });
  const innerBarClass = computed(
    () => "q-slider__inner absolute" + (props.innerTrackColor !== void 0 ? ` bg-${props.innerTrackColor}` : "")
  );
  const innerBarStyle = computed(() => {
    const innerDiff = innerMaxRatio.value - innerMinRatio.value;
    const acc = {
      [positionProp.value]: `${100 * innerMinRatio.value}%`,
      [sizeProp.value]: innerDiff === 0 ? "2px" : `${100 * innerDiff}%`
    };
    if (props.innerTrackImg !== void 0) {
      acc.backgroundImage = `url(${props.innerTrackImg}) !important`;
    }
    return acc;
  });
  function convertRatioToModel(ratio) {
    const { min, max, step } = props;
    let model = min + ratio * (max - min);
    if (step > 0) {
      const modulo = (model - innerMin.value) % step;
      model += (Math.abs(modulo) >= step / 2 ? (modulo < 0 ? -1 : 1) * step : 0) - modulo;
    }
    model = roundValueFn.value(model);
    return between(model, innerMin.value, innerMax.value);
  }
  function convertModelToRatio(model) {
    return trackLen.value === 0 ? 0 : (model - props.min) / trackLen.value;
  }
  function getDraggingRatio(evt, dragging2) {
    const pos = position(evt), val = props.vertical === true ? between((pos.top - dragging2.top) / dragging2.height, 0, 1) : between((pos.left - dragging2.left) / dragging2.width, 0, 1);
    return between(
      isReversed.value === true ? 1 - val : val,
      innerMinRatio.value,
      innerMaxRatio.value
    );
  }
  const markerStep = computed(
    () => isNumber(props.markers) === true ? props.markers : keyStep.value
  );
  const markerTicks = computed(() => {
    const acc = [];
    const step = markerStep.value;
    const max = props.max;
    let value = props.min;
    do {
      acc.push(value);
      value += step;
    } while (value < max);
    acc.push(max);
    return acc;
  });
  const markerLabelClass = computed(() => {
    const prefix = ` ${markerPrefixClass}${axis.value}-`;
    return markerPrefixClass + `${prefix}${props.switchMarkerLabelsSide === true ? "switched" : "standard"}${prefix}${isReversed.value === true ? "rtl" : "ltr"}`;
  });
  const markerLabelsList = computed(() => {
    if (props.markerLabels === false) {
      return null;
    }
    return getMarkerList(props.markerLabels).map((entry, index) => ({
      index,
      value: entry.value,
      label: entry.label || entry.value,
      classes: markerLabelClass.value + (entry.classes !== void 0 ? " " + entry.classes : ""),
      style: {
        ...getMarkerLabelStyle(entry.value),
        ...entry.style || {}
      }
    }));
  });
  const markerScope = computed(() => ({
    markerList: markerLabelsList.value,
    markerMap: markerLabelsMap.value,
    classes: markerLabelClass.value,
    // TODO ts definition
    getStyle: getMarkerLabelStyle
  }));
  const markerStyle = computed(() => {
    const size = innerBarLen.value === 0 ? "2px" : 100 * markerStep.value / innerBarLen.value;
    return {
      ...innerBarStyle.value,
      backgroundSize: props.vertical === true ? `2px ${size}%` : `${size}% 2px`
    };
  });
  function getMarkerList(def) {
    if (def === false) {
      return null;
    }
    if (def === true) {
      return markerTicks.value.map(defaultMarkerConvertFn);
    }
    if (typeof def === "function") {
      return markerTicks.value.map((value) => {
        const item = def(value);
        return isObject(item) === true ? { ...item, value } : { value, label: item };
      });
    }
    const filterFn = ({ value }) => value >= props.min && value <= props.max;
    if (Array.isArray(def) === true) {
      return def.map((item) => isObject(item) === true ? item : { value: item }).filter(filterFn);
    }
    return Object.keys(def).map((key) => {
      const item = def[key];
      const value = Number(key);
      return isObject(item) === true ? { ...item, value } : { value, label: item };
    }).filter(filterFn);
  }
  function getMarkerLabelStyle(val) {
    return { [positionProp.value]: `${100 * (val - props.min) / trackLen.value}%` };
  }
  const markerLabelsMap = computed(() => {
    if (props.markerLabels === false) {
      return null;
    }
    const acc = {};
    markerLabelsList.value.forEach((entry) => {
      acc[entry.value] = entry;
    });
    return acc;
  });
  function getMarkerLabelsContent() {
    if (slots["marker-label-group"] !== void 0) {
      return slots["marker-label-group"](markerScope.value);
    }
    const fn = slots["marker-label"] || defaultMarkerLabelRenderFn;
    return markerLabelsList.value.map((marker) => fn({
      marker,
      ...markerScope.value
    }));
  }
  const panDirective = computed(() => {
    return [[
      TouchPan,
      onPan,
      void 0,
      {
        [orientation.value]: true,
        prevent: true,
        stop: true,
        mouse: true,
        mouseAllDir: true
      }
    ]];
  });
  function onPan(event) {
    if (event.isFinal === true) {
      if (dragging.value !== void 0) {
        updatePosition(event.evt);
        event.touch === true && updateValue(true);
        dragging.value = void 0;
        emit("pan", "end");
      }
      active.value = false;
      focus.value = false;
    } else if (event.isFirst === true) {
      dragging.value = getDragging(event.evt);
      updatePosition(event.evt);
      updateValue();
      active.value = true;
      emit("pan", "start");
    } else {
      updatePosition(event.evt);
      updateValue();
    }
  }
  function onBlur() {
    focus.value = false;
  }
  function onActivate(evt) {
    updatePosition(evt, getDragging(evt));
    updateValue();
    preventFocus.value = true;
    active.value = true;
    document.addEventListener("mouseup", onDeactivate, true);
  }
  function onDeactivate() {
    preventFocus.value = false;
    active.value = false;
    updateValue(true);
    onBlur();
    document.removeEventListener("mouseup", onDeactivate, true);
  }
  function onMobileClick(evt) {
    updatePosition(evt, getDragging(evt));
    updateValue(true);
  }
  function onKeyup(evt) {
    if (keyCodes.includes(evt.keyCode)) {
      updateValue(true);
    }
  }
  function getTextContainerStyle(ratio) {
    if (props.vertical === true) {
      return null;
    }
    const p = $q.lang.rtl !== props.reverse ? 1 - ratio : ratio;
    return {
      transform: `translateX(calc(${2 * p - 1} * ${props.thumbSize} / 2 + ${50 - 100 * p}%))`
    };
  }
  function getThumbRenderFn(thumb) {
    const focusClass = computed(() => preventFocus.value === false && (focus.value === thumb.focusValue || focus.value === "both") ? " q-slider--focus" : "");
    const classes2 = computed(
      () => `q-slider__thumb q-slider__thumb${axis.value} q-slider__thumb${axis.value}-${isReversed.value === true ? "rtl" : "ltr"} absolute non-selectable` + focusClass.value + (thumb.thumbColor.value !== void 0 ? ` text-${thumb.thumbColor.value}` : "")
    );
    const style = computed(() => ({
      width: props.thumbSize,
      height: props.thumbSize,
      [positionProp.value]: `${100 * thumb.ratio.value}%`,
      zIndex: focus.value === thumb.focusValue ? 2 : void 0
    }));
    const pinColor = computed(() => thumb.labelColor.value !== void 0 ? ` text-${thumb.labelColor.value}` : "");
    const textContainerStyle = computed(() => getTextContainerStyle(thumb.ratio.value));
    const textClass = computed(() => "q-slider__text" + (thumb.labelTextColor.value !== void 0 ? ` text-${thumb.labelTextColor.value}` : ""));
    return () => {
      const thumbContent = [
        h("svg", {
          class: "q-slider__thumb-shape absolute-full",
          viewBox: "0 0 20 20",
          "aria-hidden": "true"
        }, [
          h("path", { d: props.thumbPath })
        ]),
        h("div", { class: "q-slider__focus-ring fit" })
      ];
      if (props.label === true || props.labelAlways === true) {
        thumbContent.push(
          h("div", {
            class: pinClass.value + " absolute fit no-pointer-events" + pinColor.value
          }, [
            h("div", {
              class: labelClass.value,
              style: { minWidth: props.thumbSize }
            }, [
              h("div", {
                class: textContainerClass.value,
                style: textContainerStyle.value
              }, [
                h("span", { class: textClass.value }, thumb.label.value)
              ])
            ])
          ])
        );
        if (props.name !== void 0 && props.disable !== true) {
          injectFormInput(thumbContent, "push");
        }
      }
      return h("div", {
        class: classes2.value,
        style: style.value,
        ...thumb.getNodeData()
      }, thumbContent);
    };
  }
  function getContent(selectionBarStyle, trackContainerTabindex, trackContainerEvents, injectThumb) {
    const trackContent = [];
    props.innerTrackColor !== "transparent" && trackContent.push(
      h("div", {
        key: "inner",
        class: innerBarClass.value,
        style: innerBarStyle.value
      })
    );
    props.selectionColor !== "transparent" && trackContent.push(
      h("div", {
        key: "selection",
        class: selectionBarClass.value,
        style: selectionBarStyle.value
      })
    );
    props.markers !== false && trackContent.push(
      h("div", {
        key: "marker",
        class: markerClass.value,
        style: markerStyle.value
      })
    );
    injectThumb(trackContent);
    const content = [
      hDir(
        "div",
        {
          key: "trackC",
          class: trackContainerClass.value,
          tabindex: trackContainerTabindex.value,
          ...trackContainerEvents.value
        },
        [
          h("div", {
            class: trackClass.value,
            style: trackStyle.value
          }, trackContent)
        ],
        "slide",
        editable.value,
        () => panDirective.value
      )
    ];
    if (props.markerLabels !== false) {
      const action = props.switchMarkerLabelsSide === true ? "unshift" : "push";
      content[action](
        h("div", {
          key: "markerL",
          class: markerLabelsContainerClass.value
        }, getMarkerLabelsContent())
      );
    }
    return content;
  }
  onBeforeUnmount(() => {
    document.removeEventListener("mouseup", onDeactivate, true);
  });
  return {
    state: {
      active,
      focus,
      preventFocus,
      dragging,
      editable,
      classes,
      tabindex,
      attributes,
      roundValueFn,
      keyStep,
      trackLen,
      innerMin,
      innerMinRatio,
      innerMax,
      innerMaxRatio,
      positionProp,
      sizeProp,
      isReversed
    },
    methods: {
      onActivate,
      onMobileClick,
      onBlur,
      onKeyup,
      getContent,
      getThumbRenderFn,
      convertRatioToModel,
      convertModelToRatio,
      getDraggingRatio
    }
  };
}
const getNodeData = () => ({});
const QSlider = createComponent({
  name: "QSlider",
  props: {
    ...useSliderProps,
    modelValue: {
      required: true,
      default: null,
      validator: (v) => typeof v === "number" || v === null
    },
    labelValue: [String, Number]
  },
  emits: useSliderEmits,
  setup(props, { emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const { state, methods } = useSlider({
      updateValue,
      updatePosition,
      getDragging,
      formAttrs: useFormAttrs(props)
    });
    const rootRef = ref(null);
    const curRatio = ref(0);
    const model = ref(0);
    function normalizeModel() {
      model.value = props.modelValue === null ? state.innerMin.value : between(props.modelValue, state.innerMin.value, state.innerMax.value);
    }
    watch(
      () => `${props.modelValue}|${state.innerMin.value}|${state.innerMax.value}`,
      normalizeModel
    );
    normalizeModel();
    const modelRatio = computed(() => methods.convertModelToRatio(model.value));
    const ratio = computed(() => state.active.value === true ? curRatio.value : modelRatio.value);
    const selectionBarStyle = computed(() => {
      const acc = {
        [state.positionProp.value]: `${100 * state.innerMinRatio.value}%`,
        [state.sizeProp.value]: `${100 * (ratio.value - state.innerMinRatio.value)}%`
      };
      if (props.selectionImg !== void 0) {
        acc.backgroundImage = `url(${props.selectionImg}) !important`;
      }
      return acc;
    });
    const getThumb = methods.getThumbRenderFn({
      focusValue: true,
      getNodeData,
      ratio,
      label: computed(() => props.labelValue !== void 0 ? props.labelValue : model.value),
      thumbColor: computed(() => props.thumbColor || props.color),
      labelColor: computed(() => props.labelColor),
      labelTextColor: computed(() => props.labelTextColor)
    });
    const trackContainerEvents = computed(() => {
      if (state.editable.value !== true) {
        return {};
      }
      return $q.platform.is.mobile === true ? { onClick: methods.onMobileClick } : {
        onMousedown: methods.onActivate,
        onFocus,
        onBlur: methods.onBlur,
        onKeydown,
        onKeyup: methods.onKeyup
      };
    });
    function updateValue(change) {
      if (model.value !== props.modelValue) {
        emit("update:modelValue", model.value);
      }
      change === true && emit("change", model.value);
    }
    function getDragging() {
      return rootRef.value.getBoundingClientRect();
    }
    function updatePosition(event, dragging = state.dragging.value) {
      const ratio2 = methods.getDraggingRatio(event, dragging);
      model.value = methods.convertRatioToModel(ratio2);
      curRatio.value = props.snap !== true || props.step === 0 ? ratio2 : methods.convertModelToRatio(model.value);
    }
    function onFocus() {
      state.focus.value = true;
    }
    function onKeydown(evt) {
      if (keyCodes.includes(evt.keyCode) === false) return;
      stopAndPrevent(evt);
      const stepVal = ([34, 33].includes(evt.keyCode) ? 10 : 1) * state.keyStep.value, offset = ([34, 37, 40].includes(evt.keyCode) ? -1 : 1) * (state.isReversed.value === true ? -1 : 1) * (props.vertical === true ? -1 : 1) * stepVal;
      model.value = between(
        state.roundValueFn.value(model.value + offset),
        state.innerMin.value,
        state.innerMax.value
      );
      updateValue();
    }
    return () => {
      const content = methods.getContent(
        selectionBarStyle,
        state.tabindex,
        trackContainerEvents,
        (node) => {
          node.push(getThumb());
        }
      );
      return h("div", {
        ref: rootRef,
        class: state.classes.value + (props.modelValue === null ? " q-slider--no-value" : ""),
        ...state.attributes.value,
        "aria-valuenow": props.modelValue
      }, content);
    };
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TableSettings",
  setup(__props, { expose: __expose }) {
    __expose();
    const settings = useSettingsStore().status.table;
    const __returned__ = { settings };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QBtnDropdown, {
    icon: "settings",
    flat: ""
  }, {
    default: withCtx(() => [
      createVNode(QList, {
        bordered: "",
        class: "rounded-borders"
      }, {
        default: withCtx(() => [
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, {
                    overline: "",
                    class: "q-mb-xs"
                  }, {
                    default: withCtx(() => _cache[8] || (_cache[8] = [
                      createTextVNode(
                        "Vertical Position",
                        -1
                        /* CACHED */
                      )
                    ])),
                    _: 1,
                    __: [8]
                  }),
                  createVNode(QBtnToggle, {
                    modelValue: $setup.settings.verticalPosition,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.settings.verticalPosition = $event),
                    color: "grey-9",
                    options: [
                      { label: "Top", value: "start" },
                      { label: "Middle", value: "center" },
                      { label: "Bottom", value: "end" }
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, {
                    overline: "",
                    class: "q-mb-xs"
                  }, {
                    default: withCtx(() => _cache[9] || (_cache[9] = [
                      createTextVNode(
                        "Horizontal Position",
                        -1
                        /* CACHED */
                      )
                    ])),
                    _: 1,
                    __: [9]
                  }),
                  createVNode(QBtnToggle, {
                    modelValue: $setup.settings.horizontalPosition,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.settings.horizontalPosition = $event),
                    color: "grey-9",
                    options: [
                      { label: "Left", value: "start" },
                      { label: "Center", value: "center" },
                      { label: "Right", value: "end" }
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QSeparator, { class: "q-mt-sm" }),
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => _cache[10] || (_cache[10] = [
                      createTextVNode(
                        "Show Icons",
                        -1
                        /* CACHED */
                      )
                    ])),
                    _: 1,
                    __: [10]
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(QItemSection, { side: "" }, {
                default: withCtx(() => [
                  createVNode(QToggle, {
                    modelValue: $setup.settings.showIcons,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.settings.showIcons = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => _cache[11] || (_cache[11] = [
                      createTextVNode(
                        "Square Icons",
                        -1
                        /* CACHED */
                      )
                    ])),
                    _: 1,
                    __: [11]
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(QItemSection, { side: "" }, {
                default: withCtx(() => [
                  createVNode(QToggle, {
                    modelValue: $setup.settings.squareIcons,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.settings.squareIcons = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QSeparator),
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => _cache[12] || (_cache[12] = [
                      createTextVNode(
                        "Force Mobile UI",
                        -1
                        /* CACHED */
                      )
                    ])),
                    _: 1,
                    __: [12]
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(QItemSection, { side: "" }, {
                default: withCtx(() => [
                  createVNode(QToggle, {
                    modelValue: $setup.settings.forceMobileUi,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.settings.forceMobileUi = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => _cache[13] || (_cache[13] = [
                      createTextVNode(
                        "Show Update Time",
                        -1
                        /* CACHED */
                      )
                    ])),
                    _: 1,
                    __: [13]
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(QItemSection, { side: "" }, {
                default: withCtx(() => [
                  createVNode(QToggle, {
                    modelValue: $setup.settings.showUpdateTime,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.settings.showUpdateTime = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => _cache[14] || (_cache[14] = [
                      createTextVNode(
                        "Show Last Switch",
                        -1
                        /* CACHED */
                      )
                    ])),
                    _: 1,
                    __: [14]
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(QItemSection, { side: "" }, {
                default: withCtx(() => [
                  createVNode(QToggle, {
                    modelValue: $setup.settings.showLastSwitch,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.settings.showLastSwitch = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QSeparator),
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => _cache[15] || (_cache[15] = [
                      createTextVNode(
                        "Icon Size",
                        -1
                        /* CACHED */
                      )
                    ])),
                    _: 1,
                    __: [15]
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QSlider, {
                    modelValue: $setup.settings.iconSize,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.settings.iconSize = $event),
                    min: 24,
                    max: 128,
                    label: "",
                    "label-value": $setup.settings.iconSize + "px"
                  }, null, 8, ["modelValue", "label-value"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const TableSettings = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/zowie/dev/pkstatus/src/components/StatusPage/Settings/TableSettings.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ListSettings",
  setup(__props, { expose: __expose }) {
    __expose();
    const settings = useSettingsStore().status.list;
    const __returned__ = { settings };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QBtnDropdown, {
    icon: "settings",
    flat: ""
  }, {
    default: withCtx(() => [
      createVNode(QList, {
        bordered: "",
        class: "rounded-borders"
      }, {
        default: withCtx(() => [
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => _cache[4] || (_cache[4] = [
                      createTextVNode(
                        "Show Update Time",
                        -1
                        /* CACHED */
                      )
                    ])),
                    _: 1,
                    __: [4]
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(QItemSection, { side: "" }, {
                default: withCtx(() => [
                  createVNode(QToggle, {
                    modelValue: $setup.settings.showUpdateTime,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.settings.showUpdateTime = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => _cache[5] || (_cache[5] = [
                      createTextVNode(
                        "Show Last Switch",
                        -1
                        /* CACHED */
                      )
                    ])),
                    _: 1,
                    __: [5]
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(QItemSection, { side: "" }, {
                default: withCtx(() => [
                  createVNode(QToggle, {
                    modelValue: $setup.settings.showLastSwitch,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.settings.showLastSwitch = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QSeparator),
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => _cache[6] || (_cache[6] = [
                      createTextVNode(
                        "Square Icons",
                        -1
                        /* CACHED */
                      )
                    ])),
                    _: 1,
                    __: [6]
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(QItemSection, { side: "" }, {
                default: withCtx(() => [
                  createVNode(QToggle, {
                    modelValue: $setup.settings.squareIcons,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.settings.squareIcons = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => _cache[7] || (_cache[7] = [
                      createTextVNode(
                        "Icon Size",
                        -1
                        /* CACHED */
                      )
                    ])),
                    _: 1,
                    __: [7]
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QSlider, {
                    modelValue: $setup.settings.iconSize,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.settings.iconSize = $event),
                    min: 24,
                    max: 128,
                    label: "",
                    "label-value": $setup.settings.iconSize + "px"
                  }, null, 8, ["modelValue", "label-value"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const ListSettings = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/zowie/dev/pkstatus/src/components/StatusPage/Settings/ListSettings.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TileSettings",
  setup(__props, { expose: __expose }) {
    __expose();
    const settings = useSettingsStore().status.tile;
    const __returned__ = { settings };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QBtnDropdown, {
    icon: "settings",
    flat: ""
  }, {
    default: withCtx(() => [
      createVNode(QList, {
        bordered: "",
        class: "rounded-borders"
      }, {
        default: withCtx(() => [
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => _cache[5] || (_cache[5] = [
                      createTextVNode(
                        "Show Update Time",
                        -1
                        /* CACHED */
                      )
                    ])),
                    _: 1,
                    __: [5]
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(QItemSection, { side: "" }, {
                default: withCtx(() => [
                  createVNode(QToggle, {
                    modelValue: $setup.settings.showUpdateTime,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.settings.showUpdateTime = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => _cache[6] || (_cache[6] = [
                      createTextVNode(
                        "Show Last Switch",
                        -1
                        /* CACHED */
                      )
                    ])),
                    _: 1,
                    __: [6]
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(QItemSection, { side: "" }, {
                default: withCtx(() => [
                  createVNode(QToggle, {
                    modelValue: $setup.settings.showLastSwitch,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.settings.showLastSwitch = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => _cache[7] || (_cache[7] = [
                      createTextVNode(
                        "Show System Description",
                        -1
                        /* CACHED */
                      )
                    ])),
                    _: 1,
                    __: [7]
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(QItemSection, { side: "" }, {
                default: withCtx(() => [
                  createVNode(QToggle, {
                    modelValue: $setup.settings.showSystemDescription,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.settings.showSystemDescription = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => _cache[8] || (_cache[8] = [
                      createTextVNode(
                        "Show Fronter Description",
                        -1
                        /* CACHED */
                      )
                    ])),
                    _: 1,
                    __: [8]
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(QItemSection, { side: "" }, {
                default: withCtx(() => [
                  createVNode(QToggle, {
                    modelValue: $setup.settings.showFronterDescription,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.settings.showFronterDescription = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QSeparator),
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => _cache[9] || (_cache[9] = [
                      createTextVNode(
                        "Panel Width",
                        -1
                        /* CACHED */
                      )
                    ])),
                    _: 1,
                    __: [9]
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QSlider, {
                    modelValue: $setup.settings.tileSize,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.settings.tileSize = $event),
                    min: 100,
                    max: 500,
                    label: "",
                    "label-value": $setup.settings.tileSize + "px"
                  }, null, 8, ["modelValue", "label-value"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const TileSettings = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/zowie/dev/pkstatus/src/components/StatusPage/Settings/TileSettings.vue"]]);
const _sfc_main$1 = {};
const _hoisted_1 = {
  class: "row justify-center",
  style: { "min-height": "inherit" }
};
const _hoisted_2 = {
  class: "col-md-4 col-sm-6 col self-center",
  style: { "line-height": "2em", "font-size": "1.5em" }
};
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _cache[7] || (_cache[7] = createBaseVNode(
        "h3",
        { class: "text-center" },
        "Welcome to PKStatus",
        -1
        /* CACHED */
      )),
      _cache[8] || (_cache[8] = createTextVNode(
        " To get started you can: ",
        -1
        /* CACHED */
      )),
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          _cache[1] || (_cache[1] = createTextVNode(
            " Track who of your friends is fronting by ",
            -1
            /* CACHED */
          )),
          createVNode(QBtn, {
            dense: "",
            color: "primary",
            icon: "add",
            to: "/manage/add"
          }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode(
                "Adding A System",
                -1
                /* CACHED */
              )
            ])),
            _: 1,
            __: [0]
          })
        ]),
        createBaseVNode("li", null, [
          _cache[3] || (_cache[3] = createTextVNode(
            " set up your token in the ",
            -1
            /* CACHED */
          )),
          createVNode(QBtn, {
            dense: "",
            color: "primary",
            icon: "settings",
            to: "/settings"
          }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode(
                "Settings Page",
                -1
                /* CACHED */
              )
            ])),
            _: 1,
            __: [2]
          }),
          _cache[4] || (_cache[4] = createTextVNode(
            " if you wanna use the switcher ",
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("li", null, [
          _cache[5] || (_cache[5] = createTextVNode(
            " Or access the menu using the ",
            -1
            /* CACHED */
          )),
          createVNode(QIcon, { name: "menu" }),
          _cache[6] || (_cache[6] = createTextVNode(
            " icon in the top left ",
            -1
            /* CACHED */
          ))
        ])
      ])
    ])
  ]);
}
const InstructionsPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/zowie/dev/pkstatus/src/pages/status/InstructionsPage.vue"]]);
function useStatusUpdater() {
  let updateInterval = null;
  let lastUpdated = "fronters";
  const $q = useQuasar();
  const pluralKit = usePluralKit();
  const systemStore = useSystemStore();
  const settings = useSettingsStore();
  function start() {
    if (!updateInterval) {
      updateSystemInfo();
      updateInterval = setInterval(updateSystemInfo, 1e3);
    }
  }
  function stop() {
    if (updateInterval) {
      clearInterval(updateInterval);
      updateInterval = null;
    }
  }
  const systemCount = systemStore.ids.length;
  const avgRequestsPerSecond = systemCount / settings.systemUpdateInterval + systemCount / settings.fronterUpdateInterval;
  const targetReqsPerSec = 1.5;
  const multiplyInterval = avgRequestsPerSecond > targetReqsPerSec ? avgRequestsPerSecond / targetReqsPerSec : 1;
  async function updateSystemInfo() {
    var _a, _b, _c, _d;
    for (const system of systemStore.ids) {
      try {
        if (!pluralKit.systemCache.has(system)) {
          return await pluralKit.getSystem(system);
        }
        if (!pluralKit.fronterCache.has(system)) {
          return await pluralKit.getFronters(system);
        }
      } catch (e) {
        if (!(e instanceof APIError)) {
          throw e;
        }
        return $q.notify({
          type: "negative",
          message: `Error updating fronters for '${(_b = (_a = pluralKit.systemCache.get(system)) == null ? void 0 : _a.name) != null ? _b : system}'`,
          caption: `${e.status}: ${e.message} (${e.code})`
        });
      }
    }
    if (lastUpdated == "fronters") {
      lastUpdated = "system";
      for (const system of systemStore.getExpired(
        settings.systemUpdateInterval * multiplyInterval
      )) {
        try {
          return await systemStore.update(system.id);
        } catch (e) {
          if (!(e instanceof APIError)) {
            throw e;
          }
          return $q.notify({
            type: "negative",
            message: `Error updating '${system.name}'`,
            caption: `${e.status}: ${e.message} (${e.code})`
          });
        }
      }
    } else {
      lastUpdated = "fronters";
      for (const fronters of systemStore.getExpiredFronters(
        settings.fronterUpdateInterval * multiplyInterval
      )) {
        try {
          return await pluralKit.getFronters(fronters.system, {
            skipCache: true
          });
        } catch (e) {
          if (!(e instanceof APIError)) {
            throw e;
          }
          return $q.notify({
            type: "negative",
            message: `Error updating fronters for '${(_d = (_c = pluralKit.systemCache.get(fronters.system)) == null ? void 0 : _c.name) != null ? _d : fronters.system}'`,
            caption: `${e.status}: ${e.message} (${e.code})`
          });
        }
      }
    }
  }
  return {
    start,
    stop
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StatusPage",
  setup(__props, { expose: __expose }) {
    __expose();
    const pluralKit = usePluralKit();
    const systemStore = useSystemStore();
    const { status } = storeToRefs(useSettingsStore());
    const { ids } = storeToRefs(systemStore);
    const fronters = pluralKit.fronterCache.objects;
    const systems = pluralKit.systemCache.objects;
    const statusUpdater = useStatusUpdater();
    onMounted(statusUpdater.start);
    onUnmounted(statusUpdater.stop);
    const __returned__ = { pluralKit, systemStore, status, ids, fronters, systems, statusUpdater, TableSettings, ListSettings, TileSettings, InstructionsPage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createVNode(QPage, null, {
        default: withCtx(() => [
          !!$setup.ids.length ? (openBlock(), createBlock(_component_router_view, {
            key: 0,
            ids: $setup.ids,
            systems: $setup.systems,
            fronters: $setup.fronters
          }, null, 8, ["ids", "systems", "fronters"])) : (openBlock(), createBlock($setup["InstructionsPage"], { key: 1 }))
        ]),
        _: 1
        /* STABLE */
      }),
      !!$setup.ids.length ? (openBlock(), createBlock(QFooter, { key: 0 }, {
        default: withCtx(() => [
          createVNode(QToolbar, null, {
            default: withCtx(() => [
              createVNode(QTabs, {
                modelValue: $setup.status.lastLayout,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.status.lastLayout = $event),
                align: "left",
                class: "bg-primary"
              }, {
                default: withCtx(() => [
                  createVNode(QRouteTab, {
                    to: "/status/table",
                    name: "table",
                    color: "primary",
                    icon: "table_chart"
                  }),
                  createVNode(QRouteTab, {
                    to: "/status/list",
                    name: "list",
                    color: "primary",
                    icon: "view_list"
                  }),
                  createVNode(QRouteTab, {
                    to: "/status/tile",
                    name: "tile",
                    color: "primary",
                    icon: "grid_view"
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              createVNode(QSpace),
              $setup.status.lastLayout == "table" ? (openBlock(), createBlock($setup["TableSettings"], { key: 0 })) : createCommentVNode("v-if", true),
              $setup.status.lastLayout == "list" ? (openBlock(), createBlock($setup["ListSettings"], { key: 1 })) : createCommentVNode("v-if", true),
              $setup.status.lastLayout == "tile" ? (openBlock(), createBlock($setup["TileSettings"], { key: 2 })) : createCommentVNode("v-if", true)
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })) : createCommentVNode("v-if", true)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const StatusPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/pages/StatusPage.vue"]]);
export {
  StatusPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHVzUGFnZS1EaXZGMy1vUC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE4LjIvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zcGFjZS9RU3BhY2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTguMi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NsaWRlci91c2Utc2xpZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE4LjIvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zbGlkZXIvUVNsaWRlci5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0YXR1c1BhZ2UvU2V0dGluZ3MvVGFibGVTZXR0aW5ncy52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TdGF0dXNQYWdlL1NldHRpbmdzL0xpc3RTZXR0aW5ncy52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TdGF0dXNQYWdlL1NldHRpbmdzL1RpbGVTZXR0aW5ncy52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvc3RhdHVzL0luc3RydWN0aW9uc1BhZ2UudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3RhdHVzVXBkYXRlci50cyIsIi4uLy4uLy4uL3NyYy9wYWdlcy9TdGF0dXNQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU3BhY2UnLFxuXG4gIHNldHVwICgpIHtcbiAgICBjb25zdCBzcGFjZSA9IGgoJ2RpdicsIHsgY2xhc3M6ICdxLXNwYWNlJyB9KVxuICAgIHJldHVybiAoKSA9PiBzcGFjZVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RvdWNoLXBhbi9Ub3VjaFBhbi5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcbmltcG9ydCB7IHVzZUZvcm1Qcm9wcywgdXNlRm9ybUluamVjdCB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS1mb3JtL3ByaXZhdGUudXNlLWZvcm0uanMnXG5cbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgcG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcbmltcG9ydCB7IGlzTnVtYmVyLCBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzL2lzLmpzJ1xuaW1wb3J0IHsgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcblxuY29uc3QgbWFya2VyUHJlZml4Q2xhc3MgPSAncS1zbGlkZXJfX21hcmtlci1sYWJlbHMnXG5jb25zdCBkZWZhdWx0TWFya2VyQ29udmVydEZuID0gdiA9PiAoeyB2YWx1ZTogdiB9KVxuY29uc3QgZGVmYXVsdE1hcmtlckxhYmVsUmVuZGVyRm4gPSAoeyBtYXJrZXIgfSkgPT4gaCgnZGl2Jywge1xuICBrZXk6IG1hcmtlci52YWx1ZSxcbiAgc3R5bGU6IG1hcmtlci5zdHlsZSxcbiAgY2xhc3M6IG1hcmtlci5jbGFzc2VzXG59LCBtYXJrZXIubGFiZWwpXG5cbi8vIFBHRE9XTiwgTEVGVCwgRE9XTiwgUEdVUCwgUklHSFQsIFVQXG5leHBvcnQgY29uc3Qga2V5Q29kZXMgPSBbIDM0LCAzNywgNDAsIDMzLCAzOSwgMzggXVxuXG5leHBvcnQgY29uc3QgdXNlU2xpZGVyUHJvcHMgPSB7XG4gIC4uLnVzZURhcmtQcm9wcyxcbiAgLi4udXNlRm9ybVByb3BzLFxuXG4gIG1pbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAwXG4gIH0sXG4gIG1heDoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxMDBcbiAgfSxcbiAgaW5uZXJNaW46IE51bWJlcixcbiAgaW5uZXJNYXg6IE51bWJlcixcblxuICBzdGVwOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEsXG4gICAgdmFsaWRhdG9yOiB2ID0+IHYgPj0gMFxuICB9LFxuXG4gIHNuYXA6IEJvb2xlYW4sXG5cbiAgdmVydGljYWw6IEJvb2xlYW4sXG4gIHJldmVyc2U6IEJvb2xlYW4sXG5cbiAgY29sb3I6IFN0cmluZyxcbiAgbWFya2VyTGFiZWxzQ2xhc3M6IFN0cmluZyxcblxuICBsYWJlbDogQm9vbGVhbixcbiAgbGFiZWxDb2xvcjogU3RyaW5nLFxuICBsYWJlbFRleHRDb2xvcjogU3RyaW5nLFxuICBsYWJlbEFsd2F5czogQm9vbGVhbixcbiAgc3dpdGNoTGFiZWxTaWRlOiBCb29sZWFuLFxuXG4gIG1hcmtlcnM6IFsgQm9vbGVhbiwgTnVtYmVyIF0sXG4gIG1hcmtlckxhYmVsczogWyBCb29sZWFuLCBBcnJheSwgT2JqZWN0LCBGdW5jdGlvbiBdLFxuICBzd2l0Y2hNYXJrZXJMYWJlbHNTaWRlOiBCb29sZWFuLFxuXG4gIHRyYWNrSW1nOiBTdHJpbmcsXG4gIHRyYWNrQ29sb3I6IFN0cmluZyxcbiAgaW5uZXJUcmFja0ltZzogU3RyaW5nLFxuICBpbm5lclRyYWNrQ29sb3I6IFN0cmluZyxcbiAgc2VsZWN0aW9uQ29sb3I6IFN0cmluZyxcbiAgc2VsZWN0aW9uSW1nOiBTdHJpbmcsXG5cbiAgdGh1bWJTaXplOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICcyMHB4J1xuICB9LFxuICB0cmFja1NpemU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJzRweCdcbiAgfSxcblxuICBkaXNhYmxlOiBCb29sZWFuLFxuICByZWFkb25seTogQm9vbGVhbixcbiAgZGVuc2U6IEJvb2xlYW4sXG5cbiAgdGFiaW5kZXg6IFsgU3RyaW5nLCBOdW1iZXIgXSxcblxuICB0aHVtYkNvbG9yOiBTdHJpbmcsXG4gIHRodW1iUGF0aDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnTSA0LCAxMCBhIDYsNiAwIDEsMCAxMiwwIGEgNiw2IDAgMSwwIC0xMiwwJ1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VTbGlkZXJFbWl0cyA9IFsgJ3BhbicsICd1cGRhdGU6bW9kZWxWYWx1ZScsICdjaGFuZ2UnIF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgdXBkYXRlVmFsdWUsIHVwZGF0ZVBvc2l0aW9uLCBnZXREcmFnZ2luZywgZm9ybUF0dHJzIH0pIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgc2xvdHMsIHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuXG4gIGNvbnN0IGluamVjdEZvcm1JbnB1dCA9IHVzZUZvcm1JbmplY3QoZm9ybUF0dHJzKVxuXG4gIGNvbnN0IGFjdGl2ZSA9IHJlZihmYWxzZSlcbiAgY29uc3QgcHJldmVudEZvY3VzID0gcmVmKGZhbHNlKVxuICBjb25zdCBmb2N1cyA9IHJlZihmYWxzZSlcbiAgY29uc3QgZHJhZ2dpbmcgPSByZWYoZmFsc2UpXG5cbiAgY29uc3QgYXhpcyA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICctLXYnIDogJy0taCcpKVxuICBjb25zdCBsYWJlbFNpZGUgPSBjb21wdXRlZCgoKSA9PiAnLScgKyAocHJvcHMuc3dpdGNoTGFiZWxTaWRlID09PSB0cnVlID8gJ3N3aXRjaGVkJyA6ICdzdGFuZGFyZCcpKVxuXG4gIGNvbnN0IGlzUmV2ZXJzZWQgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgID8gcHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZVxuICAgICAgOiBwcm9wcy5yZXZlcnNlICE9PSAoJHEubGFuZy5ydGwgPT09IHRydWUpXG4gICkpXG5cbiAgY29uc3QgaW5uZXJNaW4gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNOYU4ocHJvcHMuaW5uZXJNaW4pID09PSB0cnVlIHx8IHByb3BzLmlubmVyTWluIDwgcHJvcHMubWluXG4gICAgICA/IHByb3BzLm1pblxuICAgICAgOiBwcm9wcy5pbm5lck1pblxuICApKVxuICBjb25zdCBpbm5lck1heCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc05hTihwcm9wcy5pbm5lck1heCkgPT09IHRydWUgfHwgcHJvcHMuaW5uZXJNYXggPiBwcm9wcy5tYXhcbiAgICAgID8gcHJvcHMubWF4XG4gICAgICA6IHByb3BzLmlubmVyTWF4XG4gICkpXG5cbiAgY29uc3QgZWRpdGFibGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5yZWFkb25seSAhPT0gdHJ1ZVxuICAgICYmIGlubmVyTWluLnZhbHVlIDwgaW5uZXJNYXgudmFsdWVcbiAgKSlcblxuICBjb25zdCByb3VuZFZhbHVlRm4gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnN0ZXAgPT09IDApIHtcbiAgICAgIHJldHVybiB2ID0+IHZcbiAgICB9XG5cbiAgICBjb25zdCBkZWNpbWFscyA9IChTdHJpbmcocHJvcHMuc3RlcCkudHJpbSgpLnNwbGl0KCcuJylbIDEgXSB8fCAnJykubGVuZ3RoXG4gICAgcmV0dXJuIHYgPT4gcGFyc2VGbG9hdCh2LnRvRml4ZWQoZGVjaW1hbHMpKVxuICB9KVxuXG4gIGNvbnN0IGtleVN0ZXAgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMuc3RlcCA9PT0gMCA/IDEgOiBwcm9wcy5zdGVwKSlcbiAgY29uc3QgdGFiaW5kZXggPSBjb21wdXRlZCgoKSA9PiAoZWRpdGFibGUudmFsdWUgPT09IHRydWUgPyBwcm9wcy50YWJpbmRleCB8fCAwIDogLTEpKVxuXG4gIGNvbnN0IHRyYWNrTGVuID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMubWF4IC0gcHJvcHMubWluKVxuICBjb25zdCBpbm5lckJhckxlbiA9IGNvbXB1dGVkKCgpID0+IGlubmVyTWF4LnZhbHVlIC0gaW5uZXJNaW4udmFsdWUpXG5cbiAgY29uc3QgaW5uZXJNaW5SYXRpbyA9IGNvbXB1dGVkKCgpID0+IGNvbnZlcnRNb2RlbFRvUmF0aW8oaW5uZXJNaW4udmFsdWUpKVxuICBjb25zdCBpbm5lck1heFJhdGlvID0gY29tcHV0ZWQoKCkgPT4gY29udmVydE1vZGVsVG9SYXRpbyhpbm5lck1heC52YWx1ZSkpXG5cbiAgY29uc3QgcG9zaXRpb25Qcm9wID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICA/IChpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ2JvdHRvbScgOiAndG9wJylcbiAgICAgIDogKGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnKVxuICApKVxuXG4gIGNvbnN0IHNpemVQcm9wID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ2hlaWdodCcgOiAnd2lkdGgnKSlcbiAgY29uc3QgdGhpY2tuZXNzUHJvcCA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd3aWR0aCcgOiAnaGVpZ2h0JykpXG4gIGNvbnN0IG9yaWVudGF0aW9uID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJykpXG5cbiAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhY2MgPSB7XG4gICAgICByb2xlOiAnc2xpZGVyJyxcbiAgICAgICdhcmlhLXZhbHVlbWluJzogaW5uZXJNaW4udmFsdWUsXG4gICAgICAnYXJpYS12YWx1ZW1heCc6IGlubmVyTWF4LnZhbHVlLFxuICAgICAgJ2FyaWEtb3JpZW50YXRpb24nOiBvcmllbnRhdGlvbi52YWx1ZSxcbiAgICAgICdkYXRhLXN0ZXAnOiBwcm9wcy5zdGVwXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgIGFjY1sgJ2FyaWEtZGlzYWJsZWQnIF0gPSAndHJ1ZSdcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcHMucmVhZG9ubHkgPT09IHRydWUpIHtcbiAgICAgIGFjY1sgJ2FyaWEtcmVhZG9ubHknIF0gPSAndHJ1ZSdcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgYHEtc2xpZGVyIHEtc2xpZGVyJHsgYXhpcy52YWx1ZSB9IHEtc2xpZGVyLS0keyBhY3RpdmUudmFsdWUgPT09IHRydWUgPyAnJyA6ICdpbicgfWFjdGl2ZSBpbmxpbmUgbm8td3JhcCBgXG4gICAgKyAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAncm93JyA6ICdjb2x1bW4nKVxuICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcgcS1zbGlkZXItLWVuYWJsZWQnICsgKGVkaXRhYmxlLnZhbHVlID09PSB0cnVlID8gJyBxLXNsaWRlci0tZWRpdGFibGUnIDogJycpKVxuICAgICsgKGZvY3VzLnZhbHVlID09PSAnYm90aCcgPyAnIHEtc2xpZGVyLS1mb2N1cycgOiAnJylcbiAgICArIChwcm9wcy5sYWJlbCB8fCBwcm9wcy5sYWJlbEFsd2F5cyA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWxhYmVsJyA6ICcnKVxuICAgICsgKHByb3BzLmxhYmVsQWx3YXlzID09PSB0cnVlID8gJyBxLXNsaWRlci0tbGFiZWwtYWx3YXlzJyA6ICcnKVxuICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWRhcmsnIDogJycpXG4gICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1kZW5zZSBxLXNsaWRlci0tZGVuc2UnICsgYXhpcy52YWx1ZSA6ICcnKVxuICApXG5cbiAgZnVuY3Rpb24gZ2V0UG9zaXRpb25DbGFzcyAobmFtZSkge1xuICAgIGNvbnN0IGNscyA9ICdxLXNsaWRlcl9fJyArIG5hbWVcbiAgICByZXR1cm4gYCR7IGNscyB9ICR7IGNscyB9JHsgYXhpcy52YWx1ZSB9ICR7IGNscyB9JHsgYXhpcy52YWx1ZSB9JHsgbGFiZWxTaWRlLnZhbHVlIH1gXG4gIH1cbiAgZnVuY3Rpb24gZ2V0QXhpc0NsYXNzIChuYW1lKSB7XG4gICAgY29uc3QgY2xzID0gJ3Etc2xpZGVyX18nICsgbmFtZVxuICAgIHJldHVybiBgJHsgY2xzIH0gJHsgY2xzIH0keyBheGlzLnZhbHVlIH1gXG4gIH1cblxuICBjb25zdCBzZWxlY3Rpb25CYXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBjb2xvciA9IHByb3BzLnNlbGVjdGlvbkNvbG9yIHx8IHByb3BzLmNvbG9yXG4gICAgcmV0dXJuICdxLXNsaWRlcl9fc2VsZWN0aW9uIGFic29sdXRlJ1xuICAgICAgKyAoY29sb3IgIT09IHZvaWQgMCA/IGAgdGV4dC0keyBjb2xvciB9YCA6ICcnKVxuICB9KVxuICBjb25zdCBtYXJrZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldEF4aXNDbGFzcygnbWFya2VycycpICsgJyBhYnNvbHV0ZSBvdmVyZmxvdy1oaWRkZW4nKVxuICBjb25zdCB0cmFja0NvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0QXhpc0NsYXNzKCd0cmFjay1jb250YWluZXInKSlcbiAgY29uc3QgcGluQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRQb3NpdGlvbkNsYXNzKCdwaW4nKSlcbiAgY29uc3QgbGFiZWxDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldFBvc2l0aW9uQ2xhc3MoJ2xhYmVsJykpXG4gIGNvbnN0IHRleHRDb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldFBvc2l0aW9uQ2xhc3MoJ3RleHQtY29udGFpbmVyJykpXG4gIGNvbnN0IG1hcmtlckxhYmVsc0NvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICBnZXRQb3NpdGlvbkNsYXNzKCdtYXJrZXItbGFiZWxzLWNvbnRhaW5lcicpXG4gICAgKyAocHJvcHMubWFya2VyTGFiZWxzQ2xhc3MgIT09IHZvaWQgMCA/IGAgJHsgcHJvcHMubWFya2VyTGFiZWxzQ2xhc3MgfWAgOiAnJylcbiAgKVxuXG4gIGNvbnN0IHRyYWNrQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLXNsaWRlcl9fdHJhY2sgcmVsYXRpdmUtcG9zaXRpb24gbm8tb3V0bGluZSdcbiAgICArIChwcm9wcy50cmFja0NvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLnRyYWNrQ29sb3IgfWAgOiAnJylcbiAgKVxuICBjb25zdCB0cmFja1N0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IHsgWyB0aGlja25lc3NQcm9wLnZhbHVlIF06IHByb3BzLnRyYWNrU2l6ZSB9XG4gICAgaWYgKHByb3BzLnRyYWNrSW1nICE9PSB2b2lkIDApIHtcbiAgICAgIGFjYy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7IHByb3BzLnRyYWNrSW1nIH0pICFpbXBvcnRhbnRgXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBpbm5lckJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAncS1zbGlkZXJfX2lubmVyIGFic29sdXRlJ1xuICAgICsgKHByb3BzLmlubmVyVHJhY2tDb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy5pbm5lclRyYWNrQ29sb3IgfWAgOiAnJylcbiAgKVxuICBjb25zdCBpbm5lckJhclN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGlubmVyRGlmZiA9IGlubmVyTWF4UmF0aW8udmFsdWUgLSBpbm5lck1pblJhdGlvLnZhbHVlXG4gICAgY29uc3QgYWNjID0ge1xuICAgICAgWyBwb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqIGlubmVyTWluUmF0aW8udmFsdWUgfSVgLFxuICAgICAgWyBzaXplUHJvcC52YWx1ZSBdOiBpbm5lckRpZmYgPT09IDBcbiAgICAgICAgPyAnMnB4J1xuICAgICAgICA6IGAkeyAxMDAgKiBpbm5lckRpZmYgfSVgXG4gICAgfVxuICAgIGlmIChwcm9wcy5pbm5lclRyYWNrSW1nICE9PSB2b2lkIDApIHtcbiAgICAgIGFjYy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7IHByb3BzLmlubmVyVHJhY2tJbWcgfSkgIWltcG9ydGFudGBcbiAgICB9XG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRSYXRpb1RvTW9kZWwgKHJhdGlvKSB7XG4gICAgY29uc3QgeyBtaW4sIG1heCwgc3RlcCB9ID0gcHJvcHNcbiAgICBsZXQgbW9kZWwgPSBtaW4gKyByYXRpbyAqIChtYXggLSBtaW4pXG5cbiAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgIGNvbnN0IG1vZHVsbyA9IChtb2RlbCAtIGlubmVyTWluLnZhbHVlKSAlIHN0ZXBcbiAgICAgIG1vZGVsICs9IChNYXRoLmFicyhtb2R1bG8pID49IHN0ZXAgLyAyID8gKG1vZHVsbyA8IDAgPyAtMSA6IDEpICogc3RlcCA6IDApIC0gbW9kdWxvXG4gICAgfVxuXG4gICAgbW9kZWwgPSByb3VuZFZhbHVlRm4udmFsdWUobW9kZWwpXG5cbiAgICByZXR1cm4gYmV0d2Vlbihtb2RlbCwgaW5uZXJNaW4udmFsdWUsIGlubmVyTWF4LnZhbHVlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydE1vZGVsVG9SYXRpbyAobW9kZWwpIHtcbiAgICByZXR1cm4gdHJhY2tMZW4udmFsdWUgPT09IDBcbiAgICAgID8gMFxuICAgICAgOiAobW9kZWwgLSBwcm9wcy5taW4pIC8gdHJhY2tMZW4udmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERyYWdnaW5nUmF0aW8gKGV2dCwgZHJhZ2dpbmcpIHtcbiAgICBjb25zdFxuICAgICAgcG9zID0gcG9zaXRpb24oZXZ0KSxcbiAgICAgIHZhbCA9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgID8gYmV0d2VlbigocG9zLnRvcCAtIGRyYWdnaW5nLnRvcCkgLyBkcmFnZ2luZy5oZWlnaHQsIDAsIDEpXG4gICAgICAgIDogYmV0d2VlbigocG9zLmxlZnQgLSBkcmFnZ2luZy5sZWZ0KSAvIGRyYWdnaW5nLndpZHRoLCAwLCAxKVxuXG4gICAgcmV0dXJuIGJldHdlZW4oXG4gICAgICBpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gMS4wIC0gdmFsIDogdmFsLFxuICAgICAgaW5uZXJNaW5SYXRpby52YWx1ZSxcbiAgICAgIGlubmVyTWF4UmF0aW8udmFsdWVcbiAgICApXG4gIH1cblxuICBjb25zdCBtYXJrZXJTdGVwID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGlzTnVtYmVyKHByb3BzLm1hcmtlcnMpID09PSB0cnVlID8gcHJvcHMubWFya2VycyA6IGtleVN0ZXAudmFsdWUpXG4gIClcblxuICBjb25zdCBtYXJrZXJUaWNrcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhY2MgPSBbXVxuICAgIGNvbnN0IHN0ZXAgPSBtYXJrZXJTdGVwLnZhbHVlXG4gICAgY29uc3QgbWF4ID0gcHJvcHMubWF4XG5cbiAgICBsZXQgdmFsdWUgPSBwcm9wcy5taW5cbiAgICBkbyB7XG4gICAgICBhY2MucHVzaCh2YWx1ZSlcbiAgICAgIHZhbHVlICs9IHN0ZXBcbiAgICB9IHdoaWxlICh2YWx1ZSA8IG1heClcblxuICAgIGFjYy5wdXNoKG1heClcbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgY29uc3QgbWFya2VyTGFiZWxDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBwcmVmaXggPSBgICR7IG1hcmtlclByZWZpeENsYXNzIH0keyBheGlzLnZhbHVlIH0tYFxuICAgIHJldHVybiBtYXJrZXJQcmVmaXhDbGFzc1xuICAgICAgKyBgJHsgcHJlZml4IH0keyBwcm9wcy5zd2l0Y2hNYXJrZXJMYWJlbHNTaWRlID09PSB0cnVlID8gJ3N3aXRjaGVkJyA6ICdzdGFuZGFyZCcgfWBcbiAgICAgICsgYCR7IHByZWZpeCB9JHsgaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdydGwnIDogJ2x0cicgfWBcbiAgfSlcblxuICBjb25zdCBtYXJrZXJMYWJlbHNMaXN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5tYXJrZXJMYWJlbHMgPT09IGZhbHNlKSB7IHJldHVybiBudWxsIH1cblxuICAgIHJldHVybiBnZXRNYXJrZXJMaXN0KHByb3BzLm1hcmtlckxhYmVscykubWFwKChlbnRyeSwgaW5kZXgpID0+ICh7XG4gICAgICBpbmRleCxcbiAgICAgIHZhbHVlOiBlbnRyeS52YWx1ZSxcbiAgICAgIGxhYmVsOiBlbnRyeS5sYWJlbCB8fCBlbnRyeS52YWx1ZSxcbiAgICAgIGNsYXNzZXM6IG1hcmtlckxhYmVsQ2xhc3MudmFsdWVcbiAgICAgICAgKyAoZW50cnkuY2xhc3NlcyAhPT0gdm9pZCAwID8gJyAnICsgZW50cnkuY2xhc3NlcyA6ICcnKSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIC4uLmdldE1hcmtlckxhYmVsU3R5bGUoZW50cnkudmFsdWUpLFxuICAgICAgICAuLi4oZW50cnkuc3R5bGUgfHwge30pXG4gICAgICB9XG4gICAgfSkpXG4gIH0pXG5cbiAgY29uc3QgbWFya2VyU2NvcGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgIG1hcmtlckxpc3Q6IG1hcmtlckxhYmVsc0xpc3QudmFsdWUsXG4gICAgbWFya2VyTWFwOiBtYXJrZXJMYWJlbHNNYXAudmFsdWUsXG4gICAgY2xhc3NlczogbWFya2VyTGFiZWxDbGFzcy52YWx1ZSwgLy8gVE9ETyB0cyBkZWZpbml0aW9uXG4gICAgZ2V0U3R5bGU6IGdldE1hcmtlckxhYmVsU3R5bGVcbiAgfSkpXG5cbiAgY29uc3QgbWFya2VyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3Qgc2l6ZSA9IGlubmVyQmFyTGVuLnZhbHVlID09PSAwXG4gICAgICA/ICcycHgnXG4gICAgICA6IDEwMCAqIG1hcmtlclN0ZXAudmFsdWUgLyBpbm5lckJhckxlbi52YWx1ZVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmlubmVyQmFyU3R5bGUudmFsdWUsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgPyBgMnB4ICR7IHNpemUgfSVgXG4gICAgICAgIDogYCR7IHNpemUgfSUgMnB4YFxuICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBnZXRNYXJrZXJMaXN0IChkZWYpIHtcbiAgICBpZiAoZGVmID09PSBmYWxzZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICBpZiAoZGVmID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gbWFya2VyVGlja3MudmFsdWUubWFwKGRlZmF1bHRNYXJrZXJDb252ZXJ0Rm4pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBtYXJrZXJUaWNrcy52YWx1ZS5tYXAodmFsdWUgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZGVmKHZhbHVlKVxuICAgICAgICByZXR1cm4gaXNPYmplY3QoaXRlbSkgPT09IHRydWUgPyB7IC4uLml0ZW0sIHZhbHVlIH0gOiB7IHZhbHVlLCBsYWJlbDogaXRlbSB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlckZuID0gKHsgdmFsdWUgfSkgPT4gdmFsdWUgPj0gcHJvcHMubWluICYmIHZhbHVlIDw9IHByb3BzLm1heFxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGVmKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGRlZlxuICAgICAgICAubWFwKGl0ZW0gPT4gKGlzT2JqZWN0KGl0ZW0pID09PSB0cnVlID8gaXRlbSA6IHsgdmFsdWU6IGl0ZW0gfSkpXG4gICAgICAgIC5maWx0ZXIoZmlsdGVyRm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRlZikubWFwKGtleSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gZGVmWyBrZXkgXVxuICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoa2V5KVxuICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0ZW0pID09PSB0cnVlID8geyAuLi5pdGVtLCB2YWx1ZSB9IDogeyB2YWx1ZSwgbGFiZWw6IGl0ZW0gfVxuICAgIH0pLmZpbHRlcihmaWx0ZXJGbilcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1hcmtlckxhYmVsU3R5bGUgKHZhbCkge1xuICAgIHJldHVybiB7IFsgcG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiAodmFsIC0gcHJvcHMubWluKSAvIHRyYWNrTGVuLnZhbHVlIH0lYCB9XG4gIH1cblxuICBjb25zdCBtYXJrZXJMYWJlbHNNYXAgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLm1hcmtlckxhYmVscyA9PT0gZmFsc2UpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgY29uc3QgYWNjID0ge31cbiAgICBtYXJrZXJMYWJlbHNMaXN0LnZhbHVlLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgYWNjWyBlbnRyeS52YWx1ZSBdID0gZW50cnlcbiAgICB9KVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBmdW5jdGlvbiBnZXRNYXJrZXJMYWJlbHNDb250ZW50ICgpIHtcbiAgICBpZiAoc2xvdHNbICdtYXJrZXItbGFiZWwtZ3JvdXAnIF0gIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHNsb3RzWyAnbWFya2VyLWxhYmVsLWdyb3VwJyBdKG1hcmtlclNjb3BlLnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGZuID0gc2xvdHNbICdtYXJrZXItbGFiZWwnIF0gfHwgZGVmYXVsdE1hcmtlckxhYmVsUmVuZGVyRm5cbiAgICByZXR1cm4gbWFya2VyTGFiZWxzTGlzdC52YWx1ZS5tYXAobWFya2VyID0+IGZuKHtcbiAgICAgIG1hcmtlcixcbiAgICAgIC4uLm1hcmtlclNjb3BlLnZhbHVlXG4gICAgfSkpXG4gIH1cblxuICBjb25zdCBwYW5EaXJlY3RpdmUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgLy8gaWYgZWRpdGFibGUudmFsdWUgPT09IHRydWVcbiAgICByZXR1cm4gWyBbXG4gICAgICBUb3VjaFBhbixcbiAgICAgIG9uUGFuLFxuICAgICAgdm9pZCAwLFxuICAgICAge1xuICAgICAgICBbIG9yaWVudGF0aW9uLnZhbHVlIF06IHRydWUsXG4gICAgICAgIHByZXZlbnQ6IHRydWUsXG4gICAgICAgIHN0b3A6IHRydWUsXG4gICAgICAgIG1vdXNlOiB0cnVlLFxuICAgICAgICBtb3VzZUFsbERpcjogdHJ1ZVxuICAgICAgfVxuICAgIF0gXVxuICB9KVxuXG4gIGZ1bmN0aW9uIG9uUGFuIChldmVudCkge1xuICAgIGlmIChldmVudC5pc0ZpbmFsID09PSB0cnVlKSB7XG4gICAgICBpZiAoZHJhZ2dpbmcudmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICB1cGRhdGVQb3NpdGlvbihldmVudC5ldnQpXG4gICAgICAgIC8vIG9ubHkgaWYgdG91Y2gsIGJlY2F1c2Ugd2UgYWxzbyBoYXZlIG1vdXNlZG93bi91cDpcbiAgICAgICAgZXZlbnQudG91Y2ggPT09IHRydWUgJiYgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgICAgICAgZHJhZ2dpbmcudmFsdWUgPSB2b2lkIDBcbiAgICAgICAgZW1pdCgncGFuJywgJ2VuZCcpXG4gICAgICB9XG4gICAgICBhY3RpdmUudmFsdWUgPSBmYWxzZVxuICAgICAgZm9jdXMudmFsdWUgPSBmYWxzZVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5pc0ZpcnN0ID09PSB0cnVlKSB7XG4gICAgICBkcmFnZ2luZy52YWx1ZSA9IGdldERyYWdnaW5nKGV2ZW50LmV2dClcbiAgICAgIHVwZGF0ZVBvc2l0aW9uKGV2ZW50LmV2dClcbiAgICAgIHVwZGF0ZVZhbHVlKClcbiAgICAgIGFjdGl2ZS52YWx1ZSA9IHRydWVcbiAgICAgIGVtaXQoJ3BhbicsICdzdGFydCcpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdXBkYXRlUG9zaXRpb24oZXZlbnQuZXZ0KVxuICAgICAgdXBkYXRlVmFsdWUoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQmx1ciAoKSB7XG4gICAgZm9jdXMudmFsdWUgPSBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gb25BY3RpdmF0ZSAoZXZ0KSB7XG4gICAgdXBkYXRlUG9zaXRpb24oZXZ0LCBnZXREcmFnZ2luZyhldnQpKVxuICAgIHVwZGF0ZVZhbHVlKClcblxuICAgIHByZXZlbnRGb2N1cy52YWx1ZSA9IHRydWVcbiAgICBhY3RpdmUudmFsdWUgPSB0cnVlXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EZWFjdGl2YXRlLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25EZWFjdGl2YXRlICgpIHtcbiAgICBwcmV2ZW50Rm9jdXMudmFsdWUgPSBmYWxzZVxuICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlXG5cbiAgICB1cGRhdGVWYWx1ZSh0cnVlKVxuICAgIG9uQmx1cigpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EZWFjdGl2YXRlLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25Nb2JpbGVDbGljayAoZXZ0KSB7XG4gICAgdXBkYXRlUG9zaXRpb24oZXZ0LCBnZXREcmFnZ2luZyhldnQpKVxuICAgIHVwZGF0ZVZhbHVlKHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbktleXVwIChldnQpIHtcbiAgICBpZiAoa2V5Q29kZXMuaW5jbHVkZXMoZXZ0LmtleUNvZGUpKSB7XG4gICAgICB1cGRhdGVWYWx1ZSh0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRleHRDb250YWluZXJTdHlsZSAocmF0aW8pIHtcbiAgICBpZiAocHJvcHMudmVydGljYWwgPT09IHRydWUpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgY29uc3QgcCA9ICRxLmxhbmcucnRsICE9PSBwcm9wcy5yZXZlcnNlID8gMSAtIHJhdGlvIDogcmF0aW9cbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWChjYWxjKCR7IDIgKiBwIC0gMSB9ICogJHsgcHJvcHMudGh1bWJTaXplIH0gLyAyICsgJHsgNTAgLSAxMDAgKiBwIH0lKSlgXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VGh1bWJSZW5kZXJGbiAodGh1bWIpIHtcbiAgICBjb25zdCBmb2N1c0NsYXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJldmVudEZvY3VzLnZhbHVlID09PSBmYWxzZSAmJiAoZm9jdXMudmFsdWUgPT09IHRodW1iLmZvY3VzVmFsdWUgfHwgZm9jdXMudmFsdWUgPT09ICdib3RoJylcbiAgICAgICAgPyAnIHEtc2xpZGVyLS1mb2N1cydcbiAgICAgICAgOiAnJ1xuICAgICkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLXNsaWRlcl9fdGh1bWIgcS1zbGlkZXJfX3RodW1iJHsgYXhpcy52YWx1ZSB9IHEtc2xpZGVyX190aHVtYiR7IGF4aXMudmFsdWUgfS0keyBpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ3J0bCcgOiAnbHRyJyB9IGFic29sdXRlIG5vbi1zZWxlY3RhYmxlYFxuICAgICAgKyBmb2N1c0NsYXNzLnZhbHVlXG4gICAgICArICh0aHVtYi50aHVtYkNvbG9yLnZhbHVlICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgdGh1bWIudGh1bWJDb2xvci52YWx1ZSB9YCA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHdpZHRoOiBwcm9wcy50aHVtYlNpemUsXG4gICAgICBoZWlnaHQ6IHByb3BzLnRodW1iU2l6ZSxcbiAgICAgIFsgcG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiB0aHVtYi5yYXRpby52YWx1ZSB9JWAsXG4gICAgICB6SW5kZXg6IGZvY3VzLnZhbHVlID09PSB0aHVtYi5mb2N1c1ZhbHVlID8gMiA6IHZvaWQgMFxuICAgIH0pKVxuXG4gICAgY29uc3QgcGluQ29sb3IgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICB0aHVtYi5sYWJlbENvbG9yLnZhbHVlICE9PSB2b2lkIDBcbiAgICAgICAgPyBgIHRleHQtJHsgdGh1bWIubGFiZWxDb2xvci52YWx1ZSB9YFxuICAgICAgICA6ICcnXG4gICAgKSlcblxuICAgIGNvbnN0IHRleHRDb250YWluZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IGdldFRleHRDb250YWluZXJTdHlsZSh0aHVtYi5yYXRpby52YWx1ZSkpXG5cbiAgICBjb25zdCB0ZXh0Q2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAncS1zbGlkZXJfX3RleHQnXG4gICAgICArICh0aHVtYi5sYWJlbFRleHRDb2xvci52YWx1ZSAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IHRodW1iLmxhYmVsVGV4dENvbG9yLnZhbHVlIH1gIDogJycpXG4gICAgKSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCB0aHVtYkNvbnRlbnQgPSBbXG4gICAgICAgIGgoJ3N2ZycsIHtcbiAgICAgICAgICBjbGFzczogJ3Etc2xpZGVyX190aHVtYi1zaGFwZSBhYnNvbHV0ZS1mdWxsJyxcbiAgICAgICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoJ3BhdGgnLCB7IGQ6IHByb3BzLnRodW1iUGF0aCB9KVxuICAgICAgICBdKSxcblxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1zbGlkZXJfX2ZvY3VzLXJpbmcgZml0JyB9KVxuICAgICAgXVxuXG4gICAgICBpZiAocHJvcHMubGFiZWwgPT09IHRydWUgfHwgcHJvcHMubGFiZWxBbHdheXMgPT09IHRydWUpIHtcbiAgICAgICAgdGh1bWJDb250ZW50LnB1c2goXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6IHBpbkNsYXNzLnZhbHVlICsgJyBhYnNvbHV0ZSBmaXQgbm8tcG9pbnRlci1ldmVudHMnICsgcGluQ29sb3IudmFsdWVcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBsYWJlbENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICBzdHlsZTogeyBtaW5XaWR0aDogcHJvcHMudGh1bWJTaXplIH1cbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICAgIGNsYXNzOiB0ZXh0Q29udGFpbmVyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHRleHRDb250YWluZXJTdHlsZS52YWx1ZVxuICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgaCgnc3BhbicsIHsgY2xhc3M6IHRleHRDbGFzcy52YWx1ZSB9LCB0aHVtYi5sYWJlbC52YWx1ZSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChwcm9wcy5uYW1lICE9PSB2b2lkIDAgJiYgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGluamVjdEZvcm1JbnB1dCh0aHVtYkNvbnRlbnQsICdwdXNoJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICAuLi50aHVtYi5nZXROb2RlRGF0YSgpXG4gICAgICB9LCB0aHVtYkNvbnRlbnQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29udGVudCAoc2VsZWN0aW9uQmFyU3R5bGUsIHRyYWNrQ29udGFpbmVyVGFiaW5kZXgsIHRyYWNrQ29udGFpbmVyRXZlbnRzLCBpbmplY3RUaHVtYikge1xuICAgIGNvbnN0IHRyYWNrQ29udGVudCA9IFtdXG5cbiAgICBwcm9wcy5pbm5lclRyYWNrQ29sb3IgIT09ICd0cmFuc3BhcmVudCcgJiYgdHJhY2tDb250ZW50LnB1c2goXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGtleTogJ2lubmVyJyxcbiAgICAgICAgY2xhc3M6IGlubmVyQmFyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBpbm5lckJhclN0eWxlLnZhbHVlXG4gICAgICB9KVxuICAgIClcblxuICAgIHByb3BzLnNlbGVjdGlvbkNvbG9yICE9PSAndHJhbnNwYXJlbnQnICYmIHRyYWNrQ29udGVudC5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdzZWxlY3Rpb24nLFxuICAgICAgICBjbGFzczogc2VsZWN0aW9uQmFyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzZWxlY3Rpb25CYXJTdHlsZS52YWx1ZVxuICAgICAgfSlcbiAgICApXG5cbiAgICBwcm9wcy5tYXJrZXJzICE9PSBmYWxzZSAmJiB0cmFja0NvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiAnbWFya2VyJyxcbiAgICAgICAgY2xhc3M6IG1hcmtlckNsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogbWFya2VyU3R5bGUudmFsdWVcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgaW5qZWN0VGh1bWIodHJhY2tDb250ZW50KVxuXG4gICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgIGhEaXIoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAndHJhY2tDJyxcbiAgICAgICAgICBjbGFzczogdHJhY2tDb250YWluZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICB0YWJpbmRleDogdHJhY2tDb250YWluZXJUYWJpbmRleC52YWx1ZSxcbiAgICAgICAgICAuLi50cmFja0NvbnRhaW5lckV2ZW50cy52YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6IHRyYWNrQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICBzdHlsZTogdHJhY2tTdHlsZS52YWx1ZVxuICAgICAgICAgIH0sIHRyYWNrQ29udGVudClcbiAgICAgICAgXSxcbiAgICAgICAgJ3NsaWRlJyxcbiAgICAgICAgZWRpdGFibGUudmFsdWUsICgpID0+IHBhbkRpcmVjdGl2ZS52YWx1ZVxuICAgICAgKVxuICAgIF1cblxuICAgIGlmIChwcm9wcy5tYXJrZXJMYWJlbHMgIT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSBwcm9wcy5zd2l0Y2hNYXJrZXJMYWJlbHNTaWRlID09PSB0cnVlXG4gICAgICAgID8gJ3Vuc2hpZnQnXG4gICAgICAgIDogJ3B1c2gnXG5cbiAgICAgIGNvbnRlbnRbIGFjdGlvbiBdKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAga2V5OiAnbWFya2VyTCcsXG4gICAgICAgICAgY2xhc3M6IG1hcmtlckxhYmVsc0NvbnRhaW5lckNsYXNzLnZhbHVlXG4gICAgICAgIH0sIGdldE1hcmtlckxhYmVsc0NvbnRlbnQoKSlcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudFxuICB9XG5cbiAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EZWFjdGl2YXRlLCB0cnVlKVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgc3RhdGU6IHtcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGZvY3VzLFxuICAgICAgcHJldmVudEZvY3VzLFxuICAgICAgZHJhZ2dpbmcsXG5cbiAgICAgIGVkaXRhYmxlLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIHRhYmluZGV4LFxuICAgICAgYXR0cmlidXRlcyxcblxuICAgICAgcm91bmRWYWx1ZUZuLFxuICAgICAga2V5U3RlcCxcbiAgICAgIHRyYWNrTGVuLFxuICAgICAgaW5uZXJNaW4sXG4gICAgICBpbm5lck1pblJhdGlvLFxuICAgICAgaW5uZXJNYXgsXG4gICAgICBpbm5lck1heFJhdGlvLFxuICAgICAgcG9zaXRpb25Qcm9wLFxuICAgICAgc2l6ZVByb3AsXG4gICAgICBpc1JldmVyc2VkXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIG9uQWN0aXZhdGUsXG4gICAgICBvbk1vYmlsZUNsaWNrLFxuICAgICAgb25CbHVyLFxuICAgICAgb25LZXl1cCxcbiAgICAgIGdldENvbnRlbnQsXG4gICAgICBnZXRUaHVtYlJlbmRlckZuLFxuICAgICAgY29udmVydFJhdGlvVG9Nb2RlbCxcbiAgICAgIGNvbnZlcnRNb2RlbFRvUmF0aW8sXG4gICAgICBnZXREcmFnZ2luZ1JhdGlvXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyB1c2VGb3JtQXR0cnMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtZm9ybS9wcml2YXRlLnVzZS1mb3JtLmpzJ1xuXG5pbXBvcnQgdXNlU2xpZGVyLCB7XG4gIHVzZVNsaWRlclByb3BzLFxuICB1c2VTbGlkZXJFbWl0cyxcbiAga2V5Q29kZXNcbn0gZnJvbSAnLi91c2Utc2xpZGVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0L2Zvcm1hdC5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQvZXZlbnQuanMnXG5cbmNvbnN0IGdldE5vZGVEYXRhID0gKCkgPT4gKHt9KVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNsaWRlcicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VTbGlkZXJQcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiB0eXBlb2YgdiA9PT0gJ251bWJlcicgfHwgdiA9PT0gbnVsbFxuICAgIH0sXG5cbiAgICBsYWJlbFZhbHVlOiBbIFN0cmluZywgTnVtYmVyIF1cbiAgfSxcblxuICBlbWl0czogdXNlU2xpZGVyRW1pdHMsXG5cbiAgc2V0dXAgKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IHsgc3RhdGUsIG1ldGhvZHMgfSA9IHVzZVNsaWRlcih7XG4gICAgICB1cGRhdGVWYWx1ZSwgdXBkYXRlUG9zaXRpb24sIGdldERyYWdnaW5nLFxuICAgICAgZm9ybUF0dHJzOiB1c2VGb3JtQXR0cnMocHJvcHMpXG4gICAgfSlcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBjdXJSYXRpbyA9IHJlZigwKVxuICAgIGNvbnN0IG1vZGVsID0gcmVmKDApXG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVNb2RlbCAoKSB7XG4gICAgICBtb2RlbC52YWx1ZSA9IHByb3BzLm1vZGVsVmFsdWUgPT09IG51bGxcbiAgICAgICAgPyBzdGF0ZS5pbm5lck1pbi52YWx1ZVxuICAgICAgICA6IGJldHdlZW4ocHJvcHMubW9kZWxWYWx1ZSwgc3RhdGUuaW5uZXJNaW4udmFsdWUsIHN0YXRlLmlubmVyTWF4LnZhbHVlKVxuICAgIH1cblxuICAgIHdhdGNoKFxuICAgICAgKCkgPT4gYCR7IHByb3BzLm1vZGVsVmFsdWUgfXwkeyBzdGF0ZS5pbm5lck1pbi52YWx1ZSB9fCR7IHN0YXRlLmlubmVyTWF4LnZhbHVlIH1gLFxuICAgICAgbm9ybWFsaXplTW9kZWxcbiAgICApXG5cbiAgICBub3JtYWxpemVNb2RlbCgpXG5cbiAgICBjb25zdCBtb2RlbFJhdGlvID0gY29tcHV0ZWQoKCkgPT4gbWV0aG9kcy5jb252ZXJ0TW9kZWxUb1JhdGlvKG1vZGVsLnZhbHVlKSlcbiAgICBjb25zdCByYXRpbyA9IGNvbXB1dGVkKCgpID0+IChzdGF0ZS5hY3RpdmUudmFsdWUgPT09IHRydWUgPyBjdXJSYXRpby52YWx1ZSA6IG1vZGVsUmF0aW8udmFsdWUpKVxuXG4gICAgY29uc3Qgc2VsZWN0aW9uQmFyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY2MgPSB7XG4gICAgICAgIFsgc3RhdGUucG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiBzdGF0ZS5pbm5lck1pblJhdGlvLnZhbHVlIH0lYCxcbiAgICAgICAgWyBzdGF0ZS5zaXplUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogKHJhdGlvLnZhbHVlIC0gc3RhdGUuaW5uZXJNaW5SYXRpby52YWx1ZSkgfSVgXG4gICAgICB9XG4gICAgICBpZiAocHJvcHMuc2VsZWN0aW9uSW1nICE9PSB2b2lkIDApIHtcbiAgICAgICAgYWNjLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHsgcHJvcHMuc2VsZWN0aW9uSW1nIH0pICFpbXBvcnRhbnRgXG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGdldFRodW1iID0gbWV0aG9kcy5nZXRUaHVtYlJlbmRlckZuKHtcbiAgICAgIGZvY3VzVmFsdWU6IHRydWUsXG4gICAgICBnZXROb2RlRGF0YSxcbiAgICAgIHJhdGlvLFxuICAgICAgbGFiZWw6IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICAgcHJvcHMubGFiZWxWYWx1ZSAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBwcm9wcy5sYWJlbFZhbHVlXG4gICAgICAgICAgOiBtb2RlbC52YWx1ZVxuICAgICAgKSksXG4gICAgICB0aHVtYkNvbG9yOiBjb21wdXRlZCgoKSA9PiBwcm9wcy50aHVtYkNvbG9yIHx8IHByb3BzLmNvbG9yKSxcbiAgICAgIGxhYmVsQ29sb3I6IGNvbXB1dGVkKCgpID0+IHByb3BzLmxhYmVsQ29sb3IpLFxuICAgICAgbGFiZWxUZXh0Q29sb3I6IGNvbXB1dGVkKCgpID0+IHByb3BzLmxhYmVsVGV4dENvbG9yKVxuICAgIH0pXG5cbiAgICBjb25zdCB0cmFja0NvbnRhaW5lckV2ZW50cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS5lZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuICRxLnBsYXRmb3JtLmlzLm1vYmlsZSA9PT0gdHJ1ZVxuICAgICAgICA/IHsgb25DbGljazogbWV0aG9kcy5vbk1vYmlsZUNsaWNrIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICBvbk1vdXNlZG93bjogbWV0aG9kcy5vbkFjdGl2YXRlLFxuICAgICAgICAgICAgb25Gb2N1cyxcbiAgICAgICAgICAgIG9uQmx1cjogbWV0aG9kcy5vbkJsdXIsXG4gICAgICAgICAgICBvbktleWRvd24sXG4gICAgICAgICAgICBvbktleXVwOiBtZXRob2RzLm9uS2V5dXBcbiAgICAgICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZhbHVlIChjaGFuZ2UpIHtcbiAgICAgIGlmIChtb2RlbC52YWx1ZSAhPT0gcHJvcHMubW9kZWxWYWx1ZSkge1xuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG1vZGVsLnZhbHVlKVxuICAgICAgfVxuICAgICAgY2hhbmdlID09PSB0cnVlICYmIGVtaXQoJ2NoYW5nZScsIG1vZGVsLnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERyYWdnaW5nICgpIHtcbiAgICAgIHJldHVybiByb290UmVmLnZhbHVlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24gKGV2ZW50LCBkcmFnZ2luZyA9IHN0YXRlLmRyYWdnaW5nLnZhbHVlKSB7XG4gICAgICBjb25zdCByYXRpbyA9IG1ldGhvZHMuZ2V0RHJhZ2dpbmdSYXRpbyhldmVudCwgZHJhZ2dpbmcpXG5cbiAgICAgIG1vZGVsLnZhbHVlID0gbWV0aG9kcy5jb252ZXJ0UmF0aW9Ub01vZGVsKHJhdGlvKVxuXG4gICAgICBjdXJSYXRpby52YWx1ZSA9IHByb3BzLnNuYXAgIT09IHRydWUgfHwgcHJvcHMuc3RlcCA9PT0gMFxuICAgICAgICA/IHJhdGlvXG4gICAgICAgIDogbWV0aG9kcy5jb252ZXJ0TW9kZWxUb1JhdGlvKG1vZGVsLnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXMgKCkge1xuICAgICAgc3RhdGUuZm9jdXMudmFsdWUgPSB0cnVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXlkb3duIChldnQpIHtcbiAgICAgIGlmIChrZXlDb2Rlcy5pbmNsdWRlcyhldnQua2V5Q29kZSkgPT09IGZhbHNlKSByZXR1cm5cblxuICAgICAgc3RvcEFuZFByZXZlbnQoZXZ0KVxuXG4gICAgICBjb25zdFxuICAgICAgICBzdGVwVmFsID0gKFsgMzQsIDMzIF0uaW5jbHVkZXMoZXZ0LmtleUNvZGUpID8gMTAgOiAxKSAqIHN0YXRlLmtleVN0ZXAudmFsdWUsXG4gICAgICAgIG9mZnNldCA9IChcbiAgICAgICAgICAoWyAzNCwgMzcsIDQwIF0uaW5jbHVkZXMoZXZ0LmtleUNvZGUpID8gLTEgOiAxKVxuICAgICAgICAgICogKHN0YXRlLmlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAtMSA6IDEpXG4gICAgICAgICAgKiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAtMSA6IDEpICogc3RlcFZhbFxuICAgICAgICApXG5cbiAgICAgIG1vZGVsLnZhbHVlID0gYmV0d2VlbihcbiAgICAgICAgc3RhdGUucm91bmRWYWx1ZUZuLnZhbHVlKG1vZGVsLnZhbHVlICsgb2Zmc2V0KSxcbiAgICAgICAgc3RhdGUuaW5uZXJNaW4udmFsdWUsXG4gICAgICAgIHN0YXRlLmlubmVyTWF4LnZhbHVlXG4gICAgICApXG5cbiAgICAgIHVwZGF0ZVZhbHVlKClcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IG1ldGhvZHMuZ2V0Q29udGVudChcbiAgICAgICAgc2VsZWN0aW9uQmFyU3R5bGUsXG4gICAgICAgIHN0YXRlLnRhYmluZGV4LFxuICAgICAgICB0cmFja0NvbnRhaW5lckV2ZW50cyxcbiAgICAgICAgbm9kZSA9PiB7IG5vZGUucHVzaChnZXRUaHVtYigpKSB9XG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgY2xhc3M6IHN0YXRlLmNsYXNzZXMudmFsdWUgKyAocHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbCA/ICcgcS1zbGlkZXItLW5vLXZhbHVlJyA6ICcnKSxcbiAgICAgICAgLi4uc3RhdGUuYXR0cmlidXRlcy52YWx1ZSxcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICB9LCBjb250ZW50KVxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtYnRuLWRyb3Bkb3duIGljb249XCJzZXR0aW5nc1wiIGZsYXQ+XG4gICAgPHEtbGlzdCBib3JkZXJlZCBjbGFzcz1cInJvdW5kZWQtYm9yZGVyc1wiPlxuICAgICAgPHEtaXRlbT5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgb3ZlcmxpbmUgY2xhc3M9XCJxLW1iLXhzXCJcbiAgICAgICAgICAgID5WZXJ0aWNhbCBQb3NpdGlvbjwvcS1pdGVtLWxhYmVsXG4gICAgICAgICAgPlxuICAgICAgICAgIDxxLWJ0bi10b2dnbGVcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy52ZXJ0aWNhbFBvc2l0aW9uXCJcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JleS05XCJcbiAgICAgICAgICAgIDpvcHRpb25zPVwiW1xuICAgICAgICAgICAgICB7IGxhYmVsOiAnVG9wJywgdmFsdWU6ICdzdGFydCcgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ01pZGRsZScsIHZhbHVlOiAnY2VudGVyJyB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnQm90dG9tJywgdmFsdWU6ICdlbmQnIH0sXG4gICAgICAgICAgICBdXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgICA8cS1pdGVtPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBvdmVybGluZSBjbGFzcz1cInEtbWIteHNcIlxuICAgICAgICAgICAgPkhvcml6b250YWwgUG9zaXRpb248L3EtaXRlbS1sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgICA8cS1idG4tdG9nZ2xlXG4gICAgICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MuaG9yaXpvbnRhbFBvc2l0aW9uXCJcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JleS05XCJcbiAgICAgICAgICAgIDpvcHRpb25zPVwiW1xuICAgICAgICAgICAgICB7IGxhYmVsOiAnTGVmdCcsIHZhbHVlOiAnc3RhcnQnIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdDZW50ZXInLCB2YWx1ZTogJ2NlbnRlcicgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ1JpZ2h0JywgdmFsdWU6ICdlbmQnIH0sXG4gICAgICAgICAgICBdXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgICA8cS1zZXBhcmF0b3IgY2xhc3M9XCJxLW10LXNtXCIgLz5cbiAgICAgIDxxLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPlNob3cgSWNvbnM8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgPHEtdG9nZ2xlIHYtbW9kZWw9XCJzZXR0aW5ncy5zaG93SWNvbnNcIiAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgICA8cS1pdGVtPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5TcXVhcmUgSWNvbnM8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgPHEtdG9nZ2xlIHYtbW9kZWw9XCJzZXR0aW5ncy5zcXVhcmVJY29uc1wiIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICAgIDxxLXNlcGFyYXRvciAvPlxuICAgICAgPHEtaXRlbT5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+Rm9yY2UgTW9iaWxlIFVJPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgIDxxLXRvZ2dsZSB2LW1vZGVsPVwic2V0dGluZ3MuZm9yY2VNb2JpbGVVaVwiIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICAgIDxxLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPlNob3cgVXBkYXRlIFRpbWU8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgPHEtdG9nZ2xlIHYtbW9kZWw9XCJzZXR0aW5ncy5zaG93VXBkYXRlVGltZVwiIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICAgIDxxLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPlNob3cgTGFzdCBTd2l0Y2g8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgPHEtdG9nZ2xlIHYtbW9kZWw9XCJzZXR0aW5ncy5zaG93TGFzdFN3aXRjaFwiIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICAgIDxxLXNlcGFyYXRvciAvPlxuICAgICAgPHEtaXRlbT5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+SWNvbiBTaXplPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1zbGlkZXJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy5pY29uU2l6ZVwiXG4gICAgICAgICAgICA6bWluPVwiMjRcIlxuICAgICAgICAgICAgOm1heD1cIjEyOFwiXG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgOmxhYmVsLXZhbHVlPVwic2V0dGluZ3MuaWNvblNpemUgKyAncHgnXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgPC9xLWxpc3Q+XG4gIDwvcS1idG4tZHJvcGRvd24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgdXNlU2V0dGluZ3NTdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc2V0dGluZ3Mtc3RvcmUnO1xuXG5jb25zdCBzZXR0aW5ncyA9IHVzZVNldHRpbmdzU3RvcmUoKS5zdGF0dXMudGFibGU7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtYnRuLWRyb3Bkb3duIGljb249XCJzZXR0aW5nc1wiIGZsYXQ+XG4gICAgPHEtbGlzdCBib3JkZXJlZCBjbGFzcz1cInJvdW5kZWQtYm9yZGVyc1wiPlxuICAgICAgPHEtaXRlbT5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+U2hvdyBVcGRhdGUgVGltZTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICA8cS10b2dnbGUgdi1tb2RlbD1cInNldHRpbmdzLnNob3dVcGRhdGVUaW1lXCIgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPHEtaXRlbT5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+U2hvdyBMYXN0IFN3aXRjaDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICA8cS10b2dnbGUgdi1tb2RlbD1cInNldHRpbmdzLnNob3dMYXN0U3dpdGNoXCIgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPHEtc2VwYXJhdG9yIC8+XG4gICAgICA8cS1pdGVtPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5TcXVhcmUgSWNvbnM8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgPHEtdG9nZ2xlIHYtbW9kZWw9XCJzZXR0aW5ncy5zcXVhcmVJY29uc1wiIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICAgIDxxLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPkljb24gU2l6ZTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtc2xpZGVyXG4gICAgICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MuaWNvblNpemVcIlxuICAgICAgICAgICAgOm1pbj1cIjI0XCJcbiAgICAgICAgICAgIDptYXg9XCIxMjhcIlxuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIDpsYWJlbC12YWx1ZT1cInNldHRpbmdzLmljb25TaXplICsgJ3B4J1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvcS1saXN0PlxuICA8L3EtYnRuLWRyb3Bkb3duPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHVzZVNldHRpbmdzU3RvcmUgfSBmcm9tICdzcmMvc3RvcmVzL3NldHRpbmdzLXN0b3JlJztcblxuY29uc3Qgc2V0dGluZ3MgPSB1c2VTZXR0aW5nc1N0b3JlKCkuc3RhdHVzLmxpc3Q7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtYnRuLWRyb3Bkb3duIGljb249XCJzZXR0aW5nc1wiIGZsYXQ+XG4gICAgPHEtbGlzdCBib3JkZXJlZCBjbGFzcz1cInJvdW5kZWQtYm9yZGVyc1wiPlxuICAgICAgPHEtaXRlbT5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+U2hvdyBVcGRhdGUgVGltZTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICA8cS10b2dnbGUgdi1tb2RlbD1cInNldHRpbmdzLnNob3dVcGRhdGVUaW1lXCIgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPHEtaXRlbT5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+U2hvdyBMYXN0IFN3aXRjaDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICA8cS10b2dnbGUgdi1tb2RlbD1cInNldHRpbmdzLnNob3dMYXN0U3dpdGNoXCIgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPHEtaXRlbT5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+U2hvdyBTeXN0ZW0gRGVzY3JpcHRpb248L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgPHEtdG9nZ2xlIHYtbW9kZWw9XCJzZXR0aW5ncy5zaG93U3lzdGVtRGVzY3JpcHRpb25cIiAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgICA8cS1pdGVtPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5TaG93IEZyb250ZXIgRGVzY3JpcHRpb248L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgPHEtdG9nZ2xlIHYtbW9kZWw9XCJzZXR0aW5ncy5zaG93RnJvbnRlckRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPHEtc2VwYXJhdG9yIC8+XG4gICAgICA8cS1pdGVtPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5QYW5lbCBXaWR0aDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtc2xpZGVyXG4gICAgICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MudGlsZVNpemVcIlxuICAgICAgICAgICAgOm1pbj1cIjEwMFwiXG4gICAgICAgICAgICA6bWF4PVwiNTAwXCJcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICA6bGFiZWwtdmFsdWU9XCJzZXR0aW5ncy50aWxlU2l6ZSArICdweCdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L3EtbGlzdD5cbiAgPC9xLWJ0bi1kcm9wZG93bj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VTZXR0aW5nc1N0b3JlIH0gZnJvbSAnc3JjL3N0b3Jlcy9zZXR0aW5ncy1zdG9yZSc7XG5cbmNvbnN0IHNldHRpbmdzID0gdXNlU2V0dGluZ3NTdG9yZSgpLnN0YXR1cy50aWxlO1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXJcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IGluaGVyaXRcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImNvbC1tZC00IGNvbC1zbS02IGNvbCBzZWxmLWNlbnRlclwiXG4gICAgICBzdHlsZT1cImxpbmUtaGVpZ2h0OiAyZW07IGZvbnQtc2l6ZTogMS41ZW1cIlxuICAgID5cbiAgICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyXCI+V2VsY29tZSB0byBQS1N0YXR1czwvaDM+XG4gICAgICBUbyBnZXQgc3RhcnRlZCB5b3UgY2FuOlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgVHJhY2sgd2hvIG9mIHlvdXIgZnJpZW5kcyBpcyBmcm9udGluZyBieVxuICAgICAgICAgIDxxLWJ0biBkZW5zZSBjb2xvcj1cInByaW1hcnlcIiBpY29uPVwiYWRkXCIgdG89XCIvbWFuYWdlL2FkZFwiXG4gICAgICAgICAgICA+QWRkaW5nIEEgU3lzdGVtPC9xLWJ0blxuICAgICAgICAgID5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIHNldCB1cCB5b3VyIHRva2VuIGluIHRoZVxuICAgICAgICAgIDxxLWJ0biBkZW5zZSBjb2xvcj1cInByaW1hcnlcIiBpY29uPVwic2V0dGluZ3NcIiB0bz1cIi9zZXR0aW5nc1wiXG4gICAgICAgICAgICA+U2V0dGluZ3MgUGFnZTwvcS1idG5cbiAgICAgICAgICA+XG4gICAgICAgICAgaWYgeW91IHdhbm5hIHVzZSB0aGUgc3dpdGNoZXJcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIE9yIGFjY2VzcyB0aGUgbWVudSB1c2luZyB0aGUgPHEtaWNvbiBuYW1lPVwibWVudVwiIC8+IGljb24gaW4gdGhlIHRvcFxuICAgICAgICAgIGxlZnRcbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiIsImltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSAncGthcGktdHMvZXJyb3JzJztcbmltcG9ydCB7IHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyB1c2VQbHVyYWxLaXQgfSBmcm9tICdib290L3BsdXJhbEtpdCc7XG5pbXBvcnQgeyB1c2VTZXR0aW5nc1N0b3JlIH0gZnJvbSAnc3JjL3N0b3Jlcy9zZXR0aW5ncy1zdG9yZSc7XG5pbXBvcnQgeyB1c2VTeXN0ZW1TdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc3lzdGVtLXN0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3RhdHVzVXBkYXRlcigpIHtcbiAgbGV0IHVwZGF0ZUludGVydmFsOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCBudWxsID0gbnVsbDtcbiAgbGV0IGxhc3RVcGRhdGVkOiAnc3lzdGVtJyB8ICdmcm9udGVycycgPSAnZnJvbnRlcnMnO1xuXG4gIGNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG4gIGNvbnN0IHBsdXJhbEtpdCA9IHVzZVBsdXJhbEtpdCgpO1xuICBjb25zdCBzeXN0ZW1TdG9yZSA9IHVzZVN5c3RlbVN0b3JlKCk7XG4gIGNvbnN0IHNldHRpbmdzID0gdXNlU2V0dGluZ3NTdG9yZSgpO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmICghdXBkYXRlSW50ZXJ2YWwpIHtcbiAgICAgIHVwZGF0ZVN5c3RlbUluZm8oKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbWlzdXNlZC1wcm9taXNlc1xuICAgICAgdXBkYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVTeXN0ZW1JbmZvLCAxMDAwKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wKCkge1xuICAgIGlmICh1cGRhdGVJbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh1cGRhdGVJbnRlcnZhbCk7XG4gICAgICB1cGRhdGVJbnRlcnZhbCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3lzdGVtQ291bnQgPSBzeXN0ZW1TdG9yZS5pZHMubGVuZ3RoO1xuICBjb25zdCBhdmdSZXF1ZXN0c1BlclNlY29uZCA9XG4gICAgc3lzdGVtQ291bnQgLyBzZXR0aW5ncy5zeXN0ZW1VcGRhdGVJbnRlcnZhbCArXG4gICAgc3lzdGVtQ291bnQgLyBzZXR0aW5ncy5mcm9udGVyVXBkYXRlSW50ZXJ2YWw7XG5cbiAgY29uc3QgdGFyZ2V0UmVxc1BlclNlYyA9IDEuNTsgLy8gTGVhdmUgYSBiaXQgb2Ygd2lnZ2xlIHJvb20sIGN1cnJlbnQgbWF4IGlzIDJcbiAgY29uc3QgbXVsdGlwbHlJbnRlcnZhbCA9XG4gICAgYXZnUmVxdWVzdHNQZXJTZWNvbmQgPiB0YXJnZXRSZXFzUGVyU2VjXG4gICAgICA/IGF2Z1JlcXVlc3RzUGVyU2Vjb25kIC8gdGFyZ2V0UmVxc1BlclNlY1xuICAgICAgOiAxO1xuXG4gIC8vIFVwZGF0ZSBsb2dpYyBmb3Igc3RhdHVzIGRpc3BsYXlcbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU3lzdGVtSW5mbygpIHtcbiAgICBmb3IgKGNvbnN0IHN5c3RlbSBvZiBzeXN0ZW1TdG9yZS5pZHMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghcGx1cmFsS2l0LnN5c3RlbUNhY2hlLmhhcyhzeXN0ZW0pKSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHBsdXJhbEtpdC5nZXRTeXN0ZW0oc3lzdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGx1cmFsS2l0LmZyb250ZXJDYWNoZS5oYXMoc3lzdGVtKSkge1xuICAgICAgICAgIHJldHVybiBhd2FpdCBwbHVyYWxLaXQuZ2V0RnJvbnRlcnMoc3lzdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgQVBJRXJyb3IpKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAkcS5ub3RpZnkoe1xuICAgICAgICAgIHR5cGU6ICduZWdhdGl2ZScsXG4gICAgICAgICAgbWVzc2FnZTogYEVycm9yIHVwZGF0aW5nIGZyb250ZXJzIGZvciAnJHtwbHVyYWxLaXQuc3lzdGVtQ2FjaGUuZ2V0KHN5c3RlbSk/Lm5hbWUgPz8gc3lzdGVtfSdgLFxuICAgICAgICAgIGNhcHRpb246IGAke2Uuc3RhdHVzfTogJHtlLm1lc3NhZ2V9ICgke2UuY29kZX0pYCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxhc3RVcGRhdGVkID09ICdmcm9udGVycycpIHtcbiAgICAgIGxhc3RVcGRhdGVkID0gJ3N5c3RlbSc7XG5cbiAgICAgIGZvciAoY29uc3Qgc3lzdGVtIG9mIHN5c3RlbVN0b3JlLmdldEV4cGlyZWQoXG4gICAgICAgIHNldHRpbmdzLnN5c3RlbVVwZGF0ZUludGVydmFsICogbXVsdGlwbHlJbnRlcnZhbCxcbiAgICAgICkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgc3lzdGVtU3RvcmUudXBkYXRlKHN5c3RlbS5pZCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgQVBJRXJyb3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAkcS5ub3RpZnkoe1xuICAgICAgICAgICAgdHlwZTogJ25lZ2F0aXZlJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBFcnJvciB1cGRhdGluZyAnJHtzeXN0ZW0ubmFtZX0nYCxcbiAgICAgICAgICAgIGNhcHRpb246IGAke2Uuc3RhdHVzfTogJHtlLm1lc3NhZ2V9ICgke2UuY29kZX0pYCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0VXBkYXRlZCA9ICdmcm9udGVycyc7XG5cbiAgICAgIGZvciAoY29uc3QgZnJvbnRlcnMgb2Ygc3lzdGVtU3RvcmUuZ2V0RXhwaXJlZEZyb250ZXJzKFxuICAgICAgICBzZXR0aW5ncy5mcm9udGVyVXBkYXRlSW50ZXJ2YWwgKiBtdWx0aXBseUludGVydmFsLFxuICAgICAgKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBhd2FpdCBwbHVyYWxLaXQuZ2V0RnJvbnRlcnMoZnJvbnRlcnMuc3lzdGVtLCB7XG4gICAgICAgICAgICBza2lwQ2FjaGU6IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgQVBJRXJyb3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAkcS5ub3RpZnkoe1xuICAgICAgICAgICAgdHlwZTogJ25lZ2F0aXZlJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBFcnJvciB1cGRhdGluZyBmcm9udGVycyBmb3IgJyR7cGx1cmFsS2l0LnN5c3RlbUNhY2hlLmdldChmcm9udGVycy5zeXN0ZW0pPy5uYW1lID8/IGZyb250ZXJzLnN5c3RlbX0nYCxcbiAgICAgICAgICAgIGNhcHRpb246IGAke2Uuc3RhdHVzfTogJHtlLm1lc3NhZ2V9ICgke2UuY29kZX0pYCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhcnQsXG4gICAgc3RvcCxcbiAgfTtcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZT5cbiAgICA8cm91dGVyLXZpZXdcbiAgICAgIHYtaWY9XCIhIWlkcy5sZW5ndGhcIlxuICAgICAgOmlkcz1cImlkc1wiXG4gICAgICA6c3lzdGVtcz1cInN5c3RlbXNcIlxuICAgICAgOmZyb250ZXJzPVwiZnJvbnRlcnNcIlxuICAgIC8+XG4gICAgPGluc3RydWN0aW9ucy1wYWdlIHYtZWxzZSAvPlxuICA8L3EtcGFnZT5cbiAgPHEtZm9vdGVyIHYtaWY9XCIhIWlkcy5sZW5ndGhcIj5cbiAgICA8cS10b29sYmFyPlxuICAgICAgPHEtdGFicyB2LW1vZGVsPVwic3RhdHVzLmxhc3RMYXlvdXRcIiBhbGlnbj1cImxlZnRcIiBjbGFzcz1cImJnLXByaW1hcnlcIj5cbiAgICAgICAgPHEtcm91dGUtdGFiXG4gICAgICAgICAgdG89XCIvc3RhdHVzL3RhYmxlXCJcbiAgICAgICAgICBuYW1lPVwidGFibGVcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWNvbj1cInRhYmxlX2NoYXJ0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtcm91dGUtdGFiXG4gICAgICAgICAgdG89XCIvc3RhdHVzL2xpc3RcIlxuICAgICAgICAgIG5hbWU9XCJsaXN0XCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGljb249XCJ2aWV3X2xpc3RcIlxuICAgICAgICAvPlxuICAgICAgICA8cS1yb3V0ZS10YWJcbiAgICAgICAgICB0bz1cIi9zdGF0dXMvdGlsZVwiXG4gICAgICAgICAgbmFtZT1cInRpbGVcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWNvbj1cImdyaWRfdmlld1wiXG4gICAgICAgIC8+XG4gICAgICA8L3EtdGFicz5cbiAgICAgIDxxLXNwYWNlIC8+XG4gICAgICA8dGFibGUtc2V0dGluZ3Mgdi1pZj1cInN0YXR1cy5sYXN0TGF5b3V0ID09ICd0YWJsZSdcIiAvPlxuICAgICAgPGxpc3Qtc2V0dGluZ3Mgdi1pZj1cInN0YXR1cy5sYXN0TGF5b3V0ID09ICdsaXN0J1wiIC8+XG4gICAgICA8dGlsZS1zZXR0aW5ncyB2LWlmPVwic3RhdHVzLmxhc3RMYXlvdXQgPT0gJ3RpbGUnXCIgLz5cbiAgICA8L3EtdG9vbGJhcj5cbiAgPC9xLWZvb3Rlcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJztcbmltcG9ydCB7IG9uTW91bnRlZCwgb25Vbm1vdW50ZWQgfSBmcm9tICd2dWUnO1xuXG5pbXBvcnQgeyB1c2VTeXN0ZW1TdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc3lzdGVtLXN0b3JlJztcbmltcG9ydCB7IHVzZVNldHRpbmdzU3RvcmUgfSBmcm9tICdzcmMvc3RvcmVzL3NldHRpbmdzLXN0b3JlJztcblxuaW1wb3J0IFRhYmxlU2V0dGluZ3MgZnJvbSAnc3JjL2NvbXBvbmVudHMvU3RhdHVzUGFnZS9TZXR0aW5ncy9UYWJsZVNldHRpbmdzLnZ1ZSc7XG5pbXBvcnQgTGlzdFNldHRpbmdzIGZyb20gJ3NyYy9jb21wb25lbnRzL1N0YXR1c1BhZ2UvU2V0dGluZ3MvTGlzdFNldHRpbmdzLnZ1ZSc7XG5pbXBvcnQgVGlsZVNldHRpbmdzIGZyb20gJ3NyYy9jb21wb25lbnRzL1N0YXR1c1BhZ2UvU2V0dGluZ3MvVGlsZVNldHRpbmdzLnZ1ZSc7XG5pbXBvcnQgSW5zdHJ1Y3Rpb25zUGFnZSBmcm9tICdzcmMvcGFnZXMvc3RhdHVzL0luc3RydWN0aW9uc1BhZ2UudnVlJztcbmltcG9ydCB1c2VTdGF0dXNVcGRhdGVyIGZyb20gJ3NyYy9jb21wb25lbnRzL1N0YXR1c1VwZGF0ZXInO1xuaW1wb3J0IHsgdXNlUGx1cmFsS2l0IH0gZnJvbSAnYm9vdC9wbHVyYWxLaXQnO1xuXG5jb25zdCBwbHVyYWxLaXQgPSB1c2VQbHVyYWxLaXQoKTtcbmNvbnN0IHN5c3RlbVN0b3JlID0gdXNlU3lzdGVtU3RvcmUoKTtcbmNvbnN0IHsgc3RhdHVzIH0gPSBzdG9yZVRvUmVmcyh1c2VTZXR0aW5nc1N0b3JlKCkpO1xuY29uc3QgeyBpZHMgfSA9IHN0b3JlVG9SZWZzKHN5c3RlbVN0b3JlKTtcbmNvbnN0IGZyb250ZXJzID0gcGx1cmFsS2l0LmZyb250ZXJDYWNoZS5vYmplY3RzO1xuY29uc3Qgc3lzdGVtcyA9IHBsdXJhbEtpdC5zeXN0ZW1DYWNoZS5vYmplY3RzO1xuY29uc3Qgc3RhdHVzVXBkYXRlciA9IHVzZVN0YXR1c1VwZGF0ZXIoKTtcblxub25Nb3VudGVkKHN0YXR1c1VwZGF0ZXIuc3RhcnQpO1xub25Vbm1vdW50ZWQoc3RhdHVzVXBkYXRlci5zdG9wKTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbImRyYWdnaW5nIiwiY2xhc3NlcyIsInJhdGlvIiwiX29wZW5CbG9jayIsIl9jcmVhdGVCbG9jayIsIl93aXRoQ3R4IiwiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX0ZyYWdtZW50IiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsTUFBQSxTQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLFFBQVM7QUFDUCxVQUFNLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxVQUFXLENBQUE7QUFDM0MsV0FBTyxNQUFNO0FBQUEsRUFDakI7QUFDQSxDQUFDO0FDQ0QsTUFBTSxvQkFBb0I7QUFDMUIsTUFBTSx5QkFBeUIsUUFBTSxFQUFFLE9BQU8sRUFBRztBQUNqRCxNQUFNLDZCQUE2QixDQUFDLEVBQUUsYUFBYSxFQUFFLE9BQU87QUFBQSxFQUMxRCxLQUFLLE9BQU87QUFBQSxFQUNaLE9BQU8sT0FBTztBQUFBLEVBQ2QsT0FBTyxPQUFPO0FBQ2hCLEdBQUcsT0FBTyxLQUFLO0FBR1IsTUFBTSxXQUFXLENBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFFekMsTUFBTSxpQkFBaUI7QUFBQSxFQUM1QixHQUFHO0FBQUEsRUFDSCxHQUFHO0FBQUEsRUFFSCxLQUFLO0FBQUEsSUFDSCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsRUFDVjtBQUFBLEVBQ0QsS0FBSztBQUFBLElBQ0gsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLEVBQ1Y7QUFBQSxFQUNELFVBQVU7QUFBQSxFQUNWLFVB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
