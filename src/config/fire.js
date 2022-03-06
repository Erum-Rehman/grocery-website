import { initializeApp } from "firebase/app";
import 'firebase/auth';

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
const fire = initializeApp(firebaseConfig);

export default fire;
