// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, 
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
      onAuthStateChanged,
      GoogleAuthProvider,
      FacebookAuthProvider,
      signInWithCustomToken
     } from "firebase/auth";
      import { getDatabase, 
        set, 
        push,  
        remove, 
        ref, 
        onValue, 
        onChildAdded, 
        child,
        get
        } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG__iHC8Zgrgt5qrpsZlzBIAkQH0gzaEA",
  authDomain: "grocery-website-589ba.firebaseapp.com",
  databaseURL: "https://grocery-website-589ba-default-rtdb.firebaseio.com",
  projectId: "grocery-website-589ba",
  storageBucket: "grocery-website-589ba.appspot.com",
  messagingSenderId: "473703206218",
  appId: "1:473703206218:web:bbe5dd25aea91653c1c5b3",
  measurementId: "G-T0R9M835QT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, 
         db,  
    GoogleAuthProvider, 
    FacebookAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    set, 
    push,   
    remove, 
    ref, 
    get,
    onValue, 
    onChildAdded,  
    child,
    signInWithCustomToken,
    getAuth
}; 