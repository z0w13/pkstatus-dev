import { h, c as createComponent, aQ as useSpinnerProps, aR as useSpinner, Q as defineComponent, V as openBlock, aE as createElementBlock, Y as createVNode, X as withCtx, W as createBlock, aP as QAvatar, a4 as createCommentVNode, a1 as createTextVNode, a5 as toDisplayString, af as _export_sfc, S as useQuasar, R as useSettingsStore, T as storeToRefs, aC as useServices, d as computed, r as ref, a2 as createBaseVNode, Z as normalizeClass, _ as unref, aF as Fragment, aM as normalizeStyle, aO as renderList } from "./index-C1u-_TOv.js";
import { Q as QMarkupTable } from "./QMarkupTable-BsLt63RP.js";
import { D as DescriptionDialog } from "./DescriptionDialog-B1LiVJwM.js";
import { R as RelativeTimeDisplay } from "./RelativeTimeDisplay-SNX72-cs.js";
import { b as QItemSection, Q as QItemLabel, a as QItem } from "./QItem-4sCyJUzG.js";
import { I as InitialFallbackAvatar } from "./InitialFallbackAvatar-B9wHc8ll.js";
import "./MemberCard-Bif0S6_X.js";
import "./index-DRTIEHtT.js";
const svg = [
  h("circle", {
    cx: "15",
    cy: "15",
    r: "15"
  }, [
    h("animate", {
      attributeName: "r",
      from: "15",
      to: "15",
      begin: "0s",
      dur: "0.8s",
      values: "15;9;15",
      calcMode: "linear",
      repeatCount: "indefinite"
    }),
    h("animate", {
      attributeName: "fill-opacity",
      from: "1",
      to: "1",
      begin: "0s",
      dur: "0.8s",
      values: "1;.5;1",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  ]),
  h("circle", {
    cx: "60",
    cy: "15",
    r: "9",
    "fill-opacity": ".3"
  }, [
    h("animate", {
      attributeName: "r",
      from: "9",
      to: "9",
      begin: "0s",
      dur: "0.8s",
      values: "9;15;9",
      calcMode: "linear",
      repeatCount: "indefinite"
    }),
    h("animate", {
      attributeName: "fill-opacity",
      from: ".5",
      to: ".5",
      begin: "0s",
      dur: "0.8s",
      values: ".5;1;.5",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  ]),
  h("circle", {
    cx: "105",
    cy: "15",
    r: "15"
  }, [
    h("animate", {
      attributeName: "r",
      from: "15",
      to: "15",
      begin: "0s",
      dur: "0.8s",
      values: "15;9;15",
      calcMode: "linear",
      repeatCount: "indefinite"
    }),
    h("animate", {
      attributeName: "fill-opacity",
      from: "1",
      to: "1",
      begin: "0s",
      dur: "0.8s",
      values: "1;.5;1",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  ])
];
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
      xmlns: "http://www.w3.org/2000/svg"
    }, svg);
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
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(QItem, {
          dense: "",
          class: "q-pa-none"
        }, {
          default: withCtx(() => [
            _ctx.showIcon ? (openBlock(), createBlock(QItemSection, {
              key: 0,
              avatar: "",
              class: "col-auto q-pr-sm"
            }, {
              default: withCtx(() => [
                !_ctx.icon ? (openBlock(), createBlock(InitialFallbackAvatar, {
                  key: 0,
                  name: _ctx.label,
                  url: _ctx.img,
                  size: _ctx.size,
                  square: _ctx.square,
                  color: _ctx.color
                }, null, 8, ["name", "url", "size", "square", "color"])) : (openBlock(), createBlock(QAvatar, {
                  key: 1,
                  color: _ctx.color,
                  icon: _ctx.icon,
                  size: _ctx.size,
                  square: _ctx.square
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
                      toDisplayString(_ctx.label),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }),
                _ctx.caption ? (openBlock(), createBlock(QItemLabel, {
                  key: 0,
                  caption: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString(_ctx.caption),
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
    };
  }
});
const TableEntity = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "/home/zowie/dev/pkstatus/src/pages/status/Table/TableEntity.vue"]]);
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "th",
  null,
  "System",
  -1
  /* HOISTED */
);
const _hoisted_2 = ["colspan"];
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
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
  key: 5,
  valign: "top"
};
const _hoisted_13 = {
  key: 6,
  valign: "top"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TableLayout",
  props: {
    ids: { type: Array, required: true },
    fronters: { type: Object, required: true },
    systems: { type: Object, required: true }
  },
  setup(__props) {
    const $q = useQuasar();
    const settingsStore = useSettingsStore();
    const { detectPronouns } = storeToRefs(settingsStore);
    const settings = settingsStore.status.table;
    const { fronterCache } = useServices();
    const useMobileUi = computed(() => $q.screen.lt.sm || settings.forceMobileUi);
    const dialog = ref();
    const props = __props;
    const maxFront = computed(
      () => Math.max(
        ...fronterCache.getMultiCached(props.ids).map((f) => f.members.length)
      )
    );
    const rowLineHeight = computed(
      () => "line-height: " + (settings.showIcons && settings.iconSize > 34 ? `${settings.iconSize}px` : "2.4em")
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(["row", `justify-${unref(settings).horizontalPosition}`]),
              style: { "min-height": "inherit" }
            },
            [
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(["col", "col-lg-auto", `self-${unref(settings).verticalPosition}`])
                },
                [
                  createVNode(QMarkupTable, {
                    flat: unref($q).dark.isActive
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("thead", null, [
                        createBaseVNode(
                          "tr",
                          {
                            style: normalizeStyle(rowLineHeight.value)
                          },
                          [
                            _hoisted_1,
                            createBaseVNode("th", {
                              colspan: useMobileUi.value ? 1 : maxFront.value + 1,
                              style: normalizeStyle({ width: useMobileUi.value ? "auto" : "100%" })
                            }, " Fronters ", 12, _hoisted_2),
                            unref(settings).showLastSwitch ? (openBlock(), createElementBlock("th", _hoisted_3, "Last Switch")) : createCommentVNode("v-if", true),
                            unref(settings).showUpdateTime ? (openBlock(), createElementBlock("th", _hoisted_4, "Last Update")) : createCommentVNode("v-if", true)
                          ],
                          4
                          /* STYLE */
                        )
                      ]),
                      createBaseVNode("tbody", null, [
                        (openBlock(true), createElementBlock(
                          Fragment,
                          null,
                          renderList(_ctx.ids, (id) => {
                            var _a, _b;
                            return openBlock(), createElementBlock(
                              "tr",
                              {
                                key: id,
                                style: normalizeStyle(rowLineHeight.value)
                              },
                              [
                                _ctx.systems[id] ? (openBlock(), createElementBlock("td", _hoisted_5, [
                                  createVNode(TableEntity, {
                                    img: _ctx.systems[id].avatarUrl,
                                    size: unref(settings).iconSize + "px",
                                    label: _ctx.systems[id].getName(unref(detectPronouns)),
                                    caption: _ctx.systems[id].getPronouns(unref(detectPronouns)),
                                    square: unref(settings).squareIcons,
                                    "show-icon": unref(settings).showIcons,
                                    onClick: ($event) => dialog.value.show({ system: _ctx.systems[id] })
                                  }, null, 8, ["img", "size", "label", "caption", "square", "show-icon", "onClick"])
                                ])) : (openBlock(), createElementBlock("td", _hoisted_6, [
                                  createVNode(QSpinnerDots, { size: "24px" })
                                ])),
                                _ctx.fronters[id] ? (openBlock(), createElementBlock(
                                  Fragment,
                                  { key: 2 },
                                  [
                                    _ctx.fronters[id].allowed ? (openBlock(), createElementBlock(
                                      Fragment,
                                      { key: 0 },
                                      [
                                        useMobileUi.value ? (openBlock(), createElementBlock("td", _hoisted_7, [
                                          (openBlock(true), createElementBlock(
                                            Fragment,
                                            null,
                                            renderList(_ctx.fronters[id].members, (member) => {
                                              return openBlock(), createBlock(TableEntity, {
                                                key: member.id,
                                                img: member.avatarUrl,
                                                size: unref(settings).iconSize + "px",
                                                label: member.getName(unref(detectPronouns)),
                                                caption: member.getPronouns(unref(detectPronouns)),
                                                class: "q-mb-sm",
                                                square: unref(settings).squareIcons,
                                                "show-icon": unref(settings).showIcons,
                                                onClick: ($event) => dialog.value.show({ member, system: _ctx.systems[id] })
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
                                              renderList(_ctx.fronters[id].members, (member) => {
                                                return openBlock(), createElementBlock("td", {
                                                  key: member.id,
                                                  valign: "top",
                                                  style: { "width": "1%" }
                                                }, [
                                                  createVNode(TableEntity, {
                                                    img: member.avatarUrl,
                                                    size: unref(settings).iconSize + "px",
                                                    label: member.getName(unref(detectPronouns)),
                                                    caption: member.getPronouns(unref(detectPronouns)),
                                                    square: unref(settings).squareIcons,
                                                    "show-icon": unref(settings).showIcons,
                                                    onClick: ($event) => dialog.value.show({ member, system: _ctx.systems[id] })
                                                  }, null, 8, ["img", "size", "label", "caption", "square", "show-icon", "onClick"])
                                                ]);
                                              }),
                                              128
                                              /* KEYED_FRAGMENT */
                                            )),
                                            maxFront.value - (_ctx.fronters[id].members.length || 0) > 0 ? (openBlock(), createElementBlock("td", {
                                              key: 0,
                                              colspan: maxFront.value - (_ctx.fronters[id].members.length || 0)
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
                                          createVNode(TableEntity, {
                                            label: "No Access",
                                            size: unref(settings).iconSize + "px",
                                            icon: "close",
                                            color: "red",
                                            square: unref(settings).squareIcons
                                          }, null, 8, ["size", "square"])
                                        ]),
                                        maxFront.value > 1 && !useMobileUi.value ? (openBlock(), createElementBlock("td", {
                                          key: 0,
                                          colspan: maxFront.value - 1
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
                                !useMobileUi.value ? (openBlock(), createElementBlock("td", _hoisted_11)) : createCommentVNode("v-if", true),
                                createCommentVNode(" Last Switch "),
                                unref(settings).showLastSwitch ? (openBlock(), createElementBlock("td", _hoisted_12, [
                                  _ctx.fronters[id] ? (openBlock(), createBlock(RelativeTimeDisplay, {
                                    key: 0,
                                    time: (_a = _ctx.fronters[id]) == null ? void 0 : _a.lastSwitch
                                  }, null, 8, ["time"])) : createCommentVNode("v-if", true)
                                ])) : createCommentVNode("v-if", true),
                                createCommentVNode(" Last Updated "),
                                unref(settings).showUpdateTime ? (openBlock(), createElementBlock("td", _hoisted_13, [
                                  _ctx.fronters[id] ? (openBlock(), createBlock(RelativeTimeDisplay, {
                                    key: 0,
                                    time: (_b = _ctx.fronters[id]) == null ? void 0 : _b.lastUpdated
                                  }, null, 8, ["time"])) : createCommentVNode("v-if", true)
                                ])) : createCommentVNode("v-if", true)
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
const TableLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/zowie/dev/pkstatus/src/pages/status/TableLayout.vue"]]);
export {
  TableLayout as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVMYXlvdXQtQi1fRUpOTzQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWFzYXJAMi4xNS4yL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3Bpbm5lci9RU3Bpbm5lckRvdHMuanMiLCIuLi8uLi8uLi9zcmMvcGFnZXMvc3RhdHVzL1RhYmxlTGF5b3V0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlU3Bpbm5lciwgeyB1c2VTcGlubmVyUHJvcHMgfSBmcm9tICcuL3VzZS1zcGlubmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuY29uc3Qgc3ZnID0gW1xuICBoKCdjaXJjbGUnLCB7XG4gICAgY3g6ICcxNScsXG4gICAgY3k6ICcxNScsXG4gICAgcjogJzE1J1xuICB9LCBbXG4gICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdyJyxcbiAgICAgIGZyb206ICcxNScsXG4gICAgICB0bzogJzE1JyxcbiAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgZHVyOiAnMC44cycsXG4gICAgICB2YWx1ZXM6ICcxNTs5OzE1JyxcbiAgICAgIGNhbGNNb2RlOiAnbGluZWFyJyxcbiAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICB9KSxcbiAgICBoKCdhbmltYXRlJywge1xuICAgICAgYXR0cmlidXRlTmFtZTogJ2ZpbGwtb3BhY2l0eScsXG4gICAgICBmcm9tOiAnMScsXG4gICAgICB0bzogJzEnLFxuICAgICAgYmVnaW46ICcwcycsXG4gICAgICBkdXI6ICcwLjhzJyxcbiAgICAgIHZhbHVlczogJzE7LjU7MScsXG4gICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgfSlcbiAgXSksXG4gIGgoJ2NpcmNsZScsIHtcbiAgICBjeDogJzYwJyxcbiAgICBjeTogJzE1JyxcbiAgICByOiAnOScsXG4gICAgJ2ZpbGwtb3BhY2l0eSc6ICcuMydcbiAgfSwgW1xuICAgIGgoJ2FuaW1hdGUnLCB7XG4gICAgICBhdHRyaWJ1dGVOYW1lOiAncicsXG4gICAgICBmcm9tOiAnOScsXG4gICAgICB0bzogJzknLFxuICAgICAgYmVnaW46ICcwcycsXG4gICAgICBkdXI6ICcwLjhzJyxcbiAgICAgIHZhbHVlczogJzk7MTU7OScsXG4gICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgfSksXG4gICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdmaWxsLW9wYWNpdHknLFxuICAgICAgZnJvbTogJy41JyxcbiAgICAgIHRvOiAnLjUnLFxuICAgICAgYmVnaW46ICcwcycsXG4gICAgICBkdXI6ICcwLjhzJyxcbiAgICAgIHZhbHVlczogJy41OzE7LjUnLFxuICAgICAgY2FsY01vZGU6ICdsaW5lYXInLFxuICAgICAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJ1xuICAgIH0pXG4gIF0pLFxuICBoKCdjaXJjbGUnLCB7XG4gICAgY3g6ICcxMDUnLFxuICAgIGN5OiAnMTUnLFxuICAgIHI6ICcxNSdcbiAgfSwgW1xuICAgIGgoJ2FuaW1hdGUnLCB7XG4gICAgICBhdHRyaWJ1dGVOYW1lOiAncicsXG4gICAgICBmcm9tOiAnMTUnLFxuICAgICAgdG86ICcxNScsXG4gICAgICBiZWdpbjogJzBzJyxcbiAgICAgIGR1cjogJzAuOHMnLFxuICAgICAgdmFsdWVzOiAnMTU7OTsxNScsXG4gICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgfSksXG4gICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdmaWxsLW9wYWNpdHknLFxuICAgICAgZnJvbTogJzEnLFxuICAgICAgdG86ICcxJyxcbiAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgZHVyOiAnMC44cycsXG4gICAgICB2YWx1ZXM6ICcxOy41OzEnLFxuICAgICAgY2FsY01vZGU6ICdsaW5lYXInLFxuICAgICAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJ1xuICAgIH0pXG4gIF0pXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU3Bpbm5lckRvdHMnLFxuXG4gIHByb3BzOiB1c2VTcGlubmVyUHJvcHMsXG5cbiAgc2V0dXAgKHByb3BzKSB7XG4gICAgY29uc3QgeyBjU2l6ZSwgY2xhc3NlcyB9ID0gdXNlU3Bpbm5lcihwcm9wcylcblxuICAgIHJldHVybiAoKSA9PiBoKCdzdmcnLCB7XG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgd2lkdGg6IGNTaXplLnZhbHVlLFxuICAgICAgaGVpZ2h0OiBjU2l6ZS52YWx1ZSxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMTIwIDMwJyxcbiAgICAgIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgfSwgc3ZnKVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgOmNsYXNzPVwiWydyb3cnLCBganVzdGlmeS0ke3NldHRpbmdzLmhvcml6b250YWxQb3NpdGlvbn1gXVwiXG4gICAgc3R5bGU9XCJtaW4taGVpZ2h0OiBpbmhlcml0XCJcbiAgPlxuICAgIDxkaXYgOmNsYXNzPVwiWydjb2wnLCAnY29sLWxnLWF1dG8nLCBgc2VsZi0ke3NldHRpbmdzLnZlcnRpY2FsUG9zaXRpb259YF1cIj5cbiAgICAgIDxxLW1hcmt1cC10YWJsZSA6ZmxhdD1cIiRxLmRhcmsuaXNBY3RpdmVcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0ciA6c3R5bGU9XCJyb3dMaW5lSGVpZ2h0XCI+XG4gICAgICAgICAgICA8dGg+U3lzdGVtPC90aD5cbiAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICA6Y29sc3Bhbj1cInVzZU1vYmlsZVVpID8gMSA6IG1heEZyb250ICsgMVwiXG4gICAgICAgICAgICAgIDpzdHlsZT1cInsgd2lkdGg6IHVzZU1vYmlsZVVpID8gJ2F1dG8nIDogJzEwMCUnIH1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBGcm9udGVyc1xuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDx0aCB2LWlmPVwic2V0dGluZ3Muc2hvd0xhc3RTd2l0Y2hcIj5MYXN0IFN3aXRjaDwvdGg+XG4gICAgICAgICAgICA8dGggdi1pZj1cInNldHRpbmdzLnNob3dVcGRhdGVUaW1lXCI+TGFzdCBVcGRhdGU8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHIgdi1mb3I9XCJpZCBpbiBpZHNcIiA6a2V5PVwiaWRcIiA6c3R5bGU9XCJyb3dMaW5lSGVpZ2h0XCI+XG4gICAgICAgICAgICA8dGQgdi1pZj1cInN5c3RlbXNbaWRdXCIgdmFsaWduPVwidG9wXCI+XG4gICAgICAgICAgICAgIDx0YWJsZS1lbnRpdHlcbiAgICAgICAgICAgICAgICA6aW1nPVwic3lzdGVtc1tpZF0uYXZhdGFyVXJsXCJcbiAgICAgICAgICAgICAgICA6c2l6ZT1cInNldHRpbmdzLmljb25TaXplICsgJ3B4J1wiXG4gICAgICAgICAgICAgICAgOmxhYmVsPVwic3lzdGVtc1tpZF0uZ2V0TmFtZShkZXRlY3RQcm9ub3VucylcIlxuICAgICAgICAgICAgICAgIDpjYXB0aW9uPVwic3lzdGVtc1tpZF0uZ2V0UHJvbm91bnMoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgICAgICAgICA6c3F1YXJlPVwic2V0dGluZ3Muc3F1YXJlSWNvbnNcIlxuICAgICAgICAgICAgICAgIDpzaG93LWljb249XCJzZXR0aW5ncy5zaG93SWNvbnNcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cImRpYWxvZy5zaG93KHsgc3lzdGVtOiBzeXN0ZW1zW2lkXSB9KVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIHYtZWxzZSB2YWxpZ249XCJtaWRkbGVcIj5cbiAgICAgICAgICAgICAgPHEtc3Bpbm5lci1kb3RzIHNpemU9XCIyNHB4XCIgLz5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZyb250ZXJzW2lkXVwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZyb250ZXJzW2lkXS5hbGxvd2VkXCI+XG4gICAgICAgICAgICAgICAgPHRkIHYtaWY9XCJ1c2VNb2JpbGVVaVwiIHZhbGlnbj1cInRvcFwiIHN0eWxlPVwicGFkZGluZy1ib3R0b206IDBcIj5cbiAgICAgICAgICAgICAgICAgIDx0YWJsZS1lbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJtZW1iZXIgb2YgZnJvbnRlcnNbaWRdLm1lbWJlcnNcIlxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwibWVtYmVyLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgOmltZz1cIm1lbWJlci5hdmF0YXJVcmxcIlxuICAgICAgICAgICAgICAgICAgICA6c2l6ZT1cInNldHRpbmdzLmljb25TaXplICsgJ3B4J1wiXG4gICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIm1lbWJlci5nZXROYW1lKGRldGVjdFByb25vdW5zKVwiXG4gICAgICAgICAgICAgICAgICAgIDpjYXB0aW9uPVwibWVtYmVyLmdldFByb25vdW5zKGRldGVjdFByb25vdW5zKVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1tYi1zbVwiXG4gICAgICAgICAgICAgICAgICAgIDpzcXVhcmU9XCJzZXR0aW5ncy5zcXVhcmVJY29uc1wiXG4gICAgICAgICAgICAgICAgICAgIDpzaG93LWljb249XCJzZXR0aW5ncy5zaG93SWNvbnNcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkaWFsb2cuc2hvdyh7IG1lbWJlciwgc3lzdGVtOiBzeXN0ZW1zW2lkXSB9KVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIm1lbWJlciBvZiBmcm9udGVyc1tpZF0ubWVtYmVyc1wiXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJtZW1iZXIuaWRcIlxuICAgICAgICAgICAgICAgICAgICB2YWxpZ249XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxJVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZS1lbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgICA6aW1nPVwibWVtYmVyLmF2YXRhclVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgOnNpemU9XCJzZXR0aW5ncy5pY29uU2l6ZSArICdweCdcIlxuICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIm1lbWJlci5nZXROYW1lKGRldGVjdFByb25vdW5zKVwiXG4gICAgICAgICAgICAgICAgICAgICAgOmNhcHRpb249XCJtZW1iZXIuZ2V0UHJvbm91bnMoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6c3F1YXJlPVwic2V0dGluZ3Muc3F1YXJlSWNvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIDpzaG93LWljb249XCJzZXR0aW5ncy5zaG93SWNvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRpYWxvZy5zaG93KHsgbWVtYmVyLCBzeXN0ZW06IHN5c3RlbXNbaWRdIH0pXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cIm1heEZyb250IC0gKGZyb250ZXJzW2lkXS5tZW1iZXJzLmxlbmd0aCB8fCAwKSA+IDBcIlxuICAgICAgICAgICAgICAgICAgICA6Y29sc3Bhbj1cIm1heEZyb250IC0gKGZyb250ZXJzW2lkXS5tZW1iZXJzLmxlbmd0aCB8fCAwKVwiXG4gICAgICAgICAgICAgICAgICA+PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8IS0tIE5vIEFjY2VzcyAtLT5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8dGFibGUtZW50aXR5XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm8gQWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgOnNpemU9XCJzZXR0aW5ncy5pY29uU2l6ZSArICdweCdcIlxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgICAgIDpzcXVhcmU9XCJzZXR0aW5ncy5zcXVhcmVJY29uc1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICB2LWlmPVwibWF4RnJvbnQgPiAxICYmICF1c2VNb2JpbGVVaVwiXG4gICAgICAgICAgICAgICAgICA6Y29sc3Bhbj1cIm1heEZyb250IC0gMVwiXG4gICAgICAgICAgICAgICAgPjwvdGQ+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPCEtLSBMb2FkaW5nIC0tPlxuICAgICAgICAgICAgPHRkIHYtZWxzZSB2YWxpZ249XCJtaWRkbGVcIj5cbiAgICAgICAgICAgICAgPHEtc3Bpbm5lci1kb3RzIHNpemU9XCIyNHB4XCIgLz5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8IS0tIFNwYWNlciAtLT5cbiAgICAgICAgICAgIDx0ZCB2LWlmPVwiIXVzZU1vYmlsZVVpXCIgLz5cbiAgICAgICAgICAgIDwhLS0gTGFzdCBTd2l0Y2ggLS0+XG4gICAgICAgICAgICA8dGQgdi1pZj1cInNldHRpbmdzLnNob3dMYXN0U3dpdGNoXCIgdmFsaWduPVwidG9wXCI+XG4gICAgICAgICAgICAgIDxyZWxhdGl2ZS10aW1lLWRpc3BsYXlcbiAgICAgICAgICAgICAgICB2LWlmPVwiZnJvbnRlcnNbaWRdXCJcbiAgICAgICAgICAgICAgICA6dGltZT1cImZyb250ZXJzW2lkXT8ubGFzdFN3aXRjaFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPCEtLSBMYXN0IFVwZGF0ZWQgLS0+XG4gICAgICAgICAgICA8dGQgdi1pZj1cInNldHRpbmdzLnNob3dVcGRhdGVUaW1lXCIgdmFsaWduPVwidG9wXCI+XG4gICAgICAgICAgICAgIDxyZWxhdGl2ZS10aW1lLWRpc3BsYXlcbiAgICAgICAgICAgICAgICB2LWlmPVwiZnJvbnRlcnNbaWRdXCJcbiAgICAgICAgICAgICAgICA6dGltZT1cImZyb250ZXJzW2lkXT8ubGFzdFVwZGF0ZWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9xLW1hcmt1cC10YWJsZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRlc2NyaXB0aW9uLWRpYWxvZyByZWY9XCJkaWFsb2dcIiAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnO1xuXG5pbXBvcnQgeyBGcm9udGVycyB9IGZyb20gJ3NyYy9tb2RlbHMvRnJvbnRlcnMnO1xuaW1wb3J0IHsgdXNlU2V0dGluZ3NTdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc2V0dGluZ3Mtc3RvcmUnO1xuaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnc3JjL21vZGVscy9TeXN0ZW0nO1xuaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IHN0b3JlVG9SZWZzIH0gZnJvbSAncGluaWEnO1xuXG5pbXBvcnQgRGVzY3JpcHRpb25EaWFsb2cgZnJvbSAnc3JjL2NvbXBvbmVudHMvRGVzY3JpcHRpb25EaWFsb2cudnVlJztcbmltcG9ydCBSZWxhdGl2ZVRpbWVEaXNwbGF5IGZyb20gJ3NyYy9jb21wb25lbnRzL1JlbGF0aXZlVGltZURpc3BsYXkudnVlJztcbmltcG9ydCBUYWJsZUVudGl0eSBmcm9tICdzcmMvcGFnZXMvc3RhdHVzL1RhYmxlL1RhYmxlRW50aXR5LnZ1ZSc7XG5pbXBvcnQgeyB1c2VTZXJ2aWNlcyB9IGZyb20gJ3NyYy9saWIvU2VydmljZXMnO1xuXG5jb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuXG5jb25zdCBzZXR0aW5nc1N0b3JlID0gdXNlU2V0dGluZ3NTdG9yZSgpO1xuY29uc3QgeyBkZXRlY3RQcm9ub3VucyB9ID0gc3RvcmVUb1JlZnMoc2V0dGluZ3NTdG9yZSk7XG5jb25zdCBzZXR0aW5ncyA9IHNldHRpbmdzU3RvcmUuc3RhdHVzLnRhYmxlO1xuY29uc3QgeyBmcm9udGVyQ2FjaGUgfSA9IHVzZVNlcnZpY2VzKCk7XG5cbmNvbnN0IHVzZU1vYmlsZVVpID0gY29tcHV0ZWQoKCkgPT4gJHEuc2NyZWVuLmx0LnNtIHx8IHNldHRpbmdzLmZvcmNlTW9iaWxlVWkpO1xuY29uc3QgZGlhbG9nID0gcmVmKCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBpZHM6IEFycmF5PHN0cmluZz47XG4gIGZyb250ZXJzOiBSZWNvcmQ8c3RyaW5nLCBGcm9udGVycz47XG4gIHN5c3RlbXM6IFJlY29yZDxzdHJpbmcsIFN5c3RlbT47XG59XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8UHJvcHM+KCk7XG5cbmNvbnN0IG1heEZyb250ID0gY29tcHV0ZWQoKCkgPT5cbiAgTWF0aC5tYXgoXG4gICAgLi4uZnJvbnRlckNhY2hlLmdldE11bHRpQ2FjaGVkKHByb3BzLmlkcykubWFwKChmKSA9PiBmLm1lbWJlcnMubGVuZ3RoKSxcbiAgKSxcbik7XG5cbmNvbnN0IHJvd0xpbmVIZWlnaHQgPSBjb21wdXRlZChcbiAgKCkgPT5cbiAgICAnbGluZS1oZWlnaHQ6ICcgK1xuICAgIChzZXR0aW5ncy5zaG93SWNvbnMgJiYgc2V0dGluZ3MuaWNvblNpemUgPiAzNFxuICAgICAgPyBgJHtzZXR0aW5ncy5pY29uU2l6ZX1weGBcbiAgICAgIDogJzIuNGVtJyksXG4pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFNQSxNQUFNLE1BQU07QUFBQSxFQUNWLEVBQUUsVUFBVTtBQUFBLElBQ1YsSUFBSTtBQUFBLElBQ0osSUFBSTtBQUFBLElBQ0osR0FBRztBQUFBLEVBQ1AsR0FBSztBQUFBLElBQ0QsRUFBRSxXQUFXO0FBQUEsTUFDWCxlQUFlO0FBQUEsTUFDZixNQUFNO0FBQUEsTUFDTixJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxLQUFLO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsSUFDbkIsQ0FBSztBQUFBLElBQ0QsRUFBRSxXQUFXO0FBQUEsTUFDWCxlQUFlO0FBQUEsTUFDZixNQUFNO0FBQUEsTUFDTixJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxLQUFLO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsSUFDbkIsQ0FBSztBQUFBLEVBQ0wsQ0FBRztBQUFBLEVBQ0QsRUFBRSxVQUFVO0FBQUEsSUFDVixJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsSUFDSixHQUFHO0FBQUEsSUFDSCxnQkFBZ0I7QUFBQSxFQUNwQixHQUFLO0FBQUEsSUFDRCxFQUFFLFdBQVc7QUFBQSxNQUNYLGVBQWU7QUFBQSxNQUNmLE1BQU07QUFBQSxNQUNOLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxJQUNuQixDQUFLO0FBQUEsSUFDRCxFQUFFLFdBQVc7QUFBQSxNQUNYLGVBQWU7QUFBQSxNQUNmLE1BQU07QUFBQSxNQUNOLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxJQUNuQixDQUFLO0FBQUEsRUFDTCxDQUFHO0FBQUEsRUFDRCxFQUFFLFVBQVU7QUFBQSxJQUNWLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLEdBQUc7QUFBQSxFQUNQLEdBQUs7QUFBQSxJQUNELEVBQUUsV0FBVztBQUFBLE1BQ1gsZUFBZTtBQUFBLE1BQ2YsTUFBTTtBQUFBLE1BQ04sSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsS0FBSztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLElBQ25CLENBQUs7QUFBQSxJQUNELEVBQUUsV0FBVztBQUFBLE1BQ1gsZUFBZTtBQUFBLE1BQ2YsTUFBTTtBQUFBLE1BQ04sSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsS0FBSztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLElBQ25CLENBQUs7QUFBQSxFQUNMLENBQUc7QUFDSDtBQUVBLE1BQUEsZUFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsRUFFUCxNQUFPLE9BQU87QUFDWixVQUFNLEVBQUUsT0FBTyxZQUFZLFdBQVcsS0FBSztBQUUzQyxXQUFPLE1BQU0sRUFBRSxPQUFPO0FBQUEsTUFDcEIsT0FBTyxRQUFRO0FBQUEsTUFDZixNQUFNO0FBQUEsTUFDTixPQUFPLE1BQU07QUFBQSxNQUNiLFFBQVEsTUFBTTtBQUFBLE1BQ2QsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLElBQ1IsR0FBRSxHQUFHO0FBQUEsRUFDUDtBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOEJELFVBQU0sS0FBSztBQUVYLFVBQU0sZ0JBQWdCO0FBQ3RCLFVBQU0sRUFBRSxlQUFBLElBQW1CLFlBQVksYUFBYTtBQUM5QyxVQUFBLFdBQVcsY0FBYyxPQUFPO0FBQ2hDLFVBQUEsRUFBRSxpQkFBaUI7QUFFbkIsVUFBQSxjQUFjLFNBQVMsTUFBTSxHQUFHLE9BQU8sR0FBRyxNQUFNLFNBQVMsYUFBYTtBQUM1RSxVQUFNLFNBQVM7QUFRZixVQUFNLFFBQVE7QUFFZCxVQUFNLFdBQVc7QUFBQSxNQUFTLE1BQ3hCLEtBQUs7QUFBQSxRQUNILEdBQUcsYUFBYSxlQUFlLE1BQU0sR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxNQUFNO0FBQUEsTUFDdkU7QUFBQSxJQUFBO0FBR0YsVUFBTSxnQkFBZ0I7QUFBQSxNQUNwQixNQUNFLG1CQUNDLFNBQVMsYUFBYSxTQUFTLFdBQVcsS0FDdkMsR0FBRyxTQUFTLFFBQVEsT0FDcEI7QUFBQSxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
