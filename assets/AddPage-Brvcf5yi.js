import { c as createComponent, g as getCurrentInstance, r as ref, A as provide, ap as onDeactivated, aq as onActivated, t as onMounted, h, e as hSlot, d7 as vmIsDestroyed, ai as stopAndPrevent, v as nextTick, d8 as addFocusFn, d9 as formKey, Q as defineComponent, S as useQuasar, a_ as useRouter, aD as useSystemStore, aC as useServices, da as debounce, w as watch, V as openBlock, W as createBlock, X as withCtx, aV as APIError, Y as createVNode, ab as QCardSection, aX as QInput, _ as unref, a4 as createCommentVNode, a0 as QBtn, af as _export_sfc } from "./index-C1u-_TOv.js";
import { Q as QPageSticky } from "./QPageSticky-CCDCP62Z.js";
import { Q as QPage } from "./QPage-C2tXGOnV.js";
import { m as matGroups } from "./index-DRTIEHtT.js";
import { L as LabeledTile } from "./LabeledTile-B2Qh0RgH.js";
import { P as PageTitle } from "./PageTitle-gQbGVrI-.js";
const QForm = createComponent({
  name: "QForm",
  props: {
    autofocus: Boolean,
    noErrorFocus: Boolean,
    noResetFocus: Boolean,
    greedy: Boolean,
    onSubmit: Function
  },
  emits: ["reset", "validationSuccess", "validationError"],
  setup(props, { slots, emit }) {
    const vm = getCurrentInstance();
    const rootRef = ref(null);
    let validateIndex = 0;
    const registeredComponents = [];
    function validate(shouldFocus) {
      const focus2 = typeof shouldFocus === "boolean" ? shouldFocus : props.noErrorFocus !== true;
      const index = ++validateIndex;
      const emitEvent = (res, ref2) => {
        emit("validation" + (res === true ? "Success" : "Error"), ref2);
      };
      const validateComponent = (comp) => {
        const valid = comp.validate();
        return typeof valid.then === "function" ? valid.then(
          (valid2) => ({ valid: valid2, comp }),
          (err) => ({ valid: false, comp, err })
        ) : Promise.resolve({ valid, comp });
      };
      const errorsPromise = props.greedy === true ? Promise.all(registeredComponents.map(validateComponent)).then((res) => res.filter((r) => r.valid !== true)) : registeredComponents.reduce(
        (acc, comp) => acc.then(() => {
          return validateComponent(comp).then((r) => {
            if (r.valid === false) {
              return Promise.reject(r);
            }
          });
        }),
        Promise.resolve()
      ).catch((error) => [error]);
      return errorsPromise.then((errors) => {
        if (errors === void 0 || errors.length === 0) {
          index === validateIndex && emitEvent(true);
          return true;
        }
        if (index === validateIndex) {
          const { comp, err } = errors[0];
          err !== void 0 && console.error(err);
          emitEvent(false, comp);
          if (focus2 === true) {
            const activeError = errors.find(({ comp: comp2 }) => typeof comp2.focus === "function" && vmIsDestroyed(comp2.$) === false);
            if (activeError !== void 0) {
              activeError.comp.focus();
            }
          }
        }
        return false;
      });
    }
    function resetValidation() {
      validateIndex++;
      registeredComponents.forEach((comp) => {
        typeof comp.resetValidation === "function" && comp.resetValidation();
      });
    }
    function submit(evt) {
      evt !== void 0 && stopAndPrevent(evt);
      const index = validateIndex + 1;
      validate().then((val) => {
        if (index === validateIndex && val === true) {
          if (props.onSubmit !== void 0) {
            emit("submit", evt);
          } else if (evt !== void 0 && evt.target !== void 0 && typeof evt.target.submit === "function") {
            evt.target.submit();
          }
        }
      });
    }
    function reset(evt) {
      evt !== void 0 && stopAndPrevent(evt);
      emit("reset");
      nextTick(() => {
        resetValidation();
        if (props.autofocus === true && props.noResetFocus !== true) {
          focus();
        }
      });
    }
    function focus() {
      addFocusFn(() => {
        if (rootRef.value === null)
          return;
        const target = rootRef.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || rootRef.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || rootRef.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(rootRef.value.querySelectorAll("[tabindex]"), (el) => el.tabIndex !== -1);
        target !== null && target !== void 0 && target.focus({ preventScroll: true });
      });
    }
    provide(formKey, {
      bindComponent(vmProxy) {
        registeredComponents.push(vmProxy);
      },
      unbindComponent(vmProxy) {
        const index = registeredComponents.indexOf(vmProxy);
        if (index !== -1) {
          registeredComponents.splice(index, 1);
        }
      }
    });
    let shouldActivate = false;
    onDeactivated(() => {
      shouldActivate = true;
    });
    onActivated(() => {
      shouldActivate === true && props.autofocus === true && focus();
    });
    onMounted(() => {
      props.autofocus === true && focus();
    });
    Object.assign(vm.proxy, {
      validate,
      resetValidation,
      submit,
      reset,
      focus,
      getValidationComponents: () => registeredComponents
    });
    return () => h("form", {
      class: "q-form",
      ref: rootRef,
      onSubmit: submit,
      onReset: reset
    }, hSlot(slots.default));
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddPage",
  setup(__props) {
    const $q = useQuasar();
    const router = useRouter();
    const systemStore = useSystemStore();
    const { pluralKit } = useServices();
    const newId = ref("");
    const newSys = ref(null);
    const errorMessage = ref("");
    const isLoading = ref(false);
    function is404(e) {
      return e instanceof APIError && e.status == "404";
    }
    const onChange = debounce(async function(id) {
      try {
        newSys.value = await pluralKit.getSystem(id);
      } catch (e) {
        if (is404(e)) {
          errorMessage.value = `Couldn't find system ${id}`;
          return;
        }
      } finally {
        isLoading.value = false;
      }
    }, 500);
    watch(newId, () => {
      newSys.value = null;
      errorMessage.value = "";
      if (newId.value == "") {
        onChange.cancel();
        isLoading.value = false;
        return;
      }
      isLoading.value = true;
      onChange(newId.value);
    });
    async function onSubmit() {
      try {
        await systemStore.add(newId.value);
      } catch (e) {
        if (is404(e)) {
          errorMessage.value = `Couldn't find system ${newId.value}`;
          return;
        }
        throw e;
      }
      $q.notify("System Added");
      router.push({ path: "/manage" });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "row justify-evenly" }, {
        default: withCtx(() => [
          createVNode(QForm, {
            class: "col col-sm-6 col-md-4",
            filled: "",
            onSubmit
          }, {
            default: withCtx(() => [
              createVNode(PageTitle, {
                icon: "group_add",
                text: "Add System"
              }),
              createVNode(QCardSection, { class: "q-pt-none" }, {
                default: withCtx(() => [
                  createVNode(QInput, {
                    modelValue: newId.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newId.value = $event),
                    modelModifiers: { trim: true },
                    filled: "",
                    autofocus: "",
                    label: "System or Discord ID *",
                    loading: isLoading.value,
                    "bottom-slots": "",
                    error: !!errorMessage.value,
                    "error-message": errorMessage.value
                  }, null, 8, ["modelValue", "loading", "error", "error-message"])
                ]),
                _: 1
                /* STABLE */
              }),
              newSys.value ? (openBlock(), createBlock(QCardSection, {
                key: 0,
                class: "q-py-none"
              }, {
                default: withCtx(() => [
                  createVNode(LabeledTile, {
                    label: newSys.value.name || "",
                    caption: newSys.value.pronouns,
                    img: newSys.value.avatarUrl,
                    "fallback-icon": unref(matGroups),
                    size: "100%"
                  }, null, 8, ["label", "caption", "img", "fallback-icon"])
                ]),
                _: 1
                /* STABLE */
              })) : createCommentVNode("v-if", true),
              createVNode(QPageSticky, {
                position: "bottom-left",
                offset: [18, 18]
              }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    fab: "",
                    class: "self-end",
                    icon: "arrow_back",
                    color: "primary",
                    to: "/manage"
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(QPageSticky, {
                position: "bottom-right",
                offset: [18, 18]
              }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    fab: "",
                    class: "self-end",
                    icon: "save",
                    color: "primary",
                    type: "submit",
                    disable: !newSys.value
                  }, null, 8, ["disable"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
const AddPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/zowie/dev/pkstatus/src/pages/Manage/AddPage.vue"]]);
export {
  AddPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkUGFnZS1CcnZjZjV5aS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE1LjIvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9mb3JtL1FGb3JtLmpzIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL01hbmFnZS9BZGRQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCByZWYsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkLCBvbk1vdW50ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSwgbmV4dFRpY2ssIHByb3ZpZGUgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGFkZEZvY3VzRm4gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2ZvY3VzLW1hbmFnZXIuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgZm9ybUtleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcbmltcG9ydCB7IHZtSXNEZXN0cm95ZWQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3ZtLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUZvcm0nLFxuXG4gIHByb3BzOiB7XG4gICAgYXV0b2ZvY3VzOiBCb29sZWFuLFxuICAgIG5vRXJyb3JGb2N1czogQm9vbGVhbixcbiAgICBub1Jlc2V0Rm9jdXM6IEJvb2xlYW4sXG4gICAgZ3JlZWR5OiBCb29sZWFuLFxuXG4gICAgb25TdWJtaXQ6IEZ1bmN0aW9uXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3Jlc2V0JywgJ3ZhbGlkYXRpb25TdWNjZXNzJywgJ3ZhbGlkYXRpb25FcnJvcicgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG5cbiAgICBsZXQgdmFsaWRhdGVJbmRleCA9IDBcbiAgICBjb25zdCByZWdpc3RlcmVkQ29tcG9uZW50cyA9IFtdXG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZSAoc2hvdWxkRm9jdXMpIHtcbiAgICAgIGNvbnN0IGZvY3VzID0gdHlwZW9mIHNob3VsZEZvY3VzID09PSAnYm9vbGVhbidcbiAgICAgICAgPyBzaG91bGRGb2N1c1xuICAgICAgICA6IHByb3BzLm5vRXJyb3JGb2N1cyAhPT0gdHJ1ZVxuXG4gICAgICBjb25zdCBpbmRleCA9ICsrdmFsaWRhdGVJbmRleFxuXG4gICAgICBjb25zdCBlbWl0RXZlbnQgPSAocmVzLCByZWYpID0+IHtcbiAgICAgICAgZW1pdCgndmFsaWRhdGlvbicgKyAocmVzID09PSB0cnVlID8gJ1N1Y2Nlc3MnIDogJ0Vycm9yJyksIHJlZilcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsaWRhdGVDb21wb25lbnQgPSBjb21wID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWQgPSBjb21wLnZhbGlkYXRlKClcblxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbGlkLnRoZW4gPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IHZhbGlkLnRoZW4oXG4gICAgICAgICAgICB2YWxpZCA9PiAoeyB2YWxpZCwgY29tcCB9KSxcbiAgICAgICAgICAgIGVyciA9PiAoeyB2YWxpZDogZmFsc2UsIGNvbXAsIGVyciB9KVxuICAgICAgICAgIClcbiAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZSh7IHZhbGlkLCBjb21wIH0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVycm9yc1Byb21pc2UgPSBwcm9wcy5ncmVlZHkgPT09IHRydWVcbiAgICAgICAgPyBQcm9taXNlXG4gICAgICAgICAgLmFsbChyZWdpc3RlcmVkQ29tcG9uZW50cy5tYXAodmFsaWRhdGVDb21wb25lbnQpKVxuICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuZmlsdGVyKHIgPT4gci52YWxpZCAhPT0gdHJ1ZSkpXG4gICAgICAgIDogcmVnaXN0ZXJlZENvbXBvbmVudHNcbiAgICAgICAgICAucmVkdWNlKFxuICAgICAgICAgICAgKGFjYywgY29tcCkgPT4gYWNjLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVDb21wb25lbnQoY29tcCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoci52YWxpZCA9PT0gZmFsc2UpIHsgcmV0dXJuIFByb21pc2UucmVqZWN0KHIpIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICApXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IFsgZXJyb3IgXSlcblxuICAgICAgcmV0dXJuIGVycm9yc1Byb21pc2UudGhlbihlcnJvcnMgPT4ge1xuICAgICAgICBpZiAoZXJyb3JzID09PSB2b2lkIDAgfHwgZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGluZGV4ID09PSB2YWxpZGF0ZUluZGV4ICYmIGVtaXRFdmVudCh0cnVlKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBub3Qgb3V0ZGF0ZWQgYWxyZWFkeVxuICAgICAgICBpZiAoaW5kZXggPT09IHZhbGlkYXRlSW5kZXgpIHtcbiAgICAgICAgICBjb25zdCB7IGNvbXAsIGVyciB9ID0gZXJyb3JzWyAwIF1cblxuICAgICAgICAgIGVyciAhPT0gdm9pZCAwICYmIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgIGVtaXRFdmVudChmYWxzZSwgY29tcClcblxuICAgICAgICAgIGlmIChmb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gVHJ5IHRvIGZvY3VzIGZpcnN0IG1vdW50ZWQgYW5kIGFjdGl2ZSBjb21wb25lbnRcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUVycm9yID0gZXJyb3JzLmZpbmQoKHsgY29tcCB9KSA9PiAoXG4gICAgICAgICAgICAgIHR5cGVvZiBjb21wLmZvY3VzID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICYmIHZtSXNEZXN0cm95ZWQoY29tcC4kKSA9PT0gZmFsc2VcbiAgICAgICAgICAgICkpXG5cbiAgICAgICAgICAgIGlmIChhY3RpdmVFcnJvciAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUVycm9yLmNvbXAuZm9jdXMoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldFZhbGlkYXRpb24gKCkge1xuICAgICAgdmFsaWRhdGVJbmRleCsrXG5cbiAgICAgIHJlZ2lzdGVyZWRDb21wb25lbnRzLmZvckVhY2goY29tcCA9PiB7XG4gICAgICAgIHR5cGVvZiBjb21wLnJlc2V0VmFsaWRhdGlvbiA9PT0gJ2Z1bmN0aW9uJyAmJiBjb21wLnJlc2V0VmFsaWRhdGlvbigpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1Ym1pdCAoZXZ0KSB7XG4gICAgICBldnQgIT09IHZvaWQgMCAmJiBzdG9wQW5kUHJldmVudChldnQpXG5cbiAgICAgIGNvbnN0IGluZGV4ID0gdmFsaWRhdGVJbmRleCArIDFcblxuICAgICAgdmFsaWRhdGUoKS50aGVuKHZhbCA9PiB7XG4gICAgICAgIC8vIGlmIG5vdCBvdXRkYXRlZCAmJiB2YWxpZGF0aW9uIHN1Y2NlZWRlZFxuICAgICAgICBpZiAoaW5kZXggPT09IHZhbGlkYXRlSW5kZXggJiYgdmFsID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHByb3BzLm9uU3VibWl0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGVtaXQoJ3N1Ym1pdCcsIGV2dClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoZXZ0ICE9PSB2b2lkIDAgJiYgZXZ0LnRhcmdldCAhPT0gdm9pZCAwICYmIHR5cGVvZiBldnQudGFyZ2V0LnN1Ym1pdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZXZ0LnRhcmdldC5zdWJtaXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldCAoZXZ0KSB7XG4gICAgICBldnQgIT09IHZvaWQgMCAmJiBzdG9wQW5kUHJldmVudChldnQpXG5cbiAgICAgIGVtaXQoJ3Jlc2V0JylcblxuICAgICAgbmV4dFRpY2soKCkgPT4geyAvLyBhbGxvdyB1c2VybGFuZCB0byByZXNldCB2YWx1ZXMgYmVmb3JlXG4gICAgICAgIHJlc2V0VmFsaWRhdGlvbigpXG4gICAgICAgIGlmIChwcm9wcy5hdXRvZm9jdXMgPT09IHRydWUgJiYgcHJvcHMubm9SZXNldEZvY3VzICE9PSB0cnVlKSB7XG4gICAgICAgICAgZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvY3VzICgpIHtcbiAgICAgIGFkZEZvY3VzRm4oKCkgPT4ge1xuICAgICAgICBpZiAocm9vdFJlZi52YWx1ZSA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gcm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKCdbYXV0b2ZvY3VzXVt0YWJpbmRleF0sIFtkYXRhLWF1dG9mb2N1c11bdGFiaW5kZXhdJylcbiAgICAgICAgICB8fCByb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ1thdXRvZm9jdXNdIFt0YWJpbmRleF0sIFtkYXRhLWF1dG9mb2N1c10gW3RhYmluZGV4XScpXG4gICAgICAgICAgfHwgcm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKCdbYXV0b2ZvY3VzXSwgW2RhdGEtYXV0b2ZvY3VzXScpXG4gICAgICAgICAgfHwgQXJyYXkucHJvdG90eXBlLmZpbmQuY2FsbChyb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0YWJpbmRleF0nKSwgZWwgPT4gZWwudGFiSW5kZXggIT09IC0xKVxuXG4gICAgICAgIHRhcmdldCAhPT0gbnVsbCAmJiB0YXJnZXQgIT09IHZvaWQgMCAmJiB0YXJnZXQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIHByb3ZpZGUoZm9ybUtleSwge1xuICAgICAgYmluZENvbXBvbmVudCAodm1Qcm94eSkge1xuICAgICAgICByZWdpc3RlcmVkQ29tcG9uZW50cy5wdXNoKHZtUHJveHkpXG4gICAgICB9LFxuXG4gICAgICB1bmJpbmRDb21wb25lbnQgKHZtUHJveHkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSByZWdpc3RlcmVkQ29tcG9uZW50cy5pbmRleE9mKHZtUHJveHkpXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICByZWdpc3RlcmVkQ29tcG9uZW50cy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgbGV0IHNob3VsZEFjdGl2YXRlID0gZmFsc2VcblxuICAgIG9uRGVhY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgc2hvdWxkQWN0aXZhdGUgPSB0cnVlXG4gICAgfSlcblxuICAgIG9uQWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHNob3VsZEFjdGl2YXRlID09PSB0cnVlICYmIHByb3BzLmF1dG9mb2N1cyA9PT0gdHJ1ZSAmJiBmb2N1cygpXG4gICAgfSlcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBwcm9wcy5hdXRvZm9jdXMgPT09IHRydWUgJiYgZm9jdXMoKVxuICAgIH0pXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHZtLnByb3h5LCB7XG4gICAgICB2YWxpZGF0ZSxcbiAgICAgIHJlc2V0VmFsaWRhdGlvbixcbiAgICAgIHN1Ym1pdCxcbiAgICAgIHJlc2V0LFxuICAgICAgZm9jdXMsXG4gICAgICBnZXRWYWxpZGF0aW9uQ29tcG9uZW50czogKCkgPT4gcmVnaXN0ZXJlZENvbXBvbmVudHNcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2Zvcm0nLCB7XG4gICAgICBjbGFzczogJ3EtZm9ybScsXG4gICAgICByZWY6IHJvb3RSZWYsXG4gICAgICBvblN1Ym1pdDogc3VibWl0LFxuICAgICAgb25SZXNldDogcmVzZXRcbiAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBjbGFzcz1cInJvdyBqdXN0aWZ5LWV2ZW5seVwiPlxuICAgIDxxLWZvcm0gY2xhc3M9XCJjb2wgY29sLXNtLTYgY29sLW1kLTRcIiBmaWxsZWQgQHN1Ym1pdD1cIm9uU3VibWl0XCI+XG4gICAgICA8cGFnZS10aXRsZSBpY29uPVwiZ3JvdXBfYWRkXCIgdGV4dD1cIkFkZCBTeXN0ZW1cIiAvPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1wdC1ub25lXCI+XG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgdi1tb2RlbC50cmltPVwibmV3SWRcIlxuICAgICAgICAgIGZpbGxlZFxuICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgIGxhYmVsPVwiU3lzdGVtIG9yIERpc2NvcmQgSUQgKlwiXG4gICAgICAgICAgOmxvYWRpbmc9XCJpc0xvYWRpbmdcIlxuICAgICAgICAgIGJvdHRvbS1zbG90c1xuICAgICAgICAgIDplcnJvcj1cIiEhZXJyb3JNZXNzYWdlXCJcbiAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImVycm9yTWVzc2FnZVwiXG4gICAgICAgIC8+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8cS1jYXJkLXNlY3Rpb24gdi1pZj1cIm5ld1N5c1wiIGNsYXNzPVwicS1weS1ub25lXCI+XG4gICAgICAgIDxsYWJlbGVkLXRpbGVcbiAgICAgICAgICA6bGFiZWw9XCJuZXdTeXMubmFtZSB8fCAnJ1wiXG4gICAgICAgICAgOmNhcHRpb249XCJuZXdTeXMucHJvbm91bnNcIlxuICAgICAgICAgIDppbWc9XCJuZXdTeXMuYXZhdGFyVXJsXCJcbiAgICAgICAgICA6ZmFsbGJhY2staWNvbj1cIm1hdEdyb3Vwc1wiXG4gICAgICAgICAgc2l6ZT1cIjEwMCVcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtcGFnZS1zdGlja3kgcG9zaXRpb249XCJib3R0b20tbGVmdFwiIDpvZmZzZXQ9XCJbMTgsIDE4XVwiPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBmYWJcbiAgICAgICAgICBjbGFzcz1cInNlbGYtZW5kXCJcbiAgICAgICAgICBpY29uPVwiYXJyb3dfYmFja1wiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICB0bz1cIi9tYW5hZ2VcIlxuICAgICAgICAvPlxuICAgICAgPC9xLXBhZ2Utc3RpY2t5PlxuICAgICAgPHEtcGFnZS1zdGlja3kgcG9zaXRpb249XCJib3R0b20tcmlnaHRcIiA6b2Zmc2V0PVwiWzE4LCAxOF1cIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmFiXG4gICAgICAgICAgY2xhc3M9XCJzZWxmLWVuZFwiXG4gICAgICAgICAgaWNvbj1cInNhdmVcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgOmRpc2FibGU9XCIhbmV3U3lzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS1wYWdlLXN0aWNreT5cbiAgICA8L3EtZm9ybT5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgeyBkZWJvdW5jZSwgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tICdwa2FwaS5qcyc7XG5cbmltcG9ydCB7IHVzZVN5c3RlbVN0b3JlIH0gZnJvbSAnc3JjL3N0b3Jlcy9zeXN0ZW0tc3RvcmUnO1xuaW1wb3J0IHsgdXNlU2VydmljZXMgfSBmcm9tICdzcmMvbGliL1NlcnZpY2VzJztcbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJ3NyYy9tb2RlbHMvU3lzdGVtJztcblxuaW1wb3J0IHsgbWF0R3JvdXBzIH0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMnO1xuaW1wb3J0IExhYmVsZWRUaWxlIGZyb20gJ3NyYy9jb21wb25lbnRzL1N0YXR1c1BhZ2UvVGlsZS9MYWJlbGVkVGlsZS52dWUnO1xuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICdzcmMvY29tcG9uZW50cy9QYWdlVGl0bGUudnVlJztcblxuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3Qgc3lzdGVtU3RvcmUgPSB1c2VTeXN0ZW1TdG9yZSgpO1xuY29uc3QgeyBwbHVyYWxLaXQgfSA9IHVzZVNlcnZpY2VzKCk7XG5cbmNvbnN0IG5ld0lkID0gcmVmKCcnKTtcbmNvbnN0IG5ld1N5cyA9IHJlZjxTeXN0ZW0gfCBudWxsPihudWxsKTtcbmNvbnN0IGVycm9yTWVzc2FnZSA9IHJlZignJyk7XG5jb25zdCBpc0xvYWRpbmcgPSByZWYoZmFsc2UpO1xuXG5mdW5jdGlvbiBpczQwNChlOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIHJldHVybiBlIGluc3RhbmNlb2YgQVBJRXJyb3IgJiYgZS5zdGF0dXMgPT0gJzQwNCc7XG59XG5cbmNvbnN0IG9uQ2hhbmdlID0gZGVib3VuY2UoYXN5bmMgZnVuY3Rpb24gKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBuZXdTeXMudmFsdWUgPSBhd2FpdCBwbHVyYWxLaXQuZ2V0U3lzdGVtKGlkKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChpczQwNChlKSkge1xuICAgICAgZXJyb3JNZXNzYWdlLnZhbHVlID0gYENvdWxkbid0IGZpbmQgc3lzdGVtICR7aWR9YDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgaXNMb2FkaW5nLnZhbHVlID0gZmFsc2U7XG4gIH1cbn0sIDUwMCk7XG5cbndhdGNoKG5ld0lkLCAoKSA9PiB7XG4gIG5ld1N5cy52YWx1ZSA9IG51bGw7XG4gIGVycm9yTWVzc2FnZS52YWx1ZSA9ICcnO1xuXG4gIGlmIChuZXdJZC52YWx1ZSA9PSAnJykge1xuICAgIG9uQ2hhbmdlLmNhbmNlbCgpO1xuICAgIGlzTG9hZGluZy52YWx1ZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaXNMb2FkaW5nLnZhbHVlID0gdHJ1ZTtcbiAgb25DaGFuZ2UobmV3SWQudmFsdWUpO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KCkge1xuICB0cnkge1xuICAgIGF3YWl0IHN5c3RlbVN0b3JlLmFkZChuZXdJZC52YWx1ZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoaXM0MDQoZSkpIHtcbiAgICAgIGVycm9yTWVzc2FnZS52YWx1ZSA9IGBDb3VsZG4ndCBmaW5kIHN5c3RlbSAke25ld0lkLnZhbHVlfWA7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhyb3cgZTtcbiAgfVxuXG4gICRxLm5vdGlmeSgnU3lzdGVtIEFkZGVkJyk7XG4gIHJvdXRlci5wdXNoKHsgcGF0aDogJy9tYW5hZ2UnIH0pO1xufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiZm9jdXMiLCJyZWYiLCJ2YWxpZCIsImNvbXAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQVNBLE1BQUEsUUFBZSxnQkFBZ0I7QUFBQSxFQUM3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TUFBTSxjQUFjLFFBQVEsTUFBTztBQUFBLElBQ3BFLENBQUs7QUFFRCxjQUFVLE1BQU07QUFDZCxZQUFNLGNBQWMsUUFBUSxNQUFPO0FBQUEsSUFDekMsQ0FBSztBQUdELFdBQU8sT0FBTyxHQUFHLE9BQU87QUFBQSxNQUN0QjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBLHlCQUF5QixNQUFNO0FBQUEsSUFDckMsQ0FBSztBQUVELFdBQU8sTUFBTSxFQUFFLFFBQVE7QUFBQSxNQUNyQixPQUFPO0FBQUEsTUFDUCxLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsSUFDZixHQUFPLE1BQU0sTUFBTSxPQUFPLENBQUM7QUFBQSxFQUN4QjtBQUNILENBQUM7Ozs7QUNqSUQsVUFBTSxLQUFLO0FBQ1gsVUFBTSxTQUFTO0FBQ2YsVUFBTSxjQUFjO0FBQ2QsVUFBQSxFQUFFLGNBQWM7QUFFaEIsVUFBQSxRQUFRLElBQUksRUFBRTtBQUNkLFVBQUEsU0FBUyxJQUFtQixJQUFJO0FBQ2hDLFVBQUEsZUFBZSxJQUFJLEVBQUU7QUFDckIsVUFBQSxZQUFZLElBQUksS0FBSztBQUUzQixhQUFTLE1BQU0sR0FBcUI7QUFDM0IsYUFBQSxhQUFhLFlBQVksRUFBRSxVQUFVO0FBQUEsSUFDOUM7QUFFTSxVQUFBLFdBQVcsU0FBUyxlQUFnQixJQUFZO0FBQ2hELFVBQUE7QUFDRixlQUFPLFFBQVEsTUFBTSxVQUFVLFVBQVUsRUFBRTtBQUFBLGVBQ3BDLEdBQUc7QUFDTixZQUFBLE1BQU0sQ0FBQyxHQUFHO0FBQ0MsdUJBQUEsUUFBUSx3QkFBd0IsRUFBRTtBQUMvQztBQUFBLFFBQ0Y7QUFBQSxNQUFBLFVBQ0E7QUFDQSxrQkFBVSxRQUFRO0FBQUEsTUFDcEI7QUFBQSxPQUNDLEdBQUc7QUFFTixVQUFNLE9BQU8sTUFBTTtBQUNqQixhQUFPLFFBQVE7QUFDZixtQkFBYSxRQUFRO0FBRWpCLFVBQUEsTUFBTSxTQUFTLElBQUk7QUFDckIsaUJBQVMsT0FBTztBQUNoQixrQkFBVSxRQUFRO0FBRWxCO0FBQUEsTUFDRjtBQUVBLGdCQUFVLFFBQVE7QUFDbEIsZUFBUyxNQUFNLEtBQUs7QUFBQSxJQUFBLENBQ3JCO0FBRUQsbUJBQWUsV0FBVztBQUNwQixVQUFBO0FBQ0ksY0FBQSxZQUFZLElBQUksTUFBTSxLQUFLO0FBQUEsZUFDMUIsR0FBRztBQUNOLFlBQUEsTUFBTSxDQUFDLEdBQUc7QUFDQyx1QkFBQSxRQUFRLHdCQUF3QixNQUFNLEtBQUs7QUFDeEQ7QUFBQSxRQUNGO0FBRU0sY0FBQTtBQUFBLE1BQ1I7QUFFQSxTQUFHLE9BQU8sY0FBYztBQUN4QixhQUFPLEtBQUssRUFBRSxNQUFNLFVBQVcsQ0FBQTtBQUFBLElBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
