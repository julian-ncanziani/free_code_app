
//styles
import styles from '@/styles/Home.module.css';
//next components and dependencies

import {useRouter} from 'next/router';
//components
import Login from '@/components/login/Login';
//react dependencies

//authFirebase dependecies
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {useAuthState} from 'react-firebase-hooks/auth';
import { db } from '@/server/firebase'; //importo la base de datos de firebase ya inicializada aunque no la use epxlicitamente
import { collection, addDoc, doc, setDoc, updateDoc, getDoc, exists } from "firebase/firestore";
//nextj dependencies and components
import Head from 'next/head';

export default function Home() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if(loading){
    return <div>loading...</div>;
  };
 
  if(error){
    return <div>{error}</div>;
  };

  if(user){
    saveLogedUser();
    router.push('/contacts');
  };

 /**
  * Con esta funcion controlo la autenticacion del usuario, se la paso a mi componente
  * login donde esta el button para logearse
  */
  async function singIn(){
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  /**
   * Con esta funcion lo que hago es crear un nuevo usuario en mi base de datos 
   * si todavia no existe
   */
  async function saveLogedUser(){
    try {
      const logUserRef = await doc(db, 'users',user.uid);
      const userSnap = await getDoc(logUserRef);
      if(!userSnap.exists()){
        await setDoc(logUserRef, {name: user.displayName});
        
        console.log('nuevo usuario creado en la DB');
      }
      
    }catch (error) {
      console.log(error, 'saveLogedUser error');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Mi agenda de contactos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Organiza tus contactos
        </h1>

        <p className={styles.description}>
          Con Mi agenda de contactos, puedes guardar y actualizar la información de tus contactos en un solo lugar.
        </p>

        <ul className={styles.features}>
          <li>Guarda los nombres, números de teléfono y correos electrónicos de tus contactos.</li>
          <li>Actualiza la información de tus contactos en cualquier momento.</li>
        </ul>
      </main>
      <div>
      <Login singIn={singIn}></Login>
      <main className={styles.main}></main>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        
      </footer>
    </div>
  );
};
