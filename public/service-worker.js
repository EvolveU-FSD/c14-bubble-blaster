const CACHE_NAME = 'bubble-blast-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/index.css',
  '/manifest.json',
  '/titleScreen.js',
  '/levelStartScreen.js',
  '/gameOverScreen.js',
  '/turret.js',
  '/bullet.js',
  '/rock.js',
  '/level.js',
  '/index.js',
  '/icon-192.png',
  '/icon-512.png',
  '/installServiceWorker.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
