const CACHE_NAME = 'e-check-v1';
const urlsToCache = [
  '/',
  '/e-nummers.html',
  '/data.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// Bij installatie: Sla alles lokaal op (zoals een Setup.exe)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Bij opvragen: Kijk eerst lokaal, dan pas op internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});