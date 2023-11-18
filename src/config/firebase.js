import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

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
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const db = getFirestore(app);