import { a as QItem, b as QItemSection, Q as QItemLabel } from "./QItem-DBhEHxap.js";
import { J as defineComponent, K as useSettingsStore, L as storeToRefs, r as ref, _ as _export_sfc, ag as createElementBlock, T as openBlock, Y as createBaseVNode, W as createVNode, U as withCtx, ak as Fragment, an as renderList, S as createBlock, a0 as createCommentVNode, $ as createTextVNode, a2 as toDisplayString, a1 as QIcon, ao as QSpinner, ap as QAvatar } from "./index-Czhz81pV.js";
import { Q as QList } from "./QList-DTyO3bRG.js";
import { R as RelativeTimeDisplay } from "./RelativeTimeDisplay-DvRrdQnD.js";
import { I as InitialFallbackAvatar } from "./InitialFallbackAvatar-BwzLwT9D.js";
import { D as DescriptionDialog } from "./DescriptionDialog-DIPOa9EK.js";
import "./index-BPlwBMVZ.js";
import "./QMarkupTable-Co_abH1I.js";
import "./MemberCard-BSciiHjk.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListLayout",
  props: {
    ids: { type: Array, required: true },
    fronters: { type: Object, required: true },
    systems: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const settingsStore = useSettingsStore();
    const { detectPronouns } = storeToRefs(settingsStore);
    const settings = settingsStore.status.list;
    const dialog = ref();
    const __returned__ = { settingsStore, detectPronouns, settings, dialog, RelativeTimeDisplay, InitialFallbackAvatar, DescriptionDialog };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  class: "row justify-center",
  style: { "min-height": "inherit" }
};
const _hoisted_2 = { class: "col-auto q-mt-lg" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(QList, null, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($props.ids, (id) => {
                  return openBlock(), createElementBlock(
                    Fragment,
                    { key: id },
                    [
                      $props.systems[id] ? (openBlock(), createBlock(QItem, {
                        key: 0,
                        clickable: "",
                        onClick: ($event) => $setup.dialog.show({ system: $props.systems[id] })
                      }, {
                        default: withCtx(() => [
                          createVNode(
                            QItemSection,
                            { avatar: "" },
                            {
                              default: withCtx(() => [
                                createVNode($setup["InitialFallbackAvatar"], {
                                  name: $props.systems[id].getName($setup.detectPronouns),
                                  url: $props.systems[id].avatarUrl,
                                  size: $setup.settings.iconSize + "px",
                                  square: $setup.settings.squareIcons
                                }, null, 8, ["name", "url", "size", "square"])
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          ),
                          createVNode(
                            QItemSection,
                            null,
                            {
                              default: withCtx(() => [
                                createVNode(
                                  QItemLabel,
                                  null,
                                  {
                                    default: withCtx(() => [
                                      createTextVNode(
                                        toDisplayString($props.systems[id].getName($setup.detectPronouns)),
                                        1
                                        /* TEXT */
                                      )
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                ),
                                $props.systems[id].getPronouns($setup.detectPronouns) ? (openBlock(), createBlock(
                                  QItemLabel,
                                  {
                                    key: 0,
                                    caption: ""
                                  },
                                  {
                                    default: withCtx(() => [
                                      createTextVNode(
                                        toDisplayString($props.systems[id].getPronouns($setup.detectPronouns)),
                                        1
                                        /* TEXT */
                                      )
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                )) : createCommentVNode("v-if", true),
                                $props.fronters[id] && $setup.settings.showUpdateTime ? (openBlock(), createBlock(
                                  QItemLabel,
                                  {
                                    key: 1,
                                    caption: ""
                                  },
                                  {
                                    default: withCtx(() => [
                                      createVNode(QIcon, {
                                        class: "q-mr-xs",
                                        name: "update",
                                        "aria-hidden": "true"
                                      }),
                                      _cache[0] || (_cache[0] = createBaseVNode(
                                        "span",
                                        { class: "sr-only" },
                                        "Last updated",
                                        -1
                                        /* CACHED */
                                      )),
                                      createVNode($setup["RelativeTimeDisplay"], {
                                        time: $props.fronters[id].lastUpdated
                                      }, null, 8, ["time"])
                                    ]),
                                    _: 2,
                                    __: [0]
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                )) : createCommentVNode("v-if", true),
                                $props.fronters[id] && $setup.settings.showLastSwitch ? (openBlock(), createBlock(
                                  QItemLabel,
                                  {
                                    key: 2,
                                    caption: ""
                                  },
                                  {
                                    default: withCtx(() => [
                                      createVNode(QIcon, {
                                        class: "q-mr-xs",
                                        name: "swap_horiz",
                                        "aria-hidden": "true"
                                      }),
                                      _cache[1] || (_cache[1] = createBaseVNode(
                                        "span",
                                        { class: "sr-only" },
                                        "Last switch",
                                        -1
                                        /* CACHED */
                                      )),
                                      createVNode($setup["RelativeTimeDisplay"], {
                                        time: $props.fronters[id].lastSwitch
                                      }, null, 8, ["time"])
                                    ]),
                                    _: 2,
                                    __: [1]
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                )) : createCommentVNode("v-if", true)
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["onClick"])) : (openBlock(), createBlock(QItem, { key: 1 }, {
                        default: withCtx(() => [
                          createVNode(QItemSection, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(QSpinner, {
                                size: $setup.settings.iconSize + "px"
                              }, null, 8, ["size"])
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [..._cache[2] || (_cache[2] = [
                              createTextVNode(
                                "Loading...",
                                -1
                                /* CACHED */
                              )
                            ])]),
                            _: 1,
                            __: [2]
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      })),
                      $props.fronters[id] ? (openBlock(), createElementBlock(
                        Fragment,
                        { key: 2 },
                        [
                          $props.fronters[id].allowed ? (openBlock(true), createElementBlock(
                            Fragment,
                            { key: 0 },
                            renderList($props.fronters[id].members, (member) => {
                              return openBlock(), createBlock(QItem, {
                                key: member.id,
                                clickable: "",
                                "inset-level": 1,
                                onClick: ($event) => $setup.dialog.show({ member, system: $props.systems[id] })
                              }, {
                                default: withCtx(() => [
                                  createVNode(
                                    QItemSection,
                                    { avatar: "" },
                                    {
                                      default: withCtx(() => [
                                        createVNode($setup["InitialFallbackAvatar"], {
                                          name: member.getName($setup.detectPronouns),
                                          url: member.avatarUrl,
                                          size: $setup.settings.iconSize + "px",
                                          square: $setup.settings.squareIcons
                                        }, null, 8, ["name", "url", "size", "square"])
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  ),
                                  createVNode(
                                    QItemSection,
                                    { "no-wrap": "" },
                                    {
                                      default: withCtx(() => [
                                        createVNode(
                                          QItemLabel,
                                          null,
                                          {
                                            default: withCtx(() => [
                                              createTextVNode(
                                                toDisplayString(member.getName($setup.detectPronouns)),
                                                1
                                                /* TEXT */
                                              )
                                            ]),
                                            _: 2
                                            /* DYNAMIC */
                                          },
                                          1024
                                          /* DYNAMIC_SLOTS */
                                        ),
                                        member.getPronouns($setup.detectPronouns) ? (openBlock(), createBlock(
                                          QItemLabel,
                                          {
                                            key: 0,
                                            caption: ""
                                          },
                                          {
                                            default: withCtx(() => [
                                              createTextVNode(
                                                toDisplayString(member.getPronouns($setup.detectPronouns)),
                                                1
                                                /* TEXT */
                                              )
                                            ]),
                                            _: 2
                                            /* DYNAMIC */
                                          },
                                          1024
                                          /* DYNAMIC_SLOTS */
                                        )) : createCommentVNode("v-if", true)
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  )
                                ]),
                                _: 2
                                /* DYNAMIC */
                              }, 1032, ["onClick"]);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          )) : (openBlock(), createElementBlock(
                            Fragment,
                            { key: 1 },
                            [
                              createCommentVNode(" No Access "),
                              createVNode(QItem, { "inset-level": 1 }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { avatar: "" }, {
                                    default: withCtx(() => [
                                      createVNode(QAvatar, {
                                        square: $setup.settings.squareIcons,
                                        color: "red",
                                        icon: "close",
                                        size: $setup.settings.iconSize + "px"
                                      }, null, 8, ["square", "size"])
                                    ]),
                                    _: 1
                                    /* STABLE */
                                  }),
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [..._cache[3] || (_cache[3] = [
                                      createTextVNode(
                                        "No Access",
                                        -1
                                        /* CACHED */
                                      )
                                    ])]),
                                    _: 1,
                                    __: [3]
                                  })
                                ]),
                                _: 1
                                /* STABLE */
                              })
                            ],
                            2112
                            /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                          ))
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      )) : (openBlock(), createElementBlock(
                        Fragment,
                        { key: 3 },
                        [
                          createCommentVNode(" Loading "),
                          createVNode(QItem, { "inset-level": 1 }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, { avatar: "" }, {
                                default: withCtx(() => [
                                  createVNode(QSpinner, {
                                    size: $setup.settings.iconSize + "px"
                                  }, null, 8, ["size"])
                                ]),
                                _: 1
                                /* STABLE */
                              }),
                              createVNode(QItemSection, null, {
                                default: withCtx(() => [..._cache[4] || (_cache[4] = [
                                  createTextVNode(
                                    "Loading...",
                                    -1
                                    /* CACHED */
                                  )
                                ])]),
                                _: 1,
                                __: [4]
                              })
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ],
                        2112
                        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                      ))
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      createVNode(
        $setup["DescriptionDialog"],
        { ref: "dialog" },
        null,
        512
        /* NEED_PATCH */
      )
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const ListLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/pages/status/ListLayout.vue"]]);
export {
  ListLayout as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdExheW91dC1acVJmeVBCNS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL3N0YXR1cy9MaXN0TGF5b3V0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXJcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IGluaGVyaXRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gcS1tdC1sZ1wiPlxuICAgICAgPHEtbGlzdD5cbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiaWQgb2YgaWRzXCIgOmtleT1cImlkXCI+XG4gICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgdi1pZj1cInN5c3RlbXNbaWRdXCJcbiAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgQGNsaWNrPVwiZGlhbG9nLnNob3coeyBzeXN0ZW06IHN5c3RlbXNbaWRdIH0pXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICA8aW5pdGlhbC1mYWxsYmFjay1hdmF0YXJcbiAgICAgICAgICAgICAgICA6bmFtZT1cInN5c3RlbXNbaWRdLmdldE5hbWUoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgICAgICAgICA6dXJsPVwic3lzdGVtc1tpZF0uYXZhdGFyVXJsXCJcbiAgICAgICAgICAgICAgICA6c2l6ZT1cInNldHRpbmdzLmljb25TaXplICsgJ3B4J1wiXG4gICAgICAgICAgICAgICAgOnNxdWFyZT1cInNldHRpbmdzLnNxdWFyZUljb25zXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAge3sgc3lzdGVtc1tpZF0uZ2V0TmFtZShkZXRlY3RQcm9ub3VucykgfX1cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWxcbiAgICAgICAgICAgICAgICB2LWlmPVwic3lzdGVtc1tpZF0uZ2V0UHJvbm91bnMoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgICAgICAgICBjYXB0aW9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBzeXN0ZW1zW2lkXS5nZXRQcm9ub3VucyhkZXRlY3RQcm9ub3VucykgfX1cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWxcbiAgICAgICAgICAgICAgICB2LWlmPVwiZnJvbnRlcnNbaWRdICYmIHNldHRpbmdzLnNob3dVcGRhdGVUaW1lXCJcbiAgICAgICAgICAgICAgICBjYXB0aW9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1pY29uIGNsYXNzPVwicS1tci14c1wiIG5hbWU9XCJ1cGRhdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkxhc3QgdXBkYXRlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cmVsYXRpdmUtdGltZS1kaXNwbGF5IDp0aW1lPVwiZnJvbnRlcnNbaWRdLmxhc3RVcGRhdGVkXCIgLz5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWxcbiAgICAgICAgICAgICAgICB2LWlmPVwiZnJvbnRlcnNbaWRdICYmIHNldHRpbmdzLnNob3dMYXN0U3dpdGNoXCJcbiAgICAgICAgICAgICAgICBjYXB0aW9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1pY29uIGNsYXNzPVwicS1tci14c1wiIG5hbWU9XCJzd2FwX2hvcml6XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5MYXN0IHN3aXRjaDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cmVsYXRpdmUtdGltZS1kaXNwbGF5IDp0aW1lPVwiZnJvbnRlcnNbaWRdLmxhc3RTd2l0Y2hcIiAvPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgPHEtaXRlbSB2LWVsc2U+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICA8cS1zcGlubmVyIDpzaXplPVwic2V0dGluZ3MuaWNvblNpemUgKyAncHgnXCIgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+TG9hZGluZy4uLjwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmcm9udGVyc1tpZF1cIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZnJvbnRlcnNbaWRdLmFsbG93ZWRcIj5cbiAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgIHYtZm9yPVwibWVtYmVyIG9mIGZyb250ZXJzW2lkXS5tZW1iZXJzXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwibWVtYmVyLmlkXCJcbiAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICA6aW5zZXQtbGV2ZWw9XCIxXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJkaWFsb2cuc2hvdyh7IG1lbWJlciwgc3lzdGVtOiBzeXN0ZW1zW2lkXSB9KVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgPGluaXRpYWwtZmFsbGJhY2stYXZhdGFyXG4gICAgICAgICAgICAgICAgICAgIDpuYW1lPVwibWVtYmVyLmdldE5hbWUoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgICAgICAgICAgICAgOnVybD1cIm1lbWJlci5hdmF0YXJVcmxcIlxuICAgICAgICAgICAgICAgICAgICA6c2l6ZT1cInNldHRpbmdzLmljb25TaXplICsgJ3B4J1wiXG4gICAgICAgICAgICAgICAgICAgIDpzcXVhcmU9XCJzZXR0aW5ncy5zcXVhcmVJY29uc1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIG5vLXdyYXA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7eyBtZW1iZXIuZ2V0TmFtZShkZXRlY3RQcm9ub3VucykgfX1cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwibWVtYmVyLmdldFByb25vdW5zKGRldGVjdFByb25vdW5zKVwiXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb25cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3sgbWVtYmVyLmdldFByb25vdW5zKGRldGVjdFByb25vdW5zKSB9fVxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPCEtLSBObyBBY2Nlc3MgLS0+XG4gICAgICAgICAgICA8cS1pdGVtIHYtZWxzZSA6aW5zZXQtbGV2ZWw9XCIxXCI+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgPHEtYXZhdGFyXG4gICAgICAgICAgICAgICAgICA6c3F1YXJlPVwic2V0dGluZ3Muc3F1YXJlSWNvbnNcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgIDpzaXplPVwic2V0dGluZ3MuaWNvblNpemUgKyAncHgnXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+Tm8gQWNjZXNzPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPCEtLSBMb2FkaW5nIC0tPlxuICAgICAgICAgIDxxLWl0ZW0gdi1lbHNlIDppbnNldC1sZXZlbD1cIjFcIj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgIDxxLXNwaW5uZXIgOnNpemU9XCJzZXR0aW5ncy5pY29uU2l6ZSArICdweCdcIiAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5Mb2FkaW5nLi4uPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvcS1saXN0PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRlc2NyaXB0aW9uLWRpYWxvZyByZWY9XCJkaWFsb2dcIiAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJztcblxuaW1wb3J0IFJlbGF0aXZlVGltZURpc3BsYXkgZnJvbSAnc3JjL2NvbXBvbmVudHMvUmVsYXRpdmVUaW1lRGlzcGxheS52dWUnO1xuaW1wb3J0IEluaXRpYWxGYWxsYmFja0F2YXRhciBmcm9tICdzcmMvY29tcG9uZW50cy9Jbml0aWFsRmFsbGJhY2tBdmF0YXIudnVlJztcbmltcG9ydCBEZXNjcmlwdGlvbkRpYWxvZyBmcm9tICdzcmMvY29tcG9uZW50cy9EZXNjcmlwdGlvbkRpYWxvZy52dWUnO1xuXG5pbXBvcnQgeyBTeXN0ZW0gfSBmcm9tICdzcmMvbW9kZWxzL1N5c3RlbSc7XG5pbXBvcnQgeyBGcm9udGVycyB9IGZyb20gJ3NyYy9tb2RlbHMvRnJvbnRlcnMnO1xuaW1wb3J0IHsgdXNlU2V0dGluZ3NTdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc2V0dGluZ3Mtc3RvcmUnO1xuXG5jb25zdCBzZXR0aW5nc1N0b3JlID0gdXNlU2V0dGluZ3NTdG9yZSgpO1xuY29uc3QgeyBkZXRlY3RQcm9ub3VucyB9ID0gc3RvcmVUb1JlZnMoc2V0dGluZ3NTdG9yZSk7XG5jb25zdCBzZXR0aW5ncyA9IHNldHRpbmdzU3RvcmUuc3RhdHVzLmxpc3Q7XG5cbmNvbnN0IGRpYWxvZyA9IHJlZigpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgaWRzOiBBcnJheTxzdHJpbmc+O1xuICBmcm9udGVyczogUmVjb3JkPHN0cmluZywgRnJvbnRlcnM+O1xuICBzeXN0ZW1zOiBSZWNvcmQ8c3RyaW5nLCBTeXN0ZW0+O1xufVxuXG5kZWZpbmVQcm9wczxQcm9wcz4oKTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlQ29tbWVudFZOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5SEEsVUFBTSxnQkFBZ0IsaUJBQWlCO0FBQ3ZDLFVBQU0sRUFBRSxlQUFB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
