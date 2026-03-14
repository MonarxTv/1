// Service Worker oddiy minimal versiyasi

self.addEventListener("install", event => {
  console.log("Service Worker o‘rnatildi");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("Service Worker faollashdi");
  return self.clients.claim();
});

// Cache qilish (minimal)
const CACHE_NAME = "monarxtv-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "https://pbs.twimg.com/profile_images/1131583348038623232/IOiNBicp.png"
];

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
