import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
{
    apiKey: "AIzaSyCNgyTfJAtiBFicfXrexM2nnOPDlYrhqEg",
    authDomain: "crwn-db-820c2.firebaseapp.com",
    databaseURL: "https://crwn-db-820c2.firebaseio.com",
    projectId: "crwn-db-820c2",
    storageBucket: "",
    messagingSenderId: "818595026230",
    appId: "1:818595026230:web:5275a36b6170b199"
  };

    firebase.initializeApp(config);
    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt : 'select_account' });
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;