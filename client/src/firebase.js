// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBSE_API_KEY,
  authDomain: "real-estate-marketplace-1b2ad.firebaseapp.com",
  projectId: "real-estate-marketplace-1b2ad",
  storageBucket: "real-estate-marketplace-1b2ad.appspot.com",
  messagingSenderId: "190466667332",
  appId: "1:190466667332:web:1769f8bdbf79e30f5d9d11"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);