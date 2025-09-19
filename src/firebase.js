// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKQNionDJHGApfKhx5elqy-XBZFaXFm98",
  authDomain: "alsufitravels-b809b.firebaseapp.com",
  projectId: "alsufitravels-b809b",
  storageBucket: "alsufitravels-b809b.firebasestorage.app",
  messagingSenderId: "438854015590",
  appId: "1:438854015590:web:426ee933ac028aa22eeba7",
  measurementId: "G-KRS53N56KG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
