import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"; // Imports for Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  // ... your Firebase project configuration
  apiKey: "AIzaSyCZxFnFDFr2QVUs0FuE1bhEiSMedRIrQfk",
  authDomain: "tree-form-9835a.firebaseapp.com",
  projectId: "tree-form-9835a",
  storageBucket: "tree-form-9835a.appspot.com",
  messagingSenderId: "557591771590",
  appId: "1:557591771590:web:20cc72ab3faa4c13169ac7",
};

// Initialize Firebase app (assuming it's already done in your main app)
const app = initializeApp(firebaseConfig); // If not initialized elsewhere

export const db = getFirestore(app);
