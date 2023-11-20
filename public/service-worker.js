const CACHE_NAME = "coffe-online-cache-v1";
const cacheUrls = [
  "/",
  "/src",
  "./App.js",
  "/public/",
  "../src/views/AboutUs/imagen 3.jpg",
  "../src/views/AboutUs/imagen1.jpg",
  "../src/views/AboutUs/imagen2.jpg",
  "../src/views/Home/png/cafe2.jpg",
  "../src/views/Home/png/olla.jpg",
  "../src/views/Home/png/capuchino.jpg",
  "../src/views/Home/png/moka.jpg",
  "../src/views/Home/png/moka2.jpg",
  "../src/views/AboutUs/imagen1.jpg",
  "../src/views/AboutUs/imagen2.jpg",
  "../src/views/AboutUs/imagen3.jpg",
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
    caches
      .match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
      .catch((error) => {
        console.error("Error en el evento fetch:", error);
      })
  );
});
