import *as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBe7dPQ0GB4BePgzNyoTQGXR24rYf45BCU",
    authDomain: "praise-land-project.firebaseapp.com",
    databaseURL: "https://praise-land-project.firebaseio.com",
    projectId: "praise-land-project",
    storageBucket: "praise-land-project.appspot.com",
    messagingSenderId: "431110450126",
    appId: "1:431110450126:web:b49663c6e9457705ff199f",
    measurementId: "G-2DJX9VKJM8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { projectStorage, projectFirestore, timestamp };