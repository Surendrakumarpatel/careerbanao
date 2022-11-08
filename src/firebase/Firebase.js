// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
 
const firebaseConfig = {
  apiKey: "AIzaSyB_980hp5kxx_1gthuhaqJXK8GnkiP7Tfo",
  authDomain: "career-banao-8d28b.firebaseapp.com",
  nextAuthDomain:"http://preprod.kalkaprasad.com",
  projectId: "career-banao-8d28b",
  storageBucket: "career-banao-8d28b.appspot.com",
  messagingSenderId: "802663630186",
  appId: "1:802663630186:web:52d340087705aa023d1113"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
 