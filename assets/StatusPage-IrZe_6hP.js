import { Q as QPage } from "./QPage-C2tXGOnV.js";
import { i as inject, f as emptyRenderFn, g as getCurrentInstance, r as ref, d as computed, o as onBeforeUnmount, t as onMounted, ag as tabsKey, x as withDirectives, ah as Ripple, h, ai as stopAndPrevent, P as isKeyCode, aj as shouldIgnoreKey, a3 as QIcon, L as hMergeSlot, ak as isDeepEqual, al as uid, c as createComponent, am as useRouterLinkProps, an as useRouterLink, w as watch, ao as useTick, p as useTimeout, A as provide, ap as onDeactivated, aq as onActivated, e as hSlot, H as isRuntimeSsrPreHydration, l as layoutKey, n as useDark, ar as isNumber, as as isObject, k as useDarkProps, at as useFormProps, au as position, y as hDir, av as useFormInject, aw as useFormAttrs, ax as useBtnProps, ay as useTransitionProps, az as useId, aA as getBtnDesignAttr, a0 as QBtn, aB as stop, Q as defineComponent, R as useSettingsStore, V as openBlock, W as createBlock, X as withCtx, Y as createVNode, a1 as createTextVNode, _ as unref, a6 as QSeparator, a7 as QToggle, af as _export_sfc, aC as useServices, T as storeToRefs, aD as useSystemStore, U as resolveComponent, aE as createElementBlock, aF as Fragment, a4 as createCommentVNode } from "./index-C1u-_TOv.js";
import { Q as QResizeObserver, T as TouchPan, a as QToolbar } from "./TouchPan-24hdsJ-m.js";
import { r as rtlHasScrollBug, Q as QMenu } from "./QMenu-CRzTXqO9.js";
import { a as QItem, b as QItemSection, Q as QItemLabel } from "./QItem-4sCyJUzG.js";
import { Q as QBtnToggle } from "./QBtnToggle-me-EbXoi.js";
import { b as between } from "./format-esB8TFiE.js";
import { Q as QList } from "./QList-DQhRiMIt.js";
import { Q as QBtnGroup } from "./QBtnGroup-CFYXjxkf.js";
let id = 0;
const useTabEmits = ["click", "keydown"];
const useTabProps = {
  icon: String,
  label: [Number, String],
  alert: [Boolean, String],
  alertIcon: String,
  name: {
    type: [Number, String],
    default: () => `t_${id++}`
  },
  noCaps: Boolean,
  tabindex: [String, Number],
  disable: Boolean,
  contentClass: String,
  ripple: {
    type: [Boolean, Object],
    default: true
  }
};
function useTab(props, slots, emit, routeData) {
  const $tabs = inject(tabsKey, emptyRenderFn);
  if ($tabs === emptyRenderFn) {
    console.error("QTab/QRouteTab component needs to be child of QTabs");
    return emptyRenderFn;
  }
  const { proxy } = getCurrentInstance();
  const blurTargetRef = ref(null);
  const rootRef = ref(null);
  const tabIndicatorRef = ref(null);
  const ripple = computed(() => props.disable === true || props.ripple === false ? false : Object.assign(
    { keyCodes: [13, 32], early: true },
    props.ripple === true ? {} : props.ripple
  ));
  const isActive = computed(() => $tabs.currentModel.value === props.name);
  const classes = computed(
    () => "q-tab relative-position self-stretch flex flex-center text-center" + (isActive.value === true ? " q-tab--active" + ($tabs.tabProps.value.activeClass ? " " + $tabs.tabProps.value.activeClass : "") + ($tabs.tabProps.value.activeColor ? ` text-${$tabs.tabProps.value.activeColor}` : "") + ($tabs.tabProps.value.activeBgColor ? ` bg-${$tabs.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (props.icon && props.label && $tabs.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (props.noCaps === true || $tabs.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (props.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (routeData !== void 0 ? routeData.linkClass.value : "")
  );
  const innerClass = computed(
    () => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + ($tabs.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "")
  );
  const tabIndex = computed(() => props.disable === true || $tabs.hasFocus.value === true || isActive.value === false && $tabs.hasActiveTab.value === true ? -1 : props.tabindex || 0);
  function onClick(e, keyboard) {
    if (keyboard !== true && blurTargetRef.value !== null) {
      blurTargetRef.value.focus();
    }
    if (props.disable === true) {
      if (routeData !== void 0 && routeData.hasRouterLink.value === true) {
        stopAndPrevent(e);
      }
      return;
    }
    if (routeData === void 0) {
      $tabs.updateModel({ name: props.name });
      emit("click", e);
      return;
    }
    if (routeData.hasRouterLink.value === true) {
      const go = (opts = {}) => {
        let hardError;
        const reqId = opts.to === void 0 || isDeepEqual(opts.to, props.to) === true ? $tabs.avoidRouteWatcher = uid() : null;
        return routeData.navigateToRouterLink(e, { ...opts, returnRouterError: true }).catch((err) => {
          hardError = err;
        }).then((softError) => {
          if (reqId === $tabs.avoidRouteWatcher) {
            $tabs.avoidRouteWatcher = false;
            if (hardError === void 0 && (softError === void 0 || softError.message !== void 0 && softError.message.startsWith("Avoided redundant navigation") === true)) {
              $tabs.updateModel({ name: props.name });
            }
          }
          if (opts.returnRouterError === true) {
            return hardError !== void 0 ? Promise.reject(hardError) : softError;
          }
        });
      };
      emit("click", e, go);
      e.defaultPrevented !== true && go();
      return;
    }
    emit("click", e);
  }
  function onKeydown(e) {
    if (isKeyCode(e, [13, 32])) {
      onClick(e, true);
    } else if (shouldIgnoreKey(e) !== true && e.keyCode >= 35 && e.keyCode <= 40 && e.altKey !== true && e.metaKey !== true) {
      $tabs.onKbdNavigate(e.keyCode, proxy.$el) === true && stopAndPrevent(e);
    }
    emit("keydown", e);
  }
  function getContent() {
    const narrow = $tabs.tabProps.value.narrowIndicator, content = [], indicator = h("div", {
      ref: tabIndicatorRef,
      class: [
        "q-tab__indicator",
        $tabs.tabProps.value.indicatorClass
      ]
    });
    props.icon !== void 0 && content.push(
      h(QIcon, {
        class: "q-tab__icon",
        name: props.icon
      })
    );
    props.label !== void 0 && content.push(
      h("div", { class: "q-tab__label" }, props.label)
    );
    props.alert !== false && content.push(
      props.alertIcon !== void 0 ? h(QIcon, {
        class: "q-tab__alert-icon",
        color: props.alert !== true ? props.alert : void 0,
        name: props.alertIcon
      }) : h("div", {
        class: "q-tab__alert" + (props.alert !== true ? ` text-${props.alert}` : "")
      })
    );
    narrow === true && content.push(indicator);
    const node = [
      h("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef }),
      h("div", { class: innerClass.value }, hMergeSlot(slots.default, content))
    ];
    narrow === false && node.push(indicator);
    return node;
  }
  const tabData = {
    name: computed(() => props.name),
    rootRef,
    tabIndicatorRef,
    routeData
  };
  onBeforeUnmount(() => {
    $tabs.unregisterTab(tabData);
  });
  onMounted(() => {
    $tabs.registerTab(tabData);
  });
  function renderTab(tag, customData) {
    const data = {
      ref: rootRef,
      class: classes.value,
      tabindex: tabIndex.value,
      role: "tab",
      "aria-selected": isActive.value === true ? "true" : "false",
      "aria-disabled": props.disable === true ? "true" : void 0,
      onClick,
      onKeydown,
      ...customData
    };
    return withDirectives(
      h(tag, data, getContent()),
      [[Ripple, ripple.value]]
    );
  }
  return { renderTab, $tabs };
}
const QRouteTab = createComponent({
  name: "QRouteTab",
  props: {
    ...useRouterLinkProps,
    ...useTabProps
  },
  emits: useTabEmits,
  setup(props, { slots, emit }) {
    const routeData = useRouterLink({
      useDisableForRouterLinkProps: false
    });
    const { renderTab, $tabs } = useTab(
      props,
      slots,
      emit,
      {
        exact: computed(() => props.exact),
        ...routeData
      }
    );
    watch(() => `${props.name} | ${props.exact} | ${(routeData.resolvedLink.value || {}).href}`, () => {
      $tabs.verifyRouteModel();
    });
    return () => renderTab(routeData.linkTag.value, routeData.linkAttrs.value);
  }
});
function getIndicatorClass(color, top, vertical) {
  const pos = vertical === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${top === true ? pos[0] : pos[1]}${color ? ` text-${color}` : ""}`;
}
const alignValues = ["left", "center", "right", "justify"];
const QTabs = createComponent({
  name: "QTabs",
  props: {
    modelValue: [Number, String],
    align: {
      type: String,
      default: "center",
      validator: (v) => alignValues.includes(v)
    },
    breakpoint: {
      type: [String, Number],
      default: 600
    },
    vertical: Boolean,
    shrink: Boolean,
    stretch: Boolean,
    activeClass: String,
    activeColor: String,
    activeBgColor: String,
    indicatorColor: String,
    leftIcon: String,
    rightIcon: String,
    outsideArrows: Boolean,
    mobileArrows: Boolean,
    switchIndicator: Boolean,
    narrowIndicator: Boolean,
    inlineLabel: Boolean,
    noCaps: Boolean,
    dense: Boolean,
    contentClass: String,
    "onUpdate:modelValue": [Function, Array]
  },
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const { registerTick: registerScrollTick } = useTick();
    const { registerTick: registerUpdateArrowsTick } = useTick();
    const { registerTick: registerAnimateTick } = useTick();
    const { registerTimeout: registerFocusTimeout, removeTimeout: removeFocusTimeout } = useTimeout();
    const { registerTimeout: registerScrollToTabTimeout, removeTimeout: removeScrollToTabTimeout } = useTimeout();
    const rootRef = ref(null);
    const contentRef = ref(null);
    const currentModel = ref(props.modelValue);
    const scrollable = ref(false);
    const leftArrow = ref(true);
    const rightArrow = ref(false);
    const justify = ref(false);
    const tabDataList = [];
    const tabDataListLen = ref(0);
    const hasFocus = ref(false);
    let animateTimer = null, scrollTimer = null, unwatchRoute;
    const tabProps = computed(() => ({
      activeClass: props.activeClass,
      activeColor: props.activeColor,
      activeBgColor: props.activeBgColor,
      indicatorClass: getIndicatorClass(
        props.indicatorColor,
        props.switchIndicator,
        props.vertical
      ),
      narrowIndicator: props.narrowIndicator,
      inlineLabel: props.inlineLabel,
      noCaps: props.noCaps
    }));
    const hasActiveTab = computed(() => {
      const len = tabDataListLen.value;
      const val = currentModel.value;
      for (let i = 0; i < len; i++) {
        if (tabDataList[i].name.value === val) {
          return true;
        }
      }
      return false;
    });
    const alignClass = computed(() => {
      const align = scrollable.value === true ? "left" : justify.value === true ? "justify" : props.align;
      return `q-tabs__content--align-${align}`;
    });
    const classes = computed(
      () => `q-tabs row no-wrap items-center q-tabs--${scrollable.value === true ? "" : "not-"}scrollable q-tabs--${props.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${props.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${props.mobileArrows === true ? "" : "out"}-arrows` + (props.dense === true ? " q-tabs--dense" : "") + (props.shrink === true ? " col-shrink" : "") + (props.stretch === true ? " self-stretch" : "")
    );
    const innerClass = computed(
      () => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + alignClass.value + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "")
    );
    const domProps = computed(() => props.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" });
    const isRTL = computed(() => props.vertical !== true && $q.lang.rtl === true);
    const rtlPosCorrection = computed(() => rtlHasScrollBug === false && isRTL.value === true);
    watch(isRTL, updateArrows);
    watch(() => props.modelValue, (name) => {
      updateModel({ name, setCurrent: true, skipEmit: true });
    });
    watch(() => props.outsideArrows, recalculateScroll);
    function updateModel({ name, setCurrent, skipEmit }) {
      if (currentModel.value !== name) {
        if (skipEmit !== true && props["onUpdate:modelValue"] !== void 0) {
          emit("update:modelValue", name);
        }
        if (setCurrent === true || props["onUpdate:modelValue"] === void 0) {
          animate(currentModel.value, name);
          currentModel.value = name;
        }
      }
    }
    function recalculateScroll() {
      registerScrollTick(() => {
        updateContainer({
          width: rootRef.value.offsetWidth,
          height: rootRef.value.offsetHeight
        });
      });
    }
    function updateContainer(domSize) {
      if (domProps.value === void 0 || contentRef.value === null)
        return;
      const size = domSize[domProps.value.container], scrollSize = Math.min(
        contentRef.value[domProps.value.scroll],
        Array.prototype.reduce.call(
          contentRef.value.children,
          (acc, el) => acc + (el[domProps.value.content] || 0),
          0
        )
      ), scroll = size > 0 && scrollSize > size;
      scrollable.value = scroll;
      scroll === true && registerUpdateArrowsTick(updateArrows);
      justify.value = size < parseInt(props.breakpoint, 10);
    }
    function animate(oldName, newName) {
      const oldTab = oldName !== void 0 && oldName !== null && oldName !== "" ? tabDataList.find((tab) => tab.name.value === oldName) : null, newTab = newName !== void 0 && newName !== null && newName !== "" ? tabDataList.find((tab) => tab.name.value === newName) : null;
      if (oldTab && newTab) {
        const oldEl = oldTab.tabIndicatorRef.value, newEl = newTab.tabIndicatorRef.value;
        if (animateTimer !== null) {
          clearTimeout(animateTimer);
          animateTimer = null;
        }
        oldEl.style.transition = "none";
        oldEl.style.transform = "none";
        newEl.style.transition = "none";
        newEl.style.transform = "none";
        const oldPos = oldEl.getBoundingClientRect(), newPos = newEl.getBoundingClientRect();
        newEl.style.transform = props.vertical === true ? `translate3d(0,${oldPos.top - newPos.top}px,0) scale3d(1,${newPos.height ? oldPos.height / newPos.height : 1},1)` : `translate3d(${oldPos.left - newPos.left}px,0,0) scale3d(${newPos.width ? oldPos.width / newPos.width : 1},1,1)`;
        registerAnimateTick(() => {
          animateTimer = setTimeout(() => {
            animateTimer = null;
            newEl.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)";
            newEl.style.transform = "none";
          }, 70);
        });
      }
      if (newTab && scrollable.value === true) {
        scrollToTabEl(newTab.rootRef.value);
      }
    }
    function scrollToTabEl(el) {
      const { left, width, top, height } = contentRef.value.getBoundingClientRect(), newPos = el.getBoundingClientRect();
      let offset = props.vertical === true ? newPos.top - top : newPos.left - left;
      if (offset < 0) {
        contentRef.value[props.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(offset);
        updateArrows();
        return;
      }
      offset += props.vertical === true ? newPos.height - height : newPos.width - width;
      if (offset > 0) {
        contentRef.value[props.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(offset);
        updateArrows();
      }
    }
    function updateArrows() {
      const content = contentRef.value;
      if (content === null)
        return;
      const rect = content.getBoundingClientRect(), pos = props.vertical === true ? content.scrollTop : Math.abs(content.scrollLeft);
      if (isRTL.value === true) {
        leftArrow.value = Math.ceil(pos + rect.width) < content.scrollWidth - 1;
        rightArrow.value = pos > 0;
      } else {
        leftArrow.value = pos > 0;
        rightArrow.value = props.vertical === true ? Math.ceil(pos + rect.height) < content.scrollHeight : Math.ceil(pos + rect.width) < content.scrollWidth;
      }
    }
    function animScrollTo(value) {
      scrollTimer !== null && clearInterval(scrollTimer);
      scrollTimer = setInterval(() => {
        if (scrollTowards(value) === true) {
          stopAnimScroll();
        }
      }, 5);
    }
    function scrollToStart() {
      animScrollTo(rtlPosCorrection.value === true ? Number.MAX_SAFE_INTEGER : 0);
    }
    function scrollToEnd() {
      animScrollTo(rtlPosCorrection.value === true ? 0 : Number.MAX_SAFE_INTEGER);
    }
    function stopAnimScroll() {
      if (scrollTimer !== null) {
        clearInterval(scrollTimer);
        scrollTimer = null;
      }
    }
    function onKbdNavigate(keyCode, fromEl) {
      const tabs = Array.prototype.filter.call(
        contentRef.value.children,
        (el) => el === fromEl || el.matches && el.matches(".q-tab.q-focusable") === true
      );
      const len = tabs.length;
      if (len === 0)
        return;
      if (keyCode === 36) {
        scrollToTabEl(tabs[0]);
        tabs[0].focus();
        return true;
      }
      if (keyCode === 35) {
        scrollToTabEl(tabs[len - 1]);
        tabs[len - 1].focus();
        return true;
      }
      const dirPrev = keyCode === (props.vertical === true ? 38 : 37);
      const dirNext = keyCode === (props.vertical === true ? 40 : 39);
      const dir = dirPrev === true ? -1 : dirNext === true ? 1 : void 0;
      if (dir !== void 0) {
        const rtlDir = isRTL.value === true ? -1 : 1;
        const index = tabs.indexOf(fromEl) + dir * rtlDir;
        if (index >= 0 && index < len) {
          scrollToTabEl(tabs[index]);
          tabs[index].focus({ preventScroll: true });
        }
        return true;
      }
    }
    const posFn = computed(() => rtlPosCorrection.value === true ? { get: (content) => Math.abs(content.scrollLeft), set: (content, pos) => {
      content.scrollLeft = -pos;
    } } : props.vertical === true ? { get: (content) => content.scrollTop, set: (content, pos) => {
      content.scrollTop = pos;
    } } : { get: (content) => content.scrollLeft, set: (content, pos) => {
      content.scrollLeft = pos;
    } });
    function scrollTowards(value) {
      const content = contentRef.value, { get, set } = posFn.value;
      let done = false, pos = get(content);
      const direction = value < pos ? -1 : 1;
      pos += direction * 5;
      if (pos < 0) {
        done = true;
        pos = 0;
      } else if (direction === -1 && pos <= value || direction === 1 && pos >= value) {
        done = true;
        pos = value;
      }
      set(content, pos);
      updateArrows();
      return done;
    }
    function hasQueryIncluded(targetQuery, matchingQuery) {
      for (const key in targetQuery) {
        if (targetQuery[key] !== matchingQuery[key]) {
          return false;
        }
      }
      return true;
    }
    function updateActiveRoute() {
      let name = null, bestScore = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
      const list = tabDataList.filter((tab) => tab.routeData !== void 0 && tab.routeData.hasRouterLink.value === true);
      const { hash: currentHash, query: currentQuery } = proxy.$route;
      const currentQueryLen = Object.keys(currentQuery).length;
      for (const tab of list) {
        const exact = tab.routeData.exact.value === true;
        if (tab.routeData[exact === true ? "linkIsExactActive" : "linkIsActive"].value !== true) {
          continue;
        }
        const { hash, query, matched, href } = tab.routeData.resolvedLink.value;
        const queryLen = Object.keys(query).length;
        if (exact === true) {
          if (hash !== currentHash) {
            continue;
          }
          if (queryLen !== currentQueryLen || hasQueryIncluded(currentQuery, query) === false) {
            continue;
          }
          name = tab.name.value;
          break;
        }
        if (hash !== "" && hash !== currentHash) {
          continue;
        }
        if (queryLen !== 0 && hasQueryIncluded(query, currentQuery) === false) {
          continue;
        }
        const newScore = {
          matchedLen: matched.length,
          queryDiff: currentQueryLen - queryLen,
          hrefLen: href.length - hash.length
        };
        if (newScore.matchedLen > bestScore.matchedLen) {
          name = tab.name.value;
          bestScore = newScore;
          continue;
        } else if (newScore.matchedLen !== bestScore.matchedLen) {
          continue;
        }
        if (newScore.queryDiff < bestScore.queryDiff) {
          name = tab.name.value;
          bestScore = newScore;
        } else if (newScore.queryDiff !== bestScore.queryDiff) {
          continue;
        }
        if (newScore.hrefLen > bestScore.hrefLen) {
          name = tab.name.value;
          bestScore = newScore;
        }
      }
      if (name === null && tabDataList.some((tab) => tab.routeData === void 0 && tab.name.value === currentModel.value) === true) {
        return;
      }
      updateModel({ name, setCurrent: true });
    }
    function onFocusin(e) {
      removeFocusTimeout();
      if (hasFocus.value !== true && rootRef.value !== null && e.target && typeof e.target.closest === "function") {
        const tab = e.target.closest(".q-tab");
        if (tab && rootRef.value.contains(tab) === true) {
          hasFocus.value = true;
          scrollable.value === true && scrollToTabEl(tab);
        }
      }
    }
    function onFocusout() {
      registerFocusTimeout(() => {
        hasFocus.value = false;
      }, 30);
    }
    function verifyRouteModel() {
      if ($tabs.avoidRouteWatcher === false) {
        registerScrollToTabTimeout(updateActiveRoute);
      } else {
        removeScrollToTabTimeout();
      }
    }
    function watchRoute() {
      if (unwatchRoute === void 0) {
        const unwatch = watch(() => proxy.$route.fullPath, verifyRouteModel);
        unwatchRoute = () => {
          unwatch();
          unwatchRoute = void 0;
        };
      }
    }
    function registerTab(tabData) {
      tabDataList.push(tabData);
      tabDataListLen.value++;
      recalculateScroll();
      if (tabData.routeData === void 0 || proxy.$route === void 0) {
        registerScrollToTabTimeout(() => {
          if (scrollable.value === true) {
            const value = currentModel.value;
            const newTab = value !== void 0 && value !== null && value !== "" ? tabDataList.find((tab) => tab.name.value === value) : null;
            newTab && scrollToTabEl(newTab.rootRef.value);
          }
        });
      } else {
        watchRoute();
        if (tabData.routeData.hasRouterLink.value === true) {
          verifyRouteModel();
        }
      }
    }
    function unregisterTab(tabData) {
      tabDataList.splice(tabDataList.indexOf(tabData), 1);
      tabDataListLen.value--;
      recalculateScroll();
      if (unwatchRoute !== void 0 && tabData.routeData !== void 0) {
        if (tabDataList.every((tab) => tab.routeData === void 0) === true) {
          unwatchRoute();
        }
        verifyRouteModel();
      }
    }
    const $tabs = {
      currentModel,
      tabProps,
      hasFocus,
      hasActiveTab,
      registerTab,
      unregisterTab,
      verifyRouteModel,
      updateModel,
      onKbdNavigate,
      avoidRouteWatcher: false
      // false | string (uid)
    };
    provide(tabsKey, $tabs);
    function cleanup() {
      animateTimer !== null && clearTimeout(animateTimer);
      stopAnimScroll();
      unwatchRoute !== void 0 && unwatchRoute();
    }
    let hadRouteWatcher;
    onBeforeUnmount(cleanup);
    onDeactivated(() => {
      hadRouteWatcher = unwatchRoute !== void 0;
      cleanup();
    });
    onActivated(() => {
      hadRouteWatcher === true && watchRoute();
      recalculateScroll();
    });
    return () => {
      return h("div", {
        ref: rootRef,
        class: classes.value,
        role: "tablist",
        onFocusin,
        onFocusout
      }, [
        h(QResizeObserver, { onResize: updateContainer }),
        h("div", {
          ref: contentRef,
          class: innerClass.value,
          onScroll: updateArrows
        }, hSlot(slots.default)),
        h(QIcon, {
          class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (leftArrow.value === true ? "" : " q-tabs__arrow--faded"),
          name: props.leftIcon || $q.iconSet.tabs[props.vertical === true ? "up" : "left"],
          onMousedownPassive: scrollToStart,
          onTouchstartPassive: scrollToStart,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        }),
        h(QIcon, {
          class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (rightArrow.value === true ? "" : " q-tabs__arrow--faded"),
          name: props.rightIcon || $q.iconSet.tabs[props.vertical === true ? "down" : "right"],
          onMousedownPassive: scrollToEnd,
          onTouchstartPassive: scrollToEnd,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        })
      ]);
    };
  }
});
const space = h("div", { class: "q-space" });
const QSpace = createComponent({
  name: "QSpace",
  setup() {
    return () => space;
  }
});
const QFooter = createComponent({
  name: "QFooter",
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
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
      console.error("QFooter needs to be child of QLayout");
      return emptyRenderFn;
    }
    const size = ref(parseInt(props.heightHint, 10));
    const revealed = ref(true);
    const windowHeight = ref(
      isRuntimeSsrPreHydration.value === true || $layout.isContainer.value === true ? 0 : window.innerHeight
    );
    const fixed = computed(
      () => props.reveal === true || $layout.view.value.indexOf("F") !== -1 || $q.platform.is.ios && $layout.isContainer.value === true
    );
    const containerHeight = computed(() => $layout.isContainer.value === true ? $layout.containerHeight.value : windowHeight.value);
    const offset = computed(() => {
      if (props.modelValue !== true) {
        return 0;
      }
      if (fixed.value === true) {
        return revealed.value === true ? size.value : 0;
      }
      const offset2 = $layout.scroll.value.position + containerHeight.value + size.value - $layout.height.value;
      return offset2 > 0 ? offset2 : 0;
    });
    const hidden = computed(
      () => props.modelValue !== true || fixed.value === true && revealed.value !== true
    );
    const revealOnFocus = computed(
      () => props.modelValue === true && hidden.value === true && props.reveal === true
    );
    const classes = computed(
      () => "q-footer q-layout__section--marginal " + (fixed.value === true ? "fixed" : "absolute") + "-bottom" + (props.bordered === true ? " q-footer--bordered" : "") + (hidden.value === true ? " q-footer--hidden" : "") + (props.modelValue !== true ? " q-layout--prevent-focus" + (fixed.value !== true ? " hidden" : "") : "")
    );
    const style = computed(() => {
      const view = $layout.rows.value.bottom, css = {};
      if (view[0] === "l" && $layout.left.space === true) {
        css[$q.lang.rtl === true ? "right" : "left"] = `${$layout.left.size}px`;
      }
      if (view[2] === "r" && $layout.right.space === true) {
        css[$q.lang.rtl === true ? "left" : "right"] = `${$layout.right.size}px`;
      }
      return css;
    });
    function updateLayout(prop, val) {
      $layout.update("footer", prop, val);
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
    function updateRevealed() {
      if (props.reveal !== true)
        return;
      const { direction, position: position2, inflectionPoint } = $layout.scroll.value;
      updateLocal(revealed, direction === "up" || position2 - inflectionPoint < 100 || $layout.height.value - containerHeight.value - position2 - size.value < 300);
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
    watch([size, $layout.scroll, $layout.height], updateRevealed);
    watch(() => $q.screen.height, (val) => {
      $layout.isContainer.value !== true && updateLocal(windowHeight, val);
    });
    const instance = {};
    $layout.instances.footer = instance;
    props.modelValue === true && updateLayout("size", size.value);
    updateLayout("space", props.modelValue);
    updateLayout("offset", offset.value);
    onBeforeUnmount(() => {
      if ($layout.instances.footer === instance) {
        $layout.instances.footer = void 0;
        updateLayout("size", 0);
        updateLayout("offset", 0);
        updateLayout("space", false);
      }
    });
    return () => {
      const child = hMergeSlot(slots.default, [
        h(QResizeObserver, {
          debounce: 0,
          onResize
        })
      ]);
      props.elevated === true && child.push(
        h("div", {
          class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
        })
      );
      return h("footer", {
        class: classes.value,
        style: style.value,
        onFocusin
      }, child);
    };
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
  hideSelection: Boolean,
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
      if (!keyCodes.includes(evt.keyCode)) {
        return;
      }
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
const btnPropsList = Object.keys(useBtnProps);
const passBtnProps = (props) => btnPropsList.reduce(
  (acc, key) => {
    const val = props[key];
    if (val !== void 0) {
      acc[key] = val;
    }
    return acc;
  },
  {}
);
const QBtnDropdown = createComponent({
  name: "QBtnDropdown",
  props: {
    ...useBtnProps,
    ...useTransitionProps,
    modelValue: Boolean,
    split: Boolean,
    dropdownIcon: String,
    contentClass: [Array, String, Object],
    contentStyle: [Array, String, Object],
    cover: Boolean,
    persistent: Boolean,
    noRouteDismiss: Boolean,
    autoClose: Boolean,
    menuAnchor: {
      type: String,
      default: "bottom end"
    },
    menuSelf: {
      type: String,
      default: "top end"
    },
    menuOffset: Array,
    disableMainBtn: Boolean,
    disableDropdown: Boolean,
    noIconAnimation: Boolean,
    toggleAriaLabel: String
  },
  emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const showing = ref(props.modelValue);
    const menuRef = ref(null);
    const targetUid = useId();
    const ariaAttrs = computed(() => {
      const acc = {
        "aria-expanded": showing.value === true ? "true" : "false",
        "aria-haspopup": "true",
        "aria-controls": targetUid.value,
        "aria-label": props.toggleAriaLabel || proxy.$q.lang.label[showing.value === true ? "collapse" : "expand"](props.label)
      };
      if (props.disable === true || (props.split === false && props.disableMainBtn === true || props.disableDropdown === true)) {
        acc["aria-disabled"] = "true";
      }
      return acc;
    });
    const iconClass = computed(
      () => "q-btn-dropdown__arrow" + (showing.value === true && props.noIconAnimation === false ? " rotate-180" : "") + (props.split === false ? " q-btn-dropdown__arrow-container" : "")
    );
    const btnDesignAttr = computed(() => getBtnDesignAttr(props));
    const btnProps = computed(() => passBtnProps(props));
    watch(() => props.modelValue, (val) => {
      menuRef.value !== null && menuRef.value[val ? "show" : "hide"]();
    });
    watch(() => props.split, hide);
    function onBeforeShow(e) {
      showing.value = true;
      emit("beforeShow", e);
    }
    function onShow(e) {
      emit("show", e);
      emit("update:modelValue", true);
    }
    function onBeforeHide(e) {
      showing.value = false;
      emit("beforeHide", e);
    }
    function onHide(e) {
      emit("hide", e);
      emit("update:modelValue", false);
    }
    function onClick(e) {
      emit("click", e);
    }
    function onClickHide(e) {
      stop(e);
      hide();
      emit("click", e);
    }
    function toggle(evt) {
      menuRef.value !== null && menuRef.value.toggle(evt);
    }
    function show(evt) {
      menuRef.value !== null && menuRef.value.show(evt);
    }
    function hide(evt) {
      menuRef.value !== null && menuRef.value.hide(evt);
    }
    Object.assign(proxy, {
      show,
      hide,
      toggle
    });
    onMounted(() => {
      props.modelValue === true && show();
    });
    return () => {
      const Arrow = [
        h(QIcon, {
          class: iconClass.value,
          name: props.dropdownIcon || proxy.$q.iconSet.arrow.dropdown
        })
      ];
      props.disableDropdown !== true && Arrow.push(
        h(QMenu, {
          ref: menuRef,
          id: targetUid.value,
          class: props.contentClass,
          style: props.contentStyle,
          cover: props.cover,
          fit: true,
          persistent: props.persistent,
          noRouteDismiss: props.noRouteDismiss,
          autoClose: props.autoClose,
          anchor: props.menuAnchor,
          self: props.menuSelf,
          offset: props.menuOffset,
          separateClosePopup: true,
          transitionShow: props.transitionShow,
          transitionHide: props.transitionHide,
          transitionDuration: props.transitionDuration,
          onBeforeShow,
          onShow,
          onBeforeHide,
          onHide
        }, slots.default)
      );
      if (props.split === false) {
        return h(QBtn, {
          class: "q-btn-dropdown q-btn-dropdown--simple",
          ...btnProps.value,
          ...ariaAttrs.value,
          disable: props.disable === true || props.disableMainBtn === true,
          noWrap: true,
          round: false,
          onClick
        }, {
          default: () => hSlot(slots.label, []).concat(Arrow),
          loading: slots.loading
        });
      }
      return h(QBtnGroup, {
        class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",
        rounded: props.rounded,
        square: props.square,
        ...btnDesignAttr.value,
        glossy: props.glossy,
        stretch: props.stretch
      }, () => [
        h(QBtn, {
          class: "q-btn-dropdown--current",
          ...btnProps.value,
          disable: props.disable === true || props.disableMainBtn === true,
          noWrap: true,
          round: false,
          onClick: onClickHide
        }, {
          default: slots.label,
          loading: slots.loading
        }),
        h(QBtn, {
          class: "q-btn-dropdown__arrow-container q-anchor--skip",
          ...ariaAttrs.value,
          ...btnDesignAttr.value,
          disable: props.disable === true || props.disableDropdown === true,
          rounded: props.rounded,
          color: props.color,
          textColor: props.textColor,
          dense: props.dense,
          size: props.size,
          padding: props.padding,
          ripple: props.ripple
        }, () => Arrow)
      ]);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TableSettings",
  setup(__props) {
    const settings = useSettingsStore().status.table;
    return (_ctx, _cache) => {
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
                        default: withCtx(() => [
                          createTextVNode("Vertical Position")
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(QBtnToggle, {
                        modelValue: unref(settings).verticalPosition,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(settings).verticalPosition = $event),
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
                        default: withCtx(() => [
                          createTextVNode("Horizontal Position")
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(QBtnToggle, {
                        modelValue: unref(settings).horizontalPosition,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(settings).horizontalPosition = $event),
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
                        default: withCtx(() => [
                          createTextVNode("Show Icons")
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
                      createVNode(QToggle, {
                        modelValue: unref(settings).showIcons,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(settings).showIcons = $event)
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
                        default: withCtx(() => [
                          createTextVNode("Square Icons")
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
                      createVNode(QToggle, {
                        modelValue: unref(settings).squareIcons,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(settings).squareIcons = $event)
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
                        default: withCtx(() => [
                          createTextVNode("Force Mobile UI")
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
                      createVNode(QToggle, {
                        modelValue: unref(settings).forceMobileUi,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(settings).forceMobileUi = $event)
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
                        default: withCtx(() => [
                          createTextVNode("Show Update Time")
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
                      createVNode(QToggle, {
                        modelValue: unref(settings).showUpdateTime,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(settings).showUpdateTime = $event)
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
                        default: withCtx(() => [
                          createTextVNode("Show Last Switch")
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
                      createVNode(QToggle, {
                        modelValue: unref(settings).showLastSwitch,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(settings).showLastSwitch = $event)
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
                        default: withCtx(() => [
                          createTextVNode("Icon Size")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QSlider, {
                        modelValue: unref(settings).iconSize,
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(settings).iconSize = $event),
                        min: 24,
                        max: 128,
                        label: "",
                        "label-value": unref(settings).iconSize + "px"
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
    };
  }
});
const TableSettings = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "/home/zowie/dev/pkstatus/src/components/StatusPage/Settings/TableSettings.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ListSettings",
  setup(__props) {
    const settings = useSettingsStore().status.list;
    return (_ctx, _cache) => {
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
                        default: withCtx(() => [
                          createTextVNode("Show Update Time")
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
                      createVNode(QToggle, {
                        modelValue: unref(settings).showUpdateTime,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(settings).showUpdateTime = $event)
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
                        default: withCtx(() => [
                          createTextVNode("Show Last Switch")
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
                      createVNode(QToggle, {
                        modelValue: unref(settings).showLastSwitch,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(settings).showLastSwitch = $event)
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
                        default: withCtx(() => [
                          createTextVNode("Square Icons")
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
                      createVNode(QToggle, {
                        modelValue: unref(settings).squareIcons,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(settings).squareIcons = $event)
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
                        default: withCtx(() => [
                          createTextVNode("Icon Size")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QSlider, {
                        modelValue: unref(settings).iconSize,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(settings).iconSize = $event),
                        min: 24,
                        max: 128,
                        label: "",
                        "label-value": unref(settings).iconSize + "px"
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
    };
  }
});
const ListSettings = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "/home/zowie/dev/pkstatus/src/components/StatusPage/Settings/ListSettings.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TileSettings",
  setup(__props) {
    const settings = useSettingsStore().status.tile;
    return (_ctx, _cache) => {
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
                        default: withCtx(() => [
                          createTextVNode("Show Update Time")
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
                      createVNode(QToggle, {
                        modelValue: unref(settings).showUpdateTime,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(settings).showUpdateTime = $event)
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
                        default: withCtx(() => [
                          createTextVNode("Show Last Switch")
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
                      createVNode(QToggle, {
                        modelValue: unref(settings).showLastSwitch,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(settings).showLastSwitch = $event)
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
                        default: withCtx(() => [
                          createTextVNode("Show System Description")
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
                      createVNode(QToggle, {
                        modelValue: unref(settings).showSystemDescription,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(settings).showSystemDescription = $event)
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
                        default: withCtx(() => [
                          createTextVNode("Show Fronter Description")
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
                      createVNode(QToggle, {
                        modelValue: unref(settings).showFronterDescription,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(settings).showFronterDescription = $event)
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
                        default: withCtx(() => [
                          createTextVNode("Panel Width")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QSlider, {
                        modelValue: unref(settings).tileSize,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(settings).tileSize = $event),
                        min: 100,
                        max: 500,
                        label: "",
                        "label-value": unref(settings).tileSize + "px"
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
    };
  }
});
const TileSettings = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "/home/zowie/dev/pkstatus/src/components/StatusPage/Settings/TileSettings.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StatusPage",
  setup(__props) {
    const { fronterCache, systemCache } = useServices();
    const { status } = storeToRefs(useSettingsStore());
    const { ids } = storeToRefs(useSystemStore());
    const fronters = fronterCache.objects;
    const systems = systemCache.objects;
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createVNode(QPage, null, {
            default: withCtx(() => [
              createVNode(_component_router_view, {
                ids: unref(ids),
                systems: unref(systems),
                fronters: unref(fronters)
              }, null, 8, ["ids", "systems", "fronters"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QFooter, null, {
            default: withCtx(() => [
              createVNode(QToolbar, null, {
                default: withCtx(() => [
                  createVNode(QTabs, {
                    modelValue: unref(status).lastLayout,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(status).lastLayout = $event),
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
                  unref(status).lastLayout == "table" ? (openBlock(), createBlock(TableSettings, { key: 0 })) : createCommentVNode("v-if", true),
                  unref(status).lastLayout == "list" ? (openBlock(), createBlock(ListSettings, { key: 1 })) : createCommentVNode("v-if", true),
                  unref(status).lastLayout == "tile" ? (openBlock(), createBlock(TileSettings, { key: 2 })) : createCommentVNode("v-if", true)
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const StatusPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/zowie/dev/pkstatus/src/pages/StatusPage.vue"]]);
export {
  StatusPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHVzUGFnZS1JclplXzZoUC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjIvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJzL3VzZS10YWIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYnMvUVJvdXRlVGFiLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjIvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJzL1FUYWJzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjIvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zcGFjZS9RU3BhY2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9RRm9vdGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjIvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zbGlkZXIvdXNlLXNsaWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4yL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2xpZGVyL1FTbGlkZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2J0bi1kcm9wZG93bi9RQnRuRHJvcGRvd24uanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TdGF0dXNQYWdlL1NldHRpbmdzL1RhYmxlU2V0dGluZ3MudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3RhdHVzUGFnZS9TZXR0aW5ncy9MaXN0U2V0dGluZ3MudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3RhdHVzUGFnZS9TZXR0aW5ncy9UaWxlU2V0dGluZ3MudnVlIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL1N0YXR1c1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIGluamVjdCwgb25CZWZvcmVVbm1vdW50LCBvbk1vdW50ZWQsIHdpdGhEaXJlY3RpdmVzLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuXG5pbXBvcnQgUmlwcGxlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmlwcGxlL1JpcHBsZS5qcydcblxuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgaXNLZXlDb2RlLCBzaG91bGRJZ25vcmVLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2tleS1jb21wb3NpdGlvbi5qcydcbmltcG9ydCB7IHRhYnNLZXksIGVtcHR5UmVuZGVyRm4gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5pbXBvcnQgeyBzdG9wQW5kUHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHVpZCBmcm9tICcuLi8uLi91dGlscy91aWQuanMnXG5pbXBvcnQgeyBpc0RlZXBFcXVhbCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLmpzJ1xuXG5sZXQgaWQgPSAwXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJFbWl0cyA9IFsgJ2NsaWNrJywgJ2tleWRvd24nIF1cblxuZXhwb3J0IGNvbnN0IHVzZVRhYlByb3BzID0ge1xuICBpY29uOiBTdHJpbmcsXG4gIGxhYmVsOiBbIE51bWJlciwgU3RyaW5nIF0sXG5cbiAgYWxlcnQ6IFsgQm9vbGVhbiwgU3RyaW5nIF0sXG4gIGFsZXJ0SWNvbjogU3RyaW5nLFxuXG4gIG5hbWU6IHtcbiAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgZGVmYXVsdDogKCkgPT4gYHRfJHsgaWQrKyB9YFxuICB9LFxuXG4gIG5vQ2FwczogQm9vbGVhbixcblxuICB0YWJpbmRleDogWyBTdHJpbmcsIE51bWJlciBdLFxuICBkaXNhYmxlOiBCb29sZWFuLFxuXG4gIGNvbnRlbnRDbGFzczogU3RyaW5nLFxuXG4gIHJpcHBsZToge1xuICAgIHR5cGU6IFsgQm9vbGVhbiwgT2JqZWN0IF0sXG4gICAgZGVmYXVsdDogdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcywgc2xvdHMsIGVtaXQsIHJvdXRlRGF0YSkge1xuICBjb25zdCAkdGFicyA9IGluamVjdCh0YWJzS2V5LCBlbXB0eVJlbmRlckZuKVxuICBpZiAoJHRhYnMgPT09IGVtcHR5UmVuZGVyRm4pIHtcbiAgICBjb25zb2xlLmVycm9yKCdRVGFiL1FSb3V0ZVRhYiBjb21wb25lbnQgbmVlZHMgdG8gYmUgY2hpbGQgb2YgUVRhYnMnKVxuICAgIHJldHVybiBlbXB0eVJlbmRlckZuXG4gIH1cblxuICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gIGNvbnN0IGJsdXJUYXJnZXRSZWYgPSByZWYobnVsbClcbiAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICBjb25zdCB0YWJJbmRpY2F0b3JSZWYgPSByZWYobnVsbClcblxuICBjb25zdCByaXBwbGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBwcm9wcy5yaXBwbGUgPT09IGZhbHNlXG4gICAgICA/IGZhbHNlXG4gICAgICA6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHsga2V5Q29kZXM6IFsgMTMsIDMyIF0sIGVhcmx5OiB0cnVlIH0sXG4gICAgICAgIHByb3BzLnJpcHBsZSA9PT0gdHJ1ZSA/IHt9IDogcHJvcHMucmlwcGxlXG4gICAgICApXG4gICkpXG5cbiAgY29uc3QgaXNBY3RpdmUgPSBjb21wdXRlZCgoKSA9PiAkdGFicy5jdXJyZW50TW9kZWwudmFsdWUgPT09IHByb3BzLm5hbWUpXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3EtdGFiIHJlbGF0aXZlLXBvc2l0aW9uIHNlbGYtc3RyZXRjaCBmbGV4IGZsZXgtY2VudGVyIHRleHQtY2VudGVyJ1xuICAgICsgKFxuICAgICAgaXNBY3RpdmUudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyAoXG4gICAgICAgICAgICAnIHEtdGFiLS1hY3RpdmUnXG4gICAgICAgICAgICArICgkdGFicy50YWJQcm9wcy52YWx1ZS5hY3RpdmVDbGFzcyA/ICcgJyArICR0YWJzLnRhYlByb3BzLnZhbHVlLmFjdGl2ZUNsYXNzIDogJycpXG4gICAgICAgICAgICArICgkdGFicy50YWJQcm9wcy52YWx1ZS5hY3RpdmVDb2xvciA/IGAgdGV4dC0keyAkdGFicy50YWJQcm9wcy52YWx1ZS5hY3RpdmVDb2xvciB9YCA6ICcnKVxuICAgICAgICAgICAgKyAoJHRhYnMudGFiUHJvcHMudmFsdWUuYWN0aXZlQmdDb2xvciA/IGAgYmctJHsgJHRhYnMudGFiUHJvcHMudmFsdWUuYWN0aXZlQmdDb2xvciB9YCA6ICcnKVxuICAgICAgICAgIClcbiAgICAgICAgOiAnIHEtdGFiLS1pbmFjdGl2ZSdcbiAgICApXG4gICAgKyAocHJvcHMuaWNvbiAmJiBwcm9wcy5sYWJlbCAmJiAkdGFicy50YWJQcm9wcy52YWx1ZS5pbmxpbmVMYWJlbCA9PT0gZmFsc2UgPyAnIHEtdGFiLS1mdWxsJyA6ICcnKVxuICAgICsgKHByb3BzLm5vQ2FwcyA9PT0gdHJ1ZSB8fCAkdGFicy50YWJQcm9wcy52YWx1ZS5ub0NhcHMgPT09IHRydWUgPyAnIHEtdGFiLS1uby1jYXBzJyA6ICcnKVxuICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcgcS1mb2N1c2FibGUgcS1ob3ZlcmFibGUgY3Vyc29yLXBvaW50ZXInKVxuICAgICsgKHJvdXRlRGF0YSAhPT0gdm9pZCAwID8gcm91dGVEYXRhLmxpbmtDbGFzcy52YWx1ZSA6ICcnKVxuICApXG5cbiAgY29uc3QgaW5uZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3EtdGFiX19jb250ZW50IHNlbGYtc3RyZXRjaCBmbGV4LWNlbnRlciByZWxhdGl2ZS1wb3NpdGlvbiBxLWFuY2hvci0tc2tpcCBub24tc2VsZWN0YWJsZSAnXG4gICAgKyAoJHRhYnMudGFiUHJvcHMudmFsdWUuaW5saW5lTGFiZWwgPT09IHRydWUgPyAncm93IG5vLXdyYXAgcS10YWJfX2NvbnRlbnQtLWlubGluZScgOiAnY29sdW1uJylcbiAgICArIChwcm9wcy5jb250ZW50Q2xhc3MgIT09IHZvaWQgMCA/IGAgJHsgcHJvcHMuY29udGVudENsYXNzIH1gIDogJycpXG4gIClcblxuICBjb25zdCB0YWJJbmRleCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAoXG4gICAgICBwcm9wcy5kaXNhYmxlID09PSB0cnVlXG4gICAgICB8fCAkdGFicy5oYXNGb2N1cy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgfHwgKGlzQWN0aXZlLnZhbHVlID09PSBmYWxzZSAmJiAkdGFicy5oYXNBY3RpdmVUYWIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuICAgICAgPyAtMVxuICAgICAgOiBwcm9wcy50YWJpbmRleCB8fCAwXG4gICkpXG5cbiAgZnVuY3Rpb24gb25DbGljayAoZSwga2V5Ym9hcmQpIHtcbiAgICBpZiAoa2V5Ym9hcmQgIT09IHRydWUgJiYgYmx1clRhcmdldFJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgYmx1clRhcmdldFJlZi52YWx1ZS5mb2N1cygpXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgIC8vIHdlIHNob3VsZCBoaW5kZXIgbmF0aXZlIG5hdmlnYXRpb24gdGhvdWdoXG4gICAgICBpZiAocm91dGVEYXRhICE9PSB2b2lkIDAgJiYgcm91dGVEYXRhLmhhc1JvdXRlckxpbmsudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGRvIHdlIGhhdmUgYSBRVGFiP1xuICAgIGlmIChyb3V0ZURhdGEgPT09IHZvaWQgMCkge1xuICAgICAgJHRhYnMudXBkYXRlTW9kZWwoeyBuYW1lOiBwcm9wcy5uYW1lIH0pXG4gICAgICBlbWl0KCdjbGljaycsIGUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGVEYXRhLmhhc1JvdXRlckxpbmsudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGdvID0gKG9wdHMgPSB7fSkgPT4ge1xuICAgICAgICAvLyBpZiByZXF1aXJpbmcgdG8gZ28gdG8gYW5vdGhlciByb3V0ZSwgdGhlbiB3ZVxuICAgICAgICAvLyBsZXQgdGhlIFFUYWJzIHJvdXRlIHdhdGNoZXIgZG8gaXRzIGpvYixcbiAgICAgICAgLy8gb3RoZXJ3aXNlIGRpcmVjdGx5IHNlbGVjdCB0aGlzXG4gICAgICAgIGxldCBoYXJkRXJyb3JcbiAgICAgICAgY29uc3QgcmVxSWQgPSBvcHRzLnRvID09PSB2b2lkIDAgfHwgaXNEZWVwRXF1YWwob3B0cy50bywgcHJvcHMudG8pID09PSB0cnVlXG4gICAgICAgICAgPyAoJHRhYnMuYXZvaWRSb3V0ZVdhdGNoZXIgPSB1aWQoKSlcbiAgICAgICAgICA6IG51bGxcblxuICAgICAgICByZXR1cm4gcm91dGVEYXRhLm5hdmlnYXRlVG9Sb3V0ZXJMaW5rKGUsIHsgLi4ub3B0cywgcmV0dXJuUm91dGVyRXJyb3I6IHRydWUgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IHsgaGFyZEVycm9yID0gZXJyIH0pXG4gICAgICAgICAgLnRoZW4oc29mdEVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChyZXFJZCA9PT0gJHRhYnMuYXZvaWRSb3V0ZVdhdGNoZXIpIHtcbiAgICAgICAgICAgICAgJHRhYnMuYXZvaWRSb3V0ZVdhdGNoZXIgPSBmYWxzZVxuXG4gICAgICAgICAgICAgIC8vIGlmIHdlIGRvbid0IGhhdmUgYW55IGhhcmQgZXJyb3JzIG9yIGFueSBzb2Z0IGVycm9ycywgZXhjZXB0IGZvclxuICAgICAgICAgICAgICAvLyB3aGVuIG5hdmlnYXRpbmcgdG8gdGhlIHNhbWUgcm91dGUgKG9uIGFsbCBvdGhlciBzb2Z0IGVycm9ycyxcbiAgICAgICAgICAgICAgLy8gbGlrZSB3aGVuIG5hdmlnYXRpb24gd2FzIGFib3J0ZWQgaW4gYSBuYXYgZ3VhcmQsIHdlIGRvbid0IGFjdGl2YXRlIHRoaXMgdGFiKVxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaGFyZEVycm9yID09PSB2b2lkIDAgJiYgKFxuICAgICAgICAgICAgICAgICAgc29mdEVycm9yID09PSB2b2lkIDBcbiAgICAgICAgICAgICAgICAgIHx8IChzb2Z0RXJyb3IubWVzc2FnZSAhPT0gdm9pZCAwICYmIHNvZnRFcnJvci5tZXNzYWdlLnN0YXJ0c1dpdGgoJ0F2b2lkZWQgcmVkdW5kYW50IG5hdmlnYXRpb24nKSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICR0YWJzLnVwZGF0ZU1vZGVsKHsgbmFtZTogcHJvcHMubmFtZSB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcHRzLnJldHVyblJvdXRlckVycm9yID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYXJkRXJyb3IgIT09IHZvaWQgMCA/IFByb21pc2UucmVqZWN0KGhhcmRFcnJvcikgOiBzb2Z0RXJyb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBlbWl0KCdjbGljaycsIGUsIGdvKVxuICAgICAgZS5kZWZhdWx0UHJldmVudGVkICE9PSB0cnVlICYmIGdvKClcblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZW1pdCgnY2xpY2snLCBlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25LZXlkb3duIChlKSB7XG4gICAgaWYgKGlzS2V5Q29kZShlLCBbIDEzLCAzMiBdKSkge1xuICAgICAgb25DbGljayhlLCB0cnVlKVxuICAgIH1cbiAgICBlbHNlIGlmIChcbiAgICAgIHNob3VsZElnbm9yZUtleShlKSAhPT0gdHJ1ZVxuICAgICAgJiYgZS5rZXlDb2RlID49IDM1XG4gICAgICAmJiBlLmtleUNvZGUgPD0gNDBcbiAgICAgICYmIGUuYWx0S2V5ICE9PSB0cnVlXG4gICAgICAmJiBlLm1ldGFLZXkgIT09IHRydWVcbiAgICApIHtcbiAgICAgICR0YWJzLm9uS2JkTmF2aWdhdGUoZS5rZXlDb2RlLCBwcm94eS4kZWwpID09PSB0cnVlICYmIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgfVxuXG4gICAgZW1pdCgna2V5ZG93bicsIGUpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb250ZW50ICgpIHtcbiAgICBjb25zdFxuICAgICAgbmFycm93ID0gJHRhYnMudGFiUHJvcHMudmFsdWUubmFycm93SW5kaWNhdG9yLFxuICAgICAgY29udGVudCA9IFtdLFxuICAgICAgaW5kaWNhdG9yID0gaCgnZGl2Jywge1xuICAgICAgICByZWY6IHRhYkluZGljYXRvclJlZixcbiAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAncS10YWJfX2luZGljYXRvcicsXG4gICAgICAgICAgJHRhYnMudGFiUHJvcHMudmFsdWUuaW5kaWNhdG9yQ2xhc3NcbiAgICAgICAgXVxuICAgICAgfSlcblxuICAgIHByb3BzLmljb24gIT09IHZvaWQgMCAmJiBjb250ZW50LnB1c2goXG4gICAgICBoKFFJY29uLCB7XG4gICAgICAgIGNsYXNzOiAncS10YWJfX2ljb24nLFxuICAgICAgICBuYW1lOiBwcm9wcy5pY29uXG4gICAgICB9KVxuICAgIClcblxuICAgIHByb3BzLmxhYmVsICE9PSB2b2lkIDAgJiYgY29udGVudC5wdXNoKFxuICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFiX19sYWJlbCcgfSwgcHJvcHMubGFiZWwpXG4gICAgKVxuXG4gICAgcHJvcHMuYWxlcnQgIT09IGZhbHNlICYmIGNvbnRlbnQucHVzaChcbiAgICAgIHByb3BzLmFsZXJ0SWNvbiAhPT0gdm9pZCAwXG4gICAgICAgID8gaChRSWNvbiwge1xuICAgICAgICAgIGNsYXNzOiAncS10YWJfX2FsZXJ0LWljb24nLFxuICAgICAgICAgIGNvbG9yOiBwcm9wcy5hbGVydCAhPT0gdHJ1ZVxuICAgICAgICAgICAgPyBwcm9wcy5hbGVydFxuICAgICAgICAgICAgOiB2b2lkIDAsXG4gICAgICAgICAgbmFtZTogcHJvcHMuYWxlcnRJY29uXG4gICAgICAgIH0pXG4gICAgICAgIDogaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS10YWJfX2FsZXJ0J1xuICAgICAgICAgICAgKyAocHJvcHMuYWxlcnQgIT09IHRydWUgPyBgIHRleHQtJHsgcHJvcHMuYWxlcnQgfWAgOiAnJylcbiAgICAgICAgfSlcbiAgICApXG5cbiAgICBuYXJyb3cgPT09IHRydWUgJiYgY29udGVudC5wdXNoKGluZGljYXRvcilcblxuICAgIGNvbnN0IG5vZGUgPSBbXG4gICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1mb2N1cy1oZWxwZXInLCB0YWJpbmRleDogLTEsIHJlZjogYmx1clRhcmdldFJlZiB9KSxcbiAgICAgIGgoJ2RpdicsIHsgY2xhc3M6IGlubmVyQ2xhc3MudmFsdWUgfSwgaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBjb250ZW50KSlcbiAgICBdXG5cbiAgICBuYXJyb3cgPT09IGZhbHNlICYmIG5vZGUucHVzaChpbmRpY2F0b3IpXG5cbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgY29uc3QgdGFiRGF0YSA9IHtcbiAgICBuYW1lOiBjb21wdXRlZCgoKSA9PiBwcm9wcy5uYW1lKSxcbiAgICByb290UmVmLFxuICAgIHRhYkluZGljYXRvclJlZixcbiAgICByb3V0ZURhdGFcbiAgfVxuXG4gIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgJHRhYnMudW5yZWdpc3RlclRhYih0YWJEYXRhKVxuICB9KVxuXG4gIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgJHRhYnMucmVnaXN0ZXJUYWIodGFiRGF0YSlcbiAgfSlcblxuICBmdW5jdGlvbiByZW5kZXJUYWIgKHRhZywgY3VzdG9tRGF0YSkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICByZWY6IHJvb3RSZWYsXG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgIHRhYmluZGV4OiB0YWJJbmRleC52YWx1ZSxcbiAgICAgIHJvbGU6ICd0YWInLFxuICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBpc0FjdGl2ZS52YWx1ZSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAnYXJpYS1kaXNhYmxlZCc6IHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAndHJ1ZScgOiB2b2lkIDAsXG4gICAgICBvbkNsaWNrLFxuICAgICAgb25LZXlkb3duLFxuICAgICAgLi4uY3VzdG9tRGF0YVxuICAgIH1cblxuICAgIHJldHVybiB3aXRoRGlyZWN0aXZlcyhcbiAgICAgIGgodGFnLCBkYXRhLCBnZXRDb250ZW50KCkpLFxuICAgICAgWyBbIFJpcHBsZSwgcmlwcGxlLnZhbHVlIF0gXVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7IHJlbmRlclRhYiwgJHRhYnMgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQsIHdhdGNoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlUm91dGVyTGluaywgeyB1c2VSb3V0ZXJMaW5rUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1yb3V0ZXItbGluay5qcydcbmltcG9ydCB1c2VUYWIsIHsgdXNlVGFiUHJvcHMsIHVzZVRhYkVtaXRzIH0gZnJvbSAnLi91c2UtdGFiLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FSb3V0ZVRhYicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VSb3V0ZXJMaW5rUHJvcHMsXG4gICAgLi4udXNlVGFiUHJvcHNcbiAgfSxcblxuICBlbWl0czogdXNlVGFiRW1pdHMsXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCByb3V0ZURhdGEgPSB1c2VSb3V0ZXJMaW5rKHtcbiAgICAgIHVzZURpc2FibGVGb3JSb3V0ZXJMaW5rUHJvcHM6IGZhbHNlXG4gICAgfSlcblxuICAgIGNvbnN0IHsgcmVuZGVyVGFiLCAkdGFicyB9ID0gdXNlVGFiKFxuICAgICAgcHJvcHMsXG4gICAgICBzbG90cyxcbiAgICAgIGVtaXQsXG4gICAgICB7XG4gICAgICAgIGV4YWN0OiBjb21wdXRlZCgoKSA9PiBwcm9wcy5leGFjdCksXG4gICAgICAgIC4uLnJvdXRlRGF0YVxuICAgICAgfVxuICAgIClcblxuICAgIHdhdGNoKCgpID0+IGAkeyBwcm9wcy5uYW1lIH0gfCAkeyBwcm9wcy5leGFjdCB9IHwgJHsgKHJvdXRlRGF0YS5yZXNvbHZlZExpbmsudmFsdWUgfHwge30pLmhyZWYgfWAsICgpID0+IHtcbiAgICAgICR0YWJzLnZlcmlmeVJvdXRlTW9kZWwoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4gcmVuZGVyVGFiKHJvdXRlRGF0YS5saW5rVGFnLnZhbHVlLCByb3V0ZURhdGEubGlua0F0dHJzLnZhbHVlKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uQmVmb3JlVW5tb3VudCwgb25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSwgcHJvdmlkZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCB1c2VUaWNrIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS10aWNrLmpzJ1xuaW1wb3J0IHVzZVRpbWVvdXQgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLXRpbWVvdXQuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IHRhYnNLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5pbXBvcnQgeyBydGxIYXNTY3JvbGxCdWcgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3J0bC5qcydcblxuZnVuY3Rpb24gZ2V0SW5kaWNhdG9yQ2xhc3MgKGNvbG9yLCB0b3AsIHZlcnRpY2FsKSB7XG4gIGNvbnN0IHBvcyA9IHZlcnRpY2FsID09PSB0cnVlXG4gICAgPyBbICdsZWZ0JywgJ3JpZ2h0JyBdXG4gICAgOiBbICd0b3AnLCAnYm90dG9tJyBdXG5cbiAgcmV0dXJuIGBhYnNvbHV0ZS0keyB0b3AgPT09IHRydWUgPyBwb3NbIDAgXSA6IHBvc1sgMSBdIH0keyBjb2xvciA/IGAgdGV4dC0keyBjb2xvciB9YCA6ICcnIH1gXG59XG5cbmNvbnN0IGFsaWduVmFsdWVzID0gWyAnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnLCAnanVzdGlmeScgXVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRhYnMnLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuXG4gICAgYWxpZ246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdjZW50ZXInLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IGFsaWduVmFsdWVzLmluY2x1ZGVzKHYpXG4gICAgfSxcbiAgICBicmVha3BvaW50OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiA2MDBcbiAgICB9LFxuXG4gICAgdmVydGljYWw6IEJvb2xlYW4sXG4gICAgc2hyaW5rOiBCb29sZWFuLFxuICAgIHN0cmV0Y2g6IEJvb2xlYW4sXG5cbiAgICBhY3RpdmVDbGFzczogU3RyaW5nLFxuICAgIGFjdGl2ZUNvbG9yOiBTdHJpbmcsXG4gICAgYWN0aXZlQmdDb2xvcjogU3RyaW5nLFxuICAgIGluZGljYXRvckNvbG9yOiBTdHJpbmcsXG4gICAgbGVmdEljb246IFN0cmluZyxcbiAgICByaWdodEljb246IFN0cmluZyxcblxuICAgIG91dHNpZGVBcnJvd3M6IEJvb2xlYW4sXG4gICAgbW9iaWxlQXJyb3dzOiBCb29sZWFuLFxuXG4gICAgc3dpdGNoSW5kaWNhdG9yOiBCb29sZWFuLFxuXG4gICAgbmFycm93SW5kaWNhdG9yOiBCb29sZWFuLFxuICAgIGlubGluZUxhYmVsOiBCb29sZWFuLFxuICAgIG5vQ2FwczogQm9vbGVhbixcblxuICAgIGRlbnNlOiBCb29sZWFuLFxuXG4gICAgY29udGVudENsYXNzOiBTdHJpbmcsXG5cbiAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IFsgRnVuY3Rpb24sIEFycmF5IF1cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyAkcSB9ID0gcHJveHlcblxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaWNrOiByZWdpc3RlclNjcm9sbFRpY2sgfSA9IHVzZVRpY2soKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaWNrOiByZWdpc3RlclVwZGF0ZUFycm93c1RpY2sgfSA9IHVzZVRpY2soKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaWNrOiByZWdpc3RlckFuaW1hdGVUaWNrIH0gPSB1c2VUaWNrKClcblxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaW1lb3V0OiByZWdpc3RlckZvY3VzVGltZW91dCwgcmVtb3ZlVGltZW91dDogcmVtb3ZlRm9jdXNUaW1lb3V0IH0gPSB1c2VUaW1lb3V0KClcbiAgICBjb25zdCB7IHJlZ2lzdGVyVGltZW91dDogcmVnaXN0ZXJTY3JvbGxUb1RhYlRpbWVvdXQsIHJlbW92ZVRpbWVvdXQ6IHJlbW92ZVNjcm9sbFRvVGFiVGltZW91dCB9ID0gdXNlVGltZW91dCgpXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgY29udGVudFJlZiA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgY3VycmVudE1vZGVsID0gcmVmKHByb3BzLm1vZGVsVmFsdWUpXG4gICAgY29uc3Qgc2Nyb2xsYWJsZSA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBsZWZ0QXJyb3cgPSByZWYodHJ1ZSlcbiAgICBjb25zdCByaWdodEFycm93ID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGp1c3RpZnkgPSByZWYoZmFsc2UpXG5cbiAgICBjb25zdCB0YWJEYXRhTGlzdCA9IFtdXG4gICAgY29uc3QgdGFiRGF0YUxpc3RMZW4gPSByZWYoMClcbiAgICBjb25zdCBoYXNGb2N1cyA9IHJlZihmYWxzZSlcblxuICAgIGxldCBhbmltYXRlVGltZXIgPSBudWxsLCBzY3JvbGxUaW1lciA9IG51bGwsIHVud2F0Y2hSb3V0ZVxuXG4gICAgY29uc3QgdGFiUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgYWN0aXZlQ2xhc3M6IHByb3BzLmFjdGl2ZUNsYXNzLFxuICAgICAgYWN0aXZlQ29sb3I6IHByb3BzLmFjdGl2ZUNvbG9yLFxuICAgICAgYWN0aXZlQmdDb2xvcjogcHJvcHMuYWN0aXZlQmdDb2xvcixcbiAgICAgIGluZGljYXRvckNsYXNzOiBnZXRJbmRpY2F0b3JDbGFzcyhcbiAgICAgICAgcHJvcHMuaW5kaWNhdG9yQ29sb3IsXG4gICAgICAgIHByb3BzLnN3aXRjaEluZGljYXRvcixcbiAgICAgICAgcHJvcHMudmVydGljYWxcbiAgICAgICksXG4gICAgICBuYXJyb3dJbmRpY2F0b3I6IHByb3BzLm5hcnJvd0luZGljYXRvcixcbiAgICAgIGlubGluZUxhYmVsOiBwcm9wcy5pbmxpbmVMYWJlbCxcbiAgICAgIG5vQ2FwczogcHJvcHMubm9DYXBzXG4gICAgfSkpXG5cbiAgICBjb25zdCBoYXNBY3RpdmVUYWIgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBsZW4gPSB0YWJEYXRhTGlzdExlbi52YWx1ZVxuICAgICAgY29uc3QgdmFsID0gY3VycmVudE1vZGVsLnZhbHVlXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKHRhYkRhdGFMaXN0WyBpIF0ubmFtZS52YWx1ZSA9PT0gdmFsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgY29uc3QgYWxpZ25DbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFsaWduID0gc2Nyb2xsYWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/ICdsZWZ0J1xuICAgICAgICA6IChqdXN0aWZ5LnZhbHVlID09PSB0cnVlID8gJ2p1c3RpZnknIDogcHJvcHMuYWxpZ24pXG5cbiAgICAgIHJldHVybiBgcS10YWJzX19jb250ZW50LS1hbGlnbi0keyBhbGlnbiB9YFxuICAgIH0pXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRhYnMgcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyJ1xuICAgICAgKyBgIHEtdGFicy0tJHsgc2Nyb2xsYWJsZS52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJ25vdC0nIH1zY3JvbGxhYmxlYFxuICAgICAgKyBgIHEtdGFicy0tJHsgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnIH1gXG4gICAgICArIGAgcS10YWJzX19hcnJvd3MtLSR7IHByb3BzLm91dHNpZGVBcnJvd3MgPT09IHRydWUgPyAnb3V0c2lkZScgOiAnaW5zaWRlJyB9YFxuICAgICAgKyBgIHEtdGFicy0tbW9iaWxlLXdpdGgkeyBwcm9wcy5tb2JpbGVBcnJvd3MgPT09IHRydWUgPyAnJyA6ICdvdXQnIH0tYXJyb3dzYFxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtdGFicy0tZGVuc2UnIDogJycpXG4gICAgICArIChwcm9wcy5zaHJpbmsgPT09IHRydWUgPyAnIGNvbC1zaHJpbmsnIDogJycpXG4gICAgICArIChwcm9wcy5zdHJldGNoID09PSB0cnVlID8gJyBzZWxmLXN0cmV0Y2gnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgaW5uZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10YWJzX19jb250ZW50IHNjcm9sbC0tbW9iaWxlIHJvdyBuby13cmFwIGl0ZW1zLWNlbnRlciBzZWxmLXN0cmV0Y2ggaGlkZS1zY3JvbGxiYXIgcmVsYXRpdmUtcG9zaXRpb24gJ1xuICAgICAgKyBhbGlnbkNsYXNzLnZhbHVlXG4gICAgICArIChwcm9wcy5jb250ZW50Q2xhc3MgIT09IHZvaWQgMCA/IGAgJHsgcHJvcHMuY29udGVudENsYXNzIH1gIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgZG9tUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICA/IHsgY29udGFpbmVyOiAnaGVpZ2h0JywgY29udGVudDogJ29mZnNldEhlaWdodCcsIHNjcm9sbDogJ3Njcm9sbEhlaWdodCcgfVxuICAgICAgICA6IHsgY29udGFpbmVyOiAnd2lkdGgnLCBjb250ZW50OiAnb2Zmc2V0V2lkdGgnLCBzY3JvbGw6ICdzY3JvbGxXaWR0aCcgfVxuICAgICkpXG5cbiAgICBjb25zdCBpc1JUTCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnZlcnRpY2FsICE9PSB0cnVlICYmICRxLmxhbmcucnRsID09PSB0cnVlKVxuICAgIGNvbnN0IHJ0bFBvc0NvcnJlY3Rpb24gPSBjb21wdXRlZCgoKSA9PiBydGxIYXNTY3JvbGxCdWcgPT09IGZhbHNlICYmIGlzUlRMLnZhbHVlID09PSB0cnVlKVxuXG4gICAgd2F0Y2goaXNSVEwsIHVwZGF0ZUFycm93cylcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIG5hbWUgPT4ge1xuICAgICAgdXBkYXRlTW9kZWwoeyBuYW1lLCBzZXRDdXJyZW50OiB0cnVlLCBza2lwRW1pdDogdHJ1ZSB9KVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5vdXRzaWRlQXJyb3dzLCByZWNhbGN1bGF0ZVNjcm9sbClcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1vZGVsICh7IG5hbWUsIHNldEN1cnJlbnQsIHNraXBFbWl0IH0pIHtcbiAgICAgIGlmIChjdXJyZW50TW9kZWwudmFsdWUgIT09IG5hbWUpIHtcbiAgICAgICAgaWYgKHNraXBFbWl0ICE9PSB0cnVlICYmIHByb3BzWyAnb25VcGRhdGU6bW9kZWxWYWx1ZScgXSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBuYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHNldEN1cnJlbnQgPT09IHRydWVcbiAgICAgICAgICB8fCBwcm9wc1sgJ29uVXBkYXRlOm1vZGVsVmFsdWUnIF0gPT09IHZvaWQgMFxuICAgICAgICApIHtcbiAgICAgICAgICBhbmltYXRlKGN1cnJlbnRNb2RlbC52YWx1ZSwgbmFtZSlcbiAgICAgICAgICBjdXJyZW50TW9kZWwudmFsdWUgPSBuYW1lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNhbGN1bGF0ZVNjcm9sbCAoKSB7XG4gICAgICByZWdpc3RlclNjcm9sbFRpY2soKCkgPT4ge1xuICAgICAgICB1cGRhdGVDb250YWluZXIoe1xuICAgICAgICAgIHdpZHRoOiByb290UmVmLnZhbHVlLm9mZnNldFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogcm9vdFJlZi52YWx1ZS5vZmZzZXRIZWlnaHRcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29udGFpbmVyIChkb21TaXplKSB7XG4gICAgICAvLyBpdCBjYW4gYmUgY2FsbGVkIGZhc3RlciB0aGFuIGNvbXBvbmVudCBiZWluZyBpbml0aWFsaXplZFxuICAgICAgLy8gc28gd2UgbmVlZCB0byBwcm90ZWN0IGFnYWluc3QgdGhhdCBjYXNlXG4gICAgICAvLyAob25lIGV4YW1wbGUgb2Ygc3VjaCBjYXNlIGlzIHRoZSBkb2NzIHJlbGVhc2Ugbm90ZXMgcGFnZSlcbiAgICAgIGlmIChkb21Qcm9wcy52YWx1ZSA9PT0gdm9pZCAwIHx8IGNvbnRlbnRSZWYudmFsdWUgPT09IG51bGwpIHJldHVyblxuXG4gICAgICBjb25zdFxuICAgICAgICBzaXplID0gZG9tU2l6ZVsgZG9tUHJvcHMudmFsdWUuY29udGFpbmVyIF0sXG4gICAgICAgIHNjcm9sbFNpemUgPSBNYXRoLm1pbihcbiAgICAgICAgICBjb250ZW50UmVmLnZhbHVlWyBkb21Qcm9wcy52YWx1ZS5zY3JvbGwgXSxcbiAgICAgICAgICBBcnJheS5wcm90b3R5cGUucmVkdWNlLmNhbGwoXG4gICAgICAgICAgICBjb250ZW50UmVmLnZhbHVlLmNoaWxkcmVuLFxuICAgICAgICAgICAgKGFjYywgZWwpID0+IGFjYyArIChlbFsgZG9tUHJvcHMudmFsdWUuY29udGVudCBdIHx8IDApLFxuICAgICAgICAgICAgMFxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgc2Nyb2xsID0gc2l6ZSA+IDAgJiYgc2Nyb2xsU2l6ZSA+IHNpemUgLy8gd2hlbiB0aGVyZSBpcyBubyB0YWIsIGluIENocm9tZSwgc2l6ZSA9PT0gMCBhbmQgc2Nyb2xsU2l6ZSA9PT0gMVxuXG4gICAgICBzY3JvbGxhYmxlLnZhbHVlID0gc2Nyb2xsXG5cbiAgICAgIC8vIEFycm93cyBuZWVkIHRvIGJlIHVwZGF0ZWQgZXZlbiBpZiB0aGUgc2Nyb2xsIHN0YXR1cyB3YXMgYWxyZWFkeSB0cnVlXG4gICAgICBzY3JvbGwgPT09IHRydWUgJiYgcmVnaXN0ZXJVcGRhdGVBcnJvd3NUaWNrKHVwZGF0ZUFycm93cylcblxuICAgICAganVzdGlmeS52YWx1ZSA9IHNpemUgPCBwYXJzZUludChwcm9wcy5icmVha3BvaW50LCAxMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlIChvbGROYW1lLCBuZXdOYW1lKSB7XG4gICAgICBjb25zdFxuICAgICAgICBvbGRUYWIgPSBvbGROYW1lICE9PSB2b2lkIDAgJiYgb2xkTmFtZSAhPT0gbnVsbCAmJiBvbGROYW1lICE9PSAnJ1xuICAgICAgICAgID8gdGFiRGF0YUxpc3QuZmluZCh0YWIgPT4gdGFiLm5hbWUudmFsdWUgPT09IG9sZE5hbWUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBuZXdUYWIgPSBuZXdOYW1lICE9PSB2b2lkIDAgJiYgbmV3TmFtZSAhPT0gbnVsbCAmJiBuZXdOYW1lICE9PSAnJ1xuICAgICAgICAgID8gdGFiRGF0YUxpc3QuZmluZCh0YWIgPT4gdGFiLm5hbWUudmFsdWUgPT09IG5ld05hbWUpXG4gICAgICAgICAgOiBudWxsXG5cbiAgICAgIGlmIChvbGRUYWIgJiYgbmV3VGFiKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgb2xkRWwgPSBvbGRUYWIudGFiSW5kaWNhdG9yUmVmLnZhbHVlLFxuICAgICAgICAgIG5ld0VsID0gbmV3VGFiLnRhYkluZGljYXRvclJlZi52YWx1ZVxuXG4gICAgICAgIGlmIChhbmltYXRlVGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoYW5pbWF0ZVRpbWVyKVxuICAgICAgICAgIGFuaW1hdGVUaW1lciA9IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIG9sZEVsLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgICAgb2xkRWwuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnXG4gICAgICAgIG5ld0VsLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgICAgbmV3RWwuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnXG5cbiAgICAgICAgY29uc3RcbiAgICAgICAgICBvbGRQb3MgPSBvbGRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBuZXdQb3MgPSBuZXdFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICAgIG5ld0VsLnN0eWxlLnRyYW5zZm9ybSA9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgICAgPyBgdHJhbnNsYXRlM2QoMCwkeyBvbGRQb3MudG9wIC0gbmV3UG9zLnRvcCB9cHgsMCkgc2NhbGUzZCgxLCR7IG5ld1Bvcy5oZWlnaHQgPyBvbGRQb3MuaGVpZ2h0IC8gbmV3UG9zLmhlaWdodCA6IDEgfSwxKWBcbiAgICAgICAgICA6IGB0cmFuc2xhdGUzZCgkeyBvbGRQb3MubGVmdCAtIG5ld1Bvcy5sZWZ0IH1weCwwLDApIHNjYWxlM2QoJHsgbmV3UG9zLndpZHRoID8gb2xkUG9zLndpZHRoIC8gbmV3UG9zLndpZHRoIDogMSB9LDEsMSlgXG5cbiAgICAgICAgLy8gYWxsb3cgc2NvcGUgdXBkYXRlcyB0byBraWNrIGluIChRUm91dGVUYWIgbmVlZHMgbW9yZSB0aW1lKVxuICAgICAgICByZWdpc3RlckFuaW1hdGVUaWNrKCgpID0+IHtcbiAgICAgICAgICBhbmltYXRlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFuaW1hdGVUaW1lciA9IG51bGxcbiAgICAgICAgICAgIG5ld0VsLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIC4yNXMgY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSknXG4gICAgICAgICAgICBuZXdFbC5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSdcbiAgICAgICAgICB9LCA3MClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld1RhYiAmJiBzY3JvbGxhYmxlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHNjcm9sbFRvVGFiRWwobmV3VGFiLnJvb3RSZWYudmFsdWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG9UYWJFbCAoZWwpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIHsgbGVmdCwgd2lkdGgsIHRvcCwgaGVpZ2h0IH0gPSBjb250ZW50UmVmLnZhbHVlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBuZXdQb3MgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICBsZXQgb2Zmc2V0ID0gcHJvcHMudmVydGljYWwgPT09IHRydWUgPyBuZXdQb3MudG9wIC0gdG9wIDogbmV3UG9zLmxlZnQgLSBsZWZ0XG5cbiAgICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICAgIGNvbnRlbnRSZWYudmFsdWVbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCcgXSArPSBNYXRoLmZsb29yKG9mZnNldClcbiAgICAgICAgdXBkYXRlQXJyb3dzKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIG9mZnNldCArPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IG5ld1Bvcy5oZWlnaHQgLSBoZWlnaHQgOiBuZXdQb3Mud2lkdGggLSB3aWR0aFxuICAgICAgaWYgKG9mZnNldCA+IDApIHtcbiAgICAgICAgY29udGVudFJlZi52YWx1ZVsgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JyBdICs9IE1hdGguY2VpbChvZmZzZXQpXG4gICAgICAgIHVwZGF0ZUFycm93cygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQXJyb3dzICgpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50UmVmLnZhbHVlXG4gICAgICBpZiAoY29udGVudCA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHJlY3QgPSBjb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBwb3MgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IGNvbnRlbnQuc2Nyb2xsVG9wIDogTWF0aC5hYnMoY29udGVudC5zY3JvbGxMZWZ0KVxuXG4gICAgICBpZiAoaXNSVEwudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgbGVmdEFycm93LnZhbHVlID0gTWF0aC5jZWlsKHBvcyArIHJlY3Qud2lkdGgpIDwgY29udGVudC5zY3JvbGxXaWR0aCAtIDFcbiAgICAgICAgcmlnaHRBcnJvdy52YWx1ZSA9IHBvcyA+IDBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZWZ0QXJyb3cudmFsdWUgPSBwb3MgPiAwXG4gICAgICAgIHJpZ2h0QXJyb3cudmFsdWUgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICAgID8gTWF0aC5jZWlsKHBvcyArIHJlY3QuaGVpZ2h0KSA8IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0XG4gICAgICAgICAgOiBNYXRoLmNlaWwocG9zICsgcmVjdC53aWR0aCkgPCBjb250ZW50LnNjcm9sbFdpZHRoXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbVNjcm9sbFRvICh2YWx1ZSkge1xuICAgICAgc2Nyb2xsVGltZXIgIT09IG51bGwgJiYgY2xlYXJJbnRlcnZhbChzY3JvbGxUaW1lcilcbiAgICAgIHNjcm9sbFRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoc2Nyb2xsVG93YXJkcyh2YWx1ZSkgPT09IHRydWUpIHtcbiAgICAgICAgICBzdG9wQW5pbVNjcm9sbCgpXG4gICAgICAgIH1cbiAgICAgIH0sIDUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG9TdGFydCAoKSB7XG4gICAgICBhbmltU2Nyb2xsVG8ocnRsUG9zQ29ycmVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIDogMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUb0VuZCAoKSB7XG4gICAgICBhbmltU2Nyb2xsVG8ocnRsUG9zQ29ycmVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IDAgOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wQW5pbVNjcm9sbCAoKSB7XG4gICAgICBpZiAoc2Nyb2xsVGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzY3JvbGxUaW1lcilcbiAgICAgICAgc2Nyb2xsVGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LYmROYXZpZ2F0ZSAoa2V5Q29kZSwgZnJvbUVsKSB7XG4gICAgICBjb25zdCB0YWJzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKFxuICAgICAgICBjb250ZW50UmVmLnZhbHVlLmNoaWxkcmVuLFxuICAgICAgICBlbCA9PiBlbCA9PT0gZnJvbUVsIHx8IChlbC5tYXRjaGVzICYmIGVsLm1hdGNoZXMoJy5xLXRhYi5xLWZvY3VzYWJsZScpID09PSB0cnVlKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBsZW4gPSB0YWJzLmxlbmd0aFxuICAgICAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuXG5cbiAgICAgIGlmIChrZXlDb2RlID09PSAzNikgeyAvLyBIb21lXG4gICAgICAgIHNjcm9sbFRvVGFiRWwodGFic1sgMCBdKVxuICAgICAgICB0YWJzWyAwIF0uZm9jdXMoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKGtleUNvZGUgPT09IDM1KSB7IC8vIEVuZFxuICAgICAgICBzY3JvbGxUb1RhYkVsKHRhYnNbIGxlbiAtIDEgXSlcbiAgICAgICAgdGFic1sgbGVuIC0gMSBdLmZvY3VzKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlyUHJldiA9IGtleUNvZGUgPT09IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IDM4IC8qIEFycm93VXAgKi8gOiAzNyAvKiBBcnJvd0xlZnQgKi8pXG4gICAgICBjb25zdCBkaXJOZXh0ID0ga2V5Q29kZSA9PT0gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gNDAgLyogQXJyb3dEb3duICovIDogMzkgLyogQXJyb3dSaWdodCAqLylcblxuICAgICAgY29uc3QgZGlyID0gZGlyUHJldiA9PT0gdHJ1ZSA/IC0xIDogKGRpck5leHQgPT09IHRydWUgPyAxIDogdm9pZCAwKVxuXG4gICAgICBpZiAoZGlyICE9PSB2b2lkIDApIHtcbiAgICAgICAgY29uc3QgcnRsRGlyID0gaXNSVEwudmFsdWUgPT09IHRydWUgPyAtMSA6IDFcbiAgICAgICAgY29uc3QgaW5kZXggPSB0YWJzLmluZGV4T2YoZnJvbUVsKSArIGRpciAqIHJ0bERpclxuXG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgc2Nyb2xsVG9UYWJFbCh0YWJzWyBpbmRleCBdKVxuICAgICAgICAgIHRhYnNbIGluZGV4IF0uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxldCdzIHNwZWVkIHVwIGV4ZWN1dGlvbiBvZiB0aW1lLXNlbnNpdGl2ZSBzY3JvbGxUb3dhcmRzKClcbiAgICAvLyB3aXRoIGEgY29tcHV0ZWQgdmFyaWFibGUgYnkgZGlyZWN0bHkgYXBwbHlpbmcgdGhlIG1pbmltYWxcbiAgICAvLyBudW1iZXIgb2YgaW5zdHJ1Y3Rpb25zIG9uIGdldC9zZXQgZnVuY3Rpb25zXG4gICAgY29uc3QgcG9zRm4gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBydGxQb3NDb3JyZWN0aW9uLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8geyBnZXQ6IGNvbnRlbnQgPT4gTWF0aC5hYnMoY29udGVudC5zY3JvbGxMZWZ0KSwgc2V0OiAoY29udGVudCwgcG9zKSA9PiB7IGNvbnRlbnQuc2Nyb2xsTGVmdCA9IC1wb3MgfSB9XG4gICAgICAgIDogKFxuICAgICAgICAgICAgcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgICAgICAgPyB7IGdldDogY29udGVudCA9PiBjb250ZW50LnNjcm9sbFRvcCwgc2V0OiAoY29udGVudCwgcG9zKSA9PiB7IGNvbnRlbnQuc2Nyb2xsVG9wID0gcG9zIH0gfVxuICAgICAgICAgICAgICA6IHsgZ2V0OiBjb250ZW50ID0+IGNvbnRlbnQuc2Nyb2xsTGVmdCwgc2V0OiAoY29udGVudCwgcG9zKSA9PiB7IGNvbnRlbnQuc2Nyb2xsTGVmdCA9IHBvcyB9IH1cbiAgICAgICAgICApXG4gICAgKSlcblxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvd2FyZHMgKHZhbHVlKSB7XG4gICAgICBjb25zdFxuICAgICAgICBjb250ZW50ID0gY29udGVudFJlZi52YWx1ZSxcbiAgICAgICAgeyBnZXQsIHNldCB9ID0gcG9zRm4udmFsdWVcblxuICAgICAgbGV0XG4gICAgICAgIGRvbmUgPSBmYWxzZSxcbiAgICAgICAgcG9zID0gZ2V0KGNvbnRlbnQpXG5cbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHZhbHVlIDwgcG9zID8gLTEgOiAxXG5cbiAgICAgIHBvcyArPSBkaXJlY3Rpb24gKiA1XG5cbiAgICAgIGlmIChwb3MgPCAwKSB7XG4gICAgICAgIGRvbmUgPSB0cnVlXG4gICAgICAgIHBvcyA9IDBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKFxuICAgICAgICAoZGlyZWN0aW9uID09PSAtMSAmJiBwb3MgPD0gdmFsdWUpXG4gICAgICAgIHx8IChkaXJlY3Rpb24gPT09IDEgJiYgcG9zID49IHZhbHVlKVxuICAgICAgKSB7XG4gICAgICAgIGRvbmUgPSB0cnVlXG4gICAgICAgIHBvcyA9IHZhbHVlXG4gICAgICB9XG5cbiAgICAgIHNldChjb250ZW50LCBwb3MpXG4gICAgICB1cGRhdGVBcnJvd3MoKVxuXG4gICAgICByZXR1cm4gZG9uZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc1F1ZXJ5SW5jbHVkZWQgKHRhcmdldFF1ZXJ5LCBtYXRjaGluZ1F1ZXJ5KSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0YXJnZXRRdWVyeSkge1xuICAgICAgICBpZiAodGFyZ2V0UXVlcnlbIGtleSBdICE9PSBtYXRjaGluZ1F1ZXJ5WyBrZXkgXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gZG8gbm90IHVzZSBkaXJlY3RseTsgdXNlIHZlcmlmeVJvdXRlTW9kZWwoKSBpbnN0ZWFkXG4gICAgZnVuY3Rpb24gdXBkYXRlQWN0aXZlUm91dGUgKCkge1xuICAgICAgbGV0IG5hbWUgPSBudWxsLCBiZXN0U2NvcmUgPSB7IG1hdGNoZWRMZW46IDAsIHF1ZXJ5RGlmZjogOTk5OSwgaHJlZkxlbjogMCB9XG5cbiAgICAgIGNvbnN0IGxpc3QgPSB0YWJEYXRhTGlzdC5maWx0ZXIodGFiID0+IHRhYi5yb3V0ZURhdGEgIT09IHZvaWQgMCAmJiB0YWIucm91dGVEYXRhLmhhc1JvdXRlckxpbmsudmFsdWUgPT09IHRydWUpXG4gICAgICBjb25zdCB7IGhhc2g6IGN1cnJlbnRIYXNoLCBxdWVyeTogY3VycmVudFF1ZXJ5IH0gPSBwcm94eS4kcm91dGVcbiAgICAgIGNvbnN0IGN1cnJlbnRRdWVyeUxlbiA9IE9iamVjdC5rZXlzKGN1cnJlbnRRdWVyeSkubGVuZ3RoXG5cbiAgICAgIC8vIFZ1ZSBSb3V0ZXIgZG9lcyBub3Qga2VlcCBhY2NvdW50IG9mIGhhc2ggJiBxdWVyeSB3aGVuIG1hdGNoaW5nXG4gICAgICAvLyBzbyB3ZSdyZSBkb2luZyB0aGlzIGFzIHdlbGxcblxuICAgICAgZm9yIChjb25zdCB0YWIgb2YgbGlzdCkge1xuICAgICAgICBjb25zdCBleGFjdCA9IHRhYi5yb3V0ZURhdGEuZXhhY3QudmFsdWUgPT09IHRydWVcblxuICAgICAgICBpZiAodGFiLnJvdXRlRGF0YVsgZXhhY3QgPT09IHRydWUgPyAnbGlua0lzRXhhY3RBY3RpdmUnIDogJ2xpbmtJc0FjdGl2ZScgXS52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIGl0IGNhbm5vdCBtYXRjaCBhbnl0aGluZyBhcyBpdCdzIG5vdCBhY3RpdmUgbm9yIGV4YWN0LWFjdGl2ZVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGhhc2gsIHF1ZXJ5LCBtYXRjaGVkLCBocmVmIH0gPSB0YWIucm91dGVEYXRhLnJlc29sdmVkTGluay52YWx1ZVxuICAgICAgICBjb25zdCBxdWVyeUxlbiA9IE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGhcblxuICAgICAgICBpZiAoZXhhY3QgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAoaGFzaCAhPT0gY3VycmVudEhhc2gpIHtcbiAgICAgICAgICAgIC8vIGl0J3Mgc2V0IHRvIGV4YWN0IGJ1dCBpdCBkb2Vzbid0IG1hdGNoZXMgdGhlIGhhc2hcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcXVlcnlMZW4gIT09IGN1cnJlbnRRdWVyeUxlblxuICAgICAgICAgICAgfHwgaGFzUXVlcnlJbmNsdWRlZChjdXJyZW50UXVlcnksIHF1ZXJ5KSA9PT0gZmFsc2VcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIGl0J3Mgc2V0IHRvIGV4YWN0IGJ1dCBpdCBkb2Vzbid0IG1hdGNoZXMgdGhlIHF1ZXJ5XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHlleSwgd2UgZm91bmQgdGhlIHBlcmZlY3QgbWF0Y2ggKHJvdXRlICsgaGFzaCArIHF1ZXJ5KVxuICAgICAgICAgIG5hbWUgPSB0YWIubmFtZS52YWx1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzaCAhPT0gJycgJiYgaGFzaCAhPT0gY3VycmVudEhhc2gpIHtcbiAgICAgICAgICAvLyBpdCBoYXMgaGFzaCBhbmQgaXQgZG9lc24ndCBtYXRjaGVzXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBxdWVyeUxlbiAhPT0gMFxuICAgICAgICAgICYmIGhhc1F1ZXJ5SW5jbHVkZWQocXVlcnksIGN1cnJlbnRRdWVyeSkgPT09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIGl0IGhhcyBxdWVyeSBhbmQgaXQgZG9lc24ndCBpbmNsdWRlcyB0aGUgY3VycmVudCBvbmVcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3U2NvcmUgPSB7XG4gICAgICAgICAgbWF0Y2hlZExlbjogbWF0Y2hlZC5sZW5ndGgsXG4gICAgICAgICAgcXVlcnlEaWZmOiBjdXJyZW50UXVlcnlMZW4gLSBxdWVyeUxlbixcbiAgICAgICAgICBocmVmTGVuOiBocmVmLmxlbmd0aCAtIGhhc2gubGVuZ3RoXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3U2NvcmUubWF0Y2hlZExlbiA+IGJlc3RTY29yZS5tYXRjaGVkTGVuKSB7XG4gICAgICAgICAgLy8gaXQgbWF0Y2hlcyBtb3JlIHJvdXRlcyBzbyBpdCdzIG1vcmUgc3BlY2lmaWMgc28gd2Ugc2V0IGl0IGFzIGN1cnJlbnQgY2hhbXBpb25cbiAgICAgICAgICBuYW1lID0gdGFiLm5hbWUudmFsdWVcbiAgICAgICAgICBiZXN0U2NvcmUgPSBuZXdTY29yZVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3U2NvcmUubWF0Y2hlZExlbiAhPT0gYmVzdFNjb3JlLm1hdGNoZWRMZW4pIHtcbiAgICAgICAgICAvLyBpdCBtYXRjaGVzIGxlc3Mgcm91dGVzIHRoYW4gdGhlIGN1cnJlbnQgY2hhbXBpb24gc28gd2UgZGlzY2FyZCBpdFxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3U2NvcmUucXVlcnlEaWZmIDwgYmVzdFNjb3JlLnF1ZXJ5RGlmZikge1xuICAgICAgICAgIC8vIHF1ZXJ5IGlzIGNsb3NlciB0byB0aGUgY3VycmVudCBvbmUgc28gd2Ugc2V0IGl0IGFzIGN1cnJlbnQgY2hhbXBpb25cbiAgICAgICAgICBuYW1lID0gdGFiLm5hbWUudmFsdWVcbiAgICAgICAgICBiZXN0U2NvcmUgPSBuZXdTY29yZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld1Njb3JlLnF1ZXJ5RGlmZiAhPT0gYmVzdFNjb3JlLnF1ZXJ5RGlmZikge1xuICAgICAgICAgIC8vIGl0IG1hdGNoZXMgbGVzcyByb3V0ZXMgdGhhbiB0aGUgY3VycmVudCBjaGFtcGlvbiBzbyB3ZSBkaXNjYXJkIGl0XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdTY29yZS5ocmVmTGVuID4gYmVzdFNjb3JlLmhyZWZMZW4pIHtcbiAgICAgICAgICAvLyBocmVmIGlzIGxlbmd0aGllciBzbyBpdCdzIG1vcmUgc3BlY2lmaWMgc28gd2Ugc2V0IGl0IGFzIGN1cnJlbnQgY2hhbXBpb25cbiAgICAgICAgICBuYW1lID0gdGFiLm5hbWUudmFsdWVcbiAgICAgICAgICBiZXN0U2NvcmUgPSBuZXdTY29yZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgbmFtZSA9PT0gbnVsbFxuICAgICAgICAmJiB0YWJEYXRhTGlzdC5zb21lKHRhYiA9PiB0YWIucm91dGVEYXRhID09PSB2b2lkIDAgJiYgdGFiLm5hbWUudmFsdWUgPT09IGN1cnJlbnRNb2RlbC52YWx1ZSkgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICAvLyB3ZSBzaG91bGRuJ3QgaW50ZXJmZXJlIGlmIG5vbi1yb3V0ZSB0YWIgaXMgYWN0aXZlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB1cGRhdGVNb2RlbCh7IG5hbWUsIHNldEN1cnJlbnQ6IHRydWUgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3VzaW4gKGUpIHtcbiAgICAgIHJlbW92ZUZvY3VzVGltZW91dCgpXG5cbiAgICAgIGlmIChcbiAgICAgICAgaGFzRm9jdXMudmFsdWUgIT09IHRydWVcbiAgICAgICAgJiYgcm9vdFJlZi52YWx1ZSAhPT0gbnVsbFxuICAgICAgICAmJiBlLnRhcmdldFxuICAgICAgICAmJiB0eXBlb2YgZS50YXJnZXQuY2xvc2VzdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHRhYiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5xLXRhYicpXG5cbiAgICAgICAgLy8gaWYgdGhlIHRhcmdldCBpcyBjb250YWluZWQgYnkgYSBRVGFiL1FSb3V0ZVRhYlxuICAgICAgICAvLyAoaXQgbWlnaHQgYmUgb3RoZXIgZWxlbWVudHMgZm9jdXNlZCwgbGlrZSBhZGRpdGlvbmFsIFFCdG4pXG4gICAgICAgIGlmICh0YWIgJiYgcm9vdFJlZi52YWx1ZS5jb250YWlucyh0YWIpID09PSB0cnVlKSB7XG4gICAgICAgICAgaGFzRm9jdXMudmFsdWUgPSB0cnVlXG4gICAgICAgICAgc2Nyb2xsYWJsZS52YWx1ZSA9PT0gdHJ1ZSAmJiBzY3JvbGxUb1RhYkVsKHRhYilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXNvdXQgKCkge1xuICAgICAgcmVnaXN0ZXJGb2N1c1RpbWVvdXQoKCkgPT4geyBoYXNGb2N1cy52YWx1ZSA9IGZhbHNlIH0sIDMwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZlcmlmeVJvdXRlTW9kZWwgKCkge1xuICAgICAgaWYgKCR0YWJzLmF2b2lkUm91dGVXYXRjaGVyID09PSBmYWxzZSkge1xuICAgICAgICByZWdpc3RlclNjcm9sbFRvVGFiVGltZW91dCh1cGRhdGVBY3RpdmVSb3V0ZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVTY3JvbGxUb1RhYlRpbWVvdXQoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhdGNoUm91dGUgKCkge1xuICAgICAgaWYgKHVud2F0Y2hSb3V0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IHVud2F0Y2ggPSB3YXRjaCgoKSA9PiBwcm94eS4kcm91dGUuZnVsbFBhdGgsIHZlcmlmeVJvdXRlTW9kZWwpXG4gICAgICAgIHVud2F0Y2hSb3V0ZSA9ICgpID0+IHtcbiAgICAgICAgICB1bndhdGNoKClcbiAgICAgICAgICB1bndhdGNoUm91dGUgPSB2b2lkIDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyVGFiICh0YWJEYXRhKSB7XG4gICAgICB0YWJEYXRhTGlzdC5wdXNoKHRhYkRhdGEpXG4gICAgICB0YWJEYXRhTGlzdExlbi52YWx1ZSsrXG5cbiAgICAgIHJlY2FsY3VsYXRlU2Nyb2xsKClcblxuICAgICAgLy8gaWYgaXQncyBhIFFUYWIgb3Igd2UgZG9uJ3QgaGF2ZSBWdWUgUm91dGVyXG4gICAgICBpZiAodGFiRGF0YS5yb3V0ZURhdGEgPT09IHZvaWQgMCB8fCBwcm94eS4kcm91dGUgPT09IHZvaWQgMCkge1xuICAgICAgICAvLyB3ZSBzaG91bGQgcG9zaXRpb24gdG8gdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiIChpZiBhbnkpXG4gICAgICAgIHJlZ2lzdGVyU2Nyb2xsVG9UYWJUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoc2Nyb2xsYWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdXJyZW50TW9kZWwudmFsdWVcbiAgICAgICAgICAgIGNvbnN0IG5ld1RhYiA9IHZhbHVlICE9PSB2b2lkIDAgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09ICcnXG4gICAgICAgICAgICAgID8gdGFiRGF0YUxpc3QuZmluZCh0YWIgPT4gdGFiLm5hbWUudmFsdWUgPT09IHZhbHVlKVxuICAgICAgICAgICAgICA6IG51bGxcblxuICAgICAgICAgICAgbmV3VGFiICYmIHNjcm9sbFRvVGFiRWwobmV3VGFiLnJvb3RSZWYudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgLy8gZWxzZSBpZiBpdCdzIGEgUVJvdXRlVGFiIHdpdGggYSB2YWxpZCBsaW5rXG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gc3RhcnQgd2F0Y2hpbmcgcm91dGVcbiAgICAgICAgd2F0Y2hSb3V0ZSgpXG5cbiAgICAgICAgaWYgKHRhYkRhdGEucm91dGVEYXRhLmhhc1JvdXRlckxpbmsudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICB2ZXJpZnlSb3V0ZU1vZGVsKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVucmVnaXN0ZXJUYWIgKHRhYkRhdGEpIHtcbiAgICAgIHRhYkRhdGFMaXN0LnNwbGljZSh0YWJEYXRhTGlzdC5pbmRleE9mKHRhYkRhdGEpLCAxKVxuICAgICAgdGFiRGF0YUxpc3RMZW4udmFsdWUtLVxuXG4gICAgICByZWNhbGN1bGF0ZVNjcm9sbCgpXG5cbiAgICAgIGlmICh1bndhdGNoUm91dGUgIT09IHZvaWQgMCAmJiB0YWJEYXRhLnJvdXRlRGF0YSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIC8vIHVud2F0Y2ggcm91dGUgaWYgd2UgZG9uJ3QgaGF2ZSBhbnkgUVJvdXRlVGFicyBsZWZ0XG4gICAgICAgIGlmICh0YWJEYXRhTGlzdC5ldmVyeSh0YWIgPT4gdGFiLnJvdXRlRGF0YSA9PT0gdm9pZCAwKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHVud2F0Y2hSb3V0ZSgpXG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGVuIHVwZGF0ZSBtb2RlbFxuICAgICAgICB2ZXJpZnlSb3V0ZU1vZGVsKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCAkdGFicyA9IHtcbiAgICAgIGN1cnJlbnRNb2RlbCxcbiAgICAgIHRhYlByb3BzLFxuICAgICAgaGFzRm9jdXMsXG4gICAgICBoYXNBY3RpdmVUYWIsXG5cbiAgICAgIHJlZ2lzdGVyVGFiLFxuICAgICAgdW5yZWdpc3RlclRhYixcblxuICAgICAgdmVyaWZ5Um91dGVNb2RlbCxcbiAgICAgIHVwZGF0ZU1vZGVsLFxuICAgICAgb25LYmROYXZpZ2F0ZSxcblxuICAgICAgYXZvaWRSb3V0ZVdhdGNoZXI6IGZhbHNlIC8vIGZhbHNlIHwgc3RyaW5nICh1aWQpXG4gICAgfVxuXG4gICAgcHJvdmlkZSh0YWJzS2V5LCAkdGFicylcblxuICAgIGZ1bmN0aW9uIGNsZWFudXAgKCkge1xuICAgICAgYW5pbWF0ZVRpbWVyICE9PSBudWxsICYmIGNsZWFyVGltZW91dChhbmltYXRlVGltZXIpXG4gICAgICBzdG9wQW5pbVNjcm9sbCgpXG4gICAgICB1bndhdGNoUm91dGUgIT09IHZvaWQgMCAmJiB1bndhdGNoUm91dGUoKVxuICAgIH1cblxuICAgIGxldCBoYWRSb3V0ZVdhdGNoZXJcblxuICAgIG9uQmVmb3JlVW5tb3VudChjbGVhbnVwKVxuXG4gICAgb25EZWFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBoYWRSb3V0ZVdhdGNoZXIgPSB1bndhdGNoUm91dGUgIT09IHZvaWQgMFxuICAgICAgY2xlYW51cCgpXG4gICAgfSlcblxuICAgIG9uQWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIGhhZFJvdXRlV2F0Y2hlciA9PT0gdHJ1ZSAmJiB3YXRjaFJvdXRlKClcbiAgICAgIHJlY2FsY3VsYXRlU2Nyb2xsKClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHJvbGU6ICd0YWJsaXN0JyxcbiAgICAgICAgb25Gb2N1c2luLFxuICAgICAgICBvbkZvY3Vzb3V0XG4gICAgICB9LCBbXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7IG9uUmVzaXplOiB1cGRhdGVDb250YWluZXIgfSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogY29udGVudFJlZixcbiAgICAgICAgICBjbGFzczogaW5uZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICBvblNjcm9sbDogdXBkYXRlQXJyb3dzXG4gICAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKSxcblxuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXRhYnNfX2Fycm93IHEtdGFic19fYXJyb3ctLWxlZnQgYWJzb2x1dGUgcS10YWJfX2ljb24nXG4gICAgICAgICAgICArIChsZWZ0QXJyb3cudmFsdWUgPT09IHRydWUgPyAnJyA6ICcgcS10YWJzX19hcnJvdy0tZmFkZWQnKSxcbiAgICAgICAgICBuYW1lOiBwcm9wcy5sZWZ0SWNvbiB8fCAkcS5pY29uU2V0LnRhYnNbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3VwJyA6ICdsZWZ0JyBdLFxuICAgICAgICAgIG9uTW91c2Vkb3duUGFzc2l2ZTogc2Nyb2xsVG9TdGFydCxcbiAgICAgICAgICBvblRvdWNoc3RhcnRQYXNzaXZlOiBzY3JvbGxUb1N0YXJ0LFxuICAgICAgICAgIG9uTW91c2V1cFBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsLFxuICAgICAgICAgIG9uTW91c2VsZWF2ZVBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsLFxuICAgICAgICAgIG9uVG91Y2hlbmRQYXNzaXZlOiBzdG9wQW5pbVNjcm9sbFxuICAgICAgICB9KSxcblxuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXRhYnNfX2Fycm93IHEtdGFic19fYXJyb3ctLXJpZ2h0IGFic29sdXRlIHEtdGFiX19pY29uJ1xuICAgICAgICAgICAgKyAocmlnaHRBcnJvdy52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJyBxLXRhYnNfX2Fycm93LS1mYWRlZCcpLFxuICAgICAgICAgIG5hbWU6IHByb3BzLnJpZ2h0SWNvbiB8fCAkcS5pY29uU2V0LnRhYnNbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ2Rvd24nIDogJ3JpZ2h0JyBdLFxuICAgICAgICAgIG9uTW91c2Vkb3duUGFzc2l2ZTogc2Nyb2xsVG9FbmQsXG4gICAgICAgICAgb25Ub3VjaHN0YXJ0UGFzc2l2ZTogc2Nyb2xsVG9FbmQsXG4gICAgICAgICAgb25Nb3VzZXVwUGFzc2l2ZTogc3RvcEFuaW1TY3JvbGwsXG4gICAgICAgICAgb25Nb3VzZWxlYXZlUGFzc2l2ZTogc3RvcEFuaW1TY3JvbGwsXG4gICAgICAgICAgb25Ub3VjaGVuZFBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsXG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGggfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuXG5jb25zdCBzcGFjZSA9IGgoJ2RpdicsIHsgY2xhc3M6ICdxLXNwYWNlJyB9KVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNwYWNlJyxcblxuICBzZXR1cCAoKSB7XG4gICAgcmV0dXJuICgpID0+IHNwYWNlXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVVbm1vdW50LCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9wbGF0Zm9ybS9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FGb290ZXInLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHJldmVhbDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBlbGV2YXRlZDogQm9vbGVhbixcblxuICAgIGhlaWdodEhpbnQ6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDUwXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdyZXZlYWwnLCAnZm9jdXNpbicgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuKVxuICAgIGlmICgkbGF5b3V0ID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRRm9vdGVyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gcmVmKHBhcnNlSW50KHByb3BzLmhlaWdodEhpbnQsIDEwKSlcbiAgICBjb25zdCByZXZlYWxlZCA9IHJlZih0cnVlKVxuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHJlZihcbiAgICAgIGlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSA9PT0gdHJ1ZSB8fCAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gMFxuICAgICAgICA6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIClcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnJldmVhbCA9PT0gdHJ1ZVxuICAgICAgfHwgJGxheW91dC52aWV3LnZhbHVlLmluZGV4T2YoJ0YnKSAhPT0gLTFcbiAgICAgIHx8ICgkcS5wbGF0Zm9ybS5pcy5pb3MgJiYgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZSlcbiAgICApXG5cbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gJGxheW91dC5jb250YWluZXJIZWlnaHQudmFsdWVcbiAgICAgICAgOiB3aW5kb3dIZWlnaHQudmFsdWVcbiAgICApKVxuXG4gICAgY29uc3Qgb2Zmc2V0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcmV2ZWFsZWQudmFsdWUgPT09IHRydWUgPyBzaXplLnZhbHVlIDogMFxuICAgICAgfVxuICAgICAgY29uc3Qgb2Zmc2V0ID0gJGxheW91dC5zY3JvbGwudmFsdWUucG9zaXRpb24gKyBjb250YWluZXJIZWlnaHQudmFsdWUgKyBzaXplLnZhbHVlIC0gJGxheW91dC5oZWlnaHQudmFsdWVcbiAgICAgIHJldHVybiBvZmZzZXQgPiAwID8gb2Zmc2V0IDogMFxuICAgIH0pXG5cbiAgICBjb25zdCBoaWRkZW4gPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZSB8fCAoZml4ZWQudmFsdWUgPT09IHRydWUgJiYgcmV2ZWFsZWQudmFsdWUgIT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3QgcmV2ZWFsT25Gb2N1cyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlICYmIGhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5yZXZlYWwgPT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWZvb3RlciBxLWxheW91dF9fc2VjdGlvbi0tbWFyZ2luYWwgJ1xuICAgICAgKyAoZml4ZWQudmFsdWUgPT09IHRydWUgPyAnZml4ZWQnIDogJ2Fic29sdXRlJykgKyAnLWJvdHRvbSdcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLWZvb3Rlci0tYm9yZGVyZWQnIDogJycpXG4gICAgICArIChoaWRkZW4udmFsdWUgPT09IHRydWUgPyAnIHEtZm9vdGVyLS1oaWRkZW4nIDogJycpXG4gICAgICArIChcbiAgICAgICAgcHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZVxuICAgICAgICAgID8gJyBxLWxheW91dC0tcHJldmVudC1mb2N1cycgKyAoZml4ZWQudmFsdWUgIT09IHRydWUgPyAnIGhpZGRlbicgOiAnJylcbiAgICAgICAgICA6ICcnXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdFxuICAgICAgICB2aWV3ID0gJGxheW91dC5yb3dzLnZhbHVlLmJvdHRvbSxcbiAgICAgICAgY3NzID0ge31cblxuICAgICAgaWYgKHZpZXdbIDAgXSA9PT0gJ2wnICYmICRsYXlvdXQubGVmdC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdID0gYCR7ICRsYXlvdXQubGVmdC5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICh2aWV3WyAyIF0gPT09ICdyJyAmJiAkbGF5b3V0LnJpZ2h0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF0gPSBgJHsgJGxheW91dC5yaWdodC5zaXplIH1weGBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUoJ2Zvb3RlcicsIHByb3AsIHZhbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbCAocHJvcCwgdmFsKSB7XG4gICAgICBpZiAocHJvcC52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgIHByb3AudmFsdWUgPSB2YWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlc2l6ZSAoeyBoZWlnaHQgfSkge1xuICAgICAgdXBkYXRlTG9jYWwoc2l6ZSwgaGVpZ2h0KVxuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgaGVpZ2h0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVJldmVhbGVkICgpIHtcbiAgICAgIGlmIChwcm9wcy5yZXZlYWwgIT09IHRydWUpIHJldHVyblxuXG4gICAgICBjb25zdCB7IGRpcmVjdGlvbiwgcG9zaXRpb24sIGluZmxlY3Rpb25Qb2ludCB9ID0gJGxheW91dC5zY3JvbGwudmFsdWVcblxuICAgICAgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIChcbiAgICAgICAgZGlyZWN0aW9uID09PSAndXAnXG4gICAgICAgIHx8IHBvc2l0aW9uIC0gaW5mbGVjdGlvblBvaW50IDwgMTAwXG4gICAgICAgIHx8ICRsYXlvdXQuaGVpZ2h0LnZhbHVlIC0gY29udGFpbmVySGVpZ2h0LnZhbHVlIC0gcG9zaXRpb24gLSBzaXplLnZhbHVlIDwgMzAwXG4gICAgICApKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXNpbiAoZXZ0KSB7XG4gICAgICBpZiAocmV2ZWFsT25Gb2N1cy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgZW1pdCgnZm9jdXNpbicsIGV2dClcbiAgICB9XG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHZhbClcbiAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCB0cnVlKVxuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICB9KVxuXG4gICAgd2F0Y2gob2Zmc2V0LCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnJldmVhbCwgdmFsID0+IHtcbiAgICAgIHZhbCA9PT0gZmFsc2UgJiYgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHByb3BzLm1vZGVsVmFsdWUpXG4gICAgfSlcblxuICAgIHdhdGNoKHJldmVhbGVkLCB2YWwgPT4ge1xuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICAgIGVtaXQoJ3JldmVhbCcsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goWyBzaXplLCAkbGF5b3V0LnNjcm9sbCwgJGxheW91dC5oZWlnaHQgXSwgdXBkYXRlUmV2ZWFsZWQpXG5cbiAgICB3YXRjaCgoKSA9PiAkcS5zY3JlZW4uaGVpZ2h0LCB2YWwgPT4ge1xuICAgICAgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSAhPT0gdHJ1ZSAmJiB1cGRhdGVMb2NhbCh3aW5kb3dIZWlnaHQsIHZhbClcbiAgICB9KVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSB7fVxuXG4gICAgJGxheW91dC5pbnN0YW5jZXMuZm9vdGVyID0gaW5zdGFuY2VcbiAgICBwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlICYmIHVwZGF0ZUxheW91dCgnc2l6ZScsIHNpemUudmFsdWUpXG4gICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHByb3BzLm1vZGVsVmFsdWUpXG4gICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCBvZmZzZXQudmFsdWUpXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgaWYgKCRsYXlvdXQuaW5zdGFuY2VzLmZvb3RlciA9PT0gaW5zdGFuY2UpIHtcbiAgICAgICAgJGxheW91dC5pbnN0YW5jZXMuZm9vdGVyID0gdm9pZCAwXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc2l6ZScsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0JywgMClcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIGZhbHNlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIFtcbiAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgICAgICBkZWJvdW5jZTogMCxcbiAgICAgICAgICBvblJlc2l6ZVxuICAgICAgICB9KVxuICAgICAgXSlcblxuICAgICAgcHJvcHMuZWxldmF0ZWQgPT09IHRydWUgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1sYXlvdXRfX3NoYWRvdyBhYnNvbHV0ZS1mdWxsIG92ZXJmbG93LWhpZGRlbiBuby1wb2ludGVyLWV2ZW50cydcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2Zvb3RlcicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgb25Gb2N1c2luXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFRvdWNoUGFuIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG91Y2gtcGFuL1RvdWNoUGFuLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHsgdXNlRm9ybVByb3BzLCB1c2VGb3JtSW5qZWN0IH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZm9ybS5qcydcblxuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IHBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBpc051bWJlciwgaXNPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscy9pcy5qcydcbmltcG9ydCB7IGhEaXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuY29uc3QgbWFya2VyUHJlZml4Q2xhc3MgPSAncS1zbGlkZXJfX21hcmtlci1sYWJlbHMnXG5jb25zdCBkZWZhdWx0TWFya2VyQ29udmVydEZuID0gdiA9PiAoeyB2YWx1ZTogdiB9KVxuY29uc3QgZGVmYXVsdE1hcmtlckxhYmVsUmVuZGVyRm4gPSAoeyBtYXJrZXIgfSkgPT4gaCgnZGl2Jywge1xuICBrZXk6IG1hcmtlci52YWx1ZSxcbiAgc3R5bGU6IG1hcmtlci5zdHlsZSxcbiAgY2xhc3M6IG1hcmtlci5jbGFzc2VzXG59LCBtYXJrZXIubGFiZWwpXG5cbi8vIFBHRE9XTiwgTEVGVCwgRE9XTiwgUEdVUCwgUklHSFQsIFVQXG5leHBvcnQgY29uc3Qga2V5Q29kZXMgPSBbIDM0LCAzNywgNDAsIDMzLCAzOSwgMzggXVxuXG5leHBvcnQgY29uc3QgdXNlU2xpZGVyUHJvcHMgPSB7XG4gIC4uLnVzZURhcmtQcm9wcyxcbiAgLi4udXNlRm9ybVByb3BzLFxuXG4gIG1pbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAwXG4gIH0sXG4gIG1heDoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxMDBcbiAgfSxcbiAgaW5uZXJNaW46IE51bWJlcixcbiAgaW5uZXJNYXg6IE51bWJlcixcblxuICBzdGVwOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEsXG4gICAgdmFsaWRhdG9yOiB2ID0+IHYgPj0gMFxuICB9LFxuXG4gIHNuYXA6IEJvb2xlYW4sXG5cbiAgdmVydGljYWw6IEJvb2xlYW4sXG4gIHJldmVyc2U6IEJvb2xlYW4sXG5cbiAgaGlkZVNlbGVjdGlvbjogQm9vbGVhbixcblxuICBjb2xvcjogU3RyaW5nLFxuICBtYXJrZXJMYWJlbHNDbGFzczogU3RyaW5nLFxuXG4gIGxhYmVsOiBCb29sZWFuLFxuICBsYWJlbENvbG9yOiBTdHJpbmcsXG4gIGxhYmVsVGV4dENvbG9yOiBTdHJpbmcsXG4gIGxhYmVsQWx3YXlzOiBCb29sZWFuLFxuICBzd2l0Y2hMYWJlbFNpZGU6IEJvb2xlYW4sXG5cbiAgbWFya2VyczogWyBCb29sZWFuLCBOdW1iZXIgXSxcbiAgbWFya2VyTGFiZWxzOiBbIEJvb2xlYW4sIEFycmF5LCBPYmplY3QsIEZ1bmN0aW9uIF0sXG4gIHN3aXRjaE1hcmtlckxhYmVsc1NpZGU6IEJvb2xlYW4sXG5cbiAgdHJhY2tJbWc6IFN0cmluZyxcbiAgdHJhY2tDb2xvcjogU3RyaW5nLFxuICBpbm5lclRyYWNrSW1nOiBTdHJpbmcsXG4gIGlubmVyVHJhY2tDb2xvcjogU3RyaW5nLFxuICBzZWxlY3Rpb25Db2xvcjogU3RyaW5nLFxuICBzZWxlY3Rpb25JbWc6IFN0cmluZyxcblxuICB0aHVtYlNpemU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJzIwcHgnXG4gIH0sXG4gIHRyYWNrU2l6ZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnNHB4J1xuICB9LFxuXG4gIGRpc2FibGU6IEJvb2xlYW4sXG4gIHJlYWRvbmx5OiBCb29sZWFuLFxuICBkZW5zZTogQm9vbGVhbixcblxuICB0YWJpbmRleDogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gIHRodW1iQ29sb3I6IFN0cmluZyxcbiAgdGh1bWJQYXRoOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdNIDQsIDEwIGEgNiw2IDAgMSwwIDEyLDAgYSA2LDYgMCAxLDAgLTEyLDAnXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVNsaWRlckVtaXRzID0gWyAncGFuJywgJ3VwZGF0ZTptb2RlbFZhbHVlJywgJ2NoYW5nZScgXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyB1cGRhdGVWYWx1ZSwgdXBkYXRlUG9zaXRpb24sIGdldERyYWdnaW5nLCBmb3JtQXR0cnMgfSkge1xuICBjb25zdCB7IHByb3BzLCBlbWl0LCBzbG90cywgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG5cbiAgY29uc3QgaW5qZWN0Rm9ybUlucHV0ID0gdXNlRm9ybUluamVjdChmb3JtQXR0cnMpXG5cbiAgY29uc3QgYWN0aXZlID0gcmVmKGZhbHNlKVxuICBjb25zdCBwcmV2ZW50Rm9jdXMgPSByZWYoZmFsc2UpXG4gIGNvbnN0IGZvY3VzID0gcmVmKGZhbHNlKVxuICBjb25zdCBkcmFnZ2luZyA9IHJlZihmYWxzZSlcblxuICBjb25zdCBheGlzID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJy0tdicgOiAnLS1oJykpXG4gIGNvbnN0IGxhYmVsU2lkZSA9IGNvbXB1dGVkKCgpID0+ICctJyArIChwcm9wcy5zd2l0Y2hMYWJlbFNpZGUgPT09IHRydWUgPyAnc3dpdGNoZWQnIDogJ3N0YW5kYXJkJykpXG5cbiAgY29uc3QgaXNSZXZlcnNlZCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgPyBwcm9wcy5yZXZlcnNlID09PSB0cnVlXG4gICAgICA6IHByb3BzLnJldmVyc2UgIT09ICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSlcbiAgKSlcblxuICBjb25zdCBpbm5lck1pbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc05hTihwcm9wcy5pbm5lck1pbikgPT09IHRydWUgfHwgcHJvcHMuaW5uZXJNaW4gPCBwcm9wcy5taW5cbiAgICAgID8gcHJvcHMubWluXG4gICAgICA6IHByb3BzLmlubmVyTWluXG4gICkpXG4gIGNvbnN0IGlubmVyTWF4ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGlzTmFOKHByb3BzLmlubmVyTWF4KSA9PT0gdHJ1ZSB8fCBwcm9wcy5pbm5lck1heCA+IHByb3BzLm1heFxuICAgICAgPyBwcm9wcy5tYXhcbiAgICAgIDogcHJvcHMuaW5uZXJNYXhcbiAgKSlcblxuICBjb25zdCBlZGl0YWJsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIHByb3BzLnJlYWRvbmx5ICE9PSB0cnVlXG4gICAgJiYgaW5uZXJNaW4udmFsdWUgPCBpbm5lck1heC52YWx1ZVxuICApKVxuXG4gIGNvbnN0IHJvdW5kVmFsdWVGbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAocHJvcHMuc3RlcCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHYgPT4gdlxuICAgIH1cblxuICAgIGNvbnN0IGRlY2ltYWxzID0gKFN0cmluZyhwcm9wcy5zdGVwKS50cmltKCkuc3BsaXQoJy4nKVsgMSBdIHx8ICcnKS5sZW5ndGhcbiAgICByZXR1cm4gdiA9PiBwYXJzZUZsb2F0KHYudG9GaXhlZChkZWNpbWFscykpXG4gIH0pXG5cbiAgY29uc3Qga2V5U3RlcCA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy5zdGVwID09PSAwID8gMSA6IHByb3BzLnN0ZXApKVxuICBjb25zdCB0YWJpbmRleCA9IGNvbXB1dGVkKCgpID0+IChlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSA/IHByb3BzLnRhYmluZGV4IHx8IDAgOiAtMSkpXG5cbiAgY29uc3QgdHJhY2tMZW4gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5tYXggLSBwcm9wcy5taW4pXG4gIGNvbnN0IGlubmVyQmFyTGVuID0gY29tcHV0ZWQoKCkgPT4gaW5uZXJNYXgudmFsdWUgLSBpbm5lck1pbi52YWx1ZSlcblxuICBjb25zdCBpbm5lck1pblJhdGlvID0gY29tcHV0ZWQoKCkgPT4gY29udmVydE1vZGVsVG9SYXRpbyhpbm5lck1pbi52YWx1ZSkpXG4gIGNvbnN0IGlubmVyTWF4UmF0aW8gPSBjb21wdXRlZCgoKSA9PiBjb252ZXJ0TW9kZWxUb1JhdGlvKGlubmVyTWF4LnZhbHVlKSlcblxuICBjb25zdCBwb3NpdGlvblByb3AgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgID8gKGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAnYm90dG9tJyA6ICd0b3AnKVxuICAgICAgOiAoaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcpXG4gICkpXG5cbiAgY29uc3Qgc2l6ZVByb3AgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnaGVpZ2h0JyA6ICd3aWR0aCcpKVxuICBjb25zdCB0aGlja25lc3NQcm9wID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3dpZHRoJyA6ICdoZWlnaHQnKSlcbiAgY29uc3Qgb3JpZW50YXRpb24gPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnKSlcblxuICBjb25zdCBhdHRyaWJ1dGVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgIHJvbGU6ICdzbGlkZXInLFxuICAgICAgJ2FyaWEtdmFsdWVtaW4nOiBpbm5lck1pbi52YWx1ZSxcbiAgICAgICdhcmlhLXZhbHVlbWF4JzogaW5uZXJNYXgudmFsdWUsXG4gICAgICAnYXJpYS1vcmllbnRhdGlvbic6IG9yaWVudGF0aW9uLnZhbHVlLFxuICAgICAgJ2RhdGEtc3RlcCc6IHByb3BzLnN0ZXBcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgYWNjWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5yZWFkb25seSA9PT0gdHJ1ZSkge1xuICAgICAgYWNjWyAnYXJpYS1yZWFkb25seScgXSA9ICd0cnVlJ1xuICAgIH1cblxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICBgcS1zbGlkZXIgcS1zbGlkZXIkeyBheGlzLnZhbHVlIH0gcS1zbGlkZXItLSR7IGFjdGl2ZS52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJ2luJyB9YWN0aXZlIGlubGluZSBuby13cmFwIGBcbiAgICArIChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICdyb3cnIDogJ2NvbHVtbicpXG4gICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJyBxLXNsaWRlci0tZW5hYmxlZCcgKyAoZWRpdGFibGUudmFsdWUgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1lZGl0YWJsZScgOiAnJykpXG4gICAgKyAoZm9jdXMudmFsdWUgPT09ICdib3RoJyA/ICcgcS1zbGlkZXItLWZvY3VzJyA6ICcnKVxuICAgICsgKHByb3BzLmxhYmVsIHx8IHByb3BzLmxhYmVsQWx3YXlzID09PSB0cnVlID8gJyBxLXNsaWRlci0tbGFiZWwnIDogJycpXG4gICAgKyAocHJvcHMubGFiZWxBbHdheXMgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1sYWJlbC1hbHdheXMnIDogJycpXG4gICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXNsaWRlci0tZGFyaycgOiAnJylcbiAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWRlbnNlIHEtc2xpZGVyLS1kZW5zZScgKyBheGlzLnZhbHVlIDogJycpXG4gIClcblxuICBmdW5jdGlvbiBnZXRQb3NpdGlvbkNsYXNzIChuYW1lKSB7XG4gICAgY29uc3QgY2xzID0gJ3Etc2xpZGVyX18nICsgbmFtZVxuICAgIHJldHVybiBgJHsgY2xzIH0gJHsgY2xzIH0keyBheGlzLnZhbHVlIH0gJHsgY2xzIH0keyBheGlzLnZhbHVlIH0keyBsYWJlbFNpZGUudmFsdWUgfWBcbiAgfVxuICBmdW5jdGlvbiBnZXRBeGlzQ2xhc3MgKG5hbWUpIHtcbiAgICBjb25zdCBjbHMgPSAncS1zbGlkZXJfXycgKyBuYW1lXG4gICAgcmV0dXJuIGAkeyBjbHMgfSAkeyBjbHMgfSR7IGF4aXMudmFsdWUgfWBcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdGlvbkJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGNvbG9yID0gcHJvcHMuc2VsZWN0aW9uQ29sb3IgfHwgcHJvcHMuY29sb3JcbiAgICByZXR1cm4gJ3Etc2xpZGVyX19zZWxlY3Rpb24gYWJzb2x1dGUnXG4gICAgICArIChjb2xvciAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IGNvbG9yIH1gIDogJycpXG4gIH0pXG4gIGNvbnN0IG1hcmtlckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0QXhpc0NsYXNzKCdtYXJrZXJzJykgKyAnIGFic29sdXRlIG92ZXJmbG93LWhpZGRlbicpXG4gIGNvbnN0IHRyYWNrQ29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRBeGlzQ2xhc3MoJ3RyYWNrLWNvbnRhaW5lcicpKVxuICBjb25zdCBwaW5DbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldFBvc2l0aW9uQ2xhc3MoJ3BpbicpKVxuICBjb25zdCBsYWJlbENsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0UG9zaXRpb25DbGFzcygnbGFiZWwnKSlcbiAgY29uc3QgdGV4dENvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0UG9zaXRpb25DbGFzcygndGV4dC1jb250YWluZXInKSlcbiAgY29uc3QgbWFya2VyTGFiZWxzQ29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgIGdldFBvc2l0aW9uQ2xhc3MoJ21hcmtlci1sYWJlbHMtY29udGFpbmVyJylcbiAgICArIChwcm9wcy5tYXJrZXJMYWJlbHNDbGFzcyAhPT0gdm9pZCAwID8gYCAkeyBwcm9wcy5tYXJrZXJMYWJlbHNDbGFzcyB9YCA6ICcnKVxuICApXG5cbiAgY29uc3QgdHJhY2tDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3Etc2xpZGVyX190cmFjayByZWxhdGl2ZS1wb3NpdGlvbiBuby1vdXRsaW5lJ1xuICAgICsgKHByb3BzLnRyYWNrQ29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMudHJhY2tDb2xvciB9YCA6ICcnKVxuICApXG4gIGNvbnN0IHRyYWNrU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWNjID0geyBbIHRoaWNrbmVzc1Byb3AudmFsdWUgXTogcHJvcHMudHJhY2tTaXplIH1cbiAgICBpZiAocHJvcHMudHJhY2tJbWcgIT09IHZvaWQgMCkge1xuICAgICAgYWNjLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHsgcHJvcHMudHJhY2tJbWcgfSkgIWltcG9ydGFudGBcbiAgICB9XG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGNvbnN0IGlubmVyQmFyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLXNsaWRlcl9faW5uZXIgYWJzb2x1dGUnXG4gICAgKyAocHJvcHMuaW5uZXJUcmFja0NvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLmlubmVyVHJhY2tDb2xvciB9YCA6ICcnKVxuICApXG4gIGNvbnN0IGlubmVyQmFyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgaW5uZXJEaWZmID0gaW5uZXJNYXhSYXRpby52YWx1ZSAtIGlubmVyTWluUmF0aW8udmFsdWVcbiAgICBjb25zdCBhY2MgPSB7XG4gICAgICBbIHBvc2l0aW9uUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogaW5uZXJNaW5SYXRpby52YWx1ZSB9JWAsXG4gICAgICBbIHNpemVQcm9wLnZhbHVlIF06IGlubmVyRGlmZiA9PT0gMFxuICAgICAgICA/ICcycHgnXG4gICAgICAgIDogYCR7IDEwMCAqIGlubmVyRGlmZiB9JWBcbiAgICB9XG4gICAgaWYgKHByb3BzLmlubmVyVHJhY2tJbWcgIT09IHZvaWQgMCkge1xuICAgICAgYWNjLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHsgcHJvcHMuaW5uZXJUcmFja0ltZyB9KSAhaW1wb3J0YW50YFxuICAgIH1cbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgZnVuY3Rpb24gY29udmVydFJhdGlvVG9Nb2RlbCAocmF0aW8pIHtcbiAgICBjb25zdCB7IG1pbiwgbWF4LCBzdGVwIH0gPSBwcm9wc1xuICAgIGxldCBtb2RlbCA9IG1pbiArIHJhdGlvICogKG1heCAtIG1pbilcblxuICAgIGlmIChzdGVwID4gMCkge1xuICAgICAgY29uc3QgbW9kdWxvID0gKG1vZGVsIC0gaW5uZXJNaW4udmFsdWUpICUgc3RlcFxuICAgICAgbW9kZWwgKz0gKE1hdGguYWJzKG1vZHVsbykgPj0gc3RlcCAvIDIgPyAobW9kdWxvIDwgMCA/IC0xIDogMSkgKiBzdGVwIDogMCkgLSBtb2R1bG9cbiAgICB9XG5cbiAgICBtb2RlbCA9IHJvdW5kVmFsdWVGbi52YWx1ZShtb2RlbClcblxuICAgIHJldHVybiBiZXR3ZWVuKG1vZGVsLCBpbm5lck1pbi52YWx1ZSwgaW5uZXJNYXgudmFsdWUpXG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0TW9kZWxUb1JhdGlvIChtb2RlbCkge1xuICAgIHJldHVybiB0cmFja0xlbi52YWx1ZSA9PT0gMFxuICAgICAgPyAwXG4gICAgICA6IChtb2RlbCAtIHByb3BzLm1pbikgLyB0cmFja0xlbi52YWx1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RHJhZ2dpbmdSYXRpbyAoZXZ0LCBkcmFnZ2luZykge1xuICAgIGNvbnN0XG4gICAgICBwb3MgPSBwb3NpdGlvbihldnQpLFxuICAgICAgdmFsID0gcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgPyBiZXR3ZWVuKChwb3MudG9wIC0gZHJhZ2dpbmcudG9wKSAvIGRyYWdnaW5nLmhlaWdodCwgMCwgMSlcbiAgICAgICAgOiBiZXR3ZWVuKChwb3MubGVmdCAtIGRyYWdnaW5nLmxlZnQpIC8gZHJhZ2dpbmcud2lkdGgsIDAsIDEpXG5cbiAgICByZXR1cm4gYmV0d2VlbihcbiAgICAgIGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAxLjAgLSB2YWwgOiB2YWwsXG4gICAgICBpbm5lck1pblJhdGlvLnZhbHVlLFxuICAgICAgaW5uZXJNYXhSYXRpby52YWx1ZVxuICAgIClcbiAgfVxuXG4gIGNvbnN0IG1hcmtlclN0ZXAgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNOdW1iZXIocHJvcHMubWFya2VycykgPT09IHRydWUgPyBwcm9wcy5tYXJrZXJzIDoga2V5U3RlcC52YWx1ZSlcbiAgKVxuXG4gIGNvbnN0IG1hcmtlclRpY2tzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IFtdXG4gICAgY29uc3Qgc3RlcCA9IG1hcmtlclN0ZXAudmFsdWVcbiAgICBjb25zdCBtYXggPSBwcm9wcy5tYXhcblxuICAgIGxldCB2YWx1ZSA9IHByb3BzLm1pblxuICAgIGRvIHtcbiAgICAgIGFjYy5wdXNoKHZhbHVlKVxuICAgICAgdmFsdWUgKz0gc3RlcFxuICAgIH0gd2hpbGUgKHZhbHVlIDwgbWF4KVxuXG4gICAgYWNjLnB1c2gobWF4KVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBtYXJrZXJMYWJlbENsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHByZWZpeCA9IGAgJHsgbWFya2VyUHJlZml4Q2xhc3MgfSR7IGF4aXMudmFsdWUgfS1gXG4gICAgcmV0dXJuIG1hcmtlclByZWZpeENsYXNzXG4gICAgICArIGAkeyBwcmVmaXggfSR7IHByb3BzLnN3aXRjaE1hcmtlckxhYmVsc1NpZGUgPT09IHRydWUgPyAnc3dpdGNoZWQnIDogJ3N0YW5kYXJkJyB9YFxuICAgICAgKyBgJHsgcHJlZml4IH0keyBpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ3J0bCcgOiAnbHRyJyB9YFxuICB9KVxuXG4gIGNvbnN0IG1hcmtlckxhYmVsc0xpc3QgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLm1hcmtlckxhYmVscyA9PT0gZmFsc2UpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgcmV0dXJuIGdldE1hcmtlckxpc3QocHJvcHMubWFya2VyTGFiZWxzKS5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKHtcbiAgICAgIGluZGV4LFxuICAgICAgdmFsdWU6IGVudHJ5LnZhbHVlLFxuICAgICAgbGFiZWw6IGVudHJ5LmxhYmVsIHx8IGVudHJ5LnZhbHVlLFxuICAgICAgY2xhc3NlczogbWFya2VyTGFiZWxDbGFzcy52YWx1ZVxuICAgICAgICArIChlbnRyeS5jbGFzc2VzICE9PSB2b2lkIDAgPyAnICcgKyBlbnRyeS5jbGFzc2VzIDogJycpLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgLi4uZ2V0TWFya2VyTGFiZWxTdHlsZShlbnRyeS52YWx1ZSksXG4gICAgICAgIC4uLihlbnRyeS5zdHlsZSB8fCB7fSlcbiAgICAgIH1cbiAgICB9KSlcbiAgfSlcblxuICBjb25zdCBtYXJrZXJTY29wZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgbWFya2VyTGlzdDogbWFya2VyTGFiZWxzTGlzdC52YWx1ZSxcbiAgICBtYXJrZXJNYXA6IG1hcmtlckxhYmVsc01hcC52YWx1ZSxcbiAgICBjbGFzc2VzOiBtYXJrZXJMYWJlbENsYXNzLnZhbHVlLCAvLyBUT0RPIHRzIGRlZmluaXRpb25cbiAgICBnZXRTdHlsZTogZ2V0TWFya2VyTGFiZWxTdHlsZVxuICB9KSlcblxuICBjb25zdCBtYXJrZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBzaXplID0gaW5uZXJCYXJMZW4udmFsdWUgPT09IDBcbiAgICAgID8gJzJweCdcbiAgICAgIDogMTAwICogbWFya2VyU3RlcC52YWx1ZSAvIGlubmVyQmFyTGVuLnZhbHVlXG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uaW5uZXJCYXJTdHlsZS52YWx1ZSxcbiAgICAgIGJhY2tncm91bmRTaXplOiBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICA/IGAycHggJHsgc2l6ZSB9JWBcbiAgICAgICAgOiBgJHsgc2l6ZSB9JSAycHhgXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIGdldE1hcmtlckxpc3QgKGRlZikge1xuICAgIGlmIChkZWYgPT09IGZhbHNlKSB7IHJldHVybiBudWxsIH1cblxuICAgIGlmIChkZWYgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBtYXJrZXJUaWNrcy52YWx1ZS5tYXAoZGVmYXVsdE1hcmtlckNvbnZlcnRGbilcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG1hcmtlclRpY2tzLnZhbHVlLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkZWYodmFsdWUpXG4gICAgICAgIHJldHVybiBpc09iamVjdChpdGVtKSA9PT0gdHJ1ZSA/IHsgLi4uaXRlbSwgdmFsdWUgfSA6IHsgdmFsdWUsIGxhYmVsOiBpdGVtIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyRm4gPSAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA+PSBwcm9wcy5taW4gJiYgdmFsdWUgPD0gcHJvcHMubWF4XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShkZWYpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZGVmXG4gICAgICAgIC5tYXAoaXRlbSA9PiAoaXNPYmplY3QoaXRlbSkgPT09IHRydWUgPyBpdGVtIDogeyB2YWx1ZTogaXRlbSB9KSlcbiAgICAgICAgLmZpbHRlcihmaWx0ZXJGbilcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGVmKS5tYXAoa2V5ID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBkZWZbIGtleSBdXG4gICAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihrZXkpXG4gICAgICByZXR1cm4gaXNPYmplY3QoaXRlbSkgPT09IHRydWUgPyB7IC4uLml0ZW0sIHZhbHVlIH0gOiB7IHZhbHVlLCBsYWJlbDogaXRlbSB9XG4gICAgfSkuZmlsdGVyKGZpbHRlckZuKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWFya2VyTGFiZWxTdHlsZSAodmFsKSB7XG4gICAgcmV0dXJuIHsgWyBwb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqICh2YWwgLSBwcm9wcy5taW4pIC8gdHJhY2tMZW4udmFsdWUgfSVgIH1cbiAgfVxuXG4gIGNvbnN0IG1hcmtlckxhYmVsc01hcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAocHJvcHMubWFya2VyTGFiZWxzID09PSBmYWxzZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICBjb25zdCBhY2MgPSB7fVxuICAgIG1hcmtlckxhYmVsc0xpc3QudmFsdWUuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBhY2NbIGVudHJ5LnZhbHVlIF0gPSBlbnRyeVxuICAgIH0pXG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGZ1bmN0aW9uIGdldE1hcmtlckxhYmVsc0NvbnRlbnQgKCkge1xuICAgIGlmIChzbG90c1sgJ21hcmtlci1sYWJlbC1ncm91cCcgXSAhPT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gc2xvdHNbICdtYXJrZXItbGFiZWwtZ3JvdXAnIF0obWFya2VyU2NvcGUudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgZm4gPSBzbG90c1sgJ21hcmtlci1sYWJlbCcgXSB8fCBkZWZhdWx0TWFya2VyTGFiZWxSZW5kZXJGblxuICAgIHJldHVybiBtYXJrZXJMYWJlbHNMaXN0LnZhbHVlLm1hcChtYXJrZXIgPT4gZm4oe1xuICAgICAgbWFya2VyLFxuICAgICAgLi4ubWFya2VyU2NvcGUudmFsdWVcbiAgICB9KSlcbiAgfVxuXG4gIGNvbnN0IHBhbkRpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAvLyBpZiBlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgIHJldHVybiBbIFtcbiAgICAgIFRvdWNoUGFuLFxuICAgICAgb25QYW4sXG4gICAgICB2b2lkIDAsXG4gICAgICB7XG4gICAgICAgIFsgb3JpZW50YXRpb24udmFsdWUgXTogdHJ1ZSxcbiAgICAgICAgcHJldmVudDogdHJ1ZSxcbiAgICAgICAgc3RvcDogdHJ1ZSxcbiAgICAgICAgbW91c2U6IHRydWUsXG4gICAgICAgIG1vdXNlQWxsRGlyOiB0cnVlXG4gICAgICB9XG4gICAgXSBdXG4gIH0pXG5cbiAgZnVuY3Rpb24gb25QYW4gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmlzRmluYWwgPT09IHRydWUpIHtcbiAgICAgIGlmIChkcmFnZ2luZy52YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHVwZGF0ZVBvc2l0aW9uKGV2ZW50LmV2dClcbiAgICAgICAgLy8gb25seSBpZiB0b3VjaCwgYmVjYXVzZSB3ZSBhbHNvIGhhdmUgbW91c2Vkb3duL3VwOlxuICAgICAgICBldmVudC50b3VjaCA9PT0gdHJ1ZSAmJiB1cGRhdGVWYWx1ZSh0cnVlKVxuICAgICAgICBkcmFnZ2luZy52YWx1ZSA9IHZvaWQgMFxuICAgICAgICBlbWl0KCdwYW4nLCAnZW5kJylcbiAgICAgIH1cbiAgICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlXG4gICAgICBmb2N1cy52YWx1ZSA9IGZhbHNlXG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgIGRyYWdnaW5nLnZhbHVlID0gZ2V0RHJhZ2dpbmcoZXZlbnQuZXZ0KVxuICAgICAgdXBkYXRlUG9zaXRpb24oZXZlbnQuZXZ0KVxuICAgICAgdXBkYXRlVmFsdWUoKVxuICAgICAgYWN0aXZlLnZhbHVlID0gdHJ1ZVxuICAgICAgZW1pdCgncGFuJywgJ3N0YXJ0JylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB1cGRhdGVQb3NpdGlvbihldmVudC5ldnQpXG4gICAgICB1cGRhdGVWYWx1ZSgpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25CbHVyICgpIHtcbiAgICBmb2N1cy52YWx1ZSA9IGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBvbkFjdGl2YXRlIChldnQpIHtcbiAgICB1cGRhdGVQb3NpdGlvbihldnQsIGdldERyYWdnaW5nKGV2dCkpXG4gICAgdXBkYXRlVmFsdWUoKVxuXG4gICAgcHJldmVudEZvY3VzLnZhbHVlID0gdHJ1ZVxuICAgIGFjdGl2ZS52YWx1ZSA9IHRydWVcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRlYWN0aXZhdGUsIHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbkRlYWN0aXZhdGUgKCkge1xuICAgIHByZXZlbnRGb2N1cy52YWx1ZSA9IGZhbHNlXG4gICAgYWN0aXZlLnZhbHVlID0gZmFsc2VcblxuICAgIHVwZGF0ZVZhbHVlKHRydWUpXG4gICAgb25CbHVyKClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRlYWN0aXZhdGUsIHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbk1vYmlsZUNsaWNrIChldnQpIHtcbiAgICB1cGRhdGVQb3NpdGlvbihldnQsIGdldERyYWdnaW5nKGV2dCkpXG4gICAgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5dXAgKGV2dCkge1xuICAgIGlmIChrZXlDb2Rlcy5pbmNsdWRlcyhldnQua2V5Q29kZSkpIHtcbiAgICAgIHVwZGF0ZVZhbHVlKHRydWUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VGV4dENvbnRhaW5lclN0eWxlIChyYXRpbykge1xuICAgIGlmIChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICBjb25zdCBwID0gJHEubGFuZy5ydGwgIT09IHByb3BzLnJldmVyc2UgPyAxIC0gcmF0aW8gOiByYXRpb1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKGNhbGMoJHsgMiAqIHAgLSAxIH0gKiAkeyBwcm9wcy50aHVtYlNpemUgfSAvIDIgKyAkeyA1MCAtIDEwMCAqIHAgfSUpKWBcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUaHVtYlJlbmRlckZuICh0aHVtYikge1xuICAgIGNvbnN0IGZvY3VzQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcmV2ZW50Rm9jdXMudmFsdWUgPT09IGZhbHNlICYmIChmb2N1cy52YWx1ZSA9PT0gdGh1bWIuZm9jdXNWYWx1ZSB8fCBmb2N1cy52YWx1ZSA9PT0gJ2JvdGgnKVxuICAgICAgICA/ICcgcS1zbGlkZXItLWZvY3VzJ1xuICAgICAgICA6ICcnXG4gICAgKSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtc2xpZGVyX190aHVtYiBxLXNsaWRlcl9fdGh1bWIkeyBheGlzLnZhbHVlIH0gcS1zbGlkZXJfX3RodW1iJHsgYXhpcy52YWx1ZSB9LSR7IGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAncnRsJyA6ICdsdHInIH0gYWJzb2x1dGUgbm9uLXNlbGVjdGFibGVgXG4gICAgICArIGZvY3VzQ2xhc3MudmFsdWVcbiAgICAgICsgKHRodW1iLnRodW1iQ29sb3IudmFsdWUgIT09IHZvaWQgMCA/IGAgdGV4dC0keyB0aHVtYi50aHVtYkNvbG9yLnZhbHVlIH1gIDogJycpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgd2lkdGg6IHByb3BzLnRodW1iU2l6ZSxcbiAgICAgIGhlaWdodDogcHJvcHMudGh1bWJTaXplLFxuICAgICAgWyBwb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqIHRodW1iLnJhdGlvLnZhbHVlIH0lYCxcbiAgICAgIHpJbmRleDogZm9jdXMudmFsdWUgPT09IHRodW1iLmZvY3VzVmFsdWUgPyAyIDogdm9pZCAwXG4gICAgfSkpXG5cbiAgICBjb25zdCBwaW5Db2xvciA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHRodW1iLmxhYmVsQ29sb3IudmFsdWUgIT09IHZvaWQgMFxuICAgICAgICA/IGAgdGV4dC0keyB0aHVtYi5sYWJlbENvbG9yLnZhbHVlIH1gXG4gICAgICAgIDogJydcbiAgICApKVxuXG4gICAgY29uc3QgdGV4dENvbnRhaW5lclN0eWxlID0gY29tcHV0ZWQoKCkgPT4gZ2V0VGV4dENvbnRhaW5lclN0eWxlKHRodW1iLnJhdGlvLnZhbHVlKSlcblxuICAgIGNvbnN0IHRleHRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICdxLXNsaWRlcl9fdGV4dCdcbiAgICAgICsgKHRodW1iLmxhYmVsVGV4dENvbG9yLnZhbHVlICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgdGh1bWIubGFiZWxUZXh0Q29sb3IudmFsdWUgfWAgOiAnJylcbiAgICApKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IHRodW1iQ29udGVudCA9IFtcbiAgICAgICAgaCgnc3ZnJywge1xuICAgICAgICAgIGNsYXNzOiAncS1zbGlkZXJfX3RodW1iLXNoYXBlIGFic29sdXRlLWZ1bGwnLFxuICAgICAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgncGF0aCcsIHsgZDogcHJvcHMudGh1bWJQYXRoIH0pXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXNsaWRlcl9fZm9jdXMtcmluZyBmaXQnIH0pXG4gICAgICBdXG5cbiAgICAgIGlmIChwcm9wcy5sYWJlbCA9PT0gdHJ1ZSB8fCBwcm9wcy5sYWJlbEFsd2F5cyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aHVtYkNvbnRlbnQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogcGluQ2xhc3MudmFsdWUgKyAnIGFic29sdXRlIGZpdCBuby1wb2ludGVyLWV2ZW50cycgKyBwaW5Db2xvci52YWx1ZVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgY2xhc3M6IGxhYmVsQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7IG1pbldpZHRoOiBwcm9wcy50aHVtYlNpemUgfVxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IHRleHRDb250YWluZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgICAgICBzdHlsZTogdGV4dENvbnRhaW5lclN0eWxlLnZhbHVlXG4gICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICBoKCdzcGFuJywgeyBjbGFzczogdGV4dENsYXNzLnZhbHVlIH0sIHRodW1iLmxhYmVsLnZhbHVlKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKHByb3BzLm5hbWUgIT09IHZvaWQgMCAmJiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlKSB7XG4gICAgICAgICAgaW5qZWN0Rm9ybUlucHV0KHRodW1iQ29udGVudCwgJ3B1c2gnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIC4uLnRodW1iLmdldE5vZGVEYXRhKClcbiAgICAgIH0sIHRodW1iQ29udGVudClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb250ZW50IChzZWxlY3Rpb25CYXJTdHlsZSwgdHJhY2tDb250YWluZXJUYWJpbmRleCwgdHJhY2tDb250YWluZXJFdmVudHMsIGluamVjdFRodW1iKSB7XG4gICAgY29uc3QgdHJhY2tDb250ZW50ID0gW11cblxuICAgIHByb3BzLmlubmVyVHJhY2tDb2xvciAhPT0gJ3RyYW5zcGFyZW50JyAmJiB0cmFja0NvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiAnaW5uZXInLFxuICAgICAgICBjbGFzczogaW5uZXJCYXJDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IGlubmVyQmFyU3R5bGUudmFsdWVcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgcHJvcHMuc2VsZWN0aW9uQ29sb3IgIT09ICd0cmFuc3BhcmVudCcgJiYgdHJhY2tDb250ZW50LnB1c2goXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGtleTogJ3NlbGVjdGlvbicsXG4gICAgICAgIGNsYXNzOiBzZWxlY3Rpb25CYXJDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHNlbGVjdGlvbkJhclN0eWxlLnZhbHVlXG4gICAgICB9KVxuICAgIClcblxuICAgIHByb3BzLm1hcmtlcnMgIT09IGZhbHNlICYmIHRyYWNrQ29udGVudC5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdtYXJrZXInLFxuICAgICAgICBjbGFzczogbWFya2VyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBtYXJrZXJTdHlsZS52YWx1ZVxuICAgICAgfSlcbiAgICApXG5cbiAgICBpbmplY3RUaHVtYih0cmFja0NvbnRlbnQpXG5cbiAgICBjb25zdCBjb250ZW50ID0gW1xuICAgICAgaERpcihcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICd0cmFja0MnLFxuICAgICAgICAgIGNsYXNzOiB0cmFja0NvbnRhaW5lckNsYXNzLnZhbHVlLFxuICAgICAgICAgIHRhYmluZGV4OiB0cmFja0NvbnRhaW5lclRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgIC4uLnRyYWNrQ29udGFpbmVyRXZlbnRzLnZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogdHJhY2tDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgIHN0eWxlOiB0cmFja1N0eWxlLnZhbHVlXG4gICAgICAgICAgfSwgdHJhY2tDb250ZW50KVxuICAgICAgICBdLFxuICAgICAgICAnc2xpZGUnLFxuICAgICAgICBlZGl0YWJsZS52YWx1ZSwgKCkgPT4gcGFuRGlyZWN0aXZlLnZhbHVlXG4gICAgICApXG4gICAgXVxuXG4gICAgaWYgKHByb3BzLm1hcmtlckxhYmVscyAhPT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IHByb3BzLnN3aXRjaE1hcmtlckxhYmVsc1NpZGUgPT09IHRydWVcbiAgICAgICAgPyAndW5zaGlmdCdcbiAgICAgICAgOiAncHVzaCdcblxuICAgICAgY29udGVudFsgYWN0aW9uIF0oXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBrZXk6ICdtYXJrZXJMJyxcbiAgICAgICAgICBjbGFzczogbWFya2VyTGFiZWxzQ29udGFpbmVyQ2xhc3MudmFsdWVcbiAgICAgICAgfSwgZ2V0TWFya2VyTGFiZWxzQ29udGVudCgpKVxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50XG4gIH1cblxuICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRlYWN0aXZhdGUsIHRydWUpXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZToge1xuICAgICAgYWN0aXZlLFxuICAgICAgZm9jdXMsXG4gICAgICBwcmV2ZW50Rm9jdXMsXG4gICAgICBkcmFnZ2luZyxcblxuICAgICAgZWRpdGFibGUsXG4gICAgICBjbGFzc2VzLFxuICAgICAgdGFiaW5kZXgsXG4gICAgICBhdHRyaWJ1dGVzLFxuXG4gICAgICByb3VuZFZhbHVlRm4sXG4gICAgICBrZXlTdGVwLFxuICAgICAgdHJhY2tMZW4sXG4gICAgICBpbm5lck1pbixcbiAgICAgIGlubmVyTWluUmF0aW8sXG4gICAgICBpbm5lck1heCxcbiAgICAgIGlubmVyTWF4UmF0aW8sXG4gICAgICBwb3NpdGlvblByb3AsXG4gICAgICBzaXplUHJvcCxcbiAgICAgIGlzUmV2ZXJzZWRcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgb25BY3RpdmF0ZSxcbiAgICAgIG9uTW9iaWxlQ2xpY2ssXG4gICAgICBvbkJsdXIsXG4gICAgICBvbktleXVwLFxuICAgICAgZ2V0Q29udGVudCxcbiAgICAgIGdldFRodW1iUmVuZGVyRm4sXG4gICAgICBjb252ZXJ0UmF0aW9Ub01vZGVsLFxuICAgICAgY29udmVydE1vZGVsVG9SYXRpbyxcbiAgICAgIGdldERyYWdnaW5nUmF0aW9cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IHVzZUZvcm1BdHRycyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZvcm0uanMnXG5cbmltcG9ydCB1c2VTbGlkZXIsIHtcbiAgdXNlU2xpZGVyUHJvcHMsXG4gIHVzZVNsaWRlckVtaXRzLFxuICBrZXlDb2Rlc1xufSBmcm9tICcuL3VzZS1zbGlkZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5cbmNvbnN0IGdldE5vZGVEYXRhID0gKCkgPT4gKHt9KVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNsaWRlcicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VTbGlkZXJQcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiB0eXBlb2YgdiA9PT0gJ251bWJlcicgfHwgdiA9PT0gbnVsbFxuICAgIH0sXG5cbiAgICBsYWJlbFZhbHVlOiBbIFN0cmluZywgTnVtYmVyIF1cbiAgfSxcblxuICBlbWl0czogdXNlU2xpZGVyRW1pdHMsXG5cbiAgc2V0dXAgKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IHsgc3RhdGUsIG1ldGhvZHMgfSA9IHVzZVNsaWRlcih7XG4gICAgICB1cGRhdGVWYWx1ZSwgdXBkYXRlUG9zaXRpb24sIGdldERyYWdnaW5nLFxuICAgICAgZm9ybUF0dHJzOiB1c2VGb3JtQXR0cnMocHJvcHMpXG4gICAgfSlcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBjdXJSYXRpbyA9IHJlZigwKVxuICAgIGNvbnN0IG1vZGVsID0gcmVmKDApXG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVNb2RlbCAoKSB7XG4gICAgICBtb2RlbC52YWx1ZSA9IHByb3BzLm1vZGVsVmFsdWUgPT09IG51bGxcbiAgICAgICAgPyBzdGF0ZS5pbm5lck1pbi52YWx1ZVxuICAgICAgICA6IGJldHdlZW4ocHJvcHMubW9kZWxWYWx1ZSwgc3RhdGUuaW5uZXJNaW4udmFsdWUsIHN0YXRlLmlubmVyTWF4LnZhbHVlKVxuICAgIH1cblxuICAgIHdhdGNoKFxuICAgICAgKCkgPT4gYCR7IHByb3BzLm1vZGVsVmFsdWUgfXwkeyBzdGF0ZS5pbm5lck1pbi52YWx1ZSB9fCR7IHN0YXRlLmlubmVyTWF4LnZhbHVlIH1gLFxuICAgICAgbm9ybWFsaXplTW9kZWxcbiAgICApXG5cbiAgICBub3JtYWxpemVNb2RlbCgpXG5cbiAgICBjb25zdCBtb2RlbFJhdGlvID0gY29tcHV0ZWQoKCkgPT4gbWV0aG9kcy5jb252ZXJ0TW9kZWxUb1JhdGlvKG1vZGVsLnZhbHVlKSlcbiAgICBjb25zdCByYXRpbyA9IGNvbXB1dGVkKCgpID0+IChzdGF0ZS5hY3RpdmUudmFsdWUgPT09IHRydWUgPyBjdXJSYXRpby52YWx1ZSA6IG1vZGVsUmF0aW8udmFsdWUpKVxuXG4gICAgY29uc3Qgc2VsZWN0aW9uQmFyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY2MgPSB7XG4gICAgICAgIFsgc3RhdGUucG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiBzdGF0ZS5pbm5lck1pblJhdGlvLnZhbHVlIH0lYCxcbiAgICAgICAgWyBzdGF0ZS5zaXplUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogKHJhdGlvLnZhbHVlIC0gc3RhdGUuaW5uZXJNaW5SYXRpby52YWx1ZSkgfSVgXG4gICAgICB9XG4gICAgICBpZiAocHJvcHMuc2VsZWN0aW9uSW1nICE9PSB2b2lkIDApIHtcbiAgICAgICAgYWNjLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHsgcHJvcHMuc2VsZWN0aW9uSW1nIH0pICFpbXBvcnRhbnRgXG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGdldFRodW1iID0gbWV0aG9kcy5nZXRUaHVtYlJlbmRlckZuKHtcbiAgICAgIGZvY3VzVmFsdWU6IHRydWUsXG4gICAgICBnZXROb2RlRGF0YSxcbiAgICAgIHJhdGlvLFxuICAgICAgbGFiZWw6IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICAgcHJvcHMubGFiZWxWYWx1ZSAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBwcm9wcy5sYWJlbFZhbHVlXG4gICAgICAgICAgOiBtb2RlbC52YWx1ZVxuICAgICAgKSksXG4gICAgICB0aHVtYkNvbG9yOiBjb21wdXRlZCgoKSA9PiBwcm9wcy50aHVtYkNvbG9yIHx8IHByb3BzLmNvbG9yKSxcbiAgICAgIGxhYmVsQ29sb3I6IGNvbXB1dGVkKCgpID0+IHByb3BzLmxhYmVsQ29sb3IpLFxuICAgICAgbGFiZWxUZXh0Q29sb3I6IGNvbXB1dGVkKCgpID0+IHByb3BzLmxhYmVsVGV4dENvbG9yKVxuICAgIH0pXG5cbiAgICBjb25zdCB0cmFja0NvbnRhaW5lckV2ZW50cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS5lZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuICRxLnBsYXRmb3JtLmlzLm1vYmlsZSA9PT0gdHJ1ZVxuICAgICAgICA/IHsgb25DbGljazogbWV0aG9kcy5vbk1vYmlsZUNsaWNrIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICBvbk1vdXNlZG93bjogbWV0aG9kcy5vbkFjdGl2YXRlLFxuICAgICAgICAgICAgb25Gb2N1cyxcbiAgICAgICAgICAgIG9uQmx1cjogbWV0aG9kcy5vbkJsdXIsXG4gICAgICAgICAgICBvbktleWRvd24sXG4gICAgICAgICAgICBvbktleXVwOiBtZXRob2RzLm9uS2V5dXBcbiAgICAgICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZhbHVlIChjaGFuZ2UpIHtcbiAgICAgIGlmIChtb2RlbC52YWx1ZSAhPT0gcHJvcHMubW9kZWxWYWx1ZSkge1xuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG1vZGVsLnZhbHVlKVxuICAgICAgfVxuICAgICAgY2hhbmdlID09PSB0cnVlICYmIGVtaXQoJ2NoYW5nZScsIG1vZGVsLnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERyYWdnaW5nICgpIHtcbiAgICAgIHJldHVybiByb290UmVmLnZhbHVlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24gKGV2ZW50LCBkcmFnZ2luZyA9IHN0YXRlLmRyYWdnaW5nLnZhbHVlKSB7XG4gICAgICBjb25zdCByYXRpbyA9IG1ldGhvZHMuZ2V0RHJhZ2dpbmdSYXRpbyhldmVudCwgZHJhZ2dpbmcpXG5cbiAgICAgIG1vZGVsLnZhbHVlID0gbWV0aG9kcy5jb252ZXJ0UmF0aW9Ub01vZGVsKHJhdGlvKVxuXG4gICAgICBjdXJSYXRpby52YWx1ZSA9IHByb3BzLnNuYXAgIT09IHRydWUgfHwgcHJvcHMuc3RlcCA9PT0gMFxuICAgICAgICA/IHJhdGlvXG4gICAgICAgIDogbWV0aG9kcy5jb252ZXJ0TW9kZWxUb1JhdGlvKG1vZGVsLnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXMgKCkge1xuICAgICAgc3RhdGUuZm9jdXMudmFsdWUgPSB0cnVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXlkb3duIChldnQpIHtcbiAgICAgIGlmICgha2V5Q29kZXMuaW5jbHVkZXMoZXZ0LmtleUNvZGUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBzdG9wQW5kUHJldmVudChldnQpXG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHN0ZXBWYWwgPSAoWyAzNCwgMzMgXS5pbmNsdWRlcyhldnQua2V5Q29kZSkgPyAxMCA6IDEpICogc3RhdGUua2V5U3RlcC52YWx1ZSxcbiAgICAgICAgb2Zmc2V0ID0gKFxuICAgICAgICAgIChbIDM0LCAzNywgNDAgXS5pbmNsdWRlcyhldnQua2V5Q29kZSkgPyAtMSA6IDEpXG4gICAgICAgICAgKiAoc3RhdGUuaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/IC0xIDogMSlcbiAgICAgICAgICAqIChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IC0xIDogMSkgKiBzdGVwVmFsXG4gICAgICAgIClcblxuICAgICAgbW9kZWwudmFsdWUgPSBiZXR3ZWVuKFxuICAgICAgICBzdGF0ZS5yb3VuZFZhbHVlRm4udmFsdWUobW9kZWwudmFsdWUgKyBvZmZzZXQpLFxuICAgICAgICBzdGF0ZS5pbm5lck1pbi52YWx1ZSxcbiAgICAgICAgc3RhdGUuaW5uZXJNYXgudmFsdWVcbiAgICAgIClcblxuICAgICAgdXBkYXRlVmFsdWUoKVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gbWV0aG9kcy5nZXRDb250ZW50KFxuICAgICAgICBzZWxlY3Rpb25CYXJTdHlsZSxcbiAgICAgICAgc3RhdGUudGFiaW5kZXgsXG4gICAgICAgIHRyYWNrQ29udGFpbmVyRXZlbnRzLFxuICAgICAgICBub2RlID0+IHsgbm9kZS5wdXNoKGdldFRodW1iKCkpIH1cbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgcmVmOiByb290UmVmLFxuICAgICAgICBjbGFzczogc3RhdGUuY2xhc3Nlcy52YWx1ZSArIChwcm9wcy5tb2RlbFZhbHVlID09PSBudWxsID8gJyBxLXNsaWRlci0tbm8tdmFsdWUnIDogJycpLFxuICAgICAgICAuLi5zdGF0ZS5hdHRyaWJ1dGVzLnZhbHVlLFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgIH0sIGNvbnRlbnQpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uTW91bnRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcbmltcG9ydCBRQnRuIGZyb20gJy4uL2J0bi9RQnRuLmpzJ1xuaW1wb3J0IFFCdG5Hcm91cCBmcm9tICcuLi9idG4tZ3JvdXAvUUJ0bkdyb3VwLmpzJ1xuaW1wb3J0IFFNZW51IGZyb20gJy4uL21lbnUvUU1lbnUuanMnXG5cbmltcG9ydCB7IGdldEJ0bkRlc2lnbkF0dHIsIHVzZUJ0blByb3BzIH0gZnJvbSAnLi4vYnRuL3VzZS1idG4uanMnXG5pbXBvcnQgdXNlSWQgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLWlkLmpzJ1xuaW1wb3J0IHsgdXNlVHJhbnNpdGlvblByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtdHJhbnNpdGlvbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBzdG9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5jb25zdCBidG5Qcm9wc0xpc3QgPSBPYmplY3Qua2V5cyh1c2VCdG5Qcm9wcylcblxuZXhwb3J0IGNvbnN0IHBhc3NCdG5Qcm9wcyA9IHByb3BzID0+IGJ0blByb3BzTGlzdC5yZWR1Y2UoXG4gIChhY2MsIGtleSkgPT4ge1xuICAgIGNvbnN0IHZhbCA9IHByb3BzWyBrZXkgXVxuICAgIGlmICh2YWwgIT09IHZvaWQgMCkge1xuICAgICAgYWNjWyBrZXkgXSA9IHZhbFxuICAgIH1cbiAgICByZXR1cm4gYWNjXG4gIH0sXG4gIHt9XG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQnRuRHJvcGRvd24nLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlQnRuUHJvcHMsXG4gICAgLi4udXNlVHJhbnNpdGlvblByb3BzLFxuXG4gICAgbW9kZWxWYWx1ZTogQm9vbGVhbixcbiAgICBzcGxpdDogQm9vbGVhbixcbiAgICBkcm9wZG93bkljb246IFN0cmluZyxcblxuICAgIGNvbnRlbnRDbGFzczogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBjb250ZW50U3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG5cbiAgICBjb3ZlcjogQm9vbGVhbixcbiAgICBwZXJzaXN0ZW50OiBCb29sZWFuLFxuICAgIG5vUm91dGVEaXNtaXNzOiBCb29sZWFuLFxuICAgIGF1dG9DbG9zZTogQm9vbGVhbixcblxuICAgIG1lbnVBbmNob3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdib3R0b20gZW5kJ1xuICAgIH0sXG4gICAgbWVudVNlbGY6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0b3AgZW5kJ1xuICAgIH0sXG4gICAgbWVudU9mZnNldDogQXJyYXksXG5cbiAgICBkaXNhYmxlTWFpbkJ0bjogQm9vbGVhbixcbiAgICBkaXNhYmxlRHJvcGRvd246IEJvb2xlYW4sXG5cbiAgICBub0ljb25BbmltYXRpb246IEJvb2xlYW4sXG5cbiAgICB0b2dnbGVBcmlhTGFiZWw6IFN0cmluZ1xuICB9LFxuXG4gIGVtaXRzOiBbICd1cGRhdGU6bW9kZWxWYWx1ZScsICdjbGljaycsICdiZWZvcmVTaG93JywgJ3Nob3cnLCAnYmVmb3JlSGlkZScsICdoaWRlJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IHNob3dpbmcgPSByZWYocHJvcHMubW9kZWxWYWx1ZSlcbiAgICBjb25zdCBtZW51UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgdGFyZ2V0VWlkID0gdXNlSWQoKVxuXG4gICAgY29uc3QgYXJpYUF0dHJzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWNjID0ge1xuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IHNob3dpbmcudmFsdWUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgICAnYXJpYS1oYXNwb3B1cCc6ICd0cnVlJyxcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiB0YXJnZXRVaWQudmFsdWUsXG4gICAgICAgICdhcmlhLWxhYmVsJzogcHJvcHMudG9nZ2xlQXJpYUxhYmVsIHx8IHByb3h5LiRxLmxhbmcubGFiZWxbIHNob3dpbmcudmFsdWUgPT09IHRydWUgPyAnY29sbGFwc2UnIDogJ2V4cGFuZCcgXShwcm9wcy5sYWJlbClcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5kaXNhYmxlID09PSB0cnVlXG4gICAgICAgIHx8IChcbiAgICAgICAgICAocHJvcHMuc3BsaXQgPT09IGZhbHNlICYmIHByb3BzLmRpc2FibGVNYWluQnRuID09PSB0cnVlKVxuICAgICAgICAgIHx8IHByb3BzLmRpc2FibGVEcm9wZG93biA9PT0gdHJ1ZVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgYWNjWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGljb25DbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1idG4tZHJvcGRvd25fX2Fycm93J1xuICAgICAgKyAoc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5ub0ljb25BbmltYXRpb24gPT09IGZhbHNlID8gJyByb3RhdGUtMTgwJyA6ICcnKVxuICAgICAgKyAocHJvcHMuc3BsaXQgPT09IGZhbHNlID8gJyBxLWJ0bi1kcm9wZG93bl9fYXJyb3ctY29udGFpbmVyJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IGJ0bkRlc2lnbkF0dHIgPSBjb21wdXRlZCgoKSA9PiBnZXRCdG5EZXNpZ25BdHRyKHByb3BzKSlcbiAgICBjb25zdCBidG5Qcm9wcyA9IGNvbXB1dGVkKCgpID0+IHBhc3NCdG5Qcm9wcyhwcm9wcykpXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCB2YWwgPT4ge1xuICAgICAgbWVudVJlZi52YWx1ZSAhPT0gbnVsbCAmJiBtZW51UmVmLnZhbHVlWyB2YWwgPyAnc2hvdycgOiAnaGlkZScgXSgpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnNwbGl0LCBoaWRlKVxuXG4gICAgZnVuY3Rpb24gb25CZWZvcmVTaG93IChlKSB7XG4gICAgICBzaG93aW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgZW1pdCgnYmVmb3JlU2hvdycsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TaG93IChlKSB7XG4gICAgICBlbWl0KCdzaG93JywgZSlcbiAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkJlZm9yZUhpZGUgKGUpIHtcbiAgICAgIHNob3dpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgZW1pdCgnYmVmb3JlSGlkZScsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25IaWRlIChlKSB7XG4gICAgICBlbWl0KCdoaWRlJywgZSlcbiAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgZmFsc2UpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25DbGljayAoZSkge1xuICAgICAgZW1pdCgnY2xpY2snLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2xpY2tIaWRlIChlKSB7XG4gICAgICBzdG9wKGUpXG4gICAgICBoaWRlKClcbiAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGUgKGV2dCkge1xuICAgICAgbWVudVJlZi52YWx1ZSAhPT0gbnVsbCAmJiBtZW51UmVmLnZhbHVlLnRvZ2dsZShldnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvdyAoZXZ0KSB7XG4gICAgICBtZW51UmVmLnZhbHVlICE9PSBudWxsICYmIG1lbnVSZWYudmFsdWUuc2hvdyhldnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZSAoZXZ0KSB7XG4gICAgICBtZW51UmVmLnZhbHVlICE9PSBudWxsICYmIG1lbnVSZWYudmFsdWUuaGlkZShldnQpXG4gICAgfVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgICAgc2hvdywgaGlkZSwgdG9nZ2xlXG4gICAgfSlcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlICYmIHNob3coKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgQXJyb3cgPSBbXG4gICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICBjbGFzczogaWNvbkNsYXNzLnZhbHVlLFxuICAgICAgICAgIG5hbWU6IHByb3BzLmRyb3Bkb3duSWNvbiB8fCBwcm94eS4kcS5pY29uU2V0LmFycm93LmRyb3Bkb3duXG4gICAgICAgIH0pXG4gICAgICBdXG5cbiAgICAgIHByb3BzLmRpc2FibGVEcm9wZG93biAhPT0gdHJ1ZSAmJiBBcnJvdy5wdXNoKFxuICAgICAgICBoKFFNZW51LCB7XG4gICAgICAgICAgcmVmOiBtZW51UmVmLFxuICAgICAgICAgIGlkOiB0YXJnZXRVaWQudmFsdWUsXG4gICAgICAgICAgY2xhc3M6IHByb3BzLmNvbnRlbnRDbGFzcyxcbiAgICAgICAgICBzdHlsZTogcHJvcHMuY29udGVudFN0eWxlLFxuICAgICAgICAgIGNvdmVyOiBwcm9wcy5jb3ZlcixcbiAgICAgICAgICBmaXQ6IHRydWUsXG4gICAgICAgICAgcGVyc2lzdGVudDogcHJvcHMucGVyc2lzdGVudCxcbiAgICAgICAgICBub1JvdXRlRGlzbWlzczogcHJvcHMubm9Sb3V0ZURpc21pc3MsXG4gICAgICAgICAgYXV0b0Nsb3NlOiBwcm9wcy5hdXRvQ2xvc2UsXG4gICAgICAgICAgYW5jaG9yOiBwcm9wcy5tZW51QW5jaG9yLFxuICAgICAgICAgIHNlbGY6IHByb3BzLm1lbnVTZWxmLFxuICAgICAgICAgIG9mZnNldDogcHJvcHMubWVudU9mZnNldCxcbiAgICAgICAgICBzZXBhcmF0ZUNsb3NlUG9wdXA6IHRydWUsXG4gICAgICAgICAgdHJhbnNpdGlvblNob3c6IHByb3BzLnRyYW5zaXRpb25TaG93LFxuICAgICAgICAgIHRyYW5zaXRpb25IaWRlOiBwcm9wcy50cmFuc2l0aW9uSGlkZSxcbiAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgICBvbkJlZm9yZVNob3csXG4gICAgICAgICAgb25TaG93LFxuICAgICAgICAgIG9uQmVmb3JlSGlkZSxcbiAgICAgICAgICBvbkhpZGVcbiAgICAgICAgfSwgc2xvdHMuZGVmYXVsdClcbiAgICAgIClcblxuICAgICAgaWYgKHByb3BzLnNwbGl0ID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gaChRQnRuLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWJ0bi1kcm9wZG93biBxLWJ0bi1kcm9wZG93bi0tc2ltcGxlJyxcbiAgICAgICAgICAuLi5idG5Qcm9wcy52YWx1ZSxcbiAgICAgICAgICAuLi5hcmlhQXR0cnMudmFsdWUsXG4gICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBwcm9wcy5kaXNhYmxlTWFpbkJ0biA9PT0gdHJ1ZSxcbiAgICAgICAgICBub1dyYXA6IHRydWUsXG4gICAgICAgICAgcm91bmQ6IGZhbHNlLFxuICAgICAgICAgIG9uQ2xpY2tcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IGhTbG90KHNsb3RzLmxhYmVsLCBbXSkuY29uY2F0KEFycm93KSxcbiAgICAgICAgICBsb2FkaW5nOiBzbG90cy5sb2FkaW5nXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKFFCdG5Hcm91cCwge1xuICAgICAgICBjbGFzczogJ3EtYnRuLWRyb3Bkb3duIHEtYnRuLWRyb3Bkb3duLS1zcGxpdCBuby13cmFwIHEtYnRuLWl0ZW0nLFxuICAgICAgICByb3VuZGVkOiBwcm9wcy5yb3VuZGVkLFxuICAgICAgICBzcXVhcmU6IHByb3BzLnNxdWFyZSxcbiAgICAgICAgLi4uYnRuRGVzaWduQXR0ci52YWx1ZSxcbiAgICAgICAgZ2xvc3N5OiBwcm9wcy5nbG9zc3ksXG4gICAgICAgIHN0cmV0Y2g6IHByb3BzLnN0cmV0Y2hcbiAgICAgIH0sICgpID0+IFtcbiAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWJ0bi1kcm9wZG93bi0tY3VycmVudCcsXG4gICAgICAgICAgLi4uYnRuUHJvcHMudmFsdWUsXG4gICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBwcm9wcy5kaXNhYmxlTWFpbkJ0biA9PT0gdHJ1ZSxcbiAgICAgICAgICBub1dyYXA6IHRydWUsXG4gICAgICAgICAgcm91bmQ6IGZhbHNlLFxuICAgICAgICAgIG9uQ2xpY2s6IG9uQ2xpY2tIaWRlXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkZWZhdWx0OiBzbG90cy5sYWJlbCxcbiAgICAgICAgICBsb2FkaW5nOiBzbG90cy5sb2FkaW5nXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgIGNsYXNzOiAncS1idG4tZHJvcGRvd25fX2Fycm93LWNvbnRhaW5lciBxLWFuY2hvci0tc2tpcCcsXG4gICAgICAgICAgLi4uYXJpYUF0dHJzLnZhbHVlLFxuICAgICAgICAgIC4uLmJ0bkRlc2lnbkF0dHIudmFsdWUsXG4gICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBwcm9wcy5kaXNhYmxlRHJvcGRvd24gPT09IHRydWUsXG4gICAgICAgICAgcm91bmRlZDogcHJvcHMucm91bmRlZCxcbiAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgdGV4dENvbG9yOiBwcm9wcy50ZXh0Q29sb3IsXG4gICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgIHNpemU6IHByb3BzLnNpemUsXG4gICAgICAgICAgcGFkZGluZzogcHJvcHMucGFkZGluZyxcbiAgICAgICAgICByaXBwbGU6IHByb3BzLnJpcHBsZVxuICAgICAgICB9LCAoKSA9PiBBcnJvdylcbiAgICAgIF0pXG4gICAgfVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8cS1idG4tZHJvcGRvd24gaWNvbj1cInNldHRpbmdzXCIgZmxhdD5cbiAgICA8cS1saXN0IGJvcmRlcmVkIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCI+XG4gICAgICA8cS1pdGVtPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBvdmVybGluZSBjbGFzcz1cInEtbWIteHNcIlxuICAgICAgICAgICAgPlZlcnRpY2FsIFBvc2l0aW9uPC9xLWl0ZW0tbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgICAgPHEtYnRuLXRvZ2dsZVxuICAgICAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLnZlcnRpY2FsUG9zaXRpb25cIlxuICAgICAgICAgICAgY29sb3I9XCJncmV5LTlcIlxuICAgICAgICAgICAgOm9wdGlvbnM9XCJbXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdUb3AnLCB2YWx1ZTogJ3N0YXJ0JyB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnTWlkZGxlJywgdmFsdWU6ICdjZW50ZXInIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdCb3R0b20nLCB2YWx1ZTogJ2VuZCcgfSxcbiAgICAgICAgICAgIF1cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICAgIDxxLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsIG92ZXJsaW5lIGNsYXNzPVwicS1tYi14c1wiXG4gICAgICAgICAgICA+SG9yaXpvbnRhbCBQb3NpdGlvbjwvcS1pdGVtLWxhYmVsXG4gICAgICAgICAgPlxuICAgICAgICAgIDxxLWJ0bi10b2dnbGVcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy5ob3Jpem9udGFsUG9zaXRpb25cIlxuICAgICAgICAgICAgY29sb3I9XCJncmV5LTlcIlxuICAgICAgICAgICAgOm9wdGlvbnM9XCJbXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdMZWZ0JywgdmFsdWU6ICdzdGFydCcgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ0NlbnRlcicsIHZhbHVlOiAnY2VudGVyJyB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnUmlnaHQnLCB2YWx1ZTogJ2VuZCcgfSxcbiAgICAgICAgICAgIF1cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICAgIDxxLXNlcGFyYXRvciBjbGFzcz1cInEtbXQtc21cIiAvPlxuICAgICAgPHEtaXRlbT5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+U2hvdyBJY29uczwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICA8cS10b2dnbGUgdi1tb2RlbD1cInNldHRpbmdzLnNob3dJY29uc1wiIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICAgIDxxLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPlNxdWFyZSBJY29uczwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICA8cS10b2dnbGUgdi1tb2RlbD1cInNldHRpbmdzLnNxdWFyZUljb25zXCIgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPHEtc2VwYXJhdG9yIC8+XG4gICAgICA8cS1pdGVtPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5Gb3JjZSBNb2JpbGUgVUk8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgPHEtdG9nZ2xlIHYtbW9kZWw9XCJzZXR0aW5ncy5mb3JjZU1vYmlsZVVpXCIgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPHEtaXRlbT5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+U2hvdyBVcGRhdGUgVGltZTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICA8cS10b2dnbGUgdi1tb2RlbD1cInNldHRpbmdzLnNob3dVcGRhdGVUaW1lXCIgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPHEtaXRlbT5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+U2hvdyBMYXN0IFN3aXRjaDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICA8cS10b2dnbGUgdi1tb2RlbD1cInNldHRpbmdzLnNob3dMYXN0U3dpdGNoXCIgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPHEtc2VwYXJhdG9yIC8+XG4gICAgICA8cS1pdGVtPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5JY29uIFNpemU8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLXNsaWRlclxuICAgICAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLmljb25TaXplXCJcbiAgICAgICAgICAgIDptaW49XCIyNFwiXG4gICAgICAgICAgICA6bWF4PVwiMTI4XCJcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICA6bGFiZWwtdmFsdWU9XCJzZXR0aW5ncy5pY29uU2l6ZSArICdweCdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L3EtbGlzdD5cbiAgPC9xLWJ0bi1kcm9wZG93bj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VTZXR0aW5nc1N0b3JlIH0gZnJvbSAnc3JjL3N0b3Jlcy9zZXR0aW5ncy1zdG9yZSc7XG5cbmNvbnN0IHNldHRpbmdzID0gdXNlU2V0dGluZ3NTdG9yZSgpLnN0YXR1cy50YWJsZTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8cS1idG4tZHJvcGRvd24gaWNvbj1cInNldHRpbmdzXCIgZmxhdD5cbiAgICA8cS1saXN0IGJvcmRlcmVkIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCI+XG4gICAgICA8cS1pdGVtPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5TaG93IFVwZGF0ZSBUaW1lPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgIDxxLXRvZ2dsZSB2LW1vZGVsPVwic2V0dGluZ3Muc2hvd1VwZGF0ZVRpbWVcIiAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgICA8cS1pdGVtPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5TaG93IExhc3QgU3dpdGNoPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgIDxxLXRvZ2dsZSB2LW1vZGVsPVwic2V0dGluZ3Muc2hvd0xhc3RTd2l0Y2hcIiAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgICA8cS1zZXBhcmF0b3IgLz5cbiAgICAgIDxxLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPlNxdWFyZSBJY29uczwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICA8cS10b2dnbGUgdi1tb2RlbD1cInNldHRpbmdzLnNxdWFyZUljb25zXCIgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPHEtaXRlbT5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+SWNvbiBTaXplPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1zbGlkZXJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy5pY29uU2l6ZVwiXG4gICAgICAgICAgICA6bWluPVwiMjRcIlxuICAgICAgICAgICAgOm1heD1cIjEyOFwiXG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgOmxhYmVsLXZhbHVlPVwic2V0dGluZ3MuaWNvblNpemUgKyAncHgnXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgPC9xLWxpc3Q+XG4gIDwvcS1idG4tZHJvcGRvd24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgdXNlU2V0dGluZ3NTdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc2V0dGluZ3Mtc3RvcmUnO1xuXG5jb25zdCBzZXR0aW5ncyA9IHVzZVNldHRpbmdzU3RvcmUoKS5zdGF0dXMubGlzdDtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8cS1idG4tZHJvcGRvd24gaWNvbj1cInNldHRpbmdzXCIgZmxhdD5cbiAgICA8cS1saXN0IGJvcmRlcmVkIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCI+XG4gICAgICA8cS1pdGVtPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5TaG93IFVwZGF0ZSBUaW1lPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgIDxxLXRvZ2dsZSB2LW1vZGVsPVwic2V0dGluZ3Muc2hvd1VwZGF0ZVRpbWVcIiAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgICA8cS1pdGVtPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5TaG93IExhc3QgU3dpdGNoPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgIDxxLXRvZ2dsZSB2LW1vZGVsPVwic2V0dGluZ3Muc2hvd0xhc3RTd2l0Y2hcIiAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgICA8cS1pdGVtPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5TaG93IFN5c3RlbSBEZXNjcmlwdGlvbjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICA8cS10b2dnbGUgdi1tb2RlbD1cInNldHRpbmdzLnNob3dTeXN0ZW1EZXNjcmlwdGlvblwiIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICAgIDxxLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPlNob3cgRnJvbnRlciBEZXNjcmlwdGlvbjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICA8cS10b2dnbGUgdi1tb2RlbD1cInNldHRpbmdzLnNob3dGcm9udGVyRGVzY3JpcHRpb25cIiAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgICA8cS1zZXBhcmF0b3IgLz5cbiAgICAgIDxxLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPlBhbmVsIFdpZHRoPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1zbGlkZXJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy50aWxlU2l6ZVwiXG4gICAgICAgICAgICA6bWluPVwiMTAwXCJcbiAgICAgICAgICAgIDptYXg9XCI1MDBcIlxuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIDpsYWJlbC12YWx1ZT1cInNldHRpbmdzLnRpbGVTaXplICsgJ3B4J1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvcS1saXN0PlxuICA8L3EtYnRuLWRyb3Bkb3duPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHVzZVNldHRpbmdzU3RvcmUgfSBmcm9tICdzcmMvc3RvcmVzL3NldHRpbmdzLXN0b3JlJztcblxuY29uc3Qgc2V0dGluZ3MgPSB1c2VTZXR0aW5nc1N0b3JlKCkuc3RhdHVzLnRpbGU7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZT5cbiAgICA8cm91dGVyLXZpZXcgOmlkcz1cImlkc1wiIDpzeXN0ZW1zPVwic3lzdGVtc1wiIDpmcm9udGVycz1cImZyb250ZXJzXCIgLz5cbiAgPC9xLXBhZ2U+XG4gIDxxLWZvb3Rlcj5cbiAgICA8cS10b29sYmFyPlxuICAgICAgPHEtdGFicyB2LW1vZGVsPVwic3RhdHVzLmxhc3RMYXlvdXRcIiBhbGlnbj1cImxlZnRcIiBjbGFzcz1cImJnLXByaW1hcnlcIj5cbiAgICAgICAgPHEtcm91dGUtdGFiXG4gICAgICAgICAgdG89XCIvc3RhdHVzL3RhYmxlXCJcbiAgICAgICAgICBuYW1lPVwidGFibGVcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWNvbj1cInRhYmxlX2NoYXJ0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtcm91dGUtdGFiXG4gICAgICAgICAgdG89XCIvc3RhdHVzL2xpc3RcIlxuICAgICAgICAgIG5hbWU9XCJsaXN0XCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGljb249XCJ2aWV3X2xpc3RcIlxuICAgICAgICAvPlxuICAgICAgICA8cS1yb3V0ZS10YWJcbiAgICAgICAgICB0bz1cIi9zdGF0dXMvdGlsZVwiXG4gICAgICAgICAgbmFtZT1cInRpbGVcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgaWNvbj1cImdyaWRfdmlld1wiXG4gICAgICAgIC8+XG4gICAgICA8L3EtdGFicz5cbiAgICAgIDxxLXNwYWNlIC8+XG4gICAgICA8dGFibGUtc2V0dGluZ3Mgdi1pZj1cInN0YXR1cy5sYXN0TGF5b3V0ID09ICd0YWJsZSdcIiAvPlxuICAgICAgPGxpc3Qtc2V0dGluZ3Mgdi1pZj1cInN0YXR1cy5sYXN0TGF5b3V0ID09ICdsaXN0J1wiIC8+XG4gICAgICA8dGlsZS1zZXR0aW5ncyB2LWlmPVwic3RhdHVzLmxhc3RMYXlvdXQgPT0gJ3RpbGUnXCIgLz5cbiAgICA8L3EtdG9vbGJhcj5cbiAgPC9xLWZvb3Rlcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJztcblxuaW1wb3J0IHsgdXNlU3lzdGVtU3RvcmUgfSBmcm9tICdzcmMvc3RvcmVzL3N5c3RlbS1zdG9yZSc7XG5pbXBvcnQgeyB1c2VTZXR0aW5nc1N0b3JlIH0gZnJvbSAnc3JjL3N0b3Jlcy9zZXR0aW5ncy1zdG9yZSc7XG5pbXBvcnQgeyB1c2VTZXJ2aWNlcyB9IGZyb20gJ3NyYy9saWIvU2VydmljZXMnO1xuXG5pbXBvcnQgVGFibGVTZXR0aW5ncyBmcm9tICdzcmMvY29tcG9uZW50cy9TdGF0dXNQYWdlL1NldHRpbmdzL1RhYmxlU2V0dGluZ3MudnVlJztcbmltcG9ydCBMaXN0U2V0dGluZ3MgZnJvbSAnc3JjL2NvbXBvbmVudHMvU3RhdHVzUGFnZS9TZXR0aW5ncy9MaXN0U2V0dGluZ3MudnVlJztcbmltcG9ydCBUaWxlU2V0dGluZ3MgZnJvbSAnc3JjL2NvbXBvbmVudHMvU3RhdHVzUGFnZS9TZXR0aW5ncy9UaWxlU2V0dGluZ3MudnVlJztcblxuY29uc3QgeyBmcm9udGVyQ2FjaGUsIHN5c3RlbUNhY2hlIH0gPSB1c2VTZXJ2aWNlcygpO1xuXG5jb25zdCB7IHN0YXR1cyB9ID0gc3RvcmVUb1JlZnModXNlU2V0dGluZ3NTdG9yZSgpKTtcbmNvbnN0IHsgaWRzIH0gPSBzdG9yZVRvUmVmcyh1c2VTeXN0ZW1TdG9yZSgpKTtcbmNvbnN0IGZyb250ZXJzID0gZnJvbnRlckNhY2hlLm9iamVjdHM7XG5jb25zdCBzeXN0ZW1zID0gc3lzdGVtQ2FjaGUub2JqZWN0cztcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIm9mZnNldCIsInBvc2l0aW9uIiwiZHJhZ2dpbmciLCJjbGFzc2VzIiwicmF0aW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWFBLElBQUksS0FBSztBQUVGLE1BQU0sY0FBYyxDQUFFLFNBQVMsU0FBVztBQUUxQyxNQUFNLGNBQWM7QUFBQSxFQUN6QixNQUFNO0FBQUEsRUFDTixPQUFPLENBQUUsUUFBUSxNQUFRO0FBQUEsRUFFekIsT0FBTyxDQUFFLFNBQVMsTUFBUTtBQUFBLEVBQzFCLFdBQVc7QUFBQSxFQUVYLE1BQU07QUFBQSxJQUNKLE1BQU0sQ0FBRSxRQUFRLE1BQVE7QUFBQSxJQUN4QixTQUFTLE1BQU0sS0FBTSxJQUFJO0FBQUEsRUFDMUI7QUFBQSxFQUVELFFBQVE7QUFBQSxFQUVSLFVBQVUsQ0FBRSxRQUFRLE1BQVE7QUFBQSxFQUM1QixTQUFTO0FBQUEsRUFFVCxjQUFjO0FBQUEsRUFFZCxRQUFRO0FBQUEsSUFDTixNQUFNLENBQUUsU0FBUyxNQUFRO0FBQUEsSUFDekIsU0FBUztBQUFBLEVBQ1Y7QUFDSDtBQUVlLFNBQVEsT0FBRSxPQUFPLE9BQU8sTUFBTSxXQUFXO0FBQ3RELFFBQU0sUUFBUSxPQUFPLFNBQVMsYUFBYTtBQUMzQyxNQUFJLFVBQVUsZUFBZTtBQUMzQixZQUFRLE1BQU0scURBQXFEO0FBQ25FLFdBQU87QUFBQSxFQUNSO0FBRUQsUUFBTSxFQUFFLE1BQU8sSUFBRyxtQkFBb0I7QUFFdEMsUUFBTSxnQkFBZ0IsSUFBSSxJQUFJO0FBQzlCLFFBQU0sVUFBVSxJQUFJLElBQUk7QUFDeEIsUUFBTSxrQkFBa0IsSUFBSSxJQUFJO0FBRWhDLFFBQU0sU0FBUyxTQUFTLE1BQ3RCLE1BQU0sWUFBWSxRQUFRLE1BQU0sV0FBVyxRQUN2QyxRQUNBLE9BQU87QUFBQSxJQUNQLEVBQUUsVUFBVSxDQUFFLElBQUksRUFBRSxHQUFJLE9BQU8sS0FBTTtBQUFBLElBQ3JDLE1BQU0sV0FBVyxPQUFPLENBQUUsSUFBRyxNQUFNO0FBQUEsRUFDcEMsQ0FDSjtBQUVELFFBQU0sV0FBVyxTQUFTLE1BQU0sTUFBTSxhQUFhLFVBQVUsTUFBTSxJQUFJO0FBRXZFLFFBQU0sVUFBVTtBQUFBLElBQVMsTUFDdkIsdUVBRUUsU0FBUyxVQUFVLE9BRWIsb0JBQ0csTUFBTSxTQUFTLE1BQU0sY0FBYyxNQUFNLE1BQU0sU0FBUyxNQUFNLGNBQWMsT0FDNUUsTUFBTSxTQUFTLE1BQU0sY0FBYyxTQUFVLE1BQU0sU0FBUyxNQUFNLFdBQWEsS0FBSSxPQUNuRixNQUFNLFNBQVMsTUFBTSxnQkFBZ0IsT0FBUSxNQUFNLFNBQVMsTUFBTSxhQUFlLEtBQUksTUFFMUYsdUJBRUgsTUFBTSxRQUFRLE1BQU0sU0FBUyxNQUFNLFNBQVMsTUFBTSxnQkFBZ0IsUUFBUSxpQkFBaUIsT0FDM0YsTUFBTSxXQUFXLFFBQVEsTUFBTSxTQUFTLE1BQU0sV0FBVyxPQUFPLG9CQUFvQixPQUNwRixNQUFNLFlBQVksT0FBTyxjQUFjLDhDQUN2QyxjQUFjLFNBQVMsVUFBVSxVQUFVLFFBQVE7QUFBQSxFQUN2RDtBQUVELFFBQU0sYUFBYTtBQUFBLElBQVMsTUFDMUIsOEZBQ0csTUFBTSxTQUFTLE1BQU0sZ0JBQWdCLE9BQU8sdUNBQXVDLGFBQ25GLE1BQU0saUJBQWlCLFNBQVMsSUFBSyxNQUFNLGlCQUFrQjtBQUFBLEVBQ2pFO0FBRUQsUUFBTSxXQUFXLFNBQVMsTUFFdEIsTUFBTSxZQUFZLFFBQ2YsTUFBTSxTQUFTLFVBQVUsUUFDeEIsU0FBUyxVQUFVLFNBQVMsTUFBTSxhQUFhLFVBQVUsT0FFM0QsS0FDQSxNQUFNLFlBQVksQ0FDdkI7QUFFRCxXQUFTLFFBQVMsR0FBRyxVQUFVO0FBQzdCLFFBQUksYUFBYSxRQUFRLGNBQWMsVUFBVSxNQUFNO0FBQ3JELG9CQUFjLE1BQU0sTUFBTztBQUFBLElBQzVCO0FBRUQsUUFBSSxNQUFNLFlBQVksTUFBTTtBQUUxQixVQUFJLGNBQWMsVUFBVSxVQUFVLGNBQWMsVUFBVSxNQUFNO0FBQ2xFLHVCQUFlLENBQUM7QUFBQSxNQUNqQjtBQUNEO0FBQUEsSUFDRDtBQUdELFFBQUksY0FBYyxRQUFRO0FBQ3hCLFlBQU0sWUFBWSxFQUFFLE1BQU0sTUFBTSxLQUFJLENBQUU7QUFDdEMsV0FBSyxTQUFTLENBQUM7QUFDZjtBQUFBLElBQ0Q7QUFFRCxRQUFJLFVBQVUsY0FBYyxVQUFVLE1BQU07QUFDMUMsWUFBTSxLQUFLLENBQUMsT0FBTyxPQUFPO0FBSXhCLFlBQUk7QUFDSixjQUFNLFFBQVEsS0FBSyxPQUFPLFVBQVUsWUFBWSxLQUFLLElBQUksTUFBTSxFQUFFLE1BQU0sT0FDbEUsTUFBTSxvQkFBb0IsSUFBSyxJQUNoQztBQUVKLGVBQU8sVUFBVSxxQkFBcUIsR0FBRyxFQUFFLEdBQUcsTUFBTSxtQkFBbUIsTUFBTSxFQUMxRSxNQUFNLFNBQU87QUFBRSxzQkFBWTtBQUFBLFFBQUcsQ0FBRSxFQUNoQyxLQUFLLGVBQWE7QUFDakIsY0FBSSxVQUFVLE1BQU0sbUJBQW1CO0FBQ3JDLGtCQUFNLG9CQUFvQjtBQUsxQixnQkFDRSxjQUFjLFdBQ1osY0FBYyxVQUNWLFVBQVUsWUFBWSxVQUFVLFVBQVUsUUFBUSxXQUFXLDhCQUE4QixNQUFNLE9BRXZHO0FBQ0Esb0JBQU0sWUFBWSxFQUFFLE1BQU0sTUFBTSxLQUFJLENBQUU7QUFBQSxZQUN2QztBQUFBLFVBQ0Y7QUFFRCxjQUFJLEtBQUssc0JBQXNCLE1BQU07QUFDbkMsbUJBQU8sY0FBYyxTQUFTLFFBQVEsT0FBTyxTQUFTLElBQUk7QUFBQSxVQUMzRDtBQUFBLFFBQ2IsQ0FBVztBQUFBLE1BQ0o7QUFFRCxXQUFLLFNBQVMsR0FBRyxFQUFFO0FBQ25CLFFBQUUscUJBQXFCLFFBQVEsR0FBSTtBQUVuQztBQUFBLElBQ0Q7QUFFRCxTQUFLLFNBQVMsQ0FBQztBQUFBLEVBQ2hCO0FBRUQsV0FBUyxVQUFXLEdBQUc7QUFDckIsUUFBSSxVQUFVLEdBQUcsQ0FBRSxJQUFJLEVBQUksQ0FBQSxHQUFHO0FBQzVCLGNBQVEsR0FBRyxJQUFJO0FBQUEsSUFDaEIsV0FFQyxnQkFBZ0IsQ0FBQyxNQUFNLFFBQ3BCLEVBQUUsV0FBVyxNQUNiLEVBQUUsV0FBVyxNQUNiLEVBQUUsV0FBVyxRQUNiLEVBQUUsWUFBWSxNQUNqQjtBQUNBLFlBQU0sY0FBYyxFQUFFLFNBQVMsTUFBTSxHQUFHLE1BQU0sUUFBUSxlQUFlLENBQUM7QUFBQSxJQUN2RTtBQUVELFNBQUssV0FBVyxDQUFDO0FBQUEsRUFDbEI7QUFFRCxXQUFTLGFBQWM7QUFDckIsVUFDRSxTQUFTLE1BQU0sU0FBUyxNQUFNLGlCQUM5QixVQUFVLENBQUUsR0FDWixZQUFZLEVBQUUsT0FBTztBQUFBLE1BQ25CLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxRQUNMO0FBQUEsUUFDQSxNQUFNLFNBQVMsTUFBTTtBQUFBLE1BQ3RCO0FBQUEsSUFDVCxDQUFPO0FBRUgsVUFBTSxTQUFTLFVBQVUsUUFBUTtBQUFBLE1BQy9CLEVBQUUsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsTUFBTSxNQUFNO0FBQUEsTUFDcEIsQ0FBTztBQUFBLElBQ0Y7QUFFRCxVQUFNLFVBQVUsVUFBVSxRQUFRO0FBQUEsTUFDaEMsRUFBRSxPQUFPLEVBQUUsT0FBTyxlQUFnQixHQUFFLE1BQU0sS0FBSztBQUFBLElBQ2hEO0FBRUQsVUFBTSxVQUFVLFNBQVMsUUFBUTtBQUFBLE1BQy9CLE1BQU0sY0FBYyxTQUNoQixFQUFFLE9BQU87QUFBQSxRQUNULE9BQU87QUFBQSxRQUNQLE9BQU8sTUFBTSxVQUFVLE9BQ25CLE1BQU0sUUFDTjtBQUFBLFFBQ0osTUFBTSxNQUFNO0FBQUEsTUFDdEIsQ0FBUyxJQUNDLEVBQUUsT0FBTztBQUFBLFFBQ1QsT0FBTyxrQkFDRixNQUFNLFVBQVUsT0FBTyxTQUFVLE1BQU0sS0FBSyxLQUFNO0FBQUEsTUFDakUsQ0FBUztBQUFBLElBQ0o7QUFFRCxlQUFXLFFBQVEsUUFBUSxLQUFLLFNBQVM7QUFFekMsVUFBTSxPQUFPO0FBQUEsTUFDWCxFQUFFLE9BQU8sRUFBRSxPQUFPLGtCQUFrQixVQUFVLElBQUksS0FBSyxlQUFlO0FBQUEsTUFDdEUsRUFBRSxPQUFPLEVBQUUsT0FBTyxXQUFXLFNBQVMsV0FBVyxNQUFNLFNBQVMsT0FBTyxDQUFDO0FBQUEsSUFDekU7QUFFRCxlQUFXLFNBQVMsS0FBSyxLQUFLLFNBQVM7QUFFdkMsV0FBTztBQUFBLEVBQ1I7QUFFRCxRQUFNLFVBQVU7QUFBQSxJQUNkLE1BQU0sU0FBUyxNQUFNLE1BQU0sSUFBSTtBQUFBLElBQy9CO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBRUQsa0JBQWdCLE1BQU07QUFDcEIsVUFBTSxjQUFjLE9BQU87QUFBQSxFQUMvQixDQUFHO0FBRUQsWUFBVSxNQUFNO0FBQ2QsVUFBTSxZQUFZLE9BQU87QUFBQSxFQUM3QixDQUFHO0FBRUQsV0FBUyxVQUFXLEtBQUssWUFBWTtBQUNuQyxVQUFNLE9BQU87QUFBQSxNQUNYLEtBQUs7QUFBQSxNQUNMLE9BQU8sUUFBUTtBQUFBLE1BQ2YsVUFBVSxTQUFTO0FBQUEsTUFDbkIsTUFBTTtBQUFBLE1BQ04saUJBQWlCLFNBQVMsVUFBVSxPQUFPLFNBQVM7QUFBQSxNQUNwRCxpQkFBaUIsTUFBTSxZQUFZLE9BQU8sU0FBUztBQUFBLE1BQ25EO0FBQUEsTUFDQTtBQUFBLE1BQ0EsR0FBRztBQUFBLElBQ0o7QUFFRCxXQUFPO0FBQUEsTUFDTCxFQUFFLEtBQUssTUFBTSxZQUFZO0FBQUEsTUFDekIsQ0FBRSxDQUFFLFFBQVEsT0FBTyxNQUFTO0FBQUEsSUFDN0I7QUFBQSxFQUNGO0FBRUQsU0FBTyxFQUFFLFdBQVcsTUFBTztBQUM3QjtBQ25RQSxNQUFBLFlBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUVELE9BQU87QUFBQSxFQUVQLE1BQU8sT0FBTyxFQUFFLE9BQU8sS0FBSSxHQUFJO0FBQzdCLFVBQU0sWUFBWSxjQUFjO0FBQUEsTUFDOUIsOEJBQThCO0FBQUEsSUFDcEMsQ0FBSztBQUVELFVBQU0sRUFBRSxXQUFXLE1BQUssSUFBSztBQUFBLE1BQzNCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPLFNBQVMsTUFBTSxNQUFNLEtBQUs7QUFBQSxRQUNqQyxHQUFHO0FBQUEsTUFDSjtBQUFBLElBQ0Y7QUFFRCxVQUFNLE1BQU0sR0FBSSxNQUFNLElBQU0sTUFBTSxNQUFNLEtBQUssT0FBUyxVQUFVLGFBQWEsU0FBUyxDQUFBLEdBQUksSUFBTSxJQUFHLE1BQU07QUFDdkcsWUFBTSxpQkFBa0I7QUFBQSxJQUM5QixDQUFLO0FBRUQsV0FBTyxNQUFNLFVBQVUsVUFBVSxRQUFRLE9BQU8sVUFBVSxVQUFVLEtBQUs7QUFBQSxFQUMxRTtBQUNILENBQUM7QUN6QkQsU0FBUyxrQkFBbUIsT0FBTyxLQUFLLFVBQVU7QUFDaEQsUUFBTSxNQUFNLGFBQWEsT0FDckIsQ0FBRSxRQUFRLE9BQVMsSUFDbkIsQ0FBRSxPQUFPLFFBQVU7QUFFdkIsU0FBTyxZQUFhLFFBQVEsT0FBTyxJQUFLLENBQUMsSUFBSyxJQUFLLENBQUMsQ0FBSSxHQUFHLFFBQVEsU0FBVSxLQUFPLEtBQUk7QUFDMUY7QUFFQSxNQUFNLGNBQWMsQ0FBRSxRQUFRLFVBQVUsU0FBUyxTQUFXO0FBRTVELE1BQUEsUUFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxZQUFZLENBQUUsUUFBUSxNQUFRO0FBQUEsSUFFOUIsT0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsV0FBVyxPQUFLLFlBQVksU0FBUyxDQUFDO0FBQUEsSUFDdkM7QUFBQSxJQUNELFlBQVk7QUFBQSxNQUNWLE1BQU0sQ0FBRSxRQUFRLE1BQVE7QUFBQSxNQUN4QixTQUFTO0FBQUEsSUFDVjtBQUFBLElBRUQsVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLElBRVQsYUFBYTtBQUFBLElBQ2IsYUFBYTtBQUFBLElBQ2IsZUFBZTtBQUFBLElBQ2YsZ0JBQWdCO0FBQUEsSUFDaEIsVUFBVTtBQUFBLElBQ1YsV0FBVztBQUFBLElBRVgsZUFBZTtBQUFBLElBQ2YsY0FBYztBQUFBLElBRWQsaUJBQWlCO0FBQUEsSUFFakIsaUJBQWlCO0FBQUEsSUFDakIsYUFBYTtBQUFBLElBQ2IsUUFBUTtBQUFBLElBRVIsT0FBTztBQUFBLElBRVAsY0FBYztBQUFBLElBRWQsdUJBQXVCLENBQUUsVUFBVSxLQUFPO0FBQUEsRUFDM0M7QUFBQSxFQUVELE1BQU8sT0FBTyxFQUFFLE9BQU8sS0FBSSxHQUFJO0FBQzdCLFVBQU0sRUFBRSxNQUFPLElBQUcsbUJBQW9CO0FBQ3RDLFVBQU0sRUFBRSxHQUFFLElBQUs7QUFFZixVQUFNLEVBQUUsY0FBYyxtQkFBb0IsSUFBRyxRQUFTO0FBQ3RELFVBQU0sRUFBRSxjQUFjLHlCQUEwQixJQUFHLFFBQVM7QUFDNUQsVUFBTSxFQUFFLGNBQWMsb0JBQXFCLElBQUcsUUFBUztBQUV2RCxVQUFNLEVBQUUsaUJBQWlCLHNCQUFzQixlQUFlLG1CQUFrQixJQUFLLFdBQVk7QUFDakcsVUFBTSxFQUFFLGlCQUFpQiw0QkFBNEIsZUFBZSx5QkFBd0IsSUFBSyxXQUFZO0FBRTdHLFVBQU0sVUFBVSxJQUFJLElBQUk7QUFDeEIsVUFBTSxhQUFhLElBQUksSUFBSTtBQUUzQixVQUFNLGVBQWUsSUFBSSxNQUFNLFVBQVU7QUFDekMsVUFBTSxhQUFhLElBQUksS0FBSztBQUM1QixVQUFNLFlBQVksSUFBSSxJQUFJO0FBQzFCLFVBQU0sYUFBYSxJQUFJLEtBQUs7QUFDNUIsVUFBTSxVQUFVLElBQUksS0FBSztBQUV6QixVQUFNLGNBQWMsQ0FBRTtBQUN0QixVQUFNLGlCQUFpQixJQUFJLENBQUM7QUFDNUIsVUFBTSxXQUFXLElBQUksS0FBSztBQUUxQixRQUFJLGVBQWUsTUFBTSxjQUFjLE1BQU07QUFFN0MsVUFBTSxXQUFXLFNBQVMsT0FBTztBQUFBLE1BQy9CLGFBQWEsTUFBTTtBQUFBLE1BQ25CLGFBQWEsTUFBTTtBQUFBLE1BQ25CLGVBQWUsTUFBTTtBQUFBLE1BQ3JCLGdCQUFnQjtBQUFBLFFBQ2QsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNELGlCQUFpQixNQUFNO0FBQUEsTUFDdkIsYUFBYSxNQUFNO0FBQUEsTUFDbkIsUUFBUSxNQUFNO0FBQUEsSUFDcEIsRUFBTTtBQUVGLFVBQU0sZUFBZSxTQUFTLE1BQU07QUFDbEMsWUFBTSxNQUFNLGVBQWU7QUFDM0IsWUFBTSxNQUFNLGFBQWE7QUFFekIsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsWUFBSSxZQUFhLENBQUMsRUFBRyxLQUFLLFVBQVUsS0FBSztBQUN2QyxpQkFBTztBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBRUQsYUFBTztBQUFBLElBQ2IsQ0FBSztBQUVELFVBQU0sYUFBYSxTQUFTLE1BQU07QUFDaEMsWUFBTSxRQUFRLFdBQVcsVUFBVSxPQUMvQixTQUNDLFFBQVEsVUFBVSxPQUFPLFlBQVksTUFBTTtBQUVoRCxhQUFPLDBCQUEyQjtJQUN4QyxDQUFLO0FBRUQsVUFBTSxVQUFVO0FBQUEsTUFBUyxNQUN2QiwyQ0FDZSxXQUFXLFVBQVUsT0FBTyxLQUFLLE1BQU0sc0JBQ3ZDLE1BQU0sYUFBYSxPQUFPLGFBQWEsZ0NBQy9CLE1BQU0sa0JBQWtCLE9BQU8sWUFBWSwrQkFDeEMsTUFBTSxpQkFBaUIsT0FBTyxLQUFLLEtBQUssYUFDL0QsTUFBTSxVQUFVLE9BQU8sbUJBQW1CLE9BQzFDLE1BQU0sV0FBVyxPQUFPLGdCQUFnQixPQUN4QyxNQUFNLFlBQVksT0FBTyxrQkFBa0I7QUFBQSxJQUMvQztBQUVELFVBQU0sYUFBYTtBQUFBLE1BQVMsTUFDMUIsMkdBQ0UsV0FBVyxTQUNWLE1BQU0saUJBQWlCLFNBQVMsSUFBSyxNQUFNLGlCQUFrQjtBQUFBLElBQ2pFO0FBRUQsVUFBTSxXQUFXLFNBQVMsTUFDeEIsTUFBTSxhQUFhLE9BQ2YsRUFBRSxXQUFXLFVBQVUsU0FBUyxnQkFBZ0IsUUFBUSxlQUFnQixJQUN4RSxFQUFFLFdBQVcsU0FBUyxTQUFTLGVBQWUsUUFBUSxjQUFlLENBQzFFO0FBRUQsVUFBTSxRQUFRLFNBQVMsTUFBTSxNQUFNLGFBQWEsUUFBUSxHQUFHLEtBQUssUUFBUSxJQUFJO0FBQzVFLFVBQU0sbUJBQW1CLFNBQVMsTUFBTSxvQkFBb0IsU0FBUyxNQUFNLFVBQVUsSUFBSTtBQUV6RixVQUFNLE9BQU8sWUFBWTtBQUV6QixVQUFNLE1BQU0sTUFBTSxZQUFZLFVBQVE7QUFDcEMsa0JBQVksRUFBRSxNQUFNLFlBQVksTUFBTSxVQUFVLE1BQU07QUFBQSxJQUM1RCxDQUFLO0FBRUQsVUFBTSxNQUFNLE1BQU0sZUFBZSxpQkFBaUI7QUFFbEQsYUFBUyxZQUFhLEVBQUUsTUFBTSxZQUFZLFNBQVEsR0FBSTtBQUNwRCxVQUFJLGFBQWEsVUFBVSxNQUFNO0FBQy9CLFlBQUksYUFBYSxRQUFRLE1BQU8scUJBQXVCLE1BQUssUUFBUTtBQUNsRSxlQUFLLHFCQUFxQixJQUFJO0FBQUEsUUFDL0I7QUFFRCxZQUNFLGVBQWUsUUFDWixNQUFPLHFCQUF1QixNQUFLLFFBQ3RDO0FBQ0Esa0JBQVEsYUFBYSxPQUFPLElBQUk7QUFDaEMsdUJBQWEsUUFBUTtBQUFBLFFBQ3RCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFFRCxhQUFTLG9CQUFxQjtBQUM1Qix5QkFBbUIsTUFBTTtBQUN2Qix3QkFBZ0I7QUFBQSxVQUNkLE9BQU8sUUFBUSxNQUFNO0FBQUEsVUFDckIsUUFBUSxRQUFRLE1BQU07QUFBQSxRQUNoQyxDQUFTO0FBQUEsTUFDVCxDQUFPO0FBQUEsSUFDRjtBQUVELGFBQVMsZ0JBQWlCLFNBQVM7QUFJakMsVUFBSSxTQUFTLFVBQVUsVUFBVSxXQUFXLFVBQVU7QUFBTTtBQUU1RCxZQUNFLE9BQU8sUUFBUyxTQUFTLE1BQU0sU0FBVyxHQUMxQyxhQUFhLEtBQUs7QUFBQSxRQUNoQixXQUFXLE1BQU8sU0FBUyxNQUFNLE1BQVE7QUFBQSxRQUN6QyxNQUFNLFVBQVUsT0FBTztBQUFBLFVBQ3JCLFdBQVcsTUFBTTtBQUFBLFVBQ2pCLENBQUMsS0FBSyxPQUFPLE9BQU8sR0FBSSxTQUFTLE1BQU0sT0FBUyxLQUFJO0FBQUEsVUFDcEQ7QUFBQSxRQUNEO0FBQUEsTUFDRixHQUNELFNBQVMsT0FBTyxLQUFLLGFBQWE7QUFFcEMsaUJBQVcsUUFBUTtBQUduQixpQkFBVyxRQUFRLHlCQUF5QixZQUFZO0FBRXhELGNBQVEsUUFBUSxPQUFPLFNBQVMsTUFBTSxZQUFZLEVBQUU7QUFBQSxJQUNyRDtBQUVELGFBQVMsUUFBUyxTQUFTLFNBQVM7QUFDbEMsWUFDRSxTQUFTLFlBQVksVUFBVSxZQUFZLFFBQVEsWUFBWSxLQUMzRCxZQUFZLEtBQUssU0FBTyxJQUFJLEtBQUssVUFBVSxPQUFPLElBQ2xELE1BQ0osU0FBUyxZQUFZLFVBQVUsWUFBWSxRQUFRLFlBQVksS0FDM0QsWUFBWSxLQUFLLFNBQU8sSUFBSSxLQUFLLFVBQVUsT0FBTyxJQUNsRDtBQUVOLFVBQUksVUFBVSxRQUFRO0FBQ3BCLGNBQ0UsUUFBUSxPQUFPLGdCQUFnQixPQUMvQixRQUFRLE9BQU8sZ0JBQWdCO0FBRWpDLFlBQUksaUJBQWlCLE1BQU07QUFDekIsdUJBQWEsWUFBWTtBQUN6Qix5QkFBZTtBQUFBLFFBQ2hCO0FBRUQsY0FBTSxNQUFNLGFBQWE7QUFDekIsY0FBTSxNQUFNLFlBQVk7QUFDeEIsY0FBTSxNQUFNLGFBQWE7QUFDekIsY0FBTSxNQUFNLFlBQVk7QUFFeEIsY0FDRSxTQUFTLE1BQU0sc0JBQXVCLEdBQ3RDLFNBQVMsTUFBTSxzQkFBdUI7QUFFeEMsY0FBTSxNQUFNLFlBQVksTUFBTSxhQUFhLE9BQ3ZDLGlCQUFrQixPQUFPLE1BQU0sT0FBTyxHQUFLLG1CQUFtQixPQUFPLFNBQVMsT0FBTyxTQUFTLE9BQU8sU0FBUyxDQUFHLFFBQ2pILGVBQWdCLE9BQU8sT0FBTyxPQUFPLElBQU0sbUJBQW1CLE9BQU8sUUFBUSxPQUFPLFFBQVEsT0FBTyxRQUFRLENBQUc7QUFHbEgsNEJBQW9CLE1BQU07QUFDeEIseUJBQWUsV0FBVyxNQUFNO0FBQzlCLDJCQUFlO0FBQ2Ysa0JBQU0sTUFBTSxhQUFhO0FBQ3pCLGtCQUFNLE1BQU0sWUFBWTtBQUFBLFVBQ3pCLEdBQUUsRUFBRTtBQUFBLFFBQ2YsQ0FBUztBQUFBLE1BQ0Y7QUFFRCxVQUFJLFVBQVUsV0FBVyxVQUFVLE1BQU07QUFDdkMsc0JBQWMsT0FBTyxRQUFRLEtBQUs7QUFBQSxNQUNuQztBQUFBLElBQ0Y7QUFFRCxhQUFTLGNBQWUsSUFBSTtBQUMxQixZQUNFLEVBQUUsTUFBTSxPQUFPLEtBQUssT0FBTSxJQUFLLFdBQVcsTUFBTSxzQkFBdUIsR0FDdkUsU0FBUyxHQUFHLHNCQUF1QjtBQUVyQyxVQUFJLFNBQVMsTUFBTSxhQUFhLE9BQU8sT0FBTyxNQUFNLE1BQU0sT0FBTyxPQUFPO0FBRXhFLFVBQUksU0FBUyxHQUFHO0FBQ2QsbUJBQVcsTUFBTyxNQUFNLGFBQWEsT0FBTyxjQUFjLGlCQUFrQixLQUFLLE1BQU0sTUFBTTtBQUM3RixxQkFBYztBQUNkO0FBQUEsTUFDRDtBQUVELGdCQUFVLE1BQU0sYUFBYSxPQUFPLE9BQU8sU0FBUyxTQUFTLE9BQU8sUUFBUTtBQUM1RSxVQUFJLFNBQVMsR0FBRztBQUNkLG1CQUFXLE1BQU8sTUFBTSxhQUFhLE9BQU8sY0FBYyxpQkFBa0IsS0FBSyxLQUFLLE1BQU07QUFDNUYscUJBQWM7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUVELGFBQVMsZUFBZ0I7QUFDdkIsWUFBTSxVQUFVLFdBQVc7QUFDM0IsVUFBSSxZQUFZO0FBQU07QUFFdEIsWUFDRSxPQUFPLFFBQVEsc0JBQXVCLEdBQ3RDLE1BQU0sTUFBTSxhQUFhLE9BQU8sUUFBUSxZQUFZLEtBQUssSUFBSSxRQUFRLFVBQVU7QUFFakYsVUFBSSxNQUFNLFVBQVUsTUFBTTtBQUN4QixrQkFBVSxRQUFRLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxJQUFJLFFBQVEsY0FBYztBQUN0RSxtQkFBVyxRQUFRLE1BQU07QUFBQSxNQUMxQixPQUNJO0FBQ0gsa0JBQVUsUUFBUSxNQUFNO0FBQ3hCLG1CQUFXLFFBQVEsTUFBTSxhQUFhLE9BQ2xDLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxJQUFJLFFBQVEsZUFDdkMsS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLElBQUksUUFBUTtBQUFBLE1BQzNDO0FBQUEsSUFDRjtBQUVELGFBQVMsYUFBYyxPQUFPO0FBQzVCLHNCQUFnQixRQUFRLGNBQWMsV0FBVztBQUNqRCxvQkFBYyxZQUFZLE1BQU07QUFDOUIsWUFBSSxjQUFjLEtBQUssTUFBTSxNQUFNO0FBQ2pDLHlCQUFnQjtBQUFBLFFBQ2pCO0FBQUEsTUFDRixHQUFFLENBQUM7QUFBQSxJQUNMO0FBRUQsYUFBUyxnQkFBaUI7QUFDeEIsbUJBQWEsaUJBQWlCLFVBQVUsT0FBTyxPQUFPLG1CQUFtQixDQUFDO0FBQUEsSUFDM0U7QUFFRCxhQUFTLGNBQWU7QUFDdEIsbUJBQWEsaUJBQWlCLFVBQVUsT0FBTyxJQUFJLE9BQU8sZ0JBQWdCO0FBQUEsSUFDM0U7QUFFRCxhQUFTLGlCQUFrQjtBQUN6QixVQUFJLGdCQUFnQixNQUFNO0FBQ3hCLHNCQUFjLFdBQVc7QUFDekIsc0JBQWM7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUVELGFBQVMsY0FBZSxTQUFTLFFBQVE7QUFDdkMsWUFBTSxPQUFPLE1BQU0sVUFBVSxPQUFPO0FBQUEsUUFDbEMsV0FBVyxNQUFNO0FBQUEsUUFDakIsUUFBTSxPQUFPLFVBQVcsR0FBRyxXQUFXLEdBQUcsUUFBUSxvQkFBb0IsTUFBTTtBQUFBLE1BQzVFO0FBRUQsWUFBTSxNQUFNLEtBQUs7QUFDakIsVUFBSSxRQUFRO0FBQUc7QUFFZixVQUFJLFlBQVksSUFBSTtBQUNsQixzQkFBYyxLQUFNLEVBQUc7QUFDdkIsYUFBTSxDQUFHLEVBQUMsTUFBTztBQUNqQixlQUFPO0FBQUEsTUFDUjtBQUNELFVBQUksWUFBWSxJQUFJO0FBQ2xCLHNCQUFjLEtBQU0sTUFBTSxFQUFHO0FBQzdCLGFBQU0sTUFBTSxDQUFHLEVBQUMsTUFBTztBQUN2QixlQUFPO0FBQUEsTUFDUjtBQUVELFlBQU0sVUFBVSxhQUFhLE1BQU0sYUFBYSxPQUFPLEtBQW1CO0FBQzFFLFlBQU0sVUFBVSxhQUFhLE1BQU0sYUFBYSxPQUFPLEtBQXFCO0FBRTVFLFlBQU0sTUFBTSxZQUFZLE9BQU8sS0FBTSxZQUFZLE9BQU8sSUFBSTtBQUU1RCxVQUFJLFFBQVEsUUFBUTtBQUNsQixjQUFNLFNBQVMsTUFBTSxVQUFVLE9BQU8sS0FBSztBQUMzQyxjQUFNLFFBQVEsS0FBSyxRQUFRLE1BQU0sSUFBSSxNQUFNO0FBRTNDLFlBQUksU0FBUyxLQUFLLFFBQVEsS0FBSztBQUM3Qix3QkFBYyxLQUFNLE1BQU87QUFDM0IsZUFBTSxLQUFLLEVBQUcsTUFBTSxFQUFFLGVBQWUsS0FBSSxDQUFFO0FBQUEsUUFDNUM7QUFFRCxlQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFLRCxVQUFNLFFBQVEsU0FBUyxNQUNyQixpQkFBaUIsVUFBVSxPQUN2QixFQUFFLEtBQUssYUFBVyxLQUFLLElBQUksUUFBUSxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsUUFBUTtBQUFFLGNBQVEsYUFBYSxDQUFDO0FBQUEsTUFBTyxJQUVwRyxNQUFNLGFBQWEsT0FDZixFQUFFLEtBQUssYUFBVyxRQUFRLFdBQVcsS0FBSyxDQUFDLFNBQVMsUUFBUTtBQUFFLGNBQVEsWUFBWTtBQUFBLElBQUcsRUFBSSxJQUN6RixFQUFFLEtBQUssYUFBVyxRQUFRLFlBQVksS0FBSyxDQUFDLFNBQVMsUUFBUTtBQUFFLGNBQVEsYUFBYTtBQUFBLElBQUcsRUFBSSxDQUV0RztBQUVELGFBQVMsY0FBZSxPQUFPO0FBQzdCLFlBQ0UsVUFBVSxXQUFXLE9BQ3JCLEVBQUUsS0FBSyxRQUFRLE1BQU07QUFFdkIsVUFDRSxPQUFPLE9BQ1AsTUFBTSxJQUFJLE9BQU87QUFFbkIsWUFBTSxZQUFZLFFBQVEsTUFBTSxLQUFLO0FBRXJDLGFBQU8sWUFBWTtBQUVuQixVQUFJLE1BQU0sR0FBRztBQUNYLGVBQU87QUFDUCxjQUFNO0FBQUEsTUFDUCxXQUVFLGNBQWMsTUFBTSxPQUFPLFNBQ3hCLGNBQWMsS0FBSyxPQUFPLE9BQzlCO0FBQ0EsZUFBTztBQUNQLGNBQU07QUFBQSxNQUNQO0FBRUQsVUFBSSxTQUFTLEdBQUc7QUFDaEIsbUJBQWM7QUFFZCxhQUFPO0FBQUEsSUFDUjtBQUVELGFBQVMsaUJBQWtCLGFBQWEsZUFBZTtBQUNyRCxpQkFBVyxPQUFPLGFBQWE7QUFDN0IsWUFBSSxZQUFhLEdBQUcsTUFBTyxjQUFlLEdBQUcsR0FBSTtBQUMvQyxpQkFBTztBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBRUQsYUFBTztBQUFBLElBQ1I7QUFHRCxhQUFTLG9CQUFxQjtBQUM1QixVQUFJLE9BQU8sTUFBTSxZQUFZLEVBQUUsWUFBWSxHQUFHLFdBQVcsTUFBTSxTQUFTLEVBQUc7QUFFM0UsWUFBTSxPQUFPLFlBQVksT0FBTyxTQUFPLElBQUksY0FBYyxVQUFVLElBQUksVUFBVSxjQUFjLFVBQVUsSUFBSTtBQUM3RyxZQUFNLEVBQUUsTUFBTSxhQUFhLE9BQU8sYUFBWSxJQUFLLE1BQU07QUFDekQsWUFBTSxrQkFBa0IsT0FBTyxLQUFLLFlBQVksRUFBRTtBQUtsRCxpQkFBVyxPQUFPLE1BQU07QUFDdEIsY0FBTSxRQUFRLElBQUksVUFBVSxNQUFNLFVBQVU7QUFFNUMsWUFBSSxJQUFJLFVBQVcsVUFBVSxPQUFPLHNCQUFzQixjQUFjLEVBQUcsVUFBVSxNQUFNO0FBRXpGO0FBQUEsUUFDRDtBQUVELGNBQU0sRUFBRSxNQUFNLE9BQU8sU0FBUyxLQUFJLElBQUssSUFBSSxVQUFVLGFBQWE7QUFDbEUsY0FBTSxXQUFXLE9BQU8sS0FBSyxLQUFLLEVBQUU7QUFFcEMsWUFBSSxVQUFVLE1BQU07QUFDbEIsY0FBSSxTQUFTLGFBQWE7QUFFeEI7QUFBQSxVQUNEO0FBRUQsY0FDRSxhQUFhLG1CQUNWLGlCQUFpQixjQUFjLEtBQUssTUFBTSxPQUM3QztBQUVBO0FBQUEsVUFDRDtBQUdELGlCQUFPLElBQUksS0FBSztBQUNoQjtBQUFBLFFBQ0Q7QUFFRCxZQUFJLFNBQVMsTUFBTSxTQUFTLGFBQWE7QUFFdkM7QUFBQSxRQUNEO0FBRUQsWUFDRSxhQUFhLEtBQ1YsaUJBQWlCLE9BQU8sWUFBWSxNQUFNLE9BQzdDO0FBRUE7QUFBQSxRQUNEO0FBRUQsY0FBTSxXQUFXO0FBQUEsVUFDZixZQUFZLFFBQVE7QUFBQSxVQUNwQixXQUFXLGtCQUFrQjtBQUFBLFVBQzdCLFNBQVMsS0FBSyxTQUFTLEtBQUs7QUFBQSxRQUM3QjtBQUVELFlBQUksU0FBUyxhQUFhLFVBQVUsWUFBWTtBQUU5QyxpQkFBTyxJQUFJLEtBQUs7QUFDaEIsc0JBQVk7QUFDWjtBQUFBLFFBQ0QsV0FDUSxTQUFTLGVBQWUsVUFBVSxZQUFZO0FBRXJEO0FBQUEsUUFDRDtBQUVELFlBQUksU0FBUyxZQUFZLFVBQVUsV0FBVztBQUU1QyxpQkFBTyxJQUFJLEtBQUs7QUFDaEIsc0JBQVk7QUFBQSxRQUNiLFdBQ1EsU0FBUyxjQUFjLFVBQVUsV0FBVztBQUVuRDtBQUFBLFFBQ0Q7QUFFRCxZQUFJLFNBQVMsVUFBVSxVQUFVLFNBQVM7QUFFeEMsaUJBQU8sSUFBSSxLQUFLO0FBQ2hCLHNCQUFZO0FBQUEsUUFDYjtBQUFBLE1BQ0Y7QUFFRCxVQUNFLFNBQVMsUUFDTixZQUFZLEtBQUssU0FBTyxJQUFJLGNBQWMsVUFBVSxJQUFJLEtBQUssVUFBVSxhQUFhLEtBQUssTUFBTSxNQUNsRztBQUVBO0FBQUEsTUFDRDtBQUVELGtCQUFZLEVBQUUsTUFBTSxZQUFZLEtBQUksQ0FBRTtBQUFBLElBQ3ZDO0FBRUQsYUFBUyxVQUFXLEdBQUc7QUFDckIseUJBQW9CO0FBRXBCLFVBQ0UsU0FBUyxVQUFVLFFBQ2hCLFFBQVEsVUFBVSxRQUNsQixFQUFFLFVBQ0YsT0FBTyxFQUFFLE9BQU8sWUFBWSxZQUMvQjtBQUNBLGNBQU0sTUFBTSxFQUFFLE9BQU8sUUFBUSxRQUFRO0FBSXJDLFlBQUksT0FBTyxRQUFRLE1BQU0sU0FBUyxHQUFHLE1BQU0sTUFBTTtBQUMvQyxtQkFBUyxRQUFRO0FBQ2pCLHFCQUFXLFVBQVUsUUFBUSxjQUFjLEdBQUc7QUFBQSxRQUMvQztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBRUQsYUFBUyxhQUFjO0FBQ3JCLDJCQUFxQixNQUFNO0FBQUUsaUJBQVMsUUFBUTtBQUFBLE1BQUssR0FBSSxFQUFFO0FBQUEsSUFDMUQ7QUFFRCxhQUFTLG1CQUFvQjtBQUMzQixVQUFJLE1BQU0sc0JBQXNCLE9BQU87QUFDckMsbUNBQTJCLGlCQUFpQjtBQUFBLE1BQzdDLE9BQ0k7QUFDSCxpQ0FBMEI7QUFBQSxNQUMzQjtBQUFBLElBQ0Y7QUFFRCxhQUFTLGFBQWM7QUFDckIsVUFBSSxpQkFBaUIsUUFBUTtBQUMzQixjQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sT0FBTyxVQUFVLGdCQUFnQjtBQUNuRSx1QkFBZSxNQUFNO0FBQ25CLGtCQUFTO0FBQ1QseUJBQWU7QUFBQSxRQUNoQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBRUQsYUFBUyxZQUFhLFNBQVM7QUFDN0Isa0JBQVksS0FBSyxPQUFPO0FBQ3hCLHFCQUFlO0FBRWYsd0JBQW1CO0FBR25CLFVBQUksUUFBUSxjQUFjLFVBQVUsTUFBTSxXQUFXLFFBQVE7QUFFM0QsbUNBQTJCLE1BQU07QUFDL0IsY0FBSSxXQUFXLFVBQVUsTUFBTTtBQUM3QixrQkFBTSxRQUFRLGFBQWE7QUFDM0Isa0JBQU0sU0FBUyxVQUFVLFVBQVUsVUFBVSxRQUFRLFVBQVUsS0FDM0QsWUFBWSxLQUFLLFNBQU8sSUFBSSxLQUFLLFVBQVUsS0FBSyxJQUNoRDtBQUVKLHNCQUFVLGNBQWMsT0FBTyxRQUFRLEtBQUs7QUFBQSxVQUM3QztBQUFBLFFBQ1gsQ0FBUztBQUFBLE1BQ0YsT0FFSTtBQUVILG1CQUFZO0FBRVosWUFBSSxRQUFRLFVBQVUsY0FBYyxVQUFVLE1BQU07QUFDbEQsMkJBQWtCO0FBQUEsUUFDbkI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUVELGFBQVMsY0FBZSxTQUFTO0FBQy9CLGtCQUFZLE9BQU8sWUFBWSxRQUFRLE9BQU8sR0FBRyxDQUFDO0FBQ2xELHFCQUFlO0FBRWYsd0JBQW1CO0FBRW5CLFVBQUksaUJBQWlCLFVBQVUsUUFBUSxjQUFjLFFBQVE7QUFFM0QsWUFBSSxZQUFZLE1BQU0sU0FBTyxJQUFJLGNBQWMsTUFBTSxNQUFNLE1BQU07QUFDL0QsdUJBQWM7QUFBQSxRQUNmO0FBR0QseUJBQWtCO0FBQUEsTUFDbkI7QUFBQSxJQUNGO0FBRUQsVUFBTSxRQUFRO0FBQUEsTUFDWjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BRUE7QUFBQSxNQUNBO0FBQUEsTUFFQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFFQSxtQkFBbUI7QUFBQTtBQUFBLElBQ3BCO0FBRUQsWUFBUSxTQUFTLEtBQUs7QUFFdEIsYUFBUyxVQUFXO0FBQ2xCLHVCQUFpQixRQUFRLGFBQWEsWUFBWTtBQUNsRCxxQkFBZ0I7QUFDaEIsdUJBQWlCLFVBQVUsYUFBYztBQUFBLElBQzFDO0FBRUQsUUFBSTtBQUVKLG9CQUFnQixPQUFPO0FBRXZCLGtCQUFjLE1BQU07QUFDbEIsd0JBQWtCLGlCQUFpQjtBQUNuQyxjQUFTO0FBQUEsSUFDZixDQUFLO0FBRUQsZ0JBQVksTUFBTTtBQUNoQiwwQkFBb0IsUUFBUSxXQUFZO0FBQ3hDLHdCQUFtQjtBQUFBLElBQ3pCLENBQUs7QUFFRCxXQUFPLE1BQU07QUFDWCxhQUFPLEVBQUUsT0FBTztBQUFBLFFBQ2QsS0FBSztBQUFBLFFBQ0wsT0FBTyxRQUFRO0FBQUEsUUFDZixNQUFNO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxNQUNSLEdBQVM7QUFBQSxRQUNELEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxnQkFBZSxDQUFFO0FBQUEsUUFFaEQsRUFBRSxPQUFPO0FBQUEsVUFDUCxLQUFLO0FBQUEsVUFDTCxPQUFPLFdBQVc7QUFBQSxVQUNsQixVQUFVO0FBQUEsUUFDcEIsR0FBVyxNQUFNLE1BQU0sT0FBTyxDQUFDO0FBQUEsUUFFdkIsRUFBRSxPQUFPO0FBQUEsVUFDUCxPQUFPLDREQUNGLFVBQVUsVUFBVSxPQUFPLEtBQUs7QUFBQSxVQUNyQyxNQUFNLE1BQU0sWUFBWSxHQUFHLFFBQVEsS0FBTSxNQUFNLGFBQWEsT0FBTyxPQUFPLE1BQVE7QUFBQSxVQUNsRixvQkFBb0I7QUFBQSxVQUNwQixxQkFBcUI7QUFBQSxVQUNyQixrQkFBa0I7QUFBQSxVQUNsQixxQkFBcUI7QUFBQSxVQUNyQixtQkFBbUI7QUFBQSxRQUM3QixDQUFTO0FBQUEsUUFFRCxFQUFFLE9BQU87QUFBQSxVQUNQLE9BQU8sNkRBQ0YsV0FBVyxVQUFVLE9BQU8sS0FBSztBQUFBLFVBQ3RDLE1BQU0sTUFBTSxhQUFhLEdBQUcsUUFBUSxLQUFNLE1BQU0sYUFBYSxPQUFPLFNBQVMsT0FBUztBQUFBLFVBQ3RGLG9CQUFvQjtBQUFBLFVBQ3BCLHFCQUFxQjtBQUFBLFVBQ3JCLGtCQUFrQjtBQUFBLFVBQ2xCLHFCQUFxQjtBQUFBLFVBQ3JCLG1CQUFtQjtBQUFBLFFBQzdCLENBQVM7QUFBQSxNQUNULENBQU87QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNILENBQUM7QUN2cUJELE1BQU0sUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLFVBQVMsQ0FBRTtBQUUzQyxNQUFBLFNBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sUUFBUztBQUNQLFdBQU8sTUFBTTtBQUFBLEVBQ2Q7QUFDSCxDQUFDO0FDRkQsTUFBQSxVQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLFlBQVk7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNWO0FBQUEsSUFDRCxRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFFVixZQUFZO0FBQUEsTUFDVixNQUFNLENBQUUsUUFBUSxNQUFRO0FBQUEsTUFDeEIsU0FBUztBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFFRCxPQUFPLENBQUUsVUFBVSxTQUFXO0FBQUEsRUFFOUIsTUFBTyxPQUFPLEVBQUUsT0FBTyxLQUFJLEdBQUk7QUFDN0IsVUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFJLEVBQUEsSUFBSyxtQkFBb0I7QUFFOUMsVUFBTSxVQUFVLE9BQU8sV0FBVyxhQUFhO0FBQy9DLFFBQUksWUFBWSxlQUFlO0FBQzdCLGNBQVEsTUFBTSxzQ0FBc0M7QUFDcEQsYUFBTztBQUFBLElBQ1I7QUFFRCxVQUFNLE9BQU8sSUFBSSxTQUFTLE1BQU0sWUFBWSxFQUFFLENBQUM7QUFDL0MsVUFBTSxXQUFXLElBQUksSUFBSTtBQUN6QixVQUFNLGVBQWU7QUFBQSxNQUNuQix5QkFBeUIsVUFBVSxRQUFRLFFBQVEsWUFBWSxVQUFVLE9BQ3JFLElBQ0EsT0FBTztBQUFBLElBQ1o7QUFFRCxVQUFNLFFBQVE7QUFBQSxNQUFTLE1BQ3JCLE1BQU0sV0FBVyxRQUNkLFFBQVEsS0FBSyxNQUFNLFFBQVEsR0FBRyxNQUFNLE1BQ25DLEdBQUcsU0FBUyxHQUFHLE9BQU8sUUFBUSxZQUFZLFVBQVU7QUFBQSxJQUN6RDtBQUVELFVBQU0sa0JBQWtCLFNBQVMsTUFDL0IsUUFBUSxZQUFZLFVBQVUsT0FDMUIsUUFBUSxnQkFBZ0IsUUFDeEIsYUFBYSxLQUNsQjtBQUVELFVBQU0sU0FBUyxTQUFTLE1BQU07QUFDNUIsVUFBSSxNQUFNLGVBQWUsTUFBTTtBQUM3QixlQUFPO0FBQUEsTUFDUjtBQUNELFVBQUksTUFBTSxVQUFVLE1BQU07QUFDeEIsZUFBTyxTQUFTLFVBQVUsT0FBTyxLQUFLLFFBQVE7QUFBQSxNQUMvQztBQUNELFlBQU1BLFVBQVMsUUFBUSxPQUFPLE1BQU0sV0FBVyxnQkFBZ0IsUUFBUSxLQUFLLFFBQVEsUUFBUSxPQUFPO0FBQ25HLGFBQU9BLFVBQVMsSUFBSUEsVUFBUztBQUFBLElBQ25DLENBQUs7QUFFRCxVQUFNLFNBQVM7QUFBQSxNQUFTLE1BQ3RCLE1BQU0sZUFBZSxRQUFTLE1BQU0sVUFBVSxRQUFRLFNBQVMsVUFBVTtBQUFBLElBQzFFO0FBRUQsVUFBTSxnQkFBZ0I7QUFBQSxNQUFTLE1BQzdCLE1BQU0sZUFBZSxRQUFRLE9BQU8sVUFBVSxRQUFRLE1BQU0sV0FBVztBQUFBLElBQ3hFO0FBRUQsVUFBTSxVQUFVO0FBQUEsTUFBUyxNQUN2QiwyQ0FDRyxNQUFNLFVBQVUsT0FBTyxVQUFVLGNBQWMsYUFDL0MsTUFBTSxhQUFhLE9BQU8sd0JBQXdCLE9BQ2xELE9BQU8sVUFBVSxPQUFPLHNCQUFzQixPQUUvQyxNQUFNLGVBQWUsT0FDakIsOEJBQThCLE1BQU0sVUFBVSxPQUFPLFlBQVksTUFDakU7QUFBQSxJQUVQO0FBRUQsVUFBTSxRQUFRLFNBQVMsTUFBTTtBQUMzQixZQUNFLE9BQU8sUUFBUSxLQUFLLE1BQU0sUUFDMUIsTUFBTSxDQUFFO0FBRVYsVUFBSSxLQUFNLE9BQVEsT0FBTyxRQUFRLEtBQUssVUFBVSxNQUFNO0FBQ3BELFlBQUssR0FBRyxLQUFLLFFBQVEsT0FBTyxVQUFVLE1BQVEsSUFBRyxHQUFJLFFBQVEsS0FBSyxJQUFNO0FBQUEsTUFDekU7QUFDRCxVQUFJLEtBQU0sT0FBUSxPQUFPLFFBQVEsTUFBTSxVQUFVLE1BQU07QUFDckQsWUFBSyxHQUFHLEtBQUssUUFBUSxPQUFPLFNBQVMsT0FBUyxJQUFHLEdBQUksUUFBUSxNQUFNLElBQU07QUFBQSxNQUMxRTtBQUVELGFBQU87QUFBQSxJQUNiLENBQUs7QUFFRCxhQUFTLGFBQWMsTUFBTSxLQUFLO0FBQ2hDLGNBQVEsT0FBTyxVQUFVLE1BQU0sR0FBRztBQUFBLElBQ25DO0FBRUQsYUFBUyxZQUFhLE1BQU0sS0FBSztBQUMvQixVQUFJLEtBQUssVUFBVSxLQUFLO0FBQ3RCLGFBQUssUUFBUTtBQUFBLE1BQ2Q7QUFBQSxJQUNGO0FBRUQsYUFBUyxTQUFVLEVBQUUsVUFBVTtBQUM3QixrQkFBWSxNQUFNLE1BQU07QUFDeEIsbUJBQWEsUUFBUSxNQUFNO0FBQUEsSUFDNUI7QUFFRCxhQUFTLGlCQUFrQjtBQUN6QixVQUFJLE1BQU0sV0FBVztBQUFNO0FBRTNCLFlBQU0sRUFBRSxXQUFXLFVBQUFDLFdBQVUsZ0JBQWUsSUFBSyxRQUFRLE9BQU87QUFFaEUsa0JBQVksVUFDVixjQUFjLFFBQ1hBLFlBQVcsa0JBQWtCLE9BQzdCLFFBQVEsT0FBTyxRQUFRLGdCQUFnQixRQUFRQSxZQUFXLEtBQUssUUFBUSxHQUMxRTtBQUFBLElBQ0g7QUFFRCxhQUFTLFVBQVcsS0FBSztBQUN2QixVQUFJLGNBQWMsVUFBVSxNQUFNO0FBQ2hDLG9CQUFZLFVBQVUsSUFBSTtBQUFBLE1BQzNCO0FBRUQsV0FBSyxXQUFXLEdBQUc7QUFBQSxJQUNwQjtBQUVELFVBQU0sTUFBTSxNQUFNLFlBQVksU0FBTztBQUNuQyxtQkFBYSxTQUFTLEdBQUc7QUFDekIsa0JBQVksVUFBVSxJQUFJO0FBQzFCLGNBQVEsUUFBUztBQUFBLElBQ3ZCLENBQUs7QUFFRCxVQUFNLFFBQVEsU0FBTztBQUNuQixtQkFBYSxVQUFVLEdBQUc7QUFBQSxJQUNoQyxDQUFLO0FBRUQsVUFBTSxNQUFNLE1BQU0sUUFBUSxTQUFPO0FBQy9CLGNBQVEsU0FBUyxZQUFZLFVBQVUsTUFBTSxVQUFVO0FBQUEsSUFDN0QsQ0FBSztBQUVELFVBQU0sVUFBVSxTQUFPO0FBQ3JCLGNBQVEsUUFBUztBQUNqQixXQUFLLFVBQVUsR0FBRztBQUFBLElBQ3hCLENBQUs7QUFFRCxVQUFNLENBQUUsTUFBTSxRQUFRLFFBQVEsUUFBUSxNQUFRLEdBQUUsY0FBYztBQUU5RCxVQUFNLE1BQU0sR0FBRyxPQUFPLFFBQVEsU0FBTztBQUNuQyxjQUFRLFlBQVksVUFBVSxRQUFRLFlBQVksY0FBYyxHQUFHO0FBQUEsSUFDekUsQ0FBSztBQUVELFVBQU0sV0FBVyxDQUFFO0FBRW5CLFlBQVEsVUFBVSxTQUFTO0FBQzNCLFVBQU0sZUFBZSxRQUFRLGFBQWEsUUFBUSxLQUFLLEtBQUs7QUFDNUQsaUJBQWEsU0FBUyxNQUFNLFVBQVU7QUFDdEMsaUJBQWEsVUFBVSxPQUFPLEtBQUs7QUFFbkMsb0JBQWdCLE1BQU07QUFDcEIsVUFBSSxRQUFRLFVBQVUsV0FBVyxVQUFVO0FBQ3pDLGdCQUFRLFVBQVUsU0FBUztBQUMzQixxQkFBYSxRQUFRLENBQUM7QUFDdEIscUJBQWEsVUFBVSxDQUFDO0FBQ3hCLHFCQUFhLFNBQVMsS0FBSztBQUFBLE1BQzVCO0FBQUEsSUFDUCxDQUFLO0FBRUQsV0FBTyxNQUFNO0FBQ1gsWUFBTSxRQUFRLFdBQVcsTUFBTSxTQUFTO0FBQUEsUUFDdEMsRUFBRSxpQkFBaUI7QUFBQSxVQUNqQixVQUFVO0FBQUEsVUFDVjtBQUFBLFFBQ1YsQ0FBUztBQUFBLE1BQ1QsQ0FBTztBQUVELFlBQU0sYUFBYSxRQUFRLE1BQU07QUFBQSxRQUMvQixFQUFFLE9BQU87QUFBQSxVQUNQLE9BQU87QUFBQSxRQUNqQixDQUFTO0FBQUEsTUFDRjtBQUVELGFBQU8sRUFBRSxVQUFVO0FBQUEsUUFDakIsT0FBTyxRQUFRO0FBQUEsUUFDZixPQUFPLE1BQU07QUFBQSxRQUNiO0FBQUEsTUFDRCxHQUFFLEtBQUs7QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUNILENBQUM7QUM5TEQsTUFBTSxvQkFBb0I7QUFDMUIsTUFBTSx5QkFBeUIsUUFBTSxFQUFFLE9BQU8sRUFBQztBQUMvQyxNQUFNLDZCQUE2QixDQUFDLEVBQUUsYUFBYSxFQUFFLE9BQU87QUFBQSxFQUMxRCxLQUFLLE9BQU87QUFBQSxFQUNaLE9BQU8sT0FBTztBQUFBLEVBQ2QsT0FBTyxPQUFPO0FBQ2hCLEdBQUcsT0FBTyxLQUFLO0FBR1IsTUFBTSxXQUFXLENBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUk7QUFFM0MsTUFBTSxpQkFBaUI7QUFBQSxFQUM1QixHQUFHO0FBQUEsRUFDSCxHQUFHO0FBQUEsRUFFSCxLQUFLO0FBQUEsSUFDSCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsRUFDVjtBQUFBLEVBQ0QsS0FBSztBQUFBLElBQ0gsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLEVBQ1Y7QUFBQSxFQUNELFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFBQSxFQUVWLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULFdBQVcsT0FBSyxLQUFLO0FBQUEsRUFDdEI7QUFBQSxFQUVELE1BQU07QUFBQSxFQUVOLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUVULGVBQWU7QUFBQSxFQUVmLE9BQU87QUFBQSxFQUNQLG1CQUFtQjtBQUFBLEVBRW5CLE9BQU87QUFBQSxFQUNQLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBRWpCLFNBQVMsQ0FBRSxTQUFTLE1BQVE7QUFBQSxFQUM1QixjQUFjLENBQUUsU0FBUyxPQUFPLFFBQVEsUUFBVTtBQUFBLEVBQ2xELHdCQUF3QjtBQUFBLEVBRXhCLFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGlCQUFpQjtBQUFBLEVBQ2pCLGdCQUFnQjtBQUFBLEVBQ2hCLGNBQWM7QUFBQSxFQUVkLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxFQUNWO0FBQUEsRUFDRCxXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsRUFDVjtBQUFBLEVBRUQsU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLEVBQ1YsT0FBTztBQUFBLEVBRVAsVUFBVSxDQUFFLFFBQVEsTUFBUTtBQUFBLEVBRTVCLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxFQUNWO0FBQ0g7QUFFTyxNQUFNLGlCQUFpQixDQUFFLE9BQU8scUJBQXFCLFFBQVU7QUFFdkQsU0FBUSxVQUFFLEVBQUUsYUFBYSxnQkFBZ0IsYUFBYSxVQUFTLEdBQUk7QUFDaEYsUUFBTSxFQUFFLE9BQU8sTUFBTSxPQUFPLE9BQU8sRUFBRSxHQUFFLEVBQUksSUFBRyxtQkFBb0I7QUFDbEUsUUFBTSxTQUFTLFFBQVEsT0FBTyxFQUFFO0FBRWhDLFFBQU0sa0JBQWtCLGNBQWMsU0FBUztBQUUvQyxRQUFNLFNBQVMsSUFBSSxLQUFLO0FBQ3hCLFFBQU0sZUFBZSxJQUFJLEtBQUs7QUFDOUIsUUFBTSxRQUFRLElBQUksS0FBSztBQUN2QixRQUFNLFdBQVcsSUFBSSxLQUFLO0FBRTFCLFFBQU0sT0FBTyxTQUFTLE1BQU8sTUFBTSxhQUFhLE9BQU8sUUFBUSxLQUFNO0FBQ3JFLFFBQU0sWUFBWSxTQUFTLE1BQU0sT0FBTyxNQUFNLG9CQUFvQixPQUFPLGFBQWEsV0FBVztBQUVqRyxRQUFNLGFBQWEsU0FBUyxNQUMxQixNQUFNLGFBQWEsT0FDZixNQUFNLFlBQVksT0FDbEIsTUFBTSxhQUFhLEdBQUcsS0FBSyxRQUFRLEtBQ3hDO0FBRUQsUUFBTSxXQUFXLFNBQVMsTUFDeEIsTUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLE1BQU0sV0FBVyxNQUFNLE1BQ3JELE1BQU0sTUFDTixNQUFNLFFBQ1g7QUFDRCxRQUFNLFdBQVcsU0FBUyxNQUN4QixNQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsTUFBTSxXQUFXLE1BQU0sTUFDckQsTUFBTSxNQUNOLE1BQU0sUUFDWDtBQUVELFFBQU0sV0FBVyxTQUFTLE1BQ3hCLE1BQU0sWUFBWSxRQUFRLE1BQU0sYUFBYSxRQUMxQyxTQUFTLFFBQVEsU0FBUyxLQUM5QjtBQUVELFFBQU0sZUFBZSxTQUFTLE1BQU07QUFDbEMsUUFBSSxNQUFNLFNBQVMsR0FBRztBQUNwQixhQUFPLE9BQUs7QUFBQSxJQUNiO0FBRUQsVUFBTSxZQUFZLE9BQU8sTUFBTSxJQUFJLEVBQUUsT0FBTyxNQUFNLEdBQUcsRUFBRyxDQUFHLEtBQUksSUFBSTtBQUNuRSxXQUFPLE9BQUssV0FBVyxFQUFFLFFBQVEsUUFBUSxDQUFDO0FBQUEsRUFDOUMsQ0FBRztBQUVELFFBQU0sVUFBVSxTQUFTLE1BQU8sTUFBTSxTQUFTLElBQUksSUFBSSxNQUFNLElBQUs7QUFDbEUsUUFBTSxXQUFXLFNBQVMsTUFBTyxTQUFTLFVBQVUsT0FBTyxNQUFNLFlBQVksSUFBSSxFQUFHO0FBRXBGLFFBQU0sV0FBVyxTQUFTLE1BQU0sTUFBTSxNQUFNLE1BQU0sR0FBRztBQUNyRCxRQUFNLGNBQWMsU0FBUyxNQUFNLFNBQVMsUUFBUSxTQUFTLEtBQUs7QUFFbEUsUUFBTSxnQkFBZ0IsU0FBUyxNQUFNLG9CQUFvQixTQUFTLEtBQUssQ0FBQztBQUN4RSxRQUFNLGdCQUFnQixTQUFTLE1BQU0sb0JBQW9CLFNBQVMsS0FBSyxDQUFDO0FBRXhFLFFBQU0sZUFBZSxTQUFTLE1BQzVCLE1BQU0sYUFBYSxPQUNkLFdBQVcsVUFBVSxPQUFPLFdBQVcsUUFDdkMsV0FBVyxVQUFVLE9BQU8sVUFBVSxNQUM1QztBQUVELFFBQU0sV0FBVyxTQUFTLE1BQU8sTUFBTSxhQUFhLE9BQU8sV0FBVyxPQUFRO0FBQzlFLFFBQU0sZ0JBQWdCLFNBQVMsTUFBTyxNQUFNLGFBQWEsT0FBTyxVQUFVLFFBQVM7QUFDbkYsUUFBTSxjQUFjLFNBQVMsTUFBTyxNQUFNLGFBQWEsT0FBTyxhQUFhLFlBQWE7QUFFeEYsUUFBTSxhQUFhLFNBQVMsTUFBTTtBQUNoQyxVQUFNLE1BQU07QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLGlCQUFpQixTQUFTO0FBQUEsTUFDMUIsaUJBQWlCLFNBQVM7QUFBQSxNQUMxQixvQkFBb0IsWUFBWTtBQUFBLE1BQ2hDLGFBQWEsTUFBTTtBQUFBLElBQ3BCO0FBRUQsUUFBSSxNQUFNLFlBQVksTUFBTTtBQUMxQixVQUFLLGVBQWUsSUFBSztBQUFBLElBQzFCLFdBQ1EsTUFBTSxhQUFhLE1BQU07QUFDaEMsVUFBSyxlQUFlLElBQUs7QUFBQSxJQUMxQjtBQUVELFdBQU87QUFBQSxFQUNYLENBQUc7QUFFRCxRQUFNLFVBQVU7QUFBQSxJQUFTLE1BQ3ZCLG9CQUFxQixLQUFLLEtBQUssY0FBZ0IsT0FBTyxVQUFVLE9BQU8sS0FBSyxJQUFJLDRCQUM3RSxNQUFNLGFBQWEsT0FBTyxRQUFRLGFBQ2xDLE1BQU0sWUFBWSxPQUFPLGNBQWMsd0JBQXdCLFNBQVMsVUFBVSxPQUFPLHdCQUF3QixRQUNqSCxNQUFNLFVBQVUsU0FBUyxxQkFBcUIsT0FDOUMsTUFBTSxTQUFTLE1BQU0sZ0JBQWdCLE9BQU8scUJBQXFCLE9BQ2pFLE1BQU0sZ0JBQWdCLE9BQU8sNEJBQTRCLE9BQ3pELE9BQU8sVUFBVSxPQUFPLG9CQUFvQixPQUM1QyxNQUFNLFVBQVUsT0FBTyxxQ0FBcUMsS0FBSyxRQUFRO0FBQUEsRUFDN0U7QUFFRCxXQUFTLGlCQUFrQixNQUFNO0FBQy9CLFVBQU0sTUFBTSxlQUFlO0FBQzNCLFdBQU8sR0FBSSxHQUFLLElBQUksR0FBSyxHQUFHLEtBQUssS0FBSyxJQUFNLEdBQUcsR0FBSyxLQUFLLEtBQU8sR0FBRyxVQUFVLEtBQUs7QUFBQSxFQUNuRjtBQUNELFdBQVMsYUFBYyxNQUFNO0FBQzNCLFVBQU0sTUFBTSxlQUFlO0FBQzNCLFdBQU8sR0FBSSxPQUFTLEdBQUcsR0FBSyxLQUFLO0VBQ2xDO0FBRUQsUUFBTSxvQkFBb0IsU0FBUyxNQUFNO0FBQ3ZDLFVBQU0sUUFBUSxNQUFNLGtCQUFrQixNQUFNO0FBQzVDLFdBQU8sa0NBQ0YsVUFBVSxTQUFTLFNBQVUsS0FBSyxLQUFNO0FBQUEsRUFDakQsQ0FBRztBQUNELFFBQU0sY0FBYyxTQUFTLE1BQU0sYUFBYSxTQUFTLElBQUksMkJBQTJCO0FBQ3hGLFFBQU0sc0JBQXNCLFNBQVMsTUFBTSxhQUFhLGlCQUFpQixDQUFDO0FBQzFFLFFBQU0sV0FBVyxTQUFTLE1BQU0saUJBQWlCLEtBQUssQ0FBQztBQUN2RCxRQUFNLGFBQWEsU0FBUyxNQUFNLGlCQUFpQixPQUFPLENBQUM7QUFDM0QsUUFBTSxxQkFBcUIsU0FBUyxNQUFNLGlCQUFpQixnQkFBZ0IsQ0FBQztBQUM1RSxRQUFNLDZCQUE2QjtBQUFBLElBQVMsTUFDMUMsaUJBQWlCLHlCQUF5QixLQUN2QyxNQUFNLHNCQUFzQixTQUFTLElBQUssTUFBTSxzQkFBdUI7QUFBQSxFQUMzRTtBQUVELFFBQU0sYUFBYTtBQUFBLElBQVMsTUFDMUIsa0RBQ0csTUFBTSxlQUFlLFNBQVMsT0FBUSxNQUFNLGVBQWdCO0FBQUEsRUFDaEU7QUFDRCxRQUFNLGFBQWEsU0FBUyxNQUFNO0FBQ2hDLFVBQU0sTUFBTSxFQUFFLENBQUUsY0FBYyxLQUFTLEdBQUEsTUFBTSxVQUFXO0FBQ3hELFFBQUksTUFBTSxhQUFhLFFBQVE7QUFDN0IsVUFBSSxrQkFBa0IsT0FBUSxNQUFNLFFBQVU7QUFBQSxJQUMvQztBQUNELFdBQU87QUFBQSxFQUNYLENBQUc7QUFFRCxRQUFNLGdCQUFnQjtBQUFBLElBQVMsTUFDN0IsOEJBQ0csTUFBTSxvQkFBb0IsU0FBUyxPQUFRLE1BQU0sb0JBQXFCO0FBQUEsRUFDMUU7QUFDRCxRQUFNLGdCQUFnQixTQUFTLE1BQU07QUFDbkMsVUFBTSxZQUFZLGNBQWMsUUFBUSxjQUFjO0FBQ3RELFVBQU0sTUFBTTtBQUFBLE1BQ1YsQ0FBRSxhQUFhLFFBQVMsR0FBSSxNQUFNLGNBQWMsS0FBSztBQUFBLE1BQ3JELENBQUUsU0FBUyxLQUFTLEdBQUEsY0FBYyxJQUM5QixRQUNBLEdBQUksTUFBTSxTQUFTO0FBQUEsSUFDeEI7QUFDRCxRQUFJLE1BQU0sa0JBQWtCLFFBQVE7QUFDbEMsVUFBSSxrQkFBa0IsT0FBUSxNQUFNLGFBQWU7QUFBQSxJQUNwRDtBQUNELFdBQU87QUFBQSxFQUNYLENBQUc7QUFFRCxXQUFTLG9CQUFxQixPQUFPO0FBQ25DLFVBQU0sRUFBRSxLQUFLLEtBQUssS0FBTSxJQUFHO0FBQzNCLFFBQUksUUFBUSxNQUFNLFNBQVMsTUFBTTtBQUVqQyxRQUFJLE9BQU8sR0FBRztBQUNaLFlBQU0sVUFBVSxRQUFRLFNBQVMsU0FBUztBQUMxQyxnQkFBVSxLQUFLLElBQUksTUFBTSxLQUFLLE9BQU8sS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLE9BQU8sS0FBSztBQUFBLElBQzlFO0FBRUQsWUFBUSxhQUFhLE1BQU0sS0FBSztBQUVoQyxXQUFPLFFBQVEsT0FBTyxTQUFTLE9BQU8sU0FBUyxLQUFLO0FBQUEsRUFDckQ7QUFFRCxXQUFTLG9CQUFxQixPQUFPO0FBQ25DLFdBQU8sU0FBUyxVQUFVLElBQ3RCLEtBQ0MsUUFBUSxNQUFNLE9BQU8sU0FBUztBQUFBLEVBQ3BDO0FBRUQsV0FBUyxpQkFBa0IsS0FBS0MsV0FBVTtBQUN4QyxVQUNFLE1BQU0sU0FBUyxHQUFHLEdBQ2xCLE1BQU0sTUFBTSxhQUFhLE9BQ3JCLFNBQVMsSUFBSSxNQUFNQSxVQUFTLE9BQU9BLFVBQVMsUUFBUSxHQUFHLENBQUMsSUFDeEQsU0FBUyxJQUFJLE9BQU9BLFVBQVMsUUFBUUEsVUFBUyxPQUFPLEdBQUcsQ0FBQztBQUUvRCxXQUFPO0FBQUEsTUFDTCxXQUFXLFVBQVUsT0FBTyxJQUFNLE1BQU07QUFBQSxNQUN4QyxjQUFjO0FBQUEsTUFDZCxjQUFjO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFFRCxRQUFNLGFBQWE7QUFBQSxJQUFTLE1BQzFCLFNBQVMsTUFBTSxPQUFPLE1BQU0sT0FBTyxNQUFNLFVBQVUsUUFBUTtBQUFBLEVBQzVEO0FBRUQsUUFBTSxjQUFjLFNBQVMsTUFBTTtBQUNqQyxVQUFNLE1BQU0sQ0FBRTtBQUNkLFVBQU0sT0FBTyxXQUFXO0FBQ3hCLFVBQU0sTUFBTSxNQUFNO0FBRWxCLFFBQUksUUFBUSxNQUFNO0FBQ2xCLE9BQUc7QUFDRCxVQUFJLEtBQUssS0FBSztBQUNkLGVBQVM7QUFBQSxJQUNmLFNBQWEsUUFBUTtBQUVqQixRQUFJLEtBQUssR0FBRztBQUNaLFdBQU87QUFBQSxFQUNYLENBQUc7QUFFRCxRQUFNLG1CQUFtQixTQUFTLE1BQU07QUFDdEMsVUFBTSxTQUFTLElBQUssaUJBQW1CLEdBQUcsS0FBSyxLQUFLO0FBQ3BELFdBQU8sb0JBQ0gsR0FBSSxNQUFNLEdBQUssTUFBTSwyQkFBMkIsT0FBTyxhQUFhLGFBQ2hFLE1BQU0sR0FBSyxXQUFXLFVBQVUsT0FBTyxRQUFRO0VBQzNELENBQUc7QUFFRCxRQUFNLG1CQUFtQixTQUFTLE1BQU07QUFDdEMsUUFBSSxNQUFNLGlCQUFpQixPQUFPO0FBQUUsYUFBTztBQUFBLElBQU07QUFFakQsV0FBTyxjQUFjLE1BQU0sWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLFdBQVc7QUFBQSxNQUM5RDtBQUFBLE1BQ0EsT0FBTyxNQUFNO0FBQUEsTUFDYixPQUFPLE1BQU0sU0FBUyxNQUFNO0FBQUEsTUFDNUIsU0FBUyxpQkFBaUIsU0FDckIsTUFBTSxZQUFZLFNBQVMsTUFBTSxNQUFNLFVBQVU7QUFBQSxNQUN0RCxPQUFPO0FBQUEsUUFDTCxHQUFHLG9CQUFvQixNQUFNLEtBQUs7QUFBQSxRQUNsQyxHQUFJLE1BQU0sU0FBUyxDQUFFO0FBQUEsTUFDdEI7QUFBQSxJQUNQLEVBQU07QUFBQSxFQUNOLENBQUc7QUFFRCxRQUFNLGNBQWMsU0FBUyxPQUFPO0FBQUEsSUFDbEMsWUFBWSxpQkFBaUI7QUFBQSxJQUM3QixXQUFXLGdCQUFnQjtBQUFBLElBQzNCLFNBQVMsaUJBQWlCO0FBQUE7QUFBQSxJQUMxQixVQUFVO0FBQUEsRUFDZCxFQUFJO0FBRUYsUUFBTSxjQUFjLFNBQVMsTUFBTTtBQUNqQyxVQUFNLE9BQU8sWUFBWSxVQUFVLElBQy9CLFFBQ0EsTUFBTSxXQUFXLFFBQVEsWUFBWTtBQUV6QyxXQUFPO0FBQUEsTUFDTCxHQUFHLGNBQWM7QUFBQSxNQUNqQixnQkFBZ0IsTUFBTSxhQUFhLE9BQy9CLE9BQVEsSUFBSSxNQUNaLEdBQUksSUFBSTtBQUFBLElBQ2I7QUFBQSxFQUNMLENBQUc7QUFFRCxXQUFTLGNBQWUsS0FBSztBQUMzQixRQUFJLFFBQVEsT0FBTztBQUFFLGFBQU87QUFBQSxJQUFNO0FBRWxDLFFBQUksUUFBUSxNQUFNO0FBQ2hCLGFBQU8sWUFBWSxNQUFNLElBQUksc0JBQXNCO0FBQUEsSUFDcEQ7QUFFRCxRQUFJLE9BQU8sUUFBUSxZQUFZO0FBQzdCLGFBQU8sWUFBWSxNQUFNLElBQUksV0FBUztBQUNwQyxjQUFNLE9BQU8sSUFBSSxLQUFLO0FBQ3RCLGVBQU8sU0FBUyxJQUFJLE1BQU0sT0FBTyxFQUFFLEdBQUcsTUFBTSxVQUFVLEVBQUUsT0FBTyxPQUFPLEtBQU07QUFBQSxNQUNwRixDQUFPO0FBQUEsSUFDRjtBQUVELFVBQU0sV0FBVyxDQUFDLEVBQUUsWUFBWSxTQUFTLE1BQU0sT0FBTyxTQUFTLE1BQU07QUFFckUsUUFBSSxNQUFNLFFBQVEsR0FBRyxNQUFNLE1BQU07QUFDL0IsYUFBTyxJQUNKLElBQUksVUFBUyxTQUFTLElBQUksTUFBTSxPQUFPLE9BQU8sRUFBRSxPQUFPLEtBQUksQ0FBRyxFQUM5RCxPQUFPLFFBQVE7QUFBQSxJQUNuQjtBQUVELFdBQU8sT0FBTyxLQUFLLEdBQUcsRUFBRSxJQUFJLFNBQU87QUFDakMsWUFBTSxPQUFPLElBQUssR0FBSztBQUN2QixZQUFNLFFBQVEsT0FBTyxHQUFHO0FBQ3hCLGFBQU8sU0FBUyxJQUFJLE1BQU0sT0FBTyxFQUFFLEdBQUcsTUFBTSxVQUFVLEVBQUUsT0FBTyxPQUFPLEtBQU07QUFBQSxJQUNsRixDQUFLLEVBQUUsT0FBTyxRQUFRO0FBQUEsRUFDbkI7QUFFRCxXQUFTLG9CQUFxQixLQUFLO0FBQ2pDLFdBQU8sRUFBRSxDQUFFLGFBQWEsS0FBUyxHQUFBLEdBQUksT0FBTyxNQUFNLE1BQU0sT0FBTyxTQUFTLEtBQUssSUFBTTtBQUFBLEVBQ3BGO0FBRUQsUUFBTSxrQkFBa0IsU0FBUyxNQUFNO0FBQ3JDLFFBQUksTUFBTSxpQkFBaUIsT0FBTztBQUFFLGFBQU87QUFBQSxJQUFNO0FBRWpELFVBQU0sTUFBTSxDQUFFO0FBQ2QscUJBQWlCLE1BQU0sUUFBUSxXQUFTO0FBQ3RDLFVBQUssTUFBTSxLQUFLLElBQUs7QUFBQSxJQUMzQixDQUFLO0FBQ0QsV0FBTztBQUFBLEVBQ1gsQ0FBRztBQUVELFdBQVMseUJBQTBCO0FBQ2pDLFFBQUksTUFBTywwQkFBMkIsUUFBUTtBQUM1QyxhQUFPLE1BQU8sc0JBQXVCLFlBQVksS0FBSztBQUFBLElBQ3ZEO0FBRUQsVUFBTSxLQUFLLE1BQU8sY0FBYyxLQUFNO0FBQ3RDLFdBQU8saUJBQWlCLE1BQU0sSUFBSSxZQUFVLEdBQUc7QUFBQSxNQUM3QztBQUFBLE1BQ0EsR0FBRyxZQUFZO0FBQUEsSUFDckIsQ0FBSyxDQUFDO0FBQUEsRUFDSDtBQUVELFFBQU0sZUFBZSxTQUFTLE1BQU07QUFFbEMsV0FBTyxDQUFFO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLFFBQ0UsQ0FBRSxZQUFZLFFBQVM7QUFBQSxRQUN2QixTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDZDtBQUFBLElBQ1AsQ0FBTztBQUFBLEVBQ1AsQ0FBRztBQUVELFdBQVMsTUFBTyxPQUFPO0FBQ3JCLFFBQUksTUFBTSxZQUFZLE1BQU07QUFDMUIsVUFBSSxTQUFTLFVBQVUsUUFBUTtBQUM3Qix1QkFBZSxNQUFNLEdBQUc7QUFFeEIsY0FBTSxVQUFVLFFBQVEsWUFBWSxJQUFJO0FBQ3hDLGlCQUFTLFFBQVE7QUFDakIsYUFBSyxPQUFPLEtBQUs7QUFBQSxNQUNsQjtBQUNELGFBQU8sUUFBUTtBQUNmLFlBQU0sUUFBUTtBQUFBLElBQ2YsV0FDUSxNQUFNLFlBQVksTUFBTTtBQUMvQixlQUFTLFFBQVEsWUFBWSxNQUFNLEdBQUc7QUFDdEMscUJBQWUsTUFBTSxHQUFHO0FBQ3hCLGtCQUFhO0FBQ2IsYUFBTyxRQUFRO0FBQ2YsV0FBSyxPQUFPLE9BQU87QUFBQSxJQUNwQixPQUNJO0FBQ0gscUJBQWUsTUFBTSxHQUFHO0FBQ3hCLGtCQUFhO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFFRCxXQUFTLFNBQVU7QUFDakIsVUFBTSxRQUFRO0FBQUEsRUFDZjtBQUVELFdBQVMsV0FBWSxLQUFLO0FBQ3hCLG1CQUFlLEtBQUssWUFBWSxHQUFHLENBQUM7QUFDcEMsZ0JBQWE7QUFFYixpQkFBYSxRQUFRO0FBQ3JCLFdBQU8sUUFBUTtBQUVmLGFBQVMsaUJBQWlCLFdBQVcsY0FBYyxJQUFJO0FBQUEsRUFDeEQ7QUFFRCxXQUFTLGVBQWdCO0FBQ3ZCLGlCQUFhLFFBQVE7QUFDckIsV0FBTyxRQUFRO0FBRWYsZ0JBQVksSUFBSTtBQUNoQixXQUFRO0FBRVIsYUFBUyxvQkFBb0IsV0FBVyxjQUFjLElBQUk7QUFBQSxFQUMzRDtBQUVELFdBQVMsY0FBZSxLQUFLO0FBQzNCLG1CQUFlLEtBQUssWUFBWSxHQUFHLENBQUM7QUFDcEMsZ0JBQVksSUFBSTtBQUFBLEVBQ2pCO0FBRUQsV0FBUyxRQUFTLEtBQUs7QUFDckIsUUFBSSxTQUFTLFNBQVMsSUFBSSxPQUFPLEdBQUc7QUFDbEMsa0JBQVksSUFBSTtBQUFBLElBQ2pCO0FBQUEsRUFDRjtBQUVELFdBQVMsc0JBQXVCLE9BQU87QUFDckMsUUFBSSxNQUFNLGFBQWEsTUFBTTtBQUFFLGFBQU87QUFBQSxJQUFNO0FBRTVDLFVBQU0sSUFBSSxHQUFHLEtBQUssUUFBUSxNQUFNLFVBQVUsSUFBSSxRQUFRO0FBQ3RELFdBQU87QUFBQSxNQUNMLFdBQVcsbUJBQW9CLElBQUksSUFBSSxDQUFDLE1BQVEsTUFBTSxTQUFXLFVBQVUsS0FBSyxNQUFNLENBQUc7QUFBQSxJQUMxRjtBQUFBLEVBQ0Y7QUFFRCxXQUFTLGlCQUFrQixPQUFPO0FBQ2hDLFVBQU0sYUFBYSxTQUFTLE1BQzFCLGFBQWEsVUFBVSxVQUFVLE1BQU0sVUFBVSxNQUFNLGNBQWMsTUFBTSxVQUFVLFVBQ2pGLHFCQUNBLEVBQ0w7QUFFRCxVQUFNQyxXQUFVO0FBQUEsTUFBUyxNQUN2QixrQ0FBbUMsS0FBSyxLQUFLLG1CQUFxQixLQUFLLEtBQUssSUFBTSxXQUFXLFVBQVUsT0FBTyxRQUFRLEtBQU8sNkJBQzNILFdBQVcsU0FDVixNQUFNLFdBQVcsVUFBVSxTQUFTLFNBQVUsTUFBTSxXQUFXLEtBQU8sS0FBSTtBQUFBLElBQzlFO0FBRUQsVUFBTSxRQUFRLFNBQVMsT0FBTztBQUFBLE1BQzVCLE9BQU8sTUFBTTtBQUFBLE1BQ2IsUUFBUSxNQUFNO0FBQUEsTUFDZCxDQUFFLGFBQWEsS0FBSyxHQUFJLEdBQUksTUFBTSxNQUFNLE1BQU0sS0FBSztBQUFBLE1BQ25ELFFBQVEsTUFBTSxVQUFVLE1BQU0sYUFBYSxJQUFJO0FBQUEsSUFDckQsRUFBTTtBQUVGLFVBQU0sV0FBVyxTQUFTLE1BQ3hCLE1BQU0sV0FBVyxVQUFVLFNBQ3ZCLFNBQVUsTUFBTSxXQUFXLEtBQUssS0FDaEMsRUFDTDtBQUVELFVBQU0scUJBQXFCLFNBQVMsTUFBTSxzQkFBc0IsTUFBTSxNQUFNLEtBQUssQ0FBQztBQUVsRixVQUFNLFlBQVksU0FBUyxNQUN6QixvQkFDRyxNQUFNLGVBQWUsVUFBVSxTQUFTLFNBQVUsTUFBTSxlQUFlLEtBQU8sS0FBSSxHQUN0RjtBQUVELFdBQU8sTUFBTTtBQUNYLFlBQU0sZUFBZTtBQUFBLFFBQ25CLEVBQUUsT0FBTztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFVBQ1QsZUFBZTtBQUFBLFFBQ3pCLEdBQVc7QUFBQSxVQUNELEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxVQUFTLENBQUU7QUFBQSxRQUMxQyxDQUFTO0FBQUEsUUFFRCxFQUFFLE9BQU8sRUFBRSxPQUFPLDJCQUEwQixDQUFFO0FBQUEsTUFDL0M7QUFFRCxVQUFJLE1BQU0sVUFBVSxRQUFRLE1BQU0sZ0JBQWdCLE1BQU07QUFDdEQscUJBQWE7QUFBQSxVQUNYLEVBQUUsT0FBTztBQUFBLFlBQ1AsT0FBTyxTQUFTLFFBQVEsb0NBQW9DLFNBQVM7QUFBQSxVQUNqRixHQUFhO0FBQUEsWUFDRCxFQUFFLE9BQU87QUFBQSxjQUNQLE9BQU8sV0FBVztBQUFBLGNBQ2xCLE9BQU8sRUFBRSxVQUFVLE1BQU0sVUFBVztBQUFBLFlBQ2xELEdBQWU7QUFBQSxjQUNELEVBQUUsT0FBTztBQUFBLGdCQUNQLE9BQU8sbUJBQW1CO0FBQUEsZ0JBQzFCLE9BQU8sbUJBQW1CO0FBQUEsY0FDMUMsR0FBaUI7QUFBQSxnQkFDRCxFQUFFLFFBQVEsRUFBRSxPQUFPLFVBQVUsU0FBUyxNQUFNLE1BQU0sS0FBSztBQUFBLGNBQ3ZFLENBQWU7QUFBQSxZQUNmLENBQWE7QUFBQSxVQUNiLENBQVc7QUFBQSxRQUNGO0FBRUQsWUFBSSxNQUFNLFNBQVMsVUFBVSxNQUFNLFlBQVksTUFBTTtBQUNuRCwwQkFBZ0IsY0FBYyxNQUFNO0FBQUEsUUFDckM7QUFBQSxNQUNGO0FBRUQsYUFBTyxFQUFFLE9BQU87QUFBQSxRQUNkLE9BQU9BLFNBQVE7QUFBQSxRQUNmLE9BQU8sTUFBTTtBQUFBLFFBQ2IsR0FBRyxNQUFNLFlBQWE7QUFBQSxNQUN2QixHQUFFLFlBQVk7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFFRCxXQUFTLFdBQVksbUJBQW1CLHdCQUF3QixzQkFBc0IsYUFBYTtBQUNqRyxVQUFNLGVBQWUsQ0FBRTtBQUV2QixVQUFNLG9CQUFvQixpQkFBaUIsYUFBYTtBQUFBLE1BQ3RELEVBQUUsT0FBTztBQUFBLFFBQ1AsS0FBSztBQUFBLFFBQ0wsT0FBTyxjQUFjO0FBQUEsUUFDckIsT0FBTyxjQUFjO0FBQUEsTUFDN0IsQ0FBTztBQUFBLElBQ0Y7QUFFRCxVQUFNLG1CQUFtQixpQkFBaUIsYUFBYTtBQUFBLE1BQ3JELEVBQUUsT0FBTztBQUFBLFFBQ1AsS0FBSztBQUFBLFFBQ0wsT0FBTyxrQkFBa0I7QUFBQSxRQUN6QixPQUFPLGtCQUFrQjtBQUFBLE1BQ2pDLENBQU87QUFBQSxJQUNGO0FBRUQsVUFBTSxZQUFZLFNBQVMsYUFBYTtBQUFBLE1BQ3RDLEVBQUUsT0FBTztBQUFBLFFBQ1AsS0FBSztBQUFBLFFBQ0wsT0FBTyxZQUFZO0FBQUEsUUFDbkIsT0FBTyxZQUFZO0FBQUEsTUFDM0IsQ0FBTztBQUFBLElBQ0Y7QUFFRCxnQkFBWSxZQUFZO0FBRXhCLFVBQU0sVUFBVTtBQUFBLE1BQ2Q7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFVBQ0UsS0FBSztBQUFBLFVBQ0wsT0FBTyxvQkFBb0I7QUFBQSxVQUMzQixVQUFVLHVCQUF1QjtBQUFBLFVBQ2pDLEdBQUcscUJBQXFCO0FBQUEsUUFDekI7QUFBQSxRQUNEO0FBQUEsVUFDRSxFQUFFLE9BQU87QUFBQSxZQUNQLE9BQU8sV0FBVztBQUFBLFlBQ2xCLE9BQU8sV0FBVztBQUFBLFVBQ25CLEdBQUUsWUFBWTtBQUFBLFFBQ2hCO0FBQUEsUUFDRDtBQUFBLFFBQ0EsU0FBUztBQUFBLFFBQU8sTUFBTSxhQUFhO0FBQUEsTUFDcEM7QUFBQSxJQUNGO0FBRUQsUUFBSSxNQUFNLGlCQUFpQixPQUFPO0FBQ2hDLFlBQU0sU0FBUyxNQUFNLDJCQUEyQixPQUM1QyxZQUNBO0FBRUosY0FBUyxNQUFRO0FBQUEsUUFDZixFQUFFLE9BQU87QUFBQSxVQUNQLEtBQUs7QUFBQSxVQUNMLE9BQU8sMkJBQTJCO0FBQUEsUUFDbkMsR0FBRSx1QkFBc0IsQ0FBRTtBQUFBLE1BQzVCO0FBQUEsSUFDRjtBQUVELFdBQU87QUFBQSxFQUNSO0FBRUQsa0JBQWdCLE1BQU07QUFDcEIsYUFBUyxvQkFBb0IsV0FBVyxjQUFjLElBQUk7QUFBQSxFQUM5RCxDQUFHO0FBRUQsU0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0w7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUVBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFFQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUVELFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUNIO0FDeG9CQSxNQUFNLGNBQWMsT0FBTyxDQUFBO0FBRTNCLE1BQUEsVUFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxHQUFHO0FBQUEsSUFFSCxZQUFZO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxXQUFXLE9BQUssT0FBTyxNQUFNLFlBQVksTUFBTTtBQUFBLElBQ2hEO0FBQUEsSUFFRCxZQUFZLENBQUUsUUFBUSxNQUFRO0FBQUEsRUFDL0I7QUFBQSxFQUVELE9BQU87QUFBQSxFQUVQLE1BQU8sT0FBTyxFQUFFLFFBQVE7QUFDdEIsVUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFJLEVBQUEsSUFBSyxtQkFBb0I7QUFFOUMsVUFBTSxFQUFFLE9BQU8sUUFBUyxJQUFHLFVBQVU7QUFBQSxNQUNuQztBQUFBLE1BQWE7QUFBQSxNQUFnQjtBQUFBLE1BQzdCLFdBQVcsYUFBYSxLQUFLO0FBQUEsSUFDbkMsQ0FBSztBQUVELFVBQU0sVUFBVSxJQUFJLElBQUk7QUFDeEIsVUFBTSxXQUFXLElBQUksQ0FBQztBQUN0QixVQUFNLFFBQVEsSUFBSSxDQUFDO0FBRW5CLGFBQVMsaUJBQWtCO0FBQ3pCLFlBQU0sUUFBUSxNQUFNLGVBQWUsT0FDL0IsTUFBTSxTQUFTLFFBQ2YsUUFBUSxNQUFNLFlBQVksTUFBTSxTQUFTLE9BQU8sTUFBTSxTQUFTLEtBQUs7QUFBQSxJQUN6RTtBQUVEO0FBQUEsTUFDRSxNQUFNLEdBQUksTUFBTSxVQUFVLElBQU0sTUFBTSxTQUFTLEtBQU8sSUFBSSxNQUFNLFNBQVMsS0FBSztBQUFBLE1BQzlFO0FBQUEsSUFDRDtBQUVELG1CQUFnQjtBQUVoQixVQUFNLGFBQWEsU0FBUyxNQUFNLFFBQVEsb0JBQW9CLE1BQU0sS0FBSyxDQUFDO0FBQzFFLFVBQU0sUUFBUSxTQUFTLE1BQU8sTUFBTSxPQUFPLFVBQVUsT0FBTyxTQUFTLFFBQVEsV0FBVyxLQUFNO0FBRTlGLFVBQU0sb0JBQW9CLFNBQVMsTUFBTTtBQUN2QyxZQUFNLE1BQU07QUFBQSxRQUNWLENBQUUsTUFBTSxhQUFhLFFBQVMsR0FBSSxNQUFNLE1BQU0sY0FBYyxLQUFLO0FBQUEsUUFDakUsQ0FBRSxNQUFNLFNBQVMsS0FBSyxHQUFJLEdBQUksT0FBTyxNQUFNLFFBQVEsTUFBTSxjQUFjLE1BQVE7QUFBQSxNQUNoRjtBQUNELFVBQUksTUFBTSxpQkFBaUIsUUFBUTtBQUNqQyxZQUFJLGtCQUFrQixPQUFRLE1BQU0sWUFBYztBQUFBLE1BQ25EO0FBQ0QsYUFBTztBQUFBLElBQ2IsQ0FBSztBQUVELFVBQU0sV0FBVyxRQUFRLGlCQUFpQjtBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaO0FBQUEsTUFDQTtBQUFBLE1BQ0EsT0FBTyxTQUFTLE1BQ2QsTUFBTSxlQUFlLFNBQ2pCLE1BQU0sYUFDTixNQUFNLEtBQ1g7QUFBQSxNQUNELFlBQVksU0FBUyxNQUFNLE1BQU0sY0FBYyxNQUFNLEtBQUs7QUFBQSxNQUMxRCxZQUFZLFNBQVMsTUFBTSxNQUFNLFVBQVU7QUFBQSxNQUMzQyxnQkFBZ0IsU0FBUyxNQUFNLE1BQU0sY0FBYztBQUFBLElBQ3pELENBQUs7QUFFRCxVQUFNLHVCQUF1QixTQUFTLE1BQU07QUFDMUMsVUFBSSxNQUFNLFNBQVMsVUFBVSxNQUFNO0FBQ2pDLGVBQU8sQ0FBRTtBQUFBLE1BQ1Y7QUFFRCxhQUFPLEdBQUcsU0FBUyxHQUFHLFdBQVcsT0FDN0IsRUFBRSxTQUFTLFFBQVEsY0FBZSxJQUNsQztBQUFBLFFBQ0UsYUFBYSxRQUFRO0FBQUEsUUFDckI7QUFBQSxRQUNBLFFBQVEsUUFBUTtBQUFBLFFBQ2hCO0FBQUEsUUFDQSxTQUFTLFFBQVE7QUFBQSxNQUNsQjtBQUFBLElBQ1gsQ0FBSztBQUVELGFBQVMsWUFBYSxRQUFRO0FBQzVCLFVBQUksTUFBTSxVQUFVLE1BQU0sWUFBWTtBQUNwQyxhQUFLLHFCQUFxQixNQUFNLEtBQUs7QUFBQSxNQUN0QztBQUNELGlCQUFXLFFBQVEsS0FBSyxVQUFVLE1BQU0sS0FBSztBQUFBLElBQzlDO0FBRUQsYUFBUyxjQUFlO0FBQ3RCLGFBQU8sUUFBUSxNQUFNLHNCQUF1QjtBQUFBLElBQzdDO0FBRUQsYUFBUyxlQUFnQixPQUFPLFdBQVcsTUFBTSxTQUFTLE9BQU87QUFDL0QsWUFBTUMsU0FBUSxRQUFRLGlCQUFpQixPQUFPLFFBQVE7QUFFdEQsWUFBTSxRQUFRLFFBQVEsb0JBQW9CQSxNQUFLO0FBRS9DLGVBQVMsUUFBUSxNQUFNLFNBQVMsUUFBUSxNQUFNLFNBQVMsSUFDbkRBLFNBQ0EsUUFBUSxvQkFBb0IsTUFBTSxLQUFLO0FBQUEsSUFDNUM7QUFFRCxhQUFTLFVBQVc7QUFDbEIsWUFBTSxNQUFNLFFBQVE7QUFBQSxJQUNyQjtBQUVELGFBQVMsVUFBVyxLQUFLO0FBQ3ZCLFVBQUksQ0FBQyxTQUFTLFNBQVMsSUFBSSxPQUFPLEdBQUc7QUFDbkM7QUFBQSxNQUNEO0FBRUQscUJBQWUsR0FBRztBQUVsQixZQUNFLFdBQVcsQ0FBRSxJQUFJLEVBQUUsRUFBRyxTQUFTLElBQUksT0FBTyxJQUFJLEtBQUssS0FBSyxNQUFNLFFBQVEsT0FDdEUsVUFDRyxDQUFFLElBQUksSUFBSSxFQUFJLEVBQUMsU0FBUyxJQUFJLE9BQU8sSUFBSSxLQUFLLE1BQzFDLE1BQU0sV0FBVyxVQUFVLE9BQU8sS0FBSyxNQUN2QyxNQUFNLGFBQWEsT0FBTyxLQUFLLEtBQUs7QUFHM0MsWUFBTSxRQUFRO0FBQUEsUUFDWixNQUFNLGFBQWEsTUFBTSxNQUFNLFFBQVEsTUFBTTtBQUFBLFFBQzdDLE1BQU0sU0FBUztBQUFBLFFBQ2YsTUFBTSxTQUFTO0FBQUEsTUFDaEI7QUFFRCxrQkFBYTtBQUFBLElBQ2Q7QUFFRCxXQUFPLE1BQU07QUFDWCxZQUFNLFVBQVUsUUFBUTtBQUFBLFFBQ3RCO0FBQUEsUUFDQSxNQUFNO0FBQUEsUUFDTjtBQUFBLFFBQ0EsVUFBUTtBQUFFLGVBQUssS0FBSyxTQUFVLENBQUE7QUFBQSxRQUFHO0FBQUEsTUFDbEM7QUFFRCxhQUFPLEVBQUUsT0FBTztBQUFBLFFBQ2QsS0FBSztBQUFBLFFBQ0wsT0FBTyxNQUFNLFFBQVEsU0FBUyxNQUFNLGVBQWUsT0FBTyx3QkFBd0I7QUFBQSxRQUNsRixHQUFHLE1BQU0sV0FBVztBQUFBLFFBQ3BCLGlCQUFpQixNQUFNO0FBQUEsTUFDeEIsR0FBRSxPQUFPO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFDSCxDQUFDO0FDeEpELE1BQU0sZUFBZSxPQUFPLEtBQUssV0FBVztBQUVyQyxNQUFNLGVBQWUsV0FBUyxhQUFhO0FBQUEsRUFDaEQsQ0FBQyxLQUFLLFFBQVE7QUFDWixVQUFNLE1BQU0sTUFBTyxHQUFLO0FBQ3hCLFFBQUksUUFBUSxRQUFRO0FBQ2xCLFVBQUssR0FBRyxJQUFLO0FBQUEsSUFDZDtBQUNELFdBQU87QUFBQSxFQUNSO0FBQUEsRUFDRCxDQUFFO0FBQ0o7QUFFQSxNQUFBLGVBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBRUgsWUFBWTtBQUFBLElBQ1osT0FBTztBQUFBLElBQ1AsY0FBYztBQUFBLElBRWQsY0FBYyxDQUFFLE9BQU8sUUFBUSxNQUFRO0FBQUEsSUFDdkMsY0FBYyxDQUFFLE9BQU8sUUFBUSxNQUFRO0FBQUEsSUFFdkMsT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osZ0JBQWdCO0FBQUEsSUFDaEIsV0FBVztBQUFBLElBRVgsWUFBWTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUNELFVBQVU7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNWO0FBQUEsSUFDRCxZQUFZO0FBQUEsSUFFWixnQkFBZ0I7QUFBQSxJQUNoQixpQkFBaUI7QUFBQSxJQUVqQixpQkFBaUI7QUFBQSxJQUVqQixpQkFBaUI7QUFBQSxFQUNsQjtBQUFBLEVBRUQsT0FBTyxDQUFFLHFCQUFxQixTQUFTLGNBQWMsUUFBUSxjQUFjLE1BQVE7QUFBQSxFQUVuRixNQUFPLE9BQU8sRUFBRSxPQUFPLEtBQUksR0FBSTtBQUM3QixVQUFNLEVBQUUsTUFBTyxJQUFHLG1CQUFvQjtBQUV0QyxVQUFNLFVBQVUsSUFBSSxNQUFNLFVBQVU7QUFDcEMsVUFBTSxVQUFVLElBQUksSUFBSTtBQUN4QixVQUFNLFlBQVksTUFBTztBQUV6QixVQUFNLFlBQVksU0FBUyxNQUFNO0FBQy9CLFlBQU0sTUFBTTtBQUFBLFFBQ1YsaUJBQWlCLFFBQVEsVUFBVSxPQUFPLFNBQVM7QUFBQSxRQUNuRCxpQkFBaUI7QUFBQSxRQUNqQixpQkFBaUIsVUFBVTtBQUFBLFFBQzNCLGNBQWMsTUFBTSxtQkFBbUIsTUFBTSxHQUFHLEtBQUssTUFBTyxRQUFRLFVBQVUsT0FBTyxhQUFhLFFBQVEsRUFBRyxNQUFNLEtBQUs7QUFBQSxNQUN6SDtBQUVELFVBQ0UsTUFBTSxZQUFZLFNBRWYsTUFBTSxVQUFVLFNBQVMsTUFBTSxtQkFBbUIsUUFDaEQsTUFBTSxvQkFBb0IsT0FFL0I7QUFDQSxZQUFLLGVBQWUsSUFBSztBQUFBLE1BQzFCO0FBRUQsYUFBTztBQUFBLElBQ2IsQ0FBSztBQUVELFVBQU0sWUFBWTtBQUFBLE1BQVMsTUFDekIsMkJBQ0csUUFBUSxVQUFVLFFBQVEsTUFBTSxvQkFBb0IsUUFBUSxnQkFBZ0IsT0FDNUUsTUFBTSxVQUFVLFFBQVEscUNBQXFDO0FBQUEsSUFDakU7QUFFRCxVQUFNLGdCQUFnQixTQUFTLE1BQU0saUJBQWlCLEtBQUssQ0FBQztBQUM1RCxVQUFNLFdBQVcsU0FBUyxNQUFNLGFBQWEsS0FBSyxDQUFDO0FBRW5ELFVBQU0sTUFBTSxNQUFNLFlBQVksU0FBTztBQUNuQyxjQUFRLFVBQVUsUUFBUSxRQUFRLE1BQU8sTUFBTSxTQUFTLFFBQVU7QUFBQSxJQUN4RSxDQUFLO0FBRUQsVUFBTSxNQUFNLE1BQU0sT0FBTyxJQUFJO0FBRTdCLGFBQVMsYUFBYyxHQUFHO0FBQ3hCLGNBQVEsUUFBUTtBQUNoQixXQUFLLGNBQWMsQ0FBQztBQUFBLElBQ3JCO0FBRUQsYUFBUyxPQUFRLEdBQUc7QUFDbEIsV0FBSyxRQUFRLENBQUM7QUFDZCxXQUFLLHFCQUFxQixJQUFJO0FBQUEsSUFDL0I7QUFFRCxhQUFTLGFBQWMsR0FBRztBQUN4QixjQUFRLFFBQVE7QUFDaEIsV0FBSyxjQUFjLENBQUM7QUFBQSxJQUNyQjtBQUVELGFBQVMsT0FBUSxHQUFHO0FBQ2xCLFdBQUssUUFBUSxDQUFDO0FBQ2QsV0FBSyxxQkFBcUIsS0FBSztBQUFBLElBQ2hDO0FBRUQsYUFBUyxRQUFTLEdBQUc7QUFDbkIsV0FBSyxTQUFTLENBQUM7QUFBQSxJQUNoQjtBQUVELGFBQVMsWUFBYSxHQUFHO0FBQ3ZCLFdBQUssQ0FBQztBQUNOLFdBQU07QUFDTixXQUFLLFNBQVMsQ0FBQztBQUFBLElBQ2hCO0FBRUQsYUFBUyxPQUFRLEtBQUs7QUFDcEIsY0FBUSxVQUFVLFFBQVEsUUFBUSxNQUFNLE9BQU8sR0FBRztBQUFBLElBQ25EO0FBRUQsYUFBUyxLQUFNLEtBQUs7QUFDbEIsY0FBUSxVQUFVLFFBQVEsUUFBUSxNQUFNLEtBQUssR0FBRztBQUFBLElBQ2pEO0FBRUQsYUFBUyxLQUFNLEtBQUs7QUFDbEIsY0FBUSxVQUFVLFFBQVEsUUFBUSxNQUFNLEtBQUssR0FBRztBQUFBLElBQ2pEO0FBR0QsV0FBTyxPQUFPLE9BQU87QUFBQSxNQUNuQjtBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsSUFDbEIsQ0FBSztBQUVELGNBQVUsTUFBTTtBQUNkLFlBQU0sZUFBZSxRQUFRLEtBQU07QUFBQSxJQUN6QyxDQUFLO0FBRUQsV0FBTyxNQUFNO0FBQ1gsWUFBTSxRQUFRO0FBQUEsUUFDWixFQUFFLE9BQU87QUFBQSxVQUNQLE9BQU8sVUFBVTtBQUFBLFVBQ2pCLE1BQU0sTUFBTSxnQkFBZ0IsTUFBTSxHQUFHLFFBQVEsTUFBTTtBQUFBLFFBQzdELENBQVM7QUFBQSxNQUNGO0FBRUQsWUFBTSxvQkFBb0IsUUFBUSxNQUFNO0FBQUEsUUFDdEMsRUFBRSxPQUFPO0FBQUEsVUFDUCxLQUFLO0FBQUEsVUFDTCxJQUFJLFVBQVU7QUFBQSxVQUNkLE9BQU8sTUFBTTtBQUFBLFVBQ2IsT0FBTyxNQUFNO0FBQUEsVUFDYixPQUFPLE1BQU07QUFBQSxVQUNiLEtBQUs7QUFBQSxVQUNMLFlBQVksTUFBTTtBQUFBLFVBQ2xCLGdCQUFnQixNQUFNO0FBQUEsVUFDdEIsV0FBVyxNQUFNO0FBQUEsVUFDakIsUUFBUSxNQUFNO0FBQUEsVUFDZCxNQUFNLE1BQU07QUFBQSxVQUNaLFFBQVEsTUFBTTtBQUFBLFVBQ2Qsb0JBQW9CO0FBQUEsVUFDcEIsZ0JBQWdCLE1BQU07QUFBQSxVQUN0QixnQkFBZ0IsTUFBTTtBQUFBLFVBQ3RCLG9CQUFvQixNQUFNO0FBQUEsVUFDMUI7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNWLEdBQVcsTUFBTSxPQUFPO0FBQUEsTUFDakI7QUFFRCxVQUFJLE1BQU0sVUFBVSxPQUFPO0FBQ3pCLGVBQU8sRUFBRSxNQUFNO0FBQUEsVUFDYixPQUFPO0FBQUEsVUFDUCxHQUFHLFNBQVM7QUFBQSxVQUNaLEdBQUcsVUFBVTtBQUFBLFVBQ2IsU0FBUyxNQUFNLFlBQVksUUFBUSxNQUFNLG1CQUFtQjtBQUFBLFVBQzVELFFBQVE7QUFBQSxVQUNSLE9BQU87QUFBQSxVQUNQO0FBQUEsUUFDVixHQUFXO0FBQUEsVUFDRCxTQUFTLE1BQU0sTUFBTSxNQUFNLE9BQU8sRUFBRSxFQUFFLE9BQU8sS0FBSztBQUFBLFVBQ2xELFNBQVMsTUFBTTtBQUFBLFFBQ3pCLENBQVM7QUFBQSxNQUNGO0FBRUQsYUFBTyxFQUFFLFdBQVc7QUFBQSxRQUNsQixPQUFPO0FBQUEsUUFDUCxTQUFTLE1BQU07QUFBQSxRQUNmLFFBQVEsTUFBTTtBQUFBLFFBQ2QsR0FBRyxjQUFjO0FBQUEsUUFDakIsUUFBUSxNQUFNO0FBQUEsUUFDZCxTQUFTLE1BQU07QUFBQSxNQUN2QixHQUFTLE1BQU07QUFBQSxRQUNQLEVBQUUsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFVBQ1AsR0FBRyxTQUFTO0FBQUEsVUFDWixTQUFTLE1BQU0sWUFBWSxRQUFRLE1BQU0sbUJBQW1CO0FBQUEsVUFDNUQsUUFBUTtBQUFBLFVBQ1IsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFFBQ25CLEdBQVc7QUFBQSxVQUNELFNBQVMsTUFBTTtBQUFBLFVBQ2YsU0FBUyxNQUFNO0FBQUEsUUFDekIsQ0FBUztBQUFBLFFBRUQsRUFBRSxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxHQUFHLFVBQVU7QUFBQSxVQUNiLEdBQUcsY0FBYztBQUFBLFVBQ2pCLFNBQVMsTUFBTSxZQUFZLFFBQVEsTUFBTSxvQkFBb0I7QUFBQSxVQUM3RCxTQUFTLE1BQU07QUFBQSxVQUNmLE9BQU8sTUFBTTtBQUFBLFVBQ2IsV0FBVyxNQUFNO0FBQUEsVUFDakIsT0FBTyxNQUFNO0FBQUEsVUFDYixNQUFNLE1BQU07QUFBQSxVQUNaLFNBQVMsTUFBTTtBQUFBLFVBQ2YsUUFBUSxNQUFNO0FBQUEsUUFDZixHQUFFLE1BQU0sS0FBSztBQUFBLE1BQ3RCLENBQU87QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNILENBQUM7Ozs7QUNsSkssVUFBQSxXQUFXLG1CQUFtQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEckMsVUFBQSxXQUFXLG1CQUFtQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUXJDLFVBQUEsV0FBVyxtQkFBbUIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjNDLFVBQU0sRUFBRSxjQUFjLFlBQVksSUFBSSxZQUFZO0FBRWxELFVBQU0sRUFBRSxPQUFXLElBQUEsWUFBWSxpQkFBa0IsQ0FBQTtBQUNqRCxVQUFNLEVBQUUsSUFBUSxJQUFBLFlBQVksZUFBZ0IsQ0FBQTtBQUM1QyxVQUFNLFdBQVcsYUFBYTtBQUM5QixVQUFNLFVBQVUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyLDMsNCw1LDYsN119
