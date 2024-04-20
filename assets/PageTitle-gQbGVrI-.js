import { Q as defineComponent, V as openBlock, W as createBlock, X as withCtx, a2 as createBaseVNode, Y as createVNode, a3 as QIcon, a5 as toDisplayString, ch as renderSlot, ab as QCardSection, af as _export_sfc } from "./index-C1u-_TOv.js";
const _hoisted_1 = { class: "row items-center no-wrap" };
const _hoisted_2 = { class: "col-auto q-mr-sm" };
const _hoisted_3 = { class: "col text-subtitle1" };
const _hoisted_4 = { class: "col-auto" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageTitle",
  props: {
    icon: { type: String, required: true },
    text: { type: String, required: true }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCardSection, { class: "q-py-md" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QIcon, {
                name: _ctx.icon,
                size: "24px"
              }, null, 8, ["name"])
            ]),
            createBaseVNode(
              "div",
              _hoisted_3,
              toDisplayString(_ctx.text),
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
    };
  }
});
const PageTitle = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/zowie/dev/pkstatus/src/components/PageTitle.vue"]]);
export {
  PageTitle as P
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZVRpdGxlLWdRYkdWckktLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
