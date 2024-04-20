import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, logEvent, isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "FIREBASE_API",
  authDomain: "FIREBASE_API",
  databaseURL: "FIREBASE_API",
  projectId: "FIREBASE_API",
  storageBucket: "FIREBASE_API",
  messagingSenderId: "FIREBASE_API",
  appId: "FIREBASE_API"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

export { app, firestore, auth, storage };
