var cacheName = 'Rewards';
var filesToCache = [
        '/',
        'index.html', 
        'manifest.json',
        '/images/aarp.jpg',
        '/images/amex-prefer.jpg',
        '/images/amex-ascend.jpg',
        '/images/chase.jpg',
        '/images/discover.jpg',
        '/images/pathfinder.jpg'
];

self.addEventListener('install', function(e) {
  console.log('[serviceworker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[serviceworker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});