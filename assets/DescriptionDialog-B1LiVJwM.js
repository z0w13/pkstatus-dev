import { Q as defineComponent, R as useSettingsStore, T as storeToRefs, V as openBlock, W as createBlock, X as withCtx, aa as QCard, Y as createVNode, a2 as createBaseVNode, _ as unref, a4 as createCommentVNode, a1 as createTextVNode, a5 as toDisplayString, ab as QCardSection, aE as createElementBlock, ac as QCardActions, a0 as QBtn, aM as normalizeStyle, a6 as QSeparator, b2 as pushScopeId, b3 as popScopeId, af as _export_sfc, r as ref, a9 as QDialog } from "./index-C1u-_TOv.js";
import { v as vue3Fitty_commonExports, M as MemberCard } from "./MemberCard-Bif0S6_X.js";
import { Q as QMarkupTable } from "./QMarkupTable-BsLt63RP.js";
import { I as InitialFallbackAvatar } from "./InitialFallbackAvatar-B9wHc8ll.js";
const _withScopeId = (n) => (pushScopeId("data-v-dbcc97c0"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "col-auto self-center" };
const _hoisted_2 = { class: "col q-ml-md self-center" };
const _hoisted_3 = ["src"];
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "td",
  null,
  "ID",
  -1
  /* HOISTED */
));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "td",
  null,
  "Created At",
  -1
  /* HOISTED */
));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "td",
  null,
  "Tag",
  -1
  /* HOISTED */
));
const _hoisted_7 = { key: 0 };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "td",
  null,
  "Pronouns",
  -1
  /* HOISTED */
));
const _hoisted_9 = { key: 1 };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "td",
  null,
  "Color",
  -1
  /* HOISTED */
));
const _hoisted_11 = { class: "description" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SystemCard",
  props: {
    system: { type: Object, required: true },
    details: { type: Boolean, required: false, default: true },
    popup: { type: Boolean, required: false, default: false }
  },
  setup(__props) {
    const settings = useSettingsStore();
    const { detectPronouns } = storeToRefs(settings);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, null, {
        default: withCtx(() => [
          createVNode(QCardSection, { class: "row" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                _ctx.system.avatarUrl ? (openBlock(), createBlock(InitialFallbackAvatar, {
                  key: 0,
                  size: "64px",
                  url: _ctx.system.avatarUrl,
                  name: _ctx.system.getName(unref(detectPronouns))
                }, null, 8, ["url", "name"])) : createCommentVNode("v-if", true)
              ]),
              createBaseVNode("div", _hoisted_2, [
                createVNode(unref(vue3Fitty_commonExports.Fitty), {
                  style: { "line-height": "100%" },
                  options: { maxSize: 100 }
                }, {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString(_ctx.system.getName(unref(detectPronouns))),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          _ctx.system.bannerUrl ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: _ctx.system.bannerUrl
          }, null, 8, _hoisted_3)) : createCommentVNode("v-if", true),
          _ctx.popup ? (openBlock(), createBlock(QCardActions, {
            key: 1,
            class: "bg-primary"
          }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                flat: "",
                label: "View Full System",
                to: `/lookup/system/${_ctx.system.id}`
              }, null, 8, ["to"])
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true),
          _ctx.details ? (openBlock(), createBlock(QCardSection, {
            key: 2,
            class: "q-pt-none"
          }, {
            default: withCtx(() => [
              createVNode(QMarkupTable, {
                flat: "",
                separator: "horizontal",
                style: { "overflow": "hidden" }
              }, {
                default: withCtx(() => [
                  createBaseVNode("tbody", null, [
                    createBaseVNode("tr", null, [
                      _hoisted_4,
                      createBaseVNode(
                        "td",
                        null,
                        toDisplayString(_ctx.system.id),
                        1
                        /* TEXT */
                      )
                    ]),
                    createBaseVNode("tr", null, [
                      _hoisted_5,
                      createBaseVNode(
                        "td",
                        null,
                        toDisplayString(_ctx.system.createdAt.format("YYYY-MM-DD")),
                        1
                        /* TEXT */
                      )
                    ]),
                    createBaseVNode("tr", null, [
                      _hoisted_6,
                      createBaseVNode(
                        "td",
                        null,
                        toDisplayString(_ctx.system.tag),
                        1
                        /* TEXT */
                      )
                    ]),
                    _ctx.system.getPronouns(unref(detectPronouns)) ? (openBlock(), createElementBlock("tr", _hoisted_7, [
                      _hoisted_8,
                      createBaseVNode(
                        "td",
                        null,
                        toDisplayString(_ctx.system.getPronouns(unref(detectPronouns))),
                        1
                        /* TEXT */
                      )
                    ])) : createCommentVNode("v-if", true),
                    _ctx.system.color ? (openBlock(), createElementBlock("tr", _hoisted_9, [
                      _hoisted_10,
                      createBaseVNode(
                        "td",
                        {
                          style: normalizeStyle({
                            color: `#${_ctx.system.color}`,
                            fontSize: "48px",
                            lineHeight: "16px",
                            textIndent: "-4px"
                          })
                        },
                        " • ",
                        4
                        /* STYLE */
                      )
                    ])) : createCommentVNode("v-if", true)
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true),
          createVNode(QSeparator),
          _ctx.system.description.length > 0 ? (openBlock(), createBlock(QCardSection, { key: 3 }, {
            default: withCtx(() => [
              createBaseVNode(
                "pre",
                _hoisted_11,
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
      });
    };
  }
});
const SystemCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-dbcc97c0"], ["__file", "/home/zowie/dev/pkstatus/src/components/Card/SystemCard.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DescriptionDialog",
  setup(__props, { expose: __expose }) {
    const { showCardDetails } = storeToRefs(useSettingsStore());
    const visible = ref(false);
    const member = ref(null);
    const system = ref(null);
    function show(opts) {
      member.value = opts.member || null;
      system.value = opts.system || null;
      visible.value = true;
    }
    __expose({
      show
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: visible.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => visible.value = $event)
      }, {
        default: withCtx(() => [
          system.value && !member.value ? (openBlock(), createBlock(SystemCard, {
            key: 0,
            system: system.value,
            details: unref(showCardDetails),
            popup: true
          }, null, 8, ["system", "details"])) : createCommentVNode("v-if", true),
          member.value && system.value ? (openBlock(), createBlock(MemberCard, {
            key: 1,
            member: member.value,
            system: system.value,
            details: unref(showCardDetails),
            popup: true
          }, null, 8, ["member", "system", "details"])) : createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]);
    };
  }
});
const DescriptionDialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/zowie/dev/pkstatus/src/components/DescriptionDialog.vue"]]);
export {
  DescriptionDialog as D,
  SystemCard as S
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzY3JpcHRpb25EaWFsb2ctQjFMaVZKd00uanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvU3lzdGVtQ2FyZC52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EZXNjcmlwdGlvbkRpYWxvZy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1jYXJkPlxuICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIHNlbGYtY2VudGVyXCI+XG4gICAgICAgIDxpbml0aWFsLWZhbGxiYWNrLWF2YXRhclxuICAgICAgICAgIHYtaWY9XCJzeXN0ZW0uYXZhdGFyVXJsXCJcbiAgICAgICAgICBzaXplPVwiNjRweFwiXG4gICAgICAgICAgOnVybD1cInN5c3RlbS5hdmF0YXJVcmxcIlxuICAgICAgICAgIDpuYW1lPVwic3lzdGVtLmdldE5hbWUoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbCBxLW1sLW1kIHNlbGYtY2VudGVyXCI+XG4gICAgICAgIDxmaXR0eSBzdHlsZT1cImxpbmUtaGVpZ2h0OiAxMDAlXCIgOm9wdGlvbnM9XCJ7IG1heFNpemU6IDEwMCB9XCI+XG4gICAgICAgICAge3sgc3lzdGVtLmdldE5hbWUoZGV0ZWN0UHJvbm91bnMpIH19XG4gICAgICAgIDwvZml0dHk+XG4gICAgICA8L2Rpdj5cbiAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDxpbWcgdi1pZj1cInN5c3RlbS5iYW5uZXJVcmxcIiA6c3JjPVwic3lzdGVtLmJhbm5lclVybFwiIC8+XG4gICAgPHEtY2FyZC1hY3Rpb25zIHYtaWY9XCJwb3B1cFwiIGNsYXNzPVwiYmctcHJpbWFyeVwiPlxuICAgICAgPHEtYnRuXG4gICAgICAgIGZsYXRcbiAgICAgICAgbGFiZWw9XCJWaWV3IEZ1bGwgU3lzdGVtXCJcbiAgICAgICAgOnRvPVwiYC9sb29rdXAvc3lzdGVtLyR7c3lzdGVtLmlkfWBcIlxuICAgICAgLz5cbiAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgIDxxLWNhcmQtc2VjdGlvbiB2LWlmPVwiZGV0YWlsc1wiIGNsYXNzPVwicS1wdC1ub25lXCI+XG4gICAgICA8cS1tYXJrdXAtdGFibGUgZmxhdCBzZXBhcmF0b3I9XCJob3Jpem9udGFsXCIgc3R5bGU9XCJvdmVyZmxvdzogaGlkZGVuXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+SUQ8L3RkPlxuICAgICAgICAgICAgPHRkPnt7IHN5c3RlbS5pZCB9fTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+Q3JlYXRlZCBBdDwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3sgc3lzdGVtLmNyZWF0ZWRBdC5mb3JtYXQoJ1lZWVktTU0tREQnKSB9fTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+VGFnPC90ZD5cbiAgICAgICAgICAgIDx0ZD57eyBzeXN0ZW0udGFnIH19PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciB2LWlmPVwic3lzdGVtLmdldFByb25vdW5zKGRldGVjdFByb25vdW5zKVwiPlxuICAgICAgICAgICAgPHRkPlByb25vdW5zPC90ZD5cbiAgICAgICAgICAgIDx0ZD57eyBzeXN0ZW0uZ2V0UHJvbm91bnMoZGV0ZWN0UHJvbm91bnMpIH19PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciB2LWlmPVwic3lzdGVtLmNvbG9yXCI+XG4gICAgICAgICAgICA8dGQ+Q29sb3I8L3RkPlxuICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgICAgICAgICBjb2xvcjogYCMke3N5c3RlbS5jb2xvcn1gLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnNDhweCcsXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzE2cHgnLFxuICAgICAgICAgICAgICAgIHRleHRJbmRlbnQ6ICctNHB4JyxcbiAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICZidWxsO1xuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9xLW1hcmt1cC10YWJsZT5cbiAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDxxLXNlcGFyYXRvciAvPlxuICAgIDxxLWNhcmQtc2VjdGlvbiB2LWlmPVwic3lzdGVtLmRlc2NyaXB0aW9uLmxlbmd0aCA+IDBcIj5cbiAgICAgIDxwcmUgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IHN5c3RlbS5kZXNjcmlwdGlvbiB9fTwvcHJlPlxuICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gIDwvcS1jYXJkPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IEZpdHR5IH0gZnJvbSAnQGx1bWVucGluay92dWUzLWZpdHR5JztcbmltcG9ydCB7IHN0b3JlVG9SZWZzIH0gZnJvbSAncGluaWEnO1xuaW1wb3J0IEluaXRpYWxGYWxsYmFja0F2YXRhciBmcm9tICdzcmMvY29tcG9uZW50cy9Jbml0aWFsRmFsbGJhY2tBdmF0YXIudnVlJztcblxuaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnc3JjL21vZGVscy9TeXN0ZW0nO1xuaW1wb3J0IHsgdXNlU2V0dGluZ3NTdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc2V0dGluZ3Mtc3RvcmUnO1xuXG5jb25zdCBzZXR0aW5ncyA9IHVzZVNldHRpbmdzU3RvcmUoKTtcbmNvbnN0IHsgZGV0ZWN0UHJvbm91bnMgfSA9IHN0b3JlVG9SZWZzKHNldHRpbmdzKTtcblxud2l0aERlZmF1bHRzKFxuICBkZWZpbmVQcm9wczx7IHN5c3RlbTogU3lzdGVtOyBkZXRhaWxzPzogYm9vbGVhbjsgcG9wdXA/OiBib29sZWFuIH0+KCksXG4gIHtcbiAgICBkZXRhaWxzOiB0cnVlLFxuICAgIHBvcHVwOiBmYWxzZSxcbiAgfSxcbik7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwiY3NzXCI+XG50ZDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxudGQ6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLWRpYWxvZyB2LW1vZGVsPVwidmlzaWJsZVwiPlxuICAgIDxzeXN0ZW0tY2FyZFxuICAgICAgdi1pZj1cInN5c3RlbSAmJiAhbWVtYmVyXCJcbiAgICAgIDpzeXN0ZW09XCJzeXN0ZW1cIlxuICAgICAgOmRldGFpbHM9XCJzaG93Q2FyZERldGFpbHNcIlxuICAgICAgOnBvcHVwPVwidHJ1ZVwiXG4gICAgLz5cbiAgICA8bWVtYmVyLWNhcmRcbiAgICAgIHYtaWY9XCJtZW1iZXIgJiYgc3lzdGVtXCJcbiAgICAgIDptZW1iZXI9XCJtZW1iZXJcIlxuICAgICAgOnN5c3RlbT1cInN5c3RlbVwiXG4gICAgICA6ZGV0YWlscz1cInNob3dDYXJkRGV0YWlsc1wiXG4gICAgICA6cG9wdXA9XCJ0cnVlXCJcbiAgICAvPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IE1lbWJlciB9IGZyb20gJ3NyYy9tb2RlbHMvTWVtYmVyJztcbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJ3NyYy9tb2RlbHMvU3lzdGVtJztcbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7XG5cbmltcG9ydCBNZW1iZXJDYXJkIGZyb20gJ3NyYy9jb21wb25lbnRzL0NhcmQvTWVtYmVyQ2FyZC52dWUnO1xuaW1wb3J0IFN5c3RlbUNhcmQgZnJvbSAnc3JjL2NvbXBvbmVudHMvQ2FyZC9TeXN0ZW1DYXJkLnZ1ZSc7XG5pbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJztcbmltcG9ydCB7IHVzZVNldHRpbmdzU3RvcmUgfSBmcm9tICdzcmMvc3RvcmVzL3NldHRpbmdzLXN0b3JlJztcblxuY29uc3QgeyBzaG93Q2FyZERldGFpbHMgfSA9IHN0b3JlVG9SZWZzKHVzZVNldHRpbmdzU3RvcmUoKSk7XG5cbmNvbnN0IHZpc2libGUgPSByZWYoZmFsc2UpO1xuY29uc3QgbWVtYmVyID0gcmVmPE1lbWJlciB8IG51bGw+KG51bGwpO1xuY29uc3Qgc3lzdGVtID0gcmVmPFN5c3RlbSB8IG51bGw+KG51bGwpO1xuXG5mdW5jdGlvbiBzaG93KG9wdHM6IHsgc3lzdGVtPzogU3lzdGVtOyBtZW1iZXI/OiBNZW1iZXIgfSkge1xuICBtZW1iZXIudmFsdWUgPSBvcHRzLm1lbWJlciB8fCBudWxsO1xuICBzeXN0ZW0udmFsdWUgPSBvcHRzLnN5c3RlbSB8fCBudWxsO1xuXG4gIHZpc2libGUudmFsdWUgPSB0cnVlO1xufVxuXG5kZWZpbmVFeHBvc2Uoe1xuICBzaG93LFxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyRUEsVUFBTSxXQUFXO0FBQ2pCLFVBQU0sRUFBRSxlQUFBLElBQW1CLFlBQVksUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRC9DLFVBQU0sRUFBRSxnQkFBb0IsSUFBQSxZQUFZLGlCQUFrQixDQUFBO0FBRXBELFVBQUEsVUFBVSxJQUFJLEtBQUs7QUFDbkIsVUFBQSxTQUFTLElBQW1CLElBQUk7QUFDaEMsVUFBQSxTQUFTLElBQW1CLElBQUk7QUFFdEMsYUFBUyxLQUFLLE1BQTRDO0FBQ2pELGFBQUEsUUFBUSxLQUFLLFVBQVU7QUFDdkIsYUFBQSxRQUFRLEtBQUssVUFBVTtBQUU5QixjQUFRLFFBQVE7QUFBQSxJQUNsQjtBQUVhLGFBQUE7QUFBQSxNQUNYO0FBQUEsSUFBQSxDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
