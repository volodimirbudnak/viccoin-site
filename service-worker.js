
const CACHE_NAME = "viccoin-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/index-en.html",
  "/bonus_vic.html",
  "/bonus_vic_en.html",
  "/fundament_vic.html",
  "/GuardianLock.html",
  "/GuardianLock_EN.html",
  "/whitepaper.html",
  "/img/logo-26x26.png",
  "/img/favicon-512x512.png"
];

// Встановлення service worker і кешування ресурсів
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Обробка запитів
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
