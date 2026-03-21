/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-bb35996e'], (function (workbox) { 'use strict';

  workbox.setCacheNameDetails({
    prefix: "pkstatus"
  });
  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/AddPage-BMT5AG-J.js",
    "revision": "d6ede7770ffef64af66d760e8b24a1c3"
  }, {
    "url": "assets/DebugPage-C2c2HVxq.js",
    "revision": "5106ae129ddc4d6dada475c60ff02e6f"
  }, {
    "url": "assets/DebugPage-G8ypIlxE.css",
    "revision": "d7e61ccae2d474d15671fadcac9e7208"
  }, {
    "url": "assets/DescriptionDialog-DIPOa9EK.js",
    "revision": "7f78f44f09606e8d07541f4d773c72a2"
  }, {
    "url": "assets/DescriptionDialog-DYlpn1_y.css",
    "revision": "665fc1edefcfa1f0d9a4f0ca9ba5a4cd"
  }, {
    "url": "assets/ErrorNotFound-DIOzLQb6.js",
    "revision": "688750651bbdaa9fe1e1d4eaff1febf1"
  }, {
    "url": "assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",
    "revision": "3e1afe59fa075c9e04c436606b77f640"
  }, {
    "url": "assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",
    "revision": "a4160421d2605545f69a4cd6cd642902"
  }, {
    "url": "assets/format-Dk2Vo7dJ.js",
    "revision": "9f3bc0d7f0675980478fb50c144f851d"
  }, {
    "url": "assets/FronterView-D9RwrOjC.js",
    "revision": "97b2ca933aee67a30c5400e6d5d6e9ca"
  }, {
    "url": "assets/GroupPage-i_rYN_86.js",
    "revision": "5ce3b86221ddc54427a96b5a0ca98e88"
  }, {
    "url": "assets/GroupView-DZDQTHji.js",
    "revision": "bb88317ba3c8dbe4c6efa3e689bb43ea"
  }, {
    "url": "assets/index-BHVv1LVn.css",
    "revision": "6fc10dd29cebc3adfbaf3949f09dee3a"
  }, {
    "url": "assets/index-BPlwBMVZ.js",
    "revision": "bc38625a8bfea3c76a6206e5895f187a"
  }, {
    "url": "assets/IndexPage-Bqw5juQA.js",
    "revision": "f9f38230961eb53b7fd5643803c2088c"
  }, {
    "url": "assets/IndexPage-Cub3E9ud.js",
    "revision": "99aca609a73702cafcca24316f89105a"
  }, {
    "url": "assets/InitialFallbackAvatar-BwzLwT9D.js",
    "revision": "e1634fa3e20c4557bc263b2b72f563bc"
  }, {
    "url": "assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuaabVmUiAw-CNa4tw4G.woff",
    "revision": "2d29775851b8463053deb35b21b5d5c8"
  }, {
    "url": "assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bVmUiAw-CHKg1YId.woff",
    "revision": "be27354f07345fafe8dfc84117bbafd4"
  }, {
    "url": "assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAw-yBxCyPWP.woff",
    "revision": "c8cea161abfb039c97a11c26dff2f546"
  }, {
    "url": "assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAw-3fZ6d7DD.woff",
    "revision": "585ad11be98f8f044923a71898ddfde6"
  }, {
    "url": "assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjalmUiAw-BepdiOnY.woff",
    "revision": "2cadc82e8484ccac69caddc849f603be"
  }, {
    "url": "assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZtalmUiAw-4ZhHFPot.woff",
    "revision": "51c41b1c2668c088c7cce3fa116396e1"
  }, {
    "url": "assets/LabeledTile-CmcEf7Nd.js",
    "revision": "2580c97268ac1d2826f587af78fd6f7b"
  }, {
    "url": "assets/ListLayout-ZqRfyPB5.js",
    "revision": "5a7879f2dbc1cc3d9644048d28bc7c80"
  }, {
    "url": "assets/MainLayout-BAD_G7Gr.js",
    "revision": "c5f75e8d29b74c25b7b673115f6b3fba"
  }, {
    "url": "assets/MainLayout-C-kvKXNE.css",
    "revision": "b3a0cc002a9bbf4d70aba6d4457df2eb"
  }, {
    "url": "assets/ManagePage-DeabQo4r.js",
    "revision": "c27cfc042e2520c5050af8f033d1afb4"
  }, {
    "url": "assets/MemberCard-BSciiHjk.js",
    "revision": "eec49261be9e91db800694a87c15f190"
  }, {
    "url": "assets/MemberCard-wvRKA48X.css",
    "revision": "11bd6c720e1c173bff421799d2112521"
  }, {
    "url": "assets/MemberList-B4nLyTOS.js",
    "revision": "838d1bd7ce95d995903103dc9acbce9c"
  }, {
    "url": "assets/MemberPage-CrkiR9zO.js",
    "revision": "f206ba3569f674f70d691206d6aefac3"
  }, {
    "url": "assets/MemberView-DEGdul4u.js",
    "revision": "95022f3e30d18a37dbd1e3b1105ade99"
  }, {
    "url": "assets/PageTitle-BKiEeIBH.js",
    "revision": "ba43fc10c11e46bf85d875ed039fef90"
  }, {
    "url": "assets/PageTitle-DE4KLhhC.css",
    "revision": "659f737e5fd760a6837ec48754465c6f"
  }, {
    "url": "assets/QBtnDropdown-Q5rxQ8Ix.js",
    "revision": "8266417b2103ca96fc5790d3a6747ca7"
  }, {
    "url": "assets/QBtnGroup-DSLUZYCx.js",
    "revision": "e09e734a42de87060452099287ac83da"
  }, {
    "url": "assets/QBtnToggle-CoGCBGeU.js",
    "revision": "380796d405a5fb1a70929d3985419d59"
  }, {
    "url": "assets/QFooter-fN0Awtju.js",
    "revision": "ec154def25a0a764d6c69bfed115bf57"
  }, {
    "url": "assets/QItem-DBhEHxap.js",
    "revision": "2b03e7e9d49cf989d72048fe7bcfc55f"
  }, {
    "url": "assets/QList-DTyO3bRG.js",
    "revision": "4732cc0d0cac7afa56b21a487a7c2b56"
  }, {
    "url": "assets/QMarkupTable-Co_abH1I.js",
    "revision": "2e97cf7b208f93d4c3ff275a31deb670"
  }, {
    "url": "assets/QMenu-BKVuNWhU.js",
    "revision": "e69f05f551f34d03e7e84f0086d826d2"
  }, {
    "url": "assets/QPage-B7Tg8hoM.js",
    "revision": "431097d7966af69c439360aabc9525b0"
  }, {
    "url": "assets/QPageSticky-Cu8DVAYK.js",
    "revision": "b5575c70c6d0fc74bd7496197752fd61"
  }, {
    "url": "assets/QResizeObserver-C6eZlNbd.js",
    "revision": "24cb55094bf8bfb3818209850361d4b4"
  }, {
    "url": "assets/QScrollObserver-DaBWFe3T.js",
    "revision": "022d6b999c818b63c889bf55e5f2ed25"
  }, {
    "url": "assets/QSelect-DgwzAg-N.js",
    "revision": "54ec5f4088726cd39bff9608c9093622"
  }, {
    "url": "assets/QSkeleton-Bsi1r0jE.js",
    "revision": "8ed1a97799b69d051b75144f904d4100"
  }, {
    "url": "assets/QTable-BOq-QKNl.js",
    "revision": "1dd00598e6f1bd7f7714ed11ff8ecfdf"
  }, {
    "url": "assets/QTabs-Bu6DNyVi.js",
    "revision": "9a8994bb4b4c9df599b5ed653f1438ce"
  }, {
    "url": "assets/QToolbar-BvVglfo1.js",
    "revision": "2cabda45c88da4a2b8ef1372678adecc"
  }, {
    "url": "assets/RelativeTimeDisplay-DvRrdQnD.js",
    "revision": "eb5fe9730b775b5403111b394ed253fb"
  }, {
    "url": "assets/rtl-DDpZOXNn.js",
    "revision": "41525eb5d5bb3c11fb49c1c4c1d8541f"
  }, {
    "url": "assets/SettingsPage-BmAMcfId.js",
    "revision": "93ed83e8b937c0bc64f2e69fc8989aa2"
  }, {
    "url": "assets/StatusPage-DivF3-oP.js",
    "revision": "5036b0bbaa9b0194c4e7d0ca38277be1"
  }, {
    "url": "assets/SwitchPage-BRm06QQv.js",
    "revision": "2351b3a97fed31f692d4c110f183fd25"
  }, {
    "url": "assets/TableLayout-irxvUhrV.js",
    "revision": "74841eadc988189aadb643c8bb65babf"
  }, {
    "url": "assets/TileLayout-Xc8MByW3.js",
    "revision": "1545bf23da47416ad2e617c3ebc8fa55"
  }, {
    "url": "assets/TouchPan-zKzWXi0t.js",
    "revision": "7a47f3dbe8ea114627624a2965913c67"
  }, {
    "url": "favicon.ico",
    "revision": "21451c6b9937a4bda38bf2d7d91b2ad6"
  }, {
    "url": "icons/apple-icon-120x120.png",
    "revision": "44f338434c8a6a3b9c871042b462640f"
  }, {
    "url": "icons/apple-icon-152x152.png",
    "revision": "4849942a3565df10d7f79ecb460cbdba"
  }, {
    "url": "icons/apple-icon-167x167.png",
    "revision": "be3ed81b0eae24d149bc16df1266013f"
  }, {
    "url": "icons/apple-icon-180x180.png",
    "revision": "cbeddfc8eed49334b19d2bfb0a192eb8"
  }, {
    "url": "icons/apple-launch-1080x2340.png",
    "revision": "0ec56bd2156aa5a8f441831f7ee405d0"
  }, {
    "url": "icons/apple-launch-1125x2436.png",
    "revision": "4292428004977057da1709c74b2460da"
  }, {
    "url": "icons/apple-launch-1170x2532.png",
    "revision": "f92c1d6964a82aa73cb4f72d86e07429"
  }, {
    "url": "icons/apple-launch-1179x2556.png",
    "revision": "01a464be5bcf93f475b7c4db037b5fcb"
  }, {
    "url": "icons/apple-launch-1242x2208.png",
    "revision": "1018131264fe3fe28c02ebba1a1560b8"
  }, {
    "url": "icons/apple-launch-1242x2688.png",
    "revision": "5619c74f28be1f1124340306d0b9e28e"
  }, {
    "url": "icons/apple-launch-1284x2778.png",
    "revision": "be79652d1f5484235e306c9e34b9df0c"
  }, {
    "url": "icons/apple-launch-1290x2796.png",
    "revision": "36ea2af30e3652b56dafc5403a4d56ef"
  }, {
    "url": "icons/apple-launch-1536x2048.png",
    "revision": "db08e7237a38d1683be0571dcd2dfcc3"
  }, {
    "url": "icons/apple-launch-1620x2160.png",
    "revision": "706de5b1086900479fa8da56b8023c52"
  }, {
    "url": "icons/apple-launch-1668x2224.png",
    "revision": "05a967fc6b08f617fd4f7da044d8f49e"
  }, {
    "url": "icons/apple-launch-1668x2388.png",
    "revision": "f34d573c399eee5deb121882a06ab542"
  }, {
    "url": "icons/apple-launch-2048x2732.png",
    "revision": "be2d99e2fabe4d58d9d09fe436e18c22"
  }, {
    "url": "icons/apple-launch-750x1334.png",
    "revision": "22bbfc246ea30e850a2925c2f511ea2a"
  }, {
    "url": "icons/apple-launch-828x1792.png",
    "revision": "11dcbd0cdd68ea4b2a8bc56c3f0f2388"
  }, {
    "url": "icons/favicon-128x128.png",
    "revision": "44500d412c35b2d2a57707404c329322"
  }, {
    "url": "icons/favicon-16x16.png",
    "revision": "2901c720feb95997c0f125dc0a9336a8"
  }, {
    "url": "icons/favicon-32x32.png",
    "revision": "a325fda961e50a10d10a10a6aa6a4932"
  }, {
    "url": "icons/favicon-96x96.png",
    "revision": "6f2b2d7cb50d479ab5e7388a92d255ed"
  }, {
    "url": "icons/icon-128x128.png",
    "revision": "44500d412c35b2d2a57707404c329322"
  }, {
    "url": "icons/icon-192x192.png",
    "revision": "4190db6fe8e5d9253ed534caa2e17748"
  }, {
    "url": "icons/icon-256x256.png",
    "revision": "efd0649cab5d9204bac850e873a8092e"
  }, {
    "url": "icons/icon-384x384.png",
    "revision": "e27e2479aa64842abb6a2e0af884a111"
  }, {
    "url": "icons/icon-512x512.png",
    "revision": "0fdab0ecd0ab8e7c5e93532681745318"
  }, {
    "url": "icons/ms-icon-144x144.png",
    "revision": "ffbc7794b6ac7eee146a5f4a28157fbf"
  }, {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "9418c4c5bb7ec6e7b093a3ec73799f1d"
  }, {
    "url": "index.html",
    "revision": "a5f5eaa8e949a652e1634c6d84d9cf33"
  }, {
    "url": "manifest.json",
    "revision": "64c1a78ec8267c3e66b987f16f8f6111"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html"), {
    denylist: [/sw\.js$/, /workbox-(.)*\\.js$/]
  }));

}));
//# sourceMappingURL=sw.js.map
