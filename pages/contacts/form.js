import { db } from "@/server/firebase"
import { collection, addDoc } from "firebase/firestore"
import { useState } from "react";
import styles from '../../styles/Form.module.css';

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
    return(<div className={styles.form}>
        <p>New contact</p>
        <input placeholder="name" onChange={(e)=> handleChange(e)} id='name' className={styles.formInput}></input>
        <input placeholder="lastmName" onChange={(e)=> handleChange(e)} id='lastName' className={styles.formInput}></input>
        <input placeholder="age" onChange={(e)=> handleChange(e)} id='age' className={styles.formInput}></input>
        <input placeholder="address" onChange={(e)=> handleChange(e)} id='address' className={styles.formInput}></input>
        <button onClick={()=>handleClick()} className={styles.formSubmit}>Send data</button>
    </div>)
}