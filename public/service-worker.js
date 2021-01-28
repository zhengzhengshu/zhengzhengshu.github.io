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
    "revision": "7c8546fdf53212384d1412ae183dc9cb"
  },
  {
    "url": "assets/css/0.styles.fae2e85e.css",
    "revision": "24b1820aea7c92633c21a562e42e906f"
  },
  {
    "url": "assets/img/asyncio-rand.dffdd83b4256.dffdd83b.gif",
    "revision": "dffdd83b42565922cca53f2bb2edddbc"
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
    "url": "assets/img/gh8.3c97d555.jpg",
    "revision": "3c97d5555379e6240a0ec61337829e5f"
  },
  {
    "url": "assets/img/PythonSeven.97c2521e.jpg",
    "revision": "97c2521efb290d13a2a0299cfe1d681a"
  },
  {
    "url": "assets/img/PythonSevenW.8dfd1dc6.jpg",
    "revision": "8dfd1dc67b9450c56f8371ab1711c0c6"
  },
  {
    "url": "assets/img/wxh.b846c3a8.jpeg",
    "revision": "b846c3a8ceb44d360c91c455c5206039"
  },
  {
    "url": "assets/js/1.c3034254.js",
    "revision": "6aea24c405868e87d96592c1e902306d"
  },
  {
    "url": "assets/js/10.6e741886.js",
    "revision": "3dd0f219f3c285ce9ad9e3a3e7485f15"
  },
  {
    "url": "assets/js/11.a09aedba.js",
    "revision": "687ca7de24242170e0daa4cbb751f5d4"
  },
  {
    "url": "assets/js/12.5d5d2b87.js",
    "revision": "ac0ebf1c841734fda08d16a744eb2c0e"
  },
  {
    "url": "assets/js/13.0a89d054.js",
    "revision": "c2b3ab5dc44a867a9dfac82fee20264a"
  },
  {
    "url": "assets/js/14.98896cea.js",
    "revision": "a0706f01c8d99c84852d1cb342216106"
  },
  {
    "url": "assets/js/15.0a32f3b5.js",
    "revision": "d034064f513745bd9762c69a018d183d"
  },
  {
    "url": "assets/js/16.526cd79f.js",
    "revision": "700d872045c045cfcda8fc97d29d47d1"
  },
  {
    "url": "assets/js/17.9088ebea.js",
    "revision": "782edb7d85cde90f7738e4bea9fbfb4b"
  },
  {
    "url": "assets/js/18.b43294d6.js",
    "revision": "6a7b548f7a69ee61bfa309e57199ffd0"
  },
  {
    "url": "assets/js/19.5f3fe52b.js",
    "revision": "ffa6b1fb2e4db449edc49eeff1364438"
  },
  {
    "url": "assets/js/20.6493509e.js",
    "revision": "40f315adb89e9d6f6c71d023f1d26bca"
  },
  {
    "url": "assets/js/21.8ff058cf.js",
    "revision": "b6f29cbed4528bfb8cea05ff77617a36"
  },
  {
    "url": "assets/js/22.6bc70877.js",
    "revision": "61a9fd4d793c56ef7c1802dcd7fdaed1"
  },
  {
    "url": "assets/js/23.7fa65647.js",
    "revision": "06d3656a4c54fbe1a530698d03b8e1ee"
  },
  {
    "url": "assets/js/24.512816a0.js",
    "revision": "5c9b6a92eaa0f98d23b805317495f603"
  },
  {
    "url": "assets/js/25.a89a21f3.js",
    "revision": "dfe9da01f1deffd686ebe15b09618998"
  },
  {
    "url": "assets/js/26.ed698889.js",
    "revision": "c0a46de56dab195d8f062ce6a211e925"
  },
  {
    "url": "assets/js/27.2c0865ba.js",
    "revision": "2e933c8d3acf7606a857cb8dd7c9b51b"
  },
  {
    "url": "assets/js/4.c2eb459f.js",
    "revision": "58a80888b506d05944fce99b4488b47e"
  },
  {
    "url": "assets/js/5.8dc09744.js",
    "revision": "12a6f6e445fbc0e4a219a14be426c1a5"
  },
  {
    "url": "assets/js/6.eecad0ff.js",
    "revision": "61e7ff4f5bf3b71e08cc29845df145ec"
  },
  {
    "url": "assets/js/7.9cdda434.js",
    "revision": "7b06d876544960ae95e45ef34fb2792f"
  },
  {
    "url": "assets/js/8.d6f753ac.js",
    "revision": "95c2696620774bf1c0a08828f3308204"
  },
  {
    "url": "assets/js/9.558d8558.js",
    "revision": "d7ff3d07abf28e452f4581dcf5c52da9"
  },
  {
    "url": "assets/js/app.103aa693.js",
    "revision": "f48b4a722415bc430b80d2f36b920000"
  },
  {
    "url": "assets/js/vendors~flowchart.896ff9c1.js",
    "revision": "754bedeea256f642e18bc9cb81c92a06"
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
    "revision": "d0d2e1e98fb1fe16eea6ffe8fa64d3da"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "a980451d5ef8e9784d7c9cb186e67751"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "3ec671e41c9475aa0f9afd1a4dcd451c"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "47e1e88c940db04d994821f0e1dc470d"
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
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "index.html",
    "revision": "7bb3cefba89f02e0f099e8edc2aa9648"
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
    "url": "tag/abstractmethod/index.html",
    "revision": "54dc50d5533b3d35faf066c23306a70b"
  },
  {
    "url": "tag/Async/index.html",
    "revision": "2451afe833f6cd999cf50bd925659c9d"
  },
  {
    "url": "tag/django-rest-framework/index.html",
    "revision": "ec7a6de560e32fabfea75403e93e8d69"
  },
  {
    "url": "tag/fastapi/index.html",
    "revision": "f69f83ae90a27f6ec7e339657aaf401a"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "5b4aa1d80f4e852f2b093c571afe2fc1"
  },
  {
    "url": "tag/index.html",
    "revision": "1eff93360746a796c9eb2747f9c3bf8b"
  },
  {
    "url": "tag/metaclass/index.html",
    "revision": "98fd07cc0abdd527b315c1e7657e076c"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "9522f87156f70fe983979b9d331424af"
  },
  {
    "url": "tag/uvicorn/index.html",
    "revision": "9f695f257ab9d3dafd36c68b2787120f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7e397437f8046b4e899fe6ca9d6db751"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "548ea36761dcba6bf4522c4874ecb975"
  },
  {
    "url": "tag/垃圾回收/index.html",
    "revision": "d3294beb9d8d6e02325b2e95c29f182f"
  },
  {
    "url": "tag/并发/index.html",
    "revision": "a0ec700d347c562e3bfb1abcf35bd125"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "9d22bed2617b3f9bb1b5aca9f21d5f42"
  },
  {
    "url": "tag/爬虫/index.html",
    "revision": "d16eed27650d5343da3f999dd546b0f0"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "b37fdb834bf0f2ecd376455eb58d2ae3"
  },
  {
    "url": "timeline/index.html",
    "revision": "a23250612ffdde4483f57589c01d8e89"
  },
  {
    "url": "views/articles/2021/auto-deploy-blog.html",
    "revision": "bd673ca9414be436f54a2b0bf140b8cd"
  },
  {
    "url": "views/articles/2021/how-do-i-learn-python.html",
    "revision": "5b06a8452839c848662e8de35aad940a"
  },
  {
    "url": "views/articles/2021/web-scraper.html",
    "revision": "f878cef3cccdcd0cff52d709a3c20a1f"
  },
  {
    "url": "views/index.html",
    "revision": "21d21f4023744b08663ba47616bb953a"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "65e326383308848b5426f87efb5f5b80"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "d105b1ed6bfbd4a5101c7f05e24834bd"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "19f59c4b4288327824cb8d8a45966b94"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "3ae25400491ab848f0e375c17d9d6019"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "0e61584b2bf55ea930be076198be1e84"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "2da4c0df62d83cf0fcacb46f27ba24eb"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "5ecb5fd2b49e334c780ddef7cf478b3d"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "9c13ccc82b83f281b38d2a123162ad5a"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "7a9a0db1cfcafe763aff02beba2b809c"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "d550c13ddcc4e07b3fbe3fb53e1a96f4"
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
