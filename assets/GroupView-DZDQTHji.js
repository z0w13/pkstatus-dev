import { Q as QItemLabel, a as QItem, b as QItemSection } from "./QItem-DBhEHxap.js";
import { J as defineComponent, K as useSettingsStore, L as storeToRefs, _ as _export_sfc, ag as createElementBlock, T as openBlock, W as createVNode, U as withCtx, S as createBlock, a0 as createCommentVNode, $ as createTextVNode, a2 as toDisplayString, a_ as QLinearProgress, ak as Fragment, an as renderList, am as normalizeStyle, X as normalizeClass } from "./index-Czhz81pV.js";
import { Q as QList } from "./QList-DTyO3bRG.js";
import { I as InitialFallbackAvatar } from "./InitialFallbackAvatar-BwzLwT9D.js";
import "./index-BPlwBMVZ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GroupView",
  props: {
    system: { type: Object, required: true },
    groups: { type: Object, required: true },
    dialog: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const settingsStore = useSettingsStore();
    const { lookup } = storeToRefs(settingsStore);
    const __returned__ = { settingsStore, lookup, InitialFallbackAvatar };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "row q-mt-lg bg-lighten" };
const _hoisted_2 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(QList, { class: "col" }, {
      default: withCtx(() => [
        $props.groups.allowed ? (openBlock(), createBlock(QItemLabel, {
          key: 0,
          style: { "line-height": "32px !important" },
          header: ""
        }, {
          default: withCtx(() => [
            _cache[0] || (_cache[0] = createTextVNode(
              " Groups ",
              -1
              /* CACHED */
            )),
            !$props.groups.loading ? (openBlock(), createElementBlock(
              "span",
              _hoisted_2,
              "(" + toDisplayString($props.groups.list.length) + ")",
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true)
          ]),
          _: 1,
          __: [0]
        })) : (openBlock(), createBlock(QItemLabel, {
          key: 1,
          header: ""
        }, {
          default: withCtx(() => _cache[1] || (_cache[1] = [
            createTextVNode(
              " Group List Private ",
              -1
              /* CACHED */
            )
          ])),
          _: 1,
          __: [1]
        })),
        $props.groups.loading ? (openBlock(), createBlock(QItem, { key: 2 }, {
          default: withCtx(() => [
            createVNode(QLinearProgress, { indeterminate: "" })
          ]),
          _: 1
          /* STABLE */
        })) : $props.groups.allowed ? (openBlock(true), createElementBlock(
          Fragment,
          { key: 3 },
          renderList($props.groups.list, (group) => {
            return openBlock(), createBlock(QItem, {
              key: group.id,
              clickable: "",
              class: normalizeClass({
                "color-accent": $setup.lookup.colorAccent,
                "bg-lighten": !_ctx.$q.dark.isActive
              }),
              style: normalizeStyle(
                (group.color && $setup.lookup.colorAccent ? `border-left-color: #${group.color};` : "") + (_ctx.$q.dark.isActive ? "background-color: var(--q-dark);" : "")
              ),
              onClick: ($event) => $props.dialog.show({ system: $props.system, group })
            }, {
              default: withCtx(() => [
                createVNode(
                  QItemSection,
                  { avatar: "" },
                  {
                    default: withCtx(() => [
                      createVNode($setup["InitialFallbackAvatar"], {
                        name: group.getName(),
                        url: group.icon
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
                      createTextVNode(
                        toDisplayString(group.getName()),
                        1
                        /* TEXT */
                      )
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
            }, 1032, ["class", "style", "onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        )) : createCommentVNode("v-if", true)
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const GroupView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/pages/Lookup/System/View/GroupView.vue"]]);
export {
  GroupView as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBWaWV3LURaRFFUSGppLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvTG9va3VwL1N5c3RlbS9WaWV3L0dyb3VwVmlldy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicm93IHEtbXQtbGcgYmctbGlnaHRlblwiPlxuICAgIDxxLWxpc3QgY2xhc3M9XCJjb2xcIj5cbiAgICAgIDxxLWl0ZW0tbGFiZWxcbiAgICAgICAgdi1pZj1cImdyb3Vwcy5hbGxvd2VkXCJcbiAgICAgICAgc3R5bGU9XCJsaW5lLWhlaWdodDogMzJweCAhaW1wb3J0YW50XCJcbiAgICAgICAgaGVhZGVyXG4gICAgICA+XG4gICAgICAgIEdyb3Vwc1xuICAgICAgICA8c3BhbiB2LWlmPVwiIWdyb3Vwcy5sb2FkaW5nXCI+KHt7IGdyb3Vwcy5saXN0Lmxlbmd0aCB9fSk8L3NwYW4+XG4gICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgdi1lbHNlIGhlYWRlcj4gR3JvdXAgTGlzdCBQcml2YXRlIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgPHEtaXRlbSB2LWlmPVwiZ3JvdXBzLmxvYWRpbmdcIj5cbiAgICAgICAgPHEtbGluZWFyLXByb2dyZXNzIGluZGV0ZXJtaW5hdGUgLz5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cImdyb3Vwcy5hbGxvd2VkXCI+XG4gICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICB2LWZvcj1cImdyb3VwIG9mIGdyb3Vwcy5saXN0XCJcbiAgICAgICAgICA6a2V5PVwiZ3JvdXAuaWRcIlxuICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICdjb2xvci1hY2NlbnQnOiBsb29rdXAuY29sb3JBY2NlbnQsXG4gICAgICAgICAgICAnYmctbGlnaHRlbic6ICEkcS5kYXJrLmlzQWN0aXZlLFxuICAgICAgICAgIH1cIlxuICAgICAgICAgIDpzdHlsZT1cIlxuICAgICAgICAgICAgKGdyb3VwLmNvbG9yICYmIGxvb2t1cC5jb2xvckFjY2VudFxuICAgICAgICAgICAgICA/IGBib3JkZXItbGVmdC1jb2xvcjogIyR7Z3JvdXAuY29sb3J9O2BcbiAgICAgICAgICAgICAgOiAnJykgK1xuICAgICAgICAgICAgKCRxLmRhcmsuaXNBY3RpdmUgPyAnYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcS1kYXJrKTsnIDogJycpXG4gICAgICAgICAgXCJcbiAgICAgICAgICBAY2xpY2s9XCJkaWFsb2cuc2hvdyh7IHN5c3RlbSwgZ3JvdXAgfSlcIlxuICAgICAgICA+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgIDxpbml0aWFsLWZhbGxiYWNrLWF2YXRhclxuICAgICAgICAgICAgICA6bmFtZT1cImdyb3VwLmdldE5hbWUoKVwiXG4gICAgICAgICAgICAgIDp1cmw9XCJncm91cC5pY29uXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gbm8td3JhcD5cbiAgICAgICAgICAgIHt7IGdyb3VwLmdldE5hbWUoKSB9fVxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3EtbGlzdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSc7XG5cbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJ3NyYy9tb2RlbHMvU3lzdGVtJztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnc3JjL21vZGVscy9Hcm91cCc7XG5cbmltcG9ydCB7IHVzZVNldHRpbmdzU3RvcmUgfSBmcm9tICdzcmMvc3RvcmVzL3NldHRpbmdzLXN0b3JlJztcblxuaW1wb3J0IEluaXRpYWxGYWxsYmFja0F2YXRhciBmcm9tICdzcmMvY29tcG9uZW50cy9Jbml0aWFsRmFsbGJhY2tBdmF0YXIudnVlJztcbmltcG9ydCBEZXNjcmlwdGlvbkRpYWxvZyBmcm9tICdzcmMvY29tcG9uZW50cy9EZXNjcmlwdGlvbkRpYWxvZy52dWUnO1xuXG5jb25zdCBzZXR0aW5nc1N0b3JlID0gdXNlU2V0dGluZ3NTdG9yZSgpO1xuY29uc3QgeyBsb29rdXAgfSA9IHN0b3JlVG9SZWZzKHNldHRpbmdzU3RvcmUpO1xuXG5kZWZpbmVQcm9wczx7XG4gIHN5c3RlbTogU3lzdGVtO1xuICBncm91cHM6IHtcbiAgICBsb2FkaW5nOiBib29sZWFuO1xuICAgIGFsbG93ZWQ6IGJvb2xlYW47XG4gICAgbGlzdDogQXJyYXk8R3JvdXA+O1xuICB9O1xuICBkaWFsb2c6IHR5cGVvZiBEZXNjcmlwdGlvbkRpYWxvZztcbn0+KCk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX3dpdGhDdHgiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX25vcm1hbGl6ZUNsYXNzIiwiJHEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBMERBLFVBQU0sZ0JBQWdCLGlCQUFpQjtBQUN2QyxVQUFNLEVBQUUsT0FBQSxJQUFXLFlBQVksYUFBYTs7Ozs7Ozs7O3NCQXhEdENBLG1CQU9lLE9BQUEsWUFBQTtBQUFBLElBQUFDLFlBTlAsT0FBYyxFQUFBLE9BQUEsTUFBQSxHQUFBO0FBQUEsTUFEdEIsU0FBQUMsUUFBQSxNQUFBO0FBQUEsUUFBQSxPQUFBLE9BQUEsV0FBQUMsVUFBQSxHQUVzQ0MsWUFBQSxZQUFBO0FBQUEsVUFDcEMsS0FBQTtBQUFBLFVBQUEsT0FBQSxFQUFBLGVBQUEsa0JBQUE7QUFBQTs7bUJBR2FGLFFBQU8sTUFBQTtBQUFBLFlBQXBCLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBRztBQUFBQSxjQUE4RDtBQUFBLGNBQUE7QUFBQTtBQUFBLFlBQUE7QUFBQSxZQUFoQyxDQUFBLE9BQUEsT0FBQSxXQUFBRixVQUFBLEdBQUFIO0FBQUFBOzs7Ozs7Ozs7UUFFTCxDQUFBLE1BQUFHLFVBQUEsR0FBQUMsWUFBQSxZQUFBO0FBQUEsVUFBQSxLQUFBO0FBQUE7Ozs7Ozs7Ozs7VUFDYixJQUFBLENBQUEsQ0FBQTtBQUFBLFFBQUEsQ0FBQTtBQUFBLFFBQ1osT0FBQSxPQUFBLFdBQUFELFVBQUEsR0FBQUMsWUFBbUMsT0FBaEIsRUFBQSxLQUFBLEtBQUE7QUFBQSxVQUFBLFNBQUFGLFFBQUEsTUFBQTtBQUFBOztVQUVBLEdBQUE7QUFBQTtBQUFBLFFBQUEsQ0FBQSxLQUFBLE9BQUEsT0FBQSxXQUFBQyxVQUdYLElBQU0sR0FBRUg7QUFBQUEsVUFBQU07QUFBQUEsVUFBQSxFQUFBLEtBQUEsRUFBQTtBQUFBLFVBQUFDLFdBQUEsT0FBQSxPQUFBLE1BQUEsQ0FBQSxVQUFBO21CQUNkSixVQUFTLEdBQUFDLFlBQUEsT0FBQTtBQUFBLGNBQ1IsS0FBSyxNQUFBO0FBQUEsY0FBZ0MsV0FBQTtBQUFBLGNBQXVELE9BQUFJLGVBQUE7QUFBQSxnQkFBQSxnQkFBQSxPQUFBLE9BQUE7QUFBQSxnQkFJdkYsY0FBQSxDQUFBLEtBQUEsR0FBQSxLQUFBO0FBQUEsY0FBQSxDQUFBO0FBQUE7NERBQTJJQyx1QkFBZ0IsTUFBQSxLQUFBLE1BQUEsT0FBQSxLQU1oSyxRQUFLLFdBQWdCLHFDQUFBO0FBQUEsY0FBQTtBQUFBLGNBT0wsU0FBQSxDQUFBLFdBQUEsT0FBQSxPQUFBLEtBQUEsRUFBQSxRQUFBLE9BQUEsUUFBQSxNQUFBLENBQUE7QUFBQSxZQUFBLEdBQUE7QUFBQSxjQURiLFNBQUFQLFFBQUEsTUFBQTtBQUFBLGdCQUFBRDtBQUFBQSxrQkFIRjtBQUFBLGtCQUdFLEVBQUEsUUFBQSxHQUFBO0FBQUEsa0JBQUE7QUFBQSxvQkFBQSxTQUZLQyxRQUFRLE1BQU87QUFBQSxzQkFBQUQsWUFDUixPQUFJLHVCQUFBLEdBQUE7QUFBQSx3QkFBQSxNQUFBLE1BQUEsUUFBQTtBQUFBOzs7b0JBR3BCLEdBQUE7QUFBQTtBQUFBLGtCQUFBO0FBQUE7O2dCQUN1QjtBQUFBLGdCQUFBQTtBQUFBQTtrQkFBbEIsRUFBYSxXQUFBLEdBQUE7QUFBQSxrQkFBQTtBQUFBLG9CQUFBLFNBQUFDLFFBQUEsTUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
