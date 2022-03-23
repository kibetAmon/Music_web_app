// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


import {
     getAuth, 
     signInAnonymously,
     onAuthStateChanged,
     signOut
   } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFjkAVqN4KyDNlTFp38os0GypQx3UwkaE",
  authDomain: "musicapp-6067.firebaseapp.com",
  databaseURL: "https://musicapp-6067-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "musicapp-6067",
  storageBucket: "musicapp-6067.appspot.com",
  messagingSenderId: "894117495357",
  appId: "1:894117495357:web:594cd8f42328c7e5462054",
  measurementId: "G-R90P5L32L8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

//Get the element
const anonymous = document.getElementById('anonymous');
const logout = document.getElementById('logout');

//click event listener
anonymous.addEventListener('click', e => {
    signInAnonymously(auth)
  .then(() => {
    // Signed in..
    alert('Signed in Successfully');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
  //user data
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(user);
    logout.classList.remove('hide');
  } else {
    // User is signed out
    logout.classList.add('hide');
  }
});
});

//logout event listener
logout.addEventListener('click', e => {
    signOut(auth).then(() => {
        alert('Sign-out successful.');
      }).catch((error) => {
        // An error happened.
      });

});
