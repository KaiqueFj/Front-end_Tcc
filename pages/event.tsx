import React, { SyntheticEvent, useState } from "react";
import Layout from "../Layout/Layout";
import styles from "../styles/pages/Register.module.css";

const Event = () => {
  //Variables
  const [day, setDay] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    // Get token in LocalStorage
    const token = localStorage.getItem("token");

    // API connection
    const indexLogged = await fetch("http://localhost:3333/event/ap", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        day: day,
      }),
    });

    // Get JSON information and save in variables line (7-9)
    const indexInformationJSON = await indexLogged.json();

    setDay(indexInformationJSON.day);
    setTitle(indexInformationJSON.title);
    setLocation(indexInformationJSON.location);
    setDate(indexInformationJSON.date);
    setTime(indexInformationJSON.time);

    console.log(indexInformationJSON);
    return indexInformationJSON;
  };

  return (
    <Layout>
      <h1>Seus remedios: {title}</h1>
      <h1>seu broxa: {location}</h1>
      <h1>data pra foder: {date}</h1>
      <h1>horario da foda: {time}</h1>

      <form onSubmit={submit} className={styles.form}>
        <h1>Login</h1>

        <div className={styles.inputContainer}>
          <img src="img/userPurple.png" />
          <input
            onChange={(e) => setDay(e.target.value)}
            placeholder="dia da semana"
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

export default Event;
