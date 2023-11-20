const CACHE_NAME = "coffe-online-cache-v1";
const cacheUrls = [
  "/public/manifest.json",
  "/",
  "/src",
  "/src/App.js",
  "/public",
  "../src/views/AboutUs/imagen 3.jpg",
  "../src/views/AboutUs/imagen1.jpg",
  "../src/views/AboutUs/imagen2.jpg",
  "../src/views/Home/png/cafe2.jpg",
  "../src/views/Home/png/olla.jpg",
  "../src/views/Home/png/capuchino.jpg",
  "../src/views/Home/png/moka.jpg",
  "../src/views/Home/png/moka2.jpg",
  // ... agregar otras rutas y archivos
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(cacheUrls);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Eliminando caché antigua:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
          return networkResponse;
        }

        // Almacenar la nueva respuesta en la caché
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch((error) => {
        console.error("Error en el evento fetch:", error);
        // Si no hay conexión a internet y no se encuentra en la caché, devolver una respuesta predeterminada
        return caches.match("/offline.html"); // Ajusta la URL según sea necesario
      });
    })
  );
});