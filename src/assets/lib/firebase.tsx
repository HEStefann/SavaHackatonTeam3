// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlY3uLyDiBJhLdt9nK6gy4HEVkTNpCqXc",
  authDomain: "sava-1e9bc.firebaseapp.com",
  projectId: "sava-1e9bc",
  storageBucket: "sava-1e9bc.appspot.com",
  messagingSenderId: "753307823682",
  appId: "1:753307823682:web:37023e9c86cd3a407447db",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

googleAuthProvider.setCustomParameters({
  prompt: "select_account ",
});

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleAuthProvider);
