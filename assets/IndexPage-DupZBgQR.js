import { Q as QBtnToggle } from "./QBtnToggle-me-EbXoi.js";
import { Q as defineComponent, a_ as useRouter, a$ as useRoute, r as ref, t as onMounted, w as watch, U as resolveComponent, V as openBlock, W as createBlock, X as withCtx, a2 as createBaseVNode, Y as createVNode, b0 as withModifiers, _ as unref, aX as QInput, a0 as QBtn, af as _export_sfc } from "./index-C1u-_TOv.js";
import { Q as QPage } from "./QPage-C2tXGOnV.js";
import { P as PageTitle } from "./PageTitle-gQbGVrI-.js";
import "./QBtnGroup-CFYXjxkf.js";
const _hoisted_1 = { class: "col col-sm-6 col-md-4" };
const _hoisted_2 = { class: "bg-lighten q-pa-md" };
const _hoisted_3 = { class: "row q-ma-sm" };
const _hoisted_4 = { class: "col" };
const _hoisted_5 = { class: "row q-ma-sm" };
const _hoisted_6 = { class: "col" };
const _hoisted_7 = { class: "col-auto q-ml-md self-center" };
const _hoisted_8 = { class: "row q-mt-lg" };
const _hoisted_9 = { class: "col" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IndexPage",
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
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
    async function lookup() {
      router.push({ path: `/lookup/${searchType.value}/${searchValue.value}` });
      searchValue.value = "";
    }
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(QPage, { class: "row justify-evenly" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(PageTitle, {
                icon: "settings",
                text: "Lookup System/Member"
              }),
              createBaseVNode(
                "form",
                {
                  onSubmit: withModifiers(lookup, ["prevent"])
                },
                [
                  createBaseVNode("div", _hoisted_3, [
                    createBaseVNode("div", _hoisted_4, [
                      createVNode(QBtnToggle, {
                        modelValue: searchType.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchType.value = $event),
                        color: "black",
                        options: [
                          { label: "System", value: "system" },
                          { label: "Member", value: "member" }
                        ]
                      }, null, 8, ["modelValue"])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_5, [
                    createBaseVNode("div", _hoisted_6, [
                      createVNode(QInput, {
                        ref_key: "searchInput",
                        ref: searchInput,
                        modelValue: searchValue.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchValue.value = $event),
                        filled: "",
                        autofocus: unref(route).name == "lookup",
                        label: `Enter ${searchType.value} ID`
                      }, null, 8, ["modelValue", "autofocus", "label"])
                    ]),
                    createBaseVNode("div", _hoisted_7, [
                      createVNode(QBtn, {
                        round: "",
                        disabled: searchValue.value.length < 5,
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
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                createVNode(_component_router_view)
              ])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
const IndexPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/zowie/dev/pkstatus/src/pages/Lookup/IndexPage.vue"]]);
export {
  IndexPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhQYWdlLUR1cFpCZ1FSLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvTG9va3VwL0luZGV4UGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1wYWdlIGNsYXNzPVwicm93IGp1c3RpZnktZXZlbmx5XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtc20tNiBjb2wtbWQtNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImJnLWxpZ2h0ZW4gcS1wYS1tZFwiPlxuICAgICAgICA8cGFnZS10aXRsZSBpY29uPVwic2V0dGluZ3NcIiB0ZXh0PVwiTG9va3VwIFN5c3RlbS9NZW1iZXJcIiAvPlxuICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJsb29rdXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtbWEtc21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPHEtYnRuLXRvZ2dsZVxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hUeXBlXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIltcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdTeXN0ZW0nLCB2YWx1ZTogJ3N5c3RlbScgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdNZW1iZXInLCB2YWx1ZTogJ21lbWJlcicgfSxcbiAgICAgICAgICAgICAgICBdXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1tYS1zbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICAgIHJlZj1cInNlYXJjaElucHV0XCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoVmFsdWVcIlxuICAgICAgICAgICAgICAgIGZpbGxlZFxuICAgICAgICAgICAgICAgIDphdXRvZm9jdXM9XCJyb3V0ZS5uYW1lID09ICdsb29rdXAnXCJcbiAgICAgICAgICAgICAgICA6bGFiZWw9XCJgRW50ZXIgJHtzZWFyY2hUeXBlfSBJRGBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gcS1tbC1tZCBzZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cInNlYXJjaFZhbHVlLmxlbmd0aCA8IDVcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgaWNvbj1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IHEtbXQtbGdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgIDxyb3V0ZXItdmlldyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gJ3NyYy9jb21wb25lbnRzL1BhZ2VUaXRsZS52dWUnO1xuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlLCB1c2VSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJztcblxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zdCByb3V0ZSA9IHVzZVJvdXRlKCk7XG5cbmNvbnN0IHNlYXJjaFR5cGUgPSByZWYoJ3N5c3RlbScpO1xuY29uc3Qgc2VhcmNoVmFsdWUgPSByZWYoJycpO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSByZWYoKTtcblxub25Nb3VudGVkKCgpID0+IHtcbiAgd2F0Y2goXG4gICAgKCkgPT4gcm91dGUubmFtZSxcbiAgICAocm91dGVOYW1lKSA9PiByb3V0ZU5hbWUgPT0gJ2xvb2t1cCcgJiYgc2VhcmNoSW5wdXQudmFsdWUuZm9jdXMoKSxcbiAgICB7IGltbWVkaWF0ZTogdHJ1ZSB9LFxuICApO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvb2t1cCgpIHtcbiAgcm91dGVyLnB1c2goeyBwYXRoOiBgL2xvb2t1cC8ke3NlYXJjaFR5cGUudmFsdWV9LyR7c2VhcmNoVmFsdWUudmFsdWV9YCB9KTtcbiAgc2VhcmNoVmFsdWUudmFsdWUgPSAnJztcbn1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0RBLFVBQU0sU0FBUztBQUNmLFVBQU0sUUFBUTtBQUVSLFVBQUEsYUFBYSxJQUFJLFFBQVE7QUFDekIsVUFBQSxjQUFjLElBQUksRUFBRTtBQUMxQixVQUFNLGNBQWM7QUFFcEIsY0FBVSxNQUFNO0FBQ2Q7QUFBQSxRQUNFLE1BQU0sTUFBTTtBQUFBLFFBQ1osQ0FBQyxjQUFjLGFBQWEsWUFBWSxZQUFZLE1BQU0sTUFBTTtBQUFBLFFBQ2hFLEVBQUUsV0FBVyxLQUFLO0FBQUEsTUFBQTtBQUFBLElBQ3BCLENBQ0Q7QUFFRCxtQkFBZSxTQUFTO0FBQ2YsYUFBQSxLQUFLLEVBQUUsTUFBTSxXQUFXLFdBQVcsS0FBSyxJQUFJLFlBQVksS0FBSyxHQUFJLENBQUE7QUFDeEUsa0JBQVksUUFBUTtBQUFBLElBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
