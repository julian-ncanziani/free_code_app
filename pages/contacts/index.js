import { db } from "@/server/firebase";
import { collection, query, where, getDocs, doc } from "firebase/firestore";

export default function Contacts({contacts}){
    console.log(contacts);
    return(<div>
        <p>Contacts page</p>
        <p>aqui se desplegaran los contactos guardados en mi API</p>
        <ul>Lista de contactos:
            {contacts.map((contact, index) => {
                return <li key={index}>{contact.name} {contact.lastName}, {contact.address}</li>
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