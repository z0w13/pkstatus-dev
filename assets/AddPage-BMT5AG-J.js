import { c as createComponent, r as ref, au as onDeactivated, av as onActivated, t as onMounted, g as getCurrentInstance, h, b as hSlot, bH as vmIsDestroyed, af as stopAndPrevent, s as nextTick, bI as addFocusFn, y as provide, bJ as formKey, J as defineComponent, ai as useSystemStore, ah as usePluralKit, a as computed, as as debounce, b7 as is404, w as watch, aX as useRouter, N as useQuasar, _ as _export_sfc, S as createBlock, T as openBlock, U as withCtx, W as createVNode, a0 as createCommentVNode, a7 as QCardSection, aD as QInput, Z as QBtn } from "./index-Czhz81pV.js";
import { Q as QPageSticky } from "./QPageSticky-Cu8DVAYK.js";
import { Q as QPage } from "./QPage-B7Tg8hoM.js";
import { m as matGroups } from "./index-BPlwBMVZ.js";
import { L as LabeledTile } from "./LabeledTile-CmcEf7Nd.js";
import { P as PageTitle } from "./PageTitle-BKiEeIBH.js";
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
        emit(`validation${res === true ? "Success" : "Error"}`, ref2);
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
          } else if ((evt == null ? void 0 : evt.target) !== void 0 && typeof evt.target.submit === "function") {
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
        if (rootRef.value === null) return;
        const target = rootRef.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || rootRef.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || rootRef.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(rootRef.value.querySelectorAll("[tabindex]"), (el) => el.tabIndex !== -1);
        target == null ? void 0 : target.focus({ preventScroll: true });
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
function $constructor(name, initializer2, params) {
  var _a;
  function init(inst, def) {
    var _a3, _b;
    var _a2;
    Object.defineProperty(inst, "_zod", {
      value: (_a3 = inst._zod) != null ? _a3 : {},
      enumerable: false
    });
    (_b = (_a2 = inst._zod).traits) != null ? _b : _a2.traits = /* @__PURE__ */ new Set();
    inst._zod.traits.add(name);
    initializer2(inst, def);
    for (const k in _.prototype) {
      if (!(k in inst))
        Object.defineProperty(inst, k, { value: _.prototype[k].bind(inst) });
    }
    inst._zod.constr = _;
    inst._zod.def = def;
  }
  const Parent = (_a = params == null ? void 0 : params.Parent) != null ? _a : Object;
  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    var _a3;
    var _a2;
    const inst = (params == null ? void 0 : params.Parent) ? new Definition() : this;
    init(inst, def);
    (_a3 = (_a2 = inst._zod).deferred) != null ? _a3 : _a2.deferred = [];
    for (const fn of inst._zod.deferred) {
      fn();
    }
    return inst;
  }
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => {
      var _a2, _b;
      if ((params == null ? void 0 : params.Parent) && inst instanceof params.Parent)
        return true;
      return (_b = (_a2 = inst == null ? void 0 : inst._zod) == null ? void 0 : _a2.traits) == null ? void 0 : _b.has(name);
    }
  });
  Object.defineProperty(_, "name", { value: name });
  return _;
}
function jsonStringifyReplacer(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
const initializer$1 = (inst, def) => {
  inst.name = "$ZodError";
  Object.defineProperty(inst, "_zod", {
    value: inst._zod,
    enumerable: false
  });
  Object.defineProperty(inst, "issues", {
    value: def,
    enumerable: false
  });
  Object.defineProperty(inst, "message", {
    get() {
      return JSON.stringify(def, jsonStringifyReplacer, 2);
    },
    enumerable: true
    // configurable: false,
  });
};
const $ZodError = $constructor("$ZodError", initializer$1);
function flattenError(error, mapper = (issue) => issue.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error.issues) {
    if (sub.path.length > 0) {
      fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
      fieldErrors[sub.path[0]].push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
    }
  }
  return { formErrors, fieldErrors };
}
function formatError(error, _mapper) {
  const mapper = _mapper || function(issue) {
    return issue.message;
  };
  const fieldErrors = { _errors: [] };
  const processError = (error2) => {
    for (const issue of error2.issues) {
      if (issue.code === "invalid_union" && issue.errors.length) {
        issue.errors.map((issues) => processError({ issues }));
      } else if (issue.code === "invalid_key") {
        processError({ issues: issue.issues });
      } else if (issue.code === "invalid_element") {
        processError({ issues: issue.issues });
      } else if (issue.path.length === 0) {
        fieldErrors._errors.push(mapper(issue));
      } else {
        let curr = fieldErrors;
        let i = 0;
        while (i < issue.path.length) {
          const el = issue.path[i];
          const terminal = i === issue.path.length - 1;
          if (!terminal) {
            curr[el] = curr[el] || { _errors: [] };
          } else {
            curr[el] = curr[el] || { _errors: [] };
            curr[el]._errors.push(mapper(issue));
          }
          curr = curr[el];
          i++;
        }
      }
    }
  };
  processError(error);
  return fieldErrors;
}
const initializer = (inst, issues) => {
  $ZodError.init(inst, issues);
  inst.name = "ZodError";
  Object.defineProperties(inst, {
    format: {
      value: (mapper) => formatError(inst, mapper)
      // enumerable: false,
    },
    flatten: {
      value: (mapper) => flattenError(inst, mapper)
      // enumerable: false,
    },
    addIssue: {
      value: (issue) => inst.issues.push(issue)
      // enumerable: false,
    },
    addIssues: {
      value: (issues2) => inst.issues.push(...issues2)
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return inst.issues.length === 0;
      }
      // enumerable: false,
    }
  });
};
const ZodError = $constructor("ZodError", initializer);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddPage",
  setup(__props, { expose: __expose }) {
    __expose();
    const $q = useQuasar();
    const router = useRouter();
    const systemStore = useSystemStore();
    const pluralKit = usePluralKit();
    const idInput = ref("");
    const newId = computed(() => idInput.value.toLowerCase());
    const newSys = ref(null);
    const errorMessage = ref("");
    const isLoading = ref(false);
    const onChange = debounce(async function(id) {
      try {
        newSys.value = await pluralKit.getSystem(id);
      } catch (e) {
        if (e instanceof ZodError) {
          errorMessage.value = `Input is not a PluralKit ID, UUID or Discord ID`;
        } else if (is404(e)) {
          errorMessage.value = `Couldn't find system ${id}`;
        } else {
          throw e;
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
    const __returned__ = { $q, router, systemStore, pluralKit, idInput, newId, newSys, errorMessage, isLoading, onChange, onSubmit, get matGroups() {
      return matGroups;
    }, LabeledTile, PageTitle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { class: "row justify-evenly" }, {
    default: withCtx(() => [
      createVNode(QForm, {
        class: "col col-sm-6 col-md-4",
        filled: "",
        onSubmit: $setup.onSubmit
      }, {
        default: withCtx(() => [
          createVNode($setup["PageTitle"], {
            icon: "group_add",
            text: "Add System"
          }),
          createVNode(QCardSection, { class: "q-pt-none" }, {
            default: withCtx(() => [
              createVNode(QInput, {
                modelValue: $setup.idInput,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.idInput = $event),
                modelModifiers: { trim: true },
                filled: "",
                autofocus: "",
                label: "System or Discord ID *",
                "input-style": "text-transform: lowercase",
                loading: $setup.isLoading,
                "bottom-slots": "",
                error: !!$setup.errorMessage,
                "error-message": $setup.errorMessage
              }, null, 8, ["modelValue", "loading", "error", "error-message"])
            ]),
            _: 1
            /* STABLE */
          }),
          $setup.newSys ? (openBlock(), createBlock(QCardSection, {
            key: 0,
            class: "q-py-none"
          }, {
            default: withCtx(() => [
              createVNode($setup["LabeledTile"], {
                label: $setup.newSys.name || "",
                caption: $setup.newSys.pronouns,
                img: $setup.newSys.avatarUrl,
                "fallback-icon": $setup.matGroups,
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
                disable: !$setup.newSys
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
}
const AddPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/pages/Manage/AddPage.vue"]]);
export {
  AddPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkUGFnZS1CTVQ1QUctSi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1YXNhckAyLjE4LjIvbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9mb3JtL1FGb3JtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZEAzLjI1LjY3L25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjQvY29yZS9jb3JlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZEAzLjI1LjY3L25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjQvY29yZS91dGlsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZEAzLjI1LjY3L25vZGVfbW9kdWxlcy96b2QvZGlzdC9lc20vdjQvY29yZS9lcnJvcnMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vem9kQDMuMjUuNjcvbm9kZV9tb2R1bGVzL3pvZC9kaXN0L2VzbS92NC9jbGFzc2ljL2Vycm9ycy5qcyIsIi4uLy4uLy4uL3NyYy9wYWdlcy9NYW5hZ2UvQWRkUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgcmVmLCBvbkFjdGl2YXRlZCwgb25EZWFjdGl2YXRlZCwgb25Nb3VudGVkLCBnZXRDdXJyZW50SW5zdGFuY2UsIG5leHRUaWNrLCBwcm92aWRlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBzdG9wQW5kUHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50L2V2ZW50LmpzJ1xuaW1wb3J0IHsgYWRkRm9jdXNGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuZm9jdXMvZm9jdXMtbWFuYWdlci5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgZm9ybUtleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuc3ltYm9scy9zeW1ib2xzLmpzJ1xuaW1wb3J0IHsgdm1Jc0Rlc3Ryb3llZCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUudm0vdm0uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRRm9ybScsXG5cbiAgcHJvcHM6IHtcbiAgICBhdXRvZm9jdXM6IEJvb2xlYW4sXG4gICAgbm9FcnJvckZvY3VzOiBCb29sZWFuLFxuICAgIG5vUmVzZXRGb2N1czogQm9vbGVhbixcbiAgICBncmVlZHk6IEJvb2xlYW4sXG5cbiAgICBvblN1Ym1pdDogRnVuY3Rpb25cbiAgfSxcblxuICBlbWl0czogWyAncmVzZXQnLCAndmFsaWRhdGlvblN1Y2Nlc3MnLCAndmFsaWRhdGlvbkVycm9yJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcblxuICAgIGxldCB2YWxpZGF0ZUluZGV4ID0gMFxuICAgIGNvbnN0IHJlZ2lzdGVyZWRDb21wb25lbnRzID0gW11cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlIChzaG91bGRGb2N1cykge1xuICAgICAgY29uc3QgZm9jdXMgPSB0eXBlb2Ygc2hvdWxkRm9jdXMgPT09ICdib29sZWFuJ1xuICAgICAgICA/IHNob3VsZEZvY3VzXG4gICAgICAgIDogcHJvcHMubm9FcnJvckZvY3VzICE9PSB0cnVlXG5cbiAgICAgIGNvbnN0IGluZGV4ID0gKyt2YWxpZGF0ZUluZGV4XG5cbiAgICAgIGNvbnN0IGVtaXRFdmVudCA9IChyZXMsIHJlZikgPT4ge1xuICAgICAgICBlbWl0KGB2YWxpZGF0aW9uJHsgcmVzID09PSB0cnVlID8gJ1N1Y2Nlc3MnIDogJ0Vycm9yJyB9YCwgcmVmKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWxpZGF0ZUNvbXBvbmVudCA9IGNvbXAgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZCA9IGNvbXAudmFsaWRhdGUoKVxuXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsaWQudGhlbiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgID8gdmFsaWQudGhlbihcbiAgICAgICAgICAgIHZhbGlkID0+ICh7IHZhbGlkLCBjb21wIH0pLFxuICAgICAgICAgICAgZXJyID0+ICh7IHZhbGlkOiBmYWxzZSwgY29tcCwgZXJyIH0pXG4gICAgICAgICAgKVxuICAgICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKHsgdmFsaWQsIGNvbXAgfSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXJyb3JzUHJvbWlzZSA9IHByb3BzLmdyZWVkeSA9PT0gdHJ1ZVxuICAgICAgICA/IFByb21pc2VcbiAgICAgICAgICAuYWxsKHJlZ2lzdGVyZWRDb21wb25lbnRzLm1hcCh2YWxpZGF0ZUNvbXBvbmVudCkpXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5maWx0ZXIociA9PiByLnZhbGlkICE9PSB0cnVlKSlcbiAgICAgICAgOiByZWdpc3RlcmVkQ29tcG9uZW50c1xuICAgICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgICAoYWNjLCBjb21wKSA9PiBhY2MudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZUNvbXBvbmVudChjb21wKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyLnZhbGlkID09PSBmYWxzZSkgeyByZXR1cm4gUHJvbWlzZS5yZWplY3QocikgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgIClcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gWyBlcnJvciBdKVxuXG4gICAgICByZXR1cm4gZXJyb3JzUHJvbWlzZS50aGVuKGVycm9ycyA9PiB7XG4gICAgICAgIGlmIChlcnJvcnMgPT09IHZvaWQgMCB8fCBlcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaW5kZXggPT09IHZhbGlkYXRlSW5kZXggJiYgZW1pdEV2ZW50KHRydWUpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIG5vdCBvdXRkYXRlZCBhbHJlYWR5XG4gICAgICAgIGlmIChpbmRleCA9PT0gdmFsaWRhdGVJbmRleCkge1xuICAgICAgICAgIGNvbnN0IHsgY29tcCwgZXJyIH0gPSBlcnJvcnNbIDAgXVxuXG4gICAgICAgICAgZXJyICE9PSB2b2lkIDAgJiYgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgZW1pdEV2ZW50KGZhbHNlLCBjb21wKVxuXG4gICAgICAgICAgaWYgKGZvY3VzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBUcnkgdG8gZm9jdXMgZmlyc3QgbW91bnRlZCBhbmQgYWN0aXZlIGNvbXBvbmVudFxuICAgICAgICAgICAgY29uc3QgYWN0aXZlRXJyb3IgPSBlcnJvcnMuZmluZCgoeyBjb21wIH0pID0+IChcbiAgICAgICAgICAgICAgdHlwZW9mIGNvbXAuZm9jdXMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgJiYgdm1Jc0Rlc3Ryb3llZChjb21wLiQpID09PSBmYWxzZVxuICAgICAgICAgICAgKSlcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVycm9yICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgYWN0aXZlRXJyb3IuY29tcC5mb2N1cygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbiAoKSB7XG4gICAgICB2YWxpZGF0ZUluZGV4KytcblxuICAgICAgcmVnaXN0ZXJlZENvbXBvbmVudHMuZm9yRWFjaChjb21wID0+IHtcbiAgICAgICAgdHlwZW9mIGNvbXAucmVzZXRWYWxpZGF0aW9uID09PSAnZnVuY3Rpb24nICYmIGNvbXAucmVzZXRWYWxpZGF0aW9uKClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3VibWl0IChldnQpIHtcbiAgICAgIGV2dCAhPT0gdm9pZCAwICYmIHN0b3BBbmRQcmV2ZW50KGV2dClcblxuICAgICAgY29uc3QgaW5kZXggPSB2YWxpZGF0ZUluZGV4ICsgMVxuXG4gICAgICB2YWxpZGF0ZSgpLnRoZW4odmFsID0+IHtcbiAgICAgICAgLy8gaWYgbm90IG91dGRhdGVkICYmIHZhbGlkYXRpb24gc3VjY2VlZGVkXG4gICAgICAgIGlmIChpbmRleCA9PT0gdmFsaWRhdGVJbmRleCAmJiB2YWwgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAocHJvcHMub25TdWJtaXQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZW1pdCgnc3VibWl0JywgZXZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChldnQ/LnRhcmdldCAhPT0gdm9pZCAwICYmIHR5cGVvZiBldnQudGFyZ2V0LnN1Ym1pdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZXZ0LnRhcmdldC5zdWJtaXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldCAoZXZ0KSB7XG4gICAgICBldnQgIT09IHZvaWQgMCAmJiBzdG9wQW5kUHJldmVudChldnQpXG5cbiAgICAgIGVtaXQoJ3Jlc2V0JylcblxuICAgICAgbmV4dFRpY2soKCkgPT4geyAvLyBhbGxvdyB1c2VybGFuZCB0byByZXNldCB2YWx1ZXMgYmVmb3JlXG4gICAgICAgIHJlc2V0VmFsaWRhdGlvbigpXG4gICAgICAgIGlmIChwcm9wcy5hdXRvZm9jdXMgPT09IHRydWUgJiYgcHJvcHMubm9SZXNldEZvY3VzICE9PSB0cnVlKSB7XG4gICAgICAgICAgZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvY3VzICgpIHtcbiAgICAgIGFkZEZvY3VzRm4oKCkgPT4ge1xuICAgICAgICBpZiAocm9vdFJlZi52YWx1ZSA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gcm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKCdbYXV0b2ZvY3VzXVt0YWJpbmRleF0sIFtkYXRhLWF1dG9mb2N1c11bdGFiaW5kZXhdJylcbiAgICAgICAgICB8fCByb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ1thdXRvZm9jdXNdIFt0YWJpbmRleF0sIFtkYXRhLWF1dG9mb2N1c10gW3RhYmluZGV4XScpXG4gICAgICAgICAgfHwgcm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKCdbYXV0b2ZvY3VzXSwgW2RhdGEtYXV0b2ZvY3VzXScpXG4gICAgICAgICAgfHwgQXJyYXkucHJvdG90eXBlLmZpbmQuY2FsbChyb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0YWJpbmRleF0nKSwgZWwgPT4gZWwudGFiSW5kZXggIT09IC0xKVxuXG4gICAgICAgIHRhcmdldD8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIHByb3ZpZGUoZm9ybUtleSwge1xuICAgICAgYmluZENvbXBvbmVudCAodm1Qcm94eSkge1xuICAgICAgICByZWdpc3RlcmVkQ29tcG9uZW50cy5wdXNoKHZtUHJveHkpXG4gICAgICB9LFxuXG4gICAgICB1bmJpbmRDb21wb25lbnQgKHZtUHJveHkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSByZWdpc3RlcmVkQ29tcG9uZW50cy5pbmRleE9mKHZtUHJveHkpXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICByZWdpc3RlcmVkQ29tcG9uZW50cy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgbGV0IHNob3VsZEFjdGl2YXRlID0gZmFsc2VcblxuICAgIG9uRGVhY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgc2hvdWxkQWN0aXZhdGUgPSB0cnVlXG4gICAgfSlcblxuICAgIG9uQWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHNob3VsZEFjdGl2YXRlID09PSB0cnVlICYmIHByb3BzLmF1dG9mb2N1cyA9PT0gdHJ1ZSAmJiBmb2N1cygpXG4gICAgfSlcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBwcm9wcy5hdXRvZm9jdXMgPT09IHRydWUgJiYgZm9jdXMoKVxuICAgIH0pXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHZtLnByb3h5LCB7XG4gICAgICB2YWxpZGF0ZSxcbiAgICAgIHJlc2V0VmFsaWRhdGlvbixcbiAgICAgIHN1Ym1pdCxcbiAgICAgIHJlc2V0LFxuICAgICAgZm9jdXMsXG4gICAgICBnZXRWYWxpZGF0aW9uQ29tcG9uZW50czogKCkgPT4gcmVnaXN0ZXJlZENvbXBvbmVudHNcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2Zvcm0nLCB7XG4gICAgICBjbGFzczogJ3EtZm9ybScsXG4gICAgICByZWY6IHJvb3RSZWYsXG4gICAgICBvblN1Ym1pdDogc3VibWl0LFxuICAgICAgb25SZXNldDogcmVzZXRcbiAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImV4cG9ydCAvKkBfX05PX1NJREVfRUZGRUNUU19fKi8gZnVuY3Rpb24gJGNvbnN0cnVjdG9yKG5hbWUsIGluaXRpYWxpemVyLCBwYXJhbXMpIHtcbiAgICBmdW5jdGlvbiBpbml0KGluc3QsIGRlZikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnN0LCBcIl96b2RcIiwge1xuICAgICAgICAgICAgdmFsdWU6IGluc3QuX3pvZCA/PyB7fSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgKF9hID0gaW5zdC5fem9kKS50cmFpdHMgPz8gKF9hLnRyYWl0cyA9IG5ldyBTZXQoKSk7XG4gICAgICAgIGluc3QuX3pvZC50cmFpdHMuYWRkKG5hbWUpO1xuICAgICAgICBpbml0aWFsaXplcihpbnN0LCBkZWYpO1xuICAgICAgICAvLyBzdXBwb3J0IHByb3RvdHlwZSBtb2RpZmljYXRpb25zXG4gICAgICAgIGZvciAoY29uc3QgayBpbiBfLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgaWYgKCEoayBpbiBpbnN0KSlcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW5zdCwgaywgeyB2YWx1ZTogXy5wcm90b3R5cGVba10uYmluZChpbnN0KSB9KTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0Ll96b2QuY29uc3RyID0gXztcbiAgICAgICAgaW5zdC5fem9kLmRlZiA9IGRlZjtcbiAgICB9XG4gICAgLy8gZG9lc24ndCB3b3JrIGlmIFBhcmVudCBoYXMgYSBjb25zdHJ1Y3RvciB3aXRoIGFyZ3VtZW50c1xuICAgIGNvbnN0IFBhcmVudCA9IHBhcmFtcz8uUGFyZW50ID8/IE9iamVjdDtcbiAgICBjbGFzcyBEZWZpbml0aW9uIGV4dGVuZHMgUGFyZW50IHtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KERlZmluaXRpb24sIFwibmFtZVwiLCB7IHZhbHVlOiBuYW1lIH0pO1xuICAgIGZ1bmN0aW9uIF8oZGVmKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgaW5zdCA9IHBhcmFtcz8uUGFyZW50ID8gbmV3IERlZmluaXRpb24oKSA6IHRoaXM7XG4gICAgICAgIGluaXQoaW5zdCwgZGVmKTtcbiAgICAgICAgKF9hID0gaW5zdC5fem9kKS5kZWZlcnJlZCA/PyAoX2EuZGVmZXJyZWQgPSBbXSk7XG4gICAgICAgIGZvciAoY29uc3QgZm4gb2YgaW5zdC5fem9kLmRlZmVycmVkKSB7XG4gICAgICAgICAgICBmbigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnN0O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXywgXCJpbml0XCIsIHsgdmFsdWU6IGluaXQgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF8sIFN5bWJvbC5oYXNJbnN0YW5jZSwge1xuICAgICAgICB2YWx1ZTogKGluc3QpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJhbXM/LlBhcmVudCAmJiBpbnN0IGluc3RhbmNlb2YgcGFyYW1zLlBhcmVudClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBpbnN0Py5fem9kPy50cmFpdHM/LmhhcyhuYW1lKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXywgXCJuYW1lXCIsIHsgdmFsdWU6IG5hbWUgfSk7XG4gICAgcmV0dXJuIF87XG59XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gICBVVElMSVRJRVMgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmV4cG9ydCBjb25zdCAkYnJhbmQgPSBTeW1ib2woXCJ6b2RfYnJhbmRcIik7XG5leHBvcnQgY2xhc3MgJFpvZEFzeW5jRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKGBFbmNvdW50ZXJlZCBQcm9taXNlIGR1cmluZyBzeW5jaHJvbm91cyBwYXJzZS4gVXNlIC5wYXJzZUFzeW5jKCkgaW5zdGVhZC5gKTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgZ2xvYmFsQ29uZmlnID0ge307XG5leHBvcnQgZnVuY3Rpb24gY29uZmlnKG5ld0NvbmZpZykge1xuICAgIGlmIChuZXdDb25maWcpXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsQ29uZmlnLCBuZXdDb25maWcpO1xuICAgIHJldHVybiBnbG9iYWxDb25maWc7XG59XG4iLCIvLyBmdW5jdGlvbnNcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRFcXVhbCh2YWwpIHtcbiAgICByZXR1cm4gdmFsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE5vdEVxdWFsKHZhbCkge1xuICAgIHJldHVybiB2YWw7XG59XG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0SXMoX2FyZykgeyB9XG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0TmV2ZXIoX3gpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQoXykgeyB9XG5leHBvcnQgZnVuY3Rpb24gZ2V0RW51bVZhbHVlcyhlbnRyaWVzKSB7XG4gICAgY29uc3QgbnVtZXJpY1ZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZW50cmllcykuZmlsdGVyKCh2KSA9PiB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIik7XG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LmVudHJpZXMoZW50cmllcylcbiAgICAgICAgLmZpbHRlcigoW2ssIF9dKSA9PiBudW1lcmljVmFsdWVzLmluZGV4T2YoK2spID09PSAtMSlcbiAgICAgICAgLm1hcCgoW18sIHZdKSA9PiB2KTtcbiAgICByZXR1cm4gdmFsdWVzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGpvaW5WYWx1ZXMoYXJyYXksIHNlcGFyYXRvciA9IFwifFwiKSB7XG4gICAgcmV0dXJuIGFycmF5Lm1hcCgodmFsKSA9PiBzdHJpbmdpZnlQcmltaXRpdmUodmFsKSkuam9pbihzZXBhcmF0b3IpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGpzb25TdHJpbmdpZnlSZXBsYWNlcihfLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYmlnaW50XCIpXG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZWQoZ2V0dGVyKSB7XG4gICAgY29uc3Qgc2V0ID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICAgICAgaWYgKCFzZXQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldHRlcigpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInZhbHVlXCIsIHsgdmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2FjaGVkIHZhbHVlIGFscmVhZHkgc2V0XCIpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gbnVsbGlzaChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuUmVnZXgoc291cmNlKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBzb3VyY2Uuc3RhcnRzV2l0aChcIl5cIikgPyAxIDogMDtcbiAgICBjb25zdCBlbmQgPSBzb3VyY2UuZW5kc1dpdGgoXCIkXCIpID8gc291cmNlLmxlbmd0aCAtIDEgOiBzb3VyY2UubGVuZ3RoO1xuICAgIHJldHVybiBzb3VyY2Uuc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmxvYXRTYWZlUmVtYWluZGVyKHZhbCwgc3RlcCkge1xuICAgIGNvbnN0IHZhbERlY0NvdW50ID0gKHZhbC50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXSB8fCBcIlwiKS5sZW5ndGg7XG4gICAgY29uc3Qgc3RlcERlY0NvdW50ID0gKHN0ZXAudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0gfHwgXCJcIikubGVuZ3RoO1xuICAgIGNvbnN0IGRlY0NvdW50ID0gdmFsRGVjQ291bnQgPiBzdGVwRGVjQ291bnQgPyB2YWxEZWNDb3VudCA6IHN0ZXBEZWNDb3VudDtcbiAgICBjb25zdCB2YWxJbnQgPSBOdW1iZXIucGFyc2VJbnQodmFsLnRvRml4ZWQoZGVjQ291bnQpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKTtcbiAgICBjb25zdCBzdGVwSW50ID0gTnVtYmVyLnBhcnNlSW50KHN0ZXAudG9GaXhlZChkZWNDb3VudCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgIHJldHVybiAodmFsSW50ICUgc3RlcEludCkgLyAxMCAqKiBkZWNDb3VudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVMYXp5KG9iamVjdCwga2V5LCBnZXR0ZXIpIHtcbiAgICBjb25zdCBzZXQgPSBmYWxzZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgaWYgKCFzZXQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldHRlcigpO1xuICAgICAgICAgICAgICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2FjaGVkIHZhbHVlIGFscmVhZHkgc2V0XCIpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQodikge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHYsXG4gICAgICAgICAgICAgICAgLy8gY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBvYmplY3Rba2V5XSA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25Qcm9wKHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wLCB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRBdFBhdGgob2JqLCBwYXRoKSB7XG4gICAgaWYgKCFwYXRoKVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIHJldHVybiBwYXRoLnJlZHVjZSgoYWNjLCBrZXkpID0+IGFjYz8uW2tleV0sIG9iaik7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJvbWlzZUFsbE9iamVjdChwcm9taXNlc09iaikge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9taXNlc09iaik7XG4gICAgY29uc3QgcHJvbWlzZXMgPSBrZXlzLm1hcCgoa2V5KSA9PiBwcm9taXNlc09ialtrZXldKTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRPYmogPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXNvbHZlZE9ialtrZXlzW2ldXSA9IHJlc3VsdHNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmVkT2JqO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVN0cmluZyhsZW5ndGggPSAxMCkge1xuICAgIGNvbnN0IGNoYXJzID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiO1xuICAgIGxldCBzdHIgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3RyICs9IGNoYXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJzLmxlbmd0aCldO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVzYyhzdHIpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc3RyKTtcbn1cbmV4cG9ydCBjb25zdCBjYXB0dXJlU3RhY2tUcmFjZSA9IEVycm9yLmNhcHR1cmVTdGFja1RyYWNlXG4gICAgPyBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZVxuICAgIDogKC4uLl9hcmdzKSA9PiB7IH07XG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoZGF0YSkge1xuICAgIHJldHVybiB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiBkYXRhICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KGRhdGEpO1xufVxuZXhwb3J0IGNvbnN0IGFsbG93c0V2YWwgPSBjYWNoZWQoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvcj8udXNlckFnZW50Py5pbmNsdWRlcyhcIkNsb3VkZmxhcmVcIikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBGID0gRnVuY3Rpb247XG4gICAgICAgIG5ldyBGKFwiXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gX2lzT2JqZWN0KG8pIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qobykge1xuICAgIGlmIChpc09iamVjdChvKSA9PT0gZmFsc2UpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyBtb2RpZmllZCBjb25zdHJ1Y3RvclxuICAgIGNvbnN0IGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuICAgIGlmIChjdG9yID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIC8vIG1vZGlmaWVkIHByb3RvdHlwZVxuICAgIGNvbnN0IHByb3QgPSBjdG9yLnByb3RvdHlwZTtcbiAgICBpZiAoaXNPYmplY3QocHJvdCkgPT09IGZhbHNlKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gY3RvciBkb2Vzbid0IGhhdmUgc3RhdGljIGBpc1Byb3RvdHlwZU9mYFxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvdCwgXCJpc1Byb3RvdHlwZU9mXCIpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG51bUtleXMoZGF0YSkge1xuICAgIGxldCBrZXlDb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkpIHtcbiAgICAgICAgICAgIGtleUNvdW50Kys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGtleUNvdW50O1xufVxuZXhwb3J0IGNvbnN0IGdldFBhcnNlZFR5cGUgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHQgPSB0eXBlb2YgZGF0YTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwidW5kZWZpbmVkXCI7XG4gICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiO1xuICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyLmlzTmFOKGRhdGEpID8gXCJuYW5cIiA6IFwibnVtYmVyXCI7XG4gICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJib29sZWFuXCI7XG4gICAgICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiZnVuY3Rpb25cIjtcbiAgICAgICAgY2FzZSBcImJpZ2ludFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiYmlnaW50XCI7XG4gICAgICAgIGNhc2UgXCJzeW1ib2xcIjpcbiAgICAgICAgICAgIHJldHVybiBcInN5bWJvbFwiO1xuICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImFycmF5XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIm51bGxcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLnRoZW4gJiYgdHlwZW9mIGRhdGEudGhlbiA9PT0gXCJmdW5jdGlvblwiICYmIGRhdGEuY2F0Y2ggJiYgdHlwZW9mIGRhdGEuY2F0Y2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBcInByb21pc2VcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgTWFwICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGEgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJtYXBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgU2V0ICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGEgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzZXRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgRGF0ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImRhdGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgRmlsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImZpbGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcIm9iamVjdFwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEgdHlwZTogJHt0fWApO1xuICAgIH1cbn07XG5leHBvcnQgY29uc3QgcHJvcGVydHlLZXlUeXBlcyA9IG5ldyBTZXQoW1wic3RyaW5nXCIsIFwibnVtYmVyXCIsIFwic3ltYm9sXCJdKTtcbmV4cG9ydCBjb25zdCBwcmltaXRpdmVUeXBlcyA9IG5ldyBTZXQoW1wic3RyaW5nXCIsIFwibnVtYmVyXCIsIFwiYmlnaW50XCIsIFwiYm9vbGVhblwiLCBcInN5bWJvbFwiLCBcInVuZGVmaW5lZFwiXSk7XG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgXCJcXFxcJCZcIik7XG59XG4vLyB6b2Qtc3BlY2lmaWMgdXRpbHNcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShpbnN0LCBkZWYsIHBhcmFtcykge1xuICAgIGNvbnN0IGNsID0gbmV3IGluc3QuX3pvZC5jb25zdHIoZGVmID8/IGluc3QuX3pvZC5kZWYpO1xuICAgIGlmICghZGVmIHx8IHBhcmFtcz8ucGFyZW50KVxuICAgICAgICBjbC5fem9kLnBhcmVudCA9IGluc3Q7XG4gICAgcmV0dXJuIGNsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmFtcyhfcGFyYW1zKSB7XG4gICAgY29uc3QgcGFyYW1zID0gX3BhcmFtcztcbiAgICBpZiAoIXBhcmFtcylcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSBcInN0cmluZ1wiKVxuICAgICAgICByZXR1cm4geyBlcnJvcjogKCkgPT4gcGFyYW1zIH07XG4gICAgaWYgKHBhcmFtcz8ubWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwYXJhbXM/LmVycm9yICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc3BlY2lmeSBib3RoIGBtZXNzYWdlYCBhbmQgYGVycm9yYCBwYXJhbXNcIik7XG4gICAgICAgIHBhcmFtcy5lcnJvciA9IHBhcmFtcy5tZXNzYWdlO1xuICAgIH1cbiAgICBkZWxldGUgcGFyYW1zLm1lc3NhZ2U7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuZXJyb3IgPT09IFwic3RyaW5nXCIpXG4gICAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgZXJyb3I6ICgpID0+IHBhcmFtcy5lcnJvciB9O1xuICAgIHJldHVybiBwYXJhbXM7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJhbnNwYXJlbnRQcm94eShnZXR0ZXIpIHtcbiAgICBsZXQgdGFyZ2V0O1xuICAgIHJldHVybiBuZXcgUHJveHkoe30sIHtcbiAgICAgICAgZ2V0KF8sIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICB0YXJnZXQgPz8gKHRhcmdldCA9IGdldHRlcigpKTtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KF8sIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgICAgdGFyZ2V0ID8/ICh0YXJnZXQgPSBnZXR0ZXIoKSk7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpO1xuICAgICAgICB9LFxuICAgICAgICBoYXMoXywgcHJvcCkge1xuICAgICAgICAgICAgdGFyZ2V0ID8/ICh0YXJnZXQgPSBnZXR0ZXIoKSk7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlUHJvcGVydHkoXywgcHJvcCkge1xuICAgICAgICAgICAgdGFyZ2V0ID8/ICh0YXJnZXQgPSBnZXR0ZXIoKSk7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3ApO1xuICAgICAgICB9LFxuICAgICAgICBvd25LZXlzKF8pIHtcbiAgICAgICAgICAgIHRhcmdldCA/PyAodGFyZ2V0ID0gZ2V0dGVyKCkpO1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3Qub3duS2V5cyh0YXJnZXQpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXywgcHJvcCkge1xuICAgICAgICAgICAgdGFyZ2V0ID8/ICh0YXJnZXQgPSBnZXR0ZXIoKSk7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVmaW5lUHJvcGVydHkoXywgcHJvcCwgZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgdGFyZ2V0ID8/ICh0YXJnZXQgPSBnZXR0ZXIoKSk7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3AsIGRlc2NyaXB0b3IpO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeVByaW1pdGl2ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYmlnaW50XCIpXG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpICsgXCJuXCI7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgcmV0dXJuIGBcIiR7dmFsdWV9XCJgO1xuICAgIHJldHVybiBgJHt2YWx1ZX1gO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9wdGlvbmFsS2V5cyhzaGFwZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzaGFwZSkuZmlsdGVyKChrKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGFwZVtrXS5fem9kLm9wdGluID09PSBcIm9wdGlvbmFsXCIgJiYgc2hhcGVba10uX3pvZC5vcHRvdXQgPT09IFwib3B0aW9uYWxcIjtcbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCBOVU1CRVJfRk9STUFUX1JBTkdFUyA9IHtcbiAgICBzYWZlaW50OiBbTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIsIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXSxcbiAgICBpbnQzMjogWy0yMTQ3NDgzNjQ4LCAyMTQ3NDgzNjQ3XSxcbiAgICB1aW50MzI6IFswLCA0Mjk0OTY3Mjk1XSxcbiAgICBmbG9hdDMyOiBbLTMuNDAyODIzNDY2Mzg1Mjg4NmUzOCwgMy40MDI4MjM0NjYzODUyODg2ZTM4XSxcbiAgICBmbG9hdDY0OiBbLU51bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUVdLFxufTtcbmV4cG9ydCBjb25zdCBCSUdJTlRfRk9STUFUX1JBTkdFUyA9IHtcbiAgICBpbnQ2NDogWy8qIEBfX1BVUkVfXyovIEJpZ0ludChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIpLCAvKiBAX19QVVJFX18qLyBCaWdJbnQoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIpXSxcbiAgICB1aW50NjQ6IFsvKiBAX19QVVJFX18qLyBCaWdJbnQoMCksIC8qIEBfX1BVUkVfXyovIEJpZ0ludChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIpXSxcbn07XG5leHBvcnQgZnVuY3Rpb24gcGljayhzY2hlbWEsIG1hc2spIHtcbiAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgIGNvbnN0IGN1cnJEZWYgPSBzY2hlbWEuX3pvZC5kZWY7IC8vLnNoYXBlO1xuICAgIGZvciAoY29uc3Qga2V5IGluIG1hc2spIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIGN1cnJEZWYuc2hhcGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXplZCBrZXk6IFwiJHtrZXl9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1hc2tba2V5XSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAvLyBwaWNrIGtleVxuICAgICAgICBuZXdTaGFwZVtrZXldID0gY3VyckRlZi5zaGFwZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gY2xvbmUoc2NoZW1hLCB7XG4gICAgICAgIC4uLnNjaGVtYS5fem9kLmRlZixcbiAgICAgICAgc2hhcGU6IG5ld1NoYXBlLFxuICAgICAgICBjaGVja3M6IFtdLFxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9taXQoc2NoZW1hLCBtYXNrKSB7XG4gICAgY29uc3QgbmV3U2hhcGUgPSB7IC4uLnNjaGVtYS5fem9kLmRlZi5zaGFwZSB9O1xuICAgIGNvbnN0IGN1cnJEZWYgPSBzY2hlbWEuX3pvZC5kZWY7IC8vLnNoYXBlO1xuICAgIGZvciAoY29uc3Qga2V5IGluIG1hc2spIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIGN1cnJEZWYuc2hhcGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXplZCBrZXk6IFwiJHtrZXl9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1hc2tba2V5XSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBkZWxldGUgbmV3U2hhcGVba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIGNsb25lKHNjaGVtYSwge1xuICAgICAgICAuLi5zY2hlbWEuX3pvZC5kZWYsXG4gICAgICAgIHNoYXBlOiBuZXdTaGFwZSxcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQoc2NoZW1hLCBzaGFwZSkge1xuICAgIGNvbnN0IGRlZiA9IHtcbiAgICAgICAgLi4uc2NoZW1hLl96b2QuZGVmLFxuICAgICAgICBnZXQgc2hhcGUoKSB7XG4gICAgICAgICAgICBjb25zdCBfc2hhcGUgPSB7IC4uLnNjaGVtYS5fem9kLmRlZi5zaGFwZSwgLi4uc2hhcGUgfTtcbiAgICAgICAgICAgIGFzc2lnblByb3AodGhpcywgXCJzaGFwZVwiLCBfc2hhcGUpOyAvLyBzZWxmLWNhY2hpbmdcbiAgICAgICAgICAgIHJldHVybiBfc2hhcGU7XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrczogW10sIC8vIGRlbGV0ZSBleGlzdGluZyBjaGVja3NcbiAgICB9O1xuICAgIHJldHVybiBjbG9uZShzY2hlbWEsIGRlZik7XG59XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYSwgYikge1xuICAgIHJldHVybiBjbG9uZShhLCB7XG4gICAgICAgIC4uLmEuX3pvZC5kZWYsXG4gICAgICAgIGdldCBzaGFwZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IF9zaGFwZSA9IHsgLi4uYS5fem9kLmRlZi5zaGFwZSwgLi4uYi5fem9kLmRlZi5zaGFwZSB9O1xuICAgICAgICAgICAgYXNzaWduUHJvcCh0aGlzLCBcInNoYXBlXCIsIF9zaGFwZSk7IC8vIHNlbGYtY2FjaGluZ1xuICAgICAgICAgICAgcmV0dXJuIF9zaGFwZTtcbiAgICAgICAgfSxcbiAgICAgICAgY2F0Y2hhbGw6IGIuX3pvZC5kZWYuY2F0Y2hhbGwsXG4gICAgICAgIGNoZWNrczogW10sIC8vIGRlbGV0ZSBleGlzdGluZyBjaGVja3NcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aWFsKENsYXNzLCBzY2hlbWEsIG1hc2spIHtcbiAgICBjb25zdCBvbGRTaGFwZSA9IHNjaGVtYS5fem9kLmRlZi5zaGFwZTtcbiAgICBjb25zdCBzaGFwZSA9IHsgLi4ub2xkU2hhcGUgfTtcbiAgICBpZiAobWFzaykge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBtYXNrKSB7XG4gICAgICAgICAgICBpZiAoIShrZXkgaW4gb2xkU2hhcGUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQga2V5OiBcIiR7a2V5fVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW1hc2tba2V5XSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHNoYXBlW2tleV0gPSBDbGFzc1xuICAgICAgICAgICAgICAgID8gbmV3IENsYXNzKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJvcHRpb25hbFwiLFxuICAgICAgICAgICAgICAgICAgICBpbm5lclR5cGU6IG9sZFNoYXBlW2tleV0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IG9sZFNoYXBlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9sZFNoYXBlKSB7XG4gICAgICAgICAgICBzaGFwZVtrZXldID0gQ2xhc3NcbiAgICAgICAgICAgICAgICA/IG5ldyBDbGFzcyh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwib3B0aW9uYWxcIixcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJUeXBlOiBvbGRTaGFwZVtrZXldLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBvbGRTaGFwZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbG9uZShzY2hlbWEsIHtcbiAgICAgICAgLi4uc2NoZW1hLl96b2QuZGVmLFxuICAgICAgICBzaGFwZSxcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlZChDbGFzcywgc2NoZW1hLCBtYXNrKSB7XG4gICAgY29uc3Qgb2xkU2hhcGUgPSBzY2hlbWEuX3pvZC5kZWYuc2hhcGU7XG4gICAgY29uc3Qgc2hhcGUgPSB7IC4uLm9sZFNoYXBlIH07XG4gICAgaWYgKG1hc2spIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbWFzaykge1xuICAgICAgICAgICAgaWYgKCEoa2V5IGluIHNoYXBlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIGtleTogXCIke2tleX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFtYXNrW2tleV0pXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAvLyBvdmVyd3JpdGUgd2l0aCBub24tb3B0aW9uYWxcbiAgICAgICAgICAgIHNoYXBlW2tleV0gPSBuZXcgQ2xhc3Moe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibm9ub3B0aW9uYWxcIixcbiAgICAgICAgICAgICAgICBpbm5lclR5cGU6IG9sZFNoYXBlW2tleV0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2xkU2hhcGUpIHtcbiAgICAgICAgICAgIC8vIG92ZXJ3cml0ZSB3aXRoIG5vbi1vcHRpb25hbFxuICAgICAgICAgICAgc2hhcGVba2V5XSA9IG5ldyBDbGFzcyh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJub25vcHRpb25hbFwiLFxuICAgICAgICAgICAgICAgIGlubmVyVHlwZTogb2xkU2hhcGVba2V5XSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbG9uZShzY2hlbWEsIHtcbiAgICAgICAgLi4uc2NoZW1hLl96b2QuZGVmLFxuICAgICAgICBzaGFwZSxcbiAgICAgICAgLy8gb3B0aW9uYWw6IFtdLFxuICAgICAgICBjaGVja3M6IFtdLFxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFib3J0ZWQoeCwgc3RhcnRJbmRleCA9IDApIHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IHguaXNzdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh4Lmlzc3Vlc1tpXS5jb250aW51ZSAhPT0gdHJ1ZSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJlZml4SXNzdWVzKHBhdGgsIGlzc3Vlcykge1xuICAgIHJldHVybiBpc3N1ZXMubWFwKChpc3MpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSBpc3MpLnBhdGggPz8gKF9hLnBhdGggPSBbXSk7XG4gICAgICAgIGlzcy5wYXRoLnVuc2hpZnQocGF0aCk7XG4gICAgICAgIHJldHVybiBpc3M7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdW53cmFwTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiID8gbWVzc2FnZSA6IG1lc3NhZ2U/Lm1lc3NhZ2U7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluYWxpemVJc3N1ZShpc3MsIGN0eCwgY29uZmlnKSB7XG4gICAgY29uc3QgZnVsbCA9IHsgLi4uaXNzLCBwYXRoOiBpc3MucGF0aCA/PyBbXSB9O1xuICAgIC8vIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgIGlmICghaXNzLm1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHVud3JhcE1lc3NhZ2UoaXNzLmluc3Q/Ll96b2QuZGVmPy5lcnJvcj8uKGlzcykpID8/XG4gICAgICAgICAgICB1bndyYXBNZXNzYWdlKGN0eD8uZXJyb3I/Lihpc3MpKSA/P1xuICAgICAgICAgICAgdW53cmFwTWVzc2FnZShjb25maWcuY3VzdG9tRXJyb3I/Lihpc3MpKSA/P1xuICAgICAgICAgICAgdW53cmFwTWVzc2FnZShjb25maWcubG9jYWxlRXJyb3I/Lihpc3MpKSA/P1xuICAgICAgICAgICAgXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgICAgIGZ1bGwubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfVxuICAgIC8vIGRlbGV0ZSAoZnVsbCBhcyBhbnkpLmRlZjtcbiAgICBkZWxldGUgZnVsbC5pbnN0O1xuICAgIGRlbGV0ZSBmdWxsLmNvbnRpbnVlO1xuICAgIGlmICghY3R4Py5yZXBvcnRJbnB1dCkge1xuICAgICAgICBkZWxldGUgZnVsbC5pbnB1dDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2l6YWJsZU9yaWdpbihpbnB1dCkge1xuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFNldClcbiAgICAgICAgcmV0dXJuIFwic2V0XCI7XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgTWFwKVxuICAgICAgICByZXR1cm4gXCJtYXBcIjtcbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBGaWxlKVxuICAgICAgICByZXR1cm4gXCJmaWxlXCI7XG4gICAgcmV0dXJuIFwidW5rbm93blwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldExlbmd0aGFibGVPcmlnaW4oaW5wdXQpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpXG4gICAgICAgIHJldHVybiBcImFycmF5XCI7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgcmV0dXJuIFwic3RyaW5nXCI7XG4gICAgcmV0dXJuIFwidW5rbm93blwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzc3VlKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBbaXNzLCBpbnB1dCwgaW5zdF0gPSBhcmdzO1xuICAgIGlmICh0eXBlb2YgaXNzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiBpc3MsXG4gICAgICAgICAgICBjb2RlOiBcImN1c3RvbVwiLFxuICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICBpbnN0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyAuLi5pc3MgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjbGVhbkVudW0ob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG9iailcbiAgICAgICAgLmZpbHRlcigoW2ssIF9dKSA9PiB7XG4gICAgICAgIC8vIHJldHVybiB0cnVlIGlmIE5hTiwgbWVhbmluZyBpdCdzIG5vdCBhIG51bWJlciwgdGh1cyBhIHN0cmluZyBrZXlcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc05hTihOdW1iZXIucGFyc2VJbnQoaywgMTApKTtcbiAgICB9KVxuICAgICAgICAubWFwKChlbCkgPT4gZWxbMV0pO1xufVxuLy8gaW5zdGFuY2VvZlxuZXhwb3J0IGNsYXNzIENsYXNzIHtcbiAgICBjb25zdHJ1Y3RvciguLi5fYXJncykgeyB9XG59XG4iLCJpbXBvcnQgeyAkY29uc3RydWN0b3IgfSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gXCIuL3V0aWwuanNcIjtcbmNvbnN0IGluaXRpYWxpemVyID0gKGluc3QsIGRlZikgPT4ge1xuICAgIGluc3QubmFtZSA9IFwiJFpvZEVycm9yXCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGluc3QsIFwiX3pvZFwiLCB7XG4gICAgICAgIHZhbHVlOiBpbnN0Ll96b2QsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnN0LCBcImlzc3Vlc1wiLCB7XG4gICAgICAgIHZhbHVlOiBkZWYsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnN0LCBcIm1lc3NhZ2VcIiwge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGVmLCB1dGlsLmpzb25TdHJpbmdpZnlSZXBsYWNlciwgMik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIC8vIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0ICRab2RFcnJvciA9ICRjb25zdHJ1Y3RvcihcIiRab2RFcnJvclwiLCBpbml0aWFsaXplcik7XG5leHBvcnQgY29uc3QgJFpvZFJlYWxFcnJvciA9ICRjb25zdHJ1Y3RvcihcIiRab2RFcnJvclwiLCBpbml0aWFsaXplciwgeyBQYXJlbnQ6IEVycm9yIH0pO1xuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5FcnJvcihlcnJvciwgbWFwcGVyID0gKGlzc3VlKSA9PiBpc3N1ZS5tZXNzYWdlKSB7XG4gICAgY29uc3QgZmllbGRFcnJvcnMgPSB7fTtcbiAgICBjb25zdCBmb3JtRXJyb3JzID0gW107XG4gICAgZm9yIChjb25zdCBzdWIgb2YgZXJyb3IuaXNzdWVzKSB7XG4gICAgICAgIGlmIChzdWIucGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaWVsZEVycm9yc1tzdWIucGF0aFswXV0gPSBmaWVsZEVycm9yc1tzdWIucGF0aFswXV0gfHwgW107XG4gICAgICAgICAgICBmaWVsZEVycm9yc1tzdWIucGF0aFswXV0ucHVzaChtYXBwZXIoc3ViKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3JtRXJyb3JzLnB1c2gobWFwcGVyKHN1YikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGZvcm1FcnJvcnMsIGZpZWxkRXJyb3JzIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RXJyb3IoZXJyb3IsIF9tYXBwZXIpIHtcbiAgICBjb25zdCBtYXBwZXIgPSBfbWFwcGVyIHx8XG4gICAgICAgIGZ1bmN0aW9uIChpc3N1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGlzc3VlLm1lc3NhZ2U7XG4gICAgICAgIH07XG4gICAgY29uc3QgZmllbGRFcnJvcnMgPSB7IF9lcnJvcnM6IFtdIH07XG4gICAgY29uc3QgcHJvY2Vzc0Vycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaXNzdWUgb2YgZXJyb3IuaXNzdWVzKSB7XG4gICAgICAgICAgICBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX3VuaW9uXCIgJiYgaXNzdWUuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlzc3VlLmVycm9ycy5tYXAoKGlzc3VlcykgPT4gcHJvY2Vzc0Vycm9yKHsgaXNzdWVzIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLmNvZGUgPT09IFwiaW52YWxpZF9rZXlcIikge1xuICAgICAgICAgICAgICAgIHByb2Nlc3NFcnJvcih7IGlzc3VlczogaXNzdWUuaXNzdWVzIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX2VsZW1lbnRcIikge1xuICAgICAgICAgICAgICAgIHByb2Nlc3NFcnJvcih7IGlzc3VlczogaXNzdWUuaXNzdWVzIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUucGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBmaWVsZEVycm9ycy5fZXJyb3JzLnB1c2gobWFwcGVyKGlzc3VlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VyciA9IGZpZWxkRXJyb3JzO1xuICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IGlzc3VlLnBhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gaXNzdWUucGF0aFtpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVybWluYWwgPSBpID09PSBpc3N1ZS5wYXRoLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGVybWluYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCB7IF9lcnJvcnM6IFtdIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyW2VsXS5fZXJyb3JzLnB1c2gobWFwcGVyKGlzc3VlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VyciA9IGN1cnJbZWxdO1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBwcm9jZXNzRXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiBmaWVsZEVycm9ycztcbn1cbmV4cG9ydCBmdW5jdGlvbiB0cmVlaWZ5RXJyb3IoZXJyb3IsIF9tYXBwZXIpIHtcbiAgICBjb25zdCBtYXBwZXIgPSBfbWFwcGVyIHx8XG4gICAgICAgIGZ1bmN0aW9uIChpc3N1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGlzc3VlLm1lc3NhZ2U7XG4gICAgICAgIH07XG4gICAgY29uc3QgcmVzdWx0ID0geyBlcnJvcnM6IFtdIH07XG4gICAgY29uc3QgcHJvY2Vzc0Vycm9yID0gKGVycm9yLCBwYXRoID0gW10pID0+IHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgZm9yIChjb25zdCBpc3N1ZSBvZiBlcnJvci5pc3N1ZXMpIHtcbiAgICAgICAgICAgIGlmIChpc3N1ZS5jb2RlID09PSBcImludmFsaWRfdW5pb25cIiAmJiBpc3N1ZS5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVndWxhciB1bmlvbiBlcnJvclxuICAgICAgICAgICAgICAgIGlzc3VlLmVycm9ycy5tYXAoKGlzc3VlcykgPT4gcHJvY2Vzc0Vycm9yKHsgaXNzdWVzIH0sIGlzc3VlLnBhdGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLmNvZGUgPT09IFwiaW52YWxpZF9rZXlcIikge1xuICAgICAgICAgICAgICAgIHByb2Nlc3NFcnJvcih7IGlzc3VlczogaXNzdWUuaXNzdWVzIH0sIGlzc3VlLnBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX2VsZW1lbnRcIikge1xuICAgICAgICAgICAgICAgIHByb2Nlc3NFcnJvcih7IGlzc3VlczogaXNzdWUuaXNzdWVzIH0sIGlzc3VlLnBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZnVsbHBhdGggPSBbLi4ucGF0aCwgLi4uaXNzdWUucGF0aF07XG4gICAgICAgICAgICAgICAgaWYgKGZ1bGxwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZXJyb3JzLnB1c2gobWFwcGVyKGlzc3VlKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgY3VyciA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBmdWxscGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSBmdWxscGF0aFtpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVybWluYWwgPSBpID09PSBmdWxscGF0aC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyLnByb3BlcnRpZXMgPz8gKGN1cnIucHJvcGVydGllcyA9IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IGN1cnIucHJvcGVydGllcylbZWxdID8/IChfYVtlbF0gPSB7IGVycm9yczogW10gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyID0gY3Vyci5wcm9wZXJ0aWVzW2VsXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnIuaXRlbXMgPz8gKGN1cnIuaXRlbXMgPSBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAoX2IgPSBjdXJyLml0ZW1zKVtlbF0gPz8gKF9iW2VsXSA9IHsgZXJyb3JzOiBbXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnIgPSBjdXJyLml0ZW1zW2VsXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGVybWluYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnIuZXJyb3JzLnB1c2gobWFwcGVyKGlzc3VlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcHJvY2Vzc0Vycm9yKGVycm9yKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLyoqIEZvcm1hdCBhIFpvZEVycm9yIGFzIGEgaHVtYW4tcmVhZGFibGUgc3RyaW5nIGluIHRoZSBmb2xsb3dpbmcgZm9ybS5cbiAqXG4gKiBGcm9tXG4gKlxuICogYGBgdHNcbiAqIFpvZEVycm9yIHtcbiAqICAgaXNzdWVzOiBbXG4gKiAgICAge1xuICogICAgICAgZXhwZWN0ZWQ6ICdzdHJpbmcnLFxuICogICAgICAgY29kZTogJ2ludmFsaWRfdHlwZScsXG4gKiAgICAgICBwYXRoOiBbICd1c2VybmFtZScgXSxcbiAqICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIGlucHV0OiBleHBlY3RlZCBzdHJpbmcnXG4gKiAgICAgfSxcbiAqICAgICB7XG4gKiAgICAgICBleHBlY3RlZDogJ251bWJlcicsXG4gKiAgICAgICBjb2RlOiAnaW52YWxpZF90eXBlJyxcbiAqICAgICAgIHBhdGg6IFsgJ2Zhdm9yaXRlTnVtYmVycycsIDEgXSxcbiAqICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIGlucHV0OiBleHBlY3RlZCBudW1iZXInXG4gKiAgICAgfVxuICogICBdO1xuICogfVxuICogYGBgXG4gKlxuICogdG9cbiAqXG4gKiBgYGBcbiAqIHVzZXJuYW1lXG4gKiAgIOKcliBFeHBlY3RlZCBudW1iZXIsIHJlY2VpdmVkIHN0cmluZyBhdCBcInVzZXJuYW1lXG4gKiBmYXZvcml0ZU51bWJlcnNbMF1cbiAqICAg4pyWIEludmFsaWQgaW5wdXQ6IGV4cGVjdGVkIG51bWJlclxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RvdFBhdGgocGF0aCkge1xuICAgIGNvbnN0IHNlZ3MgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHNlZyBvZiBwYXRoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VnID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgc2Vncy5wdXNoKGBbJHtzZWd9XWApO1xuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc2VnID09PSBcInN5bWJvbFwiKVxuICAgICAgICAgICAgc2Vncy5wdXNoKGBbJHtKU09OLnN0cmluZ2lmeShTdHJpbmcoc2VnKSl9XWApO1xuICAgICAgICBlbHNlIGlmICgvW15cXHckXS8udGVzdChzZWcpKVxuICAgICAgICAgICAgc2Vncy5wdXNoKGBbJHtKU09OLnN0cmluZ2lmeShzZWcpfV1gKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2Vncy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgc2Vncy5wdXNoKFwiLlwiKTtcbiAgICAgICAgICAgIHNlZ3MucHVzaChzZWcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWdzLmpvaW4oXCJcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJldHRpZnlFcnJvcihlcnJvcikge1xuICAgIGNvbnN0IGxpbmVzID0gW107XG4gICAgLy8gc29ydCBieSBwYXRoIGxlbmd0aFxuICAgIGNvbnN0IGlzc3VlcyA9IFsuLi5lcnJvci5pc3N1ZXNdLnNvcnQoKGEsIGIpID0+IGEucGF0aC5sZW5ndGggLSBiLnBhdGgubGVuZ3RoKTtcbiAgICAvLyBQcm9jZXNzIGVhY2ggaXNzdWVcbiAgICBmb3IgKGNvbnN0IGlzc3VlIG9mIGlzc3Vlcykge1xuICAgICAgICBsaW5lcy5wdXNoKGDinJYgJHtpc3N1ZS5tZXNzYWdlfWApO1xuICAgICAgICBpZiAoaXNzdWUucGF0aD8ubGVuZ3RoKVxuICAgICAgICAgICAgbGluZXMucHVzaChgICDihpIgYXQgJHt0b0RvdFBhdGgoaXNzdWUucGF0aCl9YCk7XG4gICAgfVxuICAgIC8vIENvbnZlcnQgTWFwIHRvIGZvcm1hdHRlZCBzdHJpbmdcbiAgICByZXR1cm4gbGluZXMuam9pbihcIlxcblwiKTtcbn1cbiIsImltcG9ydCAqIGFzIGNvcmUgZnJvbSBcInpvZC92NC9jb3JlXCI7XG5pbXBvcnQgeyAkWm9kRXJyb3IgfSBmcm9tIFwiem9kL3Y0L2NvcmVcIjtcbmNvbnN0IGluaXRpYWxpemVyID0gKGluc3QsIGlzc3VlcykgPT4ge1xuICAgICRab2RFcnJvci5pbml0KGluc3QsIGlzc3Vlcyk7XG4gICAgaW5zdC5uYW1lID0gXCJab2RFcnJvclwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGluc3QsIHtcbiAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICB2YWx1ZTogKG1hcHBlcikgPT4gY29yZS5mb3JtYXRFcnJvcihpbnN0LCBtYXBwZXIpLFxuICAgICAgICAgICAgLy8gZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGZsYXR0ZW46IHtcbiAgICAgICAgICAgIHZhbHVlOiAobWFwcGVyKSA9PiBjb3JlLmZsYXR0ZW5FcnJvcihpbnN0LCBtYXBwZXIpLFxuICAgICAgICAgICAgLy8gZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGFkZElzc3VlOiB7XG4gICAgICAgICAgICB2YWx1ZTogKGlzc3VlKSA9PiBpbnN0Lmlzc3Vlcy5wdXNoKGlzc3VlKSxcbiAgICAgICAgICAgIC8vIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBhZGRJc3N1ZXM6IHtcbiAgICAgICAgICAgIHZhbHVlOiAoaXNzdWVzKSA9PiBpbnN0Lmlzc3Vlcy5wdXNoKC4uLmlzc3VlcyksXG4gICAgICAgICAgICAvLyBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgaXNFbXB0eToge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0Lmlzc3Vlcy5sZW5ndGggPT09IDA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgLy8gT2JqZWN0LmRlZmluZVByb3BlcnR5KGluc3QsIFwiaXNFbXB0eVwiLCB7XG4gICAgLy8gICBnZXQoKSB7XG4gICAgLy8gICAgIHJldHVybiBpbnN0Lmlzc3Vlcy5sZW5ndGggPT09IDA7XG4gICAgLy8gICB9LFxuICAgIC8vIH0pO1xufTtcbmV4cG9ydCBjb25zdCBab2RFcnJvciA9IGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kRXJyb3JcIiwgaW5pdGlhbGl6ZXIpO1xuZXhwb3J0IGNvbnN0IFpvZFJlYWxFcnJvciA9IGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kRXJyb3JcIiwgaW5pdGlhbGl6ZXIsIHtcbiAgICBQYXJlbnQ6IEVycm9yLFxufSk7XG4vLyAvKiogQGRlcHJlY2F0ZWQgVXNlIGB6LmNvcmUuJFpvZEVycm9yTWFwQ3R4YCBpbnN0ZWFkLiAqL1xuLy8gZXhwb3J0IHR5cGUgRXJyb3JNYXBDdHggPSBjb3JlLiRab2RFcnJvck1hcEN0eDtcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBjbGFzcz1cInJvdyBqdXN0aWZ5LWV2ZW5seVwiPlxuICAgIDxxLWZvcm0gY2xhc3M9XCJjb2wgY29sLXNtLTYgY29sLW1kLTRcIiBmaWxsZWQgQHN1Ym1pdD1cIm9uU3VibWl0XCI+XG4gICAgICA8cGFnZS10aXRsZSBpY29uPVwiZ3JvdXBfYWRkXCIgdGV4dD1cIkFkZCBTeXN0ZW1cIiAvPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwicS1wdC1ub25lXCI+XG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgdi1tb2RlbC50cmltPVwiaWRJbnB1dFwiXG4gICAgICAgICAgZmlsbGVkXG4gICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgbGFiZWw9XCJTeXN0ZW0gb3IgRGlzY29yZCBJRCAqXCJcbiAgICAgICAgICBpbnB1dC1zdHlsZT1cInRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2VcIlxuICAgICAgICAgIDpsb2FkaW5nPVwiaXNMb2FkaW5nXCJcbiAgICAgICAgICBib3R0b20tc2xvdHNcbiAgICAgICAgICA6ZXJyb3I9XCIhIWVycm9yTWVzc2FnZVwiXG4gICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJlcnJvck1lc3NhZ2VcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uIHYtaWY9XCJuZXdTeXNcIiBjbGFzcz1cInEtcHktbm9uZVwiPlxuICAgICAgICA8bGFiZWxlZC10aWxlXG4gICAgICAgICAgOmxhYmVsPVwibmV3U3lzLm5hbWUgfHwgJydcIlxuICAgICAgICAgIDpjYXB0aW9uPVwibmV3U3lzLnByb25vdW5zXCJcbiAgICAgICAgICA6aW1nPVwibmV3U3lzLmF2YXRhclVybFwiXG4gICAgICAgICAgOmZhbGxiYWNrLWljb249XCJtYXRHcm91cHNcIlxuICAgICAgICAgIHNpemU9XCIxMDAlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxxLXBhZ2Utc3RpY2t5IHBvc2l0aW9uPVwiYm90dG9tLWxlZnRcIiA6b2Zmc2V0PVwiWzE4LCAxOF1cIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmFiXG4gICAgICAgICAgY2xhc3M9XCJzZWxmLWVuZFwiXG4gICAgICAgICAgaWNvbj1cImFycm93X2JhY2tcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgdG89XCIvbWFuYWdlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS1wYWdlLXN0aWNreT5cbiAgICAgIDxxLXBhZ2Utc3RpY2t5IHBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCIgOm9mZnNldD1cIlsxOCwgMThdXCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGZhYlxuICAgICAgICAgIGNsYXNzPVwic2VsZi1lbmRcIlxuICAgICAgICAgIGljb249XCJzYXZlXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIDpkaXNhYmxlPVwiIW5ld1N5c1wiXG4gICAgICAgIC8+XG4gICAgICA8L3EtcGFnZS1zdGlja3k+XG4gICAgPC9xLWZvcm0+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHsgZGVib3VuY2UsIHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyBjb21wdXRlZCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5cbmltcG9ydCB7IHVzZVN5c3RlbVN0b3JlIH0gZnJvbSAnc3JjL3N0b3Jlcy9zeXN0ZW0tc3RvcmUnO1xuaW1wb3J0IHsgdXNlUGx1cmFsS2l0IH0gZnJvbSAnYm9vdC9wbHVyYWxLaXQnO1xuaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnc3JjL21vZGVscy9TeXN0ZW0nO1xuXG5pbXBvcnQgeyBtYXRHcm91cHMgfSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucyc7XG5pbXBvcnQgTGFiZWxlZFRpbGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvU3RhdHVzUGFnZS9UaWxlL0xhYmVsZWRUaWxlLnZ1ZSc7XG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gJ3NyYy9jb21wb25lbnRzL1BhZ2VUaXRsZS52dWUnO1xuaW1wb3J0IHsgaXM0MDQgfSBmcm9tICdzcmMvdXRpbCc7XG5pbXBvcnQgeyBab2RFcnJvciB9IGZyb20gJ3pvZC92NCc7XG5cbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IHN5c3RlbVN0b3JlID0gdXNlU3lzdGVtU3RvcmUoKTtcbmNvbnN0IHBsdXJhbEtpdCA9IHVzZVBsdXJhbEtpdCgpO1xuXG5jb25zdCBpZElucHV0ID0gcmVmKCcnKTtcbmNvbnN0IG5ld0lkID0gY29tcHV0ZWQoKCkgPT4gaWRJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcbmNvbnN0IG5ld1N5cyA9IHJlZjxTeXN0ZW0gfCBudWxsPihudWxsKTtcbmNvbnN0IGVycm9yTWVzc2FnZSA9IHJlZignJyk7XG5jb25zdCBpc0xvYWRpbmcgPSByZWYoZmFsc2UpO1xuXG5jb25zdCBvbkNoYW5nZSA9IGRlYm91bmNlKGFzeW5jIGZ1bmN0aW9uIChpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgbmV3U3lzLnZhbHVlID0gYXdhaXQgcGx1cmFsS2l0LmdldFN5c3RlbShpZCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFpvZEVycm9yKSB7XG4gICAgICBlcnJvck1lc3NhZ2UudmFsdWUgPSBgSW5wdXQgaXMgbm90IGEgUGx1cmFsS2l0IElELCBVVUlEIG9yIERpc2NvcmQgSURgO1xuICAgIH0gZWxzZSBpZiAoaXM0MDQoZSkpIHtcbiAgICAgIGVycm9yTWVzc2FnZS52YWx1ZSA9IGBDb3VsZG4ndCBmaW5kIHN5c3RlbSAke2lkfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIGlzTG9hZGluZy52YWx1ZSA9IGZhbHNlO1xuICB9XG59LCA1MDApO1xuXG53YXRjaChuZXdJZCwgKCkgPT4ge1xuICBuZXdTeXMudmFsdWUgPSBudWxsO1xuICBlcnJvck1lc3NhZ2UudmFsdWUgPSAnJztcblxuICBpZiAobmV3SWQudmFsdWUgPT0gJycpIHtcbiAgICBvbkNoYW5nZS5jYW5jZWwoKTtcbiAgICBpc0xvYWRpbmcudmFsdWUgPSBmYWxzZTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlzTG9hZGluZy52YWx1ZSA9IHRydWU7XG4gIG9uQ2hhbmdlKG5ld0lkLnZhbHVlKTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBvblN1Ym1pdCgpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzeXN0ZW1TdG9yZS5hZGQobmV3SWQudmFsdWUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGlzNDA0KGUpKSB7XG4gICAgICBlcnJvck1lc3NhZ2UudmFsdWUgPSBgQ291bGRuJ3QgZmluZCBzeXN0ZW0gJHtuZXdJZC52YWx1ZX1gO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRocm93IGU7XG4gIH1cblxuICAkcS5ub3RpZnkoJ1N5c3RlbSBBZGRlZCcpO1xuICByb3V0ZXIucHVzaCh7IHBhdGg6ICcvbWFuYWdlJyB9KTtcbn1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbImZvY3VzIiwicmVmIiwidmFsaWQiLCJjb21wIiwiaW5pdGlhbGl6ZXIiLCJfYSIsInV0aWwuanNvblN0cmluZ2lmeVJlcGxhY2VyIiwiZXJyb3IiLCJjb3JlLmZvcm1hdEVycm9yIiwiY29yZS5mbGF0dGVuRXJyb3IiLCJpc3N1ZXMiLCJjb3JlLiRjb25zdHJ1Y3RvciIsIl9vcGVuQmxvY2siLCJfY3JlYXRlQmxvY2siLCJfd2l0aEN0eCIsIl9jcmVhdGVWTm9kZSIsIl9jcmVhdGVDb21tZW50Vk5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQVNBLE1BQUEsUUFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEs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
