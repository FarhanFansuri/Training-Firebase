// import {initializeApp} from 'firebase/app';
// import {
//     getFirestore,
//     collection,
//     getDocs
// }from 'firebase/firestore'

import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs, addDoc, onSnapshot, query, where
} from 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApCMZEOh99rqeahCpbsYdo9C7flfa7Dyo",
  authDomain: "base-project-50b37.firebaseapp.com",
  projectId: "base-project-50b37",
  storageBucket: "base-project-50b37.appspot.com",
  messagingSenderId: "559258000175",
  appId: "1:559258000175:web:7c88c1fde7d8df1f9f1fda",
  measurementId: "G-WS2EZJ8D6K"
  };

  //initial firebase
  initializeApp(firebaseConfig);

  //initial service
  const db = getFirestore();

  //collection reference
  const colRef = collection(db,'books');

  //get reference
  const data = document.getElementsByClassName('bookform')[0];

  // //get collection data
  // getDocs(colRef)
  // .then((snapshot)=>{
  //     snapshot.docs.forEach((doc)=>{
  //       console.log(doc.data());
  //     });
  // })
  //queries
  const quer = query(colRef, where("author","==","Jinx"))

  //real time get collection
  onSnapshot(quer, (snapshot)=>{
    snapshot.docs.forEach((doc)=>{
      console.log(doc.data());
    });
  })

  //add collection 
  data.addEventListener('submit',(e)=>{

    e.preventDefault();
    addDoc(colRef,{
      title: data.title.value,
      author: data.author.value
    })
  })



