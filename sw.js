const CACHE_NAME = 'rabong-v1';
const urlsToCache = [
  '/Rabong-Report/',
  '/Rabong-Report/index.html',
  '/Rabong-Report/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }).catch(() => {
      return caches.match('/Rabong-Report/index.html');
    })
  );
});
