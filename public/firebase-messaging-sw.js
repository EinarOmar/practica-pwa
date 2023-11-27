importScripts(
  "https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.6.0/firebase-messaging-compat.js"
);
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDaApgjCajU24BDH9toQVSTG_OV9HgiDI",
    authDomain: "coffeonline-c77cb.firebaseapp.com",
    projectId: "coffeonline-c77cb",
    storageBucket: "coffeonline-c77cb.appspot.com",
    messagingSenderId: "5126156134",
    appId: "1:5126156134:web:2135ff9e62894d529e22a7",
    measurementId: "G-VCL8VPNKBV"
  };
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);
messaging.onBackgroundMessage( payload => {
  console.log("Recibiste mensaje mientras estabas ausente");
  // Previo a mostrar notificación
  const notificationTitle = payload.notification.title;
  const notificactionOptios = {
    body: payload.notification.body,
    icon: "./logo192.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificactionOptios
  );
});
