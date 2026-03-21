import { Q as QTabs, a as QRouteTab } from "./QTabs-Bu6DNyVi.js";
import { Q as QToolbar } from "./QToolbar-BvVglfo1.js";
import { Q as QFooter } from "./QFooter-fN0Awtju.js";
import { J as defineComponent, K as useSettingsStore, ah as usePluralKit, L as storeToRefs, r as ref, w as watch, aW as useRoute, aZ as HTTPError, az as getNameSort, _ as _export_sfc, ag as createElementBlock, T as openBlock, S as createBlock, a0 as createCommentVNode, W as createVNode, ak as Fragment, V as resolveComponent, U as withCtx, $ as createTextVNode, a1 as QIcon, a_ as QLinearProgress } from "./index-Czhz81pV.js";
import { S as SystemCard, D as DescriptionDialog } from "./DescriptionDialog-DIPOa9EK.js";
import "./QResizeObserver-C6eZlNbd.js";
import "./rtl-DDpZOXNn.js";
import "./QMarkupTable-Co_abH1I.js";
import "./MemberCard-BSciiHjk.js";
import "./InitialFallbackAvatar-BwzLwT9D.js";
import "./index-BPlwBMVZ.js";
import "./RelativeTimeDisplay-DvRrdQnD.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IndexPage",
  setup(__props, { expose: __expose }) {
    __expose();
    const route = useRoute();
    const settingsStore = useSettingsStore();
    const pluralKit = usePluralKit();
    const { detectPronouns } = storeToRefs(settingsStore);
    const status = ref("loading");
    const system = ref(null);
    const fronters = ref(null);
    const members = ref({
      loading: true,
      allowed: true,
      list: []
    });
    const groups = ref({
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
        groups.value.loading = true;
        groups.value.list = [];
        try {
          system.value = await pluralKit.getSystem(newId);
        } catch (e) {
          if (e instanceof HTTPError) {
            if (e.status == 404) {
              status.value = "notfound";
            } else if (e.status == 403) {
              status.value = "forbidden";
            } else {
              throw e;
            }
          } else {
            throw e;
          }
          return;
        }
        fronters.value = await pluralKit.getFronters(newId);
        try {
          members.value.list = (await pluralKit.getMembers(newId)).toSorted(
            getNameSort(detectPronouns.value)
          );
          members.value.loading = false;
          members.value.allowed = true;
        } catch (e) {
          if (e instanceof HTTPError && e.status == 403) {
            members.value = {
              loading: false,
              allowed: false,
              list: []
            };
          } else {
            throw e;
          }
        }
        try {
          groups.value.list = (await pluralKit.getGroups(newId)).toSorted(
            getNameSort(detectPronouns.value)
          );
          groups.value.loading = false;
          groups.value.allowed = true;
        } catch (e) {
          if (e instanceof HTTPError && e.status == 403) {
            groups.value = {
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
    const __returned__ = { route, settingsStore, pluralKit, detectPronouns, status, system, fronters, members, groups, dialog, DescriptionDialog, SystemCard };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 2,
  class: "row q-mt-lg q-pa-md bg-lighten q-pa-md"
};
const _hoisted_2 = {
  key: 3,
  class: "row q-mt-lg q-pa-md bg-lighten"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      $setup.system ? (openBlock(), createElementBlock(
        Fragment,
        { key: 0 },
        [
          createVNode($setup["SystemCard"], {
            system: $setup.system,
            flat: ""
          }, null, 8, ["system"]),
          createVNode(_component_router_view, {
            dialog: $setup.dialog,
            system: $setup.system,
            fronters: $setup.fronters,
            members: $setup.members,
            groups: $setup.groups
          }, null, 8, ["dialog", "system", "fronters", "members", "groups"]),
          createVNode(QFooter, null, {
            default: withCtx(() => [
              createVNode(QToolbar, null, {
                default: withCtx(() => [
                  createVNode(QTabs, {
                    align: "center",
                    class: "bg-primary full-width"
                  }, {
                    default: withCtx(() => [
                      createVNode(QRouteTab, {
                        to: {
                          name: "lookup-system-fronters",
                          params: { id: $setup.route.params.id }
                        },
                        color: "primary",
                        icon: "person_search",
                        label: "Fronters"
                      }, null, 8, ["to"]),
                      createVNode(QRouteTab, {
                        to: {
                          name: "lookup-system-members",
                          params: { id: $setup.route.params.id }
                        },
                        color: "primary",
                        icon: "people",
                        label: "Members"
                      }, null, 8, ["to"]),
                      createVNode(QRouteTab, {
                        to: {
                          name: "lookup-system-groups",
                          params: { id: $setup.route.params.id }
                        },
                        color: "primary",
                        icon: "group",
                        label: "Groups"
                      }, null, 8, ["to"])
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
          })
        ],
        64
        /* STABLE_FRAGMENT */
      )) : $setup.status == "loading" ? (openBlock(), createBlock(QLinearProgress, {
        key: 1,
        indeterminate: ""
      })) : $setup.status == "forbidden" ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(QIcon, { name: "cross" }),
        _cache[0] || (_cache[0] = createTextVNode(
          " Not Allowed To View System ",
          -1
          /* CACHED */
        ))
      ])) : $setup.status == "notfound" ? (openBlock(), createElementBlock("div", _hoisted_2, [
        createVNode(QIcon, { name: "error" }),
        _cache[1] || (_cache[1] = createTextVNode(
          " System Not Found ",
          -1
          /* CACHED */
        ))
      ])) : createCommentVNode("v-if", true),
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
const IndexPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/pages/Lookup/System/IndexPage.vue"]]);
export {
  IndexPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhQYWdlLUJxdzVqdVFBLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvTG9va3VwL1N5c3RlbS9JbmRleFBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlIHYtaWY9XCJzeXN0ZW1cIj5cbiAgICA8c3lzdGVtLWNhcmQgOnN5c3RlbT1cInN5c3RlbVwiIGZsYXQgLz5cbiAgICA8cm91dGVyLXZpZXdcbiAgICAgIDpkaWFsb2c9XCJkaWFsb2dcIlxuICAgICAgOnN5c3RlbT1cInN5c3RlbVwiXG4gICAgICA6ZnJvbnRlcnM9XCJmcm9udGVyc1wiXG4gICAgICA6bWVtYmVycz1cIm1lbWJlcnNcIlxuICAgICAgOmdyb3Vwcz1cImdyb3Vwc1wiXG4gICAgLz5cbiAgICA8cS1mb290ZXI+XG4gICAgICA8cS10b29sYmFyPlxuICAgICAgICA8cS10YWJzIGFsaWduPVwiY2VudGVyXCIgY2xhc3M9XCJiZy1wcmltYXJ5IGZ1bGwtd2lkdGhcIj5cbiAgICAgICAgICA8cS1yb3V0ZS10YWJcbiAgICAgICAgICAgIDp0bz1cIntcbiAgICAgICAgICAgICAgbmFtZTogJ2xvb2t1cC1zeXN0ZW0tZnJvbnRlcnMnLFxuICAgICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IHJvdXRlLnBhcmFtcy5pZCB9LFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgaWNvbj1cInBlcnNvbl9zZWFyY2hcIlxuICAgICAgICAgICAgbGFiZWw9XCJGcm9udGVyc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cS1yb3V0ZS10YWJcbiAgICAgICAgICAgIDp0bz1cIntcbiAgICAgICAgICAgICAgbmFtZTogJ2xvb2t1cC1zeXN0ZW0tbWVtYmVycycsXG4gICAgICAgICAgICAgIHBhcmFtczogeyBpZDogcm91dGUucGFyYW1zLmlkIH0sXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBpY29uPVwicGVvcGxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTWVtYmVyc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cS1yb3V0ZS10YWJcbiAgICAgICAgICAgIDp0bz1cIntcbiAgICAgICAgICAgICAgbmFtZTogJ2xvb2t1cC1zeXN0ZW0tZ3JvdXBzJyxcbiAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiByb3V0ZS5wYXJhbXMuaWQgfSxcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGljb249XCJncm91cFwiXG4gICAgICAgICAgICBsYWJlbD1cIkdyb3Vwc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLXRhYnM+XG4gICAgICA8L3EtdG9vbGJhcj5cbiAgICA8L3EtZm9vdGVyPlxuICA8L3RlbXBsYXRlPlxuICA8cS1saW5lYXItcHJvZ3Jlc3Mgdi1lbHNlLWlmPVwic3RhdHVzID09ICdsb2FkaW5nJ1wiIGluZGV0ZXJtaW5hdGUgLz5cbiAgPGRpdlxuICAgIHYtZWxzZS1pZj1cInN0YXR1cyA9PSAnZm9yYmlkZGVuJ1wiXG4gICAgY2xhc3M9XCJyb3cgcS1tdC1sZyBxLXBhLW1kIGJnLWxpZ2h0ZW4gcS1wYS1tZFwiXG4gID5cbiAgICA8cS1pY29uIG5hbWU9XCJjcm9zc1wiIC8+XG4gICAgTm90IEFsbG93ZWQgVG8gVmlldyBTeXN0ZW1cbiAgPC9kaXY+XG4gIDxkaXYgdi1lbHNlLWlmPVwic3RhdHVzID09ICdub3Rmb3VuZCdcIiBjbGFzcz1cInJvdyBxLW10LWxnIHEtcGEtbWQgYmctbGlnaHRlblwiPlxuICAgIDxxLWljb24gbmFtZT1cImVycm9yXCIgLz5cbiAgICBTeXN0ZW0gTm90IEZvdW5kXG4gIDwvZGl2PlxuICA8ZGVzY3JpcHRpb24tZGlhbG9nIHJlZj1cImRpYWxvZ1wiIC8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSc7XG5pbXBvcnQgeyByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgeyBIVFRQRXJyb3IgfSBmcm9tICdwa2FwaS10cy9lcnJvcnMnO1xuXG5pbXBvcnQgeyBNZW1iZXIgfSBmcm9tICdzcmMvbW9kZWxzL01lbWJlcic7XG5pbXBvcnQgeyBTeXN0ZW0gfSBmcm9tICdzcmMvbW9kZWxzL1N5c3RlbSc7XG5pbXBvcnQgeyBGcm9udGVycyB9IGZyb20gJ3NyYy9tb2RlbHMvRnJvbnRlcnMnO1xuaW1wb3J0IHsgdXNlU2V0dGluZ3NTdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc2V0dGluZ3Mtc3RvcmUnO1xuXG5pbXBvcnQgRGVzY3JpcHRpb25EaWFsb2cgZnJvbSAnc3JjL2NvbXBvbmVudHMvRGVzY3JpcHRpb25EaWFsb2cudnVlJztcbmltcG9ydCBTeXN0ZW1DYXJkIGZyb20gJ3NyYy9jb21wb25lbnRzL0NhcmQvU3lzdGVtQ2FyZC52dWUnO1xuXG5pbXBvcnQgeyBnZXROYW1lU29ydCB9IGZyb20gJ3NyYy91dGlsJztcbmltcG9ydCB7IHVzZVBsdXJhbEtpdCB9IGZyb20gJ2Jvb3QvcGx1cmFsS2l0JztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnc3JjL21vZGVscy9Hcm91cCc7XG5cbmNvbnN0IHJvdXRlID0gdXNlUm91dGUoKTtcbmNvbnN0IHNldHRpbmdzU3RvcmUgPSB1c2VTZXR0aW5nc1N0b3JlKCk7XG5jb25zdCBwbHVyYWxLaXQgPSB1c2VQbHVyYWxLaXQoKTtcbmNvbnN0IHsgZGV0ZWN0UHJvbm91bnMgfSA9IHN0b3JlVG9SZWZzKHNldHRpbmdzU3RvcmUpO1xuXG5jb25zdCBzdGF0dXMgPSByZWY8J2xvYWRpbmcnIHwgJ2ZvcmJpZGRlbicgfCAnbm90Zm91bmQnPignbG9hZGluZycpO1xuY29uc3Qgc3lzdGVtID0gcmVmPFN5c3RlbSB8IG51bGw+KG51bGwpO1xuY29uc3QgZnJvbnRlcnMgPSByZWY8RnJvbnRlcnMgfCBudWxsPihudWxsKTtcbmNvbnN0IG1lbWJlcnMgPSByZWY8e1xuICBsb2FkaW5nOiBib29sZWFuO1xuICBhbGxvd2VkOiBib29sZWFuO1xuICBsaXN0OiBBcnJheTxNZW1iZXI+O1xufT4oe1xuICBsb2FkaW5nOiB0cnVlLFxuICBhbGxvd2VkOiB0cnVlLFxuICBsaXN0OiBbXSxcbn0pO1xuY29uc3QgZ3JvdXBzID0gcmVmPHtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgYWxsb3dlZDogYm9vbGVhbjtcbiAgbGlzdDogQXJyYXk8R3JvdXA+O1xufT4oe1xuICBsb2FkaW5nOiB0cnVlLFxuICBhbGxvd2VkOiB0cnVlLFxuICBsaXN0OiBbXSxcbn0pO1xuXG5jb25zdCBkaWFsb2cgPSByZWYoKTtcblxud2F0Y2goXG4gICgpID0+IHJvdXRlLnBhcmFtcy5pZCxcbiAgYXN5bmMgKG5ld0lkKSA9PiB7XG4gICAgaWYgKCFuZXdJZCB8fCBBcnJheS5pc0FycmF5KG5ld0lkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN5c3RlbS52YWx1ZSA9IG51bGw7XG4gICAgZnJvbnRlcnMudmFsdWUgPSBudWxsO1xuXG4gICAgbWVtYmVycy52YWx1ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICBtZW1iZXJzLnZhbHVlLmxpc3QgPSBbXTtcblxuICAgIGdyb3Vwcy52YWx1ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICBncm91cHMudmFsdWUubGlzdCA9IFtdO1xuXG4gICAgdHJ5IHtcbiAgICAgIHN5c3RlbS52YWx1ZSA9IGF3YWl0IHBsdXJhbEtpdC5nZXRTeXN0ZW0obmV3SWQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgSFRUUEVycm9yKSB7XG4gICAgICAgIGlmIChlLnN0YXR1cyA9PSA0MDQpIHtcbiAgICAgICAgICAvLyBOb3QgRm91bmRcbiAgICAgICAgICBzdGF0dXMudmFsdWUgPSAnbm90Zm91bmQnO1xuICAgICAgICB9IGVsc2UgaWYgKGUuc3RhdHVzID09IDQwMykge1xuICAgICAgICAgIC8vIEZvcmJpZGRlblxuICAgICAgICAgIHN0YXR1cy52YWx1ZSA9ICdmb3JiaWRkZW4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGU7IC8vIFJldGhyb3cgaWYgd2Ugc2hvdWxkbid0IGhhbmRsZSB0aGUgZXJyb3JcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZTsgLy8gUmV0aHJvdyBpZiB3ZSBzaG91bGRuJ3QgaGFuZGxlIHRoZSBlcnJvclxuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnJvbnRlcnMudmFsdWUgPSBhd2FpdCBwbHVyYWxLaXQuZ2V0RnJvbnRlcnMobmV3SWQpO1xuXG4gICAgdHJ5IHtcbiAgICAgIG1lbWJlcnMudmFsdWUubGlzdCA9IChhd2FpdCBwbHVyYWxLaXQuZ2V0TWVtYmVycyhuZXdJZCkpLnRvU29ydGVkKFxuICAgICAgICBnZXROYW1lU29ydChkZXRlY3RQcm9ub3Vucy52YWx1ZSksXG4gICAgICApO1xuXG4gICAgICBtZW1iZXJzLnZhbHVlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIG1lbWJlcnMudmFsdWUuYWxsb3dlZCA9IHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBIVFRQRXJyb3IgJiYgZS5zdGF0dXMgPT0gNDAzKSB7XG4gICAgICAgIG1lbWJlcnMudmFsdWUgPSB7XG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgYWxsb3dlZDogZmFsc2UsXG4gICAgICAgICAgbGlzdDogW10sXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBncm91cHMudmFsdWUubGlzdCA9IChhd2FpdCBwbHVyYWxLaXQuZ2V0R3JvdXBzKG5ld0lkKSkudG9Tb3J0ZWQoXG4gICAgICAgIGdldE5hbWVTb3J0KGRldGVjdFByb25vdW5zLnZhbHVlKSxcbiAgICAgICk7XG5cbiAgICAgIGdyb3Vwcy52YWx1ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBncm91cHMudmFsdWUuYWxsb3dlZCA9IHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBIVFRQRXJyb3IgJiYgZS5zdGF0dXMgPT0gNDAzKSB7XG4gICAgICAgIGdyb3Vwcy52YWx1ZSA9IHtcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBhbGxvd2VkOiBmYWxzZSxcbiAgICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7IGltbWVkaWF0ZTogdHJ1ZSB9LFxuKTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX2NyZWF0ZVZOb2RlIiwiX3dpdGhDdHgiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVGV4dFZOb2RlIiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQTZFQSxVQUFNLFFBQVEsU0FBUztBQUN2QixVQUFNLGdCQUFnQixpQkFBaUI7QUFDdkMsVUFBTSxZQUFZLGFBQWE7QUFDL0IsVUFBTSxFQUFFLGVBQUEsSUFBbUIsWUFBWSxhQUFhO0FBRTlDLFVBQUEsU0FBUyxJQUEwQyxTQUFTO0FBQzVELFVBQUEsU0FBUyxJQUFtQixJQUFJO0FBQ2hDLFVBQUEsV0FBVyxJQUFxQixJQUFJO0FBQzFDLFVBQU0sVUFBVSxJQUliO0FBQUEsTUFDRCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxNQUFNLENBQUE7QUFBQSxJQUFDLENBQ1I7QUFDRCxVQUFNLFNB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
