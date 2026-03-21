import { Q as QBtnToggle } from "./QBtnToggle-CoGCBGeU.js";
import { Q as QItemLabel, a as QItem } from "./QItem-DBhEHxap.js";
import { J as defineComponent, K as useSettingsStore, L as storeToRefs, _ as _export_sfc, ag as createElementBlock, T as openBlock, W as createVNode, U as withCtx, S as createBlock, a0 as createCommentVNode, Y as createBaseVNode, ak as Fragment, a_ as QLinearProgress } from "./index-Czhz81pV.js";
import { Q as QList } from "./QList-DTyO3bRG.js";
import { M as MemberList, a as MemberTable } from "./MemberList-B4nLyTOS.js";
import "./QBtnGroup-DSLUZYCx.js";
import "./QTable-BOq-QKNl.js";
import "./QMarkupTable-Co_abH1I.js";
import "./QSelect-DgwzAg-N.js";
import "./QMenu-BKVuNWhU.js";
import "./format-Dk2Vo7dJ.js";
import "./rtl-DDpZOXNn.js";
import "./InitialFallbackAvatar-BwzLwT9D.js";
import "./index-BPlwBMVZ.js";
import "./RelativeTimeDisplay-DvRrdQnD.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FronterView",
  props: {
    system: { type: Object, required: true },
    fronters: { type: [Object, null], required: true },
    dialog: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const settingsStore = useSettingsStore();
    const { detectPronouns, lookup } = storeToRefs(settingsStore);
    const __returned__ = { settingsStore, detectPronouns, lookup, MemberTable, MemberList };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "row q-mt-lg bg-lighten" };
const _hoisted_2 = {
  key: 0,
  class: "row"
};
const _hoisted_3 = { class: "col-auto" };
const _hoisted_4 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(QList, { class: "col" }, {
      default: withCtx(() => {
        var _a;
        return [
          createVNode(QItemLabel, { header: "" }, {
            default: withCtx(() => [
              !$props.fronters || $props.fronters.allowed ? (openBlock(), createElementBlock("div", _hoisted_2, [
                _cache[3] || (_cache[3] = createBaseVNode(
                  "div",
                  { class: "col self-center" },
                  "Fronters",
                  -1
                  /* CACHED */
                )),
                createBaseVNode("div", _hoisted_3, [
                  createVNode(QBtnToggle, {
                    modelValue: $setup.lookup.memberLayout,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.lookup.memberLayout = $event),
                    dense: "",
                    flat: "",
                    options: [
                      { value: "list", icon: "list" },
                      { value: "table", icon: "table_chart" }
                    ]
                  }, null, 8, ["modelValue"])
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_4, "Fronter List Private"))
            ]),
            _: 1
            /* STABLE */
          }),
          ((_a = $props.fronters) == null ? void 0 : _a.allowed) ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              $setup.lookup.memberLayout == "list" ? (openBlock(), createBlock($setup["MemberList"], {
                key: 0,
                members: $props.fronters.members,
                system: $props.system,
                "detect-pronouns": $setup.detectPronouns,
                "color-accent": $setup.lookup.colorAccent,
                onMemberClick: _cache[1] || (_cache[1] = (member) => $props.dialog.show({ system: $props.system, member }))
              }, null, 8, ["members", "system", "detect-pronouns", "color-accent"])) : $setup.lookup.memberLayout == "table" ? (openBlock(), createBlock($setup["MemberTable"], {
                key: 1,
                members: $props.fronters.members,
                system: $props.system,
                "detect-pronouns": $setup.detectPronouns,
                "color-accent": $setup.lookup.colorAccent,
                onMemberClick: _cache[2] || (_cache[2] = (member) => $props.dialog.show({ system: $props.system, member }))
              }, null, 8, ["members", "system", "detect-pronouns", "color-accent"])) : createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : !$props.fronters ? (openBlock(), createBlock(QItem, { key: 1 }, {
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
  ]);
}
const FronterView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/pages/Lookup/System/View/FronterView.vue"]]);
export {
  FronterView as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnJvbnRlclZpZXctRDlSd3JPakMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Mb29rdXAvU3lzdGVtL1ZpZXcvRnJvbnRlclZpZXcudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInJvdyBxLW10LWxnIGJnLWxpZ2h0ZW5cIj5cbiAgICA8cS1saXN0IGNsYXNzPVwiY29sXCI+XG4gICAgICA8cS1pdGVtLWxhYmVsIGhlYWRlcj5cbiAgICAgICAgPGRpdiB2LWlmPVwiIWZyb250ZXJzIHx8IGZyb250ZXJzLmFsbG93ZWRcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgc2VsZi1jZW50ZXJcIj5Gcm9udGVyczwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiPlxuICAgICAgICAgICAgPHEtYnRuLXRvZ2dsZVxuICAgICAgICAgICAgICB2LW1vZGVsPVwibG9va3VwLm1lbWJlckxheW91dFwiXG4gICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbXG4gICAgICAgICAgICAgICAgeyB2YWx1ZTogJ2xpc3QnLCBpY29uOiAnbGlzdCcgfSxcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiAndGFibGUnLCBpY29uOiAndGFibGVfY2hhcnQnIH0sXG4gICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgdi1lbHNlPkZyb250ZXIgTGlzdCBQcml2YXRlPC9kaXY+XG4gICAgICA8L3EtaXRlbS1sYWJlbD5cblxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmcm9udGVycz8uYWxsb3dlZFwiPlxuICAgICAgICA8bWVtYmVyLWxpc3RcbiAgICAgICAgICB2LWlmPVwibG9va3VwLm1lbWJlckxheW91dCA9PSAnbGlzdCdcIlxuICAgICAgICAgIDptZW1iZXJzPVwiZnJvbnRlcnMubWVtYmVyc1wiXG4gICAgICAgICAgOnN5c3RlbT1cInN5c3RlbVwiXG4gICAgICAgICAgOmRldGVjdC1wcm9ub3Vucz1cImRldGVjdFByb25vdW5zXCJcbiAgICAgICAgICA6Y29sb3ItYWNjZW50PVwibG9va3VwLmNvbG9yQWNjZW50XCJcbiAgICAgICAgICBAbWVtYmVyLWNsaWNrPVwiKG1lbWJlcikgPT4gZGlhbG9nLnNob3coeyBzeXN0ZW0sIG1lbWJlciB9KVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZW1iZXItdGFibGVcbiAgICAgICAgICB2LWVsc2UtaWY9XCJsb29rdXAubWVtYmVyTGF5b3V0ID09ICd0YWJsZSdcIlxuICAgICAgICAgIDptZW1iZXJzPVwiZnJvbnRlcnMubWVtYmVyc1wiXG4gICAgICAgICAgOnN5c3RlbT1cInN5c3RlbVwiXG4gICAgICAgICAgOmRldGVjdC1wcm9ub3Vucz1cImRldGVjdFByb25vdW5zXCJcbiAgICAgICAgICA6Y29sb3ItYWNjZW50PVwibG9va3VwLmNvbG9yQWNjZW50XCJcbiAgICAgICAgICBAbWVtYmVyLWNsaWNrPVwiKG1lbWJlcikgPT4gZGlhbG9nLnNob3coeyBzeXN0ZW0sIG1lbWJlciB9KVwiXG4gICAgICAgIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHEtaXRlbSB2LWVsc2UtaWY9XCIhZnJvbnRlcnNcIj5cbiAgICAgICAgPHEtbGluZWFyLXByb2dyZXNzIGluZGV0ZXJtaW5hdGUgLz5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvcS1saXN0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJztcblxuaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnc3JjL21vZGVscy9TeXN0ZW0nO1xuaW1wb3J0IHsgRnJvbnRlcnMgfSBmcm9tICdzcmMvbW9kZWxzL0Zyb250ZXJzJztcblxuaW1wb3J0IHsgdXNlU2V0dGluZ3NTdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc2V0dGluZ3Mtc3RvcmUnO1xuXG5pbXBvcnQgRGVzY3JpcHRpb25EaWFsb2cgZnJvbSAnc3JjL2NvbXBvbmVudHMvRGVzY3JpcHRpb25EaWFsb2cudnVlJztcbmltcG9ydCBNZW1iZXJUYWJsZSBmcm9tICdzcmMvcGFnZXMvTG9va3VwL1N5c3RlbS9NZW1iZXJUYWJsZS52dWUnO1xuaW1wb3J0IE1lbWJlckxpc3QgZnJvbSAnc3JjL3BhZ2VzL0xvb2t1cC9TeXN0ZW0vTWVtYmVyTGlzdC52dWUnO1xuXG5jb25zdCBzZXR0aW5nc1N0b3JlID0gdXNlU2V0dGluZ3NTdG9yZSgpO1xuY29uc3QgeyBkZXRlY3RQcm9ub3VucywgbG9va3VwIH0gPSBzdG9yZVRvUmVmcyhzZXR0aW5nc1N0b3JlKTtcblxuZGVmaW5lUHJvcHM8e1xuICBzeXN0ZW06IFN5c3RlbTtcbiAgZnJvbnRlcnM6IEZyb250ZXJzIHwgbnVsbDtcbiAgZGlhbG9nOiB0eXBlb2YgRGVzY3JpcHRpb25EaWFsb2c7XG59PigpO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9vcGVuQmxvY2siLCJfRnJhZ21lbnQiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlQ29tbWVudFZOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsVUFBTSxnQkFBZ0IsaUJBQWlCO0FBQ3ZDLFVBQU0sRUFBRSxnQkFBZ0IsV0FBVyxZQUFZLGFBQWE7Ozs7Ozs7TUF2RFYsYUFBVztBQUFBLEVBQUEsS0FBQTtBQUFBOzs7OztzQkFEdkRBLG1CQWdCZSxPQUFBLFlBQUE7QUFBQSxJQWhCZkMsWUFBQSxPQUFBLEVBQUEsT0FBQTtNQWNRLFNBQUFDLFFBQUEsTUFBQTs7QUFBQTtBQUFBLFVBYk1ELFlBQUEsWUFBQSxFQUFBLFFBQUEsR0FBQSxHQUE0QjtBQUFBLFlBQXhDLFNBQUFDLFFBQUEsTUFBQTtBQUFBLGNBQUEsQ0FBQSxPQUFBLFlBQUEsT0FBQSxTQUNFLHdCQVdNRixtQkFBQSxPQUFBLFlBQUE7QUFBQSxnQkFBQSxPQVRKLENBUUUsTUFBQSxPQUFBLENBQUEsSUFBQUc7QUFBQUEsa0JBQUE7QUFBQSxrQkFBQSxFQUFBLE9BQUEsa0JBQUE7QUFBQSxrQkFBQTtBQUFBLGtCQUFBO0FBQUE7QUFBQSxnQkFBQTtBQUFBLGdCQUFBQSxnQkFQUyxPQUFPLFlBQUE7QUFBQSxrQkFBQUYsWUFBQSxZQUFBO0FBQUEsb0JBQ2hCLFlBQUssT0FBQSxPQUFBO0FBQUEsb0JBQ0wsdUJBQUksT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBLE9BQUEsT0FBQSxlQUFBO0FBQUEsb0JBQ0gsT0FBTztBQUFBLG9CQUFBLE1BQUE7QUFBQTtzQkFHUCxFQUFBLE9BQUEsUUFBQSxNQUFBLE9BQUE7QUFBQSxzQkFBQSxFQUFBLE9BQUEsU0FBQSxNQUFBLGNBQUE7QUFBQTs7Ozs7WUFPTyxHQUFBO0FBQUE7QUFBQSxVQUFBLENBQUE7QUFBQSxZQUVOLFlBQUEsYUFBQSxtQkFBQSxZQUFBRyxVQUFBLEdBQUFKO0FBQUFBLFlBTU5LO0FBQUFBLFlBQUEsRUFBQSxLQUFBLEVBQUE7QUFBQSxZQUFBO0FBQUEsY0FBQSxPQUFBLE9BQUEsZ0JBQUEsVUFBQUQsVUFBQSxlQUxtQixPQUFPLFlBQUEsR0FBQTtBQUFBLGdCQUN6QixLQUFBO0FBQUEsZ0JBQ0EsU0FBaUIsT0FBQSxTQUFBO0FBQUEsZ0JBQ2pCLFFBQVksT0FBQTtBQUFBLGdCQUNaLG1CQUFZLE9BQUE7QUFBQSxnQkFBQSxnQkFBQSxPQUFBLE9BQUE7QUFBQSxnQkFHRixlQUFPLE9BQVksQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLE9BQUEsS0FBQSxFQUFBLFFBQUEsT0FBQSxRQUFBLFFBQUE7QUFBQSxjQUFBLEdBRGhDLE1BQUEsR0FBQSxDQUFBLFdBT0UsVUFMVSxtQkFBQSxjQUFBLENBQUEsS0FBQSxPQUFBLE9BQUEsZ0JBQUEsV0FBQUEsVUFBQSxHQUFBRSxZQUFTLE9BQU8sYUFBQSxHQUFBO0FBQUEsZ0JBQ3pCLEtBQUE7QUFBQSxnQkFDQSxTQUFpQixPQUFBLFNBQUE7QUFBQSxnQkFDakIsUUFBWSxPQUFBO0FBQUEsZ0JBQ1osbUJBQVksT0FBQTtBQUFBLGdCQUFBLGdCQUFBLE9BQUEsT0FBQTtBQUFBO3VGQUdHQyxtQkFBUSxRQUFBLElBQUE7QUFBQSxZQUFBO0FBQUE7O1VBQTVCLEtBQUEsQ0FBQSxPQUFBLFlBQUFILHlCQUNxQyxPQUFoQixFQUFBLEtBQUEsS0FBQTtBQUFBLFlBQUEsU0FBQUYsUUFBQSxNQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7In0=
