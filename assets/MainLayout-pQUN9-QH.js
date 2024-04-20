import { c as createComponent, d as computed, h, e as hSlot, g as getCurrentInstance, i as inject, f as emptyRenderFn, r as ref, w as watch, o as onBeforeUnmount, j as hUniqueSlot, l as layoutKey, u as useModelToggleProps, k as useDarkProps, m as useModelToggleEmits, n as useDark, p as useTimeout, q as useModelToggle, s as useHistory, t as onMounted, v as nextTick, x as withDirectives, y as hDir, z as usePreventScroll, A as provide, B as pageContainerKey, C as noop, D as getScrollTarget, E as listenOpts, F as getVerticalScrollPosition, G as getHorizontalScrollPosition, H as isRuntimeSsrPreHydration, I as getScrollbarWidth, J as reactive, K as onUnmounted, L as hMergeSlot, M as createDirective, N as getPortalProxy, O as closePortals, P as isKeyCode, Q as defineComponent, R as useSettingsStore, S as useQuasar, T as storeToRefs, U as resolveComponent, V as openBlock, W as createBlock, X as withCtx, Y as createVNode, Z as normalizeClass, _ as unref, $ as isDev, a0 as QBtn, a1 as createTextVNode, a2 as createBaseVNode, a3 as QIcon, a4 as createCommentVNode, a5 as toDisplayString, a6 as QSeparator, a7 as QToggle, a8 as isRef, a9 as QDialog, aa as QCard, ab as QCardSection, ac as QCardActions, ad as getVersion, ae as homepage, af as _export_sfc } from "./index-C1u-_TOv.js";
import { Q as QResizeObserver, T as TouchPan, a as QToolbar } from "./TouchPan-24hdsJ-m.js";
import { Q as QItemLabel, a as QItem, b as QItemSection } from "./QItem-4sCyJUzG.js";
import { Q as QList } from "./QList-DQhRiMIt.js";
import { b as between } from "./format-esB8TFiE.js";
const QToolbarTitle = createComponent({
  name: "QToolbarTitle",
  props: {
    shrink: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => "q-toolbar__title ellipsis" + (props.shrink === true ? " col-shrink" : "")
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
const QHeader = createComponent({
  name: "QHeader",
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    revealOffset: {
      type: Number,
      default: 250
    },
    bordered: Boolean,
    elevated: Boolean,
    heightHint: {
      type: [String, Number],
      default: 50
    }
  },
  emits: ["reveal", "focusin"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QHeader needs to be child of QLayout");
      return emptyRenderFn;
    }
    const size = ref(parseInt(props.heightHint, 10));
    const revealed = ref(true);
    const fixed = computed(
      () => props.reveal === true || $layout.view.value.indexOf("H") !== -1 || $q.platform.is.ios && $layout.isContainer.value === true
    );
    const offset = computed(() => {
      if (props.modelValue !== true) {
        return 0;
      }
      if (fixed.value === true) {
        return revealed.value === true ? size.value : 0;
      }
      const offset2 = size.value - $layout.scroll.value.position;
      return offset2 > 0 ? offset2 : 0;
    });
    const hidden = computed(
      () => props.modelValue !== true || fixed.value === true && revealed.value !== true
    );
    const revealOnFocus = computed(
      () => props.modelValue === true && hidden.value === true && props.reveal === true
    );
    const classes = computed(
      () => "q-header q-layout__section--marginal " + (fixed.value === true ? "fixed" : "absolute") + "-top" + (props.bordered === true ? " q-header--bordered" : "") + (hidden.value === true ? " q-header--hidden" : "") + (props.modelValue !== true ? " q-layout--prevent-focus" : "")
    );
    const style = computed(() => {
      const view = $layout.rows.value.top, css = {};
      if (view[0] === "l" && $layout.left.space === true) {
        css[$q.lang.rtl === true ? "right" : "left"] = `${$layout.left.size}px`;
      }
      if (view[2] === "r" && $layout.right.space === true) {
        css[$q.lang.rtl === true ? "left" : "right"] = `${$layout.right.size}px`;
      }
      return css;
    });
    function updateLayout(prop, val) {
      $layout.update("header", prop, val);
    }
    function updateLocal(prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }
    function onResize({ height }) {
      updateLocal(size, height);
      updateLayout("size", height);
    }
    function onFocusin(evt) {
      if (revealOnFocus.value === true) {
        updateLocal(revealed, true);
      }
      emit("focusin", evt);
    }
    watch(() => props.modelValue, (val) => {
      updateLayout("space", val);
      updateLocal(revealed, true);
      $layout.animate();
    });
    watch(offset, (val) => {
      updateLayout("offset", val);
    });
    watch(() => props.reveal, (val) => {
      val === false && updateLocal(revealed, props.modelValue);
    });
    watch(revealed, (val) => {
      $layout.animate();
      emit("reveal", val);
    });
    watch($layout.scroll, (scroll) => {
      props.reveal === true && updateLocal(
        revealed,
        scroll.direction === "up" || scroll.position <= props.revealOffset || scroll.position - scroll.inflectionPoint < 100
      );
    });
    const instance = {};
    $layout.instances.header = instance;
    props.modelValue === true && updateLayout("size", size.value);
    updateLayout("space", props.modelValue);
    updateLayout("offset", offset.value);
    onBeforeUnmount(() => {
      if ($layout.instances.header === instance) {
        $layout.instances.header = void 0;
        updateLayout("size", 0);
        updateLayout("offset", 0);
        updateLayout("space", false);
      }
    });
    return () => {
      const child = hUniqueSlot(slots.default, []);
      props.elevated === true && child.push(
        h("div", {
          class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
        })
      );
      child.push(
        h(QResizeObserver, {
          debounce: 0,
          onResize
        })
      );
      return h("header", {
        class: classes.value,
        style: style.value,
        onFocusin
      }, child);
    };
  }
});
const duration = 150;
const QDrawer = createComponent({
  name: "QDrawer",
  inheritAttrs: false,
  props: {
    ...useModelToggleProps,
    ...useDarkProps,
    side: {
      type: String,
      default: "left",
      validator: (v) => ["left", "right"].includes(v)
    },
    width: {
      type: Number,
      default: 300
    },
    mini: Boolean,
    miniToOverlay: Boolean,
    miniWidth: {
      type: Number,
      default: 57
    },
    noMiniAnimation: Boolean,
    breakpoint: {
      type: Number,
      default: 1023
    },
    showIfAbove: Boolean,
    behavior: {
      type: String,
      validator: (v) => ["default", "desktop", "mobile"].includes(v),
      default: "default"
    },
    bordered: Boolean,
    elevated: Boolean,
    overlay: Boolean,
    persistent: Boolean,
    noSwipeOpen: Boolean,
    noSwipeClose: Boolean,
    noSwipeBackdrop: Boolean
  },
  emits: [
    ...useModelToggleEmits,
    "onLayout",
    "miniState"
  ],
  setup(props, { slots, emit, attrs }) {
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;
    const isDark = useDark(props, $q);
    const { preventBodyScroll } = usePreventScroll();
    const { registerTimeout, removeTimeout } = useTimeout();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QDrawer needs to be child of QLayout");
      return emptyRenderFn;
    }
    let lastDesktopState, timerMini = null, layoutTotalWidthWatcher;
    const belowBreakpoint = ref(
      props.behavior === "mobile" || props.behavior !== "desktop" && $layout.totalWidth.value <= props.breakpoint
    );
    const isMini = computed(
      () => props.mini === true && belowBreakpoint.value !== true
    );
    const size = computed(() => isMini.value === true ? props.miniWidth : props.width);
    const showing = ref(
      props.showIfAbove === true && belowBreakpoint.value === false ? true : props.modelValue === true
    );
    const hideOnRouteChange = computed(
      () => props.persistent !== true && (belowBreakpoint.value === true || onScreenOverlay.value === true)
    );
    function handleShow(evt, noEvent) {
      addToHistory();
      evt !== false && $layout.animate();
      applyPosition(0);
      if (belowBreakpoint.value === true) {
        const otherInstance = $layout.instances[otherSide.value];
        if (otherInstance !== void 0 && otherInstance.belowBreakpoint === true) {
          otherInstance.hide(false);
        }
        applyBackdrop(1);
        $layout.isContainer.value !== true && preventBodyScroll(true);
      } else {
        applyBackdrop(0);
        evt !== false && setScrollable(false);
      }
      registerTimeout(() => {
        evt !== false && setScrollable(true);
        noEvent !== true && emit("show", evt);
      }, duration);
    }
    function handleHide(evt, noEvent) {
      removeFromHistory();
      evt !== false && $layout.animate();
      applyBackdrop(0);
      applyPosition(stateDirection.value * size.value);
      cleanup();
      if (noEvent !== true) {
        registerTimeout(() => {
          emit("hide", evt);
        }, duration);
      } else {
        removeTimeout();
      }
    }
    const { show, hide } = useModelToggle({
      showing,
      hideOnRouteChange,
      handleShow,
      handleHide
    });
    const { addToHistory, removeFromHistory } = useHistory(showing, hide, hideOnRouteChange);
    const instance = {
      belowBreakpoint,
      hide
    };
    const rightSide = computed(() => props.side === "right");
    const stateDirection = computed(
      () => ($q.lang.rtl === true ? -1 : 1) * (rightSide.value === true ? 1 : -1)
    );
    const flagBackdropBg = ref(0);
    const flagPanning = ref(false);
    const flagMiniAnimate = ref(false);
    const flagContentPosition = ref(
      // starting with "hidden" for SSR
      size.value * stateDirection.value
    );
    const otherSide = computed(() => rightSide.value === true ? "left" : "right");
    const offset = computed(() => showing.value === true && belowBreakpoint.value === false && props.overlay === false ? props.miniToOverlay === true ? props.miniWidth : size.value : 0);
    const fixed = computed(
      () => props.overlay === true || props.miniToOverlay === true || $layout.view.value.indexOf(rightSide.value ? "R" : "L") !== -1 || $q.platform.is.ios === true && $layout.isContainer.value === true
    );
    const onLayout = computed(
      () => props.overlay === false && showing.value === true && belowBreakpoint.value === false
    );
    const onScreenOverlay = computed(
      () => props.overlay === true && showing.value === true && belowBreakpoint.value === false
    );
    const backdropClass = computed(
      () => "fullscreen q-drawer__backdrop" + (showing.value === false && flagPanning.value === false ? " hidden" : "")
    );
    const backdropStyle = computed(() => ({
      backgroundColor: `rgba(0,0,0,${flagBackdropBg.value * 0.4})`
    }));
    const headerSlot = computed(() => rightSide.value === true ? $layout.rows.value.top[2] === "r" : $layout.rows.value.top[0] === "l");
    const footerSlot = computed(() => rightSide.value === true ? $layout.rows.value.bottom[2] === "r" : $layout.rows.value.bottom[0] === "l");
    const aboveStyle = computed(() => {
      const css = {};
      if ($layout.header.space === true && headerSlot.value === false) {
        if (fixed.value === true) {
          css.top = `${$layout.header.offset}px`;
        } else if ($layout.header.space === true) {
          css.top = `${$layout.header.size}px`;
        }
      }
      if ($layout.footer.space === true && footerSlot.value === false) {
        if (fixed.value === true) {
          css.bottom = `${$layout.footer.offset}px`;
        } else if ($layout.footer.space === true) {
          css.bottom = `${$layout.footer.size}px`;
        }
      }
      return css;
    });
    const style = computed(() => {
      const style2 = {
        width: `${size.value}px`,
        transform: `translateX(${flagContentPosition.value}px)`
      };
      return belowBreakpoint.value === true ? style2 : Object.assign(style2, aboveStyle.value);
    });
    const contentClass = computed(
      () => "q-drawer__content fit " + ($layout.isContainer.value !== true ? "scroll" : "overflow-auto")
    );
    const classes = computed(
      () => `q-drawer q-drawer--${props.side}` + (flagMiniAnimate.value === true ? " q-drawer--mini-animate" : "") + (props.bordered === true ? " q-drawer--bordered" : "") + (isDark.value === true ? " q-drawer--dark q-dark" : "") + (flagPanning.value === true ? " no-transition" : showing.value === true ? "" : " q-layout--prevent-focus") + (belowBreakpoint.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${isMini.value === true ? "mini" : "standard"}` + (fixed.value === true || onLayout.value !== true ? " fixed" : "") + (props.overlay === true || props.miniToOverlay === true ? " q-drawer--on-top" : "") + (headerSlot.value === true ? " q-drawer--top-padding" : ""))
    );
    const openDirective = computed(() => {
      const dir = $q.lang.rtl === true ? props.side : otherSide.value;
      return [[
        TouchPan,
        onOpenPan,
        void 0,
        {
          [dir]: true,
          mouse: true
        }
      ]];
    });
    const contentCloseDirective = computed(() => {
      const dir = $q.lang.rtl === true ? otherSide.value : props.side;
      return [[
        TouchPan,
        onClosePan,
        void 0,
        {
          [dir]: true,
          mouse: true
        }
      ]];
    });
    const backdropCloseDirective = computed(() => {
      const dir = $q.lang.rtl === true ? otherSide.value : props.side;
      return [[
        TouchPan,
        onClosePan,
        void 0,
        {
          [dir]: true,
          mouse: true,
          mouseAllDir: true
        }
      ]];
    });
    function updateBelowBreakpoint() {
      updateLocal(belowBreakpoint, props.behavior === "mobile" || props.behavior !== "desktop" && $layout.totalWidth.value <= props.breakpoint);
    }
    watch(belowBreakpoint, (val) => {
      if (val === true) {
        lastDesktopState = showing.value;
        showing.value === true && hide(false);
      } else if (props.overlay === false && props.behavior !== "mobile" && lastDesktopState !== false) {
        if (showing.value === true) {
          applyPosition(0);
          applyBackdrop(0);
          cleanup();
        } else {
          show(false);
        }
      }
    });
    watch(() => props.side, (newSide, oldSide) => {
      if ($layout.instances[oldSide] === instance) {
        $layout.instances[oldSide] = void 0;
        $layout[oldSide].space = false;
        $layout[oldSide].offset = 0;
      }
      $layout.instances[newSide] = instance;
      $layout[newSide].size = size.value;
      $layout[newSide].space = onLayout.value;
      $layout[newSide].offset = offset.value;
    });
    watch($layout.totalWidth, () => {
      if ($layout.isContainer.value === true || document.qScrollPrevented !== true) {
        updateBelowBreakpoint();
      }
    });
    watch(
      () => props.behavior + props.breakpoint,
      updateBelowBreakpoint
    );
    watch($layout.isContainer, (val) => {
      showing.value === true && preventBodyScroll(val !== true);
      val === true && updateBelowBreakpoint();
    });
    watch($layout.scrollbarWidth, () => {
      applyPosition(showing.value === true ? 0 : void 0);
    });
    watch(offset, (val) => {
      updateLayout("offset", val);
    });
    watch(onLayout, (val) => {
      emit("onLayout", val);
      updateLayout("space", val);
    });
    watch(rightSide, () => {
      applyPosition();
    });
    watch(size, (val) => {
      applyPosition();
      updateSizeOnLayout(props.miniToOverlay, val);
    });
    watch(() => props.miniToOverlay, (val) => {
      updateSizeOnLayout(val, size.value);
    });
    watch(() => $q.lang.rtl, () => {
      applyPosition();
    });
    watch(() => props.mini, () => {
      if (props.noMiniAnimation)
        return;
      if (props.modelValue === true) {
        animateMini();
        $layout.animate();
      }
    });
    watch(isMini, (val) => {
      emit("miniState", val);
    });
    function applyPosition(position) {
      if (position === void 0) {
        nextTick(() => {
          position = showing.value === true ? 0 : size.value;
          applyPosition(stateDirection.value * position);
        });
      } else {
        if ($layout.isContainer.value === true && rightSide.value === true && (belowBreakpoint.value === true || Math.abs(position) === size.value)) {
          position += stateDirection.value * $layout.scrollbarWidth.value;
        }
        flagContentPosition.value = position;
      }
    }
    function applyBackdrop(x) {
      flagBackdropBg.value = x;
    }
    function setScrollable(v) {
      const action = v === true ? "remove" : $layout.isContainer.value !== true ? "add" : "";
      action !== "" && document.body.classList[action]("q-body--drawer-toggle");
    }
    function animateMini() {
      timerMini !== null && clearTimeout(timerMini);
      if (vm.proxy && vm.proxy.$el) {
        vm.proxy.$el.classList.add("q-drawer--mini-animate");
      }
      flagMiniAnimate.value = true;
      timerMini = setTimeout(() => {
        timerMini = null;
        flagMiniAnimate.value = false;
        if (vm && vm.proxy && vm.proxy.$el) {
          vm.proxy.$el.classList.remove("q-drawer--mini-animate");
        }
      }, 150);
    }
    function onOpenPan(evt) {
      if (showing.value !== false) {
        return;
      }
      const width = size.value, position = between(evt.distance.x, 0, width);
      if (evt.isFinal === true) {
        const opened = position >= Math.min(75, width);
        if (opened === true) {
          show();
        } else {
          $layout.animate();
          applyBackdrop(0);
          applyPosition(stateDirection.value * width);
        }
        flagPanning.value = false;
        return;
      }
      applyPosition(
        ($q.lang.rtl === true ? rightSide.value !== true : rightSide.value) ? Math.max(width - position, 0) : Math.min(0, position - width)
      );
      applyBackdrop(
        between(position / width, 0, 1)
      );
      if (evt.isFirst === true) {
        flagPanning.value = true;
      }
    }
    function onClosePan(evt) {
      if (showing.value !== true) {
        return;
      }
      const width = size.value, dir = evt.direction === props.side, position = ($q.lang.rtl === true ? dir !== true : dir) ? between(evt.distance.x, 0, width) : 0;
      if (evt.isFinal === true) {
        const opened = Math.abs(position) < Math.min(75, width);
        if (opened === true) {
          $layout.animate();
          applyBackdrop(1);
          applyPosition(0);
        } else {
          hide();
        }
        flagPanning.value = false;
        return;
      }
      applyPosition(stateDirection.value * position);
      applyBackdrop(between(1 - position / width, 0, 1));
      if (evt.isFirst === true) {
        flagPanning.value = true;
      }
    }
    function cleanup() {
      preventBodyScroll(false);
      setScrollable(true);
    }
    function updateLayout(prop, val) {
      $layout.update(props.side, prop, val);
    }
    function updateLocal(prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }
    function updateSizeOnLayout(miniToOverlay, size2) {
      updateLayout("size", miniToOverlay === true ? props.miniWidth : size2);
    }
    $layout.instances[props.side] = instance;
    updateSizeOnLayout(props.miniToOverlay, size.value);
    updateLayout("space", onLayout.value);
    updateLayout("offset", offset.value);
    if (props.showIfAbove === true && props.modelValue !== true && showing.value === true && props["onUpdate:modelValue"] !== void 0) {
      emit("update:modelValue", true);
    }
    onMounted(() => {
      emit("onLayout", onLayout.value);
      emit("miniState", isMini.value);
      lastDesktopState = props.showIfAbove === true;
      const fn = () => {
        const action = showing.value === true ? handleShow : handleHide;
        action(false, true);
      };
      if ($layout.totalWidth.value !== 0) {
        nextTick(fn);
        return;
      }
      layoutTotalWidthWatcher = watch($layout.totalWidth, () => {
        layoutTotalWidthWatcher();
        layoutTotalWidthWatcher = void 0;
        if (showing.value === false && props.showIfAbove === true && belowBreakpoint.value === false) {
          show(false);
        } else {
          fn();
        }
      });
    });
    onBeforeUnmount(() => {
      layoutTotalWidthWatcher !== void 0 && layoutTotalWidthWatcher();
      if (timerMini !== null) {
        clearTimeout(timerMini);
        timerMini = null;
      }
      showing.value === true && cleanup();
      if ($layout.instances[props.side] === instance) {
        $layout.instances[props.side] = void 0;
        updateLayout("size", 0);
        updateLayout("offset", 0);
        updateLayout("space", false);
      }
    });
    return () => {
      const child = [];
      if (belowBreakpoint.value === true) {
        props.noSwipeOpen === false && child.push(
          withDirectives(
            h("div", {
              key: "open",
              class: `q-drawer__opener fixed-${props.side}`,
              "aria-hidden": "true"
            }),
            openDirective.value
          )
        );
        child.push(
          hDir(
            "div",
            {
              ref: "backdrop",
              class: backdropClass.value,
              style: backdropStyle.value,
              "aria-hidden": "true",
              onClick: hide
            },
            void 0,
            "backdrop",
            props.noSwipeBackdrop !== true && showing.value === true,
            () => backdropCloseDirective.value
          )
        );
      }
      const mini = isMini.value === true && slots.mini !== void 0;
      const content = [
        h(
          "div",
          {
            ...attrs,
            key: "" + mini,
            // required otherwise Vue will not diff correctly
            class: [
              contentClass.value,
              attrs.class
            ]
          },
          mini === true ? slots.mini() : hSlot(slots.default)
        )
      ];
      if (props.elevated === true && showing.value === true) {
        content.push(
          h("div", {
            class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
          })
        );
      }
      child.push(
        hDir(
          "aside",
          { ref: "content", class: classes.value, style: style.value },
          content,
          "contentclose",
          props.noSwipeClose !== true && belowBreakpoint.value === true,
          () => contentCloseDirective.value
        )
      );
      return h("div", { class: "q-drawer-container" }, child);
    };
  }
});
const QPageContainer = createComponent({
  name: "QPageContainer",
  setup(_, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QPageContainer needs to be child of QLayout");
      return emptyRenderFn;
    }
    provide(pageContainerKey, true);
    const style = computed(() => {
      const css = {};
      if ($layout.header.space === true) {
        css.paddingTop = `${$layout.header.size}px`;
      }
      if ($layout.right.space === true) {
        css[`padding${$q.lang.rtl === true ? "Left" : "Right"}`] = `${$layout.right.size}px`;
      }
      if ($layout.footer.space === true) {
        css.paddingBottom = `${$layout.footer.size}px`;
      }
      if ($layout.left.space === true) {
        css[`padding${$q.lang.rtl === true ? "Right" : "Left"}`] = `${$layout.left.size}px`;
      }
      return css;
    });
    return () => h("div", {
      class: "q-page-container",
      style: style.value
    }, hSlot(slots.default));
  }
});
const { passive } = listenOpts;
const axisValues = ["both", "horizontal", "vertical"];
const QScrollObserver = createComponent({
  name: "QScrollObserver",
  props: {
    axis: {
      type: String,
      validator: (v) => axisValues.includes(v),
      default: "vertical"
    },
    debounce: [String, Number],
    scrollTarget: {
      default: void 0
    }
  },
  emits: ["scroll"],
  setup(props, { emit }) {
    const scroll = {
      position: {
        top: 0,
        left: 0
      },
      direction: "down",
      directionChanged: false,
      delta: {
        top: 0,
        left: 0
      },
      inflectionPoint: {
        top: 0,
        left: 0
      }
    };
    let clearTimer = null, localScrollTarget, parentEl;
    watch(() => props.scrollTarget, () => {
      unconfigureScrollTarget();
      configureScrollTarget();
    });
    function emitEvent() {
      clearTimer !== null && clearTimer();
      const top = Math.max(0, getVerticalScrollPosition(localScrollTarget));
      const left = getHorizontalScrollPosition(localScrollTarget);
      const delta = {
        top: top - scroll.position.top,
        left: left - scroll.position.left
      };
      if (props.axis === "vertical" && delta.top === 0 || props.axis === "horizontal" && delta.left === 0) {
        return;
      }
      const curDir = Math.abs(delta.top) >= Math.abs(delta.left) ? delta.top < 0 ? "up" : "down" : delta.left < 0 ? "left" : "right";
      scroll.position = { top, left };
      scroll.directionChanged = scroll.direction !== curDir;
      scroll.delta = delta;
      if (scroll.directionChanged === true) {
        scroll.direction = curDir;
        scroll.inflectionPoint = scroll.position;
      }
      emit("scroll", { ...scroll });
    }
    function configureScrollTarget() {
      localScrollTarget = getScrollTarget(parentEl, props.scrollTarget);
      localScrollTarget.addEventListener("scroll", trigger, passive);
      trigger(true);
    }
    function unconfigureScrollTarget() {
      if (localScrollTarget !== void 0) {
        localScrollTarget.removeEventListener("scroll", trigger, passive);
        localScrollTarget = void 0;
      }
    }
    function trigger(immediately) {
      if (immediately === true || props.debounce === 0 || props.debounce === "0") {
        emitEvent();
      } else if (clearTimer === null) {
        const [timer, fn] = props.debounce ? [setTimeout(emitEvent, props.debounce), clearTimeout] : [requestAnimationFrame(emitEvent), cancelAnimationFrame];
        clearTimer = () => {
          fn(timer);
          clearTimer = null;
        };
      }
    }
    const { proxy } = getCurrentInstance();
    watch(() => proxy.$q.lang.rtl, emitEvent);
    onMounted(() => {
      parentEl = proxy.$el.parentNode;
      configureScrollTarget();
    });
    onBeforeUnmount(() => {
      clearTimer !== null && clearTimer();
      unconfigureScrollTarget();
    });
    Object.assign(proxy, {
      trigger,
      getPosition: () => scroll
    });
    return noop;
  }
});
const QLayout = createComponent({
  name: "QLayout",
  props: {
    container: Boolean,
    view: {
      type: String,
      default: "hhh lpr fff",
      validator: (v) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(v.toLowerCase())
    },
    onScroll: Function,
    onScrollHeight: Function,
    onResize: Function
  },
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const rootRef = ref(null);
    const height = ref($q.screen.height);
    const width = ref(props.container === true ? 0 : $q.screen.width);
    const scroll = ref({ position: 0, direction: "down", inflectionPoint: 0 });
    const containerHeight = ref(0);
    const scrollbarWidth = ref(isRuntimeSsrPreHydration.value === true ? 0 : getScrollbarWidth());
    const classes = computed(
      () => "q-layout q-layout--" + (props.container === true ? "containerized" : "standard")
    );
    const style = computed(() => props.container === false ? { minHeight: $q.screen.height + "px" } : null);
    const targetStyle = computed(() => scrollbarWidth.value !== 0 ? { [$q.lang.rtl === true ? "left" : "right"]: `${scrollbarWidth.value}px` } : null);
    const targetChildStyle = computed(() => scrollbarWidth.value !== 0 ? {
      [$q.lang.rtl === true ? "right" : "left"]: 0,
      [$q.lang.rtl === true ? "left" : "right"]: `-${scrollbarWidth.value}px`,
      width: `calc(100% + ${scrollbarWidth.value}px)`
    } : null);
    function onPageScroll(data) {
      if (props.container === true || document.qScrollPrevented !== true) {
        const info = {
          position: data.position.top,
          direction: data.direction,
          directionChanged: data.directionChanged,
          inflectionPoint: data.inflectionPoint.top,
          delta: data.delta.top
        };
        scroll.value = info;
        props.onScroll !== void 0 && emit("scroll", info);
      }
    }
    function onPageResize(data) {
      const { height: newHeight, width: newWidth } = data;
      let resized = false;
      if (height.value !== newHeight) {
        resized = true;
        height.value = newHeight;
        props.onScrollHeight !== void 0 && emit("scrollHeight", newHeight);
        updateScrollbarWidth();
      }
      if (width.value !== newWidth) {
        resized = true;
        width.value = newWidth;
      }
      if (resized === true && props.onResize !== void 0) {
        emit("resize", data);
      }
    }
    function onContainerResize({ height: height2 }) {
      if (containerHeight.value !== height2) {
        containerHeight.value = height2;
        updateScrollbarWidth();
      }
    }
    function updateScrollbarWidth() {
      if (props.container === true) {
        const width2 = height.value > containerHeight.value ? getScrollbarWidth() : 0;
        if (scrollbarWidth.value !== width2) {
          scrollbarWidth.value = width2;
        }
      }
    }
    let animateTimer = null;
    const $layout = {
      instances: {},
      view: computed(() => props.view),
      isContainer: computed(() => props.container),
      rootRef,
      height,
      containerHeight,
      scrollbarWidth,
      totalWidth: computed(() => width.value + scrollbarWidth.value),
      rows: computed(() => {
        const rows = props.view.toLowerCase().split(" ");
        return {
          top: rows[0].split(""),
          middle: rows[1].split(""),
          bottom: rows[2].split("")
        };
      }),
      header: reactive({ size: 0, offset: 0, space: false }),
      right: reactive({ size: 300, offset: 0, space: false }),
      footer: reactive({ size: 0, offset: 0, space: false }),
      left: reactive({ size: 300, offset: 0, space: false }),
      scroll,
      animate() {
        if (animateTimer !== null) {
          clearTimeout(animateTimer);
        } else {
          document.body.classList.add("q-body--layout-animate");
        }
        animateTimer = setTimeout(() => {
          animateTimer = null;
          document.body.classList.remove("q-body--layout-animate");
        }, 155);
      },
      update(part, prop, val) {
        $layout[part][prop] = val;
      }
    };
    provide(layoutKey, $layout);
    if (getScrollbarWidth() > 0) {
      let restoreScrollbar = function() {
        timer = null;
        el.classList.remove("hide-scrollbar");
      }, hideScrollbar = function() {
        if (timer === null) {
          if (el.scrollHeight > $q.screen.height) {
            return;
          }
          el.classList.add("hide-scrollbar");
        } else {
          clearTimeout(timer);
        }
        timer = setTimeout(restoreScrollbar, 300);
      }, updateScrollEvent = function(action) {
        if (timer !== null && action === "remove") {
          clearTimeout(timer);
          restoreScrollbar();
        }
        window[`${action}EventListener`]("resize", hideScrollbar);
      };
      let timer = null;
      const el = document.body;
      watch(
        () => props.container !== true ? "add" : "remove",
        updateScrollEvent
      );
      props.container !== true && updateScrollEvent("add");
      onUnmounted(() => {
        updateScrollEvent("remove");
      });
    }
    return () => {
      const content = hMergeSlot(slots.default, [
        h(QScrollObserver, { onScroll: onPageScroll }),
        h(QResizeObserver, { onResize: onPageResize })
      ]);
      const layout = h("div", {
        class: classes.value,
        style: style.value,
        ref: props.container === true ? void 0 : rootRef,
        tabindex: -1
      }, content);
      if (props.container === true) {
        return h("div", {
          class: "q-layout-container overflow-hidden",
          ref: rootRef
        }, [
          h(QResizeObserver, { onResize: onContainerResize }),
          h("div", {
            class: "absolute-full",
            style: targetStyle.value
          }, [
            h("div", {
              class: "scroll",
              style: targetChildStyle.value
            }, [layout])
          ])
        ]);
      }
      return layout;
    };
  }
});
function getDepth(value) {
  if (value === false) {
    return 0;
  }
  if (value === true || value === void 0) {
    return 1;
  }
  const depth = parseInt(value, 10);
  return isNaN(depth) ? 0 : depth;
}
const ClosePopup = createDirective(
  {
    name: "close-popup",
    beforeMount(el, { value }) {
      const ctx = {
        depth: getDepth(value),
        handler(evt) {
          ctx.depth !== 0 && setTimeout(() => {
            const proxy = getPortalProxy(el);
            if (proxy !== void 0) {
              closePortals(proxy, evt, ctx.depth);
            }
          });
        },
        handlerKey(evt) {
          isKeyCode(evt, 13) === true && ctx.handler(evt);
        }
      };
      el.__qclosepopup = ctx;
      el.addEventListener("click", ctx.handler);
      el.addEventListener("keyup", ctx.handlerKey);
    },
    updated(el, { value, oldValue }) {
      if (value !== oldValue) {
        el.__qclosepopup.depth = getDepth(value);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qclosepopup;
      el.removeEventListener("click", ctx.handler);
      el.removeEventListener("keyup", ctx.handlerKey);
      delete el.__qclosepopup;
    }
  }
);
const decodeCache = {};
function getDecodeCache(exclude) {
  let cache = decodeCache[exclude];
  if (cache) {
    return cache;
  }
  cache = decodeCache[exclude] = [];
  for (let i = 0; i < 128; i++) {
    const ch = String.fromCharCode(i);
    cache.push(ch);
  }
  for (let i = 0; i < exclude.length; i++) {
    const ch = exclude.charCodeAt(i);
    cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
  }
  return cache;
}
function decode$1(string, exclude) {
  if (typeof exclude !== "string") {
    exclude = decode$1.defaultChars;
  }
  const cache = getDecodeCache(exclude);
  return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
    let result = "";
    for (let i = 0, l = seq.length; i < l; i += 3) {
      const b1 = parseInt(seq.slice(i + 1, i + 3), 16);
      if (b1 < 128) {
        result += cache[b1];
        continue;
      }
      if ((b1 & 224) === 192 && i + 3 < l) {
        const b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        if ((b2 & 192) === 128) {
          const chr = b1 << 6 & 1984 | b2 & 63;
          if (chr < 128) {
            result += "��";
          } else {
            result += String.fromCharCode(chr);
          }
          i += 3;
          continue;
        }
      }
      if ((b1 & 240) === 224 && i + 6 < l) {
        const b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        const b3 = parseInt(seq.slice(i + 7, i + 9), 16);
        if ((b2 & 192) === 128 && (b3 & 192) === 128) {
          const chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
          if (chr < 2048 || chr >= 55296 && chr <= 57343) {
            result += "���";
          } else {
            result += String.fromCharCode(chr);
          }
          i += 6;
          continue;
        }
      }
      if ((b1 & 248) === 240 && i + 9 < l) {
        const b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        const b3 = parseInt(seq.slice(i + 7, i + 9), 16);
        const b4 = parseInt(seq.slice(i + 10, i + 12), 16);
        if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
          let chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
          if (chr < 65536 || chr > 1114111) {
            result += "����";
          } else {
            chr -= 65536;
            result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
          }
          i += 9;
          continue;
        }
      }
      result += "�";
    }
    return result;
  });
}
decode$1.defaultChars = ";/?:@&=+$,#";
decode$1.componentChars = "";
const encodeCache = {};
function getEncodeCache(exclude) {
  let cache = encodeCache[exclude];
  if (cache) {
    return cache;
  }
  cache = encodeCache[exclude] = [];
  for (let i = 0; i < 128; i++) {
    const ch = String.fromCharCode(i);
    if (/^[0-9a-z]$/i.test(ch)) {
      cache.push(ch);
    } else {
      cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
    }
  }
  for (let i = 0; i < exclude.length; i++) {
    cache[exclude.charCodeAt(i)] = exclude[i];
  }
  return cache;
}
function encode$1(string, exclude, keepEscaped) {
  if (typeof exclude !== "string") {
    keepEscaped = exclude;
    exclude = encode$1.defaultChars;
  }
  if (typeof keepEscaped === "undefined") {
    keepEscaped = true;
  }
  const cache = getEncodeCache(exclude);
  let result = "";
  for (let i = 0, l = string.length; i < l; i++) {
    const code2 = string.charCodeAt(i);
    if (keepEscaped && code2 === 37 && i + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
        result += string.slice(i, i + 3);
        i += 2;
        continue;
      }
    }
    if (code2 < 128) {
      result += cache[code2];
      continue;
    }
    if (code2 >= 55296 && code2 <= 57343) {
      if (code2 >= 55296 && code2 <= 56319 && i + 1 < l) {
        const nextCode = string.charCodeAt(i + 1);
        if (nextCode >= 56320 && nextCode <= 57343) {
          result += encodeURIComponent(string[i] + string[i + 1]);
          i++;
          continue;
        }
      }
      result += "%EF%BF%BD";
      continue;
    }
    result += encodeURIComponent(string[i]);
  }
  return result;
}
encode$1.defaultChars = ";/?:@&=+$,-_.!~*'()#";
encode$1.componentChars = "-_.!~*'()";
function format(url) {
  let result = "";
  result += url.protocol || "";
  result += url.slashes ? "//" : "";
  result += url.auth ? url.auth + "@" : "";
  if (url.hostname && url.hostname.indexOf(":") !== -1) {
    result += "[" + url.hostname + "]";
  } else {
    result += url.hostname || "";
  }
  result += url.port ? ":" + url.port : "";
  result += url.pathname || "";
  result += url.search || "";
  result += url.hash || "";
  return result;
}
function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.pathname = null;
}
const protocolPattern = /^([a-z0-9.+-]+:)/i;
const portPattern = /:[0-9]*$/;
const simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
const delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"];
const unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims);
const autoEscape = ["'"].concat(unwise);
const nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape);
const hostEndingChars = ["/", "?", "#"];
const hostnameMaxLen = 255;
const hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
const hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
const hostlessProtocol = {
  javascript: true,
  "javascript:": true
};
const slashedProtocol = {
  http: true,
  https: true,
  ftp: true,
  gopher: true,
  file: true,
  "http:": true,
  "https:": true,
  "ftp:": true,
  "gopher:": true,
  "file:": true
};
function urlParse(url, slashesDenoteHost) {
  if (url && url instanceof Url)
    return url;
  const u = new Url();
  u.parse(url, slashesDenoteHost);
  return u;
}
Url.prototype.parse = function(url, slashesDenoteHost) {
  let lowerProto, hec, slashes;
  let rest = url;
  rest = rest.trim();
  if (!slashesDenoteHost && url.split("#").length === 1) {
    const simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
      }
      return this;
    }
  }
  let proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    lowerProto = proto.toLowerCase();
    this.protocol = proto;
    rest = rest.substr(proto.length);
  }
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    slashes = rest.substr(0, 2) === "//";
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }
  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
    let hostEnd = -1;
    for (let i = 0; i < hostEndingChars.length; i++) {
      hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }
    let auth, atSign;
    if (hostEnd === -1) {
      atSign = rest.lastIndexOf("@");
    } else {
      atSign = rest.lastIndexOf("@", hostEnd);
    }
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = auth;
    }
    hostEnd = -1;
    for (let i = 0; i < nonHostChars.length; i++) {
      hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }
    if (hostEnd === -1) {
      hostEnd = rest.length;
    }
    if (rest[hostEnd - 1] === ":") {
      hostEnd--;
    }
    const host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);
    this.parseHost(host);
    this.hostname = this.hostname || "";
    const ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!ipv6Hostname) {
      const hostparts = this.hostname.split(/\./);
      for (let i = 0, l = hostparts.length; i < l; i++) {
        const part = hostparts[i];
        if (!part) {
          continue;
        }
        if (!part.match(hostnamePartPattern)) {
          let newpart = "";
          for (let j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              newpart += "x";
            } else {
              newpart += part[j];
            }
          }
          if (!newpart.match(hostnamePartPattern)) {
            const validParts = hostparts.slice(0, i);
            const notHost = hostparts.slice(i + 1);
            const bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = notHost.join(".") + rest;
            }
            this.hostname = validParts.join(".");
            break;
          }
        }
      }
    }
    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = "";
    }
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
    }
  }
  const hash = rest.indexOf("#");
  if (hash !== -1) {
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  const qm = rest.indexOf("?");
  if (qm !== -1) {
    this.search = rest.substr(qm);
    rest = rest.slice(0, qm);
  }
  if (rest) {
    this.pathname = rest;
  }
  if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
    this.pathname = "";
  }
  return this;
};
Url.prototype.parseHost = function(host) {
  let port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ":") {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) {
    this.hostname = host;
  }
};
const mdurl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: decode$1,
  encode: encode$1,
  format,
  parse: urlParse
}, Symbol.toStringTag, { value: "Module" }));
const Any = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
const Cc = /[\0-\x1F\x7F-\x9F]/;
const regex$1 = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
const P = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
const regex = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/;
const Z = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
const ucmicro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any,
  Cc,
  Cf: regex$1,
  P,
  S: regex,
  Z
}, Symbol.toStringTag, { value: "Module" }));
const htmlDecodeTree = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((c) => c.charCodeAt(0))
);
const xmlDecodeTree = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((c) => c.charCodeAt(0))
);
var _a;
const decodeMap = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
const fromCodePoint$1 = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
    let output = "";
    if (codePoint > 65535) {
      codePoint -= 65536;
      output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    output += String.fromCharCode(codePoint);
    return output;
  }
);
function replaceCodePoint(codePoint) {
  var _a2;
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return 65533;
  }
  return (_a2 = decodeMap.get(codePoint)) !== null && _a2 !== void 0 ? _a2 : codePoint;
}
var CharCodes;
(function(CharCodes2) {
  CharCodes2[CharCodes2["NUM"] = 35] = "NUM";
  CharCodes2[CharCodes2["SEMI"] = 59] = "SEMI";
  CharCodes2[CharCodes2["EQUALS"] = 61] = "EQUALS";
  CharCodes2[CharCodes2["ZERO"] = 48] = "ZERO";
  CharCodes2[CharCodes2["NINE"] = 57] = "NINE";
  CharCodes2[CharCodes2["LOWER_A"] = 97] = "LOWER_A";
  CharCodes2[CharCodes2["LOWER_F"] = 102] = "LOWER_F";
  CharCodes2[CharCodes2["LOWER_X"] = 120] = "LOWER_X";
  CharCodes2[CharCodes2["LOWER_Z"] = 122] = "LOWER_Z";
  CharCodes2[CharCodes2["UPPER_A"] = 65] = "UPPER_A";
  CharCodes2[CharCodes2["UPPER_F"] = 70] = "UPPER_F";
  CharCodes2[CharCodes2["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
const TO_LOWER_BIT = 32;
var BinTrieFlags;
(function(BinTrieFlags2) {
  BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
  BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
  BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber(code2) {
  return code2 >= CharCodes.ZERO && code2 <= CharCodes.NINE;
}
function isHexadecimalCharacter(code2) {
  return code2 >= CharCodes.UPPER_A && code2 <= CharCodes.UPPER_F || code2 >= CharCodes.LOWER_A && code2 <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric(code2) {
  return code2 >= CharCodes.UPPER_A && code2 <= CharCodes.UPPER_Z || code2 >= CharCodes.LOWER_A && code2 <= CharCodes.LOWER_Z || isNumber(code2);
}
function isEntityInAttributeInvalidEnd(code2) {
  return code2 === CharCodes.EQUALS || isAsciiAlphaNumeric(code2);
}
var EntityDecoderState;
(function(EntityDecoderState2) {
  EntityDecoderState2[EntityDecoderState2["EntityStart"] = 0] = "EntityStart";
  EntityDecoderState2[EntityDecoderState2["NumericStart"] = 1] = "NumericStart";
  EntityDecoderState2[EntityDecoderState2["NumericDecimal"] = 2] = "NumericDecimal";
  EntityDecoderState2[EntityDecoderState2["NumericHex"] = 3] = "NumericHex";
  EntityDecoderState2[EntityDecoderState2["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode2) {
  DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
  DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
  DecodingMode2[DecodingMode2["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
class EntityDecoder {
  constructor(decodeTree, emitCodePoint, errors2) {
    this.decodeTree = decodeTree;
    this.emitCodePoint = emitCodePoint;
    this.errors = errors2;
    this.state = EntityDecoderState.EntityStart;
    this.consumed = 1;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.decodeMode = DecodingMode.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(decodeMode) {
    this.decodeMode = decodeMode;
    this.state = EntityDecoderState.EntityStart;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(str, offset) {
    switch (this.state) {
      case EntityDecoderState.EntityStart: {
        if (str.charCodeAt(offset) === CharCodes.NUM) {
          this.state = EntityDecoderState.NumericStart;
          this.consumed += 1;
          return this.stateNumericStart(str, offset + 1);
        }
        this.state = EntityDecoderState.NamedEntity;
        return this.stateNamedEntity(str, offset);
      }
      case EntityDecoderState.NumericStart: {
        return this.stateNumericStart(str, offset);
      }
      case EntityDecoderState.NumericDecimal: {
        return this.stateNumericDecimal(str, offset);
      }
      case EntityDecoderState.NumericHex: {
        return this.stateNumericHex(str, offset);
      }
      case EntityDecoderState.NamedEntity: {
        return this.stateNamedEntity(str, offset);
      }
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(str, offset) {
    if (offset >= str.length) {
      return -1;
    }
    if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
      this.state = EntityDecoderState.NumericHex;
      this.consumed += 1;
      return this.stateNumericHex(str, offset + 1);
    }
    this.state = EntityDecoderState.NumericDecimal;
    return this.stateNumericDecimal(str, offset);
  }
  addToNumericResult(str, start, end, base2) {
    if (start !== end) {
      const digitCount = end - start;
      this.result = this.result * Math.pow(base2, digitCount) + parseInt(str.substr(start, digitCount), base2);
      this.consumed += digitCount;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(str, offset) {
    const startIdx = offset;
    while (offset < str.length) {
      const char = str.charCodeAt(offset);
      if (isNumber(char) || isHexadecimalCharacter(char)) {
        offset += 1;
      } else {
        this.addToNumericResult(str, startIdx, offset, 16);
        return this.emitNumericEntity(char, 3);
      }
    }
    this.addToNumericResult(str, startIdx, offset, 16);
    return -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(str, offset) {
    const startIdx = offset;
    while (offset < str.length) {
      const char = str.charCodeAt(offset);
      if (isNumber(char)) {
        offset += 1;
      } else {
        this.addToNumericResult(str, startIdx, offset, 10);
        return this.emitNumericEntity(char, 2);
      }
    }
    this.addToNumericResult(str, startIdx, offset, 10);
    return -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(lastCp, expectedLength) {
    var _a2;
    if (this.consumed <= expectedLength) {
      (_a2 = this.errors) === null || _a2 === void 0 ? void 0 : _a2.absenceOfDigitsInNumericCharacterReference(this.consumed);
      return 0;
    }
    if (lastCp === CharCodes.SEMI) {
      this.consumed += 1;
    } else if (this.decodeMode === DecodingMode.Strict) {
      return 0;
    }
    this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
    if (this.errors) {
      if (lastCp !== CharCodes.SEMI) {
        this.errors.missingSemicolonAfterCharacterReference();
      }
      this.errors.validateNumericCharacterReference(this.result);
    }
    return this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(str, offset) {
    const { decodeTree } = this;
    let current = decodeTree[this.treeIndex];
    let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
    for (; offset < str.length; offset++, this.excess++) {
      const char = str.charCodeAt(offset);
      this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
      if (this.treeIndex < 0) {
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
        (valueLength === 0 || // And there should be no invalid characters.
        isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
      }
      current = decodeTree[this.treeIndex];
      valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
      if (valueLength !== 0) {
        if (char === CharCodes.SEMI) {
          return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
        }
        if (this.decodeMode !== DecodingMode.Strict) {
          this.result = this.treeIndex;
          this.consumed += this.excess;
          this.excess = 0;
        }
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var _a2;
    const { result, decodeTree } = this;
    const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
    this.emitNamedEntityData(result, valueLength, this.consumed);
    (_a2 = this.errors) === null || _a2 === void 0 ? void 0 : _a2.missingSemicolonAfterCharacterReference();
    return this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(result, valueLength, consumed) {
    const { decodeTree } = this;
    this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
    if (valueLength === 3) {
      this.emitCodePoint(decodeTree[result + 2], consumed);
    }
    return consumed;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var _a2;
    switch (this.state) {
      case EntityDecoderState.NamedEntity: {
        return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      }
      case EntityDecoderState.NumericDecimal: {
        return this.emitNumericEntity(0, 2);
      }
      case EntityDecoderState.NumericHex: {
        return this.emitNumericEntity(0, 3);
      }
      case EntityDecoderState.NumericStart: {
        (_a2 = this.errors) === null || _a2 === void 0 ? void 0 : _a2.absenceOfDigitsInNumericCharacterReference(this.consumed);
        return 0;
      }
      case EntityDecoderState.EntityStart: {
        return 0;
      }
    }
  }
}
function getDecoder(decodeTree) {
  let ret = "";
  const decoder = new EntityDecoder(decodeTree, (str) => ret += fromCodePoint$1(str));
  return function decodeWithTrie(str, decodeMode) {
    let lastIndex = 0;
    let offset = 0;
    while ((offset = str.indexOf("&", offset)) >= 0) {
      ret += str.slice(lastIndex, offset);
      decoder.startEntity(decodeMode);
      const len = decoder.write(
        str,
        // Skip the "&"
        offset + 1
      );
      if (len < 0) {
        lastIndex = offset + decoder.end();
        break;
      }
      lastIndex = offset + len;
      offset = len === 0 ? lastIndex + 1 : lastIndex;
    }
    const result = ret + str.slice(lastIndex);
    ret = "";
    return result;
  };
}
function determineBranch(decodeTree, current, nodeIdx, char) {
  const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
  const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
  if (branchCount === 0) {
    return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
  }
  if (jumpOffset) {
    const value = char - jumpOffset;
    return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
  }
  let lo = nodeIdx;
  let hi = lo + branchCount - 1;
  while (lo <= hi) {
    const mid = lo + hi >>> 1;
    const midVal = decodeTree[mid];
    if (midVal < char) {
      lo = mid + 1;
    } else if (midVal > char) {
      hi = mid - 1;
    } else {
      return decodeTree[mid + branchCount];
    }
  }
  return -1;
}
const htmlDecoder = getDecoder(htmlDecodeTree);
getDecoder(xmlDecodeTree);
function decodeHTML(str, mode = DecodingMode.Legacy) {
  return htmlDecoder(str, mode);
}
function _class$1(obj) {
  return Object.prototype.toString.call(obj);
}
function isString$1(obj) {
  return _class$1(obj) === "[object String]";
}
const _hasOwnProperty = Object.prototype.hasOwnProperty;
function has(object, key) {
  return _hasOwnProperty.call(object, key);
}
function assign$1(obj) {
  const sources = Array.prototype.slice.call(arguments, 1);
  sources.forEach(function(source) {
    if (!source) {
      return;
    }
    if (typeof source !== "object") {
      throw new TypeError(source + "must be object");
    }
    Object.keys(source).forEach(function(key) {
      obj[key] = source[key];
    });
  });
  return obj;
}
function arrayReplaceAt(src, pos, newElements) {
  return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
}
function isValidEntityCode(c) {
  if (c >= 55296 && c <= 57343) {
    return false;
  }
  if (c >= 64976 && c <= 65007) {
    return false;
  }
  if ((c & 65535) === 65535 || (c & 65535) === 65534) {
    return false;
  }
  if (c >= 0 && c <= 8) {
    return false;
  }
  if (c === 11) {
    return false;
  }
  if (c >= 14 && c <= 31) {
    return false;
  }
  if (c >= 127 && c <= 159) {
    return false;
  }
  if (c > 1114111) {
    return false;
  }
  return true;
}
function fromCodePoint(c) {
  if (c > 65535) {
    c -= 65536;
    const surrogate1 = 55296 + (c >> 10);
    const surrogate2 = 56320 + (c & 1023);
    return String.fromCharCode(surrogate1, surrogate2);
  }
  return String.fromCharCode(c);
}
const UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g;
const ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
const UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
const DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function replaceEntityPattern(match2, name) {
  if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
    const code2 = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
    if (isValidEntityCode(code2)) {
      return fromCodePoint(code2);
    }
    return match2;
  }
  const decoded = decodeHTML(match2);
  if (decoded !== match2) {
    return decoded;
  }
  return match2;
}
function unescapeMd(str) {
  if (str.indexOf("\\") < 0) {
    return str;
  }
  return str.replace(UNESCAPE_MD_RE, "$1");
}
function unescapeAll(str) {
  if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
    return str;
  }
  return str.replace(UNESCAPE_ALL_RE, function(match2, escaped, entity2) {
    if (escaped) {
      return escaped;
    }
    return replaceEntityPattern(match2, entity2);
  });
}
const HTML_ESCAPE_TEST_RE = /[&<>"]/;
const HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
const HTML_REPLACEMENTS = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch];
}
function escapeHtml(str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  }
  return str;
}
const REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
function escapeRE$1(str) {
  return str.replace(REGEXP_ESCAPE_RE, "\\$&");
}
function isSpace(code2) {
  switch (code2) {
    case 9:
    case 32:
      return true;
  }
  return false;
}
function isWhiteSpace(code2) {
  if (code2 >= 8192 && code2 <= 8202) {
    return true;
  }
  switch (code2) {
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return true;
  }
  return false;
}
function isPunctChar(ch) {
  return P.test(ch) || regex.test(ch);
}
function isMdAsciiPunct(ch) {
  switch (ch) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return true;
    default:
      return false;
  }
}
function normalizeReference(str) {
  str = str.trim().replace(/\s+/g, " ");
  if ("ẞ".toLowerCase() === "Ṿ") {
    str = str.replace(/ẞ/g, "ß");
  }
  return str.toLowerCase().toUpperCase();
}
const lib = { mdurl, ucmicro };
const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt,
  assign: assign$1,
  escapeHtml,
  escapeRE: escapeRE$1,
  fromCodePoint,
  has,
  isMdAsciiPunct,
  isPunctChar,
  isSpace,
  isString: isString$1,
  isValidEntityCode,
  isWhiteSpace,
  lib,
  normalizeReference,
  unescapeAll,
  unescapeMd
}, Symbol.toStringTag, { value: "Module" }));
function parseLinkLabel(state, start, disableNested) {
  let level, found, marker, prevPos;
  const max = state.posMax;
  const oldPos = state.pos;
  state.pos = start + 1;
  level = 1;
  while (state.pos < max) {
    marker = state.src.charCodeAt(state.pos);
    if (marker === 93) {
      level--;
      if (level === 0) {
        found = true;
        break;
      }
    }
    prevPos = state.pos;
    state.md.inline.skipToken(state);
    if (marker === 91) {
      if (prevPos === state.pos - 1) {
        level++;
      } else if (disableNested) {
        state.pos = oldPos;
        return -1;
      }
    }
  }
  let labelEnd = -1;
  if (found) {
    labelEnd = state.pos;
  }
  state.pos = oldPos;
  return labelEnd;
}
function parseLinkDestination(str, start, max) {
  let code2;
  let pos = start;
  const result = {
    ok: false,
    pos: 0,
    str: ""
  };
  if (str.charCodeAt(pos) === 60) {
    pos++;
    while (pos < max) {
      code2 = str.charCodeAt(pos);
      if (code2 === 10) {
        return result;
      }
      if (code2 === 60) {
        return result;
      }
      if (code2 === 62) {
        result.pos = pos + 1;
        result.str = unescapeAll(str.slice(start + 1, pos));
        result.ok = true;
        return result;
      }
      if (code2 === 92 && pos + 1 < max) {
        pos += 2;
        continue;
      }
      pos++;
    }
    return result;
  }
  let level = 0;
  while (pos < max) {
    code2 = str.charCodeAt(pos);
    if (code2 === 32) {
      break;
    }
    if (code2 < 32 || code2 === 127) {
      break;
    }
    if (code2 === 92 && pos + 1 < max) {
      if (str.charCodeAt(pos + 1) === 32) {
        break;
      }
      pos += 2;
      continue;
    }
    if (code2 === 40) {
      level++;
      if (level > 32) {
        return result;
      }
    }
    if (code2 === 41) {
      if (level === 0) {
        break;
      }
      level--;
    }
    pos++;
  }
  if (start === pos) {
    return result;
  }
  if (level !== 0) {
    return result;
  }
  result.str = unescapeAll(str.slice(start, pos));
  result.pos = pos;
  result.ok = true;
  return result;
}
function parseLinkTitle(str, start, max, prev_state) {
  let code2;
  let pos = start;
  const state = {
    // if `true`, this is a valid link title
    ok: false,
    // if `true`, this link can be continued on the next line
    can_continue: false,
    // if `ok`, it's the position of the first character after the closing marker
    pos: 0,
    // if `ok`, it's the unescaped title
    str: "",
    // expected closing marker character code
    marker: 0
  };
  if (prev_state) {
    state.str = prev_state.str;
    state.marker = prev_state.marker;
  } else {
    if (pos >= max) {
      return state;
    }
    let marker = str.charCodeAt(pos);
    if (marker !== 34 && marker !== 39 && marker !== 40) {
      return state;
    }
    start++;
    pos++;
    if (marker === 40) {
      marker = 41;
    }
    state.marker = marker;
  }
  while (pos < max) {
    code2 = str.charCodeAt(pos);
    if (code2 === state.marker) {
      state.pos = pos + 1;
      state.str += unescapeAll(str.slice(start, pos));
      state.ok = true;
      return state;
    } else if (code2 === 40 && state.marker === 41) {
      return state;
    } else if (code2 === 92 && pos + 1 < max) {
      pos++;
    }
    pos++;
  }
  state.can_continue = true;
  state.str += unescapeAll(str.slice(start, pos));
  return state;
}
const helpers = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination,
  parseLinkLabel,
  parseLinkTitle
}, Symbol.toStringTag, { value: "Module" }));
const default_rules = {};
default_rules.code_inline = function(tokens, idx, options, env, slf) {
  const token = tokens[idx];
  return "<code" + slf.renderAttrs(token) + ">" + escapeHtml(token.content) + "</code>";
};
default_rules.code_block = function(tokens, idx, options, env, slf) {
  const token = tokens[idx];
  return "<pre" + slf.renderAttrs(token) + "><code>" + escapeHtml(tokens[idx].content) + "</code></pre>\n";
};
default_rules.fence = function(tokens, idx, options, env, slf) {
  const token = tokens[idx];
  const info = token.info ? unescapeAll(token.info).trim() : "";
  let langName = "";
  let langAttrs = "";
  if (info) {
    const arr = info.split(/(\s+)/g);
    langName = arr[0];
    langAttrs = arr.slice(2).join("");
  }
  let highlighted;
  if (options.highlight) {
    highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content);
  } else {
    highlighted = escapeHtml(token.content);
  }
  if (highlighted.indexOf("<pre") === 0) {
    return highlighted + "\n";
  }
  if (info) {
    const i = token.attrIndex("class");
    const tmpAttrs = token.attrs ? token.attrs.slice() : [];
    if (i < 0) {
      tmpAttrs.push(["class", options.langPrefix + langName]);
    } else {
      tmpAttrs[i] = tmpAttrs[i].slice();
      tmpAttrs[i][1] += " " + options.langPrefix + langName;
    }
    const tmpToken = {
      attrs: tmpAttrs
    };
    return `<pre><code${slf.renderAttrs(tmpToken)}>${highlighted}</code></pre>
`;
  }
  return `<pre><code${slf.renderAttrs(token)}>${highlighted}</code></pre>
`;
};
default_rules.image = function(tokens, idx, options, env, slf) {
  const token = tokens[idx];
  token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(token.children, options, env);
  return slf.renderToken(tokens, idx, options);
};
default_rules.hardbreak = function(tokens, idx, options) {
  return options.xhtmlOut ? "<br />\n" : "<br>\n";
};
default_rules.softbreak = function(tokens, idx, options) {
  return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
};
default_rules.text = function(tokens, idx) {
  return escapeHtml(tokens[idx].content);
};
default_rules.html_block = function(tokens, idx) {
  return tokens[idx].content;
};
default_rules.html_inline = function(tokens, idx) {
  return tokens[idx].content;
};
function Renderer() {
  this.rules = assign$1({}, default_rules);
}
Renderer.prototype.renderAttrs = function renderAttrs(token) {
  let i, l, result;
  if (!token.attrs) {
    return "";
  }
  result = "";
  for (i = 0, l = token.attrs.length; i < l; i++) {
    result += " " + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
  }
  return result;
};
Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
  const token = tokens[idx];
  let result = "";
  if (token.hidden) {
    return "";
  }
  if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
    result += "\n";
  }
  result += (token.nesting === -1 ? "</" : "<") + token.tag;
  result += this.renderAttrs(token);
  if (token.nesting === 0 && options.xhtmlOut) {
    result += " /";
  }
  let needLf = false;
  if (token.block) {
    needLf = true;
    if (token.nesting === 1) {
      if (idx + 1 < tokens.length) {
        const nextToken = tokens[idx + 1];
        if (nextToken.type === "inline" || nextToken.hidden) {
          needLf = false;
        } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
          needLf = false;
        }
      }
    }
  }
  result += needLf ? ">\n" : ">";
  return result;
};
Renderer.prototype.renderInline = function(tokens, options, env) {
  let result = "";
  const rules = this.rules;
  for (let i = 0, len = tokens.length; i < len; i++) {
    const type = tokens[i].type;
    if (typeof rules[type] !== "undefined") {
      result += rules[type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options);
    }
  }
  return result;
};
Renderer.prototype.renderInlineAsText = function(tokens, options, env) {
  let result = "";
  for (let i = 0, len = tokens.length; i < len; i++) {
    switch (tokens[i].type) {
      case "text":
        result += tokens[i].content;
        break;
      case "image":
        result += this.renderInlineAsText(tokens[i].children, options, env);
        break;
      case "html_inline":
      case "html_block":
        result += tokens[i].content;
        break;
      case "softbreak":
      case "hardbreak":
        result += "\n";
        break;
    }
  }
  return result;
};
Renderer.prototype.render = function(tokens, options, env) {
  let result = "";
  const rules = this.rules;
  for (let i = 0, len = tokens.length; i < len; i++) {
    const type = tokens[i].type;
    if (type === "inline") {
      result += this.renderInline(tokens[i].children, options, env);
    } else if (typeof rules[type] !== "undefined") {
      result += rules[type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options, env);
    }
  }
  return result;
};
function Ruler() {
  this.__rules__ = [];
  this.__cache__ = null;
}
Ruler.prototype.__find__ = function(name) {
  for (let i = 0; i < this.__rules__.length; i++) {
    if (this.__rules__[i].name === name) {
      return i;
    }
  }
  return -1;
};
Ruler.prototype.__compile__ = function() {
  const self = this;
  const chains = [""];
  self.__rules__.forEach(function(rule) {
    if (!rule.enabled) {
      return;
    }
    rule.alt.forEach(function(altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName);
      }
    });
  });
  self.__cache__ = {};
  chains.forEach(function(chain) {
    self.__cache__[chain] = [];
    self.__rules__.forEach(function(rule) {
      if (!rule.enabled) {
        return;
      }
      if (chain && rule.alt.indexOf(chain) < 0) {
        return;
      }
      self.__cache__[chain].push(rule.fn);
    });
  });
};
Ruler.prototype.at = function(name, fn, options) {
  const index = this.__find__(name);
  const opt = options || {};
  if (index === -1) {
    throw new Error("Parser rule not found: " + name);
  }
  this.__rules__[index].fn = fn;
  this.__rules__[index].alt = opt.alt || [];
  this.__cache__ = null;
};
Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
  const index = this.__find__(beforeName);
  const opt = options || {};
  if (index === -1) {
    throw new Error("Parser rule not found: " + beforeName);
  }
  this.__rules__.splice(index, 0, {
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler.prototype.after = function(afterName, ruleName, fn, options) {
  const index = this.__find__(afterName);
  const opt = options || {};
  if (index === -1) {
    throw new Error("Parser rule not found: " + afterName);
  }
  this.__rules__.splice(index + 1, 0, {
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler.prototype.push = function(ruleName, fn, options) {
  const opt = options || {};
  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler.prototype.enable = function(list2, ignoreInvalid) {
  if (!Array.isArray(list2)) {
    list2 = [list2];
  }
  const result = [];
  list2.forEach(function(name) {
    const idx = this.__find__(name);
    if (idx < 0) {
      if (ignoreInvalid) {
        return;
      }
      throw new Error("Rules manager: invalid rule name " + name);
    }
    this.__rules__[idx].enabled = true;
    result.push(name);
  }, this);
  this.__cache__ = null;
  return result;
};
Ruler.prototype.enableOnly = function(list2, ignoreInvalid) {
  if (!Array.isArray(list2)) {
    list2 = [list2];
  }
  this.__rules__.forEach(function(rule) {
    rule.enabled = false;
  });
  this.enable(list2, ignoreInvalid);
};
Ruler.prototype.disable = function(list2, ignoreInvalid) {
  if (!Array.isArray(list2)) {
    list2 = [list2];
  }
  const result = [];
  list2.forEach(function(name) {
    const idx = this.__find__(name);
    if (idx < 0) {
      if (ignoreInvalid) {
        return;
      }
      throw new Error("Rules manager: invalid rule name " + name);
    }
    this.__rules__[idx].enabled = false;
    result.push(name);
  }, this);
  this.__cache__ = null;
  return result;
};
Ruler.prototype.getRules = function(chainName) {
  if (this.__cache__ === null) {
    this.__compile__();
  }
  return this.__cache__[chainName] || [];
};
function Token(type, tag, nesting) {
  this.type = type;
  this.tag = tag;
  this.attrs = null;
  this.map = null;
  this.nesting = nesting;
  this.level = 0;
  this.children = null;
  this.content = "";
  this.markup = "";
  this.info = "";
  this.meta = null;
  this.block = false;
  this.hidden = false;
}
Token.prototype.attrIndex = function attrIndex(name) {
  if (!this.attrs) {
    return -1;
  }
  const attrs = this.attrs;
  for (let i = 0, len = attrs.length; i < len; i++) {
    if (attrs[i][0] === name) {
      return i;
    }
  }
  return -1;
};
Token.prototype.attrPush = function attrPush(attrData) {
  if (this.attrs) {
    this.attrs.push(attrData);
  } else {
    this.attrs = [attrData];
  }
};
Token.prototype.attrSet = function attrSet(name, value) {
  const idx = this.attrIndex(name);
  const attrData = [name, value];
  if (idx < 0) {
    this.attrPush(attrData);
  } else {
    this.attrs[idx] = attrData;
  }
};
Token.prototype.attrGet = function attrGet(name) {
  const idx = this.attrIndex(name);
  let value = null;
  if (idx >= 0) {
    value = this.attrs[idx][1];
  }
  return value;
};
Token.prototype.attrJoin = function attrJoin(name, value) {
  const idx = this.attrIndex(name);
  if (idx < 0) {
    this.attrPush([name, value]);
  } else {
    this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
  }
};
function StateCore(src, md, env) {
  this.src = src;
  this.env = env;
  this.tokens = [];
  this.inlineMode = false;
  this.md = md;
}
StateCore.prototype.Token = Token;
const NEWLINES_RE = /\r\n?|\n/g;
const NULL_RE = /\0/g;
function normalize(state) {
  let str;
  str = state.src.replace(NEWLINES_RE, "\n");
  str = str.replace(NULL_RE, "�");
  state.src = str;
}
function block(state) {
  let token;
  if (state.inlineMode) {
    token = new state.Token("inline", "", 0);
    token.content = state.src;
    token.map = [0, 1];
    token.children = [];
    state.tokens.push(token);
  } else {
    state.md.block.parse(state.src, state.md, state.env, state.tokens);
  }
}
function inline(state) {
  const tokens = state.tokens;
  for (let i = 0, l = tokens.length; i < l; i++) {
    const tok = tokens[i];
    if (tok.type === "inline") {
      state.md.inline.parse(tok.content, state.md, state.env, tok.children);
    }
  }
}
function isLinkOpen$1(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose$1(str) {
  return /^<\/a\s*>/i.test(str);
}
function linkify$1(state) {
  const blockTokens = state.tokens;
  if (!state.md.options.linkify) {
    return;
  }
  for (let j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) {
      continue;
    }
    let tokens = blockTokens[j].children;
    let htmlLinkLevel = 0;
    for (let i = tokens.length - 1; i >= 0; i--) {
      const currentToken = tokens[i];
      if (currentToken.type === "link_close") {
        i--;
        while (tokens[i].level !== currentToken.level && tokens[i].type !== "link_open") {
          i--;
        }
        continue;
      }
      if (currentToken.type === "html_inline") {
        if (isLinkOpen$1(currentToken.content) && htmlLinkLevel > 0) {
          htmlLinkLevel--;
        }
        if (isLinkClose$1(currentToken.content)) {
          htmlLinkLevel++;
        }
      }
      if (htmlLinkLevel > 0) {
        continue;
      }
      if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
        const text2 = currentToken.content;
        let links = state.md.linkify.match(text2);
        const nodes = [];
        let level = currentToken.level;
        let lastPos = 0;
        if (links.length > 0 && links[0].index === 0 && i > 0 && tokens[i - 1].type === "text_special") {
          links = links.slice(1);
        }
        for (let ln = 0; ln < links.length; ln++) {
          const url = links[ln].url;
          const fullUrl = state.md.normalizeLink(url);
          if (!state.md.validateLink(fullUrl)) {
            continue;
          }
          let urlText = links[ln].text;
          if (!links[ln].schema) {
            urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
          } else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) {
            urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
          } else {
            urlText = state.md.normalizeLinkText(urlText);
          }
          const pos = links[ln].index;
          if (pos > lastPos) {
            const token = new state.Token("text", "", 0);
            token.content = text2.slice(lastPos, pos);
            token.level = level;
            nodes.push(token);
          }
          const token_o = new state.Token("link_open", "a", 1);
          token_o.attrs = [["href", fullUrl]];
          token_o.level = level++;
          token_o.markup = "linkify";
          token_o.info = "auto";
          nodes.push(token_o);
          const token_t = new state.Token("text", "", 0);
          token_t.content = urlText;
          token_t.level = level;
          nodes.push(token_t);
          const token_c = new state.Token("link_close", "a", -1);
          token_c.level = --level;
          token_c.markup = "linkify";
          token_c.info = "auto";
          nodes.push(token_c);
          lastPos = links[ln].lastIndex;
        }
        if (lastPos < text2.length) {
          const token = new state.Token("text", "", 0);
          token.content = text2.slice(lastPos);
          token.level = level;
          nodes.push(token);
        }
        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
      }
    }
  }
}
const RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
const SCOPED_ABBR_TEST_RE = /\((c|tm|r)\)/i;
const SCOPED_ABBR_RE = /\((c|tm|r)\)/ig;
const SCOPED_ABBR = {
  c: "©",
  r: "®",
  tm: "™"
};
function replaceFn(match2, name) {
  return SCOPED_ABBR[name.toLowerCase()];
}
function replace_scoped(inlineTokens) {
  let inside_autolink = 0;
  for (let i = inlineTokens.length - 1; i >= 0; i--) {
    const token = inlineTokens[i];
    if (token.type === "text" && !inside_autolink) {
      token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
    }
    if (token.type === "link_open" && token.info === "auto") {
      inside_autolink--;
    }
    if (token.type === "link_close" && token.info === "auto") {
      inside_autolink++;
    }
  }
}
function replace_rare(inlineTokens) {
  let inside_autolink = 0;
  for (let i = inlineTokens.length - 1; i >= 0; i--) {
    const token = inlineTokens[i];
    if (token.type === "text" && !inside_autolink) {
      if (RARE_RE.test(token.content)) {
        token.content = token.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–");
      }
    }
    if (token.type === "link_open" && token.info === "auto") {
      inside_autolink--;
    }
    if (token.type === "link_close" && token.info === "auto") {
      inside_autolink++;
    }
  }
}
function replace(state) {
  let blkIdx;
  if (!state.md.options.typographer) {
    return;
  }
  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state.tokens[blkIdx].type !== "inline") {
      continue;
    }
    if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
      replace_scoped(state.tokens[blkIdx].children);
    }
    if (RARE_RE.test(state.tokens[blkIdx].content)) {
      replace_rare(state.tokens[blkIdx].children);
    }
  }
}
const QUOTE_TEST_RE = /['"]/;
const QUOTE_RE = /['"]/g;
const APOSTROPHE = "’";
function replaceAt(str, index, ch) {
  return str.slice(0, index) + ch + str.slice(index + 1);
}
function process_inlines(tokens, state) {
  let j;
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const thisLevel = tokens[i].level;
    for (j = stack.length - 1; j >= 0; j--) {
      if (stack[j].level <= thisLevel) {
        break;
      }
    }
    stack.length = j + 1;
    if (token.type !== "text") {
      continue;
    }
    let text2 = token.content;
    let pos = 0;
    let max = text2.length;
    OUTER:
      while (pos < max) {
        QUOTE_RE.lastIndex = pos;
        const t = QUOTE_RE.exec(text2);
        if (!t) {
          break;
        }
        let canOpen = true;
        let canClose = true;
        pos = t.index + 1;
        const isSingle = t[0] === "'";
        let lastChar = 32;
        if (t.index - 1 >= 0) {
          lastChar = text2.charCodeAt(t.index - 1);
        } else {
          for (j = i - 1; j >= 0; j--) {
            if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
              break;
            if (!tokens[j].content)
              continue;
            lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
            break;
          }
        }
        let nextChar = 32;
        if (pos < max) {
          nextChar = text2.charCodeAt(pos);
        } else {
          for (j = i + 1; j < tokens.length; j++) {
            if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
              break;
            if (!tokens[j].content)
              continue;
            nextChar = tokens[j].content.charCodeAt(0);
            break;
          }
        }
        const isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
        const isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
        const isLastWhiteSpace = isWhiteSpace(lastChar);
        const isNextWhiteSpace = isWhiteSpace(nextChar);
        if (isNextWhiteSpace) {
          canOpen = false;
        } else if (isNextPunctChar) {
          if (!(isLastWhiteSpace || isLastPunctChar)) {
            canOpen = false;
          }
        }
        if (isLastWhiteSpace) {
          canClose = false;
        } else if (isLastPunctChar) {
          if (!(isNextWhiteSpace || isNextPunctChar)) {
            canClose = false;
          }
        }
        if (nextChar === 34 && t[0] === '"') {
          if (lastChar >= 48 && lastChar <= 57) {
            canClose = canOpen = false;
          }
        }
        if (canOpen && canClose) {
          canOpen = isLastPunctChar;
          canClose = isNextPunctChar;
        }
        if (!canOpen && !canClose) {
          if (isSingle) {
            token.content = replaceAt(token.content, t.index, APOSTROPHE);
          }
          continue;
        }
        if (canClose) {
          for (j = stack.length - 1; j >= 0; j--) {
            let item = stack[j];
            if (stack[j].level < thisLevel) {
              break;
            }
            if (item.single === isSingle && stack[j].level === thisLevel) {
              item = stack[j];
              let openQuote;
              let closeQuote;
              if (isSingle) {
                openQuote = state.md.options.quotes[2];
                closeQuote = state.md.options.quotes[3];
              } else {
                openQuote = state.md.options.quotes[0];
                closeQuote = state.md.options.quotes[1];
              }
              token.content = replaceAt(token.content, t.index, closeQuote);
              tokens[item.token].content = replaceAt(
                tokens[item.token].content,
                item.pos,
                openQuote
              );
              pos += closeQuote.length - 1;
              if (item.token === i) {
                pos += openQuote.length - 1;
              }
              text2 = token.content;
              max = text2.length;
              stack.length = j;
              continue OUTER;
            }
          }
        }
        if (canOpen) {
          stack.push({
            token: i,
            pos: t.index,
            single: isSingle,
            level: thisLevel
          });
        } else if (canClose && isSingle) {
          token.content = replaceAt(token.content, t.index, APOSTROPHE);
        }
      }
  }
}
function smartquotes(state) {
  if (!state.md.options.typographer) {
    return;
  }
  for (let blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
      continue;
    }
    process_inlines(state.tokens[blkIdx].children, state);
  }
}
function text_join(state) {
  let curr, last;
  const blockTokens = state.tokens;
  const l = blockTokens.length;
  for (let j = 0; j < l; j++) {
    if (blockTokens[j].type !== "inline")
      continue;
    const tokens = blockTokens[j].children;
    const max = tokens.length;
    for (curr = 0; curr < max; curr++) {
      if (tokens[curr].type === "text_special") {
        tokens[curr].type = "text";
      }
    }
    for (curr = last = 0; curr < max; curr++) {
      if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
        tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
      } else {
        if (curr !== last) {
          tokens[last] = tokens[curr];
        }
        last++;
      }
    }
    if (curr !== last) {
      tokens.length = last;
    }
  }
}
const _rules$2 = [
  ["normalize", normalize],
  ["block", block],
  ["inline", inline],
  ["linkify", linkify$1],
  ["replacements", replace],
  ["smartquotes", smartquotes],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", text_join]
];
function Core() {
  this.ruler = new Ruler();
  for (let i = 0; i < _rules$2.length; i++) {
    this.ruler.push(_rules$2[i][0], _rules$2[i][1]);
  }
}
Core.prototype.process = function(state) {
  const rules = this.ruler.getRules("");
  for (let i = 0, l = rules.length; i < l; i++) {
    rules[i](state);
  }
};
Core.prototype.State = StateCore;
function StateBlock(src, md, env, tokens) {
  this.src = src;
  this.md = md;
  this.env = env;
  this.tokens = tokens;
  this.bMarks = [];
  this.eMarks = [];
  this.tShift = [];
  this.sCount = [];
  this.bsCount = [];
  this.blkIndent = 0;
  this.line = 0;
  this.lineMax = 0;
  this.tight = false;
  this.ddIndent = -1;
  this.listIndent = -1;
  this.parentType = "root";
  this.level = 0;
  const s = this.src;
  for (let start = 0, pos = 0, indent = 0, offset = 0, len = s.length, indent_found = false; pos < len; pos++) {
    const ch = s.charCodeAt(pos);
    if (!indent_found) {
      if (isSpace(ch)) {
        indent++;
        if (ch === 9) {
          offset += 4 - offset % 4;
        } else {
          offset++;
        }
        continue;
      } else {
        indent_found = true;
      }
    }
    if (ch === 10 || pos === len - 1) {
      if (ch !== 10) {
        pos++;
      }
      this.bMarks.push(start);
      this.eMarks.push(pos);
      this.tShift.push(indent);
      this.sCount.push(offset);
      this.bsCount.push(0);
      indent_found = false;
      indent = 0;
      offset = 0;
      start = pos + 1;
    }
  }
  this.bMarks.push(s.length);
  this.eMarks.push(s.length);
  this.tShift.push(0);
  this.sCount.push(0);
  this.bsCount.push(0);
  this.lineMax = this.bMarks.length - 1;
}
StateBlock.prototype.push = function(type, tag, nesting) {
  const token = new Token(type, tag, nesting);
  token.block = true;
  if (nesting < 0)
    this.level--;
  token.level = this.level;
  if (nesting > 0)
    this.level++;
  this.tokens.push(token);
  return token;
};
StateBlock.prototype.isEmpty = function isEmpty(line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};
StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
  for (let max = this.lineMax; from < max; from++) {
    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
      break;
    }
  }
  return from;
};
StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
  for (let max = this.src.length; pos < max; pos++) {
    const ch = this.src.charCodeAt(pos);
    if (!isSpace(ch)) {
      break;
    }
  }
  return pos;
};
StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
  if (pos <= min) {
    return pos;
  }
  while (pos > min) {
    if (!isSpace(this.src.charCodeAt(--pos))) {
      return pos + 1;
    }
  }
  return pos;
};
StateBlock.prototype.skipChars = function skipChars(pos, code2) {
  for (let max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== code2) {
      break;
    }
  }
  return pos;
};
StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code2, min) {
  if (pos <= min) {
    return pos;
  }
  while (pos > min) {
    if (code2 !== this.src.charCodeAt(--pos)) {
      return pos + 1;
    }
  }
  return pos;
};
StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
  if (begin >= end) {
    return "";
  }
  const queue = new Array(end - begin);
  for (let i = 0, line = begin; line < end; line++, i++) {
    let lineIndent = 0;
    const lineStart = this.bMarks[line];
    let first = lineStart;
    let last;
    if (line + 1 < end || keepLastLF) {
      last = this.eMarks[line] + 1;
    } else {
      last = this.eMarks[line];
    }
    while (first < last && lineIndent < indent) {
      const ch = this.src.charCodeAt(first);
      if (isSpace(ch)) {
        if (ch === 9) {
          lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
        } else {
          lineIndent++;
        }
      } else if (first - lineStart < this.tShift[line]) {
        lineIndent++;
      } else {
        break;
      }
      first++;
    }
    if (lineIndent > indent) {
      queue[i] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first, last);
    } else {
      queue[i] = this.src.slice(first, last);
    }
  }
  return queue.join("");
};
StateBlock.prototype.Token = Token;
const MAX_AUTOCOMPLETED_CELLS = 65536;
function getLine(state, line) {
  const pos = state.bMarks[line] + state.tShift[line];
  const max = state.eMarks[line];
  return state.src.slice(pos, max);
}
function escapedSplit(str) {
  const result = [];
  const max = str.length;
  let pos = 0;
  let ch = str.charCodeAt(pos);
  let isEscaped = false;
  let lastPos = 0;
  let current = "";
  while (pos < max) {
    if (ch === 124) {
      if (!isEscaped) {
        result.push(current + str.substring(lastPos, pos));
        current = "";
        lastPos = pos + 1;
      } else {
        current += str.substring(lastPos, pos - 1);
        lastPos = pos;
      }
    }
    isEscaped = ch === 92;
    pos++;
    ch = str.charCodeAt(pos);
  }
  result.push(current + str.substring(lastPos));
  return result;
}
function table(state, startLine, endLine, silent) {
  if (startLine + 2 > endLine) {
    return false;
  }
  let nextLine = startLine + 1;
  if (state.sCount[nextLine] < state.blkIndent) {
    return false;
  }
  if (state.sCount[nextLine] - state.blkIndent >= 4) {
    return false;
  }
  let pos = state.bMarks[nextLine] + state.tShift[nextLine];
  if (pos >= state.eMarks[nextLine]) {
    return false;
  }
  const firstCh = state.src.charCodeAt(pos++);
  if (firstCh !== 124 && firstCh !== 45 && firstCh !== 58) {
    return false;
  }
  if (pos >= state.eMarks[nextLine]) {
    return false;
  }
  const secondCh = state.src.charCodeAt(pos++);
  if (secondCh !== 124 && secondCh !== 45 && secondCh !== 58 && !isSpace(secondCh)) {
    return false;
  }
  if (firstCh === 45 && isSpace(secondCh)) {
    return false;
  }
  while (pos < state.eMarks[nextLine]) {
    const ch = state.src.charCodeAt(pos);
    if (ch !== 124 && ch !== 45 && ch !== 58 && !isSpace(ch)) {
      return false;
    }
    pos++;
  }
  let lineText = getLine(state, startLine + 1);
  let columns = lineText.split("|");
  const aligns = [];
  for (let i = 0; i < columns.length; i++) {
    const t = columns[i].trim();
    if (!t) {
      if (i === 0 || i === columns.length - 1) {
        continue;
      } else {
        return false;
      }
    }
    if (!/^:?-+:?$/.test(t)) {
      return false;
    }
    if (t.charCodeAt(t.length - 1) === 58) {
      aligns.push(t.charCodeAt(0) === 58 ? "center" : "right");
    } else if (t.charCodeAt(0) === 58) {
      aligns.push("left");
    } else {
      aligns.push("");
    }
  }
  lineText = getLine(state, startLine).trim();
  if (lineText.indexOf("|") === -1) {
    return false;
  }
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  columns = escapedSplit(lineText);
  if (columns.length && columns[0] === "")
    columns.shift();
  if (columns.length && columns[columns.length - 1] === "")
    columns.pop();
  const columnCount = columns.length;
  if (columnCount === 0 || columnCount !== aligns.length) {
    return false;
  }
  if (silent) {
    return true;
  }
  const oldParentType = state.parentType;
  state.parentType = "table";
  const terminatorRules = state.md.block.ruler.getRules("blockquote");
  const token_to = state.push("table_open", "table", 1);
  const tableLines = [startLine, 0];
  token_to.map = tableLines;
  const token_tho = state.push("thead_open", "thead", 1);
  token_tho.map = [startLine, startLine + 1];
  const token_htro = state.push("tr_open", "tr", 1);
  token_htro.map = [startLine, startLine + 1];
  for (let i = 0; i < columns.length; i++) {
    const token_ho = state.push("th_open", "th", 1);
    if (aligns[i]) {
      token_ho.attrs = [["style", "text-align:" + aligns[i]]];
    }
    const token_il = state.push("inline", "", 0);
    token_il.content = columns[i].trim();
    token_il.children = [];
    state.push("th_close", "th", -1);
  }
  state.push("tr_close", "tr", -1);
  state.push("thead_close", "thead", -1);
  let tbodyLines;
  let autocompletedCells = 0;
  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state.sCount[nextLine] < state.blkIndent) {
      break;
    }
    let terminate = false;
    for (let i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
    lineText = getLine(state, nextLine).trim();
    if (!lineText) {
      break;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      break;
    }
    columns = escapedSplit(lineText);
    if (columns.length && columns[0] === "")
      columns.shift();
    if (columns.length && columns[columns.length - 1] === "")
      columns.pop();
    autocompletedCells += columnCount - columns.length;
    if (autocompletedCells > MAX_AUTOCOMPLETED_CELLS) {
      break;
    }
    if (nextLine === startLine + 2) {
      const token_tbo = state.push("tbody_open", "tbody", 1);
      token_tbo.map = tbodyLines = [startLine + 2, 0];
    }
    const token_tro = state.push("tr_open", "tr", 1);
    token_tro.map = [nextLine, nextLine + 1];
    for (let i = 0; i < columnCount; i++) {
      const token_tdo = state.push("td_open", "td", 1);
      if (aligns[i]) {
        token_tdo.attrs = [["style", "text-align:" + aligns[i]]];
      }
      const token_il = state.push("inline", "", 0);
      token_il.content = columns[i] ? columns[i].trim() : "";
      token_il.children = [];
      state.push("td_close", "td", -1);
    }
    state.push("tr_close", "tr", -1);
  }
  if (tbodyLines) {
    state.push("tbody_close", "tbody", -1);
    tbodyLines[1] = nextLine;
  }
  state.push("table_close", "table", -1);
  tableLines[1] = nextLine;
  state.parentType = oldParentType;
  state.line = nextLine;
  return true;
}
function code(state, startLine, endLine) {
  if (state.sCount[startLine] - state.blkIndent < 4) {
    return false;
  }
  let nextLine = startLine + 1;
  let last = nextLine;
  while (nextLine < endLine) {
    if (state.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      nextLine++;
      last = nextLine;
      continue;
    }
    break;
  }
  state.line = last;
  const token = state.push("code_block", "code", 0);
  token.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + "\n";
  token.map = [startLine, state.line];
  return true;
}
function fence(state, startLine, endLine, silent) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (pos + 3 > max) {
    return false;
  }
  const marker = state.src.charCodeAt(pos);
  if (marker !== 126 && marker !== 96) {
    return false;
  }
  let mem = pos;
  pos = state.skipChars(pos, marker);
  let len = pos - mem;
  if (len < 3) {
    return false;
  }
  const markup = state.src.slice(mem, pos);
  const params = state.src.slice(pos, max);
  if (marker === 96) {
    if (params.indexOf(String.fromCharCode(marker)) >= 0) {
      return false;
    }
  }
  if (silent) {
    return true;
  }
  let nextLine = startLine;
  let haveEndMarker = false;
  for (; ; ) {
    nextLine++;
    if (nextLine >= endLine) {
      break;
    }
    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];
    if (pos < max && state.sCount[nextLine] < state.blkIndent) {
      break;
    }
    if (state.src.charCodeAt(pos) !== marker) {
      continue;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      continue;
    }
    pos = state.skipChars(pos, marker);
    if (pos - mem < len) {
      continue;
    }
    pos = state.skipSpaces(pos);
    if (pos < max) {
      continue;
    }
    haveEndMarker = true;
    break;
  }
  len = state.sCount[startLine];
  state.line = nextLine + (haveEndMarker ? 1 : 0);
  const token = state.push("fence", "code", 0);
  token.info = params;
  token.content = state.getLines(startLine + 1, nextLine, len, true);
  token.markup = markup;
  token.map = [startLine, state.line];
  return true;
}
function blockquote(state, startLine, endLine, silent) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let max = state.eMarks[startLine];
  const oldLineMax = state.lineMax;
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (state.src.charCodeAt(pos) !== 62) {
    return false;
  }
  if (silent) {
    return true;
  }
  const oldBMarks = [];
  const oldBSCount = [];
  const oldSCount = [];
  const oldTShift = [];
  const terminatorRules = state.md.block.ruler.getRules("blockquote");
  const oldParentType = state.parentType;
  state.parentType = "blockquote";
  let lastLineEmpty = false;
  let nextLine;
  for (nextLine = startLine; nextLine < endLine; nextLine++) {
    const isOutdented = state.sCount[nextLine] < state.blkIndent;
    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];
    if (pos >= max) {
      break;
    }
    if (state.src.charCodeAt(pos++) === 62 && !isOutdented) {
      let initial = state.sCount[nextLine] + 1;
      let spaceAfterMarker;
      let adjustTab;
      if (state.src.charCodeAt(pos) === 32) {
        pos++;
        initial++;
        adjustTab = false;
        spaceAfterMarker = true;
      } else if (state.src.charCodeAt(pos) === 9) {
        spaceAfterMarker = true;
        if ((state.bsCount[nextLine] + initial) % 4 === 3) {
          pos++;
          initial++;
          adjustTab = false;
        } else {
          adjustTab = true;
        }
      } else {
        spaceAfterMarker = false;
      }
      let offset = initial;
      oldBMarks.push(state.bMarks[nextLine]);
      state.bMarks[nextLine] = pos;
      while (pos < max) {
        const ch = state.src.charCodeAt(pos);
        if (isSpace(ch)) {
          if (ch === 9) {
            offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
          } else {
            offset++;
          }
        } else {
          break;
        }
        pos++;
      }
      lastLineEmpty = pos >= max;
      oldBSCount.push(state.bsCount[nextLine]);
      state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
      oldSCount.push(state.sCount[nextLine]);
      state.sCount[nextLine] = offset - initial;
      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = pos - state.bMarks[nextLine];
      continue;
    }
    if (lastLineEmpty) {
      break;
    }
    let terminate = false;
    for (let i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      state.lineMax = nextLine;
      if (state.blkIndent !== 0) {
        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] -= state.blkIndent;
      }
      break;
    }
    oldBMarks.push(state.bMarks[nextLine]);
    oldBSCount.push(state.bsCount[nextLine]);
    oldTShift.push(state.tShift[nextLine]);
    oldSCount.push(state.sCount[nextLine]);
    state.sCount[nextLine] = -1;
  }
  const oldIndent = state.blkIndent;
  state.blkIndent = 0;
  const token_o = state.push("blockquote_open", "blockquote", 1);
  token_o.markup = ">";
  const lines = [startLine, 0];
  token_o.map = lines;
  state.md.block.tokenize(state, startLine, nextLine);
  const token_c = state.push("blockquote_close", "blockquote", -1);
  token_c.markup = ">";
  state.lineMax = oldLineMax;
  state.parentType = oldParentType;
  lines[1] = state.line;
  for (let i = 0; i < oldTShift.length; i++) {
    state.bMarks[i + startLine] = oldBMarks[i];
    state.tShift[i + startLine] = oldTShift[i];
    state.sCount[i + startLine] = oldSCount[i];
    state.bsCount[i + startLine] = oldBSCount[i];
  }
  state.blkIndent = oldIndent;
  return true;
}
function hr(state, startLine, endLine, silent) {
  const max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  const marker = state.src.charCodeAt(pos++);
  if (marker !== 42 && marker !== 45 && marker !== 95) {
    return false;
  }
  let cnt = 1;
  while (pos < max) {
    const ch = state.src.charCodeAt(pos++);
    if (ch !== marker && !isSpace(ch)) {
      return false;
    }
    if (ch === marker) {
      cnt++;
    }
  }
  if (cnt < 3) {
    return false;
  }
  if (silent) {
    return true;
  }
  state.line = startLine + 1;
  const token = state.push("hr", "hr", 0);
  token.map = [startLine, state.line];
  token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
  return true;
}
function skipBulletListMarker(state, startLine) {
  const max = state.eMarks[startLine];
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  const marker = state.src.charCodeAt(pos++);
  if (marker !== 42 && marker !== 45 && marker !== 43) {
    return -1;
  }
  if (pos < max) {
    const ch = state.src.charCodeAt(pos);
    if (!isSpace(ch)) {
      return -1;
    }
  }
  return pos;
}
function skipOrderedListMarker(state, startLine) {
  const start = state.bMarks[startLine] + state.tShift[startLine];
  const max = state.eMarks[startLine];
  let pos = start;
  if (pos + 1 >= max) {
    return -1;
  }
  let ch = state.src.charCodeAt(pos++);
  if (ch < 48 || ch > 57) {
    return -1;
  }
  for (; ; ) {
    if (pos >= max) {
      return -1;
    }
    ch = state.src.charCodeAt(pos++);
    if (ch >= 48 && ch <= 57) {
      if (pos - start >= 10) {
        return -1;
      }
      continue;
    }
    if (ch === 41 || ch === 46) {
      break;
    }
    return -1;
  }
  if (pos < max) {
    ch = state.src.charCodeAt(pos);
    if (!isSpace(ch)) {
      return -1;
    }
  }
  return pos;
}
function markTightParagraphs(state, idx) {
  const level = state.level + 2;
  for (let i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
    if (state.tokens[i].level === level && state.tokens[i].type === "paragraph_open") {
      state.tokens[i + 2].hidden = true;
      state.tokens[i].hidden = true;
      i += 2;
    }
  }
}
function list(state, startLine, endLine, silent) {
  let max, pos, start, token;
  let nextLine = startLine;
  let tight = true;
  if (state.sCount[nextLine] - state.blkIndent >= 4) {
    return false;
  }
  if (state.listIndent >= 0 && state.sCount[nextLine] - state.listIndent >= 4 && state.sCount[nextLine] < state.blkIndent) {
    return false;
  }
  let isTerminatingParagraph = false;
  if (silent && state.parentType === "paragraph") {
    if (state.sCount[nextLine] >= state.blkIndent) {
      isTerminatingParagraph = true;
    }
  }
  let isOrdered;
  let markerValue;
  let posAfterMarker;
  if ((posAfterMarker = skipOrderedListMarker(state, nextLine)) >= 0) {
    isOrdered = true;
    start = state.bMarks[nextLine] + state.tShift[nextLine];
    markerValue = Number(state.src.slice(start, posAfterMarker - 1));
    if (isTerminatingParagraph && markerValue !== 1)
      return false;
  } else if ((posAfterMarker = skipBulletListMarker(state, nextLine)) >= 0) {
    isOrdered = false;
  } else {
    return false;
  }
  if (isTerminatingParagraph) {
    if (state.skipSpaces(posAfterMarker) >= state.eMarks[nextLine])
      return false;
  }
  if (silent) {
    return true;
  }
  const markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
  const listTokIdx = state.tokens.length;
  if (isOrdered) {
    token = state.push("ordered_list_open", "ol", 1);
    if (markerValue !== 1) {
      token.attrs = [["start", markerValue]];
    }
  } else {
    token = state.push("bullet_list_open", "ul", 1);
  }
  const listLines = [nextLine, 0];
  token.map = listLines;
  token.markup = String.fromCharCode(markerCharCode);
  let prevEmptyEnd = false;
  const terminatorRules = state.md.block.ruler.getRules("list");
  const oldParentType = state.parentType;
  state.parentType = "list";
  while (nextLine < endLine) {
    pos = posAfterMarker;
    max = state.eMarks[nextLine];
    const initial = state.sCount[nextLine] + posAfterMarker - (state.bMarks[nextLine] + state.tShift[nextLine]);
    let offset = initial;
    while (pos < max) {
      const ch = state.src.charCodeAt(pos);
      if (ch === 9) {
        offset += 4 - (offset + state.bsCount[nextLine]) % 4;
      } else if (ch === 32) {
        offset++;
      } else {
        break;
      }
      pos++;
    }
    const contentStart = pos;
    let indentAfterMarker;
    if (contentStart >= max) {
      indentAfterMarker = 1;
    } else {
      indentAfterMarker = offset - initial;
    }
    if (indentAfterMarker > 4) {
      indentAfterMarker = 1;
    }
    const indent = initial + indentAfterMarker;
    token = state.push("list_item_open", "li", 1);
    token.markup = String.fromCharCode(markerCharCode);
    const itemLines = [nextLine, 0];
    token.map = itemLines;
    if (isOrdered) {
      token.info = state.src.slice(start, posAfterMarker - 1);
    }
    const oldTight = state.tight;
    const oldTShift = state.tShift[nextLine];
    const oldSCount = state.sCount[nextLine];
    const oldListIndent = state.listIndent;
    state.listIndent = state.blkIndent;
    state.blkIndent = indent;
    state.tight = true;
    state.tShift[nextLine] = contentStart - state.bMarks[nextLine];
    state.sCount[nextLine] = offset;
    if (contentStart >= max && state.isEmpty(nextLine + 1)) {
      state.line = Math.min(state.line + 2, endLine);
    } else {
      state.md.block.tokenize(state, nextLine, endLine, true);
    }
    if (!state.tight || prevEmptyEnd) {
      tight = false;
    }
    prevEmptyEnd = state.line - nextLine > 1 && state.isEmpty(state.line - 1);
    state.blkIndent = state.listIndent;
    state.listIndent = oldListIndent;
    state.tShift[nextLine] = oldTShift;
    state.sCount[nextLine] = oldSCount;
    state.tight = oldTight;
    token = state.push("list_item_close", "li", -1);
    token.markup = String.fromCharCode(markerCharCode);
    nextLine = state.line;
    itemLines[1] = nextLine;
    if (nextLine >= endLine) {
      break;
    }
    if (state.sCount[nextLine] < state.blkIndent) {
      break;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      break;
    }
    let terminate = false;
    for (let i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state, nextLine);
      if (posAfterMarker < 0) {
        break;
      }
      start = state.bMarks[nextLine] + state.tShift[nextLine];
    } else {
      posAfterMarker = skipBulletListMarker(state, nextLine);
      if (posAfterMarker < 0) {
        break;
      }
    }
    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
      break;
    }
  }
  if (isOrdered) {
    token = state.push("ordered_list_close", "ol", -1);
  } else {
    token = state.push("bullet_list_close", "ul", -1);
  }
  token.markup = String.fromCharCode(markerCharCode);
  listLines[1] = nextLine;
  state.line = nextLine;
  state.parentType = oldParentType;
  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }
  return true;
}
function reference(state, startLine, _endLine, silent) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let max = state.eMarks[startLine];
  let nextLine = startLine + 1;
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (state.src.charCodeAt(pos) !== 91) {
    return false;
  }
  function getNextLine(nextLine2) {
    const endLine = state.lineMax;
    if (nextLine2 >= endLine || state.isEmpty(nextLine2)) {
      return null;
    }
    let isContinuation = false;
    if (state.sCount[nextLine2] - state.blkIndent > 3) {
      isContinuation = true;
    }
    if (state.sCount[nextLine2] < 0) {
      isContinuation = true;
    }
    if (!isContinuation) {
      const terminatorRules = state.md.block.ruler.getRules("reference");
      const oldParentType = state.parentType;
      state.parentType = "reference";
      let terminate = false;
      for (let i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine2, endLine, true)) {
          terminate = true;
          break;
        }
      }
      state.parentType = oldParentType;
      if (terminate) {
        return null;
      }
    }
    const pos2 = state.bMarks[nextLine2] + state.tShift[nextLine2];
    const max2 = state.eMarks[nextLine2];
    return state.src.slice(pos2, max2 + 1);
  }
  let str = state.src.slice(pos, max + 1);
  max = str.length;
  let labelEnd = -1;
  for (pos = 1; pos < max; pos++) {
    const ch = str.charCodeAt(pos);
    if (ch === 91) {
      return false;
    } else if (ch === 93) {
      labelEnd = pos;
      break;
    } else if (ch === 10) {
      const lineContent = getNextLine(nextLine);
      if (lineContent !== null) {
        str += lineContent;
        max = str.length;
        nextLine++;
      }
    } else if (ch === 92) {
      pos++;
      if (pos < max && str.charCodeAt(pos) === 10) {
        const lineContent = getNextLine(nextLine);
        if (lineContent !== null) {
          str += lineContent;
          max = str.length;
          nextLine++;
        }
      }
    }
  }
  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
    return false;
  }
  for (pos = labelEnd + 2; pos < max; pos++) {
    const ch = str.charCodeAt(pos);
    if (ch === 10) {
      const lineContent = getNextLine(nextLine);
      if (lineContent !== null) {
        str += lineContent;
        max = str.length;
        nextLine++;
      }
    } else if (isSpace(ch))
      ;
    else {
      break;
    }
  }
  const destRes = state.md.helpers.parseLinkDestination(str, pos, max);
  if (!destRes.ok) {
    return false;
  }
  const href = state.md.normalizeLink(destRes.str);
  if (!state.md.validateLink(href)) {
    return false;
  }
  pos = destRes.pos;
  const destEndPos = pos;
  const destEndLineNo = nextLine;
  const start = pos;
  for (; pos < max; pos++) {
    const ch = str.charCodeAt(pos);
    if (ch === 10) {
      const lineContent = getNextLine(nextLine);
      if (lineContent !== null) {
        str += lineContent;
        max = str.length;
        nextLine++;
      }
    } else if (isSpace(ch))
      ;
    else {
      break;
    }
  }
  let titleRes = state.md.helpers.parseLinkTitle(str, pos, max);
  while (titleRes.can_continue) {
    const lineContent = getNextLine(nextLine);
    if (lineContent === null)
      break;
    str += lineContent;
    pos = max;
    max = str.length;
    nextLine++;
    titleRes = state.md.helpers.parseLinkTitle(str, pos, max, titleRes);
  }
  let title;
  if (pos < max && start !== pos && titleRes.ok) {
    title = titleRes.str;
    pos = titleRes.pos;
  } else {
    title = "";
    pos = destEndPos;
    nextLine = destEndLineNo;
  }
  while (pos < max) {
    const ch = str.charCodeAt(pos);
    if (!isSpace(ch)) {
      break;
    }
    pos++;
  }
  if (pos < max && str.charCodeAt(pos) !== 10) {
    if (title) {
      title = "";
      pos = destEndPos;
      nextLine = destEndLineNo;
      while (pos < max) {
        const ch = str.charCodeAt(pos);
        if (!isSpace(ch)) {
          break;
        }
        pos++;
      }
    }
  }
  if (pos < max && str.charCodeAt(pos) !== 10) {
    return false;
  }
  const label = normalizeReference(str.slice(1, labelEnd));
  if (!label) {
    return false;
  }
  if (silent) {
    return true;
  }
  if (typeof state.env.references === "undefined") {
    state.env.references = {};
  }
  if (typeof state.env.references[label] === "undefined") {
    state.env.references[label] = { title, href };
  }
  state.line = nextLine;
  return true;
}
const block_names = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
const attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
const unquoted = "[^\"'=<>`\\x00-\\x20]+";
const single_quoted = "'[^']*'";
const double_quoted = '"[^"]*"';
const attr_value = "(?:" + unquoted + "|" + single_quoted + "|" + double_quoted + ")";
const attribute = "(?:\\s+" + attr_name + "(?:\\s*=\\s*" + attr_value + ")?)";
const open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + attribute + "*\\s*\\/?>";
const close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
const comment = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->";
const processing = "<[?][\\s\\S]*?[?]>";
const declaration = "<![A-Za-z][^>]*>";
const cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
const HTML_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + "|" + comment + "|" + processing + "|" + declaration + "|" + cdata + ")");
const HTML_OPEN_CLOSE_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
const HTML_SEQUENCES = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true],
  [/^<!--/, /-->/, true],
  [/^<\?/, /\?>/, true],
  [/^<![A-Z]/, />/, true],
  [/^<!\[CDATA\[/, /\]\]>/, true],
  [new RegExp("^</?(" + block_names.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true],
  [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + "\\s*$"), /^$/, false]
];
function html_block(state, startLine, endLine, silent) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (!state.md.options.html) {
    return false;
  }
  if (state.src.charCodeAt(pos) !== 60) {
    return false;
  }
  let lineText = state.src.slice(pos, max);
  let i = 0;
  for (; i < HTML_SEQUENCES.length; i++) {
    if (HTML_SEQUENCES[i][0].test(lineText)) {
      break;
    }
  }
  if (i === HTML_SEQUENCES.length) {
    return false;
  }
  if (silent) {
    return HTML_SEQUENCES[i][2];
  }
  let nextLine = startLine + 1;
  if (!HTML_SEQUENCES[i][1].test(lineText)) {
    for (; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) {
        break;
      }
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      lineText = state.src.slice(pos, max);
      if (HTML_SEQUENCES[i][1].test(lineText)) {
        if (lineText.length !== 0) {
          nextLine++;
        }
        break;
      }
    }
  }
  state.line = nextLine;
  const token = state.push("html_block", "", 0);
  token.map = [startLine, nextLine];
  token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
  return true;
}
function heading(state, startLine, endLine, silent) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let max = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  let ch = state.src.charCodeAt(pos);
  if (ch !== 35 || pos >= max) {
    return false;
  }
  let level = 1;
  ch = state.src.charCodeAt(++pos);
  while (ch === 35 && pos < max && level <= 6) {
    level++;
    ch = state.src.charCodeAt(++pos);
  }
  if (level > 6 || pos < max && !isSpace(ch)) {
    return false;
  }
  if (silent) {
    return true;
  }
  max = state.skipSpacesBack(max, pos);
  const tmp = state.skipCharsBack(max, 35, pos);
  if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
    max = tmp;
  }
  state.line = startLine + 1;
  const token_o = state.push("heading_open", "h" + String(level), 1);
  token_o.markup = "########".slice(0, level);
  token_o.map = [startLine, state.line];
  const token_i = state.push("inline", "", 0);
  token_i.content = state.src.slice(pos, max).trim();
  token_i.map = [startLine, state.line];
  token_i.children = [];
  const token_c = state.push("heading_close", "h" + String(level), -1);
  token_c.markup = "########".slice(0, level);
  return true;
}
function lheading(state, startLine, endLine) {
  const terminatorRules = state.md.block.ruler.getRules("paragraph");
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  const oldParentType = state.parentType;
  state.parentType = "paragraph";
  let level = 0;
  let marker;
  let nextLine = startLine + 1;
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    }
    if (state.sCount[nextLine] >= state.blkIndent) {
      let pos = state.bMarks[nextLine] + state.tShift[nextLine];
      const max = state.eMarks[nextLine];
      if (pos < max) {
        marker = state.src.charCodeAt(pos);
        if (marker === 45 || marker === 61) {
          pos = state.skipChars(pos, marker);
          pos = state.skipSpaces(pos);
          if (pos >= max) {
            level = marker === 61 ? 1 : 2;
            break;
          }
        }
      }
    }
    if (state.sCount[nextLine] < 0) {
      continue;
    }
    let terminate = false;
    for (let i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
  }
  if (!level) {
    return false;
  }
  const content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  state.line = nextLine + 1;
  const token_o = state.push("heading_open", "h" + String(level), 1);
  token_o.markup = String.fromCharCode(marker);
  token_o.map = [startLine, state.line];
  const token_i = state.push("inline", "", 0);
  token_i.content = content;
  token_i.map = [startLine, state.line - 1];
  token_i.children = [];
  const token_c = state.push("heading_close", "h" + String(level), -1);
  token_c.markup = String.fromCharCode(marker);
  state.parentType = oldParentType;
  return true;
}
function paragraph(state, startLine, endLine) {
  const terminatorRules = state.md.block.ruler.getRules("paragraph");
  const oldParentType = state.parentType;
  let nextLine = startLine + 1;
  state.parentType = "paragraph";
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    }
    if (state.sCount[nextLine] < 0) {
      continue;
    }
    let terminate = false;
    for (let i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
  }
  const content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  state.line = nextLine;
  const token_o = state.push("paragraph_open", "p", 1);
  token_o.map = [startLine, state.line];
  const token_i = state.push("inline", "", 0);
  token_i.content = content;
  token_i.map = [startLine, state.line];
  token_i.children = [];
  state.push("paragraph_close", "p", -1);
  state.parentType = oldParentType;
  return true;
}
const _rules$1 = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", table, ["paragraph", "reference"]],
  ["code", code],
  ["fence", fence, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", blockquote, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", hr, ["paragraph", "reference", "blockquote", "list"]],
  ["list", list, ["paragraph", "reference", "blockquote"]],
  ["reference", reference],
  ["html_block", html_block, ["paragraph", "reference", "blockquote"]],
  ["heading", heading, ["paragraph", "reference", "blockquote"]],
  ["lheading", lheading],
  ["paragraph", paragraph]
];
function ParserBlock() {
  this.ruler = new Ruler();
  for (let i = 0; i < _rules$1.length; i++) {
    this.ruler.push(_rules$1[i][0], _rules$1[i][1], { alt: (_rules$1[i][2] || []).slice() });
  }
}
ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
  const rules = this.ruler.getRules("");
  const len = rules.length;
  const maxNesting = state.md.options.maxNesting;
  let line = startLine;
  let hasEmptyLines = false;
  while (line < endLine) {
    state.line = line = state.skipEmptyLines(line);
    if (line >= endLine) {
      break;
    }
    if (state.sCount[line] < state.blkIndent) {
      break;
    }
    if (state.level >= maxNesting) {
      state.line = endLine;
      break;
    }
    const prevLine = state.line;
    let ok = false;
    for (let i = 0; i < len; i++) {
      ok = rules[i](state, line, endLine, false);
      if (ok) {
        if (prevLine >= state.line) {
          throw new Error("block rule didn't increment state.line");
        }
        break;
      }
    }
    if (!ok)
      throw new Error("none of the block rules matched");
    state.tight = !hasEmptyLines;
    if (state.isEmpty(state.line - 1)) {
      hasEmptyLines = true;
    }
    line = state.line;
    if (line < endLine && state.isEmpty(line)) {
      hasEmptyLines = true;
      line++;
      state.line = line;
    }
  }
};
ParserBlock.prototype.parse = function(src, md, env, outTokens) {
  if (!src) {
    return;
  }
  const state = new this.State(src, md, env, outTokens);
  this.tokenize(state, state.line, state.lineMax);
};
ParserBlock.prototype.State = StateBlock;
function StateInline(src, md, env, outTokens) {
  this.src = src;
  this.env = env;
  this.md = md;
  this.tokens = outTokens;
  this.tokens_meta = Array(outTokens.length);
  this.pos = 0;
  this.posMax = this.src.length;
  this.level = 0;
  this.pending = "";
  this.pendingLevel = 0;
  this.cache = {};
  this.delimiters = [];
  this._prev_delimiters = [];
  this.backticks = {};
  this.backticksScanned = false;
  this.linkLevel = 0;
}
StateInline.prototype.pushPending = function() {
  const token = new Token("text", "", 0);
  token.content = this.pending;
  token.level = this.pendingLevel;
  this.tokens.push(token);
  this.pending = "";
  return token;
};
StateInline.prototype.push = function(type, tag, nesting) {
  if (this.pending) {
    this.pushPending();
  }
  const token = new Token(type, tag, nesting);
  let token_meta = null;
  if (nesting < 0) {
    this.level--;
    this.delimiters = this._prev_delimiters.pop();
  }
  token.level = this.level;
  if (nesting > 0) {
    this.level++;
    this._prev_delimiters.push(this.delimiters);
    this.delimiters = [];
    token_meta = { delimiters: this.delimiters };
  }
  this.pendingLevel = this.level;
  this.tokens.push(token);
  this.tokens_meta.push(token_meta);
  return token;
};
StateInline.prototype.scanDelims = function(start, canSplitWord) {
  const max = this.posMax;
  const marker = this.src.charCodeAt(start);
  const lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;
  let pos = start;
  while (pos < max && this.src.charCodeAt(pos) === marker) {
    pos++;
  }
  const count = pos - start;
  const nextChar = pos < max ? this.src.charCodeAt(pos) : 32;
  const isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
  const isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
  const isLastWhiteSpace = isWhiteSpace(lastChar);
  const isNextWhiteSpace = isWhiteSpace(nextChar);
  const left_flanking = !isNextWhiteSpace && (!isNextPunctChar || isLastWhiteSpace || isLastPunctChar);
  const right_flanking = !isLastWhiteSpace && (!isLastPunctChar || isNextWhiteSpace || isNextPunctChar);
  const can_open = left_flanking && (canSplitWord || !right_flanking || isLastPunctChar);
  const can_close = right_flanking && (canSplitWord || !left_flanking || isNextPunctChar);
  return { can_open, can_close, length: count };
};
StateInline.prototype.Token = Token;
function isTerminatorChar(ch) {
  switch (ch) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return true;
    default:
      return false;
  }
}
function text(state, silent) {
  let pos = state.pos;
  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
    pos++;
  }
  if (pos === state.pos) {
    return false;
  }
  if (!silent) {
    state.pending += state.src.slice(state.pos, pos);
  }
  state.pos = pos;
  return true;
}
const SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function linkify(state, silent) {
  if (!state.md.options.linkify)
    return false;
  if (state.linkLevel > 0)
    return false;
  const pos = state.pos;
  const max = state.posMax;
  if (pos + 3 > max)
    return false;
  if (state.src.charCodeAt(pos) !== 58)
    return false;
  if (state.src.charCodeAt(pos + 1) !== 47)
    return false;
  if (state.src.charCodeAt(pos + 2) !== 47)
    return false;
  const match2 = state.pending.match(SCHEME_RE);
  if (!match2)
    return false;
  const proto = match2[1];
  const link2 = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length));
  if (!link2)
    return false;
  let url = link2.url;
  if (url.length <= proto.length)
    return false;
  url = url.replace(/\*+$/, "");
  const fullUrl = state.md.normalizeLink(url);
  if (!state.md.validateLink(fullUrl))
    return false;
  if (!silent) {
    state.pending = state.pending.slice(0, -proto.length);
    const token_o = state.push("link_open", "a", 1);
    token_o.attrs = [["href", fullUrl]];
    token_o.markup = "linkify";
    token_o.info = "auto";
    const token_t = state.push("text", "", 0);
    token_t.content = state.md.normalizeLinkText(url);
    const token_c = state.push("link_close", "a", -1);
    token_c.markup = "linkify";
    token_c.info = "auto";
  }
  state.pos += url.length - proto.length;
  return true;
}
function newline(state, silent) {
  let pos = state.pos;
  if (state.src.charCodeAt(pos) !== 10) {
    return false;
  }
  const pmax = state.pending.length - 1;
  const max = state.posMax;
  if (!silent) {
    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
        let ws = pmax - 1;
        while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 32)
          ws--;
        state.pending = state.pending.slice(0, ws);
        state.push("hardbreak", "br", 0);
      } else {
        state.pending = state.pending.slice(0, -1);
        state.push("softbreak", "br", 0);
      }
    } else {
      state.push("softbreak", "br", 0);
    }
  }
  pos++;
  while (pos < max && isSpace(state.src.charCodeAt(pos))) {
    pos++;
  }
  state.pos = pos;
  return true;
}
const ESCAPED = [];
for (let i = 0; i < 256; i++) {
  ESCAPED.push(0);
}
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
  ESCAPED[ch.charCodeAt(0)] = 1;
});
function escape(state, silent) {
  let pos = state.pos;
  const max = state.posMax;
  if (state.src.charCodeAt(pos) !== 92)
    return false;
  pos++;
  if (pos >= max)
    return false;
  let ch1 = state.src.charCodeAt(pos);
  if (ch1 === 10) {
    if (!silent) {
      state.push("hardbreak", "br", 0);
    }
    pos++;
    while (pos < max) {
      ch1 = state.src.charCodeAt(pos);
      if (!isSpace(ch1))
        break;
      pos++;
    }
    state.pos = pos;
    return true;
  }
  let escapedStr = state.src[pos];
  if (ch1 >= 55296 && ch1 <= 56319 && pos + 1 < max) {
    const ch2 = state.src.charCodeAt(pos + 1);
    if (ch2 >= 56320 && ch2 <= 57343) {
      escapedStr += state.src[pos + 1];
      pos++;
    }
  }
  const origStr = "\\" + escapedStr;
  if (!silent) {
    const token = state.push("text_special", "", 0);
    if (ch1 < 256 && ESCAPED[ch1] !== 0) {
      token.content = escapedStr;
    } else {
      token.content = origStr;
    }
    token.markup = origStr;
    token.info = "escape";
  }
  state.pos = pos + 1;
  return true;
}
function backtick(state, silent) {
  let pos = state.pos;
  const ch = state.src.charCodeAt(pos);
  if (ch !== 96) {
    return false;
  }
  const start = pos;
  pos++;
  const max = state.posMax;
  while (pos < max && state.src.charCodeAt(pos) === 96) {
    pos++;
  }
  const marker = state.src.slice(start, pos);
  const openerLength = marker.length;
  if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
    if (!silent)
      state.pending += marker;
    state.pos += openerLength;
    return true;
  }
  let matchEnd = pos;
  let matchStart;
  while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
    matchEnd = matchStart + 1;
    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 96) {
      matchEnd++;
    }
    const closerLength = matchEnd - matchStart;
    if (closerLength === openerLength) {
      if (!silent) {
        const token = state.push("code_inline", "code", 0);
        token.markup = marker;
        token.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      state.pos = matchEnd;
      return true;
    }
    state.backticks[closerLength] = matchStart;
  }
  state.backticksScanned = true;
  if (!silent)
    state.pending += marker;
  state.pos += openerLength;
  return true;
}
function strikethrough_tokenize(state, silent) {
  const start = state.pos;
  const marker = state.src.charCodeAt(start);
  if (silent) {
    return false;
  }
  if (marker !== 126) {
    return false;
  }
  const scanned = state.scanDelims(state.pos, true);
  let len = scanned.length;
  const ch = String.fromCharCode(marker);
  if (len < 2) {
    return false;
  }
  let token;
  if (len % 2) {
    token = state.push("text", "", 0);
    token.content = ch;
    len--;
  }
  for (let i = 0; i < len; i += 2) {
    token = state.push("text", "", 0);
    token.content = ch + ch;
    state.delimiters.push({
      marker,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: state.tokens.length - 1,
      end: -1,
      open: scanned.can_open,
      close: scanned.can_close
    });
  }
  state.pos += scanned.length;
  return true;
}
function postProcess$1(state, delimiters) {
  let token;
  const loneMarkers = [];
  const max = delimiters.length;
  for (let i = 0; i < max; i++) {
    const startDelim = delimiters[i];
    if (startDelim.marker !== 126) {
      continue;
    }
    if (startDelim.end === -1) {
      continue;
    }
    const endDelim = delimiters[startDelim.end];
    token = state.tokens[startDelim.token];
    token.type = "s_open";
    token.tag = "s";
    token.nesting = 1;
    token.markup = "~~";
    token.content = "";
    token = state.tokens[endDelim.token];
    token.type = "s_close";
    token.tag = "s";
    token.nesting = -1;
    token.markup = "~~";
    token.content = "";
    if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") {
      loneMarkers.push(endDelim.token - 1);
    }
  }
  while (loneMarkers.length) {
    const i = loneMarkers.pop();
    let j = i + 1;
    while (j < state.tokens.length && state.tokens[j].type === "s_close") {
      j++;
    }
    j--;
    if (i !== j) {
      token = state.tokens[j];
      state.tokens[j] = state.tokens[i];
      state.tokens[i] = token;
    }
  }
}
function strikethrough_postProcess(state) {
  const tokens_meta = state.tokens_meta;
  const max = state.tokens_meta.length;
  postProcess$1(state, state.delimiters);
  for (let curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess$1(state, tokens_meta[curr].delimiters);
    }
  }
}
const r_strikethrough = {
  tokenize: strikethrough_tokenize,
  postProcess: strikethrough_postProcess
};
function emphasis_tokenize(state, silent) {
  const start = state.pos;
  const marker = state.src.charCodeAt(start);
  if (silent) {
    return false;
  }
  if (marker !== 95 && marker !== 42) {
    return false;
  }
  const scanned = state.scanDelims(state.pos, marker === 42);
  for (let i = 0; i < scanned.length; i++) {
    const token = state.push("text", "", 0);
    token.content = String.fromCharCode(marker);
    state.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker,
      // Total length of these series of delimiters.
      //
      length: scanned.length,
      // A position of the token this delimiter corresponds to.
      //
      token: state.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: scanned.can_open,
      close: scanned.can_close
    });
  }
  state.pos += scanned.length;
  return true;
}
function postProcess(state, delimiters) {
  const max = delimiters.length;
  for (let i = max - 1; i >= 0; i--) {
    const startDelim = delimiters[i];
    if (startDelim.marker !== 95 && startDelim.marker !== 42) {
      continue;
    }
    if (startDelim.end === -1) {
      continue;
    }
    const endDelim = delimiters[startDelim.end];
    const isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && // check that first two markers match and adjacent
    delimiters[i - 1].marker === startDelim.marker && delimiters[i - 1].token === startDelim.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    delimiters[startDelim.end + 1].token === endDelim.token + 1;
    const ch = String.fromCharCode(startDelim.marker);
    const token_o = state.tokens[startDelim.token];
    token_o.type = isStrong ? "strong_open" : "em_open";
    token_o.tag = isStrong ? "strong" : "em";
    token_o.nesting = 1;
    token_o.markup = isStrong ? ch + ch : ch;
    token_o.content = "";
    const token_c = state.tokens[endDelim.token];
    token_c.type = isStrong ? "strong_close" : "em_close";
    token_c.tag = isStrong ? "strong" : "em";
    token_c.nesting = -1;
    token_c.markup = isStrong ? ch + ch : ch;
    token_c.content = "";
    if (isStrong) {
      state.tokens[delimiters[i - 1].token].content = "";
      state.tokens[delimiters[startDelim.end + 1].token].content = "";
      i--;
    }
  }
}
function emphasis_post_process(state) {
  const tokens_meta = state.tokens_meta;
  const max = state.tokens_meta.length;
  postProcess(state, state.delimiters);
  for (let curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess(state, tokens_meta[curr].delimiters);
    }
  }
}
const r_emphasis = {
  tokenize: emphasis_tokenize,
  postProcess: emphasis_post_process
};
function link(state, silent) {
  let code2, label, res, ref2;
  let href = "";
  let title = "";
  let start = state.pos;
  let parseReference = true;
  if (state.src.charCodeAt(state.pos) !== 91) {
    return false;
  }
  const oldPos = state.pos;
  const max = state.posMax;
  const labelStart = state.pos + 1;
  const labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
  if (labelEnd < 0) {
    return false;
  }
  let pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 40) {
    parseReference = false;
    pos++;
    for (; pos < max; pos++) {
      code2 = state.src.charCodeAt(pos);
      if (!isSpace(code2) && code2 !== 10) {
        break;
      }
    }
    if (pos >= max) {
      return false;
    }
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = "";
      }
      start = pos;
      for (; pos < max; pos++) {
        code2 = state.src.charCodeAt(pos);
        if (!isSpace(code2) && code2 !== 10) {
          break;
        }
      }
      res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
      if (pos < max && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;
        for (; pos < max; pos++) {
          code2 = state.src.charCodeAt(pos);
          if (!isSpace(code2) && code2 !== 10) {
            break;
          }
        }
      }
    }
    if (pos >= max || state.src.charCodeAt(pos) !== 41) {
      parseReference = true;
    }
    pos++;
  }
  if (parseReference) {
    if (typeof state.env.references === "undefined") {
      return false;
    }
    if (pos < max && state.src.charCodeAt(pos) === 91) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }
    if (!label) {
      label = state.src.slice(labelStart, labelEnd);
    }
    ref2 = state.env.references[normalizeReference(label)];
    if (!ref2) {
      state.pos = oldPos;
      return false;
    }
    href = ref2.href;
    title = ref2.title;
  }
  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;
    const token_o = state.push("link_open", "a", 1);
    const attrs = [["href", href]];
    token_o.attrs = attrs;
    if (title) {
      attrs.push(["title", title]);
    }
    state.linkLevel++;
    state.md.inline.tokenize(state);
    state.linkLevel--;
    state.push("link_close", "a", -1);
  }
  state.pos = pos;
  state.posMax = max;
  return true;
}
function image(state, silent) {
  let code2, content, label, pos, ref2, res, title, start;
  let href = "";
  const oldPos = state.pos;
  const max = state.posMax;
  if (state.src.charCodeAt(state.pos) !== 33) {
    return false;
  }
  if (state.src.charCodeAt(state.pos + 1) !== 91) {
    return false;
  }
  const labelStart = state.pos + 2;
  const labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
  if (labelEnd < 0) {
    return false;
  }
  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 40) {
    pos++;
    for (; pos < max; pos++) {
      code2 = state.src.charCodeAt(pos);
      if (!isSpace(code2) && code2 !== 10) {
        break;
      }
    }
    if (pos >= max) {
      return false;
    }
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = "";
      }
    }
    start = pos;
    for (; pos < max; pos++) {
      code2 = state.src.charCodeAt(pos);
      if (!isSpace(code2) && code2 !== 10) {
        break;
      }
    }
    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;
      for (; pos < max; pos++) {
        code2 = state.src.charCodeAt(pos);
        if (!isSpace(code2) && code2 !== 10) {
          break;
        }
      }
    } else {
      title = "";
    }
    if (pos >= max || state.src.charCodeAt(pos) !== 41) {
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    if (typeof state.env.references === "undefined") {
      return false;
    }
    if (pos < max && state.src.charCodeAt(pos) === 91) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }
    if (!label) {
      label = state.src.slice(labelStart, labelEnd);
    }
    ref2 = state.env.references[normalizeReference(label)];
    if (!ref2) {
      state.pos = oldPos;
      return false;
    }
    href = ref2.href;
    title = ref2.title;
  }
  if (!silent) {
    content = state.src.slice(labelStart, labelEnd);
    const tokens = [];
    state.md.inline.parse(
      content,
      state.md,
      state.env,
      tokens
    );
    const token = state.push("image", "img", 0);
    const attrs = [["src", href], ["alt", ""]];
    token.attrs = attrs;
    token.children = tokens;
    token.content = content;
    if (title) {
      attrs.push(["title", title]);
    }
  }
  state.pos = pos;
  state.posMax = max;
  return true;
}
const EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
const AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function autolink(state, silent) {
  let pos = state.pos;
  if (state.src.charCodeAt(pos) !== 60) {
    return false;
  }
  const start = state.pos;
  const max = state.posMax;
  for (; ; ) {
    if (++pos >= max)
      return false;
    const ch = state.src.charCodeAt(pos);
    if (ch === 60)
      return false;
    if (ch === 62)
      break;
  }
  const url = state.src.slice(start + 1, pos);
  if (AUTOLINK_RE.test(url)) {
    const fullUrl = state.md.normalizeLink(url);
    if (!state.md.validateLink(fullUrl)) {
      return false;
    }
    if (!silent) {
      const token_o = state.push("link_open", "a", 1);
      token_o.attrs = [["href", fullUrl]];
      token_o.markup = "autolink";
      token_o.info = "auto";
      const token_t = state.push("text", "", 0);
      token_t.content = state.md.normalizeLinkText(url);
      const token_c = state.push("link_close", "a", -1);
      token_c.markup = "autolink";
      token_c.info = "auto";
    }
    state.pos += url.length + 2;
    return true;
  }
  if (EMAIL_RE.test(url)) {
    const fullUrl = state.md.normalizeLink("mailto:" + url);
    if (!state.md.validateLink(fullUrl)) {
      return false;
    }
    if (!silent) {
      const token_o = state.push("link_open", "a", 1);
      token_o.attrs = [["href", fullUrl]];
      token_o.markup = "autolink";
      token_o.info = "auto";
      const token_t = state.push("text", "", 0);
      token_t.content = state.md.normalizeLinkText(url);
      const token_c = state.push("link_close", "a", -1);
      token_c.markup = "autolink";
      token_c.info = "auto";
    }
    state.pos += url.length + 2;
    return true;
  }
  return false;
}
function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}
function isLetter(ch) {
  const lc = ch | 32;
  return lc >= 97 && lc <= 122;
}
function html_inline(state, silent) {
  if (!state.md.options.html) {
    return false;
  }
  const max = state.posMax;
  const pos = state.pos;
  if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max) {
    return false;
  }
  const ch = state.src.charCodeAt(pos + 1);
  if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) {
    return false;
  }
  const match2 = state.src.slice(pos).match(HTML_TAG_RE);
  if (!match2) {
    return false;
  }
  if (!silent) {
    const token = state.push("html_inline", "", 0);
    token.content = match2[0];
    if (isLinkOpen(token.content))
      state.linkLevel++;
    if (isLinkClose(token.content))
      state.linkLevel--;
  }
  state.pos += match2[0].length;
  return true;
}
const DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
const NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
function entity(state, silent) {
  const pos = state.pos;
  const max = state.posMax;
  if (state.src.charCodeAt(pos) !== 38)
    return false;
  if (pos + 1 >= max)
    return false;
  const ch = state.src.charCodeAt(pos + 1);
  if (ch === 35) {
    const match2 = state.src.slice(pos).match(DIGITAL_RE);
    if (match2) {
      if (!silent) {
        const code2 = match2[1][0].toLowerCase() === "x" ? parseInt(match2[1].slice(1), 16) : parseInt(match2[1], 10);
        const token = state.push("text_special", "", 0);
        token.content = isValidEntityCode(code2) ? fromCodePoint(code2) : fromCodePoint(65533);
        token.markup = match2[0];
        token.info = "entity";
      }
      state.pos += match2[0].length;
      return true;
    }
  } else {
    const match2 = state.src.slice(pos).match(NAMED_RE);
    if (match2) {
      const decoded = decodeHTML(match2[0]);
      if (decoded !== match2[0]) {
        if (!silent) {
          const token = state.push("text_special", "", 0);
          token.content = decoded;
          token.markup = match2[0];
          token.info = "entity";
        }
        state.pos += match2[0].length;
        return true;
      }
    }
  }
  return false;
}
function processDelimiters(delimiters) {
  const openersBottom = {};
  const max = delimiters.length;
  if (!max)
    return;
  let headerIdx = 0;
  let lastTokenIdx = -2;
  const jumps = [];
  for (let closerIdx = 0; closerIdx < max; closerIdx++) {
    const closer = delimiters[closerIdx];
    jumps.push(0);
    if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
      headerIdx = closerIdx;
    }
    lastTokenIdx = closer.token;
    closer.length = closer.length || 0;
    if (!closer.close)
      continue;
    if (!openersBottom.hasOwnProperty(closer.marker)) {
      openersBottom[closer.marker] = [-1, -1, -1, -1, -1, -1];
    }
    const minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
    let openerIdx = headerIdx - jumps[headerIdx] - 1;
    let newMinOpenerIdx = openerIdx;
    for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
      const opener = delimiters[openerIdx];
      if (opener.marker !== closer.marker)
        continue;
      if (opener.open && opener.end < 0) {
        let isOddMatch = false;
        if (opener.close || closer.open) {
          if ((opener.length + closer.length) % 3 === 0) {
            if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
              isOddMatch = true;
            }
          }
        }
        if (!isOddMatch) {
          const lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
          jumps[closerIdx] = closerIdx - openerIdx + lastJump;
          jumps[openerIdx] = lastJump;
          closer.open = false;
          opener.end = closerIdx;
          opener.close = false;
          newMinOpenerIdx = -1;
          lastTokenIdx = -2;
          break;
        }
      }
    }
    if (newMinOpenerIdx !== -1) {
      openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
    }
  }
}
function link_pairs(state) {
  const tokens_meta = state.tokens_meta;
  const max = state.tokens_meta.length;
  processDelimiters(state.delimiters);
  for (let curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      processDelimiters(tokens_meta[curr].delimiters);
    }
  }
}
function fragments_join(state) {
  let curr, last;
  let level = 0;
  const tokens = state.tokens;
  const max = state.tokens.length;
  for (curr = last = 0; curr < max; curr++) {
    if (tokens[curr].nesting < 0)
      level--;
    tokens[curr].level = level;
    if (tokens[curr].nesting > 0)
      level++;
    if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
      tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
    } else {
      if (curr !== last) {
        tokens[last] = tokens[curr];
      }
      last++;
    }
  }
  if (curr !== last) {
    tokens.length = last;
  }
}
const _rules = [
  ["text", text],
  ["linkify", linkify],
  ["newline", newline],
  ["escape", escape],
  ["backticks", backtick],
  ["strikethrough", r_strikethrough.tokenize],
  ["emphasis", r_emphasis.tokenize],
  ["link", link],
  ["image", image],
  ["autolink", autolink],
  ["html_inline", html_inline],
  ["entity", entity]
];
const _rules2 = [
  ["balance_pairs", link_pairs],
  ["strikethrough", r_strikethrough.postProcess],
  ["emphasis", r_emphasis.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", fragments_join]
];
function ParserInline() {
  this.ruler = new Ruler();
  for (let i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
  this.ruler2 = new Ruler();
  for (let i = 0; i < _rules2.length; i++) {
    this.ruler2.push(_rules2[i][0], _rules2[i][1]);
  }
}
ParserInline.prototype.skipToken = function(state) {
  const pos = state.pos;
  const rules = this.ruler.getRules("");
  const len = rules.length;
  const maxNesting = state.md.options.maxNesting;
  const cache = state.cache;
  if (typeof cache[pos] !== "undefined") {
    state.pos = cache[pos];
    return;
  }
  let ok = false;
  if (state.level < maxNesting) {
    for (let i = 0; i < len; i++) {
      state.level++;
      ok = rules[i](state, true);
      state.level--;
      if (ok) {
        if (pos >= state.pos) {
          throw new Error("inline rule didn't increment state.pos");
        }
        break;
      }
    }
  } else {
    state.pos = state.posMax;
  }
  if (!ok) {
    state.pos++;
  }
  cache[pos] = state.pos;
};
ParserInline.prototype.tokenize = function(state) {
  const rules = this.ruler.getRules("");
  const len = rules.length;
  const end = state.posMax;
  const maxNesting = state.md.options.maxNesting;
  while (state.pos < end) {
    const prevPos = state.pos;
    let ok = false;
    if (state.level < maxNesting) {
      for (let i = 0; i < len; i++) {
        ok = rules[i](state, false);
        if (ok) {
          if (prevPos >= state.pos) {
            throw new Error("inline rule didn't increment state.pos");
          }
          break;
        }
      }
    }
    if (ok) {
      if (state.pos >= end) {
        break;
      }
      continue;
    }
    state.pending += state.src[state.pos++];
  }
  if (state.pending) {
    state.pushPending();
  }
};
ParserInline.prototype.parse = function(str, md, env, outTokens) {
  const state = new this.State(str, md, env, outTokens);
  this.tokenize(state);
  const rules = this.ruler2.getRules("");
  const len = rules.length;
  for (let i = 0; i < len; i++) {
    rules[i](state);
  }
};
ParserInline.prototype.State = StateInline;
function reFactory(opts) {
  const re = {};
  opts = opts || {};
  re.src_Any = Any.source;
  re.src_Cc = Cc.source;
  re.src_Z = Z.source;
  re.src_P = P.source;
  re.src_ZPCc = [re.src_Z, re.src_P, re.src_Cc].join("|");
  re.src_ZCc = [re.src_Z, re.src_Cc].join("|");
  const text_separators = "[><｜]";
  re.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re.src_ZPCc + ")" + re.src_Any + ")";
  re.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
  re.src_auth = "(?:(?:(?!" + re.src_ZCc + "|[@/\\[\\]()]).)+@)?";
  re.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
  re.src_host_terminator = "(?=$|" + text_separators + "|" + re.src_ZPCc + ")(?!" + (opts["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + re.src_ZPCc + "))";
  re.src_path = "(?:[/?#](?:(?!" + re.src_ZCc + "|" + text_separators + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + re.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re.src_ZCc + "|[']).)+\\'|\\'(?=" + re.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + re.src_ZCc + "|[.]|$)|" + (opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + re.src_ZCc + "|$)|;(?!" + re.src_ZCc + "|$)|\\!+(?!" + re.src_ZCc + "|[!]|$)|\\?(?!" + re.src_ZCc + "|[?]|$))+|\\/)?";
  re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
  re.src_xn = "xn--[a-z0-9\\-]{1,59}";
  re.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + re.src_xn + "|" + re.src_pseudo_letter + "{1,63})";
  re.src_domain = "(?:" + re.src_xn + "|(?:" + re.src_pseudo_letter + ")|(?:" + re.src_pseudo_letter + "(?:-|" + re.src_pseudo_letter + "){0,61}" + re.src_pseudo_letter + "))";
  re.src_host = "(?:(?:(?:(?:" + re.src_domain + ")\\.)*" + re.src_domain + "))";
  re.tpl_host_fuzzy = "(?:" + re.src_ip4 + "|(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%)))";
  re.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))";
  re.src_host_strict = re.src_host + re.src_host_terminator;
  re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
  re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
  re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
  re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;
  re.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re.src_ZPCc + "|>|$))";
  re.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re.src_ZCc + ")(" + re.src_email_name + "@" + re.tpl_host_fuzzy_strict + ")";
  re.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re.src_ZPCc + "))((?![$+<=>^`|｜])" + re.tpl_host_port_fuzzy_strict + re.src_path + ")";
  re.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re.src_ZPCc + "))((?![$+<=>^`|｜])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ")";
  return re;
}
function assign(obj) {
  const sources = Array.prototype.slice.call(arguments, 1);
  sources.forEach(function(source) {
    if (!source) {
      return;
    }
    Object.keys(source).forEach(function(key) {
      obj[key] = source[key];
    });
  });
  return obj;
}
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function isString(obj) {
  return _class(obj) === "[object String]";
}
function isObject(obj) {
  return _class(obj) === "[object Object]";
}
function isRegExp(obj) {
  return _class(obj) === "[object RegExp]";
}
function isFunction(obj) {
  return _class(obj) === "[object Function]";
}
function escapeRE(str) {
  return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};
function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function(acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}
const defaultSchemas = {
  "http:": {
    validate: function(text2, pos, self) {
      const tail = text2.slice(pos);
      if (!self.re.http) {
        self.re.http = new RegExp(
          "^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path,
          "i"
        );
      }
      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }
      return 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(text2, pos, self) {
      const tail = text2.slice(pos);
      if (!self.re.no_http) {
        self.re.no_http = new RegExp(
          "^" + self.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path,
          "i"
        );
      }
      if (self.re.no_http.test(tail)) {
        if (pos >= 3 && text2[pos - 3] === ":") {
          return 0;
        }
        if (pos >= 3 && text2[pos - 3] === "/") {
          return 0;
        }
        return tail.match(self.re.no_http)[0].length;
      }
      return 0;
    }
  },
  "mailto:": {
    validate: function(text2, pos, self) {
      const tail = text2.slice(pos);
      if (!self.re.mailto) {
        self.re.mailto = new RegExp(
          "^" + self.re.src_email_name + "@" + self.re.src_host_strict,
          "i"
        );
      }
      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }
      return 0;
    }
  }
};
const tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
const tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__ = "";
}
function createValidator(re) {
  return function(text2, pos) {
    const tail = text2.slice(pos);
    if (re.test(tail)) {
      return tail.match(re)[0].length;
    }
    return 0;
  };
}
function createNormalizer() {
  return function(match2, self) {
    self.normalize(match2);
  };
}
function compile(self) {
  const re = self.re = reFactory(self.__opts__);
  const tlds2 = self.__tlds__.slice();
  self.onCompile();
  if (!self.__tlds_replaced__) {
    tlds2.push(tlds_2ch_src_re);
  }
  tlds2.push(re.src_xn);
  re.src_tlds = tlds2.join("|");
  function untpl(tpl) {
    return tpl.replace("%TLDS%", re.src_tlds);
  }
  re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), "i");
  re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), "i");
  re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), "i");
  re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), "i");
  const aliases = [];
  self.__compiled__ = {};
  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }
  Object.keys(self.__schemas__).forEach(function(name) {
    const val = self.__schemas__[name];
    if (val === null) {
      return;
    }
    const compiled = { validate: null, link: null };
    self.__compiled__[name] = compiled;
    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }
      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }
      return;
    }
    if (isString(val)) {
      aliases.push(name);
      return;
    }
    schemaError(name, val);
  });
  aliases.forEach(function(alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      return;
    }
    self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
  });
  self.__compiled__[""] = { validate: null, normalize: createNormalizer() };
  const slist = Object.keys(self.__compiled__).filter(function(name) {
    return name.length > 0 && self.__compiled__[name];
  }).map(escapeRE).join("|");
  self.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + re.src_ZPCc + "))(" + slist + ")", "i");
  self.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + re.src_ZPCc + "))(" + slist + ")", "ig");
  self.re.schema_at_start = RegExp("^" + self.re.schema_search.source, "i");
  self.re.pretest = RegExp(
    "(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@",
    "i"
  );
  resetScanCache(self);
}
function Match(self, shift) {
  const start = self.__index__;
  const end = self.__last_index__;
  const text2 = self.__text_cache__.slice(start, end);
  this.schema = self.__schema__.toLowerCase();
  this.index = start + shift;
  this.lastIndex = end + shift;
  this.raw = text2;
  this.text = text2;
  this.url = text2;
}
function createMatch(self, shift) {
  const match2 = new Match(self, shift);
  self.__compiled__[match2.schema].normalize(match2, self);
  return match2;
}
function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) {
    return new LinkifyIt(schemas, options);
  }
  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }
  this.__opts__ = assign({}, defaultOptions, options);
  this.__index__ = -1;
  this.__last_index__ = -1;
  this.__schema__ = "";
  this.__text_cache__ = "";
  this.__schemas__ = assign({}, defaultSchemas, schemas);
  this.__compiled__ = {};
  this.__tlds__ = tlds_default;
  this.__tlds_replaced__ = false;
  this.re = {};
  compile(this);
}
LinkifyIt.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};
LinkifyIt.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};
LinkifyIt.prototype.test = function test(text2) {
  this.__text_cache__ = text2;
  this.__index__ = -1;
  if (!text2.length) {
    return false;
  }
  let m, ml, me, len, shift, next, re, tld_pos, at_pos;
  if (this.re.schema_test.test(text2)) {
    re = this.re.schema_search;
    re.lastIndex = 0;
    while ((m = re.exec(text2)) !== null) {
      len = this.testSchemaAt(text2, m[2], re.lastIndex);
      if (len) {
        this.__schema__ = m[2];
        this.__index__ = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }
  if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
    tld_pos = text2.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text2.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
          shift = ml.index + ml[1].length;
          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__ = "";
            this.__index__ = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }
  if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
    at_pos = text2.indexOf("@");
    if (at_pos >= 0) {
      if ((me = text2.match(this.re.email_fuzzy)) !== null) {
        shift = me.index + me[1].length;
        next = me.index + me[0].length;
        if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
          this.__schema__ = "mailto:";
          this.__index__ = shift;
          this.__last_index__ = next;
        }
      }
    }
  }
  return this.__index__ >= 0;
};
LinkifyIt.prototype.pretest = function pretest(text2) {
  return this.re.pretest.test(text2);
};
LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text2, schema, pos) {
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema.toLowerCase()].validate(text2, pos, this);
};
LinkifyIt.prototype.match = function match(text2) {
  const result = [];
  let shift = 0;
  if (this.__index__ >= 0 && this.__text_cache__ === text2) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  }
  let tail = shift ? text2.slice(shift) : text2;
  while (this.test(tail)) {
    result.push(createMatch(this, shift));
    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }
  if (result.length) {
    return result;
  }
  return null;
};
LinkifyIt.prototype.matchAtStart = function matchAtStart(text2) {
  this.__text_cache__ = text2;
  this.__index__ = -1;
  if (!text2.length)
    return null;
  const m = this.re.schema_at_start.exec(text2);
  if (!m)
    return null;
  const len = this.testSchemaAt(text2, m[2], m[0].length);
  if (!len)
    return null;
  this.__schema__ = m[2];
  this.__index__ = m.index + m[1].length;
  this.__last_index__ = m.index + m[0].length + len;
  return createMatch(this, 0);
};
LinkifyIt.prototype.tlds = function tlds(list2, keepOld) {
  list2 = Array.isArray(list2) ? list2 : [list2];
  if (!keepOld) {
    this.__tlds__ = list2.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }
  this.__tlds__ = this.__tlds__.concat(list2).sort().filter(function(el, idx, arr) {
    return el !== arr[idx - 1];
  }).reverse();
  compile(this);
  return this;
};
LinkifyIt.prototype.normalize = function normalize2(match2) {
  if (!match2.schema) {
    match2.url = "http://" + match2.url;
  }
  if (match2.schema === "mailto:" && !/^mailto:/i.test(match2.url)) {
    match2.url = "mailto:" + match2.url;
  }
};
LinkifyIt.prototype.onCompile = function onCompile() {
};
const maxInt = 2147483647;
const base = 36;
const tMin = 1;
const tMax = 26;
const skew = 38;
const damp = 700;
const initialBias = 72;
const initialN = 128;
const delimiter = "-";
const regexPunycode = /^xn--/;
const regexNonASCII = /[^\0-\x7F]/;
const regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
const errors = {
  "overflow": "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
};
const baseMinusTMin = base - tMin;
const floor = Math.floor;
const stringFromCharCode = String.fromCharCode;
function error(type) {
  throw new RangeError(errors[type]);
}
function map(array, callback) {
  const result = [];
  let length = array.length;
  while (length--) {
    result[length] = callback(array[length]);
  }
  return result;
}
function mapDomain(domain, callback) {
  const parts = domain.split("@");
  let result = "";
  if (parts.length > 1) {
    result = parts[0] + "@";
    domain = parts[1];
  }
  domain = domain.replace(regexSeparators, ".");
  const labels = domain.split(".");
  const encoded = map(labels, callback).join(".");
  return result + encoded;
}
function ucs2decode(string) {
  const output = [];
  let counter = 0;
  const length = string.length;
  while (counter < length) {
    const value = string.charCodeAt(counter++);
    if (value >= 55296 && value <= 56319 && counter < length) {
      const extra = string.charCodeAt(counter++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
const ucs2encode = (codePoints) => String.fromCodePoint(...codePoints);
const basicToDigit = function(codePoint) {
  if (codePoint >= 48 && codePoint < 58) {
    return 26 + (codePoint - 48);
  }
  if (codePoint >= 65 && codePoint < 91) {
    return codePoint - 65;
  }
  if (codePoint >= 97 && codePoint < 123) {
    return codePoint - 97;
  }
  return base;
};
const digitToBasic = function(digit, flag) {
  return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
};
const adapt = function(delta, numPoints, firstTime) {
  let k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};
const decode = function(input) {
  const output = [];
  const inputLength = input.length;
  let i = 0;
  let n = initialN;
  let bias = initialBias;
  let basic = input.lastIndexOf(delimiter);
  if (basic < 0) {
    basic = 0;
  }
  for (let j = 0; j < basic; ++j) {
    if (input.charCodeAt(j) >= 128) {
      error("not-basic");
    }
    output.push(input.charCodeAt(j));
  }
  for (let index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
    const oldi = i;
    for (let w = 1, k = base; ; k += base) {
      if (index >= inputLength) {
        error("invalid-input");
      }
      const digit = basicToDigit(input.charCodeAt(index++));
      if (digit >= base) {
        error("invalid-input");
      }
      if (digit > floor((maxInt - i) / w)) {
        error("overflow");
      }
      i += digit * w;
      const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
      if (digit < t) {
        break;
      }
      const baseMinusT = base - t;
      if (w > floor(maxInt / baseMinusT)) {
        error("overflow");
      }
      w *= baseMinusT;
    }
    const out = output.length + 1;
    bias = adapt(i - oldi, out, oldi == 0);
    if (floor(i / out) > maxInt - n) {
      error("overflow");
    }
    n += floor(i / out);
    i %= out;
    output.splice(i++, 0, n);
  }
  return String.fromCodePoint(...output);
};
const encode = function(input) {
  const output = [];
  input = ucs2decode(input);
  const inputLength = input.length;
  let n = initialN;
  let delta = 0;
  let bias = initialBias;
  for (const currentValue of input) {
    if (currentValue < 128) {
      output.push(stringFromCharCode(currentValue));
    }
  }
  const basicLength = output.length;
  let handledCPCount = basicLength;
  if (basicLength) {
    output.push(delimiter);
  }
  while (handledCPCount < inputLength) {
    let m = maxInt;
    for (const currentValue of input) {
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }
    const handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      error("overflow");
    }
    delta += (m - n) * handledCPCountPlusOne;
    n = m;
    for (const currentValue of input) {
      if (currentValue < n && ++delta > maxInt) {
        error("overflow");
      }
      if (currentValue === n) {
        let q = delta;
        for (let k = base; ; k += base) {
          const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (q < t) {
            break;
          }
          const qMinusT = q - t;
          const baseMinusT = base - t;
          output.push(
            stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
          );
          q = floor(qMinusT / baseMinusT);
        }
        output.push(stringFromCharCode(digitToBasic(q, 0)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }
    ++delta;
    ++n;
  }
  return output.join("");
};
const toUnicode = function(input) {
  return mapDomain(input, function(string) {
    return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
  });
};
const toASCII = function(input) {
  return mapDomain(input, function(string) {
    return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
  });
};
const punycode = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  "version": "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  "ucs2": {
    "decode": ucs2decode,
    "encode": ucs2encode
  },
  "decode": decode,
  "encode": encode,
  "toASCII": toASCII,
  "toUnicode": toUnicode
};
const cfg_default = {
  options: {
    // Enable HTML tags in source
    html: false,
    // Use '/' to close single tags (<br />)
    xhtmlOut: false,
    // Convert '\n' in paragraphs into <br>
    breaks: false,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: false,
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
};
const cfg_zero = {
  options: {
    // Enable HTML tags in source
    html: false,
    // Use '/' to close single tags (<br />)
    xhtmlOut: false,
    // Convert '\n' in paragraphs into <br>
    breaks: false,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: false,
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
};
const cfg_commonmark = {
  options: {
    // Enable HTML tags in source
    html: true,
    // Use '/' to close single tags (<br />)
    xhtmlOut: true,
    // Convert '\n' in paragraphs into <br>
    breaks: false,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: false,
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
};
const config = {
  default: cfg_default,
  zero: cfg_zero,
  commonmark: cfg_commonmark
};
const BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
const GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
function validateLink(url) {
  const str = url.trim().toLowerCase();
  return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) : true;
}
const RECODE_HOSTNAME_FOR = ["http:", "https:", "mailto:"];
function normalizeLink(url) {
  const parsed = urlParse(url, true);
  if (parsed.hostname) {
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toASCII(parsed.hostname);
      } catch (er) {
      }
    }
  }
  return encode$1(format(parsed));
}
function normalizeLinkText(url) {
  const parsed = urlParse(url, true);
  if (parsed.hostname) {
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toUnicode(parsed.hostname);
      } catch (er) {
      }
    }
  }
  return decode$1(format(parsed), decode$1.defaultChars + "%");
}
function MarkdownIt(presetName, options) {
  if (!(this instanceof MarkdownIt)) {
    return new MarkdownIt(presetName, options);
  }
  if (!options) {
    if (!isString$1(presetName)) {
      options = presetName || {};
      presetName = "default";
    }
  }
  this.inline = new ParserInline();
  this.block = new ParserBlock();
  this.core = new Core();
  this.renderer = new Renderer();
  this.linkify = new LinkifyIt();
  this.validateLink = validateLink;
  this.normalizeLink = normalizeLink;
  this.normalizeLinkText = normalizeLinkText;
  this.utils = utils;
  this.helpers = assign$1({}, helpers);
  this.options = {};
  this.configure(presetName);
  if (options) {
    this.set(options);
  }
}
MarkdownIt.prototype.set = function(options) {
  assign$1(this.options, options);
  return this;
};
MarkdownIt.prototype.configure = function(presets) {
  const self = this;
  if (isString$1(presets)) {
    const presetName = presets;
    presets = config[presetName];
    if (!presets) {
      throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
    }
  }
  if (!presets) {
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  }
  if (presets.options) {
    self.set(presets.options);
  }
  if (presets.components) {
    Object.keys(presets.components).forEach(function(name) {
      if (presets.components[name].rules) {
        self[name].ruler.enableOnly(presets.components[name].rules);
      }
      if (presets.components[name].rules2) {
        self[name].ruler2.enableOnly(presets.components[name].rules2);
      }
    });
  }
  return this;
};
MarkdownIt.prototype.enable = function(list2, ignoreInvalid) {
  let result = [];
  if (!Array.isArray(list2)) {
    list2 = [list2];
  }
  ["core", "block", "inline"].forEach(function(chain) {
    result = result.concat(this[chain].ruler.enable(list2, true));
  }, this);
  result = result.concat(this.inline.ruler2.enable(list2, true));
  const missed = list2.filter(function(name) {
    return result.indexOf(name) < 0;
  });
  if (missed.length && !ignoreInvalid) {
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
  }
  return this;
};
MarkdownIt.prototype.disable = function(list2, ignoreInvalid) {
  let result = [];
  if (!Array.isArray(list2)) {
    list2 = [list2];
  }
  ["core", "block", "inline"].forEach(function(chain) {
    result = result.concat(this[chain].ruler.disable(list2, true));
  }, this);
  result = result.concat(this.inline.ruler2.disable(list2, true));
  const missed = list2.filter(function(name) {
    return result.indexOf(name) < 0;
  });
  if (missed.length && !ignoreInvalid) {
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
  }
  return this;
};
MarkdownIt.prototype.use = function(plugin) {
  const args = [this].concat(Array.prototype.slice.call(arguments, 1));
  plugin.apply(plugin, args);
  return this;
};
MarkdownIt.prototype.parse = function(src, env) {
  if (typeof src !== "string") {
    throw new Error("Input data should be a String");
  }
  const state = new this.core.State(src, this, env);
  this.core.process(state);
  return state.tokens;
};
MarkdownIt.prototype.render = function(src, env) {
  env = env || {};
  return this.renderer.render(this.parse(src, env), this.options, env);
};
MarkdownIt.prototype.parseInline = function(src, env) {
  const state = new this.core.State(src, this, env);
  state.inlineMode = true;
  this.core.process(state);
  return state.tokens;
};
MarkdownIt.prototype.renderInline = function(src, env) {
  env = env || {};
  return this.renderer.render(this.parseInline(src, env), this.options, env);
};
const _hoisted_1 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MainLayout",
  props: {
    newVersion: { type: [Object, null], required: true }
  },
  setup(__props) {
    const settings = useSettingsStore();
    const $q = useQuasar();
    const leftDrawerOpen = ref(false);
    const { dark, ignoreVersion } = storeToRefs(settings);
    const version = getVersion();
    const props = __props;
    const updateDialogOpen = ref(!!props.newVersion);
    watch(
      () => props.newVersion,
      (newVal) => {
        if (newVal) {
          updateDialogOpen.value = true;
        }
      }
    );
    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    function skipUpdate() {
      if (!props.newVersion) {
        return;
      }
      ignoreVersion.value = props.newVersion.version;
      updateDialogOpen.value = false;
    }
    function downloadUpdate() {
      var _a2, _b;
      if (!props.newVersion) {
        return;
      }
      if ($q.platform.is.electron) {
        window.PKStatusApi.openUrl(
          (_a2 = props.newVersion.assets.windows) != null ? _a2 : props.newVersion.url
        );
      } else if ($q.platform.is.android) {
        open((_b = props.newVersion.assets.android) != null ? _b : props.newVersion.url, "_blank");
      } else {
        open(props.newVersion.url, "_blank");
      }
    }
    function openProjectPage() {
      if ($q.platform.is.electron) {
        window.PKStatusApi.openProjectPage();
      } else {
        open(homepage, "_blank");
      }
    }
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
        default: withCtx(() => [
          createVNode(QHeader, null, {
            default: withCtx(() => [
              createVNode(QToolbar, {
                class: normalizeClass({ "bg-deep-orange": unref(isDev)() })
              }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    flat: "",
                    dense: "",
                    round: "",
                    icon: "menu",
                    "aria-label": "Menu",
                    onClick: toggleLeftDrawer
                  }),
                  createVNode(QToolbarTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(" PKStatus ")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createBaseVNode("div", null, [
                    createVNode(QBtn, {
                      flat: "",
                      to: "/debug",
                      style: { "text-transform": "none" }
                    }, {
                      default: withCtx(() => [
                        unref(isDev)() ? (openBlock(), createBlock(QIcon, {
                          key: 0,
                          name: "warning"
                        })) : createCommentVNode("v-if", true),
                        createTextVNode(
                          " " + toDisplayString(unref(version)),
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
              }, 8, ["class"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QDrawer, {
            modelValue: leftDrawerOpen.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => leftDrawerOpen.value = $event),
            class: "row column justify-between",
            "show-if-above": "",
            bordered: ""
          }, {
            default: withCtx(() => [
              createVNode(QList, { class: "col-auto" }, {
                default: withCtx(() => [
                  createVNode(QItemLabel, { header: "" }, {
                    default: withCtx(() => [
                      createTextVNode("Pages")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(QItem, {
                    clickable: "",
                    to: "/status"
                  }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QIcon, { name: "people" })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("Status")
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode("Show system statuses")
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
                  }),
                  createVNode(QItem, {
                    clickable: "",
                    to: "/switch"
                  }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QIcon, { name: "swap_horiz" })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("Switch")
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode("Register a switch")
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
                  }),
                  createVNode(QItem, {
                    clickable: "",
                    to: "/lookup"
                  }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QIcon, { name: "search" })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("Lookup")
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode("Look up a system or alter")
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
                  }),
                  createVNode(QSeparator, { spaced: "" }),
                  createVNode(QItemLabel, { header: "" }, {
                    default: withCtx(() => [
                      createTextVNode("Settings")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(QItem, {
                    clickable: "",
                    to: "/manage"
                  }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QIcon, { name: "manage_accounts" })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("Systems")
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode("Manage tracked systems")
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
                  }),
                  createVNode(QItem, {
                    clickable: "",
                    to: "/settings"
                  }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QIcon, { name: "settings" })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("General")
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode("Other Settings")
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
                  }),
                  createVNode(QSeparator, { spaced: "" }),
                  createVNode(QItemLabel, { header: "" }, {
                    default: withCtx(() => [
                      createTextVNode("Other")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(QItem, {
                    clickable: "",
                    onClick: openProjectPage
                  }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QIcon, { name: "open_in_new" })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("GitHub")
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode("Project page")
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
              }),
              createVNode(QList, { class: "col-auto" }, {
                default: withCtx(() => [
                  createVNode(QSeparator, { spaced: "" }),
                  createVNode(QItem, { tag: "label" }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("Dark Mode")
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QToggle, {
                            modelValue: unref(dark),
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(dark) ? dark.value = $event : null),
                            "checked-icon": "dark_mode",
                            "unchecked-icon": "light_mode"
                          }, null, 8, ["modelValue"])
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
          }, 8, ["modelValue"]),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              _ctx.newVersion ? (openBlock(), createBlock(QDialog, {
                key: 0,
                modelValue: updateDialogOpen.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => updateDialogOpen.value = $event),
                "full-height": ""
              }, {
                default: withCtx(() => [
                  createVNode(QCard, { class: "column" }, {
                    default: withCtx(() => [
                      createVNode(QItem, { class: "bg-positive text-white col-auto" }, {
                        default: withCtx(() => [
                          createVNode(QItemSection, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(QIcon, {
                                size: "48px",
                                name: "browser_updated"
                              })
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createVNode(QItemLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("New Version Available ")
                                ]),
                                _: 1
                                /* STABLE */
                              }),
                              createVNode(QItemLabel, {
                                caption: "",
                                class: "text-white"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(
                                    toDisplayString(_ctx.newVersion.version),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              })
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          createVNode(QItemSection, { side: "" }, {
                            default: withCtx(() => [
                              withDirectives(createVNode(
                                QBtn,
                                {
                                  icon: "close",
                                  class: "text-white",
                                  flat: "",
                                  round: ""
                                },
                                null,
                                512
                                /* NEED_PATCH */
                              ), [
                                [ClosePopup]
                              ])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(QCardSection, { class: "col overflow-auto" }, {
                        default: withCtx(() => [
                          createBaseVNode("div", {
                            class: "changelog",
                            innerHTML: unref(MarkdownIt)({ html: false }).render(_ctx.newVersion.changelog)
                          }, null, 8, _hoisted_1)
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(QCardActions, {
                        class: "col-auto",
                        align: "between"
                      }, {
                        default: withCtx(() => [
                          createVNode(QBtn, {
                            icon: "download",
                            label: "download",
                            color: "positive",
                            flat: "",
                            onClick: downloadUpdate
                          }),
                          createVNode(QBtn, {
                            icon: "do_not_disturb_on",
                            label: "skip this version",
                            color: "primary",
                            square: "",
                            flat: "",
                            onClick: skipUpdate
                          }),
                          createVNode(QBtn, {
                            icon: "close",
                            label: "ignore",
                            color: "negative",
                            square: "",
                            flat: "",
                            onClick: _cache[2] || (_cache[2] = ($event) => updateDialogOpen.value = false)
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
              }, 8, ["modelValue"])) : createCommentVNode("v-if", true),
              createVNode(_component_router_view)
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
const MainLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/zowie/dev/pkstatus/src/layouts/MainLayout.vue"]]);
export {
  MainLayout as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkxheW91dC1wUVVOOS1RSC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjIvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90b29sYmFyL1FUb29sYmFyVGl0bGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2hlYWRlci9RSGVhZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjIvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9kcmF3ZXIvUURyYXdlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4yL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvcGFnZS9RUGFnZUNvbnRhaW5lci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4yL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2Nyb2xsLW9ic2VydmVyL1FTY3JvbGxPYnNlcnZlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4yL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvbGF5b3V0L1FMYXlvdXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9kaXJlY3RpdmVzL2Nsb3NlLXBvcHVwL0Nsb3NlUG9wdXAuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWR1cmxAMi4wLjAvbm9kZV9tb2R1bGVzL21kdXJsL2xpYi9kZWNvZGUubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21kdXJsQDIuMC4wL25vZGVfbW9kdWxlcy9tZHVybC9saWIvZW5jb2RlLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tZHVybEAyLjAuMC9ub2RlX21vZHVsZXMvbWR1cmwvbGliL2Zvcm1hdC5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWR1cmxAMi4wLjAvbm9kZV9tb2R1bGVzL21kdXJsL2xpYi9wYXJzZS5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdWMubWljcm9AMi4xLjAvbm9kZV9tb2R1bGVzL3VjLm1pY3JvL3Byb3BlcnRpZXMvQW55L3JlZ2V4Lm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS91Yy5taWNyb0AyLjEuMC9ub2RlX21vZHVsZXMvdWMubWljcm8vY2F0ZWdvcmllcy9DYy9yZWdleC5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdWMubWljcm9AMi4xLjAvbm9kZV9tb2R1bGVzL3VjLm1pY3JvL2NhdGVnb3JpZXMvQ2YvcmVnZXgubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3VjLm1pY3JvQDIuMS4wL25vZGVfbW9kdWxlcy91Yy5taWNyby9jYXRlZ29yaWVzL1AvcmVnZXgubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3VjLm1pY3JvQDIuMS4wL25vZGVfbW9kdWxlcy91Yy5taWNyby9jYXRlZ29yaWVzL1MvcmVnZXgubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3VjLm1pY3JvQDIuMS4wL25vZGVfbW9kdWxlcy91Yy5taWNyby9jYXRlZ29yaWVzL1ovcmVnZXgubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2VudGl0aWVzQDQuNS4wL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvZXNtL2dlbmVyYXRlZC9kZWNvZGUtZGF0YS1odG1sLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2VudGl0aWVzQDQuNS4wL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvZXNtL2dlbmVyYXRlZC9kZWNvZGUtZGF0YS14bWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZW50aXRpZXNANC41LjAvbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9lc20vZGVjb2RlX2NvZGVwb2ludC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9lbnRpdGllc0A0LjUuMC9ub2RlX21vZHVsZXMvZW50aXRpZXMvbGliL2VzbS9kZWNvZGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWFya2Rvd24taXRAMTQuMS4wL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvY29tbW9uL3V0aWxzLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9oZWxwZXJzL3BhcnNlX2xpbmtfbGFiZWwubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21hcmtkb3duLWl0QDE0LjEuMC9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL2hlbHBlcnMvcGFyc2VfbGlua19kZXN0aW5hdGlvbi5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWFya2Rvd24taXRAMTQuMS4wL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvaGVscGVycy9wYXJzZV9saW5rX3RpdGxlLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9yZW5kZXJlci5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWFya2Rvd24taXRAMTQuMS4wL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXIubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21hcmtkb3duLWl0QDE0LjEuMC9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3Rva2VuLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19jb3JlL3N0YXRlX2NvcmUubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21hcmtkb3duLWl0QDE0LjEuMC9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2NvcmUvbm9ybWFsaXplLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19jb3JlL2Jsb2NrLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19jb3JlL2lubGluZS5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWFya2Rvd24taXRAMTQuMS4wL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfY29yZS9saW5raWZ5Lm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19jb3JlL3JlcGxhY2VtZW50cy5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWFya2Rvd24taXRAMTQuMS4wL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfY29yZS9zbWFydHF1b3Rlcy5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWFya2Rvd24taXRAMTQuMS4wL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfY29yZS90ZXh0X2pvaW4ubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21hcmtkb3duLWl0QDE0LjEuMC9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3BhcnNlcl9jb3JlLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9zdGF0ZV9ibG9jay5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWFya2Rvd24taXRAMTQuMS4wL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfYmxvY2svdGFibGUubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21hcmtkb3duLWl0QDE0LjEuMC9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2Jsb2NrL2NvZGUubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21hcmtkb3duLWl0QDE0LjEuMC9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2Jsb2NrL2ZlbmNlLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9ibG9ja3F1b3RlLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9oci5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWFya2Rvd24taXRAMTQuMS4wL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfYmxvY2svbGlzdC5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWFya2Rvd24taXRAMTQuMS4wL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfYmxvY2svcmVmZXJlbmNlLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9jb21tb24vaHRtbF9ibG9ja3MubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21hcmtkb3duLWl0QDE0LjEuMC9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL2NvbW1vbi9odG1sX3JlLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9odG1sX2Jsb2NrLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9oZWFkaW5nLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9saGVhZGluZy5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWFya2Rvd24taXRAMTQuMS4wL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfYmxvY2svcGFyYWdyYXBoLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9wYXJzZXJfYmxvY2subWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21hcmtkb3duLWl0QDE0LjEuMC9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9zdGF0ZV9pbmxpbmUubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21hcmtkb3duLWl0QDE0LjEuMC9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS90ZXh0Lm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19pbmxpbmUvbGlua2lmeS5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWFya2Rvd24taXRAMTQuMS4wL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL25ld2xpbmUubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21hcmtkb3duLWl0QDE0LjEuMC9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9lc2NhcGUubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21hcmtkb3duLWl0QDE0LjEuMC9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9iYWNrdGlja3MubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21hcmtkb3duLWl0QDE0LjEuMC9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9zdHJpa2V0aHJvdWdoLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19pbmxpbmUvZW1waGFzaXMubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21hcmtkb3duLWl0QDE0LjEuMC9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9saW5rLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19pbmxpbmUvaW1hZ2UubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21hcmtkb3duLWl0QDE0LjEuMC9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9hdXRvbGluay5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWFya2Rvd24taXRAMTQuMS4wL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL2h0bWxfaW5saW5lLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19pbmxpbmUvZW50aXR5Lm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19pbmxpbmUvYmFsYW5jZV9wYWlycy5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWFya2Rvd24taXRAMTQuMS4wL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL2ZyYWdtZW50c19qb2luLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9wYXJzZXJfaW5saW5lLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9saW5raWZ5LWl0QDUuMC4wL25vZGVfbW9kdWxlcy9saW5raWZ5LWl0L2xpYi9yZS5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbGlua2lmeS1pdEA1LjAuMC9ub2RlX21vZHVsZXMvbGlua2lmeS1pdC9pbmRleC5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcHVueWNvZGUuanNAMi4zLjEvbm9kZV9tb2R1bGVzL3B1bnljb2RlLmpzL3B1bnljb2RlLmVzNi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9wcmVzZXRzL2RlZmF1bHQubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21hcmtkb3duLWl0QDE0LjEuMC9ub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3ByZXNldHMvemVyby5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWFya2Rvd24taXRAMTQuMS4wL25vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcHJlc2V0cy9jb21tb25tYXJrLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXJrZG93bi1pdEAxNC4xLjAvbm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9pbmRleC5tanMiLCIuLi8uLi8uLi9zcmMvbGF5b3V0cy9NYWluTGF5b3V0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRvb2xiYXJUaXRsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBzaHJpbms6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdG9vbGJhcl9fdGl0bGUgZWxsaXBzaXMnXG4gICAgICArIChwcm9wcy5zaHJpbmsgPT09IHRydWUgPyAnIGNvbC1zaHJpbmsnIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVVbm1vdW50LCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhVbmlxdWVTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBsYXlvdXRLZXksIGVtcHR5UmVuZGVyRm4gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRSGVhZGVyJyxcblxuICBwcm9wczoge1xuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICByZXZlYWw6IEJvb2xlYW4sXG4gICAgcmV2ZWFsT2Zmc2V0OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAyNTBcbiAgICB9LFxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuICAgIGVsZXZhdGVkOiBCb29sZWFuLFxuXG4gICAgaGVpZ2h0SGludDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogNTBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3JldmVhbCcsICdmb2N1c2luJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgJGxheW91dCA9IGluamVjdChsYXlvdXRLZXksIGVtcHR5UmVuZGVyRm4pXG4gICAgaWYgKCRsYXlvdXQgPT09IGVtcHR5UmVuZGVyRm4pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1FIZWFkZXIgbmVlZHMgdG8gYmUgY2hpbGQgb2YgUUxheW91dCcpXG4gICAgICByZXR1cm4gZW1wdHlSZW5kZXJGblxuICAgIH1cblxuICAgIGNvbnN0IHNpemUgPSByZWYocGFyc2VJbnQocHJvcHMuaGVpZ2h0SGludCwgMTApKVxuICAgIGNvbnN0IHJldmVhbGVkID0gcmVmKHRydWUpXG5cbiAgICBjb25zdCBmaXhlZCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5yZXZlYWwgPT09IHRydWVcbiAgICAgIHx8ICRsYXlvdXQudmlldy52YWx1ZS5pbmRleE9mKCdIJykgIT09IC0xXG4gICAgICB8fCAoJHEucGxhdGZvcm0uaXMuaW9zICYmICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3Qgb2Zmc2V0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcmV2ZWFsZWQudmFsdWUgPT09IHRydWUgPyBzaXplLnZhbHVlIDogMFxuICAgICAgfVxuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2l6ZS52YWx1ZSAtICRsYXlvdXQuc2Nyb2xsLnZhbHVlLnBvc2l0aW9uXG4gICAgICByZXR1cm4gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDBcbiAgICB9KVxuXG4gICAgY29uc3QgaGlkZGVuID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZVxuICAgICAgfHwgKGZpeGVkLnZhbHVlID09PSB0cnVlICYmIHJldmVhbGVkLnZhbHVlICE9PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IHJldmVhbE9uRm9jdXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBoaWRkZW4udmFsdWUgPT09IHRydWUgJiYgcHJvcHMucmV2ZWFsID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1oZWFkZXIgcS1sYXlvdXRfX3NlY3Rpb24tLW1hcmdpbmFsICdcbiAgICAgICsgKGZpeGVkLnZhbHVlID09PSB0cnVlID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScpICsgJy10b3AnXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1oZWFkZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLWhlYWRlci0taGlkZGVuJyA6ICcnKVxuICAgICAgKyAocHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZSA/ICcgcS1sYXlvdXQtLXByZXZlbnQtZm9jdXMnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdFxuICAgICAgICB2aWV3ID0gJGxheW91dC5yb3dzLnZhbHVlLnRvcCxcbiAgICAgICAgY3NzID0ge31cblxuICAgICAgaWYgKHZpZXdbIDAgXSA9PT0gJ2wnICYmICRsYXlvdXQubGVmdC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdID0gYCR7ICRsYXlvdXQubGVmdC5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICh2aWV3WyAyIF0gPT09ICdyJyAmJiAkbGF5b3V0LnJpZ2h0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF0gPSBgJHsgJGxheW91dC5yaWdodC5zaXplIH1weGBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUoJ2hlYWRlcicsIHByb3AsIHZhbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbCAocHJvcCwgdmFsKSB7XG4gICAgICBpZiAocHJvcC52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgIHByb3AudmFsdWUgPSB2YWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlc2l6ZSAoeyBoZWlnaHQgfSkge1xuICAgICAgdXBkYXRlTG9jYWwoc2l6ZSwgaGVpZ2h0KVxuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgaGVpZ2h0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXNpbiAoZXZ0KSB7XG4gICAgICBpZiAocmV2ZWFsT25Gb2N1cy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgZW1pdCgnZm9jdXNpbicsIGV2dClcbiAgICB9XG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHZhbClcbiAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCB0cnVlKVxuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICB9KVxuXG4gICAgd2F0Y2gob2Zmc2V0LCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnJldmVhbCwgdmFsID0+IHtcbiAgICAgIHZhbCA9PT0gZmFsc2UgJiYgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHByb3BzLm1vZGVsVmFsdWUpXG4gICAgfSlcblxuICAgIHdhdGNoKHJldmVhbGVkLCB2YWwgPT4ge1xuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICAgIGVtaXQoJ3JldmVhbCcsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goJGxheW91dC5zY3JvbGwsIHNjcm9sbCA9PiB7XG4gICAgICBwcm9wcy5yZXZlYWwgPT09IHRydWUgJiYgdXBkYXRlTG9jYWwocmV2ZWFsZWQsXG4gICAgICAgIHNjcm9sbC5kaXJlY3Rpb24gPT09ICd1cCdcbiAgICAgICAgfHwgc2Nyb2xsLnBvc2l0aW9uIDw9IHByb3BzLnJldmVhbE9mZnNldFxuICAgICAgICB8fCBzY3JvbGwucG9zaXRpb24gLSBzY3JvbGwuaW5mbGVjdGlvblBvaW50IDwgMTAwXG4gICAgICApXG4gICAgfSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0ge31cblxuICAgICRsYXlvdXQuaW5zdGFuY2VzLmhlYWRlciA9IGluc3RhbmNlXG4gICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiB1cGRhdGVMYXlvdXQoJ3NpemUnLCBzaXplLnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBwcm9wcy5tb2RlbFZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0Jywgb2Zmc2V0LnZhbHVlKVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGlmICgkbGF5b3V0Lmluc3RhbmNlcy5oZWFkZXIgPT09IGluc3RhbmNlKSB7XG4gICAgICAgICRsYXlvdXQuaW5zdGFuY2VzLmhlYWRlciA9IHZvaWQgMFxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gaFVuaXF1ZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG5cbiAgICAgIHByb3BzLmVsZXZhdGVkID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0X19zaGFkb3cgYWJzb2x1dGUtZnVsbCBvdmVyZmxvdy1oaWRkZW4gbm8tcG9pbnRlci1ldmVudHMnXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7XG4gICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgb25SZXNpemVcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2hlYWRlcicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgb25Gb2N1c2luXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCB3aXRoRGlyZWN0aXZlcywgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBuZXh0VGljaywgaW5qZWN0LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VIaXN0b3J5IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWhpc3RvcnkuanMnXG5pbXBvcnQgdXNlTW9kZWxUb2dnbGUsIHsgdXNlTW9kZWxUb2dnbGVQcm9wcywgdXNlTW9kZWxUb2dnbGVFbWl0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLW1vZGVsLXRvZ2dsZS5qcydcbmltcG9ydCB1c2VQcmV2ZW50U2Nyb2xsIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXByZXZlbnQtc2Nyb2xsLmpzJ1xuaW1wb3J0IHVzZVRpbWVvdXQgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLXRpbWVvdXQuanMnXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgVG91Y2hQYW4gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90b3VjaC1wYW4vVG91Y2hQYW4uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IGhTbG90LCBoRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBsYXlvdXRLZXksIGVtcHR5UmVuZGVyRm4gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5cbmNvbnN0IGR1cmF0aW9uID0gMTUwXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRRHJhd2VyJyxcblxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlTW9kZWxUb2dnbGVQcm9wcyxcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICBzaWRlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbGVmdCcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gWyAnbGVmdCcsICdyaWdodCcgXS5pbmNsdWRlcyh2KVxuICAgIH0sXG5cbiAgICB3aWR0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMzAwXG4gICAgfSxcblxuICAgIG1pbmk6IEJvb2xlYW4sXG4gICAgbWluaVRvT3ZlcmxheTogQm9vbGVhbixcbiAgICBtaW5pV2lkdGg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDU3XG4gICAgfSxcbiAgICBub01pbmlBbmltYXRpb246IEJvb2xlYW4sXG5cbiAgICBicmVha3BvaW50OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAxMDIzXG4gICAgfSxcbiAgICBzaG93SWZBYm92ZTogQm9vbGVhbixcblxuICAgIGJlaGF2aW9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gWyAnZGVmYXVsdCcsICdkZXNrdG9wJywgJ21vYmlsZScgXS5pbmNsdWRlcyh2KSxcbiAgICAgIGRlZmF1bHQ6ICdkZWZhdWx0J1xuICAgIH0sXG5cbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBlbGV2YXRlZDogQm9vbGVhbixcblxuICAgIG92ZXJsYXk6IEJvb2xlYW4sXG4gICAgcGVyc2lzdGVudDogQm9vbGVhbixcbiAgICBub1N3aXBlT3BlbjogQm9vbGVhbixcbiAgICBub1N3aXBlQ2xvc2U6IEJvb2xlYW4sXG4gICAgbm9Td2lwZUJhY2tkcm9wOiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAuLi51c2VNb2RlbFRvZ2dsZUVtaXRzLFxuICAgICdvbkxheW91dCcsICdtaW5pU3RhdGUnXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0LCBhdHRycyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gdm1cblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuICAgIGNvbnN0IHsgcHJldmVudEJvZHlTY3JvbGwgfSA9IHVzZVByZXZlbnRTY3JvbGwoKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaW1lb3V0LCByZW1vdmVUaW1lb3V0IH0gPSB1c2VUaW1lb3V0KClcblxuICAgIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuKVxuICAgIGlmICgkbGF5b3V0ID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRRHJhd2VyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBsZXQgbGFzdERlc2t0b3BTdGF0ZSwgdGltZXJNaW5pID0gbnVsbCwgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXJcblxuICAgIGNvbnN0IGJlbG93QnJlYWtwb2ludCA9IHJlZihcbiAgICAgIHByb3BzLmJlaGF2aW9yID09PSAnbW9iaWxlJ1xuICAgICAgfHwgKHByb3BzLmJlaGF2aW9yICE9PSAnZGVza3RvcCcgJiYgJGxheW91dC50b3RhbFdpZHRoLnZhbHVlIDw9IHByb3BzLmJyZWFrcG9pbnQpXG4gICAgKVxuXG4gICAgY29uc3QgaXNNaW5pID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm1pbmkgPT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlICE9PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3Qgc2l6ZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIGlzTWluaS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLm1pbmlXaWR0aFxuICAgICAgICA6IHByb3BzLndpZHRoXG4gICAgKSlcblxuICAgIGNvbnN0IHNob3dpbmcgPSByZWYoXG4gICAgICBwcm9wcy5zaG93SWZBYm92ZSA9PT0gdHJ1ZSAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IGZhbHNlXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBoaWRlT25Sb3V0ZUNoYW5nZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5wZXJzaXN0ZW50ICE9PSB0cnVlXG4gICAgICAmJiAoYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlIHx8IG9uU2NyZWVuT3ZlcmxheS52YWx1ZSA9PT0gdHJ1ZSlcbiAgICApXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTaG93IChldnQsIG5vRXZlbnQpIHtcbiAgICAgIGFkZFRvSGlzdG9yeSgpXG5cbiAgICAgIGV2dCAhPT0gZmFsc2UgJiYgJGxheW91dC5hbmltYXRlKClcbiAgICAgIGFwcGx5UG9zaXRpb24oMClcblxuICAgICAgaWYgKGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBvdGhlckluc3RhbmNlID0gJGxheW91dC5pbnN0YW5jZXNbIG90aGVyU2lkZS52YWx1ZSBdXG4gICAgICAgIGlmIChvdGhlckluc3RhbmNlICE9PSB2b2lkIDAgJiYgb3RoZXJJbnN0YW5jZS5iZWxvd0JyZWFrcG9pbnQgPT09IHRydWUpIHtcbiAgICAgICAgICBvdGhlckluc3RhbmNlLmhpZGUoZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICBhcHBseUJhY2tkcm9wKDEpXG4gICAgICAgICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgIT09IHRydWUgJiYgcHJldmVudEJvZHlTY3JvbGwodHJ1ZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBhcHBseUJhY2tkcm9wKDApXG4gICAgICAgIGV2dCAhPT0gZmFsc2UgJiYgc2V0U2Nyb2xsYWJsZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgcmVnaXN0ZXJUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZXZ0ICE9PSBmYWxzZSAmJiBzZXRTY3JvbGxhYmxlKHRydWUpXG4gICAgICAgIG5vRXZlbnQgIT09IHRydWUgJiYgZW1pdCgnc2hvdycsIGV2dClcbiAgICAgIH0sIGR1cmF0aW9uKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUhpZGUgKGV2dCwgbm9FdmVudCkge1xuICAgICAgcmVtb3ZlRnJvbUhpc3RvcnkoKVxuXG4gICAgICBldnQgIT09IGZhbHNlICYmICRsYXlvdXQuYW5pbWF0ZSgpXG5cbiAgICAgIGFwcGx5QmFja2Ryb3AoMClcbiAgICAgIGFwcGx5UG9zaXRpb24oc3RhdGVEaXJlY3Rpb24udmFsdWUgKiBzaXplLnZhbHVlKVxuXG4gICAgICBjbGVhbnVwKClcblxuICAgICAgaWYgKG5vRXZlbnQgIT09IHRydWUpIHtcbiAgICAgICAgcmVnaXN0ZXJUaW1lb3V0KCgpID0+IHsgZW1pdCgnaGlkZScsIGV2dCkgfSwgZHVyYXRpb24pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVtb3ZlVGltZW91dCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBzaG93LCBoaWRlIH0gPSB1c2VNb2RlbFRvZ2dsZSh7XG4gICAgICBzaG93aW5nLFxuICAgICAgaGlkZU9uUm91dGVDaGFuZ2UsXG4gICAgICBoYW5kbGVTaG93LFxuICAgICAgaGFuZGxlSGlkZVxuICAgIH0pXG5cbiAgICBjb25zdCB7IGFkZFRvSGlzdG9yeSwgcmVtb3ZlRnJvbUhpc3RvcnkgfSA9IHVzZUhpc3Rvcnkoc2hvd2luZywgaGlkZSwgaGlkZU9uUm91dGVDaGFuZ2UpXG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICAgIGJlbG93QnJlYWtwb2ludCxcbiAgICAgIGhpZGVcbiAgICB9XG5cbiAgICBjb25zdCByaWdodFNpZGUgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5zaWRlID09PSAncmlnaHQnKVxuXG4gICAgY29uc3Qgc3RhdGVEaXJlY3Rpb24gPSBjb21wdXRlZCgoKSA9PlxuICAgICAgKCRxLmxhbmcucnRsID09PSB0cnVlID8gLTEgOiAxKSAqIChyaWdodFNpZGUudmFsdWUgPT09IHRydWUgPyAxIDogLTEpXG4gICAgKVxuXG4gICAgY29uc3QgZmxhZ0JhY2tkcm9wQmcgPSByZWYoMClcbiAgICBjb25zdCBmbGFnUGFubmluZyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBmbGFnTWluaUFuaW1hdGUgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgZmxhZ0NvbnRlbnRQb3NpdGlvbiA9IHJlZiggLy8gc3RhcnRpbmcgd2l0aCBcImhpZGRlblwiIGZvciBTU1JcbiAgICAgIHNpemUudmFsdWUgKiBzdGF0ZURpcmVjdGlvbi52YWx1ZVxuICAgIClcblxuICAgIGNvbnN0IG90aGVyU2lkZSA9IGNvbXB1dGVkKCgpID0+IChyaWdodFNpZGUudmFsdWUgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnKSlcbiAgICBjb25zdCBvZmZzZXQgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gZmFsc2UgJiYgcHJvcHMub3ZlcmxheSA9PT0gZmFsc2VcbiAgICAgICAgPyAocHJvcHMubWluaVRvT3ZlcmxheSA9PT0gdHJ1ZSA/IHByb3BzLm1pbmlXaWR0aCA6IHNpemUudmFsdWUpXG4gICAgICAgIDogMFxuICAgICkpXG5cbiAgICBjb25zdCBmaXhlZCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5vdmVybGF5ID09PSB0cnVlXG4gICAgICB8fCBwcm9wcy5taW5pVG9PdmVybGF5ID09PSB0cnVlXG4gICAgICB8fCAkbGF5b3V0LnZpZXcudmFsdWUuaW5kZXhPZihyaWdodFNpZGUudmFsdWUgPyAnUicgOiAnTCcpICE9PSAtMVxuICAgICAgfHwgKCRxLnBsYXRmb3JtLmlzLmlvcyA9PT0gdHJ1ZSAmJiAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IG9uTGF5b3V0ID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm92ZXJsYXkgPT09IGZhbHNlXG4gICAgICAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IGZhbHNlXG4gICAgKVxuXG4gICAgY29uc3Qgb25TY3JlZW5PdmVybGF5ID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm92ZXJsYXkgPT09IHRydWVcbiAgICAgICYmIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICYmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gZmFsc2VcbiAgICApXG5cbiAgICBjb25zdCBiYWNrZHJvcENsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdmdWxsc2NyZWVuIHEtZHJhd2VyX19iYWNrZHJvcCdcbiAgICAgICsgKHNob3dpbmcudmFsdWUgPT09IGZhbHNlICYmIGZsYWdQYW5uaW5nLnZhbHVlID09PSBmYWxzZSA/ICcgaGlkZGVuJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IGJhY2tkcm9wU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBgcmdiYSgwLDAsMCwkeyBmbGFnQmFja2Ryb3BCZy52YWx1ZSAqIDAuNCB9KWBcbiAgICB9KSlcblxuICAgIGNvbnN0IGhlYWRlclNsb3QgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICByaWdodFNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyAkbGF5b3V0LnJvd3MudmFsdWUudG9wWyAyIF0gPT09ICdyJ1xuICAgICAgICA6ICRsYXlvdXQucm93cy52YWx1ZS50b3BbIDAgXSA9PT0gJ2wnXG4gICAgKSlcblxuICAgIGNvbnN0IGZvb3RlclNsb3QgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICByaWdodFNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyAkbGF5b3V0LnJvd3MudmFsdWUuYm90dG9tWyAyIF0gPT09ICdyJ1xuICAgICAgICA6ICRsYXlvdXQucm93cy52YWx1ZS5ib3R0b21bIDAgXSA9PT0gJ2wnXG4gICAgKSlcblxuICAgIGNvbnN0IGFib3ZlU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBjc3MgPSB7fVxuXG4gICAgICBpZiAoJGxheW91dC5oZWFkZXIuc3BhY2UgPT09IHRydWUgJiYgaGVhZGVyU2xvdC52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGZpeGVkLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgY3NzLnRvcCA9IGAkeyAkbGF5b3V0LmhlYWRlci5vZmZzZXQgfXB4YFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCRsYXlvdXQuaGVhZGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgICAgY3NzLnRvcCA9IGAkeyAkbGF5b3V0LmhlYWRlci5zaXplIH1weGBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoJGxheW91dC5mb290ZXIuc3BhY2UgPT09IHRydWUgJiYgZm9vdGVyU2xvdC52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGZpeGVkLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgY3NzLmJvdHRvbSA9IGAkeyAkbGF5b3V0LmZvb3Rlci5vZmZzZXQgfXB4YFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCRsYXlvdXQuZm9vdGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgICAgY3NzLmJvdHRvbSA9IGAkeyAkbGF5b3V0LmZvb3Rlci5zaXplIH1weGBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzXG4gICAgfSlcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBgJHsgc2l6ZS52YWx1ZSB9cHhgLFxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7IGZsYWdDb250ZW50UG9zaXRpb24udmFsdWUgfXB4KWBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHN0eWxlXG4gICAgICAgIDogT2JqZWN0LmFzc2lnbihzdHlsZSwgYWJvdmVTdHlsZS52YWx1ZSlcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGVudENsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWRyYXdlcl9fY29udGVudCBmaXQgJ1xuICAgICAgKyAoJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSAhPT0gdHJ1ZSA/ICdzY3JvbGwnIDogJ292ZXJmbG93LWF1dG8nKVxuICAgIClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtZHJhd2VyIHEtZHJhd2VyLS0keyBwcm9wcy5zaWRlIH1gXG4gICAgICArIChmbGFnTWluaUFuaW1hdGUudmFsdWUgPT09IHRydWUgPyAnIHEtZHJhd2VyLS1taW5pLWFuaW1hdGUnIDogJycpXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1kcmF3ZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLWRyYXdlci0tZGFyayBxLWRhcmsnIDogJycpXG4gICAgICArIChcbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPT09IHRydWVcbiAgICAgICAgICA/ICcgbm8tdHJhbnNpdGlvbidcbiAgICAgICAgICA6IChzaG93aW5nLnZhbHVlID09PSB0cnVlID8gJycgOiAnIHEtbGF5b3V0LS1wcmV2ZW50LWZvY3VzJylcbiAgICAgIClcbiAgICAgICsgKFxuICAgICAgICBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWVcbiAgICAgICAgICA/ICcgZml4ZWQgcS1kcmF3ZXItLW9uLXRvcCBxLWRyYXdlci0tbW9iaWxlIHEtZHJhd2VyLS10b3AtcGFkZGluZydcbiAgICAgICAgICA6IGAgcS1kcmF3ZXItLSR7IGlzTWluaS52YWx1ZSA9PT0gdHJ1ZSA/ICdtaW5pJyA6ICdzdGFuZGFyZCcgfWBcbiAgICAgICAgICArIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSB8fCBvbkxheW91dC52YWx1ZSAhPT0gdHJ1ZSA/ICcgZml4ZWQnIDogJycpXG4gICAgICAgICAgKyAocHJvcHMub3ZlcmxheSA9PT0gdHJ1ZSB8fCBwcm9wcy5taW5pVG9PdmVybGF5ID09PSB0cnVlID8gJyBxLWRyYXdlci0tb24tdG9wJyA6ICcnKVxuICAgICAgICAgICsgKGhlYWRlclNsb3QudmFsdWUgPT09IHRydWUgPyAnIHEtZHJhd2VyLS10b3AtcGFkZGluZycgOiAnJylcbiAgICAgIClcbiAgICApXG5cbiAgICBjb25zdCBvcGVuRGlyZWN0aXZlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgLy8gaWYgcHJvcHMubm9Td2lwZU9wZW4gIT09IHRydWVcbiAgICAgIGNvbnN0IGRpciA9ICRxLmxhbmcucnRsID09PSB0cnVlID8gcHJvcHMuc2lkZSA6IG90aGVyU2lkZS52YWx1ZVxuXG4gICAgICByZXR1cm4gWyBbXG4gICAgICAgIFRvdWNoUGFuLFxuICAgICAgICBvbk9wZW5QYW4sXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAge1xuICAgICAgICAgIFsgZGlyIF06IHRydWUsXG4gICAgICAgICAgbW91c2U6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSBdXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRlbnRDbG9zZURpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIGlmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5ub1N3aXBlQ2xvc2UgIT09IHRydWVcbiAgICAgIGNvbnN0IGRpciA9ICRxLmxhbmcucnRsID09PSB0cnVlID8gb3RoZXJTaWRlLnZhbHVlIDogcHJvcHMuc2lkZVxuXG4gICAgICByZXR1cm4gWyBbXG4gICAgICAgIFRvdWNoUGFuLFxuICAgICAgICBvbkNsb3NlUGFuLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHtcbiAgICAgICAgICBbIGRpciBdOiB0cnVlLFxuICAgICAgICAgIG1vdXNlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0gXVxuICAgIH0pXG5cbiAgICBjb25zdCBiYWNrZHJvcENsb3NlRGlyZWN0aXZlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgLy8gaWYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5ub1N3aXBlQmFja2Ryb3AgIT09IHRydWVcbiAgICAgIGNvbnN0IGRpciA9ICRxLmxhbmcucnRsID09PSB0cnVlID8gb3RoZXJTaWRlLnZhbHVlIDogcHJvcHMuc2lkZVxuXG4gICAgICByZXR1cm4gWyBbXG4gICAgICAgIFRvdWNoUGFuLFxuICAgICAgICBvbkNsb3NlUGFuLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHtcbiAgICAgICAgICBbIGRpciBdOiB0cnVlLFxuICAgICAgICAgIG1vdXNlOiB0cnVlLFxuICAgICAgICAgIG1vdXNlQWxsRGlyOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0gXVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVCZWxvd0JyZWFrcG9pbnQgKCkge1xuICAgICAgdXBkYXRlTG9jYWwoYmVsb3dCcmVha3BvaW50LCAoXG4gICAgICAgIHByb3BzLmJlaGF2aW9yID09PSAnbW9iaWxlJ1xuICAgICAgICB8fCAocHJvcHMuYmVoYXZpb3IgIT09ICdkZXNrdG9wJyAmJiAkbGF5b3V0LnRvdGFsV2lkdGgudmFsdWUgPD0gcHJvcHMuYnJlYWtwb2ludClcbiAgICAgICkpXG4gICAgfVxuXG4gICAgd2F0Y2goYmVsb3dCcmVha3BvaW50LCB2YWwgPT4ge1xuICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkgeyAvLyBmcm9tIGxnIHRvIHhzXG4gICAgICAgIGxhc3REZXNrdG9wU3RhdGUgPSBzaG93aW5nLnZhbHVlXG4gICAgICAgIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgaGlkZShmYWxzZSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKFxuICAgICAgICBwcm9wcy5vdmVybGF5ID09PSBmYWxzZVxuICAgICAgICAmJiBwcm9wcy5iZWhhdmlvciAhPT0gJ21vYmlsZSdcbiAgICAgICAgJiYgbGFzdERlc2t0b3BTdGF0ZSAhPT0gZmFsc2VcbiAgICAgICkgeyAvLyBmcm9tIHhzIHRvIGxnXG4gICAgICAgIGlmIChzaG93aW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgYXBwbHlQb3NpdGlvbigwKVxuICAgICAgICAgIGFwcGx5QmFja2Ryb3AoMClcbiAgICAgICAgICBjbGVhbnVwKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzaG93KGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnNpZGUsIChuZXdTaWRlLCBvbGRTaWRlKSA9PiB7XG4gICAgICBpZiAoJGxheW91dC5pbnN0YW5jZXNbIG9sZFNpZGUgXSA9PT0gaW5zdGFuY2UpIHtcbiAgICAgICAgJGxheW91dC5pbnN0YW5jZXNbIG9sZFNpZGUgXSA9IHZvaWQgMFxuICAgICAgICAkbGF5b3V0WyBvbGRTaWRlIF0uc3BhY2UgPSBmYWxzZVxuICAgICAgICAkbGF5b3V0WyBvbGRTaWRlIF0ub2Zmc2V0ID0gMFxuICAgICAgfVxuXG4gICAgICAkbGF5b3V0Lmluc3RhbmNlc1sgbmV3U2lkZSBdID0gaW5zdGFuY2VcbiAgICAgICRsYXlvdXRbIG5ld1NpZGUgXS5zaXplID0gc2l6ZS52YWx1ZVxuICAgICAgJGxheW91dFsgbmV3U2lkZSBdLnNwYWNlID0gb25MYXlvdXQudmFsdWVcbiAgICAgICRsYXlvdXRbIG5ld1NpZGUgXS5vZmZzZXQgPSBvZmZzZXQudmFsdWVcbiAgICB9KVxuXG4gICAgd2F0Y2goJGxheW91dC50b3RhbFdpZHRoLCAoKSA9PiB7XG4gICAgICBpZiAoJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZSB8fCBkb2N1bWVudC5xU2Nyb2xsUHJldmVudGVkICE9PSB0cnVlKSB7XG4gICAgICAgIHVwZGF0ZUJlbG93QnJlYWtwb2ludCgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKFxuICAgICAgKCkgPT4gcHJvcHMuYmVoYXZpb3IgKyBwcm9wcy5icmVha3BvaW50LFxuICAgICAgdXBkYXRlQmVsb3dCcmVha3BvaW50XG4gICAgKVxuXG4gICAgd2F0Y2goJGxheW91dC5pc0NvbnRhaW5lciwgdmFsID0+IHtcbiAgICAgIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgcHJldmVudEJvZHlTY3JvbGwodmFsICE9PSB0cnVlKVxuICAgICAgdmFsID09PSB0cnVlICYmIHVwZGF0ZUJlbG93QnJlYWtwb2ludCgpXG4gICAgfSlcblxuICAgIHdhdGNoKCRsYXlvdXQuc2Nyb2xsYmFyV2lkdGgsICgpID0+IHtcbiAgICAgIGFwcGx5UG9zaXRpb24oc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/IDAgOiB2b2lkIDApXG4gICAgfSlcblxuICAgIHdhdGNoKG9mZnNldCwgdmFsID0+IHsgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCB2YWwpIH0pXG5cbiAgICB3YXRjaChvbkxheW91dCwgdmFsID0+IHtcbiAgICAgIGVtaXQoJ29uTGF5b3V0JywgdmFsKVxuICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2gocmlnaHRTaWRlLCAoKSA9PiB7IGFwcGx5UG9zaXRpb24oKSB9KVxuXG4gICAgd2F0Y2goc2l6ZSwgdmFsID0+IHtcbiAgICAgIGFwcGx5UG9zaXRpb24oKVxuICAgICAgdXBkYXRlU2l6ZU9uTGF5b3V0KHByb3BzLm1pbmlUb092ZXJsYXksIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubWluaVRvT3ZlcmxheSwgdmFsID0+IHtcbiAgICAgIHVwZGF0ZVNpemVPbkxheW91dCh2YWwsIHNpemUudmFsdWUpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+ICRxLmxhbmcucnRsLCAoKSA9PiB7IGFwcGx5UG9zaXRpb24oKSB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubWluaSwgKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm5vTWluaUFuaW1hdGlvbikgcmV0dXJuXG4gICAgICBpZiAocHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBhbmltYXRlTWluaSgpXG4gICAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKGlzTWluaSwgdmFsID0+IHsgZW1pdCgnbWluaVN0YXRlJywgdmFsKSB9KVxuXG4gICAgZnVuY3Rpb24gYXBwbHlQb3NpdGlvbiAocG9zaXRpb24pIHtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBwb3NpdGlvbiA9IHNob3dpbmcudmFsdWUgPT09IHRydWUgPyAwIDogc2l6ZS52YWx1ZVxuICAgICAgICAgIGFwcGx5UG9zaXRpb24oc3RhdGVEaXJlY3Rpb24udmFsdWUgKiBwb3NpdGlvbilcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICYmIHJpZ2h0U2lkZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICYmIChiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWUgfHwgTWF0aC5hYnMocG9zaXRpb24pID09PSBzaXplLnZhbHVlKVxuICAgICAgICApIHtcbiAgICAgICAgICBwb3NpdGlvbiArPSBzdGF0ZURpcmVjdGlvbi52YWx1ZSAqICRsYXlvdXQuc2Nyb2xsYmFyV2lkdGgudmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIGZsYWdDb250ZW50UG9zaXRpb24udmFsdWUgPSBwb3NpdGlvblxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGx5QmFja2Ryb3AgKHgpIHtcbiAgICAgIGZsYWdCYWNrZHJvcEJnLnZhbHVlID0geFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFNjcm9sbGFibGUgKHYpIHtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IHYgPT09IHRydWVcbiAgICAgICAgPyAncmVtb3ZlJ1xuICAgICAgICA6ICgkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlICE9PSB0cnVlID8gJ2FkZCcgOiAnJylcblxuICAgICAgYWN0aW9uICE9PSAnJyAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdFsgYWN0aW9uIF0oJ3EtYm9keS0tZHJhd2VyLXRvZ2dsZScpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZU1pbmkgKCkge1xuICAgICAgdGltZXJNaW5pICE9PSBudWxsICYmIGNsZWFyVGltZW91dCh0aW1lck1pbmkpXG5cbiAgICAgIGlmICh2bS5wcm94eSAmJiB2bS5wcm94eS4kZWwpIHtcbiAgICAgICAgLy8gbmVlZCB0byBzcGVlZCBpdCB1cCBhbmQgYXBwbHkgaXQgaW1tZWRpYXRlbHksXG4gICAgICAgIC8vIGV2ZW4gZmFzdGVyIHRoYW4gVnVlJ3MgbmV4dFRpY2shXG4gICAgICAgIHZtLnByb3h5LiRlbC5jbGFzc0xpc3QuYWRkKCdxLWRyYXdlci0tbWluaS1hbmltYXRlJylcbiAgICAgIH1cblxuICAgICAgZmxhZ01pbmlBbmltYXRlLnZhbHVlID0gdHJ1ZVxuICAgICAgdGltZXJNaW5pID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRpbWVyTWluaSA9IG51bGxcbiAgICAgICAgZmxhZ01pbmlBbmltYXRlLnZhbHVlID0gZmFsc2VcbiAgICAgICAgaWYgKHZtICYmIHZtLnByb3h5ICYmIHZtLnByb3h5LiRlbCkge1xuICAgICAgICAgIHZtLnByb3h5LiRlbC5jbGFzc0xpc3QucmVtb3ZlKCdxLWRyYXdlci0tbWluaS1hbmltYXRlJylcbiAgICAgICAgfVxuICAgICAgfSwgMTUwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uT3BlblBhbiAoZXZ0KSB7XG4gICAgICBpZiAoc2hvd2luZy52YWx1ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgLy8gc29tZSBicm93c2VycyBtaWdodCBjYXB0dXJlIGFuZCB0cmlnZ2VyIHRoaXNcbiAgICAgICAgLy8gZXZlbiBpZiBEcmF3ZXIgaGFzIGp1c3QgYmVlbiBvcGVuZWQgKGJ1dCBhbmltYXRpb24gaXMgc3RpbGwgcGVuZGluZylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHdpZHRoID0gc2l6ZS52YWx1ZSxcbiAgICAgICAgcG9zaXRpb24gPSBiZXR3ZWVuKGV2dC5kaXN0YW5jZS54LCAwLCB3aWR0aClcblxuICAgICAgaWYgKGV2dC5pc0ZpbmFsID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IG9wZW5lZCA9IHBvc2l0aW9uID49IE1hdGgubWluKDc1LCB3aWR0aClcblxuICAgICAgICBpZiAob3BlbmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgc2hvdygpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICAgICAgICBhcHBseUJhY2tkcm9wKDApXG4gICAgICAgICAgYXBwbHlQb3NpdGlvbihzdGF0ZURpcmVjdGlvbi52YWx1ZSAqIHdpZHRoKVxuICAgICAgICB9XG5cbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPSBmYWxzZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgYXBwbHlQb3NpdGlvbihcbiAgICAgICAgKCRxLmxhbmcucnRsID09PSB0cnVlID8gcmlnaHRTaWRlLnZhbHVlICE9PSB0cnVlIDogcmlnaHRTaWRlLnZhbHVlKVxuICAgICAgICAgID8gTWF0aC5tYXgod2lkdGggLSBwb3NpdGlvbiwgMClcbiAgICAgICAgICA6IE1hdGgubWluKDAsIHBvc2l0aW9uIC0gd2lkdGgpXG4gICAgICApXG4gICAgICBhcHBseUJhY2tkcm9wKFxuICAgICAgICBiZXR3ZWVuKHBvc2l0aW9uIC8gd2lkdGgsIDAsIDEpXG4gICAgICApXG5cbiAgICAgIGlmIChldnQuaXNGaXJzdCA9PT0gdHJ1ZSkge1xuICAgICAgICBmbGFnUGFubmluZy52YWx1ZSA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNsb3NlUGFuIChldnQpIHtcbiAgICAgIGlmIChzaG93aW5nLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIC8vIHNvbWUgYnJvd3NlcnMgbWlnaHQgY2FwdHVyZSBhbmQgdHJpZ2dlciB0aGlzXG4gICAgICAgIC8vIGV2ZW4gaWYgRHJhd2VyIGhhcyBqdXN0IGJlZW4gY2xvc2VkIChidXQgYW5pbWF0aW9uIGlzIHN0aWxsIHBlbmRpbmcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdFxuICAgICAgICB3aWR0aCA9IHNpemUudmFsdWUsXG4gICAgICAgIGRpciA9IGV2dC5kaXJlY3Rpb24gPT09IHByb3BzLnNpZGUsXG4gICAgICAgIHBvc2l0aW9uID0gKCRxLmxhbmcucnRsID09PSB0cnVlID8gZGlyICE9PSB0cnVlIDogZGlyKVxuICAgICAgICAgID8gYmV0d2VlbihldnQuZGlzdGFuY2UueCwgMCwgd2lkdGgpXG4gICAgICAgICAgOiAwXG5cbiAgICAgIGlmIChldnQuaXNGaW5hbCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBvcGVuZWQgPSBNYXRoLmFicyhwb3NpdGlvbikgPCBNYXRoLm1pbig3NSwgd2lkdGgpXG5cbiAgICAgICAgaWYgKG9wZW5lZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICAgICAgYXBwbHlCYWNrZHJvcCgxKVxuICAgICAgICAgIGFwcGx5UG9zaXRpb24oMClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBoaWRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGZsYWdQYW5uaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGFwcGx5UG9zaXRpb24oc3RhdGVEaXJlY3Rpb24udmFsdWUgKiBwb3NpdGlvbilcbiAgICAgIGFwcGx5QmFja2Ryb3AoYmV0d2VlbigxIC0gcG9zaXRpb24gLyB3aWR0aCwgMCwgMSkpXG5cbiAgICAgIGlmIChldnQuaXNGaXJzdCA9PT0gdHJ1ZSkge1xuICAgICAgICBmbGFnUGFubmluZy52YWx1ZSA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICAgIHByZXZlbnRCb2R5U2Nyb2xsKGZhbHNlKVxuICAgICAgc2V0U2Nyb2xsYWJsZSh0cnVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxheW91dCAocHJvcCwgdmFsKSB7XG4gICAgICAkbGF5b3V0LnVwZGF0ZShwcm9wcy5zaWRlLCBwcm9wLCB2YWwpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTG9jYWwgKHByb3AsIHZhbCkge1xuICAgICAgaWYgKHByb3AudmFsdWUgIT09IHZhbCkge1xuICAgICAgICBwcm9wLnZhbHVlID0gdmFsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2l6ZU9uTGF5b3V0IChtaW5pVG9PdmVybGF5LCBzaXplKSB7XG4gICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCBtaW5pVG9PdmVybGF5ID09PSB0cnVlID8gcHJvcHMubWluaVdpZHRoIDogc2l6ZSlcbiAgICB9XG5cbiAgICAkbGF5b3V0Lmluc3RhbmNlc1sgcHJvcHMuc2lkZSBdID0gaW5zdGFuY2VcbiAgICB1cGRhdGVTaXplT25MYXlvdXQocHJvcHMubWluaVRvT3ZlcmxheSwgc2l6ZS52YWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgb25MYXlvdXQudmFsdWUpXG4gICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCBvZmZzZXQudmFsdWUpXG5cbiAgICBpZiAoXG4gICAgICBwcm9wcy5zaG93SWZBYm92ZSA9PT0gdHJ1ZVxuICAgICAgJiYgcHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZVxuICAgICAgJiYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgJiYgcHJvcHNbICdvblVwZGF0ZTptb2RlbFZhbHVlJyBdICE9PSB2b2lkIDBcbiAgICApIHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgZW1pdCgnb25MYXlvdXQnLCBvbkxheW91dC52YWx1ZSlcbiAgICAgIGVtaXQoJ21pbmlTdGF0ZScsIGlzTWluaS52YWx1ZSlcblxuICAgICAgbGFzdERlc2t0b3BTdGF0ZSA9IHByb3BzLnNob3dJZkFib3ZlID09PSB0cnVlXG5cbiAgICAgIGNvbnN0IGZuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBzaG93aW5nLnZhbHVlID09PSB0cnVlID8gaGFuZGxlU2hvdyA6IGhhbmRsZUhpZGVcbiAgICAgICAgYWN0aW9uKGZhbHNlLCB0cnVlKVxuICAgICAgfVxuXG4gICAgICBpZiAoJGxheW91dC50b3RhbFdpZHRoLnZhbHVlICE9PSAwKSB7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IGFsbCBjb21wdXRlZCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vIGhhdmUgYmVlbiB1cGRhdGVkIGJlZm9yZSBjYWxsaW5nIGhhbmRsZVNob3cvaGFuZGxlSGlkZSgpXG4gICAgICAgIG5leHRUaWNrKGZuKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXIgPSB3YXRjaCgkbGF5b3V0LnRvdGFsV2lkdGgsICgpID0+IHtcbiAgICAgICAgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXIoKVxuICAgICAgICBsYXlvdXRUb3RhbFdpZHRoV2F0Y2hlciA9IHZvaWQgMFxuXG4gICAgICAgIGlmIChzaG93aW5nLnZhbHVlID09PSBmYWxzZSAmJiBwcm9wcy5zaG93SWZBYm92ZSA9PT0gdHJ1ZSAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgc2hvdyhmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmbigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBsYXlvdXRUb3RhbFdpZHRoV2F0Y2hlciAhPT0gdm9pZCAwICYmIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyKClcblxuICAgICAgaWYgKHRpbWVyTWluaSAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJNaW5pKVxuICAgICAgICB0aW1lck1pbmkgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgY2xlYW51cCgpXG5cbiAgICAgIGlmICgkbGF5b3V0Lmluc3RhbmNlc1sgcHJvcHMuc2lkZSBdID09PSBpbnN0YW5jZSkge1xuICAgICAgICAkbGF5b3V0Lmluc3RhbmNlc1sgcHJvcHMuc2lkZSBdID0gdm9pZCAwXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc2l6ZScsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0JywgMClcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIGZhbHNlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBbXVxuXG4gICAgICBpZiAoYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHByb3BzLm5vU3dpcGVPcGVuID09PSBmYWxzZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICAgIHdpdGhEaXJlY3RpdmVzKFxuICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICBrZXk6ICdvcGVuJyxcbiAgICAgICAgICAgICAgY2xhc3M6IGBxLWRyYXdlcl9fb3BlbmVyIGZpeGVkLSR7IHByb3BzLnNpZGUgfWAsXG4gICAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBvcGVuRGlyZWN0aXZlLnZhbHVlXG4gICAgICAgICAgKVxuICAgICAgICApXG5cbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBoRGlyKFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogJ2JhY2tkcm9wJyxcbiAgICAgICAgICAgICAgY2xhc3M6IGJhY2tkcm9wQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgIHN0eWxlOiBiYWNrZHJvcFN0eWxlLnZhbHVlLFxuICAgICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGhpZGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgICAnYmFja2Ryb3AnLFxuICAgICAgICAgICAgcHJvcHMubm9Td2lwZUJhY2tkcm9wICE9PSB0cnVlICYmIHNob3dpbmcudmFsdWUgPT09IHRydWUsXG4gICAgICAgICAgICAoKSA9PiBiYWNrZHJvcENsb3NlRGlyZWN0aXZlLnZhbHVlXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1pbmkgPSBpc01pbmkudmFsdWUgPT09IHRydWUgJiYgc2xvdHMubWluaSAhPT0gdm9pZCAwXG4gICAgICBjb25zdCBjb250ZW50ID0gW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgICAga2V5OiAnJyArIG1pbmksIC8vIHJlcXVpcmVkIG90aGVyd2lzZSBWdWUgd2lsbCBub3QgZGlmZiBjb3JyZWN0bHlcbiAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgY29udGVudENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgYXR0cnMuY2xhc3NcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG1pbmkgPT09IHRydWVcbiAgICAgICAgICA/IHNsb3RzLm1pbmkoKVxuICAgICAgICAgIDogaFNsb3Qoc2xvdHMuZGVmYXVsdClcbiAgICAgICAgKVxuICAgICAgXVxuXG4gICAgICBpZiAocHJvcHMuZWxldmF0ZWQgPT09IHRydWUgJiYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250ZW50LnB1c2goXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWxheW91dF9fc2hhZG93IGFic29sdXRlLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIG5vLXBvaW50ZXItZXZlbnRzJ1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgaERpcihcbiAgICAgICAgICAnYXNpZGUnLFxuICAgICAgICAgIHsgcmVmOiAnY29udGVudCcsIGNsYXNzOiBjbGFzc2VzLnZhbHVlLCBzdHlsZTogc3R5bGUudmFsdWUgfSxcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICdjb250ZW50Y2xvc2UnLFxuICAgICAgICAgIHByb3BzLm5vU3dpcGVDbG9zZSAhPT0gdHJ1ZSAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWUsXG4gICAgICAgICAgKCkgPT4gY29udGVudENsb3NlRGlyZWN0aXZlLnZhbHVlXG4gICAgICAgIClcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWRyYXdlci1jb250YWluZXInIH0sIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkLCBwcm92aWRlLCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgcGFnZUNvbnRhaW5lcktleSwgbGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVBhZ2VDb250YWluZXInLFxuXG4gIHNldHVwIChfLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgZW1wdHlSZW5kZXJGbilcbiAgICBpZiAoJGxheW91dCA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgICAgY29uc29sZS5lcnJvcignUVBhZ2VDb250YWluZXIgbmVlZHMgdG8gYmUgY2hpbGQgb2YgUUxheW91dCcpXG4gICAgICByZXR1cm4gZW1wdHlSZW5kZXJGblxuICAgIH1cblxuICAgIHByb3ZpZGUocGFnZUNvbnRhaW5lcktleSwgdHJ1ZSlcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY3NzID0ge31cblxuICAgICAgaWYgKCRsYXlvdXQuaGVhZGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzcy5wYWRkaW5nVG9wID0gYCR7ICRsYXlvdXQuaGVhZGVyLnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKCRsYXlvdXQucmlnaHQuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzWyBgcGFkZGluZyR7ICRxLmxhbmcucnRsID09PSB0cnVlID8gJ0xlZnQnIDogJ1JpZ2h0JyB9YCBdID0gYCR7ICRsYXlvdXQucmlnaHQuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAoJGxheW91dC5mb290ZXIuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzLnBhZGRpbmdCb3R0b20gPSBgJHsgJGxheW91dC5mb290ZXIuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAoJGxheW91dC5sZWZ0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgYHBhZGRpbmckeyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdSaWdodCcgOiAnTGVmdCcgfWAgXSA9IGAkeyAkbGF5b3V0LmxlZnQuc2l6ZSB9cHhgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHtcbiAgICAgIGNsYXNzOiAncS1wYWdlLWNvbnRhaW5lcicsXG4gICAgICBzdHlsZTogc3R5bGUudmFsdWVcbiAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IHdhdGNoLCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGdldFNjcm9sbFRhcmdldCwgZ2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbiwgZ2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgbGlzdGVuT3B0cywgbm9vcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuXG5jb25zdCB7IHBhc3NpdmUgfSA9IGxpc3Rlbk9wdHNcbmNvbnN0IGF4aXNWYWx1ZXMgPSBbICdib3RoJywgJ2hvcml6b250YWwnLCAndmVydGljYWwnIF1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTY3JvbGxPYnNlcnZlcicsXG5cbiAgcHJvcHM6IHtcbiAgICBheGlzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gYXhpc1ZhbHVlcy5pbmNsdWRlcyh2KSxcbiAgICAgIGRlZmF1bHQ6ICd2ZXJ0aWNhbCdcbiAgICB9LFxuXG4gICAgZGVib3VuY2U6IFsgU3RyaW5nLCBOdW1iZXIgXSxcblxuICAgIHNjcm9sbFRhcmdldDoge1xuICAgICAgZGVmYXVsdDogdm9pZCAwXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdzY3JvbGwnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IHNjcm9sbCA9IHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfSxcblxuICAgICAgZGlyZWN0aW9uOiAnZG93bicsXG4gICAgICBkaXJlY3Rpb25DaGFuZ2VkOiBmYWxzZSxcblxuICAgICAgZGVsdGE6IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9LFxuXG4gICAgICBpbmZsZWN0aW9uUG9pbnQ6IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGNsZWFyVGltZXIgPSBudWxsLCBsb2NhbFNjcm9sbFRhcmdldCwgcGFyZW50RWxcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnNjcm9sbFRhcmdldCwgKCkgPT4ge1xuICAgICAgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgICAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZW1pdEV2ZW50ICgpIHtcbiAgICAgIGNsZWFyVGltZXIgIT09IG51bGwgJiYgY2xlYXJUaW1lcigpXG5cbiAgICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KDAsIGdldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQpKVxuICAgICAgY29uc3QgbGVmdCA9IGdldEhvcml6b250YWxTY3JvbGxQb3NpdGlvbihsb2NhbFNjcm9sbFRhcmdldClcblxuICAgICAgY29uc3QgZGVsdGEgPSB7XG4gICAgICAgIHRvcDogdG9wIC0gc2Nyb2xsLnBvc2l0aW9uLnRvcCxcbiAgICAgICAgbGVmdDogbGVmdCAtIHNjcm9sbC5wb3NpdGlvbi5sZWZ0XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKHByb3BzLmF4aXMgPT09ICd2ZXJ0aWNhbCcgJiYgZGVsdGEudG9wID09PSAwKVxuICAgICAgICB8fCAocHJvcHMuYXhpcyA9PT0gJ2hvcml6b250YWwnICYmIGRlbHRhLmxlZnQgPT09IDApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1ckRpciA9IE1hdGguYWJzKGRlbHRhLnRvcCkgPj0gTWF0aC5hYnMoZGVsdGEubGVmdClcbiAgICAgICAgPyAoZGVsdGEudG9wIDwgMCA/ICd1cCcgOiAnZG93bicpXG4gICAgICAgIDogKGRlbHRhLmxlZnQgPCAwID8gJ2xlZnQnIDogJ3JpZ2h0JylcblxuICAgICAgc2Nyb2xsLnBvc2l0aW9uID0geyB0b3AsIGxlZnQgfVxuICAgICAgc2Nyb2xsLmRpcmVjdGlvbkNoYW5nZWQgPSBzY3JvbGwuZGlyZWN0aW9uICE9PSBjdXJEaXJcbiAgICAgIHNjcm9sbC5kZWx0YSA9IGRlbHRhXG5cbiAgICAgIGlmIChzY3JvbGwuZGlyZWN0aW9uQ2hhbmdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBzY3JvbGwuZGlyZWN0aW9uID0gY3VyRGlyXG4gICAgICAgIHNjcm9sbC5pbmZsZWN0aW9uUG9pbnQgPSBzY3JvbGwucG9zaXRpb25cbiAgICAgIH1cblxuICAgICAgZW1pdCgnc2Nyb2xsJywgeyAuLi5zY3JvbGwgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25maWd1cmVTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgbG9jYWxTY3JvbGxUYXJnZXQgPSBnZXRTY3JvbGxUYXJnZXQocGFyZW50RWwsIHByb3BzLnNjcm9sbFRhcmdldClcbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRyaWdnZXIsIHBhc3NpdmUpXG4gICAgICB0cmlnZ2VyKHRydWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5jb25maWd1cmVTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgaWYgKGxvY2FsU2Nyb2xsVGFyZ2V0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdHJpZ2dlciwgcGFzc2l2ZSlcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQgPSB2b2lkIDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyIChpbW1lZGlhdGVseSkge1xuICAgICAgaWYgKGltbWVkaWF0ZWx5ID09PSB0cnVlIHx8IHByb3BzLmRlYm91bmNlID09PSAwIHx8IHByb3BzLmRlYm91bmNlID09PSAnMCcpIHtcbiAgICAgICAgZW1pdEV2ZW50KClcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGNsZWFyVGltZXIgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgWyB0aW1lciwgZm4gXSA9IHByb3BzLmRlYm91bmNlXG4gICAgICAgICAgPyBbIHNldFRpbWVvdXQoZW1pdEV2ZW50LCBwcm9wcy5kZWJvdW5jZSksIGNsZWFyVGltZW91dCBdXG4gICAgICAgICAgOiBbIHJlcXVlc3RBbmltYXRpb25GcmFtZShlbWl0RXZlbnQpLCBjYW5jZWxBbmltYXRpb25GcmFtZSBdXG5cbiAgICAgICAgY2xlYXJUaW1lciA9ICgpID0+IHtcbiAgICAgICAgICBmbih0aW1lcilcbiAgICAgICAgICBjbGVhclRpbWVyID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIHdhdGNoKCgpID0+IHByb3h5LiRxLmxhbmcucnRsLCBlbWl0RXZlbnQpXG5cbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgcGFyZW50RWwgPSBwcm94eS4kZWwucGFyZW50Tm9kZVxuICAgICAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGNsZWFyVGltZXIgIT09IG51bGwgJiYgY2xlYXJUaW1lcigpXG4gICAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIHRyaWdnZXIsXG4gICAgICBnZXRQb3NpdGlvbjogKCkgPT4gc2Nyb2xsXG4gICAgfSlcblxuICAgIHJldHVybiBub29wXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIHJlYWN0aXZlLCBjb21wdXRlZCwgd2F0Y2gsIHByb3ZpZGUsIG9uVW5tb3VudGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGlzUnVudGltZVNzclByZUh5ZHJhdGlvbiB9IGZyb20gJy4uLy4uL3BsdWdpbnMvcGxhdGZvcm0vUGxhdGZvcm0uanMnXG5cbmltcG9ydCBRU2Nyb2xsT2JzZXJ2ZXIgZnJvbSAnLi4vc2Nyb2xsLW9ic2VydmVyL1FTY3JvbGxPYnNlcnZlci5qcydcbmltcG9ydCBRUmVzaXplT2JzZXJ2ZXIgZnJvbSAnLi4vcmVzaXplLW9ic2VydmVyL1FSZXNpemVPYnNlcnZlci5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBnZXRTY3JvbGxiYXJXaWR0aCB9IGZyb20gJy4uLy4uL3V0aWxzL3Njcm9sbC5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FMYXlvdXQnLFxuXG4gIHByb3BzOiB7XG4gICAgY29udGFpbmVyOiBCb29sZWFuLFxuICAgIHZpZXc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdoaGggbHByIGZmZicsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gL14oaHxsKWgoaHxyKSBscHIgKGZ8bClmKGZ8cikkLy50ZXN0KHYudG9Mb3dlckNhc2UoKSlcbiAgICB9LFxuXG4gICAgb25TY3JvbGw6IEZ1bmN0aW9uLFxuICAgIG9uU2Nyb2xsSGVpZ2h0OiBGdW5jdGlvbixcbiAgICBvblJlc2l6ZTogRnVuY3Rpb25cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcblxuICAgIC8vIHBhZ2UgcmVsYXRlZFxuICAgIGNvbnN0IGhlaWdodCA9IHJlZigkcS5zY3JlZW4uaGVpZ2h0KVxuICAgIGNvbnN0IHdpZHRoID0gcmVmKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSA/IDAgOiAkcS5zY3JlZW4ud2lkdGgpXG4gICAgY29uc3Qgc2Nyb2xsID0gcmVmKHsgcG9zaXRpb246IDAsIGRpcmVjdGlvbjogJ2Rvd24nLCBpbmZsZWN0aW9uUG9pbnQ6IDAgfSlcblxuICAgIC8vIGNvbnRhaW5lciBvbmx5IHByb3BcbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSByZWYoMClcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHJlZihpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24udmFsdWUgPT09IHRydWUgPyAwIDogZ2V0U2Nyb2xsYmFyV2lkdGgoKSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtbGF5b3V0IHEtbGF5b3V0LS0nXG4gICAgICArIChwcm9wcy5jb250YWluZXIgPT09IHRydWUgPyAnY29udGFpbmVyaXplZCcgOiAnc3RhbmRhcmQnKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuY29udGFpbmVyID09PSBmYWxzZVxuICAgICAgICA/IHsgbWluSGVpZ2h0OiAkcS5zY3JlZW4uaGVpZ2h0ICsgJ3B4JyB9XG4gICAgICAgIDogbnVsbFxuICAgICkpXG5cbiAgICAvLyB1c2VkIGJ5IGNvbnRhaW5lciBvbmx5XG4gICAgY29uc3QgdGFyZ2V0U3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBzY3JvbGxiYXJXaWR0aC52YWx1ZSAhPT0gMFxuICAgICAgICA/IHsgWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdsZWZ0JyA6ICdyaWdodCcgXTogYCR7IHNjcm9sbGJhcldpZHRoLnZhbHVlIH1weGAgfVxuICAgICAgICA6IG51bGxcbiAgICApKVxuXG4gICAgY29uc3QgdGFyZ2V0Q2hpbGRTdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNjcm9sbGJhcldpZHRoLnZhbHVlICE9PSAwXG4gICAgICAgID8ge1xuICAgICAgICAgICAgWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgXTogMCxcbiAgICAgICAgICAgIFsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF06IGAtJHsgc2Nyb2xsYmFyV2lkdGgudmFsdWUgfXB4YCxcbiAgICAgICAgICAgIHdpZHRoOiBgY2FsYygxMDAlICsgJHsgc2Nyb2xsYmFyV2lkdGgudmFsdWUgfXB4KWBcbiAgICAgICAgICB9XG4gICAgICAgIDogbnVsbFxuICAgICkpXG5cbiAgICBmdW5jdGlvbiBvblBhZ2VTY3JvbGwgKGRhdGEpIHtcbiAgICAgIGlmIChwcm9wcy5jb250YWluZXIgPT09IHRydWUgfHwgZG9jdW1lbnQucVNjcm9sbFByZXZlbnRlZCAhPT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBpbmZvID0ge1xuICAgICAgICAgIHBvc2l0aW9uOiBkYXRhLnBvc2l0aW9uLnRvcCxcbiAgICAgICAgICBkaXJlY3Rpb246IGRhdGEuZGlyZWN0aW9uLFxuICAgICAgICAgIGRpcmVjdGlvbkNoYW5nZWQ6IGRhdGEuZGlyZWN0aW9uQ2hhbmdlZCxcbiAgICAgICAgICBpbmZsZWN0aW9uUG9pbnQ6IGRhdGEuaW5mbGVjdGlvblBvaW50LnRvcCxcbiAgICAgICAgICBkZWx0YTogZGF0YS5kZWx0YS50b3BcbiAgICAgICAgfVxuXG4gICAgICAgIHNjcm9sbC52YWx1ZSA9IGluZm9cbiAgICAgICAgcHJvcHMub25TY3JvbGwgIT09IHZvaWQgMCAmJiBlbWl0KCdzY3JvbGwnLCBpbmZvKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUGFnZVJlc2l6ZSAoZGF0YSkge1xuICAgICAgY29uc3QgeyBoZWlnaHQ6IG5ld0hlaWdodCwgd2lkdGg6IG5ld1dpZHRoIH0gPSBkYXRhXG4gICAgICBsZXQgcmVzaXplZCA9IGZhbHNlXG5cbiAgICAgIGlmIChoZWlnaHQudmFsdWUgIT09IG5ld0hlaWdodCkge1xuICAgICAgICByZXNpemVkID0gdHJ1ZVxuICAgICAgICBoZWlnaHQudmFsdWUgPSBuZXdIZWlnaHRcbiAgICAgICAgcHJvcHMub25TY3JvbGxIZWlnaHQgIT09IHZvaWQgMCAmJiBlbWl0KCdzY3JvbGxIZWlnaHQnLCBuZXdIZWlnaHQpXG4gICAgICAgIHVwZGF0ZVNjcm9sbGJhcldpZHRoKClcbiAgICAgIH1cbiAgICAgIGlmICh3aWR0aC52YWx1ZSAhPT0gbmV3V2lkdGgpIHtcbiAgICAgICAgcmVzaXplZCA9IHRydWVcbiAgICAgICAgd2lkdGgudmFsdWUgPSBuZXdXaWR0aFxuICAgICAgfVxuXG4gICAgICBpZiAocmVzaXplZCA9PT0gdHJ1ZSAmJiBwcm9wcy5vblJlc2l6ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGVtaXQoJ3Jlc2l6ZScsIGRhdGEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Db250YWluZXJSZXNpemUgKHsgaGVpZ2h0IH0pIHtcbiAgICAgIGlmIChjb250YWluZXJIZWlnaHQudmFsdWUgIT09IGhlaWdodCkge1xuICAgICAgICBjb250YWluZXJIZWlnaHQudmFsdWUgPSBoZWlnaHRcbiAgICAgICAgdXBkYXRlU2Nyb2xsYmFyV2lkdGgoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbGJhcldpZHRoICgpIHtcbiAgICAgIGlmIChwcm9wcy5jb250YWluZXIgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBoZWlnaHQudmFsdWUgPiBjb250YWluZXJIZWlnaHQudmFsdWVcbiAgICAgICAgICA/IGdldFNjcm9sbGJhcldpZHRoKClcbiAgICAgICAgICA6IDBcblxuICAgICAgICBpZiAoc2Nyb2xsYmFyV2lkdGgudmFsdWUgIT09IHdpZHRoKSB7XG4gICAgICAgICAgc2Nyb2xsYmFyV2lkdGgudmFsdWUgPSB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFuaW1hdGVUaW1lciA9IG51bGxcblxuICAgIGNvbnN0ICRsYXlvdXQgPSB7XG4gICAgICBpbnN0YW5jZXM6IHt9LFxuICAgICAgdmlldzogY29tcHV0ZWQoKCkgPT4gcHJvcHMudmlldyksXG4gICAgICBpc0NvbnRhaW5lcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMuY29udGFpbmVyKSxcblxuICAgICAgcm9vdFJlZixcblxuICAgICAgaGVpZ2h0LFxuICAgICAgY29udGFpbmVySGVpZ2h0LFxuICAgICAgc2Nyb2xsYmFyV2lkdGgsXG4gICAgICB0b3RhbFdpZHRoOiBjb21wdXRlZCgoKSA9PiB3aWR0aC52YWx1ZSArIHNjcm9sbGJhcldpZHRoLnZhbHVlKSxcblxuICAgICAgcm93czogY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICBjb25zdCByb3dzID0gcHJvcHMudmlldy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJylcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3A6IHJvd3NbIDAgXS5zcGxpdCgnJyksXG4gICAgICAgICAgbWlkZGxlOiByb3dzWyAxIF0uc3BsaXQoJycpLFxuICAgICAgICAgIGJvdHRvbTogcm93c1sgMiBdLnNwbGl0KCcnKVxuICAgICAgICB9XG4gICAgICB9KSxcblxuICAgICAgaGVhZGVyOiByZWFjdGl2ZSh7IHNpemU6IDAsIG9mZnNldDogMCwgc3BhY2U6IGZhbHNlIH0pLFxuICAgICAgcmlnaHQ6IHJlYWN0aXZlKHsgc2l6ZTogMzAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcbiAgICAgIGZvb3RlcjogcmVhY3RpdmUoeyBzaXplOiAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcbiAgICAgIGxlZnQ6IHJlYWN0aXZlKHsgc2l6ZTogMzAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcblxuICAgICAgc2Nyb2xsLFxuXG4gICAgICBhbmltYXRlICgpIHtcbiAgICAgICAgaWYgKGFuaW1hdGVUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChhbmltYXRlVGltZXIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdxLWJvZHktLWxheW91dC1hbmltYXRlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW1hdGVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGFuaW1hdGVUaW1lciA9IG51bGxcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3EtYm9keS0tbGF5b3V0LWFuaW1hdGUnKVxuICAgICAgICB9LCAxNTUpXG4gICAgICB9LFxuXG4gICAgICB1cGRhdGUgKHBhcnQsIHByb3AsIHZhbCkge1xuICAgICAgICAkbGF5b3V0WyBwYXJ0IF1bIHByb3AgXSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIHByb3ZpZGUobGF5b3V0S2V5LCAkbGF5b3V0KVxuXG4gICAgLy8gcHJldmVudCBzY3JvbGxiYXIgZmxpY2tlciB3aGlsZSByZXNpemluZyB3aW5kb3cgaGVpZ2h0XG4gICAgLy8gaWYgbm8gcGFnZSBzY3JvbGxiYXIgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKF9fUVVBU0FSX1NTUl9TRVJWRVJfXyAhPT0gdHJ1ZSAmJiBnZXRTY3JvbGxiYXJXaWR0aCgpID4gMCkge1xuICAgICAgbGV0IHRpbWVyID0gbnVsbFxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5ib2R5XG5cbiAgICAgIGZ1bmN0aW9uIHJlc3RvcmVTY3JvbGxiYXIgKCkge1xuICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1zY3JvbGxiYXInKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBoaWRlU2Nyb2xsYmFyICgpIHtcbiAgICAgICAgaWYgKHRpbWVyID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gaWYgaXQgaGFzIG5vIHNjcm9sbGJhciB0aGVuIHRoZXJlJ3Mgbm90aGluZyB0byBkb1xuXG4gICAgICAgICAgaWYgKGVsLnNjcm9sbEhlaWdodCA+ICRxLnNjcmVlbi5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUtc2Nyb2xsYmFyJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIH1cblxuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQocmVzdG9yZVNjcm9sbGJhciwgMzAwKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxFdmVudCAoYWN0aW9uKSB7XG4gICAgICAgIGlmICh0aW1lciAhPT0gbnVsbCAmJiBhY3Rpb24gPT09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICAgIHJlc3RvcmVTY3JvbGxiYXIoKVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93WyBgJHsgYWN0aW9uIH1FdmVudExpc3RlbmVyYCBdKCdyZXNpemUnLCBoaWRlU2Nyb2xsYmFyKVxuICAgICAgfVxuXG4gICAgICB3YXRjaChcbiAgICAgICAgKCkgPT4gKHByb3BzLmNvbnRhaW5lciAhPT0gdHJ1ZSA/ICdhZGQnIDogJ3JlbW92ZScpLFxuICAgICAgICB1cGRhdGVTY3JvbGxFdmVudFxuICAgICAgKVxuXG4gICAgICBwcm9wcy5jb250YWluZXIgIT09IHRydWUgJiYgdXBkYXRlU2Nyb2xsRXZlbnQoJ2FkZCcpXG5cbiAgICAgIG9uVW5tb3VudGVkKCgpID0+IHtcbiAgICAgICAgdXBkYXRlU2Nyb2xsRXZlbnQoJ3JlbW92ZScpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBbXG4gICAgICAgIGgoUVNjcm9sbE9ic2VydmVyLCB7IG9uU2Nyb2xsOiBvblBhZ2VTY3JvbGwgfSksXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7IG9uUmVzaXplOiBvblBhZ2VSZXNpemUgfSlcbiAgICAgIF0pXG5cbiAgICAgIGNvbnN0IGxheW91dCA9IGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgcmVmOiBwcm9wcy5jb250YWluZXIgPT09IHRydWUgPyB2b2lkIDAgOiByb290UmVmLFxuICAgICAgICB0YWJpbmRleDogLTFcbiAgICAgIH0sIGNvbnRlbnQpXG5cbiAgICAgIGlmIChwcm9wcy5jb250YWluZXIgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0LWNvbnRhaW5lciBvdmVyZmxvdy1oaWRkZW4nLFxuICAgICAgICAgIHJlZjogcm9vdFJlZlxuICAgICAgICB9LCBbXG4gICAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHsgb25SZXNpemU6IG9uQ29udGFpbmVyUmVzaXplIH0pLFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAnYWJzb2x1dGUtZnVsbCcsXG4gICAgICAgICAgICBzdHlsZTogdGFyZ2V0U3R5bGUudmFsdWVcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAnc2Nyb2xsJyxcbiAgICAgICAgICAgICAgc3R5bGU6IHRhcmdldENoaWxkU3R5bGUudmFsdWVcbiAgICAgICAgICAgIH0sIFsgbGF5b3V0IF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxheW91dFxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGNyZWF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgY2xvc2VQb3J0YWxzLCBnZXRQb3J0YWxQcm94eSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcG9ydGFsLmpzJ1xuaW1wb3J0IHsgaXNLZXlDb2RlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9rZXktY29tcG9zaXRpb24uanMnXG5pbXBvcnQgZ2V0U1NSUHJvcHMgZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9ub29wLXNzci1kaXJlY3RpdmUtdHJhbnNmb3JtLmpzJ1xuXG4vKlxuICogZGVwdGhcbiAqICAgPCAwICAtLT4gY2xvc2UgYWxsIGNoYWluXG4gKiAgIDAgICAgLS0+IGRpc2FibGVkXG4gKiAgID4gMCAgLS0+IGNsb3NlIGNoYWluIHVwIHRvIE4gcGFyZW50XG4gKi9cblxuZnVuY3Rpb24gZ2V0RGVwdGggKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIGNvbnN0IGRlcHRoID0gcGFyc2VJbnQodmFsdWUsIDEwKVxuICByZXR1cm4gaXNOYU4oZGVwdGgpID8gMCA6IGRlcHRoXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURpcmVjdGl2ZShfX1FVQVNBUl9TU1JfU0VSVkVSX19cbiAgPyB7IG5hbWU6ICdjbG9zZS1wb3B1cCcsIGdldFNTUlByb3BzIH1cbiAgOiB7XG4gICAgICBuYW1lOiAnY2xvc2UtcG9wdXAnLFxuXG4gICAgICBiZWZvcmVNb3VudCAoZWwsIHsgdmFsdWUgfSkge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgZGVwdGg6IGdldERlcHRoKHZhbHVlKSxcblxuICAgICAgICAgIGhhbmRsZXIgKGV2dCkge1xuICAgICAgICAgICAgLy8gYWxsb3cgQGNsaWNrIHRvIGJlIGVtaXR0ZWRcbiAgICAgICAgICAgIGN0eC5kZXB0aCAhPT0gMCAmJiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJveHkgPSBnZXRQb3J0YWxQcm94eShlbClcbiAgICAgICAgICAgICAgaWYgKHByb3h5ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBjbG9zZVBvcnRhbHMocHJveHksIGV2dCwgY3R4LmRlcHRoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBoYW5kbGVyS2V5IChldnQpIHtcbiAgICAgICAgICAgIGlzS2V5Q29kZShldnQsIDEzKSA9PT0gdHJ1ZSAmJiBjdHguaGFuZGxlcihldnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWwuX19xY2xvc2Vwb3B1cCA9IGN0eFxuXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3R4LmhhbmRsZXIpXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgY3R4LmhhbmRsZXJLZXkpXG4gICAgICB9LFxuXG4gICAgICB1cGRhdGVkIChlbCwgeyB2YWx1ZSwgb2xkVmFsdWUgfSkge1xuICAgICAgICBpZiAodmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgZWwuX19xY2xvc2Vwb3B1cC5kZXB0aCA9IGdldERlcHRoKHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBiZWZvcmVVbm1vdW50IChlbCkge1xuICAgICAgICBjb25zdCBjdHggPSBlbC5fX3FjbG9zZXBvcHVwXG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3R4LmhhbmRsZXIpXG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgY3R4LmhhbmRsZXJLZXkpXG4gICAgICAgIGRlbGV0ZSBlbC5fX3FjbG9zZXBvcHVwXG4gICAgICB9XG4gICAgfVxuKVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuXG5jb25zdCBkZWNvZGVDYWNoZSA9IHt9XG5cbmZ1bmN0aW9uIGdldERlY29kZUNhY2hlIChleGNsdWRlKSB7XG4gIGxldCBjYWNoZSA9IGRlY29kZUNhY2hlW2V4Y2x1ZGVdXG4gIGlmIChjYWNoZSkgeyByZXR1cm4gY2FjaGUgfVxuXG4gIGNhY2hlID0gZGVjb2RlQ2FjaGVbZXhjbHVkZV0gPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTI4OyBpKyspIHtcbiAgICBjb25zdCBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSlcbiAgICBjYWNoZS5wdXNoKGNoKVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBleGNsdWRlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2ggPSBleGNsdWRlLmNoYXJDb2RlQXQoaSlcbiAgICBjYWNoZVtjaF0gPSAnJScgKyAoJzAnICsgY2gudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkpLnNsaWNlKC0yKVxuICB9XG5cbiAgcmV0dXJuIGNhY2hlXG59XG5cbi8vIERlY29kZSBwZXJjZW50LWVuY29kZWQgc3RyaW5nLlxuLy9cbmZ1bmN0aW9uIGRlY29kZSAoc3RyaW5nLCBleGNsdWRlKSB7XG4gIGlmICh0eXBlb2YgZXhjbHVkZSAhPT0gJ3N0cmluZycpIHtcbiAgICBleGNsdWRlID0gZGVjb2RlLmRlZmF1bHRDaGFyc1xuICB9XG5cbiAgY29uc3QgY2FjaGUgPSBnZXREZWNvZGVDYWNoZShleGNsdWRlKVxuXG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKCVbYS1mMC05XXsyfSkrL2dpLCBmdW5jdGlvbiAoc2VxKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHNlcS5sZW5ndGg7IGkgPCBsOyBpICs9IDMpIHtcbiAgICAgIGNvbnN0IGIxID0gcGFyc2VJbnQoc2VxLnNsaWNlKGkgKyAxLCBpICsgMyksIDE2KVxuXG4gICAgICBpZiAoYjEgPCAweDgwKSB7XG4gICAgICAgIHJlc3VsdCArPSBjYWNoZVtiMV1cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKChiMSAmIDB4RTApID09PSAweEMwICYmIChpICsgMyA8IGwpKSB7XG4gICAgICAgIC8vIDExMHh4eHh4IDEweHh4eHh4XG4gICAgICAgIGNvbnN0IGIyID0gcGFyc2VJbnQoc2VxLnNsaWNlKGkgKyA0LCBpICsgNiksIDE2KVxuXG4gICAgICAgIGlmICgoYjIgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgIGNvbnN0IGNociA9ICgoYjEgPDwgNikgJiAweDdDMCkgfCAoYjIgJiAweDNGKVxuXG4gICAgICAgICAgaWYgKGNociA8IDB4ODApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnXFx1ZmZmZFxcdWZmZmQnXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpICs9IDNcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgoYjEgJiAweEYwKSA9PT0gMHhFMCAmJiAoaSArIDYgPCBsKSkge1xuICAgICAgICAvLyAxMTEweHh4eCAxMHh4eHh4eCAxMHh4eHh4eFxuICAgICAgICBjb25zdCBiMiA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgNCwgaSArIDYpLCAxNilcbiAgICAgICAgY29uc3QgYjMgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDcsIGkgKyA5KSwgMTYpXG5cbiAgICAgICAgaWYgKChiMiAmIDB4QzApID09PSAweDgwICYmIChiMyAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgY29uc3QgY2hyID0gKChiMSA8PCAxMikgJiAweEYwMDApIHwgKChiMiA8PCA2KSAmIDB4RkMwKSB8IChiMyAmIDB4M0YpXG5cbiAgICAgICAgICBpZiAoY2hyIDwgMHg4MDAgfHwgKGNociA+PSAweEQ4MDAgJiYgY2hyIDw9IDB4REZGRikpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnXFx1ZmZmZFxcdWZmZmRcXHVmZmZkJ1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaHIpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaSArPSA2XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKGIxICYgMHhGOCkgPT09IDB4RjAgJiYgKGkgKyA5IDwgbCkpIHtcbiAgICAgICAgLy8gMTExMTEweHggMTB4eHh4eHggMTB4eHh4eHggMTB4eHh4eHhcbiAgICAgICAgY29uc3QgYjIgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDQsIGkgKyA2KSwgMTYpXG4gICAgICAgIGNvbnN0IGIzID0gcGFyc2VJbnQoc2VxLnNsaWNlKGkgKyA3LCBpICsgOSksIDE2KVxuICAgICAgICBjb25zdCBiNCA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgMTAsIGkgKyAxMiksIDE2KVxuXG4gICAgICAgIGlmICgoYjIgJiAweEMwKSA9PT0gMHg4MCAmJiAoYjMgJiAweEMwKSA9PT0gMHg4MCAmJiAoYjQgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgIGxldCBjaHIgPSAoKGIxIDw8IDE4KSAmIDB4MUMwMDAwKSB8ICgoYjIgPDwgMTIpICYgMHgzRjAwMCkgfCAoKGIzIDw8IDYpICYgMHhGQzApIHwgKGI0ICYgMHgzRilcblxuICAgICAgICAgIGlmIChjaHIgPCAweDEwMDAwIHx8IGNociA+IDB4MTBGRkZGKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJ1xcdWZmZmRcXHVmZmZkXFx1ZmZmZFxcdWZmZmQnXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNociAtPSAweDEwMDAwXG4gICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgweEQ4MDAgKyAoY2hyID4+IDEwKSwgMHhEQzAwICsgKGNociAmIDB4M0ZGKSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpICs9IDlcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdCArPSAnXFx1ZmZmZCdcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pXG59XG5cbmRlY29kZS5kZWZhdWx0Q2hhcnMgPSAnOy8/OkAmPSskLCMnXG5kZWNvZGUuY29tcG9uZW50Q2hhcnMgPSAnJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWNvZGVcbiIsImNvbnN0IGVuY29kZUNhY2hlID0ge31cblxuLy8gQ3JlYXRlIGEgbG9va3VwIGFycmF5IHdoZXJlIGFueXRoaW5nIGJ1dCBjaGFyYWN0ZXJzIGluIGBjaGFyc2Agc3RyaW5nXG4vLyBhbmQgYWxwaGFudW1lcmljIGNoYXJzIGlzIHBlcmNlbnQtZW5jb2RlZC5cbi8vXG5mdW5jdGlvbiBnZXRFbmNvZGVDYWNoZSAoZXhjbHVkZSkge1xuICBsZXQgY2FjaGUgPSBlbmNvZGVDYWNoZVtleGNsdWRlXVxuICBpZiAoY2FjaGUpIHsgcmV0dXJuIGNhY2hlIH1cblxuICBjYWNoZSA9IGVuY29kZUNhY2hlW2V4Y2x1ZGVdID0gW11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEyODsgaSsrKSB7XG4gICAgY29uc3QgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXG5cbiAgICBpZiAoL15bMC05YS16XSQvaS50ZXN0KGNoKSkge1xuICAgICAgLy8gYWx3YXlzIGFsbG93IHVuZW5jb2RlZCBhbHBoYW51bWVyaWMgY2hhcmFjdGVyc1xuICAgICAgY2FjaGUucHVzaChjaClcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGUucHVzaCgnJScgKyAoJzAnICsgaS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkuc2xpY2UoLTIpKVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXhjbHVkZS5sZW5ndGg7IGkrKykge1xuICAgIGNhY2hlW2V4Y2x1ZGUuY2hhckNvZGVBdChpKV0gPSBleGNsdWRlW2ldXG4gIH1cblxuICByZXR1cm4gY2FjaGVcbn1cblxuLy8gRW5jb2RlIHVuc2FmZSBjaGFyYWN0ZXJzIHdpdGggcGVyY2VudC1lbmNvZGluZywgc2tpcHBpbmcgYWxyZWFkeVxuLy8gZW5jb2RlZCBzZXF1ZW5jZXMuXG4vL1xuLy8gIC0gc3RyaW5nICAgICAgIC0gc3RyaW5nIHRvIGVuY29kZVxuLy8gIC0gZXhjbHVkZSAgICAgIC0gbGlzdCBvZiBjaGFyYWN0ZXJzIHRvIGlnbm9yZSAoaW4gYWRkaXRpb24gdG8gYS16QS1aMC05KVxuLy8gIC0ga2VlcEVzY2FwZWQgIC0gZG9uJ3QgZW5jb2RlICclJyBpbiBhIGNvcnJlY3QgZXNjYXBlIHNlcXVlbmNlIChkZWZhdWx0OiB0cnVlKVxuLy9cbmZ1bmN0aW9uIGVuY29kZSAoc3RyaW5nLCBleGNsdWRlLCBrZWVwRXNjYXBlZCkge1xuICBpZiAodHlwZW9mIGV4Y2x1ZGUgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZW5jb2RlKHN0cmluZywga2VlcEVzY2FwZWQpXG4gICAga2VlcEVzY2FwZWQgPSBleGNsdWRlXG4gICAgZXhjbHVkZSA9IGVuY29kZS5kZWZhdWx0Q2hhcnNcbiAgfVxuXG4gIGlmICh0eXBlb2Yga2VlcEVzY2FwZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAga2VlcEVzY2FwZWQgPSB0cnVlXG4gIH1cblxuICBjb25zdCBjYWNoZSA9IGdldEVuY29kZUNhY2hlKGV4Y2x1ZGUpXG4gIGxldCByZXN1bHQgPSAnJ1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gc3RyaW5nLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgaWYgKGtlZXBFc2NhcGVkICYmIGNvZGUgPT09IDB4MjUgLyogJSAqLyAmJiBpICsgMiA8IGwpIHtcbiAgICAgIGlmICgvXlswLTlhLWZdezJ9JC9pLnRlc3Qoc3RyaW5nLnNsaWNlKGkgKyAxLCBpICsgMykpKSB7XG4gICAgICAgIHJlc3VsdCArPSBzdHJpbmcuc2xpY2UoaSwgaSArIDMpXG4gICAgICAgIGkgKz0gMlxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlIDwgMTI4KSB7XG4gICAgICByZXN1bHQgKz0gY2FjaGVbY29kZV1cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPj0gMHhEODAwICYmIGNvZGUgPD0gMHhERkZGKSB7XG4gICAgICBpZiAoY29kZSA+PSAweEQ4MDAgJiYgY29kZSA8PSAweERCRkYgJiYgaSArIDEgPCBsKSB7XG4gICAgICAgIGNvbnN0IG5leHRDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpXG4gICAgICAgIGlmIChuZXh0Q29kZSA+PSAweERDMDAgJiYgbmV4dENvZGUgPD0gMHhERkZGKSB7XG4gICAgICAgICAgcmVzdWx0ICs9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdbaV0gKyBzdHJpbmdbaSArIDFdKVxuICAgICAgICAgIGkrK1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdCArPSAnJUVGJUJGJUJEJ1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ1tpXSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZW5jb2RlLmRlZmF1bHRDaGFycyA9IFwiOy8/OkAmPSskLC1fLiF+KicoKSNcIlxuZW5jb2RlLmNvbXBvbmVudENoYXJzID0gXCItXy4hfionKClcIlxuXG5leHBvcnQgZGVmYXVsdCBlbmNvZGVcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdCAodXJsKSB7XG4gIGxldCByZXN1bHQgPSAnJ1xuXG4gIHJlc3VsdCArPSB1cmwucHJvdG9jb2wgfHwgJydcbiAgcmVzdWx0ICs9IHVybC5zbGFzaGVzID8gJy8vJyA6ICcnXG4gIHJlc3VsdCArPSB1cmwuYXV0aCA/IHVybC5hdXRoICsgJ0AnIDogJydcblxuICBpZiAodXJsLmhvc3RuYW1lICYmIHVybC5ob3N0bmFtZS5pbmRleE9mKCc6JykgIT09IC0xKSB7XG4gICAgLy8gaXB2NiBhZGRyZXNzXG4gICAgcmVzdWx0ICs9ICdbJyArIHVybC5ob3N0bmFtZSArICddJ1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCArPSB1cmwuaG9zdG5hbWUgfHwgJydcbiAgfVxuXG4gIHJlc3VsdCArPSB1cmwucG9ydCA/ICc6JyArIHVybC5wb3J0IDogJydcbiAgcmVzdWx0ICs9IHVybC5wYXRobmFtZSB8fCAnJ1xuICByZXN1bHQgKz0gdXJsLnNlYXJjaCB8fCAnJ1xuICByZXN1bHQgKz0gdXJsLmhhc2ggfHwgJydcblxuICByZXR1cm4gcmVzdWx0XG59O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vXG4vLyBDaGFuZ2VzIGZyb20gam95ZW50L25vZGU6XG4vL1xuLy8gMS4gTm8gbGVhZGluZyBzbGFzaCBpbiBwYXRocyxcbi8vICAgIGUuZy4gaW4gYHVybC5wYXJzZSgnaHR0cDovL2Zvbz9iYXInKWAgcGF0aG5hbWUgaXMgYGAsIG5vdCBgL2Bcbi8vXG4vLyAyLiBCYWNrc2xhc2hlcyBhcmUgbm90IHJlcGxhY2VkIHdpdGggc2xhc2hlcyxcbi8vICAgIHNvIGBodHRwOlxcXFxleGFtcGxlLm9yZ1xcYCBpcyB0cmVhdGVkIGxpa2UgYSByZWxhdGl2ZSBwYXRoXG4vL1xuLy8gMy4gVHJhaWxpbmcgY29sb24gaXMgdHJlYXRlZCBsaWtlIGEgcGFydCBvZiB0aGUgcGF0aCxcbi8vICAgIGkuZS4gaW4gYGh0dHA6Ly9leGFtcGxlLm9yZzpmb29gIHBhdGhuYW1lIGlzIGA6Zm9vYFxuLy9cbi8vIDQuIE5vdGhpbmcgaXMgVVJMLWVuY29kZWQgaW4gdGhlIHJlc3VsdGluZyBvYmplY3QsXG4vLyAgICAoaW4gam95ZW50L25vZGUgc29tZSBjaGFycyBpbiBhdXRoIGFuZCBwYXRocyBhcmUgZW5jb2RlZClcbi8vXG4vLyA1LiBgdXJsLnBhcnNlKClgIGRvZXMgbm90IGhhdmUgYHBhcnNlUXVlcnlTdHJpbmdgIGFyZ3VtZW50XG4vL1xuLy8gNi4gUmVtb3ZlZCBleHRyYW5lb3VzIHJlc3VsdCBwcm9wZXJ0aWVzOiBgaG9zdGAsIGBwYXRoYCwgYHF1ZXJ5YCwgZXRjLixcbi8vICAgIHdoaWNoIGNhbiBiZSBjb25zdHJ1Y3RlZCB1c2luZyBvdGhlciBwYXJ0cyBvZiB0aGUgdXJsLlxuLy9cblxuZnVuY3Rpb24gVXJsICgpIHtcbiAgdGhpcy5wcm90b2NvbCA9IG51bGxcbiAgdGhpcy5zbGFzaGVzID0gbnVsbFxuICB0aGlzLmF1dGggPSBudWxsXG4gIHRoaXMucG9ydCA9IG51bGxcbiAgdGhpcy5ob3N0bmFtZSA9IG51bGxcbiAgdGhpcy5oYXNoID0gbnVsbFxuICB0aGlzLnNlYXJjaCA9IG51bGxcbiAgdGhpcy5wYXRobmFtZSA9IG51bGxcbn1cblxuLy8gUmVmZXJlbmNlOiBSRkMgMzk4NiwgUkZDIDE4MDgsIFJGQyAyMzk2XG5cbi8vIGRlZmluZSB0aGVzZSBoZXJlIHNvIGF0IGxlYXN0IHRoZXkgb25seSBoYXZlIHRvIGJlXG4vLyBjb21waWxlZCBvbmNlIG9uIHRoZSBmaXJzdCBtb2R1bGUgbG9hZC5cbmNvbnN0IHByb3RvY29sUGF0dGVybiA9IC9eKFthLXowLTkuKy1dKzopL2lcbmNvbnN0IHBvcnRQYXR0ZXJuID0gLzpbMC05XSokL1xuXG4vLyBTcGVjaWFsIGNhc2UgZm9yIGEgc2ltcGxlIHBhdGggVVJMXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGUgKi9cbmNvbnN0IHNpbXBsZVBhdGhQYXR0ZXJuID0gL14oXFwvXFwvPyg/IVxcLylbXlxcP1xcc10qKShcXD9bXlxcc10qKT8kL1xuXG4vLyBSRkMgMjM5NjogY2hhcmFjdGVycyByZXNlcnZlZCBmb3IgZGVsaW1pdGluZyBVUkxzLlxuLy8gV2UgYWN0dWFsbHkganVzdCBhdXRvLWVzY2FwZSB0aGVzZS5cbmNvbnN0IGRlbGltcyA9IFsnPCcsICc+JywgJ1wiJywgJ2AnLCAnICcsICdcXHInLCAnXFxuJywgJ1xcdCddXG5cbi8vIFJGQyAyMzk2OiBjaGFyYWN0ZXJzIG5vdCBhbGxvd2VkIGZvciB2YXJpb3VzIHJlYXNvbnMuXG5jb25zdCB1bndpc2UgPSBbJ3snLCAnfScsICd8JywgJ1xcXFwnLCAnXicsICdgJ10uY29uY2F0KGRlbGltcylcblxuLy8gQWxsb3dlZCBieSBSRkNzLCBidXQgY2F1c2Ugb2YgWFNTIGF0dGFja3MuICBBbHdheXMgZXNjYXBlIHRoZXNlLlxuY29uc3QgYXV0b0VzY2FwZSA9IFsnXFwnJ10uY29uY2F0KHVud2lzZSlcbi8vIENoYXJhY3RlcnMgdGhhdCBhcmUgbmV2ZXIgZXZlciBhbGxvd2VkIGluIGEgaG9zdG5hbWUuXG4vLyBOb3RlIHRoYXQgYW55IGludmFsaWQgY2hhcnMgYXJlIGFsc28gaGFuZGxlZCwgYnV0IHRoZXNlXG4vLyBhcmUgdGhlIG9uZXMgdGhhdCBhcmUgKmV4cGVjdGVkKiB0byBiZSBzZWVuLCBzbyB3ZSBmYXN0LXBhdGhcbi8vIHRoZW0uXG5jb25zdCBub25Ib3N0Q2hhcnMgPSBbJyUnLCAnLycsICc/JywgJzsnLCAnIyddLmNvbmNhdChhdXRvRXNjYXBlKVxuY29uc3QgaG9zdEVuZGluZ0NoYXJzID0gWycvJywgJz8nLCAnIyddXG5jb25zdCBob3N0bmFtZU1heExlbiA9IDI1NVxuY29uc3QgaG9zdG5hbWVQYXJ0UGF0dGVybiA9IC9eWythLXowLTlBLVpfLV17MCw2M30kL1xuY29uc3QgaG9zdG5hbWVQYXJ0U3RhcnQgPSAvXihbK2EtejAtOUEtWl8tXXswLDYzfSkoLiopJC9cbi8vIHByb3RvY29scyB0aGF0IGNhbiBhbGxvdyBcInVuc2FmZVwiIGFuZCBcInVud2lzZVwiIGNoYXJzLlxuLy8gcHJvdG9jb2xzIHRoYXQgbmV2ZXIgaGF2ZSBhIGhvc3RuYW1lLlxuY29uc3QgaG9zdGxlc3NQcm90b2NvbCA9IHtcbiAgamF2YXNjcmlwdDogdHJ1ZSxcbiAgJ2phdmFzY3JpcHQ6JzogdHJ1ZVxufVxuLy8gcHJvdG9jb2xzIHRoYXQgYWx3YXlzIGNvbnRhaW4gYSAvLyBiaXQuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2wgPSB7XG4gIGh0dHA6IHRydWUsXG4gIGh0dHBzOiB0cnVlLFxuICBmdHA6IHRydWUsXG4gIGdvcGhlcjogdHJ1ZSxcbiAgZmlsZTogdHJ1ZSxcbiAgJ2h0dHA6JzogdHJ1ZSxcbiAgJ2h0dHBzOic6IHRydWUsXG4gICdmdHA6JzogdHJ1ZSxcbiAgJ2dvcGhlcjonOiB0cnVlLFxuICAnZmlsZTonOiB0cnVlXG59XG5cbmZ1bmN0aW9uIHVybFBhcnNlICh1cmwsIHNsYXNoZXNEZW5vdGVIb3N0KSB7XG4gIGlmICh1cmwgJiYgdXJsIGluc3RhbmNlb2YgVXJsKSByZXR1cm4gdXJsXG5cbiAgY29uc3QgdSA9IG5ldyBVcmwoKVxuICB1LnBhcnNlKHVybCwgc2xhc2hlc0Rlbm90ZUhvc3QpXG4gIHJldHVybiB1XG59XG5cblVybC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAodXJsLCBzbGFzaGVzRGVub3RlSG9zdCkge1xuICBsZXQgbG93ZXJQcm90bywgaGVjLCBzbGFzaGVzXG4gIGxldCByZXN0ID0gdXJsXG5cbiAgLy8gdHJpbSBiZWZvcmUgcHJvY2VlZGluZy5cbiAgLy8gVGhpcyBpcyB0byBzdXBwb3J0IHBhcnNlIHN0dWZmIGxpa2UgXCIgIGh0dHA6Ly9mb28uY29tICBcXG5cIlxuICByZXN0ID0gcmVzdC50cmltKClcblxuICBpZiAoIXNsYXNoZXNEZW5vdGVIb3N0ICYmIHVybC5zcGxpdCgnIycpLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIFRyeSBmYXN0IHBhdGggcmVnZXhwXG4gICAgY29uc3Qgc2ltcGxlUGF0aCA9IHNpbXBsZVBhdGhQYXR0ZXJuLmV4ZWMocmVzdClcbiAgICBpZiAoc2ltcGxlUGF0aCkge1xuICAgICAgdGhpcy5wYXRobmFtZSA9IHNpbXBsZVBhdGhbMV1cbiAgICAgIGlmIChzaW1wbGVQYXRoWzJdKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gc2ltcGxlUGF0aFsyXVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gIH1cblxuICBsZXQgcHJvdG8gPSBwcm90b2NvbFBhdHRlcm4uZXhlYyhyZXN0KVxuICBpZiAocHJvdG8pIHtcbiAgICBwcm90byA9IHByb3RvWzBdXG4gICAgbG93ZXJQcm90byA9IHByb3RvLnRvTG93ZXJDYXNlKClcbiAgICB0aGlzLnByb3RvY29sID0gcHJvdG9cbiAgICByZXN0ID0gcmVzdC5zdWJzdHIocHJvdG8ubGVuZ3RoKVxuICB9XG5cbiAgLy8gZmlndXJlIG91dCBpZiBpdCdzIGdvdCBhIGhvc3RcbiAgLy8gdXNlckBzZXJ2ZXIgaXMgKmFsd2F5cyogaW50ZXJwcmV0ZWQgYXMgYSBob3N0bmFtZSwgYW5kIHVybFxuICAvLyByZXNvbHV0aW9uIHdpbGwgdHJlYXQgLy9mb28vYmFyIGFzIGhvc3Q9Zm9vLHBhdGg9YmFyIGJlY2F1c2UgdGhhdCdzXG4gIC8vIGhvdyB0aGUgYnJvd3NlciByZXNvbHZlcyByZWxhdGl2ZSBVUkxzLlxuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGUgKi9cbiAgaWYgKHNsYXNoZXNEZW5vdGVIb3N0IHx8IHByb3RvIHx8IHJlc3QubWF0Y2goL15cXC9cXC9bXkBcXC9dK0BbXkBcXC9dKy8pKSB7XG4gICAgc2xhc2hlcyA9IHJlc3Quc3Vic3RyKDAsIDIpID09PSAnLy8nXG4gICAgaWYgKHNsYXNoZXMgJiYgIShwcm90byAmJiBob3N0bGVzc1Byb3RvY29sW3Byb3RvXSkpIHtcbiAgICAgIHJlc3QgPSByZXN0LnN1YnN0cigyKVxuICAgICAgdGhpcy5zbGFzaGVzID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGlmICghaG9zdGxlc3NQcm90b2NvbFtwcm90b10gJiZcbiAgICAgIChzbGFzaGVzIHx8IChwcm90byAmJiAhc2xhc2hlZFByb3RvY29sW3Byb3RvXSkpKSB7XG4gICAgLy8gdGhlcmUncyBhIGhvc3RuYW1lLlxuICAgIC8vIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiAvLCA/LCA7LCBvciAjIGVuZHMgdGhlIGhvc3QuXG4gICAgLy9cbiAgICAvLyBJZiB0aGVyZSBpcyBhbiBAIGluIHRoZSBob3N0bmFtZSwgdGhlbiBub24taG9zdCBjaGFycyAqYXJlKiBhbGxvd2VkXG4gICAgLy8gdG8gdGhlIGxlZnQgb2YgdGhlIGxhc3QgQCBzaWduLCB1bmxlc3Mgc29tZSBob3N0LWVuZGluZyBjaGFyYWN0ZXJcbiAgICAvLyBjb21lcyAqYmVmb3JlKiB0aGUgQC1zaWduLlxuICAgIC8vIFVSTHMgYXJlIG9ibm94aW91cy5cbiAgICAvL1xuICAgIC8vIGV4OlxuICAgIC8vIGh0dHA6Ly9hQGJAYy8gPT4gdXNlcjphQGIgaG9zdDpjXG4gICAgLy8gaHR0cDovL2FAYj9AYyA9PiB1c2VyOmEgaG9zdDpjIHBhdGg6Lz9AY1xuXG4gICAgLy8gdjAuMTIgVE9ETyhpc2FhY3MpOiBUaGlzIGlzIG5vdCBxdWl0ZSBob3cgQ2hyb21lIGRvZXMgdGhpbmdzLlxuICAgIC8vIFJldmlldyBvdXIgdGVzdCBjYXNlIGFnYWluc3QgYnJvd3NlcnMgbW9yZSBjb21wcmVoZW5zaXZlbHkuXG5cbiAgICAvLyBmaW5kIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiBhbnkgaG9zdEVuZGluZ0NoYXJzXG4gICAgbGV0IGhvc3RFbmQgPSAtMVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG9zdEVuZGluZ0NoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBoZWMgPSByZXN0LmluZGV4T2YoaG9zdEVuZGluZ0NoYXJzW2ldKVxuICAgICAgaWYgKGhlYyAhPT0gLTEgJiYgKGhvc3RFbmQgPT09IC0xIHx8IGhlYyA8IGhvc3RFbmQpKSB7XG4gICAgICAgIGhvc3RFbmQgPSBoZWNcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhdCB0aGlzIHBvaW50LCBlaXRoZXIgd2UgaGF2ZSBhbiBleHBsaWNpdCBwb2ludCB3aGVyZSB0aGVcbiAgICAvLyBhdXRoIHBvcnRpb24gY2Fubm90IGdvIHBhc3QsIG9yIHRoZSBsYXN0IEAgY2hhciBpcyB0aGUgZGVjaWRlci5cbiAgICBsZXQgYXV0aCwgYXRTaWduXG4gICAgaWYgKGhvc3RFbmQgPT09IC0xKSB7XG4gICAgICAvLyBhdFNpZ24gY2FuIGJlIGFueXdoZXJlLlxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGF0U2lnbiBtdXN0IGJlIGluIGF1dGggcG9ydGlvbi5cbiAgICAgIC8vIGh0dHA6Ly9hQGIvY0BkID0+IGhvc3Q6YiBhdXRoOmEgcGF0aDovY0BkXG4gICAgICBhdFNpZ24gPSByZXN0Lmxhc3RJbmRleE9mKCdAJywgaG9zdEVuZClcbiAgICB9XG5cbiAgICAvLyBOb3cgd2UgaGF2ZSBhIHBvcnRpb24gd2hpY2ggaXMgZGVmaW5pdGVseSB0aGUgYXV0aC5cbiAgICAvLyBQdWxsIHRoYXQgb2ZmLlxuICAgIGlmIChhdFNpZ24gIT09IC0xKSB7XG4gICAgICBhdXRoID0gcmVzdC5zbGljZSgwLCBhdFNpZ24pXG4gICAgICByZXN0ID0gcmVzdC5zbGljZShhdFNpZ24gKyAxKVxuICAgICAgdGhpcy5hdXRoID0gYXV0aFxuICAgIH1cblxuICAgIC8vIHRoZSBob3N0IGlzIHRoZSByZW1haW5pbmcgdG8gdGhlIGxlZnQgb2YgdGhlIGZpcnN0IG5vbi1ob3N0IGNoYXJcbiAgICBob3N0RW5kID0gLTFcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vbkhvc3RDaGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgaGVjID0gcmVzdC5pbmRleE9mKG5vbkhvc3RDaGFyc1tpXSlcbiAgICAgIGlmIChoZWMgIT09IC0xICYmIChob3N0RW5kID09PSAtMSB8fCBoZWMgPCBob3N0RW5kKSkge1xuICAgICAgICBob3N0RW5kID0gaGVjXG4gICAgICB9XG4gICAgfVxuICAgIC8vIGlmIHdlIHN0aWxsIGhhdmUgbm90IGhpdCBpdCwgdGhlbiB0aGUgZW50aXJlIHRoaW5nIGlzIGEgaG9zdC5cbiAgICBpZiAoaG9zdEVuZCA9PT0gLTEpIHtcbiAgICAgIGhvc3RFbmQgPSByZXN0Lmxlbmd0aFxuICAgIH1cblxuICAgIGlmIChyZXN0W2hvc3RFbmQgLSAxXSA9PT0gJzonKSB7IGhvc3RFbmQtLSB9XG4gICAgY29uc3QgaG9zdCA9IHJlc3Quc2xpY2UoMCwgaG9zdEVuZClcbiAgICByZXN0ID0gcmVzdC5zbGljZShob3N0RW5kKVxuXG4gICAgLy8gcHVsbCBvdXQgcG9ydC5cbiAgICB0aGlzLnBhcnNlSG9zdChob3N0KVxuXG4gICAgLy8gd2UndmUgaW5kaWNhdGVkIHRoYXQgdGhlcmUgaXMgYSBob3N0bmFtZSxcbiAgICAvLyBzbyBldmVuIGlmIGl0J3MgZW1wdHksIGl0IGhhcyB0byBiZSBwcmVzZW50LlxuICAgIHRoaXMuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lIHx8ICcnXG5cbiAgICAvLyBpZiBob3N0bmFtZSBiZWdpbnMgd2l0aCBbIGFuZCBlbmRzIHdpdGggXVxuICAgIC8vIGFzc3VtZSB0aGF0IGl0J3MgYW4gSVB2NiBhZGRyZXNzLlxuICAgIGNvbnN0IGlwdjZIb3N0bmFtZSA9IHRoaXMuaG9zdG5hbWVbMF0gPT09ICdbJyAmJlxuICAgICAgICB0aGlzLmhvc3RuYW1lW3RoaXMuaG9zdG5hbWUubGVuZ3RoIC0gMV0gPT09ICddJ1xuXG4gICAgLy8gdmFsaWRhdGUgYSBsaXR0bGUuXG4gICAgaWYgKCFpcHY2SG9zdG5hbWUpIHtcbiAgICAgIGNvbnN0IGhvc3RwYXJ0cyA9IHRoaXMuaG9zdG5hbWUuc3BsaXQoL1xcLi8pXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGhvc3RwYXJ0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgcGFydCA9IGhvc3RwYXJ0c1tpXVxuICAgICAgICBpZiAoIXBhcnQpIHsgY29udGludWUgfVxuICAgICAgICBpZiAoIXBhcnQubWF0Y2goaG9zdG5hbWVQYXJ0UGF0dGVybikpIHtcbiAgICAgICAgICBsZXQgbmV3cGFydCA9ICcnXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDAsIGsgPSBwYXJ0Lmxlbmd0aDsgaiA8IGs7IGorKykge1xuICAgICAgICAgICAgaWYgKHBhcnQuY2hhckNvZGVBdChqKSA+IDEyNykge1xuICAgICAgICAgICAgICAvLyB3ZSByZXBsYWNlIG5vbi1BU0NJSSBjaGFyIHdpdGggYSB0ZW1wb3JhcnkgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0aGlzIHRvIG1ha2Ugc3VyZSBzaXplIG9mIGhvc3RuYW1lIGlzIG5vdFxuICAgICAgICAgICAgICAvLyBicm9rZW4gYnkgcmVwbGFjaW5nIG5vbi1BU0NJSSBieSBub3RoaW5nXG4gICAgICAgICAgICAgIG5ld3BhcnQgKz0gJ3gnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZXdwYXJ0ICs9IHBhcnRbal1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gd2UgdGVzdCBhZ2FpbiB3aXRoIEFTQ0lJIGNoYXIgb25seVxuICAgICAgICAgIGlmICghbmV3cGFydC5tYXRjaChob3N0bmFtZVBhcnRQYXR0ZXJuKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRQYXJ0cyA9IGhvc3RwYXJ0cy5zbGljZSgwLCBpKVxuICAgICAgICAgICAgY29uc3Qgbm90SG9zdCA9IGhvc3RwYXJ0cy5zbGljZShpICsgMSlcbiAgICAgICAgICAgIGNvbnN0IGJpdCA9IHBhcnQubWF0Y2goaG9zdG5hbWVQYXJ0U3RhcnQpXG4gICAgICAgICAgICBpZiAoYml0KSB7XG4gICAgICAgICAgICAgIHZhbGlkUGFydHMucHVzaChiaXRbMV0pXG4gICAgICAgICAgICAgIG5vdEhvc3QudW5zaGlmdChiaXRbMl0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90SG9zdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmVzdCA9IG5vdEhvc3Quam9pbignLicpICsgcmVzdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ob3N0bmFtZSA9IHZhbGlkUGFydHMuam9pbignLicpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhvc3RuYW1lLmxlbmd0aCA+IGhvc3RuYW1lTWF4TGVuKSB7XG4gICAgICB0aGlzLmhvc3RuYW1lID0gJydcbiAgICB9XG5cbiAgICAvLyBzdHJpcCBbIGFuZCBdIGZyb20gdGhlIGhvc3RuYW1lXG4gICAgLy8gdGhlIGhvc3QgZmllbGQgc3RpbGwgcmV0YWlucyB0aGVtLCB0aG91Z2hcbiAgICBpZiAoaXB2Nkhvc3RuYW1lKSB7XG4gICAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZS5zdWJzdHIoMSwgdGhpcy5ob3N0bmFtZS5sZW5ndGggLSAyKVxuICAgIH1cbiAgfVxuXG4gIC8vIGNob3Agb2ZmIGZyb20gdGhlIHRhaWwgZmlyc3QuXG4gIGNvbnN0IGhhc2ggPSByZXN0LmluZGV4T2YoJyMnKVxuICBpZiAoaGFzaCAhPT0gLTEpIHtcbiAgICAvLyBnb3QgYSBmcmFnbWVudCBzdHJpbmcuXG4gICAgdGhpcy5oYXNoID0gcmVzdC5zdWJzdHIoaGFzaClcbiAgICByZXN0ID0gcmVzdC5zbGljZSgwLCBoYXNoKVxuICB9XG4gIGNvbnN0IHFtID0gcmVzdC5pbmRleE9mKCc/JylcbiAgaWYgKHFtICE9PSAtMSkge1xuICAgIHRoaXMuc2VhcmNoID0gcmVzdC5zdWJzdHIocW0pXG4gICAgcmVzdCA9IHJlc3Quc2xpY2UoMCwgcW0pXG4gIH1cbiAgaWYgKHJlc3QpIHsgdGhpcy5wYXRobmFtZSA9IHJlc3QgfVxuICBpZiAoc2xhc2hlZFByb3RvY29sW2xvd2VyUHJvdG9dICYmXG4gICAgICB0aGlzLmhvc3RuYW1lICYmICF0aGlzLnBhdGhuYW1lKSB7XG4gICAgdGhpcy5wYXRobmFtZSA9ICcnXG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG5VcmwucHJvdG90eXBlLnBhcnNlSG9zdCA9IGZ1bmN0aW9uIChob3N0KSB7XG4gIGxldCBwb3J0ID0gcG9ydFBhdHRlcm4uZXhlYyhob3N0KVxuICBpZiAocG9ydCkge1xuICAgIHBvcnQgPSBwb3J0WzBdXG4gICAgaWYgKHBvcnQgIT09ICc6Jykge1xuICAgICAgdGhpcy5wb3J0ID0gcG9ydC5zdWJzdHIoMSlcbiAgICB9XG4gICAgaG9zdCA9IGhvc3Quc3Vic3RyKDAsIGhvc3QubGVuZ3RoIC0gcG9ydC5sZW5ndGgpXG4gIH1cbiAgaWYgKGhvc3QpIHsgdGhpcy5ob3N0bmFtZSA9IGhvc3QgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1cmxQYXJzZVxuIiwiZXhwb3J0IGRlZmF1bHQgL1tcXDAtXFx1RDdGRlxcdUUwMDAtXFx1RkZGRl18W1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXS8iLCJleHBvcnQgZGVmYXVsdCAvW1xcMC1cXHgxRlxceDdGLVxceDlGXS8iLCJleHBvcnQgZGVmYXVsdCAvW1xceEFEXFx1MDYwMC1cXHUwNjA1XFx1MDYxQ1xcdTA2RERcXHUwNzBGXFx1MDg5MFxcdTA4OTFcXHUwOEUyXFx1MTgwRVxcdTIwMEItXFx1MjAwRlxcdTIwMkEtXFx1MjAyRVxcdTIwNjAtXFx1MjA2NFxcdTIwNjYtXFx1MjA2RlxcdUZFRkZcXHVGRkY5LVxcdUZGRkJdfFxcdUQ4MDRbXFx1RENCRFxcdURDQ0RdfFxcdUQ4MERbXFx1REMzMC1cXHVEQzNGXXxcXHVEODJGW1xcdURDQTAtXFx1RENBM118XFx1RDgzNFtcXHVERDczLVxcdUREN0FdfFxcdURCNDBbXFx1REMwMVxcdURDMjAtXFx1REM3Rl0vIiwiZXhwb3J0IGRlZmF1bHQgL1shLSMlLVxcKiwtXFwvOjtcXD9AXFxbLVxcXV9cXHtcXH1cXHhBMVxceEE3XFx4QUJcXHhCNlxceEI3XFx4QkJcXHhCRlxcdTAzN0VcXHUwMzg3XFx1MDU1QS1cXHUwNTVGXFx1MDU4OVxcdTA1OEFcXHUwNUJFXFx1MDVDMFxcdTA1QzNcXHUwNUM2XFx1MDVGM1xcdTA1RjRcXHUwNjA5XFx1MDYwQVxcdTA2MENcXHUwNjBEXFx1MDYxQlxcdTA2MUQtXFx1MDYxRlxcdTA2NkEtXFx1MDY2RFxcdTA2RDRcXHUwNzAwLVxcdTA3MERcXHUwN0Y3LVxcdTA3RjlcXHUwODMwLVxcdTA4M0VcXHUwODVFXFx1MDk2NFxcdTA5NjVcXHUwOTcwXFx1MDlGRFxcdTBBNzZcXHUwQUYwXFx1MEM3N1xcdTBDODRcXHUwREY0XFx1MEU0RlxcdTBFNUFcXHUwRTVCXFx1MEYwNC1cXHUwRjEyXFx1MEYxNFxcdTBGM0EtXFx1MEYzRFxcdTBGODVcXHUwRkQwLVxcdTBGRDRcXHUwRkQ5XFx1MEZEQVxcdTEwNEEtXFx1MTA0RlxcdTEwRkJcXHUxMzYwLVxcdTEzNjhcXHUxNDAwXFx1MTY2RVxcdTE2OUJcXHUxNjlDXFx1MTZFQi1cXHUxNkVEXFx1MTczNVxcdTE3MzZcXHUxN0Q0LVxcdTE3RDZcXHUxN0Q4LVxcdTE3REFcXHUxODAwLVxcdTE4MEFcXHUxOTQ0XFx1MTk0NVxcdTFBMUVcXHUxQTFGXFx1MUFBMC1cXHUxQUE2XFx1MUFBOC1cXHUxQUFEXFx1MUI1QS1cXHUxQjYwXFx1MUI3RFxcdTFCN0VcXHUxQkZDLVxcdTFCRkZcXHUxQzNCLVxcdTFDM0ZcXHUxQzdFXFx1MUM3RlxcdTFDQzAtXFx1MUNDN1xcdTFDRDNcXHUyMDEwLVxcdTIwMjdcXHUyMDMwLVxcdTIwNDNcXHUyMDQ1LVxcdTIwNTFcXHUyMDUzLVxcdTIwNUVcXHUyMDdEXFx1MjA3RVxcdTIwOERcXHUyMDhFXFx1MjMwOC1cXHUyMzBCXFx1MjMyOVxcdTIzMkFcXHUyNzY4LVxcdTI3NzVcXHUyN0M1XFx1MjdDNlxcdTI3RTYtXFx1MjdFRlxcdTI5ODMtXFx1Mjk5OFxcdTI5RDgtXFx1MjlEQlxcdTI5RkNcXHUyOUZEXFx1MkNGOS1cXHUyQ0ZDXFx1MkNGRVxcdTJDRkZcXHUyRDcwXFx1MkUwMC1cXHUyRTJFXFx1MkUzMC1cXHUyRTRGXFx1MkU1Mi1cXHUyRTVEXFx1MzAwMS1cXHUzMDAzXFx1MzAwOC1cXHUzMDExXFx1MzAxNC1cXHUzMDFGXFx1MzAzMFxcdTMwM0RcXHUzMEEwXFx1MzBGQlxcdUE0RkVcXHVBNEZGXFx1QTYwRC1cXHVBNjBGXFx1QTY3M1xcdUE2N0VcXHVBNkYyLVxcdUE2RjdcXHVBODc0LVxcdUE4NzdcXHVBOENFXFx1QThDRlxcdUE4RjgtXFx1QThGQVxcdUE4RkNcXHVBOTJFXFx1QTkyRlxcdUE5NUZcXHVBOUMxLVxcdUE5Q0RcXHVBOURFXFx1QTlERlxcdUFBNUMtXFx1QUE1RlxcdUFBREVcXHVBQURGXFx1QUFGMFxcdUFBRjFcXHVBQkVCXFx1RkQzRVxcdUZEM0ZcXHVGRTEwLVxcdUZFMTlcXHVGRTMwLVxcdUZFNTJcXHVGRTU0LVxcdUZFNjFcXHVGRTYzXFx1RkU2OFxcdUZFNkFcXHVGRTZCXFx1RkYwMS1cXHVGRjAzXFx1RkYwNS1cXHVGRjBBXFx1RkYwQy1cXHVGRjBGXFx1RkYxQVxcdUZGMUJcXHVGRjFGXFx1RkYyMFxcdUZGM0ItXFx1RkYzRFxcdUZGM0ZcXHVGRjVCXFx1RkY1RFxcdUZGNUYtXFx1RkY2NV18XFx1RDgwMFtcXHVERDAwLVxcdUREMDJcXHVERjlGXFx1REZEMF18XFx1RDgwMVxcdURENkZ8XFx1RDgwMltcXHVEQzU3XFx1REQxRlxcdUREM0ZcXHVERTUwLVxcdURFNThcXHVERTdGXFx1REVGMC1cXHVERUY2XFx1REYzOS1cXHVERjNGXFx1REY5OS1cXHVERjlDXXxcXHVEODAzW1xcdURFQURcXHVERjU1LVxcdURGNTlcXHVERjg2LVxcdURGODldfFxcdUQ4MDRbXFx1REM0Ny1cXHVEQzREXFx1RENCQlxcdURDQkNcXHVEQ0JFLVxcdURDQzFcXHVERDQwLVxcdURENDNcXHVERDc0XFx1REQ3NVxcdUREQzUtXFx1RERDOFxcdUREQ0RcXHVERERCXFx1RERERC1cXHVERERGXFx1REUzOC1cXHVERTNEXFx1REVBOV18XFx1RDgwNVtcXHVEQzRCLVxcdURDNEZcXHVEQzVBXFx1REM1QlxcdURDNURcXHVEQ0M2XFx1RERDMS1cXHVEREQ3XFx1REU0MS1cXHVERTQzXFx1REU2MC1cXHVERTZDXFx1REVCOVxcdURGM0MtXFx1REYzRV18XFx1RDgwNltcXHVEQzNCXFx1REQ0NC1cXHVERDQ2XFx1RERFMlxcdURFM0YtXFx1REU0NlxcdURFOUEtXFx1REU5Q1xcdURFOUUtXFx1REVBMlxcdURGMDAtXFx1REYwOV18XFx1RDgwN1tcXHVEQzQxLVxcdURDNDVcXHVEQzcwXFx1REM3MVxcdURFRjdcXHVERUY4XFx1REY0My1cXHVERjRGXFx1REZGRl18XFx1RDgwOVtcXHVEQzcwLVxcdURDNzRdfFxcdUQ4MEJbXFx1REZGMVxcdURGRjJdfFxcdUQ4MUFbXFx1REU2RVxcdURFNkZcXHVERUY1XFx1REYzNy1cXHVERjNCXFx1REY0NF18XFx1RDgxQltcXHVERTk3LVxcdURFOUFcXHVERkUyXXxcXHVEODJGXFx1REM5RnxcXHVEODM2W1xcdURFODctXFx1REU4Ql18XFx1RDgzQVtcXHVERDVFXFx1REQ1Rl0vIiwiZXhwb3J0IGRlZmF1bHQgL1tcXCRcXCs8LT5cXF5gXFx8flxceEEyLVxceEE2XFx4QThcXHhBOVxceEFDXFx4QUUtXFx4QjFcXHhCNFxceEI4XFx4RDdcXHhGN1xcdTAyQzItXFx1MDJDNVxcdTAyRDItXFx1MDJERlxcdTAyRTUtXFx1MDJFQlxcdTAyRURcXHUwMkVGLVxcdTAyRkZcXHUwMzc1XFx1MDM4NFxcdTAzODVcXHUwM0Y2XFx1MDQ4MlxcdTA1OEQtXFx1MDU4RlxcdTA2MDYtXFx1MDYwOFxcdTA2MEJcXHUwNjBFXFx1MDYwRlxcdTA2REVcXHUwNkU5XFx1MDZGRFxcdTA2RkVcXHUwN0Y2XFx1MDdGRVxcdTA3RkZcXHUwODg4XFx1MDlGMlxcdTA5RjNcXHUwOUZBXFx1MDlGQlxcdTBBRjFcXHUwQjcwXFx1MEJGMy1cXHUwQkZBXFx1MEM3RlxcdTBENEZcXHUwRDc5XFx1MEUzRlxcdTBGMDEtXFx1MEYwM1xcdTBGMTNcXHUwRjE1LVxcdTBGMTdcXHUwRjFBLVxcdTBGMUZcXHUwRjM0XFx1MEYzNlxcdTBGMzhcXHUwRkJFLVxcdTBGQzVcXHUwRkM3LVxcdTBGQ0NcXHUwRkNFXFx1MEZDRlxcdTBGRDUtXFx1MEZEOFxcdTEwOUVcXHUxMDlGXFx1MTM5MC1cXHUxMzk5XFx1MTY2RFxcdTE3REJcXHUxOTQwXFx1MTlERS1cXHUxOUZGXFx1MUI2MS1cXHUxQjZBXFx1MUI3NC1cXHUxQjdDXFx1MUZCRFxcdTFGQkYtXFx1MUZDMVxcdTFGQ0QtXFx1MUZDRlxcdTFGREQtXFx1MUZERlxcdTFGRUQtXFx1MUZFRlxcdTFGRkRcXHUxRkZFXFx1MjA0NFxcdTIwNTJcXHUyMDdBLVxcdTIwN0NcXHUyMDhBLVxcdTIwOENcXHUyMEEwLVxcdTIwQzBcXHUyMTAwXFx1MjEwMVxcdTIxMDMtXFx1MjEwNlxcdTIxMDhcXHUyMTA5XFx1MjExNFxcdTIxMTYtXFx1MjExOFxcdTIxMUUtXFx1MjEyM1xcdTIxMjVcXHUyMTI3XFx1MjEyOVxcdTIxMkVcXHUyMTNBXFx1MjEzQlxcdTIxNDAtXFx1MjE0NFxcdTIxNEEtXFx1MjE0RFxcdTIxNEZcXHUyMThBXFx1MjE4QlxcdTIxOTAtXFx1MjMwN1xcdTIzMEMtXFx1MjMyOFxcdTIzMkItXFx1MjQyNlxcdTI0NDAtXFx1MjQ0QVxcdTI0OUMtXFx1MjRFOVxcdTI1MDAtXFx1Mjc2N1xcdTI3OTQtXFx1MjdDNFxcdTI3QzctXFx1MjdFNVxcdTI3RjAtXFx1Mjk4MlxcdTI5OTktXFx1MjlEN1xcdTI5REMtXFx1MjlGQlxcdTI5RkUtXFx1MkI3M1xcdTJCNzYtXFx1MkI5NVxcdTJCOTctXFx1MkJGRlxcdTJDRTUtXFx1MkNFQVxcdTJFNTBcXHUyRTUxXFx1MkU4MC1cXHUyRTk5XFx1MkU5Qi1cXHUyRUYzXFx1MkYwMC1cXHUyRkQ1XFx1MkZGMC1cXHUyRkZGXFx1MzAwNFxcdTMwMTJcXHUzMDEzXFx1MzAyMFxcdTMwMzZcXHUzMDM3XFx1MzAzRVxcdTMwM0ZcXHUzMDlCXFx1MzA5Q1xcdTMxOTBcXHUzMTkxXFx1MzE5Ni1cXHUzMTlGXFx1MzFDMC1cXHUzMUUzXFx1MzFFRlxcdTMyMDAtXFx1MzIxRVxcdTMyMkEtXFx1MzI0N1xcdTMyNTBcXHUzMjYwLVxcdTMyN0ZcXHUzMjhBLVxcdTMyQjBcXHUzMkMwLVxcdTMzRkZcXHU0REMwLVxcdTRERkZcXHVBNDkwLVxcdUE0QzZcXHVBNzAwLVxcdUE3MTZcXHVBNzIwXFx1QTcyMVxcdUE3ODlcXHVBNzhBXFx1QTgyOC1cXHVBODJCXFx1QTgzNi1cXHVBODM5XFx1QUE3Ny1cXHVBQTc5XFx1QUI1QlxcdUFCNkFcXHVBQjZCXFx1RkIyOVxcdUZCQjItXFx1RkJDMlxcdUZENDAtXFx1RkQ0RlxcdUZEQ0ZcXHVGREZDLVxcdUZERkZcXHVGRTYyXFx1RkU2NC1cXHVGRTY2XFx1RkU2OVxcdUZGMDRcXHVGRjBCXFx1RkYxQy1cXHVGRjFFXFx1RkYzRVxcdUZGNDBcXHVGRjVDXFx1RkY1RVxcdUZGRTAtXFx1RkZFNlxcdUZGRTgtXFx1RkZFRVxcdUZGRkNcXHVGRkZEXXxcXHVEODAwW1xcdUREMzctXFx1REQzRlxcdURENzktXFx1REQ4OVxcdUREOEMtXFx1REQ4RVxcdUREOTAtXFx1REQ5Q1xcdUREQTBcXHVEREQwLVxcdURERkNdfFxcdUQ4MDJbXFx1REM3N1xcdURDNzhcXHVERUM4XXxcXHVEODA1XFx1REYzRnxcXHVEODA3W1xcdURGRDUtXFx1REZGMV18XFx1RDgxQVtcXHVERjNDLVxcdURGM0ZcXHVERjQ1XXxcXHVEODJGXFx1REM5Q3xcXHVEODMzW1xcdURGNTAtXFx1REZDM118XFx1RDgzNFtcXHVEQzAwLVxcdURDRjVcXHVERDAwLVxcdUREMjZcXHVERDI5LVxcdURENjRcXHVERDZBLVxcdURENkNcXHVERDgzXFx1REQ4NFxcdUREOEMtXFx1RERBOVxcdUREQUUtXFx1RERFQVxcdURFMDAtXFx1REU0MVxcdURFNDVcXHVERjAwLVxcdURGNTZdfFxcdUQ4MzVbXFx1REVDMVxcdURFREJcXHVERUZCXFx1REYxNVxcdURGMzVcXHVERjRGXFx1REY2RlxcdURGODlcXHVERkE5XFx1REZDM118XFx1RDgzNltcXHVEQzAwLVxcdURERkZcXHVERTM3LVxcdURFM0FcXHVERTZELVxcdURFNzRcXHVERTc2LVxcdURFODNcXHVERTg1XFx1REU4Nl18XFx1RDgzOFtcXHVERDRGXFx1REVGRl18XFx1RDgzQltcXHVEQ0FDXFx1RENCMFxcdUREMkVcXHVERUYwXFx1REVGMV18XFx1RDgzQ1tcXHVEQzAwLVxcdURDMkJcXHVEQzMwLVxcdURDOTNcXHVEQ0EwLVxcdURDQUVcXHVEQ0IxLVxcdURDQkZcXHVEQ0MxLVxcdURDQ0ZcXHVEQ0QxLVxcdURDRjVcXHVERDBELVxcdUREQURcXHVEREU2LVxcdURFMDJcXHVERTEwLVxcdURFM0JcXHVERTQwLVxcdURFNDhcXHVERTUwXFx1REU1MVxcdURFNjAtXFx1REU2NVxcdURGMDAtXFx1REZGRl18XFx1RDgzRFtcXHVEQzAwLVxcdURFRDdcXHVERURDLVxcdURFRUNcXHVERUYwLVxcdURFRkNcXHVERjAwLVxcdURGNzZcXHVERjdCLVxcdURGRDlcXHVERkUwLVxcdURGRUJcXHVERkYwXXxcXHVEODNFW1xcdURDMDAtXFx1REMwQlxcdURDMTAtXFx1REM0N1xcdURDNTAtXFx1REM1OVxcdURDNjAtXFx1REM4N1xcdURDOTAtXFx1RENBRFxcdURDQjBcXHVEQ0IxXFx1REQwMC1cXHVERTUzXFx1REU2MC1cXHVERTZEXFx1REU3MC1cXHVERTdDXFx1REU4MC1cXHVERTg4XFx1REU5MC1cXHVERUJEXFx1REVCRi1cXHVERUM1XFx1REVDRS1cXHVERURCXFx1REVFMC1cXHVERUU4XFx1REVGMC1cXHVERUY4XFx1REYwMC1cXHVERjkyXFx1REY5NC1cXHVERkNBXS8iLCJleHBvcnQgZGVmYXVsdCAvWyBcXHhBMFxcdTE2ODBcXHUyMDAwLVxcdTIwMEFcXHUyMDI4XFx1MjAyOVxcdTIwMkZcXHUyMDVGXFx1MzAwMF0vIiwiLy8gR2VuZXJhdGVkIHVzaW5nIHNjcmlwdHMvd3JpdGUtZGVjb2RlLW1hcC50c1xuZXhwb3J0IGRlZmF1bHQgbmV3IFVpbnQxNkFycmF5KFxuLy8gcHJldHRpZXItaWdub3JlXG5cIlxcdTFkNDE8XFx4ZDVcXHUwMTMxXFx1MDI4YVxcdTA0OWRcXHUwNTdiXFx1MDVkMFxcdTA2NzVcXHUwNmRlXFx1MDdhMlxcdTA3ZDZcXHUwODBmXFx1MGE0YVxcdTBhOTFcXHUwZGExXFx1MGU2ZFxcdTBmMDlcXHUwZjI2XFx1MTBjYVxcdTEyMjhcXHUxMmUxXFx1MTQxNVxcdTE0OWRcXHUxNGMzXFx1MTRkZlxcdTE1MjVcXDBcXDBcXDBcXDBcXDBcXDBcXHUxNTZiXFx1MTZjZFxcdTE5OGRcXHUxYzEyXFx1MWRkZFxcdTFmN2VcXHUyMDYwXFx1MjFiMFxcdTIyOGRcXHUyM2MwXFx1MjNmYlxcdTI0NDJcXHUyODI0XFx1MjkxMlxcdTJkMDhcXHUyZTQ4XFx1MmZjZVxcdTMwMTZcXHUzMmJhXFx1MzYzOVxcdTM3YWNcXHUzOGZlXFx1M2EyOFxcdTNhNzFcXHUzYWUwXFx1M2IyZVxcdTA4MDBFTWFiY2ZnbG1ub3Byc3R1XFxcXGJmbXNcXHg3ZlxceDg0XFx4OGJcXHg5MFxceDk1XFx4OThcXHhhNlxceGIzXFx4YjlcXHhjOFxceGNmbGlnXFx1ODAzYlxceGM2XFx1NDBjNlBcXHU4MDNiJlxcdTQwMjZjdXRlXFx1ODAzYlxceGMxXFx1NDBjMXJldmU7XFx1NDEwMlxcdTAxMDBpeXh9cmNcXHU4MDNiXFx4YzJcXHU0MGMyO1xcdTQ0MTByO1xcdWMwMDBcXHVkODM1XFx1ZGQwNHJhdmVcXHU4MDNiXFx4YzBcXHU0MGMwcGhhO1xcdTQzOTFhY3I7XFx1NDEwMGQ7XFx1NmE1M1xcdTAxMDBncFxceDlkXFx4YTFvbjtcXHU0MTA0ZjtcXHVjMDAwXFx1ZDgzNVxcdWRkMzhwbHlGdW5jdGlvbjtcXHU2MDYxaW5nXFx1ODAzYlxceGM1XFx1NDBjNVxcdTAxMDBjc1xceGJlXFx4YzNyO1xcdWMwMDBcXHVkODM1XFx1ZGM5Y2lnbjtcXHU2MjU0aWxkZVxcdTgwM2JcXHhjM1xcdTQwYzNtbFxcdTgwM2JcXHhjNFxcdTQwYzRcXHUwNDAwYWNlZm9yc3VcXHhlNVxceGZiXFx4ZmVcXHUwMTE3XFx1MDExY1xcdTAxMjJcXHUwMTI3XFx1MDEyYVxcdTAxMDBjclxceGVhXFx4ZjJrc2xhc2g7XFx1NjIxNlxcdTAxNzZcXHhmNlxceGY4O1xcdTZhZTdlZDtcXHU2MzA2eTtcXHU0NDExXFx1MDE4MGNydFxcdTAxMDVcXHUwMTBiXFx1MDExNGF1c2U7XFx1NjIzNW5vdWxsaXM7XFx1NjEyY2E7XFx1NDM5MnI7XFx1YzAwMFxcdWQ4MzVcXHVkZDA1cGY7XFx1YzAwMFxcdWQ4MzVcXHVkZDM5ZXZlO1xcdTQyZDhjXFx4ZjJcXHUwMTEzbXBlcTtcXHU2MjRlXFx1MDcwMEhPYWNkZWZoaWxvcnN1XFx1MDE0ZFxcdTAxNTFcXHUwMTU2XFx1MDE4MFxcdTAxOWVcXHUwMWEyXFx1MDFiNVxcdTAxYjdcXHUwMWJhXFx1MDFkY1xcdTAyMTVcXHUwMjczXFx1MDI3OFxcdTAyN2VjeTtcXHU0NDI3UFlcXHU4MDNiXFx4YTlcXHU0MGE5XFx1MDE4MGNweVxcdTAxNWRcXHUwMTYyXFx1MDE3YXV0ZTtcXHU0MTA2XFx1MDEwMDtpXFx1MDE2N1xcdTAxNjhcXHU2MmQydGFsRGlmZmVyZW50aWFsRDtcXHU2MTQ1bGV5cztcXHU2MTJkXFx1MDIwMGFlaW9cXHUwMTg5XFx1MDE4ZVxcdTAxOTRcXHUwMTk4cm9uO1xcdTQxMGNkaWxcXHU4MDNiXFx4YzdcXHU0MGM3cmM7XFx1NDEwOG5pbnQ7XFx1NjIzMG90O1xcdTQxMGFcXHUwMTAwZG5cXHUwMWE3XFx1MDFhZGlsbGE7XFx1NDBiOHRlckRvdDtcXHU0MGI3XFx4ZjJcXHUwMTdmaTtcXHU0M2E3cmNsZVxcdTAyMDBETVBUXFx1MDFjN1xcdTAxY2JcXHUwMWQxXFx1MDFkNm90O1xcdTYyOTlpbnVzO1xcdTYyOTZsdXM7XFx1NjI5NWltZXM7XFx1NjI5N29cXHUwMTAwY3NcXHUwMWUyXFx1MDFmOGt3aXNlQ29udG91ckludGVncmFsO1xcdTYyMzJlQ3VybHlcXHUwMTAwRFFcXHUwMjAzXFx1MDIwZm91YmxlUXVvdGU7XFx1NjAxZHVvdGU7XFx1NjAxOVxcdTAyMDBsbnB1XFx1MDIxZVxcdTAyMjhcXHUwMjQ3XFx1MDI1NW9uXFx1MDEwMDtlXFx1MDIyNVxcdTAyMjZcXHU2MjM3O1xcdTZhNzRcXHUwMTgwZ2l0XFx1MDIyZlxcdTAyMzZcXHUwMjNhcnVlbnQ7XFx1NjI2MW50O1xcdTYyMmZvdXJJbnRlZ3JhbDtcXHU2MjJlXFx1MDEwMGZyXFx1MDI0Y1xcdTAyNGU7XFx1NjEwMm9kdWN0O1xcdTYyMTBudGVyQ2xvY2t3aXNlQ29udG91ckludGVncmFsO1xcdTYyMzNvc3M7XFx1NmEyZmNyO1xcdWMwMDBcXHVkODM1XFx1ZGM5ZXBcXHUwMTAwO0NcXHUwMjg0XFx1MDI4NVxcdTYyZDNhcDtcXHU2MjRkXFx1MDU4MERKU1phY2VmaW9zXFx1MDJhMFxcdTAyYWNcXHUwMmIwXFx1MDJiNFxcdTAyYjhcXHUwMmNiXFx1MDJkN1xcdTAyZTFcXHUwMmU2XFx1MDMzM1xcdTA0OGRcXHUwMTAwO29cXHUwMTc5XFx1MDJhNXRyYWhkO1xcdTY5MTFjeTtcXHU0NDAyY3k7XFx1NDQwNWN5O1xcdTQ0MGZcXHUwMTgwZ3JzXFx1MDJiZlxcdTAyYzRcXHUwMmM3Z2VyO1xcdTYwMjFyO1xcdTYxYTFodjtcXHU2YWU0XFx1MDEwMGF5XFx1MDJkMFxcdTAyZDVyb247XFx1NDEwZTtcXHU0NDE0bFxcdTAxMDA7dFxcdTAyZGRcXHUwMmRlXFx1NjIwN2E7XFx1NDM5NHI7XFx1YzAwMFxcdWQ4MzVcXHVkZDA3XFx1MDEwMGFmXFx1MDJlYlxcdTAzMjdcXHUwMTAwY21cXHUwMmYwXFx1MDMyMnJpdGljYWxcXHUwMjAwQURHVFxcdTAzMDBcXHUwMzA2XFx1MDMxNlxcdTAzMWNjdXRlO1xcdTQwYjRvXFx1MDE3NFxcdTAzMGJcXHUwMzBkO1xcdTQyZDlibGVBY3V0ZTtcXHU0MmRkcmF2ZTtcXHU0MDYwaWxkZTtcXHU0MmRjb25kO1xcdTYyYzRmZXJlbnRpYWxEO1xcdTYxNDZcXHUwNDcwXFx1MDMzZFxcMFxcMFxcMFxcdTAzNDJcXHUwMzU0XFwwXFx1MDQwNWY7XFx1YzAwMFxcdWQ4MzVcXHVkZDNiXFx1MDE4MDtERVxcdTAzNDhcXHUwMzQ5XFx1MDM0ZFxcdTQwYThvdDtcXHU2MGRjcXVhbDtcXHU2MjUwYmxlXFx1MDMwMENETFJVVlxcdTAzNjNcXHUwMzcyXFx1MDM4MlxcdTAzY2ZcXHUwM2UyXFx1MDNmOG9udG91ckludGVncmFcXHhlY1xcdTAyMzlvXFx1MDI3NFxcdTAzNzlcXDBcXDBcXHUwMzdiXFx4YmJcXHUwMzQ5bkFycm93O1xcdTYxZDNcXHUwMTAwZW9cXHUwMzg3XFx1MDNhNGZ0XFx1MDE4MEFSVFxcdTAzOTBcXHUwMzk2XFx1MDNhMXJyb3c7XFx1NjFkMGlnaHRBcnJvdztcXHU2MWQ0ZVxceGU1XFx1MDJjYW5nXFx1MDEwMExSXFx1MDNhYlxcdTAzYzRlZnRcXHUwMTAwQVJcXHUwM2IzXFx1MDNiOXJyb3c7XFx1NjdmOGlnaHRBcnJvdztcXHU2N2ZhaWdodEFycm93O1xcdTY3ZjlpZ2h0XFx1MDEwMEFUXFx1MDNkOFxcdTAzZGVycm93O1xcdTYxZDJlZTtcXHU2MmE4cFxcdTAyNDFcXHUwM2U5XFwwXFwwXFx1MDNlZnJyb3c7XFx1NjFkMW93bkFycm93O1xcdTYxZDVlcnRpY2FsQmFyO1xcdTYyMjVuXFx1MDMwMEFCTFJUYVxcdTA0MTJcXHUwNDJhXFx1MDQzMFxcdTA0NWVcXHUwNDdmXFx1MDM3Y3Jyb3dcXHUwMTgwO0JVXFx1MDQxZFxcdTA0MWVcXHUwNDIyXFx1NjE5M2FyO1xcdTY5MTNwQXJyb3c7XFx1NjFmNXJldmU7XFx1NDMxMWVmdFxcdTAyZDJcXHUwNDNhXFwwXFx1MDQ0NlxcMFxcdTA0NTBpZ2h0VmVjdG9yO1xcdTY5NTBlZVZlY3RvcjtcXHU2OTVlZWN0b3JcXHUwMTAwO0JcXHUwNDU5XFx1MDQ1YVxcdTYxYmRhcjtcXHU2OTU2aWdodFxcdTAxZDRcXHUwNDY3XFwwXFx1MDQ3MWVlVmVjdG9yO1xcdTY5NWZlY3RvclxcdTAxMDA7QlxcdTA0N2FcXHUwNDdiXFx1NjFjMWFyO1xcdTY5NTdlZVxcdTAxMDA7QVxcdTA0ODZcXHUwNDg3XFx1NjJhNHJyb3c7XFx1NjFhN1xcdTAxMDBjdFxcdTA0OTJcXHUwNDk3cjtcXHVjMDAwXFx1ZDgzNVxcdWRjOWZyb2s7XFx1NDExMFxcdTA4MDBOVGFjZGZnbG1vcHFzdHV4XFx1MDRiZFxcdTA0YzBcXHUwNGM0XFx1MDRjYlxcdTA0ZGVcXHUwNGUyXFx1MDRlN1xcdTA0ZWVcXHUwNGY1XFx1MDUyMVxcdTA1MmZcXHUwNTM2XFx1MDU1MlxcdTA1NWRcXHUwNTYwXFx1MDU2NUc7XFx1NDE0YUhcXHU4MDNiXFx4ZDBcXHU0MGQwY3V0ZVxcdTgwM2JcXHhjOVxcdTQwYzlcXHUwMTgwYWl5XFx1MDRkMlxcdTA0ZDdcXHUwNGRjcm9uO1xcdTQxMWFyY1xcdTgwM2JcXHhjYVxcdTQwY2E7XFx1NDQyZG90O1xcdTQxMTZyO1xcdWMwMDBcXHVkODM1XFx1ZGQwOHJhdmVcXHU4MDNiXFx4YzhcXHU0MGM4ZW1lbnQ7XFx1NjIwOFxcdTAxMDBhcFxcdTA0ZmFcXHUwNGZlY3I7XFx1NDExMnR5XFx1MDI1M1xcdTA1MDZcXDBcXDBcXHUwNTEybWFsbFNxdWFyZTtcXHU2NWZiZXJ5U21hbGxTcXVhcmU7XFx1NjVhYlxcdTAxMDBncFxcdTA1MjZcXHUwNTJhb247XFx1NDExOGY7XFx1YzAwMFxcdWQ4MzVcXHVkZDNjc2lsb247XFx1NDM5NXVcXHUwMTAwYWlcXHUwNTNjXFx1MDU0OWxcXHUwMTAwO1RcXHUwNTQyXFx1MDU0M1xcdTZhNzVpbGRlO1xcdTYyNDJsaWJyaXVtO1xcdTYxY2NcXHUwMTAwY2lcXHUwNTU3XFx1MDU1YXI7XFx1NjEzMG07XFx1NmE3M2E7XFx1NDM5N21sXFx1ODAzYlxceGNiXFx1NDBjYlxcdTAxMDBpcFxcdTA1NmFcXHUwNTZmc3RzO1xcdTYyMDNvbmVudGlhbEU7XFx1NjE0N1xcdTAyODBjZmlvc1xcdTA1ODVcXHUwNTg4XFx1MDU4ZFxcdTA1YjJcXHUwNWNjeTtcXHU0NDI0cjtcXHVjMDAwXFx1ZDgzNVxcdWRkMDlsbGVkXFx1MDI1M1xcdTA1OTdcXDBcXDBcXHUwNWEzbWFsbFNxdWFyZTtcXHU2NWZjZXJ5U21hbGxTcXVhcmU7XFx1NjVhYVxcdTAzNzBcXHUwNWJhXFwwXFx1MDViZlxcMFxcMFxcdTA1YzRmO1xcdWMwMDBcXHVkODM1XFx1ZGQzZEFsbDtcXHU2MjAwcmllcnRyZjtcXHU2MTMxY1xceGYyXFx1MDVjYlxcdTA2MDBKVGFiY2RmZ29yc3RcXHUwNWU4XFx1MDVlY1xcdTA1ZWZcXHUwNWZhXFx1MDYwMFxcdTA2MTJcXHUwNjE2XFx1MDYxYlxcdTA2MWRcXHUwNjIzXFx1MDY2Y1xcdTA2NzJjeTtcXHU0NDAzXFx1ODAzYj5cXHU0MDNlbW1hXFx1MDEwMDtkXFx1MDVmN1xcdTA1ZjhcXHU0MzkzO1xcdTQzZGNyZXZlO1xcdTQxMWVcXHUwMTgwZWl5XFx1MDYwN1xcdTA2MGNcXHUwNjEwZGlsO1xcdTQxMjJyYztcXHU0MTFjO1xcdTQ0MTNvdDtcXHU0MTIwcjtcXHVjMDAwXFx1ZDgzNVxcdWRkMGE7XFx1NjJkOXBmO1xcdWMwMDBcXHVkODM1XFx1ZGQzZWVhdGVyXFx1MDMwMEVGR0xTVFxcdTA2MzVcXHUwNjQ0XFx1MDY0ZVxcdTA2NTZcXHUwNjViXFx1MDY2NnF1YWxcXHUwMTAwO0xcXHUwNjNlXFx1MDYzZlxcdTYyNjVlc3M7XFx1NjJkYnVsbEVxdWFsO1xcdTYyNjdyZWF0ZXI7XFx1NmFhMmVzcztcXHU2Mjc3bGFudEVxdWFsO1xcdTZhN2VpbGRlO1xcdTYyNzNjcjtcXHVjMDAwXFx1ZDgzNVxcdWRjYTI7XFx1NjI2YlxcdTA0MDBBYWNmaW9zdVxcdTA2ODVcXHUwNjhiXFx1MDY5NlxcdTA2OWJcXHUwNjllXFx1MDZhYVxcdTA2YmVcXHUwNmNhUkRjeTtcXHU0NDJhXFx1MDEwMGN0XFx1MDY5MFxcdTA2OTRlaztcXHU0MmM3O1xcdTQwNWVpcmM7XFx1NDEyNHI7XFx1NjEwY2xiZXJ0U3BhY2U7XFx1NjEwYlxcdTAxZjBcXHUwNmFmXFwwXFx1MDZiMmY7XFx1NjEwZGl6b250YWxMaW5lO1xcdTY1MDBcXHUwMTAwY3RcXHUwNmMzXFx1MDZjNVxceGYyXFx1MDZhOXJvaztcXHU0MTI2bXBcXHUwMTQ0XFx1MDZkMFxcdTA2ZDhvd25IdW1cXHhmMFxcdTAxMmZxdWFsO1xcdTYyNGZcXHUwNzAwRUpPYWNkZmdtbm9zdHVcXHUwNmZhXFx1MDZmZVxcdTA3MDNcXHUwNzA3XFx1MDcwZVxcdTA3MWFcXHUwNzFlXFx1MDcyMVxcdTA3MjhcXHUwNzQ0XFx1MDc3OFxcdTA3OGJcXHUwNzhmXFx1MDc5NWN5O1xcdTQ0MTVsaWc7XFx1NDEzMmN5O1xcdTQ0MDFjdXRlXFx1ODAzYlxceGNkXFx1NDBjZFxcdTAxMDBpeVxcdTA3MTNcXHUwNzE4cmNcXHU4MDNiXFx4Y2VcXHU0MGNlO1xcdTQ0MThvdDtcXHU0MTMwcjtcXHU2MTExcmF2ZVxcdTgwM2JcXHhjY1xcdTQwY2NcXHUwMTgwO2FwXFx1MDcyMFxcdTA3MmZcXHUwNzNmXFx1MDEwMGNnXFx1MDczNFxcdTA3MzdyO1xcdTQxMmFpbmFyeUk7XFx1NjE0OGxpZVxceGYzXFx1MDNkZFxcdTAxZjRcXHUwNzQ5XFwwXFx1MDc2MlxcdTAxMDA7ZVxcdTA3NGRcXHUwNzRlXFx1NjIyY1xcdTAxMDBnclxcdTA3NTNcXHUwNzU4cmFsO1xcdTYyMmJzZWN0aW9uO1xcdTYyYzJpc2libGVcXHUwMTAwQ1RcXHUwNzZjXFx1MDc3Mm9tbWE7XFx1NjA2M2ltZXM7XFx1NjA2MlxcdTAxODBncHRcXHUwNzdmXFx1MDc4M1xcdTA3ODhvbjtcXHU0MTJlZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNDBhO1xcdTQzOTljcjtcXHU2MTEwaWxkZTtcXHU0MTI4XFx1MDFlYlxcdTA3OWFcXDBcXHUwNzllY3k7XFx1NDQwNmxcXHU4MDNiXFx4Y2ZcXHU0MGNmXFx1MDI4MGNmb3N1XFx1MDdhY1xcdTA3YjdcXHUwN2JjXFx1MDdjMlxcdTA3ZDBcXHUwMTAwaXlcXHUwN2IxXFx1MDdiNXJjO1xcdTQxMzQ7XFx1NDQxOXI7XFx1YzAwMFxcdWQ4MzVcXHVkZDBkcGY7XFx1YzAwMFxcdWQ4MzVcXHVkZDQxXFx1MDFlM1xcdTA3YzdcXDBcXHUwN2NjcjtcXHVjMDAwXFx1ZDgzNVxcdWRjYTVyY3k7XFx1NDQwOGtjeTtcXHU0NDA0XFx1MDM4MEhKYWNmb3NcXHUwN2U0XFx1MDdlOFxcdTA3ZWNcXHUwN2YxXFx1MDdmZFxcdTA4MDJcXHUwODA4Y3k7XFx1NDQyNWN5O1xcdTQ0MGNwcGE7XFx1NDM5YVxcdTAxMDBleVxcdTA3ZjZcXHUwN2ZiZGlsO1xcdTQxMzY7XFx1NDQxYXI7XFx1YzAwMFxcdWQ4MzVcXHVkZDBlcGY7XFx1YzAwMFxcdWQ4MzVcXHVkZDQyY3I7XFx1YzAwMFxcdWQ4MzVcXHVkY2E2XFx1MDU4MEpUYWNlZmxtb3N0XFx1MDgyNVxcdTA4MjlcXHUwODJjXFx1MDg1MFxcdTA4NjNcXHUwOWIzXFx1MDliOFxcdTA5YzdcXHUwOWNkXFx1MGEzN1xcdTBhNDdjeTtcXHU0NDA5XFx1ODAzYjxcXHU0MDNjXFx1MDI4MGNtbnByXFx1MDgzN1xcdTA4M2NcXHUwODQxXFx1MDg0NFxcdTA4NGR1dGU7XFx1NDEzOWJkYTtcXHU0MzliZztcXHU2N2VhbGFjZXRyZjtcXHU2MTEycjtcXHU2MTllXFx1MDE4MGFleVxcdTA4NTdcXHUwODVjXFx1MDg2MXJvbjtcXHU0MTNkZGlsO1xcdTQxM2I7XFx1NDQxYlxcdTAxMDBmc1xcdTA4NjhcXHUwOTcwdFxcdTA1MDBBQ0RGUlRVVmFyXFx1MDg3ZVxcdTA4YTlcXHUwOGIxXFx1MDhlMFxcdTA4ZTZcXHUwOGZjXFx1MDkyZlxcdTA5NWJcXHUwMzkwXFx1MDk2YVxcdTAxMDBuclxcdTA4ODNcXHUwODhmZ2xlQnJhY2tldDtcXHU2N2U4cm93XFx1MDE4MDtCUlxcdTA4OTlcXHUwODlhXFx1MDg5ZVxcdTYxOTBhcjtcXHU2MWU0aWdodEFycm93O1xcdTYxYzZlaWxpbmc7XFx1NjMwOG9cXHUwMWY1XFx1MDhiN1xcMFxcdTA4YzNibGVCcmFja2V0O1xcdTY3ZTZuXFx1MDFkNFxcdTA4YzhcXDBcXHUwOGQyZWVWZWN0b3I7XFx1Njk2MWVjdG9yXFx1MDEwMDtCXFx1MDhkYlxcdTA4ZGNcXHU2MWMzYXI7XFx1Njk1OWxvb3I7XFx1NjMwYWlnaHRcXHUwMTAwQVZcXHUwOGVmXFx1MDhmNXJyb3c7XFx1NjE5NGVjdG9yO1xcdTY5NGVcXHUwMTAwZXJcXHUwOTAxXFx1MDkxN2VcXHUwMTgwO0FWXFx1MDkwOVxcdTA5MGFcXHUwOTEwXFx1NjJhM3Jyb3c7XFx1NjFhNGVjdG9yO1xcdTY5NWFpYW5nbGVcXHUwMTgwO0JFXFx1MDkyNFxcdTA5MjVcXHUwOTI5XFx1NjJiMmFyO1xcdTY5Y2ZxdWFsO1xcdTYyYjRwXFx1MDE4MERUVlxcdTA5MzdcXHUwOTQyXFx1MDk0Y293blZlY3RvcjtcXHU2OTUxZWVWZWN0b3I7XFx1Njk2MGVjdG9yXFx1MDEwMDtCXFx1MDk1NlxcdTA5NTdcXHU2MWJmYXI7XFx1Njk1OGVjdG9yXFx1MDEwMDtCXFx1MDk2NVxcdTA5NjZcXHU2MWJjYXI7XFx1Njk1MmlnaHRcXHhlMVxcdTAzOWNzXFx1MDMwMEVGR0xTVFxcdTA5N2VcXHUwOThiXFx1MDk5NVxcdTA5OWRcXHUwOWEyXFx1MDlhZHF1YWxHcmVhdGVyO1xcdTYyZGF1bGxFcXVhbDtcXHU2MjY2cmVhdGVyO1xcdTYyNzZlc3M7XFx1NmFhMWxhbnRFcXVhbDtcXHU2YTdkaWxkZTtcXHU2MjcycjtcXHVjMDAwXFx1ZDgzNVxcdWRkMGZcXHUwMTAwO2VcXHUwOWJkXFx1MDliZVxcdTYyZDhmdGFycm93O1xcdTYxZGFpZG90O1xcdTQxM2ZcXHUwMTgwbnB3XFx1MDlkNFxcdTBhMTZcXHUwYTFiZ1xcdTAyMDBMUmxyXFx1MDlkZVxcdTA5ZjdcXHUwYTAyXFx1MGExMGVmdFxcdTAxMDBBUlxcdTA5ZTZcXHUwOWVjcnJvdztcXHU2N2Y1aWdodEFycm93O1xcdTY3ZjdpZ2h0QXJyb3c7XFx1NjdmNmVmdFxcdTAxMDBhclxcdTAzYjNcXHUwYTBhaWdodFxceGUxXFx1MDNiZmlnaHRcXHhlMVxcdTAzY2FmO1xcdWMwMDBcXHVkODM1XFx1ZGQ0M2VyXFx1MDEwMExSXFx1MGEyMlxcdTBhMmNlZnRBcnJvdztcXHU2MTk5aWdodEFycm93O1xcdTYxOThcXHUwMTgwY2h0XFx1MGEzZVxcdTBhNDBcXHUwYTQyXFx4ZjJcXHUwODRjO1xcdTYxYjByb2s7XFx1NDE0MTtcXHU2MjZhXFx1MDQwMGFjZWZpb3N1XFx1MGE1YVxcdTBhNWRcXHUwYTYwXFx1MGE3N1xcdTBhN2NcXHUwYTg1XFx1MGE4YlxcdTBhOGVwO1xcdTY5MDV5O1xcdTQ0MWNcXHUwMTAwZGxcXHUwYTY1XFx1MGE2Zml1bVNwYWNlO1xcdTYwNWZsaW50cmY7XFx1NjEzM3I7XFx1YzAwMFxcdWQ4MzVcXHVkZDEwbnVzUGx1cztcXHU2MjEzcGY7XFx1YzAwMFxcdWQ4MzVcXHVkZDQ0Y1xceGYyXFx1MGE3NjtcXHU0MzljXFx1MDQ4MEphY2Vmb3N0dVxcdTBhYTNcXHUwYWE3XFx1MGFhZFxcdTBhYzBcXHUwYjE0XFx1MGIxOVxcdTBkOTFcXHUwZDk3XFx1MGQ5ZWN5O1xcdTQ0MGFjdXRlO1xcdTQxNDNcXHUwMTgwYWV5XFx1MGFiNFxcdTBhYjlcXHUwYWJlcm9uO1xcdTQxNDdkaWw7XFx1NDE0NTtcXHU0NDFkXFx1MDE4MGdzd1xcdTBhYzdcXHUwYWYwXFx1MGIwZWF0aXZlXFx1MDE4ME1UVlxcdTBhZDNcXHUwYWRmXFx1MGFlOGVkaXVtU3BhY2U7XFx1NjAwYmhpXFx1MDEwMGNuXFx1MGFlNlxcdTBhZDhcXHhlYlxcdTBhZDllcnlUaGlcXHhlZVxcdTBhZDl0ZWRcXHUwMTAwR0xcXHUwYWY4XFx1MGIwNnJlYXRlckdyZWF0ZVxceGYyXFx1MDY3M2Vzc0xlc1xceGYzXFx1MGE0OExpbmU7XFx1NDAwYXI7XFx1YzAwMFxcdWQ4MzVcXHVkZDExXFx1MDIwMEJucHRcXHUwYjIyXFx1MGIyOFxcdTBiMzdcXHUwYjNhcmVhaztcXHU2MDYwQnJlYWtpbmdTcGFjZTtcXHU0MGEwZjtcXHU2MTE1XFx1MDY4MDtDREVHSExOUFJTVFZcXHUwYjU1XFx1MGI1NlxcdTBiNmFcXHUwYjdjXFx1MGJhMVxcdTBiZWJcXHUwYzA0XFx1MGM1ZVxcdTBjODRcXHUwY2E2XFx1MGNkOFxcdTBkNjFcXHUwZDg1XFx1NmFlY1xcdTAxMDBvdVxcdTBiNWJcXHUwYjY0bmdydWVudDtcXHU2MjYycENhcDtcXHU2MjZkb3VibGVWZXJ0aWNhbEJhcjtcXHU2MjI2XFx1MDE4MGxxeFxcdTBiODNcXHUwYjhhXFx1MGI5YmVtZW50O1xcdTYyMDl1YWxcXHUwMTAwO1RcXHUwYjkyXFx1MGI5M1xcdTYyNjBpbGRlO1xcdWMwMDBcXHUyMjQyXFx1MDMzOGlzdHM7XFx1NjIwNHJlYXRlclxcdTAzODA7RUZHTFNUXFx1MGJiNlxcdTBiYjdcXHUwYmJkXFx1MGJjOVxcdTBiZDNcXHUwYmQ4XFx1MGJlNVxcdTYyNmZxdWFsO1xcdTYyNzF1bGxFcXVhbDtcXHVjMDAwXFx1MjI2N1xcdTAzMzhyZWF0ZXI7XFx1YzAwMFxcdTIyNmJcXHUwMzM4ZXNzO1xcdTYyNzlsYW50RXF1YWw7XFx1YzAwMFxcdTJhN2VcXHUwMzM4aWxkZTtcXHU2Mjc1dW1wXFx1MDE0NFxcdTBiZjJcXHUwYmZkb3duSHVtcDtcXHVjMDAwXFx1MjI0ZVxcdTAzMzhxdWFsO1xcdWMwMDBcXHUyMjRmXFx1MDMzOGVcXHUwMTAwZnNcXHUwYzBhXFx1MGMyN3RUcmlhbmdsZVxcdTAxODA7QkVcXHUwYzFhXFx1MGMxYlxcdTBjMjFcXHU2MmVhYXI7XFx1YzAwMFxcdTI5Y2ZcXHUwMzM4cXVhbDtcXHU2MmVjc1xcdTAzMDA7RUdMU1RcXHUwYzM1XFx1MGMzNlxcdTBjM2NcXHUwYzQ0XFx1MGM0YlxcdTBjNThcXHU2MjZlcXVhbDtcXHU2MjcwcmVhdGVyO1xcdTYyNzhlc3M7XFx1YzAwMFxcdTIyNmFcXHUwMzM4bGFudEVxdWFsO1xcdWMwMDBcXHUyYTdkXFx1MDMzOGlsZGU7XFx1NjI3NGVzdGVkXFx1MDEwMEdMXFx1MGM2OFxcdTBjNzlyZWF0ZXJHcmVhdGVyO1xcdWMwMDBcXHUyYWEyXFx1MDMzOGVzc0xlc3M7XFx1YzAwMFxcdTJhYTFcXHUwMzM4cmVjZWRlc1xcdTAxODA7RVNcXHUwYzkyXFx1MGM5M1xcdTBjOWJcXHU2MjgwcXVhbDtcXHVjMDAwXFx1MmFhZlxcdTAzMzhsYW50RXF1YWw7XFx1NjJlMFxcdTAxMDBlaVxcdTBjYWJcXHUwY2I5dmVyc2VFbGVtZW50O1xcdTYyMGNnaHRUcmlhbmdsZVxcdTAxODA7QkVcXHUwY2NiXFx1MGNjY1xcdTBjZDJcXHU2MmViYXI7XFx1YzAwMFxcdTI5ZDBcXHUwMzM4cXVhbDtcXHU2MmVkXFx1MDEwMHF1XFx1MGNkZFxcdTBkMGN1YXJlU3VcXHUwMTAwYnBcXHUwY2U4XFx1MGNmOXNldFxcdTAxMDA7RVxcdTBjZjBcXHUwY2YzXFx1YzAwMFxcdTIyOGZcXHUwMzM4cXVhbDtcXHU2MmUyZXJzZXRcXHUwMTAwO0VcXHUwZDAzXFx1MGQwNlxcdWMwMDBcXHUyMjkwXFx1MDMzOHF1YWw7XFx1NjJlM1xcdTAxODBiY3BcXHUwZDEzXFx1MGQyNFxcdTBkNGVzZXRcXHUwMTAwO0VcXHUwZDFiXFx1MGQxZVxcdWMwMDBcXHUyMjgyXFx1MjBkMnF1YWw7XFx1NjI4OGNlZWRzXFx1MDIwMDtFU1RcXHUwZDMyXFx1MGQzM1xcdTBkM2JcXHUwZDQ2XFx1NjI4MXF1YWw7XFx1YzAwMFxcdTJhYjBcXHUwMzM4bGFudEVxdWFsO1xcdTYyZTFpbGRlO1xcdWMwMDBcXHUyMjdmXFx1MDMzOGVyc2V0XFx1MDEwMDtFXFx1MGQ1OFxcdTBkNWJcXHVjMDAwXFx1MjI4M1xcdTIwZDJxdWFsO1xcdTYyODlpbGRlXFx1MDIwMDtFRlRcXHUwZDZlXFx1MGQ2ZlxcdTBkNzVcXHUwZDdmXFx1NjI0MXF1YWw7XFx1NjI0NHVsbEVxdWFsO1xcdTYyNDdpbGRlO1xcdTYyNDllcnRpY2FsQmFyO1xcdTYyMjRjcjtcXHVjMDAwXFx1ZDgzNVxcdWRjYTlpbGRlXFx1ODAzYlxceGQxXFx1NDBkMTtcXHU0MzlkXFx1MDcwMEVhY2RmZ21vcHJzdHV2XFx1MGRiZFxcdTBkYzJcXHUwZGM5XFx1MGRkNVxcdTBkZGJcXHUwZGUwXFx1MGRlN1xcdTBkZmNcXHUwZTAyXFx1MGUyMFxcdTBlMjJcXHUwZTMyXFx1MGUzZlxcdTBlNDRsaWc7XFx1NDE1MmN1dGVcXHU4MDNiXFx4ZDNcXHU0MGQzXFx1MDEwMGl5XFx1MGRjZVxcdTBkZDNyY1xcdTgwM2JcXHhkNFxcdTQwZDQ7XFx1NDQxZWJsYWM7XFx1NDE1MHI7XFx1YzAwMFxcdWQ4MzVcXHVkZDEycmF2ZVxcdTgwM2JcXHhkMlxcdTQwZDJcXHUwMTgwYWVpXFx1MGRlZVxcdTBkZjJcXHUwZGY2Y3I7XFx1NDE0Y2dhO1xcdTQzYTljcm9uO1xcdTQzOWZwZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNDZlbkN1cmx5XFx1MDEwMERRXFx1MGUwZVxcdTBlMWFvdWJsZVF1b3RlO1xcdTYwMWN1b3RlO1xcdTYwMTg7XFx1NmE1NFxcdTAxMDBjbFxcdTBlMjdcXHUwZTJjcjtcXHVjMDAwXFx1ZDgzNVxcdWRjYWFhc2hcXHU4MDNiXFx4ZDhcXHU0MGQ4aVxcdTAxNmNcXHUwZTM3XFx1MGUzY2RlXFx1ODAzYlxceGQ1XFx1NDBkNWVzO1xcdTZhMzdtbFxcdTgwM2JcXHhkNlxcdTQwZDZlclxcdTAxMDBCUFxcdTBlNGJcXHUwZTYwXFx1MDEwMGFyXFx1MGU1MFxcdTBlNTNyO1xcdTYwM2VhY1xcdTAxMDBla1xcdTBlNWFcXHUwZTVjO1xcdTYzZGVldDtcXHU2M2I0YXJlbnRoZXNpcztcXHU2M2RjXFx1MDQ4MGFjZmhpbG9yc1xcdTBlN2ZcXHUwZTg3XFx1MGU4YVxcdTBlOGZcXHUwZTkyXFx1MGU5NFxcdTBlOWRcXHUwZWIwXFx1MGVmY3J0aWFsRDtcXHU2MjAyeTtcXHU0NDFmcjtcXHVjMDAwXFx1ZDgzNVxcdWRkMTNpO1xcdTQzYTY7XFx1NDNhMHVzTWludXM7XFx1NDBiMVxcdTAxMDBpcFxcdTBlYTJcXHUwZWFkbmNhcmVwbGFuXFx4ZTVcXHUwNjlkZjtcXHU2MTE5XFx1MDIwMDtlaW9cXHUwZWI5XFx1MGViYVxcdTBlZTBcXHUwZWU0XFx1NmFiYmNlZGVzXFx1MDIwMDtFU1RcXHUwZWM4XFx1MGVjOVxcdTBlY2ZcXHUwZWRhXFx1NjI3YXF1YWw7XFx1NmFhZmxhbnRFcXVhbDtcXHU2MjdjaWxkZTtcXHU2MjdlbWU7XFx1NjAzM1xcdTAxMDBkcFxcdTBlZTlcXHUwZWVldWN0O1xcdTYyMGZvcnRpb25cXHUwMTAwO2FcXHUwMjI1XFx1MGVmOWw7XFx1NjIxZFxcdTAxMDBjaVxcdTBmMDFcXHUwZjA2cjtcXHVjMDAwXFx1ZDgzNVxcdWRjYWI7XFx1NDNhOFxcdTAyMDBVZm9zXFx1MGYxMVxcdTBmMTZcXHUwZjFiXFx1MGYxZk9UXFx1ODAzYlxcXCJcXHU0MDIycjtcXHVjMDAwXFx1ZDgzNVxcdWRkMTRwZjtcXHU2MTFhY3I7XFx1YzAwMFxcdWQ4MzVcXHVkY2FjXFx1MDYwMEJFYWNlZmhpb3JzdVxcdTBmM2VcXHUwZjQzXFx1MGY0N1xcdTBmNjBcXHUwZjczXFx1MGZhN1xcdTBmYWFcXHUwZmFkXFx1MTA5NlxcdTEwYTlcXHUxMGI0XFx1MTBiZWFycjtcXHU2OTEwR1xcdTgwM2JcXHhhZVxcdTQwYWVcXHUwMTgwY25yXFx1MGY0ZVxcdTBmNTNcXHUwZjU2dXRlO1xcdTQxNTRnO1xcdTY3ZWJyXFx1MDEwMDt0XFx1MGY1Y1xcdTBmNWRcXHU2MWEwbDtcXHU2OTE2XFx1MDE4MGFleVxcdTBmNjdcXHUwZjZjXFx1MGY3MXJvbjtcXHU0MTU4ZGlsO1xcdTQxNTY7XFx1NDQyMFxcdTAxMDA7dlxcdTBmNzhcXHUwZjc5XFx1NjExY2Vyc2VcXHUwMTAwRVVcXHUwZjgyXFx1MGY5OVxcdTAxMDBscVxcdTBmODdcXHUwZjhlZW1lbnQ7XFx1NjIwYnVpbGlicml1bTtcXHU2MWNicEVxdWlsaWJyaXVtO1xcdTY5NmZyXFx4YmJcXHUwZjc5bztcXHU0M2ExZ2h0XFx1MDQwMEFDREZUVVZhXFx1MGZjMVxcdTBmZWJcXHUwZmYzXFx1MTAyMlxcdTEwMjhcXHUxMDViXFx1MTA4N1xcdTAzZDhcXHUwMTAwbnJcXHUwZmM2XFx1MGZkMmdsZUJyYWNrZXQ7XFx1NjdlOXJvd1xcdTAxODA7QkxcXHUwZmRjXFx1MGZkZFxcdTBmZTFcXHU2MTkyYXI7XFx1NjFlNWVmdEFycm93O1xcdTYxYzRlaWxpbmc7XFx1NjMwOW9cXHUwMWY1XFx1MGZmOVxcMFxcdTEwMDVibGVCcmFja2V0O1xcdTY3ZTduXFx1MDFkNFxcdTEwMGFcXDBcXHUxMDE0ZWVWZWN0b3I7XFx1Njk1ZGVjdG9yXFx1MDEwMDtCXFx1MTAxZFxcdTEwMWVcXHU2MWMyYXI7XFx1Njk1NWxvb3I7XFx1NjMwYlxcdTAxMDBlclxcdTEwMmRcXHUxMDQzZVxcdTAxODA7QVZcXHUxMDM1XFx1MTAzNlxcdTEwM2NcXHU2MmEycnJvdztcXHU2MWE2ZWN0b3I7XFx1Njk1YmlhbmdsZVxcdTAxODA7QkVcXHUxMDUwXFx1MTA1MVxcdTEwNTVcXHU2MmIzYXI7XFx1NjlkMHF1YWw7XFx1NjJiNXBcXHUwMTgwRFRWXFx1MTA2M1xcdTEwNmVcXHUxMDc4b3duVmVjdG9yO1xcdTY5NGZlZVZlY3RvcjtcXHU2OTVjZWN0b3JcXHUwMTAwO0JcXHUxMDgyXFx1MTA4M1xcdTYxYmVhcjtcXHU2OTU0ZWN0b3JcXHUwMTAwO0JcXHUxMDkxXFx1MTA5MlxcdTYxYzBhcjtcXHU2OTUzXFx1MDEwMHB1XFx1MTA5YlxcdTEwOWVmO1xcdTYxMWRuZEltcGxpZXM7XFx1Njk3MGlnaHRhcnJvdztcXHU2MWRiXFx1MDEwMGNoXFx1MTBiOVxcdTEwYmNyO1xcdTYxMWI7XFx1NjFiMWxlRGVsYXllZDtcXHU2OWY0XFx1MDY4MEhPYWNmaGltb3FzdHVcXHUxMGU0XFx1MTBmMVxcdTEwZjdcXHUxMGZkXFx1MTExOVxcdTExMWVcXHUxMTUxXFx1MTE1NlxcdTExNjFcXHUxMTY3XFx1MTFiNVxcdTExYmJcXHUxMWJmXFx1MDEwMENjXFx1MTBlOVxcdTEwZWVIY3k7XFx1NDQyOXk7XFx1NDQyOEZUY3k7XFx1NDQyY2N1dGU7XFx1NDE1YVxcdTAyODA7YWVpeVxcdTExMDhcXHUxMTA5XFx1MTEwZVxcdTExMTNcXHUxMTE3XFx1NmFiY3JvbjtcXHU0MTYwZGlsO1xcdTQxNWVyYztcXHU0MTVjO1xcdTQ0MjFyO1xcdWMwMDBcXHVkODM1XFx1ZGQxNm9ydFxcdTAyMDBETFJVXFx1MTEyYVxcdTExMzRcXHUxMTNlXFx1MTE0OW93bkFycm93XFx4YmJcXHUwNDFlZWZ0QXJyb3dcXHhiYlxcdTA4OWFpZ2h0QXJyb3dcXHhiYlxcdTBmZGRwQXJyb3c7XFx1NjE5MWdtYTtcXHU0M2EzYWxsQ2lyY2xlO1xcdTYyMThwZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNGFcXHUwMjcyXFx1MTE2ZFxcMFxcMFxcdTExNzB0O1xcdTYyMWFhcmVcXHUwMjAwO0lTVVxcdTExN2JcXHUxMTdjXFx1MTE4OVxcdTExYWZcXHU2NWExbnRlcnNlY3Rpb247XFx1NjI5M3VcXHUwMTAwYnBcXHUxMThmXFx1MTE5ZXNldFxcdTAxMDA7RVxcdTExOTdcXHUxMTk4XFx1NjI4ZnF1YWw7XFx1NjI5MWVyc2V0XFx1MDEwMDtFXFx1MTFhOFxcdTExYTlcXHU2MjkwcXVhbDtcXHU2MjkybmlvbjtcXHU2Mjk0Y3I7XFx1YzAwMFxcdWQ4MzVcXHVkY2FlYXI7XFx1NjJjNlxcdTAyMDBiY21wXFx1MTFjOFxcdTExZGJcXHUxMjA5XFx1MTIwYlxcdTAxMDA7c1xcdTExY2RcXHUxMWNlXFx1NjJkMGV0XFx1MDEwMDtFXFx1MTFjZFxcdTExZDVxdWFsO1xcdTYyODZcXHUwMTAwY2hcXHUxMWUwXFx1MTIwNWVlZHNcXHUwMjAwO0VTVFxcdTExZWRcXHUxMWVlXFx1MTFmNFxcdTExZmZcXHU2MjdicXVhbDtcXHU2YWIwbGFudEVxdWFsO1xcdTYyN2RpbGRlO1xcdTYyN2ZUaFxceGUxXFx1MGY4YztcXHU2MjExXFx1MDE4MDtlc1xcdTEyMTJcXHUxMjEzXFx1MTIyM1xcdTYyZDFyc2V0XFx1MDEwMDtFXFx1MTIxY1xcdTEyMWRcXHU2MjgzcXVhbDtcXHU2Mjg3ZXRcXHhiYlxcdTEyMTNcXHUwNTgwSFJTYWNmaGlvcnNcXHUxMjNlXFx1MTI0NFxcdTEyNDlcXHUxMjU1XFx1MTI1ZVxcdTEyNzFcXHUxMjc2XFx1MTI5ZlxcdTEyYzJcXHUxMmM4XFx1MTJkMU9STlxcdTgwM2JcXHhkZVxcdTQwZGVBREU7XFx1NjEyMlxcdTAxMDBIY1xcdTEyNGVcXHUxMjUyY3k7XFx1NDQwYnk7XFx1NDQyNlxcdTAxMDBidVxcdTEyNWFcXHUxMjVjO1xcdTQwMDk7XFx1NDNhNFxcdTAxODBhZXlcXHUxMjY1XFx1MTI2YVxcdTEyNmZyb247XFx1NDE2NGRpbDtcXHU0MTYyO1xcdTQ0MjJyO1xcdWMwMDBcXHVkODM1XFx1ZGQxN1xcdTAxMDBlaVxcdTEyN2JcXHUxMjg5XFx1MDFmMlxcdTEyODBcXDBcXHUxMjg3ZWZvcmU7XFx1NjIzNGE7XFx1NDM5OFxcdTAxMDBjblxcdTEyOGVcXHUxMjk4a1NwYWNlO1xcdWMwMDBcXHUyMDVmXFx1MjAwYVNwYWNlO1xcdTYwMDlsZGVcXHUwMjAwO0VGVFxcdTEyYWJcXHUxMmFjXFx1MTJiMlxcdTEyYmNcXHU2MjNjcXVhbDtcXHU2MjQzdWxsRXF1YWw7XFx1NjI0NWlsZGU7XFx1NjI0OHBmO1xcdWMwMDBcXHVkODM1XFx1ZGQ0YmlwbGVEb3Q7XFx1NjBkYlxcdTAxMDBjdFxcdTEyZDZcXHUxMmRicjtcXHVjMDAwXFx1ZDgzNVxcdWRjYWZyb2s7XFx1NDE2NlxcdTBhZTFcXHUxMmY3XFx1MTMwZVxcdTEzMWFcXHUxMzI2XFwwXFx1MTMyY1xcdTEzMzFcXDBcXDBcXDBcXDBcXDBcXHUxMzM4XFx1MTMzZFxcdTEzNzdcXHUxMzg1XFwwXFx1MTNmZlxcdTE0MDRcXHUxNDBhXFx1MTQxMFxcdTAxMDBjclxcdTEyZmJcXHUxMzAxdXRlXFx1ODAzYlxceGRhXFx1NDBkYXJcXHUwMTAwO29cXHUxMzA3XFx1MTMwOFxcdTYxOWZjaXI7XFx1Njk0OXJcXHUwMWUzXFx1MTMxM1xcMFxcdTEzMTZ5O1xcdTQ0MGV2ZTtcXHU0MTZjXFx1MDEwMGl5XFx1MTMxZVxcdTEzMjNyY1xcdTgwM2JcXHhkYlxcdTQwZGI7XFx1NDQyM2JsYWM7XFx1NDE3MHI7XFx1YzAwMFxcdWQ4MzVcXHVkZDE4cmF2ZVxcdTgwM2JcXHhkOVxcdTQwZDlhY3I7XFx1NDE2YVxcdTAxMDBkaVxcdTEzNDFcXHUxMzY5ZXJcXHUwMTAwQlBcXHUxMzQ4XFx1MTM1ZFxcdTAxMDBhclxcdTEzNGRcXHUxMzUwcjtcXHU0MDVmYWNcXHUwMTAwZWtcXHUxMzU3XFx1MTM1OTtcXHU2M2RmZXQ7XFx1NjNiNWFyZW50aGVzaXM7XFx1NjNkZG9uXFx1MDEwMDtQXFx1MTM3MFxcdTEzNzFcXHU2MmMzbHVzO1xcdTYyOGVcXHUwMTAwZ3BcXHUxMzdiXFx1MTM3Zm9uO1xcdTQxNzJmO1xcdWMwMDBcXHVkODM1XFx1ZGQ0Y1xcdTA0MDBBREVUYWRwc1xcdTEzOTVcXHUxM2FlXFx1MTNiOFxcdTEzYzRcXHUwM2U4XFx1MTNkMlxcdTEzZDdcXHUxM2YzcnJvd1xcdTAxODA7QkRcXHUxMTUwXFx1MTNhMFxcdTEzYTRhcjtcXHU2OTEyb3duQXJyb3c7XFx1NjFjNW93bkFycm93O1xcdTYxOTVxdWlsaWJyaXVtO1xcdTY5NmVlZVxcdTAxMDA7QVxcdTEzY2JcXHUxM2NjXFx1NjJhNXJyb3c7XFx1NjFhNW93blxceGUxXFx1MDNmM2VyXFx1MDEwMExSXFx1MTNkZVxcdTEzZThlZnRBcnJvdztcXHU2MTk2aWdodEFycm93O1xcdTYxOTdpXFx1MDEwMDtsXFx1MTNmOVxcdTEzZmFcXHU0M2Qyb247XFx1NDNhNWluZztcXHU0MTZlY3I7XFx1YzAwMFxcdWQ4MzVcXHVkY2IwaWxkZTtcXHU0MTY4bWxcXHU4MDNiXFx4ZGNcXHU0MGRjXFx1MDQ4MERiY2RlZm9zdlxcdTE0MjdcXHUxNDJjXFx1MTQzMFxcdTE0MzNcXHUxNDNlXFx1MTQ4NVxcdTE0OGFcXHUxNDkwXFx1MTQ5NmFzaDtcXHU2MmFiYXI7XFx1NmFlYnk7XFx1NDQxMmFzaFxcdTAxMDA7bFxcdTE0M2JcXHUxNDNjXFx1NjJhOTtcXHU2YWU2XFx1MDEwMGVyXFx1MTQ0M1xcdTE0NDU7XFx1NjJjMVxcdTAxODBidHlcXHUxNDRjXFx1MTQ1MFxcdTE0N2FhcjtcXHU2MDE2XFx1MDEwMDtpXFx1MTQ0ZlxcdTE0NTVjYWxcXHUwMjAwQkxTVFxcdTE0NjFcXHUxNDY1XFx1MTQ2YVxcdTE0NzRhcjtcXHU2MjIzaW5lO1xcdTQwN2NlcGFyYXRvcjtcXHU2NzU4aWxkZTtcXHU2MjQwVGhpblNwYWNlO1xcdTYwMGFyO1xcdWMwMDBcXHVkODM1XFx1ZGQxOXBmO1xcdWMwMDBcXHVkODM1XFx1ZGQ0ZGNyO1xcdWMwMDBcXHVkODM1XFx1ZGNiMWRhc2g7XFx1NjJhYVxcdTAyODBjZWZvc1xcdTE0YTdcXHUxNGFjXFx1MTRiMVxcdTE0YjZcXHUxNGJjaXJjO1xcdTQxNzRkZ2U7XFx1NjJjMHI7XFx1YzAwMFxcdWQ4MzVcXHVkZDFhcGY7XFx1YzAwMFxcdWQ4MzVcXHVkZDRlY3I7XFx1YzAwMFxcdWQ4MzVcXHVkY2IyXFx1MDIwMGZpb3NcXHUxNGNiXFx1MTRkMFxcdTE0ZDJcXHUxNGQ4cjtcXHVjMDAwXFx1ZDgzNVxcdWRkMWI7XFx1NDM5ZXBmO1xcdWMwMDBcXHVkODM1XFx1ZGQ0ZmNyO1xcdWMwMDBcXHVkODM1XFx1ZGNiM1xcdTA0ODBBSVVhY2Zvc3VcXHUxNGYxXFx1MTRmNVxcdTE0ZjlcXHUxNGZkXFx1MTUwNFxcdTE1MGZcXHUxNTE0XFx1MTUxYVxcdTE1MjBjeTtcXHU0NDJmY3k7XFx1NDQwN2N5O1xcdTQ0MmVjdXRlXFx1ODAzYlxceGRkXFx1NDBkZFxcdTAxMDBpeVxcdTE1MDlcXHUxNTBkcmM7XFx1NDE3NjtcXHU0NDJicjtcXHVjMDAwXFx1ZDgzNVxcdWRkMWNwZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNTBjcjtcXHVjMDAwXFx1ZDgzNVxcdWRjYjRtbDtcXHU0MTc4XFx1MDQwMEhhY2RlZm9zXFx1MTUzNVxcdTE1MzlcXHUxNTNmXFx1MTU0YlxcdTE1NGZcXHUxNTVkXFx1MTU2MFxcdTE1NjRjeTtcXHU0NDE2Y3V0ZTtcXHU0MTc5XFx1MDEwMGF5XFx1MTU0NFxcdTE1NDlyb247XFx1NDE3ZDtcXHU0NDE3b3Q7XFx1NDE3YlxcdTAxZjJcXHUxNTU0XFwwXFx1MTU1Ym9XaWR0XFx4ZThcXHUwYWQ5YTtcXHU0Mzk2cjtcXHU2MTI4cGY7XFx1NjEyNGNyO1xcdWMwMDBcXHVkODM1XFx1ZGNiNVxcdTBiZTFcXHUxNTgzXFx1MTU4YVxcdTE1OTBcXDBcXHUxNWIwXFx1MTViNlxcdTE1YmZcXDBcXDBcXDBcXDBcXHUxNWM2XFx1MTVkYlxcdTE1ZWJcXHUxNjVmXFx1MTY2ZFxcMFxcdTE2OTVcXHUxNjliXFx1MTZiMlxcdTE2YjlcXDBcXHUxNmJlY3V0ZVxcdTgwM2JcXHhlMVxcdTQwZTFyZXZlO1xcdTQxMDNcXHUwMzAwO0VkaXV5XFx1MTU5Y1xcdTE1OWRcXHUxNWExXFx1MTVhM1xcdTE1YThcXHUxNWFkXFx1NjIzZTtcXHVjMDAwXFx1MjIzZVxcdTAzMzM7XFx1NjIzZnJjXFx1ODAzYlxceGUyXFx1NDBlMnRlXFx1ODBiYlxceGI0XFx1MDMwNjtcXHU0NDMwbGlnXFx1ODAzYlxceGU2XFx1NDBlNlxcdTAxMDA7clxceGIyXFx1MTViYTtcXHVjMDAwXFx1ZDgzNVxcdWRkMWVyYXZlXFx1ODAzYlxceGUwXFx1NDBlMFxcdTAxMDBlcFxcdTE1Y2FcXHUxNWQ2XFx1MDEwMGZwXFx1MTVjZlxcdTE1ZDRzeW07XFx1NjEzNVxceGU4XFx1MTVkM2hhO1xcdTQzYjFcXHUwMTAwYXBcXHUxNWRmY1xcdTAxMDBjbFxcdTE1ZTRcXHUxNWU3cjtcXHU0MTAxZztcXHU2YTNmXFx1MDI2NFxcdTE1ZjBcXDBcXDBcXHUxNjBhXFx1MDI4MDthZHN2XFx1MTVmYVxcdTE1ZmJcXHUxNWZmXFx1MTYwMVxcdTE2MDdcXHU2MjI3bmQ7XFx1NmE1NTtcXHU2YTVjbG9wZTtcXHU2YTU4O1xcdTZhNWFcXHUwMzgwO2VsbXJzelxcdTE2MThcXHUxNjE5XFx1MTYxYlxcdTE2MWVcXHUxNjNmXFx1MTY0ZlxcdTE2NTlcXHU2MjIwO1xcdTY5YTRlXFx4YmJcXHUxNjE5c2RcXHUwMTAwO2FcXHUxNjI1XFx1MTYyNlxcdTYyMjFcXHUwNDYxXFx1MTYzMFxcdTE2MzJcXHUxNjM0XFx1MTYzNlxcdTE2MzhcXHUxNjNhXFx1MTYzY1xcdTE2M2U7XFx1NjlhODtcXHU2OWE5O1xcdTY5YWE7XFx1NjlhYjtcXHU2OWFjO1xcdTY5YWQ7XFx1NjlhZTtcXHU2OWFmdFxcdTAxMDA7dlxcdTE2NDVcXHUxNjQ2XFx1NjIxZmJcXHUwMTAwO2RcXHUxNjRjXFx1MTY0ZFxcdTYyYmU7XFx1Njk5ZFxcdTAxMDBwdFxcdTE2NTRcXHUxNjU3aDtcXHU2MjIyXFx4YmJcXHhiOWFycjtcXHU2MzdjXFx1MDEwMGdwXFx1MTY2M1xcdTE2NjdvbjtcXHU0MTA1ZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNTJcXHUwMzgwO0VhZWlvcFxcdTEyYzFcXHUxNjdiXFx1MTY3ZFxcdTE2ODJcXHUxNjg0XFx1MTY4N1xcdTE2OGE7XFx1NmE3MGNpcjtcXHU2YTZmO1xcdTYyNGFkO1xcdTYyNGJzO1xcdTQwMjdyb3hcXHUwMTAwO2VcXHUxMmMxXFx1MTY5MlxceGYxXFx1MTY4M2luZ1xcdTgwM2JcXHhlNVxcdTQwZTVcXHUwMTgwY3R5XFx1MTZhMVxcdTE2YTZcXHUxNmE4cjtcXHVjMDAwXFx1ZDgzNVxcdWRjYjY7XFx1NDAyYW1wXFx1MDEwMDtlXFx1MTJjMVxcdTE2YWZcXHhmMVxcdTAyODhpbGRlXFx1ODAzYlxceGUzXFx1NDBlM21sXFx1ODAzYlxceGU0XFx1NDBlNFxcdTAxMDBjaVxcdTE2YzJcXHUxNmM4b25pblxceGY0XFx1MDI3Mm50O1xcdTZhMTFcXHUwODAwTmFiY2RlZmlrbG5vcHJzdVxcdTE2ZWRcXHUxNmYxXFx1MTczMFxcdTE3M2NcXHUxNzQzXFx1MTc0OFxcdTE3NzhcXHUxNzdkXFx1MTdlMFxcdTE3ZTZcXHUxODM5XFx1MTg1MFxcdTE3MGRcXHUxOTNkXFx1MTk0OFxcdTE5NzBvdDtcXHU2YWVkXFx1MDEwMGNyXFx1MTZmNlxcdTE3MWVrXFx1MDIwMGNlcHNcXHUxNzAwXFx1MTcwNVxcdTE3MGRcXHUxNzEzb25nO1xcdTYyNGNwc2lsb247XFx1NDNmNnJpbWU7XFx1NjAzNWltXFx1MDEwMDtlXFx1MTcxYVxcdTE3MWJcXHU2MjNkcTtcXHU2MmNkXFx1MDE3NlxcdTE3MjJcXHUxNzI2ZWU7XFx1NjJiZGVkXFx1MDEwMDtnXFx1MTcyY1xcdTE3MmRcXHU2MzA1ZVxceGJiXFx1MTcyZHJrXFx1MDEwMDt0XFx1MTM1Y1xcdTE3Mzdicms7XFx1NjNiNlxcdTAxMDBveVxcdTE3MDFcXHUxNzQxO1xcdTQ0MzFxdW87XFx1NjAxZVxcdTAyODBjbXBydFxcdTE3NTNcXHUxNzViXFx1MTc2MVxcdTE3NjRcXHUxNzY4YXVzXFx1MDEwMDtlXFx1MDEwYVxcdTAxMDlwdHl2O1xcdTY5YjBzXFx4ZTlcXHUxNzBjbm9cXHhmNVxcdTAxMTNcXHUwMTgwYWh3XFx1MTc2ZlxcdTE3NzFcXHUxNzczO1xcdTQzYjI7XFx1NjEzNmVlbjtcXHU2MjZjcjtcXHVjMDAwXFx1ZDgzNVxcdWRkMWZnXFx1MDM4MGNvc3R1dndcXHUxNzhkXFx1MTc5ZFxcdTE3YjNcXHUxN2MxXFx1MTdkNVxcdTE3ZGJcXHUxN2RlXFx1MDE4MGFpdVxcdTE3OTRcXHUxNzk2XFx1MTc5YVxceGYwXFx1MDc2MHJjO1xcdTY1ZWZwXFx4YmJcXHUxMzcxXFx1MDE4MGRwdFxcdTE3YTRcXHUxN2E4XFx1MTdhZG90O1xcdTZhMDBsdXM7XFx1NmEwMWltZXM7XFx1NmEwMlxcdTAyNzFcXHUxN2I5XFwwXFwwXFx1MTdiZWN1cDtcXHU2YTA2YXI7XFx1NjYwNXJpYW5nbGVcXHUwMTAwZHVcXHUxN2NkXFx1MTdkMm93bjtcXHU2NWJkcDtcXHU2NWIzcGx1cztcXHU2YTA0ZVxceGU1XFx1MTQ0NFxceGU1XFx1MTRhZGFyb3c7XFx1NjkwZFxcdTAxODBha29cXHUxN2VkXFx1MTgyNlxcdTE4MzVcXHUwMTAwY25cXHUxN2YyXFx1MTgyM2tcXHUwMTgwbHN0XFx1MTdmYVxcdTA1YWJcXHUxODAyb3plbmdlO1xcdTY5ZWJyaWFuZ2xlXFx1MDIwMDtkbHJcXHUxODEyXFx1MTgxM1xcdTE4MThcXHUxODFkXFx1NjViNG93bjtcXHU2NWJlZWZ0O1xcdTY1YzJpZ2h0O1xcdTY1YjhrO1xcdTY0MjNcXHUwMWIxXFx1MTgyYlxcMFxcdTE4MzNcXHUwMWIyXFx1MTgyZlxcMFxcdTE4MzE7XFx1NjU5MjtcXHU2NTkxNDtcXHU2NTkzY2s7XFx1NjU4OFxcdTAxMDBlb1xcdTE4M2VcXHUxODRkXFx1MDEwMDtxXFx1MTg0M1xcdTE4NDZcXHVjMDAwPVxcdTIwZTV1aXY7XFx1YzAwMFxcdTIyNjFcXHUyMGU1dDtcXHU2MzEwXFx1MDIwMHB0d3hcXHUxODU5XFx1MTg1ZVxcdTE4NjdcXHUxODZjZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNTNcXHUwMTAwO3RcXHUxM2NiXFx1MTg2M29tXFx4YmJcXHUxM2NjdGllO1xcdTYyYzhcXHUwNjAwREhVVmJkaG1wdHV2XFx1MTg4NVxcdTE4OTZcXHUxOGFhXFx1MThiYlxcdTE4ZDdcXHUxOGRiXFx1MThlY1xcdTE4ZmZcXHUxOTA1XFx1MTkwYVxcdTE5MTBcXHUxOTIxXFx1MDIwMExSbHJcXHUxODhlXFx1MTg5MFxcdTE4OTJcXHUxODk0O1xcdTY1NTc7XFx1NjU1NDtcXHU2NTU2O1xcdTY1NTNcXHUwMjgwO0RVZHVcXHUxOGExXFx1MThhMlxcdTE4YTRcXHUxOGE2XFx1MThhOFxcdTY1NTA7XFx1NjU2NjtcXHU2NTY5O1xcdTY1NjQ7XFx1NjU2N1xcdTAyMDBMUmxyXFx1MThiM1xcdTE4YjVcXHUxOGI3XFx1MThiOTtcXHU2NTVkO1xcdTY1NWE7XFx1NjU1YztcXHU2NTU5XFx1MDM4MDtITFJobHJcXHUxOGNhXFx1MThjYlxcdTE4Y2RcXHUxOGNmXFx1MThkMVxcdTE4ZDNcXHUxOGQ1XFx1NjU1MTtcXHU2NTZjO1xcdTY1NjM7XFx1NjU2MDtcXHU2NTZiO1xcdTY1NjI7XFx1NjU1Zm94O1xcdTY5YzlcXHUwMjAwTFJsclxcdTE4ZTRcXHUxOGU2XFx1MThlOFxcdTE4ZWE7XFx1NjU1NTtcXHU2NTUyO1xcdTY1MTA7XFx1NjUwY1xcdTAyODA7RFVkdVxcdTA2YmRcXHUxOGY3XFx1MThmOVxcdTE4ZmJcXHUxOGZkO1xcdTY1NjU7XFx1NjU2ODtcXHU2NTJjO1xcdTY1MzRpbnVzO1xcdTYyOWZsdXM7XFx1NjI5ZWltZXM7XFx1NjJhMFxcdTAyMDBMUmxyXFx1MTkxOVxcdTE5MWJcXHUxOTFkXFx1MTkxZjtcXHU2NTViO1xcdTY1NTg7XFx1NjUxODtcXHU2NTE0XFx1MDM4MDtITFJobHJcXHUxOTMwXFx1MTkzMVxcdTE5MzNcXHUxOTM1XFx1MTkzN1xcdTE5MzlcXHUxOTNiXFx1NjUwMjtcXHU2NTZhO1xcdTY1NjE7XFx1NjU1ZTtcXHU2NTNjO1xcdTY1MjQ7XFx1NjUxY1xcdTAxMDBldlxcdTAxMjNcXHUxOTQyYmFyXFx1ODAzYlxceGE2XFx1NDBhNlxcdTAyMDBjZWlvXFx1MTk1MVxcdTE5NTZcXHUxOTVhXFx1MTk2MHI7XFx1YzAwMFxcdWQ4MzVcXHVkY2I3bWk7XFx1NjA0Zm1cXHUwMTAwO2VcXHUxNzFhXFx1MTcxY2xcXHUwMTgwO2JoXFx1MTk2OFxcdTE5NjlcXHUxOTZiXFx1NDA1YztcXHU2OWM1c3ViO1xcdTY3YzhcXHUwMTZjXFx1MTk3NFxcdTE5N2VsXFx1MDEwMDtlXFx1MTk3OVxcdTE5N2FcXHU2MDIydFxceGJiXFx1MTk3YXBcXHUwMTgwO0VlXFx1MDEyZlxcdTE5ODVcXHUxOTg3O1xcdTZhYWVcXHUwMTAwO3FcXHUwNmRjXFx1MDZkYlxcdTBjZTFcXHUxOWE3XFwwXFx1MTllOFxcdTFhMTFcXHUxYTE1XFx1MWEzMlxcMFxcdTFhMzdcXHUxYTUwXFwwXFwwXFx1MWFiNFxcMFxcMFxcdTFhYzFcXDBcXDBcXHUxYjIxXFx1MWIyZVxcdTFiNGRcXHUxYjUyXFwwXFx1MWJmZFxcMFxcdTFjMGNcXHUwMTgwY3ByXFx1MTlhZFxcdTE5YjJcXHUxOWRkdXRlO1xcdTQxMDdcXHUwMzAwO2FiY2RzXFx1MTliZlxcdTE5YzBcXHUxOWM0XFx1MTljYVxcdTE5ZDVcXHUxOWQ5XFx1NjIyOW5kO1xcdTZhNDRyY3VwO1xcdTZhNDlcXHUwMTAwYXVcXHUxOWNmXFx1MTlkMnA7XFx1NmE0YnA7XFx1NmE0N290O1xcdTZhNDA7XFx1YzAwMFxcdTIyMjlcXHVmZTAwXFx1MDEwMGVvXFx1MTllMlxcdTE5ZTV0O1xcdTYwNDFcXHhlZVxcdTA2OTNcXHUwMjAwYWVpdVxcdTE5ZjBcXHUxOWZiXFx1MWEwMVxcdTFhMDVcXHUwMWYwXFx1MTlmNVxcMFxcdTE5ZjhzO1xcdTZhNGRvbjtcXHU0MTBkZGlsXFx1ODAzYlxceGU3XFx1NDBlN3JjO1xcdTQxMDlwc1xcdTAxMDA7c1xcdTFhMGNcXHUxYTBkXFx1NmE0Y207XFx1NmE1MG90O1xcdTQxMGJcXHUwMTgwZG1uXFx1MWExYlxcdTFhMjBcXHUxYTI2aWxcXHU4MGJiXFx4YjhcXHUwMWFkcHR5djtcXHU2OWIydFxcdTgxMDBcXHhhMjtlXFx1MWEyZFxcdTFhMmVcXHU0MGEyclxceGU0XFx1MDFiMnI7XFx1YzAwMFxcdWQ4MzVcXHVkZDIwXFx1MDE4MGNlaVxcdTFhM2RcXHUxYTQwXFx1MWE0ZHk7XFx1NDQ0N2NrXFx1MDEwMDttXFx1MWE0N1xcdTFhNDhcXHU2NzEzYXJrXFx4YmJcXHUxYTQ4O1xcdTQzYzdyXFx1MDM4MDtFY2VmbXNcXHUxYTVmXFx1MWE2MFxcdTFhNjJcXHUxYTZiXFx1MWFhNFxcdTFhYWFcXHUxYWFlXFx1NjVjYjtcXHU2OWMzXFx1MDE4MDtlbFxcdTFhNjlcXHUxYTZhXFx1MWE2ZFxcdTQyYzZxO1xcdTYyNTdlXFx1MDI2MVxcdTFhNzRcXDBcXDBcXHUxYTg4cnJvd1xcdTAxMDBsclxcdTFhN2NcXHUxYTgxZWZ0O1xcdTYxYmFpZ2h0O1xcdTYxYmJcXHUwMjgwUlNhY2RcXHUxYTkyXFx1MWE5NFxcdTFhOTZcXHUxYTlhXFx1MWE5ZlxceGJiXFx1MGY0NztcXHU2NGM4c3Q7XFx1NjI5YmlyYztcXHU2MjlhYXNoO1xcdTYyOWRuaW50O1xcdTZhMTBpZDtcXHU2YWVmY2lyO1xcdTY5YzJ1YnNcXHUwMTAwO3VcXHUxYWJiXFx1MWFiY1xcdTY2NjNpdFxceGJiXFx1MWFiY1xcdTAyZWNcXHUxYWM3XFx1MWFkNFxcdTFhZmFcXDBcXHUxYjBhb25cXHUwMTAwO2VcXHUxYWNkXFx1MWFjZVxcdTQwM2FcXHUwMTAwO3FcXHhjN1xceGM2XFx1MDI2ZFxcdTFhZDlcXDBcXDBcXHUxYWUyYVxcdTAxMDA7dFxcdTFhZGVcXHUxYWRmXFx1NDAyYztcXHU0MDQwXFx1MDE4MDtmbFxcdTFhZThcXHUxYWU5XFx1MWFlYlxcdTYyMDFcXHhlZVxcdTExNjBlXFx1MDEwMG14XFx1MWFmMVxcdTFhZjZlbnRcXHhiYlxcdTFhZTllXFx4ZjNcXHUwMjRkXFx1MDFlN1xcdTFhZmVcXDBcXHUxYjA3XFx1MDEwMDtkXFx1MTJiYlxcdTFiMDJvdDtcXHU2YTZkblxceGY0XFx1MDI0NlxcdTAxODBmcnlcXHUxYjEwXFx1MWIxNFxcdTFiMTc7XFx1YzAwMFxcdWQ4MzVcXHVkZDU0b1xceGU0XFx1MDI1NFxcdTgxMDBcXHhhOTtzXFx1MDE1NVxcdTFiMWRyO1xcdTYxMTdcXHUwMTAwYW9cXHUxYjI1XFx1MWIyOXJyO1xcdTYxYjVzcztcXHU2NzE3XFx1MDEwMGN1XFx1MWIzMlxcdTFiMzdyO1xcdWMwMDBcXHVkODM1XFx1ZGNiOFxcdTAxMDBicFxcdTFiM2NcXHUxYjQ0XFx1MDEwMDtlXFx1MWI0MVxcdTFiNDJcXHU2YWNmO1xcdTZhZDFcXHUwMTAwO2VcXHUxYjQ5XFx1MWI0YVxcdTZhZDA7XFx1NmFkMmRvdDtcXHU2MmVmXFx1MDM4MGRlbHBydndcXHUxYjYwXFx1MWI2Y1xcdTFiNzdcXHUxYjgyXFx1MWJhY1xcdTFiZDRcXHUxYmY5YXJyXFx1MDEwMGxyXFx1MWI2OFxcdTFiNmE7XFx1NjkzODtcXHU2OTM1XFx1MDI3MFxcdTFiNzJcXDBcXDBcXHUxYjc1cjtcXHU2MmRlYztcXHU2MmRmYXJyXFx1MDEwMDtwXFx1MWI3ZlxcdTFiODBcXHU2MWI2O1xcdTY5M2RcXHUwMzAwO2JjZG9zXFx1MWI4ZlxcdTFiOTBcXHUxYjk2XFx1MWJhMVxcdTFiYTVcXHUxYmE4XFx1NjIyYXJjYXA7XFx1NmE0OFxcdTAxMDBhdVxcdTFiOWJcXHUxYjllcDtcXHU2YTQ2cDtcXHU2YTRhb3Q7XFx1NjI4ZHI7XFx1NmE0NTtcXHVjMDAwXFx1MjIyYVxcdWZlMDBcXHUwMjAwYWxydlxcdTFiYjVcXHUxYmJmXFx1MWJkZVxcdTFiZTNyclxcdTAxMDA7bVxcdTFiYmNcXHUxYmJkXFx1NjFiNztcXHU2OTNjeVxcdTAxODBldndcXHUxYmM3XFx1MWJkNFxcdTFiZDhxXFx1MDI3MFxcdTFiY2VcXDBcXDBcXHUxYmQycmVcXHhlM1xcdTFiNzN1XFx4ZTNcXHUxYjc1ZWU7XFx1NjJjZWVkZ2U7XFx1NjJjZmVuXFx1ODAzYlxceGE0XFx1NDBhNGVhcnJvd1xcdTAxMDBsclxcdTFiZWVcXHUxYmYzZWZ0XFx4YmJcXHUxYjgwaWdodFxceGJiXFx1MWJiZGVcXHhlNFxcdTFiZGRcXHUwMTAwY2lcXHUxYzAxXFx1MWMwN29uaW5cXHhmNFxcdTAxZjdudDtcXHU2MjMxbGN0eTtcXHU2MzJkXFx1MDk4MEFIYWJjZGVmaGlqbG9yc3R1d3pcXHUxYzM4XFx1MWMzYlxcdTFjM2ZcXHUxYzVkXFx1MWM2OVxcdTFjNzVcXHUxYzhhXFx1MWM5ZVxcdTFjYWNcXHUxY2I3XFx1MWNmYlxcdTFjZmZcXHUxZDBkXFx1MWQ3YlxcdTFkOTFcXHUxZGFiXFx1MWRiYlxcdTFkYzZcXHUxZGNkclxceGYyXFx1MDM4MWFyO1xcdTY5NjVcXHUwMjAwZ2xyc1xcdTFjNDhcXHUxYzRkXFx1MWM1MlxcdTFjNTRnZXI7XFx1NjAyMGV0aDtcXHU2MTM4XFx4ZjJcXHUxMTMzaFxcdTAxMDA7dlxcdTFjNWFcXHUxYzViXFx1NjAxMFxceGJiXFx1MDkwYVxcdTAxNmJcXHUxYzYxXFx1MWM2N2Fyb3c7XFx1NjkwZmFcXHhlM1xcdTAzMTVcXHUwMTAwYXlcXHUxYzZlXFx1MWM3M3JvbjtcXHU0MTBmO1xcdTQ0MzRcXHUwMTgwO2FvXFx1MDMzMlxcdTFjN2NcXHUxYzg0XFx1MDEwMGdyXFx1MDJiZlxcdTFjODFyO1xcdTYxY2F0c2VxO1xcdTZhNzdcXHUwMTgwZ2xtXFx1MWM5MVxcdTFjOTRcXHUxYzk4XFx1ODAzYlxceGIwXFx1NDBiMHRhO1xcdTQzYjRwdHl2O1xcdTY5YjFcXHUwMTAwaXJcXHUxY2EzXFx1MWNhOHNodDtcXHU2OTdmO1xcdWMwMDBcXHVkODM1XFx1ZGQyMWFyXFx1MDEwMGxyXFx1MWNiM1xcdTFjYjVcXHhiYlxcdTA4ZGNcXHhiYlxcdTEwMWVcXHUwMjgwYWVnc3ZcXHUxY2MyXFx1MDM3OFxcdTFjZDZcXHUxY2RjXFx1MWNlMG1cXHUwMTgwO29zXFx1MDMyNlxcdTFjY2FcXHUxY2Q0bmRcXHUwMTAwO3NcXHUwMzI2XFx1MWNkMXVpdDtcXHU2NjY2YW1tYTtcXHU0M2RkaW47XFx1NjJmMlxcdTAxODA7aW9cXHUxY2U3XFx1MWNlOFxcdTFjZjhcXHU0MGY3ZGVcXHU4MTAwXFx4Zjc7b1xcdTFjZTdcXHUxY2YwbnRpbWVzO1xcdTYyYzduXFx4ZjhcXHUxY2Y3Y3k7XFx1NDQ1MmNcXHUwMjZmXFx1MWQwNlxcMFxcMFxcdTFkMGFybjtcXHU2MzFlb3A7XFx1NjMwZFxcdTAyODBscHR1d1xcdTFkMThcXHUxZDFkXFx1MWQyMlxcdTFkNDlcXHUxZDU1bGFyO1xcdTQwMjRmO1xcdWMwMDBcXHVkODM1XFx1ZGQ1NVxcdTAyODA7ZW1wc1xcdTAzMGJcXHUxZDJkXFx1MWQzN1xcdTFkM2RcXHUxZDQycVxcdTAxMDA7ZFxcdTAzNTJcXHUxZDMzb3Q7XFx1NjI1MWludXM7XFx1NjIzOGx1cztcXHU2MjE0cXVhcmU7XFx1NjJhMWJsZWJhcndlZGdcXHhlNVxceGZhblxcdTAxODBhZGhcXHUxMTJlXFx1MWQ1ZFxcdTFkNjdvd25hcnJvd1xceGYzXFx1MWM4M2FycG9vblxcdTAxMDBsclxcdTFkNzJcXHUxZDc2ZWZcXHhmNFxcdTFjYjRpZ2hcXHhmNFxcdTFjYjZcXHUwMTYyXFx1MWQ3ZlxcdTFkODVrYXJvXFx4ZjdcXHUwZjQyXFx1MDI2ZlxcdTFkOGFcXDBcXDBcXHUxZDhlcm47XFx1NjMxZm9wO1xcdTYzMGNcXHUwMTgwY290XFx1MWQ5OFxcdTFkYTNcXHUxZGE2XFx1MDEwMHJ5XFx1MWQ5ZFxcdTFkYTE7XFx1YzAwMFxcdWQ4MzVcXHVkY2I5O1xcdTQ0NTVsO1xcdTY5ZjZyb2s7XFx1NDExMVxcdTAxMDBkclxcdTFkYjBcXHUxZGI0b3Q7XFx1NjJmMWlcXHUwMTAwO2ZcXHUxZGJhXFx1MTgxNlxcdTY1YmZcXHUwMTAwYWhcXHUxZGMwXFx1MWRjM3JcXHhmMlxcdTA0MjlhXFx4ZjJcXHUwZmE2YW5nbGU7XFx1NjlhNlxcdTAxMDBjaVxcdTFkZDJcXHUxZGQ1eTtcXHU0NDVmZ3JhcnI7XFx1NjdmZlxcdTA5MDBEYWNkZWZnbG1ub3BxcnN0dXhcXHUxZTAxXFx1MWUwOVxcdTFlMTlcXHUxZTM4XFx1MDU3OFxcdTFlM2NcXHUxZTQ5XFx1MWU2MVxcdTFlN2VcXHUxZWE1XFx1MWVhZlxcdTFlYmRcXHUxZWUxXFx1MWYyYVxcdTFmMzdcXHUxZjQ0XFx1MWY0ZVxcdTFmNWFcXHUwMTAwRG9cXHUxZTA2XFx1MWQzNG9cXHhmNFxcdTFjODlcXHUwMTAwY3NcXHUxZTBlXFx1MWUxNHV0ZVxcdTgwM2JcXHhlOVxcdTQwZTl0ZXI7XFx1NmE2ZVxcdTAyMDBhaW95XFx1MWUyMlxcdTFlMjdcXHUxZTMxXFx1MWUzNnJvbjtcXHU0MTFiclxcdTAxMDA7Y1xcdTFlMmRcXHUxZTJlXFx1NjI1NlxcdTgwM2JcXHhlYVxcdTQwZWFsb247XFx1NjI1NTtcXHU0NDRkb3Q7XFx1NDExN1xcdTAxMDBEclxcdTFlNDFcXHUxZTQ1b3Q7XFx1NjI1MjtcXHVjMDAwXFx1ZDgzNVxcdWRkMjJcXHUwMTgwO3JzXFx1MWU1MFxcdTFlNTFcXHUxZTU3XFx1NmE5YWF2ZVxcdTgwM2JcXHhlOFxcdTQwZThcXHUwMTAwO2RcXHUxZTVjXFx1MWU1ZFxcdTZhOTZvdDtcXHU2YTk4XFx1MDIwMDtpbHNcXHUxZTZhXFx1MWU2YlxcdTFlNzJcXHUxZTc0XFx1NmE5OW50ZXJzO1xcdTYzZTc7XFx1NjExM1xcdTAxMDA7ZFxcdTFlNzlcXHUxZTdhXFx1NmE5NW90O1xcdTZhOTdcXHUwMTgwYXBzXFx1MWU4NVxcdTFlODlcXHUxZTk3Y3I7XFx1NDExM3R5XFx1MDE4MDtzdlxcdTFlOTJcXHUxZTkzXFx1MWU5NVxcdTYyMDVldFxceGJiXFx1MWU5M3BcXHUwMTAwMTtcXHUxZTlkXFx1MWVhNFxcdTAxMzNcXHUxZWExXFx1MWVhMztcXHU2MDA0O1xcdTYwMDVcXHU2MDAzXFx1MDEwMGdzXFx1MWVhYVxcdTFlYWM7XFx1NDE0YnA7XFx1NjAwMlxcdTAxMDBncFxcdTFlYjRcXHUxZWI4b247XFx1NDExOWY7XFx1YzAwMFxcdWQ4MzVcXHVkZDU2XFx1MDE4MGFsc1xcdTFlYzRcXHUxZWNlXFx1MWVkMnJcXHUwMTAwO3NcXHUxZWNhXFx1MWVjYlxcdTYyZDVsO1xcdTY5ZTN1cztcXHU2YTcxaVxcdTAxODA7bHZcXHUxZWRhXFx1MWVkYlxcdTFlZGZcXHU0M2I1b25cXHhiYlxcdTFlZGI7XFx1NDNmNVxcdTAyMDBjc3V2XFx1MWVlYVxcdTFlZjNcXHUxZjBiXFx1MWYyM1xcdTAxMDBpb1xcdTFlZWZcXHUxZTMxcmNcXHhiYlxcdTFlMmVcXHUwMjY5XFx1MWVmOVxcMFxcMFxcdTFlZmJcXHhlZFxcdTA1NDhhbnRcXHUwMTAwZ2xcXHUxZjAyXFx1MWYwNnRyXFx4YmJcXHUxZTVkZXNzXFx4YmJcXHUxZTdhXFx1MDE4MGFlaVxcdTFmMTJcXHUxZjE2XFx1MWYxYWxzO1xcdTQwM2RzdDtcXHU2MjVmdlxcdTAxMDA7RFxcdTAyMzVcXHUxZjIwRDtcXHU2YTc4cGFyc2w7XFx1NjllNVxcdTAxMDBEYVxcdTFmMmZcXHUxZjMzb3Q7XFx1NjI1M3JyO1xcdTY5NzFcXHUwMTgwY2RpXFx1MWYzZVxcdTFmNDFcXHUxZWY4cjtcXHU2MTJmb1xceGY0XFx1MDM1MlxcdTAxMDBhaFxcdTFmNDlcXHUxZjRiO1xcdTQzYjdcXHU4MDNiXFx4ZjBcXHU0MGYwXFx1MDEwMG1yXFx1MWY1M1xcdTFmNTdsXFx1ODAzYlxceGViXFx1NDBlYm87XFx1NjBhY1xcdTAxODBjaXBcXHUxZjYxXFx1MWY2NFxcdTFmNjdsO1xcdTQwMjFzXFx4ZjRcXHUwNTZlXFx1MDEwMGVvXFx1MWY2Y1xcdTFmNzRjdGF0aW9cXHhlZVxcdTA1NTluZW50aWFsXFx4ZTVcXHUwNTc5XFx1MDllMVxcdTFmOTJcXDBcXHUxZjllXFwwXFx1MWZhMVxcdTFmYTdcXDBcXDBcXHUxZmM2XFx1MWZjY1xcMFxcdTFmZDNcXDBcXHUxZmU2XFx1MWZlYVxcdTIwMDBcXDBcXHUyMDA4XFx1MjA1YWxsaW5nZG90c2VcXHhmMVxcdTFlNDR5O1xcdTQ0NDRtYWxlO1xcdTY2NDBcXHUwMTgwaWxyXFx1MWZhZFxcdTFmYjNcXHUxZmMxbGlnO1xcdTgwMDBcXHVmYjAzXFx1MDI2OVxcdTFmYjlcXDBcXDBcXHUxZmJkZztcXHU4MDAwXFx1ZmIwMGlnO1xcdTgwMDBcXHVmYjA0O1xcdWMwMDBcXHVkODM1XFx1ZGQyM2xpZztcXHU4MDAwXFx1ZmIwMWxpZztcXHVjMDAwZmpcXHUwMTgwYWx0XFx1MWZkOVxcdTFmZGNcXHUxZmUxdDtcXHU2NjZkaWc7XFx1ODAwMFxcdWZiMDJucztcXHU2NWIxb2Y7XFx1NDE5MlxcdTAxZjBcXHUxZmVlXFwwXFx1MWZmM2Y7XFx1YzAwMFxcdWQ4MzVcXHVkZDU3XFx1MDEwMGFrXFx1MDViZlxcdTFmZjdcXHUwMTAwO3ZcXHUxZmZjXFx1MWZmZFxcdTYyZDQ7XFx1NmFkOWFydGludDtcXHU2YTBkXFx1MDEwMGFvXFx1MjAwY1xcdTIwNTVcXHUwMTAwY3NcXHUyMDExXFx1MjA1MlxcdTAzYjFcXHUyMDFhXFx1MjAzMFxcdTIwMzhcXHUyMDQ1XFx1MjA0OFxcMFxcdTIwNTBcXHUwM2IyXFx1MjAyMlxcdTIwMjVcXHUyMDI3XFx1MjAyYVxcdTIwMmNcXDBcXHUyMDJlXFx1ODAzYlxceGJkXFx1NDBiZDtcXHU2MTUzXFx1ODAzYlxceGJjXFx1NDBiYztcXHU2MTU1O1xcdTYxNTk7XFx1NjE1YlxcdTAxYjNcXHUyMDM0XFwwXFx1MjAzNjtcXHU2MTU0O1xcdTYxNTZcXHUwMmI0XFx1MjAzZVxcdTIwNDFcXDBcXDBcXHUyMDQzXFx1ODAzYlxceGJlXFx1NDBiZTtcXHU2MTU3O1xcdTYxNWM1O1xcdTYxNThcXHUwMWI2XFx1MjA0Y1xcMFxcdTIwNGU7XFx1NjE1YTtcXHU2MTVkODtcXHU2MTVlbDtcXHU2MDQ0d247XFx1NjMyMmNyO1xcdWMwMDBcXHVkODM1XFx1ZGNiYlxcdTA4ODBFYWJjZGVmZ2lqbG5vcnN0dlxcdTIwODJcXHUyMDg5XFx1MjA5ZlxcdTIwYTVcXHUyMGIwXFx1MjBiNFxcdTIwZjBcXHUyMGY1XFx1MjBmYVxcdTIwZmZcXHUyMTAzXFx1MjExMlxcdTIxMzhcXHUwMzE3XFx1MjEzZVxcdTIxNTJcXHUyMTllXFx1MDEwMDtsXFx1MDY0ZFxcdTIwODc7XFx1NmE4Y1xcdTAxODBjbXBcXHUyMDkwXFx1MjA5NVxcdTIwOWR1dGU7XFx1NDFmNW1hXFx1MDEwMDtkXFx1MjA5Y1xcdTFjZGFcXHU0M2IzO1xcdTZhODZyZXZlO1xcdTQxMWZcXHUwMTAwaXlcXHUyMGFhXFx1MjBhZXJjO1xcdTQxMWQ7XFx1NDQzM290O1xcdTQxMjFcXHUwMjAwO2xxc1xcdTA2M2VcXHUwNjQyXFx1MjBiZFxcdTIwYzlcXHUwMTgwO3FzXFx1MDYzZVxcdTA2NGNcXHUyMGM0bGFuXFx4ZjRcXHUwNjY1XFx1MDIwMDtjZGxcXHUwNjY1XFx1MjBkMlxcdTIwZDVcXHUyMGU1YztcXHU2YWE5b3RcXHUwMTAwO29cXHUyMGRjXFx1MjBkZFxcdTZhODBcXHUwMTAwO2xcXHUyMGUyXFx1MjBlM1xcdTZhODI7XFx1NmE4NFxcdTAxMDA7ZVxcdTIwZWFcXHUyMGVkXFx1YzAwMFxcdTIyZGJcXHVmZTAwcztcXHU2YTk0cjtcXHVjMDAwXFx1ZDgzNVxcdWRkMjRcXHUwMTAwO2dcXHUwNjczXFx1MDYxYm1lbDtcXHU2MTM3Y3k7XFx1NDQ1M1xcdTAyMDA7RWFqXFx1MDY1YVxcdTIxMGNcXHUyMTBlXFx1MjExMDtcXHU2YTkyO1xcdTZhYTU7XFx1NmFhNFxcdTAyMDBFYWVzXFx1MjExYlxcdTIxMWRcXHUyMTI5XFx1MjEzNDtcXHU2MjY5cFxcdTAxMDA7cFxcdTIxMjNcXHUyMTI0XFx1NmE4YXJveFxceGJiXFx1MjEyNFxcdTAxMDA7cVxcdTIxMmVcXHUyMTJmXFx1NmE4OFxcdTAxMDA7cVxcdTIxMmVcXHUyMTFiaW07XFx1NjJlN3BmO1xcdWMwMDBcXHVkODM1XFx1ZGQ1OFxcdTAxMDBjaVxcdTIxNDNcXHUyMTQ2cjtcXHU2MTBhbVxcdTAxODA7ZWxcXHUwNjZiXFx1MjE0ZVxcdTIxNTA7XFx1NmE4ZTtcXHU2YTkwXFx1ODMwMD47Y2RscXJcXHUwNWVlXFx1MjE2MFxcdTIxNmFcXHUyMTZlXFx1MjE3M1xcdTIxNzlcXHUwMTAwY2lcXHUyMTY1XFx1MjE2NztcXHU2YWE3cjtcXHU2YTdhb3Q7XFx1NjJkN1BhcjtcXHU2OTk1dWVzdDtcXHU2YTdjXFx1MDI4MGFkZWxzXFx1MjE4NFxcdTIxNmFcXHUyMTkwXFx1MDY1NlxcdTIxOWJcXHUwMWYwXFx1MjE4OVxcMFxcdTIxOGVwcm9cXHhmOFxcdTIwOWVyO1xcdTY5NzhxXFx1MDEwMGxxXFx1MDYzZlxcdTIxOTZsZXNcXHhmM1xcdTIwODhpXFx4ZWRcXHUwNjZiXFx1MDEwMGVuXFx1MjFhM1xcdTIxYWRydG5lcXE7XFx1YzAwMFxcdTIyNjlcXHVmZTAwXFx4YzVcXHUyMWFhXFx1MDUwMEFhYmNlZmtvc3lcXHUyMWM0XFx1MjFjN1xcdTIxZjFcXHUyMWY1XFx1MjFmYVxcdTIyMThcXHUyMjFkXFx1MjIyZlxcdTIyNjhcXHUyMjdkclxceGYyXFx1MDNhMFxcdTAyMDBpbG1yXFx1MjFkMFxcdTIxZDRcXHUyMWQ3XFx1MjFkYnJzXFx4ZjBcXHUxNDg0ZlxceGJiXFx1MjAyNGlsXFx4ZjRcXHUwNmE5XFx1MDEwMGRyXFx1MjFlMFxcdTIxZTRjeTtcXHU0NDRhXFx1MDE4MDtjd1xcdTA4ZjRcXHUyMWViXFx1MjFlZmlyO1xcdTY5NDg7XFx1NjFhZGFyO1xcdTYxMGZpcmM7XFx1NDEyNVxcdTAxODBhbHJcXHUyMjAxXFx1MjIwZVxcdTIyMTNydHNcXHUwMTAwO3VcXHUyMjA5XFx1MjIwYVxcdTY2NjVpdFxceGJiXFx1MjIwYWxpcDtcXHU2MDI2Y29uO1xcdTYyYjlyO1xcdWMwMDBcXHVkODM1XFx1ZGQyNXNcXHUwMTAwZXdcXHUyMjIzXFx1MjIyOWFyb3c7XFx1NjkyNWFyb3c7XFx1NjkyNlxcdTAyODBhbW9wclxcdTIyM2FcXHUyMjNlXFx1MjI0M1xcdTIyNWVcXHUyMjYzcnI7XFx1NjFmZnRodDtcXHU2MjNia1xcdTAxMDBsclxcdTIyNDlcXHUyMjUzZWZ0YXJyb3c7XFx1NjFhOWlnaHRhcnJvdztcXHU2MWFhZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNTliYXI7XFx1NjAxNVxcdTAxODBjbHRcXHUyMjZmXFx1MjI3NFxcdTIyNzhyO1xcdWMwMDBcXHVkODM1XFx1ZGNiZGFzXFx4ZThcXHUyMWY0cm9rO1xcdTQxMjdcXHUwMTAwYnBcXHUyMjgyXFx1MjI4N3VsbDtcXHU2MDQzaGVuXFx4YmJcXHUxYzViXFx1MGFlMVxcdTIyYTNcXDBcXHUyMmFhXFwwXFx1MjJiOFxcdTIyYzVcXHUyMmNlXFwwXFx1MjJkNVxcdTIyZjNcXDBcXDBcXHUyMmY4XFx1MjMyMlxcdTIzNjdcXHUyMzYyXFx1MjM3ZlxcMFxcdTIzODZcXHUyM2FhXFx1MjNiNGN1dGVcXHU4MDNiXFx4ZWRcXHU0MGVkXFx1MDE4MDtpeVxcdTA3NzFcXHUyMmIwXFx1MjJiNXJjXFx1ODAzYlxceGVlXFx1NDBlZTtcXHU0NDM4XFx1MDEwMGN4XFx1MjJiY1xcdTIyYmZ5O1xcdTQ0MzVjbFxcdTgwM2JcXHhhMVxcdTQwYTFcXHUwMTAwZnJcXHUwMzlmXFx1MjJjOTtcXHVjMDAwXFx1ZDgzNVxcdWRkMjZyYXZlXFx1ODAzYlxceGVjXFx1NDBlY1xcdTAyMDA7aW5vXFx1MDczZVxcdTIyZGRcXHUyMmU5XFx1MjJlZVxcdTAxMDBpblxcdTIyZTJcXHUyMmU2bnQ7XFx1NmEwY3Q7XFx1NjIyZGZpbjtcXHU2OWRjdGE7XFx1NjEyOWxpZztcXHU0MTMzXFx1MDE4MGFvcFxcdTIyZmVcXHUyMzFhXFx1MjMxZFxcdTAxODBjZ3RcXHUyMzA1XFx1MjMwOFxcdTIzMTdyO1xcdTQxMmJcXHUwMTgwZWxwXFx1MDcxZlxcdTIzMGZcXHUyMzEzaW5cXHhlNVxcdTA3OGVhclxceGY0XFx1MDcyMGg7XFx1NDEzMWY7XFx1NjJiN2VkO1xcdTQxYjVcXHUwMjgwO2Nmb3RcXHUwNGY0XFx1MjMyY1xcdTIzMzFcXHUyMzNkXFx1MjM0MWFyZTtcXHU2MTA1aW5cXHUwMTAwO3RcXHUyMzM4XFx1MjMzOVxcdTYyMWVpZTtcXHU2OWRkZG9cXHhmNFxcdTIzMTlcXHUwMjgwO2NlbHBcXHUwNzU3XFx1MjM0Y1xcdTIzNTBcXHUyMzViXFx1MjM2MWFsO1xcdTYyYmFcXHUwMTAwZ3JcXHUyMzU1XFx1MjM1OWVyXFx4ZjNcXHUxNTYzXFx4ZTNcXHUyMzRkYXJoaztcXHU2YTE3cm9kO1xcdTZhM2NcXHUwMjAwY2dwdFxcdTIzNmZcXHUyMzcyXFx1MjM3NlxcdTIzN2J5O1xcdTQ0NTFvbjtcXHU0MTJmZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNWFhO1xcdTQzYjl1ZXN0XFx1ODAzYlxceGJmXFx1NDBiZlxcdTAxMDBjaVxcdTIzOGFcXHUyMzhmcjtcXHVjMDAwXFx1ZDgzNVxcdWRjYmVuXFx1MDI4MDtFZHN2XFx1MDRmNFxcdTIzOWJcXHUyMzlkXFx1MjNhMVxcdTA0ZjM7XFx1NjJmOW90O1xcdTYyZjVcXHUwMTAwO3ZcXHUyM2E2XFx1MjNhN1xcdTYyZjQ7XFx1NjJmM1xcdTAxMDA7aVxcdTA3NzdcXHUyM2FlbGRlO1xcdTQxMjlcXHUwMWViXFx1MjNiOFxcMFxcdTIzYmNjeTtcXHU0NDU2bFxcdTgwM2JcXHhlZlxcdTQwZWZcXHUwMzAwY2Ztb3N1XFx1MjNjY1xcdTIzZDdcXHUyM2RjXFx1MjNlMVxcdTIzZTdcXHUyM2Y1XFx1MDEwMGl5XFx1MjNkMVxcdTIzZDVyYztcXHU0MTM1O1xcdTQ0MzlyO1xcdWMwMDBcXHVkODM1XFx1ZGQyN2F0aDtcXHU0MjM3cGY7XFx1YzAwMFxcdWQ4MzVcXHVkZDViXFx1MDFlM1xcdTIzZWNcXDBcXHUyM2YxcjtcXHVjMDAwXFx1ZDgzNVxcdWRjYmZyY3k7XFx1NDQ1OGtjeTtcXHU0NDU0XFx1MDQwMGFjZmdoam9zXFx1MjQwYlxcdTI0MTZcXHUyNDIyXFx1MjQyN1xcdTI0MmRcXHUyNDMxXFx1MjQzNVxcdTI0M2JwcGFcXHUwMTAwO3ZcXHUyNDEzXFx1MjQxNFxcdTQzYmE7XFx1NDNmMFxcdTAxMDBleVxcdTI0MWJcXHUyNDIwZGlsO1xcdTQxMzc7XFx1NDQzYXI7XFx1YzAwMFxcdWQ4MzVcXHVkZDI4cmVlbjtcXHU0MTM4Y3k7XFx1NDQ0NWN5O1xcdTQ0NWNwZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNWNjcjtcXHVjMDAwXFx1ZDgzNVxcdWRjYzBcXHUwYjgwQUJFSGFiY2RlZmdoamxtbm9wcnN0dXZcXHUyNDcwXFx1MjQ4MVxcdTI0ODZcXHUyNDhkXFx1MjQ5MVxcdTI1MGVcXHUyNTNkXFx1MjU1YVxcdTI1ODBcXHUyNjRlXFx1MjY1ZVxcdTI2NjVcXHUyNjc5XFx1MjY3ZFxcdTI2OWFcXHUyNmIyXFx1MjZkOFxcdTI3NWRcXHUyNzY4XFx1Mjc4YlxcdTI3YzBcXHUyODAxXFx1MjgxMlxcdTAxODBhcnRcXHUyNDc3XFx1MjQ3YVxcdTI0N2NyXFx4ZjJcXHUwOWM2XFx4ZjJcXHUwMzk1YWlsO1xcdTY5MWJhcnI7XFx1NjkwZVxcdTAxMDA7Z1xcdTA5OTRcXHUyNDhiO1xcdTZhOGJhcjtcXHU2OTYyXFx1MDk2M1xcdTI0YTVcXDBcXHUyNGFhXFwwXFx1MjRiMVxcMFxcMFxcMFxcMFxcMFxcdTI0YjVcXHUyNGJhXFwwXFx1MjRjNlxcdTI0YzhcXHUyNGNkXFwwXFx1MjRmOXV0ZTtcXHU0MTNhbXB0eXY7XFx1NjliNHJhXFx4ZWVcXHUwODRjYmRhO1xcdTQzYmJnXFx1MDE4MDtkbFxcdTA4OGVcXHUyNGMxXFx1MjRjMztcXHU2OTkxXFx4ZTVcXHUwODhlO1xcdTZhODV1b1xcdTgwM2JcXHhhYlxcdTQwYWJyXFx1MDQwMDtiZmhscHN0XFx1MDg5OVxcdTI0ZGVcXHUyNGU2XFx1MjRlOVxcdTI0ZWJcXHUyNGVlXFx1MjRmMVxcdTI0ZjVcXHUwMTAwO2ZcXHUwODlkXFx1MjRlM3M7XFx1NjkxZnM7XFx1NjkxZFxceGViXFx1MjI1MnA7XFx1NjFhYmw7XFx1NjkzOWltO1xcdTY5NzNsO1xcdTYxYTJcXHUwMTgwO2FlXFx1MjRmZlxcdTI1MDBcXHUyNTA0XFx1NmFhYmlsO1xcdTY5MTlcXHUwMTAwO3NcXHUyNTA5XFx1MjUwYVxcdTZhYWQ7XFx1YzAwMFxcdTJhYWRcXHVmZTAwXFx1MDE4MGFiclxcdTI1MTVcXHUyNTE5XFx1MjUxZHJyO1xcdTY5MGNyaztcXHU2NzcyXFx1MDEwMGFrXFx1MjUyMlxcdTI1MmNjXFx1MDEwMGVrXFx1MjUyOFxcdTI1MmE7XFx1NDA3YjtcXHU0MDViXFx1MDEwMGVzXFx1MjUzMVxcdTI1MzM7XFx1Njk4YmxcXHUwMTAwZHVcXHUyNTM5XFx1MjUzYjtcXHU2OThmO1xcdTY5OGRcXHUwMjAwYWV1eVxcdTI1NDZcXHUyNTRiXFx1MjU1NlxcdTI1NThyb247XFx1NDEzZVxcdTAxMDBkaVxcdTI1NTBcXHUyNTU0aWw7XFx1NDEzY1xceGVjXFx1MDhiMFxceGUyXFx1MjUyOTtcXHU0NDNiXFx1MDIwMGNxcnNcXHUyNTYzXFx1MjU2NlxcdTI1NmRcXHUyNTdkYTtcXHU2OTM2dW9cXHUwMTAwO3JcXHUwZTE5XFx1MTc0NlxcdTAxMDBkdVxcdTI1NzJcXHUyNTc3aGFyO1xcdTY5NjdzaGFyO1xcdTY5NGJoO1xcdTYxYjJcXHUwMjgwO2ZncXNcXHUyNThiXFx1MjU4Y1xcdTA5ODlcXHUyNWYzXFx1MjVmZlxcdTYyNjR0XFx1MDI4MGFobHJ0XFx1MjU5OFxcdTI1YTRcXHUyNWI3XFx1MjVjMlxcdTI1ZThycm93XFx1MDEwMDt0XFx1MDg5OVxcdTI1YTFhXFx4ZTlcXHUyNGY2YXJwb29uXFx1MDEwMGR1XFx1MjVhZlxcdTI1YjRvd25cXHhiYlxcdTA0NWFwXFx4YmJcXHUwOTY2ZWZ0YXJyb3dzO1xcdTYxYzdpZ2h0XFx1MDE4MGFoc1xcdTI1Y2RcXHUyNWQ2XFx1MjVkZXJyb3dcXHUwMTAwO3NcXHUwOGY0XFx1MDhhN2FycG9vblxceGYzXFx1MGY5OHF1aWdhcnJvXFx4ZjdcXHUyMWYwaHJlZXRpbWVzO1xcdTYyY2JcXHUwMTgwO3FzXFx1MjU4YlxcdTA5OTNcXHUyNWZhbGFuXFx4ZjRcXHUwOWFjXFx1MDI4MDtjZGdzXFx1MDlhY1xcdTI2MGFcXHUyNjBkXFx1MjYxZFxcdTI2MjhjO1xcdTZhYThvdFxcdTAxMDA7b1xcdTI2MTRcXHUyNjE1XFx1NmE3ZlxcdTAxMDA7clxcdTI2MWFcXHUyNjFiXFx1NmE4MTtcXHU2YTgzXFx1MDEwMDtlXFx1MjYyMlxcdTI2MjVcXHVjMDAwXFx1MjJkYVxcdWZlMDBzO1xcdTZhOTNcXHUwMjgwYWRlZ3NcXHUyNjMzXFx1MjYzOVxcdTI2M2RcXHUyNjQ5XFx1MjY0YnBwcm9cXHhmOFxcdTI0YzZvdDtcXHU2MmQ2cVxcdTAxMDBncVxcdTI2NDNcXHUyNjQ1XFx4ZjRcXHUwOTg5Z3RcXHhmMlxcdTI0OGNcXHhmNFxcdTA5OWJpXFx4ZWRcXHUwOWIyXFx1MDE4MGlsclxcdTI2NTVcXHUwOGUxXFx1MjY1YXNodDtcXHU2OTdjO1xcdWMwMDBcXHVkODM1XFx1ZGQyOVxcdTAxMDA7RVxcdTA5OWNcXHUyNjYzO1xcdTZhOTFcXHUwMTYxXFx1MjY2OVxcdTI2NzZyXFx1MDEwMGR1XFx1MjViMlxcdTI2NmVcXHUwMTAwO2xcXHUwOTY1XFx1MjY3MztcXHU2OTZhbGs7XFx1NjU4NGN5O1xcdTQ0NTlcXHUwMjgwO2FjaHRcXHUwYTQ4XFx1MjY4OFxcdTI2OGJcXHUyNjkxXFx1MjY5NnJcXHhmMlxcdTI1YzFvcm5lXFx4ZjJcXHUxZDA4YXJkO1xcdTY5NmJyaTtcXHU2NWZhXFx1MDEwMGlvXFx1MjY5ZlxcdTI2YTRkb3Q7XFx1NDE0MHVzdFxcdTAxMDA7YVxcdTI2YWNcXHUyNmFkXFx1NjNiMGNoZVxceGJiXFx1MjZhZFxcdTAyMDBFYWVzXFx1MjZiYlxcdTI2YmRcXHUyNmM5XFx1MjZkNDtcXHU2MjY4cFxcdTAxMDA7cFxcdTI2YzNcXHUyNmM0XFx1NmE4OXJveFxceGJiXFx1MjZjNFxcdTAxMDA7cVxcdTI2Y2VcXHUyNmNmXFx1NmE4N1xcdTAxMDA7cVxcdTI2Y2VcXHUyNmJiaW07XFx1NjJlNlxcdTA0MDBhYm5vcHR3elxcdTI2ZTlcXHUyNmY0XFx1MjZmN1xcdTI3MWFcXHUyNzJmXFx1Mjc0MVxcdTI3NDdcXHUyNzUwXFx1MDEwMG5yXFx1MjZlZVxcdTI2ZjFnO1xcdTY3ZWNyO1xcdTYxZmRyXFx4ZWJcXHUwOGMxZ1xcdTAxODBsbXJcXHUyNmZmXFx1MjcwZFxcdTI3MTRlZnRcXHUwMTAwYXJcXHUwOWU2XFx1MjcwN2lnaHRcXHhlMVxcdTA5ZjJhcHN0bztcXHU2N2ZjaWdodFxceGUxXFx1MDlmZHBhcnJvd1xcdTAxMDBsclxcdTI3MjVcXHUyNzI5ZWZcXHhmNFxcdTI0ZWRpZ2h0O1xcdTYxYWNcXHUwMTgwYWZsXFx1MjczNlxcdTI3MzlcXHUyNzNkcjtcXHU2OTg1O1xcdWMwMDBcXHVkODM1XFx1ZGQ1ZHVzO1xcdTZhMmRpbWVzO1xcdTZhMzRcXHUwMTYxXFx1Mjc0YlxcdTI3NGZzdDtcXHU2MjE3XFx4ZTFcXHUxMzRlXFx1MDE4MDtlZlxcdTI3NTdcXHUyNzU4XFx1MTgwMFxcdTY1Y2FuZ2VcXHhiYlxcdTI3NThhclxcdTAxMDA7bFxcdTI3NjRcXHUyNzY1XFx1NDAyOHQ7XFx1Njk5M1xcdTAyODBhY2htdFxcdTI3NzNcXHUyNzc2XFx1Mjc3Y1xcdTI3ODVcXHUyNzg3clxceGYyXFx1MDhhOG9ybmVcXHhmMlxcdTFkOGNhclxcdTAxMDA7ZFxcdTBmOThcXHUyNzgzO1xcdTY5NmQ7XFx1NjAwZXJpO1xcdTYyYmZcXHUwMzAwYWNoaXF0XFx1Mjc5OFxcdTI3OWRcXHUwYTQwXFx1MjdhMlxcdTI3YWVcXHUyN2JicXVvO1xcdTYwMzlyO1xcdWMwMDBcXHVkODM1XFx1ZGNjMW1cXHUwMTgwO2VnXFx1MDliMlxcdTI3YWFcXHUyN2FjO1xcdTZhOGQ7XFx1NmE4ZlxcdTAxMDBidVxcdTI1MmFcXHUyN2Izb1xcdTAxMDA7clxcdTBlMWZcXHUyN2I5O1xcdTYwMWFyb2s7XFx1NDE0MlxcdTg0MDA8O2NkaGlscXJcXHUwODJiXFx1MjdkMlxcdTI2MzlcXHUyN2RjXFx1MjdlMFxcdTI3ZTVcXHUyN2VhXFx1MjdmMFxcdTAxMDBjaVxcdTI3ZDdcXHUyN2Q5O1xcdTZhYTZyO1xcdTZhNzlyZVxceGU1XFx1MjVmMm1lcztcXHU2MmM5YXJyO1xcdTY5NzZ1ZXN0O1xcdTZhN2JcXHUwMTAwUGlcXHUyN2Y1XFx1MjdmOWFyO1xcdTY5OTZcXHUwMTgwO2VmXFx1MjgwMFxcdTA5MmRcXHUxODFiXFx1NjVjM3JcXHUwMTAwZHVcXHUyODA3XFx1MjgwZHNoYXI7XFx1Njk0YWhhcjtcXHU2OTY2XFx1MDEwMGVuXFx1MjgxN1xcdTI4MjFydG5lcXE7XFx1YzAwMFxcdTIyNjhcXHVmZTAwXFx4YzVcXHUyODFlXFx1MDcwMERhY2RlZmhpbG5vcHN1XFx1Mjg0MFxcdTI4NDVcXHUyODgyXFx1Mjg4ZVxcdTI4OTNcXHUyOGEwXFx1MjhhNVxcdTI4YThcXHUyOGRhXFx1MjhlMlxcdTI4ZTRcXHUwYTgzXFx1MjhmM1xcdTI5MDJEb3Q7XFx1NjIzYVxcdTAyMDBjbHByXFx1Mjg0ZVxcdTI4NTJcXHUyODYzXFx1Mjg3ZHJcXHU4MDNiXFx4YWZcXHU0MGFmXFx1MDEwMGV0XFx1Mjg1N1xcdTI4NTk7XFx1NjY0MlxcdTAxMDA7ZVxcdTI4NWVcXHUyODVmXFx1NjcyMHNlXFx4YmJcXHUyODVmXFx1MDEwMDtzXFx1MTAzYlxcdTI4Njh0b1xcdTAyMDA7ZGx1XFx1MTAzYlxcdTI4NzNcXHUyODc3XFx1Mjg3Ym93XFx4ZWVcXHUwNDhjZWZcXHhmNFxcdTA5MGZcXHhmMFxcdTEzZDFrZXI7XFx1NjVhZVxcdTAxMDBveVxcdTI4ODdcXHUyODhjbW1hO1xcdTZhMjk7XFx1NDQzY2FzaDtcXHU2MDE0YXN1cmVkYW5nbGVcXHhiYlxcdTE2MjZyO1xcdWMwMDBcXHVkODM1XFx1ZGQyYW87XFx1NjEyN1xcdTAxODBjZG5cXHUyOGFmXFx1MjhiNFxcdTI4Yzlyb1xcdTgwM2JcXHhiNVxcdTQwYjVcXHUwMjAwO2FjZFxcdTE0NjRcXHUyOGJkXFx1MjhjMFxcdTI4YzRzXFx4ZjRcXHUxNmE3aXI7XFx1NmFmMG90XFx1ODBiYlxceGI3XFx1MDFiNXVzXFx1MDE4MDtiZFxcdTI4ZDJcXHUxOTAzXFx1MjhkM1xcdTYyMTJcXHUwMTAwO3VcXHUxZDNjXFx1MjhkODtcXHU2YTJhXFx1MDE2M1xcdTI4ZGVcXHUyOGUxcDtcXHU2YWRiXFx4ZjJcXHUyMjEyXFx4ZjBcXHUwYTgxXFx1MDEwMGRwXFx1MjhlOVxcdTI4ZWVlbHM7XFx1NjJhN2Y7XFx1YzAwMFxcdWQ4MzVcXHVkZDVlXFx1MDEwMGN0XFx1MjhmOFxcdTI4ZmRyO1xcdWMwMDBcXHVkODM1XFx1ZGNjMnBvc1xceGJiXFx1MTU5ZFxcdTAxODA7bG1cXHUyOTA5XFx1MjkwYVxcdTI5MGRcXHU0M2JjdGltYXA7XFx1NjJiOFxcdTBjMDBHTFJWYWJjZGVmZ2hpamxtb3Byc3R1dndcXHUyOTQyXFx1Mjk1M1xcdTI5N2VcXHUyOTg5XFx1Mjk5OFxcdTI5ZGFcXHUyOWU5XFx1MmExNVxcdTJhMWFcXHUyYTU4XFx1MmE1ZFxcdTJhODNcXHUyYTk1XFx1MmFhNFxcdTJhYThcXHUyYjA0XFx1MmIwN1xcdTJiNDRcXHUyYjdmXFx1MmJhZVxcdTJjMzRcXHUyYzY3XFx1MmM3Y1xcdTJjZTlcXHUwMTAwZ3RcXHUyOTQ3XFx1Mjk0YjtcXHVjMDAwXFx1MjJkOVxcdTAzMzhcXHUwMTAwO3ZcXHUyOTUwXFx1MGJjZlxcdWMwMDBcXHUyMjZiXFx1MjBkMlxcdTAxODBlbHRcXHUyOTVhXFx1Mjk3MlxcdTI5NzZmdFxcdTAxMDBhclxcdTI5NjFcXHUyOTY3cnJvdztcXHU2MWNkaWdodGFycm93O1xcdTYxY2U7XFx1YzAwMFxcdTIyZDhcXHUwMzM4XFx1MDEwMDt2XFx1Mjk3YlxcdTBjNDdcXHVjMDAwXFx1MjI2YVxcdTIwZDJpZ2h0YXJyb3c7XFx1NjFjZlxcdTAxMDBEZFxcdTI5OGVcXHUyOTkzYXNoO1xcdTYyYWZhc2g7XFx1NjJhZVxcdTAyODBiY25wdFxcdTI5YTNcXHUyOWE3XFx1MjlhY1xcdTI5YjFcXHUyOWNjbGFcXHhiYlxcdTAyZGV1dGU7XFx1NDE0NGc7XFx1YzAwMFxcdTIyMjBcXHUyMGQyXFx1MDI4MDtFaW9wXFx1MGQ4NFxcdTI5YmNcXHUyOWMwXFx1MjljNVxcdTI5Yzg7XFx1YzAwMFxcdTJhNzBcXHUwMzM4ZDtcXHVjMDAwXFx1MjI0YlxcdTAzMzhzO1xcdTQxNDlyb1xceGY4XFx1MGQ4NHVyXFx1MDEwMDthXFx1MjlkM1xcdTI5ZDRcXHU2NjZlbFxcdTAxMDA7c1xcdTI5ZDNcXHUwYjM4XFx1MDFmM1xcdTI5ZGZcXDBcXHUyOWUzcFxcdTgwYmJcXHhhMFxcdTBiMzdtcFxcdTAxMDA7ZVxcdTBiZjlcXHUwYzAwXFx1MDI4MGFlb3V5XFx1MjlmNFxcdTI5ZmVcXHUyYTAzXFx1MmExMFxcdTJhMTNcXHUwMWYwXFx1MjlmOVxcMFxcdTI5ZmI7XFx1NmE0M29uO1xcdTQxNDhkaWw7XFx1NDE0Nm5nXFx1MDEwMDtkXFx1MGQ3ZVxcdTJhMGFvdDtcXHVjMDAwXFx1MmE2ZFxcdTAzMzhwO1xcdTZhNDI7XFx1NDQzZGFzaDtcXHU2MDEzXFx1MDM4MDtBYWRxc3hcXHUwYjkyXFx1MmEyOVxcdTJhMmRcXHUyYTNiXFx1MmE0MVxcdTJhNDVcXHUyYTUwcnI7XFx1NjFkN3JcXHUwMTAwaHJcXHUyYTMzXFx1MmEzNms7XFx1NjkyNFxcdTAxMDA7b1xcdTEzZjJcXHUxM2Ywb3Q7XFx1YzAwMFxcdTIyNTBcXHUwMzM4dWlcXHhmNlxcdTBiNjNcXHUwMTAwZWlcXHUyYTRhXFx1MmE0ZWFyO1xcdTY5MjhcXHhlZFxcdTBiOThpc3RcXHUwMTAwO3NcXHUwYmEwXFx1MGI5ZnI7XFx1YzAwMFxcdWQ4MzVcXHVkZDJiXFx1MDIwMEVlc3RcXHUwYmM1XFx1MmE2NlxcdTJhNzlcXHUyYTdjXFx1MDE4MDtxc1xcdTBiYmNcXHUyYTZkXFx1MGJlMVxcdTAxODA7cXNcXHUwYmJjXFx1MGJjNVxcdTJhNzRsYW5cXHhmNFxcdTBiZTJpXFx4ZWRcXHUwYmVhXFx1MDEwMDtyXFx1MGJiNlxcdTJhODFcXHhiYlxcdTBiYjdcXHUwMTgwQWFwXFx1MmE4YVxcdTJhOGRcXHUyYTkxclxceGYyXFx1Mjk3MXJyO1xcdTYxYWVhcjtcXHU2YWYyXFx1MDE4MDtzdlxcdTBmOGRcXHUyYTljXFx1MGY4Y1xcdTAxMDA7ZFxcdTJhYTFcXHUyYWEyXFx1NjJmYztcXHU2MmZhY3k7XFx1NDQ1YVxcdTAzODBBRWFkZXN0XFx1MmFiN1xcdTJhYmFcXHUyYWJlXFx1MmFjMlxcdTJhYzVcXHUyYWY2XFx1MmFmOXJcXHhmMlxcdTI5NjY7XFx1YzAwMFxcdTIyNjZcXHUwMzM4cnI7XFx1NjE5YXI7XFx1NjAyNVxcdTAyMDA7ZnFzXFx1MGMzYlxcdTJhY2VcXHUyYWUzXFx1MmFlZnRcXHUwMTAwYXJcXHUyYWQ0XFx1MmFkOXJyb1xceGY3XFx1MmFjMWlnaHRhcnJvXFx4ZjdcXHUyYTkwXFx1MDE4MDtxc1xcdTBjM2JcXHUyYWJhXFx1MmFlYWxhblxceGY0XFx1MGM1NVxcdTAxMDA7c1xcdTBjNTVcXHUyYWY0XFx4YmJcXHUwYzM2aVxceGVkXFx1MGM1ZFxcdTAxMDA7clxcdTBjMzVcXHUyYWZlaVxcdTAxMDA7ZVxcdTBjMWFcXHUwYzI1aVxceGU0XFx1MGQ5MFxcdTAxMDBwdFxcdTJiMGNcXHUyYjExZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNWZcXHU4MTgwXFx4YWM7aW5cXHUyYjE5XFx1MmIxYVxcdTJiMzZcXHU0MGFjblxcdTAyMDA7RWR2XFx1MGI4OVxcdTJiMjRcXHUyYjI4XFx1MmIyZTtcXHVjMDAwXFx1MjJmOVxcdTAzMzhvdDtcXHVjMDAwXFx1MjJmNVxcdTAzMzhcXHUwMWUxXFx1MGI4OVxcdTJiMzNcXHUyYjM1O1xcdTYyZjc7XFx1NjJmNmlcXHUwMTAwO3ZcXHUwY2I4XFx1MmIzY1xcdTAxZTFcXHUwY2I4XFx1MmI0MVxcdTJiNDM7XFx1NjJmZTtcXHU2MmZkXFx1MDE4MGFvclxcdTJiNGJcXHUyYjYzXFx1MmI2OXJcXHUwMjAwO2FzdFxcdTBiN2JcXHUyYjU1XFx1MmI1YVxcdTJiNWZsbGVcXHhlY1xcdTBiN2JsO1xcdWMwMDBcXHUyYWZkXFx1MjBlNTtcXHVjMDAwXFx1MjIwMlxcdTAzMzhsaW50O1xcdTZhMTRcXHUwMTgwO2NlXFx1MGM5MlxcdTJiNzBcXHUyYjczdVxceGU1XFx1MGNhNVxcdTAxMDA7Y1xcdTBjOThcXHUyYjc4XFx1MDEwMDtlXFx1MGM5MlxcdTJiN2RcXHhmMVxcdTBjOThcXHUwMjAwQWFpdFxcdTJiODhcXHUyYjhiXFx1MmI5ZFxcdTJiYTdyXFx4ZjJcXHUyOTg4cnJcXHUwMTgwO2N3XFx1MmI5NFxcdTJiOTVcXHUyYjk5XFx1NjE5YjtcXHVjMDAwXFx1MjkzM1xcdTAzMzg7XFx1YzAwMFxcdTIxOWRcXHUwMzM4Z2h0YXJyb3dcXHhiYlxcdTJiOTVyaVxcdTAxMDA7ZVxcdTBjY2JcXHUwY2Q2XFx1MDM4MGNoaW1wcXVcXHUyYmJkXFx1MmJjZFxcdTJiZDlcXHUyYjA0XFx1MGI3OFxcdTJiZTRcXHUyYmVmXFx1MDIwMDtjZXJcXHUwZDMyXFx1MmJjNlxcdTBkMzdcXHUyYmM5dVxceGU1XFx1MGQ0NTtcXHVjMDAwXFx1ZDgzNVxcdWRjYzNvcnRcXHUwMjZkXFx1MmIwNVxcMFxcMFxcdTJiZDZhclxceGUxXFx1MmI1Nm1cXHUwMTAwO2VcXHUwZDZlXFx1MmJkZlxcdTAxMDA7cVxcdTBkNzRcXHUwZDczc3VcXHUwMTAwYnBcXHUyYmViXFx1MmJlZFxceGU1XFx1MGNmOFxceGU1XFx1MGQwYlxcdTAxODBiY3BcXHUyYmY2XFx1MmMxMVxcdTJjMTlcXHUwMjAwO0Vlc1xcdTJiZmZcXHUyYzAwXFx1MGQyMlxcdTJjMDRcXHU2Mjg0O1xcdWMwMDBcXHUyYWM1XFx1MDMzOGV0XFx1MDEwMDtlXFx1MGQxYlxcdTJjMGJxXFx1MDEwMDtxXFx1MGQyM1xcdTJjMDBjXFx1MDEwMDtlXFx1MGQzMlxcdTJjMTdcXHhmMVxcdTBkMzhcXHUwMjAwO0Vlc1xcdTJjMjJcXHUyYzIzXFx1MGQ1ZlxcdTJjMjdcXHU2Mjg1O1xcdWMwMDBcXHUyYWM2XFx1MDMzOGV0XFx1MDEwMDtlXFx1MGQ1OFxcdTJjMmVxXFx1MDEwMDtxXFx1MGQ2MFxcdTJjMjNcXHUwMjAwZ2lsclxcdTJjM2RcXHUyYzNmXFx1MmM0NVxcdTJjNDdcXHhlY1xcdTBiZDdsZGVcXHU4MDNiXFx4ZjFcXHU0MGYxXFx4ZTdcXHUwYzQzaWFuZ2xlXFx1MDEwMGxyXFx1MmM1MlxcdTJjNWNlZnRcXHUwMTAwO2VcXHUwYzFhXFx1MmM1YVxceGYxXFx1MGMyNmlnaHRcXHUwMTAwO2VcXHUwY2NiXFx1MmM2NVxceGYxXFx1MGNkN1xcdTAxMDA7bVxcdTJjNmNcXHUyYzZkXFx1NDNiZFxcdTAxODA7ZXNcXHUyYzc0XFx1MmM3NVxcdTJjNzlcXHU0MDIzcm87XFx1NjExNnA7XFx1NjAwN1xcdTA0ODBESGFkZ2lscnNcXHUyYzhmXFx1MmM5NFxcdTJjOTlcXHUyYzllXFx1MmNhM1xcdTJjYjBcXHUyY2I2XFx1MmNkM1xcdTJjZTNhc2g7XFx1NjJhZGFycjtcXHU2OTA0cDtcXHVjMDAwXFx1MjI0ZFxcdTIwZDJhc2g7XFx1NjJhY1xcdTAxMDBldFxcdTJjYThcXHUyY2FjO1xcdWMwMDBcXHUyMjY1XFx1MjBkMjtcXHVjMDAwPlxcdTIwZDJuZmluO1xcdTY5ZGVcXHUwMTgwQWV0XFx1MmNiZFxcdTJjYzFcXHUyY2M1cnI7XFx1NjkwMjtcXHVjMDAwXFx1MjI2NFxcdTIwZDJcXHUwMTAwO3JcXHUyY2NhXFx1MmNjZFxcdWMwMDA8XFx1MjBkMmllO1xcdWMwMDBcXHUyMmI0XFx1MjBkMlxcdTAxMDBBdFxcdTJjZDhcXHUyY2RjcnI7XFx1NjkwM3JpZTtcXHVjMDAwXFx1MjJiNVxcdTIwZDJpbTtcXHVjMDAwXFx1MjIzY1xcdTIwZDJcXHUwMTgwQWFuXFx1MmNmMFxcdTJjZjRcXHUyZDAycnI7XFx1NjFkNnJcXHUwMTAwaHJcXHUyY2ZhXFx1MmNmZGs7XFx1NjkyM1xcdTAxMDA7b1xcdTEzZTdcXHUxM2U1ZWFyO1xcdTY5MjdcXHUxMjUzXFx1MWE5NVxcMFxcMFxcMFxcMFxcMFxcMFxcMFxcMFxcMFxcMFxcMFxcMFxcMFxcdTJkMmRcXDBcXHUyZDM4XFx1MmQ0OFxcdTJkNjBcXHUyZDY1XFx1MmQ3MlxcdTJkODRcXHUxYjA3XFwwXFwwXFx1MmQ4ZFxcdTJkYWJcXDBcXHUyZGM4XFx1MmRjZVxcMFxcdTJkZGNcXHUyZTE5XFx1MmUyYlxcdTJlM2VcXHUyZTQzXFx1MDEwMGNzXFx1MmQzMVxcdTFhOTd1dGVcXHU4MDNiXFx4ZjNcXHU0MGYzXFx1MDEwMGl5XFx1MmQzY1xcdTJkNDVyXFx1MDEwMDtjXFx1MWE5ZVxcdTJkNDJcXHU4MDNiXFx4ZjRcXHU0MGY0O1xcdTQ0M2VcXHUwMjgwYWJpb3NcXHUxYWEwXFx1MmQ1MlxcdTJkNTdcXHUwMWM4XFx1MmQ1YWxhYztcXHU0MTUxdjtcXHU2YTM4b2xkO1xcdTY5YmNsaWc7XFx1NDE1M1xcdTAxMDBjclxcdTJkNjlcXHUyZDZkaXI7XFx1NjliZjtcXHVjMDAwXFx1ZDgzNVxcdWRkMmNcXHUwMzZmXFx1MmQ3OVxcMFxcMFxcdTJkN2NcXDBcXHUyZDgybjtcXHU0MmRiYXZlXFx1ODAzYlxceGYyXFx1NDBmMjtcXHU2OWMxXFx1MDEwMGJtXFx1MmQ4OFxcdTBkZjRhcjtcXHU2OWI1XFx1MDIwMGFjaXRcXHUyZDk1XFx1MmQ5OFxcdTJkYTVcXHUyZGE4clxceGYyXFx1MWE4MFxcdTAxMDBpclxcdTJkOWRcXHUyZGEwcjtcXHU2OWJlb3NzO1xcdTY5YmJuXFx4ZTVcXHUwZTUyO1xcdTY5YzBcXHUwMTgwYWVpXFx1MmRiMVxcdTJkYjVcXHUyZGI5Y3I7XFx1NDE0ZGdhO1xcdTQzYzlcXHUwMTgwY2RuXFx1MmRjMFxcdTJkYzVcXHUwMWNkcm9uO1xcdTQzYmY7XFx1NjliNnBmO1xcdWMwMDBcXHVkODM1XFx1ZGQ2MFxcdTAxODBhZWxcXHUyZGQ0XFx1MmRkN1xcdTAxZDJyO1xcdTY5YjdycDtcXHU2OWI5XFx1MDM4MDthZGlvc3ZcXHUyZGVhXFx1MmRlYlxcdTJkZWVcXHUyZTA4XFx1MmUwZFxcdTJlMTBcXHUyZTE2XFx1NjIyOHJcXHhmMlxcdTFhODZcXHUwMjAwO2VmbVxcdTJkZjdcXHUyZGY4XFx1MmUwMlxcdTJlMDVcXHU2YTVkclxcdTAxMDA7b1xcdTJkZmVcXHUyZGZmXFx1NjEzNGZcXHhiYlxcdTJkZmZcXHU4MDNiXFx4YWFcXHU0MGFhXFx1ODAzYlxceGJhXFx1NDBiYWdvZjtcXHU2MmI2cjtcXHU2YTU2bG9wZTtcXHU2YTU3O1xcdTZhNWJcXHUwMTgwY2xvXFx1MmUxZlxcdTJlMjFcXHUyZTI3XFx4ZjJcXHUyZTAxYXNoXFx1ODAzYlxceGY4XFx1NDBmOGw7XFx1NjI5OGlcXHUwMTZjXFx1MmUyZlxcdTJlMzRkZVxcdTgwM2JcXHhmNVxcdTQwZjVlc1xcdTAxMDA7YVxcdTAxZGJcXHUyZTNhcztcXHU2YTM2bWxcXHU4MDNiXFx4ZjZcXHU0MGY2YmFyO1xcdTYzM2RcXHUwYWUxXFx1MmU1ZVxcMFxcdTJlN2RcXDBcXHUyZTgwXFx1MmU5ZFxcMFxcdTJlYTJcXHUyZWI5XFwwXFwwXFx1MmVjYlxcdTBlOWNcXDBcXHUyZjEzXFwwXFwwXFx1MmYyYlxcdTJmYmNcXDBcXHUyZmM4clxcdTAyMDA7YXN0XFx1MDQwM1xcdTJlNjdcXHUyZTcyXFx1MGU4NVxcdTgxMDBcXHhiNjtsXFx1MmU2ZFxcdTJlNmVcXHU0MGI2bGVcXHhlY1xcdTA0MDNcXHUwMjY5XFx1MmU3OFxcMFxcMFxcdTJlN2JtO1xcdTZhZjM7XFx1NmFmZHk7XFx1NDQzZnJcXHUwMjgwY2ltcHRcXHUyZThiXFx1MmU4ZlxcdTJlOTNcXHUxODY1XFx1MmU5N250O1xcdTQwMjVvZDtcXHU0MDJlaWw7XFx1NjAzMGVuaztcXHU2MDMxcjtcXHVjMDAwXFx1ZDgzNVxcdWRkMmRcXHUwMTgwaW1vXFx1MmVhOFxcdTJlYjBcXHUyZWI0XFx1MDEwMDt2XFx1MmVhZFxcdTJlYWVcXHU0M2M2O1xcdTQzZDVtYVxceGY0XFx1MGE3Nm5lO1xcdTY2MGVcXHUwMTgwO3R2XFx1MmViZlxcdTJlYzBcXHUyZWM4XFx1NDNjMGNoZm9ya1xceGJiXFx1MWZmZDtcXHU0M2Q2XFx1MDEwMGF1XFx1MmVjZlxcdTJlZGZuXFx1MDEwMGNrXFx1MmVkNVxcdTJlZGRrXFx1MDEwMDtoXFx1MjFmNFxcdTJlZGI7XFx1NjEwZVxceGY2XFx1MjFmNHNcXHUwNDgwO2FiY2RlbXN0XFx1MmVmM1xcdTJlZjRcXHUxOTA4XFx1MmVmOVxcdTJlZmRcXHUyZjA0XFx1MmYwNlxcdTJmMGFcXHUyZjBlXFx1NDAyYmNpcjtcXHU2YTIzaXI7XFx1NmEyMlxcdTAxMDBvdVxcdTFkNDBcXHUyZjAyO1xcdTZhMjU7XFx1NmE3Mm5cXHU4MGJiXFx4YjFcXHUwZTlkaW07XFx1NmEyNndvO1xcdTZhMjdcXHUwMTgwaXB1XFx1MmYxOVxcdTJmMjBcXHUyZjI1bnRpbnQ7XFx1NmExNWY7XFx1YzAwMFxcdWQ4MzVcXHVkZDYxbmRcXHU4MDNiXFx4YTNcXHU0MGEzXFx1MDUwMDtFYWNlaW5vc3VcXHUwZWM4XFx1MmYzZlxcdTJmNDFcXHUyZjQ0XFx1MmY0N1xcdTJmODFcXHUyZjg5XFx1MmY5MlxcdTJmN2VcXHUyZmI2O1xcdTZhYjNwO1xcdTZhYjd1XFx4ZTVcXHUwZWQ5XFx1MDEwMDtjXFx1MGVjZVxcdTJmNGNcXHUwMzAwO2FjZW5zXFx1MGVjOFxcdTJmNTlcXHUyZjVmXFx1MmY2NlxcdTJmNjhcXHUyZjdlcHByb1xceGY4XFx1MmY0M3VybHllXFx4ZjFcXHUwZWQ5XFx4ZjFcXHUwZWNlXFx1MDE4MGFlc1xcdTJmNmZcXHUyZjc2XFx1MmY3YXBwcm94O1xcdTZhYjlxcTtcXHU2YWI1aW07XFx1NjJlOGlcXHhlZFxcdTBlZGZtZVxcdTAxMDA7c1xcdTJmODhcXHUwZWFlXFx1NjAzMlxcdTAxODBFYXNcXHUyZjc4XFx1MmY5MFxcdTJmN2FcXHhmMFxcdTJmNzVcXHUwMTgwZGZwXFx1MGVlY1xcdTJmOTlcXHUyZmFmXFx1MDE4MGFsc1xcdTJmYTBcXHUyZmE1XFx1MmZhYWxhcjtcXHU2MzJlaW5lO1xcdTYzMTJ1cmY7XFx1NjMxM1xcdTAxMDA7dFxcdTBlZmJcXHUyZmI0XFx4ZWZcXHUwZWZicmVsO1xcdTYyYjBcXHUwMTAwY2lcXHUyZmMwXFx1MmZjNXI7XFx1YzAwMFxcdWQ4MzVcXHVkY2M1O1xcdTQzYzhuY3NwO1xcdTYwMDhcXHUwMzAwZmlvcHN1XFx1MmZkYVxcdTIyZTJcXHUyZmRmXFx1MmZlNVxcdTJmZWJcXHUyZmYxcjtcXHVjMDAwXFx1ZDgzNVxcdWRkMmVwZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNjJyaW1lO1xcdTYwNTdjcjtcXHVjMDAwXFx1ZDgzNVxcdWRjYzZcXHUwMTgwYWVvXFx1MmZmOFxcdTMwMDlcXHUzMDEzdFxcdTAxMDBlaVxcdTJmZmVcXHUzMDA1cm5pb25cXHhmM1xcdTA2YjBudDtcXHU2YTE2c3RcXHUwMTAwO2VcXHUzMDEwXFx1MzAxMVxcdTQwM2ZcXHhmMVxcdTFmMTlcXHhmNFxcdTBmMTRcXHUwYTgwQUJIYWJjZGVmaGlsbW5vcHJzdHV4XFx1MzA0MFxcdTMwNTFcXHUzMDU1XFx1MzA1OVxcdTMwZTBcXHUzMTBlXFx1MzEyYlxcdTMxNDdcXHUzMTYyXFx1MzE3MlxcdTMxOGVcXHUzMjA2XFx1MzIxNVxcdTMyMjRcXHUzMjI5XFx1MzI1OFxcdTMyNmVcXHUzMjcyXFx1MzI5MFxcdTMyYjBcXHUzMmI3XFx1MDE4MGFydFxcdTMwNDdcXHUzMDRhXFx1MzA0Y3JcXHhmMlxcdTEwYjNcXHhmMlxcdTAzZGRhaWw7XFx1NjkxY2FyXFx4ZjJcXHUxYzY1YXI7XFx1Njk2NFxcdTAzODBjZGVucXJ0XFx1MzA2OFxcdTMwNzVcXHUzMDc4XFx1MzA3ZlxcdTMwOGZcXHUzMDk0XFx1MzBjY1xcdTAxMDBldVxcdTMwNmRcXHUzMDcxO1xcdWMwMDBcXHUyMjNkXFx1MDMzMXRlO1xcdTQxNTVpXFx4ZTNcXHUxMTZlbXB0eXY7XFx1NjliM2dcXHUwMjAwO2RlbFxcdTBmZDFcXHUzMDg5XFx1MzA4YlxcdTMwOGQ7XFx1Njk5MjtcXHU2OWE1XFx4ZTVcXHUwZmQxdW9cXHU4MDNiXFx4YmJcXHU0MGJiclxcdTA1ODA7YWJjZmhscHN0d1xcdTBmZGNcXHUzMGFjXFx1MzBhZlxcdTMwYjdcXHUzMGI5XFx1MzBiY1xcdTMwYmVcXHUzMGMwXFx1MzBjM1xcdTMwYzdcXHUzMGNhcDtcXHU2OTc1XFx1MDEwMDtmXFx1MGZlMFxcdTMwYjRzO1xcdTY5MjA7XFx1NjkzM3M7XFx1NjkxZVxceGViXFx1MjI1ZFxceGYwXFx1MjcyZWw7XFx1Njk0NWltO1xcdTY5NzRsO1xcdTYxYTM7XFx1NjE5ZFxcdTAxMDBhaVxcdTMwZDFcXHUzMGQ1aWw7XFx1NjkxYW9cXHUwMTAwO25cXHUzMGRiXFx1MzBkY1xcdTYyMzZhbFxceGYzXFx1MGYxZVxcdTAxODBhYnJcXHUzMGU3XFx1MzBlYVxcdTMwZWVyXFx4ZjJcXHUxN2U1cms7XFx1Njc3M1xcdTAxMDBha1xcdTMwZjNcXHUzMGZkY1xcdTAxMDBla1xcdTMwZjlcXHUzMGZiO1xcdTQwN2Q7XFx1NDA1ZFxcdTAxMDBlc1xcdTMxMDJcXHUzMTA0O1xcdTY5OGNsXFx1MDEwMGR1XFx1MzEwYVxcdTMxMGM7XFx1Njk4ZTtcXHU2OTkwXFx1MDIwMGFldXlcXHUzMTE3XFx1MzExY1xcdTMxMjdcXHUzMTI5cm9uO1xcdTQxNTlcXHUwMTAwZGlcXHUzMTIxXFx1MzEyNWlsO1xcdTQxNTdcXHhlY1xcdTBmZjJcXHhlMlxcdTMwZmE7XFx1NDQ0MFxcdTAyMDBjbHFzXFx1MzEzNFxcdTMxMzdcXHUzMTNkXFx1MzE0NGE7XFx1NjkzN2RoYXI7XFx1Njk2OXVvXFx1MDEwMDtyXFx1MDIwZVxcdTAyMGRoO1xcdTYxYjNcXHUwMTgwYWNnXFx1MzE0ZVxcdTMxNWZcXHUwZjQ0bFxcdTAyMDA7aXBzXFx1MGY3OFxcdTMxNThcXHUzMTViXFx1MTA5Y25cXHhlNVxcdTEwYmJhclxceGY0XFx1MGZhOXQ7XFx1NjVhZFxcdTAxODBpbHJcXHUzMTY5XFx1MTAyM1xcdTMxNmVzaHQ7XFx1Njk3ZDtcXHVjMDAwXFx1ZDgzNVxcdWRkMmZcXHUwMTAwYW9cXHUzMTc3XFx1MzE4NnJcXHUwMTAwZHVcXHUzMTdkXFx1MzE3ZlxceGJiXFx1MDQ3YlxcdTAxMDA7bFxcdTEwOTFcXHUzMTg0O1xcdTY5NmNcXHUwMTAwO3ZcXHUzMThiXFx1MzE4Y1xcdTQzYzE7XFx1NDNmMVxcdTAxODBnbnNcXHUzMTk1XFx1MzFmOVxcdTMxZmNodFxcdTAzMDBhaGxyc3RcXHUzMWE0XFx1MzFiMFxcdTMxYzJcXHUzMWQ4XFx1MzFlNFxcdTMxZWVycm93XFx1MDEwMDt0XFx1MGZkY1xcdTMxYWRhXFx4ZTlcXHUzMGM4YXJwb29uXFx1MDEwMGR1XFx1MzFiYlxcdTMxYmZvd1xceGVlXFx1MzE3ZXBcXHhiYlxcdTEwOTJlZnRcXHUwMTAwYWhcXHUzMWNhXFx1MzFkMHJyb3dcXHhmM1xcdTBmZWFhcnBvb25cXHhmM1xcdTA1NTFpZ2h0YXJyb3dzO1xcdTYxYzlxdWlnYXJyb1xceGY3XFx1MzBjYmhyZWV0aW1lcztcXHU2MmNjZztcXHU0MmRhaW5nZG90c2VcXHhmMVxcdTFmMzJcXHUwMTgwYWhtXFx1MzIwZFxcdTMyMTBcXHUzMjEzclxceGYyXFx1MGZlYWFcXHhmMlxcdTA1NTE7XFx1NjAwZm91c3RcXHUwMTAwO2FcXHUzMjFlXFx1MzIxZlxcdTYzYjFjaGVcXHhiYlxcdTMyMWZtaWQ7XFx1NmFlZVxcdTAyMDBhYnB0XFx1MzIzMlxcdTMyM2RcXHUzMjQwXFx1MzI1MlxcdTAxMDBuclxcdTMyMzdcXHUzMjNhZztcXHU2N2VkcjtcXHU2MWZlclxceGViXFx1MTAwM1xcdTAxODBhZmxcXHUzMjQ3XFx1MzI0YVxcdTMyNGVyO1xcdTY5ODY7XFx1YzAwMFxcdWQ4MzVcXHVkZDYzdXM7XFx1NmEyZWltZXM7XFx1NmEzNVxcdTAxMDBhcFxcdTMyNWRcXHUzMjY3clxcdTAxMDA7Z1xcdTMyNjNcXHUzMjY0XFx1NDAyOXQ7XFx1Njk5NG9saW50O1xcdTZhMTJhclxceGYyXFx1MzFlM1xcdTAyMDBhY2hxXFx1MzI3YlxcdTMyODBcXHUxMGJjXFx1MzI4NXF1bztcXHU2MDNhcjtcXHVjMDAwXFx1ZDgzNVxcdWRjYzdcXHUwMTAwYnVcXHUzMGZiXFx1MzI4YW9cXHUwMTAwO3JcXHUwMjE0XFx1MDIxM1xcdTAxODBoaXJcXHUzMjk3XFx1MzI5YlxcdTMyYTByZVxceGU1XFx1MzFmOG1lcztcXHU2MmNhaVxcdTAyMDA7ZWZsXFx1MzJhYVxcdTEwNTlcXHUxODIxXFx1MzJhYlxcdTY1Yjl0cmk7XFx1NjljZWx1aGFyO1xcdTY5Njg7XFx1NjExZVxcdTBkNjFcXHUzMmQ1XFx1MzJkYlxcdTMyZGZcXHUzMzJjXFx1MzMzOFxcdTMzNzFcXDBcXHUzMzdhXFx1MzNhNFxcMFxcMFxcdTMzZWNcXHUzM2YwXFwwXFx1MzQyOFxcdTM0NDhcXHUzNDVhXFx1MzRhZFxcdTM0YjFcXHUzNGNhXFx1MzRmMVxcMFxcdTM2MTZcXDBcXDBcXHUzNjMzY3V0ZTtcXHU0MTVicXVcXHhlZlxcdTI3YmFcXHUwNTAwO0VhY2VpbnBzeVxcdTExZWRcXHUzMmYzXFx1MzJmNVxcdTMyZmZcXHUzMzAyXFx1MzMwYlxcdTMzMGZcXHUzMzFmXFx1MzMyNlxcdTMzMjk7XFx1NmFiNFxcdTAxZjBcXHUzMmZhXFwwXFx1MzJmYztcXHU2YWI4b247XFx1NDE2MXVcXHhlNVxcdTExZmVcXHUwMTAwO2RcXHUxMWYzXFx1MzMwN2lsO1xcdTQxNWZyYztcXHU0MTVkXFx1MDE4MEVhc1xcdTMzMTZcXHUzMzE4XFx1MzMxYjtcXHU2YWI2cDtcXHU2YWJhaW07XFx1NjJlOW9saW50O1xcdTZhMTNpXFx4ZWRcXHUxMjA0O1xcdTQ0NDFvdFxcdTAxODA7YmVcXHUzMzM0XFx1MWQ0N1xcdTMzMzVcXHU2MmM1O1xcdTZhNjZcXHUwMzgwQWFjbXN0eFxcdTMzNDZcXHUzMzRhXFx1MzM1N1xcdTMzNWJcXHUzMzVlXFx1MzM2M1xcdTMzNmRycjtcXHU2MWQ4clxcdTAxMDBoclxcdTMzNTBcXHUzMzUyXFx4ZWJcXHUyMjI4XFx1MDEwMDtvXFx1MGEzNlxcdTBhMzR0XFx1ODAzYlxceGE3XFx1NDBhN2k7XFx1NDAzYndhcjtcXHU2OTI5bVxcdTAxMDBpblxcdTMzNjlcXHhmMG51XFx4ZjNcXHhmMXQ7XFx1NjczNnJcXHUwMTAwO29cXHUzMzc2XFx1MjA1NVxcdWMwMDBcXHVkODM1XFx1ZGQzMFxcdTAyMDBhY295XFx1MzM4MlxcdTMzODZcXHUzMzkxXFx1MzNhMHJwO1xcdTY2NmZcXHUwMTAwaHlcXHUzMzhiXFx1MzM4ZmN5O1xcdTQ0NDk7XFx1NDQ0OHJ0XFx1MDI2ZFxcdTMzOTlcXDBcXDBcXHUzMzljaVxceGU0XFx1MTQ2NGFyYVxceGVjXFx1MmU2ZlxcdTgwM2JcXHhhZFxcdTQwYWRcXHUwMTAwZ21cXHUzM2E4XFx1MzNiNG1hXFx1MDE4MDtmdlxcdTMzYjFcXHUzM2IyXFx1MzNiMlxcdTQzYzM7XFx1NDNjMlxcdTA0MDA7ZGVnbG5wclxcdTEyYWJcXHUzM2M1XFx1MzNjOVxcdTMzY2VcXHUzM2Q2XFx1MzNkZVxcdTMzZTFcXHUzM2U2b3Q7XFx1NmE2YVxcdTAxMDA7cVxcdTEyYjFcXHUxMmIwXFx1MDEwMDtFXFx1MzNkM1xcdTMzZDRcXHU2YTllO1xcdTZhYTBcXHUwMTAwO0VcXHUzM2RiXFx1MzNkY1xcdTZhOWQ7XFx1NmE5ZmU7XFx1NjI0Nmx1cztcXHU2YTI0YXJyO1xcdTY5NzJhclxceGYyXFx1MTEzZFxcdTAyMDBhZWl0XFx1MzNmOFxcdTM0MDhcXHUzNDBmXFx1MzQxN1xcdTAxMDBsc1xcdTMzZmRcXHUzNDA0bHNldG1cXHhlOVxcdTMzNmFocDtcXHU2YTMzcGFyc2w7XFx1NjllNFxcdTAxMDBkbFxcdTE0NjNcXHUzNDE0ZTtcXHU2MzIzXFx1MDEwMDtlXFx1MzQxY1xcdTM0MWRcXHU2YWFhXFx1MDEwMDtzXFx1MzQyMlxcdTM0MjNcXHU2YWFjO1xcdWMwMDBcXHUyYWFjXFx1ZmUwMFxcdTAxODBmbHBcXHUzNDJlXFx1MzQzM1xcdTM0NDJ0Y3k7XFx1NDQ0Y1xcdTAxMDA7YlxcdTM0MzhcXHUzNDM5XFx1NDAyZlxcdTAxMDA7YVxcdTM0M2VcXHUzNDNmXFx1NjljNHI7XFx1NjMzZmY7XFx1YzAwMFxcdWQ4MzVcXHVkZDY0YVxcdTAxMDBkclxcdTM0NGRcXHUwNDAyZXNcXHUwMTAwO3VcXHUzNDU0XFx1MzQ1NVxcdTY2NjBpdFxceGJiXFx1MzQ1NVxcdTAxODBjc3VcXHUzNDYwXFx1MzQ3OVxcdTM0OWZcXHUwMTAwYXVcXHUzNDY1XFx1MzQ2ZnBcXHUwMTAwO3NcXHUxMTg4XFx1MzQ2YjtcXHVjMDAwXFx1MjI5M1xcdWZlMDBwXFx1MDEwMDtzXFx1MTFiNFxcdTM0NzU7XFx1YzAwMFxcdTIyOTRcXHVmZTAwdVxcdTAxMDBicFxcdTM0N2ZcXHUzNDhmXFx1MDE4MDtlc1xcdTExOTdcXHUxMTljXFx1MzQ4NmV0XFx1MDEwMDtlXFx1MTE5N1xcdTM0OGRcXHhmMVxcdTExOWRcXHUwMTgwO2VzXFx1MTFhOFxcdTExYWRcXHUzNDk2ZXRcXHUwMTAwO2VcXHUxMWE4XFx1MzQ5ZFxceGYxXFx1MTFhZVxcdTAxODA7YWZcXHUxMTdiXFx1MzRhNlxcdTA1YjByXFx1MDE2NVxcdTM0YWJcXHUwNWIxXFx4YmJcXHUxMTdjYXJcXHhmMlxcdTExNDhcXHUwMjAwY2VtdFxcdTM0YjlcXHUzNGJlXFx1MzRjMlxcdTM0YzVyO1xcdWMwMDBcXHVkODM1XFx1ZGNjOHRtXFx4ZWVcXHhmMWlcXHhlY1xcdTM0MTVhclxceGU2XFx1MTFiZVxcdTAxMDBhclxcdTM0Y2VcXHUzNGQ1clxcdTAxMDA7ZlxcdTM0ZDRcXHUxN2JmXFx1NjYwNlxcdTAxMDBhblxcdTM0ZGFcXHUzNGVkaWdodFxcdTAxMDBlcFxcdTM0ZTNcXHUzNGVhcHNpbG9cXHhlZVxcdTFlZTBoXFx4ZTlcXHUyZWFmc1xceGJiXFx1Mjg1MlxcdTAyODBiY21ucFxcdTM0ZmJcXHUzNTVlXFx1MTIwOVxcdTM1OGJcXHUzNThlXFx1MDQ4MDtFZGVtbnByc1xcdTM1MGVcXHUzNTBmXFx1MzUxMVxcdTM1MTVcXHUzNTFlXFx1MzUyM1xcdTM1MmNcXHUzNTMxXFx1MzUzNlxcdTYyODI7XFx1NmFjNW90O1xcdTZhYmRcXHUwMTAwO2RcXHUxMWRhXFx1MzUxYW90O1xcdTZhYzN1bHQ7XFx1NmFjMVxcdTAxMDBFZVxcdTM1MjhcXHUzNTJhO1xcdTZhY2I7XFx1NjI4YWx1cztcXHU2YWJmYXJyO1xcdTY5NzlcXHUwMTgwZWl1XFx1MzUzZFxcdTM1NTJcXHUzNTU1dFxcdTAxODA7ZW5cXHUzNTBlXFx1MzU0NVxcdTM1NGJxXFx1MDEwMDtxXFx1MTFkYVxcdTM1MGZlcVxcdTAxMDA7cVxcdTM1MmJcXHUzNTI4bTtcXHU2YWM3XFx1MDEwMGJwXFx1MzU1YVxcdTM1NWM7XFx1NmFkNTtcXHU2YWQzY1xcdTAzMDA7YWNlbnNcXHUxMWVkXFx1MzU2Y1xcdTM1NzJcXHUzNTc5XFx1MzU3YlxcdTMzMjZwcHJvXFx4ZjhcXHUzMmZhdXJseWVcXHhmMVxcdTExZmVcXHhmMVxcdTExZjNcXHUwMTgwYWVzXFx1MzU4MlxcdTM1ODhcXHUzMzFicHByb1xceGY4XFx1MzMxYXFcXHhmMVxcdTMzMTdnO1xcdTY2NmFcXHUwNjgwMTIzO0VkZWhsbW5wc1xcdTM1YTlcXHUzNWFjXFx1MzVhZlxcdTEyMWNcXHUzNWIyXFx1MzViNFxcdTM1YzBcXHUzNWM5XFx1MzVkNVxcdTM1ZGFcXHUzNWRmXFx1MzVlOFxcdTM1ZWRcXHU4MDNiXFx4YjlcXHU0MGI5XFx1ODAzYlxceGIyXFx1NDBiMlxcdTgwM2JcXHhiM1xcdTQwYjM7XFx1NmFjNlxcdTAxMDBvc1xcdTM1YjlcXHUzNWJjdDtcXHU2YWJldWI7XFx1NmFkOFxcdTAxMDA7ZFxcdTEyMjJcXHUzNWM1b3Q7XFx1NmFjNHNcXHUwMTAwb3VcXHUzNWNmXFx1MzVkMmw7XFx1NjdjOWI7XFx1NmFkN2FycjtcXHU2OTdidWx0O1xcdTZhYzJcXHUwMTAwRWVcXHUzNWU0XFx1MzVlNjtcXHU2YWNjO1xcdTYyOGJsdXM7XFx1NmFjMFxcdTAxODBlaXVcXHUzNWY0XFx1MzYwOVxcdTM2MGN0XFx1MDE4MDtlblxcdTEyMWNcXHUzNWZjXFx1MzYwMnFcXHUwMTAwO3FcXHUxMjIyXFx1MzViMmVxXFx1MDEwMDtxXFx1MzVlN1xcdTM1ZTRtO1xcdTZhYzhcXHUwMTAwYnBcXHUzNjExXFx1MzYxMztcXHU2YWQ0O1xcdTZhZDZcXHUwMTgwQWFuXFx1MzYxY1xcdTM2MjBcXHUzNjJkcnI7XFx1NjFkOXJcXHUwMTAwaHJcXHUzNjI2XFx1MzYyOFxceGViXFx1MjIyZVxcdTAxMDA7b1xcdTBhMmJcXHUwYTI5d2FyO1xcdTY5MmFsaWdcXHU4MDNiXFx4ZGZcXHU0MGRmXFx1MGJlMVxcdTM2NTFcXHUzNjVkXFx1MzY2MFxcdTEyY2VcXHUzNjczXFx1MzY3OVxcMFxcdTM2N2VcXHUzNmMyXFwwXFwwXFwwXFwwXFwwXFx1MzZkYlxcdTM3MDNcXDBcXHUzNzA5XFx1Mzc2Y1xcMFxcMFxcMFxcdTM3ODdcXHUwMjcyXFx1MzY1NlxcMFxcMFxcdTM2NWJnZXQ7XFx1NjMxNjtcXHU0M2M0clxceGViXFx1MGU1ZlxcdTAxODBhZXlcXHUzNjY2XFx1MzY2YlxcdTM2NzByb247XFx1NDE2NWRpbDtcXHU0MTYzO1xcdTQ0NDJscmVjO1xcdTYzMTVyO1xcdWMwMDBcXHVkODM1XFx1ZGQzMVxcdTAyMDBlaWtvXFx1MzY4NlxcdTM2OWRcXHUzNmI1XFx1MzZiY1xcdTAxZjJcXHUzNjhiXFwwXFx1MzY5MWVcXHUwMTAwNGZcXHUxMjg0XFx1MTI4MWFcXHUwMTgwO3N2XFx1MzY5OFxcdTM2OTlcXHUzNjliXFx1NDNiOHltO1xcdTQzZDFcXHUwMTAwY25cXHUzNmEyXFx1MzZiMmtcXHUwMTAwYXNcXHUzNmE4XFx1MzZhZXBwcm9cXHhmOFxcdTEyYzFpbVxceGJiXFx1MTJhY3NcXHhmMFxcdTEyOWVcXHUwMTAwYXNcXHUzNmJhXFx1MzZhZVxceGYwXFx1MTJjMXJuXFx1ODAzYlxceGZlXFx1NDBmZVxcdTAxZWNcXHUwMzFmXFx1MzZjNlxcdTIyZTdlc1xcdTgxODBcXHhkNztiZFxcdTM2Y2ZcXHUzNmQwXFx1MzZkOFxcdTQwZDdcXHUwMTAwO2FcXHUxOTBmXFx1MzZkNXI7XFx1NmEzMTtcXHU2YTMwXFx1MDE4MGVwc1xcdTM2ZTFcXHUzNmUzXFx1MzcwMFxceGUxXFx1MmE0ZFxcdTAyMDA7YmNmXFx1MDQ4NlxcdTM2ZWNcXHUzNmYwXFx1MzZmNG90O1xcdTYzMzZpcjtcXHU2YWYxXFx1MDEwMDtvXFx1MzZmOVxcdTM2ZmNcXHVjMDAwXFx1ZDgzNVxcdWRkNjVyaztcXHU2YWRhXFx4ZTFcXHUzMzYycmltZTtcXHU2MDM0XFx1MDE4MGFpcFxcdTM3MGZcXHUzNzEyXFx1Mzc2NGRcXHhlNVxcdTEyNDhcXHUwMzgwYWRlbXBzdFxcdTM3MjFcXHUzNzRkXFx1Mzc0MFxcdTM3NTFcXHUzNzU3XFx1Mzc1Y1xcdTM3NWZuZ2xlXFx1MDI4MDtkbHFyXFx1MzczMFxcdTM3MzFcXHUzNzM2XFx1Mzc0MFxcdTM3NDJcXHU2NWI1b3duXFx4YmJcXHUxZGJiZWZ0XFx1MDEwMDtlXFx1MjgwMFxcdTM3M2VcXHhmMVxcdTA5MmU7XFx1NjI1Y2lnaHRcXHUwMTAwO2VcXHUzMmFhXFx1Mzc0YlxceGYxXFx1MTA1YW90O1xcdTY1ZWNpbnVzO1xcdTZhM2FsdXM7XFx1NmEzOWI7XFx1NjljZGltZTtcXHU2YTNiZXppdW07XFx1NjNlMlxcdTAxODBjaHRcXHUzNzcyXFx1Mzc3ZFxcdTM3ODFcXHUwMTAwcnlcXHUzNzc3XFx1Mzc3YjtcXHVjMDAwXFx1ZDgzNVxcdWRjYzk7XFx1NDQ0NmN5O1xcdTQ0NWJyb2s7XFx1NDE2N1xcdTAxMDBpb1xcdTM3OGJcXHUzNzhleFxceGY0XFx1MTc3N2hlYWRcXHUwMTAwbHJcXHUzNzk3XFx1MzdhMGVmdGFycm9cXHhmN1xcdTA4NGZpZ2h0YXJyb3dcXHhiYlxcdTBmNWRcXHUwOTAwQUhhYmNkZmdobG1vcHJzdHV3XFx1MzdkMFxcdTM3ZDNcXHUzN2Q3XFx1MzdlNFxcdTM3ZjBcXHUzN2ZjXFx1MzgwZVxcdTM4MWNcXHUzODIzXFx1MzgzNFxcdTM4NTFcXHUzODVkXFx1Mzg2YlxcdTM4YTlcXHUzOGNjXFx1MzhkMlxcdTM4ZWFcXHUzOGY2clxceGYyXFx1MDNlZGFyO1xcdTY5NjNcXHUwMTAwY3JcXHUzN2RjXFx1MzdlMnV0ZVxcdTgwM2JcXHhmYVxcdTQwZmFcXHhmMlxcdTExNTByXFx1MDFlM1xcdTM3ZWFcXDBcXHUzN2VkeTtcXHU0NDVldmU7XFx1NDE2ZFxcdTAxMDBpeVxcdTM3ZjVcXHUzN2ZhcmNcXHU4MDNiXFx4ZmJcXHU0MGZiO1xcdTQ0NDNcXHUwMTgwYWJoXFx1MzgwM1xcdTM4MDZcXHUzODBiclxceGYyXFx1MTNhZGxhYztcXHU0MTcxYVxceGYyXFx1MTNjM1xcdTAxMDBpclxcdTM4MTNcXHUzODE4c2h0O1xcdTY5N2U7XFx1YzAwMFxcdWQ4MzVcXHVkZDMycmF2ZVxcdTgwM2JcXHhmOVxcdTQwZjlcXHUwMTYxXFx1MzgyN1xcdTM4MzFyXFx1MDEwMGxyXFx1MzgyY1xcdTM4MmVcXHhiYlxcdTA5NTdcXHhiYlxcdTEwODNsaztcXHU2NTgwXFx1MDEwMGN0XFx1MzgzOVxcdTM4NGRcXHUwMjZmXFx1MzgzZlxcMFxcMFxcdTM4NGFyblxcdTAxMDA7ZVxcdTM4NDVcXHUzODQ2XFx1NjMxY3JcXHhiYlxcdTM4NDZvcDtcXHU2MzBmcmk7XFx1NjVmOFxcdTAxMDBhbFxcdTM4NTZcXHUzODVhY3I7XFx1NDE2YlxcdTgwYmJcXHhhOFxcdTAzNDlcXHUwMTAwZ3BcXHUzODYyXFx1Mzg2Nm9uO1xcdTQxNzNmO1xcdWMwMDBcXHVkODM1XFx1ZGQ2NlxcdTAzMDBhZGhsc3VcXHUxMTRiXFx1Mzg3OFxcdTM4N2RcXHUxMzcyXFx1Mzg5MVxcdTM4YTBvd25cXHhlMVxcdTEzYjNhcnBvb25cXHUwMTAwbHJcXHUzODg4XFx1Mzg4Y2VmXFx4ZjRcXHUzODJkaWdoXFx4ZjRcXHUzODJmaVxcdTAxODA7aGxcXHUzODk5XFx1Mzg5YVxcdTM4OWNcXHU0M2M1XFx4YmJcXHUxM2Zhb25cXHhiYlxcdTM4OWFwYXJyb3dzO1xcdTYxYzhcXHUwMTgwY2l0XFx1MzhiMFxcdTM4YzRcXHUzOGM4XFx1MDI2ZlxcdTM4YjZcXDBcXDBcXHUzOGMxcm5cXHUwMTAwO2VcXHUzOGJjXFx1MzhiZFxcdTYzMWRyXFx4YmJcXHUzOGJkb3A7XFx1NjMwZW5nO1xcdTQxNmZyaTtcXHU2NWY5Y3I7XFx1YzAwMFxcdWQ4MzVcXHVkY2NhXFx1MDE4MGRpclxcdTM4ZDlcXHUzOGRkXFx1MzhlMm90O1xcdTYyZjBsZGU7XFx1NDE2OWlcXHUwMTAwO2ZcXHUzNzMwXFx1MzhlOFxceGJiXFx1MTgxM1xcdTAxMDBhbVxcdTM4ZWZcXHUzOGYyclxceGYyXFx1MzhhOGxcXHU4MDNiXFx4ZmNcXHU0MGZjYW5nbGU7XFx1NjlhN1xcdTA3ODBBQkRhY2RlZmxub3Byc3pcXHUzOTFjXFx1MzkxZlxcdTM5MjlcXHUzOTJkXFx1MzliNVxcdTM5YjhcXHUzOWJkXFx1MzlkZlxcdTM5ZTRcXHUzOWU4XFx1MzlmM1xcdTM5ZjlcXHUzOWZkXFx1M2EwMVxcdTNhMjByXFx4ZjJcXHUwM2Y3YXJcXHUwMTAwO3ZcXHUzOTI2XFx1MzkyN1xcdTZhZTg7XFx1NmFlOWFzXFx4ZThcXHUwM2UxXFx1MDEwMG5yXFx1MzkzMlxcdTM5MzdncnQ7XFx1Njk5Y1xcdTAzODBla25wcnN0XFx1MzRlM1xcdTM5NDZcXHUzOTRiXFx1Mzk1MlxcdTM5NWRcXHUzOTY0XFx1Mzk5NmFwcFxceGUxXFx1MjQxNW90aGluXFx4ZTdcXHUxZTk2XFx1MDE4MGhpclxcdTM0ZWJcXHUyZWM4XFx1Mzk1OW9wXFx4ZjRcXHUyZmI1XFx1MDEwMDtoXFx1MTNiN1xcdTM5NjJcXHhlZlxcdTMxOGRcXHUwMTAwaXVcXHUzOTY5XFx1Mzk2ZGdtXFx4ZTFcXHUzM2IzXFx1MDEwMGJwXFx1Mzk3MlxcdTM5ODRzZXRuZXFcXHUwMTAwO3FcXHUzOTdkXFx1Mzk4MFxcdWMwMDBcXHUyMjhhXFx1ZmUwMDtcXHVjMDAwXFx1MmFjYlxcdWZlMDBzZXRuZXFcXHUwMTAwO3FcXHUzOThmXFx1Mzk5MlxcdWMwMDBcXHUyMjhiXFx1ZmUwMDtcXHVjMDAwXFx1MmFjY1xcdWZlMDBcXHUwMTAwaHJcXHUzOTliXFx1Mzk5ZmV0XFx4ZTFcXHUzNjljaWFuZ2xlXFx1MDEwMGxyXFx1MzlhYVxcdTM5YWZlZnRcXHhiYlxcdTA5MjVpZ2h0XFx4YmJcXHUxMDUxeTtcXHU0NDMyYXNoXFx4YmJcXHUxMDM2XFx1MDE4MGVsclxcdTM5YzRcXHUzOWQyXFx1MzlkN1xcdTAxODA7YmVcXHUyZGVhXFx1MzljYlxcdTM5Y2ZhcjtcXHU2MmJicTtcXHU2MjVhbGlwO1xcdTYyZWVcXHUwMTAwYnRcXHUzOWRjXFx1MTQ2OGFcXHhmMlxcdTE0NjlyO1xcdWMwMDBcXHVkODM1XFx1ZGQzM3RyXFx4ZTlcXHUzOWFlc3VcXHUwMTAwYnBcXHUzOWVmXFx1MzlmMVxceGJiXFx1MGQxY1xceGJiXFx1MGQ1OXBmO1xcdWMwMDBcXHVkODM1XFx1ZGQ2N3JvXFx4ZjBcXHUwZWZidHJcXHhlOVxcdTM5YjRcXHUwMTAwY3VcXHUzYTA2XFx1M2EwYnI7XFx1YzAwMFxcdWQ4MzVcXHVkY2NiXFx1MDEwMGJwXFx1M2ExMFxcdTNhMThuXFx1MDEwMEVlXFx1Mzk4MFxcdTNhMTZcXHhiYlxcdTM5N2VuXFx1MDEwMEVlXFx1Mzk5MlxcdTNhMWVcXHhiYlxcdTM5OTBpZ3phZztcXHU2OTlhXFx1MDM4MGNlZm9wcnNcXHUzYTM2XFx1M2EzYlxcdTNhNTZcXHUzYTViXFx1M2E1NFxcdTNhNjFcXHUzYTZhaXJjO1xcdTQxNzVcXHUwMTAwZGlcXHUzYTQwXFx1M2E1MVxcdTAxMDBiZ1xcdTNhNDVcXHUzYTQ5YXI7XFx1NmE1ZmVcXHUwMTAwO3FcXHUxNWZhXFx1M2E0ZjtcXHU2MjU5ZXJwO1xcdTYxMThyO1xcdWMwMDBcXHVkODM1XFx1ZGQzNHBmO1xcdWMwMDBcXHVkODM1XFx1ZGQ2OFxcdTAxMDA7ZVxcdTE0NzlcXHUzYTY2YXRcXHhlOFxcdTE0NzljcjtcXHVjMDAwXFx1ZDgzNVxcdWRjY2NcXHUwYWUzXFx1MTc4ZVxcdTNhODdcXDBcXHUzYThiXFwwXFx1M2E5MFxcdTNhOWJcXDBcXDBcXHUzYTlkXFx1M2FhOFxcdTNhYWJcXHUzYWFmXFwwXFwwXFx1M2FjM1xcdTNhY2VcXDBcXHUzYWQ4XFx1MTdkY1xcdTE3ZGZ0clxceGU5XFx1MTdkMXI7XFx1YzAwMFxcdWQ4MzVcXHVkZDM1XFx1MDEwMEFhXFx1M2E5NFxcdTNhOTdyXFx4ZjJcXHUwM2MzclxceGYyXFx1MDlmNjtcXHU0M2JlXFx1MDEwMEFhXFx1M2FhMVxcdTNhYTRyXFx4ZjJcXHUwM2I4clxceGYyXFx1MDllYmFcXHhmMFxcdTI3MTNpcztcXHU2MmZiXFx1MDE4MGRwdFxcdTE3YTRcXHUzYWI1XFx1M2FiZVxcdTAxMDBmbFxcdTNhYmFcXHUxN2E5O1xcdWMwMDBcXHVkODM1XFx1ZGQ2OWltXFx4ZTVcXHUxN2IyXFx1MDEwMEFhXFx1M2FjN1xcdTNhY2FyXFx4ZjJcXHUwM2NlclxceGYyXFx1MGEwMVxcdTAxMDBjcVxcdTNhZDJcXHUxN2I4cjtcXHVjMDAwXFx1ZDgzNVxcdWRjY2RcXHUwMTAwcHRcXHUxN2Q2XFx1M2FkY3JcXHhlOVxcdTE3ZDRcXHUwNDAwYWNlZmlvc3VcXHUzYWYwXFx1M2FmZFxcdTNiMDhcXHUzYjBjXFx1M2IxMVxcdTNiMTVcXHUzYjFiXFx1M2IyMWNcXHUwMTAwdXlcXHUzYWY2XFx1M2FmYnRlXFx1ODAzYlxceGZkXFx1NDBmZDtcXHU0NDRmXFx1MDEwMGl5XFx1M2IwMlxcdTNiMDZyYztcXHU0MTc3O1xcdTQ0NGJuXFx1ODAzYlxceGE1XFx1NDBhNXI7XFx1YzAwMFxcdWQ4MzVcXHVkZDM2Y3k7XFx1NDQ1N3BmO1xcdWMwMDBcXHVkODM1XFx1ZGQ2YWNyO1xcdWMwMDBcXHVkODM1XFx1ZGNjZVxcdTAxMDBjbVxcdTNiMjZcXHUzYjI5eTtcXHU0NDRlbFxcdTgwM2JcXHhmZlxcdTQwZmZcXHUwNTAwYWNkZWZoaW9zd1xcdTNiNDJcXHUzYjQ4XFx1M2I1NFxcdTNiNThcXHUzYjY0XFx1M2I2OVxcdTNiNmRcXHUzYjc0XFx1M2I3YVxcdTNiODBjdXRlO1xcdTQxN2FcXHUwMTAwYXlcXHUzYjRkXFx1M2I1MnJvbjtcXHU0MTdlO1xcdTQ0MzdvdDtcXHU0MTdjXFx1MDEwMGV0XFx1M2I1ZFxcdTNiNjF0clxceGU2XFx1MTU1ZmE7XFx1NDNiNnI7XFx1YzAwMFxcdWQ4MzVcXHVkZDM3Y3k7XFx1NDQzNmdyYXJyO1xcdTYxZGRwZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNmJjcjtcXHVjMDAwXFx1ZDgzNVxcdWRjY2ZcXHUwMTAwam5cXHUzYjg1XFx1M2I4NztcXHU2MDBkajtcXHU2MDBjXCJcbiAgICAuc3BsaXQoXCJcIilcbiAgICAubWFwKChjKSA9PiBjLmNoYXJDb2RlQXQoMCkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlY29kZS1kYXRhLWh0bWwuanMubWFwIiwiLy8gR2VuZXJhdGVkIHVzaW5nIHNjcmlwdHMvd3JpdGUtZGVjb2RlLW1hcC50c1xuZXhwb3J0IGRlZmF1bHQgbmV3IFVpbnQxNkFycmF5KFxuLy8gcHJldHRpZXItaWdub3JlXG5cIlxcdTAyMDBhZ2xxXFx0XFx4MTVcXHgxOFxceDFiXFx1MDI2ZFxceDBmXFwwXFwwXFx4MTJwO1xcdTQwMjZvcztcXHU0MDI3dDtcXHU0MDNldDtcXHU0MDNjdW90O1xcdTQwMjJcIlxuICAgIC5zcGxpdChcIlwiKVxuICAgIC5tYXAoKGMpID0+IGMuY2hhckNvZGVBdCgwKSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVjb2RlLWRhdGEteG1sLmpzLm1hcCIsIi8vIEFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9oZS9ibG9iLzM2YWZlMTc5MzkyMjI2Y2YxYjZjY2RiMTZlYmJiN2E1YTg0NGQ5M2Evc3JjL2hlLmpzI0wxMDYtTDEzNFxudmFyIF9hO1xuY29uc3QgZGVjb2RlTWFwID0gbmV3IE1hcChbXG4gICAgWzAsIDY1NTMzXSxcbiAgICAvLyBDMSBVbmljb2RlIGNvbnRyb2wgY2hhcmFjdGVyIHJlZmVyZW5jZSByZXBsYWNlbWVudHNcbiAgICBbMTI4LCA4MzY0XSxcbiAgICBbMTMwLCA4MjE4XSxcbiAgICBbMTMxLCA0MDJdLFxuICAgIFsxMzIsIDgyMjJdLFxuICAgIFsxMzMsIDgyMzBdLFxuICAgIFsxMzQsIDgyMjRdLFxuICAgIFsxMzUsIDgyMjVdLFxuICAgIFsxMzYsIDcxMF0sXG4gICAgWzEzNywgODI0MF0sXG4gICAgWzEzOCwgMzUyXSxcbiAgICBbMTM5LCA4MjQ5XSxcbiAgICBbMTQwLCAzMzhdLFxuICAgIFsxNDIsIDM4MV0sXG4gICAgWzE0NSwgODIxNl0sXG4gICAgWzE0NiwgODIxN10sXG4gICAgWzE0NywgODIyMF0sXG4gICAgWzE0OCwgODIyMV0sXG4gICAgWzE0OSwgODIyNl0sXG4gICAgWzE1MCwgODIxMV0sXG4gICAgWzE1MSwgODIxMl0sXG4gICAgWzE1MiwgNzMyXSxcbiAgICBbMTUzLCA4NDgyXSxcbiAgICBbMTU0LCAzNTNdLFxuICAgIFsxNTUsIDgyNTBdLFxuICAgIFsxNTYsIDMzOV0sXG4gICAgWzE1OCwgMzgyXSxcbiAgICBbMTU5LCAzNzZdLFxuXSk7XG4vKipcbiAqIFBvbHlmaWxsIGZvciBgU3RyaW5nLmZyb21Db2RlUG9pbnRgLiBJdCBpcyB1c2VkIHRvIGNyZWF0ZSBhIHN0cmluZyBmcm9tIGEgVW5pY29kZSBjb2RlIHBvaW50LlxuICovXG5leHBvcnQgY29uc3QgZnJvbUNvZGVQb2ludCA9IFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bm5lY2Vzc2FyeS1jb25kaXRpb24sIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvZXMtYnVpbHRpbnNcbihfYSA9IFN0cmluZy5mcm9tQ29kZVBvaW50KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmdW5jdGlvbiAoY29kZVBvaW50KSB7XG4gICAgbGV0IG91dHB1dCA9IFwiXCI7XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4ZmZmZikge1xuICAgICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMDtcbiAgICAgICAgb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4+IDEwKSAmIDB4M2ZmKSB8IDB4ZDgwMCk7XG4gICAgICAgIGNvZGVQb2ludCA9IDB4ZGMwMCB8IChjb2RlUG9pbnQgJiAweDNmZik7XG4gICAgfVxuICAgIG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7XG4gICAgcmV0dXJuIG91dHB1dDtcbn07XG4vKipcbiAqIFJlcGxhY2UgdGhlIGdpdmVuIGNvZGUgcG9pbnQgd2l0aCBhIHJlcGxhY2VtZW50IGNoYXJhY3RlciBpZiBpdCBpcyBhXG4gKiBzdXJyb2dhdGUgb3IgaXMgb3V0c2lkZSB0aGUgdmFsaWQgcmFuZ2UuIE90aGVyd2lzZSByZXR1cm4gdGhlIGNvZGVcbiAqIHBvaW50IHVuY2hhbmdlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VDb2RlUG9pbnQoY29kZVBvaW50KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmICgoY29kZVBvaW50ID49IDB4ZDgwMCAmJiBjb2RlUG9pbnQgPD0gMHhkZmZmKSB8fCBjb2RlUG9pbnQgPiAweDEwZmZmZikge1xuICAgICAgICByZXR1cm4gMHhmZmZkO1xuICAgIH1cbiAgICByZXR1cm4gKF9hID0gZGVjb2RlTWFwLmdldChjb2RlUG9pbnQpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBjb2RlUG9pbnQ7XG59XG4vKipcbiAqIFJlcGxhY2UgdGhlIGNvZGUgcG9pbnQgaWYgcmVsZXZhbnQsIHRoZW4gY29udmVydCBpdCB0byBhIHN0cmluZy5cbiAqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYGZyb21Db2RlUG9pbnQocmVwbGFjZUNvZGVQb2ludChjb2RlUG9pbnQpKWAgaW5zdGVhZC5cbiAqIEBwYXJhbSBjb2RlUG9pbnQgVGhlIGNvZGUgcG9pbnQgdG8gZGVjb2RlLlxuICogQHJldHVybnMgVGhlIGRlY29kZWQgY29kZSBwb2ludC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50KGNvZGVQb2ludCkge1xuICAgIHJldHVybiBmcm9tQ29kZVBvaW50KHJlcGxhY2VDb2RlUG9pbnQoY29kZVBvaW50KSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWNvZGVfY29kZXBvaW50LmpzLm1hcCIsImltcG9ydCBodG1sRGVjb2RlVHJlZSBmcm9tIFwiLi9nZW5lcmF0ZWQvZGVjb2RlLWRhdGEtaHRtbC5qc1wiO1xuaW1wb3J0IHhtbERlY29kZVRyZWUgZnJvbSBcIi4vZ2VuZXJhdGVkL2RlY29kZS1kYXRhLXhtbC5qc1wiO1xuaW1wb3J0IGRlY29kZUNvZGVQb2ludCwgeyByZXBsYWNlQ29kZVBvaW50LCBmcm9tQ29kZVBvaW50LCB9IGZyb20gXCIuL2RlY29kZV9jb2RlcG9pbnQuanNcIjtcbi8vIFJlLWV4cG9ydCBmb3IgdXNlIGJ5IGVnLiBodG1scGFyc2VyMlxuZXhwb3J0IHsgaHRtbERlY29kZVRyZWUsIHhtbERlY29kZVRyZWUsIGRlY29kZUNvZGVQb2ludCB9O1xuZXhwb3J0IHsgcmVwbGFjZUNvZGVQb2ludCwgZnJvbUNvZGVQb2ludCB9IGZyb20gXCIuL2RlY29kZV9jb2RlcG9pbnQuanNcIjtcbnZhciBDaGFyQ29kZXM7XG4oZnVuY3Rpb24gKENoYXJDb2Rlcykge1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJOVU1cIl0gPSAzNV0gPSBcIk5VTVwiO1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJTRU1JXCJdID0gNTldID0gXCJTRU1JXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIkVRVUFMU1wiXSA9IDYxXSA9IFwiRVFVQUxTXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIlpFUk9cIl0gPSA0OF0gPSBcIlpFUk9cIjtcbiAgICBDaGFyQ29kZXNbQ2hhckNvZGVzW1wiTklORVwiXSA9IDU3XSA9IFwiTklORVwiO1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJMT1dFUl9BXCJdID0gOTddID0gXCJMT1dFUl9BXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIkxPV0VSX0ZcIl0gPSAxMDJdID0gXCJMT1dFUl9GXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIkxPV0VSX1hcIl0gPSAxMjBdID0gXCJMT1dFUl9YXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIkxPV0VSX1pcIl0gPSAxMjJdID0gXCJMT1dFUl9aXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIlVQUEVSX0FcIl0gPSA2NV0gPSBcIlVQUEVSX0FcIjtcbiAgICBDaGFyQ29kZXNbQ2hhckNvZGVzW1wiVVBQRVJfRlwiXSA9IDcwXSA9IFwiVVBQRVJfRlwiO1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJVUFBFUl9aXCJdID0gOTBdID0gXCJVUFBFUl9aXCI7XG59KShDaGFyQ29kZXMgfHwgKENoYXJDb2RlcyA9IHt9KSk7XG4vKiogQml0IHRoYXQgbmVlZHMgdG8gYmUgc2V0IHRvIGNvbnZlcnQgYW4gdXBwZXIgY2FzZSBBU0NJSSBjaGFyYWN0ZXIgdG8gbG93ZXIgY2FzZSAqL1xuY29uc3QgVE9fTE9XRVJfQklUID0gMGIxMDAwMDA7XG5leHBvcnQgdmFyIEJpblRyaWVGbGFncztcbihmdW5jdGlvbiAoQmluVHJpZUZsYWdzKSB7XG4gICAgQmluVHJpZUZsYWdzW0JpblRyaWVGbGFnc1tcIlZBTFVFX0xFTkdUSFwiXSA9IDQ5MTUyXSA9IFwiVkFMVUVfTEVOR1RIXCI7XG4gICAgQmluVHJpZUZsYWdzW0JpblRyaWVGbGFnc1tcIkJSQU5DSF9MRU5HVEhcIl0gPSAxNjI1Nl0gPSBcIkJSQU5DSF9MRU5HVEhcIjtcbiAgICBCaW5UcmllRmxhZ3NbQmluVHJpZUZsYWdzW1wiSlVNUF9UQUJMRVwiXSA9IDEyN10gPSBcIkpVTVBfVEFCTEVcIjtcbn0pKEJpblRyaWVGbGFncyB8fCAoQmluVHJpZUZsYWdzID0ge30pKTtcbmZ1bmN0aW9uIGlzTnVtYmVyKGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSA+PSBDaGFyQ29kZXMuWkVSTyAmJiBjb2RlIDw9IENoYXJDb2Rlcy5OSU5FO1xufVxuZnVuY3Rpb24gaXNIZXhhZGVjaW1hbENoYXJhY3Rlcihjb2RlKSB7XG4gICAgcmV0dXJuICgoY29kZSA+PSBDaGFyQ29kZXMuVVBQRVJfQSAmJiBjb2RlIDw9IENoYXJDb2Rlcy5VUFBFUl9GKSB8fFxuICAgICAgICAoY29kZSA+PSBDaGFyQ29kZXMuTE9XRVJfQSAmJiBjb2RlIDw9IENoYXJDb2Rlcy5MT1dFUl9GKSk7XG59XG5mdW5jdGlvbiBpc0FzY2lpQWxwaGFOdW1lcmljKGNvZGUpIHtcbiAgICByZXR1cm4gKChjb2RlID49IENoYXJDb2Rlcy5VUFBFUl9BICYmIGNvZGUgPD0gQ2hhckNvZGVzLlVQUEVSX1opIHx8XG4gICAgICAgIChjb2RlID49IENoYXJDb2Rlcy5MT1dFUl9BICYmIGNvZGUgPD0gQ2hhckNvZGVzLkxPV0VSX1opIHx8XG4gICAgICAgIGlzTnVtYmVyKGNvZGUpKTtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgaXMgYSB2YWxpZCBlbmQgY2hhcmFjdGVyIGZvciBhbiBlbnRpdHkgaW4gYW4gYXR0cmlidXRlLlxuICpcbiAqIEF0dHJpYnV0ZSB2YWx1ZXMgdGhhdCBhcmVuJ3QgdGVybWluYXRlZCBwcm9wZXJseSBhcmVuJ3QgcGFyc2VkLCBhbmQgc2hvdWxkbid0IGxlYWQgdG8gYSBwYXJzZXIgZXJyb3IuXG4gKiBTZWUgdGhlIGV4YW1wbGUgaW4gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvcGFyc2luZy5odG1sI25hbWVkLWNoYXJhY3Rlci1yZWZlcmVuY2Utc3RhdGVcbiAqL1xuZnVuY3Rpb24gaXNFbnRpdHlJbkF0dHJpYnV0ZUludmFsaWRFbmQoY29kZSkge1xuICAgIHJldHVybiBjb2RlID09PSBDaGFyQ29kZXMuRVFVQUxTIHx8IGlzQXNjaWlBbHBoYU51bWVyaWMoY29kZSk7XG59XG52YXIgRW50aXR5RGVjb2RlclN0YXRlO1xuKGZ1bmN0aW9uIChFbnRpdHlEZWNvZGVyU3RhdGUpIHtcbiAgICBFbnRpdHlEZWNvZGVyU3RhdGVbRW50aXR5RGVjb2RlclN0YXRlW1wiRW50aXR5U3RhcnRcIl0gPSAwXSA9IFwiRW50aXR5U3RhcnRcIjtcbiAgICBFbnRpdHlEZWNvZGVyU3RhdGVbRW50aXR5RGVjb2RlclN0YXRlW1wiTnVtZXJpY1N0YXJ0XCJdID0gMV0gPSBcIk51bWVyaWNTdGFydFwiO1xuICAgIEVudGl0eURlY29kZXJTdGF0ZVtFbnRpdHlEZWNvZGVyU3RhdGVbXCJOdW1lcmljRGVjaW1hbFwiXSA9IDJdID0gXCJOdW1lcmljRGVjaW1hbFwiO1xuICAgIEVudGl0eURlY29kZXJTdGF0ZVtFbnRpdHlEZWNvZGVyU3RhdGVbXCJOdW1lcmljSGV4XCJdID0gM10gPSBcIk51bWVyaWNIZXhcIjtcbiAgICBFbnRpdHlEZWNvZGVyU3RhdGVbRW50aXR5RGVjb2RlclN0YXRlW1wiTmFtZWRFbnRpdHlcIl0gPSA0XSA9IFwiTmFtZWRFbnRpdHlcIjtcbn0pKEVudGl0eURlY29kZXJTdGF0ZSB8fCAoRW50aXR5RGVjb2RlclN0YXRlID0ge30pKTtcbmV4cG9ydCB2YXIgRGVjb2RpbmdNb2RlO1xuKGZ1bmN0aW9uIChEZWNvZGluZ01vZGUpIHtcbiAgICAvKiogRW50aXRpZXMgaW4gdGV4dCBub2RlcyB0aGF0IGNhbiBlbmQgd2l0aCBhbnkgY2hhcmFjdGVyLiAqL1xuICAgIERlY29kaW5nTW9kZVtEZWNvZGluZ01vZGVbXCJMZWdhY3lcIl0gPSAwXSA9IFwiTGVnYWN5XCI7XG4gICAgLyoqIE9ubHkgYWxsb3cgZW50aXRpZXMgdGVybWluYXRlZCB3aXRoIGEgc2VtaWNvbG9uLiAqL1xuICAgIERlY29kaW5nTW9kZVtEZWNvZGluZ01vZGVbXCJTdHJpY3RcIl0gPSAxXSA9IFwiU3RyaWN0XCI7XG4gICAgLyoqIEVudGl0aWVzIGluIGF0dHJpYnV0ZXMgaGF2ZSBsaW1pdGF0aW9ucyBvbiBlbmRpbmcgY2hhcmFjdGVycy4gKi9cbiAgICBEZWNvZGluZ01vZGVbRGVjb2RpbmdNb2RlW1wiQXR0cmlidXRlXCJdID0gMl0gPSBcIkF0dHJpYnV0ZVwiO1xufSkoRGVjb2RpbmdNb2RlIHx8IChEZWNvZGluZ01vZGUgPSB7fSkpO1xuLyoqXG4gKiBUb2tlbiBkZWNvZGVyIHdpdGggc3VwcG9ydCBvZiB3cml0aW5nIHBhcnRpYWwgZW50aXRpZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBFbnRpdHlEZWNvZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAvKiogVGhlIHRyZWUgdXNlZCB0byBkZWNvZGUgZW50aXRpZXMuICovXG4gICAgZGVjb2RlVHJlZSwgXG4gICAgLyoqXG4gICAgICogVGhlIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBjb2RlcG9pbnQgaXMgZGVjb2RlZC5cbiAgICAgKlxuICAgICAqIEZvciBtdWx0aS1ieXRlIG5hbWVkIGVudGl0aWVzLCB0aGlzIHdpbGwgYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzLFxuICAgICAqIHdpdGggdGhlIHNlY29uZCBjb2RlcG9pbnQsIGFuZCB0aGUgc2FtZSBgY29uc3VtZWRgIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvZGVwb2ludCBUaGUgZGVjb2RlZCBjb2RlcG9pbnQuXG4gICAgICogQHBhcmFtIGNvbnN1bWVkIFRoZSBudW1iZXIgb2YgYnl0ZXMgY29uc3VtZWQgYnkgdGhlIGRlY29kZXIuXG4gICAgICovXG4gICAgZW1pdENvZGVQb2ludCwgXG4gICAgLyoqIEFuIG9iamVjdCB0aGF0IGlzIHVzZWQgdG8gcHJvZHVjZSBlcnJvcnMuICovXG4gICAgZXJyb3JzKSB7XG4gICAgICAgIHRoaXMuZGVjb2RlVHJlZSA9IGRlY29kZVRyZWU7XG4gICAgICAgIHRoaXMuZW1pdENvZGVQb2ludCA9IGVtaXRDb2RlUG9pbnQ7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICAvKiogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGRlY29kZXIuICovXG4gICAgICAgIHRoaXMuc3RhdGUgPSBFbnRpdHlEZWNvZGVyU3RhdGUuRW50aXR5U3RhcnQ7XG4gICAgICAgIC8qKiBDaGFyYWN0ZXJzIHRoYXQgd2VyZSBjb25zdW1lZCB3aGlsZSBwYXJzaW5nIGFuIGVudGl0eS4gKi9cbiAgICAgICAgdGhpcy5jb25zdW1lZCA9IDE7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcmVzdWx0IG9mIHRoZSBlbnRpdHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEVpdGhlciB0aGUgcmVzdWx0IGluZGV4IG9mIGEgbnVtZXJpYyBlbnRpdHksIG9yIHRoZSBjb2RlcG9pbnQgb2YgYVxuICAgICAgICAgKiBudW1lcmljIGVudGl0eS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVzdWx0ID0gMDtcbiAgICAgICAgLyoqIFRoZSBjdXJyZW50IGluZGV4IGluIHRoZSBkZWNvZGUgdHJlZS4gKi9cbiAgICAgICAgdGhpcy50cmVlSW5kZXggPSAwO1xuICAgICAgICAvKiogVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgd2VyZSBjb25zdW1lZCBpbiBleGNlc3MuICovXG4gICAgICAgIHRoaXMuZXhjZXNzID0gMTtcbiAgICAgICAgLyoqIFRoZSBtb2RlIGluIHdoaWNoIHRoZSBkZWNvZGVyIGlzIG9wZXJhdGluZy4gKi9cbiAgICAgICAgdGhpcy5kZWNvZGVNb2RlID0gRGVjb2RpbmdNb2RlLlN0cmljdDtcbiAgICB9XG4gICAgLyoqIFJlc2V0cyB0aGUgaW5zdGFuY2UgdG8gbWFrZSBpdCByZXVzYWJsZS4gKi9cbiAgICBzdGFydEVudGl0eShkZWNvZGVNb2RlKSB7XG4gICAgICAgIHRoaXMuZGVjb2RlTW9kZSA9IGRlY29kZU1vZGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBFbnRpdHlEZWNvZGVyU3RhdGUuRW50aXR5U3RhcnQ7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gMDtcbiAgICAgICAgdGhpcy50cmVlSW5kZXggPSAwO1xuICAgICAgICB0aGlzLmV4Y2VzcyA9IDE7XG4gICAgICAgIHRoaXMuY29uc3VtZWQgPSAxO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXcml0ZSBhbiBlbnRpdHkgdG8gdGhlIGRlY29kZXIuIFRoaXMgY2FuIGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIHBhcnRpYWwgZW50aXRpZXMuXG4gICAgICogSWYgdGhlIGVudGl0eSBpcyBpbmNvbXBsZXRlLCB0aGUgZGVjb2RlciB3aWxsIHJldHVybiAtMS5cbiAgICAgKlxuICAgICAqIE1pcnJvcnMgdGhlIGltcGxlbWVudGF0aW9uIG9mIGBnZXREZWNvZGVyYCwgYnV0IHdpdGggdGhlIGFiaWxpdHkgdG8gc3RvcCBkZWNvZGluZyBpZiB0aGVcbiAgICAgKiBlbnRpdHkgaXMgaW5jb21wbGV0ZSwgYW5kIHJlc3VtZSB3aGVuIHRoZSBuZXh0IHN0cmluZyBpcyB3cml0dGVuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZyBUaGUgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGVudGl0eSAob3IgYSBjb250aW51YXRpb24gb2YgdGhlIGVudGl0eSkuXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IGF0IHdoaWNoIHRoZSBlbnRpdHkgYmVnaW5zLiBTaG91bGQgYmUgMCBpZiB0aGlzIGlzIG5vdCB0aGUgZmlyc3QgY2FsbC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB3ZXJlIGNvbnN1bWVkLCBvciAtMSBpZiB0aGUgZW50aXR5IGlzIGluY29tcGxldGUuXG4gICAgICovXG4gICAgd3JpdGUoc3RyLCBvZmZzZXQpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIEVudGl0eURlY29kZXJTdGF0ZS5FbnRpdHlTdGFydDoge1xuICAgICAgICAgICAgICAgIGlmIChzdHIuY2hhckNvZGVBdChvZmZzZXQpID09PSBDaGFyQ29kZXMuTlVNKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBFbnRpdHlEZWNvZGVyU3RhdGUuTnVtZXJpY1N0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWVkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlTnVtZXJpY1N0YXJ0KHN0ciwgb2Zmc2V0ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBFbnRpdHlEZWNvZGVyU3RhdGUuTmFtZWRFbnRpdHk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVOYW1lZEVudGl0eShzdHIsIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEVudGl0eURlY29kZXJTdGF0ZS5OdW1lcmljU3RhcnQ6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZU51bWVyaWNTdGFydChzdHIsIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEVudGl0eURlY29kZXJTdGF0ZS5OdW1lcmljRGVjaW1hbDoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlTnVtZXJpY0RlY2ltYWwoc3RyLCBvZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBFbnRpdHlEZWNvZGVyU3RhdGUuTnVtZXJpY0hleDoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlTnVtZXJpY0hleChzdHIsIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEVudGl0eURlY29kZXJTdGF0ZS5OYW1lZEVudGl0eToge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlTmFtZWRFbnRpdHkoc3RyLCBvZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN3aXRjaGVzIGJldHdlZW4gdGhlIG51bWVyaWMgZGVjaW1hbCBhbmQgaGV4YWRlY2ltYWwgc3RhdGVzLlxuICAgICAqXG4gICAgICogRXF1aXZhbGVudCB0byB0aGUgYE51bWVyaWMgY2hhcmFjdGVyIHJlZmVyZW5jZSBzdGF0ZWAgaW4gdGhlIEhUTUwgc3BlYy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHIgVGhlIHN0cmluZyBjb250YWluaW5nIHRoZSBlbnRpdHkgKG9yIGEgY29udGludWF0aW9uIG9mIHRoZSBlbnRpdHkpLlxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIGN1cnJlbnQgb2Zmc2V0LlxuICAgICAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IHdlcmUgY29uc3VtZWQsIG9yIC0xIGlmIHRoZSBlbnRpdHkgaXMgaW5jb21wbGV0ZS5cbiAgICAgKi9cbiAgICBzdGF0ZU51bWVyaWNTdGFydChzdHIsIG9mZnNldCkge1xuICAgICAgICBpZiAob2Zmc2V0ID49IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN0ci5jaGFyQ29kZUF0KG9mZnNldCkgfCBUT19MT1dFUl9CSVQpID09PSBDaGFyQ29kZXMuTE9XRVJfWCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IEVudGl0eURlY29kZXJTdGF0ZS5OdW1lcmljSGV4O1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lZCArPSAxO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVOdW1lcmljSGV4KHN0ciwgb2Zmc2V0ICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IEVudGl0eURlY29kZXJTdGF0ZS5OdW1lcmljRGVjaW1hbDtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVOdW1lcmljRGVjaW1hbChzdHIsIG9mZnNldCk7XG4gICAgfVxuICAgIGFkZFRvTnVtZXJpY1Jlc3VsdChzdHIsIHN0YXJ0LCBlbmQsIGJhc2UpIHtcbiAgICAgICAgaWYgKHN0YXJ0ICE9PSBlbmQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZ2l0Q291bnQgPSBlbmQgLSBzdGFydDtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID1cbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCAqIE1hdGgucG93KGJhc2UsIGRpZ2l0Q291bnQpICtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoc3RyLnN1YnN0cihzdGFydCwgZGlnaXRDb3VudCksIGJhc2UpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lZCArPSBkaWdpdENvdW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhIGhleGFkZWNpbWFsIG51bWVyaWMgZW50aXR5LlxuICAgICAqXG4gICAgICogRXF1aXZhbGVudCB0byB0aGUgYEhleGFkZW1pY2FsIGNoYXJhY3RlciByZWZlcmVuY2Ugc3RhdGVgIGluIHRoZSBIVE1MIHNwZWMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyIFRoZSBzdHJpbmcgY29udGFpbmluZyB0aGUgZW50aXR5IChvciBhIGNvbnRpbnVhdGlvbiBvZiB0aGUgZW50aXR5KS5cbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBjdXJyZW50IG9mZnNldC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB3ZXJlIGNvbnN1bWVkLCBvciAtMSBpZiB0aGUgZW50aXR5IGlzIGluY29tcGxldGUuXG4gICAgICovXG4gICAgc3RhdGVOdW1lcmljSGV4KHN0ciwgb2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0SWR4ID0gb2Zmc2V0O1xuICAgICAgICB3aGlsZSAob2Zmc2V0IDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY2hhciA9IHN0ci5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgICAgICBpZiAoaXNOdW1iZXIoY2hhcikgfHwgaXNIZXhhZGVjaW1hbENoYXJhY3RlcihjaGFyKSkge1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb051bWVyaWNSZXN1bHQoc3RyLCBzdGFydElkeCwgb2Zmc2V0LCAxNik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdE51bWVyaWNFbnRpdHkoY2hhciwgMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRUb051bWVyaWNSZXN1bHQoc3RyLCBzdGFydElkeCwgb2Zmc2V0LCAxNik7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgZGVjaW1hbCBudW1lcmljIGVudGl0eS5cbiAgICAgKlxuICAgICAqIEVxdWl2YWxlbnQgdG8gdGhlIGBEZWNpbWFsIGNoYXJhY3RlciByZWZlcmVuY2Ugc3RhdGVgIGluIHRoZSBIVE1MIHNwZWMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyIFRoZSBzdHJpbmcgY29udGFpbmluZyB0aGUgZW50aXR5IChvciBhIGNvbnRpbnVhdGlvbiBvZiB0aGUgZW50aXR5KS5cbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBjdXJyZW50IG9mZnNldC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB3ZXJlIGNvbnN1bWVkLCBvciAtMSBpZiB0aGUgZW50aXR5IGlzIGluY29tcGxldGUuXG4gICAgICovXG4gICAgc3RhdGVOdW1lcmljRGVjaW1hbChzdHIsIG9mZnNldCkge1xuICAgICAgICBjb25zdCBzdGFydElkeCA9IG9mZnNldDtcbiAgICAgICAgd2hpbGUgKG9mZnNldCA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBzdHIuY2hhckNvZGVBdChvZmZzZXQpO1xuICAgICAgICAgICAgaWYgKGlzTnVtYmVyKGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRvTnVtZXJpY1Jlc3VsdChzdHIsIHN0YXJ0SWR4LCBvZmZzZXQsIDEwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbWl0TnVtZXJpY0VudGl0eShjaGFyLCAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZFRvTnVtZXJpY1Jlc3VsdChzdHIsIHN0YXJ0SWR4LCBvZmZzZXQsIDEwKTtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBhbmQgZW1pdCBhIG51bWVyaWMgZW50aXR5LlxuICAgICAqXG4gICAgICogSW1wbGVtZW50cyB0aGUgbG9naWMgZnJvbSB0aGUgYEhleGFkZW1pY2FsIGNoYXJhY3RlciByZWZlcmVuY2Ugc3RhcnRcbiAgICAgKiBzdGF0ZWAgYW5kIGBOdW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2UgZW5kIHN0YXRlYCBpbiB0aGUgSFRNTCBzcGVjLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxhc3RDcCBUaGUgbGFzdCBjb2RlIHBvaW50IG9mIHRoZSBlbnRpdHkuIFVzZWQgdG8gc2VlIGlmIHRoZVxuICAgICAqICAgICAgICAgICAgICAgZW50aXR5IHdhcyB0ZXJtaW5hdGVkIHdpdGggYSBzZW1pY29sb24uXG4gICAgICogQHBhcmFtIGV4cGVjdGVkTGVuZ3RoIFRoZSBtaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgc2hvdWxkIGJlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bWVkLiBVc2VkIHRvIHZhbGlkYXRlIHRoYXQgYXQgbGVhc3Qgb25lIGRpZ2l0XG4gICAgICogICAgICAgICAgICAgICAgICAgICAgIHdhcyBjb25zdW1lZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB3ZXJlIGNvbnN1bWVkLlxuICAgICAqL1xuICAgIGVtaXROdW1lcmljRW50aXR5KGxhc3RDcCwgZXhwZWN0ZWRMZW5ndGgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBFbnN1cmUgd2UgY29uc3VtZWQgYXQgbGVhc3Qgb25lIGRpZ2l0LlxuICAgICAgICBpZiAodGhpcy5jb25zdW1lZCA8PSBleHBlY3RlZExlbmd0aCkge1xuICAgICAgICAgICAgKF9hID0gdGhpcy5lcnJvcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hYnNlbmNlT2ZEaWdpdHNJbk51bWVyaWNDaGFyYWN0ZXJSZWZlcmVuY2UodGhpcy5jb25zdW1lZCk7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaWd1cmUgb3V0IGlmIHRoaXMgaXMgYSBsZWdpdCBlbmQgb2YgdGhlIGVudGl0eVxuICAgICAgICBpZiAobGFzdENwID09PSBDaGFyQ29kZXMuU0VNSSkge1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lZCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGVjb2RlTW9kZSA9PT0gRGVjb2RpbmdNb2RlLlN0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0Q29kZVBvaW50KHJlcGxhY2VDb2RlUG9pbnQodGhpcy5yZXN1bHQpLCB0aGlzLmNvbnN1bWVkKTtcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JzKSB7XG4gICAgICAgICAgICBpZiAobGFzdENwICE9PSBDaGFyQ29kZXMuU0VNSSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLm1pc3NpbmdTZW1pY29sb25BZnRlckNoYXJhY3RlclJlZmVyZW5jZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lcnJvcnMudmFsaWRhdGVOdW1lcmljQ2hhcmFjdGVyUmVmZXJlbmNlKHRoaXMucmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdW1lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgbmFtZWQgZW50aXR5LlxuICAgICAqXG4gICAgICogRXF1aXZhbGVudCB0byB0aGUgYE5hbWVkIGNoYXJhY3RlciByZWZlcmVuY2Ugc3RhdGVgIGluIHRoZSBIVE1MIHNwZWMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyIFRoZSBzdHJpbmcgY29udGFpbmluZyB0aGUgZW50aXR5IChvciBhIGNvbnRpbnVhdGlvbiBvZiB0aGUgZW50aXR5KS5cbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBjdXJyZW50IG9mZnNldC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB3ZXJlIGNvbnN1bWVkLCBvciAtMSBpZiB0aGUgZW50aXR5IGlzIGluY29tcGxldGUuXG4gICAgICovXG4gICAgc3RhdGVOYW1lZEVudGl0eShzdHIsIG9mZnNldCkge1xuICAgICAgICBjb25zdCB7IGRlY29kZVRyZWUgfSA9IHRoaXM7XG4gICAgICAgIGxldCBjdXJyZW50ID0gZGVjb2RlVHJlZVt0aGlzLnRyZWVJbmRleF07XG4gICAgICAgIC8vIFRoZSBtYXNrIGlzIHRoZSBudW1iZXIgb2YgYnl0ZXMgb2YgdGhlIHZhbHVlLCBpbmNsdWRpbmcgdGhlIGN1cnJlbnQgYnl0ZS5cbiAgICAgICAgbGV0IHZhbHVlTGVuZ3RoID0gKGN1cnJlbnQgJiBCaW5UcmllRmxhZ3MuVkFMVUVfTEVOR1RIKSA+PiAxNDtcbiAgICAgICAgZm9yICg7IG9mZnNldCA8IHN0ci5sZW5ndGg7IG9mZnNldCsrLCB0aGlzLmV4Y2VzcysrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gc3RyLmNoYXJDb2RlQXQob2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMudHJlZUluZGV4ID0gZGV0ZXJtaW5lQnJhbmNoKGRlY29kZVRyZWUsIGN1cnJlbnQsIHRoaXMudHJlZUluZGV4ICsgTWF0aC5tYXgoMSwgdmFsdWVMZW5ndGgpLCBjaGFyKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyZWVJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQgPT09IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgYXJlIHBhcnNpbmcgYW4gYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmRlY29kZU1vZGUgPT09IERlY29kaW5nTW9kZS5BdHRyaWJ1dGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIHNob3VsZG4ndCBoYXZlIGNvbnN1bWVkIGFueSBjaGFyYWN0ZXJzIGFmdGVyIHRoZSBlbnRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWVMZW5ndGggPT09IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBbmQgdGhlcmUgc2hvdWxkIGJlIG5vIGludmFsaWQgY2hhcmFjdGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VudGl0eUluQXR0cmlidXRlSW52YWxpZEVuZChjaGFyKSkpXG4gICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZW1pdE5vdFRlcm1pbmF0ZWROYW1lZEVudGl0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudCA9IGRlY29kZVRyZWVbdGhpcy50cmVlSW5kZXhdO1xuICAgICAgICAgICAgdmFsdWVMZW5ndGggPSAoY3VycmVudCAmIEJpblRyaWVGbGFncy5WQUxVRV9MRU5HVEgpID4+IDE0O1xuICAgICAgICAgICAgLy8gSWYgdGhlIGJyYW5jaCBpcyBhIHZhbHVlLCBzdG9yZSBpdCBhbmQgY29udGludWVcbiAgICAgICAgICAgIGlmICh2YWx1ZUxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBlbnRpdHkgaXMgdGVybWluYXRlZCBieSBhIHNlbWljb2xvbiwgd2UgYXJlIGRvbmUuXG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09IENoYXJDb2Rlcy5TRU1JKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVtaXROYW1lZEVudGl0eURhdGEodGhpcy50cmVlSW5kZXgsIHZhbHVlTGVuZ3RoLCB0aGlzLmNvbnN1bWVkICsgdGhpcy5leGNlc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBlbmNvdW50ZXIgYSBub24tdGVybWluYXRlZCAobGVnYWN5KSBlbnRpdHkgd2hpbGUgcGFyc2luZyBzdHJpY3RseSwgdGhlbiBpZ25vcmUgaXQuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVjb2RlTW9kZSAhPT0gRGVjb2RpbmdNb2RlLlN0cmljdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMudHJlZUluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWVkICs9IHRoaXMuZXhjZXNzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4Y2VzcyA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdCBhIG5hbWVkIGVudGl0eSB0aGF0IHdhcyBub3QgdGVybWluYXRlZCB3aXRoIGEgc2VtaWNvbG9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGNvbnN1bWVkLlxuICAgICAqL1xuICAgIGVtaXROb3RUZXJtaW5hdGVkTmFtZWRFbnRpdHkoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgeyByZXN1bHQsIGRlY29kZVRyZWUgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHZhbHVlTGVuZ3RoID0gKGRlY29kZVRyZWVbcmVzdWx0XSAmIEJpblRyaWVGbGFncy5WQUxVRV9MRU5HVEgpID4+IDE0O1xuICAgICAgICB0aGlzLmVtaXROYW1lZEVudGl0eURhdGEocmVzdWx0LCB2YWx1ZUxlbmd0aCwgdGhpcy5jb25zdW1lZCk7XG4gICAgICAgIChfYSA9IHRoaXMuZXJyb3JzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWlzc2luZ1NlbWljb2xvbkFmdGVyQ2hhcmFjdGVyUmVmZXJlbmNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN1bWVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0IGEgbmFtZWQgZW50aXR5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlc3VsdCBUaGUgaW5kZXggb2YgdGhlIGVudGl0eSBpbiB0aGUgZGVjb2RlIHRyZWUuXG4gICAgICogQHBhcmFtIHZhbHVlTGVuZ3RoIFRoZSBudW1iZXIgb2YgYnl0ZXMgaW4gdGhlIGVudGl0eS5cbiAgICAgKiBAcGFyYW0gY29uc3VtZWQgVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGNvbnN1bWVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGNvbnN1bWVkLlxuICAgICAqL1xuICAgIGVtaXROYW1lZEVudGl0eURhdGEocmVzdWx0LCB2YWx1ZUxlbmd0aCwgY29uc3VtZWQpIHtcbiAgICAgICAgY29uc3QgeyBkZWNvZGVUcmVlIH0gPSB0aGlzO1xuICAgICAgICB0aGlzLmVtaXRDb2RlUG9pbnQodmFsdWVMZW5ndGggPT09IDFcbiAgICAgICAgICAgID8gZGVjb2RlVHJlZVtyZXN1bHRdICYgfkJpblRyaWVGbGFncy5WQUxVRV9MRU5HVEhcbiAgICAgICAgICAgIDogZGVjb2RlVHJlZVtyZXN1bHQgKyAxXSwgY29uc3VtZWQpO1xuICAgICAgICBpZiAodmFsdWVMZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIC8vIEZvciBtdWx0aS1ieXRlIHZhbHVlcywgd2UgbmVlZCB0byBlbWl0IHRoZSBzZWNvbmQgYnl0ZS5cbiAgICAgICAgICAgIHRoaXMuZW1pdENvZGVQb2ludChkZWNvZGVUcmVlW3Jlc3VsdCArIDJdLCBjb25zdW1lZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnN1bWVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaWduYWwgdG8gdGhlIHBhcnNlciB0aGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0IHdhcyByZWFjaGVkLlxuICAgICAqXG4gICAgICogUmVtYWluaW5nIGRhdGEgd2lsbCBiZSBlbWl0dGVkIGFuZCByZWxldmFudCBlcnJvcnMgd2lsbCBiZSBwcm9kdWNlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBjb25zdW1lZC5cbiAgICAgKi9cbiAgICBlbmQoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIEVudGl0eURlY29kZXJTdGF0ZS5OYW1lZEVudGl0eToge1xuICAgICAgICAgICAgICAgIC8vIEVtaXQgYSBuYW1lZCBlbnRpdHkgaWYgd2UgaGF2ZSBvbmUuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0ICE9PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmRlY29kZU1vZGUgIT09IERlY29kaW5nTW9kZS5BdHRyaWJ1dGUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID09PSB0aGlzLnRyZWVJbmRleClcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmVtaXROb3RUZXJtaW5hdGVkTmFtZWRFbnRpdHkoKVxuICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIGVtaXQgYSBudW1lcmljIGVudGl0eSBpZiB3ZSBoYXZlIG9uZS5cbiAgICAgICAgICAgIGNhc2UgRW50aXR5RGVjb2RlclN0YXRlLk51bWVyaWNEZWNpbWFsOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdE51bWVyaWNFbnRpdHkoMCwgMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEVudGl0eURlY29kZXJTdGF0ZS5OdW1lcmljSGV4OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdE51bWVyaWNFbnRpdHkoMCwgMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEVudGl0eURlY29kZXJTdGF0ZS5OdW1lcmljU3RhcnQ6IHtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmVycm9ycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFic2VuY2VPZkRpZ2l0c0luTnVtZXJpY0NoYXJhY3RlclJlZmVyZW5jZSh0aGlzLmNvbnN1bWVkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgRW50aXR5RGVjb2RlclN0YXRlLkVudGl0eVN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIDAgaWYgd2UgaGF2ZSBubyBlbnRpdHkuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGRlY29kZXMgZW50aXRpZXMgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIGRlY29kZVRyZWUgVGhlIGRlY29kZSB0cmVlLlxuICogQHJldHVybnMgQSBmdW5jdGlvbiB0aGF0IGRlY29kZXMgZW50aXRpZXMgaW4gYSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGdldERlY29kZXIoZGVjb2RlVHJlZSkge1xuICAgIGxldCByZXQgPSBcIlwiO1xuICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgRW50aXR5RGVjb2RlcihkZWNvZGVUcmVlLCAoc3RyKSA9PiAocmV0ICs9IGZyb21Db2RlUG9pbnQoc3RyKSkpO1xuICAgIHJldHVybiBmdW5jdGlvbiBkZWNvZGVXaXRoVHJpZShzdHIsIGRlY29kZU1vZGUpIHtcbiAgICAgICAgbGV0IGxhc3RJbmRleCA9IDA7XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICB3aGlsZSAoKG9mZnNldCA9IHN0ci5pbmRleE9mKFwiJlwiLCBvZmZzZXQpKSA+PSAwKSB7XG4gICAgICAgICAgICByZXQgKz0gc3RyLnNsaWNlKGxhc3RJbmRleCwgb2Zmc2V0KTtcbiAgICAgICAgICAgIGRlY29kZXIuc3RhcnRFbnRpdHkoZGVjb2RlTW9kZSk7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBkZWNvZGVyLndyaXRlKHN0ciwgXG4gICAgICAgICAgICAvLyBTa2lwIHRoZSBcIiZcIlxuICAgICAgICAgICAgb2Zmc2V0ICsgMSk7XG4gICAgICAgICAgICBpZiAobGVuIDwgMCkge1xuICAgICAgICAgICAgICAgIGxhc3RJbmRleCA9IG9mZnNldCArIGRlY29kZXIuZW5kKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0SW5kZXggPSBvZmZzZXQgKyBsZW47XG4gICAgICAgICAgICAvLyBJZiBgbGVuYCBpcyAwLCBza2lwIHRoZSBjdXJyZW50IGAmYCBhbmQgY29udGludWUuXG4gICAgICAgICAgICBvZmZzZXQgPSBsZW4gPT09IDAgPyBsYXN0SW5kZXggKyAxIDogbGFzdEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHJldCArIHN0ci5zbGljZShsYXN0SW5kZXgpO1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3Qga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgZmluYWwgc3RyaW5nLlxuICAgICAgICByZXQgPSBcIlwiO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG4vKipcbiAqIERldGVybWluZXMgdGhlIGJyYW5jaCBvZiB0aGUgY3VycmVudCBub2RlIHRoYXQgaXMgdGFrZW4gZ2l2ZW4gdGhlIGN1cnJlbnRcbiAqIGNoYXJhY3Rlci4gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHRyYXZlcnNlIHRoZSB0cmllLlxuICpcbiAqIEBwYXJhbSBkZWNvZGVUcmVlIFRoZSB0cmllLlxuICogQHBhcmFtIGN1cnJlbnQgVGhlIGN1cnJlbnQgbm9kZS5cbiAqIEBwYXJhbSBub2RlSWR4IFRoZSBpbmRleCByaWdodCBhZnRlciB0aGUgY3VycmVudCBub2RlIGFuZCBpdHMgdmFsdWUuXG4gKiBAcGFyYW0gY2hhciBUaGUgY3VycmVudCBjaGFyYWN0ZXIuXG4gKiBAcmV0dXJucyBUaGUgaW5kZXggb2YgdGhlIG5leHQgbm9kZSwgb3IgLTEgaWYgbm8gYnJhbmNoIGlzIHRha2VuLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5lQnJhbmNoKGRlY29kZVRyZWUsIGN1cnJlbnQsIG5vZGVJZHgsIGNoYXIpIHtcbiAgICBjb25zdCBicmFuY2hDb3VudCA9IChjdXJyZW50ICYgQmluVHJpZUZsYWdzLkJSQU5DSF9MRU5HVEgpID4+IDc7XG4gICAgY29uc3QganVtcE9mZnNldCA9IGN1cnJlbnQgJiBCaW5UcmllRmxhZ3MuSlVNUF9UQUJMRTtcbiAgICAvLyBDYXNlIDE6IFNpbmdsZSBicmFuY2ggZW5jb2RlZCBpbiBqdW1wIG9mZnNldFxuICAgIGlmIChicmFuY2hDb3VudCA9PT0gMCkge1xuICAgICAgICByZXR1cm4ganVtcE9mZnNldCAhPT0gMCAmJiBjaGFyID09PSBqdW1wT2Zmc2V0ID8gbm9kZUlkeCA6IC0xO1xuICAgIH1cbiAgICAvLyBDYXNlIDI6IE11bHRpcGxlIGJyYW5jaGVzIGVuY29kZWQgaW4ganVtcCB0YWJsZVxuICAgIGlmIChqdW1wT2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY2hhciAtIGp1bXBPZmZzZXQ7XG4gICAgICAgIHJldHVybiB2YWx1ZSA8IDAgfHwgdmFsdWUgPj0gYnJhbmNoQ291bnRcbiAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgIDogZGVjb2RlVHJlZVtub2RlSWR4ICsgdmFsdWVdIC0gMTtcbiAgICB9XG4gICAgLy8gQ2FzZSAzOiBNdWx0aXBsZSBicmFuY2hlcyBlbmNvZGVkIGluIGRpY3Rpb25hcnlcbiAgICAvLyBCaW5hcnkgc2VhcmNoIGZvciB0aGUgY2hhcmFjdGVyLlxuICAgIGxldCBsbyA9IG5vZGVJZHg7XG4gICAgbGV0IGhpID0gbG8gKyBicmFuY2hDb3VudCAtIDE7XG4gICAgd2hpbGUgKGxvIDw9IGhpKSB7XG4gICAgICAgIGNvbnN0IG1pZCA9IChsbyArIGhpKSA+Pj4gMTtcbiAgICAgICAgY29uc3QgbWlkVmFsID0gZGVjb2RlVHJlZVttaWRdO1xuICAgICAgICBpZiAobWlkVmFsIDwgY2hhcikge1xuICAgICAgICAgICAgbG8gPSBtaWQgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1pZFZhbCA+IGNoYXIpIHtcbiAgICAgICAgICAgIGhpID0gbWlkIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVUcmVlW21pZCArIGJyYW5jaENvdW50XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5jb25zdCBodG1sRGVjb2RlciA9IGdldERlY29kZXIoaHRtbERlY29kZVRyZWUpO1xuY29uc3QgeG1sRGVjb2RlciA9IGdldERlY29kZXIoeG1sRGVjb2RlVHJlZSk7XG4vKipcbiAqIERlY29kZXMgYW4gSFRNTCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHN0ciBUaGUgc3RyaW5nIHRvIGRlY29kZS5cbiAqIEBwYXJhbSBtb2RlIFRoZSBkZWNvZGluZyBtb2RlLlxuICogQHJldHVybnMgVGhlIGRlY29kZWQgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlSFRNTChzdHIsIG1vZGUgPSBEZWNvZGluZ01vZGUuTGVnYWN5KSB7XG4gICAgcmV0dXJuIGh0bWxEZWNvZGVyKHN0ciwgbW9kZSk7XG59XG4vKipcbiAqIERlY29kZXMgYW4gSFRNTCBzdHJpbmcgaW4gYW4gYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSBzdHIgVGhlIHN0cmluZyB0byBkZWNvZGUuXG4gKiBAcmV0dXJucyBUaGUgZGVjb2RlZCBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVIVE1MQXR0cmlidXRlKHN0cikge1xuICAgIHJldHVybiBodG1sRGVjb2RlcihzdHIsIERlY29kaW5nTW9kZS5BdHRyaWJ1dGUpO1xufVxuLyoqXG4gKiBEZWNvZGVzIGFuIEhUTUwgc3RyaW5nLCByZXF1aXJpbmcgYWxsIGVudGl0aWVzIHRvIGJlIHRlcm1pbmF0ZWQgYnkgYSBzZW1pY29sb24uXG4gKlxuICogQHBhcmFtIHN0ciBUaGUgc3RyaW5nIHRvIGRlY29kZS5cbiAqIEByZXR1cm5zIFRoZSBkZWNvZGVkIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUhUTUxTdHJpY3Qoc3RyKSB7XG4gICAgcmV0dXJuIGh0bWxEZWNvZGVyKHN0ciwgRGVjb2RpbmdNb2RlLlN0cmljdCk7XG59XG4vKipcbiAqIERlY29kZXMgYW4gWE1MIHN0cmluZywgcmVxdWlyaW5nIGFsbCBlbnRpdGllcyB0byBiZSB0ZXJtaW5hdGVkIGJ5IGEgc2VtaWNvbG9uLlxuICpcbiAqIEBwYXJhbSBzdHIgVGhlIHN0cmluZyB0byBkZWNvZGUuXG4gKiBAcmV0dXJucyBUaGUgZGVjb2RlZCBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVYTUwoc3RyKSB7XG4gICAgcmV0dXJuIHhtbERlY29kZXIoc3RyLCBEZWNvZGluZ01vZGUuU3RyaWN0KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlY29kZS5qcy5tYXAiLCIvLyBVdGlsaXRpZXNcbi8vXG5cbmltcG9ydCAqIGFzIG1kdXJsIGZyb20gJ21kdXJsJ1xuaW1wb3J0ICogYXMgdWNtaWNybyBmcm9tICd1Yy5taWNybydcbmltcG9ydCB7IGRlY29kZUhUTUwgfSBmcm9tICdlbnRpdGllcydcblxuZnVuY3Rpb24gX2NsYXNzIChvYmopIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopIH1cblxuZnVuY3Rpb24gaXNTdHJpbmcgKG9iaikgeyByZXR1cm4gX2NsYXNzKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nIH1cblxuY29uc3QgX2hhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuXG5mdW5jdGlvbiBoYXMgKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBfaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSlcbn1cblxuLy8gTWVyZ2Ugb2JqZWN0c1xuLy9cbmZ1bmN0aW9uIGFzc2lnbiAob2JqIC8qIGZyb20xLCBmcm9tMiwgZnJvbTMsIC4uLiAqLykge1xuICBjb25zdCBzb3VyY2VzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXG4gIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgaWYgKCFzb3VyY2UpIHsgcmV0dXJuIH1cblxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzb3VyY2UgKyAnbXVzdCBiZSBvYmplY3QnKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBvYmpba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgfSlcbiAgfSlcblxuICByZXR1cm4gb2JqXG59XG5cbi8vIFJlbW92ZSBlbGVtZW50IGZyb20gYXJyYXkgYW5kIHB1dCBhbm90aGVyIGFycmF5IGF0IHRob3NlIHBvc2l0aW9uLlxuLy8gVXNlZnVsIGZvciBzb21lIG9wZXJhdGlvbnMgd2l0aCB0b2tlbnNcbmZ1bmN0aW9uIGFycmF5UmVwbGFjZUF0IChzcmMsIHBvcywgbmV3RWxlbWVudHMpIHtcbiAgcmV0dXJuIFtdLmNvbmNhdChzcmMuc2xpY2UoMCwgcG9zKSwgbmV3RWxlbWVudHMsIHNyYy5zbGljZShwb3MgKyAxKSlcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVudGl0eUNvZGUgKGMpIHtcbiAgLyogZXNsaW50IG5vLWJpdHdpc2U6MCAqL1xuICAvLyBicm9rZW4gc2VxdWVuY2VcbiAgaWYgKGMgPj0gMHhEODAwICYmIGMgPD0gMHhERkZGKSB7IHJldHVybiBmYWxzZSB9XG4gIC8vIG5ldmVyIHVzZWRcbiAgaWYgKGMgPj0gMHhGREQwICYmIGMgPD0gMHhGREVGKSB7IHJldHVybiBmYWxzZSB9XG4gIGlmICgoYyAmIDB4RkZGRikgPT09IDB4RkZGRiB8fCAoYyAmIDB4RkZGRikgPT09IDB4RkZGRSkgeyByZXR1cm4gZmFsc2UgfVxuICAvLyBjb250cm9sIGNvZGVzXG4gIGlmIChjID49IDB4MDAgJiYgYyA8PSAweDA4KSB7IHJldHVybiBmYWxzZSB9XG4gIGlmIChjID09PSAweDBCKSB7IHJldHVybiBmYWxzZSB9XG4gIGlmIChjID49IDB4MEUgJiYgYyA8PSAweDFGKSB7IHJldHVybiBmYWxzZSB9XG4gIGlmIChjID49IDB4N0YgJiYgYyA8PSAweDlGKSB7IHJldHVybiBmYWxzZSB9XG4gIC8vIG91dCBvZiByYW5nZVxuICBpZiAoYyA+IDB4MTBGRkZGKSB7IHJldHVybiBmYWxzZSB9XG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGZyb21Db2RlUG9pbnQgKGMpIHtcbiAgLyogZXNsaW50IG5vLWJpdHdpc2U6MCAqL1xuICBpZiAoYyA+IDB4ZmZmZikge1xuICAgIGMgLT0gMHgxMDAwMFxuICAgIGNvbnN0IHN1cnJvZ2F0ZTEgPSAweGQ4MDAgKyAoYyA+PiAxMClcbiAgICBjb25zdCBzdXJyb2dhdGUyID0gMHhkYzAwICsgKGMgJiAweDNmZilcblxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHN1cnJvZ2F0ZTEsIHN1cnJvZ2F0ZTIpXG4gIH1cbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYylcbn1cblxuY29uc3QgVU5FU0NBUEVfTURfUkUgID0gL1xcXFwoWyFcIiMkJSYnKCkqKyxcXC0uLzo7PD0+P0BbXFxcXFxcXV5fYHt8fX5dKS9nXG5jb25zdCBFTlRJVFlfUkUgICAgICAgPSAvJihbYS16I11bYS16MC05XXsxLDMxfSk7L2dpXG5jb25zdCBVTkVTQ0FQRV9BTExfUkUgPSBuZXcgUmVnRXhwKFVORVNDQVBFX01EX1JFLnNvdXJjZSArICd8JyArIEVOVElUWV9SRS5zb3VyY2UsICdnaScpXG5cbmNvbnN0IERJR0lUQUxfRU5USVRZX1RFU1RfUkUgPSAvXiMoKD86eFthLWYwLTldezEsOH18WzAtOV17MSw4fSkpJC9pXG5cbmZ1bmN0aW9uIHJlcGxhY2VFbnRpdHlQYXR0ZXJuIChtYXRjaCwgbmFtZSkge1xuICBpZiAobmFtZS5jaGFyQ29kZUF0KDApID09PSAweDIzLyogIyAqLyAmJiBESUdJVEFMX0VOVElUWV9URVNUX1JFLnRlc3QobmFtZSkpIHtcbiAgICBjb25zdCBjb2RlID0gbmFtZVsxXS50b0xvd2VyQ2FzZSgpID09PSAneCdcbiAgICAgID8gcGFyc2VJbnQobmFtZS5zbGljZSgyKSwgMTYpXG4gICAgICA6IHBhcnNlSW50KG5hbWUuc2xpY2UoMSksIDEwKVxuXG4gICAgaWYgKGlzVmFsaWRFbnRpdHlDb2RlKGNvZGUpKSB7XG4gICAgICByZXR1cm4gZnJvbUNvZGVQb2ludChjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaFxuICB9XG5cbiAgY29uc3QgZGVjb2RlZCA9IGRlY29kZUhUTUwobWF0Y2gpXG4gIGlmIChkZWNvZGVkICE9PSBtYXRjaCkge1xuICAgIHJldHVybiBkZWNvZGVkXG4gIH1cblxuICByZXR1cm4gbWF0Y2hcbn1cblxuLyogZnVuY3Rpb24gcmVwbGFjZUVudGl0aWVzKHN0cikge1xuICBpZiAoc3RyLmluZGV4T2YoJyYnKSA8IDApIHsgcmV0dXJuIHN0cjsgfVxuXG4gIHJldHVybiBzdHIucmVwbGFjZShFTlRJVFlfUkUsIHJlcGxhY2VFbnRpdHlQYXR0ZXJuKTtcbn0gKi9cblxuZnVuY3Rpb24gdW5lc2NhcGVNZCAoc3RyKSB7XG4gIGlmIChzdHIuaW5kZXhPZignXFxcXCcpIDwgMCkgeyByZXR1cm4gc3RyIH1cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFVORVNDQVBFX01EX1JFLCAnJDEnKVxufVxuXG5mdW5jdGlvbiB1bmVzY2FwZUFsbCAoc3RyKSB7XG4gIGlmIChzdHIuaW5kZXhPZignXFxcXCcpIDwgMCAmJiBzdHIuaW5kZXhPZignJicpIDwgMCkgeyByZXR1cm4gc3RyIH1cblxuICByZXR1cm4gc3RyLnJlcGxhY2UoVU5FU0NBUEVfQUxMX1JFLCBmdW5jdGlvbiAobWF0Y2gsIGVzY2FwZWQsIGVudGl0eSkge1xuICAgIGlmIChlc2NhcGVkKSB7IHJldHVybiBlc2NhcGVkIH1cbiAgICByZXR1cm4gcmVwbGFjZUVudGl0eVBhdHRlcm4obWF0Y2gsIGVudGl0eSlcbiAgfSlcbn1cblxuY29uc3QgSFRNTF9FU0NBUEVfVEVTVF9SRSA9IC9bJjw+XCJdL1xuY29uc3QgSFRNTF9FU0NBUEVfUkVQTEFDRV9SRSA9IC9bJjw+XCJdL2dcbmNvbnN0IEhUTUxfUkVQTEFDRU1FTlRTID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90Oydcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVVuc2FmZUNoYXIgKGNoKSB7XG4gIHJldHVybiBIVE1MX1JFUExBQ0VNRU5UU1tjaF1cbn1cblxuZnVuY3Rpb24gZXNjYXBlSHRtbCAoc3RyKSB7XG4gIGlmIChIVE1MX0VTQ0FQRV9URVNUX1JFLnRlc3Qoc3RyKSkge1xuICAgIHJldHVybiBzdHIucmVwbGFjZShIVE1MX0VTQ0FQRV9SRVBMQUNFX1JFLCByZXBsYWNlVW5zYWZlQ2hhcilcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmNvbnN0IFJFR0VYUF9FU0NBUEVfUkUgPSAvWy4/KiteJFtcXF1cXFxcKCl7fXwtXS9nXG5cbmZ1bmN0aW9uIGVzY2FwZVJFIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFJFR0VYUF9FU0NBUEVfUkUsICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBpc1NwYWNlIChjb2RlKSB7XG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgMHgwOTpcbiAgICBjYXNlIDB4MjA6XG4gICAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vLyBacyAodW5pY29kZSBjbGFzcykgfHwgW1xcdFxcZlxcdlxcclxcbl1cbmZ1bmN0aW9uIGlzV2hpdGVTcGFjZSAoY29kZSkge1xuICBpZiAoY29kZSA+PSAweDIwMDAgJiYgY29kZSA8PSAweDIwMEEpIHsgcmV0dXJuIHRydWUgfVxuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIDB4MDk6IC8vIFxcdFxuICAgIGNhc2UgMHgwQTogLy8gXFxuXG4gICAgY2FzZSAweDBCOiAvLyBcXHZcbiAgICBjYXNlIDB4MEM6IC8vIFxcZlxuICAgIGNhc2UgMHgwRDogLy8gXFxyXG4gICAgY2FzZSAweDIwOlxuICAgIGNhc2UgMHhBMDpcbiAgICBjYXNlIDB4MTY4MDpcbiAgICBjYXNlIDB4MjAyRjpcbiAgICBjYXNlIDB4MjA1RjpcbiAgICBjYXNlIDB4MzAwMDpcbiAgICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuLy8gQ3VycmVudGx5IHdpdGhvdXQgYXN0cmFsIGNoYXJhY3RlcnMgc3VwcG9ydC5cbmZ1bmN0aW9uIGlzUHVuY3RDaGFyIChjaCkge1xuICByZXR1cm4gdWNtaWNyby5QLnRlc3QoY2gpIHx8IHVjbWljcm8uUy50ZXN0KGNoKVxufVxuXG4vLyBNYXJrZG93biBBU0NJSSBwdW5jdHVhdGlvbiBjaGFyYWN0ZXJzLlxuLy9cbi8vICEsIFwiLCAjLCAkLCAlLCAmLCAnLCAoLCApLCAqLCArLCAsLCAtLCAuLCAvLCA6LCA7LCA8LCA9LCA+LCA/LCBALCBbLCBcXCwgXSwgXiwgXywgYCwgeywgfCwgfSwgb3IgflxuLy8gaHR0cDovL3NwZWMuY29tbW9ubWFyay5vcmcvMC4xNS8jYXNjaWktcHVuY3R1YXRpb24tY2hhcmFjdGVyXG4vL1xuLy8gRG9uJ3QgY29uZnVzZSB3aXRoIHVuaWNvZGUgcHVuY3R1YXRpb24gISEhIEl0IGxhY2tzIHNvbWUgY2hhcnMgaW4gYXNjaWkgcmFuZ2UuXG4vL1xuZnVuY3Rpb24gaXNNZEFzY2lpUHVuY3QgKGNoKSB7XG4gIHN3aXRjaCAoY2gpIHtcbiAgICBjYXNlIDB4MjEvKiAhICovOlxuICAgIGNhc2UgMHgyMi8qIFwiICovOlxuICAgIGNhc2UgMHgyMy8qICMgKi86XG4gICAgY2FzZSAweDI0LyogJCAqLzpcbiAgICBjYXNlIDB4MjUvKiAlICovOlxuICAgIGNhc2UgMHgyNi8qICYgKi86XG4gICAgY2FzZSAweDI3LyogJyAqLzpcbiAgICBjYXNlIDB4MjgvKiAoICovOlxuICAgIGNhc2UgMHgyOS8qICkgKi86XG4gICAgY2FzZSAweDJBLyogKiAqLzpcbiAgICBjYXNlIDB4MkIvKiArICovOlxuICAgIGNhc2UgMHgyQy8qICwgKi86XG4gICAgY2FzZSAweDJELyogLSAqLzpcbiAgICBjYXNlIDB4MkUvKiAuICovOlxuICAgIGNhc2UgMHgyRi8qIC8gKi86XG4gICAgY2FzZSAweDNBLyogOiAqLzpcbiAgICBjYXNlIDB4M0IvKiA7ICovOlxuICAgIGNhc2UgMHgzQy8qIDwgKi86XG4gICAgY2FzZSAweDNELyogPSAqLzpcbiAgICBjYXNlIDB4M0UvKiA+ICovOlxuICAgIGNhc2UgMHgzRi8qID8gKi86XG4gICAgY2FzZSAweDQwLyogQCAqLzpcbiAgICBjYXNlIDB4NUIvKiBbICovOlxuICAgIGNhc2UgMHg1Qy8qIFxcICovOlxuICAgIGNhc2UgMHg1RC8qIF0gKi86XG4gICAgY2FzZSAweDVFLyogXiAqLzpcbiAgICBjYXNlIDB4NUYvKiBfICovOlxuICAgIGNhc2UgMHg2MC8qIGAgKi86XG4gICAgY2FzZSAweDdCLyogeyAqLzpcbiAgICBjYXNlIDB4N0MvKiB8ICovOlxuICAgIGNhc2UgMHg3RC8qIH0gKi86XG4gICAgY2FzZSAweDdFLyogfiAqLzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8vIEhlcGxlciB0byB1bmlmeSBbcmVmZXJlbmNlIGxhYmVsc10uXG4vL1xuZnVuY3Rpb24gbm9ybWFsaXplUmVmZXJlbmNlIChzdHIpIHtcbiAgLy8gVHJpbSBhbmQgY29sbGFwc2Ugd2hpdGVzcGFjZVxuICAvL1xuICBzdHIgPSBzdHIudHJpbSgpLnJlcGxhY2UoL1xccysvZywgJyAnKVxuXG4gIC8vIEluIG5vZGUgdjEwICfhup4nLnRvTG93ZXJDYXNlKCkgPT09ICfhub4nLCB3aGljaCBpcyBwcmVzdW1lZCB0byBiZSBhIGJ1Z1xuICAvLyBmaXhlZCBpbiB2MTIgKGNvdWxkbid0IGZpbmQgYW55IGRldGFpbHMpLlxuICAvL1xuICAvLyBTbyB0cmVhdCB0aGlzIG9uZSBhcyBhIHNwZWNpYWwgY2FzZVxuICAvLyAocmVtb3ZlIHRoaXMgd2hlbiBub2RlIHYxMCBpcyBubyBsb25nZXIgc3VwcG9ydGVkKS5cbiAgLy9cbiAgaWYgKCfhup4nLnRvTG93ZXJDYXNlKCkgPT09ICfhub4nKSB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL+G6ni9nLCAnw58nKVxuICB9XG5cbiAgLy8gLnRvTG93ZXJDYXNlKCkudG9VcHBlckNhc2UoKSBzaG91bGQgZ2V0IHJpZCBvZiBhbGwgZGlmZmVyZW5jZXNcbiAgLy8gYmV0d2VlbiBsZXR0ZXIgdmFyaWFudHMuXG4gIC8vXG4gIC8vIFNpbXBsZSAudG9Mb3dlckNhc2UoKSBkb2Vzbid0IG5vcm1hbGl6ZSAxMjUgY29kZSBwb2ludHMgY29ycmVjdGx5LFxuICAvLyBhbmQgLnRvVXBwZXJDYXNlIGRvZXNuJ3Qgbm9ybWFsaXplIDYgb2YgdGhlbSAobGlzdCBvZiBleGNlcHRpb25zOlxuICAvLyDEsCwgz7QsIOG6niwg4oSmLCDihKosIOKEqyAtIHRob3NlIGFyZSBhbHJlYWR5IHVwcGVyY2FzZWQsIGJ1dCBoYXZlIGRpZmZlcmVudGx5XG4gIC8vIHVwcGVyY2FzZWQgdmVyc2lvbnMpLlxuICAvL1xuICAvLyBIZXJlJ3MgYW4gZXhhbXBsZSBzaG93aW5nIGhvdyBpdCBoYXBwZW5zLiBMZXRzIHRha2UgZ3JlZWsgbGV0dGVyIG9tZWdhOlxuICAvLyB1cHBlcmNhc2UgVSswMzk4ICjOmCksIFUrMDNmNCAoz7QpIGFuZCBsb3dlcmNhc2UgVSswM2I4ICjOuCksIFUrMDNkMSAoz5EpXG4gIC8vXG4gIC8vIFVuaWNvZGUgZW50cmllczpcbiAgLy8gMDM5ODtHUkVFSyBDQVBJVEFMIExFVFRFUiBUSEVUQTtMdTswO0w7Ozs7O047Ozs7MDNCODtcbiAgLy8gMDNCODtHUkVFSyBTTUFMTCBMRVRURVIgVEhFVEE7TGw7MDtMOzs7OztOOzs7MDM5ODs7MDM5OFxuICAvLyAwM0QxO0dSRUVLIFRIRVRBIFNZTUJPTDtMbDswO0w7PGNvbXBhdD4gMDNCODs7OztOO0dSRUVLIFNNQUxMIExFVFRFUiBTQ1JJUFQgVEhFVEE7OzAzOTg7OzAzOThcbiAgLy8gMDNGNDtHUkVFSyBDQVBJVEFMIFRIRVRBIFNZTUJPTDtMdTswO0w7PGNvbXBhdD4gMDM5ODs7OztOOzs7OzAzQjg7XG4gIC8vXG4gIC8vIENhc2UtaW5zZW5zaXRpdmUgY29tcGFyaXNvbiBzaG91bGQgdHJlYXQgYWxsIG9mIHRoZW0gYXMgZXF1aXZhbGVudC5cbiAgLy9cbiAgLy8gQnV0IC50b0xvd2VyQ2FzZSgpIGRvZXNuJ3QgY2hhbmdlIM+RIChpdCdzIGFscmVhZHkgbG93ZXJjYXNlKSxcbiAgLy8gYW5kIC50b1VwcGVyQ2FzZSgpIGRvZXNuJ3QgY2hhbmdlIM+0IChhbHJlYWR5IHVwcGVyY2FzZSkuXG4gIC8vXG4gIC8vIEFwcGx5aW5nIGZpcnN0IGxvd2VyIHRoZW4gdXBwZXIgY2FzZSBub3JtYWxpemVzIGFueSBjaGFyYWN0ZXI6XG4gIC8vICdcXHUwMzk4XFx1MDNmNFxcdTAzYjhcXHUwM2QxJy50b0xvd2VyQ2FzZSgpLnRvVXBwZXJDYXNlKCkgPT09ICdcXHUwMzk4XFx1MDM5OFxcdTAzOThcXHUwMzk4J1xuICAvL1xuICAvLyBOb3RlOiB0aGlzIGlzIGVxdWl2YWxlbnQgdG8gdW5pY29kZSBjYXNlIGZvbGRpbmc7IHVuaWNvZGUgbm9ybWFsaXphdGlvblxuICAvLyBpcyBhIGRpZmZlcmVudCBzdGVwIHRoYXQgaXMgbm90IHJlcXVpcmVkIGhlcmUuXG4gIC8vXG4gIC8vIEZpbmFsIHJlc3VsdCBzaG91bGQgYmUgdXBwZXJjYXNlZCwgYmVjYXVzZSBpdCdzIGxhdGVyIHN0b3JlZCBpbiBhbiBvYmplY3RcbiAgLy8gKHRoaXMgYXZvaWQgYSBjb25mbGljdCB3aXRoIE9iamVjdC5wcm90b3R5cGUgbWVtYmVycyxcbiAgLy8gbW9zdCBub3RhYmx5LCBgX19wcm90b19fYClcbiAgLy9cbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnRvVXBwZXJDYXNlKClcbn1cblxuLy8gUmUtZXhwb3J0IGxpYnJhcmllcyBjb21tb25seSB1c2VkIGluIGJvdGggbWFya2Rvd24taXQgYW5kIGl0cyBwbHVnaW5zLFxuLy8gc28gcGx1Z2lucyB3b24ndCBoYXZlIHRvIGRlcGVuZCBvbiB0aGVtIGV4cGxpY2l0bHksIHdoaWNoIHJlZHVjZXMgdGhlaXJcbi8vIGJ1bmRsZWQgc2l6ZSAoZS5nLiBhIGJyb3dzZXIgYnVpbGQpLlxuLy9cbmNvbnN0IGxpYiA9IHsgbWR1cmwsIHVjbWljcm8gfVxuXG5leHBvcnQge1xuICBsaWIsXG4gIGFzc2lnbixcbiAgaXNTdHJpbmcsXG4gIGhhcyxcbiAgdW5lc2NhcGVNZCxcbiAgdW5lc2NhcGVBbGwsXG4gIGlzVmFsaWRFbnRpdHlDb2RlLFxuICBmcm9tQ29kZVBvaW50LFxuICBlc2NhcGVIdG1sLFxuICBhcnJheVJlcGxhY2VBdCxcbiAgaXNTcGFjZSxcbiAgaXNXaGl0ZVNwYWNlLFxuICBpc01kQXNjaWlQdW5jdCxcbiAgaXNQdW5jdENoYXIsXG4gIGVzY2FwZVJFLFxuICBub3JtYWxpemVSZWZlcmVuY2Vcbn1cbiIsIi8vIFBhcnNlIGxpbmsgbGFiZWxcbi8vXG4vLyB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBmaXJzdCBjaGFyYWN0ZXIgKFwiW1wiKSBhbHJlYWR5IG1hdGNoZXM7XG4vLyByZXR1cm5zIHRoZSBlbmQgb2YgdGhlIGxhYmVsXG4vL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUxpbmtMYWJlbCAoc3RhdGUsIHN0YXJ0LCBkaXNhYmxlTmVzdGVkKSB7XG4gIGxldCBsZXZlbCwgZm91bmQsIG1hcmtlciwgcHJldlBvc1xuXG4gIGNvbnN0IG1heCA9IHN0YXRlLnBvc01heFxuICBjb25zdCBvbGRQb3MgPSBzdGF0ZS5wb3NcblxuICBzdGF0ZS5wb3MgPSBzdGFydCArIDFcbiAgbGV2ZWwgPSAxXG5cbiAgd2hpbGUgKHN0YXRlLnBvcyA8IG1heCkge1xuICAgIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcylcbiAgICBpZiAobWFya2VyID09PSAweDVEIC8qIF0gKi8pIHtcbiAgICAgIGxldmVsLS1cbiAgICAgIGlmIChsZXZlbCA9PT0gMCkge1xuICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2UG9zID0gc3RhdGUucG9zXG4gICAgc3RhdGUubWQuaW5saW5lLnNraXBUb2tlbihzdGF0ZSlcbiAgICBpZiAobWFya2VyID09PSAweDVCIC8qIFsgKi8pIHtcbiAgICAgIGlmIChwcmV2UG9zID09PSBzdGF0ZS5wb3MgLSAxKSB7XG4gICAgICAgIC8vIGluY3JlYXNlIGxldmVsIGlmIHdlIGZpbmQgdGV4dCBgW2AsIHdoaWNoIGlzIG5vdCBhIHBhcnQgb2YgYW55IHRva2VuXG4gICAgICAgIGxldmVsKytcbiAgICAgIH0gZWxzZSBpZiAoZGlzYWJsZU5lc3RlZCkge1xuICAgICAgICBzdGF0ZS5wb3MgPSBvbGRQb3NcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGV0IGxhYmVsRW5kID0gLTFcblxuICBpZiAoZm91bmQpIHtcbiAgICBsYWJlbEVuZCA9IHN0YXRlLnBvc1xuICB9XG5cbiAgLy8gcmVzdG9yZSBvbGQgc3RhdGVcbiAgc3RhdGUucG9zID0gb2xkUG9zXG5cbiAgcmV0dXJuIGxhYmVsRW5kXG59XG4iLCIvLyBQYXJzZSBsaW5rIGRlc3RpbmF0aW9uXG4vL1xuXG5pbXBvcnQgeyB1bmVzY2FwZUFsbCB9IGZyb20gJy4uL2NvbW1vbi91dGlscy5tanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlTGlua0Rlc3RpbmF0aW9uIChzdHIsIHN0YXJ0LCBtYXgpIHtcbiAgbGV0IGNvZGVcbiAgbGV0IHBvcyA9IHN0YXJ0XG5cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIG9rOiBmYWxzZSxcbiAgICBwb3M6IDAsXG4gICAgc3RyOiAnJ1xuICB9XG5cbiAgaWYgKHN0ci5jaGFyQ29kZUF0KHBvcykgPT09IDB4M0MgLyogPCAqLykge1xuICAgIHBvcysrXG4gICAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgICAgY29kZSA9IHN0ci5jaGFyQ29kZUF0KHBvcylcbiAgICAgIGlmIChjb2RlID09PSAweDBBIC8qIFxcbiAqLykgeyByZXR1cm4gcmVzdWx0IH1cbiAgICAgIGlmIChjb2RlID09PSAweDNDIC8qIDwgKi8pIHsgcmV0dXJuIHJlc3VsdCB9XG4gICAgICBpZiAoY29kZSA9PT0gMHgzRSAvKiA+ICovKSB7XG4gICAgICAgIHJlc3VsdC5wb3MgPSBwb3MgKyAxXG4gICAgICAgIHJlc3VsdC5zdHIgPSB1bmVzY2FwZUFsbChzdHIuc2xpY2Uoc3RhcnQgKyAxLCBwb3MpKVxuICAgICAgICByZXN1bHQub2sgPSB0cnVlXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICAgIGlmIChjb2RlID09PSAweDVDIC8qIFxcICovICYmIHBvcyArIDEgPCBtYXgpIHtcbiAgICAgICAgcG9zICs9IDJcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgcG9zKytcbiAgICB9XG5cbiAgICAvLyBubyBjbG9zaW5nICc+J1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIC8vIHRoaXMgc2hvdWxkIGJlIC4uLiB9IGVsc2UgeyAuLi4gYnJhbmNoXG5cbiAgbGV0IGxldmVsID0gMFxuICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgY29kZSA9IHN0ci5jaGFyQ29kZUF0KHBvcylcblxuICAgIGlmIChjb2RlID09PSAweDIwKSB7IGJyZWFrIH1cblxuICAgIC8vIGFzY2lpIGNvbnRyb2wgY2hhcmFjdGVyc1xuICAgIGlmIChjb2RlIDwgMHgyMCB8fCBjb2RlID09PSAweDdGKSB7IGJyZWFrIH1cblxuICAgIGlmIChjb2RlID09PSAweDVDIC8qIFxcICovICYmIHBvcyArIDEgPCBtYXgpIHtcbiAgICAgIGlmIChzdHIuY2hhckNvZGVBdChwb3MgKyAxKSA9PT0gMHgyMCkgeyBicmVhayB9XG4gICAgICBwb3MgKz0gMlxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gMHgyOCAvKiAoICovKSB7XG4gICAgICBsZXZlbCsrXG4gICAgICBpZiAobGV2ZWwgPiAzMikgeyByZXR1cm4gcmVzdWx0IH1cbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gMHgyOSAvKiApICovKSB7XG4gICAgICBpZiAobGV2ZWwgPT09IDApIHsgYnJlYWsgfVxuICAgICAgbGV2ZWwtLVxuICAgIH1cblxuICAgIHBvcysrXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHBvcykgeyByZXR1cm4gcmVzdWx0IH1cbiAgaWYgKGxldmVsICE9PSAwKSB7IHJldHVybiByZXN1bHQgfVxuXG4gIHJlc3VsdC5zdHIgPSB1bmVzY2FwZUFsbChzdHIuc2xpY2Uoc3RhcnQsIHBvcykpXG4gIHJlc3VsdC5wb3MgPSBwb3NcbiAgcmVzdWx0Lm9rID0gdHJ1ZVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCIvLyBQYXJzZSBsaW5rIHRpdGxlXG4vL1xuXG5pbXBvcnQgeyB1bmVzY2FwZUFsbCB9IGZyb20gJy4uL2NvbW1vbi91dGlscy5tanMnXG5cbi8vIFBhcnNlIGxpbmsgdGl0bGUgd2l0aGluIGBzdHJgIGluIFtzdGFydCwgbWF4XSByYW5nZSxcbi8vIG9yIGNvbnRpbnVlIHByZXZpb3VzIHBhcnNpbmcgaWYgYHByZXZfc3RhdGVgIGlzIGRlZmluZWQgKGVxdWFsIHRvIHJlc3VsdCBvZiBsYXN0IGV4ZWN1dGlvbikuXG4vL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VMaW5rVGl0bGUgKHN0ciwgc3RhcnQsIG1heCwgcHJldl9zdGF0ZSkge1xuICBsZXQgY29kZVxuICBsZXQgcG9zID0gc3RhcnRcblxuICBjb25zdCBzdGF0ZSA9IHtcbiAgICAvLyBpZiBgdHJ1ZWAsIHRoaXMgaXMgYSB2YWxpZCBsaW5rIHRpdGxlXG4gICAgb2s6IGZhbHNlLFxuICAgIC8vIGlmIGB0cnVlYCwgdGhpcyBsaW5rIGNhbiBiZSBjb250aW51ZWQgb24gdGhlIG5leHQgbGluZVxuICAgIGNhbl9jb250aW51ZTogZmFsc2UsXG4gICAgLy8gaWYgYG9rYCwgaXQncyB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IGNoYXJhY3RlciBhZnRlciB0aGUgY2xvc2luZyBtYXJrZXJcbiAgICBwb3M6IDAsXG4gICAgLy8gaWYgYG9rYCwgaXQncyB0aGUgdW5lc2NhcGVkIHRpdGxlXG4gICAgc3RyOiAnJyxcbiAgICAvLyBleHBlY3RlZCBjbG9zaW5nIG1hcmtlciBjaGFyYWN0ZXIgY29kZVxuICAgIG1hcmtlcjogMFxuICB9XG5cbiAgaWYgKHByZXZfc3RhdGUpIHtcbiAgICAvLyB0aGlzIGlzIGEgY29udGludWF0aW9uIG9mIGEgcHJldmlvdXMgcGFyc2VMaW5rVGl0bGUgY2FsbCBvbiB0aGUgbmV4dCBsaW5lLFxuICAgIC8vIHVzZWQgaW4gcmVmZXJlbmNlIGxpbmtzIG9ubHlcbiAgICBzdGF0ZS5zdHIgPSBwcmV2X3N0YXRlLnN0clxuICAgIHN0YXRlLm1hcmtlciA9IHByZXZfc3RhdGUubWFya2VyXG4gIH0gZWxzZSB7XG4gICAgaWYgKHBvcyA+PSBtYXgpIHsgcmV0dXJuIHN0YXRlIH1cblxuICAgIGxldCBtYXJrZXIgPSBzdHIuY2hhckNvZGVBdChwb3MpXG4gICAgaWYgKG1hcmtlciAhPT0gMHgyMiAvKiBcIiAqLyAmJiBtYXJrZXIgIT09IDB4MjcgLyogJyAqLyAmJiBtYXJrZXIgIT09IDB4MjggLyogKCAqLykgeyByZXR1cm4gc3RhdGUgfVxuXG4gICAgc3RhcnQrK1xuICAgIHBvcysrXG5cbiAgICAvLyBpZiBvcGVuaW5nIG1hcmtlciBpcyBcIihcIiwgc3dpdGNoIGl0IHRvIGNsb3NpbmcgbWFya2VyIFwiKVwiXG4gICAgaWYgKG1hcmtlciA9PT0gMHgyOCkgeyBtYXJrZXIgPSAweDI5IH1cblxuICAgIHN0YXRlLm1hcmtlciA9IG1hcmtlclxuICB9XG5cbiAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgIGNvZGUgPSBzdHIuY2hhckNvZGVBdChwb3MpXG4gICAgaWYgKGNvZGUgPT09IHN0YXRlLm1hcmtlcikge1xuICAgICAgc3RhdGUucG9zID0gcG9zICsgMVxuICAgICAgc3RhdGUuc3RyICs9IHVuZXNjYXBlQWxsKHN0ci5zbGljZShzdGFydCwgcG9zKSlcbiAgICAgIHN0YXRlLm9rID0gdHJ1ZVxuICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAweDI4IC8qICggKi8gJiYgc3RhdGUubWFya2VyID09PSAweDI5IC8qICkgKi8pIHtcbiAgICAgIHJldHVybiBzdGF0ZVxuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHg1QyAvKiBcXCAqLyAmJiBwb3MgKyAxIDwgbWF4KSB7XG4gICAgICBwb3MrK1xuICAgIH1cblxuICAgIHBvcysrXG4gIH1cblxuICAvLyBubyBjbG9zaW5nIG1hcmtlciBmb3VuZCwgYnV0IHRoaXMgbGluayB0aXRsZSBtYXkgY29udGludWUgb24gdGhlIG5leHQgbGluZSAoZm9yIHJlZmVyZW5jZXMpXG4gIHN0YXRlLmNhbl9jb250aW51ZSA9IHRydWVcbiAgc3RhdGUuc3RyICs9IHVuZXNjYXBlQWxsKHN0ci5zbGljZShzdGFydCwgcG9zKSlcbiAgcmV0dXJuIHN0YXRlXG59XG4iLCIvKipcbiAqIGNsYXNzIFJlbmRlcmVyXG4gKlxuICogR2VuZXJhdGVzIEhUTUwgZnJvbSBwYXJzZWQgdG9rZW4gc3RyZWFtLiBFYWNoIGluc3RhbmNlIGhhcyBpbmRlcGVuZGVudFxuICogY29weSBvZiBydWxlcy4gVGhvc2UgY2FuIGJlIHJld3JpdHRlbiB3aXRoIGVhc2UuIEFsc28sIHlvdSBjYW4gYWRkIG5ld1xuICogcnVsZXMgaWYgeW91IGNyZWF0ZSBwbHVnaW4gYW5kIGFkZHMgbmV3IHRva2VuIHR5cGVzLlxuICoqL1xuXG5pbXBvcnQgeyBhc3NpZ24sIHVuZXNjYXBlQWxsLCBlc2NhcGVIdG1sIH0gZnJvbSAnLi9jb21tb24vdXRpbHMubWpzJ1xuXG5jb25zdCBkZWZhdWx0X3J1bGVzID0ge31cblxuZGVmYXVsdF9ydWxlcy5jb2RlX2lubGluZSA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzbGYpIHtcbiAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaWR4XVxuXG4gIHJldHVybiAgJzxjb2RlJyArIHNsZi5yZW5kZXJBdHRycyh0b2tlbikgKyAnPicgK1xuICAgICAgICAgIGVzY2FwZUh0bWwodG9rZW4uY29udGVudCkgK1xuICAgICAgICAgICc8L2NvZGU+J1xufVxuXG5kZWZhdWx0X3J1bGVzLmNvZGVfYmxvY2sgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2xmKSB7XG4gIGNvbnN0IHRva2VuID0gdG9rZW5zW2lkeF1cblxuICByZXR1cm4gICc8cHJlJyArIHNsZi5yZW5kZXJBdHRycyh0b2tlbikgKyAnPjxjb2RlPicgK1xuICAgICAgICAgIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uY29udGVudCkgK1xuICAgICAgICAgICc8L2NvZGU+PC9wcmU+XFxuJ1xufVxuXG5kZWZhdWx0X3J1bGVzLmZlbmNlID0gZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHNsZikge1xuICBjb25zdCB0b2tlbiA9IHRva2Vuc1tpZHhdXG4gIGNvbnN0IGluZm8gPSB0b2tlbi5pbmZvID8gdW5lc2NhcGVBbGwodG9rZW4uaW5mbykudHJpbSgpIDogJydcbiAgbGV0IGxhbmdOYW1lID0gJydcbiAgbGV0IGxhbmdBdHRycyA9ICcnXG5cbiAgaWYgKGluZm8pIHtcbiAgICBjb25zdCBhcnIgPSBpbmZvLnNwbGl0KC8oXFxzKykvZylcbiAgICBsYW5nTmFtZSA9IGFyclswXVxuICAgIGxhbmdBdHRycyA9IGFyci5zbGljZSgyKS5qb2luKCcnKVxuICB9XG5cbiAgbGV0IGhpZ2hsaWdodGVkXG4gIGlmIChvcHRpb25zLmhpZ2hsaWdodCkge1xuICAgIGhpZ2hsaWdodGVkID0gb3B0aW9ucy5oaWdobGlnaHQodG9rZW4uY29udGVudCwgbGFuZ05hbWUsIGxhbmdBdHRycykgfHwgZXNjYXBlSHRtbCh0b2tlbi5jb250ZW50KVxuICB9IGVsc2Uge1xuICAgIGhpZ2hsaWdodGVkID0gZXNjYXBlSHRtbCh0b2tlbi5jb250ZW50KVxuICB9XG5cbiAgaWYgKGhpZ2hsaWdodGVkLmluZGV4T2YoJzxwcmUnKSA9PT0gMCkge1xuICAgIHJldHVybiBoaWdobGlnaHRlZCArICdcXG4nXG4gIH1cblxuICAvLyBJZiBsYW5ndWFnZSBleGlzdHMsIGluamVjdCBjbGFzcyBnZW50bHksIHdpdGhvdXQgbW9kaWZ5aW5nIG9yaWdpbmFsIHRva2VuLlxuICAvLyBNYXkgYmUsIG9uZSBkYXkgd2Ugd2lsbCBhZGQgLmRlZXBDbG9uZSgpIGZvciB0b2tlbiBhbmQgc2ltcGxpZnkgdGhpcyBwYXJ0LCBidXRcbiAgLy8gbm93IHdlIHByZWZlciB0byBrZWVwIHRoaW5ncyBsb2NhbC5cbiAgaWYgKGluZm8pIHtcbiAgICBjb25zdCBpID0gdG9rZW4uYXR0ckluZGV4KCdjbGFzcycpXG4gICAgY29uc3QgdG1wQXR0cnMgPSB0b2tlbi5hdHRycyA/IHRva2VuLmF0dHJzLnNsaWNlKCkgOiBbXVxuXG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICB0bXBBdHRycy5wdXNoKFsnY2xhc3MnLCBvcHRpb25zLmxhbmdQcmVmaXggKyBsYW5nTmFtZV0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcEF0dHJzW2ldID0gdG1wQXR0cnNbaV0uc2xpY2UoKVxuICAgICAgdG1wQXR0cnNbaV1bMV0gKz0gJyAnICsgb3B0aW9ucy5sYW5nUHJlZml4ICsgbGFuZ05hbWVcbiAgICB9XG5cbiAgICAvLyBGYWtlIHRva2VuIGp1c3QgdG8gcmVuZGVyIGF0dHJpYnV0ZXNcbiAgICBjb25zdCB0bXBUb2tlbiA9IHtcbiAgICAgIGF0dHJzOiB0bXBBdHRyc1xuICAgIH1cblxuICAgIHJldHVybiBgPHByZT48Y29kZSR7c2xmLnJlbmRlckF0dHJzKHRtcFRva2VuKX0+JHtoaWdobGlnaHRlZH08L2NvZGU+PC9wcmU+XFxuYFxuICB9XG5cbiAgcmV0dXJuIGA8cHJlPjxjb2RlJHtzbGYucmVuZGVyQXR0cnModG9rZW4pfT4ke2hpZ2hsaWdodGVkfTwvY29kZT48L3ByZT5cXG5gXG59XG5cbmRlZmF1bHRfcnVsZXMuaW1hZ2UgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2xmKSB7XG4gIGNvbnN0IHRva2VuID0gdG9rZW5zW2lkeF1cblxuICAvLyBcImFsdFwiIGF0dHIgTVVTVCBiZSBzZXQsIGV2ZW4gaWYgZW1wdHkuIEJlY2F1c2UgaXQncyBtYW5kYXRvcnkgYW5kXG4gIC8vIHNob3VsZCBiZSBwbGFjZWQgb24gcHJvcGVyIHBvc2l0aW9uIGZvciB0ZXN0cy5cbiAgLy9cbiAgLy8gUmVwbGFjZSBjb250ZW50IHdpdGggYWN0dWFsIHZhbHVlXG5cbiAgdG9rZW4uYXR0cnNbdG9rZW4uYXR0ckluZGV4KCdhbHQnKV1bMV0gPVxuICAgIHNsZi5yZW5kZXJJbmxpbmVBc1RleHQodG9rZW4uY2hpbGRyZW4sIG9wdGlvbnMsIGVudilcblxuICByZXR1cm4gc2xmLnJlbmRlclRva2VuKHRva2VucywgaWR4LCBvcHRpb25zKVxufVxuXG5kZWZhdWx0X3J1bGVzLmhhcmRicmVhayA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCwgb3B0aW9ucyAvKiwgZW52ICovKSB7XG4gIHJldHVybiBvcHRpb25zLnhodG1sT3V0ID8gJzxiciAvPlxcbicgOiAnPGJyPlxcbidcbn1cbmRlZmF1bHRfcnVsZXMuc29mdGJyZWFrID0gZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zIC8qLCBlbnYgKi8pIHtcbiAgcmV0dXJuIG9wdGlvbnMuYnJlYWtzID8gKG9wdGlvbnMueGh0bWxPdXQgPyAnPGJyIC8+XFxuJyA6ICc8YnI+XFxuJykgOiAnXFxuJ1xufVxuXG5kZWZhdWx0X3J1bGVzLnRleHQgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gZXNjYXBlSHRtbCh0b2tlbnNbaWR4XS5jb250ZW50KVxufVxuXG5kZWZhdWx0X3J1bGVzLmh0bWxfYmxvY2sgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gdG9rZW5zW2lkeF0uY29udGVudFxufVxuZGVmYXVsdF9ydWxlcy5odG1sX2lubGluZSA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiB0b2tlbnNbaWR4XS5jb250ZW50XG59XG5cbi8qKlxuICogbmV3IFJlbmRlcmVyKClcbiAqXG4gKiBDcmVhdGVzIG5ldyBbW1JlbmRlcmVyXV0gaW5zdGFuY2UgYW5kIGZpbGwgW1tSZW5kZXJlciNydWxlc11dIHdpdGggZGVmYXVsdHMuXG4gKiovXG5mdW5jdGlvbiBSZW5kZXJlciAoKSB7XG4gIC8qKlxuICAgKiBSZW5kZXJlciNydWxlcyAtPiBPYmplY3RcbiAgICpcbiAgICogQ29udGFpbnMgcmVuZGVyIHJ1bGVzIGZvciB0b2tlbnMuIENhbiBiZSB1cGRhdGVkIGFuZCBleHRlbmRlZC5cbiAgICpcbiAgICogIyMjIyMgRXhhbXBsZVxuICAgKlxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0JykoKTtcbiAgICpcbiAgICogbWQucmVuZGVyZXIucnVsZXMuc3Ryb25nX29wZW4gID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJzxiPic7IH07XG4gICAqIG1kLnJlbmRlcmVyLnJ1bGVzLnN0cm9uZ19jbG9zZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICc8L2I+JzsgfTtcbiAgICpcbiAgICogdmFyIHJlc3VsdCA9IG1kLnJlbmRlcklubGluZSguLi4pO1xuICAgKiBgYGBcbiAgICpcbiAgICogRWFjaCBydWxlIGlzIGNhbGxlZCBhcyBpbmRlcGVuZGVudCBzdGF0aWMgZnVuY3Rpb24gd2l0aCBmaXhlZCBzaWduYXR1cmU6XG4gICAqXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogZnVuY3Rpb24gbXlfdG9rZW5fcmVuZGVyKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHJlbmRlcmVyKSB7XG4gICAqICAgLy8gLi4uXG4gICAqICAgcmV0dXJuIHJlbmRlcmVkSFRNTDtcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogU2VlIFtzb3VyY2UgY29kZV0oaHR0cHM6Ly9naXRodWIuY29tL21hcmtkb3duLWl0L21hcmtkb3duLWl0L2Jsb2IvbWFzdGVyL2xpYi9yZW5kZXJlci5tanMpXG4gICAqIGZvciBtb3JlIGRldGFpbHMgYW5kIGV4YW1wbGVzLlxuICAgKiovXG4gIHRoaXMucnVsZXMgPSBhc3NpZ24oe30sIGRlZmF1bHRfcnVsZXMpXG59XG5cbi8qKlxuICogUmVuZGVyZXIucmVuZGVyQXR0cnModG9rZW4pIC0+IFN0cmluZ1xuICpcbiAqIFJlbmRlciB0b2tlbiBhdHRyaWJ1dGVzIHRvIHN0cmluZy5cbiAqKi9cblJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJBdHRycyA9IGZ1bmN0aW9uIHJlbmRlckF0dHJzICh0b2tlbikge1xuICBsZXQgaSwgbCwgcmVzdWx0XG5cbiAgaWYgKCF0b2tlbi5hdHRycykgeyByZXR1cm4gJycgfVxuXG4gIHJlc3VsdCA9ICcnXG5cbiAgZm9yIChpID0gMCwgbCA9IHRva2VuLmF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHJlc3VsdCArPSAnICcgKyBlc2NhcGVIdG1sKHRva2VuLmF0dHJzW2ldWzBdKSArICc9XCInICsgZXNjYXBlSHRtbCh0b2tlbi5hdHRyc1tpXVsxXSkgKyAnXCInXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogUmVuZGVyZXIucmVuZGVyVG9rZW4odG9rZW5zLCBpZHgsIG9wdGlvbnMpIC0+IFN0cmluZ1xuICogLSB0b2tlbnMgKEFycmF5KTogbGlzdCBvZiB0b2tlbnNcbiAqIC0gaWR4IChOdW1iZWQpOiB0b2tlbiBpbmRleCB0byByZW5kZXJcbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogcGFyYW1zIG9mIHBhcnNlciBpbnN0YW5jZVxuICpcbiAqIERlZmF1bHQgdG9rZW4gcmVuZGVyZXIuIENhbiBiZSBvdmVycmlkZW4gYnkgY3VzdG9tIGZ1bmN0aW9uXG4gKiBpbiBbW1JlbmRlcmVyI3J1bGVzXV0uXG4gKiovXG5SZW5kZXJlci5wcm90b3R5cGUucmVuZGVyVG9rZW4gPSBmdW5jdGlvbiByZW5kZXJUb2tlbiAodG9rZW5zLCBpZHgsIG9wdGlvbnMpIHtcbiAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaWR4XVxuICBsZXQgcmVzdWx0ID0gJydcblxuICAvLyBUaWdodCBsaXN0IHBhcmFncmFwaHNcbiAgaWYgKHRva2VuLmhpZGRlbikge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gSW5zZXJ0IGEgbmV3bGluZSBiZXR3ZWVuIGhpZGRlbiBwYXJhZ3JhcGggYW5kIHN1YnNlcXVlbnQgb3BlbmluZ1xuICAvLyBibG9jay1sZXZlbCB0YWcuXG4gIC8vXG4gIC8vIEZvciBleGFtcGxlLCBoZXJlIHdlIHNob3VsZCBpbnNlcnQgYSBuZXdsaW5lIGJlZm9yZSBibG9ja3F1b3RlOlxuICAvLyAgLSBhXG4gIC8vICAgID5cbiAgLy9cbiAgaWYgKHRva2VuLmJsb2NrICYmIHRva2VuLm5lc3RpbmcgIT09IC0xICYmIGlkeCAmJiB0b2tlbnNbaWR4IC0gMV0uaGlkZGVuKSB7XG4gICAgcmVzdWx0ICs9ICdcXG4nXG4gIH1cblxuICAvLyBBZGQgdG9rZW4gbmFtZSwgZS5nLiBgPGltZ2BcbiAgcmVzdWx0ICs9ICh0b2tlbi5uZXN0aW5nID09PSAtMSA/ICc8LycgOiAnPCcpICsgdG9rZW4udGFnXG5cbiAgLy8gRW5jb2RlIGF0dHJpYnV0ZXMsIGUuZy4gYDxpbWcgc3JjPVwiZm9vXCJgXG4gIHJlc3VsdCArPSB0aGlzLnJlbmRlckF0dHJzKHRva2VuKVxuXG4gIC8vIEFkZCBhIHNsYXNoIGZvciBzZWxmLWNsb3NpbmcgdGFncywgZS5nLiBgPGltZyBzcmM9XCJmb29cIiAvYFxuICBpZiAodG9rZW4ubmVzdGluZyA9PT0gMCAmJiBvcHRpb25zLnhodG1sT3V0KSB7XG4gICAgcmVzdWx0ICs9ICcgLydcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gYWRkIGEgbmV3bGluZSBhZnRlciB0aGlzIHRhZ1xuICBsZXQgbmVlZExmID0gZmFsc2VcbiAgaWYgKHRva2VuLmJsb2NrKSB7XG4gICAgbmVlZExmID0gdHJ1ZVxuXG4gICAgaWYgKHRva2VuLm5lc3RpbmcgPT09IDEpIHtcbiAgICAgIGlmIChpZHggKyAxIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBuZXh0VG9rZW4gPSB0b2tlbnNbaWR4ICsgMV1cblxuICAgICAgICBpZiAobmV4dFRva2VuLnR5cGUgPT09ICdpbmxpbmUnIHx8IG5leHRUb2tlbi5oaWRkZW4pIHtcbiAgICAgICAgICAvLyBCbG9jay1sZXZlbCB0YWcgY29udGFpbmluZyBhbiBpbmxpbmUgdGFnLlxuICAgICAgICAgIC8vXG4gICAgICAgICAgbmVlZExmID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0VG9rZW4ubmVzdGluZyA9PT0gLTEgJiYgbmV4dFRva2VuLnRhZyA9PT0gdG9rZW4udGFnKSB7XG4gICAgICAgICAgLy8gT3BlbmluZyB0YWcgKyBjbG9zaW5nIHRhZyBvZiB0aGUgc2FtZSB0eXBlLiBFLmcuIGA8bGk+PC9saT5gLlxuICAgICAgICAgIC8vXG4gICAgICAgICAgbmVlZExmID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc3VsdCArPSBuZWVkTGYgPyAnPlxcbicgOiAnPidcblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogUmVuZGVyZXIucmVuZGVySW5saW5lKHRva2Vucywgb3B0aW9ucywgZW52KSAtPiBTdHJpbmdcbiAqIC0gdG9rZW5zIChBcnJheSk6IGxpc3Qgb24gYmxvY2sgdG9rZW5zIHRvIHJlbmRlclxuICogLSBvcHRpb25zIChPYmplY3QpOiBwYXJhbXMgb2YgcGFyc2VyIGluc3RhbmNlXG4gKiAtIGVudiAoT2JqZWN0KTogYWRkaXRpb25hbCBkYXRhIGZyb20gcGFyc2VkIGlucHV0IChyZWZlcmVuY2VzLCBmb3IgZXhhbXBsZSlcbiAqXG4gKiBUaGUgc2FtZSBhcyBbW1JlbmRlcmVyLnJlbmRlcl1dLCBidXQgZm9yIHNpbmdsZSB0b2tlbiBvZiBgaW5saW5lYCB0eXBlLlxuICoqL1xuUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlcklubGluZSA9IGZ1bmN0aW9uICh0b2tlbnMsIG9wdGlvbnMsIGVudikge1xuICBsZXQgcmVzdWx0ID0gJydcbiAgY29uc3QgcnVsZXMgPSB0aGlzLnJ1bGVzXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRva2Vucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHR5cGUgPSB0b2tlbnNbaV0udHlwZVxuXG4gICAgaWYgKHR5cGVvZiBydWxlc1t0eXBlXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlc3VsdCArPSBydWxlc1t0eXBlXSh0b2tlbnMsIGksIG9wdGlvbnMsIGVudiwgdGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ICs9IHRoaXMucmVuZGVyVG9rZW4odG9rZW5zLCBpLCBvcHRpb25zKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqIGludGVybmFsXG4gKiBSZW5kZXJlci5yZW5kZXJJbmxpbmVBc1RleHQodG9rZW5zLCBvcHRpb25zLCBlbnYpIC0+IFN0cmluZ1xuICogLSB0b2tlbnMgKEFycmF5KTogbGlzdCBvbiBibG9jayB0b2tlbnMgdG8gcmVuZGVyXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHBhcmFtcyBvZiBwYXJzZXIgaW5zdGFuY2VcbiAqIC0gZW52IChPYmplY3QpOiBhZGRpdGlvbmFsIGRhdGEgZnJvbSBwYXJzZWQgaW5wdXQgKHJlZmVyZW5jZXMsIGZvciBleGFtcGxlKVxuICpcbiAqIFNwZWNpYWwga2x1ZGdlIGZvciBpbWFnZSBgYWx0YCBhdHRyaWJ1dGVzIHRvIGNvbmZvcm0gQ29tbW9uTWFyayBzcGVjLlxuICogRG9uJ3QgdHJ5IHRvIHVzZSBpdCEgU3BlYyByZXF1aXJlcyB0byBzaG93IGBhbHRgIGNvbnRlbnQgd2l0aCBzdHJpcHBlZCBtYXJrdXAsXG4gKiBpbnN0ZWFkIG9mIHNpbXBsZSBlc2NhcGluZy5cbiAqKi9cblJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJJbmxpbmVBc1RleHQgPSBmdW5jdGlvbiAodG9rZW5zLCBvcHRpb25zLCBlbnYpIHtcbiAgbGV0IHJlc3VsdCA9ICcnXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRva2Vucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHN3aXRjaCAodG9rZW5zW2ldLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICByZXN1bHQgKz0gdG9rZW5zW2ldLmNvbnRlbnRcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2ltYWdlJzpcbiAgICAgICAgcmVzdWx0ICs9IHRoaXMucmVuZGVySW5saW5lQXNUZXh0KHRva2Vuc1tpXS5jaGlsZHJlbiwgb3B0aW9ucywgZW52KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnaHRtbF9pbmxpbmUnOlxuICAgICAgY2FzZSAnaHRtbF9ibG9jayc6XG4gICAgICAgIHJlc3VsdCArPSB0b2tlbnNbaV0uY29udGVudFxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc29mdGJyZWFrJzpcbiAgICAgIGNhc2UgJ2hhcmRicmVhayc6XG4gICAgICAgIHJlc3VsdCArPSAnXFxuJ1xuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gYWxsIG90aGVyIHRva2VucyBhcmUgc2tpcHBlZFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBSZW5kZXJlci5yZW5kZXIodG9rZW5zLCBvcHRpb25zLCBlbnYpIC0+IFN0cmluZ1xuICogLSB0b2tlbnMgKEFycmF5KTogbGlzdCBvbiBibG9jayB0b2tlbnMgdG8gcmVuZGVyXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHBhcmFtcyBvZiBwYXJzZXIgaW5zdGFuY2VcbiAqIC0gZW52IChPYmplY3QpOiBhZGRpdGlvbmFsIGRhdGEgZnJvbSBwYXJzZWQgaW5wdXQgKHJlZmVyZW5jZXMsIGZvciBleGFtcGxlKVxuICpcbiAqIFRha2VzIHRva2VuIHN0cmVhbSBhbmQgZ2VuZXJhdGVzIEhUTUwuIFByb2JhYmx5LCB5b3Ugd2lsbCBuZXZlciBuZWVkIHRvIGNhbGxcbiAqIHRoaXMgbWV0aG9kIGRpcmVjdGx5LlxuICoqL1xuUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICh0b2tlbnMsIG9wdGlvbnMsIGVudikge1xuICBsZXQgcmVzdWx0ID0gJydcbiAgY29uc3QgcnVsZXMgPSB0aGlzLnJ1bGVzXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRva2Vucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHR5cGUgPSB0b2tlbnNbaV0udHlwZVxuXG4gICAgaWYgKHR5cGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICByZXN1bHQgKz0gdGhpcy5yZW5kZXJJbmxpbmUodG9rZW5zW2ldLmNoaWxkcmVuLCBvcHRpb25zLCBlbnYpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcnVsZXNbdHlwZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXN1bHQgKz0gcnVsZXNbdHlwZV0odG9rZW5zLCBpLCBvcHRpb25zLCBlbnYsIHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCArPSB0aGlzLnJlbmRlclRva2VuKHRva2VucywgaSwgb3B0aW9ucywgZW52KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXJcbiIsIi8qKlxuICogY2xhc3MgUnVsZXJcbiAqXG4gKiBIZWxwZXIgY2xhc3MsIHVzZWQgYnkgW1tNYXJrZG93bkl0I2NvcmVdXSwgW1tNYXJrZG93bkl0I2Jsb2NrXV0gYW5kXG4gKiBbW01hcmtkb3duSXQjaW5saW5lXV0gdG8gbWFuYWdlIHNlcXVlbmNlcyBvZiBmdW5jdGlvbnMgKHJ1bGVzKTpcbiAqXG4gKiAtIGtlZXAgcnVsZXMgaW4gZGVmaW5lZCBvcmRlclxuICogLSBhc3NpZ24gdGhlIG5hbWUgdG8gZWFjaCBydWxlXG4gKiAtIGVuYWJsZS9kaXNhYmxlIHJ1bGVzXG4gKiAtIGFkZC9yZXBsYWNlIHJ1bGVzXG4gKiAtIGFsbG93IGFzc2lnbiBydWxlcyB0byBhZGRpdGlvbmFsIG5hbWVkIGNoYWlucyAoaW4gdGhlIHNhbWUpXG4gKiAtIGNhY2hlaW5nIGxpc3RzIG9mIGFjdGl2ZSBydWxlc1xuICpcbiAqIFlvdSB3aWxsIG5vdCBuZWVkIHVzZSB0aGlzIGNsYXNzIGRpcmVjdGx5IHVudGlsIHdyaXRlIHBsdWdpbnMuIEZvciBzaW1wbGVcbiAqIHJ1bGVzIGNvbnRyb2wgdXNlIFtbTWFya2Rvd25JdC5kaXNhYmxlXV0sIFtbTWFya2Rvd25JdC5lbmFibGVdXSBhbmRcbiAqIFtbTWFya2Rvd25JdC51c2VdXS5cbiAqKi9cblxuLyoqXG4gKiBuZXcgUnVsZXIoKVxuICoqL1xuZnVuY3Rpb24gUnVsZXIgKCkge1xuICAvLyBMaXN0IG9mIGFkZGVkIHJ1bGVzLiBFYWNoIGVsZW1lbnQgaXM6XG4gIC8vXG4gIC8vIHtcbiAgLy8gICBuYW1lOiBYWFgsXG4gIC8vICAgZW5hYmxlZDogQm9vbGVhbixcbiAgLy8gICBmbjogRnVuY3Rpb24oKSxcbiAgLy8gICBhbHQ6IFsgbmFtZTIsIG5hbWUzIF1cbiAgLy8gfVxuICAvL1xuICB0aGlzLl9fcnVsZXNfXyA9IFtdXG5cbiAgLy8gQ2FjaGVkIHJ1bGUgY2hhaW5zLlxuICAvL1xuICAvLyBGaXJzdCBsZXZlbCAtIGNoYWluIG5hbWUsICcnIGZvciBkZWZhdWx0LlxuICAvLyBTZWNvbmQgbGV2ZWwgLSBkaWdpbmFsIGFuY2hvciBmb3IgZmFzdCBmaWx0ZXJpbmcgYnkgY2hhcmNvZGVzLlxuICAvL1xuICB0aGlzLl9fY2FjaGVfXyA9IG51bGxcbn1cblxuLy8gSGVscGVyIG1ldGhvZHMsIHNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseVxuXG4vLyBGaW5kIHJ1bGUgaW5kZXggYnkgbmFtZVxuLy9cblJ1bGVyLnByb3RvdHlwZS5fX2ZpbmRfXyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fX3J1bGVzX18ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGhpcy5fX3J1bGVzX19baV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgcmV0dXJuIGlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbi8vIEJ1aWxkIHJ1bGVzIGxvb2t1cCBjYWNoZVxuLy9cblJ1bGVyLnByb3RvdHlwZS5fX2NvbXBpbGVfXyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgY29uc3QgY2hhaW5zID0gWycnXVxuXG4gIC8vIGNvbGxlY3QgdW5pcXVlIG5hbWVzXG4gIHNlbGYuX19ydWxlc19fLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICBpZiAoIXJ1bGUuZW5hYmxlZCkgeyByZXR1cm4gfVxuXG4gICAgcnVsZS5hbHQuZm9yRWFjaChmdW5jdGlvbiAoYWx0TmFtZSkge1xuICAgICAgaWYgKGNoYWlucy5pbmRleE9mKGFsdE5hbWUpIDwgMCkge1xuICAgICAgICBjaGFpbnMucHVzaChhbHROYW1lKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgc2VsZi5fX2NhY2hlX18gPSB7fVxuXG4gIGNoYWlucy5mb3JFYWNoKGZ1bmN0aW9uIChjaGFpbikge1xuICAgIHNlbGYuX19jYWNoZV9fW2NoYWluXSA9IFtdXG4gICAgc2VsZi5fX3J1bGVzX18uZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgaWYgKCFydWxlLmVuYWJsZWQpIHsgcmV0dXJuIH1cblxuICAgICAgaWYgKGNoYWluICYmIHJ1bGUuYWx0LmluZGV4T2YoY2hhaW4pIDwgMCkgeyByZXR1cm4gfVxuXG4gICAgICBzZWxmLl9fY2FjaGVfX1tjaGFpbl0ucHVzaChydWxlLmZuKVxuICAgIH0pXG4gIH0pXG59XG5cbi8qKlxuICogUnVsZXIuYXQobmFtZSwgZm4gWywgb3B0aW9uc10pXG4gKiAtIG5hbWUgKFN0cmluZyk6IHJ1bGUgbmFtZSB0byByZXBsYWNlLlxuICogLSBmbiAoRnVuY3Rpb24pOiBuZXcgcnVsZSBmdW5jdGlvbi5cbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogbmV3IHJ1bGUgb3B0aW9ucyAobm90IG1hbmRhdG9yeSkuXG4gKlxuICogUmVwbGFjZSBydWxlIGJ5IG5hbWUgd2l0aCBuZXcgZnVuY3Rpb24gJiBvcHRpb25zLiBUaHJvd3MgZXJyb3IgaWYgbmFtZSBub3RcbiAqIGZvdW5kLlxuICpcbiAqICMjIyMjIE9wdGlvbnM6XG4gKlxuICogLSBfX2FsdF9fIC0gYXJyYXkgd2l0aCBuYW1lcyBvZiBcImFsdGVybmF0ZVwiIGNoYWlucy5cbiAqXG4gKiAjIyMjIyBFeGFtcGxlXG4gKlxuICogUmVwbGFjZSBleGlzdGluZyB0eXBvZ3JhcGhlciByZXBsYWNlbWVudCBydWxlIHdpdGggbmV3IG9uZTpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKCk7XG4gKlxuICogbWQuY29yZS5ydWxlci5hdCgncmVwbGFjZW1lbnRzJywgZnVuY3Rpb24gcmVwbGFjZShzdGF0ZSkge1xuICogICAvLy4uLlxuICogfSk7XG4gKiBgYGBcbiAqKi9cblJ1bGVyLnByb3RvdHlwZS5hdCA9IGZ1bmN0aW9uIChuYW1lLCBmbiwgb3B0aW9ucykge1xuICBjb25zdCBpbmRleCA9IHRoaXMuX19maW5kX18obmFtZSlcbiAgY29uc3Qgb3B0ID0gb3B0aW9ucyB8fCB7fVxuXG4gIGlmIChpbmRleCA9PT0gLTEpIHsgdGhyb3cgbmV3IEVycm9yKCdQYXJzZXIgcnVsZSBub3QgZm91bmQ6ICcgKyBuYW1lKSB9XG5cbiAgdGhpcy5fX3J1bGVzX19baW5kZXhdLmZuID0gZm5cbiAgdGhpcy5fX3J1bGVzX19baW5kZXhdLmFsdCA9IG9wdC5hbHQgfHwgW11cbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsXG59XG5cbi8qKlxuICogUnVsZXIuYmVmb3JlKGJlZm9yZU5hbWUsIHJ1bGVOYW1lLCBmbiBbLCBvcHRpb25zXSlcbiAqIC0gYmVmb3JlTmFtZSAoU3RyaW5nKTogbmV3IHJ1bGUgd2lsbCBiZSBhZGRlZCBiZWZvcmUgdGhpcyBvbmUuXG4gKiAtIHJ1bGVOYW1lIChTdHJpbmcpOiBuYW1lIG9mIGFkZGVkIHJ1bGUuXG4gKiAtIGZuIChGdW5jdGlvbik6IHJ1bGUgZnVuY3Rpb24uXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHJ1bGUgb3B0aW9ucyAobm90IG1hbmRhdG9yeSkuXG4gKlxuICogQWRkIG5ldyBydWxlIHRvIGNoYWluIGJlZm9yZSBvbmUgd2l0aCBnaXZlbiBuYW1lLiBTZWUgYWxzb1xuICogW1tSdWxlci5hZnRlcl1dLCBbW1J1bGVyLnB1c2hdXS5cbiAqXG4gKiAjIyMjIyBPcHRpb25zOlxuICpcbiAqIC0gX19hbHRfXyAtIGFycmF5IHdpdGggbmFtZXMgb2YgXCJhbHRlcm5hdGVcIiBjaGFpbnMuXG4gKlxuICogIyMjIyMgRXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0JykoKTtcbiAqXG4gKiBtZC5ibG9jay5ydWxlci5iZWZvcmUoJ3BhcmFncmFwaCcsICdteV9ydWxlJywgZnVuY3Rpb24gcmVwbGFjZShzdGF0ZSkge1xuICogICAvLy4uLlxuICogfSk7XG4gKiBgYGBcbiAqKi9cblJ1bGVyLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbiAoYmVmb3JlTmFtZSwgcnVsZU5hbWUsIGZuLCBvcHRpb25zKSB7XG4gIGNvbnN0IGluZGV4ID0gdGhpcy5fX2ZpbmRfXyhiZWZvcmVOYW1lKVxuICBjb25zdCBvcHQgPSBvcHRpb25zIHx8IHt9XG5cbiAgaWYgKGluZGV4ID09PSAtMSkgeyB0aHJvdyBuZXcgRXJyb3IoJ1BhcnNlciBydWxlIG5vdCBmb3VuZDogJyArIGJlZm9yZU5hbWUpIH1cblxuICB0aGlzLl9fcnVsZXNfXy5zcGxpY2UoaW5kZXgsIDAsIHtcbiAgICBuYW1lOiBydWxlTmFtZSxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIGZuLFxuICAgIGFsdDogb3B0LmFsdCB8fCBbXVxuICB9KVxuXG4gIHRoaXMuX19jYWNoZV9fID0gbnVsbFxufVxuXG4vKipcbiAqIFJ1bGVyLmFmdGVyKGFmdGVyTmFtZSwgcnVsZU5hbWUsIGZuIFssIG9wdGlvbnNdKVxuICogLSBhZnRlck5hbWUgKFN0cmluZyk6IG5ldyBydWxlIHdpbGwgYmUgYWRkZWQgYWZ0ZXIgdGhpcyBvbmUuXG4gKiAtIHJ1bGVOYW1lIChTdHJpbmcpOiBuYW1lIG9mIGFkZGVkIHJ1bGUuXG4gKiAtIGZuIChGdW5jdGlvbik6IHJ1bGUgZnVuY3Rpb24uXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHJ1bGUgb3B0aW9ucyAobm90IG1hbmRhdG9yeSkuXG4gKlxuICogQWRkIG5ldyBydWxlIHRvIGNoYWluIGFmdGVyIG9uZSB3aXRoIGdpdmVuIG5hbWUuIFNlZSBhbHNvXG4gKiBbW1J1bGVyLmJlZm9yZV1dLCBbW1J1bGVyLnB1c2hdXS5cbiAqXG4gKiAjIyMjIyBPcHRpb25zOlxuICpcbiAqIC0gX19hbHRfXyAtIGFycmF5IHdpdGggbmFtZXMgb2YgXCJhbHRlcm5hdGVcIiBjaGFpbnMuXG4gKlxuICogIyMjIyMgRXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0JykoKTtcbiAqXG4gKiBtZC5pbmxpbmUucnVsZXIuYWZ0ZXIoJ3RleHQnLCAnbXlfcnVsZScsIGZ1bmN0aW9uIHJlcGxhY2Uoc3RhdGUpIHtcbiAqICAgLy8uLi5cbiAqIH0pO1xuICogYGBgXG4gKiovXG5SdWxlci5wcm90b3R5cGUuYWZ0ZXIgPSBmdW5jdGlvbiAoYWZ0ZXJOYW1lLCBydWxlTmFtZSwgZm4sIG9wdGlvbnMpIHtcbiAgY29uc3QgaW5kZXggPSB0aGlzLl9fZmluZF9fKGFmdGVyTmFtZSlcbiAgY29uc3Qgb3B0ID0gb3B0aW9ucyB8fCB7fVxuXG4gIGlmIChpbmRleCA9PT0gLTEpIHsgdGhyb3cgbmV3IEVycm9yKCdQYXJzZXIgcnVsZSBub3QgZm91bmQ6ICcgKyBhZnRlck5hbWUpIH1cblxuICB0aGlzLl9fcnVsZXNfXy5zcGxpY2UoaW5kZXggKyAxLCAwLCB7XG4gICAgbmFtZTogcnVsZU5hbWUsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBmbixcbiAgICBhbHQ6IG9wdC5hbHQgfHwgW11cbiAgfSlcblxuICB0aGlzLl9fY2FjaGVfXyA9IG51bGxcbn1cblxuLyoqXG4gKiBSdWxlci5wdXNoKHJ1bGVOYW1lLCBmbiBbLCBvcHRpb25zXSlcbiAqIC0gcnVsZU5hbWUgKFN0cmluZyk6IG5hbWUgb2YgYWRkZWQgcnVsZS5cbiAqIC0gZm4gKEZ1bmN0aW9uKTogcnVsZSBmdW5jdGlvbi5cbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogcnVsZSBvcHRpb25zIChub3QgbWFuZGF0b3J5KS5cbiAqXG4gKiBQdXNoIG5ldyBydWxlIHRvIHRoZSBlbmQgb2YgY2hhaW4uIFNlZSBhbHNvXG4gKiBbW1J1bGVyLmJlZm9yZV1dLCBbW1J1bGVyLmFmdGVyXV0uXG4gKlxuICogIyMjIyMgT3B0aW9uczpcbiAqXG4gKiAtIF9fYWx0X18gLSBhcnJheSB3aXRoIG5hbWVzIG9mIFwiYWx0ZXJuYXRlXCIgY2hhaW5zLlxuICpcbiAqICMjIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKCk7XG4gKlxuICogbWQuY29yZS5ydWxlci5wdXNoKCdteV9ydWxlJywgZnVuY3Rpb24gcmVwbGFjZShzdGF0ZSkge1xuICogICAvLy4uLlxuICogfSk7XG4gKiBgYGBcbiAqKi9cblJ1bGVyLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKHJ1bGVOYW1lLCBmbiwgb3B0aW9ucykge1xuICBjb25zdCBvcHQgPSBvcHRpb25zIHx8IHt9XG5cbiAgdGhpcy5fX3J1bGVzX18ucHVzaCh7XG4gICAgbmFtZTogcnVsZU5hbWUsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBmbixcbiAgICBhbHQ6IG9wdC5hbHQgfHwgW11cbiAgfSlcblxuICB0aGlzLl9fY2FjaGVfXyA9IG51bGxcbn1cblxuLyoqXG4gKiBSdWxlci5lbmFibGUobGlzdCBbLCBpZ25vcmVJbnZhbGlkXSkgLT4gQXJyYXlcbiAqIC0gbGlzdCAoU3RyaW5nfEFycmF5KTogbGlzdCBvZiBydWxlIG5hbWVzIHRvIGVuYWJsZS5cbiAqIC0gaWdub3JlSW52YWxpZCAoQm9vbGVhbik6IHNldCBgdHJ1ZWAgdG8gaWdub3JlIGVycm9ycyB3aGVuIHJ1bGUgbm90IGZvdW5kLlxuICpcbiAqIEVuYWJsZSBydWxlcyB3aXRoIGdpdmVuIG5hbWVzLiBJZiBhbnkgcnVsZSBuYW1lIG5vdCBmb3VuZCAtIHRocm93IEVycm9yLlxuICogRXJyb3JzIGNhbiBiZSBkaXNhYmxlZCBieSBzZWNvbmQgcGFyYW0uXG4gKlxuICogUmV0dXJucyBsaXN0IG9mIGZvdW5kIHJ1bGUgbmFtZXMgKGlmIG5vIGV4Y2VwdGlvbiBoYXBwZW5lZCkuXG4gKlxuICogU2VlIGFsc28gW1tSdWxlci5kaXNhYmxlXV0sIFtbUnVsZXIuZW5hYmxlT25seV1dLlxuICoqL1xuUnVsZXIucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uIChsaXN0LCBpZ25vcmVJbnZhbGlkKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkgeyBsaXN0ID0gW2xpc3RdIH1cblxuICBjb25zdCByZXN1bHQgPSBbXVxuXG4gIC8vIFNlYXJjaCBieSBuYW1lIGFuZCBlbmFibGVcbiAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5fX2ZpbmRfXyhuYW1lKVxuXG4gICAgaWYgKGlkeCA8IDApIHtcbiAgICAgIGlmIChpZ25vcmVJbnZhbGlkKSB7IHJldHVybiB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1J1bGVzIG1hbmFnZXI6IGludmFsaWQgcnVsZSBuYW1lICcgKyBuYW1lKVxuICAgIH1cbiAgICB0aGlzLl9fcnVsZXNfX1tpZHhdLmVuYWJsZWQgPSB0cnVlXG4gICAgcmVzdWx0LnB1c2gobmFtZSlcbiAgfSwgdGhpcylcblxuICB0aGlzLl9fY2FjaGVfXyA9IG51bGxcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIFJ1bGVyLmVuYWJsZU9ubHkobGlzdCBbLCBpZ25vcmVJbnZhbGlkXSlcbiAqIC0gbGlzdCAoU3RyaW5nfEFycmF5KTogbGlzdCBvZiBydWxlIG5hbWVzIHRvIGVuYWJsZSAod2hpdGVsaXN0KS5cbiAqIC0gaWdub3JlSW52YWxpZCAoQm9vbGVhbik6IHNldCBgdHJ1ZWAgdG8gaWdub3JlIGVycm9ycyB3aGVuIHJ1bGUgbm90IGZvdW5kLlxuICpcbiAqIEVuYWJsZSBydWxlcyB3aXRoIGdpdmVuIG5hbWVzLCBhbmQgZGlzYWJsZSBldmVyeXRoaW5nIGVsc2UuIElmIGFueSBydWxlIG5hbWVcbiAqIG5vdCBmb3VuZCAtIHRocm93IEVycm9yLiBFcnJvcnMgY2FuIGJlIGRpc2FibGVkIGJ5IHNlY29uZCBwYXJhbS5cbiAqXG4gKiBTZWUgYWxzbyBbW1J1bGVyLmRpc2FibGVdXSwgW1tSdWxlci5lbmFibGVdXS5cbiAqKi9cblJ1bGVyLnByb3RvdHlwZS5lbmFibGVPbmx5ID0gZnVuY3Rpb24gKGxpc3QsIGlnbm9yZUludmFsaWQpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7IGxpc3QgPSBbbGlzdF0gfVxuXG4gIHRoaXMuX19ydWxlc19fLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHsgcnVsZS5lbmFibGVkID0gZmFsc2UgfSlcblxuICB0aGlzLmVuYWJsZShsaXN0LCBpZ25vcmVJbnZhbGlkKVxufVxuXG4vKipcbiAqIFJ1bGVyLmRpc2FibGUobGlzdCBbLCBpZ25vcmVJbnZhbGlkXSkgLT4gQXJyYXlcbiAqIC0gbGlzdCAoU3RyaW5nfEFycmF5KTogbGlzdCBvZiBydWxlIG5hbWVzIHRvIGRpc2FibGUuXG4gKiAtIGlnbm9yZUludmFsaWQgKEJvb2xlYW4pOiBzZXQgYHRydWVgIHRvIGlnbm9yZSBlcnJvcnMgd2hlbiBydWxlIG5vdCBmb3VuZC5cbiAqXG4gKiBEaXNhYmxlIHJ1bGVzIHdpdGggZ2l2ZW4gbmFtZXMuIElmIGFueSBydWxlIG5hbWUgbm90IGZvdW5kIC0gdGhyb3cgRXJyb3IuXG4gKiBFcnJvcnMgY2FuIGJlIGRpc2FibGVkIGJ5IHNlY29uZCBwYXJhbS5cbiAqXG4gKiBSZXR1cm5zIGxpc3Qgb2YgZm91bmQgcnVsZSBuYW1lcyAoaWYgbm8gZXhjZXB0aW9uIGhhcHBlbmVkKS5cbiAqXG4gKiBTZWUgYWxzbyBbW1J1bGVyLmVuYWJsZV1dLCBbW1J1bGVyLmVuYWJsZU9ubHldXS5cbiAqKi9cblJ1bGVyLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKGxpc3QsIGlnbm9yZUludmFsaWQpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7IGxpc3QgPSBbbGlzdF0gfVxuXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgLy8gU2VhcmNoIGJ5IG5hbWUgYW5kIGRpc2FibGVcbiAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5fX2ZpbmRfXyhuYW1lKVxuXG4gICAgaWYgKGlkeCA8IDApIHtcbiAgICAgIGlmIChpZ25vcmVJbnZhbGlkKSB7IHJldHVybiB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1J1bGVzIG1hbmFnZXI6IGludmFsaWQgcnVsZSBuYW1lICcgKyBuYW1lKVxuICAgIH1cbiAgICB0aGlzLl9fcnVsZXNfX1tpZHhdLmVuYWJsZWQgPSBmYWxzZVxuICAgIHJlc3VsdC5wdXNoKG5hbWUpXG4gIH0sIHRoaXMpXG5cbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBSdWxlci5nZXRSdWxlcyhjaGFpbk5hbWUpIC0+IEFycmF5XG4gKlxuICogUmV0dXJuIGFycmF5IG9mIGFjdGl2ZSBmdW5jdGlvbnMgKHJ1bGVzKSBmb3IgZ2l2ZW4gY2hhaW4gbmFtZS4gSXQgYW5hbHl6ZXNcbiAqIHJ1bGVzIGNvbmZpZ3VyYXRpb24sIGNvbXBpbGVzIGNhY2hlcyBpZiBub3QgZXhpc3RzIGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBEZWZhdWx0IGNoYWluIG5hbWUgaXMgYCcnYCAoZW1wdHkgc3RyaW5nKS4gSXQgY2FuJ3QgYmUgc2tpcHBlZC4gVGhhdCdzXG4gKiBkb25lIGludGVudGlvbmFsbHksIHRvIGtlZXAgc2lnbmF0dXJlIG1vbm9tb3JwaGljIGZvciBoaWdoIHNwZWVkLlxuICoqL1xuUnVsZXIucHJvdG90eXBlLmdldFJ1bGVzID0gZnVuY3Rpb24gKGNoYWluTmFtZSkge1xuICBpZiAodGhpcy5fX2NhY2hlX18gPT09IG51bGwpIHtcbiAgICB0aGlzLl9fY29tcGlsZV9fKClcbiAgfVxuXG4gIC8vIENoYWluIGNhbiBiZSBlbXB0eSwgaWYgcnVsZXMgZGlzYWJsZWQuIEJ1dCB3ZSBzdGlsbCBoYXZlIHRvIHJldHVybiBBcnJheS5cbiAgcmV0dXJuIHRoaXMuX19jYWNoZV9fW2NoYWluTmFtZV0gfHwgW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgUnVsZXJcbiIsIi8vIFRva2VuIGNsYXNzXG5cbi8qKlxuICogY2xhc3MgVG9rZW5cbiAqKi9cblxuLyoqXG4gKiBuZXcgVG9rZW4odHlwZSwgdGFnLCBuZXN0aW5nKVxuICpcbiAqIENyZWF0ZSBuZXcgdG9rZW4gYW5kIGZpbGwgcGFzc2VkIHByb3BlcnRpZXMuXG4gKiovXG5mdW5jdGlvbiBUb2tlbiAodHlwZSwgdGFnLCBuZXN0aW5nKSB7XG4gIC8qKlxuICAgKiBUb2tlbiN0eXBlIC0+IFN0cmluZ1xuICAgKlxuICAgKiBUeXBlIG9mIHRoZSB0b2tlbiAoc3RyaW5nLCBlLmcuIFwicGFyYWdyYXBoX29wZW5cIilcbiAgICoqL1xuICB0aGlzLnR5cGUgICAgID0gdHlwZVxuXG4gIC8qKlxuICAgKiBUb2tlbiN0YWcgLT4gU3RyaW5nXG4gICAqXG4gICAqIGh0bWwgdGFnIG5hbWUsIGUuZy4gXCJwXCJcbiAgICoqL1xuICB0aGlzLnRhZyAgICAgID0gdGFnXG5cbiAgLyoqXG4gICAqIFRva2VuI2F0dHJzIC0+IEFycmF5XG4gICAqXG4gICAqIEh0bWwgYXR0cmlidXRlcy4gRm9ybWF0OiBgWyBbIG5hbWUxLCB2YWx1ZTEgXSwgWyBuYW1lMiwgdmFsdWUyIF0gXWBcbiAgICoqL1xuICB0aGlzLmF0dHJzICAgID0gbnVsbFxuXG4gIC8qKlxuICAgKiBUb2tlbiNtYXAgLT4gQXJyYXlcbiAgICpcbiAgICogU291cmNlIG1hcCBpbmZvLiBGb3JtYXQ6IGBbIGxpbmVfYmVnaW4sIGxpbmVfZW5kIF1gXG4gICAqKi9cbiAgdGhpcy5tYXAgICAgICA9IG51bGxcblxuICAvKipcbiAgICogVG9rZW4jbmVzdGluZyAtPiBOdW1iZXJcbiAgICpcbiAgICogTGV2ZWwgY2hhbmdlIChudW1iZXIgaW4gey0xLCAwLCAxfSBzZXQpLCB3aGVyZTpcbiAgICpcbiAgICogLSAgYDFgIG1lYW5zIHRoZSB0YWcgaXMgb3BlbmluZ1xuICAgKiAtICBgMGAgbWVhbnMgdGhlIHRhZyBpcyBzZWxmLWNsb3NpbmdcbiAgICogLSBgLTFgIG1lYW5zIHRoZSB0YWcgaXMgY2xvc2luZ1xuICAgKiovXG4gIHRoaXMubmVzdGluZyAgPSBuZXN0aW5nXG5cbiAgLyoqXG4gICAqIFRva2VuI2xldmVsIC0+IE51bWJlclxuICAgKlxuICAgKiBuZXN0aW5nIGxldmVsLCB0aGUgc2FtZSBhcyBgc3RhdGUubGV2ZWxgXG4gICAqKi9cbiAgdGhpcy5sZXZlbCAgICA9IDBcblxuICAvKipcbiAgICogVG9rZW4jY2hpbGRyZW4gLT4gQXJyYXlcbiAgICpcbiAgICogQW4gYXJyYXkgb2YgY2hpbGQgbm9kZXMgKGlubGluZSBhbmQgaW1nIHRva2VucylcbiAgICoqL1xuICB0aGlzLmNoaWxkcmVuID0gbnVsbFxuXG4gIC8qKlxuICAgKiBUb2tlbiNjb250ZW50IC0+IFN0cmluZ1xuICAgKlxuICAgKiBJbiBhIGNhc2Ugb2Ygc2VsZi1jbG9zaW5nIHRhZyAoY29kZSwgaHRtbCwgZmVuY2UsIGV0Yy4pLFxuICAgKiBpdCBoYXMgY29udGVudHMgb2YgdGhpcyB0YWcuXG4gICAqKi9cbiAgdGhpcy5jb250ZW50ICA9ICcnXG5cbiAgLyoqXG4gICAqIFRva2VuI21hcmt1cCAtPiBTdHJpbmdcbiAgICpcbiAgICogJyonIG9yICdfJyBmb3IgZW1waGFzaXMsIGZlbmNlIHN0cmluZyBmb3IgZmVuY2UsIGV0Yy5cbiAgICoqL1xuICB0aGlzLm1hcmt1cCAgID0gJydcblxuICAvKipcbiAgICogVG9rZW4jaW5mbyAtPiBTdHJpbmdcbiAgICpcbiAgICogQWRkaXRpb25hbCBpbmZvcm1hdGlvbjpcbiAgICpcbiAgICogLSBJbmZvIHN0cmluZyBmb3IgXCJmZW5jZVwiIHRva2Vuc1xuICAgKiAtIFRoZSB2YWx1ZSBcImF1dG9cIiBmb3IgYXV0b2xpbmsgXCJsaW5rX29wZW5cIiBhbmQgXCJsaW5rX2Nsb3NlXCIgdG9rZW5zXG4gICAqIC0gVGhlIHN0cmluZyB2YWx1ZSBvZiB0aGUgaXRlbSBtYXJrZXIgZm9yIG9yZGVyZWQtbGlzdCBcImxpc3RfaXRlbV9vcGVuXCIgdG9rZW5zXG4gICAqKi9cbiAgdGhpcy5pbmZvICAgICA9ICcnXG5cbiAgLyoqXG4gICAqIFRva2VuI21ldGEgLT4gT2JqZWN0XG4gICAqXG4gICAqIEEgcGxhY2UgZm9yIHBsdWdpbnMgdG8gc3RvcmUgYW4gYXJiaXRyYXJ5IGRhdGFcbiAgICoqL1xuICB0aGlzLm1ldGEgICAgID0gbnVsbFxuXG4gIC8qKlxuICAgKiBUb2tlbiNibG9jayAtPiBCb29sZWFuXG4gICAqXG4gICAqIFRydWUgZm9yIGJsb2NrLWxldmVsIHRva2VucywgZmFsc2UgZm9yIGlubGluZSB0b2tlbnMuXG4gICAqIFVzZWQgaW4gcmVuZGVyZXIgdG8gY2FsY3VsYXRlIGxpbmUgYnJlYWtzXG4gICAqKi9cbiAgdGhpcy5ibG9jayAgICA9IGZhbHNlXG5cbiAgLyoqXG4gICAqIFRva2VuI2hpZGRlbiAtPiBCb29sZWFuXG4gICAqXG4gICAqIElmIGl0J3MgdHJ1ZSwgaWdub3JlIHRoaXMgZWxlbWVudCB3aGVuIHJlbmRlcmluZy4gVXNlZCBmb3IgdGlnaHQgbGlzdHNcbiAgICogdG8gaGlkZSBwYXJhZ3JhcGhzLlxuICAgKiovXG4gIHRoaXMuaGlkZGVuICAgPSBmYWxzZVxufVxuXG4vKipcbiAqIFRva2VuLmF0dHJJbmRleChuYW1lKSAtPiBOdW1iZXJcbiAqXG4gKiBTZWFyY2ggYXR0cmlidXRlIGluZGV4IGJ5IG5hbWUuXG4gKiovXG5Ub2tlbi5wcm90b3R5cGUuYXR0ckluZGV4ID0gZnVuY3Rpb24gYXR0ckluZGV4IChuYW1lKSB7XG4gIGlmICghdGhpcy5hdHRycykgeyByZXR1cm4gLTEgfVxuXG4gIGNvbnN0IGF0dHJzID0gdGhpcy5hdHRyc1xuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhdHRycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChhdHRyc1tpXVswXSA9PT0gbmFtZSkgeyByZXR1cm4gaSB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbi8qKlxuICogVG9rZW4uYXR0clB1c2goYXR0ckRhdGEpXG4gKlxuICogQWRkIGBbIG5hbWUsIHZhbHVlIF1gIGF0dHJpYnV0ZSB0byBsaXN0LiBJbml0IGF0dHJzIGlmIG5lY2Vzc2FyeVxuICoqL1xuVG9rZW4ucHJvdG90eXBlLmF0dHJQdXNoID0gZnVuY3Rpb24gYXR0clB1c2ggKGF0dHJEYXRhKSB7XG4gIGlmICh0aGlzLmF0dHJzKSB7XG4gICAgdGhpcy5hdHRycy5wdXNoKGF0dHJEYXRhKVxuICB9IGVsc2Uge1xuICAgIHRoaXMuYXR0cnMgPSBbYXR0ckRhdGFdXG4gIH1cbn1cblxuLyoqXG4gKiBUb2tlbi5hdHRyU2V0KG5hbWUsIHZhbHVlKVxuICpcbiAqIFNldCBgbmFtZWAgYXR0cmlidXRlIHRvIGB2YWx1ZWAuIE92ZXJyaWRlIG9sZCB2YWx1ZSBpZiBleGlzdHMuXG4gKiovXG5Ub2tlbi5wcm90b3R5cGUuYXR0clNldCA9IGZ1bmN0aW9uIGF0dHJTZXQgKG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGlkeCA9IHRoaXMuYXR0ckluZGV4KG5hbWUpXG4gIGNvbnN0IGF0dHJEYXRhID0gW25hbWUsIHZhbHVlXVxuXG4gIGlmIChpZHggPCAwKSB7XG4gICAgdGhpcy5hdHRyUHVzaChhdHRyRGF0YSlcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmF0dHJzW2lkeF0gPSBhdHRyRGF0YVxuICB9XG59XG5cbi8qKlxuICogVG9rZW4uYXR0ckdldChuYW1lKVxuICpcbiAqIEdldCB0aGUgdmFsdWUgb2YgYXR0cmlidXRlIGBuYW1lYCwgb3IgbnVsbCBpZiBpdCBkb2VzIG5vdCBleGlzdC5cbiAqKi9cblRva2VuLnByb3RvdHlwZS5hdHRyR2V0ID0gZnVuY3Rpb24gYXR0ckdldCAobmFtZSkge1xuICBjb25zdCBpZHggPSB0aGlzLmF0dHJJbmRleChuYW1lKVxuICBsZXQgdmFsdWUgPSBudWxsXG4gIGlmIChpZHggPj0gMCkge1xuICAgIHZhbHVlID0gdGhpcy5hdHRyc1tpZHhdWzFdXG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogVG9rZW4uYXR0ckpvaW4obmFtZSwgdmFsdWUpXG4gKlxuICogSm9pbiB2YWx1ZSB0byBleGlzdGluZyBhdHRyaWJ1dGUgdmlhIHNwYWNlLiBPciBjcmVhdGUgbmV3IGF0dHJpYnV0ZSBpZiBub3RcbiAqIGV4aXN0cy4gVXNlZnVsIHRvIG9wZXJhdGUgd2l0aCB0b2tlbiBjbGFzc2VzLlxuICoqL1xuVG9rZW4ucHJvdG90eXBlLmF0dHJKb2luID0gZnVuY3Rpb24gYXR0ckpvaW4gKG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGlkeCA9IHRoaXMuYXR0ckluZGV4KG5hbWUpXG5cbiAgaWYgKGlkeCA8IDApIHtcbiAgICB0aGlzLmF0dHJQdXNoKFtuYW1lLCB2YWx1ZV0pXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5hdHRyc1tpZHhdWzFdID0gdGhpcy5hdHRyc1tpZHhdWzFdICsgJyAnICsgdmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2tlblxuIiwiLy8gQ29yZSBzdGF0ZSBvYmplY3Rcbi8vXG5cbmltcG9ydCBUb2tlbiBmcm9tICcuLi90b2tlbi5tanMnXG5cbmZ1bmN0aW9uIFN0YXRlQ29yZSAoc3JjLCBtZCwgZW52KSB7XG4gIHRoaXMuc3JjID0gc3JjXG4gIHRoaXMuZW52ID0gZW52XG4gIHRoaXMudG9rZW5zID0gW11cbiAgdGhpcy5pbmxpbmVNb2RlID0gZmFsc2VcbiAgdGhpcy5tZCA9IG1kIC8vIGxpbmsgdG8gcGFyc2VyIGluc3RhbmNlXG59XG5cbi8vIHJlLWV4cG9ydCBUb2tlbiBjbGFzcyB0byB1c2UgaW4gY29yZSBydWxlc1xuU3RhdGVDb3JlLnByb3RvdHlwZS5Ub2tlbiA9IFRva2VuXG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlQ29yZVxuIiwiLy8gTm9ybWFsaXplIGlucHV0IHN0cmluZ1xuXG4vLyBodHRwczovL3NwZWMuY29tbW9ubWFyay5vcmcvMC4yOS8jbGluZS1lbmRpbmdcbmNvbnN0IE5FV0xJTkVTX1JFICA9IC9cXHJcXG4/fFxcbi9nXG5jb25zdCBOVUxMX1JFICAgICAgPSAvXFwwL2dcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplIChzdGF0ZSkge1xuICBsZXQgc3RyXG5cbiAgLy8gTm9ybWFsaXplIG5ld2xpbmVzXG4gIHN0ciA9IHN0YXRlLnNyYy5yZXBsYWNlKE5FV0xJTkVTX1JFLCAnXFxuJylcblxuICAvLyBSZXBsYWNlIE5VTEwgY2hhcmFjdGVyc1xuICBzdHIgPSBzdHIucmVwbGFjZShOVUxMX1JFLCAnXFx1RkZGRCcpXG5cbiAgc3RhdGUuc3JjID0gc3RyXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBibG9jayAoc3RhdGUpIHtcbiAgbGV0IHRva2VuXG5cbiAgaWYgKHN0YXRlLmlubGluZU1vZGUpIHtcbiAgICB0b2tlbiAgICAgICAgICA9IG5ldyBzdGF0ZS5Ub2tlbignaW5saW5lJywgJycsIDApXG4gICAgdG9rZW4uY29udGVudCAgPSBzdGF0ZS5zcmNcbiAgICB0b2tlbi5tYXAgICAgICA9IFswLCAxXVxuICAgIHRva2VuLmNoaWxkcmVuID0gW11cbiAgICBzdGF0ZS50b2tlbnMucHVzaCh0b2tlbilcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5tZC5ibG9jay5wYXJzZShzdGF0ZS5zcmMsIHN0YXRlLm1kLCBzdGF0ZS5lbnYsIHN0YXRlLnRva2VucylcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5saW5lIChzdGF0ZSkge1xuICBjb25zdCB0b2tlbnMgPSBzdGF0ZS50b2tlbnNcblxuICAvLyBQYXJzZSBpbmxpbmVzXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdG9rZW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IHRvayA9IHRva2Vuc1tpXVxuICAgIGlmICh0b2sudHlwZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHN0YXRlLm1kLmlubGluZS5wYXJzZSh0b2suY29udGVudCwgc3RhdGUubWQsIHN0YXRlLmVudiwgdG9rLmNoaWxkcmVuKVxuICAgIH1cbiAgfVxufVxuIiwiLy8gUmVwbGFjZSBsaW5rLWxpa2UgdGV4dHMgd2l0aCBsaW5rIG5vZGVzLlxuLy9cbi8vIEN1cnJlbnRseSByZXN0cmljdGVkIGJ5IGBtZC52YWxpZGF0ZUxpbmsoKWAgdG8gaHR0cC9odHRwcy9mdHBcbi8vXG5cbmltcG9ydCB7IGFycmF5UmVwbGFjZUF0IH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzLm1qcydcblxuZnVuY3Rpb24gaXNMaW5rT3BlbiAoc3RyKSB7XG4gIHJldHVybiAvXjxhWz5cXHNdL2kudGVzdChzdHIpXG59XG5mdW5jdGlvbiBpc0xpbmtDbG9zZSAoc3RyKSB7XG4gIHJldHVybiAvXjxcXC9hXFxzKj4vaS50ZXN0KHN0cilcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlua2lmeSAoc3RhdGUpIHtcbiAgY29uc3QgYmxvY2tUb2tlbnMgPSBzdGF0ZS50b2tlbnNcblxuICBpZiAoIXN0YXRlLm1kLm9wdGlvbnMubGlua2lmeSkgeyByZXR1cm4gfVxuXG4gIGZvciAobGV0IGogPSAwLCBsID0gYmxvY2tUb2tlbnMubGVuZ3RoOyBqIDwgbDsgaisrKSB7XG4gICAgaWYgKGJsb2NrVG9rZW5zW2pdLnR5cGUgIT09ICdpbmxpbmUnIHx8XG4gICAgICAgICFzdGF0ZS5tZC5saW5raWZ5LnByZXRlc3QoYmxvY2tUb2tlbnNbal0uY29udGVudCkpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgbGV0IHRva2VucyA9IGJsb2NrVG9rZW5zW2pdLmNoaWxkcmVuXG5cbiAgICBsZXQgaHRtbExpbmtMZXZlbCA9IDBcblxuICAgIC8vIFdlIHNjYW4gZnJvbSB0aGUgZW5kLCB0byBrZWVwIHBvc2l0aW9uIHdoZW4gbmV3IHRhZ3MgYWRkZWQuXG4gICAgLy8gVXNlIHJldmVyc2VkIGxvZ2ljIGluIGxpbmtzIHN0YXJ0L2VuZCBtYXRjaFxuICAgIGZvciAobGV0IGkgPSB0b2tlbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUb2tlbiA9IHRva2Vuc1tpXVxuXG4gICAgICAvLyBTa2lwIGNvbnRlbnQgb2YgbWFya2Rvd24gbGlua3NcbiAgICAgIGlmIChjdXJyZW50VG9rZW4udHlwZSA9PT0gJ2xpbmtfY2xvc2UnKSB7XG4gICAgICAgIGktLVxuICAgICAgICB3aGlsZSAodG9rZW5zW2ldLmxldmVsICE9PSBjdXJyZW50VG9rZW4ubGV2ZWwgJiYgdG9rZW5zW2ldLnR5cGUgIT09ICdsaW5rX29wZW4nKSB7XG4gICAgICAgICAgaS0tXG4gICAgICAgIH1cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gU2tpcCBjb250ZW50IG9mIGh0bWwgdGFnIGxpbmtzXG4gICAgICBpZiAoY3VycmVudFRva2VuLnR5cGUgPT09ICdodG1sX2lubGluZScpIHtcbiAgICAgICAgaWYgKGlzTGlua09wZW4oY3VycmVudFRva2VuLmNvbnRlbnQpICYmIGh0bWxMaW5rTGV2ZWwgPiAwKSB7XG4gICAgICAgICAgaHRtbExpbmtMZXZlbC0tXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTGlua0Nsb3NlKGN1cnJlbnRUb2tlbi5jb250ZW50KSkge1xuICAgICAgICAgIGh0bWxMaW5rTGV2ZWwrK1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaHRtbExpbmtMZXZlbCA+IDApIHsgY29udGludWUgfVxuXG4gICAgICBpZiAoY3VycmVudFRva2VuLnR5cGUgPT09ICd0ZXh0JyAmJiBzdGF0ZS5tZC5saW5raWZ5LnRlc3QoY3VycmVudFRva2VuLmNvbnRlbnQpKSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBjdXJyZW50VG9rZW4uY29udGVudFxuICAgICAgICBsZXQgbGlua3MgPSBzdGF0ZS5tZC5saW5raWZ5Lm1hdGNoKHRleHQpXG5cbiAgICAgICAgLy8gTm93IHNwbGl0IHN0cmluZyB0byBub2Rlc1xuICAgICAgICBjb25zdCBub2RlcyA9IFtdXG4gICAgICAgIGxldCBsZXZlbCA9IGN1cnJlbnRUb2tlbi5sZXZlbFxuICAgICAgICBsZXQgbGFzdFBvcyA9IDBcblxuICAgICAgICAvLyBmb3JiaWQgZXNjYXBlIHNlcXVlbmNlIGF0IHRoZSBzdGFydCBvZiB0aGUgc3RyaW5nLFxuICAgICAgICAvLyB0aGlzIGF2b2lkcyBodHRwXFw6Ly9leGFtcGxlLmNvbS8gZnJvbSBiZWluZyBsaW5raWZpZWQgYXNcbiAgICAgICAgLy8gaHR0cDo8YSBocmVmPVwiLy9leGFtcGxlLmNvbS9cIj4vL2V4YW1wbGUuY29tLzwvYT5cbiAgICAgICAgaWYgKGxpbmtzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIGxpbmtzWzBdLmluZGV4ID09PSAwICYmXG4gICAgICAgICAgICBpID4gMCAmJlxuICAgICAgICAgICAgdG9rZW5zW2kgLSAxXS50eXBlID09PSAndGV4dF9zcGVjaWFsJykge1xuICAgICAgICAgIGxpbmtzID0gbGlua3Muc2xpY2UoMSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGxuID0gMDsgbG4gPCBsaW5rcy5sZW5ndGg7IGxuKyspIHtcbiAgICAgICAgICBjb25zdCB1cmwgPSBsaW5rc1tsbl0udXJsXG4gICAgICAgICAgY29uc3QgZnVsbFVybCA9IHN0YXRlLm1kLm5vcm1hbGl6ZUxpbmsodXJsKVxuICAgICAgICAgIGlmICghc3RhdGUubWQudmFsaWRhdGVMaW5rKGZ1bGxVcmwpKSB7IGNvbnRpbnVlIH1cblxuICAgICAgICAgIGxldCB1cmxUZXh0ID0gbGlua3NbbG5dLnRleHRcblxuICAgICAgICAgIC8vIExpbmtpZmllciBtaWdodCBzZW5kIHJhdyBob3N0bmFtZXMgbGlrZSBcImV4YW1wbGUuY29tXCIsIHdoZXJlIHVybFxuICAgICAgICAgIC8vIHN0YXJ0cyB3aXRoIGRvbWFpbiBuYW1lLiBTbyB3ZSBwcmVwZW5kIGh0dHA6Ly8gaW4gdGhvc2UgY2FzZXMsXG4gICAgICAgICAgLy8gYW5kIHJlbW92ZSBpdCBhZnRlcndhcmRzLlxuICAgICAgICAgIC8vXG4gICAgICAgICAgaWYgKCFsaW5rc1tsbl0uc2NoZW1hKSB7XG4gICAgICAgICAgICB1cmxUZXh0ID0gc3RhdGUubWQubm9ybWFsaXplTGlua1RleHQoJ2h0dHA6Ly8nICsgdXJsVGV4dCkucmVwbGFjZSgvXmh0dHA6XFwvXFwvLywgJycpXG4gICAgICAgICAgfSBlbHNlIGlmIChsaW5rc1tsbl0uc2NoZW1hID09PSAnbWFpbHRvOicgJiYgIS9ebWFpbHRvOi9pLnRlc3QodXJsVGV4dCkpIHtcbiAgICAgICAgICAgIHVybFRleHQgPSBzdGF0ZS5tZC5ub3JtYWxpemVMaW5rVGV4dCgnbWFpbHRvOicgKyB1cmxUZXh0KS5yZXBsYWNlKC9ebWFpbHRvOi8sICcnKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmxUZXh0ID0gc3RhdGUubWQubm9ybWFsaXplTGlua1RleHQodXJsVGV4dClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwb3MgPSBsaW5rc1tsbl0uaW5kZXhcblxuICAgICAgICAgIGlmIChwb3MgPiBsYXN0UG9zKSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiAgID0gbmV3IHN0YXRlLlRva2VuKCd0ZXh0JywgJycsIDApXG4gICAgICAgICAgICB0b2tlbi5jb250ZW50ID0gdGV4dC5zbGljZShsYXN0UG9zLCBwb3MpXG4gICAgICAgICAgICB0b2tlbi5sZXZlbCAgID0gbGV2ZWxcbiAgICAgICAgICAgIG5vZGVzLnB1c2godG9rZW4pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdG9rZW5fbyAgID0gbmV3IHN0YXRlLlRva2VuKCdsaW5rX29wZW4nLCAnYScsIDEpXG4gICAgICAgICAgdG9rZW5fby5hdHRycyAgID0gW1snaHJlZicsIGZ1bGxVcmxdXVxuICAgICAgICAgIHRva2VuX28ubGV2ZWwgICA9IGxldmVsKytcbiAgICAgICAgICB0b2tlbl9vLm1hcmt1cCAgPSAnbGlua2lmeSdcbiAgICAgICAgICB0b2tlbl9vLmluZm8gICAgPSAnYXV0bydcbiAgICAgICAgICBub2Rlcy5wdXNoKHRva2VuX28pXG5cbiAgICAgICAgICBjb25zdCB0b2tlbl90ICAgPSBuZXcgc3RhdGUuVG9rZW4oJ3RleHQnLCAnJywgMClcbiAgICAgICAgICB0b2tlbl90LmNvbnRlbnQgPSB1cmxUZXh0XG4gICAgICAgICAgdG9rZW5fdC5sZXZlbCAgID0gbGV2ZWxcbiAgICAgICAgICBub2Rlcy5wdXNoKHRva2VuX3QpXG5cbiAgICAgICAgICBjb25zdCB0b2tlbl9jICAgPSBuZXcgc3RhdGUuVG9rZW4oJ2xpbmtfY2xvc2UnLCAnYScsIC0xKVxuICAgICAgICAgIHRva2VuX2MubGV2ZWwgICA9IC0tbGV2ZWxcbiAgICAgICAgICB0b2tlbl9jLm1hcmt1cCAgPSAnbGlua2lmeSdcbiAgICAgICAgICB0b2tlbl9jLmluZm8gICAgPSAnYXV0bydcbiAgICAgICAgICBub2Rlcy5wdXNoKHRva2VuX2MpXG5cbiAgICAgICAgICBsYXN0UG9zID0gbGlua3NbbG5dLmxhc3RJbmRleFxuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0UG9zIDwgdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCB0b2tlbiAgID0gbmV3IHN0YXRlLlRva2VuKCd0ZXh0JywgJycsIDApXG4gICAgICAgICAgdG9rZW4uY29udGVudCA9IHRleHQuc2xpY2UobGFzdFBvcylcbiAgICAgICAgICB0b2tlbi5sZXZlbCAgID0gbGV2ZWxcbiAgICAgICAgICBub2Rlcy5wdXNoKHRva2VuKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVwbGFjZSBjdXJyZW50IG5vZGVcbiAgICAgICAgYmxvY2tUb2tlbnNbal0uY2hpbGRyZW4gPSB0b2tlbnMgPSBhcnJheVJlcGxhY2VBdCh0b2tlbnMsIGksIG5vZGVzKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gU2ltcGxlIHR5cG9ncmFwaGljIHJlcGxhY2VtZW50c1xuLy9cbi8vIChjKSAoQykg4oaSIMKpXG4vLyAodG0pIChUTSkg4oaSIOKEolxuLy8gKHIpIChSKSDihpIgwq5cbi8vICstIOKGkiDCsVxuLy8gLi4uIOKGkiDigKYgKGFsc28gPy4uLi4g4oaSID8uLiwgIS4uLi4g4oaSICEuLilcbi8vID8/Pz8/Pz8/IOKGkiA/Pz8sICEhISEhIOKGkiAhISEsIGAsLGAg4oaSIGAsYFxuLy8gLS0g4oaSICZuZGFzaDssIC0tLSDihpIgJm1kYXNoO1xuLy9cblxuLy8gVE9ETzpcbi8vIC0gZnJhY3Rpb25hbHMgMS8yLCAxLzQsIDMvNCAtPiDCvSwgwrwsIMK+XG4vLyAtIG11bHRpcGxpY2F0aW9ucyAyIHggNCAtPiAyIMOXIDRcblxuY29uc3QgUkFSRV9SRSA9IC9cXCstfFxcLlxcLnxcXD9cXD9cXD9cXD98ISEhIXwsLHwtLS9cblxuLy8gV29ya2Fyb3VuZCBmb3IgcGhhbnRvbWpzIC0gbmVlZCByZWdleCB3aXRob3V0IC9nIGZsYWcsXG4vLyBvciByb290IGNoZWNrIHdpbGwgZmFpbCBldmVyeSBzZWNvbmQgdGltZVxuY29uc3QgU0NPUEVEX0FCQlJfVEVTVF9SRSA9IC9cXCgoY3x0bXxyKVxcKS9pXG5cbmNvbnN0IFNDT1BFRF9BQkJSX1JFID0gL1xcKChjfHRtfHIpXFwpL2lnXG5jb25zdCBTQ09QRURfQUJCUiA9IHtcbiAgYzogJ8KpJyxcbiAgcjogJ8KuJyxcbiAgdG06ICfihKInXG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VGbiAobWF0Y2gsIG5hbWUpIHtcbiAgcmV0dXJuIFNDT1BFRF9BQkJSW25hbWUudG9Mb3dlckNhc2UoKV1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZV9zY29wZWQgKGlubGluZVRva2Vucykge1xuICBsZXQgaW5zaWRlX2F1dG9saW5rID0gMFxuXG4gIGZvciAobGV0IGkgPSBpbmxpbmVUb2tlbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBjb25zdCB0b2tlbiA9IGlubGluZVRva2Vuc1tpXVxuXG4gICAgaWYgKHRva2VuLnR5cGUgPT09ICd0ZXh0JyAmJiAhaW5zaWRlX2F1dG9saW5rKSB7XG4gICAgICB0b2tlbi5jb250ZW50ID0gdG9rZW4uY29udGVudC5yZXBsYWNlKFNDT1BFRF9BQkJSX1JFLCByZXBsYWNlRm4pXG4gICAgfVxuXG4gICAgaWYgKHRva2VuLnR5cGUgPT09ICdsaW5rX29wZW4nICYmIHRva2VuLmluZm8gPT09ICdhdXRvJykge1xuICAgICAgaW5zaWRlX2F1dG9saW5rLS1cbiAgICB9XG5cbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ2xpbmtfY2xvc2UnICYmIHRva2VuLmluZm8gPT09ICdhdXRvJykge1xuICAgICAgaW5zaWRlX2F1dG9saW5rKytcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZV9yYXJlIChpbmxpbmVUb2tlbnMpIHtcbiAgbGV0IGluc2lkZV9hdXRvbGluayA9IDBcblxuICBmb3IgKGxldCBpID0gaW5saW5lVG9rZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3QgdG9rZW4gPSBpbmxpbmVUb2tlbnNbaV1cblxuICAgIGlmICh0b2tlbi50eXBlID09PSAndGV4dCcgJiYgIWluc2lkZV9hdXRvbGluaykge1xuICAgICAgaWYgKFJBUkVfUkUudGVzdCh0b2tlbi5jb250ZW50KSkge1xuICAgICAgICB0b2tlbi5jb250ZW50ID0gdG9rZW4uY29udGVudFxuICAgICAgICAgIC5yZXBsYWNlKC9cXCstL2csICfCsScpXG4gICAgICAgICAgLy8gLi4sIC4uLiwgLi4uLi4uLiAtPiDigKZcbiAgICAgICAgICAvLyBidXQgPy4uLi4uICYgIS4uLi4uIC0+ID8uLiAmICEuLlxuICAgICAgICAgIC5yZXBsYWNlKC9cXC57Mix9L2csICfigKYnKS5yZXBsYWNlKC8oWz8hXSnigKYvZywgJyQxLi4nKVxuICAgICAgICAgIC5yZXBsYWNlKC8oWz8hXSl7NCx9L2csICckMSQxJDEnKS5yZXBsYWNlKC8sezIsfS9nLCAnLCcpXG4gICAgICAgICAgLy8gZW0tZGFzaFxuICAgICAgICAgIC5yZXBsYWNlKC8oXnxbXi1dKS0tLSg/PVteLV18JCkvbWcsICckMVxcdTIwMTQnKVxuICAgICAgICAgIC8vIGVuLWRhc2hcbiAgICAgICAgICAucmVwbGFjZSgvKF58XFxzKS0tKD89XFxzfCQpL21nLCAnJDFcXHUyMDEzJylcbiAgICAgICAgICAucmVwbGFjZSgvKF58W14tXFxzXSktLSg/PVteLVxcc118JCkvbWcsICckMVxcdTIwMTMnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b2tlbi50eXBlID09PSAnbGlua19vcGVuJyAmJiB0b2tlbi5pbmZvID09PSAnYXV0bycpIHtcbiAgICAgIGluc2lkZV9hdXRvbGluay0tXG4gICAgfVxuXG4gICAgaWYgKHRva2VuLnR5cGUgPT09ICdsaW5rX2Nsb3NlJyAmJiB0b2tlbi5pbmZvID09PSAnYXV0bycpIHtcbiAgICAgIGluc2lkZV9hdXRvbGluaysrXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcGxhY2UgKHN0YXRlKSB7XG4gIGxldCBibGtJZHhcblxuICBpZiAoIXN0YXRlLm1kLm9wdGlvbnMudHlwb2dyYXBoZXIpIHsgcmV0dXJuIH1cblxuICBmb3IgKGJsa0lkeCA9IHN0YXRlLnRva2Vucy5sZW5ndGggLSAxOyBibGtJZHggPj0gMDsgYmxrSWR4LS0pIHtcbiAgICBpZiAoc3RhdGUudG9rZW5zW2Jsa0lkeF0udHlwZSAhPT0gJ2lubGluZScpIHsgY29udGludWUgfVxuXG4gICAgaWYgKFNDT1BFRF9BQkJSX1RFU1RfUkUudGVzdChzdGF0ZS50b2tlbnNbYmxrSWR4XS5jb250ZW50KSkge1xuICAgICAgcmVwbGFjZV9zY29wZWQoc3RhdGUudG9rZW5zW2Jsa0lkeF0uY2hpbGRyZW4pXG4gICAgfVxuXG4gICAgaWYgKFJBUkVfUkUudGVzdChzdGF0ZS50b2tlbnNbYmxrSWR4XS5jb250ZW50KSkge1xuICAgICAgcmVwbGFjZV9yYXJlKHN0YXRlLnRva2Vuc1tibGtJZHhdLmNoaWxkcmVuKVxuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29udmVydCBzdHJhaWdodCBxdW90YXRpb24gbWFya3MgdG8gdHlwb2dyYXBoaWMgb25lc1xuLy9cblxuaW1wb3J0IHsgaXNXaGl0ZVNwYWNlLCBpc1B1bmN0Q2hhciwgaXNNZEFzY2lpUHVuY3QgfSBmcm9tICcuLi9jb21tb24vdXRpbHMubWpzJ1xuXG5jb25zdCBRVU9URV9URVNUX1JFID0gL1snXCJdL1xuY29uc3QgUVVPVEVfUkUgPSAvWydcIl0vZ1xuY29uc3QgQVBPU1RST1BIRSA9ICdcXHUyMDE5JyAvKiDigJkgKi9cblxuZnVuY3Rpb24gcmVwbGFjZUF0IChzdHIsIGluZGV4LCBjaCkge1xuICByZXR1cm4gc3RyLnNsaWNlKDAsIGluZGV4KSArIGNoICsgc3RyLnNsaWNlKGluZGV4ICsgMSlcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc19pbmxpbmVzICh0b2tlbnMsIHN0YXRlKSB7XG4gIGxldCBqXG5cbiAgY29uc3Qgc3RhY2sgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgIGNvbnN0IHRoaXNMZXZlbCA9IHRva2Vuc1tpXS5sZXZlbFxuXG4gICAgZm9yIChqID0gc3RhY2subGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgIGlmIChzdGFja1tqXS5sZXZlbCA8PSB0aGlzTGV2ZWwpIHsgYnJlYWsgfVxuICAgIH1cbiAgICBzdGFjay5sZW5ndGggPSBqICsgMVxuXG4gICAgaWYgKHRva2VuLnR5cGUgIT09ICd0ZXh0JykgeyBjb250aW51ZSB9XG5cbiAgICBsZXQgdGV4dCA9IHRva2VuLmNvbnRlbnRcbiAgICBsZXQgcG9zID0gMFxuICAgIGxldCBtYXggPSB0ZXh0Lmxlbmd0aFxuXG4gICAgLyogZXNsaW50IG5vLWxhYmVsczowLGJsb2NrLXNjb3BlZC12YXI6MCAqL1xuICAgIE9VVEVSOlxuICAgIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICAgIFFVT1RFX1JFLmxhc3RJbmRleCA9IHBvc1xuICAgICAgY29uc3QgdCA9IFFVT1RFX1JFLmV4ZWModGV4dClcbiAgICAgIGlmICghdCkgeyBicmVhayB9XG5cbiAgICAgIGxldCBjYW5PcGVuID0gdHJ1ZVxuICAgICAgbGV0IGNhbkNsb3NlID0gdHJ1ZVxuICAgICAgcG9zID0gdC5pbmRleCArIDFcbiAgICAgIGNvbnN0IGlzU2luZ2xlID0gKHRbMF0gPT09IFwiJ1wiKVxuXG4gICAgICAvLyBGaW5kIHByZXZpb3VzIGNoYXJhY3RlcixcbiAgICAgIC8vIGRlZmF1bHQgdG8gc3BhY2UgaWYgaXQncyB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaW5lXG4gICAgICAvL1xuICAgICAgbGV0IGxhc3RDaGFyID0gMHgyMFxuXG4gICAgICBpZiAodC5pbmRleCAtIDEgPj0gMCkge1xuICAgICAgICBsYXN0Q2hhciA9IHRleHQuY2hhckNvZGVBdCh0LmluZGV4IC0gMSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaiA9IGkgLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgICAgIGlmICh0b2tlbnNbal0udHlwZSA9PT0gJ3NvZnRicmVhaycgfHwgdG9rZW5zW2pdLnR5cGUgPT09ICdoYXJkYnJlYWsnKSBicmVhayAvLyBsYXN0Q2hhciBkZWZhdWx0cyB0byAweDIwXG4gICAgICAgICAgaWYgKCF0b2tlbnNbal0uY29udGVudCkgY29udGludWUgLy8gc2hvdWxkIHNraXAgYWxsIHRva2VucyBleGNlcHQgJ3RleHQnLCAnaHRtbF9pbmxpbmUnIG9yICdjb2RlX2lubGluZSdcblxuICAgICAgICAgIGxhc3RDaGFyID0gdG9rZW5zW2pdLmNvbnRlbnQuY2hhckNvZGVBdCh0b2tlbnNbal0uY29udGVudC5sZW5ndGggLSAxKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRmluZCBuZXh0IGNoYXJhY3RlcixcbiAgICAgIC8vIGRlZmF1bHQgdG8gc3BhY2UgaWYgaXQncyB0aGUgZW5kIG9mIHRoZSBsaW5lXG4gICAgICAvL1xuICAgICAgbGV0IG5leHRDaGFyID0gMHgyMFxuXG4gICAgICBpZiAocG9zIDwgbWF4KSB7XG4gICAgICAgIG5leHRDaGFyID0gdGV4dC5jaGFyQ29kZUF0KHBvcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgdG9rZW5zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKHRva2Vuc1tqXS50eXBlID09PSAnc29mdGJyZWFrJyB8fCB0b2tlbnNbal0udHlwZSA9PT0gJ2hhcmRicmVhaycpIGJyZWFrIC8vIG5leHRDaGFyIGRlZmF1bHRzIHRvIDB4MjBcbiAgICAgICAgICBpZiAoIXRva2Vuc1tqXS5jb250ZW50KSBjb250aW51ZSAvLyBzaG91bGQgc2tpcCBhbGwgdG9rZW5zIGV4Y2VwdCAndGV4dCcsICdodG1sX2lubGluZScgb3IgJ2NvZGVfaW5saW5lJ1xuXG4gICAgICAgICAgbmV4dENoYXIgPSB0b2tlbnNbal0uY29udGVudC5jaGFyQ29kZUF0KDApXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0xhc3RQdW5jdENoYXIgPSBpc01kQXNjaWlQdW5jdChsYXN0Q2hhcikgfHwgaXNQdW5jdENoYXIoU3RyaW5nLmZyb21DaGFyQ29kZShsYXN0Q2hhcikpXG4gICAgICBjb25zdCBpc05leHRQdW5jdENoYXIgPSBpc01kQXNjaWlQdW5jdChuZXh0Q2hhcikgfHwgaXNQdW5jdENoYXIoU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhcikpXG5cbiAgICAgIGNvbnN0IGlzTGFzdFdoaXRlU3BhY2UgPSBpc1doaXRlU3BhY2UobGFzdENoYXIpXG4gICAgICBjb25zdCBpc05leHRXaGl0ZVNwYWNlID0gaXNXaGl0ZVNwYWNlKG5leHRDaGFyKVxuXG4gICAgICBpZiAoaXNOZXh0V2hpdGVTcGFjZSkge1xuICAgICAgICBjYW5PcGVuID0gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAoaXNOZXh0UHVuY3RDaGFyKSB7XG4gICAgICAgIGlmICghKGlzTGFzdFdoaXRlU3BhY2UgfHwgaXNMYXN0UHVuY3RDaGFyKSkge1xuICAgICAgICAgIGNhbk9wZW4gPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0xhc3RXaGl0ZVNwYWNlKSB7XG4gICAgICAgIGNhbkNsb3NlID0gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAoaXNMYXN0UHVuY3RDaGFyKSB7XG4gICAgICAgIGlmICghKGlzTmV4dFdoaXRlU3BhY2UgfHwgaXNOZXh0UHVuY3RDaGFyKSkge1xuICAgICAgICAgIGNhbkNsb3NlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobmV4dENoYXIgPT09IDB4MjIgLyogXCIgKi8gJiYgdFswXSA9PT0gJ1wiJykge1xuICAgICAgICBpZiAobGFzdENoYXIgPj0gMHgzMCAvKiAwICovICYmIGxhc3RDaGFyIDw9IDB4MzkgLyogOSAqLykge1xuICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZTogMVwiXCIgLSBjb3VudCBmaXJzdCBxdW90ZSBhcyBhbiBpbmNoXG4gICAgICAgICAgY2FuQ2xvc2UgPSBjYW5PcGVuID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuT3BlbiAmJiBjYW5DbG9zZSkge1xuICAgICAgICAvLyBSZXBsYWNlIHF1b3RlcyBpbiB0aGUgbWlkZGxlIG9mIHB1bmN0dWF0aW9uIHNlcXVlbmNlLCBidXQgbm90XG4gICAgICAgIC8vIGluIHRoZSBtaWRkbGUgb2YgdGhlIHdvcmRzLCBpLmUuOlxuICAgICAgICAvL1xuICAgICAgICAvLyAxLiBmb28gXCIgYmFyIFwiIGJheiAtIG5vdCByZXBsYWNlZFxuICAgICAgICAvLyAyLiBmb28tXCItYmFyLVwiLWJheiAtIHJlcGxhY2VkXG4gICAgICAgIC8vIDMuIGZvb1wiYmFyXCJiYXogICAgIC0gbm90IHJlcGxhY2VkXG4gICAgICAgIC8vXG4gICAgICAgIGNhbk9wZW4gPSBpc0xhc3RQdW5jdENoYXJcbiAgICAgICAgY2FuQ2xvc2UgPSBpc05leHRQdW5jdENoYXJcbiAgICAgIH1cblxuICAgICAgaWYgKCFjYW5PcGVuICYmICFjYW5DbG9zZSkge1xuICAgICAgICAvLyBtaWRkbGUgb2Ygd29yZFxuICAgICAgICBpZiAoaXNTaW5nbGUpIHtcbiAgICAgICAgICB0b2tlbi5jb250ZW50ID0gcmVwbGFjZUF0KHRva2VuLmNvbnRlbnQsIHQuaW5kZXgsIEFQT1NUUk9QSEUpXG4gICAgICAgIH1cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbkNsb3NlKSB7XG4gICAgICAgIC8vIHRoaXMgY291bGQgYmUgYSBjbG9zaW5nIHF1b3RlLCByZXdpbmQgdGhlIHN0YWNrIHRvIGdldCBhIG1hdGNoXG4gICAgICAgIGZvciAoaiA9IHN0YWNrLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgbGV0IGl0ZW0gPSBzdGFja1tqXVxuICAgICAgICAgIGlmIChzdGFja1tqXS5sZXZlbCA8IHRoaXNMZXZlbCkgeyBicmVhayB9XG4gICAgICAgICAgaWYgKGl0ZW0uc2luZ2xlID09PSBpc1NpbmdsZSAmJiBzdGFja1tqXS5sZXZlbCA9PT0gdGhpc0xldmVsKSB7XG4gICAgICAgICAgICBpdGVtID0gc3RhY2tbal1cblxuICAgICAgICAgICAgbGV0IG9wZW5RdW90ZVxuICAgICAgICAgICAgbGV0IGNsb3NlUXVvdGVcbiAgICAgICAgICAgIGlmIChpc1NpbmdsZSkge1xuICAgICAgICAgICAgICBvcGVuUXVvdGUgPSBzdGF0ZS5tZC5vcHRpb25zLnF1b3Rlc1syXVxuICAgICAgICAgICAgICBjbG9zZVF1b3RlID0gc3RhdGUubWQub3B0aW9ucy5xdW90ZXNbM11cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9wZW5RdW90ZSA9IHN0YXRlLm1kLm9wdGlvbnMucXVvdGVzWzBdXG4gICAgICAgICAgICAgIGNsb3NlUXVvdGUgPSBzdGF0ZS5tZC5vcHRpb25zLnF1b3Rlc1sxXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZXBsYWNlIHRva2VuLmNvbnRlbnQgKmJlZm9yZSogdG9rZW5zW2l0ZW0udG9rZW5dLmNvbnRlbnQsXG4gICAgICAgICAgICAvLyBiZWNhdXNlLCBpZiB0aGV5IGFyZSBwb2ludGluZyBhdCB0aGUgc2FtZSB0b2tlbiwgcmVwbGFjZUF0XG4gICAgICAgICAgICAvLyBjb3VsZCBtZXNzIHVwIGluZGljZXMgd2hlbiBxdW90ZSBsZW5ndGggIT0gMVxuICAgICAgICAgICAgdG9rZW4uY29udGVudCA9IHJlcGxhY2VBdCh0b2tlbi5jb250ZW50LCB0LmluZGV4LCBjbG9zZVF1b3RlKVxuICAgICAgICAgICAgdG9rZW5zW2l0ZW0udG9rZW5dLmNvbnRlbnQgPSByZXBsYWNlQXQoXG4gICAgICAgICAgICAgIHRva2Vuc1tpdGVtLnRva2VuXS5jb250ZW50LCBpdGVtLnBvcywgb3BlblF1b3RlKVxuXG4gICAgICAgICAgICBwb3MgKz0gY2xvc2VRdW90ZS5sZW5ndGggLSAxXG4gICAgICAgICAgICBpZiAoaXRlbS50b2tlbiA9PT0gaSkgeyBwb3MgKz0gb3BlblF1b3RlLmxlbmd0aCAtIDEgfVxuXG4gICAgICAgICAgICB0ZXh0ID0gdG9rZW4uY29udGVudFxuICAgICAgICAgICAgbWF4ID0gdGV4dC5sZW5ndGhcblxuICAgICAgICAgICAgc3RhY2subGVuZ3RoID0galxuICAgICAgICAgICAgY29udGludWUgT1VURVJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNhbk9wZW4pIHtcbiAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgdG9rZW46IGksXG4gICAgICAgICAgcG9zOiB0LmluZGV4LFxuICAgICAgICAgIHNpbmdsZTogaXNTaW5nbGUsXG4gICAgICAgICAgbGV2ZWw6IHRoaXNMZXZlbFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChjYW5DbG9zZSAmJiBpc1NpbmdsZSkge1xuICAgICAgICB0b2tlbi5jb250ZW50ID0gcmVwbGFjZUF0KHRva2VuLmNvbnRlbnQsIHQuaW5kZXgsIEFQT1NUUk9QSEUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNtYXJ0cXVvdGVzIChzdGF0ZSkge1xuICAvKiBlc2xpbnQgbWF4LWRlcHRoOjAgKi9cbiAgaWYgKCFzdGF0ZS5tZC5vcHRpb25zLnR5cG9ncmFwaGVyKSB7IHJldHVybiB9XG5cbiAgZm9yIChsZXQgYmxrSWR4ID0gc3RhdGUudG9rZW5zLmxlbmd0aCAtIDE7IGJsa0lkeCA+PSAwOyBibGtJZHgtLSkge1xuICAgIGlmIChzdGF0ZS50b2tlbnNbYmxrSWR4XS50eXBlICE9PSAnaW5saW5lJyB8fFxuICAgICAgICAhUVVPVEVfVEVTVF9SRS50ZXN0KHN0YXRlLnRva2Vuc1tibGtJZHhdLmNvbnRlbnQpKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHByb2Nlc3NfaW5saW5lcyhzdGF0ZS50b2tlbnNbYmxrSWR4XS5jaGlsZHJlbiwgc3RhdGUpXG4gIH1cbn1cbiIsIi8vIEpvaW4gcmF3IHRleHQgdG9rZW5zIHdpdGggdGhlIHJlc3Qgb2YgdGhlIHRleHRcbi8vXG4vLyBUaGlzIGlzIHNldCBhcyBhIHNlcGFyYXRlIHJ1bGUgdG8gcHJvdmlkZSBhbiBvcHBvcnR1bml0eSBmb3IgcGx1Z2luc1xuLy8gdG8gcnVuIHRleHQgcmVwbGFjZW1lbnRzIGFmdGVyIHRleHQgam9pbiwgYnV0IGJlZm9yZSBlc2NhcGUgam9pbi5cbi8vXG4vLyBGb3IgZXhhbXBsZSwgYFxcOilgIHNob3VsZG4ndCBiZSByZXBsYWNlZCB3aXRoIGFuIGVtb2ppLlxuLy9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGV4dF9qb2luIChzdGF0ZSkge1xuICBsZXQgY3VyciwgbGFzdFxuICBjb25zdCBibG9ja1Rva2VucyA9IHN0YXRlLnRva2Vuc1xuICBjb25zdCBsID0gYmxvY2tUb2tlbnMubGVuZ3RoXG5cbiAgZm9yIChsZXQgaiA9IDA7IGogPCBsOyBqKyspIHtcbiAgICBpZiAoYmxvY2tUb2tlbnNbal0udHlwZSAhPT0gJ2lubGluZScpIGNvbnRpbnVlXG5cbiAgICBjb25zdCB0b2tlbnMgPSBibG9ja1Rva2Vuc1tqXS5jaGlsZHJlblxuICAgIGNvbnN0IG1heCA9IHRva2Vucy5sZW5ndGhcblxuICAgIGZvciAoY3VyciA9IDA7IGN1cnIgPCBtYXg7IGN1cnIrKykge1xuICAgICAgaWYgKHRva2Vuc1tjdXJyXS50eXBlID09PSAndGV4dF9zcGVjaWFsJykge1xuICAgICAgICB0b2tlbnNbY3Vycl0udHlwZSA9ICd0ZXh0J1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY3VyciA9IGxhc3QgPSAwOyBjdXJyIDwgbWF4OyBjdXJyKyspIHtcbiAgICAgIGlmICh0b2tlbnNbY3Vycl0udHlwZSA9PT0gJ3RleHQnICYmXG4gICAgICAgICAgY3VyciArIDEgPCBtYXggJiZcbiAgICAgICAgICB0b2tlbnNbY3VyciArIDFdLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAvLyBjb2xsYXBzZSB0d28gYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICB0b2tlbnNbY3VyciArIDFdLmNvbnRlbnQgPSB0b2tlbnNbY3Vycl0uY29udGVudCArIHRva2Vuc1tjdXJyICsgMV0uY29udGVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGN1cnIgIT09IGxhc3QpIHsgdG9rZW5zW2xhc3RdID0gdG9rZW5zW2N1cnJdIH1cblxuICAgICAgICBsYXN0KytcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VyciAhPT0gbGFzdCkge1xuICAgICAgdG9rZW5zLmxlbmd0aCA9IGxhc3RcbiAgICB9XG4gIH1cbn1cbiIsIi8qKiBpbnRlcm5hbFxuICogY2xhc3MgQ29yZVxuICpcbiAqIFRvcC1sZXZlbCBydWxlcyBleGVjdXRvci4gR2x1ZXMgYmxvY2svaW5saW5lIHBhcnNlcnMgYW5kIGRvZXMgaW50ZXJtZWRpYXRlXG4gKiB0cmFuc2Zvcm1hdGlvbnMuXG4gKiovXG5cbmltcG9ydCBSdWxlciBmcm9tICcuL3J1bGVyLm1qcydcbmltcG9ydCBTdGF0ZUNvcmUgZnJvbSAnLi9ydWxlc19jb3JlL3N0YXRlX2NvcmUubWpzJ1xuXG5pbXBvcnQgcl9ub3JtYWxpemUgZnJvbSAnLi9ydWxlc19jb3JlL25vcm1hbGl6ZS5tanMnXG5pbXBvcnQgcl9ibG9jayBmcm9tICcuL3J1bGVzX2NvcmUvYmxvY2subWpzJ1xuaW1wb3J0IHJfaW5saW5lIGZyb20gJy4vcnVsZXNfY29yZS9pbmxpbmUubWpzJ1xuaW1wb3J0IHJfbGlua2lmeSBmcm9tICcuL3J1bGVzX2NvcmUvbGlua2lmeS5tanMnXG5pbXBvcnQgcl9yZXBsYWNlbWVudHMgZnJvbSAnLi9ydWxlc19jb3JlL3JlcGxhY2VtZW50cy5tanMnXG5pbXBvcnQgcl9zbWFydHF1b3RlcyBmcm9tICcuL3J1bGVzX2NvcmUvc21hcnRxdW90ZXMubWpzJ1xuaW1wb3J0IHJfdGV4dF9qb2luIGZyb20gJy4vcnVsZXNfY29yZS90ZXh0X2pvaW4ubWpzJ1xuXG5jb25zdCBfcnVsZXMgPSBbXG4gIFsnbm9ybWFsaXplJywgICAgICByX25vcm1hbGl6ZV0sXG4gIFsnYmxvY2snLCAgICAgICAgICByX2Jsb2NrXSxcbiAgWydpbmxpbmUnLCAgICAgICAgIHJfaW5saW5lXSxcbiAgWydsaW5raWZ5JywgICAgICAgIHJfbGlua2lmeV0sXG4gIFsncmVwbGFjZW1lbnRzJywgICByX3JlcGxhY2VtZW50c10sXG4gIFsnc21hcnRxdW90ZXMnLCAgICByX3NtYXJ0cXVvdGVzXSxcbiAgLy8gYHRleHRfam9pbmAgZmluZHMgYHRleHRfc3BlY2lhbGAgdG9rZW5zIChmb3IgZXNjYXBlIHNlcXVlbmNlcylcbiAgLy8gYW5kIGpvaW5zIHRoZW0gd2l0aCB0aGUgcmVzdCBvZiB0aGUgdGV4dFxuICBbJ3RleHRfam9pbicsICAgICAgcl90ZXh0X2pvaW5dXG5dXG5cbi8qKlxuICogbmV3IENvcmUoKVxuICoqL1xuZnVuY3Rpb24gQ29yZSAoKSB7XG4gIC8qKlxuICAgKiBDb3JlI3J1bGVyIC0+IFJ1bGVyXG4gICAqXG4gICAqIFtbUnVsZXJdXSBpbnN0YW5jZS4gS2VlcCBjb25maWd1cmF0aW9uIG9mIGNvcmUgcnVsZXMuXG4gICAqKi9cbiAgdGhpcy5ydWxlciA9IG5ldyBSdWxlcigpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLnJ1bGVyLnB1c2goX3J1bGVzW2ldWzBdLCBfcnVsZXNbaV1bMV0pXG4gIH1cbn1cblxuLyoqXG4gKiBDb3JlLnByb2Nlc3Moc3RhdGUpXG4gKlxuICogRXhlY3V0ZXMgY29yZSBjaGFpbiBydWxlcy5cbiAqKi9cbkNvcmUucHJvdG90eXBlLnByb2Nlc3MgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgY29uc3QgcnVsZXMgPSB0aGlzLnJ1bGVyLmdldFJ1bGVzKCcnKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gcnVsZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgcnVsZXNbaV0oc3RhdGUpXG4gIH1cbn1cblxuQ29yZS5wcm90b3R5cGUuU3RhdGUgPSBTdGF0ZUNvcmVcblxuZXhwb3J0IGRlZmF1bHQgQ29yZVxuIiwiLy8gUGFyc2VyIHN0YXRlIGNsYXNzXG5cbmltcG9ydCBUb2tlbiBmcm9tICcuLi90b2tlbi5tanMnXG5pbXBvcnQgeyBpc1NwYWNlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzLm1qcydcblxuZnVuY3Rpb24gU3RhdGVCbG9jayAoc3JjLCBtZCwgZW52LCB0b2tlbnMpIHtcbiAgdGhpcy5zcmMgPSBzcmNcblxuICAvLyBsaW5rIHRvIHBhcnNlciBpbnN0YW5jZVxuICB0aGlzLm1kICAgICA9IG1kXG5cbiAgdGhpcy5lbnYgPSBlbnZcblxuICAvL1xuICAvLyBJbnRlcm5hbCBzdGF0ZSB2YXJ0aWFibGVzXG4gIC8vXG5cbiAgdGhpcy50b2tlbnMgPSB0b2tlbnNcblxuICB0aGlzLmJNYXJrcyA9IFtdICAvLyBsaW5lIGJlZ2luIG9mZnNldHMgZm9yIGZhc3QganVtcHNcbiAgdGhpcy5lTWFya3MgPSBbXSAgLy8gbGluZSBlbmQgb2Zmc2V0cyBmb3IgZmFzdCBqdW1wc1xuICB0aGlzLnRTaGlmdCA9IFtdICAvLyBvZmZzZXRzIG9mIHRoZSBmaXJzdCBub24tc3BhY2UgY2hhcmFjdGVycyAodGFicyBub3QgZXhwYW5kZWQpXG4gIHRoaXMuc0NvdW50ID0gW10gIC8vIGluZGVudHMgZm9yIGVhY2ggbGluZSAodGFicyBleHBhbmRlZClcblxuICAvLyBBbiBhbW91bnQgb2YgdmlydHVhbCBzcGFjZXMgKHRhYnMgZXhwYW5kZWQpIGJldHdlZW4gYmVnaW5uaW5nXG4gIC8vIG9mIGVhY2ggbGluZSAoYk1hcmtzKSBhbmQgcmVhbCBiZWdpbm5pbmcgb2YgdGhhdCBsaW5lLlxuICAvL1xuICAvLyBJdCBleGlzdHMgb25seSBhcyBhIGhhY2sgYmVjYXVzZSBibG9ja3F1b3RlcyBvdmVycmlkZSBiTWFya3NcbiAgLy8gbG9zaW5nIGluZm9ybWF0aW9uIGluIHRoZSBwcm9jZXNzLlxuICAvL1xuICAvLyBJdCdzIHVzZWQgb25seSB3aGVuIGV4cGFuZGluZyB0YWJzLCB5b3UgY2FuIHRoaW5rIGFib3V0IGl0IGFzXG4gIC8vIGFuIGluaXRpYWwgdGFiIGxlbmd0aCwgZS5nLiBic0NvdW50PTIxIGFwcGxpZWQgdG8gc3RyaW5nIGBcXHQxMjNgXG4gIC8vIG1lYW5zIGZpcnN0IHRhYiBzaG91bGQgYmUgZXhwYW5kZWQgdG8gNC0yMSU0ID09PSAzIHNwYWNlcy5cbiAgLy9cbiAgdGhpcy5ic0NvdW50ID0gW11cblxuICAvLyBibG9jayBwYXJzZXIgdmFyaWFibGVzXG5cbiAgLy8gcmVxdWlyZWQgYmxvY2sgY29udGVudCBpbmRlbnQgKGZvciBleGFtcGxlLCBpZiB3ZSBhcmVcbiAgLy8gaW5zaWRlIGEgbGlzdCwgaXQgd291bGQgYmUgcG9zaXRpb25lZCBhZnRlciBsaXN0IG1hcmtlcilcbiAgdGhpcy5ibGtJbmRlbnQgID0gMFxuICB0aGlzLmxpbmUgICAgICAgPSAwIC8vIGxpbmUgaW5kZXggaW4gc3JjXG4gIHRoaXMubGluZU1heCAgICA9IDAgLy8gbGluZXMgY291bnRcbiAgdGhpcy50aWdodCAgICAgID0gZmFsc2UgIC8vIGxvb3NlL3RpZ2h0IG1vZGUgZm9yIGxpc3RzXG4gIHRoaXMuZGRJbmRlbnQgICA9IC0xIC8vIGluZGVudCBvZiB0aGUgY3VycmVudCBkZCBibG9jayAoLTEgaWYgdGhlcmUgaXNuJ3QgYW55KVxuICB0aGlzLmxpc3RJbmRlbnQgPSAtMSAvLyBpbmRlbnQgb2YgdGhlIGN1cnJlbnQgbGlzdCBibG9jayAoLTEgaWYgdGhlcmUgaXNuJ3QgYW55KVxuXG4gIC8vIGNhbiBiZSAnYmxvY2txdW90ZScsICdsaXN0JywgJ3Jvb3QnLCAncGFyYWdyYXBoJyBvciAncmVmZXJlbmNlJ1xuICAvLyB1c2VkIGluIGxpc3RzIHRvIGRldGVybWluZSBpZiB0aGV5IGludGVycnVwdCBhIHBhcmFncmFwaFxuICB0aGlzLnBhcmVudFR5cGUgPSAncm9vdCdcblxuICB0aGlzLmxldmVsID0gMFxuXG4gIC8vIENyZWF0ZSBjYWNoZXNcbiAgLy8gR2VuZXJhdGUgbWFya2Vycy5cbiAgY29uc3QgcyA9IHRoaXMuc3JjXG5cbiAgZm9yIChsZXQgc3RhcnQgPSAwLCBwb3MgPSAwLCBpbmRlbnQgPSAwLCBvZmZzZXQgPSAwLCBsZW4gPSBzLmxlbmd0aCwgaW5kZW50X2ZvdW5kID0gZmFsc2U7IHBvcyA8IGxlbjsgcG9zKyspIHtcbiAgICBjb25zdCBjaCA9IHMuY2hhckNvZGVBdChwb3MpXG5cbiAgICBpZiAoIWluZGVudF9mb3VuZCkge1xuICAgICAgaWYgKGlzU3BhY2UoY2gpKSB7XG4gICAgICAgIGluZGVudCsrXG5cbiAgICAgICAgaWYgKGNoID09PSAweDA5KSB7XG4gICAgICAgICAgb2Zmc2V0ICs9IDQgLSBvZmZzZXQgJSA0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2Zmc2V0KytcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZW50X2ZvdW5kID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaCA9PT0gMHgwQSB8fCBwb3MgPT09IGxlbiAtIDEpIHtcbiAgICAgIGlmIChjaCAhPT0gMHgwQSkgeyBwb3MrKyB9XG4gICAgICB0aGlzLmJNYXJrcy5wdXNoKHN0YXJ0KVxuICAgICAgdGhpcy5lTWFya3MucHVzaChwb3MpXG4gICAgICB0aGlzLnRTaGlmdC5wdXNoKGluZGVudClcbiAgICAgIHRoaXMuc0NvdW50LnB1c2gob2Zmc2V0KVxuICAgICAgdGhpcy5ic0NvdW50LnB1c2goMClcblxuICAgICAgaW5kZW50X2ZvdW5kID0gZmFsc2VcbiAgICAgIGluZGVudCA9IDBcbiAgICAgIG9mZnNldCA9IDBcbiAgICAgIHN0YXJ0ID0gcG9zICsgMVxuICAgIH1cbiAgfVxuXG4gIC8vIFB1c2ggZmFrZSBlbnRyeSB0byBzaW1wbGlmeSBjYWNoZSBib3VuZHMgY2hlY2tzXG4gIHRoaXMuYk1hcmtzLnB1c2gocy5sZW5ndGgpXG4gIHRoaXMuZU1hcmtzLnB1c2gocy5sZW5ndGgpXG4gIHRoaXMudFNoaWZ0LnB1c2goMClcbiAgdGhpcy5zQ291bnQucHVzaCgwKVxuICB0aGlzLmJzQ291bnQucHVzaCgwKVxuXG4gIHRoaXMubGluZU1heCA9IHRoaXMuYk1hcmtzLmxlbmd0aCAtIDEgLy8gZG9uJ3QgY291bnQgbGFzdCBmYWtlIGxpbmVcbn1cblxuLy8gUHVzaCBuZXcgdG9rZW4gdG8gXCJzdHJlYW1cIi5cbi8vXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKHR5cGUsIHRhZywgbmVzdGluZykge1xuICBjb25zdCB0b2tlbiA9IG5ldyBUb2tlbih0eXBlLCB0YWcsIG5lc3RpbmcpXG4gIHRva2VuLmJsb2NrID0gdHJ1ZVxuXG4gIGlmIChuZXN0aW5nIDwgMCkgdGhpcy5sZXZlbC0tIC8vIGNsb3NpbmcgdGFnXG4gIHRva2VuLmxldmVsID0gdGhpcy5sZXZlbFxuICBpZiAobmVzdGluZyA+IDApIHRoaXMubGV2ZWwrKyAvLyBvcGVuaW5nIHRhZ1xuXG4gIHRoaXMudG9rZW5zLnB1c2godG9rZW4pXG4gIHJldHVybiB0b2tlblxufVxuXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gaXNFbXB0eSAobGluZSkge1xuICByZXR1cm4gdGhpcy5iTWFya3NbbGluZV0gKyB0aGlzLnRTaGlmdFtsaW5lXSA+PSB0aGlzLmVNYXJrc1tsaW5lXVxufVxuXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5za2lwRW1wdHlMaW5lcyA9IGZ1bmN0aW9uIHNraXBFbXB0eUxpbmVzIChmcm9tKSB7XG4gIGZvciAobGV0IG1heCA9IHRoaXMubGluZU1heDsgZnJvbSA8IG1heDsgZnJvbSsrKSB7XG4gICAgaWYgKHRoaXMuYk1hcmtzW2Zyb21dICsgdGhpcy50U2hpZnRbZnJvbV0gPCB0aGlzLmVNYXJrc1tmcm9tXSkge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZyb21cbn1cblxuLy8gU2tpcCBzcGFjZXMgZnJvbSBnaXZlbiBwb3NpdGlvbi5cblN0YXRlQmxvY2sucHJvdG90eXBlLnNraXBTcGFjZXMgPSBmdW5jdGlvbiBza2lwU3BhY2VzIChwb3MpIHtcbiAgZm9yIChsZXQgbWF4ID0gdGhpcy5zcmMubGVuZ3RoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgY29uc3QgY2ggPSB0aGlzLnNyYy5jaGFyQ29kZUF0KHBvcylcbiAgICBpZiAoIWlzU3BhY2UoY2gpKSB7IGJyZWFrIH1cbiAgfVxuICByZXR1cm4gcG9zXG59XG5cbi8vIFNraXAgc3BhY2VzIGZyb20gZ2l2ZW4gcG9zaXRpb24gaW4gcmV2ZXJzZS5cblN0YXRlQmxvY2sucHJvdG90eXBlLnNraXBTcGFjZXNCYWNrID0gZnVuY3Rpb24gc2tpcFNwYWNlc0JhY2sgKHBvcywgbWluKSB7XG4gIGlmIChwb3MgPD0gbWluKSB7IHJldHVybiBwb3MgfVxuXG4gIHdoaWxlIChwb3MgPiBtaW4pIHtcbiAgICBpZiAoIWlzU3BhY2UodGhpcy5zcmMuY2hhckNvZGVBdCgtLXBvcykpKSB7IHJldHVybiBwb3MgKyAxIH1cbiAgfVxuICByZXR1cm4gcG9zXG59XG5cbi8vIFNraXAgY2hhciBjb2RlcyBmcm9tIGdpdmVuIHBvc2l0aW9uXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5za2lwQ2hhcnMgPSBmdW5jdGlvbiBza2lwQ2hhcnMgKHBvcywgY29kZSkge1xuICBmb3IgKGxldCBtYXggPSB0aGlzLnNyYy5sZW5ndGg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICBpZiAodGhpcy5zcmMuY2hhckNvZGVBdChwb3MpICE9PSBjb2RlKSB7IGJyZWFrIH1cbiAgfVxuICByZXR1cm4gcG9zXG59XG5cbi8vIFNraXAgY2hhciBjb2RlcyByZXZlcnNlIGZyb20gZ2l2ZW4gcG9zaXRpb24gLSAxXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5za2lwQ2hhcnNCYWNrID0gZnVuY3Rpb24gc2tpcENoYXJzQmFjayAocG9zLCBjb2RlLCBtaW4pIHtcbiAgaWYgKHBvcyA8PSBtaW4pIHsgcmV0dXJuIHBvcyB9XG5cbiAgd2hpbGUgKHBvcyA+IG1pbikge1xuICAgIGlmIChjb2RlICE9PSB0aGlzLnNyYy5jaGFyQ29kZUF0KC0tcG9zKSkgeyByZXR1cm4gcG9zICsgMSB9XG4gIH1cbiAgcmV0dXJuIHBvc1xufVxuXG4vLyBjdXQgbGluZXMgcmFuZ2UgZnJvbSBzb3VyY2UuXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5nZXRMaW5lcyA9IGZ1bmN0aW9uIGdldExpbmVzIChiZWdpbiwgZW5kLCBpbmRlbnQsIGtlZXBMYXN0TEYpIHtcbiAgaWYgKGJlZ2luID49IGVuZCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgY29uc3QgcXVldWUgPSBuZXcgQXJyYXkoZW5kIC0gYmVnaW4pXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxpbmUgPSBiZWdpbjsgbGluZSA8IGVuZDsgbGluZSsrLCBpKyspIHtcbiAgICBsZXQgbGluZUluZGVudCA9IDBcbiAgICBjb25zdCBsaW5lU3RhcnQgPSB0aGlzLmJNYXJrc1tsaW5lXVxuICAgIGxldCBmaXJzdCA9IGxpbmVTdGFydFxuICAgIGxldCBsYXN0XG5cbiAgICBpZiAobGluZSArIDEgPCBlbmQgfHwga2VlcExhc3RMRikge1xuICAgICAgLy8gTm8gbmVlZCBmb3IgYm91bmRzIGNoZWNrIGJlY2F1c2Ugd2UgaGF2ZSBmYWtlIGVudHJ5IG9uIHRhaWwuXG4gICAgICBsYXN0ID0gdGhpcy5lTWFya3NbbGluZV0gKyAxXG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3QgPSB0aGlzLmVNYXJrc1tsaW5lXVxuICAgIH1cblxuICAgIHdoaWxlIChmaXJzdCA8IGxhc3QgJiYgbGluZUluZGVudCA8IGluZGVudCkge1xuICAgICAgY29uc3QgY2ggPSB0aGlzLnNyYy5jaGFyQ29kZUF0KGZpcnN0KVxuXG4gICAgICBpZiAoaXNTcGFjZShjaCkpIHtcbiAgICAgICAgaWYgKGNoID09PSAweDA5KSB7XG4gICAgICAgICAgbGluZUluZGVudCArPSA0IC0gKGxpbmVJbmRlbnQgKyB0aGlzLmJzQ291bnRbbGluZV0pICUgNFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpbmVJbmRlbnQrK1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGZpcnN0IC0gbGluZVN0YXJ0IDwgdGhpcy50U2hpZnRbbGluZV0pIHtcbiAgICAgICAgLy8gcGF0Y2hlZCB0U2hpZnQgbWFza2VkIGNoYXJhY3RlcnMgdG8gbG9vayBsaWtlIHNwYWNlcyAoYmxvY2txdW90ZXMsIGxpc3QgbWFya2VycylcbiAgICAgICAgbGluZUluZGVudCsrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBmaXJzdCsrXG4gICAgfVxuXG4gICAgaWYgKGxpbmVJbmRlbnQgPiBpbmRlbnQpIHtcbiAgICAgIC8vIHBhcnRpYWxseSBleHBhbmRpbmcgdGFicyBpbiBjb2RlIGJsb2NrcywgZS5nICdcXHRcXHRmb29iYXInXG4gICAgICAvLyB3aXRoIGluZGVudD0yIGJlY29tZXMgJyAgXFx0Zm9vYmFyJ1xuICAgICAgcXVldWVbaV0gPSBuZXcgQXJyYXkobGluZUluZGVudCAtIGluZGVudCArIDEpLmpvaW4oJyAnKSArIHRoaXMuc3JjLnNsaWNlKGZpcnN0LCBsYXN0KVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWV1ZVtpXSA9IHRoaXMuc3JjLnNsaWNlKGZpcnN0LCBsYXN0KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBxdWV1ZS5qb2luKCcnKVxufVxuXG4vLyByZS1leHBvcnQgVG9rZW4gY2xhc3MgdG8gdXNlIGluIGJsb2NrIHJ1bGVzXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5Ub2tlbiA9IFRva2VuXG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlQmxvY2tcbiIsIi8vIEdGTSB0YWJsZSwgaHR0cHM6Ly9naXRodWIuZ2l0aHViLmNvbS9nZm0vI3RhYmxlcy1leHRlbnNpb24tXG5cbmltcG9ydCB7IGlzU3BhY2UgfSBmcm9tICcuLi9jb21tb24vdXRpbHMubWpzJ1xuXG4vLyBMaW1pdCB0aGUgYW1vdW50IG9mIGVtcHR5IGF1dG9jb21wbGV0ZWQgY2VsbHMgaW4gYSB0YWJsZSxcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvaXNzdWVzLzEwMDAsXG4vL1xuLy8gQm90aCBwdWxsZG93bi1jbWFyayBhbmQgY29tbW9ubWFyay1ocyBsaW1pdCB0aGUgbnVtYmVyIG9mIGNlbGxzIHRoaXMgd2F5IHRvIH4yMDBrLlxuLy8gV2Ugc2V0IGl0IHRvIDY1aywgd2hpY2ggY2FuIGV4cGFuZCB1c2VyIGlucHV0IGJ5IGEgZmFjdG9yIG9mIHgzNzBcbi8vICgyNTZ4MjU2IHNxdWFyZSBpcyAxLjhrQiBleHBhbmRlZCBpbnRvIDY1MGtCKS5cbmNvbnN0IE1BWF9BVVRPQ09NUExFVEVEX0NFTExTID0gMHgxMDAwMFxuXG5mdW5jdGlvbiBnZXRMaW5lIChzdGF0ZSwgbGluZSkge1xuICBjb25zdCBwb3MgPSBzdGF0ZS5iTWFya3NbbGluZV0gKyBzdGF0ZS50U2hpZnRbbGluZV1cbiAgY29uc3QgbWF4ID0gc3RhdGUuZU1hcmtzW2xpbmVdXG5cbiAgcmV0dXJuIHN0YXRlLnNyYy5zbGljZShwb3MsIG1heClcbn1cblxuZnVuY3Rpb24gZXNjYXBlZFNwbGl0IChzdHIpIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgY29uc3QgbWF4ID0gc3RyLmxlbmd0aFxuXG4gIGxldCBwb3MgPSAwXG4gIGxldCBjaCA9IHN0ci5jaGFyQ29kZUF0KHBvcylcbiAgbGV0IGlzRXNjYXBlZCA9IGZhbHNlXG4gIGxldCBsYXN0UG9zID0gMFxuICBsZXQgY3VycmVudCA9ICcnXG5cbiAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgIGlmIChjaCA9PT0gMHg3Yy8qIHwgKi8pIHtcbiAgICAgIGlmICghaXNFc2NhcGVkKSB7XG4gICAgICAgIC8vIHBpcGUgc2VwYXJhdGluZyBjZWxscywgJ3wnXG4gICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQgKyBzdHIuc3Vic3RyaW5nKGxhc3RQb3MsIHBvcykpXG4gICAgICAgIGN1cnJlbnQgPSAnJ1xuICAgICAgICBsYXN0UG9zID0gcG9zICsgMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZXNjYXBlZCBwaXBlLCAnXFx8J1xuICAgICAgICBjdXJyZW50ICs9IHN0ci5zdWJzdHJpbmcobGFzdFBvcywgcG9zIC0gMSlcbiAgICAgICAgbGFzdFBvcyA9IHBvc1xuICAgICAgfVxuICAgIH1cblxuICAgIGlzRXNjYXBlZCA9IChjaCA9PT0gMHg1Yy8qIFxcICovKVxuICAgIHBvcysrXG5cbiAgICBjaCA9IHN0ci5jaGFyQ29kZUF0KHBvcylcbiAgfVxuXG4gIHJlc3VsdC5wdXNoKGN1cnJlbnQgKyBzdHIuc3Vic3RyaW5nKGxhc3RQb3MpKVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFibGUgKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICAvLyBzaG91bGQgaGF2ZSBhdCBsZWFzdCB0d28gbGluZXNcbiAgaWYgKHN0YXJ0TGluZSArIDIgPiBlbmRMaW5lKSB7IHJldHVybiBmYWxzZSB9XG5cbiAgbGV0IG5leHRMaW5lID0gc3RhcnRMaW5lICsgMVxuXG4gIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIDwgc3RhdGUuYmxrSW5kZW50KSB7IHJldHVybiBmYWxzZSB9XG5cbiAgLy8gaWYgaXQncyBpbmRlbnRlZCBtb3JlIHRoYW4gMyBzcGFjZXMsIGl0IHNob3VsZCBiZSBhIGNvZGUgYmxvY2tcbiAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyByZXR1cm4gZmFsc2UgfVxuXG4gIC8vIGZpcnN0IGNoYXJhY3RlciBvZiB0aGUgc2Vjb25kIGxpbmUgc2hvdWxkIGJlICd8JywgJy0nLCAnOicsXG4gIC8vIGFuZCBubyBvdGhlciBjaGFyYWN0ZXJzIGFyZSBhbGxvd2VkIGJ1dCBzcGFjZXM7XG4gIC8vIGJhc2ljYWxseSwgdGhpcyBpcyB0aGUgZXF1aXZhbGVudCBvZiAvXlstOnxdWy06fFxcc10qJC8gcmVnZXhwXG5cbiAgbGV0IHBvcyA9IHN0YXRlLmJNYXJrc1tuZXh0TGluZV0gKyBzdGF0ZS50U2hpZnRbbmV4dExpbmVdXG4gIGlmIChwb3MgPj0gc3RhdGUuZU1hcmtzW25leHRMaW5lXSkgeyByZXR1cm4gZmFsc2UgfVxuXG4gIGNvbnN0IGZpcnN0Q2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKylcbiAgaWYgKGZpcnN0Q2ggIT09IDB4N0MvKiB8ICovICYmIGZpcnN0Q2ggIT09IDB4MkQvKiAtICovICYmIGZpcnN0Q2ggIT09IDB4M0EvKiA6ICovKSB7IHJldHVybiBmYWxzZSB9XG5cbiAgaWYgKHBvcyA+PSBzdGF0ZS5lTWFya3NbbmV4dExpbmVdKSB7IHJldHVybiBmYWxzZSB9XG5cbiAgY29uc3Qgc2Vjb25kQ2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKylcbiAgaWYgKHNlY29uZENoICE9PSAweDdDLyogfCAqLyAmJiBzZWNvbmRDaCAhPT0gMHgyRC8qIC0gKi8gJiYgc2Vjb25kQ2ggIT09IDB4M0EvKiA6ICovICYmICFpc1NwYWNlKHNlY29uZENoKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gaWYgZmlyc3QgY2hhcmFjdGVyIGlzICctJywgdGhlbiBzZWNvbmQgY2hhcmFjdGVyIG11c3Qgbm90IGJlIGEgc3BhY2VcbiAgLy8gKGR1ZSB0byBwYXJzaW5nIGFtYmlndWl0eSB3aXRoIGxpc3QpXG4gIGlmIChmaXJzdENoID09PSAweDJELyogLSAqLyAmJiBpc1NwYWNlKHNlY29uZENoKSkgeyByZXR1cm4gZmFsc2UgfVxuXG4gIHdoaWxlIChwb3MgPCBzdGF0ZS5lTWFya3NbbmV4dExpbmVdKSB7XG4gICAgY29uc3QgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpXG5cbiAgICBpZiAoY2ggIT09IDB4N0MvKiB8ICovICYmIGNoICE9PSAweDJELyogLSAqLyAmJiBjaCAhPT0gMHgzQS8qIDogKi8gJiYgIWlzU3BhY2UoY2gpKSB7IHJldHVybiBmYWxzZSB9XG5cbiAgICBwb3MrK1xuICB9XG5cbiAgbGV0IGxpbmVUZXh0ID0gZ2V0TGluZShzdGF0ZSwgc3RhcnRMaW5lICsgMSlcbiAgbGV0IGNvbHVtbnMgPSBsaW5lVGV4dC5zcGxpdCgnfCcpXG4gIGNvbnN0IGFsaWducyA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHQgPSBjb2x1bW5zW2ldLnRyaW0oKVxuICAgIGlmICghdCkge1xuICAgICAgLy8gYWxsb3cgZW1wdHkgY29sdW1ucyBiZWZvcmUgYW5kIGFmdGVyIHRhYmxlLCBidXQgbm90IGluIGJldHdlZW4gY29sdW1ucztcbiAgICAgIC8vIGUuZy4gYWxsb3cgYCB8LS0tfCBgLCBkaXNhbGxvdyBgIC0tLXx8LS0tIGBcbiAgICAgIGlmIChpID09PSAwIHx8IGkgPT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEvXjo/LSs6PyQvLnRlc3QodCkpIHsgcmV0dXJuIGZhbHNlIH1cbiAgICBpZiAodC5jaGFyQ29kZUF0KHQubGVuZ3RoIC0gMSkgPT09IDB4M0EvKiA6ICovKSB7XG4gICAgICBhbGlnbnMucHVzaCh0LmNoYXJDb2RlQXQoMCkgPT09IDB4M0EvKiA6ICovID8gJ2NlbnRlcicgOiAncmlnaHQnKVxuICAgIH0gZWxzZSBpZiAodC5jaGFyQ29kZUF0KDApID09PSAweDNBLyogOiAqLykge1xuICAgICAgYWxpZ25zLnB1c2goJ2xlZnQnKVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGlnbnMucHVzaCgnJylcbiAgICB9XG4gIH1cblxuICBsaW5lVGV4dCA9IGdldExpbmUoc3RhdGUsIHN0YXJ0TGluZSkudHJpbSgpXG4gIGlmIChsaW5lVGV4dC5pbmRleE9mKCd8JykgPT09IC0xKSB7IHJldHVybiBmYWxzZSB9XG4gIGlmIChzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7IHJldHVybiBmYWxzZSB9XG4gIGNvbHVtbnMgPSBlc2NhcGVkU3BsaXQobGluZVRleHQpXG4gIGlmIChjb2x1bW5zLmxlbmd0aCAmJiBjb2x1bW5zWzBdID09PSAnJykgY29sdW1ucy5zaGlmdCgpXG4gIGlmIChjb2x1bW5zLmxlbmd0aCAmJiBjb2x1bW5zW2NvbHVtbnMubGVuZ3RoIC0gMV0gPT09ICcnKSBjb2x1bW5zLnBvcCgpXG5cbiAgLy8gaGVhZGVyIHJvdyB3aWxsIGRlZmluZSBhbiBhbW91bnQgb2YgY29sdW1ucyBpbiB0aGUgZW50aXJlIHRhYmxlLFxuICAvLyBhbmQgYWxpZ24gcm93IHNob3VsZCBiZSBleGFjdGx5IHRoZSBzYW1lICh0aGUgcmVzdCBvZiB0aGUgcm93cyBjYW4gZGlmZmVyKVxuICBjb25zdCBjb2x1bW5Db3VudCA9IGNvbHVtbnMubGVuZ3RoXG4gIGlmIChjb2x1bW5Db3VudCA9PT0gMCB8fCBjb2x1bW5Db3VudCAhPT0gYWxpZ25zLmxlbmd0aCkgeyByZXR1cm4gZmFsc2UgfVxuXG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWUgfVxuXG4gIGNvbnN0IG9sZFBhcmVudFR5cGUgPSBzdGF0ZS5wYXJlbnRUeXBlXG4gIHN0YXRlLnBhcmVudFR5cGUgPSAndGFibGUnXG5cbiAgLy8gdXNlICdibG9ja3F1b3RlJyBsaXN0cyBmb3IgdGVybWluYXRpb24gYmVjYXVzZSBpdCdzXG4gIC8vIHRoZSBtb3N0IHNpbWlsYXIgdG8gdGFibGVzXG4gIGNvbnN0IHRlcm1pbmF0b3JSdWxlcyA9IHN0YXRlLm1kLmJsb2NrLnJ1bGVyLmdldFJ1bGVzKCdibG9ja3F1b3RlJylcblxuICBjb25zdCB0b2tlbl90byA9IHN0YXRlLnB1c2goJ3RhYmxlX29wZW4nLCAndGFibGUnLCAxKVxuICBjb25zdCB0YWJsZUxpbmVzID0gW3N0YXJ0TGluZSwgMF1cbiAgdG9rZW5fdG8ubWFwID0gdGFibGVMaW5lc1xuXG4gIGNvbnN0IHRva2VuX3RobyA9IHN0YXRlLnB1c2goJ3RoZWFkX29wZW4nLCAndGhlYWQnLCAxKVxuICB0b2tlbl90aG8ubWFwID0gW3N0YXJ0TGluZSwgc3RhcnRMaW5lICsgMV1cblxuICBjb25zdCB0b2tlbl9odHJvID0gc3RhdGUucHVzaCgndHJfb3BlbicsICd0cicsIDEpXG4gIHRva2VuX2h0cm8ubWFwID0gW3N0YXJ0TGluZSwgc3RhcnRMaW5lICsgMV1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0b2tlbl9obyA9IHN0YXRlLnB1c2goJ3RoX29wZW4nLCAndGgnLCAxKVxuICAgIGlmIChhbGlnbnNbaV0pIHtcbiAgICAgIHRva2VuX2hvLmF0dHJzICA9IFtbJ3N0eWxlJywgJ3RleHQtYWxpZ246JyArIGFsaWduc1tpXV1dXG4gICAgfVxuXG4gICAgY29uc3QgdG9rZW5faWwgPSBzdGF0ZS5wdXNoKCdpbmxpbmUnLCAnJywgMClcbiAgICB0b2tlbl9pbC5jb250ZW50ICA9IGNvbHVtbnNbaV0udHJpbSgpXG4gICAgdG9rZW5faWwuY2hpbGRyZW4gPSBbXVxuXG4gICAgc3RhdGUucHVzaCgndGhfY2xvc2UnLCAndGgnLCAtMSlcbiAgfVxuXG4gIHN0YXRlLnB1c2goJ3RyX2Nsb3NlJywgJ3RyJywgLTEpXG4gIHN0YXRlLnB1c2goJ3RoZWFkX2Nsb3NlJywgJ3RoZWFkJywgLTEpXG5cbiAgbGV0IHRib2R5TGluZXNcbiAgbGV0IGF1dG9jb21wbGV0ZWRDZWxscyA9IDBcblxuICBmb3IgKG5leHRMaW5lID0gc3RhcnRMaW5lICsgMjsgbmV4dExpbmUgPCBlbmRMaW5lOyBuZXh0TGluZSsrKSB7XG4gICAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgYnJlYWsgfVxuXG4gICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0ZXJtaW5hdG9yUnVsZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAodGVybWluYXRvclJ1bGVzW2ldKHN0YXRlLCBuZXh0TGluZSwgZW5kTGluZSwgdHJ1ZSkpIHtcbiAgICAgICAgdGVybWluYXRlID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hdGUpIHsgYnJlYWsgfVxuICAgIGxpbmVUZXh0ID0gZ2V0TGluZShzdGF0ZSwgbmV4dExpbmUpLnRyaW0oKVxuICAgIGlmICghbGluZVRleHQpIHsgYnJlYWsgfVxuICAgIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHsgYnJlYWsgfVxuICAgIGNvbHVtbnMgPSBlc2NhcGVkU3BsaXQobGluZVRleHQpXG4gICAgaWYgKGNvbHVtbnMubGVuZ3RoICYmIGNvbHVtbnNbMF0gPT09ICcnKSBjb2x1bW5zLnNoaWZ0KClcbiAgICBpZiAoY29sdW1ucy5sZW5ndGggJiYgY29sdW1uc1tjb2x1bW5zLmxlbmd0aCAtIDFdID09PSAnJykgY29sdW1ucy5wb3AoKVxuXG4gICAgLy8gbm90ZTogYXV0b2NvbXBsZXRlIGNvdW50IGNhbiBiZSBuZWdhdGl2ZSBpZiB1c2VyIHNwZWNpZmllcyBtb3JlIGNvbHVtbnMgdGhhbiBoZWFkZXIsXG4gICAgLy8gYnV0IHRoYXQgZG9lcyBub3QgYWZmZWN0IGludGVuZGVkIHVzZSAod2hpY2ggaXMgbGltaXRpbmcgZXhwYW5zaW9uKVxuICAgIGF1dG9jb21wbGV0ZWRDZWxscyArPSBjb2x1bW5Db3VudCAtIGNvbHVtbnMubGVuZ3RoXG4gICAgaWYgKGF1dG9jb21wbGV0ZWRDZWxscyA+IE1BWF9BVVRPQ09NUExFVEVEX0NFTExTKSB7IGJyZWFrIH1cblxuICAgIGlmIChuZXh0TGluZSA9PT0gc3RhcnRMaW5lICsgMikge1xuICAgICAgY29uc3QgdG9rZW5fdGJvID0gc3RhdGUucHVzaCgndGJvZHlfb3BlbicsICd0Ym9keScsIDEpXG4gICAgICB0b2tlbl90Ym8ubWFwID0gdGJvZHlMaW5lcyA9IFtzdGFydExpbmUgKyAyLCAwXVxuICAgIH1cblxuICAgIGNvbnN0IHRva2VuX3RybyA9IHN0YXRlLnB1c2goJ3RyX29wZW4nLCAndHInLCAxKVxuICAgIHRva2VuX3Ryby5tYXAgPSBbbmV4dExpbmUsIG5leHRMaW5lICsgMV1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgdG9rZW5fdGRvID0gc3RhdGUucHVzaCgndGRfb3BlbicsICd0ZCcsIDEpXG4gICAgICBpZiAoYWxpZ25zW2ldKSB7XG4gICAgICAgIHRva2VuX3Rkby5hdHRycyAgPSBbWydzdHlsZScsICd0ZXh0LWFsaWduOicgKyBhbGlnbnNbaV1dXVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0b2tlbl9pbCA9IHN0YXRlLnB1c2goJ2lubGluZScsICcnLCAwKVxuICAgICAgdG9rZW5faWwuY29udGVudCAgPSBjb2x1bW5zW2ldID8gY29sdW1uc1tpXS50cmltKCkgOiAnJ1xuICAgICAgdG9rZW5faWwuY2hpbGRyZW4gPSBbXVxuXG4gICAgICBzdGF0ZS5wdXNoKCd0ZF9jbG9zZScsICd0ZCcsIC0xKVxuICAgIH1cbiAgICBzdGF0ZS5wdXNoKCd0cl9jbG9zZScsICd0cicsIC0xKVxuICB9XG5cbiAgaWYgKHRib2R5TGluZXMpIHtcbiAgICBzdGF0ZS5wdXNoKCd0Ym9keV9jbG9zZScsICd0Ym9keScsIC0xKVxuICAgIHRib2R5TGluZXNbMV0gPSBuZXh0TGluZVxuICB9XG5cbiAgc3RhdGUucHVzaCgndGFibGVfY2xvc2UnLCAndGFibGUnLCAtMSlcbiAgdGFibGVMaW5lc1sxXSA9IG5leHRMaW5lXG5cbiAgc3RhdGUucGFyZW50VHlwZSA9IG9sZFBhcmVudFR5cGVcbiAgc3RhdGUubGluZSA9IG5leHRMaW5lXG4gIHJldHVybiB0cnVlXG59XG4iLCIvLyBDb2RlIGJsb2NrICg0IHNwYWNlcyBwYWRkZWQpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvZGUgKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUvKiwgc2lsZW50ICovKSB7XG4gIGlmIChzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA8IDQpIHsgcmV0dXJuIGZhbHNlIH1cblxuICBsZXQgbmV4dExpbmUgPSBzdGFydExpbmUgKyAxXG4gIGxldCBsYXN0ID0gbmV4dExpbmVcblxuICB3aGlsZSAobmV4dExpbmUgPCBlbmRMaW5lKSB7XG4gICAgaWYgKHN0YXRlLmlzRW1wdHkobmV4dExpbmUpKSB7XG4gICAgICBuZXh0TGluZSsrXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHtcbiAgICAgIG5leHRMaW5lKytcbiAgICAgIGxhc3QgPSBuZXh0TGluZVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgYnJlYWtcbiAgfVxuXG4gIHN0YXRlLmxpbmUgPSBsYXN0XG5cbiAgY29uc3QgdG9rZW4gICA9IHN0YXRlLnB1c2goJ2NvZGVfYmxvY2snLCAnY29kZScsIDApXG4gIHRva2VuLmNvbnRlbnQgPSBzdGF0ZS5nZXRMaW5lcyhzdGFydExpbmUsIGxhc3QsIDQgKyBzdGF0ZS5ibGtJbmRlbnQsIGZhbHNlKSArICdcXG4nXG4gIHRva2VuLm1hcCAgICAgPSBbc3RhcnRMaW5lLCBzdGF0ZS5saW5lXVxuXG4gIHJldHVybiB0cnVlXG59XG4iLCIvLyBmZW5jZXMgKGBgYCBsYW5nLCB+fn4gbGFuZylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmVuY2UgKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICBsZXQgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXVxuICBsZXQgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV1cblxuICAvLyBpZiBpdCdzIGluZGVudGVkIG1vcmUgdGhhbiAzIHNwYWNlcywgaXQgc2hvdWxkIGJlIGEgY29kZSBibG9ja1xuICBpZiAoc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyByZXR1cm4gZmFsc2UgfVxuXG4gIGlmIChwb3MgKyAzID4gbWF4KSB7IHJldHVybiBmYWxzZSB9XG5cbiAgY29uc3QgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKVxuXG4gIGlmIChtYXJrZXIgIT09IDB4N0UvKiB+ICovICYmIG1hcmtlciAhPT0gMHg2MCAvKiBgICovKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBzY2FuIG1hcmtlciBsZW5ndGhcbiAgbGV0IG1lbSA9IHBvc1xuICBwb3MgPSBzdGF0ZS5za2lwQ2hhcnMocG9zLCBtYXJrZXIpXG5cbiAgbGV0IGxlbiA9IHBvcyAtIG1lbVxuXG4gIGlmIChsZW4gPCAzKSB7IHJldHVybiBmYWxzZSB9XG5cbiAgY29uc3QgbWFya3VwID0gc3RhdGUuc3JjLnNsaWNlKG1lbSwgcG9zKVxuICBjb25zdCBwYXJhbXMgPSBzdGF0ZS5zcmMuc2xpY2UocG9zLCBtYXgpXG5cbiAgaWYgKG1hcmtlciA9PT0gMHg2MCAvKiBgICovKSB7XG4gICAgaWYgKHBhcmFtcy5pbmRleE9mKFN0cmluZy5mcm9tQ2hhckNvZGUobWFya2VyKSkgPj0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgLy8gU2luY2Ugc3RhcnQgaXMgZm91bmQsIHdlIGNhbiByZXBvcnQgc3VjY2VzcyBoZXJlIGluIHZhbGlkYXRpb24gbW9kZVxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlIH1cblxuICAvLyBzZWFyY2ggZW5kIG9mIGJsb2NrXG4gIGxldCBuZXh0TGluZSA9IHN0YXJ0TGluZVxuICBsZXQgaGF2ZUVuZE1hcmtlciA9IGZhbHNlXG5cbiAgZm9yICg7Oykge1xuICAgIG5leHRMaW5lKytcbiAgICBpZiAobmV4dExpbmUgPj0gZW5kTGluZSkge1xuICAgICAgLy8gdW5jbG9zZWQgYmxvY2sgc2hvdWxkIGJlIGF1dG9jbG9zZWQgYnkgZW5kIG9mIGRvY3VtZW50LlxuICAgICAgLy8gYWxzbyBibG9jayBzZWVtcyB0byBiZSBhdXRvY2xvc2VkIGJ5IGVuZCBvZiBwYXJlbnRcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcG9zID0gbWVtID0gc3RhdGUuYk1hcmtzW25leHRMaW5lXSArIHN0YXRlLnRTaGlmdFtuZXh0TGluZV1cbiAgICBtYXggPSBzdGF0ZS5lTWFya3NbbmV4dExpbmVdXG5cbiAgICBpZiAocG9zIDwgbWF4ICYmIHN0YXRlLnNDb3VudFtuZXh0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHtcbiAgICAgIC8vIG5vbi1lbXB0eSBsaW5lIHdpdGggbmVnYXRpdmUgaW5kZW50IHNob3VsZCBzdG9wIHRoZSBsaXN0OlxuICAgICAgLy8gLSBgYGBcbiAgICAgIC8vICB0ZXN0XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSBtYXJrZXIpIHsgY29udGludWUgfVxuXG4gICAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkge1xuICAgICAgLy8gY2xvc2luZyBmZW5jZSBzaG91bGQgYmUgaW5kZW50ZWQgbGVzcyB0aGFuIDQgc3BhY2VzXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHBvcyA9IHN0YXRlLnNraXBDaGFycyhwb3MsIG1hcmtlcilcblxuICAgIC8vIGNsb3NpbmcgY29kZSBmZW5jZSBtdXN0IGJlIGF0IGxlYXN0IGFzIGxvbmcgYXMgdGhlIG9wZW5pbmcgb25lXG4gICAgaWYgKHBvcyAtIG1lbSA8IGxlbikgeyBjb250aW51ZSB9XG5cbiAgICAvLyBtYWtlIHN1cmUgdGFpbCBoYXMgc3BhY2VzIG9ubHlcbiAgICBwb3MgPSBzdGF0ZS5za2lwU3BhY2VzKHBvcylcblxuICAgIGlmIChwb3MgPCBtYXgpIHsgY29udGludWUgfVxuXG4gICAgaGF2ZUVuZE1hcmtlciA9IHRydWVcbiAgICAvLyBmb3VuZCFcbiAgICBicmVha1xuICB9XG5cbiAgLy8gSWYgYSBmZW5jZSBoYXMgaGVhZGluZyBzcGFjZXMsIHRoZXkgc2hvdWxkIGJlIHJlbW92ZWQgZnJvbSBpdHMgaW5uZXIgYmxvY2tcbiAgbGVuID0gc3RhdGUuc0NvdW50W3N0YXJ0TGluZV1cblxuICBzdGF0ZS5saW5lID0gbmV4dExpbmUgKyAoaGF2ZUVuZE1hcmtlciA/IDEgOiAwKVxuXG4gIGNvbnN0IHRva2VuICAgPSBzdGF0ZS5wdXNoKCdmZW5jZScsICdjb2RlJywgMClcbiAgdG9rZW4uaW5mbyAgICA9IHBhcmFtc1xuICB0b2tlbi5jb250ZW50ID0gc3RhdGUuZ2V0TGluZXMoc3RhcnRMaW5lICsgMSwgbmV4dExpbmUsIGxlbiwgdHJ1ZSlcbiAgdG9rZW4ubWFya3VwICA9IG1hcmt1cFxuICB0b2tlbi5tYXAgICAgID0gW3N0YXJ0TGluZSwgc3RhdGUubGluZV1cblxuICByZXR1cm4gdHJ1ZVxufVxuIiwiLy8gQmxvY2sgcXVvdGVzXG5cbmltcG9ydCB7IGlzU3BhY2UgfSBmcm9tICcuLi9jb21tb24vdXRpbHMubWpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBibG9ja3F1b3RlIChzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCBzaWxlbnQpIHtcbiAgbGV0IHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV1cbiAgbGV0IG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdXG5cbiAgY29uc3Qgb2xkTGluZU1heCA9IHN0YXRlLmxpbmVNYXhcblxuICAvLyBpZiBpdCdzIGluZGVudGVkIG1vcmUgdGhhbiAzIHNwYWNlcywgaXQgc2hvdWxkIGJlIGEgY29kZSBibG9ja1xuICBpZiAoc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyByZXR1cm4gZmFsc2UgfVxuXG4gIC8vIGNoZWNrIHRoZSBibG9jayBxdW90ZSBtYXJrZXJcbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4M0UvKiA+ICovKSB7IHJldHVybiBmYWxzZSB9XG5cbiAgLy8gd2Uga25vdyB0aGF0IGl0J3MgZ29pbmcgdG8gYmUgYSB2YWxpZCBibG9ja3F1b3RlLFxuICAvLyBzbyBubyBwb2ludCB0cnlpbmcgdG8gZmluZCB0aGUgZW5kIG9mIGl0IGluIHNpbGVudCBtb2RlXG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWUgfVxuXG4gIGNvbnN0IG9sZEJNYXJrcyAgPSBbXVxuICBjb25zdCBvbGRCU0NvdW50ID0gW11cbiAgY29uc3Qgb2xkU0NvdW50ICA9IFtdXG4gIGNvbnN0IG9sZFRTaGlmdCAgPSBbXVxuXG4gIGNvbnN0IHRlcm1pbmF0b3JSdWxlcyA9IHN0YXRlLm1kLmJsb2NrLnJ1bGVyLmdldFJ1bGVzKCdibG9ja3F1b3RlJylcblxuICBjb25zdCBvbGRQYXJlbnRUeXBlID0gc3RhdGUucGFyZW50VHlwZVxuICBzdGF0ZS5wYXJlbnRUeXBlID0gJ2Jsb2NrcXVvdGUnXG4gIGxldCBsYXN0TGluZUVtcHR5ID0gZmFsc2VcbiAgbGV0IG5leHRMaW5lXG5cbiAgLy8gU2VhcmNoIHRoZSBlbmQgb2YgdGhlIGJsb2NrXG4gIC8vXG4gIC8vIEJsb2NrIGVuZHMgd2l0aCBlaXRoZXI6XG4gIC8vICAxLiBhbiBlbXB0eSBsaW5lIG91dHNpZGU6XG4gIC8vICAgICBgYGBcbiAgLy8gICAgID4gdGVzdFxuICAvL1xuICAvLyAgICAgYGBgXG4gIC8vICAyLiBhbiBlbXB0eSBsaW5lIGluc2lkZTpcbiAgLy8gICAgIGBgYFxuICAvLyAgICAgPlxuICAvLyAgICAgdGVzdFxuICAvLyAgICAgYGBgXG4gIC8vICAzLiBhbm90aGVyIHRhZzpcbiAgLy8gICAgIGBgYFxuICAvLyAgICAgPiB0ZXN0XG4gIC8vICAgICAgLSAtIC1cbiAgLy8gICAgIGBgYFxuICBmb3IgKG5leHRMaW5lID0gc3RhcnRMaW5lOyBuZXh0TGluZSA8IGVuZExpbmU7IG5leHRMaW5lKyspIHtcbiAgICAvLyBjaGVjayBpZiBpdCdzIG91dGRlbnRlZCwgaS5lLiBpdCdzIGluc2lkZSBsaXN0IGl0ZW0gYW5kIGluZGVudGVkXG4gICAgLy8gbGVzcyB0aGFuIHNhaWQgbGlzdCBpdGVtOlxuICAgIC8vXG4gICAgLy8gYGBgXG4gICAgLy8gMS4gYW55dGhpbmdcbiAgICAvLyAgICA+IGN1cnJlbnQgYmxvY2txdW90ZVxuICAgIC8vIDIuIGNoZWNraW5nIHRoaXMgbGluZVxuICAgIC8vIGBgYFxuICAgIGNvbnN0IGlzT3V0ZGVudGVkID0gc3RhdGUuc0NvdW50W25leHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudFxuXG4gICAgcG9zID0gc3RhdGUuYk1hcmtzW25leHRMaW5lXSArIHN0YXRlLnRTaGlmdFtuZXh0TGluZV1cbiAgICBtYXggPSBzdGF0ZS5lTWFya3NbbmV4dExpbmVdXG5cbiAgICBpZiAocG9zID49IG1heCkge1xuICAgICAgLy8gQ2FzZSAxOiBsaW5lIGlzIG5vdCBpbnNpZGUgdGhlIGJsb2NrcXVvdGUsIGFuZCB0aGlzIGxpbmUgaXMgZW1wdHkuXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKykgPT09IDB4M0UvKiA+ICovICYmICFpc091dGRlbnRlZCkge1xuICAgICAgLy8gVGhpcyBsaW5lIGlzIGluc2lkZSB0aGUgYmxvY2txdW90ZS5cblxuICAgICAgLy8gc2V0IG9mZnNldCBwYXN0IHNwYWNlcyBhbmQgXCI+XCJcbiAgICAgIGxldCBpbml0aWFsID0gc3RhdGUuc0NvdW50W25leHRMaW5lXSArIDFcbiAgICAgIGxldCBzcGFjZUFmdGVyTWFya2VyXG4gICAgICBsZXQgYWRqdXN0VGFiXG5cbiAgICAgIC8vIHNraXAgb25lIG9wdGlvbmFsIHNwYWNlIGFmdGVyICc+J1xuICAgICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4MjAgLyogc3BhY2UgKi8pIHtcbiAgICAgICAgLy8gJyA+ICAgdGVzdCAnXG4gICAgICAgIC8vICAgICBeIC0tIHBvc2l0aW9uIHN0YXJ0IG9mIGxpbmUgaGVyZTpcbiAgICAgICAgcG9zKytcbiAgICAgICAgaW5pdGlhbCsrXG4gICAgICAgIGFkanVzdFRhYiA9IGZhbHNlXG4gICAgICAgIHNwYWNlQWZ0ZXJNYXJrZXIgPSB0cnVlXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4MDkgLyogdGFiICovKSB7XG4gICAgICAgIHNwYWNlQWZ0ZXJNYXJrZXIgPSB0cnVlXG5cbiAgICAgICAgaWYgKChzdGF0ZS5ic0NvdW50W25leHRMaW5lXSArIGluaXRpYWwpICUgNCA9PT0gMykge1xuICAgICAgICAgIC8vICcgID5cXHQgIHRlc3QgJ1xuICAgICAgICAgIC8vICAgICAgIF4gLS0gcG9zaXRpb24gc3RhcnQgb2YgbGluZSBoZXJlICh0YWIgaGFzIHdpZHRoPT09MSlcbiAgICAgICAgICBwb3MrK1xuICAgICAgICAgIGluaXRpYWwrK1xuICAgICAgICAgIGFkanVzdFRhYiA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gJyA+XFx0ICB0ZXN0ICdcbiAgICAgICAgICAvLyAgICBeIC0tIHBvc2l0aW9uIHN0YXJ0IG9mIGxpbmUgaGVyZSArIHNoaWZ0IGJzQ291bnQgc2xpZ2h0bHlcbiAgICAgICAgICAvLyAgICAgICAgIHRvIG1ha2UgZXh0cmEgc3BhY2UgYXBwZWFyXG4gICAgICAgICAgYWRqdXN0VGFiID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcGFjZUFmdGVyTWFya2VyID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgbGV0IG9mZnNldCA9IGluaXRpYWxcbiAgICAgIG9sZEJNYXJrcy5wdXNoKHN0YXRlLmJNYXJrc1tuZXh0TGluZV0pXG4gICAgICBzdGF0ZS5iTWFya3NbbmV4dExpbmVdID0gcG9zXG5cbiAgICAgIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICAgICAgY29uc3QgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpXG5cbiAgICAgICAgaWYgKGlzU3BhY2UoY2gpKSB7XG4gICAgICAgICAgaWYgKGNoID09PSAweDA5KSB7XG4gICAgICAgICAgICBvZmZzZXQgKz0gNCAtIChvZmZzZXQgKyBzdGF0ZS5ic0NvdW50W25leHRMaW5lXSArIChhZGp1c3RUYWIgPyAxIDogMCkpICUgNFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXQrK1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgcG9zKytcbiAgICAgIH1cblxuICAgICAgbGFzdExpbmVFbXB0eSA9IHBvcyA+PSBtYXhcblxuICAgICAgb2xkQlNDb3VudC5wdXNoKHN0YXRlLmJzQ291bnRbbmV4dExpbmVdKVxuICAgICAgc3RhdGUuYnNDb3VudFtuZXh0TGluZV0gPSBzdGF0ZS5zQ291bnRbbmV4dExpbmVdICsgMSArIChzcGFjZUFmdGVyTWFya2VyID8gMSA6IDApXG5cbiAgICAgIG9sZFNDb3VudC5wdXNoKHN0YXRlLnNDb3VudFtuZXh0TGluZV0pXG4gICAgICBzdGF0ZS5zQ291bnRbbmV4dExpbmVdID0gb2Zmc2V0IC0gaW5pdGlhbFxuXG4gICAgICBvbGRUU2hpZnQucHVzaChzdGF0ZS50U2hpZnRbbmV4dExpbmVdKVxuICAgICAgc3RhdGUudFNoaWZ0W25leHRMaW5lXSA9IHBvcyAtIHN0YXRlLmJNYXJrc1tuZXh0TGluZV1cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gQ2FzZSAyOiBsaW5lIGlzIG5vdCBpbnNpZGUgdGhlIGJsb2NrcXVvdGUsIGFuZCB0aGUgbGFzdCBsaW5lIHdhcyBlbXB0eS5cbiAgICBpZiAobGFzdExpbmVFbXB0eSkgeyBicmVhayB9XG5cbiAgICAvLyBDYXNlIDM6IGFub3RoZXIgdGFnIGZvdW5kLlxuICAgIGxldCB0ZXJtaW5hdGUgPSBmYWxzZVxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGVybWluYXRvclJ1bGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHRlcm1pbmF0b3JSdWxlc1tpXShzdGF0ZSwgbmV4dExpbmUsIGVuZExpbmUsIHRydWUpKSB7XG4gICAgICAgIHRlcm1pbmF0ZSA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAvLyBRdWlyayB0byBlbmZvcmNlIFwiaGFyZCB0ZXJtaW5hdGlvbiBtb2RlXCIgZm9yIHBhcmFncmFwaHM7XG4gICAgICAvLyBub3JtYWxseSBpZiB5b3UgY2FsbCBgdG9rZW5pemUoc3RhdGUsIHN0YXJ0TGluZSwgbmV4dExpbmUpYCxcbiAgICAgIC8vIHBhcmFncmFwaHMgd2lsbCBsb29rIGJlbG93IG5leHRMaW5lIGZvciBwYXJhZ3JhcGggY29udGludWF0aW9uLFxuICAgICAgLy8gYnV0IGlmIGJsb2NrcXVvdGUgaXMgdGVybWluYXRlZCBieSBhbm90aGVyIHRhZywgdGhleSBzaG91bGRuJ3RcbiAgICAgIHN0YXRlLmxpbmVNYXggPSBuZXh0TGluZVxuXG4gICAgICBpZiAoc3RhdGUuYmxrSW5kZW50ICE9PSAwKSB7XG4gICAgICAgIC8vIHN0YXRlLmJsa0luZGVudCB3YXMgbm9uLXplcm8sIHdlIG5vdyBzZXQgaXQgdG8gemVybyxcbiAgICAgICAgLy8gc28gd2UgbmVlZCB0byByZS1jYWxjdWxhdGUgYWxsIG9mZnNldHMgdG8gYXBwZWFyIGFzXG4gICAgICAgIC8vIGlmIGluZGVudCB3YXNuJ3QgY2hhbmdlZFxuICAgICAgICBvbGRCTWFya3MucHVzaChzdGF0ZS5iTWFya3NbbmV4dExpbmVdKVxuICAgICAgICBvbGRCU0NvdW50LnB1c2goc3RhdGUuYnNDb3VudFtuZXh0TGluZV0pXG4gICAgICAgIG9sZFRTaGlmdC5wdXNoKHN0YXRlLnRTaGlmdFtuZXh0TGluZV0pXG4gICAgICAgIG9sZFNDb3VudC5wdXNoKHN0YXRlLnNDb3VudFtuZXh0TGluZV0pXG4gICAgICAgIHN0YXRlLnNDb3VudFtuZXh0TGluZV0gLT0gc3RhdGUuYmxrSW5kZW50XG4gICAgICB9XG5cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgb2xkQk1hcmtzLnB1c2goc3RhdGUuYk1hcmtzW25leHRMaW5lXSlcbiAgICBvbGRCU0NvdW50LnB1c2goc3RhdGUuYnNDb3VudFtuZXh0TGluZV0pXG4gICAgb2xkVFNoaWZ0LnB1c2goc3RhdGUudFNoaWZ0W25leHRMaW5lXSlcbiAgICBvbGRTQ291bnQucHVzaChzdGF0ZS5zQ291bnRbbmV4dExpbmVdKVxuXG4gICAgLy8gQSBuZWdhdGl2ZSBpbmRlbnRhdGlvbiBtZWFucyB0aGF0IHRoaXMgaXMgYSBwYXJhZ3JhcGggY29udGludWF0aW9uXG4gICAgLy9cbiAgICBzdGF0ZS5zQ291bnRbbmV4dExpbmVdID0gLTFcbiAgfVxuXG4gIGNvbnN0IG9sZEluZGVudCA9IHN0YXRlLmJsa0luZGVudFxuICBzdGF0ZS5ibGtJbmRlbnQgPSAwXG5cbiAgY29uc3QgdG9rZW5fbyAgPSBzdGF0ZS5wdXNoKCdibG9ja3F1b3RlX29wZW4nLCAnYmxvY2txdW90ZScsIDEpXG4gIHRva2VuX28ubWFya3VwID0gJz4nXG4gIGNvbnN0IGxpbmVzID0gW3N0YXJ0TGluZSwgMF1cbiAgdG9rZW5fby5tYXAgICAgPSBsaW5lc1xuXG4gIHN0YXRlLm1kLmJsb2NrLnRva2VuaXplKHN0YXRlLCBzdGFydExpbmUsIG5leHRMaW5lKVxuXG4gIGNvbnN0IHRva2VuX2MgID0gc3RhdGUucHVzaCgnYmxvY2txdW90ZV9jbG9zZScsICdibG9ja3F1b3RlJywgLTEpXG4gIHRva2VuX2MubWFya3VwID0gJz4nXG5cbiAgc3RhdGUubGluZU1heCA9IG9sZExpbmVNYXhcbiAgc3RhdGUucGFyZW50VHlwZSA9IG9sZFBhcmVudFR5cGVcbiAgbGluZXNbMV0gPSBzdGF0ZS5saW5lXG5cbiAgLy8gUmVzdG9yZSBvcmlnaW5hbCB0U2hpZnQ7IHRoaXMgbWlnaHQgbm90IGJlIG5lY2Vzc2FyeSBzaW5jZSB0aGUgcGFyc2VyXG4gIC8vIGhhcyBhbHJlYWR5IGJlZW4gaGVyZSwgYnV0IGp1c3QgdG8gbWFrZSBzdXJlIHdlIGNhbiBkbyB0aGF0LlxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZFRTaGlmdC5sZW5ndGg7IGkrKykge1xuICAgIHN0YXRlLmJNYXJrc1tpICsgc3RhcnRMaW5lXSA9IG9sZEJNYXJrc1tpXVxuICAgIHN0YXRlLnRTaGlmdFtpICsgc3RhcnRMaW5lXSA9IG9sZFRTaGlmdFtpXVxuICAgIHN0YXRlLnNDb3VudFtpICsgc3RhcnRMaW5lXSA9IG9sZFNDb3VudFtpXVxuICAgIHN0YXRlLmJzQ291bnRbaSArIHN0YXJ0TGluZV0gPSBvbGRCU0NvdW50W2ldXG4gIH1cbiAgc3RhdGUuYmxrSW5kZW50ID0gb2xkSW5kZW50XG5cbiAgcmV0dXJuIHRydWVcbn1cbiIsIi8vIEhvcml6b250YWwgcnVsZVxuXG5pbXBvcnQgeyBpc1NwYWNlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzLm1qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHIgKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICBjb25zdCBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXVxuICAvLyBpZiBpdCdzIGluZGVudGVkIG1vcmUgdGhhbiAzIHNwYWNlcywgaXQgc2hvdWxkIGJlIGEgY29kZSBibG9ja1xuICBpZiAoc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyByZXR1cm4gZmFsc2UgfVxuXG4gIGxldCBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdXG4gIGNvbnN0IG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcysrKVxuXG4gIC8vIENoZWNrIGhyIG1hcmtlclxuICBpZiAobWFya2VyICE9PSAweDJBLyogKiAqLyAmJlxuICAgICAgbWFya2VyICE9PSAweDJELyogLSAqLyAmJlxuICAgICAgbWFya2VyICE9PSAweDVGLyogXyAqLykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gbWFya2VycyBjYW4gYmUgbWl4ZWQgd2l0aCBzcGFjZXMsIGJ1dCB0aGVyZSBzaG91bGQgYmUgYXQgbGVhc3QgMyBvZiB0aGVtXG5cbiAgbGV0IGNudCA9IDFcbiAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgIGNvbnN0IGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspXG4gICAgaWYgKGNoICE9PSBtYXJrZXIgJiYgIWlzU3BhY2UoY2gpKSB7IHJldHVybiBmYWxzZSB9XG4gICAgaWYgKGNoID09PSBtYXJrZXIpIHsgY250KysgfVxuICB9XG5cbiAgaWYgKGNudCA8IDMpIHsgcmV0dXJuIGZhbHNlIH1cblxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlIH1cblxuICBzdGF0ZS5saW5lID0gc3RhcnRMaW5lICsgMVxuXG4gIGNvbnN0IHRva2VuICA9IHN0YXRlLnB1c2goJ2hyJywgJ2hyJywgMClcbiAgdG9rZW4ubWFwICAgID0gW3N0YXJ0TGluZSwgc3RhdGUubGluZV1cbiAgdG9rZW4ubWFya3VwID0gQXJyYXkoY250ICsgMSkuam9pbihTdHJpbmcuZnJvbUNoYXJDb2RlKG1hcmtlcikpXG5cbiAgcmV0dXJuIHRydWVcbn1cbiIsIi8vIExpc3RzXG5cbmltcG9ydCB7IGlzU3BhY2UgfSBmcm9tICcuLi9jb21tb24vdXRpbHMubWpzJ1xuXG4vLyBTZWFyY2ggYFstKypdW1xcbiBdYCwgcmV0dXJucyBuZXh0IHBvcyBhZnRlciBtYXJrZXIgb24gc3VjY2Vzc1xuLy8gb3IgLTEgb24gZmFpbC5cbmZ1bmN0aW9uIHNraXBCdWxsZXRMaXN0TWFya2VyIChzdGF0ZSwgc3RhcnRMaW5lKSB7XG4gIGNvbnN0IG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdXG4gIGxldCBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdXG5cbiAgY29uc3QgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspXG4gIC8vIENoZWNrIGJ1bGxldFxuICBpZiAobWFya2VyICE9PSAweDJBLyogKiAqLyAmJlxuICAgICAgbWFya2VyICE9PSAweDJELyogLSAqLyAmJlxuICAgICAgbWFya2VyICE9PSAweDJCLyogKyAqLykge1xuICAgIHJldHVybiAtMVxuICB9XG5cbiAgaWYgKHBvcyA8IG1heCkge1xuICAgIGNvbnN0IGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKVxuXG4gICAgaWYgKCFpc1NwYWNlKGNoKSkge1xuICAgICAgLy8gXCIgLXRlc3QgXCIgLSBpcyBub3QgYSBsaXN0IGl0ZW1cbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb3Ncbn1cblxuLy8gU2VhcmNoIGBcXGQrWy4pXVtcXG4gXWAsIHJldHVybnMgbmV4dCBwb3MgYWZ0ZXIgbWFya2VyIG9uIHN1Y2Nlc3Ncbi8vIG9yIC0xIG9uIGZhaWwuXG5mdW5jdGlvbiBza2lwT3JkZXJlZExpc3RNYXJrZXIgKHN0YXRlLCBzdGFydExpbmUpIHtcbiAgY29uc3Qgc3RhcnQgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdXG4gIGNvbnN0IG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdXG4gIGxldCBwb3MgPSBzdGFydFxuXG4gIC8vIExpc3QgbWFya2VyIHNob3VsZCBoYXZlIGF0IGxlYXN0IDIgY2hhcnMgKGRpZ2l0ICsgZG90KVxuICBpZiAocG9zICsgMSA+PSBtYXgpIHsgcmV0dXJuIC0xIH1cblxuICBsZXQgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKylcblxuICBpZiAoY2ggPCAweDMwLyogMCAqLyB8fCBjaCA+IDB4MzkvKiA5ICovKSB7IHJldHVybiAtMSB9XG5cbiAgZm9yICg7Oykge1xuICAgIC8vIEVPTCAtPiBmYWlsXG4gICAgaWYgKHBvcyA+PSBtYXgpIHsgcmV0dXJuIC0xIH1cblxuICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspXG5cbiAgICBpZiAoY2ggPj0gMHgzMC8qIDAgKi8gJiYgY2ggPD0gMHgzOS8qIDkgKi8pIHtcbiAgICAgIC8vIExpc3QgbWFya2VyIHNob3VsZCBoYXZlIG5vIG1vcmUgdGhhbiA5IGRpZ2l0c1xuICAgICAgLy8gKHByZXZlbnRzIGludGVnZXIgb3ZlcmZsb3cgaW4gYnJvd3NlcnMpXG4gICAgICBpZiAocG9zIC0gc3RhcnQgPj0gMTApIHsgcmV0dXJuIC0xIH1cblxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyBmb3VuZCB2YWxpZCBtYXJrZXJcbiAgICBpZiAoY2ggPT09IDB4MjkvKiApICovIHx8IGNoID09PSAweDJlLyogLiAqLykge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gLTFcbiAgfVxuXG4gIGlmIChwb3MgPCBtYXgpIHtcbiAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcylcblxuICAgIGlmICghaXNTcGFjZShjaCkpIHtcbiAgICAgIC8vIFwiIDEudGVzdCBcIiAtIGlzIG5vdCBhIGxpc3QgaXRlbVxuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICB9XG4gIHJldHVybiBwb3Ncbn1cblxuZnVuY3Rpb24gbWFya1RpZ2h0UGFyYWdyYXBocyAoc3RhdGUsIGlkeCkge1xuICBjb25zdCBsZXZlbCA9IHN0YXRlLmxldmVsICsgMlxuXG4gIGZvciAobGV0IGkgPSBpZHggKyAyLCBsID0gc3RhdGUudG9rZW5zLmxlbmd0aCAtIDI7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoc3RhdGUudG9rZW5zW2ldLmxldmVsID09PSBsZXZlbCAmJiBzdGF0ZS50b2tlbnNbaV0udHlwZSA9PT0gJ3BhcmFncmFwaF9vcGVuJykge1xuICAgICAgc3RhdGUudG9rZW5zW2kgKyAyXS5oaWRkZW4gPSB0cnVlXG4gICAgICBzdGF0ZS50b2tlbnNbaV0uaGlkZGVuID0gdHJ1ZVxuICAgICAgaSArPSAyXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3QgKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICBsZXQgbWF4LCBwb3MsIHN0YXJ0LCB0b2tlblxuICBsZXQgbmV4dExpbmUgPSBzdGFydExpbmVcbiAgbGV0IHRpZ2h0ID0gdHJ1ZVxuXG4gIC8vIGlmIGl0J3MgaW5kZW50ZWQgbW9yZSB0aGFuIDMgc3BhY2VzLCBpdCBzaG91bGQgYmUgYSBjb2RlIGJsb2NrXG4gIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHsgcmV0dXJuIGZhbHNlIH1cblxuICAvLyBTcGVjaWFsIGNhc2U6XG4gIC8vICAtIGl0ZW0gMVxuICAvLyAgIC0gaXRlbSAyXG4gIC8vICAgIC0gaXRlbSAzXG4gIC8vICAgICAtIGl0ZW0gNFxuICAvLyAgICAgIC0gdGhpcyBvbmUgaXMgYSBwYXJhZ3JhcGggY29udGludWF0aW9uXG4gIGlmIChzdGF0ZS5saXN0SW5kZW50ID49IDAgJiZcbiAgICAgIHN0YXRlLnNDb3VudFtuZXh0TGluZV0gLSBzdGF0ZS5saXN0SW5kZW50ID49IDQgJiZcbiAgICAgIHN0YXRlLnNDb3VudFtuZXh0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGxldCBpc1Rlcm1pbmF0aW5nUGFyYWdyYXBoID0gZmFsc2VcblxuICAvLyBsaW1pdCBjb25kaXRpb25zIHdoZW4gbGlzdCBjYW4gaW50ZXJydXB0XG4gIC8vIGEgcGFyYWdyYXBoICh2YWxpZGF0aW9uIG1vZGUgb25seSlcbiAgaWYgKHNpbGVudCAmJiBzdGF0ZS5wYXJlbnRUeXBlID09PSAncGFyYWdyYXBoJykge1xuICAgIC8vIE5leHQgbGlzdCBpdGVtIHNob3VsZCBzdGlsbCB0ZXJtaW5hdGUgcHJldmlvdXMgbGlzdCBpdGVtO1xuICAgIC8vXG4gICAgLy8gVGhpcyBjb2RlIGNhbiBmYWlsIGlmIHBsdWdpbnMgdXNlIGJsa0luZGVudCBhcyB3ZWxsIGFzIGxpc3RzLFxuICAgIC8vIGJ1dCBJIGhvcGUgdGhlIHNwZWMgZ2V0cyBmaXhlZCBsb25nIGJlZm9yZSB0aGF0IGhhcHBlbnMuXG4gICAgLy9cbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSA+PSBzdGF0ZS5ibGtJbmRlbnQpIHtcbiAgICAgIGlzVGVybWluYXRpbmdQYXJhZ3JhcGggPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgLy8gRGV0ZWN0IGxpc3QgdHlwZSBhbmQgcG9zaXRpb24gYWZ0ZXIgbWFya2VyXG4gIGxldCBpc09yZGVyZWRcbiAgbGV0IG1hcmtlclZhbHVlXG4gIGxldCBwb3NBZnRlck1hcmtlclxuICBpZiAoKHBvc0FmdGVyTWFya2VyID0gc2tpcE9yZGVyZWRMaXN0TWFya2VyKHN0YXRlLCBuZXh0TGluZSkpID49IDApIHtcbiAgICBpc09yZGVyZWQgPSB0cnVlXG4gICAgc3RhcnQgPSBzdGF0ZS5iTWFya3NbbmV4dExpbmVdICsgc3RhdGUudFNoaWZ0W25leHRMaW5lXVxuICAgIG1hcmtlclZhbHVlID0gTnVtYmVyKHN0YXRlLnNyYy5zbGljZShzdGFydCwgcG9zQWZ0ZXJNYXJrZXIgLSAxKSlcblxuICAgIC8vIElmIHdlJ3JlIHN0YXJ0aW5nIGEgbmV3IG9yZGVyZWQgbGlzdCByaWdodCBhZnRlclxuICAgIC8vIGEgcGFyYWdyYXBoLCBpdCBzaG91bGQgc3RhcnQgd2l0aCAxLlxuICAgIGlmIChpc1Rlcm1pbmF0aW5nUGFyYWdyYXBoICYmIG1hcmtlclZhbHVlICE9PSAxKSByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIGlmICgocG9zQWZ0ZXJNYXJrZXIgPSBza2lwQnVsbGV0TGlzdE1hcmtlcihzdGF0ZSwgbmV4dExpbmUpKSA+PSAwKSB7XG4gICAgaXNPcmRlcmVkID0gZmFsc2VcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIElmIHdlJ3JlIHN0YXJ0aW5nIGEgbmV3IHVub3JkZXJlZCBsaXN0IHJpZ2h0IGFmdGVyXG4gIC8vIGEgcGFyYWdyYXBoLCBmaXJzdCBsaW5lIHNob3VsZCBub3QgYmUgZW1wdHkuXG4gIGlmIChpc1Rlcm1pbmF0aW5nUGFyYWdyYXBoKSB7XG4gICAgaWYgKHN0YXRlLnNraXBTcGFjZXMocG9zQWZ0ZXJNYXJrZXIpID49IHN0YXRlLmVNYXJrc1tuZXh0TGluZV0pIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gRm9yIHZhbGlkYXRpb24gbW9kZSB3ZSBjYW4gdGVybWluYXRlIGltbWVkaWF0ZWx5XG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWUgfVxuXG4gIC8vIFdlIHNob3VsZCB0ZXJtaW5hdGUgbGlzdCBvbiBzdHlsZSBjaGFuZ2UuIFJlbWVtYmVyIGZpcnN0IG9uZSB0byBjb21wYXJlLlxuICBjb25zdCBtYXJrZXJDaGFyQ29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvc0FmdGVyTWFya2VyIC0gMSlcblxuICAvLyBTdGFydCBsaXN0XG4gIGNvbnN0IGxpc3RUb2tJZHggPSBzdGF0ZS50b2tlbnMubGVuZ3RoXG5cbiAgaWYgKGlzT3JkZXJlZCkge1xuICAgIHRva2VuICAgICAgID0gc3RhdGUucHVzaCgnb3JkZXJlZF9saXN0X29wZW4nLCAnb2wnLCAxKVxuICAgIGlmIChtYXJrZXJWYWx1ZSAhPT0gMSkge1xuICAgICAgdG9rZW4uYXR0cnMgPSBbWydzdGFydCcsIG1hcmtlclZhbHVlXV1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdG9rZW4gICAgICAgPSBzdGF0ZS5wdXNoKCdidWxsZXRfbGlzdF9vcGVuJywgJ3VsJywgMSlcbiAgfVxuXG4gIGNvbnN0IGxpc3RMaW5lcyA9IFtuZXh0TGluZSwgMF1cbiAgdG9rZW4ubWFwICAgID0gbGlzdExpbmVzXG4gIHRva2VuLm1hcmt1cCA9IFN0cmluZy5mcm9tQ2hhckNvZGUobWFya2VyQ2hhckNvZGUpXG5cbiAgLy9cbiAgLy8gSXRlcmF0ZSBsaXN0IGl0ZW1zXG4gIC8vXG5cbiAgbGV0IHByZXZFbXB0eUVuZCA9IGZhbHNlXG4gIGNvbnN0IHRlcm1pbmF0b3JSdWxlcyA9IHN0YXRlLm1kLmJsb2NrLnJ1bGVyLmdldFJ1bGVzKCdsaXN0JylcblxuICBjb25zdCBvbGRQYXJlbnRUeXBlID0gc3RhdGUucGFyZW50VHlwZVxuICBzdGF0ZS5wYXJlbnRUeXBlID0gJ2xpc3QnXG5cbiAgd2hpbGUgKG5leHRMaW5lIDwgZW5kTGluZSkge1xuICAgIHBvcyA9IHBvc0FmdGVyTWFya2VyXG4gICAgbWF4ID0gc3RhdGUuZU1hcmtzW25leHRMaW5lXVxuXG4gICAgY29uc3QgaW5pdGlhbCA9IHN0YXRlLnNDb3VudFtuZXh0TGluZV0gKyBwb3NBZnRlck1hcmtlciAtIChzdGF0ZS5iTWFya3NbbmV4dExpbmVdICsgc3RhdGUudFNoaWZ0W25leHRMaW5lXSlcbiAgICBsZXQgb2Zmc2V0ID0gaW5pdGlhbFxuXG4gICAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgICAgY29uc3QgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpXG5cbiAgICAgIGlmIChjaCA9PT0gMHgwOSkge1xuICAgICAgICBvZmZzZXQgKz0gNCAtIChvZmZzZXQgKyBzdGF0ZS5ic0NvdW50W25leHRMaW5lXSkgJSA0XG4gICAgICB9IGVsc2UgaWYgKGNoID09PSAweDIwKSB7XG4gICAgICAgIG9mZnNldCsrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBwb3MrK1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnRTdGFydCA9IHBvc1xuICAgIGxldCBpbmRlbnRBZnRlck1hcmtlclxuXG4gICAgaWYgKGNvbnRlbnRTdGFydCA+PSBtYXgpIHtcbiAgICAgIC8vIHRyaW1taW5nIHNwYWNlIGluIFwiLSAgICBcXG4gIDNcIiBjYXNlLCBpbmRlbnQgaXMgMSBoZXJlXG4gICAgICBpbmRlbnRBZnRlck1hcmtlciA9IDFcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZW50QWZ0ZXJNYXJrZXIgPSBvZmZzZXQgLSBpbml0aWFsXG4gICAgfVxuXG4gICAgLy8gSWYgd2UgaGF2ZSBtb3JlIHRoYW4gNCBzcGFjZXMsIHRoZSBpbmRlbnQgaXMgMVxuICAgIC8vICh0aGUgcmVzdCBpcyBqdXN0IGluZGVudGVkIGNvZGUgYmxvY2spXG4gICAgaWYgKGluZGVudEFmdGVyTWFya2VyID4gNCkgeyBpbmRlbnRBZnRlck1hcmtlciA9IDEgfVxuXG4gICAgLy8gXCIgIC0gIHRlc3RcIlxuICAgIC8vICBeXl5eXiAtIGNhbGN1bGF0aW5nIHRvdGFsIGxlbmd0aCBvZiB0aGlzIHRoaW5nXG4gICAgY29uc3QgaW5kZW50ID0gaW5pdGlhbCArIGluZGVudEFmdGVyTWFya2VyXG5cbiAgICAvLyBSdW4gc3VicGFyc2VyICYgd3JpdGUgdG9rZW5zXG4gICAgdG9rZW4gICAgICAgID0gc3RhdGUucHVzaCgnbGlzdF9pdGVtX29wZW4nLCAnbGknLCAxKVxuICAgIHRva2VuLm1hcmt1cCA9IFN0cmluZy5mcm9tQ2hhckNvZGUobWFya2VyQ2hhckNvZGUpXG4gICAgY29uc3QgaXRlbUxpbmVzID0gW25leHRMaW5lLCAwXVxuICAgIHRva2VuLm1hcCAgICA9IGl0ZW1MaW5lc1xuICAgIGlmIChpc09yZGVyZWQpIHtcbiAgICAgIHRva2VuLmluZm8gPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQsIHBvc0FmdGVyTWFya2VyIC0gMSlcbiAgICB9XG5cbiAgICAvLyBjaGFuZ2UgY3VycmVudCBzdGF0ZSwgdGhlbiByZXN0b3JlIGl0IGFmdGVyIHBhcnNlciBzdWJjYWxsXG4gICAgY29uc3Qgb2xkVGlnaHQgPSBzdGF0ZS50aWdodFxuICAgIGNvbnN0IG9sZFRTaGlmdCA9IHN0YXRlLnRTaGlmdFtuZXh0TGluZV1cbiAgICBjb25zdCBvbGRTQ291bnQgPSBzdGF0ZS5zQ291bnRbbmV4dExpbmVdXG5cbiAgICAvLyAgLSBleGFtcGxlIGxpc3RcbiAgICAvLyBeIGxpc3RJbmRlbnQgcG9zaXRpb24gd2lsbCBiZSBoZXJlXG4gICAgLy8gICBeIGJsa0luZGVudCBwb3NpdGlvbiB3aWxsIGJlIGhlcmVcbiAgICAvL1xuICAgIGNvbnN0IG9sZExpc3RJbmRlbnQgPSBzdGF0ZS5saXN0SW5kZW50XG4gICAgc3RhdGUubGlzdEluZGVudCA9IHN0YXRlLmJsa0luZGVudFxuICAgIHN0YXRlLmJsa0luZGVudCA9IGluZGVudFxuXG4gICAgc3RhdGUudGlnaHQgPSB0cnVlXG4gICAgc3RhdGUudFNoaWZ0W25leHRMaW5lXSA9IGNvbnRlbnRTdGFydCAtIHN0YXRlLmJNYXJrc1tuZXh0TGluZV1cbiAgICBzdGF0ZS5zQ291bnRbbmV4dExpbmVdID0gb2Zmc2V0XG5cbiAgICBpZiAoY29udGVudFN0YXJ0ID49IG1heCAmJiBzdGF0ZS5pc0VtcHR5KG5leHRMaW5lICsgMSkpIHtcbiAgICAgIC8vIHdvcmthcm91bmQgZm9yIHRoaXMgY2FzZVxuICAgICAgLy8gKGxpc3QgaXRlbSBpcyBlbXB0eSwgbGlzdCB0ZXJtaW5hdGVzIGJlZm9yZSBcImZvb1wiKTpcbiAgICAgIC8vIH5+fn5+fn5+XG4gICAgICAvLyAgIC1cbiAgICAgIC8vXG4gICAgICAvLyAgICAgZm9vXG4gICAgICAvLyB+fn5+fn5+flxuICAgICAgc3RhdGUubGluZSA9IE1hdGgubWluKHN0YXRlLmxpbmUgKyAyLCBlbmRMaW5lKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5tZC5ibG9jay50b2tlbml6ZShzdGF0ZSwgbmV4dExpbmUsIGVuZExpbmUsIHRydWUpXG4gICAgfVxuXG4gICAgLy8gSWYgYW55IG9mIGxpc3QgaXRlbSBpcyB0aWdodCwgbWFyayBsaXN0IGFzIHRpZ2h0XG4gICAgaWYgKCFzdGF0ZS50aWdodCB8fCBwcmV2RW1wdHlFbmQpIHtcbiAgICAgIHRpZ2h0ID0gZmFsc2VcbiAgICB9XG4gICAgLy8gSXRlbSBiZWNvbWUgbG9vc2UgaWYgZmluaXNoIHdpdGggZW1wdHkgbGluZSxcbiAgICAvLyBidXQgd2Ugc2hvdWxkIGZpbHRlciBsYXN0IGVsZW1lbnQsIGJlY2F1c2UgaXQgbWVhbnMgbGlzdCBmaW5pc2hcbiAgICBwcmV2RW1wdHlFbmQgPSAoc3RhdGUubGluZSAtIG5leHRMaW5lKSA+IDEgJiYgc3RhdGUuaXNFbXB0eShzdGF0ZS5saW5lIC0gMSlcblxuICAgIHN0YXRlLmJsa0luZGVudCA9IHN0YXRlLmxpc3RJbmRlbnRcbiAgICBzdGF0ZS5saXN0SW5kZW50ID0gb2xkTGlzdEluZGVudFxuICAgIHN0YXRlLnRTaGlmdFtuZXh0TGluZV0gPSBvbGRUU2hpZnRcbiAgICBzdGF0ZS5zQ291bnRbbmV4dExpbmVdID0gb2xkU0NvdW50XG4gICAgc3RhdGUudGlnaHQgPSBvbGRUaWdodFxuXG4gICAgdG9rZW4gICAgICAgID0gc3RhdGUucHVzaCgnbGlzdF9pdGVtX2Nsb3NlJywgJ2xpJywgLTEpXG4gICAgdG9rZW4ubWFya3VwID0gU3RyaW5nLmZyb21DaGFyQ29kZShtYXJrZXJDaGFyQ29kZSlcblxuICAgIG5leHRMaW5lID0gc3RhdGUubGluZVxuICAgIGl0ZW1MaW5lc1sxXSA9IG5leHRMaW5lXG5cbiAgICBpZiAobmV4dExpbmUgPj0gZW5kTGluZSkgeyBicmVhayB9XG5cbiAgICAvL1xuICAgIC8vIFRyeSB0byBjaGVjayBpZiBsaXN0IGlzIHRlcm1pbmF0ZWQgb3IgY29udGludWVkLlxuICAgIC8vXG4gICAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgYnJlYWsgfVxuXG4gICAgLy8gaWYgaXQncyBpbmRlbnRlZCBtb3JlIHRoYW4gMyBzcGFjZXMsIGl0IHNob3VsZCBiZSBhIGNvZGUgYmxvY2tcbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7IGJyZWFrIH1cblxuICAgIC8vIGZhaWwgaWYgdGVybWluYXRpbmcgYmxvY2sgZm91bmRcbiAgICBsZXQgdGVybWluYXRlID0gZmFsc2VcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRlcm1pbmF0b3JSdWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0ZXJtaW5hdG9yUnVsZXNbaV0oc3RhdGUsIG5leHRMaW5lLCBlbmRMaW5lLCB0cnVlKSkge1xuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0ZXJtaW5hdGUpIHsgYnJlYWsgfVxuXG4gICAgLy8gZmFpbCBpZiBsaXN0IGhhcyBhbm90aGVyIHR5cGVcbiAgICBpZiAoaXNPcmRlcmVkKSB7XG4gICAgICBwb3NBZnRlck1hcmtlciA9IHNraXBPcmRlcmVkTGlzdE1hcmtlcihzdGF0ZSwgbmV4dExpbmUpXG4gICAgICBpZiAocG9zQWZ0ZXJNYXJrZXIgPCAwKSB7IGJyZWFrIH1cbiAgICAgIHN0YXJ0ID0gc3RhdGUuYk1hcmtzW25leHRMaW5lXSArIHN0YXRlLnRTaGlmdFtuZXh0TGluZV1cbiAgICB9IGVsc2Uge1xuICAgICAgcG9zQWZ0ZXJNYXJrZXIgPSBza2lwQnVsbGV0TGlzdE1hcmtlcihzdGF0ZSwgbmV4dExpbmUpXG4gICAgICBpZiAocG9zQWZ0ZXJNYXJrZXIgPCAwKSB7IGJyZWFrIH1cbiAgICB9XG5cbiAgICBpZiAobWFya2VyQ2hhckNvZGUgIT09IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvc0FmdGVyTWFya2VyIC0gMSkpIHsgYnJlYWsgfVxuICB9XG5cbiAgLy8gRmluYWxpemUgbGlzdFxuICBpZiAoaXNPcmRlcmVkKSB7XG4gICAgdG9rZW4gPSBzdGF0ZS5wdXNoKCdvcmRlcmVkX2xpc3RfY2xvc2UnLCAnb2wnLCAtMSlcbiAgfSBlbHNlIHtcbiAgICB0b2tlbiA9IHN0YXRlLnB1c2goJ2J1bGxldF9saXN0X2Nsb3NlJywgJ3VsJywgLTEpXG4gIH1cbiAgdG9rZW4ubWFya3VwID0gU3RyaW5nLmZyb21DaGFyQ29kZShtYXJrZXJDaGFyQ29kZSlcblxuICBsaXN0TGluZXNbMV0gPSBuZXh0TGluZVxuICBzdGF0ZS5saW5lID0gbmV4dExpbmVcblxuICBzdGF0ZS5wYXJlbnRUeXBlID0gb2xkUGFyZW50VHlwZVxuXG4gIC8vIG1hcmsgcGFyYWdyYXBocyB0aWdodCBpZiBuZWVkZWRcbiAgaWYgKHRpZ2h0KSB7XG4gICAgbWFya1RpZ2h0UGFyYWdyYXBocyhzdGF0ZSwgbGlzdFRva0lkeClcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG4iLCJpbXBvcnQgeyBpc1NwYWNlLCBub3JtYWxpemVSZWZlcmVuY2UgfSBmcm9tICcuLi9jb21tb24vdXRpbHMubWpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWZlcmVuY2UgKHN0YXRlLCBzdGFydExpbmUsIF9lbmRMaW5lLCBzaWxlbnQpIHtcbiAgbGV0IHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV1cbiAgbGV0IG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdXG4gIGxldCBuZXh0TGluZSA9IHN0YXJ0TGluZSArIDFcblxuICAvLyBpZiBpdCdzIGluZGVudGVkIG1vcmUgdGhhbiAzIHNwYWNlcywgaXQgc2hvdWxkIGJlIGEgY29kZSBibG9ja1xuICBpZiAoc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyByZXR1cm4gZmFsc2UgfVxuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDVCLyogWyAqLykgeyByZXR1cm4gZmFsc2UgfVxuXG4gIGZ1bmN0aW9uIGdldE5leHRMaW5lIChuZXh0TGluZSkge1xuICAgIGNvbnN0IGVuZExpbmUgPSBzdGF0ZS5saW5lTWF4XG5cbiAgICBpZiAobmV4dExpbmUgPj0gZW5kTGluZSB8fCBzdGF0ZS5pc0VtcHR5KG5leHRMaW5lKSkge1xuICAgICAgLy8gZW1wdHkgbGluZSBvciBlbmQgb2YgaW5wdXRcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgbGV0IGlzQ29udGludWF0aW9uID0gZmFsc2VcblxuICAgIC8vIHRoaXMgd291bGQgYmUgYSBjb2RlIGJsb2NrIG5vcm1hbGx5LCBidXQgYWZ0ZXIgcGFyYWdyYXBoXG4gICAgLy8gaXQncyBjb25zaWRlcmVkIGEgbGF6eSBjb250aW51YXRpb24gcmVnYXJkbGVzcyBvZiB3aGF0J3MgdGhlcmVcbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+IDMpIHsgaXNDb250aW51YXRpb24gPSB0cnVlIH1cblxuICAgIC8vIHF1aXJrIGZvciBibG9ja3F1b3RlcywgdGhpcyBsaW5lIHNob3VsZCBhbHJlYWR5IGJlIGNoZWNrZWQgYnkgdGhhdCBydWxlXG4gICAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gPCAwKSB7IGlzQ29udGludWF0aW9uID0gdHJ1ZSB9XG5cbiAgICBpZiAoIWlzQ29udGludWF0aW9uKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hdG9yUnVsZXMgPSBzdGF0ZS5tZC5ibG9jay5ydWxlci5nZXRSdWxlcygncmVmZXJlbmNlJylcbiAgICAgIGNvbnN0IG9sZFBhcmVudFR5cGUgPSBzdGF0ZS5wYXJlbnRUeXBlXG4gICAgICBzdGF0ZS5wYXJlbnRUeXBlID0gJ3JlZmVyZW5jZSdcblxuICAgICAgLy8gU29tZSB0YWdzIGNhbiB0ZXJtaW5hdGUgcGFyYWdyYXBoIHdpdGhvdXQgZW1wdHkgbGluZS5cbiAgICAgIGxldCB0ZXJtaW5hdGUgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0ZXJtaW5hdG9yUnVsZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmICh0ZXJtaW5hdG9yUnVsZXNbaV0oc3RhdGUsIG5leHRMaW5lLCBlbmRMaW5lLCB0cnVlKSkge1xuICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLnBhcmVudFR5cGUgPSBvbGRQYXJlbnRUeXBlXG4gICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgIC8vIHRlcm1pbmF0ZWQgYnkgYW5vdGhlciBibG9ja1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBvcyA9IHN0YXRlLmJNYXJrc1tuZXh0TGluZV0gKyBzdGF0ZS50U2hpZnRbbmV4dExpbmVdXG4gICAgY29uc3QgbWF4ID0gc3RhdGUuZU1hcmtzW25leHRMaW5lXVxuXG4gICAgLy8gbWF4ICsgMSBleHBsaWNpdGx5IGluY2x1ZGVzIHRoZSBuZXdsaW5lXG4gICAgcmV0dXJuIHN0YXRlLnNyYy5zbGljZShwb3MsIG1heCArIDEpXG4gIH1cblxuICBsZXQgc3RyID0gc3RhdGUuc3JjLnNsaWNlKHBvcywgbWF4ICsgMSlcblxuICBtYXggPSBzdHIubGVuZ3RoXG4gIGxldCBsYWJlbEVuZCA9IC0xXG5cbiAgZm9yIChwb3MgPSAxOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgY29uc3QgY2ggPSBzdHIuY2hhckNvZGVBdChwb3MpXG4gICAgaWYgKGNoID09PSAweDVCIC8qIFsgKi8pIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSBpZiAoY2ggPT09IDB4NUQgLyogXSAqLykge1xuICAgICAgbGFiZWxFbmQgPSBwb3NcbiAgICAgIGJyZWFrXG4gICAgfSBlbHNlIGlmIChjaCA9PT0gMHgwQSAvKiBcXG4gKi8pIHtcbiAgICAgIGNvbnN0IGxpbmVDb250ZW50ID0gZ2V0TmV4dExpbmUobmV4dExpbmUpXG4gICAgICBpZiAobGluZUNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgc3RyICs9IGxpbmVDb250ZW50XG4gICAgICAgIG1heCA9IHN0ci5sZW5ndGhcbiAgICAgICAgbmV4dExpbmUrK1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2ggPT09IDB4NUMgLyogXFwgKi8pIHtcbiAgICAgIHBvcysrXG4gICAgICBpZiAocG9zIDwgbWF4ICYmIHN0ci5jaGFyQ29kZUF0KHBvcykgPT09IDB4MEEpIHtcbiAgICAgICAgY29uc3QgbGluZUNvbnRlbnQgPSBnZXROZXh0TGluZShuZXh0TGluZSlcbiAgICAgICAgaWYgKGxpbmVDb250ZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgc3RyICs9IGxpbmVDb250ZW50XG4gICAgICAgICAgbWF4ID0gc3RyLmxlbmd0aFxuICAgICAgICAgIG5leHRMaW5lKytcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChsYWJlbEVuZCA8IDAgfHwgc3RyLmNoYXJDb2RlQXQobGFiZWxFbmQgKyAxKSAhPT0gMHgzQS8qIDogKi8pIHsgcmV0dXJuIGZhbHNlIH1cblxuICAvLyBbbGFiZWxdOiAgIGRlc3RpbmF0aW9uICAgJ3RpdGxlJ1xuICAvLyAgICAgICAgIF5eXiBza2lwIG9wdGlvbmFsIHdoaXRlc3BhY2UgaGVyZVxuICBmb3IgKHBvcyA9IGxhYmVsRW5kICsgMjsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgIGNvbnN0IGNoID0gc3RyLmNoYXJDb2RlQXQocG9zKVxuICAgIGlmIChjaCA9PT0gMHgwQSkge1xuICAgICAgY29uc3QgbGluZUNvbnRlbnQgPSBnZXROZXh0TGluZShuZXh0TGluZSlcbiAgICAgIGlmIChsaW5lQ29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICBzdHIgKz0gbGluZUNvbnRlbnRcbiAgICAgICAgbWF4ID0gc3RyLmxlbmd0aFxuICAgICAgICBuZXh0TGluZSsrXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1NwYWNlKGNoKSkge1xuICAgICAgLyogZXNsaW50IG5vLWVtcHR5OjAgKi9cbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICAvLyBbbGFiZWxdOiAgIGRlc3RpbmF0aW9uICAgJ3RpdGxlJ1xuICAvLyAgICAgICAgICAgIF5eXl5eXl5eXl5eIHBhcnNlIHRoaXNcbiAgY29uc3QgZGVzdFJlcyA9IHN0YXRlLm1kLmhlbHBlcnMucGFyc2VMaW5rRGVzdGluYXRpb24oc3RyLCBwb3MsIG1heClcbiAgaWYgKCFkZXN0UmVzLm9rKSB7IHJldHVybiBmYWxzZSB9XG5cbiAgY29uc3QgaHJlZiA9IHN0YXRlLm1kLm5vcm1hbGl6ZUxpbmsoZGVzdFJlcy5zdHIpXG4gIGlmICghc3RhdGUubWQudmFsaWRhdGVMaW5rKGhyZWYpKSB7IHJldHVybiBmYWxzZSB9XG5cbiAgcG9zID0gZGVzdFJlcy5wb3NcblxuICAvLyBzYXZlIGN1cnNvciBzdGF0ZSwgd2UgY291bGQgcmVxdWlyZSB0byByb2xsYmFjayBsYXRlclxuICBjb25zdCBkZXN0RW5kUG9zID0gcG9zXG4gIGNvbnN0IGRlc3RFbmRMaW5lTm8gPSBuZXh0TGluZVxuXG4gIC8vIFtsYWJlbF06ICAgZGVzdGluYXRpb24gICAndGl0bGUnXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICBeXl4gc2tpcHBpbmcgdGhvc2Ugc3BhY2VzXG4gIGNvbnN0IHN0YXJ0ID0gcG9zXG4gIGZvciAoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgY29uc3QgY2ggPSBzdHIuY2hhckNvZGVBdChwb3MpXG4gICAgaWYgKGNoID09PSAweDBBKSB7XG4gICAgICBjb25zdCBsaW5lQ29udGVudCA9IGdldE5leHRMaW5lKG5leHRMaW5lKVxuICAgICAgaWYgKGxpbmVDb250ZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHN0ciArPSBsaW5lQ29udGVudFxuICAgICAgICBtYXggPSBzdHIubGVuZ3RoXG4gICAgICAgIG5leHRMaW5lKytcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzU3BhY2UoY2gpKSB7XG4gICAgICAvKiBlc2xpbnQgbm8tZW1wdHk6MCAqL1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIC8vIFtsYWJlbF06ICAgZGVzdGluYXRpb24gICAndGl0bGUnXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICBeXl5eXl5eIHBhcnNlIHRoaXNcbiAgbGV0IHRpdGxlUmVzID0gc3RhdGUubWQuaGVscGVycy5wYXJzZUxpbmtUaXRsZShzdHIsIHBvcywgbWF4KVxuICB3aGlsZSAodGl0bGVSZXMuY2FuX2NvbnRpbnVlKSB7XG4gICAgY29uc3QgbGluZUNvbnRlbnQgPSBnZXROZXh0TGluZShuZXh0TGluZSlcbiAgICBpZiAobGluZUNvbnRlbnQgPT09IG51bGwpIGJyZWFrXG4gICAgc3RyICs9IGxpbmVDb250ZW50XG4gICAgcG9zID0gbWF4XG4gICAgbWF4ID0gc3RyLmxlbmd0aFxuICAgIG5leHRMaW5lKytcbiAgICB0aXRsZVJlcyA9IHN0YXRlLm1kLmhlbHBlcnMucGFyc2VMaW5rVGl0bGUoc3RyLCBwb3MsIG1heCwgdGl0bGVSZXMpXG4gIH1cbiAgbGV0IHRpdGxlXG5cbiAgaWYgKHBvcyA8IG1heCAmJiBzdGFydCAhPT0gcG9zICYmIHRpdGxlUmVzLm9rKSB7XG4gICAgdGl0bGUgPSB0aXRsZVJlcy5zdHJcbiAgICBwb3MgPSB0aXRsZVJlcy5wb3NcbiAgfSBlbHNlIHtcbiAgICB0aXRsZSA9ICcnXG4gICAgcG9zID0gZGVzdEVuZFBvc1xuICAgIG5leHRMaW5lID0gZGVzdEVuZExpbmVOb1xuICB9XG5cbiAgLy8gc2tpcCB0cmFpbGluZyBzcGFjZXMgdW50aWwgdGhlIHJlc3Qgb2YgdGhlIGxpbmVcbiAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgIGNvbnN0IGNoID0gc3RyLmNoYXJDb2RlQXQocG9zKVxuICAgIGlmICghaXNTcGFjZShjaCkpIHsgYnJlYWsgfVxuICAgIHBvcysrXG4gIH1cblxuICBpZiAocG9zIDwgbWF4ICYmIHN0ci5jaGFyQ29kZUF0KHBvcykgIT09IDB4MEEpIHtcbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIC8vIGdhcmJhZ2UgYXQgdGhlIGVuZCBvZiB0aGUgbGluZSBhZnRlciB0aXRsZSxcbiAgICAgIC8vIGJ1dCBpdCBjb3VsZCBzdGlsbCBiZSBhIHZhbGlkIHJlZmVyZW5jZSBpZiB3ZSByb2xsIGJhY2tcbiAgICAgIHRpdGxlID0gJydcbiAgICAgIHBvcyA9IGRlc3RFbmRQb3NcbiAgICAgIG5leHRMaW5lID0gZGVzdEVuZExpbmVOb1xuICAgICAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgICAgICBjb25zdCBjaCA9IHN0ci5jaGFyQ29kZUF0KHBvcylcbiAgICAgICAgaWYgKCFpc1NwYWNlKGNoKSkgeyBicmVhayB9XG4gICAgICAgIHBvcysrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHBvcyA8IG1heCAmJiBzdHIuY2hhckNvZGVBdChwb3MpICE9PSAweDBBKSB7XG4gICAgLy8gZ2FyYmFnZSBhdCB0aGUgZW5kIG9mIHRoZSBsaW5lXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBsYWJlbCA9IG5vcm1hbGl6ZVJlZmVyZW5jZShzdHIuc2xpY2UoMSwgbGFiZWxFbmQpKVxuICBpZiAoIWxhYmVsKSB7XG4gICAgLy8gQ29tbW9uTWFyayAwLjIwIGRpc2FsbG93cyBlbXB0eSBsYWJlbHNcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFJlZmVyZW5jZSBjYW4gbm90IHRlcm1pbmF0ZSBhbnl0aGluZy4gVGhpcyBjaGVjayBpcyBmb3Igc2FmZXR5IG9ubHkuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlIH1cblxuICBpZiAodHlwZW9mIHN0YXRlLmVudi5yZWZlcmVuY2VzID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0YXRlLmVudi5yZWZlcmVuY2VzID0ge31cbiAgfVxuICBpZiAodHlwZW9mIHN0YXRlLmVudi5yZWZlcmVuY2VzW2xhYmVsXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGF0ZS5lbnYucmVmZXJlbmNlc1tsYWJlbF0gPSB7IHRpdGxlLCBocmVmIH1cbiAgfVxuXG4gIHN0YXRlLmxpbmUgPSBuZXh0TGluZVxuICByZXR1cm4gdHJ1ZVxufVxuIiwiLy8gTGlzdCBvZiB2YWxpZCBodG1sIGJsb2NrcyBuYW1lcywgYWNjb3JkaW5nIHRvIGNvbW1vbm1hcmsgc3BlY1xuLy8gaHR0cHM6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMzAvI2h0bWwtYmxvY2tzXG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2FkZHJlc3MnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdiYXNlJyxcbiAgJ2Jhc2Vmb250JyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnYm9keScsXG4gICdjYXB0aW9uJyxcbiAgJ2NlbnRlcicsXG4gICdjb2wnLFxuICAnY29sZ3JvdXAnLFxuICAnZGQnLFxuICAnZGV0YWlscycsXG4gICdkaWFsb2cnLFxuICAnZGlyJyxcbiAgJ2RpdicsXG4gICdkbCcsXG4gICdkdCcsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmb290ZXInLFxuICAnZm9ybScsXG4gICdmcmFtZScsXG4gICdmcmFtZXNldCcsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdoNScsXG4gICdoNicsXG4gICdoZWFkJyxcbiAgJ2hlYWRlcicsXG4gICdocicsXG4gICdodG1sJyxcbiAgJ2lmcmFtZScsXG4gICdsZWdlbmQnLFxuICAnbGknLFxuICAnbGluaycsXG4gICdtYWluJyxcbiAgJ21lbnUnLFxuICAnbWVudWl0ZW0nLFxuICAnbmF2JyxcbiAgJ25vZnJhbWVzJyxcbiAgJ29sJyxcbiAgJ29wdGdyb3VwJyxcbiAgJ29wdGlvbicsXG4gICdwJyxcbiAgJ3BhcmFtJyxcbiAgJ3NlYXJjaCcsXG4gICdzZWN0aW9uJyxcbiAgJ3N1bW1hcnknLFxuICAndGFibGUnLFxuICAndGJvZHknLFxuICAndGQnLFxuICAndGZvb3QnLFxuICAndGgnLFxuICAndGhlYWQnLFxuICAndGl0bGUnLFxuICAndHInLFxuICAndHJhY2snLFxuICAndWwnXG5dXG4iLCIvLyBSZWdleHBzIHRvIG1hdGNoIGh0bWwgZWxlbWVudHNcblxuY29uc3QgYXR0cl9uYW1lICAgICA9ICdbYS16QS1aXzpdW2EtekEtWjAtOTouXy1dKidcblxuY29uc3QgdW5xdW90ZWQgICAgICA9ICdbXlwiXFwnPTw+YFxcXFx4MDAtXFxcXHgyMF0rJ1xuY29uc3Qgc2luZ2xlX3F1b3RlZCA9IFwiJ1teJ10qJ1wiXG5jb25zdCBkb3VibGVfcXVvdGVkID0gJ1wiW15cIl0qXCInXG5cbmNvbnN0IGF0dHJfdmFsdWUgID0gJyg/OicgKyB1bnF1b3RlZCArICd8JyArIHNpbmdsZV9xdW90ZWQgKyAnfCcgKyBkb3VibGVfcXVvdGVkICsgJyknXG5cbmNvbnN0IGF0dHJpYnV0ZSAgID0gJyg/OlxcXFxzKycgKyBhdHRyX25hbWUgKyAnKD86XFxcXHMqPVxcXFxzKicgKyBhdHRyX3ZhbHVlICsgJyk/KSdcblxuY29uc3Qgb3Blbl90YWcgICAgPSAnPFtBLVphLXpdW0EtWmEtejAtOVxcXFwtXSonICsgYXR0cmlidXRlICsgJypcXFxccypcXFxcLz8+J1xuXG5jb25zdCBjbG9zZV90YWcgICA9ICc8XFxcXC9bQS1aYS16XVtBLVphLXowLTlcXFxcLV0qXFxcXHMqPidcbmNvbnN0IGNvbW1lbnQgICAgID0gJzwhLS0tPz58PCEtLSg/OlteLV18LVteLV18LS1bXj5dKSotLT4nXG5jb25zdCBwcm9jZXNzaW5nICA9ICc8Wz9dW1xcXFxzXFxcXFNdKj9bP10+J1xuY29uc3QgZGVjbGFyYXRpb24gPSAnPCFbQS1aYS16XVtePl0qPidcbmNvbnN0IGNkYXRhICAgICAgID0gJzwhXFxcXFtDREFUQVxcXFxbW1xcXFxzXFxcXFNdKj9cXFxcXVxcXFxdPidcblxuY29uc3QgSFRNTF9UQUdfUkUgPSBuZXcgUmVnRXhwKCdeKD86JyArIG9wZW5fdGFnICsgJ3wnICsgY2xvc2VfdGFnICsgJ3wnICsgY29tbWVudCArXG4gICAgICAgICAgICAgICAgICAgICAgICAnfCcgKyBwcm9jZXNzaW5nICsgJ3wnICsgZGVjbGFyYXRpb24gKyAnfCcgKyBjZGF0YSArICcpJylcbmNvbnN0IEhUTUxfT1BFTl9DTE9TRV9UQUdfUkUgPSBuZXcgUmVnRXhwKCdeKD86JyArIG9wZW5fdGFnICsgJ3wnICsgY2xvc2VfdGFnICsgJyknKVxuXG5leHBvcnQgeyBIVE1MX1RBR19SRSwgSFRNTF9PUEVOX0NMT1NFX1RBR19SRSB9XG4iLCIvLyBIVE1MIGJsb2NrXG5cbmltcG9ydCBibG9ja19uYW1lcyBmcm9tICcuLi9jb21tb24vaHRtbF9ibG9ja3MubWpzJ1xuaW1wb3J0IHsgSFRNTF9PUEVOX0NMT1NFX1RBR19SRSB9IGZyb20gJy4uL2NvbW1vbi9odG1sX3JlLm1qcydcblxuLy8gQW4gYXJyYXkgb2Ygb3BlbmluZyBhbmQgY29ycmVzcG9uZGluZyBjbG9zaW5nIHNlcXVlbmNlcyBmb3IgaHRtbCB0YWdzLFxuLy8gbGFzdCBhcmd1bWVudCBkZWZpbmVzIHdoZXRoZXIgaXQgY2FuIHRlcm1pbmF0ZSBhIHBhcmFncmFwaCBvciBub3Rcbi8vXG5jb25zdCBIVE1MX1NFUVVFTkNFUyA9IFtcbiAgWy9ePChzY3JpcHR8cHJlfHN0eWxlfHRleHRhcmVhKSg/PShcXHN8PnwkKSkvaSwgLzxcXC8oc2NyaXB0fHByZXxzdHlsZXx0ZXh0YXJlYSk+L2ksIHRydWVdLFxuICBbL148IS0tLywgICAgICAgIC8tLT4vLCAgIHRydWVdLFxuICBbL148XFw/LywgICAgICAgICAvXFw/Pi8sICAgdHJ1ZV0sXG4gIFsvXjwhW0EtWl0vLCAgICAgLz4vLCAgICAgdHJ1ZV0sXG4gIFsvXjwhXFxbQ0RBVEFcXFsvLCAvXFxdXFxdPi8sIHRydWVdLFxuICBbbmV3IFJlZ0V4cCgnXjwvPygnICsgYmxvY2tfbmFtZXMuam9pbignfCcpICsgJykoPz0oXFxcXHN8Lz8+fCQpKScsICdpJyksIC9eJC8sIHRydWVdLFxuICBbbmV3IFJlZ0V4cChIVE1MX09QRU5fQ0xPU0VfVEFHX1JFLnNvdXJjZSArICdcXFxccyokJyksICAvXiQvLCBmYWxzZV1cbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHRtbF9ibG9jayAoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgc2lsZW50KSB7XG4gIGxldCBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdXG4gIGxldCBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXVxuXG4gIC8vIGlmIGl0J3MgaW5kZW50ZWQgbW9yZSB0aGFuIDMgc3BhY2VzLCBpdCBzaG91bGQgYmUgYSBjb2RlIGJsb2NrXG4gIGlmIChzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7IHJldHVybiBmYWxzZSB9XG5cbiAgaWYgKCFzdGF0ZS5tZC5vcHRpb25zLmh0bWwpIHsgcmV0dXJuIGZhbHNlIH1cblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgzQy8qIDwgKi8pIHsgcmV0dXJuIGZhbHNlIH1cblxuICBsZXQgbGluZVRleHQgPSBzdGF0ZS5zcmMuc2xpY2UocG9zLCBtYXgpXG5cbiAgbGV0IGkgPSAwXG4gIGZvciAoOyBpIDwgSFRNTF9TRVFVRU5DRVMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoSFRNTF9TRVFVRU5DRVNbaV1bMF0udGVzdChsaW5lVGV4dCkpIHsgYnJlYWsgfVxuICB9XG4gIGlmIChpID09PSBIVE1MX1NFUVVFTkNFUy5sZW5ndGgpIHsgcmV0dXJuIGZhbHNlIH1cblxuICBpZiAoc2lsZW50KSB7XG4gICAgLy8gdHJ1ZSBpZiB0aGlzIHNlcXVlbmNlIGNhbiBiZSBhIHRlcm1pbmF0b3IsIGZhbHNlIG90aGVyd2lzZVxuICAgIHJldHVybiBIVE1MX1NFUVVFTkNFU1tpXVsyXVxuICB9XG5cbiAgbGV0IG5leHRMaW5lID0gc3RhcnRMaW5lICsgMVxuXG4gIC8vIElmIHdlIGFyZSBoZXJlIC0gd2UgZGV0ZWN0ZWQgSFRNTCBibG9jay5cbiAgLy8gTGV0J3Mgcm9sbCBkb3duIHRpbGwgYmxvY2sgZW5kLlxuICBpZiAoIUhUTUxfU0VRVUVOQ0VTW2ldWzFdLnRlc3QobGluZVRleHQpKSB7XG4gICAgZm9yICg7IG5leHRMaW5lIDwgZW5kTGluZTsgbmV4dExpbmUrKykge1xuICAgICAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgYnJlYWsgfVxuXG4gICAgICBwb3MgPSBzdGF0ZS5iTWFya3NbbmV4dExpbmVdICsgc3RhdGUudFNoaWZ0W25leHRMaW5lXVxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW25leHRMaW5lXVxuICAgICAgbGluZVRleHQgPSBzdGF0ZS5zcmMuc2xpY2UocG9zLCBtYXgpXG5cbiAgICAgIGlmIChIVE1MX1NFUVVFTkNFU1tpXVsxXS50ZXN0KGxpbmVUZXh0KSkge1xuICAgICAgICBpZiAobGluZVRleHQubGVuZ3RoICE9PSAwKSB7IG5leHRMaW5lKysgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRlLmxpbmUgPSBuZXh0TGluZVxuXG4gIGNvbnN0IHRva2VuICAgPSBzdGF0ZS5wdXNoKCdodG1sX2Jsb2NrJywgJycsIDApXG4gIHRva2VuLm1hcCAgICAgPSBbc3RhcnRMaW5lLCBuZXh0TGluZV1cbiAgdG9rZW4uY29udGVudCA9IHN0YXRlLmdldExpbmVzKHN0YXJ0TGluZSwgbmV4dExpbmUsIHN0YXRlLmJsa0luZGVudCwgdHJ1ZSlcblxuICByZXR1cm4gdHJ1ZVxufVxuIiwiLy8gaGVhZGluZyAoIywgIyMsIC4uLilcblxuaW1wb3J0IHsgaXNTcGFjZSB9IGZyb20gJy4uL2NvbW1vbi91dGlscy5tanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRpbmcgKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICBsZXQgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXVxuICBsZXQgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV1cblxuICAvLyBpZiBpdCdzIGluZGVudGVkIG1vcmUgdGhhbiAzIHNwYWNlcywgaXQgc2hvdWxkIGJlIGEgY29kZSBibG9ja1xuICBpZiAoc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyByZXR1cm4gZmFsc2UgfVxuXG4gIGxldCBjaCAgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpXG5cbiAgaWYgKGNoICE9PSAweDIzLyogIyAqLyB8fCBwb3MgPj0gbWF4KSB7IHJldHVybiBmYWxzZSB9XG5cbiAgLy8gY291bnQgaGVhZGluZyBsZXZlbFxuICBsZXQgbGV2ZWwgPSAxXG4gIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoKytwb3MpXG4gIHdoaWxlIChjaCA9PT0gMHgyMy8qICMgKi8gJiYgcG9zIDwgbWF4ICYmIGxldmVsIDw9IDYpIHtcbiAgICBsZXZlbCsrXG4gICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdCgrK3BvcylcbiAgfVxuXG4gIGlmIChsZXZlbCA+IDYgfHwgKHBvcyA8IG1heCAmJiAhaXNTcGFjZShjaCkpKSB7IHJldHVybiBmYWxzZSB9XG5cbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gdHJ1ZSB9XG5cbiAgLy8gTGV0J3MgY3V0IHRhaWxzIGxpa2UgJyAgICAjIyMgICcgZnJvbSB0aGUgZW5kIG9mIHN0cmluZ1xuXG4gIG1heCA9IHN0YXRlLnNraXBTcGFjZXNCYWNrKG1heCwgcG9zKVxuICBjb25zdCB0bXAgPSBzdGF0ZS5za2lwQ2hhcnNCYWNrKG1heCwgMHgyMywgcG9zKSAvLyAjXG4gIGlmICh0bXAgPiBwb3MgJiYgaXNTcGFjZShzdGF0ZS5zcmMuY2hhckNvZGVBdCh0bXAgLSAxKSkpIHtcbiAgICBtYXggPSB0bXBcbiAgfVxuXG4gIHN0YXRlLmxpbmUgPSBzdGFydExpbmUgKyAxXG5cbiAgY29uc3QgdG9rZW5fbyAgPSBzdGF0ZS5wdXNoKCdoZWFkaW5nX29wZW4nLCAnaCcgKyBTdHJpbmcobGV2ZWwpLCAxKVxuICB0b2tlbl9vLm1hcmt1cCA9ICcjIyMjIyMjIycuc2xpY2UoMCwgbGV2ZWwpXG4gIHRva2VuX28ubWFwICAgID0gW3N0YXJ0TGluZSwgc3RhdGUubGluZV1cblxuICBjb25zdCB0b2tlbl9pICAgID0gc3RhdGUucHVzaCgnaW5saW5lJywgJycsIDApXG4gIHRva2VuX2kuY29udGVudCAgPSBzdGF0ZS5zcmMuc2xpY2UocG9zLCBtYXgpLnRyaW0oKVxuICB0b2tlbl9pLm1hcCAgICAgID0gW3N0YXJ0TGluZSwgc3RhdGUubGluZV1cbiAgdG9rZW5faS5jaGlsZHJlbiA9IFtdXG5cbiAgY29uc3QgdG9rZW5fYyAgPSBzdGF0ZS5wdXNoKCdoZWFkaW5nX2Nsb3NlJywgJ2gnICsgU3RyaW5nKGxldmVsKSwgLTEpXG4gIHRva2VuX2MubWFya3VwID0gJyMjIyMjIyMjJy5zbGljZSgwLCBsZXZlbClcblxuICByZXR1cm4gdHJ1ZVxufVxuIiwiLy8gbGhlYWRpbmcgKC0tLSwgPT09KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaGVhZGluZyAoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZS8qLCBzaWxlbnQgKi8pIHtcbiAgY29uc3QgdGVybWluYXRvclJ1bGVzID0gc3RhdGUubWQuYmxvY2sucnVsZXIuZ2V0UnVsZXMoJ3BhcmFncmFwaCcpXG5cbiAgLy8gaWYgaXQncyBpbmRlbnRlZCBtb3JlIHRoYW4gMyBzcGFjZXMsIGl0IHNob3VsZCBiZSBhIGNvZGUgYmxvY2tcbiAgaWYgKHN0YXRlLnNDb3VudFtzdGFydExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHsgcmV0dXJuIGZhbHNlIH1cblxuICBjb25zdCBvbGRQYXJlbnRUeXBlID0gc3RhdGUucGFyZW50VHlwZVxuICBzdGF0ZS5wYXJlbnRUeXBlID0gJ3BhcmFncmFwaCcgLy8gdXNlIHBhcmFncmFwaCB0byBtYXRjaCB0ZXJtaW5hdG9yUnVsZXNcblxuICAvLyBqdW1wIGxpbmUtYnktbGluZSB1bnRpbCBlbXB0eSBvbmUgb3IgRU9GXG4gIGxldCBsZXZlbCA9IDBcbiAgbGV0IG1hcmtlclxuICBsZXQgbmV4dExpbmUgPSBzdGFydExpbmUgKyAxXG5cbiAgZm9yICg7IG5leHRMaW5lIDwgZW5kTGluZSAmJiAhc3RhdGUuaXNFbXB0eShuZXh0TGluZSk7IG5leHRMaW5lKyspIHtcbiAgICAvLyB0aGlzIHdvdWxkIGJlIGEgY29kZSBibG9jayBub3JtYWxseSwgYnV0IGFmdGVyIHBhcmFncmFwaFxuICAgIC8vIGl0J3MgY29uc2lkZXJlZCBhIGxhenkgY29udGludWF0aW9uIHJlZ2FyZGxlc3Mgb2Ygd2hhdCdzIHRoZXJlXG4gICAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPiAzKSB7IGNvbnRpbnVlIH1cblxuICAgIC8vXG4gICAgLy8gQ2hlY2sgZm9yIHVuZGVybGluZSBpbiBzZXRleHQgaGVhZGVyXG4gICAgLy9cbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSA+PSBzdGF0ZS5ibGtJbmRlbnQpIHtcbiAgICAgIGxldCBwb3MgPSBzdGF0ZS5iTWFya3NbbmV4dExpbmVdICsgc3RhdGUudFNoaWZ0W25leHRMaW5lXVxuICAgICAgY29uc3QgbWF4ID0gc3RhdGUuZU1hcmtzW25leHRMaW5lXVxuXG4gICAgICBpZiAocG9zIDwgbWF4KSB7XG4gICAgICAgIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcylcblxuICAgICAgICBpZiAobWFya2VyID09PSAweDJELyogLSAqLyB8fCBtYXJrZXIgPT09IDB4M0QvKiA9ICovKSB7XG4gICAgICAgICAgcG9zID0gc3RhdGUuc2tpcENoYXJzKHBvcywgbWFya2VyKVxuICAgICAgICAgIHBvcyA9IHN0YXRlLnNraXBTcGFjZXMocG9zKVxuXG4gICAgICAgICAgaWYgKHBvcyA+PSBtYXgpIHtcbiAgICAgICAgICAgIGxldmVsID0gKG1hcmtlciA9PT0gMHgzRC8qID0gKi8gPyAxIDogMilcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcXVpcmsgZm9yIGJsb2NrcXVvdGVzLCB0aGlzIGxpbmUgc2hvdWxkIGFscmVhZHkgYmUgY2hlY2tlZCBieSB0aGF0IHJ1bGVcbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSA8IDApIHsgY29udGludWUgfVxuXG4gICAgLy8gU29tZSB0YWdzIGNhbiB0ZXJtaW5hdGUgcGFyYWdyYXBoIHdpdGhvdXQgZW1wdHkgbGluZS5cbiAgICBsZXQgdGVybWluYXRlID0gZmFsc2VcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRlcm1pbmF0b3JSdWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0ZXJtaW5hdG9yUnVsZXNbaV0oc3RhdGUsIG5leHRMaW5lLCBlbmRMaW5lLCB0cnVlKSkge1xuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0ZXJtaW5hdGUpIHsgYnJlYWsgfVxuICB9XG5cbiAgaWYgKCFsZXZlbCkge1xuICAgIC8vIERpZG4ndCBmaW5kIHZhbGlkIHVuZGVybGluZVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgY29udGVudCA9IHN0YXRlLmdldExpbmVzKHN0YXJ0TGluZSwgbmV4dExpbmUsIHN0YXRlLmJsa0luZGVudCwgZmFsc2UpLnRyaW0oKVxuXG4gIHN0YXRlLmxpbmUgPSBuZXh0TGluZSArIDFcblxuICBjb25zdCB0b2tlbl9vICAgID0gc3RhdGUucHVzaCgnaGVhZGluZ19vcGVuJywgJ2gnICsgU3RyaW5nKGxldmVsKSwgMSlcbiAgdG9rZW5fby5tYXJrdXAgICA9IFN0cmluZy5mcm9tQ2hhckNvZGUobWFya2VyKVxuICB0b2tlbl9vLm1hcCAgICAgID0gW3N0YXJ0TGluZSwgc3RhdGUubGluZV1cblxuICBjb25zdCB0b2tlbl9pICAgID0gc3RhdGUucHVzaCgnaW5saW5lJywgJycsIDApXG4gIHRva2VuX2kuY29udGVudCAgPSBjb250ZW50XG4gIHRva2VuX2kubWFwICAgICAgPSBbc3RhcnRMaW5lLCBzdGF0ZS5saW5lIC0gMV1cbiAgdG9rZW5faS5jaGlsZHJlbiA9IFtdXG5cbiAgY29uc3QgdG9rZW5fYyAgICA9IHN0YXRlLnB1c2goJ2hlYWRpbmdfY2xvc2UnLCAnaCcgKyBTdHJpbmcobGV2ZWwpLCAtMSlcbiAgdG9rZW5fYy5tYXJrdXAgICA9IFN0cmluZy5mcm9tQ2hhckNvZGUobWFya2VyKVxuXG4gIHN0YXRlLnBhcmVudFR5cGUgPSBvbGRQYXJlbnRUeXBlXG5cbiAgcmV0dXJuIHRydWVcbn1cbiIsIi8vIFBhcmFncmFwaFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJhZ3JhcGggKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUpIHtcbiAgY29uc3QgdGVybWluYXRvclJ1bGVzID0gc3RhdGUubWQuYmxvY2sucnVsZXIuZ2V0UnVsZXMoJ3BhcmFncmFwaCcpXG4gIGNvbnN0IG9sZFBhcmVudFR5cGUgPSBzdGF0ZS5wYXJlbnRUeXBlXG4gIGxldCBuZXh0TGluZSA9IHN0YXJ0TGluZSArIDFcbiAgc3RhdGUucGFyZW50VHlwZSA9ICdwYXJhZ3JhcGgnXG5cbiAgLy8ganVtcCBsaW5lLWJ5LWxpbmUgdW50aWwgZW1wdHkgb25lIG9yIEVPRlxuICBmb3IgKDsgbmV4dExpbmUgPCBlbmRMaW5lICYmICFzdGF0ZS5pc0VtcHR5KG5leHRMaW5lKTsgbmV4dExpbmUrKykge1xuICAgIC8vIHRoaXMgd291bGQgYmUgYSBjb2RlIGJsb2NrIG5vcm1hbGx5LCBidXQgYWZ0ZXIgcGFyYWdyYXBoXG4gICAgLy8gaXQncyBjb25zaWRlcmVkIGEgbGF6eSBjb250aW51YXRpb24gcmVnYXJkbGVzcyBvZiB3aGF0J3MgdGhlcmVcbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+IDMpIHsgY29udGludWUgfVxuXG4gICAgLy8gcXVpcmsgZm9yIGJsb2NrcXVvdGVzLCB0aGlzIGxpbmUgc2hvdWxkIGFscmVhZHkgYmUgY2hlY2tlZCBieSB0aGF0IHJ1bGVcbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSA8IDApIHsgY29udGludWUgfVxuXG4gICAgLy8gU29tZSB0YWdzIGNhbiB0ZXJtaW5hdGUgcGFyYWdyYXBoIHdpdGhvdXQgZW1wdHkgbGluZS5cbiAgICBsZXQgdGVybWluYXRlID0gZmFsc2VcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRlcm1pbmF0b3JSdWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0ZXJtaW5hdG9yUnVsZXNbaV0oc3RhdGUsIG5leHRMaW5lLCBlbmRMaW5lLCB0cnVlKSkge1xuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0ZXJtaW5hdGUpIHsgYnJlYWsgfVxuICB9XG5cbiAgY29uc3QgY29udGVudCA9IHN0YXRlLmdldExpbmVzKHN0YXJ0TGluZSwgbmV4dExpbmUsIHN0YXRlLmJsa0luZGVudCwgZmFsc2UpLnRyaW0oKVxuXG4gIHN0YXRlLmxpbmUgPSBuZXh0TGluZVxuXG4gIGNvbnN0IHRva2VuX28gICAgPSBzdGF0ZS5wdXNoKCdwYXJhZ3JhcGhfb3BlbicsICdwJywgMSlcbiAgdG9rZW5fby5tYXAgICAgICA9IFtzdGFydExpbmUsIHN0YXRlLmxpbmVdXG5cbiAgY29uc3QgdG9rZW5faSAgICA9IHN0YXRlLnB1c2goJ2lubGluZScsICcnLCAwKVxuICB0b2tlbl9pLmNvbnRlbnQgID0gY29udGVudFxuICB0b2tlbl9pLm1hcCAgICAgID0gW3N0YXJ0TGluZSwgc3RhdGUubGluZV1cbiAgdG9rZW5faS5jaGlsZHJlbiA9IFtdXG5cbiAgc3RhdGUucHVzaCgncGFyYWdyYXBoX2Nsb3NlJywgJ3AnLCAtMSlcblxuICBzdGF0ZS5wYXJlbnRUeXBlID0gb2xkUGFyZW50VHlwZVxuXG4gIHJldHVybiB0cnVlXG59XG4iLCIvKiogaW50ZXJuYWxcbiAqIGNsYXNzIFBhcnNlckJsb2NrXG4gKlxuICogQmxvY2stbGV2ZWwgdG9rZW5pemVyLlxuICoqL1xuXG5pbXBvcnQgUnVsZXIgZnJvbSAnLi9ydWxlci5tanMnXG5pbXBvcnQgU3RhdGVCbG9jayBmcm9tICcuL3J1bGVzX2Jsb2NrL3N0YXRlX2Jsb2NrLm1qcydcblxuaW1wb3J0IHJfdGFibGUgZnJvbSAnLi9ydWxlc19ibG9jay90YWJsZS5tanMnXG5pbXBvcnQgcl9jb2RlIGZyb20gJy4vcnVsZXNfYmxvY2svY29kZS5tanMnXG5pbXBvcnQgcl9mZW5jZSBmcm9tICcuL3J1bGVzX2Jsb2NrL2ZlbmNlLm1qcydcbmltcG9ydCByX2Jsb2NrcXVvdGUgZnJvbSAnLi9ydWxlc19ibG9jay9ibG9ja3F1b3RlLm1qcydcbmltcG9ydCByX2hyIGZyb20gJy4vcnVsZXNfYmxvY2svaHIubWpzJ1xuaW1wb3J0IHJfbGlzdCBmcm9tICcuL3J1bGVzX2Jsb2NrL2xpc3QubWpzJ1xuaW1wb3J0IHJfcmVmZXJlbmNlIGZyb20gJy4vcnVsZXNfYmxvY2svcmVmZXJlbmNlLm1qcydcbmltcG9ydCByX2h0bWxfYmxvY2sgZnJvbSAnLi9ydWxlc19ibG9jay9odG1sX2Jsb2NrLm1qcydcbmltcG9ydCByX2hlYWRpbmcgZnJvbSAnLi9ydWxlc19ibG9jay9oZWFkaW5nLm1qcydcbmltcG9ydCByX2xoZWFkaW5nIGZyb20gJy4vcnVsZXNfYmxvY2svbGhlYWRpbmcubWpzJ1xuaW1wb3J0IHJfcGFyYWdyYXBoIGZyb20gJy4vcnVsZXNfYmxvY2svcGFyYWdyYXBoLm1qcydcblxuY29uc3QgX3J1bGVzID0gW1xuICAvLyBGaXJzdCAyIHBhcmFtcyAtIHJ1bGUgbmFtZSAmIHNvdXJjZS4gU2Vjb25kYXJ5IGFycmF5IC0gbGlzdCBvZiBydWxlcyxcbiAgLy8gd2hpY2ggY2FuIGJlIHRlcm1pbmF0ZWQgYnkgdGhpcyBvbmUuXG4gIFsndGFibGUnLCAgICAgIHJfdGFibGUsICAgICAgWydwYXJhZ3JhcGgnLCAncmVmZXJlbmNlJ11dLFxuICBbJ2NvZGUnLCAgICAgICByX2NvZGVdLFxuICBbJ2ZlbmNlJywgICAgICByX2ZlbmNlLCAgICAgIFsncGFyYWdyYXBoJywgJ3JlZmVyZW5jZScsICdibG9ja3F1b3RlJywgJ2xpc3QnXV0sXG4gIFsnYmxvY2txdW90ZScsIHJfYmxvY2txdW90ZSwgWydwYXJhZ3JhcGgnLCAncmVmZXJlbmNlJywgJ2Jsb2NrcXVvdGUnLCAnbGlzdCddXSxcbiAgWydocicsICAgICAgICAgcl9ociwgICAgICAgICBbJ3BhcmFncmFwaCcsICdyZWZlcmVuY2UnLCAnYmxvY2txdW90ZScsICdsaXN0J11dLFxuICBbJ2xpc3QnLCAgICAgICByX2xpc3QsICAgICAgIFsncGFyYWdyYXBoJywgJ3JlZmVyZW5jZScsICdibG9ja3F1b3RlJ11dLFxuICBbJ3JlZmVyZW5jZScsICByX3JlZmVyZW5jZV0sXG4gIFsnaHRtbF9ibG9jaycsIHJfaHRtbF9ibG9jaywgWydwYXJhZ3JhcGgnLCAncmVmZXJlbmNlJywgJ2Jsb2NrcXVvdGUnXV0sXG4gIFsnaGVhZGluZycsICAgIHJfaGVhZGluZywgICAgWydwYXJhZ3JhcGgnLCAncmVmZXJlbmNlJywgJ2Jsb2NrcXVvdGUnXV0sXG4gIFsnbGhlYWRpbmcnLCAgIHJfbGhlYWRpbmddLFxuICBbJ3BhcmFncmFwaCcsICByX3BhcmFncmFwaF1cbl1cblxuLyoqXG4gKiBuZXcgUGFyc2VyQmxvY2soKVxuICoqL1xuZnVuY3Rpb24gUGFyc2VyQmxvY2sgKCkge1xuICAvKipcbiAgICogUGFyc2VyQmxvY2sjcnVsZXIgLT4gUnVsZXJcbiAgICpcbiAgICogW1tSdWxlcl1dIGluc3RhbmNlLiBLZWVwIGNvbmZpZ3VyYXRpb24gb2YgYmxvY2sgcnVsZXMuXG4gICAqKi9cbiAgdGhpcy5ydWxlciA9IG5ldyBSdWxlcigpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLnJ1bGVyLnB1c2goX3J1bGVzW2ldWzBdLCBfcnVsZXNbaV1bMV0sIHsgYWx0OiAoX3J1bGVzW2ldWzJdIHx8IFtdKS5zbGljZSgpIH0pXG4gIH1cbn1cblxuLy8gR2VuZXJhdGUgdG9rZW5zIGZvciBpbnB1dCByYW5nZVxuLy9cblBhcnNlckJsb2NrLnByb3RvdHlwZS50b2tlbml6ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lKSB7XG4gIGNvbnN0IHJ1bGVzID0gdGhpcy5ydWxlci5nZXRSdWxlcygnJylcbiAgY29uc3QgbGVuID0gcnVsZXMubGVuZ3RoXG4gIGNvbnN0IG1heE5lc3RpbmcgPSBzdGF0ZS5tZC5vcHRpb25zLm1heE5lc3RpbmdcbiAgbGV0IGxpbmUgPSBzdGFydExpbmVcbiAgbGV0IGhhc0VtcHR5TGluZXMgPSBmYWxzZVxuXG4gIHdoaWxlIChsaW5lIDwgZW5kTGluZSkge1xuICAgIHN0YXRlLmxpbmUgPSBsaW5lID0gc3RhdGUuc2tpcEVtcHR5TGluZXMobGluZSlcbiAgICBpZiAobGluZSA+PSBlbmRMaW5lKSB7IGJyZWFrIH1cblxuICAgIC8vIFRlcm1pbmF0aW9uIGNvbmRpdGlvbiBmb3IgbmVzdGVkIGNhbGxzLlxuICAgIC8vIE5lc3RlZCBjYWxscyBjdXJyZW50bHkgdXNlZCBmb3IgYmxvY2txdW90ZXMgJiBsaXN0c1xuICAgIGlmIChzdGF0ZS5zQ291bnRbbGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgYnJlYWsgfVxuXG4gICAgLy8gSWYgbmVzdGluZyBsZXZlbCBleGNlZWRlZCAtIHNraXAgdGFpbCB0byB0aGUgZW5kLiBUaGF0J3Mgbm90IG9yZGluYXJ5XG4gICAgLy8gc2l0dWF0aW9uIGFuZCB3ZSBzaG91bGQgbm90IGNhcmUgYWJvdXQgY29udGVudC5cbiAgICBpZiAoc3RhdGUubGV2ZWwgPj0gbWF4TmVzdGluZykge1xuICAgICAgc3RhdGUubGluZSA9IGVuZExpbmVcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgLy8gVHJ5IGFsbCBwb3NzaWJsZSBydWxlcy5cbiAgICAvLyBPbiBzdWNjZXNzLCBydWxlIHNob3VsZDpcbiAgICAvL1xuICAgIC8vIC0gdXBkYXRlIGBzdGF0ZS5saW5lYFxuICAgIC8vIC0gdXBkYXRlIGBzdGF0ZS50b2tlbnNgXG4gICAgLy8gLSByZXR1cm4gdHJ1ZVxuICAgIGNvbnN0IHByZXZMaW5lID0gc3RhdGUubGluZVxuICAgIGxldCBvayA9IGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBvayA9IHJ1bGVzW2ldKHN0YXRlLCBsaW5lLCBlbmRMaW5lLCBmYWxzZSlcbiAgICAgIGlmIChvaykge1xuICAgICAgICBpZiAocHJldkxpbmUgPj0gc3RhdGUubGluZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImJsb2NrIHJ1bGUgZGlkbid0IGluY3JlbWVudCBzdGF0ZS5saW5lXCIpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGlzIGNhbiBvbmx5IGhhcHBlbiBpZiB1c2VyIGRpc2FibGVzIHBhcmFncmFwaCBydWxlXG4gICAgaWYgKCFvaykgdGhyb3cgbmV3IEVycm9yKCdub25lIG9mIHRoZSBibG9jayBydWxlcyBtYXRjaGVkJylcblxuICAgIC8vIHNldCBzdGF0ZS50aWdodCBpZiB3ZSBoYWQgYW4gZW1wdHkgbGluZSBiZWZvcmUgY3VycmVudCB0YWdcbiAgICAvLyBpLmUuIGxhdGVzdCBlbXB0eSBsaW5lIHNob3VsZCBub3QgY291bnRcbiAgICBzdGF0ZS50aWdodCA9ICFoYXNFbXB0eUxpbmVzXG5cbiAgICAvLyBwYXJhZ3JhcGggbWlnaHQgXCJlYXRcIiBvbmUgbmV3bGluZSBhZnRlciBpdCBpbiBuZXN0ZWQgbGlzdHNcbiAgICBpZiAoc3RhdGUuaXNFbXB0eShzdGF0ZS5saW5lIC0gMSkpIHtcbiAgICAgIGhhc0VtcHR5TGluZXMgPSB0cnVlXG4gICAgfVxuXG4gICAgbGluZSA9IHN0YXRlLmxpbmVcblxuICAgIGlmIChsaW5lIDwgZW5kTGluZSAmJiBzdGF0ZS5pc0VtcHR5KGxpbmUpKSB7XG4gICAgICBoYXNFbXB0eUxpbmVzID0gdHJ1ZVxuICAgICAgbGluZSsrXG4gICAgICBzdGF0ZS5saW5lID0gbGluZVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFBhcnNlckJsb2NrLnBhcnNlKHN0ciwgbWQsIGVudiwgb3V0VG9rZW5zKVxuICpcbiAqIFByb2Nlc3MgaW5wdXQgc3RyaW5nIGFuZCBwdXNoIGJsb2NrIHRva2VucyBpbnRvIGBvdXRUb2tlbnNgXG4gKiovXG5QYXJzZXJCbG9jay5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoc3JjLCBtZCwgZW52LCBvdXRUb2tlbnMpIHtcbiAgaWYgKCFzcmMpIHsgcmV0dXJuIH1cblxuICBjb25zdCBzdGF0ZSA9IG5ldyB0aGlzLlN0YXRlKHNyYywgbWQsIGVudiwgb3V0VG9rZW5zKVxuXG4gIHRoaXMudG9rZW5pemUoc3RhdGUsIHN0YXRlLmxpbmUsIHN0YXRlLmxpbmVNYXgpXG59XG5cblBhcnNlckJsb2NrLnByb3RvdHlwZS5TdGF0ZSA9IFN0YXRlQmxvY2tcblxuZXhwb3J0IGRlZmF1bHQgUGFyc2VyQmxvY2tcbiIsIi8vIElubGluZSBwYXJzZXIgc3RhdGVcblxuaW1wb3J0IFRva2VuIGZyb20gJy4uL3Rva2VuLm1qcydcbmltcG9ydCB7IGlzV2hpdGVTcGFjZSwgaXNQdW5jdENoYXIsIGlzTWRBc2NpaVB1bmN0IH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzLm1qcydcblxuZnVuY3Rpb24gU3RhdGVJbmxpbmUgKHNyYywgbWQsIGVudiwgb3V0VG9rZW5zKSB7XG4gIHRoaXMuc3JjID0gc3JjXG4gIHRoaXMuZW52ID0gZW52XG4gIHRoaXMubWQgPSBtZFxuICB0aGlzLnRva2VucyA9IG91dFRva2Vuc1xuICB0aGlzLnRva2Vuc19tZXRhID0gQXJyYXkob3V0VG9rZW5zLmxlbmd0aClcblxuICB0aGlzLnBvcyA9IDBcbiAgdGhpcy5wb3NNYXggPSB0aGlzLnNyYy5sZW5ndGhcbiAgdGhpcy5sZXZlbCA9IDBcbiAgdGhpcy5wZW5kaW5nID0gJydcbiAgdGhpcy5wZW5kaW5nTGV2ZWwgPSAwXG5cbiAgLy8gU3RvcmVzIHsgc3RhcnQ6IGVuZCB9IHBhaXJzLiBVc2VmdWwgZm9yIGJhY2t0cmFja1xuICAvLyBvcHRpbWl6YXRpb24gb2YgcGFpcnMgcGFyc2UgKGVtcGhhc2lzLCBzdHJpa2VzKS5cbiAgdGhpcy5jYWNoZSA9IHt9XG5cbiAgLy8gTGlzdCBvZiBlbXBoYXNpcy1saWtlIGRlbGltaXRlcnMgZm9yIGN1cnJlbnQgdGFnXG4gIHRoaXMuZGVsaW1pdGVycyA9IFtdXG5cbiAgLy8gU3RhY2sgb2YgZGVsaW1pdGVyIGxpc3RzIGZvciB1cHBlciBsZXZlbCB0YWdzXG4gIHRoaXMuX3ByZXZfZGVsaW1pdGVycyA9IFtdXG5cbiAgLy8gYmFja3RpY2sgbGVuZ3RoID0+IGxhc3Qgc2VlbiBwb3NpdGlvblxuICB0aGlzLmJhY2t0aWNrcyA9IHt9XG4gIHRoaXMuYmFja3RpY2tzU2Nhbm5lZCA9IGZhbHNlXG5cbiAgLy8gQ291bnRlciB1c2VkIHRvIGRpc2FibGUgaW5saW5lIGxpbmtpZnktaXQgZXhlY3V0aW9uXG4gIC8vIGluc2lkZSA8YT4gYW5kIG1hcmtkb3duIGxpbmtzXG4gIHRoaXMubGlua0xldmVsID0gMFxufVxuXG4vLyBGbHVzaCBwZW5kaW5nIHRleHRcbi8vXG5TdGF0ZUlubGluZS5wcm90b3R5cGUucHVzaFBlbmRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRva2VuID0gbmV3IFRva2VuKCd0ZXh0JywgJycsIDApXG4gIHRva2VuLmNvbnRlbnQgPSB0aGlzLnBlbmRpbmdcbiAgdG9rZW4ubGV2ZWwgPSB0aGlzLnBlbmRpbmdMZXZlbFxuICB0aGlzLnRva2Vucy5wdXNoKHRva2VuKVxuICB0aGlzLnBlbmRpbmcgPSAnJ1xuICByZXR1cm4gdG9rZW5cbn1cblxuLy8gUHVzaCBuZXcgdG9rZW4gdG8gXCJzdHJlYW1cIi5cbi8vIElmIHBlbmRpbmcgdGV4dCBleGlzdHMgLSBmbHVzaCBpdCBhcyB0ZXh0IHRva2VuXG4vL1xuU3RhdGVJbmxpbmUucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAodHlwZSwgdGFnLCBuZXN0aW5nKSB7XG4gIGlmICh0aGlzLnBlbmRpbmcpIHtcbiAgICB0aGlzLnB1c2hQZW5kaW5nKClcbiAgfVxuXG4gIGNvbnN0IHRva2VuID0gbmV3IFRva2VuKHR5cGUsIHRhZywgbmVzdGluZylcbiAgbGV0IHRva2VuX21ldGEgPSBudWxsXG5cbiAgaWYgKG5lc3RpbmcgPCAwKSB7XG4gICAgLy8gY2xvc2luZyB0YWdcbiAgICB0aGlzLmxldmVsLS1cbiAgICB0aGlzLmRlbGltaXRlcnMgPSB0aGlzLl9wcmV2X2RlbGltaXRlcnMucG9wKClcbiAgfVxuXG4gIHRva2VuLmxldmVsID0gdGhpcy5sZXZlbFxuXG4gIGlmIChuZXN0aW5nID4gMCkge1xuICAgIC8vIG9wZW5pbmcgdGFnXG4gICAgdGhpcy5sZXZlbCsrXG4gICAgdGhpcy5fcHJldl9kZWxpbWl0ZXJzLnB1c2godGhpcy5kZWxpbWl0ZXJzKVxuICAgIHRoaXMuZGVsaW1pdGVycyA9IFtdXG4gICAgdG9rZW5fbWV0YSA9IHsgZGVsaW1pdGVyczogdGhpcy5kZWxpbWl0ZXJzIH1cbiAgfVxuXG4gIHRoaXMucGVuZGluZ0xldmVsID0gdGhpcy5sZXZlbFxuICB0aGlzLnRva2Vucy5wdXNoKHRva2VuKVxuICB0aGlzLnRva2Vuc19tZXRhLnB1c2godG9rZW5fbWV0YSlcbiAgcmV0dXJuIHRva2VuXG59XG5cbi8vIFNjYW4gYSBzZXF1ZW5jZSBvZiBlbXBoYXNpcy1saWtlIG1hcmtlcnMsIGFuZCBkZXRlcm1pbmUgd2hldGhlclxuLy8gaXQgY2FuIHN0YXJ0IGFuIGVtcGhhc2lzIHNlcXVlbmNlIG9yIGVuZCBhbiBlbXBoYXNpcyBzZXF1ZW5jZS5cbi8vXG4vLyAgLSBzdGFydCAtIHBvc2l0aW9uIHRvIHNjYW4gZnJvbSAoaXQgc2hvdWxkIHBvaW50IGF0IGEgdmFsaWQgbWFya2VyKTtcbi8vICAtIGNhblNwbGl0V29yZCAtIGRldGVybWluZSBpZiB0aGVzZSBtYXJrZXJzIGNhbiBiZSBmb3VuZCBpbnNpZGUgYSB3b3JkXG4vL1xuU3RhdGVJbmxpbmUucHJvdG90eXBlLnNjYW5EZWxpbXMgPSBmdW5jdGlvbiAoc3RhcnQsIGNhblNwbGl0V29yZCkge1xuICBjb25zdCBtYXggPSB0aGlzLnBvc01heFxuICBjb25zdCBtYXJrZXIgPSB0aGlzLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KVxuXG4gIC8vIHRyZWF0IGJlZ2lubmluZyBvZiB0aGUgbGluZSBhcyBhIHdoaXRlc3BhY2VcbiAgY29uc3QgbGFzdENoYXIgPSBzdGFydCA+IDAgPyB0aGlzLnNyYy5jaGFyQ29kZUF0KHN0YXJ0IC0gMSkgOiAweDIwXG5cbiAgbGV0IHBvcyA9IHN0YXJ0XG4gIHdoaWxlIChwb3MgPCBtYXggJiYgdGhpcy5zcmMuY2hhckNvZGVBdChwb3MpID09PSBtYXJrZXIpIHsgcG9zKysgfVxuXG4gIGNvbnN0IGNvdW50ID0gcG9zIC0gc3RhcnRcblxuICAvLyB0cmVhdCBlbmQgb2YgdGhlIGxpbmUgYXMgYSB3aGl0ZXNwYWNlXG4gIGNvbnN0IG5leHRDaGFyID0gcG9zIDwgbWF4ID8gdGhpcy5zcmMuY2hhckNvZGVBdChwb3MpIDogMHgyMFxuXG4gIGNvbnN0IGlzTGFzdFB1bmN0Q2hhciA9IGlzTWRBc2NpaVB1bmN0KGxhc3RDaGFyKSB8fCBpc1B1bmN0Q2hhcihTdHJpbmcuZnJvbUNoYXJDb2RlKGxhc3RDaGFyKSlcbiAgY29uc3QgaXNOZXh0UHVuY3RDaGFyID0gaXNNZEFzY2lpUHVuY3QobmV4dENoYXIpIHx8IGlzUHVuY3RDaGFyKFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXIpKVxuXG4gIGNvbnN0IGlzTGFzdFdoaXRlU3BhY2UgPSBpc1doaXRlU3BhY2UobGFzdENoYXIpXG4gIGNvbnN0IGlzTmV4dFdoaXRlU3BhY2UgPSBpc1doaXRlU3BhY2UobmV4dENoYXIpXG5cbiAgY29uc3QgbGVmdF9mbGFua2luZyA9XG4gICAgIWlzTmV4dFdoaXRlU3BhY2UgJiYgKCFpc05leHRQdW5jdENoYXIgfHwgaXNMYXN0V2hpdGVTcGFjZSB8fCBpc0xhc3RQdW5jdENoYXIpXG4gIGNvbnN0IHJpZ2h0X2ZsYW5raW5nID1cbiAgICAhaXNMYXN0V2hpdGVTcGFjZSAmJiAoIWlzTGFzdFB1bmN0Q2hhciB8fCBpc05leHRXaGl0ZVNwYWNlIHx8IGlzTmV4dFB1bmN0Q2hhcilcblxuICBjb25zdCBjYW5fb3BlbiAgPSBsZWZ0X2ZsYW5raW5nICAmJiAoY2FuU3BsaXRXb3JkIHx8ICFyaWdodF9mbGFua2luZyB8fCBpc0xhc3RQdW5jdENoYXIpXG4gIGNvbnN0IGNhbl9jbG9zZSA9IHJpZ2h0X2ZsYW5raW5nICYmIChjYW5TcGxpdFdvcmQgfHwgIWxlZnRfZmxhbmtpbmcgIHx8IGlzTmV4dFB1bmN0Q2hhcilcblxuICByZXR1cm4geyBjYW5fb3BlbiwgY2FuX2Nsb3NlLCBsZW5ndGg6IGNvdW50IH1cbn1cblxuLy8gcmUtZXhwb3J0IFRva2VuIGNsYXNzIHRvIHVzZSBpbiBibG9jayBydWxlc1xuU3RhdGVJbmxpbmUucHJvdG90eXBlLlRva2VuID0gVG9rZW5cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVJbmxpbmVcbiIsIi8vIFNraXAgdGV4dCBjaGFyYWN0ZXJzIGZvciB0ZXh0IHRva2VuLCBwbGFjZSB0aG9zZSB0byBwZW5kaW5nIGJ1ZmZlclxuLy8gYW5kIGluY3JlbWVudCBjdXJyZW50IHBvc1xuXG4vLyBSdWxlIHRvIHNraXAgcHVyZSB0ZXh0XG4vLyAne30kJUB+Kz06JyByZXNlcnZlZCBmb3IgZXh0ZW50aW9uc1xuXG4vLyAhLCBcIiwgIywgJCwgJSwgJiwgJywgKCwgKSwgKiwgKywgLCwgLSwgLiwgLywgOiwgOywgPCwgPSwgPiwgPywgQCwgWywgXFwsIF0sIF4sIF8sIGAsIHssIHwsIH0sIG9yIH5cblxuLy8gISEhISBEb24ndCBjb25mdXNlIHdpdGggXCJNYXJrZG93biBBU0NJSSBQdW5jdHVhdGlvblwiIGNoYXJzXG4vLyBodHRwOi8vc3BlYy5jb21tb25tYXJrLm9yZy8wLjE1LyNhc2NpaS1wdW5jdHVhdGlvbi1jaGFyYWN0ZXJcbmZ1bmN0aW9uIGlzVGVybWluYXRvckNoYXIgKGNoKSB7XG4gIHN3aXRjaCAoY2gpIHtcbiAgICBjYXNlIDB4MEEvKiBcXG4gKi86XG4gICAgY2FzZSAweDIxLyogISAqLzpcbiAgICBjYXNlIDB4MjMvKiAjICovOlxuICAgIGNhc2UgMHgyNC8qICQgKi86XG4gICAgY2FzZSAweDI1LyogJSAqLzpcbiAgICBjYXNlIDB4MjYvKiAmICovOlxuICAgIGNhc2UgMHgyQS8qICogKi86XG4gICAgY2FzZSAweDJCLyogKyAqLzpcbiAgICBjYXNlIDB4MkQvKiAtICovOlxuICAgIGNhc2UgMHgzQS8qIDogKi86XG4gICAgY2FzZSAweDNDLyogPCAqLzpcbiAgICBjYXNlIDB4M0QvKiA9ICovOlxuICAgIGNhc2UgMHgzRS8qID4gKi86XG4gICAgY2FzZSAweDQwLyogQCAqLzpcbiAgICBjYXNlIDB4NUIvKiBbICovOlxuICAgIGNhc2UgMHg1Qy8qIFxcICovOlxuICAgIGNhc2UgMHg1RC8qIF0gKi86XG4gICAgY2FzZSAweDVFLyogXiAqLzpcbiAgICBjYXNlIDB4NUYvKiBfICovOlxuICAgIGNhc2UgMHg2MC8qIGAgKi86XG4gICAgY2FzZSAweDdCLyogeyAqLzpcbiAgICBjYXNlIDB4N0QvKiB9ICovOlxuICAgIGNhc2UgMHg3RS8qIH4gKi86XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXh0IChzdGF0ZSwgc2lsZW50KSB7XG4gIGxldCBwb3MgPSBzdGF0ZS5wb3NcblxuICB3aGlsZSAocG9zIDwgc3RhdGUucG9zTWF4ICYmICFpc1Rlcm1pbmF0b3JDaGFyKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykpKSB7XG4gICAgcG9zKytcbiAgfVxuXG4gIGlmIChwb3MgPT09IHN0YXRlLnBvcykgeyByZXR1cm4gZmFsc2UgfVxuXG4gIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gc3RhdGUuc3JjLnNsaWNlKHN0YXRlLnBvcywgcG9zKSB9XG5cbiAgc3RhdGUucG9zID0gcG9zXG5cbiAgcmV0dXJuIHRydWVcbn1cblxuLy8gQWx0ZXJuYXRpdmUgaW1wbGVtZW50YXRpb24sIGZvciBtZW1vcnkuXG4vL1xuLy8gSXQgY29zdHMgMTAlIG9mIHBlcmZvcm1hbmNlLCBidXQgYWxsb3dzIGV4dGVuZCB0ZXJtaW5hdG9ycyBsaXN0LCBpZiBwbGFjZSBpdFxuLy8gdG8gYFBhcnNlcklubGluZWAgcHJvcGVydHkuIFByb2JhYmx5LCB3aWxsIHN3aXRjaCB0byBpdCBzb21ldGltZSwgc3VjaFxuLy8gZmxleGliaWxpdHkgcmVxdWlyZWQuXG5cbi8qXG52YXIgVEVSTUlOQVRPUl9SRSA9IC9bXFxuISMkJSYqK1xcLTo8PT5AW1xcXFxcXF1eX2B7fX5dLztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZXh0KHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIHBvcyA9IHN0YXRlLnBvcyxcbiAgICAgIGlkeCA9IHN0YXRlLnNyYy5zbGljZShwb3MpLnNlYXJjaChURVJNSU5BVE9SX1JFKTtcblxuICAvLyBmaXJzdCBjaGFyIGlzIHRlcm1pbmF0b3IgLT4gZW1wdHkgdGV4dFxuICBpZiAoaWR4ID09PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIG5vIHRlcm1pbmF0b3IgLT4gdGV4dCB0aWxsIGVuZCBvZiBzdHJpbmdcbiAgaWYgKGlkeCA8IDApIHtcbiAgICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9IHN0YXRlLnNyYy5zbGljZShwb3MpOyB9XG4gICAgc3RhdGUucG9zID0gc3RhdGUuc3JjLmxlbmd0aDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gc3RhdGUuc3JjLnNsaWNlKHBvcywgcG9zICsgaWR4KTsgfVxuXG4gIHN0YXRlLnBvcyArPSBpZHg7XG5cbiAgcmV0dXJuIHRydWU7XG59OyAqL1xuIiwiLy8gUHJvY2VzcyBsaW5rcyBsaWtlIGh0dHBzOi8vZXhhbXBsZS5vcmcvXG5cbi8vIFJGQzM5ODY6IHNjaGVtZSA9IEFMUEhBICooIEFMUEhBIC8gRElHSVQgLyBcIitcIiAvIFwiLVwiIC8gXCIuXCIgKVxuY29uc3QgU0NIRU1FX1JFID0gLyg/Ol58W15hLXowLTkuKy1dKShbYS16XVthLXowLTkuKy1dKikkL2lcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlua2lmeSAoc3RhdGUsIHNpbGVudCkge1xuICBpZiAoIXN0YXRlLm1kLm9wdGlvbnMubGlua2lmeSkgcmV0dXJuIGZhbHNlXG4gIGlmIChzdGF0ZS5saW5rTGV2ZWwgPiAwKSByZXR1cm4gZmFsc2VcblxuICBjb25zdCBwb3MgPSBzdGF0ZS5wb3NcbiAgY29uc3QgbWF4ID0gc3RhdGUucG9zTWF4XG5cbiAgaWYgKHBvcyArIDMgPiBtYXgpIHJldHVybiBmYWxzZVxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgzQS8qIDogKi8pIHJldHVybiBmYWxzZVxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zICsgMSkgIT09IDB4MkYvKiAvICovKSByZXR1cm4gZmFsc2VcbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyArIDIpICE9PSAweDJGLyogLyAqLykgcmV0dXJuIGZhbHNlXG5cbiAgY29uc3QgbWF0Y2ggPSBzdGF0ZS5wZW5kaW5nLm1hdGNoKFNDSEVNRV9SRSlcbiAgaWYgKCFtYXRjaCkgcmV0dXJuIGZhbHNlXG5cbiAgY29uc3QgcHJvdG8gPSBtYXRjaFsxXVxuXG4gIGNvbnN0IGxpbmsgPSBzdGF0ZS5tZC5saW5raWZ5Lm1hdGNoQXRTdGFydChzdGF0ZS5zcmMuc2xpY2UocG9zIC0gcHJvdG8ubGVuZ3RoKSlcbiAgaWYgKCFsaW5rKSByZXR1cm4gZmFsc2VcblxuICBsZXQgdXJsID0gbGluay51cmxcblxuICAvLyBpbnZhbGlkIGxpbmssIGJ1dCBzdGlsbCBkZXRlY3RlZCBieSBsaW5raWZ5IHNvbWVob3c7XG4gIC8vIG5lZWQgdG8gY2hlY2sgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wIGJlbG93XG4gIGlmICh1cmwubGVuZ3RoIDw9IHByb3RvLmxlbmd0aCkgcmV0dXJuIGZhbHNlXG5cbiAgLy8gZGlzYWxsb3cgJyonIGF0IHRoZSBlbmQgb2YgdGhlIGxpbmsgKGNvbmZsaWN0cyB3aXRoIGVtcGhhc2lzKVxuICB1cmwgPSB1cmwucmVwbGFjZSgvXFwqKyQvLCAnJylcblxuICBjb25zdCBmdWxsVXJsID0gc3RhdGUubWQubm9ybWFsaXplTGluayh1cmwpXG4gIGlmICghc3RhdGUubWQudmFsaWRhdGVMaW5rKGZ1bGxVcmwpKSByZXR1cm4gZmFsc2VcblxuICBpZiAoIXNpbGVudCkge1xuICAgIHN0YXRlLnBlbmRpbmcgPSBzdGF0ZS5wZW5kaW5nLnNsaWNlKDAsIC1wcm90by5sZW5ndGgpXG5cbiAgICBjb25zdCB0b2tlbl9vID0gc3RhdGUucHVzaCgnbGlua19vcGVuJywgJ2EnLCAxKVxuICAgIHRva2VuX28uYXR0cnMgPSBbWydocmVmJywgZnVsbFVybF1dXG4gICAgdG9rZW5fby5tYXJrdXAgPSAnbGlua2lmeSdcbiAgICB0b2tlbl9vLmluZm8gPSAnYXV0bydcblxuICAgIGNvbnN0IHRva2VuX3QgPSBzdGF0ZS5wdXNoKCd0ZXh0JywgJycsIDApXG4gICAgdG9rZW5fdC5jb250ZW50ID0gc3RhdGUubWQubm9ybWFsaXplTGlua1RleHQodXJsKVxuXG4gICAgY29uc3QgdG9rZW5fYyA9IHN0YXRlLnB1c2goJ2xpbmtfY2xvc2UnLCAnYScsIC0xKVxuICAgIHRva2VuX2MubWFya3VwID0gJ2xpbmtpZnknXG4gICAgdG9rZW5fYy5pbmZvID0gJ2F1dG8nXG4gIH1cblxuICBzdGF0ZS5wb3MgKz0gdXJsLmxlbmd0aCAtIHByb3RvLmxlbmd0aFxuICByZXR1cm4gdHJ1ZVxufVxuIiwiLy8gUHJvY2Vlc3MgJ1xcbidcblxuaW1wb3J0IHsgaXNTcGFjZSB9IGZyb20gJy4uL2NvbW1vbi91dGlscy5tanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld2xpbmUgKHN0YXRlLCBzaWxlbnQpIHtcbiAgbGV0IHBvcyA9IHN0YXRlLnBvc1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDBBLyogXFxuICovKSB7IHJldHVybiBmYWxzZSB9XG5cbiAgY29uc3QgcG1heCA9IHN0YXRlLnBlbmRpbmcubGVuZ3RoIC0gMVxuICBjb25zdCBtYXggPSBzdGF0ZS5wb3NNYXhcblxuICAvLyAnICBcXG4nIC0+IGhhcmRicmVha1xuICAvLyBMb29rdXAgaW4gcGVuZGluZyBjaGFycyBpcyBiYWQgcHJhY3RpY2UhIERvbid0IGNvcHkgdG8gb3RoZXIgcnVsZXMhXG4gIC8vIFBlbmRpbmcgc3RyaW5nIGlzIHN0b3JlZCBpbiBjb25jYXQgbW9kZSwgaW5kZXhlZCBsb29rdXBzIHdpbGwgY2F1c2VcbiAgLy8gY29udmVydGlvbiB0byBmbGF0IG1vZGUuXG4gIGlmICghc2lsZW50KSB7XG4gICAgaWYgKHBtYXggPj0gMCAmJiBzdGF0ZS5wZW5kaW5nLmNoYXJDb2RlQXQocG1heCkgPT09IDB4MjApIHtcbiAgICAgIGlmIChwbWF4ID49IDEgJiYgc3RhdGUucGVuZGluZy5jaGFyQ29kZUF0KHBtYXggLSAxKSA9PT0gMHgyMCkge1xuICAgICAgICAvLyBGaW5kIHdoaXRlc3BhY2VzIHRhaWwgb2YgcGVuZGluZyBjaGFycy5cbiAgICAgICAgbGV0IHdzID0gcG1heCAtIDFcbiAgICAgICAgd2hpbGUgKHdzID49IDEgJiYgc3RhdGUucGVuZGluZy5jaGFyQ29kZUF0KHdzIC0gMSkgPT09IDB4MjApIHdzLS1cblxuICAgICAgICBzdGF0ZS5wZW5kaW5nID0gc3RhdGUucGVuZGluZy5zbGljZSgwLCB3cylcbiAgICAgICAgc3RhdGUucHVzaCgnaGFyZGJyZWFrJywgJ2JyJywgMClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnBlbmRpbmcgPSBzdGF0ZS5wZW5kaW5nLnNsaWNlKDAsIC0xKVxuICAgICAgICBzdGF0ZS5wdXNoKCdzb2Z0YnJlYWsnLCAnYnInLCAwKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5wdXNoKCdzb2Z0YnJlYWsnLCAnYnInLCAwKVxuICAgIH1cbiAgfVxuXG4gIHBvcysrXG5cbiAgLy8gc2tpcCBoZWFkaW5nIHNwYWNlcyBmb3IgbmV4dCBsaW5lXG4gIHdoaWxlIChwb3MgPCBtYXggJiYgaXNTcGFjZShzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpKSkgeyBwb3MrKyB9XG5cbiAgc3RhdGUucG9zID0gcG9zXG4gIHJldHVybiB0cnVlXG59XG4iLCIvLyBQcm9jZXNzIGVzY2FwZWQgY2hhcnMgYW5kIGhhcmRicmVha3NcblxuaW1wb3J0IHsgaXNTcGFjZSB9IGZyb20gJy4uL2NvbW1vbi91dGlscy5tanMnXG5cbmNvbnN0IEVTQ0FQRUQgPSBbXVxuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgaSsrKSB7IEVTQ0FQRUQucHVzaCgwKSB9XG5cbidcXFxcIVwiIyQlJlxcJygpKissLi86Ozw9Pj9AW11eX2B7fH1+LSdcbiAgLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjaCkgeyBFU0NBUEVEW2NoLmNoYXJDb2RlQXQoMCldID0gMSB9KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGUgKHN0YXRlLCBzaWxlbnQpIHtcbiAgbGV0IHBvcyA9IHN0YXRlLnBvc1xuICBjb25zdCBtYXggPSBzdGF0ZS5wb3NNYXhcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHg1Qy8qIFxcICovKSByZXR1cm4gZmFsc2VcbiAgcG9zKytcblxuICAvLyAnXFwnIGF0IHRoZSBlbmQgb2YgdGhlIGlubGluZSBibG9ja1xuICBpZiAocG9zID49IG1heCkgcmV0dXJuIGZhbHNlXG5cbiAgbGV0IGNoMSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcylcblxuICBpZiAoY2gxID09PSAweDBBKSB7XG4gICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgIHN0YXRlLnB1c2goJ2hhcmRicmVhaycsICdicicsIDApXG4gICAgfVxuXG4gICAgcG9zKytcbiAgICAvLyBza2lwIGxlYWRpbmcgd2hpdGVzcGFjZXMgZnJvbSBuZXh0IGxpbmVcbiAgICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgICBjaDEgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpXG4gICAgICBpZiAoIWlzU3BhY2UoY2gxKSkgYnJlYWtcbiAgICAgIHBvcysrXG4gICAgfVxuXG4gICAgc3RhdGUucG9zID0gcG9zXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGxldCBlc2NhcGVkU3RyID0gc3RhdGUuc3JjW3Bvc11cblxuICBpZiAoY2gxID49IDB4RDgwMCAmJiBjaDEgPD0gMHhEQkZGICYmIHBvcyArIDEgPCBtYXgpIHtcbiAgICBjb25zdCBjaDIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MgKyAxKVxuXG4gICAgaWYgKGNoMiA+PSAweERDMDAgJiYgY2gyIDw9IDB4REZGRikge1xuICAgICAgZXNjYXBlZFN0ciArPSBzdGF0ZS5zcmNbcG9zICsgMV1cbiAgICAgIHBvcysrXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb3JpZ1N0ciA9ICdcXFxcJyArIGVzY2FwZWRTdHJcblxuICBpZiAoIXNpbGVudCkge1xuICAgIGNvbnN0IHRva2VuID0gc3RhdGUucHVzaCgndGV4dF9zcGVjaWFsJywgJycsIDApXG5cbiAgICBpZiAoY2gxIDwgMjU2ICYmIEVTQ0FQRURbY2gxXSAhPT0gMCkge1xuICAgICAgdG9rZW4uY29udGVudCA9IGVzY2FwZWRTdHJcbiAgICB9IGVsc2Uge1xuICAgICAgdG9rZW4uY29udGVudCA9IG9yaWdTdHJcbiAgICB9XG5cbiAgICB0b2tlbi5tYXJrdXAgPSBvcmlnU3RyXG4gICAgdG9rZW4uaW5mbyAgID0gJ2VzY2FwZSdcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHBvcyArIDFcbiAgcmV0dXJuIHRydWVcbn1cbiIsIi8vIFBhcnNlIGJhY2t0aWNrc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiYWNrdGljayAoc3RhdGUsIHNpbGVudCkge1xuICBsZXQgcG9zID0gc3RhdGUucG9zXG4gIGNvbnN0IGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKVxuXG4gIGlmIChjaCAhPT0gMHg2MC8qIGAgKi8pIHsgcmV0dXJuIGZhbHNlIH1cblxuICBjb25zdCBzdGFydCA9IHBvc1xuICBwb3MrK1xuICBjb25zdCBtYXggPSBzdGF0ZS5wb3NNYXhcblxuICAvLyBzY2FuIG1hcmtlciBsZW5ndGhcbiAgd2hpbGUgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDYwLyogYCAqLykgeyBwb3MrKyB9XG5cbiAgY29uc3QgbWFya2VyID0gc3RhdGUuc3JjLnNsaWNlKHN0YXJ0LCBwb3MpXG4gIGNvbnN0IG9wZW5lckxlbmd0aCA9IG1hcmtlci5sZW5ndGhcblxuICBpZiAoc3RhdGUuYmFja3RpY2tzU2Nhbm5lZCAmJiAoc3RhdGUuYmFja3RpY2tzW29wZW5lckxlbmd0aF0gfHwgMCkgPD0gc3RhcnQpIHtcbiAgICBpZiAoIXNpbGVudCkgc3RhdGUucGVuZGluZyArPSBtYXJrZXJcbiAgICBzdGF0ZS5wb3MgKz0gb3BlbmVyTGVuZ3RoXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGxldCBtYXRjaEVuZCA9IHBvc1xuICBsZXQgbWF0Y2hTdGFydFxuXG4gIC8vIE5vdGhpbmcgZm91bmQgaW4gdGhlIGNhY2hlLCBzY2FuIHVudGlsIHRoZSBlbmQgb2YgdGhlIGxpbmUgKG9yIHVudGlsIG1hcmtlciBpcyBmb3VuZClcbiAgd2hpbGUgKChtYXRjaFN0YXJ0ID0gc3RhdGUuc3JjLmluZGV4T2YoJ2AnLCBtYXRjaEVuZCkpICE9PSAtMSkge1xuICAgIG1hdGNoRW5kID0gbWF0Y2hTdGFydCArIDFcblxuICAgIC8vIHNjYW4gbWFya2VyIGxlbmd0aFxuICAgIHdoaWxlIChtYXRjaEVuZCA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChtYXRjaEVuZCkgPT09IDB4NjAvKiBgICovKSB7IG1hdGNoRW5kKysgfVxuXG4gICAgY29uc3QgY2xvc2VyTGVuZ3RoID0gbWF0Y2hFbmQgLSBtYXRjaFN0YXJ0XG5cbiAgICBpZiAoY2xvc2VyTGVuZ3RoID09PSBvcGVuZXJMZW5ndGgpIHtcbiAgICAgIC8vIEZvdW5kIG1hdGNoaW5nIGNsb3NlciBsZW5ndGguXG4gICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHN0YXRlLnB1c2goJ2NvZGVfaW5saW5lJywgJ2NvZGUnLCAwKVxuICAgICAgICB0b2tlbi5tYXJrdXAgPSBtYXJrZXJcbiAgICAgICAgdG9rZW4uY29udGVudCA9IHN0YXRlLnNyYy5zbGljZShwb3MsIG1hdGNoU3RhcnQpXG4gICAgICAgICAgLnJlcGxhY2UoL1xcbi9nLCAnICcpXG4gICAgICAgICAgLnJlcGxhY2UoL14gKC4rKSAkLywgJyQxJylcbiAgICAgIH1cbiAgICAgIHN0YXRlLnBvcyA9IG1hdGNoRW5kXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFNvbWUgZGlmZmVyZW50IGxlbmd0aCBmb3VuZCwgcHV0IGl0IGluIGNhY2hlIGFzIHVwcGVyIGxpbWl0IG9mIHdoZXJlIGNsb3NlciBjYW4gYmUgZm91bmRcbiAgICBzdGF0ZS5iYWNrdGlja3NbY2xvc2VyTGVuZ3RoXSA9IG1hdGNoU3RhcnRcbiAgfVxuXG4gIC8vIFNjYW5uZWQgdGhyb3VnaCB0aGUgZW5kLCBkaWRuJ3QgZmluZCBhbnl0aGluZ1xuICBzdGF0ZS5iYWNrdGlja3NTY2FubmVkID0gdHJ1ZVxuXG4gIGlmICghc2lsZW50KSBzdGF0ZS5wZW5kaW5nICs9IG1hcmtlclxuICBzdGF0ZS5wb3MgKz0gb3BlbmVyTGVuZ3RoXG4gIHJldHVybiB0cnVlXG59XG4iLCIvLyB+fnN0cmlrZSB0aHJvdWdofn5cbi8vXG5cbi8vIEluc2VydCBlYWNoIG1hcmtlciBhcyBhIHNlcGFyYXRlIHRleHQgdG9rZW4sIGFuZCBhZGQgaXQgdG8gZGVsaW1pdGVyIGxpc3Rcbi8vXG5mdW5jdGlvbiBzdHJpa2V0aHJvdWdoX3Rva2VuaXplIChzdGF0ZSwgc2lsZW50KSB7XG4gIGNvbnN0IHN0YXJ0ID0gc3RhdGUucG9zXG4gIGNvbnN0IG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KVxuXG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIGZhbHNlIH1cblxuICBpZiAobWFya2VyICE9PSAweDdFLyogfiAqLykgeyByZXR1cm4gZmFsc2UgfVxuXG4gIGNvbnN0IHNjYW5uZWQgPSBzdGF0ZS5zY2FuRGVsaW1zKHN0YXRlLnBvcywgdHJ1ZSlcbiAgbGV0IGxlbiA9IHNjYW5uZWQubGVuZ3RoXG4gIGNvbnN0IGNoID0gU3RyaW5nLmZyb21DaGFyQ29kZShtYXJrZXIpXG5cbiAgaWYgKGxlbiA8IDIpIHsgcmV0dXJuIGZhbHNlIH1cblxuICBsZXQgdG9rZW5cblxuICBpZiAobGVuICUgMikge1xuICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCd0ZXh0JywgJycsIDApXG4gICAgdG9rZW4uY29udGVudCA9IGNoXG4gICAgbGVuLS1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICB0b2tlbiAgICAgICAgID0gc3RhdGUucHVzaCgndGV4dCcsICcnLCAwKVxuICAgIHRva2VuLmNvbnRlbnQgPSBjaCArIGNoXG5cbiAgICBzdGF0ZS5kZWxpbWl0ZXJzLnB1c2goe1xuICAgICAgbWFya2VyLFxuICAgICAgbGVuZ3RoOiAwLCAgICAgLy8gZGlzYWJsZSBcInJ1bGUgb2YgM1wiIGxlbmd0aCBjaGVja3MgbWVhbnQgZm9yIGVtcGhhc2lzXG4gICAgICB0b2tlbjogc3RhdGUudG9rZW5zLmxlbmd0aCAtIDEsXG4gICAgICBlbmQ6IC0xLFxuICAgICAgb3Blbjogc2Nhbm5lZC5jYW5fb3BlbixcbiAgICAgIGNsb3NlOiBzY2FubmVkLmNhbl9jbG9zZVxuICAgIH0pXG4gIH1cblxuICBzdGF0ZS5wb3MgKz0gc2Nhbm5lZC5sZW5ndGhcblxuICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBwb3N0UHJvY2VzcyAoc3RhdGUsIGRlbGltaXRlcnMpIHtcbiAgbGV0IHRva2VuXG4gIGNvbnN0IGxvbmVNYXJrZXJzID0gW11cbiAgY29uc3QgbWF4ID0gZGVsaW1pdGVycy5sZW5ndGhcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgY29uc3Qgc3RhcnREZWxpbSA9IGRlbGltaXRlcnNbaV1cblxuICAgIGlmIChzdGFydERlbGltLm1hcmtlciAhPT0gMHg3RS8qIH4gKi8pIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0RGVsaW0uZW5kID09PSAtMSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBlbmREZWxpbSA9IGRlbGltaXRlcnNbc3RhcnREZWxpbS5lbmRdXG5cbiAgICB0b2tlbiAgICAgICAgID0gc3RhdGUudG9rZW5zW3N0YXJ0RGVsaW0udG9rZW5dXG4gICAgdG9rZW4udHlwZSAgICA9ICdzX29wZW4nXG4gICAgdG9rZW4udGFnICAgICA9ICdzJ1xuICAgIHRva2VuLm5lc3RpbmcgPSAxXG4gICAgdG9rZW4ubWFya3VwICA9ICd+fidcbiAgICB0b2tlbi5jb250ZW50ID0gJydcblxuICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS50b2tlbnNbZW5kRGVsaW0udG9rZW5dXG4gICAgdG9rZW4udHlwZSAgICA9ICdzX2Nsb3NlJ1xuICAgIHRva2VuLnRhZyAgICAgPSAncydcbiAgICB0b2tlbi5uZXN0aW5nID0gLTFcbiAgICB0b2tlbi5tYXJrdXAgID0gJ35+J1xuICAgIHRva2VuLmNvbnRlbnQgPSAnJ1xuXG4gICAgaWYgKHN0YXRlLnRva2Vuc1tlbmREZWxpbS50b2tlbiAtIDFdLnR5cGUgPT09ICd0ZXh0JyAmJlxuICAgICAgICBzdGF0ZS50b2tlbnNbZW5kRGVsaW0udG9rZW4gLSAxXS5jb250ZW50ID09PSAnficpIHtcbiAgICAgIGxvbmVNYXJrZXJzLnB1c2goZW5kRGVsaW0udG9rZW4gLSAxKVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGEgbWFya2VyIHNlcXVlbmNlIGhhcyBhbiBvZGQgbnVtYmVyIG9mIGNoYXJhY3RlcnMsIGl0J3Mgc3BsaXR0ZWRcbiAgLy8gbGlrZSB0aGlzOiBgfn5+fn5gIC0+IGB+YCArIGB+fmAgKyBgfn5gLCBsZWF2aW5nIG9uZSBtYXJrZXIgYXQgdGhlXG4gIC8vIHN0YXJ0IG9mIHRoZSBzZXF1ZW5jZS5cbiAgLy9cbiAgLy8gU28sIHdlIGhhdmUgdG8gbW92ZSBhbGwgdGhvc2UgbWFya2VycyBhZnRlciBzdWJzZXF1ZW50IHNfY2xvc2UgdGFncy5cbiAgLy9cbiAgd2hpbGUgKGxvbmVNYXJrZXJzLmxlbmd0aCkge1xuICAgIGNvbnN0IGkgPSBsb25lTWFya2Vycy5wb3AoKVxuICAgIGxldCBqID0gaSArIDFcblxuICAgIHdoaWxlIChqIDwgc3RhdGUudG9rZW5zLmxlbmd0aCAmJiBzdGF0ZS50b2tlbnNbal0udHlwZSA9PT0gJ3NfY2xvc2UnKSB7XG4gICAgICBqKytcbiAgICB9XG5cbiAgICBqLS1cblxuICAgIGlmIChpICE9PSBqKSB7XG4gICAgICB0b2tlbiA9IHN0YXRlLnRva2Vuc1tqXVxuICAgICAgc3RhdGUudG9rZW5zW2pdID0gc3RhdGUudG9rZW5zW2ldXG4gICAgICBzdGF0ZS50b2tlbnNbaV0gPSB0b2tlblxuICAgIH1cbiAgfVxufVxuXG4vLyBXYWxrIHRocm91Z2ggZGVsaW1pdGVyIGxpc3QgYW5kIHJlcGxhY2UgdGV4dCB0b2tlbnMgd2l0aCB0YWdzXG4vL1xuZnVuY3Rpb24gc3RyaWtldGhyb3VnaF9wb3N0UHJvY2VzcyAoc3RhdGUpIHtcbiAgY29uc3QgdG9rZW5zX21ldGEgPSBzdGF0ZS50b2tlbnNfbWV0YVxuICBjb25zdCBtYXggPSBzdGF0ZS50b2tlbnNfbWV0YS5sZW5ndGhcblxuICBwb3N0UHJvY2VzcyhzdGF0ZSwgc3RhdGUuZGVsaW1pdGVycylcblxuICBmb3IgKGxldCBjdXJyID0gMDsgY3VyciA8IG1heDsgY3VycisrKSB7XG4gICAgaWYgKHRva2Vuc19tZXRhW2N1cnJdICYmIHRva2Vuc19tZXRhW2N1cnJdLmRlbGltaXRlcnMpIHtcbiAgICAgIHBvc3RQcm9jZXNzKHN0YXRlLCB0b2tlbnNfbWV0YVtjdXJyXS5kZWxpbWl0ZXJzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRva2VuaXplOiBzdHJpa2V0aHJvdWdoX3Rva2VuaXplLFxuICBwb3N0UHJvY2Vzczogc3RyaWtldGhyb3VnaF9wb3N0UHJvY2Vzc1xufVxuIiwiLy8gUHJvY2VzcyAqdGhpcyogYW5kIF90aGF0X1xuLy9cblxuLy8gSW5zZXJ0IGVhY2ggbWFya2VyIGFzIGEgc2VwYXJhdGUgdGV4dCB0b2tlbiwgYW5kIGFkZCBpdCB0byBkZWxpbWl0ZXIgbGlzdFxuLy9cbmZ1bmN0aW9uIGVtcGhhc2lzX3Rva2VuaXplIChzdGF0ZSwgc2lsZW50KSB7XG4gIGNvbnN0IHN0YXJ0ID0gc3RhdGUucG9zXG4gIGNvbnN0IG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KVxuXG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIGZhbHNlIH1cblxuICBpZiAobWFya2VyICE9PSAweDVGIC8qIF8gKi8gJiYgbWFya2VyICE9PSAweDJBIC8qICogKi8pIHsgcmV0dXJuIGZhbHNlIH1cblxuICBjb25zdCBzY2FubmVkID0gc3RhdGUuc2NhbkRlbGltcyhzdGF0ZS5wb3MsIG1hcmtlciA9PT0gMHgyQSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNjYW5uZWQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0b2tlbiA9IHN0YXRlLnB1c2goJ3RleHQnLCAnJywgMClcbiAgICB0b2tlbi5jb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZShtYXJrZXIpXG5cbiAgICBzdGF0ZS5kZWxpbWl0ZXJzLnB1c2goe1xuICAgICAgLy8gQ2hhciBjb2RlIG9mIHRoZSBzdGFydGluZyBtYXJrZXIgKG51bWJlcikuXG4gICAgICAvL1xuICAgICAgbWFya2VyLFxuXG4gICAgICAvLyBUb3RhbCBsZW5ndGggb2YgdGhlc2Ugc2VyaWVzIG9mIGRlbGltaXRlcnMuXG4gICAgICAvL1xuICAgICAgbGVuZ3RoOiBzY2FubmVkLmxlbmd0aCxcblxuICAgICAgLy8gQSBwb3NpdGlvbiBvZiB0aGUgdG9rZW4gdGhpcyBkZWxpbWl0ZXIgY29ycmVzcG9uZHMgdG8uXG4gICAgICAvL1xuICAgICAgdG9rZW46IHN0YXRlLnRva2Vucy5sZW5ndGggLSAxLFxuXG4gICAgICAvLyBJZiB0aGlzIGRlbGltaXRlciBpcyBtYXRjaGVkIGFzIGEgdmFsaWQgb3BlbmVyLCBgZW5kYCB3aWxsIGJlXG4gICAgICAvLyBlcXVhbCB0byBpdHMgcG9zaXRpb24sIG90aGVyd2lzZSBpdCdzIGAtMWAuXG4gICAgICAvL1xuICAgICAgZW5kOiAtMSxcblxuICAgICAgLy8gQm9vbGVhbiBmbGFncyB0aGF0IGRldGVybWluZSBpZiB0aGlzIGRlbGltaXRlciBjb3VsZCBvcGVuIG9yIGNsb3NlXG4gICAgICAvLyBhbiBlbXBoYXNpcy5cbiAgICAgIC8vXG4gICAgICBvcGVuOiBzY2FubmVkLmNhbl9vcGVuLFxuICAgICAgY2xvc2U6IHNjYW5uZWQuY2FuX2Nsb3NlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRlLnBvcyArPSBzY2FubmVkLmxlbmd0aFxuXG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIHBvc3RQcm9jZXNzIChzdGF0ZSwgZGVsaW1pdGVycykge1xuICBjb25zdCBtYXggPSBkZWxpbWl0ZXJzLmxlbmd0aFxuXG4gIGZvciAobGV0IGkgPSBtYXggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IHN0YXJ0RGVsaW0gPSBkZWxpbWl0ZXJzW2ldXG5cbiAgICBpZiAoc3RhcnREZWxpbS5tYXJrZXIgIT09IDB4NUYvKiBfICovICYmIHN0YXJ0RGVsaW0ubWFya2VyICE9PSAweDJBLyogKiAqLykge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyBQcm9jZXNzIG9ubHkgb3BlbmluZyBtYXJrZXJzXG4gICAgaWYgKHN0YXJ0RGVsaW0uZW5kID09PSAtMSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBlbmREZWxpbSA9IGRlbGltaXRlcnNbc3RhcnREZWxpbS5lbmRdXG5cbiAgICAvLyBJZiB0aGUgcHJldmlvdXMgZGVsaW1pdGVyIGhhcyB0aGUgc2FtZSBtYXJrZXIgYW5kIGlzIGFkamFjZW50IHRvIHRoaXMgb25lLFxuICAgIC8vIG1lcmdlIHRob3NlIGludG8gb25lIHN0cm9uZyBkZWxpbWl0ZXIuXG4gICAgLy9cbiAgICAvLyBgPGVtPjxlbT53aGF0ZXZlcjwvZW0+PC9lbT5gIC0+IGA8c3Ryb25nPndoYXRldmVyPC9zdHJvbmc+YFxuICAgIC8vXG4gICAgY29uc3QgaXNTdHJvbmcgPSBpID4gMCAmJlxuICAgICAgICAgICAgICAgZGVsaW1pdGVyc1tpIC0gMV0uZW5kID09PSBzdGFydERlbGltLmVuZCArIDEgJiZcbiAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoYXQgZmlyc3QgdHdvIG1hcmtlcnMgbWF0Y2ggYW5kIGFkamFjZW50XG4gICAgICAgICAgICAgICBkZWxpbWl0ZXJzW2kgLSAxXS5tYXJrZXIgPT09IHN0YXJ0RGVsaW0ubWFya2VyICYmXG4gICAgICAgICAgICAgICBkZWxpbWl0ZXJzW2kgLSAxXS50b2tlbiA9PT0gc3RhcnREZWxpbS50b2tlbiAtIDEgJiZcbiAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoYXQgbGFzdCB0d28gbWFya2VycyBhcmUgYWRqYWNlbnQgKHdlIGNhbiBzYWZlbHkgYXNzdW1lIHRoZXkgbWF0Y2gpXG4gICAgICAgICAgICAgICBkZWxpbWl0ZXJzW3N0YXJ0RGVsaW0uZW5kICsgMV0udG9rZW4gPT09IGVuZERlbGltLnRva2VuICsgMVxuXG4gICAgY29uc3QgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHN0YXJ0RGVsaW0ubWFya2VyKVxuXG4gICAgY29uc3QgdG9rZW5fbyAgID0gc3RhdGUudG9rZW5zW3N0YXJ0RGVsaW0udG9rZW5dXG4gICAgdG9rZW5fby50eXBlICAgID0gaXNTdHJvbmcgPyAnc3Ryb25nX29wZW4nIDogJ2VtX29wZW4nXG4gICAgdG9rZW5fby50YWcgICAgID0gaXNTdHJvbmcgPyAnc3Ryb25nJyA6ICdlbSdcbiAgICB0b2tlbl9vLm5lc3RpbmcgPSAxXG4gICAgdG9rZW5fby5tYXJrdXAgID0gaXNTdHJvbmcgPyBjaCArIGNoIDogY2hcbiAgICB0b2tlbl9vLmNvbnRlbnQgPSAnJ1xuXG4gICAgY29uc3QgdG9rZW5fYyAgID0gc3RhdGUudG9rZW5zW2VuZERlbGltLnRva2VuXVxuICAgIHRva2VuX2MudHlwZSAgICA9IGlzU3Ryb25nID8gJ3N0cm9uZ19jbG9zZScgOiAnZW1fY2xvc2UnXG4gICAgdG9rZW5fYy50YWcgICAgID0gaXNTdHJvbmcgPyAnc3Ryb25nJyA6ICdlbSdcbiAgICB0b2tlbl9jLm5lc3RpbmcgPSAtMVxuICAgIHRva2VuX2MubWFya3VwICA9IGlzU3Ryb25nID8gY2ggKyBjaCA6IGNoXG4gICAgdG9rZW5fYy5jb250ZW50ID0gJydcblxuICAgIGlmIChpc1N0cm9uZykge1xuICAgICAgc3RhdGUudG9rZW5zW2RlbGltaXRlcnNbaSAtIDFdLnRva2VuXS5jb250ZW50ID0gJydcbiAgICAgIHN0YXRlLnRva2Vuc1tkZWxpbWl0ZXJzW3N0YXJ0RGVsaW0uZW5kICsgMV0udG9rZW5dLmNvbnRlbnQgPSAnJ1xuICAgICAgaS0tXG4gICAgfVxuICB9XG59XG5cbi8vIFdhbGsgdGhyb3VnaCBkZWxpbWl0ZXIgbGlzdCBhbmQgcmVwbGFjZSB0ZXh0IHRva2VucyB3aXRoIHRhZ3Ncbi8vXG5mdW5jdGlvbiBlbXBoYXNpc19wb3N0X3Byb2Nlc3MgKHN0YXRlKSB7XG4gIGNvbnN0IHRva2Vuc19tZXRhID0gc3RhdGUudG9rZW5zX21ldGFcbiAgY29uc3QgbWF4ID0gc3RhdGUudG9rZW5zX21ldGEubGVuZ3RoXG5cbiAgcG9zdFByb2Nlc3Moc3RhdGUsIHN0YXRlLmRlbGltaXRlcnMpXG5cbiAgZm9yIChsZXQgY3VyciA9IDA7IGN1cnIgPCBtYXg7IGN1cnIrKykge1xuICAgIGlmICh0b2tlbnNfbWV0YVtjdXJyXSAmJiB0b2tlbnNfbWV0YVtjdXJyXS5kZWxpbWl0ZXJzKSB7XG4gICAgICBwb3N0UHJvY2VzcyhzdGF0ZSwgdG9rZW5zX21ldGFbY3Vycl0uZGVsaW1pdGVycylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0b2tlbml6ZTogZW1waGFzaXNfdG9rZW5pemUsXG4gIHBvc3RQcm9jZXNzOiBlbXBoYXNpc19wb3N0X3Byb2Nlc3Ncbn1cbiIsIi8vIFByb2Nlc3MgW2xpbmtdKDx0bz4gXCJzdHVmZlwiKVxuXG5pbXBvcnQgeyBub3JtYWxpemVSZWZlcmVuY2UsIGlzU3BhY2UgfSBmcm9tICcuLi9jb21tb24vdXRpbHMubWpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaW5rIChzdGF0ZSwgc2lsZW50KSB7XG4gIGxldCBjb2RlLCBsYWJlbCwgcmVzLCByZWZcbiAgbGV0IGhyZWYgPSAnJ1xuICBsZXQgdGl0bGUgPSAnJ1xuICBsZXQgc3RhcnQgPSBzdGF0ZS5wb3NcbiAgbGV0IHBhcnNlUmVmZXJlbmNlID0gdHJ1ZVxuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MpICE9PSAweDVCLyogWyAqLykgeyByZXR1cm4gZmFsc2UgfVxuXG4gIGNvbnN0IG9sZFBvcyA9IHN0YXRlLnBvc1xuICBjb25zdCBtYXggPSBzdGF0ZS5wb3NNYXhcbiAgY29uc3QgbGFiZWxTdGFydCA9IHN0YXRlLnBvcyArIDFcbiAgY29uc3QgbGFiZWxFbmQgPSBzdGF0ZS5tZC5oZWxwZXJzLnBhcnNlTGlua0xhYmVsKHN0YXRlLCBzdGF0ZS5wb3MsIHRydWUpXG5cbiAgLy8gcGFyc2VyIGZhaWxlZCB0byBmaW5kICddJywgc28gaXQncyBub3QgYSB2YWxpZCBsaW5rXG4gIGlmIChsYWJlbEVuZCA8IDApIHsgcmV0dXJuIGZhbHNlIH1cblxuICBsZXQgcG9zID0gbGFiZWxFbmQgKyAxXG4gIGlmIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgyOC8qICggKi8pIHtcbiAgICAvL1xuICAgIC8vIElubGluZSBsaW5rXG4gICAgLy9cblxuICAgIC8vIG1pZ2h0IGhhdmUgZm91bmQgYSB2YWxpZCBzaG9ydGN1dCBsaW5rLCBkaXNhYmxlIHJlZmVyZW5jZSBwYXJzaW5nXG4gICAgcGFyc2VSZWZlcmVuY2UgPSBmYWxzZVxuXG4gICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAvLyAgICAgICAgXl4gc2tpcHBpbmcgdGhlc2Ugc3BhY2VzXG4gICAgcG9zKytcbiAgICBmb3IgKDsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcylcbiAgICAgIGlmICghaXNTcGFjZShjb2RlKSAmJiBjb2RlICE9PSAweDBBKSB7IGJyZWFrIH1cbiAgICB9XG4gICAgaWYgKHBvcyA+PSBtYXgpIHsgcmV0dXJuIGZhbHNlIH1cblxuICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgLy8gICAgICAgICAgXl5eXl5eIHBhcnNpbmcgbGluayBkZXN0aW5hdGlvblxuICAgIHN0YXJ0ID0gcG9zXG4gICAgcmVzID0gc3RhdGUubWQuaGVscGVycy5wYXJzZUxpbmtEZXN0aW5hdGlvbihzdGF0ZS5zcmMsIHBvcywgc3RhdGUucG9zTWF4KVxuICAgIGlmIChyZXMub2spIHtcbiAgICAgIGhyZWYgPSBzdGF0ZS5tZC5ub3JtYWxpemVMaW5rKHJlcy5zdHIpXG4gICAgICBpZiAoc3RhdGUubWQudmFsaWRhdGVMaW5rKGhyZWYpKSB7XG4gICAgICAgIHBvcyA9IHJlcy5wb3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhyZWYgPSAnJ1xuICAgICAgfVxuXG4gICAgICAvLyBbbGlua10oICA8aHJlZj4gIFwidGl0bGVcIiAgKVxuICAgICAgLy8gICAgICAgICAgICAgICAgXl4gc2tpcHBpbmcgdGhlc2Ugc3BhY2VzXG4gICAgICBzdGFydCA9IHBvc1xuICAgICAgZm9yICg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICAgICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcylcbiAgICAgICAgaWYgKCFpc1NwYWNlKGNvZGUpICYmIGNvZGUgIT09IDB4MEEpIHsgYnJlYWsgfVxuICAgICAgfVxuXG4gICAgICAvLyBbbGlua10oICA8aHJlZj4gIFwidGl0bGVcIiAgKVxuICAgICAgLy8gICAgICAgICAgICAgICAgICBeXl5eXl5eIHBhcnNpbmcgbGluayB0aXRsZVxuICAgICAgcmVzID0gc3RhdGUubWQuaGVscGVycy5wYXJzZUxpbmtUaXRsZShzdGF0ZS5zcmMsIHBvcywgc3RhdGUucG9zTWF4KVxuICAgICAgaWYgKHBvcyA8IG1heCAmJiBzdGFydCAhPT0gcG9zICYmIHJlcy5vaykge1xuICAgICAgICB0aXRsZSA9IHJlcy5zdHJcbiAgICAgICAgcG9zID0gcmVzLnBvc1xuXG4gICAgICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIF5eIHNraXBwaW5nIHRoZXNlIHNwYWNlc1xuICAgICAgICBmb3IgKDsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgICAgICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpXG4gICAgICAgICAgaWYgKCFpc1NwYWNlKGNvZGUpICYmIGNvZGUgIT09IDB4MEEpIHsgYnJlYWsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvcyA+PSBtYXggfHwgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgyOS8qICkgKi8pIHtcbiAgICAgIC8vIHBhcnNpbmcgYSB2YWxpZCBzaG9ydGN1dCBsaW5rIGZhaWxlZCwgZmFsbGJhY2sgdG8gcmVmZXJlbmNlXG4gICAgICBwYXJzZVJlZmVyZW5jZSA9IHRydWVcbiAgICB9XG4gICAgcG9zKytcbiAgfVxuXG4gIGlmIChwYXJzZVJlZmVyZW5jZSkge1xuICAgIC8vXG4gICAgLy8gTGluayByZWZlcmVuY2VcbiAgICAvL1xuICAgIGlmICh0eXBlb2Ygc3RhdGUuZW52LnJlZmVyZW5jZXMgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBmYWxzZSB9XG5cbiAgICBpZiAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4NUIvKiBbICovKSB7XG4gICAgICBzdGFydCA9IHBvcyArIDFcbiAgICAgIHBvcyA9IHN0YXRlLm1kLmhlbHBlcnMucGFyc2VMaW5rTGFiZWwoc3RhdGUsIHBvcylcbiAgICAgIGlmIChwb3MgPj0gMCkge1xuICAgICAgICBsYWJlbCA9IHN0YXRlLnNyYy5zbGljZShzdGFydCwgcG9zKyspXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3MgPSBsYWJlbEVuZCArIDFcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcG9zID0gbGFiZWxFbmQgKyAxXG4gICAgfVxuXG4gICAgLy8gY292ZXJzIGxhYmVsID09PSAnJyBhbmQgbGFiZWwgPT09IHVuZGVmaW5lZFxuICAgIC8vIChjb2xsYXBzZWQgcmVmZXJlbmNlIGxpbmsgYW5kIHNob3J0Y3V0IHJlZmVyZW5jZSBsaW5rIHJlc3BlY3RpdmVseSlcbiAgICBpZiAoIWxhYmVsKSB7IGxhYmVsID0gc3RhdGUuc3JjLnNsaWNlKGxhYmVsU3RhcnQsIGxhYmVsRW5kKSB9XG5cbiAgICByZWYgPSBzdGF0ZS5lbnYucmVmZXJlbmNlc1tub3JtYWxpemVSZWZlcmVuY2UobGFiZWwpXVxuICAgIGlmICghcmVmKSB7XG4gICAgICBzdGF0ZS5wb3MgPSBvbGRQb3NcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBocmVmID0gcmVmLmhyZWZcbiAgICB0aXRsZSA9IHJlZi50aXRsZVxuICB9XG5cbiAgLy9cbiAgLy8gV2UgZm91bmQgdGhlIGVuZCBvZiB0aGUgbGluaywgYW5kIGtub3cgZm9yIGEgZmFjdCBpdCdzIGEgdmFsaWQgbGluaztcbiAgLy8gc28gYWxsIHRoYXQncyBsZWZ0IHRvIGRvIGlzIHRvIGNhbGwgdG9rZW5pemVyLlxuICAvL1xuICBpZiAoIXNpbGVudCkge1xuICAgIHN0YXRlLnBvcyA9IGxhYmVsU3RhcnRcbiAgICBzdGF0ZS5wb3NNYXggPSBsYWJlbEVuZFxuXG4gICAgY29uc3QgdG9rZW5fbyA9IHN0YXRlLnB1c2goJ2xpbmtfb3BlbicsICdhJywgMSlcbiAgICBjb25zdCBhdHRycyA9IFtbJ2hyZWYnLCBocmVmXV1cbiAgICB0b2tlbl9vLmF0dHJzICA9IGF0dHJzXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBhdHRycy5wdXNoKFsndGl0bGUnLCB0aXRsZV0pXG4gICAgfVxuXG4gICAgc3RhdGUubGlua0xldmVsKytcbiAgICBzdGF0ZS5tZC5pbmxpbmUudG9rZW5pemUoc3RhdGUpXG4gICAgc3RhdGUubGlua0xldmVsLS1cblxuICAgIHN0YXRlLnB1c2goJ2xpbmtfY2xvc2UnLCAnYScsIC0xKVxuICB9XG5cbiAgc3RhdGUucG9zID0gcG9zXG4gIHN0YXRlLnBvc01heCA9IG1heFxuICByZXR1cm4gdHJ1ZVxufVxuIiwiLy8gUHJvY2VzcyAhW2ltYWdlXSg8c3JjPiBcInRpdGxlXCIpXG5cbmltcG9ydCB7IG5vcm1hbGl6ZVJlZmVyZW5jZSwgaXNTcGFjZSB9IGZyb20gJy4uL2NvbW1vbi91dGlscy5tanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGltYWdlIChzdGF0ZSwgc2lsZW50KSB7XG4gIGxldCBjb2RlLCBjb250ZW50LCBsYWJlbCwgcG9zLCByZWYsIHJlcywgdGl0bGUsIHN0YXJ0XG4gIGxldCBocmVmID0gJydcbiAgY29uc3Qgb2xkUG9zID0gc3RhdGUucG9zXG4gIGNvbnN0IG1heCA9IHN0YXRlLnBvc01heFxuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MpICE9PSAweDIxLyogISAqLykgeyByZXR1cm4gZmFsc2UgfVxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zICsgMSkgIT09IDB4NUIvKiBbICovKSB7IHJldHVybiBmYWxzZSB9XG5cbiAgY29uc3QgbGFiZWxTdGFydCA9IHN0YXRlLnBvcyArIDJcbiAgY29uc3QgbGFiZWxFbmQgPSBzdGF0ZS5tZC5oZWxwZXJzLnBhcnNlTGlua0xhYmVsKHN0YXRlLCBzdGF0ZS5wb3MgKyAxLCBmYWxzZSlcblxuICAvLyBwYXJzZXIgZmFpbGVkIHRvIGZpbmQgJ10nLCBzbyBpdCdzIG5vdCBhIHZhbGlkIGxpbmtcbiAgaWYgKGxhYmVsRW5kIDwgMCkgeyByZXR1cm4gZmFsc2UgfVxuXG4gIHBvcyA9IGxhYmVsRW5kICsgMVxuICBpZiAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4MjgvKiAoICovKSB7XG4gICAgLy9cbiAgICAvLyBJbmxpbmUgbGlua1xuICAgIC8vXG5cbiAgICAvLyBbbGlua10oICA8aHJlZj4gIFwidGl0bGVcIiAgKVxuICAgIC8vICAgICAgICBeXiBza2lwcGluZyB0aGVzZSBzcGFjZXNcbiAgICBwb3MrK1xuICAgIGZvciAoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKVxuICAgICAgaWYgKCFpc1NwYWNlKGNvZGUpICYmIGNvZGUgIT09IDB4MEEpIHsgYnJlYWsgfVxuICAgIH1cbiAgICBpZiAocG9zID49IG1heCkgeyByZXR1cm4gZmFsc2UgfVxuXG4gICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAvLyAgICAgICAgICBeXl5eXl4gcGFyc2luZyBsaW5rIGRlc3RpbmF0aW9uXG4gICAgc3RhcnQgPSBwb3NcbiAgICByZXMgPSBzdGF0ZS5tZC5oZWxwZXJzLnBhcnNlTGlua0Rlc3RpbmF0aW9uKHN0YXRlLnNyYywgcG9zLCBzdGF0ZS5wb3NNYXgpXG4gICAgaWYgKHJlcy5vaykge1xuICAgICAgaHJlZiA9IHN0YXRlLm1kLm5vcm1hbGl6ZUxpbmsocmVzLnN0cilcbiAgICAgIGlmIChzdGF0ZS5tZC52YWxpZGF0ZUxpbmsoaHJlZikpIHtcbiAgICAgICAgcG9zID0gcmVzLnBvc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHJlZiA9ICcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAvLyAgICAgICAgICAgICAgICBeXiBza2lwcGluZyB0aGVzZSBzcGFjZXNcbiAgICBzdGFydCA9IHBvc1xuICAgIGZvciAoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKVxuICAgICAgaWYgKCFpc1NwYWNlKGNvZGUpICYmIGNvZGUgIT09IDB4MEEpIHsgYnJlYWsgfVxuICAgIH1cblxuICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgLy8gICAgICAgICAgICAgICAgICBeXl5eXl5eIHBhcnNpbmcgbGluayB0aXRsZVxuICAgIHJlcyA9IHN0YXRlLm1kLmhlbHBlcnMucGFyc2VMaW5rVGl0bGUoc3RhdGUuc3JjLCBwb3MsIHN0YXRlLnBvc01heClcbiAgICBpZiAocG9zIDwgbWF4ICYmIHN0YXJ0ICE9PSBwb3MgJiYgcmVzLm9rKSB7XG4gICAgICB0aXRsZSA9IHJlcy5zdHJcbiAgICAgIHBvcyA9IHJlcy5wb3NcblxuICAgICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIF5eIHNraXBwaW5nIHRoZXNlIHNwYWNlc1xuICAgICAgZm9yICg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICAgICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcylcbiAgICAgICAgaWYgKCFpc1NwYWNlKGNvZGUpICYmIGNvZGUgIT09IDB4MEEpIHsgYnJlYWsgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZSA9ICcnXG4gICAgfVxuXG4gICAgaWYgKHBvcyA+PSBtYXggfHwgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgyOS8qICkgKi8pIHtcbiAgICAgIHN0YXRlLnBvcyA9IG9sZFBvc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHBvcysrXG4gIH0gZWxzZSB7XG4gICAgLy9cbiAgICAvLyBMaW5rIHJlZmVyZW5jZVxuICAgIC8vXG4gICAgaWYgKHR5cGVvZiBzdGF0ZS5lbnYucmVmZXJlbmNlcyA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlIH1cblxuICAgIGlmIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHg1Qi8qIFsgKi8pIHtcbiAgICAgIHN0YXJ0ID0gcG9zICsgMVxuICAgICAgcG9zID0gc3RhdGUubWQuaGVscGVycy5wYXJzZUxpbmtMYWJlbChzdGF0ZSwgcG9zKVxuICAgICAgaWYgKHBvcyA+PSAwKSB7XG4gICAgICAgIGxhYmVsID0gc3RhdGUuc3JjLnNsaWNlKHN0YXJ0LCBwb3MrKylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvcyA9IGxhYmVsRW5kICsgMVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwb3MgPSBsYWJlbEVuZCArIDFcbiAgICB9XG5cbiAgICAvLyBjb3ZlcnMgbGFiZWwgPT09ICcnIGFuZCBsYWJlbCA9PT0gdW5kZWZpbmVkXG4gICAgLy8gKGNvbGxhcHNlZCByZWZlcmVuY2UgbGluayBhbmQgc2hvcnRjdXQgcmVmZXJlbmNlIGxpbmsgcmVzcGVjdGl2ZWx5KVxuICAgIGlmICghbGFiZWwpIHsgbGFiZWwgPSBzdGF0ZS5zcmMuc2xpY2UobGFiZWxTdGFydCwgbGFiZWxFbmQpIH1cblxuICAgIHJlZiA9IHN0YXRlLmVudi5yZWZlcmVuY2VzW25vcm1hbGl6ZVJlZmVyZW5jZShsYWJlbCldXG4gICAgaWYgKCFyZWYpIHtcbiAgICAgIHN0YXRlLnBvcyA9IG9sZFBvc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGhyZWYgPSByZWYuaHJlZlxuICAgIHRpdGxlID0gcmVmLnRpdGxlXG4gIH1cblxuICAvL1xuICAvLyBXZSBmb3VuZCB0aGUgZW5kIG9mIHRoZSBsaW5rLCBhbmQga25vdyBmb3IgYSBmYWN0IGl0J3MgYSB2YWxpZCBsaW5rO1xuICAvLyBzbyBhbGwgdGhhdCdzIGxlZnQgdG8gZG8gaXMgdG8gY2FsbCB0b2tlbml6ZXIuXG4gIC8vXG4gIGlmICghc2lsZW50KSB7XG4gICAgY29udGVudCA9IHN0YXRlLnNyYy5zbGljZShsYWJlbFN0YXJ0LCBsYWJlbEVuZClcblxuICAgIGNvbnN0IHRva2VucyA9IFtdXG4gICAgc3RhdGUubWQuaW5saW5lLnBhcnNlKFxuICAgICAgY29udGVudCxcbiAgICAgIHN0YXRlLm1kLFxuICAgICAgc3RhdGUuZW52LFxuICAgICAgdG9rZW5zXG4gICAgKVxuXG4gICAgY29uc3QgdG9rZW4gPSBzdGF0ZS5wdXNoKCdpbWFnZScsICdpbWcnLCAwKVxuICAgIGNvbnN0IGF0dHJzID0gW1snc3JjJywgaHJlZl0sIFsnYWx0JywgJyddXVxuICAgIHRva2VuLmF0dHJzID0gYXR0cnNcbiAgICB0b2tlbi5jaGlsZHJlbiA9IHRva2Vuc1xuICAgIHRva2VuLmNvbnRlbnQgPSBjb250ZW50XG5cbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIGF0dHJzLnB1c2goWyd0aXRsZScsIHRpdGxlXSlcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBwb3NcbiAgc3RhdGUucG9zTWF4ID0gbWF4XG4gIHJldHVybiB0cnVlXG59XG4iLCIvLyBQcm9jZXNzIGF1dG9saW5rcyAnPHByb3RvY29sOi4uLj4nXG5cbi8qIGVzbGludCBtYXgtbGVuOjAgKi9cbmNvbnN0IEVNQUlMX1JFICAgID0gL14oW2EtekEtWjAtOS4hIyQlJicqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSopJC9cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4ICovXG5jb25zdCBBVVRPTElOS19SRSA9IC9eKFthLXpBLVpdW2EtekEtWjAtOSsuLV17MSwzMX0pOihbXjw+XFx4MDAtXFx4MjBdKikkL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRvbGluayAoc3RhdGUsIHNpbGVudCkge1xuICBsZXQgcG9zID0gc3RhdGUucG9zXG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4M0MvKiA8ICovKSB7IHJldHVybiBmYWxzZSB9XG5cbiAgY29uc3Qgc3RhcnQgPSBzdGF0ZS5wb3NcbiAgY29uc3QgbWF4ID0gc3RhdGUucG9zTWF4XG5cbiAgZm9yICg7Oykge1xuICAgIGlmICgrK3BvcyA+PSBtYXgpIHJldHVybiBmYWxzZVxuXG4gICAgY29uc3QgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpXG5cbiAgICBpZiAoY2ggPT09IDB4M0MgLyogPCAqLykgcmV0dXJuIGZhbHNlXG4gICAgaWYgKGNoID09PSAweDNFIC8qID4gKi8pIGJyZWFrXG4gIH1cblxuICBjb25zdCB1cmwgPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQgKyAxLCBwb3MpXG5cbiAgaWYgKEFVVE9MSU5LX1JFLnRlc3QodXJsKSkge1xuICAgIGNvbnN0IGZ1bGxVcmwgPSBzdGF0ZS5tZC5ub3JtYWxpemVMaW5rKHVybClcbiAgICBpZiAoIXN0YXRlLm1kLnZhbGlkYXRlTGluayhmdWxsVXJsKSkgeyByZXR1cm4gZmFsc2UgfVxuXG4gICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgIGNvbnN0IHRva2VuX28gICA9IHN0YXRlLnB1c2goJ2xpbmtfb3BlbicsICdhJywgMSlcbiAgICAgIHRva2VuX28uYXR0cnMgICA9IFtbJ2hyZWYnLCBmdWxsVXJsXV1cbiAgICAgIHRva2VuX28ubWFya3VwICA9ICdhdXRvbGluaydcbiAgICAgIHRva2VuX28uaW5mbyAgICA9ICdhdXRvJ1xuXG4gICAgICBjb25zdCB0b2tlbl90ICAgPSBzdGF0ZS5wdXNoKCd0ZXh0JywgJycsIDApXG4gICAgICB0b2tlbl90LmNvbnRlbnQgPSBzdGF0ZS5tZC5ub3JtYWxpemVMaW5rVGV4dCh1cmwpXG5cbiAgICAgIGNvbnN0IHRva2VuX2MgICA9IHN0YXRlLnB1c2goJ2xpbmtfY2xvc2UnLCAnYScsIC0xKVxuICAgICAgdG9rZW5fYy5tYXJrdXAgID0gJ2F1dG9saW5rJ1xuICAgICAgdG9rZW5fYy5pbmZvICAgID0gJ2F1dG8nXG4gICAgfVxuXG4gICAgc3RhdGUucG9zICs9IHVybC5sZW5ndGggKyAyXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmIChFTUFJTF9SRS50ZXN0KHVybCkpIHtcbiAgICBjb25zdCBmdWxsVXJsID0gc3RhdGUubWQubm9ybWFsaXplTGluaygnbWFpbHRvOicgKyB1cmwpXG4gICAgaWYgKCFzdGF0ZS5tZC52YWxpZGF0ZUxpbmsoZnVsbFVybCkpIHsgcmV0dXJuIGZhbHNlIH1cblxuICAgIGlmICghc2lsZW50KSB7XG4gICAgICBjb25zdCB0b2tlbl9vICAgPSBzdGF0ZS5wdXNoKCdsaW5rX29wZW4nLCAnYScsIDEpXG4gICAgICB0b2tlbl9vLmF0dHJzICAgPSBbWydocmVmJywgZnVsbFVybF1dXG4gICAgICB0b2tlbl9vLm1hcmt1cCAgPSAnYXV0b2xpbmsnXG4gICAgICB0b2tlbl9vLmluZm8gICAgPSAnYXV0bydcblxuICAgICAgY29uc3QgdG9rZW5fdCAgID0gc3RhdGUucHVzaCgndGV4dCcsICcnLCAwKVxuICAgICAgdG9rZW5fdC5jb250ZW50ID0gc3RhdGUubWQubm9ybWFsaXplTGlua1RleHQodXJsKVxuXG4gICAgICBjb25zdCB0b2tlbl9jICAgPSBzdGF0ZS5wdXNoKCdsaW5rX2Nsb3NlJywgJ2EnLCAtMSlcbiAgICAgIHRva2VuX2MubWFya3VwICA9ICdhdXRvbGluaydcbiAgICAgIHRva2VuX2MuaW5mbyAgICA9ICdhdXRvJ1xuICAgIH1cblxuICAgIHN0YXRlLnBvcyArPSB1cmwubGVuZ3RoICsgMlxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cbiIsIi8vIFByb2Nlc3MgaHRtbCB0YWdzXG5cbmltcG9ydCB7IEhUTUxfVEFHX1JFIH0gZnJvbSAnLi4vY29tbW9uL2h0bWxfcmUubWpzJ1xuXG5mdW5jdGlvbiBpc0xpbmtPcGVuIChzdHIpIHtcbiAgcmV0dXJuIC9ePGFbPlxcc10vaS50ZXN0KHN0cilcbn1cbmZ1bmN0aW9uIGlzTGlua0Nsb3NlIChzdHIpIHtcbiAgcmV0dXJuIC9ePFxcL2FcXHMqPi9pLnRlc3Qoc3RyKVxufVxuXG5mdW5jdGlvbiBpc0xldHRlciAoY2gpIHtcbiAgLyogZXNsaW50IG5vLWJpdHdpc2U6MCAqL1xuICBjb25zdCBsYyA9IGNoIHwgMHgyMCAvLyB0byBsb3dlciBjYXNlXG4gIHJldHVybiAobGMgPj0gMHg2MS8qIGEgKi8pICYmIChsYyA8PSAweDdhLyogeiAqLylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHRtbF9pbmxpbmUgKHN0YXRlLCBzaWxlbnQpIHtcbiAgaWYgKCFzdGF0ZS5tZC5vcHRpb25zLmh0bWwpIHsgcmV0dXJuIGZhbHNlIH1cblxuICAvLyBDaGVjayBzdGFydFxuICBjb25zdCBtYXggPSBzdGF0ZS5wb3NNYXhcbiAgY29uc3QgcG9zID0gc3RhdGUucG9zXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDNDLyogPCAqLyB8fFxuICAgICAgcG9zICsgMiA+PSBtYXgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFF1aWNrIGZhaWwgb24gc2Vjb25kIGNoYXJcbiAgY29uc3QgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MgKyAxKVxuICBpZiAoY2ggIT09IDB4MjEvKiAhICovICYmXG4gICAgICBjaCAhPT0gMHgzRi8qID8gKi8gJiZcbiAgICAgIGNoICE9PSAweDJGLyogLyAqLyAmJlxuICAgICAgIWlzTGV0dGVyKGNoKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgbWF0Y2ggPSBzdGF0ZS5zcmMuc2xpY2UocG9zKS5tYXRjaChIVE1MX1RBR19SRSlcbiAgaWYgKCFtYXRjaCkgeyByZXR1cm4gZmFsc2UgfVxuXG4gIGlmICghc2lsZW50KSB7XG4gICAgY29uc3QgdG9rZW4gPSBzdGF0ZS5wdXNoKCdodG1sX2lubGluZScsICcnLCAwKVxuICAgIHRva2VuLmNvbnRlbnQgPSBtYXRjaFswXVxuXG4gICAgaWYgKGlzTGlua09wZW4odG9rZW4uY29udGVudCkpICBzdGF0ZS5saW5rTGV2ZWwrK1xuICAgIGlmIChpc0xpbmtDbG9zZSh0b2tlbi5jb250ZW50KSkgc3RhdGUubGlua0xldmVsLS1cbiAgfVxuICBzdGF0ZS5wb3MgKz0gbWF0Y2hbMF0ubGVuZ3RoXG4gIHJldHVybiB0cnVlXG59XG4iLCIvLyBQcm9jZXNzIGh0bWwgZW50aXR5IC0gJiMxMjM7LCAmI3hBRjssICZxdW90OywgLi4uXG5cbmltcG9ydCB7IGRlY29kZUhUTUwgfSBmcm9tICdlbnRpdGllcydcbmltcG9ydCB7IGlzVmFsaWRFbnRpdHlDb2RlLCBmcm9tQ29kZVBvaW50IH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzLm1qcydcblxuY29uc3QgRElHSVRBTF9SRSA9IC9eJiMoKD86eFthLWYwLTldezEsNn18WzAtOV17MSw3fSkpOy9pXG5jb25zdCBOQU1FRF9SRSAgID0gL14mKFthLXpdW2EtejAtOV17MSwzMX0pOy9pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVudGl0eSAoc3RhdGUsIHNpbGVudCkge1xuICBjb25zdCBwb3MgPSBzdGF0ZS5wb3NcbiAgY29uc3QgbWF4ID0gc3RhdGUucG9zTWF4XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4MjYvKiAmICovKSByZXR1cm4gZmFsc2VcblxuICBpZiAocG9zICsgMSA+PSBtYXgpIHJldHVybiBmYWxzZVxuXG4gIGNvbnN0IGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zICsgMSlcblxuICBpZiAoY2ggPT09IDB4MjMgLyogIyAqLykge1xuICAgIGNvbnN0IG1hdGNoID0gc3RhdGUuc3JjLnNsaWNlKHBvcykubWF0Y2goRElHSVRBTF9SRSlcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBtYXRjaFsxXVswXS50b0xvd2VyQ2FzZSgpID09PSAneCcgPyBwYXJzZUludChtYXRjaFsxXS5zbGljZSgxKSwgMTYpIDogcGFyc2VJbnQobWF0Y2hbMV0sIDEwKVxuXG4gICAgICAgIGNvbnN0IHRva2VuICAgPSBzdGF0ZS5wdXNoKCd0ZXh0X3NwZWNpYWwnLCAnJywgMClcbiAgICAgICAgdG9rZW4uY29udGVudCA9IGlzVmFsaWRFbnRpdHlDb2RlKGNvZGUpID8gZnJvbUNvZGVQb2ludChjb2RlKSA6IGZyb21Db2RlUG9pbnQoMHhGRkZEKVxuICAgICAgICB0b2tlbi5tYXJrdXAgID0gbWF0Y2hbMF1cbiAgICAgICAgdG9rZW4uaW5mbyAgICA9ICdlbnRpdHknXG4gICAgICB9XG4gICAgICBzdGF0ZS5wb3MgKz0gbWF0Y2hbMF0ubGVuZ3RoXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtYXRjaCA9IHN0YXRlLnNyYy5zbGljZShwb3MpLm1hdGNoKE5BTUVEX1JFKVxuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3QgZGVjb2RlZCA9IGRlY29kZUhUTUwobWF0Y2hbMF0pXG4gICAgICBpZiAoZGVjb2RlZCAhPT0gbWF0Y2hbMF0pIHtcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgICBjb25zdCB0b2tlbiAgID0gc3RhdGUucHVzaCgndGV4dF9zcGVjaWFsJywgJycsIDApXG4gICAgICAgICAgdG9rZW4uY29udGVudCA9IGRlY29kZWRcbiAgICAgICAgICB0b2tlbi5tYXJrdXAgID0gbWF0Y2hbMF1cbiAgICAgICAgICB0b2tlbi5pbmZvICAgID0gJ2VudGl0eSdcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5wb3MgKz0gbWF0Y2hbMF0ubGVuZ3RoXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG4iLCIvLyBGb3IgZWFjaCBvcGVuaW5nIGVtcGhhc2lzLWxpa2UgbWFya2VyIGZpbmQgYSBtYXRjaGluZyBjbG9zaW5nIG9uZVxuLy9cblxuZnVuY3Rpb24gcHJvY2Vzc0RlbGltaXRlcnMgKGRlbGltaXRlcnMpIHtcbiAgY29uc3Qgb3BlbmVyc0JvdHRvbSA9IHt9XG4gIGNvbnN0IG1heCA9IGRlbGltaXRlcnMubGVuZ3RoXG5cbiAgaWYgKCFtYXgpIHJldHVyblxuXG4gIC8vIGhlYWRlcklkeCBpcyB0aGUgZmlyc3QgZGVsaW1pdGVyIG9mIHRoZSBjdXJyZW50ICh3aGVyZSBjbG9zZXIgaXMpIGRlbGltaXRlciBydW5cbiAgbGV0IGhlYWRlcklkeCA9IDBcbiAgbGV0IGxhc3RUb2tlbklkeCA9IC0yIC8vIG5lZWRzIGFueSB2YWx1ZSBsb3dlciB0aGFuIC0xXG4gIGNvbnN0IGp1bXBzID0gW11cblxuICBmb3IgKGxldCBjbG9zZXJJZHggPSAwOyBjbG9zZXJJZHggPCBtYXg7IGNsb3NlcklkeCsrKSB7XG4gICAgY29uc3QgY2xvc2VyID0gZGVsaW1pdGVyc1tjbG9zZXJJZHhdXG5cbiAgICBqdW1wcy5wdXNoKDApXG5cbiAgICAvLyBtYXJrZXJzIGJlbG9uZyB0byBzYW1lIGRlbGltaXRlciBydW4gaWY6XG4gICAgLy8gIC0gdGhleSBoYXZlIGFkamFjZW50IHRva2Vuc1xuICAgIC8vICAtIEFORCBtYXJrZXJzIGFyZSB0aGUgc2FtZVxuICAgIC8vXG4gICAgaWYgKGRlbGltaXRlcnNbaGVhZGVySWR4XS5tYXJrZXIgIT09IGNsb3Nlci5tYXJrZXIgfHwgbGFzdFRva2VuSWR4ICE9PSBjbG9zZXIudG9rZW4gLSAxKSB7XG4gICAgICBoZWFkZXJJZHggPSBjbG9zZXJJZHhcbiAgICB9XG5cbiAgICBsYXN0VG9rZW5JZHggPSBjbG9zZXIudG9rZW5cblxuICAgIC8vIExlbmd0aCBpcyBvbmx5IHVzZWQgZm9yIGVtcGhhc2lzLXNwZWNpZmljIFwicnVsZSBvZiAzXCIsXG4gICAgLy8gaWYgaXQncyBub3QgZGVmaW5lZCAoaW4gc3RyaWtldGhyb3VnaCBvciAzcmQgcGFydHkgcGx1Z2lucyksXG4gICAgLy8gd2UgY2FuIGRlZmF1bHQgaXQgdG8gMCB0byBkaXNhYmxlIHRob3NlIGNoZWNrcy5cbiAgICAvL1xuICAgIGNsb3Nlci5sZW5ndGggPSBjbG9zZXIubGVuZ3RoIHx8IDBcblxuICAgIGlmICghY2xvc2VyLmNsb3NlKSBjb250aW51ZVxuXG4gICAgLy8gUHJldmlvdXNseSBjYWxjdWxhdGVkIGxvd2VyIGJvdW5kcyAocHJldmlvdXMgZmFpbHMpXG4gICAgLy8gZm9yIGVhY2ggbWFya2VyLCBlYWNoIGRlbGltaXRlciBsZW5ndGggbW9kdWxvIDMsXG4gICAgLy8gYW5kIGZvciB3aGV0aGVyIHRoaXMgY2xvc2VyIGNhbiBiZSBhbiBvcGVuZXI7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2NvbW1vbm1hcmsvY21hcmsvY29tbWl0LzM0MjUwZTEyY2NlYmRjNjM3MmI4YjQ5YzQ0ZmFiNTdjNzI0NDM0NjBcbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovXG4gICAgaWYgKCFvcGVuZXJzQm90dG9tLmhhc093blByb3BlcnR5KGNsb3Nlci5tYXJrZXIpKSB7XG4gICAgICBvcGVuZXJzQm90dG9tW2Nsb3Nlci5tYXJrZXJdID0gWy0xLCAtMSwgLTEsIC0xLCAtMSwgLTFdXG4gICAgfVxuXG4gICAgY29uc3QgbWluT3BlbmVySWR4ID0gb3BlbmVyc0JvdHRvbVtjbG9zZXIubWFya2VyXVsoY2xvc2VyLm9wZW4gPyAzIDogMCkgKyAoY2xvc2VyLmxlbmd0aCAlIDMpXVxuXG4gICAgbGV0IG9wZW5lcklkeCA9IGhlYWRlcklkeCAtIGp1bXBzW2hlYWRlcklkeF0gLSAxXG5cbiAgICBsZXQgbmV3TWluT3BlbmVySWR4ID0gb3BlbmVySWR4XG5cbiAgICBmb3IgKDsgb3BlbmVySWR4ID4gbWluT3BlbmVySWR4OyBvcGVuZXJJZHggLT0ganVtcHNbb3BlbmVySWR4XSArIDEpIHtcbiAgICAgIGNvbnN0IG9wZW5lciA9IGRlbGltaXRlcnNbb3BlbmVySWR4XVxuXG4gICAgICBpZiAob3BlbmVyLm1hcmtlciAhPT0gY2xvc2VyLm1hcmtlcikgY29udGludWVcblxuICAgICAgaWYgKG9wZW5lci5vcGVuICYmIG9wZW5lci5lbmQgPCAwKSB7XG4gICAgICAgIGxldCBpc09kZE1hdGNoID0gZmFsc2VcblxuICAgICAgICAvLyBmcm9tIHNwZWM6XG4gICAgICAgIC8vXG4gICAgICAgIC8vIElmIG9uZSBvZiB0aGUgZGVsaW1pdGVycyBjYW4gYm90aCBvcGVuIGFuZCBjbG9zZSBlbXBoYXNpcywgdGhlbiB0aGVcbiAgICAgICAgLy8gc3VtIG9mIHRoZSBsZW5ndGhzIG9mIHRoZSBkZWxpbWl0ZXIgcnVucyBjb250YWluaW5nIHRoZSBvcGVuaW5nIGFuZFxuICAgICAgICAvLyBjbG9zaW5nIGRlbGltaXRlcnMgbXVzdCBub3QgYmUgYSBtdWx0aXBsZSBvZiAzIHVubGVzcyBib3RoIGxlbmd0aHNcbiAgICAgICAgLy8gYXJlIG11bHRpcGxlcyBvZiAzLlxuICAgICAgICAvL1xuICAgICAgICBpZiAob3BlbmVyLmNsb3NlIHx8IGNsb3Nlci5vcGVuKSB7XG4gICAgICAgICAgaWYgKChvcGVuZXIubGVuZ3RoICsgY2xvc2VyLmxlbmd0aCkgJSAzID09PSAwKSB7XG4gICAgICAgICAgICBpZiAob3BlbmVyLmxlbmd0aCAlIDMgIT09IDAgfHwgY2xvc2VyLmxlbmd0aCAlIDMgIT09IDApIHtcbiAgICAgICAgICAgICAgaXNPZGRNYXRjaCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzT2RkTWF0Y2gpIHtcbiAgICAgICAgICAvLyBJZiBwcmV2aW91cyBkZWxpbWl0ZXIgY2Fubm90IGJlIGFuIG9wZW5lciwgd2UgY2FuIHNhZmVseSBza2lwXG4gICAgICAgICAgLy8gdGhlIGVudGlyZSBzZXF1ZW5jZSBpbiBmdXR1cmUgY2hlY2tzLiBUaGlzIGlzIHJlcXVpcmVkIHRvIG1ha2VcbiAgICAgICAgICAvLyBzdXJlIGFsZ29yaXRobSBoYXMgbGluZWFyIGNvbXBsZXhpdHkgKHNlZSAqXypfKl8qXypfLi4uIGNhc2UpLlxuICAgICAgICAgIC8vXG4gICAgICAgICAgY29uc3QgbGFzdEp1bXAgPSBvcGVuZXJJZHggPiAwICYmICFkZWxpbWl0ZXJzW29wZW5lcklkeCAtIDFdLm9wZW5cbiAgICAgICAgICAgID8ganVtcHNbb3BlbmVySWR4IC0gMV0gKyAxXG4gICAgICAgICAgICA6IDBcblxuICAgICAgICAgIGp1bXBzW2Nsb3NlcklkeF0gPSBjbG9zZXJJZHggLSBvcGVuZXJJZHggKyBsYXN0SnVtcFxuICAgICAgICAgIGp1bXBzW29wZW5lcklkeF0gPSBsYXN0SnVtcFxuXG4gICAgICAgICAgY2xvc2VyLm9wZW4gID0gZmFsc2VcbiAgICAgICAgICBvcGVuZXIuZW5kICAgPSBjbG9zZXJJZHhcbiAgICAgICAgICBvcGVuZXIuY2xvc2UgPSBmYWxzZVxuICAgICAgICAgIG5ld01pbk9wZW5lcklkeCA9IC0xXG4gICAgICAgICAgLy8gdHJlYXQgbmV4dCB0b2tlbiBhcyBzdGFydCBvZiBydW4sXG4gICAgICAgICAgLy8gaXQgb3B0aW1pemVzIHNraXBzIGluICoqPC4uLj4qKmEqKjwuLi4+KiogcGF0aG9sb2dpY2FsIGNhc2VcbiAgICAgICAgICBsYXN0VG9rZW5JZHggPSAtMlxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TWluT3BlbmVySWR4ICE9PSAtMSkge1xuICAgICAgLy8gSWYgbWF0Y2ggZm9yIHRoaXMgZGVsaW1pdGVyIHJ1biBmYWlsZWQsIHdlIHdhbnQgdG8gc2V0IGxvd2VyIGJvdW5kIGZvclxuICAgICAgLy8gZnV0dXJlIGxvb2t1cHMuIFRoaXMgaXMgcmVxdWlyZWQgdG8gbWFrZSBzdXJlIGFsZ29yaXRobSBoYXMgbGluZWFyXG4gICAgICAvLyBjb21wbGV4aXR5LlxuICAgICAgLy9cbiAgICAgIC8vIFNlZSBkZXRhaWxzIGhlcmU6XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vY29tbW9ubWFyay9jbWFyay9pc3N1ZXMvMTc4I2lzc3VlY29tbWVudC0yNzA0MTc0NDJcbiAgICAgIC8vXG4gICAgICBvcGVuZXJzQm90dG9tW2Nsb3Nlci5tYXJrZXJdWyhjbG9zZXIub3BlbiA/IDMgOiAwKSArICgoY2xvc2VyLmxlbmd0aCB8fCAwKSAlIDMpXSA9IG5ld01pbk9wZW5lcklkeFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaW5rX3BhaXJzIChzdGF0ZSkge1xuICBjb25zdCB0b2tlbnNfbWV0YSA9IHN0YXRlLnRva2Vuc19tZXRhXG4gIGNvbnN0IG1heCA9IHN0YXRlLnRva2Vuc19tZXRhLmxlbmd0aFxuXG4gIHByb2Nlc3NEZWxpbWl0ZXJzKHN0YXRlLmRlbGltaXRlcnMpXG5cbiAgZm9yIChsZXQgY3VyciA9IDA7IGN1cnIgPCBtYXg7IGN1cnIrKykge1xuICAgIGlmICh0b2tlbnNfbWV0YVtjdXJyXSAmJiB0b2tlbnNfbWV0YVtjdXJyXS5kZWxpbWl0ZXJzKSB7XG4gICAgICBwcm9jZXNzRGVsaW1pdGVycyh0b2tlbnNfbWV0YVtjdXJyXS5kZWxpbWl0ZXJzKVxuICAgIH1cbiAgfVxufVxuIiwiLy8gQ2xlYW4gdXAgdG9rZW5zIGFmdGVyIGVtcGhhc2lzIGFuZCBzdHJpa2V0aHJvdWdoIHBvc3Rwcm9jZXNzaW5nOlxuLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2RlcyBpbnRvIG9uZSBhbmQgcmUtY2FsY3VsYXRlIGFsbCB0b2tlbiBsZXZlbHNcbi8vXG4vLyBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGluaXRpYWxseSBlbXBoYXNpcyBkZWxpbWl0ZXIgbWFya2VycyAoKiwgXywgfilcbi8vIGFyZSB0cmVhdGVkIGFzIHRoZWlyIG93biBzZXBhcmF0ZSB0ZXh0IHRva2Vucy4gVGhlbiBlbXBoYXNpcyBydWxlIGVpdGhlclxuLy8gbGVhdmVzIHRoZW0gYXMgdGV4dCAobmVlZGVkIHRvIG1lcmdlIHdpdGggYWRqYWNlbnQgdGV4dCkgb3IgdHVybnMgdGhlbVxuLy8gaW50byBvcGVuaW5nL2Nsb3NpbmcgdGFncyAod2hpY2ggbWVzc2VzIHVwIGxldmVscyBpbnNpZGUpLlxuLy9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZnJhZ21lbnRzX2pvaW4gKHN0YXRlKSB7XG4gIGxldCBjdXJyLCBsYXN0XG4gIGxldCBsZXZlbCA9IDBcbiAgY29uc3QgdG9rZW5zID0gc3RhdGUudG9rZW5zXG4gIGNvbnN0IG1heCA9IHN0YXRlLnRva2Vucy5sZW5ndGhcblxuICBmb3IgKGN1cnIgPSBsYXN0ID0gMDsgY3VyciA8IG1heDsgY3VycisrKSB7XG4gICAgLy8gcmUtY2FsY3VsYXRlIGxldmVscyBhZnRlciBlbXBoYXNpcy9zdHJpa2V0aHJvdWdoIHR1cm5zIHNvbWUgdGV4dCBub2Rlc1xuICAgIC8vIGludG8gb3BlbmluZy9jbG9zaW5nIHRhZ3NcbiAgICBpZiAodG9rZW5zW2N1cnJdLm5lc3RpbmcgPCAwKSBsZXZlbC0tIC8vIGNsb3NpbmcgdGFnXG4gICAgdG9rZW5zW2N1cnJdLmxldmVsID0gbGV2ZWxcbiAgICBpZiAodG9rZW5zW2N1cnJdLm5lc3RpbmcgPiAwKSBsZXZlbCsrIC8vIG9wZW5pbmcgdGFnXG5cbiAgICBpZiAodG9rZW5zW2N1cnJdLnR5cGUgPT09ICd0ZXh0JyAmJlxuICAgICAgICBjdXJyICsgMSA8IG1heCAmJlxuICAgICAgICB0b2tlbnNbY3VyciArIDFdLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgLy8gY29sbGFwc2UgdHdvIGFkamFjZW50IHRleHQgbm9kZXNcbiAgICAgIHRva2Vuc1tjdXJyICsgMV0uY29udGVudCA9IHRva2Vuc1tjdXJyXS5jb250ZW50ICsgdG9rZW5zW2N1cnIgKyAxXS5jb250ZW50XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXJyICE9PSBsYXN0KSB7IHRva2Vuc1tsYXN0XSA9IHRva2Vuc1tjdXJyXSB9XG5cbiAgICAgIGxhc3QrK1xuICAgIH1cbiAgfVxuXG4gIGlmIChjdXJyICE9PSBsYXN0KSB7XG4gICAgdG9rZW5zLmxlbmd0aCA9IGxhc3RcbiAgfVxufVxuIiwiLyoqIGludGVybmFsXG4gKiBjbGFzcyBQYXJzZXJJbmxpbmVcbiAqXG4gKiBUb2tlbml6ZXMgcGFyYWdyYXBoIGNvbnRlbnQuXG4gKiovXG5cbmltcG9ydCBSdWxlciBmcm9tICcuL3J1bGVyLm1qcydcbmltcG9ydCBTdGF0ZUlubGluZSBmcm9tICcuL3J1bGVzX2lubGluZS9zdGF0ZV9pbmxpbmUubWpzJ1xuXG5pbXBvcnQgcl90ZXh0IGZyb20gJy4vcnVsZXNfaW5saW5lL3RleHQubWpzJ1xuaW1wb3J0IHJfbGlua2lmeSBmcm9tICcuL3J1bGVzX2lubGluZS9saW5raWZ5Lm1qcydcbmltcG9ydCByX25ld2xpbmUgZnJvbSAnLi9ydWxlc19pbmxpbmUvbmV3bGluZS5tanMnXG5pbXBvcnQgcl9lc2NhcGUgZnJvbSAnLi9ydWxlc19pbmxpbmUvZXNjYXBlLm1qcydcbmltcG9ydCByX2JhY2t0aWNrcyBmcm9tICcuL3J1bGVzX2lubGluZS9iYWNrdGlja3MubWpzJ1xuaW1wb3J0IHJfc3RyaWtldGhyb3VnaCBmcm9tICcuL3J1bGVzX2lubGluZS9zdHJpa2V0aHJvdWdoLm1qcydcbmltcG9ydCByX2VtcGhhc2lzIGZyb20gJy4vcnVsZXNfaW5saW5lL2VtcGhhc2lzLm1qcydcbmltcG9ydCByX2xpbmsgZnJvbSAnLi9ydWxlc19pbmxpbmUvbGluay5tanMnXG5pbXBvcnQgcl9pbWFnZSBmcm9tICcuL3J1bGVzX2lubGluZS9pbWFnZS5tanMnXG5pbXBvcnQgcl9hdXRvbGluayBmcm9tICcuL3J1bGVzX2lubGluZS9hdXRvbGluay5tanMnXG5pbXBvcnQgcl9odG1sX2lubGluZSBmcm9tICcuL3J1bGVzX2lubGluZS9odG1sX2lubGluZS5tanMnXG5pbXBvcnQgcl9lbnRpdHkgZnJvbSAnLi9ydWxlc19pbmxpbmUvZW50aXR5Lm1qcydcblxuaW1wb3J0IHJfYmFsYW5jZV9wYWlycyBmcm9tICcuL3J1bGVzX2lubGluZS9iYWxhbmNlX3BhaXJzLm1qcydcbmltcG9ydCByX2ZyYWdtZW50c19qb2luIGZyb20gJy4vcnVsZXNfaW5saW5lL2ZyYWdtZW50c19qb2luLm1qcydcblxuLy8gUGFyc2VyIHJ1bGVzXG5cbmNvbnN0IF9ydWxlcyA9IFtcbiAgWyd0ZXh0JywgICAgICAgICAgICByX3RleHRdLFxuICBbJ2xpbmtpZnknLCAgICAgICAgIHJfbGlua2lmeV0sXG4gIFsnbmV3bGluZScsICAgICAgICAgcl9uZXdsaW5lXSxcbiAgWydlc2NhcGUnLCAgICAgICAgICByX2VzY2FwZV0sXG4gIFsnYmFja3RpY2tzJywgICAgICAgcl9iYWNrdGlja3NdLFxuICBbJ3N0cmlrZXRocm91Z2gnLCAgIHJfc3RyaWtldGhyb3VnaC50b2tlbml6ZV0sXG4gIFsnZW1waGFzaXMnLCAgICAgICAgcl9lbXBoYXNpcy50b2tlbml6ZV0sXG4gIFsnbGluaycsICAgICAgICAgICAgcl9saW5rXSxcbiAgWydpbWFnZScsICAgICAgICAgICByX2ltYWdlXSxcbiAgWydhdXRvbGluaycsICAgICAgICByX2F1dG9saW5rXSxcbiAgWydodG1sX2lubGluZScsICAgICByX2h0bWxfaW5saW5lXSxcbiAgWydlbnRpdHknLCAgICAgICAgICByX2VudGl0eV1cbl1cblxuLy8gYHJ1bGUyYCBydWxlc2V0IHdhcyBjcmVhdGVkIHNwZWNpZmljYWxseSBmb3IgZW1waGFzaXMvc3RyaWtldGhyb3VnaFxuLy8gcG9zdC1wcm9jZXNzaW5nIGFuZCBtYXkgYmUgY2hhbmdlZCBpbiB0aGUgZnV0dXJlLlxuLy9cbi8vIERvbid0IHVzZSB0aGlzIGZvciBhbnl0aGluZyBleGNlcHQgcGFpcnMgKHBsdWdpbnMgd29ya2luZyB3aXRoIGBiYWxhbmNlX3BhaXJzYCkuXG4vL1xuY29uc3QgX3J1bGVzMiA9IFtcbiAgWydiYWxhbmNlX3BhaXJzJywgICByX2JhbGFuY2VfcGFpcnNdLFxuICBbJ3N0cmlrZXRocm91Z2gnLCAgIHJfc3RyaWtldGhyb3VnaC5wb3N0UHJvY2Vzc10sXG4gIFsnZW1waGFzaXMnLCAgICAgICAgcl9lbXBoYXNpcy5wb3N0UHJvY2Vzc10sXG4gIC8vIHJ1bGVzIGZvciBwYWlycyBzZXBhcmF0ZSAnKionIGludG8gaXRzIG93biB0ZXh0IHRva2Vucywgd2hpY2ggbWF5IGJlIGxlZnQgdW51c2VkLFxuICAvLyBydWxlIGJlbG93IG1lcmdlcyB1bnVzZWQgc2VnbWVudHMgYmFjayB3aXRoIHRoZSByZXN0IG9mIHRoZSB0ZXh0XG4gIFsnZnJhZ21lbnRzX2pvaW4nLCAgcl9mcmFnbWVudHNfam9pbl1cbl1cblxuLyoqXG4gKiBuZXcgUGFyc2VySW5saW5lKClcbiAqKi9cbmZ1bmN0aW9uIFBhcnNlcklubGluZSAoKSB7XG4gIC8qKlxuICAgKiBQYXJzZXJJbmxpbmUjcnVsZXIgLT4gUnVsZXJcbiAgICpcbiAgICogW1tSdWxlcl1dIGluc3RhbmNlLiBLZWVwIGNvbmZpZ3VyYXRpb24gb2YgaW5saW5lIHJ1bGVzLlxuICAgKiovXG4gIHRoaXMucnVsZXIgPSBuZXcgUnVsZXIoKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgX3J1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5ydWxlci5wdXNoKF9ydWxlc1tpXVswXSwgX3J1bGVzW2ldWzFdKVxuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcklubGluZSNydWxlcjIgLT4gUnVsZXJcbiAgICpcbiAgICogW1tSdWxlcl1dIGluc3RhbmNlLiBTZWNvbmQgcnVsZXIgdXNlZCBmb3IgcG9zdC1wcm9jZXNzaW5nXG4gICAqIChlLmcuIGluIGVtcGhhc2lzLWxpa2UgcnVsZXMpLlxuICAgKiovXG4gIHRoaXMucnVsZXIyID0gbmV3IFJ1bGVyKClcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IF9ydWxlczIubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLnJ1bGVyMi5wdXNoKF9ydWxlczJbaV1bMF0sIF9ydWxlczJbaV1bMV0pXG4gIH1cbn1cblxuLy8gU2tpcCBzaW5nbGUgdG9rZW4gYnkgcnVubmluZyBhbGwgcnVsZXMgaW4gdmFsaWRhdGlvbiBtb2RlO1xuLy8gcmV0dXJucyBgdHJ1ZWAgaWYgYW55IHJ1bGUgcmVwb3J0ZWQgc3VjY2Vzc1xuLy9cblBhcnNlcklubGluZS5wcm90b3R5cGUuc2tpcFRva2VuID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIGNvbnN0IHBvcyA9IHN0YXRlLnBvc1xuICBjb25zdCBydWxlcyA9IHRoaXMucnVsZXIuZ2V0UnVsZXMoJycpXG4gIGNvbnN0IGxlbiA9IHJ1bGVzLmxlbmd0aFxuICBjb25zdCBtYXhOZXN0aW5nID0gc3RhdGUubWQub3B0aW9ucy5tYXhOZXN0aW5nXG4gIGNvbnN0IGNhY2hlID0gc3RhdGUuY2FjaGVcblxuICBpZiAodHlwZW9mIGNhY2hlW3Bvc10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RhdGUucG9zID0gY2FjaGVbcG9zXVxuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IG9rID0gZmFsc2VcblxuICBpZiAoc3RhdGUubGV2ZWwgPCBtYXhOZXN0aW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgLy8gSW5jcmVtZW50IHN0YXRlLmxldmVsIGFuZCBkZWNyZW1lbnQgaXQgbGF0ZXIgdG8gbGltaXQgcmVjdXJzaW9uLlxuICAgICAgLy8gSXQncyBoYXJtbGVzcyB0byBkbyBoZXJlLCBiZWNhdXNlIG5vIHRva2VucyBhcmUgY3JlYXRlZC4gQnV0IGlkZWFsbHksXG4gICAgICAvLyB3ZSdkIG5lZWQgYSBzZXBhcmF0ZSBwcml2YXRlIHN0YXRlIHZhcmlhYmxlIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAvL1xuICAgICAgc3RhdGUubGV2ZWwrK1xuICAgICAgb2sgPSBydWxlc1tpXShzdGF0ZSwgdHJ1ZSlcbiAgICAgIHN0YXRlLmxldmVsLS1cblxuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIGlmIChwb3MgPj0gc3RhdGUucG9zKSB7IHRocm93IG5ldyBFcnJvcihcImlubGluZSBydWxlIGRpZG4ndCBpbmNyZW1lbnQgc3RhdGUucG9zXCIpIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gVG9vIG11Y2ggbmVzdGluZywganVzdCBza2lwIHVudGlsIHRoZSBlbmQgb2YgdGhlIHBhcmFncmFwaC5cbiAgICAvL1xuICAgIC8vIE5PVEU6IHRoaXMgd2lsbCBjYXVzZSBsaW5rcyB0byBiZWhhdmUgaW5jb3JyZWN0bHkgaW4gdGhlIGZvbGxvd2luZyBjYXNlLFxuICAgIC8vICAgICAgIHdoZW4gYW4gYW1vdW50IG9mIGBbYCBpcyBleGFjdGx5IGVxdWFsIHRvIGBtYXhOZXN0aW5nICsgMWA6XG4gICAgLy9cbiAgICAvLyAgICAgICBbW1tbW1tbW1tbW1tbW1tbW1tbW1tmb29dKClcbiAgICAvL1xuICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIHdvcmthcm91bmQgd2hlbiBDTSBzdGFuZGFyZCB3aWxsIGFsbG93IG5lc3RlZCBsaW5rc1xuICAgIC8vICAgICAgICh3ZSBjYW4gcmVwbGFjZSBpdCBieSBwcmV2ZW50aW5nIGxpbmtzIGZyb20gYmVpbmcgcGFyc2VkIGluXG4gICAgLy8gICAgICAgdmFsaWRhdGlvbiBtb2RlKVxuICAgIC8vXG4gICAgc3RhdGUucG9zID0gc3RhdGUucG9zTWF4XG4gIH1cblxuICBpZiAoIW9rKSB7IHN0YXRlLnBvcysrIH1cbiAgY2FjaGVbcG9zXSA9IHN0YXRlLnBvc1xufVxuXG4vLyBHZW5lcmF0ZSB0b2tlbnMgZm9yIGlucHV0IHJhbmdlXG4vL1xuUGFyc2VySW5saW5lLnByb3RvdHlwZS50b2tlbml6ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICBjb25zdCBydWxlcyA9IHRoaXMucnVsZXIuZ2V0UnVsZXMoJycpXG4gIGNvbnN0IGxlbiA9IHJ1bGVzLmxlbmd0aFxuICBjb25zdCBlbmQgPSBzdGF0ZS5wb3NNYXhcbiAgY29uc3QgbWF4TmVzdGluZyA9IHN0YXRlLm1kLm9wdGlvbnMubWF4TmVzdGluZ1xuXG4gIHdoaWxlIChzdGF0ZS5wb3MgPCBlbmQpIHtcbiAgICAvLyBUcnkgYWxsIHBvc3NpYmxlIHJ1bGVzLlxuICAgIC8vIE9uIHN1Y2Nlc3MsIHJ1bGUgc2hvdWxkOlxuICAgIC8vXG4gICAgLy8gLSB1cGRhdGUgYHN0YXRlLnBvc2BcbiAgICAvLyAtIHVwZGF0ZSBgc3RhdGUudG9rZW5zYFxuICAgIC8vIC0gcmV0dXJuIHRydWVcbiAgICBjb25zdCBwcmV2UG9zID0gc3RhdGUucG9zXG4gICAgbGV0IG9rID0gZmFsc2VcblxuICAgIGlmIChzdGF0ZS5sZXZlbCA8IG1heE5lc3RpbmcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgb2sgPSBydWxlc1tpXShzdGF0ZSwgZmFsc2UpXG4gICAgICAgIGlmIChvaykge1xuICAgICAgICAgIGlmIChwcmV2UG9zID49IHN0YXRlLnBvcykgeyB0aHJvdyBuZXcgRXJyb3IoXCJpbmxpbmUgcnVsZSBkaWRuJ3QgaW5jcmVtZW50IHN0YXRlLnBvc1wiKSB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvaykge1xuICAgICAgaWYgKHN0YXRlLnBvcyA+PSBlbmQpIHsgYnJlYWsgfVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBzdGF0ZS5wZW5kaW5nICs9IHN0YXRlLnNyY1tzdGF0ZS5wb3MrK11cbiAgfVxuXG4gIGlmIChzdGF0ZS5wZW5kaW5nKSB7XG4gICAgc3RhdGUucHVzaFBlbmRpbmcoKVxuICB9XG59XG5cbi8qKlxuICogUGFyc2VySW5saW5lLnBhcnNlKHN0ciwgbWQsIGVudiwgb3V0VG9rZW5zKVxuICpcbiAqIFByb2Nlc3MgaW5wdXQgc3RyaW5nIGFuZCBwdXNoIGlubGluZSB0b2tlbnMgaW50byBgb3V0VG9rZW5zYFxuICoqL1xuUGFyc2VySW5saW5lLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIChzdHIsIG1kLCBlbnYsIG91dFRva2Vucykge1xuICBjb25zdCBzdGF0ZSA9IG5ldyB0aGlzLlN0YXRlKHN0ciwgbWQsIGVudiwgb3V0VG9rZW5zKVxuXG4gIHRoaXMudG9rZW5pemUoc3RhdGUpXG5cbiAgY29uc3QgcnVsZXMgPSB0aGlzLnJ1bGVyMi5nZXRSdWxlcygnJylcbiAgY29uc3QgbGVuID0gcnVsZXMubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHJ1bGVzW2ldKHN0YXRlKVxuICB9XG59XG5cblBhcnNlcklubGluZS5wcm90b3R5cGUuU3RhdGUgPSBTdGF0ZUlubGluZVxuXG5leHBvcnQgZGVmYXVsdCBQYXJzZXJJbmxpbmVcbiIsImltcG9ydCB7IEFueSwgQ2MsIFosIFAgfSBmcm9tICd1Yy5taWNybydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG9wdHMpIHtcbiAgY29uc3QgcmUgPSB7fVxuICBvcHRzID0gb3B0cyB8fCB7fVxuXG4gIHJlLnNyY19BbnkgPSBBbnkuc291cmNlXG4gIHJlLnNyY19DYyA9IENjLnNvdXJjZVxuICByZS5zcmNfWiA9IFouc291cmNlXG4gIHJlLnNyY19QID0gUC5zb3VyY2VcblxuICAvLyBcXHB7XFxaXFxQXFxDY1xcQ0Z9ICh3aGl0ZSBzcGFjZXMgKyBjb250cm9sICsgZm9ybWF0ICsgcHVuY3R1YXRpb24pXG4gIHJlLnNyY19aUENjID0gW3JlLnNyY19aLCByZS5zcmNfUCwgcmUuc3JjX0NjXS5qb2luKCd8JylcblxuICAvLyBcXHB7XFxaXFxDY30gKHdoaXRlIHNwYWNlcyArIGNvbnRyb2wpXG4gIHJlLnNyY19aQ2MgPSBbcmUuc3JjX1osIHJlLnNyY19DY10uam9pbignfCcpXG5cbiAgLy8gRXhwZXJpbWVudGFsLiBMaXN0IG9mIGNoYXJzLCBjb21wbGV0ZWx5IHByb2hpYml0ZWQgaW4gbGlua3NcbiAgLy8gYmVjYXVzZSBjYW4gc2VwYXJhdGUgaXQgZnJvbSBvdGhlciBwYXJ0IG9mIHRleHRcbiAgY29uc3QgdGV4dF9zZXBhcmF0b3JzID0gJ1s+PFxcdWZmNWNdJ1xuXG4gIC8vIEFsbCBwb3NzaWJsZSB3b3JkIGNoYXJhY3RlcnMgKGV2ZXJ5dGhpbmcgd2l0aG91dCBwdW5jdHVhdGlvbiwgc3BhY2VzICYgY29udHJvbHMpXG4gIC8vIERlZmluZWQgdmlhIHB1bmN0dWF0aW9uICYgc3BhY2VzIHRvIHNhdmUgc3BhY2VcbiAgLy8gU2hvdWxkIGJlIHNvbWV0aGluZyBsaWtlIFxccHtcXExcXE5cXFNcXE19IChcXHcgYnV0IHdpdGhvdXQgYF9gKVxuICByZS5zcmNfcHNldWRvX2xldHRlciA9ICcoPzooPyEnICsgdGV4dF9zZXBhcmF0b3JzICsgJ3wnICsgcmUuc3JjX1pQQ2MgKyAnKScgKyByZS5zcmNfQW55ICsgJyknXG4gIC8vIFRoZSBzYW1lIGFzIGFib3RoZSBidXQgd2l0aG91dCBbMC05XVxuICAvLyB2YXIgc3JjX3BzZXVkb19sZXR0ZXJfbm9uX2QgPSAnKD86KD8hWzAtOV18JyArIHNyY19aUENjICsgJyknICsgc3JjX0FueSArICcpJztcblxuICByZS5zcmNfaXA0ID1cblxuICAgICcoPzooMjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcXFwuKXszfSgyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pJ1xuXG4gIC8vIFByb2hpYml0IGFueSBvZiBcIkAvW10oKVwiIGluIHVzZXIvcGFzcyB0byBhdm9pZCB3cm9uZyBkb21haW4gZmV0Y2guXG4gIHJlLnNyY19hdXRoID0gJyg/Oig/Oig/IScgKyByZS5zcmNfWkNjICsgJ3xbQC9cXFxcW1xcXFxdKCldKS4pK0ApPydcblxuICByZS5zcmNfcG9ydCA9XG5cbiAgICAnKD86Oig/OjYoPzpbMC00XVxcXFxkezN9fDUoPzpbMC00XVxcXFxkezJ9fDUoPzpbMC0yXVxcXFxkfDNbMC01XSkpKXxbMS01XT9cXFxcZHsxLDR9KSk/J1xuXG4gIHJlLnNyY19ob3N0X3Rlcm1pbmF0b3IgPVxuXG4gICAgJyg/PSR8JyArIHRleHRfc2VwYXJhdG9ycyArICd8JyArIHJlLnNyY19aUENjICsgJyknICtcbiAgICAnKD8hJyArIChvcHRzWyctLS0nXSA/ICctKD8hLS0pfCcgOiAnLXwnKSArICdffDpcXFxcZHxcXFxcLi18XFxcXC4oPyEkfCcgKyByZS5zcmNfWlBDYyArICcpKSdcblxuICByZS5zcmNfcGF0aCA9XG5cbiAgICAnKD86JyArXG4gICAgICAnWy8/I10nICtcbiAgICAgICAgJyg/OicgK1xuICAgICAgICAgICcoPyEnICsgcmUuc3JjX1pDYyArICd8JyArIHRleHRfc2VwYXJhdG9ycyArICd8WygpW1xcXFxde30uLFwiXFwnPyFcXFxcLTtdKS58JyArXG4gICAgICAgICAgJ1xcXFxbKD86KD8hJyArIHJlLnNyY19aQ2MgKyAnfFxcXFxdKS4pKlxcXFxdfCcgK1xuICAgICAgICAgICdcXFxcKCg/Oig/IScgKyByZS5zcmNfWkNjICsgJ3xbKV0pLikqXFxcXCl8JyArXG4gICAgICAgICAgJ1xcXFx7KD86KD8hJyArIHJlLnNyY19aQ2MgKyAnfFt9XSkuKSpcXFxcfXwnICtcbiAgICAgICAgICAnXFxcXFwiKD86KD8hJyArIHJlLnNyY19aQ2MgKyAnfFtcIl0pLikrXFxcXFwifCcgK1xuICAgICAgICAgIFwiXFxcXCcoPzooPyFcIiArIHJlLnNyY19aQ2MgKyBcInxbJ10pLikrXFxcXCd8XCIgK1xuXG4gICAgICAgICAgLy8gYWxsb3cgYEknbV9raW5nYCBpZiBubyBwYWlyIGZvdW5kXG4gICAgICAgICAgXCJcXFxcJyg/PVwiICsgcmUuc3JjX3BzZXVkb19sZXR0ZXIgKyAnfFstXSl8JyArXG5cbiAgICAgICAgICAvLyBnb29nbGUgaGFzIG1hbnkgZG90cyBpbiBcImdvb2dsZSBzZWFyY2hcIiBsaW5rcyAoIzY2LCAjODEpLlxuICAgICAgICAgIC8vIGdpdGh1YiBoYXMgLi4uIGluIGNvbW1pdCByYW5nZSBsaW5rcyxcbiAgICAgICAgICAvLyBSZXN0cmljdCB0b1xuICAgICAgICAgIC8vIC0gZW5nbGlzaFxuICAgICAgICAgIC8vIC0gcGVyY2VudC1lbmNvZGVkXG4gICAgICAgICAgLy8gLSBwYXJ0cyBvZiBmaWxlIHBhdGhcbiAgICAgICAgICAvLyAtIHBhcmFtcyBzZXBhcmF0b3JcbiAgICAgICAgICAvLyB1bnRpbCBtb3JlIGV4YW1wbGVzIGZvdW5kLlxuICAgICAgICAgICdcXFxcLnsyLH1bYS16QS1aMC05JS8mXXwnICtcblxuICAgICAgICAgICdcXFxcLig/IScgKyByZS5zcmNfWkNjICsgJ3xbLl18JCl8JyArXG4gICAgICAgICAgKG9wdHNbJy0tLSddXG4gICAgICAgICAgICA/ICdcXFxcLSg/IS0tKD86W14tXXwkKSkoPzotKil8JyAvLyBgLS0tYCA9PiBsb25nIGRhc2gsIHRlcm1pbmF0ZVxuICAgICAgICAgICAgOiAnXFxcXC0rfCdcbiAgICAgICAgICApICtcbiAgICAgICAgICAvLyBhbGxvdyBgLCwsYCBpbiBwYXRoc1xuICAgICAgICAgICcsKD8hJyArIHJlLnNyY19aQ2MgKyAnfCQpfCcgK1xuXG4gICAgICAgICAgLy8gYWxsb3cgYDtgIGlmIG5vdCBmb2xsb3dlZCBieSBzcGFjZS1saWtlIGNoYXJcbiAgICAgICAgICAnOyg/IScgKyByZS5zcmNfWkNjICsgJ3wkKXwnICtcblxuICAgICAgICAgIC8vIGFsbG93IGAhISFgIGluIHBhdGhzLCBidXQgbm90IGF0IHRoZSBlbmRcbiAgICAgICAgICAnXFxcXCErKD8hJyArIHJlLnNyY19aQ2MgKyAnfFshXXwkKXwnICtcblxuICAgICAgICAgICdcXFxcPyg/IScgKyByZS5zcmNfWkNjICsgJ3xbP118JCknICtcbiAgICAgICAgJykrJyArXG4gICAgICAnfFxcXFwvJyArXG4gICAgJyk/J1xuXG4gIC8vIEFsbG93IGFueXRoaW5nIGluIG1hcmtkb3duIHNwZWMsIGZvcmJpZCBxdW90ZSAoXCIpIGF0IHRoZSBmaXJzdCBwb3NpdGlvblxuICAvLyBiZWNhdXNlIGVtYWlscyBlbmNsb3NlZCBpbiBxdW90ZXMgYXJlIGZhciBtb3JlIGNvbW1vblxuICByZS5zcmNfZW1haWxfbmFtZSA9XG5cbiAgICAnW1xcXFwtOzomPVxcXFwrXFxcXCQsXFxcXC5hLXpBLVowLTlfXVtcXFxcLTs6Jj1cXFxcK1xcXFwkLFxcXFxcIlxcXFwuYS16QS1aMC05X10qJ1xuXG4gIHJlLnNyY194biA9XG5cbiAgICAneG4tLVthLXowLTlcXFxcLV17MSw1OX0nXG5cbiAgLy8gTW9yZSB0byByZWFkIGFib3V0IGRvbWFpbiBuYW1lc1xuICAvLyBodHRwOi8vc2VydmVyZmF1bHQuY29tL3F1ZXN0aW9ucy82MzgyNjAvXG5cbiAgcmUuc3JjX2RvbWFpbl9yb290ID1cblxuICAgIC8vIEFsbG93IGxldHRlcnMgJiBkaWdpdHMgKGh0dHA6Ly90ZXN0MSlcbiAgICAnKD86JyArXG4gICAgICByZS5zcmNfeG4gK1xuICAgICAgJ3wnICtcbiAgICAgIHJlLnNyY19wc2V1ZG9fbGV0dGVyICsgJ3sxLDYzfScgK1xuICAgICcpJ1xuXG4gIHJlLnNyY19kb21haW4gPVxuXG4gICAgJyg/OicgK1xuICAgICAgcmUuc3JjX3huICtcbiAgICAgICd8JyArXG4gICAgICAnKD86JyArIHJlLnNyY19wc2V1ZG9fbGV0dGVyICsgJyknICtcbiAgICAgICd8JyArXG4gICAgICAnKD86JyArIHJlLnNyY19wc2V1ZG9fbGV0dGVyICsgJyg/Oi18JyArIHJlLnNyY19wc2V1ZG9fbGV0dGVyICsgJyl7MCw2MX0nICsgcmUuc3JjX3BzZXVkb19sZXR0ZXIgKyAnKScgK1xuICAgICcpJ1xuXG4gIHJlLnNyY19ob3N0ID1cblxuICAgICcoPzonICtcbiAgICAvLyBEb24ndCBuZWVkIElQIGNoZWNrLCBiZWNhdXNlIGRpZ2l0cyBhcmUgYWxyZWFkeSBhbGxvd2VkIGluIG5vcm1hbCBkb21haW4gbmFtZXNcbiAgICAvLyAgIHNyY19pcDQgK1xuICAgIC8vICd8JyArXG4gICAgICAnKD86KD86KD86JyArIHJlLnNyY19kb21haW4gKyAnKVxcXFwuKSonICsgcmUuc3JjX2RvbWFpbi8qIF9yb290ICovICsgJyknICtcbiAgICAnKSdcblxuICByZS50cGxfaG9zdF9mdXp6eSA9XG5cbiAgICAnKD86JyArXG4gICAgICByZS5zcmNfaXA0ICtcbiAgICAnfCcgK1xuICAgICAgJyg/Oig/Oig/OicgKyByZS5zcmNfZG9tYWluICsgJylcXFxcLikrKD86JVRMRFMlKSknICtcbiAgICAnKSdcblxuICByZS50cGxfaG9zdF9ub19pcF9mdXp6eSA9XG5cbiAgICAnKD86KD86KD86JyArIHJlLnNyY19kb21haW4gKyAnKVxcXFwuKSsoPzolVExEUyUpKSdcblxuICByZS5zcmNfaG9zdF9zdHJpY3QgPVxuXG4gICAgcmUuc3JjX2hvc3QgKyByZS5zcmNfaG9zdF90ZXJtaW5hdG9yXG5cbiAgcmUudHBsX2hvc3RfZnV6enlfc3RyaWN0ID1cblxuICAgIHJlLnRwbF9ob3N0X2Z1enp5ICsgcmUuc3JjX2hvc3RfdGVybWluYXRvclxuXG4gIHJlLnNyY19ob3N0X3BvcnRfc3RyaWN0ID1cblxuICAgIHJlLnNyY19ob3N0ICsgcmUuc3JjX3BvcnQgKyByZS5zcmNfaG9zdF90ZXJtaW5hdG9yXG5cbiAgcmUudHBsX2hvc3RfcG9ydF9mdXp6eV9zdHJpY3QgPVxuXG4gICAgcmUudHBsX2hvc3RfZnV6enkgKyByZS5zcmNfcG9ydCArIHJlLnNyY19ob3N0X3Rlcm1pbmF0b3JcblxuICByZS50cGxfaG9zdF9wb3J0X25vX2lwX2Z1enp5X3N0cmljdCA9XG5cbiAgICByZS50cGxfaG9zdF9ub19pcF9mdXp6eSArIHJlLnNyY19wb3J0ICsgcmUuc3JjX2hvc3RfdGVybWluYXRvclxuXG4gIC8vXG4gIC8vIE1haW4gcnVsZXNcbiAgLy9cblxuICAvLyBSdWRlIHRlc3QgZnV6enkgbGlua3MgYnkgaG9zdCwgZm9yIHF1aWNrIGRlbnlcbiAgcmUudHBsX2hvc3RfZnV6enlfdGVzdCA9XG5cbiAgICAnbG9jYWxob3N0fHd3d1xcXFwufFxcXFwuXFxcXGR7MSwzfVxcXFwufCg/OlxcXFwuKD86JVRMRFMlKSg/OicgKyByZS5zcmNfWlBDYyArICd8PnwkKSknXG5cbiAgcmUudHBsX2VtYWlsX2Z1enp5ID1cblxuICAgICAgJyhefCcgKyB0ZXh0X3NlcGFyYXRvcnMgKyAnfFwifFxcXFwofCcgKyByZS5zcmNfWkNjICsgJyknICtcbiAgICAgICcoJyArIHJlLnNyY19lbWFpbF9uYW1lICsgJ0AnICsgcmUudHBsX2hvc3RfZnV6enlfc3RyaWN0ICsgJyknXG5cbiAgcmUudHBsX2xpbmtfZnV6enkgPVxuICAgICAgLy8gRnV6enkgbGluayBjYW4ndCBiZSBwcmVwZW5kZWQgd2l0aCAuOi9cXC0gYW5kIG5vbiBwdW5jdHVhdGlvbi5cbiAgICAgIC8vIGJ1dCBjYW4gc3RhcnQgd2l0aCA+IChtYXJrZG93biBibG9ja3F1b3RlKVxuICAgICAgJyhefCg/IVsuOi9cXFxcLV9AXSkoPzpbJCs8PT5eYHxcXHVmZjVjXXwnICsgcmUuc3JjX1pQQ2MgKyAnKSknICtcbiAgICAgICcoKD8hWyQrPD0+XmB8XFx1ZmY1Y10pJyArIHJlLnRwbF9ob3N0X3BvcnRfZnV6enlfc3RyaWN0ICsgcmUuc3JjX3BhdGggKyAnKSdcblxuICByZS50cGxfbGlua19ub19pcF9mdXp6eSA9XG4gICAgICAvLyBGdXp6eSBsaW5rIGNhbid0IGJlIHByZXBlbmRlZCB3aXRoIC46L1xcLSBhbmQgbm9uIHB1bmN0dWF0aW9uLlxuICAgICAgLy8gYnV0IGNhbiBzdGFydCB3aXRoID4gKG1hcmtkb3duIGJsb2NrcXVvdGUpXG4gICAgICAnKF58KD8hWy46L1xcXFwtX0BdKSg/OlskKzw9Pl5gfFxcdWZmNWNdfCcgKyByZS5zcmNfWlBDYyArICcpKScgK1xuICAgICAgJygoPyFbJCs8PT5eYHxcXHVmZjVjXSknICsgcmUudHBsX2hvc3RfcG9ydF9ub19pcF9mdXp6eV9zdHJpY3QgKyByZS5zcmNfcGF0aCArICcpJ1xuXG4gIHJldHVybiByZVxufVxuIiwiaW1wb3J0IHJlRmFjdG9yeSBmcm9tICcuL2xpYi9yZS5tanMnXG5cbi8vXG4vLyBIZWxwZXJzXG4vL1xuXG4vLyBNZXJnZSBvYmplY3RzXG4vL1xuZnVuY3Rpb24gYXNzaWduIChvYmogLyogZnJvbTEsIGZyb20yLCBmcm9tMywgLi4uICovKSB7XG4gIGNvbnN0IHNvdXJjZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG5cbiAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICBpZiAoIXNvdXJjZSkgeyByZXR1cm4gfVxuXG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIG9ialtrZXldID0gc291cmNlW2tleV1cbiAgICB9KVxuICB9KVxuXG4gIHJldHVybiBvYmpcbn1cblxuZnVuY3Rpb24gX2NsYXNzIChvYmopIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopIH1cbmZ1bmN0aW9uIGlzU3RyaW5nIChvYmopIHsgcmV0dXJuIF9jbGFzcyhvYmopID09PSAnW29iamVjdCBTdHJpbmddJyB9XG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7IHJldHVybiBfY2xhc3Mob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgfVxuZnVuY3Rpb24gaXNSZWdFeHAgKG9iaikgeyByZXR1cm4gX2NsYXNzKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nIH1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24gKG9iaikgeyByZXR1cm4gX2NsYXNzKG9iaikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScgfVxuXG5mdW5jdGlvbiBlc2NhcGVSRSAoc3RyKSB7IHJldHVybiBzdHIucmVwbGFjZSgvWy4/KiteJFtcXF1cXFxcKCl7fXwtXS9nLCAnXFxcXCQmJykgfVxuXG4vL1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgZnV6enlMaW5rOiB0cnVlLFxuICBmdXp6eUVtYWlsOiB0cnVlLFxuICBmdXp6eUlQOiBmYWxzZVxufVxuXG5mdW5jdGlvbiBpc09wdGlvbnNPYmogKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqIHx8IHt9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgaykge1xuICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cbiAgICByZXR1cm4gYWNjIHx8IGRlZmF1bHRPcHRpb25zLmhhc093blByb3BlcnR5KGspXG4gIH0sIGZhbHNlKVxufVxuXG5jb25zdCBkZWZhdWx0U2NoZW1hcyA9IHtcbiAgJ2h0dHA6Jzoge1xuICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAodGV4dCwgcG9zLCBzZWxmKSB7XG4gICAgICBjb25zdCB0YWlsID0gdGV4dC5zbGljZShwb3MpXG5cbiAgICAgIGlmICghc2VsZi5yZS5odHRwKSB7XG4gICAgICAgIC8vIGNvbXBpbGUgbGF6aWx5LCBiZWNhdXNlIFwiaG9zdFwiLWNvbnRhaW5pbmcgdmFyaWFibGVzIGNhbiBjaGFuZ2Ugb24gdGxkcyB1cGRhdGUuXG4gICAgICAgIHNlbGYucmUuaHR0cCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgJ15cXFxcL1xcXFwvJyArIHNlbGYucmUuc3JjX2F1dGggKyBzZWxmLnJlLnNyY19ob3N0X3BvcnRfc3RyaWN0ICsgc2VsZi5yZS5zcmNfcGF0aCwgJ2knXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGlmIChzZWxmLnJlLmh0dHAudGVzdCh0YWlsKSkge1xuICAgICAgICByZXR1cm4gdGFpbC5tYXRjaChzZWxmLnJlLmh0dHApWzBdLmxlbmd0aFxuICAgICAgfVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH0sXG4gICdodHRwczonOiAnaHR0cDonLFxuICAnZnRwOic6ICdodHRwOicsXG4gICcvLyc6IHtcbiAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKHRleHQsIHBvcywgc2VsZikge1xuICAgICAgY29uc3QgdGFpbCA9IHRleHQuc2xpY2UocG9zKVxuXG4gICAgICBpZiAoIXNlbGYucmUubm9faHR0cCkge1xuICAgICAgLy8gY29tcGlsZSBsYXppbHksIGJlY2F1c2UgXCJob3N0XCItY29udGFpbmluZyB2YXJpYWJsZXMgY2FuIGNoYW5nZSBvbiB0bGRzIHVwZGF0ZS5cbiAgICAgICAgc2VsZi5yZS5ub19odHRwID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAnXicgK1xuICAgICAgICAgIHNlbGYucmUuc3JjX2F1dGggK1xuICAgICAgICAgIC8vIERvbid0IGFsbG93IHNpbmdsZS1sZXZlbCBkb21haW5zLCBiZWNhdXNlIG9mIGZhbHNlIHBvc2l0aXZlcyBsaWtlICcvL3Rlc3QnXG4gICAgICAgICAgLy8gd2l0aCBjb2RlIGNvbW1lbnRzXG4gICAgICAgICAgJyg/OmxvY2FsaG9zdHwoPzooPzonICsgc2VsZi5yZS5zcmNfZG9tYWluICsgJylcXFxcLikrJyArIHNlbGYucmUuc3JjX2RvbWFpbl9yb290ICsgJyknICtcbiAgICAgICAgICBzZWxmLnJlLnNyY19wb3J0ICtcbiAgICAgICAgICBzZWxmLnJlLnNyY19ob3N0X3Rlcm1pbmF0b3IgK1xuICAgICAgICAgIHNlbGYucmUuc3JjX3BhdGgsXG5cbiAgICAgICAgICAnaSdcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5yZS5ub19odHRwLnRlc3QodGFpbCkpIHtcbiAgICAgICAgLy8gc2hvdWxkIG5vdCBiZSBgOi8vYCAmIGAvLy9gLCB0aGF0IHByb3RlY3RzIGZyb20gZXJyb3JzIGluIHByb3RvY29sIG5hbWVcbiAgICAgICAgaWYgKHBvcyA+PSAzICYmIHRleHRbcG9zIC0gM10gPT09ICc6JykgeyByZXR1cm4gMCB9XG4gICAgICAgIGlmIChwb3MgPj0gMyAmJiB0ZXh0W3BvcyAtIDNdID09PSAnLycpIHsgcmV0dXJuIDAgfVxuICAgICAgICByZXR1cm4gdGFpbC5tYXRjaChzZWxmLnJlLm5vX2h0dHApWzBdLmxlbmd0aFxuICAgICAgfVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH0sXG4gICdtYWlsdG86Jzoge1xuICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAodGV4dCwgcG9zLCBzZWxmKSB7XG4gICAgICBjb25zdCB0YWlsID0gdGV4dC5zbGljZShwb3MpXG5cbiAgICAgIGlmICghc2VsZi5yZS5tYWlsdG8pIHtcbiAgICAgICAgc2VsZi5yZS5tYWlsdG8gPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICdeJyArIHNlbGYucmUuc3JjX2VtYWlsX25hbWUgKyAnQCcgKyBzZWxmLnJlLnNyY19ob3N0X3N0cmljdCwgJ2knXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGlmIChzZWxmLnJlLm1haWx0by50ZXN0KHRhaWwpKSB7XG4gICAgICAgIHJldHVybiB0YWlsLm1hdGNoKHNlbGYucmUubWFpbHRvKVswXS5sZW5ndGhcbiAgICAgIH1cbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG59XG5cbi8vIFJFIHBhdHRlcm4gZm9yIDItY2hhcmFjdGVyIHRsZHMgKGF1dG9nZW5lcmF0ZWQgYnkgLi9zdXBwb3J0L3RsZHNfMmNoYXJfZ2VuLmpzKVxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi9cbmNvbnN0IHRsZHNfMmNoX3NyY19yZSA9ICdhW2NkZWZnaWxtbm9xcnN0dXd4el18YlthYmRlZmdoaWptbm9yc3R2d3l6XXxjW2FjZGZnaGlrbG1ub3J1dnd4eXpdfGRbZWprbW96XXxlW2NlZ3JzdHVdfGZbaWprbW9yXXxnW2FiZGVmZ2hpbG1ucHFyc3R1d3ldfGhba21ucnR1XXxpW2RlbG1ub3Fyc3RdfGpbZW1vcF18a1tlZ2hpbW5wcnd5el18bFthYmNpa3JzdHV2eV18bVthY2RlZ2hrbG1ub3BxcnN0dXZ3eHl6XXxuW2FjZWZnaWxvcHJ1el18b218cFthZWZnaGtsbW5yc3R3eV18cWF8cltlb3N1d118c1thYmNkZWdoaWprbG1ub3J0dXZ4eXpdfHRbY2RmZ2hqa2xtbm9ydHZ3el18dVthZ2tzeXpdfHZbYWNlZ2ludV18d1tmc118eVtldF18elthbXddJ1xuXG4vLyBET04nVCB0cnkgdG8gbWFrZSBQUnMgd2l0aCBjaGFuZ2VzLiBFeHRlbmQgVExEcyB3aXRoIExpbmtpZnlJdC50bGRzKCkgaW5zdGVhZFxuY29uc3QgdGxkc19kZWZhdWx0ID0gJ2Jpenxjb218ZWR1fGdvdnxuZXR8b3JnfHByb3x3ZWJ8eHh4fGFlcm98YXNpYXxjb29wfGluZm98bXVzZXVtfG5hbWV8c2hvcHzRgNGEJy5zcGxpdCgnfCcpXG5cbmZ1bmN0aW9uIHJlc2V0U2NhbkNhY2hlIChzZWxmKSB7XG4gIHNlbGYuX19pbmRleF9fID0gLTFcbiAgc2VsZi5fX3RleHRfY2FjaGVfXyA9ICcnXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhbGlkYXRvciAocmUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0ZXh0LCBwb3MpIHtcbiAgICBjb25zdCB0YWlsID0gdGV4dC5zbGljZShwb3MpXG5cbiAgICBpZiAocmUudGVzdCh0YWlsKSkge1xuICAgICAgcmV0dXJuIHRhaWwubWF0Y2gocmUpWzBdLmxlbmd0aFxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vcm1hbGl6ZXIgKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKG1hdGNoLCBzZWxmKSB7XG4gICAgc2VsZi5ub3JtYWxpemUobWF0Y2gpXG4gIH1cbn1cblxuLy8gU2NoZW1hcyBjb21waWxlci4gQnVpbGQgcmVnZXhwcy5cbi8vXG5mdW5jdGlvbiBjb21waWxlIChzZWxmKSB7XG4gIC8vIExvYWQgJiBjbG9uZSBSRSBwYXR0ZXJucy5cbiAgY29uc3QgcmUgPSBzZWxmLnJlID0gcmVGYWN0b3J5KHNlbGYuX19vcHRzX18pXG5cbiAgLy8gRGVmaW5lIGR5bmFtaWMgcGF0dGVybnNcbiAgY29uc3QgdGxkcyA9IHNlbGYuX190bGRzX18uc2xpY2UoKVxuXG4gIHNlbGYub25Db21waWxlKClcblxuICBpZiAoIXNlbGYuX190bGRzX3JlcGxhY2VkX18pIHtcbiAgICB0bGRzLnB1c2godGxkc18yY2hfc3JjX3JlKVxuICB9XG4gIHRsZHMucHVzaChyZS5zcmNfeG4pXG5cbiAgcmUuc3JjX3RsZHMgPSB0bGRzLmpvaW4oJ3wnKVxuXG4gIGZ1bmN0aW9uIHVudHBsICh0cGwpIHsgcmV0dXJuIHRwbC5yZXBsYWNlKCclVExEUyUnLCByZS5zcmNfdGxkcykgfVxuXG4gIHJlLmVtYWlsX2Z1enp5ID0gUmVnRXhwKHVudHBsKHJlLnRwbF9lbWFpbF9mdXp6eSksICdpJylcbiAgcmUubGlua19mdXp6eSA9IFJlZ0V4cCh1bnRwbChyZS50cGxfbGlua19mdXp6eSksICdpJylcbiAgcmUubGlua19ub19pcF9mdXp6eSA9IFJlZ0V4cCh1bnRwbChyZS50cGxfbGlua19ub19pcF9mdXp6eSksICdpJylcbiAgcmUuaG9zdF9mdXp6eV90ZXN0ID0gUmVnRXhwKHVudHBsKHJlLnRwbF9ob3N0X2Z1enp5X3Rlc3QpLCAnaScpXG5cbiAgLy9cbiAgLy8gQ29tcGlsZSBlYWNoIHNjaGVtYVxuICAvL1xuXG4gIGNvbnN0IGFsaWFzZXMgPSBbXVxuXG4gIHNlbGYuX19jb21waWxlZF9fID0ge30gLy8gUmVzZXQgY29tcGlsZWQgZGF0YVxuXG4gIGZ1bmN0aW9uIHNjaGVtYUVycm9yIChuYW1lLCB2YWwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJyhMaW5raWZ5SXQpIEludmFsaWQgc2NoZW1hIFwiJyArIG5hbWUgKyAnXCI6ICcgKyB2YWwpXG4gIH1cblxuICBPYmplY3Qua2V5cyhzZWxmLl9fc2NoZW1hc19fKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgY29uc3QgdmFsID0gc2VsZi5fX3NjaGVtYXNfX1tuYW1lXVxuXG4gICAgLy8gc2tpcCBkaXNhYmxlZCBtZXRob2RzXG4gICAgaWYgKHZhbCA9PT0gbnVsbCkgeyByZXR1cm4gfVxuXG4gICAgY29uc3QgY29tcGlsZWQgPSB7IHZhbGlkYXRlOiBudWxsLCBsaW5rOiBudWxsIH1cblxuICAgIHNlbGYuX19jb21waWxlZF9fW25hbWVdID0gY29tcGlsZWRcblxuICAgIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgICBpZiAoaXNSZWdFeHAodmFsLnZhbGlkYXRlKSkge1xuICAgICAgICBjb21waWxlZC52YWxpZGF0ZSA9IGNyZWF0ZVZhbGlkYXRvcih2YWwudmFsaWRhdGUpXG4gICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odmFsLnZhbGlkYXRlKSkge1xuICAgICAgICBjb21waWxlZC52YWxpZGF0ZSA9IHZhbC52YWxpZGF0ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NoZW1hRXJyb3IobmFtZSwgdmFsKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbih2YWwubm9ybWFsaXplKSkge1xuICAgICAgICBjb21waWxlZC5ub3JtYWxpemUgPSB2YWwubm9ybWFsaXplXG4gICAgICB9IGVsc2UgaWYgKCF2YWwubm9ybWFsaXplKSB7XG4gICAgICAgIGNvbXBpbGVkLm5vcm1hbGl6ZSA9IGNyZWF0ZU5vcm1hbGl6ZXIoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NoZW1hRXJyb3IobmFtZSwgdmFsKVxuICAgICAgfVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNTdHJpbmcodmFsKSkge1xuICAgICAgYWxpYXNlcy5wdXNoKG5hbWUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzY2hlbWFFcnJvcihuYW1lLCB2YWwpXG4gIH0pXG5cbiAgLy9cbiAgLy8gQ29tcGlsZSBwb3N0cG9uZWQgYWxpYXNlc1xuICAvL1xuXG4gIGFsaWFzZXMuZm9yRWFjaChmdW5jdGlvbiAoYWxpYXMpIHtcbiAgICBpZiAoIXNlbGYuX19jb21waWxlZF9fW3NlbGYuX19zY2hlbWFzX19bYWxpYXNdXSkge1xuICAgICAgLy8gU2lsZW50bHkgZmFpbCBvbiBtaXNzZWQgc2NoZW1hcyB0byBhdm9pZCBlcnJvbnMgb24gZGlzYWJsZS5cbiAgICAgIC8vIHNjaGVtYUVycm9yKGFsaWFzLCBzZWxmLl9fc2NoZW1hc19fW2FsaWFzXSk7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzZWxmLl9fY29tcGlsZWRfX1thbGlhc10udmFsaWRhdGUgPVxuICAgICAgc2VsZi5fX2NvbXBpbGVkX19bc2VsZi5fX3NjaGVtYXNfX1thbGlhc11dLnZhbGlkYXRlXG4gICAgc2VsZi5fX2NvbXBpbGVkX19bYWxpYXNdLm5vcm1hbGl6ZSA9XG4gICAgICBzZWxmLl9fY29tcGlsZWRfX1tzZWxmLl9fc2NoZW1hc19fW2FsaWFzXV0ubm9ybWFsaXplXG4gIH0pXG5cbiAgLy9cbiAgLy8gRmFrZSByZWNvcmQgZm9yIGd1ZXNzZWQgbGlua3NcbiAgLy9cbiAgc2VsZi5fX2NvbXBpbGVkX19bJyddID0geyB2YWxpZGF0ZTogbnVsbCwgbm9ybWFsaXplOiBjcmVhdGVOb3JtYWxpemVyKCkgfVxuXG4gIC8vXG4gIC8vIEJ1aWxkIHNjaGVtYSBjb25kaXRpb25cbiAgLy9cbiAgY29uc3Qgc2xpc3QgPSBPYmplY3Qua2V5cyhzZWxmLl9fY29tcGlsZWRfXylcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAvLyBGaWx0ZXIgZGlzYWJsZWQgJiBmYWtlIHNjaGVtYXNcbiAgICAgIHJldHVybiBuYW1lLmxlbmd0aCA+IDAgJiYgc2VsZi5fX2NvbXBpbGVkX19bbmFtZV1cbiAgICB9KVxuICAgIC5tYXAoZXNjYXBlUkUpXG4gICAgLmpvaW4oJ3wnKVxuICAvLyAoPyFfKSBjYXVzZSAxLjV4IHNsb3dkb3duXG4gIHNlbGYucmUuc2NoZW1hX3Rlc3QgPSBSZWdFeHAoJyhefCg/IV8pKD86Wz48XFx1ZmY1Y118JyArIHJlLnNyY19aUENjICsgJykpKCcgKyBzbGlzdCArICcpJywgJ2knKVxuICBzZWxmLnJlLnNjaGVtYV9zZWFyY2ggPSBSZWdFeHAoJyhefCg/IV8pKD86Wz48XFx1ZmY1Y118JyArIHJlLnNyY19aUENjICsgJykpKCcgKyBzbGlzdCArICcpJywgJ2lnJylcbiAgc2VsZi5yZS5zY2hlbWFfYXRfc3RhcnQgPSBSZWdFeHAoJ14nICsgc2VsZi5yZS5zY2hlbWFfc2VhcmNoLnNvdXJjZSwgJ2knKVxuXG4gIHNlbGYucmUucHJldGVzdCA9IFJlZ0V4cChcbiAgICAnKCcgKyBzZWxmLnJlLnNjaGVtYV90ZXN0LnNvdXJjZSArICcpfCgnICsgc2VsZi5yZS5ob3N0X2Z1enp5X3Rlc3Quc291cmNlICsgJyl8QCcsXG4gICAgJ2knXG4gIClcblxuICAvL1xuICAvLyBDbGVhbnVwXG4gIC8vXG5cbiAgcmVzZXRTY2FuQ2FjaGUoc2VsZilcbn1cblxuLyoqXG4gKiBjbGFzcyBNYXRjaFxuICpcbiAqIE1hdGNoIHJlc3VsdC4gU2luZ2xlIGVsZW1lbnQgb2YgYXJyYXksIHJldHVybmVkIGJ5IFtbTGlua2lmeUl0I21hdGNoXV1cbiAqKi9cbmZ1bmN0aW9uIE1hdGNoIChzZWxmLCBzaGlmdCkge1xuICBjb25zdCBzdGFydCA9IHNlbGYuX19pbmRleF9fXG4gIGNvbnN0IGVuZCA9IHNlbGYuX19sYXN0X2luZGV4X19cbiAgY29uc3QgdGV4dCA9IHNlbGYuX190ZXh0X2NhY2hlX18uc2xpY2Uoc3RhcnQsIGVuZClcblxuICAvKipcbiAgICogTWF0Y2gjc2NoZW1hIC0+IFN0cmluZ1xuICAgKlxuICAgKiBQcmVmaXggKHByb3RvY29sKSBmb3IgbWF0Y2hlZCBzdHJpbmcuXG4gICAqKi9cbiAgdGhpcy5zY2hlbWEgPSBzZWxmLl9fc2NoZW1hX18udG9Mb3dlckNhc2UoKVxuICAvKipcbiAgICogTWF0Y2gjaW5kZXggLT4gTnVtYmVyXG4gICAqXG4gICAqIEZpcnN0IHBvc2l0aW9uIG9mIG1hdGNoZWQgc3RyaW5nLlxuICAgKiovXG4gIHRoaXMuaW5kZXggPSBzdGFydCArIHNoaWZ0XG4gIC8qKlxuICAgKiBNYXRjaCNsYXN0SW5kZXggLT4gTnVtYmVyXG4gICAqXG4gICAqIE5leHQgcG9zaXRpb24gYWZ0ZXIgbWF0Y2hlZCBzdHJpbmcuXG4gICAqKi9cbiAgdGhpcy5sYXN0SW5kZXggPSBlbmQgKyBzaGlmdFxuICAvKipcbiAgICogTWF0Y2gjcmF3IC0+IFN0cmluZ1xuICAgKlxuICAgKiBNYXRjaGVkIHN0cmluZy5cbiAgICoqL1xuICB0aGlzLnJhdyA9IHRleHRcbiAgLyoqXG4gICAqIE1hdGNoI3RleHQgLT4gU3RyaW5nXG4gICAqXG4gICAqIE5vdG1hbGl6ZWQgdGV4dCBvZiBtYXRjaGVkIHN0cmluZy5cbiAgICoqL1xuICB0aGlzLnRleHQgPSB0ZXh0XG4gIC8qKlxuICAgKiBNYXRjaCN1cmwgLT4gU3RyaW5nXG4gICAqXG4gICAqIE5vcm1hbGl6ZWQgdXJsIG9mIG1hdGNoZWQgc3RyaW5nLlxuICAgKiovXG4gIHRoaXMudXJsID0gdGV4dFxufVxuXG5mdW5jdGlvbiBjcmVhdGVNYXRjaCAoc2VsZiwgc2hpZnQpIHtcbiAgY29uc3QgbWF0Y2ggPSBuZXcgTWF0Y2goc2VsZiwgc2hpZnQpXG5cbiAgc2VsZi5fX2NvbXBpbGVkX19bbWF0Y2guc2NoZW1hXS5ub3JtYWxpemUobWF0Y2gsIHNlbGYpXG5cbiAgcmV0dXJuIG1hdGNoXG59XG5cbi8qKlxuICogY2xhc3MgTGlua2lmeUl0XG4gKiovXG5cbi8qKlxuICogbmV3IExpbmtpZnlJdChzY2hlbWFzLCBvcHRpb25zKVxuICogLSBzY2hlbWFzIChPYmplY3QpOiBPcHRpb25hbC4gQWRkaXRpb25hbCBzY2hlbWFzIHRvIHZhbGlkYXRlIChwcmVmaXgvdmFsaWRhdG9yKVxuICogLSBvcHRpb25zIChPYmplY3QpOiB7IGZ1enp5TGlua3xmdXp6eUVtYWlsfGZ1enp5SVA6IHRydWV8ZmFsc2UgfVxuICpcbiAqIENyZWF0ZXMgbmV3IGxpbmtpZmllciBpbnN0YW5jZSB3aXRoIG9wdGlvbmFsIGFkZGl0aW9uYWwgc2NoZW1hcy5cbiAqIENhbiBiZSBjYWxsZWQgd2l0aG91dCBgbmV3YCBrZXl3b3JkIGZvciBjb252ZW5pZW5jZS5cbiAqXG4gKiBCeSBkZWZhdWx0IHVuZGVyc3RhbmRzOlxuICpcbiAqIC0gYGh0dHAocyk6Ly8uLi5gICwgYGZ0cDovLy4uLmAsIGBtYWlsdG86Li4uYCAmIGAvLy4uLmAgbGlua3NcbiAqIC0gXCJmdXp6eVwiIGxpbmtzIGFuZCBlbWFpbHMgKGV4YW1wbGUuY29tLCBmb29AYmFyLmNvbSkuXG4gKlxuICogYHNjaGVtYXNgIGlzIGFuIG9iamVjdCwgd2hlcmUgZWFjaCBrZXkvdmFsdWUgZGVzY3JpYmVzIHByb3RvY29sL3J1bGU6XG4gKlxuICogLSBfX2tleV9fIC0gbGluayBwcmVmaXggKHVzdWFsbHksIHByb3RvY29sIG5hbWUgd2l0aCBgOmAgYXQgdGhlIGVuZCwgYHNreXBlOmBcbiAqICAgZm9yIGV4YW1wbGUpLiBgbGlua2lmeS1pdGAgbWFrZXMgc2h1cmUgdGhhdCBwcmVmaXggaXMgbm90IHByZWNlZWRlZCB3aXRoXG4gKiAgIGFscGhhbnVtZXJpYyBjaGFyIGFuZCBzeW1ib2xzLiBPbmx5IHdoaXRlc3BhY2VzIGFuZCBwdW5jdHVhdGlvbiBhbGxvd2VkLlxuICogLSBfX3ZhbHVlX18gLSBydWxlIHRvIGNoZWNrIHRhaWwgYWZ0ZXIgbGluayBwcmVmaXhcbiAqICAgLSBfU3RyaW5nXyAtIGp1c3QgYWxpYXMgdG8gZXhpc3RpbmcgcnVsZVxuICogICAtIF9PYmplY3RfXG4gKiAgICAgLSBfdmFsaWRhdGVfIC0gdmFsaWRhdG9yIGZ1bmN0aW9uIChzaG91bGQgcmV0dXJuIG1hdGNoZWQgbGVuZ3RoIG9uIHN1Y2Nlc3MpLFxuICogICAgICAgb3IgYFJlZ0V4cGAuXG4gKiAgICAgLSBfbm9ybWFsaXplXyAtIG9wdGlvbmFsIGZ1bmN0aW9uIHRvIG5vcm1hbGl6ZSB0ZXh0ICYgdXJsIG9mIG1hdGNoZWQgcmVzdWx0XG4gKiAgICAgICAoZm9yIGV4YW1wbGUsIGZvciBAdHdpdHRlciBtZW50aW9ucykuXG4gKlxuICogYG9wdGlvbnNgOlxuICpcbiAqIC0gX19mdXp6eUxpbmtfXyAtIHJlY29nbmlnZSBVUkwtcyB3aXRob3V0IGBodHRwKHMpOmAgcHJlZml4LiBEZWZhdWx0IGB0cnVlYC5cbiAqIC0gX19mdXp6eUlQX18gLSBhbGxvdyBJUHMgaW4gZnV6enkgbGlua3MgYWJvdmUuIENhbiBjb25mbGljdCB3aXRoIHNvbWUgdGV4dHNcbiAqICAgbGlrZSB2ZXJzaW9uIG51bWJlcnMuIERlZmF1bHQgYGZhbHNlYC5cbiAqIC0gX19mdXp6eUVtYWlsX18gLSByZWNvZ25pemUgZW1haWxzIHdpdGhvdXQgYG1haWx0bzpgIHByZWZpeC5cbiAqXG4gKiovXG5mdW5jdGlvbiBMaW5raWZ5SXQgKHNjaGVtYXMsIG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIExpbmtpZnlJdCkpIHtcbiAgICByZXR1cm4gbmV3IExpbmtpZnlJdChzY2hlbWFzLCBvcHRpb25zKVxuICB9XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgaWYgKGlzT3B0aW9uc09iaihzY2hlbWFzKSkge1xuICAgICAgb3B0aW9ucyA9IHNjaGVtYXNcbiAgICAgIHNjaGVtYXMgPSB7fVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuX19vcHRzX18gPSBhc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxuXG4gIC8vIENhY2hlIGxhc3QgdGVzdGVkIHJlc3VsdC4gVXNlZCB0byBza2lwIHJlcGVhdGluZyBzdGVwcyBvbiBuZXh0IGBtYXRjaGAgY2FsbC5cbiAgdGhpcy5fX2luZGV4X18gPSAtMVxuICB0aGlzLl9fbGFzdF9pbmRleF9fID0gLTEgLy8gTmV4dCBzY2FuIHBvc2l0aW9uXG4gIHRoaXMuX19zY2hlbWFfXyA9ICcnXG4gIHRoaXMuX190ZXh0X2NhY2hlX18gPSAnJ1xuXG4gIHRoaXMuX19zY2hlbWFzX18gPSBhc3NpZ24oe30sIGRlZmF1bHRTY2hlbWFzLCBzY2hlbWFzKVxuICB0aGlzLl9fY29tcGlsZWRfXyA9IHt9XG5cbiAgdGhpcy5fX3RsZHNfXyA9IHRsZHNfZGVmYXVsdFxuICB0aGlzLl9fdGxkc19yZXBsYWNlZF9fID0gZmFsc2VcblxuICB0aGlzLnJlID0ge31cblxuICBjb21waWxlKHRoaXMpXG59XG5cbi8qKiBjaGFpbmFibGVcbiAqIExpbmtpZnlJdCNhZGQoc2NoZW1hLCBkZWZpbml0aW9uKVxuICogLSBzY2hlbWEgKFN0cmluZyk6IHJ1bGUgbmFtZSAoZml4ZWQgcGF0dGVybiBwcmVmaXgpXG4gKiAtIGRlZmluaXRpb24gKFN0cmluZ3xSZWdFeHB8T2JqZWN0KTogc2NoZW1hIGRlZmluaXRpb25cbiAqXG4gKiBBZGQgbmV3IHJ1bGUgZGVmaW5pdGlvbi4gU2VlIGNvbnN0cnVjdG9yIGRlc2NyaXB0aW9uIGZvciBkZXRhaWxzLlxuICoqL1xuTGlua2lmeUl0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKHNjaGVtYSwgZGVmaW5pdGlvbikge1xuICB0aGlzLl9fc2NoZW1hc19fW3NjaGVtYV0gPSBkZWZpbml0aW9uXG4gIGNvbXBpbGUodGhpcylcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqIGNoYWluYWJsZVxuICogTGlua2lmeUl0I3NldChvcHRpb25zKVxuICogLSBvcHRpb25zIChPYmplY3QpOiB7IGZ1enp5TGlua3xmdXp6eUVtYWlsfGZ1enp5SVA6IHRydWV8ZmFsc2UgfVxuICpcbiAqIFNldCByZWNvZ25pdGlvbiBvcHRpb25zIGZvciBsaW5rcyB3aXRob3V0IHNjaGVtYS5cbiAqKi9cbkxpbmtpZnlJdC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0IChvcHRpb25zKSB7XG4gIHRoaXMuX19vcHRzX18gPSBhc3NpZ24odGhpcy5fX29wdHNfXywgb3B0aW9ucylcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBMaW5raWZ5SXQjdGVzdCh0ZXh0KSAtPiBCb29sZWFuXG4gKlxuICogU2VhcmNoZXMgbGlua2lmaWFibGUgcGF0dGVybiBhbmQgcmV0dXJucyBgdHJ1ZWAgb24gc3VjY2VzcyBvciBgZmFsc2VgIG9uIGZhaWwuXG4gKiovXG5MaW5raWZ5SXQucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbiB0ZXN0ICh0ZXh0KSB7XG4gIC8vIFJlc2V0IHNjYW4gY2FjaGVcbiAgdGhpcy5fX3RleHRfY2FjaGVfXyA9IHRleHRcbiAgdGhpcy5fX2luZGV4X18gPSAtMVxuXG4gIGlmICghdGV4dC5sZW5ndGgpIHsgcmV0dXJuIGZhbHNlIH1cblxuICBsZXQgbSwgbWwsIG1lLCBsZW4sIHNoaWZ0LCBuZXh0LCByZSwgdGxkX3BvcywgYXRfcG9zXG5cbiAgLy8gdHJ5IHRvIHNjYW4gZm9yIGxpbmsgd2l0aCBzY2hlbWEgLSB0aGF0J3MgdGhlIG1vc3Qgc2ltcGxlIHJ1bGVcbiAgaWYgKHRoaXMucmUuc2NoZW1hX3Rlc3QudGVzdCh0ZXh0KSkge1xuICAgIHJlID0gdGhpcy5yZS5zY2hlbWFfc2VhcmNoXG4gICAgcmUubGFzdEluZGV4ID0gMFxuICAgIHdoaWxlICgobSA9IHJlLmV4ZWModGV4dCkpICE9PSBudWxsKSB7XG4gICAgICBsZW4gPSB0aGlzLnRlc3RTY2hlbWFBdCh0ZXh0LCBtWzJdLCByZS5sYXN0SW5kZXgpXG4gICAgICBpZiAobGVuKSB7XG4gICAgICAgIHRoaXMuX19zY2hlbWFfXyA9IG1bMl1cbiAgICAgICAgdGhpcy5fX2luZGV4X18gPSBtLmluZGV4ICsgbVsxXS5sZW5ndGhcbiAgICAgICAgdGhpcy5fX2xhc3RfaW5kZXhfXyA9IG0uaW5kZXggKyBtWzBdLmxlbmd0aCArIGxlblxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLl9fb3B0c19fLmZ1enp5TGluayAmJiB0aGlzLl9fY29tcGlsZWRfX1snaHR0cDonXSkge1xuICAgIC8vIGd1ZXNzIHNjaGVtYWxlc3MgbGlua3NcbiAgICB0bGRfcG9zID0gdGV4dC5zZWFyY2godGhpcy5yZS5ob3N0X2Z1enp5X3Rlc3QpXG4gICAgaWYgKHRsZF9wb3MgPj0gMCkge1xuICAgICAgLy8gaWYgdGxkIGlzIGxvY2F0ZWQgYWZ0ZXIgZm91bmQgbGluayAtIG5vIG5lZWQgdG8gY2hlY2sgZnV6enkgcGF0dGVyblxuICAgICAgaWYgKHRoaXMuX19pbmRleF9fIDwgMCB8fCB0bGRfcG9zIDwgdGhpcy5fX2luZGV4X18pIHtcbiAgICAgICAgaWYgKChtbCA9IHRleHQubWF0Y2godGhpcy5fX29wdHNfXy5mdXp6eUlQID8gdGhpcy5yZS5saW5rX2Z1enp5IDogdGhpcy5yZS5saW5rX25vX2lwX2Z1enp5KSkgIT09IG51bGwpIHtcbiAgICAgICAgICBzaGlmdCA9IG1sLmluZGV4ICsgbWxbMV0ubGVuZ3RoXG5cbiAgICAgICAgICBpZiAodGhpcy5fX2luZGV4X18gPCAwIHx8IHNoaWZ0IDwgdGhpcy5fX2luZGV4X18pIHtcbiAgICAgICAgICAgIHRoaXMuX19zY2hlbWFfXyA9ICcnXG4gICAgICAgICAgICB0aGlzLl9faW5kZXhfXyA9IHNoaWZ0XG4gICAgICAgICAgICB0aGlzLl9fbGFzdF9pbmRleF9fID0gbWwuaW5kZXggKyBtbFswXS5sZW5ndGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5fX29wdHNfXy5mdXp6eUVtYWlsICYmIHRoaXMuX19jb21waWxlZF9fWydtYWlsdG86J10pIHtcbiAgICAvLyBndWVzcyBzY2hlbWFsZXNzIGVtYWlsc1xuICAgIGF0X3BvcyA9IHRleHQuaW5kZXhPZignQCcpXG4gICAgaWYgKGF0X3BvcyA+PSAwKSB7XG4gICAgICAvLyBXZSBjYW4ndCBza2lwIHRoaXMgY2hlY2ssIGJlY2F1c2UgdGhpcyBjYXNlcyBhcmUgcG9zc2libGU6XG4gICAgICAvLyAxOTIuMTY4LjEuMUBnbWFpbC5jb20sIG15LmluQGV4YW1wbGUuY29tXG4gICAgICBpZiAoKG1lID0gdGV4dC5tYXRjaCh0aGlzLnJlLmVtYWlsX2Z1enp5KSkgIT09IG51bGwpIHtcbiAgICAgICAgc2hpZnQgPSBtZS5pbmRleCArIG1lWzFdLmxlbmd0aFxuICAgICAgICBuZXh0ID0gbWUuaW5kZXggKyBtZVswXS5sZW5ndGhcblxuICAgICAgICBpZiAodGhpcy5fX2luZGV4X18gPCAwIHx8IHNoaWZ0IDwgdGhpcy5fX2luZGV4X18gfHxcbiAgICAgICAgICAgIChzaGlmdCA9PT0gdGhpcy5fX2luZGV4X18gJiYgbmV4dCA+IHRoaXMuX19sYXN0X2luZGV4X18pKSB7XG4gICAgICAgICAgdGhpcy5fX3NjaGVtYV9fID0gJ21haWx0bzonXG4gICAgICAgICAgdGhpcy5fX2luZGV4X18gPSBzaGlmdFxuICAgICAgICAgIHRoaXMuX19sYXN0X2luZGV4X18gPSBuZXh0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5fX2luZGV4X18gPj0gMFxufVxuXG4vKipcbiAqIExpbmtpZnlJdCNwcmV0ZXN0KHRleHQpIC0+IEJvb2xlYW5cbiAqXG4gKiBWZXJ5IHF1aWNrIGNoZWNrLCB0aGF0IGNhbiBnaXZlIGZhbHNlIHBvc2l0aXZlcy4gUmV0dXJucyB0cnVlIGlmIGxpbmsgTUFZIEJFXG4gKiBjYW4gZXhpc3RzLiBDYW4gYmUgdXNlZCBmb3Igc3BlZWQgb3B0aW1pemF0aW9uLCB3aGVuIHlvdSBuZWVkIHRvIGNoZWNrIHRoYXRcbiAqIGxpbmsgTk9UIGV4aXN0cy5cbiAqKi9cbkxpbmtpZnlJdC5wcm90b3R5cGUucHJldGVzdCA9IGZ1bmN0aW9uIHByZXRlc3QgKHRleHQpIHtcbiAgcmV0dXJuIHRoaXMucmUucHJldGVzdC50ZXN0KHRleHQpXG59XG5cbi8qKlxuICogTGlua2lmeUl0I3Rlc3RTY2hlbWFBdCh0ZXh0LCBuYW1lLCBwb3NpdGlvbikgLT4gTnVtYmVyXG4gKiAtIHRleHQgKFN0cmluZyk6IHRleHQgdG8gc2NhblxuICogLSBuYW1lIChTdHJpbmcpOiBydWxlIChzY2hlbWEpIG5hbWVcbiAqIC0gcG9zaXRpb24gKE51bWJlcik6IHRleHQgb2Zmc2V0IHRvIGNoZWNrIGZyb21cbiAqXG4gKiBTaW1pbGFyIHRvIFtbTGlua2lmeUl0I3Rlc3RdXSBidXQgY2hlY2tzIG9ubHkgc3BlY2lmaWMgcHJvdG9jb2wgdGFpbCBleGFjdGx5XG4gKiBhdCBnaXZlbiBwb3NpdGlvbi4gUmV0dXJucyBsZW5ndGggb2YgZm91bmQgcGF0dGVybiAoMCBvbiBmYWlsKS5cbiAqKi9cbkxpbmtpZnlJdC5wcm90b3R5cGUudGVzdFNjaGVtYUF0ID0gZnVuY3Rpb24gdGVzdFNjaGVtYUF0ICh0ZXh0LCBzY2hlbWEsIHBvcykge1xuICAvLyBJZiBub3Qgc3VwcG9ydGVkIHNjaGVtYSBjaGVjayByZXF1ZXN0ZWQgLSB0ZXJtaW5hdGVcbiAgaWYgKCF0aGlzLl9fY29tcGlsZWRfX1tzY2hlbWEudG9Mb3dlckNhc2UoKV0pIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIHJldHVybiB0aGlzLl9fY29tcGlsZWRfX1tzY2hlbWEudG9Mb3dlckNhc2UoKV0udmFsaWRhdGUodGV4dCwgcG9zLCB0aGlzKVxufVxuXG4vKipcbiAqIExpbmtpZnlJdCNtYXRjaCh0ZXh0KSAtPiBBcnJheXxudWxsXG4gKlxuICogUmV0dXJucyBhcnJheSBvZiBmb3VuZCBsaW5rIGRlc2NyaXB0aW9ucyBvciBgbnVsbGAgb24gZmFpbC4gV2Ugc3Ryb25nbHlcbiAqIHJlY29tbWVuZCB0byB1c2UgW1tMaW5raWZ5SXQjdGVzdF1dIGZpcnN0LCBmb3IgYmVzdCBzcGVlZC5cbiAqXG4gKiAjIyMjIyBSZXN1bHQgbWF0Y2ggZGVzY3JpcHRpb25cbiAqXG4gKiAtIF9fc2NoZW1hX18gLSBsaW5rIHNjaGVtYSwgY2FuIGJlIGVtcHR5IGZvciBmdXp6eSBsaW5rcywgb3IgYC8vYCBmb3JcbiAqICAgcHJvdG9jb2wtbmV1dHJhbCAgbGlua3MuXG4gKiAtIF9faW5kZXhfXyAtIG9mZnNldCBvZiBtYXRjaGVkIHRleHRcbiAqIC0gX19sYXN0SW5kZXhfXyAtIGluZGV4IG9mIG5leHQgY2hhciBhZnRlciBtYXRoY2ggZW5kXG4gKiAtIF9fcmF3X18gLSBtYXRjaGVkIHRleHRcbiAqIC0gX190ZXh0X18gLSBub3JtYWxpemVkIHRleHRcbiAqIC0gX191cmxfXyAtIGxpbmssIGdlbmVyYXRlZCBmcm9tIG1hdGNoZWQgdGV4dFxuICoqL1xuTGlua2lmeUl0LnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uIG1hdGNoICh0ZXh0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGxldCBzaGlmdCA9IDBcblxuICAvLyBUcnkgdG8gdGFrZSBwcmV2aW91cyBlbGVtZW50IGZyb20gY2FjaGUsIGlmIC50ZXN0KCkgY2FsbGVkIGJlZm9yZVxuICBpZiAodGhpcy5fX2luZGV4X18gPj0gMCAmJiB0aGlzLl9fdGV4dF9jYWNoZV9fID09PSB0ZXh0KSB7XG4gICAgcmVzdWx0LnB1c2goY3JlYXRlTWF0Y2godGhpcywgc2hpZnQpKVxuICAgIHNoaWZ0ID0gdGhpcy5fX2xhc3RfaW5kZXhfX1xuICB9XG5cbiAgLy8gQ3V0IGhlYWQgaWYgY2FjaGUgd2FzIHVzZWRcbiAgbGV0IHRhaWwgPSBzaGlmdCA/IHRleHQuc2xpY2Uoc2hpZnQpIDogdGV4dFxuXG4gIC8vIFNjYW4gc3RyaW5nIHVudGlsIGVuZCByZWFjaGVkXG4gIHdoaWxlICh0aGlzLnRlc3QodGFpbCkpIHtcbiAgICByZXN1bHQucHVzaChjcmVhdGVNYXRjaCh0aGlzLCBzaGlmdCkpXG5cbiAgICB0YWlsID0gdGFpbC5zbGljZSh0aGlzLl9fbGFzdF9pbmRleF9fKVxuICAgIHNoaWZ0ICs9IHRoaXMuX19sYXN0X2luZGV4X19cbiAgfVxuXG4gIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuLyoqXG4gKiBMaW5raWZ5SXQjbWF0Y2hBdFN0YXJ0KHRleHQpIC0+IE1hdGNofG51bGxcbiAqXG4gKiBSZXR1cm5zIGZ1bGx5LWZvcm1lZCAobm90IGZ1enp5KSBsaW5rIGlmIGl0IHN0YXJ0cyBhdCB0aGUgYmVnaW5uaW5nXG4gKiBvZiB0aGUgc3RyaW5nLCBhbmQgbnVsbCBvdGhlcndpc2UuXG4gKiovXG5MaW5raWZ5SXQucHJvdG90eXBlLm1hdGNoQXRTdGFydCA9IGZ1bmN0aW9uIG1hdGNoQXRTdGFydCAodGV4dCkge1xuICAvLyBSZXNldCBzY2FuIGNhY2hlXG4gIHRoaXMuX190ZXh0X2NhY2hlX18gPSB0ZXh0XG4gIHRoaXMuX19pbmRleF9fID0gLTFcblxuICBpZiAoIXRleHQubGVuZ3RoKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IG0gPSB0aGlzLnJlLnNjaGVtYV9hdF9zdGFydC5leGVjKHRleHQpXG4gIGlmICghbSkgcmV0dXJuIG51bGxcblxuICBjb25zdCBsZW4gPSB0aGlzLnRlc3RTY2hlbWFBdCh0ZXh0LCBtWzJdLCBtWzBdLmxlbmd0aClcbiAgaWYgKCFsZW4pIHJldHVybiBudWxsXG5cbiAgdGhpcy5fX3NjaGVtYV9fID0gbVsyXVxuICB0aGlzLl9faW5kZXhfXyA9IG0uaW5kZXggKyBtWzFdLmxlbmd0aFxuICB0aGlzLl9fbGFzdF9pbmRleF9fID0gbS5pbmRleCArIG1bMF0ubGVuZ3RoICsgbGVuXG5cbiAgcmV0dXJuIGNyZWF0ZU1hdGNoKHRoaXMsIDApXG59XG5cbi8qKiBjaGFpbmFibGVcbiAqIExpbmtpZnlJdCN0bGRzKGxpc3QgWywga2VlcE9sZF0pIC0+IHRoaXNcbiAqIC0gbGlzdCAoQXJyYXkpOiBsaXN0IG9mIHRsZHNcbiAqIC0ga2VlcE9sZCAoQm9vbGVhbik6IG1lcmdlIHdpdGggY3VycmVudCBsaXN0IGlmIGB0cnVlYCAoYGZhbHNlYCBieSBkZWZhdWx0KVxuICpcbiAqIExvYWQgKG9yIG1lcmdlKSBuZXcgdGxkcyBsaXN0LiBUaG9zZSBhcmUgdXNlciBmb3IgZnV6enkgbGlua3MgKHdpdGhvdXQgcHJlZml4KVxuICogdG8gYXZvaWQgZmFsc2UgcG9zaXRpdmVzLiBCeSBkZWZhdWx0IHRoaXMgYWxnb3J5dGhtIHVzZWQ6XG4gKlxuICogLSBob3N0bmFtZSB3aXRoIGFueSAyLWxldHRlciByb290IHpvbmVzIGFyZSBvay5cbiAqIC0gYml6fGNvbXxlZHV8Z292fG5ldHxvcmd8cHJvfHdlYnx4eHh8YWVyb3xhc2lhfGNvb3B8aW5mb3xtdXNldW18bmFtZXxzaG9wfNGA0YRcbiAqICAgYXJlIG9rLlxuICogLSBlbmNvZGVkIChgeG4tLS4uLmApIHJvb3Qgem9uZXMgYXJlIG9rLlxuICpcbiAqIElmIGxpc3QgaXMgcmVwbGFjZWQsIHRoZW4gZXhhY3QgbWF0Y2ggZm9yIDItY2hhcnMgcm9vdCB6b25lcyB3aWxsIGJlIGNoZWNrZWQuXG4gKiovXG5MaW5raWZ5SXQucHJvdG90eXBlLnRsZHMgPSBmdW5jdGlvbiB0bGRzIChsaXN0LCBrZWVwT2xkKSB7XG4gIGxpc3QgPSBBcnJheS5pc0FycmF5KGxpc3QpID8gbGlzdCA6IFtsaXN0XVxuXG4gIGlmICgha2VlcE9sZCkge1xuICAgIHRoaXMuX190bGRzX18gPSBsaXN0LnNsaWNlKClcbiAgICB0aGlzLl9fdGxkc19yZXBsYWNlZF9fID0gdHJ1ZVxuICAgIGNvbXBpbGUodGhpcylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdGhpcy5fX3RsZHNfXyA9IHRoaXMuX190bGRzX18uY29uY2F0KGxpc3QpXG4gICAgLnNvcnQoKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gKGVsLCBpZHgsIGFycikge1xuICAgICAgcmV0dXJuIGVsICE9PSBhcnJbaWR4IC0gMV1cbiAgICB9KVxuICAgIC5yZXZlcnNlKClcblxuICBjb21waWxlKHRoaXMpXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogTGlua2lmeUl0I25vcm1hbGl6ZShtYXRjaClcbiAqXG4gKiBEZWZhdWx0IG5vcm1hbGl6ZXIgKGlmIHNjaGVtYSBkb2VzIG5vdCBkZWZpbmUgaXQncyBvd24pLlxuICoqL1xuTGlua2lmeUl0LnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbiBub3JtYWxpemUgKG1hdGNoKSB7XG4gIC8vIERvIG1pbmltYWwgcG9zc2libGUgY2hhbmdlcyBieSBkZWZhdWx0LiBOZWVkIHRvIGNvbGxlY3QgZmVlZGJhY2sgcHJpb3JcbiAgLy8gdG8gbW92ZSBmb3J3YXJkIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9saW5raWZ5LWl0L2lzc3Vlcy8xXG5cbiAgaWYgKCFtYXRjaC5zY2hlbWEpIHsgbWF0Y2gudXJsID0gJ2h0dHA6Ly8nICsgbWF0Y2gudXJsIH1cblxuICBpZiAobWF0Y2guc2NoZW1hID09PSAnbWFpbHRvOicgJiYgIS9ebWFpbHRvOi9pLnRlc3QobWF0Y2gudXJsKSkge1xuICAgIG1hdGNoLnVybCA9ICdtYWlsdG86JyArIG1hdGNoLnVybFxuICB9XG59XG5cbi8qKlxuICogTGlua2lmeUl0I29uQ29tcGlsZSgpXG4gKlxuICogT3ZlcnJpZGUgdG8gbW9kaWZ5IGJhc2ljIFJlZ0V4cC1zLlxuICoqL1xuTGlua2lmeUl0LnByb3RvdHlwZS5vbkNvbXBpbGUgPSBmdW5jdGlvbiBvbkNvbXBpbGUgKCkge1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5raWZ5SXRcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqIEhpZ2hlc3QgcG9zaXRpdmUgc2lnbmVkIDMyLWJpdCBmbG9hdCB2YWx1ZSAqL1xuY29uc3QgbWF4SW50ID0gMjE0NzQ4MzY0NzsgLy8gYWthLiAweDdGRkZGRkZGIG9yIDJeMzEtMVxuXG4vKiogQm9vdHN0cmluZyBwYXJhbWV0ZXJzICovXG5jb25zdCBiYXNlID0gMzY7XG5jb25zdCB0TWluID0gMTtcbmNvbnN0IHRNYXggPSAyNjtcbmNvbnN0IHNrZXcgPSAzODtcbmNvbnN0IGRhbXAgPSA3MDA7XG5jb25zdCBpbml0aWFsQmlhcyA9IDcyO1xuY29uc3QgaW5pdGlhbE4gPSAxMjg7IC8vIDB4ODBcbmNvbnN0IGRlbGltaXRlciA9ICctJzsgLy8gJ1xceDJEJ1xuXG4vKiogUmVndWxhciBleHByZXNzaW9ucyAqL1xuY29uc3QgcmVnZXhQdW55Y29kZSA9IC9eeG4tLS87XG5jb25zdCByZWdleE5vbkFTQ0lJID0gL1teXFwwLVxceDdGXS87IC8vIE5vdGU6IFUrMDA3RiBERUwgaXMgZXhjbHVkZWQgdG9vLlxuY29uc3QgcmVnZXhTZXBhcmF0b3JzID0gL1tcXHgyRVxcdTMwMDJcXHVGRjBFXFx1RkY2MV0vZzsgLy8gUkZDIDM0OTAgc2VwYXJhdG9yc1xuXG4vKiogRXJyb3IgbWVzc2FnZXMgKi9cbmNvbnN0IGVycm9ycyA9IHtcblx0J292ZXJmbG93JzogJ092ZXJmbG93OiBpbnB1dCBuZWVkcyB3aWRlciBpbnRlZ2VycyB0byBwcm9jZXNzJyxcblx0J25vdC1iYXNpYyc6ICdJbGxlZ2FsIGlucHV0ID49IDB4ODAgKG5vdCBhIGJhc2ljIGNvZGUgcG9pbnQpJyxcblx0J2ludmFsaWQtaW5wdXQnOiAnSW52YWxpZCBpbnB1dCdcbn07XG5cbi8qKiBDb252ZW5pZW5jZSBzaG9ydGN1dHMgKi9cbmNvbnN0IGJhc2VNaW51c1RNaW4gPSBiYXNlIC0gdE1pbjtcbmNvbnN0IGZsb29yID0gTWF0aC5mbG9vcjtcbmNvbnN0IHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vKipcbiAqIEEgZ2VuZXJpYyBlcnJvciB1dGlsaXR5IGZ1bmN0aW9uLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBlcnJvciB0eXBlLlxuICogQHJldHVybnMge0Vycm9yfSBUaHJvd3MgYSBgUmFuZ2VFcnJvcmAgd2l0aCB0aGUgYXBwbGljYWJsZSBlcnJvciBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBlcnJvcih0eXBlKSB7XG5cdHRocm93IG5ldyBSYW5nZUVycm9yKGVycm9yc1t0eXBlXSk7XG59XG5cbi8qKlxuICogQSBnZW5lcmljIGBBcnJheSNtYXBgIHV0aWxpdHkgZnVuY3Rpb24uXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIGZvciBldmVyeSBhcnJheVxuICogaXRlbS5cbiAqIEByZXR1cm5zIHtBcnJheX0gQSBuZXcgYXJyYXkgb2YgdmFsdWVzIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWFwKGFycmF5LCBjYWxsYmFjaykge1xuXHRjb25zdCByZXN1bHQgPSBbXTtcblx0bGV0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0d2hpbGUgKGxlbmd0aC0tKSB7XG5cdFx0cmVzdWx0W2xlbmd0aF0gPSBjYWxsYmFjayhhcnJheVtsZW5ndGhdKTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEEgc2ltcGxlIGBBcnJheSNtYXBgLWxpa2Ugd3JhcHBlciB0byB3b3JrIHdpdGggZG9tYWluIG5hbWUgc3RyaW5ncyBvciBlbWFpbFxuICogYWRkcmVzc2VzLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBkb21haW4gVGhlIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnlcbiAqIGNoYXJhY3Rlci5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IEEgbmV3IHN0cmluZyBvZiBjaGFyYWN0ZXJzIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFja1xuICogZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1hcERvbWFpbihkb21haW4sIGNhbGxiYWNrKSB7XG5cdGNvbnN0IHBhcnRzID0gZG9tYWluLnNwbGl0KCdAJyk7XG5cdGxldCByZXN1bHQgPSAnJztcblx0aWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcblx0XHQvLyBJbiBlbWFpbCBhZGRyZXNzZXMsIG9ubHkgdGhlIGRvbWFpbiBuYW1lIHNob3VsZCBiZSBwdW55Y29kZWQuIExlYXZlXG5cdFx0Ly8gdGhlIGxvY2FsIHBhcnQgKGkuZS4gZXZlcnl0aGluZyB1cCB0byBgQGApIGludGFjdC5cblx0XHRyZXN1bHQgPSBwYXJ0c1swXSArICdAJztcblx0XHRkb21haW4gPSBwYXJ0c1sxXTtcblx0fVxuXHQvLyBBdm9pZCBgc3BsaXQocmVnZXgpYCBmb3IgSUU4IGNvbXBhdGliaWxpdHkuIFNlZSAjMTcuXG5cdGRvbWFpbiA9IGRvbWFpbi5yZXBsYWNlKHJlZ2V4U2VwYXJhdG9ycywgJ1xceDJFJyk7XG5cdGNvbnN0IGxhYmVscyA9IGRvbWFpbi5zcGxpdCgnLicpO1xuXHRjb25zdCBlbmNvZGVkID0gbWFwKGxhYmVscywgY2FsbGJhY2spLmpvaW4oJy4nKTtcblx0cmV0dXJuIHJlc3VsdCArIGVuY29kZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBudW1lcmljIGNvZGUgcG9pbnRzIG9mIGVhY2ggVW5pY29kZVxuICogY2hhcmFjdGVyIGluIHRoZSBzdHJpbmcuIFdoaWxlIEphdmFTY3JpcHQgdXNlcyBVQ1MtMiBpbnRlcm5hbGx5LFxuICogdGhpcyBmdW5jdGlvbiB3aWxsIGNvbnZlcnQgYSBwYWlyIG9mIHN1cnJvZ2F0ZSBoYWx2ZXMgKGVhY2ggb2Ygd2hpY2hcbiAqIFVDUy0yIGV4cG9zZXMgYXMgc2VwYXJhdGUgY2hhcmFjdGVycykgaW50byBhIHNpbmdsZSBjb2RlIHBvaW50LFxuICogbWF0Y2hpbmcgVVRGLTE2LlxuICogQHNlZSBgcHVueWNvZGUudWNzMi5lbmNvZGVgXG4gKiBAc2VlIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZz5cbiAqIEBtZW1iZXJPZiBwdW55Y29kZS51Y3MyXG4gKiBAbmFtZSBkZWNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgVGhlIFVuaWNvZGUgaW5wdXQgc3RyaW5nIChVQ1MtMikuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBuZXcgYXJyYXkgb2YgY29kZSBwb2ludHMuXG4gKi9cbmZ1bmN0aW9uIHVjczJkZWNvZGUoc3RyaW5nKSB7XG5cdGNvbnN0IG91dHB1dCA9IFtdO1xuXHRsZXQgY291bnRlciA9IDA7XG5cdGNvbnN0IGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cdHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdGlmICh2YWx1ZSA+PSAweEQ4MDAgJiYgdmFsdWUgPD0gMHhEQkZGICYmIGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdC8vIEl0J3MgYSBoaWdoIHN1cnJvZ2F0ZSwgYW5kIHRoZXJlIGlzIGEgbmV4dCBjaGFyYWN0ZXIuXG5cdFx0XHRjb25zdCBleHRyYSA9IHN0cmluZy5jaGFyQ29kZUF0KGNvdW50ZXIrKyk7XG5cdFx0XHRpZiAoKGV4dHJhICYgMHhGQzAwKSA9PSAweERDMDApIHsgLy8gTG93IHN1cnJvZ2F0ZS5cblx0XHRcdFx0b3V0cHV0LnB1c2goKCh2YWx1ZSAmIDB4M0ZGKSA8PCAxMCkgKyAoZXh0cmEgJiAweDNGRikgKyAweDEwMDAwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEl0J3MgYW4gdW5tYXRjaGVkIHN1cnJvZ2F0ZTsgb25seSBhcHBlbmQgdGhpcyBjb2RlIHVuaXQsIGluIGNhc2UgdGhlXG5cdFx0XHRcdC8vIG5leHQgY29kZSB1bml0IGlzIHRoZSBoaWdoIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyLlxuXHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdGNvdW50ZXItLTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gb3V0cHV0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzdHJpbmcgYmFzZWQgb24gYW4gYXJyYXkgb2YgbnVtZXJpYyBjb2RlIHBvaW50cy5cbiAqIEBzZWUgYHB1bnljb2RlLnVjczIuZGVjb2RlYFxuICogQG1lbWJlck9mIHB1bnljb2RlLnVjczJcbiAqIEBuYW1lIGVuY29kZVxuICogQHBhcmFtIHtBcnJheX0gY29kZVBvaW50cyBUaGUgYXJyYXkgb2YgbnVtZXJpYyBjb2RlIHBvaW50cy5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBuZXcgVW5pY29kZSBzdHJpbmcgKFVDUy0yKS5cbiAqL1xuY29uc3QgdWNzMmVuY29kZSA9IGNvZGVQb2ludHMgPT4gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZVBvaW50cyk7XG5cbi8qKlxuICogQ29udmVydHMgYSBiYXNpYyBjb2RlIHBvaW50IGludG8gYSBkaWdpdC9pbnRlZ2VyLlxuICogQHNlZSBgZGlnaXRUb0Jhc2ljKClgXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IGNvZGVQb2ludCBUaGUgYmFzaWMgbnVtZXJpYyBjb2RlIHBvaW50IHZhbHVlLlxuICogQHJldHVybnMge051bWJlcn0gVGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNpYyBjb2RlIHBvaW50IChmb3IgdXNlIGluXG4gKiByZXByZXNlbnRpbmcgaW50ZWdlcnMpIGluIHRoZSByYW5nZSBgMGAgdG8gYGJhc2UgLSAxYCwgb3IgYGJhc2VgIGlmXG4gKiB0aGUgY29kZSBwb2ludCBkb2VzIG5vdCByZXByZXNlbnQgYSB2YWx1ZS5cbiAqL1xuY29uc3QgYmFzaWNUb0RpZ2l0ID0gZnVuY3Rpb24oY29kZVBvaW50KSB7XG5cdGlmIChjb2RlUG9pbnQgPj0gMHgzMCAmJiBjb2RlUG9pbnQgPCAweDNBKSB7XG5cdFx0cmV0dXJuIDI2ICsgKGNvZGVQb2ludCAtIDB4MzApO1xuXHR9XG5cdGlmIChjb2RlUG9pbnQgPj0gMHg0MSAmJiBjb2RlUG9pbnQgPCAweDVCKSB7XG5cdFx0cmV0dXJuIGNvZGVQb2ludCAtIDB4NDE7XG5cdH1cblx0aWYgKGNvZGVQb2ludCA+PSAweDYxICYmIGNvZGVQb2ludCA8IDB4N0IpIHtcblx0XHRyZXR1cm4gY29kZVBvaW50IC0gMHg2MTtcblx0fVxuXHRyZXR1cm4gYmFzZTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBkaWdpdC9pbnRlZ2VyIGludG8gYSBiYXNpYyBjb2RlIHBvaW50LlxuICogQHNlZSBgYmFzaWNUb0RpZ2l0KClgXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IGRpZ2l0IFRoZSBudW1lcmljIHZhbHVlIG9mIGEgYmFzaWMgY29kZSBwb2ludC5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBiYXNpYyBjb2RlIHBvaW50IHdob3NlIHZhbHVlICh3aGVuIHVzZWQgZm9yXG4gKiByZXByZXNlbnRpbmcgaW50ZWdlcnMpIGlzIGBkaWdpdGAsIHdoaWNoIG5lZWRzIHRvIGJlIGluIHRoZSByYW5nZVxuICogYDBgIHRvIGBiYXNlIC0gMWAuIElmIGBmbGFnYCBpcyBub24temVybywgdGhlIHVwcGVyY2FzZSBmb3JtIGlzXG4gKiB1c2VkOyBlbHNlLCB0aGUgbG93ZXJjYXNlIGZvcm0gaXMgdXNlZC4gVGhlIGJlaGF2aW9yIGlzIHVuZGVmaW5lZFxuICogaWYgYGZsYWdgIGlzIG5vbi16ZXJvIGFuZCBgZGlnaXRgIGhhcyBubyB1cHBlcmNhc2UgZm9ybS5cbiAqL1xuY29uc3QgZGlnaXRUb0Jhc2ljID0gZnVuY3Rpb24oZGlnaXQsIGZsYWcpIHtcblx0Ly8gIDAuLjI1IG1hcCB0byBBU0NJSSBhLi56IG9yIEEuLlpcblx0Ly8gMjYuLjM1IG1hcCB0byBBU0NJSSAwLi45XG5cdHJldHVybiBkaWdpdCArIDIyICsgNzUgKiAoZGlnaXQgPCAyNikgLSAoKGZsYWcgIT0gMCkgPDwgNSk7XG59O1xuXG4vKipcbiAqIEJpYXMgYWRhcHRhdGlvbiBmdW5jdGlvbiBhcyBwZXIgc2VjdGlvbiAzLjQgb2YgUkZDIDM0OTIuXG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzQ5MiNzZWN0aW9uLTMuNFxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgYWRhcHQgPSBmdW5jdGlvbihkZWx0YSwgbnVtUG9pbnRzLCBmaXJzdFRpbWUpIHtcblx0bGV0IGsgPSAwO1xuXHRkZWx0YSA9IGZpcnN0VGltZSA/IGZsb29yKGRlbHRhIC8gZGFtcCkgOiBkZWx0YSA+PiAxO1xuXHRkZWx0YSArPSBmbG9vcihkZWx0YSAvIG51bVBvaW50cyk7XG5cdGZvciAoLyogbm8gaW5pdGlhbGl6YXRpb24gKi87IGRlbHRhID4gYmFzZU1pbnVzVE1pbiAqIHRNYXggPj4gMTsgayArPSBiYXNlKSB7XG5cdFx0ZGVsdGEgPSBmbG9vcihkZWx0YSAvIGJhc2VNaW51c1RNaW4pO1xuXHR9XG5cdHJldHVybiBmbG9vcihrICsgKGJhc2VNaW51c1RNaW4gKyAxKSAqIGRlbHRhIC8gKGRlbHRhICsgc2tldykpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMgdG8gYSBzdHJpbmcgb2YgVW5pY29kZVxuICogc3ltYm9scy5cbiAqIEBtZW1iZXJPZiBwdW55Y29kZVxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHJlc3VsdGluZyBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzLlxuICovXG5jb25zdCBkZWNvZGUgPSBmdW5jdGlvbihpbnB1dCkge1xuXHQvLyBEb24ndCB1c2UgVUNTLTIuXG5cdGNvbnN0IG91dHB1dCA9IFtdO1xuXHRjb25zdCBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblx0bGV0IGkgPSAwO1xuXHRsZXQgbiA9IGluaXRpYWxOO1xuXHRsZXQgYmlhcyA9IGluaXRpYWxCaWFzO1xuXG5cdC8vIEhhbmRsZSB0aGUgYmFzaWMgY29kZSBwb2ludHM6IGxldCBgYmFzaWNgIGJlIHRoZSBudW1iZXIgb2YgaW5wdXQgY29kZVxuXHQvLyBwb2ludHMgYmVmb3JlIHRoZSBsYXN0IGRlbGltaXRlciwgb3IgYDBgIGlmIHRoZXJlIGlzIG5vbmUsIHRoZW4gY29weVxuXHQvLyB0aGUgZmlyc3QgYmFzaWMgY29kZSBwb2ludHMgdG8gdGhlIG91dHB1dC5cblxuXHRsZXQgYmFzaWMgPSBpbnB1dC5sYXN0SW5kZXhPZihkZWxpbWl0ZXIpO1xuXHRpZiAoYmFzaWMgPCAwKSB7XG5cdFx0YmFzaWMgPSAwO1xuXHR9XG5cblx0Zm9yIChsZXQgaiA9IDA7IGogPCBiYXNpYzsgKytqKSB7XG5cdFx0Ly8gaWYgaXQncyBub3QgYSBiYXNpYyBjb2RlIHBvaW50XG5cdFx0aWYgKGlucHV0LmNoYXJDb2RlQXQoaikgPj0gMHg4MCkge1xuXHRcdFx0ZXJyb3IoJ25vdC1iYXNpYycpO1xuXHRcdH1cblx0XHRvdXRwdXQucHVzaChpbnB1dC5jaGFyQ29kZUF0KGopKTtcblx0fVxuXG5cdC8vIE1haW4gZGVjb2RpbmcgbG9vcDogc3RhcnQganVzdCBhZnRlciB0aGUgbGFzdCBkZWxpbWl0ZXIgaWYgYW55IGJhc2ljIGNvZGVcblx0Ly8gcG9pbnRzIHdlcmUgY29waWVkOyBzdGFydCBhdCB0aGUgYmVnaW5uaW5nIG90aGVyd2lzZS5cblxuXHRmb3IgKGxldCBpbmRleCA9IGJhc2ljID4gMCA/IGJhc2ljICsgMSA6IDA7IGluZGV4IDwgaW5wdXRMZW5ndGg7IC8qIG5vIGZpbmFsIGV4cHJlc3Npb24gKi8pIHtcblxuXHRcdC8vIGBpbmRleGAgaXMgdGhlIGluZGV4IG9mIHRoZSBuZXh0IGNoYXJhY3RlciB0byBiZSBjb25zdW1lZC5cblx0XHQvLyBEZWNvZGUgYSBnZW5lcmFsaXplZCB2YXJpYWJsZS1sZW5ndGggaW50ZWdlciBpbnRvIGBkZWx0YWAsXG5cdFx0Ly8gd2hpY2ggZ2V0cyBhZGRlZCB0byBgaWAuIFRoZSBvdmVyZmxvdyBjaGVja2luZyBpcyBlYXNpZXJcblx0XHQvLyBpZiB3ZSBpbmNyZWFzZSBgaWAgYXMgd2UgZ28sIHRoZW4gc3VidHJhY3Qgb2ZmIGl0cyBzdGFydGluZ1xuXHRcdC8vIHZhbHVlIGF0IHRoZSBlbmQgdG8gb2J0YWluIGBkZWx0YWAuXG5cdFx0Y29uc3Qgb2xkaSA9IGk7XG5cdFx0Zm9yIChsZXQgdyA9IDEsIGsgPSBiYXNlOyAvKiBubyBjb25kaXRpb24gKi87IGsgKz0gYmFzZSkge1xuXG5cdFx0XHRpZiAoaW5kZXggPj0gaW5wdXRMZW5ndGgpIHtcblx0XHRcdFx0ZXJyb3IoJ2ludmFsaWQtaW5wdXQnKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGlnaXQgPSBiYXNpY1RvRGlnaXQoaW5wdXQuY2hhckNvZGVBdChpbmRleCsrKSk7XG5cblx0XHRcdGlmIChkaWdpdCA+PSBiYXNlKSB7XG5cdFx0XHRcdGVycm9yKCdpbnZhbGlkLWlucHV0Jyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlnaXQgPiBmbG9vcigobWF4SW50IC0gaSkgLyB3KSkge1xuXHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdH1cblxuXHRcdFx0aSArPSBkaWdpdCAqIHc7XG5cdFx0XHRjb25zdCB0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblxuXHRcdFx0aWYgKGRpZ2l0IDwgdCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgYmFzZU1pbnVzVCA9IGJhc2UgLSB0O1xuXHRcdFx0aWYgKHcgPiBmbG9vcihtYXhJbnQgLyBiYXNlTWludXNUKSkge1xuXHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdH1cblxuXHRcdFx0dyAqPSBiYXNlTWludXNUO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3V0ID0gb3V0cHV0Lmxlbmd0aCArIDE7XG5cdFx0YmlhcyA9IGFkYXB0KGkgLSBvbGRpLCBvdXQsIG9sZGkgPT0gMCk7XG5cblx0XHQvLyBgaWAgd2FzIHN1cHBvc2VkIHRvIHdyYXAgYXJvdW5kIGZyb20gYG91dGAgdG8gYDBgLFxuXHRcdC8vIGluY3JlbWVudGluZyBgbmAgZWFjaCB0aW1lLCBzbyB3ZSdsbCBmaXggdGhhdCBub3c6XG5cdFx0aWYgKGZsb29yKGkgLyBvdXQpID4gbWF4SW50IC0gbikge1xuXHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0fVxuXG5cdFx0biArPSBmbG9vcihpIC8gb3V0KTtcblx0XHRpICU9IG91dDtcblxuXHRcdC8vIEluc2VydCBgbmAgYXQgcG9zaXRpb24gYGlgIG9mIHRoZSBvdXRwdXQuXG5cdFx0b3V0cHV0LnNwbGljZShpKyssIDAsIG4pO1xuXG5cdH1cblxuXHRyZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4ub3V0cHV0KTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzIChlLmcuIGEgZG9tYWluIG5hbWUgbGFiZWwpIHRvIGFcbiAqIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG4gKiBAbWVtYmVyT2YgcHVueWNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSByZXN1bHRpbmcgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scy5cbiAqL1xuY29uc3QgZW5jb2RlID0gZnVuY3Rpb24oaW5wdXQpIHtcblx0Y29uc3Qgb3V0cHV0ID0gW107XG5cblx0Ly8gQ29udmVydCB0aGUgaW5wdXQgaW4gVUNTLTIgdG8gYW4gYXJyYXkgb2YgVW5pY29kZSBjb2RlIHBvaW50cy5cblx0aW5wdXQgPSB1Y3MyZGVjb2RlKGlucHV0KTtcblxuXHQvLyBDYWNoZSB0aGUgbGVuZ3RoLlxuXHRjb25zdCBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblxuXHQvLyBJbml0aWFsaXplIHRoZSBzdGF0ZS5cblx0bGV0IG4gPSBpbml0aWFsTjtcblx0bGV0IGRlbHRhID0gMDtcblx0bGV0IGJpYXMgPSBpbml0aWFsQmlhcztcblxuXHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzLlxuXHRmb3IgKGNvbnN0IGN1cnJlbnRWYWx1ZSBvZiBpbnB1dCkge1xuXHRcdGlmIChjdXJyZW50VmFsdWUgPCAweDgwKSB7XG5cdFx0XHRvdXRwdXQucHVzaChzdHJpbmdGcm9tQ2hhckNvZGUoY3VycmVudFZhbHVlKSk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgYmFzaWNMZW5ndGggPSBvdXRwdXQubGVuZ3RoO1xuXHRsZXQgaGFuZGxlZENQQ291bnQgPSBiYXNpY0xlbmd0aDtcblxuXHQvLyBgaGFuZGxlZENQQ291bnRgIGlzIHRoZSBudW1iZXIgb2YgY29kZSBwb2ludHMgdGhhdCBoYXZlIGJlZW4gaGFuZGxlZDtcblx0Ly8gYGJhc2ljTGVuZ3RoYCBpcyB0aGUgbnVtYmVyIG9mIGJhc2ljIGNvZGUgcG9pbnRzLlxuXG5cdC8vIEZpbmlzaCB0aGUgYmFzaWMgc3RyaW5nIHdpdGggYSBkZWxpbWl0ZXIgdW5sZXNzIGl0J3MgZW1wdHkuXG5cdGlmIChiYXNpY0xlbmd0aCkge1xuXHRcdG91dHB1dC5wdXNoKGRlbGltaXRlcik7XG5cdH1cblxuXHQvLyBNYWluIGVuY29kaW5nIGxvb3A6XG5cdHdoaWxlIChoYW5kbGVkQ1BDb3VudCA8IGlucHV0TGVuZ3RoKSB7XG5cblx0XHQvLyBBbGwgbm9uLWJhc2ljIGNvZGUgcG9pbnRzIDwgbiBoYXZlIGJlZW4gaGFuZGxlZCBhbHJlYWR5LiBGaW5kIHRoZSBuZXh0XG5cdFx0Ly8gbGFyZ2VyIG9uZTpcblx0XHRsZXQgbSA9IG1heEludDtcblx0XHRmb3IgKGNvbnN0IGN1cnJlbnRWYWx1ZSBvZiBpbnB1dCkge1xuXHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA+PSBuICYmIGN1cnJlbnRWYWx1ZSA8IG0pIHtcblx0XHRcdFx0bSA9IGN1cnJlbnRWYWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJbmNyZWFzZSBgZGVsdGFgIGVub3VnaCB0byBhZHZhbmNlIHRoZSBkZWNvZGVyJ3MgPG4saT4gc3RhdGUgdG8gPG0sMD4sXG5cdFx0Ly8gYnV0IGd1YXJkIGFnYWluc3Qgb3ZlcmZsb3cuXG5cdFx0Y29uc3QgaGFuZGxlZENQQ291bnRQbHVzT25lID0gaGFuZGxlZENQQ291bnQgKyAxO1xuXHRcdGlmIChtIC0gbiA+IGZsb29yKChtYXhJbnQgLSBkZWx0YSkgLyBoYW5kbGVkQ1BDb3VudFBsdXNPbmUpKSB7XG5cdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHR9XG5cblx0XHRkZWx0YSArPSAobSAtIG4pICogaGFuZGxlZENQQ291bnRQbHVzT25lO1xuXHRcdG4gPSBtO1xuXG5cdFx0Zm9yIChjb25zdCBjdXJyZW50VmFsdWUgb2YgaW5wdXQpIHtcblx0XHRcdGlmIChjdXJyZW50VmFsdWUgPCBuICYmICsrZGVsdGEgPiBtYXhJbnQpIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3VycmVudFZhbHVlID09PSBuKSB7XG5cdFx0XHRcdC8vIFJlcHJlc2VudCBkZWx0YSBhcyBhIGdlbmVyYWxpemVkIHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyLlxuXHRcdFx0XHRsZXQgcSA9IGRlbHRhO1xuXHRcdFx0XHRmb3IgKGxldCBrID0gYmFzZTsgLyogbm8gY29uZGl0aW9uICovOyBrICs9IGJhc2UpIHtcblx0XHRcdFx0XHRjb25zdCB0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblx0XHRcdFx0XHRpZiAocSA8IHQpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zdCBxTWludXNUID0gcSAtIHQ7XG5cdFx0XHRcdFx0Y29uc3QgYmFzZU1pbnVzVCA9IGJhc2UgLSB0O1xuXHRcdFx0XHRcdG91dHB1dC5wdXNoKFxuXHRcdFx0XHRcdFx0c3RyaW5nRnJvbUNoYXJDb2RlKGRpZ2l0VG9CYXNpYyh0ICsgcU1pbnVzVCAlIGJhc2VNaW51c1QsIDApKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0cSA9IGZsb29yKHFNaW51c1QgLyBiYXNlTWludXNUKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG91dHB1dC5wdXNoKHN0cmluZ0Zyb21DaGFyQ29kZShkaWdpdFRvQmFzaWMocSwgMCkpKTtcblx0XHRcdFx0YmlhcyA9IGFkYXB0KGRlbHRhLCBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsIGhhbmRsZWRDUENvdW50ID09PSBiYXNpY0xlbmd0aCk7XG5cdFx0XHRcdGRlbHRhID0gMDtcblx0XHRcdFx0KytoYW5kbGVkQ1BDb3VudDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQrK2RlbHRhO1xuXHRcdCsrbjtcblxuXHR9XG5cdHJldHVybiBvdXRwdXQuam9pbignJyk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRvbWFpbiBuYW1lIG9yIGFuIGVtYWlsIGFkZHJlc3NcbiAqIHRvIFVuaWNvZGUuIE9ubHkgdGhlIFB1bnljb2RlZCBwYXJ0cyBvZiB0aGUgaW5wdXQgd2lsbCBiZSBjb252ZXJ0ZWQsIGkuZS5cbiAqIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHlvdSBjYWxsIGl0IG9uIGEgc3RyaW5nIHRoYXQgaGFzIGFscmVhZHkgYmVlblxuICogY29udmVydGVkIHRvIFVuaWNvZGUuXG4gKiBAbWVtYmVyT2YgcHVueWNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgUHVueWNvZGVkIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MgdG9cbiAqIGNvbnZlcnQgdG8gVW5pY29kZS5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBVbmljb2RlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBQdW55Y29kZVxuICogc3RyaW5nLlxuICovXG5jb25zdCB0b1VuaWNvZGUgPSBmdW5jdGlvbihpbnB1dCkge1xuXHRyZXR1cm4gbWFwRG9tYWluKGlucHV0LCBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRyZXR1cm4gcmVnZXhQdW55Y29kZS50ZXN0KHN0cmluZylcblx0XHRcdD8gZGVjb2RlKHN0cmluZy5zbGljZSg0KS50b0xvd2VyQ2FzZSgpKVxuXHRcdFx0OiBzdHJpbmc7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIFVuaWNvZGUgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRvbWFpbiBuYW1lIG9yIGFuIGVtYWlsIGFkZHJlc3MgdG9cbiAqIFB1bnljb2RlLiBPbmx5IHRoZSBub24tQVNDSUkgcGFydHMgb2YgdGhlIGRvbWFpbiBuYW1lIHdpbGwgYmUgY29udmVydGVkLFxuICogaS5lLiBpdCBkb2Vzbid0IG1hdHRlciBpZiB5b3UgY2FsbCBpdCB3aXRoIGEgZG9tYWluIHRoYXQncyBhbHJlYWR5IGluXG4gKiBBU0NJSS5cbiAqIEBtZW1iZXJPZiBwdW55Y29kZVxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzIHRvIGNvbnZlcnQsIGFzIGFcbiAqIFVuaWNvZGUgc3RyaW5nLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFB1bnljb2RlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBkb21haW4gbmFtZSBvclxuICogZW1haWwgYWRkcmVzcy5cbiAqL1xuY29uc3QgdG9BU0NJSSA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdHJldHVybiBtYXBEb21haW4oaW5wdXQsIGZ1bmN0aW9uKHN0cmluZykge1xuXHRcdHJldHVybiByZWdleE5vbkFTQ0lJLnRlc3Qoc3RyaW5nKVxuXHRcdFx0PyAneG4tLScgKyBlbmNvZGUoc3RyaW5nKVxuXHRcdFx0OiBzdHJpbmc7XG5cdH0pO1xufTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qKiBEZWZpbmUgdGhlIHB1YmxpYyBBUEkgKi9cbmNvbnN0IHB1bnljb2RlID0ge1xuXHQvKipcblx0ICogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IFB1bnljb2RlLmpzIHZlcnNpb24gbnVtYmVyLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHR5cGUgU3RyaW5nXG5cdCAqL1xuXHQndmVyc2lvbic6ICcyLjMuMScsXG5cdC8qKlxuXHQgKiBBbiBvYmplY3Qgb2YgbWV0aG9kcyB0byBjb252ZXJ0IGZyb20gSmF2YVNjcmlwdCdzIGludGVybmFsIGNoYXJhY3RlclxuXHQgKiByZXByZXNlbnRhdGlvbiAoVUNTLTIpIHRvIFVuaWNvZGUgY29kZSBwb2ludHMsIGFuZCBiYWNrLlxuXHQgKiBAc2VlIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZz5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEB0eXBlIE9iamVjdFxuXHQgKi9cblx0J3VjczInOiB7XG5cdFx0J2RlY29kZSc6IHVjczJkZWNvZGUsXG5cdFx0J2VuY29kZSc6IHVjczJlbmNvZGVcblx0fSxcblx0J2RlY29kZSc6IGRlY29kZSxcblx0J2VuY29kZSc6IGVuY29kZSxcblx0J3RvQVNDSUknOiB0b0FTQ0lJLFxuXHQndG9Vbmljb2RlJzogdG9Vbmljb2RlXG59O1xuXG5leHBvcnQgeyB1Y3MyZGVjb2RlLCB1Y3MyZW5jb2RlLCBkZWNvZGUsIGVuY29kZSwgdG9BU0NJSSwgdG9Vbmljb2RlIH07XG5leHBvcnQgZGVmYXVsdCBwdW55Y29kZTtcbiIsIi8vIG1hcmtkb3duLWl0IGRlZmF1bHQgb3B0aW9uc1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9wdGlvbnM6IHtcbiAgICAvLyBFbmFibGUgSFRNTCB0YWdzIGluIHNvdXJjZVxuICAgIGh0bWw6IGZhbHNlLFxuXG4gICAgLy8gVXNlICcvJyB0byBjbG9zZSBzaW5nbGUgdGFncyAoPGJyIC8+KVxuICAgIHhodG1sT3V0OiBmYWxzZSxcblxuICAgIC8vIENvbnZlcnQgJ1xcbicgaW4gcGFyYWdyYXBocyBpbnRvIDxicj5cbiAgICBicmVha3M6IGZhbHNlLFxuXG4gICAgLy8gQ1NTIGxhbmd1YWdlIHByZWZpeCBmb3IgZmVuY2VkIGJsb2Nrc1xuICAgIGxhbmdQcmVmaXg6ICdsYW5ndWFnZS0nLFxuXG4gICAgLy8gYXV0b2NvbnZlcnQgVVJMLWxpa2UgdGV4dHMgdG8gbGlua3NcbiAgICBsaW5raWZ5OiBmYWxzZSxcblxuICAgIC8vIEVuYWJsZSBzb21lIGxhbmd1YWdlLW5ldXRyYWwgcmVwbGFjZW1lbnRzICsgcXVvdGVzIGJlYXV0aWZpY2F0aW9uXG4gICAgdHlwb2dyYXBoZXI6IGZhbHNlLFxuXG4gICAgLy8gRG91YmxlICsgc2luZ2xlIHF1b3RlcyByZXBsYWNlbWVudCBwYWlycywgd2hlbiB0eXBvZ3JhcGhlciBlbmFibGVkLFxuICAgIC8vIGFuZCBzbWFydHF1b3RlcyBvbi4gQ291bGQgYmUgZWl0aGVyIGEgU3RyaW5nIG9yIGFuIEFycmF5LlxuICAgIC8vXG4gICAgLy8gRm9yIGV4YW1wbGUsIHlvdSBjYW4gdXNlICfCq8K74oCe4oCcJyBmb3IgUnVzc2lhbiwgJ+KAnuKAnOKAmuKAmCcgZm9yIEdlcm1hbixcbiAgICAvLyBhbmQgWyfCq1xceEEwJywgJ1xceEEwwrsnLCAn4oC5XFx4QTAnLCAnXFx4QTDigLonXSBmb3IgRnJlbmNoIChpbmNsdWRpbmcgbmJzcCkuXG4gICAgcXVvdGVzOiAnXFx1MjAxY1xcdTIwMWRcXHUyMDE4XFx1MjAxOScsIC8qIOKAnOKAneKAmOKAmSAqL1xuXG4gICAgLy8gSGlnaGxpZ2h0ZXIgZnVuY3Rpb24uIFNob3VsZCByZXR1cm4gZXNjYXBlZCBIVE1MLFxuICAgIC8vIG9yICcnIGlmIHRoZSBzb3VyY2Ugc3RyaW5nIGlzIG5vdCBjaGFuZ2VkIGFuZCBzaG91bGQgYmUgZXNjYXBlZCBleHRlcm5hbHkuXG4gICAgLy8gSWYgcmVzdWx0IHN0YXJ0cyB3aXRoIDxwcmUuLi4gaW50ZXJuYWwgd3JhcHBlciBpcyBza2lwcGVkLlxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gKC8qc3RyLCBsYW5nKi8pIHsgcmV0dXJuICcnOyB9XG4gICAgLy9cbiAgICBoaWdobGlnaHQ6IG51bGwsXG5cbiAgICAvLyBJbnRlcm5hbCBwcm90ZWN0aW9uLCByZWN1cnNpb24gbGltaXRcbiAgICBtYXhOZXN0aW5nOiAxMDBcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgY29yZToge30sXG4gICAgYmxvY2s6IHt9LFxuICAgIGlubGluZToge31cbiAgfVxufVxuIiwiLy8gXCJaZXJvXCIgcHJlc2V0LCB3aXRoIG5vdGhpbmcgZW5hYmxlZC4gVXNlZnVsIGZvciBtYW51YWwgY29uZmlndXJpbmcgb2Ygc2ltcGxlXG4vLyBtb2Rlcy4gRm9yIGV4YW1wbGUsIHRvIHBhcnNlIGJvbGQvaXRhbGljIG9ubHkuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb3B0aW9uczoge1xuICAgIC8vIEVuYWJsZSBIVE1MIHRhZ3MgaW4gc291cmNlXG4gICAgaHRtbDogZmFsc2UsXG5cbiAgICAvLyBVc2UgJy8nIHRvIGNsb3NlIHNpbmdsZSB0YWdzICg8YnIgLz4pXG4gICAgeGh0bWxPdXQ6IGZhbHNlLFxuXG4gICAgLy8gQ29udmVydCAnXFxuJyBpbiBwYXJhZ3JhcGhzIGludG8gPGJyPlxuICAgIGJyZWFrczogZmFsc2UsXG5cbiAgICAvLyBDU1MgbGFuZ3VhZ2UgcHJlZml4IGZvciBmZW5jZWQgYmxvY2tzXG4gICAgbGFuZ1ByZWZpeDogJ2xhbmd1YWdlLScsXG5cbiAgICAvLyBhdXRvY29udmVydCBVUkwtbGlrZSB0ZXh0cyB0byBsaW5rc1xuICAgIGxpbmtpZnk6IGZhbHNlLFxuXG4gICAgLy8gRW5hYmxlIHNvbWUgbGFuZ3VhZ2UtbmV1dHJhbCByZXBsYWNlbWVudHMgKyBxdW90ZXMgYmVhdXRpZmljYXRpb25cbiAgICB0eXBvZ3JhcGhlcjogZmFsc2UsXG5cbiAgICAvLyBEb3VibGUgKyBzaW5nbGUgcXVvdGVzIHJlcGxhY2VtZW50IHBhaXJzLCB3aGVuIHR5cG9ncmFwaGVyIGVuYWJsZWQsXG4gICAgLy8gYW5kIHNtYXJ0cXVvdGVzIG9uLiBDb3VsZCBiZSBlaXRoZXIgYSBTdHJpbmcgb3IgYW4gQXJyYXkuXG4gICAgLy9cbiAgICAvLyBGb3IgZXhhbXBsZSwgeW91IGNhbiB1c2UgJ8KrwrvigJ7igJwnIGZvciBSdXNzaWFuLCAn4oCe4oCc4oCa4oCYJyBmb3IgR2VybWFuLFxuICAgIC8vIGFuZCBbJ8KrXFx4QTAnLCAnXFx4QTDCuycsICfigLlcXHhBMCcsICdcXHhBMOKAuiddIGZvciBGcmVuY2ggKGluY2x1ZGluZyBuYnNwKS5cbiAgICBxdW90ZXM6ICdcXHUyMDFjXFx1MjAxZFxcdTIwMThcXHUyMDE5JywgLyog4oCc4oCd4oCY4oCZICovXG5cbiAgICAvLyBIaWdobGlnaHRlciBmdW5jdGlvbi4gU2hvdWxkIHJldHVybiBlc2NhcGVkIEhUTUwsXG4gICAgLy8gb3IgJycgaWYgdGhlIHNvdXJjZSBzdHJpbmcgaXMgbm90IGNoYW5nZWQgYW5kIHNob3VsZCBiZSBlc2NhcGVkIGV4dGVybmFseS5cbiAgICAvLyBJZiByZXN1bHQgc3RhcnRzIHdpdGggPHByZS4uLiBpbnRlcm5hbCB3cmFwcGVyIGlzIHNraXBwZWQuXG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiAoLypzdHIsIGxhbmcqLykgeyByZXR1cm4gJyc7IH1cbiAgICAvL1xuICAgIGhpZ2hsaWdodDogbnVsbCxcblxuICAgIC8vIEludGVybmFsIHByb3RlY3Rpb24sIHJlY3Vyc2lvbiBsaW1pdFxuICAgIG1heE5lc3Rpbmc6IDIwXG4gIH0sXG5cbiAgY29tcG9uZW50czoge1xuXG4gICAgY29yZToge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAgJ25vcm1hbGl6ZScsXG4gICAgICAgICdibG9jaycsXG4gICAgICAgICdpbmxpbmUnLFxuICAgICAgICAndGV4dF9qb2luJ1xuICAgICAgXVxuICAgIH0sXG5cbiAgICBibG9jazoge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAgJ3BhcmFncmFwaCdcbiAgICAgIF1cbiAgICB9LFxuXG4gICAgaW5saW5lOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICAndGV4dCdcbiAgICAgIF0sXG4gICAgICBydWxlczI6IFtcbiAgICAgICAgJ2JhbGFuY2VfcGFpcnMnLFxuICAgICAgICAnZnJhZ21lbnRzX2pvaW4nXG4gICAgICBdXG4gICAgfVxuICB9XG59XG4iLCIvLyBDb21tb25tYXJrIGRlZmF1bHQgb3B0aW9uc1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9wdGlvbnM6IHtcbiAgICAvLyBFbmFibGUgSFRNTCB0YWdzIGluIHNvdXJjZVxuICAgIGh0bWw6IHRydWUsXG5cbiAgICAvLyBVc2UgJy8nIHRvIGNsb3NlIHNpbmdsZSB0YWdzICg8YnIgLz4pXG4gICAgeGh0bWxPdXQ6IHRydWUsXG5cbiAgICAvLyBDb252ZXJ0ICdcXG4nIGluIHBhcmFncmFwaHMgaW50byA8YnI+XG4gICAgYnJlYWtzOiBmYWxzZSxcblxuICAgIC8vIENTUyBsYW5ndWFnZSBwcmVmaXggZm9yIGZlbmNlZCBibG9ja3NcbiAgICBsYW5nUHJlZml4OiAnbGFuZ3VhZ2UtJyxcblxuICAgIC8vIGF1dG9jb252ZXJ0IFVSTC1saWtlIHRleHRzIHRvIGxpbmtzXG4gICAgbGlua2lmeTogZmFsc2UsXG5cbiAgICAvLyBFbmFibGUgc29tZSBsYW5ndWFnZS1uZXV0cmFsIHJlcGxhY2VtZW50cyArIHF1b3RlcyBiZWF1dGlmaWNhdGlvblxuICAgIHR5cG9ncmFwaGVyOiBmYWxzZSxcblxuICAgIC8vIERvdWJsZSArIHNpbmdsZSBxdW90ZXMgcmVwbGFjZW1lbnQgcGFpcnMsIHdoZW4gdHlwb2dyYXBoZXIgZW5hYmxlZCxcbiAgICAvLyBhbmQgc21hcnRxdW90ZXMgb24uIENvdWxkIGJlIGVpdGhlciBhIFN0cmluZyBvciBhbiBBcnJheS5cbiAgICAvL1xuICAgIC8vIEZvciBleGFtcGxlLCB5b3UgY2FuIHVzZSAnwqvCu+KAnuKAnCcgZm9yIFJ1c3NpYW4sICfigJ7igJzigJrigJgnIGZvciBHZXJtYW4sXG4gICAgLy8gYW5kIFsnwqtcXHhBMCcsICdcXHhBMMK7JywgJ+KAuVxceEEwJywgJ1xceEEw4oC6J10gZm9yIEZyZW5jaCAoaW5jbHVkaW5nIG5ic3ApLlxuICAgIHF1b3RlczogJ1xcdTIwMWNcXHUyMDFkXFx1MjAxOFxcdTIwMTknLCAvKiDigJzigJ3igJjigJkgKi9cblxuICAgIC8vIEhpZ2hsaWdodGVyIGZ1bmN0aW9uLiBTaG91bGQgcmV0dXJuIGVzY2FwZWQgSFRNTCxcbiAgICAvLyBvciAnJyBpZiB0aGUgc291cmNlIHN0cmluZyBpcyBub3QgY2hhbmdlZCBhbmQgc2hvdWxkIGJlIGVzY2FwZWQgZXh0ZXJuYWx5LlxuICAgIC8vIElmIHJlc3VsdCBzdGFydHMgd2l0aCA8cHJlLi4uIGludGVybmFsIHdyYXBwZXIgaXMgc2tpcHBlZC5cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uICgvKnN0ciwgbGFuZyovKSB7IHJldHVybiAnJzsgfVxuICAgIC8vXG4gICAgaGlnaGxpZ2h0OiBudWxsLFxuXG4gICAgLy8gSW50ZXJuYWwgcHJvdGVjdGlvbiwgcmVjdXJzaW9uIGxpbWl0XG4gICAgbWF4TmVzdGluZzogMjBcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG5cbiAgICBjb3JlOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICAnbm9ybWFsaXplJyxcbiAgICAgICAgJ2Jsb2NrJyxcbiAgICAgICAgJ2lubGluZScsXG4gICAgICAgICd0ZXh0X2pvaW4nXG4gICAgICBdXG4gICAgfSxcblxuICAgIGJsb2NrOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICAnYmxvY2txdW90ZScsXG4gICAgICAgICdjb2RlJyxcbiAgICAgICAgJ2ZlbmNlJyxcbiAgICAgICAgJ2hlYWRpbmcnLFxuICAgICAgICAnaHInLFxuICAgICAgICAnaHRtbF9ibG9jaycsXG4gICAgICAgICdsaGVhZGluZycsXG4gICAgICAgICdsaXN0JyxcbiAgICAgICAgJ3JlZmVyZW5jZScsXG4gICAgICAgICdwYXJhZ3JhcGgnXG4gICAgICBdXG4gICAgfSxcblxuICAgIGlubGluZToge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAgJ2F1dG9saW5rJyxcbiAgICAgICAgJ2JhY2t0aWNrcycsXG4gICAgICAgICdlbXBoYXNpcycsXG4gICAgICAgICdlbnRpdHknLFxuICAgICAgICAnZXNjYXBlJyxcbiAgICAgICAgJ2h0bWxfaW5saW5lJyxcbiAgICAgICAgJ2ltYWdlJyxcbiAgICAgICAgJ2xpbmsnLFxuICAgICAgICAnbmV3bGluZScsXG4gICAgICAgICd0ZXh0J1xuICAgICAgXSxcbiAgICAgIHJ1bGVzMjogW1xuICAgICAgICAnYmFsYW5jZV9wYWlycycsXG4gICAgICAgICdlbXBoYXNpcycsXG4gICAgICAgICdmcmFnbWVudHNfam9pbidcbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIE1haW4gcGFyc2VyIGNsYXNzXG5cbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vY29tbW9uL3V0aWxzLm1qcydcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzL2luZGV4Lm1qcydcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyLm1qcydcbmltcG9ydCBQYXJzZXJDb3JlIGZyb20gJy4vcGFyc2VyX2NvcmUubWpzJ1xuaW1wb3J0IFBhcnNlckJsb2NrIGZyb20gJy4vcGFyc2VyX2Jsb2NrLm1qcydcbmltcG9ydCBQYXJzZXJJbmxpbmUgZnJvbSAnLi9wYXJzZXJfaW5saW5lLm1qcydcbmltcG9ydCBMaW5raWZ5SXQgZnJvbSAnbGlua2lmeS1pdCdcbmltcG9ydCAqIGFzIG1kdXJsIGZyb20gJ21kdXJsJ1xuaW1wb3J0IHB1bnljb2RlIGZyb20gJ3B1bnljb2RlLmpzJ1xuXG5pbXBvcnQgY2ZnX2RlZmF1bHQgZnJvbSAnLi9wcmVzZXRzL2RlZmF1bHQubWpzJ1xuaW1wb3J0IGNmZ196ZXJvIGZyb20gJy4vcHJlc2V0cy96ZXJvLm1qcydcbmltcG9ydCBjZmdfY29tbW9ubWFyayBmcm9tICcuL3ByZXNldHMvY29tbW9ubWFyay5tanMnXG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgZGVmYXVsdDogY2ZnX2RlZmF1bHQsXG4gIHplcm86IGNmZ196ZXJvLFxuICBjb21tb25tYXJrOiBjZmdfY29tbW9ubWFya1xufVxuXG4vL1xuLy8gVGhpcyB2YWxpZGF0b3IgY2FuIHByb2hpYml0IG1vcmUgdGhhbiByZWFsbHkgbmVlZGVkIHRvIHByZXZlbnQgWFNTLiBJdCdzIGFcbi8vIHRyYWRlb2ZmIHRvIGtlZXAgY29kZSBzaW1wbGUgYW5kIHRvIGJlIHNlY3VyZSBieSBkZWZhdWx0LlxuLy9cbi8vIElmIHlvdSBuZWVkIGRpZmZlcmVudCBzZXR1cCAtIG92ZXJyaWRlIHZhbGlkYXRvciBtZXRob2QgYXMgeW91IHdpc2guIE9yXG4vLyByZXBsYWNlIGl0IHdpdGggZHVtbXkgZnVuY3Rpb24gYW5kIHVzZSBleHRlcm5hbCBzYW5pdGl6ZXIuXG4vL1xuXG5jb25zdCBCQURfUFJPVE9fUkUgPSAvXih2YnNjcmlwdHxqYXZhc2NyaXB0fGZpbGV8ZGF0YSk6L1xuY29uc3QgR09PRF9EQVRBX1JFID0gL15kYXRhOmltYWdlXFwvKGdpZnxwbmd8anBlZ3x3ZWJwKTsvXG5cbmZ1bmN0aW9uIHZhbGlkYXRlTGluayAodXJsKSB7XG4gIC8vIHVybCBzaG91bGQgYmUgbm9ybWFsaXplZCBhdCB0aGlzIHBvaW50LCBhbmQgZXhpc3RpbmcgZW50aXRpZXMgYXJlIGRlY29kZWRcbiAgY29uc3Qgc3RyID0gdXJsLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG5cbiAgcmV0dXJuIEJBRF9QUk9UT19SRS50ZXN0KHN0cikgPyBHT09EX0RBVEFfUkUudGVzdChzdHIpIDogdHJ1ZVxufVxuXG5jb25zdCBSRUNPREVfSE9TVE5BTUVfRk9SID0gWydodHRwOicsICdodHRwczonLCAnbWFpbHRvOiddXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxpbmsgKHVybCkge1xuICBjb25zdCBwYXJzZWQgPSBtZHVybC5wYXJzZSh1cmwsIHRydWUpXG5cbiAgaWYgKHBhcnNlZC5ob3N0bmFtZSkge1xuICAgIC8vIEVuY29kZSBob3N0bmFtZXMgaW4gdXJscyBsaWtlOlxuICAgIC8vIGBodHRwOi8vaG9zdC9gLCBgaHR0cHM6Ly9ob3N0L2AsIGBtYWlsdG86dXNlckBob3N0YCwgYC8vaG9zdC9gXG4gICAgLy9cbiAgICAvLyBXZSBkb24ndCBlbmNvZGUgdW5rbm93biBzY2hlbWFzLCBiZWNhdXNlIGl0J3MgbGlrZWx5IHRoYXQgd2UgZW5jb2RlXG4gICAgLy8gc29tZXRoaW5nIHdlIHNob3VsZG4ndCAoZS5nLiBgc2t5cGU6bmFtZWAgdHJlYXRlZCBhcyBgc2t5cGU6aG9zdGApXG4gICAgLy9cbiAgICBpZiAoIXBhcnNlZC5wcm90b2NvbCB8fCBSRUNPREVfSE9TVE5BTUVfRk9SLmluZGV4T2YocGFyc2VkLnByb3RvY29sKSA+PSAwKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWQuaG9zdG5hbWUgPSBwdW55Y29kZS50b0FTQ0lJKHBhcnNlZC5ob3N0bmFtZSlcbiAgICAgIH0gY2F0Y2ggKGVyKSB7IC8qKi8gfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZHVybC5lbmNvZGUobWR1cmwuZm9ybWF0KHBhcnNlZCkpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxpbmtUZXh0ICh1cmwpIHtcbiAgY29uc3QgcGFyc2VkID0gbWR1cmwucGFyc2UodXJsLCB0cnVlKVxuXG4gIGlmIChwYXJzZWQuaG9zdG5hbWUpIHtcbiAgICAvLyBFbmNvZGUgaG9zdG5hbWVzIGluIHVybHMgbGlrZTpcbiAgICAvLyBgaHR0cDovL2hvc3QvYCwgYGh0dHBzOi8vaG9zdC9gLCBgbWFpbHRvOnVzZXJAaG9zdGAsIGAvL2hvc3QvYFxuICAgIC8vXG4gICAgLy8gV2UgZG9uJ3QgZW5jb2RlIHVua25vd24gc2NoZW1hcywgYmVjYXVzZSBpdCdzIGxpa2VseSB0aGF0IHdlIGVuY29kZVxuICAgIC8vIHNvbWV0aGluZyB3ZSBzaG91bGRuJ3QgKGUuZy4gYHNreXBlOm5hbWVgIHRyZWF0ZWQgYXMgYHNreXBlOmhvc3RgKVxuICAgIC8vXG4gICAgaWYgKCFwYXJzZWQucHJvdG9jb2wgfHwgUkVDT0RFX0hPU1ROQU1FX0ZPUi5pbmRleE9mKHBhcnNlZC5wcm90b2NvbCkgPj0gMCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkLmhvc3RuYW1lID0gcHVueWNvZGUudG9Vbmljb2RlKHBhcnNlZC5ob3N0bmFtZSlcbiAgICAgIH0gY2F0Y2ggKGVyKSB7IC8qKi8gfVxuICAgIH1cbiAgfVxuXG4gIC8vIGFkZCAnJScgdG8gZXhjbHVkZSBsaXN0IGJlY2F1c2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL21hcmtkb3duLWl0L21hcmtkb3duLWl0L2lzc3Vlcy83MjBcbiAgcmV0dXJuIG1kdXJsLmRlY29kZShtZHVybC5mb3JtYXQocGFyc2VkKSwgbWR1cmwuZGVjb2RlLmRlZmF1bHRDaGFycyArICclJylcbn1cblxuLyoqXG4gKiBjbGFzcyBNYXJrZG93bkl0XG4gKlxuICogTWFpbiBwYXJzZXIvcmVuZGVyZXIgY2xhc3MuXG4gKlxuICogIyMjIyMgVXNhZ2VcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiAvLyBub2RlLmpzLCBcImNsYXNzaWNcIiB3YXk6XG4gKiB2YXIgTWFya2Rvd25JdCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0JyksXG4gKiAgICAgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuICogdmFyIHJlc3VsdCA9IG1kLnJlbmRlcignIyBtYXJrZG93bi1pdCBydWxlenohJyk7XG4gKlxuICogLy8gbm9kZS5qcywgdGhlIHNhbWUsIGJ1dCB3aXRoIHN1Z2FyOlxuICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSgpO1xuICogdmFyIHJlc3VsdCA9IG1kLnJlbmRlcignIyBtYXJrZG93bi1pdCBydWxlenohJyk7XG4gKlxuICogLy8gYnJvd3NlciB3aXRob3V0IEFNRCwgYWRkZWQgdG8gXCJ3aW5kb3dcIiBvbiBzY3JpcHQgbG9hZFxuICogLy8gTm90ZSwgdGhlcmUgYXJlIG5vIGRhc2guXG4gKiB2YXIgbWQgPSB3aW5kb3cubWFya2Rvd25pdCgpO1xuICogdmFyIHJlc3VsdCA9IG1kLnJlbmRlcignIyBtYXJrZG93bi1pdCBydWxlenohJyk7XG4gKiBgYGBcbiAqXG4gKiBTaW5nbGUgbGluZSByZW5kZXJpbmcsIHdpdGhvdXQgcGFyYWdyYXBoIHdyYXA6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSgpO1xuICogdmFyIHJlc3VsdCA9IG1kLnJlbmRlcklubGluZSgnX19tYXJrZG93bi1pdF9fIHJ1bGV6eiEnKTtcbiAqIGBgYFxuICoqL1xuXG4vKipcbiAqIG5ldyBNYXJrZG93bkl0KFtwcmVzZXROYW1lLCBvcHRpb25zXSlcbiAqIC0gcHJlc2V0TmFtZSAoU3RyaW5nKTogb3B0aW9uYWwsIGBjb21tb25tYXJrYCAvIGB6ZXJvYFxuICogLSBvcHRpb25zIChPYmplY3QpXG4gKlxuICogQ3JlYXRlcyBwYXJzZXIgaW5zdGFuc2Ugd2l0aCBnaXZlbiBjb25maWcuIENhbiBiZSBjYWxsZWQgd2l0aG91dCBgbmV3YC5cbiAqXG4gKiAjIyMjIyBwcmVzZXROYW1lXG4gKlxuICogTWFya2Rvd25JdCBwcm92aWRlcyBuYW1lZCBwcmVzZXRzIGFzIGEgY29udmVuaWVuY2UgdG8gcXVpY2tseVxuICogZW5hYmxlL2Rpc2FibGUgYWN0aXZlIHN5bnRheCBydWxlcyBhbmQgb3B0aW9ucyBmb3IgY29tbW9uIHVzZSBjYXNlcy5cbiAqXG4gKiAtIFtcImNvbW1vbm1hcmtcIl0oaHR0cHM6Ly9naXRodWIuY29tL21hcmtkb3duLWl0L21hcmtkb3duLWl0L2Jsb2IvbWFzdGVyL2xpYi9wcmVzZXRzL2NvbW1vbm1hcmsubWpzKSAtXG4gKiAgIGNvbmZpZ3VyZXMgcGFyc2VyIHRvIHN0cmljdCBbQ29tbW9uTWFya10oaHR0cDovL2NvbW1vbm1hcmsub3JnLykgbW9kZS5cbiAqIC0gW2RlZmF1bHRdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdC9ibG9iL21hc3Rlci9saWIvcHJlc2V0cy9kZWZhdWx0Lm1qcykgLVxuICogICBzaW1pbGFyIHRvIEdGTSwgdXNlZCB3aGVuIG5vIHByZXNldCBuYW1lIGdpdmVuLiBFbmFibGVzIGFsbCBhdmFpbGFibGUgcnVsZXMsXG4gKiAgIGJ1dCBzdGlsbCB3aXRob3V0IGh0bWwsIHR5cG9ncmFwaGVyICYgYXV0b2xpbmtlci5cbiAqIC0gW1wiemVyb1wiXShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvYmxvYi9tYXN0ZXIvbGliL3ByZXNldHMvemVyby5tanMpIC1cbiAqICAgYWxsIHJ1bGVzIGRpc2FibGVkLiBVc2VmdWwgdG8gcXVpY2tseSBzZXR1cCB5b3VyIGNvbmZpZyB2aWEgYC5lbmFibGUoKWAuXG4gKiAgIEZvciBleGFtcGxlLCB3aGVuIHlvdSBuZWVkIG9ubHkgYGJvbGRgIGFuZCBgaXRhbGljYCBtYXJrdXAgYW5kIG5vdGhpbmcgZWxzZS5cbiAqXG4gKiAjIyMjIyBvcHRpb25zOlxuICpcbiAqIC0gX19odG1sX18gLSBgZmFsc2VgLiBTZXQgYHRydWVgIHRvIGVuYWJsZSBIVE1MIHRhZ3MgaW4gc291cmNlLiBCZSBjYXJlZnVsIVxuICogICBUaGF0J3Mgbm90IHNhZmUhIFlvdSBtYXkgbmVlZCBleHRlcm5hbCBzYW5pdGl6ZXIgdG8gcHJvdGVjdCBvdXRwdXQgZnJvbSBYU1MuXG4gKiAgIEl0J3MgYmV0dGVyIHRvIGV4dGVuZCBmZWF0dXJlcyB2aWEgcGx1Z2lucywgaW5zdGVhZCBvZiBlbmFibGluZyBIVE1MLlxuICogLSBfX3hodG1sT3V0X18gLSBgZmFsc2VgLiBTZXQgYHRydWVgIHRvIGFkZCAnLycgd2hlbiBjbG9zaW5nIHNpbmdsZSB0YWdzXG4gKiAgIChgPGJyIC8+YCkuIFRoaXMgaXMgbmVlZGVkIG9ubHkgZm9yIGZ1bGwgQ29tbW9uTWFyayBjb21wYXRpYmlsaXR5LiBJbiByZWFsXG4gKiAgIHdvcmxkIHlvdSB3aWxsIG5lZWQgSFRNTCBvdXRwdXQuXG4gKiAtIF9fYnJlYWtzX18gLSBgZmFsc2VgLiBTZXQgYHRydWVgIHRvIGNvbnZlcnQgYFxcbmAgaW4gcGFyYWdyYXBocyBpbnRvIGA8YnI+YC5cbiAqIC0gX19sYW5nUHJlZml4X18gLSBgbGFuZ3VhZ2UtYC4gQ1NTIGxhbmd1YWdlIGNsYXNzIHByZWZpeCBmb3IgZmVuY2VkIGJsb2Nrcy5cbiAqICAgQ2FuIGJlIHVzZWZ1bCBmb3IgZXh0ZXJuYWwgaGlnaGxpZ2h0ZXJzLlxuICogLSBfX2xpbmtpZnlfXyAtIGBmYWxzZWAuIFNldCBgdHJ1ZWAgdG8gYXV0b2NvbnZlcnQgVVJMLWxpa2UgdGV4dCB0byBsaW5rcy5cbiAqIC0gX190eXBvZ3JhcGhlcl9fICAtIGBmYWxzZWAuIFNldCBgdHJ1ZWAgdG8gZW5hYmxlIFtzb21lIGxhbmd1YWdlLW5ldXRyYWxcbiAqICAgcmVwbGFjZW1lbnRdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdC9ibG9iL21hc3Rlci9saWIvcnVsZXNfY29yZS9yZXBsYWNlbWVudHMubWpzKSArXG4gKiAgIHF1b3RlcyBiZWF1dGlmaWNhdGlvbiAoc21hcnRxdW90ZXMpLlxuICogLSBfX3F1b3Rlc19fIC0gYOKAnOKAneKAmOKAmWAsIFN0cmluZyBvciBBcnJheS4gRG91YmxlICsgc2luZ2xlIHF1b3RlcyByZXBsYWNlbWVudFxuICogICBwYWlycywgd2hlbiB0eXBvZ3JhcGhlciBlbmFibGVkIGFuZCBzbWFydHF1b3RlcyBvbi4gRm9yIGV4YW1wbGUsIHlvdSBjYW5cbiAqICAgdXNlIGAnwqvCu+KAnuKAnCdgIGZvciBSdXNzaWFuLCBgJ+KAnuKAnOKAmuKAmCdgIGZvciBHZXJtYW4sIGFuZFxuICogICBgWyfCq1xceEEwJywgJ1xceEEwwrsnLCAn4oC5XFx4QTAnLCAnXFx4QTDigLonXWAgZm9yIEZyZW5jaCAoaW5jbHVkaW5nIG5ic3ApLlxuICogLSBfX2hpZ2hsaWdodF9fIC0gYG51bGxgLiBIaWdobGlnaHRlciBmdW5jdGlvbiBmb3IgZmVuY2VkIGNvZGUgYmxvY2tzLlxuICogICBIaWdobGlnaHRlciBgZnVuY3Rpb24gKHN0ciwgbGFuZylgIHNob3VsZCByZXR1cm4gZXNjYXBlZCBIVE1MLiBJdCBjYW4gYWxzb1xuICogICByZXR1cm4gZW1wdHkgc3RyaW5nIGlmIHRoZSBzb3VyY2Ugd2FzIG5vdCBjaGFuZ2VkIGFuZCBzaG91bGQgYmUgZXNjYXBlZFxuICogICBleHRlcm5hbHkuIElmIHJlc3VsdCBzdGFydHMgd2l0aCA8cHJlLi4uIGludGVybmFsIHdyYXBwZXIgaXMgc2tpcHBlZC5cbiAqXG4gKiAjIyMjIyBFeGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogLy8gY29tbW9ubWFyayBtb2RlXG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKCdjb21tb25tYXJrJyk7XG4gKlxuICogLy8gZGVmYXVsdCBtb2RlXG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKCk7XG4gKlxuICogLy8gZW5hYmxlIGV2ZXJ5dGhpbmdcbiAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0Jykoe1xuICogICBodG1sOiB0cnVlLFxuICogICBsaW5raWZ5OiB0cnVlLFxuICogICB0eXBvZ3JhcGhlcjogdHJ1ZVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiAjIyMjIyBTeW50YXggaGlnaGxpZ2h0aW5nXG4gKlxuICogYGBganNcbiAqIHZhciBobGpzID0gcmVxdWlyZSgnaGlnaGxpZ2h0LmpzJykgLy8gaHR0cHM6Ly9oaWdobGlnaHRqcy5vcmcvXG4gKlxuICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSh7XG4gKiAgIGhpZ2hsaWdodDogZnVuY3Rpb24gKHN0ciwgbGFuZykge1xuICogICAgIGlmIChsYW5nICYmIGhsanMuZ2V0TGFuZ3VhZ2UobGFuZykpIHtcbiAqICAgICAgIHRyeSB7XG4gKiAgICAgICAgIHJldHVybiBobGpzLmhpZ2hsaWdodChzdHIsIHsgbGFuZ3VhZ2U6IGxhbmcsIGlnbm9yZUlsbGVnYWxzOiB0cnVlIH0pLnZhbHVlO1xuICogICAgICAgfSBjYXRjaCAoX18pIHt9XG4gKiAgICAgfVxuICpcbiAqICAgICByZXR1cm4gJyc7IC8vIHVzZSBleHRlcm5hbCBkZWZhdWx0IGVzY2FwaW5nXG4gKiAgIH1cbiAqIH0pO1xuICogYGBgXG4gKlxuICogT3Igd2l0aCBmdWxsIHdyYXBwZXIgb3ZlcnJpZGUgKGlmIHlvdSBuZWVkIGFzc2lnbiBjbGFzcyB0byBgPHByZT5gIG9yIGA8Y29kZT5gKTpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgaGxqcyA9IHJlcXVpcmUoJ2hpZ2hsaWdodC5qcycpIC8vIGh0dHBzOi8vaGlnaGxpZ2h0anMub3JnL1xuICpcbiAqIC8vIEFjdHVhbCBkZWZhdWx0IHZhbHVlc1xuICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSh7XG4gKiAgIGhpZ2hsaWdodDogZnVuY3Rpb24gKHN0ciwgbGFuZykge1xuICogICAgIGlmIChsYW5nICYmIGhsanMuZ2V0TGFuZ3VhZ2UobGFuZykpIHtcbiAqICAgICAgIHRyeSB7XG4gKiAgICAgICAgIHJldHVybiAnPHByZT48Y29kZSBjbGFzcz1cImhsanNcIj4nICtcbiAqICAgICAgICAgICAgICAgIGhsanMuaGlnaGxpZ2h0KHN0ciwgeyBsYW5ndWFnZTogbGFuZywgaWdub3JlSWxsZWdhbHM6IHRydWUgfSkudmFsdWUgK1xuICogICAgICAgICAgICAgICAgJzwvY29kZT48L3ByZT4nO1xuICogICAgICAgfSBjYXRjaCAoX18pIHt9XG4gKiAgICAgfVxuICpcbiAqICAgICByZXR1cm4gJzxwcmU+PGNvZGUgY2xhc3M9XCJobGpzXCI+JyArIG1kLnV0aWxzLmVzY2FwZUh0bWwoc3RyKSArICc8L2NvZGU+PC9wcmU+JztcbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiovXG5mdW5jdGlvbiBNYXJrZG93bkl0IChwcmVzZXROYW1lLCBvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNYXJrZG93bkl0KSkge1xuICAgIHJldHVybiBuZXcgTWFya2Rvd25JdChwcmVzZXROYW1lLCBvcHRpb25zKVxuICB9XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgaWYgKCF1dGlscy5pc1N0cmluZyhwcmVzZXROYW1lKSkge1xuICAgICAgb3B0aW9ucyA9IHByZXNldE5hbWUgfHwge31cbiAgICAgIHByZXNldE5hbWUgPSAnZGVmYXVsdCdcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFya2Rvd25JdCNpbmxpbmUgLT4gUGFyc2VySW5saW5lXG4gICAqXG4gICAqIEluc3RhbmNlIG9mIFtbUGFyc2VySW5saW5lXV0uIFlvdSBtYXkgbmVlZCBpdCB0byBhZGQgbmV3IHJ1bGVzIHdoZW5cbiAgICogd3JpdGluZyBwbHVnaW5zLiBGb3Igc2ltcGxlIHJ1bGVzIGNvbnRyb2wgdXNlIFtbTWFya2Rvd25JdC5kaXNhYmxlXV0gYW5kXG4gICAqIFtbTWFya2Rvd25JdC5lbmFibGVdXS5cbiAgICoqL1xuICB0aGlzLmlubGluZSA9IG5ldyBQYXJzZXJJbmxpbmUoKVxuXG4gIC8qKlxuICAgKiBNYXJrZG93bkl0I2Jsb2NrIC0+IFBhcnNlckJsb2NrXG4gICAqXG4gICAqIEluc3RhbmNlIG9mIFtbUGFyc2VyQmxvY2tdXS4gWW91IG1heSBuZWVkIGl0IHRvIGFkZCBuZXcgcnVsZXMgd2hlblxuICAgKiB3cml0aW5nIHBsdWdpbnMuIEZvciBzaW1wbGUgcnVsZXMgY29udHJvbCB1c2UgW1tNYXJrZG93bkl0LmRpc2FibGVdXSBhbmRcbiAgICogW1tNYXJrZG93bkl0LmVuYWJsZV1dLlxuICAgKiovXG4gIHRoaXMuYmxvY2sgPSBuZXcgUGFyc2VyQmxvY2soKVxuXG4gIC8qKlxuICAgKiBNYXJrZG93bkl0I2NvcmUgLT4gQ29yZVxuICAgKlxuICAgKiBJbnN0YW5jZSBvZiBbW0NvcmVdXSBjaGFpbiBleGVjdXRvci4gWW91IG1heSBuZWVkIGl0IHRvIGFkZCBuZXcgcnVsZXMgd2hlblxuICAgKiB3cml0aW5nIHBsdWdpbnMuIEZvciBzaW1wbGUgcnVsZXMgY29udHJvbCB1c2UgW1tNYXJrZG93bkl0LmRpc2FibGVdXSBhbmRcbiAgICogW1tNYXJrZG93bkl0LmVuYWJsZV1dLlxuICAgKiovXG4gIHRoaXMuY29yZSA9IG5ldyBQYXJzZXJDb3JlKClcblxuICAvKipcbiAgICogTWFya2Rvd25JdCNyZW5kZXJlciAtPiBSZW5kZXJlclxuICAgKlxuICAgKiBJbnN0YW5jZSBvZiBbW1JlbmRlcmVyXV0uIFVzZSBpdCB0byBtb2RpZnkgb3V0cHV0IGxvb2suIE9yIHRvIGFkZCByZW5kZXJpbmdcbiAgICogcnVsZXMgZm9yIG5ldyB0b2tlbiB0eXBlcywgZ2VuZXJhdGVkIGJ5IHBsdWdpbnMuXG4gICAqXG4gICAqICMjIyMjIEV4YW1wbGVcbiAgICpcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKCk7XG4gICAqXG4gICAqIGZ1bmN0aW9uIG15VG9rZW4odG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2VsZikge1xuICAgKiAgIC8vLi4uXG4gICAqICAgcmV0dXJuIHJlc3VsdDtcbiAgICogfTtcbiAgICpcbiAgICogbWQucmVuZGVyZXIucnVsZXNbJ215X3Rva2VuJ10gPSBteVRva2VuXG4gICAqIGBgYFxuICAgKlxuICAgKiBTZWUgW1tSZW5kZXJlcl1dIGRvY3MgYW5kIFtzb3VyY2UgY29kZV0oaHR0cHM6Ly9naXRodWIuY29tL21hcmtkb3duLWl0L21hcmtkb3duLWl0L2Jsb2IvbWFzdGVyL2xpYi9yZW5kZXJlci5tanMpLlxuICAgKiovXG4gIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKVxuXG4gIC8qKlxuICAgKiBNYXJrZG93bkl0I2xpbmtpZnkgLT4gTGlua2lmeUl0XG4gICAqXG4gICAqIFtsaW5raWZ5LWl0XShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbGlua2lmeS1pdCkgaW5zdGFuY2UuXG4gICAqIFVzZWQgYnkgW2xpbmtpZnldKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdC9ibG9iL21hc3Rlci9saWIvcnVsZXNfY29yZS9saW5raWZ5Lm1qcylcbiAgICogcnVsZS5cbiAgICoqL1xuICB0aGlzLmxpbmtpZnkgPSBuZXcgTGlua2lmeUl0KClcblxuICAvKipcbiAgICogTWFya2Rvd25JdCN2YWxpZGF0ZUxpbmsodXJsKSAtPiBCb29sZWFuXG4gICAqXG4gICAqIExpbmsgdmFsaWRhdGlvbiBmdW5jdGlvbi4gQ29tbW9uTWFyayBhbGxvd3MgdG9vIG11Y2ggaW4gbGlua3MuIEJ5IGRlZmF1bHRcbiAgICogd2UgZGlzYWJsZSBgamF2YXNjcmlwdDpgLCBgdmJzY3JpcHQ6YCwgYGZpbGU6YCBzY2hlbWFzLCBhbmQgYWxtb3N0IGFsbCBgZGF0YTouLi5gIHNjaGVtYXNcbiAgICogZXhjZXB0IHNvbWUgZW1iZWRkZWQgaW1hZ2UgdHlwZXMuXG4gICAqXG4gICAqIFlvdSBjYW4gY2hhbmdlIHRoaXMgYmVoYXZpb3VyOlxuICAgKlxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0JykoKTtcbiAgICogLy8gZW5hYmxlIGV2ZXJ5dGhpbmdcbiAgICogbWQudmFsaWRhdGVMaW5rID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgKiBgYGBcbiAgICoqL1xuICB0aGlzLnZhbGlkYXRlTGluayA9IHZhbGlkYXRlTGlua1xuXG4gIC8qKlxuICAgKiBNYXJrZG93bkl0I25vcm1hbGl6ZUxpbmsodXJsKSAtPiBTdHJpbmdcbiAgICpcbiAgICogRnVuY3Rpb24gdXNlZCB0byBlbmNvZGUgbGluayB1cmwgdG8gYSBtYWNoaW5lLXJlYWRhYmxlIGZvcm1hdCxcbiAgICogd2hpY2ggaW5jbHVkZXMgdXJsLWVuY29kaW5nLCBwdW55Y29kZSwgZXRjLlxuICAgKiovXG4gIHRoaXMubm9ybWFsaXplTGluayA9IG5vcm1hbGl6ZUxpbmtcblxuICAvKipcbiAgICogTWFya2Rvd25JdCNub3JtYWxpemVMaW5rVGV4dCh1cmwpIC0+IFN0cmluZ1xuICAgKlxuICAgKiBGdW5jdGlvbiB1c2VkIHRvIGRlY29kZSBsaW5rIHVybCB0byBhIGh1bWFuLXJlYWRhYmxlIGZvcm1hdGBcbiAgICoqL1xuICB0aGlzLm5vcm1hbGl6ZUxpbmtUZXh0ID0gbm9ybWFsaXplTGlua1RleHRcblxuICAvLyBFeHBvc2UgdXRpbHMgJiBoZWxwZXJzIGZvciBlYXN5IGFjY2VzIGZyb20gcGx1Z2luc1xuXG4gIC8qKlxuICAgKiBNYXJrZG93bkl0I3V0aWxzIC0+IHV0aWxzXG4gICAqXG4gICAqIEFzc29ydGVkIHV0aWxpdHkgZnVuY3Rpb25zLCB1c2VmdWwgdG8gd3JpdGUgcGx1Z2lucy4gU2VlIGRldGFpbHNcbiAgICogW2hlcmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdC9ibG9iL21hc3Rlci9saWIvY29tbW9uL3V0aWxzLm1qcykuXG4gICAqKi9cbiAgdGhpcy51dGlscyA9IHV0aWxzXG5cbiAgLyoqXG4gICAqIE1hcmtkb3duSXQjaGVscGVycyAtPiBoZWxwZXJzXG4gICAqXG4gICAqIExpbmsgY29tcG9uZW50cyBwYXJzZXIgZnVuY3Rpb25zLCB1c2VmdWwgdG8gd3JpdGUgcGx1Z2lucy4gU2VlIGRldGFpbHNcbiAgICogW2hlcmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdC9ibG9iL21hc3Rlci9saWIvaGVscGVycykuXG4gICAqKi9cbiAgdGhpcy5oZWxwZXJzID0gdXRpbHMuYXNzaWduKHt9LCBoZWxwZXJzKVxuXG4gIHRoaXMub3B0aW9ucyA9IHt9XG4gIHRoaXMuY29uZmlndXJlKHByZXNldE5hbWUpXG5cbiAgaWYgKG9wdGlvbnMpIHsgdGhpcy5zZXQob3B0aW9ucykgfVxufVxuXG4vKiogY2hhaW5hYmxlXG4gKiBNYXJrZG93bkl0LnNldChvcHRpb25zKVxuICpcbiAqIFNldCBwYXJzZXIgb3B0aW9ucyAoaW4gdGhlIHNhbWUgZm9ybWF0IGFzIGluIGNvbnN0cnVjdG9yKS4gUHJvYmFibHksIHlvdVxuICogd2lsbCBuZXZlciBuZWVkIGl0LCBidXQgeW91IGNhbiBjaGFuZ2Ugb3B0aW9ucyBhZnRlciBjb25zdHJ1Y3RvciBjYWxsLlxuICpcbiAqICMjIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKClcbiAqICAgICAgICAgICAgIC5zZXQoeyBodG1sOiB0cnVlLCBicmVha3M6IHRydWUgfSlcbiAqICAgICAgICAgICAgIC5zZXQoeyB0eXBvZ3JhcGhlciwgdHJ1ZSB9KTtcbiAqIGBgYFxuICpcbiAqIF9fTm90ZTpfXyBUbyBhY2hpZXZlIHRoZSBiZXN0IHBvc3NpYmxlIHBlcmZvcm1hbmNlLCBkb24ndCBtb2RpZnkgYVxuICogYG1hcmtkb3duLWl0YCBpbnN0YW5jZSBvcHRpb25zIG9uIHRoZSBmbHkuIElmIHlvdSBuZWVkIG11bHRpcGxlIGNvbmZpZ3VyYXRpb25zXG4gKiBpdCdzIGJlc3QgdG8gY3JlYXRlIG11bHRpcGxlIGluc3RhbmNlcyBhbmQgaW5pdGlhbGl6ZSBlYWNoIHdpdGggc2VwYXJhdGVcbiAqIGNvbmZpZy5cbiAqKi9cbk1hcmtkb3duSXQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHV0aWxzLmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKiBjaGFpbmFibGUsIGludGVybmFsXG4gKiBNYXJrZG93bkl0LmNvbmZpZ3VyZShwcmVzZXRzKVxuICpcbiAqIEJhdGNoIGxvYWQgb2YgYWxsIG9wdGlvbnMgYW5kIGNvbXBlbmVudCBzZXR0aW5ncy4gVGhpcyBpcyBpbnRlcm5hbCBtZXRob2QsXG4gKiBhbmQgeW91IHByb2JhYmx5IHdpbGwgbm90IG5lZWQgaXQuIEJ1dCBpZiB5b3Ugd2lsbCAtIHNlZSBhdmFpbGFibGUgcHJlc2V0c1xuICogYW5kIGRhdGEgc3RydWN0dXJlIFtoZXJlXShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvdHJlZS9tYXN0ZXIvbGliL3ByZXNldHMpXG4gKlxuICogV2Ugc3Ryb25nbHkgcmVjb21tZW5kIHRvIHVzZSBwcmVzZXRzIGluc3RlYWQgb2YgZGlyZWN0IGNvbmZpZyBsb2Fkcy4gVGhhdFxuICogd2lsbCBnaXZlIGJldHRlciBjb21wYXRpYmlsaXR5IHdpdGggbmV4dCB2ZXJzaW9ucy5cbiAqKi9cbk1hcmtkb3duSXQucHJvdG90eXBlLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uIChwcmVzZXRzKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzXG5cbiAgaWYgKHV0aWxzLmlzU3RyaW5nKHByZXNldHMpKSB7XG4gICAgY29uc3QgcHJlc2V0TmFtZSA9IHByZXNldHNcbiAgICBwcmVzZXRzID0gY29uZmlnW3ByZXNldE5hbWVdXG4gICAgaWYgKCFwcmVzZXRzKSB7IHRocm93IG5ldyBFcnJvcignV3JvbmcgYG1hcmtkb3duLWl0YCBwcmVzZXQgXCInICsgcHJlc2V0TmFtZSArICdcIiwgY2hlY2sgbmFtZScpIH1cbiAgfVxuXG4gIGlmICghcHJlc2V0cykgeyB0aHJvdyBuZXcgRXJyb3IoJ1dyb25nIGBtYXJrZG93bi1pdGAgcHJlc2V0LCBjYW5cXCd0IGJlIGVtcHR5JykgfVxuXG4gIGlmIChwcmVzZXRzLm9wdGlvbnMpIHsgc2VsZi5zZXQocHJlc2V0cy5vcHRpb25zKSB9XG5cbiAgaWYgKHByZXNldHMuY29tcG9uZW50cykge1xuICAgIE9iamVjdC5rZXlzKHByZXNldHMuY29tcG9uZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgaWYgKHByZXNldHMuY29tcG9uZW50c1tuYW1lXS5ydWxlcykge1xuICAgICAgICBzZWxmW25hbWVdLnJ1bGVyLmVuYWJsZU9ubHkocHJlc2V0cy5jb21wb25lbnRzW25hbWVdLnJ1bGVzKVxuICAgICAgfVxuICAgICAgaWYgKHByZXNldHMuY29tcG9uZW50c1tuYW1lXS5ydWxlczIpIHtcbiAgICAgICAgc2VsZltuYW1lXS5ydWxlcjIuZW5hYmxlT25seShwcmVzZXRzLmNvbXBvbmVudHNbbmFtZV0ucnVsZXMyKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqIGNoYWluYWJsZVxuICogTWFya2Rvd25JdC5lbmFibGUobGlzdCwgaWdub3JlSW52YWxpZClcbiAqIC0gbGlzdCAoU3RyaW5nfEFycmF5KTogcnVsZSBuYW1lIG9yIGxpc3Qgb2YgcnVsZSBuYW1lcyB0byBlbmFibGVcbiAqIC0gaWdub3JlSW52YWxpZCAoQm9vbGVhbik6IHNldCBgdHJ1ZWAgdG8gaWdub3JlIGVycm9ycyB3aGVuIHJ1bGUgbm90IGZvdW5kLlxuICpcbiAqIEVuYWJsZSBsaXN0IG9yIHJ1bGVzLiBJdCB3aWxsIGF1dG9tYXRpY2FsbHkgZmluZCBhcHByb3ByaWF0ZSBjb21wb25lbnRzLFxuICogY29udGFpbmluZyBydWxlcyB3aXRoIGdpdmVuIG5hbWVzLiBJZiBydWxlIG5vdCBmb3VuZCwgYW5kIGBpZ25vcmVJbnZhbGlkYFxuICogbm90IHNldCAtIHRocm93cyBleGNlcHRpb24uXG4gKlxuICogIyMjIyMgRXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0JykoKVxuICogICAgICAgICAgICAgLmVuYWJsZShbJ3N1YicsICdzdXAnXSlcbiAqICAgICAgICAgICAgIC5kaXNhYmxlKCdzbWFydHF1b3RlcycpO1xuICogYGBgXG4gKiovXG5NYXJrZG93bkl0LnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAobGlzdCwgaWdub3JlSW52YWxpZCkge1xuICBsZXQgcmVzdWx0ID0gW11cblxuICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkpIHsgbGlzdCA9IFtsaXN0XSB9XG5cbiAgWydjb3JlJywgJ2Jsb2NrJywgJ2lubGluZSddLmZvckVhY2goZnVuY3Rpb24gKGNoYWluKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzW2NoYWluXS5ydWxlci5lbmFibGUobGlzdCwgdHJ1ZSkpXG4gIH0sIHRoaXMpXG5cbiAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzLmlubGluZS5ydWxlcjIuZW5hYmxlKGxpc3QsIHRydWUpKVxuXG4gIGNvbnN0IG1pc3NlZCA9IGxpc3QuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiByZXN1bHQuaW5kZXhPZihuYW1lKSA8IDAgfSlcblxuICBpZiAobWlzc2VkLmxlbmd0aCAmJiAhaWdub3JlSW52YWxpZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWFya2Rvd25JdC4gRmFpbGVkIHRvIGVuYWJsZSB1bmtub3duIHJ1bGUocyk6ICcgKyBtaXNzZWQpXG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vKiogY2hhaW5hYmxlXG4gKiBNYXJrZG93bkl0LmRpc2FibGUobGlzdCwgaWdub3JlSW52YWxpZClcbiAqIC0gbGlzdCAoU3RyaW5nfEFycmF5KTogcnVsZSBuYW1lIG9yIGxpc3Qgb2YgcnVsZSBuYW1lcyB0byBkaXNhYmxlLlxuICogLSBpZ25vcmVJbnZhbGlkIChCb29sZWFuKTogc2V0IGB0cnVlYCB0byBpZ25vcmUgZXJyb3JzIHdoZW4gcnVsZSBub3QgZm91bmQuXG4gKlxuICogVGhlIHNhbWUgYXMgW1tNYXJrZG93bkl0LmVuYWJsZV1dLCBidXQgdHVybiBzcGVjaWZpZWQgcnVsZXMgb2ZmLlxuICoqL1xuTWFya2Rvd25JdC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uIChsaXN0LCBpZ25vcmVJbnZhbGlkKSB7XG4gIGxldCByZXN1bHQgPSBbXVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkgeyBsaXN0ID0gW2xpc3RdIH1cblxuICBbJ2NvcmUnLCAnYmxvY2snLCAnaW5saW5lJ10uZm9yRWFjaChmdW5jdGlvbiAoY2hhaW4pIHtcbiAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHRoaXNbY2hhaW5dLnJ1bGVyLmRpc2FibGUobGlzdCwgdHJ1ZSkpXG4gIH0sIHRoaXMpXG5cbiAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzLmlubGluZS5ydWxlcjIuZGlzYWJsZShsaXN0LCB0cnVlKSlcblxuICBjb25zdCBtaXNzZWQgPSBsaXN0LmZpbHRlcihmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gcmVzdWx0LmluZGV4T2YobmFtZSkgPCAwIH0pXG5cbiAgaWYgKG1pc3NlZC5sZW5ndGggJiYgIWlnbm9yZUludmFsaWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01hcmtkb3duSXQuIEZhaWxlZCB0byBkaXNhYmxlIHVua25vd24gcnVsZShzKTogJyArIG1pc3NlZClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG4vKiogY2hhaW5hYmxlXG4gKiBNYXJrZG93bkl0LnVzZShwbHVnaW4sIHBhcmFtcylcbiAqXG4gKiBMb2FkIHNwZWNpZmllZCBwbHVnaW4gd2l0aCBnaXZlbiBwYXJhbXMgaW50byBjdXJyZW50IHBhcnNlciBpbnN0YW5jZS5cbiAqIEl0J3MganVzdCBhIHN1Z2FyIHRvIGNhbGwgYHBsdWdpbihtZCwgcGFyYW1zKWAgd2l0aCBjdXJyaW5nLlxuICpcbiAqICMjIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgaXRlcmF0b3IgPSByZXF1aXJlKCdtYXJrZG93bi1pdC1mb3ItaW5saW5lJyk7XG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKClcbiAqICAgICAgICAgICAgIC51c2UoaXRlcmF0b3IsICdmb29fcmVwbGFjZScsICd0ZXh0JywgZnVuY3Rpb24gKHRva2VucywgaWR4KSB7XG4gKiAgICAgICAgICAgICAgIHRva2Vuc1tpZHhdLmNvbnRlbnQgPSB0b2tlbnNbaWR4XS5jb250ZW50LnJlcGxhY2UoL2Zvby9nLCAnYmFyJyk7XG4gKiAgICAgICAgICAgICB9KTtcbiAqIGBgYFxuICoqL1xuTWFya2Rvd25JdC5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKHBsdWdpbiAvKiwgcGFyYW1zLCAuLi4gKi8pIHtcbiAgY29uc3QgYXJncyA9IFt0aGlzXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSlcbiAgcGx1Z2luLmFwcGx5KHBsdWdpbiwgYXJncylcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqIGludGVybmFsXG4gKiBNYXJrZG93bkl0LnBhcnNlKHNyYywgZW52KSAtPiBBcnJheVxuICogLSBzcmMgKFN0cmluZyk6IHNvdXJjZSBzdHJpbmdcbiAqIC0gZW52IChPYmplY3QpOiBlbnZpcm9ubWVudCBzYW5kYm94XG4gKlxuICogUGFyc2UgaW5wdXQgc3RyaW5nIGFuZCByZXR1cm4gbGlzdCBvZiBibG9jayB0b2tlbnMgKHNwZWNpYWwgdG9rZW4gdHlwZVxuICogXCJpbmxpbmVcIiB3aWxsIGNvbnRhaW4gbGlzdCBvZiBpbmxpbmUgdG9rZW5zKS4gWW91IHNob3VsZCBub3QgY2FsbCB0aGlzXG4gKiBtZXRob2QgZGlyZWN0bHksIHVudGlsIHlvdSB3cml0ZSBjdXN0b20gcmVuZGVyZXIgKGZvciBleGFtcGxlLCB0byBwcm9kdWNlXG4gKiBBU1QpLlxuICpcbiAqIGBlbnZgIGlzIHVzZWQgdG8gcGFzcyBkYXRhIGJldHdlZW4gXCJkaXN0cmlidXRlZFwiIHJ1bGVzIGFuZCByZXR1cm4gYWRkaXRpb25hbFxuICogbWV0YWRhdGEgbGlrZSByZWZlcmVuY2UgaW5mbywgbmVlZGVkIGZvciB0aGUgcmVuZGVyZXIuIEl0IGFsc28gY2FuIGJlIHVzZWQgdG9cbiAqIGluamVjdCBkYXRhIGluIHNwZWNpZmljIGNhc2VzLiBVc3VhbGx5LCB5b3Ugd2lsbCBiZSBvayB0byBwYXNzIGB7fWAsXG4gKiBhbmQgdGhlbiBwYXNzIHVwZGF0ZWQgb2JqZWN0IHRvIHJlbmRlcmVyLlxuICoqL1xuTWFya2Rvd25JdC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoc3JjLCBlbnYpIHtcbiAgaWYgKHR5cGVvZiBzcmMgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnB1dCBkYXRhIHNob3VsZCBiZSBhIFN0cmluZycpXG4gIH1cblxuICBjb25zdCBzdGF0ZSA9IG5ldyB0aGlzLmNvcmUuU3RhdGUoc3JjLCB0aGlzLCBlbnYpXG5cbiAgdGhpcy5jb3JlLnByb2Nlc3Moc3RhdGUpXG5cbiAgcmV0dXJuIHN0YXRlLnRva2Vuc1xufVxuXG4vKipcbiAqIE1hcmtkb3duSXQucmVuZGVyKHNyYyBbLCBlbnZdKSAtPiBTdHJpbmdcbiAqIC0gc3JjIChTdHJpbmcpOiBzb3VyY2Ugc3RyaW5nXG4gKiAtIGVudiAoT2JqZWN0KTogZW52aXJvbm1lbnQgc2FuZGJveFxuICpcbiAqIFJlbmRlciBtYXJrZG93biBzdHJpbmcgaW50byBodG1sLiBJdCBkb2VzIGFsbCBtYWdpYyBmb3IgeW91IDopLlxuICpcbiAqIGBlbnZgIGNhbiBiZSB1c2VkIHRvIGluamVjdCBhZGRpdGlvbmFsIG1ldGFkYXRhIChge31gIGJ5IGRlZmF1bHQpLlxuICogQnV0IHlvdSB3aWxsIG5vdCBuZWVkIGl0IHdpdGggaGlnaCBwcm9iYWJpbGl0eS4gU2VlIGFsc28gY29tbWVudFxuICogaW4gW1tNYXJrZG93bkl0LnBhcnNlXV0uXG4gKiovXG5NYXJrZG93bkl0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoc3JjLCBlbnYpIHtcbiAgZW52ID0gZW52IHx8IHt9XG5cbiAgcmV0dXJuIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMucGFyc2Uoc3JjLCBlbnYpLCB0aGlzLm9wdGlvbnMsIGVudilcbn1cblxuLyoqIGludGVybmFsXG4gKiBNYXJrZG93bkl0LnBhcnNlSW5saW5lKHNyYywgZW52KSAtPiBBcnJheVxuICogLSBzcmMgKFN0cmluZyk6IHNvdXJjZSBzdHJpbmdcbiAqIC0gZW52IChPYmplY3QpOiBlbnZpcm9ubWVudCBzYW5kYm94XG4gKlxuICogVGhlIHNhbWUgYXMgW1tNYXJrZG93bkl0LnBhcnNlXV0gYnV0IHNraXAgYWxsIGJsb2NrIHJ1bGVzLiBJdCByZXR1cm5zIHRoZVxuICogYmxvY2sgdG9rZW5zIGxpc3Qgd2l0aCB0aGUgc2luZ2xlIGBpbmxpbmVgIGVsZW1lbnQsIGNvbnRhaW5pbmcgcGFyc2VkIGlubGluZVxuICogdG9rZW5zIGluIGBjaGlsZHJlbmAgcHJvcGVydHkuIEFsc28gdXBkYXRlcyBgZW52YCBvYmplY3QuXG4gKiovXG5NYXJrZG93bkl0LnByb3RvdHlwZS5wYXJzZUlubGluZSA9IGZ1bmN0aW9uIChzcmMsIGVudikge1xuICBjb25zdCBzdGF0ZSA9IG5ldyB0aGlzLmNvcmUuU3RhdGUoc3JjLCB0aGlzLCBlbnYpXG5cbiAgc3RhdGUuaW5saW5lTW9kZSA9IHRydWVcbiAgdGhpcy5jb3JlLnByb2Nlc3Moc3RhdGUpXG5cbiAgcmV0dXJuIHN0YXRlLnRva2Vuc1xufVxuXG4vKipcbiAqIE1hcmtkb3duSXQucmVuZGVySW5saW5lKHNyYyBbLCBlbnZdKSAtPiBTdHJpbmdcbiAqIC0gc3JjIChTdHJpbmcpOiBzb3VyY2Ugc3RyaW5nXG4gKiAtIGVudiAoT2JqZWN0KTogZW52aXJvbm1lbnQgc2FuZGJveFxuICpcbiAqIFNpbWlsYXIgdG8gW1tNYXJrZG93bkl0LnJlbmRlcl1dIGJ1dCBmb3Igc2luZ2xlIHBhcmFncmFwaCBjb250ZW50LiBSZXN1bHRcbiAqIHdpbGwgTk9UIGJlIHdyYXBwZWQgaW50byBgPHA+YCB0YWdzLlxuICoqL1xuTWFya2Rvd25JdC5wcm90b3R5cGUucmVuZGVySW5saW5lID0gZnVuY3Rpb24gKHNyYywgZW52KSB7XG4gIGVudiA9IGVudiB8fCB7fVxuXG4gIHJldHVybiB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnBhcnNlSW5saW5lKHNyYywgZW52KSwgdGhpcy5vcHRpb25zLCBlbnYpXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtkb3duSXRcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtbGF5b3V0IHZpZXc9XCJsSGggTHByIGxGZlwiPlxuICAgIDxxLWhlYWRlcj5cbiAgICAgIDxxLXRvb2xiYXIgOmNsYXNzPVwieyAnYmctZGVlcC1vcmFuZ2UnOiBpc0RldigpIH1cIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBpY29uPVwibWVudVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIk1lbnVcIlxuICAgICAgICAgIEBjbGljaz1cInRvZ2dsZUxlZnREcmF3ZXJcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGU+IFBLU3RhdHVzIDwvcS10b29sYmFyLXRpdGxlPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHEtYnRuIGZsYXQgdG89XCIvZGVidWdcIiBzdHlsZT1cInRleHQtdHJhbnNmb3JtOiBub25lXCI+XG4gICAgICAgICAgICA8cS1pY29uIHYtaWY9XCJpc0RldigpXCIgbmFtZT1cIndhcm5pbmdcIiAvPlxuICAgICAgICAgICAge3sgdmVyc2lvbiB9fVxuICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9xLXRvb2xiYXI+XG4gICAgPC9xLWhlYWRlcj5cblxuICAgIDxxLWRyYXdlclxuICAgICAgdi1tb2RlbD1cImxlZnREcmF3ZXJPcGVuXCJcbiAgICAgIGNsYXNzPVwicm93IGNvbHVtbiBqdXN0aWZ5LWJldHdlZW5cIlxuICAgICAgc2hvdy1pZi1hYm92ZVxuICAgICAgYm9yZGVyZWRcbiAgICA+XG4gICAgICA8cS1saXN0IGNsYXNzPVwiY29sLWF1dG9cIj5cbiAgICAgICAgPHEtaXRlbS1sYWJlbCBoZWFkZXI+UGFnZXM8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdG89XCIvc3RhdHVzXCI+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgIDxxLWljb24gbmFtZT1cInBlb3BsZVwiIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cblxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+U3RhdHVzPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+U2hvdyBzeXN0ZW0gc3RhdHVzZXM8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdG89XCIvc3dpdGNoXCI+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgIDxxLWljb24gbmFtZT1cInN3YXBfaG9yaXpcIiAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPlN3aXRjaDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPlJlZ2lzdGVyIGEgc3dpdGNoPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHRvPVwiL2xvb2t1cFwiPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJzZWFyY2hcIiAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPkxvb2t1cDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPkxvb2sgdXAgYSBzeXN0ZW0gb3IgYWx0ZXI8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICA8cS1zZXBhcmF0b3Igc3BhY2VkIC8+XG4gICAgICAgIDxxLWl0ZW0tbGFiZWwgaGVhZGVyPlNldHRpbmdzPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHRvPVwiL21hbmFnZVwiPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJtYW5hZ2VfYWNjb3VudHNcIiAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPlN5c3RlbXM8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj5NYW5hZ2UgdHJhY2tlZCBzeXN0ZW1zPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHRvPVwiL3NldHRpbmdzXCI+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgIDxxLWljb24gbmFtZT1cInNldHRpbmdzXCIgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuXG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5HZW5lcmFsPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+T3RoZXIgU2V0dGluZ3M8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICA8cS1zZXBhcmF0b3Igc3BhY2VkIC8+XG4gICAgICAgIDxxLWl0ZW0tbGFiZWwgaGVhZGVyPk90aGVyPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIEBjbGljaz1cIm9wZW5Qcm9qZWN0UGFnZVwiPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJvcGVuX2luX25ld1wiIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cblxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+R2l0SHViPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+UHJvamVjdCBwYWdlPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICA8L3EtbGlzdD5cbiAgICAgIDxxLWxpc3QgY2xhc3M9XCJjb2wtYXV0b1wiPlxuICAgICAgICA8cS1zZXBhcmF0b3Igc3BhY2VkIC8+XG4gICAgICAgIDxxLWl0ZW0gdGFnPVwibGFiZWxcIj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPkRhcmsgTW9kZTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgIDxxLXRvZ2dsZVxuICAgICAgICAgICAgICB2LW1vZGVsPVwiZGFya1wiXG4gICAgICAgICAgICAgIGNoZWNrZWQtaWNvbj1cImRhcmtfbW9kZVwiXG4gICAgICAgICAgICAgIHVuY2hlY2tlZC1pY29uPVwibGlnaHRfbW9kZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuICAgICAgPC9xLWxpc3Q+XG4gICAgPC9xLWRyYXdlcj5cblxuICAgIDxxLXBhZ2UtY29udGFpbmVyPlxuICAgICAgPHEtZGlhbG9nIHYtaWY9XCJuZXdWZXJzaW9uXCIgdi1tb2RlbD1cInVwZGF0ZURpYWxvZ09wZW5cIiBmdWxsLWhlaWdodD5cbiAgICAgICAgPHEtY2FyZCBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgIDxxLWl0ZW0gY2xhc3M9XCJiZy1wb3NpdGl2ZSB0ZXh0LXdoaXRlIGNvbC1hdXRvXCI+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICA8cS1pY29uIHNpemU9XCI0OHB4XCIgbmFtZT1cImJyb3dzZXJfdXBkYXRlZFwiIC8+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPk5ldyBWZXJzaW9uIEF2YWlsYWJsZSA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGNsYXNzPVwidGV4dC13aGl0ZVwiPnt7XG4gICAgICAgICAgICAgICAgbmV3VmVyc2lvbi52ZXJzaW9uXG4gICAgICAgICAgICAgIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICAgIDxxLWJ0biB2LWNsb3NlLXBvcHVwIGljb249XCJjbG9zZVwiIGNsYXNzPVwidGV4dC13aGl0ZVwiIGZsYXQgcm91bmQgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwiY29sIG92ZXJmbG93LWF1dG9cIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJjaGFuZ2Vsb2dcIlxuICAgICAgICAgICAgICB2LWh0bWw9XCJtYXJrZG93bml0KHsgaHRtbDogZmFsc2UgfSkucmVuZGVyKG5ld1ZlcnNpb24uY2hhbmdlbG9nKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgPHEtY2FyZC1hY3Rpb25zIGNsYXNzPVwiY29sLWF1dG9cIiBhbGlnbj1cImJldHdlZW5cIj5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICBpY29uPVwiZG93bmxvYWRcIlxuICAgICAgICAgICAgICBsYWJlbD1cImRvd25sb2FkXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwb3NpdGl2ZVwiXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgQGNsaWNrPVwiZG93bmxvYWRVcGRhdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICBpY29uPVwiZG9fbm90X2Rpc3R1cmJfb25cIlxuICAgICAgICAgICAgICBsYWJlbD1cInNraXAgdGhpcyB2ZXJzaW9uXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgQGNsaWNrPVwic2tpcFVwZGF0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIGljb249XCJjbG9zZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiaWdub3JlXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJuZWdhdGl2ZVwiXG4gICAgICAgICAgICAgIHNxdWFyZVxuICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgIEBjbGljaz1cInVwZGF0ZURpYWxvZ09wZW4gPSBmYWxzZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgICAgIDwvcS1jYXJkPlxuICAgICAgPC9xLWRpYWxvZz5cbiAgICAgIDxyb3V0ZXItdmlldyAvPlxuICAgIDwvcS1wYWdlLWNvbnRhaW5lcj5cbiAgPC9xLWxheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCBtYXJrZG93bml0IGZyb20gJ21hcmtkb3duLWl0JztcblxuaW1wb3J0IHsgaG9tZXBhZ2UgfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgdXNlU2V0dGluZ3NTdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc2V0dGluZ3Mtc3RvcmUnO1xuaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSc7XG5pbXBvcnQgeyB1c2VRdWFzYXIgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgVXBkYXRlSW5mbyB9IGZyb20gJ3NyYy9saWIvY2hlY2stdXBkYXRlJztcbmltcG9ydCB7IGdldFZlcnNpb24sIGlzRGV2IH0gZnJvbSAnc3JjL3V0aWwnO1xuXG5jb25zdCBzZXR0aW5ncyA9IHVzZVNldHRpbmdzU3RvcmUoKTtcbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5cbmNvbnN0IGxlZnREcmF3ZXJPcGVuID0gcmVmKGZhbHNlKTtcbmNvbnN0IHsgZGFyaywgaWdub3JlVmVyc2lvbiB9ID0gc3RvcmVUb1JlZnMoc2V0dGluZ3MpO1xuY29uc3QgdmVyc2lvbiA9IGdldFZlcnNpb24oKTtcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7IG5ld1ZlcnNpb246IFVwZGF0ZUluZm8gfCBudWxsIH0+KCk7XG5jb25zdCB1cGRhdGVEaWFsb2dPcGVuID0gcmVmKCEhcHJvcHMubmV3VmVyc2lvbik7XG53YXRjaChcbiAgKCkgPT4gcHJvcHMubmV3VmVyc2lvbixcbiAgKG5ld1ZhbCkgPT4ge1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHVwZGF0ZURpYWxvZ09wZW4udmFsdWUgPSB0cnVlO1xuICAgIH1cbiAgfSxcbik7XG5cbmZ1bmN0aW9uIHRvZ2dsZUxlZnREcmF3ZXIoKSB7XG4gIGxlZnREcmF3ZXJPcGVuLnZhbHVlID0gIWxlZnREcmF3ZXJPcGVuLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBza2lwVXBkYXRlKCkge1xuICBpZiAoIXByb3BzLm5ld1ZlcnNpb24pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZ25vcmVWZXJzaW9uLnZhbHVlID0gcHJvcHMubmV3VmVyc2lvbi52ZXJzaW9uO1xuICB1cGRhdGVEaWFsb2dPcGVuLnZhbHVlID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGRvd25sb2FkVXBkYXRlKCkge1xuICBpZiAoIXByb3BzLm5ld1ZlcnNpb24pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoJHEucGxhdGZvcm0uaXMuZWxlY3Ryb24pIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICgod2luZG93IGFzIGFueSkuUEtTdGF0dXNBcGkgYXMgYW55KS5vcGVuVXJsKFxuICAgICAgcHJvcHMubmV3VmVyc2lvbi5hc3NldHMud2luZG93cyA/PyBwcm9wcy5uZXdWZXJzaW9uLnVybCxcbiAgICApO1xuICB9IGVsc2UgaWYgKCRxLnBsYXRmb3JtLmlzLmFuZHJvaWQpIHtcbiAgICBvcGVuKHByb3BzLm5ld1ZlcnNpb24uYXNzZXRzLmFuZHJvaWQgPz8gcHJvcHMubmV3VmVyc2lvbi51cmwsICdfYmxhbmsnKTtcbiAgfSBlbHNlIHtcbiAgICBvcGVuKHByb3BzLm5ld1ZlcnNpb24udXJsLCAnX2JsYW5rJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3BlblByb2plY3RQYWdlKCkge1xuICBpZiAoJHEucGxhdGZvcm0uaXMuZWxlY3Ryb24pIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICgod2luZG93IGFzIGFueSkuUEtTdGF0dXNBcGkgYXMgYW55KS5vcGVuUHJvamVjdFBhZ2UoKTtcbiAgfSBlbHNlIHtcbiAgICBvcGVuKGhvbWVwYWdlLCAnX2JsYW5rJyk7XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cImNzc1wiPlxuLmNoYW5nZWxvZyBoMSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC1zaXplOiA0OHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmNoYW5nZWxvZyBoMiB7XG4gIGZvbnQtc2l6ZTogMzZweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5jaGFuZ2Vsb2cgaDMge1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5jaGFuZ2Vsb2cgdWwge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4uY2hhbmdlbG9nIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJvZmZzZXQiLCJzdHlsZSIsInNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsImRlY29kZSIsImVuY29kZSIsImNvZGUiLCJmcm9tQ29kZVBvaW50IiwiX2EiLCJDaGFyQ29kZXMiLCJCaW5UcmllRmxhZ3MiLCJFbnRpdHlEZWNvZGVyU3RhdGUiLCJEZWNvZGluZ01vZGUiLCJlcnJvcnMiLCJiYXNlIiwiX2NsYXNzIiwiaXNTdHJpbmciLCJhc3NpZ24iLCJtYXRjaCIsImVudGl0eSIsImVzY2FwZVJFIiwidWNtaWNyby5QIiwidWNtaWNyby5TIiwibGlzdCIsImlzTGlua09wZW4iLCJpc0xpbmtDbG9zZSIsImxpbmtpZnkiLCJ0ZXh0IiwiX3J1bGVzIiwicl9ub3JtYWxpemUiLCJyX2Jsb2NrIiwicl9pbmxpbmUiLCJyX2xpbmtpZnkiLCJyX3JlcGxhY2VtZW50cyIsInJfc21hcnRxdW90ZXMiLCJyX3RleHRfam9pbiIsIm5leHRMaW5lIiwicG9zIiwibWF4Iiwicl90YWJsZSIsInJfY29kZSIsInJfZmVuY2UiLCJyX2Jsb2NrcXVvdGUiLCJyX2hyIiwicl9saXN0Iiwicl9yZWZlcmVuY2UiLCJyX2h0bWxfYmxvY2siLCJyX2hlYWRpbmciLCJyX2xoZWFkaW5nIiwicl9wYXJhZ3JhcGgiLCJsaW5rIiwicG9zdFByb2Nlc3MiLCJyZWYiLCJyX3RleHQiLCJyX25ld2xpbmUiLCJyX2VzY2FwZSIsInJfYmFja3RpY2tzIiwicl9saW5rIiwicl9pbWFnZSIsInJfYXV0b2xpbmsiLCJyX2h0bWxfaW5saW5lIiwicl9lbnRpdHkiLCJyX2JhbGFuY2VfcGFpcnMiLCJyX2ZyYWdtZW50c19qb2luIiwidGxkcyIsIm5vcm1hbGl6ZSIsIm1kdXJsLnBhcnNlIiwibWR1cmwuZW5jb2RlIiwibWR1cmwuZm9ybWF0IiwibWR1cmwuZGVjb2RlIiwidXRpbHMuaXNTdHJpbmciLCJQYXJzZXJDb3JlIiwidXRpbHMuYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7OztBQUtBLE1BQUEsZ0JBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Q7QUFBQSxFQUVELE1BQU8sT0FBTyxFQUFFLFNBQVM7QUFDdkIsVUFBTSxVQUFVO0FBQUEsTUFBUyxNQUN2QiwrQkFDRyxNQUFNLFdBQVcsT0FBTyxnQkFBZ0I7QUFBQSxJQUM1QztBQUVELFdBQU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLFFBQVEsTUFBSyxHQUFJLE1BQU0sTUFBTSxPQUFPLENBQUM7QUFBQSxFQUNyRTtBQUNILENBQUM7QUNaRCxNQUFBLFVBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsWUFBWTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUNELFFBQVE7QUFBQSxJQUNSLGNB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O0FBQUEsSUFDRjtBQUVBLGFBQVMsa0JBQWtCO0FBQ3JCLFVBQUEsR0FBRyxTQUFTLEdBQUcsVUFBVTtBQUV6QixlQUFlLFlBQW9CO01BQWdCLE9BQ2hEO0FBQ0wsYUFBSyxVQUFVLFFBQVE7QUFBQSxNQUN6QjtBQUFBLElBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsMTksMjAsMjEsMjIsMjMsMjQsMjUsMjYsMjcsMjgsMjksMzAsMzEsMzIsMzMsMzQsMzUsMzYsMzcsMzgsMzksNDAsNDEsNDIsNDMsNDQsNDUsNDYsNDcsNDgsNDksNTAsNTEsNTIsNTMsNTQsNTUsNTYsNTcsNTgsNTksNjAsNjEsNjIsNjMsNjQsNjUsNjYsNjcsNjgsNjksNzAsNzEsNzIsNzMsNzRdfQ==
