const CACHE_NAME = 'price-elasticity-app-v1';

const urlsToCache = [

  'index.html',

  'icon.svg',

  'manifest.json'

];



self.addEventListener('install', event => {

  event.waitUntil(

    caches.open(CACHE_NAME)

      .then(cache => cache.addAll(urlsToCache))

  );

});



self.addEventListener('fetch', event => {

  event.respondWith(

    caches.match(event.request)

      .then(response => response || fetch(event.request))

  );

});