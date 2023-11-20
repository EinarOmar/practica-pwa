// service-worker.js
const CACHE_NAME = "coffee-online-cache-v1";

self.addEventListener("install", (event) => {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/static/css/main.chunk.css',
        '/static/js/bundle.js',
        '/static/js/0.chunk.js',
        '/static/js/1.chunk.js',
        '/static/js/2.chunk.js',
        '/static/js/3.chunk.js',
        '/public/manifest.json',
        // Agrega más rutas de archivos estáticos según sea necesario
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log('Petición de red o recuperación desde caché:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response; // Recupera desde caché si está disponible
      }

      // Si la solicitud no está en caché, realiza la solicitud a la red
      return fetch(event.request).then((networkResponse) => {
        // Guarda la respuesta en caché para futuras solicitudes
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
        });

        return networkResponse;
      }).catch((error) => {
        // Maneja errores de conexión
        console.error('Fetch error:', error);
        // Puedes retornar una respuesta predeterminada o una página de error
        // return caches.match('/offline.html');
      });
    })
  );
});
