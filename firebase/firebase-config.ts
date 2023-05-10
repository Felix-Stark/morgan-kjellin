// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOTPTRBgvUqb-R28Vd6an-8agIWv3Gvo0",
  authDomain: "morgan-kjellin.firebaseapp.com",
  projectId: "morgan-kjellin",
  storageBucket: "morgan-kjellin.appspot.com",
  messagingSenderId: "364012519910",
  appId: "1:364012519910:web:56b5f327b38e7e10615627",
  measurementId: "G-80BW4EZJ5R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
