
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAQbe-9i2bU8zLPmnDUUNz33ZGC49ZwEt0",
  authDomain: "coderhouse-ecommercevans.firebaseapp.com",
  projectId: "coderhouse-ecommercevans",
  storageBucket: "coderhouse-ecommercevans.firebasestorage.app",
  messagingSenderId: "394131936737",
  appId: "1:394131936737:web:ba30840cfa51e85f4f6ea0"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
