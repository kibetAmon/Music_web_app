 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
 import { getFirestore } from "firebase/firestore";


 import {
      getAuth, 
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      onAuthStateChanged
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

 /* FIRESTORE */
 const db = getFirestore();
 
 /* CREATING A USER */
 signUpBtn.addEventListener('click',(e) => {

   var email = document.getElementById('Emailtxt').value;
   var password = document.getElementById('passwordtxt').value;

   createUserWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
   // Signed in 
   const user = userCredential.user;

   /* Saving user details
     ---TO DO
   */
   

   alert('Sign up successful');
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;

   alert(errorMessage);
   // ..
 });

 });

 /* USER LOGIN */
 loginBtn.addEventListener('click',(e) => {
    var email = document.getElementById('Emailfield').value;
    var password = document.getElementById('passwordfield').value;
 

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert('User logged in!');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
     

 });

 /* MANAGING USERS */

 const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // get currently signed in user with user object--
    // ...
  } else {
    // User is signed out
    // ...
    //Make changes after user logs in --
  }
});

/* LOGGING OUT A USER */







