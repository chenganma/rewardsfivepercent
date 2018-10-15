self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open('static').then(function(cache) {
      cache.addAll([
        '/ampweb',
        'index.html', 
        'manifest.json',
        '/ampweb/images/aarp.jpg',
        '/ampweb/images/amex-prefer.jpg',
        '/ampweb/images/amex-ascend.jpg',
        '/ampweb/images/chase.jpg',
        '/ampweb/images/discover.jpg'
        ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
});

self.addEventListener('fetch', function(event) {
  // event.respondWith(
  //   caches.match(event.request).then(function(response) {
  //     if (response) {
  //       return response;
  //     } else {
  //       return fetch(event.request).then(function(res) {
  //         return caches.open('dynamic').then(function(cache) {
  //           cache.put(event.request.url, res.clone());
  //           return res;
  //         });
  //       });
  //     }
  //   })
  // );
});