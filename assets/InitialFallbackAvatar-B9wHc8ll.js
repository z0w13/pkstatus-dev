import { Q as defineComponent, cy as toRef, V as openBlock, W as createBlock, X as withCtx, Y as createVNode, aM as normalizeStyle, _ as unref, a3 as QIcon, aE as createElementBlock, a1 as createTextVNode, a5 as toDisplayString, aF as Fragment, aP as QAvatar, af as _export_sfc } from "./index-C1u-_TOv.js";
import { Q as QImg, b as matBrokenImage } from "./index-DRTIEHtT.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InitialFallbackAvatar",
  props: {
    url: { type: [String, null], required: false, default: null },
    color: { type: String, required: false, default: "primary" },
    name: { type: String, required: true },
    size: { type: String, required: false, default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const bgColor = toRef(props.color);
    function onLoad() {
      bgColor.value = "";
    }
    function onError() {
      bgColor.value = "grey";
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QAvatar, {
        size: _ctx.size,
        color: bgColor.value,
        class: "text-white"
      }, {
        default: withCtx(() => [
          _ctx.url ? (openBlock(), createBlock(QImg, {
            key: 0,
            ratio: 1,
            src: _ctx.url,
            onLoad,
            onError
          }, {
            error: withCtx(() => [
              createVNode(QIcon, {
                size: _ctx.size,
                style: normalizeStyle({
                  transform: "translate(-50%, -50%) scale(60%)",
                  width: _ctx.size,
                  height: _ctx.size
                }),
                class: "absolute-center",
                color: "white",
                name: unref(matBrokenImage)
              }, null, 8, ["size", "style", "name"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["src"])) : (openBlock(), createElementBlock(
            Fragment,
            { key: 1 },
            [
              createTextVNode(
                toDisplayString(_ctx.name.substring(0, 1)),
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
    };
  }
});
const InitialFallbackAvatar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/zowie/dev/pkstatus/src/components/InitialFallbackAvatar.vue"]]);
export {
  InitialFallbackAvatar as I
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5pdGlhbEZhbGxiYWNrQXZhdGFyLUI5d0hjOGxsLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Jbml0aWFsRmFsbGJhY2tBdmF0YXIudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtYXZhdGFyIDpzaXplPVwic2l6ZVwiIDpjb2xvcj1cImJnQ29sb3JcIiBjbGFzcz1cInRleHQtd2hpdGVcIj5cbiAgICA8cS1pbWcgdi1pZj1cInVybFwiIDpyYXRpbz1cIjFcIiA6c3JjPVwidXJsXCIgQGxvYWQ9XCJvbkxvYWRcIiBAZXJyb3I9XCJvbkVycm9yXCI+XG4gICAgICA8dGVtcGxhdGUgI2Vycm9yPlxuICAgICAgICA8cS1pY29uXG4gICAgICAgICAgOnNpemU9XCJzaXplXCJcbiAgICAgICAgICA6c3R5bGU9XCJ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoNjAlKScsXG4gICAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgICB9XCJcbiAgICAgICAgICBjbGFzcz1cImFic29sdXRlLWNlbnRlclwiXG4gICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgOm5hbWU9XCJtYXRCcm9rZW5JbWFnZVwiXG4gICAgICAgIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcS1pbWc+XG4gICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgIHt7IG5hbWUuc3Vic3RyaW5nKDAsIDEpIH19XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9xLWF2YXRhcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBtYXRCcm9rZW5JbWFnZSB9IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zJztcbmltcG9ydCB7IHRvUmVmIH0gZnJvbSAndnVlJztcblxuY29uc3QgcHJvcHMgPSB3aXRoRGVmYXVsdHMoXG4gIGRlZmluZVByb3BzPHtcbiAgICB1cmw/OiBzdHJpbmcgfCBudWxsO1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzaXplPzogc3RyaW5nO1xuICB9PigpLFxuICB7XG4gICAgdXJsOiBudWxsLFxuICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgc2l6ZTogdW5kZWZpbmVkLFxuICB9LFxuKTtcblxuY29uc3QgYmdDb2xvciA9IHRvUmVmKHByb3BzLmNvbG9yKTtcblxuZnVuY3Rpb24gb25Mb2FkKCkge1xuICBiZ0NvbG9yLnZhbHVlID0gJyc7XG59XG5mdW5jdGlvbiBvbkVycm9yKCkge1xuICBiZ0NvbG9yLnZhbHVlID0gJ2dyZXknO1xufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUEyQkEsVUFBTSxRQUFRO0FBY1IsVUFBQSxVQUFVLE1BQU0sTUFBTSxLQUFLO0FBRWpDLGFBQVMsU0FBUztBQUNoQixjQUFRLFFBQVE7QUFBQSxJQUNsQjtBQUNBLGFBQVMsVUFBVTtBQUNqQixjQUFRLFFBQVE7QUFBQSxJQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
