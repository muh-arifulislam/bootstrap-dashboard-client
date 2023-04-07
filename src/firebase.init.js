// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDugbgdsNDBrT4sJP7u_9tojLTF_OhZxcM",
  authDomain: "dashboard-assignment-1618d.firebaseapp.com",
  projectId: "dashboard-assignment-1618d",
  storageBucket: "dashboard-assignment-1618d.appspot.com",
  messagingSenderId: "562597135060",
  appId: "1:562597135060:web:db85567d9693ee6588f141",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;