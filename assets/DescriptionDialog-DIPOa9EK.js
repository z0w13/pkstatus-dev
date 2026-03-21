import { J as defineComponent, K as useSettingsStore, L as storeToRefs, r as ref, a as computed, al as renderPkDescription, aW as useRoute, _ as _export_sfc, S as createBlock, T as openBlock, U as withCtx, a6 as QCard, W as createVNode, ag as createElementBlock, a0 as createCommentVNode, a7 as QCardSection, Y as createBaseVNode, X as normalizeClass, $ as createTextVNode, a2 as toDisplayString, a8 as QCardActions, am as normalizeStyle, Z as QBtn, ai as useSystemStore, N as useQuasar, b7 as is404, a3 as QSeparator, a5 as QDialog } from "./index-Czhz81pV.js";
import { Q as QMarkupTable } from "./QMarkupTable-Co_abH1I.js";
import { A as AvatarDialog, v as vue3Fitty_commonExports, M as MemberCard } from "./MemberCard-BSciiHjk.js";
import { I as InitialFallbackAvatar } from "./InitialFallbackAvatar-BwzLwT9D.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "GroupCard",
  props: {
    group: { type: Object, required: true },
    system: { type: Object, required: true },
    details: { type: Boolean, required: false, default: true },
    popup: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const settings = useSettingsStore();
    const { detectPronouns, lookup } = storeToRefs(settings);
    const showAvatar = ref(false);
    const systemPage = computed(
      () => {
        var _a;
        return (_a = useRoute().name) == null ? void 0 : _a.toString().startsWith("lookup-system");
      }
    );
    const __returned__ = { settings, detectPronouns, lookup, showAvatar, systemPage, get Fitty() {
      return vue3Fitty_commonExports.Fitty;
    }, InitialFallbackAvatar, AvatarDialog, get renderPkDescription() {
      return renderPkDescription;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "col-auto self-center" };
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = { key: 0 };
const _hoisted_4$1 = { key: 1 };
const _hoisted_5$1 = ["innerHTML"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QCard, null, {
    default: withCtx(() => {
      var _a;
      return [
        createVNode(QCardSection, { class: "row" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$1, [
              $props.group.icon ? (openBlock(), createBlock($setup["InitialFallbackAvatar"], {
                key: 0,
                size: "64px",
                url: $props.group.icon,
                name: $props.group.getName(),
                onClick: _cache[0] || (_cache[0] = ($event) => $setup.showAvatar = !!$props.group.icon)
              }, null, 8, ["url", "name"])) : createCommentVNode("v-if", true)
            ]),
            createBaseVNode(
              "div",
              {
                class: normalizeClass({ col: true, "q-ml-md": !!$props.group.icon, "self-center": true })
              },
              [
                createVNode($setup["Fitty"], {
                  style: { "line-height": "100%" },
                  options: { maxSize: 100 }
                }, {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString($props.group.getName()),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ],
              2
              /* CLASS */
            )
          ]),
          _: 1
          /* STABLE */
        }),
        $props.group.banner ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: $props.group.banner
        }, null, 8, _hoisted_2$1)) : createCommentVNode("v-if", true),
        $props.popup ? (openBlock(), createBlock(QCardActions, {
          key: 1,
          class: "bg-primary text-white",
          style: normalizeStyle(
            $setup.lookup.colorAccent ? `min-height: 52px; background-color: #${$props.group.color} !important;` : ""
          )
        }, {
          default: withCtx(() => [
            !$setup.systemPage ? (openBlock(), createBlock(QBtn, {
              key: 0,
              color: "dark",
              label: "View System",
              to: `/lookup/system/${$props.system.id}`
            }, null, 8, ["to"])) : createCommentVNode("v-if", true),
            createVNode(QBtn, {
              color: "dark",
              label: "View Group",
              to: `/lookup/group/${$props.group.id}`
            }, null, 8, ["to"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["style"])) : createCommentVNode("v-if", true),
        $props.details ? (openBlock(), createBlock(QCardSection, { key: 2 }, {
          default: withCtx(() => [
            createVNode(QMarkupTable, {
              flat: "",
              separator: "horizontal",
              style: { "overflow": "hidden" }
            }, {
              default: withCtx(() => [
                createBaseVNode("tbody", null, [
                  createBaseVNode("tr", null, [
                    _cache[2] || (_cache[2] = createBaseVNode(
                      "td",
                      null,
                      "ID",
                      -1
                      /* CACHED */
                    )),
                    createBaseVNode(
                      "td",
                      null,
                      toDisplayString($props.group.id),
                      1
                      /* TEXT */
                    )
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[3] || (_cache[3] = createBaseVNode(
                      "td",
                      null,
                      "System",
                      -1
                      /* CACHED */
                    )),
                    createBaseVNode(
                      "td",
                      null,
                      toDisplayString($props.system.getName($setup.detectPronouns)),
                      1
                      /* TEXT */
                    )
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[4] || (_cache[4] = createBaseVNode(
                      "td",
                      null,
                      "Members",
                      -1
                      /* CACHED */
                    )),
                    createBaseVNode(
                      "td",
                      null,
                      toDisplayString($props.group.members.length),
                      1
                      /* TEXT */
                    )
                  ]),
                  $props.group.color ? (openBlock(), createElementBlock("tr", _hoisted_3$1, [
                    _cache[5] || (_cache[5] = createBaseVNode(
                      "td",
                      null,
                      "Color",
                      -1
                      /* CACHED */
                    )),
                    createBaseVNode(
                      "td",
                      {
                        style: normalizeStyle({
                          color: `#${$props.group.color}`,
                          fontSize: "48px",
                          lineHeight: "16px",
                          textIndent: "-4px"
                        })
                      },
                      " • ",
                      4
                      /* STYLE */
                    )
                  ])) : createCommentVNode("v-if", true),
                  $props.group.createdAt ? (openBlock(), createElementBlock("tr", _hoisted_4$1, [
                    _cache[6] || (_cache[6] = createBaseVNode(
                      "td",
                      null,
                      "Created At",
                      -1
                      /* CACHED */
                    )),
                    createBaseVNode(
                      "td",
                      null,
                      toDisplayString($props.group.createdAt.format("YYYY-MM-DD")),
                      1
                      /* TEXT */
                    )
                  ])) : createCommentVNode("v-if", true)
                ])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })) : createCommentVNode("v-if", true),
        !!((_a = $props.group.description) == null ? void 0 : _a.length) ? (openBlock(), createBlock(QCardSection, { key: 3 }, {
          default: withCtx(() => [
            createCommentVNode(" eslint-disable vue/no-v-html -- needed for rendering "),
            createBaseVNode("div", {
              class: "description",
              innerHTML: $setup.renderPkDescription($props.group.description)
            }, null, 8, _hoisted_5$1),
            createCommentVNode(" eslint-enable vue/no-v-html ")
          ]),
          _: 1
          /* STABLE */
        })) : createCommentVNode("v-if", true),
        $props.group.icon ? (openBlock(), createBlock($setup["AvatarDialog"], {
          key: 4,
          modelValue: $setup.showAvatar,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.showAvatar = $event),
          "avatar-url": $props.group.icon
        }, null, 8, ["modelValue", "avatar-url"])) : createCommentVNode("v-if", true)
      ];
    }),
    _: 1
    /* STABLE */
  });
}
const GroupCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-892b3b62"], ["__file", "/home/zowie/dev/pkstatus/src/components/Card/GroupCard.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SystemCard",
  props: {
    system: { type: Object, required: true },
    details: { type: Boolean, required: false, default: true },
    popup: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const $q = useQuasar();
    const settings = useSettingsStore();
    const systemStore = useSystemStore();
    const { detectPronouns, lookup, id: idOpts } = storeToRefs(settings);
    const showAvatar = ref(false);
    async function followSystem(id) {
      try {
        await systemStore.add(id);
      } catch (e) {
        if (is404(e)) {
          return $q.notify({
            type: "negative",
            message: `Error adding system ${id}`,
            caption: `${e.status}: ${e.message} (${e.code})`
          });
        }
        throw e;
      }
    }
    function unfollowSystem(id) {
      systemStore.delete(id);
    }
    const __returned__ = { $q, settings, systemStore, detectPronouns, lookup, idOpts, showAvatar, followSystem, unfollowSystem, get Fitty() {
      return vue3Fitty_commonExports.Fitty;
    }, InitialFallbackAvatar, AvatarDialog, get renderPkDescription() {
      return renderPkDescription;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "col-auto self-center" };
const _hoisted_2 = { class: "col q-ml-md self-center" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { key: 1 };
const _hoisted_6 = ["innerHTML"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QCard, null, {
    default: withCtx(() => [
      createVNode(QCardSection, { class: "row" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            $props.system.avatarUrl ? (openBlock(), createBlock($setup["InitialFallbackAvatar"], {
              key: 0,
              size: "64px",
              url: $props.system.avatarUrl,
              name: $props.system.getName($setup.detectPronouns),
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.showAvatar = !!$props.system.avatarUrl)
            }, null, 8, ["url", "name"])) : createCommentVNode("v-if", true)
          ]),
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["Fitty"], {
              style: { "line-height": "100%" },
              options: { maxSize: 100 }
            }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString($props.system.getName($setup.detectPronouns)),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      $props.system.bannerUrl ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: $props.system.bannerUrl
      }, null, 8, _hoisted_3)) : createCommentVNode("v-if", true),
      createVNode(QCardActions, {
        class: "bg-primary text-white",
        style: normalizeStyle(
          $setup.lookup.colorAccent ? `min-height: 52px; background-color: #${$props.system.color} !important;` : ""
        )
      }, {
        default: withCtx(() => [
          $props.popup ? (openBlock(), createBlock(QBtn, {
            key: 0,
            color: "dark",
            label: "View",
            to: `/lookup/system/${$props.system.id}`
          }, null, 8, ["to"])) : createCommentVNode("v-if", true),
          createCommentVNode(" Follow/Unfollow Buttons "),
          !$setup.systemStore.has($props.system.id) ? (openBlock(), createBlock(QBtn, {
            key: 1,
            color: "dark",
            icon: "group_add",
            label: "Follow",
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.followSystem($props.system.id))
          })) : (openBlock(), createBlock(QBtn, {
            key: 2,
            color: "dark",
            icon: "group_remove",
            label: "Unfollow",
            onClick: _cache[2] || (_cache[2] = ($event) => $setup.unfollowSystem($props.system.id))
          }))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["style"]),
      $props.details ? (openBlock(), createBlock(QCardSection, {
        key: 1,
        class: "q-pt-none"
      }, {
        default: withCtx(() => [
          createVNode(QMarkupTable, {
            flat: "",
            separator: "horizontal",
            style: { "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              createBaseVNode("tbody", null, [
                createBaseVNode("tr", null, [
                  _cache[4] || (_cache[4] = createBaseVNode(
                    "td",
                    null,
                    "ID",
                    -1
                    /* CACHED */
                  )),
                  createBaseVNode(
                    "td",
                    null,
                    toDisplayString($props.system.formatId($setup.idOpts)),
                    1
                    /* TEXT */
                  )
                ]),
                createBaseVNode("tr", null, [
                  _cache[5] || (_cache[5] = createBaseVNode(
                    "td",
                    null,
                    "Created At",
                    -1
                    /* CACHED */
                  )),
                  createBaseVNode(
                    "td",
                    null,
                    toDisplayString($props.system.createdAt.format("YYYY-MM-DD")),
                    1
                    /* TEXT */
                  )
                ]),
                createBaseVNode("tr", null, [
                  _cache[6] || (_cache[6] = createBaseVNode(
                    "td",
                    null,
                    "Tag",
                    -1
                    /* CACHED */
                  )),
                  createBaseVNode(
                    "td",
                    null,
                    toDisplayString($props.system.tag),
                    1
                    /* TEXT */
                  )
                ]),
                $props.system.getPronouns($setup.detectPronouns) ? (openBlock(), createElementBlock("tr", _hoisted_4, [
                  _cache[7] || (_cache[7] = createBaseVNode(
                    "td",
                    null,
                    "Pronouns",
                    -1
                    /* CACHED */
                  )),
                  createBaseVNode(
                    "td",
                    null,
                    toDisplayString($props.system.getPronouns($setup.detectPronouns)),
                    1
                    /* TEXT */
                  )
                ])) : createCommentVNode("v-if", true),
                $props.system.color ? (openBlock(), createElementBlock("tr", _hoisted_5, [
                  _cache[8] || (_cache[8] = createBaseVNode(
                    "td",
                    null,
                    "Color",
                    -1
                    /* CACHED */
                  )),
                  createBaseVNode(
                    "td",
                    {
                      style: normalizeStyle({
                        color: `#${$props.system.color}`,
                        fontSize: "48px",
                        lineHeight: "16px",
                        textIndent: "-4px"
                      })
                    },
                    " • ",
                    4
                    /* STYLE */
                  )
                ])) : createCommentVNode("v-if", true)
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })) : createCommentVNode("v-if", true),
      createVNode(QSeparator),
      $props.system.description && $props.system.description.length > 0 ? (openBlock(), createBlock(QCardSection, { key: 2 }, {
        default: withCtx(() => [
          createCommentVNode(" eslint-disable vue/no-v-html -- needed for rendering "),
          createBaseVNode("div", {
            class: "description",
            innerHTML: $setup.renderPkDescription($props.system.description)
          }, null, 8, _hoisted_6),
          createCommentVNode(" eslint-enable vue/no-v-html ")
        ]),
        _: 1
        /* STABLE */
      })) : createCommentVNode("v-if", true),
      $props.system.avatarUrl ? (openBlock(), createBlock($setup["AvatarDialog"], {
        key: 3,
        modelValue: $setup.showAvatar,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.showAvatar = $event),
        "avatar-url": $props.system.avatarUrl
      }, null, 8, ["modelValue", "avatar-url"])) : createCommentVNode("v-if", true)
    ]),
    _: 1
    /* STABLE */
  });
}
const SystemCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-dbcc97c0"], ["__file", "/home/zowie/dev/pkstatus/src/components/Card/SystemCard.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DescriptionDialog",
  setup(__props, { expose: __expose }) {
    const { showCardDetails } = storeToRefs(useSettingsStore());
    const visible = ref(false);
    const group = ref(null);
    const member = ref(null);
    const system = ref(null);
    function show(opts) {
      var _a, _b, _c;
      group.value = (_a = opts.group) != null ? _a : null;
      member.value = (_b = opts.member) != null ? _b : null;
      system.value = (_c = opts.system) != null ? _c : null;
      visible.value = true;
    }
    __expose({
      show
    });
    const __returned__ = { showCardDetails, visible, group, member, system, show, GroupCard, MemberCard, SystemCard };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QDialog, {
    modelValue: $setup.visible,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.visible = $event)
  }, {
    default: withCtx(() => [
      $setup.system && !$setup.member && !$setup.group ? (openBlock(), createBlock($setup["SystemCard"], {
        key: 0,
        system: $setup.system,
        details: $setup.showCardDetails,
        popup: true
      }, null, 8, ["system", "details"])) : createCommentVNode("v-if", true),
      $setup.member && $setup.system ? (openBlock(), createBlock($setup["MemberCard"], {
        key: 1,
        member: $setup.member,
        system: $setup.system,
        details: $setup.showCardDetails,
        popup: true
      }, null, 8, ["member", "system", "details"])) : createCommentVNode("v-if", true),
      $setup.group && $setup.system ? (openBlock(), createBlock($setup["GroupCard"], {
        key: 2,
        group: $setup.group,
        system: $setup.system,
        details: $setup.showCardDetails,
        popup: true
      }, null, 8, ["group", "system", "details"])) : createCommentVNode("v-if", true)
    ]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue"]);
}
const DescriptionDialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/components/DescriptionDialog.vue"]]);
export {
  DescriptionDialog as D,
  GroupCard as G,
  SystemCard as S
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzY3JpcHRpb25EaWFsb2ctRElQT2E5RUsuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvR3JvdXBDYXJkLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvU3lzdGVtQ2FyZC52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EZXNjcmlwdGlvbkRpYWxvZy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1jYXJkPlxuICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIHNlbGYtY2VudGVyXCI+XG4gICAgICAgIDxpbml0aWFsLWZhbGxiYWNrLWF2YXRhclxuICAgICAgICAgIHYtaWY9XCJncm91cC5pY29uXCJcbiAgICAgICAgICBzaXplPVwiNjRweFwiXG4gICAgICAgICAgOnVybD1cImdyb3VwLmljb25cIlxuICAgICAgICAgIDpuYW1lPVwiZ3JvdXAuZ2V0TmFtZSgpXCJcbiAgICAgICAgICBAY2xpY2s9XCJzaG93QXZhdGFyID0gISFncm91cC5pY29uXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiA6Y2xhc3M9XCJ7IGNvbDogdHJ1ZSwgJ3EtbWwtbWQnOiAhIWdyb3VwLmljb24sICdzZWxmLWNlbnRlcic6IHRydWUgfVwiPlxuICAgICAgICA8Zml0dHkgc3R5bGU9XCJsaW5lLWhlaWdodDogMTAwJVwiIDpvcHRpb25zPVwieyBtYXhTaXplOiAxMDAgfVwiPlxuICAgICAgICAgIHt7IGdyb3VwLmdldE5hbWUoKSB9fVxuICAgICAgICA8L2ZpdHR5PlxuICAgICAgPC9kaXY+XG4gICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICA8aW1nIHYtaWY9XCJncm91cC5iYW5uZXJcIiA6c3JjPVwiZ3JvdXAuYmFubmVyXCIgLz5cbiAgICA8cS1jYXJkLWFjdGlvbnNcbiAgICAgIHYtaWY9XCJwb3B1cFwiXG4gICAgICBjbGFzcz1cImJnLXByaW1hcnkgdGV4dC13aGl0ZVwiXG4gICAgICA6c3R5bGU9XCJcbiAgICAgICAgbG9va3VwLmNvbG9yQWNjZW50XG4gICAgICAgICAgPyBgbWluLWhlaWdodDogNTJweDsgYmFja2dyb3VuZC1jb2xvcjogIyR7Z3JvdXAuY29sb3J9ICFpbXBvcnRhbnQ7YFxuICAgICAgICAgIDogJydcbiAgICAgIFwiXG4gICAgPlxuICAgICAgPHEtYnRuXG4gICAgICAgIHYtaWY9XCIhc3lzdGVtUGFnZVwiXG4gICAgICAgIGNvbG9yPVwiZGFya1wiXG4gICAgICAgIGxhYmVsPVwiVmlldyBTeXN0ZW1cIlxuICAgICAgICA6dG89XCJgL2xvb2t1cC9zeXN0ZW0vJHtzeXN0ZW0uaWR9YFwiXG4gICAgICAvPlxuICAgICAgPHEtYnRuXG4gICAgICAgIGNvbG9yPVwiZGFya1wiXG4gICAgICAgIGxhYmVsPVwiVmlldyBHcm91cFwiXG4gICAgICAgIDp0bz1cImAvbG9va3VwL2dyb3VwLyR7Z3JvdXAuaWR9YFwiXG4gICAgICAvPlxuICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgPHEtY2FyZC1zZWN0aW9uIHYtaWY9XCJkZXRhaWxzXCI+XG4gICAgICA8cS1tYXJrdXAtdGFibGUgZmxhdCBzZXBhcmF0b3I9XCJob3Jpem9udGFsXCIgc3R5bGU9XCJvdmVyZmxvdzogaGlkZGVuXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+SUQ8L3RkPlxuICAgICAgICAgICAgPHRkPnt7IGdyb3VwLmlkIH19PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5TeXN0ZW08L3RkPlxuICAgICAgICAgICAgPHRkPnt7IHN5c3RlbS5nZXROYW1lKGRldGVjdFByb25vdW5zKSB9fTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+TWVtYmVyczwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3sgZ3JvdXAubWVtYmVycy5sZW5ndGggfX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIHYtaWY9XCJncm91cC5jb2xvclwiPlxuICAgICAgICAgICAgPHRkPkNvbG9yPC90ZD5cbiAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICA6c3R5bGU9XCJ7XG4gICAgICAgICAgICAgICAgY29sb3I6IGAjJHtncm91cC5jb2xvcn1gLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnNDhweCcsXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzE2cHgnLFxuICAgICAgICAgICAgICAgIHRleHRJbmRlbnQ6ICctNHB4JyxcbiAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICZidWxsO1xuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciB2LWlmPVwiZ3JvdXAuY3JlYXRlZEF0XCI+XG4gICAgICAgICAgICA8dGQ+Q3JlYXRlZCBBdDwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3sgZ3JvdXAuY3JlYXRlZEF0LmZvcm1hdCgnWVlZWS1NTS1ERCcpIH19PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9xLW1hcmt1cC10YWJsZT5cbiAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDxxLWNhcmQtc2VjdGlvbiB2LWlmPVwiISFncm91cC5kZXNjcmlwdGlvbj8ubGVuZ3RoXCI+XG4gICAgICA8IS0tIGVzbGludC1kaXNhYmxlIHZ1ZS9uby12LWh0bWwgLS0gbmVlZGVkIGZvciByZW5kZXJpbmcgLS0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICB2LWh0bWw9XCJyZW5kZXJQa0Rlc2NyaXB0aW9uKGdyb3VwLmRlc2NyaXB0aW9uKVwiXG4gICAgICAvPlxuICAgICAgPCEtLSBlc2xpbnQtZW5hYmxlIHZ1ZS9uby12LWh0bWwgLS0+XG4gICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICA8YXZhdGFyLWRpYWxvZ1xuICAgICAgdi1pZj1cImdyb3VwLmljb25cIlxuICAgICAgdi1tb2RlbD1cInNob3dBdmF0YXJcIlxuICAgICAgOmF2YXRhci11cmw9XCJncm91cC5pY29uXCJcbiAgICAvPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBGaXR0eSB9IGZyb20gJ0BsdW1lbnBpbmsvdnVlMy1maXR0eSc7XG5pbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHN0b3JlVG9SZWZzIH0gZnJvbSAncGluaWEnO1xuXG5pbXBvcnQgSW5pdGlhbEZhbGxiYWNrQXZhdGFyIGZyb20gJ3NyYy9jb21wb25lbnRzL0luaXRpYWxGYWxsYmFja0F2YXRhci52dWUnO1xuaW1wb3J0IEF2YXRhckRpYWxvZyBmcm9tICdzcmMvY29tcG9uZW50cy9DYXJkL0F2YXRhckRpYWxvZy52dWUnO1xuXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJ3NyYy9tb2RlbHMvR3JvdXAnO1xuaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnc3JjL21vZGVscy9TeXN0ZW0nO1xuaW1wb3J0IHsgcmVuZGVyUGtEZXNjcmlwdGlvbiB9IGZyb20gJ3NyYy91dGlsJztcblxuaW1wb3J0IHsgdXNlU2V0dGluZ3NTdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvc2V0dGluZ3Mtc3RvcmUnO1xuaW1wb3J0IHsgdXNlUm91dGUgfSBmcm9tICd2dWUtcm91dGVyJztcblxuY29uc3Qgc2V0dGluZ3MgPSB1c2VTZXR0aW5nc1N0b3JlKCk7XG5jb25zdCB7IGRldGVjdFByb25vdW5zLCBsb29rdXAgfSA9IHN0b3JlVG9SZWZzKHNldHRpbmdzKTtcbmNvbnN0IHNob3dBdmF0YXIgPSByZWYoZmFsc2UpO1xuXG53aXRoRGVmYXVsdHMoXG4gIGRlZmluZVByb3BzPHtcbiAgICBncm91cDogR3JvdXA7XG4gICAgc3lzdGVtOiBTeXN0ZW07XG4gICAgZGV0YWlscz86IGJvb2xlYW47XG4gICAgcG9wdXA/OiBib29sZWFuO1xuICB9PigpLFxuICB7IGRldGFpbHM6IHRydWUsIHBvcHVwOiBmYWxzZSB9LFxuKTtcblxuY29uc3Qgc3lzdGVtUGFnZSA9IGNvbXB1dGVkKCgpID0+XG4gIHVzZVJvdXRlKCkubmFtZT8udG9TdHJpbmcoKS5zdGFydHNXaXRoKCdsb29rdXAtc3lzdGVtJyksXG4pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImNzc1wiPlxudGQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbnRkOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8cS1jYXJkPlxuICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIHNlbGYtY2VudGVyXCI+XG4gICAgICAgIDxpbml0aWFsLWZhbGxiYWNrLWF2YXRhclxuICAgICAgICAgIHYtaWY9XCJzeXN0ZW0uYXZhdGFyVXJsXCJcbiAgICAgICAgICBzaXplPVwiNjRweFwiXG4gICAgICAgICAgOnVybD1cInN5c3RlbS5hdmF0YXJVcmxcIlxuICAgICAgICAgIDpuYW1lPVwic3lzdGVtLmdldE5hbWUoZGV0ZWN0UHJvbm91bnMpXCJcbiAgICAgICAgICBAY2xpY2s9XCJzaG93QXZhdGFyID0gISFzeXN0ZW0uYXZhdGFyVXJsXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbCBxLW1sLW1kIHNlbGYtY2VudGVyXCI+XG4gICAgICAgIDxmaXR0eSBzdHlsZT1cImxpbmUtaGVpZ2h0OiAxMDAlXCIgOm9wdGlvbnM9XCJ7IG1heFNpemU6IDEwMCB9XCI+XG4gICAgICAgICAge3sgc3lzdGVtLmdldE5hbWUoZGV0ZWN0UHJvbm91bnMpIH19XG4gICAgICAgIDwvZml0dHk+XG4gICAgICA8L2Rpdj5cbiAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDxpbWcgdi1pZj1cInN5c3RlbS5iYW5uZXJVcmxcIiA6c3JjPVwic3lzdGVtLmJhbm5lclVybFwiIC8+XG4gICAgPHEtY2FyZC1hY3Rpb25zXG4gICAgICBjbGFzcz1cImJnLXByaW1hcnkgdGV4dC13aGl0ZVwiXG4gICAgICA6c3R5bGU9XCJcbiAgICAgICAgbG9va3VwLmNvbG9yQWNjZW50XG4gICAgICAgICAgPyBgbWluLWhlaWdodDogNTJweDsgYmFja2dyb3VuZC1jb2xvcjogIyR7c3lzdGVtLmNvbG9yfSAhaW1wb3J0YW50O2BcbiAgICAgICAgICA6ICcnXG4gICAgICBcIlxuICAgID5cbiAgICAgIDxxLWJ0blxuICAgICAgICB2LWlmPVwicG9wdXBcIlxuICAgICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgICBsYWJlbD1cIlZpZXdcIlxuICAgICAgICA6dG89XCJgL2xvb2t1cC9zeXN0ZW0vJHtzeXN0ZW0uaWR9YFwiXG4gICAgICAvPlxuXG4gICAgICA8IS0tIEZvbGxvdy9VbmZvbGxvdyBCdXR0b25zIC0tPlxuICAgICAgPHEtYnRuXG4gICAgICAgIHYtaWY9XCIhc3lzdGVtU3RvcmUuaGFzKHN5c3RlbS5pZClcIlxuICAgICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgICBpY29uPVwiZ3JvdXBfYWRkXCJcbiAgICAgICAgbGFiZWw9XCJGb2xsb3dcIlxuICAgICAgICBAY2xpY2s9XCJmb2xsb3dTeXN0ZW0oc3lzdGVtLmlkKVwiXG4gICAgICAvPlxuICAgICAgPHEtYnRuXG4gICAgICAgIHYtZWxzZVxuICAgICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgICBpY29uPVwiZ3JvdXBfcmVtb3ZlXCJcbiAgICAgICAgbGFiZWw9XCJVbmZvbGxvd1wiXG4gICAgICAgIEBjbGljaz1cInVuZm9sbG93U3lzdGVtKHN5c3RlbS5pZClcIlxuICAgICAgLz5cbiAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgIDxxLWNhcmQtc2VjdGlvbiB2LWlmPVwiZGV0YWlsc1wiIGNsYXNzPVwicS1wdC1ub25lXCI+XG4gICAgICA8cS1tYXJrdXAtdGFibGUgZmxhdCBzZXBhcmF0b3I9XCJob3Jpem9udGFsXCIgc3R5bGU9XCJvdmVyZmxvdzogaGlkZGVuXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+SUQ8L3RkPlxuICAgICAgICAgICAgPHRkPnt7IHN5c3RlbS5mb3JtYXRJZChpZE9wdHMpIH19PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5DcmVhdGVkIEF0PC90ZD5cbiAgICAgICAgICAgIDx0ZD57eyBzeXN0ZW0uY3JlYXRlZEF0LmZvcm1hdCgnWVlZWS1NTS1ERCcpIH19PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5UYWc8L3RkPlxuICAgICAgICAgICAgPHRkPnt7IHN5c3RlbS50YWcgfX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIHYtaWY9XCJzeXN0ZW0uZ2V0UHJvbm91bnMoZGV0ZWN0UHJvbm91bnMpXCI+XG4gICAgICAgICAgICA8dGQ+UHJvbm91bnM8L3RkPlxuICAgICAgICAgICAgPHRkPnt7IHN5c3RlbS5nZXRQcm9ub3VucyhkZXRlY3RQcm9ub3VucykgfX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIHYtaWY9XCJzeXN0ZW0uY29sb3JcIj5cbiAgICAgICAgICAgIDx0ZD5Db2xvcjwvdGQ+XG4gICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgOnN0eWxlPVwie1xuICAgICAgICAgICAgICAgIGNvbG9yOiBgIyR7c3lzdGVtLmNvbG9yfWAsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICc0OHB4JyxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMTZweCcsXG4gICAgICAgICAgICAgICAgdGV4dEluZGVudDogJy00cHgnLFxuICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJmJ1bGw7XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3EtbWFya3VwLXRhYmxlPlxuICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgPHEtc2VwYXJhdG9yIC8+XG4gICAgPHEtY2FyZC1zZWN0aW9uIHYtaWY9XCJzeXN0ZW0uZGVzY3JpcHRpb24gJiYgc3lzdGVtLmRlc2NyaXB0aW9uLmxlbmd0aCA+IDBcIj5cbiAgICAgIDwhLS0gZXNsaW50LWRpc2FibGUgdnVlL25vLXYtaHRtbCAtLSBuZWVkZWQgZm9yIHJlbmRlcmluZyAtLT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgIHYtaHRtbD1cInJlbmRlclBrRGVzY3JpcHRpb24oc3lzdGVtLmRlc2NyaXB0aW9uKVwiXG4gICAgICAvPlxuICAgICAgPCEtLSBlc2xpbnQtZW5hYmxlIHZ1ZS9uby12LWh0bWwgLS0+XG4gICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICA8YXZhdGFyLWRpYWxvZ1xuICAgICAgdi1pZj1cInN5c3RlbS5hdmF0YXJVcmxcIlxuICAgICAgdi1tb2RlbD1cInNob3dBdmF0YXJcIlxuICAgICAgOmF2YXRhci11cmw9XCJzeXN0ZW0uYXZhdGFyVXJsXCJcbiAgICAvPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBGaXR0eSB9IGZyb20gJ0BsdW1lbnBpbmsvdnVlMy1maXR0eSc7XG5pbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJztcbmltcG9ydCBJbml0aWFsRmFsbGJhY2tBdmF0YXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvSW5pdGlhbEZhbGxiYWNrQXZhdGFyLnZ1ZSc7XG5cbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJ3NyYy9tb2RlbHMvU3lzdGVtJztcbmltcG9ydCB7IHVzZVNldHRpbmdzU3RvcmUgfSBmcm9tICdzcmMvc3RvcmVzL3NldHRpbmdzLXN0b3JlJztcbmltcG9ydCB7IHVzZVN5c3RlbVN0b3JlIH0gZnJvbSAnc3JjL3N0b3Jlcy9zeXN0ZW0tc3RvcmUnO1xuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBBdmF0YXJEaWFsb2cgZnJvbSAnc3JjL2NvbXBvbmVudHMvQ2FyZC9BdmF0YXJEaWFsb2cudnVlJztcbmltcG9ydCB7IGlzNDA0LCByZW5kZXJQa0Rlc2NyaXB0aW9uIH0gZnJvbSAnc3JjL3V0aWwnO1xuaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcblxuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0IHNldHRpbmdzID0gdXNlU2V0dGluZ3NTdG9yZSgpO1xuY29uc3Qgc3lzdGVtU3RvcmUgPSB1c2VTeXN0ZW1TdG9yZSgpO1xuXG5jb25zdCB7IGRldGVjdFByb25vdW5zLCBsb29rdXAsIGlkOiBpZE9wdHMgfSA9IHN0b3JlVG9SZWZzKHNldHRpbmdzKTtcbmNvbnN0IHNob3dBdmF0YXIgPSByZWYoZmFsc2UpO1xuXG53aXRoRGVmYXVsdHMoXG4gIGRlZmluZVByb3BzPHsgc3lzdGVtOiBTeXN0ZW07IGRldGFpbHM/OiBib29sZWFuOyBwb3B1cD86IGJvb2xlYW4gfT4oKSxcbiAge1xuICAgIGRldGFpbHM6IHRydWUsXG4gICAgcG9wdXA6IGZhbHNlLFxuICB9LFxuKTtcblxuYXN5bmMgZnVuY3Rpb24gZm9sbG93U3lzdGVtKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzeXN0ZW1TdG9yZS5hZGQoaWQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGlzNDA0KGUpKSB7XG4gICAgICByZXR1cm4gJHEubm90aWZ5KHtcbiAgICAgICAgdHlwZTogJ25lZ2F0aXZlJyxcbiAgICAgICAgbWVzc2FnZTogYEVycm9yIGFkZGluZyBzeXN0ZW0gJHtpZH1gLFxuICAgICAgICBjYXB0aW9uOiBgJHtlLnN0YXR1c306ICR7ZS5tZXNzYWdlfSAoJHtlLmNvZGV9KWAsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aHJvdyBlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuZm9sbG93U3lzdGVtKGlkOiBzdHJpbmcpIHtcbiAgc3lzdGVtU3RvcmUuZGVsZXRlKGlkKTtcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJjc3NcIj5cbnRkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG50ZDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nIHYtbW9kZWw9XCJ2aXNpYmxlXCI+XG4gICAgPHN5c3RlbS1jYXJkXG4gICAgICB2LWlmPVwic3lzdGVtICYmICFtZW1iZXIgJiYgIWdyb3VwXCJcbiAgICAgIDpzeXN0ZW09XCJzeXN0ZW1cIlxuICAgICAgOmRldGFpbHM9XCJzaG93Q2FyZERldGFpbHNcIlxuICAgICAgOnBvcHVwPVwidHJ1ZVwiXG4gICAgLz5cbiAgICA8bWVtYmVyLWNhcmRcbiAgICAgIHYtaWY9XCJtZW1iZXIgJiYgc3lzdGVtXCJcbiAgICAgIDptZW1iZXI9XCJtZW1iZXJcIlxuICAgICAgOnN5c3RlbT1cInN5c3RlbVwiXG4gICAgICA6ZGV0YWlscz1cInNob3dDYXJkRGV0YWlsc1wiXG4gICAgICA6cG9wdXA9XCJ0cnVlXCJcbiAgICAvPlxuICAgIDxncm91cC1jYXJkXG4gICAgICB2LWlmPVwiZ3JvdXAgJiYgc3lzdGVtXCJcbiAgICAgIDpncm91cD1cImdyb3VwXCJcbiAgICAgIDpzeXN0ZW09XCJzeXN0ZW1cIlxuICAgICAgOmRldGFpbHM9XCJzaG93Q2FyZERldGFpbHNcIlxuICAgICAgOnBvcHVwPVwidHJ1ZVwiXG4gICAgLz5cbiAgPC9xLWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBNZW1iZXIgfSBmcm9tICdzcmMvbW9kZWxzL01lbWJlcic7XG5pbXBvcnQgeyBTeXN0ZW0gfSBmcm9tICdzcmMvbW9kZWxzL1N5c3RlbSc7XG5pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO1xuXG5pbXBvcnQgR3JvdXBDYXJkIGZyb20gJ3NyYy9jb21wb25lbnRzL0NhcmQvR3JvdXBDYXJkLnZ1ZSc7XG5pbXBvcnQgTWVtYmVyQ2FyZCBmcm9tICdzcmMvY29tcG9uZW50cy9DYXJkL01lbWJlckNhcmQudnVlJztcbmltcG9ydCBTeXN0ZW1DYXJkIGZyb20gJ3NyYy9jb21wb25lbnRzL0NhcmQvU3lzdGVtQ2FyZC52dWUnO1xuaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSc7XG5pbXBvcnQgeyB1c2VTZXR0aW5nc1N0b3JlIH0gZnJvbSAnc3JjL3N0b3Jlcy9zZXR0aW5ncy1zdG9yZSc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJ3NyYy9tb2RlbHMvR3JvdXAnO1xuXG5jb25zdCB7IHNob3dDYXJkRGV0YWlscyB9ID0gc3RvcmVUb1JlZnModXNlU2V0dGluZ3NTdG9yZSgpKTtcblxuY29uc3QgdmlzaWJsZSA9IHJlZihmYWxzZSk7XG5jb25zdCBncm91cCA9IHJlZjxHcm91cCB8IG51bGw+KG51bGwpO1xuY29uc3QgbWVtYmVyID0gcmVmPE1lbWJlciB8IG51bGw+KG51bGwpO1xuY29uc3Qgc3lzdGVtID0gcmVmPFN5c3RlbSB8IG51bGw+KG51bGwpO1xuXG5mdW5jdGlvbiBzaG93KG9wdHM6IHsgc3lzdGVtPzogU3lzdGVtOyBtZW1iZXI/OiBNZW1iZXI7IGdyb3VwPzogR3JvdXAgfSkge1xuICBncm91cC52YWx1ZSA9IG9wdHMuZ3JvdXAgPz8gbnVsbDtcbiAgbWVtYmVyLnZhbHVlID0gb3B0cy5tZW1iZXIgPz8gbnVsbDtcbiAgc3lzdGVtLnZhbHVlID0gb3B0cy5zeXN0ZW0gPz8gbnVsbDtcblxuICB2aXNpYmxlLnZhbHVlID0gdHJ1ZTtcbn1cblxuZGVmaW5lRXhwb3NlKHtcbiAgc2hvdyxcbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl93aXRoQ3R4IiwiX2NyZWF0ZVZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ob2lzdGVkXzEiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ub3JtYWxpemVTdHlsZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfaG9pc3RlZF8zIiwiX2hvaXN0ZWRfNCIsIl9ob2lzdGVkXzUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBMEdBLFVBQU0sV0FBVyxpQkFBaUI7QUFDbEMsVUFBTSxFQUFFLGdCQUFnQixXQUFXLFlBQVksUUFBUTtBQUNqRCxVQUFBLGFBQWEsSUFBSSxLQUFLO0FBWTVCLFVBQU0sYUFBYTtBQUFBLE1BQVMsTUFBQTs7QUFDMUIsOEJBQVMsRUFBRSxTQUFYLG1CQUFpQixXQUFXLFdBQVc7QUFBQTtBQUFBLElBQ3pDOzs7Ozs7Ozs7Ozs7Ozs7O0FBeEhJLFNBQUFBO0lBU1EsU0FBQUMsUUFBQSxNQUFBOztBQUFBO0FBQUEsUUFBQUMsWUFSTixjQVFNLEVBQUEsT0FBQSxNQUFBLEdBQUE7QUFBQSxVQUFBLFNBTklELFFBQU0sTUFBSTtBQUFBLFlBQUFFLGdCQUFBLE9BRGxCQyxjQU1FO0FBQUEsY0FBQSxPQUFBLE1BQUEsUUFBQUosVUFKVyxHQUFBSyxZQUFBLE9BQUEsdUJBQUEsR0FBQTtBQUFBLGdCQUNWLEtBQUs7QUFBQSxnQkFDTCxNQUFNO0FBQUEsZ0JBQ04sS0FBSyxPQUFBLE1BQUE7QUFBQSxnQkFBQSxNQUFBLE9BQUEsTUFBQSxRQUFBO0FBQUE7OENBR1ZDLG1CQUlNLFFBQUEsSUFBQTtBQUFB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
