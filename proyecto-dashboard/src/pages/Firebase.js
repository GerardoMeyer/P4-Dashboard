// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Tener acceso a la BD
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC-vTO3pMp_UKKPARIAdNAFRPcgeIUE4-E",
  authDomain: "proyecto-dashboard-nuevo.firebaseapp.com",
  projectId: "proyecto-dashboard-nuevo",
  storageBucket: "proyecto-dashboard-nuevo.appspot.com",
  messagingSenderId: "719688665272",
  appId: "1:719688665272:web:42aa57f8befc17efb4cc4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporta la funcionalidad de la base de datos
const db = getFirestore(app)
//exporta la funcionalidad de autenticacion con goolge
export const autenticacion = new GoogleAuthProvider(app)

export {db}
