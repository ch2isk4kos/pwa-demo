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
