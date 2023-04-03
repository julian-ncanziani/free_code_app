//styles
import styles from '../../styles/Form.module.css';
//next dependencies
import { useRouter } from "next/router";
//react dependencies
import { useState, useEffect } from "react";
//componentes
import NavBar from "@/components/navBar/NavBar";
//firebase dependencies
import { db } from "@/server/firebase"
import { collection, addDoc, getDocs } from "firebase/firestore"
import { getAuth } from 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';


export default function Form(){

    const router = useRouter();
    const auth = getAuth();
    const [user, loading, ] = useAuthState(auth);
    const [contact, setNewContact] = useState({
        name: '',
        lastName:'',
        age: null,
        address: ''
    });

    useEffect(() => {
        //const auth = getAuth();
        if(!auth.currentUser){
            router.push('/');
        }
    }, []);

    function handleChange(event){
        setNewContact({...contact, [event.target.id]: event.target.value});
    };
    


    async function handleClick(){
        try {
            await addDoc(collection(db,'contacts'),{...contact, userId: auth.currentUser.uid});
            router.push('/contacts');
        } catch (error) {
            console.log(error);
        }
    };
    return(<div>
        <NavBar></NavBar>
        <div className={styles.form}>
            <p>New contact</p>
            <input placeholder="name" onChange={(e)=> handleChange(e)} id='name' className={styles.formInput}></input>
            <input placeholder="lastmName" onChange={(e)=> handleChange(e)} id='lastName' className={styles.formInput}></input>
            <input placeholder="age" onChange={(e)=> handleChange(e)} id='age' className={styles.formInput}></input>
            <input placeholder="address" onChange={(e)=> handleChange(e)} id='address' className={styles.formInput}></input>
            <button onClick={()=>handleClick()} className={styles.formSubmit}>Send data</button>
        </div>
    </div>);
};

