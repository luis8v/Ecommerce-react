// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYdF4Qn4ZiR5Zw5TEIOGaay9mxUxES_Y0",
  authDomain: "ecommerce-nemotec.firebaseapp.com",
  projectId: "ecommerce-nemotec",
  storageBucket: "ecommerce-nemotec.appspot.com",
  messagingSenderId: "269235174576",
  appId: "1:269235174576:web:a7a93ffc9c64f30c7c0f75",
  measurementId: "G-3CV1T2XXW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);