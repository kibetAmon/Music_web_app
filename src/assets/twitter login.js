// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";


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




/* TWITTER SIGN IN */
import { TwitterAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
const provider = new TwitterAuthProvider(app);
const auth = getAuth(app);

twitter.addEventListener('click', (e) => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;

    // The signed-in user info.
    const user = result.user;
    alert(user.displayName);

    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    // ...
  });

});

/* SIGNING OUT */
twitter.addEventListener('click', (e) =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  
  });

