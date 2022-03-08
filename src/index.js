// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFjkAVqN4KyDNlTFp38os0GypQx3UwkaE",
  authDomain: "musicapp-6067.firebaseapp.com",
  projectId: "musicapp-6067",
  storageBucket: "musicapp-6067.appspot.com",
  messagingSenderId: "894117495357",
  appId: "1:894117495357:web:a0ed6fac4091e998462054",
  measurementId: "G-NEMSTR10JL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);