// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCw-li0IscS2rJr68dSjoJL3KM3eFq5PfE",
//   authDomain: "twitter-clone-1faac.firebaseapp.com",
//   databaseURL: "https://twitter-clone-1faac.firebaseio.com",
//   projectId: "twitter-clone-1faac",
//   storageBucket: "twitter-clone-1faac.appspot.com",
//   messagingSenderId: "316208638057",
//   appId: "1:316208638057:web:75a37bf24fab32ff145af8",
//   measurementId: "G-HGFP2LDXP9",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

// export default db;

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCw-li0IscS2rJr68dSjoJL3KM3eFq5PfE",
  authDomain: "twitter-clone-1faac.firebaseapp.com",
  databaseURL: "https://twitter-clone-1faac.firebaseio.com",
  projectId: "twitter-clone-1faac",
  storageBucket: "twitter-clone-1faac.appspot.com",
  messagingSenderId: "316208638057",
  appId: "1:316208638057:web:75a37bf24fab32ff145af8",
  measurementId: "G-HGFP2LDXP9",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default { auth, db };