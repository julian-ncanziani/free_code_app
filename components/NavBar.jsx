import Link from "next/link"
import styles from './NavBar.module.css';

export default function NavBar(){
    return(<div>
        <Link href={'/'} className={styles.link}>Home</Link> 
        <Link href={'/contacts'} className={styles.link}>Contacts</Link> 
        <Link href={'contacts/form'} className={styles.link}>New contact</Link>
        <Link href={'/about'} className={styles.link}>About</Link>
    </div>);
};