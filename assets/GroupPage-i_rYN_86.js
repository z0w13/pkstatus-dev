import { J as defineComponent, ah as usePluralKit, r as ref, w as watch, aW as useRoute, aZ as HTTPError, _ as _export_sfc, ag as createElementBlock, T as openBlock, S as createBlock, a0 as createCommentVNode, W as createVNode, ak as Fragment, a_ as QLinearProgress } from "./index-Czhz81pV.js";
import { G as GroupCard, D as DescriptionDialog } from "./DescriptionDialog-DIPOa9EK.js";
import MemberView from "./MemberView-DEGdul4u.js";
import "./QMarkupTable-Co_abH1I.js";
import "./MemberCard-BSciiHjk.js";
import "./InitialFallbackAvatar-BwzLwT9D.js";
import "./index-BPlwBMVZ.js";
import "./RelativeTimeDisplay-DvRrdQnD.js";
import "./QBtnToggle-CoGCBGeU.js";
import "./QBtnGroup-DSLUZYCx.js";
import "./QItem-DBhEHxap.js";
import "./QList-DTyO3bRG.js";
import "./MemberList-B4nLyTOS.js";
import "./QTable-BOq-QKNl.js";
import "./QSelect-DgwzAg-N.js";
import "./QMenu-BKVuNWhU.js";
import "./format-Dk2Vo7dJ.js";
import "./rtl-DDpZOXNn.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GroupPage",
  setup(__props, { expose: __expose }) {
    __expose();
    const route = useRoute();
    const pluralKit = usePluralKit();
    const status = ref("loading");
    const group = ref(null);
    const system = ref(null);
    const members = ref({
      loading: true,
      allowed: true,
      list: []
    });
    const dialog = ref();
    watch(
      () => route.params.id,
      async (newId) => {
        if (!newId || Array.isArray(newId)) {
          return;
        }
        group.value = null;
        try {
          group.value = await pluralKit.getGroup(newId);
          system.value = await pluralKit.getSystem(group.value.system);
        } catch (e) {
          if (e instanceof HTTPError) {
            if (e.status == 404) {
              status.value = "notfound";
            } else if (e.status == 403) {
              status.value = "forbidden";
            } else {
              throw e;
            }
          } else {
            throw e;
          }
        }
        try {
          members.value.list = await pluralKit.getGroupMembers(newId);
        } catch (e) {
          if (e instanceof HTTPError && e.status == 403) {
            members.value.allowed = false;
          } else {
            throw e;
          }
        }
        members.value.loading = false;
      },
      { immediate: true }
    );
    const __returned__ = { route, pluralKit, status, group, system, members, dialog, DescriptionDialog, GroupCard, MemberView };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 2,
  class: "row q-mt-lg q-pa-md bg-lighten q-pa-md"
};
const _hoisted_2 = {
  key: 3,
  class: "row q-mt-lg q-pa-md bg-lighten q-pa-md"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      $setup.group && $setup.system ? (openBlock(), createElementBlock(
        Fragment,
        { key: 0 },
        [
          createVNode($setup["GroupCard"], {
            group: $setup.group,
            system: $setup.system,
            flat: ""
          }, null, 8, ["group", "system"]),
          createVNode($setup["MemberView"], {
            system: $setup.system,
            members: $setup.members,
            dialog: $setup.dialog
          }, null, 8, ["system", "members", "dialog"])
        ],
        64
        /* STABLE_FRAGMENT */
      )) : $setup.status == "loading" ? (openBlock(), createBlock(QLinearProgress, {
        key: 1,
        indeterminate: ""
      })) : $setup.status == "forbidden" ? (openBlock(), createElementBlock("div", _hoisted_1, " Not Allowed To View Group ")) : $setup.status == "notfound" ? (openBlock(), createElementBlock("div", _hoisted_2, " Group Not Found ")) : createCommentVNode("v-if", true),
      createVNode(
        $setup["DescriptionDialog"],
        { ref: "dialog" },
        null,
        512
        /* NEED_PATCH */
      )
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const GroupPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/zowie/dev/pkstatus/src/pages/Lookup/GroupPage.vue"]]);
export {
  GroupPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBQYWdlLWlfcllOXzg2LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvTG9va3VwL0dyb3VwUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8dGVtcGxhdGUgdi1pZj1cImdyb3VwICYmIHN5c3RlbVwiPlxuICAgIDxncm91cC1jYXJkIDpncm91cD1cImdyb3VwXCIgOnN5c3RlbT1cInN5c3RlbVwiIGZsYXQgLz5cbiAgICA8bWVtYmVyLXZpZXcgOnN5c3RlbT1cInN5c3RlbVwiIDptZW1iZXJzPVwibWVtYmVyc1wiIDpkaWFsb2c9XCJkaWFsb2dcIiAvPlxuICA8L3RlbXBsYXRlPlxuICA8cS1saW5lYXItcHJvZ3Jlc3Mgdi1lbHNlLWlmPVwic3RhdHVzID09ICdsb2FkaW5nJ1wiIGluZGV0ZXJtaW5hdGUgLz5cbiAgPGRpdlxuICAgIHYtZWxzZS1pZj1cInN0YXR1cyA9PSAnZm9yYmlkZGVuJ1wiXG4gICAgY2xhc3M9XCJyb3cgcS1tdC1sZyBxLXBhLW1kIGJnLWxpZ2h0ZW4gcS1wYS1tZFwiXG4gID5cbiAgICBOb3QgQWxsb3dlZCBUbyBWaWV3IEdyb3VwXG4gIDwvZGl2PlxuICA8ZGl2XG4gICAgdi1lbHNlLWlmPVwic3RhdHVzID09ICdub3Rmb3VuZCdcIlxuICAgIGNsYXNzPVwicm93IHEtbXQtbGcgcS1wYS1tZCBiZy1saWdodGVuIHEtcGEtbWRcIlxuICA+XG4gICAgR3JvdXAgTm90IEZvdW5kXG4gIDwvZGl2PlxuICA8ZGVzY3JpcHRpb24tZGlhbG9nIHJlZj1cImRpYWxvZ1wiIC8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHsgSFRUUEVycm9yIH0gZnJvbSAncGthcGktdHMvZXJyb3JzJztcblxuaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnc3JjL21vZGVscy9TeXN0ZW0nO1xuaW1wb3J0IHsgTWVtYmVyIH0gZnJvbSAnc3JjL21vZGVscy9NZW1iZXInO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICdzcmMvbW9kZWxzL0dyb3VwJztcblxuaW1wb3J0IHsgdXNlUGx1cmFsS2l0IH0gZnJvbSAnYm9vdC9wbHVyYWxLaXQnO1xuXG5pbXBvcnQgRGVzY3JpcHRpb25EaWFsb2cgZnJvbSAnc3JjL2NvbXBvbmVudHMvRGVzY3JpcHRpb25EaWFsb2cudnVlJztcbmltcG9ydCBHcm91cENhcmQgZnJvbSAnc3JjL2NvbXBvbmVudHMvQ2FyZC9Hcm91cENhcmQudnVlJztcbmltcG9ydCBNZW1iZXJWaWV3IGZyb20gJ3NyYy9wYWdlcy9Mb29rdXAvU3lzdGVtL1ZpZXcvTWVtYmVyVmlldy52dWUnO1xuXG5jb25zdCByb3V0ZSA9IHVzZVJvdXRlKCk7XG5cbmNvbnN0IHBsdXJhbEtpdCA9IHVzZVBsdXJhbEtpdCgpO1xuXG5jb25zdCBzdGF0dXMgPSByZWY8J2xvYWRpbmcnIHwgJ2ZvcmJpZGRlbicgfCAnbm90Zm91bmQnPignbG9hZGluZycpO1xuY29uc3QgZ3JvdXAgPSByZWY8R3JvdXAgfCBudWxsPihudWxsKTtcbmNvbnN0IHN5c3RlbSA9IHJlZjxTeXN0ZW0gfCBudWxsPihudWxsKTtcbmNvbnN0IG1lbWJlcnMgPSByZWY8e1xuICBsb2FkaW5nOiBib29sZWFuO1xuICBhbGxvd2VkOiBib29sZWFuO1xuICBsaXN0OiBSZWFkb25seUFycmF5PE1lbWJlcj47XG59Pih7XG4gIGxvYWRpbmc6IHRydWUsXG4gIGFsbG93ZWQ6IHRydWUsXG4gIGxpc3Q6IFtdLFxufSk7XG5cbmNvbnN0IGRpYWxvZyA9IHJlZigpO1xuXG53YXRjaChcbiAgKCkgPT4gcm91dGUucGFyYW1zLmlkLFxuICBhc3luYyAobmV3SWQpID0+IHtcbiAgICBpZiAoIW5ld0lkIHx8IEFycmF5LmlzQXJyYXkobmV3SWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZ3JvdXAudmFsdWUgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGdyb3VwLnZhbHVlID0gYXdhaXQgcGx1cmFsS2l0LmdldEdyb3VwKG5ld0lkKTtcbiAgICAgIHN5c3RlbS52YWx1ZSA9IGF3YWl0IHBsdXJhbEtpdC5nZXRTeXN0ZW0oZ3JvdXAudmFsdWUuc3lzdGVtKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIEhUVFBFcnJvcikge1xuICAgICAgICBpZiAoZS5zdGF0dXMgPT0gNDA0KSB7XG4gICAgICAgICAgLy8gTm90IEZvdW5kXG4gICAgICAgICAgc3RhdHVzLnZhbHVlID0gJ25vdGZvdW5kJztcbiAgICAgICAgfSBlbHNlIGlmIChlLnN0YXR1cyA9PSA0MDMpIHtcbiAgICAgICAgICAvLyBGb3JiaWRkZW5cbiAgICAgICAgICBzdGF0dXMudmFsdWUgPSAnZm9yYmlkZGVuJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlOyAvLyBSZXRocm93IGlmIHdlIHNob3VsZG4ndCBoYW5kbGUgdGhlIGVycm9yXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7IC8vIFJldGhyb3cgaWYgd2Ugc2hvdWxkbid0IGhhbmRsZSB0aGUgZXJyb3JcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbWVtYmVycy52YWx1ZS5saXN0ID0gYXdhaXQgcGx1cmFsS2l0LmdldEdyb3VwTWVtYmVycyhuZXdJZCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBIVFRQRXJyb3IgJiYgZS5zdGF0dXMgPT0gNDAzKSB7XG4gICAgICAgIC8vIEZvcmJpZGRlblxuICAgICAgICBtZW1iZXJzLnZhbHVlLmFsbG93ZWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGU7IC8vIFJldGhyb3cgaWYgd2Ugc2hvdWxkbid0IGhhbmRsZSB0aGUgZXJyb3JcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtYmVycy52YWx1ZS5sb2FkaW5nID0gZmFsc2U7XG4gIH0sXG4gIHsgaW1tZWRpYXRlOiB0cnVlIH0sXG4pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlQ29tbWVudFZOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0NBLFVBQU0sUUFBUSxTQUFTO0FBRXZCLFVBQU0sWUFBWSxhQUFhO0FBRXpCLFVBQUEsU0FBUyxJQUEwQyxTQUFTO0FBQzVELFVBQUEsUUFBUSxJQUFrQixJQUFJO0FBQzlCLFVBQUEsU0FBUyxJQUFtQixJQUFJO0FBQ3RDLFVBQU0sVUFBVSxJQUliO0FBQUEsTUFDRCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxNQUFNLENBQUE7QUFBQSxJQUFDLENBQ1I7QUFFRCxVQUFNLFNBQVMsSUFBSTtBQUVuQjtBQUFBLE1BQ0UsTUFBTSxNQUFNLE9BQU87QUFBQSxNQUNuQixPQUFPLFVBQVU7QUFDZixZQUFJLENBQUMsU0FBUyxNQUFNLFFBQVEsS0FBSyxHQUFHO0FBQ2xDO0FBQUEsUUFBQTtBQUdGLGNBQU0sUUFBUTtBQUVWLFlBQUE7QUFDRixnQkFBTSxRQUFRLE1BQU0sVUFBVSxTQUFTLEtBQUs7QUFDNUMsaUJBQU8sUUFBUSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTTtBQUFBLGlCQUNwRCxHQUFHO0FBQ1YsY0FBSSxhQUFhLFdBQVc7QUFDdEIsZ0JBQUEsRUFBRSxVQUFVLEtBQUs7QUFFbkIscUJBQU8sUUFBUTtBQUFBLFlBQUEsV0FDTixFQUFFLFVBQVUsS0FBSztBQUUxQixxQkFBTyxRQUFRO0FBQUEsWUFBQSxPQUNWO0FBQ0Msb0JBQUE7QUFBQSxZQUFBO0FBQUEsVUFDUixPQUNLO0FBQ0Msa0JBQUE7QUFBQSxVQUFBO0FBQUEsUUFDUjtBQUdFLFlBQUE7QUFDRixrQkFBUSxNQUFNLE9BQU8sTUFBTSxVQUFVLGdCQUFnQixLQUFLO0FBQUEsaUJBQ25ELEdBQUc7QUFDVixjQUFJLGFBQWEsYUFBYSxFQUFFLFVBQVUsS0FBSztBQUU3QyxvQkFBUSxNQUFNLFVBQVU7QUFBQSxVQUFBLE9BQ25CO0FBQ0Msa0JBQUE7QUFBQSxVQUFBO0FBQUEsUUFDUjtBQUVGLGdCQUFRLE1BQU0sVUFBVTtBQUFBLE1BQzFCO0FBQUEsTUFDQSxFQUFFLFdBQVcsS0FBSztBQUFBLElBQ3BCOzs7Ozs7TUF4RkksYUFBTTtBQUFBLEVBQUEsS0FBQTtBQUFBOztNQU1OLGFBQU07QUFBQSxFQUFBLEtBQUE7QUFBQTs7O0FBYlIsU0FBQUEsVUFBQSxHQUFBQztBQUFBQSxJQUdXQztBQUFBQSxJQUFBO0FBQUEsSUFBQTtBQUFBLE1BQUEsT0FGVCxnQkFBbUQsVUFBL0JGLFVBQUEsR0FBQUM7QUFBQUEsUUFBS0M7QUFBQUEsUUFBQSxFQUFBLEtBQUEsRUFBQTtBQUFBLFFBQUE7QUFBQSxVQUFBQyxZQUFXLE9BQU0sV0FBQSxHQUFBO0FBQUEsWUFBRSxPQUFJLE9BQUE7QUFBQSxZQUFBLFFBQUEsT0FBQTtBQUFBLFlBQ2hELE1BQUE7QUFBQSxVQUFBLEdBQWMsTUFBTSxHQUFRLENBQUEsU0FBQSxRQUFBLENBQUE7QUFBQSxVQUFBQSxZQUFZLE9BQU8sWUFBQSxHQUFBO0FBQUEsWUFBRyxRQUFRLE9BQUE7QUFBQSxZQUFBLFNBQUEsT0FBQTtBQUFBO1VBRXhCLEdBQUEsTUFBQSxHQUFBLENBQUEsVUFBQSxXQUFBLFFBQUEsQ0FBQTtBQUFBLFFBQUE7QUFBQTs7TUFBcEMsS0FBQSxPQUFBLFVBQUEsYUFBQUgsVUFBZ0UsR0FBQUksWUFBQSxpQkFBQTtBQUFBLFFBQUEsS0FBQTtBQUFBLFFBRW5ELGVBQU07QUFBQSxNQUFBLENBTU4sS0FBQSxPQUFBLFVBQU0sK0NBRG5CLE9BS00sWUFBQSw2QkFBTixvQ0FDQUosYUFBbUNDLG1CQUFmLE9BQUksWUFBUSxtQkFBQSxLQUFBSSxtQkFBQSxRQUFBLElBQUE7QUFBQTs7Ozs7Ozs7Ozs7OzsifQ==
