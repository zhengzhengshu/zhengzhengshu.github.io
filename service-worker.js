/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7948958c383ebdafe914e79120e71807"
  },
  {
    "url": "assets/css/0.styles.4522ba09.css",
    "revision": "5550ee1e6646330a0e001669505cabb9"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/e46f9dc2d0bc9e5f62ab688e1675b616.e46f9dc2.png",
    "revision": "e46f9dc2d0bc9e5f62ab688e1675b616"
  },
  {
    "url": "assets/js/1.7c03d10e.js",
    "revision": "428cb7969ee9e4f4e4d50ea7aa3b7101"
  },
  {
    "url": "assets/js/10.851bf250.js",
    "revision": "55567e157924abf14bed3f9bf2db5461"
  },
  {
    "url": "assets/js/11.f1996695.js",
    "revision": "1cc2c145ee420aebdfa762e7989fa416"
  },
  {
    "url": "assets/js/12.e7644d1e.js",
    "revision": "3d40146c45ca77a65694b33f40c47572"
  },
  {
    "url": "assets/js/13.dda52ff6.js",
    "revision": "a98a2d179424f241f10c0b8617d6c121"
  },
  {
    "url": "assets/js/14.67cfbf93.js",
    "revision": "d2363ac16511fd8c2fc3c49376110995"
  },
  {
    "url": "assets/js/15.3b277263.js",
    "revision": "4a17999af1255a0c0c8ffc4f237ab5fd"
  },
  {
    "url": "assets/js/16.9fe2f265.js",
    "revision": "d1dc66dd30e93a707a88a5c4bf89a5d1"
  },
  {
    "url": "assets/js/3.e6a6000f.js",
    "revision": "f4db067d4b1ff41583a5d79a669b8ea1"
  },
  {
    "url": "assets/js/4.c5b3bad7.js",
    "revision": "6b535fdb7a43793d2f2b397a65d07e73"
  },
  {
    "url": "assets/js/5.e25c3cff.js",
    "revision": "2db0569d2acbb21cfb8463eef05d92ba"
  },
  {
    "url": "assets/js/6.1ecf8bc9.js",
    "revision": "b169d154d100cf9505374677d3d710d2"
  },
  {
    "url": "assets/js/7.b7b70b29.js",
    "revision": "f699235d05a5bc9fae83268e959ca601"
  },
  {
    "url": "assets/js/8.2e9efc42.js",
    "revision": "cc8f1fdf371e6db415edaf6ad675600f"
  },
  {
    "url": "assets/js/9.2794c8e8.js",
    "revision": "1ad43d3efa493911d3158347937dac76"
  },
  {
    "url": "assets/js/app.d087e8dd.js",
    "revision": "2df690c7ded56e422a1442dc2efe58ef"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "02748172bf3c3c812f4642fad86d6b97"
  },
  {
    "url": "banner.jpg",
    "revision": "e9d147848b3ca2991472007eb3914bb0"
  },
  {
    "url": "bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "b3e770220ceffa7731c392bf9c75550f"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "a91543c973b7f727bd51fcbc88b8ee18"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "5a0fdf2299fca3765df97482bf1ce86d"
  },
  {
    "url": "favicon.jpg",
    "revision": "912008e890e35f7be5154d3a10a1cd76"
  },
  {
    "url": "head.jpg",
    "revision": "3bf5cfaa1a22564d4ec85bd5667db3d1"
  },
  {
    "url": "head.png",
    "revision": "67379ff61af8c31d3676f12b1f13c0b5"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "84a3be76bd754b90f74eba8358ec7c7b"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "index.html",
    "revision": "8647baee8cf0e691f154a622afe2404c"
  },
  {
    "url": "profile.jpg",
    "revision": "8abb4d329520db38750019fb27029184"
  },
  {
    "url": "profile.png",
    "revision": "2dbe574fb3b1807fa7e4df07d243d432"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "7d85e72248c111c05e540ca34ce9b832"
  },
  {
    "url": "tag/index.html",
    "revision": "ca2b5ba652e7b60e5e4fc7ed68d72bf9"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "93db6bb2c6109836f7a3d81288ec49fe"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "75afdae2801971cb155d7d7158a3338c"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "35f4ce71603d21d57c9e3c321432c17d"
  },
  {
    "url": "timeline/index.html",
    "revision": "a6f4a18ee2489c71c5f9bbb2b59d5a62"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "a27946345068dfbfe85b9cc3a6bb41c5"
  },
  {
    "url": "web-scraper.html",
    "revision": "989da0714c8b977331e2700ea47b1603"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
