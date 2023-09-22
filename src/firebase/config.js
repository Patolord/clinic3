import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBViFwaBcnew8NhPPL0WaZuKZQHUf2ZStw",
  authDomain: "clinic3-215a7.firebaseapp.com",
  projectId: "clinic3-215a7",
  storageBucket: "clinic3-215a7.appspot.com",
  messagingSenderId: "262761933771",
  appId: "1:262761933771:web:5916587efd89550f5da44e",
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
