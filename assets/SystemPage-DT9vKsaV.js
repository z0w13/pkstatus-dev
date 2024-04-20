import { Q as QItemLabel, b as QItemSection, a as QItem } from "./QItem-4sCyJUzG.js";
import { Q as defineComponent, a$ as useRoute, R as useSettingsStore, aC as useServices, T as storeToRefs, r as ref, w as watch, V as openBlock, aE as createElementBlock, aF as Fragment, Y as createVNode, a2 as createBaseVNode, X as withCtx, W as createBlock, a3 as QIcon, a1 as createTextVNode, a4 as createCommentVNode, aV as APIError, aU as getNameSort, aO as renderList, _ as unref, a5 as toDisplayString, b1 as QLinearProgress, af as _export_sfc } from "./index-C1u-_TOv.js";
import { Q as QList } from "./QList-DQhRiMIt.js";
import { I as InitialFallbackAvatar } from "./InitialFallbackAvatar-B9wHc8ll.js";
import { S as SystemCard, D as DescriptionDialog } from "./DescriptionDialog-B1LiVJwM.js";
import "./index-DRTIEHtT.js";
import "./MemberCard-Bif0S6_X.js";
import "./QMarkupTable-BsLt63RP.js";
import "./RelativeTimeDisplay-SNX72-cs.js";
const _hoisted_1 = { class: "row q-mt-lg bg-lighten" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { class: "row q-mt-lg bg-lighten" };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = {
  key: 2,
  class: "row q-mt-lg q-pa-md bg-lighten q-pa-md"
};
const _hoisted_8 = {
  key: 3,
  class: "row q-mt-lg q-pa-md bg-lighten"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SystemPage",
  setup(__props) {
    const route = useRoute();
    const settingsStore = useSettingsStore();
    const { pluralKit } = useServices();
    const { detectPronouns } = storeToRefs(settingsStore);
    const status = ref("loading");
    const system = ref(null);
    const fronters = ref(null);
    const members = ref({
      loading: true,
      allowed: true,
      list: []
    });
    const dialog = ref();
    watch(
      () => route.params.id,
      async (newId) => {
        if (!newId || Array.isArray(newId)) {
          return;
        }
        system.value = null;
        fronters.value = null;
        members.value.loading = true;
        members.value.list = [];
        try {
          system.value = await pluralKit.getSystem(newId);
        } catch (e) {
          if (e instanceof APIError) {
            if (e.status == "404") {
              status.value = "notfound";
            } else if (e.status == "403") {
              status.value = "forbidden";
            }
          }
          return;
        }
        fronters.value = await pluralKit.getFronters(newId);
        try {
          members.value.list = (await pluralKit.getMembers(newId)).sort(
            getNameSort(detectPronouns.value)
          );
          members.value.loading = false;
          members.value.allowed = true;
        } catch (e) {
          if (e instanceof APIError && e.status == "403") {
            members.value = {
              loading: false,
              allowed: false,
              list: []
            };
          } else {
            throw e;
          }
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          system.value ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              createVNode(SystemCard, {
                system: system.value,
                flat: ""
              }, null, 8, ["system"]),
              createBaseVNode("div", _hoisted_1, [
                createVNode(QList, { class: "col" }, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      createVNode(QItemLabel, { header: "" }, {
                        default: withCtx(() => [
                          !fronters.value || fronters.value.allowed ? (openBlock(), createElementBlock("span", _hoisted_2, "Fronters")) : (openBlock(), createElementBlock("span", _hoisted_3, "Fronter List Private"))
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      ((_a = fronters.value) == null ? void 0 : _a.allowed) ? (openBlock(true), createElementBlock(
                        Fragment,
                        { key: 0 },
                        renderList(fronters.value.members, (member) => {
                          return openBlock(), createBlock(QItem, {
                            key: member.id,
                            clickable: "",
                            onClick: ($event) => dialog.value.show({ member, system: system.value })
                          }, {
                            default: withCtx(() => [
                              createVNode(
                                QItemSection,
                                { avatar: "" },
                                {
                                  default: withCtx(() => [
                                    createVNode(InitialFallbackAvatar, {
                                      name: member.getName(unref(detectPronouns)),
                                      url: member.avatarUrl
                                    }, null, 8, ["name", "url"])
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
                      )) : !fronters.value ? (openBlock(), createBlock(QItem, { key: 1 }, {
                        default: withCtx(() => [
                          createVNode(QLinearProgress, { indeterminate: "" })
                        ]),
                        _: 1
                        /* STABLE */
                      })) : createCommentVNode("v-if", true)
                    ];
                  }),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("div", _hoisted_4, [
                createVNode(QList, { class: "col" }, {
                  default: withCtx(() => [
                    createVNode(QItemLabel, { header: "" }, {
                      default: withCtx(() => [
                        members.value.allowed ? (openBlock(), createElementBlock("span", _hoisted_5, "Members")) : (openBlock(), createElementBlock("span", _hoisted_6, "Member List Private"))
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    members.value.loading ? (openBlock(), createBlock(QItem, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(QLinearProgress, { indeterminate: "" })
                      ]),
                      _: 1
                      /* STABLE */
                    })) : members.value.allowed ? (openBlock(true), createElementBlock(
                      Fragment,
                      { key: 1 },
                      renderList(members.value.list, (member) => {
                        return openBlock(), createBlock(QItem, {
                          key: member.id,
                          clickable: "",
                          onClick: ($event) => dialog.value.show({ member, system: system.value })
                        }, {
                          default: withCtx(() => [
                            createVNode(
                              QItemSection,
                              { avatar: "" },
                              {
                                default: withCtx(() => [
                                  createVNode(InitialFallbackAvatar, {
                                    name: member.getName(unref(detectPronouns)),
                                    url: member.avatarUrl
                                  }, null, 8, ["name", "url"])
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
                    )) : createCommentVNode("v-if", true)
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ],
            64
            /* STABLE_FRAGMENT */
          )) : status.value == "loading" ? (openBlock(), createBlock(QLinearProgress, {
            key: 1,
            indeterminate: ""
          })) : status.value == "forbidden" ? (openBlock(), createElementBlock("div", _hoisted_7, [
            createVNode(QIcon, { name: "cross" }),
            createTextVNode(" Not Allowed To View System ")
          ])) : status.value == "notfound" ? (openBlock(), createElementBlock("div", _hoisted_8, [
            createVNode(QIcon, { name: "error" }),
            createTextVNode(" System Not Found ")
          ])) : createCommentVNode("v-if", true),
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
const SystemPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/zowie/dev/pkstatus/src/pages/Lookup/SystemPage.vue"]]);
export {
  SystemPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3lzdGVtUGFnZS1EVDl2S3NhVi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0xvb2t1cC9TeXN0ZW1QYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSB2LWlmPVwic3lzdGVtXCI+XG4gICAgPHN5c3RlbS1jYXJkIDpzeXN0ZW09XCJzeXN0ZW1cIiBmbGF0IC8+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBxLW10LWxnIGJnLWxpZ2h0ZW5cIj5cbiAgICAgIDxxLWxpc3QgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgPHEtaXRlbS1sYWJlbCBoZWFkZXI+XG4gICAgICAgICAgPHNwYW4gdi1pZj1cIiFmcm9udGVycyB8fCBmcm9udGVycy5hbGxvd2VkXCI+RnJvbnRlcnM8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gdi1lbHNlPkZyb250ZXIgTGlzdCBQcml2YXRlPC9zcGFuPlxuICAgICAgICA8L3EtaXRlbS1sYWJlbD5cblxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZyb250ZXJzPy5hbGxvd2VkXCI+XG4gICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgdi1mb3I9XCJtZW1iZXIgb2YgZnJvbnRlcnMubWVtYmVyc1wiXG4gICAgICAgICAgICA6a2V5PVwibWVtYmVyLmlkXCJcbiAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgQGNsaWNrPVwiZGlhbG9nLnNob3coeyBtZW1iZXIsIHN5c3RlbSB9KVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgPGluaXRpYWwtZmFsbGJhY2stYXZhdGFyXG4gICAgICAgICAgICAgICAgOm5hbWU9XCJtZW1iZXIuZ2V0TmFtZShkZXRlY3RQcm9ub3VucylcIlxuICAgICAgICAgICAgICAgIDp1cmw9XCJtZW1iZXIuYXZhdGFyVXJsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gbm8td3JhcD5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICB7eyBtZW1iZXIuZ2V0TmFtZShkZXRlY3RQcm9ub3VucykgfX1cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgdi1pZj1cIm1lbWJlci5nZXRQcm9ub3VucyhkZXRlY3RQcm9ub3VucylcIiBjYXB0aW9uPlxuICAgICAgICAgICAgICAgIHt7IG1lbWJlci5nZXRQcm9ub3VucyhkZXRlY3RQcm9ub3VucykgfX1cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8cS1pdGVtIHYtZWxzZS1pZj1cIiFmcm9udGVyc1wiPlxuICAgICAgICAgIDxxLWxpbmVhci1wcm9ncmVzcyBpbmRldGVybWluYXRlIC8+XG4gICAgICAgIDwvcS1pdGVtPlxuICAgICAgPC9xLWxpc3Q+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBxLW10LWxnIGJnLWxpZ2h0ZW5cIj5cbiAgICAgIDxxLWxpc3QgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgPHEtaXRlbS1sYWJlbCBoZWFkZXI+XG4gICAgICAgICAgPHNwYW4gdi1pZj1cIm1lbWJlcnMuYWxsb3dlZFwiPk1lbWJlcnM8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gdi1lbHNlPk1lbWJlciBMaXN0IFByaXZhdGU8L3NwYW4+XG4gICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuXG4gICAgICAgIDxxLWl0ZW0gdi1pZj1cIm1lbWJlcnMubG9hZGluZ1wiPlxuICAgICAgICAgIDxxLWxpbmVhci1wcm9ncmVzcyBpbmRldGVybWluYXRlIC8+XG4gICAgICAgIDwvcS1pdGVtPlxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwibWVtYmVycy5hbGxvd2VkXCI+XG4gICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgdi1mb3I9XCJtZW1iZXIgb2YgbWVtYmVycy5saXN0XCJcbiAgICAgICAgICAgIDprZXk9XCJtZW1iZXIuaWRcIlxuICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICBAY2xpY2s9XCJkaWFsb2cuc2hvdyh7IG1lbWJlciwgc3lzdGVtIH0pXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICA8aW5pdGlhbC1mYWxsYmFjay1hdmF0YXJcbiAgICAgICAgICAgICAgICA6bmFtZT1cIm1lbWJlci5nZXROYW1lKGRldGVjdFByb25vdW5zKVwiXG4gICAgICAgICAgICAgICAgOnVybD1cIm1lbWJlci5hdmF0YXJVcmxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBuby13cmFwPlxuICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgIHt7IG1lbWJlci5nZXROYW1lKGRldGVjdFByb25vdW5zKSB9fVxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCB2LWlmPVwibWVtYmVyLmdldFByb25vdW5zKGRldGVjdFByb25vdW5zKVwiIGNhcHRpb24+XG4gICAgICAgICAgICAgICAge3sgbWVtYmVyLmdldFByb25vdW5zKGRldGVjdFByb25vdW5zKSB9fVxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3EtbGlzdD5cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbiAgPHEtbGluZWFyLXByb2dyZXNzIHYtZWxzZS1pZj1cInN0YXR1cyA9PSAnbG9hZGluZydcIiBpbmRldGVybWluYXRlIC8+XG4gIDxkaXZcbiAgICB2LWVsc2UtaWY9XCJzdGF0dXMgPT0gJ2ZvcmJpZGRlbidcIlxuICAgIGNsYXNzPVwicm93IHEtbXQtbGcgcS1wYS1tZCBiZy1saWdodGVuIHEtcGEtbWRcIlxuICA+XG4gICAgPHEtaWNvbiBuYW1lPVwiY3Jvc3NcIiAvPlxuICAgIE5vdCBBbGxvd2VkIFRvIFZpZXcgU3lzdGVtXG4gIDwvZGl2PlxuICA8ZGl2IHYtZWxzZS1pZj1cInN0YXR1cyA9PSAnbm90Zm91bmQnXCIgY2xhc3M9XCJyb3cgcS1tdC1sZyBxLXBhLW1kIGJnLWxpZ2h0ZW5cIj5cbiAgICA8cS1pY29uIG5hbWU9XCJlcnJvclwiIC8+XG4gICAgU3lzdGVtIE5vdCBGb3VuZFxuICA8L2Rpdj5cbiAgPGRlc2NyaXB0aW9uLWRpYWxvZyByZWY9XCJkaWFsb2dcIiAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHN0b3JlVG9SZWZzIH0gZnJvbSAncGluaWEnO1xuaW1wb3J0IHsgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tICdwa2FwaS5qcyc7XG5cbmltcG9ydCB7IE1lbWJlciB9IGZyb20gJ3NyYy9tb2RlbHMvTWVtYmVyJztcbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJ3NyYy9tb2RlbHMvU3lzdGVtJztcbmltcG9ydCB7IEZyb250ZXJzIH0gZnJvbSAnc3JjL21vZGVscy9Gcm9udGVycyc7XG5pbXBvcnQgeyB1c2VTZXR0aW5nc1N0b3JlIH0gZnJvbSAnc3JjL3N0b3Jlcy9zZXR0aW5ncy1zdG9yZSc7XG5cbmltcG9ydCBJbml0aWFsRmFsbGJhY2tBdmF0YXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvSW5pdGlhbEZhbGxiYWNrQXZhdGFyLnZ1ZSc7XG5pbXBvcnQgRGVzY3JpcHRpb25EaWFsb2cgZnJvbSAnc3JjL2NvbXBvbmVudHMvRGVzY3JpcHRpb25EaWFsb2cudnVlJztcbmltcG9ydCBTeXN0ZW1DYXJkIGZyb20gJ3NyYy9jb21wb25lbnRzL0NhcmQvU3lzdGVtQ2FyZC52dWUnO1xuaW1wb3J0IHsgZ2V0TmFtZVNvcnQgfSBmcm9tICdzcmMvdXRpbCc7XG5pbXBvcnQgeyB1c2VTZXJ2aWNlcyB9IGZyb20gJ3NyYy9saWIvU2VydmljZXMnO1xuXG5jb25zdCByb3V0ZSA9IHVzZVJvdXRlKCk7XG5jb25zdCBzZXR0aW5nc1N0b3JlID0gdXNlU2V0dGluZ3NTdG9yZSgpO1xuY29uc3QgeyBwbHVyYWxLaXQgfSA9IHVzZVNlcnZpY2VzKCk7XG5jb25zdCB7IGRldGVjdFByb25vdW5zIH0gPSBzdG9yZVRvUmVmcyhzZXR0aW5nc1N0b3JlKTtcblxuY29uc3Qgc3RhdHVzID0gcmVmPCdsb2FkaW5nJyB8ICdmb3JiaWRkZW4nIHwgJ25vdGZvdW5kJz4oJ2xvYWRpbmcnKTtcbmNvbnN0IHN5c3RlbSA9IHJlZjxTeXN0ZW0gfCBudWxsPihudWxsKTtcbmNvbnN0IGZyb250ZXJzID0gcmVmPEZyb250ZXJzIHwgbnVsbD4obnVsbCk7XG5jb25zdCBtZW1iZXJzID0gcmVmPHtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgYWxsb3dlZDogYm9vbGVhbjtcbiAgbGlzdDogQXJyYXk8TWVtYmVyPjtcbn0+KHtcbiAgbG9hZGluZzogdHJ1ZSxcbiAgYWxsb3dlZDogdHJ1ZSxcbiAgbGlzdDogW10sXG59KTtcblxuY29uc3QgZGlhbG9nID0gcmVmKCk7XG5cbndhdGNoKFxuICAoKSA9PiByb3V0ZS5wYXJhbXMuaWQsXG4gIGFzeW5jIChuZXdJZCkgPT4ge1xuICAgIGlmICghbmV3SWQgfHwgQXJyYXkuaXNBcnJheShuZXdJZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzeXN0ZW0udmFsdWUgPSBudWxsO1xuICAgIGZyb250ZXJzLnZhbHVlID0gbnVsbDtcbiAgICBtZW1iZXJzLnZhbHVlLmxvYWRpbmcgPSB0cnVlO1xuICAgIG1lbWJlcnMudmFsdWUubGlzdCA9IFtdO1xuXG4gICAgdHJ5IHtcbiAgICAgIHN5c3RlbS52YWx1ZSA9IGF3YWl0IHBsdXJhbEtpdC5nZXRTeXN0ZW0obmV3SWQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgQVBJRXJyb3IpIHtcbiAgICAgICAgaWYgKGUuc3RhdHVzID09ICc0MDQnKSB7XG4gICAgICAgICAgLy8gTm90IEZvdW5kXG4gICAgICAgICAgc3RhdHVzLnZhbHVlID0gJ25vdGZvdW5kJztcbiAgICAgICAgfSBlbHNlIGlmIChlLnN0YXR1cyA9PSAnNDAzJykge1xuICAgICAgICAgIC8vIEZvcmJpZGRlblxuICAgICAgICAgIHN0YXR1cy52YWx1ZSA9ICdmb3JiaWRkZW4nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnJvbnRlcnMudmFsdWUgPSBhd2FpdCBwbHVyYWxLaXQuZ2V0RnJvbnRlcnMobmV3SWQpO1xuXG4gICAgdHJ5IHtcbiAgICAgIG1lbWJlcnMudmFsdWUubGlzdCA9IChhd2FpdCBwbHVyYWxLaXQuZ2V0TWVtYmVycyhuZXdJZCkpLnNvcnQoXG4gICAgICAgIGdldE5hbWVTb3J0KGRldGVjdFByb25vdW5zLnZhbHVlKSxcbiAgICAgICk7XG5cbiAgICAgIG1lbWJlcnMudmFsdWUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgbWVtYmVycy52YWx1ZS5hbGxvd2VkID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIEFQSUVycm9yICYmIGUuc3RhdHVzID09ICc0MDMnKSB7XG4gICAgICAgIG1lbWJlcnMudmFsdWUgPSB7XG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgYWxsb3dlZDogZmFsc2UsXG4gICAgICAgICAgbGlzdDogW10sXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgeyBpbW1lZGlhdGU6IHRydWUgfSxcbik7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBHQSxVQUFNLFFBQVE7QUFDZCxVQUFNLGdCQUFnQjtBQUNoQixVQUFBLEVBQUUsY0FBYztBQUN0QixVQUFNLEVBQUUsZUFBQSxJQUFtQixZQUFZLGFBQWE7QUFFOUMsVUFBQSxTQUFTLElBQTBDLFNBQVM7QUFDNUQsVUFBQSxTQUFTLElBQW1CLElBQUk7QUFDaEMsVUFBQSxXQUFXLElBQXFCLElBQUk7QUFDMUMsVUFBTSxVQUFVLElBSWI7QUFBQSxNQUNELFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULE1BQU0sQ0FBQztBQUFBLElBQUEsQ0FDUjtBQUVELFVBQU0sU0FBUztBQUVmO0FBQUEsTUFDRSxNQUFNLE1BQU0sT0FBTztBQUFBLE1BQ25CLE9BQU8sVUFBVTtBQUNmLFlBQUksQ0FBQyxTQUFTLE1BQU0sUUFBUSxLQUFLLEdBQUc7QUFDbEM7QUFBQSxRQUNGO0FBRUEsZUFBTyxRQUFRO0FBQ2YsaUJBQVMsUUFBUTtBQUNqQixnQkFBUSxNQUFNLFVBQVU7QUFDaEIsZ0JBQUEsTUFBTSxPQUFPO0FBRWpCLFlBQUE7QUFDRixpQkFBTyxRQUFRLE1BQU0sVUFBVSxVQUFVLEtBQUs7QUFBQSxpQkFDdkMsR0FBRztBQUNWLGNBQUksYUFBYSxVQUFVO0FBQ3JCLGdCQUFBLEVBQUUsVUFBVSxPQUFPO0FBRXJCLHFCQUFPLFFBQVE7QUFBQSxZQUFBLFdBQ04sRUFBRSxVQUFVLE9BQU87QUFFNUIscUJBQU8sUUFBUTtBQUFBLFlBQ2pCO0FBQUEsVUFDRjtBQUNBO0FBQUEsUUFDRjtBQUVBLGlCQUFTLFFBQVEsTUFBTSxVQUFVLFlBQVksS0FBSztBQUU5QyxZQUFBO0FBQ0Ysa0JBQVEsTUFBTSxRQUFRLE1BQU0sVUFBVSxXQUFXLEtBQUssR0FBRztBQUFBLFlBQ3ZELFlBQVksZUFBZSxLQUFLO0FBQUEsVUFBQTtBQUdsQyxrQkFBUSxNQUFNLFVBQVU7QUFDeEIsa0JBQVEsTUFBTSxVQUFVO0FBQUEsaUJBQ2pCLEdBQUc7QUFDVixjQUFJLGFBQWEsWUFBWSxFQUFFLFVBQVUsT0FBTztBQUM5QyxvQkFBUSxRQUFRO0FBQUEsY0FDZCxTQUFTO0FBQUEsY0FDVCxTQUFTO0FBQUEsY0FDVCxNQUFNLENBQUM7QUFBQSxZQUFBO0FBQUEsVUFDVCxPQUNLO0FBQ0Msa0JBQUE7QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEVBQUUsV0FBVyxLQUFLO0FBQUEsSUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
