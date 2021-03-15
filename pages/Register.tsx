import React, { SyntheticEvent, useState } from "react";
import Layout from "../Layout/Layout";
import { useRouter } from 'next/router';
import styles from '../styles/pages/Register.module.css';

const Register = () => {

    // definition of variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    // submit function
    const submit = async (e: SyntheticEvent) => {

        try {

            e.preventDefault();

            // API connection
            await fetch('http://localhost:3333/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: name,
                    email: email,
                    password: password
                })
            });

            // Change page to...
            await router.push('/Login');

        } catch { 
            window.alert("Error!")
        }


    }

    return (
        <Layout>

            <form onSubmit={submit} className={styles.form}>

                <h1>Registre-se</h1>
                <div className={styles.inputContainer}>
                    <img src="img/userPurple.png" />
                    <input
                        onChange={e => setName(e.target.value)}
                        placeholder="Username"
                        required
                    />
                </div>

                <div className={styles.inputContainer}>
                    <img src="img/userPurple.png" />
                    <input
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>

                <div className={styles.inputContainer}>
                    <img src="img/password.png" />
                    <input
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </div>

                <button type="submit">
                    <img src="img/login.png" />
                    Criar Usuário
                    </button>

            </form>
        </Layout>
    );
};

export default Register;