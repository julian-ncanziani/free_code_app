//firebase dependencies
import { db } from "@/server/firebase";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
//nextjs components and dependencies
import { useRouter } from "next/router";
//componentes
import ContactCard from "@/components/contactCard/ContactCard";
import NavBar from "@/components/navBar/NavBar";
//estilos
import styles from '../../styles/Contacts.module.css';
//react dependencies
import { useEffect } from "react";


export default function Contacts({contacts}){
    
    const auth = getAuth();
    const router = useRouter();
    
    useEffect(()=>{
        if(!auth.currentUser){
            router.push('/');
        }
    },[]);

    return(<div>
        <NavBar></NavBar>
        <ul className={styles.contactsConteiner}>
            {contacts.length !== 0 ? contacts.map((contact, index) => {
                return <ContactCard key={index} contact={contact}></ContactCard>
            }): <p>Todavia no tienes contactos</p>}
        </ul>
    </div>);
};

export async function getServerSideProps(context){
    

    const querySnapshot = await getDocs(collection(db, 'contacts'));
    const docs = [];
    
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    docs.push({...doc.data().contact, id: doc.id})
    });

    
   return({
        props:{
            contacts: docs
        }
    })
}