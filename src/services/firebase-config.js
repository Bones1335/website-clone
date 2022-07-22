import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDC-qKCVNdq-AhTIg8wZP6aOW8lxD84cc",
  authDomain: "reddit-clone-b3c88.firebaseapp.com",
  projectId: "reddit-clone-b3c88",
  storageBucket: "reddit-clone-b3c88.appspot.com",
  messagingSenderId: "15584650174",
  appId: "1:15584650174:web:f6641ebaf17a4cf9c24fef"
};

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error('No Firebase configuration object provided. \nAdd your web app\'s configuration object to firebase-config.js');
  } else {
    return firebaseConfig;
  }
}

// Initialize Firebase
const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);

export async function signInUser() {
  let provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
  console.log('signed in');
}

export function signOutUser() {
  signOut(getAuth());
  console.log('signed out');
}