import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { 
    getFirestore,
    connectFirestoreEmulator
 } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnuNdKe9MLqnO8SF1E_b-6WLA6cqDRfgI",
  authDomain: "rttracker-621d1.firebaseapp.com",
  projectId: "rttracker-621d1",
  storageBucket: "rttracker-621d1.firebasestorage.app",
  messagingSenderId: "259362319626",
  appId: "1:259362319626:web:66ed572821f311423bdef3",
  measurementId: "G-XVJQQ8RPXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app)
connectAuthEmulator(auth, "http://localhost:9099")
connectFirestoreEmulator(db, '127.0.0.1', 8080);

export { db, auth }