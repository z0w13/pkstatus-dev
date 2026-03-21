import { a as QItem, b as QItemSection, Q as QItemLabel } from "./QItem-DBhEHxap.js";
import { c as createComponent, aq as useSpinnerProps, ar as useSpinner, h, J as defineComponent, _ as _export_sfc, ag as createElementBlock, T as openBlock, W as createVNode, U as withCtx, S as createBlock, a0 as createCommentVNode, ap as QAvatar, $ as createTextVNode, a2 as toDisplayString, K as useSettingsStore, L as storeToRefs, ah as usePluralKit, a as computed, r as ref, N as useQuasar, Y as createBaseVNode, X as normalizeClass, ak as Fragment, am as normalizeStyle, an as renderList } from "./index-Czhz81pV.js";
import { Q as QMarkupTable } from "./QMarkupTable-Co_abH1I.js";
import { D as DescriptionDialog } from "./DescriptionDialog-DIPOa9EK.js";
import { R as RelativeTimeDisplay } from "./RelativeTimeDisplay-DvRrdQnD.js";
import { I as InitialFallbackAvatar } from "./InitialFallbackAvatar-BwzLwT9D.js";
import "./MemberCard-BSciiHjk.js";
import "./index-BPlwBMVZ.js";
const innerHTML = '<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';
const QSpinnerDots = createComponent({
  name: "QSpinnerDots",
  props: useSpinnerProps,
  setup(props) {
    const { cSize, classes } = useSpinner(props);
    return () => h("svg", {
      class: classes.value,
      fill: "currentColor",
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 120 30",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML
    });
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableEntity",
  props: {
    showIcon: { type: Boolean, required: false, default: true },
    label: { type: String, required: true },
    caption: { type: [String, null], required: false, default: null },
    icon: { type: [String, null], required: false, default: null },
    color: { type: String, required: false, default: "primary" },
    img: { type: [String, null], required: false, default: null },
    size: { type: String, required: true },
    square: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { InitialFallbackAvatar };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createVNode(QItem, {
      dense: "",
      class: "q-pa-none"
    }, {
      default: withCtx(() => [
        $props.showIcon ? (openBlock(), createBlock(QItemSection, {
          key: 0,
          avatar: "",
          class: "col-auto q-pr-sm"
        }, {
          default: withCtx(() => [
            !$props.icon ? (openBlock(), createBlock($setup["InitialFallbackAvatar"], {
              key: 0,
              name: $props.label,
              url: $props.img,
              size: $props.size,
              square: $props.square,
              color: $props.color
            }, null, 8, ["name", "url", "size", "square", "color"])) : (openBlock(), createBlock(QAvatar, {
              key: 1,
              color: $props.color,
              icon: $props.icon,
              size: $props.size,
              square: $props.square
            }, null, 8, ["color", "icon", "size", "square"]))
          ]),
          _: 1
          /* STABLE */
        })) : createCommentVNode("v-if", true),
        createVNode(QItemSection, { class: "col-auto" }, {
          default: withCtx(() => [
            createVNode(QItemLabel, null, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString($props.label),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            $props.caption ? (openBlock(), createBlock(QItemLabel, {
              key: 0,
              caption: ""
            }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString($props.caption),
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
        })
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const TableEntity = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/zowie/dev/pkstatus/src/pages/status/Table/TableEntity.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TableLayout",
  props: {
    ids: { type: Array, required: true },
    fronters: { type: Object, required: true },
    systems: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const $q = useQuasar();
    const settingsStore = useSettingsStore();
    const { detectPronouns } = storeToRefs(settingsStore);
    const settings = settingsStore.status.table;
    const pluralKit = usePluralKit();
    const useMobileUi = computed(() => $q.screen.lt.sm || settings.forceMobileUi);
    const dialog = ref();
    const props = __props;
    const maxFront = computed(
      () => Math.max(
        ...pluralKit.fronterCache.getMulti(props.ids).map((f) => f.members.length)
      )
    );
    const rowLineHeight = computed(
      () => "line-height: " + (settings.showIcons && settings.iconSize > 34 ? `${settings.iconSize}px` : "2.4em")
    );
    const headerIconPaddingStyle = computed(
      () => settings.showIcons ? `padding-left: ${24 + settings.iconSize}px` : ""
    );
    const __returned__ = { $q, settingsStore, detectPronouns, settings, pluralKit, useMobileUi, dialog, props, maxFront, rowLineHeight, headerIconPaddingStyle, DescriptionDialog, RelativeTimeDisplay, TableEntity };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["colspan"];
const _hoisted_2 = {
  key: 0,
  align: "left"
};
const _hoisted_3 = {
  key: 0,
  align: "left"
};
const _hoisted_4 = {
  key: 1,
  align: "left"
};
const _hoisted_5 = {
  key: 0,
  valign: "top"
};
const _hoisted_6 = {
  key: 1,
  valign: "middle"
};
const _hoisted_7 = {
  key: 0,
  valign: "top",
  style: { "padding-bottom": "0" }
};
const _hoisted_8 = ["colspan"];
const _hoisted_9 = ["colspan"];
const _hoisted_10 = { valign: "middle" };
const _hoisted_11 = { key: 4 };
const _hoisted_12 = {
  key: 0,
  valign: "top"
};
const _hoisted_13 = {
  key: 0,
  valign: "top"
};
const _hoisted_14 = {
  key: 1,
  valign: "top"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createBaseVNode(
        "div",
        {
          class: normalizeClass(["row", `justify-${$setup.settings.horizontalPosition}`]),
          style: { "min-height": "inherit" }
        },
        [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(["col", "col-lg-auto", `self-${$setup.settings.verticalPosition}`])
            },
            [
              createVNode(QMarkupTable, {
                flat: $setup.$q.dark.isActive
              }, {
                default: withCtx(() => [
                  createBaseVNode("thead", null, [
                    createBaseVNode("tr", null, [
                      createBaseVNode(
                        "th",
                        {
                          align: "left",
                          style: normalizeStyle($setup.headerIconPaddingStyle)
                        },
                        "System",
                        4
                        /* STYLE */
                      ),
                      createBaseVNode("th", {
                        colspan: $setup.useMobileUi ? 1 : $setup.maxFront + 1,
                        style: normalizeStyle(`width: ${$setup.useMobileUi ? "auto" : "100%"}; ${$setup.headerIconPaddingStyle}`),
                        align: "left"
                      }, " Fronters ", 12, _hoisted_1),
                      $setup.useMobileUi ? (openBlock(), createElementBlock(
                        Fragment,
                        { key: 0 },
                        [
                          $setup.settings.showLastSwitch || $setup.settings.showUpdateTime ? (openBlock(), createElementBlock("th", _hoisted_2, [
                            createVNode(QItem, {
                              dense: "",
                              class: "q-pa-none"
                            }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, { class: "col-auto" }, {
                                  default: withCtx(() => [
                                    $setup.settings.showLastSwitch ? (openBlock(), createBlock(QItemLabel, { key: 0 }, {
                                      default: withCtx(() => _cache[0] || (_cache[0] = [
                                        createTextVNode(
                                          " Last Switch ",
                                          -1
                                          /* CACHED */
                                        )
                                      ])),
                                      _: 1,
                                      __: [0]
                                    })) : createCommentVNode("v-if", true),
                                    $setup.settings.showUpdateTime ? (openBlock(), createBlock(QItemLabel, {
                                      key: 1,
                                      caption: $setup.settings.showLastSwitch
                                    }, {
                                      default: withCtx(() => _cache[1] || (_cache[1] = [
                                        createTextVNode(
                                          " Last Update ",
                                          -1
                                          /* CACHED */
                                        )
                                      ])),
                                      _: 1,
                                      __: [1]
                                    }, 8, ["caption"])) : createCommentVNode("v-if", true)
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ]),
                              _: 1
                              /* STABLE */
                            })
                          ])) : createCommentVNode("v-if", true)
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      )) : (openBlock(), createElementBlock(
                        Fragment,
                        { key: 1 },
                        [
                          $setup.settings.showLastSwitch ? (openBlock(), createElementBlock("th", _hoisted_3, "Last Switch")) : createCommentVNode("v-if", true),
                          $setup.settings.showUpdateTime ? (openBlock(), createElementBlock("th", _hoisted_4, "Last Updated")) : createCommentVNode("v-if", true)
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ])
                  ]),
                  createBaseVNode("tbody", null, [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList($props.ids, (id) => {
                        var _a, _b;
                        return openBlock(), createElementBlock(
                          "tr",
                          {
                            key: id,
                            style: normalizeStyle($setup.rowLineHeight)
                          },
                          [
                            $props.systems[id] ? (openBlock(), createElementBlock("td", _hoisted_5, [
                              createVNode($setup["TableEntity"], {
                                img: $props.systems[id].avatarUrl,
                                size: $setup.settings.iconSize + "px",
                                label: $props.systems[id].getName($setup.detectPronouns),
                                caption: $props.systems[id].getPronouns($setup.detectPronouns),
                                square: $setup.settings.squareIcons,
                                "show-icon": $setup.settings.showIcons,
                                onClick: ($event) => $setup.dialog.show({ system: $props.systems[id] })
                              }, null, 8, ["img", "size", "label", "caption", "square", "show-icon", "onClick"])
                            ])) : (openBlock(), createElementBlock("td", _hoisted_6, [
                              createVNode(QSpinnerDots, { size: "24px" })
                            ])),
                            $props.fronters[id] ? (openBlock(), createElementBlock(
                              Fragment,
                              { key: 2 },
                              [
                                $props.fronters[id].allowed ? (openBlock(), createElementBlock(
                                  Fragment,
                                  { key: 0 },
                                  [
                                    $setup.useMobileUi ? (openBlock(), createElementBlock("td", _hoisted_7, [
                                      (openBlock(true), createElementBlock(
                                        Fragment,
                                        null,
                                        renderList($props.fronters[id].members, (member) => {
                                          return openBlock(), createBlock($setup["TableEntity"], {
                                            key: member.id,
                                            img: member.avatarUrl,
                                            size: $setup.settings.iconSize + "px",
                                            label: member.getName($setup.detectPronouns),
                                            caption: member.getPronouns($setup.detectPronouns),
                                            class: "q-mb-sm",
                                            square: $setup.settings.squareIcons,
                                            "show-icon": $setup.settings.showIcons,
                                            onClick: ($event) => $setup.dialog.show({ member, system: $props.systems[id] })
                                          }, null, 8, ["img", "size", "label", "caption", "square", "show-icon", "onClick"]);
                                        }),
                                        128
                                        /* KEYED_FRAGMENT */
                                      ))
                                    ])) : (openBlock(), createElementBlock(
                                      Fragment,
                                      { key: 1 },
                                      [
                                        (openBlock(true), createElementBlock(
                                          Fragment,
                                          null,
                                          renderList($props.fronters[id].members, (member) => {
                                            return openBlock(), createElementBlock("td", {
                                              key: member.id,
                                              valign: "top",
                                              style: { "width": "1%" }
                                            }, [
                                              createVNode($setup["TableEntity"], {
                                                img: member.avatarUrl,
                                                size: $setup.settings.iconSize + "px",
                                                label: member.getName($setup.detectPronouns),
                                                caption: member.getPronouns($setup.detectPronouns),
                                                square: $setup.settings.squareIcons,
                                                "show-icon": $setup.settings.showIcons,
                                                onClick: ($event) => $setup.dialog.show({ member, system: $props.systems[id] })
                                              }, null, 8, ["img", "size", "label", "caption", "square", "show-icon", "onClick"])
                                            ]);
                                          }),
                                          128
                                          /* KEYED_FRAGMENT */
                                        )),
                                        $setup.maxFront - ($props.fronters[id].members.length || 0) > 0 ? (openBlock(), createElementBlock("td", {
                                          key: 0,
                                          colspan: $setup.maxFront - ($props.fronters[id].members.length || 0)
                                        }, null, 8, _hoisted_8)) : createCommentVNode("v-if", true)
                                      ],
                                      64
                                      /* STABLE_FRAGMENT */
                                    ))
                                  ],
                                  64
                                  /* STABLE_FRAGMENT */
                                )) : (openBlock(), createElementBlock(
                                  Fragment,
                                  { key: 1 },
                                  [
                                    createCommentVNode(" No Access "),
                                    createBaseVNode("td", null, [
                                      createVNode($setup["TableEntity"], {
                                        label: "No Access",
                                        size: $setup.settings.iconSize + "px",
                                        icon: "close",
                                        color: "red",
                                        square: $setup.settings.squareIcons
                                      }, null, 8, ["size", "square"])
                                    ]),
                                    $setup.maxFront > 1 && !$setup.useMobileUi ? (openBlock(), createElementBlock("td", {
                                      key: 0,
                                      colspan: $setup.maxFront - 1
                                    }, null, 8, _hoisted_9)) : createCommentVNode("v-if", true)
                                  ],
                                  64
                                  /* STABLE_FRAGMENT */
                                ))
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            )) : (openBlock(), createElementBlock(
                              Fragment,
                              { key: 3 },
                              [
                                createCommentVNode(" Loading "),
                                createBaseVNode("td", _hoisted_10, [
                                  createVNode(QSpinnerDots, { size: "24px" })
                                ])
                              ],
                              2112
                              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                            )),
                            createCommentVNode(" Spacer "),
                            !$setup.useMobileUi ? (openBlock(), createElementBlock("td", _hoisted_11)) : createCommentVNode("v-if", true),
                            createCommentVNode(" Last Switch/Updated "),
                            $setup.useMobileUi ? (openBlock(), createElementBlock(
                              Fragment,
                              { key: 5 },
                              [
                                $setup.settings.showLastSwitch || $setup.settings.showUpdateTime ? (openBlock(), createElementBlock("td", _hoisted_12, [
                                  createVNode(QItem, {
                                    dense: "",
                                    class: "q-pa-none",
                                    style: normalizeStyle(`min-height: ${$setup.settings.iconSize}px`)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(
                                        QItemSection,
                                        { class: "col-auto" },
                                        {
                                          default: withCtx(() => [
                                            $setup.settings.showLastSwitch ? (openBlock(), createBlock(
                                              QItemLabel,
                                              { key: 0 },
                                              {
                                                default: withCtx(() => {
                                                  var _a2;
                                                  return [
                                                    $props.fronters[id] ? (openBlock(), createBlock($setup["RelativeTimeDisplay"], {
                                                      key: 0,
                                                      time: (_a2 = $props.fronters[id]) == null ? void 0 : _a2.lastSwitch
                                                    }, null, 8, ["time"])) : createCommentVNode("v-if", true)
                                                  ];
                                                }),
                                                _: 2
                                                /* DYNAMIC */
                                              },
                                              1024
                                              /* DYNAMIC_SLOTS */
                                            )) : createCommentVNode("v-if", true),
                                            $setup.settings.showUpdateTime ? (openBlock(), createBlock(QItemLabel, {
                                              key: 1,
                                              caption: $setup.settings.showLastSwitch
                                            }, {
                                              default: withCtx(() => {
                                                var _a2;
                                                return [
                                                  $props.fronters[id] ? (openBlock(), createBlock($setup["RelativeTimeDisplay"], {
                                                    key: 0,
                                                    time: (_a2 = $props.fronters[id]) == null ? void 0 : _a2.lastUpdated
                                                  }, null, 8, ["time"])) : createCommentVNode("v-if", true)
                                                ];
                                              }),
                                              _: 2
                                              /* DYNAMIC */
                                            }, 1032, ["caption"])) : createCommentVNode("v-if", true)
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
                                  }, 1032, ["style"])
                                ])) : createCommentVNode("v-if", true)
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            )) : (openBlock(), createElementBlock(
                              Fragment,
                              { key: 6 },
                              [
                                $setup.settings.showLastSwitch ? (openBlock(), createElementBlock("td", _hoisted_13, [
                                  $props.fronters[id] ? (openBlock(), createBlock($setup["RelativeTimeDisplay"], {
                                    key: 0,
                                    time: (_a = $props.fronters[id]) == null ? void 0 : _a.lastSwitch
                                  }, null, 8, ["time"])) : createCommentVNode("v-if", true)
                                ])) : createCommentVNode("v-if", true),
                                $setup.settings.showUpdateTime ? (openBlock(), createElementBlock("td", _hoisted_14, [
                                  $props.fronters[id] ? (openBlock(), createBlock($setup["RelativeTimeDisplay"], {
                                    key: 0,
                                    time: (_b = $props.fronters[id]) == null ? void 0 : _b.lastUpdated
                                  }, null, 8, ["time"])) : createCommentVNode("v-if", true)
                                ])) : createCommentVNode("v-if", true)
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            ))
                          ],
                          4
                          /* STYLE */
                        );
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["flat"])
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      ),
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
const TableLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/pages/status/TableLayout.vue"]]);
export {
  TableLayout as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVMYXlvdXQtaXJ4dlVoclYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xOC4yL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3Bpbm5lci9RU3Bpbm5lckRvdHMuanMiLCIuLi8uLi8uLi9zcmMvcGFnZXMvc3RhdHVzL1RhYmxlL1RhYmxlRW50aXR5LnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9zdGF0dXMvVGFibGVMYXlvdXQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGggfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VTcGlubmVyLCB7IHVzZVNwaW5uZXJQcm9wcyB9IGZyb20gJy4vdXNlLXNwaW5uZXIuanMnXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5cbmNvbnN0IGlubmVySFRNTCA9ICc8Y2lyY2xlIGN4PVwiMTVcIiBjeT1cIjE1XCIgcj1cIjE1XCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiBmcm9tPVwiMTVcIiB0bz1cIjE1XCIgYmVnaW49XCIwc1wiIGR1cj1cIjAuOHNcIiB2YWx1ZXM9XCIxNTs5OzE1XCIgY2FsY01vZGU9XCJsaW5lYXJcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImZpbGwtb3BhY2l0eVwiIGZyb209XCIxXCIgdG89XCIxXCIgYmVnaW49XCIwc1wiIGR1cj1cIjAuOHNcIiB2YWx1ZXM9XCIxOy41OzFcIiBjYWxjTW9kZT1cImxpbmVhclwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT48L2NpcmNsZT48Y2lyY2xlIGN4PVwiNjBcIiBjeT1cIjE1XCIgcj1cIjlcIiBmaWxsLW9wYWNpdHk9XCIuM1wiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgZnJvbT1cIjlcIiB0bz1cIjlcIiBiZWdpbj1cIjBzXCIgZHVyPVwiMC44c1wiIHZhbHVlcz1cIjk7MTU7OVwiIGNhbGNNb2RlPVwibGluZWFyXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJmaWxsLW9wYWNpdHlcIiBmcm9tPVwiLjVcIiB0bz1cIi41XCIgYmVnaW49XCIwc1wiIGR1cj1cIjAuOHNcIiB2YWx1ZXM9XCIuNTsxOy41XCIgY2FsY01vZGU9XCJsaW5lYXJcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+PC9jaXJjbGU+PGNpcmNsZSBjeD1cIjEwNVwiIGN5PVwiMTVcIiByPVwiMTVcIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIGZyb209XCIxNVwiIHRvPVwiMTVcIiBiZWdpbj1cIjBzXCIgZHVyPVwiMC44c1wiIHZhbHVlcz1cIjE1Ozk7MTVcIiBjYWxjTW9kZT1cImxpbmVhclwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiZmlsbC1vcGFjaXR5XCIgZnJvbT1cIjFcIiB0bz1cIjFcIiBiZWdpbj1cIjBzXCIgZHVyPVwiMC44c1wiIHZhbHVlcz1cIjE7LjU7MVwiIGNhbGNNb2RlPVwibGluZWFyXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPjwvY2lyY2xlPidcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTcGlubmVyRG90cycsXG5cbiAgcHJvcHM6IHVzZVNwaW5uZXJQcm9wcyxcblxuICBzZXR1cCAocHJvcHMpIHtcbiAgICBjb25zdCB7IGNTaXplLCBjbGFzc2VzIH0gPSB1c2VTcGlubmVyKHByb3BzKVxuICAgIHJldHVybiAoKSA9PiBoKCdzdmcnLCB7XG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgd2lkdGg6IGNTaXplLnZhbHVlLFxuICAgICAgaGVpZ2h0OiBjU2l6ZS52YWx1ZSxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMTIwIDMwJyxcbiAgICAgIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICAgICAgaW5uZXJIVE1MXG4gICAgfSlcbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cS1pdGVtIGRlbnNlIGNsYXNzPVwicS1wYS1ub25lXCI+XG4gICAgICA8cS1pdGVtLXNlY3Rpb24gdi1pZj1cInNob3dJY29uXCIgYXZhdGFyIGNsYXNzPVwiY29sLWF1dG8gcS1wci1zbVwiPlxuICAgICAgICA8aW5pdGlhbC1mYWxsYmFjay1hdmF0YXJcbiAgICAgICAgICB2LWlmPVwiIWljb25cIlxuICAgICAgICAgIDpuYW1lPVwibGFiZWxcIlxuICAgICAgICAgIDp1cmw9XCJpbWdcIlxuICAgICAgICAgIDpzaXplPVwic2l6ZVwiXG4gICAgICAgICAgOnNxdWFyZT1cInNxdWFyZVwiXG4gICAgICAgICAgOmNvbG9yPVwiY29sb3JcIlxuICAgICAgICAvPlxuICAgICAgICA8cS1hdmF0YXJcbiAgICAgICAgICB2LWVsc2VcbiAgICAgICAgICA6Y29sb3I9XCJjb2xvclwiXG4gICAgICAgICAgOmljb249XCJpY29uXCJcbiAgICAgICAgICA6c2l6ZT1cInNpemVcIlxuICAgICAgICAgIDpzcXVhcmU9XCJzcXVhcmVcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cImNvbC1hdXRvXCI+XG4gICAgICAgIDxxLWl0ZW0tbGFiZWw+XG4gICAgICAgICAge3sgbGFiZWwgfX1cbiAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDxxLWl0ZW0tbGFiZWwgdi1pZj1cImNhcHRpb25cIiBjYXB0aW9uPnt7IGNhcHRpb24gfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPC9xLWl0ZW0+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCBJbml0aWFsRmFsbGJhY2tBdmF0YXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvSW5pdGlhbEZhbGxiYWNrQXZhdGFyLnZ1ZSc7XG5cbndpdGhEZWZhdWx0cyhcbiAgZGVmaW5lUHJvcHM8e1xuICAgIHNob3dJY29uPzogYm9vbGVhbjtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGNhcHRpb24/OiBzdHJpbmcgfCBudWxsO1xuICAgIGljb24/OiBzdHJpbmcgfCBudWxsO1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIGltZz86IHN0cmluZyB8IG51bGw7XG4gICAgc2l6ZTogc3RyaW5nO1xuICAgIHNxdWFyZT86IGJvb2xlYW47XG4gIH0+KCksXG4gIHtcbiAgICBzaG93SWNvbjogdHJ1ZSxcbiAgICBjYXB0aW9uOiBudWxsLFxuICAgIGljb246IG51bGwsXG4gICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICBpbWc6IG51bGwsXG4gICAgc3F1YXJlOiBmYWxzZSxcbiAgfSxcbik7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIDpjbGFzcz1cIlsncm93JywgYGp1c3RpZnktJHtzZXR0aW5ncy5ob3Jpem9udGFsUG9zaXRpb259YF1cIlxuICAgIHN0eWxlPVwibWluLWhlaWdodDogaW5oZXJpdFwiXG4gID5cbiAgICA8ZGl2IDpjbGFzcz1cIlsnY29sJywgJ2NvbC1sZy1hdXRvJywgYHNlbGYtJHtzZXR0aW5ncy52ZXJ0aWNhbFBvc2l0aW9ufWBdXCI+XG4gICAgICA8cS1tYXJrdXAtdGFibGUgOmZsYXQ9XCIkcS5kYXJrLmlzQWN0aXZlXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggYWxpZ249XCJsZWZ0XCIgOnN0eWxlPVwiaGVhZGVySWNvblBhZGRpbmdTdHlsZVwiPlN5c3RlbTwvdGg+XG4gICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgOmNvbHNwYW49XCJ1c2VNb2JpbGVVaSA/IDEgOiBtYXhGcm9udCArIDFcIlxuICAgICAgICAgICAgICA6c3R5bGU9XCJgd2lkdGg6ICR7dXNlTW9iaWxlVWkgPyAnYXV0bycgOiAnMTAwJSd9OyAke2hlYWRlckljb25QYWRkaW5nU3R5bGV9YFwiXG4gICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEZyb250ZXJzXG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJ1c2VNb2JpbGVVaVwiPlxuICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICB2LWlmPVwic2V0dGluZ3Muc2hvd0xhc3RTd2l0Y2ggfHwgc2V0dGluZ3Muc2hvd1VwZGF0ZVRpbWVcIlxuICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGRlbnNlIGNsYXNzPVwicS1wYS1ub25lXCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gY2xhc3M9XCJjb2wtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIHYtaWY9XCJzZXR0aW5ncy5zaG93TGFzdFN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgIExhc3QgU3dpdGNoXG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInNldHRpbmdzLnNob3dVcGRhdGVUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICA6Y2FwdGlvbj1cInNldHRpbmdzLnNob3dMYXN0U3dpdGNoXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIExhc3QgVXBkYXRlXG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICA8dGggdi1pZj1cInNldHRpbmdzLnNob3dMYXN0U3dpdGNoXCIgYWxpZ249XCJsZWZ0XCI+TGFzdCBTd2l0Y2g8L3RoPlxuICAgICAgICAgICAgICA8dGggdi1pZj1cInNldHRpbmdzLnNob3dVcGRhdGVUaW1lXCIgYWxpZ249XCJsZWZ0XCI+TGFzdCBVcGRhdGVkPC90aD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0ciB2LWZvcj1cImlkIGluIGlkc1wiIDprZXk9XCJpZFwiIDpzdHlsZT1cInJvd0xpbmVIZWlnaHRcIj5cbiAgICAgICAgICAgIDx0ZCB2LWlmPVwic3lzdGVtc1tpZF1cIiB2YWxpZ249XCJ0b3BcIj5cbiAgICAgICAgICAgICAgPHRhYmxlLWVudGl0eVxuICAgICAgICAgICAgICAgIDppbWc9XCJzeXN0ZW1zW2lkXS5hdmF0YXJVcmxcIlxuICAgICAgICAgICAgICAgIDpzaXplPVwic2V0dGluZ3MuaWNvblNpemUgKyAncHgnXCJcbiAgICAgICAgICAgICAgICA6bGFiZWw9XCJzeXN0ZW1zW2lkXS5nZXROYW1lKGRldGVjdFByb25vdW5zKVwiXG4gICAgICAgICAgICAgICAgOmNhcHRpb249XCJzeXN0ZW1zW2lkXS5nZXRQcm9ub3VucyhkZXRlY3RQcm9ub3VucylcIlxuICAgICAgICAgICAgICAgIDpzcXVhcmU9XCJzZXR0aW5ncy5zcXVhcmVJY29uc1wiXG4gICAgICAgICAgICAgICAgOnNob3ctaWNvbj1cInNldHRpbmdzLnNob3dJY29uc1wiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiZGlhbG9nLnNob3coeyBzeXN0ZW06IHN5c3RlbXNbaWRdIH0pXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgdi1lbHNlIHZhbGlnbj1cIm1pZGRsZVwiPlxuICAgICAgICAgICAgICA8cS1zcGlubmVyLWRvdHMgc2l6ZT1cIjI0cHhcIiAvPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZnJvbnRlcnNbaWRdXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZnJvbnRlcnNbaWRdLmFsbG93ZWRcIj5cbiAgICAgICAgICAgICAgICA8dGQgdi1pZj1cInVzZU1vYmlsZVVpXCIgdmFsaWduPVwidG9wXCIgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTogMFwiPlxuICAgICAgICAgICAgICAgICAgPHRhYmxlLWVudGl0eVxuICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIm1lbWJlciBvZiBmcm9udGVyc1tpZF0ubWVtYmVyc1wiXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJtZW1iZXIuaWRcIlxuICAgICAgICAgICAgICAgICAgICA6aW1nPVwibWVtYmVyLmF2YXRhclVybFwiXG4gICAgICAgICAgICAgICAgICAgIDpzaXplPVwic2V0dGluZ3MuaWNvblNpemUgKyAncHgnXCJcbiAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwibWVtYmVyLmdldE5hbWUoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgICAgICAgICAgICAgOmNhcHRpb249XCJtZW1iZXIuZ2V0UHJvbm91bnMoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJxLW1iLXNtXCJcbiAgICAgICAgICAgICAgICAgICAgOnNxdWFyZT1cInNldHRpbmdzLnNxdWFyZUljb25zXCJcbiAgICAgICAgICAgICAgICAgICAgOnNob3ctaWNvbj1cInNldHRpbmdzLnNob3dJY29uc1wiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRpYWxvZy5zaG93KHsgbWVtYmVyLCBzeXN0ZW06IHN5c3RlbXNbaWRdIH0pXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVwibWVtYmVyIG9mIGZyb250ZXJzW2lkXS5tZW1iZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cIm1lbWJlci5pZFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbGlnbj1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDElXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWVudGl0eVxuICAgICAgICAgICAgICAgICAgICAgIDppbWc9XCJtZW1iZXIuYXZhdGFyVXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICA6c2l6ZT1cInNldHRpbmdzLmljb25TaXplICsgJ3B4J1wiXG4gICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwibWVtYmVyLmdldE5hbWUoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6Y2FwdGlvbj1cIm1lbWJlci5nZXRQcm9ub3VucyhkZXRlY3RQcm9ub3VucylcIlxuICAgICAgICAgICAgICAgICAgICAgIDpzcXVhcmU9XCJzZXR0aW5ncy5zcXVhcmVJY29uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgOnNob3ctaWNvbj1cInNldHRpbmdzLnNob3dJY29uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZGlhbG9nLnNob3coeyBtZW1iZXIsIHN5c3RlbTogc3lzdGVtc1tpZF0gfSlcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwibWF4RnJvbnQgLSAoZnJvbnRlcnNbaWRdLm1lbWJlcnMubGVuZ3RoIHx8IDApID4gMFwiXG4gICAgICAgICAgICAgICAgICAgIDpjb2xzcGFuPVwibWF4RnJvbnQgLSAoZnJvbnRlcnNbaWRdLm1lbWJlcnMubGVuZ3RoIHx8IDApXCJcbiAgICAgICAgICAgICAgICAgID48L3RkPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwhLS0gTm8gQWNjZXNzIC0tPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDx0YWJsZS1lbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJObyBBY2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICA6c2l6ZT1cInNldHRpbmdzLmljb25TaXplICsgJ3B4J1wiXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgOnNxdWFyZT1cInNldHRpbmdzLnNxdWFyZUljb25zXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgIHYtaWY9XCJtYXhGcm9udCA+IDEgJiYgIXVzZU1vYmlsZVVpXCJcbiAgICAgICAgICAgICAgICAgIDpjb2xzcGFuPVwibWF4RnJvbnQgLSAxXCJcbiAgICAgICAgICAgICAgICA+PC90ZD5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8IS0tIExvYWRpbmcgLS0+XG4gICAgICAgICAgICA8dGQgdi1lbHNlIHZhbGlnbj1cIm1pZGRsZVwiPlxuICAgICAgICAgICAgICA8cS1zcGlubmVyLWRvdHMgc2l6ZT1cIjI0cHhcIiAvPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwhLS0gU3BhY2VyIC0tPlxuICAgICAgICAgICAgPHRkIHYtaWY9XCIhdXNlTW9iaWxlVWlcIiAvPlxuICAgICAgICAgICAgPCEtLSBMYXN0IFN3aXRjaC9VcGRhdGVkIC0tPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJ1c2VNb2JpbGVVaVwiPlxuICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICB2LWlmPVwic2V0dGluZ3Muc2hvd0xhc3RTd2l0Y2ggfHwgc2V0dGluZ3Muc2hvd1VwZGF0ZVRpbWVcIlxuICAgICAgICAgICAgICAgIHZhbGlnbj1cInRvcFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJxLXBhLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgOnN0eWxlPVwiYG1pbi1oZWlnaHQ6ICR7c2V0dGluZ3MuaWNvblNpemV9cHhgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gY2xhc3M9XCJjb2wtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIHYtaWY9XCJzZXR0aW5ncy5zaG93TGFzdFN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxyZWxhdGl2ZS10aW1lLWRpc3BsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJmcm9udGVyc1tpZF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnRpbWU9XCJmcm9udGVyc1tpZF0/Lmxhc3RTd2l0Y2hcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInNldHRpbmdzLnNob3dVcGRhdGVUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICA6Y2FwdGlvbj1cInNldHRpbmdzLnNob3dMYXN0U3dpdGNoXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxyZWxhdGl2ZS10aW1lLWRpc3BsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJmcm9udGVyc1tpZF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnRpbWU9XCJmcm9udGVyc1tpZF0/Lmxhc3RVcGRhdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgPHRkIHYtaWY9XCJzZXR0aW5ncy5zaG93TGFzdFN3aXRjaFwiIHZhbGlnbj1cInRvcFwiPlxuICAgICAgICAgICAgICAgIDxyZWxhdGl2ZS10aW1lLWRpc3BsYXlcbiAgICAgICAgICAgICAgICAgIHYtaWY9XCJmcm9udGVyc1tpZF1cIlxuICAgICAgICAgICAgICAgICAgOnRpbWU9XCJmcm9udGVyc1tpZF0/Lmxhc3RTd2l0Y2hcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVwic2V0dGluZ3Muc2hvd1VwZGF0ZVRpbWVcIiB2YWxpZ249XCJ0b3BcIj5cbiAgICAgICAgICAgICAgICA8cmVsYXRpdmUtdGltZS1kaXNwbGF5XG4gICAgICAgICAgICAgICAgICB2LWlmPVwiZnJvbnRlcnNbaWRdXCJcbiAgICAgICAgICAgICAgICAgIDp0aW1lPVwiZnJvbnRlcnNbaWRdPy5sYXN0VXBkYXRlZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvcS1tYXJrdXAtdGFibGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkZXNjcmlwdGlvbi1kaWFsb2cgcmVmPVwiZGlhbG9nXCIgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJztcblxuaW1wb3J0IHsgRnJvbnRlcnMgfSBmcm9tICdzcmMvbW9kZWxzL0Zyb250ZXJzJztcbmltcG9ydCB7IHVzZVNldHRpbmdzU3RvcmUgfSBmcm9tICdzcmMvc3RvcmVzL3NldHRpbmdzLXN0b3JlJztcbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJ3NyYy9tb2RlbHMvU3lzdGVtJztcbmltcG9ydCB7IHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJztcblxuaW1wb3J0IERlc2NyaXB0aW9uRGlhbG9nIGZyb20gJ3NyYy9jb21wb25lbnRzL0Rlc2NyaXB0aW9uRGlhbG9nLnZ1ZSc7XG5pbXBvcnQgUmVsYXRpdmVUaW1lRGlzcGxheSBmcm9tICdzcmMvY29tcG9uZW50cy9SZWxhdGl2ZVRpbWVEaXNwbGF5LnZ1ZSc7XG5pbXBvcnQgVGFibGVFbnRpdHkgZnJvbSAnc3JjL3BhZ2VzL3N0YXR1cy9UYWJsZS9UYWJsZUVudGl0eS52dWUnO1xuaW1wb3J0IHsgdXNlUGx1cmFsS2l0IH0gZnJvbSAnYm9vdC9wbHVyYWxLaXQnO1xuXG5jb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuXG5jb25zdCBzZXR0aW5nc1N0b3JlID0gdXNlU2V0dGluZ3NTdG9yZSgpO1xuY29uc3QgeyBkZXRlY3RQcm9ub3VucyB9ID0gc3RvcmVUb1JlZnMoc2V0dGluZ3NTdG9yZSk7XG5jb25zdCBzZXR0aW5ncyA9IHNldHRpbmdzU3RvcmUuc3RhdHVzLnRhYmxlO1xuY29uc3QgcGx1cmFsS2l0ID0gdXNlUGx1cmFsS2l0KCk7XG5cbmNvbnN0IHVzZU1vYmlsZVVpID0gY29tcHV0ZWQoKCkgPT4gJHEuc2NyZWVuLmx0LnNtIHx8IHNldHRpbmdzLmZvcmNlTW9iaWxlVWkpO1xuY29uc3QgZGlhbG9nID0gcmVmKCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBpZHM6IEFycmF5PHN0cmluZz47XG4gIGZyb250ZXJzOiBSZWNvcmQ8c3RyaW5nLCBGcm9udGVycz47XG4gIHN5c3RlbXM6IFJlY29yZDxzdHJpbmcsIFN5c3RlbT47XG59XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8UHJvcHM+KCk7XG5cbmNvbnN0IG1heEZyb250ID0gY29tcHV0ZWQoKCkgPT5cbiAgTWF0aC5tYXgoXG4gICAgLi4ucGx1cmFsS2l0LmZyb250ZXJDYWNoZS5nZXRNdWx0aShwcm9wcy5pZHMpLm1hcCgoZikgPT4gZi5tZW1iZXJzLmxlbmd0aCksXG4gICksXG4pO1xuXG5jb25zdCByb3dMaW5lSGVpZ2h0ID0gY29tcHV0ZWQoXG4gICgpID0+XG4gICAgJ2xpbmUtaGVpZ2h0OiAnICtcbiAgICAoc2V0dGluZ3Muc2hvd0ljb25zICYmIHNldHRpbmdzLmljb25TaXplID4gMzRcbiAgICAgID8gYCR7c2V0dGluZ3MuaWNvblNpemV9cHhgXG4gICAgICA6ICcyLjRlbScpLFxuKTtcbmNvbnN0IGhlYWRlckljb25QYWRkaW5nU3R5bGUgPSBjb21wdXRlZCgoKSA9PlxuICBzZXR0aW5ncy5zaG93SWNvbnMgPyBgcGFkZGluZy1sZWZ0OiAkezI0ICsgc2V0dGluZ3MuaWNvblNpemV9cHhgIDogJycsXG4pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJfRnJhZ21lbnQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX25vcm1hbGl6ZVN0eWxlIiwiX3JlbmRlckxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0EsTUFBTSxZQUFZO0FBRWxCLE1BQUEsZUFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsRUFFUCxNQUFPLE9BQU87QUFDWixVQUFNLEVBQUUsT0FBTyxRQUFTLElBQUcsV0FBVyxLQUFLO0FBQzNDLFdBQU8sTUFBTSxFQUFFLE9BQU87QUFBQSxNQUNwQixPQUFPLFFBQVE7QUFBQSxNQUNmLE1BQU07QUFBQSxNQUNOLE9BQU8sTUFBTTtBQUFBLE1BQ2IsUUFBUSxNQUFNO0FBQUEsTUFDZCxTQUFTO0FBQUEsTUFDVCxPQUFPO0FBQUEsTUFDUDtBQUFBLElBQ0QsQ0FBQTtBQUFBLEVBQ0w7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0N0QldBLFVBQUssR0FBQUMsbUJBQUEsT0FBQSxNQUFBO0FBQUEsSUFBQUMsWUFBTyxPQUFXO0FBQUEsTUFBQSxPQUFBO0FBQUE7O01BQzdCLFNBQUFDLFFBQUEsTUFBQTtBQUFBLFFBQXNDLE9BQUEsWUFBQUgsYUFBQUksWUFBQSxjQUFBO0FBQUEsVUFBQyxLQUFLO0FBQUEsVUFBQSxRQUFBO0FBQUE7O1VBQzFDLFNBQUFELFFBQUEsTUFBQTtBQUFBLFlBQUEsQ0FBQSxPQUFBLFFBQUFILFVBQUEsR0FFY0ksWUFBQSxPQUFBLHVCQUFBLEdBQUE7QUFBQSxjQUNYLEtBQUs7QUFBQSxjQUNMLE1BQU0sT0FBQTtBQUFBLGNBQ04sS0FBUSxPQUFBO0FBQUEs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
