import React, { SyntheticEvent, useState } from "react";
import Layout from "../Layout/Layout";
import { useRouter } from "next/router";
import styles from "../styles/pages/Register.module.css";

const login = () => {
  // definition of variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const router = useRouter();
  // submit function
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    // API connection
     await fetch("http://localhost:3333/users/password", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,

      }),
    });

}
  

  return (
    <Layout>
      <form onSubmit={submit} className={styles.form}>
        <h1>Troca de senha</h1>


        <div className={styles.inputContainer}>
          <img src="img/userPurple.png" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <img src="img/password.png" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Nova senha"
            required
          />
        </div>

    

        <button type="submit">
          <img src="img/login.png" />
          Trocar senha
        </button>
      </form>
      <a href="/Login ">esqueceu sua senha ? clique aqui</a>
    </Layout>
  );
}

export default login;