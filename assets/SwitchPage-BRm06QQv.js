import { Q as QPage } from "./QPage-B7Tg8hoM.js";
import { c as createComponent, f as useDarkProps, g as getCurrentInstance, k as useDark, a as computed, h, b as hSlot, _ as _export_sfc, S as createBlock, T as openBlock, U as withCtx, $ as createTextVNode, W as createVNode, Z as QBtn, a1 as QIcon, v as withDirectives, r as ref, as as debounce, w as watch, at as setHorizontalScrollPosition, au as onDeactivated, av as onActivated, aw as setVerticalScrollPosition, o as onBeforeUnmount, E as hMergeSlot, J as defineComponent, ah as usePluralKit, ax as useModel, t as onMounted, N as useQuasar, ay as ellipsize, L as storeToRefs, K as useSettingsStore, az as getNameSort, aA as notEmpty, aB as caseInsensitiveIncludes, ag as createElementBlock, a0 as createCommentVNode, Y as createBaseVNode, ak as Fragment, an as renderList, aC as createSlots, aD as QInput, am as normalizeStyle, a3 as QSeparator, aE as MemberID, aj as APIError } from "./index-Czhz81pV.js";
import { P as PageTitle } from "./PageTitle-BKiEeIBH.js";
import { Q as QSelect } from "./QSelect-DgwzAg-N.js";
import { Q as QResizeObserver } from "./QResizeObserver-C6eZlNbd.js";
import { Q as QScrollObserver } from "./QScrollObserver-DaBWFe3T.js";
import { T as TouchPan } from "./TouchPan-zKzWXi0t.js";
import { b as between } from "./format-Dk2Vo7dJ.js";
import { Q as QItemLabel, a as QItem, b as QItemSection } from "./QItem-DBhEHxap.js";
import { Q as QList } from "./QList-DTyO3bRG.js";
import { Q as QBtnDropdown } from "./QBtnDropdown-Q5rxQ8Ix.js";
import { Q as QPageSticky } from "./QPageSticky-Cu8DVAYK.js";
import { Q as QBtnGroup } from "./QBtnGroup-DSLUZYCx.js";
import { Q as QFooter } from "./QFooter-fN0Awtju.js";
import { L as LabeledTile } from "./LabeledTile-CmcEf7Nd.js";
import { I as InitialFallbackAvatar } from "./InitialFallbackAvatar-BwzLwT9D.js";
import { Q as QSkeleton } from "./QSkeleton-Bsi1r0jE.js";
import "./QMenu-BKVuNWhU.js";
import "./rtl-DDpZOXNn.js";
import "./index-BPlwBMVZ.js";
const QBanner = createComponent({
  name: "QBanner",
  props: {
    ...useDarkProps,
    inlineActions: Boolean,
    dense: Boolean,
    rounded: Boolean
  },
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const classes = computed(
      () => "q-banner row items-center" + (props.dense === true ? " q-banner--dense" : "") + (isDark.value === true ? " q-banner--dark q-dark" : "") + (props.rounded === true ? " rounded-borders" : "")
    );
    const actionClass = computed(
      () => `q-banner__actions row items-center justify-end col-${props.inlineActions === true ? "auto" : "all"}`
    );
    return () => {
      const child = [
        h("div", {
          class: "q-banner__avatar col-auto row items-center self-start"
        }, hSlot(slots.avatar)),
        h("div", {
          class: "q-banner__content col text-body2"
        }, hSlot(slots.default))
      ];
      const actions = hSlot(slots.action);
      actions !== void 0 && child.push(
        h("div", { class: actionClass.value }, actions)
      );
      return h("div", {
        class: classes.value + (props.inlineActions === false && actions !== void 0 ? " q-banner--top-padding" : ""),
        role: "alert"
      }, child);
    };
  }
});
const _sfc_main$5 = {};
function _sfc_render$5(_ctx, _cache) {
  return openBlock(), createBlock(QBanner, { class: "text-white bg-red col-auto" }, {
    avatar: withCtx(() => [
      createVNode(QIcon, {
        name: "warning",
        color: "white"
      })
    ]),
    action: withCtx(() => [
      createVNode(QBtn, {
        to: "/settings",
        flat: "",
        class: "bg-red text-white",
        label: "Go To Settings"
      })
    ]),
    default: withCtx(() => [
      _cache[0] || (_cache[0] = createTextVNode(
        " You need to set your PluralKit token to use this feature ",
        -1
        /* CACHED */
      ))
    ]),
    _: 1,
    __: [0]
  });
}
const TokenRequiredBanner = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/zowie/dev/pkstatus/src/components/TokenRequiredBanner.vue"]]);
const ScrollAreaControls = createComponent({
  props: [
    "store",
    "barStyle",
    "verticalBarStyle",
    "horizontalBarStyle"
  ],
  setup(props) {
    return () => [
      h("div", {
        class: props.store.scroll.vertical.barClass.value,
        style: [props.barStyle, props.verticalBarStyle],
        "aria-hidden": "true",
        onMousedown: props.store.onVerticalMousedown
      }),
      h("div", {
        class: props.store.scroll.horizontal.barClass.value,
        style: [props.barStyle, props.horizontalBarStyle],
        "aria-hidden": "true",
        onMousedown: props.store.onHorizontalMousedown
      }),
      withDirectives(
        h("div", {
          ref: props.store.scroll.vertical.ref,
          class: props.store.scroll.vertical.thumbClass.value,
          style: props.store.scroll.vertical.style.value,
          "aria-hidden": "true"
        }),
        props.store.thumbVertDir
      ),
      withDirectives(
        h("div", {
          ref: props.store.scroll.horizontal.ref,
          class: props.store.scroll.horizontal.thumbClass.value,
          style: props.store.scroll.horizontal.style.value,
          "aria-hidden": "true"
        }),
        props.store.thumbHorizDir
      )
    ];
  }
});
const axisList = ["vertical", "horizontal"];
const dirProps = {
  vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" },
  horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" }
};
const panOpts = {
  prevent: true,
  mouse: true,
  mouseAllDir: true
};
const getMinThumbSize = (size) => size >= 250 ? 50 : Math.ceil(size / 5);
const QScrollArea = createComponent({
  name: "QScrollArea",
  props: {
    ...useDarkProps,
    thumbStyle: Object,
    verticalThumbStyle: Object,
    horizontalThumbStyle: Object,
    barStyle: [Array, String, Object],
    verticalBarStyle: [Array, String, Object],
    horizontalBarStyle: [Array, String, Object],
    verticalOffset: {
      type: Array,
      default: [0, 0]
    },
    horizontalOffset: {
      type: Array,
      default: [0, 0]
    },
    contentStyle: [Array, String, Object],
    contentActiveStyle: [Array, String, Object],
    delay: {
      type: [String, Number],
      default: 1e3
    },
    visible: {
      type: Boolean,
      default: null
    },
    tabindex: [String, Number],
    onScroll: Function
  },
  setup(props, { slots, emit }) {
    const tempShowing = ref(false);
    const panning = ref(false);
    const hover = ref(false);
    const container = {
      vertical: ref(0),
      horizontal: ref(0)
    };
    const scroll = {
      vertical: {
        ref: ref(null),
        position: ref(0),
        size: ref(0)
      },
      horizontal: {
        ref: ref(null),
        position: ref(0),
        size: ref(0)
      }
    };
    const { proxy } = getCurrentInstance();
    const isDark = useDark(props, proxy.$q);
    let timer = null, panRefPos;
    const targetRef = ref(null);
    const classes = computed(
      () => "q-scrollarea" + (isDark.value === true ? " q-scrollarea--dark" : "")
    );
    Object.assign(container, {
      verticalInner: computed(() => container.vertical.value - props.verticalOffset[0] - props.verticalOffset[1]),
      horizontalInner: computed(() => container.horizontal.value - props.horizontalOffset[0] - props.horizontalOffset[1])
    });
    scroll.vertical.percentage = computed(() => {
      const diff = scroll.vertical.size.value - container.vertical.value;
      if (diff <= 0) {
        return 0;
      }
      const p = between(scroll.vertical.position.value / diff, 0, 1);
      return Math.round(p * 1e4) / 1e4;
    });
    scroll.vertical.thumbHidden = computed(() => (props.visible === null ? hover.value : props.visible) !== true && tempShowing.value === false && panning.value === false || scroll.vertical.size.value <= container.vertical.value + 1);
    scroll.vertical.thumbStart = computed(() => props.verticalOffset[0] + scroll.vertical.percentage.value * (container.verticalInner.value - scroll.vertical.thumbSize.value));
    scroll.vertical.thumbSize = computed(
      () => Math.round(
        between(
          container.verticalInner.value * container.verticalInner.value / scroll.vertical.size.value,
          getMinThumbSize(container.verticalInner.value),
          container.verticalInner.value
        )
      )
    );
    scroll.vertical.style = computed(() => ({
      ...props.thumbStyle,
      ...props.verticalThumbStyle,
      top: `${scroll.vertical.thumbStart.value}px`,
      height: `${scroll.vertical.thumbSize.value}px`,
      right: `${props.horizontalOffset[1]}px`
    }));
    scroll.vertical.thumbClass = computed(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (scroll.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : ""));
    scroll.vertical.barClass = computed(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (scroll.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
    scroll.horizontal.percentage = computed(() => {
      const diff = scroll.horizontal.size.value - container.horizontal.value;
      if (diff <= 0) {
        return 0;
      }
      const p = between(Math.abs(scroll.horizontal.position.value) / diff, 0, 1);
      return Math.round(p * 1e4) / 1e4;
    });
    scroll.horizontal.thumbHidden = computed(() => (props.visible === null ? hover.value : props.visible) !== true && tempShowing.value === false && panning.value === false || scroll.horizontal.size.value <= container.horizontal.value + 1);
    scroll.horizontal.thumbStart = computed(() => props.horizontalOffset[0] + scroll.horizontal.percentage.value * (container.horizontalInner.value - scroll.horizontal.thumbSize.value));
    scroll.horizontal.thumbSize = computed(
      () => Math.round(
        between(
          container.horizontalInner.value * container.horizontalInner.value / scroll.horizontal.size.value,
          getMinThumbSize(container.horizontalInner.value),
          container.horizontalInner.value
        )
      )
    );
    scroll.horizontal.style = computed(() => ({
      ...props.thumbStyle,
      ...props.horizontalThumbStyle,
      [proxy.$q.lang.rtl === true ? "right" : "left"]: `${scroll.horizontal.thumbStart.value}px`,
      width: `${scroll.horizontal.thumbSize.value}px`,
      bottom: `${props.verticalOffset[1]}px`
    }));
    scroll.horizontal.thumbClass = computed(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (scroll.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : ""));
    scroll.horizontal.barClass = computed(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (scroll.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
    const mainStyle = computed(() => scroll.vertical.thumbHidden.value === true && scroll.horizontal.thumbHidden.value === true ? props.contentStyle : props.contentActiveStyle);
    function getScroll() {
      const info = {};
      axisList.forEach((axis) => {
        const data = scroll[axis];
        Object.assign(info, {
          [axis + "Position"]: data.position.value,
          [axis + "Percentage"]: data.percentage.value,
          [axis + "Size"]: data.size.value,
          [axis + "ContainerSize"]: container[axis].value,
          [axis + "ContainerInnerSize"]: container[axis + "Inner"].value
        });
      });
      return info;
    }
    const emitScroll = debounce(() => {
      const info = getScroll();
      info.ref = proxy;
      emit("scroll", info);
    }, 0);
    function localSetScrollPosition(axis, offset, duration) {
      if (axisList.includes(axis) === false) {
        console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
        return;
      }
      const fn = axis === "vertical" ? setVerticalScrollPosition : setHorizontalScrollPosition;
      fn(targetRef.value, offset, duration);
    }
    function updateContainer({ height, width }) {
      let change = false;
      if (container.vertical.value !== height) {
        container.vertical.value = height;
        change = true;
      }
      if (container.horizontal.value !== width) {
        container.horizontal.value = width;
        change = true;
      }
      change === true && startTimer();
    }
    function updateScroll({ position }) {
      let change = false;
      if (scroll.vertical.position.value !== position.top) {
        scroll.vertical.position.value = position.top;
        change = true;
      }
      if (scroll.horizontal.position.value !== position.left) {
        scroll.horizontal.position.value = position.left;
        change = true;
      }
      change === true && startTimer();
    }
    function updateScrollSize({ height, width }) {
      if (scroll.horizontal.size.value !== width) {
        scroll.horizontal.size.value = width;
        startTimer();
      }
      if (scroll.vertical.size.value !== height) {
        scroll.vertical.size.value = height;
        startTimer();
      }
    }
    function onPanThumb(e, axis) {
      const data = scroll[axis];
      if (e.isFirst === true) {
        if (data.thumbHidden.value === true) return;
        panRefPos = data.position.value;
        panning.value = true;
      } else if (panning.value !== true) {
        return;
      }
      if (e.isFinal === true) {
        panning.value = false;
      }
      const dProp = dirProps[axis];
      const multiplier = (data.size.value - container[axis].value) / (container[axis + "Inner"].value - data.thumbSize.value);
      const distance = e.distance[dProp.dist];
      const pos = panRefPos + (e.direction === dProp.dir ? 1 : -1) * distance * multiplier;
      setScroll(pos, axis);
    }
    function onMousedown(evt, axis) {
      const data = scroll[axis];
      if (data.thumbHidden.value !== true) {
        const startOffset = axis === "vertical" ? props.verticalOffset[0] : props.horizontalOffset[0];
        const offset = evt[dirProps[axis].offset] - startOffset;
        const thumbStart = data.thumbStart.value - startOffset;
        if (offset < thumbStart || offset > thumbStart + data.thumbSize.value) {
          const targetThumbStart = offset - data.thumbSize.value / 2;
          const percentage = between(targetThumbStart / (container[axis + "Inner"].value - data.thumbSize.value), 0, 1);
          setScroll(percentage * Math.max(0, data.size.value - container[axis].value), axis);
        }
        if (data.ref.value !== null) {
          data.ref.value.dispatchEvent(new MouseEvent(evt.type, evt));
        }
      }
    }
    function startTimer() {
      tempShowing.value = true;
      timer !== null && clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        tempShowing.value = false;
      }, props.delay);
      props.onScroll !== void 0 && emitScroll();
    }
    function setScroll(offset, axis) {
      targetRef.value[dirProps[axis].scroll] = offset;
    }
    let mouseEventTimer = null;
    function onMouseenter() {
      if (mouseEventTimer !== null) {
        clearTimeout(mouseEventTimer);
      }
      mouseEventTimer = setTimeout(() => {
        mouseEventTimer = null;
        hover.value = true;
      }, proxy.$q.platform.is.ios ? 50 : 0);
    }
    function onMouseleave() {
      if (mouseEventTimer !== null) {
        clearTimeout(mouseEventTimer);
        mouseEventTimer = null;
      }
      hover.value = false;
    }
    let scrollPosition = null;
    watch(() => proxy.$q.lang.rtl, (rtl) => {
      if (targetRef.value !== null) {
        setHorizontalScrollPosition(
          targetRef.value,
          Math.abs(scroll.horizontal.position.value) * (rtl === true ? -1 : 1)
        );
      }
    });
    onDeactivated(() => {
      scrollPosition = {
        top: scroll.vertical.position.value,
        left: scroll.horizontal.position.value
      };
    });
    onActivated(() => {
      if (scrollPosition === null) return;
      const scrollTarget = targetRef.value;
      if (scrollTarget !== null) {
        setHorizontalScrollPosition(scrollTarget, scrollPosition.left);
        setVerticalScrollPosition(scrollTarget, scrollPosition.top);
      }
    });
    onBeforeUnmount(emitScroll.cancel);
    Object.assign(proxy, {
      getScrollTarget: () => targetRef.value,
      getScroll,
      getScrollPosition: () => ({
        top: scroll.vertical.position.value,
        left: scroll.horizontal.position.value
      }),
      getScrollPercentage: () => ({
        top: scroll.vertical.percentage.value,
        left: scroll.horizontal.percentage.value
      }),
      setScrollPosition: localSetScrollPosition,
      setScrollPercentage(axis, percentage, duration) {
        localSetScrollPosition(
          axis,
          percentage * (scroll[axis].size.value - container[axis].value) * (axis === "horizontal" && proxy.$q.lang.rtl === true ? -1 : 1),
          duration
        );
      }
    });
    const store = {
      scroll,
      thumbVertDir: [[
        TouchPan,
        (e) => {
          onPanThumb(e, "vertical");
        },
        void 0,
        { vertical: true, ...panOpts }
      ]],
      thumbHorizDir: [[
        TouchPan,
        (e) => {
          onPanThumb(e, "horizontal");
        },
        void 0,
        { horizontal: true, ...panOpts }
      ]],
      onVerticalMousedown(evt) {
        onMousedown(evt, "vertical");
      },
      onHorizontalMousedown(evt) {
        onMousedown(evt, "horizontal");
      }
    };
    return () => {
      return h("div", {
        class: classes.value,
        onMouseenter,
        onMouseleave
      }, [
        h("div", {
          ref: targetRef,
          class: "q-scrollarea__container scroll relative-position fit hide-scrollbar",
          tabindex: props.tabindex !== void 0 ? props.tabindex : void 0
        }, [
          h("div", {
            class: "q-scrollarea__content absolute",
            style: mainStyle.value
          }, hMergeSlot(slots.default, [
            h(QResizeObserver, {
              debounce: 0,
              onResize: updateScrollSize
            })
          ])),
          h(QScrollObserver, {
            axis: "both",
            onScroll: updateScroll
          })
        ]),
        h(QResizeObserver, {
          debounce: 0,
          onResize: updateContainer
        }),
        h(ScrollAreaControls, {
          store,
          barStyle: props.barStyle,
          verticalBarStyle: props.verticalBarStyle,
          horizontalBarStyle: props.horizontalBarStyle
        })
      ]);
    };
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "GroupSelect",
  props: {
    "modelValue": { type: [String, Array] },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const pluralKit = usePluralKit();
    const $q = useQuasar();
    const model = useModel(__props, "modelValue");
    const loading = ref(true);
    const groups = ref([]);
    const filteredSelectOptions = ref([]);
    const selectOptions = computed(
      () => groups.value.map((g) => ({ label: g.getName(), value: g.id }))
    );
    function filterFunc(val, update) {
      if (val === "") {
        update(() => {
          filteredSelectOptions.value = selectOptions.value;
        });
        return;
      }
      update(() => {
        filteredSelectOptions.value = selectOptions.value.filter(
          ({ label, value }) => label.toLowerCase().includes(val.toLowerCase()) || value.toLowerCase().includes(val.toLowerCase())
        );
      });
    }
    onMounted(async () => {
      let groupResult;
      try {
        groupResult = await pluralKit.getOwnGroups();
      } catch (e) {
        $q.notify({
          type: "negative",
          message: "GroupSelect: couldn't retrieve system groups",
          caption: ellipsize(String(e))
        });
        return;
      }
      if (!groupResult) {
        throw new Error(
          "couldn't get own groups despite in GroupSelect but we shouldn't get here without a token"
        );
      }
      groups.value = groupResult;
      filteredSelectOptions.value = selectOptions.value;
      model.value = Array.isArray(model.value) ? [...model.value] : model.value;
      loading.value = false;
    });
    const __returned__ = { pluralKit, $q, model, loading, groups, filteredSelectOptions, selectOptions, filterFunc };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QSelect, {
    modelValue: $setup.model,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event),
    options: $setup.filteredSelectOptions,
    "map-options": "",
    "use-input": "",
    "emit-value": "",
    loading: $setup.loading,
    readonly: $setup.loading,
    onFilter: $setup.filterFunc
  }, null, 8, ["modelValue", "options", "loading", "readonly"]);
}
const GroupSelect = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/zowie/dev/pkstatus/src/components/GroupSelect.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FrontSwitcher",
  props: {
    groups: { type: Array, required: true },
    members: { type: Array, required: true },
    initialFronters: { type: Array, required: true },
    saving: { type: Boolean, required: true }
  },
  emits: ["reset", "save"],
  setup(__props, { expose: __expose }) {
    var _a, _b;
    __expose();
    const { detectPronouns, switcher } = storeToRefs(useSettingsStore());
    const props = __props;
    const sortMethods = {
      "by-name": {
        value: "by-name",
        label: "Name",
        func: (a, b) => getNameSort(detectPronouns.value)(a, b)
      },
      "by-last-message": {
        value: "by-last-message",
        label: "Last Message",
        func: (a, b) => {
          var _a2, _b2, _c, _d;
          return ((_b2 = (_a2 = b.lastMessageAt) == null ? void 0 : _a2.valueOf()) != null ? _b2 : 0) - ((_d = (_c = a.lastMessageAt) == null ? void 0 : _c.valueOf()) != null ? _d : 0);
        }
      }
    };
    const searchText = ref("");
    const primaryFronterId = ref(
      (_b = (_a = props.initialFronters[0]) == null ? void 0 : _a.id) != null ? _b : null
    );
    const selectedMemberIds = ref(
      props.initialFronters.map((f) => f.id)
    );
    const searchForm = ref();
    const fronters = computed(
      () => selectedMemberIds.value.map((id) => props.members.find((m) => m.id == id)).filter(notEmpty)
    );
    const excludedMemberIds = computed(
      () => props.groups.filter((g) => switcher.value.excludeGroups.includes(g.id)).map((g) => g.members).flat()
    );
    const filteredMembers = computed(
      () => props.members.filter(
        (m) => (
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing -- false positive
          m.name && caseInsensitiveIncludes(m.name, searchText.value) || m.displayName && caseInsensitiveIncludes(m.displayName, searchText.value)
        )
      ).filter((m) => !excludedMemberIds.value.includes(m.uuid)).toSorted(sortMethods[switcher.value.lastSortMethod].func)
    );
    const primaryFronterOptions = computed(
      () => props.members.filter((m) => selectedMemberIds.value.includes(m.id)).map((m) => ({
        value: m.id,
        label: m.getName(detectPronouns.value)
      }))
    );
    watch(primaryFronterId, (val) => {
      if (!val) {
        return;
      }
      if (selectedMemberIds.value[0] == val) {
        return;
      }
      selectedMemberIds.value.splice(selectedMemberIds.value.indexOf(val), 1);
      selectedMemberIds.value.unshift(val);
    });
    const primaryFronter = computed(
      () => props.members.find((m) => m.id == primaryFronterId.value)
    );
    function toggleMember(id) {
      if (selectedMemberIds.value.includes(id)) {
        selectedMemberIds.value.splice(selectedMemberIds.value.indexOf(id), 1);
      } else {
        selectedMemberIds.value.push(id);
      }
      if (!primaryFronterId.value) {
        primaryFronterId.value = id;
      } else if (!selectedMemberIds.value.includes(primaryFronterId.value)) {
        primaryFronterId.value = selectedMemberIds.value[0];
      }
    }
    const __returned__ = { detectPronouns, switcher, props, sortMethods, searchText, primaryFronterId, selectedMemberIds, searchForm, fronters, excludedMemberIds, filteredMembers, primaryFronterOptions, primaryFronter, toggleMember, GroupSelect, LabeledTile, InitialFallbackAvatar };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "row justify-center col-auto" };
const _hoisted_2$2 = { class: "col-12 col-md-8" };
const _hoisted_3$2 = {
  ref: "searchForm",
  class: "col-auto q-px-lg q-pt-md bg-lighten"
};
const _hoisted_4$2 = {
  class: "row q-col-gutter-md q-mb-md",
  style: { "min-height": "64px" }
};
const _hoisted_5$1 = { class: "col relative-position" };
const _hoisted_6$1 = { class: "row q-col-gutter-x-md q-col-gutter-y-none q-mb-md" };
const _hoisted_7$1 = { class: "col-sm-6 col-12" };
const _hoisted_8$1 = { class: "col-sm-6 col-12" };
const _hoisted_9$1 = { class: "row justify-center" };
const _hoisted_10$1 = { class: "row col-md-8 col-12 q-col-gutter-md q-my-sm" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" form "),
      createBaseVNode("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode(
            "div",
            _hoisted_3$2,
            [
              createCommentVNode(" selected fronter list "),
              createBaseVNode("div", _hoisted_4$2, [
                _cache[6] || (_cache[6] = createBaseVNode(
                  "div",
                  { class: "col-auto self-center" },
                  "Selected Fronters:",
                  -1
                  /* CACHED */
                )),
                createBaseVNode("div", _hoisted_5$1, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList($setup.fronters.toReversed().entries(), ([idx, fronter]) => {
                      return openBlock(), createBlock($setup["InitialFallbackAvatar"], {
                        key: fronter.id,
                        style: normalizeStyle(`left: ${($setup.fronters.length - idx - 1) * 25 + 5}px; position: absolute; box-shadow: 0 0 2px 2px black`),
                        url: fronter.avatarUrl,
                        name: fronter.getName($setup.detectPronouns),
                        onClick: ($event) => $setup.toggleMember(fronter.id)
                      }, null, 8, ["style", "url", "name", "onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ]),
              createBaseVNode("div", _hoisted_6$1, [
                createCommentVNode(" primary fronter dropdown "),
                createBaseVNode("div", _hoisted_7$1, [
                  createVNode(QSelect, {
                    modelValue: $setup.primaryFronterId,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.primaryFronterId = $event),
                    "bottom-slots": "",
                    "emit-value": "",
                    "map-options": "",
                    options: $setup.primaryFronterOptions,
                    label: "Primary Fronter"
                  }, createSlots({
                    _: 2
                    /* DYNAMIC */
                  }, [
                    $setup.primaryFronter ? {
                      name: "append",
                      fn: withCtx(() => [
                        createVNode($setup["InitialFallbackAvatar"], {
                          url: $setup.primaryFronter.avatarUrl,
                          name: $setup.primaryFronter.getName($setup.detectPronouns)
                        }, null, 8, ["url", "name"])
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["modelValue", "options"])
                ]),
                createCommentVNode(" search field "),
                createBaseVNode("div", _hoisted_8$1, [
                  createVNode(QInput, {
                    modelValue: $setup.searchText,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.searchText = $event),
                    "bottom-slots": "",
                    label: "Search"
                  }, null, 8, ["modelValue"])
                ]),
                _cache[7] || (_cache[7] = createBaseVNode(
                  "div",
                  { class: "col-sm-6 col-12" },
                  null,
                  -1
                  /* CACHED */
                ))
              ])
            ],
            512
            /* NEED_PATCH */
          )
        ])
      ]),
      createCommentVNode(" member tiles "),
      createVNode(QScrollArea, { class: "col" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_9$1, [
            createBaseVNode("div", _hoisted_10$1, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($setup.filteredMembers, (member) => {
                  return openBlock(), createElementBlock("div", {
                    key: member.id,
                    class: "col-xl-2 col-sm-3 col-4"
                  }, [
                    createVNode($setup["LabeledTile"], {
                      style: { "box-shadow": "0px 0px 3px 3px var(--q-primary)", "user-select": "none" },
                      img: member.avatarUrl,
                      label: member.getName($setup.detectPronouns),
                      caption: member.getPronouns($setup.detectPronouns),
                      flat: !$setup.selectedMemberIds.includes(member.id),
                      size: "100%",
                      onClick: ($event) => $setup.toggleMember(member.id)
                    }, null, 8, ["img", "label", "caption", "flat", "onClick"])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createCommentVNode(" Filters "),
      createVNode(QPageSticky, {
        position: "bottom-right",
        offset: [18, 18]
      }, {
        default: withCtx(() => [
          createVNode(QBtnDropdown, {
            fab: "",
            icon: "filter_alt",
            color: "primary",
            "menu-offset": [0, 18]
          }, {
            default: withCtx(() => [
              createVNode(QList, {
                dense: "",
                bordered: "",
                separator: "",
                class: "rounded-borders"
              }, {
                default: withCtx(() => [
                  createVNode(QItemLabel, { header: "" }, {
                    default: withCtx(() => _cache[8] || (_cache[8] = [
                      createTextVNode(
                        "Filters",
                        -1
                        /* CACHED */
                      )
                    ])),
                    _: 1,
                    __: [8]
                  }),
                  createVNode(QSeparator),
                  createVNode(QItem, null, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QSelect, {
                            modelValue: $setup.switcher.lastSortMethod,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.switcher.lastSortMethod = $event),
                            borderless: "",
                            label: "Sort By",
                            "map-options": "",
                            "emit-value": "",
                            options: Object.values($setup.sortMethods)
                          }, null, 8, ["modelValue", "options"])
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
                          createVNode($setup["GroupSelect"], {
                            modelValue: $setup.switcher.excludeGroups,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.switcher.excludeGroups = $event),
                            borderless: "",
                            label: "Exclude Groups",
                            multiple: ""
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
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(QFooter, null, {
        default: withCtx(() => [
          createVNode(QBtnGroup, {
            spread: "",
            style: { "height": "50px" }
          }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                color: "negative",
                icon: "restart_alt",
                label: "Reset",
                disabled: $props.saving,
                loading: $props.saving,
                onClick: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("reset"))
              }, null, 8, ["disabled", "loading"]),
              createVNode(QBtn, {
                color: "positive",
                icon: "swap_horiz",
                label: "Switch",
                disabled: $props.saving,
                loading: $props.saving,
                onClick: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("save", $setup.selectedMemberIds))
              }, null, 8, ["disabled", "loading"])
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
}
const FrontSwitcher = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/zowie/dev/pkstatus/src/components/SwitchPage/FrontSwitcher.vue"]]);
const _sfc_main$2 = {};
const _hoisted_1$1 = { class: "row justify-center col-auto" };
const _hoisted_2$1 = { class: "col-12 col-md-8 q-px-lg q-pt-md bg-lighten" };
const _hoisted_3$1 = {
  class: "row q-col-gutter-md q-mb-md",
  style: { "min-height": "64px" }
};
const _hoisted_4$1 = { class: "col-auto self-center" };
const _hoisted_5 = { class: "col" };
const _hoisted_6 = { class: "row q-col-gutter-x-md q-col-gutter-y-none q-mb-md" };
const _hoisted_7 = { class: "col-sm-6 col-12" };
const _hoisted_8 = { class: "col-sm-6 col-12 q-mt-sm-none q-mt-xs-lg" };
const _hoisted_9 = { class: "row justify-center" };
const _hoisted_10 = { class: "row col-md-8 col-12 q-col-gutter-md q-mt-md" };
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" form "),
      createBaseVNode("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createCommentVNode(" selected fronter list "),
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("div", _hoisted_4$1, [
              createVNode(QSkeleton, {
                type: "rect",
                width: "121px",
                height: "21px"
              })
            ]),
            createBaseVNode("div", _hoisted_5, [
              createVNode(QSkeleton, { type: "QAvatar" })
            ])
          ]),
          createBaseVNode("div", _hoisted_6, [
            createCommentVNode(" primary fronter dropdown "),
            createBaseVNode("div", _hoisted_7, [
              createVNode(QSkeleton, {
                class: "QInput",
                height: "48px"
              })
            ]),
            createCommentVNode(" search field "),
            createBaseVNode("div", _hoisted_8, [
              createVNode(QSkeleton, {
                class: "QInput",
                height: "48px"
              })
            ])
          ])
        ])
      ]),
      createCommentVNode(" member tiles "),
      createVNode(QScrollArea, { class: "col q-mt-sm" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(12, (idx) => {
                  return createBaseVNode("div", {
                    key: idx,
                    class: "col-xl-2 col-md-3 col-4"
                  }, [
                    createVNode(QSkeleton, {
                      type: "rect",
                      style: { "aspect-ratio": "1/1" }
                    })
                  ]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createCommentVNode(" buttons "),
      createVNode(QFooter, null, {
        default: withCtx(() => [
          createVNode(QBtnGroup, {
            spread: "",
            style: { "height": "50px" }
          }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                color: "negative",
                icon: "restart_alt",
                label: "Reset",
                disabled: "",
                loading: ""
              }),
              createVNode(QBtn, {
                color: "positive",
                icon: "swap_horiz",
                label: "Switch",
                disabled: "",
                loading: ""
              })
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
}
const FrontSwitcherSkeleton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/zowie/dev/pkstatus/src/components/SwitchPage/FrontSwitcherSkeleton.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SwitchHandler",
  setup(__props, { expose: __expose }) {
    __expose();
    const $q = useQuasar();
    const pluralKit = usePluralKit();
    const { token, detectPronouns } = storeToRefs(useSettingsStore());
    const loading = ref(true);
    const saving = ref(false);
    const members = ref([]);
    const groups = ref([]);
    const fronters = ref([]);
    async function onReset() {
      await loadState();
    }
    async function onSave(newMembers) {
      saving.value = true;
      if (!token.value) {
        return;
      }
      try {
        const newFronters = await pluralKit.createSwitch(
          newMembers.map((m) => MemberID.parse(m))
        );
        showSuccessMessage(newFronters);
      } catch (e) {
        if (!(e instanceof APIError)) {
          throw e;
        }
        $q.notify({
          type: "negative",
          message: `${e.status}: ${e.message} (${e.code})`
        });
      }
      saving.value = false;
    }
    async function loadState() {
      var _a, _b, _c, _d;
      if (!token.value) {
        return;
      }
      loading.value = true;
      const system = await getSystem();
      if (!system) {
        return;
      }
      try {
        members.value = (_a = await pluralKit.getOwnMembers()) != null ? _a : [];
      } catch (e) {
        $q.notify({
          type: "negative",
          message: "Switcher: couldn't retrieve system members",
          caption: ellipsize(String(e))
        });
        return;
      }
      try {
        groups.value = (_b = await pluralKit.getOwnGroups()) != null ? _b : [];
      } catch (e) {
        $q.notify({
          type: "negative",
          message: "Switcher: couldn't retrieve system groups",
          caption: ellipsize(String(e))
        });
        return;
      }
      try {
        fronters.value = (_d = (_c = await pluralKit.getOwnFronters()) == null ? void 0 : _c.members) != null ? _d : [];
      } catch (e) {
        $q.notify({
          type: "negative",
          message: "Switcher: couldn't retrieve system fronters",
          caption: ellipsize(String(e))
        });
        return;
      }
      loading.value = false;
    }
    async function getSystem() {
      try {
        const system = await pluralKit.getOwnSystem();
        if (!system) {
          $q.notify({
            type: "negative",
            message: "Couldn't retrieve own system for some reason"
          });
        }
        return system;
      } catch (e) {
        if (e instanceof APIError) {
          if (e.status == 401) {
            $q.notify({
              type: "negative",
              message: "Invalid Token"
            });
            return null;
          }
        }
        throw e;
      }
    }
    function showSuccessMessage(newFronters) {
      var _a;
      if (newFronters.members.length == 0) {
        $q.notify({
          type: "positive",
          message: "Switch-out registered."
        });
      } else if (newFronters.members.length == 1) {
        const name = (_a = newFronters.members[0].getName(detectPronouns.value)) != null ? _a : "Unknown";
        $q.notify({
          type: "positive",
          message: `Switch registered. Current fronter is now ${name}.`
        });
      } else {
        const names = newFronters.members.map(
          (m) => m.getName(detectPronouns.value)
        );
        $q.notify({
          type: "positive",
          message: `Switch registered. Current fronters are now ${names.join(", ")}.`
        });
      }
    }
    onMounted(async () => {
      await loadState();
    });
    const __returned__ = { $q, pluralKit, token, detectPronouns, loading, saving, members, groups, fronters, onReset, onSave, loadState, getSystem, showSuccessMessage, PageTitle, TokenRequiredBanner, FrontSwitcher, FrontSwitcherSkeleton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "row col-12" };
const _hoisted_2 = { class: "row column col-12" };
const _hoisted_3 = { class: "col-auto row justify-center" };
const _hoisted_4 = {
  key: 0,
  class: "row justify-center"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { class: "row justify-evenly" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createCommentVNode(" Title "),
          createBaseVNode("div", _hoisted_3, [
            createVNode($setup["PageTitle"], {
              icon: "swap_horiz",
              text: "Register Switch",
              class: "col-md-8 col-12"
            })
          ]),
          !$setup.token ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createVNode($setup["TokenRequiredBanner"], { class: "col-md-8 col-12" })
          ])) : (openBlock(), createElementBlock(
            Fragment,
            { key: 1 },
            [
              !$setup.loading ? (openBlock(), createBlock($setup["FrontSwitcher"], {
                key: 0,
                groups: $setup.groups,
                members: $setup.members,
                "initial-fronters": $setup.fronters,
                saving: $setup.saving,
                onReset: $setup.onReset,
                onSave: $setup.onSave
              }, null, 8, ["groups", "members", "initial-fronters", "saving"])) : (openBlock(), createBlock($setup["FrontSwitcherSkeleton"], { key: 1 }))
            ],
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const SwitchHandler = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/zowie/dev/pkstatus/src/components/SwitchPage/SwitchHandler.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SwitchPage",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { SwitchHandler };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["SwitchHandler"]);
}
const SwitchPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/pages/SwitchPage.vue"]]);
export {
  SwitchPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dpdGNoUGFnZS1CUm0wNlFRdi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE4LjIvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9iYW5uZXIvUUJhbm5lci5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Rva2VuUmVxdWlyZWRCYW5uZXIudnVlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE4LjIvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zY3JvbGwtYXJlYS9TY3JvbGxBcmVhQ29udHJvbHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTguMi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3Njcm9sbC1hcmVhL1FTY3JvbGxBcmVhLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvR3JvdXBTZWxlY3QudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3dpdGNoUGFnZS9Gcm9udFN3aXRjaGVyLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N3aXRjaFBhZ2UvRnJvbnRTd2l0Y2hlclNrZWxldG9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N3aXRjaFBhZ2UvU3dpdGNoSGFuZGxlci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcblxuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQmFubmVyJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIGlubGluZUFjdGlvbnM6IEJvb2xlYW4sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgcm91bmRlZDogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1iYW5uZXIgcm93IGl0ZW1zLWNlbnRlcidcbiAgICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLWJhbm5lci0tZGVuc2UnIDogJycpXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtYmFubmVyLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICAgICsgKHByb3BzLnJvdW5kZWQgPT09IHRydWUgPyAnIHJvdW5kZWQtYm9yZGVycycgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBhY3Rpb25DbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1iYW5uZXJfX2FjdGlvbnMgcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCdcbiAgICAgICsgYCBjb2wtJHsgcHJvcHMuaW5saW5lQWN0aW9ucyA9PT0gdHJ1ZSA/ICdhdXRvJyA6ICdhbGwnIH1gXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWJhbm5lcl9fYXZhdGFyIGNvbC1hdXRvIHJvdyBpdGVtcy1jZW50ZXIgc2VsZi1zdGFydCdcbiAgICAgICAgfSwgaFNsb3Qoc2xvdHMuYXZhdGFyKSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1iYW5uZXJfX2NvbnRlbnQgY29sIHRleHQtYm9keTInXG4gICAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICAgICAgXVxuXG4gICAgICBjb25zdCBhY3Rpb25zID0gaFNsb3Qoc2xvdHMuYWN0aW9uKVxuICAgICAgYWN0aW9ucyAhPT0gdm9pZCAwICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6IGFjdGlvbkNsYXNzLnZhbHVlIH0sIGFjdGlvbnMpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlXG4gICAgICAgICAgKyAocHJvcHMuaW5saW5lQWN0aW9ucyA9PT0gZmFsc2UgJiYgYWN0aW9ucyAhPT0gdm9pZCAwID8gJyBxLWJhbm5lci0tdG9wLXBhZGRpbmcnIDogJycpLFxuICAgICAgICByb2xlOiAnYWxlcnQnXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLWJhbm5lciBjbGFzcz1cInRleHQtd2hpdGUgYmctcmVkIGNvbC1hdXRvXCI+XG4gICAgPHRlbXBsYXRlICNhdmF0YXI+XG4gICAgICA8cS1pY29uIG5hbWU9XCJ3YXJuaW5nXCIgY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgPC90ZW1wbGF0ZT5cbiAgICBZb3UgbmVlZCB0byBzZXQgeW91ciBQbHVyYWxLaXQgdG9rZW4gdG8gdXNlIHRoaXMgZmVhdHVyZVxuICAgIDx0ZW1wbGF0ZSAjYWN0aW9uPlxuICAgICAgPHEtYnRuXG4gICAgICAgIHRvPVwiL3NldHRpbmdzXCJcbiAgICAgICAgZmxhdFxuICAgICAgICBjbGFzcz1cImJnLXJlZCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgbGFiZWw9XCJHbyBUbyBTZXR0aW5nc1wiXG4gICAgICAvPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvcS1iYW5uZXI+XG48L3RlbXBsYXRlPlxuIiwiaW1wb3J0IHsgaCwgd2l0aERpcmVjdGl2ZXMgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcblxuLyoqXG4gKiBXZSBhcmUgdXNpbmcgYSBzdWItY29tcG9uZW50IHRvIGF2b2lkIHVubmVjZXNzYXJ5IHJlLXJlbmRlcnNcbiAqIG9mIHRoZSBRU2Nyb2xsQXJlYSBjb250ZW50IHdoZW4gdGhlIHNjcm9sbGJhcnMgYXJlIGludGVyYWN0ZWQgd2l0aC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgcHJvcHM6IFtcbiAgICAnc3RvcmUnLFxuICAgICdiYXJTdHlsZScsXG4gICAgJ3ZlcnRpY2FsQmFyU3R5bGUnLFxuICAgICdob3Jpem9udGFsQmFyU3R5bGUnXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzKSB7XG4gICAgcmV0dXJuICgpID0+IChbXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBwcm9wcy5zdG9yZS5zY3JvbGwudmVydGljYWwuYmFyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBbIHByb3BzLmJhclN0eWxlLCBwcm9wcy52ZXJ0aWNhbEJhclN0eWxlIF0sXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgb25Nb3VzZWRvd246IHByb3BzLnN0b3JlLm9uVmVydGljYWxNb3VzZWRvd25cbiAgICAgIH0pLFxuXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBwcm9wcy5zdG9yZS5zY3JvbGwuaG9yaXpvbnRhbC5iYXJDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IFsgcHJvcHMuYmFyU3R5bGUsIHByb3BzLmhvcml6b250YWxCYXJTdHlsZSBdLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgIG9uTW91c2Vkb3duOiBwcm9wcy5zdG9yZS5vbkhvcml6b250YWxNb3VzZWRvd25cbiAgICAgIH0pLFxuXG4gICAgICB3aXRoRGlyZWN0aXZlcyhcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogcHJvcHMuc3RvcmUuc2Nyb2xsLnZlcnRpY2FsLnJlZixcbiAgICAgICAgICBjbGFzczogcHJvcHMuc3RvcmUuc2Nyb2xsLnZlcnRpY2FsLnRodW1iQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IHByb3BzLnN0b3JlLnNjcm9sbC52ZXJ0aWNhbC5zdHlsZS52YWx1ZSxcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSksXG4gICAgICAgIHByb3BzLnN0b3JlLnRodW1iVmVydERpclxuICAgICAgKSxcblxuICAgICAgd2l0aERpcmVjdGl2ZXMoXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICByZWY6IHByb3BzLnN0b3JlLnNjcm9sbC5ob3Jpem9udGFsLnJlZixcbiAgICAgICAgICBjbGFzczogcHJvcHMuc3RvcmUuc2Nyb2xsLmhvcml6b250YWwudGh1bWJDbGFzcy52YWx1ZSxcbiAgICAgICAgICBzdHlsZTogcHJvcHMuc3RvcmUuc2Nyb2xsLmhvcml6b250YWwuc3R5bGUudmFsdWUsXG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgIH0pLFxuICAgICAgICBwcm9wcy5zdG9yZS50aHVtYkhvcml6RGlyXG4gICAgICApXG4gICAgXSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkFjdGl2YXRlZCwgb25EZWFjdGl2YXRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWRhcmsvdXNlLWRhcmsuanMnXG5cbmltcG9ydCBTY3JvbGxBcmVhQ29udHJvbHMgZnJvbSAnLi9TY3JvbGxBcmVhQ29udHJvbHMuanMnXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5pbXBvcnQgUVNjcm9sbE9ic2VydmVyIGZyb20gJy4uL3Njcm9sbC1vYnNlcnZlci9RU2Nyb2xsT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RvdWNoLXBhbi9Ub3VjaFBhbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC9mb3JtYXQuanMnXG5pbXBvcnQgeyBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uLCBzZXRIb3Jpem9udGFsU2Nyb2xsUG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZS9kZWJvdW5jZS5qcydcblxuY29uc3QgYXhpc0xpc3QgPSBbICd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJyBdXG5jb25zdCBkaXJQcm9wcyA9IHtcbiAgdmVydGljYWw6IHsgb2Zmc2V0OiAnb2Zmc2V0WScsIHNjcm9sbDogJ3Njcm9sbFRvcCcsIGRpcjogJ2Rvd24nLCBkaXN0OiAneScgfSxcbiAgaG9yaXpvbnRhbDogeyBvZmZzZXQ6ICdvZmZzZXRYJywgc2Nyb2xsOiAnc2Nyb2xsTGVmdCcsIGRpcjogJ3JpZ2h0JywgZGlzdDogJ3gnIH1cbn1cbmNvbnN0IHBhbk9wdHMgPSB7XG4gIHByZXZlbnQ6IHRydWUsXG4gIG1vdXNlOiB0cnVlLFxuICBtb3VzZUFsbERpcjogdHJ1ZVxufVxuXG5jb25zdCBnZXRNaW5UaHVtYlNpemUgPSBzaXplID0+IChzaXplID49IDI1MCA/IDUwIDogTWF0aC5jZWlsKHNpemUgLyA1KSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTY3JvbGxBcmVhJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIHRodW1iU3R5bGU6IE9iamVjdCxcbiAgICB2ZXJ0aWNhbFRodW1iU3R5bGU6IE9iamVjdCxcbiAgICBob3Jpem9udGFsVGh1bWJTdHlsZTogT2JqZWN0LFxuXG4gICAgYmFyU3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgdmVydGljYWxCYXJTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBob3Jpem9udGFsQmFyU3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG5cbiAgICB2ZXJ0aWNhbE9mZnNldDoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBbIDAsIDAgXVxuICAgIH0sXG4gICAgaG9yaXpvbnRhbE9mZnNldDoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBbIDAsIDAgXVxuICAgIH0sXG5cbiAgICBjb250ZW50U3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgY29udGVudEFjdGl2ZVN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuXG4gICAgZGVsYXk6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDEwMDBcbiAgICB9LFxuXG4gICAgdmlzaWJsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuXG4gICAgdGFiaW5kZXg6IFsgU3RyaW5nLCBOdW1iZXIgXSxcblxuICAgIG9uU2Nyb2xsOiBGdW5jdGlvblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgLy8gc3RhdGUgbWFuYWdlbWVudFxuICAgIGNvbnN0IHRlbXBTaG93aW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IHBhbm5pbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgaG92ZXIgPSByZWYoZmFsc2UpXG5cbiAgICAvLyBvdGhlci4uLlxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHtcbiAgICAgIHZlcnRpY2FsOiByZWYoMCksXG4gICAgICBob3Jpem9udGFsOiByZWYoMClcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGwgPSB7XG4gICAgICB2ZXJ0aWNhbDoge1xuICAgICAgICByZWY6IHJlZihudWxsKSxcbiAgICAgICAgcG9zaXRpb246IHJlZigwKSxcbiAgICAgICAgc2l6ZTogcmVmKDApXG4gICAgICB9LFxuXG4gICAgICBob3Jpem9udGFsOiB7XG4gICAgICAgIHJlZjogcmVmKG51bGwpLFxuICAgICAgICBwb3NpdGlvbjogcmVmKDApLFxuICAgICAgICBzaXplOiByZWYoMClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgcHJveHkuJHEpXG5cbiAgICBsZXQgdGltZXIgPSBudWxsLCBwYW5SZWZQb3NcblxuICAgIGNvbnN0IHRhcmdldFJlZiA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1zY3JvbGxhcmVhJ1xuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXNjcm9sbGFyZWEtLWRhcmsnIDogJycpXG4gICAgKVxuXG4gICAgT2JqZWN0LmFzc2lnbihjb250YWluZXIsIHtcbiAgICAgIHZlcnRpY2FsSW5uZXI6IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICAgY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlIC0gcHJvcHMudmVydGljYWxPZmZzZXRbIDAgXSAtIHByb3BzLnZlcnRpY2FsT2Zmc2V0WyAxIF1cbiAgICAgICkpLFxuXG4gICAgICBob3Jpem9udGFsSW5uZXI6IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICAgY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgLSBwcm9wcy5ob3Jpem9udGFsT2Zmc2V0WyAwIF0gLSBwcm9wcy5ob3Jpem9udGFsT2Zmc2V0WyAxIF1cbiAgICAgICkpXG4gICAgfSlcblxuICAgIHNjcm9sbC52ZXJ0aWNhbC5wZXJjZW50YWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZGlmZiA9IHNjcm9sbC52ZXJ0aWNhbC5zaXplLnZhbHVlIC0gY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlXG4gICAgICBpZiAoZGlmZiA8PSAwKSB7IHJldHVybiAwIH1cbiAgICAgIGNvbnN0IHAgPSBiZXR3ZWVuKHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSAvIGRpZmYsIDAsIDEpXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChwICogMTAwMDApIC8gMTAwMDBcbiAgICB9KVxuICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIChcbiAgICAgICAgKHByb3BzLnZpc2libGUgPT09IG51bGwgPyBob3Zlci52YWx1ZSA6IHByb3BzLnZpc2libGUpICE9PSB0cnVlXG4gICAgICAgICYmIHRlbXBTaG93aW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgICAmJiBwYW5uaW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgKSB8fCBzY3JvbGwudmVydGljYWwuc2l6ZS52YWx1ZSA8PSBjb250YWluZXIudmVydGljYWwudmFsdWUgKyAxXG4gICAgKSlcbiAgICBzY3JvbGwudmVydGljYWwudGh1bWJTdGFydCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnZlcnRpY2FsT2Zmc2V0WyAwIF1cbiAgICAgICsgc2Nyb2xsLnZlcnRpY2FsLnBlcmNlbnRhZ2UudmFsdWUgKiAoY29udGFpbmVyLnZlcnRpY2FsSW5uZXIudmFsdWUgLSBzY3JvbGwudmVydGljYWwudGh1bWJTaXplLnZhbHVlKVxuICAgICkpXG4gICAgc2Nyb2xsLnZlcnRpY2FsLnRodW1iU2l6ZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBNYXRoLnJvdW5kKFxuICAgICAgICBiZXR3ZWVuKFxuICAgICAgICAgIGNvbnRhaW5lci52ZXJ0aWNhbElubmVyLnZhbHVlICogY29udGFpbmVyLnZlcnRpY2FsSW5uZXIudmFsdWUgLyBzY3JvbGwudmVydGljYWwuc2l6ZS52YWx1ZSxcbiAgICAgICAgICBnZXRNaW5UaHVtYlNpemUoY29udGFpbmVyLnZlcnRpY2FsSW5uZXIudmFsdWUpLFxuICAgICAgICAgIGNvbnRhaW5lci52ZXJ0aWNhbElubmVyLnZhbHVlXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICAgc2Nyb2xsLnZlcnRpY2FsLnN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIC4uLnByb3BzLnRodW1iU3R5bGUsXG4gICAgICAuLi5wcm9wcy52ZXJ0aWNhbFRodW1iU3R5bGUsXG4gICAgICB0b3A6IGAkeyBzY3JvbGwudmVydGljYWwudGh1bWJTdGFydC52YWx1ZSB9cHhgLFxuICAgICAgaGVpZ2h0OiBgJHsgc2Nyb2xsLnZlcnRpY2FsLnRodW1iU2l6ZS52YWx1ZSB9cHhgLFxuICAgICAgcmlnaHQ6IGAkeyBwcm9wcy5ob3Jpem9udGFsT2Zmc2V0WyAxIF0gfXB4YFxuICAgIH0pKVxuICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYkNsYXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgJ3Etc2Nyb2xsYXJlYV9fdGh1bWIgcS1zY3JvbGxhcmVhX190aHVtYi0tdiBhYnNvbHV0ZS1yaWdodCdcbiAgICAgICsgKHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhX190aHVtYi0taW52aXNpYmxlJyA6ICcnKVxuICAgICkpXG4gICAgc2Nyb2xsLnZlcnRpY2FsLmJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgJ3Etc2Nyb2xsYXJlYV9fYmFyIHEtc2Nyb2xsYXJlYV9fYmFyLS12IGFic29sdXRlLXJpZ2h0J1xuICAgICAgKyAoc2Nyb2xsLnZlcnRpY2FsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLXNjcm9sbGFyZWFfX2Jhci0taW52aXNpYmxlJyA6ICcnKVxuICAgICkpXG5cbiAgICBzY3JvbGwuaG9yaXpvbnRhbC5wZXJjZW50YWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZGlmZiA9IHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUgLSBjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZVxuICAgICAgaWYgKGRpZmYgPD0gMCkgeyByZXR1cm4gMCB9XG4gICAgICBjb25zdCBwID0gYmV0d2VlbihNYXRoLmFicyhzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZSkgLyBkaWZmLCAwLCAxKVxuICAgICAgcmV0dXJuIE1hdGgucm91bmQocCAqIDEwMDAwKSAvIDEwMDAwXG4gICAgfSlcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkhpZGRlbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIChcbiAgICAgICAgKHByb3BzLnZpc2libGUgPT09IG51bGwgPyBob3Zlci52YWx1ZSA6IHByb3BzLnZpc2libGUpICE9PSB0cnVlXG4gICAgICAgICYmIHRlbXBTaG93aW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgICAmJiBwYW5uaW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgKSB8fCBzY3JvbGwuaG9yaXpvbnRhbC5zaXplLnZhbHVlIDw9IGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlICsgMVxuICAgICkpXG4gICAgc2Nyb2xsLmhvcml6b250YWwudGh1bWJTdGFydCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmhvcml6b250YWxPZmZzZXRbIDAgXVxuICAgICAgKyBzY3JvbGwuaG9yaXpvbnRhbC5wZXJjZW50YWdlLnZhbHVlICogKGNvbnRhaW5lci5ob3Jpem9udGFsSW5uZXIudmFsdWUgLSBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlNpemUudmFsdWUpXG4gICAgKSlcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlNpemUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgTWF0aC5yb3VuZChcbiAgICAgICAgYmV0d2VlbihcbiAgICAgICAgICBjb250YWluZXIuaG9yaXpvbnRhbElubmVyLnZhbHVlICogY29udGFpbmVyLmhvcml6b250YWxJbm5lci52YWx1ZSAvIHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUsXG4gICAgICAgICAgZ2V0TWluVGh1bWJTaXplKGNvbnRhaW5lci5ob3Jpem9udGFsSW5uZXIudmFsdWUpLFxuICAgICAgICAgIGNvbnRhaW5lci5ob3Jpem9udGFsSW5uZXIudmFsdWVcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC5zdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICAuLi5wcm9wcy50aHVtYlN0eWxlLFxuICAgICAgLi4ucHJvcHMuaG9yaXpvbnRhbFRodW1iU3R5bGUsXG4gICAgICBbIHByb3h5LiRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdOiBgJHsgc2Nyb2xsLmhvcml6b250YWwudGh1bWJTdGFydC52YWx1ZSB9cHhgLFxuICAgICAgd2lkdGg6IGAkeyBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlNpemUudmFsdWUgfXB4YCxcbiAgICAgIGJvdHRvbTogYCR7IHByb3BzLnZlcnRpY2FsT2Zmc2V0WyAxIF0gfXB4YFxuICAgIH0pKVxuICAgIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAncS1zY3JvbGxhcmVhX190aHVtYiBxLXNjcm9sbGFyZWFfX3RodW1iLS1oIGFic29sdXRlLWJvdHRvbSdcbiAgICAgICsgKHNjcm9sbC5ob3Jpem9udGFsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLXNjcm9sbGFyZWFfX3RodW1iLS1pbnZpc2libGUnIDogJycpXG4gICAgKSlcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC5iYXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICdxLXNjcm9sbGFyZWFfX2JhciBxLXNjcm9sbGFyZWFfX2Jhci0taCBhYnNvbHV0ZS1ib3R0b20nXG4gICAgICArIChzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhX19iYXItLWludmlzaWJsZScgOiAnJylcbiAgICApKVxuXG4gICAgY29uc3QgbWFpblN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc2Nyb2xsLnZlcnRpY2FsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlICYmIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMuY29udGVudFN0eWxlXG4gICAgICAgIDogcHJvcHMuY29udGVudEFjdGl2ZVN0eWxlXG4gICAgKSlcblxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbCAoKSB7XG4gICAgICBjb25zdCBpbmZvID0ge31cblxuICAgICAgYXhpc0xpc3QuZm9yRWFjaChheGlzID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHNjcm9sbFsgYXhpcyBdXG4gICAgICAgIE9iamVjdC5hc3NpZ24oaW5mbywge1xuICAgICAgICAgIFsgYXhpcyArICdQb3NpdGlvbicgXTogZGF0YS5wb3NpdGlvbi52YWx1ZSxcbiAgICAgICAgICBbIGF4aXMgKyAnUGVyY2VudGFnZScgXTogZGF0YS5wZXJjZW50YWdlLnZhbHVlLFxuICAgICAgICAgIFsgYXhpcyArICdTaXplJyBdOiBkYXRhLnNpemUudmFsdWUsXG4gICAgICAgICAgWyBheGlzICsgJ0NvbnRhaW5lclNpemUnIF06IGNvbnRhaW5lclsgYXhpcyBdLnZhbHVlLFxuICAgICAgICAgIFsgYXhpcyArICdDb250YWluZXJJbm5lclNpemUnIF06IGNvbnRhaW5lclsgYXhpcyArICdJbm5lcicgXS52YWx1ZVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIGluZm9cbiAgICB9XG5cbiAgICAvLyB3ZSBoYXZlIGxvdHMgb2YgbGlzdGVuZXJzLCBzb1xuICAgIC8vIGVuc3VyZSB3ZSdyZSBub3QgZW1pdHRpbmcgc2FtZSBpbmZvXG4gICAgLy8gbXVsdGlwbGUgdGltZXNcbiAgICBjb25zdCBlbWl0U2Nyb2xsID0gZGVib3VuY2UoKCkgPT4ge1xuICAgICAgY29uc3QgaW5mbyA9IGdldFNjcm9sbCgpXG4gICAgICBpbmZvLnJlZiA9IHByb3h5XG4gICAgICBlbWl0KCdzY3JvbGwnLCBpbmZvKVxuICAgIH0sIDApXG5cbiAgICBmdW5jdGlvbiBsb2NhbFNldFNjcm9sbFBvc2l0aW9uIChheGlzLCBvZmZzZXQsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAoYXhpc0xpc3QuaW5jbHVkZXMoYXhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tRU2Nyb2xsQXJlYV06IHdyb25nIGZpcnN0IHBhcmFtIG9mIHNldFNjcm9sbFBvc2l0aW9uICh2ZXJ0aWNhbC9ob3Jpem9udGFsKScpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBmbiA9IGF4aXMgPT09ICd2ZXJ0aWNhbCdcbiAgICAgICAgPyBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uXG4gICAgICAgIDogc2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uXG5cbiAgICAgIGZuKHRhcmdldFJlZi52YWx1ZSwgb2Zmc2V0LCBkdXJhdGlvbilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDb250YWluZXIgKHsgaGVpZ2h0LCB3aWR0aCB9KSB7XG4gICAgICBsZXQgY2hhbmdlID0gZmFsc2VcblxuICAgICAgaWYgKGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZSAhPT0gaGVpZ2h0KSB7XG4gICAgICAgIGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZSA9IGhlaWdodFxuICAgICAgICBjaGFuZ2UgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZSAhPT0gd2lkdGgpIHtcbiAgICAgICAgY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgPSB3aWR0aFxuICAgICAgICBjaGFuZ2UgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNoYW5nZSA9PT0gdHJ1ZSAmJiBzdGFydFRpbWVyKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGwgKHsgcG9zaXRpb24gfSkge1xuICAgICAgbGV0IGNoYW5nZSA9IGZhbHNlXG5cbiAgICAgIGlmIChzY3JvbGwudmVydGljYWwucG9zaXRpb24udmFsdWUgIT09IHBvc2l0aW9uLnRvcCkge1xuICAgICAgICBzY3JvbGwudmVydGljYWwucG9zaXRpb24udmFsdWUgPSBwb3NpdGlvbi50b3BcbiAgICAgICAgY2hhbmdlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWUgIT09IHBvc2l0aW9uLmxlZnQpIHtcbiAgICAgICAgc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWUgPSBwb3NpdGlvbi5sZWZ0XG4gICAgICAgIGNoYW5nZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgY2hhbmdlID09PSB0cnVlICYmIHN0YXJ0VGltZXIoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbFNpemUgKHsgaGVpZ2h0LCB3aWR0aCB9KSB7XG4gICAgICBpZiAoc2Nyb2xsLmhvcml6b250YWwuc2l6ZS52YWx1ZSAhPT0gd2lkdGgpIHtcbiAgICAgICAgc2Nyb2xsLmhvcml6b250YWwuc2l6ZS52YWx1ZSA9IHdpZHRoXG4gICAgICAgIHN0YXJ0VGltZXIoKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2Nyb2xsLnZlcnRpY2FsLnNpemUudmFsdWUgIT09IGhlaWdodCkge1xuICAgICAgICBzY3JvbGwudmVydGljYWwuc2l6ZS52YWx1ZSA9IGhlaWdodFxuICAgICAgICBzdGFydFRpbWVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBhblRodW1iIChlLCBheGlzKSB7XG4gICAgICBjb25zdCBkYXRhID0gc2Nyb2xsWyBheGlzIF1cblxuICAgICAgaWYgKGUuaXNGaXJzdCA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoZGF0YS50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICAgICAgcGFuUmVmUG9zID0gZGF0YS5wb3NpdGlvbi52YWx1ZVxuICAgICAgICBwYW5uaW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAocGFubmluZy52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGUuaXNGaW5hbCA9PT0gdHJ1ZSkge1xuICAgICAgICBwYW5uaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgY29uc3QgZFByb3AgPSBkaXJQcm9wc1sgYXhpcyBdXG5cbiAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSAoXG4gICAgICAgIChkYXRhLnNpemUudmFsdWUgLSBjb250YWluZXJbIGF4aXMgXS52YWx1ZSlcbiAgICAgICAgLyAoY29udGFpbmVyWyBheGlzICsgJ0lubmVyJyBdLnZhbHVlIC0gZGF0YS50aHVtYlNpemUudmFsdWUpXG4gICAgICApXG4gICAgICBjb25zdCBkaXN0YW5jZSA9IGUuZGlzdGFuY2VbIGRQcm9wLmRpc3QgXVxuICAgICAgY29uc3QgcG9zID0gcGFuUmVmUG9zICsgKGUuZGlyZWN0aW9uID09PSBkUHJvcC5kaXIgPyAxIDogLTEpICogZGlzdGFuY2UgKiBtdWx0aXBsaWVyXG5cbiAgICAgIHNldFNjcm9sbChwb3MsIGF4aXMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZWRvd24gKGV2dCwgYXhpcykge1xuICAgICAgY29uc3QgZGF0YSA9IHNjcm9sbFsgYXhpcyBdXG5cbiAgICAgIGlmIChkYXRhLnRodW1iSGlkZGVuLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0T2Zmc2V0ID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJ1xuICAgICAgICAgID8gcHJvcHMudmVydGljYWxPZmZzZXRbIDAgXVxuICAgICAgICAgIDogcHJvcHMuaG9yaXpvbnRhbE9mZnNldFsgMCBdXG5cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZXZ0WyBkaXJQcm9wc1sgYXhpcyBdLm9mZnNldCBdIC0gc3RhcnRPZmZzZXRcbiAgICAgICAgY29uc3QgdGh1bWJTdGFydCA9IGRhdGEudGh1bWJTdGFydC52YWx1ZSAtIHN0YXJ0T2Zmc2V0XG5cbiAgICAgICAgaWYgKG9mZnNldCA8IHRodW1iU3RhcnQgfHwgb2Zmc2V0ID4gdGh1bWJTdGFydCArIGRhdGEudGh1bWJTaXplLnZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0VGh1bWJTdGFydCA9IG9mZnNldCAtIGRhdGEudGh1bWJTaXplLnZhbHVlIC8gMlxuICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBiZXR3ZWVuKHRhcmdldFRodW1iU3RhcnQgLyAoY29udGFpbmVyWyBheGlzICsgJ0lubmVyJyBdLnZhbHVlIC0gZGF0YS50aHVtYlNpemUudmFsdWUpLCAwLCAxKVxuICAgICAgICAgIHNldFNjcm9sbChwZXJjZW50YWdlICogTWF0aC5tYXgoMCwgZGF0YS5zaXplLnZhbHVlIC0gY29udGFpbmVyWyBheGlzIF0udmFsdWUpLCBheGlzKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWN0aXZhdGUgdGh1bWIgcGFuXG4gICAgICAgIGlmIChkYXRhLnJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGRhdGEucmVmLnZhbHVlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoZXZ0LnR5cGUsIGV2dCkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydFRpbWVyICgpIHtcbiAgICAgIHRlbXBTaG93aW5nLnZhbHVlID0gdHJ1ZVxuXG4gICAgICB0aW1lciAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgICAgdGVtcFNob3dpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgfSwgcHJvcHMuZGVsYXkpXG5cbiAgICAgIHByb3BzLm9uU2Nyb2xsICE9PSB2b2lkIDAgJiYgZW1pdFNjcm9sbCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U2Nyb2xsIChvZmZzZXQsIGF4aXMpIHtcbiAgICAgIHRhcmdldFJlZi52YWx1ZVsgZGlyUHJvcHNbIGF4aXMgXS5zY3JvbGwgXSA9IG9mZnNldFxuICAgIH1cblxuICAgIGxldCBtb3VzZUV2ZW50VGltZXIgPSBudWxsXG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlZW50ZXIgKCkge1xuICAgICAgaWYgKG1vdXNlRXZlbnRUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQobW91c2VFdmVudFRpbWVyKVxuICAgICAgfVxuXG4gICAgICAvLyBzZXRUaW1lb3V0IG5lZWRlZCBmb3IgaU9TOyBzZWUgdGlja2V0ICMxNjIxMFxuICAgICAgbW91c2VFdmVudFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1vdXNlRXZlbnRUaW1lciA9IG51bGxcbiAgICAgICAgaG92ZXIudmFsdWUgPSB0cnVlXG4gICAgICB9LCBwcm94eS4kcS5wbGF0Zm9ybS5pcy5pb3MgPyA1MCA6IDApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZWxlYXZlICgpIHtcbiAgICAgIGlmIChtb3VzZUV2ZW50VGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KG1vdXNlRXZlbnRUaW1lcilcbiAgICAgICAgbW91c2VFdmVudFRpbWVyID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBob3Zlci52YWx1ZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IHNjcm9sbFBvc2l0aW9uID0gbnVsbFxuXG4gICAgd2F0Y2goKCkgPT4gcHJveHkuJHEubGFuZy5ydGwsIHJ0bCA9PiB7XG4gICAgICBpZiAodGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHNldEhvcml6b250YWxTY3JvbGxQb3NpdGlvbihcbiAgICAgICAgICB0YXJnZXRSZWYudmFsdWUsXG4gICAgICAgICAgTWF0aC5hYnMoc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWUpICogKHJ0bCA9PT0gdHJ1ZSA/IC0xIDogMSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHNjcm9sbFBvc2l0aW9uID0ge1xuICAgICAgICB0b3A6IHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSxcbiAgICAgICAgbGVmdDogc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb25BY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHNjcm9sbFBvc2l0aW9uID09PSBudWxsKSByZXR1cm5cblxuICAgICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gdGFyZ2V0UmVmLnZhbHVlXG5cbiAgICAgIGlmIChzY3JvbGxUYXJnZXQgIT09IG51bGwpIHtcbiAgICAgICAgc2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uKHNjcm9sbFRhcmdldCwgc2Nyb2xsUG9zaXRpb24ubGVmdClcbiAgICAgICAgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbihzY3JvbGxUYXJnZXQsIHNjcm9sbFBvc2l0aW9uLnRvcClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KGVtaXRTY3JvbGwuY2FuY2VsKVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgICAgZ2V0U2Nyb2xsVGFyZ2V0OiAoKSA9PiB0YXJnZXRSZWYudmFsdWUsXG4gICAgICBnZXRTY3JvbGwsXG4gICAgICBnZXRTY3JvbGxQb3NpdGlvbjogKCkgPT4gKHtcbiAgICAgICAgdG9wOiBzY3JvbGwudmVydGljYWwucG9zaXRpb24udmFsdWUsXG4gICAgICAgIGxlZnQ6IHNjcm9sbC5ob3Jpem9udGFsLnBvc2l0aW9uLnZhbHVlXG4gICAgICB9KSxcbiAgICAgIGdldFNjcm9sbFBlcmNlbnRhZ2U6ICgpID0+ICh7XG4gICAgICAgIHRvcDogc2Nyb2xsLnZlcnRpY2FsLnBlcmNlbnRhZ2UudmFsdWUsXG4gICAgICAgIGxlZnQ6IHNjcm9sbC5ob3Jpem9udGFsLnBlcmNlbnRhZ2UudmFsdWVcbiAgICAgIH0pLFxuICAgICAgc2V0U2Nyb2xsUG9zaXRpb246IGxvY2FsU2V0U2Nyb2xsUG9zaXRpb24sXG4gICAgICBzZXRTY3JvbGxQZXJjZW50YWdlIChheGlzLCBwZXJjZW50YWdlLCBkdXJhdGlvbikge1xuICAgICAgICBsb2NhbFNldFNjcm9sbFBvc2l0aW9uKFxuICAgICAgICAgIGF4aXMsXG4gICAgICAgICAgcGVyY2VudGFnZVxuICAgICAgICAgICAgKiAoc2Nyb2xsWyBheGlzIF0uc2l6ZS52YWx1ZSAtIGNvbnRhaW5lclsgYXhpcyBdLnZhbHVlKVxuICAgICAgICAgICAgKiAoYXhpcyA9PT0gJ2hvcml6b250YWwnICYmIHByb3h5LiRxLmxhbmcucnRsID09PSB0cnVlID8gLTEgOiAxKSxcbiAgICAgICAgICBkdXJhdGlvblxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHN0b3JlID0ge1xuICAgICAgc2Nyb2xsLFxuXG4gICAgICB0aHVtYlZlcnREaXI6IFsgW1xuICAgICAgICBUb3VjaFBhbixcbiAgICAgICAgZSA9PiB7IG9uUGFuVGh1bWIoZSwgJ3ZlcnRpY2FsJykgfSxcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB7IHZlcnRpY2FsOiB0cnVlLCAuLi5wYW5PcHRzIH1cbiAgICAgIF0gXSxcblxuICAgICAgdGh1bWJIb3JpekRpcjogWyBbXG4gICAgICAgIFRvdWNoUGFuLFxuICAgICAgICBlID0+IHsgb25QYW5UaHVtYihlLCAnaG9yaXpvbnRhbCcpIH0sXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgeyBob3Jpem9udGFsOiB0cnVlLCAuLi5wYW5PcHRzIH1cbiAgICAgIF0gXSxcblxuICAgICAgb25WZXJ0aWNhbE1vdXNlZG93biAoZXZ0KSB7XG4gICAgICAgIG9uTW91c2Vkb3duKGV2dCwgJ3ZlcnRpY2FsJylcbiAgICAgIH0sXG5cbiAgICAgIG9uSG9yaXpvbnRhbE1vdXNlZG93biAoZXZ0KSB7XG4gICAgICAgIG9uTW91c2Vkb3duKGV2dCwgJ2hvcml6b250YWwnKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgb25Nb3VzZWVudGVyLFxuICAgICAgICBvbk1vdXNlbGVhdmVcbiAgICAgIH0sIFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogdGFyZ2V0UmVmLFxuICAgICAgICAgIGNsYXNzOiAncS1zY3JvbGxhcmVhX19jb250YWluZXIgc2Nyb2xsIHJlbGF0aXZlLXBvc2l0aW9uIGZpdCBoaWRlLXNjcm9sbGJhcicsXG4gICAgICAgICAgdGFiaW5kZXg6IHByb3BzLnRhYmluZGV4ICE9PSB2b2lkIDAgPyBwcm9wcy50YWJpbmRleCA6IHZvaWQgMFxuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLXNjcm9sbGFyZWFfX2NvbnRlbnQgYWJzb2x1dGUnLFxuICAgICAgICAgICAgc3R5bGU6IG1haW5TdHlsZS52YWx1ZVxuICAgICAgICAgIH0sIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgICAgIG9uUmVzaXplOiB1cGRhdGVTY3JvbGxTaXplXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pKSxcblxuICAgICAgICAgIGgoUVNjcm9sbE9ic2VydmVyLCB7XG4gICAgICAgICAgICBheGlzOiAnYm90aCcsXG4gICAgICAgICAgICBvblNjcm9sbDogdXBkYXRlU2Nyb2xsXG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG5cbiAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgICAgICBkZWJvdW5jZTogMCxcbiAgICAgICAgICBvblJlc2l6ZTogdXBkYXRlQ29udGFpbmVyXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGgoU2Nyb2xsQXJlYUNvbnRyb2xzLCB7XG4gICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgYmFyU3R5bGU6IHByb3BzLmJhclN0eWxlLFxuICAgICAgICAgIHZlcnRpY2FsQmFyU3R5bGU6IHByb3BzLnZlcnRpY2FsQmFyU3R5bGUsXG4gICAgICAgICAgaG9yaXpvbnRhbEJhclN0eWxlOiBwcm9wcy5ob3Jpem9udGFsQmFyU3R5bGVcbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgfVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8cS1zZWxlY3RcbiAgICB2LW1vZGVsPVwibW9kZWxcIlxuICAgIDpvcHRpb25zPVwiZmlsdGVyZWRTZWxlY3RPcHRpb25zXCJcbiAgICBtYXAtb3B0aW9uc1xuICAgIHVzZS1pbnB1dFxuICAgIGVtaXQtdmFsdWVcbiAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgIDpyZWFkb25seT1cImxvYWRpbmdcIlxuICAgIEBmaWx0ZXI9XCJmaWx0ZXJGdW5jXCJcbiAgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VQbHVyYWxLaXQgfSBmcm9tICdib290L3BsdXJhbEtpdCc7XG5pbXBvcnQgeyB1c2VRdWFzYXIgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICdzcmMvbW9kZWxzL0dyb3VwJztcbmltcG9ydCB7IGVsbGlwc2l6ZSB9IGZyb20gJ3NyYy91dGlsJztcbmltcG9ydCB7IGNvbXB1dGVkLCBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IHBsdXJhbEtpdCA9IHVzZVBsdXJhbEtpdCgpO1xuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcblxuY29uc3QgbW9kZWwgPSBkZWZpbmVNb2RlbDxzdHJpbmcgfCBBcnJheTxzdHJpbmc+PigpO1xuXG5jb25zdCBsb2FkaW5nID0gcmVmKHRydWUpO1xuY29uc3QgZ3JvdXBzID0gcmVmPFJlYWRvbmx5QXJyYXk8R3JvdXA+PihbXSk7XG5jb25zdCBmaWx0ZXJlZFNlbGVjdE9wdGlvbnMgPSByZWY8QXJyYXk8eyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0+PihbXSk7XG5jb25zdCBzZWxlY3RPcHRpb25zID0gY29tcHV0ZWQoKCkgPT5cbiAgZ3JvdXBzLnZhbHVlLm1hcCgoZykgPT4gKHsgbGFiZWw6IGcuZ2V0TmFtZSgpLCB2YWx1ZTogZy5pZCB9KSksXG4pO1xuXG5mdW5jdGlvbiBmaWx0ZXJGdW5jKHZhbDogc3RyaW5nLCB1cGRhdGU6IChjYjogKCkgPT4gdm9pZCkgPT4gdm9pZCkge1xuICBpZiAodmFsID09PSAnJykge1xuICAgIHVwZGF0ZSgoKSA9PiB7XG4gICAgICBmaWx0ZXJlZFNlbGVjdE9wdGlvbnMudmFsdWUgPSBzZWxlY3RPcHRpb25zLnZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHVwZGF0ZSgoKSA9PiB7XG4gICAgZmlsdGVyZWRTZWxlY3RPcHRpb25zLnZhbHVlID0gc2VsZWN0T3B0aW9ucy52YWx1ZS5maWx0ZXIoXG4gICAgICAoeyBsYWJlbCwgdmFsdWUgfSkgPT5cbiAgICAgICAgbGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWwudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgdmFsdWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWwudG9Mb3dlckNhc2UoKSksXG4gICAgKTtcbiAgfSk7XG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGxldCBncm91cFJlc3VsdDtcbiAgdHJ5IHtcbiAgICBncm91cFJlc3VsdCA9IGF3YWl0IHBsdXJhbEtpdC5nZXRPd25Hcm91cHMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgICRxLm5vdGlmeSh7XG4gICAgICB0eXBlOiAnbmVnYXRpdmUnLFxuICAgICAgbWVzc2FnZTogXCJHcm91cFNlbGVjdDogY291bGRuJ3QgcmV0cmlldmUgc3lzdGVtIGdyb3Vwc1wiLFxuICAgICAgY2FwdGlvbjogZWxsaXBzaXplKFN0cmluZyhlKSksXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFncm91cFJlc3VsdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiY291bGRuJ3QgZ2V0IG93biBncm91cHMgZGVzcGl0ZSBpbiBHcm91cFNlbGVjdCBidXQgd2Ugc2hvdWxkbid0IGdldCBoZXJlIHdpdGhvdXQgYSB0b2tlblwiLFxuICAgICk7XG4gIH1cblxuICBncm91cHMudmFsdWUgPSBncm91cFJlc3VsdDtcbiAgZmlsdGVyZWRTZWxlY3RPcHRpb25zLnZhbHVlID0gc2VsZWN0T3B0aW9ucy52YWx1ZTtcbiAgbW9kZWwudmFsdWUgPSBBcnJheS5pc0FycmF5KG1vZGVsLnZhbHVlKSA/IFsuLi5tb2RlbC52YWx1ZV0gOiBtb2RlbC52YWx1ZTtcbiAgbG9hZGluZy52YWx1ZSA9IGZhbHNlO1xufSk7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPCEtLSBmb3JtIC0tPlxuICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyIGNvbC1hdXRvXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgPGRpdiByZWY9XCJzZWFyY2hGb3JtXCIgY2xhc3M9XCJjb2wtYXV0byBxLXB4LWxnIHEtcHQtbWQgYmctbGlnaHRlblwiPlxuICAgICAgICA8IS0tIHNlbGVjdGVkIGZyb250ZXIgbGlzdCAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWQgcS1tYi1tZFwiIHN0eWxlPVwibWluLWhlaWdodDogNjRweFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBzZWxmLWNlbnRlclwiPlNlbGVjdGVkIEZyb250ZXJzOjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcmVsYXRpdmUtcG9zaXRpb25cIj5cbiAgICAgICAgICAgIDxpbml0aWFsLWZhbGxiYWNrLWF2YXRhclxuICAgICAgICAgICAgICB2LWZvcj1cIltpZHgsIGZyb250ZXJdIGluIGZyb250ZXJzLnRvUmV2ZXJzZWQoKS5lbnRyaWVzKClcIlxuICAgICAgICAgICAgICA6a2V5PVwiZnJvbnRlci5pZFwiXG4gICAgICAgICAgICAgIDpzdHlsZT1cImBsZWZ0OiAkeyhmcm9udGVycy5sZW5ndGggLSBpZHggLSAxKSAqIDI1ICsgNX1weDsgcG9zaXRpb246IGFic29sdXRlOyBib3gtc2hhZG93OiAwIDAgMnB4IDJweCBibGFja2BcIlxuICAgICAgICAgICAgICA6dXJsPVwiZnJvbnRlci5hdmF0YXJVcmxcIlxuICAgICAgICAgICAgICA6bmFtZT1cImZyb250ZXIuZ2V0TmFtZShkZXRlY3RQcm9ub3VucylcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGVNZW1iZXIoZnJvbnRlci5pZClcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXIteC1tZCBxLWNvbC1ndXR0ZXIteS1ub25lIHEtbWItbWRcIj5cbiAgICAgICAgICA8IS0tIHByaW1hcnkgZnJvbnRlciBkcm9wZG93biAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgY29sLTEyXCI+XG4gICAgICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInByaW1hcnlGcm9udGVySWRcIlxuICAgICAgICAgICAgICBib3R0b20tc2xvdHNcbiAgICAgICAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgICAgICAgICA6b3B0aW9ucz1cInByaW1hcnlGcm9udGVyT3B0aW9uc1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiUHJpbWFyeSBGcm9udGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJwcmltYXJ5RnJvbnRlclwiICNhcHBlbmQ+XG4gICAgICAgICAgICAgICAgPGluaXRpYWwtZmFsbGJhY2stYXZhdGFyXG4gICAgICAgICAgICAgICAgICA6dXJsPVwicHJpbWFyeUZyb250ZXIuYXZhdGFyVXJsXCJcbiAgICAgICAgICAgICAgICAgIDpuYW1lPVwicHJpbWFyeUZyb250ZXIuZ2V0TmFtZShkZXRlY3RQcm9ub3VucylcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3Etc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS0gc2VhcmNoIGZpZWxkIC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBjb2wtMTJcIj5cbiAgICAgICAgICAgIDxxLWlucHV0IHYtbW9kZWw9XCJzZWFyY2hUZXh0XCIgYm90dG9tLXNsb3RzIGxhYmVsPVwiU2VhcmNoXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgY29sLTEyXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDwhLS0gbWVtYmVyIHRpbGVzIC0tPlxuICA8cS1zY3JvbGwtYXJlYSBjbGFzcz1cImNvbFwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgY29sLW1kLTggY29sLTEyIHEtY29sLWd1dHRlci1tZCBxLW15LXNtXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICB2LWZvcj1cIm1lbWJlciBvZiBmaWx0ZXJlZE1lbWJlcnNcIlxuICAgICAgICAgIDprZXk9XCJtZW1iZXIuaWRcIlxuICAgICAgICAgIGNsYXNzPVwiY29sLXhsLTIgY29sLXNtLTMgY29sLTRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGxhYmVsZWQtdGlsZVxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggM3B4IHZhcigtLXEtcHJpbWFyeSk7XG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIDppbWc9XCJtZW1iZXIuYXZhdGFyVXJsXCJcbiAgICAgICAgICAgIDpsYWJlbD1cIm1lbWJlci5nZXROYW1lKGRldGVjdFByb25vdW5zKVwiXG4gICAgICAgICAgICA6Y2FwdGlvbj1cIm1lbWJlci5nZXRQcm9ub3VucyhkZXRlY3RQcm9ub3VucylcIlxuICAgICAgICAgICAgOmZsYXQ9XCIhc2VsZWN0ZWRNZW1iZXJJZHMuaW5jbHVkZXMobWVtYmVyLmlkKVwiXG4gICAgICAgICAgICBzaXplPVwiMTAwJVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGVNZW1iZXIobWVtYmVyLmlkKVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9xLXNjcm9sbC1hcmVhPlxuXG4gIDwhLS0gRmlsdGVycyAtLT5cbiAgPHEtcGFnZS1zdGlja3kgcG9zaXRpb249XCJib3R0b20tcmlnaHRcIiA6b2Zmc2V0PVwiWzE4LCAxOF1cIj5cbiAgICA8cS1idG4tZHJvcGRvd25cbiAgICAgIGZhYlxuICAgICAgaWNvbj1cImZpbHRlcl9hbHRcIlxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgIDptZW51LW9mZnNldD1cIlswLCAxOF1cIlxuICAgID5cbiAgICAgIDxxLWxpc3QgZGVuc2UgYm9yZGVyZWQgc2VwYXJhdG9yIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCI+XG4gICAgICAgIDxxLWl0ZW0tbGFiZWwgaGVhZGVyPkZpbHRlcnM8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPHEtc2VwYXJhdG9yIC8+XG4gICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJzd2l0Y2hlci5sYXN0U29ydE1ldGhvZFwiXG4gICAgICAgICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgICAgICAgbGFiZWw9XCJTb3J0IEJ5XCJcbiAgICAgICAgICAgICAgbWFwLW9wdGlvbnNcbiAgICAgICAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICAgICAgICA6b3B0aW9ucz1cIk9iamVjdC52YWx1ZXMoc29ydE1ldGhvZHMpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPGdyb3VwLXNlbGVjdFxuICAgICAgICAgICAgICB2LW1vZGVsPVwic3dpdGNoZXIuZXhjbHVkZUdyb3Vwc1wiXG4gICAgICAgICAgICAgIGJvcmRlcmxlc3NcbiAgICAgICAgICAgICAgbGFiZWw9XCJFeGNsdWRlIEdyb3Vwc1wiXG4gICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuICAgICAgPC9xLWxpc3Q+XG4gICAgPC9xLWJ0bi1kcm9wZG93bj5cbiAgPC9xLXBhZ2Utc3RpY2t5PlxuICA8cS1mb290ZXI+XG4gICAgPHEtYnRuLWdyb3VwIHNwcmVhZCBzdHlsZT1cImhlaWdodDogNTBweFwiPlxuICAgICAgPHEtYnRuXG4gICAgICAgIGNvbG9yPVwibmVnYXRpdmVcIlxuICAgICAgICBpY29uPVwicmVzdGFydF9hbHRcIlxuICAgICAgICBsYWJlbD1cIlJlc2V0XCJcbiAgICAgICAgOmRpc2FibGVkPVwic2F2aW5nXCJcbiAgICAgICAgOmxvYWRpbmc9XCJzYXZpbmdcIlxuICAgICAgICBAY2xpY2s9XCIkZW1pdCgncmVzZXQnKVwiXG4gICAgICAvPlxuICAgICAgPHEtYnRuXG4gICAgICAgIGNvbG9yPVwicG9zaXRpdmVcIlxuICAgICAgICBpY29uPVwic3dhcF9ob3JpelwiXG4gICAgICAgIGxhYmVsPVwiU3dpdGNoXCJcbiAgICAgICAgOmRpc2FibGVkPVwic2F2aW5nXCJcbiAgICAgICAgOmxvYWRpbmc9XCJzYXZpbmdcIlxuICAgICAgICBAY2xpY2s9XCIkZW1pdCgnc2F2ZScsIHNlbGVjdGVkTWVtYmVySWRzKVwiXG4gICAgICAvPlxuICAgIDwvcS1idG4tZ3JvdXA+XG4gIDwvcS1mb290ZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgd2F0Y2gsIGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSc7XG5cbmltcG9ydCB7IHVzZVNldHRpbmdzU3RvcmUgfSBmcm9tICdzcmMvc3RvcmVzL3NldHRpbmdzLXN0b3JlJztcbmltcG9ydCB7IGNhc2VJbnNlbnNpdGl2ZUluY2x1ZGVzLCBnZXROYW1lU29ydCwgbm90RW1wdHkgfSBmcm9tICdzcmMvdXRpbCc7XG5cbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnc3JjL21vZGVscy9Hcm91cCc7XG5pbXBvcnQgeyBNZW1iZXIgfSBmcm9tICdzcmMvbW9kZWxzL01lbWJlcic7XG5cbmltcG9ydCBHcm91cFNlbGVjdCBmcm9tICdzcmMvY29tcG9uZW50cy9Hcm91cFNlbGVjdC52dWUnO1xuaW1wb3J0IExhYmVsZWRUaWxlIGZyb20gJ3NyYy9jb21wb25lbnRzL1N0YXR1c1BhZ2UvVGlsZS9MYWJlbGVkVGlsZS52dWUnO1xuaW1wb3J0IEluaXRpYWxGYWxsYmFja0F2YXRhciBmcm9tICdzcmMvY29tcG9uZW50cy9Jbml0aWFsRmFsbGJhY2tBdmF0YXIudnVlJztcblxuLy8gcHJvcHMvc3RhdGljXG5jb25zdCB7IGRldGVjdFByb25vdW5zLCBzd2l0Y2hlciB9ID0gc3RvcmVUb1JlZnModXNlU2V0dGluZ3NTdG9yZSgpKTtcbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICBncm91cHM6IFJlYWRvbmx5QXJyYXk8R3JvdXA+O1xuICBtZW1iZXJzOiBSZWFkb25seUFycmF5PE1lbWJlcj47XG4gIGluaXRpYWxGcm9udGVyczogUmVhZG9ubHlBcnJheTxNZW1iZXI+O1xuICBzYXZpbmc6IGJvb2xlYW47XG59PigpO1xuXG5jb25zdCBzb3J0TWV0aG9kczogUmVjb3JkPFxuICBzdHJpbmcsXG4gIHtcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgZnVuYzogKGE6IE1lbWJlciwgYjogTWVtYmVyKSA9PiBudW1iZXI7XG4gIH1cbj4gPSB7XG4gICdieS1uYW1lJzoge1xuICAgIHZhbHVlOiAnYnktbmFtZScsXG4gICAgbGFiZWw6ICdOYW1lJyxcbiAgICBmdW5jOiAoYSwgYikgPT4gZ2V0TmFtZVNvcnQoZGV0ZWN0UHJvbm91bnMudmFsdWUpKGEsIGIpLFxuICB9LFxuICAnYnktbGFzdC1tZXNzYWdlJzoge1xuICAgIHZhbHVlOiAnYnktbGFzdC1tZXNzYWdlJyxcbiAgICBsYWJlbDogJ0xhc3QgTWVzc2FnZScsXG4gICAgZnVuYzogKGEsIGIpID0+XG4gICAgICAoYi5sYXN0TWVzc2FnZUF0Py52YWx1ZU9mKCkgPz8gMCkgLSAoYS5sYXN0TWVzc2FnZUF0Py52YWx1ZU9mKCkgPz8gMCksXG4gIH0sXG59O1xuXG4vLyBldmVudHNcbmRlZmluZUVtaXRzPHtcbiAgKGV2dDogJ3Jlc2V0Jyk6IHZvaWQ7XG4gIChldnQ6ICdzYXZlJywgdmFsdWU6IEFycmF5PHN0cmluZz4pOiB2b2lkO1xufT4oKTtcblxuLy8gcmVmc1xuY29uc3Qgc2VhcmNoVGV4dCA9IHJlZignJyk7XG5jb25zdCBwcmltYXJ5RnJvbnRlcklkID0gcmVmPHN0cmluZyB8IG51bGw+KFxuICBwcm9wcy5pbml0aWFsRnJvbnRlcnNbMF0/LmlkID8/IG51bGwsXG4pO1xuY29uc3Qgc2VsZWN0ZWRNZW1iZXJJZHMgPSByZWY8QXJyYXk8c3RyaW5nPj4oXG4gIHByb3BzLmluaXRpYWxGcm9udGVycy5tYXAoKGYpID0+IGYuaWQpLFxuKTtcbmNvbnN0IHNlYXJjaEZvcm0gPSByZWY8SFRNTEVsZW1lbnQ+KCk7XG5cbi8vIGNvbXB1dGVkXG5jb25zdCBmcm9udGVycyA9IGNvbXB1dGVkKCgpID0+XG4gIHNlbGVjdGVkTWVtYmVySWRzLnZhbHVlXG4gICAgLm1hcCgoaWQpID0+IHByb3BzLm1lbWJlcnMuZmluZCgobSkgPT4gbS5pZCA9PSBpZCkpXG4gICAgLmZpbHRlcihub3RFbXB0eSksXG4pO1xuXG5jb25zdCBleGNsdWRlZE1lbWJlcklkcyA9IGNvbXB1dGVkKCgpID0+XG4gIHByb3BzLmdyb3Vwc1xuICAgIC5maWx0ZXIoKGcpID0+IHN3aXRjaGVyLnZhbHVlLmV4Y2x1ZGVHcm91cHMuaW5jbHVkZXMoZy5pZCkpXG4gICAgLm1hcCgoZykgPT4gZy5tZW1iZXJzKVxuICAgIC5mbGF0KCksXG4pO1xuXG5jb25zdCBmaWx0ZXJlZE1lbWJlcnMgPSBjb21wdXRlZCgoKSA9PlxuICBwcm9wcy5tZW1iZXJzXG4gICAgLmZpbHRlcihcbiAgICAgIChtKSA9PlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1udWxsaXNoLWNvYWxlc2NpbmcgLS0gZmFsc2UgcG9zaXRpdmVcbiAgICAgICAgKG0ubmFtZSAmJiBjYXNlSW5zZW5zaXRpdmVJbmNsdWRlcyhtLm5hbWUsIHNlYXJjaFRleHQudmFsdWUpKSB8fFxuICAgICAgICAobS5kaXNwbGF5TmFtZSAmJlxuICAgICAgICAgIGNhc2VJbnNlbnNpdGl2ZUluY2x1ZGVzKG0uZGlzcGxheU5hbWUsIHNlYXJjaFRleHQudmFsdWUpKSxcbiAgICApXG4gICAgLmZpbHRlcigobSkgPT4gIWV4Y2x1ZGVkTWVtYmVySWRzLnZhbHVlLmluY2x1ZGVzKG0udXVpZCkpXG4gICAgLnRvU29ydGVkKHNvcnRNZXRob2RzW3N3aXRjaGVyLnZhbHVlLmxhc3RTb3J0TWV0aG9kXS5mdW5jKSxcbik7XG5cbmNvbnN0IHByaW1hcnlGcm9udGVyT3B0aW9ucyA9IGNvbXB1dGVkKCgpID0+XG4gIHByb3BzLm1lbWJlcnNcbiAgICAuZmlsdGVyKChtKSA9PiBzZWxlY3RlZE1lbWJlcklkcy52YWx1ZS5pbmNsdWRlcyhtLmlkKSlcbiAgICAubWFwKChtKSA9PiAoe1xuICAgICAgdmFsdWU6IG0uaWQsXG4gICAgICBsYWJlbDogbS5nZXROYW1lKGRldGVjdFByb25vdW5zLnZhbHVlKSxcbiAgICB9KSksXG4pO1xuXG4vLyB3YXRjaGVyc1xuXG4vLyByZS1vcmRlcnMgdGhlIHNlbGVjdGVkIG1lbWJlciBJRHMgc28gbmV3IHByaW1hcnkgZnJvbnRlciBpcyBmaXJzdFxud2F0Y2gocHJpbWFyeUZyb250ZXJJZCwgKHZhbCkgPT4ge1xuICBpZiAoIXZhbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFByaW1hcnkgZnJvbnRlciBpcyBhbHJlYWR5IGZpcnN0IG9uIHRoZSBsaXN0LCBkbyBub3RoaW5nXG4gIGlmIChzZWxlY3RlZE1lbWJlcklkcy52YWx1ZVswXSA9PSB2YWwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzZWxlY3RlZE1lbWJlcklkcy52YWx1ZS5zcGxpY2Uoc2VsZWN0ZWRNZW1iZXJJZHMudmFsdWUuaW5kZXhPZih2YWwpLCAxKTtcbiAgc2VsZWN0ZWRNZW1iZXJJZHMudmFsdWUudW5zaGlmdCh2YWwpO1xufSk7XG5cbmNvbnN0IHByaW1hcnlGcm9udGVyID0gY29tcHV0ZWQoKCkgPT5cbiAgcHJvcHMubWVtYmVycy5maW5kKChtKSA9PiBtLmlkID09IHByaW1hcnlGcm9udGVySWQudmFsdWUpLFxuKTtcblxuLy8gY2FsbGJhY2tzXG5mdW5jdGlvbiB0b2dnbGVNZW1iZXIoaWQ6IHN0cmluZykge1xuICBpZiAoc2VsZWN0ZWRNZW1iZXJJZHMudmFsdWUuaW5jbHVkZXMoaWQpKSB7XG4gICAgc2VsZWN0ZWRNZW1iZXJJZHMudmFsdWUuc3BsaWNlKHNlbGVjdGVkTWVtYmVySWRzLnZhbHVlLmluZGV4T2YoaWQpLCAxKTtcbiAgfSBlbHNlIHtcbiAgICBzZWxlY3RlZE1lbWJlcklkcy52YWx1ZS5wdXNoKGlkKTtcbiAgfVxuXG4gIGlmICghcHJpbWFyeUZyb250ZXJJZC52YWx1ZSkge1xuICAgIC8vIElmIHRoZXJlJ3Mgbm8gcHJpbWFyeSBmcm9udGVyIHNlbGVjdGVkIHNldCBpdCB0byB0aGlzIG9uZVxuICAgIHByaW1hcnlGcm9udGVySWQudmFsdWUgPSBpZDtcbiAgfSBlbHNlIGlmICghc2VsZWN0ZWRNZW1iZXJJZHMudmFsdWUuaW5jbHVkZXMocHJpbWFyeUZyb250ZXJJZC52YWx1ZSkpIHtcbiAgICAvLyBJZiBwcmltYXJ5IGZyb250ZXIgd2FzIHJlbW92ZWQgZnJvbSB0aGUgbGlzdCBzZWxlY3QgdGhlIG5leHQgbWVtYmVyIGFzIHByaW1hcnlcbiAgICBwcmltYXJ5RnJvbnRlcklkLnZhbHVlID0gc2VsZWN0ZWRNZW1iZXJJZHMudmFsdWVbMF07XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8IS0tIGZvcm0gLS0+XG4gIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXIgY29sLWF1dG9cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04IHEtcHgtbGcgcS1wdC1tZCBiZy1saWdodGVuXCI+XG4gICAgICA8IS0tIHNlbGVjdGVkIGZyb250ZXIgbGlzdCAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kIHEtbWItbWRcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IDY0cHhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIHNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgPHEtc2tlbGV0b24gdHlwZT1cInJlY3RcIiB3aWR0aD1cIjEyMXB4XCIgaGVpZ2h0PVwiMjFweFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgPHEtc2tlbGV0b24gdHlwZT1cIlFBdmF0YXJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXIteC1tZCBxLWNvbC1ndXR0ZXIteS1ub25lIHEtbWItbWRcIj5cbiAgICAgICAgPCEtLSBwcmltYXJ5IGZyb250ZXIgZHJvcGRvd24gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBjb2wtMTJcIj5cbiAgICAgICAgICA8cS1za2VsZXRvbiBjbGFzcz1cIlFJbnB1dFwiIGhlaWdodD1cIjQ4cHhcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSBzZWFyY2ggZmllbGQgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBjb2wtMTIgcS1tdC1zbS1ub25lIHEtbXQteHMtbGdcIj5cbiAgICAgICAgICA8cS1za2VsZXRvbiBjbGFzcz1cIlFJbnB1dFwiIGhlaWdodD1cIjQ4cHhcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8IS0tIG1lbWJlciB0aWxlcyAtLT5cbiAgPHEtc2Nyb2xsLWFyZWEgY2xhc3M9XCJjb2wgcS1tdC1zbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgY29sLW1kLTggY29sLTEyIHEtY29sLWd1dHRlci1tZCBxLW10LW1kXCI+XG4gICAgICAgIDxkaXYgdi1mb3I9XCJpZHggb2YgMTJcIiA6a2V5PVwiaWR4XCIgY2xhc3M9XCJjb2wteGwtMiBjb2wtbWQtMyBjb2wtNFwiPlxuICAgICAgICAgIDxxLXNrZWxldG9uIHR5cGU9XCJyZWN0XCIgc3R5bGU9XCJhc3BlY3QtcmF0aW86IDEvMVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvcS1zY3JvbGwtYXJlYT5cblxuICA8IS0tIGJ1dHRvbnMgLS0+XG4gIDxxLWZvb3Rlcj5cbiAgICA8cS1idG4tZ3JvdXAgc3ByZWFkIHN0eWxlPVwiaGVpZ2h0OiA1MHB4XCI+XG4gICAgICA8cS1idG5cbiAgICAgICAgY29sb3I9XCJuZWdhdGl2ZVwiXG4gICAgICAgIGljb249XCJyZXN0YXJ0X2FsdFwiXG4gICAgICAgIGxhYmVsPVwiUmVzZXRcIlxuICAgICAgICBkaXNhYmxlZFxuICAgICAgICBsb2FkaW5nXG4gICAgICAvPlxuICAgICAgPHEtYnRuXG4gICAgICAgIGNvbG9yPVwicG9zaXRpdmVcIlxuICAgICAgICBpY29uPVwic3dhcF9ob3JpelwiXG4gICAgICAgIGxhYmVsPVwiU3dpdGNoXCJcbiAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgbG9hZGluZ1xuICAgICAgLz5cbiAgICA8L3EtYnRuLWdyb3VwPlxuICA8L3EtZm9vdGVyPlxuPC90ZW1wbGF0ZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBjbGFzcz1cInJvdyBqdXN0aWZ5LWV2ZW5seVwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgY29sLTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGNvbHVtbiBjb2wtMTJcIj5cbiAgICAgICAgPCEtLSBUaXRsZSAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIHJvdyBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxwYWdlLXRpdGxlXG4gICAgICAgICAgICBpY29uPVwic3dhcF9ob3JpelwiXG4gICAgICAgICAgICB0ZXh0PVwiUmVnaXN0ZXIgU3dpdGNoXCJcbiAgICAgICAgICAgIGNsYXNzPVwiY29sLW1kLTggY29sLTEyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHYtaWY9XCIhdG9rZW5cIiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDx0b2tlbi1yZXF1aXJlZC1iYW5uZXIgY2xhc3M9XCJjb2wtbWQtOCBjb2wtMTJcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgIDxmcm9udC1zd2l0Y2hlclxuICAgICAgICAgICAgdi1pZj1cIiFsb2FkaW5nXCJcbiAgICAgICAgICAgIDpncm91cHM9XCJncm91cHNcIlxuICAgICAgICAgICAgOm1lbWJlcnM9XCJtZW1iZXJzXCJcbiAgICAgICAgICAgIDppbml0aWFsLWZyb250ZXJzPVwiZnJvbnRlcnNcIlxuICAgICAgICAgICAgOnNhdmluZz1cInNhdmluZ1wiXG4gICAgICAgICAgICBAcmVzZXQ9XCJvblJlc2V0XCJcbiAgICAgICAgICAgIEBzYXZlPVwib25TYXZlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxmcm9udC1zd2l0Y2hlci1za2VsZXRvbiB2LWVsc2UgLz5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJztcbmltcG9ydCB7IHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcic7XG5cbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSAncGthcGktdHMvZXJyb3JzJztcbmltcG9ydCBNZW1iZXJJRCBmcm9tICdwa2FwaS10cy9tb2RlbHMvTWVtYmVySUQnO1xuXG5pbXBvcnQgeyB1c2VTZXR0aW5nc1N0b3JlIH0gZnJvbSAnc3JjL3N0b3Jlcy9zZXR0aW5ncy1zdG9yZSc7XG5pbXBvcnQgeyB1c2VQbHVyYWxLaXQgfSBmcm9tICdzcmMvYm9vdC9wbHVyYWxLaXQnO1xuaW1wb3J0IHsgZWxsaXBzaXplIH0gZnJvbSAnc3JjL3V0aWwnO1xuXG5pbXBvcnQgeyBTeXN0ZW0gfSBmcm9tICdzcmMvbW9kZWxzL1N5c3RlbSc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJ3NyYy9tb2RlbHMvR3JvdXAnO1xuaW1wb3J0IHsgTWVtYmVyIH0gZnJvbSAnc3JjL21vZGVscy9NZW1iZXInO1xuaW1wb3J0IHsgRnJvbnRlcnMgfSBmcm9tICdzcmMvbW9kZWxzL0Zyb250ZXJzJztcblxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICdzcmMvY29tcG9uZW50cy9QYWdlVGl0bGUudnVlJztcbmltcG9ydCBUb2tlblJlcXVpcmVkQmFubmVyIGZyb20gJ3NyYy9jb21wb25lbnRzL1Rva2VuUmVxdWlyZWRCYW5uZXIudnVlJztcbmltcG9ydCBGcm9udFN3aXRjaGVyIGZyb20gJ3NyYy9jb21wb25lbnRzL1N3aXRjaFBhZ2UvRnJvbnRTd2l0Y2hlci52dWUnO1xuaW1wb3J0IEZyb250U3dpdGNoZXJTa2VsZXRvbiBmcm9tICdzcmMvY29tcG9uZW50cy9Td2l0Y2hQYWdlL0Zyb250U3dpdGNoZXJTa2VsZXRvbi52dWUnO1xuXG5jb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuY29uc3QgcGx1cmFsS2l0ID0gdXNlUGx1cmFsS2l0KCk7XG5jb25zdCB7IHRva2VuLCBkZXRlY3RQcm9ub3VucyB9ID0gc3RvcmVUb1JlZnModXNlU2V0dGluZ3NTdG9yZSgpKTtcblxuY29uc3QgbG9hZGluZyA9IHJlZih0cnVlKTtcbmNvbnN0IHNhdmluZyA9IHJlZihmYWxzZSk7XG5cbmNvbnN0IG1lbWJlcnMgPSByZWY8UmVhZG9ubHlBcnJheTxNZW1iZXI+PihbXSk7XG5jb25zdCBncm91cHMgPSByZWY8UmVhZG9ubHlBcnJheTxHcm91cD4+KFtdKTtcbmNvbnN0IGZyb250ZXJzID0gcmVmPFJlYWRvbmx5QXJyYXk8TWVtYmVyPj4oW10pO1xuXG4vLyBjYWxsYmFja3NcbmFzeW5jIGZ1bmN0aW9uIG9uUmVzZXQoKSB7XG4gIGF3YWl0IGxvYWRTdGF0ZSgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvblNhdmUobmV3TWVtYmVyczogQXJyYXk8c3RyaW5nPikge1xuICBzYXZpbmcudmFsdWUgPSB0cnVlO1xuICBpZiAoIXRva2VuLnZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBuZXdGcm9udGVycyA9IGF3YWl0IHBsdXJhbEtpdC5jcmVhdGVTd2l0Y2goXG4gICAgICBuZXdNZW1iZXJzLm1hcCgobSkgPT4gTWVtYmVySUQucGFyc2UobSkpLFxuICAgICk7XG4gICAgLy8gTk9URTogV2Ugc2hvdWxkbid0IGJlIGFibGUgdG8gY2FsbCB0aGlzIHdpdGhvdXQgYSBzeXN0ZW1cbiAgICBzaG93U3VjY2Vzc01lc3NhZ2UobmV3RnJvbnRlcnMhKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmICghKGUgaW5zdGFuY2VvZiBBUElFcnJvcikpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgJHEubm90aWZ5KHtcbiAgICAgIHR5cGU6ICduZWdhdGl2ZScsXG4gICAgICBtZXNzYWdlOiBgJHtlLnN0YXR1c306ICR7ZS5tZXNzYWdlfSAoJHtlLmNvZGV9KWAsXG4gICAgfSk7XG4gIH1cblxuICBzYXZpbmcudmFsdWUgPSBmYWxzZTtcbn1cblxuLy8gbWV0aG9kc1xuYXN5bmMgZnVuY3Rpb24gbG9hZFN0YXRlKCkge1xuICBpZiAoIXRva2VuLnZhbHVlKSB7XG4gICAgLy8gZG9uJ3QgdHJ5IGxvYWRpbmcgYW55dGhpbmcgd2l0aG91dCBhIHRva2VuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbG9hZGluZy52YWx1ZSA9IHRydWU7XG5cbiAgLy8gTG9hZCBtZW1iZXJzL2Zyb250ZXJzXG4gIGNvbnN0IHN5c3RlbSA9IGF3YWl0IGdldFN5c3RlbSgpOyAvLyBNYWtlIHN1cmUgd2UncmUgbG9nZ2VkIGluIGFuZCBoYW5kbGUgaW52YWxpZCB0b2tlbnNcbiAgaWYgKCFzeXN0ZW0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBsb2FkIGFsbCBkYXRhXG4gIHRyeSB7XG4gICAgbWVtYmVycy52YWx1ZSA9IChhd2FpdCBwbHVyYWxLaXQuZ2V0T3duTWVtYmVycygpKSA/PyBbXTtcbiAgfSBjYXRjaCAoZSkge1xuICAgICRxLm5vdGlmeSh7XG4gICAgICB0eXBlOiAnbmVnYXRpdmUnLFxuICAgICAgbWVzc2FnZTogXCJTd2l0Y2hlcjogY291bGRuJ3QgcmV0cmlldmUgc3lzdGVtIG1lbWJlcnNcIixcbiAgICAgIGNhcHRpb246IGVsbGlwc2l6ZShTdHJpbmcoZSkpLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICB0cnkge1xuICAgIGdyb3Vwcy52YWx1ZSA9IChhd2FpdCBwbHVyYWxLaXQuZ2V0T3duR3JvdXBzKCkpID8/IFtdO1xuICB9IGNhdGNoIChlKSB7XG4gICAgJHEubm90aWZ5KHtcbiAgICAgIHR5cGU6ICduZWdhdGl2ZScsXG4gICAgICBtZXNzYWdlOiBcIlN3aXRjaGVyOiBjb3VsZG4ndCByZXRyaWV2ZSBzeXN0ZW0gZ3JvdXBzXCIsXG4gICAgICBjYXB0aW9uOiBlbGxpcHNpemUoU3RyaW5nKGUpKSxcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgdHJ5IHtcbiAgICBmcm9udGVycy52YWx1ZSA9IChhd2FpdCBwbHVyYWxLaXQuZ2V0T3duRnJvbnRlcnMoKSk/Lm1lbWJlcnMgPz8gW107XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcS5ub3RpZnkoe1xuICAgICAgdHlwZTogJ25lZ2F0aXZlJyxcbiAgICAgIG1lc3NhZ2U6IFwiU3dpdGNoZXI6IGNvdWxkbid0IHJldHJpZXZlIHN5c3RlbSBmcm9udGVyc1wiLFxuICAgICAgY2FwdGlvbjogZWxsaXBzaXplKFN0cmluZyhlKSksXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gZmluaXNoIGxvYWRpbmdcbiAgbG9hZGluZy52YWx1ZSA9IGZhbHNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRTeXN0ZW0oKTogUHJvbWlzZTxTeXN0ZW0gfCBudWxsPiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc3lzdGVtID0gYXdhaXQgcGx1cmFsS2l0LmdldE93blN5c3RlbSgpO1xuICAgIGlmICghc3lzdGVtKSB7XG4gICAgICAkcS5ub3RpZnkoe1xuICAgICAgICB0eXBlOiAnbmVnYXRpdmUnLFxuICAgICAgICBtZXNzYWdlOiBcIkNvdWxkbid0IHJldHJpZXZlIG93biBzeXN0ZW0gZm9yIHNvbWUgcmVhc29uXCIsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHN5c3RlbTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlIGluc3RhbmNlb2YgQVBJRXJyb3IpIHtcbiAgICAgIGlmIChlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgJHEubm90aWZ5KHtcbiAgICAgICAgICB0eXBlOiAnbmVnYXRpdmUnLFxuICAgICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIFRva2VuJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd1N1Y2Nlc3NNZXNzYWdlKG5ld0Zyb250ZXJzOiBGcm9udGVycyk6IHZvaWQge1xuICBpZiAobmV3RnJvbnRlcnMubWVtYmVycy5sZW5ndGggPT0gMCkge1xuICAgICRxLm5vdGlmeSh7XG4gICAgICB0eXBlOiAncG9zaXRpdmUnLFxuICAgICAgbWVzc2FnZTogJ1N3aXRjaC1vdXQgcmVnaXN0ZXJlZC4nLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKG5ld0Zyb250ZXJzLm1lbWJlcnMubGVuZ3RoID09IDEpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIG5ld0Zyb250ZXJzLm1lbWJlcnNbMF0uZ2V0TmFtZShkZXRlY3RQcm9ub3Vucy52YWx1ZSkgPz8gJ1Vua25vd24nO1xuXG4gICAgJHEubm90aWZ5KHtcbiAgICAgIHR5cGU6ICdwb3NpdGl2ZScsXG4gICAgICBtZXNzYWdlOiBgU3dpdGNoIHJlZ2lzdGVyZWQuIEN1cnJlbnQgZnJvbnRlciBpcyBub3cgJHtuYW1lfS5gLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5hbWVzID0gbmV3RnJvbnRlcnMubWVtYmVycy5tYXAoKG0pID0+XG4gICAgICBtLmdldE5hbWUoZGV0ZWN0UHJvbm91bnMudmFsdWUpLFxuICAgICk7XG5cbiAgICAkcS5ub3RpZnkoe1xuICAgICAgdHlwZTogJ3Bvc2l0aXZlJyxcbiAgICAgIG1lc3NhZ2U6IGBTd2l0Y2ggcmVnaXN0ZXJlZC4gQ3VycmVudCBmcm9udGVycyBhcmUgbm93ICR7bmFtZXMuam9pbignLCAnKX0uYCxcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBsaWZlY3ljbGVcbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGxvYWRTdGF0ZSgpO1xufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfb3BlbkJsb2NrIiwiX2NyZWF0ZUJsb2NrIiwiX3dpdGhDdHgiLCJfY3JlYXRlVk5vZGUiLCJfdXNlTW9kZWwiLCJfYiIsIl9hIiwiX2hvaXN0ZWRfMiIsIl9ob2lzdGVkXzMiLCJfaG9pc3RlZF80IiwiX2hvaXN0ZWRfNSIsIl9ob2lzdGVkXzYiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfaG9pc3RlZF8xIiwiX3JlbmRlckxpc3QiLCJfbm9ybWFsaXplU3R5bGUiLCJfaG9pc3RlZF83IiwiX2NyZWF0ZVNsb3RzIiwiX2hvaXN0ZWRfOCIsIl9ob2lzdGVkXzkiLCJfaG9pc3RlZF8xMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxNQUFBLFVBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBRUgsZUFBZTtBQUFBLElBQ2YsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLEVBQ1Y7QUFBQSxFQUVELE1BQU8sT0FBTyxFQUFFLFNBQVM7QUFDdkIsVUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFFLEVBQUksSUFBRyxtQkFBa0I7QUFDNUMsVUFBTSxTQUFTLFFBQVEsT0FBTyxFQUFFO0FBRWhDLFVBQU0sVUFBVTtBQUFBLE1BQVMsTUFDdkIsK0JBQ0csTUFBTSxVQUFVLE9BQU8scUJBQXFCLE9BQzVDLE9BQU8sVUFBVSxPQUFPLDJCQUEyQixPQUNuRCxNQUFNLFlBQVksT0FBTyxxQkFBcUI7QUFBQSxJQUN2RDtBQUVJLFVBQU0sY0FBYztBQUFBLE1BQVMsTUFDM0Isc0RBQ1csTUFBTSxrQkFBa0IsT0FBTyxTQUFTLEtBQU87QUFBQSxJQUNoRTtBQUVJLFdBQU8sTUFBTTtBQUNYLFlBQU0sUUFBUTtBQUFBLFFBQ1osRUFBRSxPQUFPO0FBQUEsVUFDUCxPQUFPO0FBQUEsUUFDakIsR0FBVyxNQUFNLE1BQU0sTUFBTSxDQUFDO0FBQUEsUUFFdEIsRUFBRSxPQUFPO0FBQUEsVUFDUCxPQUFPO0FBQUEsUUFDakIsR0FBVyxNQUFNLE1BQU0sT0FBTyxDQUFDO0FBQUEsTUFDL0I7QUFFTSxZQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU07QUFD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USxVQUFVLEdBQUc7QUFDcEMsY0FBQSxRQUNKLGlCQUFZLFFBQVEsQ0FBQyxFQUFFLFFBQVEsZUFBZSxLQUFLLE1BQW5ELFlBQXdEO0FBRTFELFdBQUcsT0FBTztBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sU0FBUyw2Q0FBNkMsSUFBSTtBQUFBLFFBQUEsQ0FDM0Q7QUFBQSxNQUFBLE9BQ0k7QUFDQyxjQUFBLFFBQVEsWUFBWSxRQUFRO0FBQUEsVUFBSSxDQUFDLE1BQ3JDLEVBQUUsUUFBUSxlQUFlLEtBQUs7QUFBQSxRQUNoQztBQUVBLFdBQUcsT0FBTztBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sU0FBUywrQ0FBK0MsTUFBTSxLQUFLLElBQUksQ0FBQztBQUFBLFFBQUEsQ0FDekU7QUFBQSxNQUFBO0FBQUEsSUFDSDtBQUlGLGNBQVUsWUFBWTtBQUNwQixZQUFNLFVBQVU7QUFBQSxJQUFBLENBQ2pCOzs7Ozs7cUJBdE1ZLE9BQU0sYUFBQTs7O01BUVEsYUFBTTtBQUFBLEVBQUEsS0FBQTtBQUFBOzs7U0FYN0JILFVBNEJNLEdBQUFDLFlBQUEsT0FBQSxFQUFBLE9BQUEsd0JBQUE7QUFBQSxJQUFBLFNBM0JKQyxRQTBCTSxNQUFBO0FBQUEsTUFBQWEsZ0JBekJKLE9BQWMsWUFBQTtBQUFBLFFBQUFBLGdCQUNkLE9BTU0sWUFBQTtBQUFBLFVBREZELG1CQUFBLFNBQUE7QUFBQSxVQUFBQyxnQkFISyxPQUFZLFlBQUE7QUFBQSxZQUFBWixZQUNaLE9BQWlCLFdBQUEsR0FBQTtBQUFBLGNBQ3RCLE1BQUs7QUFBQSxjQUFBLE1BQUE7QUFBQTtZQUlHLENBQUE7QUFBQSxVQUFBLENBQUE7QUFBQSxVQUNWLENBQUEsT0FBQSxTQUFBSCxVQUFBLEdBQUFZLG1CQUFBLE9BQUEsWUFBQTtBQUFBLHdCQUdGLE9BV1cscUJBQUEsR0FBQSxFQUFBLE9BQUEsa0JBQUEsQ0FBQTtBQUFBLFVBQUEsQ0FBQSxNQUFBWixVQUFBLEdBQUFZO0FBQUFBLFlBRlBDO0FBQUFBLFlBQUEsRUFBQSxLQUFBLEVBQUE7QUFBQSxZQUFBO0FBQUEsY0FBQSxDQUFBLE9BQUEsV0FBQWIsVUFBQSxHQU5lQyxZQUFBLE9BQUEsZUFBQSxHQUFBO0FBQUEsZ0JBQ2QsS0FBQTtBQUFBLGdCQUNBLFFBQUEsT0FBQTtBQUFBLGdCQUNBLFNBQVEsT0FBQTtBQUFBLGdCQUNSLG9CQUFPLE9BQU87QUFBQSxnQkFDZCxRQUFNLE9BQUE7QUFBQSxnQkFBQSxTQUFBLE9BQUE7QUFBQSxnQkFFVCxRQUFBLE9BQUE7QUFBQSxjQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsVUFBQSxXQUFBLG9CQUFBLFFBQUEsQ0FBQSxNQUFBRCxVQUFBLEdBQUFDLFlBQUEsT0FBQSx1QkFBQSxHQUFBLEVBQUEsS0FBQSxHQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMiwzXX0=
