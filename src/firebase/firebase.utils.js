import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDsDWrUTM_fykpYZZTAP1_z2ElqMz9B5Ho",
  authDomain: "crwn-db-fd6d9.firebaseapp.com",
  databaseURL: "https://crwn-db-fd6d9.firebaseio.com",
  projectId: "crwn-db-fd6d9",
  storageBucket: "crwn-db-fd6d9.appspot.com",
  messagingSenderId: "544018177723",
  appId: "1:544018177723:web:95d74104cab4e81eaa139e",
  measurementId: "G-7R81H5PR9G"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;  