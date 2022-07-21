// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return firebaseConfig;
  }
}

// Initialize Firebase
const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);