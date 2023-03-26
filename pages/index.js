import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <Link href={'/'} className={styles.link}>Home</Link> 
          <Link href={'/contacts'} className={styles.link}>Contacts</Link> 
          <Link href={'/about'} className={styles.link}>About</Link>
        </nav>
      </header>
      
      <main className={styles.main}></main>
      <footer>footer</footer>
    </div>
  );
};
