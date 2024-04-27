// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyDJFZ3ihuU581tgikzlbpxfiql5G3p7o",
  authDomain: "enjoy-freedom-land.firebaseapp.com",
  projectId: "enjoy-freedom-land",
  storageBucket: "enjoy-freedom-land.appspot.com",
  messagingSenderId: "192344053052",
  appId: "1:192344053052:web:f3ca03c7b045c760797a39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;