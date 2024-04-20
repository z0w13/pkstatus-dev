import { g as getCurrentInstance, r as ref, P as isKeyCode, aK as prevent, v as nextTick, aI as addEvt, w as watch, t as onMounted, o as onBeforeUnmount, aL as cleanEvt, E as listenOpts, dp as portalProxyList, aG as client, I as getScrollbarWidth, c as createComponent, u as useModelToggleProps, k as useDarkProps, ay as useTransitionProps, m as useModelToggleEmits, d as computed, n as useDark, ao as useTick, p as useTimeout, dq as useTransition, q as useModelToggle, dr as usePortal, ds as addFocusout, au as position, dt as removeFocusout, du as removeEscapeKey, D as getScrollTarget, dv as closePortalMenus, h, e as hSlot, bi as Transition, dw as addEscapeKey, d8 as addFocusFn, dx as childHasFocus, ai as stopAndPrevent } from "./index-C1u-_TOv.js";
import { c as clearSelection } from "./format-esB8TFiE.js";
let rtlHasScrollBug = false;
{
  const scroller = document.createElement("div");
  scroller.setAttribute("dir", "rtl");
  Object.assign(scroller.style, {
    width: "1px",
    height: "1px",
    overflow: "auto"
  });
  const spacer = document.createElement("div");
  Object.assign(spacer.style, {
    width: "1000px",
    height: "1px"
  });
  document.body.appendChild(scroller);
  scroller.appendChild(spacer);
  scroller.scrollLeft = -1e3;
  rtlHasScrollBug = scroller.scrollLeft >= 0;
  scroller.remove();
}
const useAnchorProps = {
  target: {
    default: true
  },
  noParentEvent: Boolean,
  contextMenu: Boolean
};
function useAnchor({
  showing,
  avoidEmit,
  // required for QPopupProxy (true)
  configureAnchorEl
  // optional
}) {
  const { props, proxy, emit } = getCurrentInstance();
  const anchorEl = ref(null);
  let touchTimer = null;
  function canShow(evt) {
    return anchorEl.value === null ? false : evt === void 0 || evt.touches === void 0 || evt.touches.length <= 1;
  }
  const anchorEvents = {};
  if (configureAnchorEl === void 0) {
    Object.assign(anchorEvents, {
      hide(evt) {
        proxy.hide(evt);
      },
      toggle(evt) {
        proxy.toggle(evt);
        evt.qAnchorHandled = true;
      },
      toggleKey(evt) {
        isKeyCode(evt, 13) === true && anchorEvents.toggle(evt);
      },
      contextClick(evt) {
        proxy.hide(evt);
        prevent(evt);
        nextTick(() => {
          proxy.show(evt);
          evt.qAnchorHandled = true;
        });
      },
      prevent,
      mobileTouch(evt) {
        anchorEvents.mobileCleanup(evt);
        if (canShow(evt) !== true) {
          return;
        }
        proxy.hide(evt);
        anchorEl.value.classList.add("non-selectable");
        const target = evt.target;
        addEvt(anchorEvents, "anchor", [
          [target, "touchmove", "mobileCleanup", "passive"],
          [target, "touchend", "mobileCleanup", "passive"],
          [target, "touchcancel", "mobileCleanup", "passive"],
          [anchorEl.value, "contextmenu", "prevent", "notPassive"]
        ]);
        touchTimer = setTimeout(() => {
          touchTimer = null;
          proxy.show(evt);
          evt.qAnchorHandled = true;
        }, 300);
      },
      mobileCleanup(evt) {
        anchorEl.value.classList.remove("non-selectable");
        if (touchTimer !== null) {
          clearTimeout(touchTimer);
          touchTimer = null;
        }
        if (showing.value === true && evt !== void 0) {
          clearSelection();
        }
      }
    });
    configureAnchorEl = function(context = props.contextMenu) {
      if (props.noParentEvent === true || anchorEl.value === null)
        return;
      let evts;
      if (context === true) {
        if (proxy.$q.platform.is.mobile === true) {
          evts = [
            [anchorEl.value, "touchstart", "mobileTouch", "passive"]
          ];
        } else {
          evts = [
            [anchorEl.value, "mousedown", "hide", "passive"],
            [anchorEl.value, "contextmenu", "contextClick", "notPassive"]
          ];
        }
      } else {
        evts = [
          [anchorEl.value, "click", "toggle", "passive"],
          [anchorEl.value, "keyup", "toggleKey", "passive"]
        ];
      }
      addEvt(anchorEvents, "anchor", evts);
    };
  }
  function unconfigureAnchorEl() {
    cleanEvt(anchorEvents, "anchor");
  }
  function setAnchorEl(el) {
    anchorEl.value = el;
    while (anchorEl.value.classList.contains("q-anchor--skip")) {
      anchorEl.value = anchorEl.value.parentNode;
    }
    configureAnchorEl();
  }
  function pickAnchorEl() {
    if (props.target === false || props.target === "" || proxy.$el.parentNode === null) {
      anchorEl.value = null;
    } else if (props.target === true) {
      setAnchorEl(proxy.$el.parentNode);
    } else {
      let el = props.target;
      if (typeof props.target === "string") {
        try {
          el = document.querySelector(props.target);
        } catch (err) {
          el = void 0;
        }
      }
      if (el !== void 0 && el !== null) {
        anchorEl.value = el.$el || el;
        configureAnchorEl();
      } else {
        anchorEl.value = null;
        console.error(`Anchor: target "${props.target}" not found`);
      }
    }
  }
  watch(() => props.contextMenu, (val) => {
    if (anchorEl.value !== null) {
      unconfigureAnchorEl();
      configureAnchorEl(val);
    }
  });
  watch(() => props.target, () => {
    if (anchorEl.value !== null) {
      unconfigureAnchorEl();
    }
    pickAnchorEl();
  });
  watch(() => props.noParentEvent, (val) => {
    if (anchorEl.value !== null) {
      if (val === true) {
        unconfigureAnchorEl();
      } else {
        configureAnchorEl();
      }
    }
  });
  onMounted(() => {
    pickAnchorEl();
    if (avoidEmit !== true && props.modelValue === true && anchorEl.value === null) {
      emit("update:modelValue", false);
    }
  });
  onBeforeUnmount(() => {
    touchTimer !== null && clearTimeout(touchTimer);
    unconfigureAnchorEl();
  });
  return {
    anchorEl,
    canShow,
    anchorEvents
  };
}
function useScrollTarget(props, configureScrollTarget) {
  const localScrollTarget = ref(null);
  let scrollFn;
  function changeScrollEvent(scrollTarget, fn) {
    const fnProp = `${fn !== void 0 ? "add" : "remove"}EventListener`;
    const fnHandler = fn !== void 0 ? fn : scrollFn;
    if (scrollTarget !== window) {
      scrollTarget[fnProp]("scroll", fnHandler, listenOpts.passive);
    }
    window[fnProp]("scroll", fnHandler, listenOpts.passive);
    scrollFn = fn;
  }
  function unconfigureScrollTarget() {
    if (localScrollTarget.value !== null) {
      changeScrollEvent(localScrollTarget.value);
      localScrollTarget.value = null;
    }
  }
  const noParentEventWatcher = watch(() => props.noParentEvent, () => {
    if (localScrollTarget.value !== null) {
      unconfigureScrollTarget();
      configureScrollTarget();
    }
  });
  onBeforeUnmount(noParentEventWatcher);
  return {
    localScrollTarget,
    unconfigureScrollTarget,
    changeScrollEvent
  };
}
const { notPassiveCapture } = listenOpts, registeredList = [];
function globalHandler(evt) {
  const target = evt.target;
  if (target === void 0 || target.nodeType === 8 || target.classList.contains("no-pointer-events") === true) {
    return;
  }
  let portalIndex = portalProxyList.length - 1;
  while (portalIndex >= 0) {
    const proxy = portalProxyList[portalIndex].$;
    if (proxy.type.name === "QTooltip") {
      portalIndex--;
      continue;
    }
    if (proxy.type.name !== "QDialog") {
      break;
    }
    if (proxy.props.seamless !== true) {
      return;
    }
    portalIndex--;
  }
  for (let i = registeredList.length - 1; i >= 0; i--) {
    const state = registeredList[i];
    if ((state.anchorEl.value === null || state.anchorEl.value.contains(target) === false) && (target === document.body || state.innerRef.value !== null && state.innerRef.value.contains(target) === false)) {
      evt.qClickOutside = true;
      state.onClickOutside(evt);
    } else {
      return;
    }
  }
}
function addClickOutside(clickOutsideProps) {
  registeredList.push(clickOutsideProps);
  if (registeredList.length === 1) {
    document.addEventListener("mousedown", globalHandler, notPassiveCapture);
    document.addEventListener("touchstart", globalHandler, notPassiveCapture);
  }
}
function removeClickOutside(clickOutsideProps) {
  const index = registeredList.findIndex((h2) => h2 === clickOutsideProps);
  if (index !== -1) {
    registeredList.splice(index, 1);
    if (registeredList.length === 0) {
      document.removeEventListener("mousedown", globalHandler, notPassiveCapture);
      document.removeEventListener("touchstart", globalHandler, notPassiveCapture);
    }
  }
}
let vpLeft, vpTop;
function validatePosition(pos) {
  const parts = pos.split(" ");
  if (parts.length !== 2) {
    return false;
  }
  if (["top", "center", "bottom"].includes(parts[0]) !== true) {
    console.error("Anchor/Self position must start with one of top/center/bottom");
    return false;
  }
  if (["left", "middle", "right", "start", "end"].includes(parts[1]) !== true) {
    console.error("Anchor/Self position must end with one of left/middle/right/start/end");
    return false;
  }
  return true;
}
function validateOffset(val) {
  if (!val) {
    return true;
  }
  if (val.length !== 2) {
    return false;
  }
  if (typeof val[0] !== "number" || typeof val[1] !== "number") {
    return false;
  }
  return true;
}
const horizontalPos = {
  "start#ltr": "left",
  "start#rtl": "right",
  "end#ltr": "right",
  "end#rtl": "left"
};
["left", "middle", "right"].forEach((pos) => {
  horizontalPos[`${pos}#ltr`] = pos;
  horizontalPos[`${pos}#rtl`] = pos;
});
function parsePosition(pos, rtl) {
  const parts = pos.split(" ");
  return {
    vertical: parts[0],
    horizontal: horizontalPos[`${parts[1]}#${rtl === true ? "rtl" : "ltr"}`]
  };
}
function getAnchorProps(el, offset) {
  let { top, left, right, bottom, width, height } = el.getBoundingClientRect();
  if (offset !== void 0) {
    top -= offset[1];
    left -= offset[0];
    bottom += offset[1];
    right += offset[0];
    width += offset[0];
    height += offset[1];
  }
  return {
    top,
    bottom,
    height,
    left,
    right,
    width,
    middle: left + (right - left) / 2,
    center: top + (bottom - top) / 2
  };
}
function getAbsoluteAnchorProps(el, absoluteOffset, offset) {
  let { top, left } = el.getBoundingClientRect();
  top += absoluteOffset.top;
  left += absoluteOffset.left;
  if (offset !== void 0) {
    top += offset[1];
    left += offset[0];
  }
  return {
    top,
    bottom: top + 1,
    height: 1,
    left,
    right: left + 1,
    width: 1,
    middle: left,
    center: top
  };
}
function getTargetProps(width, height) {
  return {
    top: 0,
    center: height / 2,
    bottom: height,
    left: 0,
    middle: width / 2,
    right: width
  };
}
function getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin) {
  return {
    top: anchorProps[anchorOrigin.vertical] - targetProps[selfOrigin.vertical],
    left: anchorProps[anchorOrigin.horizontal] - targetProps[selfOrigin.horizontal]
  };
}
function setPosition(cfg, retryNumber = 0) {
  if (cfg.targetEl === null || cfg.anchorEl === null || retryNumber > 5) {
    return;
  }
  if (cfg.targetEl.offsetHeight === 0 || cfg.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      setPosition(cfg, retryNumber + 1);
    }, 10);
    return;
  }
  const {
    targetEl,
    offset,
    anchorEl,
    anchorOrigin,
    selfOrigin,
    absoluteOffset,
    fit,
    cover,
    maxHeight,
    maxWidth
  } = cfg;
  if (client.is.ios === true && window.visualViewport !== void 0) {
    const el = document.body.style;
    const { offsetLeft: left, offsetTop: top } = window.visualViewport;
    if (left !== vpLeft) {
      el.setProperty("--q-pe-left", left + "px");
      vpLeft = left;
    }
    if (top !== vpTop) {
      el.setProperty("--q-pe-top", top + "px");
      vpTop = top;
    }
  }
  const { scrollLeft, scrollTop } = targetEl;
  const anchorProps = absoluteOffset === void 0 ? getAnchorProps(anchorEl, cover === true ? [0, 0] : offset) : getAbsoluteAnchorProps(anchorEl, absoluteOffset, offset);
  Object.assign(targetEl.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth: maxWidth || "100vw",
    maxHeight: maxHeight || "100vh",
    visibility: "visible"
  });
  const { offsetWidth: origElWidth, offsetHeight: origElHeight } = targetEl;
  const { elWidth, elHeight } = fit === true || cover === true ? { elWidth: Math.max(anchorProps.width, origElWidth), elHeight: cover === true ? Math.max(anchorProps.height, origElHeight) : origElHeight } : { elWidth: origElWidth, elHeight: origElHeight };
  let elStyle = { maxWidth, maxHeight };
  if (fit === true || cover === true) {
    elStyle.minWidth = anchorProps.width + "px";
    if (cover === true) {
      elStyle.minHeight = anchorProps.height + "px";
    }
  }
  Object.assign(targetEl.style, elStyle);
  const targetProps = getTargetProps(elWidth, elHeight);
  let props = getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin);
  if (absoluteOffset === void 0 || offset === void 0) {
    applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
  } else {
    const { top, left } = props;
    applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
    let hasChanged = false;
    if (props.top !== top) {
      hasChanged = true;
      const offsetY = 2 * offset[1];
      anchorProps.center = anchorProps.top -= offsetY;
      anchorProps.bottom -= offsetY + 2;
    }
    if (props.left !== left) {
      hasChanged = true;
      const offsetX = 2 * offset[0];
      anchorProps.middle = anchorProps.left -= offsetX;
      anchorProps.right -= offsetX + 2;
    }
    if (hasChanged === true) {
      props = getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin);
      applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
    }
  }
  elStyle = {
    top: props.top + "px",
    left: props.left + "px"
  };
  if (props.maxHeight !== void 0) {
    elStyle.maxHeight = props.maxHeight + "px";
    if (anchorProps.height > props.maxHeight) {
      elStyle.minHeight = elStyle.maxHeight;
    }
  }
  if (props.maxWidth !== void 0) {
    elStyle.maxWidth = props.maxWidth + "px";
    if (anchorProps.width > props.maxWidth) {
      elStyle.minWidth = elStyle.maxWidth;
    }
  }
  Object.assign(targetEl.style, elStyle);
  if (targetEl.scrollTop !== scrollTop) {
    targetEl.scrollTop = scrollTop;
  }
  if (targetEl.scrollLeft !== scrollLeft) {
    targetEl.scrollLeft = scrollLeft;
  }
}
function applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin) {
  const currentHeight = targetProps.bottom, currentWidth = targetProps.right, margin = getScrollbarWidth(), innerHeight = window.innerHeight - margin, innerWidth = document.body.clientWidth;
  if (props.top < 0 || props.top + currentHeight > innerHeight) {
    if (selfOrigin.vertical === "center") {
      props.top = anchorProps[anchorOrigin.vertical] > innerHeight / 2 ? Math.max(0, innerHeight - currentHeight) : 0;
      props.maxHeight = Math.min(currentHeight, innerHeight);
    } else if (anchorProps[anchorOrigin.vertical] > innerHeight / 2) {
      const anchorY = Math.min(
        innerHeight,
        anchorOrigin.vertical === "center" ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.bottom : anchorProps.top
      );
      props.maxHeight = Math.min(currentHeight, anchorY);
      props.top = Math.max(0, anchorY - currentHeight);
    } else {
      props.top = Math.max(
        0,
        anchorOrigin.vertical === "center" ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.top : anchorProps.bottom
      );
      props.maxHeight = Math.min(currentHeight, innerHeight - props.top);
    }
  }
  if (props.left < 0 || props.left + currentWidth > innerWidth) {
    props.maxWidth = Math.min(currentWidth, innerWidth);
    if (selfOrigin.horizontal === "middle") {
      props.left = anchorProps[anchorOrigin.horizontal] > innerWidth / 2 ? Math.max(0, innerWidth - currentWidth) : 0;
    } else if (anchorProps[anchorOrigin.horizontal] > innerWidth / 2) {
      const anchorX = Math.min(
        innerWidth,
        anchorOrigin.horizontal === "middle" ? anchorProps.middle : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.right : anchorProps.left
      );
      props.maxWidth = Math.min(currentWidth, anchorX);
      props.left = Math.max(0, anchorX - props.maxWidth);
    } else {
      props.left = Math.max(
        0,
        anchorOrigin.horizontal === "middle" ? anchorProps.middle : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.left : anchorProps.right
      );
      props.maxWidth = Math.min(currentWidth, innerWidth - props.left);
    }
  }
}
const QMenu = createComponent({
  name: "QMenu",
  inheritAttrs: false,
  props: {
    ...useAnchorProps,
    ...useModelToggleProps,
    ...useDarkProps,
    ...useTransitionProps,
    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: {
      type: String,
      validator: validatePosition
    },
    self: {
      type: String,
      validator: validatePosition
    },
    offset: {
      type: Array,
      validator: validateOffset
    },
    scrollTarget: {
      default: void 0
    },
    touchPosition: Boolean,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    }
  },
  emits: [
    ...useModelToggleEmits,
    "click",
    "escapeKey"
  ],
  setup(props, { slots, emit, attrs }) {
    let refocusTarget = null, absoluteOffset, unwatchPosition, avoidAutoClose;
    const vm = getCurrentInstance();
    const { proxy } = vm;
    const { $q } = proxy;
    const innerRef = ref(null);
    const showing = ref(false);
    const hideOnRouteChange = computed(
      () => props.persistent !== true && props.noRouteDismiss !== true
    );
    const isDark = useDark(props, $q);
    const { registerTick, removeTick } = useTick();
    const { registerTimeout } = useTimeout();
    const { transitionProps, transitionStyle } = useTransition(props);
    const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);
    const { anchorEl, canShow } = useAnchor({ showing });
    const { hide } = useModelToggle({
      showing,
      canShow,
      handleShow,
      handleHide,
      hideOnRouteChange,
      processOnMount: true
    });
    const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent, "menu");
    const clickOutsideProps = {
      anchorEl,
      innerRef,
      onClickOutside(e) {
        if (props.persistent !== true && showing.value === true) {
          hide(e);
          if (
            // always prevent touch event
            e.type === "touchstart" || e.target.classList.contains("q-dialog__backdrop")
          ) {
            stopAndPrevent(e);
          }
          return true;
        }
      }
    };
    const anchorOrigin = computed(
      () => parsePosition(
        props.anchor || (props.cover === true ? "center middle" : "bottom start"),
        $q.lang.rtl
      )
    );
    const selfOrigin = computed(() => props.cover === true ? anchorOrigin.value : parsePosition(props.self || "top start", $q.lang.rtl));
    const menuClass = computed(
      () => (props.square === true ? " q-menu--square" : "") + (isDark.value === true ? " q-menu--dark q-dark" : "")
    );
    const onEvents = computed(() => props.autoClose === true ? { onClick: onAutoClose } : {});
    const handlesFocus = computed(
      () => showing.value === true && props.persistent !== true
    );
    watch(handlesFocus, (val) => {
      if (val === true) {
        addEscapeKey(onEscapeKey);
        addClickOutside(clickOutsideProps);
      } else {
        removeEscapeKey(onEscapeKey);
        removeClickOutside(clickOutsideProps);
      }
    });
    function focus() {
      addFocusFn(() => {
        let node = innerRef.value;
        if (node && node.contains(document.activeElement) !== true) {
          node = node.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || node.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || node.querySelector("[autofocus], [data-autofocus]") || node;
          node.focus({ preventScroll: true });
        }
      });
    }
    function handleShow(evt) {
      refocusTarget = props.noRefocus === false ? document.activeElement : null;
      addFocusout(onFocusout);
      showPortal();
      configureScrollTarget();
      absoluteOffset = void 0;
      if (evt !== void 0 && (props.touchPosition || props.contextMenu)) {
        const pos = position(evt);
        if (pos.left !== void 0) {
          const { top, left } = anchorEl.value.getBoundingClientRect();
          absoluteOffset = { left: pos.left - left, top: pos.top - top };
        }
      }
      if (unwatchPosition === void 0) {
        unwatchPosition = watch(
          () => $q.screen.width + "|" + $q.screen.height + "|" + props.self + "|" + props.anchor + "|" + $q.lang.rtl,
          updatePosition
        );
      }
      if (props.noFocus !== true) {
        document.activeElement.blur();
      }
      registerTick(() => {
        updatePosition();
        props.noFocus !== true && focus();
      });
      registerTimeout(() => {
        if ($q.platform.is.ios === true) {
          avoidAutoClose = props.autoClose;
          innerRef.value.click();
        }
        updatePosition();
        showPortal(true);
        emit("show", evt);
      }, props.transitionDuration);
    }
    function handleHide(evt) {
      removeTick();
      hidePortal();
      anchorCleanup(true);
      if (refocusTarget !== null && // menu was hidden from code or ESC plugin
      (evt === void 0 || evt.qClickOutside !== true)) {
        ((evt && evt.type.indexOf("key") === 0 ? refocusTarget.closest('[tabindex]:not([tabindex^="-"])') : void 0) || refocusTarget).focus();
        refocusTarget = null;
      }
      registerTimeout(() => {
        hidePortal(true);
        emit("hide", evt);
      }, props.transitionDuration);
    }
    function anchorCleanup(hiding) {
      absoluteOffset = void 0;
      if (unwatchPosition !== void 0) {
        unwatchPosition();
        unwatchPosition = void 0;
      }
      if (hiding === true || showing.value === true) {
        removeFocusout(onFocusout);
        unconfigureScrollTarget();
        removeClickOutside(clickOutsideProps);
        removeEscapeKey(onEscapeKey);
      }
      if (hiding !== true) {
        refocusTarget = null;
      }
    }
    function configureScrollTarget() {
      if (anchorEl.value !== null || props.scrollTarget !== void 0) {
        localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
        changeScrollEvent(localScrollTarget.value, updatePosition);
      }
    }
    function onAutoClose(e) {
      if (avoidAutoClose !== true) {
        closePortalMenus(proxy, e);
        emit("click", e);
      } else {
        avoidAutoClose = false;
      }
    }
    function onFocusout(evt) {
      if (handlesFocus.value === true && props.noFocus !== true && childHasFocus(innerRef.value, evt.target) !== true) {
        focus();
      }
    }
    function onEscapeKey(evt) {
      emit("escapeKey");
      hide(evt);
    }
    function updatePosition() {
      setPosition({
        targetEl: innerRef.value,
        offset: props.offset,
        anchorEl: anchorEl.value,
        anchorOrigin: anchorOrigin.value,
        selfOrigin: selfOrigin.value,
        absoluteOffset,
        fit: props.fit,
        cover: props.cover,
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth
      });
    }
    function renderPortalContent() {
      return h(
        Transition,
        transitionProps.value,
        () => showing.value === true ? h("div", {
          role: "menu",
          ...attrs,
          ref: innerRef,
          tabindex: -1,
          class: [
            "q-menu q-position-engine scroll" + menuClass.value,
            attrs.class
          ],
          style: [
            attrs.style,
            transitionStyle.value
          ],
          ...onEvents.value
        }, hSlot(slots.default)) : null
      );
    }
    onBeforeUnmount(anchorCleanup);
    Object.assign(proxy, { focus, updatePosition });
    return renderPortal;
  }
});
export {
  QMenu as Q,
  rtlHasScrollBug as r
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUU1lbnUtQ1J6VFhxTzkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4yL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvcnRsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjIvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtYW5jaG9yLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjIvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utc2Nyb2xsLXRhcmdldC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4yL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvY2xpY2stb3V0c2lkZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4yL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvcG9zaXRpb24tZW5naW5lLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjIvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9tZW51L1FNZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBydGxIYXNTY3JvbGxCdWcgPSBmYWxzZVxuXG4vLyBtb2JpbGUgQ2hyb21lIHRha2VzIHRoZSBjcm93biBmb3IgdGhpc1xuaWYgKCFfX1FVQVNBUl9TU1JfXykge1xuICBjb25zdCBzY3JvbGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHNjcm9sbGVyLnNldEF0dHJpYnV0ZSgnZGlyJywgJ3J0bCcpXG4gIE9iamVjdC5hc3NpZ24oc2Nyb2xsZXIuc3R5bGUsIHtcbiAgICB3aWR0aDogJzFweCcsXG4gICAgaGVpZ2h0OiAnMXB4JyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nXG4gIH0pXG5cbiAgY29uc3Qgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgT2JqZWN0LmFzc2lnbihzcGFjZXIuc3R5bGUsIHtcbiAgICB3aWR0aDogJzEwMDBweCcsXG4gICAgaGVpZ2h0OiAnMXB4J1xuICB9KVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsZXIpXG4gIHNjcm9sbGVyLmFwcGVuZENoaWxkKHNwYWNlcilcbiAgc2Nyb2xsZXIuc2Nyb2xsTGVmdCA9IC0xMDAwXG5cbiAgcnRsSGFzU2Nyb2xsQnVnID0gc2Nyb2xsZXIuc2Nyb2xsTGVmdCA+PSAwXG5cbiAgc2Nyb2xsZXIucmVtb3ZlKClcbn1cblxuZXhwb3J0IHtcbiAgcnRsSGFzU2Nyb2xsQnVnXG59XG4iLCJpbXBvcnQgeyByZWYsIHdhdGNoLCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgbmV4dFRpY2ssIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY2xlYXJTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3NlbGVjdGlvbi5qcydcbmltcG9ydCB7IGFkZEV2dCwgY2xlYW5FdnQsIHByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGlzS2V5Q29kZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUva2V5LWNvbXBvc2l0aW9uLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlQW5jaG9yUHJvcHMgPSB7XG4gIHRhcmdldDoge1xuICAgIGRlZmF1bHQ6IHRydWVcbiAgfSxcbiAgbm9QYXJlbnRFdmVudDogQm9vbGVhbixcbiAgY29udGV4dE1lbnU6IEJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHtcbiAgc2hvd2luZyxcbiAgYXZvaWRFbWl0LCAvLyByZXF1aXJlZCBmb3IgUVBvcHVwUHJveHkgKHRydWUpXG4gIGNvbmZpZ3VyZUFuY2hvckVsIC8vIG9wdGlvbmFsXG59KSB7XG4gIGNvbnN0IHsgcHJvcHMsIHByb3h5LCBlbWl0IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gIGNvbnN0IGFuY2hvckVsID0gcmVmKG51bGwpXG5cbiAgbGV0IHRvdWNoVGltZXIgPSBudWxsXG5cbiAgZnVuY3Rpb24gY2FuU2hvdyAoZXZ0KSB7XG4gICAgLy8gYWJvcnQgd2l0aCBubyBwYXJlbnQgY29uZmlndXJlZCBvciBvbiBtdWx0aS10b3VjaFxuICAgIHJldHVybiBhbmNob3JFbC52YWx1ZSA9PT0gbnVsbFxuICAgICAgPyBmYWxzZVxuICAgICAgOiAoZXZ0ID09PSB2b2lkIDAgfHwgZXZ0LnRvdWNoZXMgPT09IHZvaWQgMCB8fCBldnQudG91Y2hlcy5sZW5ndGggPD0gMSlcbiAgfVxuXG4gIGNvbnN0IGFuY2hvckV2ZW50cyA9IHt9XG5cbiAgaWYgKGNvbmZpZ3VyZUFuY2hvckVsID09PSB2b2lkIDApIHtcbiAgICAvLyBkZWZhdWx0IGNvbmZpZ3VyZUFuY2hvckVsIGlzIGRlc2lnbmVkIGZvclxuICAgIC8vIFFNZW51ICYgUVBvcHVwUHJveHkgKHdoaWNoIGlzIHdoeSBpdCdzIGhhbmRsZWQgaGVyZSlcblxuICAgIE9iamVjdC5hc3NpZ24oYW5jaG9yRXZlbnRzLCB7XG4gICAgICBoaWRlIChldnQpIHtcbiAgICAgICAgcHJveHkuaGlkZShldnQpXG4gICAgICB9LFxuXG4gICAgICB0b2dnbGUgKGV2dCkge1xuICAgICAgICBwcm94eS50b2dnbGUoZXZ0KVxuICAgICAgICBldnQucUFuY2hvckhhbmRsZWQgPSB0cnVlXG4gICAgICB9LFxuXG4gICAgICB0b2dnbGVLZXkgKGV2dCkge1xuICAgICAgICBpc0tleUNvZGUoZXZ0LCAxMykgPT09IHRydWUgJiYgYW5jaG9yRXZlbnRzLnRvZ2dsZShldnQpXG4gICAgICB9LFxuXG4gICAgICBjb250ZXh0Q2xpY2sgKGV2dCkge1xuICAgICAgICBwcm94eS5oaWRlKGV2dClcbiAgICAgICAgcHJldmVudChldnQpXG4gICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBwcm94eS5zaG93KGV2dClcbiAgICAgICAgICBldnQucUFuY2hvckhhbmRsZWQgPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9LFxuXG4gICAgICBwcmV2ZW50LFxuXG4gICAgICBtb2JpbGVUb3VjaCAoZXZ0KSB7XG4gICAgICAgIGFuY2hvckV2ZW50cy5tb2JpbGVDbGVhbnVwKGV2dClcblxuICAgICAgICBpZiAoY2FuU2hvdyhldnQpICE9PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBwcm94eS5oaWRlKGV2dClcbiAgICAgICAgYW5jaG9yRWwudmFsdWUuY2xhc3NMaXN0LmFkZCgnbm9uLXNlbGVjdGFibGUnKVxuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2dC50YXJnZXRcbiAgICAgICAgYWRkRXZ0KGFuY2hvckV2ZW50cywgJ2FuY2hvcicsIFtcbiAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNobW92ZScsICdtb2JpbGVDbGVhbnVwJywgJ3Bhc3NpdmUnIF0sXG4gICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGVuZCcsICdtb2JpbGVDbGVhbnVwJywgJ3Bhc3NpdmUnIF0sXG4gICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGNhbmNlbCcsICdtb2JpbGVDbGVhbnVwJywgJ3Bhc3NpdmUnIF0sXG4gICAgICAgICAgWyBhbmNob3JFbC52YWx1ZSwgJ2NvbnRleHRtZW51JywgJ3ByZXZlbnQnLCAnbm90UGFzc2l2ZScgXVxuICAgICAgICBdKVxuXG4gICAgICAgIHRvdWNoVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0b3VjaFRpbWVyID0gbnVsbFxuICAgICAgICAgIHByb3h5LnNob3coZXZ0KVxuICAgICAgICAgIGV2dC5xQW5jaG9ySGFuZGxlZCA9IHRydWVcbiAgICAgICAgfSwgMzAwKVxuICAgICAgfSxcblxuICAgICAgbW9iaWxlQ2xlYW51cCAoZXZ0KSB7XG4gICAgICAgIGFuY2hvckVsLnZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ25vbi1zZWxlY3RhYmxlJylcblxuICAgICAgICBpZiAodG91Y2hUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0b3VjaFRpbWVyKVxuICAgICAgICAgIHRvdWNoVGltZXIgPSBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBldnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGNsZWFyU2VsZWN0aW9uKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25maWd1cmVBbmNob3JFbCA9IGZ1bmN0aW9uIChjb250ZXh0ID0gcHJvcHMuY29udGV4dE1lbnUpIHtcbiAgICAgIGlmIChwcm9wcy5ub1BhcmVudEV2ZW50ID09PSB0cnVlIHx8IGFuY2hvckVsLnZhbHVlID09PSBudWxsKSByZXR1cm5cblxuICAgICAgbGV0IGV2dHNcblxuICAgICAgaWYgKGNvbnRleHQgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKHByb3h5LiRxLnBsYXRmb3JtLmlzLm1vYmlsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGV2dHMgPSBbXG4gICAgICAgICAgICBbIGFuY2hvckVsLnZhbHVlLCAndG91Y2hzdGFydCcsICdtb2JpbGVUb3VjaCcsICdwYXNzaXZlJyBdXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGV2dHMgPSBbXG4gICAgICAgICAgICBbIGFuY2hvckVsLnZhbHVlLCAnbW91c2Vkb3duJywgJ2hpZGUnLCAncGFzc2l2ZScgXSxcbiAgICAgICAgICAgIFsgYW5jaG9yRWwudmFsdWUsICdjb250ZXh0bWVudScsICdjb250ZXh0Q2xpY2snLCAnbm90UGFzc2l2ZScgXVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGV2dHMgPSBbXG4gICAgICAgICAgWyBhbmNob3JFbC52YWx1ZSwgJ2NsaWNrJywgJ3RvZ2dsZScsICdwYXNzaXZlJyBdLFxuICAgICAgICAgIFsgYW5jaG9yRWwudmFsdWUsICdrZXl1cCcsICd0b2dnbGVLZXknLCAncGFzc2l2ZScgXVxuICAgICAgICBdXG4gICAgICB9XG5cbiAgICAgIGFkZEV2dChhbmNob3JFdmVudHMsICdhbmNob3InLCBldnRzKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVuY29uZmlndXJlQW5jaG9yRWwgKCkge1xuICAgIGNsZWFuRXZ0KGFuY2hvckV2ZW50cywgJ2FuY2hvcicpXG4gIH1cblxuICBmdW5jdGlvbiBzZXRBbmNob3JFbCAoZWwpIHtcbiAgICBhbmNob3JFbC52YWx1ZSA9IGVsXG4gICAgd2hpbGUgKGFuY2hvckVsLnZhbHVlLmNsYXNzTGlzdC5jb250YWlucygncS1hbmNob3ItLXNraXAnKSkge1xuICAgICAgYW5jaG9yRWwudmFsdWUgPSBhbmNob3JFbC52YWx1ZS5wYXJlbnROb2RlXG4gICAgfVxuICAgIGNvbmZpZ3VyZUFuY2hvckVsKClcbiAgfVxuXG4gIGZ1bmN0aW9uIHBpY2tBbmNob3JFbCAoKSB7XG4gICAgaWYgKHByb3BzLnRhcmdldCA9PT0gZmFsc2UgfHwgcHJvcHMudGFyZ2V0ID09PSAnJyB8fCBwcm94eS4kZWwucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgYW5jaG9yRWwudmFsdWUgPSBudWxsXG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLnRhcmdldCA9PT0gdHJ1ZSkge1xuICAgICAgc2V0QW5jaG9yRWwocHJveHkuJGVsLnBhcmVudE5vZGUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGVsID0gcHJvcHMudGFyZ2V0XG5cbiAgICAgIGlmICh0eXBlb2YgcHJvcHMudGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9wcy50YXJnZXQpXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgIGVsID0gdm9pZCAwXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGVsICE9PSB2b2lkIDAgJiYgZWwgIT09IG51bGwpIHtcbiAgICAgICAgYW5jaG9yRWwudmFsdWUgPSBlbC4kZWwgfHwgZWxcbiAgICAgICAgY29uZmlndXJlQW5jaG9yRWwoKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGFuY2hvckVsLnZhbHVlID0gbnVsbFxuICAgICAgICBjb25zb2xlLmVycm9yKGBBbmNob3I6IHRhcmdldCBcIiR7IHByb3BzLnRhcmdldCB9XCIgbm90IGZvdW5kYClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB3YXRjaCgoKSA9PiBwcm9wcy5jb250ZXh0TWVudSwgdmFsID0+IHtcbiAgICBpZiAoYW5jaG9yRWwudmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHVuY29uZmlndXJlQW5jaG9yRWwoKVxuICAgICAgY29uZmlndXJlQW5jaG9yRWwodmFsKVxuICAgIH1cbiAgfSlcblxuICB3YXRjaCgoKSA9PiBwcm9wcy50YXJnZXQsICgpID0+IHtcbiAgICBpZiAoYW5jaG9yRWwudmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHVuY29uZmlndXJlQW5jaG9yRWwoKVxuICAgIH1cblxuICAgIHBpY2tBbmNob3JFbCgpXG4gIH0pXG5cbiAgd2F0Y2goKCkgPT4gcHJvcHMubm9QYXJlbnRFdmVudCwgdmFsID0+IHtcbiAgICBpZiAoYW5jaG9yRWwudmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICAgICAgdW5jb25maWd1cmVBbmNob3JFbCgpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uZmlndXJlQW5jaG9yRWwoKVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgIHBpY2tBbmNob3JFbCgpXG5cbiAgICBpZiAoYXZvaWRFbWl0ICE9PSB0cnVlICYmIHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUgJiYgYW5jaG9yRWwudmFsdWUgPT09IG51bGwpIHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgZmFsc2UpXG4gICAgfVxuICB9KVxuXG4gIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgdG91Y2hUaW1lciAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQodG91Y2hUaW1lcilcbiAgICB1bmNvbmZpZ3VyZUFuY2hvckVsKClcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGFuY2hvckVsLFxuICAgIGNhblNob3csXG4gICAgYW5jaG9yRXZlbnRzXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlZiwgd2F0Y2gsIG9uQmVmb3JlVW5tb3VudCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgbGlzdGVuT3B0cyB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoXG4gIHByb3BzLFxuICBjb25maWd1cmVTY3JvbGxUYXJnZXRcbikge1xuICBjb25zdCBsb2NhbFNjcm9sbFRhcmdldCA9IHJlZihudWxsKVxuICBsZXQgc2Nyb2xsRm5cblxuICBmdW5jdGlvbiBjaGFuZ2VTY3JvbGxFdmVudCAoc2Nyb2xsVGFyZ2V0LCBmbikge1xuICAgIGNvbnN0IGZuUHJvcCA9IGAkeyBmbiAhPT0gdm9pZCAwID8gJ2FkZCcgOiAncmVtb3ZlJyB9RXZlbnRMaXN0ZW5lcmBcbiAgICBjb25zdCBmbkhhbmRsZXIgPSBmbiAhPT0gdm9pZCAwID8gZm4gOiBzY3JvbGxGblxuXG4gICAgaWYgKHNjcm9sbFRhcmdldCAhPT0gd2luZG93KSB7XG4gICAgICBzY3JvbGxUYXJnZXRbIGZuUHJvcCBdKCdzY3JvbGwnLCBmbkhhbmRsZXIsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICB9XG5cbiAgICB3aW5kb3dbIGZuUHJvcCBdKCdzY3JvbGwnLCBmbkhhbmRsZXIsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcblxuICAgIHNjcm9sbEZuID0gZm5cbiAgfVxuXG4gIGZ1bmN0aW9uIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQudmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGNoYW5nZVNjcm9sbEV2ZW50KGxvY2FsU2Nyb2xsVGFyZ2V0LnZhbHVlKVxuICAgICAgbG9jYWxTY3JvbGxUYXJnZXQudmFsdWUgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgbm9QYXJlbnRFdmVudFdhdGNoZXIgPSB3YXRjaCgoKSA9PiBwcm9wcy5ub1BhcmVudEV2ZW50LCAoKSA9PiB7XG4gICAgaWYgKGxvY2FsU2Nyb2xsVGFyZ2V0LnZhbHVlICE9PSBudWxsKSB7XG4gICAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH1cbiAgfSlcblxuICBvbkJlZm9yZVVubW91bnQobm9QYXJlbnRFdmVudFdhdGNoZXIpXG5cbiAgcmV0dXJuIHtcbiAgICBsb2NhbFNjcm9sbFRhcmdldCxcbiAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCxcbiAgICBjaGFuZ2VTY3JvbGxFdmVudFxuICB9XG59XG4iLCJpbXBvcnQgeyBsaXN0ZW5PcHRzIH0gZnJvbSAnLi4vZXZlbnQuanMnXG5pbXBvcnQgeyBwb3J0YWxQcm94eUxpc3QgfSBmcm9tICcuLi9wcml2YXRlL3BvcnRhbC5qcydcblxubGV0IHRpbWVyID0gbnVsbFxuXG5jb25zdFxuICB7IG5vdFBhc3NpdmVDYXB0dXJlIH0gPSBsaXN0ZW5PcHRzLFxuICByZWdpc3RlcmVkTGlzdCA9IFtdXG5cbmZ1bmN0aW9uIGdsb2JhbEhhbmRsZXIgKGV2dCkge1xuICBpZiAodGltZXIgIT09IG51bGwpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgdGltZXIgPSBudWxsXG4gIH1cblxuICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0XG5cbiAgaWYgKFxuICAgIHRhcmdldCA9PT0gdm9pZCAwXG4gICAgfHwgdGFyZ2V0Lm5vZGVUeXBlID09PSA4XG4gICAgfHwgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbm8tcG9pbnRlci1ldmVudHMnKSA9PT0gdHJ1ZVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGNoZWNrIGxhc3QgcG9ydGFsIHZtIGlmIGl0J3NcbiAgLy8gYSBRRGlhbG9nIGFuZCBub3QgaW4gc2VhbWxlc3MgbW9kZVxuICBsZXQgcG9ydGFsSW5kZXggPSBwb3J0YWxQcm94eUxpc3QubGVuZ3RoIC0gMVxuXG4gIHdoaWxlIChwb3J0YWxJbmRleCA+PSAwKSB7XG4gICAgY29uc3QgcHJveHkgPSBwb3J0YWxQcm94eUxpc3RbIHBvcnRhbEluZGV4IF0uJFxuXG4gICAgLy8gc2tpcCBRVG9vbHRpcCBwb3J0YWxzXG4gICAgaWYgKHByb3h5LnR5cGUubmFtZSA9PT0gJ1FUb29sdGlwJykge1xuICAgICAgcG9ydGFsSW5kZXgtLVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAocHJveHkudHlwZS5uYW1lICE9PSAnUURpYWxvZycpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKHByb3h5LnByb3BzLnNlYW1sZXNzICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBwb3J0YWxJbmRleC0tXG4gIH1cblxuICBmb3IgKGxldCBpID0gcmVnaXN0ZXJlZExpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBjb25zdCBzdGF0ZSA9IHJlZ2lzdGVyZWRMaXN0WyBpIF1cblxuICAgIGlmIChcbiAgICAgIChcbiAgICAgICAgc3RhdGUuYW5jaG9yRWwudmFsdWUgPT09IG51bGxcbiAgICAgICAgfHwgc3RhdGUuYW5jaG9yRWwudmFsdWUuY29udGFpbnModGFyZ2V0KSA9PT0gZmFsc2VcbiAgICAgIClcbiAgICAgICYmIChcbiAgICAgICAgdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5XG4gICAgICAgIHx8IChcbiAgICAgICAgICBzdGF0ZS5pbm5lclJlZi52YWx1ZSAhPT0gbnVsbFxuICAgICAgICAgICYmIHN0YXRlLmlubmVyUmVmLnZhbHVlLmNvbnRhaW5zKHRhcmdldCkgPT09IGZhbHNlXG4gICAgICAgIClcbiAgICAgIClcbiAgICApIHtcbiAgICAgIC8vIG1hcmsgdGhlIGV2ZW50IGFzIGJlaW5nIHByb2Nlc3NlZCBieSBjbGlja091dHNpZGVcbiAgICAgIC8vIHVzZWQgdG8gcHJldmVudCByZWZvY3VzIGFmdGVyIG1lbnUgY2xvc2VcbiAgICAgIGV2dC5xQ2xpY2tPdXRzaWRlID0gdHJ1ZVxuICAgICAgc3RhdGUub25DbGlja091dHNpZGUoZXZ0KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xpY2tPdXRzaWRlIChjbGlja091dHNpZGVQcm9wcykge1xuICByZWdpc3RlcmVkTGlzdC5wdXNoKGNsaWNrT3V0c2lkZVByb3BzKVxuXG4gIGlmIChyZWdpc3RlcmVkTGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBnbG9iYWxIYW5kbGVyLCBub3RQYXNzaXZlQ2FwdHVyZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZ2xvYmFsSGFuZGxlciwgbm90UGFzc2l2ZUNhcHR1cmUpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsaWNrT3V0c2lkZSAoY2xpY2tPdXRzaWRlUHJvcHMpIHtcbiAgY29uc3QgaW5kZXggPSByZWdpc3RlcmVkTGlzdC5maW5kSW5kZXgoaCA9PiBoID09PSBjbGlja091dHNpZGVQcm9wcylcblxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgcmVnaXN0ZXJlZExpc3Quc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgaWYgKHJlZ2lzdGVyZWRMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGdsb2JhbEhhbmRsZXIsIG5vdFBhc3NpdmVDYXB0dXJlKVxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGdsb2JhbEhhbmRsZXIsIG5vdFBhc3NpdmVDYXB0dXJlKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyV2lkdGggfSBmcm9tICcuLi9zY3JvbGwuanMnXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi8uLi9wbHVnaW5zL3BsYXRmb3JtL1BsYXRmb3JtLmpzJ1xuXG5sZXQgdnBMZWZ0LCB2cFRvcFxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQb3NpdGlvbiAocG9zKSB7XG4gIGNvbnN0IHBhcnRzID0gcG9zLnNwbGl0KCcgJylcbiAgaWYgKHBhcnRzLmxlbmd0aCAhPT0gMikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmIChbICd0b3AnLCAnY2VudGVyJywgJ2JvdHRvbScgXS5pbmNsdWRlcyhwYXJ0c1sgMCBdKSAhPT0gdHJ1ZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0FuY2hvci9TZWxmIHBvc2l0aW9uIG11c3Qgc3RhcnQgd2l0aCBvbmUgb2YgdG9wL2NlbnRlci9ib3R0b20nKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmIChbICdsZWZ0JywgJ21pZGRsZScsICdyaWdodCcsICdzdGFydCcsICdlbmQnIF0uaW5jbHVkZXMocGFydHNbIDEgXSkgIT09IHRydWUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBbmNob3IvU2VsZiBwb3NpdGlvbiBtdXN0IGVuZCB3aXRoIG9uZSBvZiBsZWZ0L21pZGRsZS9yaWdodC9zdGFydC9lbmQnKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZU9mZnNldCAodmFsKSB7XG4gIGlmICghdmFsKSB7IHJldHVybiB0cnVlIH1cbiAgaWYgKHZhbC5sZW5ndGggIT09IDIpIHsgcmV0dXJuIGZhbHNlIH1cbiAgaWYgKHR5cGVvZiB2YWxbIDAgXSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbFsgMSBdICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmNvbnN0IGhvcml6b250YWxQb3MgPSB7XG4gICdzdGFydCNsdHInOiAnbGVmdCcsXG4gICdzdGFydCNydGwnOiAncmlnaHQnLFxuICAnZW5kI2x0cic6ICdyaWdodCcsXG4gICdlbmQjcnRsJzogJ2xlZnQnXG59XG5cbjtbICdsZWZ0JywgJ21pZGRsZScsICdyaWdodCcgXS5mb3JFYWNoKHBvcyA9PiB7XG4gIGhvcml6b250YWxQb3NbIGAkeyBwb3MgfSNsdHJgIF0gPSBwb3NcbiAgaG9yaXpvbnRhbFBvc1sgYCR7IHBvcyB9I3J0bGAgXSA9IHBvc1xufSlcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUG9zaXRpb24gKHBvcywgcnRsKSB7XG4gIGNvbnN0IHBhcnRzID0gcG9zLnNwbGl0KCcgJylcbiAgcmV0dXJuIHtcbiAgICB2ZXJ0aWNhbDogcGFydHNbIDAgXSxcbiAgICBob3Jpem9udGFsOiBob3Jpem9udGFsUG9zWyBgJHsgcGFydHNbIDEgXSB9IyR7IHJ0bCA9PT0gdHJ1ZSA/ICdydGwnIDogJ2x0cicgfWAgXVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmNob3JQcm9wcyAoZWwsIG9mZnNldCkge1xuICBsZXQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgaWYgKG9mZnNldCAhPT0gdm9pZCAwKSB7XG4gICAgdG9wIC09IG9mZnNldFsgMSBdXG4gICAgbGVmdCAtPSBvZmZzZXRbIDAgXVxuICAgIGJvdHRvbSArPSBvZmZzZXRbIDEgXVxuICAgIHJpZ2h0ICs9IG9mZnNldFsgMCBdXG5cbiAgICB3aWR0aCArPSBvZmZzZXRbIDAgXVxuICAgIGhlaWdodCArPSBvZmZzZXRbIDEgXVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3AsIGJvdHRvbSwgaGVpZ2h0LFxuICAgIGxlZnQsIHJpZ2h0LCB3aWR0aCxcbiAgICBtaWRkbGU6IGxlZnQgKyAocmlnaHQgLSBsZWZ0KSAvIDIsXG4gICAgY2VudGVyOiB0b3AgKyAoYm90dG9tIC0gdG9wKSAvIDJcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBYnNvbHV0ZUFuY2hvclByb3BzIChlbCwgYWJzb2x1dGVPZmZzZXQsIG9mZnNldCkge1xuICBsZXQgeyB0b3AsIGxlZnQgfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgdG9wICs9IGFic29sdXRlT2Zmc2V0LnRvcFxuICBsZWZ0ICs9IGFic29sdXRlT2Zmc2V0LmxlZnRcblxuICBpZiAob2Zmc2V0ICE9PSB2b2lkIDApIHtcbiAgICB0b3AgKz0gb2Zmc2V0WyAxIF1cbiAgICBsZWZ0ICs9IG9mZnNldFsgMCBdXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcCwgYm90dG9tOiB0b3AgKyAxLCBoZWlnaHQ6IDEsXG4gICAgbGVmdCwgcmlnaHQ6IGxlZnQgKyAxLCB3aWR0aDogMSxcbiAgICBtaWRkbGU6IGxlZnQsXG4gICAgY2VudGVyOiB0b3BcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUYXJnZXRQcm9wcyAod2lkdGgsIGhlaWdodCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICBjZW50ZXI6IGhlaWdodCAvIDIsXG4gICAgYm90dG9tOiBoZWlnaHQsXG4gICAgbGVmdDogMCxcbiAgICBtaWRkbGU6IHdpZHRoIC8gMixcbiAgICByaWdodDogd2lkdGhcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUb3BMZWZ0UHJvcHMgKGFuY2hvclByb3BzLCB0YXJnZXRQcm9wcywgYW5jaG9yT3JpZ2luLCBzZWxmT3JpZ2luKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiBhbmNob3JQcm9wc1sgYW5jaG9yT3JpZ2luLnZlcnRpY2FsIF0gLSB0YXJnZXRQcm9wc1sgc2VsZk9yaWdpbi52ZXJ0aWNhbCBdLFxuICAgIGxlZnQ6IGFuY2hvclByb3BzWyBhbmNob3JPcmlnaW4uaG9yaXpvbnRhbCBdIC0gdGFyZ2V0UHJvcHNbIHNlbGZPcmlnaW4uaG9yaXpvbnRhbCBdXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFBvc2l0aW9uIChjZmcsIHJldHJ5TnVtYmVyID0gMCkge1xuICBpZiAoXG4gICAgY2ZnLnRhcmdldEVsID09PSBudWxsXG4gICAgfHwgY2ZnLmFuY2hvckVsID09PSBudWxsXG4gICAgfHwgcmV0cnlOdW1iZXIgPiA1IC8vIHdlIHNob3VsZCB0cnkgb25seSBhIGZldyB0aW1lc1xuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIHNvbWUgYnJvd3NlcnMgcmVwb3J0IHplcm8gaGVpZ2h0IG9yIHdpZHRoIGJlY2F1c2VcbiAgLy8gd2UgYXJlIHRyeWluZyB0b28gZWFybHkgdG8gZ2V0IHRoZXNlIGRpbWVuc2lvbnNcbiAgaWYgKGNmZy50YXJnZXRFbC5vZmZzZXRIZWlnaHQgPT09IDAgfHwgY2ZnLnRhcmdldEVsLm9mZnNldFdpZHRoID09PSAwKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRQb3NpdGlvbihjZmcsIHJldHJ5TnVtYmVyICsgMSlcbiAgICB9LCAxMClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHtcbiAgICB0YXJnZXRFbCxcbiAgICBvZmZzZXQsXG4gICAgYW5jaG9yRWwsXG4gICAgYW5jaG9yT3JpZ2luLFxuICAgIHNlbGZPcmlnaW4sXG4gICAgYWJzb2x1dGVPZmZzZXQsXG4gICAgZml0LFxuICAgIGNvdmVyLFxuICAgIG1heEhlaWdodCxcbiAgICBtYXhXaWR0aFxuICB9ID0gY2ZnXG5cbiAgaWYgKGNsaWVudC5pcy5pb3MgPT09IHRydWUgJiYgd2luZG93LnZpc3VhbFZpZXdwb3J0ICE9PSB2b2lkIDApIHtcbiAgICAvLyB1c2VzIHRoZSBxLXBvc2l0aW9uLWVuZ2luZSBDU1MgY2xhc3NcblxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuYm9keS5zdHlsZVxuICAgIGNvbnN0IHsgb2Zmc2V0TGVmdDogbGVmdCwgb2Zmc2V0VG9wOiB0b3AgfSA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydFxuXG4gICAgaWYgKGxlZnQgIT09IHZwTGVmdCkge1xuICAgICAgZWwuc2V0UHJvcGVydHkoJy0tcS1wZS1sZWZ0JywgbGVmdCArICdweCcpXG4gICAgICB2cExlZnQgPSBsZWZ0XG4gICAgfVxuICAgIGlmICh0b3AgIT09IHZwVG9wKSB7XG4gICAgICBlbC5zZXRQcm9wZXJ0eSgnLS1xLXBlLXRvcCcsIHRvcCArICdweCcpXG4gICAgICB2cFRvcCA9IHRvcFxuICAgIH1cbiAgfVxuXG4gIC8vIHNjcm9sbCBwb3NpdGlvbiBtaWdodCBjaGFuZ2VcbiAgLy8gaWYgbWF4LWhlaWdodC8td2lkdGggY2hhbmdlcywgc28gd2VcbiAgLy8gbmVlZCB0byByZXN0b3JlIGl0IGFmdGVyIHdlIGNhbGN1bGF0ZVxuICAvLyB0aGUgbmV3IHBvc2l0aW9uaW5nXG4gIGNvbnN0IHsgc2Nyb2xsTGVmdCwgc2Nyb2xsVG9wIH0gPSB0YXJnZXRFbFxuXG4gIGNvbnN0IGFuY2hvclByb3BzID0gYWJzb2x1dGVPZmZzZXQgPT09IHZvaWQgMFxuICAgID8gZ2V0QW5jaG9yUHJvcHMoYW5jaG9yRWwsIGNvdmVyID09PSB0cnVlID8gWyAwLCAwIF0gOiBvZmZzZXQpXG4gICAgOiBnZXRBYnNvbHV0ZUFuY2hvclByb3BzKGFuY2hvckVsLCBhYnNvbHV0ZU9mZnNldCwgb2Zmc2V0KVxuXG4gIC8vIHdlIFwicmVzZXRcIiB0aGUgY3JpdGljYWwgQ1NTIHByb3BlcnRpZXNcbiAgLy8gc28gd2UgY2FuIHRha2UgYW4gYWNjdXJhdGUgbWVhc3VyZW1lbnRcbiAgT2JqZWN0LmFzc2lnbih0YXJnZXRFbC5zdHlsZSwge1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIG1pbldpZHRoOiBudWxsLFxuICAgIG1pbkhlaWdodDogbnVsbCxcbiAgICBtYXhXaWR0aDogbWF4V2lkdGggfHwgJzEwMHZ3JyxcbiAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCB8fCAnMTAwdmgnLFxuICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuICB9KVxuXG4gIGNvbnN0IHsgb2Zmc2V0V2lkdGg6IG9yaWdFbFdpZHRoLCBvZmZzZXRIZWlnaHQ6IG9yaWdFbEhlaWdodCB9ID0gdGFyZ2V0RWxcbiAgY29uc3QgeyBlbFdpZHRoLCBlbEhlaWdodCB9ID0gZml0ID09PSB0cnVlIHx8IGNvdmVyID09PSB0cnVlXG4gICAgPyB7IGVsV2lkdGg6IE1hdGgubWF4KGFuY2hvclByb3BzLndpZHRoLCBvcmlnRWxXaWR0aCksIGVsSGVpZ2h0OiBjb3ZlciA9PT0gdHJ1ZSA/IE1hdGgubWF4KGFuY2hvclByb3BzLmhlaWdodCwgb3JpZ0VsSGVpZ2h0KSA6IG9yaWdFbEhlaWdodCB9XG4gICAgOiB7IGVsV2lkdGg6IG9yaWdFbFdpZHRoLCBlbEhlaWdodDogb3JpZ0VsSGVpZ2h0IH1cblxuICBsZXQgZWxTdHlsZSA9IHsgbWF4V2lkdGgsIG1heEhlaWdodCB9XG5cbiAgaWYgKGZpdCA9PT0gdHJ1ZSB8fCBjb3ZlciA9PT0gdHJ1ZSkge1xuICAgIGVsU3R5bGUubWluV2lkdGggPSBhbmNob3JQcm9wcy53aWR0aCArICdweCdcbiAgICBpZiAoY292ZXIgPT09IHRydWUpIHtcbiAgICAgIGVsU3R5bGUubWluSGVpZ2h0ID0gYW5jaG9yUHJvcHMuaGVpZ2h0ICsgJ3B4J1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24odGFyZ2V0RWwuc3R5bGUsIGVsU3R5bGUpXG5cbiAgY29uc3QgdGFyZ2V0UHJvcHMgPSBnZXRUYXJnZXRQcm9wcyhlbFdpZHRoLCBlbEhlaWdodClcbiAgbGV0IHByb3BzID0gZ2V0VG9wTGVmdFByb3BzKGFuY2hvclByb3BzLCB0YXJnZXRQcm9wcywgYW5jaG9yT3JpZ2luLCBzZWxmT3JpZ2luKVxuXG4gIGlmIChhYnNvbHV0ZU9mZnNldCA9PT0gdm9pZCAwIHx8IG9mZnNldCA9PT0gdm9pZCAwKSB7XG4gICAgYXBwbHlCb3VuZGFyaWVzKHByb3BzLCBhbmNob3JQcm9wcywgdGFyZ2V0UHJvcHMsIGFuY2hvck9yaWdpbiwgc2VsZk9yaWdpbilcbiAgfVxuICBlbHNlIHsgLy8gd2UgaGF2ZSB0b3VjaCBwb3NpdGlvbiBvciBjb250ZXh0IG1lbnUgd2l0aCBvZmZzZXRcbiAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gcHJvcHMgLy8gY2FjaGUgaW5pdGlhbCB2YWx1ZXNcblxuICAgIC8vIGFwcGx5IGluaXRpYWwgYm91bmRhcmllc1xuICAgIGFwcGx5Qm91bmRhcmllcyhwcm9wcywgYW5jaG9yUHJvcHMsIHRhcmdldFByb3BzLCBhbmNob3JPcmlnaW4sIHNlbGZPcmlnaW4pXG5cbiAgICBsZXQgaGFzQ2hhbmdlZCA9IGZhbHNlXG5cbiAgICAvLyBkaWQgaXQgZmxpcCB2ZXJ0aWNhbGx5P1xuICAgIGlmIChwcm9wcy50b3AgIT09IHRvcCkge1xuICAgICAgaGFzQ2hhbmdlZCA9IHRydWVcbiAgICAgIGNvbnN0IG9mZnNldFkgPSAyICogb2Zmc2V0WyAxIF1cbiAgICAgIGFuY2hvclByb3BzLmNlbnRlciA9IGFuY2hvclByb3BzLnRvcCAtPSBvZmZzZXRZXG4gICAgICBhbmNob3JQcm9wcy5ib3R0b20gLT0gb2Zmc2V0WSArIDJcbiAgICB9XG5cbiAgICAvLyBkaWQgaXQgZmxpcCBob3Jpem9udGFsbHk/XG4gICAgaWYgKHByb3BzLmxlZnQgIT09IGxlZnQpIHtcbiAgICAgIGhhc0NoYW5nZWQgPSB0cnVlXG4gICAgICBjb25zdCBvZmZzZXRYID0gMiAqIG9mZnNldFsgMCBdXG4gICAgICBhbmNob3JQcm9wcy5taWRkbGUgPSBhbmNob3JQcm9wcy5sZWZ0IC09IG9mZnNldFhcbiAgICAgIGFuY2hvclByb3BzLnJpZ2h0IC09IG9mZnNldFggKyAyXG4gICAgfVxuXG4gICAgaWYgKGhhc0NoYW5nZWQgPT09IHRydWUpIHtcbiAgICAgIC8vIHJlLWNhbGN1bGF0ZSBwcm9wcyB3aXRoIHRoZSBuZXcgYW5jaG9yXG4gICAgICBwcm9wcyA9IGdldFRvcExlZnRQcm9wcyhhbmNob3JQcm9wcywgdGFyZ2V0UHJvcHMsIGFuY2hvck9yaWdpbiwgc2VsZk9yaWdpbilcblxuICAgICAgLy8gYW5kIHJlLWFwcGx5IGJvdW5kYXJpZXNcbiAgICAgIGFwcGx5Qm91bmRhcmllcyhwcm9wcywgYW5jaG9yUHJvcHMsIHRhcmdldFByb3BzLCBhbmNob3JPcmlnaW4sIHNlbGZPcmlnaW4pXG4gICAgfVxuICB9XG5cbiAgZWxTdHlsZSA9IHtcbiAgICB0b3A6IHByb3BzLnRvcCArICdweCcsXG4gICAgbGVmdDogcHJvcHMubGVmdCArICdweCdcbiAgfVxuXG4gIGlmIChwcm9wcy5tYXhIZWlnaHQgIT09IHZvaWQgMCkge1xuICAgIGVsU3R5bGUubWF4SGVpZ2h0ID0gcHJvcHMubWF4SGVpZ2h0ICsgJ3B4J1xuXG4gICAgaWYgKGFuY2hvclByb3BzLmhlaWdodCA+IHByb3BzLm1heEhlaWdodCkge1xuICAgICAgZWxTdHlsZS5taW5IZWlnaHQgPSBlbFN0eWxlLm1heEhlaWdodFxuICAgIH1cbiAgfVxuICBpZiAocHJvcHMubWF4V2lkdGggIT09IHZvaWQgMCkge1xuICAgIGVsU3R5bGUubWF4V2lkdGggPSBwcm9wcy5tYXhXaWR0aCArICdweCdcblxuICAgIGlmIChhbmNob3JQcm9wcy53aWR0aCA+IHByb3BzLm1heFdpZHRoKSB7XG4gICAgICBlbFN0eWxlLm1pbldpZHRoID0gZWxTdHlsZS5tYXhXaWR0aFxuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24odGFyZ2V0RWwuc3R5bGUsIGVsU3R5bGUpXG5cbiAgLy8gcmVzdG9yZSBzY3JvbGwgcG9zaXRpb25cbiAgaWYgKHRhcmdldEVsLnNjcm9sbFRvcCAhPT0gc2Nyb2xsVG9wKSB7XG4gICAgdGFyZ2V0RWwuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wXG4gIH1cbiAgaWYgKHRhcmdldEVsLnNjcm9sbExlZnQgIT09IHNjcm9sbExlZnQpIHtcbiAgICB0YXJnZXRFbC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdFxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5Qm91bmRhcmllcyAocHJvcHMsIGFuY2hvclByb3BzLCB0YXJnZXRQcm9wcywgYW5jaG9yT3JpZ2luLCBzZWxmT3JpZ2luKSB7XG4gIGNvbnN0XG4gICAgY3VycmVudEhlaWdodCA9IHRhcmdldFByb3BzLmJvdHRvbSxcbiAgICBjdXJyZW50V2lkdGggPSB0YXJnZXRQcm9wcy5yaWdodCxcbiAgICBtYXJnaW4gPSBnZXRTY3JvbGxiYXJXaWR0aCgpLFxuICAgIGlubmVySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gbWFyZ2luLFxuICAgIGlubmVyV2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoXG5cbiAgaWYgKHByb3BzLnRvcCA8IDAgfHwgcHJvcHMudG9wICsgY3VycmVudEhlaWdodCA+IGlubmVySGVpZ2h0KSB7XG4gICAgaWYgKHNlbGZPcmlnaW4udmVydGljYWwgPT09ICdjZW50ZXInKSB7XG4gICAgICBwcm9wcy50b3AgPSBhbmNob3JQcm9wc1sgYW5jaG9yT3JpZ2luLnZlcnRpY2FsIF0gPiBpbm5lckhlaWdodCAvIDJcbiAgICAgICAgPyBNYXRoLm1heCgwLCBpbm5lckhlaWdodCAtIGN1cnJlbnRIZWlnaHQpXG4gICAgICAgIDogMFxuICAgICAgcHJvcHMubWF4SGVpZ2h0ID0gTWF0aC5taW4oY3VycmVudEhlaWdodCwgaW5uZXJIZWlnaHQpXG4gICAgfVxuICAgIGVsc2UgaWYgKGFuY2hvclByb3BzWyBhbmNob3JPcmlnaW4udmVydGljYWwgXSA+IGlubmVySGVpZ2h0IC8gMikge1xuICAgICAgY29uc3QgYW5jaG9yWSA9IE1hdGgubWluKFxuICAgICAgICBpbm5lckhlaWdodCxcbiAgICAgICAgYW5jaG9yT3JpZ2luLnZlcnRpY2FsID09PSAnY2VudGVyJ1xuICAgICAgICAgID8gYW5jaG9yUHJvcHMuY2VudGVyXG4gICAgICAgICAgOiAoYW5jaG9yT3JpZ2luLnZlcnRpY2FsID09PSBzZWxmT3JpZ2luLnZlcnRpY2FsID8gYW5jaG9yUHJvcHMuYm90dG9tIDogYW5jaG9yUHJvcHMudG9wKVxuICAgICAgKVxuICAgICAgcHJvcHMubWF4SGVpZ2h0ID0gTWF0aC5taW4oY3VycmVudEhlaWdodCwgYW5jaG9yWSlcbiAgICAgIHByb3BzLnRvcCA9IE1hdGgubWF4KDAsIGFuY2hvclkgLSBjdXJyZW50SGVpZ2h0KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHByb3BzLnRvcCA9IE1hdGgubWF4KDAsIGFuY2hvck9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2NlbnRlcidcbiAgICAgICAgPyBhbmNob3JQcm9wcy5jZW50ZXJcbiAgICAgICAgOiAoYW5jaG9yT3JpZ2luLnZlcnRpY2FsID09PSBzZWxmT3JpZ2luLnZlcnRpY2FsID8gYW5jaG9yUHJvcHMudG9wIDogYW5jaG9yUHJvcHMuYm90dG9tKVxuICAgICAgKVxuICAgICAgcHJvcHMubWF4SGVpZ2h0ID0gTWF0aC5taW4oY3VycmVudEhlaWdodCwgaW5uZXJIZWlnaHQgLSBwcm9wcy50b3ApXG4gICAgfVxuICB9XG5cbiAgaWYgKHByb3BzLmxlZnQgPCAwIHx8IHByb3BzLmxlZnQgKyBjdXJyZW50V2lkdGggPiBpbm5lcldpZHRoKSB7XG4gICAgcHJvcHMubWF4V2lkdGggPSBNYXRoLm1pbihjdXJyZW50V2lkdGgsIGlubmVyV2lkdGgpXG4gICAgaWYgKHNlbGZPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ21pZGRsZScpIHtcbiAgICAgIHByb3BzLmxlZnQgPSBhbmNob3JQcm9wc1sgYW5jaG9yT3JpZ2luLmhvcml6b250YWwgXSA+IGlubmVyV2lkdGggLyAyXG4gICAgICAgID8gTWF0aC5tYXgoMCwgaW5uZXJXaWR0aCAtIGN1cnJlbnRXaWR0aClcbiAgICAgICAgOiAwXG4gICAgfVxuICAgIGVsc2UgaWYgKGFuY2hvclByb3BzWyBhbmNob3JPcmlnaW4uaG9yaXpvbnRhbCBdID4gaW5uZXJXaWR0aCAvIDIpIHtcbiAgICAgIGNvbnN0IGFuY2hvclggPSBNYXRoLm1pbihcbiAgICAgICAgaW5uZXJXaWR0aCxcbiAgICAgICAgYW5jaG9yT3JpZ2luLmhvcml6b250YWwgPT09ICdtaWRkbGUnXG4gICAgICAgICAgPyBhbmNob3JQcm9wcy5taWRkbGVcbiAgICAgICAgICA6IChhbmNob3JPcmlnaW4uaG9yaXpvbnRhbCA9PT0gc2VsZk9yaWdpbi5ob3Jpem9udGFsID8gYW5jaG9yUHJvcHMucmlnaHQgOiBhbmNob3JQcm9wcy5sZWZ0KVxuICAgICAgKVxuICAgICAgcHJvcHMubWF4V2lkdGggPSBNYXRoLm1pbihjdXJyZW50V2lkdGgsIGFuY2hvclgpXG4gICAgICBwcm9wcy5sZWZ0ID0gTWF0aC5tYXgoMCwgYW5jaG9yWCAtIHByb3BzLm1heFdpZHRoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHByb3BzLmxlZnQgPSBNYXRoLm1heCgwLCBhbmNob3JPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ21pZGRsZSdcbiAgICAgICAgPyBhbmNob3JQcm9wcy5taWRkbGVcbiAgICAgICAgOiAoYW5jaG9yT3JpZ2luLmhvcml6b250YWwgPT09IHNlbGZPcmlnaW4uaG9yaXpvbnRhbCA/IGFuY2hvclByb3BzLmxlZnQgOiBhbmNob3JQcm9wcy5yaWdodClcbiAgICAgIClcbiAgICAgIHByb3BzLm1heFdpZHRoID0gTWF0aC5taW4oY3VycmVudFdpZHRoLCBpbm5lcldpZHRoIC0gcHJvcHMubGVmdClcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBUcmFuc2l0aW9uLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZUFuY2hvciwgeyB1c2VBbmNob3JQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWFuY2hvci5qcydcbmltcG9ydCB1c2VTY3JvbGxUYXJnZXQgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utc2Nyb2xsLXRhcmdldC5qcydcbmltcG9ydCB1c2VNb2RlbFRvZ2dsZSwgeyB1c2VNb2RlbFRvZ2dsZVByb3BzLCB1c2VNb2RlbFRvZ2dsZUVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtbW9kZWwtdG9nZ2xlLmpzJ1xuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB1c2VQb3J0YWwgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtcG9ydGFsLmpzJ1xuaW1wb3J0IHVzZVRyYW5zaXRpb24sIHsgdXNlVHJhbnNpdGlvblByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtdHJhbnNpdGlvbi5qcydcbmltcG9ydCB1c2VUaWNrIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS10aWNrLmpzJ1xuaW1wb3J0IHVzZVRpbWVvdXQgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLXRpbWVvdXQuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgY2xvc2VQb3J0YWxNZW51cyB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcG9ydGFsLmpzJ1xuaW1wb3J0IHsgZ2V0U2Nyb2xsVGFyZ2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgcG9zaXRpb24sIHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgYWRkRXNjYXBlS2V5LCByZW1vdmVFc2NhcGVLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2VzY2FwZS1rZXkuanMnXG5pbXBvcnQgeyBhZGRGb2N1c291dCwgcmVtb3ZlRm9jdXNvdXQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2ZvY3Vzb3V0LmpzJ1xuaW1wb3J0IHsgY2hpbGRIYXNGb2N1cyB9IGZyb20gJy4uLy4uL3V0aWxzL2RvbS5qcydcbmltcG9ydCB7IGFkZENsaWNrT3V0c2lkZSwgcmVtb3ZlQ2xpY2tPdXRzaWRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jbGljay1vdXRzaWRlLmpzJ1xuaW1wb3J0IHsgYWRkRm9jdXNGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvZm9jdXMtbWFuYWdlci5qcydcblxuaW1wb3J0IHtcbiAgdmFsaWRhdGVQb3NpdGlvbiwgdmFsaWRhdGVPZmZzZXQsIHNldFBvc2l0aW9uLCBwYXJzZVBvc2l0aW9uXG59IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcG9zaXRpb24tZW5naW5lLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUU1lbnUnLFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VBbmNob3JQcm9wcyxcbiAgICAuLi51c2VNb2RlbFRvZ2dsZVByb3BzLFxuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VUcmFuc2l0aW9uUHJvcHMsXG5cbiAgICBwZXJzaXN0ZW50OiBCb29sZWFuLFxuICAgIGF1dG9DbG9zZTogQm9vbGVhbixcbiAgICBzZXBhcmF0ZUNsb3NlUG9wdXA6IEJvb2xlYW4sXG5cbiAgICBub1JvdXRlRGlzbWlzczogQm9vbGVhbixcbiAgICBub1JlZm9jdXM6IEJvb2xlYW4sXG4gICAgbm9Gb2N1czogQm9vbGVhbixcblxuICAgIGZpdDogQm9vbGVhbixcbiAgICBjb3ZlcjogQm9vbGVhbixcblxuICAgIHNxdWFyZTogQm9vbGVhbixcblxuICAgIGFuY2hvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2YWxpZGF0ZVBvc2l0aW9uXG4gICAgfSxcbiAgICBzZWxmOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHZhbGlkYXRlUG9zaXRpb25cbiAgICB9LFxuICAgIG9mZnNldDoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICB2YWxpZGF0b3I6IHZhbGlkYXRlT2Zmc2V0XG4gICAgfSxcblxuICAgIHNjcm9sbFRhcmdldDoge1xuICAgICAgZGVmYXVsdDogdm9pZCAwXG4gICAgfSxcblxuICAgIHRvdWNoUG9zaXRpb246IEJvb2xlYW4sXG5cbiAgICBtYXhIZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIG1heFdpZHRoOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgLi4udXNlTW9kZWxUb2dnbGVFbWl0cyxcbiAgICAnY2xpY2snLCAnZXNjYXBlS2V5J1xuICBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCwgYXR0cnMgfSkge1xuICAgIGxldCByZWZvY3VzVGFyZ2V0ID0gbnVsbCwgYWJzb2x1dGVPZmZzZXQsIHVud2F0Y2hQb3NpdGlvbiwgYXZvaWRBdXRvQ2xvc2VcblxuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7IHByb3h5IH0gPSB2bVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCBpbm5lclJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IHNob3dpbmcgPSByZWYoZmFsc2UpXG5cbiAgICBjb25zdCBoaWRlT25Sb3V0ZUNoYW5nZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5wZXJzaXN0ZW50ICE9PSB0cnVlXG4gICAgICAmJiBwcm9wcy5ub1JvdXRlRGlzbWlzcyAhPT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaWNrLCByZW1vdmVUaWNrIH0gPSB1c2VUaWNrKClcbiAgICBjb25zdCB7IHJlZ2lzdGVyVGltZW91dCB9ID0gdXNlVGltZW91dCgpXG4gICAgY29uc3QgeyB0cmFuc2l0aW9uUHJvcHMsIHRyYW5zaXRpb25TdHlsZSB9ID0gdXNlVHJhbnNpdGlvbihwcm9wcylcbiAgICBjb25zdCB7IGxvY2FsU2Nyb2xsVGFyZ2V0LCBjaGFuZ2VTY3JvbGxFdmVudCwgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQgfSA9IHVzZVNjcm9sbFRhcmdldChwcm9wcywgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KVxuXG4gICAgY29uc3QgeyBhbmNob3JFbCwgY2FuU2hvdyB9ID0gdXNlQW5jaG9yKHsgc2hvd2luZyB9KVxuXG4gICAgY29uc3QgeyBoaWRlIH0gPSB1c2VNb2RlbFRvZ2dsZSh7XG4gICAgICBzaG93aW5nLCBjYW5TaG93LCBoYW5kbGVTaG93LCBoYW5kbGVIaWRlLFxuICAgICAgaGlkZU9uUm91dGVDaGFuZ2UsXG4gICAgICBwcm9jZXNzT25Nb3VudDogdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCB7IHNob3dQb3J0YWwsIGhpZGVQb3J0YWwsIHJlbmRlclBvcnRhbCB9ID0gdXNlUG9ydGFsKHZtLCBpbm5lclJlZiwgcmVuZGVyUG9ydGFsQ29udGVudCwgJ21lbnUnKVxuXG4gICAgY29uc3QgY2xpY2tPdXRzaWRlUHJvcHMgPSB7XG4gICAgICBhbmNob3JFbCxcbiAgICAgIGlubmVyUmVmLFxuICAgICAgb25DbGlja091dHNpZGUgKGUpIHtcbiAgICAgICAgaWYgKHByb3BzLnBlcnNpc3RlbnQgIT09IHRydWUgJiYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGhpZGUoZSlcblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIC8vIGFsd2F5cyBwcmV2ZW50IHRvdWNoIGV2ZW50XG4gICAgICAgICAgICBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0J1xuICAgICAgICAgICAgLy8gcHJldmVudCBjbGljayBpZiBpdCdzIG9uIGEgZGlhbG9nIGJhY2tkcm9wXG4gICAgICAgICAgICB8fCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3EtZGlhbG9nX19iYWNrZHJvcCcpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhbmNob3JPcmlnaW4gPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcGFyc2VQb3NpdGlvbihcbiAgICAgICAgcHJvcHMuYW5jaG9yIHx8IChcbiAgICAgICAgICBwcm9wcy5jb3ZlciA9PT0gdHJ1ZSA/ICdjZW50ZXIgbWlkZGxlJyA6ICdib3R0b20gc3RhcnQnXG4gICAgICAgICksXG4gICAgICAgICRxLmxhbmcucnRsXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3Qgc2VsZk9yaWdpbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmNvdmVyID09PSB0cnVlXG4gICAgICAgID8gYW5jaG9yT3JpZ2luLnZhbHVlXG4gICAgICAgIDogcGFyc2VQb3NpdGlvbihwcm9wcy5zZWxmIHx8ICd0b3Agc3RhcnQnLCAkcS5sYW5nLnJ0bClcbiAgICApKVxuXG4gICAgY29uc3QgbWVudUNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIChwcm9wcy5zcXVhcmUgPT09IHRydWUgPyAnIHEtbWVudS0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLW1lbnUtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IG9uRXZlbnRzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuYXV0b0Nsb3NlID09PSB0cnVlXG4gICAgICAgID8geyBvbkNsaWNrOiBvbkF1dG9DbG9zZSB9XG4gICAgICAgIDoge31cbiAgICApKVxuXG4gICAgY29uc3QgaGFuZGxlc0ZvY3VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgcHJvcHMucGVyc2lzdGVudCAhPT0gdHJ1ZVxuICAgIClcblxuICAgIHdhdGNoKGhhbmRsZXNGb2N1cywgdmFsID0+IHtcbiAgICAgIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICAgICAgYWRkRXNjYXBlS2V5KG9uRXNjYXBlS2V5KVxuICAgICAgICBhZGRDbGlja091dHNpZGUoY2xpY2tPdXRzaWRlUHJvcHMpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVtb3ZlRXNjYXBlS2V5KG9uRXNjYXBlS2V5KVxuICAgICAgICByZW1vdmVDbGlja091dHNpZGUoY2xpY2tPdXRzaWRlUHJvcHMpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGZvY3VzICgpIHtcbiAgICAgIGFkZEZvY3VzRm4oKCkgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGlubmVyUmVmLnZhbHVlXG5cbiAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSAhPT0gdHJ1ZSkge1xuICAgICAgICAgIG5vZGUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ1thdXRvZm9jdXNdW3RhYmluZGV4XSwgW2RhdGEtYXV0b2ZvY3VzXVt0YWJpbmRleF0nKVxuICAgICAgICAgICAgfHwgbm9kZS5xdWVyeVNlbGVjdG9yKCdbYXV0b2ZvY3VzXSBbdGFiaW5kZXhdLCBbZGF0YS1hdXRvZm9jdXNdIFt0YWJpbmRleF0nKVxuICAgICAgICAgICAgfHwgbm9kZS5xdWVyeVNlbGVjdG9yKCdbYXV0b2ZvY3VzXSwgW2RhdGEtYXV0b2ZvY3VzXScpXG4gICAgICAgICAgICB8fCBub2RlXG4gICAgICAgICAgbm9kZS5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTaG93IChldnQpIHtcbiAgICAgIHJlZm9jdXNUYXJnZXQgPSBwcm9wcy5ub1JlZm9jdXMgPT09IGZhbHNlXG4gICAgICAgID8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgICA6IG51bGxcblxuICAgICAgYWRkRm9jdXNvdXQob25Gb2N1c291dClcblxuICAgICAgc2hvd1BvcnRhbCgpXG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuXG4gICAgICBhYnNvbHV0ZU9mZnNldCA9IHZvaWQgMFxuXG4gICAgICBpZiAoZXZ0ICE9PSB2b2lkIDAgJiYgKHByb3BzLnRvdWNoUG9zaXRpb24gfHwgcHJvcHMuY29udGV4dE1lbnUpKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uKGV2dClcblxuICAgICAgICBpZiAocG9zLmxlZnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGNvbnN0IHsgdG9wLCBsZWZ0IH0gPSBhbmNob3JFbC52YWx1ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgIGFic29sdXRlT2Zmc2V0ID0geyBsZWZ0OiBwb3MubGVmdCAtIGxlZnQsIHRvcDogcG9zLnRvcCAtIHRvcCB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHVud2F0Y2hQb3NpdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHVud2F0Y2hQb3NpdGlvbiA9IHdhdGNoKFxuICAgICAgICAgICgpID0+ICRxLnNjcmVlbi53aWR0aCArICd8JyArICRxLnNjcmVlbi5oZWlnaHQgKyAnfCcgKyBwcm9wcy5zZWxmICsgJ3wnICsgcHJvcHMuYW5jaG9yICsgJ3wnICsgJHEubGFuZy5ydGwsXG4gICAgICAgICAgdXBkYXRlUG9zaXRpb25cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMubm9Gb2N1cyAhPT0gdHJ1ZSkge1xuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKVxuICAgICAgfVxuXG4gICAgICAvLyBzaG91bGQgcmVtb3ZlVGljaygpIGlmIHRoaXMgZ2V0cyByZW1vdmVkXG4gICAgICByZWdpc3RlclRpY2soKCkgPT4ge1xuICAgICAgICB1cGRhdGVQb3NpdGlvbigpXG4gICAgICAgIHByb3BzLm5vRm9jdXMgIT09IHRydWUgJiYgZm9jdXMoKVxuICAgICAgfSlcblxuICAgICAgLy8gc2hvdWxkIHJlbW92ZVRpbWVvdXQoKSBpZiB0aGlzIGdldHMgcmVtb3ZlZFxuICAgICAgcmVnaXN0ZXJUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gcmVxdWlyZWQgaW4gb3JkZXIgdG8gYXZvaWQgdGhlIFwiZG91YmxlLXRhcCBuZWVkZWRcIiBpc3N1ZVxuICAgICAgICBpZiAoJHEucGxhdGZvcm0uaXMuaW9zID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gaWYgYXV0by1jbG9zZSwgdGhlbiB0aGlzIGNsaWNrIHNob3VsZFxuICAgICAgICAgIC8vIG5vdCBjbG9zZSB0aGUgbWVudVxuICAgICAgICAgIGF2b2lkQXV0b0Nsb3NlID0gcHJvcHMuYXV0b0Nsb3NlXG4gICAgICAgICAgaW5uZXJSZWYudmFsdWUuY2xpY2soKVxuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlUG9zaXRpb24oKVxuICAgICAgICBzaG93UG9ydGFsKHRydWUpIC8vIGRvbmUgc2hvd2luZyBwb3J0YWxcbiAgICAgICAgZW1pdCgnc2hvdycsIGV2dClcbiAgICAgIH0sIHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVIaWRlIChldnQpIHtcbiAgICAgIHJlbW92ZVRpY2soKVxuICAgICAgaGlkZVBvcnRhbCgpXG5cbiAgICAgIGFuY2hvckNsZWFudXAodHJ1ZSlcblxuICAgICAgaWYgKFxuICAgICAgICByZWZvY3VzVGFyZ2V0ICE9PSBudWxsXG4gICAgICAgICYmIChcbiAgICAgICAgICAvLyBtZW51IHdhcyBoaWRkZW4gZnJvbSBjb2RlIG9yIEVTQyBwbHVnaW5cbiAgICAgICAgICBldnQgPT09IHZvaWQgMFxuICAgICAgICAgIC8vIG1lbnUgd2FzIG5vdCBjbG9zZWQgZnJvbSBhIG1vdXNlIG9yIHRvdWNoIGNsaWNrT3V0c2lkZVxuICAgICAgICAgIHx8IGV2dC5xQ2xpY2tPdXRzaWRlICE9PSB0cnVlXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICAoKGV2dCAmJiBldnQudHlwZS5pbmRleE9mKCdrZXknKSA9PT0gMFxuICAgICAgICAgID8gcmVmb2N1c1RhcmdldC5jbG9zZXN0KCdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXhePVwiLVwiXSknKVxuICAgICAgICAgIDogdm9pZCAwXG4gICAgICAgICkgfHwgcmVmb2N1c1RhcmdldCkuZm9jdXMoKVxuICAgICAgICByZWZvY3VzVGFyZ2V0ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICAvLyBzaG91bGQgcmVtb3ZlVGltZW91dCgpIGlmIHRoaXMgZ2V0cyByZW1vdmVkXG4gICAgICByZWdpc3RlclRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBoaWRlUG9ydGFsKHRydWUpIC8vIGRvbmUgaGlkaW5nLCBub3cgZGVzdHJveVxuICAgICAgICBlbWl0KCdoaWRlJywgZXZ0KVxuICAgICAgfSwgcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuY2hvckNsZWFudXAgKGhpZGluZykge1xuICAgICAgYWJzb2x1dGVPZmZzZXQgPSB2b2lkIDBcblxuICAgICAgaWYgKHVud2F0Y2hQb3NpdGlvbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHVud2F0Y2hQb3NpdGlvbigpXG4gICAgICAgIHVud2F0Y2hQb3NpdGlvbiA9IHZvaWQgMFxuICAgICAgfVxuXG4gICAgICBpZiAoaGlkaW5nID09PSB0cnVlIHx8IHNob3dpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcmVtb3ZlRm9jdXNvdXQob25Gb2N1c291dClcbiAgICAgICAgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgICAgICByZW1vdmVDbGlja091dHNpZGUoY2xpY2tPdXRzaWRlUHJvcHMpXG4gICAgICAgIHJlbW92ZUVzY2FwZUtleShvbkVzY2FwZUtleSlcbiAgICAgIH1cblxuICAgICAgaWYgKGhpZGluZyAhPT0gdHJ1ZSkge1xuICAgICAgICByZWZvY3VzVGFyZ2V0ID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBpZiAoYW5jaG9yRWwudmFsdWUgIT09IG51bGwgfHwgcHJvcHMuc2Nyb2xsVGFyZ2V0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQudmFsdWUgPSBnZXRTY3JvbGxUYXJnZXQoYW5jaG9yRWwudmFsdWUsIHByb3BzLnNjcm9sbFRhcmdldClcbiAgICAgICAgY2hhbmdlU2Nyb2xsRXZlbnQobG9jYWxTY3JvbGxUYXJnZXQudmFsdWUsIHVwZGF0ZVBvc2l0aW9uKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQXV0b0Nsb3NlIChlKSB7XG4gICAgICAvLyBpZiBhdXRvLWNsb3NlLCB0aGVuIHRoZSBpb3MgZG91YmxlLXRhcCBmaXggd2hpY2hcbiAgICAgIC8vIGlzc3VlcyBhIGNsaWNrIHNob3VsZCBub3QgY2xvc2UgdGhlIG1lbnVcbiAgICAgIGlmIChhdm9pZEF1dG9DbG9zZSAhPT0gdHJ1ZSkge1xuICAgICAgICBjbG9zZVBvcnRhbE1lbnVzKHByb3h5LCBlKVxuICAgICAgICBlbWl0KCdjbGljaycsIGUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYXZvaWRBdXRvQ2xvc2UgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXNvdXQgKGV2dCkge1xuICAgICAgLy8gdGhlIGZvY3VzIGlzIG5vdCBpbiBhIHZ1ZSBjaGlsZCBjb21wb25lbnRcbiAgICAgIGlmIChcbiAgICAgICAgaGFuZGxlc0ZvY3VzLnZhbHVlID09PSB0cnVlXG4gICAgICAgICYmIHByb3BzLm5vRm9jdXMgIT09IHRydWVcbiAgICAgICAgJiYgY2hpbGRIYXNGb2N1cyhpbm5lclJlZi52YWx1ZSwgZXZ0LnRhcmdldCkgIT09IHRydWVcbiAgICAgICkge1xuICAgICAgICBmb2N1cygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Fc2NhcGVLZXkgKGV2dCkge1xuICAgICAgZW1pdCgnZXNjYXBlS2V5JylcbiAgICAgIGhpZGUoZXZ0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uICgpIHtcbiAgICAgIHNldFBvc2l0aW9uKHtcbiAgICAgICAgdGFyZ2V0RWw6IGlubmVyUmVmLnZhbHVlLFxuICAgICAgICBvZmZzZXQ6IHByb3BzLm9mZnNldCxcbiAgICAgICAgYW5jaG9yRWw6IGFuY2hvckVsLnZhbHVlLFxuICAgICAgICBhbmNob3JPcmlnaW46IGFuY2hvck9yaWdpbi52YWx1ZSxcbiAgICAgICAgc2VsZk9yaWdpbjogc2VsZk9yaWdpbi52YWx1ZSxcbiAgICAgICAgYWJzb2x1dGVPZmZzZXQsXG4gICAgICAgIGZpdDogcHJvcHMuZml0LFxuICAgICAgICBjb3ZlcjogcHJvcHMuY292ZXIsXG4gICAgICAgIG1heEhlaWdodDogcHJvcHMubWF4SGVpZ2h0LFxuICAgICAgICBtYXhXaWR0aDogcHJvcHMubWF4V2lkdGhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyUG9ydGFsQ29udGVudCAoKSB7XG4gICAgICByZXR1cm4gaChcbiAgICAgICAgVHJhbnNpdGlvbixcbiAgICAgICAgdHJhbnNpdGlvblByb3BzLnZhbHVlLFxuICAgICAgICAoKSA9PiAoXG4gICAgICAgICAgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIHJvbGU6ICdtZW51JyxcbiAgICAgICAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgICAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICAgICAgICAgIHRhYmluZGV4OiAtMSxcbiAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAncS1tZW51IHEtcG9zaXRpb24tZW5naW5lIHNjcm9sbCcgKyBtZW51Q2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgICAgYXR0cnMuY2xhc3NcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3R5bGU6IFtcbiAgICAgICAgICAgICAgICBhdHRycy5zdHlsZSxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uU3R5bGUudmFsdWVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgLi4ub25FdmVudHMudmFsdWVcbiAgICAgICAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG5cbiAgICBvbkJlZm9yZVVubW91bnQoYW5jaG9yQ2xlYW51cClcblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHsgZm9jdXMsIHVwZGF0ZVBvc2l0aW9uIH0pXG5cbiAgICByZXR1cm4gcmVuZGVyUG9ydGFsXG4gIH1cbn0pXG4iXSwibmFtZXMiOlsiaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLGtCQUFrQjtBQUdEO0FBQ2IsUUFBQSxXQUFXLFNBQVMsY0FBYyxLQUFLO0FBQ3BDLFdBQUEsYUFBYSxPQUFPLEtBQUs7QUFDM0IsU0FBQSxPQUFPLFNBQVMs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
