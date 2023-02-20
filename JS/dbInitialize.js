import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCimJE_2zDbN-sM5B_kKFP6B_MHcjT4p8Y",
  authDomain: "lb151-e3bb2.firebaseapp.com",
  projectId: "lb151-e3bb2",
  storageBucket: "lb151-e3bb2.appspot.com",
  messagingSenderId: "1068295408929",
  appId: "1:1068295408929:web:6639a8b2462e24d2c20260",
  measurementId: "G-TGQB0XSYZ8"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;