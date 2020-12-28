import firebase from 'firebase'
import'firebase/firestore'

 var firebaseConfig = {
    apiKey: "AIzaSyCrIxLTBdSgt0PmwEzwGrBqpk7voRBwZYs",
    authDomain: "fir-app-f8083.firebaseapp.com",
    projectId: "fir-app-f8083",
    storageBucket: "fir-app-f8083.appspot.com",
    messagingSenderId: "255261503590",
    appId: "1:255261503590:web:97eba2603c3299dbf0bda7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

  export default {firebase, db}