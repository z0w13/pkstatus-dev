import { Q as QBtnToggle } from "./QBtnToggle-CoGCBGeU.js";
import { J as defineComponent, K as useSettingsStore, L as storeToRefs, r as ref, t as onMounted, w as watch, aW as useRoute, aX as useRouter, _ as _export_sfc, S as createBlock, T as openBlock, U as withCtx, V as resolveComponent, Y as createBaseVNode, X as normalizeClass, W as createVNode, aY as withModifiers, aD as QInput, Z as QBtn } from "./index-Czhz81pV.js";
import { Q as QPage } from "./QPage-B7Tg8hoM.js";
import { P as PageTitle } from "./PageTitle-BKiEeIBH.js";
import "./QBtnGroup-DSLUZYCx.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IndexPage",
  setup(__props, { expose: __expose }) {
    __expose();
    const router = useRouter();
    const route = useRoute();
    const settingsStore = useSettingsStore();
    const { lookup } = storeToRefs(settingsStore);
    const labels = {
      system: "Enter system ID/UUID or Discord ID",
      member: "Enter member ID/UUID",
      group: "Enter group ID/UUID"
    };
    const searchType = ref("system");
    const searchValue = ref("");
    const searchInput = ref();
    onMounted(() => {
      watch(
        () => route.name,
        (routeName) => routeName == "lookup" && searchInput.value.focus(),
        { immediate: true }
      );
    });
    async function doLookup() {
      await router.push({
        name: `lookup-${searchType.value}`,
        params: { id: searchValue.value }
      });
      searchValue.value = "";
    }
    const __returned__ = { router, route, settingsStore, lookup, labels, searchType, searchValue, searchInput, doLookup, PageTitle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "bg-lighten q-pa-md" };
const _hoisted_2 = { class: "row q-ma-sm" };
const _hoisted_3 = { class: "col" };
const _hoisted_4 = { class: "row q-ma-sm" };
const _hoisted_5 = { class: "col" };
const _hoisted_6 = { class: "col-auto q-ml-md self-center" };
const _hoisted_7 = { class: "row q-mt-lg" };
const _hoisted_8 = { class: "col" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createBlock(QPage, { class: "row justify-evenly" }, {
    default: withCtx(() => {
      var _a, _b;
      return [
        createBaseVNode(
          "div",
          {
            class: normalizeClass({
              col: true,
              "col-sm-6 col-xs-12": $setup.lookup.memberLayout == "list" || !((_a = $setup.route.name) == null ? void 0 : _a.toString().startsWith("lookup-system")),
              "col-md-8 col-lg-6": $setup.lookup.memberLayout == "table" && ((_b = $setup.route.name) == null ? void 0 : _b.toString().startsWith("lookup-system"))
            })
          },
          [
            createVNode($setup["PageTitle"], {
              icon: "search",
              text: "Lookup System/Member"
            }),
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode(
                "form",
                {
                  onSubmit: withModifiers($setup.doLookup, ["prevent"])
                },
                [
                  createBaseVNode("div", _hoisted_2, [
                    createBaseVNode("div", _hoisted_3, [
                      createVNode(QBtnToggle, {
                        modelValue: $setup.searchType,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.searchType = $event),
                        color: "black",
                        options: [
                          { label: "System", value: "system" },
                          { label: "Member", value: "member" },
                          { label: "Group", value: "group" }
                        ]
                      }, null, 8, ["modelValue"])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_4, [
                    createBaseVNode("div", _hoisted_5, [
                      createVNode(QInput, {
                        ref: "searchInput",
                        modelValue: $setup.searchValue,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.searchValue = $event),
                        modelModifiers: { trim: true },
                        filled: "",
                        autofocus: $setup.route.name == "lookup",
                        label: $setup.labels[$setup.searchType]
                      }, null, 8, ["modelValue", "autofocus", "label"])
                    ]),
                    createBaseVNode("div", _hoisted_6, [
                      createVNode(QBtn, {
                        round: "",
                        disabled: $setup.searchValue.length < 5,
                        color: "primary",
                        icon: "search",
                        type: "submit"
                      }, null, 8, ["disabled"])
                    ])
                  ])
                ],
                32
                /* NEED_HYDRATION */
              )
            ]),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                createVNode(_component_router_view)
              ])
            ])
          ],
          2
          /* CLASS */
        )
      ];
    }),
    _: 1
    /* STABLE */
  });
}
const IndexPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/pages/Lookup/IndexPage.vue"]]);
export {
  IndexPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhQYWdlLUN1YjNFOXVkLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvTG9va3VwL0luZGV4UGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1wYWdlIGNsYXNzPVwicm93IGp1c3RpZnktZXZlbmx5XCI+XG4gICAgPGRpdlxuICAgICAgOmNsYXNzPVwie1xuICAgICAgICBjb2w6IHRydWUsXG4gICAgICAgICdjb2wtc20tNiBjb2wteHMtMTInOlxuICAgICAgICAgIGxvb2t1cC5tZW1iZXJMYXlvdXQgPT0gJ2xpc3QnIHx8XG4gICAgICAgICAgIXJvdXRlLm5hbWU/LnRvU3RyaW5nKCkuc3RhcnRzV2l0aCgnbG9va3VwLXN5c3RlbScpLFxuICAgICAgICAnY29sLW1kLTggY29sLWxnLTYnOlxuICAgICAgICAgIGxvb2t1cC5tZW1iZXJMYXlvdXQgPT0gJ3RhYmxlJyAmJlxuICAgICAgICAgIHJvdXRlLm5hbWU/LnRvU3RyaW5nKCkuc3RhcnRzV2l0aCgnbG9va3VwLXN5c3RlbScpLFxuICAgICAgfVwiXG4gICAgPlxuICAgICAgPHBhZ2UtdGl0bGUgaWNvbj1cInNlYXJjaFwiIHRleHQ9XCJMb29rdXAgU3lzdGVtL01lbWJlclwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmctbGlnaHRlbiBxLXBhLW1kXCI+XG4gICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cImRvTG9va3VwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLW1hLXNtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxxLWJ0bi10b2dnbGVcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoVHlwZVwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnU3lzdGVtJywgdmFsdWU6ICdzeXN0ZW0nIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnTWVtYmVyJywgdmFsdWU6ICdtZW1iZXInIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnR3JvdXAnLCB2YWx1ZTogJ2dyb3VwJyB9LFxuICAgICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLW1hLXNtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgICAgcmVmPVwic2VhcmNoSW5wdXRcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cInNlYXJjaFZhbHVlXCJcbiAgICAgICAgICAgICAgICBmaWxsZWRcbiAgICAgICAgICAgICAgICA6YXV0b2ZvY3VzPVwicm91dGUubmFtZSA9PSAnbG9va3VwJ1wiXG4gICAgICAgICAgICAgICAgOmxhYmVsPVwibGFiZWxzW3NlYXJjaFR5cGVdXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIHEtbWwtbWQgc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJzZWFyY2hWYWx1ZS5sZW5ndGggPCA1XCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGljb249XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLW10LWxnXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICA8cm91dGVyLXZpZXcgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICdzcmMvY29tcG9uZW50cy9QYWdlVGl0bGUudnVlJztcbmltcG9ydCB7IHN0b3JlVG9SZWZzIH0gZnJvbSAncGluaWEnO1xuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlLCB1c2VSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJztcblxuaW1wb3J0IHsgdXNlU2V0dGluZ3NTdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc2V0dGluZ3Mtc3RvcmUnO1xuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IHJvdXRlID0gdXNlUm91dGUoKTtcbmNvbnN0IHNldHRpbmdzU3RvcmUgPSB1c2VTZXR0aW5nc1N0b3JlKCk7XG5cbmNvbnN0IHsgbG9va3VwIH0gPSBzdG9yZVRvUmVmcyhzZXR0aW5nc1N0b3JlKTtcblxuY29uc3QgbGFiZWxzID0ge1xuICBzeXN0ZW06ICdFbnRlciBzeXN0ZW0gSUQvVVVJRCBvciBEaXNjb3JkIElEJyxcbiAgbWVtYmVyOiAnRW50ZXIgbWVtYmVyIElEL1VVSUQnLFxuICBncm91cDogJ0VudGVyIGdyb3VwIElEL1VVSUQnLFxufTtcblxuY29uc3Qgc2VhcmNoVHlwZSA9IHJlZjwnc3lzdGVtJyB8ICdtZW1iZXInIHwgJ2dyb3VwJz4oJ3N5c3RlbScpO1xuY29uc3Qgc2VhcmNoVmFsdWUgPSByZWYoJycpO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSByZWYoKTtcblxub25Nb3VudGVkKCgpID0+IHtcbiAgd2F0Y2goXG4gICAgKCkgPT4gcm91dGUubmFtZSxcbiAgICAocm91dGVOYW1lKSA9PiByb3V0ZU5hbWUgPT0gJ2xvb2t1cCcgJiYgc2VhcmNoSW5wdXQudmFsdWUuZm9jdXMoKSxcbiAgICB7IGltbWVkaWF0ZTogdHJ1ZSB9LFxuICApO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGRvTG9va3VwKCkge1xuICBhd2FpdCByb3V0ZXIucHVzaCh7XG4gICAgbmFtZTogYGxvb2t1cC0ke3NlYXJjaFR5cGUudmFsdWV9YCxcbiAgICBwYXJhbXM6IHsgaWQ6IHNlYXJjaFZhbHVlLnZhbHVlIH0sXG4gIH0pO1xuICBzZWFyY2hWYWx1ZS52YWx1ZSA9ICcnO1xufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl9jcmVhdGVCbG9jayIsIl93aXRoQ3R4IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl93aXRoTW9kaWZpZXJzIiwiX2NyZWF0ZVZOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFvRUEsVUFBTSxTQUFTLFVBQVU7QUFDekIsVUFBTSxRQUFRLFNBQVM7QUFDdkIsVUFBTSxnQkFBZ0IsaUJBQWlCO0FBRXZDLFVBQU0sRUFBRSxPQUFBLElBQVcsWUFBWSxhQUFhO0FBRTVDLFVBQU0sU0FBUztBQUFBLE1BQ2IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLElBQ1Q7QUFFTSxVQUFBLGFBQWEsSUFBbUMsUUFBUTtBQUN4RCxVQUFBLGNBQWMsSUFBSSxFQUFFO0FBQzFCLFVBQU0sY0FBYyxJQUFJO0FBRXhCLGNBQVUsTUFBTTtBQUNkO0FBQUEsUUFDRSxNQUFNLE1BQU07QUFBQSxRQUNaLENBQUMsY0FBYyxhQUFhLFlBQVksWUFBWSxNQUFNLE1BQU07QUFBQSxRQUNoRSxFQUFFLFdBQVcsS0FBSztBQUFBLE1BQ3BCO0FBQUEsSUFBQSxDQUNEO0FBRUQsbUJBQWUsV0FBVztBQUN4QixZQUFNLE9BQU8sS0FBSztBQUFBLFFBQ2hCLE1BQU0sVUFBVSxXQUFXLEtBQUs7QUFBQSxR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
