import { bx as getDefaultExportFromCjs, J as defineComponent, by as dayjs, r as ref, t as onMounted, D as onUnmounted, _ as _export_sfc, a2 as toDisplayString } from "./index-Czhz81pV.js";
var relativeTime$2 = { exports: {} };
var relativeTime$1 = relativeTime$2.exports;
var hasRequiredRelativeTime;
function requireRelativeTime() {
  if (hasRequiredRelativeTime) return relativeTime$2.exports;
  hasRequiredRelativeTime = 1;
  (function(module, exports) {
    !function(r, e) {
      module.exports = e();
    }(relativeTime$1, function() {
      return function(r, e, t) {
        r = r || {};
        var n = e.prototype, o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
        function i(r2, e2, t2, o2) {
          return n.fromToBase(r2, e2, t2, o2);
        }
        t.en.relativeTime = o, n.fromToBase = function(e2, n2, i2, d2, u) {
          for (var f, a, s, l = i2.$locale().relativeTime || o, h = r.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], m = h.length, c = 0; c < m; c += 1) {
            var y = h[c];
            y.d && (f = d2 ? t(e2).diff(i2, y.d, true) : i2.diff(e2, y.d, true));
            var p = (r.rounding || Math.round)(Math.abs(f));
            if (s = f > 0, p <= y.r || !y.r) {
              p <= 1 && c > 0 && (y = h[c - 1]);
              var v = l[y.l];
              u && (p = u("" + p)), a = "string" == typeof v ? v.replace("%d", p) : v(p, n2, y.l, s);
              break;
            }
          }
          if (n2) return a;
          var M = s ? l.future : l.past;
          return "function" == typeof M ? M(a) : M.replace("%s", a);
        }, n.to = function(r2, e2) {
          return i(r2, e2, this, true);
        }, n.from = function(r2, e2) {
          return i(r2, e2, this);
        };
        var d = function(r2) {
          return r2.$u ? t.utc() : t();
        };
        n.toNow = function(r2) {
          return this.to(d(this), r2);
        }, n.fromNow = function(r2) {
          return this.from(d(this), r2);
        };
      };
    });
  })(relativeTime$2);
  return relativeTime$2.exports;
}
var relativeTimeExports = requireRelativeTime();
const relativeTime = /* @__PURE__ */ getDefaultExportFromCjs(relativeTimeExports);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RelativeTimeDisplay",
  props: {
    time: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    dayjs.extend(relativeTime);
    const props = __props;
    const fromNow = ref();
    function updateFromNow() {
      fromNow.value = props.time ? props.time.fromNow() : "unknown";
    }
    let updateInterval = null;
    onMounted(() => {
      updateFromNow();
      updateInterval = setInterval(updateFromNow, 1e3);
    });
    onUnmounted(() => {
      if (updateInterval) {
        clearInterval(updateInterval);
        updateInterval = null;
      }
    });
    const __returned__ = { props, fromNow, updateFromNow, get updateInterval() {
      return updateInterval;
    }, set updateInterval(v) {
      updateInterval = v;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return toDisplayString($setup.fromNow);
}
const RelativeTimeDisplay = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/components/RelativeTimeDisplay.vue"]]);
export {
  RelativeTimeDisplay as R
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVsYXRpdmVUaW1lRGlzcGxheS1EdlJyZFFuRC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2RheWpzQDEuMTEuMTMvbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWUuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9SZWxhdGl2ZVRpbWVEaXNwbGF5LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24ocixlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToocj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnJ8fHNlbGYpLmRheWpzX3BsdWdpbl9yZWxhdGl2ZVRpbWU9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbihyLGUsdCl7cj1yfHx7fTt2YXIgbj1lLnByb3RvdHlwZSxvPXtmdXR1cmU6XCJpbiAlc1wiLHBhc3Q6XCIlcyBhZ29cIixzOlwiYSBmZXcgc2Vjb25kc1wiLG06XCJhIG1pbnV0ZVwiLG1tOlwiJWQgbWludXRlc1wiLGg6XCJhbiBob3VyXCIsaGg6XCIlZCBob3Vyc1wiLGQ6XCJhIGRheVwiLGRkOlwiJWQgZGF5c1wiLE06XCJhIG1vbnRoXCIsTU06XCIlZCBtb250aHNcIix5OlwiYSB5ZWFyXCIseXk6XCIlZCB5ZWFyc1wifTtmdW5jdGlvbiBpKHIsZSx0LG8pe3JldHVybiBuLmZyb21Ub0Jhc2UocixlLHQsbyl9dC5lbi5yZWxhdGl2ZVRpbWU9byxuLmZyb21Ub0Jhc2U9ZnVuY3Rpb24oZSxuLGksZCx1KXtmb3IodmFyIGYsYSxzLGw9aS4kbG9jYWxlKCkucmVsYXRpdmVUaW1lfHxvLGg9ci50aHJlc2hvbGRzfHxbe2w6XCJzXCIscjo0NCxkOlwic2Vjb25kXCJ9LHtsOlwibVwiLHI6ODl9LHtsOlwibW1cIixyOjQ0LGQ6XCJtaW51dGVcIn0se2w6XCJoXCIscjo4OX0se2w6XCJoaFwiLHI6MjEsZDpcImhvdXJcIn0se2w6XCJkXCIscjozNX0se2w6XCJkZFwiLHI6MjUsZDpcImRheVwifSx7bDpcIk1cIixyOjQ1fSx7bDpcIk1NXCIscjoxMCxkOlwibW9udGhcIn0se2w6XCJ5XCIscjoxN30se2w6XCJ5eVwiLGQ6XCJ5ZWFyXCJ9XSxtPWgubGVuZ3RoLGM9MDtjPG07Yys9MSl7dmFyIHk9aFtjXTt5LmQmJihmPWQ/dChlKS5kaWZmKGkseS5kLCEwKTppLmRpZmYoZSx5LmQsITApKTt2YXIgcD0oci5yb3VuZGluZ3x8TWF0aC5yb3VuZCkoTWF0aC5hYnMoZikpO2lmKHM9Zj4wLHA8PXkucnx8IXkucil7cDw9MSYmYz4wJiYoeT1oW2MtMV0pO3ZhciB2PWxbeS5sXTt1JiYocD11KFwiXCIrcCkpLGE9XCJzdHJpbmdcIj09dHlwZW9mIHY/di5yZXBsYWNlKFwiJWRcIixwKTp2KHAsbix5Lmwscyk7YnJlYWt9fWlmKG4pcmV0dXJuIGE7dmFyIE09cz9sLmZ1dHVyZTpsLnBhc3Q7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgTT9NKGEpOk0ucmVwbGFjZShcIiVzXCIsYSl9LG4udG89ZnVuY3Rpb24ocixlKXtyZXR1cm4gaShyLGUsdGhpcywhMCl9LG4uZnJvbT1mdW5jdGlvbihyLGUpe3JldHVybiBpKHIsZSx0aGlzKX07dmFyIGQ9ZnVuY3Rpb24ocil7cmV0dXJuIHIuJHU/dC51dGMoKTp0KCl9O24udG9Ob3c9ZnVuY3Rpb24ocil7cmV0dXJuIHRoaXMudG8oZCh0aGlzKSxyKX0sbi5mcm9tTm93PWZ1bmN0aW9uKHIpe3JldHVybiB0aGlzLmZyb20oZCh0aGlzKSxyKX19fSkpOyIsIjx0ZW1wbGF0ZT5cbiAge3sgZnJvbU5vdyB9fVxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IG9uVW5tb3VudGVkLCBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5cbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgcmVsYXRpdmVUaW1lIGZyb20gJ2RheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWUnO1xuZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZSk7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8eyB0aW1lOiBkYXlqcy5EYXlqcyB8IG51bGwgfCB1bmRlZmluZWQgfT4oKTtcbmNvbnN0IGZyb21Ob3cgPSByZWYoKTtcblxuZnVuY3Rpb24gdXBkYXRlRnJvbU5vdygpIHtcbiAgZnJvbU5vdy52YWx1ZSA9IHByb3BzLnRpbWUgPyBwcm9wcy50aW1lLmZyb21Ob3coKSA6ICd1bmtub3duJztcbn1cblxubGV0IHVwZGF0ZUludGVydmFsOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCBudWxsID0gbnVsbDtcbm9uTW91bnRlZCgoKSA9PiB7XG4gIHVwZGF0ZUZyb21Ob3coKTtcbiAgdXBkYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVGcm9tTm93LCAxMDAwKTtcbn0pO1xuXG5vblVubW91bnRlZCgoKSA9PiB7XG4gIGlmICh1cGRhdGVJbnRlcnZhbCkge1xuICAgIGNsZWFySW50ZXJ2YWwodXBkYXRlSW50ZXJ2YWwpO1xuICAgIHVwZGF0ZUludGVydmFsID0gbnVsbDtcbiAgfVxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJ0aGlzIiwiciIsImUiLCJ0IiwibyIsIm4iLCJpIiwiZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxLQUFDLFNBQVMsR0FBRSxHQUFFO0FBQXNELGFBQWUsVUFBQSxFQUF1STtBQUFBLElBQUEsRUFBRUEsZ0JBQU0sV0FBVTtBQUFjLGFBQU8sU0FBUyxHQUFFLEdBQUUsR0FBRTtBQUFDLFlBQUUsS0FBRyxDQUFFO0FBQUMsWUFBSSxJQUFFLEVBQUUsV0FBVSxJQUFFLEVBQUMsUUFBTyxTQUFRLE1B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
