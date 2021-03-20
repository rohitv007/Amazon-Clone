import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8naZ6Y2IA06vnebid9OFexnrBf7ddoa8",
    authDomain: "clone-8b94c.firebaseapp.com",
    databaseURL: "https://clone-8b94c.firebaseio.com",
    projectId: "clone-8b94c",
    storageBucket: "clone-8b94c.appspot.com",
    messagingSenderId: "581093863360",
    appId: "1:581093863360:web:1d9ccd33b445338de82225",
    measurementId: "G-MZB3PEV4BR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const auth = firebase.auth();


export { db, auth }