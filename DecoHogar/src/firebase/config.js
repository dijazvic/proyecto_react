
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0j8OBLmRx6870wW2Ifi6U9tHULS9lpkI",
  authDomain: "proyecto-decohogar.firebaseapp.com",
  projectId: "proyecto-decohogar",
  storageBucket: "proyecto-decohogar.appspot.com",
  messagingSenderId: "438616964875",
  appId: "1:438616964875:web:9c4a3cf246c46f7324ac0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app