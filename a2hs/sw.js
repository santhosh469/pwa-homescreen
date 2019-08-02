self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/pwa-homescreen/a2hs/',
       '/pwa-homescreen/a2hs/index.html',
       '/pwa-homescreen/a2hs/index.js',
       '/pwa-homescreen/a2hs/style.css',
       '/pwa-homescreen/a2hs/images/fox1.jpg',
       '/pwa-homescreen/a2hs/images/fox2.jpg',
       '/pwa-homescreen/a2hs/images/fox3.jpg',
       '/pwa-homescreen/a2hs/images/fox4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
