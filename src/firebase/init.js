// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzRxz8htoOlwVXuwubae_CdocYvMxMVA4",
  authDomain: "udemy-ninja-chat-c34a0.firebaseapp.com",
  projectId: "udemy-ninja-chat-c34a0",
  storageBucket: "udemy-ninja-chat-c34a0.appspot.com",
  messagingSenderId: "662248280788",
  appId: "1:662248280788:web:9dd68ce84c17781a57e141"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// app.firestore().settings({ timestampsInSnapshots: true });

export default app.firestore();