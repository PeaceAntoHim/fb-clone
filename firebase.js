import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCnw5eQ0g4LPJm95qTlWndEXYZqcbCZvAU",
  authDomain: "facebook-clone-91e54.firebaseapp.com",
  projectId: "facebook-clone-91e54",
  storageBucket: "facebook-clone-91e54.appspot.com",
  messagingSenderId: "678096756463",
  appId: "1:678096756463:web:058e06bdfcb31f2c4c451a"
}; 

const app = !firebase.apps.length 
      ? firebase.initializeApp(firebaseConfig)
      : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };