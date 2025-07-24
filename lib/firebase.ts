import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB38-rq24itcb8ps7iMxvbJYwn2q-vQOtE",
  authDomain: "film-b38ba.firebaseapp.com",
  projectId: "film-b38ba",
  storageBucket: "film-b38ba.firebasestorage.app",
  messagingSenderId: "411137058821",
  appId: "1:411137058821:web:1f7c68401df86c64db546c",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };