import { c5 as addFocusout, c6 as removeFocusout, J as defineComponent, by as dayjs, cb as sanitizeLogMessage, _ as _export_sfc, ag as createElementBlock, T as openBlock, Y as createBaseVNode, a0 as createCommentVNode, a2 as toDisplayString, X as normalizeClass, ak as Fragment, cc as useLogger, r as ref, M as getVersion, N as useQuasar, S as createBlock, U as withCtx, W as createVNode, Z as QBtn, an as renderList } from "./index-Czhz81pV.js";
import { Q as QPage } from "./QPage-B7Tg8hoM.js";
import { P as PageTitle } from "./PageTitle-BKiEeIBH.js";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LogEntry",
  props: {
    line: { type: null, required: true },
    idx: { type: Number, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    function colorClass() {
      switch (props.line.level) {
        case "debug":
          return "text-positive";
        case "info":
          return "text-info";
        case "warn":
          return "text-warning";
        case "error":
          return "text-negative";
      }
    }
    const __returned__ = { props, colorClass, get sanitizeLogMessage() {
      return sanitizeLogMessage;
    }, get dayjs() {
      return dayjs;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  width: "1",
  class: "timestamp q-pa-sm text-bold"
};
const _hoisted_2$1 = { class: "q-pa-sm" };
const _hoisted_3$1 = { class: "q-ma-none" };
const _hoisted_4$1 = { class: "q-pa-sm" };
const _hoisted_5$1 = { class: "q-ma-none" };
const _hoisted_6$1 = { class: "q-pa-sm" };
const _hoisted_7$1 = { class: "q-ma-none" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createBaseVNode(
        "tr",
        {
          class: normalizeClass($props.idx % 2 == 0 ? "row-even" : "row-odd")
        },
        [
          _cache[0] || (_cache[0] = createBaseVNode(
            "td",
            {
              width: "1",
              class: "q-pa-sm text-bold",
              valign: "top"
            },
            "date",
            -1
            /* CACHED */
          )),
          createBaseVNode(
            "td",
            _hoisted_1$1,
            toDisplayString($setup.dayjs($props.line.time).format("YYYY-MM-DD HH:mm:ss")),
            1
            /* TEXT */
          )
        ],
        2
        /* CLASS */
      ),
      createBaseVNode(
        "tr",
        {
          class: normalizeClass($props.idx % 2 == 0 ? "row-even" : "row-odd")
        },
        [
          _cache[1] || (_cache[1] = createBaseVNode(
            "td",
            {
              width: "1",
              class: "q-pa-sm",
              valign: "top"
            },
            "type",
            -1
            /* CACHED */
          )),
          createBaseVNode(
            "td",
            {
              width: "1",
              class: normalizeClass(["q-pa-sm", $setup.colorClass()])
            },
            toDisplayString($props.line.level),
            3
            /* TEXT, CLASS */
          )
        ],
        2
        /* CLASS */
      ),
      createBaseVNode(
        "tr",
        {
          class: normalizeClass($props.idx % 2 == 0 ? "row-even" : "row-odd")
        },
        [
          _cache[2] || (_cache[2] = createBaseVNode(
            "td",
            {
              width: "1",
              class: "q-pa-sm",
              valign: "top"
            },
            "message",
            -1
            /* CACHED */
          )),
          createBaseVNode("td", _hoisted_2$1, [
            createBaseVNode(
              "pre",
              _hoisted_3$1,
              toDisplayString($setup.sanitizeLogMessage($props.line.message)),
              1
              /* TEXT */
            )
          ])
        ],
        2
        /* CLASS */
      ),
      $props.line.error ? (openBlock(), createElementBlock(
        "tr",
        {
          key: 0,
          class: normalizeClass($props.idx % 2 == 0 ? "row-even" : "row-odd")
        },
        [
          _cache[3] || (_cache[3] = createBaseVNode(
            "td",
            {
              width: "1",
              class: "q-pa-sm",
              valign: "top"
            },
            "error",
            -1
            /* CACHED */
          )),
          createBaseVNode("td", _hoisted_4$1, [
            createBaseVNode(
              "pre",
              _hoisted_5$1,
              toDisplayString($setup.sanitizeLogMessage($props.line.error)),
              1
              /* TEXT */
            )
          ])
        ],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true),
      $props.line.stack ? (openBlock(), createElementBlock(
        "tr",
        {
          key: 1,
          class: normalizeClass($props.idx % 2 == 0 ? "row-even" : "row-odd")
        },
        [
          _cache[4] || (_cache[4] = createBaseVNode(
            "td",
            {
              width: "1",
              class: "q-pa-sm",
              valign: "top"
            },
            "stack",
            -1
            /* CACHED */
          )),
          createBaseVNode("td", _hoisted_6$1, [
            createBaseVNode(
              "pre",
              _hoisted_7$1,
              toDisplayString($setup.sanitizeLogMessage($props.line.stack)),
              1
              /* TEXT */
            )
          ])
        ],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const LogEntry = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-3be028da"], ["__file", "/home/zowie/dev/pkstatus/src/components/DebugPage/LogEntry.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DebugPage",
  setup(__props, { expose: __expose }) {
    __expose();
    const $q = useQuasar();
    const logger = useLogger();
    const lines = ref(logger.lines);
    const infoText = `
App: ${getVersion()}
Quasar: v${$q.version}

${JSON.stringify($q.platform.is, null, 2)}
`.trim();
    function generateClipboardText() {
      const outLines = [
        "# Info",
        "",
        `**App:** ${getVersion()}`,
        `**Quasar:** ${$q.version}`,
        "",
        "## Platform",
        "```json",
        JSON.stringify($q.platform.is, null, 2),
        "```",
        "",
        "# Logs",
        ""
      ];
      for (const logLine of logger.lines.toReversed()) {
        outLines.push(
          `## ${dayjs(logLine.time).format("YYYY-MM-DD HH:mm:ss")} | ${logLine.level}`,
          "```",
          sanitizeLogMessage(logLine.message),
          "```"
        );
        if (logLine.error) {
          outLines.push(
            "### Error",
            "```",
            sanitizeLogMessage(logLine.error),
            "```"
          );
        }
        if (logLine.stack) {
          outLines.push(
            "### Stack",
            "```",
            sanitizeLogMessage(logLine.stack),
            "```"
          );
        }
      }
      return outLines.join("\n");
    }
    function copyInfoToClipboard() {
      $q.dialog({
        title: "Warning!",
        color: "warning",
        message: "The troubleshooting information may contain sensitive information, we did our best to strip things out, but please double check before pasting this anywhere, <strong>especially for API tokens</strong>",
        html: true,
        cancel: true,
        persistent: true
      }).onOk(() => {
        copyToClipboard(generateClipboardText()).then(() => $q.notify({ message: "Log Copied" })).catch(
          (err) => $q.notify({ message: `Couldn't copy to clipboard: ${err == null ? void 0 : err.message}` })
        );
      });
    }
    function clearLog() {
      $q.dialog({
        title: "Warning!",
        color: "warning",
        message: "This will wipe the entire log, are you sure?",
        html: true,
        cancel: true,
        persistent: true
      }).onOk(() => {
        logger.clear();
        lines.value = logger.lines;
      });
    }
    const __returned__ = { $q, logger, lines, infoText, generateClipboardText, copyInfoToClipboard, clearLog, PageTitle, LogEntry };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "col" };
const _hoisted_2 = { class: "row justify-center" };
const _hoisted_3 = { class: "col q-mx-lg" };
const _hoisted_4 = { class: "bg-lighten q-pa-md" };
const _hoisted_5 = { class: "row justify-center" };
const _hoisted_6 = { class: "col q-mx-lg" };
const _hoisted_7 = { class: "row" };
const _hoisted_8 = { class: "col-auto self-center" };
const _hoisted_9 = {
  key: 0,
  class: "log-entries full-width q-mb-lg bg-lighten"
};
const _hoisted_10 = {
  key: 1,
  class: "bg-lighten q-pa-md q-mb-lg"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { class: "row justify-evenly" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["PageTitle"], {
          icon: "bug_report",
          text: "Troubleshooting Page"
        }, {
          after: withCtx(() => [
            createVNode(QBtn, {
              "aria-label": "Copy Info To Clipboard",
              flat: "",
              icon: "content_copy",
              onClick: $setup.copyInfoToClipboard
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _cache[0] || (_cache[0] = createBaseVNode(
              "h3",
              { class: "q-my-md" },
              "Troubleshooting Info",
              -1
              /* CACHED */
            )),
            createBaseVNode(
              "pre",
              _hoisted_4,
              toDisplayString($setup.infoText),
              1
              /* TEXT */
            )
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              _cache[1] || (_cache[1] = createBaseVNode(
                "h3",
                { class: "q-my-md col" },
                "Application Logs",
                -1
                /* CACHED */
              )),
              createBaseVNode("div", _hoisted_8, [
                createVNode(QBtn, {
                  "aria-label": "Clear Log",
                  flat: "",
                  icon: "delete",
                  onClick: $setup.clearLog
                })
              ])
            ]),
            !!$setup.lines.length ? (openBlock(), createElementBlock("table", _hoisted_9, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($setup.lines.toReversed(), (line, idx) => {
                  return openBlock(), createBlock($setup["LogEntry"], {
                    key: line.time,
                    line,
                    idx
                  }, null, 8, ["line", "idx"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])) : (openBlock(), createElementBlock("div", _hoisted_10, "No Entries"))
          ])
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const DebugPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/pages/DebugPage.vue"]]);
export {
  DebugPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVidWdQYWdlLUMyYzJIVnhxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTguMi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9jb3B5LXRvLWNsaXBib2FyZC9jb3B5LXRvLWNsaXBib2FyZC5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RlYnVnUGFnZS9Mb2dFbnRyeS52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvRGVidWdQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRGb2N1c291dCwgcmVtb3ZlRm9jdXNvdXQgfSBmcm9tICcuLi9wcml2YXRlLmZvY3VzL2ZvY3Vzb3V0LmpzJ1xuXG5mdW5jdGlvbiBmYWxsYmFjayAodGV4dCkge1xuICBjb25zdCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICBhcmVhLnZhbHVlID0gdGV4dFxuICBhcmVhLmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJ1xuICBhcmVhLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJyAvLyBhdm9pZCBzY3JvbGxpbmcgdG8gYm90dG9tXG5cbiAgY29uc3QgZm4gPSAoKSA9PiB7fVxuICBhZGRGb2N1c291dChmbilcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFyZWEpXG4gIGFyZWEuZm9jdXMoKVxuICBhcmVhLnNlbGVjdCgpXG5cbiAgY29uc3QgcmVzID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxuXG4gIGFyZWEucmVtb3ZlKClcbiAgcmVtb3ZlRm9jdXNvdXQoZm4pXG5cbiAgcmV0dXJuIHJlc1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodGV4dCkge1xuICByZXR1cm4gbmF2aWdhdG9yLmNsaXBib2FyZCAhPT0gdm9pZCAwXG4gICAgPyBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KVxuICAgIDogbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gZmFsbGJhY2sodGV4dClcbiAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlamVjdChyZXMpXG4gICAgICB9XG4gICAgfSlcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPHRyIDpjbGFzcz1cImlkeCAlIDIgPT0gMCA/ICdyb3ctZXZlbicgOiAncm93LW9kZCdcIj5cbiAgICA8dGQgd2lkdGg9XCIxXCIgY2xhc3M9XCJxLXBhLXNtIHRleHQtYm9sZFwiIHZhbGlnbj1cInRvcFwiPmRhdGU8L3RkPlxuICAgIDx0ZCB3aWR0aD1cIjFcIiBjbGFzcz1cInRpbWVzdGFtcCBxLXBhLXNtIHRleHQtYm9sZFwiPlxuICAgICAge3sgZGF5anMobGluZS50aW1lKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKSB9fVxuICAgIDwvdGQ+XG4gIDwvdHI+XG4gIDx0ciA6Y2xhc3M9XCJpZHggJSAyID09IDAgPyAncm93LWV2ZW4nIDogJ3Jvdy1vZGQnXCI+XG4gICAgPHRkIHdpZHRoPVwiMVwiIGNsYXNzPVwicS1wYS1zbVwiIHZhbGlnbj1cInRvcFwiPnR5cGU8L3RkPlxuICAgIDx0ZCB3aWR0aD1cIjFcIiA6Y2xhc3M9XCJbJ3EtcGEtc20nLCBjb2xvckNsYXNzKCldXCI+XG4gICAgICB7eyBsaW5lLmxldmVsIH19XG4gICAgPC90ZD5cbiAgPC90cj5cbiAgPHRyIDpjbGFzcz1cImlkeCAlIDIgPT0gMCA/ICdyb3ctZXZlbicgOiAncm93LW9kZCdcIj5cbiAgICA8dGQgd2lkdGg9XCIxXCIgY2xhc3M9XCJxLXBhLXNtXCIgdmFsaWduPVwidG9wXCI+bWVzc2FnZTwvdGQ+XG4gICAgPHRkIGNsYXNzPVwicS1wYS1zbVwiPlxuICAgICAgPHByZSBjbGFzcz1cInEtbWEtbm9uZVwiPnt7IHNhbml0aXplTG9nTWVzc2FnZShsaW5lLm1lc3NhZ2UpIH19PC9wcmU+XG4gICAgPC90ZD5cbiAgPC90cj5cbiAgPHRlbXBsYXRlIHYtaWY9XCJsaW5lLmVycm9yXCI+XG4gICAgPHRyIDpjbGFzcz1cImlkeCAlIDIgPT0gMCA/ICdyb3ctZXZlbicgOiAncm93LW9kZCdcIj5cbiAgICAgIDx0ZCB3aWR0aD1cIjFcIiBjbGFzcz1cInEtcGEtc21cIiB2YWxpZ249XCJ0b3BcIj5lcnJvcjwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJxLXBhLXNtXCI+XG4gICAgICAgIDxwcmUgY2xhc3M9XCJxLW1hLW5vbmVcIj57eyBzYW5pdGl6ZUxvZ01lc3NhZ2UobGluZS5lcnJvcikgfX08L3ByZT5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgPC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlIHYtaWY9XCJsaW5lLnN0YWNrXCI+XG4gICAgPHRyIDpjbGFzcz1cImlkeCAlIDIgPT0gMCA/ICdyb3ctZXZlbicgOiAncm93LW9kZCdcIj5cbiAgICAgIDx0ZCB3aWR0aD1cIjFcIiBjbGFzcz1cInEtcGEtc21cIiB2YWxpZ249XCJ0b3BcIj5zdGFjazwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJxLXBhLXNtXCI+XG4gICAgICAgIDxwcmUgY2xhc3M9XCJxLW1hLW5vbmVcIj57eyBzYW5pdGl6ZUxvZ01lc3NhZ2UobGluZS5zdGFjaykgfX08L3ByZT5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgPC90ZW1wbGF0ZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBzYW5pdGl6ZUxvZ01lc3NhZ2UgfSBmcm9tICdzcmMvdXRpbCc7XG5pbXBvcnQgeyBMb2dFbnRyeSB9IGZyb20gJ3NyYy9saWIvTG9nZ2VyJztcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8eyBsaW5lOiBMb2dFbnRyeTsgaWR4OiBudW1iZXIgfT4oKTtcbmZ1bmN0aW9uIGNvbG9yQ2xhc3MoKSB7XG4gIHN3aXRjaCAocHJvcHMubGluZS5sZXZlbCkge1xuICAgIGNhc2UgJ2RlYnVnJzpcbiAgICAgIHJldHVybiAndGV4dC1wb3NpdGl2ZSc7XG4gICAgY2FzZSAnaW5mbyc6XG4gICAgICByZXR1cm4gJ3RleHQtaW5mbyc7XG4gICAgY2FzZSAnd2Fybic6XG4gICAgICByZXR1cm4gJ3RleHQtd2FybmluZyc7XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgcmV0dXJuICd0ZXh0LW5lZ2F0aXZlJztcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5sb2ctZW50cmllcyAudGltZXN0YW1wIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgY2xhc3M9XCJyb3cganVzdGlmeS1ldmVubHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICA8cGFnZS10aXRsZSBpY29uPVwiYnVnX3JlcG9ydFwiIHRleHQ9XCJUcm91Ymxlc2hvb3RpbmcgUGFnZVwiPlxuICAgICAgICA8dGVtcGxhdGUgI2FmdGVyPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNvcHkgSW5mbyBUbyBDbGlwYm9hcmRcIlxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgaWNvbj1cImNvbnRlbnRfY29weVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJjb3B5SW5mb1RvQ2xpcGJvYXJkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9wYWdlLXRpdGxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcS1teC1sZ1wiPlxuICAgICAgICAgIDxoMyBjbGFzcz1cInEtbXktbWRcIj5Ucm91Ymxlc2hvb3RpbmcgSW5mbzwvaDM+XG4gICAgICAgICAgPHByZSBjbGFzcz1cImJnLWxpZ2h0ZW4gcS1wYS1tZFwiPnt7IGluZm9UZXh0IH19PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcS1teC1sZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInEtbXktbWQgY29sXCI+QXBwbGljYXRpb24gTG9nczwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsZWFyIExvZ1wiXG4gICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgIGljb249XCJkZWxldGVcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cImNsZWFyTG9nXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx0YWJsZVxuICAgICAgICAgICAgdi1pZj1cIiEhbGluZXMubGVuZ3RoXCJcbiAgICAgICAgICAgIGNsYXNzPVwibG9nLWVudHJpZXMgZnVsbC13aWR0aCBxLW1iLWxnIGJnLWxpZ2h0ZW5cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxsb2ctZW50cnlcbiAgICAgICAgICAgICAgdi1mb3I9XCIobGluZSwgaWR4KSBpbiBsaW5lcy50b1JldmVyc2VkKClcIlxuICAgICAgICAgICAgICA6a2V5PVwibGluZS50aW1lXCJcbiAgICAgICAgICAgICAgOmxpbmU9XCJsaW5lXCJcbiAgICAgICAgICAgICAgOmlkeD1cImlkeFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJiZy1saWdodGVuIHEtcGEtbWQgcS1tYi1sZ1wiPk5vIEVudHJpZXM8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCB7IGNvcHlUb0NsaXBib2FyZCwgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcblxuaW1wb3J0IHsgdXNlTG9nZ2VyIH0gZnJvbSAnc3JjL2Jvb3QvbG9nZ2VyJztcbmltcG9ydCB7IGdldFZlcnNpb24sIHNhbml0aXplTG9nTWVzc2FnZSB9IGZyb20gJ3NyYy91dGlsJztcblxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICdzcmMvY29tcG9uZW50cy9QYWdlVGl0bGUudnVlJztcbmltcG9ydCBMb2dFbnRyeSBmcm9tICdzcmMvY29tcG9uZW50cy9EZWJ1Z1BhZ2UvTG9nRW50cnkudnVlJztcbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5jb25zdCBsb2dnZXIgPSB1c2VMb2dnZXIoKTtcbmNvbnN0IGxpbmVzID0gcmVmKGxvZ2dlci5saW5lcyk7XG5cbmNvbnN0IGluZm9UZXh0ID0gYFxuQXBwOiAke2dldFZlcnNpb24oKX1cblF1YXNhcjogdiR7JHEudmVyc2lvbn1cblxuJHtKU09OLnN0cmluZ2lmeSgkcS5wbGF0Zm9ybS5pcywgbnVsbCwgMil9XG5gLnRyaW0oKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVDbGlwYm9hcmRUZXh0KCk6IHN0cmluZyB7XG4gIGNvbnN0IG91dExpbmVzID0gW1xuICAgICcjIEluZm8nLFxuICAgICcnLFxuICAgIGAqKkFwcDoqKiAke2dldFZlcnNpb24oKX1gLFxuICAgIGAqKlF1YXNhcjoqKiAkeyRxLnZlcnNpb259YCxcbiAgICAnJyxcbiAgICAnIyMgUGxhdGZvcm0nLFxuICAgICdgYGBqc29uJyxcbiAgICBKU09OLnN0cmluZ2lmeSgkcS5wbGF0Zm9ybS5pcywgbnVsbCwgMiksXG4gICAgJ2BgYCcsXG4gICAgJycsXG4gICAgJyMgTG9ncycsXG4gICAgJycsXG4gIF07XG5cbiAgZm9yIChjb25zdCBsb2dMaW5lIG9mIGxvZ2dlci5saW5lcy50b1JldmVyc2VkKCkpIHtcbiAgICBvdXRMaW5lcy5wdXNoKFxuICAgICAgYCMjICR7ZGF5anMobG9nTGluZS50aW1lKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKX0gfCAke2xvZ0xpbmUubGV2ZWx9YCxcbiAgICAgICdgYGAnLFxuICAgICAgc2FuaXRpemVMb2dNZXNzYWdlKGxvZ0xpbmUubWVzc2FnZSksXG4gICAgICAnYGBgJyxcbiAgICApO1xuICAgIGlmIChsb2dMaW5lLmVycm9yKSB7XG4gICAgICBvdXRMaW5lcy5wdXNoKFxuICAgICAgICAnIyMjIEVycm9yJyxcbiAgICAgICAgJ2BgYCcsXG4gICAgICAgIHNhbml0aXplTG9nTWVzc2FnZShsb2dMaW5lLmVycm9yKSxcbiAgICAgICAgJ2BgYCcsXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAobG9nTGluZS5zdGFjaykge1xuICAgICAgb3V0TGluZXMucHVzaChcbiAgICAgICAgJyMjIyBTdGFjaycsXG4gICAgICAgICdgYGAnLFxuICAgICAgICBzYW5pdGl6ZUxvZ01lc3NhZ2UobG9nTGluZS5zdGFjayksXG4gICAgICAgICdgYGAnLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0TGluZXMuam9pbignXFxuJyk7XG59XG5cbmZ1bmN0aW9uIGNvcHlJbmZvVG9DbGlwYm9hcmQoKSB7XG4gICRxLmRpYWxvZyh7XG4gICAgdGl0bGU6ICdXYXJuaW5nIScsXG4gICAgY29sb3I6ICd3YXJuaW5nJyxcbiAgICBtZXNzYWdlOlxuICAgICAgJ1RoZSB0cm91Ymxlc2hvb3RpbmcgaW5mb3JtYXRpb24gbWF5IGNvbnRhaW4gc2Vuc2l0aXZlIGluZm9ybWF0aW9uLCAnICtcbiAgICAgICd3ZSBkaWQgb3VyIGJlc3QgdG8gc3RyaXAgdGhpbmdzIG91dCwgJyArXG4gICAgICAnYnV0IHBsZWFzZSBkb3VibGUgY2hlY2sgYmVmb3JlIHBhc3RpbmcgdGhpcyBhbnl3aGVyZSwgJyArXG4gICAgICAnPHN0cm9uZz5lc3BlY2lhbGx5IGZvciBBUEkgdG9rZW5zPC9zdHJvbmc+JyxcbiAgICBodG1sOiB0cnVlLFxuICAgIGNhbmNlbDogdHJ1ZSxcbiAgICBwZXJzaXN0ZW50OiB0cnVlLFxuICB9KS5vbk9rKCgpID0+IHtcbiAgICBjb3B5VG9DbGlwYm9hcmQoZ2VuZXJhdGVDbGlwYm9hcmRUZXh0KCkpXG4gICAgICAudGhlbigoKSA9PiAkcS5ub3RpZnkoeyBtZXNzYWdlOiAnTG9nIENvcGllZCcgfSkpXG4gICAgICAuY2F0Y2goKGVycikgPT5cbiAgICAgICAgJHEubm90aWZ5KHsgbWVzc2FnZTogYENvdWxkbid0IGNvcHkgdG8gY2xpcGJvYXJkOiAke2Vycj8ubWVzc2FnZX1gIH0pLFxuICAgICAgKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTG9nKCkge1xuICAkcS5kaWFsb2coe1xuICAgIHRpdGxlOiAnV2FybmluZyEnLFxuICAgIGNvbG9yOiAnd2FybmluZycsXG4gICAgbWVzc2FnZTogJ1RoaXMgd2lsbCB3aXBlIHRoZSBlbnRpcmUgbG9nLCBhcmUgeW91IHN1cmU/JyxcbiAgICBodG1sOiB0cnVlLFxuICAgIGNhbmNlbDogdHJ1ZSxcbiAgICBwZXJzaXN0ZW50OiB0cnVlLFxuICB9KS5vbk9rKCgpID0+IHtcbiAgICBsb2dnZXIuY2xlYXIoKTtcbiAgICBsaW5lcy52YWx1ZSA9IGxvZ2dlci5saW5lcztcbiAgfSk7XG59XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfaG9pc3RlZF8xIiwiX2hvaXN0ZWRfMiIsIl9ob2lzdGVkXzMiLCJfaG9pc3RlZF80IiwiX2hvaXN0ZWRfNSIsIl9zZmNfcmVuZGVyIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJfaG9pc3RlZF82IiwiX2NyZWF0ZUJsb2NrIiwiX3dpdGhDdHgiLCJfY3JlYXRlVk5vZGUiLCJfcmVuZGVyTGlzdCJdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsU0FBUyxTQUFVLE1BQU07QUFDdkIsUUFBTSxPQUFPLFNBQVMsY0FBYyxVQUFVO0FBQzlDLE9BQUssUUFBUTtBQUNiLE9BQUssa0JBQWtCO0FBQ3ZCLE9BQUssTUFBTSxXQUFXO0FBRXRCLFFBQU0sS0FBSyxNQUFNO0FBQUEsRUFBQTtBQUNqQixjQUFZLEVBQUU7QUFFZCxXQUFTLEtBQUssWUFBWSxJQUFJO0FBQzlCLE9BQUssTUFBSztBQUNWLE9BQUssT0FBTTtBQUVYLFFBQU0sTUFBTSxTQUFTLFlBQVksTUFBTTtBQUV2QyxPQUFLLE9BQU07QUFDWCxpQkFBZSxFQUFFO0FBRWpCLFNBQU87QUFDVDtBQUVlLFNBQVEsZ0JBQUUsTUFBTTtBQUM3QixTQUFPLFVBQVUsY0FBYyxTQUMzQixVQUFVLFVBQVUsVUFBVSxJQUFJLElBQ2xDLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUNqQyxVQUFNLE1BQU0sU0FBUyxJQUFJO0FBQ3pCLFFBQUksS0FBSztBQUNQLGNBQVEsSUFBSTtBQUFBLElBQ3BCLE9BQ1c7QUFDSCxhQUFPLEdBQUc7QUFBQSxJQUNsQjtBQUFBLEVBQ0ssQ0FBQTtBQUNMOzs7Ozs7Ozs7QUNPQSxVQUFNLFFBQVE7QUFDZCxhQUFTLGFBQWE7QUFDWixjQUFBLE1BQU0sS0FBSyxPQUFPO0FBQUEsUUFDeEIsS0FBSztBQUNJLGlCQUFBO0FBQUEsUUFDVCxLQUFLO0FBQ0ksaUJBQUE7QUFBQSxRQUNULEtBQUs7QUFDSSxpQkFBQTtBQUFBLFFBQ1QsS0FBSztBQUNJLGlCQUFBO0FBQUEsTUFBQTtBQUFBLElBQ1g7Ozs7Ozs7Ozs7TUFsRGdCQSxlQUFNO0FBQUEsRUFBQSxPQUFBO0FBQUE7O0FBbUJkLE1BQUFDLGVBQUEsRUFBQSxPQUFNLFVBQVM7QUFD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
