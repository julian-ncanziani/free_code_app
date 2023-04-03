import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  // Aquí debes agregar la configuración de tu proyecto Firebase
  apiKey: "AIzaSyAI-q22-5pAGIRXQJvdPbIbg_bEq2x36gc",
  authDomain: "free-code-app-db.firebaseapp.com",
  projectId: "free-code-app-db",
  storageBucket: "free-code-app-db.appspot.com",
  messagingSenderId: "95351451389",
  appId: "1:95351451389:web:f636e44fc9e6fcf739d894",
  measurementId: "G-NCM34QY6Z4"
};



// Initialize Cloud Firestore and get a reference to the service
export const app = initializeApp(firebaseConfig);

/**
* @constant db: Tengo que importar la base de datos aunque depsues no la temrine usando epxlicitamente en el codigo
 */
export const db = getFirestore(app);





