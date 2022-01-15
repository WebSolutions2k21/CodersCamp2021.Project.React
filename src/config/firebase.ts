import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBbBjtlQStDl5AZLkw-D6LIWWzP34R9tQk",
  authDomain: "puppylog-5103b.firebaseapp.com",
  databaseURL: "https://puppylog-5103b-default-rtdb.firebaseio.com",
  projectId: "puppylog-5103b",
  storageBucket: "puppylog-5103b.appspot.com",
  messagingSenderId: "1028974743015",
  appId: "1:1028974743015:web:96a766f3c0f9174cec0142",
  measurementId: "G-MV3WGJZBCL",
});

const database = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { database, auth };
// import firebase from "firebase";
// import 'firebase/auth';
// import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// }

// // Initialize Firebase

// const Firebase = firebase.initializeApp(firebaseConfig.firebase)