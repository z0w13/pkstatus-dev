import { c as createComponent, de as useFieldProps, df as useFieldEmits, dg as useField, dh as useFieldState, k as useDarkProps, di as useSizeProps, g as getCurrentInstance, n as useDark, dj as useSize, d as computed, y as hDir, h, a3 as QIcon, dk as hMergeSlotSafely, ah as Ripple, ai as stopAndPrevent, C as noop, r as ref, w as watch, v as nextTick, da as debounce, c4 as onBeforeMount, ap as onDeactivated, aq as onActivated, o as onBeforeUnmount, at as useFormProps, dl as useFormInputNameAttr, dm as fieldValueIsFilled, ak as isDeepEqual, c5 as onBeforeUpdate, cb as onUpdated, aK as prevent, dn as useKeyComposition, aB as stop, P as isKeyCode, aj as shouldIgnoreKey, a9 as QDialog, L as hMergeSlot } from "./index-C1u-_TOv.js";
import { b as QItemSection, Q as QItemLabel, a as QItem } from "./QItem-4sCyJUzG.js";
import { r as rtlHasScrollBug, Q as QMenu } from "./QMenu-CRzTXqO9.js";
import { n as normalizeToInterval } from "./format-esB8TFiE.js";
const QField = createComponent({
  name: "QField",
  inheritAttrs: false,
  props: {
    ...useFieldProps,
    tag: {
      type: String,
      default: "label"
    }
  },
  emits: useFieldEmits,
  setup() {
    return useField(
      useFieldState({
        requiredForAttr: false,
        tagProp: true
      })
    );
  }
});
const defaultSizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
};
const QChip = createComponent({
  name: "QChip",
  props: {
    ...useDarkProps,
    ...useSizeProps,
    dense: Boolean,
    icon: String,
    iconRight: String,
    iconRemove: String,
    iconSelected: String,
    label: [String, Number],
    color: String,
    textColor: String,
    modelValue: {
      type: Boolean,
      default: true
    },
    selected: {
      type: Boolean,
      default: null
    },
    square: Boolean,
    outline: Boolean,
    clickable: Boolean,
    removable: Boolean,
    removeAriaLabel: String,
    tabindex: [String, Number],
    disable: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  emits: ["update:modelValue", "update:selected", "remove", "click"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const sizeStyle = useSize(props, defaultSizes);
    const hasLeftIcon = computed(() => props.selected === true || props.icon !== void 0);
    const leftIcon = computed(() => props.selected === true ? props.iconSelected || $q.iconSet.chip.selected : props.icon);
    const removeIcon = computed(() => props.iconRemove || $q.iconSet.chip.remove);
    const isClickable = computed(
      () => props.disable === false && (props.clickable === true || props.selected !== null)
    );
    const classes = computed(() => {
      const text = props.outline === true ? props.color || props.textColor : props.textColor;
      return "q-chip row inline no-wrap items-center" + (props.outline === false && props.color !== void 0 ? ` bg-${props.color}` : "") + (text ? ` text-${text} q-chip--colored` : "") + (props.disable === true ? " disabled" : "") + (props.dense === true ? " q-chip--dense" : "") + (props.outline === true ? " q-chip--outline" : "") + (props.selected === true ? " q-chip--selected" : "") + (isClickable.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (props.square === true ? " q-chip--square" : "") + (isDark.value === true ? " q-chip--dark q-dark" : "");
    });
    const attributes = computed(() => {
      const chip = props.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: props.tabindex || 0 };
      const remove = {
        ...chip,
        role: "button",
        "aria-hidden": "false",
        "aria-label": props.removeAriaLabel || $q.lang.label.remove
      };
      return { chip, remove };
    });
    function onKeyup(e) {
      e.keyCode === 13 && onClick(e);
    }
    function onClick(e) {
      if (!props.disable) {
        emit("update:selected", !props.selected);
        emit("click", e);
      }
    }
    function onRemove(e) {
      if (e.keyCode === void 0 || e.keyCode === 13) {
        stopAndPrevent(e);
        if (props.disable === false) {
          emit("update:modelValue", false);
          emit("remove");
        }
      }
    }
    function getContent() {
      const child = [];
      isClickable.value === true && child.push(
        h("div", { class: "q-focus-helper" })
      );
      hasLeftIcon.value === true && child.push(
        h(QIcon, {
          class: "q-chip__icon q-chip__icon--left",
          name: leftIcon.value
        })
      );
      const label = props.label !== void 0 ? [h("div", { class: "ellipsis" }, [props.label])] : void 0;
      child.push(
        h("div", {
          class: "q-chip__content col row no-wrap items-center q-anchor--skip"
        }, hMergeSlotSafely(slots.default, label))
      );
      props.iconRight && child.push(
        h(QIcon, {
          class: "q-chip__icon q-chip__icon--right",
          name: props.iconRight
        })
      );
      props.removable === true && child.push(
        h(QIcon, {
          class: "q-chip__icon q-chip__icon--remove cursor-pointer",
          name: removeIcon.value,
          ...attributes.value.remove,
          onClick: onRemove,
          onKeyup: onRemove
        })
      );
      return child;
    }
    return () => {
      if (props.modelValue === false)
        return;
      const data = {
        class: classes.value,
        style: sizeStyle.value
      };
      isClickable.value === true && Object.assign(
        data,
        attributes.value.chip,
        { onClick, onKeyup }
      );
      return hDir(
        "div",
        data,
        getContent(),
        "ripple",
        props.ripple !== false && props.disable !== true,
        () => [[Ripple, props.ripple]]
      );
    };
  }
});
const aggBucketSize = 1e3;
const scrollToEdges = [
  "start",
  "center",
  "end",
  "start-force",
  "center-force",
  "end-force"
];
const filterProto = Array.prototype.filter;
const setOverflowAnchor = window.getComputedStyle(document.body).overflowAnchor === void 0 ? noop : function(contentEl, index) {
  if (contentEl === null) {
    return;
  }
  if (contentEl._qOverflowAnimationFrame !== void 0) {
    cancelAnimationFrame(contentEl._qOverflowAnimationFrame);
  }
  contentEl._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (contentEl === null) {
      return;
    }
    contentEl._qOverflowAnimationFrame = void 0;
    const children = contentEl.children || [];
    filterProto.call(children, (el2) => el2.dataset && el2.dataset.qVsAnchor !== void 0).forEach((el2) => {
      delete el2.dataset.qVsAnchor;
    });
    const el = children[index];
    if (el && el.dataset) {
      el.dataset.qVsAnchor = "";
    }
  });
};
function sumFn(acc, h2) {
  return acc + h2;
}
function getScrollDetails(parent, child, beforeRef, afterRef, horizontal, rtl, stickyStart, stickyEnd) {
  const parentCalc = parent === window ? document.scrollingElement || document.documentElement : parent, propElSize = horizontal === true ? "offsetWidth" : "offsetHeight", details = {
    scrollStart: 0,
    scrollViewSize: -stickyStart - stickyEnd,
    scrollMaxSize: 0,
    offsetStart: -stickyStart,
    offsetEnd: -stickyEnd
  };
  if (horizontal === true) {
    if (parent === window) {
      details.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0;
      details.scrollViewSize += document.documentElement.clientWidth;
    } else {
      details.scrollStart = parentCalc.scrollLeft;
      details.scrollViewSize += parentCalc.clientWidth;
    }
    details.scrollMaxSize = parentCalc.scrollWidth;
    if (rtl === true) {
      details.scrollStart = (rtlHasScrollBug === true ? details.scrollMaxSize - details.scrollViewSize : 0) - details.scrollStart;
    }
  } else {
    if (parent === window) {
      details.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0;
      details.scrollViewSize += document.documentElement.clientHeight;
    } else {
      details.scrollStart = parentCalc.scrollTop;
      details.scrollViewSize += parentCalc.clientHeight;
    }
    details.scrollMaxSize = parentCalc.scrollHeight;
  }
  if (beforeRef !== null) {
    for (let el = beforeRef.previousElementSibling; el !== null; el = el.previousElementSibling) {
      if (el.classList.contains("q-virtual-scroll--skip") === false) {
        details.offsetStart += el[propElSize];
      }
    }
  }
  if (afterRef !== null) {
    for (let el = afterRef.nextElementSibling; el !== null; el = el.nextElementSibling) {
      if (el.classList.contains("q-virtual-scroll--skip") === false) {
        details.offsetEnd += el[propElSize];
      }
    }
  }
  if (child !== parent) {
    const parentRect = parentCalc.getBoundingClientRect(), childRect = child.getBoundingClientRect();
    if (horizontal === true) {
      details.offsetStart += childRect.left - parentRect.left;
      details.offsetEnd -= childRect.width;
    } else {
      details.offsetStart += childRect.top - parentRect.top;
      details.offsetEnd -= childRect.height;
    }
    if (parent !== window) {
      details.offsetStart += details.scrollStart;
    }
    details.offsetEnd += details.scrollMaxSize - details.offsetStart;
  }
  return details;
}
function setScroll(parent, scroll, horizontal, rtl) {
  if (scroll === "end") {
    scroll = (parent === window ? document.body : parent)[horizontal === true ? "scrollWidth" : "scrollHeight"];
  }
  if (parent === window) {
    if (horizontal === true) {
      if (rtl === true) {
        scroll = (rtlHasScrollBug === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - scroll;
      }
      window.scrollTo(scroll, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    } else {
      window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, scroll);
    }
  } else if (horizontal === true) {
    if (rtl === true) {
      scroll = (rtlHasScrollBug === true ? parent.scrollWidth - parent.offsetWidth : 0) - scroll;
    }
    parent.scrollLeft = scroll;
  } else {
    parent.scrollTop = scroll;
  }
}
function sumSize(sizeAgg, size, from, to) {
  if (from >= to) {
    return 0;
  }
  const lastTo = size.length, fromAgg = Math.floor(from / aggBucketSize), toAgg = Math.floor((to - 1) / aggBucketSize) + 1;
  let total = sizeAgg.slice(fromAgg, toAgg).reduce(sumFn, 0);
  if (from % aggBucketSize !== 0) {
    total -= size.slice(fromAgg * aggBucketSize, from).reduce(sumFn, 0);
  }
  if (to % aggBucketSize !== 0 && to !== lastTo) {
    total -= size.slice(to, toAgg * aggBucketSize).reduce(sumFn, 0);
  }
  return total;
}
const commonVirtScrollProps = {
  virtualScrollSliceSize: {
    type: [Number, String],
    default: null
  },
  virtualScrollSliceRatioBefore: {
    type: [Number, String],
    default: 1
  },
  virtualScrollSliceRatioAfter: {
    type: [Number, String],
    default: 1
  },
  virtualScrollItemSize: {
    type: [Number, String],
    default: 24
  },
  virtualScrollStickySizeStart: {
    type: [Number, String],
    default: 0
  },
  virtualScrollStickySizeEnd: {
    type: [Number, String],
    default: 0
  },
  tableColspan: [Number, String]
};
const commonVirtPropsList = Object.keys(commonVirtScrollProps);
const useVirtualScrollProps = {
  virtualScrollHorizontal: Boolean,
  onVirtualScroll: Function,
  ...commonVirtScrollProps
};
function useVirtualScroll({
  virtualScrollLength,
  getVirtualScrollTarget,
  getVirtualScrollEl,
  virtualScrollItemSizeComputed
  // optional
}) {
  const vm = getCurrentInstance();
  const { props, emit, proxy } = vm;
  const { $q } = proxy;
  let prevScrollStart, prevToIndex, localScrollViewSize, virtualScrollSizesAgg = [], virtualScrollSizes;
  const virtualScrollPaddingBefore = ref(0);
  const virtualScrollPaddingAfter = ref(0);
  const virtualScrollSliceSizeComputed = ref({});
  const beforeRef = ref(null);
  const afterRef = ref(null);
  const contentRef = ref(null);
  const virtualScrollSliceRange = ref({ from: 0, to: 0 });
  const colspanAttr = computed(() => props.tableColspan !== void 0 ? props.tableColspan : 100);
  if (virtualScrollItemSizeComputed === void 0) {
    virtualScrollItemSizeComputed = computed(() => props.virtualScrollItemSize);
  }
  const needsReset = computed(() => virtualScrollItemSizeComputed.value + ";" + props.virtualScrollHorizontal);
  const needsSliceRecalc = computed(
    () => needsReset.value + ";" + props.virtualScrollSliceRatioBefore + ";" + props.virtualScrollSliceRatioAfter
  );
  watch(needsSliceRecalc, () => {
    setVirtualScrollSize();
  });
  watch(needsReset, reset);
  function reset() {
    localResetVirtualScroll(prevToIndex, true);
  }
  function refresh(toIndex) {
    localResetVirtualScroll(toIndex === void 0 ? prevToIndex : toIndex);
  }
  function scrollTo(toIndex, edge) {
    const scrollEl = getVirtualScrollTarget();
    if (scrollEl === void 0 || scrollEl === null || scrollEl.nodeType === 8) {
      return;
    }
    const scrollDetails = getScrollDetails(
      scrollEl,
      getVirtualScrollEl(),
      beforeRef.value,
      afterRef.value,
      props.virtualScrollHorizontal,
      $q.lang.rtl,
      props.virtualScrollStickySizeStart,
      props.virtualScrollStickySizeEnd
    );
    localScrollViewSize !== scrollDetails.scrollViewSize && setVirtualScrollSize(scrollDetails.scrollViewSize);
    setVirtualScrollSliceRange(
      scrollEl,
      scrollDetails,
      Math.min(virtualScrollLength.value - 1, Math.max(0, parseInt(toIndex, 10) || 0)),
      0,
      scrollToEdges.indexOf(edge) !== -1 ? edge : prevToIndex !== -1 && toIndex > prevToIndex ? "end" : "start"
    );
  }
  function localOnVirtualScrollEvt() {
    const scrollEl = getVirtualScrollTarget();
    if (scrollEl === void 0 || scrollEl === null || scrollEl.nodeType === 8) {
      return;
    }
    const scrollDetails = getScrollDetails(
      scrollEl,
      getVirtualScrollEl(),
      beforeRef.value,
      afterRef.value,
      props.virtualScrollHorizontal,
      $q.lang.rtl,
      props.virtualScrollStickySizeStart,
      props.virtualScrollStickySizeEnd
    ), listLastIndex = virtualScrollLength.value - 1, listEndOffset = scrollDetails.scrollMaxSize - scrollDetails.offsetStart - scrollDetails.offsetEnd - virtualScrollPaddingAfter.value;
    if (prevScrollStart === scrollDetails.scrollStart) {
      return;
    }
    if (scrollDetails.scrollMaxSize <= 0) {
      setVirtualScrollSliceRange(scrollEl, scrollDetails, 0, 0);
      return;
    }
    localScrollViewSize !== scrollDetails.scrollViewSize && setVirtualScrollSize(scrollDetails.scrollViewSize);
    updateVirtualScrollSizes(virtualScrollSliceRange.value.from);
    const scrollMaxStart = Math.floor(scrollDetails.scrollMaxSize - Math.max(scrollDetails.scrollViewSize, scrollDetails.offsetEnd) - Math.min(virtualScrollSizes[listLastIndex], scrollDetails.scrollViewSize / 2));
    if (scrollMaxStart > 0 && Math.ceil(scrollDetails.scrollStart) >= scrollMaxStart) {
      setVirtualScrollSliceRange(
        scrollEl,
        scrollDetails,
        listLastIndex,
        scrollDetails.scrollMaxSize - scrollDetails.offsetEnd - virtualScrollSizesAgg.reduce(sumFn, 0)
      );
      return;
    }
    let toIndex = 0, listOffset = scrollDetails.scrollStart - scrollDetails.offsetStart, offset = listOffset;
    if (listOffset <= listEndOffset && listOffset + scrollDetails.scrollViewSize >= virtualScrollPaddingBefore.value) {
      listOffset -= virtualScrollPaddingBefore.value;
      toIndex = virtualScrollSliceRange.value.from;
      offset = listOffset;
    } else {
      for (let j = 0; listOffset >= virtualScrollSizesAgg[j] && toIndex < listLastIndex; j++) {
        listOffset -= virtualScrollSizesAgg[j];
        toIndex += aggBucketSize;
      }
    }
    while (listOffset > 0 && toIndex < listLastIndex) {
      listOffset -= virtualScrollSizes[toIndex];
      if (listOffset > -scrollDetails.scrollViewSize) {
        toIndex++;
        offset = listOffset;
      } else {
        offset = virtualScrollSizes[toIndex] + listOffset;
      }
    }
    setVirtualScrollSliceRange(
      scrollEl,
      scrollDetails,
      toIndex,
      offset
    );
  }
  function setVirtualScrollSliceRange(scrollEl, scrollDetails, toIndex, offset, align) {
    const alignForce = typeof align === "string" && align.indexOf("-force") !== -1;
    const alignEnd = alignForce === true ? align.replace("-force", "") : align;
    const alignRange = alignEnd !== void 0 ? alignEnd : "start";
    let from = Math.max(0, toIndex - virtualScrollSliceSizeComputed.value[alignRange]), to = from + virtualScrollSliceSizeComputed.value.total;
    if (to > virtualScrollLength.value) {
      to = virtualScrollLength.value;
      from = Math.max(0, to - virtualScrollSliceSizeComputed.value.total);
    }
    prevScrollStart = scrollDetails.scrollStart;
    const rangeChanged = from !== virtualScrollSliceRange.value.from || to !== virtualScrollSliceRange.value.to;
    if (rangeChanged === false && alignEnd === void 0) {
      emitScroll(toIndex);
      return;
    }
    const { activeElement } = document;
    const contentEl = contentRef.value;
    if (rangeChanged === true && contentEl !== null && contentEl !== activeElement && contentEl.contains(activeElement) === true) {
      contentEl.addEventListener("focusout", onBlurRefocusFn);
      setTimeout(() => {
        contentEl !== null && contentEl.removeEventListener("focusout", onBlurRefocusFn);
      });
    }
    setOverflowAnchor(contentEl, toIndex - from);
    const sizeBefore = alignEnd !== void 0 ? virtualScrollSizes.slice(from, toIndex).reduce(sumFn, 0) : 0;
    if (rangeChanged === true) {
      const tempTo = to >= virtualScrollSliceRange.value.from && from <= virtualScrollSliceRange.value.to ? virtualScrollSliceRange.value.to : to;
      virtualScrollSliceRange.value = { from, to: tempTo };
      virtualScrollPaddingBefore.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, 0, from);
      virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, to, virtualScrollLength.value);
      requestAnimationFrame(() => {
        if (virtualScrollSliceRange.value.to !== to && prevScrollStart === scrollDetails.scrollStart) {
          virtualScrollSliceRange.value = { from: virtualScrollSliceRange.value.from, to };
          virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, to, virtualScrollLength.value);
        }
      });
    }
    requestAnimationFrame(() => {
      if (prevScrollStart !== scrollDetails.scrollStart) {
        return;
      }
      if (rangeChanged === true) {
        updateVirtualScrollSizes(from);
      }
      const sizeAfter = virtualScrollSizes.slice(from, toIndex).reduce(sumFn, 0), posStart = sizeAfter + scrollDetails.offsetStart + virtualScrollPaddingBefore.value, posEnd = posStart + virtualScrollSizes[toIndex];
      let scrollPosition = posStart + offset;
      if (alignEnd !== void 0) {
        const sizeDiff = sizeAfter - sizeBefore;
        const scrollStart = scrollDetails.scrollStart + sizeDiff;
        scrollPosition = alignForce !== true && scrollStart < posStart && posEnd < scrollStart + scrollDetails.scrollViewSize ? scrollStart : alignEnd === "end" ? posEnd - scrollDetails.scrollViewSize : posStart - (alignEnd === "start" ? 0 : Math.round((scrollDetails.scrollViewSize - virtualScrollSizes[toIndex]) / 2));
      }
      prevScrollStart = scrollPosition;
      setScroll(
        scrollEl,
        scrollPosition,
        props.virtualScrollHorizontal,
        $q.lang.rtl
      );
      emitScroll(toIndex);
    });
  }
  function updateVirtualScrollSizes(from) {
    const contentEl = contentRef.value;
    if (contentEl) {
      const children = filterProto.call(
        contentEl.children,
        (el) => el.classList && el.classList.contains("q-virtual-scroll--skip") === false
      ), childrenLength = children.length, sizeFn = props.virtualScrollHorizontal === true ? (el) => el.getBoundingClientRect().width : (el) => el.offsetHeight;
      let index = from, size, diff;
      for (let i = 0; i < childrenLength; ) {
        size = sizeFn(children[i]);
        i++;
        while (i < childrenLength && children[i].classList.contains("q-virtual-scroll--with-prev") === true) {
          size += sizeFn(children[i]);
          i++;
        }
        diff = size - virtualScrollSizes[index];
        if (diff !== 0) {
          virtualScrollSizes[index] += diff;
          virtualScrollSizesAgg[Math.floor(index / aggBucketSize)] += diff;
        }
        index++;
      }
    }
  }
  function onBlurRefocusFn() {
    contentRef.value !== null && contentRef.value !== void 0 && contentRef.value.focus();
  }
  function localResetVirtualScroll(toIndex, fullReset) {
    const defaultSize = 1 * virtualScrollItemSizeComputed.value;
    if (fullReset === true || Array.isArray(virtualScrollSizes) === false) {
      virtualScrollSizes = [];
    }
    const oldVirtualScrollSizesLength = virtualScrollSizes.length;
    virtualScrollSizes.length = virtualScrollLength.value;
    for (let i = virtualScrollLength.value - 1; i >= oldVirtualScrollSizesLength; i--) {
      virtualScrollSizes[i] = defaultSize;
    }
    const jMax = Math.floor((virtualScrollLength.value - 1) / aggBucketSize);
    virtualScrollSizesAgg = [];
    for (let j = 0; j <= jMax; j++) {
      let size = 0;
      const iMax = Math.min((j + 1) * aggBucketSize, virtualScrollLength.value);
      for (let i = j * aggBucketSize; i < iMax; i++) {
        size += virtualScrollSizes[i];
      }
      virtualScrollSizesAgg.push(size);
    }
    prevToIndex = -1;
    prevScrollStart = void 0;
    virtualScrollPaddingBefore.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, 0, virtualScrollSliceRange.value.from);
    virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, virtualScrollSliceRange.value.to, virtualScrollLength.value);
    if (toIndex >= 0) {
      updateVirtualScrollSizes(virtualScrollSliceRange.value.from);
      nextTick(() => {
        scrollTo(toIndex);
      });
    } else {
      onVirtualScrollEvt();
    }
  }
  function setVirtualScrollSize(scrollViewSize) {
    if (scrollViewSize === void 0 && typeof window !== "undefined") {
      const scrollEl = getVirtualScrollTarget();
      if (scrollEl !== void 0 && scrollEl !== null && scrollEl.nodeType !== 8) {
        scrollViewSize = getScrollDetails(
          scrollEl,
          getVirtualScrollEl(),
          beforeRef.value,
          afterRef.value,
          props.virtualScrollHorizontal,
          $q.lang.rtl,
          props.virtualScrollStickySizeStart,
          props.virtualScrollStickySizeEnd
        ).scrollViewSize;
      }
    }
    localScrollViewSize = scrollViewSize;
    const virtualScrollSliceRatioBefore = parseFloat(props.virtualScrollSliceRatioBefore) || 0;
    const virtualScrollSliceRatioAfter = parseFloat(props.virtualScrollSliceRatioAfter) || 0;
    const multiplier = 1 + virtualScrollSliceRatioBefore + virtualScrollSliceRatioAfter;
    const view = scrollViewSize === void 0 || scrollViewSize <= 0 ? 1 : Math.ceil(scrollViewSize / virtualScrollItemSizeComputed.value);
    const baseSize = Math.max(
      1,
      view,
      Math.ceil((props.virtualScrollSliceSize > 0 ? props.virtualScrollSliceSize : 10) / multiplier)
    );
    virtualScrollSliceSizeComputed.value = {
      total: Math.ceil(baseSize * multiplier),
      start: Math.ceil(baseSize * virtualScrollSliceRatioBefore),
      center: Math.ceil(baseSize * (0.5 + virtualScrollSliceRatioBefore)),
      end: Math.ceil(baseSize * (1 + virtualScrollSliceRatioBefore)),
      view
    };
  }
  function padVirtualScroll(tag, content) {
    const paddingSize = props.virtualScrollHorizontal === true ? "width" : "height";
    const style = {
      ["--q-virtual-scroll-item-" + paddingSize]: virtualScrollItemSizeComputed.value + "px"
    };
    return [
      tag === "tbody" ? h(tag, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: beforeRef
      }, [
        h("tr", [
          h("td", {
            style: { [paddingSize]: `${virtualScrollPaddingBefore.value}px`, ...style },
            colspan: colspanAttr.value
          })
        ])
      ]) : h(tag, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: beforeRef,
        style: { [paddingSize]: `${virtualScrollPaddingBefore.value}px`, ...style }
      }),
      h(tag, {
        class: "q-virtual-scroll__content",
        key: "content",
        ref: contentRef,
        tabindex: -1
      }, content.flat()),
      tag === "tbody" ? h(tag, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: afterRef
      }, [
        h("tr", [
          h("td", {
            style: { [paddingSize]: `${virtualScrollPaddingAfter.value}px`, ...style },
            colspan: colspanAttr.value
          })
        ])
      ]) : h(tag, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: afterRef,
        style: { [paddingSize]: `${virtualScrollPaddingAfter.value}px`, ...style }
      })
    ];
  }
  function emitScroll(index) {
    if (prevToIndex !== index) {
      props.onVirtualScroll !== void 0 && emit("virtualScroll", {
        index,
        from: virtualScrollSliceRange.value.from,
        to: virtualScrollSliceRange.value.to - 1,
        direction: index < prevToIndex ? "decrease" : "increase",
        ref: proxy
      });
      prevToIndex = index;
    }
  }
  setVirtualScrollSize();
  const onVirtualScrollEvt = debounce(
    localOnVirtualScrollEvt,
    $q.platform.is.ios === true ? 120 : 35
  );
  onBeforeMount(() => {
    setVirtualScrollSize();
  });
  let shouldActivate = false;
  onDeactivated(() => {
    shouldActivate = true;
  });
  onActivated(() => {
    if (shouldActivate !== true)
      return;
    const scrollEl = getVirtualScrollTarget();
    if (prevScrollStart !== void 0 && scrollEl !== void 0 && scrollEl !== null && scrollEl.nodeType !== 8) {
      setScroll(
        scrollEl,
        prevScrollStart,
        props.virtualScrollHorizontal,
        $q.lang.rtl
      );
    } else {
      scrollTo(prevToIndex);
    }
  });
  onBeforeUnmount(() => {
    onVirtualScrollEvt.cancel();
  });
  Object.assign(proxy, { scrollTo, reset, refresh });
  return {
    virtualScrollSliceRange,
    virtualScrollSliceSizeComputed,
    setVirtualScrollSize,
    onVirtualScrollEvt,
    localResetVirtualScroll,
    padVirtualScroll,
    scrollTo,
    reset,
    refresh
  };
}
const validateNewValueMode = (v) => ["add", "add-unique", "toggle"].includes(v);
const reEscapeList = ".*+?^${}()|[]\\";
const fieldPropsList = Object.keys(useFieldProps);
const QSelect = createComponent({
  name: "QSelect",
  inheritAttrs: false,
  props: {
    ...useVirtualScrollProps,
    ...useFormProps,
    ...useFieldProps,
    modelValue: {
      required: true
    },
    multiple: Boolean,
    displayValue: [String, Number],
    displayValueHtml: Boolean,
    dropdownIcon: String,
    options: {
      type: Array,
      default: () => []
    },
    optionValue: [Function, String],
    optionLabel: [Function, String],
    optionDisable: [Function, String],
    hideSelected: Boolean,
    hideDropdownIcon: Boolean,
    fillInput: Boolean,
    maxValues: [Number, String],
    optionsDense: Boolean,
    optionsDark: {
      type: Boolean,
      default: null
    },
    optionsSelectedClass: String,
    optionsHtml: Boolean,
    optionsCover: Boolean,
    menuShrink: Boolean,
    menuAnchor: String,
    menuSelf: String,
    menuOffset: Array,
    popupContentClass: String,
    popupContentStyle: [String, Array, Object],
    popupNoRouteDismiss: Boolean,
    useInput: Boolean,
    useChips: Boolean,
    newValueMode: {
      type: String,
      validator: validateNewValueMode
    },
    mapOptions: Boolean,
    emitValue: Boolean,
    inputDebounce: {
      type: [Number, String],
      default: 500
    },
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
    tabindex: {
      type: [String, Number],
      default: 0
    },
    autocomplete: String,
    transitionShow: String,
    transitionHide: String,
    transitionDuration: [String, Number],
    behavior: {
      type: String,
      validator: (v) => ["default", "menu", "dialog"].includes(v),
      default: "default"
    },
    virtualScrollItemSize: {
      type: [Number, String],
      default: void 0
    },
    onNewValue: Function,
    onFilter: Function
  },
  emits: [
    ...useFieldEmits,
    "add",
    "remove",
    "inputValue",
    "newValue",
    "keyup",
    "keypress",
    "keydown",
    "filterAbort"
  ],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const menu = ref(false);
    const dialog = ref(false);
    const optionIndex = ref(-1);
    const inputValue = ref("");
    const dialogFieldFocused = ref(false);
    const innerLoadingIndicator = ref(false);
    let filterTimer = null, inputValueTimer = null, innerValueCache, hasDialog, userInputValue, filterId = null, defaultInputValue, transitionShowComputed, searchBuffer, searchBufferExp;
    const inputRef = ref(null);
    const targetRef = ref(null);
    const menuRef = ref(null);
    const dialogRef = ref(null);
    const menuContentRef = ref(null);
    const nameProp = useFormInputNameAttr(props);
    const onComposition = useKeyComposition(onInput);
    const virtualScrollLength = computed(() => Array.isArray(props.options) ? props.options.length : 0);
    const virtualScrollItemSizeComputed = computed(() => props.virtualScrollItemSize === void 0 ? props.optionsDense === true ? 24 : 48 : props.virtualScrollItemSize);
    const {
      virtualScrollSliceRange,
      virtualScrollSliceSizeComputed,
      localResetVirtualScroll,
      padVirtualScroll,
      onVirtualScrollEvt,
      scrollTo,
      setVirtualScrollSize
    } = useVirtualScroll({
      virtualScrollLength,
      getVirtualScrollTarget,
      getVirtualScrollEl,
      virtualScrollItemSizeComputed
    });
    const state = useFieldState();
    const innerValue = computed(() => {
      const mapNull = props.mapOptions === true && props.multiple !== true, val = props.modelValue !== void 0 && (props.modelValue !== null || mapNull === true) ? props.multiple === true && Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue] : [];
      if (props.mapOptions === true && Array.isArray(props.options) === true) {
        const cache = props.mapOptions === true && innerValueCache !== void 0 ? innerValueCache : [];
        const values = val.map((v) => getOption(v, cache));
        return props.modelValue === null && mapNull === true ? values.filter((v) => v !== null) : values;
      }
      return val;
    });
    const innerFieldProps = computed(() => {
      const acc = {};
      fieldPropsList.forEach((key) => {
        const val = props[key];
        if (val !== void 0) {
          acc[key] = val;
        }
      });
      return acc;
    });
    const isOptionsDark = computed(() => props.optionsDark === null ? state.isDark.value : props.optionsDark);
    const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
    const computedInputClass = computed(() => {
      let cls = "q-field__input q-placeholder col";
      if (props.hideSelected === true || innerValue.value.length === 0) {
        return [cls, props.inputClass];
      }
      cls += " q-field__input--padding";
      return props.inputClass === void 0 ? cls : [cls, props.inputClass];
    });
    const menuContentClass = computed(
      () => (props.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (props.popupContentClass ? " " + props.popupContentClass : "")
    );
    const noOptions = computed(() => virtualScrollLength.value === 0);
    const selectedString = computed(
      () => innerValue.value.map((opt) => getOptionLabel.value(opt)).join(", ")
    );
    const ariaCurrentValue = computed(() => props.displayValue !== void 0 ? props.displayValue : selectedString.value);
    const needsHtmlFn = computed(() => props.optionsHtml === true ? () => true : (opt) => opt !== void 0 && opt !== null && opt.html === true);
    const valueAsHtml = computed(() => props.displayValueHtml === true || props.displayValue === void 0 && (props.optionsHtml === true || innerValue.value.some(needsHtmlFn.value)));
    const tabindex = computed(() => state.focused.value === true ? props.tabindex : -1);
    const comboboxAttrs = computed(() => {
      const attrs = {
        tabindex: props.tabindex,
        role: "combobox",
        "aria-label": props.label,
        "aria-readonly": props.readonly === true ? "true" : "false",
        "aria-autocomplete": props.useInput === true ? "list" : "none",
        "aria-expanded": menu.value === true ? "true" : "false",
        "aria-controls": `${state.targetUid.value}_lb`
      };
      if (optionIndex.value >= 0) {
        attrs["aria-activedescendant"] = `${state.targetUid.value}_${optionIndex.value}`;
      }
      return attrs;
    });
    const listboxAttrs = computed(() => ({
      id: `${state.targetUid.value}_lb`,
      role: "listbox",
      "aria-multiselectable": props.multiple === true ? "true" : "false"
    }));
    const selectedScope = computed(() => {
      return innerValue.value.map((opt, i) => ({
        index: i,
        opt,
        html: needsHtmlFn.value(opt),
        selected: true,
        removeAtIndex: removeAtIndexAndFocus,
        toggleOption,
        tabindex: tabindex.value
      }));
    });
    const optionScope = computed(() => {
      if (virtualScrollLength.value === 0) {
        return [];
      }
      const { from, to } = virtualScrollSliceRange.value;
      return props.options.slice(from, to).map((opt, i) => {
        const disable = isOptionDisabled.value(opt) === true;
        const active = isOptionSelected(opt) === true;
        const index = from + i;
        const itemProps = {
          clickable: true,
          active,
          activeClass: computedOptionsSelectedClass.value,
          manualFocus: true,
          focused: false,
          disable,
          tabindex: -1,
          dense: props.optionsDense,
          dark: isOptionsDark.value,
          role: "option",
          "aria-selected": active === true ? "true" : "false",
          id: `${state.targetUid.value}_${index}`,
          onClick: () => {
            toggleOption(opt);
          }
        };
        if (disable !== true) {
          optionIndex.value === index && (itemProps.focused = true);
          if ($q.platform.is.desktop === true) {
            itemProps.onMousemove = () => {
              menu.value === true && setOptionIndex(index);
            };
          }
        }
        return {
          index,
          opt,
          html: needsHtmlFn.value(opt),
          label: getOptionLabel.value(opt),
          selected: itemProps.active,
          focused: itemProps.focused,
          toggleOption,
          setOptionIndex,
          itemProps
        };
      });
    });
    const dropdownArrowIcon = computed(() => props.dropdownIcon !== void 0 ? props.dropdownIcon : $q.iconSet.arrow.dropdown);
    const squaredMenu = computed(
      () => props.optionsCover === false && props.outlined !== true && props.standout !== true && props.borderless !== true && props.rounded !== true
    );
    const computedOptionsSelectedClass = computed(() => props.optionsSelectedClass !== void 0 ? props.optionsSelectedClass : props.color !== void 0 ? `text-${props.color}` : "");
    const getOptionValue = computed(() => getPropValueFn(props.optionValue, "value"));
    const getOptionLabel = computed(() => getPropValueFn(props.optionLabel, "label"));
    const isOptionDisabled = computed(() => getPropValueFn(props.optionDisable, "disable"));
    const innerOptionsValue = computed(() => innerValue.value.map((opt) => getOptionValue.value(opt)));
    const inputControlEvents = computed(() => {
      const evt = {
        onInput,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange: onComposition,
        onKeydown: onTargetKeydown,
        onKeyup: onTargetAutocomplete,
        onKeypress: onTargetKeypress,
        onFocus: selectInputText,
        onClick(e) {
          hasDialog === true && stop(e);
        }
      };
      evt.onCompositionstart = evt.onCompositionupdate = evt.onCompositionend = onComposition;
      return evt;
    });
    watch(innerValue, (val) => {
      innerValueCache = val;
      if (props.useInput === true && props.fillInput === true && props.multiple !== true && state.innerLoading.value !== true && (dialog.value !== true && menu.value !== true || hasValue.value !== true)) {
        userInputValue !== true && resetInputValue();
        if (dialog.value === true || menu.value === true) {
          filter("");
        }
      }
    }, { immediate: true });
    watch(() => props.fillInput, resetInputValue);
    watch(menu, updateMenu);
    watch(virtualScrollLength, rerenderMenu);
    function getEmittingOptionValue(opt) {
      return props.emitValue === true ? getOptionValue.value(opt) : opt;
    }
    function removeAtIndex(index) {
      if (index !== -1 && index < innerValue.value.length) {
        if (props.multiple === true) {
          const model = props.modelValue.slice();
          emit("remove", { index, value: model.splice(index, 1)[0] });
          emit("update:modelValue", model);
        } else {
          emit("update:modelValue", null);
        }
      }
    }
    function removeAtIndexAndFocus(index) {
      removeAtIndex(index);
      state.focus();
    }
    function add(opt, unique) {
      const val = getEmittingOptionValue(opt);
      if (props.multiple !== true) {
        props.fillInput === true && updateInputValue(
          getOptionLabel.value(opt),
          true,
          true
        );
        emit("update:modelValue", val);
        return;
      }
      if (innerValue.value.length === 0) {
        emit("add", { index: 0, value: val });
        emit("update:modelValue", props.multiple === true ? [val] : val);
        return;
      }
      if (unique === true && isOptionSelected(opt) === true) {
        return;
      }
      if (props.maxValues !== void 0 && props.modelValue.length >= props.maxValues) {
        return;
      }
      const model = props.modelValue.slice();
      emit("add", { index: model.length, value: val });
      model.push(val);
      emit("update:modelValue", model);
    }
    function toggleOption(opt, keepOpen) {
      if (state.editable.value !== true || opt === void 0 || isOptionDisabled.value(opt) === true) {
        return;
      }
      const optValue = getOptionValue.value(opt);
      if (props.multiple !== true) {
        if (keepOpen !== true) {
          updateInputValue(
            props.fillInput === true ? getOptionLabel.value(opt) : "",
            true,
            true
          );
          hidePopup();
        }
        targetRef.value !== null && targetRef.value.focus();
        if (innerValue.value.length === 0 || isDeepEqual(getOptionValue.value(innerValue.value[0]), optValue) !== true) {
          emit("update:modelValue", props.emitValue === true ? optValue : opt);
        }
        return;
      }
      (hasDialog !== true || dialogFieldFocused.value === true) && state.focus();
      selectInputText();
      if (innerValue.value.length === 0) {
        const val = props.emitValue === true ? optValue : opt;
        emit("add", { index: 0, value: val });
        emit("update:modelValue", props.multiple === true ? [val] : val);
        return;
      }
      const model = props.modelValue.slice(), index = innerOptionsValue.value.findIndex((v) => isDeepEqual(v, optValue));
      if (index !== -1) {
        emit("remove", { index, value: model.splice(index, 1)[0] });
      } else {
        if (props.maxValues !== void 0 && model.length >= props.maxValues) {
          return;
        }
        const val = props.emitValue === true ? optValue : opt;
        emit("add", { index: model.length, value: val });
        model.push(val);
      }
      emit("update:modelValue", model);
    }
    function setOptionIndex(index) {
      if ($q.platform.is.desktop !== true)
        return;
      const val = index !== -1 && index < virtualScrollLength.value ? index : -1;
      if (optionIndex.value !== val) {
        optionIndex.value = val;
      }
    }
    function moveOptionSelection(offset = 1, skipInputValue) {
      if (menu.value === true) {
        let index = optionIndex.value;
        do {
          index = normalizeToInterval(
            index + offset,
            -1,
            virtualScrollLength.value - 1
          );
        } while (index !== -1 && index !== optionIndex.value && isOptionDisabled.value(props.options[index]) === true);
        if (optionIndex.value !== index) {
          setOptionIndex(index);
          scrollTo(index);
          if (skipInputValue !== true && props.useInput === true && props.fillInput === true) {
            setInputValue(
              index >= 0 ? getOptionLabel.value(props.options[index]) : defaultInputValue,
              true
            );
          }
        }
      }
    }
    function getOption(value, valueCache) {
      const fn = (opt) => isDeepEqual(getOptionValue.value(opt), value);
      return props.options.find(fn) || valueCache.find(fn) || value;
    }
    function getPropValueFn(propValue, defaultVal) {
      const val = propValue !== void 0 ? propValue : defaultVal;
      return typeof val === "function" ? val : (opt) => opt !== null && typeof opt === "object" && val in opt ? opt[val] : opt;
    }
    function isOptionSelected(opt) {
      const val = getOptionValue.value(opt);
      return innerOptionsValue.value.find((v) => isDeepEqual(v, val)) !== void 0;
    }
    function selectInputText(e) {
      if (props.useInput === true && targetRef.value !== null && (e === void 0 || targetRef.value === e.target && e.target.value === selectedString.value)) {
        targetRef.value.select();
      }
    }
    function onTargetKeyup(e) {
      if (isKeyCode(e, 27) === true && menu.value === true) {
        stop(e);
        hidePopup();
        resetInputValue();
      }
      emit("keyup", e);
    }
    function onTargetAutocomplete(e) {
      const { value } = e.target;
      if (e.keyCode !== void 0) {
        onTargetKeyup(e);
        return;
      }
      e.target.value = "";
      if (filterTimer !== null) {
        clearTimeout(filterTimer);
        filterTimer = null;
      }
      if (inputValueTimer !== null) {
        clearTimeout(inputValueTimer);
        inputValueTimer = null;
      }
      resetInputValue();
      if (typeof value === "string" && value.length !== 0) {
        const needle = value.toLocaleLowerCase();
        const findFn = (extractFn) => {
          const option = props.options.find((opt) => extractFn.value(opt).toLocaleLowerCase() === needle);
          if (option === void 0) {
            return false;
          }
          if (innerValue.value.indexOf(option) === -1) {
            toggleOption(option);
          } else {
            hidePopup();
          }
          return true;
        };
        const fillFn = (afterFilter) => {
          if (findFn(getOptionValue) === true) {
            return;
          }
          if (findFn(getOptionLabel) === true || afterFilter === true) {
            return;
          }
          filter(value, true, () => fillFn(true));
        };
        fillFn();
      } else {
        state.clearValue(e);
      }
    }
    function onTargetKeypress(e) {
      emit("keypress", e);
    }
    function onTargetKeydown(e) {
      emit("keydown", e);
      if (shouldIgnoreKey(e) === true) {
        return;
      }
      const newValueModeValid = inputValue.value.length !== 0 && (props.newValueMode !== void 0 || props.onNewValue !== void 0);
      const tabShouldSelect = e.shiftKey !== true && props.multiple !== true && (optionIndex.value !== -1 || newValueModeValid === true);
      if (e.keyCode === 27) {
        prevent(e);
        return;
      }
      if (e.keyCode === 9 && tabShouldSelect === false) {
        closeMenu();
        return;
      }
      if (e.target === void 0 || e.target.id !== state.targetUid.value || state.editable.value !== true)
        return;
      if (e.keyCode === 40 && state.innerLoading.value !== true && menu.value === false) {
        stopAndPrevent(e);
        showPopup();
        return;
      }
      if (e.keyCode === 8 && (props.useChips === true || props.clearable === true) && props.hideSelected !== true && inputValue.value.length === 0) {
        if (props.multiple === true && Array.isArray(props.modelValue) === true) {
          removeAtIndex(props.modelValue.length - 1);
        } else if (props.multiple !== true && props.modelValue !== null) {
          emit("update:modelValue", null);
        }
        return;
      }
      if ((e.keyCode === 35 || e.keyCode === 36) && (typeof inputValue.value !== "string" || inputValue.value.length === 0)) {
        stopAndPrevent(e);
        optionIndex.value = -1;
        moveOptionSelection(e.keyCode === 36 ? 1 : -1, props.multiple);
      }
      if ((e.keyCode === 33 || e.keyCode === 34) && virtualScrollSliceSizeComputed.value !== void 0) {
        stopAndPrevent(e);
        optionIndex.value = Math.max(
          -1,
          Math.min(
            virtualScrollLength.value,
            optionIndex.value + (e.keyCode === 33 ? -1 : 1) * virtualScrollSliceSizeComputed.value.view
          )
        );
        moveOptionSelection(e.keyCode === 33 ? 1 : -1, props.multiple);
      }
      if (e.keyCode === 38 || e.keyCode === 40) {
        stopAndPrevent(e);
        moveOptionSelection(e.keyCode === 38 ? -1 : 1, props.multiple);
      }
      const optionsLength = virtualScrollLength.value;
      if (searchBuffer === void 0 || searchBufferExp < Date.now()) {
        searchBuffer = "";
      }
      if (optionsLength > 0 && props.useInput !== true && e.key !== void 0 && e.key.length === 1 && e.altKey === false && e.ctrlKey === false && e.metaKey === false && (e.keyCode !== 32 || searchBuffer.length !== 0)) {
        menu.value !== true && showPopup(e);
        const char = e.key.toLocaleLowerCase(), keyRepeat = searchBuffer.length === 1 && searchBuffer[0] === char;
        searchBufferExp = Date.now() + 1500;
        if (keyRepeat === false) {
          stopAndPrevent(e);
          searchBuffer += char;
        }
        const searchRe = new RegExp("^" + searchBuffer.split("").map((l) => reEscapeList.indexOf(l) !== -1 ? "\\" + l : l).join(".*"), "i");
        let index = optionIndex.value;
        if (keyRepeat === true || index < 0 || searchRe.test(getOptionLabel.value(props.options[index])) !== true) {
          do {
            index = normalizeToInterval(index + 1, -1, optionsLength - 1);
          } while (index !== optionIndex.value && (isOptionDisabled.value(props.options[index]) === true || searchRe.test(getOptionLabel.value(props.options[index])) !== true));
        }
        if (optionIndex.value !== index) {
          nextTick(() => {
            setOptionIndex(index);
            scrollTo(index);
            if (index >= 0 && props.useInput === true && props.fillInput === true) {
              setInputValue(getOptionLabel.value(props.options[index]), true);
            }
          });
        }
        return;
      }
      if (e.keyCode !== 13 && (e.keyCode !== 32 || props.useInput === true || searchBuffer !== "") && (e.keyCode !== 9 || tabShouldSelect === false))
        return;
      e.keyCode !== 9 && stopAndPrevent(e);
      if (optionIndex.value !== -1 && optionIndex.value < optionsLength) {
        toggleOption(props.options[optionIndex.value]);
        return;
      }
      if (newValueModeValid === true) {
        const done = (val, mode) => {
          if (mode) {
            if (validateNewValueMode(mode) !== true) {
              return;
            }
          } else {
            mode = props.newValueMode;
          }
          updateInputValue("", props.multiple !== true, true);
          if (val === void 0 || val === null) {
            return;
          }
          const fn = mode === "toggle" ? toggleOption : add;
          fn(val, mode === "add-unique");
          if (props.multiple !== true) {
            targetRef.value !== null && targetRef.value.focus();
            hidePopup();
          }
        };
        if (props.onNewValue !== void 0) {
          emit("newValue", inputValue.value, done);
        } else {
          done(inputValue.value);
        }
        if (props.multiple !== true) {
          return;
        }
      }
      if (menu.value === true) {
        closeMenu();
      } else if (state.innerLoading.value !== true) {
        showPopup();
      }
    }
    function getVirtualScrollEl() {
      return hasDialog === true ? menuContentRef.value : menuRef.value !== null && menuRef.value.contentEl !== null ? menuRef.value.contentEl : void 0;
    }
    function getVirtualScrollTarget() {
      return getVirtualScrollEl();
    }
    function getSelection() {
      if (props.hideSelected === true) {
        return [];
      }
      if (slots["selected-item"] !== void 0) {
        return selectedScope.value.map((scope) => slots["selected-item"](scope)).slice();
      }
      if (slots.selected !== void 0) {
        return [].concat(slots.selected());
      }
      if (props.useChips === true) {
        return selectedScope.value.map((scope, i) => h(QChip, {
          key: "option-" + i,
          removable: state.editable.value === true && isOptionDisabled.value(scope.opt) !== true,
          dense: true,
          textColor: props.color,
          tabindex: tabindex.value,
          onRemove() {
            scope.removeAtIndex(i);
          }
        }, () => h("span", {
          class: "ellipsis",
          [scope.html === true ? "innerHTML" : "textContent"]: getOptionLabel.value(scope.opt)
        })));
      }
      return [
        h("span", {
          [valueAsHtml.value === true ? "innerHTML" : "textContent"]: ariaCurrentValue.value
        })
      ];
    }
    function getAllOptions() {
      if (noOptions.value === true) {
        return slots["no-option"] !== void 0 ? slots["no-option"]({ inputValue: inputValue.value }) : void 0;
      }
      const fn = slots.option !== void 0 ? slots.option : (scope) => {
        return h(QItem, {
          key: scope.index,
          ...scope.itemProps
        }, () => {
          return h(
            QItemSection,
            () => h(
              QItemLabel,
              () => h("span", {
                [scope.html === true ? "innerHTML" : "textContent"]: scope.label
              })
            )
          );
        });
      };
      let options = padVirtualScroll("div", optionScope.value.map(fn));
      if (slots["before-options"] !== void 0) {
        options = slots["before-options"]().concat(options);
      }
      return hMergeSlot(slots["after-options"], options);
    }
    function getInput(fromDialog, isTarget) {
      const attrs = isTarget === true ? { ...comboboxAttrs.value, ...state.splitAttrs.attributes.value } : void 0;
      const data = {
        ref: isTarget === true ? targetRef : void 0,
        key: "i_t",
        class: computedInputClass.value,
        style: props.inputStyle,
        value: inputValue.value !== void 0 ? inputValue.value : "",
        // required for Android in order to show ENTER key when in form
        type: "search",
        ...attrs,
        id: isTarget === true ? state.targetUid.value : void 0,
        maxlength: props.maxlength,
        autocomplete: props.autocomplete,
        "data-autofocus": fromDialog === true || props.autofocus === true || void 0,
        disabled: props.disable === true,
        readonly: props.readonly === true,
        ...inputControlEvents.value
      };
      if (fromDialog !== true && hasDialog === true) {
        if (Array.isArray(data.class) === true) {
          data.class = [...data.class, "no-pointer-events"];
        } else {
          data.class += " no-pointer-events";
        }
      }
      return h("input", data);
    }
    function onInput(e) {
      if (filterTimer !== null) {
        clearTimeout(filterTimer);
        filterTimer = null;
      }
      if (inputValueTimer !== null) {
        clearTimeout(inputValueTimer);
        inputValueTimer = null;
      }
      if (e && e.target && e.target.qComposing === true) {
        return;
      }
      setInputValue(e.target.value || "");
      userInputValue = true;
      defaultInputValue = inputValue.value;
      if (state.focused.value !== true && (hasDialog !== true || dialogFieldFocused.value === true)) {
        state.focus();
      }
      if (props.onFilter !== void 0) {
        filterTimer = setTimeout(() => {
          filterTimer = null;
          filter(inputValue.value);
        }, props.inputDebounce);
      }
    }
    function setInputValue(val, emitImmediately) {
      if (inputValue.value !== val) {
        inputValue.value = val;
        if (emitImmediately === true || props.inputDebounce === 0 || props.inputDebounce === "0") {
          emit("inputValue", val);
        } else {
          inputValueTimer = setTimeout(() => {
            inputValueTimer = null;
            emit("inputValue", val);
          }, props.inputDebounce);
        }
      }
    }
    function updateInputValue(val, noFiltering, internal) {
      userInputValue = internal !== true;
      if (props.useInput === true) {
        setInputValue(val, true);
        if (noFiltering === true || internal !== true) {
          defaultInputValue = val;
        }
        noFiltering !== true && filter(val);
      }
    }
    function filter(val, keepClosed, afterUpdateFn) {
      if (props.onFilter === void 0 || keepClosed !== true && state.focused.value !== true) {
        return;
      }
      if (state.innerLoading.value === true) {
        emit("filterAbort");
      } else {
        state.innerLoading.value = true;
        innerLoadingIndicator.value = true;
      }
      if (val !== "" && props.multiple !== true && innerValue.value.length !== 0 && userInputValue !== true && val === getOptionLabel.value(innerValue.value[0])) {
        val = "";
      }
      const localFilterId = setTimeout(() => {
        menu.value === true && (menu.value = false);
      }, 10);
      filterId !== null && clearTimeout(filterId);
      filterId = localFilterId;
      emit(
        "filter",
        val,
        (fn, afterFn) => {
          if ((keepClosed === true || state.focused.value === true) && filterId === localFilterId) {
            clearTimeout(filterId);
            typeof fn === "function" && fn();
            innerLoadingIndicator.value = false;
            nextTick(() => {
              state.innerLoading.value = false;
              if (state.editable.value === true) {
                if (keepClosed === true) {
                  menu.value === true && hidePopup();
                } else if (menu.value === true) {
                  updateMenu(true);
                } else {
                  menu.value = true;
                }
              }
              typeof afterFn === "function" && nextTick(() => {
                afterFn(proxy);
              });
              typeof afterUpdateFn === "function" && nextTick(() => {
                afterUpdateFn(proxy);
              });
            });
          }
        },
        () => {
          if (state.focused.value === true && filterId === localFilterId) {
            clearTimeout(filterId);
            state.innerLoading.value = false;
            innerLoadingIndicator.value = false;
          }
          menu.value === true && (menu.value = false);
        }
      );
    }
    function getMenu() {
      return h(QMenu, {
        ref: menuRef,
        class: menuContentClass.value,
        style: props.popupContentStyle,
        modelValue: menu.value,
        fit: props.menuShrink !== true,
        cover: props.optionsCover === true && noOptions.value !== true && props.useInput !== true,
        anchor: props.menuAnchor,
        self: props.menuSelf,
        offset: props.menuOffset,
        dark: isOptionsDark.value,
        noParentEvent: true,
        noRefocus: true,
        noFocus: true,
        noRouteDismiss: props.popupNoRouteDismiss,
        square: squaredMenu.value,
        transitionShow: props.transitionShow,
        transitionHide: props.transitionHide,
        transitionDuration: props.transitionDuration,
        separateClosePopup: true,
        ...listboxAttrs.value,
        onScrollPassive: onVirtualScrollEvt,
        onBeforeShow: onControlPopupShow,
        onBeforeHide: onMenuBeforeHide,
        onShow: onMenuShow
      }, getAllOptions);
    }
    function onMenuBeforeHide(e) {
      onControlPopupHide(e);
      closeMenu();
    }
    function onMenuShow() {
      setVirtualScrollSize();
    }
    function onDialogFieldFocus(e) {
      stop(e);
      targetRef.value !== null && targetRef.value.focus();
      dialogFieldFocused.value = true;
      window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
    }
    function onDialogFieldBlur(e) {
      stop(e);
      nextTick(() => {
        dialogFieldFocused.value = false;
      });
    }
    function getDialog() {
      const content = [
        h(QField, {
          class: `col-auto ${state.fieldClass.value}`,
          ...innerFieldProps.value,
          for: state.targetUid.value,
          dark: isOptionsDark.value,
          square: true,
          loading: innerLoadingIndicator.value,
          itemAligned: false,
          filled: true,
          stackLabel: inputValue.value.length !== 0,
          ...state.splitAttrs.listeners.value,
          onFocus: onDialogFieldFocus,
          onBlur: onDialogFieldBlur
        }, {
          ...slots,
          rawControl: () => state.getControl(true),
          before: void 0,
          after: void 0
        })
      ];
      menu.value === true && content.push(
        h("div", {
          ref: menuContentRef,
          class: menuContentClass.value + " scroll",
          style: props.popupContentStyle,
          ...listboxAttrs.value,
          onClick: prevent,
          onScrollPassive: onVirtualScrollEvt
        }, getAllOptions())
      );
      return h(QDialog, {
        ref: dialogRef,
        modelValue: dialog.value,
        position: props.useInput === true ? "top" : void 0,
        transitionShow: transitionShowComputed,
        transitionHide: props.transitionHide,
        transitionDuration: props.transitionDuration,
        noRouteDismiss: props.popupNoRouteDismiss,
        onBeforeShow: onControlPopupShow,
        onBeforeHide: onDialogBeforeHide,
        onHide: onDialogHide,
        onShow: onDialogShow
      }, () => h("div", {
        class: "q-select__dialog" + (isOptionsDark.value === true ? " q-select__dialog--dark q-dark" : "") + (dialogFieldFocused.value === true ? " q-select__dialog--focused" : "")
      }, content));
    }
    function onDialogBeforeHide(e) {
      onControlPopupHide(e);
      if (dialogRef.value !== null) {
        dialogRef.value.__updateRefocusTarget(
          state.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")
        );
      }
      state.focused.value = false;
    }
    function onDialogHide(e) {
      hidePopup();
      state.focused.value === false && emit("blur", e);
      resetInputValue();
    }
    function onDialogShow() {
      const el = document.activeElement;
      if ((el === null || el.id !== state.targetUid.value) && targetRef.value !== null && targetRef.value !== el) {
        targetRef.value.focus();
      }
      setVirtualScrollSize();
    }
    function closeMenu() {
      if (dialog.value === true) {
        return;
      }
      optionIndex.value = -1;
      if (menu.value === true) {
        menu.value = false;
      }
      if (state.focused.value === false) {
        if (filterId !== null) {
          clearTimeout(filterId);
          filterId = null;
        }
        if (state.innerLoading.value === true) {
          emit("filterAbort");
          state.innerLoading.value = false;
          innerLoadingIndicator.value = false;
        }
      }
    }
    function showPopup(e) {
      if (state.editable.value !== true) {
        return;
      }
      if (hasDialog === true) {
        state.onControlFocusin(e);
        dialog.value = true;
        nextTick(() => {
          state.focus();
        });
      } else {
        state.focus();
      }
      if (props.onFilter !== void 0) {
        filter(inputValue.value);
      } else if (noOptions.value !== true || slots["no-option"] !== void 0) {
        menu.value = true;
      }
    }
    function hidePopup() {
      dialog.value = false;
      closeMenu();
    }
    function resetInputValue() {
      props.useInput === true && updateInputValue(
        props.multiple !== true && props.fillInput === true && innerValue.value.length !== 0 ? getOptionLabel.value(innerValue.value[0]) || "" : "",
        true,
        true
      );
    }
    function updateMenu(show) {
      let optionIndex2 = -1;
      if (show === true) {
        if (innerValue.value.length !== 0) {
          const val = getOptionValue.value(innerValue.value[0]);
          optionIndex2 = props.options.findIndex((v) => isDeepEqual(getOptionValue.value(v), val));
        }
        localResetVirtualScroll(optionIndex2);
      }
      setOptionIndex(optionIndex2);
    }
    function rerenderMenu(newLength, oldLength) {
      if (menu.value === true && state.innerLoading.value === false) {
        localResetVirtualScroll(-1, true);
        nextTick(() => {
          if (menu.value === true && state.innerLoading.value === false) {
            if (newLength > oldLength) {
              localResetVirtualScroll();
            } else {
              updateMenu(true);
            }
          }
        });
      }
    }
    function updateMenuPosition() {
      if (dialog.value === false && menuRef.value !== null) {
        menuRef.value.updatePosition();
      }
    }
    function onControlPopupShow(e) {
      e !== void 0 && stop(e);
      emit("popupShow", e);
      state.hasPopupOpen = true;
      state.onControlFocusin(e);
    }
    function onControlPopupHide(e) {
      e !== void 0 && stop(e);
      emit("popupHide", e);
      state.hasPopupOpen = false;
      state.onControlFocusout(e);
    }
    function updatePreState() {
      hasDialog = $q.platform.is.mobile !== true && props.behavior !== "dialog" ? false : props.behavior !== "menu" && (props.useInput === true ? slots["no-option"] !== void 0 || props.onFilter !== void 0 || noOptions.value === false : true);
      transitionShowComputed = $q.platform.is.ios === true && hasDialog === true && props.useInput === true ? "fade" : props.transitionShow;
    }
    onBeforeUpdate(updatePreState);
    onUpdated(updateMenuPosition);
    updatePreState();
    onBeforeUnmount(() => {
      filterTimer !== null && clearTimeout(filterTimer);
      inputValueTimer !== null && clearTimeout(inputValueTimer);
    });
    Object.assign(proxy, {
      showPopup,
      hidePopup,
      removeAtIndex,
      add,
      toggleOption,
      getOptionIndex: () => optionIndex.value,
      setOptionIndex,
      moveOptionSelection,
      filter,
      updateMenuPosition,
      updateInputValue,
      isOptionSelected,
      getEmittingOptionValue,
      isOptionDisabled: (...args) => isOptionDisabled.value.apply(null, args) === true,
      getOptionValue: (...args) => getOptionValue.value.apply(null, args),
      getOptionLabel: (...args) => getOptionLabel.value.apply(null, args)
    });
    Object.assign(state, {
      innerValue,
      fieldClass: computed(
        () => `q-select q-field--auto-height q-select--with${props.useInput !== true ? "out" : ""}-input q-select--with${props.useChips !== true ? "out" : ""}-chips q-select--${props.multiple === true ? "multiple" : "single"}`
      ),
      inputRef,
      targetRef,
      hasValue,
      showPopup,
      floatingLabel: computed(
        () => props.hideSelected !== true && hasValue.value === true || typeof inputValue.value === "number" || inputValue.value.length !== 0 || fieldValueIsFilled(props.displayValue)
      ),
      getControlChild: () => {
        if (state.editable.value !== false && (dialog.value === true || noOptions.value !== true || slots["no-option"] !== void 0)) {
          return hasDialog === true ? getDialog() : getMenu();
        } else if (state.hasPopupOpen === true) {
          state.hasPopupOpen = false;
        }
      },
      controlEvents: {
        onFocusin(e) {
          state.onControlFocusin(e);
        },
        onFocusout(e) {
          state.onControlFocusout(e, () => {
            resetInputValue();
            closeMenu();
          });
        },
        onClick(e) {
          prevent(e);
          if (hasDialog !== true && menu.value === true) {
            closeMenu();
            targetRef.value !== null && targetRef.value.focus();
            return;
          }
          showPopup(e);
        }
      },
      getControl: (fromDialog) => {
        const child = getSelection();
        const isTarget = fromDialog === true || dialog.value !== true || hasDialog !== true;
        if (props.useInput === true) {
          child.push(getInput(fromDialog, isTarget));
        } else if (state.editable.value === true) {
          const attrs2 = isTarget === true ? comboboxAttrs.value : void 0;
          child.push(
            h("input", {
              ref: isTarget === true ? targetRef : void 0,
              key: "d_t",
              class: "q-select__focus-target",
              id: isTarget === true ? state.targetUid.value : void 0,
              value: ariaCurrentValue.value,
              readonly: true,
              "data-autofocus": fromDialog === true || props.autofocus === true || void 0,
              ...attrs2,
              onKeydown: onTargetKeydown,
              onKeyup: onTargetKeyup,
              onKeypress: onTargetKeypress
            })
          );
          if (isTarget === true && typeof props.autocomplete === "string" && props.autocomplete.length !== 0) {
            child.push(
              h("input", {
                class: "q-select__autocomplete-input",
                autocomplete: props.autocomplete,
                tabindex: -1,
                onKeyup: onTargetAutocomplete
              })
            );
          }
        }
        if (nameProp.value !== void 0 && props.disable !== true && innerOptionsValue.value.length !== 0) {
          const opts = innerOptionsValue.value.map((value) => h("option", { value, selected: true }));
          child.push(
            h("select", {
              class: "hidden",
              name: nameProp.value,
              multiple: props.multiple
            }, opts)
          );
        }
        const attrs = props.useInput === true || isTarget !== true ? void 0 : state.splitAttrs.attributes.value;
        return h("div", {
          class: "q-field__native row items-center",
          ...attrs,
          ...state.splitAttrs.listeners.value
        }, child);
      },
      getInnerAppend: () => props.loading !== true && innerLoadingIndicator.value !== true && props.hideDropdownIcon !== true ? [
        h(QIcon, {
          class: "q-select__dropdown-icon" + (menu.value === true ? " rotate-180" : ""),
          name: dropdownArrowIcon.value
        })
      ] : null
    });
    return useField(state);
  }
});
export {
  QSelect as Q,
  useVirtualScroll as a,
  commonVirtPropsList as c,
  useVirtualScrollProps as u
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVNlbGVjdC1CMzQ1NHRTSS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjIvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9maWVsZC9RRmllbGQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2NoaXAvUUNoaXAuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL3VzZS12aXJ0dWFsLXNjcm9sbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4yL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2VsZWN0L1FTZWxlY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZUZpZWxkLCB7IHVzZUZpZWxkU3RhdGUsIHVzZUZpZWxkUHJvcHMsIHVzZUZpZWxkRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1maWVsZC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRRmllbGQnLFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VGaWVsZFByb3BzLFxuXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbGFiZWwnXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiB1c2VGaWVsZEVtaXRzLFxuXG4gIHNldHVwICgpIHtcbiAgICByZXR1cm4gdXNlRmllbGQoXG4gICAgICB1c2VGaWVsZFN0YXRlKHtcbiAgICAgICAgcmVxdWlyZWRGb3JBdHRyOiBmYWxzZSxcbiAgICAgICAgdGFnUHJvcDogdHJ1ZVxuICAgICAgfSlcbiAgICApXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcblxuaW1wb3J0IFJpcHBsZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3JpcHBsZS9SaXBwbGUuanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgdXNlU2l6ZSwgeyB1c2VTaXplUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1zaXplLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90U2FmZWx5LCBoRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U2l6ZXMgPSB7XG4gIHhzOiA4LFxuICBzbTogMTAsXG4gIG1kOiAxNCxcbiAgbGc6IDIwLFxuICB4bDogMjRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FDaGlwJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VTaXplUHJvcHMsXG5cbiAgICBkZW5zZTogQm9vbGVhbixcblxuICAgIGljb246IFN0cmluZyxcbiAgICBpY29uUmlnaHQ6IFN0cmluZyxcbiAgICBpY29uUmVtb3ZlOiBTdHJpbmcsXG4gICAgaWNvblNlbGVjdGVkOiBTdHJpbmcsXG4gICAgbGFiZWw6IFsgU3RyaW5nLCBOdW1iZXIgXSxcblxuICAgIGNvbG9yOiBTdHJpbmcsXG4gICAgdGV4dENvbG9yOiBTdHJpbmcsXG5cbiAgICBtb2RlbFZhbHVlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgc2VsZWN0ZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcblxuICAgIHNxdWFyZTogQm9vbGVhbixcbiAgICBvdXRsaW5lOiBCb29sZWFuLFxuICAgIGNsaWNrYWJsZTogQm9vbGVhbixcbiAgICByZW1vdmFibGU6IEJvb2xlYW4sXG5cbiAgICByZW1vdmVBcmlhTGFiZWw6IFN0cmluZyxcblxuICAgIHRhYmluZGV4OiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgZGlzYWJsZTogQm9vbGVhbixcblxuICAgIHJpcHBsZToge1xuICAgICAgdHlwZTogWyBCb29sZWFuLCBPYmplY3QgXSxcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3VwZGF0ZTptb2RlbFZhbHVlJywgJ3VwZGF0ZTpzZWxlY3RlZCcsICdyZW1vdmUnLCAnY2xpY2snIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcbiAgICBjb25zdCBzaXplU3R5bGUgPSB1c2VTaXplKHByb3BzLCBkZWZhdWx0U2l6ZXMpXG5cbiAgICBjb25zdCBoYXNMZWZ0SWNvbiA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnNlbGVjdGVkID09PSB0cnVlIHx8IHByb3BzLmljb24gIT09IHZvaWQgMClcblxuICAgIGNvbnN0IGxlZnRJY29uID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuc2VsZWN0ZWQgPT09IHRydWVcbiAgICAgICAgPyBwcm9wcy5pY29uU2VsZWN0ZWQgfHwgJHEuaWNvblNldC5jaGlwLnNlbGVjdGVkXG4gICAgICAgIDogcHJvcHMuaWNvblxuICAgICkpXG5cbiAgICBjb25zdCByZW1vdmVJY29uID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuaWNvblJlbW92ZSB8fCAkcS5pY29uU2V0LmNoaXAucmVtb3ZlKVxuXG4gICAgY29uc3QgaXNDbGlja2FibGUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMuZGlzYWJsZSA9PT0gZmFsc2VcbiAgICAgICYmIChwcm9wcy5jbGlja2FibGUgPT09IHRydWUgfHwgcHJvcHMuc2VsZWN0ZWQgIT09IG51bGwpXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBwcm9wcy5vdXRsaW5lID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMuY29sb3IgfHwgcHJvcHMudGV4dENvbG9yXG4gICAgICAgIDogcHJvcHMudGV4dENvbG9yXG5cbiAgICAgIHJldHVybiAncS1jaGlwIHJvdyBpbmxpbmUgbm8td3JhcCBpdGVtcy1jZW50ZXInXG4gICAgICAgICsgKHByb3BzLm91dGxpbmUgPT09IGZhbHNlICYmIHByb3BzLmNvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLmNvbG9yIH1gIDogJycpXG4gICAgICAgICsgKHRleHQgPyBgIHRleHQtJHsgdGV4dCB9IHEtY2hpcC0tY29sb3JlZGAgOiAnJylcbiAgICAgICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJycpXG4gICAgICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLWNoaXAtLWRlbnNlJyA6ICcnKVxuICAgICAgICArIChwcm9wcy5vdXRsaW5lID09PSB0cnVlID8gJyBxLWNoaXAtLW91dGxpbmUnIDogJycpXG4gICAgICAgICsgKHByb3BzLnNlbGVjdGVkID09PSB0cnVlID8gJyBxLWNoaXAtLXNlbGVjdGVkJyA6ICcnKVxuICAgICAgICArIChpc0NsaWNrYWJsZS52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1jaGlwLS1jbGlja2FibGUgY3Vyc29yLXBvaW50ZXIgbm9uLXNlbGVjdGFibGUgcS1ob3ZlcmFibGUnIDogJycpXG4gICAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS1jaGlwLS1zcXVhcmUnIDogJycpXG4gICAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1jaGlwLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICB9KVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNoaXAgPSBwcm9wcy5kaXNhYmxlID09PSB0cnVlXG4gICAgICAgID8geyB0YWJpbmRleDogLTEsICdhcmlhLWRpc2FibGVkJzogJ3RydWUnIH1cbiAgICAgICAgOiB7IHRhYmluZGV4OiBwcm9wcy50YWJpbmRleCB8fCAwIH1cbiAgICAgIGNvbnN0IHJlbW92ZSA9IHtcbiAgICAgICAgLi4uY2hpcCxcbiAgICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICdmYWxzZScsXG4gICAgICAgICdhcmlhLWxhYmVsJzogcHJvcHMucmVtb3ZlQXJpYUxhYmVsIHx8ICRxLmxhbmcubGFiZWwucmVtb3ZlXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGNoaXAsIHJlbW92ZSB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIG9uS2V5dXAgKGUpIHtcbiAgICAgIGUua2V5Q29kZSA9PT0gMTMgLyogRU5URVIgKi8gJiYgb25DbGljayhlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2xpY2sgKGUpIHtcbiAgICAgIGlmICghcHJvcHMuZGlzYWJsZSkge1xuICAgICAgICBlbWl0KCd1cGRhdGU6c2VsZWN0ZWQnLCAhcHJvcHMuc2VsZWN0ZWQpXG4gICAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlbW92ZSAoZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gdm9pZCAwIHx8IGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgICAgaWYgKHByb3BzLmRpc2FibGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBmYWxzZSlcbiAgICAgICAgICBlbWl0KCdyZW1vdmUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IFtdXG5cbiAgICAgIGlzQ2xpY2thYmxlLnZhbHVlID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWZvY3VzLWhlbHBlcicgfSlcbiAgICAgIClcblxuICAgICAgaGFzTGVmdEljb24udmFsdWUgPT09IHRydWUgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgIGNsYXNzOiAncS1jaGlwX19pY29uIHEtY2hpcF9faWNvbi0tbGVmdCcsXG4gICAgICAgICAgbmFtZTogbGVmdEljb24udmFsdWVcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgY29uc3QgbGFiZWwgPSBwcm9wcy5sYWJlbCAhPT0gdm9pZCAwXG4gICAgICAgID8gWyBoKCdkaXYnLCB7IGNsYXNzOiAnZWxsaXBzaXMnIH0sIFsgcHJvcHMubGFiZWwgXSkgXVxuICAgICAgICA6IHZvaWQgMFxuXG4gICAgICBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWNoaXBfX2NvbnRlbnQgY29sIHJvdyBuby13cmFwIGl0ZW1zLWNlbnRlciBxLWFuY2hvci0tc2tpcCdcbiAgICAgICAgfSwgaE1lcmdlU2xvdFNhZmVseShzbG90cy5kZWZhdWx0LCBsYWJlbCkpXG4gICAgICApXG5cbiAgICAgIHByb3BzLmljb25SaWdodCAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWNoaXBfX2ljb24gcS1jaGlwX19pY29uLS1yaWdodCcsXG4gICAgICAgICAgbmFtZTogcHJvcHMuaWNvblJpZ2h0XG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHByb3BzLnJlbW92YWJsZSA9PT0gdHJ1ZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWNoaXBfX2ljb24gcS1jaGlwX19pY29uLS1yZW1vdmUgY3Vyc29yLXBvaW50ZXInLFxuICAgICAgICAgIG5hbWU6IHJlbW92ZUljb24udmFsdWUsXG4gICAgICAgICAgLi4uYXR0cmlidXRlcy52YWx1ZS5yZW1vdmUsXG4gICAgICAgICAgb25DbGljazogb25SZW1vdmUsXG4gICAgICAgICAgb25LZXl1cDogb25SZW1vdmVcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5tb2RlbFZhbHVlID09PSBmYWxzZSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc2l6ZVN0eWxlLnZhbHVlXG4gICAgICB9XG5cbiAgICAgIGlzQ2xpY2thYmxlLnZhbHVlID09PSB0cnVlICYmIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGF0dHJpYnV0ZXMudmFsdWUuY2hpcCxcbiAgICAgICAgeyBvbkNsaWNrLCBvbktleXVwIH1cbiAgICAgIClcblxuICAgICAgcmV0dXJuIGhEaXIoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBkYXRhLFxuICAgICAgICBnZXRDb250ZW50KCksXG4gICAgICAgICdyaXBwbGUnLFxuICAgICAgICBwcm9wcy5yaXBwbGUgIT09IGZhbHNlICYmIHByb3BzLmRpc2FibGUgIT09IHRydWUsXG4gICAgICAgICgpID0+IFsgWyBSaXBwbGUsIHByb3BzLnJpcHBsZSBdIF1cbiAgICAgIClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIG9uQmVmb3JlTW91bnQsIG9uQmVmb3JlVW5tb3VudCwgbmV4dFRpY2ssIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uL3V0aWxzL2RlYm91bmNlLmpzJ1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgcnRsSGFzU2Nyb2xsQnVnIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9ydGwuanMnXG5cbmNvbnN0IGFnZ0J1Y2tldFNpemUgPSAxMDAwXG5cbmNvbnN0IHNjcm9sbFRvRWRnZXMgPSBbXG4gICdzdGFydCcsXG4gICdjZW50ZXInLFxuICAnZW5kJyxcbiAgJ3N0YXJ0LWZvcmNlJyxcbiAgJ2NlbnRlci1mb3JjZScsXG4gICdlbmQtZm9yY2UnXG5dXG5cbmNvbnN0IGZpbHRlclByb3RvID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuXG5jb25zdCBzZXRPdmVyZmxvd0FuY2hvciA9IF9fUVVBU0FSX1NTUl9fIHx8IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLm92ZXJmbG93QW5jaG9yID09PSB2b2lkIDBcbiAgPyBub29wXG4gIDogZnVuY3Rpb24gKGNvbnRlbnRFbCwgaW5kZXgpIHtcbiAgICBpZiAoY29udGVudEVsID09PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoY29udGVudEVsLl9xT3ZlcmZsb3dBbmltYXRpb25GcmFtZSAhPT0gdm9pZCAwKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShjb250ZW50RWwuX3FPdmVyZmxvd0FuaW1hdGlvbkZyYW1lKVxuICAgIH1cblxuICAgIGNvbnRlbnRFbC5fcU92ZXJmbG93QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRlbnRFbCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29udGVudEVsLl9xT3ZlcmZsb3dBbmltYXRpb25GcmFtZSA9IHZvaWQgMFxuICAgICAgY29uc3QgY2hpbGRyZW4gPSBjb250ZW50RWwuY2hpbGRyZW4gfHwgW11cblxuICAgICAgZmlsdGVyUHJvdG9cbiAgICAgICAgLmNhbGwoY2hpbGRyZW4sIGVsID0+IGVsLmRhdGFzZXQgJiYgZWwuZGF0YXNldC5xVnNBbmNob3IgIT09IHZvaWQgMClcbiAgICAgICAgLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgIGRlbGV0ZSBlbC5kYXRhc2V0LnFWc0FuY2hvclxuICAgICAgICB9KVxuXG4gICAgICBjb25zdCBlbCA9IGNoaWxkcmVuWyBpbmRleCBdXG5cbiAgICAgIGlmIChlbCAmJiBlbC5kYXRhc2V0KSB7XG4gICAgICAgIGVsLmRhdGFzZXQucVZzQW5jaG9yID0gJydcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbmZ1bmN0aW9uIHN1bUZuIChhY2MsIGgpIHtcbiAgcmV0dXJuIGFjYyArIGhcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsRGV0YWlscyAoXG4gIHBhcmVudCxcbiAgY2hpbGQsXG4gIGJlZm9yZVJlZixcbiAgYWZ0ZXJSZWYsXG4gIGhvcml6b250YWwsXG4gIHJ0bCxcbiAgc3RpY2t5U3RhcnQsXG4gIHN0aWNreUVuZFxuKSB7XG4gIGNvbnN0XG4gICAgcGFyZW50Q2FsYyA9IHBhcmVudCA9PT0gd2luZG93ID8gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBwYXJlbnQsXG4gICAgcHJvcEVsU2l6ZSA9IGhvcml6b250YWwgPT09IHRydWUgPyAnb2Zmc2V0V2lkdGgnIDogJ29mZnNldEhlaWdodCcsXG4gICAgZGV0YWlscyA9IHtcbiAgICAgIHNjcm9sbFN0YXJ0OiAwLFxuICAgICAgc2Nyb2xsVmlld1NpemU6IC1zdGlja3lTdGFydCAtIHN0aWNreUVuZCxcbiAgICAgIHNjcm9sbE1heFNpemU6IDAsXG4gICAgICBvZmZzZXRTdGFydDogLXN0aWNreVN0YXJ0LFxuICAgICAgb2Zmc2V0RW5kOiAtc3RpY2t5RW5kXG4gICAgfVxuXG4gIGlmIChob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgaWYgKHBhcmVudCA9PT0gd2luZG93KSB7XG4gICAgICBkZXRhaWxzLnNjcm9sbFN0YXJ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCB8fCAwXG4gICAgICBkZXRhaWxzLnNjcm9sbFZpZXdTaXplICs9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRldGFpbHMuc2Nyb2xsU3RhcnQgPSBwYXJlbnRDYWxjLnNjcm9sbExlZnRcbiAgICAgIGRldGFpbHMuc2Nyb2xsVmlld1NpemUgKz0gcGFyZW50Q2FsYy5jbGllbnRXaWR0aFxuICAgIH1cbiAgICBkZXRhaWxzLnNjcm9sbE1heFNpemUgPSBwYXJlbnRDYWxjLnNjcm9sbFdpZHRoXG5cbiAgICBpZiAocnRsID09PSB0cnVlKSB7XG4gICAgICBkZXRhaWxzLnNjcm9sbFN0YXJ0ID0gKHJ0bEhhc1Njcm9sbEJ1ZyA9PT0gdHJ1ZSA/IGRldGFpbHMuc2Nyb2xsTWF4U2l6ZSAtIGRldGFpbHMuc2Nyb2xsVmlld1NpemUgOiAwKSAtIGRldGFpbHMuc2Nyb2xsU3RhcnRcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKHBhcmVudCA9PT0gd2luZG93KSB7XG4gICAgICBkZXRhaWxzLnNjcm9sbFN0YXJ0ID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDBcbiAgICAgIGRldGFpbHMuc2Nyb2xsVmlld1NpemUgKz0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRldGFpbHMuc2Nyb2xsU3RhcnQgPSBwYXJlbnRDYWxjLnNjcm9sbFRvcFxuICAgICAgZGV0YWlscy5zY3JvbGxWaWV3U2l6ZSArPSBwYXJlbnRDYWxjLmNsaWVudEhlaWdodFxuICAgIH1cbiAgICBkZXRhaWxzLnNjcm9sbE1heFNpemUgPSBwYXJlbnRDYWxjLnNjcm9sbEhlaWdodFxuICB9XG5cbiAgaWYgKGJlZm9yZVJlZiAhPT0gbnVsbCkge1xuICAgIGZvciAobGV0IGVsID0gYmVmb3JlUmVmLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7IGVsICE9PSBudWxsOyBlbCA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3EtdmlydHVhbC1zY3JvbGwtLXNraXAnKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGV0YWlscy5vZmZzZXRTdGFydCArPSBlbFsgcHJvcEVsU2l6ZSBdXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFmdGVyUmVmICE9PSBudWxsKSB7XG4gICAgZm9yIChsZXQgZWwgPSBhZnRlclJlZi5uZXh0RWxlbWVudFNpYmxpbmc7IGVsICE9PSBudWxsOyBlbCA9IGVsLm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygncS12aXJ0dWFsLXNjcm9sbC0tc2tpcCcpID09PSBmYWxzZSkge1xuICAgICAgICBkZXRhaWxzLm9mZnNldEVuZCArPSBlbFsgcHJvcEVsU2l6ZSBdXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGNoaWxkICE9PSBwYXJlbnQpIHtcbiAgICBjb25zdFxuICAgICAgcGFyZW50UmVjdCA9IHBhcmVudENhbGMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjaGlsZFJlY3QgPSBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgaWYgKGhvcml6b250YWwgPT09IHRydWUpIHtcbiAgICAgIGRldGFpbHMub2Zmc2V0U3RhcnQgKz0gY2hpbGRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnRcbiAgICAgIGRldGFpbHMub2Zmc2V0RW5kIC09IGNoaWxkUmVjdC53aWR0aFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRldGFpbHMub2Zmc2V0U3RhcnQgKz0gY2hpbGRSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wXG4gICAgICBkZXRhaWxzLm9mZnNldEVuZCAtPSBjaGlsZFJlY3QuaGVpZ2h0XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudCAhPT0gd2luZG93KSB7XG4gICAgICBkZXRhaWxzLm9mZnNldFN0YXJ0ICs9IGRldGFpbHMuc2Nyb2xsU3RhcnRcbiAgICB9XG4gICAgZGV0YWlscy5vZmZzZXRFbmQgKz0gZGV0YWlscy5zY3JvbGxNYXhTaXplIC0gZGV0YWlscy5vZmZzZXRTdGFydFxuICB9XG5cbiAgcmV0dXJuIGRldGFpbHNcbn1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsIChwYXJlbnQsIHNjcm9sbCwgaG9yaXpvbnRhbCwgcnRsKSB7XG4gIGlmIChzY3JvbGwgPT09ICdlbmQnKSB7XG4gICAgc2Nyb2xsID0gKHBhcmVudCA9PT0gd2luZG93ID8gZG9jdW1lbnQuYm9keSA6IHBhcmVudClbXG4gICAgICBob3Jpem9udGFsID09PSB0cnVlID8gJ3Njcm9sbFdpZHRoJyA6ICdzY3JvbGxIZWlnaHQnXG4gICAgXVxuICB9XG5cbiAgaWYgKHBhcmVudCA9PT0gd2luZG93KSB7XG4gICAgaWYgKGhvcml6b250YWwgPT09IHRydWUpIHtcbiAgICAgIGlmIChydGwgPT09IHRydWUpIHtcbiAgICAgICAgc2Nyb2xsID0gKHJ0bEhhc1Njcm9sbEJ1ZyA9PT0gdHJ1ZSA/IGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggOiAwKSAtIHNjcm9sbFxuICAgICAgfVxuICAgICAgd2luZG93LnNjcm9sbFRvKHNjcm9sbCwgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgd2luZG93LnNjcm9sbFRvKHdpbmRvdy5wYWdlWE9mZnNldCB8fCB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgMCwgc2Nyb2xsKVxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgaWYgKHJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgc2Nyb2xsID0gKHJ0bEhhc1Njcm9sbEJ1ZyA9PT0gdHJ1ZSA/IHBhcmVudC5zY3JvbGxXaWR0aCAtIHBhcmVudC5vZmZzZXRXaWR0aCA6IDApIC0gc2Nyb2xsXG4gICAgfVxuICAgIHBhcmVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsXG4gIH1cbiAgZWxzZSB7XG4gICAgcGFyZW50LnNjcm9sbFRvcCA9IHNjcm9sbFxuICB9XG59XG5cbmZ1bmN0aW9uIHN1bVNpemUgKHNpemVBZ2csIHNpemUsIGZyb20sIHRvKSB7XG4gIGlmIChmcm9tID49IHRvKSB7IHJldHVybiAwIH1cblxuICBjb25zdFxuICAgIGxhc3RUbyA9IHNpemUubGVuZ3RoLFxuICAgIGZyb21BZ2cgPSBNYXRoLmZsb29yKGZyb20gLyBhZ2dCdWNrZXRTaXplKSxcbiAgICB0b0FnZyA9IE1hdGguZmxvb3IoKHRvIC0gMSkgLyBhZ2dCdWNrZXRTaXplKSArIDFcblxuICBsZXQgdG90YWwgPSBzaXplQWdnLnNsaWNlKGZyb21BZ2csIHRvQWdnKS5yZWR1Y2Uoc3VtRm4sIDApXG5cbiAgaWYgKGZyb20gJSBhZ2dCdWNrZXRTaXplICE9PSAwKSB7XG4gICAgdG90YWwgLT0gc2l6ZS5zbGljZShmcm9tQWdnICogYWdnQnVja2V0U2l6ZSwgZnJvbSkucmVkdWNlKHN1bUZuLCAwKVxuICB9XG4gIGlmICh0byAlIGFnZ0J1Y2tldFNpemUgIT09IDAgJiYgdG8gIT09IGxhc3RUbykge1xuICAgIHRvdGFsIC09IHNpemUuc2xpY2UodG8sIHRvQWdnICogYWdnQnVja2V0U2l6ZSkucmVkdWNlKHN1bUZuLCAwKVxuICB9XG5cbiAgcmV0dXJuIHRvdGFsXG59XG5cbmNvbnN0IGNvbW1vblZpcnRTY3JvbGxQcm9wcyA9IHtcbiAgdmlydHVhbFNjcm9sbFNsaWNlU2l6ZToge1xuICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICBkZWZhdWx0OiBudWxsXG4gIH0sXG5cbiAgdmlydHVhbFNjcm9sbFNsaWNlUmF0aW9CZWZvcmU6IHtcbiAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgZGVmYXVsdDogMVxuICB9LFxuXG4gIHZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQWZ0ZXI6IHtcbiAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgZGVmYXVsdDogMVxuICB9LFxuXG4gIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZToge1xuICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICBkZWZhdWx0OiAyNFxuICB9LFxuXG4gIHZpcnR1YWxTY3JvbGxTdGlja3lTaXplU3RhcnQ6IHtcbiAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgZGVmYXVsdDogMFxuICB9LFxuXG4gIHZpcnR1YWxTY3JvbGxTdGlja3lTaXplRW5kOiB7XG4gICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgIGRlZmF1bHQ6IDBcbiAgfSxcblxuICB0YWJsZUNvbHNwYW46IFsgTnVtYmVyLCBTdHJpbmcgXVxufVxuXG5leHBvcnQgY29uc3QgY29tbW9uVmlydFByb3BzTGlzdCA9IE9iamVjdC5rZXlzKGNvbW1vblZpcnRTY3JvbGxQcm9wcylcblxuZXhwb3J0IGNvbnN0IHVzZVZpcnR1YWxTY3JvbGxQcm9wcyA9IHtcbiAgdmlydHVhbFNjcm9sbEhvcml6b250YWw6IEJvb2xlYW4sXG4gIG9uVmlydHVhbFNjcm9sbDogRnVuY3Rpb24sXG4gIC4uLmNvbW1vblZpcnRTY3JvbGxQcm9wc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVmlydHVhbFNjcm9sbCAoe1xuICB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLCBnZXRWaXJ0dWFsU2Nyb2xsVGFyZ2V0LCBnZXRWaXJ0dWFsU2Nyb2xsRWwsXG4gIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkIC8vIG9wdGlvbmFsXG59KSB7XG4gIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eSB9ID0gdm1cbiAgY29uc3QgeyAkcSB9ID0gcHJveHlcblxuICBsZXQgcHJldlNjcm9sbFN0YXJ0LCBwcmV2VG9JbmRleCwgbG9jYWxTY3JvbGxWaWV3U2l6ZSwgdmlydHVhbFNjcm9sbFNpemVzQWdnID0gW10sIHZpcnR1YWxTY3JvbGxTaXplc1xuXG4gIGNvbnN0IHZpcnR1YWxTY3JvbGxQYWRkaW5nQmVmb3JlID0gcmVmKDApXG4gIGNvbnN0IHZpcnR1YWxTY3JvbGxQYWRkaW5nQWZ0ZXIgPSByZWYoMClcbiAgY29uc3QgdmlydHVhbFNjcm9sbFNsaWNlU2l6ZUNvbXB1dGVkID0gcmVmKHt9KVxuXG4gIGNvbnN0IGJlZm9yZVJlZiA9IHJlZihudWxsKVxuICBjb25zdCBhZnRlclJlZiA9IHJlZihudWxsKVxuICBjb25zdCBjb250ZW50UmVmID0gcmVmKG51bGwpXG5cbiAgY29uc3QgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UgPSByZWYoeyBmcm9tOiAwLCB0bzogMCB9KVxuXG4gIGNvbnN0IGNvbHNwYW5BdHRyID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnRhYmxlQ29sc3BhbiAhPT0gdm9pZCAwID8gcHJvcHMudGFibGVDb2xzcGFuIDogMTAwKSlcblxuICBpZiAodmlydHVhbFNjcm9sbEl0ZW1TaXplQ29tcHV0ZWQgPT09IHZvaWQgMCkge1xuICAgIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudmlydHVhbFNjcm9sbEl0ZW1TaXplKVxuICB9XG5cbiAgY29uc3QgbmVlZHNSZXNldCA9IGNvbXB1dGVkKCgpID0+IHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkLnZhbHVlICsgJzsnICsgcHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwpXG5cbiAgY29uc3QgbmVlZHNTbGljZVJlY2FsYyA9IGNvbXB1dGVkKCgpID0+XG4gICAgbmVlZHNSZXNldC52YWx1ZSArICc7JyArIHByb3BzLnZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQmVmb3JlICsgJzsnICsgcHJvcHMudmlydHVhbFNjcm9sbFNsaWNlUmF0aW9BZnRlclxuICApXG5cbiAgd2F0Y2gobmVlZHNTbGljZVJlY2FsYywgKCkgPT4geyBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZSgpIH0pXG4gIHdhdGNoKG5lZWRzUmVzZXQsIHJlc2V0KVxuXG4gIGZ1bmN0aW9uIHJlc2V0ICgpIHtcbiAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbChwcmV2VG9JbmRleCwgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZnJlc2ggKHRvSW5kZXgpIHtcbiAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCh0b0luZGV4ID09PSB2b2lkIDAgPyBwcmV2VG9JbmRleCA6IHRvSW5kZXgpXG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGxUbyAodG9JbmRleCwgZWRnZSkge1xuICAgIGNvbnN0IHNjcm9sbEVsID0gZ2V0VmlydHVhbFNjcm9sbFRhcmdldCgpXG5cbiAgICBpZiAoc2Nyb2xsRWwgPT09IHZvaWQgMCB8fCBzY3JvbGxFbCA9PT0gbnVsbCB8fCBzY3JvbGxFbC5ub2RlVHlwZSA9PT0gOCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsRGV0YWlscyA9IGdldFNjcm9sbERldGFpbHMoXG4gICAgICBzY3JvbGxFbCxcbiAgICAgIGdldFZpcnR1YWxTY3JvbGxFbCgpLFxuICAgICAgYmVmb3JlUmVmLnZhbHVlLFxuICAgICAgYWZ0ZXJSZWYudmFsdWUsXG4gICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbCxcbiAgICAgICRxLmxhbmcucnRsLFxuICAgICAgcHJvcHMudmlydHVhbFNjcm9sbFN0aWNreVNpemVTdGFydCxcbiAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxTdGlja3lTaXplRW5kXG4gICAgKVxuXG4gICAgbG9jYWxTY3JvbGxWaWV3U2l6ZSAhPT0gc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZSAmJiBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZShzY3JvbGxEZXRhaWxzLnNjcm9sbFZpZXdTaXplKVxuXG4gICAgc2V0VmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UoXG4gICAgICBzY3JvbGxFbCxcbiAgICAgIHNjcm9sbERldGFpbHMsXG4gICAgICBNYXRoLm1pbih2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlIC0gMSwgTWF0aC5tYXgoMCwgcGFyc2VJbnQodG9JbmRleCwgMTApIHx8IDApKSxcbiAgICAgIDAsXG4gICAgICBzY3JvbGxUb0VkZ2VzLmluZGV4T2YoZWRnZSkgIT09IC0xID8gZWRnZSA6IChwcmV2VG9JbmRleCAhPT0gLTEgJiYgdG9JbmRleCA+IHByZXZUb0luZGV4ID8gJ2VuZCcgOiAnc3RhcnQnKVxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvY2FsT25WaXJ0dWFsU2Nyb2xsRXZ0ICgpIHtcbiAgICBjb25zdCBzY3JvbGxFbCA9IGdldFZpcnR1YWxTY3JvbGxUYXJnZXQoKVxuXG4gICAgaWYgKHNjcm9sbEVsID09PSB2b2lkIDAgfHwgc2Nyb2xsRWwgPT09IG51bGwgfHwgc2Nyb2xsRWwubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0XG4gICAgICBzY3JvbGxEZXRhaWxzID0gZ2V0U2Nyb2xsRGV0YWlscyhcbiAgICAgICAgc2Nyb2xsRWwsXG4gICAgICAgIGdldFZpcnR1YWxTY3JvbGxFbCgpLFxuICAgICAgICBiZWZvcmVSZWYudmFsdWUsXG4gICAgICAgIGFmdGVyUmVmLnZhbHVlLFxuICAgICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbCxcbiAgICAgICAgJHEubGFuZy5ydGwsXG4gICAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxTdGlja3lTaXplU3RhcnQsXG4gICAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxTdGlja3lTaXplRW5kXG4gICAgICApLFxuICAgICAgbGlzdExhc3RJbmRleCA9IHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUgLSAxLFxuICAgICAgbGlzdEVuZE9mZnNldCA9IHNjcm9sbERldGFpbHMuc2Nyb2xsTWF4U2l6ZSAtIHNjcm9sbERldGFpbHMub2Zmc2V0U3RhcnQgLSBzY3JvbGxEZXRhaWxzLm9mZnNldEVuZCAtIHZpcnR1YWxTY3JvbGxQYWRkaW5nQWZ0ZXIudmFsdWVcblxuICAgIGlmIChwcmV2U2Nyb2xsU3RhcnQgPT09IHNjcm9sbERldGFpbHMuc2Nyb2xsU3RhcnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzY3JvbGxEZXRhaWxzLnNjcm9sbE1heFNpemUgPD0gMCkge1xuICAgICAgc2V0VmlydHVhbFNjcm9sbFNsaWNlUmFuZ2Uoc2Nyb2xsRWwsIHNjcm9sbERldGFpbHMsIDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsb2NhbFNjcm9sbFZpZXdTaXplICE9PSBzY3JvbGxEZXRhaWxzLnNjcm9sbFZpZXdTaXplICYmIHNldFZpcnR1YWxTY3JvbGxTaXplKHNjcm9sbERldGFpbHMuc2Nyb2xsVmlld1NpemUpXG5cbiAgICB1cGRhdGVWaXJ0dWFsU2Nyb2xsU2l6ZXModmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSlcblxuICAgIGNvbnN0IHNjcm9sbE1heFN0YXJ0ID0gTWF0aC5mbG9vcihzY3JvbGxEZXRhaWxzLnNjcm9sbE1heFNpemVcbiAgICAgIC0gTWF0aC5tYXgoc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZSwgc2Nyb2xsRGV0YWlscy5vZmZzZXRFbmQpXG4gICAgICAtIE1hdGgubWluKHZpcnR1YWxTY3JvbGxTaXplc1sgbGlzdExhc3RJbmRleCBdLCBzY3JvbGxEZXRhaWxzLnNjcm9sbFZpZXdTaXplIC8gMikpXG5cbiAgICBpZiAoc2Nyb2xsTWF4U3RhcnQgPiAwICYmIE1hdGguY2VpbChzY3JvbGxEZXRhaWxzLnNjcm9sbFN0YXJ0KSA+PSBzY3JvbGxNYXhTdGFydCkge1xuICAgICAgc2V0VmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UoXG4gICAgICAgIHNjcm9sbEVsLFxuICAgICAgICBzY3JvbGxEZXRhaWxzLFxuICAgICAgICBsaXN0TGFzdEluZGV4LFxuICAgICAgICBzY3JvbGxEZXRhaWxzLnNjcm9sbE1heFNpemUgLSBzY3JvbGxEZXRhaWxzLm9mZnNldEVuZCAtIHZpcnR1YWxTY3JvbGxTaXplc0FnZy5yZWR1Y2Uoc3VtRm4sIDApXG4gICAgICApXG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldFxuICAgICAgdG9JbmRleCA9IDAsXG4gICAgICBsaXN0T2Zmc2V0ID0gc2Nyb2xsRGV0YWlscy5zY3JvbGxTdGFydCAtIHNjcm9sbERldGFpbHMub2Zmc2V0U3RhcnQsXG4gICAgICBvZmZzZXQgPSBsaXN0T2Zmc2V0XG5cbiAgICBpZiAobGlzdE9mZnNldCA8PSBsaXN0RW5kT2Zmc2V0ICYmIGxpc3RPZmZzZXQgKyBzY3JvbGxEZXRhaWxzLnNjcm9sbFZpZXdTaXplID49IHZpcnR1YWxTY3JvbGxQYWRkaW5nQmVmb3JlLnZhbHVlKSB7XG4gICAgICBsaXN0T2Zmc2V0IC09IHZpcnR1YWxTY3JvbGxQYWRkaW5nQmVmb3JlLnZhbHVlXG4gICAgICB0b0luZGV4ID0gdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbVxuICAgICAgb2Zmc2V0ID0gbGlzdE9mZnNldFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBsaXN0T2Zmc2V0ID49IHZpcnR1YWxTY3JvbGxTaXplc0FnZ1sgaiBdICYmIHRvSW5kZXggPCBsaXN0TGFzdEluZGV4OyBqKyspIHtcbiAgICAgICAgbGlzdE9mZnNldCAtPSB2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2dbIGogXVxuICAgICAgICB0b0luZGV4ICs9IGFnZ0J1Y2tldFNpemVcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aGlsZSAobGlzdE9mZnNldCA+IDAgJiYgdG9JbmRleCA8IGxpc3RMYXN0SW5kZXgpIHtcbiAgICAgIGxpc3RPZmZzZXQgLT0gdmlydHVhbFNjcm9sbFNpemVzWyB0b0luZGV4IF1cbiAgICAgIGlmIChsaXN0T2Zmc2V0ID4gLXNjcm9sbERldGFpbHMuc2Nyb2xsVmlld1NpemUpIHtcbiAgICAgICAgdG9JbmRleCsrXG4gICAgICAgIG9mZnNldCA9IGxpc3RPZmZzZXRcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvZmZzZXQgPSB2aXJ0dWFsU2Nyb2xsU2l6ZXNbIHRvSW5kZXggXSArIGxpc3RPZmZzZXRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRWaXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZShcbiAgICAgIHNjcm9sbEVsLFxuICAgICAgc2Nyb2xsRGV0YWlscyxcbiAgICAgIHRvSW5kZXgsXG4gICAgICBvZmZzZXRcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBzZXRWaXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZSAoc2Nyb2xsRWwsIHNjcm9sbERldGFpbHMsIHRvSW5kZXgsIG9mZnNldCwgYWxpZ24pIHtcbiAgICBjb25zdCBhbGlnbkZvcmNlID0gdHlwZW9mIGFsaWduID09PSAnc3RyaW5nJyAmJiBhbGlnbi5pbmRleE9mKCctZm9yY2UnKSAhPT0gLTFcbiAgICBjb25zdCBhbGlnbkVuZCA9IGFsaWduRm9yY2UgPT09IHRydWUgPyBhbGlnbi5yZXBsYWNlKCctZm9yY2UnLCAnJykgOiBhbGlnblxuICAgIGNvbnN0IGFsaWduUmFuZ2UgPSBhbGlnbkVuZCAhPT0gdm9pZCAwID8gYWxpZ25FbmQgOiAnc3RhcnQnXG5cbiAgICBsZXRcbiAgICAgIGZyb20gPSBNYXRoLm1heCgwLCB0b0luZGV4IC0gdmlydHVhbFNjcm9sbFNsaWNlU2l6ZUNvbXB1dGVkLnZhbHVlWyBhbGlnblJhbmdlIF0pLFxuICAgICAgdG8gPSBmcm9tICsgdmlydHVhbFNjcm9sbFNsaWNlU2l6ZUNvbXB1dGVkLnZhbHVlLnRvdGFsXG5cbiAgICBpZiAodG8gPiB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlKSB7XG4gICAgICB0byA9IHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWVcbiAgICAgIGZyb20gPSBNYXRoLm1heCgwLCB0byAtIHZpcnR1YWxTY3JvbGxTbGljZVNpemVDb21wdXRlZC52YWx1ZS50b3RhbClcbiAgICB9XG5cbiAgICBwcmV2U2Nyb2xsU3RhcnQgPSBzY3JvbGxEZXRhaWxzLnNjcm9sbFN0YXJ0XG5cbiAgICBjb25zdCByYW5nZUNoYW5nZWQgPSBmcm9tICE9PSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tIHx8IHRvICE9PSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50b1xuXG4gICAgaWYgKHJhbmdlQ2hhbmdlZCA9PT0gZmFsc2UgJiYgYWxpZ25FbmQgPT09IHZvaWQgMCkge1xuICAgICAgZW1pdFNjcm9sbCh0b0luZGV4KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBhY3RpdmVFbGVtZW50IH0gPSBkb2N1bWVudFxuICAgIGNvbnN0IGNvbnRlbnRFbCA9IGNvbnRlbnRSZWYudmFsdWVcbiAgICBpZiAoXG4gICAgICByYW5nZUNoYW5nZWQgPT09IHRydWVcbiAgICAgICYmIGNvbnRlbnRFbCAhPT0gbnVsbFxuICAgICAgJiYgY29udGVudEVsICE9PSBhY3RpdmVFbGVtZW50XG4gICAgICAmJiBjb250ZW50RWwuY29udGFpbnMoYWN0aXZlRWxlbWVudCkgPT09IHRydWVcbiAgICApIHtcbiAgICAgIGNvbnRlbnRFbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIG9uQmx1clJlZm9jdXNGbilcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnRlbnRFbCAhPT0gbnVsbCAmJiBjb250ZW50RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkJsdXJSZWZvY3VzRm4pXG4gICAgICB9KVxuICAgIH1cblxuICAgIHNldE92ZXJmbG93QW5jaG9yKGNvbnRlbnRFbCwgdG9JbmRleCAtIGZyb20pXG5cbiAgICBjb25zdCBzaXplQmVmb3JlID0gYWxpZ25FbmQgIT09IHZvaWQgMCA/IHZpcnR1YWxTY3JvbGxTaXplcy5zbGljZShmcm9tLCB0b0luZGV4KS5yZWR1Y2Uoc3VtRm4sIDApIDogMFxuXG4gICAgaWYgKHJhbmdlQ2hhbmdlZCA9PT0gdHJ1ZSkge1xuICAgICAgLy8gdnVlIGtleSBtYXRjaGluZyBhbGdvcml0aG0gd29ya3Mgb25seSBpZlxuICAgICAgLy8gdGhlIGFycmF5IG9mIFZOb2RlcyBjaGFuZ2VzIG9uIG9ubHkgb25lIG9mIHRoZSBlbmRzXG4gICAgICAvLyBzbyB3ZSBmaXJzdCBjaGFuZ2Ugb25lIGVuZCBhbmQgdGhlbiB0aGUgb3RoZXJcblxuICAgICAgY29uc3QgdGVtcFRvID0gdG8gPj0gdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSAmJiBmcm9tIDw9IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLnRvXG4gICAgICAgID8gdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG9cbiAgICAgICAgOiB0b1xuXG4gICAgICB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZSA9IHsgZnJvbSwgdG86IHRlbXBUbyB9XG4gICAgICB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0JlZm9yZS52YWx1ZSA9IHN1bVNpemUodmlydHVhbFNjcm9sbFNpemVzQWdnLCB2aXJ0dWFsU2Nyb2xsU2l6ZXMsIDAsIGZyb20pXG4gICAgICB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0FmdGVyLnZhbHVlID0gc3VtU2l6ZSh2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2csIHZpcnR1YWxTY3JvbGxTaXplcywgdG8sIHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUpXG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGlmICh2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50byAhPT0gdG8gJiYgcHJldlNjcm9sbFN0YXJ0ID09PSBzY3JvbGxEZXRhaWxzLnNjcm9sbFN0YXJ0KSB7XG4gICAgICAgICAgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUgPSB7IGZyb206IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20sIHRvIH1cbiAgICAgICAgICB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0FmdGVyLnZhbHVlID0gc3VtU2l6ZSh2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2csIHZpcnR1YWxTY3JvbGxTaXplcywgdG8sIHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIC8vIGlmIHRoZSBzY3JvbGwgd2FzIGNoYW5nZWQgZ2l2ZSB1cFxuICAgICAgLy8gKGFub3RoZXIgY2FsbCB0byBzZXRWaXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZSBiZWZvcmUgYW5pbWF0aW9uIGZyYW1lKVxuICAgICAgaWYgKHByZXZTY3JvbGxTdGFydCAhPT0gc2Nyb2xsRGV0YWlscy5zY3JvbGxTdGFydCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHJhbmdlQ2hhbmdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB1cGRhdGVWaXJ0dWFsU2Nyb2xsU2l6ZXMoZnJvbSlcbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgc2l6ZUFmdGVyID0gdmlydHVhbFNjcm9sbFNpemVzLnNsaWNlKGZyb20sIHRvSW5kZXgpLnJlZHVjZShzdW1GbiwgMCksXG4gICAgICAgIHBvc1N0YXJ0ID0gc2l6ZUFmdGVyICsgc2Nyb2xsRGV0YWlscy5vZmZzZXRTdGFydCArIHZpcnR1YWxTY3JvbGxQYWRkaW5nQmVmb3JlLnZhbHVlLFxuICAgICAgICBwb3NFbmQgPSBwb3NTdGFydCArIHZpcnR1YWxTY3JvbGxTaXplc1sgdG9JbmRleCBdXG5cbiAgICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IHBvc1N0YXJ0ICsgb2Zmc2V0XG5cbiAgICAgIGlmIChhbGlnbkVuZCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IHNpemVEaWZmID0gc2l6ZUFmdGVyIC0gc2l6ZUJlZm9yZVxuICAgICAgICBjb25zdCBzY3JvbGxTdGFydCA9IHNjcm9sbERldGFpbHMuc2Nyb2xsU3RhcnQgKyBzaXplRGlmZlxuXG4gICAgICAgIHNjcm9sbFBvc2l0aW9uID0gYWxpZ25Gb3JjZSAhPT0gdHJ1ZSAmJiBzY3JvbGxTdGFydCA8IHBvc1N0YXJ0ICYmIHBvc0VuZCA8IHNjcm9sbFN0YXJ0ICsgc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZVxuICAgICAgICAgID8gc2Nyb2xsU3RhcnRcbiAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgYWxpZ25FbmQgPT09ICdlbmQnXG4gICAgICAgICAgICAgICAgPyBwb3NFbmQgLSBzY3JvbGxEZXRhaWxzLnNjcm9sbFZpZXdTaXplXG4gICAgICAgICAgICAgICAgOiBwb3NTdGFydCAtIChhbGlnbkVuZCA9PT0gJ3N0YXJ0JyA/IDAgOiBNYXRoLnJvdW5kKChzY3JvbGxEZXRhaWxzLnNjcm9sbFZpZXdTaXplIC0gdmlydHVhbFNjcm9sbFNpemVzWyB0b0luZGV4IF0pIC8gMikpXG4gICAgICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHByZXZTY3JvbGxTdGFydCA9IHNjcm9sbFBvc2l0aW9uXG5cbiAgICAgIHNldFNjcm9sbChcbiAgICAgICAgc2Nyb2xsRWwsXG4gICAgICAgIHNjcm9sbFBvc2l0aW9uLFxuICAgICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbCxcbiAgICAgICAgJHEubGFuZy5ydGxcbiAgICAgIClcblxuICAgICAgZW1pdFNjcm9sbCh0b0luZGV4KVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVWaXJ0dWFsU2Nyb2xsU2l6ZXMgKGZyb20pIHtcbiAgICBjb25zdCBjb250ZW50RWwgPSBjb250ZW50UmVmLnZhbHVlXG5cbiAgICBpZiAoY29udGVudEVsKSB7XG4gICAgICBjb25zdFxuICAgICAgICBjaGlsZHJlbiA9IGZpbHRlclByb3RvLmNhbGwoXG4gICAgICAgICAgY29udGVudEVsLmNoaWxkcmVuLFxuICAgICAgICAgIGVsID0+IGVsLmNsYXNzTGlzdCAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3EtdmlydHVhbC1zY3JvbGwtLXNraXAnKSA9PT0gZmFsc2VcbiAgICAgICAgKSxcbiAgICAgICAgY2hpbGRyZW5MZW5ndGggPSBjaGlsZHJlbi5sZW5ndGgsXG4gICAgICAgIHNpemVGbiA9IHByb3BzLnZpcnR1YWxTY3JvbGxIb3Jpem9udGFsID09PSB0cnVlXG4gICAgICAgICAgPyBlbCA9PiBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICAgICAgICAgIDogZWwgPT4gZWwub2Zmc2V0SGVpZ2h0XG5cbiAgICAgIGxldFxuICAgICAgICBpbmRleCA9IGZyb20sXG4gICAgICAgIHNpemUsIGRpZmZcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDspIHtcbiAgICAgICAgc2l6ZSA9IHNpemVGbihjaGlsZHJlblsgaSBdKVxuICAgICAgICBpKytcblxuICAgICAgICB3aGlsZSAoaSA8IGNoaWxkcmVuTGVuZ3RoICYmIGNoaWxkcmVuWyBpIF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdxLXZpcnR1YWwtc2Nyb2xsLS13aXRoLXByZXYnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNpemUgKz0gc2l6ZUZuKGNoaWxkcmVuWyBpIF0pXG4gICAgICAgICAgaSsrXG4gICAgICAgIH1cblxuICAgICAgICBkaWZmID0gc2l6ZSAtIHZpcnR1YWxTY3JvbGxTaXplc1sgaW5kZXggXVxuXG4gICAgICAgIGlmIChkaWZmICE9PSAwKSB7XG4gICAgICAgICAgdmlydHVhbFNjcm9sbFNpemVzWyBpbmRleCBdICs9IGRpZmZcbiAgICAgICAgICB2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2dbIE1hdGguZmxvb3IoaW5kZXggLyBhZ2dCdWNrZXRTaXplKSBdICs9IGRpZmZcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4KytcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkJsdXJSZWZvY3VzRm4gKCkge1xuICAgIGNvbnRlbnRSZWYudmFsdWUgIT09IG51bGwgJiYgY29udGVudFJlZi52YWx1ZSAhPT0gdm9pZCAwICYmIGNvbnRlbnRSZWYudmFsdWUuZm9jdXMoKVxuICB9XG5cbiAgZnVuY3Rpb24gbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwgKHRvSW5kZXgsIGZ1bGxSZXNldCkge1xuICAgIGNvbnN0IGRlZmF1bHRTaXplID0gMSAqIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkLnZhbHVlXG5cbiAgICBpZiAoZnVsbFJlc2V0ID09PSB0cnVlIHx8IEFycmF5LmlzQXJyYXkodmlydHVhbFNjcm9sbFNpemVzKSA9PT0gZmFsc2UpIHtcbiAgICAgIHZpcnR1YWxTY3JvbGxTaXplcyA9IFtdXG4gICAgfVxuXG4gICAgY29uc3Qgb2xkVmlydHVhbFNjcm9sbFNpemVzTGVuZ3RoID0gdmlydHVhbFNjcm9sbFNpemVzLmxlbmd0aFxuXG4gICAgdmlydHVhbFNjcm9sbFNpemVzLmxlbmd0aCA9IHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWVcblxuICAgIGZvciAobGV0IGkgPSB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlIC0gMTsgaSA+PSBvbGRWaXJ0dWFsU2Nyb2xsU2l6ZXNMZW5ndGg7IGktLSkge1xuICAgICAgdmlydHVhbFNjcm9sbFNpemVzWyBpIF0gPSBkZWZhdWx0U2l6ZVxuICAgIH1cblxuICAgIGNvbnN0IGpNYXggPSBNYXRoLmZsb29yKCh2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlIC0gMSkgLyBhZ2dCdWNrZXRTaXplKVxuICAgIHZpcnR1YWxTY3JvbGxTaXplc0FnZyA9IFtdXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gak1heDsgaisrKSB7XG4gICAgICBsZXQgc2l6ZSA9IDBcbiAgICAgIGNvbnN0IGlNYXggPSBNYXRoLm1pbigoaiArIDEpICogYWdnQnVja2V0U2l6ZSwgdmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSlcbiAgICAgIGZvciAobGV0IGkgPSBqICogYWdnQnVja2V0U2l6ZTsgaSA8IGlNYXg7IGkrKykge1xuICAgICAgICBzaXplICs9IHZpcnR1YWxTY3JvbGxTaXplc1sgaSBdXG4gICAgICB9XG4gICAgICB2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2cucHVzaChzaXplKVxuICAgIH1cblxuICAgIHByZXZUb0luZGV4ID0gLTFcbiAgICBwcmV2U2Nyb2xsU3RhcnQgPSB2b2lkIDBcblxuICAgIHZpcnR1YWxTY3JvbGxQYWRkaW5nQmVmb3JlLnZhbHVlID0gc3VtU2l6ZSh2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2csIHZpcnR1YWxTY3JvbGxTaXplcywgMCwgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSlcbiAgICB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0FmdGVyLnZhbHVlID0gc3VtU2l6ZSh2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2csIHZpcnR1YWxTY3JvbGxTaXplcywgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG8sIHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUpXG5cbiAgICBpZiAodG9JbmRleCA+PSAwKSB7XG4gICAgICB1cGRhdGVWaXJ0dWFsU2Nyb2xsU2l6ZXModmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSlcbiAgICAgIG5leHRUaWNrKCgpID0+IHsgc2Nyb2xsVG8odG9JbmRleCkgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvblZpcnR1YWxTY3JvbGxFdnQoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFZpcnR1YWxTY3JvbGxTaXplIChzY3JvbGxWaWV3U2l6ZSkge1xuICAgIGlmIChzY3JvbGxWaWV3U2l6ZSA9PT0gdm9pZCAwICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBzY3JvbGxFbCA9IGdldFZpcnR1YWxTY3JvbGxUYXJnZXQoKVxuXG4gICAgICBpZiAoc2Nyb2xsRWwgIT09IHZvaWQgMCAmJiBzY3JvbGxFbCAhPT0gbnVsbCAmJiBzY3JvbGxFbC5ub2RlVHlwZSAhPT0gOCkge1xuICAgICAgICBzY3JvbGxWaWV3U2l6ZSA9IGdldFNjcm9sbERldGFpbHMoXG4gICAgICAgICAgc2Nyb2xsRWwsXG4gICAgICAgICAgZ2V0VmlydHVhbFNjcm9sbEVsKCksXG4gICAgICAgICAgYmVmb3JlUmVmLnZhbHVlLFxuICAgICAgICAgIGFmdGVyUmVmLnZhbHVlLFxuICAgICAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxIb3Jpem9udGFsLFxuICAgICAgICAgICRxLmxhbmcucnRsLFxuICAgICAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxTdGlja3lTaXplU3RhcnQsXG4gICAgICAgICAgcHJvcHMudmlydHVhbFNjcm9sbFN0aWNreVNpemVFbmRcbiAgICAgICAgKS5zY3JvbGxWaWV3U2l6ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGxvY2FsU2Nyb2xsVmlld1NpemUgPSBzY3JvbGxWaWV3U2l6ZVxuXG4gICAgY29uc3QgdmlydHVhbFNjcm9sbFNsaWNlUmF0aW9CZWZvcmUgPSBwYXJzZUZsb2F0KHByb3BzLnZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQmVmb3JlKSB8fCAwXG4gICAgY29uc3QgdmlydHVhbFNjcm9sbFNsaWNlUmF0aW9BZnRlciA9IHBhcnNlRmxvYXQocHJvcHMudmlydHVhbFNjcm9sbFNsaWNlUmF0aW9BZnRlcikgfHwgMFxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSAxICsgdmlydHVhbFNjcm9sbFNsaWNlUmF0aW9CZWZvcmUgKyB2aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0FmdGVyXG4gICAgY29uc3QgdmlldyA9IHNjcm9sbFZpZXdTaXplID09PSB2b2lkIDAgfHwgc2Nyb2xsVmlld1NpemUgPD0gMFxuICAgICAgPyAxXG4gICAgICA6IE1hdGguY2VpbChzY3JvbGxWaWV3U2l6ZSAvIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkLnZhbHVlKVxuXG4gICAgY29uc3QgYmFzZVNpemUgPSBNYXRoLm1heChcbiAgICAgIDEsXG4gICAgICB2aWV3LFxuICAgICAgTWF0aC5jZWlsKChwcm9wcy52aXJ0dWFsU2Nyb2xsU2xpY2VTaXplID4gMCA/IHByb3BzLnZpcnR1YWxTY3JvbGxTbGljZVNpemUgOiAxMCkgLyBtdWx0aXBsaWVyKVxuICAgIClcblxuICAgIHZpcnR1YWxTY3JvbGxTbGljZVNpemVDb21wdXRlZC52YWx1ZSA9IHtcbiAgICAgIHRvdGFsOiBNYXRoLmNlaWwoYmFzZVNpemUgKiBtdWx0aXBsaWVyKSxcbiAgICAgIHN0YXJ0OiBNYXRoLmNlaWwoYmFzZVNpemUgKiB2aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0JlZm9yZSksXG4gICAgICBjZW50ZXI6IE1hdGguY2VpbChiYXNlU2l6ZSAqICgwLjUgKyB2aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0JlZm9yZSkpLFxuICAgICAgZW5kOiBNYXRoLmNlaWwoYmFzZVNpemUgKiAoMSArIHZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQmVmb3JlKSksXG4gICAgICB2aWV3XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGFkVmlydHVhbFNjcm9sbCAodGFnLCBjb250ZW50KSB7XG4gICAgY29uc3QgcGFkZGluZ1NpemUgPSBwcm9wcy52aXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbCA9PT0gdHJ1ZSA/ICd3aWR0aCcgOiAnaGVpZ2h0J1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgWyAnLS1xLXZpcnR1YWwtc2Nyb2xsLWl0ZW0tJyArIHBhZGRpbmdTaXplIF06IHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkLnZhbHVlICsgJ3B4J1xuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICB0YWcgPT09ICd0Ym9keSdcbiAgICAgICAgPyBoKHRhZywge1xuICAgICAgICAgIGNsYXNzOiAncS12aXJ0dWFsLXNjcm9sbF9fcGFkZGluZycsXG4gICAgICAgICAga2V5OiAnYmVmb3JlJyxcbiAgICAgICAgICByZWY6IGJlZm9yZVJlZlxuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgndHInLCBbXG4gICAgICAgICAgICBoKCd0ZCcsIHtcbiAgICAgICAgICAgICAgc3R5bGU6IHsgWyBwYWRkaW5nU2l6ZSBdOiBgJHsgdmlydHVhbFNjcm9sbFBhZGRpbmdCZWZvcmUudmFsdWUgfXB4YCwgLi4uc3R5bGUgfSxcbiAgICAgICAgICAgICAgY29sc3BhbjogY29sc3BhbkF0dHIudmFsdWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgICAgOiBoKHRhZywge1xuICAgICAgICAgIGNsYXNzOiAncS12aXJ0dWFsLXNjcm9sbF9fcGFkZGluZycsXG4gICAgICAgICAga2V5OiAnYmVmb3JlJyxcbiAgICAgICAgICByZWY6IGJlZm9yZVJlZixcbiAgICAgICAgICBzdHlsZTogeyBbIHBhZGRpbmdTaXplIF06IGAkeyB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0JlZm9yZS52YWx1ZSB9cHhgLCAuLi5zdHlsZSB9XG4gICAgICAgIH0pLFxuXG4gICAgICBoKHRhZywge1xuICAgICAgICBjbGFzczogJ3EtdmlydHVhbC1zY3JvbGxfX2NvbnRlbnQnLFxuICAgICAgICBrZXk6ICdjb250ZW50JyxcbiAgICAgICAgcmVmOiBjb250ZW50UmVmLFxuICAgICAgICB0YWJpbmRleDogLTFcbiAgICAgIH0sIGNvbnRlbnQuZmxhdCgpKSxcblxuICAgICAgdGFnID09PSAndGJvZHknXG4gICAgICAgID8gaCh0YWcsIHtcbiAgICAgICAgICBjbGFzczogJ3EtdmlydHVhbC1zY3JvbGxfX3BhZGRpbmcnLFxuICAgICAgICAgIGtleTogJ2FmdGVyJyxcbiAgICAgICAgICByZWY6IGFmdGVyUmVmXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKCd0cicsIFtcbiAgICAgICAgICAgIGgoJ3RkJywge1xuICAgICAgICAgICAgICBzdHlsZTogeyBbIHBhZGRpbmdTaXplIF06IGAkeyB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0FmdGVyLnZhbHVlIH1weGAsIC4uLnN0eWxlIH0sXG4gICAgICAgICAgICAgIGNvbHNwYW46IGNvbHNwYW5BdHRyLnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICAgIDogaCh0YWcsIHtcbiAgICAgICAgICBjbGFzczogJ3EtdmlydHVhbC1zY3JvbGxfX3BhZGRpbmcnLFxuICAgICAgICAgIGtleTogJ2FmdGVyJyxcbiAgICAgICAgICByZWY6IGFmdGVyUmVmLFxuICAgICAgICAgIHN0eWxlOiB7IFsgcGFkZGluZ1NpemUgXTogYCR7IHZpcnR1YWxTY3JvbGxQYWRkaW5nQWZ0ZXIudmFsdWUgfXB4YCwgLi4uc3R5bGUgfVxuICAgICAgICB9KVxuICAgIF1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVtaXRTY3JvbGwgKGluZGV4KSB7XG4gICAgaWYgKHByZXZUb0luZGV4ICE9PSBpbmRleCkge1xuICAgICAgcHJvcHMub25WaXJ0dWFsU2Nyb2xsICE9PSB2b2lkIDAgJiYgZW1pdCgndmlydHVhbFNjcm9sbCcsIHtcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGZyb206IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20sXG4gICAgICAgIHRvOiB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50byAtIDEsXG4gICAgICAgIGRpcmVjdGlvbjogaW5kZXggPCBwcmV2VG9JbmRleCA/ICdkZWNyZWFzZScgOiAnaW5jcmVhc2UnLFxuICAgICAgICByZWY6IHByb3h5XG4gICAgICB9KVxuXG4gICAgICBwcmV2VG9JbmRleCA9IGluZGV4XG4gICAgfVxuICB9XG5cbiAgc2V0VmlydHVhbFNjcm9sbFNpemUoKVxuICBjb25zdCBvblZpcnR1YWxTY3JvbGxFdnQgPSBkZWJvdW5jZShcbiAgICBsb2NhbE9uVmlydHVhbFNjcm9sbEV2dCxcbiAgICAkcS5wbGF0Zm9ybS5pcy5pb3MgPT09IHRydWUgPyAxMjAgOiAzNVxuICApXG5cbiAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgc2V0VmlydHVhbFNjcm9sbFNpemUoKVxuICB9KVxuXG4gIGxldCBzaG91bGRBY3RpdmF0ZSA9IGZhbHNlXG5cbiAgb25EZWFjdGl2YXRlZCgoKSA9PiB7XG4gICAgc2hvdWxkQWN0aXZhdGUgPSB0cnVlXG4gIH0pXG5cbiAgb25BY3RpdmF0ZWQoKCkgPT4ge1xuICAgIGlmIChzaG91bGRBY3RpdmF0ZSAhPT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICBjb25zdCBzY3JvbGxFbCA9IGdldFZpcnR1YWxTY3JvbGxUYXJnZXQoKVxuXG4gICAgaWYgKHByZXZTY3JvbGxTdGFydCAhPT0gdm9pZCAwICYmIHNjcm9sbEVsICE9PSB2b2lkIDAgJiYgc2Nyb2xsRWwgIT09IG51bGwgJiYgc2Nyb2xsRWwubm9kZVR5cGUgIT09IDgpIHtcbiAgICAgIHNldFNjcm9sbChcbiAgICAgICAgc2Nyb2xsRWwsXG4gICAgICAgIHByZXZTY3JvbGxTdGFydCxcbiAgICAgICAgcHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwsXG4gICAgICAgICRxLmxhbmcucnRsXG4gICAgICApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2Nyb2xsVG8ocHJldlRvSW5kZXgpXG4gICAgfVxuICB9KVxuXG4gIF9fUVVBU0FSX1NTUl9fIHx8IG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgb25WaXJ0dWFsU2Nyb2xsRXZ0LmNhbmNlbCgpXG4gIH0pXG5cbiAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gIE9iamVjdC5hc3NpZ24ocHJveHksIHsgc2Nyb2xsVG8sIHJlc2V0LCByZWZyZXNoIH0pXG5cbiAgcmV0dXJuIHtcbiAgICB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZSxcbiAgICB2aXJ0dWFsU2Nyb2xsU2xpY2VTaXplQ29tcHV0ZWQsXG5cbiAgICBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZSxcbiAgICBvblZpcnR1YWxTY3JvbGxFdnQsXG4gICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwsXG4gICAgcGFkVmlydHVhbFNjcm9sbCxcblxuICAgIHNjcm9sbFRvLFxuICAgIHJlc2V0LFxuICAgIHJlZnJlc2hcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uQmVmb3JlVXBkYXRlLCBvblVwZGF0ZWQsIG9uQmVmb3JlVW5tb3VudCwgbmV4dFRpY2ssIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFGaWVsZCBmcm9tICcuLi9maWVsZC9RRmllbGQuanMnXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcbmltcG9ydCBRQ2hpcCBmcm9tICcuLi9jaGlwL1FDaGlwLmpzJ1xuXG5pbXBvcnQgUUl0ZW0gZnJvbSAnLi4vaXRlbS9RSXRlbS5qcydcbmltcG9ydCBRSXRlbVNlY3Rpb24gZnJvbSAnLi4vaXRlbS9RSXRlbVNlY3Rpb24uanMnXG5pbXBvcnQgUUl0ZW1MYWJlbCBmcm9tICcuLi9pdGVtL1FJdGVtTGFiZWwuanMnXG5cbmltcG9ydCBRTWVudSBmcm9tICcuLi9tZW51L1FNZW51LmpzJ1xuaW1wb3J0IFFEaWFsb2cgZnJvbSAnLi4vZGlhbG9nL1FEaWFsb2cuanMnXG5cbmltcG9ydCB1c2VGaWVsZCwgeyB1c2VGaWVsZFN0YXRlLCB1c2VGaWVsZFByb3BzLCB1c2VGaWVsZEVtaXRzLCBmaWVsZFZhbHVlSXNGaWxsZWQgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1maWVsZC5qcydcbmltcG9ydCB7IHVzZVZpcnR1YWxTY3JvbGwsIHVzZVZpcnR1YWxTY3JvbGxQcm9wcyB9IGZyb20gJy4uL3ZpcnR1YWwtc2Nyb2xsL3VzZS12aXJ0dWFsLXNjcm9sbC5qcydcbmltcG9ydCB7IHVzZUZvcm1Qcm9wcywgdXNlRm9ybUlucHV0TmFtZUF0dHIgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1mb3JtLmpzJ1xuaW1wb3J0IHVzZUtleUNvbXBvc2l0aW9uIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWtleS1jb21wb3NpdGlvbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBpc0RlZXBFcXVhbCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLmpzJ1xuaW1wb3J0IHsgc3RvcCwgcHJldmVudCwgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IG5vcm1hbGl6ZVRvSW50ZXJ2YWwgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBzaG91bGRJZ25vcmVLZXksIGlzS2V5Q29kZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUva2V5LWNvbXBvc2l0aW9uLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5jb25zdCB2YWxpZGF0ZU5ld1ZhbHVlTW9kZSA9IHYgPT4gWyAnYWRkJywgJ2FkZC11bmlxdWUnLCAndG9nZ2xlJyBdLmluY2x1ZGVzKHYpXG5jb25zdCByZUVzY2FwZUxpc3QgPSAnLiorP14ke30oKXxbXVxcXFwnXG5jb25zdCBmaWVsZFByb3BzTGlzdCA9IE9iamVjdC5rZXlzKHVzZUZpZWxkUHJvcHMpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU2VsZWN0JyxcblxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlVmlydHVhbFNjcm9sbFByb3BzLFxuICAgIC4uLnVzZUZvcm1Qcm9wcyxcbiAgICAuLi51c2VGaWVsZFByb3BzLFxuXG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuXG4gICAgbXVsdGlwbGU6IEJvb2xlYW4sXG5cbiAgICBkaXNwbGF5VmFsdWU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICBkaXNwbGF5VmFsdWVIdG1sOiBCb29sZWFuLFxuICAgIGRyb3Bkb3duSWNvbjogU3RyaW5nLFxuXG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICAgIH0sXG5cbiAgICBvcHRpb25WYWx1ZTogWyBGdW5jdGlvbiwgU3RyaW5nIF0sXG4gICAgb3B0aW9uTGFiZWw6IFsgRnVuY3Rpb24sIFN0cmluZyBdLFxuICAgIG9wdGlvbkRpc2FibGU6IFsgRnVuY3Rpb24sIFN0cmluZyBdLFxuXG4gICAgaGlkZVNlbGVjdGVkOiBCb29sZWFuLFxuICAgIGhpZGVEcm9wZG93bkljb246IEJvb2xlYW4sXG4gICAgZmlsbElucHV0OiBCb29sZWFuLFxuXG4gICAgbWF4VmFsdWVzOiBbIE51bWJlciwgU3RyaW5nIF0sXG5cbiAgICBvcHRpb25zRGVuc2U6IEJvb2xlYW4sXG4gICAgb3B0aW9uc0Rhcms6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBvcHRpb25zU2VsZWN0ZWRDbGFzczogU3RyaW5nLFxuICAgIG9wdGlvbnNIdG1sOiBCb29sZWFuLFxuXG4gICAgb3B0aW9uc0NvdmVyOiBCb29sZWFuLFxuXG4gICAgbWVudVNocmluazogQm9vbGVhbixcbiAgICBtZW51QW5jaG9yOiBTdHJpbmcsXG4gICAgbWVudVNlbGY6IFN0cmluZyxcbiAgICBtZW51T2Zmc2V0OiBBcnJheSxcblxuICAgIHBvcHVwQ29udGVudENsYXNzOiBTdHJpbmcsXG4gICAgcG9wdXBDb250ZW50U3R5bGU6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgcG9wdXBOb1JvdXRlRGlzbWlzczogQm9vbGVhbixcblxuICAgIHVzZUlucHV0OiBCb29sZWFuLFxuICAgIHVzZUNoaXBzOiBCb29sZWFuLFxuXG4gICAgbmV3VmFsdWVNb2RlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHZhbGlkYXRlTmV3VmFsdWVNb2RlXG4gICAgfSxcblxuICAgIG1hcE9wdGlvbnM6IEJvb2xlYW4sXG4gICAgZW1pdFZhbHVlOiBCb29sZWFuLFxuXG4gICAgaW5wdXREZWJvdW5jZToge1xuICAgICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgICAgZGVmYXVsdDogNTAwXG4gICAgfSxcblxuICAgIGlucHV0Q2xhc3M6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgaW5wdXRTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcblxuICAgIHRhYmluZGV4OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcblxuICAgIGF1dG9jb21wbGV0ZTogU3RyaW5nLFxuXG4gICAgdHJhbnNpdGlvblNob3c6IFN0cmluZyxcbiAgICB0cmFuc2l0aW9uSGlkZTogU3RyaW5nLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gICAgYmVoYXZpb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBbICdkZWZhdWx0JywgJ21lbnUnLCAnZGlhbG9nJyBdLmluY2x1ZGVzKHYpLFxuICAgICAgZGVmYXVsdDogJ2RlZmF1bHQnXG4gICAgfSxcblxuICAgIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZToge1xuICAgICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgICAgZGVmYXVsdDogdm9pZCAwXG4gICAgfSxcblxuICAgIG9uTmV3VmFsdWU6IEZ1bmN0aW9uLFxuICAgIG9uRmlsdGVyOiBGdW5jdGlvblxuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgLi4udXNlRmllbGRFbWl0cyxcbiAgICAnYWRkJywgJ3JlbW92ZScsICdpbnB1dFZhbHVlJywgJ25ld1ZhbHVlJyxcbiAgICAna2V5dXAnLCAna2V5cHJlc3MnLCAna2V5ZG93bicsXG4gICAgJ2ZpbHRlckFib3J0J1xuICBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7ICRxIH0gPSBwcm94eVxuXG4gICAgY29uc3QgbWVudSA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBkaWFsb2cgPSByZWYoZmFsc2UpXG4gICAgY29uc3Qgb3B0aW9uSW5kZXggPSByZWYoLTEpXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IHJlZignJylcbiAgICBjb25zdCBkaWFsb2dGaWVsZEZvY3VzZWQgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgaW5uZXJMb2FkaW5nSW5kaWNhdG9yID0gcmVmKGZhbHNlKVxuXG4gICAgbGV0IGZpbHRlclRpbWVyID0gbnVsbCwgaW5wdXRWYWx1ZVRpbWVyID0gbnVsbCxcbiAgICAgIGlubmVyVmFsdWVDYWNoZSxcbiAgICAgIGhhc0RpYWxvZywgdXNlcklucHV0VmFsdWUsIGZpbHRlcklkID0gbnVsbCwgZGVmYXVsdElucHV0VmFsdWUsXG4gICAgICB0cmFuc2l0aW9uU2hvd0NvbXB1dGVkLCBzZWFyY2hCdWZmZXIsIHNlYXJjaEJ1ZmZlckV4cFxuXG4gICAgY29uc3QgaW5wdXRSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCB0YXJnZXRSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBtZW51UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgZGlhbG9nUmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgbWVudUNvbnRlbnRSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IG5hbWVQcm9wID0gdXNlRm9ybUlucHV0TmFtZUF0dHIocHJvcHMpXG5cbiAgICBjb25zdCBvbkNvbXBvc2l0aW9uID0gdXNlS2V5Q29tcG9zaXRpb24ob25JbnB1dClcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxMZW5ndGggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBBcnJheS5pc0FycmF5KHByb3BzLm9wdGlvbnMpXG4gICAgICAgID8gcHJvcHMub3B0aW9ucy5sZW5ndGhcbiAgICAgICAgOiAwXG4gICAgKSlcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMudmlydHVhbFNjcm9sbEl0ZW1TaXplID09PSB2b2lkIDBcbiAgICAgICAgPyAocHJvcHMub3B0aW9uc0RlbnNlID09PSB0cnVlID8gMjQgOiA0OClcbiAgICAgICAgOiBwcm9wcy52aXJ0dWFsU2Nyb2xsSXRlbVNpemVcbiAgICApKVxuXG4gICAgY29uc3Qge1xuICAgICAgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UsXG4gICAgICB2aXJ0dWFsU2Nyb2xsU2xpY2VTaXplQ29tcHV0ZWQsXG4gICAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCxcbiAgICAgIHBhZFZpcnR1YWxTY3JvbGwsXG4gICAgICBvblZpcnR1YWxTY3JvbGxFdnQsXG4gICAgICBzY3JvbGxUbyxcbiAgICAgIHNldFZpcnR1YWxTY3JvbGxTaXplXG4gICAgfSA9IHVzZVZpcnR1YWxTY3JvbGwoe1xuICAgICAgdmlydHVhbFNjcm9sbExlbmd0aCwgZ2V0VmlydHVhbFNjcm9sbFRhcmdldCwgZ2V0VmlydHVhbFNjcm9sbEVsLFxuICAgICAgdmlydHVhbFNjcm9sbEl0ZW1TaXplQ29tcHV0ZWRcbiAgICB9KVxuXG4gICAgY29uc3Qgc3RhdGUgPSB1c2VGaWVsZFN0YXRlKClcblxuICAgIGNvbnN0IGlubmVyVmFsdWUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdFxuICAgICAgICBtYXBOdWxsID0gcHJvcHMubWFwT3B0aW9ucyA9PT0gdHJ1ZSAmJiBwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSxcbiAgICAgICAgdmFsID0gcHJvcHMubW9kZWxWYWx1ZSAhPT0gdm9pZCAwICYmIChwcm9wcy5tb2RlbFZhbHVlICE9PSBudWxsIHx8IG1hcE51bGwgPT09IHRydWUpXG4gICAgICAgICAgPyAocHJvcHMubXVsdGlwbGUgPT09IHRydWUgJiYgQXJyYXkuaXNBcnJheShwcm9wcy5tb2RlbFZhbHVlKSA/IHByb3BzLm1vZGVsVmFsdWUgOiBbIHByb3BzLm1vZGVsVmFsdWUgXSlcbiAgICAgICAgICA6IFtdXG5cbiAgICAgIGlmIChwcm9wcy5tYXBPcHRpb25zID09PSB0cnVlICYmIEFycmF5LmlzQXJyYXkocHJvcHMub3B0aW9ucykgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgY2FjaGUgPSBwcm9wcy5tYXBPcHRpb25zID09PSB0cnVlICYmIGlubmVyVmFsdWVDYWNoZSAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBpbm5lclZhbHVlQ2FjaGVcbiAgICAgICAgICA6IFtdXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbC5tYXAodiA9PiBnZXRPcHRpb24odiwgY2FjaGUpKVxuXG4gICAgICAgIHJldHVybiBwcm9wcy5tb2RlbFZhbHVlID09PSBudWxsICYmIG1hcE51bGwgPT09IHRydWVcbiAgICAgICAgICA/IHZhbHVlcy5maWx0ZXIodiA9PiB2ICE9PSBudWxsKVxuICAgICAgICAgIDogdmFsdWVzXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWxcbiAgICB9KVxuXG4gICAgY29uc3QgaW5uZXJGaWVsZFByb3BzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWNjID0ge31cbiAgICAgIGZpZWxkUHJvcHNMaXN0LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdmFsID0gcHJvcHNbIGtleSBdXG4gICAgICAgIGlmICh2YWwgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGFjY1sga2V5IF0gPSB2YWxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgY29uc3QgaXNPcHRpb25zRGFyayA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLm9wdGlvbnNEYXJrID09PSBudWxsXG4gICAgICAgID8gc3RhdGUuaXNEYXJrLnZhbHVlXG4gICAgICAgIDogcHJvcHMub3B0aW9uc0RhcmtcbiAgICApKVxuXG4gICAgY29uc3QgaGFzVmFsdWUgPSBjb21wdXRlZCgoKSA9PiBmaWVsZFZhbHVlSXNGaWxsZWQoaW5uZXJWYWx1ZS52YWx1ZSkpXG5cbiAgICBjb25zdCBjb21wdXRlZElucHV0Q2xhc3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgY2xzID0gJ3EtZmllbGRfX2lucHV0IHEtcGxhY2Vob2xkZXIgY29sJ1xuXG4gICAgICBpZiAocHJvcHMuaGlkZVNlbGVjdGVkID09PSB0cnVlIHx8IGlubmVyVmFsdWUudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbIGNscywgcHJvcHMuaW5wdXRDbGFzcyBdXG4gICAgICB9XG5cbiAgICAgIGNscyArPSAnIHEtZmllbGRfX2lucHV0LS1wYWRkaW5nJ1xuXG4gICAgICByZXR1cm4gcHJvcHMuaW5wdXRDbGFzcyA9PT0gdm9pZCAwXG4gICAgICAgID8gY2xzXG4gICAgICAgIDogWyBjbHMsIHByb3BzLmlucHV0Q2xhc3MgXVxuICAgIH0pXG5cbiAgICBjb25zdCBtZW51Q29udGVudENsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIChwcm9wcy52aXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbCA9PT0gdHJ1ZSA/ICdxLXZpcnR1YWwtc2Nyb2xsLS1ob3Jpem9udGFsJyA6ICcnKVxuICAgICAgKyAocHJvcHMucG9wdXBDb250ZW50Q2xhc3MgPyAnICcgKyBwcm9wcy5wb3B1cENvbnRlbnRDbGFzcyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IG5vT3B0aW9ucyA9IGNvbXB1dGVkKCgpID0+IHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUgPT09IDApXG5cbiAgICBjb25zdCBzZWxlY3RlZFN0cmluZyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBpbm5lclZhbHVlLnZhbHVlXG4gICAgICAgIC5tYXAob3B0ID0+IGdldE9wdGlvbkxhYmVsLnZhbHVlKG9wdCkpXG4gICAgICAgIC5qb2luKCcsICcpXG4gICAgKVxuXG4gICAgY29uc3QgYXJpYUN1cnJlbnRWYWx1ZSA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy5kaXNwbGF5VmFsdWUgIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy5kaXNwbGF5VmFsdWVcbiAgICAgIDogc2VsZWN0ZWRTdHJpbmcudmFsdWVcbiAgICApKVxuXG4gICAgY29uc3QgbmVlZHNIdG1sRm4gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5vcHRpb25zSHRtbCA9PT0gdHJ1ZVxuICAgICAgICA/ICgpID0+IHRydWVcbiAgICAgICAgOiBvcHQgPT4gb3B0ICE9PSB2b2lkIDAgJiYgb3B0ICE9PSBudWxsICYmIG9wdC5odG1sID09PSB0cnVlXG4gICAgKSlcblxuICAgIGNvbnN0IHZhbHVlQXNIdG1sID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZGlzcGxheVZhbHVlSHRtbCA9PT0gdHJ1ZSB8fCAoXG4gICAgICAgIHByb3BzLmRpc3BsYXlWYWx1ZSA9PT0gdm9pZCAwICYmIChcbiAgICAgICAgICBwcm9wcy5vcHRpb25zSHRtbCA9PT0gdHJ1ZVxuICAgICAgICAgIHx8IGlubmVyVmFsdWUudmFsdWUuc29tZShuZWVkc0h0bWxGbi52YWx1ZSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICkpXG5cbiAgICBjb25zdCB0YWJpbmRleCA9IGNvbXB1dGVkKCgpID0+IChzdGF0ZS5mb2N1c2VkLnZhbHVlID09PSB0cnVlID8gcHJvcHMudGFiaW5kZXggOiAtMSkpXG5cbiAgICBjb25zdCBjb21ib2JveEF0dHJzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICAgIHRhYmluZGV4OiBwcm9wcy50YWJpbmRleCxcbiAgICAgICAgcm9sZTogJ2NvbWJvYm94JyxcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBwcm9wcy5sYWJlbCxcbiAgICAgICAgJ2FyaWEtcmVhZG9ubHknOiBwcm9wcy5yZWFkb25seSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgICdhcmlhLWF1dG9jb21wbGV0ZSc6IHByb3BzLnVzZUlucHV0ID09PSB0cnVlID8gJ2xpc3QnIDogJ25vbmUnLFxuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IG1lbnUudmFsdWUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgICAnYXJpYS1jb250cm9scyc6IGAkeyBzdGF0ZS50YXJnZXRVaWQudmFsdWUgfV9sYmBcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbkluZGV4LnZhbHVlID49IDApIHtcbiAgICAgICAgYXR0cnNbICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnIF0gPSBgJHsgc3RhdGUudGFyZ2V0VWlkLnZhbHVlIH1fJHsgb3B0aW9uSW5kZXgudmFsdWUgfWBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGF0dHJzXG4gICAgfSlcblxuICAgIGNvbnN0IGxpc3Rib3hBdHRycyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICBpZDogYCR7IHN0YXRlLnRhcmdldFVpZC52YWx1ZSB9X2xiYCxcbiAgICAgIHJvbGU6ICdsaXN0Ym94JyxcbiAgICAgICdhcmlhLW11bHRpc2VsZWN0YWJsZSc6IHByb3BzLm11bHRpcGxlID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuICAgIH0pKVxuXG4gICAgY29uc3Qgc2VsZWN0ZWRTY29wZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBpbm5lclZhbHVlLnZhbHVlLm1hcCgob3B0LCBpKSA9PiAoe1xuICAgICAgICBpbmRleDogaSxcbiAgICAgICAgb3B0LFxuICAgICAgICBodG1sOiBuZWVkc0h0bWxGbi52YWx1ZShvcHQpLFxuICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgcmVtb3ZlQXRJbmRleDogcmVtb3ZlQXRJbmRleEFuZEZvY3VzLFxuICAgICAgICB0b2dnbGVPcHRpb24sXG4gICAgICAgIHRhYmluZGV4OiB0YWJpbmRleC52YWx1ZVxuICAgICAgfSkpXG4gICAgfSlcblxuICAgIGNvbnN0IG9wdGlvblNjb3BlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgZnJvbSwgdG8gfSA9IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlXG5cbiAgICAgIHJldHVybiBwcm9wcy5vcHRpb25zLnNsaWNlKGZyb20sIHRvKS5tYXAoKG9wdCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBkaXNhYmxlID0gaXNPcHRpb25EaXNhYmxlZC52YWx1ZShvcHQpID09PSB0cnVlXG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IGlzT3B0aW9uU2VsZWN0ZWQob3B0KSA9PT0gdHJ1ZVxuICAgICAgICBjb25zdCBpbmRleCA9IGZyb20gKyBpXG5cbiAgICAgICAgY29uc3QgaXRlbVByb3BzID0ge1xuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgYWN0aXZlQ2xhc3M6IGNvbXB1dGVkT3B0aW9uc1NlbGVjdGVkQ2xhc3MudmFsdWUsXG4gICAgICAgICAgbWFudWFsRm9jdXM6IHRydWUsXG4gICAgICAgICAgZm9jdXNlZDogZmFsc2UsXG4gICAgICAgICAgZGlzYWJsZSxcbiAgICAgICAgICB0YWJpbmRleDogLTEsXG4gICAgICAgICAgZGVuc2U6IHByb3BzLm9wdGlvbnNEZW5zZSxcbiAgICAgICAgICBkYXJrOiBpc09wdGlvbnNEYXJrLnZhbHVlLFxuICAgICAgICAgIHJvbGU6ICdvcHRpb24nLFxuICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogYWN0aXZlID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICAgICBpZDogYCR7IHN0YXRlLnRhcmdldFVpZC52YWx1ZSB9XyR7IGluZGV4IH1gLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHsgdG9nZ2xlT3B0aW9uKG9wdCkgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpc2FibGUgIT09IHRydWUpIHtcbiAgICAgICAgICBvcHRpb25JbmRleC52YWx1ZSA9PT0gaW5kZXggJiYgKGl0ZW1Qcm9wcy5mb2N1c2VkID0gdHJ1ZSlcblxuICAgICAgICAgIGlmICgkcS5wbGF0Zm9ybS5pcy5kZXNrdG9wID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpdGVtUHJvcHMub25Nb3VzZW1vdmUgPSAoKSA9PiB7IG1lbnUudmFsdWUgPT09IHRydWUgJiYgc2V0T3B0aW9uSW5kZXgoaW5kZXgpIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIG9wdCxcbiAgICAgICAgICBodG1sOiBuZWVkc0h0bWxGbi52YWx1ZShvcHQpLFxuICAgICAgICAgIGxhYmVsOiBnZXRPcHRpb25MYWJlbC52YWx1ZShvcHQpLFxuICAgICAgICAgIHNlbGVjdGVkOiBpdGVtUHJvcHMuYWN0aXZlLFxuICAgICAgICAgIGZvY3VzZWQ6IGl0ZW1Qcm9wcy5mb2N1c2VkLFxuICAgICAgICAgIHRvZ2dsZU9wdGlvbixcbiAgICAgICAgICBzZXRPcHRpb25JbmRleCxcbiAgICAgICAgICBpdGVtUHJvcHNcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgY29uc3QgZHJvcGRvd25BcnJvd0ljb24gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5kcm9wZG93bkljb24gIT09IHZvaWQgMFxuICAgICAgICA/IHByb3BzLmRyb3Bkb3duSWNvblxuICAgICAgICA6ICRxLmljb25TZXQuYXJyb3cuZHJvcGRvd25cbiAgICApKVxuXG4gICAgY29uc3Qgc3F1YXJlZE1lbnUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMub3B0aW9uc0NvdmVyID09PSBmYWxzZVxuICAgICAgJiYgcHJvcHMub3V0bGluZWQgIT09IHRydWVcbiAgICAgICYmIHByb3BzLnN0YW5kb3V0ICE9PSB0cnVlXG4gICAgICAmJiBwcm9wcy5ib3JkZXJsZXNzICE9PSB0cnVlXG4gICAgICAmJiBwcm9wcy5yb3VuZGVkICE9PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY29tcHV0ZWRPcHRpb25zU2VsZWN0ZWRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLm9wdGlvbnNTZWxlY3RlZENsYXNzICE9PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wcy5vcHRpb25zU2VsZWN0ZWRDbGFzc1xuICAgICAgICA6IChwcm9wcy5jb2xvciAhPT0gdm9pZCAwID8gYHRleHQtJHsgcHJvcHMuY29sb3IgfWAgOiAnJylcbiAgICApKVxuXG4gICAgLy8gcmV0dXJucyBtZXRob2QgdG8gZ2V0IHZhbHVlIG9mIGFuIG9wdGlvbjtcbiAgICAvLyB0YWtlcyBpbnRvIGFjY291bnQgJ29wdGlvbi12YWx1ZScgcHJvcFxuICAgIGNvbnN0IGdldE9wdGlvblZhbHVlID0gY29tcHV0ZWQoKCkgPT4gZ2V0UHJvcFZhbHVlRm4ocHJvcHMub3B0aW9uVmFsdWUsICd2YWx1ZScpKVxuXG4gICAgLy8gcmV0dXJucyBtZXRob2QgdG8gZ2V0IGxhYmVsIG9mIGFuIG9wdGlvbjtcbiAgICAvLyB0YWtlcyBpbnRvIGFjY291bnQgJ29wdGlvbi1sYWJlbCcgcHJvcFxuICAgIGNvbnN0IGdldE9wdGlvbkxhYmVsID0gY29tcHV0ZWQoKCkgPT4gZ2V0UHJvcFZhbHVlRm4ocHJvcHMub3B0aW9uTGFiZWwsICdsYWJlbCcpKVxuXG4gICAgLy8gcmV0dXJucyBtZXRob2QgdG8gdGVsbCBpZiBhbiBvcHRpb24gaXMgZGlzYWJsZWQ7XG4gICAgLy8gdGFrZXMgaW50byBhY2NvdW50ICdvcHRpb24tZGlzYWJsZScgcHJvcFxuICAgIGNvbnN0IGlzT3B0aW9uRGlzYWJsZWQgPSBjb21wdXRlZCgoKSA9PiBnZXRQcm9wVmFsdWVGbihwcm9wcy5vcHRpb25EaXNhYmxlLCAnZGlzYWJsZScpKVxuXG4gICAgY29uc3QgaW5uZXJPcHRpb25zVmFsdWUgPSBjb21wdXRlZCgoKSA9PiBpbm5lclZhbHVlLnZhbHVlLm1hcChvcHQgPT4gZ2V0T3B0aW9uVmFsdWUudmFsdWUob3B0KSkpXG5cbiAgICBjb25zdCBpbnB1dENvbnRyb2xFdmVudHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBldnQgPSB7XG4gICAgICAgIG9uSW5wdXQsXG4gICAgICAgIC8vIFNhZmFyaSA8IDEwLjIgJiBVSVdlYlZpZXcgZG9lc24ndCBmaXJlIGNvbXBvc2l0aW9uZW5kIHdoZW5cbiAgICAgICAgLy8gc3dpdGNoaW5nIGZvY3VzIGJlZm9yZSBjb25maXJtaW5nIGNvbXBvc2l0aW9uIGNob2ljZVxuICAgICAgICAvLyB0aGlzIGFsc28gZml4ZXMgdGhlIGlzc3VlIHdoZXJlIHNvbWUgYnJvd3NlcnMgZS5nLiBpT1MgQ2hyb21lXG4gICAgICAgIC8vIGZpcmVzIFwiY2hhbmdlXCIgaW5zdGVhZCBvZiBcImlucHV0XCIgb24gYXV0b2NvbXBsZXRlLlxuICAgICAgICBvbkNoYW5nZTogb25Db21wb3NpdGlvbixcbiAgICAgICAgb25LZXlkb3duOiBvblRhcmdldEtleWRvd24sXG4gICAgICAgIG9uS2V5dXA6IG9uVGFyZ2V0QXV0b2NvbXBsZXRlLFxuICAgICAgICBvbktleXByZXNzOiBvblRhcmdldEtleXByZXNzLFxuICAgICAgICBvbkZvY3VzOiBzZWxlY3RJbnB1dFRleHQsXG4gICAgICAgIG9uQ2xpY2sgKGUpIHsgaGFzRGlhbG9nID09PSB0cnVlICYmIHN0b3AoZSkgfVxuICAgICAgfVxuXG4gICAgICBldnQub25Db21wb3NpdGlvbnN0YXJ0ID0gZXZ0Lm9uQ29tcG9zaXRpb251cGRhdGUgPSBldnQub25Db21wb3NpdGlvbmVuZCA9IG9uQ29tcG9zaXRpb25cblxuICAgICAgcmV0dXJuIGV2dFxuICAgIH0pXG5cbiAgICB3YXRjaChpbm5lclZhbHVlLCB2YWwgPT4ge1xuICAgICAgaW5uZXJWYWx1ZUNhY2hlID0gdmFsXG5cbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMudXNlSW5wdXQgPT09IHRydWVcbiAgICAgICAgJiYgcHJvcHMuZmlsbElucHV0ID09PSB0cnVlXG4gICAgICAgICYmIHByb3BzLm11bHRpcGxlICE9PSB0cnVlXG4gICAgICAgIC8vIFByZXZlbnQgcmUtZW50ZXJpbmcgaW4gZmlsdGVyIHdoaWxlIGZpbHRlcmluZ1xuICAgICAgICAvLyBBbHNvIHByZXZlbnQgY2xlYXJpbmcgaW5wdXRWYWx1ZSB3aGlsZSBmaWx0ZXJpbmdcbiAgICAgICAgJiYgc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlICE9PSB0cnVlXG4gICAgICAgICYmICgoZGlhbG9nLnZhbHVlICE9PSB0cnVlICYmIG1lbnUudmFsdWUgIT09IHRydWUpIHx8IGhhc1ZhbHVlLnZhbHVlICE9PSB0cnVlKVxuICAgICAgKSB7XG4gICAgICAgIHVzZXJJbnB1dFZhbHVlICE9PSB0cnVlICYmIHJlc2V0SW5wdXRWYWx1ZSgpXG4gICAgICAgIGlmIChkaWFsb2cudmFsdWUgPT09IHRydWUgfHwgbWVudS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGZpbHRlcignJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHsgaW1tZWRpYXRlOiB0cnVlIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5maWxsSW5wdXQsIHJlc2V0SW5wdXRWYWx1ZSlcblxuICAgIHdhdGNoKG1lbnUsIHVwZGF0ZU1lbnUpXG5cbiAgICB3YXRjaCh2aXJ0dWFsU2Nyb2xsTGVuZ3RoLCByZXJlbmRlck1lbnUpXG5cbiAgICBmdW5jdGlvbiBnZXRFbWl0dGluZ09wdGlvblZhbHVlIChvcHQpIHtcbiAgICAgIHJldHVybiBwcm9wcy5lbWl0VmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBnZXRPcHRpb25WYWx1ZS52YWx1ZShvcHQpXG4gICAgICAgIDogb3B0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQXRJbmRleCAoaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEgJiYgaW5kZXggPCBpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICBpZiAocHJvcHMubXVsdGlwbGUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCBtb2RlbCA9IHByb3BzLm1vZGVsVmFsdWUuc2xpY2UoKVxuICAgICAgICAgIGVtaXQoJ3JlbW92ZScsIHsgaW5kZXgsIHZhbHVlOiBtb2RlbC5zcGxpY2UoaW5kZXgsIDEpWyAwIF0gfSlcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG1vZGVsKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgbnVsbClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUF0SW5kZXhBbmRGb2N1cyAoaW5kZXgpIHtcbiAgICAgIHJlbW92ZUF0SW5kZXgoaW5kZXgpXG4gICAgICBzdGF0ZS5mb2N1cygpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkIChvcHQsIHVuaXF1ZSkge1xuICAgICAgY29uc3QgdmFsID0gZ2V0RW1pdHRpbmdPcHRpb25WYWx1ZShvcHQpXG5cbiAgICAgIGlmIChwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSkge1xuICAgICAgICBwcm9wcy5maWxsSW5wdXQgPT09IHRydWUgJiYgdXBkYXRlSW5wdXRWYWx1ZShcbiAgICAgICAgICBnZXRPcHRpb25MYWJlbC52YWx1ZShvcHQpLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApXG5cbiAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWwpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoaW5uZXJWYWx1ZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZW1pdCgnYWRkJywgeyBpbmRleDogMCwgdmFsdWU6IHZhbCB9KVxuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHByb3BzLm11bHRpcGxlID09PSB0cnVlID8gWyB2YWwgXSA6IHZhbClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh1bmlxdWUgPT09IHRydWUgJiYgaXNPcHRpb25TZWxlY3RlZChvcHQpID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMubWF4VmFsdWVzICE9PSB2b2lkIDAgJiYgcHJvcHMubW9kZWxWYWx1ZS5sZW5ndGggPj0gcHJvcHMubWF4VmFsdWVzKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBtb2RlbCA9IHByb3BzLm1vZGVsVmFsdWUuc2xpY2UoKVxuXG4gICAgICBlbWl0KCdhZGQnLCB7IGluZGV4OiBtb2RlbC5sZW5ndGgsIHZhbHVlOiB2YWwgfSlcbiAgICAgIG1vZGVsLnB1c2godmFsKVxuICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBtb2RlbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVPcHRpb24gKG9wdCwga2VlcE9wZW4pIHtcbiAgICAgIGlmIChzdGF0ZS5lZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSB8fCBvcHQgPT09IHZvaWQgMCB8fCBpc09wdGlvbkRpc2FibGVkLnZhbHVlKG9wdCkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9wdFZhbHVlID0gZ2V0T3B0aW9uVmFsdWUudmFsdWUob3B0KVxuXG4gICAgICBpZiAocHJvcHMubXVsdGlwbGUgIT09IHRydWUpIHtcbiAgICAgICAgaWYgKGtlZXBPcGVuICE9PSB0cnVlKSB7XG4gICAgICAgICAgdXBkYXRlSW5wdXRWYWx1ZShcbiAgICAgICAgICAgIHByb3BzLmZpbGxJbnB1dCA9PT0gdHJ1ZSA/IGdldE9wdGlvbkxhYmVsLnZhbHVlKG9wdCkgOiAnJyxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaGlkZVBvcHVwKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFJlZi52YWx1ZSAhPT0gbnVsbCAmJiB0YXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCA9PT0gMFxuICAgICAgICAgIHx8IGlzRGVlcEVxdWFsKGdldE9wdGlvblZhbHVlLnZhbHVlKGlubmVyVmFsdWUudmFsdWVbIDAgXSksIG9wdFZhbHVlKSAhPT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHByb3BzLmVtaXRWYWx1ZSA9PT0gdHJ1ZSA/IG9wdFZhbHVlIDogb3B0KVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAoaGFzRGlhbG9nICE9PSB0cnVlIHx8IGRpYWxvZ0ZpZWxkRm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSkgJiYgc3RhdGUuZm9jdXMoKVxuXG4gICAgICBzZWxlY3RJbnB1dFRleHQoKVxuXG4gICAgICBpZiAoaW5uZXJWYWx1ZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgdmFsID0gcHJvcHMuZW1pdFZhbHVlID09PSB0cnVlID8gb3B0VmFsdWUgOiBvcHRcbiAgICAgICAgZW1pdCgnYWRkJywgeyBpbmRleDogMCwgdmFsdWU6IHZhbCB9KVxuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHByb3BzLm11bHRpcGxlID09PSB0cnVlID8gWyB2YWwgXSA6IHZhbClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIG1vZGVsID0gcHJvcHMubW9kZWxWYWx1ZS5zbGljZSgpLFxuICAgICAgICBpbmRleCA9IGlubmVyT3B0aW9uc1ZhbHVlLnZhbHVlLmZpbmRJbmRleCh2ID0+IGlzRGVlcEVxdWFsKHYsIG9wdFZhbHVlKSlcblxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBlbWl0KCdyZW1vdmUnLCB7IGluZGV4LCB2YWx1ZTogbW9kZWwuc3BsaWNlKGluZGV4LCAxKVsgMCBdIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKHByb3BzLm1heFZhbHVlcyAhPT0gdm9pZCAwICYmIG1vZGVsLmxlbmd0aCA+PSBwcm9wcy5tYXhWYWx1ZXMpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbCA9IHByb3BzLmVtaXRWYWx1ZSA9PT0gdHJ1ZSA/IG9wdFZhbHVlIDogb3B0XG5cbiAgICAgICAgZW1pdCgnYWRkJywgeyBpbmRleDogbW9kZWwubGVuZ3RoLCB2YWx1ZTogdmFsIH0pXG4gICAgICAgIG1vZGVsLnB1c2godmFsKVxuICAgICAgfVxuXG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG1vZGVsKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE9wdGlvbkluZGV4IChpbmRleCkge1xuICAgICAgaWYgKCRxLnBsYXRmb3JtLmlzLmRlc2t0b3AgIT09IHRydWUpIHJldHVyblxuXG4gICAgICBjb25zdCB2YWwgPSBpbmRleCAhPT0gLTEgJiYgaW5kZXggPCB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlXG4gICAgICAgID8gaW5kZXhcbiAgICAgICAgOiAtMVxuXG4gICAgICBpZiAob3B0aW9uSW5kZXgudmFsdWUgIT09IHZhbCkge1xuICAgICAgICBvcHRpb25JbmRleC52YWx1ZSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVPcHRpb25TZWxlY3Rpb24gKG9mZnNldCA9IDEsIHNraXBJbnB1dFZhbHVlKSB7XG4gICAgICBpZiAobWVudS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBsZXQgaW5kZXggPSBvcHRpb25JbmRleC52YWx1ZVxuICAgICAgICBkbyB7XG4gICAgICAgICAgaW5kZXggPSBub3JtYWxpemVUb0ludGVydmFsKFxuICAgICAgICAgICAgaW5kZXggKyBvZmZzZXQsXG4gICAgICAgICAgICAtMSxcbiAgICAgICAgICAgIHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUgLSAxXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChpbmRleCAhPT0gLTEgJiYgaW5kZXggIT09IG9wdGlvbkluZGV4LnZhbHVlICYmIGlzT3B0aW9uRGlzYWJsZWQudmFsdWUocHJvcHMub3B0aW9uc1sgaW5kZXggXSkgPT09IHRydWUpXG5cbiAgICAgICAgaWYgKG9wdGlvbkluZGV4LnZhbHVlICE9PSBpbmRleCkge1xuICAgICAgICAgIHNldE9wdGlvbkluZGV4KGluZGV4KVxuICAgICAgICAgIHNjcm9sbFRvKGluZGV4KVxuXG4gICAgICAgICAgaWYgKHNraXBJbnB1dFZhbHVlICE9PSB0cnVlICYmIHByb3BzLnVzZUlucHV0ID09PSB0cnVlICYmIHByb3BzLmZpbGxJbnB1dCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShcbiAgICAgICAgICAgICAgaW5kZXggPj0gMFxuICAgICAgICAgICAgICAgID8gZ2V0T3B0aW9uTGFiZWwudmFsdWUocHJvcHMub3B0aW9uc1sgaW5kZXggXSlcbiAgICAgICAgICAgICAgICA6IGRlZmF1bHRJbnB1dFZhbHVlLFxuICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0T3B0aW9uICh2YWx1ZSwgdmFsdWVDYWNoZSkge1xuICAgICAgY29uc3QgZm4gPSBvcHQgPT4gaXNEZWVwRXF1YWwoZ2V0T3B0aW9uVmFsdWUudmFsdWUob3B0KSwgdmFsdWUpXG4gICAgICByZXR1cm4gcHJvcHMub3B0aW9ucy5maW5kKGZuKSB8fCB2YWx1ZUNhY2hlLmZpbmQoZm4pIHx8IHZhbHVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvcFZhbHVlRm4gKHByb3BWYWx1ZSwgZGVmYXVsdFZhbCkge1xuICAgICAgY29uc3QgdmFsID0gcHJvcFZhbHVlICE9PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wVmFsdWVcbiAgICAgICAgOiBkZWZhdWx0VmFsXG5cbiAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdmFsXG4gICAgICAgIDogb3B0ID0+IChvcHQgIT09IG51bGwgJiYgdHlwZW9mIG9wdCA9PT0gJ29iamVjdCcgJiYgdmFsIGluIG9wdCA/IG9wdFsgdmFsIF0gOiBvcHQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNPcHRpb25TZWxlY3RlZCAob3B0KSB7XG4gICAgICBjb25zdCB2YWwgPSBnZXRPcHRpb25WYWx1ZS52YWx1ZShvcHQpXG4gICAgICByZXR1cm4gaW5uZXJPcHRpb25zVmFsdWUudmFsdWUuZmluZCh2ID0+IGlzRGVlcEVxdWFsKHYsIHZhbCkpICE9PSB2b2lkIDBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZWxlY3RJbnB1dFRleHQgKGUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMudXNlSW5wdXQgPT09IHRydWVcbiAgICAgICAgJiYgdGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsXG4gICAgICAgICYmIChlID09PSB2b2lkIDAgfHwgKHRhcmdldFJlZi52YWx1ZSA9PT0gZS50YXJnZXQgJiYgZS50YXJnZXQudmFsdWUgPT09IHNlbGVjdGVkU3RyaW5nLnZhbHVlKSlcbiAgICAgICkge1xuICAgICAgICB0YXJnZXRSZWYudmFsdWUuc2VsZWN0KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRhcmdldEtleXVwIChlKSB7XG4gICAgICAvLyBpZiBFU0MgYW5kIHdlIGhhdmUgYW4gb3BlbmVkIG1lbnVcbiAgICAgIC8vIHRoZW4gc3RvcCBwcm9wYWdhdGlvbiAobWlnaHQgYmUgY2F1Z2h0IGJ5IGEgUURpYWxvZ1xuICAgICAgLy8gYW5kIHNvIGl0IHdpbGwgYWxzbyBjbG9zZSB0aGUgUURpYWxvZywgd2hpY2ggaXMgd3JvbmcpXG4gICAgICBpZiAoaXNLZXlDb2RlKGUsIDI3KSA9PT0gdHJ1ZSAmJiBtZW51LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHN0b3AoZSlcbiAgICAgICAgLy8gb24gRVNDIHdlIG5lZWQgdG8gY2xvc2UgdGhlIGRpYWxvZyBhbHNvXG4gICAgICAgIGhpZGVQb3B1cCgpXG4gICAgICAgIHJlc2V0SW5wdXRWYWx1ZSgpXG4gICAgICB9XG5cbiAgICAgIGVtaXQoJ2tleXVwJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRhcmdldEF1dG9jb21wbGV0ZSAoZSkge1xuICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXRcblxuICAgICAgaWYgKGUua2V5Q29kZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIG9uVGFyZ2V0S2V5dXAoZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gJydcblxuICAgICAgaWYgKGZpbHRlclRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChmaWx0ZXJUaW1lcilcbiAgICAgICAgZmlsdGVyVGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgICBpZiAoaW5wdXRWYWx1ZVRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChpbnB1dFZhbHVlVGltZXIpXG4gICAgICAgIGlucHV0VmFsdWVUaW1lciA9IG51bGxcbiAgICAgIH1cblxuICAgICAgcmVzZXRJbnB1dFZhbHVlKClcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IG5lZWRsZSA9IHZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICAgY29uc3QgZmluZEZuID0gZXh0cmFjdEZuID0+IHtcbiAgICAgICAgICBjb25zdCBvcHRpb24gPSBwcm9wcy5vcHRpb25zLmZpbmQob3B0ID0+IGV4dHJhY3RGbi52YWx1ZShvcHQpLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IG5lZWRsZSlcblxuICAgICAgICAgIGlmIChvcHRpb24gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlubmVyVmFsdWUudmFsdWUuaW5kZXhPZihvcHRpb24pID09PSAtMSkge1xuICAgICAgICAgICAgdG9nZ2xlT3B0aW9uKG9wdGlvbilcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoaWRlUG9wdXAoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlsbEZuID0gYWZ0ZXJGaWx0ZXIgPT4ge1xuICAgICAgICAgIGlmIChmaW5kRm4oZ2V0T3B0aW9uVmFsdWUpID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZpbmRGbihnZXRPcHRpb25MYWJlbCkgPT09IHRydWUgfHwgYWZ0ZXJGaWx0ZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbHRlcih2YWx1ZSwgdHJ1ZSwgKCkgPT4gZmlsbEZuKHRydWUpKVxuICAgICAgICB9XG5cbiAgICAgICAgZmlsbEZuKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdGF0ZS5jbGVhclZhbHVlKGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25UYXJnZXRLZXlwcmVzcyAoZSkge1xuICAgICAgZW1pdCgna2V5cHJlc3MnLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVGFyZ2V0S2V5ZG93biAoZSkge1xuICAgICAgZW1pdCgna2V5ZG93bicsIGUpXG5cbiAgICAgIGlmIChzaG91bGRJZ25vcmVLZXkoZSkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld1ZhbHVlTW9kZVZhbGlkID0gaW5wdXRWYWx1ZS52YWx1ZS5sZW5ndGggIT09IDBcbiAgICAgICAgJiYgKHByb3BzLm5ld1ZhbHVlTW9kZSAhPT0gdm9pZCAwIHx8IHByb3BzLm9uTmV3VmFsdWUgIT09IHZvaWQgMClcblxuICAgICAgY29uc3QgdGFiU2hvdWxkU2VsZWN0ID0gZS5zaGlmdEtleSAhPT0gdHJ1ZVxuICAgICAgICAmJiBwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZVxuICAgICAgICAmJiAob3B0aW9uSW5kZXgudmFsdWUgIT09IC0xIHx8IG5ld1ZhbHVlTW9kZVZhbGlkID09PSB0cnVlKVxuXG4gICAgICAvLyBlc2NhcGVcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgIHByZXZlbnQoZSkgLy8gcHJldmVudCBjbGVhcmluZyB0aGUgaW5wdXRWYWx1ZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gdGFiXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSA5ICYmIHRhYlNob3VsZFNlbGVjdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgY2xvc2VNZW51KClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgZS50YXJnZXQgPT09IHZvaWQgMFxuICAgICAgICB8fCBlLnRhcmdldC5pZCAhPT0gc3RhdGUudGFyZ2V0VWlkLnZhbHVlXG4gICAgICAgIHx8IHN0YXRlLmVkaXRhYmxlLnZhbHVlICE9PSB0cnVlXG4gICAgICApIHJldHVyblxuXG4gICAgICAvLyBkb3duXG4gICAgICBpZiAoXG4gICAgICAgIGUua2V5Q29kZSA9PT0gNDBcbiAgICAgICAgJiYgc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlICE9PSB0cnVlXG4gICAgICAgICYmIG1lbnUudmFsdWUgPT09IGZhbHNlXG4gICAgICApIHtcbiAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgICAgc2hvd1BvcHVwKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIGJhY2tzcGFjZVxuICAgICAgaWYgKFxuICAgICAgICBlLmtleUNvZGUgPT09IDhcbiAgICAgICAgJiYgKFxuICAgICAgICAgIHByb3BzLnVzZUNoaXBzID09PSB0cnVlXG4gICAgICAgICAgfHwgcHJvcHMuY2xlYXJhYmxlID09PSB0cnVlXG4gICAgICAgIClcbiAgICAgICAgJiYgcHJvcHMuaGlkZVNlbGVjdGVkICE9PSB0cnVlXG4gICAgICAgICYmIGlucHV0VmFsdWUudmFsdWUubGVuZ3RoID09PSAwXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzLm11bHRpcGxlID09PSB0cnVlICYmIEFycmF5LmlzQXJyYXkocHJvcHMubW9kZWxWYWx1ZSkgPT09IHRydWUpIHtcbiAgICAgICAgICByZW1vdmVBdEluZGV4KHByb3BzLm1vZGVsVmFsdWUubGVuZ3RoIC0gMSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5tb2RlbFZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBudWxsKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBob21lLCBlbmQgLSAzNiwgMzVcbiAgICAgIGlmIChcbiAgICAgICAgKGUua2V5Q29kZSA9PT0gMzUgfHwgZS5rZXlDb2RlID09PSAzNilcbiAgICAgICAgJiYgKHR5cGVvZiBpbnB1dFZhbHVlLnZhbHVlICE9PSAnc3RyaW5nJyB8fCBpbnB1dFZhbHVlLnZhbHVlLmxlbmd0aCA9PT0gMClcbiAgICAgICkge1xuICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgICAgICBvcHRpb25JbmRleC52YWx1ZSA9IC0xXG4gICAgICAgIG1vdmVPcHRpb25TZWxlY3Rpb24oZS5rZXlDb2RlID09PSAzNiA/IDEgOiAtMSwgcHJvcHMubXVsdGlwbGUpXG4gICAgICB9XG5cbiAgICAgIC8vIHBnIHVwLCBwZyBkb3duIC0gMzMsIDM0XG4gICAgICBpZiAoXG4gICAgICAgIChlLmtleUNvZGUgPT09IDMzIHx8IGUua2V5Q29kZSA9PT0gMzQpXG4gICAgICAgICYmIHZpcnR1YWxTY3JvbGxTbGljZVNpemVDb21wdXRlZC52YWx1ZSAhPT0gdm9pZCAwXG4gICAgICApIHtcbiAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgICAgb3B0aW9uSW5kZXgudmFsdWUgPSBNYXRoLm1heChcbiAgICAgICAgICAtMSxcbiAgICAgICAgICBNYXRoLm1pbihcbiAgICAgICAgICAgIHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUsXG4gICAgICAgICAgICBvcHRpb25JbmRleC52YWx1ZSArIChlLmtleUNvZGUgPT09IDMzID8gLTEgOiAxKSAqIHZpcnR1YWxTY3JvbGxTbGljZVNpemVDb21wdXRlZC52YWx1ZS52aWV3XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIG1vdmVPcHRpb25TZWxlY3Rpb24oZS5rZXlDb2RlID09PSAzMyA/IDEgOiAtMSwgcHJvcHMubXVsdGlwbGUpXG4gICAgICB9XG5cbiAgICAgIC8vIHVwLCBkb3duXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAzOCB8fCBlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICAgIG1vdmVPcHRpb25TZWxlY3Rpb24oZS5rZXlDb2RlID09PSAzOCA/IC0xIDogMSwgcHJvcHMubXVsdGlwbGUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9wdGlvbnNMZW5ndGggPSB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlXG5cbiAgICAgIC8vIGNsZWFyIHNlYXJjaCBidWZmZXIgaWYgZXhwaXJlZFxuICAgICAgaWYgKHNlYXJjaEJ1ZmZlciA9PT0gdm9pZCAwIHx8IHNlYXJjaEJ1ZmZlckV4cCA8IERhdGUubm93KCkpIHtcbiAgICAgICAgc2VhcmNoQnVmZmVyID0gJydcbiAgICAgIH1cblxuICAgICAgLy8ga2V5Ym9hcmQgc2VhcmNoIHdoZW4gbm90IGhhdmluZyB1c2UtaW5wdXRcbiAgICAgIGlmIChcbiAgICAgICAgb3B0aW9uc0xlbmd0aCA+IDBcbiAgICAgICAgJiYgcHJvcHMudXNlSW5wdXQgIT09IHRydWVcbiAgICAgICAgJiYgZS5rZXkgIT09IHZvaWQgMFxuICAgICAgICAmJiBlLmtleS5sZW5ndGggPT09IDEgLy8gcHJpbnRhYmxlIGNoYXJcbiAgICAgICAgJiYgZS5hbHRLZXkgPT09IGZhbHNlIC8vIG5vdCBrYmQgc2hvcnRjdXRcbiAgICAgICAgJiYgZS5jdHJsS2V5ID09PSBmYWxzZSAvLyBub3Qga2JkIHNob3J0Y3V0XG4gICAgICAgICYmIGUubWV0YUtleSA9PT0gZmFsc2UgLy8gbm90IGtiZCBzaG9ydGN1dCwgZXNwZWNpYWxseSBvbiBtYWNPUyB3aXRoIENvbW1hbmQga2V5XG4gICAgICAgICYmIChlLmtleUNvZGUgIT09IDMyIHx8IHNlYXJjaEJ1ZmZlci5sZW5ndGggIT09IDApIC8vIHNwYWNlIGluIG1pZGRsZSBvZiBzZWFyY2hcbiAgICAgICkge1xuICAgICAgICBtZW51LnZhbHVlICE9PSB0cnVlICYmIHNob3dQb3B1cChlKVxuXG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgY2hhciA9IGUua2V5LnRvTG9jYWxlTG93ZXJDYXNlKCksXG4gICAgICAgICAga2V5UmVwZWF0ID0gc2VhcmNoQnVmZmVyLmxlbmd0aCA9PT0gMSAmJiBzZWFyY2hCdWZmZXJbIDAgXSA9PT0gY2hhclxuXG4gICAgICAgIHNlYXJjaEJ1ZmZlckV4cCA9IERhdGUubm93KCkgKyAxNTAwXG4gICAgICAgIGlmIChrZXlSZXBlYXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgICAgICBzZWFyY2hCdWZmZXIgKz0gY2hhclxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoUmUgPSBuZXcgUmVnRXhwKCdeJyArIHNlYXJjaEJ1ZmZlci5zcGxpdCgnJykubWFwKGwgPT4gKHJlRXNjYXBlTGlzdC5pbmRleE9mKGwpICE9PSAtMSA/ICdcXFxcJyArIGwgOiBsKSkuam9pbignLionKSwgJ2knKVxuXG4gICAgICAgIGxldCBpbmRleCA9IG9wdGlvbkluZGV4LnZhbHVlXG5cbiAgICAgICAgaWYgKGtleVJlcGVhdCA9PT0gdHJ1ZSB8fCBpbmRleCA8IDAgfHwgc2VhcmNoUmUudGVzdChnZXRPcHRpb25MYWJlbC52YWx1ZShwcm9wcy5vcHRpb25zWyBpbmRleCBdKSkgIT09IHRydWUpIHtcbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBpbmRleCA9IG5vcm1hbGl6ZVRvSW50ZXJ2YWwoaW5kZXggKyAxLCAtMSwgb3B0aW9uc0xlbmd0aCAtIDEpXG4gICAgICAgICAgfVxuICAgICAgICAgIHdoaWxlIChpbmRleCAhPT0gb3B0aW9uSW5kZXgudmFsdWUgJiYgKFxuICAgICAgICAgICAgaXNPcHRpb25EaXNhYmxlZC52YWx1ZShwcm9wcy5vcHRpb25zWyBpbmRleCBdKSA9PT0gdHJ1ZVxuICAgICAgICAgICAgfHwgc2VhcmNoUmUudGVzdChnZXRPcHRpb25MYWJlbC52YWx1ZShwcm9wcy5vcHRpb25zWyBpbmRleCBdKSkgIT09IHRydWVcbiAgICAgICAgICApKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbkluZGV4LnZhbHVlICE9PSBpbmRleCkge1xuICAgICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHNldE9wdGlvbkluZGV4KGluZGV4KVxuICAgICAgICAgICAgc2Nyb2xsVG8oaW5kZXgpXG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIHByb3BzLnVzZUlucHV0ID09PSB0cnVlICYmIHByb3BzLmZpbGxJbnB1dCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKGdldE9wdGlvbkxhYmVsLnZhbHVlKHByb3BzLm9wdGlvbnNbIGluZGV4IF0pLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gZW50ZXIsIHNwYWNlICh3aGVuIG5vdCB1c2luZyB1c2UtaW5wdXQgYW5kIG5vdCBpbiBzZWFyY2gpLCBvciB0YWIgKHdoZW4gbm90IHVzaW5nIG11bHRpcGxlIGFuZCBvcHRpb24gc2VsZWN0ZWQpXG4gICAgICAvLyBzYW1lIHRhcmdldCBpcyBjaGVja2VkIGFib3ZlXG4gICAgICBpZiAoXG4gICAgICAgIGUua2V5Q29kZSAhPT0gMTNcbiAgICAgICAgJiYgKGUua2V5Q29kZSAhPT0gMzIgfHwgcHJvcHMudXNlSW5wdXQgPT09IHRydWUgfHwgc2VhcmNoQnVmZmVyICE9PSAnJylcbiAgICAgICAgJiYgKGUua2V5Q29kZSAhPT0gOSB8fCB0YWJTaG91bGRTZWxlY3QgPT09IGZhbHNlKVxuICAgICAgKSByZXR1cm5cblxuICAgICAgZS5rZXlDb2RlICE9PSA5ICYmIHN0b3BBbmRQcmV2ZW50KGUpXG5cbiAgICAgIGlmIChvcHRpb25JbmRleC52YWx1ZSAhPT0gLTEgJiYgb3B0aW9uSW5kZXgudmFsdWUgPCBvcHRpb25zTGVuZ3RoKSB7XG4gICAgICAgIHRvZ2dsZU9wdGlvbihwcm9wcy5vcHRpb25zWyBvcHRpb25JbmRleC52YWx1ZSBdKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKG5ld1ZhbHVlTW9kZVZhbGlkID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGRvbmUgPSAodmFsLCBtb2RlKSA9PiB7XG4gICAgICAgICAgaWYgKG1vZGUpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZU5ld1ZhbHVlTW9kZShtb2RlKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb2RlID0gcHJvcHMubmV3VmFsdWVNb2RlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdXBkYXRlSW5wdXRWYWx1ZSgnJywgcHJvcHMubXVsdGlwbGUgIT09IHRydWUsIHRydWUpXG5cbiAgICAgICAgICBpZiAodmFsID09PSB2b2lkIDAgfHwgdmFsID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBmbiA9IG1vZGUgPT09ICd0b2dnbGUnID8gdG9nZ2xlT3B0aW9uIDogYWRkXG4gICAgICAgICAgZm4odmFsLCBtb2RlID09PSAnYWRkLXVuaXF1ZScpXG5cbiAgICAgICAgICBpZiAocHJvcHMubXVsdGlwbGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHRhcmdldFJlZi52YWx1ZSAhPT0gbnVsbCAmJiB0YXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuICAgICAgICAgICAgaGlkZVBvcHVwKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMub25OZXdWYWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgZW1pdCgnbmV3VmFsdWUnLCBpbnB1dFZhbHVlLnZhbHVlLCBkb25lKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRvbmUoaW5wdXRWYWx1ZS52YWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZW51LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNsb3NlTWVudSgpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChzdGF0ZS5pbm5lckxvYWRpbmcudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgc2hvd1BvcHVwKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWaXJ0dWFsU2Nyb2xsRWwgKCkge1xuICAgICAgcmV0dXJuIGhhc0RpYWxvZyA9PT0gdHJ1ZVxuICAgICAgICA/IG1lbnVDb250ZW50UmVmLnZhbHVlXG4gICAgICAgIDogKFxuICAgICAgICAgICAgbWVudVJlZi52YWx1ZSAhPT0gbnVsbCAmJiBtZW51UmVmLnZhbHVlLmNvbnRlbnRFbCAhPT0gbnVsbFxuICAgICAgICAgICAgICA/IG1lbnVSZWYudmFsdWUuY29udGVudEVsXG4gICAgICAgICAgICAgIDogdm9pZCAwXG4gICAgICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgcmV0dXJuIGdldFZpcnR1YWxTY3JvbGxFbCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0aW9uICgpIHtcbiAgICAgIGlmIChwcm9wcy5oaWRlU2VsZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG5cbiAgICAgIGlmIChzbG90c1sgJ3NlbGVjdGVkLWl0ZW0nIF0gIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gc2VsZWN0ZWRTY29wZS52YWx1ZS5tYXAoc2NvcGUgPT4gc2xvdHNbICdzZWxlY3RlZC1pdGVtJyBdKHNjb3BlKSkuc2xpY2UoKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2xvdHMuc2VsZWN0ZWQgIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gW10uY29uY2F0KHNsb3RzLnNlbGVjdGVkKCkpXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy51c2VDaGlwcyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gc2VsZWN0ZWRTY29wZS52YWx1ZS5tYXAoKHNjb3BlLCBpKSA9PiBoKFFDaGlwLCB7XG4gICAgICAgICAga2V5OiAnb3B0aW9uLScgKyBpLFxuICAgICAgICAgIHJlbW92YWJsZTogc3RhdGUuZWRpdGFibGUudmFsdWUgPT09IHRydWUgJiYgaXNPcHRpb25EaXNhYmxlZC52YWx1ZShzY29wZS5vcHQpICE9PSB0cnVlLFxuICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgIHRleHRDb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgIG9uUmVtb3ZlICgpIHsgc2NvcGUucmVtb3ZlQXRJbmRleChpKSB9XG4gICAgICAgIH0sICgpID0+IGgoJ3NwYW4nLCB7XG4gICAgICAgICAgY2xhc3M6ICdlbGxpcHNpcycsXG4gICAgICAgICAgWyBzY29wZS5odG1sID09PSB0cnVlID8gJ2lubmVySFRNTCcgOiAndGV4dENvbnRlbnQnIF06IGdldE9wdGlvbkxhYmVsLnZhbHVlKHNjb3BlLm9wdClcbiAgICAgICAgfSkpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gW1xuICAgICAgICBoKCdzcGFuJywge1xuICAgICAgICAgIFsgdmFsdWVBc0h0bWwudmFsdWUgPT09IHRydWUgPyAnaW5uZXJIVE1MJyA6ICd0ZXh0Q29udGVudCcgXTogYXJpYUN1cnJlbnRWYWx1ZS52YWx1ZVxuICAgICAgICB9KVxuICAgICAgXVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEFsbE9wdGlvbnMgKCkge1xuICAgICAgaWYgKG5vT3B0aW9ucy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gc2xvdHNbICduby1vcHRpb24nIF0gIT09IHZvaWQgMFxuICAgICAgICAgID8gc2xvdHNbICduby1vcHRpb24nIF0oeyBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlLnZhbHVlIH0pXG4gICAgICAgICAgOiB2b2lkIDBcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm4gPSBzbG90cy5vcHRpb24gIT09IHZvaWQgMFxuICAgICAgICA/IHNsb3RzLm9wdGlvblxuICAgICAgICA6IHNjb3BlID0+IHtcbiAgICAgICAgICByZXR1cm4gaChRSXRlbSwge1xuICAgICAgICAgICAga2V5OiBzY29wZS5pbmRleCxcbiAgICAgICAgICAgIC4uLnNjb3BlLml0ZW1Qcm9wc1xuICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBoKFxuICAgICAgICAgICAgICBRSXRlbVNlY3Rpb24sXG4gICAgICAgICAgICAgICgpID0+IGgoXG4gICAgICAgICAgICAgICAgUUl0ZW1MYWJlbCxcbiAgICAgICAgICAgICAgICAoKSA9PiBoKCdzcGFuJywge1xuICAgICAgICAgICAgICAgICAgWyBzY29wZS5odG1sID09PSB0cnVlID8gJ2lubmVySFRNTCcgOiAndGV4dENvbnRlbnQnIF06IHNjb3BlLmxhYmVsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgbGV0IG9wdGlvbnMgPSBwYWRWaXJ0dWFsU2Nyb2xsKCdkaXYnLCBvcHRpb25TY29wZS52YWx1ZS5tYXAoZm4pKVxuXG4gICAgICBpZiAoc2xvdHNbICdiZWZvcmUtb3B0aW9ucycgXSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIG9wdGlvbnMgPSBzbG90c1sgJ2JlZm9yZS1vcHRpb25zJyBdKCkuY29uY2F0KG9wdGlvbnMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoTWVyZ2VTbG90KHNsb3RzWyAnYWZ0ZXItb3B0aW9ucycgXSwgb3B0aW9ucylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbnB1dCAoZnJvbURpYWxvZywgaXNUYXJnZXQpIHtcbiAgICAgIGNvbnN0IGF0dHJzID0gaXNUYXJnZXQgPT09IHRydWUgPyB7IC4uLmNvbWJvYm94QXR0cnMudmFsdWUsIC4uLnN0YXRlLnNwbGl0QXR0cnMuYXR0cmlidXRlcy52YWx1ZSB9IDogdm9pZCAwXG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHJlZjogaXNUYXJnZXQgPT09IHRydWUgPyB0YXJnZXRSZWYgOiB2b2lkIDAsXG4gICAgICAgIGtleTogJ2lfdCcsXG4gICAgICAgIGNsYXNzOiBjb21wdXRlZElucHV0Q2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBwcm9wcy5pbnB1dFN0eWxlLFxuICAgICAgICB2YWx1ZTogaW5wdXRWYWx1ZS52YWx1ZSAhPT0gdm9pZCAwID8gaW5wdXRWYWx1ZS52YWx1ZSA6ICcnLFxuICAgICAgICAvLyByZXF1aXJlZCBmb3IgQW5kcm9pZCBpbiBvcmRlciB0byBzaG93IEVOVEVSIGtleSB3aGVuIGluIGZvcm1cbiAgICAgICAgdHlwZTogJ3NlYXJjaCcsXG4gICAgICAgIC4uLmF0dHJzLFxuICAgICAgICBpZDogaXNUYXJnZXQgPT09IHRydWUgPyBzdGF0ZS50YXJnZXRVaWQudmFsdWUgOiB2b2lkIDAsXG4gICAgICAgIG1heGxlbmd0aDogcHJvcHMubWF4bGVuZ3RoLFxuICAgICAgICBhdXRvY29tcGxldGU6IHByb3BzLmF1dG9jb21wbGV0ZSxcbiAgICAgICAgJ2RhdGEtYXV0b2ZvY3VzJzogZnJvbURpYWxvZyA9PT0gdHJ1ZSB8fCBwcm9wcy5hdXRvZm9jdXMgPT09IHRydWUgfHwgdm9pZCAwLFxuICAgICAgICBkaXNhYmxlZDogcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSxcbiAgICAgICAgcmVhZG9ubHk6IHByb3BzLnJlYWRvbmx5ID09PSB0cnVlLFxuICAgICAgICAuLi5pbnB1dENvbnRyb2xFdmVudHMudmFsdWVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyb21EaWFsb2cgIT09IHRydWUgJiYgaGFzRGlhbG9nID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuY2xhc3MpID09PSB0cnVlKSB7XG4gICAgICAgICAgZGF0YS5jbGFzcyA9IFsgLi4uZGF0YS5jbGFzcywgJ25vLXBvaW50ZXItZXZlbnRzJyBdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGF0YS5jbGFzcyArPSAnIG5vLXBvaW50ZXItZXZlbnRzJ1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdpbnB1dCcsIGRhdGEpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25JbnB1dCAoZSkge1xuICAgICAgaWYgKGZpbHRlclRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChmaWx0ZXJUaW1lcilcbiAgICAgICAgZmlsdGVyVGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgICBpZiAoaW5wdXRWYWx1ZVRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChpbnB1dFZhbHVlVGltZXIpXG4gICAgICAgIGlucHV0VmFsdWVUaW1lciA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGUgJiYgZS50YXJnZXQgJiYgZS50YXJnZXQucUNvbXBvc2luZyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSB8fCAnJylcbiAgICAgIC8vIG1hcmsgaXQgaGVyZSBhcyB1c2VyIGlucHV0IHNvIHRoYXQgaWYgdXBkYXRlSW5wdXRWYWx1ZSBpcyBjYWxsZWRcbiAgICAgIC8vIGJlZm9yZSBmaWx0ZXIgaXMgY2FsbGVkIHRoZSBpbmRpY2F0b3IgaXMgcmVzZXRcbiAgICAgIHVzZXJJbnB1dFZhbHVlID0gdHJ1ZVxuICAgICAgZGVmYXVsdElucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnZhbHVlXG5cbiAgICAgIGlmIChcbiAgICAgICAgc3RhdGUuZm9jdXNlZC52YWx1ZSAhPT0gdHJ1ZVxuICAgICAgICAmJiAoaGFzRGlhbG9nICE9PSB0cnVlIHx8IGRpYWxvZ0ZpZWxkRm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSlcbiAgICAgICkge1xuICAgICAgICBzdGF0ZS5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5vbkZpbHRlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGZpbHRlclRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZmlsdGVyVGltZXIgPSBudWxsXG4gICAgICAgICAgZmlsdGVyKGlucHV0VmFsdWUudmFsdWUpXG4gICAgICAgIH0sIHByb3BzLmlucHV0RGVib3VuY2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0SW5wdXRWYWx1ZSAodmFsLCBlbWl0SW1tZWRpYXRlbHkpIHtcbiAgICAgIGlmIChpbnB1dFZhbHVlLnZhbHVlICE9PSB2YWwpIHtcbiAgICAgICAgaW5wdXRWYWx1ZS52YWx1ZSA9IHZhbFxuXG4gICAgICAgIGlmIChlbWl0SW1tZWRpYXRlbHkgPT09IHRydWUgfHwgcHJvcHMuaW5wdXREZWJvdW5jZSA9PT0gMCB8fCBwcm9wcy5pbnB1dERlYm91bmNlID09PSAnMCcpIHtcbiAgICAgICAgICBlbWl0KCdpbnB1dFZhbHVlJywgdmFsKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlucHV0VmFsdWVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaW5wdXRWYWx1ZVRpbWVyID0gbnVsbFxuICAgICAgICAgICAgZW1pdCgnaW5wdXRWYWx1ZScsIHZhbClcbiAgICAgICAgICB9LCBwcm9wcy5pbnB1dERlYm91bmNlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlSW5wdXRWYWx1ZSAodmFsLCBub0ZpbHRlcmluZywgaW50ZXJuYWwpIHtcbiAgICAgIHVzZXJJbnB1dFZhbHVlID0gaW50ZXJuYWwgIT09IHRydWVcblxuICAgICAgaWYgKHByb3BzLnVzZUlucHV0ID09PSB0cnVlKSB7XG4gICAgICAgIHNldElucHV0VmFsdWUodmFsLCB0cnVlKVxuXG4gICAgICAgIGlmIChub0ZpbHRlcmluZyA9PT0gdHJ1ZSB8fCBpbnRlcm5hbCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGRlZmF1bHRJbnB1dFZhbHVlID0gdmFsXG4gICAgICAgIH1cblxuICAgICAgICBub0ZpbHRlcmluZyAhPT0gdHJ1ZSAmJiBmaWx0ZXIodmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbHRlciAodmFsLCBrZWVwQ2xvc2VkLCBhZnRlclVwZGF0ZUZuKSB7XG4gICAgICBpZiAocHJvcHMub25GaWx0ZXIgPT09IHZvaWQgMCB8fCAoa2VlcENsb3NlZCAhPT0gdHJ1ZSAmJiBzdGF0ZS5mb2N1c2VkLnZhbHVlICE9PSB0cnVlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBlbWl0KCdmaWx0ZXJBYm9ydCcpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgICBpbm5lckxvYWRpbmdJbmRpY2F0b3IudmFsdWUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgdmFsICE9PSAnJ1xuICAgICAgICAmJiBwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZVxuICAgICAgICAmJiBpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCAhPT0gMFxuICAgICAgICAmJiB1c2VySW5wdXRWYWx1ZSAhPT0gdHJ1ZVxuICAgICAgICAmJiB2YWwgPT09IGdldE9wdGlvbkxhYmVsLnZhbHVlKGlubmVyVmFsdWUudmFsdWVbIDAgXSlcbiAgICAgICkge1xuICAgICAgICB2YWwgPSAnJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsb2NhbEZpbHRlcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1lbnUudmFsdWUgPT09IHRydWUgJiYgKG1lbnUudmFsdWUgPSBmYWxzZSlcbiAgICAgIH0sIDEwKVxuXG4gICAgICBmaWx0ZXJJZCAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQoZmlsdGVySWQpXG4gICAgICBmaWx0ZXJJZCA9IGxvY2FsRmlsdGVySWRcblxuICAgICAgZW1pdChcbiAgICAgICAgJ2ZpbHRlcicsXG4gICAgICAgIHZhbCxcbiAgICAgICAgKGZuLCBhZnRlckZuKSA9PiB7XG4gICAgICAgICAgaWYgKChrZWVwQ2xvc2VkID09PSB0cnVlIHx8IHN0YXRlLmZvY3VzZWQudmFsdWUgPT09IHRydWUpICYmIGZpbHRlcklkID09PSBsb2NhbEZpbHRlcklkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoZmlsdGVySWQpXG5cbiAgICAgICAgICAgIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBmbigpXG5cbiAgICAgICAgICAgIC8vIGhpZGUgaW5kaWNhdG9yIHRvIGFsbG93IGFycm93IHRvIGFuaW1hdGVcbiAgICAgICAgICAgIGlubmVyTG9hZGluZ0luZGljYXRvci52YWx1ZSA9IGZhbHNlXG5cbiAgICAgICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlID0gZmFsc2VcblxuICAgICAgICAgICAgICBpZiAoc3RhdGUuZWRpdGFibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2VlcENsb3NlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgbWVudS52YWx1ZSA9PT0gdHJ1ZSAmJiBoaWRlUG9wdXAoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtZW51LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVNZW51KHRydWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbWVudS52YWx1ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0eXBlb2YgYWZ0ZXJGbiA9PT0gJ2Z1bmN0aW9uJyAmJiBuZXh0VGljaygoKSA9PiB7IGFmdGVyRm4ocHJveHkpIH0pXG4gICAgICAgICAgICAgIHR5cGVvZiBhZnRlclVwZGF0ZUZuID09PSAnZnVuY3Rpb24nICYmIG5leHRUaWNrKCgpID0+IHsgYWZ0ZXJVcGRhdGVGbihwcm94eSkgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXRlLmZvY3VzZWQudmFsdWUgPT09IHRydWUgJiYgZmlsdGVySWQgPT09IGxvY2FsRmlsdGVySWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChmaWx0ZXJJZClcbiAgICAgICAgICAgIHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgICAgICBpbm5lckxvYWRpbmdJbmRpY2F0b3IudmFsdWUgPSBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgICBtZW51LnZhbHVlID09PSB0cnVlICYmIChtZW51LnZhbHVlID0gZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRNZW51ICgpIHtcbiAgICAgIHJldHVybiBoKFFNZW51LCB7XG4gICAgICAgIHJlZjogbWVudVJlZixcbiAgICAgICAgY2xhc3M6IG1lbnVDb250ZW50Q2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBwcm9wcy5wb3B1cENvbnRlbnRTdHlsZSxcbiAgICAgICAgbW9kZWxWYWx1ZTogbWVudS52YWx1ZSxcbiAgICAgICAgZml0OiBwcm9wcy5tZW51U2hyaW5rICE9PSB0cnVlLFxuICAgICAgICBjb3ZlcjogcHJvcHMub3B0aW9uc0NvdmVyID09PSB0cnVlICYmIG5vT3B0aW9ucy52YWx1ZSAhPT0gdHJ1ZSAmJiBwcm9wcy51c2VJbnB1dCAhPT0gdHJ1ZSxcbiAgICAgICAgYW5jaG9yOiBwcm9wcy5tZW51QW5jaG9yLFxuICAgICAgICBzZWxmOiBwcm9wcy5tZW51U2VsZixcbiAgICAgICAgb2Zmc2V0OiBwcm9wcy5tZW51T2Zmc2V0LFxuICAgICAgICBkYXJrOiBpc09wdGlvbnNEYXJrLnZhbHVlLFxuICAgICAgICBub1BhcmVudEV2ZW50OiB0cnVlLFxuICAgICAgICBub1JlZm9jdXM6IHRydWUsXG4gICAgICAgIG5vRm9jdXM6IHRydWUsXG4gICAgICAgIG5vUm91dGVEaXNtaXNzOiBwcm9wcy5wb3B1cE5vUm91dGVEaXNtaXNzLFxuICAgICAgICBzcXVhcmU6IHNxdWFyZWRNZW51LnZhbHVlLFxuICAgICAgICB0cmFuc2l0aW9uU2hvdzogcHJvcHMudHJhbnNpdGlvblNob3csXG4gICAgICAgIHRyYW5zaXRpb25IaWRlOiBwcm9wcy50cmFuc2l0aW9uSGlkZSxcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgIHNlcGFyYXRlQ2xvc2VQb3B1cDogdHJ1ZSxcbiAgICAgICAgLi4ubGlzdGJveEF0dHJzLnZhbHVlLFxuICAgICAgICBvblNjcm9sbFBhc3NpdmU6IG9uVmlydHVhbFNjcm9sbEV2dCxcbiAgICAgICAgb25CZWZvcmVTaG93OiBvbkNvbnRyb2xQb3B1cFNob3csXG4gICAgICAgIG9uQmVmb3JlSGlkZTogb25NZW51QmVmb3JlSGlkZSxcbiAgICAgICAgb25TaG93OiBvbk1lbnVTaG93XG4gICAgICB9LCBnZXRBbGxPcHRpb25zKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTWVudUJlZm9yZUhpZGUgKGUpIHtcbiAgICAgIG9uQ29udHJvbFBvcHVwSGlkZShlKVxuICAgICAgY2xvc2VNZW51KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1lbnVTaG93ICgpIHtcbiAgICAgIHNldFZpcnR1YWxTY3JvbGxTaXplKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRpYWxvZ0ZpZWxkRm9jdXMgKGUpIHtcbiAgICAgIHN0b3AoZSlcbiAgICAgIHRhcmdldFJlZi52YWx1ZSAhPT0gbnVsbCAmJiB0YXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuICAgICAgZGlhbG9nRmllbGRGb2N1c2VkLnZhbHVlID0gdHJ1ZVxuICAgICAgd2luZG93LnNjcm9sbFRvKHdpbmRvdy5wYWdlWE9mZnNldCB8fCB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgMCwgMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRpYWxvZ0ZpZWxkQmx1ciAoZSkge1xuICAgICAgc3RvcChlKVxuICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBkaWFsb2dGaWVsZEZvY3VzZWQudmFsdWUgPSBmYWxzZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREaWFsb2cgKCkge1xuICAgICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgICAgaChRRmllbGQsIHtcbiAgICAgICAgICBjbGFzczogYGNvbC1hdXRvICR7IHN0YXRlLmZpZWxkQ2xhc3MudmFsdWUgfWAsXG4gICAgICAgICAgLi4uaW5uZXJGaWVsZFByb3BzLnZhbHVlLFxuICAgICAgICAgIGZvcjogc3RhdGUudGFyZ2V0VWlkLnZhbHVlLFxuICAgICAgICAgIGRhcms6IGlzT3B0aW9uc0RhcmsudmFsdWUsXG4gICAgICAgICAgc3F1YXJlOiB0cnVlLFxuICAgICAgICAgIGxvYWRpbmc6IGlubmVyTG9hZGluZ0luZGljYXRvci52YWx1ZSxcbiAgICAgICAgICBpdGVtQWxpZ25lZDogZmFsc2UsXG4gICAgICAgICAgZmlsbGVkOiB0cnVlLFxuICAgICAgICAgIHN0YWNrTGFiZWw6IGlucHV0VmFsdWUudmFsdWUubGVuZ3RoICE9PSAwLFxuICAgICAgICAgIC4uLnN0YXRlLnNwbGl0QXR0cnMubGlzdGVuZXJzLnZhbHVlLFxuICAgICAgICAgIG9uRm9jdXM6IG9uRGlhbG9nRmllbGRGb2N1cyxcbiAgICAgICAgICBvbkJsdXI6IG9uRGlhbG9nRmllbGRCbHVyXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAuLi5zbG90cyxcbiAgICAgICAgICByYXdDb250cm9sOiAoKSA9PiBzdGF0ZS5nZXRDb250cm9sKHRydWUpLFxuICAgICAgICAgIGJlZm9yZTogdm9pZCAwLFxuICAgICAgICAgIGFmdGVyOiB2b2lkIDBcbiAgICAgICAgfSlcbiAgICAgIF1cblxuICAgICAgbWVudS52YWx1ZSA9PT0gdHJ1ZSAmJiBjb250ZW50LnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICByZWY6IG1lbnVDb250ZW50UmVmLFxuICAgICAgICAgIGNsYXNzOiBtZW51Q29udGVudENsYXNzLnZhbHVlICsgJyBzY3JvbGwnLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy5wb3B1cENvbnRlbnRTdHlsZSxcbiAgICAgICAgICAuLi5saXN0Ym94QXR0cnMudmFsdWUsXG4gICAgICAgICAgb25DbGljazogcHJldmVudCxcbiAgICAgICAgICBvblNjcm9sbFBhc3NpdmU6IG9uVmlydHVhbFNjcm9sbEV2dFxuICAgICAgICB9LCBnZXRBbGxPcHRpb25zKCkpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKFFEaWFsb2csIHtcbiAgICAgICAgcmVmOiBkaWFsb2dSZWYsXG4gICAgICAgIG1vZGVsVmFsdWU6IGRpYWxvZy52YWx1ZSxcbiAgICAgICAgcG9zaXRpb246IHByb3BzLnVzZUlucHV0ID09PSB0cnVlID8gJ3RvcCcgOiB2b2lkIDAsXG4gICAgICAgIHRyYW5zaXRpb25TaG93OiB0cmFuc2l0aW9uU2hvd0NvbXB1dGVkLFxuICAgICAgICB0cmFuc2l0aW9uSGlkZTogcHJvcHMudHJhbnNpdGlvbkhpZGUsXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICBub1JvdXRlRGlzbWlzczogcHJvcHMucG9wdXBOb1JvdXRlRGlzbWlzcyxcbiAgICAgICAgb25CZWZvcmVTaG93OiBvbkNvbnRyb2xQb3B1cFNob3csXG4gICAgICAgIG9uQmVmb3JlSGlkZTogb25EaWFsb2dCZWZvcmVIaWRlLFxuICAgICAgICBvbkhpZGU6IG9uRGlhbG9nSGlkZSxcbiAgICAgICAgb25TaG93OiBvbkRpYWxvZ1Nob3dcbiAgICAgIH0sICgpID0+IGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdxLXNlbGVjdF9fZGlhbG9nJ1xuICAgICAgICAgICsgKGlzT3B0aW9uc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtc2VsZWN0X19kaWFsb2ctLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgICAgICsgKGRpYWxvZ0ZpZWxkRm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zZWxlY3RfX2RpYWxvZy0tZm9jdXNlZCcgOiAnJylcbiAgICAgIH0sIGNvbnRlbnQpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGlhbG9nQmVmb3JlSGlkZSAoZSkge1xuICAgICAgb25Db250cm9sUG9wdXBIaWRlKGUpXG5cbiAgICAgIGlmIChkaWFsb2dSZWYudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgZGlhbG9nUmVmLnZhbHVlLl9fdXBkYXRlUmVmb2N1c1RhcmdldChcbiAgICAgICAgICBzdGF0ZS5yb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoJy5xLWZpZWxkX19uYXRpdmUgPiBbdGFiaW5kZXhdOmxhc3QtY2hpbGQnKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmZvY3VzZWQudmFsdWUgPSBmYWxzZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGlhbG9nSGlkZSAoZSkge1xuICAgICAgaGlkZVBvcHVwKClcbiAgICAgIHN0YXRlLmZvY3VzZWQudmFsdWUgPT09IGZhbHNlICYmIGVtaXQoJ2JsdXInLCBlKVxuICAgICAgcmVzZXRJbnB1dFZhbHVlKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRpYWxvZ1Nob3cgKCkge1xuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICBpZiAoXG4gICAgICAgIChlbCA9PT0gbnVsbCB8fCBlbC5pZCAhPT0gc3RhdGUudGFyZ2V0VWlkLnZhbHVlKVxuICAgICAgICAmJiB0YXJnZXRSZWYudmFsdWUgIT09IG51bGxcbiAgICAgICAgJiYgdGFyZ2V0UmVmLnZhbHVlICE9PSBlbFxuICAgICAgKSB7XG4gICAgICAgIHRhcmdldFJlZi52YWx1ZS5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIHNldFZpcnR1YWxTY3JvbGxTaXplKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZU1lbnUgKCkge1xuICAgICAgaWYgKGRpYWxvZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgb3B0aW9uSW5kZXgudmFsdWUgPSAtMVxuXG4gICAgICBpZiAobWVudS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBtZW51LnZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlLmZvY3VzZWQudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChmaWx0ZXJJZCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChmaWx0ZXJJZClcbiAgICAgICAgICBmaWx0ZXJJZCA9IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZS5pbm5lckxvYWRpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBlbWl0KCdmaWx0ZXJBYm9ydCcpXG4gICAgICAgICAgc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgICBpbm5lckxvYWRpbmdJbmRpY2F0b3IudmFsdWUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1BvcHVwIChlKSB7XG4gICAgICBpZiAoc3RhdGUuZWRpdGFibGUudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNEaWFsb2cgPT09IHRydWUpIHtcbiAgICAgICAgc3RhdGUub25Db250cm9sRm9jdXNpbihlKVxuICAgICAgICBkaWFsb2cudmFsdWUgPSB0cnVlXG4gICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBzdGF0ZS5mb2N1cygpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3RhdGUuZm9jdXMoKVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMub25GaWx0ZXIgIT09IHZvaWQgMCkge1xuICAgICAgICBmaWx0ZXIoaW5wdXRWYWx1ZS52YWx1ZSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vT3B0aW9ucy52YWx1ZSAhPT0gdHJ1ZSB8fCBzbG90c1sgJ25vLW9wdGlvbicgXSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIG1lbnUudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZVBvcHVwICgpIHtcbiAgICAgIGRpYWxvZy52YWx1ZSA9IGZhbHNlXG4gICAgICBjbG9zZU1lbnUoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0SW5wdXRWYWx1ZSAoKSB7XG4gICAgICBwcm9wcy51c2VJbnB1dCA9PT0gdHJ1ZSAmJiB1cGRhdGVJbnB1dFZhbHVlKFxuICAgICAgICBwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5maWxsSW5wdXQgPT09IHRydWUgJiYgaW5uZXJWYWx1ZS52YWx1ZS5sZW5ndGggIT09IDBcbiAgICAgICAgICA/IGdldE9wdGlvbkxhYmVsLnZhbHVlKGlubmVyVmFsdWUudmFsdWVbIDAgXSkgfHwgJydcbiAgICAgICAgICA6ICcnLFxuICAgICAgICB0cnVlLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTWVudSAoc2hvdykge1xuICAgICAgbGV0IG9wdGlvbkluZGV4ID0gLTFcblxuICAgICAgaWYgKHNob3cgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKGlubmVyVmFsdWUudmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgY29uc3QgdmFsID0gZ2V0T3B0aW9uVmFsdWUudmFsdWUoaW5uZXJWYWx1ZS52YWx1ZVsgMCBdKVxuICAgICAgICAgIG9wdGlvbkluZGV4ID0gcHJvcHMub3B0aW9ucy5maW5kSW5kZXgodiA9PiBpc0RlZXBFcXVhbChnZXRPcHRpb25WYWx1ZS52YWx1ZSh2KSwgdmFsKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsUmVzZXRWaXJ0dWFsU2Nyb2xsKG9wdGlvbkluZGV4KVxuICAgICAgfVxuXG4gICAgICBzZXRPcHRpb25JbmRleChvcHRpb25JbmRleClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXJlbmRlck1lbnUgKG5ld0xlbmd0aCwgb2xkTGVuZ3RoKSB7XG4gICAgICBpZiAobWVudS52YWx1ZSA9PT0gdHJ1ZSAmJiBzdGF0ZS5pbm5lckxvYWRpbmcudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGxvY2FsUmVzZXRWaXJ0dWFsU2Nyb2xsKC0xLCB0cnVlKVxuXG4gICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBpZiAobWVudS52YWx1ZSA9PT0gdHJ1ZSAmJiBzdGF0ZS5pbm5lckxvYWRpbmcudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAobmV3TGVuZ3RoID4gb2xkTGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGxvY2FsUmVzZXRWaXJ0dWFsU2Nyb2xsKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICB1cGRhdGVNZW51KHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1lbnVQb3NpdGlvbiAoKSB7XG4gICAgICBpZiAoZGlhbG9nLnZhbHVlID09PSBmYWxzZSAmJiBtZW51UmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIG1lbnVSZWYudmFsdWUudXBkYXRlUG9zaXRpb24oKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ29udHJvbFBvcHVwU2hvdyAoZSkge1xuICAgICAgZSAhPT0gdm9pZCAwICYmIHN0b3AoZSlcbiAgICAgIGVtaXQoJ3BvcHVwU2hvdycsIGUpXG4gICAgICBzdGF0ZS5oYXNQb3B1cE9wZW4gPSB0cnVlXG4gICAgICBzdGF0ZS5vbkNvbnRyb2xGb2N1c2luKGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Db250cm9sUG9wdXBIaWRlIChlKSB7XG4gICAgICBlICE9PSB2b2lkIDAgJiYgc3RvcChlKVxuICAgICAgZW1pdCgncG9wdXBIaWRlJywgZSlcbiAgICAgIHN0YXRlLmhhc1BvcHVwT3BlbiA9IGZhbHNlXG4gICAgICBzdGF0ZS5vbkNvbnRyb2xGb2N1c291dChlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByZVN0YXRlICgpIHtcbiAgICAgIGhhc0RpYWxvZyA9ICRxLnBsYXRmb3JtLmlzLm1vYmlsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5iZWhhdmlvciAhPT0gJ2RpYWxvZydcbiAgICAgICAgPyBmYWxzZVxuICAgICAgICA6IHByb3BzLmJlaGF2aW9yICE9PSAnbWVudScgJiYgKFxuICAgICAgICAgIHByb3BzLnVzZUlucHV0ID09PSB0cnVlXG4gICAgICAgICAgICA/IHNsb3RzWyAnbm8tb3B0aW9uJyBdICE9PSB2b2lkIDAgfHwgcHJvcHMub25GaWx0ZXIgIT09IHZvaWQgMCB8fCBub09wdGlvbnMudmFsdWUgPT09IGZhbHNlXG4gICAgICAgICAgICA6IHRydWVcbiAgICAgICAgKVxuXG4gICAgICB0cmFuc2l0aW9uU2hvd0NvbXB1dGVkID0gJHEucGxhdGZvcm0uaXMuaW9zID09PSB0cnVlICYmIGhhc0RpYWxvZyA9PT0gdHJ1ZSAmJiBwcm9wcy51c2VJbnB1dCA9PT0gdHJ1ZVxuICAgICAgICA/ICdmYWRlJ1xuICAgICAgICA6IHByb3BzLnRyYW5zaXRpb25TaG93XG4gICAgfVxuXG4gICAgb25CZWZvcmVVcGRhdGUodXBkYXRlUHJlU3RhdGUpXG4gICAgb25VcGRhdGVkKHVwZGF0ZU1lbnVQb3NpdGlvbilcblxuICAgIHVwZGF0ZVByZVN0YXRlKClcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBmaWx0ZXJUaW1lciAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQoZmlsdGVyVGltZXIpXG4gICAgICBpbnB1dFZhbHVlVGltZXIgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KGlucHV0VmFsdWVUaW1lcilcbiAgICB9KVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgICAgc2hvd1BvcHVwLCBoaWRlUG9wdXAsXG4gICAgICByZW1vdmVBdEluZGV4LCBhZGQsIHRvZ2dsZU9wdGlvbixcbiAgICAgIGdldE9wdGlvbkluZGV4OiAoKSA9PiBvcHRpb25JbmRleC52YWx1ZSxcbiAgICAgIHNldE9wdGlvbkluZGV4LCBtb3ZlT3B0aW9uU2VsZWN0aW9uLFxuICAgICAgZmlsdGVyLCB1cGRhdGVNZW51UG9zaXRpb24sIHVwZGF0ZUlucHV0VmFsdWUsXG4gICAgICBpc09wdGlvblNlbGVjdGVkLFxuICAgICAgZ2V0RW1pdHRpbmdPcHRpb25WYWx1ZSxcbiAgICAgIGlzT3B0aW9uRGlzYWJsZWQ6ICguLi5hcmdzKSA9PiBpc09wdGlvbkRpc2FibGVkLnZhbHVlLmFwcGx5KG51bGwsIGFyZ3MpID09PSB0cnVlLFxuICAgICAgZ2V0T3B0aW9uVmFsdWU6ICguLi5hcmdzKSA9PiBnZXRPcHRpb25WYWx1ZS52YWx1ZS5hcHBseShudWxsLCBhcmdzKSxcbiAgICAgIGdldE9wdGlvbkxhYmVsOiAoLi4uYXJncykgPT4gZ2V0T3B0aW9uTGFiZWwudmFsdWUuYXBwbHkobnVsbCwgYXJncylcbiAgICB9KVxuXG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgICAgaW5uZXJWYWx1ZSxcblxuICAgICAgZmllbGRDbGFzczogY29tcHV0ZWQoKCkgPT5cbiAgICAgICAgYHEtc2VsZWN0IHEtZmllbGQtLWF1dG8taGVpZ2h0IHEtc2VsZWN0LS13aXRoJHsgcHJvcHMudXNlSW5wdXQgIT09IHRydWUgPyAnb3V0JyA6ICcnIH0taW5wdXRgXG4gICAgICAgICsgYCBxLXNlbGVjdC0td2l0aCR7IHByb3BzLnVzZUNoaXBzICE9PSB0cnVlID8gJ291dCcgOiAnJyB9LWNoaXBzYFxuICAgICAgICArIGAgcS1zZWxlY3QtLSR7IHByb3BzLm11bHRpcGxlID09PSB0cnVlID8gJ211bHRpcGxlJyA6ICdzaW5nbGUnIH1gXG4gICAgICApLFxuXG4gICAgICBpbnB1dFJlZixcbiAgICAgIHRhcmdldFJlZixcbiAgICAgIGhhc1ZhbHVlLFxuICAgICAgc2hvd1BvcHVwLFxuXG4gICAgICBmbG9hdGluZ0xhYmVsOiBjb21wdXRlZCgoKSA9PlxuICAgICAgICAocHJvcHMuaGlkZVNlbGVjdGVkICE9PSB0cnVlICYmIGhhc1ZhbHVlLnZhbHVlID09PSB0cnVlKVxuICAgICAgICB8fCB0eXBlb2YgaW5wdXRWYWx1ZS52YWx1ZSA9PT0gJ251bWJlcidcbiAgICAgICAgfHwgaW5wdXRWYWx1ZS52YWx1ZS5sZW5ndGggIT09IDBcbiAgICAgICAgfHwgZmllbGRWYWx1ZUlzRmlsbGVkKHByb3BzLmRpc3BsYXlWYWx1ZSlcbiAgICAgICksXG5cbiAgICAgIGdldENvbnRyb2xDaGlsZDogKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc3RhdGUuZWRpdGFibGUudmFsdWUgIT09IGZhbHNlICYmIChcbiAgICAgICAgICAgIGRpYWxvZy52YWx1ZSA9PT0gdHJ1ZSAvLyBkaWFsb2cgYWx3YXlzIGhhcyBtZW51IGRpc3BsYXllZCwgc28gbmVlZCB0byByZW5kZXIgaXRcbiAgICAgICAgICAgIHx8IG5vT3B0aW9ucy52YWx1ZSAhPT0gdHJ1ZVxuICAgICAgICAgICAgfHwgc2xvdHNbICduby1vcHRpb24nIF0gIT09IHZvaWQgMFxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGhhc0RpYWxvZyA9PT0gdHJ1ZSA/IGdldERpYWxvZygpIDogZ2V0TWVudSgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdGUuaGFzUG9wdXBPcGVuID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gZXhwbGljaXRseSBzZXQgaXQgb3RoZXJ3aXNlIFRBQiB3aWxsIG5vdCBibHVyIGNvbXBvbmVudFxuICAgICAgICAgIHN0YXRlLmhhc1BvcHVwT3BlbiA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGNvbnRyb2xFdmVudHM6IHtcbiAgICAgICAgb25Gb2N1c2luIChlKSB7IHN0YXRlLm9uQ29udHJvbEZvY3VzaW4oZSkgfSxcbiAgICAgICAgb25Gb2N1c291dCAoZSkge1xuICAgICAgICAgIHN0YXRlLm9uQ29udHJvbEZvY3Vzb3V0KGUsICgpID0+IHtcbiAgICAgICAgICAgIHJlc2V0SW5wdXRWYWx1ZSgpXG4gICAgICAgICAgICBjbG9zZU1lbnUoKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2sgKGUpIHtcbiAgICAgICAgICAvLyBsYWJlbCBmcm9tIFFGaWVsZCB3aWxsIHByb3BhZ2F0ZSBjbGljayBvbiB0aGUgaW5wdXRcbiAgICAgICAgICBwcmV2ZW50KGUpXG5cbiAgICAgICAgICBpZiAoaGFzRGlhbG9nICE9PSB0cnVlICYmIG1lbnUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNsb3NlTWVudSgpXG4gICAgICAgICAgICB0YXJnZXRSZWYudmFsdWUgIT09IG51bGwgJiYgdGFyZ2V0UmVmLnZhbHVlLmZvY3VzKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNob3dQb3B1cChlKVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBnZXRDb250cm9sOiBmcm9tRGlhbG9nID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBnZXRTZWxlY3Rpb24oKVxuICAgICAgICBjb25zdCBpc1RhcmdldCA9IGZyb21EaWFsb2cgPT09IHRydWUgfHwgZGlhbG9nLnZhbHVlICE9PSB0cnVlIHx8IGhhc0RpYWxvZyAhPT0gdHJ1ZVxuXG4gICAgICAgIGlmIChwcm9wcy51c2VJbnB1dCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNoaWxkLnB1c2goZ2V0SW5wdXQoZnJvbURpYWxvZywgaXNUYXJnZXQpKVxuICAgICAgICB9XG4gICAgICAgIC8vIHRoZXJlIGNhbiBiZSBvbmx5IG9uZSAod2hlbiBkaWFsb2cgaXMgb3BlbmVkIHRoZSBjb250cm9sIGluIGRpYWxvZyBzaG91bGQgYmUgdGFyZ2V0KVxuICAgICAgICBlbHNlIGlmIChzdGF0ZS5lZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IGF0dHJzID0gaXNUYXJnZXQgPT09IHRydWUgPyBjb21ib2JveEF0dHJzLnZhbHVlIDogdm9pZCAwXG5cbiAgICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgICAgaCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgIHJlZjogaXNUYXJnZXQgPT09IHRydWUgPyB0YXJnZXRSZWYgOiB2b2lkIDAsXG4gICAgICAgICAgICAgIGtleTogJ2RfdCcsXG4gICAgICAgICAgICAgIGNsYXNzOiAncS1zZWxlY3RfX2ZvY3VzLXRhcmdldCcsXG4gICAgICAgICAgICAgIGlkOiBpc1RhcmdldCA9PT0gdHJ1ZSA/IHN0YXRlLnRhcmdldFVpZC52YWx1ZSA6IHZvaWQgMCxcbiAgICAgICAgICAgICAgdmFsdWU6IGFyaWFDdXJyZW50VmFsdWUudmFsdWUsXG4gICAgICAgICAgICAgIHJlYWRvbmx5OiB0cnVlLFxuICAgICAgICAgICAgICAnZGF0YS1hdXRvZm9jdXMnOiBmcm9tRGlhbG9nID09PSB0cnVlIHx8IHByb3BzLmF1dG9mb2N1cyA9PT0gdHJ1ZSB8fCB2b2lkIDAsXG4gICAgICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgICAgICBvbktleWRvd246IG9uVGFyZ2V0S2V5ZG93bixcbiAgICAgICAgICAgICAgb25LZXl1cDogb25UYXJnZXRLZXl1cCxcbiAgICAgICAgICAgICAgb25LZXlwcmVzczogb25UYXJnZXRLZXlwcmVzc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAoaXNUYXJnZXQgPT09IHRydWUgJiYgdHlwZW9mIHByb3BzLmF1dG9jb21wbGV0ZSA9PT0gJ3N0cmluZycgJiYgcHJvcHMuYXV0b2NvbXBsZXRlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICAgICAgaCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdxLXNlbGVjdF9fYXV0b2NvbXBsZXRlLWlucHV0JyxcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IHByb3BzLmF1dG9jb21wbGV0ZSxcbiAgICAgICAgICAgICAgICB0YWJpbmRleDogLTEsXG4gICAgICAgICAgICAgICAgb25LZXl1cDogb25UYXJnZXRBdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmFtZVByb3AudmFsdWUgIT09IHZvaWQgMCAmJiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIGlubmVyT3B0aW9uc1ZhbHVlLnZhbHVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIGNvbnN0IG9wdHMgPSBpbm5lck9wdGlvbnNWYWx1ZS52YWx1ZS5tYXAodmFsdWUgPT4gaCgnb3B0aW9uJywgeyB2YWx1ZSwgc2VsZWN0ZWQ6IHRydWUgfSkpXG5cbiAgICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgICAgaCgnc2VsZWN0Jywge1xuICAgICAgICAgICAgICBjbGFzczogJ2hpZGRlbicsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWVQcm9wLnZhbHVlLFxuICAgICAgICAgICAgICBtdWx0aXBsZTogcHJvcHMubXVsdGlwbGVcbiAgICAgICAgICAgIH0sIG9wdHMpXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXR0cnMgPSBwcm9wcy51c2VJbnB1dCA9PT0gdHJ1ZSB8fCBpc1RhcmdldCAhPT0gdHJ1ZSA/IHZvaWQgMCA6IHN0YXRlLnNwbGl0QXR0cnMuYXR0cmlidXRlcy52YWx1ZVxuXG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWZpZWxkX19uYXRpdmUgcm93IGl0ZW1zLWNlbnRlcicsXG4gICAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgICAgLi4uc3RhdGUuc3BsaXRBdHRycy5saXN0ZW5lcnMudmFsdWVcbiAgICAgICAgfSwgY2hpbGQpXG4gICAgICB9LFxuXG4gICAgICBnZXRJbm5lckFwcGVuZDogKCkgPT4gKFxuICAgICAgICBwcm9wcy5sb2FkaW5nICE9PSB0cnVlICYmIGlubmVyTG9hZGluZ0luZGljYXRvci52YWx1ZSAhPT0gdHJ1ZSAmJiBwcm9wcy5oaWRlRHJvcGRvd25JY29uICE9PSB0cnVlXG4gICAgICAgICAgPyBbXG4gICAgICAgICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Etc2VsZWN0X19kcm9wZG93bi1pY29uJyArIChtZW51LnZhbHVlID09PSB0cnVlID8gJyByb3RhdGUtMTgwJyA6ICcnKSxcbiAgICAgICAgICAgICAgICBuYW1lOiBkcm9wZG93bkFycm93SWNvbi52YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgIDogbnVsbFxuICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4gdXNlRmllbGQoc3RhdGUpXG4gIH1cbn0pXG4iXSwibmFtZXMiOlsiZWwiLCJoIiwib3B0aW9uSW5kZXgiLCJhdHRycyJdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE1BQUEsU0FBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixjQUFjO0FBQUEsRUFFZCxPQUFPO0FBQUEsSUFDTCxHQUFHO0FBQUEsSUFFSCxLQUFLO0FBQUEsTUFDSCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUVELE9BQU87QUFBQSxFQUVQLFFBQVM7QUFDUCxXQUFPO0FBQUEsTUFDTCxjQUFjO0FBQUEsUUFDWixpQkFBaUI7QUFBQSxRQUNqQixTQUFTO0FBQUEsTUFDakIsQ0FBTztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0gsQ0FBQztBQ2ZNLE1BQU0sZUFBZTtBQUFBLEVBQzFCLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFDTjtBQUVBLE1BQUEsUUFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsSUFFSCxPQUFPO0FBQUEsSUFFUCxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsSUFDWCxZQUFZO0FBQUEsSUFDWixjQUFjO0FBQUEsSUFDZCxPQUFPLENBQUUsUUFBUSxNQUFRO0FBQUEsSUFFekIsT0FBTztBQUFBLElBQ1AsV0FBVztBQUFBLElBRVgsWUFBWTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUNELFVBQVU7QUFBQSxNQUNSLE1B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LGNBQ2hELE9BQU8saUJBQWlCO0FBQUEsY0FDeEIsVUFBVTtBQUFBLGNBQ1Ysa0JBQWtCLGVBQWUsUUFBUSxNQUFNLGNBQWMsUUFBUTtBQUFBLGNBQ3JFLEdBQUdBO0FBQUEsY0FDSCxXQUFXO0FBQUEsY0FDWCxTQUFTO0FBQUEsY0FDVCxZQUFZO0FBQUEsWUFDMUIsQ0FBYTtBQUFBLFVBQ0Y7QUFFRCxjQUFJLGFBQWEsUUFBUSxPQUFPLE1BQU0saUJBQWlCLFlBQVksTUFBTSxhQUFhLFdBQVcsR0FBRztBQUNsRyxrQkFBTTtBQUFBLGNBQ0osRUFBRSxTQUFTO0FBQUEsZ0JBQ1QsT0FBTztBQUFBLGdCQUNQLGNBQWMsTUFBTTtBQUFBLGdCQUNwQixVQUFVO0FBQUEsZ0JBQ1YsU0FBUztBQUFBLGNBQ3pCLENBQWU7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFFRCxZQUFJLFNBQVMsVUFBVSxVQUFVLE1BQU0sWUFBWSxRQUFRLGtCQUFrQixNQUFNLFdBQVcsR0FBRztBQUMvRixnQkFBTSxPQUFPLGtCQUFrQixNQUFNLElBQUksV0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLFVBQVUsS0FBTSxDQUFBLENBQUM7QUFFeEYsZ0JBQU07QUFBQSxZQUNKLEVBQUUsVUFBVTtBQUFBLGNBQ1YsT0FBTztBQUFBLGNBQ1AsTUFBTSxTQUFTO0FBQUEsY0FDZixVQUFVLE1BQU07QUFBQSxZQUNqQixHQUFFLElBQUk7QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUVELGNBQU0sUUFBUSxNQUFNLGFBQWEsUUFBUSxhQUFhLE9BQU8sU0FBUyxNQUFNLFdBQVcsV0FBVztBQUVsRyxlQUFPLEVBQUUsT0FBTztBQUFBLFVBQ2QsT0FBTztBQUFBLFVBQ1AsR0FBRztBQUFBLFVBQ0gsR0FBRyxNQUFNLFdBQVcsVUFBVTtBQUFBLFFBQy9CLEdBQUUsS0FBSztBQUFBLE1BQ1Q7QUFBQSxNQUVELGdCQUFnQixNQUNkLE1BQU0sWUFBWSxRQUFRLHNCQUFzQixVQUFVLFFBQVEsTUFBTSxxQkFBcUIsT0FDekY7QUFBQSxRQUNFLEVBQUUsT0FBTztBQUFBLFVBQ1AsT0FBTyw2QkFBNkIsS0FBSyxVQUFVLE9BQU8sZ0JBQWdCO0FBQUEsVUFDMUUsTUFBTSxrQkFBa0I7QUFBQSxRQUN4QyxDQUFlO0FBQUEsTUFDRixJQUNEO0FBQUEsSUFFWixDQUFLO0FBRUQsV0FBTyxTQUFTLEtBQUs7QUFBQSxFQUN0QjtBQUNILENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyLDNdfQ==
