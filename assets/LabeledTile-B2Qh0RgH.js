import { Q as defineComponent, V as openBlock, W as createBlock, X as withCtx, Y as createVNode, aM as normalizeStyle, _ as unref, a3 as QIcon, a2 as createBaseVNode, a5 as toDisplayString, aE as createElementBlock, a4 as createCommentVNode, ch as renderSlot, aa as QCard, af as _export_sfc } from "./index-C1u-_TOv.js";
import { a as matPerson, Q as QImg, b as matBrokenImage } from "./index-DRTIEHtT.js";
const _hoisted_1 = { class: "text-subtitle2" };
const _hoisted_2 = {
  key: 0,
  class: "text-caption"
};
const _hoisted_3 = { class: "text-subtitle2" };
const _hoisted_4 = {
  key: 0,
  class: "text-caption"
};
const _hoisted_5 = { class: "text-subtitle2" };
const _hoisted_6 = {
  key: 0,
  class: "text-caption"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LabeledTile",
  props: {
    img: { type: [String, null], required: true, default: null },
    label: { type: String, required: true },
    caption: { type: [String, null], required: false, default: null },
    size: { type: String, required: true },
    fallbackIcon: { type: String, required: false, default: matPerson }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, {
        flat: "",
        style: normalizeStyle({ width: _ctx.size })
      }, {
        default: withCtx(() => [
          _ctx.img ? (openBlock(), createBlock(QImg, {
            key: 0,
            ratio: "1",
            src: _ctx.img
          }, {
            error: withCtx(() => [
              createVNode(QIcon, {
                size: _ctx.size,
                style: normalizeStyle({
                  width: _ctx.size,
                  height: _ctx.size
                }),
                class: "absolute-center",
                color: "grey",
                name: unref(matBrokenImage)
              }, null, 8, ["size", "style", "name"]),
              createBaseVNode(
                "div",
                {
                  class: "absolute-bottom text-center",
                  style: normalizeStyle(!!_ctx.caption ? "padding-top: 6px; padding-bottom: 6px" : "")
                },
                [
                  createBaseVNode(
                    "div",
                    _hoisted_3,
                    toDisplayString(_ctx.label),
                    1
                    /* TEXT */
                  ),
                  _ctx.caption ? (openBlock(), createElementBlock(
                    "div",
                    _hoisted_4,
                    toDisplayString(_ctx.caption),
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
                  style: normalizeStyle(!!_ctx.caption ? "padding-top: 6px; padding-bottom: 6px" : "")
                },
                [
                  createBaseVNode(
                    "div",
                    _hoisted_1,
                    toDisplayString(_ctx.label),
                    1
                    /* TEXT */
                  ),
                  _ctx.caption ? (openBlock(), createElementBlock(
                    "div",
                    _hoisted_2,
                    toDisplayString(_ctx.caption),
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
                size: _ctx.size,
                style: normalizeStyle({
                  transform: "translate(-50%, -50%) scale(75%)",
                  width: _ctx.size,
                  height: _ctx.size
                }),
                class: "absolute-center",
                color: "grey",
                name: _ctx.fallbackIcon
              }, null, 8, ["size", "style", "name"]),
              createBaseVNode(
                "div",
                {
                  class: "absolute-bottom text-center",
                  style: normalizeStyle(!!_ctx.caption ? "padding-top: 6px; padding-bottom: 6px" : "")
                },
                [
                  createBaseVNode(
                    "div",
                    _hoisted_5,
                    toDisplayString(_ctx.label),
                    1
                    /* TEXT */
                  ),
                  _ctx.caption ? (openBlock(), createElementBlock(
                    "div",
                    _hoisted_6,
                    toDisplayString(_ctx.caption),
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
    };
  }
});
const LabeledTile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/zowie/dev/pkstatus/src/components/StatusPage/Tile/LabeledTile.vue"]]);
export {
  LabeledTile as L
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFiZWxlZFRpbGUtQjJRaDBSZ0guanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
