import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAat2Y2vz10b0Rq2TP92m2kRGpPecz71mg",
  authDomain: "netflix-44cee.firebaseapp.com",
  projectId: "netflix-44cee",
  storageBucket: "netflix-44cee.appspot.com",
  messagingSenderId: "779333544604",
  appId: "1:779333544604:web:016dcb9f4059d06d459b59",
  measurementId: "G-ZBNEXD9D6F"
};

 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth = getAuth(app);
export const firestore = getFirestore(app)