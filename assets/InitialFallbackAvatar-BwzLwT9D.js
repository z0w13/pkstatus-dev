import { J as defineComponent, r as ref, _ as _export_sfc, S as createBlock, T as openBlock, U as withCtx, ap as QAvatar, ag as createElementBlock, W as createVNode, a1 as QIcon, am as normalizeStyle, ak as Fragment, $ as createTextVNode, a2 as toDisplayString } from "./index-Czhz81pV.js";
import { b as matBrokenImage, Q as QImg } from "./index-BPlwBMVZ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InitialFallbackAvatar",
  props: {
    url: { type: [String, null], required: false, default: null },
    color: { type: String, required: false, default: "primary" },
    name: { type: String, required: true },
    size: { type: String, required: false, default: void 0 }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const bgColor = ref(props.color);
    function onLoad() {
      bgColor.value = "";
    }
    function onError() {
      bgColor.value = "grey";
    }
    const __returned__ = { props, bgColor, onLoad, onError, get matBrokenImage() {
      return matBrokenImage;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QAvatar, {
    size: $props.size,
    color: $setup.bgColor,
    class: "text-white"
  }, {
    default: withCtx(() => [
      $props.url ? (openBlock(), createBlock(QImg, {
        key: 0,
        ratio: 1,
        src: $props.url,
        onLoad: $setup.onLoad,
        onError: $setup.onError
      }, {
        error: withCtx(() => [
          createVNode(QIcon, {
            size: $props.size,
            style: normalizeStyle({
              transform: "translate(-50%, -50%) scale(60%)",
              width: $props.size,
              height: $props.size
            }),
            class: "absolute-center",
            color: "white",
            name: $setup.matBrokenImage
          }, null, 8, ["size", "style", "name"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["src"])) : (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          createTextVNode(
            toDisplayString($props.name.substring(0, 1)),
            1
            /* TEXT */
          )
        ],
        64
        /* STABLE_FRAGMENT */
      ))
    ]),
    _: 1
    /* STABLE */
  }, 8, ["size", "color"]);
}
const InitialFallbackAvatar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/components/InitialFallbackAvatar.vue"]]);
export {
  InitialFallbackAvatar as I
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5pdGlhbEZhbGxiYWNrQXZhdGFyLUJ3ekx3VDlELmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Jbml0aWFsRmFsbGJhY2tBdmF0YXIudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtYXZhdGFyIDpzaXplPVwic2l6ZVwiIDpjb2xvcj1cImJnQ29sb3JcIiBjbGFzcz1cInRleHQtd2hpdGVcIj5cbiAgICA8cS1pbWcgdi1pZj1cInVybFwiIDpyYXRpbz1cIjFcIiA6c3JjPVwidXJsXCIgQGxvYWQ9XCJvbkxvYWRcIiBAZXJyb3I9XCJvbkVycm9yXCI+XG4gICAgICA8dGVtcGxhdGUgI2Vycm9yPlxuICAgICAgICA8cS1pY29uXG4gICAgICAgICAgOnNpemU9XCJzaXplXCJcbiAgICAgICAgICA6c3R5bGU9XCJ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoNjAlKScsXG4gICAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgICB9XCJcbiAgICAgICAgICBjbGFzcz1cImFic29sdXRlLWNlbnRlclwiXG4gICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgOm5hbWU9XCJtYXRCcm9rZW5JbWFnZVwiXG4gICAgICAgIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcS1pbWc+XG4gICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgIHt7IG5hbWUuc3Vic3RyaW5nKDAsIDEpIH19XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9xLWF2YXRhcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBtYXRCcm9rZW5JbWFnZSB9IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zJztcbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IHByb3BzID0gd2l0aERlZmF1bHRzKFxuICBkZWZpbmVQcm9wczx7XG4gICAgdXJsPzogc3RyaW5nIHwgbnVsbDtcbiAgICBjb2xvcj86IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc2l6ZT86IHN0cmluZztcbiAgfT4oKSxcbiAge1xuICAgIHVybDogbnVsbCxcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIHNpemU6IHVuZGVmaW5lZCxcbiAgfSxcbik7XG5cbmNvbnN0IGJnQ29sb3IgPSByZWYocHJvcHMuY29sb3IpO1xuXG5mdW5jdGlvbiBvbkxvYWQoKSB7XG4gIGJnQ29sb3IudmFsdWUgPSAnJztcbn1cbmZ1bmN0aW9uIG9uRXJyb3IoKSB7XG4gIGJnQ29sb3IudmFsdWUgPSAnZ3JleSc7XG59XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfb3BlbkJsb2NrIiwiX2NyZWF0ZUJsb2NrIiwiX3dpdGhDdHgiLCJfY3JlYXRlVk5vZGUiLCJfbm9ybWFsaXplU3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQTJCQSxVQUFNLFFBQVE7QUFjUixVQUFBLFVBQVUsSUFBSSxNQUFNLEtBQUs7QUFFL0IsYUFBUyxTQUFTO0FBQ2hCLGNBQVEsUUFBUTtBQUFBLElBQUE7QUFFbEIsYUFBUyxVQUFVO0FBQ2pCLGNBQVEsUUFBUTtBQUFBLElBQUE7Ozs7Ozs7OztBQTlDYSxTQUFBQSxVQUFBLEdBQVNDLFlBQUEsU0FBQTtBQUFBLElBQUUsTUFBSyxPQUFDO0FBQUEsSUFBQSxPQUFBLE9BQUE7QUFBQTs7SUFDNUMsU0FBQUMsUUFBQSxNQUFBO0FBQUEsTUFBMkIsT0FBQSxPQUFBRixhQUFBQyxZQUFBLE1BQUE7QUFBQSxRQUFHLEtBQUs7QUFBQSxRQUFNLE9BQUk7QUFBQSxRQUFXLEtBQU8sT0FBQTtBQUFBLFFBQUEsUUFBQSxPQUFBO0FBQUEsUUFDbEQsU0FBSyxPQUNkO0FBQUEsTUFBQSxHQUFBO0FBQUEsUUFDRyxPQUFBQyxRQUFNLE1BQUk7QUFBQSxVQUNMQyxZQUFBLE9BQUE7QUFBQSxZQUFBLE1BQUEsT0FBQTtBQUFBLG1CQUFrRkMsZUFBSTtBQUFBLGNBQXNCLFdBQUE7QUFBQSxjQUFBLE9BQUEsT0FBQTtBQUFBLHNCQUtsSCxPQUFNO0FBQUEsWUFBQSxDQUFBO0FBQUEsWUFFTCxPQUFNO0FBQUEsWUFBQSxPQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
