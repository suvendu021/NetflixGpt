/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKlE1U5zs2HN9nDnwMZDQmiYsqa9HzLtE",
  authDomain: "netflixgpt-16fcf.firebaseapp.com",
  projectId: "netflixgpt-16fcf",
  storageBucket: "netflixgpt-16fcf.appspot.com",
  messagingSenderId: "726201474441",
  appId: "1:726201474441:web:c08167556d2345e31fd558",
  measurementId: "G-T9YLTBECLX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
