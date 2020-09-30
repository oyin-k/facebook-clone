import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6CzLAWxuVJ8cW5T-7uxqKPO7X-au1weE",
  authDomain: "facebook-clone-5a7e5.firebaseapp.com",
  databaseURL: "https://facebook-clone-5a7e5.firebaseio.com",
  projectId: "facebook-clone-5a7e5",
  storageBucket: "facebook-clone-5a7e5.appspot.com",
  messagingSenderId: "101083598247",
  appId: "1:101083598247:web:b318856dfdb96db8b67a82",
  measurementId: "G-GDVV6D0JFX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
