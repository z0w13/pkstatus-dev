import { b as QItemSection, Q as QItemLabel, a as QItem } from "./QItem-4sCyJUzG.js";
import { Q as defineComponent, R as useSettingsStore, T as storeToRefs, r as ref, V as openBlock, aE as createElementBlock, a2 as createBaseVNode, Y as createVNode, X as withCtx, aF as Fragment, aO as renderList, W as createBlock, _ as unref, a1 as createTextVNode, a5 as toDisplayString, a4 as createCommentVNode, a3 as QIcon, aN as QSpinner, aP as QAvatar, af as _export_sfc } from "./index-C1u-_TOv.js";
import { Q as QList } from "./QList-DQhRiMIt.js";
import { R as RelativeTimeDisplay } from "./RelativeTimeDisplay-SNX72-cs.js";
import { I as InitialFallbackAvatar } from "./InitialFallbackAvatar-B9wHc8ll.js";
import { D as DescriptionDialog } from "./DescriptionDialog-B1LiVJwM.js";
import "./index-DRTIEHtT.js";
import "./MemberCard-Bif0S6_X.js";
import "./QMarkupTable-BsLt63RP.js";
const _hoisted_1 = {
  class: "row justify-center",
  style: { "min-height": "inherit" }
};
const _hoisted_2 = { class: "col-auto q-mt-lg" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "sr-only" },
  "Last updated",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "sr-only" },
  "Last switch",
  -1
  /* HOISTED */
);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListLayout",
  props: {
    ids: { type: Array, required: true },
    fronters: { type: Object, required: true },
    systems: { type: Object, required: true }
  },
  setup(__props) {
    const settingsStore = useSettingsStore();
    const { detectPronouns } = storeToRefs(settingsStore);
    const settings = settingsStore.status.list;
    const dialog = ref();
    return (_ctx, _cache) => {
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
                    renderList(_ctx.ids, (id) => {
                      return openBlock(), createElementBlock(
                        Fragment,
                        { key: id },
                        [
                          _ctx.systems[id] ? (openBlock(), createBlock(QItem, {
                            key: 0,
                            clickable: "",
                            onClick: ($event) => dialog.value.show({ system: _ctx.systems[id] })
                          }, {
                            default: withCtx(() => [
                              createVNode(
                                QItemSection,
                                { avatar: "" },
                                {
                                  default: withCtx(() => [
                                    createVNode(InitialFallbackAvatar, {
                                      name: _ctx.systems[id].getName(unref(detectPronouns)),
                                      url: _ctx.systems[id].avatarUrl,
                                      size: unref(settings).iconSize + "px",
                                      square: unref(settings).squareIcons
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
                                            toDisplayString(_ctx.systems[id].getName(unref(detectPronouns))),
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
                                    _ctx.systems[id].getPronouns(unref(detectPronouns)) ? (openBlock(), createBlock(
                                      QItemLabel,
                                      {
                                        key: 0,
                                        caption: ""
                                      },
                                      {
                                        default: withCtx(() => [
                                          createTextVNode(
                                            toDisplayString(_ctx.systems[id].getPronouns(unref(detectPronouns))),
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
                                    _ctx.fronters[id] && unref(settings).showUpdateTime ? (openBlock(), createBlock(
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
                                          _hoisted_3,
                                          createVNode(RelativeTimeDisplay, {
                                            time: _ctx.fronters[id].lastUpdated
                                          }, null, 8, ["time"])
                                        ]),
                                        _: 2
                                        /* DYNAMIC */
                                      },
                                      1024
                                      /* DYNAMIC_SLOTS */
                                    )) : createCommentVNode("v-if", true),
                                    _ctx.fronters[id] && unref(settings).showLastSwitch ? (openBlock(), createBlock(
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
                                          _hoisted_4,
                                          createVNode(RelativeTimeDisplay, {
                                            time: _ctx.fronters[id].lastSwitch
                                          }, null, 8, ["time"])
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
                          }, 1032, ["onClick"])) : (openBlock(), createBlock(QItem, { key: 1 }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, { avatar: "" }, {
                                default: withCtx(() => [
                                  createVNode(QSpinner, {
                                    size: unref(settings).iconSize + "px"
                                  }, null, 8, ["size"])
                                ]),
                                _: 1
                                /* STABLE */
                              }),
                              createVNode(QItemSection, null, {
                                default: withCtx(() => [
                                  createTextVNode("Loading...")
                                ]),
                                _: 1
                                /* STABLE */
                              })
                            ]),
                            _: 1
                            /* STABLE */
                          })),
                          _ctx.fronters[id] ? (openBlock(), createElementBlock(
                            Fragment,
                            { key: 2 },
                            [
                              _ctx.fronters[id].allowed ? (openBlock(true), createElementBlock(
                                Fragment,
                                { key: 0 },
                                renderList(_ctx.fronters[id].members, (member) => {
                                  return openBlock(), createBlock(QItem, {
                                    key: member.id,
                                    clickable: "",
                                    "inset-level": 1,
                                    onClick: ($event) => dialog.value.show({ member, system: _ctx.systems[id] })
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(
                                        QItemSection,
                                        { avatar: "" },
                                        {
                                          default: withCtx(() => [
                                            createVNode(InitialFallbackAvatar, {
                                              name: member.getName(unref(detectPronouns)),
                                              url: member.avatarUrl,
                                              size: unref(settings).iconSize + "px",
                                              square: unref(settings).squareIcons
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
                                                    toDisplayString(member.getName(unref(detectPronouns))),
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
                                            member.getPronouns(unref(detectPronouns)) ? (openBlock(), createBlock(
                                              QItemLabel,
                                              {
                                                key: 0,
                                                caption: ""
                                              },
                                              {
                                                default: withCtx(() => [
                                                  createTextVNode(
                                                    toDisplayString(member.getPronouns(unref(detectPronouns))),
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
                                            square: unref(settings).squareIcons,
                                            color: "red",
                                            icon: "close",
                                            size: unref(settings).iconSize + "px"
                                          }, null, 8, ["square", "size"])
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      }),
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createTextVNode("No Access")
                                        ]),
                                        _: 1
                                        /* STABLE */
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
                                        size: unref(settings).iconSize + "px"
                                      }, null, 8, ["size"])
                                    ]),
                                    _: 1
                                    /* STABLE */
                                  }),
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Loading...")
                                    ]),
                                    _: 1
                                    /* STABLE */
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
            DescriptionDialog,
            {
              ref_key: "dialog",
              ref: dialog
            },
            null,
            512
            /* NEED_PATCH */
          )
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const ListLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/zowie/dev/pkstatus/src/pages/status/ListLayout.vue"]]);
export {
  ListLayout as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdExheW91dC1DUVBYUEl2TC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL3N0YXR1cy9MaXN0TGF5b3V0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXJcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IGluaGVyaXRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gcS1tdC1sZ1wiPlxuICAgICAgPHEtbGlzdD5cbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiaWQgb2YgaWRzXCIgOmtleT1cImlkXCI+XG4gICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgdi1pZj1cInN5c3RlbXNbaWRdXCJcbiAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgQGNsaWNrPVwiZGlhbG9nLnNob3coeyBzeXN0ZW06IHN5c3RlbXNbaWRdIH0pXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICA8aW5pdGlhbC1mYWxsYmFjay1hdmF0YXJcbiAgICAgICAgICAgICAgICA6bmFtZT1cInN5c3RlbXNbaWRdLmdldE5hbWUoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgICAgICAgICA6dXJsPVwic3lzdGVtc1tpZF0uYXZhdGFyVXJsXCJcbiAgICAgICAgICAgICAgICA6c2l6ZT1cInNldHRpbmdzLmljb25TaXplICsgJ3B4J1wiXG4gICAgICAgICAgICAgICAgOnNxdWFyZT1cInNldHRpbmdzLnNxdWFyZUljb25zXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAge3sgc3lzdGVtc1tpZF0uZ2V0TmFtZShkZXRlY3RQcm9ub3VucykgfX1cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWxcbiAgICAgICAgICAgICAgICB2LWlmPVwic3lzdGVtc1tpZF0uZ2V0UHJvbm91bnMoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgICAgICAgICBjYXB0aW9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBzeXN0ZW1zW2lkXS5nZXRQcm9ub3VucyhkZXRlY3RQcm9ub3VucykgfX1cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWxcbiAgICAgICAgICAgICAgICB2LWlmPVwiZnJvbnRlcnNbaWRdICYmIHNldHRpbmdzLnNob3dVcGRhdGVUaW1lXCJcbiAgICAgICAgICAgICAgICBjYXB0aW9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1pY29uIGNsYXNzPVwicS1tci14c1wiIG5hbWU9XCJ1cGRhdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkxhc3QgdXBkYXRlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cmVsYXRpdmUtdGltZS1kaXNwbGF5IDp0aW1lPVwiZnJvbnRlcnNbaWRdLmxhc3RVcGRhdGVkXCIgLz5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWxcbiAgICAgICAgICAgICAgICB2LWlmPVwiZnJvbnRlcnNbaWRdICYmIHNldHRpbmdzLnNob3dMYXN0U3dpdGNoXCJcbiAgICAgICAgICAgICAgICBjYXB0aW9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1pY29uIGNsYXNzPVwicS1tci14c1wiIG5hbWU9XCJzd2FwX2hvcml6XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5MYXN0IHN3aXRjaDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cmVsYXRpdmUtdGltZS1kaXNwbGF5IDp0aW1lPVwiZnJvbnRlcnNbaWRdLmxhc3RTd2l0Y2hcIiAvPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgPHEtaXRlbSB2LWVsc2U+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICA8cS1zcGlubmVyIDpzaXplPVwic2V0dGluZ3MuaWNvblNpemUgKyAncHgnXCIgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+TG9hZGluZy4uLjwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmcm9udGVyc1tpZF1cIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZnJvbnRlcnNbaWRdLmFsbG93ZWRcIj5cbiAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgIHYtZm9yPVwibWVtYmVyIG9mIGZyb250ZXJzW2lkXS5tZW1iZXJzXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwibWVtYmVyLmlkXCJcbiAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICA6aW5zZXQtbGV2ZWw9XCIxXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJkaWFsb2cuc2hvdyh7IG1lbWJlciwgc3lzdGVtOiBzeXN0ZW1zW2lkXSB9KVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgPGluaXRpYWwtZmFsbGJhY2stYXZhdGFyXG4gICAgICAgICAgICAgICAgICAgIDpuYW1lPVwibWVtYmVyLmdldE5hbWUoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgICAgICAgICAgICAgOnVybD1cIm1lbWJlci5hdmF0YXJVcmxcIlxuICAgICAgICAgICAgICAgICAgICA6c2l6ZT1cInNldHRpbmdzLmljb25TaXplICsgJ3B4J1wiXG4gICAgICAgICAgICAgICAgICAgIDpzcXVhcmU9XCJzZXR0aW5ncy5zcXVhcmVJY29uc1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIG5vLXdyYXA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7eyBtZW1iZXIuZ2V0TmFtZShkZXRlY3RQcm9ub3VucykgfX1cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwibWVtYmVyLmdldFByb25vdW5zKGRldGVjdFByb25vdW5zKVwiXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb25cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3sgbWVtYmVyLmdldFByb25vdW5zKGRldGVjdFByb25vdW5zKSB9fVxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPCEtLSBObyBBY2Nlc3MgLS0+XG4gICAgICAgICAgICA8cS1pdGVtIHYtZWxzZSA6aW5zZXQtbGV2ZWw9XCIxXCI+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgPHEtYXZhdGFyXG4gICAgICAgICAgICAgICAgICA6c3F1YXJlPVwic2V0dGluZ3Muc3F1YXJlSWNvbnNcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgIDpzaXplPVwic2V0dGluZ3MuaWNvblNpemUgKyAncHgnXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+Tm8gQWNjZXNzPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPCEtLSBMb2FkaW5nIC0tPlxuICAgICAgICAgIDxxLWl0ZW0gdi1lbHNlIDppbnNldC1sZXZlbD1cIjFcIj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgIDxxLXNwaW5uZXIgOnNpemU9XCJzZXR0aW5ncy5pY29uU2l6ZSArICdweCdcIiAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5Mb2FkaW5nLi4uPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvcS1saXN0PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRlc2NyaXB0aW9uLWRpYWxvZyByZWY9XCJkaWFsb2dcIiAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJztcblxuaW1wb3J0IFJlbGF0aXZlVGltZURpc3BsYXkgZnJvbSAnc3JjL2NvbXBvbmVudHMvUmVsYXRpdmVUaW1lRGlzcGxheS52dWUnO1xuaW1wb3J0IEluaXRpYWxGYWxsYmFja0F2YXRhciBmcm9tICdzcmMvY29tcG9uZW50cy9Jbml0aWFsRmFsbGJhY2tBdmF0YXIudnVlJztcbmltcG9ydCBEZXNjcmlwdGlvbkRpYWxvZyBmcm9tICdzcmMvY29tcG9uZW50cy9EZXNjcmlwdGlvbkRpYWxvZy52dWUnO1xuXG5pbXBvcnQgeyBTeXN0ZW0gfSBmcm9tICdzcmMvbW9kZWxzL1N5c3RlbSc7XG5pbXBvcnQgeyBGcm9udGVycyB9IGZyb20gJ3NyYy9tb2RlbHMvRnJvbnRlcnMnO1xuaW1wb3J0IHsgdXNlU2V0dGluZ3NTdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc2V0dGluZ3Mtc3RvcmUnO1xuXG5jb25zdCBzZXR0aW5nc1N0b3JlID0gdXNlU2V0dGluZ3NTdG9yZSgpO1xuY29uc3QgeyBkZXRlY3RQcm9ub3VucyB9ID0gc3RvcmVUb1JlZnMoc2V0dGluZ3NTdG9yZSk7XG5jb25zdCBzZXR0aW5ncyA9IHNldHRpbmdzU3RvcmUuc3RhdHVzLmxpc3Q7XG5cbmNvbnN0IGRpYWxvZyA9IHJlZigpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgaWRzOiBBcnJheTxzdHJpbmc+O1xuICBmcm9udGVyczogUmVjb3JkPHN0cmluZywgRnJvbnRlcnM+O1xuICBzeXN0ZW1zOiBSZWNvcmQ8c3RyaW5nLCBTeXN0ZW0+O1xufVxuXG5kZWZpbmVQcm9wczxQcm9wcz4oKTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlIQSxVQUFNLGdCQUFnQjtBQUN0QixVQUFNLEVBQUUsZUFBQSxJQUFtQixZQUFZLGFBQWE7QUFDOUMsVUFBQSxXQUFXLGNBQWMsT0FBTztBQUV0QyxVQUFNLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
