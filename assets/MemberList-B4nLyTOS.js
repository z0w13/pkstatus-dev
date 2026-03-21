import { Q as QTable, a as QTd } from "./QTable-BOq-QKNl.js";
import { I as InitialFallbackAvatar } from "./InitialFallbackAvatar-BwzLwT9D.js";
import { R as RelativeTimeDisplay } from "./RelativeTimeDisplay-DvRrdQnD.js";
import { J as defineComponent, _ as _export_sfc, S as createBlock, T as openBlock, U as withCtx, X as normalizeClass, W as createVNode, $ as createTextVNode, a2 as toDisplayString, am as normalizeStyle, ag as createElementBlock, an as renderList, ak as Fragment, a0 as createCommentVNode } from "./index-Czhz81pV.js";
import { b as QItemSection, Q as QItemLabel, a as QItem } from "./QItem-DBhEHxap.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MemberTable",
  props: {
    system: { type: Object, required: true },
    members: { type: Array, required: true },
    detectPronouns: { type: Boolean, required: true },
    colorAccent: { type: Boolean, required: true }
  },
  emits: ["memberClick"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const __returned__ = { emit, InitialFallbackAvatar, RelativeTimeDisplay };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QTable, {
    "hide-pagination": $props.members.length <= 50,
    pagination: { rowsPerPage: 50 },
    "row-key": "id",
    class: normalizeClass({
      "bg-lighten": !_ctx.$q.dark.isActive
    }),
    flat: "",
    rows: $props.members,
    columns: [
      {
        name: "avatar",
        field: "avatarUrl",
        label: "Icon",
        align: "left"
      },
      {
        name: "name",
        field: "name",
        label: "Name",
        align: "left",
        sortable: true,
        headerStyle: "width: 100%"
      },
      {
        name: "pronouns",
        field: "pronouns",
        label: "Pronouns",
        align: "left",
        sortable: true
      },
      {
        name: "message-count",
        field: "messageCount",
        label: "Msg #",
        sortable: true
      },
      {
        name: "last-message",
        field: "lastMessageAt",
        label: "Last Message",
        sortable: true
      }
    ],
    onRowClick: _cache[0] || (_cache[0] = (_evt, member) => $setup.emit("memberClick", member))
  }, {
    "body-cell-avatar": withCtx((props) => [
      createVNode(QTd, {
        props,
        class: normalizeClass({ "color-accent": $props.colorAccent }),
        style: normalizeStyle(
          props.row.color && $props.colorAccent ? `border-left-color: #${props.row.color}` : ""
        )
      }, {
        default: withCtx(() => [
          createVNode($setup["InitialFallbackAvatar"], {
            url: props.value,
            name: props.row.name,
            size: "24px"
          }, null, 8, ["url", "name"])
        ]),
        _: 2
        /* DYNAMIC */
      }, 1032, ["props", "class", "style"])
    ]),
    "body-cell-name": withCtx((props) => [
      createVNode(QTd, { props }, {
        default: withCtx(() => [
          createTextVNode(
            toDisplayString(props.row.getName($props.detectPronouns)),
            1
            /* TEXT */
          )
        ]),
        _: 2
        /* DYNAMIC */
      }, 1032, ["props"])
    ]),
    "body-cell-pronouns": withCtx((props) => [
      createVNode(QTd, { props }, {
        default: withCtx(() => [
          createTextVNode(
            toDisplayString(props.row.getPronouns($props.detectPronouns)),
            1
            /* TEXT */
          )
        ]),
        _: 2
        /* DYNAMIC */
      }, 1032, ["props"])
    ]),
    "body-cell-last-message": withCtx((props) => [
      createVNode(QTd, { props }, {
        default: withCtx(() => [
          createVNode($setup["RelativeTimeDisplay"], {
            time: props.value
          }, null, 8, ["time"])
        ]),
        _: 2
        /* DYNAMIC */
      }, 1032, ["props"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["hide-pagination", "class", "rows"]);
}
const MemberTable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/zowie/dev/pkstatus/src/pages/Lookup/System/MemberTable.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MemberList",
  props: {
    system: { type: Object, required: true },
    members: { type: Array, required: true },
    detectPronouns: { type: Boolean, required: true },
    colorAccent: { type: Boolean, required: true }
  },
  emits: ["memberClick"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const __returned__ = { emit, InitialFallbackAvatar };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(
    Fragment,
    null,
    renderList($props.members, (member) => {
      return openBlock(), createBlock(QItem, {
        key: member.id,
        clickable: "",
        class: normalizeClass({ "color-accent": $props.colorAccent, "bg-lighten": !_ctx.$q.dark.isActive }),
        style: normalizeStyle(
          (member.color && $props.colorAccent ? `border-left-color: #${member.color};` : "") + (_ctx.$q.dark.isActive ? "background-color: var(--q-dark);" : "")
        ),
        onClick: ($event) => $setup.emit("memberClick", member)
      }, {
        default: withCtx(() => [
          createVNode(
            QItemSection,
            { avatar: "" },
            {
              default: withCtx(() => [
                createVNode($setup["InitialFallbackAvatar"], {
                  name: member.getName($props.detectPronouns),
                  url: member.avatarUrl
                }, null, 8, ["name", "url"])
              ]),
              _: 2
              /* DYNAMIC */
            },
            1024
            /* DYNAMIC_SLOTS */
          ),
          createVNode(
            QItemSection,
            { "no-wrap": "" },
            {
              default: withCtx(() => [
                createVNode(
                  QItemLabel,
                  null,
                  {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(member.getName($props.detectPronouns)),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                ),
                member.getPronouns($props.detectPronouns) ? (openBlock(), createBlock(
                  QItemLabel,
                  {
                    key: 0,
                    caption: ""
                  },
                  {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(member.getPronouns($props.detectPronouns)),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                )) : createCommentVNode("v-if", true)
              ]),
              _: 2
              /* DYNAMIC */
            },
            1024
            /* DYNAMIC_SLOTS */
          )
        ]),
        _: 2
        /* DYNAMIC */
      }, 1032, ["class", "style", "onClick"]);
    }),
    128
    /* KEYED_FRAGMENT */
  );
}
const MemberList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/pages/Lookup/System/MemberList.vue"]]);
export {
  MemberList as M,
  MemberTable as a
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyTGlzdC1CNG5MeVRPUy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0xvb2t1cC9TeXN0ZW0vTWVtYmVyVGFibGUudnVlIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL0xvb2t1cC9TeXN0ZW0vTWVtYmVyTGlzdC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS10YWJsZVxuICAgIDpoaWRlLXBhZ2luYXRpb249XCJtZW1iZXJzLmxlbmd0aCA8PSA1MFwiXG4gICAgOnBhZ2luYXRpb249XCJ7IHJvd3NQZXJQYWdlOiA1MCB9XCJcbiAgICByb3cta2V5PVwiaWRcIlxuICAgIDpjbGFzcz1cIntcbiAgICAgICdiZy1saWdodGVuJzogISRxLmRhcmsuaXNBY3RpdmUsXG4gICAgfVwiXG4gICAgZmxhdFxuICAgIDpyb3dzPVwibWVtYmVyc1wiXG4gICAgOmNvbHVtbnM9XCJbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdhdmF0YXInLFxuICAgICAgICBmaWVsZDogJ2F2YXRhclVybCcsXG4gICAgICAgIGxhYmVsOiAnSWNvbicsXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgIGZpZWxkOiAnbmFtZScsXG4gICAgICAgIGxhYmVsOiAnTmFtZScsXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICBoZWFkZXJTdHlsZTogJ3dpZHRoOiAxMDAlJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdwcm9ub3VucycsXG4gICAgICAgIGZpZWxkOiAncHJvbm91bnMnLFxuICAgICAgICBsYWJlbDogJ1Byb25vdW5zJyxcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnbWVzc2FnZS1jb3VudCcsXG4gICAgICAgIGZpZWxkOiAnbWVzc2FnZUNvdW50JyxcbiAgICAgICAgbGFiZWw6ICdNc2cgIycsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2xhc3QtbWVzc2FnZScsXG4gICAgICAgIGZpZWxkOiAnbGFzdE1lc3NhZ2VBdCcsXG4gICAgICAgIGxhYmVsOiAnTGFzdCBNZXNzYWdlJyxcbiAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICB9LFxuICAgIF1cIlxuICAgIEByb3ctY2xpY2s9XCIoX2V2dDogRXZlbnQsIG1lbWJlcjogTWVtYmVyKSA9PiBlbWl0KCdtZW1iZXJDbGljaycsIG1lbWJlcilcIlxuICA+XG4gICAgPHRlbXBsYXRlICNib2R5LWNlbGwtYXZhdGFyPVwicHJvcHNcIj5cbiAgICAgIDxxLXRkXG4gICAgICAgIDpwcm9wcz1cInByb3BzXCJcbiAgICAgICAgOmNsYXNzPVwieyAnY29sb3ItYWNjZW50JzogY29sb3JBY2NlbnQgfVwiXG4gICAgICAgIDpzdHlsZT1cIlxuICAgICAgICAgIHByb3BzLnJvdy5jb2xvciAmJiBjb2xvckFjY2VudFxuICAgICAgICAgICAgPyBgYm9yZGVyLWxlZnQtY29sb3I6ICMke3Byb3BzLnJvdy5jb2xvcn1gXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgIFwiXG4gICAgICA+XG4gICAgICAgIDxpbml0aWFsLWZhbGxiYWNrLWF2YXRhclxuICAgICAgICAgIDp1cmw9XCJwcm9wcy52YWx1ZVwiXG4gICAgICAgICAgOm5hbWU9XCJwcm9wcy5yb3cubmFtZVwiXG4gICAgICAgICAgc2l6ZT1cIjI0cHhcIlxuICAgICAgICAvPlxuICAgICAgPC9xLXRkPlxuICAgIDwvdGVtcGxhdGU+XG4gICAgPHRlbXBsYXRlICNib2R5LWNlbGwtbmFtZT1cInByb3BzXCI+XG4gICAgICA8cS10ZCA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICB7eyBwcm9wcy5yb3cuZ2V0TmFtZShkZXRlY3RQcm9ub3VucykgfX1cbiAgICAgIDwvcS10ZD5cbiAgICA8L3RlbXBsYXRlPlxuICAgIDx0ZW1wbGF0ZSAjYm9keS1jZWxsLXByb25vdW5zPVwicHJvcHNcIj5cbiAgICAgIDxxLXRkIDpwcm9wcz1cInByb3BzXCI+XG4gICAgICAgIHt7IHByb3BzLnJvdy5nZXRQcm9ub3VucyhkZXRlY3RQcm9ub3VucykgfX1cbiAgICAgIDwvcS10ZD5cbiAgICA8L3RlbXBsYXRlPlxuICAgIDx0ZW1wbGF0ZSAjYm9keS1jZWxsLWxhc3QtbWVzc2FnZT1cInByb3BzXCI+XG4gICAgICA8cS10ZCA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICA8cmVsYXRpdmUtdGltZS1kaXNwbGF5IDp0aW1lPVwicHJvcHMudmFsdWVcIiAvPlxuICAgICAgPC9xLXRkPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvcS10YWJsZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBNZW1iZXIgfSBmcm9tICdzcmMvbW9kZWxzL01lbWJlcic7XG5pbXBvcnQgeyBTeXN0ZW0gfSBmcm9tICdzcmMvbW9kZWxzL1N5c3RlbSc7XG5cbmltcG9ydCBJbml0aWFsRmFsbGJhY2tBdmF0YXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvSW5pdGlhbEZhbGxiYWNrQXZhdGFyLnZ1ZSc7XG5pbXBvcnQgUmVsYXRpdmVUaW1lRGlzcGxheSBmcm9tICdzcmMvY29tcG9uZW50cy9SZWxhdGl2ZVRpbWVEaXNwbGF5LnZ1ZSc7XG5cbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czx7XG4gIChlOiAnbWVtYmVyQ2xpY2snLCBtZW1iZXI6IE1lbWJlcik6IHZvaWQ7XG59PigpO1xuXG5kZWZpbmVQcm9wczx7XG4gIHN5c3RlbTogU3lzdGVtO1xuICBtZW1iZXJzOiBSZWFkb25seUFycmF5PE1lbWJlcj47XG4gIGRldGVjdFByb25vdW5zOiBib29sZWFuO1xuICBjb2xvckFjY2VudDogYm9vbGVhbjtcbn0+KCk7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtaXRlbVxuICAgIHYtZm9yPVwibWVtYmVyIG9mIG1lbWJlcnNcIlxuICAgIDprZXk9XCJtZW1iZXIuaWRcIlxuICAgIGNsaWNrYWJsZVxuICAgIDpjbGFzcz1cInsgJ2NvbG9yLWFjY2VudCc6IGNvbG9yQWNjZW50LCAnYmctbGlnaHRlbic6ICEkcS5kYXJrLmlzQWN0aXZlIH1cIlxuICAgIDpzdHlsZT1cIlxuICAgICAgKG1lbWJlci5jb2xvciAmJiBjb2xvckFjY2VudFxuICAgICAgICA/IGBib3JkZXItbGVmdC1jb2xvcjogIyR7bWVtYmVyLmNvbG9yfTtgXG4gICAgICAgIDogJycpICsgKCRxLmRhcmsuaXNBY3RpdmUgPyAnYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcS1kYXJrKTsnIDogJycpXG4gICAgXCJcbiAgICBAY2xpY2s9XCJlbWl0KCdtZW1iZXJDbGljaycsIG1lbWJlcilcIlxuICA+XG4gICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgIDxpbml0aWFsLWZhbGxiYWNrLWF2YXRhclxuICAgICAgICA6bmFtZT1cIm1lbWJlci5nZXROYW1lKGRldGVjdFByb25vdW5zKVwiXG4gICAgICAgIDp1cmw9XCJtZW1iZXIuYXZhdGFyVXJsXCJcbiAgICAgIC8+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1pdGVtLXNlY3Rpb24gbm8td3JhcD5cbiAgICAgIDxxLWl0ZW0tbGFiZWw+XG4gICAgICAgIHt7IG1lbWJlci5nZXROYW1lKGRldGVjdFByb25vdW5zKSB9fVxuICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8cS1pdGVtLWxhYmVsIHYtaWY9XCJtZW1iZXIuZ2V0UHJvbm91bnMoZGV0ZWN0UHJvbm91bnMpXCIgY2FwdGlvbj5cbiAgICAgICAge3sgbWVtYmVyLmdldFByb25vdW5zKGRldGVjdFByb25vdW5zKSB9fVxuICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgPC9xLWl0ZW0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgTWVtYmVyIH0gZnJvbSAnc3JjL21vZGVscy9NZW1iZXInO1xuaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnc3JjL21vZGVscy9TeXN0ZW0nO1xuXG5pbXBvcnQgSW5pdGlhbEZhbGxiYWNrQXZhdGFyIGZyb20gJ3NyYy9jb21wb25lbnRzL0luaXRpYWxGYWxsYmFja0F2YXRhci52dWUnO1xuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuICAoZTogJ21lbWJlckNsaWNrJywgbWVtYmVyOiBNZW1iZXIpOiB2b2lkO1xufT4oKTtcblxuZGVmaW5lUHJvcHM8e1xuICBzeXN0ZW06IFN5c3RlbTtcbiAgbWVtYmVyczogUmVhZG9ubHlBcnJheTxNZW1iZXI+O1xuICBkZXRlY3RQcm9ub3VuczogYm9vbGVhbjtcbiAgY29sb3JBY2NlbnQ6IGJvb2xlYW47XG59PigpO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl9jcmVhdGVCbG9jayIsIl93aXRoQ3R4IiwiX2NyZWF0ZVZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX25vcm1hbGl6ZVN0eWxlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiJHEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RkEsVUFBTSxPQUFPOzs7Ozs7O0FBdEZSLFNBQUFBLFVBQUEsR0FBK0JDLFlBQUEsUUFBQTtBQUFBLElBQ2hDLG1CQUFZLE9BQUEsUUFBQSxVQUFBO0FBQUEsSUFDWCxZQUFLLEVBQUEsYUFBQSxHQUFBO0FBQUEsSUFBQSxXQUFBO0FBQUE7TUFHTixjQUFJLENBQUEsS0FBQSxHQUFBLEtBQUE7QUFBQSxJQUFBLENBQ0g7QUFBQSxJQUNBLE1BQUE7QUFBQSxJQUFBLE1BQUEsT0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQWtDQSxVQUFBO0FBQUEsTUFBQTtBQUFBLElBQ0E7QUFBQSxJQUVVLFlBQUEsT0FBZ0IsY0FBRSxDQUFLLElBQUEsQ0FBQSxNQUFBLFdBQUEsT0FBQSxLQUFBLGVBQUEsTUFBQTtBQUFBLEVBQUEsR0FBQTtBQUFBLElBRWpCLG9CQUFBQyxRQUFBLENBQUEsVUFBQTtBQUFBLE1BQ1BDLFlBQUEsS0FBQTtBQUFBLFFBQ0w7QUFBQSxRQUFBLE9BQXVCQyxlQUFjLEVBQVcsZ0JBQUEsT0FBQSxZQUFBLENBQUE7QUFBQSxRQUFBLE9BQUFDO0FBQUFBOzs7UUFPekMsU0FBQUgsUUFBTSxNQUFLO0FBQUEsVUFBQUMsWUFDTCxPQUFLLHVCQUFJLEdBQUE7QUFBQSxZQUNyQixLQUFJLE1BQUM7QUFBQSxZQUFBLE1BQUEsTUFBQSxJQUFBO0FBQUE7Ozs7O01BSXFCLEdBQUEsTUFBQSxDQUFBLFNBQUEsU0FBQSxPQUFBLENBQUE7QUFBQSxJQUFBLENBQUE7QUFBQSxJQUVXLGtCQUFBRCxRQUFBLENBQUEsVUFBQTtBQUFBLE1BQUFDLFlBQUEsS0FBQSxFQUFBLFNBQUE7QUFBQSxRQUExQixTQUFBRCxRQUFBLE1BQUE7QUFBQTs7Ozs7Ozs7U0FHbUIsTUFBQSxDQUFBLE9BQUEsQ0FBQTtBQUFBLElBQUEsQ0FBQTtBQUFBLDBCQUVoQ0EsUUFBMkMsQ0FBQSxVQUFBO0FBQUEsTUFBQUMsWUFBQSxLQUFBLEVBQUEsU0FBQTtBQUFBLFFBQTlCLFNBQUFELFFBQUEsTUFBQTtBQUFBOzs7Ozs7OztNQUdOLEdBQUEsTUFBd0IsQ0FBSyxPQUFBLENBQUE7QUFBQSxJQUFBLENBQUE7QUFBQSxJQUVTLDBCQUFBQSxRQUFBLENBQUEsVUFBQTtBQUFBLE1BQUFDLFlBQTdDLEtBQTZDLEVBQUEsU0FBQTtBQUFBLFFBQUEsU0FBakJELFFBQVEsTUFBSztBQUFBLFVBQUFDLFlBQUEsT0FBQSxxQkFBQSxHQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENqRCxVQUFNLE9BQU87Ozs7Ozs7U0FqQ0xILFVBQVcsSUFBQSxHQUFBTTtBQUFBQSxJQUFBQztBQUFBQSxJQUFBO0FBQUEsSUFBQUMsV0FBQSxPQUFBLFNBQUEsQ0FBQSxXQUFBO2FBQ2ZSLFVBQVMsR0FBQUMsWUFBQSxPQUFBO0FBQUEsUUFDUixLQUFLLE9BQUE7QUFBQSxRQUNMLFdBQUs7QUFBQSxRQUFBLE9BQWdCRyxlQUFVLEVBQVcsZ0JBQUEsT0FBQSxhQUFBLGNBQUEsQ0FBQSxLQUFBLEdBQUEsS0FBQSxTQUFBLENBQUE7QUFBQSxRQUFBLE9BQUFDO0FBQUFBLFdBQW1FSSxPQUFBQSxTQUFBQSxPQUFRLGNBS3JILHVCQUFBLE9BQUEsS0FBQSxNQUFBLE9BQUssS0FBRSxHQUFBLEtBQUEsV0FBSSxxQ0FBc0I7QUFBQSxRQUFBO0FBQUEsUUFPakIsU0FBQSxDQUFBLFdBQUEsT0FBQSxLQUFBLGVBQUEsTUFBQTtBQUFBLE1BQUEsR0FBQTtBQUFBLFFBRGIsU0FBQVAsUUFBQSxNQUFBO0FBQUEsVUFBQUM7QUFBQUEsWUFIRjtBQUFBLFlBR0UsRUFBQSxRQUFBLEdBQUE7QUFBQSxZQUFBO0FBQUEsY0FBQSxTQUZLRCxRQUFTLE1BQU87QUFBQSxnQkFBQUMsWUFDVCxPQUFDLHVCQUFTLEdBQUE7QUFBQSxrQkFBQSxNQUFBLE9BQUEsUUFBQSxPQUFBLGNBQUE7QUFBQTs7O2NBRzFCLEdBQUE7QUFBQTtBQUFBLFlBQUE7QUFBQTs7VUFHaUI7QUFBQSxVQUFBQTtBQUFBQSxZQUZmO0FBQUEsWUFFZSxFQUFBLFdBQUEsR0FBQTtBQUFBLFlBQUE7QUFBQSxjQUR1QixTQUFBRCxRQUFBLE1BQUE7QUFBQSxnQkFBQUM7QUFBQUE7a0JBQWpDO0FBQUEsa0JBQU07QUFBQSxvQkFBQSxTQUFBRCxRQUFBLE1BQUE7QUFBQTs7Ozs7O29CQUVTLEdBQUE7QUFBQTtBQUFBLGtCQUFBO0FBQUE7O2dCQUFwQjtBQUFBLGdCQUFBLE9BQUEsWUFBQSxPQUFBLGNBQUEsS0FBQUYsVUFBK0QsR0FBQUM7QUFBQUEsa0JBQUE7QUFBQSxrQkFBQTtBQUFBLG9CQUFBLEtBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
