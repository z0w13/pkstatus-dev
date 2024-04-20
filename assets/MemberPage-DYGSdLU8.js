import { Q as defineComponent, a$ as useRoute, aC as useServices, r as ref, w as watch, V as openBlock, W as createBlock, aE as createElementBlock, a4 as createCommentVNode, aV as APIError, b1 as QLinearProgress, af as _export_sfc } from "./index-C1u-_TOv.js";
import { M as MemberCard } from "./MemberCard-Bif0S6_X.js";
import "./QMarkupTable-BsLt63RP.js";
import "./InitialFallbackAvatar-B9wHc8ll.js";
import "./index-DRTIEHtT.js";
import "./RelativeTimeDisplay-SNX72-cs.js";
const _hoisted_1 = {
  key: 2,
  class: "row q-mt-lg q-pa-md bg-lighten q-pa-md"
};
const _hoisted_2 = {
  key: 3,
  class: "row q-mt-lg q-pa-md bg-lighten q-pa-md"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MemberPage",
  setup(__props) {
    const route = useRoute();
    const { pluralKit } = useServices();
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
          if (e instanceof APIError) {
            if (e.status == "404") {
              status.value = "notfound";
            } else if (e.status == "403") {
              status.value = "forbidden";
            }
          }
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return member.value && system.value ? (openBlock(), createBlock(MemberCard, {
        key: 0,
        member: member.value,
        system: system.value,
        flat: ""
      }, null, 8, ["member", "system"])) : status.value == "loading" ? (openBlock(), createBlock(QLinearProgress, {
        key: 1,
        indeterminate: ""
      })) : status.value == "forbidden" ? (openBlock(), createElementBlock("div", _hoisted_1, " Not Allowed To View Member ")) : status.value == "notfound" ? (openBlock(), createElementBlock("div", _hoisted_2, " Member Not Found ")) : createCommentVNode("v-if", true);
    };
  }
});
const MemberPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/zowie/dev/pkstatus/src/pages/Lookup/MemberPage.vue"]]);
export {
  MemberPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyUGFnZS1EWUdTZExVOC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0xvb2t1cC9NZW1iZXJQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSB2LWlmPVwibWVtYmVyICYmIHN5c3RlbVwiPlxuICAgIDxtZW1iZXItY2FyZCA6bWVtYmVyPVwibWVtYmVyXCIgOnN5c3RlbT1cInN5c3RlbVwiIGZsYXQgLz5cbiAgPC90ZW1wbGF0ZT5cbiAgPHEtbGluZWFyLXByb2dyZXNzIHYtZWxzZS1pZj1cInN0YXR1cyA9PSAnbG9hZGluZydcIiBpbmRldGVybWluYXRlIC8+XG4gIDxkaXZcbiAgICB2LWVsc2UtaWY9XCJzdGF0dXMgPT0gJ2ZvcmJpZGRlbidcIlxuICAgIGNsYXNzPVwicm93IHEtbXQtbGcgcS1wYS1tZCBiZy1saWdodGVuIHEtcGEtbWRcIlxuICA+XG4gICAgTm90IEFsbG93ZWQgVG8gVmlldyBNZW1iZXJcbiAgPC9kaXY+XG4gIDxkaXZcbiAgICB2LWVsc2UtaWY9XCJzdGF0dXMgPT0gJ25vdGZvdW5kJ1wiXG4gICAgY2xhc3M9XCJyb3cgcS1tdC1sZyBxLXBhLW1kIGJnLWxpZ2h0ZW4gcS1wYS1tZFwiXG4gID5cbiAgICBNZW1iZXIgTm90IEZvdW5kXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlUm91dGUgfSBmcm9tICd2dWUtcm91dGVyJztcblxuaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnc3JjL21vZGVscy9TeXN0ZW0nO1xuaW1wb3J0IHsgTWVtYmVyIH0gZnJvbSAnc3JjL21vZGVscy9NZW1iZXInO1xuXG5pbXBvcnQgTWVtYmVyQ2FyZCBmcm9tICdzcmMvY29tcG9uZW50cy9DYXJkL01lbWJlckNhcmQudnVlJztcbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSAncGthcGkuanMnO1xuaW1wb3J0IHsgdXNlU2VydmljZXMgfSBmcm9tICdzcmMvbGliL1NlcnZpY2VzJztcblxuY29uc3Qgcm91dGUgPSB1c2VSb3V0ZSgpO1xuXG5jb25zdCB7IHBsdXJhbEtpdCB9ID0gdXNlU2VydmljZXMoKTtcblxuY29uc3Qgc3RhdHVzID0gcmVmPCdsb2FkaW5nJyB8ICdmb3JiaWRkZW4nIHwgJ25vdGZvdW5kJz4oJ2xvYWRpbmcnKTtcbmNvbnN0IG1lbWJlciA9IHJlZjxNZW1iZXIgfCBudWxsPihudWxsKTtcbmNvbnN0IHN5c3RlbSA9IHJlZjxTeXN0ZW0gfCBudWxsPihudWxsKTtcblxud2F0Y2goXG4gICgpID0+IHJvdXRlLnBhcmFtcy5pZCxcbiAgYXN5bmMgKG5ld0lkKSA9PiB7XG4gICAgaWYgKCFuZXdJZCB8fCBBcnJheS5pc0FycmF5KG5ld0lkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1lbWJlci52YWx1ZSA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgbWVtYmVyLnZhbHVlID0gYXdhaXQgcGx1cmFsS2l0LmdldE1lbWJlcihuZXdJZCk7XG4gICAgICBzeXN0ZW0udmFsdWUgPSBhd2FpdCBwbHVyYWxLaXQuZ2V0U3lzdGVtKG1lbWJlci52YWx1ZS5zeXN0ZW0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgQVBJRXJyb3IpIHtcbiAgICAgICAgaWYgKGUuc3RhdHVzID09ICc0MDQnKSB7XG4gICAgICAgICAgLy8gTm90IEZvdW5kXG4gICAgICAgICAgc3RhdHVzLnZhbHVlID0gJ25vdGZvdW5kJztcbiAgICAgICAgfSBlbHNlIGlmIChlLnN0YXR1cyA9PSAnNDAzJykge1xuICAgICAgICAgIC8vIEZvcmJpZGRlblxuICAgICAgICAgIHN0YXR1cy52YWx1ZSA9ICdmb3JiaWRkZW4nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7IGltbWVkaWF0ZTogdHJ1ZSB9LFxuKTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBLFVBQU0sUUFBUTtBQUVSLFVBQUEsRUFBRSxjQUFjO0FBRWhCLFVBQUEsU0FBUyxJQUEwQyxTQUFTO0FBQzVELFVBQUEsU0FBUyxJQUFtQixJQUFJO0FBQ2hDLFVBQUEsU0FBUyxJQUFtQixJQUFJO0FBRXRDO0FBQUEsTUFDRSxNQUFNLE1BQU0sT0FBTztBQUFBLE1BQ25CLE9BQU8sVUFBVTtBQUNmLFlBQUksQ0FBQyxTQUFTLE1BQU0sUUFBUSxLQUFLLEdBQUc7QUFDbEM7QUFBQSxRQUNGO0FBRUEsZUFBTyxRQUFRO0FBRVgsWUFBQTtBQUNGLGlCQUFPLFFBQVEsTUFBTSxVQUFVLFVBQVUsS0FBSztBQUM5QyxpQkFBTyxRQUFRLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxNQUFNO0FBQUEsaUJBQ3JELEdBQUc7QUFDVixjQUFJLGFBQWEsVUFBVTtBQUNyQixnQkFBQSxFQUFFLFVBQVUsT0FBTztBQUVyQixxQkFBTyxRQUFRO0FBQUEsWUFBQSxXQUNOLEVBQUUsVUFBVSxPQUFPO0FBRTVCLHFCQUFPLFFBQVE7QUFBQSxZQUNqQjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsRUFBRSxXQUFXLEtBQUs7QUFBQSxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7In0=
