import { c as createComponent, k as useDarkProps, g as getCurrentInstance, n as useDark, d as computed, h, e as hSlot, Q as defineComponent, aC as useServices, aS as useModel, r as ref, t as onMounted, V as openBlock, W as createBlock, af as _export_sfc, S as useQuasar, R as useSettingsStore, T as storeToRefs, aT as caseInsensitiveIncludes, w as watch, X as withCtx, aU as getNameSort, aV as APIError, a2 as createBaseVNode, Y as createVNode, _ as unref, a3 as QIcon, a0 as QBtn, a1 as createTextVNode, aE as createElementBlock, aF as Fragment, aO as renderList, aM as normalizeStyle, aW as createSlots, aX as QInput } from "./index-C1u-_TOv.js";
import { Q as QSkeleton } from "./QSkeleton-CNlw84Bc.js";
import { Q as QSelect } from "./QSelect-B3454tSI.js";
import { Q as QPageSticky } from "./QPageSticky-CCDCP62Z.js";
import { Q as QPage } from "./QPage-C2tXGOnV.js";
import { pk } from "./pkapi-DWEHrqR1.js";
import { P as PageTitle } from "./PageTitle-gQbGVrI-.js";
import { L as LabeledTile } from "./LabeledTile-B2Qh0RgH.js";
import { I as InitialFallbackAvatar } from "./InitialFallbackAvatar-B9wHc8ll.js";
import "./QItem-4sCyJUzG.js";
import "./QMenu-CRzTXqO9.js";
import "./format-esB8TFiE.js";
import "./index-DRTIEHtT.js";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GroupSelect",
  props: {
    "modelValue": { type: [String, Array] },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const { pluralKit } = useServices();
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
      groups.value = await pluralKit.getOwnGroups();
      filteredSelectOptions.value = selectOptions.value;
      model.value = Array.isArray(model.value) ? [...model.value] : model.value;
      loading.value = false;
    });
    return (_ctx, _cache) => {
      return !loading.value ? (openBlock(), createBlock(QSelect, {
        key: 0,
        modelValue: model.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
        options: filteredSelectOptions.value,
        "map-options": "",
        "use-input": "",
        "emit-value": "",
        onFilter: filterFunc
      }, null, 8, ["modelValue", "options"])) : (openBlock(), createBlock(QSkeleton, {
        key: 1,
        class: "q-mt-sm",
        height: "48px",
        shape: "rectangle"
      }));
    };
  }
});
const GroupSelect = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "/home/zowie/dev/pkstatus/src/components/GroupSelect.vue"]]);
const _hoisted_1 = { class: "col col-md-8" };
const _hoisted_2 = {
  key: 1,
  class: "bg-lighten q-pa-lg"
};
const _hoisted_3 = {
  class: "row q-col-gutter-md q-mb-md",
  style: { "height": "64px" }
};
const _hoisted_4 = { class: "col-auto self-center" };
const _hoisted_5 = { class: "col" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "col-auto self-center" },
  "Selected Fronters:",
  -1
  /* HOISTED */
);
const _hoisted_7 = { class: "col relative-position" };
const _hoisted_8 = { class: "row q-col-gutter-x-md q-col-gutter-y-none q-mb-md" };
const _hoisted_9 = { class: "col-sm-6 col-12" };
const _hoisted_10 = { class: "col-sm-6 col-12" };
const _hoisted_11 = { class: "col-sm-6 col-12" };
const _hoisted_12 = { class: "col-sm-6 col-12" };
const _hoisted_13 = {
  key: 0,
  class: "row q-col-gutter-md"
};
const _hoisted_14 = {
  key: 1,
  class: "row q-col-gutter-md q-mt-md"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SwitchPage",
  setup(__props) {
    const $q = useQuasar();
    const settingsStore = useSettingsStore();
    const { pluralKit, memberCache, groupCache } = useServices();
    const { detectPronouns, token, switcher } = storeToRefs(settingsStore);
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
          var _a, _b;
          return (((_a = b.lastMessageAt) == null ? void 0 : _a.valueOf()) || 0) - (((_b = a.lastMessageAt) == null ? void 0 : _b.valueOf()) || 0);
        }
      }
    };
    const loading = ref(true);
    const switching = ref(false);
    const searchText = ref("");
    const primaryFronterId = ref("");
    const selected = ref([]);
    const members = ref([]);
    const sortMethod = computed(
      () => sortMethods[switcher.value.lastSortMethod].func
    );
    const primaryFronter = computed(
      () => memberCache.getCached(primaryFronterId.value)
    );
    const fronters = computed(
      () => memberCache.getMultiCached(selected.value.toReversed())
    );
    const options = computed(
      () => memberCache.getMultiCached(selected.value).map((m) => ({
        value: m.id,
        label: m.getName(detectPronouns.value)
      }))
    );
    const filterMemberIds = computed(
      () => groupCache.getMultiCached(switcher.value.excludeGroups).map((g) => g.members).flat()
    );
    const filteredMembers = computed(
      () => members.value.filter(
        (m) => caseInsensitiveIncludes(m.name, searchText.value) || caseInsensitiveIncludes(m.displayName || "", searchText.value)
      ).filter((m) => !filterMemberIds.value.includes(m.id)).toSorted(sortMethod.value)
    );
    function toggleMember(id) {
      selected.value.includes(id) ? selected.value.splice(selected.value.indexOf(id), 1) : selected.value.push(id);
      if (primaryFronterId.value == "") {
        primaryFronterId.value = id;
      }
      if (!selected.value.includes(primaryFronterId.value)) {
        primaryFronterId.value = selected.value[0];
      }
    }
    watch(primaryFronterId, (val) => {
      if (selected.value[0] == val) {
        return;
      }
      selected.value.splice(selected.value.indexOf(val), 1);
      selected.value.unshift(val);
    });
    async function doSwitch() {
      switching.value = true;
      if (!token.value) {
        return;
      }
      try {
        await pk.createSwitch({
          members: selected.value,
          token: token.value
        });
        showSuccessMessage(selected.value);
      } catch (e) {
        if (!(e instanceof APIError)) {
          throw e;
        }
        $q.notify({
          type: "negative",
          message: `${e.status}: ${e.message} (${e.code})`
        });
      }
      switching.value = false;
    }
    function showSuccessMessage(newFronters) {
      var _a, _b;
      if (newFronters.length == 0) {
        $q.notify({
          type: "positive",
          message: "Switch-out registered."
        });
      } else if (newFronters.length == 1) {
        const name = (_b = (_a = memberCache.getCached(newFronters[0])) == null ? void 0 : _a.getName(detectPronouns.value)) != null ? _b : "Unknown";
        $q.notify({
          type: "positive",
          message: `Switch registered. Current fronter is now ${name}.`
        });
      } else {
        const names = memberCache.getMultiCached(newFronters).map((m) => m.getName(detectPronouns.value));
        $q.notify({
          type: "positive",
          message: `Switch registered. Current fronters are now ${names.join(", ")}.`
        });
      }
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
          if (e.status == "401") {
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
    onMounted(async () => {
      loading.value = true;
      await getSystem();
      members.value = await pluralKit.getOwnMembers();
      const lastSwitch = await pluralKit.getOwnFronters();
      if (lastSwitch.members.length > 0) {
        primaryFronterId.value = lastSwitch.members[0].id;
        selected.value = lastSwitch.members.map((m) => m.id);
      }
      loading.value = false;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "row justify-evenly" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(PageTitle, {
              icon: "swap_horiz",
              text: "Register Switch"
            }),
            !unref(token) ? (openBlock(), createBlock(QBanner, {
              key: 0,
              class: "text-white bg-red"
            }, {
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
                createTextVNode(" You need to set your PluralKit token to use this feature ")
              ]),
              _: 1
              /* STABLE */
            })) : (openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                loading.value ? (openBlock(), createElementBlock(
                  Fragment,
                  { key: 0 },
                  [
                    createBaseVNode("div", _hoisted_4, [
                      createVNode(QSkeleton, {
                        type: "rect",
                        width: "121px",
                        height: "21px"
                      })
                    ]),
                    createBaseVNode("div", _hoisted_5, [
                      createVNode(QSkeleton, { type: "QAvatar" })
                    ])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : (openBlock(), createElementBlock(
                  Fragment,
                  { key: 1 },
                  [
                    _hoisted_6,
                    createBaseVNode("div", _hoisted_7, [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(fronters.value.entries(), ([idx, fronter]) => {
                          return openBlock(), createBlock(InitialFallbackAvatar, {
                            key: fronter.id,
                            style: normalizeStyle(`left: ${(fronters.value.length - idx - 1) * 25 + 5}px; position: absolute; box-shadow: 0 0 2px 2px black`),
                            url: fronter.avatarUrl,
                            name: fronter.getName(unref(detectPronouns)),
                            onClick: ($event) => toggleMember(fronter.id)
                          }, null, 8, ["style", "url", "name", "onClick"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  !loading.value ? (openBlock(), createBlock(QSelect, {
                    key: 0,
                    modelValue: primaryFronterId.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => primaryFronterId.value = $event),
                    "bottom-slots": "",
                    "emit-value": "",
                    "map-options": "",
                    options: options.value,
                    label: "Primary Fronter"
                  }, createSlots({
                    _: 2
                    /* DYNAMIC */
                  }, [
                    primaryFronter.value ? {
                      name: "append",
                      fn: withCtx(() => [
                        createVNode(InitialFallbackAvatar, {
                          url: primaryFronter.value.avatarUrl,
                          name: primaryFronter.value.getName(unref(detectPronouns))
                        }, null, 8, ["url", "name"])
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["modelValue", "options"])) : (openBlock(), createBlock(QSkeleton, {
                    key: 1,
                    class: "QInput",
                    height: "48px"
                  }))
                ]),
                createBaseVNode("div", _hoisted_10, [
                  !loading.value ? (openBlock(), createBlock(QInput, {
                    key: 0,
                    modelValue: searchText.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchText.value = $event),
                    "bottom-slots": "",
                    label: "Search"
                  }, null, 8, ["modelValue"])) : (openBlock(), createBlock(QSkeleton, {
                    key: 1,
                    class: "QInput",
                    height: "48px"
                  }))
                ]),
                createBaseVNode("div", _hoisted_11, [
                  createVNode(QSelect, {
                    modelValue: unref(switcher).lastSortMethod,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(switcher).lastSortMethod = $event),
                    label: "Sort By",
                    "map-options": "",
                    "emit-value": "",
                    options: Object.values(sortMethods)
                  }, null, 8, ["modelValue", "options"])
                ]),
                createBaseVNode("div", _hoisted_12, [
                  createVNode(GroupSelect, {
                    modelValue: unref(switcher).excludeGroups,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(switcher).excludeGroups = $event),
                    label: "Exclude Groups",
                    multiple: ""
                  }, null, 8, ["modelValue"])
                ])
              ]),
              !loading.value ? (openBlock(), createElementBlock("div", _hoisted_13, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(filteredMembers.value, (member) => {
                    return openBlock(), createElementBlock("div", {
                      key: member.id,
                      class: "col-xl-2 col-md-3 col-4"
                    }, [
                      createVNode(LabeledTile, {
                        style: { "box-shadow": "0px 0px 3px 3px var(--q-primary)", "user-select": "none" },
                        img: member.avatarUrl,
                        label: member.getName(unref(detectPronouns)),
                        caption: member.getPronouns(unref(detectPronouns)),
                        flat: !selected.value.includes(member.id),
                        size: "100%",
                        onClick: ($event) => toggleMember(member.id)
                      }, null, 8, ["img", "label", "caption", "flat", "onClick"])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : (openBlock(), createElementBlock("div", _hoisted_14, [
                (openBlock(), createElementBlock(
                  Fragment,
                  null,
                  renderList(6, (idx) => {
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
              ])),
              createVNode(QPageSticky, {
                position: "bottom-right",
                offset: [18, 18]
              }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    fab: "",
                    class: "self-end",
                    icon: "swap_horiz",
                    color: "primary",
                    disabled: loading.value || switching.value,
                    loading: loading.value || switching.value,
                    onClick: doSwitch
                  }, null, 8, ["disabled", "loading"])
                ]),
                _: 1
                /* STABLE */
              })
            ]))
          ])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
const SwitchPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/zowie/dev/pkstatus/src/pages/SwitchPage.vue"]]);
export {
  SwitchPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dpdGNoUGFnZS1DMmJRb3FneC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjIvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9iYW5uZXIvUUJhbm5lci5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dyb3VwU2VsZWN0LnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9Td2l0Y2hQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5cbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQmFubmVyJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIGlubGluZUFjdGlvbnM6IEJvb2xlYW4sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgcm91bmRlZDogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1iYW5uZXIgcm93IGl0ZW1zLWNlbnRlcidcbiAgICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLWJhbm5lci0tZGVuc2UnIDogJycpXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtYmFubmVyLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICAgICsgKHByb3BzLnJvdW5kZWQgPT09IHRydWUgPyAnIHJvdW5kZWQtYm9yZGVycycgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBhY3Rpb25DbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1iYW5uZXJfX2FjdGlvbnMgcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCdcbiAgICAgICsgYCBjb2wtJHsgcHJvcHMuaW5saW5lQWN0aW9ucyA9PT0gdHJ1ZSA/ICdhdXRvJyA6ICdhbGwnIH1gXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWJhbm5lcl9fYXZhdGFyIGNvbC1hdXRvIHJvdyBpdGVtcy1jZW50ZXIgc2VsZi1zdGFydCdcbiAgICAgICAgfSwgaFNsb3Qoc2xvdHMuYXZhdGFyKSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1iYW5uZXJfX2NvbnRlbnQgY29sIHRleHQtYm9keTInXG4gICAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICAgICAgXVxuXG4gICAgICBjb25zdCBhY3Rpb25zID0gaFNsb3Qoc2xvdHMuYWN0aW9uKVxuICAgICAgYWN0aW9ucyAhPT0gdm9pZCAwICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6IGFjdGlvbkNsYXNzLnZhbHVlIH0sIGFjdGlvbnMpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlXG4gICAgICAgICAgKyAocHJvcHMuaW5saW5lQWN0aW9ucyA9PT0gZmFsc2UgJiYgYWN0aW9ucyAhPT0gdm9pZCAwID8gJyBxLWJhbm5lci0tdG9wLXBhZGRpbmcnIDogJycpLFxuICAgICAgICByb2xlOiAnYWxlcnQnXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLXNlbGVjdFxuICAgIHYtaWY9XCIhbG9hZGluZ1wiXG4gICAgdi1tb2RlbD1cIm1vZGVsXCJcbiAgICA6b3B0aW9ucz1cImZpbHRlcmVkU2VsZWN0T3B0aW9uc1wiXG4gICAgbWFwLW9wdGlvbnNcbiAgICB1c2UtaW5wdXRcbiAgICBlbWl0LXZhbHVlXG4gICAgQGZpbHRlcj1cImZpbHRlckZ1bmNcIlxuICAvPlxuICA8cS1za2VsZXRvbiB2LWVsc2UgY2xhc3M9XCJxLW10LXNtXCIgaGVpZ2h0PVwiNDhweFwiIHNoYXBlPVwicmVjdGFuZ2xlXCIgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VTZXJ2aWNlcyB9IGZyb20gJ3NyYy9saWIvU2VydmljZXMnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICdzcmMvbW9kZWxzL0dyb3VwJztcbmltcG9ydCB7IGNvbXB1dGVkLCBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IHsgcGx1cmFsS2l0IH0gPSB1c2VTZXJ2aWNlcygpO1xuXG5jb25zdCBtb2RlbCA9IGRlZmluZU1vZGVsPHN0cmluZyB8IEFycmF5PHN0cmluZz4+KCk7XG5cbmNvbnN0IGxvYWRpbmcgPSByZWYodHJ1ZSk7XG5jb25zdCBncm91cHMgPSByZWY8QXJyYXk8R3JvdXA+PihbXSk7XG5jb25zdCBmaWx0ZXJlZFNlbGVjdE9wdGlvbnMgPSByZWY8QXJyYXk8eyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0+PihbXSk7XG5jb25zdCBzZWxlY3RPcHRpb25zID0gY29tcHV0ZWQoKCkgPT5cbiAgZ3JvdXBzLnZhbHVlLm1hcCgoZykgPT4gKHsgbGFiZWw6IGcuZ2V0TmFtZSgpLCB2YWx1ZTogZy5pZCB9KSksXG4pO1xuXG5mdW5jdGlvbiBmaWx0ZXJGdW5jKHZhbDogc3RyaW5nLCB1cGRhdGU6IChjYjogKCkgPT4gdm9pZCkgPT4gdm9pZCkge1xuICBpZiAodmFsID09PSAnJykge1xuICAgIHVwZGF0ZSgoKSA9PiB7XG4gICAgICBmaWx0ZXJlZFNlbGVjdE9wdGlvbnMudmFsdWUgPSBzZWxlY3RPcHRpb25zLnZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHVwZGF0ZSgoKSA9PiB7XG4gICAgZmlsdGVyZWRTZWxlY3RPcHRpb25zLnZhbHVlID0gc2VsZWN0T3B0aW9ucy52YWx1ZS5maWx0ZXIoXG4gICAgICAoeyBsYWJlbCwgdmFsdWUgfSkgPT5cbiAgICAgICAgbGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWwudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgdmFsdWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWwudG9Mb3dlckNhc2UoKSksXG4gICAgKTtcbiAgfSk7XG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGdyb3Vwcy52YWx1ZSA9IGF3YWl0IHBsdXJhbEtpdC5nZXRPd25Hcm91cHMoKTtcbiAgZmlsdGVyZWRTZWxlY3RPcHRpb25zLnZhbHVlID0gc2VsZWN0T3B0aW9ucy52YWx1ZTtcbiAgbW9kZWwudmFsdWUgPSBBcnJheS5pc0FycmF5KG1vZGVsLnZhbHVlKSA/IFsuLi5tb2RlbC52YWx1ZV0gOiBtb2RlbC52YWx1ZTtcbiAgbG9hZGluZy52YWx1ZSA9IGZhbHNlO1xufSk7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBjbGFzcz1cInJvdyBqdXN0aWZ5LWV2ZW5seVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLW1kLThcIj5cbiAgICAgIDxwYWdlLXRpdGxlIGljb249XCJzd2FwX2hvcml6XCIgdGV4dD1cIlJlZ2lzdGVyIFN3aXRjaFwiIC8+XG5cbiAgICAgIDxxLWJhbm5lciB2LWlmPVwiIXRva2VuXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLXJlZFwiPlxuICAgICAgICA8dGVtcGxhdGUgI2F2YXRhcj5cbiAgICAgICAgICA8cS1pY29uIG5hbWU9XCJ3YXJuaW5nXCIgY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIFlvdSBuZWVkIHRvIHNldCB5b3VyIFBsdXJhbEtpdCB0b2tlbiB0byB1c2UgdGhpcyBmZWF0dXJlXG4gICAgICAgIDx0ZW1wbGF0ZSAjYWN0aW9uPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgdG89XCIvc2V0dGluZ3NcIlxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgY2xhc3M9XCJiZy1yZWQgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkdvIFRvIFNldHRpbmdzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9xLWJhbm5lcj5cbiAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwiYmctbGlnaHRlbiBxLXBhLWxnXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kIHEtbWItbWRcIiBzdHlsZT1cImhlaWdodDogNjRweFwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIHNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxxLXNrZWxldG9uIHR5cGU9XCJyZWN0XCIgd2lkdGg9XCIxMjFweFwiIGhlaWdodD1cIjIxcHhcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxxLXNrZWxldG9uIHR5cGU9XCJRQXZhdGFyXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBzZWxmLWNlbnRlclwiPlNlbGVjdGVkIEZyb250ZXJzOjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCByZWxhdGl2ZS1wb3NpdGlvblwiPlxuICAgICAgICAgICAgICA8aW5pdGlhbC1mYWxsYmFjay1hdmF0YXJcbiAgICAgICAgICAgICAgICB2LWZvcj1cIltpZHgsIGZyb250ZXJdIGluIGZyb250ZXJzLmVudHJpZXMoKVwiXG4gICAgICAgICAgICAgICAgOmtleT1cImZyb250ZXIuaWRcIlxuICAgICAgICAgICAgICAgIDpzdHlsZT1cImBsZWZ0OiAkeyhmcm9udGVycy5sZW5ndGggLSBpZHggLSAxKSAqIDI1ICsgNX1weDsgcG9zaXRpb246IGFic29sdXRlOyBib3gtc2hhZG93OiAwIDAgMnB4IDJweCBibGFja2BcIlxuICAgICAgICAgICAgICAgIDp1cmw9XCJmcm9udGVyLmF2YXRhclVybFwiXG4gICAgICAgICAgICAgICAgOm5hbWU9XCJmcm9udGVyLmdldE5hbWUoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGVNZW1iZXIoZnJvbnRlci5pZClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXIteC1tZCBxLWNvbC1ndXR0ZXIteS1ub25lIHEtbWItbWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgY29sLTEyXCI+XG4gICAgICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICAgICAgdi1pZj1cIiFsb2FkaW5nXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInByaW1hcnlGcm9udGVySWRcIlxuICAgICAgICAgICAgICBib3R0b20tc2xvdHNcbiAgICAgICAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgICAgICAgICA6b3B0aW9ucz1cIm9wdGlvbnNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlByaW1hcnkgRnJvbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwicHJpbWFyeUZyb250ZXJcIiAjYXBwZW5kPlxuICAgICAgICAgICAgICAgIDxpbml0aWFsLWZhbGxiYWNrLWF2YXRhclxuICAgICAgICAgICAgICAgICAgOnVybD1cInByaW1hcnlGcm9udGVyLmF2YXRhclVybFwiXG4gICAgICAgICAgICAgICAgICA6bmFtZT1cInByaW1hcnlGcm9udGVyLmdldE5hbWUoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9xLXNlbGVjdD5cbiAgICAgICAgICAgIDxxLXNrZWxldG9uIHYtZWxzZSBjbGFzcz1cIlFJbnB1dFwiIGhlaWdodD1cIjQ4cHhcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBjb2wtMTJcIj5cbiAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgIHYtaWY9XCIhbG9hZGluZ1wiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hUZXh0XCJcbiAgICAgICAgICAgICAgYm90dG9tLXNsb3RzXG4gICAgICAgICAgICAgIGxhYmVsPVwiU2VhcmNoXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cS1za2VsZXRvbiB2LWVsc2UgY2xhc3M9XCJRSW5wdXRcIiBoZWlnaHQ9XCI0OHB4XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgY29sLTEyXCI+XG4gICAgICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInN3aXRjaGVyLmxhc3RTb3J0TWV0aG9kXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTb3J0IEJ5XCJcbiAgICAgICAgICAgICAgbWFwLW9wdGlvbnNcbiAgICAgICAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICAgICAgICA6b3B0aW9ucz1cIk9iamVjdC52YWx1ZXMoc29ydE1ldGhvZHMpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgY29sLTEyXCI+XG4gICAgICAgICAgICA8Z3JvdXAtc2VsZWN0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJzd2l0Y2hlci5leGNsdWRlR3JvdXBzXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFeGNsdWRlIEdyb3Vwc1wiXG4gICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHYtaWY9XCIhbG9hZGluZ1wiIGNsYXNzPVwicm93IHEtY29sLWd1dHRlci1tZFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHYtZm9yPVwibWVtYmVyIG9mIGZpbHRlcmVkTWVtYmVyc1wiXG4gICAgICAgICAgICA6a2V5PVwibWVtYmVyLmlkXCJcbiAgICAgICAgICAgIGNsYXNzPVwiY29sLXhsLTIgY29sLW1kLTMgY29sLTRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxsYWJlbGVkLXRpbGVcbiAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAzcHggdmFyKC0tcS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgOmltZz1cIm1lbWJlci5hdmF0YXJVcmxcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCJtZW1iZXIuZ2V0TmFtZShkZXRlY3RQcm9ub3VucylcIlxuICAgICAgICAgICAgICA6Y2FwdGlvbj1cIm1lbWJlci5nZXRQcm9ub3VucyhkZXRlY3RQcm9ub3VucylcIlxuICAgICAgICAgICAgICA6ZmxhdD1cIiFzZWxlY3RlZC5pbmNsdWRlcyhtZW1iZXIuaWQpXCJcbiAgICAgICAgICAgICAgc2l6ZT1cIjEwMCVcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGVNZW1iZXIobWVtYmVyLmlkKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kIHEtbXQtbWRcIj5cbiAgICAgICAgICA8ZGl2IHYtZm9yPVwiaWR4IG9mIDZcIiA6a2V5PVwiaWR4XCIgY2xhc3M9XCJjb2wteGwtMiBjb2wtbWQtMyBjb2wtNFwiPlxuICAgICAgICAgICAgPHEtc2tlbGV0b24gdHlwZT1cInJlY3RcIiBzdHlsZT1cImFzcGVjdC1yYXRpbzogMS8xXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxxLXBhZ2Utc3RpY2t5IHBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCIgOm9mZnNldD1cIlsxOCwgMThdXCI+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICBmYWJcbiAgICAgICAgICAgIGNsYXNzPVwic2VsZi1lbmRcIlxuICAgICAgICAgICAgaWNvbj1cInN3YXBfaG9yaXpcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cImxvYWRpbmcgfHwgc3dpdGNoaW5nXCJcbiAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZyB8fCBzd2l0Y2hpbmdcIlxuICAgICAgICAgICAgQGNsaWNrPVwiZG9Td2l0Y2hcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1wYWdlLXN0aWNreT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBjb21wdXRlZCwgb25Nb3VudGVkLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHN0b3JlVG9SZWZzIH0gZnJvbSAncGluaWEnO1xuaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSAncGthcGkuanMnO1xuaW1wb3J0IHsgcGsgfSBmcm9tICdzcmMvYm9vdC9wa2FwaSc7XG5cbmltcG9ydCB7IGNhc2VJbnNlbnNpdGl2ZUluY2x1ZGVzLCBnZXROYW1lU29ydCB9IGZyb20gJ3NyYy91dGlsJztcbmltcG9ydCB7IHVzZVNldHRpbmdzU3RvcmUgfSBmcm9tICdzcmMvc3RvcmVzL3NldHRpbmdzLXN0b3JlJztcbmltcG9ydCB7IHVzZVNlcnZpY2VzIH0gZnJvbSAnc3JjL2xpYi9TZXJ2aWNlcyc7XG5pbXBvcnQgeyBNZW1iZXIgfSBmcm9tICdzcmMvbW9kZWxzL01lbWJlcic7XG5cbmltcG9ydCBQYWdlVGl0bGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvUGFnZVRpdGxlLnZ1ZSc7XG5pbXBvcnQgTGFiZWxlZFRpbGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvU3RhdHVzUGFnZS9UaWxlL0xhYmVsZWRUaWxlLnZ1ZSc7XG5pbXBvcnQgSW5pdGlhbEZhbGxiYWNrQXZhdGFyIGZyb20gJ3NyYy9jb21wb25lbnRzL0luaXRpYWxGYWxsYmFja0F2YXRhci52dWUnO1xuaW1wb3J0IEdyb3VwU2VsZWN0IGZyb20gJ3NyYy9jb21wb25lbnRzL0dyb3VwU2VsZWN0LnZ1ZSc7XG5pbXBvcnQgeyBTeXN0ZW0gfSBmcm9tICdzcmMvbW9kZWxzL1N5c3RlbSc7XG5cbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5jb25zdCBzZXR0aW5nc1N0b3JlID0gdXNlU2V0dGluZ3NTdG9yZSgpO1xuY29uc3QgeyBwbHVyYWxLaXQsIG1lbWJlckNhY2hlLCBncm91cENhY2hlIH0gPSB1c2VTZXJ2aWNlcygpO1xuY29uc3QgeyBkZXRlY3RQcm9ub3VucywgdG9rZW4sIHN3aXRjaGVyIH0gPSBzdG9yZVRvUmVmcyhzZXR0aW5nc1N0b3JlKTtcblxuY29uc3Qgc29ydE1ldGhvZHM6IFJlY29yZDxcbiAgc3RyaW5nLFxuICB7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGZ1bmM6IChhOiBNZW1iZXIsIGI6IE1lbWJlcikgPT4gbnVtYmVyO1xuICB9XG4+ID0ge1xuICAnYnktbmFtZSc6IHtcbiAgICB2YWx1ZTogJ2J5LW5hbWUnLFxuICAgIGxhYmVsOiAnTmFtZScsXG4gICAgZnVuYzogKGEsIGIpID0+IGdldE5hbWVTb3J0KGRldGVjdFByb25vdW5zLnZhbHVlKShhLCBiKSxcbiAgfSxcbiAgJ2J5LWxhc3QtbWVzc2FnZSc6IHtcbiAgICB2YWx1ZTogJ2J5LWxhc3QtbWVzc2FnZScsXG4gICAgbGFiZWw6ICdMYXN0IE1lc3NhZ2UnLFxuICAgIGZ1bmM6IChhLCBiKSA9PlxuICAgICAgKGIubGFzdE1lc3NhZ2VBdD8udmFsdWVPZigpIHx8IDApIC0gKGEubGFzdE1lc3NhZ2VBdD8udmFsdWVPZigpIHx8IDApLFxuICB9LFxufTtcblxuY29uc3QgbG9hZGluZyA9IHJlZih0cnVlKTtcbmNvbnN0IHN3aXRjaGluZyA9IHJlZihmYWxzZSk7XG5jb25zdCBzZWFyY2hUZXh0ID0gcmVmKCcnKTtcbmNvbnN0IHByaW1hcnlGcm9udGVySWQgPSByZWYoJycpO1xuY29uc3Qgc2VsZWN0ZWQgPSByZWY8QXJyYXk8c3RyaW5nPj4oW10pO1xuY29uc3QgbWVtYmVycyA9IHJlZjxBcnJheTxNZW1iZXI+PihbXSk7XG5jb25zdCBzb3J0TWV0aG9kID0gY29tcHV0ZWQoXG4gICgpID0+IHNvcnRNZXRob2RzW3N3aXRjaGVyLnZhbHVlLmxhc3RTb3J0TWV0aG9kXS5mdW5jLFxuKTtcblxuLy8gQ29tcHV0ZWRcbmNvbnN0IHByaW1hcnlGcm9udGVyID0gY29tcHV0ZWQoKCkgPT5cbiAgbWVtYmVyQ2FjaGUuZ2V0Q2FjaGVkKHByaW1hcnlGcm9udGVySWQudmFsdWUpLFxuKTtcblxuLy8gVG8gZGlzcGxheSBsaXN0IG9mIChzZWxlY3RlZCkgZnJvbnRlcnNcbi8vIHJldmVyc2VkIHNvIHRoZSBtYWluIGZyb250ZXIgc2hvd3Mgb24gdG9wXG5jb25zdCBmcm9udGVycyA9IGNvbXB1dGVkKCgpID0+XG4gIG1lbWJlckNhY2hlLmdldE11bHRpQ2FjaGVkKHNlbGVjdGVkLnZhbHVlLnRvUmV2ZXJzZWQoKSksXG4pO1xuXG4vLyBPcHRpb25zIGZvciB0aGUgbWFpbiBmcm9udGVyIGRyb3Bkb3duXG5jb25zdCBvcHRpb25zID0gY29tcHV0ZWQoKCkgPT5cbiAgbWVtYmVyQ2FjaGUuZ2V0TXVsdGlDYWNoZWQoc2VsZWN0ZWQudmFsdWUpLm1hcCgobSkgPT4gKHtcbiAgICB2YWx1ZTogbS5pZCxcbiAgICBsYWJlbDogbS5nZXROYW1lKGRldGVjdFByb25vdW5zLnZhbHVlKSxcbiAgfSkpLFxuKTtcblxuY29uc3QgZmlsdGVyTWVtYmVySWRzID0gY29tcHV0ZWQoKCkgPT5cbiAgZ3JvdXBDYWNoZVxuICAgIC5nZXRNdWx0aUNhY2hlZChzd2l0Y2hlci52YWx1ZS5leGNsdWRlR3JvdXBzKVxuICAgIC5tYXAoKGcpID0+IGcubWVtYmVycylcbiAgICAuZmxhdCgpLFxuKTtcblxuLy8gU2VhcmNoIHJlc3VsdHNcbmNvbnN0IGZpbHRlcmVkTWVtYmVycyA9IGNvbXB1dGVkKCgpID0+XG4gIG1lbWJlcnMudmFsdWVcbiAgICAuZmlsdGVyKFxuICAgICAgKG0pID0+XG4gICAgICAgIGNhc2VJbnNlbnNpdGl2ZUluY2x1ZGVzKG0ubmFtZSwgc2VhcmNoVGV4dC52YWx1ZSkgfHxcbiAgICAgICAgY2FzZUluc2Vuc2l0aXZlSW5jbHVkZXMobS5kaXNwbGF5TmFtZSB8fCAnJywgc2VhcmNoVGV4dC52YWx1ZSksXG4gICAgKVxuICAgIC5maWx0ZXIoKG0pID0+ICFmaWx0ZXJNZW1iZXJJZHMudmFsdWUuaW5jbHVkZXMobS5pZCkpXG4gICAgLnRvU29ydGVkKHNvcnRNZXRob2QudmFsdWUpLFxuKTtcblxuLy8gQ2FsbGJhY2tzXG5mdW5jdGlvbiB0b2dnbGVNZW1iZXIoaWQ6IHN0cmluZykge1xuICBzZWxlY3RlZC52YWx1ZS5pbmNsdWRlcyhpZClcbiAgICA/IHNlbGVjdGVkLnZhbHVlLnNwbGljZShzZWxlY3RlZC52YWx1ZS5pbmRleE9mKGlkKSwgMSlcbiAgICA6IHNlbGVjdGVkLnZhbHVlLnB1c2goaWQpO1xuXG4gIC8vIElmIHRoZXJlJ3Mgbm8gcHJpbWFyeSBmcm9udGVyIHNlbGVjdGVkIHNldCBpdCB0byB0aGlzIG9uZVxuICBpZiAocHJpbWFyeUZyb250ZXJJZC52YWx1ZSA9PSAnJykge1xuICAgIHByaW1hcnlGcm9udGVySWQudmFsdWUgPSBpZDtcbiAgfVxuXG4gIC8vIElmIHByaW1hcnkgZnJvbnRlciB3YXMgcmVtb3ZlZCBmcm9tIHRoZSBsaXN0IHNlbGVjdCB0aGUgbmV4dCBtZW1iZXIgYXMgcHJpbWFyeVxuICBpZiAoIXNlbGVjdGVkLnZhbHVlLmluY2x1ZGVzKHByaW1hcnlGcm9udGVySWQudmFsdWUpKSB7XG4gICAgcHJpbWFyeUZyb250ZXJJZC52YWx1ZSA9IHNlbGVjdGVkLnZhbHVlWzBdO1xuICB9XG59XG5cbi8vIFdhdGNoZXJzXG53YXRjaChwcmltYXJ5RnJvbnRlcklkLCAodmFsKSA9PiB7XG4gIC8vIFByaW1hcnkgZnJvbnRlciBpcyBhbHJlYWR5IGZpcnN0IG9uIHRoZSBsaXN0LCBkbyBub3RoaW5nXG4gIGlmIChzZWxlY3RlZC52YWx1ZVswXSA9PSB2YWwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzZWxlY3RlZC52YWx1ZS5zcGxpY2Uoc2VsZWN0ZWQudmFsdWUuaW5kZXhPZih2YWwpLCAxKTtcbiAgc2VsZWN0ZWQudmFsdWUudW5zaGlmdCh2YWwpO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGRvU3dpdGNoKCkge1xuICBzd2l0Y2hpbmcudmFsdWUgPSB0cnVlO1xuICBpZiAoIXRva2VuLnZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBway5jcmVhdGVTd2l0Y2goe1xuICAgICAgbWVtYmVyczogc2VsZWN0ZWQudmFsdWUsXG4gICAgICB0b2tlbjogdG9rZW4udmFsdWUsXG4gICAgfSk7XG4gICAgc2hvd1N1Y2Nlc3NNZXNzYWdlKHNlbGVjdGVkLnZhbHVlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmICghKGUgaW5zdGFuY2VvZiBBUElFcnJvcikpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgJHEubm90aWZ5KHtcbiAgICAgIHR5cGU6ICduZWdhdGl2ZScsXG4gICAgICBtZXNzYWdlOiBgJHtlLnN0YXR1c306ICR7ZS5tZXNzYWdlfSAoJHtlLmNvZGV9KWAsXG4gICAgfSk7XG4gIH1cblxuICBzd2l0Y2hpbmcudmFsdWUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2hvd1N1Y2Nlc3NNZXNzYWdlKG5ld0Zyb250ZXJzOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XG4gIGlmIChuZXdGcm9udGVycy5sZW5ndGggPT0gMCkge1xuICAgICRxLm5vdGlmeSh7XG4gICAgICB0eXBlOiAncG9zaXRpdmUnLFxuICAgICAgbWVzc2FnZTogJ1N3aXRjaC1vdXQgcmVnaXN0ZXJlZC4nLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKG5ld0Zyb250ZXJzLmxlbmd0aCA9PSAxKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBtZW1iZXJDYWNoZS5nZXRDYWNoZWQobmV3RnJvbnRlcnNbMF0pPy5nZXROYW1lKGRldGVjdFByb25vdW5zLnZhbHVlKSA/P1xuICAgICAgJ1Vua25vd24nO1xuXG4gICAgJHEubm90aWZ5KHtcbiAgICAgIHR5cGU6ICdwb3NpdGl2ZScsXG4gICAgICBtZXNzYWdlOiBgU3dpdGNoIHJlZ2lzdGVyZWQuIEN1cnJlbnQgZnJvbnRlciBpcyBub3cgJHtuYW1lfS5gLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5hbWVzID0gbWVtYmVyQ2FjaGVcbiAgICAgIC5nZXRNdWx0aUNhY2hlZChuZXdGcm9udGVycylcbiAgICAgIC5tYXAoKG0pID0+IG0uZ2V0TmFtZShkZXRlY3RQcm9ub3Vucy52YWx1ZSkpO1xuXG4gICAgJHEubm90aWZ5KHtcbiAgICAgIHR5cGU6ICdwb3NpdGl2ZScsXG4gICAgICBtZXNzYWdlOiBgU3dpdGNoIHJlZ2lzdGVyZWQuIEN1cnJlbnQgZnJvbnRlcnMgYXJlIG5vdyAke25hbWVzLmpvaW4oJywgJyl9LmAsXG4gICAgfSk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0U3lzdGVtKCk6IFByb21pc2U8U3lzdGVtIHwgbnVsbD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHN5c3RlbSA9IGF3YWl0IHBsdXJhbEtpdC5nZXRPd25TeXN0ZW0oKTtcbiAgICBpZiAoIXN5c3RlbSkge1xuICAgICAgJHEubm90aWZ5KHtcbiAgICAgICAgdHlwZTogJ25lZ2F0aXZlJyxcbiAgICAgICAgbWVzc2FnZTogXCJDb3VsZG4ndCByZXRyaWV2ZSBvd24gc3lzdGVtIGZvciBzb21lIHJlYXNvblwiLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBzeXN0ZW07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEFQSUVycm9yKSB7XG4gICAgICBpZiAoZS5zdGF0dXMgPT0gJzQwMScpIHtcbiAgICAgICAgJHEubm90aWZ5KHtcbiAgICAgICAgICB0eXBlOiAnbmVnYXRpdmUnLFxuICAgICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIFRva2VuJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IGU7XG4gIH1cbn1cblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgbG9hZGluZy52YWx1ZSA9IHRydWU7XG5cbiAgLy8gTG9hZCBtZW1iZXJzL2Zyb250ZXJzXG4gIGF3YWl0IGdldFN5c3RlbSgpOyAvLyBNYWtlIHN1cmUgd2UncmUgbG9nZ2VkIGluIGFuZCBoYW5kbGUgaW52YWxpZCB0b2tlbnNcbiAgbWVtYmVycy52YWx1ZSA9IGF3YWl0IHBsdXJhbEtpdC5nZXRPd25NZW1iZXJzKCk7XG4gIGNvbnN0IGxhc3RTd2l0Y2ggPSBhd2FpdCBwbHVyYWxLaXQuZ2V0T3duRnJvbnRlcnMoKTtcblxuICAvLyBJZiB0aGVyZSdzIG5vIG1lbWJlcnMgd2UgY2FuJ3QgcG9wdWxhdGUgd2l0aCBwcmV2aW91cyBkYXRhXG4gIGlmIChsYXN0U3dpdGNoLm1lbWJlcnMubGVuZ3RoID4gMCkge1xuICAgIHByaW1hcnlGcm9udGVySWQudmFsdWUgPSBsYXN0U3dpdGNoLm1lbWJlcnNbMF0uaWQ7XG4gICAgc2VsZWN0ZWQudmFsdWUgPSBsYXN0U3dpdGNoLm1lbWJlcnMubWFwKChtKSA9PiBtLmlkKTtcbiAgfVxuXG4gIGxvYWRpbmcudmFsdWUgPSBmYWxzZTtcbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3VzZU1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBT0EsTUFBQSxVQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLEdBQUc7QUFBQSxJQUVILGVBQWU7QUFBQSxJQUNmLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxFQUNWO0FBQUEsRUFFRCxNQUFPLE9BQU8sRUFBRSxTQUFTO0FBQ3ZCLFVBQU0sRUFBRSxPQUFPLEVBQUUsR0FBSSxFQUFBLElBQUssbUJBQW9CO0FBQzlDLFVBQU0sU0FBUyxRQUFRLE9BQU8sRUFBRTtBQUVoQyxVQUFNLFVBQVU7QUFBQSxNQUFTLE1BQ3ZCLCtCQUNHLE1BQU0sVUFBVSxPQUFPLHFCQUFxQixPQUM1QyxPQUFPLFVBQVUsT0FBTywyQkFBMkIsT0FDbkQsTUFBTSxZQUFZLE9BQU8scUJBQXFCO0FBQUEsSUFDbEQ7QUFFRCxVQUFNLGNBQWM7QUFBQSxNQUFTLE1BQzNCLHNEQUNXLE1BQU0sa0JBQWtCLE9BQU8sU0FBUztJQUNwRDtBQUVELFdBQU8sTUFBTTtBQUNYLFlBQU0sUUFBUTtBQUFBLFFBQ1osRUFBRSxPQUFPO0FBQUEsVUFDUCxPQUFPO0FBQUEsUUFDakIsR0FBVyxNQUFNLE1BQU0sTUFBTSxDQUFDO0FBQUEsUUFFdEIsRUFBRSxPQUFPO0FBQUEsVUFDUCxPQUFPO0FBQUEsUUFDakIsR0FBVyxNQUFNLE1BQU0sT0FBTyxDQUFDO0FBQUEsTUFDeEI7QUFFRCxZQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU07QUFDbEMsa0JBQVksVUFBVSxNQUFNO0FBQUEsUUFDMUIsRUFBRSxPQUFPLEVBQUUsT0FBTyxZQUFZLE1BQU8sR0FBRSxPQUFPO0FBQUEsTUFDL0M7QUFFRCxhQUFPLEVBQUUsT0FBTztBQUFBLFFBQ2QsT0FBTyxRQUFRLFNBQ1YsTUFBTSxrQkFBa0IsU0FBUyxZQUFZLFNBQVMsMkJBQTJCO0FBQUEsUUFDdEYsTUFBTTtBQUFBLE1BQ1AsR0FBRSxLQUFLO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFDSCxDQUFDOzs7Ozs7Ozs7QUN2Q0ssVUFBQSxFQUFFLGNBQWM7QUFFaEIsVUFBQSxRQUFRQSxTQUFtQyxTQUFBLFlBQUM7QUFFNUMsVUFBQSxVQUFVLElBQUksSUFBSTtBQUNsQixVQUFBLFNBQVMsSUFBa0IsQ0FBQSxDQUFFO0FBQzdCLFVBQUEsd0JBQXdCLElBQTZDLENBQUEsQ0FBRTtBQUM3RSxVQUFNLGdCQUFnQjtBQUFBLE1BQVMsTUFDN0IsT0FBTyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsR0FBRyxPQUFPLEVBQUUsR0FBSyxFQUFBO0FBQUEsSUFBQTtBQUd0RCxhQUFBLFdBQVcsS0FBYSxRQUFrQztBQUNqRSxVQUFJLFFBQVEsSUFBSTtBQUNkLGVBQU8sTUFBTTtBQUNYLGdDQUFzQixRQUFRLGNBQWM7QUFBQSxRQUFBLENBQzdDO0FBQ0Q7QUFBQSxNQUNGO0FBRUEsYUFBTyxNQUFNO0FBQ1csOEJBQUEsUUFBUSxjQUFjLE1BQU07QUFBQSxVQUNoRCxDQUFDLEVBQUUsT0FBTyxZQUNSLE1BQU0sWUFBYyxFQUFBLFNBQVMsSUFBSSxZQUFhLENBQUEsS0FDOUMsTUFBTSxZQUFBLEVBQWMsU0FBUyxJQUFJLGFBQWE7QUFBQSxRQUFBO0FBQUEsTUFDbEQsQ0FDRDtBQUFBLElBQ0g7QUFFQSxjQUFVLFlBQVk7QUFDYixhQUFBLFFBQVEsTUFBTSxVQUFVLGFBQWE7QUFDNUMsNEJBQXNCLFFBQVEsY0FBYztBQUN0QyxZQUFBLFFBQVEsTUFBTSxRQUFRLE1BQU0sS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLEtBQUssSUFBSSxNQUFNO0FBQ3BFLGNBQVEsUUFBUTtBQUFBLElBQUEsQ0FDakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDb0dELFVBQU0sS0FBSztBQUNYLFVBQU0sZ0JBQWdCO0FBQ3RCLFVBQU0sRUFBRSxXQUFXLGFBQWEsZUFBZSxZQUFZO0FBQzNELFVBQU0sRUFBRSxnQkFBZ0IsT0FBTyxTQUFTLElBQUksWUFBWSxhQUFhO0FBRXJFLFVBQU0sY0FPRjtBQUFBLE1BQ0YsV0FBVztBQUFBLFFBQ1QsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsTUFBTSxDQUFDLEdBQUcsTUFBTSxZQUFZLGVBQWUsS0FBSyxFQUFFLEdBQUcsQ0FBQztBQUFBLE1BQ3hEO0FBQUEsTUFDQSxtQkFBbUI7QUFBQSxRQUNqQixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxNQUFNLENBQUMsR0FBRyxNQUFBOztBQUNQLDJCQUFFLGtCQUFGLG1CQUFpQixjQUFhLFFBQU0sT0FBRSxrQkFBRixtQkFBaUIsY0FBYTtBQUFBO0FBQUEsTUFDdkU7QUFBQSxJQUFBO0FBR0ksVUFBQSxVQUFVLElBQUksSUFBSTtBQUNsQixVQUFBLFlBQVksSUFBSSxLQUFLO0FBQ3JCLFVBQUEsYUFBYSxJQUFJLEVBQUU7QUFDbkIsVUFBQSxtQkFBbUIsSUFBSSxFQUFFO0FBQ3pCLFVBQUEsV0FBVyxJQUFtQixDQUFBLENBQUU7QUFDaEMsVUFBQSxVQUFVLElBQW1CLENBQUEsQ0FBRTtBQUNyQyxVQUFNLGFBQWE7QUFBQSxNQUNqQixNQUFNLFlBQVksU0FBUyxNQUFNLGNBQWMsRUFBRTtBQUFBLElBQUE7QUFJbkQsVUFBTSxpQkFBaUI7QUFBQSxNQUFTLE1BQzlCLFlBQVksVUFBVSxpQkFBaUIsS0FBSztBQUFBLElBQUE7QUFLOUMsVUFBTSxXQUFXO0FBQUEsTUFBUyxNQUN4QixZQUFZLGVBQWUsU0FBUyxNQUFNLFlBQVk7QUFBQSxJQUFBO0FBSXhELFVBQU0sVUFBVTtBQUFBLE1BQVMsTUFDdkIsWUFBWSxlQUFlLFNBQVMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPO0FBQUEsUUFDckQsT0FBTyxFQUFFO0FBQUEsUUFDVCxPQUFPLEVBQUUsUUFBUSxlQUFlLEtBQUs7QUFBQSxNQUFBLEVBQ3JDO0FBQUEsSUFBQTtBQUdKLFVBQU0sa0JBQWtCO0FBQUEsTUFBUyxNQUMvQixXQUNHLGVBQWUsU0FBUyxNQUFNLGFBQWEsRUFDM0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQ3BCLEtBQUs7QUFBQSxJQUFBO0FBSVYsVUFBTSxrQkFBa0I7QUFBQSxNQUFTLE1BQy9CLFFBQVEsTUFDTDtBQUFBLFFBQ0MsQ0FBQyxNQUNDLHdCQUF3QixFQUFFLE1BQU0sV0FBVyxLQUFLLEtBQ2hELHdCQUF3QixFQUFFLGVBQWUsSUFBSSxXQUFXLEtBQUs7QUFBQSxNQUVoRSxFQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLE1BQU0sU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUNuRCxTQUFTLFdBQVcsS0FBSztBQUFBLElBQUE7QUFJOUIsYUFBUyxhQUFhLElBQVk7QUFDaEMsZUFBUyxNQUFNLFNBQVMsRUFBRSxJQUN0QixTQUFTLE1BQU0sT0FBTyxTQUFTLE1BQU0sUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUNuRCxTQUFTLE1BQU0sS0FBSyxFQUFFO0FBR3RCLFVBQUEsaUJBQWlCLFNBQVMsSUFBSTtBQUNoQyx5QkFBaUIsUUFBUTtBQUFBLE1BQzNCO0FBR0EsVUFBSSxDQUFDLFNBQVMsTUFBTSxTQUFTLGlCQUFpQixLQUFLLEdBQUc7QUFDbkMseUJBQUEsUUFBUSxTQUFTLE1BQU0sQ0FBQztBQUFBLE1BQzNDO0FBQUEsSUFDRjtBQUdNLFVBQUEsa0JBQWtCLENBQUMsUUFBUTtBQUUvQixVQUFJLFNBQVMsTUFBTSxDQUFDLEtBQUssS0FBSztBQUM1QjtBQUFBLE1BQ0Y7QUFFQSxlQUFTLE1BQU0sT0FBTyxTQUFTLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUMzQyxlQUFBLE1BQU0sUUFBUSxHQUFHO0FBQUEsSUFBQSxDQUMzQjtBQUVELG1CQUFlLFdBQVc7QUFDeEIsZ0JBQVUsUUFBUTtBQUNkLFVBQUEsQ0FBQyxNQUFNLE9BQU87QUFDaEI7QUFBQSxNQUNGO0FBRUksVUFBQTtBQUNGLGNBQU0sR0FBRyxhQUFhO0FBQUEsVUFDcEIsU0FBUyxTQUFTO0FBQUEsVUFDbEIsT0FBTyxNQUFNO0FBQUEsUUFBQSxDQUNkO0FBQ0QsMkJBQW1CLFNBQVMsS0FBSztBQUFBLGVBQzFCLEdBQUc7QUFDTixZQUFBLEVBQUUsYUFBYSxXQUFXO0FBQ3RCLGdCQUFBO0FBQUEsUUFDUjtBQUVBLFdBQUcsT0FBTztBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sU0FBUyxHQUFHLEVBQUUsTUFBTSxLQUFLLEVBQUUsT0FBTyxLQUFLLEVBQUUsSUFBSTtBQUFBLFFBQUEsQ0FDOUM7QUFBQSxNQUNIO0FBRUEsZ0JBQVUsUUFBUTtBQUFBLElBQ3BCO0FBRUEsYUFBUyxtQkFBbUIsYUFBa0M7O0FBQ3hELFVBQUEsWUFBWSxVQUFVLEdBQUc7QUFDM0IsV0FBRyxPQUFPO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixTQUFTO0FBQUEsUUFBQSxDQUNWO0FBQUEsTUFBQSxXQUNRLFlBQVksVUFBVSxHQUFHO0FBQzVCLGNBQUEsUUFDSix1QkFBWSxVQUFVLFlBQVksQ0FBQyxDQUFDLE1BQXBDLG1CQUF1QyxRQUFRLGVBQWUsV0FBOUQsWUFDQTtBQUVGLFdBQUcsT0FBTztBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sU0FBUyw2Q0FBNkMsSUFBSTtBQUFBLFFBQUEsQ0FDM0Q7QUFBQSxNQUFBLE9BQ0k7QUFDTCxjQUFNLFFBQVEsWUFDWCxlQUFlLFdBQVcsRUFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLGVBQWUsS0FBSyxDQUFDO0FBRTdDLFdBQUcsT0FBTztBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sU0FBUywrQ0FBK0MsTUFBTSxLQUFLLElBQUksQ0FBQztBQUFBLFFBQUEsQ0FDekU7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUVBLG1CQUFlLFlBQW9DO0FBQzdDLFVBQUE7QUFDSSxjQUFBLFNBQVMsTUFBTSxVQUFVO0FBQy9CLFlBQUksQ0FBQyxRQUFRO0FBQ1gsYUFBRyxPQUFPO0FBQUEsWUFDUixNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFBQSxDQUNWO0FBQUEsUUFDSDtBQUNPLGVBQUE7QUFBQSxlQUNBLEdBQUc7QUFDVixZQUFJLGFBQWEsVUFBVTtBQUNyQixjQUFBLEVBQUUsVUFBVSxPQUFPO0FBQ3JCLGVBQUcsT0FBTztBQUFBLGNBQ1IsTUFBTTtBQUFBLGNBQ04sU0FBUztBQUFBLFlBQUEsQ0FDVjtBQUNNLG1CQUFBO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFFTSxjQUFBO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFFQSxjQUFVLFlBQVk7QUFDcEIsY0FBUSxRQUFRO0FBR2hCLFlBQU0sVUFBVTtBQUNSLGNBQUEsUUFBUSxNQUFNLFVBQVUsY0FBYztBQUN4QyxZQUFBLGFBQWEsTUFBTSxVQUFVO0FBRy9CLFVBQUEsV0FBVyxRQUFRLFNBQVMsR0FBRztBQUNqQyx5QkFBaUIsUUFBUSxXQUFXLFFBQVEsQ0FBQyxFQUFFO0FBQy9DLGlCQUFTLFFBQVEsV0FBVyxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtBQUFBLE1BQ3JEO0FBRUEsY0FBUSxRQUFRO0FBQUEsSUFBQSxDQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
