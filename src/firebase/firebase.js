// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSUTYLG1GjMkZWJpT12ea4Nu5xq73SIE0",
  authDomain: "eduardo-gutierrez-portfolio.firebaseapp.com",
  projectId: "eduardo-gutierrez-portfolio",
  storageBucket: "eduardo-gutierrez-portfolio.appspot.com",
  messagingSenderId: "1005003123599",
  appId: "1:1005003123599:web:bb7b77ee9712965e81b9fa",
  measurementId: "G-8LK1CYY4P9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const db = getFirestore(app);