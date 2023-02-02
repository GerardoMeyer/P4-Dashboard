// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Tener acceso a la BD
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDLY7MDtfqwTrgaW1ZG_e-NBzUupF6Qlf0",
  authDomain: "proyecto-dashboard-40fc6.firebaseapp.com",
  projectId: "proyecto-dashboard-40fc6",
  storageBucket: "proyecto-dashboard-40fc6.appspot.com",
  messagingSenderId: "1080489890497",
  appId: "1:1080489890497:web:636315f528814a7ad0fa40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporta la funcionalidad de la base de datos
const db = getFirestore(app)
//exporta la funcionalidad de autenticacion con goolge
export const autenticacion = new GoogleAuthProvider(app)

export {db}
