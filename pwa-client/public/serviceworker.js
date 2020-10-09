// browser storage
const CACHE_NAME = "version-1";
const URLsToCache = ['index.html', "offline.html"];
const self = this;

// service worker installation
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache) => {
      console.log('Opened Cache');
      return cache.addAll(URLsToCache);
    })
  );
});

// listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
    .then(() => {
      return fetch(event.request)
    })
    .catch(() => caches.match("offline.html"))
  );
});

// activate service worker
self.addEventListener("activate", (event) => {});