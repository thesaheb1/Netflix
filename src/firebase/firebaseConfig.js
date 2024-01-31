// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA58iADioRZm8U_a8_al3Yzt6Pt7wmfTIo",
  authDomain: "netflix-da3d8.firebaseapp.com",
  projectId: "netflix-da3d8",
  storageBucket: "netflix-da3d8.appspot.com",
  messagingSenderId: "241949991805",
  appId: "1:241949991805:web:a6b94165558c4c283ae214",
  measurementId: "G-YZDEVLKTSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth();