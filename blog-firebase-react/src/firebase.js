import app from 'firebase/app'
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyDoN_mRbgYiN3AqFvbnZfK_yfxZ-Dkrg_E",
  authDomain: "blog-react-firebase-fbf6e.firebaseapp.com",
  databaseURL: "https://blog-react-firebase-fbf6e.firebaseio.com",
  projectId: "blog-react-firebase-fbf6e",
  storageBucket: "blog-react-firebase-fbf6e.appspot.com",
  messagingSenderId: "97356996253",
  appId: "1:97356996253:web:75f12a82339e51b2de3e74",
  measurementId: "G-M2FLVLX84B"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.app = app.database();
    this.storage = app.storage();
  }

  login(email, password) {
    return app.auth().signInWithEmailAndPassword(email, password)
  }

  register(email, password) {
    return app.auth().createUserWithEmailAndPassword(email, password)
  }

  getCurrent(){
    return app.auth().currentUser && app.auth().currentUser.email
  }

  logout(){
    return app.auth().signOut();
  }
}

export default new Firebase();