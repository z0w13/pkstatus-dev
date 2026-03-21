import { Q as QItemLabel, a as QItem, b as QItemSection } from "./QItem-DBhEHxap.js";
import { J as defineComponent, K as useSettingsStore, L as storeToRefs, _ as _export_sfc, ag as createElementBlock, T as openBlock, W as createVNode, U as withCtx, ak as Fragment, $ as createTextVNode, a4 as QToggle, r as ref, w as watch, bL as LOG_MIN_LINES, bM as LOG_MAX_LINES, a1 as QIcon, aD as QInput, ai as useSystemStore, a as computed, N as useQuasar, by as dayjs, bN as migrate, bO as migrate$1, Z as QBtn, Y as createBaseVNode, ah as usePluralKit, as as debounce, aj as APIError, bP as shouldCheckForUpdates, S as createBlock, a0 as createCommentVNode, a3 as QSeparator } from "./index-Czhz81pV.js";
import { Q as QSelect } from "./QSelect-DgwzAg-N.js";
import { Q as QList } from "./QList-DTyO3bRG.js";
import { Q as QPage } from "./QPage-B7Tg8hoM.js";
import { I as InitialFallbackAvatar } from "./InitialFallbackAvatar-BwzLwT9D.js";
import { P as PageTitle } from "./PageTitle-BKiEeIBH.js";
import "./QMenu-BKVuNWhU.js";
import "./format-Dk2Vo7dJ.js";
import "./rtl-DDpZOXNn.js";
import "./index-BPlwBMVZ.js";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "IdSection",
  setup(__props, { expose: __expose }) {
    __expose();
    const settings = useSettingsStore();
    const { id } = storeToRefs(settings);
    const __returned__ = { settings, id };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createVNode(QItemLabel, { header: "" }, {
        default: withCtx(() => _cache[2] || (_cache[2] = [
          createTextVNode(
            "ID Settings",
            -1
            /* CACHED */
          )
        ])),
        _: 1,
        __: [2]
      }),
      createVNode(QItem, { tag: "label" }, {
        default: withCtx(() => [
          createVNode(QItemSection, null, {
            default: withCtx(() => [
              createVNode(QItemLabel, null, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode(
                    "Capitalize IDs",
                    -1
                    /* CACHED */
                  )
                ])),
                _: 1,
                __: [3]
              }),
              createVNode(QItemLabel, { caption: "" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode(
                    " Whether to display IDs as capital letters, to ease readability ",
                    -1
                    /* CACHED */
                  )
                ])),
                _: 1,
                __: [4]
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QItemSection, { avatar: "" }, {
            default: withCtx(() => [
              createVNode(QToggle, {
                modelValue: $setup.id.caps,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.id.caps = $event)
              }, null, 8, ["modelValue"])
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
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode(
                    "Split IDs",
                    -1
                    /* CACHED */
                  )
                ])),
                _: 1,
                __: [5]
              }),
              createVNode(QItemLabel, { caption: "" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode(
                    " Whether to display 6-character IDs split with a hyphen, to ease readability ",
                    -1
                    /* CACHED */
                  )
                ])),
                _: 1,
                __: [6]
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QItemSection, { avatar: "" }, {
            default: withCtx(() => [
              createVNode(QToggle, {
                modelValue: $setup.id.sep,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.id.sep = $event)
              }, null, 8, ["modelValue"])
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
}
const IdSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/zowie/dev/pkstatus/src/pages/Settings/IdSection.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LogSection",
  setup(__props, { expose: __expose }) {
    __expose();
    const settings = useSettingsStore();
    const { log } = storeToRefs(settings);
    const logLines = ref(log.value.lines.toString());
    const errorMessage = ref(void 0);
    watch(
      () => logLines.value,
      () => {
        const intVal = parseInt(logLines.value);
        if (isNaN(intVal)) {
          errorMessage.value = "should be a number";
          return;
        }
        if (intVal < LOG_MIN_LINES || intVal > LOG_MAX_LINES) {
          errorMessage.value = "should be a value between 0 and 1000";
          return;
        }
        errorMessage.value = void 0;
        log.value.lines = intVal;
      }
    );
    const __returned__ = { settings, log, logLines, errorMessage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createVNode(QItemLabel, { header: "" }, {
        default: withCtx(() => _cache[2] || (_cache[2] = [
          createTextVNode(
            "Logging Settings",
            -1
            /* CACHED */
          )
        ])),
        _: 1,
        __: [2]
      }),
      createVNode(QItem, { tag: "label" }, {
        default: withCtx(() => [
          createVNode(QItemSection, null, {
            default: withCtx(() => [
              createVNode(QSelect, {
                modelValue: $setup.log.level,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.log.level = $event),
                label: "Log Level",
                options: [
                  { value: "debug", label: "Debug" },
                  { value: "info", label: "Info" },
                  { value: "warn", label: "Warnings" },
                  { value: "error", label: "Errors" }
                ],
                "emit-value": "",
                "map-options": ""
              }, {
                prepend: withCtx(() => [
                  createVNode(QIcon, { name: "notes" })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
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
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode(
                    "Max Lines",
                    -1
                    /* CACHED */
                  )
                ])),
                _: 1,
                __: [3]
              }),
              createVNode(QItemLabel, { caption: "" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode(
                    " How many lines should we store in the log ",
                    -1
                    /* CACHED */
                  )
                ])),
                _: 1,
                __: [4]
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(QItemSection, { avatar: "" }, {
            default: withCtx(() => [
              createVNode(QInput, {
                modelValue: $setup.logLines,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.logLines = $event),
                type: "number",
                error: !!$setup.errorMessage,
                "error-message": $setup.errorMessage
              }, null, 8, ["modelValue", "error", "error-message"])
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
}
const LogSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/zowie/dev/pkstatus/src/pages/Settings/LogSection.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BackupSection",
  emits: ["restore"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const $q = useQuasar();
    const settingsStore = useSettingsStore();
    const systemStore = useSystemStore();
    const fileInput = ref();
    const emit = __emit;
    function createBackupFile() {
      var _a, _b;
      const backupData = {
        settings: JSON.parse((_a = localStorage.getItem("settings")) != null ? _a : "{}"),
        systems: JSON.parse((_b = localStorage.getItem("systems")) != null ? _b : "{}")
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
          var _a2, _b;
          (_b = (_a2 = settings.settings).token) != null ? _b : _a2.token = settingsStore.token;
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
    const __returned__ = { $q, settingsStore, systemStore, fileInput, emit, createBackupFile, backupFile, backupFileUrl, handleRestore };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createVNode(QItemLabel, { header: "" }, {
        default: withCtx(() => _cache[1] || (_cache[1] = [
          createTextVNode(
            "Backup & Restore",
            -1
            /* CACHED */
          )
        ])),
        _: 1,
        __: [1]
      }),
      createVNode(QItem, null, {
        default: withCtx(() => [
          createVNode(QItemSection, null, {
            default: withCtx(() => [
              createVNode(QBtn, {
                color: "positive",
                label: "backup",
                href: $setup.backupFileUrl,
                download: $setup.backupFile.name
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
                  return (_a = $setup.fileInput) == null ? void 0 : _a.click();
                })
              }),
              createBaseVNode(
                "input",
                {
                  ref: "fileInput",
                  accept: ".json",
                  type: "file",
                  style: { "display": "none" },
                  onChange: $setup.handleRestore
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
}
const BackupSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/zowie/dev/pkstatus/src/pages/Settings/BackupSection.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SettingsPage",
  setup(__props, { expose: __expose }) {
    __expose();
    const $q = useQuasar();
    const pluralKit = usePluralKit();
    const settingsStore = useSettingsStore();
    const {
      detectPronouns,
      fronterUpdateInterval,
      showCardDetails,
      systemUpdateInterval,
      checkUpdates,
      lookup,
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
        tokenSystem.value = await pluralKit.getSystemByToken(newToken.value);
        $q.notify({
          type: "positive",
          message: `Token Updated: ${tokenSystem.value.getName(detectPronouns.value)}`
        });
        token.value = newToken.value;
      } catch (e) {
        if (e instanceof APIError && e.status == 401) {
          tokenError.value = true;
          newToken.value = null;
        }
      }
      tokenChecking.value = false;
    }, 500);
    const options = [
      { label: "10 Seconds", value: 10 },
      { label: "1 Minute", value: 60 },
      { label: "5 Minutes", value: 300 },
      { label: "1 Hour", value: 3600 },
      { label: "6 Hour", value: 3600 * 6 },
      { label: "1 Day", value: 86400 }
    ];
    const __returned__ = { $q, pluralKit, settingsStore, detectPronouns, fronterUpdateInterval, showCardDetails, systemUpdateInterval, checkUpdates, lookup, token, newToken, tokenChecking, tokenError, tokenSystem, onTokenChange, checkToken, options, InitialFallbackAvatar, PageTitle, IdSection, LogSection, BackupSection, get shouldCheckForUpdates() {
      return shouldCheckForUpdates;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "col col-sm-6 col-md-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { class: "row justify-evenly" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["PageTitle"], {
          icon: "settings",
          text: "Settings"
        }),
        createVNode(QList, { class: "bg-lighten q-pb-sm" }, {
          default: withCtx(() => [
            createVNode(QItemLabel, { header: "" }, {
              default: withCtx(() => _cache[8] || (_cache[8] = [
                createTextVNode(
                  "General Settings",
                  -1
                  /* CACHED */
                )
              ])),
              _: 1,
              __: [8]
            }),
            createVNode(QItem, { tag: "label" }, {
              default: withCtx(() => [
                createVNode(QItemSection, null, {
                  default: withCtx(() => [
                    createVNode(QItemLabel, null, {
                      default: withCtx(() => _cache[9] || (_cache[9] = [
                        createTextVNode(
                          "PluralKit Token",
                          -1
                          /* CACHED */
                        )
                      ])),
                      _: 1,
                      __: [9]
                    }),
                    createVNode(QItemLabel, { caption: "" }, {
                      default: withCtx(() => _cache[10] || (_cache[10] = [
                        createTextVNode(
                          " (optional) PluralKit token, only needed for the switching UI ",
                          -1
                          /* CACHED */
                        )
                      ])),
                      _: 1,
                      __: [10]
                    }),
                    createVNode(QInput, {
                      modelValue: $setup.newToken,
                      "onUpdate:modelValue": [
                        _cache[0] || (_cache[0] = ($event) => $setup.newToken = $event),
                        $setup.onTokenChange
                      ],
                      modelModifiers: { trim: true },
                      type: "password",
                      label: "Token",
                      "bottom-slots": "",
                      clearable: "",
                      loading: $setup.tokenChecking,
                      error: $setup.tokenError,
                      "error-message": "Invalid Token"
                    }, {
                      prepend: withCtx(() => [
                        $setup.tokenSystem ? (openBlock(), createBlock($setup["InitialFallbackAvatar"], {
                          key: 0,
                          url: $setup.tokenSystem.avatarUrl,
                          name: $setup.tokenSystem.getName($setup.detectPronouns)
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
            $setup.shouldCheckForUpdates($setup.$q) ? (openBlock(), createBlock(QItem, {
              key: 0,
              tag: "label"
            }, {
              default: withCtx(() => [
                createVNode(QItemSection, null, {
                  default: withCtx(() => [
                    createVNode(QItemLabel, null, {
                      default: withCtx(() => _cache[11] || (_cache[11] = [
                        createTextVNode(
                          "Check for Updates",
                          -1
                          /* CACHED */
                        )
                      ])),
                      _: 1,
                      __: [11]
                    }),
                    createVNode(QItemLabel, { caption: "" }, {
                      default: withCtx(() => _cache[12] || (_cache[12] = [
                        createTextVNode(
                          " Periodically check GitHub to see if there's a new version of PKStatus available ",
                          -1
                          /* CACHED */
                        )
                      ])),
                      _: 1,
                      __: [12]
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(QItemSection, { avatar: "" }, {
                  default: withCtx(() => [
                    createVNode(QToggle, {
                      modelValue: $setup.checkUpdates,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.checkUpdates = $event)
                    }, null, 8, ["modelValue"])
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
              default: withCtx(() => _cache[13] || (_cache[13] = [
                createTextVNode(
                  "Display Settings",
                  -1
                  /* CACHED */
                )
              ])),
              _: 1,
              __: [13]
            }),
            createVNode(QItem, { tag: "label" }, {
              default: withCtx(() => [
                createVNode(QItemSection, null, {
                  default: withCtx(() => [
                    createVNode(QItemLabel, null, {
                      default: withCtx(() => _cache[14] || (_cache[14] = [
                        createTextVNode(
                          "Detect Pronouns",
                          -1
                          /* CACHED */
                        )
                      ])),
                      _: 1,
                      __: [14]
                    }),
                    createVNode(QItemLabel, { caption: "" }, {
                      default: withCtx(() => _cache[15] || (_cache[15] = [
                        createTextVNode(
                          "Detect pronouns in system and member names and remove them, also shows them in the pronoun field if no pronouns are set ",
                          -1
                          /* CACHED */
                        )
                      ])),
                      _: 1,
                      __: [15]
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(QItemSection, { avatar: "" }, {
                  default: withCtx(() => [
                    createVNode(QToggle, {
                      modelValue: $setup.detectPronouns,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.detectPronouns = $event)
                    }, null, 8, ["modelValue"])
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
                      default: withCtx(() => _cache[16] || (_cache[16] = [
                        createTextVNode(
                          "Show Card Details",
                          -1
                          /* CACHED */
                        )
                      ])),
                      _: 1,
                      __: [16]
                    }),
                    createVNode(QItemLabel, { caption: "" }, {
                      default: withCtx(() => _cache[17] || (_cache[17] = [
                        createTextVNode(
                          " Show the table with system/member details on the popup info cards, or only name and description if disabled ",
                          -1
                          /* CACHED */
                        )
                      ])),
                      _: 1,
                      __: [17]
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(QItemSection, { avatar: "" }, {
                  default: withCtx(() => [
                    createVNode(QToggle, {
                      modelValue: $setup.showCardDetails,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.showCardDetails = $event)
                    }, null, 8, ["modelValue"])
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
                      default: withCtx(() => _cache[18] || (_cache[18] = [
                        createTextVNode(
                          "Show Color Accents",
                          -1
                          /* CACHED */
                        )
                      ])),
                      _: 1,
                      __: [18]
                    }),
                    createVNode(QItemLabel, { caption: "" }, {
                      default: withCtx(() => _cache[19] || (_cache[19] = [
                        createTextVNode(
                          " Show color accents on member and system cards, and also in various member lists ",
                          -1
                          /* CACHED */
                        )
                      ])),
                      _: 1,
                      __: [19]
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(QItemSection, { avatar: "" }, {
                  default: withCtx(() => [
                    createVNode(QToggle, {
                      modelValue: $setup.lookup.colorAccent,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.lookup.colorAccent = $event)
                    }, null, 8, ["modelValue"])
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
              default: withCtx(() => _cache[20] || (_cache[20] = [
                createTextVNode(
                  "Update Settings",
                  -1
                  /* CACHED */
                )
              ])),
              _: 1,
              __: [20]
            }),
            createVNode(QItem, null, {
              default: withCtx(() => [
                createVNode(QItemSection, null, {
                  default: withCtx(() => [
                    createVNode(QSelect, {
                      modelValue: $setup.systemUpdateInterval,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.systemUpdateInterval = $event),
                      label: "System Update Interval",
                      options: $setup.options,
                      "emit-value": "",
                      "map-options": ""
                    }, {
                      prepend: withCtx(() => [
                        createVNode(QIcon, { name: "schedule" })
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])
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
                      modelValue: $setup.fronterUpdateInterval,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.fronterUpdateInterval = $event),
                      label: "Fronter Update Interval",
                      options: $setup.options,
                      "emit-value": "",
                      "map-options": ""
                    }, {
                      prepend: withCtx(() => [
                        createVNode(QIcon, { name: "schedule" })
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])
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
                createVNode(QItemLabel, { caption: "" }, {
                  default: withCtx(() => _cache[21] || (_cache[21] = [
                    createTextVNode(
                      " These are minimums, PKStatus increases the interval dynamically if it would exceed the PluralKit API limits with your settings ",
                      -1
                      /* CACHED */
                    )
                  ])),
                  _: 1,
                  __: [21]
                })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(QSeparator, { spaced: "" }),
            createVNode($setup["IdSection"]),
            createVNode($setup["LogSection"]),
            createVNode($setup["BackupSection"], {
              onRestore: _cache[7] || (_cache[7] = ($event) => {
                $setup.newToken = $setup.token;
                $setup.onTokenChange();
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
}
const SettingsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/pages/SettingsPage.vue"]]);
export {
  SettingsPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ3NQYWdlLUJtQU1jZklkLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvU2V0dGluZ3MvSWRTZWN0aW9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9TZXR0aW5ncy9Mb2dTZWN0aW9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9TZXR0aW5ncy9CYWNrdXBTZWN0aW9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9TZXR0aW5nc1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtaXRlbS1sYWJlbCBoZWFkZXI+SUQgU2V0dGluZ3M8L3EtaXRlbS1sYWJlbD5cbiAgPHEtaXRlbSB0YWc9XCJsYWJlbFwiPlxuICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tbGFiZWw+Q2FwaXRhbGl6ZSBJRHM8L3EtaXRlbS1sYWJlbD5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj5cbiAgICAgICAgV2hldGhlciB0byBkaXNwbGF5IElEcyBhcyBjYXBpdGFsIGxldHRlcnMsIHRvIGVhc2UgcmVhZGFiaWxpdHlcbiAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgIDxxLXRvZ2dsZSB2LW1vZGVsPVwiaWQuY2Fwc1wiIC8+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgPC9xLWl0ZW0+XG4gIDxxLWl0ZW0gdGFnPVwibGFiZWxcIj5cbiAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLWxhYmVsPlNwbGl0IElEczwvcS1pdGVtLWxhYmVsPlxuICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPlxuICAgICAgICBXaGV0aGVyIHRvIGRpc3BsYXkgNi1jaGFyYWN0ZXIgSURzIHNwbGl0IHdpdGggYSBoeXBoZW4sIHRvIGVhc2VcbiAgICAgICAgcmVhZGFiaWxpdHlcbiAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgIDxxLXRvZ2dsZSB2LW1vZGVsPVwiaWQuc2VwXCIgLz5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICA8L3EtaXRlbT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJztcbmltcG9ydCB7IHVzZVNldHRpbmdzU3RvcmUgfSBmcm9tICdzcmMvc3RvcmVzL3NldHRpbmdzLXN0b3JlJztcblxuY29uc3Qgc2V0dGluZ3MgPSB1c2VTZXR0aW5nc1N0b3JlKCk7XG5jb25zdCB7IGlkIH0gPSBzdG9yZVRvUmVmcyhzZXR0aW5ncyk7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtaXRlbS1sYWJlbCBoZWFkZXI+TG9nZ2luZyBTZXR0aW5nczwvcS1pdGVtLWxhYmVsPlxuICA8cS1pdGVtIHRhZz1cImxhYmVsXCI+XG4gICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtc2VsZWN0XG4gICAgICAgIHYtbW9kZWw9XCJsb2cubGV2ZWxcIlxuICAgICAgICBsYWJlbD1cIkxvZyBMZXZlbFwiXG4gICAgICAgIDpvcHRpb25zPVwiW1xuICAgICAgICAgIHsgdmFsdWU6ICdkZWJ1ZycsIGxhYmVsOiAnRGVidWcnIH0sXG4gICAgICAgICAgeyB2YWx1ZTogJ2luZm8nLCBsYWJlbDogJ0luZm8nIH0sXG4gICAgICAgICAgeyB2YWx1ZTogJ3dhcm4nLCBsYWJlbDogJ1dhcm5pbmdzJyB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdlcnJvcicsIGxhYmVsOiAnRXJyb3JzJyB9LFxuICAgICAgICBdXCJcbiAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgPlxuICAgICAgICA8dGVtcGxhdGUgI3ByZXBlbmQ+XG4gICAgICAgICAgPHEtaWNvbiBuYW1lPVwibm90ZXNcIiAvPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9xLXNlbGVjdD5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICA8L3EtaXRlbT5cbiAgPHEtaXRlbSB0YWc9XCJsYWJlbFwiPlxuICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tbGFiZWw+TWF4IExpbmVzPC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+XG4gICAgICAgIEhvdyBtYW55IGxpbmVzIHNob3VsZCB3ZSBzdG9yZSBpbiB0aGUgbG9nXG4gICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICA8cS1pbnB1dFxuICAgICAgICB2LW1vZGVsPVwibG9nTGluZXNcIlxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgOmVycm9yPVwiISFlcnJvck1lc3NhZ2VcIlxuICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImVycm9yTWVzc2FnZVwiXG4gICAgICAvPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gIDwvcS1pdGVtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSc7XG5cbmltcG9ydCB7IHVzZVNldHRpbmdzU3RvcmUgfSBmcm9tICdzcmMvc3RvcmVzL3NldHRpbmdzLXN0b3JlJztcbmltcG9ydCB7IExPR19NQVhfTElORVMsIExPR19NSU5fTElORVMgfSBmcm9tICdzcmMvbW9kZWxzL1NldHRpbmdzJztcblxuY29uc3Qgc2V0dGluZ3MgPSB1c2VTZXR0aW5nc1N0b3JlKCk7XG5jb25zdCB7IGxvZyB9ID0gc3RvcmVUb1JlZnMoc2V0dGluZ3MpO1xuY29uc3QgbG9nTGluZXMgPSByZWYobG9nLnZhbHVlLmxpbmVzLnRvU3RyaW5nKCkpO1xuY29uc3QgZXJyb3JNZXNzYWdlID0gcmVmPHN0cmluZyB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxud2F0Y2goXG4gICgpID0+IGxvZ0xpbmVzLnZhbHVlLFxuICAoKSA9PiB7XG4gICAgY29uc3QgaW50VmFsID0gcGFyc2VJbnQobG9nTGluZXMudmFsdWUpO1xuICAgIGlmIChpc05hTihpbnRWYWwpKSB7XG4gICAgICBlcnJvck1lc3NhZ2UudmFsdWUgPSAnc2hvdWxkIGJlIGEgbnVtYmVyJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaW50VmFsIDwgTE9HX01JTl9MSU5FUyB8fCBpbnRWYWwgPiBMT0dfTUFYX0xJTkVTKSB7XG4gICAgICBlcnJvck1lc3NhZ2UudmFsdWUgPSAnc2hvdWxkIGJlIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxMDAwJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvck1lc3NhZ2UudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgbG9nLnZhbHVlLmxpbmVzID0gaW50VmFsO1xuICB9LFxuKTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8cS1pdGVtLWxhYmVsIGhlYWRlcj5CYWNrdXAgJiBSZXN0b3JlPC9xLWl0ZW0tbGFiZWw+XG4gIDxxLWl0ZW0+XG4gICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtYnRuXG4gICAgICAgIGNvbG9yPVwicG9zaXRpdmVcIlxuICAgICAgICBsYWJlbD1cImJhY2t1cFwiXG4gICAgICAgIDpocmVmPVwiYmFja3VwRmlsZVVybFwiXG4gICAgICAgIDpkb3dubG9hZD1cImJhY2t1cEZpbGUubmFtZVwiXG4gICAgICAvPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtYnRuIGNvbG9yPVwibmVnYXRpdmVcIiBsYWJlbD1cInJlc3RvcmVcIiBAY2xpY2s9XCJmaWxlSW5wdXQ/LmNsaWNrKClcIiAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHJlZj1cImZpbGVJbnB1dFwiXG4gICAgICAgIGFjY2VwdD1cIi5qc29uXCJcbiAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIlxuICAgICAgICBAY2hhbmdlPVwiaGFuZGxlUmVzdG9yZVwiXG4gICAgICAvPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gIDwvcS1pdGVtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJztcblxuaW1wb3J0IHsgdXNlU3lzdGVtU3RvcmUgfSBmcm9tICdzcmMvc3RvcmVzL3N5c3RlbS1zdG9yZSc7XG5cbmltcG9ydCB7IG1pZ3JhdGUgYXMgbWlncmF0ZVNldHRpbmdzIH0gZnJvbSAnc3JjL21vZGVscy9taWdyYXRpb25zL3NldHRpbmdzJztcbmltcG9ydCB7IG1pZ3JhdGUgYXMgbWlncmF0ZVN5c3RlbXMgfSBmcm9tICdzcmMvbW9kZWxzL21pZ3JhdGlvbnMvc3lzdGVtJztcbmltcG9ydCB7IHVzZVNldHRpbmdzU3RvcmUgfSBmcm9tICdzcmMvc3RvcmVzL3NldHRpbmdzLXN0b3JlJztcbmltcG9ydCB7IHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcic7XG5cbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5jb25zdCBzZXR0aW5nc1N0b3JlID0gdXNlU2V0dGluZ3NTdG9yZSgpO1xuY29uc3Qgc3lzdGVtU3RvcmUgPSB1c2VTeXN0ZW1TdG9yZSgpO1xuXG5jb25zdCBmaWxlSW5wdXQgPSByZWY8SFRNTElucHV0RWxlbWVudD4oKTtcbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0cyhbJ3Jlc3RvcmUnXSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhY2t1cEZpbGUoKTogRmlsZSB7XG4gIGNvbnN0IGJhY2t1cERhdGEgPSB7XG4gICAgc2V0dGluZ3M6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NldHRpbmdzJykgPz8gJ3t9JyksXG4gICAgc3lzdGVtczogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3lzdGVtcycpID8/ICd7fScpLFxuICB9O1xuICBiYWNrdXBEYXRhLnNldHRpbmdzLnNldHRpbmdzLnRva2VuID0gbnVsbDtcblxuICByZXR1cm4gbmV3IEZpbGUoXG4gICAgW0pTT04uc3RyaW5naWZ5KGJhY2t1cERhdGEsIG51bGwsIDIpXSxcbiAgICBgUEtTdGF0dXMtJHtkYXlqcygpLmZvcm1hdCgnWVlZWU1NRERfSEhtbXNzJyl9Lmpzb25gLFxuICAgIHsgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICk7XG59XG5cbmNvbnN0IGJhY2t1cEZpbGUgPSByZWYoY3JlYXRlQmFja3VwRmlsZSgpKTtcbmNvbnN0IGJhY2t1cEZpbGVVcmwgPSBjb21wdXRlZCgoKSA9PiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJhY2t1cEZpbGUudmFsdWUpKTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVzdG9yZSgpIHtcbiAgaWYgKCFmaWxlSW5wdXQudmFsdWU/LmZpbGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZmlsZSA9IGZpbGVJbnB1dC52YWx1ZS5maWxlc1swXTtcbiAgaWYgKCFmaWxlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGF3YWl0IGZpbGUudGV4dCgpKTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IG1pZ3JhdGVTZXR0aW5ncyhwYXJzZWQuc2V0dGluZ3MpO1xuICAgIGNvbnN0IHN5c3RlbXMgPSBtaWdyYXRlU3lzdGVtcyhwYXJzZWQuc3lzdGVtcyk7XG5cbiAgICAkcS5kaWFsb2coe1xuICAgICAgdGl0bGU6ICdXYXJuaW5nIScsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAnVGhpcyB3aWxsIG92ZXJ3cml0ZSBhbGwgeW91ciBQS1N0YXR1cyBzZXR0aW5ncyBhbmQgdHJhY2tlZCBzeXN0ZW1zLCAnICtcbiAgICAgICAgJ2FyZSB5b3Ugc3VyZT8nLFxuICAgICAgcGVyc2lzdGVudDogdHJ1ZSxcbiAgICAgIG9rOiB7XG4gICAgICAgIHB1c2g6IHRydWUsXG4gICAgICAgIGljb246ICd3YXJuaW5nJyxcbiAgICAgICAgbGFiZWw6ICdZZXMsIE92ZXJ3cml0ZSEnLFxuICAgICAgICBjb2xvcjogJ25lZ2F0aXZlJyxcbiAgICAgIH0sXG4gICAgICBjYW5jZWw6IHtcbiAgICAgICAgcHVzaDogdHJ1ZSxcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgfSkub25PaygoKSA9PiB7XG4gICAgICBzZXR0aW5ncy5zZXR0aW5ncy50b2tlbiA/Pz0gc2V0dGluZ3NTdG9yZS50b2tlbjtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NldHRpbmdzJywgSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzeXN0ZW1zJywgSlNPTi5zdHJpbmdpZnkoc3lzdGVtcykpO1xuXG4gICAgICBzZXR0aW5nc1N0b3JlLiRoeWRyYXRlKCk7XG4gICAgICBzeXN0ZW1TdG9yZS4kaHlkcmF0ZSgpO1xuXG4gICAgICAkcS5ub3RpZnkoe1xuICAgICAgICBpY29uOiAnY2hlY2snLFxuICAgICAgICB0eXBlOiAncG9zaXRpdmUnLFxuICAgICAgICBtZXNzYWdlOiAnQmFja3VwIHJlc3RvcmVkIScsXG4gICAgICB9KTtcblxuICAgICAgZW1pdCgncmVzdG9yZScpO1xuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikge1xuICAgICAgJHEubm90aWZ5KHtcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgdHlwZTogJ25lZ2F0aXZlJyxcbiAgICAgICAgbWVzc2FnZTogJ0Vycm9yIHBhcnNpbmcgYmFja3VwIGZpbGUnLFxuICAgICAgICBjYXB0aW9uOiBlLm1lc3NhZ2UsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8cS1wYWdlIGNsYXNzPVwicm93IGp1c3RpZnktZXZlbmx5XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtc20tNiBjb2wtbWQtNFwiPlxuICAgICAgPHBhZ2UtdGl0bGUgaWNvbj1cInNldHRpbmdzXCIgdGV4dD1cIlNldHRpbmdzXCIgLz5cbiAgICAgIDxxLWxpc3QgY2xhc3M9XCJiZy1saWdodGVuIHEtcGItc21cIj5cbiAgICAgICAgPHEtaXRlbS1sYWJlbCBoZWFkZXI+R2VuZXJhbCBTZXR0aW5nczwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8cS1pdGVtIHRhZz1cImxhYmVsXCI+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5QbHVyYWxLaXQgVG9rZW48L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj5cbiAgICAgICAgICAgICAgKG9wdGlvbmFsKSBQbHVyYWxLaXQgdG9rZW4sIG9ubHkgbmVlZGVkIGZvciB0aGUgc3dpdGNoaW5nIFVJXG4gICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cIm5ld1Rva2VuXCJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJUb2tlblwiXG4gICAgICAgICAgICAgIGJvdHRvbS1zbG90c1xuICAgICAgICAgICAgICBjbGVhcmFibGVcbiAgICAgICAgICAgICAgOmxvYWRpbmc9XCJ0b2tlbkNoZWNraW5nXCJcbiAgICAgICAgICAgICAgOmVycm9yPVwidG9rZW5FcnJvclwiXG4gICAgICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJJbnZhbGlkIFRva2VuXCJcbiAgICAgICAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cIm9uVG9rZW5DaGFuZ2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgI3ByZXBlbmQ+XG4gICAgICAgICAgICAgICAgPGluaXRpYWwtZmFsbGJhY2stYXZhdGFyXG4gICAgICAgICAgICAgICAgICB2LWlmPVwidG9rZW5TeXN0ZW1cIlxuICAgICAgICAgICAgICAgICAgOnVybD1cInRva2VuU3lzdGVtLmF2YXRhclVybFwiXG4gICAgICAgICAgICAgICAgICA6bmFtZT1cInRva2VuU3lzdGVtLmdldE5hbWUoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9xLWlucHV0PlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuICAgICAgICA8cS1pdGVtIHYtaWY9XCJzaG91bGRDaGVja0ZvclVwZGF0ZXMoJHEpXCIgdGFnPVwibGFiZWxcIj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPkNoZWNrIGZvciBVcGRhdGVzPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+XG4gICAgICAgICAgICAgIFBlcmlvZGljYWxseSBjaGVjayBHaXRIdWIgdG8gc2VlIGlmIHRoZXJlJ3MgYSBuZXcgdmVyc2lvbiBvZlxuICAgICAgICAgICAgICBQS1N0YXR1cyBhdmFpbGFibGVcbiAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgIDxxLXRvZ2dsZSB2LW1vZGVsPVwiY2hlY2tVcGRhdGVzXCIgLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPHEtc2VwYXJhdG9yIHNwYWNlZCAvPlxuICAgICAgICA8cS1pdGVtLWxhYmVsIGhlYWRlcj5EaXNwbGF5IFNldHRpbmdzPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDxxLWl0ZW0gdGFnPVwibGFiZWxcIj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPkRldGVjdCBQcm9ub3VuczwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uXG4gICAgICAgICAgICAgID5EZXRlY3QgcHJvbm91bnMgaW4gc3lzdGVtIGFuZCBtZW1iZXIgbmFtZXMgYW5kIHJlbW92ZSB0aGVtLCBhbHNvXG4gICAgICAgICAgICAgIHNob3dzIHRoZW0gaW4gdGhlIHByb25vdW4gZmllbGQgaWYgbm8gcHJvbm91bnMgYXJlIHNldFxuICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgPHEtdG9nZ2xlIHYtbW9kZWw9XCJkZXRlY3RQcm9ub3Vuc1wiIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0gdGFnPVwibGFiZWxcIj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPlNob3cgQ2FyZCBEZXRhaWxzPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+XG4gICAgICAgICAgICAgIFNob3cgdGhlIHRhYmxlIHdpdGggc3lzdGVtL21lbWJlciBkZXRhaWxzIG9uIHRoZSBwb3B1cCBpbmZvIGNhcmRzLFxuICAgICAgICAgICAgICBvciBvbmx5IG5hbWUgYW5kIGRlc2NyaXB0aW9uIGlmIGRpc2FibGVkXG4gICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICA8cS10b2dnbGUgdi1tb2RlbD1cInNob3dDYXJkRGV0YWlsc1wiIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0gdGFnPVwibGFiZWxcIj5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPlNob3cgQ29sb3IgQWNjZW50czwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPlxuICAgICAgICAgICAgICBTaG93IGNvbG9yIGFjY2VudHMgb24gbWVtYmVyIGFuZCBzeXN0ZW0gY2FyZHMsIGFuZCBhbHNvIGluIHZhcmlvdXNcbiAgICAgICAgICAgICAgbWVtYmVyIGxpc3RzXG4gICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICA8cS10b2dnbGUgdi1tb2RlbD1cImxvb2t1cC5jb2xvckFjY2VudFwiIC8+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDxxLXNlcGFyYXRvciBzcGFjZWQgLz5cbiAgICAgICAgPHEtaXRlbS1sYWJlbCBoZWFkZXI+VXBkYXRlIFNldHRpbmdzPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJzeXN0ZW1VcGRhdGVJbnRlcnZhbFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiU3lzdGVtIFVwZGF0ZSBJbnRlcnZhbFwiXG4gICAgICAgICAgICAgIDpvcHRpb25zPVwib3B0aW9uc1wiXG4gICAgICAgICAgICAgIGVtaXQtdmFsdWVcbiAgICAgICAgICAgICAgbWFwLW9wdGlvbnNcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlICNwcmVwZW5kPlxuICAgICAgICAgICAgICAgIDxxLWljb24gbmFtZT1cInNjaGVkdWxlXCIgLz5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcS1zZWxlY3Q+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJmcm9udGVyVXBkYXRlSW50ZXJ2YWxcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkZyb250ZXIgVXBkYXRlIEludGVydmFsXCJcbiAgICAgICAgICAgICAgOm9wdGlvbnM9XCJvcHRpb25zXCJcbiAgICAgICAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgI3ByZXBlbmQ+XG4gICAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwic2NoZWR1bGVcIiAvPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9xLXNlbGVjdD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+XG4gICAgICAgICAgICBUaGVzZSBhcmUgbWluaW11bXMsIFBLU3RhdHVzIGluY3JlYXNlcyB0aGUgaW50ZXJ2YWwgZHluYW1pY2FsbHkgaWZcbiAgICAgICAgICAgIGl0IHdvdWxkIGV4Y2VlZCB0aGUgUGx1cmFsS2l0IEFQSSBsaW1pdHMgd2l0aCB5b3VyIHNldHRpbmdzXG4gICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtPlxuICAgICAgICA8cS1zZXBhcmF0b3Igc3BhY2VkIC8+XG4gICAgICAgIDxpZC1zZWN0aW9uIC8+XG4gICAgICAgIDxsb2ctc2VjdGlvbiAvPlxuICAgICAgICA8YmFja3VwLXNlY3Rpb25cbiAgICAgICAgICBAcmVzdG9yZT1cIlxuICAgICAgICAgICAgbmV3VG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgIG9uVG9rZW5DaGFuZ2UoKTtcbiAgICAgICAgICBcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWxpc3Q+XG4gICAgPC9kaXY+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSAncGthcGktdHMvZXJyb3JzJztcbmltcG9ydCB7IGRlYm91bmNlLCB1c2VRdWFzYXIgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHN0b3JlVG9SZWZzIH0gZnJvbSAncGluaWEnO1xuXG5pbXBvcnQgeyBTeXN0ZW0gfSBmcm9tICdzcmMvbW9kZWxzL1N5c3RlbSc7XG5pbXBvcnQgeyB1c2VTZXR0aW5nc1N0b3JlIH0gZnJvbSAnc3JjL3N0b3Jlcy9zZXR0aW5ncy1zdG9yZSc7XG5cbmltcG9ydCBJbml0aWFsRmFsbGJhY2tBdmF0YXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvSW5pdGlhbEZhbGxiYWNrQXZhdGFyLnZ1ZSc7XG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gJ3NyYy9jb21wb25lbnRzL1BhZ2VUaXRsZS52dWUnO1xuaW1wb3J0IElkU2VjdGlvbiBmcm9tICdzcmMvcGFnZXMvU2V0dGluZ3MvSWRTZWN0aW9uLnZ1ZSc7XG5pbXBvcnQgTG9nU2VjdGlvbiBmcm9tICdzcmMvcGFnZXMvU2V0dGluZ3MvTG9nU2VjdGlvbi52dWUnO1xuaW1wb3J0IEJhY2t1cFNlY3Rpb24gZnJvbSAnc3JjL3BhZ2VzL1NldHRpbmdzL0JhY2t1cFNlY3Rpb24udnVlJztcbmltcG9ydCB7IHNob3VsZENoZWNrRm9yVXBkYXRlcyB9IGZyb20gJ3NyYy9saWIvdXBkYXRlQ2hlY2tlcic7XG5pbXBvcnQgeyB1c2VQbHVyYWxLaXQgfSBmcm9tICdib290L3BsdXJhbEtpdCc7XG5cbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5jb25zdCBwbHVyYWxLaXQgPSB1c2VQbHVyYWxLaXQoKTtcbmNvbnN0IHNldHRpbmdzU3RvcmUgPSB1c2VTZXR0aW5nc1N0b3JlKCk7XG5cbmNvbnN0IHtcbiAgZGV0ZWN0UHJvbm91bnMsXG4gIGZyb250ZXJVcGRhdGVJbnRlcnZhbCxcbiAgc2hvd0NhcmREZXRhaWxzLFxuICBzeXN0ZW1VcGRhdGVJbnRlcnZhbCxcbiAgY2hlY2tVcGRhdGVzLFxuICBsb29rdXAsXG4gIHRva2VuLFxufSA9IHN0b3JlVG9SZWZzKHNldHRpbmdzU3RvcmUpO1xuXG5jb25zdCBuZXdUb2tlbiA9IHJlZih0b2tlbi52YWx1ZSk7XG5jb25zdCB0b2tlbkNoZWNraW5nID0gcmVmKGZhbHNlKTtcbmNvbnN0IHRva2VuRXJyb3IgPSByZWYoZmFsc2UpO1xuY29uc3QgdG9rZW5TeXN0ZW0gPSByZWY8U3lzdGVtIHwgbnVsbD4obnVsbCk7XG5cbmZ1bmN0aW9uIG9uVG9rZW5DaGFuZ2UoKSB7XG4gIHRva2VuQ2hlY2tpbmcudmFsdWUgPSB0cnVlO1xuICB0b2tlblN5c3RlbS52YWx1ZSA9IG51bGw7XG4gIHRva2VuRXJyb3IudmFsdWUgPSBmYWxzZTtcblxuICBjaGVja1Rva2VuKCk7XG59XG5cbmNvbnN0IGNoZWNrVG9rZW4gPSBkZWJvdW5jZShhc3luYyAoKSA9PiB7XG4gIGlmICghbmV3VG9rZW4udmFsdWUpIHtcbiAgICB0b2tlbkNoZWNraW5nLnZhbHVlID0gZmFsc2U7XG4gICAgdG9rZW4udmFsdWUgPSAnJztcbiAgICByZXR1cm4gJHEubm90aWZ5KHsgdHlwZTogJ3Bvc2l0aXZlJywgbWVzc2FnZTogJ1Rva2VuIENsZWFyZWQnIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICB0b2tlbkNoZWNraW5nLnZhbHVlID0gdHJ1ZTtcbiAgICB0b2tlblN5c3RlbS52YWx1ZSA9IGF3YWl0IHBsdXJhbEtpdC5nZXRTeXN0ZW1CeVRva2VuKG5ld1Rva2VuLnZhbHVlKTtcblxuICAgICRxLm5vdGlmeSh7XG4gICAgICB0eXBlOiAncG9zaXRpdmUnLFxuICAgICAgbWVzc2FnZTogYFRva2VuIFVwZGF0ZWQ6ICR7dG9rZW5TeXN0ZW0udmFsdWUuZ2V0TmFtZShkZXRlY3RQcm9ub3Vucy52YWx1ZSl9YCxcbiAgICB9KTtcbiAgICB0b2tlbi52YWx1ZSA9IG5ld1Rva2VuLnZhbHVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBBUElFcnJvciAmJiBlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgIHRva2VuRXJyb3IudmFsdWUgPSB0cnVlO1xuICAgICAgbmV3VG9rZW4udmFsdWUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHRva2VuQ2hlY2tpbmcudmFsdWUgPSBmYWxzZTtcbn0sIDUwMCk7XG5cbmNvbnN0IG9wdGlvbnMgPSBbXG4gIHsgbGFiZWw6ICcxMCBTZWNvbmRzJywgdmFsdWU6IDEwIH0sXG4gIHsgbGFiZWw6ICcxIE1pbnV0ZScsIHZhbHVlOiA2MCB9LFxuICB7IGxhYmVsOiAnNSBNaW51dGVzJywgdmFsdWU6IDMwMCB9LFxuICB7IGxhYmVsOiAnMSBIb3VyJywgdmFsdWU6IDM2MDAgfSxcbiAgeyBsYWJlbDogJzYgSG91cicsIHZhbHVlOiAzNjAwICogNiB9LFxuICB7IGxhYmVsOiAnMSBEYXknLCB2YWx1ZTogODY0MDAgfSxcbl07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwibWlncmF0ZVNldHRpbmdzIiwibWlncmF0ZVN5c3RlbXMiLCJfYSIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlQ29tbWVudFZOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUErQkEsVUFBTSxXQUFXLGlCQUFpQjtBQUNsQyxVQUFNLEVBQUUsR0FBQSxJQUFPLFlBQVksUUFBUTs7Ozs7OztBQS9CWixTQUFBQSxVQUFBLEdBQUFDO0FBQUFBLElBQVdDO0FBQUFBLElBQUE7QUFBQSxJQUFBO0FBQUEsTUFBQUMsWUFBQSxZQUFBLEVBQUEsUUFBQSxHQUFBLEdBQUE7QUFBQSxRQUFBLFNBQUFDLFFBQUEsTUFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQTtBQUFBOzs7Ozs7O1FBQ2hDLElBQUEsQ0FBQSxDQUFBO0FBQUEsTUFBQSxDQUFBO0FBQUEsa0JBQ0UsT0FLaUIsRUFBQSxLQUFBLFFBQUEsR0FBQTtBQUFBLFFBSjRCLFNBQUFBLFFBQUEsTUFBQTtBQUFBLFVBQUFELFlBQTNDLGNBQTJDLE1BQUE7QUFBQSxZQUFmLFNBQUFDLFFBQUEsTUFBQTtBQUFBLGNBQUFELFlBQUEsWUFBQSxNQUFBO0FBQUEsZ0JBQUEsU0FBQUMsUUFBQSxNQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBO0FBQUE7Ozs7Ozs7Z0JBQzVCLElBQUEsQ0FBQSxDQUFBO0FBQUEsY0FBQSxDQUFBO0FBQUEsY0FBc0JELFlBQUEsWUFBQSxFQUFBLFNBQUEsR0FBQSxHQUFBO0FBQUEsZ0JBQUEsU0FBQUMsUUFBQSxNQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBO0FBQUE7Ozs7Ozs7Ozs7WUFJeEIsR0FBQTtBQUFBO0FBQUEsVUFBQSxDQUFBO0FBQUEsc0JBQ0UsY0FBOEIsRUFBQSxRQUFBLEdBQUEsR0FBQTtBQUFBLFlBQVgsU0FBQUEsUUFBQSxNQUFBO0FBQUEsY0FBQUQsWUFBQSxTQUFB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
