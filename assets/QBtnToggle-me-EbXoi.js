import { c as createComponent, at as useFormProps, d as computed, aA as getBtnDesignAttr, h, a0 as QBtn, L as hMergeSlot, av as useFormInject } from "./index-C1u-_TOv.js";
import { Q as QBtnGroup } from "./QBtnGroup-CFYXjxkf.js";
const QBtnToggle = createComponent({
  name: "QBtnToggle",
  props: {
    ...useFormProps,
    modelValue: {
      required: true
    },
    options: {
      type: Array,
      required: true,
      validator: (v) => v.every(
        (opt) => ("label" in opt || "icon" in opt || "slot" in opt) && "value" in opt
      )
    },
    // To avoid seeing the active raise shadow through
    // the transparent button, give it a color (even white)
    color: String,
    textColor: String,
    toggleColor: {
      type: String,
      default: "primary"
    },
    toggleTextColor: String,
    outline: Boolean,
    flat: Boolean,
    unelevated: Boolean,
    rounded: Boolean,
    push: Boolean,
    glossy: Boolean,
    size: String,
    padding: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    readonly: Boolean,
    disable: Boolean,
    stack: Boolean,
    stretch: Boolean,
    spread: Boolean,
    clearable: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  emits: ["update:modelValue", "clear", "click"],
  setup(props, { slots, emit }) {
    const hasActiveValue = computed(
      () => props.options.find((opt) => opt.value === props.modelValue) !== void 0
    );
    const formAttrs = computed(() => ({
      type: "hidden",
      name: props.name,
      value: props.modelValue
    }));
    const injectFormInput = useFormInject(formAttrs);
    const btnDesignAttr = computed(() => getBtnDesignAttr(props));
    const btnOptionDesign = computed(() => ({
      rounded: props.rounded,
      dense: props.dense,
      ...btnDesignAttr.value
    }));
    const btnOptions = computed(() => props.options.map((item, i) => {
      const { attrs, value, slot, ...opt } = item;
      return {
        slot,
        props: {
          key: i,
          "aria-pressed": value === props.modelValue ? "true" : "false",
          ...attrs,
          ...opt,
          ...btnOptionDesign.value,
          disable: props.disable === true || opt.disable === true,
          // Options that come from the button specific options first, then from general props
          color: value === props.modelValue ? mergeOpt(opt, "toggleColor") : mergeOpt(opt, "color"),
          textColor: value === props.modelValue ? mergeOpt(opt, "toggleTextColor") : mergeOpt(opt, "textColor"),
          noCaps: mergeOpt(opt, "noCaps") === true,
          noWrap: mergeOpt(opt, "noWrap") === true,
          size: mergeOpt(opt, "size"),
          padding: mergeOpt(opt, "padding"),
          ripple: mergeOpt(opt, "ripple"),
          stack: mergeOpt(opt, "stack") === true,
          stretch: mergeOpt(opt, "stretch") === true,
          onClick(e) {
            set(value, item, e);
          }
        }
      };
    }));
    function set(value, opt, e) {
      if (props.readonly !== true) {
        if (props.modelValue === value) {
          if (props.clearable === true) {
            emit("update:modelValue", null, null);
            emit("clear");
          }
        } else {
          emit("update:modelValue", value, opt);
        }
        emit("click", e);
      }
    }
    function mergeOpt(opt, key) {
      return opt[key] === void 0 ? props[key] : opt[key];
    }
    function getContent() {
      const child = btnOptions.value.map((opt) => {
        return h(QBtn, opt.props, opt.slot !== void 0 ? slots[opt.slot] : void 0);
      });
      if (props.name !== void 0 && props.disable !== true && hasActiveValue.value === true) {
        injectFormInput(child, "push");
      }
      return hMergeSlot(slots.default, child);
    }
    return () => h(QBtnGroup, {
      class: "q-btn-toggle",
      ...btnDesignAttr.value,
      rounded: props.rounded,
      stretch: props.stretch,
      glossy: props.glossy,
      spread: props.spread
    }, getContent);
  }
});
export {
  QBtnToggle as Q
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUJ0blRvZ2dsZS1tZS1FYlhvaS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjIvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9idG4tdG9nZ2xlL1FCdG5Ub2dnbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRQnRuIGZyb20gJy4uL2J0bi9RQnRuLmpzJ1xuaW1wb3J0IFFCdG5Hcm91cCBmcm9tICcuLi9idG4tZ3JvdXAvUUJ0bkdyb3VwLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IHVzZUZvcm1JbmplY3QsIHVzZUZvcm1Qcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZvcm0uanMnXG5cbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGdldEJ0bkRlc2lnbkF0dHIgfSBmcm9tICcuLi9idG4vdXNlLWJ0bi5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FCdG5Ub2dnbGUnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRm9ybVByb3BzLFxuXG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuXG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiB2LmV2ZXJ5KFxuICAgICAgICBvcHQgPT4gKCdsYWJlbCcgaW4gb3B0IHx8ICdpY29uJyBpbiBvcHQgfHwgJ3Nsb3QnIGluIG9wdCkgJiYgJ3ZhbHVlJyBpbiBvcHRcbiAgICAgIClcbiAgICB9LFxuXG4gICAgLy8gVG8gYXZvaWQgc2VlaW5nIHRoZSBhY3RpdmUgcmFpc2Ugc2hhZG93IHRocm91Z2hcbiAgICAvLyB0aGUgdHJhbnNwYXJlbnQgYnV0dG9uLCBnaXZlIGl0IGEgY29sb3IgKGV2ZW4gd2hpdGUpXG4gICAgY29sb3I6IFN0cmluZyxcbiAgICB0ZXh0Q29sb3I6IFN0cmluZyxcbiAgICB0b2dnbGVDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnknXG4gICAgfSxcbiAgICB0b2dnbGVUZXh0Q29sb3I6IFN0cmluZyxcblxuICAgIG91dGxpbmU6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICB1bmVsZXZhdGVkOiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG4gICAgcHVzaDogQm9vbGVhbixcbiAgICBnbG9zc3k6IEJvb2xlYW4sXG5cbiAgICBzaXplOiBTdHJpbmcsXG4gICAgcGFkZGluZzogU3RyaW5nLFxuXG4gICAgbm9DYXBzOiBCb29sZWFuLFxuICAgIG5vV3JhcDogQm9vbGVhbixcbiAgICBkZW5zZTogQm9vbGVhbixcbiAgICByZWFkb25seTogQm9vbGVhbixcbiAgICBkaXNhYmxlOiBCb29sZWFuLFxuXG4gICAgc3RhY2s6IEJvb2xlYW4sXG4gICAgc3RyZXRjaDogQm9vbGVhbixcblxuICAgIHNwcmVhZDogQm9vbGVhbixcblxuICAgIGNsZWFyYWJsZTogQm9vbGVhbixcblxuICAgIHJpcHBsZToge1xuICAgICAgdHlwZTogWyBCb29sZWFuLCBPYmplY3QgXSxcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3VwZGF0ZTptb2RlbFZhbHVlJywgJ2NsZWFyJywgJ2NsaWNrJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgaGFzQWN0aXZlVmFsdWUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMub3B0aW9ucy5maW5kKG9wdCA9PiBvcHQudmFsdWUgPT09IHByb3BzLm1vZGVsVmFsdWUpICE9PSB2b2lkIDBcbiAgICApXG5cbiAgICBjb25zdCBmb3JtQXR0cnMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgdmFsdWU6IHByb3BzLm1vZGVsVmFsdWVcbiAgICB9KSlcblxuICAgIGNvbnN0IGluamVjdEZvcm1JbnB1dCA9IHVzZUZvcm1JbmplY3QoZm9ybUF0dHJzKVxuXG4gICAgY29uc3QgYnRuRGVzaWduQXR0ciA9IGNvbXB1dGVkKCgpID0+IGdldEJ0bkRlc2lnbkF0dHIocHJvcHMpKVxuXG4gICAgY29uc3QgYnRuT3B0aW9uRGVzaWduID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHJvdW5kZWQ6IHByb3BzLnJvdW5kZWQsXG4gICAgICBkZW5zZTogcHJvcHMuZGVuc2UsXG4gICAgICAuLi5idG5EZXNpZ25BdHRyLnZhbHVlXG4gICAgfSkpXG5cbiAgICBjb25zdCBidG5PcHRpb25zID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMub3B0aW9ucy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgIGNvbnN0IHsgYXR0cnMsIHZhbHVlLCBzbG90LCAuLi5vcHQgfSA9IGl0ZW1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2xvdCxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBrZXk6IGksXG5cbiAgICAgICAgICAnYXJpYS1wcmVzc2VkJzogdmFsdWUgPT09IHByb3BzLm1vZGVsVmFsdWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIC4uLm9wdCxcbiAgICAgICAgICAuLi5idG5PcHRpb25EZXNpZ24udmFsdWUsXG5cbiAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlID09PSB0cnVlIHx8IG9wdC5kaXNhYmxlID09PSB0cnVlLFxuXG4gICAgICAgICAgLy8gT3B0aW9ucyB0aGF0IGNvbWUgZnJvbSB0aGUgYnV0dG9uIHNwZWNpZmljIG9wdGlvbnMgZmlyc3QsIHRoZW4gZnJvbSBnZW5lcmFsIHByb3BzXG4gICAgICAgICAgY29sb3I6IHZhbHVlID09PSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICAgICAgICA/IG1lcmdlT3B0KG9wdCwgJ3RvZ2dsZUNvbG9yJylcbiAgICAgICAgICAgIDogbWVyZ2VPcHQob3B0LCAnY29sb3InKSxcbiAgICAgICAgICB0ZXh0Q29sb3I6IHZhbHVlID09PSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICAgICAgICA/IG1lcmdlT3B0KG9wdCwgJ3RvZ2dsZVRleHRDb2xvcicpXG4gICAgICAgICAgICA6IG1lcmdlT3B0KG9wdCwgJ3RleHRDb2xvcicpLFxuICAgICAgICAgIG5vQ2FwczogbWVyZ2VPcHQob3B0LCAnbm9DYXBzJykgPT09IHRydWUsXG4gICAgICAgICAgbm9XcmFwOiBtZXJnZU9wdChvcHQsICdub1dyYXAnKSA9PT0gdHJ1ZSxcblxuICAgICAgICAgIHNpemU6IG1lcmdlT3B0KG9wdCwgJ3NpemUnKSxcbiAgICAgICAgICBwYWRkaW5nOiBtZXJnZU9wdChvcHQsICdwYWRkaW5nJyksXG4gICAgICAgICAgcmlwcGxlOiBtZXJnZU9wdChvcHQsICdyaXBwbGUnKSxcbiAgICAgICAgICBzdGFjazogbWVyZ2VPcHQob3B0LCAnc3RhY2snKSA9PT0gdHJ1ZSxcbiAgICAgICAgICBzdHJldGNoOiBtZXJnZU9wdChvcHQsICdzdHJldGNoJykgPT09IHRydWUsXG5cbiAgICAgICAgICBvbkNsaWNrIChlKSB7IHNldCh2YWx1ZSwgaXRlbSwgZSkgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkpXG5cbiAgICBmdW5jdGlvbiBzZXQgKHZhbHVlLCBvcHQsIGUpIHtcbiAgICAgIGlmIChwcm9wcy5yZWFkb25seSAhPT0gdHJ1ZSkge1xuICAgICAgICBpZiAocHJvcHMubW9kZWxWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICBpZiAocHJvcHMuY2xlYXJhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG51bGwsIG51bGwpXG4gICAgICAgICAgICBlbWl0KCdjbGVhcicpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdmFsdWUsIG9wdClcbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZXJnZU9wdCAob3B0LCBrZXkpIHtcbiAgICAgIHJldHVybiBvcHRbIGtleSBdID09PSB2b2lkIDAgPyBwcm9wc1sga2V5IF0gOiBvcHRbIGtleSBdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGJ0bk9wdGlvbnMudmFsdWUubWFwKG9wdCA9PiB7XG4gICAgICAgIHJldHVybiBoKFFCdG4sIG9wdC5wcm9wcywgb3B0LnNsb3QgIT09IHZvaWQgMCA/IHNsb3RzWyBvcHQuc2xvdCBdIDogdm9pZCAwKVxuICAgICAgfSlcblxuICAgICAgaWYgKHByb3BzLm5hbWUgIT09IHZvaWQgMCAmJiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIGhhc0FjdGl2ZVZhbHVlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGluamVjdEZvcm1JbnB1dChjaGlsZCwgJ3B1c2gnKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBjaGlsZClcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gaChRQnRuR3JvdXAsIHtcbiAgICAgIGNsYXNzOiAncS1idG4tdG9nZ2xlJyxcbiAgICAgIC4uLmJ0bkRlc2lnbkF0dHIudmFsdWUsXG4gICAgICByb3VuZGVkOiBwcm9wcy5yb3VuZGVkLFxuICAgICAgc3RyZXRjaDogcHJvcHMuc3RyZXRjaCxcbiAgICAgIGdsb3NzeTogcHJvcHMuZ2xvc3N5LFxuICAgICAgc3ByZWFkOiBwcm9wcy5zcHJlYWRcbiAgICB9LCBnZXRDb250ZW50KVxuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBV0EsTUFBQSxhQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLEdBQUc7QUFBQSxJQUVILFlBQVk7QUFBQSxNQUNWLFVBQVU7QUFBQSxJQUNYO0FBQUEsSUFFRCxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixXQUFXLE9BQUssRUFBRTtBQUFBLFFBQ2hCLFVBQVEsV0FBVyxPQUFPLFVBQVUsT0FBTyxVQUFVLFFBQVEsV0FBVztBQUFBLE1BQ3pFO0FBQUEsSUFDRjtBQUFBO0FBQUE7QUFBQSxJQUlELE9BQU87QUFBQSxJQUNQLFdBQVc7QUFBQSxJQUNYLGFBQWE7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNWO0FBQUEsSUFDRCxpQkFBaUI7QUFBQSxJQUVqQixTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFFUixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFFVCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixTQUFTO0FBQUEsSUFFVCxPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsSUFFVCxRQUFRO0FBQUEsSUFFUixXQUFXO0FBQUEsSUFFWCxRQUFRO0FBQUEsTUFDTixNQUFNLENBQUUsU0FBUyxNQUFRO0FBQUEsTUFDekIsU0FBUztBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFFRCxPQUFPLENBQUUscUJBQXFCLFNBQVMsT0FBUztBQUFBLEVBRWhELE1BQU8sT0FBTyxFQUFFLE9BQU8sS0FBSSxHQUFJO0FBQzdCLFVBQU0saUJBQWlCO0FBQUEsTUFBUyxNQUM5QixNQUFNLFFBQVEsS0FBSyxTQUFPLElBQUksVUFBVSxNQUFNLFVBQVUsTUFBTTtBQUFBLElBQy9EO0FBRUQsVUFBTSxZQUFZLFNBQVMsT0FBTztBQUFBLE1BQ2hDLE1BQU07QUFBQSxNQUNOLE1BQU0sTUFBTTtBQUFBLE1BQ1osT0FBTyxNQUFNO0FBQUEsSUFDbkIsRUFBTTtBQUVGLFVBQU0sa0JBQWtCLGNBQWMsU0FBUztBQUUvQyxVQUFNLGdCQUFnQixTQUFTLE1BQU0saUJBQWlCLEtBQUssQ0FBQztBQUU1RCxVQUFNLGtCQUFrQixTQUFTLE9BQU87QUFBQSxNQUN0QyxTQUFTLE1BQU07QUFBQSxNQUNmLE9BQU8sTUFBTTtBQUFBLE1BQ2IsR0FBRyxjQUFjO0FBQUEsSUFDdkIsRUFBTTtBQUVGLFVBQU0sYUFBYSxTQUFTLE1BQU0sTUFBTSxRQUFRLElBQUksQ0FBQyxNQUFNLE1BQU07QUFDL0QsWUFBTSxFQUFFLE9BQU8sT0FBTyxNQUFNLEdBQUcsSUFBSyxJQUFHO0FBRXZDLGFBQU87QUFBQSxRQUNMO0FBQUEsUUFDQSxPQUFPO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFFTCxnQkFBZ0IsVUFBVSxNQUFNLGFBQWEsU0FBUztBQUFBLFVBQ3RELEdBQUc7QUFBQSxVQUNILEdBQUc7QUFBQSxVQUNILEdBQUcsZ0JBQWdCO0FBQUEsVUFFbkIsU0FBUyxNQUFNLFlBQVksUUFBUSxJQUFJLFlBQVk7QUFBQTtBQUFBLFVBR25ELE9BQU8sVUFBVSxNQUFNLGFBQ25CLFNBQVMsS0FBSyxhQUFhLElBQzNCLFNBQVMsS0FBSyxPQUFPO0FBQUEsVUFDekIsV0FBVyxVQUFVLE1BQU0sYUFDdkIsU0FBUyxLQUFLLGlCQUFpQixJQUMvQixTQUFTLEtBQUssV0FBVztBQUFBLFVBQzdCLFFBQVEsU0FBUyxLQUFLLFFBQVEsTUFBTTtBQUFBLFVBQ3BDLFFBQVEsU0FBUyxLQUFLLFFBQVEsTUFBTTtBQUFBLFVBRXBDLE1BQU0sU0FBUyxLQUFLLE1BQU07QUFBQSxVQUMxQixTQUFTLFNBQVMsS0FBSyxTQUFTO0FBQUEsVUFDaEMsUUFBUSxTQUFTLEtBQUssUUFBUTtBQUFBLFVBQzlCLE9BQU8sU0FBUyxLQUFLLE9BQU8sTUFBTTtBQUFBLFVBQ2xDLFNBQVMsU0FBUyxLQUFLLFNBQVMsTUFBTTtBQUFBLFVBRXRDLFFBQVMsR0FBRztBQUFFLGdCQUFJLE9BQU8sTUFBTSxDQUFDO0FBQUEsVUFBRztBQUFBLFFBQ3BDO0FBQUEsTUFDRjtBQUFBLElBQ1AsQ0FBSyxDQUFDO0FBRUYsYUFBUyxJQUFLLE9BQU8sS0FBSyxHQUFHO0FBQzNCLFVBQUksTUFBTSxhQUFhLE1BQU07QUFDM0IsWUFBSSxNQUFNLGVBQWUsT0FBTztBQUM5QixjQUFJLE1BQU0sY0FBYyxNQUFNO0FBQzVCLGlCQUFLLHFCQUFxQixNQUFNLElBQUk7QUFDcEMsaUJBQUssT0FBTztBQUFBLFVBQ2I7QUFBQSxRQUNGLE9BQ0k7QUFDSCxlQUFLLHFCQUFxQixPQUFPLEdBQUc7QUFBQSxRQUNyQztBQUVELGFBQUssU0FBUyxDQUFDO0FBQUEsTUFDaEI7QUFBQSxJQUNGO0FBRUQsYUFBUyxTQUFVLEtBQUssS0FBSztBQUMzQixhQUFPLElBQUssR0FBRyxNQUFPLFNBQVMsTUFBTyxHQUFHLElBQUssSUFBSyxHQUFLO0FBQUEsSUFDekQ7QUFFRCxhQUFTLGFBQWM7QUFDckIsWUFBTSxRQUFRLFdBQVcsTUFBTSxJQUFJLFNBQU87QUFDeEMsZUFBTyxFQUFFLE1BQU0sSUFBSSxPQUFPLElBQUksU0FBUyxTQUFTLE1BQU8sSUFBSSxJQUFNLElBQUcsTUFBTTtBQUFBLE1BQ2xGLENBQU87QUFFRCxVQUFJLE1BQU0sU0FBUyxVQUFVLE1BQU0sWUFBWSxRQUFRLGVBQWUsVUFBVSxNQUFNO0FBQ3BGLHdCQUFnQixPQUFPLE1BQU07QUFBQSxNQUM5QjtBQUVELGFBQU8sV0FBVyxNQUFNLFNBQVMsS0FBSztBQUFBLElBQ3ZDO0FBRUQsV0FBTyxNQUFNLEVBQUUsV0FBVztBQUFBLE1BQ3hCLE9BQU87QUFBQSxNQUNQLEdBQUcsY0FBYztBQUFBLE1BQ2pCLFNBQVMsTUFBTTtBQUFBLE1BQ2YsU0FBUyxNQUFNO0FBQUEsTUFDZixRQUFRLE1BQU07QUFBQSxNQUNkLFFBQVEsTUFBTTtBQUFBLElBQ2YsR0FBRSxVQUFVO0FBQUEsRUFDZDtBQUNILENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
