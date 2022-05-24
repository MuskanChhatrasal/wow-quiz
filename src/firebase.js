// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_HLoR4MxAgu5RrVdCkRGu87wbxx1cg9g",
  authDomain: "wow-quiz-5c95a.firebaseapp.com",
  projectId: "wow-quiz-5c95a",
  storageBucket: "wow-quiz-5c95a.appspot.com",
  messagingSenderId: "1030748727794",
  appId: "1:1030748727794:web:89885b5c6a539d34d6636b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
