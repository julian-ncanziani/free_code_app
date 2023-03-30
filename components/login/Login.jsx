import React, { useState } from 'react';
import styles from './Login.module.css';


export default function Login({singIn}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 

  return (
    <div className={styles['login-form']}>
      
      <br />
      <button onClick={singIn}>Login with Google</button>
    </div>
  );
};


