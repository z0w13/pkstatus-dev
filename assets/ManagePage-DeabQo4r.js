import { Q as QSkeleton } from "./QSkeleton-Bsi1r0jE.js";
import { Q as QTable, a as QTd } from "./QTable-BOq-QKNl.js";
import { J as defineComponent, ai as useSystemStore, K as useSettingsStore, L as storeToRefs, ah as usePluralKit, a as computed, t as onMounted, b7 as is404, N as useQuasar, bz as formatId, _ as _export_sfc, S as createBlock, T as openBlock, U as withCtx, Y as createBaseVNode, W as createVNode, ap as QAvatar, ag as createElementBlock, ak as Fragment, $ as createTextVNode, a2 as toDisplayString, a0 as createCommentVNode, Z as QBtn } from "./index-Czhz81pV.js";
import { Q as QBtnGroup } from "./QBtnGroup-DSLUZYCx.js";
import { a as QItem, b as QItemSection, Q as QItemLabel } from "./QItem-DBhEHxap.js";
import { Q as QPageSticky } from "./QPageSticky-Cu8DVAYK.js";
import { Q as QPage } from "./QPage-B7Tg8hoM.js";
import { P as PageTitle } from "./PageTitle-BKiEeIBH.js";
import { I as InitialFallbackAvatar } from "./InitialFallbackAvatar-BwzLwT9D.js";
import "./QList-DTyO3bRG.js";
import "./QMarkupTable-Co_abH1I.js";
import "./QSelect-DgwzAg-N.js";
import "./QMenu-BKVuNWhU.js";
import "./format-Dk2Vo7dJ.js";
import "./rtl-DDpZOXNn.js";
import "./index-BPlwBMVZ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ManagePage",
  setup(__props, { expose: __expose }) {
    __expose();
    const $q = useQuasar();
    const systemStore = useSystemStore();
    const settings = useSettingsStore();
    const { id: idOpts } = storeToRefs(settings);
    const pluralKit = usePluralKit();
    const columns = [
      { name: "avatar", field: "avatarUrl", label: "Icon", align: "left" },
      { name: "id", field: "id", label: "ID", align: "left" },
      { name: "name", field: "name", label: "Name", align: "left" },
      {
        name: "note",
        field: "note",
        label: "Note",
        align: "left",
        headerStyle: "width: 100%"
      },
      { name: "buttons", field: "", label: "" }
    ];
    const tableData = computed(
      () => systemStore.ids.map((id) => pluralKit.systemCache.objects[id] || { id })
    );
    function deleteSystem(id) {
      systemStore.delete(id);
      $q.notify("System Deleted");
    }
    onMounted(async () => {
      var _a, _b;
      for (const id of systemStore.ids) {
        try {
          await pluralKit.getSystem(id);
        } catch (e) {
          if (is404(e)) {
            $q.notify({
              type: "negative",
              message: `Error fetching ${(_b = (_a = pluralKit.systemCache.get(id)) == null ? void 0 : _a.name) != null ? _b : formatId(id, idOpts.value)}`,
              caption: `${e.status}: ${e.message} (${e.code})`
            });
          }
        }
      }
    });
    const __returned__ = { $q, systemStore, settings, idOpts, pluralKit, columns, tableData, deleteSystem, PageTitle, InitialFallbackAvatar, get formatId() {
      return formatId;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "col col-md-auto" };
const _hoisted_2 = {
  key: 1,
  class: "text-grey"
};
const _hoisted_3 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { class: "row justify-evenly" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["PageTitle"], {
          icon: "manage_accounts",
          text: "Systems"
        }),
        createVNode(QTable, {
          grid: $setup.$q.screen.lt.sm,
          columns: $setup.columns,
          rows: $setup.tableData,
          "row-key": "name",
          class: "bg-lighten",
          "card-container-class": {
            column: true,
            "q-mx-md": true,
            "q-list": true,
            "q-list--separator": false,
            "q-list--bordered": false,
            "q-list--dark": $setup.$q.dark.isActive
          },
          flat: ""
        }, {
          "body-cell-avatar": withCtx((props) => [
            createVNode(QTd, { props }, {
              default: withCtx(() => {
                var _a;
                return [
                  props.value !== void 0 ? (openBlock(), createBlock($setup["InitialFallbackAvatar"], {
                    key: 0,
                    url: props.value,
                    name: (_a = props.row.name) != null ? _a : $setup.formatId(props.row.id, $setup.idOpts),
                    size: "24px"
                  }, null, 8, ["url", "name"])) : (openBlock(), createBlock(QSkeleton, {
                    key: 1,
                    type: "circle",
                    size: "24px"
                  }))
                ];
              }),
              _: 2
              /* DYNAMIC */
            }, 1032, ["props"])
          ]),
          "body-cell-id": withCtx((props) => [
            createVNode(QTd, { props }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString($setup.formatId(props.row.id, $setup.idOpts)),
                  1
                  /* TEXT */
                )
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["props"])
          ]),
          "body-cell-name": withCtx((props) => [
            createVNode(QTd, { props }, {
              default: withCtx(() => [
                props.value === void 0 ? (openBlock(), createBlock(QSkeleton, {
                  key: 0,
                  type: "rect"
                })) : props.value === null ? (openBlock(), createElementBlock("span", _hoisted_2, "None")) : (openBlock(), createElementBlock(
                  Fragment,
                  { key: 2 },
                  [
                    createTextVNode(
                      toDisplayString(props.value),
                      1
                      /* TEXT */
                    )
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["props"])
          ]),
          "body-cell-buttons": withCtx((props) => [
            createVNode(QTd, { props }, {
              default: withCtx(() => [
                createVNode(
                  QBtnGroup,
                  { unelevated: "" },
                  {
                    default: withCtx(() => [
                      createVNode(QBtn, {
                        dense: "",
                        icon: "delete",
                        color: "negative",
                        onClick: ($event) => $setup.deleteSystem(props.row.id)
                      }, null, 8, ["onClick"])
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
            }, 1032, ["props"])
          ]),
          item: withCtx((props) => [
            createVNode(
              QItem,
              { class: "q-pa-sm" },
              {
                default: withCtx(() => [
                  createVNode(
                    QItemSection,
                    { avatar: "" },
                    {
                      default: withCtx(() => [
                        createVNode(QAvatar, {
                          color: props.row.avatarUrl ? "" : "primary"
                        }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              props.row.avatarUrl ? (openBlock(), createElementBlock("img", {
                                key: 0,
                                src: props.row.avatarUrl
                              }, null, 8, _hoisted_3)) : (openBlock(), createElementBlock(
                                Fragment,
                                { key: 1 },
                                [
                                  createTextVNode(
                                    toDisplayString(((_a = props.row.name) != null ? _a : $setup.formatId(props.row.id, $setup.idOpts)).substring(0, 1)),
                                    1
                                    /* TEXT */
                                  )
                                ],
                                64
                                /* STABLE_FRAGMENT */
                              ))
                            ];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["color"])
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
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(
                                  toDisplayString((_a = props.row.name) != null ? _a : $setup.formatId(props.row.id, $setup.idOpts)),
                                  1
                                  /* TEXT */
                                )
                              ];
                            }),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        ),
                        props.row.name ? (openBlock(), createBlock(
                          QItemLabel,
                          {
                            key: 0,
                            caption: ""
                          },
                          {
                            default: withCtx(() => [
                              createTextVNode(
                                toDisplayString($setup.formatId(props.row.id, $setup.idOpts)),
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
                  ),
                  createVNode(
                    QItemSection,
                    { side: "" },
                    {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          flat: "",
                          dense: "",
                          icon: "delete",
                          color: "negative",
                          onClick: ($event) => $setup.deleteSystem(props.row.id)
                        }, null, 8, ["onClick"])
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
              },
              1024
              /* DYNAMIC_SLOTS */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["grid", "rows", "card-container-class"])
      ]),
      createVNode(QPageSticky, {
        position: "bottom-right",
        offset: [18, 18]
      }, {
        default: withCtx(() => [
          createVNode(QBtn, {
            fab: "",
            icon: "add",
            color: "primary",
            to: "/manage/add"
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const ManagePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/pages/Manage/ManagePage.vue"]]);
export {
  ManagePage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYWdlUGFnZS1EZWFiUW80ci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL01hbmFnZS9NYW5hZ2VQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgY2xhc3M9XCJyb3cganVzdGlmeS1ldmVubHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC1tZC1hdXRvXCI+XG4gICAgICA8cGFnZS10aXRsZSBpY29uPVwibWFuYWdlX2FjY291bnRzXCIgdGV4dD1cIlN5c3RlbXNcIiAvPlxuICAgICAgPHEtdGFibGVcbiAgICAgICAgOmdyaWQ9XCIkcS5zY3JlZW4ubHQuc21cIlxuICAgICAgICA6Y29sdW1ucz1cImNvbHVtbnNcIlxuICAgICAgICA6cm93cz1cInRhYmxlRGF0YVwiXG4gICAgICAgIHJvdy1rZXk9XCJuYW1lXCJcbiAgICAgICAgY2xhc3M9XCJiZy1saWdodGVuXCJcbiAgICAgICAgOmNhcmQtY29udGFpbmVyLWNsYXNzPVwie1xuICAgICAgICAgIGNvbHVtbjogdHJ1ZSxcbiAgICAgICAgICAncS1teC1tZCc6IHRydWUsXG4gICAgICAgICAgJ3EtbGlzdCc6IHRydWUsXG4gICAgICAgICAgJ3EtbGlzdC0tc2VwYXJhdG9yJzogZmFsc2UsXG4gICAgICAgICAgJ3EtbGlzdC0tYm9yZGVyZWQnOiBmYWxzZSxcbiAgICAgICAgICAncS1saXN0LS1kYXJrJzogJHEuZGFyay5pc0FjdGl2ZSxcbiAgICAgICAgfVwiXG4gICAgICAgIGZsYXRcbiAgICAgID5cbiAgICAgICAgPHRlbXBsYXRlICNib2R5LWNlbGwtYXZhdGFyPVwicHJvcHNcIj5cbiAgICAgICAgICA8cS10ZCA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgPGluaXRpYWwtZmFsbGJhY2stYXZhdGFyXG4gICAgICAgICAgICAgIHYtaWY9XCJwcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgOnVybD1cInByb3BzLnZhbHVlXCJcbiAgICAgICAgICAgICAgOm5hbWU9XCJwcm9wcy5yb3cubmFtZSA/PyBmb3JtYXRJZChwcm9wcy5yb3cuaWQsIGlkT3B0cylcIlxuICAgICAgICAgICAgICBzaXplPVwiMjRweFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHEtc2tlbGV0b24gdi1lbHNlIHR5cGU9XCJjaXJjbGVcIiBzaXplPVwiMjRweFwiIC8+XG4gICAgICAgICAgPC9xLXRkPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgI2JvZHktY2VsbC1pZD1cInByb3BzXCI+XG4gICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgIHt7IGZvcm1hdElkKHByb3BzLnJvdy5pZCwgaWRPcHRzKSB9fVxuICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlICNib2R5LWNlbGwtbmFtZT1cInByb3BzXCI+XG4gICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgIDxxLXNrZWxldG9uIHYtaWY9XCJwcm9wcy52YWx1ZSA9PT0gdW5kZWZpbmVkXCIgdHlwZT1cInJlY3RcIiAvPlxuICAgICAgICAgICAgPHNwYW4gdi1lbHNlLWlmPVwicHJvcHMudmFsdWUgPT09IG51bGxcIiBjbGFzcz1cInRleHQtZ3JleVwiPk5vbmU8L3NwYW4+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPnt7IHByb3BzLnZhbHVlIH19PC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3EtdGQ+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSAjYm9keS1jZWxsLWJ1dHRvbnM9XCJwcm9wc1wiPlxuICAgICAgICAgIDxxLXRkIDpwcm9wcz1cInByb3BzXCI+XG4gICAgICAgICAgICA8cS1idG4tZ3JvdXAgdW5lbGV2YXRlZD5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICBpY29uPVwiZGVsZXRlXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIm5lZ2F0aXZlXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZWxldGVTeXN0ZW0ocHJvcHMucm93LmlkKVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3EtYnRuLWdyb3VwPlxuICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8IS0tIEdyaWQgTGF5b3V0IC0tPlxuICAgICAgICA8dGVtcGxhdGUgI2l0ZW09XCJwcm9wc1wiPlxuICAgICAgICAgIDxxLWl0ZW0gY2xhc3M9XCJxLXBhLXNtXCI+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICA8cS1hdmF0YXIgOmNvbG9yPVwicHJvcHMucm93LmF2YXRhclVybCA/ICcnIDogJ3ByaW1hcnknXCI+XG4gICAgICAgICAgICAgICAgPGltZyB2LWlmPVwicHJvcHMucm93LmF2YXRhclVybFwiIDpzcmM9XCJwcm9wcy5yb3cuYXZhdGFyVXJsXCIgLz5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnJvdy5uYW1lID8/IGZvcm1hdElkKHByb3BzLnJvdy5pZCwgaWRPcHRzKVxuICAgICAgICAgICAgICAgICAgICApLnN1YnN0cmluZygwLCAxKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L3EtYXZhdGFyPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57e1xuICAgICAgICAgICAgICAgIHByb3BzLnJvdy5uYW1lID8/IGZvcm1hdElkKHByb3BzLnJvdy5pZCwgaWRPcHRzKVxuICAgICAgICAgICAgICB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIHYtaWY9XCJwcm9wcy5yb3cubmFtZVwiIGNhcHRpb24+e3tcbiAgICAgICAgICAgICAgICBmb3JtYXRJZChwcm9wcy5yb3cuaWQsIGlkT3B0cylcbiAgICAgICAgICAgICAgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgaWNvbj1cImRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJuZWdhdGl2ZVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiZGVsZXRlU3lzdGVtKHByb3BzLnJvdy5pZClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvcS10YWJsZT5cbiAgICA8L2Rpdj5cbiAgICA8cS1wYWdlLXN0aWNreSBwb3NpdGlvbj1cImJvdHRvbS1yaWdodFwiIDpvZmZzZXQ9XCJbMTgsIDE4XVwiPlxuICAgICAgPHEtYnRuIGZhYiBpY29uPVwiYWRkXCIgY29sb3I9XCJwcmltYXJ5XCIgdG89XCIvbWFuYWdlL2FkZFwiIC8+XG4gICAgPC9xLXBhZ2Utc3RpY2t5PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBjb21wdXRlZCwgb25Nb3VudGVkIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHN0b3JlVG9SZWZzIH0gZnJvbSAncGluaWEnO1xuaW1wb3J0IHsgUVRhYmxlUHJvcHMsIHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcic7XG5cbmltcG9ydCB7IHVzZVN5c3RlbVN0b3JlIH0gZnJvbSAnc3JjL3N0b3Jlcy9zeXN0ZW0tc3RvcmUnO1xuaW1wb3J0IHsgdXNlU2V0dGluZ3NTdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc2V0dGluZ3Mtc3RvcmUnO1xuaW1wb3J0IHsgdXNlUGx1cmFsS2l0IH0gZnJvbSAnYm9vdC9wbHVyYWxLaXQnO1xuXG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gJ3NyYy9jb21wb25lbnRzL1BhZ2VUaXRsZS52dWUnO1xuaW1wb3J0IEluaXRpYWxGYWxsYmFja0F2YXRhciBmcm9tICdzcmMvY29tcG9uZW50cy9Jbml0aWFsRmFsbGJhY2tBdmF0YXIudnVlJztcbmltcG9ydCB7IGZvcm1hdElkLCBpczQwNCB9IGZyb20gJ3NyYy91dGlsJztcblxuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0IHN5c3RlbVN0b3JlID0gdXNlU3lzdGVtU3RvcmUoKTtcbmNvbnN0IHNldHRpbmdzID0gdXNlU2V0dGluZ3NTdG9yZSgpO1xuY29uc3QgeyBpZDogaWRPcHRzIH0gPSBzdG9yZVRvUmVmcyhzZXR0aW5ncyk7XG5jb25zdCBwbHVyYWxLaXQgPSB1c2VQbHVyYWxLaXQoKTtcblxuY29uc3QgY29sdW1uczogUVRhYmxlUHJvcHNbJ2NvbHVtbnMnXSA9IFtcbiAgeyBuYW1lOiAnYXZhdGFyJywgZmllbGQ6ICdhdmF0YXJVcmwnLCBsYWJlbDogJ0ljb24nLCBhbGlnbjogJ2xlZnQnIH0sXG4gIHsgbmFtZTogJ2lkJywgZmllbGQ6ICdpZCcsIGxhYmVsOiAnSUQnLCBhbGlnbjogJ2xlZnQnIH0sXG4gIHsgbmFtZTogJ25hbWUnLCBmaWVsZDogJ25hbWUnLCBsYWJlbDogJ05hbWUnLCBhbGlnbjogJ2xlZnQnIH0sXG4gIHtcbiAgICBuYW1lOiAnbm90ZScsXG4gICAgZmllbGQ6ICdub3RlJyxcbiAgICBsYWJlbDogJ05vdGUnLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgaGVhZGVyU3R5bGU6ICd3aWR0aDogMTAwJScsXG4gIH0sXG4gIHsgbmFtZTogJ2J1dHRvbnMnLCBmaWVsZDogJycsIGxhYmVsOiAnJyB9LFxuXTtcblxuY29uc3QgdGFibGVEYXRhID0gY29tcHV0ZWQoKCkgPT5cbiAgc3lzdGVtU3RvcmUuaWRzLm1hcCgoaWQpID0+IHBsdXJhbEtpdC5zeXN0ZW1DYWNoZS5vYmplY3RzW2lkXSB8fCB7IGlkIH0pLFxuKTtcblxuZnVuY3Rpb24gZGVsZXRlU3lzdGVtKGlkOiBzdHJpbmcpIHtcbiAgc3lzdGVtU3RvcmUuZGVsZXRlKGlkKTtcbiAgJHEubm90aWZ5KCdTeXN0ZW0gRGVsZXRlZCcpO1xufVxuXG4vLyBNYWtlIHN1cmUgc3lzdGVtcyBnZXQgZmV0Y2hlZCBhbmQgY2FjaGVkXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBmb3IgKGNvbnN0IGlkIG9mIHN5c3RlbVN0b3JlLmlkcykge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBwbHVyYWxLaXQuZ2V0U3lzdGVtKGlkKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoaXM0MDQoZSkpIHtcbiAgICAgICAgJHEubm90aWZ5KHtcbiAgICAgICAgICB0eXBlOiAnbmVnYXRpdmUnLFxuICAgICAgICAgIG1lc3NhZ2U6IGBFcnJvciBmZXRjaGluZyAke3BsdXJhbEtpdC5zeXN0ZW1DYWNoZS5nZXQoaWQpPy5uYW1lID8/IGZvcm1hdElkKGlkLCBpZE9wdHMudmFsdWUpfWAsXG4gICAgICAgICAgY2FwdGlvbjogYCR7ZS5zdGF0dXN9OiAke2UubWVzc2FnZX0gKCR7ZS5jb2RlfSlgLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl9jcmVhdGVCbG9jayIsIl93aXRoQ3R4IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErR0EsVUFBTSxLQUFLLFVBQVU7QUFDckIsVUFBTSxjQUFjLGVBQWU7QUFDbkMsVUFBTSxXQUFXLGlCQUFpQjtBQUNsQyxVQUFNLEVBQUUsSUFBSSxXQUFXLFlBQVksUUFBUTtBQUMzQyxVQUFNLFlBQVksYUFBYTtBQUUvQixVQUFNLFVBQWtDO0FBQUEsTUFDdEMsRUFBRSxNQUFNLFVBQVUsT0FBTyxhQUFhLE9BQU8sUUFBUSxPQUFPLE9BQU87QUFBQSxNQUNuRSxFQUFFLE1BQU0sTUFBTSxPQUFPLE1BQU0sT0FBTyxNQUFNLE9BQU8sT0FBTztBQUFBLE1BQ3RELEVBQUUsTUFBTSxRQUFRLE9BQU8sUUFBUSxPQUFPLFFBQVEsT0FBTyxPQUFPO0FBQUEsTUFDNUQ7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQSxFQUFFLE1BQU0sV0FBVyxPQUFPLElBQUksT0FBTyxHQUFHO0FBQUEsSUFDMUM7QUFFQSxVQUFNLFlBQVk7QUFBQSxNQUFTLE1BQ3pCLFlBQVksSUFBSSxJQUFJLENBQUMsT0FBTyxVQUFVLFlBQVksUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFJLENBQUE7QUFBQSxJQUN6RTtBQUVBLGFBQVMsYUFBYSxJQUFZO0FBQ2hDLGtCQUFZLE9BQU8sRUFBRTtBQUNyQixTQUFHLE9BQU8sZ0JBQWdCO0FBQUEsSUFBQTtBQUk1QixjQUFVLFlBQVk7O0FBQ1QsaUJBQUEsTUFBTSxZQUFZLEtBQUs7QUFDNUIsWUFBQTtBQUNJLGdCQUFBLFVBQVUsVUFBVSxFQUFFO0FBQUEsaUJBQ3JCLEdBQUc7QUFDTixjQUFBLE1BQU0sQ0FBQyxHQUFHO0FBQ1osZUFBRyxPQUFPO0FBQUEsY0FDUixNQUFNO0FBQUEs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
