import { Q as defineComponent, d as computed, V as openBlock, aE as createElementBlock, Y as createVNode, X as withCtx, _ as unref, W as createBlock, a3 as QIcon, a4 as createCommentVNode, a1 as createTextVNode, Z as normalizeClass, ab as QCardSection, a6 as QSeparator, a2 as createBaseVNode, a5 as toDisplayString, aM as normalizeStyle, aa as QCard, aN as QSpinner, aF as Fragment, aO as renderList, af as _export_sfc, R as useSettingsStore, T as storeToRefs } from "./index-C1u-_TOv.js";
import { a as QItem, b as QItemSection, Q as QItemLabel } from "./QItem-4sCyJUzG.js";
import { m as matGroups, Q as QImg } from "./index-DRTIEHtT.js";
import { R as RelativeTimeDisplay } from "./RelativeTimeDisplay-SNX72-cs.js";
import { L as LabeledTile } from "./LabeledTile-B2Qh0RgH.js";
const _hoisted_1$1 = {
  key: 0,
  class: "col-auto"
};
const _hoisted_2 = { class: "description" };
const _hoisted_3 = {
  key: 1,
  class: "col-auto"
};
const _hoisted_4 = { class: "col" };
const _hoisted_5 = { class: "row q-col-gutter-md" };
const _hoisted_6 = { class: "description" };
const _hoisted_7 = {
  key: 1,
  class: "col-auto"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "absolute-bottom text-subtitle2 text-center" },
  " No Access ",
  -1
  /* HOISTED */
);
const _hoisted_9 = {
  key: 1,
  class: "row"
};
const _hoisted_10 = { class: "col-auto" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SystemView",
  props: {
    system: { type: Object, required: false },
    fronters: { type: Object, required: false },
    detectPronouns: { type: Boolean, required: true },
    showLastSwitch: { type: Boolean, required: true },
    showUpdateTime: { type: Boolean, required: true },
    showSystemDescription: { type: Boolean, required: true },
    showFronterDescription: { type: Boolean, required: true },
    cardWidth: { type: Number, required: true }
  },
  setup(__props) {
    const props = __props;
    const showStats = computed(() => props.showLastSwitch || props.showUpdateTime);
    const showDescription = computed(
      () => {
        var _a;
        return props.showSystemDescription && ((_a = props.system) == null ? void 0 : _a.description);
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          _ctx.system ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
            createVNode(QCard, {
              flat: "",
              style: normalizeStyle({ width: `${_ctx.cardWidth}px` })
            }, {
              default: withCtx(() => [
                createVNode(LabeledTile, {
                  img: _ctx.system.avatarUrl,
                  label: _ctx.system.getName(_ctx.detectPronouns),
                  caption: _ctx.system.getPronouns(_ctx.detectPronouns),
                  size: `${_ctx.cardWidth}px`,
                  "fallback-icon": unref(matGroups)
                }, {
                  default: withCtx(() => [
                    _ctx.fronters && showStats.value ? (openBlock(), createBlock(QCardSection, {
                      key: 0,
                      class: normalizeClass({ "q-px-none": _ctx.cardWidth < 220 })
                    }, {
                      default: withCtx(() => [
                        _ctx.showUpdateTime ? (openBlock(), createBlock(QItem, { key: 0 }, {
                          default: withCtx(() => [
                            _ctx.cardWidth > 180 ? (openBlock(), createBlock(QItemSection, {
                              key: 0,
                              avatar: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(QIcon, { name: "update" })
                              ]),
                              _: 1
                              /* STABLE */
                            })) : createCommentVNode("v-if", true),
                            createVNode(QItemSection, null, {
                              default: withCtx(() => [
                                createVNode(QItemLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Last updated ")
                                  ]),
                                  _: 1
                                  /* STABLE */
                                }),
                                createVNode(QItemLabel, { caption: "" }, {
                                  default: withCtx(() => [
                                    createVNode(RelativeTimeDisplay, {
                                      time: _ctx.fronters.lastUpdated
                                    }, null, 8, ["time"])
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
                        })) : createCommentVNode("v-if", true),
                        _ctx.showLastSwitch ? (openBlock(), createBlock(QItem, { key: 1 }, {
                          default: withCtx(() => [
                            _ctx.cardWidth > 180 ? (openBlock(), createBlock(QItemSection, {
                              key: 0,
                              avatar: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(QIcon, { name: "swap_horiz" })
                              ]),
                              _: 1
                              /* STABLE */
                            })) : createCommentVNode("v-if", true),
                            createVNode(QItemSection, null, {
                              default: withCtx(() => [
                                createVNode(QItemLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Last switch ")
                                  ]),
                                  _: 1
                                  /* STABLE */
                                }),
                                createVNode(QItemLabel, { caption: "" }, {
                                  default: withCtx(() => [
                                    createVNode(RelativeTimeDisplay, {
                                      time: _ctx.fronters.lastSwitch
                                    }, null, 8, ["time"])
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
                        })) : createCommentVNode("v-if", true)
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["class"])) : createCommentVNode("v-if", true),
                    showDescription.value && showStats.value ? (openBlock(), createBlock(QSeparator, { key: 1 })) : createCommentVNode("v-if", true),
                    showDescription.value ? (openBlock(), createBlock(QCardSection, { key: 2 }, {
                      default: withCtx(() => [
                        createBaseVNode(
                          "pre",
                          _hoisted_2,
                          toDisplayString(_ctx.system.description),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })) : createCommentVNode("v-if", true)
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["img", "label", "caption", "size", "fallback-icon"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["style"])
          ])) : (openBlock(), createElementBlock("div", _hoisted_3, [
            createVNode(QCard, {
              flat: "",
              class: "justify-center row",
              style: normalizeStyle({ width: `${_ctx.cardWidth}px`, height: `${_ctx.cardWidth}px` })
            }, {
              default: withCtx(() => [
                createVNode(QSpinner, {
                  class: "self-center",
                  color: "primary",
                  width: "50%",
                  height: "50%"
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["style"])
          ])),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              _ctx.fronters ? (openBlock(), createElementBlock(
                Fragment,
                { key: 0 },
                [
                  _ctx.fronters.allowed ? (openBlock(true), createElementBlock(
                    Fragment,
                    { key: 0 },
                    renderList(_ctx.fronters.members, (fronter) => {
                      return openBlock(), createElementBlock("div", {
                        key: fronter.id,
                        class: "col-auto"
                      }, [
                        createVNode(LabeledTile, {
                          img: fronter.avatarUrl,
                          label: fronter.getName(_ctx.detectPronouns),
                          caption: fronter.getPronouns(_ctx.detectPronouns),
                          size: `${_ctx.cardWidth}px`
                        }, {
                          default: withCtx(() => [
                            fronter.description && _ctx.showFronterDescription ? (openBlock(), createBlock(
                              QCardSection,
                              { key: 0 },
                              {
                                default: withCtx(() => [
                                  createBaseVNode(
                                    "pre",
                                    _hoisted_6,
                                    toDisplayString(fronter.description),
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
                        }, 1032, ["img", "label", "caption", "size"])
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  )) : (openBlock(), createElementBlock("div", _hoisted_7, [
                    createVNode(QCard, {
                      flat: "",
                      style: normalizeStyle({ width: `${_ctx.cardWidth}px`, height: `${_ctx.cardWidth}px` })
                    }, {
                      default: withCtx(() => [
                        createVNode(QImg, { ratio: "1" }, {
                          default: withCtx(() => [
                            createVNode(QIcon, {
                              size: _ctx.cardWidth + "px",
                              color: "red",
                              name: "cancel"
                            }, null, 8, ["size"]),
                            _hoisted_8
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["style"])
                  ]))
                ],
                64
                /* STABLE_FRAGMENT */
              )) : (openBlock(), createElementBlock("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  createVNode(QCard, {
                    flat: "",
                    class: "justify-center row",
                    style: normalizeStyle({ width: `${_ctx.cardWidth}px`, height: `${_ctx.cardWidth}px` })
                  }, {
                    default: withCtx(() => [
                      createVNode(QSpinner, {
                        class: "self-center",
                        color: "primary",
                        width: "50%",
                        height: "50%"
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["style"])
                ])
              ]))
            ])
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const SystemView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "/home/zowie/dev/pkstatus/src/components/StatusPage/Tile/SystemView.vue"]]);
const _hoisted_1 = { class: "col-12" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TileLayout",
  props: {
    ids: { type: Array, required: true },
    fronters: { type: Object, required: true },
    systems: { type: Object, required: true }
  },
  setup(__props) {
    const settingsStore = useSettingsStore();
    const { detectPronouns } = storeToRefs(settingsStore);
    const settings = settingsStore.status.tile;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.ids, (id) => {
            return openBlock(), createElementBlock("div", {
              key: id,
              class: "row justify-left q-pa-md q-col-gutter-md"
            }, [
              createVNode(SystemView, {
                system: _ctx.systems[id],
                fronters: _ctx.fronters[id],
                "detect-pronouns": unref(detectPronouns),
                "show-system-description": unref(settings).showSystemDescription,
                "show-fronter-description": unref(settings).showFronterDescription,
                "show-update-time": unref(settings).showUpdateTime,
                "show-last-switch": unref(settings).showLastSwitch,
                "card-width": unref(settings).tileSize
              }, null, 8, ["system", "fronters", "detect-pronouns", "show-system-description", "show-fronter-description", "show-update-time", "show-last-switch", "card-width"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]);
    };
  }
});
const TileLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/zowie/dev/pkstatus/src/pages/status/TileLayout.vue"]]);
export {
  TileLayout as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlsZUxheW91dC1CUG94WXlCTS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3RhdHVzUGFnZS9UaWxlL1N5c3RlbVZpZXcudnVlIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL3N0YXR1cy9UaWxlTGF5b3V0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgdi1pZj1cInN5c3RlbVwiIGNsYXNzPVwiY29sLWF1dG9cIj5cbiAgICA8cS1jYXJkIGZsYXQgOnN0eWxlPVwieyB3aWR0aDogYCR7Y2FyZFdpZHRofXB4YCB9XCI+XG4gICAgICA8bGFiZWxlZC10aWxlXG4gICAgICAgIDppbWc9XCJzeXN0ZW0uYXZhdGFyVXJsXCJcbiAgICAgICAgOmxhYmVsPVwic3lzdGVtLmdldE5hbWUoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgOmNhcHRpb249XCJzeXN0ZW0uZ2V0UHJvbm91bnMoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgOnNpemU9XCJgJHtjYXJkV2lkdGh9cHhgXCJcbiAgICAgICAgOmZhbGxiYWNrLWljb249XCJtYXRHcm91cHNcIlxuICAgICAgPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb25cbiAgICAgICAgICB2LWlmPVwiZnJvbnRlcnMgJiYgc2hvd1N0YXRzXCJcbiAgICAgICAgICA6Y2xhc3M9XCJ7ICdxLXB4LW5vbmUnOiBjYXJkV2lkdGggPCAyMjAgfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pdGVtIHYtaWY9XCJzaG93VXBkYXRlVGltZVwiPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHYtaWY9XCJjYXJkV2lkdGggPiAxODBcIiBhdmF0YXI+XG4gICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cInVwZGF0ZVwiIC8+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPiBMYXN0IHVwZGF0ZWQgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj5cbiAgICAgICAgICAgICAgICA8cmVsYXRpdmUtdGltZS1kaXNwbGF5IDp0aW1lPVwiZnJvbnRlcnMubGFzdFVwZGF0ZWRcIiAvPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICA8cS1pdGVtIHYtaWY9XCJzaG93TGFzdFN3aXRjaFwiPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHYtaWY9XCJjYXJkV2lkdGggPiAxODBcIiBhdmF0YXI+XG4gICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cInN3YXBfaG9yaXpcIiAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD4gTGFzdCBzd2l0Y2ggPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj5cbiAgICAgICAgICAgICAgICA8cmVsYXRpdmUtdGltZS1kaXNwbGF5IDp0aW1lPVwiZnJvbnRlcnMubGFzdFN3aXRjaFwiIC8+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgICA8cS1zZXBhcmF0b3Igdi1pZj1cInNob3dEZXNjcmlwdGlvbiAmJiBzaG93U3RhdHNcIiAvPlxuXG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbiB2LWlmPVwic2hvd0Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgPHByZSBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3sgc3lzdGVtLmRlc2NyaXB0aW9uIH19PC9wcmU+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8L2xhYmVsZWQtdGlsZT5cbiAgICA8L3EtY2FyZD5cbiAgPC9kaXY+XG4gIDxkaXYgdi1lbHNlIGNsYXNzPVwiY29sLWF1dG9cIj5cbiAgICA8cS1jYXJkXG4gICAgICBmbGF0XG4gICAgICBjbGFzcz1cImp1c3RpZnktY2VudGVyIHJvd1wiXG4gICAgICA6c3R5bGU9XCJ7IHdpZHRoOiBgJHtjYXJkV2lkdGh9cHhgLCBoZWlnaHQ6IGAke2NhcmRXaWR0aH1weGAgfVwiXG4gICAgPlxuICAgICAgPHEtc3Bpbm5lciBjbGFzcz1cInNlbGYtY2VudGVyXCIgY29sb3I9XCJwcmltYXJ5XCIgd2lkdGg9XCI1MCVcIiBoZWlnaHQ9XCI1MCVcIiAvPlxuICAgIDwvcS1jYXJkPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICA8dGVtcGxhdGUgdi1pZj1cImZyb250ZXJzXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZnJvbnRlcnMuYWxsb3dlZFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHYtZm9yPVwiZnJvbnRlciBvZiBmcm9udGVycy5tZW1iZXJzXCJcbiAgICAgICAgICAgIDprZXk9XCJmcm9udGVyLmlkXCJcbiAgICAgICAgICAgIGNsYXNzPVwiY29sLWF1dG9cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxsYWJlbGVkLXRpbGVcbiAgICAgICAgICAgICAgOmltZz1cImZyb250ZXIuYXZhdGFyVXJsXCJcbiAgICAgICAgICAgICAgOmxhYmVsPVwiZnJvbnRlci5nZXROYW1lKGRldGVjdFByb25vdW5zKVwiXG4gICAgICAgICAgICAgIDpjYXB0aW9uPVwiZnJvbnRlci5nZXRQcm9ub3VucyhkZXRlY3RQcm9ub3VucylcIlxuICAgICAgICAgICAgICA6c2l6ZT1cImAke2NhcmRXaWR0aH1weGBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb25cbiAgICAgICAgICAgICAgICB2LWlmPVwiZnJvbnRlci5kZXNjcmlwdGlvbiAmJiBzaG93RnJvbnRlckRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwcmUgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IGZyb250ZXIuZGVzY3JpcHRpb24gfX08L3ByZT5cbiAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgIDwvbGFiZWxlZC10aWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImNvbC1hdXRvXCI+XG4gICAgICAgICAgPHEtY2FyZFxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgOnN0eWxlPVwieyB3aWR0aDogYCR7Y2FyZFdpZHRofXB4YCwgaGVpZ2h0OiBgJHtjYXJkV2lkdGh9cHhgIH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWltZyByYXRpbz1cIjFcIj5cbiAgICAgICAgICAgICAgPHEtaWNvbiA6c2l6ZT1cImNhcmRXaWR0aCArICdweCdcIiBjb2xvcj1cInJlZFwiIG5hbWU9XCJjYW5jZWxcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUtYm90dG9tIHRleHQtc3VidGl0bGUyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgTm8gQWNjZXNzXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9xLWltZz5cbiAgICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvXCI+XG4gICAgICAgICAgPHEtY2FyZFxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIlxuICAgICAgICAgICAgOnN0eWxlPVwieyB3aWR0aDogYCR7Y2FyZFdpZHRofXB4YCwgaGVpZ2h0OiBgJHtjYXJkV2lkdGh9cHhgIH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLXNwaW5uZXJcbiAgICAgICAgICAgICAgY2xhc3M9XCJzZWxmLWNlbnRlclwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiNTAlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNTAlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IEZyb250ZXJzIH0gZnJvbSAnc3JjL21vZGVscy9Gcm9udGVycyc7XG5pbXBvcnQgeyBTeXN0ZW0gfSBmcm9tICdzcmMvbW9kZWxzL1N5c3RlbSc7XG5pbXBvcnQgUmVsYXRpdmVUaW1lRGlzcGxheSBmcm9tICdzcmMvY29tcG9uZW50cy9SZWxhdGl2ZVRpbWVEaXNwbGF5LnZ1ZSc7XG5pbXBvcnQgTGFiZWxlZFRpbGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvU3RhdHVzUGFnZS9UaWxlL0xhYmVsZWRUaWxlLnZ1ZSc7XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBtYXRHcm91cHMgfSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBzeXN0ZW0/OiBTeXN0ZW07XG4gIGZyb250ZXJzPzogRnJvbnRlcnM7XG5cbiAgZGV0ZWN0UHJvbm91bnM6IGJvb2xlYW47XG4gIHNob3dMYXN0U3dpdGNoOiBib29sZWFuO1xuICBzaG93VXBkYXRlVGltZTogYm9vbGVhbjtcbiAgc2hvd1N5c3RlbURlc2NyaXB0aW9uOiBib29sZWFuO1xuICBzaG93RnJvbnRlckRlc2NyaXB0aW9uOiBib29sZWFuO1xuICBjYXJkV2lkdGg6IG51bWJlcjtcbn1cblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczxQcm9wcz4oKTtcbmNvbnN0IHNob3dTdGF0cyA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnNob3dMYXN0U3dpdGNoIHx8IHByb3BzLnNob3dVcGRhdGVUaW1lKTtcbmNvbnN0IHNob3dEZXNjcmlwdGlvbiA9IGNvbXB1dGVkKFxuICAoKSA9PiBwcm9wcy5zaG93U3lzdGVtRGVzY3JpcHRpb24gJiYgcHJvcHMuc3lzdGVtPy5kZXNjcmlwdGlvbixcbik7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImlkIG9mIGlkc1wiIDprZXk9XCJpZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWxlZnQgcS1wYS1tZCBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgPHN5c3RlbS12aWV3XG4gICAgICAgICAgOnN5c3RlbT1cInN5c3RlbXNbaWRdXCJcbiAgICAgICAgICA6ZnJvbnRlcnM9XCJmcm9udGVyc1tpZF1cIlxuICAgICAgICAgIDpkZXRlY3QtcHJvbm91bnM9XCJkZXRlY3RQcm9ub3Vuc1wiXG4gICAgICAgICAgOnNob3ctc3lzdGVtLWRlc2NyaXB0aW9uPVwic2V0dGluZ3Muc2hvd1N5c3RlbURlc2NyaXB0aW9uXCJcbiAgICAgICAgICA6c2hvdy1mcm9udGVyLWRlc2NyaXB0aW9uPVwic2V0dGluZ3Muc2hvd0Zyb250ZXJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgOnNob3ctdXBkYXRlLXRpbWU9XCJzZXR0aW5ncy5zaG93VXBkYXRlVGltZVwiXG4gICAgICAgICAgOnNob3ctbGFzdC1zd2l0Y2g9XCJzZXR0aW5ncy5zaG93TGFzdFN3aXRjaFwiXG4gICAgICAgICAgOmNhcmQtd2lkdGg9XCJzZXR0aW5ncy50aWxlU2l6ZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3RlbXBsYXRlPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBGcm9udGVycyB9IGZyb20gJ3NyYy9tb2RlbHMvRnJvbnRlcnMnO1xuaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnc3JjL21vZGVscy9TeXN0ZW0nO1xuaW1wb3J0IHsgdXNlU2V0dGluZ3NTdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc2V0dGluZ3Mtc3RvcmUnO1xuaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSc7XG5cbmltcG9ydCBTeXN0ZW1WaWV3IGZyb20gJ3NyYy9jb21wb25lbnRzL1N0YXR1c1BhZ2UvVGlsZS9TeXN0ZW1WaWV3LnZ1ZSc7XG5cbmNvbnN0IHNldHRpbmdzU3RvcmUgPSB1c2VTZXR0aW5nc1N0b3JlKCk7XG5jb25zdCB7IGRldGVjdFByb25vdW5zIH0gPSBzdG9yZVRvUmVmcyhzZXR0aW5nc1N0b3JlKTtcbmNvbnN0IHNldHRpbmdzID0gc2V0dGluZ3NTdG9yZS5zdGF0dXMudGlsZTtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGlkczogQXJyYXk8c3RyaW5nPjtcbiAgZnJvbnRlcnM6IFJlY29yZDxzdHJpbmcsIEZyb250ZXJzPjtcbiAgc3lzdGVtczogUmVjb3JkPHN0cmluZywgU3lzdGVtPjtcbn1cblxuZGVmaW5lUHJvcHM8UHJvcHM+KCk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUlBLFVBQU0sUUFBUTtBQUNkLFVBQU0sWUFBWSxTQUFTLE1BQU0sTUFBTSxrQkFBa0IsTUFBTSxjQUFjO0FBQzdFLFVBQU0sa0JBQWtCO0FBQUEsTUFDdEIsTUFBQTs7QUFBTSxxQkFBTSwyQkFBeUIsV0FBTSxXQUFOLG1CQUFjO0FBQUE7QUFBQSxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3R3JELFVBQU0sZ0JBQWdCO0FBQ3RCLFVBQU0sRUFBRSxlQUFBLElBQW1CLFlBQVksYUFBYTtBQUM5QyxVQUFBLFdBQVcsY0FBYyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
