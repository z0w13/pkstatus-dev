import { J as defineComponent, a as computed, al as renderPkDescription, _ as _export_sfc, ag as createElementBlock, T as openBlock, Y as createBaseVNode, W as createVNode, U as withCtx, am as normalizeStyle, a6 as QCard, ak as Fragment, an as renderList, S as createBlock, a0 as createCommentVNode, a7 as QCardSection, X as normalizeClass, a1 as QIcon, $ as createTextVNode, a3 as QSeparator, ao as QSpinner, K as useSettingsStore, L as storeToRefs } from "./index-Czhz81pV.js";
import { a as QItem, b as QItemSection, Q as QItemLabel } from "./QItem-DBhEHxap.js";
import { m as matGroups, Q as QImg } from "./index-BPlwBMVZ.js";
import { R as RelativeTimeDisplay } from "./RelativeTimeDisplay-DvRrdQnD.js";
import { L as LabeledTile } from "./LabeledTile-CmcEf7Nd.js";
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
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const showStats = computed(() => props.showLastSwitch || props.showUpdateTime);
    const showDescription = computed(
      () => {
        var _a;
        return props.showSystemDescription && ((_a = props.system) == null ? void 0 : _a.description);
      }
    );
    const __returned__ = { props, showStats, showDescription, RelativeTimeDisplay, LabeledTile, get renderPkDescription() {
      return renderPkDescription;
    }, get matGroups() {
      return matGroups;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "col-auto"
};
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = {
  key: 1,
  class: "col-auto"
};
const _hoisted_4 = { class: "col" };
const _hoisted_5 = { class: "row q-col-gutter-md" };
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = {
  key: 1,
  class: "col-auto"
};
const _hoisted_8 = {
  key: 1,
  class: "row"
};
const _hoisted_9 = { class: "col-auto" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      $props.system ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(QCard, {
          flat: "",
          style: normalizeStyle({ width: `${$props.cardWidth}px` })
        }, {
          default: withCtx(() => [
            createVNode($setup["LabeledTile"], {
              img: $props.system.avatarUrl,
              label: $props.system.getName($props.detectPronouns),
              caption: $props.system.getPronouns($props.detectPronouns),
              size: `${$props.cardWidth}px`,
              "fallback-icon": $setup.matGroups
            }, {
              default: withCtx(() => {
                var _a, _b;
                return [
                  $props.fronters && $setup.showStats ? (openBlock(), createBlock(QCardSection, {
                    key: 0,
                    class: normalizeClass({ "q-px-none": $props.cardWidth < 220 })
                  }, {
                    default: withCtx(() => [
                      $props.showUpdateTime ? (openBlock(), createBlock(QItem, { key: 0 }, {
                        default: withCtx(() => [
                          $props.cardWidth > 180 ? (openBlock(), createBlock(QItemSection, {
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
                                default: withCtx(() => _cache[0] || (_cache[0] = [
                                  createTextVNode(
                                    " Last updated ",
                                    -1
                                    /* CACHED */
                                  )
                                ])),
                                _: 1,
                                __: [0]
                              }),
                              createVNode(QItemLabel, { caption: "" }, {
                                default: withCtx(() => [
                                  createVNode($setup["RelativeTimeDisplay"], {
                                    time: $props.fronters.lastUpdated
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
                      $props.showLastSwitch ? (openBlock(), createBlock(QItem, { key: 1 }, {
                        default: withCtx(() => [
                          $props.cardWidth > 180 ? (openBlock(), createBlock(QItemSection, {
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
                                default: withCtx(() => _cache[1] || (_cache[1] = [
                                  createTextVNode(
                                    " Last switch ",
                                    -1
                                    /* CACHED */
                                  )
                                ])),
                                _: 1,
                                __: [1]
                              }),
                              createVNode(QItemLabel, { caption: "" }, {
                                default: withCtx(() => [
                                  createVNode($setup["RelativeTimeDisplay"], {
                                    time: $props.fronters.lastSwitch
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
                  $setup.showDescription && $setup.showStats && !!((_a = $props.system.description) == null ? void 0 : _a.length) ? (openBlock(), createBlock(QSeparator, { key: 1 })) : createCommentVNode("v-if", true),
                  $setup.showDescription && !!((_b = $props.system.description) == null ? void 0 : _b.length) ? (openBlock(), createBlock(QCardSection, { key: 2 }, {
                    default: withCtx(() => [
                      createCommentVNode(" eslint-disable vue/no-v-html -- needed for rendering "),
                      createBaseVNode("div", {
                        class: "description",
                        innerHTML: $setup.renderPkDescription($props.system.description)
                      }, null, 8, _hoisted_2),
                      createCommentVNode(" eslint-enable vue/no-v-html ")
                    ]),
                    _: 1
                    /* STABLE */
                  })) : createCommentVNode("v-if", true)
                ];
              }),
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
          style: normalizeStyle({ width: `${$props.cardWidth}px`, height: `${$props.cardWidth}px` })
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
          $props.fronters ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              $props.fronters.allowed ? (openBlock(true), createElementBlock(
                Fragment,
                { key: 0 },
                renderList($props.fronters.members, (fronter) => {
                  return openBlock(), createElementBlock("div", {
                    key: fronter.id,
                    class: "col-auto"
                  }, [
                    createVNode($setup["LabeledTile"], {
                      img: fronter.avatarUrl,
                      label: fronter.getName($props.detectPronouns),
                      caption: fronter.getPronouns($props.detectPronouns),
                      size: `${$props.cardWidth}px`
                    }, {
                      default: withCtx(() => [
                        fronter.description && $props.showFronterDescription ? (openBlock(), createBlock(
                          QCardSection,
                          { key: 0 },
                          {
                            default: withCtx(() => [
                              createCommentVNode(" eslint-disable vue/no-v-html -- needed for rendering "),
                              createBaseVNode("div", {
                                class: "description",
                                innerHTML: $setup.renderPkDescription(fronter.description)
                              }, null, 8, _hoisted_6),
                              createCommentVNode(" eslint-enable vue/no-v-html ")
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
                  style: normalizeStyle({ width: `${$props.cardWidth}px`, height: `${$props.cardWidth}px` })
                }, {
                  default: withCtx(() => [
                    createVNode(QImg, { ratio: "1" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          size: $props.cardWidth + "px",
                          color: "red",
                          name: "cancel"
                        }, null, 8, ["size"]),
                        _cache[2] || (_cache[2] = createBaseVNode(
                          "div",
                          { class: "absolute-bottom text-subtitle2 text-center" },
                          " No Access ",
                          -1
                          /* CACHED */
                        ))
                      ]),
                      _: 1,
                      __: [2]
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["style"])
              ]))
            ],
            64
            /* STABLE_FRAGMENT */
          )) : (openBlock(), createElementBlock("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createVNode(QCard, {
                flat: "",
                class: "justify-center row",
                style: normalizeStyle({ width: `${$props.cardWidth}px`, height: `${$props.cardWidth}px` })
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
}
const SystemView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/zowie/dev/pkstatus/src/components/StatusPage/Tile/SystemView.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TileLayout",
  props: {
    ids: { type: Array, required: true },
    fronters: { type: Object, required: true },
    systems: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const settingsStore = useSettingsStore();
    const { detectPronouns } = storeToRefs(settingsStore);
    const settings = settingsStore.status.tile;
    const __returned__ = { settingsStore, detectPronouns, settings, SystemView };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "col-12" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($props.ids, (id) => {
        return openBlock(), createElementBlock("div", {
          key: id,
          class: "row justify-left q-pa-md q-col-gutter-md"
        }, [
          createVNode($setup["SystemView"], {
            system: $props.systems[id],
            fronters: $props.fronters[id],
            "detect-pronouns": $setup.detectPronouns,
            "show-system-description": $setup.settings.showSystemDescription,
            "show-fronter-description": $setup.settings.showFronterDescription,
            "show-update-time": $setup.settings.showUpdateTime,
            "show-last-switch": $setup.settings.showLastSwitch,
            "card-width": $setup.settings.tileSize
          }, null, 8, ["system", "fronters", "detect-pronouns", "show-system-description", "show-fronter-description", "show-update-time", "show-last-switch", "card-width"])
        ]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))
  ]);
}
const TileLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/pages/status/TileLayout.vue"]]);
export {
  TileLayout as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlsZUxheW91dC1YYzhNQnlXMy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3RhdHVzUGFnZS9UaWxlL1N5c3RlbVZpZXcudnVlIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL3N0YXR1cy9UaWxlTGF5b3V0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgdi1pZj1cInN5c3RlbVwiIGNsYXNzPVwiY29sLWF1dG9cIj5cbiAgICA8cS1jYXJkIGZsYXQgOnN0eWxlPVwieyB3aWR0aDogYCR7Y2FyZFdpZHRofXB4YCB9XCI+XG4gICAgICA8bGFiZWxlZC10aWxlXG4gICAgICAgIDppbWc9XCJzeXN0ZW0uYXZhdGFyVXJsXCJcbiAgICAgICAgOmxhYmVsPVwic3lzdGVtLmdldE5hbWUoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgOmNhcHRpb249XCJzeXN0ZW0uZ2V0UHJvbm91bnMoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgOnNpemU9XCJgJHtjYXJkV2lkdGh9cHhgXCJcbiAgICAgICAgOmZhbGxiYWNrLWljb249XCJtYXRHcm91cHNcIlxuICAgICAgPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb25cbiAgICAgICAgICB2LWlmPVwiZnJvbnRlcnMgJiYgc2hvd1N0YXRzXCJcbiAgICAgICAgICA6Y2xhc3M9XCJ7ICdxLXB4LW5vbmUnOiBjYXJkV2lkdGggPCAyMjAgfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pdGVtIHYtaWY9XCJzaG93VXBkYXRlVGltZVwiPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHYtaWY9XCJjYXJkV2lkdGggPiAxODBcIiBhdmF0YXI+XG4gICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cInVwZGF0ZVwiIC8+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPiBMYXN0IHVwZGF0ZWQgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj5cbiAgICAgICAgICAgICAgICA8cmVsYXRpdmUtdGltZS1kaXNwbGF5IDp0aW1lPVwiZnJvbnRlcnMubGFzdFVwZGF0ZWRcIiAvPlxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICA8cS1pdGVtIHYtaWY9XCJzaG93TGFzdFN3aXRjaFwiPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHYtaWY9XCJjYXJkV2lkdGggPiAxODBcIiBhdmF0YXI+XG4gICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cInN3YXBfaG9yaXpcIiAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD4gTGFzdCBzd2l0Y2ggPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj5cbiAgICAgICAgICAgICAgICA8cmVsYXRpdmUtdGltZS1kaXNwbGF5IDp0aW1lPVwiZnJvbnRlcnMubGFzdFN3aXRjaFwiIC8+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgICA8cS1zZXBhcmF0b3JcbiAgICAgICAgICB2LWlmPVwic2hvd0Rlc2NyaXB0aW9uICYmIHNob3dTdGF0cyAmJiAhIXN5c3RlbS5kZXNjcmlwdGlvbj8ubGVuZ3RoXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24gdi1pZj1cInNob3dEZXNjcmlwdGlvbiAmJiAhIXN5c3RlbS5kZXNjcmlwdGlvbj8ubGVuZ3RoXCI+XG4gICAgICAgICAgPCEtLSBlc2xpbnQtZGlzYWJsZSB2dWUvbm8tdi1odG1sIC0tIG5lZWRlZCBmb3IgcmVuZGVyaW5nIC0tPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgdi1odG1sPVwicmVuZGVyUGtEZXNjcmlwdGlvbihzeXN0ZW0uZGVzY3JpcHRpb24pXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDwhLS0gZXNsaW50LWVuYWJsZSB2dWUvbm8tdi1odG1sIC0tPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPC9sYWJlbGVkLXRpbGU+XG4gICAgPC9xLWNhcmQ+XG4gIDwvZGl2PlxuICA8ZGl2IHYtZWxzZSBjbGFzcz1cImNvbC1hdXRvXCI+XG4gICAgPHEtY2FyZFxuICAgICAgZmxhdFxuICAgICAgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlciByb3dcIlxuICAgICAgOnN0eWxlPVwieyB3aWR0aDogYCR7Y2FyZFdpZHRofXB4YCwgaGVpZ2h0OiBgJHtjYXJkV2lkdGh9cHhgIH1cIlxuICAgID5cbiAgICAgIDxxLXNwaW5uZXIgY2xhc3M9XCJzZWxmLWNlbnRlclwiIGNvbG9yPVwicHJpbWFyeVwiIHdpZHRoPVwiNTAlXCIgaGVpZ2h0PVwiNTAlXCIgLz5cbiAgICA8L3EtY2FyZD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IHEtY29sLWd1dHRlci1tZFwiPlxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmcm9udGVyc1wiPlxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZyb250ZXJzLmFsbG93ZWRcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICB2LWZvcj1cImZyb250ZXIgb2YgZnJvbnRlcnMubWVtYmVyc1wiXG4gICAgICAgICAgICA6a2V5PVwiZnJvbnRlci5pZFwiXG4gICAgICAgICAgICBjbGFzcz1cImNvbC1hdXRvXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bGFiZWxlZC10aWxlXG4gICAgICAgICAgICAgIDppbWc9XCJmcm9udGVyLmF2YXRhclVybFwiXG4gICAgICAgICAgICAgIDpsYWJlbD1cImZyb250ZXIuZ2V0TmFtZShkZXRlY3RQcm9ub3VucylcIlxuICAgICAgICAgICAgICA6Y2FwdGlvbj1cImZyb250ZXIuZ2V0UHJvbm91bnMoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgICAgICAgOnNpemU9XCJgJHtjYXJkV2lkdGh9cHhgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgICAgICAgICAgdi1pZj1cImZyb250ZXIuZGVzY3JpcHRpb24gJiYgc2hvd0Zyb250ZXJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8IS0tIGVzbGludC1kaXNhYmxlIHZ1ZS9uby12LWh0bWwgLS0gbmVlZGVkIGZvciByZW5kZXJpbmcgLS0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJQa0Rlc2NyaXB0aW9uKGZyb250ZXIuZGVzY3JpcHRpb24pXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwhLS0gZXNsaW50LWVuYWJsZSB2dWUvbm8tdi1odG1sIC0tPlxuICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgPC9sYWJlbGVkLXRpbGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwiY29sLWF1dG9cIj5cbiAgICAgICAgICA8cS1jYXJkXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICA6c3R5bGU9XCJ7IHdpZHRoOiBgJHtjYXJkV2lkdGh9cHhgLCBoZWlnaHQ6IGAke2NhcmRXaWR0aH1weGAgfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtaW1nIHJhdGlvPVwiMVwiPlxuICAgICAgICAgICAgICA8cS1pY29uIDpzaXplPVwiY2FyZFdpZHRoICsgJ3B4J1wiIGNvbG9yPVwicmVkXCIgbmFtZT1cImNhbmNlbFwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZS1ib3R0b20gdGV4dC1zdWJ0aXRsZTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBObyBBY2Nlc3NcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3EtaW1nPlxuICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG9cIj5cbiAgICAgICAgICA8cS1jYXJkXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICBjbGFzcz1cImp1c3RpZnktY2VudGVyIHJvd1wiXG4gICAgICAgICAgICA6c3R5bGU9XCJ7IHdpZHRoOiBgJHtjYXJkV2lkdGh9cHhgLCBoZWlnaHQ6IGAke2NhcmRXaWR0aH1weGAgfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtc3Bpbm5lclxuICAgICAgICAgICAgICBjbGFzcz1cInNlbGYtY2VudGVyXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgd2lkdGg9XCI1MCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI1MCVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgRnJvbnRlcnMgfSBmcm9tICdzcmMvbW9kZWxzL0Zyb250ZXJzJztcbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJ3NyYy9tb2RlbHMvU3lzdGVtJztcbmltcG9ydCBSZWxhdGl2ZVRpbWVEaXNwbGF5IGZyb20gJ3NyYy9jb21wb25lbnRzL1JlbGF0aXZlVGltZURpc3BsYXkudnVlJztcbmltcG9ydCBMYWJlbGVkVGlsZSBmcm9tICdzcmMvY29tcG9uZW50cy9TdGF0dXNQYWdlL1RpbGUvTGFiZWxlZFRpbGUudnVlJztcbmltcG9ydCB7IHJlbmRlclBrRGVzY3JpcHRpb24gfSBmcm9tICdzcmMvdXRpbCc7XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBtYXRHcm91cHMgfSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBzeXN0ZW0/OiBTeXN0ZW07XG4gIGZyb250ZXJzPzogRnJvbnRlcnM7XG5cbiAgZGV0ZWN0UHJvbm91bnM6IGJvb2xlYW47XG4gIHNob3dMYXN0U3dpdGNoOiBib29sZWFuO1xuICBzaG93VXBkYXRlVGltZTogYm9vbGVhbjtcbiAgc2hvd1N5c3RlbURlc2NyaXB0aW9uOiBib29sZWFuO1xuICBzaG93RnJvbnRlckRlc2NyaXB0aW9uOiBib29sZWFuO1xuICBjYXJkV2lkdGg6IG51bWJlcjtcbn1cblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczxQcm9wcz4oKTtcbmNvbnN0IHNob3dTdGF0cyA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnNob3dMYXN0U3dpdGNoIHx8IHByb3BzLnNob3dVcGRhdGVUaW1lKTtcbmNvbnN0IHNob3dEZXNjcmlwdGlvbiA9IGNvbXB1dGVkKFxuICAoKSA9PiBwcm9wcy5zaG93U3lzdGVtRGVzY3JpcHRpb24gJiYgcHJvcHMuc3lzdGVtPy5kZXNjcmlwdGlvbixcbik7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImlkIG9mIGlkc1wiIDprZXk9XCJpZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWxlZnQgcS1wYS1tZCBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgPHN5c3RlbS12aWV3XG4gICAgICAgICAgOnN5c3RlbT1cInN5c3RlbXNbaWRdXCJcbiAgICAgICAgICA6ZnJvbnRlcnM9XCJmcm9udGVyc1tpZF1cIlxuICAgICAgICAgIDpkZXRlY3QtcHJvbm91bnM9XCJkZXRlY3RQcm9ub3Vuc1wiXG4gICAgICAgICAgOnNob3ctc3lzdGVtLWRlc2NyaXB0aW9uPVwic2V0dGluZ3Muc2hvd1N5c3RlbURlc2NyaXB0aW9uXCJcbiAgICAgICAgICA6c2hvdy1mcm9udGVyLWRlc2NyaXB0aW9uPVwic2V0dGluZ3Muc2hvd0Zyb250ZXJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgOnNob3ctdXBkYXRlLXRpbWU9XCJzZXR0aW5ncy5zaG93VXBkYXRlVGltZVwiXG4gICAgICAgICAgOnNob3ctbGFzdC1zd2l0Y2g9XCJzZXR0aW5ncy5zaG93TGFzdFN3aXRjaFwiXG4gICAgICAgICAgOmNhcmQtd2lkdGg9XCJzZXR0aW5ncy50aWxlU2l6ZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3RlbXBsYXRlPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBGcm9udGVycyB9IGZyb20gJ3NyYy9tb2RlbHMvRnJvbnRlcnMnO1xuaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnc3JjL21vZGVscy9TeXN0ZW0nO1xuaW1wb3J0IHsgdXNlU2V0dGluZ3NTdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc2V0dGluZ3Mtc3RvcmUnO1xuaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSc7XG5cbmltcG9ydCBTeXN0ZW1WaWV3IGZyb20gJ3NyYy9jb21wb25lbnRzL1N0YXR1c1BhZ2UvVGlsZS9TeXN0ZW1WaWV3LnZ1ZSc7XG5cbmNvbnN0IHNldHRpbmdzU3RvcmUgPSB1c2VTZXR0aW5nc1N0b3JlKCk7XG5jb25zdCB7IGRldGVjdFByb25vdW5zIH0gPSBzdG9yZVRvUmVmcyhzZXR0aW5nc1N0b3JlKTtcbmNvbnN0IHNldHRpbmdzID0gc2V0dGluZ3NTdG9yZS5zdGF0dXMudGlsZTtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGlkczogQXJyYXk8c3RyaW5nPjtcbiAgZnJvbnRlcnM6IFJlY29yZDxzdHJpbmcsIEZyb250ZXJzPjtcbiAgc3lzdGVtczogUmVjb3JkPHN0cmluZywgU3lzdGVtPjtcbn1cblxuZGVmaW5lUHJvcHM8UHJvcHM+KCk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfaG9pc3RlZF8xIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfY3JlYXRlVk5vZGUiLCJfbm9ybWFsaXplU3R5bGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVCbG9jayIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3JlbmRlckxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrSkEsVUFBTSxRQUFRO0FBQ2QsVUFBTSxZQUFZLFNBQVMsTUFBTSxNQUFNLGtCQUFrQixNQUFNLGNBQWM7QUFDN0UsVUFBTSxrQkFBa0I7QUFBQSxNQUN0QixNQUFBOztBQUFNLHFCQUFNLDJCQUF5QixXQUFNLFdBQU4sbUJBQWM7QUFBQTtBQUFBLElBQ3JEOzs7Ozs7Ozs7O01BckpxQkEsZUFBZ0I7QUFBQSxFQUFBLEtBQUE7QUFBQTs7O01BcUR2QixhQUFnQjtBQUFBLEVBQUEsS0FBQTtBQUFBOzs7OztNQXFDVixhQUFnQjtBQUFBLEVBQUEsS0FBQTtBQUFBOztNQWNsQixhQUFXO0FBQUEsRUFBQSxLQUFBO0FBQUE7Ozs7QUF4RzNCLFNBQUFD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
