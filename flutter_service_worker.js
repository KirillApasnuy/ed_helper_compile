'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f68ebb8c36aeabd9d287160304254ffc",
"assets/AssetManifest.bin.json": "f5622b5741ffe84bb27c9cb567b99e3c",
"assets/AssetManifest.json": "976cf812eee570f368b58cf096579259",
"assets/assets/1.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/background.png": "4cf63ac64c4c29dbbbb9b5086c0d888b",
"assets/assets/ED%2520helper.zip": "61e4b723d828dd2844940764809e9ded",
"assets/assets/logo/google.png": "08e7e38dbbc043cbb28397aae0f89014",
"assets/assets/logo/google.svg": "4a061ae8f26caa945a94a899d9051e25",
"assets/assets/logo/instagram_blue.svg": "0f94c6bc74405b75ad13fcf82046cc74",
"assets/assets/logo/logo.ico": "d4876b25e1feaf3b2dc0f371a8134a27",
"assets/assets/logo/logo.png": "acfad2dcf13a56234675d5366253888b",
"assets/assets/logo/logo.svg": "c51aaedea1d314acbbf06702b63f35b7",
"assets/assets/logo/mail.png": "8cf824c441a10653980c3ad239556e5b",
"assets/assets/logo/mail.svg": "5260b782cd3972f189e5e9f574173c21",
"assets/assets/logo/telegram_blue.svg": "47ef22b5477943d844a2a14689211f67",
"assets/assets/logo/title_logo.svg": "2a50ed046acb86af858528cf5e7faa37",
"assets/assets/logo/vk.png": "9583f79bdb8ea75f02ef9bd172296072",
"assets/assets/logo/vk.svg": "c120f1f74b8b035f6beb7c0c4721d8bb",
"assets/assets/logo/vk_blue.svg": "065ec55d85da3ab114faec2fd7d82e46",
"assets/assets/logo/watsapp_blue.svg": "97281e506bb3698f52fbe8b4168c9e9d",
"assets/assets/logo/windows.svg": "eaeb5c8469ad244ba91d699ef921cbec",
"assets/assets/logo/yandex.png": "e8c799e8e67f709722bf0f5eb7024bb2",
"assets/assets/logo/yandex.svg": "8270ba8b284123ede9a777f9b88ba29d",
"assets/assets/logo.cur": "4efdc9c15a54873726a2de7c63b62311",
"assets/assets/logo_back.png": "2a2f610e8bec9afd6fbd5e74471f1ae9",
"assets/assets/logo_background_1.png": "6e70a37375d3d87607879ed89c9a7b14",
"assets/assets/logo_background_2.png": "8f98332a1a9cb7bccf2d16f559776c6e",
"assets/assets/logo_back_transparet.png": "fd9b2388812836fde8aef898dc8545aa",
"assets/assets/main_logo.png": "bde47053662192522edbd8068b891840",
"assets/assets/main_logo_light.png": "d2a697c55f4987aeaaab875e344d179c",
"assets/assets/review_img/alexey.png": "b43210176ba4e2ee4ca78d348528b015",
"assets/assets/review_img/anna.png": "63b88fb240706e535bc30ea2c241031d",
"assets/assets/review_img/hizri.png": "ebf7ad38d34da9f73ee44c056814c5a5",
"assets/assets/review_img/kate.png": "215098448af72e2f939b1eab9bd03a2a",
"assets/assets/review_img/olga.png": "72788f5deda2e2398f3760ee63afe5d9",
"assets/assets/svg/add.svg": "02bb2f6a707c2d07837ac1b552fd968d",
"assets/assets/svg/arrow_back.svg": "70a11fba16e1ed78fba959ab5446eee5",
"assets/assets/svg/arrow_down.svg": "e4d00bfe90df5761c943d7d393ff07b5",
"assets/assets/svg/arrow_right.svg": "923eb522e226c1030ee4ae47a358db3f",
"assets/assets/svg/arrow_right_black.svg": "96a04112fdd969387fdeb72bf082b76d",
"assets/assets/svg/arrow_up.svg": "e34d554db3c667b668cad99735f548c3",
"assets/assets/svg/attach_icon.svg": "4467eaef16e3658ea75c0e8c5ffbea1f",
"assets/assets/svg/attach_icon_disable.svg": "7b15b61ca83114be2fbddf4df2b4a2aa",
"assets/assets/svg/bot_message.svg": "efaabb79dd123fab2da59f1d6029dcdc",
"assets/assets/svg/camera.svg": "cdc854321e7925ca86fbda5d672e188b",
"assets/assets/svg/camera_disable.svg": "559fe4c2de9fd9b0bf9f9d6738fabf1b",
"assets/assets/svg/checkbox_icon.svg": "858b1c8ed49b2f43035a74854bcd85ff",
"assets/assets/svg/client_message.svg": "c925fd4d374cdc83a6ebef1cd4d5711b",
"assets/assets/svg/copy.svg": "2b02b5313e2eb91d993c6d5c19532d39",
"assets/assets/svg/delete_chat.svg": "2f1b5dcab9de46f3c6a7aeb6737e8a8c",
"assets/assets/svg/delete_icon.svg": "5b85e9e9d197994f20e41793cc8d6415",
"assets/assets/svg/done.svg": "845de97434aee9de0208bc58617998d1",
"assets/assets/svg/error.svg": "b52ffad07665c3d015db940028df67d2",
"assets/assets/svg/gallery.svg": "4bbc8e23b41bf487ce0766b972c04f91",
"assets/assets/svg/gallery_disable.svg": "bd088f718edb5c87f2de15a2d82f94da",
"assets/assets/svg/headline_substrate.svg": "6662effe21f500cc986473a9bb3c5b27",
"assets/assets/svg/ion_camera_sharp.svg": "8ad7aafa1d12470f0cfffb804ce566e4",
"assets/assets/svg/land.svg": "aa311126028e801036ab7418daa5a8f6",
"assets/assets/svg/listen.svg": "a237bb7a9526c82e3e430cd7f731ac17",
"assets/assets/svg/logos_mastercard.svg": "dcb63ef84efecd745599feffea62df62",
"assets/assets/svg/main_logo.svg": "5068e8a8238182a407775f498dbbe4e1",
"assets/assets/svg/menu.svg": "d2cd69dac746f3d2a345cc0c84350d90",
"assets/assets/svg/microphone.svg": "3a265f30ccb08ab6afc98a33d0b59012",
"assets/assets/svg/microphone_disable.svg": "86a9432707ac581a4f8bce89e07fe4bb",
"assets/assets/svg/photo_2024-11-22_14-30-45.jpg": "d57be9a189cf6bbd69eefc116517af6c",
"assets/assets/svg/play.svg": "85aa9664ec3089f7431b4e4a781159ba",
"assets/assets/svg/profile_icon.svg": "18a30c94ff59743027d99d5718358545",
"assets/assets/svg/save.svg": "0cb767c31bdb815304abec50a8b26ce9",
"assets/assets/svg/save_message.svg": "c74399fd6b0c3cdc3a4523315b51f386",
"assets/assets/svg/select_profile_icon.svg": "ed834b47e8a8f3b2e5731f1b8310c9d0",
"assets/assets/svg/send_message.svg": "ec6b642f0e30c940f58addf2a773ff83",
"assets/assets/svg/send_message_disable.svg": "7ea6cae2d6341e00d34e876cab41bf0f",
"assets/assets/svg/star.svg": "489a03c9538d9225985ef994d75e5b97",
"assets/assets/svg/title_menu.svg": "9dc9d6f6cdf2679acd61580861e77fa6",
"assets/assets/svg/trash.svg": "8d7c659c5158b88abbbdc69fad1b24a8",
"assets/assets/svg/trash_disable.svg": "728ac51968cb2600092fc751910d7cda",
"assets/assets/svg/video_part.svg": "691bafac16a8c8c8c18091f3274ea85e",
"assets/assets/svg/voice_massage_field.svg": "f25f7ee57058ed695d79c420b54e5d27",
"assets/assets/svg/voice_message.svg": "ccf0b648a598f0062ff2250112cf5095",
"assets/assets/voice_message.png": "2bd1f270b70b0197d4b9772649537462",
"assets/FontManifest.json": "3c6f2aec284ba6e927fd5e00fb6c4257",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "9c569adf46c77a33cdcc75bfc2a8e4ae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_sound/assets/js/async_processor.js": "1665e1cb34d59d2769956d2f14290274",
"assets/packages/flutter_sound/assets/js/tau_web.js": "32cc693445f561133647b10d1b97ca07",
"assets/packages/flutter_sound_web/howler/howler.js": "3030c6101d2f8078546711db0d1a24e9",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "7e0e9abfa360d15170e1523cd2fff125",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "7659d6a7015a8a4e14abaaf3321509df",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "4884497120ca121dfc6212ac2adcefe9",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "4ebb4a739617c6aad6f822df9c35dfed",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "9eee16a24e9de90f5ee3b411462e8f5a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8bff96f014f923f7eb6f84ee91c100b6",
"/": "8bff96f014f923f7eb6f84ee91c100b6",
"main.dart.js": "5e14aa6b9d05a99017e079128084ffe8",
"manifest.json": "803f2b3d9efa21923f1bff2c076f3129",
"version.json": "23086162bdb2d8ae13299e3e4826de3a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
