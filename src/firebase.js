// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHvLmsXfwSftT2_EAaACexqJ6diFa4V_k",
  authDomain: "tongariro-cinemas.firebaseapp.com",
  projectId: "tongariro-cinemas",
  storageBucket: "tongariro-cinemas.appspot.com",
  messagingSenderId: "949837569314",
  appId: "1:949837569314:web:3687a499c75fe1d218997b"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)