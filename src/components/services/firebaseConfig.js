// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from  "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey: "AIzaSyC9DvVbtjRj0JNHkX374-52PkVaIPJhoPg",
  authDomain: "willyscoffeeshop-544a7.firebaseapp.com",
  projectId: "willyscoffeeshop-544a7",
  storageBucket: "willyscoffeeshop-544a7.appspot.com",
  messagingSenderId: "497424136126",
  appId: "1:497424136126:web:fafef183998f6b60556bef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)