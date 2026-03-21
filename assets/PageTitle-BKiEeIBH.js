import { J as defineComponent, _ as _export_sfc, S as createBlock, T as openBlock, U as withCtx, a7 as QCardSection, Y as createBaseVNode, W as createVNode, a1 as QIcon, a2 as toDisplayString, bK as renderSlot } from "./index-Czhz81pV.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageTitle",
  props: {
    icon: { type: String, required: true },
    text: { type: String, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "row items-center no-wrap" };
const _hoisted_2 = { class: "col-auto q-mr-sm" };
const _hoisted_3 = { class: "col text-subtitle1" };
const _hoisted_4 = { class: "col-auto" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QCardSection, { class: "q-py-md page-title" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(QIcon, {
            name: $props.icon,
            size: "24px"
          }, null, 8, ["name"])
        ]),
        createBaseVNode(
          "div",
          _hoisted_3,
          toDisplayString($props.text),
          1
          /* TEXT */
        ),
        createBaseVNode("div", _hoisted_4, [
          renderSlot(_ctx.$slots, "after")
        ])
      ])
    ]),
    _: 3
    /* FORWARDED */
  });
}
const PageTitle = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/components/PageTitle.vue"]]);
export {
  PageTitle as P
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZVRpdGxlLUJLaUVlSUJILmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9QYWdlVGl0bGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1weS1tZCBwYWdlLXRpdGxlXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1jZW50ZXIgbm8td3JhcFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIHEtbXItc21cIj5cbiAgICAgICAgPHEtaWNvbiA6bmFtZT1cImljb25cIiBzaXplPVwiMjRweFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdGV4dC1zdWJ0aXRsZTFcIj57eyB0ZXh0IH19PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG9cIj5cbiAgICAgICAgPHNsb3QgbmFtZT1cImFmdGVyXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3EtY2FyZC1zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmRlZmluZVByb3BzPHtcbiAgaWNvbjogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG59PigpO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmJvZHktLWRhcmsgLnBhZ2UtdGl0bGUge1xuICBiYWNrZ3JvdW5kOiAkZGFyay1wYWdlO1xufVxuXG4uYm9keS0tbGlnaHQgLnBhZ2UtdGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfb3BlbkJsb2NrIiwiX2NyZWF0ZUJsb2NrIiwiX3dpdGhDdHgiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZVZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFNVyxNQUFBLGFBQUEsRUFBQSxPQUFNLDJCQUFvQjtBQUMxQixNQUFBLGFBQUEsRUFBQSxPQUFNLG1CQUFVOzs7O1NBTHZCQSxVQVFNLEdBQUFDLFlBQUEsY0FBQSxFQUFBLE9BQUEsd0JBQUE7QUFBQSxJQUFBLFNBUEpDLFFBRU0sTUFBQTtBQUFBLE1BRCtCQyxnQkFBQSxPQUFBLFlBQUE7QUFBQSxRQUFBQSxnQkFBcEIsT0FBSSxZQUFBO0FBQUEsVUFBQUMsWUFBTyxPQUFNO0FBQUEsWUFBQSxNQUFBLE9BQUE7QUFBQTtVQUVsQyxHQUFBLE1BQUEsR0FBZ0QsQ0FBaEQsTUFBQSxDQUFBO0FBQUEsUUFBQSxDQUNBO0FBQUEsUUFBQUQ7QUFBQUEsVUFDdUI7QUFBQSxVQUFBO0FBQUEsVUFBQUUsZ0JBQUEsT0FBQSxJQUFBO0FBQUEsVUFBQTtBQUFBO0FBQUEsUUFBQTtBQUFBLFFBQUFGLGdCQUFBLE9BQUEsWUFBQTtBQUFBOzs7Ozs7Ozs7In0=
