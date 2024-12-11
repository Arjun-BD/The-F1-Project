// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7bf0QwezuLxTHfzCmvTTz5G5Nq3DlZTs",
  authDomain: "auth-yef.firebaseapp.com",
  projectId: "auth-yef",
  storageBucket: "auth-yef.firebasestorage.app",
  messagingSenderId: "667507989394",
  appId: "1:667507989394:web:91f8037f0b49b4b3a8ff4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
