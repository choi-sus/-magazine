import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA0PoCi6DIyGTJwN83kOGsi8Bcx-LHVA8k",
    authDomain: "react-magazine-1e888.firebaseapp.com",
    projectId: "react-magazine-1e888",
    storageBucket: "react-magazine-1e888.appspot.com",
    messagingSenderId: "527719038545",
    appId: "1:527719038545:web:10452e2edb2630034e8270",
    measurementId: "G-YPV1L2BVKY"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, apiKey, firestore, storage };