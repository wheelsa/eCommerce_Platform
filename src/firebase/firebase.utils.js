import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyABxY0B8Da-X72SdFJcuBDpL4H_-pBzD8I",
  authDomain: "ecommerce-a576d.firebaseapp.com",
  databaseURL: "https://ecommerce-a576d.firebaseio.com",
  projectId: "ecommerce-a576d",
  storageBucket: "ecommerce-a576d.appspot.com",
  messagingSenderId: "825707936660",
  appId: "1:825707936660:web:0c91aac5afb2a078742d81"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;