import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const NEXT_PUBLIC_AUTH_DOMAIN = process.env.NEXT_PUBLIC_AUTH_DOMAIN;    
const NEXT_PUBLIC_PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;
const NEXT_PUBLIC_STORAGE_BUKET = process.env.NEXT_PUBLIC_STORAGE_BUKET;
const NEXT_PUBLIC_MESSAGING_SENDER_ID = process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID;
const NEXT_PUBLIC_APP_ID = process.env.NEXT_PUBLIC_APP_ID;
const NEXT_PUBLIC_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;


const firebaseConfig = {
  // Aquí debes agregar la configuración de tu proyecto Firebase
  apiKey: NEXT_PUBLIC_API_KEY,
  authDomain: NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: NEXT_PUBLIC_PROJECT_ID,
  storageBucket: NEXT_PUBLIC_STORAGE_BUKET,
  messagingSenderId: NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: NEXT_PUBLIC_APP_ID,
  measurementId: NEXT_PUBLIC_MEASUREMENT_ID
};



// Initialize Cloud Firestore and get a reference to the service
export const app = initializeApp(firebaseConfig);

/**
* @constant db: Tengo que importar la base de datos aunque depsues no la temrine usando epxlicitamente en el codigo
 */
export const db = getFirestore(app);





