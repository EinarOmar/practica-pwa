// import { onBackgroundMessage } from "firebase/messaging";

// // Este evento se dispara cuando llega un mensaje en segundo plano
// onBackgroundMessage((payload) => {
//   console.log("Mensaje recibido en segundo plano:", payload);

//   // Puedes personalizar la lógica aquí para manejar la notificación en segundo plano
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.icon,
//   };

//   // Mostrar la notificación en segundo plano
//   self.registration.showNotification(payload.notification.title, notificationOptions);
// });