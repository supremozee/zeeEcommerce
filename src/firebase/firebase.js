import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBqJr60ODBvNq1wHe1zOff1CIKdnjmX6Js",
    authDomain: "zeeshop-76aa8.firebaseapp.com",
    projectId: "zeeshop-76aa8",
    storageBucket: "zeeshop-76aa8.appspot.com",
    messagingSenderId: "925659172897",
    appId: "1:925659172897:web:5c8d50daa4164878589360",
    measurementId: "G-Y87XEKXF9N"
  };
 
firebase.initializeApp(config)
export const auth =  firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: "select_account"})
export const signinWithGoogle = ()=> auth.signInWithPopup(provider)