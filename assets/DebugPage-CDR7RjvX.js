import { ds as addFocusout, dt as removeFocusout, Q as defineComponent, S as useQuasar, T as storeToRefs, dz as useLogStore, d as computed, d0 as dayjs, ad as getVersion, V as openBlock, W as createBlock, X as withCtx, a2 as createBaseVNode, Y as createVNode, a0 as QBtn, a5 as toDisplayString, _ as unref, af as _export_sfc } from "./index-C1u-_TOv.js";
import { Q as QPage } from "./QPage-C2tXGOnV.js";
import { P as PageTitle } from "./PageTitle-gQbGVrI-.js";
function fallback(text) {
  const area = document.createElement("textarea");
  area.value = text;
  area.contentEditable = "true";
  area.style.position = "fixed";
  const fn = () => {
  };
  addFocusout(fn);
  document.body.appendChild(area);
  area.focus();
  area.select();
  const res = document.execCommand("copy");
  area.remove();
  removeFocusout(fn);
  return res;
}
function copyToClipboard(text) {
  return navigator.clipboard !== void 0 ? navigator.clipboard.writeText(text) : new Promise((resolve, reject) => {
    const res = fallback(text);
    if (res) {
      resolve(true);
    } else {
      reject(res);
    }
  });
}
const _hoisted_1 = { class: "col" };
const _hoisted_2 = { class: "row justify-center" };
const _hoisted_3 = { class: "col q-mx-lg" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "h3",
  { class: "q-my-md" },
  "Troubleshooting Info",
  -1
  /* HOISTED */
);
const _hoisted_5 = { class: "bg-lighten q-pa-md" };
const _hoisted_6 = { class: "row justify-center" };
const _hoisted_7 = { class: "col q-mx-lg" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "h3",
  { class: "q-my-md" },
  "Application Logs",
  -1
  /* HOISTED */
);
const _hoisted_9 = { class: "bg-lighten q-pa-md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DebugPage",
  setup(__props) {
    const $q = useQuasar();
    const { lines } = storeToRefs(useLogStore());
    const logText = computed(
      () => lines.value.toReversed().map(
        (l) => `${dayjs(l.time).format("YYYY-MM-DD HH:mm:ss")} | ${sanitizeLogMessage(l.message)}`
      ).join("\n")
    );
    const infoText = `
App: ${getVersion()}
Quasar: v${$q.version}
Platform: ${JSON.stringify($q.platform.is, null, 2)}
`.trim();
    function sanitizeLogMessage(message) {
      const tokenRegex = /[\w+/]{64}/g;
      return message.replaceAll(tokenRegex, "****PLURALKIT_API_TOKEN****");
    }
    async function copyInfoToClipboard() {
      $q.dialog({
        title: "Warning!",
        color: "warning",
        message: "The troubleshooting information may contain sensitive information, we did our best to strip things out, but please double check before pasting this anywhere, <strong>especially for API tokens</strong>",
        html: true,
        cancel: true,
        persistent: true
      }).onOk(async () => {
        await copyToClipboard(
          "==== INFO ====\n\n" + infoText + "\n\n==== LOGS ====\n\n" + logText.value
        );
        $q.notify({ message: "Log Copied" });
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "row justify-evenly" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(PageTitle, {
              icon: "bug_report",
              text: "Troubleshooting Page"
            }, {
              after: withCtx(() => [
                createVNode(QBtn, {
                  "aria-label": "Copy Info To Clipboard",
                  flat: "",
                  icon: "content_copy",
                  onClick: copyInfoToClipboard
                })
              ]),
              _: 1
              /* STABLE */
            }),
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                _hoisted_4,
                createBaseVNode(
                  "pre",
                  _hoisted_5,
                  toDisplayString(unref(infoText)),
                  1
                  /* TEXT */
                )
              ])
            ]),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                _hoisted_8,
                createBaseVNode(
                  "pre",
                  _hoisted_9,
                  toDisplayString(logText.value),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
const DebugPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/zowie/dev/pkstatus/src/pages/DebugPage.vue"]]);
export {
  DebugPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVidWdQYWdlLUNEUjdSanZYLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTUuMi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9jb3B5LXRvLWNsaXBib2FyZC5qcyIsIi4uLy4uLy4uL3NyYy9wYWdlcy9EZWJ1Z1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZEZvY3Vzb3V0LCByZW1vdmVGb2N1c291dCB9IGZyb20gJy4vcHJpdmF0ZS9mb2N1c291dC5qcydcblxuZnVuY3Rpb24gZmFsbGJhY2sgKHRleHQpIHtcbiAgY29uc3QgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgYXJlYS52YWx1ZSA9IHRleHRcbiAgYXJlYS5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSdcbiAgYXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCcgLy8gYXZvaWQgc2Nyb2xsaW5nIHRvIGJvdHRvbVxuXG4gIGNvbnN0IGZuID0gKCkgPT4ge31cbiAgYWRkRm9jdXNvdXQoZm4pXG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcmVhKVxuICBhcmVhLmZvY3VzKClcbiAgYXJlYS5zZWxlY3QoKVxuXG4gIGNvbnN0IHJlcyA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JylcblxuICBhcmVhLnJlbW92ZSgpXG4gIHJlbW92ZUZvY3Vzb3V0KGZuKVxuXG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRleHQpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci5jbGlwYm9hcmQgIT09IHZvaWQgMFxuICAgID8gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dClcbiAgICA6IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGZhbGxiYWNrKHRleHQpXG4gICAgICBpZiAocmVzKSB7XG4gICAgICAgIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZWplY3QocmVzKVxuICAgICAgfVxuICAgIH0pXG59XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgY2xhc3M9XCJyb3cganVzdGlmeS1ldmVubHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICA8cGFnZS10aXRsZSBpY29uPVwiYnVnX3JlcG9ydFwiIHRleHQ9XCJUcm91Ymxlc2hvb3RpbmcgUGFnZVwiPlxuICAgICAgICA8dGVtcGxhdGUgI2FmdGVyPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNvcHkgSW5mbyBUbyBDbGlwYm9hcmRcIlxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgaWNvbj1cImNvbnRlbnRfY29weVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJjb3B5SW5mb1RvQ2xpcGJvYXJkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9wYWdlLXRpdGxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcS1teC1sZ1wiPlxuICAgICAgICAgIDxoMyBjbGFzcz1cInEtbXktbWRcIj5Ucm91Ymxlc2hvb3RpbmcgSW5mbzwvaDM+XG4gICAgICAgICAgPHByZSBjbGFzcz1cImJnLWxpZ2h0ZW4gcS1wYS1tZFwiPnt7IGluZm9UZXh0IH19PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcS1teC1sZ1wiPlxuICAgICAgICAgIDxoMyBjbGFzcz1cInEtbXktbWRcIj5BcHBsaWNhdGlvbiBMb2dzPC9oMz5cbiAgICAgICAgICA8cHJlIGNsYXNzPVwiYmctbGlnaHRlbiBxLXBhLW1kXCI+e3sgbG9nVGV4dCB9fTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSc7XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBjb3B5VG9DbGlwYm9hcmQsIHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcic7XG5cbmltcG9ydCB7IHVzZUxvZ1N0b3JlIH0gZnJvbSAnc3JjL3N0b3Jlcy9sb2ctc3RvcmUnO1xuXG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gJ3NyYy9jb21wb25lbnRzL1BhZ2VUaXRsZS52dWUnO1xuaW1wb3J0IHsgZ2V0VmVyc2lvbiB9IGZyb20gJ3NyYy91dGlsJztcblxuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0IHsgbGluZXMgfSA9IHN0b3JlVG9SZWZzKHVzZUxvZ1N0b3JlKCkpO1xuXG5jb25zdCBsb2dUZXh0ID0gY29tcHV0ZWQoKCkgPT5cbiAgbGluZXMudmFsdWVcbiAgICAudG9SZXZlcnNlZCgpXG4gICAgLm1hcChcbiAgICAgIChsKSA9PlxuICAgICAgICBgJHtkYXlqcyhsLnRpbWUpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpfSB8ICR7c2FuaXRpemVMb2dNZXNzYWdlKGwubWVzc2FnZSl9YCxcbiAgICApXG4gICAgLmpvaW4oJ1xcbicpLFxuKTtcblxuY29uc3QgaW5mb1RleHQgPSBgXG5BcHA6ICR7Z2V0VmVyc2lvbigpfVxuUXVhc2FyOiB2JHskcS52ZXJzaW9ufVxuUGxhdGZvcm06ICR7SlNPTi5zdHJpbmdpZnkoJHEucGxhdGZvcm0uaXMsIG51bGwsIDIpfVxuYC50cmltKCk7XG5cbmZ1bmN0aW9uIHNhbml0aXplTG9nTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB0b2tlblJlZ2V4ID0gL1tcXHcrL117NjR9L2c7XG4gIHJldHVybiBtZXNzYWdlLnJlcGxhY2VBbGwodG9rZW5SZWdleCwgJyoqKipQTFVSQUxLSVRfQVBJX1RPS0VOKioqKicpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjb3B5SW5mb1RvQ2xpcGJvYXJkKCkge1xuICAkcS5kaWFsb2coe1xuICAgIHRpdGxlOiAnV2FybmluZyEnLFxuICAgIGNvbG9yOiAnd2FybmluZycsXG4gICAgbWVzc2FnZTpcbiAgICAgICdUaGUgdHJvdWJsZXNob290aW5nIGluZm9ybWF0aW9uIG1heSBjb250YWluIHNlbnNpdGl2ZSBpbmZvcm1hdGlvbiwgJyArXG4gICAgICAnd2UgZGlkIG91ciBiZXN0IHRvIHN0cmlwIHRoaW5ncyBvdXQsICcgK1xuICAgICAgJ2J1dCBwbGVhc2UgZG91YmxlIGNoZWNrIGJlZm9yZSBwYXN0aW5nIHRoaXMgYW55d2hlcmUsICcgK1xuICAgICAgJzxzdHJvbmc+ZXNwZWNpYWxseSBmb3IgQVBJIHRva2Vuczwvc3Ryb25nPicsXG4gICAgaHRtbDogdHJ1ZSxcbiAgICBjYW5jZWw6IHRydWUsXG4gICAgcGVyc2lzdGVudDogdHJ1ZSxcbiAgfSkub25Payhhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgY29weVRvQ2xpcGJvYXJkKFxuICAgICAgJz09PT0gSU5GTyA9PT09XFxuXFxuJyArXG4gICAgICAgIGluZm9UZXh0ICtcbiAgICAgICAgJ1xcblxcbj09PT0gTE9HUyA9PT09XFxuXFxuJyArXG4gICAgICAgIGxvZ1RleHQudmFsdWUsXG4gICAgKTtcbiAgICAkcS5ub3RpZnkoeyBtZXNzYWdlOiAnTG9nIENvcGllZCcgfSk7XG4gIH0pO1xufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsU0FBUyxTQUFVLE1BQU07QUFDdkIsUUFBTSxPQUFPLFNBQVMsY0FBYyxVQUFVO0FBQzlDLE9BQUssUUFBUTtBQUNiLE9BQUssa0JBQWtCO0FBQ3ZCLE9BQUssTUFBTSxXQUFXO0FBRXRCLFFBQU0sS0FBSyxNQUFNO0FBQUEsRUFBRTtBQUNuQixjQUFZLEVBQUU7QUFFZCxXQUFTLEtBQUssWUFBWSxJQUFJO0FBQzlCLE9BQUssTUFBTztBQUNaLE9BQUssT0FBUTtBQUViLFFBQU0sTUFBTSxTQUFTLFlBQVksTUFBTTtBQUV2QyxPQUFLLE9BQVE7QUFDYixpQkFBZSxFQUFFO0FBRWpCLFNBQU87QUFDVDtBQUVlLFNBQVEsZ0JBQUUsTUFBTTtBQUM3QixTQUFPLFVBQVUsY0FBYyxTQUMzQixVQUFVLFVBQVUsVUFBVSxJQUFJLElBQ2xDLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUNqQyxVQUFNLE1BQU0sU0FBUyxJQUFJO0FBQ3pCLFFBQUksS0FBSztBQUNQLGNBQVEsSUFBSTtBQUFBLElBQ2IsT0FDSTtBQUNILGFBQU8sR0FBRztBQUFBLElBQ1g7QUFBQSxFQUNQLENBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ01BLFVBQU0sS0FBSztBQUNYLFVBQU0sRUFBRSxNQUFVLElBQUEsWUFBWSxZQUFhLENBQUE7QUFFM0MsVUFBTSxVQUFVO0FBQUEsTUFBUyxNQUN2QixNQUFNLE1BQ0gsV0FBQSxFQUNBO0FBQUEsUUFDQyxDQUFDLE1BQ0MsR0FBRyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8scUJBQXFCLENBQUMsTUFBTSxtQkFBbUIsRUFBRSxPQUFPLENBQUM7QUFBQSxNQUFBLEVBRXBGLEtBQUssSUFBSTtBQUFBLElBQUE7QUFHZCxVQUFNLFdBQVc7QUFBQSxPQUNWLFlBQVk7QUFBQSxXQUNSLEdBQUcsT0FBTztBQUFBLFlBQ1QsS0FBSyxVQUFVLEdBQUcsU0FBUyxJQUFJLE1BQU0sQ0FBQyxDQUFDO0FBQUEsRUFDakQsS0FBSztBQUVQLGFBQVMsbUJBQW1CLFNBQXlCO0FBQ25ELFlBQU0sYUFBYTtBQUNaLGFBQUEsUUFBUSxXQUFXLFlBQVksNkJBQTZCO0FBQUEsSUFDckU7QUFFQSxtQkFBZSxzQkFBc0I7QUFDbkMsU0FBRyxPQUFPO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxTQUNFO0FBQUEsUUFJRixNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsTUFBQSxDQUNiLEVBQUUsS0FBSyxZQUFZO0FBQ1osY0FBQTtBQUFBLFVBQ0osdUJBQ0UsV0FDQSwyQkFDQSxRQUFRO0FBQUEsUUFBQTtBQUVaLFdBQUcsT0FBTyxFQUFFLFNBQVMsYUFBYyxDQUFBO0FBQUEsTUFBQSxDQUNwQztBQUFBLElBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
