import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
    {
        apiKey: "AIzaSyD3aEkMk-85Xcz6LbjA-htQzT3rvxJPJ4s",
        authDomain: "crwn-db-8b07e.firebaseapp.com",
        databaseURL: "https://crwn-db-8b07e.firebaseio.com",
        projectId: "crwn-db-8b07e",
        storageBucket: "",
        messagingSenderId: "382725874210",
        appId: "1:382725874210:web:5442cf913b886784"
    }

    firebase.initializeApp(config);
    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({prompt : 'select_account'});
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;