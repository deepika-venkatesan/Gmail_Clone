import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyClgtwrEEz0GNm3VvswvkfYY9o1ScHC3Kg",
  authDomain: "clone-186c9.firebaseapp.com",
  projectId: "clone-186c9",
  storageBucket: "clone-186c9.appspot.com",
  messagingSenderId: "564183232695",
  appId: "1:564183232695:web:b581352573e3d778581d32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}
