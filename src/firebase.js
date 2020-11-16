import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8V_ofLPW_wUNNGt20em1Lmt_uf84_K_c",
  authDomain: "react-imessage-clone-4e027.firebaseapp.com",
  databaseURL: "https://react-imessage-clone-4e027.firebaseio.com",
  projectId: "react-imessage-clone-4e027",
  storageBucket: "react-imessage-clone-4e027.appspot.com",
  messagingSenderId: "364934958695",
  appId: "1:364934958695:web:a64ca6764e4ed96a268ec2",
  measurementId: "G-BJWKY3NQS0"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const db = firebaseApp.firestore();
  export const auth = firebase.auth();
  export const provider = new firebase.auth.GoogleAuthProvider();

