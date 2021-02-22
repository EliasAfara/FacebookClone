import firebase from 'firebase/app';
import 'firebase/auth'; // for authentication
import 'firebase/firestore'; // for cloud firestore

const firebaseConfig = {
  apiKey: 'AIzaSyBb9NUVLg8ThRaF6XmLfxiyXS1-Fq6mUk4',
  authDomain: 'facebook-clone-8f0b2.firebaseapp.com',
  projectId: 'facebook-clone-8f0b2',
  storageBucket: 'facebook-clone-8f0b2.appspot.com',
  messagingSenderId: '571498687854',
  appId: '1:571498687854:web:06df7bb6199d2c33ea257f',
  measurementId: 'G-DYEMB23WDS',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
