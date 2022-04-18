// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaNgvdDI8ltCgE99LcN8IoBTiqMFFalYU",
  authDomain: "wild-life-photography-6822c.firebaseapp.com",
  projectId: "wild-life-photography-6822c",
  storageBucket: "wild-life-photography-6822c.appspot.com",
  messagingSenderId: "758416591638",
  appId: "1:758416591638:web:6c9407ad22833ab51e1e37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
