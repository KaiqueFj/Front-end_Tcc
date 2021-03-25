import React, { SyntheticEvent, useState } from "react";
import Layout from "../Layout/Layout";
import { useRouter } from "next/router";
import styles from "../styles/pages/Register.module.css";

const login = () => {
  // definition of variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");

  const router = useRouter();
  // submit function
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    // API connection
    await fetch("http://localhost:3333/password/update/:id", {
      method: "PUT",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        username: username,
        password: password,
        newPassword: newPassword
      }),
    });
  };

  return (
    <Layout>
      <form onSubmit={submit} className={styles.form}>
        <h1>Troca de senha</h1>

        <div className={styles.inputContainer}>
          <img src="img/userPurple.png" />
          <input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <img src="img/password.png" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha antiga"
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <img src="img/password.png" />
          <input
            onChange={(e) => setnewPassword(e.target.value)}
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
    </Layout>
  );
};

export default login;
