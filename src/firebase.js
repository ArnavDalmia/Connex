import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyClVdynmgp8z5zZ7HdRLoz1gdgaJL_m-Vw",
    authDomain: "connex-26607.firebaseapp.com",
    projectId: "connex-26607",
    storageBucket: "connex-26607.appspot.com",
    messagingSenderId: "964221295651",
    appId: "1:964221295651:web:f0a64a8ddb8527c626e596"
  }).auth();