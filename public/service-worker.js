// service-worker.js
const CACHE_NAME = "coffe-online-cache-v1";

self.addEventListener("install", (event) => {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/",
        "/src",
        "./App.js",
        "/public/",
        "../src/views/Home/png/", // <- Esto debe ser un archivo específico, no un directorio
        "../src/views/AboutUs/imagen 3.jpg",
        "../src/views/AboutUs/imagen1.jpg",
        "../src/views/AboutUs/imagen2.jpg",
        // Agrega rutas específicas a tus imágenes, por ejemplo:
        "../src/views/Home/png/cafe2.jpg",
        "../src/views/Home/png/olla.jpg",
        "../src/views/Home/png/capuchino.jpg",
        "../src/views/Home/png/moka.jpg",
        "../src/views/Home/png/moka2.jpg",
        // ... agrega otras imágenes y archivos
      ]);
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
