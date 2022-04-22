// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhsW4RQ0y0IsdKZ-hzZ5iAr9zenbf7icA",
  authDomain: "sadhanap-2a07c.firebaseapp.com",
  databaseURL: "https://sadhanap-2a07c-default-rtdb.firebaseio.com",
  projectId: "sadhanap-2a07c",
  storageBucket: "sadhanap-2a07c.appspot.com",
  messagingSenderId: "924230686466",
  appId: "1:924230686466:web:5dc9a78f6daf484f4b141b",
  measurementId: "G-KXJXBZF3MV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);