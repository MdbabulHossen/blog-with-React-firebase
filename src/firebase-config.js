import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBMbEbMeyQQ6w7o7i0tlXMD25WrgFgEyBM",
  authDomain: "react-project-a8e96.firebaseapp.com",
  projectId: "react-project-a8e96",
  storageBucket: "react-project-a8e96.appspot.com",
  messagingSenderId: "685470449861",
  appId: "1:685470449861:web:de48374dfadef62ff2f0ac",
  measurementId: "G-WW6HH7KPP2"
};

  const app = initializeApp(firebaseConfig);
  export const db=getFirestore(app);
  export const auth=getAuth()


