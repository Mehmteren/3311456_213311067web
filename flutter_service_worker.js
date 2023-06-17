'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1813b2b3231cc55647cc51ad05aac84e",
".git/config": "1ed5c08f7161911913f19c41d0270d64",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "69dad27c7aa64308ef5916fd2bb3bfc9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "91ed3a4430158792cb4b567bb7e62b81",
".git/logs/refs/heads/main": "87fce5490451d58728580e3c047f3ad2",
".git/logs/refs/remotes/origin/main": "dee58d7e11dbf2be0f14675ae5b2caf8",
".git/objects/02/956925a56154b40026bfe4d7f5df8b6f0b8f5e": "ddaf6c48b86013bf2723d0e645820d68",
".git/objects/07/354d26a209b9f462c47e2989da49b9800bb5b6": "2aea26e599a8d80657be9adf28f76bdf",
".git/objects/08/b3473ec2ccaf185a9726bd90ef3a80eded48df": "a5f5b4bfe18bc98a3da4fe84b1156819",
".git/objects/0a/a35c1b044813db1ee2f41842db7bd5d983373e": "55f4f7ee2240be74b1611a4c0f24eaef",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/bad1c40a5841d6bd8511998e8dbe88ebfd3e4c": "e4e34755af745ce36584616d23232a0b",
".git/objects/21/9683cfd18fb2f8144d1a885885df4e5c3acf68": "a75c252863157351e6ad2c62793e0789",
".git/objects/2d/98438754b8d0a7cae27e0ddabdb751cdff25f6": "70af4926620d8ad951d2264bef10302e",
".git/objects/30/5175f011e628480e8ef7e0857cdd3342b3d802": "513b71ba41c8ee1850f24b841dd4eab1",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/b87128be5e585e161a3d269086c52ed7183cc7": "b307e0df0e517b5ba3565819f6f88294",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/50/e952d719ac0ca20cf6265b6c88b1694429913b": "8640efba4b223cbb8d2e4d0400c2392c",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/61/cb5c5ed2dbdb52cb146c10c84caef12cb5d319": "8d1db350502b3857a823d321d5e83049",
".git/objects/65/25928e822d016209978f5e817c04d934de9d75": "c46d1ffd6e6417cf569742c356467e11",
".git/objects/67/7cf549384804fde0b5743c3741ffa6c75998a6": "330a3548009e884577fafbadd3317432",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/ef035196ddb53727a3e87dad7b4d4e019613cc": "d47a770d48d0ca41f5495bbb4997177f",
".git/objects/72/89ffc8c93275581fb4ac5724404646353259ac": "8aa3c8e8e2e4fc11300a0c1efbffcf92",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/ffa9d0feff00a21d72595166aea6774d08ddb6": "ab6e4898d507e10c2fe54e07afa34eaf",
".git/objects/90/84ff275b0c9312f88c2ccf68979a435b3c3e99": "fdb17c6d45dc4e59bf4e13a3b7064634",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/507e889b6b9d15720b500f955a96460d6d62db": "b36fcaa9768979937e54612d48a7571e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/2cba69b39a84a86224fdb15f6c31a03ddb0c4e": "bd97a24c8e2484de6c36b2bee8e8e131",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/e9a3f8b4544db2b5897e9bf2c22e2aa4a3899a": "87b345943cf03abd1d2854877958b4cd",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/682673016da25a15a6228b31ab106b5f5660a9": "9d96ef41bdd256c48d174d95920c6f2a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d0c41af70a21c3f0d8bc528d3f2cafec30c988": "7a82a815ad963e4cac99151f59b7873b",
".git/objects/f2/6cf89acfc5451a2f2ea9cdcaa9e261275ec21c": "0278a1682894338e552e6026bb556202",
".git/refs/heads/main": "b46740b8d62ac7d579f6c7feb307cefb",
".git/refs/remotes/origin/main": "b46740b8d62ac7d579f6c7feb307cefb",
"assets/AssetManifest.json": "5423cacf16730abf90e547887991098d",
"assets/assets/baklava2.jpg": "0cdac2bf120b5661263ff10f313cf059",
"assets/assets/biryani.jpg": "5b8e6f454036019166ae4c39e22465b8",
"assets/assets/bossamko.jpg": "874b053af53c282af8d45f34f667cde4",
"assets/assets/bulgogiko.jpeg": "f580ebcf8de6a8527b204f79bb895e13",
"assets/assets/butter.jpg": "db4833c634bcdacdb39bf4bec3ceeb08",
"assets/assets/corba2.jpg": "d8f60cf277bc84b2de50378d1dc3b35a",
"assets/assets/d%25C3%25BCnya1.jpg": "f0c0a8ef1b94d5f033e1a741b692b5ab",
"assets/assets/ggulttokko.jpg": "ab0ee0a406505c58a2ba8d770521853a",
"assets/assets/hint.jpg": "17e0b0deca33c7a17f476f6edfc78cfb",
"assets/assets/italyanyemekleri.png": "e6b44441ca6edf2381ddd3f4d73c5626",
"assets/assets/japon.jpg": "32b2debfdccf1920759427b49bd48f19",
"assets/assets/kapp.jpg": "155d1a4ff056d74f777420c6dcf9248c",
"assets/assets/kebab2.jpg": "09e1846e9f017ef5d2f7e8a2b7fc11d4",
"assets/assets/kimichiiko.jpeg": "12d19c93f4b462be019cbc33eb249f1a",
"assets/assets/konn1.jpg": "1946ca82d5199783ced532c40556716b",
"assets/assets/koreko.jpg": "d1a9d309540fa6ec104e5236309124bc",
"assets/assets/kurrs2.jpg": "d63dcceb7878b8003050418f4b719ce5",
"assets/assets/lasgana.jpg": "6ab7ffc0ec1ac5f2e8b8a720e9aeec79",
"assets/assets/mahbur.jpg": "24210354fb8e23f631b5e035c0c7e220",
"assets/assets/masala.jpg": "a66f80f7f3c038b9796e710da548d755",
"assets/assets/merennn.jpeg": "edbcee94f09a2eb4e2c854fdbe2248ab",
"assets/assets/ossobuco.jpg": "7e6162818c7077f383337d543d587145",
"assets/assets/ramen.jpg": "16d2832a64e1fb24d0215f647cba0c38",
"assets/assets/ravioli.jpg": "c9d5e9a42c71515ebc972664eb527335",
"assets/assets/risotto.jpg": "c20faff737674b6f0d883c61f514bec4",
"assets/assets/samosa.jpg": "04f272a27aa46920ee4d8a60d51bc4f2",
"assets/assets/sosis.jpg": "df50a8ef21e23c43edd28dacd613bddd",
"assets/assets/sossis.jpg": "dfcf5f8bba9e4e5be6b639c5849ec836",
"assets/assets/sosssis.jpg": "18886b01a3b3542e96d99f6dc0c6783b",
"assets/assets/sukiyaki.jpg": "4fc70232459fc2f40d9ac32042127046",
"assets/assets/sushi.jpg": "5b4f0325aa64e0bf89fad6783aa816f7",
"assets/assets/t%25C3%25BCrky1.jpg": "82204811bbd7a648ec8cc00d18b2707f",
"assets/assets/tempura.jpg": "a6f21fd078c8bfc4c2dbe6a511ea9f8a",
"assets/assets/yakitori.jpg": "b8a56ada56dc6ea07523072ead800b49",
"assets/assets/yemmekk.jpg": "47c26d7fe24fb6e9dd854645f6795586",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "975ccdfb4321c21d821639f952156f89",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "11bf0e578e12e88bb5e0251a0058e394",
"/": "11bf0e578e12e88bb5e0251a0058e394",
"main.dart.js": "d11d3e7851f4d0a4ebf627b8946b0b74",
"manifest.json": "ccf78681057033bb9921454474a2259a",
"version.json": "beac0527f7e541e1c420adf4df3eabcc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
