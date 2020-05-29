import app from 'firebase'

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
}

export default new Firebase();