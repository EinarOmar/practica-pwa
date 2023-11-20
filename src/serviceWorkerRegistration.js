// serviceWorkerRegistration.js
export function register(config) {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        navigator.serviceWorker
          .register(swUrl)
          .then((registration) => {
            console.log('Service Worker registrado con éxito:', registration);
            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          })
          .catch((error) => {
            console.error('Error al registrar el Service Worker:', error);
            if (config && config.onError) {
              config.onError(error);
            }
          });
      });
    }
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then((registration) => {
          registration.unregister();
        })
        .catch((error) => {
          console.error('Error al desregistrar el Service Worker:', error);
        });
    }
  }
  