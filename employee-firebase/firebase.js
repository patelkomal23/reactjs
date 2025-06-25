// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX87XcZu3pRhwRmuCULlUpcp9t-uQgDN0",
  authDomain: "form-firebase-f1bee.firebaseapp.com",
  projectId: "form-firebase-f1bee",
  storageBucket: "form-firebase-f1bee.firebasestorage.app",
  messagingSenderId: "1004526289371",
  appId: "1:1004526289371:web:b56255e6be1858ab7ba7fe",
  databaseURL:"https://form-firebase-f1bee-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)