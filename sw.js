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
define(['./workbox-405b557b'], (function (workbox) { 'use strict';

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
    "url": "assets/AddPage-Brvcf5yi.js",
    "revision": "9066dc0ac2ab40a87786a70502dedd0d"
  }, {
    "url": "assets/axios-DRXDVRls.js",
    "revision": "1152603fde09ec70e5db689ceeb9b97f"
  }, {
    "url": "assets/DebugPage-CDR7RjvX.js",
    "revision": "2e1b1ad1bd1b4afbc28a3f51b2e6d485"
  }, {
    "url": "assets/DescriptionDialog-B1LiVJwM.js",
    "revision": "1763ebf9466be674da7c713a00a150a2"
  }, {
    "url": "assets/DescriptionDialog-DOCbKhs-.css",
    "revision": "b27df5fbafff7b0169aee24a0d907801"
  }, {
    "url": "assets/ErrorNotFound-CMnNDiSs.js",
    "revision": "363ba90833003e5a82ef8a0e531c5929"
  }, {
    "url": "assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",
    "revision": "3e1afe59fa075c9e04c436606b77f640"
  }, {
    "url": "assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",
    "revision": "a4160421d2605545f69a4cd6cd642902"
  }, {
    "url": "assets/format-esB8TFiE.js",
    "revision": "931541ab5ccd99acfcba346c5793e568"
  }, {
    "url": "assets/index-CCMugmE9.css",
    "revision": "8a4f4c60d45238fb9ca1311b06876de8"
  }, {
    "url": "assets/index-DRTIEHtT.js",
    "revision": "201beab04d99b61de0235cf116536616"
  }, {
    "url": "assets/IndexPage-DupZBgQR.js",
    "revision": "23be35d52287434e44481ac6cf20b469"
  }, {
    "url": "assets/InitialFallbackAvatar-B9wHc8ll.js",
    "revision": "af653cd3d010a12fe3cf16f372db14e3"
  }, {
    "url": "assets/KFOkCnqEu92Fr1MmgVxIIzQ-C5u4Lasg.woff",
    "revision": "4aa2e69855e3b83110a251c47fdd05fc"
  }, {
    "url": "assets/KFOlCnqEu92Fr1MmEU9fBBc--j0ba7u44.woff",
    "revision": "40bcb2b8cc5ed94c4c21d06128e0e532"
  }, {
    "url": "assets/KFOlCnqEu92Fr1MmSU5fBBc--CDXAfhRl.woff",
    "revision": "ea60988be8d6faebb4bc2a55b1f76e22"
  }, {
    "url": "assets/KFOlCnqEu92Fr1MmWUlfBBc--7z0HfM8a.woff",
    "revision": "0774a8b7ca338dc1aba5a0ec8f2b9454"
  }, {
    "url": "assets/KFOlCnqEu92Fr1MmYUtfBBc--Yv75Cvt_.woff",
    "revision": "bcb7c7e2499a055f0e2f93203bdb282b"
  }, {
    "url": "assets/KFOmCnqEu92Fr1Mu4mxM-CEBEUyyq.woff",
    "revision": "d3907d0ccd03b1134c24d3bcaf05b698"
  }, {
    "url": "assets/LabeledTile-B2Qh0RgH.js",
    "revision": "094272d25e7a67450748f903ab0d2129"
  }, {
    "url": "assets/ListLayout-CQPXPIvL.js",
    "revision": "8b202385ee5a48bcb0b36ebc00c3b645"
  }, {
    "url": "assets/MainLayout-Cc-FxKYd.css",
    "revision": "b3a0cc002a9bbf4d70aba6d4457df2eb"
  }, {
    "url": "assets/MainLayout-pQUN9-QH.js",
    "revision": "225de1faa1fd90f43822ab64ad0d4d69"
  }, {
    "url": "assets/ManagePage-7tO4sK0Z.js",
    "revision": "3c1bcd8ec4838e57ffccb24c433b6302"
  }, {
    "url": "assets/MemberCard-Bif0S6_X.js",
    "revision": "19dafd3d04463d5738b8c801dfc23b70"
  }, {
    "url": "assets/MemberCard-DM_Umtfp.css",
    "revision": "11bd6c720e1c173bff421799d2112521"
  }, {
    "url": "assets/MemberPage-DYGSdLU8.js",
    "revision": "ae6d9861a0196d92ffbab99532aec091"
  }, {
    "url": "assets/PageTitle-gQbGVrI-.js",
    "revision": "959580d966bd634afafd6f512b58a477"
  }, {
    "url": "assets/pkapi-DWEHrqR1.js",
    "revision": "72c4caad8b017b39dba229113c7540af"
  }, {
    "url": "assets/QBtnGroup-CFYXjxkf.js",
    "revision": "c51f32ef4262c64561bf943186e3e004"
  }, {
    "url": "assets/QBtnToggle-me-EbXoi.js",
    "revision": "3f688df9fd65f54ed4df70888dffe3d6"
  }, {
    "url": "assets/QItem-4sCyJUzG.js",
    "revision": "26b21bf7667417aafc0310bb164c4511"
  }, {
    "url": "assets/QList-DQhRiMIt.js",
    "revision": "3f7a8b101a057c3efc67c062327e950b"
  }, {
    "url": "assets/QMarkupTable-BsLt63RP.js",
    "revision": "6d0a969c1159f1961370b0ef2ce2817d"
  }, {
    "url": "assets/QMenu-CRzTXqO9.js",
    "revision": "6123f05a1cf50772dd1df4838a368e95"
  }, {
    "url": "assets/QPage-C2tXGOnV.js",
    "revision": "16bccb13642acc18f523fe60a1261bf5"
  }, {
    "url": "assets/QPageSticky-CCDCP62Z.js",
    "revision": "48ea8797f5bcbf8fb05e5797dd44a078"
  }, {
    "url": "assets/QSelect-B3454tSI.js",
    "revision": "7c2ef7648f6b5b095bd09c41d44b6eb5"
  }, {
    "url": "assets/QSkeleton-CNlw84Bc.js",
    "revision": "4339fa7ac1c69d479e9983d8a91c7a1d"
  }, {
    "url": "assets/RelativeTimeDisplay-SNX72-cs.js",
    "revision": "beb49d6023d1b34f8cba27001a1b0bbf"
  }, {
    "url": "assets/SettingsPage-ChbBRjuE.js",
    "revision": "3a8bd3140d03023b3c4616725eda4aa0"
  }, {
    "url": "assets/StatusPage-IrZe_6hP.js",
    "revision": "b005c0784dc9c0bb94048be0c1719ac6"
  }, {
    "url": "assets/SwitchPage-C2bQoqgx.js",
    "revision": "3e12787087280b70640c20cc8a26b04d"
  }, {
    "url": "assets/SystemPage-DT9vKsaV.js",
    "revision": "541f16b32eb6ac81edead8e8bdbbf326"
  }, {
    "url": "assets/TableLayout-B-_EJNO4.js",
    "revision": "9a4ba4eb136c31e9f9d7f1dd65b8971d"
  }, {
    "url": "assets/TileLayout-BPoxYyBM.js",
    "revision": "fb97015f205c7224dda3ff6c554725f0"
  }, {
    "url": "assets/TouchPan-24hdsJ-m.js",
    "revision": "2e67bbfa1c6a2b7015a6e20cfb733bbf"
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
    "revision": "7fa6dda0dc2b3b61999dd178ae701487"
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
