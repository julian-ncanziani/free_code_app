import { db } from "@/server/firebase";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import ContactCard from "@/components/ContactCard";
import styles from '../../styles/Contacts.module.css';


export default function Contacts({contacts}){
    
    return(<div>
        <ul className={styles.contactsConteiner}>
            {contacts.map((contact, index) => {
                return <ContactCard key={index} contact={contact}></ContactCard>
            })}
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