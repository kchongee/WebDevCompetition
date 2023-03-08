// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6szstJ_71ePWZeKoKMISmA6OjtDHiKFE",
  authDomain: "renewable-energy-app.firebaseapp.com",
  projectId: "renewable-energy-app",
  storageBucket: "renewable-energy-app.appspot.com",
  messagingSenderId: "570632219719",
  appId: "1:570632219719:web:08c089a744790e9277d562",
  measurementId: "G-8R0BJ12VCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
export const firebaseAuth = getAuth(firebaseApp);