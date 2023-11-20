// service-worker.js
const CACHE_NAME = "coffe-online-cache-v1";

self.addEventListener("install", (event) => {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(["/", "/src", "./App.js", "/public/","../src/views/Home/png","../src/views/AboutUs"]);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log('Service Worker activado');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName !== CACHE_NAME;
        }).map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log('Petición de red o recuperación desde caché:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch((error) => {
      console.error('Error en el evento fetch:', error);
    })
  );
});
