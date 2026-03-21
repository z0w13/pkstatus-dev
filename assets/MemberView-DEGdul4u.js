import { Q as QBtnToggle } from "./QBtnToggle-CoGCBGeU.js";
import { Q as QItemLabel, a as QItem } from "./QItem-DBhEHxap.js";
import { J as defineComponent, K as useSettingsStore, L as storeToRefs, _ as _export_sfc, ag as createElementBlock, T as openBlock, W as createVNode, U as withCtx, S as createBlock, a0 as createCommentVNode, Y as createBaseVNode, $ as createTextVNode, a2 as toDisplayString, a_ as QLinearProgress, ak as Fragment } from "./index-Czhz81pV.js";
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
  __name: "MemberView",
  props: {
    system: { type: Object, required: true },
    members: { type: Object, required: true },
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
const _hoisted_3 = { class: "col self-center" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { class: "col-auto" };
const _hoisted_6 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(QList, { class: "col" }, {
      default: withCtx(() => [
        createVNode(QItemLabel, { header: "" }, {
          default: withCtx(() => [
            $props.members.allowed ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                _cache[3] || (_cache[3] = createTextVNode(
                  " Members ",
                  -1
                  /* CACHED */
                )),
                !$props.members.loading ? (openBlock(), createElementBlock(
                  "span",
                  _hoisted_4,
                  "(" + toDisplayString($props.members.list.length) + ")",
                  1
                  /* TEXT */
                )) : createCommentVNode("v-if", true)
              ]),
              createBaseVNode("div", _hoisted_5, [
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
            ])) : (openBlock(), createElementBlock("div", _hoisted_6, "Member List Private"))
          ]),
          _: 1
          /* STABLE */
        }),
        $props.members.loading ? (openBlock(), createBlock(QItem, { key: 0 }, {
          default: withCtx(() => [
            createVNode(QLinearProgress, { indeterminate: "" })
          ]),
          _: 1
          /* STABLE */
        })) : $props.members.allowed ? (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            $setup.lookup.memberLayout == "list" ? (openBlock(), createBlock($setup["MemberList"], {
              key: 0,
              members: $props.members.list,
              system: $props.system,
              "detect-pronouns": $setup.detectPronouns,
              "color-accent": $setup.lookup.colorAccent,
              onMemberClick: _cache[1] || (_cache[1] = (member) => $props.dialog.show({ system: $props.system, member }))
            }, null, 8, ["members", "system", "detect-pronouns", "color-accent"])) : createCommentVNode("v-if", true),
            $setup.lookup.memberLayout == "table" ? (openBlock(), createBlock($setup["MemberTable"], {
              key: 1,
              members: $props.members.list,
              system: $props.system,
              "detect-pronouns": $setup.detectPronouns,
              "color-accent": $setup.lookup.colorAccent,
              onMemberClick: _cache[2] || (_cache[2] = (member) => $props.dialog.show({ system: $props.system, member }))
            }, null, 8, ["members", "system", "detect-pronouns", "color-accent"])) : createCommentVNode("v-if", true)
          ],
          64
          /* STABLE_FRAGMENT */
        )) : createCommentVNode("v-if", true)
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const MemberView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/pages/Lookup/System/View/MemberView.vue"]]);
export {
  MemberView as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyVmlldy1ERUdkdWw0dS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0xvb2t1cC9TeXN0ZW0vVmlldy9NZW1iZXJWaWV3LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb3cgcS1tdC1sZyBiZy1saWdodGVuXCI+XG4gICAgPHEtbGlzdCBjbGFzcz1cImNvbFwiPlxuICAgICAgPHEtaXRlbS1sYWJlbCBoZWFkZXI+XG4gICAgICAgIDxkaXYgdi1pZj1cIm1lbWJlcnMuYWxsb3dlZFwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBzZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgTWVtYmVyc1xuICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFtZW1iZXJzLmxvYWRpbmdcIj4oe3sgbWVtYmVycy5saXN0Lmxlbmd0aCB9fSk8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvXCI+XG4gICAgICAgICAgICA8cS1idG4tdG9nZ2xlXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJsb29rdXAubWVtYmVyTGF5b3V0XCJcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICA6b3B0aW9ucz1cIltcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiAnbGlzdCcsIGljb246ICdsaXN0JyB9LFxuICAgICAgICAgICAgICAgIHsgdmFsdWU6ICd0YWJsZScsIGljb246ICd0YWJsZV9jaGFydCcgfSxcbiAgICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWVsc2U+TWVtYmVyIExpc3QgUHJpdmF0ZTwvZGl2PlxuICAgICAgPC9xLWl0ZW0tbGFiZWw+XG5cbiAgICAgIDxxLWl0ZW0gdi1pZj1cIm1lbWJlcnMubG9hZGluZ1wiPlxuICAgICAgICA8cS1saW5lYXItcHJvZ3Jlc3MgaW5kZXRlcm1pbmF0ZSAvPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwibWVtYmVycy5hbGxvd2VkXCI+XG4gICAgICAgIDxtZW1iZXItbGlzdFxuICAgICAgICAgIHYtaWY9XCJsb29rdXAubWVtYmVyTGF5b3V0ID09ICdsaXN0J1wiXG4gICAgICAgICAgOm1lbWJlcnM9XCJtZW1iZXJzLmxpc3RcIlxuICAgICAgICAgIDpzeXN0ZW09XCJzeXN0ZW1cIlxuICAgICAgICAgIDpkZXRlY3QtcHJvbm91bnM9XCJkZXRlY3RQcm9ub3Vuc1wiXG4gICAgICAgICAgOmNvbG9yLWFjY2VudD1cImxvb2t1cC5jb2xvckFjY2VudFwiXG4gICAgICAgICAgQG1lbWJlci1jbGljaz1cIihtZW1iZXIpID0+IGRpYWxvZy5zaG93KHsgc3lzdGVtLCBtZW1iZXIgfSlcIlxuICAgICAgICAvPlxuICAgICAgICA8bWVtYmVyLXRhYmxlXG4gICAgICAgICAgdi1pZj1cImxvb2t1cC5tZW1iZXJMYXlvdXQgPT0gJ3RhYmxlJ1wiXG4gICAgICAgICAgOm1lbWJlcnM9XCJtZW1iZXJzLmxpc3RcIlxuICAgICAgICAgIDpzeXN0ZW09XCJzeXN0ZW1cIlxuICAgICAgICAgIDpkZXRlY3QtcHJvbm91bnM9XCJkZXRlY3RQcm9ub3Vuc1wiXG4gICAgICAgICAgOmNvbG9yLWFjY2VudD1cImxvb2t1cC5jb2xvckFjY2VudFwiXG4gICAgICAgICAgQG1lbWJlci1jbGljaz1cIihtZW1iZXIpID0+IGRpYWxvZy5zaG93KHsgc3lzdGVtLCBtZW1iZXIgfSlcIlxuICAgICAgICAvPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3EtbGlzdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSc7XG5cbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJ3NyYy9tb2RlbHMvU3lzdGVtJztcbmltcG9ydCB7IE1lbWJlciB9IGZyb20gJ3NyYy9tb2RlbHMvTWVtYmVyJztcblxuaW1wb3J0IHsgdXNlU2V0dGluZ3NTdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc2V0dGluZ3Mtc3RvcmUnO1xuXG5pbXBvcnQgRGVzY3JpcHRpb25EaWFsb2cgZnJvbSAnc3JjL2NvbXBvbmVudHMvRGVzY3JpcHRpb25EaWFsb2cudnVlJztcbmltcG9ydCBNZW1iZXJUYWJsZSBmcm9tICdzcmMvcGFnZXMvTG9va3VwL1N5c3RlbS9NZW1iZXJUYWJsZS52dWUnO1xuaW1wb3J0IE1lbWJlckxpc3QgZnJvbSAnc3JjL3BhZ2VzL0xvb2t1cC9TeXN0ZW0vTWVtYmVyTGlzdC52dWUnO1xuXG5jb25zdCBzZXR0aW5nc1N0b3JlID0gdXNlU2V0dGluZ3NTdG9yZSgpO1xuY29uc3QgeyBkZXRlY3RQcm9ub3VucywgbG9va3VwIH0gPSBzdG9yZVRvUmVmcyhzZXR0aW5nc1N0b3JlKTtcblxuZGVmaW5lUHJvcHM8e1xuICBzeXN0ZW06IFN5c3RlbTtcbiAgbWVtYmVyczoge1xuICAgIGxvYWRpbmc6IGJvb2xlYW47XG4gICAgYWxsb3dlZDogYm9vbGVhbjtcbiAgICBsaXN0OiBSZWFkb25seUFycmF5PE1lbWJlcj47XG4gIH07XG4gIGRpYWxvZzogdHlwZW9mIERlc2NyaXB0aW9uRGlhbG9nO1xufT4oKTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJfY3JlYXRlQmxvY2siLCJfRnJhZ21lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQSxVQUFNLGdCQUFnQixpQkFBaUI7QUFDdkMsVUFBTSxFQUFFLGdCQUFnQixXQUFXLFlBQVksYUFBYTs7Ozs7OztNQTFEeEIsYUFBVztBQUFBLEVBQUEsS0FBQTtBQUFBOztBQUtoQyxNQUFBLGFBQUEsRUFBQSxPQUFNLGtCQUFVOzs7OztzQkFOekJBLG1CQW1CZSxPQUFBLFlBQUE7QUFBQSxJQW5CZkMsWUFBQSxPQUFBLEVBQUEsT0FBQTtNQWlCUSxTQUFBQyxRQUFBLE1BQUE7QUFBQSxRQUFBRCxZQWhCSyxZQUFlLEVBQUEsUUFBQSxHQUFBLEdBQUE7QUFBQSxVQUExQixTQUFBQyxRQUFBLE1BQUE7QUFBQSxZQUFBLE9BQ0UsUUFBNkIsV0FBQUMsVUFBQSxHQUFBSCxtQkFBQSxPQUFBLFlBQUE7QUFBQSxjQUFBSSxnQkFFTixPQUFPLFlBQUE7QUFBQSxnQkFBNUIsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUFDO0FBQUFBLGtCQUFnRTtBQUFBLGtCQUFBO0FBQUE7QUFBQSxnQkFBQTtBQUFBLGdCQUFqQyxDQUFBLE9BQUEsUUFBQSxXQUFBRixVQUFBLEdBQUFIO0FBQUFBOzs7OztnQkFFakMsS0FBQU0sbUJBVU0sUUFWTixJQVVNO0FBQUEsY0FBQSxDQUFBO0FBQUEsOEJBUk8sT0FBTyxZQUFBO0FBQUEsZ0JBQUFMLFlBQUEsWUFBQTtBQUFBLGtCQUNoQixZQUFLLE9BQUEsT0FBQTtBQUFBLGtCQUNMLHVCQUFJLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLE9BQUEsZUFBQTtBQUFBLGtCQUNILE9BQU87QUFBQSxrQkFBQSxNQUFBO0FBQUE7b0JBR1AsRUFBQSxPQUFBLFFBQUEsTUFBQSxPQUFBO0FBQUEsb0JBQUEsRUFBQSxPQUFBLFNBQUEsTUFBQSxjQUFBO0FBQUE7Ozs7O1VBT0ssR0FBQTtBQUFBO0FBQUEsUUFBQSxDQUFBO0FBQUEsUUFDWixPQUFBLFFBQUEsV0FBQUUsVUFBQSxHQUFBSSxZQUFtQyxPQUFoQixFQUFBLEtBQUEsS0FBQTtBQUFBLFVBQUEsU0FBQUwsUUFBQSxNQUFBO0FBQUE7O1VBRUEsR0FBQTtBQUFBO0FBQUEsUUFFWCxDQUFBLEtBQUEsT0FBQSxRQUFBLFdBQUFDLFVBQUEsR0FBQUg7QUFBQUEsVUFNTlE7QUFBQUEsVUFBQSxFQUFBLEtBQUEsRUFBQTtBQUFBLFVBQUE7QUFBQSxZQUFBLE9BQUEsT0FBQSxnQkFBQSxVQUFBTCxVQUFBLGVBTGtCLE9BQUksWUFBQSxHQUFBO0FBQUEsY0FDckIsS0FBQTtBQUFBLGNBQ0EsU0FBaUIsT0FBQSxRQUFBO0FBQUEsY0FDakIsUUFBWSxPQUFBO0FBQUEsY0FDWixtQkFBWSxPQUFBO0FBQUEsY0FBQSxnQkFBQSxPQUFBLE9BQUE7QUFBQTtZQUdQLEdBQUEsTUFBQSxHQUFtQixnRkFEM0IsUUFPRSxJQUFBO0FBQUEsWUFBQSxPQUFBLE9BQUEsZ0JBQUEsV0FBQUEsVUFBQSxlQUxrQixPQUFJLGFBQUEsR0FBQTtBQUFBLGNBQ3JCLEtBQUE7QUFBQSxjQUNBLFNBQWlCLE9BQUEsUUFBQTtBQUFBLGNBQ2pCLFFBQVksT0FBQTtBQUFBLGNBQ1osbUJBQVksT0FBQTtBQUFBLGNBQUEsZ0JBQUEsT0FBQSxPQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7In0=
