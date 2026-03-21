import { J as defineComponent, ah as usePluralKit, r as ref, w as watch, aW as useRoute, aZ as HTTPError, _ as _export_sfc, S as createBlock, ag as createElementBlock, a0 as createCommentVNode, T as openBlock, a_ as QLinearProgress } from "./index-Czhz81pV.js";
import { M as MemberCard } from "./MemberCard-BSciiHjk.js";
import "./QMarkupTable-Co_abH1I.js";
import "./InitialFallbackAvatar-BwzLwT9D.js";
import "./index-BPlwBMVZ.js";
import "./RelativeTimeDisplay-DvRrdQnD.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MemberPage",
  setup(__props, { expose: __expose }) {
    __expose();
    const route = useRoute();
    const pluralKit = usePluralKit();
    const status = ref("loading");
    const member = ref(null);
    const system = ref(null);
    watch(
      () => route.params.id,
      async (newId) => {
        if (!newId || Array.isArray(newId)) {
          return;
        }
        member.value = null;
        try {
          member.value = await pluralKit.getMember(newId);
          system.value = await pluralKit.getSystem(member.value.system);
        } catch (e) {
          if (e instanceof HTTPError) {
            if (e.status == 404) {
              status.value = "notfound";
            } else if (e.status == 403) {
              status.value = "forbidden";
            }
          }
        }
      },
      { immediate: true }
    );
    const __returned__ = { route, pluralKit, status, member, system, MemberCard };
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
  class: "row q-mt-lg q-pa-md bg-lighten q-pa-md"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.member && $setup.system ? (openBlock(), createBlock($setup["MemberCard"], {
    key: 0,
    member: $setup.member,
    system: $setup.system,
    flat: ""
  }, null, 8, ["member", "system"])) : $setup.status == "loading" ? (openBlock(), createBlock(QLinearProgress, {
    key: 1,
    indeterminate: ""
  })) : $setup.status == "forbidden" ? (openBlock(), createElementBlock("div", _hoisted_1, " Not Allowed To View Member ")) : $setup.status == "notfound" ? (openBlock(), createElementBlock("div", _hoisted_2, " Member Not Found ")) : createCommentVNode("v-if", true);
}
const MemberPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/pages/Lookup/MemberPage.vue"]]);
export {
  MemberPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyUGFnZS1DcmtpUjl6Ty5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0xvb2t1cC9NZW1iZXJQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSB2LWlmPVwibWVtYmVyICYmIHN5c3RlbVwiPlxuICAgIDxtZW1iZXItY2FyZCA6bWVtYmVyPVwibWVtYmVyXCIgOnN5c3RlbT1cInN5c3RlbVwiIGZsYXQgLz5cbiAgPC90ZW1wbGF0ZT5cbiAgPHEtbGluZWFyLXByb2dyZXNzIHYtZWxzZS1pZj1cInN0YXR1cyA9PSAnbG9hZGluZydcIiBpbmRldGVybWluYXRlIC8+XG4gIDxkaXZcbiAgICB2LWVsc2UtaWY9XCJzdGF0dXMgPT0gJ2ZvcmJpZGRlbidcIlxuICAgIGNsYXNzPVwicm93IHEtbXQtbGcgcS1wYS1tZCBiZy1saWdodGVuIHEtcGEtbWRcIlxuICA+XG4gICAgTm90IEFsbG93ZWQgVG8gVmlldyBNZW1iZXJcbiAgPC9kaXY+XG4gIDxkaXZcbiAgICB2LWVsc2UtaWY9XCJzdGF0dXMgPT0gJ25vdGZvdW5kJ1wiXG4gICAgY2xhc3M9XCJyb3cgcS1tdC1sZyBxLXBhLW1kIGJnLWxpZ2h0ZW4gcS1wYS1tZFwiXG4gID5cbiAgICBNZW1iZXIgTm90IEZvdW5kXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlUm91dGUgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCB7IEhUVFBFcnJvciB9IGZyb20gJ3BrYXBpLXRzL2Vycm9ycyc7XG5cbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJ3NyYy9tb2RlbHMvU3lzdGVtJztcbmltcG9ydCB7IE1lbWJlciB9IGZyb20gJ3NyYy9tb2RlbHMvTWVtYmVyJztcblxuaW1wb3J0IE1lbWJlckNhcmQgZnJvbSAnc3JjL2NvbXBvbmVudHMvQ2FyZC9NZW1iZXJDYXJkLnZ1ZSc7XG5pbXBvcnQgeyB1c2VQbHVyYWxLaXQgfSBmcm9tICdib290L3BsdXJhbEtpdCc7XG5cbmNvbnN0IHJvdXRlID0gdXNlUm91dGUoKTtcblxuY29uc3QgcGx1cmFsS2l0ID0gdXNlUGx1cmFsS2l0KCk7XG5cbmNvbnN0IHN0YXR1cyA9IHJlZjwnbG9hZGluZycgfCAnZm9yYmlkZGVuJyB8ICdub3Rmb3VuZCc+KCdsb2FkaW5nJyk7XG5jb25zdCBtZW1iZXIgPSByZWY8TWVtYmVyIHwgbnVsbD4obnVsbCk7XG5jb25zdCBzeXN0ZW0gPSByZWY8U3lzdGVtIHwgbnVsbD4obnVsbCk7XG5cbndhdGNoKFxuICAoKSA9PiByb3V0ZS5wYXJhbXMuaWQsXG4gIGFzeW5jIChuZXdJZCkgPT4ge1xuICAgIGlmICghbmV3SWQgfHwgQXJyYXkuaXNBcnJheShuZXdJZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZW1iZXIudmFsdWUgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIG1lbWJlci52YWx1ZSA9IGF3YWl0IHBsdXJhbEtpdC5nZXRNZW1iZXIobmV3SWQpO1xuICAgICAgc3lzdGVtLnZhbHVlID0gYXdhaXQgcGx1cmFsS2l0LmdldFN5c3RlbShtZW1iZXIudmFsdWUuc3lzdGVtKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIEhUVFBFcnJvcikge1xuICAgICAgICBpZiAoZS5zdGF0dXMgPT0gNDA0KSB7XG4gICAgICAgICAgLy8gTm90IEZvdW5kXG4gICAgICAgICAgc3RhdHVzLnZhbHVlID0gJ25vdGZvdW5kJztcbiAgICAgICAgfSBlbHNlIGlmIChlLnN0YXR1cyA9PSA0MDMpIHtcbiAgICAgICAgICAvLyBGb3JiaWRkZW5cbiAgICAgICAgICBzdGF0dXMudmFsdWUgPSAnZm9yYmlkZGVuJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgeyBpbW1lZGlhdGU6IHRydWUgfSxcbik7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVDb21tZW50Vk5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUE4QkEsVUFBTSxRQUFRLFNBQVM7QUFFdkIsVUFBTSxZQUFZLGFBQWE7QUFFekIsVUFBQSxTQUFTLElBQTBDLFNBQVM7QUFDNUQsVUFBQSxTQUFTLElBQW1CLElBQUk7QUFDaEMsVUFBQSxTQUFTLElBQW1CLElBQUk7QUFFdEM7QUFBQSxNQUNFLE1BQU0sTUFBTSxPQUFPO0FBQUEsTUFDbkIsT0FBTyxVQUFVO0FBQ2YsWUFBSSxDQUFDLFNBQVMsTUFBTSxRQUFRLEtBQUssR0FBRztBQUNsQztBQUFBLFFBQUE7QUFHRixlQUFPLFFBQVE7QUFFWCxZQUFBO0FBQ0YsaUJBQU8sUUFBUSxNQUFNLFVBQVUsVUFBVSxLQUFLO0FBQzlDLGlCQUFPLFFBQVEsTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLE1BQU07QUFBQSxpQkFDckQsR0FBRztBQUNWLGNBQUksYUFBYSxXQUFXO0FBQ3RCLGdCQUFBLEVBQUUsVUFBVSxLQUFLO0FBRW5CLHFCQUFPLFFBQVE7QUFBQSxZQUFBLFdBQ04sRUFBRSxVQUFVLEtBQUs7QUFFMUIscUJBQU8sUUFBUTtBQUFBLFlBQUE7QUFBQSxVQUNqQjtBQUFBLFFBQ0Y7QUFBQSxNQUVKO0FBQUEsTUFDQSxFQUFFLFdBQVcsS0FBSztBQUFBLElBQ3BCOzs7Ozs7TUF4REksYUFBTTtBQUFBLEVBQUEsS0FBQTtBQUFBOztNQU1OLGFBQU07QUFBQSxFQUFBLEtBQUE7QUFBQTs7O3dEQVhzQkEsWUFBQSxPQUFBLFlBQUEsR0FBQTtBQUFBLElBQUcsS0FBQTtBQUFBLElBQWdCLFFBQUksT0FBQTtBQUFBLElBQUEsUUFBQSxPQUFBO0FBQUEsSUFFdkIsTUFBQTtBQUFBLEVBQTlCLEdBQUEsTUFBQSxHQUFBLENBQUEsVUFBbUUseURBQUhBLFlBQUEsaUJBQUE7QUFBQSxJQUFBLEtBQUE7QUFBQSxJQUVuRCxlQUFNO0FBQUEsRUFBQSxDQU1OLEtBQUEsT0FBQSxVQUFNLGVBRG5CQyxhQUFBQyxtQkFBQSxPQUtNLFlBQU4sOEJBQUEsS0FBQSxPQUFBLFVBQUEsY0FBQUQsYUFBQUMsbUJBQUEsT0FBQSxZQUFBLG9CQUFBLEtBQUFDLG1CQUFBLFFBQUEsSUFBQTs7OyJ9
