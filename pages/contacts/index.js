//firebase dependencies
import { db } from "@/server/firebase";
import { collection, query, where, getDoc, doc, exists, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
//nextjs components and dependencies
import { useRouter } from "next/router";
//componentes
import ContactCard from "@/components/contactCard/ContactCard";
import NavBar from "@/components/navBar/NavBar";
//estilos
import styles from '../../styles/Contacts.module.css';
//react dependencies
import { useEffect, useState } from "react";


export default function Contacts(){
    
    const auth = getAuth();
    const router = useRouter();
    const [contacts, setContacts] = useState([]);
    
    useEffect(()=>{
        if(!auth.currentUser){
            router.push('/');
        }else{
            getContacts();
        }
    },[]);

    

    async function getContacts(){
        const contactCollectionRef = await collection(db, 'contacts');
        const contactsQuery = await query(contactCollectionRef, where('userId', '==', auth.currentUser.uid));
        const querySnap = await getDocs(contactsQuery);
        const contactsArr = [];
        querySnap.forEach((doc)=>{
            contactsArr.push({...doc.data(), id: doc.id});
        });
        setContacts(contactsArr);
    };

    return(<div>
        <NavBar/>
        <ul>
            {contacts.length !== 0 ? contacts.map((contact, index) => {
                return <ContactCard key={index} contact={contact}></ContactCard>
            }): <p>Todavia no tienes contactos</p>}
        </ul>
    </div>);
};

