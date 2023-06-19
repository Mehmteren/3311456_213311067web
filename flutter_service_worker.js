'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6e9977ff16bf23ce3b82639db4f3209b",
".git/config": "1ed5c08f7161911913f19c41d0270d64",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "65902b5138836ac87762c7dc44c30132",
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
".git/index": "0c514b4013bd37dc42d28b8e4029a883",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6566c42299622eeba2c3cfd120ca8bf3",
".git/logs/refs/heads/main": "d656d61e0d10c37a223d6a20116cbb39",
".git/logs/refs/remotes/origin/main": "089e9387f8ccdbedc51e4b0dbd26adc1",
".git/objects/02/956925a56154b40026bfe4d7f5df8b6f0b8f5e": "ddaf6c48b86013bf2723d0e645820d68",
".git/objects/07/354d26a209b9f462c47e2989da49b9800bb5b6": "2aea26e599a8d80657be9adf28f76bdf",
".git/objects/08/b3473ec2ccaf185a9726bd90ef3a80eded48df": "a5f5b4bfe18bc98a3da4fe84b1156819",
".git/objects/0a/a35c1b044813db1ee2f41842db7bd5d983373e": "55f4f7ee2240be74b1611a4c0f24eaef",
".git/objects/0c/1bfc9b2ccbe4c30a9684461638df7406d55610": "41e08b942b99d805c13c608eb1dd7099",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/ff89e2e04942cd1ed2407fe2f836c7544df86d": "52341ccd6b652dbed4ede37c6ca078a1",
".git/objects/13/bad1c40a5841d6bd8511998e8dbe88ebfd3e4c": "e4e34755af745ce36584616d23232a0b",
".git/objects/18/3268d7e0878a9d25111326f38609e109971a35": "e88651023a54271fd197920d91e82c7a",
".git/objects/19/d437cf544d691a55f990dc18c4faf4e9026616": "166bb0ecd286e59c5eecd7bdb99b6050",
".git/objects/1b/c94d574b8676e482946836b1b74635ca00fd06": "3507aaf31300a04ffff5e65a0bad82b2",
".git/objects/1c/56ea4687585c33bbdeeba0551642f5ba3e88fb": "0131eca2b28d9039f95ebed645a9c60e",
".git/objects/1c/842f55e1373d7e45d0a1f2e002d70239889b8f": "821e9c8edfa2170db9cf00cfb9d2ceef",
".git/objects/21/9683cfd18fb2f8144d1a885885df4e5c3acf68": "a75c252863157351e6ad2c62793e0789",
".git/objects/2d/98438754b8d0a7cae27e0ddabdb751cdff25f6": "70af4926620d8ad951d2264bef10302e",
".git/objects/2f/b4ef5fe3b51520a51c1a9c71f2f29877e517da": "5f53a36aeb7f3a0c70787d5184e9f59f",
".git/objects/30/5175f011e628480e8ef7e0857cdd3342b3d802": "513b71ba41c8ee1850f24b841dd4eab1",
".git/objects/32/60e7ce4311377df1bd7e6a5352bfe6eaa472dd": "6520caf4d928e6ad5f48286bb1b7be56",
".git/objects/37/6349eccc028fb6a87e9a408ce0be07ec656fc8": "f2efd4d8ccdfef352970b3aa9d3b6b6d",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3e/5885fa0175e535828064abf5f096226bdffadf": "4b3d727f8df612652acbf66feb6478c2",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/b87128be5e585e161a3d269086c52ed7183cc7": "b307e0df0e517b5ba3565819f6f88294",
".git/objects/43/7f76cbf250b7d9a5b4b7dac743ae75e5055554": "a678c7653ebd87b2c56c4ed2c8613ee1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/50/62b3aa6bb527123ff5395a859b125a513c8b55": "3db1e9a78cd4c1d9a24b26f2e3c182e6",
".git/objects/50/e952d719ac0ca20cf6265b6c88b1694429913b": "8640efba4b223cbb8d2e4d0400c2392c",
".git/objects/53/d915f301628837a281b6f1e845424fc11970ba": "87b3257d059f406055431879b8e1bdd5",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5b/1c2e92085f48d76812d1688ef74d7dd35e7b69": "0e5807bb22fc82d683f85c5583ccce51",
".git/objects/61/cb5c5ed2dbdb52cb146c10c84caef12cb5d319": "8d1db350502b3857a823d321d5e83049",
".git/objects/62/9e337cf2ce37cb92d00f76b5bf457f984ccacb": "a2d9ff326a1600988f27b653c176834b",
".git/objects/65/25928e822d016209978f5e817c04d934de9d75": "c46d1ffd6e6417cf569742c356467e11",
".git/objects/66/875468cd9e018a78ff9f0623b02d8cc3cfca6a": "7af301812a8c953543412ea3e0ace52d",
".git/objects/67/7cf549384804fde0b5743c3741ffa6c75998a6": "330a3548009e884577fafbadd3317432",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/ef035196ddb53727a3e87dad7b4d4e019613cc": "d47a770d48d0ca41f5495bbb4997177f",
".git/objects/6c/e57ae53e979ca4a1e42fe3ac89b141fb494085": "7456becf9eb6d9e3d9b46959b203fa28",
".git/objects/6d/74363cd752cd385858a711aa69bd232fd3c9e4": "c4ea063e08614036cb8d55bbe4fc9f46",
".git/objects/72/89ffc8c93275581fb4ac5724404646353259ac": "8aa3c8e8e2e4fc11300a0c1efbffcf92",
".git/objects/73/12e4b96113c609f3f6756677572a29372330ef": "605ce60816271fcfa0d9f6c959e83404",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/46ce6deb8cbb8e1b8f94e699481b33f016a447": "d36f2e5b785c04a53aaec3b1add09c88",
".git/objects/7e/cbbdbbdb48c2b17b7b4fbdf5232fe83fa07296": "7ec1100f4ed4e5e5eb10d6f154b17c3a",
".git/objects/84/e7a0155ab4b8aad1cfa08dff0f1f7e009b6dec": "a01765d037c8ebb925c9df7465b28b74",
".git/objects/86/31b66aba19b2a0fca4d3b5de38bff8eeb80928": "3eb4dd66cf7e0ee151f8830d8e485810",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e63b3c0e30311029e8b0bafe221b5d808aabcf": "20a6c81e74c8f6a639a9d49778a3360d",
".git/objects/8c/34de6f6a3fd89692a65114e999c4ea03a645f1": "c45ac77dd4ed0cac74b4589551ab2c83",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/ffa9d0feff00a21d72595166aea6774d08ddb6": "ab6e4898d507e10c2fe54e07afa34eaf",
".git/objects/90/84ff275b0c9312f88c2ccf68979a435b3c3e99": "fdb17c6d45dc4e59bf4e13a3b7064634",
".git/objects/90/bde3f07b973402a3069ed530bc55958b1736ce": "6992c389aa575ad17183efbc75b6eaf6",
".git/objects/98/65e91901bcf9a186121719252ca38c4d7f6b15": "289804c15ec7562081ce4e3d168093f9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/481172e8c30c6f57279b3279ae4e672671838c": "448de7339c901ce8d3e1a21821249059",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/af/257a2ec7a64c1dbae42146e101c7afc29b98c7": "8cdcdbb6f88ab8a40702ebd7975be352",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/403ea9b9a79f1bec3fb1bce37fd92bcecc01bc": "6c47eb6137f4d534c4d0fadce30fa211",
".git/objects/b8/507e889b6b9d15720b500f955a96460d6d62db": "b36fcaa9768979937e54612d48a7571e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/2cba69b39a84a86224fdb15f6c31a03ddb0c4e": "bd97a24c8e2484de6c36b2bee8e8e131",
".git/objects/c3/8381ac1fe69b5b78131b6843d12fea13d94713": "3ad3c42b1f4dd76437b88cb913958283",
".git/objects/c4/6573d259b74013b8f4ec8701dc24545493d871": "ffcef90d44be5c0e47d9800066dd1f80",
".git/objects/c5/e85d0867a3b199caf9f0158e633e79c4257690": "7a0e0f0d9a04188be400400e2f163aca",
".git/objects/cb/d7ada626303c7beef2f4751433941e816e9d10": "8bfdf1e4d111df8ed96ae16739ade5e0",
".git/objects/cd/dcf9b592feb412f6ae27672c30e610e4b71549": "3c010b8a354cf02b45449c5674aa454e",
".git/objects/d5/0d0b522029fd8a0f2489749022c09b1de43d0e": "09c46ac5d9048b7d5435320cb555d540",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/73a92167d54ef2ab7bac7dbbcedf9125012980": "7389a9f1e96c20c9c6bde63a13d452ba",
".git/objects/db/e9a3f8b4544db2b5897e9bf2c22e2aa4a3899a": "87b345943cf03abd1d2854877958b4cd",
".git/objects/dd/f4bbf04f8f84b46555d63b7c8fa4bbd050a262": "c3367d5ebdf924d739a758e92f0f775c",
".git/objects/e2/e110cc8cf1b3fc2171566d81bd52ed1dd7fb6b": "b4f6b4bacb05d72ba012f64209236c71",
".git/objects/e3/db65ecbab904e2b773505c86a9da970b5e7332": "a3556dada4a2e21635b354a9f7c6aba6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/682673016da25a15a6228b31ab106b5f5660a9": "9d96ef41bdd256c48d174d95920c6f2a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d0c41af70a21c3f0d8bc528d3f2cafec30c988": "7a82a815ad963e4cac99151f59b7873b",
".git/objects/ec/271ada21804b249127d604ff5dfde395332549": "0a4b2db4f96b8dab30563912a11e3ccc",
".git/objects/ed/62a153e0bd0f74005540c36e41a752e213f221": "f4ae0783566af635ae52261aa2283242",
".git/objects/f0/20d8100a8c2668b4f37d20395ebdaca959a3d0": "6acd6b8c08d075f884c91a411edf1f6f",
".git/objects/f2/6cf89acfc5451a2f2ea9cdcaa9e261275ec21c": "0278a1682894338e552e6026bb556202",
".git/objects/f3/81e3c8e149238d197f67853bd1ecccfa9b7a08": "f11e5169d5c954f09f0a3c552aaba827",
".git/ORIG_HEAD": "750b0ed726afaf7cd56528e3d03cede3",
".git/refs/heads/main": "750b0ed726afaf7cd56528e3d03cede3",
".git/refs/remotes/origin/main": "750b0ed726afaf7cd56528e3d03cede3",
"assets/AssetManifest.json": "eb4968cba4486a6f2c1047d9436e4cdd",
"assets/assets/ayvaas.jpeg": "d0ec997b5b590d9f75f43722d2728183",
"assets/assets/baklava2.jpg": "0cdac2bf120b5661263ff10f313cf059",
"assets/assets/bamya.jpeg": "7f7ebb982270fb4ae940915701320b27",
"assets/assets/biryani.jpg": "5b8e6f454036019166ae4c39e22465b8",
"assets/assets/bossamko.jpg": "874b053af53c282af8d45f34f667cde4",
"assets/assets/bulgogiko.jpeg": "f580ebcf8de6a8527b204f79bb895e13",
"assets/assets/butter.jpg": "db4833c634bcdacdb39bf4bec3ceeb08",
"assets/assets/corba2.jpg": "d8f60cf277bc84b2de50378d1dc3b35a",
"assets/assets/d%25C3%25BCnya1.jpg": "f0c0a8ef1b94d5f033e1a741b692b5ab",
"assets/assets/dugunpilav.jpg": "2c9648e037e32346ad2892b068661e8d",
"assets/assets/etliekmek.jpeg": "472ae717071712aebdf56f706af30d78",
"assets/assets/gazpacho.jpg": "987d989f7ab9b6778a16b033cc94b4e5",
"assets/assets/ggulttokko.jpg": "ab0ee0a406505c58a2ba8d770521853a",
"assets/assets/gonya.png": "4c9f1c7b6ce8980918c91d2e0e1f9a59",
"assets/assets/hint.jpg": "17e0b0deca33c7a17f476f6edfc78cfb",
"assets/assets/isyanya.jpg": "1fa0d5a06a692a6149782d9069be84eb",
"assets/assets/italyanyemekleri.png": "e6b44441ca6edf2381ddd3f4d73c5626",
"assets/assets/japon.jpg": "32b2debfdccf1920759427b49bd48f19",
"assets/assets/kalp2.jpg": "ce1e692b2c8b1cb79facf0db156f4889",
"assets/assets/kalpp.jpg": "e55f3724eaa9f96ce00277734b21d267",
"assets/assets/kapp.jpg": "155d1a4ff056d74f777420c6dcf9248c",
"assets/assets/kebab2.jpg": "09e1846e9f017ef5d2f7e8a2b7fc11d4",
"assets/assets/kimichiiko.jpeg": "12d19c93f4b462be019cbc33eb249f1a",
"assets/assets/konn1.jpg": "1946ca82d5199783ced532c40556716b",
"assets/assets/koreko.jpg": "d1a9d309540fa6ec104e5236309124bc",
"assets/assets/kurrs2.jpg": "d63dcceb7878b8003050418f4b719ce5",
"assets/assets/lasgana.jpg": "6ab7ffc0ec1ac5f2e8b8a720e9aeec79",
"assets/assets/mahbur.jpg": "24210354fb8e23f631b5e035c0c7e220",
"assets/assets/manti.jpeg": "cbd15033d7872e91122aa8e4766a08b8",
"assets/assets/masala.jpg": "a66f80f7f3c038b9796e710da548d755",
"assets/assets/merennn.jpeg": "edbcee94f09a2eb4e2c854fdbe2248ab",
"assets/assets/mevlana.jpeg": "868868c53975698714edf167df9f843f",
"assets/assets/ossobuco.jpg": "7e6162818c7077f383337d543d587145",
"assets/assets/paella.jpg": "4ffe0b555daae31b459b1f478ec826b8",
"assets/assets/patatasbravas.jpg": "86bf0521cb9bec2472dc77cf4e271213",
"assets/assets/pisto.jpg": "df31530eefdba3fedfdf6c72de278f23",
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
"assets/assets/tirit.jpg": "9995f1f616ce8ee257efe0c56b5f1979",
"assets/assets/yagsomunu.jpeg": "940c2ba92ce19fb3c4d80836133d6671",
"assets/assets/yakitori.jpg": "b8a56ada56dc6ea07523072ead800b49",
"assets/assets/yemekci.jpg": "0e041b31578353e66443de4c7f86d365",
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
"index.html": "bbf1291405b01ebe49143b1d2e3cb098",
"/": "bbf1291405b01ebe49143b1d2e3cb098",
"main.dart.js": "576f2e6f1db4bcf659c1666ccf9770c1",
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
