import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAP3BOa4jk0NNh87GAylTOwHM86PxgLv_Y",
  authDomain: "ecommerce-react-b0b47.firebaseapp.com",
  projectId: "ecommerce-react-b0b47",
  storageBucket: "ecommerce-react-b0b47.firebasestorage.app",
  messagingSenderId: "887462347789",
  appId: "1:887462347789:web:eb093f040bedeccc688144",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
