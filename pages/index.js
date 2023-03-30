
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
import { db } from '@/server/firebase'; //importo la base de datos de firebase ya inicializada

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

  return (
    <div>
      <Login singIn={singIn}></Login>
      <main className={styles.main}></main>
      <footer>footer</footer>
    </div>
  );
};
