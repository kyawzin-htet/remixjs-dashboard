import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtzrsXobfCJAzXkFqlCjk4DANb96fD8Qw",
  authDomain: "tabby-70020.firebaseapp.com",
  projectId: "tabby-70020",
  storageBucket: "tabby-70020.appspot.com",
  messagingSenderId: "375952539836",
  appId: "1:375952539836:web:dc7d3177f4c4490ba790b9"
};

const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
