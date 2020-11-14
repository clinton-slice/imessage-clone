import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKuxRu9h5tG7Aayjq8txA2xL79WKL4VIU",
    authDomain: "imessage-clone-8d852.firebaseapp.com",
    databaseURL: "https://imessage-clone-8d852.firebaseio.com",
    projectId: "imessage-clone-8d852",
    storageBucket: "imessage-clone-8d852.appspot.com",
    messagingSenderId: "101939857953",
    appId: "1:101939857953:web:6de0f7962afca397c23160",
    measurementId: "G-ZJ2Z330GRP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const db = firebaseApp.firestore();
  export const auth = firebase.auth();
  export const provider = new firebase.auth.GoogleAuthProvider();

