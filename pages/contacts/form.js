import { db } from "@/server/firebase"
import { collection, addDoc } from "firebase/firestore"
import { useState } from "react";
export default function Form(){

    const [contact, setNewContact] = useState({
        name: '',
        lastName:'',
        age: null,
        address: ''
    });

    function handleChange(event){
        setNewContact({...contact, [event.target.id]: event.target.value});
    };
    


    async function handleClick(){
        try {
            await addDoc(collection(db,'contacts'),{
                contact
            });
            console.log('contacto creado');
        } catch (error) {
            console.log(error);
        }
    };
    return(<div>
        <p>form contactos</p>
        <input placeholder="name" onChange={(e)=> handleChange(e)} id='name'></input>
        <input placeholder="lastmName" onChange={(e)=> handleChange(e)} id='lastName'></input>
        <input placeholder="age" onChange={(e)=> handleChange(e)} id='age'></input>
        <input placeholder="address" onChange={(e)=> handleChange(e)} id='address'></input>
        <button onClick={()=>handleClick()}>Send data</button>
    </div>)
}