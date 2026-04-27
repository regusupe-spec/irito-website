// sw.js
const CACHE_NAME = "mini-english-trainer-v1";
const ASSETS = [
  "./",
  "./index.html"
];

// インストール時に必要ファイルをキャッシュ
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// リクエストを横取りしてキャッシュ優先で返す
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});