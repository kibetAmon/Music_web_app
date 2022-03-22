// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
import { FacebookAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";


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
  
 

  /* FACEBOOK LOGIN */
  const provider = new FacebookAuthProvider();
  const auth = getAuth();

 facebook.addEventListener('click', (e) => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      alert(user.displayName);
      alert('Sign in successful');
  
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
  
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
  
      // ...
    });

 });

 /* SIGNING OUT  */
 facebook.addEventListener('click', (e) =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  
  });

