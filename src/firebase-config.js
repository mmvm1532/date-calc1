// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs3OGdp0jBezDyLpf5P__SaMWQwhT2ig4",
  authDomain: "date-time-8fddc.firebaseapp.com",
  projectId: "date-time-8fddc",
  storageBucket: "date-time-8fddc.appspot.com",
  messagingSenderId: "609651258081",
  appId: "1:609651258081:web:18b8650a2f47f6ba32bda0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exporting Auth APIs from firebase

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();