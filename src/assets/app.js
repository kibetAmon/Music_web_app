// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


import {
     getAuth, 
     signInAnonymously,
     onAuthStateChanged,
     signOut,
     FacebookAuthProvider,
     signInWithPopup,
     TwitterAuthProvider,
     GoogleAuthProvider,
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

//FACEBOOK LOGIN
const provider = new FacebookAuthProvider();

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

 //TWITTER LOGIN
 const twitter = document.getElementById('twitter');
 const twitterprovider = new TwitterAuthProvider(app);
const twitterauth = getAuth(app);

twitter.addEventListener('click', (e) => {
    signInWithPopup(twitterauth, twitterprovider)
  .then((result) => {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;

    // The signed-in user info.
    const user = result.user;
    console.log(user);
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

//GOOGLE LOGIN
const googleprovider = new GoogleAuthProvider(app);
const googleauth = getAuth(app);

google.addEventListener('click',(e) => {

signInWithPopup(googleauth, googleprovider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
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
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert(errorMessage);
  });
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



//LOGOUT EVENT LISTENER
logout.addEventListener('click', e => {
    signOut(auth).then(() => {
        alert('Sign-out successful.');
      }).catch((error) => {
        // An error happened.
      });

});
