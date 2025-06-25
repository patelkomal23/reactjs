// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDy8ZemdTSrz2etyEuHRQSe9zjcMtCwh2M",
  authDomain: "fir-1-c4779.firebaseapp.com",
  databaseURL: "https://fir-react-a4480-default-rtdb.firebaseio.com/",
  projectId: "fir-1-c4779",
  storageBucket: "fir-1-c4779.appspot.com",  // fixed storageBucket domain
  messagingSenderId: "108587322148",
  appId: "1:108587322148:web:a4848fae6194b8a72e01b1"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);