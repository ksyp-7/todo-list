import firebase from 'firebase';
import firebaseApp from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD_KVmlxKg_TNsYZmRqZrOCXaESnMvZT7Y",
    authDomain: "todo-list-f923b.firebaseapp.com",
    projectId: "todo-list-f923b",
    storageBucket: "todo-list-f923b.appspot.com",
    messagingSenderId: "496725060989",
    appId: "1:496725060989:web:e4c51d305c6068eebef014",
    measurementId: "G-MF1LVP6P6R"
  });

const db = firebaseApp.firestore();

export default db;