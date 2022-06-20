import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-9fae2.firebaseapp.com",
  projectId: "twitter-9fae2",
  storageBucket: "twitter-9fae2.appspot.com",
  messagingSenderId: "932290223458",
  appId: "1:932290223458:web:5b3591a7265756a81ea03b",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
