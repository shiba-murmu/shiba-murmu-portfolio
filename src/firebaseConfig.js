// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGsWvf5MIqIOVu3oqLBsz6dnMxmlI-sRs",
  authDomain: "shiba-murmu-portfolio.firebaseapp.com",
  projectId: "shiba-murmu-portfolio",
  storageBucket: "shiba-murmu-portfolio.firebasestorage.app",
  messagingSenderId: "400139639114",
  appId: "1:400139639114:web:1e49134492b043c45e09b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();