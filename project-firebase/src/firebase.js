// Config file
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2XbQ5qQpKC5QQzYHgnyIse2njIXktyA4",
  authDomain: "react-firebase-bd053.firebaseapp.com",
  databaseURL: "https://react-firebase-bd053.firebaseio.com",
  projectId: "react-firebase-bd053",
  storageBucket: "react-firebase-bd053.appspot.com",
  messagingSenderId: "565309572335",
  appId: "1:565309572335:web:fcb679e5e2f3ea8a4e471a",
  measurementId: "G-23QZYSG85N"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();