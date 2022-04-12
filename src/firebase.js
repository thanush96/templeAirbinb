import firebase from "firebase";
// import { seedDatabase } from "./seed";

var firebaseConfig = {
  apiKey: "AIzaSyBKpAtvFvlIVY2MNELS4c1lNEpjEbeAEyE",
  authDomain: "thirukovil-1efca.firebaseapp.com",
  projectId: "thirukovil-1efca",
  storageBucket: "thirukovil-1efca.appspot.com",
  messagingSenderId: "644083967209",
  appId: "1:644083967209:web:4a492766d34e795fe4fc78",
  measurementId: "G-EPFN9K6TLJ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const myFirebase = firebase;
const myFirestore = firebase.firestore();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

// seedDatabase(firebase);

export { auth, provider, myFirebase, myFirestore, storage };
