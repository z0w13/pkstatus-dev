import { c as createComponent, aL as useTransitionProps, aM as nonRoundBtnProps, g as getCurrentInstance, r as ref, aN as useId, a as computed, aO as getBtnDesignAttr, w as watch, t as onMounted, h, a1 as QIcon, b as hSlot, Z as QBtn, aP as stop } from "./index-Czhz81pV.js";
import { Q as QBtnGroup } from "./QBtnGroup-DSLUZYCx.js";
import { Q as QMenu } from "./QMenu-BKVuNWhU.js";
const btnPropsList = Object.keys(nonRoundBtnProps);
function passBtnProps(props) {
  return btnPropsList.reduce((acc, key) => {
    const val = props[key];
    if (val !== void 0) {
      acc[key] = val;
    }
    return acc;
  }, {});
}
const QBtnDropdown = createComponent({
  name: "QBtnDropdown",
  props: {
    ...nonRoundBtnProps,
    ...useTransitionProps,
    modelValue: Boolean,
    split: Boolean,
    dropdownIcon: String,
    contentClass: [Array, String, Object],
    contentStyle: [Array, String, Object],
    cover: Boolean,
    persistent: Boolean,
    noEscDismiss: Boolean,
    noRouteDismiss: Boolean,
    autoClose: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    menuAnchor: {
      type: String,
      default: "bottom end"
    },
    menuSelf: {
      type: String,
      default: "top end"
    },
    menuOffset: Array,
    disableMainBtn: Boolean,
    disableDropdown: Boolean,
    noIconAnimation: Boolean,
    toggleAriaLabel: String
  },
  emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const showing = ref(props.modelValue);
    const menuRef = ref(null);
    const targetUid = useId();
    const ariaAttrs = computed(() => {
      const acc = {
        "aria-expanded": showing.value === true ? "true" : "false",
        "aria-haspopup": "true",
        "aria-controls": targetUid.value,
        "aria-label": props.toggleAriaLabel || proxy.$q.lang.label[showing.value === true ? "collapse" : "expand"](props.label)
      };
      if (props.disable === true || (props.split === false && props.disableMainBtn === true || props.disableDropdown === true)) {
        acc["aria-disabled"] = "true";
      }
      return acc;
    });
    const iconClass = computed(
      () => "q-btn-dropdown__arrow" + (showing.value === true && props.noIconAnimation === false ? " rotate-180" : "") + (props.split === false ? " q-btn-dropdown__arrow-container" : "")
    );
    const btnDesignAttr = computed(() => getBtnDesignAttr(props));
    const btnProps = computed(() => passBtnProps(props));
    watch(() => props.modelValue, (val) => {
      var _a;
      (_a = menuRef.value) == null ? void 0 : _a[val ? "show" : "hide"]();
    });
    watch(() => props.split, hide);
    function onBeforeShow(e) {
      showing.value = true;
      emit("beforeShow", e);
    }
    function onShow(e) {
      emit("show", e);
      emit("update:modelValue", true);
    }
    function onBeforeHide(e) {
      showing.value = false;
      emit("beforeHide", e);
    }
    function onHide(e) {
      emit("hide", e);
      emit("update:modelValue", false);
    }
    function onClick(e) {
      emit("click", e);
    }
    function onClickHide(e) {
      stop(e);
      hide();
      emit("click", e);
    }
    function toggle(evt) {
      var _a;
      (_a = menuRef.value) == null ? void 0 : _a.toggle(evt);
    }
    function show(evt) {
      var _a;
      (_a = menuRef.value) == null ? void 0 : _a.show(evt);
    }
    function hide(evt) {
      var _a;
      (_a = menuRef.value) == null ? void 0 : _a.hide(evt);
    }
    Object.assign(proxy, {
      show,
      hide,
      toggle
    });
    onMounted(() => {
      props.modelValue === true && show();
    });
    return () => {
      const Arrow = [
        h(QIcon, {
          class: iconClass.value,
          name: props.dropdownIcon || proxy.$q.iconSet.arrow.dropdown
        })
      ];
      props.disableDropdown !== true && Arrow.push(
        h(QMenu, {
          ref: menuRef,
          id: targetUid.value,
          class: props.contentClass,
          style: props.contentStyle,
          cover: props.cover,
          fit: true,
          persistent: props.persistent,
          noEscDismiss: props.noEscDismiss,
          noRouteDismiss: props.noRouteDismiss,
          autoClose: props.autoClose,
          noFocus: props.noFocus,
          noRefocus: props.noRefocus,
          anchor: props.menuAnchor,
          self: props.menuSelf,
          offset: props.menuOffset,
          separateClosePopup: true,
          transitionShow: props.transitionShow,
          transitionHide: props.transitionHide,
          transitionDuration: props.transitionDuration,
          onBeforeShow,
          onShow,
          onBeforeHide,
          onHide
        }, slots.default)
      );
      if (props.split === false) {
        return h(QBtn, {
          class: "q-btn-dropdown q-btn-dropdown--simple",
          ...btnProps.value,
          ...ariaAttrs.value,
          disable: props.disable === true || props.disableMainBtn === true,
          noWrap: true,
          round: false,
          onClick
        }, {
          default: () => hSlot(slots.label, []).concat(Arrow),
          loading: slots.loading
        });
      }
      return h(QBtnGroup, {
        class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",
        rounded: props.rounded,
        square: props.square,
        ...btnDesignAttr.value,
        glossy: props.glossy,
        stretch: props.stretch
      }, () => [
        h(QBtn, {
          class: "q-btn-dropdown--current",
          ...btnProps.value,
          disable: props.disable === true || props.disableMainBtn === true,
          noWrap: true,
          round: false,
          onClick: onClickHide
        }, {
          default: slots.label,
          loading: slots.loading
        }),
        h(QBtn, {
          class: "q-btn-dropdown__arrow-container q-anchor--skip",
          ...ariaAttrs.value,
          ...btnDesignAttr.value,
          disable: props.disable === true || props.disableDropdown === true,
          rounded: props.rounded,
          color: props.color,
          textColor: props.textColor,
          dense: props.dense,
          size: props.size,
          padding: props.padding,
          ripple: props.ripple
        }, () => Arrow)
      ]);
    };
  }
});
export {
  QBtnDropdown as Q
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUJ0bkRyb3Bkb3duLVE1cnhROEl4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcXVhc2FyQDIuMTguMi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2J0bi1kcm9wZG93bi9RQnRuRHJvcGRvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uTW91bnRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcbmltcG9ydCBRQnRuIGZyb20gJy4uL2J0bi9RQnRuLmpzJ1xuaW1wb3J0IFFCdG5Hcm91cCBmcm9tICcuLi9idG4tZ3JvdXAvUUJ0bkdyb3VwLmpzJ1xuaW1wb3J0IFFNZW51IGZyb20gJy4uL21lbnUvUU1lbnUuanMnXG5cbmltcG9ydCB7IGdldEJ0bkRlc2lnbkF0dHIsIG5vblJvdW5kQnRuUHJvcHMgfSBmcm9tICcuLi9idG4vdXNlLWJ0bi5qcydcbmltcG9ydCB1c2VJZCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtaWQvdXNlLWlkLmpzJ1xuaW1wb3J0IHsgdXNlVHJhbnNpdGlvblByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtdHJhbnNpdGlvbi91c2UtdHJhbnNpdGlvbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgc3RvcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50L2V2ZW50LmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmNvbnN0IGJ0blByb3BzTGlzdCA9IE9iamVjdC5rZXlzKG5vblJvdW5kQnRuUHJvcHMpXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXNzQnRuUHJvcHMgKHByb3BzKSB7XG4gIHJldHVybiBidG5Qcm9wc0xpc3QucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGNvbnN0IHZhbCA9IHByb3BzWyBrZXkgXVxuICAgIGlmICh2YWwgIT09IHZvaWQgMCkge1xuICAgICAgYWNjWyBrZXkgXSA9IHZhbFxuICAgIH1cbiAgICByZXR1cm4gYWNjXG4gIH0sIHt9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUJ0bkRyb3Bkb3duJyxcblxuICBwcm9wczoge1xuICAgIC4uLm5vblJvdW5kQnRuUHJvcHMsXG4gICAgLi4udXNlVHJhbnNpdGlvblByb3BzLFxuXG4gICAgbW9kZWxWYWx1ZTogQm9vbGVhbixcbiAgICBzcGxpdDogQm9vbGVhbixcbiAgICBkcm9wZG93bkljb246IFN0cmluZyxcblxuICAgIGNvbnRlbnRDbGFzczogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBjb250ZW50U3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG5cbiAgICBjb3ZlcjogQm9vbGVhbixcbiAgICBwZXJzaXN0ZW50OiBCb29sZWFuLFxuICAgIG5vRXNjRGlzbWlzczogQm9vbGVhbixcbiAgICBub1JvdXRlRGlzbWlzczogQm9vbGVhbixcbiAgICBhdXRvQ2xvc2U6IEJvb2xlYW4sXG4gICAgbm9SZWZvY3VzOiBCb29sZWFuLFxuICAgIG5vRm9jdXM6IEJvb2xlYW4sXG5cbiAgICBtZW51QW5jaG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnYm90dG9tIGVuZCdcbiAgICB9LFxuICAgIG1lbnVTZWxmOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndG9wIGVuZCdcbiAgICB9LFxuICAgIG1lbnVPZmZzZXQ6IEFycmF5LFxuXG4gICAgZGlzYWJsZU1haW5CdG46IEJvb2xlYW4sXG4gICAgZGlzYWJsZURyb3Bkb3duOiBCb29sZWFuLFxuXG4gICAgbm9JY29uQW5pbWF0aW9uOiBCb29sZWFuLFxuXG4gICAgdG9nZ2xlQXJpYUxhYmVsOiBTdHJpbmdcbiAgfSxcblxuICBlbWl0czogWyAndXBkYXRlOm1vZGVsVmFsdWUnLCAnY2xpY2snLCAnYmVmb3JlU2hvdycsICdzaG93JywgJ2JlZm9yZUhpZGUnLCAnaGlkZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCBzaG93aW5nID0gcmVmKHByb3BzLm1vZGVsVmFsdWUpXG4gICAgY29uc3QgbWVudVJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IHRhcmdldFVpZCA9IHVzZUlkKClcblxuICAgIGNvbnN0IGFyaWFBdHRycyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBzaG93aW5nLnZhbHVlID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZScsXG4gICAgICAgICdhcmlhLWNvbnRyb2xzJzogdGFyZ2V0VWlkLnZhbHVlLFxuICAgICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLnRvZ2dsZUFyaWFMYWJlbCB8fCBwcm94eS4kcS5sYW5nLmxhYmVsWyBzaG93aW5nLnZhbHVlID09PSB0cnVlID8gJ2NvbGxhcHNlJyA6ICdleHBhbmQnIF0ocHJvcHMubGFiZWwpXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZVxuICAgICAgICB8fCAoXG4gICAgICAgICAgKHByb3BzLnNwbGl0ID09PSBmYWxzZSAmJiBwcm9wcy5kaXNhYmxlTWFpbkJ0biA9PT0gdHJ1ZSlcbiAgICAgICAgICB8fCBwcm9wcy5kaXNhYmxlRHJvcGRvd24gPT09IHRydWVcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGFjY1sgJ2FyaWEtZGlzYWJsZWQnIF0gPSAndHJ1ZSdcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0pXG5cbiAgICBjb25zdCBpY29uQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtYnRuLWRyb3Bkb3duX19hcnJvdydcbiAgICAgICsgKHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgcHJvcHMubm9JY29uQW5pbWF0aW9uID09PSBmYWxzZSA/ICcgcm90YXRlLTE4MCcgOiAnJylcbiAgICAgICsgKHByb3BzLnNwbGl0ID09PSBmYWxzZSA/ICcgcS1idG4tZHJvcGRvd25fX2Fycm93LWNvbnRhaW5lcicgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBidG5EZXNpZ25BdHRyID0gY29tcHV0ZWQoKCkgPT4gZ2V0QnRuRGVzaWduQXR0cihwcm9wcykpXG4gICAgY29uc3QgYnRuUHJvcHMgPSBjb21wdXRlZCgoKSA9PiBwYXNzQnRuUHJvcHMocHJvcHMpKVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSwgdmFsID0+IHtcbiAgICAgIG1lbnVSZWYudmFsdWU/LlsgdmFsID8gJ3Nob3cnIDogJ2hpZGUnIF0oKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zcGxpdCwgaGlkZSlcblxuICAgIGZ1bmN0aW9uIG9uQmVmb3JlU2hvdyAoZSkge1xuICAgICAgc2hvd2luZy52YWx1ZSA9IHRydWVcbiAgICAgIGVtaXQoJ2JlZm9yZVNob3cnLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU2hvdyAoZSkge1xuICAgICAgZW1pdCgnc2hvdycsIGUpXG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHRydWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25CZWZvcmVIaWRlIChlKSB7XG4gICAgICBzaG93aW5nLnZhbHVlID0gZmFsc2VcbiAgICAgIGVtaXQoJ2JlZm9yZUhpZGUnLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uSGlkZSAoZSkge1xuICAgICAgZW1pdCgnaGlkZScsIGUpXG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIGZhbHNlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2xpY2sgKGUpIHtcbiAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNsaWNrSGlkZSAoZSkge1xuICAgICAgc3RvcChlKVxuICAgICAgaGlkZSgpXG4gICAgICBlbWl0KCdjbGljaycsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlIChldnQpIHtcbiAgICAgIG1lbnVSZWYudmFsdWU/LnRvZ2dsZShldnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvdyAoZXZ0KSB7XG4gICAgICBtZW51UmVmLnZhbHVlPy5zaG93KGV2dClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlIChldnQpIHtcbiAgICAgIG1lbnVSZWYudmFsdWU/LmhpZGUoZXZ0KVxuICAgIH1cblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIHNob3csIGhpZGUsIHRvZ2dsZVxuICAgIH0pXG5cbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBzaG93KClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IEFycm93ID0gW1xuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6IGljb25DbGFzcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiBwcm9wcy5kcm9wZG93bkljb24gfHwgcHJveHkuJHEuaWNvblNldC5hcnJvdy5kcm9wZG93blxuICAgICAgICB9KVxuICAgICAgXVxuXG4gICAgICBwcm9wcy5kaXNhYmxlRHJvcGRvd24gIT09IHRydWUgJiYgQXJyb3cucHVzaChcbiAgICAgICAgaChRTWVudSwge1xuICAgICAgICAgIHJlZjogbWVudVJlZixcbiAgICAgICAgICBpZDogdGFyZ2V0VWlkLnZhbHVlLFxuICAgICAgICAgIGNsYXNzOiBwcm9wcy5jb250ZW50Q2xhc3MsXG4gICAgICAgICAgc3R5bGU6IHByb3BzLmNvbnRlbnRTdHlsZSxcbiAgICAgICAgICBjb3ZlcjogcHJvcHMuY292ZXIsXG4gICAgICAgICAgZml0OiB0cnVlLFxuICAgICAgICAgIHBlcnNpc3RlbnQ6IHByb3BzLnBlcnNpc3RlbnQsXG4gICAgICAgICAgbm9Fc2NEaXNtaXNzOiBwcm9wcy5ub0VzY0Rpc21pc3MsXG4gICAgICAgICAgbm9Sb3V0ZURpc21pc3M6IHByb3BzLm5vUm91dGVEaXNtaXNzLFxuICAgICAgICAgIGF1dG9DbG9zZTogcHJvcHMuYXV0b0Nsb3NlLFxuICAgICAgICAgIG5vRm9jdXM6IHByb3BzLm5vRm9jdXMsXG4gICAgICAgICAgbm9SZWZvY3VzOiBwcm9wcy5ub1JlZm9jdXMsXG4gICAgICAgICAgYW5jaG9yOiBwcm9wcy5tZW51QW5jaG9yLFxuICAgICAgICAgIHNlbGY6IHByb3BzLm1lbnVTZWxmLFxuICAgICAgICAgIG9mZnNldDogcHJvcHMubWVudU9mZnNldCxcbiAgICAgICAgICBzZXBhcmF0ZUNsb3NlUG9wdXA6IHRydWUsXG4gICAgICAgICAgdHJhbnNpdGlvblNob3c6IHByb3BzLnRyYW5zaXRpb25TaG93LFxuICAgICAgICAgIHRyYW5zaXRpb25IaWRlOiBwcm9wcy50cmFuc2l0aW9uSGlkZSxcbiAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgICBvbkJlZm9yZVNob3csXG4gICAgICAgICAgb25TaG93LFxuICAgICAgICAgIG9uQmVmb3JlSGlkZSxcbiAgICAgICAgICBvbkhpZGVcbiAgICAgICAgfSwgc2xvdHMuZGVmYXVsdClcbiAgICAgIClcblxuICAgICAgaWYgKHByb3BzLnNwbGl0ID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gaChRQnRuLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWJ0bi1kcm9wZG93biBxLWJ0bi1kcm9wZG93bi0tc2ltcGxlJyxcbiAgICAgICAgICAuLi5idG5Qcm9wcy52YWx1ZSxcbiAgICAgICAgICAuLi5hcmlhQXR0cnMudmFsdWUsXG4gICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBwcm9wcy5kaXNhYmxlTWFpbkJ0biA9PT0gdHJ1ZSxcbiAgICAgICAgICBub1dyYXA6IHRydWUsXG4gICAgICAgICAgcm91bmQ6IGZhbHNlLFxuICAgICAgICAgIG9uQ2xpY2tcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IGhTbG90KHNsb3RzLmxhYmVsLCBbXSkuY29uY2F0KEFycm93KSxcbiAgICAgICAgICBsb2FkaW5nOiBzbG90cy5sb2FkaW5nXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKFFCdG5Hcm91cCwge1xuICAgICAgICBjbGFzczogJ3EtYnRuLWRyb3Bkb3duIHEtYnRuLWRyb3Bkb3duLS1zcGxpdCBuby13cmFwIHEtYnRuLWl0ZW0nLFxuICAgICAgICByb3VuZGVkOiBwcm9wcy5yb3VuZGVkLFxuICAgICAgICBzcXVhcmU6IHByb3BzLnNxdWFyZSxcbiAgICAgICAgLi4uYnRuRGVzaWduQXR0ci52YWx1ZSxcbiAgICAgICAgZ2xvc3N5OiBwcm9wcy5nbG9zc3ksXG4gICAgICAgIHN0cmV0Y2g6IHByb3BzLnN0cmV0Y2hcbiAgICAgIH0sICgpID0+IFtcbiAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWJ0bi1kcm9wZG93bi0tY3VycmVudCcsXG4gICAgICAgICAgLi4uYnRuUHJvcHMudmFsdWUsXG4gICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBwcm9wcy5kaXNhYmxlTWFpbkJ0biA9PT0gdHJ1ZSxcbiAgICAgICAgICBub1dyYXA6IHRydWUsXG4gICAgICAgICAgcm91bmQ6IGZhbHNlLFxuICAgICAgICAgIG9uQ2xpY2s6IG9uQ2xpY2tIaWRlXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkZWZhdWx0OiBzbG90cy5sYWJlbCxcbiAgICAgICAgICBsb2FkaW5nOiBzbG90cy5sb2FkaW5nXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgIGNsYXNzOiAncS1idG4tZHJvcGRvd25fX2Fycm93LWNvbnRhaW5lciBxLWFuY2hvci0tc2tpcCcsXG4gICAgICAgICAgLi4uYXJpYUF0dHJzLnZhbHVlLFxuICAgICAgICAgIC4uLmJ0bkRlc2lnbkF0dHIudmFsdWUsXG4gICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBwcm9wcy5kaXNhYmxlRHJvcGRvd24gPT09IHRydWUsXG4gICAgICAgICAgcm91bmRlZDogcHJvcHMucm91bmRlZCxcbiAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgdGV4dENvbG9yOiBwcm9wcy50ZXh0Q29sb3IsXG4gICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgIHNpemU6IHByb3BzLnNpemUsXG4gICAgICAgICAgcGFkZGluZzogcHJvcHMucGFkZGluZyxcbiAgICAgICAgICByaXBwbGU6IHByb3BzLnJpcHBsZVxuICAgICAgICB9LCAoKSA9PiBBcnJvdylcbiAgICAgIF0pXG4gICAgfVxuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQWVBLE1BQU0sZUFBZSxPQUFPLEtBQUssZ0JBQWdCO0FBRTFDLFNBQVMsYUFBYyxPQUFPO0FBQ25DLFNBQU8sYUFBYSxPQUFPLENBQUMsS0FBSyxRQUFRO0FBQ3ZDLFVBQU0sTUFBTSxNQUFPLEdBQUc7QUFDdEIsUUFBSSxRQUFRLFFBQVE7QUFDbEIsVUFBSyxHQUFHLElBQUs7QUFBQSxJQUNuQjtBQUNJLFdBQU87QUFBQSxFQUNYLEdBQUssQ0FBRSxDQUFBO0FBQ1A7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QUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0QsR0FBRSxNQUFNLE9BQU87QUFBQSxNQUN4QjtBQUVNLFVBQUksTUFBTSxVQUFVLE9BQU87QUFDekIsZUFBTyxFQUFFLE1BQU07QUFBQSxVQUNiLE9BQU87QUFBQSxVQUNQLEdBQUcsU0FBUztBQUFBLFVBQ1osR0FBRyxVQUFVO0FBQUEsVUFDYixTQUFTLE1BQU0sWUFBWSxRQUFRLE1BQU0sbUJBQW1CO0FBQUEsVUFDNUQsUUFBUTtBQUFBLFVBQ1IsT0FBTztBQUFBLFVBQ1A7QUFBQSxRQUNWLEdBQVc7QUFBQSxVQUNELFNBQVMsTUFBTSxNQUFNLE1BQU0sT0FBTyxFQUFFLEVBQUUsT0FBTyxLQUFLO0FBQUEsVUFDbEQsU0FBUyxNQUFNO0FBQUEsUUFDaEIsQ0FBQTtBQUFBLE1BQ1Q7QUFFTSxhQUFPLEVBQUUsV0FBVztBQUFBLFFBQ2xCLE9BQU87QUFBQSxRQUNQLFNBQVMsTUFBTTtBQUFBLFFBQ2YsUUFBUSxNQUFNO0FBQUEsUUFDZCxHQUFHLGNBQWM7QUFBQSxRQUNqQixRQUFRLE1BQU07QUFBQSxRQUNkLFNBQVMsTUFBTTtBQUFBLE1BQ3ZCLEdBQVMsTUFBTTtBQUFBLFFBQ1AsRUFBRSxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxHQUFHLFNBQVM7QUFBQSxVQUNaLFNBQVMsTUFBTSxZQUFZLFFBQVEsTUFBTSxtQkFBbUI7QUFBQSxVQUM1RCxRQUFRO0FBQUEsVUFDUixPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDbkIsR0FBVztBQUFBLFVBQ0QsU0FBUyxNQUFNO0FBQUEsVUFDZixTQUFTLE1BQU07QUFBQSxRQUN6QixDQUFTO0FBQUEsUUFFRCxFQUFFLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxVQUNQLEdBQUcsVUFBVTtBQUFBLFVBQ2IsR0FBRyxjQUFjO0FBQUEsVUFDakIsU0FBUyxNQUFNLFlBQVksUUFBUSxNQUFNLG9CQUFvQjtBQUFBLFVBQzdELFNBQVMsTUFBTTtBQUFBLFVBQ2YsT0FBTyxNQUFNO0FBQUEsVUFDYixXQUFXLE1BQU07QUFBQSxVQUNqQixPQUFPLE1BQU07QUFBQSxVQUNiLE1BQU0sTUFBTTtBQUFBLFVBQ1osU0FBUyxNQUFNO0FBQUEsVUFDZixRQUFRLE1BQU07QUFBQSxRQUNmLEdBQUUsTUFBTSxLQUFLO0FBQUEsTUFDZixDQUFBO0FBQUEsSUFDUDtBQUFBLEVBQ0E7QUFDQSxDQUFDOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
