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

    return(<div className={styles.navbar}>

        <Link href={'/contacts'} className={styles.links}>Contacts</Link> 
        <Link href={'/contacts/form'} className={styles.links}>New contact</Link>
        <Link href={'/contacts/about'} className={styles.links}>About</Link>
       
        {auth ? <button onClick={closeSession} className={styles.exitBtn}>Sing Out</button>: <></>}
        
    </div>);
};