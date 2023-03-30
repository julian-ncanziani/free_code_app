//styles
import styles from './NavBar.module.css';
//next components and dependecies
import Link from "next/link"
import { useRouter } from 'next/router';
//firebase dependencies
import { getAuth, signOut } from "firebase/auth";
import { db } from '@/server/firebase';
//react dependencies


export default function NavBar(){
    const router = useRouter();
    const auth = getAuth();
    /**
     * Con esta funcion controlo la autenticacion del usuario
     */
    function closeSession(){
        signOut(auth).then(()=>{
            router.push('/');
        })  
        .catch(err=>console.log(err));
    };

    return(<div>
        {auth ? <button onClick={closeSession}>Sing Out</button>: <></>}
        <Link href={'/contacts'} className={styles.link}>Contacts</Link> 
        <Link href={'/contacts/form'} className={styles.link}>New contact</Link>
        <Link href={'/contacts/about'} className={styles.link}>About</Link>
    </div>);
};