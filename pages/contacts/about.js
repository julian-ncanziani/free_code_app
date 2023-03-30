//components
import NavBar from "@/components/navBar/NavBar";
//react dependencies
import { useEffect } from "react";
//firebase dependencies
import { db } from "@/server/firebase";
import { getAuth } from "firebase/auth";
//next dependencies and components
import { useReducer } from "react";
import { useRouter } from "next/router";

export default function About(){
    const auth = getAuth();
    const router = useRouter();

    useEffect(()=>{
        if(!auth.currentUser){
            router.push('/');
        }
    },[]);

    return(<div>
        <NavBar></NavBar>
        <p>About page</p>
        <p>Esta pagina pretende ser una agenda de contactos</p>
    </div>);
};