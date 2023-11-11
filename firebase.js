/* eslint-disable prettier/prettier */
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCdD3vrsh-uBWZYeDR7BiH8_VI05zcsYTM",
    authDomain: "ubereats-489d4.firebaseapp.com",
    projectId: "ubereats-489d4",
    storageBucket: "ubereats-489d4.appspot.com",
    messagingSenderId: "585947225136",
    appId: "1:585947225136:web:193f066ebd90b54808a1f5"
};

if( !firebase.apps.length ?  firebase.initializeApp(firebaseConfig) : firebase.app());

export default firebase;