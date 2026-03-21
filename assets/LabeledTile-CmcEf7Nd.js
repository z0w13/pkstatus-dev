import { J as defineComponent, _ as _export_sfc, S as createBlock, T as openBlock, U as withCtx, am as normalizeStyle, a6 as QCard, bK as renderSlot, Y as createBaseVNode, ag as createElementBlock, a0 as createCommentVNode, a2 as toDisplayString, W as createVNode, a1 as QIcon, ao as QSpinner } from "./index-Czhz81pV.js";
import { a as matPerson, b as matBrokenImage, Q as QImg } from "./index-BPlwBMVZ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LabeledTile",
  props: {
    img: { type: [String, null], required: false, default: null },
    label: { type: String, required: true },
    caption: { type: [String, null], required: false, default: null },
    size: { type: String, required: true },
    fallbackIcon: { type: String, required: false, default: matPerson }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get matBrokenImage() {
      return matBrokenImage;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "text-subtitle2" };
const _hoisted_2 = {
  key: 0,
  class: "text-caption"
};
const _hoisted_3 = { class: "q-img__loading absolute-full flex flex-center" };
const _hoisted_4 = { class: "text-subtitle2" };
const _hoisted_5 = {
  key: 0,
  class: "text-caption"
};
const _hoisted_6 = { class: "text-subtitle2" };
const _hoisted_7 = {
  key: 0,
  class: "text-caption"
};
const _hoisted_8 = { class: "text-subtitle2" };
const _hoisted_9 = {
  key: 0,
  class: "text-caption"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QCard, {
    flat: "",
    style: normalizeStyle({ width: $props.size })
  }, {
    default: withCtx(() => [
      $props.img ? (openBlock(), createBlock(QImg, {
        key: 0,
        ratio: "1",
        src: $props.img
      }, {
        loading: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            createVNode(QSpinner)
          ]),
          createBaseVNode(
            "div",
            {
              class: "absolute-bottom text-center",
              style: normalizeStyle(!!$props.caption ? "padding-top: 6px; padding-bottom: 6px" : "")
            },
            [
              createBaseVNode(
                "div",
                _hoisted_4,
                toDisplayString($props.label),
                1
                /* TEXT */
              ),
              $props.caption ? (openBlock(), createElementBlock(
                "div",
                _hoisted_5,
                toDisplayString($props.caption),
                1
                /* TEXT */
              )) : createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          )
        ]),
        error: withCtx(() => [
          createVNode(QIcon, {
            size: $props.size,
            style: normalizeStyle({
              width: $props.size,
              height: $props.size
            }),
            class: "absolute-center",
            color: "grey",
            name: $setup.matBrokenImage
          }, null, 8, ["size", "style", "name"]),
          createBaseVNode(
            "div",
            {
              class: "absolute-bottom text-center",
              style: normalizeStyle(!!$props.caption ? "padding-top: 6px; padding-bottom: 6px" : "")
            },
            [
              createBaseVNode(
                "div",
                _hoisted_6,
                toDisplayString($props.label),
                1
                /* TEXT */
              ),
              $props.caption ? (openBlock(), createElementBlock(
                "div",
                _hoisted_7,
                toDisplayString($props.caption),
                1
                /* TEXT */
              )) : createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          )
        ]),
        default: withCtx(() => [
          createBaseVNode(
            "div",
            {
              class: "absolute-bottom text-center",
              style: normalizeStyle(!!$props.caption ? "padding-top: 6px; padding-bottom: 6px" : "")
            },
            [
              createBaseVNode(
                "div",
                _hoisted_1,
                toDisplayString($props.label),
                1
                /* TEXT */
              ),
              $props.caption ? (openBlock(), createElementBlock(
                "div",
                _hoisted_2,
                toDisplayString($props.caption),
                1
                /* TEXT */
              )) : createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["src"])) : (openBlock(), createBlock(QImg, {
        key: 1,
        ratio: "1"
      }, {
        default: withCtx(() => [
          createVNode(QIcon, {
            size: $props.size,
            style: normalizeStyle({
              transform: "translate(-50%, -50%) scale(75%)",
              width: $props.size,
              height: $props.size
            }),
            class: "absolute-center",
            color: "grey",
            name: $props.fallbackIcon
          }, null, 8, ["size", "style", "name"]),
          createBaseVNode(
            "div",
            {
              class: "absolute-bottom text-center",
              style: normalizeStyle(!!$props.caption ? "padding-top: 6px; padding-bottom: 6px" : "")
            },
            [
              createBaseVNode(
                "div",
                _hoisted_8,
                toDisplayString($props.label),
                1
                /* TEXT */
              ),
              $props.caption ? (openBlock(), createElementBlock(
                "div",
                _hoisted_9,
                toDisplayString($props.caption),
                1
                /* TEXT */
              )) : createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          )
        ]),
        _: 1
        /* STABLE */
      })),
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["style"]);
}
const LabeledTile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/components/StatusPage/Tile/LabeledTile.vue"]]);
export {
  LabeledTile as L
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFiZWxlZFRpbGUtQ21jRWY3TmQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0YXR1c1BhZ2UvVGlsZS9MYWJlbGVkVGlsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1jYXJkIGZsYXQgOnN0eWxlPVwieyB3aWR0aDogc2l6ZSB9XCI+XG4gICAgPHEtaW1nIHYtaWY9XCJpbWdcIiByYXRpbz1cIjFcIiA6c3JjPVwiaW1nXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYWJzb2x1dGUtYm90dG9tIHRleHQtY2VudGVyXCJcbiAgICAgICAgOnN0eWxlPVwiISFjYXB0aW9uID8gJ3BhZGRpbmctdG9wOiA2cHg7IHBhZGRpbmctYm90dG9tOiA2cHgnIDogJydcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTJcIj57eyBsYWJlbCB9fTwvZGl2PlxuICAgICAgICA8ZGl2IHYtaWY9XCJjYXB0aW9uXCIgY2xhc3M9XCJ0ZXh0LWNhcHRpb25cIj57eyBjYXB0aW9uIH19PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0ZW1wbGF0ZSAjbG9hZGluZz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtaW1nX19sb2FkaW5nIGFic29sdXRlLWZ1bGwgZmxleCBmbGV4LWNlbnRlclwiPlxuICAgICAgICAgIDxxLXNwaW5uZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImFic29sdXRlLWJvdHRvbSB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgOnN0eWxlPVwiISFjYXB0aW9uID8gJ3BhZGRpbmctdG9wOiA2cHg7IHBhZGRpbmctYm90dG9tOiA2cHgnIDogJydcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUyXCI+e3sgbGFiZWwgfX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IHYtaWY9XCJjYXB0aW9uXCIgY2xhc3M9XCJ0ZXh0LWNhcHRpb25cIj57eyBjYXB0aW9uIH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSAjZXJyb3I+XG4gICAgICAgIDxxLWljb25cbiAgICAgICAgICA6c2l6ZT1cInNpemVcIlxuICAgICAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICAgIH1cIlxuICAgICAgICAgIGNsYXNzPVwiYWJzb2x1dGUtY2VudGVyXCJcbiAgICAgICAgICBjb2xvcj1cImdyZXlcIlxuICAgICAgICAgIDpuYW1lPVwibWF0QnJva2VuSW1hZ2VcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJhYnNvbHV0ZS1ib3R0b20gdGV4dC1jZW50ZXJcIlxuICAgICAgICAgIDpzdHlsZT1cIiEhY2FwdGlvbiA/ICdwYWRkaW5nLXRvcDogNnB4OyBwYWRkaW5nLWJvdHRvbTogNnB4JyA6ICcnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMlwiPnt7IGxhYmVsIH19PC9kaXY+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiY2FwdGlvblwiIGNsYXNzPVwidGV4dC1jYXB0aW9uXCI+e3sgY2FwdGlvbiB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9xLWltZz5cbiAgICA8cS1pbWcgdi1lbHNlIHJhdGlvPVwiMVwiPlxuICAgICAgPHEtaWNvblxuICAgICAgICA6c2l6ZT1cInNpemVcIlxuICAgICAgICA6c3R5bGU9XCJ7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDc1JSknLFxuICAgICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgfVwiXG4gICAgICAgIGNsYXNzPVwiYWJzb2x1dGUtY2VudGVyXCJcbiAgICAgICAgY29sb3I9XCJncmV5XCJcbiAgICAgICAgOm5hbWU9XCJmYWxsYmFja0ljb25cIlxuICAgICAgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJhYnNvbHV0ZS1ib3R0b20gdGV4dC1jZW50ZXJcIlxuICAgICAgICA6c3R5bGU9XCIhIWNhcHRpb24gPyAncGFkZGluZy10b3A6IDZweDsgcGFkZGluZy1ib3R0b206IDZweCcgOiAnJ1wiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMlwiPnt7IGxhYmVsIH19PC9kaXY+XG4gICAgICAgIDxkaXYgdi1pZj1cImNhcHRpb25cIiBjbGFzcz1cInRleHQtY2FwdGlvblwiPnt7IGNhcHRpb24gfX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1pbWc+XG5cbiAgICA8c2xvdCAvPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBtYXRQZXJzb24sIG1hdEJyb2tlbkltYWdlIH0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMnO1xuXG53aXRoRGVmYXVsdHMoXG4gIGRlZmluZVByb3BzPHtcbiAgICBpbWc/OiBzdHJpbmcgfCBudWxsO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgY2FwdGlvbj86IHN0cmluZyB8IG51bGw7XG4gICAgc2l6ZTogc3RyaW5nO1xuICAgIGZhbGxiYWNrSWNvbj86IHN0cmluZztcbiAgfT4oKSxcbiAge1xuICAgIGltZzogbnVsbCxcbiAgICBjYXB0aW9uOiBudWxsLFxuICAgIGZhbGxiYWNrSWNvbjogbWF0UGVyc29uLFxuICB9LFxuKTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9vcGVuQmxvY2siLCJfY3JlYXRlQmxvY2siLCJfbm9ybWFsaXplU3R5bGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BUTRCLGFBQU07QUFBQSxFQUFBLEtBQUE7QUFBQTs7OztNQVdKLGFBQU07QUFBQSxFQUFBLEtBQUE7QUFBQTs7O01BbUJOLGFBQU07QUFBQSxFQUFBLEtBQUE7QUFBQTs7O01BcUJSLGFBQU07QUFBQSxFQUFBLEtBQUE7QUFBQTs7O0FBMURiLFNBQUFBLFVBQUEsR0FBQUMsWUFBVyxPQUFJO0FBQUEsSUFBQSxNQUFBO0FBQUEsSUF3Q3hCLE9BQUFDLGVBQUEsRUFBQSxPQUFBLE9BQUEsS0FBQSxDQUFBO0FBQUEsRUFBQSxHQUFBO0FBQUEsSUF2Q1IsU0FBQUMsUUFBQSxNQUFBO0FBQUEsTUFBMkIsT0FBQSxPQUFBSCxhQUFBQyxZQUFBLE1BQUE7QUFBQSxRQUFFLEtBQUs7QUFBQSxRQUFBLE9BQUE7QUFBQSxRQVFyQixLQUFPLE9BQUE7QUFBQSxNQUFBLEdBQUE7QUFBQSxpQkFFZEUsUUFBYSxNQUFBO0FBQUEsVUFBQUMsZ0JBQUEsT0FBQSxZQUFBO0FBQUEsWUFFZkMsWUFNTSxRQUFBO0FBQUEsVUFBQSxDQUFBO0FBQUE7WUFKRTtBQUFBLFlBQUk7QUFBQSxjQUFBLE9BQUE7QUFBQSxjQUVWLE9BQTZDSCxlQUFBLENBQUEsQ0FBQSxPQUE3QyxVQUE2QywwQ0FBVCxFQUFBO0FBQUEsWUFBQTtBQUFBLFlBQ3pCO0FBQUEsY0FBQUU7QUFBQUEsZ0JBQVg7QUFBQSxnQkFBQTtBQUFBLGdCQUE0REUsZ0JBQUEsT0FBQSxLQUFBO0FBQUEsZ0JBQUE7QUFBQTtBQUFBLGNBQWhCO0FBQUEsY0FBQSxPQUFBLFdBQUFOLFVBQUEsR0FBQU87QUFBQUE7Ozs7OztZQUdyQztBQUFBLFlBQUs7QUFBQTtBQUFBLFVBQUE7QUFBQSxRQVVaLENBQUE7QUFBQSxRQVJDLE9BQUFKLFFBQU0sTUFBSTtBQUFBLFVBQ0xFLFlBQUEsT0FBQTtBQUFBLFlBQXVCLE1BQUEsT0FBQTtBQUFBLFlBQUEsT0FBMEJILGVBQUk7QUFBQSxjQUFBLE9BQUEsT0FBQTtBQUFBLHNCQUkzRCxPQUFNO0FBQUEsWUFBQSxDQUFBO0FBQUEsWUFFTCxPQUFNO0FBQUEsWUFBQSxPQUFBO0FBQUEsWUFFVCxNQUFBLE9BQUE7QUFBQSxVQUFBLEdBQ0UsTUFBTSxHQUE2QixDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUE7QUFBQSxVQUFBRTtBQUFBQSxZQUM3QjtBQUFBLFlBQUk7QUFBQSxjQUFBLE9BQUE7QUFBQSxjQUVWLE9BQTZDRixlQUFBLENBQUEsQ0FBQSxPQUE3QyxVQUE2QywwQ0FBVCxFQUFBO0FBQUEsWUFBQTtBQUFBLFlBQ3pCO0FBQUEsY0FBQUU7QUFBQUEsZ0JBQVg7QUFBQSxnQkFBQTtBQUFBLGdCQUE0REUsZ0JBQUEsT0FBQSxLQUFBO0FBQUEsZ0JBQUE7QUFBQTtBQUFBLGNBQWhCO0FBQUEsY0FBQSxPQUFBLFdBQUFOLFVBQUEsR0FBQU87QUFBQUE7Ozs7Ozs7OztVQW5DaEQ7QUFBQSxRQUFBLENBQUE7QUFBQSxpQkFDT0osUUFBQyxNQUFBO0FBQUEsVUFBQUM7QUFBQUEsWUFDQTtBQUFBLFlBQUk7QUFBQSxjQUFBLE9BQUE7QUFBQSxjQUVWLE9BQTZDRixlQUFBLENBQUEsQ0FBQSxPQUE3QyxVQUE2QywwQ0FBVCxFQUFBO0FBQUEsWUFBQTtBQUFBLFlBQ3pCO0FBQUEsY0FBQUU7QUFBQUEsZ0JBQVg7QUFBQSxnQkFBQTtBQUFBLGdCQUE0REUsZ0JBQUEsT0FBQSxLQUFBO0FBQUEsZ0JBQUE7QUFBQTtBQUFBLGNBQWhCO0FBQUEsY0FBQSxPQUFBLFdBQUFOLFVBQUEsR0FBQU87QUFBQUE7Ozs7Ozs7Ozs7Ozs7TUFrQ3pCLEdBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxNQUFBUCxVQUFBLEdBQUFDLFlBQUEsTUFBQTtBQUFBLFFBQUEsS0FBQTtBQUFBOztRQUVkLFNBQUFFLFFBQUUsTUFBSTtBQUFBLFVBQ0xFLFlBQUEsT0FBQTtBQUFBLFlBQUEsTUFBQSxPQUFBO0FBQUEsbUJBQThFSCxlQUFJO0FBQUEsY0FBb0IsV0FBQTtBQUFBLGNBQUEsT0FBQSxPQUFBO0FBQUEsc0JBSzVHLE9BQU07QUFBQSxZQUFBLENBQUE7QUFBQSxZQUVMLE9BQU07QUFBQSxZQUFBLE9BQUE7QUFBQSxZQUVULE1BQUEsT0FBQTtBQUFBLFVBQUEsR0FDRSxNQUFNLEdBQTZCLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQTtBQUFBLFVBQUFFO0FBQUFBLFlBQzdCO0FBQUEsWUFBSTtBQUFBLGNBQUEsT0FBQTtBQUFBLGNBRVYsT0FBNkNGLGVBQUEsQ0FBQSxDQUFBLE9BQTdDLFVBQTZDLDBDQUFULEVBQUE7QUFBQSxZQUFBO0FBQUEsWUFDekI7QUFBQSxjQUFBRTtBQUFBQSxnQkFBWDtBQUFBLGdCQUFBO0FBQUEsZ0JBQTRERSxnQkFBQSxPQUFBLEtBQUE7QUFBQSxnQkFBQTtBQUFBO0FBQUEsY0FBaEI7QUFBQSxjQUFBLE9BQUEsV0FBQU4sVUFBQSxHQUFBTztBQUFBQTs7Ozs7Ozs7Ozs7UUFJaEQsR0FBQTtBQUFBO0FBQUEsTUFBQSxDQUFBO0FBQUE7Ozs7Ozs7In0=
