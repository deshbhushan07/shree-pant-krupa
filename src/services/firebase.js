import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAl8PHbEFc-e15zzHTq_hIM6gikxv5meGU",
  authDomain: "pant-krupa-paperboard.firebaseapp.com",
  projectId: "pant-krupa-paperboard",
  storageBucket: "pant-krupa-paperboard.firebasestorage.app",
  messagingSenderId: "924556723281",
  appId: "1:924556723281:web:3cff254321c0d486b0a470",
  measurementId: "G-Z2Y4ZZD09C"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;