// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvBE26seBF3PH9m9DVwSW03xMsQB8auZI",
  authDomain: "wild-life-photographer-c1735.firebaseapp.com",
  projectId: "wild-life-photographer-c1735",
  storageBucket: "wild-life-photographer-c1735.appspot.com",
  messagingSenderId: "1021257429615",
  appId: "1:1021257429615:web:57fc28d9b9fc2479f5939a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app