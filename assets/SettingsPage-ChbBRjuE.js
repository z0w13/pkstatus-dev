import { Q as QItemLabel, b as QItemSection, a as QItem } from "./QItem-4sCyJUzG.js";
import { Q as defineComponent, S as useQuasar, R as useSettingsStore, aD as useSystemStore, r as ref, d as computed, V as openBlock, aE as createElementBlock, Y as createVNode, X as withCtx, a1 as createTextVNode, a0 as QBtn, a2 as createBaseVNode, aF as Fragment, d0 as dayjs, db as migrate, dc as migrate$1, af as _export_sfc, aC as useServices, T as storeToRefs, da as debounce, aV as APIError, W as createBlock, aX as QInput, _ as unref, a4 as createCommentVNode, dd as shouldCheckForUpdates, a7 as QToggle, a8 as isRef, a6 as QSeparator, a3 as QIcon } from "./index-C1u-_TOv.js";
import { Q as QSelect } from "./QSelect-B3454tSI.js";
import { Q as QList } from "./QList-DQhRiMIt.js";
import { Q as QPage } from "./QPage-C2tXGOnV.js";
import { I as InitialFallbackAvatar } from "./InitialFallbackAvatar-B9wHc8ll.js";
import { P as PageTitle } from "./PageTitle-gQbGVrI-.js";
import "./QMenu-CRzTXqO9.js";
import "./format-esB8TFiE.js";
import "./index-DRTIEHtT.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BackupSection",
  emits: ["restore"],
  setup(__props, { emit: __emit }) {
    const $q = useQuasar();
    const settingsStore = useSettingsStore();
    const systemStore = useSystemStore();
    const fileInput = ref();
    const emit = __emit;
    function createBackupFile() {
      const backupData = {
        settings: JSON.parse(localStorage.getItem("settings") || "{}"),
        systems: JSON.parse(localStorage.getItem("systems") || "{}")
      };
      backupData.settings.settings.token = null;
      return new File(
        [JSON.stringify(backupData, null, 2)],
        `PKStatus-${dayjs().format("YYYYMMDD_HHmmss")}.json`,
        { type: "application/json" }
      );
    }
    const backupFile = ref(createBackupFile());
    const backupFileUrl = computed(() => URL.createObjectURL(backupFile.value));
    async function handleRestore() {
      var _a;
      if (!((_a = fileInput.value) == null ? void 0 : _a.files)) {
        return;
      }
      const file = fileInput.value.files[0];
      if (!file) {
        return;
      }
      try {
        const parsed = JSON.parse(await file.text());
        const settings = migrate(parsed.settings);
        const systems = migrate$1(parsed.systems);
        $q.dialog({
          title: "Warning!",
          message: "This will overwrite all your PKStatus settings and tracked systems, are you sure?",
          persistent: true,
          ok: {
            push: true,
            icon: "warning",
            label: "Yes, Overwrite!",
            color: "negative"
          },
          cancel: {
            push: true,
            color: "primary"
          }
        }).onOk(() => {
          if (!settings.settings.token) {
            settings.settings.token = settingsStore.token;
          }
          localStorage.setItem("settings", JSON.stringify(settings));
          localStorage.setItem("systems", JSON.stringify(systems));
          settingsStore.$hydrate();
          systemStore.$hydrate();
          $q.notify({
            icon: "check",
            type: "positive",
            message: "Backup restored!"
          });
          emit("restore");
        });
      } catch (e) {
        if (e instanceof SyntaxError) {
          $q.notify({
            icon: "error",
            type: "negative",
            message: "Error parsing backup file",
            caption: e.message
          });
        } else {
          throw e;
        }
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createVNode(QItemLabel, { header: "" }, {
            default: withCtx(() => [
              createTextVNode("Backup & Restore")
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QItem, null, {
            default: withCtx(() => [
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    color: "positive",
                    label: "backup",
                    href: backupFileUrl.value,
                    download: backupFile.value.name
                  }, null, 8, ["href", "download"])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    color: "negative",
                    label: "restore",
                    onClick: _cache[0] || (_cache[0] = ($event) => {
                      var _a;
                      return (_a = fileInput.value) == null ? void 0 : _a.click();
                    })
                  }),
                  createBaseVNode(
                    "input",
                    {
                      ref_key: "fileInput",
                      ref: fileInput,
                      accept: ".json",
                      type: "file",
                      style: { "display": "none" },
                      onChange: handleRestore
                    },
                    null,
                    544
                    /* NEED_HYDRATION, NEED_PATCH */
                  )
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const BackupSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "/home/zowie/dev/pkstatus/src/pages/Settings/BackupSection.vue"]]);
const _hoisted_1 = { class: "col col-sm-6 col-md-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SettingsPage",
  setup(__props) {
    const $q = useQuasar();
    const { systemCache } = useServices();
    const settingsStore = useSettingsStore();
    const {
      detectPronouns,
      fronterUpdateInterval,
      showCardDetails,
      systemUpdateInterval,
      checkUpdates,
      token
    } = storeToRefs(settingsStore);
    const newToken = ref(token.value);
    const tokenChecking = ref(false);
    const tokenError = ref(false);
    const tokenSystem = ref(null);
    function onTokenChange() {
      tokenChecking.value = true;
      tokenSystem.value = null;
      tokenError.value = false;
      checkToken();
    }
    const checkToken = debounce(async () => {
      if (!newToken.value) {
        tokenChecking.value = false;
        token.value = "";
        return $q.notify({ type: "positive", message: "Token Cleared" });
      }
      try {
        tokenChecking.value = true;
        tokenSystem.value = await systemCache.fetchToken(newToken.value);
        $q.notify({
          type: "positive",
          message: `Token Updated: ${tokenSystem.value.getName(detectPronouns.value)}`
        });
        token.value = newToken.value;
      } catch (e) {
        if (e instanceof APIError && e.status == "401") {
          tokenError.value = true;
          newToken.value = null;
        }
      }
      tokenChecking.value = false;
    }, 500);
    const onChange = debounce(() => {
      $q.notify("Settings Updated");
    }, 500);
    const options = [
      { label: "10 Seconds", value: 10 },
      { label: "1 Minute", value: 60 },
      { label: "5 Minutes", value: 300 },
      { label: "1 Hour", value: 3600 },
      { label: "6 Hour", value: 3600 * 6 },
      { label: "1 Day", value: 86400 }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "row justify-evenly" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(PageTitle, {
              icon: "settings",
              text: "Settings"
            }),
            createVNode(QList, { class: "bg-lighten q-pb-sm" }, {
              default: withCtx(() => [
                createVNode(QItemLabel, { header: "" }, {
                  default: withCtx(() => [
                    createTextVNode("General Settings")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(QItem, { tag: "label" }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("PluralKit Token")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(QItemLabel, { caption: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" (optional) PluralKit token, only needed for the switching UI ")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(QInput, {
                          modelValue: newToken.value,
                          "onUpdate:modelValue": [
                            _cache[0] || (_cache[0] = ($event) => newToken.value = $event),
                            onTokenChange
                          ],
                          modelModifiers: { trim: true },
                          type: "password",
                          label: "Token",
                          "bottom-slots": "",
                          clearable: "",
                          loading: tokenChecking.value,
                          error: tokenError.value,
                          "error-message": "Invalid Token"
                        }, {
                          prepend: withCtx(() => [
                            tokenSystem.value ? (openBlock(), createBlock(InitialFallbackAvatar, {
                              key: 0,
                              url: tokenSystem.value.avatarUrl,
                              name: tokenSystem.value.getName(unref(detectPronouns))
                            }, null, 8, ["url", "name"])) : createCommentVNode("v-if", true)
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue", "loading", "error"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                unref(shouldCheckForUpdates)(unref($q)) ? (openBlock(), createBlock(QItem, {
                  key: 0,
                  tag: "label"
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("Check for Updates")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(QItemLabel, { caption: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Periodically check GitHub to see if there's a new version of PKStatus available ")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QToggle, {
                          modelValue: unref(checkUpdates),
                          "onUpdate:modelValue": [
                            _cache[1] || (_cache[1] = ($event) => isRef(checkUpdates) ? checkUpdates.value = $event : null),
                            unref(onChange)
                          ]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })) : createCommentVNode("v-if", true),
                createVNode(QSeparator, { spaced: "" }),
                createVNode(QItemLabel, { header: "" }, {
                  default: withCtx(() => [
                    createTextVNode("Display Settings")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(QItem, { tag: "label" }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("Detect Pronouns")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(QItemLabel, { caption: "" }, {
                          default: withCtx(() => [
                            createTextVNode("Detect pronouns in system and member names and remove them, also shows them in the pronoun field if no pronouns are set ")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QToggle, {
                          modelValue: unref(detectPronouns),
                          "onUpdate:modelValue": [
                            _cache[2] || (_cache[2] = ($event) => isRef(detectPronouns) ? detectPronouns.value = $event : null),
                            unref(onChange)
                          ]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(QItem, { tag: "label" }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("Show Card Details")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(QItemLabel, { caption: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Show the table with system/member details on the popup info cards, or only name and description if disabled ")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QToggle, {
                          modelValue: unref(showCardDetails),
                          "onUpdate:modelValue": [
                            _cache[3] || (_cache[3] = ($event) => isRef(showCardDetails) ? showCardDetails.value = $event : null),
                            unref(onChange)
                          ]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(QSeparator, { spaced: "" }),
                createVNode(QItemLabel, { header: "" }, {
                  default: withCtx(() => [
                    createTextVNode("Update Settings")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(QItem, null, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QSelect, {
                          modelValue: unref(systemUpdateInterval),
                          "onUpdate:modelValue": [
                            _cache[4] || (_cache[4] = ($event) => isRef(systemUpdateInterval) ? systemUpdateInterval.value = $event : null),
                            unref(onChange)
                          ],
                          label: "System Update Interval",
                          options,
                          "emit-value": "",
                          "map-options": ""
                        }, {
                          prepend: withCtx(() => [
                            createVNode(QIcon, { name: "schedule" })
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(QItem, null, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QSelect, {
                          modelValue: unref(fronterUpdateInterval),
                          "onUpdate:modelValue": [
                            _cache[5] || (_cache[5] = ($event) => isRef(fronterUpdateInterval) ? fronterUpdateInterval.value = $event : null),
                            unref(onChange)
                          ],
                          label: "Fronter Update Interval",
                          options,
                          "emit-value": "",
                          "map-options": ""
                        }, {
                          prepend: withCtx(() => [
                            createVNode(QIcon, { name: "schedule" })
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(QSeparator, { spaced: "" }),
                createVNode(BackupSection, {
                  onRestore: _cache[6] || (_cache[6] = ($event) => {
                    newToken.value = unref(token);
                    onTokenChange();
                  })
                })
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
const SettingsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/zowie/dev/pkstatus/src/pages/SettingsPage.vue"]]);
export {
  SettingsPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ3NQYWdlLUNoYkJSanVFLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvU2V0dGluZ3MvQmFja3VwU2VjdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvU2V0dGluZ3NQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWl0ZW0tbGFiZWwgaGVhZGVyPkJhY2t1cCAmIFJlc3RvcmU8L3EtaXRlbS1sYWJlbD5cbiAgPHEtaXRlbT5cbiAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1idG5cbiAgICAgICAgY29sb3I9XCJwb3NpdGl2ZVwiXG4gICAgICAgIGxhYmVsPVwiYmFja3VwXCJcbiAgICAgICAgOmhyZWY9XCJiYWNrdXBGaWxlVXJsXCJcbiAgICAgICAgOmRvd25sb2FkPVwiYmFja3VwRmlsZS5uYW1lXCJcbiAgICAgIC8+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1idG4gY29sb3I9XCJuZWdhdGl2ZVwiIGxhYmVsPVwicmVzdG9yZVwiIEBjbGljaz1cImZpbGVJbnB1dD8uY2xpY2soKVwiIC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgcmVmPVwiZmlsZUlucHV0XCJcbiAgICAgICAgYWNjZXB0PVwiLmpzb25cIlxuICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiXG4gICAgICAgIEBjaGFuZ2U9XCJoYW5kbGVSZXN0b3JlXCJcbiAgICAgIC8+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgPC9xLWl0ZW0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCB7IGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnO1xuXG5pbXBvcnQgeyB1c2VTeXN0ZW1TdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc3lzdGVtLXN0b3JlJztcblxuaW1wb3J0IHsgbWlncmF0ZSBhcyBtaWdyYXRlU2V0dGluZ3MgfSBmcm9tICdzcmMvbW9kZWxzL21pZ3JhdGlvbnMvc2V0dGluZ3MnO1xuaW1wb3J0IHsgbWlncmF0ZSBhcyBtaWdyYXRlU3lzdGVtcyB9IGZyb20gJ3NyYy9tb2RlbHMvbWlncmF0aW9ucy9zeXN0ZW0nO1xuaW1wb3J0IHsgdXNlU2V0dGluZ3NTdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc2V0dGluZ3Mtc3RvcmUnO1xuaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcblxuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0IHNldHRpbmdzU3RvcmUgPSB1c2VTZXR0aW5nc1N0b3JlKCk7XG5jb25zdCBzeXN0ZW1TdG9yZSA9IHVzZVN5c3RlbVN0b3JlKCk7XG5cbmNvbnN0IGZpbGVJbnB1dCA9IHJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzKFsncmVzdG9yZSddKTtcblxuZnVuY3Rpb24gY3JlYXRlQmFja3VwRmlsZSgpOiBGaWxlIHtcbiAgY29uc3QgYmFja3VwRGF0YSA9IHtcbiAgICBzZXR0aW5nczogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2V0dGluZ3MnKSB8fCAne30nKSxcbiAgICBzeXN0ZW1zOiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzeXN0ZW1zJykgfHwgJ3t9JyksXG4gIH07XG4gIGJhY2t1cERhdGEuc2V0dGluZ3Muc2V0dGluZ3MudG9rZW4gPSBudWxsO1xuXG4gIHJldHVybiBuZXcgRmlsZShcbiAgICBbSlNPTi5zdHJpbmdpZnkoYmFja3VwRGF0YSwgbnVsbCwgMildLFxuICAgIGBQS1N0YXR1cy0ke2RheWpzKCkuZm9ybWF0KCdZWVlZTU1ERF9ISG1tc3MnKX0uanNvbmAsXG4gICAgeyB0eXBlOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgKTtcbn1cblxuY29uc3QgYmFja3VwRmlsZSA9IHJlZihjcmVhdGVCYWNrdXBGaWxlKCkpO1xuY29uc3QgYmFja3VwRmlsZVVybCA9IGNvbXB1dGVkKCgpID0+IFVSTC5jcmVhdGVPYmplY3RVUkwoYmFja3VwRmlsZS52YWx1ZSkpO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVSZXN0b3JlKCkge1xuICBpZiAoIWZpbGVJbnB1dC52YWx1ZT8uZmlsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBmaWxlID0gZmlsZUlucHV0LnZhbHVlLmZpbGVzWzBdO1xuICBpZiAoIWZpbGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoYXdhaXQgZmlsZS50ZXh0KCkpO1xuICAgIGNvbnN0IHNldHRpbmdzID0gbWlncmF0ZVNldHRpbmdzKHBhcnNlZC5zZXR0aW5ncyk7XG4gICAgY29uc3Qgc3lzdGVtcyA9IG1pZ3JhdGVTeXN0ZW1zKHBhcnNlZC5zeXN0ZW1zKTtcblxuICAgICRxLmRpYWxvZyh7XG4gICAgICB0aXRsZTogJ1dhcm5pbmchJyxcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgICdUaGlzIHdpbGwgb3ZlcndyaXRlIGFsbCB5b3VyIFBLU3RhdHVzIHNldHRpbmdzIGFuZCB0cmFja2VkIHN5c3RlbXMsICcgK1xuICAgICAgICAnYXJlIHlvdSBzdXJlPycsXG4gICAgICBwZXJzaXN0ZW50OiB0cnVlLFxuICAgICAgb2s6IHtcbiAgICAgICAgcHVzaDogdHJ1ZSxcbiAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgICAgICBsYWJlbDogJ1llcywgT3ZlcndyaXRlIScsXG4gICAgICAgIGNvbG9yOiAnbmVnYXRpdmUnLFxuICAgICAgfSxcbiAgICAgIGNhbmNlbDoge1xuICAgICAgICBwdXNoOiB0cnVlLFxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICB9KS5vbk9rKCgpID0+IHtcbiAgICAgIGlmICghc2V0dGluZ3Muc2V0dGluZ3MudG9rZW4pIHtcbiAgICAgICAgc2V0dGluZ3Muc2V0dGluZ3MudG9rZW4gPSBzZXR0aW5nc1N0b3JlLnRva2VuO1xuICAgICAgfVxuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2V0dGluZ3MnLCBKU09OLnN0cmluZ2lmeShzZXR0aW5ncykpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N5c3RlbXMnLCBKU09OLnN0cmluZ2lmeShzeXN0ZW1zKSk7XG5cbiAgICAgIHNldHRpbmdzU3RvcmUuJGh5ZHJhdGUoKTtcbiAgICAgIHN5c3RlbVN0b3JlLiRoeWRyYXRlKCk7XG5cbiAgICAgICRxLm5vdGlmeSh7XG4gICAgICAgIGljb246ICdjaGVjaycsXG4gICAgICAgIHR5cGU6ICdwb3NpdGl2ZScsXG4gICAgICAgIG1lc3NhZ2U6ICdCYWNrdXAgcmVzdG9yZWQhJyxcbiAgICAgIH0pO1xuXG4gICAgICBlbWl0KCdyZXN0b3JlJyk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB7XG4gICAgICAkcS5ub3RpZnkoe1xuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICB0eXBlOiAnbmVnYXRpdmUnLFxuICAgICAgICBtZXNzYWdlOiAnRXJyb3IgcGFyc2luZyBiYWNrdXAgZmlsZScsXG4gICAgICAgIGNhcHRpb246IGUubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgY2xhc3M9XCJyb3cganVzdGlmeS1ldmVubHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC1zbS02IGNvbC1tZC00XCI+XG4gICAgICA8cGFnZS10aXRsZSBpY29uPVwic2V0dGluZ3NcIiB0ZXh0PVwiU2V0dGluZ3NcIiAvPlxuICAgICAgPHEtbGlzdCBjbGFzcz1cImJnLWxpZ2h0ZW4gcS1wYi1zbVwiPlxuICAgICAgICA8cS1pdGVtLWxhYmVsIGhlYWRlcj5HZW5lcmFsIFNldHRpbmdzPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDxxLWl0ZW0gdGFnPVwibGFiZWxcIj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPlBsdXJhbEtpdCBUb2tlbjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPlxuICAgICAgICAgICAgICAob3B0aW9uYWwpIFBsdXJhbEtpdCB0b2tlbiwgb25seSBuZWVkZWQgZm9yIHRoZSBzd2l0Y2hpbmcgVUlcbiAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwibmV3VG9rZW5cIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlRva2VuXCJcbiAgICAgICAgICAgICAgYm90dG9tLXNsb3RzXG4gICAgICAgICAgICAgIGNsZWFyYWJsZVxuICAgICAgICAgICAgICA6bG9hZGluZz1cInRva2VuQ2hlY2tpbmdcIlxuICAgICAgICAgICAgICA6ZXJyb3I9XCJ0b2tlbkVycm9yXCJcbiAgICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIkludmFsaWQgVG9rZW5cIlxuICAgICAgICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwib25Ub2tlbkNoYW5nZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjcHJlcGVuZD5cbiAgICAgICAgICAgICAgICA8aW5pdGlhbC1mYWxsYmFjay1hdmF0YXJcbiAgICAgICAgICAgICAgICAgIHYtaWY9XCJ0b2tlblN5c3RlbVwiXG4gICAgICAgICAgICAgICAgICA6dXJsPVwidG9rZW5TeXN0ZW0uYXZhdGFyVXJsXCJcbiAgICAgICAgICAgICAgICAgIDpuYW1lPVwidG9rZW5TeXN0ZW0uZ2V0TmFtZShkZXRlY3RQcm9ub3VucylcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3EtaW5wdXQ+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0gdi1pZj1cInNob3VsZENoZWNrRm9yVXBkYXRlcygkcSlcIiB0YWc9XCJsYWJlbFwiPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+Q2hlY2sgZm9yIFVwZGF0ZXM8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj5cbiAgICAgICAgICAgICAgUGVyaW9kaWNhbGx5IGNoZWNrIEdpdEh1YiB0byBzZWUgaWYgdGhlcmUncyBhIG5ldyB2ZXJzaW9uIG9mXG4gICAgICAgICAgICAgIFBLU3RhdHVzIGF2YWlsYWJsZVxuICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgPHEtdG9nZ2xlIHYtbW9kZWw9XCJjaGVja1VwZGF0ZXNcIiBAdXBkYXRlOm1vZGVsLXZhbHVlPVwib25DaGFuZ2VcIiAvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuICAgICAgICA8cS1zZXBhcmF0b3Igc3BhY2VkIC8+XG4gICAgICAgIDxxLWl0ZW0tbGFiZWwgaGVhZGVyPkRpc3BsYXkgU2V0dGluZ3M8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPHEtaXRlbSB0YWc9XCJsYWJlbFwiPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+RGV0ZWN0IFByb25vdW5zPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb25cbiAgICAgICAgICAgICAgPkRldGVjdCBwcm9ub3VucyBpbiBzeXN0ZW0gYW5kIG1lbWJlciBuYW1lcyBhbmQgcmVtb3ZlIHRoZW0sIGFsc29cbiAgICAgICAgICAgICAgc2hvd3MgdGhlbSBpbiB0aGUgcHJvbm91biBmaWVsZCBpZiBubyBwcm9ub3VucyBhcmUgc2V0XG4gICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICA8cS10b2dnbGUgdi1tb2RlbD1cImRldGVjdFByb25vdW5zXCIgQHVwZGF0ZTptb2RlbC12YWx1ZT1cIm9uQ2hhbmdlXCIgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPHEtaXRlbSB0YWc9XCJsYWJlbFwiPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+U2hvdyBDYXJkIERldGFpbHM8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj5cbiAgICAgICAgICAgICAgU2hvdyB0aGUgdGFibGUgd2l0aCBzeXN0ZW0vbWVtYmVyIGRldGFpbHMgb24gdGhlIHBvcHVwIGluZm8gY2FyZHMsXG4gICAgICAgICAgICAgIG9yIG9ubHkgbmFtZSBhbmQgZGVzY3JpcHRpb24gaWYgZGlzYWJsZWRcbiAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgIDxxLXRvZ2dsZVxuICAgICAgICAgICAgICB2LW1vZGVsPVwic2hvd0NhcmREZXRhaWxzXCJcbiAgICAgICAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cIm9uQ2hhbmdlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDxxLXNlcGFyYXRvciBzcGFjZWQgLz5cbiAgICAgICAgPHEtaXRlbS1sYWJlbCBoZWFkZXI+VXBkYXRlIFNldHRpbmdzPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJzeXN0ZW1VcGRhdGVJbnRlcnZhbFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiU3lzdGVtIFVwZGF0ZSBJbnRlcnZhbFwiXG4gICAgICAgICAgICAgIDpvcHRpb25zPVwib3B0aW9uc1wiXG4gICAgICAgICAgICAgIGVtaXQtdmFsdWVcbiAgICAgICAgICAgICAgbWFwLW9wdGlvbnNcbiAgICAgICAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cIm9uQ2hhbmdlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlICNwcmVwZW5kPlxuICAgICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cInNjaGVkdWxlXCIgLz5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcS1zZWxlY3Q+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJmcm9udGVyVXBkYXRlSW50ZXJ2YWxcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkZyb250ZXIgVXBkYXRlIEludGVydmFsXCJcbiAgICAgICAgICAgICAgOm9wdGlvbnM9XCJvcHRpb25zXCJcbiAgICAgICAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwib25DaGFuZ2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgI3ByZXBlbmQ+XG4gICAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwic2NoZWR1bGVcIiAvPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9xLXNlbGVjdD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPHEtc2VwYXJhdG9yIHNwYWNlZCAvPlxuICAgICAgICA8YmFja3VwLXNlY3Rpb25cbiAgICAgICAgICBAcmVzdG9yZT1cIlxuICAgICAgICAgICAgbmV3VG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgIG9uVG9rZW5DaGFuZ2UoKTtcbiAgICAgICAgICBcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWxpc3Q+XG4gICAgPC9kaXY+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSAncGthcGkuanMnO1xuaW1wb3J0IHsgZGVib3VuY2UsIHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSc7XG5cbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJ3NyYy9tb2RlbHMvU3lzdGVtJztcbmltcG9ydCB7IHVzZVNldHRpbmdzU3RvcmUgfSBmcm9tICdzcmMvc3RvcmVzL3NldHRpbmdzLXN0b3JlJztcblxuaW1wb3J0IEluaXRpYWxGYWxsYmFja0F2YXRhciBmcm9tICdzcmMvY29tcG9uZW50cy9Jbml0aWFsRmFsbGJhY2tBdmF0YXIudnVlJztcbmltcG9ydCBQYWdlVGl0bGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvUGFnZVRpdGxlLnZ1ZSc7XG5pbXBvcnQgQmFja3VwU2VjdGlvbiBmcm9tICdzcmMvcGFnZXMvU2V0dGluZ3MvQmFja3VwU2VjdGlvbi52dWUnO1xuaW1wb3J0IHsgdXNlU2VydmljZXMgfSBmcm9tICdzcmMvbGliL1NlcnZpY2VzJztcbmltcG9ydCB7IHNob3VsZENoZWNrRm9yVXBkYXRlcyB9IGZyb20gJ3NyYy9saWIvY2hlY2stdXBkYXRlJztcblxuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0IHsgc3lzdGVtQ2FjaGUgfSA9IHVzZVNlcnZpY2VzKCk7XG5jb25zdCBzZXR0aW5nc1N0b3JlID0gdXNlU2V0dGluZ3NTdG9yZSgpO1xuXG5jb25zdCB7XG4gIGRldGVjdFByb25vdW5zLFxuICBmcm9udGVyVXBkYXRlSW50ZXJ2YWwsXG4gIHNob3dDYXJkRGV0YWlscyxcbiAgc3lzdGVtVXBkYXRlSW50ZXJ2YWwsXG4gIGNoZWNrVXBkYXRlcyxcbiAgdG9rZW4sXG59ID0gc3RvcmVUb1JlZnMoc2V0dGluZ3NTdG9yZSk7XG5cbmNvbnN0IG5ld1Rva2VuID0gcmVmKHRva2VuLnZhbHVlKTtcbmNvbnN0IHRva2VuQ2hlY2tpbmcgPSByZWYoZmFsc2UpO1xuY29uc3QgdG9rZW5FcnJvciA9IHJlZihmYWxzZSk7XG5jb25zdCB0b2tlblN5c3RlbSA9IHJlZjxTeXN0ZW0gfCBudWxsPihudWxsKTtcblxuZnVuY3Rpb24gb25Ub2tlbkNoYW5nZSgpIHtcbiAgdG9rZW5DaGVja2luZy52YWx1ZSA9IHRydWU7XG4gIHRva2VuU3lzdGVtLnZhbHVlID0gbnVsbDtcbiAgdG9rZW5FcnJvci52YWx1ZSA9IGZhbHNlO1xuXG4gIGNoZWNrVG9rZW4oKTtcbn1cblxuY29uc3QgY2hlY2tUb2tlbiA9IGRlYm91bmNlKGFzeW5jICgpID0+IHtcbiAgaWYgKCFuZXdUb2tlbi52YWx1ZSkge1xuICAgIHRva2VuQ2hlY2tpbmcudmFsdWUgPSBmYWxzZTtcbiAgICB0b2tlbi52YWx1ZSA9ICcnO1xuICAgIHJldHVybiAkcS5ub3RpZnkoeyB0eXBlOiAncG9zaXRpdmUnLCBtZXNzYWdlOiAnVG9rZW4gQ2xlYXJlZCcgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIHRva2VuQ2hlY2tpbmcudmFsdWUgPSB0cnVlO1xuICAgIHRva2VuU3lzdGVtLnZhbHVlID0gYXdhaXQgc3lzdGVtQ2FjaGUuZmV0Y2hUb2tlbihuZXdUb2tlbi52YWx1ZSk7XG5cbiAgICAkcS5ub3RpZnkoe1xuICAgICAgdHlwZTogJ3Bvc2l0aXZlJyxcbiAgICAgIG1lc3NhZ2U6IGBUb2tlbiBVcGRhdGVkOiAke3Rva2VuU3lzdGVtLnZhbHVlLmdldE5hbWUoZGV0ZWN0UHJvbm91bnMudmFsdWUpfWAsXG4gICAgfSk7XG4gICAgdG9rZW4udmFsdWUgPSBuZXdUb2tlbi52YWx1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlIGluc3RhbmNlb2YgQVBJRXJyb3IgJiYgZS5zdGF0dXMgPT0gJzQwMScpIHtcbiAgICAgIHRva2VuRXJyb3IudmFsdWUgPSB0cnVlO1xuICAgICAgbmV3VG9rZW4udmFsdWUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHRva2VuQ2hlY2tpbmcudmFsdWUgPSBmYWxzZTtcbn0sIDUwMCk7XG5cbmNvbnN0IG9uQ2hhbmdlID0gZGVib3VuY2UoKCkgPT4ge1xuICAkcS5ub3RpZnkoJ1NldHRpbmdzIFVwZGF0ZWQnKTtcbn0sIDUwMCk7XG5cbmNvbnN0IG9wdGlvbnMgPSBbXG4gIHsgbGFiZWw6ICcxMCBTZWNvbmRzJywgdmFsdWU6IDEwIH0sXG4gIHsgbGFiZWw6ICcxIE1pbnV0ZScsIHZhbHVlOiA2MCB9LFxuICB7IGxhYmVsOiAnNSBNaW51dGVzJywgdmFsdWU6IDMwMCB9LFxuICB7IGxhYmVsOiAnMSBIb3VyJywgdmFsdWU6IDM2MDAgfSxcbiAgeyBsYWJlbDogJzYgSG91cicsIHZhbHVlOiAzNjAwICogNiB9LFxuICB7IGxhYmVsOiAnMSBEYXknLCB2YWx1ZTogODY0MDAgfSxcbl07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJtaWdyYXRlU2V0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QUFBLGFBQWEsSUFBSSxLQUFLO0FBQ3RCLFVBQUEsY0FBYyxJQUFtQixJQUFJO0FBRTNDLGFBQVMsZ0JBQWdCO0FBQ3ZCLG9CQUFjLFFBQVE7QUFDdEIsa0JBQVksUUFBUTtBQUNwQixpQkFBVyxRQUFRO0FBRVI7SUFDYjtBQUVNLFVBQUEsYUFBYSxTQUFTLFlBQVk7QUFDbEMsVUFBQSxDQUFDLFNBQVMsT0FBTztBQUNuQixzQkFBYyxRQUFRO0FBQ3RCLGNBQU0sUUFBUTtBQUNkLGVBQU8sR0FBRyxPQUFPLEVBQUUsTUFBTSxZQUFZLFNBQVMsaUJBQWlCO0FBQUEsTUFDakU7QUFFSSxVQUFBO0FBQ0Ysc0JBQWMsUUFBUTtBQUN0QixvQkFBWSxRQUFRLE1BQU0sWUFBWSxXQUFXLFNBQVMsS0FBSztBQUUvRCxXQUFHLE9BQU87QUFBQSxVQUNSLE1BQU07QUFBQSxVQUNOLFNBQVMsa0JBQWtCLFlBQVksTUFBTSxRQUFRLGVBQWUsS0FBSyxDQUFDO0FBQUEsUUFBQSxDQUMzRTtBQUNELGNBQU0sUUFBUSxTQUFTO0FBQUEsZUFDaEIsR0FBRztBQUNWLFlBQUksYUFBYSxZQUFZLEVBQUUsVUFBVSxPQUFPO0FBQzlDLHFCQUFXLFFBQVE7QUFDbkIsbUJBQVMsUUFBUTtBQUFBLFFBQ25CO0FBQUEsTUFDRjtBQUVBLG9CQUFjLFFBQVE7QUFBQSxPQUNyQixHQUFHO0FBRUEsVUFBQSxXQUFXLFNBQVMsTUFBTTtBQUM5QixTQUFHLE9BQU8sa0JBQWtCO0FBQUEsT0FDM0IsR0FBRztBQUVOLFVBQU0sVUFBVTtBQUFBLE1BQ2QsRUFBRSxPQUFPLGNBQWMsT0FBTyxHQUFHO0FBQUEsTUFDakMsRUFBRSxPQUFPLFlBQVksT0FBTyxHQUFHO0FBQUEsTUFDL0IsRUFBRSxPQUFPLGFBQWEsT0FBTyxJQUFJO0FBQUEsTUFDakMsRUFBRSxPQUFPLFVBQVUsT0FBTyxLQUFLO0FBQUEsTUFDL0IsRUFBRSxPQUFPLFVBQVUsT0FBTyxPQUFPLEVBQUU7QUFBQSxNQUNuQyxFQUFFLE9BQU8sU0FBUyxPQUFPLE1BQU07QUFBQSxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
